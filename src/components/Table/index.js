import React from 'react'
import './styles.scss'

const Table = ({ posts }) => {
  if (!posts.length) {
    return <h1 className='not_found'>Не найдено!</h1>
  }

  return (
    <div>
      <table className="item">
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="item__id">{post.id}</td>
              <td className="item__title">{post.title}</td>
              <td className="item__body">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
