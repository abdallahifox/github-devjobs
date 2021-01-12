import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './../router/index'

Vue.use(Vuex)

const API_URL = 'https://jobs.github.com/positions.json?';
const API_URL_FOR_SINGLE_POST = 'https://jobs.github.com/positions/'
export default new Vuex.Store({
  state: {
    allPosts: null,
    notFound: false,
    loadMore: false,
    reset: null,
    singlePost:null
  },
  mutations: {
    setPosts(state, payload) {
      state.allPosts = payload
      state.loadMore = true
    },
    setSearchedPosts(state, payload) {
      if (payload.length === 0) {
        state.notFound = true
        state.allPosts = true
        state.loadMore = false
      } else {
        state.allPosts = payload
        state.notFound = false
        state.loadMore = false
      }
    },
    reset(state) {
      state.reset = 'Sorry No Jobs More :)';
    },
    setSinglePost(state, payload) {
      state.singlePost = payload
    }
  },
  actions: {
    featchPosts({commit},payload) {
      axios.get(`${API_URL}page=${payload}`)
        .then(response => {
          let posts = response.data
          if (posts.length === 0) {
            commit('reset')
          }
          console.log(posts)
          commit('setPosts', posts)
      })
    },
    search({ commit, state }, payload) {
      state.allPosts =  null
      axios.get(`${API_URL}description=${payload}`)
        .then(response => {
          let searchedPosts = response.data
          commit('setSearchedPosts', searchedPosts) 
      })
    },
    singlePost({commit}, payload) {
      axios.get(`${API_URL_FOR_SINGLE_POST}${payload}.json`)
        .then(response => {
          let singlePost = response.data
          commit('setSinglePost', singlePost)
      })
    }
  },
  getters: {
    getPosts(state) {
      return state.allPosts
    },
    getNotFound(state) {
      return state.notFound
    },
    getLoadMore(state) {
      return state.loadMore
    },
    getReset(state) {
      return state.reset
    },
    getSinglePost(state) {
      return state.singlePost
    }
  }
})
