import DBAchievement from './DBAchievement';

export default interface DBGame {
    achievements: DBAchievement[],
    name: string,
    time: number,
    uuid: string,
}