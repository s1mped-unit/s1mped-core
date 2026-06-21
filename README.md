# s1mped-core

### Обертка над telegraf для упрощения работы

## install

### Linux
```bash
git clone https://github.com/s1mped-unit/s1mped-core.git

cd s1mped-core

npm install
```


### Windows
#### 1. установка из PowerShell (рекомендую)
1. откройте powershell
2. вставьте команды:
```powershell
git clone https://github.com/s1mped-unit/s1mped-core.git

cd s1mped-core

npm install
```

#### 2. установка zip (сложно)
1. установите и распакуйте zip
2. откройте powershell
3. перейдите в директорию, куда установлен s1mped core
4. вставьте команды для установки зависимостей:
```powershell
npm install
```

## usage

используйте `npm start` сразу после установки, чтобы просмотреть пример работы

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

* ### Добавлены api модули действий админов, webhook и прочее

* ### Улучшена отладка

* ### Добавил тутор для установки на Windows


## developers

<a href="https://t.me/s1mped">
    <img src="https://cdn.simpleicons.org/telegram", width="20">
    <b>s1mped (разработчик)</b>
</a>

<a href="https://t.me/flexyj71">
    <img src="https://cdn.simpleicons.org/telegram", width="20">
    <b>flexyj71 (тестер)</b>
</a>