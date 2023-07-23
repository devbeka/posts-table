import React from 'react'
import search from '../../assets/svg/search.svg'
import './styles.scss'

const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        value={value}
        onChange={onChange}
        placeholder="Поиск"
        type="text"
      />
      <img src={search} alt="search" />
    </div>
  )
}

export default Search
