import {replace, not, toLower, startsWith, drop} from "ramda";
import Globals from "../../Globals";
import {pick_word} from "../../utils";

/**
 * Devuelve true si el inicio del contenido coincide con `Globals.BOT_PREFIX`
 * @param content Cualquier texto
 */
export function is_command(content:string):boolean {
    return startsWith(Globals.BOT_PREFIX, content);
}

/**
 * Remueve el substring coincidente con `Globals.COMMAND_MATCH` del contenido y devuelve el resultado
 * @param content Cualquier texto
 */
export function remove_prefix(content:string):string {
    return replace(Globals.COMMAND_MATCH, "", content);
}

/**
 * Devuelve en minusculas la primer palabra del texto excluyendo el substring `Globals.BOT_PREFIX`, o null en caso de no ser posible
 * @param content Cualquier texto
 */
export function get_command(content:string):string | null {
    if(not(is_command(content))) return null;

    const prefix_removed = remove_prefix(content);

    const command = pick_word(prefix_removed, 0);
    if(!command) return null;

    return toLower(command);
}

export function split_parameters(content:string):string[] {
    const whithout_prefix = remove_prefix(content);
    const splitted_content = whithout_prefix.split(" ");

    const parameters = drop(1, splitted_content);

    return parameters;
}
