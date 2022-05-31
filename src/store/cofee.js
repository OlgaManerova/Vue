const cofee = {
    state: {
        cofee: [
            {
                id: 0,
                src: 'coffee-1.jpg',
                text: 'Карточка 1',
                price: 100,
            },
            {
                id: 1,
                src: 'coffee-2.jpg',
                text: 'Карточка 222',
                price: 200,
            },
            {
                id: 2,
                src: 'coffee-3.jpg',
                text: 'Карточка 3',
                price: 300,
            },
            {
                id: 3,
                src: 'coffee-1.jpg',
                text: 'Карточка 444',
                price: 400,
            },
            {
                id: 4,
                src: 'coffee-2.jpg',
                text: 'Карточка 5',
                price: 500,
            },
            {
                id: 5,
                src: 'coffee-3.jpg',
                text: 'Карточка 6',
                price: 600,
            },
        ],
    },

    getters: {
        getCofee(state) {
            return state.cofee;
        }
    }
}

export default cofee;