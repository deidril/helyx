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

    static listActors(arrayIds) {
        let res = "";
        for (const i of arrayIds) {
            if (res.lgnth == 0) {
                res += ", ";
            }
            const who = game.actors.get(i);
            if (who == undefined) {
                res += "#" + i;
            } else {
                res += who.data.name;
            }
        }
        return res;
    }

}