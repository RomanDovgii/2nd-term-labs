import Vue from "vue";
import Vuex from "vuex";
import {articles} from "../utils/mocks/articles";
import {categories} from "../utils/mocks/categories";
import {createApi} from "../api/api";
import {ApiRoutes} from "../utils/constants";

const api = createApi();

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    currentArticle: {},
    currentComments: [],
    articles: [],
    currentArticles: [],
    categories: [],
    selectedArticles: 0,
  },
  mutations: {
    setCurrentArticle(state, payload) {
      state.currentArticle = payload;
    },
    setArticles(state, payload) {
      state.articles = payload;
    },
    setArticle(state, payload) {
      state.currentArticle = payload;
    },
    setCategories(state, payload) {
      state.categories = payload;
    },
    setComments(state, payload) {
      state.currentComments = payload;
    },
    setCurrentArticles(state, payload) {
      state.currentArticles = payload;
    },
  },
  actions: {
    getArticles ({ commit }) {
      if (this.state.articles.length === 0) {
        api.get(ApiRoutes.GET_ARTICLES)
        .then(({data}) => {
          commit('setArticles', data);
        })
        .catch((err) => {
          throw err;
        })
      }
    },
    getCategories ({ commit }) {
      if (this.state.categories.length === 0) {
        api.get(ApiRoutes.GET_CATEGORIES)
        .then(({data}) => {
          commit('setCategories', data);
        })
        .catch((err) => {
          throw err;
        })
      }
    },
    getArticle ({ commit }, {id}) {
      if (`${this.state.currentArticle.id}` !== `${id}`) {
        new api.get(ApiRoutes.GET_ARTICLE + id)
        .then(({data}) => {
          return commit('setArticle', data);
        })
        .catch((err) => {
          throw err;
        })
      } else {
        return;
      }
    },
    getComments ({ commit }, {id}) {
      if (`${this.state.currentArticle.id}` !== `${id}`) {
        new api.get(`/articles/${id}/comments`)
        .then(({data}) => {
          return commit('setComments', data);
        })
        .catch((err) => {
          throw err;
        })
      } else {
        return;
      }
    },
    sendComment ({ commit }, data) {
      console.log(data);
      new api.post(`/articles/${data.id}/comments`, {
        'user_name': data.user_name,
        'comment': data.comment
      })
      .then((res) => {
        this.state.currentComments.push({
          'user_name': data.user_name,
          'comment': data.comment
        });
      })
      .catch((err) => console.log(err));
    },
    getParticularArticles ({ commit }, {id}) {
      if (this.state.articles.length === 0) {
        api.get(ApiRoutes.GET_ARTICLES)
        .then(({data}) => {
          commit('setArticles', data);
        })
        .catch((err) => {
          throw err;
        })
      }
      let filteredPosts = [...this.state.articles];
      filteredPosts = filteredPosts.filter((article) => `${article.category}` === `${id}`);
      return commit('setCurrentArticles', filteredPosts);  
    }
  },
  modules: {},
  getters: {
    getArticle: state => state.currentArticle,
    getArticles: state => state.articles,
    getCategories: state => state.categories,
    getComments: state => state.currentComments,
    getParticularArticles: state => state.currentArticles,
  }
})
