export default class CMDStatRoom {

    static invoke(chatlog, messageText, chatdata) {
        //console.log('chatlog' + JSON.stringify(chatlog));
        console.log('messageText' + messageText);
        //console.log('chatdata' + JSON.stringify(chatdata));

        const r = game.items.getName("testroom");
        if (r) {

            const obj = JSON.stringify(r);
            ChatMessage.create({ content: obj });
        }
        else {
            ChatMessage.create({
                user: game.user._id,
                content: "testroom pas trouvé"
            });
        }

    }
}
