import utilService from './utilService.js'
import storageService from './storageService.js'

const STORAGE_KEY = 'stored-emails-db'
const G_USER = 'Daniel Goldfine'


var gInitialMsgs;


function query(locationFilter, txtFilter) {

    const storedMsgs = storageService.load(STORAGE_KEY);

    if (!storedMsgs) {
        storageService.store(STORAGE_KEY, gInitialMsgs)
        return Promise.resolve(gInitialMsgs);
    }

    msgs = storedMsgs;

    if (locationFilter) {
        const filteredByLocation = msgs.filter(msg => msg.location === locationFilter);
        msgs = filteredByLocation;
    }
    if (txtFilter) {
        // const filteredByTxt = msgs.filter(msg => msg.title === txtFilter || msg.txt === txtFilter || msg.adress === txtFilter);
        const filteredByTxt = msgs.filter(msg => (msg.title || msg.txt || msg.to || msg.from) === txtFilter);
        msgs = filteredByTxt;
    };
    return Promise.resolve(msgs);
};

function getById(msgId) {
    const msgs = storageService.load(STORAGE_KEY);
    const foundMsg = msgs.find(msg => msg.id === msgId);
    return Promise.resolve(foundMsg);
};

function findMsgIndex(msgId) {
    const msgs = storageService.load(STORAGE_KEY);
    const msgIdx = msgs.findIndex(msg => msg.id === msgId);
    return Promise.resolve(msgIdx);
};

function sendMsg(to, title, txt) {

    let newMsg = {
        location: sent,
        to,
        from: G_USER,
        title,
        txt,
        read: false,
        date: Date.now()
    }
    let msgs = storageService.load(STORAGE_KEY);
    msgs.unshift(newMsg);
    storageService.store(STORAGE_KEY, msgs);
    getMsg(newMsg)
}

function getMsg(incomingMsg) {
    
    incomingMsg.location = inbox;
    let msgs = storageService.load(STORAGE_KEY);
    msgs.unshift(incomingMsg);
    storageService.store(STORAGE_KEY, incomingMsg);
}