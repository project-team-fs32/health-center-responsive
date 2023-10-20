const ENDPOINT_LAYANAN = "https://652a44c14791d884f1fcb6a7.mockapi.io/layanan";
const listData = document.getElementById("list-data");

const fetchLayanan = async () => {
  try {
    const res = await fetch(ENDPOINT_LAYANAN);
    const datas = await res.json();

    datas.map((item, i) => {
      let list = `<tr>
      <td>${item.id}</td>
      <td>${item.nama_layanan}</td>
      <td>Rp ${item.biaya}</td>
      <td>${item.nama_dokter}</td>
      <td>${item.jadwal}</td>
    </tr>`;

      listData.innerHTML += list;
    });
  } catch (err) {
    console.log(err);
  }
};
fetchLayanan();

let simpan = document.getElementById("simpan");

simpan.addEventListener("click", () => {
  let warning = document.getElementById("warning");
  let layanan = document.getElementById("layanan").value;
  let biaya = document.getElementById("biaya").value;
  let dokter = document.getElementById("dokter").value;
  let jadwal = document.getElementById("jadwal").value;
  let foto = document.getElementById("foto").value;

  if (
    layanan === "" ||
    biaya === "" ||
    dokter === "" ||
    jadwal === "" ||
    foto === ""
  ) {
    warning.innerHTML = `<div class="alert alert-danger" role="alert">
  Data masih kosong !
</div>`;
    return;
  }

  const addlayanan = async () => {
    let data = {
      nama_layanan: layanan,
      biaya: biaya,
      nama_dokter: dokter,
      jadwal: jadwal,
      image: foto,
    };

    try {
      const res = await fetch(ENDPOINT_LAYANAN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Data berhasil ditambahkan");
        window.location.href = "layanan.html";
      }
    } catch (err) {
      console.log(err);
    }
  };

  addlayanan();
});
