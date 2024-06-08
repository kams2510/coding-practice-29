// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onClickBtn = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <button type="button" onClick={onClickBtn}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
