let tuner = {
    frequency: 440,
}
undefined
tuner = {
    frequency: 440,
    amplitude: .5
};
Object {frequency: 440, amplitude: 0.5}
let note = Object.create(tuner);
undefined
note
Object {}__proto__: Objectamplitude: 0.5frequency: 440__proto__: Object
note.frequency = note.frequency * 2;
880
typeof tuner
"object"
typeof note
"object"
note
Object {frequency: 880}frequency: 880__proto__: Objectamplitude: 0.5frequency: 440__proto__: Objectconstructor: function Object()hasOwnProperty: function hasOwnProperty()isPrototypeOf: function isPrototypeOf()propertyIsEnumerable: function propertyIsEnumerable()toLocaleString: function toLocaleString()toString: function toString()valueOf: function valueOf()__defineGetter__: function __defineGetter__()__defineSetter__: function __defineSetter__()__lookupGetter__: function __lookupGetter__()__lookupSetter__: function __lookupSetter__()get __proto__: function __proto__()set __proto__: function __proto__()
tuner
Object {frequency: 440, amplitude: 0.5}
34.toString()
VM1545:1 Uncaught SyntaxError: Invalid or unexpected token
let number = 34; number.toString()
"34"
let makeTuner = function (spec) {
    let tuner = {
       frequency: spec.frequency,
    };
};
undefined
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

    return Object.freeze({
        getFrequency: getFrequency
    });
};
function (spec = {
    frequency: 440,
    amplitude: .5    
}) {
    let tuner = {
       frequency: spec.frequency,
       amplitude: spec.amplitude
    };

    function getFrequency() {
        return tune…
let ourTuner = makeTuner();
undefined
ourTuner
Object {getFrequency: function}
ourTuner.getFrequency();
440
let anotherTuenr = makeTuner({frequency: 990});
undefined
anotherTuener.getFrequency():
VM2553:1 Uncaught SyntaxError: Unexpected token :
anotherTuener.getFrequency();
VM2563:1 Uncaught ReferenceError: anotherTuener is not defined
    at <anonymous>:1:1
(anonymous) @ VM2563:1
anotherTuenr.getFrequency();
990
