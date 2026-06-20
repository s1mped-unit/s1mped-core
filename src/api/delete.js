import { Log } from "../utils/logger.js"

export class Delete {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    async reaction(chatId, messageId, extra = {}) {
        try {
            this.bot.telegram.setMessageReaction(chatId, messageId, [])
        } catch (err) {
            console.error('Failed to remove reaction:', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}