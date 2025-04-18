const POSTING_KEY = "JOB_SUB_SUCCESS";
export const getPostingSubmitSuccess = () => {
    return "true" === sessionStorage.getItem(POSTING_KEY);
};
export const setPostingSubmitSuccess = () => {
    sessionStorage.setItem(POSTING_KEY, String(true));
};
export const removePostingSubmitSuccess = () => {
    sessionStorage.removeItem(POSTING_KEY);
};
