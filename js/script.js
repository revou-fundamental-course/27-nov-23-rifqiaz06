    // Fungsi untuk menghitung luas segitiga
    function calculateLuas() {
        var base = parseFloat(document.getElementById('base').value);
        var height = parseFloat(document.getElementById('height').value);
        var unit = document.getElementById('unit').value;
        var luasResult = document.getElementById('resultLuas');

        if (!isNaN(base) && !isNaN(height)) {
            var luas = 0.5 * base * height;
            luasResult.innerHTML = 'Luas: ' + luas + ' ' + unit + '<sup>2</sup>';
        } else {
            luasResult.innerHTML = 'Masukkan angka yang valid untuk alas dan tinggi.';
        }
    }

    // Fungsi untuk menghitung keliling segitiga
    function calculateKeliling() {
        var sisi1 = parseFloat(document.getElementById('sisi1').value);
        var sisi2 = parseFloat(document.getElementById('sisi2').value);
        var sisi3 = parseFloat(document.getElementById('sisi3').value);
        var unit = document.getElementById('unitKeliling').value;
        var kelilingResult = document.getElementById('resultKeliling');

        if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
            var keliling = sisi1 + sisi2 + sisi3;
            kelilingResult.innerHTML = 'Keliling: ' + keliling + ' ' + unit;
        } else {
            kelilingResult.innerHTML = 'Masukkan angka yang valid untuk sisi-sisi segitiga.';
        }
    }

    // Fungsi untuk mereset hasil perhitungan
    function resetResult() {
        document.getElementById('resultLuas').innerHTML = '';
        document.getElementById('resultKeliling').innerHTML = '';
    }