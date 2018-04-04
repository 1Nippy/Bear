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
            url: "_**Good Bye Master, https://gph.is/22mdGVm FBAIUFBABFAPAJFOAHFIUWG**_"
        },
        {
            name: "shut up",
            url: "_**Said: `Shut Up`**_ : https://gph.is/2pSFu7r"
        },
        {
            name: "hello",
            url: "_**Said: `Hello :) `**_ : https://gph.is/1XddF2k"
        },
        {
            name: "hackerman",
            url: "_**Said: `HACKERMAN`**_ https://gph.is/1JSLT6V"
        },
        {
            name: "sah dude",
            url: "_**Said: `Sah Dude`**_ : http://gph.is/2hjTfbB"
        },
        {
            name: "awesome",
            url: "_**Said: `AWESOME`**_ : https://gph.is/2roKEH4"
        },
        {
            name: "yes",
            url: "_**Said: `Yes`**_ : https://gph.is/Zfh9X7"
        },
        {
            name: "no",
            url: "_**Said: `no`**_ : https://gph.is/2cHRuUl"
        },
        {
            name: "kys",
            url: "_**Told you to KYS**_ https://gph.is/2c9Utl6"
        },
        {
            name: "kms",
            url: "_**Said: `kms`**_ : https://gph.is/2b8vpgY"
        },
        {
            name: "earth",
            url: "_**Is orbiting around the `Earth`**_: https://gph.is/2r1zhHZ"
        },
        {
            name: "wanker",
            url: "_**Said: `Wanker`**_: https://gph.is/1uNZntY"
        },
        {
            name: "special",
            url: "_**is feeling special**_ https://gph.is/2jyAuph"
        },
        {
            name: "sad",
            url: "_**Is Sad**_ https://gph.is/1IE1EwT"
        },
        {
            name: "hype",
            url: "_**Is HYPED**_: https://gph.is/2fciexT"
        },
        {
            name: "heil",
            url: "_**Said: `Heil`**_: https://gph.is/29P87gQ"
        },
        {
            name: "haha",
            url: "_**found you amusing**_: https://gph.is/2buKQy8"
        },
        {
            name: "no u",
            url: "_**Said: `no u`**_ https://gph.is/2EreyGa"
        },
        {
            name: "ily",
            url: "_**has some gay feelings**_: https://gph.is/2uMY6qJ"
        },
        {
            name: "fuck",
            url: "_**ask politely**_: https://gph.is/2urJs7h"
        },
        {
            name: "thinking",
            url: "_**Is thinking hard**_: https://gph.is/2jAdoZw"
        },
        {
            name: "hentai",
            url: "_**ask politely**_:https://gph.is/10o4gfV"
        },
        {
            name: "anime",
            url: "**^_^**: https://gph.is/28V3f6v"
        },
        {
            name: "xd",
            url: "_**boo_**: https://gph.is/2c6881h"
        },
        {
            name: "nippy",
            url: "_**begs for**_: https://gph.is/2dlznEz"
        },
        {
            name: "spoopy",
            url: "_**Spoopy Scary**_: https://gph.is/2crl0Kp"
        },
        {
            name: "heyyy",
            url: "_**Is feeling good**_: https://gph.is/2HHVBNk"
        },
        {
            name: "dd",
            url: "_**has autism and is doing a**_: https://gph.is/2q3doXg"
        },
        {
            name: "skrrt",
            url: "_**Skrrrt**_: https://gph.is/2uS5RhM"
        },
        {
            name: "gay",
            url: "_**HAA**_: https://gph.is/VwCc5w"
        },
        {
            name: "dead inside",
            url: "_**is currently**_: https://gph.is/2gLw6Bc"
        }
    ];

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



if (msg.startsWith(prefix + 'help')){ //here comes the prefix which is assigned at top. If the message content in lower case is prefix + help do dis
    
    var embed = new Discord.RichEmbed() //this defines a variable for Embed. The Embed is what you explained as a more "beautiful" display
    //Everything from here until message.channel.send({embed}); IS PART OF THE EMBED
    .setThumbnail("https://cdn.discordapp.com/attachments/427242907112701963/431158862339506176/bearxd.jpg") //sets the thumbnail to the picture you sent me
    .setTitle("`🐻 Bear Roars to intimidate 🐻`") //sets the title to this, you can change this if you want
    .setColor(0x990000) //this you can choose yourself, this is the colour of the embed side. Search for any Hex Colour and add a 0x to it: e.g. 0x00ffff
    //for your case I made it dark-ish red
    .addBlankField() //Blank field for more beautiful display
    .addField("`Creator`", `***Hello, I am <@366609578625859584>, and I am a small bot made by <@262347242252402698>***`) //adds a field with the following content
    .addBlankField()//Blank field for more beautiful display
    .addField("`Invite Link`", "*Add me to your server with the link given to you with this command!*") //adds a field with the following content
    .addField("`Word Replacements`", "*The following words get replaced with Pictures/Gifs:*\u200b```Hey, Hello, Bye, Shut up, Hackerman, Help, Invite, Sah dude, Awesome, Yes, No, Kys, Kms, Earth, Wanker, Special, Sad, Hype, Heil, haha, no u, Ily, Fuck, Thinking, Hentai, Anime, xd, Spoopy, Heyyy, dd, skrrt, Gay, Dead inside ```\u200b*Use: Place requested word inbetween 2 Minus': -word-*")
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
