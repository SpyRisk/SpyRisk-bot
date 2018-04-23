const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
	bot.user.setGame("Dev By SpyRisk");
	console.log("Bot est connecter");
});

bot.login("NDM4MDQyNjg3NzM2Nzc0NjU2.Db-2oQ.FDZJ0AeJER4hb0ig9Uq810jAqpU");
