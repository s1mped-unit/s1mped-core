/**
 * ## Random
 * ### s1mped utils
 * 
 * Упрощает генерацию случайных чисел или вариантов
 */
export class Random {
    
    /**
     * ## Выбирает случайный элемент массива или свойство объекта объекта
     * @param {array} array - массив с вариантами 
     * @example
     * ```js
     * const rewards = [10, 20, 30]
     * const reward = Random.choice(rewards)
     * 
     * console.log(reward)
     * // 20 или любое другое случайное значение из массива
     * ```
     * @returns один из элементов массива / свойства объекта
     */
    static choice(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    /**
     * ## Генерирует случайное число от a до b
     * @param {number} a - первое число
     * @param {number} b - второе число
     * @example
     * ```js
     * console.log(Random.randInt(1, 4))
     * // 3 или любое другое число между 1 и 4
     * ```
     * @returns {number} случайное число между a и b
     */
    static randInt(a, b) {
        return Math.floor(Math.random() * (b-a+1)) + a
    }

}