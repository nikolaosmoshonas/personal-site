<template>
  <div class="container">
    <v-container>
      <v-row dense align="center">
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="mx-auto mb-6 primary" :max-width="card.width">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-title >{{ card.title }}</v-card-title>

            <v-card-subtitle class="accent--text">
              {{ card.subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn :key="card.title" icon @click="card.show = !card.show">
                <v-icon
                  >{{ card.show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                </v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition >
              <div class="secondary" v-show="card.show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ card.text }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        subtitle: "Hello",
        src: "https://i.pinimg.com/originals/81/9a/fb/819afb3e0e2af2404ec09c81d078e1a5.jpg",
        flex: 12,
        width: "600px",
        text: "Hello",
        show: false
      },
      {
        title: "Favorite road trips",
        subtitle: "Hello",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 12,
        width: "800px",
        text: "Hello",
        show: false
      },
      {
        title: "Best airlines",
        subtitle: "Hello",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        width: "600px",
        show: false
      },
      {
        title: "Best airlines",
        subtitle: "Hello",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 12,
        width: "600px",
        show: false
      }
    ]
  })
};
</script>

<style scoped></style>
