import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem/index'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    language: 'All',
    object: [],
    loader: true,
  }

  componentDidMount() {
    this.getApi('ALL')
  }

  getApi = id => {
    this.setState({language: id}, this.callApiForObjects)
  }

  callApiForObjects = async () => {
    this.setState({loader: true})
    const {language} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${language}`,
    )
    const data = await response.json()
    const detailsData = data.popular_repos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
      id: eachItem.id,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    this.setState({
      object: detailsData,
      loader: false,
    })
  }

  render() {
    const {object, language, loader} = this.state
    return (
      <div className="main-bg">
        <h1 className="heading">Popular</h1>
        <ul>
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              detail={eachItem}
              getApi={this.getApi}
              key={eachItem.id}
              activeId={language}
            />
          ))}
        </ul>
        {loader ? (
          <div className="loader" data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <div className="images">
            {object.map(each => (
              <RepositoryItem each={each} key={each.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
