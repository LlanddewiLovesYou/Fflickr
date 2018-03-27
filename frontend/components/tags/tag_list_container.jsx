import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTag } from '../../actions/tags_actions';
import TagList from './tag_list'

export const mapStateToProps = (state, ownProps) => {
  return {
    photoId: ownProps.match.params.photoId
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    createTag: (tagname, photoId) => dispatch(createTag(tagname, photoId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagList));
