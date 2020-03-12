import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import {
  GET_LEAGUES,
  ADD_LEAGUE,
  UPDATE_LEAGUE,
  DELETE_LEAGUE,
  GET_SEASONS,
  ADD_SEASON,
  UPDATE_SEASON,
  DELETE_SEASON
} from './mutation-types';

Vue.use(Vuex);

const state = {
  leagues: [],
  seasons: []
};

const mutations = {
  [GET_LEAGUES](state, leagues) {
    state.leagues = leagues;
  },
  [ADD_LEAGUE](state, league) {
    state.leagues.push(league);
  },
  [UPDATE_LEAGUE](state, league) {
    // TODO: Explore other ways to edit the selected state.
    const index = state.leagues.findIndex(s => s.id === league.id);
    state.leagues.splice(index, 1, league);
    state.leagues = [...state.leagues];
  },
  [DELETE_LEAGUE](state, leagueId) {
    // TODO: Explore other ways to delete the selected state.
    state.leagues = [...state.leagues.filter(s => s.id !== leagueId)];
  },
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
  async getLeaguesAction({ commit }) {
    const leagues = await dataService.getLeagues();
    commit(GET_LEAGUES, leagues);
  },
  async addLeagueAction({ commit }, league) {
    const addedLeague = await dataService.addLeague(league);
    commit(ADD_LEAGUE, addedLeague);
  },
  async updateLeagueAction({ commit }, league) {
    const updatedLeague = await dataService.updateLeague(league);
    commit(UPDATE_LEAGUE, updatedLeague);
  },
  async deleteLeagueAction({ commit }, league) {
    const deletedLeagueId = await dataService.deleteLeague(league);
    commit(DELETE_LEAGUE, deletedLeagueId);
  },
  async getSeasonsAction({ commit }) {
    const seasons = await dataService.getSeasons();
    commit(GET_SEASONS, seasons);
  },
  async addSeasonAction({ commit }, season) {
    const addedSeason = await dataService.addSeason(season);
    commit(ADD_SEASON, addedSeason);
  },
  async updateSeasonAction({ commit }, season) {
    const updatedSeason = await dataService.updateSeason(season);
    commit(UPDATE_SEASON, updatedSeason);
  },
  async deleteSeasonAction({ commit }, season) {
    const deletedSeasonId = await dataService.deleteSeason(season);
    commit(DELETE_SEASON, deletedSeasonId);
  }
};

const getters = {
  getLeagueById: state => id => state.leagues.find(l => l.id === id),
  getSeasonById: state => id => state.seasons.find(s => s.id === id)
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});

export default store;
