import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import { Config } from '../../../shared/Config';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import ReactDOM from 'react-dom';
import { PageQueryType } from '../../../shared/models/PageQueryType';
import Logger from '../Logger';
import { StadiaGameDB } from '../StadiaGameDB';
import GameCard from './shared/GameCard';
import StadiaPage from '../StadiaPage';

interface GameUpdateComponentState extends DefaultState {
    userId: string | null
    finished: boolean
    progress: number
    goal: number,
    games: { name: string, poster: string | null, offsets: { x: number, y: number } }[],
}

export default class PageUpdateComponent extends AbstractComponent<DefaultProps, GameUpdateComponentState> {
    remainingIds: string[] = [];
    active: boolean = true;
    userId: string | null = null;

    constructor() {
        super({
            name: 'Page Update Component',
            useReact: true,
            pageFilter: [ StadiaPage.HOME ]
        });
        this.state = {
            renderer: null,
            userId: null,
            finished: false,
            progress: 0,
            goal: 0,
            games: [],
        };
    }

    async onConnect() {
        const url: URL = new URL(location.href);
        const pageQueryType: PageQueryType = parseInt(url.searchParams.get('pqt') as string);

        if (!url.searchParams.has('pqt') || pageQueryType !== PageQueryType.UPDATE) {
            this.active = false;
            return;
        }

        this.setupVariables();

        document.querySelectorAll('body>*:not(#stadiaplus-root)')
            .forEach(element => {
                if (element instanceof HTMLElement) {
                    element.style.display = 'none';
                }
            });

        // After some experimentation, it seems like 3000ms is the optimal interval for updating games.
        // It's fast enough to update games in somewhat of an efficient fashion,
        // but slow enough for the user not to get stuck in the ratelimit.
        setInterval(this.nextGame.bind(this), 3000);
    }

    async setupVariables() {
        await this.updateRemainingIds();

        // For whatever reason, this HAS to be placed below any `await` calls
        this.userId = document.querySelector('.ksZYgc.VGZcUb')!.getAttribute('data-player-id');

        document.querySelectorAll('body>*:not(#stadiaplus-root)')
            .forEach(element => element.remove());
    }

    async updateRemainingIds() {
        const _remainingIds = await Config.GAME_UPDATES.get();
        this.remainingIds = _remainingIds || [];

        this.setState(() => ({
            goal: this.remainingIds.length,
        }));
    }

    async nextGame() {
        if (!this.active || this.userId === null) return;

        if (this.remainingIds.length === 0) {
            console.log('finished');
            this.setState(() => ({ finished: true }));
            this.active = false;
        } else {
            const gameId = this.remainingIds.pop() as string;

            try {
                await StadiaPlusDB.updateGameProgress(this.userId, gameId);
            }
            catch (e) {
                if (e === '429') {
                    this.remainingIds.unshift(gameId);
                }
            }

            const dbGame = await StadiaGameDB.games[gameId];
            if(!dbGame) {
                return;
            }

            const gameEntry = {
                name: dbGame.name,
                poster: dbGame.img,
                offsets: {
                    x: (Math.random()-0.5) * window.innerWidth,
                    y: (Math.random()-0.5) * window.innerHeight,
                },
            };


            const _games = this.state.games || [];
            _games.push(gameEntry);
            this.setState(state => ({
                progress: state.goal - this.remainingIds.length,
                games: _games,
            }));
        }
    }

    render(): null | React.ReactPortal {
        if (!this.state.active) return null;

        return ReactDOM.createPortal(
            <Wrapper>
                <Heading>Syncing your games... ({this.state.progress}/{this.state.goal})</Heading>

                <GameGrid
                    style={{
                        gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(this.state.goal) + 1)}, minmax(0, 1fr))`,
                        gridTemplateRows: `repeat(${Math.floor(Math.sqrt(this.state.goal))}, minmax(0, 1fr))`,
                    }}
                >
                    {
                        this.state.games === undefined
                            ? null
                            : this.state.games.map(game => {
                                if (game.poster != null) {
                                    return <GameCard
                                        finished={this.state.finished}
                                        offsetX={game.offsets.x}
                                        offsetY={game.offsets.y}
                                        scale={2}
                                        src={game.poster}
                                    />;
                                }
                            })

                    }
                </GameGrid>
            </Wrapper>,
            document.getElementById('stadiaplus-root')!,
        );
    }
}

const Wrapper = styled.div`
  ${tw`
    w-screen
    h-screen
    
    flex
    justify-center
    items-center
  `}
  background-color: #202124;
`;

const Heading = styled.h1`
  ${tw`
    text-4xl
  `}
  font-family: 'Overpass', sans-serif;
`;

const GameGrid = styled.div`
  ${tw`
    grid
    gap-4

    absolute
    left-1/2
    top-1/2
    
    transform
    -translate-x-1/2
    -translate-y-1/2
  `}
`;