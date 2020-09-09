var a = [];
for(var i = 0; i < 20; i++){
    a[i] = i+1;
    var boxID = "b" + (i+1);
    document.getElementById(boxID).style.transform = "scale(1," + a[i] + ")";
}
document.getElementById('Bubble').onclick = function() {
   a = shuffle(a);
   bubbleSort(a);
};
document.getElementById('Insertion').onclick = function() {
        swap("p2","p3");
  // a = shuffle(a);
   //console.log(a.toString());
   //insertionSort(a);
   //console.log(a.toString());
};
document.getElementById('Selection').onclick = function() {
    swap("p3","p4");
//   a = shuffle(a);
//   console.log(a.toString());
//   selectionSort(a);
//   console.log(a.toString());
};
document.getElementById('Merge').onclick = function() {
    swap("p4","p5");
//   a = shuffle(a);
//   console.log(a.toString());
//   mergeSort(a,0,a.length-1);
//   console.log(a.toString());
};
document.getElementById('Quick').onclick = function() {
    swap("p5","p6");
//   a = shuffle(a);
//   console.log(a.toString());
//   quickSort(a,0,a.length-1);
//   console.log(a.toString());
};
document.getElementById('Heap').onclick = function() {
    swap("p6","p7");
//   a = shuffle(a);
//   console.log(a.toString());
//   heapSort(a);
//   console.log(a.toString());
};

