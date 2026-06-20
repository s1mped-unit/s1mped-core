import { Log } from "../utils/logger.js"

export class Get {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    async userProfilePhotos(ctx, def='') {
        try {
            const userId = ctx.from.id
            const photos = await ctx.telegram.getUserProfilePhotos(userId)
            if (this.debug) if (!def) Log.log("", "")
            if (photos.total_count === 0) {
                return def
            }
            const avatarVariants = photos.photos[0]
            const fileId = avatarVariants[avatarVariants.length - 1].file_id

            return fileId
        } catch (error) {
            console.error(error)
            return 0
        }
    }

    // информация о боте
    async me() {
        try {
            return await this.bot.telegram.getMe()
        } catch (err) {
            console.error('не удалось получить информацию о боте: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // информация о чате
    async chat(chatId) {
        try {
            return await this.bot.telegram.getChat(chatId)
        } catch (err) {
            console.error('не удалось получить информацию о чате: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // информация об участнике чата
    async chatMember(chatId, userId) {
        try {
            return await this.bot.telegram.getChatMember(chatId, userId)
        } catch (err) {
            console.error('не удалось получить информацию об участнике: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // список администраторов чата
    async chatAdministrators(chatId) {
        try {
            return await this.bot.telegram.getChatAdministrators(chatId)
        } catch (err) {
            console.error('не удалось получить список администраторов: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // количество участников чата
    async chatMembersCount(chatId) {
        try {
            return await this.bot.telegram.getChatMembersCount(chatId)
        } catch (err) {
            console.error('не удалось получить количество участников: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // информация о файле
    async file(fileId) {
        try {
            return await this.bot.telegram.getFile(fileId)
        } catch (err) {
            console.error('не удалось получить информацию о файле: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // информация о webhook
    async webhookInfo() {
        try {
            return await this.bot.telegram.getWebhookInfo()
        } catch (err) {
            console.error('не удалось получить информацию о вебхуке: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // список команд бота
    async myCommands(scope = undefined, languageCode = undefined) {
        try {
            return await this.bot.telegram.getMyCommands(scope, languageCode)
        } catch (err) {
            console.error('не удалось получить список команд: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // информация о наборе стикеров
    async stickerSet(name) {
        try {
            return await this.bot.telegram.getStickerSet(name)
        } catch (err) {
            console.error('не удалось получить информацию о наборе стикеров: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}