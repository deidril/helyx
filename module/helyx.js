import { HelyxItemSheet } from "./items/item-sheet.js";
import ChatCommands from "./sys/chat_commands.js";

import CMDLookRoom from "./commands/cmd_look_room.js"
import CMDStatRoom from "./commands/cmd_stat_room.js"

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("helyx", HelyxItemSheet, {
        makeDefault: true,
        label: "HELYX.SheetClassItem",
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

Hooks.on("chatCommandsReady", function (chatCommands) {

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/statroom",
        invokeOnCommand: (chatlog, messageText, chatdata) => {
            CMDStatRoom.invoke(chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Stat room",
        gmOnly: true
    }));

    // (GM Only) This Command will display the text after the command as well as invoke the method
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/look",
        invokeOnCommand: (chatlog, messageText, chatdata) => {
            CMDLookRoom.invoke(chatlog, messageText, chatdata);
        },
        shouldDisplayToChat: false,
        iconClass: "fa-sticky-note",
        description: "Look room",
        gmOnly: false
    }));
});

