import { Log } from "../utils/logger.js"

export class Send {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // текстовое сообщение
    async message(chatId, text, extra = {}) {
        try {
            return await this.bot.telegram.sendMessage(chatId, text, extra)
        } catch (err) {
            console.error('не удалось отправить сообщение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // фото
    async photo(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendPhoto(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить фото: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // видео
    async video(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendVideo(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить видео: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // аудио
    async audio(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendAudio(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить аудио: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // голосовое
    async voice(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendVoice(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить голосовое: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // документ
    async document(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendDocument(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить документ: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // gif
    async gif(chatId, file, extra = {}) {
        try {
            return await this.bot.telegram.sendAnimation(chatId, file, extra)
        } catch (err) {
            console.error('не удалось отправить гиф: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // стикер
    async sticker(chatId, sticker, extra = {}) {
        try {
            return await this.bot.telegram.sendSticker(chatId, sticker, extra)
        } catch (err) {
            console.error('не удалось отправить стикер: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // кружок
    async videoNote(chatId, videoNote, extra = {}) {
        try {
            return await this.bot.telegram.sendVideoNote(chatId, videoNote, extra)
        } catch (err) {
            console.error('не удалось отправить кружок: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // локация
    async location(chatId, latitude, longitude, extra = {}) {
        try {
            return await this.bot.telegram.sendLocation(chatId, latitude, longitude, extra)
        } catch (err) {
            console.error('не удалось отправить локацию: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // место
    async venue(chatId, latitude, longitude, title, address, extra = {}) {
        try {
            return await this.bot.telegram.sendVenue(chatId, latitude, longitude, title, address, extra)
        } catch (err) {
            console.error('не удалось отправить место: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // контакт
    async contact(chatId, phoneNumber, firstName, extra = {}) {
        try {
            return await this.bot.telegram.sendContact(chatId, phoneNumber, firstName, extra)
        } catch (err) {
            console.error('не удалось отправить контакт: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // опрос
    async poll(chatId, question, options, extra = {}) {
        try {
            return await this.bot.telegram.sendPoll(chatId, question, options, extra)
        } catch (err) {
            console.error('не удалось отправить опрос: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // викторина
    async quiz(chatId, question, options, correctOptionId, extra = {}) {
        try {
            return await this.bot.telegram.sendPoll(chatId, question, options, {
                ...extra,
                type: 'quiz',
                correct_option_id: correctOptionId,
            })
        } catch (err) {
            console.error('не удалось отправить викторину: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // кубик
    async dice(chatId, extra = {}) {
        try {
            return await this.bot.telegram.sendDice(chatId, extra)
        } catch (err) {
            console.error('не удалось отправить кубик: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // игра
    async game(chatId, gameShortName, extra = {}) {
        try {
            return await this.bot.telegram.sendGame(chatId, gameShortName, extra)
        } catch (err) {
            console.error('не удалось отправить игру: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // инвойс (счёт)
    async invoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, extra = {}) {
        try {
            return await this.bot.telegram.sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, extra)
        } catch (err) {
            console.error('не удалось отправить счёт: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // альбом медиа (группа фото или видео)
    async mediaGroup(chatId, media, extra = {}) {
        try {
            return await this.bot.telegram.sendMediaGroup(chatId, media, extra)
        } catch (err) {
            console.error('не удалось отправить медиа-группу: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // действие "печатает" и т.п.
    async chatAction(chatId, action) {
        try {
            return await this.bot.telegram.sendChatAction(chatId, action)
        } catch (err) {
            console.error('не удалось отправить действие чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ на callback
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