// import { isNil } from "ramda";
// import {Cached, new_cache} from "./cache";

import { isNil } from "ramda";
import database, { Database } from "./database";

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
    public static readonly ALLOWED_SERVER_ID = "408626752257261578";

    /** Prefijo del bot */
    public static readonly BOT_PREFIX = "!";

    /** Expresión regular para identificar comandos */
    public static readonly COMMAND_MATCH = new RegExp(`${Globals.BOT_PREFIX}\\s*`);

    // /** Caché de cachés
    //  * @see `Globals.load_cache()` para cargarlos
    //  * @see `Globals.cache(key)` para consumirlo
    //  */
    // private static _cache:Cached<GlobalCache>;

    // /** Carga o sobreescribe el cache completo
    //  * @param data los datos escenciales del programa
    //  */
    // public static load_cache(data:GlobalCache):void {
    //     this._cache = new_cache(data);
    // }

    // /** Devuelve el cache indicado, o lo escribe si se asigna un valor
    //  * @param key Nombre del cache a obtener
    //  * @param value Valor a asignar a la propiedad
    //  * @returns El cache indicado o null en caso de no existir.
    //  */
    // public static cache<K extends keyof GlobalCache, V extends GlobalCache[K]>(key:K, value?:V):Cached<GlobalCache> | GlobalCache[K] | null {
    //     if(isNil(value)) return this._cache(key);
    //     else return this._cache(key, value);
    // }

    private static _database:Database | null;

    public static load_database(db:Database):void {
        this._database = database(db);
    }

    public static get database():Database {
        if(isNil(this._database)) throw new Error("La base de datos no ha sido cargada.");
        return this._database;
    }
}
