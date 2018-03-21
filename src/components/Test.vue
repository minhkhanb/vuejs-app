<template>
  <div class="test">
    <button v-on:click="message = 'Start message'">Click me!</button>
    <p>{{ message }}</p>
    <button v-on:click="increment= '0'">Increment</button>
    <p> Counter: {{ counter }} </p>
    <p style="padding-top: 10px"> Clicks: {{ clicks }}</p>

    <input type="text" v-on:input="cssClass=$event.target.value">
    <p v-bind:class="cssClass">Class: {{ cssClass }}</p>

    <ol>
	    <li v-for="todo in todos">
	      {{ todo.text }}
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
      counter: 0,
      clicks: 0,
      todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
      ]
    };
  },
  methods: {
        changeMessage () {
            this.message = 'The message has changed!'
        },
        increment () {
          this.clicks++;
        }
    },
    computed: {
      counter () {
					return this.clicks * 2
      }
    }
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
