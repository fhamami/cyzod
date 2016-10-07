---
layout: post
categories : Web
tagline: "Web Socket"
tags : [Web Socket]
---

{% include JB/setup %}

WebSocket adalah standar baru untuk komunikasi realtime pada Web dan aplikasi mobile. WebSocket dirancang untuk diterapkan di browser web dan server web, tetapi dapat digunakan oleh aplikasi client atau server. WebSocket adalah protokol yang menyediakan saluran komunikasi full-duplex melalui koneksi TCP tunggal.

WebSocket merupakan bagian dari `HTML5`. WebSocket menghadirkan pengurangan besar dalam lalu-lintas jaringan yang tidak penting dan latency dibandingkan dengan solusi polling dan long-polling yang telah digunakan untuk mensimulasikan koneksi dua arah dengan cara menjaga dua koneksi tetap terhubung.

## Sejarah singkat WebSocket

### Teknologi Comet

Sebelum Websocket dibuat, sudah ada teknologi serupa yang dinamakan Comet. Comet adalah model aplikasi Web yang memungkinkan server web untuk mengirim data ke browser klien tanpa harus mengirimkan request terlebih dahulu. Comet menjadi istilah umum untuk teknik mencapai interaksi client-server. Comet dikenal dengan nama lain seperti `Ajax Push`, `Reverse Ajax`, `Two-way-web`, `HTTP Streaming` dan `HTTP server push`. Teknik ini bergantung pada teknologi browser asli seperti `JavaScript` dan tidak menggunakan properti plug-in lain. Namun salah satu kekurangan dari Comet adalah implementasi yang `nontrivial`, dan beban dari `HTTP header` dan `TCP handshake` yang tidak efisien untuk pesan-pesan yang kecil. Dari kekurangan itulah dikembangkan protokol websocket.

### Release WebSocket

WebSocket pertama kali dirujuk sebagai `TCP Connection` dalam spesifikasi `HTML5`, sebagai tempat untuk berbasis `TCP socket API`. Pada bulan Juni 2008, Nama WebSocket diciptakan oleh Ian Hickson dan Michael Carter, serangkaian diskusi yang dipimpin oleh Michael Carter yang mengakibatkan versi pertama dari protokol dikenal sebagai WebSocket.

WebSocket menggunakan standard protokol RFC6455 Draft date December, 2011 untuk handshake dan komunikasi antara klien dan server. Web browser seperti Google Chrome untuk Android sepenuhnya telah mendukung RFC6455 termasuk pesan biner.

## Perbandingan AJAX dan WebSocket

Asynchronous JavaScript and XMLHTTP (AJAX) adalah suatu teknik pemrograman berbasis web untuk menciptakan aplikasi web interaktif. Tujuannya adalah untuk memindahkan sebagian besar interaksi pada komputer web surfer, melakukan pertukaran data dengan server di belakang layar, sehingga halaman web tidak harus dibaca ulang secara keseluruhan setiap kali seorang pengguna melakukan perubahan. Hal ini akan meningkatkan interaktivitas, kecepatan, dan usability.

Namun di `AJAX` kita hanya dapat melakukan komunikasi satu arah (Asynchronous) dengan mengirimkan request kepada server dan menunggu balasannya, maka `WebSocket` merupakan sebuah protokol komunikasi dua arah (Synchronous).  WebSocket kita tidak hanya dapat mengirimkan request kepada server, tetapi juga menerima data dari server tanpa harus mengirimkan request terlebih dahulu. Hal ini berarti ketika menggunakan WebSocket pengguna harus terus menerus terkoneksi dengan server, dan kita memerlukan sebuah server khusus untuk dapat menjalankan aplikasi WebSocket dengan benar. Sederhananya, perhatikan gambar berikut:

