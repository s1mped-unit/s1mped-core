import { Log } from "../utils/logger.js"

export class Webhook {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // установить webhook
    async set(url, extra = {}) {
        try {
            return await this.bot.telegram.setWebhook(url, extra)
        } catch (err) {
            console.error('не удалось установить webhook: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // удалить webhook
    async delete(extra = {}) {
        try {
            return await this.bot.telegram.deleteWebhook(extra)
        } catch (err) {
            console.error('не удалось удалить webhook: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}