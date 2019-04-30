var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue !'
    }
})


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Apprendre JavaScript' },
            { text: 'Apprendre Vue' },
            { text: 'Créer quelque chose de génial' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js !'
    },
    methods: {
        reverseMessage: function() {
            //reverse() : inverse les lettres
            this.message = this.message.split('').reverse().join('')
        }
    }
})

//réecris la meme chose dans un <p> que dans l'input
new Vue({
    el: '#app-7',
    data: {
        value_test: '',
        active: false,
        color: false
    }
})

//affiche le texte ecris lorsqu'on clique sur le bouton
new Vue({
    el: '#app-8',
    data: {
        show: "",
        Title: "",
        active: false,
        color: false
    }
})

//afficher img avec click checkbox
new Vue({
    el: '#app-9',
    data: {
        img: "",
    }
})