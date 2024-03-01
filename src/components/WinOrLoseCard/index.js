import './index.css'

const WinOrLossCard = props => {
  const {emojisList, clickedEmojisList, resetGame} = props
  let isWin = false
  let image = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  if (clickedEmojisList.length === emojisList.length) isWin = true
  if (isWin) image = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const onClickPlayAgain = () => {
    resetGame()
  }

  return (
    <div className="wlc-container">
      <img className="wlc-img" alt="win or lose" src={image} />
      <div className="wlc-result-card">
        <h1 className="wlc-header">{isWin ? 'You Won' : 'You Lose'}</h1>
        <p className="wlc-score-label">{isWin ? 'Best Score' : 'Score'}</p>
        <p className="wlc-score">
          {clickedEmojisList.length}/{emojisList.length}
        </p>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
