import fs from "fs"
import readline from "node:readline/promises"
import { fileURLToPath } from "url"
import path from "path"
import { Timer } from "./time.js"

const __filename = fileURLToPath(import.meta.url)
const scriptDir = path.dirname(__filename)
const botRoot = path.resolve(scriptDir)
process.chdir(botRoot)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const logPath = path.resolve(import.meta.dirname, './app.log')
await rl.question(" Начать читать лог? (y/N)")
process.stdout.write("\x1Bc")

while (true) {
    const text = await fs.readFileSync(logPath, 'utf8')

    console.log(text)

    const read = await rl.question("read logs\n [ENTER] update | [q] - exit #> ")
    if (read === "q") {
        process.exit(0)
    }
    process.stdout.write("\x1Bc")
}