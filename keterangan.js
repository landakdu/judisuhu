const bgbahaya = document.getElementsByClassName("bgbahaya");
for (let i = 0; i < bgbahaya.length; i++) {
  bgbahaya[i].innerHTML = "<h1 class='keterangan-font-size'><span class='color-red'>Situs ini berbahaya menurut kami sebab situs ini hilang begitu saja</span>, semua link terbaru tidak dapat di akses kemungkinan terbesar situs ini di tutup atau di hapus begitu saja sehingga tidak ada pertinggal kontak apapun untuk bisa di hubungi, apabila kami menemukan informasi kontak atau link yang bisa di akses akan kami update pada tombol situs ini serta warna tombol juga akan di ubah sesuai setatus situsnya, terima kasih 🙏.</h1>";
}

const bgwaspada = document.getElementsByClassName("bgwaspada");
for (let i = 0; i < bgwaspada.length; i++) {
  bgwaspada[i].innerHTML = "<h1 class='keterangan-font-size'>Maaf untuk link alternatif terbaru silahkan meminta langsung melalui <span class='color-red'>Tombol CHAT  berwarna merah di Bawah</span>, kami tidak menyediakan link tanpa vpn untuk situs yang belum masuk dalam kriteria aman menurut kami, anda harus waspada jika ingin tetap bermain di situs ini karena bisa saja terjadi hal yang tidak anda inginkan, atas perhatiannya kami ucapkan terima kasih 🙏</h1>";
}

const bgdomain = document.getElementsByClassName("bgdomain");
for (let i = 0; i < bgdomain.length; i++) {
  bgdomain[i].innerHTML = "<h1 class='keterangan-font-size'>Tombol berwarna <span class='color-green'>HIJAU</span> artinya situs tersebut <span class='color-green'>AMAN</span> dan link tanpa vpn dapat di gunakan selamanya karena otomatis update setiap hari<br/><br/>Tombol berwarna <span class='color-yellow'>KUNING</span> dan <span class='color-red'>MERAH</span> artinya situs tersebut tidak aman menurut judisuhu dan link tanpa vpn tidak di sediakan judisuhu, jika membutuhkan link terbaru klik tombol <span class='color-red'>CHAT</span> yang di sediakan judisuhu agar anda dapat berkomunikasi dan meminta link terbaru secara langsung ke situs resminya, tombol <span class='color-red'>CHAT</span>  hanya muncul jika anda mengklik tombol <span class='color-yellow'>KUNING</span> atau<span class='color-red'>MERAH</span>sesuai dengan situs yang anda inginkan.</h1>";
}

const bgchatadmin = document.getElementsByClassName("bgchatadmin");
for (let i = 0; i < bgchatadmin.length; i++) {
  bgchatadmin[i].innerHTML = "<h1 class='keterangan-font-size'>CHAT KE ADMIN JUDISUHU</br></br><span class='color-blue'>CHAT FACEBOOK :</span> di gunakan untuk berkomunikasi dengan admin dan akan di balas saat admin online.</br></br><span class='color-green'>CHAT TAWK :</span> di gunakan untuk mengirimkan pesan singkat untuk admin tanpa membutuhkan balasan chat dari admin biasanya di pergunakan untuk request situs yang belum tersedia atau meminta admin mengupdate link baru</br></br>Contoh 1 pesan singkat</br>admin update link terbaru situs ABCD</br></br>Contoh 2 pesan singkat</br>admin tambahkan situs 1234 agar saya dapat masuk situsnya tanpa vpn selamanya</br></br>Intinya sampaikan saja seluruh keinginan anda dalam 1 kali pengiriman pesan nanti jika sudah di baca oleh admin akan di kerjakan.</h1>";
}
