import './index.css'

const SearchItem = props => {
  const {itemDetails, itemsDeleted} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDelete = () => {
    itemsDeleted(id)
  }

  return (
    <li className="list-item">
      <p className="timing">{timeAccessed}</p>

      <div className="img-matter">
        <img src={logoUrl} className="logo" alt={timeAccessed} />
        <p className="description">{title}</p>
        <p className="domaine-url">{domainUrl}</p>
      </div>
      <button className="delete-btn" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete-icon"
        />
      </button>
    </li>
  )
}

export default SearchItem
