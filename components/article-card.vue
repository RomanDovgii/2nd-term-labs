<template>
  <v-card
    width="250px"
    margin-left="225px"
    height="100%"
  >
    <NuxtLink v-bind:to="'/articles/' + id" style="text-decoration: none; color: #ffffff; display: block;">
      <v-img v-bind:src="'/' + preview_image" v-bind:alt="name" style="background-color: #ffffff; height: 200px; object-fit: cover;"></v-img>
    </NuxtLink>
    <NuxtLink v-bind:to="'/articles/' + id" style="text-decoration: none; color: #ffffff; display: block;">
      <v-card-title>{{name}}</v-card-title>
    </NuxtLink>
    <v-card-text>{{shortDesc}}</v-card-text>
    <v-card-text>{{date}}</v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: `ArticleCard`,
    props: [
      'preview_image',
      'name',
      'shortDesc',
      'date',
      'id'
    ]
  };
</script>
