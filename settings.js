

// 漏 2025 RONALDO. All Rights Reserved.
// respect the work, don鈥檛 just copy-paste.

const fs = require('fs')

const config = {
    owner: "Rony_Skies",
    botNumber: "27696397895",
    setPair: "K0MRAID1",
    thumbUrl: "https://imgur.com/a/ZmrdSy2",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false
    },
    message: {
        owner: "no, this is for owners only",
        group: "this is for groups only",
        admin: "this command is for admin only",
        private: "this is specifically for private chat"
    },
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Mode changed successfully!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    },
    settings: {
        title: "RONY POWERFUL BOT",
        packname: 'RONY-MD v4',
        description: "this script was created by Rony_Skies",
        author: 'https://www.github.com/ronaldomazive915-source',
        footer: "饾棈饾柧饾梾饾柧饾梹饾棆饾柡饾梿: @official_kango"
    },
    newsletter: {
        name: "RONY POWERFUL BOT",
        id: "0@newsletter"
    },
    api: {
        baseurl: "https://hector-api.vercel.app/",
        apikey: "RONY"
    },
    sticker: {
        packname: "RONY POWERFUL BOT ",
        author: "RONY-MD v4"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
