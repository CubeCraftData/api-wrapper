import ReconnectingEventSource from "reconnecting-eventsource";
import EventSource from "eventsource";

import Wrapper from "../wrapper";

export type NotionUpdateEvent = {
    /** @example aac5646a-ef93-4964-9641-85bfc9f5150c */
    id: string;
    /** @example Summer Event 2023 */
    title: string;
    /** @example In Progress */
    category: string;
    /** @example https://cubecraft.notion.site/e86c96a3ee78465d8e5c24c22489c094?p=aac5646aef934964964185bfc9f5150c */
    url: string;
};

export default class Notion extends Wrapper {
    private eventSource?: EventSource;

    listen(reconnectOnDisconnect = false) {
        if (this.eventSource !== undefined) return this.eventSource;

        const url = new URL(
            "/notion",
            this.instance.defaults.baseURL,
        ).toString();

        if (reconnectOnDisconnect) {
            this.eventSource = new ReconnectingEventSource(url, {
                max_retry_time: this.instance.defaults.timeout,
                eventSourceClass: EventSource as never,
            });
        } else {
            this.eventSource = new EventSource(url);
        }

        return this.eventSource;
    }

    disconnect() {
        this.eventSource?.close();
    }
}
