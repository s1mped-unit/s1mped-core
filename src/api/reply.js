import { Log } from "../utils/logger.js"

export class Reply {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    async wait(ctx, text, extra) {
        try {
            return await ctx.reply(text, extra={})
        } catch (err) {
            console.error('Failed to send message:', err);
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }


    async to(ctx, text, extra={}) {
        try {
            return await ctx.reply(text, extra)
        } catch (err) {
            console.error('Failed to send message:', err);
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}
