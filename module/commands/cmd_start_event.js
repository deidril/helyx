import EVENTS from "../api/api_event.js"

export default class CMDStartEvent {

    static invoke(command, chatlog, messageText, chatdata) 
    {
        const ev = game.items.getName(messageText);
        if (ev == undefined) 
        {
            ChatMessage.create({ user: game.user._id, content: 'event ' + messageText + ' not found.' });
            return;
        }        

        if(ev.data.type != 'event')
        {
            ChatMessage.create({ user: game.user._id, content: 'item ' + messageText + ' is not an event.' });
            return;            
        }
        
        const out = JSON.stringify(ev);
        ChatMessage.create({ content: out });
        
        EVENTS.makeDialog(ev, undefined);
    }
}
