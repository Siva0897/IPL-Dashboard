// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-card">
      <div className="match-card-section">
        <h1>{competingTeam}</h1>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="match-card-section logo-container">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competing-team-logo"
        />
      </div>
      <div className="match-card-section end-section-container">
        <p className="end-section-sub-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="end-section-sub-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="end-section-sub-headings">Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="end-section-sub-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
