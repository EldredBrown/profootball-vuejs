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
  DELETE_SEASON,
  GET_TEAMS,
  ADD_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM
} from './mutation-types';

Vue.use(Vuex);

const state = {
  leagues: [],
  seasons: [],
  teams: [],
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
  },
  [GET_TEAMS](state, teams) {
    state.teams = teams;
  },
  [ADD_TEAM](state, team) {
    state.teams.push(team);
  },
  [UPDATE_TEAM](state, team) {
    // TODO: Explore other ways to edit the selected state.
    const index = state.teams.findIndex(s => s.id === team.id);
    state.teams.splice(index, 1, team);
    state.teams = [...state.teams];
  },
  [DELETE_TEAM](state, teamId) {
    // TODO: Explore other ways to delete the selected state.
    state.teams = [...state.teams.filter(s => s.id !== teamId)];
  },
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
  },
  async getTeamsAction({ commit }) {
    const teams = await dataService.getTeams();
    commit(GET_TEAMS, teams);
  },
  async addTeamAction({ commit }, team) {
    const addedTeam = await dataService.addTeam(team);
    commit(ADD_TEAM, addedTeam);
  },
  async updateTeamAction({ commit }, team) {
    const updatedTeam = await dataService.updateTeam(team);
    commit(UPDATE_TEAM, updatedTeam);
  },
  async deleteTeamAction({ commit }, team) {
    const deletedTeamId = await dataService.deleteTeam(team);
    commit(DELETE_TEAM, deletedTeamId);
  },
};

const getters = {
  getLeagueById: state => id => state.leagues.find(l => l.id === id),
  getSeasonById: state => id => state.seasons.find(s => s.id === id),
  getTeamById: state => id => state.teams.find(t => t.id === id),
};

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
});

export default store;
