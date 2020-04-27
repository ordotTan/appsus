import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gDefaultNotes = [
    { id: 1, type: 'NoteTxt', isPinned: true, info: { txt: 'aaaa' },style: { backgroundColor: "#FFFFFF",color:'blue'}},
    { id: 2, type: 'NoteTodos', isPinned: false, info: { label: 'my todos', todos: [{ id: 'fdsfsd', txt: 'do this', doneAt: null }] },style: { backgroundColor: "#FFFFFF",color:'black'}},
    { id: 3, type: 'NoteTxt', isPinned: false, info: { txt: 'cccc' },style: { backgroundColor: "#845EC2",color:'red'} },
    // { id: 4, type: 'NoteImg', isPinned: false, info: { url: 'https://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg', title: "hello" },style: { backgroundColor: "#FFFFFF"} },
]

var gNotes = null

export default {
    query,
    getById,
    addNote,
    removeNote,
    getNotes,
    updatePinStatus,
    updateBackgroundColor,
    updateFontColor,
}

function updateFontColor(noteId,value) {
    const noteIdxToUpdtae= gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].style.color = value 
    save()
    return Promise.resolve();
}

function updateBackgroundColor(noteId,value) {
    const noteIdxToUpdtae= gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].style.backgroundColor = value 
    save()
    return Promise.resolve();
}

function updatePinStatus(noteId) {
    const noteIdxToUpdtae= gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].isPinned = !gNotes[noteIdxToUpdtae].isPinned 
    save()
    return Promise.resolve();
}

function save() {
    storageService.store(NOTES_KEY, gNotes)
}

function query(filterBy) {
    // debugger
    console.log('keep query got', filterBy)
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


function addNote(info,style, type) {
    let note
    if (!info.id) {
        const id = utilService.makeId(4)
        note = { id, type, info,style }
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