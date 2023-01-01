// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsList = data.teams
    const updatedTeamsList = teamsList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return isLoading ? (
      <div className="loader-container">
        <Loader type="Oval" color="blue" height={50} width={50} />
      </div>
    ) : (
      <div className="app-container">
        <div className="home-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="title">IPL Dashboard</h1>
          </div>
          <ul className="team-list-container">
            {teamsList.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
