import App from './App'

App.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${App.info.uri}`);
});