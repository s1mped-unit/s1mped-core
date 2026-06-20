import { Markup, Telegraf } from "telegraf"

export class S1Markup {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    inline(matrix) {
        const buttons = matrix.map(row =>
            row.map(btn => {
                if (Array.isArray(btn) && btn[1]?.startsWith('http')) {
                    return Markup.button.url(btn[0], btn[1])
                }
                if (Array.isArray(btn)) {
                    return Markup.button.callback(btn[0], btn[1])
                }
                return Markup.button.callback(btn, btn)
            })
        )
        return Markup.inlineKeyboard(buttons)
    }

    reply(matrix, options = { resize: true, oneTime: false }) {
        let keyboard = Markup.keyboard(matrix);
        if (options.resize) keyboard = keyboard.resize();
        if (options.oneTime) keyboard = keyboard.oneTime();
        
        return keyboard.reply_markup;
    }
}