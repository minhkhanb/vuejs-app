<template>
  <div class="test">
    <button v-on:click="changeMessage">Click me!</button>
    <p>{{ message }}</p>
    <button v-on:click="increment">Increment</button>
    <p> Counter: {{ counter }} </p>
    <p style="padding-top: 10px"> Clicks: {{ clicks }}</p>

    <input type="text" v-on:input="cssClass=$event.target.value">
    <p v-bind:class="cssClass">Class: {{ cssClass }}</p>

    <ol>
      <li v-for="(todo, key) in todos" :key="key">
        {{ key }}{{ todo.text }}
      </li>
     </ol>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      message: 'Start message',
      cssClass: '',
      clicks: 0,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', jashdfbshdbfs)
  },
  beforeDestroy() {
    window.removeEventListener
  },
  methods: {
    changeMessage() {
      this.message = 'The message has changed!';
    },
    increment() {
      this.clicks = this.clicks + 1;
    },
  },
  computed: {
    counter() {
      return this.clicks * 2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  background-color: red
}

.blue {
  background-color: black
}
</style>
