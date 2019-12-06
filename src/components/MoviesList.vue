<template>
    <div>
        <ul>
            <movie-item v-for="item in movies" :key="item.id" :movie="item"/>
        </ul>
    </div>
</template>

<script>
import MovieItem from './MovieItem'

export default {
    components: {MovieItem},

    props: {
        movies: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>
