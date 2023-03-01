// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {getApi, detail, activeId} = props
  const {language, id} = detail
  const onclickObjects = () => {
    getApi(id)
  }

  return (
    <li className="li">
      <button
        type="button"
        onClick={onclickObjects}
        className={activeId === id ? 'blue-color' : ''}
      >
        <p>{language}</p>
      </button>
    </li>
  )
}
export default LanguageFilterItem
