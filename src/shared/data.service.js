import * as axios from 'axios';

import { API } from './config';

async function getLeagues() {
  try {
    const response = await axios.get(`${API}/leagues`);

    let data = parseList(response);

    const leagues = data.map(s => {
      return s;
    });

    return leagues;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getLeague(id) {
  try {
    const response = await axios.get(`${API}/leagues/${id}`);
    let league = parseItem(response, 200);
    return league;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function addLeague(league) {
  try {
    const response = await axios.post(`${API}/leagues`, league);
    const addedLeague = parseItem(response, 201);
    return addedLeague;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateLeague(league) {
  try {
    const response = await axios.put(`${API}/leagues/${league.id}`, league);
    const updatedLeague = parseItem(response, 200);
    return updatedLeague;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteLeague(league) {
  try {
    const response = await axios.delete(`${API}/leagues/${league.id}`);
    parseItem(response, 200);
    return league.id;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getSeasons() {
  try {
    const response = await axios.get(`${API}/seasons`);

    let data = parseList(response);

    const seasons = data.map(s => {
      return s;
    });

    return seasons;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getSeason(id) {
  try {
    const response = await axios.get(`${API}/seasons/${id}`);
    let season = parseItem(response, 200);
    return season;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function addSeason(season) {
  try {
    const response = await axios.post(`${API}/seasons`, season);
    const addedSeason = parseItem(response, 201);
    return addedSeason;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateSeason(season) {
  try {
    const response = await axios.put(`${API}/seasons/${season.id}`, season);
    const updatedSeason = parseItem(response, 200);
    return updatedSeason;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteSeason(season) {
  try {
    const response = await axios.delete(`${API}/seasons/${season.id}`);
    parseItem(response, 200);
    return season.id;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getTeams() {
  try {
    const response = await axios.get(`${API}/teams`);

    let data = parseList(response);

    const teams = data.map(s => {
      return s;
    });

    return teams;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getTeam(id) {
  try {
    const response = await axios.get(`${API}/teams/${id}`);
    let team = parseItem(response, 200);
    return team;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function addTeam(team) {
  try {
    const response = await axios.post(`${API}/teams`, team);
    const addedTeam = parseItem(response, 201);
    return addedTeam;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateTeam(team) {
  try {
    const response = await axios.put(`${API}/teams/${team.id}`, team);
    const updatedTeam = parseItem(response, 200);
    return updatedTeam;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteTeam(team) {
  try {
    const response = await axios.delete(`${API}/teams/${team.id}`);
    parseItem(response, 200);
    return team.id;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function parseList(response) {
  if (response.status !== 200) {
    throw Error(response.message);
  }

  if (!response.data) {
    return [];
  }

  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }

  return list;
}

function parseItem(response, code) {
  if (response.status !== code) {
    throw Error(response.message);
  }

  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }

  return item;
}

export const dataService = {
  getLeagues,
  getLeague,
  addLeague,
  updateLeague,
  deleteLeague,
  getSeasons,
  getSeason,
  addSeason,
  updateSeason,
  deleteSeason,
  getTeams,
  getTeam,
  addTeam,
  updateTeam,
  deleteTeam,
};
