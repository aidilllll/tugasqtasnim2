//OBJECT

//method untuk memanggil data object
const panggilData = {
    nama: "Aidil",
    umur: 19,
    pekerjaan: "Kuli",

    tampilkanInfo: function() {
        return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}`;
      }
};

console.log(panggilData.tampilkanInfo());

//method untuk merubah isi dalam object
const update = {
    nama: "Aidil",
    umur: 19,
    pekerjaan: "Kuli",
    
    ubahNama: function(namaBaru) {
      this.nama = namaBaru;
    },

    ubahUmur: function(umurBaru) {
      this.umur = umurBaru;
    },

    ubahPekerjaan: function(pekerjaanBaru) {
        this.pekerjaan = pekerjaanBaru;

    },
    tampilkanInfo: function() {
      return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}`;
    }
};

  update.ubahNama("Idil");
  update.ubahUmur("20");
  update.ubahPekerjaan("DarkLordAbyss");
  
  console.log(update.tampilkanInfo());

//method untuk menambahkan umur pada object
const tambahusia = {
    nama: "Aidil",
    umur: 300,
    pekerjaan: "kuli setempat",

    tambahUmur: function(tahun) {
      this.umur += tahun;
    },

    tampilkanInfo: function() {
      return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}`;
    }
};
  
  tambahusia.tambahUmur(5);
  
  console.log(tambahusia.tampilkanInfo());
  
//method untuk menambahkan properti baru ke dalam object
const tambah = {
    nama: "Dill",
    umur: 21,
    pekerjaan: "Programmer",

    tambahproperti: function(key, value) {
      this[key] = value;
    },

    tampilkanInfo: function() {
        return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}, Alamat: ${this.alamat}`;
    }
};
 
  tambah.tambahproperti("alamat", "Mars,prov.kepanasan kec.help jalan kematian komplek kehampaan");
  
  console.log(tambah.tampilkanInfo());
  
//method untuk menghapus properti didalam object
let o_o = {
    nama: "Aidil",
    umur: 1000,
    pekerjaan: "kuli expert",
    status: "jomblo",

    tampilkanInfo: function() {
      return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}, Status: ${this.status}`;
    },

    hapusData: function(key) {
      delete this[key];
    }
  };

  o_o.hapusData("status");
  
  console.log(o_o.tampilkanInfo());

// ARRAY

// Untuk mengurutkan isi dalam array
const kendaraan = ['singa', 'gajah', 'kuda'];
const urutkanKendaraan = kendaraan.sort();

console.log(urutkanKendaraan);

// Menggabungkan semua array menjadi string
const ninjaKonoha = ['Narto', 'saskeh', 'sei'];
const joinedTeam7 = ninjaKonoha.join(', ');

console.log(joinedTeam7);

// Menggabungkan beberapa array
const fusion1 = ['narto', 'saskeh'];
const fusion2 = ['sai', 'kaskasih'];
const kombinasi = fusion1.concat(fusion2);

console.log(kombinasi);

//  Membuat salinan sebagian array dengan mengambil elemen-elemen dalam rentang tertentu.
const ninjaTeam7Full = ["sakrah", "narto", "saskeh", "sei", "kaskasih"];
const TheRealTeam = ninjaTeam7Full.slice(1, 5);

console.log(TheRealTeam);

// Menambahkan pesawat ke awal array
const team7 = ["narto", "saskeh", "sei"];
team7.unshift("kaskasih");

console.log(team7);


  