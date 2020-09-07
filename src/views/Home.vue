<template>
  <div class="container">
    <particles></particles>
  <div class="typed">
    <vue-typer
      :text="text"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :erase-delay="550"
      erase-style="select-all"
      :erase-on-complete="false"
      caret-animation="expand"
    ></vue-typer>
  </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import Particles from "@/components/particles";

export default {
  components: {
    Particles,
    VueTyper
  },
  name: "Home",
  data: () => ({
    text: [
      "Herzlich Willkommen auf meiner Website.",
      "Mein Name ist Nikoalos Moshonas",
      "20 Jahre Jung und leidenschaftlicher Webentwickler",
      "Oben links kÖnnen Sie etwas mehr Über mich und meinen Projekten erfahren"
    ]
  })
};
</script>

<style>
div.typed {
  font-family: Copperplate, "American Captain", fantasy;
  font-size: xx-large;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.vue-typer .custom.char.typed {
  color: wheat;
}
.vue-typer .custom.char.selected {
  color: #7A7F70;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>
