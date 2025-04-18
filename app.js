Vue.createApp({
    // data() {
    //     return {

    //     }
    //
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Moscow never sleep',
        person: {
            firstName: 'Mikhail',
            lastName: 'Volnov',
            age: 36
        },
        items: [1, 2]
    }),
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key);            
        }, 
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log('Log item', item);            
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
    // methods: {
    //     stopPropagation(event) {
    //         event.stopPropagation()
    //     }
    // }
}).mount('#app')