// GreetingContainer passes as props to the presentational component currentUser
// from the state and the logout action creator. Set up mapStateToProps and
// mapDispatchToProps accordingly.
import Greeting from './greeting';
import {connect} from 'react-redux';
import {logOut} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
