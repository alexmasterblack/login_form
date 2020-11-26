import Vue from 'vue'
import Vuex from 'vuex'
import { User } from "@/api/login";
import {
    ADD_USER
} from "@/store/mutation-types";

Vue.use(Vuex)

const state = {
    users_list: []
};

const mutations = {
    [ADD_USER] (state, user) {
        state.users_list.push(user)
    }
};

const actions = {
    createUser ({ commit }, data) {
        User.create(data).then(user => {
            commit(ADD_USER, user)
        })
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})



