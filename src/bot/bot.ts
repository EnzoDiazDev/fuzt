import { Client, ClientEvents, ClientOptions } from "discord.js";

/**
 * Igual a `new Client(options)`
 * @param options Opciones de Client de Discord.JS
 * @returns nuevo Client
 */
export function new_client(options?:ClientOptions):Client {
    return new Client(options);
}

/**
 * Interfaz para añadir un listener a un evento DESACOPLADO de Client
 * @param client Un Client de Discord.JS
 * @param event Un evento de Client
 * @param handler Una función para manejar el evento
 */
export function add_listener<Event extends keyof ClientEvents>(client:Client, event:Event, handler:(...args:ClientEvents[Event])=>void | Promise<void>):void {
    client.on(event, (...args) => handler(...args));
}

/**
 * Igual a `client.login(token)`
 * @param client Un Client de Discrod.JS
 * @param token un token de bot provisto por Discord
 */
export function start(client:Client, token:string):void {
    client.login(token);
}
