# Locanda bot

The official telegram bot of *La locanda del tech*

----------------------------------------------------------------------

![Language](https://img.shields.io/badge/Typescript-5.4.5-3178C6?logo=typescript&logoColor=FFF)
![Language](https://img.shields.io/badge/Node-20.14.0-339933?logo=node.js&logoColor=FFF)
![Language](https://img.shields.io/badge/Docker-1.5.2-0092E6?logo=docker&logoColor=FFF)
![Version](https://img.shields.io/badge/Version-0.0.1-brightgreen?logo=github&logoColor=FFF)
![Framework](https://img.shields.io/badge/powered_by-grammy-009DCA?logo=telegram&logoColor=FFF)
![Framework](https://img.shields.io/badge/Telegram_Bot_API-7.4-32A7D9?logo=telegram&logoColor=FFF)

----------------------------------------------------------------------

# 🔨 Developer Mode

## 🤖 How to start the bot

- Clone the repository or download via zip
- Write to [@botfather](https://telegram.me/BotFather) on telegram to create a new bot
- Set env variables in [`.env`](#env) file
- Run `yarn` to install dependencies
- Start the project using `yarn dev` or `docker container run`

## Env

**Please ensure to name the variable as reported below**

| Variable  | Description                  | Type    |
|-----------|------------------------------|---------|
| DEBUG     | Debug mode                   | Boolean |
| BOT_TOKEN | The bot token from botfather | String  |

----------------------------------------------------------------------

## 📖 Documentation

For bug reporting and feature requests, please refer to the [issues](https://github.com/La-Locanda-Del-Tech/locanda-bot/issues) page

## 👨🏻‍💻 Contributors

To add a new command and contribute to the project, fork this project and open a pull request

- Create a new branch with the name of the feature you want to add
- Create a new file inside `src/handler/command` folder
- Submit the pull request 

### Use this preset to create your command handler

Make sure the file name is the same as the command name

```typescript
import {bot} from '@/index.ts';

export default () => {
    bot.command("<command_name>", async (ctx) => {
        // Your code here
    });
}
```
----------------------------------------------------------------------

# 🧑🏻‍⚖️ License

The software is distribuited under the **MIT LICENSE**.
Every distribuition of the code without the credits to the original author is considered illegal

###### Copyleft &copy; 2024 - [La locanda del tech](https://t.me/+mqQJQ9BqKOViMmVk)
###### Made with ❤️ by [I'm Alex](https://github.com/ImAl3x03)
