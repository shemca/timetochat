<template>
    <div class="chatroombox">
        <div class="roomname">
            <h4>{{ room.name }}</h4>
        </div>
        <div class="seeroom">
            <button id="hide-seen" @click="isHidden = !isHidden" class="black btn btn-info-but">See Chatroom</button>
        </div>
        <div v-show="!isHidden" class="roombox">
            <div class="messagebox">
                <Message v-for="message in room.messages" :message="message" v-bind:key="message.id"/>
            </div>
            <div class="messageinput">
<!--                <input v-model="room.messages.message">-->
<!--                <button v-on:click="submit">Submit</button>-->

            </div>
        </div>
    </div>
</template>
<script>
    import Message from './Message.vue'
    export default {
        props: ['room'],
        data: function() {
            return {
                isHidden: true,
                message: '',
                // room: this.room,
                // messages: gon.messages
                // room_id: room.id
            }
        },
        methods: {
          submit: function() {
              this.$http.put(`/rooms/1`, { room: this.room.messages.messages,}).then(response => {console.log(response)});
              // this.room.room_messages.push({
              //     id: null,
              //     message: this.message,
              // })
              this.message ='';
          }
        },
        components: {
         Message
        }
    }
</script>
<style>
    .chatroombox {
        grid-row: 2/3;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 5vh 80vh;
    }
    .roombox {
        grid-row: 2/3;
        grid-column: 1/3;
        display: grid;
        height: 100%;
        grid-template-columns: 100%;
        grid-template-rows: 60vh 20vh;
        background-color: grey;
    }
    .roomname {
        text-align: center;
    }
    .seeroom {
        text-align: center;
    }
    .messagebox {
        grid-column: 1/2;
        grid-row: 1/2;
        max-height: 100%;
        display: grid;
        grid-gap: 10px;
        width: 100%;
        overflow: auto;
    }
    .messageinput {
        grid-column: 1/4;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 80% 20%;
    }

</style>
