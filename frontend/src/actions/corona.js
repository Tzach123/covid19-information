import axios from 'axios'

export const getInfoCoronaCountry = async (cauntryName = '') => {
  try {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/countries')
    return { error: false, data }
  } catch (error) {
    return {
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}

export const getInfoCorona = async (cauntryName = '') => {
  try {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/all')
    return { error: false, data }
  } catch (error) {
    return {
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}

export const getHistoryCorona = async (cauntryName = '') => {
  try {
    const { data } = await axios.get(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    )
    return { error: false, data }
  } catch (error) {
    return {
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    }
  }
}
