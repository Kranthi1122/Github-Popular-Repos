// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {each} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = each
  return (
    <li className="list">
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <div className="flex">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="image"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="flex">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="image"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="flex">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="image"
        />
        <p>{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
