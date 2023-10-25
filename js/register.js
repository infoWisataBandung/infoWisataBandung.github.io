//Mengambil nilai dari elemen input pada HTML
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

//deklarasi func validation untuk validasi field kosong atau tidak
const validation = () => {
    const username = usernameInput.value;
    const pass = passwordInput.value;

    if (username !== "" && pass !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};

//Panggil fungsi validation saat input berubah
usernameInput.addEventListener("input", validation);
passwordInput.addEventListener("input", validation);

// Mengirim data ke server saat formulir disubmit
document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const pass = passwordInput.value;

    // Kirim data ke backend menggunakan fetch atau XMLHttpRequest
    const data = {
        username: username,
        password: pass
    };

    /**
     * Anda perlu mengganti "URL_BACKEND" dengan URL endpoint backend Golang Anda yang akan menyimpan data ke MongoDB. Pastikan backend Golang Anda sudah siap untuk menerima permintaan POST dan menyimpan data ke database.
     */

    try {
        const response = await fetch("URL_BACKEND", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Data berhasil disimpan ke MongoDB, Anda dapat mengarahkan pengguna ke halaman lain atau memberikan pesan sukses.
            //console.log("Data berhasil disimpan!");
            window.location.href = "../pages/dashboardd.html";
        } else {
            console.error("Gagal menyimpan data ke MongoDB.");
        }
    } catch (error) {
        console.error("Terjadi kesalahan: " + error);
    }
});

