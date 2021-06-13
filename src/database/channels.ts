import { Channels } from "../entities";

export type ChannelsDA = {
    get_channels():Promise<Channels>
    get_channel(name:string):Promise<string>,
    set_channel(name:string, id:string):Promise<void>,
    delete_channel(name:string):Promise<void>
};

export default function channels(repository:ChannelsDA):ChannelsDA {
    return {
        get_channels: () => repository.get_channels(),
        get_channel: name => repository.get_channel(name),
        set_channel: (name, id) => repository.set_channel(name, id),
        delete_channel: name => repository.delete_channel(name)
    };
}
