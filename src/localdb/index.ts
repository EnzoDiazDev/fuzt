import {channels} from "../database";
import local_channels from "./channels";


export default {
    channels: channels(local_channels)
};
