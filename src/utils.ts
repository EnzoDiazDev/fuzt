import { clone, forEach, pipe, split, trim } from "ramda";

export type AnyVoid = void | Promise<void>;
export type Falsy = false | 0 | "" | null | undefined;

/**
 * Un diccionario de funciones
 */
export type FunctionDic = Record<string, (...args:any) => any>;

/**
 * Una función que literalmente no hace nada.
 */
export function noop():void {
    //no operation
}

/**
 * Crea una función que dispara una lista de funciones iguales al ser llamada.
 * @param listeners funciones a ejecutar
 * @returns función disparadora
 */
export function event_channel<Listener extends (...args:any) => AnyVoid, Params extends Parameters<Listener>>(...listeners:Array<(...args:Params)=>AnyVoid>):(...args:Params) => AnyVoid {
    return function (...args:Params):AnyVoid {
        listeners.forEach(listener => listener(...args));
    };
}

/**
 * Devuelve una copia del primer elemento de un array. Esto no modifica el arreglo original.
 * @param arr un arreglo
 * @returns el primer elemento del arreglo si extiste
 */
export function pick_first<T>(arr:T[]):T|null {
    if(arr.length === 0) return null;

    const clone_arr = clone(arr);
    return clone_arr[0] || null;
}

/**
 * Selecciona la palabra en la posición indicada
 * @param sentence Cualquier cadena de texto
 * @param index la palabra a obtener
 * @returns una palabra o null
 */
export function pick_word(sentence:string, index:number):string | null {
    const words = pipe(split(" "), forEach(trim))(sentence);
    return words[index] || null;
}
