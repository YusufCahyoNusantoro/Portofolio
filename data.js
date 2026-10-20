/* =====================================================================
   data.js  –  SEMUA ISI WEBSITE ADA DI SINI
   File ini dibuat oleh editor.html dan tetap bisa diedit manual.
   Aturan: teks diapit tanda kutip ganda "seperti ini"; antar item dipisah koma;
   sembunyikan satu bagian dengan tampil: false.
   ===================================================================== */

const SITE = {
  situs: {
    judul: "Yusuf Cahyo Nusantoro | Program Management Officer & Product Owner",
    deskripsi: "Portofolio Yusuf Cahyo Nusantoro: Program Management Officer & Product Owner di Sinar Mas Land. Dashboard, aplikasi internal, dan analisis data proyek.",
    logo: "YC",
  },
  profil: {
    nama: "Yusuf Cahyo Nusantoro",
    label: "Program Management Officer · Product Owner",
    judulBesar: ["Menganalisis data dan membangun", "aplikasi pemantauan proyek"],
    pengantar: "Saya Yusuf Cahyo Nusantoro. Di Sinar Mas Land, saya menganalisis management report lintas SBU, berperan sebagai Product Owner aplikasi Project Tracking bersama tim PMO, dan membangun dashboard untuk mendukung analisis dan perencanaan infrastruktur.",
    foto: "img/foto.jpg",
    inisial: "YC",
    cv: "CV_Yusuf_Cahyo_Nusantoro.pdf",
  },
  statistik: [
    { angka: "4 thn", ket: "Pengalaman di Sinar Mas Land" },
    { angka: "250", ket: "Pengguna aplikasi Protrack" },
    { angka: "+30%", ket: "Pengguna Security Inspection" },
    { angka: "{proyek}", ket: "Aplikasi di portofolio" },
  ],
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
  proyek: {
    tampil: true,
    judul: "Proyek Pilihan",
    subjudul: "Satu aplikasi internal yang saya kelola bersama tim PMO, dan tiga aplikasi pribadi yang saya bangun dengan bantuan AI (Claude). Tautan aplikasi tersedia atas permintaan.",
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
          { file: "protrack-2-jadwal.jpg", ket: "Protrack: Project Schedule, baseline dan progres proyek" },
          { file: "protrack-3-task.jpg", ket: "Protrack: daftar task per proyek (nama PIC disamarkan)" },
          {
            file: "protrack-4-status.jpg",
            ket: "Protrack: Overall Status daftar proyek (keterangan status disamarkan)",
          },
        ],
      },
      {
        nama: "Damage Road",
        lencana: "Beta",
        deskripsi: "Dashboard pemantauan kerusakan jalan berbasis gambar DWG hasil Civil 3D: peta satelit titik kerusakan, superimpose versi gambar, filter periode dan ruas, status penanganan, serta rekap biaya perbaikan. Nomor SPK diintegrasikan dari data eksternal. Nilai biaya, nama ruas, dan koordinat pada tampilan disamarkan.",
        tag: ["Civil 3D (DWG)", "Integrasi Data Eksternal", "Dashboard"],
        link: "",
        catatan: "Tautan aplikasi tersedia atas permintaan.",
        gambar: [
          {
            file: "damage-road-4-ringkasan.jpg",
            ket: "Damage Road: ringkasan total titik, status SPK, tren biaya, dan titik per ruas (nilai biaya disamarkan)",
          },
          {
            file: "damage-road-5-rekap.jpg",
            ket: "Damage Road: rekap ruas jalan, progres status issue, dan daftar kerusakan",
          },
          {
            file: "damage-road-3-issues.jpg",
            ket: "Damage Road: daftar issue per ruas dengan kode kerusakan dan saran kerusakan berulang",
          },
          {
            file: "damage-road-6-gambar.jpg",
            ket: "Damage Road: gambar DWG hasil Civil 3D dengan titik kerusakan berwarna per tingkat keparahan",
            posisi: "center",
          },
          {
            file: "damage-road-7-satelit.jpg",
            ket: "Damage Road: superimpose gambar DWG di atas peta satelit dan zona kerusakan berulang",
            posisi: "center",
          },
          { file: "damage-road-1-peta.jpg", ket: "Damage Road: peta sebaran titik kerusakan jalan" },
          {
            file: "damage-road-2-dwg.jpg",
            ket: "Damage Road: superimpose versi gambar DWG dan detail issue (nama ruas dan koordinat disamarkan)",
            posisi: "center",
          },
        ],
      },
      {
        nama: "MyCuan",
        lencana: "",
        deskripsi: "Aplikasi pencatatan keuangan dengan dashboard tren pemasukan dan pengeluaran, anggaran vs realisasi, kunci PIN, foto bukti transaksi, dan sinkronisasi Google Sheets.",
        tag: ["Google Sheets", "Dashboard", "PIN Lock"],
        link: "",
        catatan: "Tautan aplikasi tersedia atas permintaan.",
        gambar: [
          { file: "mycuan-1-saldo.jpg", ket: "Tampilan MyCuan: saldo dan anggaran" },
        ],
      },
      {
        nama: "Dibalik Saham · IDX Screener",
        lencana: "",
        deskripsi: "Screener saham Bursa Efek Indonesia (±900 emiten) dengan skor, filter uptrend dan breakout, chart harian Smart Money Concepts, watchlist, kalender, dan portofolio saham.",
        tag: ["Pasar Modal", "Smart Money Concepts", "Portofolio"],
        link: "",
        catatan: "Dibuat untuk penggunaan pribadi, bukan rekomendasi jual atau beli saham. Tautan aplikasi tersedia atas permintaan.",
        gambar: [
          { file: "idx-screener-1-daftar.jpg", ket: "Tampilan IDX Screener: daftar saham" },
          { file: "idx-screener-2-chart.jpg", ket: "Tampilan IDX Screener: chart harian" },
        ],
      },
    ],
  },
  keahlian: {
    tampil: true,
    judul: "Keahlian",
    subjudul: "Manajemen proyek, produk, dan data.",
    kelompok: [
      {
        judul: "Manajemen Proyek & Produk",
        isi: [
          "Sprint Management",
          "Backlog Management",
          "Pelaporan Manajemen",
          "Validasi & Analisis Data",
          "End to End esting",
        ],
      },
      {
        judul: "Tools",
        isi: ["SAP (input data WBS)", "Jira & Confluence", "Excel", "PowerPoint", "GitHub"],
      },
    ],
  },
  pendidikan: {
    tampil: true,
    judul: "Pendidikan & Pelatihan",
    subjudul: "Fondasi akademik dan pembelajaran berkelanjutan.",
    kelompok: [
      {
        judul: "Pendidikan",
        daftar: [
          {
            nama: "Universitas Gunadarma",
            ket: "S1 Sistem Informasi, IPK 3,51 / 4,00 · 2016–2020 · Asisten Laboratorium 2 tahun",
          },
          { nama: "SMA Nurul Fikri Boarding School", ket: "Jurusan IPA · 2013–2016" },
        ],
      },
      {
        judul: "Pelatihan & Organisasi",
        daftar: [
          { nama: "Quality Assurance", ket: "MySkill · Oktober 2025" },
          { nama: "Belajar Dasar Data Science", ket: "Dicoding · Januari 2024" },
          { nama: "Belajar Dasar Pemrograman Web", ket: "Dicoding · Mei 2022" },
          {
            nama: "Organisasi & Prestasi",
            ket: "Ketua Divisi Bulutangkis FLIGHT612 · Juara 2 O2SN Bulutangkis Kab. Serang · Anggota BSMR & Tapak Suci",
          },
        ],
      },
    ],
  },
  kontak: {
    tampil: true,
    judul: "Mari Terhubung",
    subjudul: "Terbuka untuk peluang di bidang manajemen program, produk, dan analisis data. Jakarta Timur.",
    tombol: [
      { label: "Email Saya", url: "mailto:cahyoyusuf82@gmail.com", utama: true },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/yusufcahyon/" },
    ],
  },
};
