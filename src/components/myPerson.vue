<template>
  <div class="container">
    <div>
      <v-card class="flex-wrap d-flex justify-center transparent" flat tile>
        <v-card
          v-for="card in cards"
          :key="card.title"
          class="pa-2 mb-4 mx-4 rounded-lg"
          max-width="400"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            max-width="400"
            :src="card.src"
          >
          </v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text class="text-subtitle-1">{{ card.text }}</v-card-text>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPerson",

  data: () => ({
    cards: [
      {
        title: "Das bin ich",
        text:
          "Hallo! Mein Name ist Nikolaos Moshonas, Schweizer und Grieche, geboren in der Schweiz. Schon immer haben mich Computer und Technik interessiert und deshalb habe ich den Beruf als Informatiker gewählt. Meinen Werdegang können Sie unten auf der Timeline betrachten.",
        src: require("@/assets/pics/profile_picture.jpg"),
        flex: 6,
        width: 400
      },
      {
        title: "Meine Leidenschaft",
        text: "Meine Leidenschaft in der Informatik ist das realisieren von Webseiten mit modernem Design. In der Informatikmittelschule habe ich schnell bemerkt, dass dies genau mein Gebiet ist." +
            " Mit Frontend Frameworks kenne ich mich aus und bin mit vielen Komponenten vertraut. Zurzeit beschäftige ich mich mit Vue.js und möchte dort Fuss fassen, um ein Framework vertieft und genau zu kennen." +
            " Die Abschlussarbeit habe ich mithilfe von PHP als Backend Skriptsprache eingesetzt und für das Frontend Bootstrap, HTML und CSS.",
        src: require("@/assets/pics/php_logo.jpg"),
        flex: 6,
        width: 400
      }
    ]
  })
};
</script>

<style scoped></style>
