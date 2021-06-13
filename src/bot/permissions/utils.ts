import { Role } from "discord.js";
import { toLower } from "ramda";

export function match_role(role_name:string):(role: Role) => boolean {
    return role => toLower(role.name) === toLower(role_name);
}
