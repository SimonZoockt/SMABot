console.log('Bot wird aufgesetzt...')
const Discord = require('discord.js')
const fs = require('fs')
 
const config = JSON.parse(fs.readFileSync('config.json' , 'utf8'))

const client = new Discord.Client()

client.on('ready' , () => {
    console.log('Bot ist eingeloggt als ' + client.user.tag + '!')
    console.log('Der Bot ist in ' + client.guilds.cache.size + ' Server aktiv!')
    client.user.setActivity("VARO auf Smxn.tk", {type:"PLAYING"})

})




client.on('message' , (message) =>{
    if(!message.member.user.bot && message.guild){
        if(message.content == '!ip'){
            message.channel.send('IP: Smxn.tk')
            console.log(message.member.user.tag + ' executed command !test! ')

        }
    }
})

client.on('message' , (message) =>{
    if(!message.member.user.bot && message.guild){
        if(message.content == '!vote'){
            message.channel.send('Simon ist nun Raus!')
            console.log(message.member.user.tag + ' executed command !vote! ')

        }
    }
})
            

client.login(config.token)
