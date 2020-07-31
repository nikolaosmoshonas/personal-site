<template>
  <div class="container">
    <v-container>
      <v-row dense align="center">
        <v-col class="mt-15" v-for="card in cards" :key="card.title" md="6" cols="12">
          <v-card class="mx-auto mb-6 primary sm4" max-width="600"  >
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

                <v-card-text>
                  <a class="linkColor--text" v-bind:href="card.link" target="_blank">{{card.link}}</a>
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
        src: require('@/assets/pics/php_logo.jpg'),
        flex: 12,
        width: "800",
        text: "Hello",
        show: false,
        link: "https://google.com"
      },
      {
        title: "Favorite road trips",
        subtitle: "Hello",
        src: require('@/assets/pics/banner.svg'),
        flex: 6,
        width: "600",
        text: "Hello",
        show: false
      },
      {
        title: "Best airlines",
        subtitle: "Hello",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
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
