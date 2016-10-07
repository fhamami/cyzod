---
layout: post
category : SQA
tagline: "Software Quality Assurance"
tags : [SQA]
---

{% include JB/setup %}

Saya mencari artikel Software Quality Assurance seletah saya diberikan tawaran untuk menjadi software tester dan saya menerimanya, bisa dibilang bukan pekerjaan yang mudah karena membutuhkan ketelitian dan kesabaran untuk mencari-cari dimana letak bug pada produk yang sedang dibuat sebelum dilempar ke pasar, dan inilah hasil pencarian saya tentang Software Quality Assurance Engineer.

Software Quality Assurance Engineer atau biasa dikenal dengan Software QA Engineer, Software Quality Engineer, SQA Engineer. 

Software Quality Assurance Engineer adalah orang yang memonitor proses software developemnt untuk memastikan kualitas dari software telah sesuai dengan standart dari perusahaan ataupun kesepakatan. SQA juga memastikan produk telah terverifikasi dan tervalidasi sebelum di berikan ke publik atau customer.

[TOC]

## Apa yang dilakukan Software Quality Assurance Engineer?

SQA terlibat diberbagai tugas seperti software design, penulisan source code, kontrol source code, reviewing code, seluruh perubahan dan konfigurasi management, program testing, integrasi software dan release management process. SQA terlibat bertanggung jawab penuh atas kualitas software.

SQA engineers juga harus terlibat pada final product tidak hanya terlibat di proses development namun juga tahu akan budget dari costumer, untuk menghindari delay rilis produk dan memastikan produk sesuai dengan budget.

Software quality assurance engineers are sometimes confused with software testers. Software testers test parts of the software at different stages of development, whereas a software quality assurance engineer oversees the entire development process, which includes software testing, from start to finish. The monetary success of the software product is largely due in part to the quality of the product as well as the product’s ability to hit the market on time. Both are the responsibility of the software quality assurance engineer.

Seringkali terdapat ambiguitas atau kebingungan untuk memaknai antara Software quality assurance engineers dengan software testers. Software tester hanya terlibat pada proses software development saja berbeda dengan Software quality assurance engineers yang terlibat di seluruh proses mulai development sampai release. SQA dan Software tester mempunyai satu tanggung jawab yang sama yaitu bertanggung jawab atas kualitas software.

## Tugas utama

Tugas utama dari seorang software tester atau software quality assurance adalah melakukan pengecekan atau testing terhadap bug di dalam sebuah aplikasi atau program.

Secara singkat ada dua proses yang harus dilakukan oleh software tester untuk mendapatkan hasil produk yang sesuai dengan keinginan pengguna yaitu **Validasi** dan **Verifikasi**:

**Verifikasi** proses untuk mengevaluasi setiap langkah pengembangan untuk menentukan apakah program sudah sesuai dengan kebutuhan (user requirements).

**Validasi** proses evaluasi produk setelah proses pengembangan selesai, apakah sudah sesaui dengan kesepakatan atau belum.

Ada salah satu quote yang cocok dari John Ruskin untuk tugas ini.

> "Quality is never an accident; it is always the result of intelligent effort." - John Ruskin

verifikasi akan menjawab pertayaan "**Have we built the software right?**" apakah kita membangun produk dengan benar?  untuk melihat langkah atau cara dalam membuat suatu produk, sedangkan validasi akan menjawab pertanyaan "**Have we built the right software?**" apakah kita membangun produk yang benar? untuk memastikan produk sesuai dengan keinginan dan kepuasan pengguna.

> User Satisfaction = Kesesuaian produk + kualitas baik + Selesai sesuai dengan budget dan jadwal

Untuk penjabaran tugas dari tester akan dilanjutkan dibawah.

## Seberapa penting Pengujian perangkat lunak itu?

Pengujian perangkat lunak adalah suatu proses yang igunakan untuk mengidentifikasi ketepatan, kelengkapan dan mutu dari perangkat lunak dalam ilmu komputer yang dikembangkan. Pada dasarnya, pengujiann tidak pernah dapat menetapkan kebenaran dari perangkat lunak. Pentingnya pengujian perangkat lunak mengacu pada kualitas dari produk.

## Prinsip Pengujian :

1. Semua pengujian harus dapat ditelusuri hingga ke persyaratan pelanggan
	Sebagai tujuan utama pengujian perangkat lunak yaitu untuk mengungkap kesalahan, berarti kesalahan paling fatal apabila perangkat lunak tidak dapat memenuhi syarat yang ditentukan oleh pelanggan.

2. Pengujian harus direncanakan lama sebelum pengujian itu di mulai.
	Perencanaan pengujian dapat dimulai setelah model persyratan telah dilengkapi. Definisi detail tentang test case dapat di mulai segera setelah model desain di teguhkan. Dengan demikian pengujian dapat direncanakn dan dirancang sebelum pengkodean dilakukan.

3. Prinsip Pareto berlaku untuk pengujian perangkat lunak.
	Prinsip Pareto mengimplikasikan bahwa 80% dari semua kesalahan yang ditemukan selama pengujian, hanya dapat ditelusuri 20% dari semua modul program. Hanya saja kita sulit untuk mengetahui modul yang mengalami kesalahan dan mengujinya dengan teliti.

