import React from 'react'
import './styles.scss'
import arrow from '../../assets/svg/arrow.svg'

const HeaderTable = ({ handleSort }) => {
  return (
    <header className="header">
      <div onClick={() => handleSort('id')} className="header__id">
        <span>ID</span>
        <img src={arrow} alt="arrow" />
      </div>
      <div onClick={() => handleSort('title')} className="header__title">
        <span>Заголовок</span>
        <img src={arrow} alt="arrow" />
      </div>
      <div onClick={() => handleSort('body')} className="header__body">
        <span>Описание</span>
        <img src={arrow} alt="arrow" />
      </div>
    </header>
  )
}

export default HeaderTable
