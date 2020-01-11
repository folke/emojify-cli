import readline = require("readline")
import emoji = require("node-emoji")
import program = require("commander")

program
  .version("1.0.0")
  .arguments("[text]")
  .action(function(text) {
    if (process.stdin.isTTY) {
      if (text === undefined) {
        program.outputHelp()
        process.exit(1)
      } else console.log(emoji.emojify(text))
    } else {
      const rl = readline.createInterface({
        input: process.stdin,
        terminal: false
      })

      rl.on("line", function(line) {
        console.log(emoji.emojify(line))
      })
    }
  })
  .parse(process.argv)
