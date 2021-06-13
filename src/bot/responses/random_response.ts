
import { isEmpty, isNil } from "ramda";
import {pick_random} from "../../utils";
import responses from "./responses.json";
import parse_response from "./parse_response";

type Responses = typeof responses;

const default_responses = [
    "No sé que decir al respecto.",
    "Se supone que debería decir algo, pero me olvidé qué.",
    "Olvidé mi linea...",
    "Quizá pasó algo, pero por algún motivo no puedo contestar adecuadamente."
];

/**
 * Devuelve una respuesta aleatoria del tipo de respuesta que se quiera dar
 * @param response_type Un tipo de respuesta predeterminado
 * @returns Una respuesta aleatoria
 */
export default function random_response(response_type:keyof Responses, ...args:string[]):string {
    const response_list = responses[response_type];

    if(isNil(response_list) || isEmpty(response_list)) {
        return pick_random(default_responses);
    }

    const response = pick_random(response_list);
    if(isNil(response)) {
        return pick_random(default_responses);
    }

    return parse_response(response, ...args);
}
