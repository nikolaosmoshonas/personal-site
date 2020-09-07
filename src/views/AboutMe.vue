<template>
  <div class="container">

    <my-person></my-person>

    <v-timeline class="mt-15" :class='this.$vuetify.breakpoint.sm < this.$vuetify.breakpoint.xs ? "v-timeline--dense" : ""'>
      <v-timeline-item v-for="(data,d) in jsonData" :key="d">
        <template v-slot:icon>
          <v-avatar size="60">
            <img :src="data.link">
          </v-avatar>
        </template>
        <h2 class="accent--text" slot="opposite">{{ data.timelineTitle }}</h2>
        <v-card class="elevation-5 rounded-lg">
          <v-card-title class="headline">{{ data.cardTitle }}</v-card-title>
          <v-card-text class="text-h6" v-html="data.cardText">
            {{ data.cardText }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

  </div>

</template>

<script>
import states from "../assets/data.json";
import MyPerson from "@/components/myPerson";
export default {
  name: "Projects",
  components: {MyPerson},
  data: () => ({

  }),
  computed: {
    jsonData() {
      return states.ueber_mich.map(item => {
        return item;
      });
    }
  }
};
</script>

<style scoped>

</style>
