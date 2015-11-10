import {setEntries, vote, next, INITIAL_STATE} from './core'

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
            break;
        case 'NEXT':
            return next(state);
            break;
        case 'VOTE':
            // return vote(state, action.entry);
            return state.update(
                'vote',
                voteState => vote(voteState, action.entry)
            )
        default:
            return state;
    }
}
