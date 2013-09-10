var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/test\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

tests.push('base/bower_components/underscore/underscore.js');

requirejs.config({
    baseUrl: 'base/script/app/',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});