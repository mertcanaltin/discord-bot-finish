const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Korkut')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('hermoni gifi akarrrr?')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/751c555eb3c3ceab38d5a9b038b6211d/tumblr_n69ad4sTPj1sg49umo1_250.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hermonie',
  description: 'Bot gif paylaşır.',
  usage: 'hermonie'
};