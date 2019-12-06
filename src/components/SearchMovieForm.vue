<template>
    <div>
        <label for="title">Title </label>
        <input type="text" name="title" v-model="title"><br>
        <label for="year">Year </label>
        <select name="year" @change="handleYearChange" :value="selectedYear">
            <option v-for="option in yearsList" :key="option">{{ option }}</option>
        </select>
        <label for="type"> Type </label>
        <select name="type" @change="handleTypeChange" :value="selectedType">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
        </select>

        <button @click="search" :disabled="isTitleEmpty">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            selectedType: 'movie',
            selectedYear: 'All time'
        }
    },
    computed: {
      isTitleEmpty() {
          return this.title.length === 0;
      },
      yearsList(){
        let years = ["All time"];
        for (let i = 2019; i>1915; i--){
          years.push(i);
        }
        return years;
      }
    },
    methods: {
        handleTypeChange(event) {
            this.selectedType = event.target.value
        },
        handleYearChange(event) {
            this.selectedYear = event.target.value
        },

        search() {
            this.$emit('search', {
                title: this.title,
                year: this.selectedYear,
                type: this.selectedType
            })
        }
    }
}
</script>
