export const FETCH_EMOJIS_TOTAL = Symbol('fetch_emojis_total');
export const FETCH_EMOJIS_SAVE = Symbol('fetch_emojis_save');

export const fetchEmojisTotal = () => ({ type: FETCH_EMOJIS_TOTAL });
export const fetchEmojisSave = data => ({ type: FETCH_EMOJIS_SAVE, data });

export const FETCH_GITHUB_USER = Symbol('fetch_github_user');
export const FETCH_GITHUB_USER_SAVE = Symbol('fetch_github_user_SAVE');

export const fetchGithubUser = name => ({ type: FETCH_GITHUB_USER, name });
export const fetchGithubUserSave = user => ({ type: FETCH_GITHUB_USER_SAVE, data: user})
