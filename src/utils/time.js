import { Form } from "./form.js"

/**
 * ## DateTime
 * ### s1mped utils
 * 
 * Форматирует время
 */
export class DateTime {

    /**
     * ## Переводит миллисекунды в часы, минуты и секунды (hms)
     * @param {number} ms - миллисекунды
     * @example
     * ```js
     * const time = 13449900
     *
     * const hms = DateTime.msToHMS(time)
     * console.log(hms)
     * // [3, 44, 9]
     *
     * const shortHmsFormat = DateTime.HMSToSTime(hms)
     * console.log(shortHmsFormat)
     * // 3 часа
     *
     * const fullHmsFormat = DateTime.HMSToTime(hms)
     * console.log(fullHmsFormat)
     * // 3ч 44м 9с
     * ```
     * @returns {Array} [часы, минуты, секунды]
     */
    static msToHMS(ms) {
        const totalSeconds = Math.floor(ms / 1000)
        const h = Math.floor(totalSeconds / 3600)
        const m = Math.floor(totalSeconds % 3600 / 60)
        const s = Math.floor(totalSeconds % 60)

        return [h, m, s]
    }

    /**
     * ## Переводит миллисекунды в часы, минуты и секунды (hms)
     * @param {number} ms - миллисекунды
     * @example
     * ```js
     * const time = 13449900
     *
     * const hms = DateTime.msToHMS(time)
     * console.log(hms)
     * // [3, 44, 9]
     *
     * const shortHmsFormat = DateTime.HMSToSTime(hms)
     * console.log(shortHmsFormat)
     * // 3 часа
     * ```
     * @returns {string}
     */
    static HMSToSTime([h, m ,s]) {
        if (h >= 1) return h + " " + Form.plural(h, ['час', 'часа', 'часов'])
        else if (m >= 1) return m + " " + Form.plural(m, ['минута', 'минуты', 'минут'])
        else return s + " " + Form.plural(s, ['секунда', 'секунды', 'секунд'])
    }

    /**
     * ## Переводит миллисекунды в часы, минуты и секунды (hms)
     * @param {number} ms - миллисекунды
     * @example
     * ```js
     * const time = 13449900
     *
     * const hms = DateTime.msToHMS(time)
     * console.log(hms)
     * // [3, 44, 9]
     *
     * const fullHmsFormat = DateTime.HMSToTime(hms)
     * console.log(fullHmsFormat)
     * // 3ч 44м 9с
     * ```
     * @returns {string}
     */
    static HMSToTime([h, m, s]) {
        const parts = []

        if (h) parts.push(`${h}ч`)
        if (m) parts.push(`${m}м`)
        if (s || parts.length === 0) parts.push(`${s}с`)

        return parts.join(' ')
    }

    /**
     * ## Форматирует дату в миллисекундах в красивую строку
     * @param {number} ms - миллисекунды
     * @example
     * ```js
     * const time = 134499000
     *
     * const stringDate = DateTime.formatDate(time)
     * console.log(stringDate)
     * // 02 января 1970 г.
     * ```
     * @returns {string} date
     */
    static formatDate(ms) {
        const date = new Date(
            Date.UTC(1970, 0, 1) + ms
        )
        return date.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
    }

    /**
     * ## Переводит строку со временем в мс
     * @param {string} str 20:20:20.200
     * @example
     * ```js
     * const time = "20:20:20.200"
     * 
     * const ms = DateTime.parseTime(time)
     * console.log(ms)
     * // 73220200
     * @returns {number} ms
     */
    static parseTime(str) {
        const [hms, msPart] = str.split('.')
        const [hours, minutes, seconds] = hms.split(':').map(Number)
        const milliseconds = msPart ? Number(msPart) : 0
        return hours*3600000 + minutes*60000 + seconds*1000 + milliseconds
    }

}

/**
 * ## Timer
 * ### s1mped utils
 * 
 * Засекает время
 * Использование Timer.time(); Timer.stop()
 */
export class Timer {

    /**
     * ## Засечь время
     * @example
     * ```js
     * Timer.time()
     * await Timer.wait(1000)
     * console.log(Timer.stop())
     * // 1001
     * ```
     */
    static time() {
        this.startTime = performance.now()
        return this.startTime
    }

    /**
     * ## Остановить таймер
     * @param {boolean} ignoreError - если таймер не был запущен ошибки не будет
     * @example
     * ```js
     * Timer.time()
     * await Timer.wait(1000)
     * console.log(Timer.stop())
     * // 1001
     * ```
     */
    static stop(ignoreError=false) {
        if (!this.startTime) { if (!ignoreError) { throw new Error("таймер не был запущен") } else return 0 }
        const elapsed = performance.now() - this.startTime
        this.startTime = 0
        return Math.floor(elapsed)
    }

    /**
     * ## Подождать указанное кол-во мс
     * @example
     * ```js
     * Timer.time()
     * await Timer.wait(1000)
     * console.log(Timer.stop())
     * // 1001
     * ```
     */
    static wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}