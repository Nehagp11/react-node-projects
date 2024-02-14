

class MyPromise {
    resolvedData;
    isResolved = false; 
    thenFn;
    thenChain = [];

    rejectedData;
    isRejected = false; 
    catchFn;
    catchChain = [];

    constructor(executor){
        const resolve = (value) => {
            this.resolvedData = value;
            this.isResolved = true;

            if(typeof this.thenFn == 'function'){
                this.thenFn(this.resolvedData);
            }

            if(this.thenChain.length){
                this.thenChain.reduce((acc, fn)=> { return fn(acc)}, this.resolvedData);
            }
        }

        const reject = (value) => {
            this.rejectedData = value;
            this.isRejected = true;

            if(this.catchChain.length){
                this.catchChain.reduce((acc, fn)=> { return fn(acc)}, this.rejectedData);
            }
        }

        executor(resolve, reject);
    }

    then = (fn) => {
        this.thenFn = fn;
        if(this.isResolved){
            fn(this.resolvedData);
            this.thenChain.push(fn);

            if(this.thenChain.length){
                this.thenChain.reduce((acc, fn)=> { return fn(acc)}, this.resolvedData);
            }
        }
        return this;
    }

    catch = (fn) => {
        this.catchFn = fn;
        this.catchChain.push(fn);

        if(this.isRejected && this.catchChain.length){
            this.thenChain.reduce((acc, fn)=> { return fn(acc)}, this.resolvedData);
        }
    }
}

// calling 

const promise1 = new MyPromise(function(resolve){
    setTimeout(function(){resolve(10)}, 1000);
});

promise1.then((data)=> console.log(data));

const promise2 = new MyPromise(function(resolve, reject){
    reject("Error Case")}).then((data) => alert(data)).catch((err)=> console.log(err));


    var reorganizeString = function(s) {
        var output = "";
    
        var charFreq = {}, strSize = s.length;
    
        for(let i = 0; i < strSize; i++){
            if(charFreq[s[i]]){
                charFreq[s[i]]++;
            } else {
                charFreq[s[i]] = 1;
            }
        }
    
        var charkeys = Object.keys(charFreq).sort(function(a, b){
            return charFreq[b] - charFreq[a];
        });
    
        if(charFreq[charkeys[0]] > s.length/2){
            return output;
        }
    
        while(output.length < strSize){
              for(let i = 0; i < charkeys.length; i++){
                  if(charFreq[charkeys[i]] > 0){
                    output += charkeys[i];
                    charFreq[charkeys[i]]--;
                }
            }
        }
        return output; 
    };


    console.log(reorganizeString('abbbccccdssccas'));