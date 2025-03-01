import { bot } from "@/*";

export default () => {
  bot.command("myId", async (ctx) => {
    if (!ctx.message) {
      return ctx.reply("Errore: messaggio non valido");
    }

    const userId = ctx.message.from.id; // ID numerico dell'utente
    ctx.reply(`Il tuo ID numerico è: ${userId}`);
  });
};
