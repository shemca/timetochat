<template lang="html">
    <div class="main">
        <div v-if="rooms.length > 0">
            <div class="chatlist">
                <div class="title">
                    <h2>List of Rooms</h2>
                </div>

                <div v-for="room in rooms" class="chatroombox">
                    <div class="roomname">
                        {{ room.name }}
                    </div>
                    <div class="seeroom">
                        <button id="hide-seen" @click="isHidden = !isHidden" class="black btn btn-info-but">See Chatroom</button>
                    </div>
                    <div class="roombox">

                    </div>

                </div>
        </div>
    </div>
    <div v-else class="text-muted">
       There are no rooms
    </div>
    </div>
</template>
<script>
    import Room from "./Room.vue"
    export default {
        name: 'roomlist',
        props: ['rooms'],
        data: function() {
            return {
                isHidden: true
            }
        },
        components: {
            Room
        }
    }

</script>
<style>
.main {
    height:90vh;
    width: 90vh;
    display: grid;
    grid-template-columns: 10% 3fr 10%;
}

    .chatlist {
        display: grid;
        grid-template-rows: 5vh 85vh;
    }
    .title {
        grid-row: 1/2;
    }
    .chatroombox {
        grid-row: 2/3;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 5vh 80vh;
    }
    .roombox {
        grid-row: 2/3;
        grid-column: 1/3;
        display: grid;
        height: 100%;
    }
</style>
