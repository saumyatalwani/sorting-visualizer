var arr = [89, 53, 43, 77, 34];
  var pb;

  function setPB() {
    for (let k = 0; k < 5; k++) {
      pb[k].style.width = arr[k] + "%";
      pb[k].innerHTML = arr[k];
    }
  }

  function insertionSort() {
    let n = arr.length;
    let i = 0;

    function insertionSortStep() {
      if (i < n) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
        }
        arr[j + 1] = key;
        console.log(arr)
        setPB();
        i++;
        setTimeout(insertionSortStep, 1000);
      }
    }

    insertionSortStep();
  }

  window.onload = function () {
    pb = document.getElementsByClassName("progress-bar");
    setPB();
  };

  document.getElementById("button").addEventListener("click", function () {
    insertionSort();
  });