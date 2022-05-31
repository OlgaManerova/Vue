const bestSellers = {
    state: {
        bestSellers: [
            {
                id: 0,
                src: 'coffee-1.jpg',
                text: 'Карточка 1',
                price: 100,
            },
            {
                id: 1,
                src: 'coffee-2.jpg',
                text: 'Карточка 2',
                price: 200,
            },
            {
                id: 2,
                src: 'coffee-3.jpg',
                text: 'Карточка 3',
                price: 300,
            },
        ],
    },
    getters: {
        getBestSellers(state) {
            return state.bestSellers;
        }
    }
}

export default bestSellers;