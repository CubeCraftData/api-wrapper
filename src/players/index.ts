import Wrapper from "../wrapper";
import { BaseLeaderboard } from "../leaderboards";

export type BasePlayer = {
    /** @example MrSterdy */
    name: string;
    /** @example "§r§8§lMrSterdy" */
    rawName: string;
    /** @example "https://icons.cubecraftcdn.com/render-skin?playerId=95bcc488-6717-4e41-850f-1cc9194d4e5d&default=profile/pfp_default&background=backgrounds-cube_default&border=loot-borders-default&hr=467646" */
    icon: string | null;
};

export type ProfileLeaderboard = BaseLeaderboard & {
    /** @example 3 */
    position: number;
    /** @example 1000 **/
    points: number;
};

export type ProfilePlayer = BasePlayer & { leaderboards: ProfileLeaderboard[] };

export default class Players extends Wrapper {
    public getAll() {
        return this.instance
            .get<ProfilePlayer[]>("/bedrock/players")
            .then(r => r.data);
    }

    public getNames() {
        return this.instance
            .get<string[]>("/bedrock/players/names")
            .then(r => r.data);
    }

    public getByName(name: string) {
        return this.instance
            .get<ProfilePlayer>(`/bedrock/players/name/${name}`)
            .then(r => r.data);
    }
}
