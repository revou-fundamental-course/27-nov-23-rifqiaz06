// Fungsi untuk memeriksa apakah nilai input adalah angka positif
function isValidPositiveNumber(value) {
    return !isNaN(value) && parseFloat(value) > 0;
}

// Fungsi untuk memeriksa apakah nilai input adalah angka positif atau nol
function isValidNonNegativeNumber(value) {
    return !isNaN(value) && parseFloat(value) >= 0;
}

// Fungsi untuk memeriksa apakah nilai input berada dalam rentang yang valid
function isValidInputValue(value, min, max) {
    return !isNaN(value) && parseFloat(value) >= min && parseFloat(value) <= max;
}

// Fungsi untuk menghitung luas segitiga
function calculateLuas() {
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    var unit = document.getElementById('unit').value;
    var luasResult = document.getElementById('resultLuas');

    // Memeriksa validitas input menggunakan fungsi isValidInputValue
    if (isValidInputValue(base, 0, 100) && isValidInputValue(height, 0, 100)) {
        var luas = 0.5 * parseFloat(base) * parseFloat(height);
        luasResult.innerHTML = 'Luas: ' + luas + ' ' + unit + '<sup>2</sup>';
    } else {
        luasResult.innerHTML = 'Masukkan angka positif antara 0 dan 100 untuk alas dan tinggi.';
    }
}

// Fungsi untuk memeriksa apakah nilai input adalah angka positif
function isValidPositiveNumber(value) {
    return !isNaN(value) && parseFloat(value) > 0;
}

// Fungsi untuk memeriksa apakah nilai input adalah angka positif atau nol
function isValidNonNegativeNumber(value) {
    return !isNaN(value) && parseFloat(value) >= 0;
}

// Fungsi untuk memeriksa apakah nilai input berada dalam rentang yang valid
function isValidInputValue(value, min, max) {
    return !isNaN(value) && parseFloat(value) >= min && parseFloat(value) <= max;
}

// Fungsi untuk menghitung keliling segitiga
function calculateKeliling() {
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;
    var unit = document.getElementById('unitKeliling').value;
    var kelilingResult = document.getElementById('resultKeliling');

    // Memeriksa validitas input menggunakan fungsi isValidInputValue
    if (isValidNonNegativeNumber(sisi1) && isValidNonNegativeNumber(sisi2) && isValidNonNegativeNumber(sisi3)) {
        var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
        kelilingResult.innerHTML = 'Keliling: ' + keliling + ' ' + unit;
    } else {
        kelilingResult.innerHTML = 'Masukkan angka positif atau nol yang valid untuk sisi-sisi segitiga.';
    }
}

// Fungsi untuk mereset hasil perhitungan dan input
function resetResult() {
    document.getElementById('resultLuas').innerHTML = '';
    document.getElementById('resultKeliling').innerHTML = '';

    // Mengatur nilai input kembali ke default atau kosong
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('unit').value = 'cm';

    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('unitKeliling').value = 'cm';
}
