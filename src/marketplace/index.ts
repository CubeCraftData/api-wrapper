import Wrapper from "../wrapper";

export type MarketplaceItem = {
    /** @example 4e6e58a5-2da7-4d3e-9e42-65125f2da2ee */
    id: string;
    /** @example goblin-egg-skin */
    searchName: string;
    /** @example Goblin - Egg Skin */
    name: string;
    /** @example 2022-12-13T22:48:23.463Z */
    creationDate: string;
    /** @example This poor little Goblin has been captured and they now occupy your egg. You must sadly keep them locked up in order to win your EggWars game. If your egg is broken, they will escape! */
    description: string;
    /** @example https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/562a11ee-cfa9-455d-8bce-84d2390d1a9e/GoblinEggSkin_Thumbnail_0.jpg */
    thumbnail: string;
    /** @example 490 */
    price: number;
    /** @example 4.6 */
    rating: number;
    /** @example true */
    available: boolean;
};

export default class Marketplace extends Wrapper {
    public getAll() {
        return this.instance
            .get<MarketplaceItem[]>("/bedrock/marketplace")
            .then(r => r.data);
    }

    public getNames() {
        return this.instance
            .get<string[]>("/bedrock/marketplace/names")
            .then(r => r.data);
    }

    public getBySearchName(searchName: string) {
        return this.instance
            .get<MarketplaceItem>(`/bedrock/marketplace/name/${searchName}`)
            .then(r => r.data);
    }
}
