<template>
    <div id="guest">
        <p>This is Guest Component - {{ mainComp }}</p>
        <p> {{counter}} </p>
        <button @click="changeName">Change Name</button>
    </div>
</template>

<script>
import { eventBus } from './main.js';
export default {
    props: ['mainComp'],
    data:function() {
        return {
            counter: 0
        }
    },
    methods: {
        changeName() {
            this.mainComp = 'Component Changed Name';
            this.counter++;
            // eventBus.$emit('nameChanged', this.mainComp);
            eventBus.emitChangeEvent(this.mainComp);
        }
    }
}
</script>

<style scoped>
#guest {
    box-sizing: border-box;
    width: 50%;
    /*height: 400px;*/
    background-color: tomato;
    padding: 30px;
    /*display: inline-block*/
}
</style>
