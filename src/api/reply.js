import { Log } from "../utils/logger.js"

export class Reply {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // ответ текстовое сообщение
    async to(ctx, text, extra={}) {
        try {
            return await ctx.reply(text, extra)
        } catch (err) {
            console.error('не удалось ответить текстом:', err);
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ фото
    async photo(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithPhoto(file, extra)
        } catch (err) {
            console.error('не удалось ответить фото: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ видео
    async video(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithVideo(file, extra)
        } catch (err) {
            console.error('не удалось ответить видео: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ gif
    async gif(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithAnimation(file, extra)
        } catch (err) {
            console.error('не удалось ответить гиф: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ аудио
    async audio(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithAudio(file, extra)
        } catch (err) {
            console.error('не удалось ответить аудио: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ голосовым
    async voice(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithVoice(file, extra)
        } catch (err) {
            console.error('не удалось ответить голосовым: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ документом
    async document(ctx, file, extra = {}) {
        try {
            return await ctx.replyWithDocument(file, extra)
        } catch (err) {
            console.error('не удалось ответить документом: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ стикером
    async sticker(ctx, sticker, extra = {}) {
        try {
            return await ctx.replyWithSticker(sticker, extra)
        } catch (err) {
            console.error('не удалось ответить стикером: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ кружком
    async videoNote(ctx, videoNote, extra = {}) {
        try {
            return await ctx.replyWithVideoNote(videoNote, extra)
        } catch (err) {
            console.error('не удалось ответить кружком: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ответ инвойсом (счёт)
    async invoice(ctx, title, description, payload, providerToken, startParameter, currency, prices, extra = {}) {
        try {
            return await ctx.replyWithInvoice(title, description, payload, providerToken, startParameter, currency, prices, extra)
        } catch (err) {
            console.error('не удалось ответить счётом: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}
