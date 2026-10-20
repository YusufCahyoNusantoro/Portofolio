# Panduan Mengelola Website Portofolio

## Isi folder

```
index.html                       <- kerangka tampilan (tidak perlu diubah)
data.js                          <- SEMUA teks website
editor.html                      <- ALAT PENGELOLA (tambah/ubah/hapus). Jangan di-upload ke GitHub.
CV_Yusuf_Cahyo_Nusantoro.pdf     <- file CV untuk tombol "Unduh CV"
img/                             <- semua gambar (foto, screenshot aplikasi)
PANDUAN.md                       <- file ini (boleh tidak di-upload)
```

## Cara termudah: pakai editor.html (tanpa menyentuh kode)

1. Klik dua kali `editor.html` (gunakan Chrome atau Edge). Layar terbagi dua: formulir di kiri, pratinjau website langsung di kanan.
2. Pilih bagian di menu kiri (Profil, Pengalaman, Proyek, Keahlian, Pendidikan, Kontak, dst.), lalu:
   - **Ubah (update):** ketik langsung di kolom. Pratinjau di kanan ikut berubah.
   - **Tambah (insert):** klik tombol `+ Tambah ...` di bawah daftar.
   - **Hapus (delete):** klik `Hapus` pada item (ada konfirmasi). Baris kecil dihapus dengan tombol `✕`.
   - **Ubah urutan:** tombol `↑` dan `↓`.
   - **Salah hapus?** Klik `↶ Urungkan` di bagian atas.
   - **Gambar baru:** di item Proyek klik `+ Tambah gambar`, lalu `Pilih gambar…`. Gambar otomatis dikecilkan.
   - **Foto profil dan CV:** ada di menu `Profil & Foto`.
   - **Sembunyikan satu bagian:** hilangkan centang `Tampilkan bagian ini di website`.
3. Klik **Simpan** (atau Ctrl+S).
   - Kalau sebelumnya kamu klik `Hubungkan folder website` dan memilih folder ini, hasilnya langsung tertulis ke `data.js` dan folder `img/`.
   - Kalau tidak, browser mengunduh `data.js` (atau `perubahan-website.zip` bila ada gambar baru). Ekstrak ke folder ini dan pilih **Timpa (Replace)**.
4. Upload hasilnya ke GitHub (lihat bagian "Memasang di GitHub Pages").

Catatan:
- Draf tersimpan otomatis di browser. Kalau browser tertutup sebelum sempat Simpan, saat editor dibuka lagi muncul tombol **Pulihkan** (gambar baru perlu dipilih ulang).
- `Hubungkan folder website` hanya jalan di Chrome atau Edge. Di browser lain pakai mode unduh.
- Gambar yang dihapus dari daftar tidak otomatis terhapus dari folder `img/`. Hapus manual bila ingin.
- Editor hanya mengubah isi website di komputermu. Siapa pun yang membuka website publik tidak bisa mengubah apa pun.

## Melihat hasil di komputer (sebelum di-upload)

Klik dua kali `index.html`. Website terbuka di browser. Setelah menyimpan perubahan, tekan F5 di browser untuk melihat hasilnya.

## Mengubah teks langsung di data.js (alternatif tanpa editor)

Buka `data.js` dengan Notepad++ atau VS Code, cari teksnya (Ctrl+F), ubah, simpan. Contoh: untuk mengganti kalimat pengantar di bagian atas, cari `pengantar`.

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
2. Tarik `index.html`, `data.js`, file CV PDF, dan folder `img` ke jendela itu. **Jangan ikut menarik `editor.html`.**
3. Klik **Commit changes**. Tunggu satu sampai dua menit, lalu muat ulang website.

Tiap kali ada perubahan, upload ulang hanya file yang berubah (biasanya `data.js` saja, ditambah gambar baru bila ada).

## Hal yang perlu diingat sebelum dipublikasikan

- Website ini publik. Jangan menaruh data perusahaan yang belum boleh keluar, termasuk di screenshot (samarkan nama orang, nomor SPK, nama ruas, atau angka sensitif).
- Nomor WhatsApp di bagian `kontak` akan terlihat semua orang. Hapus blok WhatsApp bila tidak mau.
- Setelah CV diperbarui, ekspor ulang ke PDF dan timpa file CV di folder ini supaya tombol unduh tidak memberi versi lama.
