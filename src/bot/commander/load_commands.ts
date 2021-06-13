import { Message } from "discord.js";
import { AnyVoid } from "../../utils";
import Command from "../commands/Command";

/**
 * Crea una función con comandos cargados listos para ejecutarse
 * @param commands Comandos a cargar
 * @returns una función que al llamarla ejecutará el comando en caso de existir
 */
export default function load_commands(commands:Command[]):(command_name: string, message: Message) => AnyVoid {
    return (command_name, message) => {
        const match_command_name = (name:string) => command_name === name;
        const match_command_alias = (aliases:string[]) => aliases.includes(command_name);
        const match_command = (command:Command) => match_command_name(command.name) || match_command_alias(command.aliases);

        const command = commands.find(match_command);
        if(command) command.fn(message);
    };
}
