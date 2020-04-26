import utilService from './utilService.js'
import storageService from './storageService.js'

const STORAGE_KEY = 'stored-emails-db'
const G_USER = 'Daniel Goldfine'

var gInitialEmails = [
    {
        id : utilService.makeId(4),
        location: 'inbox',
        from: 'Tom Morello',
        to : G_USER,
        subject : 'Check out my new song',
        body : 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        sentAt: 1587911856459
    },
    {
        id : utilService.makeId(4),
        location: 'inbox',
        from: 'Brandon Novak',
        to : G_USER,
        subject : 'My new book is out',
        body : 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: true,
        sentAt: 1576911144174
    },
    {
        id : utilService.makeId(4),
        location: 'inbox',
        from: 'Adi Horvits',
        to : G_USER,
        subject : 'Lease to sign',
        body : 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: true,
        sentAt: 1499921144171
    },
    {
        id : utilService.makeId(4),
        location: 'inbox',
        from: 'Bobby Fillangie',
        to : G_USER,
        subject : 'Message from the future',
        body : 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        sentAt: 2919671164771
    },
];

export default {
    query,
    getById,
    findemailIndex,
    sendemail,
    getemail,
    deleteMail
}


function query(locationFilter, txtFilter, isReadFilter) {

    const storedEmails = storageService.load(STORAGE_KEY);

    if (!storedEmails) {
        storageService.store(STORAGE_KEY, gInitialEmails)
        return Promise.resolve(gInitialEmails);
    }

    let emails = storedEmails;

    if (locationFilter) {
        const filteredByLocation = emails.filter(email => email.location === locationFilter);
        emails = filteredByLocation;
    };
    if (txtFilter) {
        // const filteredByTxt = emails.filter(email => email.subject === txtFilter || email.body === txtFilter || email.adress === txtFilter);
        const filteredByTxt = emails.filter(email => (email.subject || email.body || email.to || email.from) === txtFilter);
        emails = filteredByTxt;
    };
    if(isReadFilter) {
        let filterVal = (read) ? true : false;
        filteredByIsRead = emails.filter(email => email.isRead === filterVal);
        emails = filteredByIsRead;
    }
    return Promise.resolve(emails);
};

function getById(emailId) {
    const emails = storageService.load(STORAGE_KEY);
    const foundemail = emails.find(email => email.id === emailId);
    return Promise.resolve(foundemail);
};

function findemailIndex(emailId) {
    const emails = storageService.load(STORAGE_KEY);
    const emailIdx = emails.findIndex(email => email.id === emailId);
    return emailIdx;
};

function sendemail(from, to, subject, body) {
    let newemail = {
        id : utilService.makeId(4),
        location: 'sent',
        from,
        to,
        subject,
        body,
        isRead: false,
        sentAt: Date.now()
    }
    let emails = storageService.load(STORAGE_KEY);
    emails.unshift(newemail);
    storageService.store(STORAGE_KEY, emails);
    // getemail(newemail)
}

function deleteMail(mailId) {
    const mailIndex = findemailIndex(mailId);
    let emails = storageService.load(STORAGE_KEY);
    emails.splice(mailIndex, 1);
    storageService.store(STORAGE_KEY, emails);
}

function getemail(incomingemail) {
    
    incomingemail.location = 'inbox';
    incomingemail.id = utilService.makeId(4);
    let emails = storageService.load(STORAGE_KEY);
    emails.unshift(incomingemail);
    storageService.store(STORAGE_KEY, incomingemail);
}