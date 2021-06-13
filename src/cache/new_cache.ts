import Cached from "./Cached";
import { clone } from "ramda";

export default function new_cache<T extends object>(data:T):Cached<T> {
    function cached<K extends keyof T>(key:K):T[K] | null;
    function cached<K extends keyof T, V extends T[K]>(key:K, value:V):Cached<T>;
    function cached<K extends keyof T, V extends T[K]>(key:K, value?:V):Cached<T> | T[K] | null {
        if(value){
            const new_data = clone(data);
            new_data[key] = value;

            return new_cache(new_data);
        } else {
            if(data[key]) return data[key];
            else return null;
        }
    };

    return cached;
}
