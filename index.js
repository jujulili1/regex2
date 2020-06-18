const buttonCekNomor = document.querySelector(".cek .button");

cekNomorHP = (string) => {
    const regEx = new RegExp(/^\d{10,12}$/);
    return regEx.test(string);
};

buttonCekNomor.addEventListener("click", () => {
    const cekNomor = document.getElementById("nomor").value;
    if (cekNomorHP(cekNomor)) {
        alert(`Nomor anda benar`);
    } else {
        alert("nomor anda kurang dari 10 atau lebih dari 12");
    }
});