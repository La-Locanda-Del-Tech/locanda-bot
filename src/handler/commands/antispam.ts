import { bot }  from "@/*";
import { InlineKeyboard } from "grammy";

export default () => {
    const verificationTimeouts: Map<number, NodeJS.Timeout> = new Map();

    bot.on(":new_chat_members", async (ctx) => {
        const newMember = ctx.message?.new_chat_members[0];
        if (!newMember) return;

        const chatId = ctx.chat.id;
        const userId = newMember.id;

        await ctx.api.restrictChatMember(chatId, userId, {
            can_send_messages: false,
            can_send_other_messages: false,
            can_add_web_page_previews: false,
        });

        const keyboard = new InlineKeyboard().text("✅ Sono umano!", `verify_${userId}`);

        await ctx.reply(
            `Benvenuto, ${newMember.first_name}! Conferma di essere un umano premendo il pulsante qui sotto.`,
            { reply_markup: keyboard }
        );

        const timeoutId = setTimeout(async () => {
            try {
                const chatMember = await ctx.api.getChatMember(chatId, userId);
                if (chatMember.status === "restricted") {
                    await ctx.reply(
                     `${newMember.first_name} non ha completato la verifica e rimarrà con le restrizioni sui messaggi.`
                    );
                    await ctx.reply(
                     `Per sbloccare le restrizioni, contatta il bot in privato (/start), usa il comando /myId e comunica il numero ricevuto ad un amministratore.`
                    );
                }
            } catch (err) {
                console.error("Errore nella rimozione dell'utente:", err);
            }
        }, 60_000);
        verificationTimeouts.set(userId, timeoutId);
    });

    bot.callbackQuery(/^verify_(\d+)$/, async (ctx) => {
        const userName = ctx.from.first_name;
        const userId = parseInt(ctx.match[1]);
        if (ctx.from.id !== userId) {
            return ctx.answerCallbackQuery({ text: "Non puoi verificare per un altro utente!" });
        }

        const timeoutId = verificationTimeouts.get(userId);
        if (timeoutId) {
            clearTimeout(timeoutId);
            verificationTimeouts.delete(userId);
        }

        const chatId = ctx.chat?.id;
        if (!chatId) {
            return ctx.answerCallbackQuery({ text: "Errore: non posso verificare in questa chat." });
        }
    
        await ctx.api.restrictChatMember(chatId, userId, {
            can_send_messages: true,
            can_send_other_messages: true,
            can_add_web_page_previews: true,
        });
    
        await ctx.answerCallbackQuery({ text: "Verifica completata! Ora puoi scrivere nel gruppo." });
        await ctx.editMessageText("✅ Verifica completata! Puoi scrivere nel gruppo.");
        await ctx.reply(
            `Ciao` +
              ` ` +
              userName +
              ` ` +
              `e benvenuto/a nel canale Telegram de La Locanda Del Tech!        
                  In questo gruppo parleremo di programmazione, crescita personale e professionale, RAL, condividerò annunci di lavoro interessanti e molto altro!        
                  Non ci sono regole particolari da seguire se non quelle legate al buonsenso ed alla sana convivenza in un gruppo (le trovi con il comando /regole).  
                  - Ti chiedo di presentarti brevemente nel canale Chiacchiera/Off Topic ed, in generale, di partecipare attivamente alle conversazioni nel gruppo.
                  - Sei un/una junior? C'è un topic apposta per te! Uno spazio sicuro, non giudicante, dove potrai fare tutte le domande che vuoi!
                  - Con il comando /comecercolavoro potrai leggere una brevissima "guida" con alcuni passi utili a capire come muoversi nel mercato del lavoro IT!
                  - Trovi anche un elenco di risorse per cercare lavoro, usa il comando /risorselavoro 
                  - Con il comando /friends, trovi un elenco di community Telegram amiche      
       
                  Infine, qui trovi tutti i link dove poter seguire (e supportare) La Locanda:      
                  https://linktr.ee/lalocandadeltech     
                  Grazie ancora di essere qui e che la RAL sia con te!`,
          );
    });
}