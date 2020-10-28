import { Message } from 'discord.js'
import { Bot } from '../lib/bot'

/**
 * 🤔
 */
export function code(bot: Bot) {
  bot.command('code', async (_: string, msg: Message) => {
    bot.log.info('Someone said .code?', msg)
  })
}
