import { Log } from "../utils/logger.js"

export class Edit {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // редактирование текста
    async text(chatId, messageId, text, extra = {}) {
        try {
            return await this.bot.telegram.editMessageText(chatId, messageId, undefined, text, extra)
        } catch (err) {
            console.error('не удалось отредактировать текст: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
            }
    }
    
    // редактирование подписи (caption)
    async caption(chatId, messageId, caption, extra = {}) {
        try {
            return await this.bot.telegram.editMessageCaption(chatId, messageId, undefined, caption, extra)
        } catch (err) {
            console.error('не удалось отредактировать подпись: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
            }
    }
    
    // редактирование медиа
    async media(chatId, messageId, media, extra = {}) {
        try {
            return await this.bot.telegram.editMessageMedia(chatId, messageId, undefined, media, extra)
        } catch (err) {
            console.error('не удалось отредактировать медиа: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
            }
    }
    
    // редактирование клавиатуры (reply markup)
    async replyMarkup(chatId, messageId, replyMarkup, extra = {}) {
        try {
            return await this.bot.telegram.editMessageReplyMarkup(chatId, messageId, undefined, replyMarkup, extra)
        } catch (err) {
            console.error('не удалось отредактировать клавиатуру: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
            }
    }
    
    // реакция        
    async reaction(chatId, messageId, emoji, extra = {}) {
        try {
            this.bot.telegram.setMessageReaction(chatId, messageId, [{ type: "emoji", emoji: emoji}])
        } catch (err) {
            console.error('Failed to remove reaction:', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // редактирование живой локации
    async liveLocation(chatId, messageId, latitude, longitude, extra = {}) {
        try {
            return await this.bot.telegram.editMessageLiveLocation(chatId, messageId, undefined, latitude, longitude, extra)
        } catch (err) {
            console.error('не удалось отредактировать живую локацию: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }


}