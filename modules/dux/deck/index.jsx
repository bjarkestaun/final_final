// import {Map, List} from 'immutable'
import Decks from 'db/decks'
import { numSlides } from 'dux/show'

const SET_DECK = 'SET_DECK'

///////////////////////
// TRACKER FUNCTIONS //
///////////////////////
// stop trackers with <<trackername>>.stop()

// get the presentation data
export function getPresentation (id) {
  return Tracker.autorun(function (computation) {
    // id can be gid or document id! 
    let deck = Decks.findOne({$or: [{_id: id}, {gid: id}]})
    if(deck){
      // set the ownerId, showId
      dispatch(setDeck(deck.data))
      // set the number of slides in the deck
      dispatch(numSlides(deck.data.length))
      // kill the autorun
      computation.stop()
    } else {
      // do something if no deck?
    }
  })
}

// TODO: get presentation data with a method
export function getDeck (gid) {
  return (dispatch) => {
    // should return array
    Meteor.call('getDeck', gid, (err, result) => {
      if (err){
        throw new Error('Could not get deck from meteor method')
      } else {
        // set the svg data in the deck
        dispatch(setDeck(result))
        // set the number of slides in the deck
        dispatch(numSlides(result.length))
      }
    })
  }
}

export function setDeck (array) {
  return {
    type: SET_DECK,
    payload: array,
  }
}


export default function reducer(state = [], action) {
  switch (action.type) {
  case 'SET_DECK':
    return [...action.payload]
  default:
    return state;
  }
}


