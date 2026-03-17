module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-cofig-typescript',
        '@vue/eslint-cofig-prettier/skip-formatting',

    ],
    parserOptions: {
        ecmaVersion: 'latest'
    }
}