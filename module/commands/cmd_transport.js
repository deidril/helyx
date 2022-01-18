import WORLD from "../api/api_world.js"

export default class CMDTransportRoom {

    static invoke(command, chatlog, messageText, chatdata) {
        const args = messageText.split(' ');
        if (args.length != '2') {
            console.log(' there is ' + args.length + ' args');
            console.log(JSON.stringify(args));
            ChatMessage.create({
                user: game.user._id,
                content: command.syntax
            });
            return;
        }

        const who = game.actors.getName(args[0]);
        if (who == null) {
            const content = 'actor ' + args[0] + ' not found.';
            console.log(content);
            ChatMessage.create({
                user: game.user._id,
                content: content
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

        ChatMessage.create({
            user: game.user._id,
            content: args[0] + ' #' + who._id + ' transported to ' + args[1] + ' #' + room._id
        });

    }
}
