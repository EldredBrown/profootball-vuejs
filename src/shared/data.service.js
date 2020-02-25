import * as axios from 'axios';

import { API } from './config';

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

const addSeason = async function (season) {
  try {
    const response = await axios.post(`${API}/seasons`, season);
    const addedSeason = parseItem(response, 201);
    return addedSeason;
  } catch (error) {
    console.error(error);
    return null;
  }
};

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

const deleteSeason = async function (season) {
  try {
    const response = await axios.delete(`${API}/seasons/${season.id}`);
    parseItem(response, 200);
    return season.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

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
  getSeasons,
  getSeason,
  addSeason,
  updateSeason,
  deleteSeason
};
