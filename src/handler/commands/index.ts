import {readdirSync} from 'fs';
import {logger} from "../../config";

const commands: any = {}

logger.info("Loading commands...")

const readFile = readdirSync("./src/handler/commands")
    .filter(file => !file.endsWith("index.ts"))

readFile.forEach(file => commands[file] = require(`./${file}`).default)

logger.info("Commands loaded!")
logger.debug(commands, "Commands loaded: ")

export {
    commands
}
