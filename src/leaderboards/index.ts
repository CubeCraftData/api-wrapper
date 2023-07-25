import { BasePlayer } from "../players";

import Wrapper from "../wrapper";

export type BaseLeaderboard = {
    /** @example skywars-solo */
    name: string
};

export type Leaderboard = BaseLeaderboard & {
    /** @example https://cubecraftcdn.com/bedrock/game_icons/skywars.png */
    icon: string | null;
    /** @example 2023-05-08T07:01:11.781Z */
    lastUpdated: string;
    players: LeaderboardPlayer[];
};

export type LeaderboardPlayer = BasePlayer & { points: number };

export default class Leaderboards extends Wrapper {
    public getAll() {
        return this.instance.get<Leaderboard[]>("/bedrock/leaderboards").then(r => r.data);
    }

    public getNames() {
        return this.instance.get<string[]>("/bedrock/leaderboards/names").then(r => r.data);
    }

    public getByName(name: string) {
        return this.instance.get<Leaderboard>(`/bedrock/leaderboards/names/${name}`).then(r => r.data);
    }
}
