import { Message } from "discord.js";
import { all, equals, not, toLower, replace } from "ramda";
import { pick_word } from "../../utils";
import Globals from "../../Globals";
import command_list, {load_commands} from "../commands/commands";
import {guild_allowed, not_bot, is_command} from "../utils";
const commands = load_commands(command_list);

/**
 * Remueve el substring coincidente con `Globals.COMMAND_MATCH` del contenido y devuelve el resultado
 * @param content Cualquier texto
 */
export function remove_prefix(content:string):string {
    return replace(Globals.COMMAND_MATCH, "", content);
}

/**
 * Devuelve en minusculas la primer palabra del texto excluyendo el substring `Globals.BOT_PREFIX`, o null en caso de no ser posible
 * @param content Cualquier texto
 */
export function get_command(content:string):string | null {
    if(not(is_command(content))) return null;

    const prefix_removed = remove_prefix(content);

    const command = pick_word(prefix_removed, 0);
    if(!command) return null;

    return toLower(command);
}

/**
 * Handler de mensajes
 * @param message mensaje enviado por un usuario
 */
export default async function message(message:Message):Promise<void> {
    //Comprueba las precondiciones para manejar mensajes.
    const preconditions = all(equals(true), [
        guild_allowed(message.guild?.id),
        not_bot(message.author)
    ]);
    if(not(preconditions)) return;

    //Si es comando, ejecuta el comando
    if(is_command(message.content)){
        const command = get_command(message.content);
        if(command) commands(command, message);
    }

    //delega el evento al futuras funciones...
}
