const Discord = require("discord.js");
const bot = new Discord.Client();                                  
const config = require("./config.json");
const fs = require("fs");
const bdd = require("./bdd.json");



bot.on("ready", async () =>{
    console.log("le bot est op mec ok ???");
    bot.user.setStatus("dnd");
    bot.user.setActivity("!help");
    
})



bot.on("guildMemberAdd", member =>{
    bot.channels.cache.get('812600011178508288').send(`yo ${member}`);
    bot.channels.cache.get('825292949968912384').send("un nouveau membre !");
    member.roles.add('825292895476777008');
    member.send('bienvenue sur le server de over_genie ! abonne toi --->https://www.youtube.com/channel/UCUSlJu-RgX47QAC-ATcbodA<__');

})



bot.on("message", message => {
            if(message.member.hasPermission('MANAGE_MESSAGES')){
                if(message.content.length > 5){
                  message_bienvenue = message.content.slice(4)
                  console.log(message_bienvenue)
                  bdd["message-bienvenue"] = message_bienvenue
                Savebdd
                
            }
        }
    }
)

bot.on("message", message => {
    if(message.content.startsWith("!nuke")){
        message.delete();
        if(message.member.hasPermission('MANAGE_CHANNELS')){
            message.channel.send(`cette commande n'est pas encore disponible ! ${message.member}`);
        }

    }
})

bot.on("message", message => {
    if(message.content.startsWith("!help")){
        message.channel.send(`regarde ta liste de mp ${message.member}`);
        message.member.send(`voila les commandes ! -->admins : ban,kick,channel,clear,!staff-list-salon members:help,c'est-qui-over_genie,staff-liste`);
    }
})

bot.on("message", message => {
    if(message.content.startsWith("!c'est-qui-over_genie")){
        message.channel.send(`${message.member} over_genie c'est un petit youtubeur et le créateur du serveur !`);
    }
})

bot.on("message", message => {
    if(message.content.startsWith("!staff-list")){
        message.channel.send("over_genie itMS ariel_game_black lyna_all_rayan mestyZ gbriel");
    }
})




function Savebdd() {
    fs.writefile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("une erreur est survenue ");
    });
}




bot.login(config.token);