4. Pengujian harus mulai “dari yang terkecil” dan berkembang ke pengengujian “yang besar”.
	Pengujian biasanya dilakukan terhadap modul program individual. Selagi pengujian berlangsung, maka seluruh modul yang terintegrasi lebih mudah di uji.

5. Pengujian yang mendalam tidak mungkin.
	Jumlah jalur permutasi pada perangkat lunak sangat besar, oleh karena itu sulit untuk melakukan pengujian terhadap semua jalur skema pengujian. Akan tetapi setidaknya kita dapat mengetahui bahwa logika yang tertuang dalam perancangan perangkat lunak itu telah tepat dan memastikan semua kondisi telah teruji.

6. Untuk menjadi paling efektif, pengujian harus dilakukan oleh pihak ketiga yang independent.
	Arti dari “Paling Efektif” adalah pengujian yang memiliki peluang tertinggi untuk menemukan kesalahan. Perekayasa perangkat lunak yang membuat system bukanlah orang yang paling tepat untuk melakukan semua pengujian bagi perangkat lunak

## karakteristik perangkat lunak yang dapat diuji :

1. Operabilitas “Semakin baik dia bekerja semakin efisien dia dapat diuji.”
2. Obserfabilitas “Apa yang anda lihat adalah apa yang anda uji.”
3. Kontrolabilitas “Semakin baik kita dapat mengontrol suatu perangkat lunak, semakin banyak pengujian yang dapat diotomatisasi dan dioptimalkan.”
4. Dekomposabilitas “Dengan mengontrol ruang lingkup pengujian, kita dapat dengan lebih cepat mengisolasi masalah dan melakukan poengujian kembali secara lebih halus.”
5. Kesederhanaan “Semakin seidkit yang diuji, semakin cepat kita dapat mengujinya.”
6. Stabilitas “Semakin sedikit perubahan, semakin sedikit gangguan dalam pengujian.”
7. Kemampuan untuk dapat dipahami “Semakin banyak informasi yang kita miliki, semakin baik pengujian yang akan dilakukan.”

## Stages of Process Software Testing

### Unit Testing

Proses testing yang dilakukan oleh khususnya untuk programmer, untuk menguji setiap fungsi yang telah dibuat telah sesui dengan requirement yang ada. Contoh programmer membuat banyak test case untuk setiap event, procedure, dan function. Test case untuk menguji apakah output dari fungsi sudah tepat. Programmer dapat langsung melakukan Unit Testing setiap kali sebuah kode unit (event, procedure, function) selesai dibuat.

Unit testing bersifat independen dan isolated. Sebuah method/fungsi dikatakan independen jika fungsi tersebut tidak bergantung dengan hasil dari fungsi yang lain. Bersifat isolated jika fungsi yang ditest tidak melakukan akses ke luar, misalkan mengakses file, database, atau koneksi jaringan.

### Integration Testing

Setelah Anda melakukan Unit/Component Testing, langkah berikutnya adalah memeriksa bagaimana unit-unit tersebut bekerja sebagai suatu kombinasi, bukan lagi sebagai suatu unit yang individual. Sebagai contoh, Anda memiliki sebuah proses yang dikerjakan oleh dua function, di mana satu function menggunakan hasil output dari function yang lainnya. Kedua function ini telah berjalan dengan baik secara individu pada Unit Testing. Pada tahap Integration Testing, Anda memeriksa hasil dari interaksi kedua function tersebut, apakah bekerja sesuai dengan hasil yang diharapkan. Anda juga harus memastikan bahwa seluruh kondisi yang mungkin terjadi dari hasil interaksi antarunit tersebut menghasilkan output yang diharapkan.

### System Testing

Mencakup testing aplikasi yang telah selesai di develop. Karena itu, aplikasi harus terlihat dan berfungsi sebagaimana mestinya terhadap end-user atau pengguna akhir. Untuk itu, testing dilakukan dengan menggunakan data yang menggambarkan data yang digunakan oleh pengguna sesungguhnya terhadap aplikasi. Jika aplikasi Anda di-develop untuk lingkungan yang besar, Anda dapat melakukan testing pada dua komputer yang berbeda. Komputer yang Anda gunakan sebagai komputer testing harus terlebih dahulu dikonﬁgurasi hanya dengan:

1. Operating system yang dibutuhkan.
2. Driver yang diperlukan oleh aplikasi.
3. Aplikasi yang dites.

Dengan menggunakan konﬁgurasi yang paling minimal dan sederhana, maka dapat membantu Anda untuk memastikan bahwa permasalahan yang timbul selama testing berlangsung adalah merupakan kesalahan aplikasi, dan bukan kesalahan yang berasal dari aplikasi atau software lain.

### User Acceptance Testing (UAT)

