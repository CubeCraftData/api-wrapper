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

    /**
     * ONLY FOR INTERNAL USE
     */
    updateAll(xps: GameXp[]) {
        return this.instance
            .post("/bedrock/xp", xps)
            .then(() => {});
    }

    getNames() {
        return this.instance
            .get<string[]>("/bedrock/xp/names")
            .then(r => r.data);
    }

    getByName(name: string) {
        return this.instance
            .get<GameXp>(`/bedrock/xp/name/${name}`)
            .then(r => r.data);
    }
}
