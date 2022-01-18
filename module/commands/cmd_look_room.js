export default class CMDLookRoom {

    static invoke(command, chatlog, messageText, chatdata) {

        const r = game.items.getName(messageText);
        if (r) {

            const obj = '<H2>' + r.name + '</H2><P>' + r.data.data.description + '</P>';
            ChatMessage.create({ content: obj });
        }
        else {
            ChatMessage.create({
                user: game.user._id,
                content: `room ${r.name} not found`
            });
        }

    }
}