Berbeda dengan Unit testing dan Integration testing yang dilakukan di level source code dan dilakukan oleh programmer, UAT dilakukan pada level aplikasi oleh end-user (client atau product owner). Dalam melakukan UAT, end-user akan memeriksa apakah user interface, flow aplikasi dan data-data yang ditampilkan oleh aplikasi sudah sesuai dengan requirement yang diminta. Testing yang dilakukan merupakan simulasi penggunaan nyata dari aplikasi pada lingkungan yang sebenarnya. Proses ini merupakan salah satu tahap final sebelum pengguna menyetujui dan menerima penerapan sistem aplikasi yang baru. Karena itu pada tahap ini sudah tidak difokuskan untuk mengangkat permasalahan kecil seperti kesalahan pengetikan, ataupun tampilan aplikasi. Hal-hal minor seperti di atas sudah seharusnya ditangani selama Unit/Component Testing dan Integration Testing. Error yang ditemukan pada tahap ini umumnya lebih sulit untuk dilacak sumbernya karena pada tahap ini, output yang dihasilkan oleh aplikasi dihasilkan dari banyak fungsi dan class yang berkomunikasi satu sama lainnya.

### Regression Testing

Merupakan bagian penting dari masing-masing tahap proses testing. Regression Testing mencakup pengujian ulang terhadap unit, component, proses, atau keseluruhan aplikasi setelah perbaikan suatu kesalahan dilakukan. Regression Testing memastikan permasalahan yang terjadi telah ditanggulangi, dan tidak terdapat permasalahan baru yang timbul sebagai efek perbaikan tersebut. Selain itu, tahap ini tidak hanya berguna untuk melakukan pengujian aplikasi, tetapi dapat juga digunakan untuk melakukan pemantauan kualitas dari output yang dihasilkan. Sebagai contoh, Regression Testing memantau ukuran ﬁle, waktu yang dibutuhkan untuk melakukan suatu tes, waktu yang dibutuhkan untuk melakukan kompilasi, danl ain sebagainya.

## Kebutuhan Software Tester

1. **SRS (System Requirement Specification)** adalah dokumen yang menyediakan panduan mengenai spesifikasi requirement sistem yang diinginkan oleh client/user secara lengkap terhadap suatu bagian/keseluruhan aplikasi. Di dalam SRS ini terdapat bahasan mengenai use case description, level, included form, extend, primary actor, precondition, scope, dan sebagainya.

2. **SAD (Software Architecture Document)** adalah dokumen yang menggambarkan desain arsitektur (flow process) secara umum dari modul yang ada dalam sebuah sistem. SAD memuat spesifikasi yang lebih rinci dari dokumen SRS. Di dalam SAD ini terdapat bahasan mengenai overview software, references, architectural representation (screen map, CS Management, Flow chart, database model, sequence diagram, dan class diagram), architectural goals dan constraints, use-case view, logical view, process view, deployment view serta size and performance.

## Perbedaan Testing and Debugging

**Testing** adalah mengidentifikasi bug/error/penyimpangan tanpa memperbaikinya.
**Debugging** adalah mengidentikasi, mengisolasi, dan memperbaiki masalah/bug.

## Tahapan Testing/ Testing Life Cycle

## Start review test case

**Perform testing **: pengetesan test case yang biasanya di awali dengan smoke test (pengetesan tanpa prosedur dalam test case, hanya berdasarkan pengetahuan software tester secara umum saja), lalu kemudian di lanjutkan dengan execution test (yang menggunakan test case). Tujuan dari smoke test ini adalah untuk meminimalisasikan jumlah error apalagi error yang bersifat trivial (salah penulisan, warna atau posisi button/tulisan/form, dan bug-bug kecil lainnya) sebelum execution test.

**Review and Verify test result**, yaitu pelaporan hasil testing kepada team developer.

**Do Bug fixing**, dimana bug-bug atau error yang ditemukan dalam sistem akan di perbaiki oleh developer.

**Re-test and Regression testing**, yaitu testing yang dilakukan setelah bug fixing.

**Produce validation report and release note**, yaitu pelaporan kepada developer ketika sistem sudah dinyatakan bersih dari bug.

**UAT (user acceptance test)** yaitu test case yang dibuat untuk kemudian di test oleh end user sistem tersebut.

## Tugas Software Tester

- Memonitor jalannya proyek software development apakah sudah sesuai dengan standar dan prosedur yang ada.
- Merancang dan membuat test case / skenario software testing
- Melakukan testing sesuai dengan test case / skenario
- Merumuskan dan merancang peningkatkan efisiensi dan efektifitas standar proses yang digunakan
- Design test plans, scenarios, scripts, or procedures.
- Test system modifications to prepare for implementation.
- Develop testing programs that address areas such as database impacts, software scenarios, regression testing, negative testing, error or bug retests, or usability.
- Document software defects, using a bug tracking system, and report defects to software developers.
- Identify, analyze, and document problems with program function, output, online screen, or content.

## Keahlian yang Diperlukan:

- Menguasai hal-hal yang berhubungan dengan software testing (test plan, test case, testing automation, functionality testing, regression testing dll)
- Memahami tentang perinsip kerja software sesuai dengan platformnya masing-masing
- Memahami tentang SDLC dan metodologi software development seperti RUP, Agile, XP, Scrum dll
- Memahami standarisasi seperti CMMI
- Menguasai penulisan dokumen dan komunikasi verbal dengan baik (dalam bahasa Inggris dan Indonesia)


