<template>
  <v-container>
    <v-carousel>
      <v-carousel-item
        reverse-trasition="fade-transition"
        transition="fade-transition"
        v-for="article in articles"
        v-bind:key="'caourusel' + article.id"
        v-bind:src="'/' + article.full_image"
      >
        <v-col
          class="fill-height"
          align-self="center"
        >
          <h3 style="text-shadow: 2px 2px 16px rgba(108, 150, 150, 1);"> {{article.name}} </h3>
          <p style="text-shadow: 2px 2px 16px rgba(108, 150, 150, 1);"> {{article.shortDesc}} </p>
        </v-col>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  export default {
    name: `Slider`,
    props: [
      'articles'
    ]
  };
</script>
