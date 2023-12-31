import { BasePlayer } from "../players";

import Wrapper from "../wrapper";

export type BaseLeaderboard = {
    /** @example skywars-solo */
    name: string;
};

export type Leaderboard = BaseLeaderboard & {
    /** @example https://cubecraftcdn.com/bedrock/game_icons/skywars.png */
    icon: string | null;
    /** @example 1691000875657 */
    lastUpdated: number;
    players: LeaderboardPlayer[];
};

export type LeaderboardPlayer = BasePlayer & { points: number };

export default class Leaderboards extends Wrapper {
    public getAll() {
        return this.instance
            .get<Leaderboard[]>("/bedrock/leaderboards")
            .then(r => r.data);
    }

    /**
     * ONLY FOR INTERNAL USE
     */
    public updateAll(leaderboards: Omit<Leaderboard, "lastUpdated">[]) {
        return this.instance
            .post("/bedrock/leaderboards", leaderboards)
            .then(() => {});
    }

    public getNames() {
        return this.instance
            .get<string[]>("/bedrock/leaderboards/names")
            .then(r => r.data);
    }

    public getByName(name: string) {
        return this.instance
            .get<Leaderboard>(`/bedrock/leaderboards/name/${name}`)
            .then(r => r.data);
    }
}
