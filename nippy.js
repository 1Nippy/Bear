const Discord = require('discord.js'); 

const bot = new Discord.Client(); 

const prefix = '-'; //prefix is defined

bot.on("message", function(message){ 
    console.log(message.content);
});

bot.on("ready", function(){ 
    console.log("Ready");
});




//-------------------------------------------------------------------------------------------
//OKAY NIPPY, IF YOU WANT TO UNDERSTAND ALL THE STUFF I DID, READ THE COMMENTS CAREFULLY!!!
//-------------------------------------------------------------------------------------------


bot.on("message", async message => { //bot. on hasn't changed

let msg = message.content.toLowerCase();

const pics = [ //every variable assigned to something within brackets like this [] is an ARRAY. It's basically a list of strings (a string is anything within the "" Quotation marks)
        {
            name: "hey", //a property name is created -> for later access
            url: "https://gph.is/197SZVb _**Hello friend**_" //a property url is created -> for later access
        },
        //You see URL will be used for the URL whereas NAME is gonna be used for what you type with the -- Example here will be -hey-
        //The following things with the comma and then {} are all the different links you made

        //if you want to add another pic you copy paste this and change name as well as what stands in URL:
        /*
        -------------------------------------------------------
        ,{
            name: "exampleword",
            url: "**example text, https://examplelink.com**"
        }
        -------------------------------------------------------
        */
        {
            name: "bye",
            url: "_**Good Bye Master, https://gph.is/22mdGVm FBAIUFBABFAPAJFOAHFIUWG : I will serve you again later **_"
        },
        {
            name: "shut up",
            url: "_**Said: `Shut Up`: https://gph.is/2pSFu7r **_"
        },
        {
            name: "hello",
            url: "_**Said: `Hello :) `: https://gph.is/1XddF2k **_"
        },
        {
            name: "hackerman",
            url: "_**Said: `HACKERMAN`: https://gph.is/1JSLT6V **_"
        },
        {
            name: "sah dude",
            url: "_**Said: `Sah Dude`: http://gph.is/2hjTfbB **_"
        },
        {
            name: "awesome",
            url: "_**Said: `AWESOME`: https://gph.is/2roKEH4 **_"
        },
        {
            name: "yes",
            url: "_**Said: `Yes`: https://gph.is/Zfh9X7 **_"
        },
        {
            name: "no",
            url: "_**Doesn't want to: https://gph.is/2ehdjcB **_"
        },
        {
            name: "kys",
            url: "_**I'll help you, <@366609578625859584> ties the noose: https://gph.is/2c9Utl6 **_"
        },
        {
            name: "kms",
            url: "_**its all gonna be aight: https://gph.is/2b8vpgY **_"
        },
        {
            name: "earth",
            url: "_**Is orbiting around the `Earth`: https://gph.is/2r1zhHZ **_"
        },
        {
            name: "wanker",
            url: "_**Is a bloody wanker: https://gph.is/1uNZntY **_"
        },
        {
            name: "special",
            url: "_**is feeling special https://gph.is/2jyAuph **_"
        },
        {
            name: "sad",
            url: "_**Is Sad af https://gph.is/1IE1EwT **_"
        },
        {
            name: "hype",
            url: "_**Is HYPED: https://gph.is/2fciexT **_"
        },
        {
            name: "heil",
            url: "_**oh boy ur a nazi, eh?: https://gph.is/29P87gQ **_"
        },
        {
            name: "haha",
            url: "_**found you amusing: https://gph.is/2buKQy8 **_"
        },
        {
            name: "no u",
            url: "_**Said: `no u` https://bit.ly/2IcGafX **_"
        },
        {
            name: "ily",
            url: "_**has some gay feelings: https://gph.is/2uMY6qJ **_"
        },
        {
            name: "fuck",
            url: "_**ask politely: https://gph.is/2urJs7h **_"
        },
        {
            name: "thinking",
            url: "_**Is thinking hard: https://gph.is/2jAdoZw **_"
        },
        {
            name: "hentai",
            url: "_**ask politely:https://gph.is/10o4gfV **_"
        },
        {
            name: "anime",
            url: "**^_^: https://gph.is/28V3f6v **"
        },
        {
            name: "xd",
            url: "_**boo: https://gph.is/2c6881h **_"
        },
        {
            name: "nippy",
            url: "_**begs for: https://gph.is/2dlznEz **_"
        },
        {
            name: "spoopy",
            url: "_**Spoopy Scary: https://gph.is/2crl0Kp **_"
        },
        {
            name: "heyyy",
            url: "_**Is feeling good: https://gph.is/2HHVBNk **_"
        },
        {
            name: "dd",
            url: "_**is actually a fortnite fan and is doing a: https://gph.is/2q3doXg **_"
        },
        {
            name: "skrrt",
            url: "_**Skrrrt: https://gph.is/2uS5RhM **_"
        },
        {
            name: "gay",
            url: "_**HAA: https://gph.is/VwCc5w **_"
        },
        {
            name: "dead inside",
            url: "_**is currently: https://gph.is/2gLw6Bc **_"
        },
        {
            name: "gg",
            url: "_**had a: http://gph.is/2dZcrIP **_"
        },
        {
            name: "normie",
            url: "_**ohno: https://gph.is/2ciiB9X **_"
        },
        {
            name: "limbo",
            url: "_**physics...: https://gph.is/1ZP0wPs **_"
        },
        {
            name: "bounce",
            url: "_**Hope you are happy with yourself...: http://gph.is/2dmXSwS **_"
        },
        {
            name: "faggot",
            url: "_**why say that: https://bit.ly/2r7BGAQ **_"
        },
        {
            name: "toxic",
            url: "_**who we talking about: https://gph.is/1p26H52 **_"
        },
        {
            name: "fuck you",
            url: "_**tells someone to get the fuck outta here: https://gph.is/YZrz9C **_"
        },
        {
            name: "nigger",
            url: "_**man ur a racist: https://gph.is/1TzlhMc **_"
        },
        {
            name: "good night",
            url: "_**See you later: https://gph.is/2j6NkXw **_"
        },
        {
            name: "gn",
            url: "_**Aligator: https://gph.is/1QzmqnF **_"
        },
        {
            name: "table flip",
            url: "_**Someone is getting angry: http://gph.is/2BNMqHo **_"
        },
        {
            name: "surf",
            url: "_**Ocean man: http://gph.is/2BO9XrG **_"
        },
        {
            name: "bipolar",
            url: "_**are you?: http://gph.is/2BOao5i **_"
        },
        {
            name: "ball",
            url: "_**is standing on a ball: https://gph.is/2j9GkgW **_"
        },
        {
            name: "winner",
            url: "_**VICTORY SCREECH: https://gph.is/2q3g8nk **_"
        },
        {
            name: "nohomo",
            url: "_**that sounds gay: https://gph.is/2ddIVP1 **_"
        },
        {
            name: "chicken",
            url: "_**Man, thats a chicken: https://gph.is/2pSGz1v **_"
        },
        {
            name: "ash",
            url: "_**IM FAST AF BOY: https://gph.is/13EB17Q **_"
        },
        {
            name: "glaz",
            url: "_**Don't be there for too long: https://gph.is/P1Y9JA **_"
        },
        {
            name: "thatcher",
            url: "_**Its all gone now, even the fookin laser sights: https://gph.is/2bLVUas **_"
        },
        {
            name: "thermite",
            url: "_**One big fucking hole coming right up: https://gph.is/1sCDAHV **_"
        },
        {
            name: "fuze",
            url: "_**Please don't do it: https://gph.is/2bTaIb4 **_"
        },
        {
            name: "sledge",
            url: "_**AAAAAHHHHH: https://gph.is/2c2WzoL **_"
        },
            {
            name: "twitch",
            url: "_**zap, zap, zap: https://gph.is/2bnNmWu **_"
        },
            {
            name: "montagne",
            url: "_**So you are just gonna stand there? https://gph.is/2a20hS4 **_"
        },
            {
            name: "blitz",
            url: "_**Master of the blitzkrieg: https://gph.is/2Jo9Cjz **_"
        },
            {
            name: "iq",
            url: "_**My name doesn't mean im smart..: https://gph.is/1Ni6mR5 **_"
        },
        {
            name: "smoke",
            url: "_**We are going on a trip to a place called auschwitz..: http://gph.is/28Jt34o **_"
        },
        {
            name: "mute",
            url: "_**No more of this shit: https://gph.is/2sOJLdx **_"
        },
        {
            name: "castle",
            url: "_**No one can get in or out: http://gph.is/18M1tkz **_"
        },
        {
            name: "pulse",
            url: "_**A persons heartbeat can be up to 175 bpm, by the time im done, that number goes down to zero:  **_"
        },
        {
            name: "doc",
            url: "_**Don't worry, you are going to be all right: http://gph.is/2chH3Xs **_"
        },
        {
            name: "rook",
            url: "_**Pass those plates around: https://gph.is/1zcXuFM **_"
        },
        {
            name: "kapkan",
            url: "_**F*cking EDD's..: https://gph.is/28MYlbD **_"
        },
        {
            name: "tachanka",
            url: "_**May the lord be with you: https://gph.is/2sDKWNP **_"
        },
        {
            name: "jager",
            url: "_**You can stop worrying about grenades now: https://gph.is/2aokYqz **_"
        },
        {
            name: "bandit",
            url: "_**Don't touch my walls of steel: http://gph.is/1bbRpO5 **_"
        },
        {
            name: "frost",
            url: "_**Fuck shit balls shit shit: https://gph.is/2Hs9P3r **_"
        },
        {
            name: "valkyrie",
            url: "_**Im everywhere: https://gph.is/1rlZUkV **_"
        },
        {
            name: "caveira",
            url: "_**Where are they: https://gph.is/2iZyrEw **_"
        },
        {
            name: "echo",
            url: "_**feeling drunk? https://gph.is/296m3mX **_"
        },
        {
            name: "mira",
            url: "_**you do know i can see you? https://gph.is/2cywhxN **_"
        },
        {
            name: "lesion",
            url: "_**The lego man is back at it: https://gph.is/2sGqVWH **_"
        },
        {
            name: "ela",
            url: "_**Moderate recoil: https://gph.is/VT11wl **_"
        },
        {
            name: "vigil",
            url: "_**You can't see me: https://gph.is/2ETpt7Y **_"
        },
        {
            name: "murica",
            url: "_**FUCK YEAH: https://tenor.com/view/american-flag-eagle-raise-maerica-gif-12433443 **_"
        },
        {
            name: "maestro",
            url: "_**Im tachanka, only better: https://gph.is/2sFqbRU **_"
        },
        {
            name: "cheese",
            url: "_** Cheesy af: https://gph.is/Hqefci **_"
        },
        {
            name: "dangerzone",
            url: "_** yes, you have your own gif danger: https://gph.is/g/aNq6XKE **_"
        },
        {
            name: "happybirthday",
            url: "_** well whos the old fella?: https://gph.is/g/4AygDYe **_"
        },
        {
            name: "jables",
            url: "_** jabbeels: https://gph.is/19ZSnjL **_"
        },
        {
            name: "goddamn",
            url: "_** ...: https://gph.is/2w4KkTS **_"
        },
        {
            name: "norm",
            url: "_** well: https://media.discordapp.net/attachments/444617633208336406/669527672912740352/blursed_signs__q1trm5.jpg?width=477&height=754 **_"
        },
    ];
    
var status = ["with nippy", "outside", "-help", "alone in the dark", "with you", "with mommy"]
bot.user.setActivity(status[Math.floor(Math.random() * status.length)])
    
//Here comes the fun part. This for Loop, loops through the array. Variable P gets created, starting at 0. 
//This letter p gets looped until it is smaller than the length of the array (pics)
//p++ means p=p+1, which increases p by 1 everytime it goes through loop until it reaches the end of the array
for(var p = 0; p < pics.length; p++) { 
    if(msg.startsWith("-" + pics[p].name + "-")) {  
    //The if statement does that if the message content is the mentioned "name" within the array(pics) AND 2 Minus' on each end.
        message.delete(); //deletes message
        message.reply(pics[p].url); //replies with the whatever stands in the mention name that is assigned to the url
        return;
    }
}

if(message.content.toLowerCase()=="bearbot "){ 
    message.send("https://bit.ly/2IcmT2l")
}
    
if (msg.startsWith(prefix + 'help')){ //here comes the prefix which is assigned at top. If the message content in lower case is prefix + help do dis
    
    var embed = new Discord.RichEmbed() //this defines a variable for Embed. The Embed is what you explained as a more "beautiful" display
    //Everything from here until message.channel.send({embed}); IS PART OF THE EMBED
    .setThumbnail("https://cdn.discordapp.com/attachments/430966217235234816/442091096072388608/MOSHED-2018-5-5-0-31-54.gif") //sets the thumbnail to the picture you sent me
    .setTitle("`🐻 Growl 🐻`") //sets the title to this, you can change this if you want
    .setColor(0x990000) //this you can choose yourself, this is the colour of the embed side. Search for any Hex Colour and add a 0x to it: e.g. 0x00ffff
    //for your case I made it dark-ish red
    .addBlankField() //Blank field for more beautiful display
    .addField("`Creator`", `***Hello, I am <@366609578625859584>, and I am a small bot made by <@262347242252402698>***`) //adds a field with the following content
    .addBlankField()//Blank field for more beautiful display
    .addField("`Invite Link`", "*Add me to your server with the link given to you with this command! -Invite*") //adds a field with the following content
    .addBlankField()
    .addField("`Prefix`", "*The prefix for this bot is set to* _** - **_")
    .addField("`Word Replacements`", "*The following words get replaced with Pictures/Gifs:*\u200b```Hey, Hello, Bye, Shut up, Hackerman, Help, Invite, Sah dude, Awesome, Yes, No, Kys, Kms, Earth, Special, Sad, Hype, Heil, haha, no u, Ily, Fuck, Thinking, xd, Spoopy, Heyyy, dd, skrrt, Dead inside, Toxic, Table Flip, Ball, Surf, Bipolar, Winner, Nohomo, Chicken, Cheese, HappyBirthday, Goddamn ```\u200b*Use: Place requested word inbetween 2 Minus': -word-*")
    .addBlankField()
    .addField("`Got any ideas for me?`", "*Feel free to add/message Nippy and submit suggestions you have so i can improve.*")
    .addBlankField()//Blank field for more beautiful display
    .setTimestamp() //This is at the bottom of the embed and shows when the Embed was created. You can delete this if you don't want it
     message.channel.send({embed}); //sends EMBED, this is needed, otherwise it won't create the embed
}

if (msg.startsWith(prefix + 'invite')){ //here comes the prefix which is assigned at top. If the message content in lower case is prefix + help do dis
    message.delete(); //deletes message
    message.reply("*Add me to your server with this Link*: https://discordapp.com/oauth2/authorize?client_id=366609578625859584&scope=bot") //self explanatory
}


});

bot.login(process.env.BOT_TOKEN);

