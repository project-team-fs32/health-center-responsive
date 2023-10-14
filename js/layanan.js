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
