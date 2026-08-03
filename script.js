const nomorAdmin = "6282342949295";

document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const ktp = document.getElementById("ktp").value;
    const jk = document.getElementById("jk").value;
    const lahir = document.getElementById("lahir").value;
    const email = document.getElementById("email").value;
    const hp = document.getElementById("hp").value;

    const alamat = document.getElementById("alamat").value;
    const desa = document.getElementById("desa").value;
    const kecamatan = document.getElementById("kecamatan").value;
    const kota = document.getElementById("kota").value;
    const kodepos = document.getElementById("kodepos").value;
    const provinsi = document.getElementById("provinsi").value;
    const rtrw = document.getElementById("rtrw").value;

    const text =
`*FORMULIR PENDAFTARAN*
*SILAHKAN DI ISI BIAR TIM KAMI BANTU DAFTARKAN*

• Nama Lengkap: ${nama}
• Nomor KTP: ${ktp}
• Jenis Kelamin: ${jk}
• Tanggal Lahir: ${lahir}
• Email: ${email}
• Nomor HP: ${hp}

*ALAMAT PENGIRIMAN BARANG*

• Alamat: ${alamat}
• Desa/Kelurahan: ${desa}
• Kecamatan: ${kecamatan}
• Kota: ${kota}
• Kode Pos: ${kodepos}
• Negara/Provinsi: ${provinsi}
• RT/RW: ${rtrw}`;

    window.location.href =
`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(text)}`;

});