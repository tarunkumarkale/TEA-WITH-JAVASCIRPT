
// why we write javascript inside body tag rather then inside head tag

// javascrit  in the head  tag excuited before  body html  part  over all  before browser render html  content

// if the script is larger or slow ,it can delay  the loading  and dispaly  of the page leading to poor user experinces

//2. deferd excuiton with dom
// javascript often interect with the  dom .  if the script run before the dom is fully loaded  it can lead  to errors like cannot read property of null

// 3. if  javascript is in head tag  can mix with prestation an bheviour  making the code harder to manage and debug . it s better to keep javascript in the external file


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                     about addeventlistender

document.addEventListener('DOMContentLoaded', () => {
    console.log('The document is ready!');
});

// dom content fully loaded means html fully render thne we start render our loagic inside function

/// what is going on here   when html page fully loaded inside the document  the data will start work  like useffect hook behaviourfull expl give below////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            let changeType;
            let count;
            const fun = document.getElementById('hello');

            fun.addEventListener('click', () => {
                const heading = document.querySelector('h1'); // Get the <h1> element
                let gethead = heading.textContent; // Get its text content

                console.log(typeof gethead); // Logs "string"

                if (typeof gethead === "string") {
                    changeType = Number(gethead); // Convert text to number
                }

                console.log(typeof changeType); // Logs "number"
                console.log(changeType); // Logs the current number

                count = changeType + 1; // Increment the number
                console.log(count); // Logs the incremented value

                heading.textContent = count; // Update the <h1> content
            });
        });
    </script>
</head>
<body>
    <h1>0</h1>
    <button id="hello">Click</button>
</body>
</html>

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("tarun"-"kale")  // NaN

// 
// Naming Practice
// var _myName = "vinod";    //  IT WORK
// var 1myName = "thapa";      // NOT WORK
// var _1my__Name = "bahadur";    // IT WORK
// var $myName = "thapa technical";   //  WORK
// var myNaem% = "thapa technical";     // NOT WORK  (IT USE SPECIAL CHARACTER)

// console.log("tarun"-"kale")  // NaN
console.log( NaN===NaN)  // false

// let numconversion= Number("jdflsajfj")
// let numconversion= praseInt("jdflsajfj")
// let numconversion= +("jdflsajfj")