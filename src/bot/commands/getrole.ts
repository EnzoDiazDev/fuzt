/**
 * @todo Este comando está hardcodeado para ser util en la selección se roles.
 * Se refactorizará a un flujo de eventos al igual que los comandos de moderación.
 */

import { Message } from "discord.js";
import { isNil, startsWith, toLower } from "ramda";
import {utils as commander_utilities} from "../commander";
const {split_parameters} = commander_utilities;

const help_embed = {
    "embed": {
        "title": "Selecciona tu rol de preferencia",
        "description": "Ejemplo: `!role frontend`\nPara retirarlo utiliza: `!role -frontend`\n\nRecuerda que estos roles son mencionables.",

        "color": 10527146,
        "fields": [
            {
                "name": "`frontend`",
                "value": "💻 Frontend developer"
            },
            {
                "name": "`backend`",
                "value": "🖥 Backend developer"
            },
            {
                "name": "`designer`",
                "value": "🎨 Graphic, ui/ux designer"
            },
            {
                "name": "`mobile`",
                "value": "📱 Mobile developer"
            },
            {
                "name": "`dba`",
                "value": "💾 Database administrator"
            },
            {
                "name": "`devop`",
                "value": "🚀 Sys admin"
            },
            {
                "name": "`hacker`",
                "value": "🕵︱Hacker, cybersecurity"
            },
            {
                "name": "`architect`",
                "value": "📝 Software Architect"
            },
            {
                "name": "`engineer`",
                "value": "🔧 Engineer"
            },
            {
                "name": "`taller`",
                "value": "📖 Suscripción al los talleres"
            }
        ],
        "image": {
            "url": "https://i.imgur.com/FI5whva.png"
        }
    }
};

const removed_embed = (name:string) => ({
    "embed": {
        "title": `Ya no tienes más el rol de ${name}.`,
        "color": 10527146
    }
});;

const applied_embed = (name:string) => ({
    "embed": {
        "title": `¡Ahora tienes el rol de ${name}!`,
        "color": 10527146
    }
});

const allowed_roles = [
    "frontend",
    "backend",
    "designer",
    "mobile",
    "dba",
    "devop",
    "hacker",
    "architect",
    "taller",
    "engineer"
];

export default function getrole(message:Message):void {
    if(message.channel.id !== "647230409179922443") return;

    const role = split_parameters(message.content)[0];
    const has_role = message.member?.roles.cache.find(member_role => toLower(member_role.name) === role || `-${toLower(member_role.name)}` === role);

    if(isNil(role)){
        message.reply(help_embed);
        return;
    }

    const role_allowed = allowed_roles.find(allowed_role => toLower(allowed_role) === role || `-${toLower(allowed_role)}` === role);
    if(isNil(role_allowed)){
        message.reply("Rol inválido", help_embed);
        return;
    }

    const guild_role = message.guild?.roles.cache.find(guild_role => toLower(guild_role.name) === role || `-${toLower(guild_role.name)}` === role);
    if(isNil(guild_role)){
        message.reply("Rol inexistente", help_embed);
        return;
    }

    if(startsWith("-", role) && has_role){
        message.member?.roles.remove(guild_role);
        message.reply(removed_embed(guild_role.name));
        return;
    }

    if(has_role) return;

    message.member?.roles.add(guild_role);
    message.reply(applied_embed(guild_role.name));
}
