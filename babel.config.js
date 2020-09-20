module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env', "@babel/preset-react"],
  plugins: [
    ['styled-components', {ssr: true}],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
