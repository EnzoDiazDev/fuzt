import { GuildMember } from "discord.js";
import {match_role} from "./utils";

export default function is_mod(member:GuildMember):boolean {
    const match_mod_role = match_role("mod");

    return member.roles.cache.find(match_mod_role) ? true : false;
}
