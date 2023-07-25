import { AxiosInstance } from "axios";

export default abstract class Wrapper {
    protected readonly instance: AxiosInstance;

    public constructor(instance: AxiosInstance) {
        this.instance = instance;
    }
}