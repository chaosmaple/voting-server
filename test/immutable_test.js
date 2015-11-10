import {expect} from 'chai'
import {List, Map} from 'immutable'

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }

        it('is mutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        })
    })

    describe('a List', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is mutable', () => {
            let state = List.of('Transportting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of(
                'Transportting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Transportting',
                '28 Days Later'
            ));
        })
    })

    describe('a Map', () => {
        function addMovie(currentState, movie) {
            return currentState.update(
                'movies',
                movies => movies.push(movie)
            );
        }

        it('is mutable', () => {
            let state = Map({
                movies: List.of('Transportting', '28 Days Late')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Transportting',
                    '28 Days Late',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Transportting',
                    '28 Days Late'
                )
            }));
        })
    })
})
