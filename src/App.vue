<template>
  <div id="app">
    <GetAllClasses />
    <navigation />
    <router-view />
  </div>
</template>

<script>
import GetAllClasses from "./components/GetAllClasses.vue";
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Navigation
}
};
</script>
