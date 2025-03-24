import { CheckCircleIcon, XCircleIcon } from './icons.ts';

// Enhanced Validation Logic
class FormValidator {
    constructor() {
        this.initializeEvents();
    }

    initializeEvents() {
        document.querySelectorAll('input').forEach(input => {
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
        let errorMessage = '';

        switch(field.id) {
            case 'name':
                isValid = field.value.trim().length >= 3;
                errorMessage = isValid ? '' : 'Minimum 3 characters required';
                break;
            
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
                errorMessage = isValid ? '' : 'Please enter a valid email address';
                break;
            
            case 'password':
                isValid = this.checkPasswordStrength(field.value) >= 3;
                errorMessage = isValid ? '' : 'Password too weak';
                this.updatePasswordStrength(field.value);
                break;
            
            case 'confirmPassword':
                const passwordElement = document.getElementById('password') as HTMLInputElement;
                const password = passwordElement?.value || '';
                isValid = field.value === password;
                errorMessage = isValid ? '' : 'Passwords do not match';
                break;
        }

        // Update UI
        validationIcons.classList.toggle('hidden', !field.value);
        validationIcons.querySelectorAll('svg').forEach((icon: { classList: { toggle: (arg0: string, arg1: any) => any; contains: (arg0: string) => any; }; }) => 
            icon.classList.toggle('hidden', icon.classList.contains(field.checkValidity() ? 'text-rose-500' : 'text-emerald-500'))
        );
        
        message.textContent = errorMessage;
        message.classList.toggle('hidden', isValid);
        field.classList.toggle('border-rose-500', !isValid);
        field.classList.toggle('dark:border-rose-500', !isValid);
    }

    checkPasswordStrength(password: string) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    }

    updatePasswordStrength(password: any) {
        const strength = this.checkPasswordStrength(password);
        const segments = document.querySelectorAll('.strength-segment');
        const strengthText = document.querySelector('.strength-text');
        const colors = ['bg-rose-500', 'bg-amber-500', 'bg-emerald-400', 'bg-emerald-500'];
        
        segments.forEach((segment, index) => {
            segment.className = `h-1 w-1/4 rounded-full ${
                index < strength ? colors[strength - 1] : 'bg-slate-200'
            } transition-colors duration-300`;
        });

        const messages = [
            'Too weak',
            'Fair',
            'Good',
            'Strong',
            'Very Strong'
        ];
        if (strengthText) {
            strengthText.textContent = messages[strength];
        }
    }
}

// Initialize Validator
new FormValidator();

// Form Submission
function initializeForm() {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) {
        console.error('Register form not found');
        return;
    }

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (!submitButton) {
        console.error('Submit button not found');
        return;
    }
    
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <span class="animate-pulse">Securing Account...</span>
        <div class="inline-block ml-2 animate-spin">⟳</div>
    `;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    (form as HTMLFormElement).classList.add('hidden');
    const successState = document.getElementById('successState');
    if (successState) {
        successState.classList.remove('hidden');
    }
    
    setTimeout(() => {
        window.location.href = '/dashboard';
    }, 2500);
});
}

// Initialize the form
initializeForm();