## White box and Black box Testing

**White box**, pengujian untuk memperlihatkan cara kerja dari produk secara rinci sesuai dengan spesifikasinya.

**Black box**, pengujian untuk mengetahui apakah semua fungsi perangkat lunak telah berjalan semestinya sesuai dengan kebutuhan fungsional yang telah didefinsikan

Uji coba blackbox berusaha untuk menemukan kesalahan dalam beberapa kategori, diantaranya :

- Fungsi-fungsi yang tidak benar atau hilang
- Kesalahan interface
- Kesalahan dalam strutur data atau akses basisdata eksternal
- Inisialisasi dan kesalahan terminasi
- Validitas fungsional
- Kesensitifan sistem terhadap nilai input tertentu
- Batasan dari suatu data


## Tipe-tipe bug

**Show-stopper / critical bugs**
Core tidak berfungsi, program tidak mau berjalan, aplikasi stuck/hang/freezing.

**Major Bugs**
Program berjalan namun tidak memiliki performa yang baik atau terjadi kerusakan setelah implementasi.

**Medium Bugs**
Terdapat error pada database, link, dan respon prgram yang lambat

**Low/minor Bugs**
Munculnya bug karena typo ataupun layout error.

<br>
<br>

## Glossary :

**Acceptance Test**
Test yang dilakukan oleh end-user / pengguna terhadap sistem yang baru atau sistem yang telah diubah dengan tujuan memvalidasi sistem yang sedang di testing dan go live (siap dipakai). Dikenal juga sebagai UAT (User Acceptance Test).

**Accessibility Testing**
Pengujian dilakukan untuk memeriksa produk perangkat lunak yang akan dipergunakan oleh orang-orang yang tidak sempurna secara fisik (buta, tuli, cacat mental, dan sebagainya).

**Active Test**
Melakukan test data dan menganalisa hasilnya. Kebalikan dari "Passive Test".

**Ad Hoc Test**
Test non-formal tanpa Test Case, dimana tester mencoba untuk 'break the system' dengan mencoba fungsionalitas sistem secara acak. Dapat mencakup pengujian negatif juga. Lihat juga Monkey-Testing.

**Age Test (aging)**
Mengevaluasi kemampuan sistem dalam melaksanakan tugas2nya di masa yang akan datang. Untuk melakukan test ini, hardware dan/atau data uji coba dimodifikasi ke tanggal yang akan datang.

**Agile Testing**
Praktek pengujian untuk proyek-proyek dengan menggunakan metodologi tagile dimana pengembangan memperlakukan sebagai pelanggan pengujian dan menekankan paradigma rancangan uji-pertama. Lihat juga Test Driven Development.

**Alpha Test**
Tahapan testing paling awal di sebuah laboratorium. Setelah itu, baru release Beta Testing.

**Application Binary Interface (ABI)**
Sekumpulan spesifikasi yang mendefinisikan persyaratan untuk portabilitas aplikasi dalam bentuk biner platform sistem dan lingkungan yang berbeda.

**Application Programming Interface (API)**
Satu set panggilan formal perangkat lunak dan rutinitas yang dapat direferensikan oleh sebuah program aplikasi untuk mengakses sistem pendukung atau layanan jaringan.

**Automated Software Quality (ASQ)**
Penggunaan perangkat lunak, seperti alat-alat tes otomatis, untuk meningkatkan kualitas perangkat lunak.

**Automated Testing**
Pengujian menggunakan perangkat lunak yang melaksanakan tes tanpa intervensi manual.Dapat diterapkan di GUI, kinerja, API, dan lain-lain. Penggunaan perangkat lunak untuk mengontrol pelaksanaan tes, perbandingan hasil aktual dengan hasil prediksi, pengaturan dari prasyarat pengujian, dan pengendalian uji lainnya serta pelaporan fungsi dan hasil uji.

<br>

**Basis Path Testing**
Sebuah teknik untuk merancang uji  kasus white box yang menggunakan aliran algoritma program untuk merancang tes.

**Basis Test**
Sekumpulan pengujian yang diturunkan dari Basis Path Testing.

**Baseline**
Titik di mana beberapa deliverable yang dihasilkan selama proses rekayasa perangkat lunak yang diletakkan di bawah formal change control.

**Benchmark Testing**
Pengujian yang menggunakan perwakilan set program dan data yang dirancang untuk mengevaluasi kinerja dari perangkat keras komputer dan perangkat lunak dalam konfigurasi tertentu.

**Beta Testing **
Test yang dilakukan oleh end users (pengguna akhir). Tahap testing yang dilakukan setelah Alpha Testing.

**Binary Portability Testing**
Pengujian aplikasi yang dieksekusi untuk menguji portabilitas di seluruh platform sistem dan lingkungan, biasanya untuk konformasi ke spesifikasi ABI. 

