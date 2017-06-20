<template>
    <div>
        <h3>This is Main User Component - {{ mainComp }}</h3>
        <h3>Active Component - {{ activeComponent }}</h3>
        <button @click="getSynonym">GetSynonym</button>
        <button @click="getUserComponent">Get UserComponent</button>
        <button @click="getGuestComponent">Get GuestComponent</button>
        <br>
        <!--<user-tag :mainComp="mainComp"></user-tag>
        <guest-tag :mainComp="mainComp" @nameChanged="mainComp=$event"></guest-tag>-->
        <keep-alive>
            <component :is="activeComponent"></component>
        </keep-alive>
    </div>
</template>
<script>
import User from './UserComponent.vue';
import Guest from './GuestComponent.vue';
export default {
    data:function() {
        return {
            mainComp: "Parent Component",
            activeComponent: 'User'
        }
    },
    methods: {
        getSynonym() {
            this.mainComp = 'Daddy Component'
        },
        getUserComponent() {
            this.activeComponent = 'user-tag'
        },
        getGuestComponent() {
            this.activeComponent = 'guest-tag'
        }
    },
    components: {
        'user-tag':User,
        'guest-tag':Guest
    }
}
</script>
<style>

</style>
