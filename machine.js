(function () {

    var MEMORY = [];
    var CODE = [];


    var COUNTER = 0;
    while (true) {
        switch (CODE[COUNTER++]) { // in reality, these codes would be random
        case 1233: // allocate memory STRING
            MEMORY[CODE[COUNTER++]] = decryptString();
            break;

        case 1234: // allocate memory INT
            MEMORY[CODE[COUNTER++]] = CODE[COUNTER++];

            break;

        case 1235: // allocate memory ARRAY
            MEMORY[CODE[COUNTER++]] = [];
            break;
        case 1236: // allocate memory OBJECT
            MEMORY[CODE[COUNTER++]] = {};
            break;
        case 1237: // Addition
            MEMORY[CODE[COUNTER++]] += CODE[COUNTER++];

            break;
        case 1238: // subtraction
            MEMORY[CODE[COUNTER++]] -= CODE[COUNTER++];
            break;
        case 1239: // multiplication
            MEMORY[CODE[COUNTER++]] *= CODE[COUNTER++];
            break;
        case 1240: // division
            MEMORY[CODE[COUNTER++]] *= CODE[COUNTER++];
            break;
        case 1241: // compare: 

            break;
        case 1242: // goto:
            COUNTER = CODE[COUNTER++];
            break;
        case 1243: // external func

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

})()