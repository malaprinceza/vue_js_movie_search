<template>
    <div class="row">
        <search-movie-form @search="handleSerach"/>
        <button @click="sortByYear">Show {{ sortType }} </button>
        <movies-list :movies="movies"/>
    </div>
</template>

<script>
import MoviesList from '../components/MoviesList'
import SearchMovieForm from '../components/SearchMovieForm'
import moviesServices from '../services/movies'

export default {
    components: {
        MoviesList,
        SearchMovieForm
    },
    mounted() {
      this.getTopRated();
    },

    data() {
        return {
            movies: [],
            sortDescending: true,
            sortProp: 'release_date'
        }
    },
    computed: {
      sortType(){
        if (this.sortDescending) return 'oldest first'
        return 'newest first'
      }
    },
    methods: {
        sortByYear(switchOrder=true){
          if (switchOrder) this.sortDescending = !this.sortDescending;
          if (!this.sortDescending){
            this.movies.sort((a, b) => {
              return parseInt(a[this.sortProp].split('-')[0]) - parseInt(b[this.sortProp].split('-')[0])
            });
          } else {
            this.movies.sort((a, b) => {
              return parseInt(b[this.sortProp].split('-')[0]) - parseInt(a[this.sortProp].split('-')[0])
            });
          }
        },
        handleSerach(searchParams) {
          if (searchParams.type == 'movie'){
            this.sortProp = 'release_date'
          } else {
            this.sortProp = 'first_air_date'
          }
          this.search(searchParams);
          this.sortByYear(false);
        },

        async getTopRated() {
          this.movies = await moviesServices.getTopMovies();
          this.sortByYear(false);
        },

        async search({title, type, year}) {
            this.movies = await moviesServices.search(title, type, year);
        }
    }
}
</script>
