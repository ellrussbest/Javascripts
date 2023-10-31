// selection sort
function selectionSort(arr) {
    let min
    
    for(let i = 0; i < arr.length - 1; i++) {
        min = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[min] > arr[j]) min = j
        }
        
        if(min !== i){
            temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
}

arr1 = [5, 2, 8, 1, 7, 4, 6, 3] 
selectionSort(arr1)
console.log(arr1)

// insertion sort
function insertionSort(arr) {
    let key
    
    for(let i = 1; i < arr.length; i++) {
        key = arr[i]
        let j = i - 1
        
        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j--
        }
        
        arr[j+1] = key
    }
}


arr2 = [5, 2, 8, 1, 7, 4, 6, 3] 
insertionSort(arr2)
console.log(arr2)


// Bubble sort
function bubbleSort(arr) {
    let swapped
    for(let i = 0; i < arr.length - 1; i++) {
        swapped = false
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        
        if(!swapped) break
    }
}

arr3 = [5, 2, 8, 1, 7, 4, 6, 3]
arr3 = [64, 34, 25, 12, 22, 11, 90]
bubbleSort(arr3)
console.log(arr3)
