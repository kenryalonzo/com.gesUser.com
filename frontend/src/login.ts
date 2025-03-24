// Login Validation Logic
class LoginValidator {
    constructor() {
        this.initializeEvents();
    }

    initializeEvents() {
        document.querySelectorAll('#loginForm input').forEach(input => {
            input.addEventListener('input', this.validateField.bind(this));
            input.addEventListener('blur', this.validateField.bind(this));
        });
    }

    validateField(e: { target: any; }) {
        const field = e.target;
        const container = field.closest('.space-y-2');
        const validationIcons = container.querySelector('.validation-icons');
        const message = container.querySelector('.validation-message');
        
        let isValid = false;
        
        if (field.id === 'loginEmail') {
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        } else if (field.id === 'loginPassword') {
            isValid = field.value.length >= 8;
        }

        validationIcons?.classList.toggle('hidden', !field.value);
        message?.classList.toggle('hidden', isValid);
        field.classList.toggle('border-rose-500', !isValid);
        field.classList.toggle('dark:border-rose-500', !isValid);
    }
}

// Initialize Validator
new LoginValidator();

// Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span class="animate-pulse">Authenticating...</span>
            <div class="inline-block ml-2 animate-spin">⟳</div>
        `;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    form.classList.add('hidden');
    const successElement = document.getElementById('loginSuccess');
    if (successElement) {
        successElement.classList.remove('hidden');
    }
    
    // Simulate redirect
    setTimeout(() => {
        window.location.href = '/dashboard';
    }, 2500);
    });
}