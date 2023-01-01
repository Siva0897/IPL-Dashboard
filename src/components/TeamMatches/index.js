// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    teamBackgroundImage: '',
    isLoading: true,
  }

  componentDidMount = () => {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const teamId = match.params.id

    const path = match.url
    const response = await fetch(`https://apis.ccbp.in${path}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      teamBackgroundImage: teamId,
      isLoading: false,
    })
  }

  render() {
    const {
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      teamBackgroundImage,
      isLoading,
    } = this.state
    console.log(latestMatchDetails)
    return isLoading ? (
      <div className="loader-container">
        <Loader type="Oval" color="blue" height={50} width={50} />
      </div>
    ) : (
      <div className={`bg-container ${teamBackgroundImage}`}>
        <div className="home-btn-container">
          <Link to="/">
            <button className="home-btn" type="button">
              Home
            </button>
          </Link>
        </div>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h3>Latest Matches</h3>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-container">
          {recentMatches.map(each => (
            <MatchCard recentMatchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
