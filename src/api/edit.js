import { Log } from "../utils/logger.js"

export class Edit {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    async messageText(chatId, messageId, text, extra = {}) {
        try {
            await this.bot.telegram.editMessageText(chatId, messageId, undefined, text, extra)
        } catch (err) {
            console.error('Failed to edit message:', err);
            if (this.debug) Log.log(err.stack || err.toString(), { level: 'ERROR', status: 'FAILED' })
        }
    }

    async reaction(chatId, messageId, emoji, extra = {}) {
        try {
            this.bot.telegram.setMessageReaction(chatId, messageId, [{ type: "emoji", emoji: emoji}])
        } catch (err) {
            console.error('Failed to remove reaction:', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}