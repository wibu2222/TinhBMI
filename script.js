document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');
    const loginBox = document.querySelector('.login-box');
    const inputs = document.querySelectorAll('.input-group input');

    // Thêm hiệu ứng ripple cho nút đăng nhập
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    });

    // Hiệu ứng hover cho login box
    loginBox.addEventListener('mousemove', (e) => {
        const rect = loginBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        loginBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    loginBox.addEventListener('mouseleave', () => {
        loginBox.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });

    // Hiệu ứng focus cho input
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            input.parentElement.style.transform = 'translateY(-5px)';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
            input.parentElement.style.transform = 'translateY(0)';
        });

        // Hiệu ứng khi gõ phím
        input.addEventListener('keydown', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            setTimeout(() => {
                input.parentElement.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Xử lý đăng nhập
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Kiểm tra thông tin đăng nhập (demo)
        if (username === 'testuser' && password === 'password') {
            message.textContent = 'Đăng nhập thành công!';
            message.className = 'message success';
            
            // Chuyển hướng sau 2 giây
            setTimeout(() => {
                message.textContent = 'Đang chuyển hướng...';
                window.location.href = 'trangtinh.html';
            }, 2000);
        } else {
            message.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
            message.className = 'message error';
        }
    });

    // Hiệu ứng khi trang load
    loginBox.style.opacity = '0';
    loginBox.style.transform = 'translateY(50px)';
    setTimeout(() => {
        loginBox.style.transition = 'all 0.5s ease';
        loginBox.style.opacity = '1';
        loginBox.style.transform = 'translateY(0)';
    }, 100);
}); 