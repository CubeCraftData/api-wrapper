import axios from "axios";

import Leaderboards from "./leaderboards";
import Players from "./players";
import Marketplace from "./marketplace";

export * from "./leaderboards";
export * from "./players";

export default class API {
    public readonly leaderboards: Leaderboards;
    public readonly players: Players;
    public readonly marketplace: Marketplace;

    public constructor(timeout = 10 * 1000) {
        const axiosInstance = axios.create({
            baseURL: "https://api.cc-data.ru",
            timeout
        });

        this.leaderboards = new Leaderboards(axiosInstance);
        this.players = new Players(axiosInstance);
        this.marketplace = new Marketplace(axiosInstance);
    }
}