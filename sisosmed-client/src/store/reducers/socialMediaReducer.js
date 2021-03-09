const initialState = {
  socialMedia: [],
  detailSocialMedia: {},
  isLoading: false
}

const socialMediaReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_SOCIAL_MEDIA':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_ALL_SOCIAL_MEDIA':
      return {
        ...state,
        socialMedia: action.payload,
        isLoading: false
      }
    case 'FETCH_ONE_SOCIAL_MEDIA':
      return {
        ...state,
        detailSocialMedia: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default socialMediaReducers;