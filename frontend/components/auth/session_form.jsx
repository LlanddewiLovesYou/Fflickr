import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let form;
    this.state = {
      username: '',
      password: '',
    form: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
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
    this.props.processForm({user});
  }

  guestLogin(e) {
    e.preventDefault();
    // const user = this.setState();
    this.props.logIn({username: "FutureEmployer", password: 'password'});
  }


  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

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
    let formTitle;
    if (this.props.formType === 'login'){
      formTitle = 'Sign In';
    } else if (this.props.formType === 'signup') {
      formTitle = 'Sign Up';
    }
debugger
    return (
   <main>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <h1 className='yahuu-logo'>YAHUU!</h1>
            <h1 className='login-text'>{formTitle}</h1>
            <br/>
            <input placeholder='Username' type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
            <br/>
            <input placeholder='Password' type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
            <br/>
            <input type="submit" value={formTitle} className='login-button'/>
            <a className="guest-signin" onClick={this.guestLogin}>Sign In As Guest</a>
            <h1 className="create-new-user">Don't have an account? Click <Link to='/signup'>Here</Link></h1>
          </div>
        </form>
      </div>
    </main>
    );
  }
}

export default SessionForm;
