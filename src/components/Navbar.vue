<template>
  <nav>
    <v-app-bar
      dark
      :collapse-on-scroll="collapseOnScroll"
      flat
      prominent
      src="../assets/pics/banner_nav.jpg"
      app
    >

      <v-app-bar-nav-icon color="black" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Nikolaos Moshonas</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list nav dense>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route" active-class="accent">

            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>


        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    collapseOnScroll: true,
    links: [
      {icon: 'mdi-home-outline', text: 'Home', route: '/'},
      {icon: 'mdi-information-outline', text: 'About Me', route: '/about'},
      {icon: 'mdi-microsoft-visual-studio-code', text: 'Projects', route: '/projects'}
    ]
  })
};
</script>

<style scoped>
</style>
