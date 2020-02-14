<template>
    <div class="messinbox">
        <div class="avbox">
            <img :src="message.gravatar" class="avatar"/>
        </div>
        <div class="messinboxer">
            <div class="messbox">
                {{ message.message}}
            </div>
            <div class="messinfo">
                {{ message.username}}
                {{ message.created_at}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['message'],
    }

</script>
<style>
    .messinbox {
        display: grid;
        grid-template-columns: 10% 90%;
        justify-self: center;
        background-color: white;
        border-radius: 10px;
        width: 90%;
    }
    .messinboxer {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    .avbox {
        display: grid;
        justify-self: center;
        align-self: center;
        border-radius: 10px;
        background-color: black;
    }
    .messinfo {
        display: grid;
        justify-self: end;
    }

</style>
