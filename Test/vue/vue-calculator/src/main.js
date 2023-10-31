import {createApp} from 'vue'

const app = createApp( {
    data() {
        return {
            total: 0
        }
    },
    methods: {
      key(num) {
        return this.total += num;
      },
      clear(){
        return this.total = 0;
      },
      equal(){
        return this.total = eval(this.total);
      }
    },
    mounted() {
        console.log(`Successfully Mounted!`)
    }
})

app.mount('#app')