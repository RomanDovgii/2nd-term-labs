<template>
  <v-app>
    <Header/>
    <v-main>
      <div v-if="!articles">
        <v-progress-circular
        indeterminate
        color="red"
        >
        </v-progress-circular>
      </div>
      <div v-else>
      <Slider
        v-bind:articles = sliderArticles
      />
      <v-container>
        <v-row align="stretch">
          <v-col
            v-for="article in articles"
            v-bind:key="article.id"
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
  import ArticleCard from '../components/article-card.vue';
  import Header from '../components/header.vue';
  import Footer from '../components/footer.vue';
  import Slider from '../components/slider.vue';

  export default {
    components: {
      ArticleCard,
      Header,
      Footer,
      Slider
    },
    computed: {
      articles: function () {
        this.$store.dispatch('getArticles');
        return this.$store.getters.getArticles;
      },
      sliderArticles: function () {
        let articlesForSlider = [...this.$store.getters.getArticles];
        articlesForSlider = articlesForSlider.filter(article => article.slider === true);
        console.log(articlesForSlider);
        return articlesForSlider;
      }
    }
    
  }
</script>
