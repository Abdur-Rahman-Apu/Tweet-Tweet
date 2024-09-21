const isEmoji = (str) => /\p{Emoji}/u.test(str);

export { isEmoji };
