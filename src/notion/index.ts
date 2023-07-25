import ReconnectingEventSource from "reconnecting-eventsource";
import EventSource from "eventsource";

import Wrapper from "../wrapper";

export type NotionUpdateEvent = {
    id: string;
    title: string;
    category: string;
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
