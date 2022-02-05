<template>
  <v-app>
    <Header/>
    <v-main>
      <div v-if="!article">
          <v-progress-circular
          indeterminate
          color="red"
          >
          </v-progress-circular>
      </div>
      <div v-else>      
        <v-container>
          <v-img v-bind:src="'/' + article.full_image" v-bind:alt="article.name" style="background-color: #ffffff; height: 200px; object-fit: cover;"></v-img>
          <h1>{{article.name}}</h1>
          <p>{{article.desc}}</p>
        </v-container>
        <v-container>
          <v-form>
            <v-col>
              <label style="margin-top: 20px; display: block;">
                Имя
                <v-text-field v-model="user_name" style="max-width: 500px;" required></v-text-field>
              </label>
              <label style="margin-top: 20px; display: block;">
                Комментарий
                <v-textarea v-model="comment" style="max-width: 500px;" required></v-textarea>
              </label>
              <v-btn @click="submit" style="margin-top: 20px; display: block;" type="submit">Send</v-btn>
            </v-col>
          </v-form>
          <v-card v-for="comment in comments" v-bind:key="'comment' + comment.id + comment.user_name + comment.updated_at" style="margin-top: 10px;"> 
            <v-card-title>{{comment.user_name}}</v-card-title>
            <v-card-text>{{comment.comment}}</v-card-text>
          </v-card>        
        </v-container>
      </div>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from '../../components/header.vue';
  import Footer from '../../components/footer.vue';
  import Slider from '../../components/slider.vue';

  export default {
    components: {
      Header,
      Footer,
      Slider
    },
    data() {
      return {
        user_name: '',
        comment: '',
      }
    },
    methods: {
      submit: function(evt) {
        evt.preventDefault();
        if (this.user_name !== '' && this.comment !== '') {
          this.$store.dispatch('sendComment', {
            user_name: this.user_name,
            comment: this.comment,
            id: this.$route.params.id,
          });
        }
        this.user_name = '';
        this.comment = '';
      }
    },
    computed: {
      article: function () {
        this.$store.dispatch('getArticle', {
          id: this.$route.params.id
        });
        return this.$store.getters.getArticle;
      },
      comments: function() {
        this.$store.dispatch(`getComments`, {
          id: this.$route.params.id
        });
        console.log(this.$store.getters.getComments);
        return this.$store.getters.getComments;
      }
    }
  }
</script>
