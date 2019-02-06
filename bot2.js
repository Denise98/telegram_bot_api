const TelegramBot = require('node-telegram-bot-api');


var token = '609400051:AAE-y4o2PmDsz5ejotZbPWm0B3YX7Y1qPl8';

const bot = new TelegramBot(token, {polling: true});

let videos = [
  { id: "CAADBAADywADg_0RBWroW03KL3p2Ag", nombre: "tennosuke"  },
  { id: "CAADBAADHwEAAoP9EQURxruijsNR-wI", nombre: "Senpai"    },
  { id: "CAADBAAD0QADg_0RBWOJlKZOV0VZAg", nombre: "torpedo"    }
  
];

let dest = { id: "CAADBAAD_QADg_0RBaV2m_84R3JHAg", nombre: "destape"}

let pru = { id: "CAADBAADFQEAAoP9EQUQ-qyp8iDQmgI", nombre: "prukogi"}

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const textoRecibido = msg.text;
  if (textoRecibido == "/love") {
    bot.sendMessage(chatId, 'sticker con amor').then(() => {
      var r = Math.floor(Math.random() * 2);
        bot.sendSticker(chatId, videos[r].id);
      });
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const textoRecibido = msg.text;
  if (textoRecibido == "/destape") {
    bot.sendMessage(chatId, 'toma destape!').then(() => {
        bot.sendSticker(chatId, dest.id);
      });
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const textoRecibido = msg.text;
  if (textoRecibido == "/patch") {
    bot.sendMessage(chatId, 'Prukogi!').then(() => {
        bot.sendSticker(chatId, pru.id);
      });
  }
});
