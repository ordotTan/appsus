//todo - switch to usigin consts
// export const EVENT_FILTER_EMAILS_TEXT = 'filter-email-by-text'
// export const EVENT_FILTER_EMAILS_STATUS = 'filter-email-by-status'
// export const EVENT_FILTER_NOTES = 'filter-keep-by-text'
// export const EVENT_FILTER_BOOKS = 'filter-books'
// export const EVENT_USER_MSG = 'user-msg'
// export const EVENT_ADD_BOOK_MSG = 'show-added-book-msg'
// export const EVENT_SET_NAV_STATE = 'set-nav-state'
export default  {on, emit}

function on(eventName, listener) {
    const callListener = ({ detail }) => {
        listener(detail);
    };
    window.addEventListener(eventName, callListener)
    return () => {
        window.removeEventListener(eventName, callListener);
    };
};

function emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
};


