<template>
    <li>
        <p>Title: {{ movie.title}}</p> <br/>
        <p>Year: {{ (movie.release_date || movie.first_air_date || '').split('-')[0] }}</p> <br/>
        <p>Release date: {{ movie.release_date || movie.first_air_date }}</p> <br/>
        <p>Description: {{ movie.overview }}</p> <br/>
        <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"/>
    </li>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
            default: (() => {})
        }
    }
}
</script>
