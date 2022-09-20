import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import {setLoggedInBool} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    loggedInBool: state.loggedInBool,
    // loggedInBool:true
  }

}

const mapDispatchToProps = () => {
  return {
    setLoggedInBool: (bool)=>dispatchEvent(setLoggedInBool(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)