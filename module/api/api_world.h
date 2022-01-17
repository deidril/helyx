export default class WORLD {

    static extract_actor(who) {
        if( who.data.data.position == null) return;
        if(who.data.data.position == "") return;
        
        const location = game.items.get( who.data.data.position );
        if(location == null ) return ;

        const index = location.data.data.actors.indexOf(who._id);
        if(index > -1 ) {
            location.data.data.actors.splice(index);
        }

        who.data.data.position = "";
    }

    static insert_actor(who, room) {
        room.data.data.actors.push(who._id);
        who.data.data.position = room._id;
    }

}