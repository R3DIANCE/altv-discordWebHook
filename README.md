# altv-discordWebHook

1. run `npm install node-fetch`

2. add to your `resource/resource.cfg`
in deps: [ altv-discordWebHook ]

3. import into your resource `import { sendWebHook, sendWebHookAsync } from "altv-discordWebHook";`

4. Usage:

non-Asynchronous: 
```js
let webhookurl = 'https://discord.com/api/webhooks/0000000000000000/qweqwe';
alt.on('playerConnect', (player) => {
  sendWebHook(webhookurl,`${player.name} has connected!`);
});
```

Asynchronous: 
```js
alt.on('playerDisconnect', async (player, reason) => {
    let temp = player;
    let webhookurl = 'https://discord.com/api/webhooks/0000000000000000/qweqwe';
    await sendWebHookAsync(webhookurl,`${temp.name} ${reason ? `has disconnected with reason: ${reason}.` : "has disconnected."}`);
    temp = undefined;
});
```
