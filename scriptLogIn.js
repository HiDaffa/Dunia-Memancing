const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Toggle antara Login dan Register
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// ====== LOGIN FORM HANDLER ======
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Validasi sederhana
    if (!email || !password) {
        alert('Harap isi email dan password!');
        return;
    }
    
    // Ambil username dari email (bagian sebelum @)
    let username = email.split('@')[0];
    // Kapital huruf pertama
    username = username.charAt(0).toUpperCase() + username.slice(1);
    
    // Simpan ke localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    
    alert(`Login berhasil! Selamat datang ${username}`);
    window.location.href = 'index.html';
});

// ====== REGISTER FORM HANDLER ======
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    
    // Validasi
    if (!name || !email || !password) {
        alert('Harap isi semua field!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password minimal 6 karakter!');
        return;
    }
    
    // Simpan ke localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', name);
    
    alert(`Pendaftaran berhasil! Selamat bergabung ${name}`);
    window.location.href = 'index.html';
});