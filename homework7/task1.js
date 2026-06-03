function handleNum (num, onParneCb, onNeparneCb) {

   

    if (num % 2 === 0) {
        onParneCb(num);             
        }
        else {
            onNeparneCb(num);
        }           
}


function onParneCb (num) {
    console.log(`number ${num} is even`);
}

function onNeparneCb (num) {
    console.log(`number ${num} is odd`);
}           



handleNum(4, onParneCb, onNeparneCb);
handleNum(5, onParneCb, onNeparneCb);


