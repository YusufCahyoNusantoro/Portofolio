/* =====================================================================
   data.js  –  SEMUA ISI WEBSITE ADA DI SINI
   =====================================================================
   Kamu cukup mengedit file ini. index.html tidak perlu disentuh.

   ATURAN SINGKAT (supaya tidak error):
   1. Teks selalu diapit tanda kutip ganda:  "seperti ini"
   2. Antar item dipisah koma (,). Item paling akhir boleh pakai koma.
   3. Kalau di dalam teks ada tanda kutip ganda, tulis \"begini\".
   4. Untuk MENAMBAH item: salin satu blok { ... }, tempel di bawahnya, ganti isinya.
   5. Untuk MENGHAPUS item: hapus satu blok { ... } beserta komanya.
   6. Untuk MENYEMBUNYIKAN satu bagian tanpa menghapus: ubah  tampil: true  jadi  tampil: false
   7. Kalau halaman kosong atau muncul kotak merah, ada tanda kutip/koma yang
      terlewat. Pesan di kotak merah menyebutkan nomor barisnya.
   ===================================================================== */

const SITE = {

  /* ---------- Judul tab browser & deskripsi (muncul di Google) ---------- */
  situs: {
    judul: "Yusuf Cahyo Nusantoro | Program Management Officer & Product Owner",
    deskripsi: "Portofolio Yusuf Cahyo Nusantoro: Program Management Officer & Product Owner di Sinar Mas Land. Dashboard, aplikasi internal, dan analisis data proyek.",
    logo: "YC",
  },

  /* ---------- Bagian paling atas ---------- */
  profil: {
    nama: "Yusuf Cahyo Nusantoro",
    label: "Program Management Officer · Product Owner",
    // Kalimat besar. Bagian kedua tampil berwarna.
    judulBesar: ["Menganalisis data dan membangun", "aplikasi pemantauan proyek"],
    pengantar: "Saya Yusuf Cahyo Nusantoro. Di Sinar Mas Land, saya menganalisis management report lintas SBU, berperan sebagai Product Owner aplikasi Project Tracking bersama tim PMO, dan membangun dashboard untuk mendukung analisis dan perencanaan infrastruktur.",
    foto: "img/foto.jpg",          // ganti foto: timpa file img/foto.jpg
    inisial: "YC",                 // tampil kalau foto tidak ditemukan
    cv: "CV_Yusuf_Cahyo_Nusantoro.pdf",   // nama file CV untuk tombol unduh
  },

  /* ---------- Kotak angka di bawah bagian atas ----------
     "{proyek}" otomatis diganti jumlah proyek di bagian Proyek. */
  statistik: [
    { angka: "4 thn",   ket: "Pengalaman di Sinar Mas Land" },
    { angka: "250",     ket: "Pengguna aplikasi Protrack" },
    { angka: "+30%",    ket: "Pengguna Security Inspection" },
    { angka: "{proyek}", ket: "Aplikasi di portofolio" },
  ],

  /* ---------- Pengalaman kerja ----------
     Opsional per posisi:  tempat: "Nama Perusahaan"  (tampil di samping periode) */
  pengalaman: {
    tampil: true,
    judul: "Pengalaman Kerja",
    subjudul: "PT Bumi Serpong Damai Tbk (Sinar Mas Land), Jakarta",
    daftar: [
      {
        posisi: "Program Management Officer",
        periode: "September 2024 – Sekarang · 2 thn 2 bln",
        poin: [
          "Menginput management report bulanan dari berbagai unit bisnis (HC, Retail & Hospitality, Asset Management, Residential, Commercial, dll) ke dalam Excel, menganalisis selisih dan tren dibanding bulan-bulan sebelumnya, lalu menyiapkan hasilnya sebagai bahan presentasi untuk manajemen senior.",
          "Memperbarui data Work Breakdown Structure (WBS) di SAP sesuai progres proyek.",
          "Product Owner aplikasi Project Tracking (Protrack) dengan sekitar 250 pengguna; final approver pembaruan progres dari PTL/PIC.",
          "Membangun Damage Road, dashboard pemeliharaan jalan berbasis gambar DWG hasil Civil 3D.",
        ],
      },
      {
        posisi: "Product Analyst (Magang)",
        periode: "Oktober 2022 – Agustus 2024 · 1 thn 11 bln",
        poin: [
          "Menggali kebutuhan pengguna dan menyusun PRD untuk aplikasi internal: Security Inspection, Manage Building, Property Management, dan DEFO.",
          "Mengembangkan dashboard pemantauan laporan kehadiran dan temuan yang meningkatkan jumlah pengguna 30%.",
          "Manual testing lintas platform dan membersihkan data ganda/korup untuk migrasi ke SuperApp Property Management.",
        ],
      },
    ],
  },

  /* ---------- Proyek pilihan ----------
     gambar : daftar gambar (file ada di folder img/). Lebih dari satu = bergantian
              otomatis dan bisa digeser di tampilan besar.
              file  = nama file di folder img/
              ket   = keterangan gambar
              posisi (opsional) = bagian gambar yang dipotong di kartu:
                      "top left" (default), "center", "top", dll.
     link   : alamat aplikasi. Kosongkan ("") kalau aplikasi tidak bisa dibuka publik.
     lencana: label kecil di samping nama (mis. "Beta", "Internal"). Boleh dikosongkan.
     catatan: tulisan kecil di bawah kartu. Boleh dikosongkan. */
  proyek: {
    tampil: true,
    judul: "Proyek Pilihan",
    subjudul: "Satu aplikasi internal yang saya kelola bersama tim PMO, dan tiga aplikasi pribadi yang saya bangun dengan bantuan AI (Claude).",
    daftar: [
      {
        nama: "Protrack (Project Tracker)",
        lencana: "Internal",
        deskripsi: "Aplikasi pemantauan progres proyek lintas SBU yang digagas tim PMO untuk mempermudah project tracking: jadwal dan baseline proyek, persentase progres, daftar task, serta dashboard ringkasan dan status keseluruhan. Saya berperan sebagai Product Owner bersama tim PMO dan tim teknis. Kini menjadi modul di superapps Construction Management Apps (CMA) dan terus dikembangkan.",
        tag: ["Product Owner", "Project Tracking", "±250 pengguna", "Modul CMA"],
        link: "",
        catatan: "Aplikasi internal perusahaan, tidak dapat dibuka publik. Nama PIC dan keterangan status disamarkan.",
        gambar: [
          { file: "protrack-1-dashboard.jpg", ket: "Protrack: dashboard ringkasan jumlah proyek per kategori" },
          { file: "protrack-2-jadwal.jpg",    ket: "Protrack: Project Schedule, baseline dan progres proyek" },
          { file: "protrack-3-task.jpg",      ket: "Protrack: daftar task per proyek (nama PIC disamarkan)" },
          { file: "protrack-4-status.jpg",    ket: "Protrack: Overall Status daftar proyek (keterangan status disamarkan)" },
        ],
      },
      {
        nama: "Damage Road",
        lencana: "Beta",
        deskripsi: "Dashboard pemantauan kerusakan jalan berbasis gambar DWG hasil Civil 3D: peta satelit titik kerusakan, superimpose versi gambar, filter periode dan ruas, status penanganan, serta rekap biaya perbaikan. Nomor SPK diintegrasikan dari data eksternal.",
        tag: ["Civil 3D (DWG)", "Integrasi Data Eksternal", "Dashboard"],
        link: "https://yusufcahyonusantoro.github.io/Dashboard-Damage-Road/",
        catatan: "",
        gambar: [
          { file: "damage-road-1-peta.jpg", ket: "Tampilan Damage Road: peta kerusakan jalan" },
          { file: "damage-road-2-dwg.jpg",  ket: "Tampilan Damage Road: superimpose versi gambar DWG dan detail issue", posisi: "center" },
        ],
      },
      {
        nama: "MyCuan",
        lencana: "",
        deskripsi: "Aplikasi pencatatan keuangan dengan dashboard tren pemasukan dan pengeluaran, anggaran vs realisasi, kunci PIN, foto bukti transaksi, dan sinkronisasi Google Sheets.",
        tag: ["Google Sheets", "Dashboard", "PIN Lock"],
        link: "https://yusufcahyonusantoro.github.io/MyCuan/",
        catatan: "",
        gambar: [
          { file: "mycuan-1-saldo.jpg", ket: "Tampilan MyCuan: saldo dan anggaran" },
        ],
      },
      {
        nama: "Dibalik Saham · IDX Screener",
        lencana: "",
        deskripsi: "Screener saham Bursa Efek Indonesia (±900 emiten) dengan skor, filter uptrend dan breakout, chart harian Smart Money Concepts, watchlist, kalender, dan portofolio saham.",
        tag: ["Pasar Modal", "Smart Money Concepts", "Portofolio"],
        link: "https://yusufcahyonusantoro.github.io/idx-screener/",
        catatan: "Dibuat untuk penggunaan pribadi, bukan rekomendasi jual atau beli saham.",
        gambar: [
          { file: "idx-screener-1-daftar.jpg", ket: "Tampilan IDX Screener: daftar saham" },
          { file: "idx-screener-2-chart.jpg",  ket: "Tampilan IDX Screener: chart harian" },
        ],
      },
    ],
  },

  /* ---------- Keahlian: kelompok berisi chip ---------- */
  keahlian: {
    tampil: true,
    judul: "Keahlian",
    subjudul: "Manajemen proyek, produk, dan data.",
    kelompok: [
      { judul: "Manajemen Proyek & Produk", isi: ["PRD", "Sprint Management", "Backlog Management", "Pelaporan Manajemen", "Validasi & Analisis Data", "Manual Testing"] },
      { judul: "Tools", isi: ["SAP (input data WBS)", "Autodesk Civil 3D", "Jira & Confluence", "Excel", "PowerPoint", "Figma", "GitHub"] },
    ],
  },

  /* ---------- Pendidikan, pelatihan, organisasi ----------
     Setiap kelompok jadi satu kotak. Boleh menambah kelompok baru. */
  pendidikan: {
    tampil: true,
    judul: "Pendidikan & Pelatihan",
    subjudul: "Fondasi akademik dan pembelajaran berkelanjutan.",
    kelompok: [
      {
        judul: "Pendidikan",
        daftar: [
          { nama: "Universitas Gunadarma", ket: "S1 Sistem Informasi, IPK 3,51 / 4,00 · 2016–2020 · Asisten Laboratorium 2 tahun" },
          { nama: "SMA Nurul Fikri Boarding School", ket: "Jurusan IPA · 2013–2016" },
        ],
      },
      {
        judul: "Pelatihan & Organisasi",
        daftar: [
          { nama: "Quality Assurance", ket: "MySkill · Oktober 2025" },
          { nama: "Belajar Dasar Data Science", ket: "Dicoding · Januari 2024" },
          { nama: "Belajar Dasar Pemrograman Web", ket: "Dicoding · Mei 2022" },
          { nama: "Organisasi & Prestasi", ket: "Ketua Divisi Bulutangkis FLIGHT612 · Juara 2 O2SN Bulutangkis Kab. Serang · Anggota BSMR & Tapak Suci" },
        ],
      },
    ],
  },

  /* ---------- Kontak ----------
     utama: true  = tombol berwarna (cukup satu).
     Nomor telepon sengaja tidak dicantumkan agar tidak diambil bot. */
  kontak: {
    tampil: true,
    judul: "Mari Terhubung",
    subjudul: "Terbuka untuk peluang di bidang manajemen program, produk, dan analisis data. Jakarta Timur.",
    tombol: [
      { label: "Email Saya", url: "mailto:cahyoyusuf82@gmail.com", utama: true },
      { label: "LinkedIn",   url: "https://www.linkedin.com/in/yusufcahyon/" },
      { label: "GitHub",     url: "https://github.com/YusufCahyoNusantoro" },
    ],
  },

};
