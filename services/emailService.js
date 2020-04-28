import utilService from './utilService.js'
import storageService from './storageService.js'

const STORAGE_KEY = 'stored-emails-db'
const G_USER = 'Daniel Goldfine'

var gInitialEmails = [
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Tom Morello',
        to: G_USER,
        subject: 'Check out my new song',
        body: 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        sentAt: 1587911856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Brandon Novak',
        to: G_USER,
        subject: 'My new book is out',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isRead: true,
        sentAt: 1576911144174
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Adi Horvits',
        to: G_USER,
        subject: 'Lease to sign',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        isRead: true,
        sentAt: 1499921144171
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Bobby Fillangie',
        to: G_USER,
        subject: 'Message from the future',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        isRead: false,
        sentAt: 2919671164771
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Edward Teach',
        to: G_USER,
        subject: 'I found it!',
        body: 'Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: true,
        sentAt: 1486619856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Harry Potter',
        to: G_USER,
        subject: 'This app is magical',
        body: 'feugiat vivamus at augue eget arcu dictum varius. Id nibh tortor id aliquet lectus proin. Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        sentAt: 1582119856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Dr. Heisenberg',
        to: G_USER,
        subject: 'A new batch has arrived!',
        body: 'Morbi leo urna molestie at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Id nibh tortor id aliquet lectus proin. Quam pellentesque nec nam aliquam sem et. Sit amet cursus sit amet. Purus non enim praesent elementum facilisis leo vel fringilla. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.',
        isRead: false,
        sentAt: 1572119856459
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'eBay',
        to: G_USER,
        subject: 'Monday is the deals day!',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        isRead: false,
        sentAt: 1581112856359
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'GitHub',
        to: G_USER,
        subject: 'Welcome to GitHub, @DanielGoldfine!',
        body: 'You’re the newest member in this community of over 36 million people who use GitHub to host and review code, manage projects, and build software.',
        isRead: true,
        sentAt: 1589112856359
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Dropbox',
        to: G_USER,
        subject: 'Nevo and 41 others made changes in your shared folders',
        body: 'Here’s what happened in your shared folders last week.',
        isRead: false,
        sentAt: 1588022122810
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'Wolt',
        to: G_USER,
        subject: 'Purchase receipt: Gueta 22.03.2020',
        body: 'Order confirmation #8675',
        isRead: true,
        sentAt: 1584872112810
    },
    {
        id: utilService.makeId(4),
        location: 'inbox',
        from: 'service@paypal.co.il',
        to: G_USER,
        subject: 'Receipt for Your Payment to Spotify Finance Limited',
        body: 'You sent a payment of ₪19.90 ILS to Spotify Finance Limited. It may take a few moments for this transaction to appear in your account.',
        isRead: false,
        sentAt: 1583874112210
    },
];

let gEmails = _InitEmails()

export default {
    query,
    getById,
    sendEmail,
    deleteMail,
    toggleEmailStatus,
    getUnreadCount,
    openEmail
};

function _InitEmails() {

    const storedEmails = storageService.load(STORAGE_KEY);

    if (!storedEmails) {
        storageService.store(STORAGE_KEY, gInitialEmails)
        return gInitialEmails;
    };
    return storedEmails;
}


function query(filter, sort) {

    let emails = gEmails;

    if (filter.txt) {
        const filteredByTxt = emails.filter(email => email.subject.toLowerCase().includes(filter.txt.toLowerCase())
            || email.from.toLowerCase().includes(filter.txt.toLowerCase()) || email.body.toLowerCase().includes(filter.txt.toLowerCase())
        );
        emails = filteredByTxt;
    };
    if (filter.status) {
        const isRead = (filter.status === 'read') ? true : false;
        const filteredByStatus = emails.filter(email => email.isRead === isRead)
        emails = filteredByStatus;
    };

    emails = _sortEmails(emails, sort);

    return Promise.resolve(emails);
};

function _sortEmails(emails, sort) {
    if (sort.sortBy === 'date') {
        emails.sort((email1, email2) => {
            if (email1.sentAt > email2.sentAt) return 1;
            else if (email1.sentAt < email2.sentAt) return -1;
            else return 0;
        });
        if (sort.order) emails.reverse();
        return emails;
    } else {
        emails.sort((email1, email2) => {
            if (email1[sort.sortBy].toLowerCase() > email2[sort.sortBy].toLowerCase()) return 1;
            else if (email1[sort.sortBy].toLowerCase() < email2[sort.sortBy].toLowerCase()) return -1;
            else return 0;
        });
        if (!sort.order) emails.reverse();
        return emails;
    };
};

function getById(emailId) {
    const foundemail = gEmails.find(email => email.id === emailId);
    return Promise.resolve(foundemail);
};

function _getEmailIndex(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId);
    return emailIdx;
};

function sendEmail(to, subject, body) {
    // simulating real world issues
    if (Math.random() > 0.95) return Promise.reject();
    let newemail = {
        id: utilService.makeId(4),
        location: 'sent',
        from: G_USER,
        to,
        subject,
        body,
        isRead: false,
        sentAt: Date.now()
    };
    gEmails.unshift(newemail);
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve(newemail);
};

function openEmail(emailId) {
    const emailIdx = _getEmailIndex(emailId);
    gEmails[emailIdx].isRead = true;
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function deleteMail(mailId) {
    const mailIndex = _getEmailIndex(mailId);
    gEmails.splice(mailIndex, 1);
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function toggleEmailStatus(emailId) {
    const emailIdx = _getEmailIndex(emailId);
    const prevStatus = gEmails[emailIdx].isRead;
    gEmails[emailIdx].isRead = !prevStatus;
    storageService.store(STORAGE_KEY, gEmails);
    return Promise.resolve();
};

function getUnreadCount() {

    let unreadCount = 0;

    gEmails.forEach(email => {
        if (!email.isRead) unreadCount++;
    })
    return Promise.resolve(unreadCount);
};

// function getemail(incomingemail) {

//     incomingemail.location = 'inbox';
//     incomingemail.id = utilService.makeId(4);
//     let emails = storageService.load(STORAGE_KEY);
//     emails.unshift(incomingemail);
//     storageService.store(STORAGE_KEY, incomingemail);
// };