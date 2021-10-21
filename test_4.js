const string_padang = "AKU SUKA MAKAN NASI PADANG"

// soal 4a
const str1 = string_padang.toLowerCase()
const arr_str1 = str1.split(" ");
const arr_res1 = []

for (var i = 0; i < arr_str1.length; i++) {
    let tmp_arr1 = []
    
    for (var j = 0; j < i+1; j++) {
        tmp_arr1.push(arr_str1[j])
    }
    arr_res1.push(tmp_arr1.join(" "))
}

for (var i = arr_str1.length-1; i >= 0; i--) {
    let tmp_arr1 = []
    
    for (var j = arr_str1.length-1; j >= i; j--) {
        tmp_arr1.push(arr_str1[j])
    }
    arr_res1.push(tmp_arr1.join(" "))
}

console.log(arr_res1)
