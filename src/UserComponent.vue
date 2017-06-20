<template>
    <div id="user">
        <p> This is User Coponent - data From {{mainComp}}</p>
    </div>
</template>

<script>
import { eventBus } from './main.js'
export default {
    props: ['mainComp'],
    methods: {

    },
    created() {
        eventBus.$on('nameChanged', (data) => {
            this.mainComp = data;
        });
    }
}
</script>

<style scoped>
#user {
    box-sizing: border-box;
    width: 50%;
    /*height: 400px;*/
    background-color: gray;
    padding: 30px;
    /*display: inline-block*/
}
</style>
