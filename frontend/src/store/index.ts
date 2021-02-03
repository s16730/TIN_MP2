import Vue from 'vue'
import Vuex from 'vuex'
import { ErrorObject, FormSubmit, Shelf } from "@/types";
import { Mutation } from "@/const/Mutation";
import router from "@/router";
import { DataService } from "@/services/DataService";
import { EndpointService } from "@/services/EndpointService";
import { Endpoint } from "@/const/Endpoint";
import { UserRole } from "../../../src/entities/UserRole";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    globalMessage: null,
    isValidFieldsChanged: false,
    currentUser: null,
  },
  mutations: {

    [Mutation.SetGlobalMessage](state: any, message: string) {
      state.globalMessage = message;
    },
    [Mutation.ClearGlobalMessage](state: any) {
      state.globalMessage = null;
    },
    [Mutation.SetCurrentUser](state: any, value: any) {
      state.currentUser = value;
    },
    [Mutation.ClearErrors](state: any) {
      state.errors = [];
      state.isValidFieldsChanged = !state.isValidFieldsChanged;
    },
    [Mutation.AddErrors](state: any, errors: ErrorObject[]) {
      state.errors = [...state.errors, ...errors];
      state.isValidFieldsChanged = !state.isValidFieldsChanged;
    },
  },
  actions: {
    async init({ commit, state }) {
      try {
        const result = await DataService.instance.getCurrentUser()
        if (result && result.user) {
          state.currentUser = result.user;
        }
      } catch (e) {
        console.log(e)
      }

    },
    async submitForm({ commit, state }, formSubmit: FormSubmit) {
      commit(Mutation.ClearErrors)

      if (formSubmit.url) {
        const response = await fetch(formSubmit.url, {
          method: "POST",
          cache: "no-cache",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
          },
          body: JSON.stringify(formSubmit.data),
        })

        const responseData = await response.json();

        if (responseData.token) {
          localStorage.setItem('token', responseData.token)
        }

        if (responseData.currentUser) {
          state.currentUser = responseData.currentUser;
        }

        if (responseData.errors) {
          commit(Mutation.AddErrors, responseData.errors);
        }

        if (responseData.redirect) {
          await router.push({ path: responseData.redirect })
        }

        if (responseData.message) {
          commit(Mutation.SetGlobalMessage, responseData.message);
        }
      }
    },
    async logout({ state }) {
      const response = await fetch(EndpointService.getUrl(Endpoint.UserLogout), {
        method: "GET",
        cache: "no-cache",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
        },
      })

      if (response.status === 200) {
        state.currentUser = null;
        localStorage.removeItem('token')
        await router.push({ path: '/' })
      } else {
        state.globalMessage = "Wylogowanie nieudane";
      }
    }
  },
  modules: {}
})
