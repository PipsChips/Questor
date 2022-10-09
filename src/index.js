import fullpage from 'fullpage.js';

console.log('start')

var fullPageInstance = new fullpage('#fullpage1', {
	licenseKey: 'gplv3',
    navigation: true,
    sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});

console.log('after init')