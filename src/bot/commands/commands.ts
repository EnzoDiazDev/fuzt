import { Message } from "discord.js";
import { AnyVoid } from "../../utils";
import ping from "./ping";

/** Representa un comando, su información y su método de ejeción */
export interface Command {
    name: string;
    aliases: string[];
    description: string;
    arguments: string[];
    fn: (message:Message) => AnyVoid;
}

/**
 * Crea una función con comandos cargados listos para ejecutarse
 * @param commands Comandos a cargar
 * @returns una función que al llamarla ejecutará el comando en caso de existir
 */
export function load_commands(commands:Command[]):(command_name: string, message: Message) => AnyVoid {
    return (command_name:string, message:Message):AnyVoid => {
        const match_command_name = (name:string) => command_name === name;
        const match_command_alias = (aliases:string[]) => aliases.includes(command_name);
        const match_command = (command:Command) => match_command_name(command.name) || match_command_alias(command.aliases);

        const command = commands.find(match_command);
        if(command) command.fn(message);
    };
}

const command_list:Command[] = [
    {
        name: "ping",
        aliases: ["latency"],
        description: "Muestra la latencia del bot",
        arguments: [],
        fn: ping
    }
];
export default command_list;