**Black Box Testing **
Test terhadap software yang didasarkan atas hasil keluarannya saja (output) tanpa pengetahuan mendalam tentang kode-kode atau logika yang terdapat didalam software tersebut. Kebalikan dari "white box test" dan "gray box test."

**Bottom Up Testing**
Sebuah pendekatan untuk pengujian integrasi dimana komponen tingkat terendah diuji terlebih dahulu, kemudian digunakan untuk memfasilitasi pengujian komponen tingkat yang lebih tinggi. Proses ini diulang sampai komponen di bagian atas hirarki diuji. 

**Boundary Testing**
Pengujian yang fokus pada kondisi batas atau membatasi perangkat lunak yang diuji. (Beberapa dari tes ini merupakan stress test). 

**Boundary Value Analysis**
Uji kasus dihasilkan menggunakan ekstrem dari domain input, misalnya maksimum, minimum, hanya di dalam / luar batas, nilai-nilai khas, dan nilai kesalahan. BVA mirip dengan Kesetaraan Partisi namun berfokus pada "kasus sudut". 

**Branch Testing**
Pengujian di mana semua cabang dalam kode sumber program diuji minimal sekali.

**Breadth Testing**
Suatu kumpulan pengujian yang melatih fungsionalitas penuh dari sebuah produk tetapi tidak menguji fitur secara rinci.  

**Bug**
Suatu kesalahan dalam program yang menyebabkan program melakukan suatu aksi yang disengaja atau tidak terduga.

<br>

**CAST**
Computer Aided Software Testing

**Capture / Replay Tool**
Sebuah alat uji yang mencatat masukan tes seperti yang dikirim ke perangkat lunak yang diuji. kasus masukan yang disimpan kemudian dapat digunakan untuk mereproduksi pengujian di lain waktu. Paling sering digunakan untuk alat uji GUI. 

**Cause Effect Graph**
Sebuah representasi grafis dari input dan output yang terkait efek yang dapat digunakan untuk desain uji kasus.

**Code Complete**
Tahap pembangunan dimana fungsi diimplementasikan secara keseluruhan; bug yang tersisa telah diperbaiki. Semua fungsi yang ada di Spesifikasi Fungsional telah dilaksanakan.

**Code Coverage**
Sebuah metode analisis yang menentukan bagian mana dari perangkat lunak telah dilaksanakan (tertutup) oleh suite test case dan bagian mana yang belum dilaksanakan dan karena itu mungkin memerlukan perhatian tambahan. 

**Code Inspection**
Sebuah teknik pengujian formal dimana programmer meninjau source code dengan kelompok yang mengajukan pertanyaan menganalisis logika program, menganalisis kode sehubungan dengan suatu daftar kesalahan pemrograman historis umum, dan menganalisis kelengkapannya dengan standar pengkodean.

**Code Walkthrough**
Sebuah teknik pengujian formal dimana source code ditelusuri oleh kelompok dengan satu set kecil kasus uji, sedangkan keadaan variabel program dimonitor secara manual, untuk menganalisis logika programmer dan asumsi.

**Compatibility Testing**
Pengujian apakah perangkat lunak kompatibel dengan unsur-unsur lain dari sistem yang seharusnya beroperasi, misalnya browser, Sistem Operasi, atau perangkat keras.

**Component**
Item perangkat lunak minimal untuk spesifikasi terpisah yang tersedia.

**Concurrency Testing**
Pengujian oleh banyak pengguna diarahkan untuk menentukan efek dari mengakses kode aplikasi yang sama, modul atau catatan database. Mengidentifikasi dan mengukur tingkat penguncian, deadlocking dan penggunaan kode single-threaded dan penguncian semaphore.

**Conformance Testing**
Proses pengujian yang menguji apakah sebuah implementasi sesuai dengan spesifikasi yang menjadi dasarnya. Biasanya digunakan untuk pengujian kesesuaian dengan standar formal.

**Context Driven Testing**
konteks berbasis pengujian perangkat lunak dengan sifat Agile ,dimana Pengujian yang menganjurkan evaluasi terus menerus dan kreatif memanfaatkan peluang pengujian dalam mengungkapkan informasi potensi dan nilai informasi yang bagi organisasi sekarang.

**Conversion Testing**
Pengujian program atau prosedur yang digunakan untuk mengkonversi data dari sistem yang ada untuk digunakan dalam sistem penggantian.

**Cyclomatic Complexity**
Sebuah ukuran kompleksitas logis dari sebuah algoritma, yang digunakan dalam pengujian white box.

<br>

**Data Driven Testing**
Pengujian di mana tindakan kasus uji dengan nilai parameter data eksternal didefinisikan, dipertahankan sebagai file atau spreadsheet. Suatu teknik umum dalam Automated Testing.

**Debugging**
Proses untuk menemukan dan menghapus penyebab kegagalan perangkat lunak.

**Defect**
Ketidaksesuaian dengan persyaratan atau fungsional / spesifikasi program.

**Dependency Testing**
Meneliti persyaratan sebuah aplikasi untuk perangkat lunak yang sudah ada, keadaan awal dan konfigurasi untuk mempertahankan fungsi yang tepat.

**Depth Testing**
Sebuah pengujian yang menguji suatu fitur dari produk secara rinci.

