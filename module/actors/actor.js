export class HelyxActor extends Actor {


    getRoom() {
        return (this.data.data.position.room == undefined) ? undefined :
            ((this.data.data.position.room == "") ? undefined : this.data.data.position.room);
    }

    setRoom(roomId) {
        this.data.data.position.room = roomId;
    }

    static async createActor(actor) {

    }
}

