import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { updateUser } from '../../actions/user_actions';

class UserInfoForm extends React.Component {

  constructor(props) {
    super(props);
    let form;
    this.state = {
      id: this.props.userId,
      joined: '',
      occupation: 'Occupation',
      hometown: 'Hometown',
      current_city: 'Current City / Country',
      email: 'ex. YourAddress@email.com',
      website: 'ex. www.IHavePhotosHereToo.com'
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
    this.props.updateUser(user).then(() => {
      this.props.history.push(`/users/${this.props.userId}/info`)
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
        <form className='user-info-form' onSubmit={this.handleSubmit}>
          <h1 className='user-info-title'>Update User Info</h1>
          <div className='user-info-inputs'>

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
const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);






// <label>Joined:
//   <input value={this.state.joined} onChange={this.update('joined')} placeholder='Year' type='text'/>
// </label>
