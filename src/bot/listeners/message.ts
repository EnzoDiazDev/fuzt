import { Message } from "discord.js";
import { all, equals, not } from "ramda";
import {guild_allowed, not_bot} from "../utils";
import commands from "../commands";
import {load_commands} from "../commander";
import {utils as commander_utilies} from "../commander";
const {is_command, get_command} = commander_utilies;

const commander = load_commands(commands);

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
        if(command) commander(command, message);
    }

    //delega el evento al futuras funciones...
}
