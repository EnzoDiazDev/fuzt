// eslint-disable-next-line @typescript-eslint/no-var-requires
if(process.env.NODE_ENV === "development") require("dotenv").config();
import Globals from "./Globals";
import {ready, message} from "./bot/listeners";
import {new_bot, add_listener} from "./bot";
//import localdb from "./localdb";


function main():void {
    //Globals.load_database(localdb);

    const bot = new_bot();

    add_listener(bot, "ready", ready(bot));
    add_listener(bot, "message", message);

    bot.login(Globals.DISCORD_BOT_KEY);
}


main();
