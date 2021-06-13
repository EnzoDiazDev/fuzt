import { GuildMember, Message } from "discord.js";
import { drop, isNil, join, not } from "ramda";
import {random_response} from "../responses";
import {is_mod} from "../permissions";
import {utils as commander_utilities} from "../commander";
const {split_parameters} = commander_utilities;

type moderation_payload = {
    moderator: GuildMember,
    moderated: GuildMember,
    reason: string
};

export default function moderation(message:Message):false|moderation_payload {
    const member = message.member;
    if(isNil(member)) {
        const response = random_response("unknown_error");
        message.reply(response);
        return false;
    }

    if(not(is_mod(member))) {
        message.delete();
        return false;
    };

    const mentioned_members = message.mentions.members;
    if(isNil(mentioned_members) || mentioned_members.size === 0){
        const response = random_response("need_mention");
        message.reply(response);
        return false;
    }

    const moderated = mentioned_members.first();
    if(isNil(moderated)) {
        const response = random_response("need_mention");
        message.reply(response);
        return false;
    }

    if(is_mod(moderated)){
        const response = random_response("cant_be_moderated");
        message.reply(response);
        return false;
    }

    //Si el ID del canal del mensaje no coincide con el ID del canal de moderación
    //  Eliminar el mensaje enviado.
    //  Detener.

    const parameters = split_parameters(message.content);
    const reason = join(" ", drop(1, parameters));
    if(isNil(reason)){
        const response = random_response("need_reason");
        message.reply(response);
        return false;
    }

    return {
        moderated: moderated,
        moderator: member,
        reason: reason
    };
}
