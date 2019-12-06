import axios from 'axios'
const API_KEY = '5b94fc5b88abe631749170866cf76499';

 class MoviesService {
    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            headers: {Accept: 'application/json'}
        });
    }

    async getTopMovies() {
      let query = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      const { data } = await this.apiClient.get(query);
      return data.results;
    }

    async search(title, type, year) {
      let query = `search/${type}?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false&year=${year}`
      const {data} = await this.apiClient.get(query)
      return data.results;
    }

}

const moviesServices = new MoviesService();

export default moviesServices;
