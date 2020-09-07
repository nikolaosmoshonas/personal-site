<template>
  <div class="container">
    <v-container>
      <v-row dense align="center">
        <v-col class="mt-15" v-for="card in cards" :key="card.title" md="6" cols="12">
          <v-card class="mx-auto mb-6 primary sm4" max-width="600"  >
            <v-img
                :src="card.src"
                class="cardImage ml-auto mr-auto"
                max-height="200px"
                min-height="200px"

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

                <v-card-text v-html="card.text">
                  {{ card.text }}
                </v-card-text>

                <v-card-text>
                  <a class="linkColor--text" v-bind:href="card.link" target="_blank">{{card.linkText}}</a>
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
        title: "Diese Webseite / Meine persönliche Webseite",
        subtitle: "Made by Nikolaos Moshonas",
        //src: require('@/assets/pics/php_logo.jpg'),
        flex: 12,
        width: "800",
        text: "Hello<br/>Hello",
        show: false,
        linkText: "Meine Webseite auf Github",
        link: "https://google.com"
      },
      {
        title: "QR Notes",
        subtitle: "Made By Nikolaos Moshonas",
        src: require('@/assets/pics/qr_code.png'),
        flex: 6,
        width: "600",
        text: "Diese Applikation wurde mit Android Studio umgesetzt. Es war ein Projekt in der Informatikmittelschule, bei dem man eine App realisieren sollte." +
            " Meine Idee war es, etwas zu programmieren, was im Alltag nützlich sein könnte. Mit der App ist es möglich Notizen hinzufügen via QR-Code oder Eingabe und diese zu mit Mitmenschen schnell zu teilen.",
        show: false,
        linkText: "Download QR-Notes",
        link: "https://drive.google.com/file/d/15BtGitlrelFLqZZ47j47CGacuX0cfGFj/view?usp=sharing"
      },
      {
        title: "Abschlussarbeit / Material Ausleihe System",
        subtitle: "Made By Nikolaos Moshonas",
        src: require("@/assets/pics/biblio2.jpg"),
        flex: 6,
        width: "600px",
        text: "Für die Abschlussarbeit war meine Aufgabe ein Materialverwaltungssystem zu programmieren, bei dem Lehrer Bücher in der hauseigenen Bibliothek ausleihen können." +
            " Die Benutzer können Ausleihen erfassen und wieder zurückgeben. Das Prinzip ist vergleichbar mit dem einer Bibliothek. Dieses Projekt wurde mit PHP, HTML, CSS und JS umgesetzt. " +
            " Als Datenbank habe ich MySQL verwendet und für das Hosting wurde mir ein Server zur verfügung gestellt." +
            " Dazu wurde noch eine ausführliche Dokumentation geschrieben, die auf Anfrage gerne betrachtet werden kann. ",
        show: false,
        linkText: "Material Ausleihe System",
        link: "http://flyingteachers.net/material/mas/",

      },
      {
        title: "Best airlines",
        subtitle: "Hello",
        //src: require("@/assets/pics/php_logo.jpg"),
        flex: 12,
        width: "600px",
        show: false
      }
    ]
  })
};
</script>

<style>


</style>
