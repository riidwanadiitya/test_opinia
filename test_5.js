let buah = [
    {
        "NAMA": "JERUK",
        "HARGA": 5000,
        "RASA": "ASAM"
    },
    {
        "NAMA": "MANGGA",
        "HARGA": 20000,
        "RASA": "MANIS"
    },
    {
        "NAMA": "APEL",
        "HARGA": 5000,
        "RASA": "MANIS"
    },
    {
        "NAMA": "DURIAN",
        "HARGA": 50000,
        "RASA": "MANIS"
    },
    {
        "NAMA": "DUKU",
        "HARGA": 10000,
        "RASA": "ASAM"
    },
    {
        "NAMA": "NANAS",
        "HARGA": 5000,
        "RASA": "ASAM"
    }
]

// soal 5a
console.log("Soal No. 5a")
var buah1 = Object.assign([], buah)
buah1.push({
    "NAMA": "PISANG",
    "HARGA": 5000,
    "RASA": "MANIS"
})

buah1.sort((a, b) => b.NAMA.localeCompare(a.NAMA))
console.log(buah1)
console.log()

// soal 5b
console.log("Soal No. 5b")
var buah2 = Object.assign([], buah)
var buah2_res = []

for (var i = 0; i < buah2.length; i++) {
    if(buah2[i].NAMA.includes("K")){
        buah2_res.push(buah2[i])
    }
}

console.log(buah2_res)
console.log()

// soal 5c
console.log("Soal No. 5c")
var buah3 = Object.assign([], buah)
var buah3_res = []

for (var i = 0; i < buah3.length; i++) {
    if(buah3[i].HARGA < 10000 && buah3[i].RASA == "MANIS"){
        buah3_res.push(buah3[i])
    }
}

console.log(buah3_res)
console.log()