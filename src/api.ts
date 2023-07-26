import axios from "axios";

import Leaderboards from "./leaderboards";
import Players from "./players";
import Marketplace from "./marketplace";
import Status from "./status";
import Xp from "./xp";
import Notion from "./notion";

export default class API {
    public readonly leaderboards: Leaderboards;
    public readonly players: Players;
    public readonly marketplace: Marketplace;
    public readonly status: Status;
    public readonly xp: Xp;
    public readonly notion: Notion;

    public constructor(timeout = 10 * 1000, apiKey = "") {
        const axiosInstance = axios.create({
            baseURL: "https://api.cc-data.ru",
            params: {
                "access_token": apiKey
            },
            timeout,
        });

        this.leaderboards = new Leaderboards(axiosInstance);
        this.players = new Players(axiosInstance);
        this.marketplace = new Marketplace(axiosInstance);
        this.status = new Status(axiosInstance);
        this.xp = new Xp(axiosInstance);
        this.notion = new Notion(axiosInstance);
    }
}