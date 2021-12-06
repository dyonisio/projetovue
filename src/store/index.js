import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Cards API",
    cards:[
      {
        nome: "Atenas ",
        pais: "Grécia",
        nota: 9,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-atenas-capa2019-01-820x430.jpg"
      },
      {
        nome: "Bangkok",
        pais: "Tailândia",
        nota: 9.5,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-bangkok-capa2019-04-820x430.jpg"
      },
      {
        nome: "Dubai",
        pais: "Emirados Árabes",
        nota: 9.9,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/01/viajar-dubai-2021-capa-820x430.jpg"
      },
      {
        nome: "Madri",
        pais: "Espanha",
        nota: 8,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-madri-capa2019-02-820x430.jpg"
      },
      {
        nome: "Marraquexe",
        pais: "Marrocos",
        nota: 9.7,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/04/marrocos-marrakesh-capa-820x431.jpg"
      },
      {
        nome: "Paris",
        pais: "França",
        nota: 10,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-03-820x430.jpg"
      },
      {
        nome: "Tóquio",
        pais: "Japão",
        nota: 10,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-tokyo-capa2019-01-820x430.jpg"
      },
      {
        nome: "Veneza",
        pais: "Itália",
        nota: 9.9,
        img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-veneza-capa2019-04-820x430.jpg"
      },
    ],
    data: null
  },
  mutations: {
      SET_DATA(state, payload){
        state.data = payload
    }
  },
  actions: {
      fetchData({commit}){
        axios.get("https://reqres.in/api/users?page=1")
        .then(res=>{
            const payload = res.data
            commit('SET_DATA', payload)
        })
    }
  },
  modules: {
      italicTitle(state){
        return `<b>${state.title}</b>`
    }
  }
})
