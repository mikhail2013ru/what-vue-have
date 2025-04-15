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
        items: [1,2,3,4,5,6]
    })
}).mount('#app')