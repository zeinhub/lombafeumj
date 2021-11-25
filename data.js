let bph = [
    {
        "jabatan" : "Sekretaris 1",
        "nama"    : "Afrahani Lutfiyah",
        "foto"    : "image/foto/xx"
    },
    {
        "jabatan" : "Sekretaris 1",
        "nama"    : "Afrahani Lutfiyah",
        "foto"    : "image/foto/xx"
    },
    {
        "jabatan" : "Sekretaris 1",
        "nama"    : "Afrahani Lutfiyah",
        "foto"    : "image/foto/xx"
    },
]

bph.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

let length = bph.length;
console.log(length);