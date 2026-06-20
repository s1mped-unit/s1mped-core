import { Log } from "../utils/logger.js"

export class Delete {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // сообщение
    async message(chatId, messageId, extra = {}) {
        try {
            return await this.bot.telegram.deleteMessage(chatId, messageId, [])
        } catch (err) {
            console.error('не удалось удалить сообщение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // реакция
    async reaction(chatId, messageId, extra = {}) {
        try {
            return await this.bot.telegram.setMessageReaction(chatId, messageId, [])
        } catch (err) {
            console.error('не удалось удалить реакцию: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // остановка живой локации
    async stopLiveLocation(chatId, messageId, extra = {}) {
        try {
            return await this.bot.telegram.stopMessageLiveLocation(chatId, messageId, undefined, extra)
        } catch (err) {
            console.error('не удалось остановить живую локацию: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}