function swap(id1,id2) {
    var box1 = document.getElementById("p" + id1.substr(1));
    var box2 = document.getElementById("p" + id2.substr(1));
    var bar1 = document.getElementById("b" + id1.substr(1));
    var bar2 = document.getElementById("b" + id2.substr(1));
    
    var boxOffset1 = box1.offsetLeft;
    var boxOffset2 = box2.offsetLeft;
    var boxLeft1 = parseInt(box1.style.left);
    if(isNaN(boxLeft1)) boxLeft1 = 0;
    var boxLeft2 = parseInt(box2.style.left);
    if(isNaN(boxLeft2)) boxLeft2 = 0;
    var boxHeight1 = parseInt(bar1.style.transform.substr(bar1.style.transform.indexOf(",")+1));
    var boxHeight2 = parseInt(bar2.style.transform.substr(bar2.style.transform.indexOf(",")+1));
    if(boxOffset2 > boxOffset1){
          var pos = 0;
          var id = requestAnimationFrame(frame);
          function frame() {
            if (pos >= boxOffset2 - boxOffset1) {
              bar1.style.transform = "scale(1," + boxHeight2 + ")";
              bar2.style.transform = "scale(1," + boxHeight1 + ")";
              box1.style.left = boxLeft1 + 'px';
              box2.style.left = boxLeft2 + 'px';
              cancelAnimationFrame(id);
            } else {
              pos+=10;
              box1.style.left = boxLeft1 + pos + 'px';
              box2.style.left = boxLeft2 - pos + 'px';
              requestAnimationFrame(frame);
            }
          }
    } else if (boxOffset2 < boxOffset1){
          var pos = 0;
          var id = setInterval(frame, 1);
          function frame() {
            if (pos >= boxOffset1 - boxOffset2) {
              bar1.style.transform = "scale(1," + boxHeight2 + ")";
              bar2.style.transform = "scale(1," + boxHeight1 + ")";
              box1.style.left = boxLeft1 + 'px';
              box2.style.left = boxLeft2 + 'px';
              cancelAnimationFrame(id);
            } else {
              pos+=10;
              box1.style.left = boxLeft1 - pos + 'px';
              box2.style.left = boxLeft2 + pos + 'px';
              requestAnimationFrame(frame);
            }
          }
    }
}
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
    for(var i = 0; i < array.length; i++){
        var id = "b" + (i+1);
        document.getElementById(id).style.backgroundColor  = "black";
        document.getElementById(id).style.transform = "scale(1," + a[i] + ")";
    }
  return array;
}
function printArray(array){
    for(var i = 0; i < array.length; i++){
        var id = "b" + (i+1);
        document.getElementById(id).style.transform = "scale(1," + a[i] + ")";
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function bubbleSort(array){
    var length = array.length;
    for (var i = 0; i < length; i++) { 
        for (var j = 0; j < (length - i - 1); j++) {
            var bar1 = document.getElementById("b" + (j+1));
            var bar2 = document.getElementById("b" + (j+2));
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
            if(array[j] > array[j+1]) {
                var tmp = array[j];  
                array[j] = array[j+1]; 
                array[j+1] = tmp;
                swap("p" + (j+1), "p" + (j+2))

                await delay(300);
            }
            bar1.style.backgroundColor = "black";
            bar2.style.backgroundColor = "black";

        } 
        document.getElementById("b" + (length - i)).style.backgroundColor = "blue";
    }
}
function insertionSort(array){
    for(var i = 1; i < array.length; i++){
        var curr = array[i];
        var prev = i - 1;
        
        while(prev >= 0 && array[prev] > curr){
            array[prev+1] = array[prev];
            prev = prev-1;
        }
        array[prev+1] = curr;
    }
}
function selectionSort(array){
        for (var i = 0; i < array.length-1; i++) 
        { 
            var min = i; 
            for (var j = i+1; j < array.length; j++){
                if (array[j] < array[min]) {
                    min = j; 
                }
            }
            var temp = array[min]; 
            array[min] = array[i]; 
            array[i] = temp; 
        } 
    window.setTimeout(function printArr(){    
    for(var i = 0; i < array.length; i++){
        var id = "b" + (i+1);
        document.getElementById(id).style.backgroundColor  = "red";
        document.getElementById(id).style.transform = "scale(1," + a[i] + ")";
    }},3000);
}
function mergeSort(array,l,r) 
{
        if (l < r) { 
            // Find the middle point 
            var m = Math.floor((l + r) / 2); 
  
            // Sort first and second halves 
            mergeSort(array, l, m); 
            mergeSort(array, m + 1, r); 
  
            // Merge the sorted halves 
            merge(array, l, m, r); 
        } 
}
function merge(array,l,m,r){
        var n1 = m - l + 1; 
        var n2 = r - m; 

        var L = [];
        var R = [];

        for (var i = 0; i < n1; i++) {
            L[i] = array[l + i]; 
        }
        for (var j = 0; j < n2; j++) {
            R[j] = array[m + 1 + j]; 
        }

        i = 0, j = 0; 

        var k = l; 
        while (i < n1 && j < n2) { 
            if (L[i] <= R[j]) { 
                array[k] = L[i]; 
                i++; 
            } 
            else { 
                array[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 

        while (i < n1) { 
            array[k] = L[i]; 
            i++; 
            k++; 
        } 

        while (j < n2) { 
            array[k] = R[j]; 
            j++; 
            k++; 
        } 
}
function quickSort(array,low,high){
       if (low < high) 
        { 
            var pi = partition(array, low, high); 
  
            quickSort(array, low, pi-1); 
            quickSort(array, pi+1, high); 
        } 
}
function partition(array,low,high){
        var pivot = array[high];  
        var i = (low-1); // index of smaller element 
        for (var j=low; j<high; j++) 
        { 
            // If current element is smaller than the pivot 
            if (array[j] < pivot) 
            { 
                i++; 
  
                // swap arr[i] and arr[j] 
                var temp1 = array[i]; 
                array[i] = array[j]; 
                array[j] = temp1; 
            } 
        } 
  
        // swap arr[i+1] and arr[high] (or pivot) 
        var temp2 = array[i+1]; 
        array[i+1] = array[high]; 
        array[high] = temp2; 
  
        return i+1; 
}
function heapSort(array){
        var n = array.length; 
  
        // Build heap (rearrange array) 
        for (var i = n / 2 - 1; i >= 0; i--) 
            heapify(array, n, i); 
  
        // One by one extract an element from heap 
        for (i=n-1; i>0; i--) 
        { 
            // Move current root to end 
            var temp = array[0]; 
            array[0] = array[i]; 
            array[i] = temp; 
  
            // call max heapify on the reduced heap 
            heapify(array, i, 0); 
        } 
}
function heapify(array,n,i){
        var largest = i; // Initialize largest as root 
        var l = 2*i + 1; // left = 2*i + 1 
        var r = 2*i + 2; // right = 2*i + 2 
  
        // If left child is larger than root 
        if (l < n && array[l] > array[largest]) 
            largest = l; 
  
        // If right child is larger than largest so far 
        if (r < n && array[r] > array[largest]) 
            largest = r; 
  
        // If largest is not root 
        if (largest != i) 
        { 
            var swap = array[i]; 
            array[i] = array[largest]; 
            array[largest] = swap; 
  
            // Recursively heapify the affected sub-tree 
            heapify(array, n, largest); 
        } 
}
