

function formatUang(angka){
    angka = angka.toLocaleString()
    return `Rp ${angka},00`
}

module.exports = formatUang;