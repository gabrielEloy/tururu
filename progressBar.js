const progressBar = require('progress');

function progress(timeInSeconds) {
    const bar = new progressBar(':bar', {total : timeInSeconds})
    const timer = () => setInterval(() => {
        bar.tick();
        if(bar.complete) {
            clearInterval(timer);
            process.exit();
        }
    }, 1000);
    timer();
}


module.exports = progress
