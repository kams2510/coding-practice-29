import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

// Write your JS code here
const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
