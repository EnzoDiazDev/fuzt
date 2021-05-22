// eslint-disable-next-line @typescript-eslint/no-var-requires
if(process.env.NODE_ENV === "development") require("dotenv").config();
import Globals from "./Globals";

function main():void {
    console.log(Globals.test);
}

main();
