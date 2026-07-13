let student = [
  {id: 1, nama: 'Ahmad Setiawan', nilai: 80},
  {id: 2, nama: 'Sertia Dewi', nilai: 75},
  {id: 3, nama: 'Bagus Hidayat', nilai: 55}
];

function getGrade(nilai) {
  if (nilai >= 90) {
    return 'A';
  } else if (nilai >= 70) {
    return 'B'
  } else if (nilai >= 50) {
    return 'C'
  } else if (nilai < 50) {
    return 'D'
  }
};

function renderData() {
  let rows = '';

  student.forEach((listSiswa, index) => {
    const { id, nama, nilai } = listSiswa;
    const html = `
      <tr>
        <td>${id}</td>
        <td>${nama}</td>
        <td>${nilai}</td>
        <td>${getGrade(nilai)}</td>
        <td>
          <button class="button-table">Ubah</button>
          <button class="button-table">Hapus</button>
        </td>
      </tr>
    `;
    rows += html;
  });

  document.querySelector('.js-daftar-siswa')
    .innerHTML = rows;
}

renderData();