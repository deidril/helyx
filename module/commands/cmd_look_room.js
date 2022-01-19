import WORLD from "../api/api_world.js"

export default class CMDLookRoom {

    static invoke(command, chatlog, messageText, chatdata) {

        const r = game.items.getName(messageText);
        if (r) {

            let html = '<H2>' + r.name + '</H2><P>' + r.data.data.description + '</P>';
            if (r.data.data.actors.length != 0) {
                html += '<H3>Actors:<H3><P>' + WORLD.listActors(r.data.data.actors) + '</P>';
            }
            ChatMessage.create({ content: html });
        }
        else {
            ChatMessage.create({
                user: game.user._id,
                content: `room ${r.name} not found`
            });
        }

    }
}
