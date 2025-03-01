import { bot } from "../../index";

export default () => {
  bot.command("quinonsirisponde", (ctx) => {
    ctx.reply(
      `Ciao, in questo topic non si risponde ai messaggi. Se vuoi, inoltralo in un altro topic e continua lì.)`,
      {
        reply_parameters: {
          message_id: ctx.msg.message_id,
        },
      },
    );
  });
};
