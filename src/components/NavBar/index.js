import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <img
          className="game-logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="navbar-header">Emoji Game</h1>
      </div>
      <div className="navbar-score-card">
        <p className="navbar-score">{isGameOver ? '' : `Score: ${score}`}</p>
        <p className="navbar-score">
          {isGameOver ? '' : `Top Score: ${topScore}`}
        </p>
      </div>
    </div>
  )
}

export default NavBar
