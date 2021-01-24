import DBGame from './DBGame';

export default interface DBProfile {
    avatar: string;
    games: {[key: string]: DBGame}
}