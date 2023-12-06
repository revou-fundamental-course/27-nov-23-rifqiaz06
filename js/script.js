// Fungsi untuk validasi input pada kalkulator luas segitiga
function validateLuasInput() {
    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    var unit = document.getElementById('unit').value;
    var luasResult = document.getElementById('resultLuas');

    if (!base || !height) {
        luasResult.innerHTML = 'Masukkan nilai untuk alas dan tinggi.';
        return false; // Input tidak valid
    }

    if (!isValidPositiveNumber(base) || !isValidPositiveNumber(height)) {
        luasResult.innerHTML = 'Masukkan angka positif yang valid untuk alas dan tinggi.';
        return false; // Input tidak valid
    }

    return true; // Input valid
}

// Fungsi untuk validasi input pada kalkulator keliling segitiga
function validateKelilingInput() {
    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;
    var unit = document.getElementById('unitKeliling').value;
    var kelilingResult = document.getElementById('resultKeliling');

    if (!sisi1 || !sisi2 || !sisi3) {
        kelilingResult.innerHTML = 'Masukkan nilai untuk semua sisi segitiga.';
        return false; // Input tidak valid
    }

    if (!isValidPositiveNumber(sisi1) || !isValidPositiveNumber(sisi2) || !isValidPositiveNumber(sisi3)) {
        kelilingResult.innerHTML = 'Masukkan angka positif yang valid untuk sisi-sisi segitiga.';
        return false; // Input tidak valid
    }

    return true; // Input valid
}

// Fungsi untuk memeriksa apakah nilai input adalah angka positif
function isValidPositiveNumber(value) {
    return !isNaN(value) && parseFloat(value) > 0;
}

// Fungsi untuk memeriksa apakah nilai input adalah angka positif atau nol
function isValidNonNegativeNumber(value) {
    return !isNaN(value) && parseFloat(value) >= 0;
}

// Fungsi untuk menghitung luas segitiga
function calculateLuas() {
    if (!validateLuasInput()) {
        return; // Hentikan perhitungan jika input tidak valid
    }

    var base = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    var unit = document.getElementById('unit').value;
    var luasResult = document.getElementById('resultLuas');

    var luas = 0.5 * parseFloat(base) * parseFloat(height);
    luasResult.innerHTML = 'Luas: ' + luas + ' ' + unit + '<sup>2</sup>';
}

// Fungsi untuk menghitung keliling segitiga
function calculateKeliling() {
    if (!validateKelilingInput()) {
        return; // Hentikan perhitungan jika input tidak valid
    }

    var sisi1 = document.getElementById('sisi1').value;
    var sisi2 = document.getElementById('sisi2').value;
    var sisi3 = document.getElementById('sisi3').value;
    var unit = document.getElementById('unitKeliling').value;
    var kelilingResult = document.getElementById('resultKeliling');

    var keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    kelilingResult.innerHTML = 'Keliling: ' + keliling + ' ' + unit;
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
