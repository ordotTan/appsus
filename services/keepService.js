import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gDefaultNotes = [
    { id: 1, type: 'NoteTxt', info: { txt: 'aaaa' } },
    { id: 2, type: 'NoteTodos', info: { label: 'my todos', todos: [{ id: 'fdsfsd', txt: 'do this', doneAt: null }] } },
    { id: 3, type: 'NoteTxt', info: { txt: 'cccc' } },
]

var gNotes = null

export default {
    query,
    getById,
    addNote,
    removeNote,
    getNotes,
    // addNote,
}

function save() {
    storageService.store(NOTES_KEY, gNotes)
}

function query(filterBy) {
    var notes = gNotes
    if (filterBy) {
        // console.log(filterBy)
        var { name } = filterBy

        // maxPrice = maxPrice ? maxPrice : Infinity
        // minPrice = minPrice ? minPrice : 0
        let searchFor
        notes = gNotes.filter(note => {
            if (note.type === "NoteTxt") searchFor = note.info.txt
            else if (note.type === "NoteTodos") searchFor = note.info.label
            return(searchFor.toLowerCase().includes(name.toLowerCase()))
        }) 
    }

    return Promise.resolve(notes)

}

function getById(noteId) {
    return Promise.resolve(gBooks.find(note => note.id === noteId))
}

// {id: 3, type:'NoteText', info: {txt:'cccc'}},

function addNote(info, type) {
    const id = utilService.makeId(4)
    const noteToAdd = { id, type, info }
    // review.id = reviewId
    // const book = gBooks.find(book => book.id === bookId)
    // if (!book.reviews) {
    //   book.reviews = []
    // }
    gNotes.push(noteToAdd)
    save()
    return Promise.resolve(noteToAdd)
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