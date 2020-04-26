import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gDefaultNotes = [
    { id: 1, name: 'aaaa' },
    { id: 2, name: 'bbbb' },
    { id: 3, name: 'cccc' }
]

var gNotes = null

export default {
    query,
    getById,
    addNote,
    removeNote,
    getNotes
}

function save() {
    storageService.store(NOTES_KEY, gNotes)
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

function getById(noteId) {
    return Promise.resolve(gBooks.find(note => note.id === noteId))
}

function addNote(note) {
    const noteId = utilService.makeId(4)
    const noteToAdd = { ...note, id: noteId }
    // review.id = reviewId
    // const book = gBooks.find(book => book.id === bookId)
    // if (!book.reviews) {
    //   book.reviews = []
    // }
    gNotes.push(noteToAdd)
    save()
    return Promise.resolve(note)
}

function removeNote(noteId) {
    const noteIdxToRemove = gNotes.findIndex(note => note.id == noteId)
    gNotes.splice(noteIdxToRemove, 1)
    save()
    return Promise.resolve();
}

function getNotes() {
    return Promise.resolve(gNotes)
}


//Creating some default notes:
_createNotes()

function _createNotes() {
    gNotes = storageService.load(NOTES_KEY, gDefaultNotes)
    storageService.store(NOTES_KEY, gNotes)
}