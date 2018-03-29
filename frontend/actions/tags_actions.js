export const RECEIVE_TAG = "RECEIVE_TAG"
import * as TagsApi from '../util/tags_api_util'


export const createTag = (tagname, photoId) => {
  return (dispatch) => {
      return TagsApi.createTag(tagname, photoId).then( (payload) => {
        dispatch({type: RECEIVE_TAG, tag: payload.tag, photos: payload.photos})
      }
    )
  }
}

export const fetchTag = (tagname) => {
  return (dispatch) => {
    return TagsApi.fetchTag(tagname).then((payload) => {
      dispatch({type: RECEIVE_TAG, tag: payload.tag, photos: payload.photos})
    })
  }
}

export const deleteTag = (tagname, photoId) => {
  return (dispatch) => {
    return TagsApi.deleteTag(tagname, photoId).then((payload) => {
      dispatch({type: RECEIVE_TAG, tag: payload.tag, photos: payload.photos})
    })
  }
}
