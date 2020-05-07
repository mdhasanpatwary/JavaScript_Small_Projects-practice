
const timeNode = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNode
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':')
        //mins, secs string to number
        .map(parseFloat)
        // .map(function(str) {
        //     return parseFloat(str)
        // })
        return (mins * 60) + secs;
    })
    //All Videos Total Seconds
    .reduce((total, vidSeconds) => total + vidSeconds);

    //take the hours
    let secondsLeft = seconds; //total video seconds
    const hours = Math.floor(secondsLeft / 3600);//because 3600 Seconds = 1Hour

    //take the mins
    secondsLeft = secondsLeft % 3600; //take the next number of hours
    const mins = Math.floor(secondsLeft / 60);

    //take the seconds
    secondsLeft = secondsLeft % 60; //take the next number of mins


    console.log(`${hours} Hours ${mins} Minutes ${secondsLeft} Seconds`);


//console.log(seconds)