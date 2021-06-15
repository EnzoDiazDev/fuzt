export default class Globals {
    public static test = "Hello world";

    /** Token del bot proveido por Discord. */
    public static get DISCORD_BOT_KEY():string {
        if(!process.env.DISCORD_BOT_KEY){
            throw new Error("DISCORD_BOT_KEY is not defined in environment");
        }

        return process.env.DISCORD_BOT_KEY;
    }

    /** ID del servidor de discord donde funciona el bot */
    public static readonly ALLOWED_SERVER_ID = "466723723853037589";

    /** Prefijo del bot */
    public static readonly BOT_PREFIX = "!";

    /** Expresión regular para identificar comandos */
    public static readonly COMMAND_MATCH = new RegExp(`${Globals.BOT_PREFIX}\\s*`);
}
