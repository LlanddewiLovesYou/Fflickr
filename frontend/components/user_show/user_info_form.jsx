import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserInfoForm extends React.Component {

  constructor(props) {
    super(props);
    let form;
    this.state = {
      joined: '',
      occupation: '',
      hometown: '',
      current_city: '',
      email: '',
      website: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser({user});
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
        <form className='user-info-form' onSubmit={this.handleSubmit}>
          <h1 className='user-info-title'>Update User Info</h1>
          <div className='user-info-inputs'>
          <label>Joined:
            <input value={this.state.joined} onChange={this.update('joined')} placeholder='Year' type='text'/>
          </label>

          <label>Occupation:
            <input value={this.state.occupation} onChange={this.update('occupation')} placeholder='Occupation' type='text'/>
          </label>

          <label>Hometown:
            <input value={this.state.hometown} onChange={this.update('hometown')} placeholder='Hometown' type='text'/>
          </label>

          <label>Current City / Country:
            <input value={this.state.current_city} onChange={this.update('current_city')} placeholder='Current City / Country' type='text'/>
          </label>

          <label>E-mail:
            <input value={this.state.email} onChange={this.update('email')} placeholder='ex. YourAddress@email.com' type='text'/>
          </label>

          <label>Website:
            <input value={this.state.website} onChange={this.update('website')} placeholder='ex. www.IHavePhotosHereToo.com' type='text'/>
          </label>
        </div>

          <button className="user-info-button" value='Update!'>Update!</button>
        </form>
      </main>
    );
  }
}

export default UserInfoForm;
