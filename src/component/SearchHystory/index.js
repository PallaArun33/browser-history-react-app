import './index.css'

import {Component} from 'react'

import SearchItem from '../SearchItem'

class SearchHistory extends Component {
  state = {searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  itemsDeleted = id => {
    const {historyList} = this.props
    const filteredData = historyList.filter(eachItem => eachItem.id !== id)
    this.setState(prevState => ({}))
    console.log(filteredData)
    console.log('delete btn is clicked')
  }

  render() {
    const {historyList} = this.props
    const {searchInput} = this.state

    const searchResults = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-menu">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="img-logo"
          />
          <div className="search-input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="icon"
              alt="search"
            />
            <input
              type="search"
              className="search-item"
              placeholder="Search History"
              onChange={this.onChange}
              value={searchInput}
            />
          </div>
        </div>
        <div className="items-card">
          <ul className="ul-items">
            {searchResults.map(eachItem => (
              <SearchItem
                key={eachItem.id}
                itemDetails={eachItem}
                itemsDeleted={this.itemsDeleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchHistory
