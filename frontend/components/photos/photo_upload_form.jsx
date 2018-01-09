import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl:fileReader.result})
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[image]', this.state.imageFile)
    formData.append('photo[caption]', this.state.caption)
    const photo = this.state;
    this.props.processForm(formData: {[photo.id]: photo});
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
        <form className='photo-info-form' onSubmit={this.handleSubmit}>

          <input type='file' onChange={this.updateFile}></input>

          <label>Title:
            <input value={this.state.title} onChange={this.update('title')} placeholder='Title' type='text'/>
          </label>

          <label>Caption:
            <input value={this.state.caption} onChange={this.update('caption')} placeholder='Caption' type='text'/>
          </label>

          <button>UPLOAD</button>

        </form>
      </main>
    );
  }
}

export default PhotoUploadForm;
