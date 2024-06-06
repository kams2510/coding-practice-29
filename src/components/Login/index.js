// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const toNavHomePage = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetail = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetail),
    }

    console.log('logged in paa')
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = props
      history.replace('/')
      Cookies.set('jwt_token', data.jwt_token, {expires: 5, path: '/'})
    }
    console.log(response)
    console.log(data)
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={toNavHomePage} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
