import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gDefaultNotes = [
    { id: 1, type: 'NoteTxt', info: { txt: 'aaaa' } },
    { id: 2, type: 'NoteTodos', info: { label: 'my todos', todos: [{ id: 'fdsfsd', txt: 'do this', doneAt: null }] } },
    { id: 3, type: 'NoteTxt', info: { txt: 'cccc' } },
    { id: 4, type: 'NoteImg', info: { url: 'cccc', title: "hello" } },
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
            return (searchFor.toLowerCase().includes(name.toLowerCase()))
        })
    }

    return Promise.resolve(notes)

}

function getById(noteId) {
    return Promise.resolve(gBooks.find(note => note.id === noteId))
}


function addNote(info, type) {
    let note
    if (!info.id) {
        const id = utilService.makeId(4)
        note = { id, type, info }
        gNotes.push(note)
    } else {
        note = gNotes.find(note => note.id === info.id)
        switch (type) {
            case 'NoteTxt':
                note.info.txt = info.txt;
            case 'NoteTodos':
                note.info.label = info.label;
        }
    }

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