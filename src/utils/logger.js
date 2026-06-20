import { DateTime } from "./time.js" 
import fs from "fs"
import path from "path"

/**
 * ## Logger
 * ### s1mped utils
 * 
 * Логирует сообщения в файл (для чтения используйте утилиту readLogs.js)
 * используйте Log.log("текст сообщения")
 */
export class Log {

    /**
     * ## Логирует указанное сообщение в файл 
     * @param {string} text - текст сообщения
     * @param {Object} extra - дополнительные настройки
     * 
     * @example
     * ```js
     * const logTxt = "это сообщение можно прочитать в файле app.log"
     * Log.log(logTxt, { level: "WARN", date: true, status: "OK" })
     * // [WARN] OK | это сообщение можно прочитать в файле app.log [2026-00-00T00:00:00.000Z]
     * 
     * Log.log("и это")
     * // [INFO] и это
     * ```
     */
    static log(text, extra = {}) {
        let message = `[${extra.level || "INFO"}]`
        if (extra.status) message += ` ${extra.status} |`
        message += ` ${text}`
        if (extra.date) message += ` [${DateTime.getDate()}]`
        message += extra.end || "\n"

        const logPath = path.resolve(import.meta.dirname, "./app.log")
        try {fs.appendFileSync(logPath, message)}
        catch (err) {
            console.error(`  [s1utils] logger error: ${err.message}\n`)
        }
    }

}