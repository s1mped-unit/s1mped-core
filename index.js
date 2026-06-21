import readline from "node:readline/promises"
import { S1mpedCore } from "./s1mped-core.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(S1mpedCore.help('core'))
//  console.log(S1mpedCore.help('proxy'))

const TOKEN = await rl.question(" - Введите токен бота: ")
const bot = new S1mpedCore(TOKEN, true)

console.log("Бот успешно создан!")
const message = await rl.question(" - Напишите отправляемое сообщение: ")
try {

    const botInfo = await bot.get.me()
    
    async function handler(bot, ctx, args, extra) {
        const user = {
            id: ctx.message.from.id,
            name: ctx.message.from.first_name,
            username: ctx.message.from.username
        }
        console.log(` :: Получено сообщение от ${user.name} (@${user.username})`)
        await bot.reply.to(ctx, message)
        console.log("Ответ отправлен. Выход")
        bot.stop()
        process.exit(0)
    }

    bot.handler.command(bot, ["start"], handler)
    bot.start()
    console.log(`Отправьте @${botInfo.username} команду /start, он вам ответит`)

} catch {
    console.log("Нет подключения. Выход. Если вы запускаете из России, раскомментируйте 10-ю строку кода в файле s1mped-core/index.js для получения помощи")
    process.exit(1)
}