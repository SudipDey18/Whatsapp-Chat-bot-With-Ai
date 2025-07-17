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

```bash
node index.js
```

1. Terminal shows a QR code.
2. Scan it from WhatsApp: Settings → Linked Devices → Link a Device.
3. After login, look for `Client is ready!` in the terminal.

### 📷 Sample QR Code

![Sample QR Code](https://lh3.googleusercontent.com/fife/ALs6j_HKYqOIdYGkYqMVq6vWIZXnuY6OR4h8p-Wpb45WFe9vh2Z3iHunqAnjP6G8mw9XJn4gIh5lFF_y6AgBgX6mlTV6iQtW2tfYhKgvzbsw6qXvomx7IwVyM68qE7aJRVkxOiDjmH_J3xrcKMZzDPzNBdhQPKVD4A8f9wf9L57MIz0iWa_sFnH40ax6IITx93BpTo-nV3GlfAPmpsZx7ecg65WirJrC6mGHZJzbfwHjl-0ozycRDX52MlArmmQ11cwLtMSU9TyzfHEZdlvNcTCOYes6nEpoFkbWlm-oG1sn8rhRD3WkKt3heLKl1R85RDQqLiMhREPWzttR4wDZMYiWOIrm2OIrMgHrB5E79b-9PKKGxtvOyvKBVTzeHt6MjWIDX0Nfvc-6AgQneRMnFr8DJBiBi_hiBJ3J8j4TRWazrraQVR1BMEe4Plkyes_lYV02RByw_3zCwUlH1jqwsHfuTeMLgIFD8jg6ZxKfsP-FBtZszEy14ukFEPPpayD_2uhl5mXhLHlMRIsRSIbrA07BELVP_KHytvoQh2wJI1LLolMzJtV7IiIJMRu_B22IiQzq5syEfTFt_0b4fg-JFLNzssfwwlc0oYH60F738WHIN_t1eNhKlcYciqs08LoHX0H9D4XeIgxYgRS8ro_PfAXuGkCBMIq-n9J8pYVurVFTcxyWzFgafnrq94pL5gPNPQm3p9DV90QR0ClpfVyxfeTtXtUBrii1mmqQqBzbzFD2onF3UEWnygzKj2Eyi_-4vTig2620oMJuN_v2_zsYhsi3-Ud6JJdpp7SEsZ7nyFGMTk8SJkuXt85i_sSGPvWkaqd8s_B8wx0y-Cq1n0HGAQK3FFjeX2zV_HenyiD9ZWe6NysNdsLElzitd-SkIfGxOEXjs2C_Zjm7dAkzbAC1JVl_62dcJRYNSu1QfwVXW1By4N3hq_VYw4kCzf3DjKvl0vUrEhoAEepoa2Oiu2i6wJwrmuH_wYiYoBNZZA9EQi2iV_SvL6k3aOC2dDtyeGpjy6ic5PmSCCi_3zN8XHIKwvp61eujsPzI9EpKDWfG0yGd6RDbQRPEIal0JN7OS99Rsyvgo4MFWjqxSyC4OJFSSRRyMDhgHP_Qr6HlWIADo0Paak8SdCHDxwzCEnIthKvei3Kv1dSW2EUAZRaDFqMAlJi1wkH4go5QonZ_jf6L1dG2DPUqwPBWuAvfEDMxfQAQszkEHZhoxNYSDgY5xP6xfxsD1AnYh9MsrwGlcuwPCHZBZ2UpAMmCZepI4szyMuNdX5_GhEyTaEt48blULTbIgBZWXX1JIVc-sVG4JEme1oX8jtrg-hxWUznYjj4AThlNXhMdsjJ1Dr8aL3ZK9CLvSE0RJKhO2EJY0jcL42cOxkKq0S6rdFpOhMVgwo3pZ_Cr4Qplpz0qj-zYZtQL6PrBzNqfXfv84XG22fMdHxnc-oZhMMEgVaKmjk6bo-FpigI8RkpUaDEGw3BtTI4ovWDfJeC_8YsVWSc7HbJv44NDB9fMNCbdwOMiYiQU2OpvrYyhpe_dlwqeahhAWhY4UNozsEdNbdefYxVskh13bQZ856tvYwqOfq6iJtSm2F00dALZOL-agAVzQPtTUI4kWA7pcD0y8A8I65p6PGDtvvjjvUnVks6Y3Nbgsh9nmkaAcjcrHK8)

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
