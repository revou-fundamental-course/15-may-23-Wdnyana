console.log("Javascript External Connected!!");

// function yang berfungsi untuk mengitung Keliling persegi
const hitungKeliling = (sisi) => 4 * sisi;
// Rumus keliling
const rumusKeliling = "K = 4 * S";

// function yang berfungsi untuk mengitung Luas persegi
const hitungLuas = (sisi) => sisi * sisi;
// Rumus luas
const rumusLuas = "L = S * S";

// Function untuk menghandle submit form
const handleFormSubmit = (
  formId,
  calculation,
  outputId,
  rumus,
  outputLabel
) => {
  const form = document.getElementById(formId);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sisi = form.elements[0].value;
    // Membuat validasi input
    if (sisi <= 0) {
      alert("Sisi harus lebih besar dari 0");
      return;
    }
    // Menghitung dan menampilkan outputnya
    const result = calculation(sisi);
    document.getElementById(
      outputId
    ).innerHTML = `${rumus} <br/> ${outputLabel} = ${
      outputLabel === "K" ? `4 x ${sisi}` : `${sisi} x ${sisi}`
    } <br/> ${outputLabel} = ${result}`;
    // Menghapus bekas inputan setelah submit
    form.elements[0].value = "";

    // menambahkan style baru kedalam output Luas dan Keliling
    const outputStyle1 = document.getElementById("outputIdLuas");
    outputStyle1.style.padding = "1.2rem";

    const outputStyle2 = document.getElementById("outputIdKeliling");
    outputStyle2.style.padding = "1.2rem";
  });

  // Menghandle button reset jika di click outputnya akan terhapus atau kosong
  form.querySelector(".reset__txt").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById(outputId).value = "";
  });
};

// Memanggil kedua function sebelumnya untuk kedua form yang ada
handleFormSubmit(
  "kelilingForm",
  hitungKeliling,
  "keliling_output",
  rumusKeliling,
  "K"
);
handleFormSubmit("luasForm", hitungLuas, "luas_output", rumusLuas, "L");
