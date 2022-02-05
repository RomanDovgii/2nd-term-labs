<template>
  <v-app>
    <Header/>
    <v-main>
      <div v-if="!currentArticles">
        <v-progress-circular
        indeterminate
        color="red"
        >
        </v-progress-circular>
      </div>
      <div v-else>
      <Slider
        v-bind:articles = articles
      />
      <v-container>
        <v-row align="stretch">
          <v-col
            v-for="article in currentArticles"
            v-bind:key="'filtered' + article.id"
            cols = 2
            >
              <ArticleCard
                v-bind:preview_image = article.preview_image
                v-bind:name = article.name
                v-bind:shortDesc = article.shortDesc
                v-bind:date = article.date
                v-bind:id = article.id
              />
          </v-col>
        </v-row>
      </v-container>
      </div>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import ArticleCard from '../../components/article-card.vue';
  import Header from '../../components/header.vue';
  import Footer from '../../components/footer.vue';
  import Slider from '../../components/slider.vue';

  export default {
    components: {
      ArticleCard,
      Header,
      Footer,
      Slider
    },
    computed: {
      currentArticles: function () {
        this.$store.dispatch('getParticularArticles', {
            id: this.$route.params.id
        });
        return this.$store.getters.getParticularArticles;
      },
      articles: function () {
          return this.$store.getters.getArticles;
      }
    }
  }
</script>
