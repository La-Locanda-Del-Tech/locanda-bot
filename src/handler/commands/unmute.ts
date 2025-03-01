import { bot } from "@/*";

export default () => {
  bot.command("unmute", async (ctx) => {
    if (!ctx.message) {
      return ctx.reply("Errore: messaggio non valido");
    }

    // Verifica se l'utente è amministratore
    const member = await ctx.getChatMember(ctx.message.from.id);
    if (!["administrator", "creator"].includes(member.status)) {
      return await ctx.reply(
        "Solo gli amministratori possono usare questo comando!",
      );
    }

    try {
      const id = ctx.message.text.split(" ")[1];
      if (!id) {
        return await ctx.reply(
          "Per favore, specifica l'username dell'utente da unmutare (es: /unmute id user)",
        );
      }

      // Rimuove le restrizioni per l'utente
      await ctx.restrictChatMember(Number(id), {
        can_send_messages: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
      });

      await ctx.reply(`è stato unmutato con successo!`);
    } catch (error) {
      await ctx.reply(
        "Non sono riuscito a unmutare l'utente. Verifica che l'id sia corretto e che io abbia i permessi necessari.",
      );
    }
  });
};
