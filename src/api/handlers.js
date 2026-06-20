import { Log } from "../utils/logger.js"

export class Handler {
    constructor(bot, debug, markup) {
        this.bot = bot
        this.debug = debug
        this.markup = markup
    }
    
    async message(bot, commands = [], beforeHandler, ctxHandler, extra = []) {
        for (const cmd of commands) {
            const pattern = new RegExp(
                `^[/.]\\s*${cmd}(?:\\s+(.*))?$`,
                'i'
            );

            this.bot.hears(pattern, async (ctx) => {
                try {
                    const args = ctx.match?.[1] || ''
                    const access = await beforeHandler(bot, ctx, args, extra)
                    if (!access) return
                    await ctxHandler(bot, ctx, args, extra);
                } catch(err) {
                    console.error(`Error in: ${cmd}, check logs`);
                    Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"});
                }
            });
        }
    }

    async messageNoPref(bot, commands = [], beforeHandler, ctxHandler, extra = []) {
        for (const cmd of commands) {
            const pattern = new RegExp(
                `^${cmd}(?:\\s+(.*))?$`,
                'i'
            );

            this.bot.hears(pattern, async (ctx) => {
                try {
                    const args = ctx.match?.[1] || '';
                    const access = await beforeHandler(bot, ctx, args, extra)
                    if (!access) return
                    await ctxHandler(bot, ctx, args, extra);
                } catch(err) {
                    console.error(`Error in: ${cmd}, check logs`);
                    Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"});
                }
            });
        }
    }

    async callbackQuery(bot, trigger, before, callback, extra = []) {
        const regexTrigger = new RegExp(`^${trigger}`)
        this.bot.action(regexTrigger, async (ctx) => {
            try {
                const access = await before(bot, ctx, trigger, extra)
                if (!access) return
                await callback(bot, ctx, trigger, extra)
            } catch (err) {
                console.error(`Error in: ${trigger}, check logs`)
                Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"})
            }
        })
    }

}
