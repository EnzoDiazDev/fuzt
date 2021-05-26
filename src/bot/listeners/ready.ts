import { Client } from "discord.js";

/**
 * Función que envuelve el handler, se requiere un Client.
 * @param client Un Client de Discord.JS
 * @returns El event handler
 */
export default function ready(client:Client):() => void {
    return function():void {
        console.log(`Hey coders! Soy ${client.user?.username}`);
    };
}
