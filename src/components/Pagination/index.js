import React from 'react'
import { getPagesArray } from '../../utils/pages'
import './styles.scss'

const Pagination = ({ totalPages, page, setPage, changePage }) => {
  let pagesArray = getPagesArray(totalPages)

  const plusPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }
  const minusPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="pagination">
      <button onClick={minusPage}>Назад</button>
      <div>
        {pagesArray.map((number) => (
          <span
            onClick={() => changePage(number)}
            className={page === number ? 'active__page' : ''}
            key={number}
          >
            {number}
          </span>
        ))}
      </div>
      <button onClick={plusPage}>Далее</button>
    </div>
  )
}

export default Pagination
