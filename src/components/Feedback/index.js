// Write your React code here.
import {Component} from 'react'

class FeedBack extends Component {
  state = {isfeedbackclicked: false}

  rendercondition = () => {
    this.setState({isfeedbackclicked: true})
  }

  renderquestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="items">
          {emojis.map(each => (
            <li key={each.id}>
              <button type="button" onClick={this.rendercondition}>
                <img src={each.imageUrl} alt={each.name} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderfeedBack = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="card">
        <h1>Thank You</h1>
        <img src={loveEmojiUrl} alt="love emoji" />
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isfeedbackclicked} = this.state
    return (
      <div className="feedback-app">
        <div className="card">
          {isfeedbackclicked ? this.renderfeedBack() : this.renderquestion()}
        </div>
      </div>
    )
  }
}

export default FeedBack
