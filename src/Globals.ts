export default class Globals {
    public static test = "Hello world";

    /**
     * Token del bot proveido por Discord.
     */
    public static get DISCORD_BOT_KEY():string {
        if(!process.env.DISCORD_BOT_KEY){
            throw new Error("DISCORD_BOT_KEY is not defined in environment");
        }

        return process.env.DISCORD_BOT_KEY;
    }
}
