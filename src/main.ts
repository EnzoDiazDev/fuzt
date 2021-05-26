// eslint-disable-next-line @typescript-eslint/no-var-requires
if(process.env.NODE_ENV === "development") require("dotenv").config();
import Globals from "./Globals";
import {new_client, start, add_listener} from "./bot/bot";

import ready from "./bot/listeners/ready";
import message from "./bot/listeners/message";


function main():void {
    const client = new_client();

    add_listener(client, "ready", ready(client));
    add_listener(client, "message", message);

    start(client, Globals.DISCORD_BOT_KEY);
}

main();
