import { Client, ClientEvents } from "discord.js";

/**
 * Interfaz para añadir un listener a un evento DESACOPLADO de Client
 * @param client Un Client de Discord.JS
 * @param event Un evento de Client
 * @param handler Una función para manejar el evento
 */
export default function add_listener<Event extends keyof ClientEvents>(client:Client, event:Event, handler:(...args:ClientEvents[Event])=>void | Promise<void>):void {
    client.on(event, (...args) => handler(...args));
}
