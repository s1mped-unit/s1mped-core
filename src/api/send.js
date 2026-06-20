import { Log } from "../utils/logger.js"

export class Send {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // текстовые сообщение
    async message(chatId, text, extra = {}) {
        try {
            return await this.bot.telegram.sendMessage(chatId, text, extra)
        } catch (err) {
            console.error('не удалось отправить сообщение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // файлы
    async photo(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendPhoto(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить фото: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async video(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendVideo(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить видео: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async audio(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendAudio(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить аудио: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async voice(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendVoice(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить аудио: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async document(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendDocument(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить документ: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async gif(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendAnimation(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить гиф: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async reaction(chatId, messageId, emoji, extra = {}) {
        try {
            return await this.bot.telegram.setMessageReaction(chatId, messageId, [{ type: "emoji", emoji: emoji}])
        } catch (err) {
            console.error('не удалось отправить реакцию: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    async CBQuery(ctx, text, showAlert=false) {
        try {
            return await ctx.telegram.answerCbQuery(ctx.callbackQuery.id, text, { 
                show_alert: showAlert 
            })
        } catch (err) {
            console.error('не удалось отправить ответ на callback: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}