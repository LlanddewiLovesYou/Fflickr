import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    let form;
    if (this.props.formType === 'edit'){
      this.state = {
        title: this.props.album.title,
        description: this.props.album.description,
        form: ''};
    } else
{    this.state = {
      title: '',
      description: '',
      // photos: [],
    form: '',
  photo_ids: this.props.selected};
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const album = this.state;
    this.props.processForm(album).then( () => {
      this.props.history.push(`/users/${this.props.currentUser.id}/albums`);
    })
  }



  // renderErrors() {
  //
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let formTitle;
    if (this.props.formType === 'new'){
      formTitle = 'New Album';
    } else if (this.props.formType === 'edit') {
      formTitle = 'Edit Album';
    }

    return (
   <main>
      <div className="album-form-container">
        <form onSubmit={this.handleSubmit} className="album-form-box">

          <br/>


          <div className="album-form">

              <h1 className='album-text'>{formTitle}</h1>

            <br/>

              <input placeholder='Title' type="text" value={this.state.title} onChange={this.update('title')} className="album-input"/>

            <br/>

              <input placeholder='Description' type="text" value={this.state.description} onChange={this.update('description')} className="album-input"/>

            <br/>

              <div className='photo-upload-field'>"SELECTED PHOTOSTREAM PHOTOS WILL APPEAR HERE"</div>

              <input type="submit" value='Submit' className='album-button'/>

          </div>
        </form>
      </div>
    </main>
    );
  }
}

export default AlbumForm;
