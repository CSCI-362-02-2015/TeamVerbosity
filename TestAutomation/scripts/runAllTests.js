// file system object - used for reading and writing files
var fs = require('fs');
// JSON object to hold testCases results
var resultsObject = new Object();
// npm module used for opening HTML output after testing is done
var open = require('open')

// runs a test case based off the given JSON object
// sets inputs into test case
// executes test case and accepts return value
// uses return value to generate <tr> (table row) HTML object
function runTestCase(object){
    var path = '../testCasesExecutables/' + object.filename;
    var testCase = require(path);
    var result = testCase.test(object.inputs);
    resultsObject[object.number] = createHTMLResultTable(object.number, object.requirement, object.component, object.method, object.inputs, object.outcomes, result)
    if(Object.keys(resultsObject).length === 25){
        writeToHTMLFile();
    }
}

function readFileToJson(testCase){
    var path = 'testCases/' + testCase;
    var obj = JSON.parse(fs.readFileSync(path, 'utf8'));
	return obj
}

// createHTMLResultTable()
// Accepts test case oracle info as parameters
// Also accepts the outcome of the test case
// Returns a <tr> (table row) html object with the test case information
function createHTMLResultTable(number, requirement, component, method, inputs, expectedOutcome, actualOutcome){
    var result = "";
    if(expectedOutcome === actualOutcome){ result = "<font color='green'> Passed </font>"; }
    else{ result = "<font color='red'> Failed </font>"; }
    var string = "<tr> <td>" + number + "</td> <td>" + result + "</td> <td>" + requirement + "</td> <td>" + component + "</td> <td>" + method + "</td> <td>" + inputs + "</td> <td>" + expectedOutcome + "</td> <td>" + actualOutcome + "</td> </tr>";
    return string;
}

// writeToHTMLFile()
// called once all test cases have been executed
// generates an html string that displays a table with the results from the test cases
// writes the html string to /TestAutomation/temp/temp.html
function writeToHTMLFile(){
    var start = "<html><head><style> table, th, td { border: 1px solid black; border-collapse: collapse; } th, td { padding: 5px; text-align: left; } </style> </head><body><table style='width:100%'><tr> <th> Number </th> <th> Result </th> <th> Requirement </th> <th> Component </th> <th> Method </th> <th> Inputs </th> <th> Expected Outcome </th> <th> Actual Outcome </th> </tr>"
    var end = "</table></body></html>"
    var middle = ""
    for(var i = 0; i < 25; i++){
        var num = (i+1).toString();
        var string = resultsObject[num];
        middle = middle + string;
    }
    var html = start + middle + end;
    fs.writeFile('reports/testReport.html', html, function(err){
                 if(err){
                    throw err;
                 }
                 console.log("saved file");
                 open('reports/testReport.html')
                 });
}

// kicks off the testing framework by running each test case
function main(){
    for(var i = 0; i < 25; i++){
        var obj = readFileToJson('testCase' + (i+1).toString() + '.txt');
	    runTestCase(obj);
	}
}
main();
