import axios from 'axios'

export default class PostService {
  static async getAllPosts(limit = 10, page = 1) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`,{
          params: {
            _limit: limit,
            _page: page,
          },
        }
      )
      
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('page', page);
      window.history.pushState({ path: newUrl.href }, '', newUrl.href);

      return response
    } catch (error) {
      throw error
    }
  }
}