**Dynamic Testing**
Pengujian perangkat lunak dengan menjalaninya. Lihat juga Static Testing.

<br>

**Environment Test**
Test sebuah software baru yang menentukan apakah semua transaksi antara input, output dan media penyimpanan berjalan sebagaimana mestinya.

**Endurance Testing**
Memeriksa kebocoran memori atau masalah lainnya yang mungkin terjadi dengan eksekusi yang berkepanjangan.

**End-to-End Testing**
Pengujian lingkungan aplikasi lengkap dalam situasi yang meniru menggunakan dunia nyata, seperti berinteraksi dengan database, menggunakan komunikasi jaringan, atau berinteraksi dengan perangkat keras lain, aplikasi, atau sistem jika sesuai.

**Equivalence Class**
Sebagian dari komponen masukan atau keluaran domain yang perilaku komponen diasumsikan sama dari spesifikasi komponen.

**Equivalence Partitioning**
Teknik perancangan uji kasus untuk komponen di mana uji kasus dirancang untuk melaksanakan perwakilan dari equivalence class.

**Error**
Sebuah kesalahan dalam sistem yang diuji, biasanya tetapi tidak selalu kesalahan coding di pihak pengembang.

**Exhaustive Testing**
Pengujian yang mencakup seluruh kombinasi nilai input dan prasyarat untuk sebuah elemen dari perangkat lunak yang diuji.

<br>

**Functional Testing**
- Pengujian fitur dan perilaku operasional produk untuk memastikan mereka sesuai dengan spesifikasinya.
- Pengujian yang mengabaikan mekanisme internal sistem atau komponen dan hanya berfokus pada keluaran yang dihasilkan sebagai respon terhadap input yang dipilih dan kondisi eksekusi.

**Fuzz Test**
Test terhadap software bugs dengan memberikan data yang dihasilkan secara acak.

**Functional Specification**
Sebuah dokumen yang menjelaskan secara rinci karakteristik produk berkenaan dengan fitur yang dimaksudkan.

<br>

**Gray Box Test**
Uji coba software dengan adanya pengetahuan di kode / logika internal softwaretersebut. Kebalikan dari "white box test" dan "black box test."

**Glass box Testing**
Sinonim untuk White Box Testing.

**Gorilla Testing**
Pengujian satu modul tertentu dengan fungsi berat.

**Gray Box Testing**
Sebuah kombinasi metodologi pengujian Black Box dan White Box; pengujian perangkat lunak terhadap spesifikasi, tetapi menggunakan beberapa pengetahuan tentang cara kerja internal.

<br>

**Independent Test Group (ITG)**
Sekelompok orang dengan tanggung jawab utama adalah menguji perangkat lunak.

**Inspection**
Suatu kelompok yang meninjau peningkatan kualitas proses untuk bahan tertulis. Ini terdiri dari dua aspek; peningkatan produk (dokumen itu sendiri) dan perbaikan proses (baik dokumen produksi dan inspeksi).

**Integration Testing**
Pengujian dari gabungan bagian suatu aplikasi untuk menentukan apakah mereka berfungsi bersama-sama dengan benar. Biasanya dilakukan setelah unit dan pengujian fungsional. Jenis pengujian sangat relevan dengan klien / server dan sistem terdistribusi.

**Installation Testing**
Memastikan bahwa aplikasi di bawah pengujian dapat pulih dari kejadian yang diharapkan atau tidak terduga tanpa kehilangan data atau fungsi. Kejadian dapat mencakup kekurangan disk space, komunikasi yang loss, atau kondisi kehilangan daya.

<br>

**Localization Testing**
Istilah ini mengacu pada pembuatan perangkat lunak yang khusus dirancang untuk suatu tempat tertentu.

**Loop Testing**
Suatu teknik pengujian white box yang melatih loop program.

<br>

**Metric**
Sebuah standar pengukuran. Metrik Perangkat Lunak adalah statistik yang menggambarkan struktur atau isi program. Sebuah metrik harus menjadi pengukuran yang objektif yang nyata dari sesuatu seperti jumlah bug per baris kode.

**Monkey Testing**
Pengujian sistem atau aplikasi on the fly, yaitu pengujian hanya beberapa di sini dan di sana untuk memastikan sistem atau sebuah aplikasi tidak crash atau rusak.

**Mutation Testing**
Pengujian dilakukan pada tempat bug yang sengaja ditambahkan ke dalam aplikasi.

<br>

**Negative Test / Dirty Test**
Menggunakan inputan yang salah/tidak sesuai untuk mengetes kemampuan error handling program.

**N +1 Testing**
Sebuah variasi dari Regression Testing. Pengujian dilakukan dengan beberapa siklus di mana kesalahan yang ditemukan dalam uji siklus N diselesaikan dan solusinya diuji ulang dalam siklus uji N +1. Siklus biasanya diulang sampai larutan mencapai kondisi stabil dan tidak ada kesalahan. Lihat juga Regresi Pengujian.

<br>

**Passive Test**
Memonitor hasil dari sistem yang sedang berjalan tanpa melakukan tes data yang unik terhadap sistem. Kebalikan dari "active test".

