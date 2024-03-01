import './index.css'

const EmojiCard = props => {
  const {emojiData, onClickEmojiCard} = props
  const {id, emojiName, emojiUrl} = emojiData
  const onClickEmoji = () => {
    onClickEmojiCard(id)
  }

  return (
    <li className="emoji-card">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img alt={emojiName} className="emoji-img" src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
