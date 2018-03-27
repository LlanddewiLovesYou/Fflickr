import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTag } from '../../actions/tags_actions';
import TagShowPage from './tag_show_page'

const mapStateToProps = (state, ownProps) => {
  let tagname = ownProps.match.params.tagname
  let tags = Object.values(state.tags)
  let tag
  tags.forEach((t) => {
    if (t.tagname === tagname) {
      tag = t
    }
  })
  let photos = []
  if (tag && tag.photo_ids) {
    photos = tag.photo_ids.map((id) => state.photos[id] )
  }
  return {
    tag,
    photos,
    tagname
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchTag: (tagname) => dispatch(fetchTag(tagname))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagShowPage))
