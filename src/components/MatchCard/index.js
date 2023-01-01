// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails
  let statusStyle = ''
  if (matchStatus === 'Won') {
    statusStyle = 'status-won'
  } else {
    statusStyle = 'status-lost'
  }
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-image"
      />
      <h1 className="match-card-title">{competingTeam}</h1>
      <p className="match-card-result">{result}</p>
      <p className={`${statusStyle}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
