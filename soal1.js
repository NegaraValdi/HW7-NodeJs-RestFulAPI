// import module rumus yang sudah dibuat

const rumus = require('./rumus.js')

// Menggunakan rumus yang sudah dimasukan ke module rumus.js

// Penggunaan rumus luas persegi

const luasPersegi = rumus.rumusLuasPersegi (10)
console.log ('Luas persegi dengan panjang sisi 10cm = ', luasPersegi)

// Penggunaan rumus keliling persegi

const kelilingPersegi = rumus.rumusKelilingPersegi (8)
console.log ('Keliling persegi dengan panjang sisi 8cm = ', kelilingPersegi)

// Penggunaan rumus luas persegi panjang

const luasPersegiPanjang = rumus.rumusLuasPersegiPanjang (4, 10)
console.log ('Luas persegi panjang dengan panjang 4cm dan lebar 10cm = ', luasPersegiPanjang)

// Penggunaan rumus keliling persegi panjang

const kelilingPersegiPanjang = rumus.rumusKelilingPersegiPanjang (7, 9)
console.log ('Keliling persegi panjang dengan panjang 7cm dan lebar 9cm = ', kelilingPersegiPanjang)