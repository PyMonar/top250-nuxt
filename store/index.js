import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    movies: []
  },
  actions: {
    FETCH_MOVIES ({commit, dispatch, state}) {
      return axios.get('https://api.douban.com/v2/movie/top250').then(res => {
        let movies = res.data.subjects
        commit('SET_MOVIES', movies)
      })
    }
  },
  mutations: {
    SET_MOVIES (state, movies) {
      state.movies = movies
    }
  }
})

export default store