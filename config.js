const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="caxtontechnologies@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254798033844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_07_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGNxT3JxNi90alZNV0YvMitqaFhsSnpSSk1iV0lsTFdKL1FaNnhYREdWYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX19BWWEtMmFTZ3U5aXM1X1RCNGhYUVwiLFxuICBcInBob25lSWRcIjogXCI4MzQyNjNiZi1lODYwLTQ3MDQtODY0MS0xYTk0MzNhZmFkNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgNTQsXG4gICAgICAxMDQsXG4gICAgICAyMDUsXG4gICAgICAxMzksXG4gICAgICA4MixcbiAgICAgIDIwMSxcbiAgICAgIDc5LFxuICAgICAgMTEsXG4gICAgICAxODcsXG4gICAgICA5NCxcbiAgICAgIDE3OSxcbiAgICAgIDk3LFxuICAgICAgNyxcbiAgICAgIDE1MCxcbiAgICAgIDIwMCxcbiAgICAgIDExMSxcbiAgICAgIDQsXG4gICAgICA5MCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDExNyxcbiAgICAgIDk2LFxuICAgICAgMTIzLFxuICAgICAgMTEyLFxuICAgICAgOTYsXG4gICAgICAyNTQsXG4gICAgICAyMjUsXG4gICAgICAxOTEsXG4gICAgICAyNDEsXG4gICAgICAyMjUsXG4gICAgICAxNjgsXG4gICAgICAxMzgsXG4gICAgICAzLFxuICAgICAgMTE5LFxuICAgICAgMTQ1LFxuICAgICAgMjQ5LFxuICAgICAgOTUsXG4gICAgICAxOTIsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2TTNLQ04yQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk4MDMzODQ0OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkxODcyMTUyOTA0NjU6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZUbWM0Q0VNbk9zTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkTzFzZFlVZ05sOGU1M01tdFdHTXE1T1kza0EvQjZ5WG9tR1FZVitWdVhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIld2REs0Y20yb0FnWUVZdXptY1BNRWR5dW9Jd2NqMElnbjhNUk55TGF5Wk5iKzk2U1VzcUhKdXh1QTFTOGp5ZWVIMDBQWEFycW1GcjRZaUk0elNQU0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi96OTdCQUJzZy9BYXFBYzBOL0RwVUpkL3VSWTY2WjY0S2Z4ZVp3QU5zSjJxL3Z2Y1JLbHU2ekUyL3I4NTdrcjNjQkJycHIrK0ZSdmNFWkRldTZSc2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5ODAzMzg0NDo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDQ0MDQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2trXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHa2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSeExMNHlFMHhVeHBKT2o4NDlESzVXeFJ2Q1NRVWtSUjVCTDFYY3VQQnV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwMDg2MDgzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMDQ0MDQ5Mzk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Caxton",
  packname: process.env.PACK_NAME || "Caxton",
  botname : process.env.BOT_NAME  || "Caxton Derick",
  ownername:process.env.OWNER_NAME|| "Caxton Derick",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
