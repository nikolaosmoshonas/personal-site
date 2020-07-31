<template>
  <div class="container">
    Home

    <v-btn @click="displayName()"></v-btn>
    <p>{{this.reverseString(fullname).toUpperCase()}}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    firstname: "Hello",
    lastname: "You",
    fullname: "",
    listData: []
  }),

  computed: {
    getFullName: function() {
      return this.firstname + " " + this.lastname;
    }
  },

  methods: {
    displayName: function (){
      this.fullname = this.getFullName
    },
    reverseString: function (name){
      let foo
      foo = name.split('').reverse().join('')
      return foo
    }

  }
};
</script>

<style scoped></style>
