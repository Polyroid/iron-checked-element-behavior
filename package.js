Package.describe({
    name: 'polyroid:iron-checked-element-behavior',
    version: '1.0.2',
    summary: 'Implements an element that has a checked attribute and can be added to a form',
    git: 'https://github.com/Polyroid/iron-checked-element-behavior.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:iron-validatable-behavior@1.0.0',
        'polyroid:iron-form-element-behavior@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-checked-element-behavior.html'
    ], 'client');
});
