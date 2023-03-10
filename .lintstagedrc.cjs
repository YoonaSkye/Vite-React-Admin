module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less,styl}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