![](https://bertzzie.com/knowledge/javascript-lanjut/_images/AJAXvsWebSocket.png)

Pada Kasus AJAX dari gambar di atas setiap request dari pengguna maupun respon dari server dilakukan secara terpisah. Jika ingin mengirimkan request ke server, kita perlu membuka koneksi baru yang kemudian akan dibalas oleh server seperti ia membalas permintaan halaman HTML biasa. Server juga tidak dapat langsung melakukan pengiriman data ke klien tanpa ada permintaan terlebih dahulu. Hal ini berbeda dengan pola komunikasi WebSocket, di mana koneksi berjalan tanpa terputus dan server dapat mengirimkan data atau perintah tanpa harus ada permintaan dari pengguna terlebih dahulu. Dengan begitu, WebSocket bahkan juga memungkinkan server mengirimkan data atau perintah ke semua klien yang terkoneksi, misalkan untuk memberikan notifikasi global.

## Manfaat WebSocket

- Websocket memungkinkan server untuk mendorong data kepada klien yang terhubung
- Mengurangi traffic atau lalu lintas jaringan yang tidak perlu dan latency menggunakan full duplex melalui koneksi tunggal.
- Streaming melalui proxy dan firewall, mendukung komunikasi simultan hulu dan hilir.
- Kompatibel dengan pre-WebSocket dunia dengan cara beralih dari koneksi HTTP ke WebSockets.

### Permasalah yang di selesaikan dengan adanya “WebSocket”

Latar belakang yang mendasari terciptanya websocket adalah permintaan beberapa client yang mengharuskan developer bisa membuat aplikasi berbasis `web real time` atau `real-time apps`. Aplikasi real time adalah dimana ketika ada perubahan data, maka saat itu juga website di browser klien juga ada perubahan atau setidaknya muncul notifikasi. Ada alternatif lain untuk permasalahan developer tersebut, diantaranya adalah metode polling dan long polling.

Metode polling ini mengirimkan request data ke server secara terus menerus. Kalau hanya satu client yang melakukan request berulang seperti itu, mungkin tidak masalah, tapi bagaimana jika ada beberapa client yang mengakses satu server dan berulangkali melakukan metode Polling. Maka server akan jadi sibuk dan rentan terkena serangan DDOS.

Metode long polling adalah metode polling dengan interval waktu yang berkala. Jadi request tidak sesering metode Polling. Manfaatnya adalah server jauh lebih stabil dibandingkan dengan metode polling. Namun permasalahannya sederhana, Long Polling tidak menjawab real time, karena ada interval waktu yang digunakan.

Websocket muncul pada tahun 2009 sebagai proposal, kemudian dikembangkan selama 3 tahun sehingga WebSocket sekarang jauh lebih stabil dan sudah banyak di-support oleh bermacam-macam browser.

## Komponen Server WebSocket

Teknologi WebSocket membutuhkan cara penggunaan yang sama sekali berbeda dibandingkan dengan AJAX. Jika pada AJAX kita dapat mengguankan komponen server yang sama dengan server HTTP pada umumnya, untuk WebSocket kita memerlukan komponen server khusus. Hal ini disebabkan oleh model komunikasi WebSocket yang mengharuskan pengguna terkoneksi dengan server sepanjang aplikasi masih digunakan. Arsitektur server yang diperlukan untuk melayani banyak koneksi terbuka seperti ini tentu berbeda dengan arsitektur yang dibutuhkan untuk koneksi satu arah seperti pada HTTP. Ketika menggunakan WebSocket, biasanya kita akan memerlukan komponen server (beserta kode sisi server) khusus.

Adapun beberapa contoh komponen server untuk WebSocket yaitu:

- [Socket.IO (Javascript)](http://socket.io/)
- [Tornado (Python)](https://github.com/tornadoweb/tornado)
- [Event Machine (Ruby)](https://github.com/igrigorik/em-websocket)
- [SignalR (.Net)](http://signalr.net/)
- [Jetty (JVM)](http://www.eclipse.org/jetty/)

Bahasa yang disebutkan pada daftar di atas adalah bahasa yang digunakan pada sisi server.

- - -

> Reference : <br>
> https://www.codepolitan.com/menegtahui-apa-itu-websocket <br>
> https://bertzzie.com/knowledge/javascript-lanjut/WebSocket.html <br>
> https://en.wikipedia.org/wiki/WebSocket <br>
> https://id.wikipedia.org/wiki/AJAX <br>