import { clone, forEach, pipe, split, trim } from "ramda";
import { randomBytes } from "crypto";

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

/**
 * Generates a cryptographically secure pseudorandom number from 0 to 255,
 * as specified by (`min`,`max`)
 * @param min A minimum expected number ─ *default: `0`*
 * @param max A maximum expected number ─ *default: `255`*
 * @todo Agregar soporte para números mayores a 255.
 * @see gist https://gist.github.com/EnzoDiazDev/a77cbdd73694cc32a03913ddfc562d0c
 */
export function random_uint_8(min = 0, max = 255):number {
    //parameters check
    if (min === max) return max;
    if (min > max) {
        const minAux = min; //auxiliary const
        min = max;
        max = minAux;
    }
    if (max > 255) max = 255;

    const randomByte:number = randomBytes(1)[0];

    if(min === 0 && max === 255) return randomByte;

    const range = max - min + 1;
    const max_range = 256;

    if (randomByte >= Math.floor(max_range / range) * range) return random_uint_8(min, max);

    return min + (randomByte % range);
}

/**
 * Selecciona un elemento aleatorio de un array y lo devuelve.
 * @todo Agregar soporte para más de 256 elementos.
 * @param array Array a sortear
 * @returns Un elemento aleatorio
 */
export function pick_random<T>(array:T[]):T {
    if(array.length > 256) throw new Error("Arrays larger than 256 elements are not supported.");

    const random_index = random_uint_8(0, array.length - 1);
    return array[random_index];
}
