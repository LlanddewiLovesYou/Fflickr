import React from 'react';
import { Link, withRouter } from 'react-router-dom';



 class ShowPage extends React.Component {

   constructor(props) {
     super(props)
   }

  render () {
    return (
      <div>
      `this is a show page`
      </div>
    );
  }

 }



export default withRouter(ShowPage);
