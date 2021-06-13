import { Client, ClientOptions } from "discord.js";

/**
 * Igual a `new Client(options)`
 * @param options Opciones de Client de Discord.JS
 * @returns nuevo Client
 */
export default function new_bot(options?:ClientOptions):Client {
    return new Client(options);
}
