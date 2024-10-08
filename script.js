document.getElementById("animateButton").addEventListener("click", function() {
    // Membuat beberapa balon
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Mengacak posisi horizontal balon
        const randomLeft = Math.random() * 100; // Nilai acak antara 0% dan 100%
        balloon.style.left = randomLeft + '%';

        document.querySelector(".card").appendChild(balloon);
        
        // Menampilkan balon dan memulai animasi
        balloon.style.display = 'block';
        balloon.style.animation = 'float 5s ease-in-out';
        
        // Menghapus balon setelah animasi selesai
        setTimeout(() => {
            balloon.remove();
        }, 5100); // Sedikit lebih lama dari durasi animasi
    }
});
