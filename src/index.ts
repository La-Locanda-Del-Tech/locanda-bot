import {Bot} from "grammy";
import {token, logger} from "./config";
import {commands} from "@commands/index";

const bot = new Bot(token);

for (let command in commands) {
    logger.debug(command, "Loading command ")

    commands[command]();
}

logger.info("🤖 bot started")

void bot.start();

export {
    bot
}
