'use strict';

class Test {

    // GOTO town :)

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.height * this.width;
    }

    sum(...nums){
        var sum = 0;
        for(let n of nums) sum += n;
        return sum;
    }

    static mult(...nums){
        var sum = 0;
        for(let n of nums) sum *= n;
        return sum;
    }

    static genPlay() {

        function* gen() {
            while (true) {
                yield* 'pooper';
                yield new Date();
            }
        }


    }

}