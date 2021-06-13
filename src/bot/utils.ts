import {User} from "discord.js";
import {Falsy} from "../utils";
import Globals from "../Globals";

/**
 * Devuelve true si el ID provisto coincide con `Globals.ALLOWED_SERVER_ID`
 * @param id cualquier id
 */
export function guild_allowed(id:string|Falsy):boolean {
    return id === Globals.ALLOWED_SERVER_ID;
}

/**
 * Devuelve true si el usuario provisto no es un bot
 * @param user un User de Discrod.JS
 */
export function not_bot(user:User):boolean {
    return user.bot === false;
}
