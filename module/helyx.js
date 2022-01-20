import { HelyxActor } from './actors/actor.js';
import { HelyxItemSheet } from "./items/item-sheet.js";
import { HelyxActorSheet } from "./actors/actor-sheet.js";
import ChatCommands from "./sys/chat_commands.js";

import CMDLookRoom from "./commands/cmd_look_room.js"
import CMDPrintEvent from "./commands/cmd_print_event.js"
import CMDStatRoom from "./commands/cmd_stat_room.js"
import CMDTransport from "./commands/cmd_transport.js"

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {

    CONFIG.Actor.documentClass = HelyxActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("helyx", HelyxItemSheet, {
        makeDefault: true,
        label: "HELYX.SheetClassItem",
    });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("helyx", HelyxActorSheet, {
        makeDefault: true,
        label: "HELYX.SheetClassActor",
    });    

});

Hooks.once('ready', function () {
    /*
    const leftSection = document.querySelector('#ui-left');
    leftSection.setAttribute('style', `width: 60px`);

    const topSection = document.querySelector('#ui-top');
    topSection.setAttribute('style', `width: 120px`);

    const bottomSection = document.querySelector('#ui-bottom');
    bottomSection.setAttribute('style', `width: 40px`);

    const middleSection = document.querySelector('#ui-middle');
    middleSection.setAttribute('style', `width: 60px`);

    const rightSection = document.querySelector('#ui-right');
    rightSection.setAttribute('style', `width: 860px`);

    const sidebar = document.querySelector('#sidebar');
    sidebar.setAttribute('style', `width: 860px`);
    */

    let chatCommands = new ChatCommands();
    window.game.chatCommands = chatCommands;

    Hooks.on("chatMessage", (chatlog, messageText, chatData) => {
        return chatCommands.handleChatMessage(chatlog, messageText, chatData);
    });


    Hooks.callAll("chatCommandsReady", chatCommands);
});

Hooks.on('createActor', HelyxActor.createActor);

Hooks.on("chatCommandsReady", function (chatCommands) {

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/statroom",
        invokeOnCommand: (command, chatlog, messageText, chatdata) => {
            CMDStatRoom.invoke(command, chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Stat room",
        gmOnly: true
    }));

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/look",
        invokeOnCommand: (command, chatlog, messageText, chatdata) => {
            CMDLookRoom.invoke(command, chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Look room",
        gmOnly: false
    }));

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/transport",
        invokeOnCommand: (command, chatlog, messageText, chatdata) => {
            CMDTransport.invoke(command, chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Transport an actor into a room",
        gmOnly: true,
        syntax: 'actorname roomname'
    }));

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/eprint",
        invokeOnCommand: (command, chatlog, messageText, chatdata) => {
            CMDPrintEvent.invoke(command, chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Print an event",
        gmOnly: true,
        syntax: 'eventname'
    }));    
});

