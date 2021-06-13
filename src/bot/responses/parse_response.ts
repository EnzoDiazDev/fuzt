import { isNil } from "ramda";

export default function parse_response(response:string, ...args:string[]):string {
    const placeholders = response.match(/\{.*?\}/g);

    if(isNil(placeholders)) return response;

    const replacement = (replaced:string, placeholder:string, i:number) => replaced.replace(placeholder, args[i]);
    const parsed_response = placeholders.reduce(replacement, response);

    return parsed_response;
}
