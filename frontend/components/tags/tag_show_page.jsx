import React from 'react';
import NavBar from '../misc/navbar'
import PhotoComponent from '../photos/photo_component_container'


class TagShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTag(this.props.tagname)
  }

  render() {
    if (this.props.tag) {
      return (
        <main>
          <NavBar />
          <div className='explore-title'>#{this.props.tagname}</div>
          <ul className='explore-wrapper'>{this.props.photos.map((photo) => {
                return <PhotoComponent photo={photo}/>
          })}</ul>
        </main>
      )
    } else {
        return (
          <main>
            <NavBar />
            <div>LOADING</div>
          </main>
        )
      }
    }
}



export default TagShow;
