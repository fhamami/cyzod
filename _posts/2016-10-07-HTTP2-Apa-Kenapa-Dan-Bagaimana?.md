---
layout: post
category : WebDev
tagline: "HTTP/2"
tags : [Web]
---

{% include JB/setup %}

[HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) merupakan sebuah terobosan besar yang telah ditunggu-tunggu selama lebih dari 16 tahun sejak HTTP/1.1 diterapkan pertama kalinya pada tahun 1999. Sejumlah perubahan signifikan untuk memperbaiki kelemahan protokol web versi pertama telah disematkan dalam protokol web terbaru ini, terutama dari segi kecepatan dan keamanan guna memberikan pengalaman berselancar Internet yang jauh lebih baik.  Dengan HTTP/2, hal utama yang akan dirasakan saat mengakses Internet adalah waktu loading halaman situs yang lebih cepat, lebih aman serta lebih hemat bandwith.

HTTP/2 adalah versi berikutnya dari HTTP dan didasarkan pada Google SPDY, yang dirancang untuk mempercepat loading halaman web dan pengalaman browsing. HTTP/2 adalah standar baru dan akan mengambil alih protokol HTTP1.1 yang saat ini digunakan oleh sebagian besar situs di internet. HTTP/2 Telah disetujui oleh Internet Engineering Steering Group (IESG) pada 17 februari 2015.

> HTTP (Hypertext Transfer Protocol) ditemukan pertama kali oleh Sir Tim Berners-Lee dan merupakan standar protokol web yang digunakan oleh perangkat lunak dari seluruh peramban (software browser) yang menjadi dasar komunikasi data sehingga dapat menampilkan sebuah halaman situs di layar peramban.

Perbedaan mendasar [HTTP 1.1](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) dengan HTTP 2.0 terletak pada cara kerjanya, dimana HTTP 1.1 hanya menggunakan satu koneksi ketika menampilkan suatu halaman situs, sehingga elemen resource seperti file HTML, file CSS, gambar dan file JavaScript yang terdapat dalam situs tersebut diminta secara satu persatu, jadi ketika satu halaman berisikan 100 resource (html, images, css, javascript), dibutuhkan 2 x 100 untuk request data. Jika webserver terlambat memproses salah satu permintaan elemen resource tersebut, maka seluruh permintaan berikutnya pun akan tertunda dan terjadi bottleneck., karena sistem HTTP 1.1 akan tetap menunggu file sebelumnya hingga file tersebut diterima, baru kemudian memproses permintaan selanjutnya.

![http11 basic](https://cyzod.files.wordpress.com/2016/05/http11-basic.png?w=840)

Sedangkan HTTP/2 menjadikan permintaan atas elemen resource antara browser dan server tersebut lebih ringkas dan cepat dengan menggunakan teknologi “multiplexing” dimana dalam satu koneksi, server bisa memproses permintaan atas beberapa elemen resource secara paralel (multi-threading). Server kemudian memberikan semua resource tersebut dalam satu bundle data melalui satu tahapan saja dan setelah diterima, web browser akan membagi dan mengaturnya untuk menyusun halaman yang diminta.

![http2 multiplexing](https://cyzod.files.wordpress.com/2016/05/http2-multiplexing.png?w=840)

HTTP/2 memerlukan versi perbaikan dari transport layer security (TLS1.2), yang telah distandarisasi pada tahun 2008 dan menawarkan keamanan yang lebih baik dari versi sebelumnya dan harus sudah digunakan oleh sebagian besar layanan.

HTTP/2 meninggalkan sebagian besar sintaks tingkat tinggi HTTP 1.1, seperti metode, kode status, field header, dan URI. Unsur yang dimodifikasi adalah bagaimana data dibingkai dan diangkut antara klien dan server.

HTTP/2 memungkinkan server untuk “mendorong” konten, yaitu respond query data lebih banyak terhadap client request. Hal ini memungkinkan server untuk menyediakan data yang diketahui web browser untuk memuat sebuah halaman web, tanpa menunggu browser untuk memeriksa tanggapan pertama, dan tanpa overhead siklus permintaan tambahan.

Peningkatan kinerja tambahan dalam draft pertama dari HTTP/2 (yang merupakan salinan SPDY) berasal dari multiplexing dari permintaan dan tanggapan untuk menghindari masalah head-of-line blocking dalam HTTP 1 (bahkan ketika HTTP pipelining digunakan), kompresi headers, dan prioritas permintaan.

Secara singkat bisa dikatakan bahwa HTTP/1.1 = Basic dan HTTP/2 = Multiplexing. HTTP/2 menggunakan teknologi “multiplexing” sehingga dalam 1 koneksi dari browser bisa request dan download beberapa object sekaligus secara paralel (multi-threading). Berbeda dengan HTTP/1.1 yang melakukan 1 rekues untuk 1 koneksi.

### Kelebihan HTTP/2

- Mempercepat loading website secara signifikan dengan teknologi multiplexing, concurrency, kompresi header, dan server push (server bisa mem-push content untuk di-loading di background, seperti AJAX).
- Menghemat penggunaan resources di server dan client.
- Koneksi HTTPS berjalan lebih cepat dan lebih aman berkat teknologi kompresi dan enkripsi yang lebih efisien.
- Memberikan kontrol lebih besar kepada developer aplikasi untuk mengatur prioritas urutan object yang mau di-load lebih dulu.
- Lebih canggih dan cepat dibanding protokol SPDY sebelumnya. Google akan menghapus SPDY support dari browser Chrome mulai awal tahun 2016.

Riset potential benefit yang dilakukan oleh IDG Enterprise Research mengatakan bahwa HTTP 2.0 akan lebih banyak menguntungkan dari berbagai sisi.

![IDG Enterprise Research](http://i.imgur.com/CMOp6zO.png)	


> SPDY adalah protokol yang awalnya dikembangkan oleh Google untuk memperbaiki kelemahan di HTTP/1.1.

Untuk mengetahui hosting yang digunakan sudah support dengan HTTP/2, bisa menggunakan tool yang disediakan oleh [keycdn](https://tools.keycdn.com/http2-test).

Untuk dokumentasi lebih lengkap tentang HTTP 2.0 IETF HTTP Working Group membuat dokumntasi di IETF [http2.github.io/](https://http2.github.io/)

* * *

Reference:

http://internetsehat.id/2015/02/setelah-16-tahun-selamat-datang-http2/

http://startupbisnis.com/dari-http-1-1-ke-http2-dunia-internet-siap-masuki-era-baru/

http://blog.arijulianto.com/2015/09/teknologi-baru-web-www-http-2.html

https://www.dewaweb.com/dewaweb-is-the-first-to-support-http2/

http://docs.media.bitpipe.com/io_12x/io_120366/item_1062214/<Making%20the%20Journey%20to%20HTTP%20-%202 class="pdf"></Making%20the%20Journey%20to%20HTTP%20-%202>