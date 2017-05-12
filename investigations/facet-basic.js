let tuner = {
    frequency: 440,
    amplitude: .5
};

let note = Object.create(tuner); // ES5 Object.create()
note.frequency = 880;

let number = 34; number.toString()

makeTuner = function (spec = {
    frequency: 440,
    amplitude: .5    
}) {
    let tuner = {
       frequency: spec.frequency,
       amplitude: spec.amplitude
    };

    function getFrequency() {
        return tuner.frequency;
    }

    return Object.freeze({ // freeze freezes everything except nested array
        getFrequency: getFrequency
    });
};

let ourTuner = makeTuner();
console.log(ourTuner.getFrequency());
let anotherTuner = makeTuner({frequency: 990});
console.log(anotherTuner);
