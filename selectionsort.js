var arr = [89, 53, 43, 77, 34];
  var pb;

  function setPB() {
    for (let k = 0; k < 5; k++) {
      pb[k].style.width = arr[k] + "%";
      pb[k].innerHTML = arr[k];
    }
  }

  function selectionSort() {
    let n = arr.length;
    let i = 0;

    function selectionSortStep() {
      if (i < n - 1) {
        let min_index = i;
        for (let j = i + 1; j < n; ++j) {
          if (arr[j] < arr[min_index]) {
            min_index = j;
          }
        }

        let temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;

        setPB();
        i++;

        setTimeout(selectionSortStep, 1000); // Delay for 1000 milliseconds (1 second)
      }
    }

    selectionSortStep();
  }

  window.onload = function () {
    pb = document.getElementsByClassName("progress-bar");
    setPB();
  };

  document.getElementById("button").addEventListener("click", function () {
    selectionSort();
  });