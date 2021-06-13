import {ID} from "../entities";

export type Channels = {
    get_channels():Promise<Record<string, ID>>
    get_channel(name:string):Promise<ID>,
    set_channel(name:string, id:ID):Promise<void>,
    delete_channel(name:string):Promise<void>
};

export default function channels(repo:Channels):Channels {
    return {
        get_channels: () => repo.get_channels(),
        get_channel: name => repo.get_channel(name),
        set_channel: (name, id) => repo.set_channel(name, id),
        delete_channel: name => repo.delete_channel(name)
    };
}
