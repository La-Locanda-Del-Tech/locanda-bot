import { bot }  from "@/*";

export const name = 'info';
export const description = 'Ottieni informazioni sul bot';


export default () => {
    bot.command('help', async (ctx) => { 
        const commands = await ctx.api.getMyCommands();
        if (commands.length === 0) {
            ctx.reply("Non ci sono comandi disponibili al momento.");
            return;
        }

        let helpMessage = 'Ecco un elenco dei comandi disponibili:\n\n';
        commands.forEach((cmd) => {
            helpMessage += `/${cmd.command} - ${cmd.description}\n`;
        });
        
        ctx.reply(helpMessage);
    });
}