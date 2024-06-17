// Dotenv config
import {config} from 'dotenv';
config();

const debug = process.env.DEBUG === "true";
const token = process.env.BOT_TOKEN ?? "";

//Logging config
import Logger from "@ptkdev/logger"

const logger = new Logger({
    language: "en",
    debug,
    path: {
        debug_log: "./log/debug.log",
        "error_log": "./log/error.log",
    },
});

export {
    debug,
    token,
    logger,
}
