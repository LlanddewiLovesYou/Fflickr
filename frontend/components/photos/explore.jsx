import React from 'react';
import NavBar from '../misc/navbar'
import PhotoComponent from './photo_component_container'


class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestExplore()
  }

  render() {
    if (this.props.photos) {
      return (
        <main>
          <NavBar />
          <div className='explore-title'>Explore</div>
          <ul className='explore-wrapper'>{Object.keys(this.props.photos).map((photoId) => {
            return <PhotoComponent photo={this.props.photos[photoId]}/>
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








export default Explore;
