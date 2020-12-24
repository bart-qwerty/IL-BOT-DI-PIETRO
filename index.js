const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login(process.env.token);


bot.on("message", (message) => {
    if (message.content == "!fra") {
        message.channel.send("CAROTE,CAROTE-SOLO CAROTE")
    }
    if (message.content == "!giulia") {
        message.channel.send("GIULIA GUILIETTINA...LA MINCHIA SI AVVICINA")
    }
    if (message.content == "!gigi") {
        message.channel.send("SMETTILA DI FARE CASINO,PORCO DDDDD")
    }
    if (message.content == "!daddy") {
        message.channel.send("OI FRA,DAMMI UN PASSAGGIO SENNO' TI BUTTO FUORI DAL GRUPPO")
    }
    if (message.content == "!miche") {
        message.channel.send("MIIIIIIIIIIIIIIII...NCHIA, HAI ROTTO IL CAZZO")
    }
    if (message.content == "!edo") {
        message.channel.send("PAUSA SUDORE")
    }
    if (message.content == "!gabry") {
        message.channel.send("MA COS'HAI AL POSTO DEL NASO? L'EVEREST?")
    }
    if (message.content == "!pie") {
        message.channel.send("TI VA UN PO' DI SCHWEPPES...SOLO IO E TE? :smirk:")
    }
    if (message.content == "!giulia2") {
        message.channel.send("SNORK AHAHAH SNORK AHAHAHAH SNORK AHAHAHAH SNORK AHAHAHAH SNORK AHAHAHAH")
    }
    if (message.content == "!vitto") {
        message.channel.send("E' BIONDA,NON CAPIREBBE")
    }
});