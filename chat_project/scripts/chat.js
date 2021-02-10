// adding new chat document

// setting up a real-time listener to get new chats

// updating the username

// updating the room


class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room : this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };

        // save the chat document

        // method add มาจาก function firebase
        // await คือ promise ของ javascript
        const response = await this.chats.add(chat);

        return response;
    }
}

const chatroom = new Chatroom('gaming', 'shaun');


chatroom.addChat('Hello everyone kub')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err));
// console.log(chatroom);