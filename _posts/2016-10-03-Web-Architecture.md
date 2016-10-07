---
layout: post
category : Web
tagline: "Arsitektur Website"
tags : [Web]
---

{% include JB/setup %}

Arsitektur Website adalah struktur rancangan (desain) web agar dapat tersusun suatu informasi yang tepat (terorganisasi) dan mudah ditemukan isinya. Melibatkan teknis, kriteria estetis dan fungsional. Seperti dalam arsitektur tradisional, fokusnya yaitu pada pengguna dan kebutuhan pengguna. Hal ini memerlukan perhatian khusus pada konten web, rencana bisnis, kegunaan, desain interaksi, informasi dan desain arsitektur web. Untuk optimasi mesin pencari yang efektif perlu memiliki apresiasi tentang bagaimana sebuah situs Web terkait dengan World Wide Web.

Pertimbangan besarnya dari kebutuhan dan batasan dalam pembangunan sebuah web meliputi:

- Kebutuhan fungsional
- Kebutuhan kualitas
- Integrasi dengan sistem yang telah ada
 
Sejak web perencanaan, isi, desain dan manajemen datang dalam lingkup metode desain, seperti yang mereka lakukan arsitektur fisik dan disiplin desain lainnya. Dan sekarang kita menggunakan teknologi web 2.0. Perkembangan yang sangat cepat!

Kategori arsitektur web :

- **Aspek Layering** yaitu software distrukturkan dalam beberapa tier atau tingkatan untuk mengimplementasikan pemisahan urusan
- **Aspek data**, terbagi dua yaitu secara terstruktur seperti relasional database dan XML, dan secara non struktur meliputi konten multimedia dan gambar, audio, video.

Komponen arsitektur aplikasi web dasar yaitu:

- **Client** : biasanya browser
- **Firewall** : software yang mengatur jaringan internet dengan LAN perusahaan
- **Proxy** : untuk menyimpan halaman web pada cache
- **Web server** : bagian pendukung protokol web untuk memproses permintaan client
- **Database server** : menyediakan data dalam bentuk terstruktur
- **Media server** : untuk content streaming data besar yang tidak terstruktur
- **Content management server** : menangani content untuk melayani aplikasi
- **Aplikasi server** : melayani permintaan akses dari komputer client

Standar utama untuk penerapan web services:

- **SOAP (Simple Object Access Protocol)** suatu bahasa versi bebas dari protokol RPC (Remote Procedure Caoll) yang berguna untuk proses transaksi melalui HTTP standar.
- **WSDL (Web Services Description Language)** bahasa yang memungkinkan berbagai dokumen yang dibuat dalam aplikasi yang berbeda dapat berkomunikasi.
- **UDDI (Universal Description Discovery and Integration)** semacam direktori global untuk mengelola web services.

## Bagian-bagian dari arsitektur website :

### HTTP (HyperText Transfer Protocol)

HTTP adalah sebuah protokol jaringan lapisan aplikasi yang digunakan untuk sistem informasi terdistribusi, kolaboratif, dan menggunakan hipermedia. Penggunaannya banyak pada pengambilan sumber daya yang saling terhubung dengan tautan, yang disebut dengan dokumen hiperteks, yang kemudian membentuk World Wide Web pada tahun 1990 oleh fisikawan Inggris, Tim Berners-Lee.

Sederhanyanya HTTP adalah protokol yang digunakan untuk berkomunikasi antara client dan server. Sebuah client HTTP seperti web browser, biasanya memulai permintaan dengan membuat hubungan `TCP/IP` ke port tertentu di tempat yang jauh. Sebuah server HTTP yang mendengarkan di `port` tersebut menunggu client mengirim kode permintaan (request) yang akan meminta halaman yang sudah ditentukan, diikuti dengan pesan `MIME` yang memiliki beberapa informasi `header code` yang menjelaskan aspek dari permintaan tersebut, diikut dengan `body` dari data tertentu.

HTTP berkomunikasi melalui `TCP/IP`. Klien HTTP terhubung ke server HTTP menggunakan TCP. Setelah membuat sambungan, klien dapat mengirim pesan permintaan HTTP ke server. HTTP digunakan untuk mengirimkan permintaan dari klien web (browser) ke web server, dikembali kan ke konten web (halaman web) dari server ke klien.

#### Protokol HTTP memiliki beberapa versi :

- `HTTP/1.0` yang menggunakan koneksi terpisah untuk setiap dokumen
- `HTTP/1.1` yang dapat menggunakan koneksi yang sama untuk melakukan transaksi. Dengan demikian, HTTP/1.1 bisa lebih cepat karena tidak membuatan koneksi berulang-ulang.
- `HTTP/2.0`

Pengembangan standar HTTP dilaksanakan oleh Konsorsium **World Wide Web (World Wide Web Consortium/W3C)** dan juga **Internet Engineering Task Force (IETF)**, yang berujung pada publikasi beberapa dokumen `Request for Comments (RFC)`.

Contoh bagan arsitektur http saat live streaming:

