import { Log } from "../utils/logger.js"

export class Admin {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    // забанить пользователя
    async banChatMember(chatId, userId, untilDate = undefined, revokeMessages = false) {
        try {
            return await this.bot.telegram.banChatMember(chatId, userId, untilDate, revokeMessages)
        } catch (err) {
            console.error('не удалось забанить пользователя: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // разбанить
    async unbanChatMember(chatId, userId, onlyIfBanned = false) {
        try {
            return await this.bot.telegram.unbanChatMember(chatId, userId, onlyIfBanned)
        } catch (err) {
            console.error('не удалось разбанить пользователя: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // ограничить пользователя
    async restrictChatMember(chatId, userId, permissions, untilDate = undefined) {
        try {
            return await this.bot.telegram.restrictChatMember(chatId, userId, permissions, untilDate)
        } catch (err) {
            console.error('не удалось ограничить пользователя: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // повысить до администратора
    async promoteChatMember(chatId, userId, rights = {}) {
        try {
            return await this.bot.telegram.promoteChatMember(chatId, userId, rights)
        } catch (err) {
            console.error('не удалось повысить пользователя: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // понизить
    async demoteChatMember(chatId, userId) {
        try {
            return await this.bot.telegram.promoteChatMember(chatId, userId, { is_anonymous: false, can_manage_chat: false, can_change_info: false, can_post_messages: false, can_edit_messages: false, can_delete_messages: false, can_invite_users: false, can_restrict_members: false, can_pin_messages: false, can_promote_members: false })
        } catch (err) {
            console.error('не удалось понизить пользователя: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // установить права для всех участников чата
    async setChatPermissions(chatId, permissions) {
        try {
            return await this.bot.telegram.setChatPermissions(chatId, permissions)
        } catch (err) {
            console.error('не удалось установить права чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // установить название чата
    async setChatTitle(chatId, title) {
        try {
            return await this.bot.telegram.setChatTitle(chatId, title)
        } catch (err) {
            console.error('не удалось установить название чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // установить описание чата
    async setChatDescription(chatId, description) {
        try {
            return await this.bot.telegram.setChatDescription(chatId, description)
        } catch (err) {
            console.error('не удалось установить описание чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // установить фото чата
    async setChatPhoto(chatId, photo) {
        try {
            return await this.bot.telegram.setChatPhoto(chatId, photo)
        } catch (err) {
            console.error('не удалось установить фото чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // удалить фото чата
    async deleteChatPhoto(chatId) {
        try {
            return await this.bot.telegram.deleteChatPhoto(chatId)
        } catch (err) {
            console.error('не удалось удалить фото чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // установить набор стикеров для чата (только для супергрупп)
    async setChatStickerSet(chatId, stickerSetName) {
        try {
            return await this.bot.telegram.setChatStickerSet(chatId, stickerSetName)
        } catch (err) {
            console.error('не удалось установить набор стикеров чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // удалить набор стикеров чата
    async deleteChatStickerSet(chatId) {
        try {
            return await this.bot.telegram.deleteChatStickerSet(chatId)
        } catch (err) {
            console.error('не удалось удалить набор стикеров чата: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // экспортировать ссылку-приглашение
    async exportChatInviteLink(chatId) {
        try {
            return await this.bot.telegram.exportChatInviteLink(chatId)
        } catch (err) {
            console.error('не удалось экспортировать ссылку-приглашение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // создать новую ссылку-приглашение
    async createChatInviteLink(chatId, name = undefined, expireDate = undefined, memberLimit = undefined, createsJoinRequest = false) {
        try {
            return await this.bot.telegram.createChatInviteLink(chatId, name, expireDate, memberLimit, createsJoinRequest)
        } catch (err) {
            console.error('не удалось создать ссылку-приглашение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // редактировать ссылку-приглашение
    async editChatInviteLink(chatId, inviteLink, name = undefined, expireDate = undefined, memberLimit = undefined, createsJoinRequest = false) {
        try {
            return await this.bot.telegram.editChatInviteLink(chatId, inviteLink, name, expireDate, memberLimit, createsJoinRequest)
        } catch (err) {
            console.error('не удалось отредактировать ссылку-приглашение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // отозвать ссылку-приглашение
    async revokeChatInviteLink(chatId, inviteLink) {
        try {
            return await this.bot.telegram.revokeChatInviteLink(chatId, inviteLink)
        } catch (err) {
            console.error('не удалось отозвать ссылку-приглашение: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // одобрить запрос на вступление
    async approveChatJoinRequest(chatId, userId) {
        try {
            return await this.bot.telegram.approveChatJoinRequest(chatId, userId)
        } catch (err) {
            console.error('не удалось одобрить запрос на вступление: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // отклонить запрос на вступление
    async declineChatJoinRequest(chatId, userId) {
        try {
            return await this.bot.telegram.declineChatJoinRequest(chatId, userId)
        } catch (err) {
            console.error('не удалось отклонить запрос на вступление: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

    // покинуть чат
    async leaveChat(chatId) {
        try {
            return await this.bot.telegram.leaveChat(chatId)
        } catch (err) {
            console.error('не удалось покинуть чат: ', err)
            if (this.debug) Log.log(err.stack || err.toString(), { level: "ERROR", status: "FAILED" })
        }
    }

}