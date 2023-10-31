import {createApp} from 'vue'

createApp({
    data(){
        return {
            sentences: [
                {id: 0, text:'There is no strife, no prejudice, no national conflict in outer space as yet.', isFav: false},
                {id: 1, text:'Its hazards are hostile to us all.', isFav: false},
                {id: 2, text:'Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again.', isFav: false},
                {id: 3, text:'But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?', isFav: false},
                {id: 4, text:'Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?', isFav: false},
            ]
        }
    },
    methods: {
        highlight(index){
            const item = this.sentences[index]
            item.isFav = !item.isFav
        }
    },
}).mount('#app')