import { useEffect, useMemo, useState } from 'react'
import Table from './components/Table'
import HeaderTable from './components/HeaderTable'
import Search from './components/Search'
import Pagination from './components/Pagination'
import PostService from './services/posrService'
import { getPageCount } from './utils/pages'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' })
  const [search, setSearch] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const limit = 10

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1
      } else {
        return b[sortConfig.key] > a[sortConfig.key] ? 1 : -1
      }
    })
  }, [posts, sortConfig])

  const handleSort = (key) => {
    const direction =
      key === sortConfig.key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    setSortConfig({ key, direction })
  }

  const searchedAndSortedPost = useMemo(() => {
    const searchText = search.toLowerCase().trim()

    if (!searchText) {
      return sortedPosts
    }

    return sortedPosts.filter((post) => {
      const { title, body, id } = post
      const lowerCaseTitle = title.toLowerCase()
      const lowerCaseBody = body.toLowerCase()
      const idString = id.toString().toLowerCase()

      return (
        lowerCaseTitle.includes(searchText) ||
        lowerCaseBody.includes(searchText) ||
        idString.includes(searchText)
      )
    })
  }, [search, sortedPosts])

  const fetchPosts = async () => {
    const response = await PostService.getAllPosts(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  return (
    <div className="App">
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <HeaderTable handleSort={handleSort} />
      <Table posts={searchedAndSortedPost} />

      {searchedAndSortedPost.length > 0 && (
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          changePage={changePage}
        />
      )}
    </div>
  )
}

export default App
