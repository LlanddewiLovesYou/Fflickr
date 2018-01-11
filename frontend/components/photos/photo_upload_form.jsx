import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBar from '../misc/navbar';

class PhotoUploadForm extends React.Component {

  constructor(props) {
    super(props);
    let form;
    this.state = {
      imageFile: null,
      imageUrl: null,
      caption: null,
      title: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    this.props.receiveUser(this.props.userId)
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.loggedIn) {
    //   this.props.history.push('/');

  }


  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    })
  }

  updateFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const context = this;
    fileReader.onloadend = () => {
      context.setState({ imageFile: file, imageUrl:fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[photo]', this.state.imageFile);
    formData.append('photo[caption]', this.state.caption);
    formData.append('photo[title]', this.state.title);
    formData.append('photo[user_id]', this.props.currentUser.id);
    const photo = this.state;
    this.props.createPhoto(formData).then( () => {
      this.props.history.push(`/users/${this.props.currentUser.id}/photos`)
    });

  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
     <main>
       <NavBar/>
       <div className='upload-form-space'>
       <div className='photo-upload-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <div className='photo-upload-form'>
          <h1 className='photo-upload-title'>Upload Photo</h1>
          <label>Title:
            <input value={this.state.title} onChange={this.update('title')} placeholder='Title' type='text'/>
          </label>

          <label>Caption:
            <input value={this.state.caption} onChange={this.update('caption')} placeholder='Caption' type='text'/>
          </label>

          <label>Photo:
            <input type='file' onChange={this.updateFile}></input>
          </label>
        </div>
          <input type='submit' value="UPLOAD" className='photo-upload-button'/>

        </form>
      </div>
      </div>
      </main>
    );
  }
}

export default PhotoUploadForm;
