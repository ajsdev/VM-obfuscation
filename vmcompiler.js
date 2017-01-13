function sprintf(string) {
    var args = arguments;

    var str = [];
    for (var i = 0; i < args.length; ++i) str.push(i.toString())

    var pattern = new RegExp("%([" + str.join("|") + "])", "g");
    return (string + "").replace(pattern, function (match, index) {
        return args[index];
    });
}

function generateVar() {
    var text = "_";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
var used = [];

var getRandom = function () {
    var random = Math.floor(Math.random() * 1000)
    if (used.indexOf(random) != -1) return getRandom();
    used.push(random);
    return random;
}
var MEMORY = generateVar();
var CODE = generateVar();
var COUNTER = generateVar();
var OUT = generateVar();

// set string

var set_string_code = getRandom();
var set_string = sprintf("case %1:%2[%3[%4++]]=decryptString();break;", set_string_code, MEMORY, CODE, COUNTER);

// set int

var set_int_code = getRandom();
var set_int = sprintf("case %1:%2[%3[&4++]]=%3[%4++];break;", set_int_code, MEMORY, CODE, COUNTER);

// set array
var set_array_code = getRandom();
var set_array = sprintf("case %1:%2[%3[&4++]]=[];break;", set_array_code, MEMORY, CODE, COUNTER);

// set object
var set_object_code = getRandom();
var set_object = sprintf("case %1:%2[%3[&4++]]={};break;", set_object_code, MEMORY, CODE, COUNTER);

// addition

var addition_code = getRandom();
var addition = sprintf("case %1:%2[%3[%4++]]=%2[%3[%4++]]+%2[%3[%4++]];break;", addition_code, MEMORY, CODE, COUNTER);

// subtraction

var subtraction_code = getRandom();
var subtraction = sprintf("case %1:%2[%3[%4++]]=%2[%3[%4++]]-%2[%3[%4++]];break;", subtraction_code, MEMORY, CODE, COUNTER);

// multiplication
var multiplication_code = getRandom();
var multiplication = sprintf("case %1:%2[%3[%4++]]=%2[%3[%4++]]*%2[%3[%4++]];break;", multiplication_code, MEMORY, CODE, COUNTER);

// division
var division_code = getRandom();
var division = sprintf("case %1:%2[%3[%4++]]=%2[%3[%4++]]/%2[%3[%4++]];break;", division_code, MEMORY, CODE, COUNTER);

// compare
var compare_code = getRandom();
var compare = sprintf("case %1: var code=%3[%4++],a=MEMORY[CODE[COUNTER++]],b=%2[%3[%4++]],fal=%3[%4++],value=false;switch (code) {case 0: value = a == b;break;case 1: value = a > b; break;case 2: value = a >= b;break;case 3: value = a < b;break;case 4: value = a <= b;break;}if (!value) COUNTER = fal;", compare_code, MEMORY, CODE, COUNTER)

// goto
var goto_code = getRandom();
var goto = sprintf("case %1: %2=%3[%2++]; break;", goto_code, COUNTER, CODE);

// log
var log_code = getRandom();
var goto = sprintf("case %1: console.log(decryptStringComp(%2[%3[%4++]])); break;", log_code, MEMORY, CODE, COUNTER);

// int to string
var intstring_code = getRandom();
var intstring = sprintf("case %1: var i=%2[%3[%4++]].toString(),s=[],j;for(j=0;j<i.length;++j) s.push(i.charCodeAt(j));%2[%3[%4++]]=st;break;", intstring_code, MEMORY, CODE, COUNTER);

// string to int
var stringint_code = getRandom();
var stringint = sprintf("case %1: %2[%3[%4++]]=parseInt(%2[%3[%4++]]);break;", stringint_code, MEMORY, CODE, COUNTER)

// concat
var concat_code = getRandom()
var concat = sprintf("case %1: %2[%3[%4++]]=%2[%3[%4++]].concat(%2[%3[%4++]])");

// end

var end_code = getRandom();
var end = sprintf("case %1: stop=true;break;", end_code);

// output 
var out_code = getRandom();
var out = sprintf("case %1: %2[%4[%5++]]=%3[%4[%5++]];break;", out_code, OUT, MEMORY, CODE, COUNTER);


/*
var machine = "(function () {\
var %1 = [];\
var %2 = [];\
var %3 = 0;\
while (true) {\
    switch (CODE[COUNTER++]) {\
case 1247: // get length\
    MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]].length\
    break;\
case 1248: // slice/substr\
    MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]].slice(MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]])\ break;\
case 1249: // push\
    MEMORY[CODE[COUNTER++]].push(MEMORY[CODE[COUNTER++]]);\
    break;\
case 1250: // splice\
    MEMORY[CODE[COUNTER++]].splice(MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]], MEMORY[CODE[COUNTER++]]);\
    break;\
case 1251: // get\
    MEMORY[CODE[COUNTER++]] = MEMORY[CODE[COUNTER++]][MEMORY[CODE[COUNTER++]]];\
    break;\
case 1252: // set\
    MEMORY[CODE[COUNTER++]][MEMORY[CODE[COUNTER++]]] = MEMORY[CODE[COUNTER++]];\
    break;\

    };\

    }\

    function decryptString() {\
        var str = [];\
        while (true) {\
            var code = CODE[COUNTER++];\
            if (!code) break;\
            str.push(code);\
        }\
        return str\
    }\

    function decryptStringComp(ar) {\
        var str = [];\
        var i = 0;\
        while (true) {\

            var code = ar[i++];\

            if (!code) break;\
            str.push(String.fromCharCode(code));\
        }\
        return str.join("");\
    }\
    })()\
    "
    */