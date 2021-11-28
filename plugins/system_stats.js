/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RE CODE - KTB 
*/

const Asena = require('../events');
const {WAConnection , MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const util = require('util')
const parseInt = require('parse-int');
const chalk = require('chalk');
const conn = new WAConnection();

const White = require('../white');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

  Asena.addCommand({pattern: 'alive', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    //  ....................................................................................................
      var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]           // .
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };   // .   
        var plk_here = new Date().toLocaleDateString(get_localized_date)                                  // .  --------->>> CREDIT:-AFNAN PLK PINKYMWOL 
	  var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'                  // .
                                                                                                          // . 
    // ..................................................................................................  
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image,{ quoted: message.data, thumbnail: White.tm_b ,caption: Config.ALIVEMSG.replace('{pp}', '').replace('{time}', afnplk).replace('{qt}' )})}); 
}));

     
     
     
    Asena.addCommand({pattern: 'sysd', fromMe: wk, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));



Asena.addCommand({pattern: 'al', fromMe: wk, desc: Lang.ALIVE_DESC}, (async (message, match) => {

             const buttons = [
  {buttonId: '!git', buttonText: {displayText: 'chumma'}, type: '!git'},
  {buttonId: 'owner', buttonText: {displayText: '😀😀😀'}, type: 'owner'}
]

const buttonMessage = {
    contentText: 'hi',
    footerText: '© ktb ©',
    buttons: buttons,
    headerType: 1
}

   await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)})); 



    
    Asena.addCommand({pattern: 'me', fromMe: wk, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {

        
        await message.sendMessage(message.jid, "I'm".replace('{user}', conn.user.name).replace('{wa_version}', conn.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', conn.user.phone.os_version).replace('{device_model}', conn.user.phone.device_model).replace('{device_brand}', conn.user.phone.device_manufacturer) , MessageType.text);
    
                                                                           

    
    }))
