import Vue from 'vue'
import Vuex from 'vuex'
import { DataObject, ErrorObject, FormSubmit } from "@/types";
import { Mutation } from "@/const/Mutation";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    globalMessage: null,
  },
  mutations: {

    [Mutation.SetGlobalMessage](state: any, message: string) {
      state.globalMessage = message;
    },
    [Mutation.ClearGlobalMessage](state: any) {
      state.globalMessage = null;
    },
    [Mutation.ClearErrors](state: any) {
      state.errors = [];
    },
    [Mutation.AddErrors](state: any, errors: ErrorObject[]) {
      state.errors = [...state.errors, ...errors];
    },
  },
  actions: {
    async submitForm({ commit, state }, formSubmit: FormSubmit) {
      commit(Mutation.ClearErrors)

      if (formSubmit.url) {
        const response = await fetch(formSubmit.url, {
          method: "POST",
          cache: "no-cache",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formSubmit.data),
        })

        const responseData = await response.json();

        if (responseData.errors) {
          commit(Mutation.AddErrors, responseData.errors);
        }

        if (responseData.redirect) {
          await router.push({ name: responseData.redirect })
        }

        if (responseData.message) {
          commit(Mutation.SetGlobalMessage, responseData.message);
        }
      }
    }
  },
  modules: {}
})
