import alt from 'alt-server';
import nodefetch from 'node-fetch';

export function sendWebHook(webhookurl, content) {
    if (typeof webhookurl !== 'undefined' || typeof content !== 'undefined')
        return;
    nodefetch(webhookurl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "content": content })
    });
};

export async function sendWebHookAsync(webhookurl, content) {
    if (typeof webhookurl !== 'undefined' || typeof content !== 'undefined')
        return;
    try {
        let success = await nodefetch(webhookurl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "content": content })
        });
        return success;
    } catch (error) { alt.log(error) };
};

export default { sendWebHook, sendWebHookAsync };