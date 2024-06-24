import {bot} from "@/*"

const cvGuide: string = '[galactic-CV-guide](https://github.com/GuidoPenta/galactic-CV-guide)';
const linkedInGuide: string = '[galactic-linkedin-profile-guide](https://github.com/GuidoPenta/galactic-linkedin-profile-guide)';
const reverseInterviewGuide: string = '[galactic-reverse-interview-guide](https://github.com/GuidoPenta/galactic-reverse-interview-guide)';
const awesomeItaliaRemote: string = '[awesome-italia-remote](https://github.com/GuidoPenta/awesome-italia-remote)';
const fullRemoteNewsletter: string = '[fullremote.it](https://github.com/GuidoPenta/fullremote.it)';
const remoteWorkExcel: string = '[PMI Italiane Lavoro Remoto](https://github.com/GuidoPenta/PMI-Italiane-Lavoro-Remoto)';
const jobSearchLinks: string = '[best-job-searches-website](https://github.com/GuidoPenta/best-job-searches-website)';
const salaryInfo: string = '[techcompenso.com](https://github.com/GuidoPenta/techcompenso.com)';
const cvVideo: string = '[Video](https://github.com/GuidoPenta/Video)';
const linkedinVideo: string = '[Video](https://github.com/GuidoPenta/Video)';


export default () => {
    bot.command("risorselavoro", (ctx) => {
        ctx.reply(`Risorse utili per chi cerca lavoro:\nScrittura CV: ${cvGuide}\nProfilo LinkedIn: ${linkedInGuide}\nReverse Interview (domande da fare all'azienda): ${reverseInterviewGuide}\nRepo Italian Awesome Remote (con oltre 300 aziende remote-friendly): ${awesomeItaliaRemote}\nNewsletter settimanale con annunci full remote: ${fullRemoteNewsletter}\nFile excel con altre 70+ aziende che fanno remote: ${remoteWorkExcel}\nLink con oltre 60 siti (internazionali) per trovare lavoro: ${jobSearchLinks}\nSito che contiene info su stipendi, benefit e RAL: ${salaryInfo}\nVideo Locanda con Davide D'Ambrogio sul CV: ${cvVideo}\nVideo Locanda con Fabio Banzato sul profilo LinkedIn: ${linkedinVideo}`, 
            {
                parse_mode: "Markdown" ,
                link_preview_options: {
                    is_disabled: true,
                },
                reply_parameters: {
                    message_id: ctx.msg.message_id,
                }
            }
        )
    })
}