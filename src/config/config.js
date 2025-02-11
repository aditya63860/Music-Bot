require('dotenv').config();


module.exports = {
    token: 'ebd103483cb25bfce4a42f7928b580aa4bb9765c9ed09b418b7ded6951f0b7e6',
    clientId: '1338725587123965972',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
