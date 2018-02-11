Vue.component('movie-item', {
    props: [ "movie" ],
    template: '<li>{{movie.title}} <button v-on:click="supprEvent"> Supprimer </button></li> ',
    mounted: function() {
        console.log("Mounted ", this.movie)
    },
    methods: {
      supprEvent:function(){
      this.$emit("rm",this.movie);
    }
  }
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        display: true,
        movie_to_add: {},
        movie_to_edit: undefined,
        movie_to_display: undefined,
        search: "",
        movies : [
            {
                title: "L'étrange noël de M. Jack",
                year: 1994,
                synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
            },
            {
                title: "Interstellar",
                year: 2014,
                synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
            }
        ]
    },
    methods: {
        newmovie1: function() {
            this.movies.push({title:"New movie"})
        },
        newmovie2: function() {
            this.movies.push(this.movie_to_add)
            this.movie_to_add = {}
        },
        edit: function(movie) {
            this.movie_to_edit = movie
        },
        save: function() {
            this.movie_to_edit = null
        },
        remove: function(index) {
            this.movies.splice(index, 1)
        },
        rmMovie: function(movie){
          this.movies.splice(this.movies.findIndex(function(e){
            return e.title===movie.title;
          }),1);
        }
    },
    created: function() {
        console.log("Created")
    },
    computed: {
        firstletter: function() {
            return this.message[0]
        },
        movies_search: function() {
            return this.movies.filter(m => m.title.indexOf(this.search)!=-1);
        }
    }
})
