namespace L01_RandomPoem {
    
    window.addEventListener("load", handleLoad);
 
    let subject: string[] = ["Mickey", "Daisy", "Donald", "Goofy", "Pluto"];
    let predicate: string[] = ["schlingt", "isst", "genießt", "verweigert", "liebt"];
    let object: string[] = ["Macaroni.", "Weckle.", "Tomatensalat.", "Pfannkuchen.", "Feta."];

    function handleLoad(_event: Event): void {
        
        let shortestLength: number = findArray(subject, predicate, object);
        
        for (let index: number = shortestLength; index > 0; index--) {
            let returnValue: string = getVerse(subject, predicate, object);
            console.log(returnValue);
        }
    }

    function findArray(_subject: string[], _predicate: string[], _object: string[]): number {
        let shortestLength: number = _subject.length;
        if (_predicate.length < shortestLength)
            shortestLength = _predicate.length;
        if (_object.length < shortestLength)
            shortestLength = _object.length;        
        return shortestLength;
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let verse: string = "";
        
        let randomNumberSubject: number = Math.floor(Math.random() * _subject.length);
        let randomNumberPredicate: number = Math.floor(Math.random() * _predicate.length);
        let randomNumberObject: number = Math.floor(Math.random() * _object.length);
        
        let randomSubject: string[] = _subject.splice(randomNumberSubject, 1);
        let randomPredicate: string[] = _predicate.splice(randomNumberPredicate, 1);
        let randomObject: string[] = _object.splice(randomNumberObject, 1);

        verse = randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0];
        return verse;
    }

}