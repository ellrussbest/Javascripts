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

// Floyd's Tortoise and Hare Algorithm
arr = [1, 1, 2, 2, 3, 4]

function hasCycle(arr) {
    slow = 0
    fast = 0

    while((fast < arr.length) && (fast + 1 < arr.length)) {
        slow += 1
        fast += 2

        if (slow === fast) return true
    }

    return false
}

console.log(hasCycle(arr))

// boolean hasCycle(ListNode head) {
//     ListNode slow = head, fast = head;

//     while(fast != null && fast.next != null) {
//         slow = slow.next
//         fast = fast.next.next

//         if(slow == fast) return true
//     }
//     return false
// }

// 1. Initially, both the slow and fast pointers are at the head of the linked list.
// 2. In each iteration of the while loop, the slow pointer moves one step forward (slow = slow.next), and the fast pointer moves two steps forward (fast = fast.next.next).
// 3. If there is no cycle in the linked list, the fast pointer will reach the end of the list (fast == null) before catching up to the slow pointer.
// 4. However, if there is a cycle, the fast pointer will eventually enter the cycle and start "lapping" the slow pointer.
// 5. As the fast pointer moves two steps at a time, and the slow pointer moves one step at a time, they will eventually meet at the same node within the cycle (slow == fast).
// 6. If the slow and fast pointers meet, it means there is a cycle in the linked list, and we return true.
// 7. If the fast pointer reaches the end of the list (fast == null) without meeting the slow pointer, it means there is no cycle, and we return false.
