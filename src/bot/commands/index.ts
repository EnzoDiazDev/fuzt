import Command from "./Command";
import ping_handler from "./ping";
import warn_handler from "./warn";
import getrole_handler from "./getrole";

export const ping:Command = {
    name: "ping",
    aliases: ["latency"],
    description: "Muestra la latencia del bot",
    arguments: [],
    fn: ping_handler
};

export const warn:Command = {
    name: "warn",
    aliases: [],
    description: "Emite una advertencia a un usuario",
    arguments: ["mention", "reason"],
    fn: warn_handler
};

export const getrole:Command = {
    name: "getrole",
    aliases: ["role", "rol"],
    description: "Muestra la lista de roles, y añade o quita roles según se especifique.",
    arguments: ["nombre_de_rol"],
    fn: getrole_handler
};

const commands:Command[] = [
    ping,
    getrole
    //warn
];
export default commands;
