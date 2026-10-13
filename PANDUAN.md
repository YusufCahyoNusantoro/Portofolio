# Panduan Mengelola Website Portofolio

## Isi folder

```
index.html                       <- kerangka tampilan (tidak perlu diubah)
data.js                          <- SEMUA teks website. Ini yang kamu edit.
CV_Yusuf_Cahyo_Nusantoro.pdf     <- file CV untuk tombol "Unduh CV"
img/                             <- semua gambar (foto, screenshot aplikasi)
PANDUAN.md                       <- file ini (boleh tidak di-upload)
```

## Melihat hasil di komputer (sebelum di-upload)

Klik dua kali `index.html`. Website terbuka di browser. Ubah `data.js`, simpan, lalu tekan F5 di browser untuk melihat perubahannya. Gunakan editor teks biasa seperti Notepad++ atau VS Code.

## Mengubah teks

Buka `data.js`, cari teksnya (Ctrl+F), ubah, simpan. Contoh: untuk mengganti kalimat pengantar di bagian atas, cari `pengantar`.

## Menambah item

Salin satu blok `{ ... },` lalu tempel di bawahnya dan ganti isinya.

Contoh menambah proyek baru (di dalam `proyek` lalu `daftar`):

```js
{
  nama: "Nama Proyek Baru",
  lencana: "Beta",                       // boleh ""
  deskripsi: "Satu sampai tiga kalimat tentang fungsi aplikasi.",
  tag: ["Dashboard", "Excel"],
  link: "https://alamat-aplikasi.com",   // "" kalau tidak bisa dibuka publik
  catatan: "",
  gambar: [
    { file: "proyek-baru-1.jpg", ket: "Tampilan halaman utama" },
  ],
},
```

Contoh menambah pengalaman, kursus, keahlian, atau tombol kontak: sama, salin blok yang ada lalu ganti isinya.

## Menghapus item

Hapus satu blok `{ ... },` dari tanda `{` sampai koma setelah `}`. Atau, untuk menyembunyikan satu bagian besar tanpa menghapus isinya, ubah `tampil: true` menjadi `tampil: false` (tersedia di pengalaman, proyek, keahlian, pendidikan, dan kontak).

## Mengganti atau menambah gambar

1. Siapkan screenshot (format .jpg, lebar sekitar 1400 px sudah cukup tajam).
2. Taruh di folder `img/`.
3. Tulis nama filenya di `data.js`, di bagian `gambar` proyek terkait.
4. Untuk mengganti foto profil, timpa saja file `img/foto.jpg` dengan foto baru (berbentuk persegi, wajah di tengah).

Kalau satu proyek punya lebih dari satu gambar, gambarnya bergantian otomatis dan bisa digeser di tampilan besar.

## Aturan penulisan di data.js (supaya tidak error)

- Teks diapit tanda kutip ganda `"seperti ini"`.
- Antar item dipisah koma.
- Kalau di dalam teks ada tanda kutip ganda, tulis `\"begini\"`.
- Kalau halaman kosong atau muncul kotak merah di atas, ada tanda kutip atau koma yang terlewat. Periksa bagian yang baru kamu ubah.

## Memasang di GitHub Pages

1. Buka repo websitemu di GitHub, klik **Add file** lalu **Upload files**.
2. Tarik `index.html`, `data.js`, file CV PDF, dan folder `img` ke jendela itu.
3. Klik **Commit changes**. Tunggu satu sampai dua menit, lalu muat ulang website.

Tiap kali ada perubahan, upload ulang hanya file yang berubah (biasanya `data.js` saja, ditambah gambar baru bila ada).

## Hal yang perlu diingat sebelum dipublikasikan

- Website ini publik. Jangan menaruh data perusahaan yang belum boleh keluar, termasuk di screenshot (samarkan nama orang, nomor SPK, nama ruas, atau angka sensitif).
- Nomor WhatsApp di bagian `kontak` akan terlihat semua orang. Hapus blok WhatsApp bila tidak mau.
- Setelah CV diperbarui, ekspor ulang ke PDF dan timpa file CV di folder ini supaya tombol unduh tidak memberi versi lama.
