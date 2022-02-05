<template>
  <div v-frag>
    <v-app-bar style="max-height: 64px;">
      <!-- Почему Vuetify тупое говно тупого говна? Да потому что у них на header задан height, который не ограничивает рост элемента в flex, который висит у них на v-app, а потому шапка может расти в зависимости от флекса. Следовательно, стили писали идиоты.-->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <NuxtLink to="/" style="text-decoration: none; color: #fff">
        Articles
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list>
        <div v-if="!categories">
          <v-progress-circular
          indeterminate
          color="red"
          >
          </v-progress-circular>
        </div>
        <div v-else>
          <v-list-item-group>
            <v-list-item v-for="category in categories" v-bind:key="category.id">
              <v-list-item-title>
                <NuxtLink v-bind:to="'/category/' + category.id" style="text-decoration: none; color: #fff">
                  {{category.name}}
                </NuxtLink>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import frag from "vue-frag"
  export default {
    directives: {
      frag
    },
    name: `Header`,
    data: () => ({
      drawer: false,
    }),
    computed: {
      categories: function () {
        this.$store.dispatch('getCategories');
        return this.$store.getters.getCategories;
      }
    }
  };
</script>
