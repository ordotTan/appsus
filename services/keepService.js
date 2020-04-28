import utilService from './utilService.js'
import storageService from './storageService.js'

var gNotes = null
const NOTES_KEY = 'notes'

var gDefaultNotes = [
    { id: 1, type: 'NoteTxt', isPinned: true, info: { txt: 'I ❤️ React' }, style: { backgroundColor: "lightgoldenrodyellow", color: 'black' } },
    { id: 2, type: 'NoteTodos', isPinned: false, info: { label: 'Shopping List', todos: [{ id: 'fdsfsd', txt: 'Milk', doneAt: null },{ id: 'asasd', txt: 'Bread', doneAt: null }] }, style: { backgroundColor: "#AFAC99", color: 'black' } },
    { id: 3, type: 'NoteTxt', isPinned: false, info: { txt: 'Need to sleep more!' }, style: { backgroundColor: "lightgoldenrodyellow", color: 'black' } },
    { id: 4, type: 'NoteImg', isPinned: false, info: { url: 'https://www.liberaldictionary.com/wp-content/uploads/2019/02/icon-0326.jpg', title: "Spaceship" }, style: { backgroundColor: "#AFAC99",color: 'black'  } },
    { id: 5, type: 'NoteVideo', isPinned: false, info: { url: 'https://www.youtube.com/watch?v=9QiE-M1LrZk', title: "Cool Video" }, style: { backgroundColor: "#AFAC99",color: 'black'  } },

]

var gNotes = null

export default {
    query,
    getById,
    add,
    remove,
    updatePinStatus,
    updateBackgroundColor,
    updateFontColor,
}

function updateFontColor(noteId, value) {
    const noteIdxToUpdtae = gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].style.color = value
    _save()
    return Promise.resolve();
}

function updateBackgroundColor(noteId, value) {
    const noteIdxToUpdtae = gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].style.backgroundColor = value
    _save()
    return Promise.resolve();
}

function updatePinStatus(noteId) {
    const noteIdxToUpdtae = gNotes.findIndex(note => note.id == noteId)
    gNotes[noteIdxToUpdtae].isPinned = !gNotes[noteIdxToUpdtae].isPinned
    _save()
    return Promise.resolve();
}

function _save() {
    storageService.store(NOTES_KEY, gNotes)
}

function query(filterBy) {
    if (!filterBy) return Promise.resolve(gNotes);

    var { txt } = filterBy
    let notes = gNotes.filter(note => {
        let searchFor
        if (note.type === "NoteTxt") searchFor = note.info.txt
        else if (note.type === "NoteTodos") searchFor = note.info.label
        else if (note.type === "NoteImg" || note.type === "NoteVideo" ) searchFor = note.info.title
        return (searchFor.toLowerCase().includes(txt.toLowerCase()))
    });

    return Promise.resolve(notes)
}

function getById(noteId) {
    return Promise.resolve(gBooks.find(note => note.id === noteId))
}

function add(info, style, type) {
    let note
    if (info.id) {
        note = gNotes.find(note => note.id === info.id)
        note.info=info
        // switch (type) {
        //     case 'NoteTxt':
        //         note.info.txt = info;
        //     case 'NoteTodos':
        //         note.info = info;
        //     case 'NoteImg':
        //         note.info.title = info.title;
        //     case 'NoteVideo':
        //         note.info.title = info.title;
        // }
    }
    else {
        const id = utilService.makeId(4)
        note = { id, type, info, style }
        gNotes.push(note)
    }
    _save()
    return Promise.resolve(note)
}

function remove(noteId) {
    const noteIdxToRemove = gNotes.findIndex(note => note.id == noteId)
    gNotes.splice(noteIdxToRemove, 1)
    _save()
    return Promise.resolve();
}

//Creating some default notes:
_createNotes()

function _createNotes() {
    gNotes = storageService.load(NOTES_KEY, gDefaultNotes)
    storageService.store(NOTES_KEY, gNotes)
}