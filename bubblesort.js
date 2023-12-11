var arr= [89, 77, 67, 53, 34];

//for custom prompt
//  var arr =[];
// for(var i=0; i<5; i++) {
	
// 	//Taking Input from user
// 	arr[i] = prompt('Enter Element ' + (i+1));
// }

console.log(arr);

function setPB() {
    for (let k = 0; k < 5; k++) {
        pb[k].style.width = arr[k] + "%";
        pb[k].innerHTML = arr[k];
    }
}

function bubbleSortStep(i, j) {
    if (j < arr.length - i - 1) {
        if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

        setPB();
        console.log(arr);

        setTimeout(function () {
            bubbleSortStep(i, j + 1);
        }, 1000);
    } else {
        setTimeout(function () {
            bubbleSort(i + 1);
        }, 1000);
    }
}

function bubbleSort(i) {
    if (i < arr.length - 1) {
        // Start the inner loop with j = 0
        bubbleSortStep(i, 0);
    } else {
        // Sorting is complete
        setPB();
        console.log(arr);
        document.getElementsByClassName("label")[0].innerHTML="Done!"
    }
}

window.onload = function () {
    pb = document.getElementsByClassName("progress-bar");
    setPB();
};

document.getElementById("button").addEventListener("click" , function(){
    bubbleSort(0);
})