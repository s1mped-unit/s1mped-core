import readline from "node:readline/promises"
import { S1mpedCore } from "./s1mped-core.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(S1mpedCore.help('core'))

const TOKEN = await rl.question(" - Введите токен бота: ")
const bot = new S1mpedCore(TOKEN)
