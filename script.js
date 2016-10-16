var numArr = ['1', '2', '3', '4', '5', '6', '7',
    '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '21', '22', '23',
    '24', '25', '26'
];
var myul= document.getElementById('list26');
for (var i = 0, length1 = numArr.length; i < length1; i++) {
    var lielem = document.createElement('li'); //creates the li node
    lielem.textContent = numArr[i]; //set text content
    myul.appendChild(lielem); //append to ul
    
    lielem.innerHTML = numArr[i];
    if (i % 2 == 0) {
        lielem.style.backgroundColor = "maroon";
        lielem.style.color = "gold";
        lielem.style.textAlign = "center";
        lielem.style.listStyleType = "none";

    } else {
        lielem.style.backgroundColor = "navy";
        lielem.style.color = "brown";
        lielem.style.textAlign = "center";
        lielem.style.listStyleType = "none";
    }
}
