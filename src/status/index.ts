import Wrapper from "../wrapper";

export type GameStatus = {
    /** @example online */
    name: string;
    /** @example 10548 */
    value: number;
};

export default class Status extends Wrapper {
    getAll() {
        return this.instance
            .get<GameStatus[]>("/bedrock/status")
            .then(r => r.data);
    }

    updateAll(statuses: GameStatus[]) {
        return this.instance.post("/bedrock/status", statuses).then(() => {});
    }
}
