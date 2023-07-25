import Wrapper from "../wrapper";

export type GameXp = {
    /** @example blockwars-ctf */
    name: string;
    /** @example 100 */
    value: number;
};

export default class Xp extends Wrapper {
    getAll() {
        return this.instance.get<GameXp[]>("/bedrock/xp").then(r => r.data);
    }
}
