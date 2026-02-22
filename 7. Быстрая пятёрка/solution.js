module.exports = function winners(wait, pushResult, STREET_RACERS, N) {
    const bestRacers = [];
    const waitRacer = (racer, checkpoint, racersChecks) => {
        wait(racer, checkpoint, (message) => {
            if(message === "connection lost") {
                waitRacer(racer, checkpoint, racersChecks);
                return;
            }
            
            if(!message) {
                if(racersChecks.length === checkpoint-1 || racersChecks.length === 0) { //отсутствие пропусков
                    if(checkpoint === N) {
                        bestRacers.push(racer);
                        if(bestRacers.length === 3) pushResult(bestRacers);
                    } else {
                        racersChecks.push(checkpoint);
                        waitRacer(racer, checkpoint+1, racersChecks);
                    }
                }
            }
            return;
        })
    }

    STREET_RACERS.forEach((racer) => {
        const racerChecks = [];
        waitRacer(racer, 1, racerChecks);
    })
};