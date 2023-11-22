// Membuat rumus dari masing-masing bentuk


// Rumus luas persegi

exports.rumusLuasPersegi = (sisi) => {
    return sisi * sisi
}

// Rumus keliling persegi

exports.rumusKelilingPersegi = (sisi) => {
    return 4 * sisi
}

// Rumus luas persegi panjang

exports.rumusLuasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar
}

// Rumus keliling persegi panjang

exports.rumusKelilingPersegiPanjang = (panjang, lebar) => {
    return 2 * (panjang + lebar)
}
