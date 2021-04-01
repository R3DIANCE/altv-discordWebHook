# altv-discordWebHook

1. run `npm install node-fetch`

2. add to your `resource/resource.cfg`
in deps: [ altv-discordWebHook ]

3. import into your resource `import { sendWebHook, sendWebHookAsync } from "altv-discordWebHook";`

4. Usage:

non-Asynchronous: 
```js
alt.on('playerConnect', (player) => {
  let webhookurl = 'https://discord.com/api/webhooks/0000000000000000/qweqwe';
  sendWebHook(webhookurl,`${player.name} has connected!`);
});
```

Asynchronous: 

```js
let lastdisconnect;

alt.on('playerDisconnect', async (player, reason) => {
    lastdisconnect = player;
    let webhookurl = 'https://discord.com/api/webhooks/0000000000000000/qweqwe';
    await sendWebHookAsync(webhookurl,`${lastdisconnect.name} ${reason ? `has disconnected with reason: ${reason}.` : "has disconnected."}`);
});
```
