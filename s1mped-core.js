import { Telegraf } from "telegraf";

import { Reply } from "./src/api/reply.js";
import { Handler } from "./src/api/handlers.js";
import { Send } from "./src/api/send.js";
import { Edit } from "./src/api/edit.js";
import { Delete } from "./src/api/delete.js";
import { Get } from "./src/api/get.js";
import { S1Markup } from "./src/api/sendMarkup.js";

import { Log } from "./src/utils/logger.js";
import { Timer } from "./src/utils/time.js";


function connect(token, extra) {
    return new Telegraf(token, extra)
}

function sendError(text) {
    Log.log("s1mped core: " + text, { level: "ERROR" })
    throw new Error(text)
}

function debugMessage(debug, text) {
    if (debug) {
        console.log("  [s1core] " + text)
        Log.log("s1mped core: " + text)
    }
}

function checkStartup(debug, token, extra) {
    debugMessage(debug, "Чтобы отключить логи обертки, параметр debug должен быть false")
    debugMessage(debug, "Проверка на возможность запуска")
    const tokenRegex = /^\d+:[A-Za-z0-9_-]{35}$/
    if (!token) sendError(`Вы не указали токен. Используйте console.log(bot.help('core'))`)
    if (!tokenRegex.test(token)) sendError(`Вы указали невалидный токен`)
    debugMessage(debug, "Проверка пройдена успешно")
    return connect(token, extra)
}

/**
 * # s1mped core
 * ### https://github.com/s1mped-unit/s1mped-core
 * @param {string} token - укажите токен
 * @param {boolean} debug - режим отладки
 * @param {object} extra - дополнительные параметры
 * @example
 * ```js
 * import config from "../cfg.json" with { type: "JSON" }
 * const token = config.telegram.token
 * const bot = new S1mpedCore(token)
 * bot.start()
 * 
 * // больше информации
 * console.log(bot.help('core'))
 * 
 * s1pmed core 1.1.5 && s1mped utils new 1.1.5
 * ```
 * @returns {S1mpedCore} bot
 * 
 */
export class S1mpedCore {
    constructor(token, debug = false, extra={}) {
        this.debug = debug
        this.bot = checkStartup(debug, token, extra)
        this.handler = new Handler(this.bot)
        this.reply = new Reply(this.bot, this.debug)
        this.send = new Send(this.bot, this.debug)
        this.edit = new Edit(this.bot, this.debug)
        this.del = new Delete(this.bot, this.debug)
        this.get = new Get(this.bot, this.debug)
        this.markup = new S1Markup(this.bot, this.debug)
        this.version = "1.1.5"
    }

    /**
    * @typedef {Object} S1StartExtra
    * @property {Object} [polling] - настройки режима long polling
    * @property {number} [polling.timeout] - таймаут запроса к Telegram API (в сек)
    * @property {number} [polling.limit] - максимальное количество апдейтов за один запрос
    * @property {string[]} [polling.allowedUpdates] - типы апдейтов, которые бот будет получать
    * @property {boolean} [polling.dropPendingUpdates] - удалить все накопленные апдейты при запуске

    * @property {Object} [webhook] - настройки webhook режима
    * @property {string} [webhook.domain] - домен, куда Telegram будет отправлять апдейты
    * @property {string} [webhook.hookPath] - путь webhook endpoint
    * @property {number} [webhook.port] - порт локального сервера
    * @property {Object} [webhook.tlsOptions] - SSL настройки

    * @property {boolean} [dropPendingUpdates] - удалить очередь старых апдейтов перед запуском бота
    * @property {string[]} [allowedUpdates] - глобальный список типов апдейтов
    * @property {number} [handlerTimeout] - максимальное время выполнения обработчика апдейта (в мс)
    */


    /**
    * ### запустить бота
    * @param {S1StartExtra} extra - конфигурация запуска бота
    * 
    * ```js
    * bot.start({dropPendingUpdates: true})
    * 
    * # просмотр дополнительной информации
    * console.log(bot.help('start'))
    * ```
    * @returns {Promise<void>}
     */
    async start(extra = {}) {
        this.bot.launch(extra)
        if (this.debug) Log.log('starting...')
    }

    /**
     * ### остановить бота
     * @example
     * ```js
     * bot.stop()
    * ```
     */
    async stop() {
        this.bot.stop()
        if (this.debug) Log.log('stopping...')  
    }


    /**
     * ### задержка от запроса до ответа
     * @param targetId - укажите id чата, в который будет отправлено сообщение
     * @example
     * ```js
    * const ping = bot.ping(00000000)
    * 
    * console.log(ping) 
    * // "300мс"
    * ```
     * @returns {string} ping - "300мс"
     */
    async ping(targetId) {
        Timer.time()
        await this.send.messageWait(targetId, 'ping')
        const end = Timer.stop()
        return end + "ms"
    }

    /**
     * ### Помощь
     * @example
     * ```js
     * console.log(help('core'))
     * // информация об обертке
     * 
     * console.log(help('start'))
     * // информация о start()
     * @returns {string} строка с информацией, которую можно вывести в console.log()
     */
    static help(target) {
        const helper = {
            core: (
                "-=- s1mped core 1.1.5: документация -=- \n\n" +
                " -- Пример использования:\n" +
                `const token = "BOT_TOKEN"\nconst bot = new S1mpedCore(token)\nbot.start()\nbot.send.message(chatId, "hello world")\nbot.stop()\n\n` +
                "Больше информации можно увидеть в нашем github\n :: https://github.com/s1mped-unit/s1mped-core ::\n\n" +
                "\// developers: {https://github.com/genbus | @s1mped}, {https://github.com/flexyj71 | @flexyj71}"
            ),
            proxy: (
                `
Пример кода с прокси

import { HttpsProxyAgent } from 'hpagent'
import { S1mpedCore } from ''

const proxyAgent = new HttpsProxyAgent({
    keepAlive: true,
    proxy: 'http://127.0.0.1:PORT' // укажите порт, вместо PORT
})

const bot = new S1mpedCore("BOT_TOKEN", false, {
    handlerTimeout: 180000,
    telegram: {
        agent: proxyAgent,
        timeout: 120000
    }
})`
            )
        }
        if (!target) return " :: Укажите тему поиска"
        return helper[target]

    }
}
