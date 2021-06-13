import { ID } from "../entities";

export async function get_channels():Promise<Record<string, ID>>{
    return {a:""};
}

export async function get_channel(name:string):Promise<ID> {
    return "";
}

export async function set_channel(_:string, __:string):Promise<void> {
    console.warn("No se puede escribir en local");
}

export async function delete_channel(_:string):Promise<void> {
    console.warn("No se puede escribir en local");
}

export default {
    get_channels,
    get_channel,
    set_channel,
    delete_channel
};
