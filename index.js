import qrcode from 'qrcode-terminal';
import pkj from 'whatsapp-web.js';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import dotenv from 'dotenv';

dotenv.config();

const { Client, LocalAuth } = pkj;
puppeteer.use(StealthPlugin());

const wh = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: puppeteer,
    puppeteerOptions: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--no-zygote'  // Add this flag
        ]
    }
});

wh.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    })
})

wh.on('ready', () => {
    console.log("🤖 Client is REady");
})

wh.on('message', async (message) => {
    console.log("From: " + message.from);
    console.log("Message: " + message.body);
    if (message.body.includes("#ai") || message.body.includes("#Ai")) {
        if (message.body === "#ai" || message.body === "#Ai") {
            wh.sendMessage(message.from, `*Formate must be* 
#ai-"your Question"`);
        } else {
            let data = message.body.split('-');
            wh.sendMessage(message.from, `searching....`);
            let res = await ai_search(data[1]);
            message.reply(res);
        }
    } else if (message.body.includes("password") || message.body.includes("Password")) {
        // nothing
        message.reply("ok");
    } else {
        if (message.from.endsWith('@c.us')) {
            let reply = await ai_reply(message.body);
            if (reply == "null") {
                console.log(reply);

            } else {
                message.reply(reply);
            }
        }
    }

});


wh.initialize();


async function ai_search(prompt) {
    // console.log(prompt);

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "nousresearch/deephermes-3-llama-3-8b-preview:free",
                "messages": [
                    {
                        "role": "user",
                        "content": `You’re an expart AI answer bot.
                            1. If the message is a question → answer it.
                            2. Answer concisely for sending in whatsapp.
                            3. Output only the answer text—no extras strictly follow this.
                            Question: ${prompt}
                            Answer:`
                    }
                ]
            })
        });

        const data = await response.json();
        return data.choices[0]?.message?.content || "No response from AI";

    } catch (error) {
        console.error("AI Error:", error);
        return "Error fetching AI response";
    }
};

async function ai_reply(message) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1:free",
                "messages": [
                    {
                        "role": "user",
                        "content": `You are a WhatsApp auto-reply bot. Act like a man and reply   in funny words. When you receive a message:
                            1. If the message contains personal content, output null.
                            2. Otherwise, reply in the same tone and language—keep it casual, playful, and friendly, mirroring any slang and emojis.
                            3. Output ONLY the reply text with ZERO additional commentary. Never include explanations or thoughts.
                            4. Respond instantly without prolonged thinking.
                            Message: ${message}
                            Reply:`
                    }
                ]
            })
        });

        // console.log("working");

        const data = await response.json();
        // console.log(data);

        return (data.choices[0]?.message?.content || "null");

    } catch (error) {
        console.error("AI Error:", error);
        return "null";
    }
}