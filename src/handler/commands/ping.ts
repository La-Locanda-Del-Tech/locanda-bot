import {bot} from "@/*"

export default () => {
    bot.command("ping", (ctx) => {
        void ctx.reply("Pong!", {
            reply_parameters: {
                message_id: ctx.msg.message_id,
            }
        })
    })
}
