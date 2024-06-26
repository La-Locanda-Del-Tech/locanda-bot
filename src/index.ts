import {Bot} from "grammy";
import {token, logger} from "./config";
import {commands} from "./handler/commands";

const bot = new Bot(token);

for (let command in commands) {
    logger.debug(command, "Loading command ")

    commands[command]();
}

void bot.start();
logger.info("🤖 bot started")

const commandsDefinition = [
    { command: 'risorselavoro', description: 'Per avere tutti i link alle risorse lavoro!' },
    { command: 'help', description: "Per vedere l'elenco dei comandi" },
    { command: 'quinonsirisponde', description: 'Per non segnalare che sul thread Retroself-tive non si risponde' },
];

// Imposta i comandi del bot (facoltativo, per migliorare l'interfaccia utente di Telegram)
bot.api.setMyCommands(commandsDefinition);

export {
    bot
}

