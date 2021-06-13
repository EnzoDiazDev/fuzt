import { Message } from "discord.js";
import {AnyVoid} from "../../utils";

/** Representa un comando, con su información y su método de ejeción */
export default interface Command {
    name: string;
    aliases: string[];
    description: string;
    arguments: string[];
    fn: (message:Message) => AnyVoid;
}
