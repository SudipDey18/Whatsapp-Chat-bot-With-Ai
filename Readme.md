# 🤖 WhatsApp AI Bot by Sudip Dey

A smart and friendly WhatsApp bot powered by AI—auto-replies, quick answers, and a touch of fun in every message! Built using `whatsapp-web.js`, `puppeteer`, and OpenRouter AI models.

---

## ✨ Key Features

* 🤖 **AI Chat Replies**: Casual, friendly AI responses using `deepseek/deepseek-r1-0528:free`.
* 🔍 **Quick AI Search**: Start with `#ai-` for instant answers.
* 🔒 **Message Filtering**: Skips messages with "password" or personal content.
* 📲 **QR Login**: Connect via QR code from the terminal.
* 🧠 **Headless Browsing**: Lightweight puppeteer automation.

---

## 🧑‍💻 Getting Started

### 📦 Step 1: Clone the Repo

```bash
git clone https://github.com/SudipDey18/Whatsapp-Chat-bot-With-Ai.git
cd Whatsapp-Chat-bot-With-Ai
```

### 📥 Step 2: Install Dependencies

```bash
npm install
```

### ⚙️ Step 3: Create `.env` File

```env
API_KEY=your_openrouter_api_key
```

---

## 🔑 Get Your OpenRouter API Key

1️⃣ **Sign Up**
➡ Visit [OpenRouter.ai](https://openrouter.ai)
➡ Click **Sign Up** (Google, Email, or GitHub)

2️⃣ **Search the Model**
➡ Search: `deepseek-r1-0528 free`
➡ Click the result: **DeepSeek r1 0528 free**

3️⃣ **Open API Tab**
➡ Click on the **API** tab of the model page

4️⃣ **Create API Key**
➡ Click **Create Key**
➡ Name it (e.g., "MyBotKey") and click **Create**

5️⃣ **Copy & Use the Key**
➡ Click the copy icon next to your key
➡ Paste it in your `.env` file securely

---

## 🚀 Run the Bot

### ▶️ First Time Only

```bash
node index.js
```

> If everything works, you'll see a QR code in terminal to scan with WhatsApp.

### 🔁 Every Time You Rerun (if any error like auth or module missing):

```bash
rm -rf node_modules .wwebjs_auth && npm install && node index.js
```

> If you face issues on rerun, this command deletes `node_modules` and `.wwebjs_auth`, reinstalls dependencies, and restarts.

---

## 💬 How to Interact

| 💬 Type        | ✅ Example                       | 🤖 Bot Reply                               |
| -------------- | ------------------------------- | ------------------------------------------ |
| Chat Message   | `Hey, what's up?`               | `Yo, all good here! 😊`                    |
| AI Search      | `#ai-What is AI?`               | `AI stands for Artificial Intelligence...` |
| Invalid Format | `#ai`                           | `*Format must be*\n#ai-\"your question\"`  |
| Filtered Text  | `My password is secret`         | *(Bot will skip this message)*             |
| Personal Text  | `Hey I need help with my email` | *(Bot will skip this message)*             |

---

## ⚙️ Internal Tech Stack

* 🟢 **WhatsApp JS SDK**: [`whatsapp-web.js`](https://github.com/pedroslopez/whatsapp-web.js)
* 🎭 **Headless Chrome**: [`puppeteer`](https://pptr.dev/)
* 👻 **Stealth Plugin**: [`puppeteer-extra-plugin-stealth`](https://github.com/berstend/puppeteer-extra)
* 📷 **QR Terminal**: [`qrcode-terminal`](https://github.com/gtanner/qrcode-terminal)
* 🔐 **Env Loader**: [`dotenv`](https://github.com/motdotla/dotenv)

---

## 🧪 Code Snippet

```js
import 'dotenv/config';
import { Client, LocalAuth } from 'whatsapp-web.js';

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  }
});

client.on('ready', () => console.log('🤖 Client is ready!'));
client.initialize();
```

---

**Made with ❤️ by Sudip Dey. Happy Chatting!**
