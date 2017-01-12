(function () {
    /* Simple test
        
        var a = 10
        var b = 20
       console.log(a/b);
       
       
       This turns into
       
       allocate 1 = 10
       allocate 2 = 20
       divide 1 by 2 store in 3
       inttostring 3 store in 3
       log 3
       end
       
       turns into
       
       1234 0 10 // allocate 0 as 10
       1234 1 20 // allocate 1 as 20
       1240 2 0 1 // divide 0 by 1 store in 2
       1244 2 2 //  inttostring 2 store in 2
       1243 2 // log 3
       1245 // end
        */
    var MEMORY = [];
    var CODE = [1234, 0, 10, 1234, 1, 20, 1240, 2, 0, 1, 1244, 2, 2, 1243, 2, 1245];


    var COUNTER = 0;
    while (true) {
        switch (CODE[COUNTER++]) { // in reality, these codes would be random
        case 1233: // allocate/set memory STRING
            MEMORY[CODE[COUNTER++]] = decryptString();
            break;

        case 1234: // allocate memory/set INT
            MEMORY[CODE[COUNTER++]] = CODE[COUNTER++];

            break;

        case 1235: // allocate memory/set ARRAY
            MEMORY[CODE[COUNTER++]] = [];
            break;
        case 1236: // allocate memory/set OBJECT
            MEMORY[CODE[COUNTER++]] = {};
            break;
        case 1237: // Addition
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]] + MEMORY[CODE[COUNTER++]];

            break;
        case 1238: // subtraction
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]] - MEMORY[CODE[COUNTER++]];
            break;
        case 1239: // multiplication
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]] * MEMORY[CODE[COUNTER++]];
            break;
        case 1240: // division
            var r = MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]] / MEMORY[CODE[COUNTER++]];

            break;
        case 1241: // compare: 

            break;
        case 1242: // goto:
            COUNTER = CODE[COUNTER++];
            break;
        case 1243: // console.log
            console.log(decryptStringComp(MEMORY[CODE[COUNTER++]]));
            break;
        case 1244: // IntToString
            var integ = MEMORY[CODE[COUNTER++]].toString();
            var st = [];
            for (var i = 0; i < integ.length; ++i) {
                st.push(integ.charCodeAt(i));
            }

            MEMORY[CODE[COUNTER++]] = st;
            break;
        case 1245: // end

            return;
            break;
        case 1246: // concat string/array
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]].concat(MEMORY[CODE[COUNTER++]])

            break;
        case 1247: // get length
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]].length
            break;
        case 1248: // slice/substr
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]].slice(MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]])
            break;
        case 1249: // push
            MEMORY[CODE[COUNTER++]].push(MEMORY[CODE[COUNTER++]]);
            break;
        case 1250: // splice
            MEMORY[CODE[COUNTER++]].splice(MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]]);
            break;
        case 1251: // get
            MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]][MEMORY[CODE[COUNTER++]]];
            break;
        };

    }

    function decryptString() {
        var str = [];
        while (true) {

            var code = CODE[COUNTER++];
            if (!code) break;
            str.push(code);
        }
        return str
    }

    function decryptStringComp(ar) {
        var str = [];
        var i = 0;
        while (true) {

            var code = ar[i++];

            if (!code) break;
            str.push(String.fromCharCode(code));
        }

        return str.join("")
    }

})()