
# cc-data-api-wrapper

[CubeCraft Data API](https://api.cc-data.ru) Wrapper


## Example

```js
const API = require("cc-data-api-wrapper").default;

const timeout = 10 * 1000; // 10 seconds

const api = new API(timeout);

const leaderboards = await api.leaderboards.getAll();
const players = await api.players.getAll();
const xp = await api.xp.getAll();
const status = await api.status.getAll();
const goblinEggSkin = await api.marketplace.getBySearchName("goblin-egg-skin");

/** 
 * @param {NotionUpdateEvent} data
*/
const onUpdate = (data) => {};
const onError = (error) => console.error(error);
const reconnectOnDisconnect = true;

const eventSource = api.notion.listen(onUpdate, onError, reconnectOnDisconnect);
```