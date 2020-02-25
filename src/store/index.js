import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import {
  GET_SEASONS,
  ADD_SEASON,
  UPDATE_SEASON,
  DELETE_SEASON
} from './mutation-types';

Vue.use(Vuex);

const state = {
  seasons: []
};

const mutations = {
  [GET_SEASONS](state, seasons) {
    state.seasons = seasons;
  },
  [ADD_SEASON](state, season) {
    state.seasons.push(season);
  },
  [UPDATE_SEASON](state, season) {
    // TODO: Explore other ways to edit the selected state.
    const index = state.seasons.findIndex(s => s.id === season.id);
    state.seasons.splice(index, 1, season);
    state.seasons = [...state.seasons];
  },
  [DELETE_SEASON](state, seasonId) {
    // TODO: Explore other ways to delete the selected state.
    state.seasons = [...state.seasons.filter(s => s.id !== seasonId)];
  }
};

const actions = {
  async getSeasonsAction({ commit }) {
    const seasons = await dataService.getSeasons();
    commit(GET_SEASONS, seasons);
  },
  async addSeasonAction({ commit }, season) {
    console.log("Adding season");
    const addedSeason = await dataService.addSeason(season);
    commit(ADD_SEASON, addedSeason);
  },
  async updateSeasonAction({ commit }, season) {
    console.log("Updating season");
    const updatedSeason = await dataService.updateSeason(season);
    commit(UPDATE_SEASON, updatedSeason);
  },
  async deleteSeasonAction({ commit }, season) {
    const deletedSeasonId = await dataService.deleteSeason(season);
    commit(DELETE_SEASON, deletedSeasonId);
  }
};

const getters = {
  getSeasonById: state => id => state.seasons.find(s => s.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});