![](http://3.bp.blogspot.com/-72pa7jsmajc/U1OYiF4mhSI/AAAAAAAAATc/6ZvKJ8adEjA/s1600/HTTP-Live-Streaming-Architecture.jpg)

### Hypertext Transfer Protocol Security (HTTPS)

HTTPS adalah penggabungan antara Hypertext Transfer Protocol (HTTP) dengan `SSL/TLS` protokol. Semua komunikasi yang dilakukan melalui HTTPS akan `dienkripsi` dengan tujuan untuk keamanan saat terjadi transaksi data di internet. Biasanya para hacker atau peretas internet yang biasa menggunakan tool WireShak sangat mudah untuk mencuri data dari klien yang terhubung ke internet dengan menggunakan HTTP. Berbeda dengan HTTPS, semua akses akan sangat sulit diproses dan menangkap data oleh para pencuri website.

Contoh bagan arsitektur HTTPS support HTTP:

![](http://2.bp.blogspot.com/-CMvuo1srI_g/U1OZM16vAQI/AAAAAAAAATs/luSVLA-Ig5I/s1600/http+architecture.gif)


### HTML (Hyper Text Markup Language)

sebuah bahasa markup yang digunakan untuk membuat sebuah halaman web dan menampilkan berbagai informasi di dalam sebuah browser Internet. Bermula dari sebuah bahasa yang sebelumnya banyak digunakan di dunia penerbitan dan percetakan yang disebut dengan **SGML (Standard Generalized Markup Language)**, HTML adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web. HTML saat ini merupakan standar Internet yang didefinisikan dan dikendalikan penggunaannya oleh **World Wide Web Consortium (W3C)**. HTML berupa kode-kode tag yang menginstruksikan browser untuk menghasilkan tampilan sesuai dengan yang diinginkan. 

Sebuah file yang merupakan file HTML dapat dibuka dengan menggunakan browser web seperti Mozilla Firefox, Safari, Chrome, Opera, UC Browser dll. 

HTML merupakan suatu metoda untuk mengimplementasikan konsep hypertext dalam suatu naskah atau dokumen. HTML sendiri bukan tergolong pada suatu bahasa pemrograman karena sifatnya yang hanya memberikan tanda (marking up) pada suatu naskah teks dan bukan sebagai program.

Contoh bagan arsitektur HTML pada HTML5:

![](http://1.bp.blogspot.com/-SwTHhfM4lR4/U1OY93dL3gI/AAAAAAAAATk/vNWdVZIytOg/s1600/html5+architecture.png)

#### Perkembangan HTML

- HTML versi 1.0 ini adalah versi pertama sejak lahirnya nama html tersebut, memiliki sebuah kemampuan untuk heading, paragraph, hypertext, bold dan italic text, wrapping serta memiliki dukungan dalam peletakan sebuah gambar
- HTML versi 2.0 pada 14 Januari 1996, pada versi ini ada beberapa tambahan kemampuan diantaranya penambahan form comment, hal ini menyebabkan adanya sebuah interaktif dan mulai dari versi ini yang menjadikan sebuah pioneer dalam perkembangan homepage interaktif.
- Tak lama kemudian HTML versi 3.0 dirilis pada 18 Desember 1997 yang sering disebut sebut sebagai HTML+ yang mempunyai kemampuan dalam beberapa fasilitas diantaranya adalah penambahan fitur table dalam paragraph, akan tetapi versi ini tidak bertahan lama.
- Dan pada bulan Mei 1996 dikeluarkan versi baru sebagai pengganti dan penyampurnaan versi 3.0 ini yaitu HTML versi 3.2, keluarnya versi ini dikarenakan adanya beberapa kasus yang timbul pada pengembang browser yang telah melakukan pendekatan dengan cara lain yang justru hal tersebut menjadi popular, maka di bakukan versi 3.2 untuk mengakomodasi praktek yang banyak digunakan oleh pengembang browser dan diterima secara umum, dapat dikatakan bahwa versi 3.2 ini merupakan versi 3.0 yang dikembangkan oleh beberapa pengembang browser seperti Netscape dan Microsoft.
- Nah yang terakhir perombakan terjadi pada tahun 1999 tepatnya tanggal 24 Desember yaitu HTML versi 4.0, seperti yang kita kenal HTML pada saat ini penambahan link, meta, imagemaps , image dan lain lain sebagai penyempurnaan versi 3.2
- Pada tanggal 4 Maret 2010, terdapat sebuah informasi bahwasanya HTML versi 5.0 masih dikembangkan oleh W3C (World Wide Web Consortium) dan IETF (Internet Engineering Task Force) yaitu sebuah organisasi yang menangani HTML sejak versi 2.0

### Internet 

Sebuah jaringan komputer yang terdiri dari berbagai macam ukuran jaringan komputer di seluruh dunia mulai dari sebuah PC, jaringan-jaringan lokal berskala kecil, jaringan-jaringan kelas menegah, hingga jaringan-jaringan utama yang menjadi tulang punggung internet seperti **NSFnet**, **NEARnet**, **SURAnet**, dan lain-lain.

### Web server

Web server merupakan software yang memberikan layanan data yang berfungsi menerima permintaan HTTP atau HTTPS dari klien yang dikenal dengan browser web dan mengirimkan kembali hasilnya dalam bentuk halaman - halaman web yang umumnya berbentuk dokumen HTML.

Fungsi utama sebuah web server adalah untuk mentransfer berkas atas permintaan pengguna melalui protokol komunikasi yang telah ditentukan. Disebabkan sebuah halaman web dapat terdiri atas berkas teks, gambar, video, dan lainnya pemanfaatan server web berfungsi pula untuk mentransfer seluruh aspek pemberkasan dalam sebuah halaman web yang terkait termasuk di dalamnya teks, gambar, video, atau lainnya.

Pengguna, biasanya melalui aplikasi pengguna seperti peramban web, meminta layanan atas berkas ataupun halaman web yang terdapat pada sebuah web server, kemudian server sebagai manajer layanan tersebut akan merespon balik dengan mengirimkan halaman dan berkas-berkas pendukung yang dibutuhkan, atau menolak permintaan tersebut jika halaman yang diminta tidak tersedia.

Saat ini umumnya web server telah dilengkapi pula dengan mesin penerjemah bahasa skrip yang memungkinkan server web menyediakan layanan situs web dinamis dengan memanfaatkan pustaka tambahan seperti Python, PHP, JavaScript, ASP, dll.

Pemanfaatan web server saat ini tidak terbatas hanya untuk publikasi situs web dalam World Wide Web (WWW), pada prakteknya server web banyak pula digunakan dalam perangkat-perangkat keras lain seperti printer, router, kamera web yang menyediakan akses layanan http dalam jaringan lokal yang ditujukan untuk menyediakan perangkat manajemen serta mempermudah peninjauan atas perangkat keras tersebut.

Contoh bagan arsitektur Web Server:

![](http://3.bp.blogspot.com/-2nCVz0_KzKA/U1OaU5RtI8I/AAAAAAAAAUU/oBvjf-hXqLc/s1600/web+server+arsitektur.jpg)

Dalam Pengertian Web server, terdapat jenis-jenis paket software yang digunakan di internet yaitu :

- Microsoft Windows Server 2003 Internet Information Services
- Apache Tomcat
- Xitami Web Server
- Zeus Web Server
- Lighttpd
- Sun Java System Web Server
- Apache Web Server

Dalam Pengertian Web Server, terdapat beberapa syarat yang perlu diperhatikan agar sebuah web server ini bisa berfungsi dengan baik dan berjalan sempurna yaitu :

- Mempunyai RAM yang kapasitas sangat besar
- Memiliki kecepatan akses yang sangat tinggi
- Mempunyai alamat internal yang tidak berubah (bersifat permanen)
- Memiliki hardisk yang berkapasitas cukup besar

Ada tiga macam log yang harus diperhatikan dalam memonitor kegiatan web server yaitu sebagai berikut :

1. Access log adalah file yang berfungsi untuk mencatat semua akses yang dilakukan terhadap web server. Selain itu, data yang diambil dari file ini kemudian diproses menjadi data statistik yang mudah dibaca dan dimengerti orang.

2. Server log adalah file yang berfungsi untuk mencatat kejadian-kejadian tertentu pada web server. Tetapi, file ini hanya diperiksa jika ternyata webserver ini terjadi kesalahan. Selain itu, server log merupakan logging yang dilakukan oleh server dalam pencatatan file/messages/log.

3. Error log adalah file yang berfungsi untuk mencatat setiap kesalahan yang terjadi pada web server, apakah kesalahan terjadi pada file konfigurasi yang berupa kesalahan pada pembuatan webnya. File ini merupakan pesan-pesan kesalahan dan pemberitahuan pengoperasian httpdnya. Dengan melihat error.log, maka akan diketahui bahwa web mengalami kesalahan pada waktu pembuatan.

Kegunaan yang utama pada Pengertian Web server ini adalah mentransfer berkas atas permintaan pengguna melalui protokol komunikasi (HTTP) yang telah ditentukan. Selain itu, web server berfungsi untuk mentransfer seluruh berkas/file dalam sebuah halaman web yang saling terkait misalnya di dalamnya terdapat teks, video, gambar dan lainnya. Pengguna pada web browser, biasanya meminta layanan atas halaman web atau berkas yang terdapat pada sebuah server web, kemudian server sebagai manajer layanan tersebut akan mengirimkan kembali halaman dan berkas-berkas pendukung yang dibutuhkan. Apabila halaman/berkas yang diminta tidak tersedia, maka permintaan tersebut akan ditolak.

Fitur-fitur yang ditawarkan dalam Pengertian Web server, yaitu :

- HTTP
- Logging
- Virtual Hosting
- Pengatur Bandwith
- Otentifikasi
- Kompresi Konten
- Dukungan HTTPS

Salah satu software web server gratisan (freeware) yang mempunyai dukungan teknis dari pembuatnya dan dilengkapi dengan dokumentasi dinamakan Web server Apache. Pengertian Web server ini mempunyai kelebihan yaitu antara lain :

- Mampu beroperasi pada berbagai platform sistem operasi.
- Mempunyai satu file konfigurasi sehingga mudah mengkonfigurasi.
- Mudah dalam proses instalasi apabila dibandingkan dengan web server lainnya.
-Mudah dalam menambahkan periferal lainnya ke dalam platform web server.

Ciri khas dari web server Apache ini adalah sebagai berikut :

- Server Apache dapat berkomunikasi otomatis dengan client browsernya untuk menunjukkan yang tampilan terbaik.
- Apache menyediakan feature untuk multihomed dan virtual server.
- Apache mampu dikompilasi sesuai dengan spesifikasi HTTP yang sekarang.
- Dapat dijadikan sebagai pengganti bagi NCSA web server.
- Apache mempunyai level-level pengamanan.
- Memiliki dukungan teknis melalui web.
- Memiliki kompatibilitas platform yang tinggi.
- Mendukung adanya third party berupa modul-modul tambahan.

### Web browser

Web Browser atau yang lebih dikenal browser adalah suatu program atau aplikasi yang digunakan untuk menjelajahi Internet atau untuk mencari sebuah informasi dari suatu halaman Web/Blog. Awalnya Web Browser hanya berorientasi pada teks dan belum dapat menampilkan gambar. Namun, Web Browser sekarang tidak hanya menampilkan text dan gambar tetapi juga file multimedia seperti video dan suara. Browser juga dapat mengirim dan menerima e-mail, mengelola bahasa HTML (Hyper Text Markup Language) sebagai input, dan menjadikan halaman Web sebagai hasil output yang informatif.

Browser juga bisa disebut sebagai Jembatan antara pengguna Internet dengan Internet tanpa browser ini mustahil para pengguna internet dapat memanfaatkan Internet. Dengan menggunakan web browser ini juga, para pengguna Internet juga dapat mengakses dan memanfaatkan berbagai informasi yang terdapat di internet dengan mudah.

Contoh bagan arsitektur Web Browser:

![](http://2.bp.blogspot.com/-OL-5Dkc4_j4/U1OaCMfhdsI/AAAAAAAAAUM/mAa81wkeS9s/s1600/web+browser+architecture.gif)

### Semantic Web

Menurut Jhon Markoff, Semantic web adalah sekumpulan teknologi yang menawarkan cara baru yang efisien dalam membantu komputer mengorganisasi dan menarik kesimpulan dari data online. Melalui web semantik inilah berbagai perangkat lunak akan mampu mencari, membagi, dan mengintegrasi informasi dengan cara yang lebih mudah.

Jadi, semantic web adalah perkembangan dari www ( world wide web ) pada tahun 2002, dimana konten web yang di tampilkan tidak hanya dengan format bahasa manusia yang umum tetapi juga bisa di baca dan digunakan oleh bahasa mesin.

Pembuatan web semantik dimungkinkan dengan adanya sekumpulan standar yang dikoordinasi oleh **World Wide Web Consortium (W3C)**. Standar yang paling penting dalam membangun Semantic Web adalah `XML`, `XML Schema`, `RDF`, `OWL`, dan `SPARQL`.

`Web 3.0` memiliki beberapa standar operasional untuk bisa menjalankan fungsinya dalam menampung metadata. Misalnya `Resource Description Framework (RDF)` dan `Web Ontology Language (OWL)`. 

Dibalik teknologi web semantik peran `RDF (Resource Description Framework)` adalah untuk mendefinisikan format metadata yang terdiri dari beberapa komposisi yaitu :

- subject,
- predicate, dan
- object.

`Subject` dan `object` adalah entitas yang ditunjukkan oleh teks (Media Iptek, 2006). Sedangkan `predicate` adalah komposisi yang menerangkan sudut pandang dari subject yang dijelaskan object. Hal yang paling menarik dari `RDF` yaitu object dapat menjadi subject yang nantinya diterangkan oleh object yang lainnya. Sehingga object atau masukan dapt diterangkan secara jelas dan detail, serta sesuai dengan keingingan pengguna yang memberikan masukan.

Semantic web merujuk kepada kemampuan aplikasi komputer untuk lebih memahami bahasa manusia, bukan hanya bahasa yang baku dari para penggunanya tetapi juga bahasa yang lebih kompleks, seperti dalam bahasa percakapan sehingga memudahkan penggunanya untuk berkomunikasi dengan mesin. Semantic web dapat mengolah bahasa dan mengenali `homonim`, `sinonim`, atau `atribut` yang berbeda pada suatu database.

### Extensible Markup Language (XML)

XML adalah bahasa markup untuk keperluan umum yang disarankan oleh W3C untuk membuat dokumen markup keperluan pertukaran data antar sistem yang beraneka ragam. XML merupakan kelanjutan dari HTML yang merupakan bahasa standar untuk melacak Internet.

XML didesain untuk mempu menyimpan data secara ringkas dan mudah diatur. Kata kunci utama XML adalah data yang jika diolah bisa memberikan informasi XML menyediakan suatu cara terstandarisasi namun bisa dimodifikasi untuk menggambarkan isi dari dokumen. Dengan sendirinya, XML dapat digunakan untuk menggambarkan sembarang view database, tetapi dengan suatu cara yang standar.
XML memiliki 3 tipe file, yaitu:

- XML, merupakan standar format dari struktur berkas (file). 
- XSL, merupakan standar untuk memodifikasi data yang diimpor atau   diekspor.
- XSD, merupakan standar yang mendefinisikan struktur database dalam XML.

Keunggulan XML bisa diringkas sebagai berikut :

- Pintar (Intelligence). XML dapat menangani berbagai tingkat (level) kompleksitas. 
- Dapat beradaptasi. Dapat mengadaptasi untuk membuat bahasa sendiri. Seperti Microsoft membuat bahasa MSXML atau Macromedia mengembangkan MXML.
- Mudah pemeliharaannya.
- Sederhana. XML lebih sederhana.
- Mudah dipindah-pindahkan (Portability). XML mempunyai kemudahan perpindahan (portabilitas) yang lebih bagus. 


### Resource Description Framework (RDF)

RDF merupakan sebuah model sederhana untuk mendeskripsikan hubungan antara sumber-sumber daya yang merupakan properti-properti dan values. RDF properti-properti dapat sebagai atribut dari sebuah sumber daya. RDF Properti-properti dapat mereprensentasikan hubungan antara sumber daya. RDF Data Model dapat disusun dari sebuah diagram entity-relationship, tetapi tidak menyediakan mekanisme untuk mendeskripsikan properti-properti-nya dan tidak dapat menyediakan mekanisme untuk menjelaskan hubungan antara properti-properti tersebut dengan sumber lain. RDF Vocabulary menyediakan bahasa untuk mendeskripsikan class dan properti-properti yang dapat digunakan untuk menjelaskan class dan properti-properti lain.

Sesungguhnya ‘arti’ kata menerangkan dalam RDF atau RDFS tergantung oleh beberapa faktor, termasuk peraturan sosial, bahasa natural atau penghubung ke dokumen lain. Banyak diantara arti-arti tersebut tidak dapat diakses oleh mesin.

RDF tidak memaksakan pembatasan logic pada domain dan range dari properti-properti. Dalam praktiknya sebuah properti-properti dapat diaplikasikan ke dalam dirinya sendiri. Sebagai contoh, diperbolehkan sebuah class ‘universal’ untuk menampung class-nya sendiri sebagai anggota, secara umum terdapat pada klasifikasi teratas.

Pendeklarasian properti-properti (atribut) dan semantic yang berhubungan didefinisikan dalam konteks RDF adalah dalam skema RDF. Sebuah skema tidak hanya mendefinisikan properti-properti dari sebuah sumber (contohnya: ‘judul’, ‘pengarang’,'subjek’, ‘ukuran’) tetapi juga menjelaskan jenis sumber daya yang sedang dijelaskan. Kosakata RDF yang digunakan sebagai bahasa penggambaran sesuatu, skema RDF, secara khusus digunakan pada model dasar informasi pada RDF atau sebagai sebuah struktur grafik yang menjelaskan sumber daya dan properti-properti. Semua kosakata RDF membagi struktur dasar yang sering digunakan, mereka menjelaskan class dari sumber daya dan tipe hubungan antara sumber daya tersebut. Skema RDF yang merupakan kosakata penjelasan memperbolehkan perancang kosakata untuk merepresentasikan class dan properti-properti dalam World Wide Web.

Bahasa yang digunakan merupakan koleksi dari sumber RDF yang dapat digunakan untuk mendeskripsikan properti-properti dari sumber RDF yang lain yang mendefinisikan kosakata RDF untuk spesifikasi aplikasi. Kosakata inti yang didefinisikan dalam namespace dikenal sebagai ‘rdfs’, dan diidentifikasikan dengan referensi URI. Spesifikasi ini juga menggunakan prefik ‘rdf ‘ untuk merujuk ke namespace inti dari RDF.

Sistem class dan properti-properti pada skema RDF hampir sama dengan bahasa pemrograman tipe orientasi obyek seperti Java. Tetapi ada beberapa perbedaan antara RDF dengan bahasa pemrograman tersebut yaitu dalam mendefinisikan class dalam sebuah property. Sebuah skema RDF akan mendefinisikan properti-properti dalam class mana dia diaplikasikan. Hal tersebut adalah tugas dari rdfs:domain dan rdfs:range. Sebagai contoh, kita akan mendefinisikan property “author” akan memiliki domain “Document” dan sebuah range “Person”, dimana dalam sistem orientasi obyek akan didefinisikan sebuah class “book” dengan sebuah atribut yang dinamakan “author” dari tipe “Person”. Jika menggunakan pendekatan RDF, sangatlah mudah untuk menambahkan property tambahan dengan domain dari dokumen atau range dari “Person”. Hal tersebut dapat dilakukan dengan tanpa mendefinisikan ulang deskripsi original dari class tersebut.

Skema RDF dapat mendeskripsikan sebuah hubungan antara kosa kata dari skema yang tidak saling berhubungan. Sejak referensi URI digunakan untuk mendefinisikan class dan properti-properti pada Web, sangatlah mungkin untuk menciptakan properti-properti baru yang mempunyai nilai dari domain dan range adalah sebuah class yang didefinisikan dari namespace lain.


### Web Ontology Language (OWL)

OWL adalah suatu bahasa yang dapat digunakan oleh aplikasi-aplikasi yang bukan sekedar menampilkan informasi tersebut pada manusia, melainkan juga yang perlu memproses isi informasi isi. Ontology sendiri dapat didefinisikan sebagai suatu cara untuk mendeskripsikan arti dan relasi dari istilah-istilah. Deskripsi tersebut berisi classes, properties, dan instances.

Deskripsi ini dapat membantu sistem computer dalam menggunakan istilah-istilah tersebut cengan cara yang lebih mudah [Lee06]. Dengan menggunakan OWL, kita dapat menambah vocabulary tambahan disamping semantiks formal yang telah dibuat sebelumnya menggunakan XML, RDF, dan RDF Schema. Hal ini sangat membantu penginterpretasian mesin yang lebih baik terhadap isi Web. Untuk mendeskripsikan properties dan classes, OWL menambahkan vocabulary seperti

- “among others”
- Relasi antar classes (misalnya: “disjointness”)
- Kardinalitas (misalnya: “exactly one”)
- Kesamaan (equality)
- Karakteristik property (misalnya: “symmetry”)
- Enumerated classes

OWL menyediakan tiga buah subbahasa yang dirancang untuk digunakan oleh para pengguna tertentu, yaitu:

- OWL Lite, digunakan oleh pengguna yang membutuhkan suatu hirarki pengklasifikasian dan berbagai constraints sederhana.
- OWL DL, digunakan oleh pengguna yang menginginkan tingkat ekpresi maksimal dan semua konklusi yang dihasilkan dapat dihitung dalam waktu yang terbatas (finite)
- OWL Full, digunakan oleh pengguna yang menginginkan tingkat ekpresi maksimal dan kebebasan sintaks dari RDF tanpa mempertimbangkan komputasi yang dibutuhkan.

![](http://1.bp.blogspot.com/-g7VqtMn-6aI/U1OT7jwJiHI/AAAAAAAAATA/T-A77Anlyyo/s1600/owl.jpg) 

### Web Security

Web security adalah suatu tata cara mengamankan aplikasi web yg dikelola, biasanya yg bertanggung jawab melakukannya adalah pengelola aplikasi web tsb.
Mengenai masalah yang berkaitan dengan keamanan di dalam era digital tidak lepas dari 3 prinsip utama yaitu Confidentiality, Integrity, dan Availability atau lebih dikenal dengan nama CIA. Sama halnya ketika bergelut dengan keamanan (security) sebuah website, princip CIA sudah selayaknya dijadikan pedoman yang harus dipahami apabila ingin website kita lebih aman dan sulit untuk diserang.

1. CONFIDENTIALITY
Confidentiality memiliki makna bahwa data-data ataupun informasi-informasi yang berada di dalam sebuah website hanya dapat di baca atau di akses oleh orang-orang yang memang memiliki kewenangan untuk mengaksesnya. Dalam era konsep Web 2.0 yang sedang berkembang beberapa tahun belakangan ini, sangat memungkinkan sebuah website untuk dapat memiliki lebih dari satu administrator. Contohnya adalah WordPress engine.

2. INTEGRITY 
Integrity memiliki pengertian data-data yang berada didalam server atau website hanya dapat diubah ataupun di delete oleh orang yang memiliki kewenangan untuk melakukan hal itu. Sebagai contoh proses transfer dari server ke client atau sebaliknya (dapat berupa upload maupun download), ternyata mengubah file yang sedang di transfer tersebut, hal ini mengindikasikan bahwa sebuah aplikasi website yang sedang digunakan tidak aman (insecure). Sama halnya jika ada serangan sebuah virus yang dapat mengubah sebuah file, entah itu mengubah nama ataupun isinya.

3. AVAILABILITY 
Jika confidentiality bermakna hanya user yang memiliki kewenangan yang dapat melihat data tertentu yang tersimpan didalam sebuah server atau website, availability memiliki makna bahwa website harus dapat diakses jika user ingin meggunakannya. Memang terkesan membingungkan dan tidak berbeda dengan prinsip pertama, namun kedua prinsip ini sangat jauh berbeda dikarenakan dilihat dari dua sudut pandang yang memang berbeda.

Availability hanya menekankan kepada dapat diaksesnya sebuah website. Mengenai siapa yang dapat mengaksesnya itu telah dicover oleh prinsip confidentiality.

Jika sebuah website dapat diakses tanpa adanya error, itu berarti website tersebut telah memenuhi prinsip availability ini. Hal ini memiliki makna bahwa sebuah website haruslah dapat diakses apabila memang dibutuhkan, dengan kata lain versi yang lebih mudahnya adalah, website harus available 24 jam 7 minggu (24/7).

![](http://2.bp.blogspot.com/-qYAq2DDAmdM/U1OUHza8aBI/AAAAAAAAATI/ZGQRxmNG7Ng/s1600/website-security-testing.jpg)

### Web Service

Web service adalah aplikasi sekumpulan data (database), perangkat lunak (software) atau bagian dari perangkat lunak yang dapat diakses secara remote oleh berbagai piranti dengan sebuah perantara tertentu. Secara umum, web service dapat diidentifikasikan dengan menggunakan URL seperti hanya web pada umumnya. Namun yang membedakan web service dengan web pada umumnya adalah interaksi yang diberikan oleh web service. Berbeda dengan URL web pada umumnya, URL web service hanya menggandung kumpulan informasi, perintah, konfigurasi atau sintaks yang berguna membangun sebuah fungsi-fungsi tertentu dari aplikasi.

Web service dapat diartikan juga sebuah metode pertukaran data, tanpa memperhatikan dimana sebuah database ditanamkan, dibuat dalam bahasa apa, sebuah aplikasi yang mengkonsumsi data, dan di platform apa sebuah data itu dikonsumsi. Web service mampu menunjang interoperabilitas. Sehingga web service mampu menjadi sebuah jembatan penghubung antara berbagai sistem yang ada.

Menurut W3C Web services Architecture Working Group pengertian Web service adalah sebuah sistem software yang di desain untuk mendukung interoperabilitas interaksi mesin ke mesin melalui sebuah jaringan. Interfaceweb service dideskripsikan dengan menggunakan format yang mampu diproses oleh mesin (khususnya WSDL). Sistem lain yang akan berinteraksi dengan web service hanya memerlukan SOAP, yang biasanya disampaikan dengan HTTP dan XML sehingga mempunyai korelasi dengan standar Web (Web Services Architecture Working Group, 2004).

Web pada umumnya digunakan untuk melakukan respon dan request yang dilakukan antara client dan server. Sebagai contoh, seorang pengguna layanan web tertentu mengetikan alamat url web untuk membentuk sebuah request. Request akan sampai pada server, diolah dan kemudian disajikan dalam bentuk sebuah respon. Dengan singkat kata terjadilah hubungan client-server secara sederhana.
Sedangkan pada web service hubungan antara client dan server tidak terjadi secara langsung. Hubungan antara client dan server dijembatani oleh file web service dalam format tertentu. Sehingga akses terhadap database akan ditanggani tidak secara langsung oleh server, melainkan melalui perantara yang disebut sebagai web service. Peran dari web service ini akan mempermudah distribusi sekaligus integrasi database yang tersebar di beberapa server sekaligus.

![](http://1.bp.blogspot.com/-064yRDFHiQQ/UaJV0II1u5I/AAAAAAAAAbo/qruwZrBZtn4/s320/GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.png)


## Penerapan Web

### User Generated Content

User Generated Content Adalah berbagai jenis content yang tersedia secara publik dan diproduksi oleh para end-user Wikipedia.org
 
Kunci utama dalam User Generated Content adalah partisipasitor. Para foundersitus-situs di atas pasti berfikir, bagaimana agar jutaan pengguna internet tertarik untuk masuk dan berpartisipasi. Manfaat aplikasi web yang menarik, kemudahan penggunaan, interface yang nyaman, layanan terjamin, knowledge sharing mungkin bisa membuat pengguna tertarik untuk mencoba dan berpartisipasi di dalamnya.Sebagian kalangan mengatakan User Generated Content ini sebagai Perbudakan 2.0. Mereka (para Founder) tidak perlu susah-susah untuk mengupdate konten situsnya sendiri, cukup membuat aplikasi web kemudian mempekerjakan jutaan pengguna internet untuk mengisi konten utamanya. Mereka (jutaan pengguna intenet) tidak dibayar dari menulis konten tapi founder mendapatkan banyak benefit dengan situs yang mereka tawarkan.

### Blog

Blog adalah sebuah situs yang asal mulaya merupakan catatan harian online yang dibuat oleh siapapun, kapanpun dan di manapun. Ada beberapa jenis blog atau penyedia blog: blogger, wordpress, tumblr, blogdetik, livejournal dll.

### Wikis (Wiki)

Wiki adalah sebuah situs web (atau koleksi dokumen hiperteks lainnya) yang memperbolehkan penggunanya menambah atau mengubah isi situs tersebut. Istilah ini juga dapat merujuk kepada software kolaboratif yang digunakan untuk menciptakan situs web semacam itu atau sebuah konsep yang diberi pengertian oleh penggagasnya.

### Floksonomies

Suatu sistem pengklasifikasian yang diturunkan dari praktik dan metode pembuatan dan pengelolaan tag-tag secara kolaboratif , untuk menganotasi dan mengkategorisasi konten. Praktik ini juga dikenal sebagai penge-tag-an kolaboratif, klasifikasi sosial, pengindeksan sosial, dan pengetagan sosial. Istilah Folksonomi merupakan gabungan lebur dari kata folk dan taksonomi.
Folksonomi menjadi populer di ranah Web  sekira tahun 2004, sebagai bagian dari aplikasi piranti lunak sosial  seperti penandaan buku sosial dan anotasi fotografi. Pengetagaan, yang menjadi karakteristik layanan Web 2.0, memungkinkan pengguna untuk mengklasifikasi dan mencari informasi secara kolektif. Beberapa laman web memasukkan awan tag untuk memvisualisasi tag-tag dalam sebuah folksonomi.

## Social Media

Social network atau social media adalah media untuk bersosialisasi satu sama lain dilakukan secara online yang memungkinkan manusia untuk saling berinteraksi tanpa dibatasi ruang dan waktu.

Berikut pengelompokkan social media tersebut:

- **Social Networks**: media sosial untuk bersosialisasi dan berinteraksi ( Facebook, Twitter, Path, LinkedIn, Foursquare dll).
- **Discuss**: media sosial yang memfasilitasi sekelompok orang untuk melakukan obrolan dan diskusi (Disquss, Google Hangouts, Skype dll).
- **Share**: media sosial yang memfasilitasi untuk saling berbagi file, video, music (Youtube, Instagram, slideshare, feedback, flickr, crowdstorm, dll)
- **Publish**: media sosial yang mengarah kepada berbagi tulisan, artikel (blogger, wordpress, wikipedia, digg, dll)
- **Social game**: media sosial berupa game yang dapat dilakukan atau dimainkan bersama-sama (koongregate, doof, pogo, cafe.com, dll). Dan melalui chatting apps.
- **MMO** (kartrider, warcraft, neopets, conan, dll.
- **Virtual worlds** (habbo, imvu, starday, dll)
- **Livecast** (y! Live, blog tv, justin tv, listream tv, livecastr, dll)
- **Livestream** (socializr, froendsfreed, socialthings!, dll) 

## Web Development

## Pattern 
Pattern adalah solusi yang digunakan untuk menangani masalah pada design. Design pattern bukan desain final yang dapat ditransformasikan secara langsung kedalam kode. Ini hanyalah deskripsi atau template untuk mengetahui bagaimana menyelesaikan permasalahan yang dapat digunakan pada berbagai macam situasi yang berbeda.

## Framework
Fremework adalah sekumpulan fungsi, class, dan aturan-aturan. Berbeda dengan library yang sifatnya untuk tujuan tertentu saja, framework bersifat menyeluruh mengatur bagaimana kita membangun aplikasi. Framework memungkinkan kita membangun aplikasi dengan lebih cepat karena sebagai developer kita akan lebih memfokuskan pada pokok permasalahan sedangkan hal-hal penunjang lainnya seperti koneksi database, form validation, GUI, dan security; umumnya telah disediakan oleh framework.

## 3 Tier
Konsep pemrogramman three tier (3 tier) atau yang biasa disebut dengan konsep `client server programming` merupakan konsep pemrograman yang terdiri dari 3 komponen logic layer yang saling berkaitan . 

Layer pada 3 tier:

1. `Client Layer` yaitu komponen yang berjalan diatas local komputer user / client. (tier 1) Pada layer ini , akses tidak bisa sampai pada RDBMS layer jika tidak ada koneksi ke aplikasi server (layer 2 / tier 2).

2. `Server Layer` yaitu komponen yang berjalan pada remote server yang berfungsi sebagai koneksi antara klien dengan database system. (Tier 2). Pada layer ini , merupakan layer yang menghubungkan antara layer client (tier 1) dengan layer RDBMS Application (tier 3). layer ini berisi package, objek, method, fungsi dan segala aktifitas query yang akan dijalankan pada layer 3 / tier 3 (RDBMS Application). 

3. `RDBMS Layer` yaitu kumpulan database , data resource manager dan aplikasi mainframe (Tier 3). Pada layer ini, berisi kumpulan database dan data resource manager yang merupakan pusat database suatu sistem. Layer 3 / tier 3 atau aplikasi RDBMS, tidak bisa diakses secara langsung melalui layer 1 / tier 1 atau aplikasi klien. jika aplikasi klien tidak terkoneksi ke layer 2 / tier 2 atau aplikasi server.

Kelebihan arsitektur 3 Tier :

- Segala sesuatu mengenai database terinstalasikan pada sisi server, begitu pula dengan pengkonfigurasiannya. Hal ini membuat harga yang harus dibayar lebih kecil. Apabila terjadi kesalahan pada salah satu lapisan tidak akan menyebabkan lapisan lain ikut salah. Perubahan pada salah satu lapisan tidak perlu menginstalasi ulang pada lapisan yang lainnya dalam hal ini sisi server ataupun sisi client. 
- Keamanan dibelakang firewall.Transfer informasi antara web server dan server database optimal. Komunikasi antara system-sistem tidak harus didasarkan pada standart internet, tetapi dapat menggunakan protocol komunikasi yang lebvih cepat dan berada pada tingkat yang lebih rendah. Penggunaan middleware mendukung efisiensi query database dalam SQL di pakai untuk menangani pengambilan informasi dari database. 

Beberapa Keuntungan Arsitektur 3-Tier :

- Keluwesan teknologi. 
- Mudah untuk mengubah DBMS engine. 
- Kemungkinkan pula middle tier ke platform yang berbeda 
- Biaya jangka panjang yang rendah. 
- Perubahan-perubahan cukup dilakukan pada middle tier daripada pada aplikasi keseluruhan. 
- Keunggulan kompetitif. 
- Kemampuan untuk bereaksi terhadap perubahan bisnis dengan cepat, dengan cara mengubah modul kode daripada mengubah keseluruhan aplikasi 

Kekurangan arsitekture 3 Tier :

- Lebih susah untuk merancang 
- Lebih susah untuk mengatur 
- Lebih mahal 

Beberapa software aplikasi yang biasa menggunakan konsep 3 tier yaitu : sybase, webspherre, java , dll.

Secara visual, penggambaran arsitektur 3 tier adalah sebagai berikut : 

![](http://2.bp.blogspot.com/-f2fRqtHDukw/UmSvv8eFs_I/AAAAAAAAAJ0/hcTc8QVqNSA/s320/thtrcs.JPEG)

## N-Tier
N-Tier merupakan arsitektur client server dimana presentasi, pemrosesan aplikasi, dan data fungsi manajemen secara logis dipisahkan. Huruf n pada n-tier menunjukan variabel yang dapat berisi angka sebanyak apapun.

### Komponen yang ada pada N-Tier:

Presentasi layer: dapat disebut user interface, berfungsi sebagai penertemahkan tugas dan hasil yang telah dikerjakan layer sebelumnya.
Bisnis logic layer : koordinat dari aplikasi, memproses perintah, membuat keputusan logic dan evaluasi serta menghitung performa.
Data Layer : untuk menyimpan informasi dan mengolah file system.

### Keuntungan N-Tier:
Kemudahan perubahan bisnis logic pada masa depan
Bisnis logic yang mudah diimplementasikan
Aplikasi client dapat mengakses berbagai tipe DBMS yang berbeda beda secara transparan.

### Kerugian N-Tier:
Sistem N tier termasuk mahal untuk development dan instalasinya
memerlukan adaptasi yang semakin luas ruang lingkupnya
 memerlukan rentang waktu relatif lama
penggunaan memori komputer yang besar.

## MVC 

Model-View-Controller atau MVC adalah sebuah metode untuk membuat sebuah aplikasi web dengan memisahkan data (Model) dari tampilan (View) dan cara bagaimana memprosesnya (Controller). MVC memisahkan pengembangan aplikasi berdasarkan komponen utama yang membangun sebuah aplikasi seperti manipulasi data, antarmuka pengguna, dan bagian yang menjadi kontrol dalam sebuah aplikasi web.

Bagian dari MVC :

- Model, Model mewakili struktur data. Biasanya model berisi fungsi-fungsi yang membantu seseorang dalam pengelolaan basis data seperti memasukkan data ke basis data, pembaruan data dan lain-lain.
- View adalah bagian yang mengatur tampilan ke pengguna. Bisa di katakan berupa halaman web web.
- Controller, Controller merupakan bagian yang menjembatani model dan view. Controller berisi skrip-skrip php yang berfungsi untuk memproses suatu data dan mengirimkannya ke halaman web.

Dengan menggunakan metode MVC maka aplikasi akan lebih mudah untuk dirawat dan dikembangkan. Untuk memahami metode pengembangan aplikasi menggunakan MVC diperlukan pengetahuan tentang pemrogram berorientasi objek (Object Oriented Programming).

### Jenis MVC:

Server slide MVC, terjadi pada aplikasi web tradisional yang tidak melibatkan client side, Mixed client side dan server side MVC, dan Rich internet application MVC.

#### Kelebihan dengan adanya Model adalah :

- Proses maintenance aplikasi, Penempatan detail data dan operasinya pada area yang ditentukan (Model) sehingga tidak tersebar pada keseluruhan lingkup aplikasi.
- Reusable Model, Penggunaan kembali aplikasi model oleh aplikasi lain yang disebabkan adanya pemisahan data dengan interface.
 
#### Kelebihan dari View adalah :
- Memudahkan penggabungan divisi desain dalam development team.
- Ketersediaan multiple interface dalam aplikasi.
 
#### Kelebihan dari Controller adalah :
- Komponen view dapat didesain tanpa harus memperhatikan bagian lain secara berlebih
- Pemisahan jelas antara presentation logic dan business logic


#### Kelemahan MVC :
adanya peningkatan kompleksifitas sehingga pada aplikasi kecil yang tidak membutuhkan loose coupling pada Model yang menjadi blok penghalang dalam pola MVC ini sendiri.

- - -

> Reference: <br>
> http://okyasha7.blogspot.co.id/2014/05/arsitektur-website-dan-yang-harus-anda.html <br>
> http://rizkyfitriarf.blogspot.co.id/2015/05/web-arsitektur-dan-konsep-mvc.html <br>
> http://ubaydimse.blogspot.co.id/2014/04/arsitektur-web-dan-aplikasi.html <br>
> http://wahidin-alambiyah-19.blogspot.co.id/2015/03/pengertian-web-service-dan-web-server.html <br>
> http://saptafina13.blogspot.co.id/2013/04/pengertian-web-service.html <br>
> http://nikenkinanti212.blogspot.co.id/2014/09/pengertian-3-tier-dan-n-tier-serta.html <br>