//-----------------------------SHREX SLICER BY Necroliner-----------------------------------//
//https://github.com/Necroliner/

const tmi = require('tmi.js');
const opts = {
    identity: {
		//CHANGE HERE WITH YOUR OWN CREDENTIALS
        username: "USERNAME",
        password: "TOKEN"},
    channels: ["MarexLoL"]
};
const client = new tmi.client(opts);

class ShrexCutter_Exe {
    constructor() {
        client.on('chat', this.onMessageHandler);
        client.on('connected', this.onConnectedHandler);
        this.connect();
    }

    //Connects the Bot to specified channels in constructor
    connect() {
        client.connect();
    }

    //handles on('connected') type of events
    onConnectedHandler(addr, port) {
        console.log(`ShrexCutter Activated`);
    }

    //handles on('chat') type of events
    onMessageHandler(target, context, msg, self) {
        //ignoring messages from yourself
        if (self) {
            return;
        }
        //Pretty printing received messages
        let dateObject = new Date();
        let currentDate = `${dateObject.getHours()} : ${dateObject.getMinutes()}`;
        console.log("[" + currentDate + "]" + `${context['display-name']} : ` + msg.trim());
        

        //actual message handling
        const formattedMessage = msg.trim();

        if (formattedMessage.toLowerCase().includes("marex1")) {
            let tab = ["CUT (couper) marexPls", "marexPls SLICED marexPls", "COUPER TOUT LES SHREXX marexDab ", "PepeDab ISS ISS PepeDab", "c'étais un joli shrex AwkwardFlushed dommage pepeLaughing"];
            client.say(target, tab[Math.floor(Math.random() * 5)]);
			console.log(`A SHREXX HAVE BEEN SLICED !`);
        }
		
    }
}	
const ShrexCutter = new ShrexCutter_Exe();



