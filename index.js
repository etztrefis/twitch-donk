require("dotenv").config();
const { ChatClient } = require("dank-twitch-irc");
const options = require('./options.js')
const ping = require('./commands/ping/index.js');
const repos = require('./commands/repositories/index.js');
const python = require('./commands/python/index.js');
const cock = require('./commands/cock/index.js');
const booba = require('./commands/booba/index.js');
const strimink = require('./commands/strimink/index.js');

let client = new ChatClient(options);

client.on("ready", () => console.log("Ready."))
client.on("close", (error => {
    if (error != null) {
        console.error(error);
    }
}))

client.on("PRIVMSG", async (message) => {
    if (message.messageText.charAt(0) === options.prefix) {
        let args = message.messageText.substring(1).toLowerCase().split(' ');
        switch (true) {
            case (ping.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `@${message.displayName}, ${await ping.Code()}`);
                break;
            }
            case (python.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await python.Code()}`);
                break;
            }
            case (cock.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await cock.Code()}`);
                break;
            }
            case (repos.Aliases.indexOf(args[0]) > -1): {
                if (!args[1]) {
                    client.say(message.channelName, `@${message.displayName}, You cannot use this command without specifying a target.`);
                }
                else {
                    client.say(message.channelName, `@${message.displayName}, ${await repos.Code(args[1], args[2])}`);
                }
                client.say(message.channelName, `@${message.displayName}, ${await repos.Code(args[1], args[2])}`);
                break;
            }
            case (booba.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await booba.Code()}`);
                break;
            }
            case (strimink.Aliases.indexOf(args[0]) > -1): {
                client.say(message.channelName, `${await strimink.Code()}`);
            }
        }
    }
});

client.connect();

(async () => {
    try {
        await client.join("trefis");
    } catch (error) {
        console.log("Error: timed out Okayeg");
    }
})();
