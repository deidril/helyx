export default class CMDLookRoom {

    static invoke(chatlog, messageText, chatdata) {
        console.log(messageText);
        const r = game.items.getName(messageText);
        if (r) {

            console.log(JSON.stringify(r.data));
            const obj = '<H2>' + r.name + '</H2><P>' + r.data.data.description + '</P>';
            console.log(obj);
            ChatMessage.create({ content: obj });
        }
        else {
            ChatMessage.create({
                user: game.user._id,
                speaker: ChatMessage.getSpeaker({ token: actor }),
                content: `room ${r.name} not found`
            });
        }

    }
}
