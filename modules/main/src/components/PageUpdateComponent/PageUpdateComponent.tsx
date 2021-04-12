import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Config } from '../../../../shared/Config';
import { StadiaPlusDB } from '../../../../shared/StadiaPlusDB';
import ReactDOM from 'react-dom';
import { StadiaGameDB } from '../../StadiaGameDB';
import GameCard from './GameCard';
import { onAuthenticated } from '../../events/AuthenticatedEvent';

type PageUpdateGame = {
    name: string,
    poster: string | null
}

// TODO: Change the name to something better
const PageUpdateComponent = () => {
    const [finished, setFinished] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [games, setGames] = useState<PageUpdateGame[]>([]);

    let goal = 0;
    let remainingIds: string[] = [];
    let userId: string | null = null;

    onAuthenticated(async () => {
        if (/plus\/sync/.test(location.pathname)) {
            const newRemainingIds = await Config.GAME_UPDATES.get();
            remainingIds = newRemainingIds || [];
            goal = remainingIds.length;

            // For whatever reason, this HAS to be placed below any `await` calls
            userId = document.querySelector('.ksZYgc.VGZcUb')!.getAttribute('data-player-id');

            document.querySelectorAll('body>*:not(#stadiaplus-root)')
                .forEach(element => {
                    if (element instanceof HTMLElement) {
                        element.style.display = 'none';
                    }
                });

            // After some experimentation, it seems like 3000ms is the optimal interval for updating games.
            // It's fast enough to update games in somewhat of an efficient fashion,
            // but slow enough for the user not to get stuck in the ratelimit.
            setInterval(async () => {
                if (!userId) {
                    return;
                }

                const gameId = remainingIds.pop() as string;
                try {
                    await StadiaPlusDB.updateGameProgress(userId, gameId);
                }
                catch (e) {
                    if (e === '429') {
                        remainingIds.unshift(gameId);
                    }
                }

                const dbGame = await StadiaGameDB.games[gameId];
                if(!dbGame) {
                    return;
                }

                const newGames = Array.from(games);
                newGames.push({
                    name: dbGame.name,
                    poster: dbGame.img
                })

                setGames(newGames);
            });
        }
    });

    const root = document.getElementById('stadiaplus-root');
    ReactDOM.render(<Wrapper>
        <Heading>Syncing your games... ({progress}/{goal})</Heading>

        <GameGrid
            style={{
                gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(goal) + 1)}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${Math.floor(Math.sqrt(goal))}, minmax(0, 1fr))`,
            }}
        >
            {
                games === undefined
                    ? null
                    : games.map(game => {
                        if (game.poster != null) {
                            return <GameCard
                                finished={finished}
                                scale={2}
                                src={game.poster}
                            />;
                        }
                    })

            }
        </GameGrid>
    </Wrapper>, root)
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

export default PageUpdateComponent;