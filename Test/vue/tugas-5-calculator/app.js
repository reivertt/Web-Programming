import {createApp} from 'vue'

const app = createApp( {
    data() {
        return {
            total: 0
        }
    },
    methods: {
      key(num) {
        if (this.total == 0) return this.total = num;
        return this.total += String(num);
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