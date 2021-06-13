import channels, {Channels} from "./channels";
export {default as channels} from "./channels";

export type Database = {
    channels: Channels
};

export default function database(database:Database):Database {
    return {
        channels: channels(database.channels)
    };
}
