const Discord = require("discord.js");
const client = new Discord.Client();



    const { prefix, token, ownerid, invitelink } = require("./config.json");

        const clean = text => {
        if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else return text; }
        


client.on("ready", () => {
        console.log("Moddy | Startup is a success!");
        client.user.setGame(`myhelp or @Moddy help! (In alpha!)`)
});



client.on("message", (message) => {
    const command = message.content.toLowerCase();
    const mprefix = `<@389692034132213760> `;
    if ((!message.content.startsWith(prefix) && !message.content.startsWith(mprefix)) || message.author.bot) return;
    let args = message.content.split(/ +/).slice(message.content.startsWith(prefix) ? 1 : 2);
    
    if (command.startsWith(prefix + `#`) || command.startsWith(mprefix + `#`)) {
        message.channel.send(`#`);
    }
    
    });



client.login(token);
