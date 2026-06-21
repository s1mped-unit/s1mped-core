import { Log } from "../utils/logger.js"

export class Handler {
    constructor(bot, debug, markup) {
        this.bot = bot
        this.debug = debug
        this.markup = markup
    }
    
    async message(bot, commands = [], ctxHandler, extra = {}) {
        for (const cmd of commands) {
            const pattern = new RegExp(
                `^[/.]\\s*${cmd}(?:\\s+(.*))?$`,
                'i'
            )

            this.bot.hears(pattern, async (ctx) => {
                try {
                    const args = ctx.match?.[1] || ''
                    if (extra.beforeHandler) {
                        const beforeHandler = extra.beforeHandler
                        const access = await beforeHandler(bot, ctx, args, extra)
                        if (!access) return
                    }
                    await ctxHandler(bot, ctx, args, extra)
                } catch(err) {
                    console.error(`ошибка выполнения команды ${cmd}, просмотрите логи`)
                    Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"})
                }
            })
        }
        if (this.debug) {
            Log.log(`подключен обработчик со списком команд: ${commands}`, { status: "OK" })
        }
    }

    async command(bot, commands = [], ctxHandler, extra = {}) {
        this.bot.command(commands, async (ctx) => {
            try {
                const args = ctx.match?.[1] || ''
                if (extra.beforeHandler) {
                    const beforeHandler = extra.beforeHandler
                    const access = await beforeHandler(bot, ctx, args, extra)
                    if (!access) return
                }
                await ctxHandler(bot, ctx, args, extra)
            } catch(err) {
                console.error(`ошибка выполнения команды ${cmd}, просмотрите логи`)
                Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"})
            }
        })
        if (this.debug) {
            Log.log(`подключен обработчик со списком команд: ${commands}`, { status: "OK" })
        }
    }

    async messageNoPref(bot, commands = [], ctxHandler, extra = {}) {
        for (const cmd of commands) {
            const pattern = new RegExp(
                `^${cmd}(?:\\s+(.*))?$`,
                'i'
            );

            this.bot.hears(pattern, async (ctx) => {
                try {
                    const args = ctx.match?.[1] || ''
                    if (extra.beforeHandler) {
                        const beforeHandler = extra.beforeHandler
                        const access = await beforeHandler(bot, ctx, args, extra)
                        if (!access) return
                    }
                    await ctxHandler(bot, ctx, args, extra);
                } catch(err) {
                    console.error(`ошибка выполнения команды ${cmd}, просмотрите логи`)
                    Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"})
                }
            })
        }
        if (this.debug) {
            Log.log(`подключен обработчик со списком команд: ${commands}`, { status: "OK" })
        }
    }

    async callbackQuery(bot, trigger, callback, extra = {}) {
        const regexTrigger = new RegExp(`^${trigger}`)
        this.bot.action(regexTrigger, async (ctx) => {
            try {
                if (extra.beforeHandler) {
                    const beforeHandler = extra.beforeHandler
                    const access = await beforeHandler(bot, ctx, trigger, extra)
                    if (!access) return
                }
                await callback(bot, ctx, trigger, extra)
            } catch (err) {
                console.error(`ошибка выполнения callback ${trigger}, просмотрите логи`)
                Log.log(err.stack || err.toString(), {status: "ABORTED", level: "ERROR"})
            }
        })
        if (this.debug) {
            Log.log(`подключен обработчик callback со списком триггеров: ${commands}`, { status: "OK" })
        }
    }

}
