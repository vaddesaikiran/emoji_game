/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLossCard from '../WinOrLoseCard/index'

import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    score: 0,
    clickedEmojisList: [],
    isGameOver: false,
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameOver: false,
    })
  }

  onClickEmojiCard = id => {
    const {topScore, clickedEmojisList} = this.state
    const {emojisList} = this.props

    if (clickedEmojisList.includes(id)) {
      let isNewTopScore = false
      if (topScore < clickedEmojisList.length) isNewTopScore = true

      this.setState({
        topScore: isNewTopScore ? clickedEmojisList.length : topScore,
        isGameOver: true,
      })
    } else {
      const newList = [...clickedEmojisList, id]

      if (newList.length === emojisList.length) {
        this.setState({
          score: newList.length,
          topScore: newList.length,
          clickedEmojisList: newList,
          isGameOver: true,
        })
      } else {
        this.setState({
          score: newList.length,
          clickedEmojisList: newList,
        })
      }
    }
  }

  emojiGame = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const newEmojiList = shuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {newEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            onClickEmojiCard={this.onClickEmojiCard}
            emojiData={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, score, isGameOver, clickedEmojisList} = this.state
    const {emojisList} = this.props

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="emoji-game-container">
          {isGameOver ? (
            <WinOrLossCard
              clickedEmojisList={clickedEmojisList}
              emojisList={emojisList}
              resetGame={this.resetGame}
            />
          ) : (
            this.emojiGame()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
