<template lang="html">
    <div class="main">
        <div class="chatlist" v-if="rooms.length > 0">
            <div class="title">
                <h2>List of Rooms</h2>
            </div>
            <Room v-for="room in rooms" :room="room" :key="room.id"/>
        </div>
        <div v-else class="text-muted">
            There are no rooms
        </div>
    </div>
</template>
<script>
    import Room from "./Room"
    export default {
        name: 'roomlist',
        props: ['rooms'],
        data: function() {
            return {
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
    width: 100vw;
    display: grid;
    grid-template-columns: 10% 80% 10%;
}

    .chatlist {
        grid-column: 2/3;
        display: grid;
        grid-template-rows: 5vh 85vh;
    }
    .title {
        grid-row: 1/2;
        text-align: center;
    }
</style>
