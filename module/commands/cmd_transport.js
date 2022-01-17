import WORLD from "../api/api_world.js"

export default class CMDLookRoom {

    static invoke(command, chatlog, messageText, chatdata) {
        const args = messageText.split();
        if (args.size() != '2') {
            ChatMessage.create({
                user: game.user._id,
                content: command.syntax
            });
            return;
        }

        const who = game.actors.getName(args[0]);
        if (who == null) {
            ChatMessage.create({
                user: game.user._id,
                content: 'actor ' + args[0] + ' not found.'
            });
            return;
        }

        const r = game.items.getName(args[1]);
        if (r == null) {
            ChatMessage.create({
                user: game.user._id,
                content: 'room ' + args[1] + ' not found.'
            });
            return;
        }

        WORLD.extract_actor(who);
        WORLD.insert_actor(who, room);

    }
}
