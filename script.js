// Menambahkan Event Listener untuk Tombol "Add to Cart"
document.addEventListener('DOMContentLoaded', function () {
    // Cari semua tombol "Add to Cart" berdasarkan teks di dalamnya
    const addToCartButtons = document.querySelectorAll('.btn-primary');

    addToCartButtons.forEach(button => {
        // Periksa apakah teks tombol adalah "Add to Cart"
        if (button.textContent.trim() === "Add to Cart") {
            button.addEventListener('click', function (event) {
                event.preventDefault(); // Mencegah perilaku default (jika ada)
                alert('Produk telah ditambahkan ke keranjang!');
            });
        }
    });
});

// Validasi Form Kontak
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                event.preventDefault();
                alert('Silakan isi semua field sebelum mengirim pesan.');
            }
        });
    }
});

// Animasi Scroll ke Section
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Menampilkan Modal dengan Animasi
document.addEventListener('DOMContentLoaded', function () {
    const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
    modalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetModal = document.querySelector(button.getAttribute('data-bs-target'));
            if (targetModal) {
                targetModal.classList.add('fade');
            }
        });
    });
});