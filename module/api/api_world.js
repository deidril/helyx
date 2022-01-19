export default class WORLD {

    static extractActor(who) {
        if( who.getRoom() == undefined) return;
        
        const location = game.items.get(who.getRoom() );
        if(location == null ) return ;

        const index = location.data.data.actors.indexOf(who.id);
        if(index > -1 ) {
            location.data.data.actors.splice(index);
        }

        who.setRoom(undefined);
    }

    static insertActor(who, room) {
        room.data.data.actors.push(who.id);
        who.setRoom(room.id);
    }

}