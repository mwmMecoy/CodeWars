function BubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            console.log(arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            console.log(arr)
        }
    }
}

let sortIt = [3, 9, 7, 4, 69, 420, 42]
sortIt = BubbleSort(sortIt)
console.log(sortIt)