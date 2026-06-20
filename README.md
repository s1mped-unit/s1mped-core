# s1mped-core

### Обертка над telegraf для упрощения работы

## install

git clone https://github.com/s1mped-unit/s1mped-core.git

cd s1mped-core

npm install

npm start

## usage

```js
import { S1mpedCore } from "./s1mped-core.js"

const bot = new S1mpedCore("BOT_TOKEN")

bot.start()

/* если вы пытаетесь запустить из россии, но возвращается ошибка, используйте прокси.
раскомментируйте следующую строку чтобы получить информацию об использовании прокси */
//console.log(S1mpedCore.help('proxy'))

async function bh(bot, ctx, args, extra) {
    await bot.send.message(ctx.message.chat.id, "это выполнится до profile")
    return true
}

async function profile(bot, ctx, args, extra) {
    await bot.reply.to(ctx, "hello world")
    bot.stop()
}

bot.handler.message(bot, ["profile", "профиль"], profile, { beforeHandler: bh })
/* beforeHandler выполняется до обработчика */

```

## core api

### bot.send.message(chatId, text, extra)
отправить сообщение в чат

### bot.send.photo(chatId, file, extra)
отправить фото в чат

### bot.edit.messageText(chatId, messageId, text, extra)
изменить текстовое сообщение

### bot.reply.to(ctx, text, extra)
ответ на сообщение

### bot.handler.message(bot, ["start", "старт"], handler, extra)
создать обработчик

### bot.ping(targetId)
задержка от отправки до результата в мс

