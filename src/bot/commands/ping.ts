import { Message } from "discord.js";

export default function ping(message:Message):void {
    message.channel.send("`Pinging...`")
        .then(sent => {
            sent.edit(`Pong! (${sent.createdTimestamp - message.createdTimestamp}ms)`);
        });
}
