"use strict";
var L01_RandomPoem;
(function (L01_RandomPoem) {
    window.addEventListener("load", handleLoad);
    let subject = ["Mickey", "Daisy", "Donald", "Goofy", "Pluto"];
    let predicate = ["schlingt", "isst", "genießt", "verweigert", "liebt"];
    let object = ["Macaroni.", "Weckle.", "Tomatensalat.", "Pfannkuchen.", "Feta."];
    function handleLoad(_event) {
        let shortestLength = findArray(subject, predicate, object);
        for (let index = shortestLength; index > 0; index--) {
            let returnValue = getVerse(subject, predicate, object);
            console.log(returnValue);
        }
    }
    function findArray(_subject, _predicate, _object) {
        let shortestLength = _subject.length;
        if (_predicate.length < shortestLength)
            shortestLength = _predicate.length;
        if (_object.length < shortestLength)
            shortestLength = _object.length;
        return shortestLength;
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumberSubject = Math.floor(Math.random() * _subject.length);
        let randomNumberPredicate = Math.floor(Math.random() * _predicate.length);
        let randomNumberObject = Math.floor(Math.random() * _object.length);
        let randomSubject = _subject.splice(randomNumberSubject, 1);
        let randomPredicate = _predicate.splice(randomNumberPredicate, 1);
        let randomObject = _object.splice(randomNumberObject, 1);
        verse = randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0];
        return verse;
    }
})(L01_RandomPoem || (L01_RandomPoem = {}));
//# sourceMappingURL=01_RandomPoem_Code.js.map