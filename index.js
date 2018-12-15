const botconfig = require("./botconfig.json");
const Discord =require("discord.js");
const api = "https://api.battlemetrics.com/servers/2755399";
const snekfetch = require("snekfetch");
const { RichEmbed } = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} esta online!`);
  bot.user.setActivity("Territorios Latinos");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}players`){
    snekfetch.get(api).then(r => {
      const embed = new RichEmbed() // Creates the embed
        .setTitle('Prisioneros en la isla:') // Sets the title of the embed
        .setDescription(r.body.data.attributes.players)
        .setColor("#0xFF0000")

        message.channel.send({embed}); // Sets the description of the embed (e.g. 7)

    });
  }

  if(cmd === `${prefix}ip`){

    let botembed = new Discord.RichEmbed()
    .setTitle("IP del Servidor")
    .setDescription("172.107.16.173:28102")
    .setColor("#0xFF0000")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}pagina`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Página Web")
    .setURL("http://www.scumterritorioslatinos.com/")
    .setDescription("Página Web oficial de la comunidad")
    .addField("Apoyo y Soporte", "Chatea Online 24/7 con la administracón", true)
    .setColor("#0x00AE86")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}foro`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Foro de la Comunidad")
    .setURL("http://www.scumterritorioslatinos.com/index.php/community/")
    .setDescription("Todo lo que necesitas saber de nuestra comunidad")
    .addField("Registro y Postulaciones", "Forma parte de nuestra comunidad", true)
    .addField("Denuncias", "Nuestro foro es el unico medio para realizar denuncias", true)
    .addField("Apoyo y Soporte", "Chatea Online 24/7 con la administracón", true)
    .setColor("#0x00AE86")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}rates`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Server Rates")
    .setDescription("Los Rates los servidor son los siguientes:")
    .addField("Loot", "x1", true)
    .addField("Animals", "Max", true)
    .addField("Zombies", "Max", true)
    .addField("Drops", "x1", true)
    .addField("Autos", "x1", true)
    .setColor("#0xFF0000")

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}mapa`){

    let botembed = new Discord.RichEmbed()
    .setTitle("Server Map")
    .setDescription("No te pierdas prisionero!")
    .addField("Lineas Verdes", "Rutas seguras", true)
    .addField("Marcas Azules", "Policías", true)
    .addField("Marcas Rojas", "Zona KOS", true)
    .setImage("https://i.imgur.com/kCxCcM7.png")
    .setColor("#0xFF0000")

    return message.channel.send(botembed);
  }


});

bot.login(botconfig.token);