**Path Testing**
Pengujian di mana semua jalur dalam kode sumber program diuji minimal sekali.

**Performance Testing**
Pengujian dilakukan untuk mengevaluasi pemenuhan sistem atau komponen dengan persyaratan kinerja yang ditetapkan. Seringkali hal ini dilakukan dengan menggunakan alat tes otomatis untuk mensimulasikan sejumlah besar pengguna. Juga dikenal sebagai "Load Testing".

**Positive Testing**
Pengujian bertujuan untuk menampilkan karya perangkat lunak. Juga dikenal sebagai "uji untuk lulus". Lihat juga Negative testing.

<br>

**Quality Assurance**
Semua tindakan yang direncanakan atau sistematik yang diperlukan untuk memberikan keyakinan memadai bahwa suatu produk atau jasa adalah jenis dan kualitas yang diperlukan dan diharapkan oleh pelanggan.

<br>

**Recovery Test**
Menguji kemampuan sistem untuk recover/pulih dari hardware atau software failure. Misalnya, gagal booting, overheat, overload data processing, transaksi putus karena koneksi down, dll. Apa yang akan terjadi?.

**Regression Test**
Menguji coba software yang telah direvisi untuk melihat apakah fungsi-fungsi sebelumnya dapat berjalan dengan baik atau mengalami pengaruh.

<br>

**Smoke Test**
Menyalakannya dan melihat apa yang terjadi. (Testing untuk harware)

**System Test**
Testing keseluruhan di laboratorium dan di lingkungan pengguna (user environment).

<br>

**Ramp Testing**
Terus meningkatkan sinyal input hingga sistem rusak.

**Recovery Testing**
Memastikan bahwa program pulih dari kejadian yang diharapkan atau tidak terduga tanpa kehilangan data atau fungsi. Acara dapat mencakup kekurangan disk space, kerugian tak terduga komunikasi, atau kekuasaan di luar kondisi.

**Regression Testing**
pengujian ulang program sebelumnya diuji berikut modifikasi untuk memastikan bahwa kesalahan belum diperkenalkan atau ditemukan sebagai hasil dari perubahan yang dilakukan.

<br>
 
**Sanity Testing**
Pengujian singkat dari elemen fungsional utama ebuah software untuk menentukan apakah dasarnya operasionalnya. Lihat juga Smoke Testing.

**Scalability Testing**
Pengujian kinerja difokuskan untuk memastikan aplikasi yang diuji dengan tepat menangani peningkatan beban kerja.

**Security Testing**
Pengujian yang menegaskan bahwa program ini dapat membatasi akses ke petugas yang berwenang dan bahwa personil yang berwenang dapat mengakses fungsi yang tersedia untuk tingkat keamanan mereka.

**Smoke Testing**
Sebuah tes cepat untuk menguji fungsi utama dari sebuah pekerjaan perangkat lunak. Berasal dalam praktek pengujian perangkat keras dari menyalakan sepotong hardware baru untuk pertama kalinya dan sukses jika tidak rusak.

**Soak Testing**
Menjalankan sistem pada beban tinggi untuk jangka waktu lama. Misalnya, menjalankan beberapa kali transaksi lebih dalam satu hari (atau malam) dari yang diharapkan pada hari yang sibuk, untuk mengidentifikasi dan masalah kinerja yang muncul setelah sejumlah besar transaksi telah dilaksanakan.

**Static Testing**
Analisis program dilakukan tanpa menjalankan program.

**Storage Testing**
Pengujian yang memverifikasi program yang diuji menyimpan data file dalam direktori yang benar dan bahwa cadangan ruang yang cukup untuk mencegah pemutusan tidak diharapkan yang disebabkan kurangnya ruang. Hal ini penyimpanan eksternal dibandingkan dengan penyimpanan internal.

**Stress Testing**
Pengujian dilakukan untuk mengevaluasi sistem atau komponen pada atau di luar batas persyaratan tertentu untuk menentukan beban dimana gagal dan bagaimana bisa gagal  Seringkali ini adalah kinerja pengujian menggunakan tingkat simulasi beban yang sangat tinggi.

**Structural Testing**
Pengujian berdasarkan analisis kerja internal dan struktur dari sebuah software. Lihat juga White Box Testing.

**System Testing**
Pengujian yang mencoba untuk menemukan cacat yang properti dari seluruh sistem dan bukan dari komponen individu.

<br>

**Testability**
Tingkat dimana suatu sistem atau komponen memfasilitasi pembentukan kriteria pengujian dan kinerja tes untuk menentukan apakah kriteria tersebut telah dipenuhi.

**Test Bed**
Sebuah lingkungan eksekusi dikonfigurasi untuk pengujian. Dapat terdiri dari hardware tertentu, OS, topologi jaringan, konfigurasi dari produk yang diuji, aplikasi lain atau sistem software, dll Rencana uji sebuah proyek harus disebutkan tempat tidur menguji (s) yang akan digunakan.

