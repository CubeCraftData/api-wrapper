import axios, { AxiosInstance } from "axios";

import Leaderboards from "./leaderboards";
import Players from "./players";
import Marketplace from "./marketplace";
import Status from "./status";
import Xp from "./xp";
import Notion from "./notion";

export default class API {
    public readonly axiosInstance: AxiosInstance;

    public readonly leaderboards: Leaderboards;
    public readonly players: Players;
    public readonly marketplace: Marketplace;
    public readonly status: Status;
    public readonly xp: Xp;
    public readonly notion: Notion;

    public constructor(timeout = 10 * 1000, apiKey = "") {
        this.axiosInstance = axios.create({
            baseURL: "https://api.cc-data.ru",
            params: {
                "access_token": apiKey
            },
            timeout,
        });

        this.leaderboards = new Leaderboards(this.axiosInstance);
        this.players = new Players(this.axiosInstance);
        this.marketplace = new Marketplace(this.axiosInstance);
        this.status = new Status(this.axiosInstance);
        this.xp = new Xp(this.axiosInstance);
        this.notion = new Notion(this.axiosInstance);
    }
}