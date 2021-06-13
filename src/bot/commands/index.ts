import Command from "./Command";
import ping_handler from "./ping";
import warn_handler from "./warn";

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

const commands:Command[] = [
    ping,
    warn
];
export default commands;
