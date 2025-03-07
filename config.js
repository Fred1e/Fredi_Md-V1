const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUE5dDZ5cFJpVlVja0Jlek56cWVLSHZ4V3J3V1VRZ3BjWXVJY045ME5Fdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEV3YjZNT3ErekdvZjFKZ01YSE1WUUl0aWtTcGp5Y2UrV29jdm82TGsxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUGl4d2I1R3ZmU2tFbmxTbjU4K05lbjZjVzJVYjVUU3UwcHR1Yjl5ZzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyK20xK2hYZzhHZkYvekE4V2dZYTdna3IvYkhhc0FvSU1KRFFvdlNPcTJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGckR6RTRwMGJIZ1pxcFF1bDF4ZUd5M3FsTDVkSVN3VDAvdTQ4MThKbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtXZVpOZms2Rzdwb0dkQ0R0dnRFdURQdlFvZVVnZ2tvVUVSV3BnNmVyVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU051NEQ4M2tZb0F0MHVuQnhOVXowakdJMEhRRHFtWk5PVUNHY1p2aXYwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmVpM2FDTGdRTzRPV1dlK0pWTGtQU2pFY00yT3laT2lybWxkTmJOdXYyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIrdzlBakJtdkdSMzhHUTRZNzBISS8rMzk4cnVnSUtpbHhwK0ZYcjlKSzQ5Wk5OZXVUVzJlQ3lrUjE5cWhESUJkNUVyS0hid2M4ZjFsZ0kySkVodmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6ImdFVGN5N205ZnR6QzBHM0R2L3NYQ1BqYzUwYWJZUmc2UElOSXkxWGpLeEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzU0MDg4NTgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZDNjI0RjY0NjczOTY2RDEzQkJCQkIyRjkwNjg4MUZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDEzNDI3MjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc1NDA4ODU4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzOUVBNDQwODhFQzlFODBFQkJGRUY4N0E3NjM5NEQzMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxMzQyNzI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3NTQwODg1ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDlFRUU5QkY3QkI3OTk1MUQ1NzAxMkU5OTlFNjU1QTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTM0MjcyOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzU0MDg4NTgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQzNEM1MDEwM0Y5QUExOUE3RkUzQTg5MUE0MzcxRUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDEzNDI3Mjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJBZi0yaUZpUzlXQXJfVlFYRllCTmciLCJwaG9uZUlkIjoiNThmZTQ2NTktMTkwNC00MjBjLTkyNTYtN2E3ODk4ZjAyMDRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhaTDFXR1BJRWlJMSs0NXZOc2JKTGtRdnF5RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWXJBd3p3SWpoYkwyY3NvN2JXV2pWOHBDNlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1YzRkZQUlIiLCJtZSI6eyJpZCI6IjI1NTc1NDA4ODU4MTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImhvcGFwIG1pbmlzdHJ5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJaWFvTWdCRVBlUHE3NEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXYXVSU05XREtaelV6eGtGRHRhRGRNdit2eWVoa29wSXF4NTJqbkVVSUIwPSIsImFjY291bnRTaWduYXR1cmUiOiJ1eDY2RytMNGRpQ1lnNEdLTDBRcVBoT2g4YytvMGVhRjc2eENYcXUwY1FLZTRsaCtRQXBSYndCODdQR0k2dXMrTXk0QnF1WW1EVFJIZ2N3MVhUWEdCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieE1LWXBhcGNpT3ZEY2VQcFhGWWxwNXMvcytXdmlTc3c4T0xISlZOMmNweVJyZzA3d2RibDRCamxud1M2TWVUTm1hVngzZXJWS2dLNmlST1B6MjM5aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTQwODg1ODE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWbXJrVWpWZ3ltYzFNOFpCUTdXZzNUTC9yOG5vWktLU0tzZWRvNXhGQ0FkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMzQyNzI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1MWCJ9,
global.email ="frediezra60@gmail.com"
global.location="Dar Es Salam,Tanzania."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/Fred1e/FREDI_MD/tree/main";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/63d832ae9db153376e575.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255752593977,255620814108,255764182801" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255752593977,255620814108,255764182801";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/63d832ae9db153376e575.jpg" // FREDI Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255620814108,255764182895,255752593977";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "255620814108,255764182801,255752593977";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255620814108,255764182801,255752593977";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://wa.me/255752593977";


global.SESSION_ID = process.env.SESSION_ID ||  "" ;


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Fredi_Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "FREDI_MD✅" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ғʀᴇᴅɪ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ғʀᴇᴅɪ ᴛᴇᴄʜ』*\n youtube.com/@freeonlinetvT1"),
 
  author : process.env.PACK_AUTHER|| "Mr Fredi",
  packname: process.env.PACK_NAME || "🐯",
  botname : process.env.BOT_NAME  || "FREDI_MD",
  ownername:process.env.OWNER_NAME|| "Mr Fredi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FREDI"  ).toUpperCase(),



};

























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
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
