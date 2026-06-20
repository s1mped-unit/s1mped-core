/**
 * ## Form
 * ### s1mped utils
 * 
 * Склоняет слова в правильную форму
 * используйте Form.plural(n, forms)
 */

export class Form {

    /**
     * ## Склоняет слово в правильную форму
     * @param {number} n - число 
     * @param {Array} forms - три формы (Им.п и ед.ч, Р.п и ед.ч, Р.п и мн.ч)
     * @example
     * ```js
     * const reward = 3
     * 
     * console.log(`Вы получили ${n} ${Form.plural(reward, ['алмаз', 'алмаза', 'алмазов'])}`)
     * // Вы получили 3 алмаза
     * @returns {string} одна форма
     */
    static plural(n, forms) {
        if (!Number.isInteger(n)) return forms[1]
        
        const an = Math.abs(n)
        const mod10 = an % 10
        const mod100 = an % 100

        if (mod100 >= 11 && mod100 <= 14) return forms[2]
        if (mod10 ===1 ) return forms[0]
        if (mod10 >= 2 && mod10 <= 4) return forms[1]
        return forms[2]

    }

}