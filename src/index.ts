require('dotenv').config()

import http from 'http'
import { Bot } from './lib/bot'
import functions from './functions'

const port = process.env.WEBSITES_PORT || process.env.PORT || 8080

// Our Bot client!
const bot = new Bot()

// Load our bot's functions
bot.load(functions).then(async () => {
  // Authenticate our bot
  await bot.login(process.env.BOT_TOKEN)

  // Log a snarky comment
  const rating = Math.floor(Math.random() * 10)
  bot.log.success(`I'd rate the startup a ${rating}/10`)
})

const friends = [
  'Jason',
  'Em',
  'Tierney',
  'Sam',
  'Clippy'
]

function susGen () {
  const num = Math.floor(Math.random() * friends.length)
  return friends[num]
}

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`<h1>${susGen()} is sus.</h1>`)
})

server.listen(port, () => {
  bot.log.success(`Server running at port ${port}`)
})
