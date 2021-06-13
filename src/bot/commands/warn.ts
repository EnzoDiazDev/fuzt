import { random_response } from "../responses";
import { Message } from "discord.js";
import {validate_moderation} from "../validations";

//Añadir rol de Warn al usuario moderado.
//  Continuar.
// https://docs.google.com/document/d/1kO6gNVI4Be8kA1PVkX4uRBWuHGjEO8iAWxfOwr3VsEc/edit#

export default function warn(message:Message):void {
    const moderation_is_valid = validate_moderation(message);
    if(moderation_is_valid) {
        const {moderated, reason} = moderation_is_valid;
        //agergar rol de warn

        //Actualizar la información en caché del usuario mencionado con el nuevo warn.

        const response = random_response("warn_successful", `<@${moderated.id}>`, reason);
        message.reply(response);
    }
}
