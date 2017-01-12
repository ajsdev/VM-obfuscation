(function () {

    var MEMORY = [];
    var CODE = [];


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
            var code = CODE[COUNTER++];
            var a = MEMORY[CODE[COUNTER++]];
            var b = MEMORY[CODE[COUNTER++]];
            var fal = CODE[COUNTER++];

            var value = false;
            switch (code) {
            case 0: // equal to
                value = a == b
                break;
            case 1: // bigger than
                value = a > b
                break;
            case 2: // bigger than or equal
                value = a >= b
                break;
            case 3: // smaller than
                value = a < b
                break;
            case 4: // smaller than or equal
                value = a <= b
                break;
            }

            if (!value) COUNTER = fal;
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
        case 1252: // set
            MEMORY[CODE[COUNTER++]][MEMORY[CODE[COUNTER++]]] = MEMORY[CODE[COUNTER++]];
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