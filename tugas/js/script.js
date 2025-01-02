const orders = []; // Menyimpan data pesanan di memori
const orderForm = document.getElementById('bookingForm');
const orderList = document.getElementById('orderList');

// Fungsi untuk menambah pesanan
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

    const idPemesanan = document.getElementById('idPemesan').value;
    const namaPemesan = document.getElementById("namaPemesan").value;
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    const tipeKamar = parseInt(document.getElementById("tipeKamar").value);
    const durasiMenginap = parseInt(document.getElementById("durasiMenginap").value);
    const withBreakfast = document.getElementById("withBreakfast").checked;

    if (!namaPemesan || !nomorIdentitas || !jenisKelamin || !tipeKamar || !durasiMenginap) {
      alert("Semua data harus diisi!");
      return;
    }

    // Hitung total bayar
    let total = tipeKamar * durasiMenginap;
    let diskon = 0;

    if (durasiMenginap > 3) {
      diskon = total * 0.1;
      total -= diskon;
    }

    if (withBreakfast) {
      total += 80000;
    }

    // Tampilkan data di resume
    document.getElementById("resumeNama").textContent = namaPemesan;
    document.getElementById("resumeIdentitas").textContent = nomorIdentitas;
    document.getElementById("resumeKelamin").textContent = jenisKelamin;
    document.getElementById("resumeKamar").textContent = tipeKamar.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("resumeDurasi").textContent = durasiMenginap;
    document.getElementById("resumeDiskon").textContent = diskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("resumeTotal").textContent = total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    document.getElementById("resume").style.display = "block";
  
//   const guestName = document.getElementById('guestName').value;
//   const roomType = document.getElementById('roomType').value;
//   const stayDuration = document.getElementById('stayDuration').value;
  
//   // Tambah data ke array
    const newOrder = {
        id: idPemesanan,
        nama: namaPemesan,
        jenisKelamin,
        durasiMenginap,
        tipeKamar: tipeKamar.toLocaleString("id-ID", { style: "currency", currency: "IDR" }),
        total: total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
    };
    orders.push(newOrder);

//   // Reset form
//   orderForm.reset();

//   // Perbarui tampilan daftar pesanan
document.getElementById("resume").style.display = "block";
  displayOrders();
});

// Fungsi untuk menampilkan daftar pesanan
function displayOrders() {
    orderList.innerHTML = ''; // Hapus tampilan lama

  orders.forEach((order) => {
    const listItem = document.createElement('li');
    listItem.textContent = `
      Nama: ${order.guestName}, Tipe Kamar: ${order.tipeKamar}, Durasi: ${order.durasiMenginap} malam
    `;
    
    // Tombol Hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      deleteOrder(order.id);
    });
    
    listItem.appendChild(deleteButton);
    orderList.appendChild(listItem);
  });
}

// Fungsi untuk menghapus pesanan
function deleteOrder(orderId) {
  const orderIndex = orders.findIndex(order => order.id === orderId);
  if (orderIndex > -1) {
    orders.splice(orderIndex, 1); // Hapus dari array
    displayOrders(); // Perbarui tampilan
  }
}


  function prosesPemesanan() {
    const namaPemesan = document.getElementById("namaPemesan").value;
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    const tipeKamar = parseInt(document.getElementById("tipeKamar").value);
    const durasiMenginap = parseInt(document.getElementById("durasiMenginap").value);
    const withBreakfast = document.getElementById("withBreakfast").checked;

    if (!namaPemesan || !nomorIdentitas || !jenisKelamin || !tipeKamar || !durasiMenginap) {
      alert("Semua data harus diisi!");
      return;
    }

    // Hitung total bayar
    let total = tipeKamar * durasiMenginap;
    let diskon = 0;

    if (durasiMenginap > 3) {
      diskon = total * 0.1;
      total -= diskon;
    }

    if (withBreakfast) {
      total += 80000;
    }

    // Tampilkan data di resume
    document.getElementById("resumeNama").textContent = namaPemesan;
    document.getElementById("resumeIdentitas").textContent = nomorIdentitas;
    document.getElementById("resumeKelamin").textContent = jenisKelamin;
    document.getElementById("resumeKamar").textContent = tipeKamar.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("resumeDurasi").textContent = durasiMenginap;
    document.getElementById("resumeDiskon").textContent = diskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    document.getElementById("resumeTotal").textContent = total.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

    document.getElementById("resume").style.display = "block";
  }

  function resetForm() {
    document.getElementById("resume").style.display = "none";
  }