**Test Case**
Sekumpulan data percobaan, program percobaan dan hasil tes yang diharapkan.
- Uji Kasus adalah istilah yang biasa digunakan untuk tes tertentu. Hal ini biasanya unit terkecil dari pengujian. Kasus Test akan terdiri dari informasi seperti persyaratan pengujian, langkah uji, langkah verifikasi, prasyarat, output, uji lingkungan, dll
- Satu set input, prasyarat pelaksanaan, dan hasil yang diharapkan dikembangkan untuk tujuan tertentu, seperti untuk latihan jalur program tertentu atau untuk memverifikasi sesuai dengan kebutuhan yang spesifik.

**Test Driven Development**
Pengujian metodologi yang terkait dengan Agile Programming di mana setiap serangkaian kode tertutup oleh unit test, yang semua harus lulus semua waktu, dalam upaya untuk menghilangkan unit-level dan bug regresi selama pengembangan. Praktisi TDD menulis banyak tes, yaitu jumlah yang sama dari baris kode uji untuk ukuran dari kode produksi.

**Test Driver**
Sebuah program atau alat uji yang digunakan untuk melaksanakan tes. Juga dikenal sebagai Harness Test.

**Test Environment**
Perangkat keras dan perangkat lunak di mana tes akan dijalankan, dan semua perangkat lunak lain dengan yang perangkat lunak yang diuji berinteraksi ketika sedang diuji termasuk stub dan driver test.

**Test First Design**
desain Uji-pertama adalah salah satu praktik wajib Extreme Programming (XP) ini mengharuskan programmer tidak menulis kode produksi sampai mereka memiliki tes unit tertulis pertama kali.

**Test Harness**
Sebuah program atau alat uji yang digunakan untuk melaksanakan tes. Juga dikenal sebagai Test Driver.

**Test Plan**
Sebuah dokumen yang menjelaskan ruang lingkup, pendekatan, sumber daya, dan jadwal kegiatan pengujian dimaksud. Ini mengidentifikasi item pengujian, fitur yang akan diuji, tugas pengujian, yang akan melakukan tugas masing-masing, dan setiap risiko yang membutuhkan perencanaan darurat. Ref IEEE Std 829.

**Test Procedure**
Sebuah dokumen yang memberikan petunjuk rinci untuk pelaksanaan satu atau lebih kasus uji.

**Test Scenario**
Sekumpulan dari Test Case atau serangkaian kasus uji atau skrip test dan urutan di mana mereka akan dieksekusi.

**Test Script**
Umumnya digunakan untuk merujuk petunjuk untuk tes tertentu yang akan dilakukan oleh alat tes otomatis.

**Test Spesification**
Sebuah dokumen yang menentukan pendekatan tes untuk fitur perangkat lunak atau kombinasi atau fitur dan input, hasil prediksi dan kondisi eksekusi untuk pengujian terkait.

**Test Suite**
Kumpulan dari Test Case dan Tes Scenario yang telah dirangkum dengan detail. atau sebuah kumpulan tes yang digunakan untuk memvalidasi perilaku produk. Ruang lingkup Suite Test bervariasi dari organisasi ke organisasi. Mungkin ada beberapa uji Suites untuk produk tertentu misalnya. Dalam kebanyakan kasus Namun Suite Test adalah sebuah konsep tingkat tinggi, pengelompokan bersama ratusan atau ribuan tes terkait dengan apa yang mereka dimaksudkan untuk menguji.

**Test Tools**
Program komputer yang digunakan dalam pengujian sistem, komponen dari sistem, atau dokumentasinya.

**Thread Testing**
Sebuah variasi pengujian top-down dimana integrasi progresif komponen mengikuti pelaksanaan subset persyaratan, yang bertentangan dengan integrasi komponen oleh tingkat berturut-turut lebih rendah.

**Top Down Testing**
Sebuah pendekatan untuk pengujian integrasi dimana komponen di bagian atas hirarki komponen diuji pertama, dengan komponen tingkat rendah yang ditinjau oleh stub. komponen diuji kemudian digunakan untuk menguji komponen tingkat yang lebih rendah. Proses ini diulang sampai komponen tingkat terendah telah diuji.

**Total Quality Management**
Sebuah komitmen perusahaan untuk mengembangkan proses yang mencapai produk berkualitas tinggi dan kepuasan pelanggan.

**Traceability Matrix**
Sebuah dokumen yang menunjukkan hubungan antara Tes Persyaratan dan Kasus Uji

**Unit Test**
Tes yang hanya dilakukan untuk satu komponen saja dalam suatu sistem. Kebalikan dari "system test."

<br>

**White Box Test**
Tes sebuah software dengan pengetahuan lengkap akan kode-kode / logikal-logika yang terdapat didalam software yang diujicoba. Kebalikan dari "black box test" and "gray box test."

- - -

> Reference: <br>
https://sqaindonesia.wordpress.com/category/software-quality-assurance/ <br>
https://medium.com/@aufaa/apa-itu-software-error-bug-dan-defect-5c9522178b84#.ykex28j7i <br>
https://susielvina.wordpress.com/2013/11/25/seberapa-penting-sih-pengujian-perangkat-lunak-itu/ <br>
