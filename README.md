# s1mped-core

### Обертка над telegraf для упрощения работы

## install

```bash
git clone https://github.com/s1mped-unit/s1mped-core.git

cd s1mped-core

npm install

npm start
```


## usage

```js
import { S1mpedCore } from "./s1mped-core.js"

const bot = new S1mpedCore("BOT_TOKEN")

async function beforeHandler(bot, ctx, args, extra) {
    await bot.send.message(ctx.message.chat.id, "это выполнится до profile")
    return true
}

async function startHandler(bot, ctx, args, extra) {
    await bot.reply.to(ctx, "hello world")
    bot.stop()
}

bot.handler.message(bot, ["старт", "start"], startHandler, { beforeHandler: beforeHandler })

bot.start()
```


## core api

### bot.send.message(chatId, text, extra)
отправить сообщение в чат

### bot.send.photo(chatId, file, extra)
отправить фото в чат

### bot.edit.text(chatId, messageId, text, extra)
изменить текстовое сообщение

### bot.reply.to(ctx, text, extra)
ответ на сообщение

### bot.handler.message(bot, ["start", "старт"], handler, extra)
создать обработчик

### bot.ping(targetId)
задержка от отправки до результата в мс


## last changes

* ### Добавлен bot.handler.command
> Принимает вторым аргументом массив с командами.
>> Пример: bot.handler.command(bot, ["start"], startHandler)

* ### Улучшен index.js
> `npm start` для запуска

* ### Переделан пример работы в README.md


## developers

<a href="https://t.me/s1mped">
    <img src="https://cdn.simpleicons.org/telegram", width="20">
    <b>s1mped (разработчик)</b>
</a>

<a href="https://t.me/flexyj71">
    <img src="https://cdn.simpleicons.org/telegram", width="20">
    <b>flexyj71 (тестер)</b>
</a>