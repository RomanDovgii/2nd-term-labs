<template>
  <div>

  </div>
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
    data: () => ({
      articles: [],
    }),
    created() {
      return this.$store.dispatch('getArticle');
    },
    mounted() {
      this.articles = this.$store.getters.getArticle;
    },
  }
</script>
