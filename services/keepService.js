import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gNotes = [
    {id:1,name:'aaaa'},
    {id:2,name:'bbbb'},
    {id:3,name:'cccc'}
]

export default {
    query,
    getById,
    addNote,
    removeNote,
    getNotes,
  }

  function query(filterBy) {
      var notes = gNotes
      if (filterBy) {
        var { name } = filterBy
        // maxPrice = maxPrice ? maxPrice : Infinity
        // minPrice = minPrice ? minPrice : 0
        notes = gNotes.filter(note => note.name.toLowerCase().includes(name.toLowerCase()))
        //   && (book.listPrice.amount < maxPrice)
        //   && book.listPrice.amount > minPrice)
      }
      return Promise.resolve(notes)

  } 

  function getById() {

  }

  function addNote(note) {
    const noteId = utilService.makeId(4)
    const noteToAdd = {...note,id:noteId}
   // review.id = reviewId
    // const book = gBooks.find(book => book.id === bookId)
    // if (!book.reviews) {
    //   book.reviews = []
    // }
    gNotes.push(noteToAdd)
   //save()
    return Promise.resolve(note)
  }

  function removeNote(noteId) {
    const noteIdxToRemove = gNotes.findIndex(note => note.id == noteId)
    gNotes.splice(noteIdxToRemove, 1)
    //save()
    return Promise.resolve();
  }

  function getNotes() {

  }