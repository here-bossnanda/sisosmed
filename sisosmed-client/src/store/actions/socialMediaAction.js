import axios from "axios";

const baseUrl = 'https://sisosmed.herokuapp.com/api/aplikasi';

export const startFetchSocialMedia = () => {
  return {
    type: 'START_FETCH_SOCIAL_MEDIA'
  }
}

export const dispatchSocialMedia = (socialMedia) => {
  return {
    type: 'FETCH_ALL_SOCIAL_MEDIA',
    payload: socialMedia
  }
}

export const dispatchOneSocialMedia = (socialMedia) => {
  return {
    type: 'FETCH_ONE_SOCIAL_MEDIA',
    payload: socialMedia
  }
}

export const fetchDataSocialMedia = () => {
  return async(dispatch) => {
    try {
      dispatch(startFetchSocialMedia())
      const { data } = await axios.get(baseUrl);
      dispatch(dispatchSocialMedia(data));
    } catch (error) {
      console.log(error);      
    }
  }
}

export const fetchOneSocialMedia = (id) => {
  return async(dispatch) => {
    try {
      dispatch(startFetchSocialMedia())
      const { data } = await axios.get(`${baseUrl}/${id}`);
      dispatch(dispatchOneSocialMedia(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const storeSocialMedia = (payload) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(baseUrl, payload);
      const { socialMedia:sm } = getState();
      const newData = [...sm.socialMedia, data];
      dispatch(dispatchSocialMedia(newData));
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateSocialMedia = (payload, id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.put(`${baseUrl}/${id}`, payload);
      const { socialMedia:sm } = getState();
      const filteredSocialMedia = sm.socialMedia.filter(app => app.id != id);
      const newData = filteredSocialMedia.concat(data);

      dispatch(dispatchSocialMedia(newData));
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteSocialMedia = (id) => {
  return async(dispatch, getState) => {
    try {
      dispatch(startFetchSocialMedia())
      await axios.delete(`${baseUrl}/${id}`);
      const { socialMedia:sm } = getState();
      const filteredSocialMedia = sm.socialMedia.filter(app => app.id != id);
      dispatch(dispatchSocialMedia(filteredSocialMedia));
    } catch (error) {
      console.log(error);
    }
  }
}