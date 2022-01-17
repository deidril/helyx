export default class CMDStatRoom {

    static invoke(command, chatlog, messageText, chatdata) {

        const r = game.items.getName(messageText);
        if (r) {

            const obj = JSON.stringify(r);
            ChatMessage.create({ content: obj });
        }
        else {
            ChatMessage.create({
                user: game.user._id,
                content: messageText + " not found."
            });
        }

    }
}
