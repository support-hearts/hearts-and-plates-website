class FormHandler {
    constructor() {
        this.forms = new Map();
        this.validators = new Map();
        this.init();
    }

    init() {
        this.setupValidators();
        this.initializeForms();
        this.handleGoogleForms();
    }

    setupValidators() {
        // Email validator
        this.validators.set('email', {
            test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Please enter a valid email address'
        });

        // Phone validator
        this.validators.set('phone', {
            test: (value) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(value),
            message: 'Please enter a valid phone number'
        });

        // Required field validator
        this.validators.set('required', {
            test: (value) => value.trim().length > 0,
            message: 'This field is required'
        });

        // Name validator
        this.validators.set('name', {
            test: (value) => /^[a-zA-Z\s]{2,}$/.test(value),
            message: 'Please enter a valid name (letters only, minimum 2 characters)'
        });

        // Date validator
        this.validators.set('date', {
            test: (value) => {
                const date = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date >= today;
            },
            message: 'Please select a future date'
        });

        // Number validator
        this.validators.set('number', {
            test: (value) => /^\d+$/.test(value) && parseInt(value) > 0,
            message: 'Please enter a valid number'
        });
    }

    initializeForms() {
        const forms = document.querySelectorAll('form[data-form-type]');
        
        forms.forEach(form => {
            const formType = form.getAttribute('data-form-type');
            this.forms.set(form, {
                type: formType,
                fields: new Map(),
                isValid: false
            });

            this.setupFormValidation(form);
            this.setupFormSubmission(form);
        });
    }

    setupFormValidation(form) {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            const validators = this.getInputValidators(input);
            
            // Real-time validation
            input.addEventListener('blur', () => {
                this.validateField(input, validators);
            });

            input.addEventListener('input', () => {
                // Clear error state on input
                this.clearFieldError(input);
                
                // Validate on input for certain fields
                if (input.type === 'email' || input.type === 'tel') {
                    setTimeout(() => {
                        this.validateField(input, validators);
                    }, 500);
                }
            });
        });

        // Form submission validation
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                const validators = this.getInputValidators(input);
                if (!this.validateField(input, validators)) {
                    isValid = false;
                }
            });

            if (isValid) {
                this.submitForm(form);
            } else {
                this.focusFirstError(form);
            }
        });
    }

    getInputValidators(input) {
        const validators = [];
        
        // Check for required attribute
        if (input.hasAttribute('required')) {
            validators.push('required');
        }

        // Check for type-based validation
        if (input.type === 'email') {
            validators.push('email');
        }
        
        if (input.type === 'tel') {
            validators.push('phone');
        }
        
        if (input.type === 'date') {
            validators.push('date');
        }
        
        if (input.type === 'number') {
            validators.push('number');
        }

        // Check for name fields
        if (input.name && input.name.toLowerCase().includes('name')) {
            validators.push('name');
        }

        // Check for custom validation attribute
        const customValidation = input.getAttribute('data-validate');
        if (customValidation) {
            validators.push(...customValidation.split(','));
        }

        return validators;
    }

    validateField(input, validators) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        for (const validatorName of validators) {
            const validator = this.validators.get(validatorName);
            if (validator && !validator.test(value)) {
                isValid = false;
                errorMessage = validator.message;
                break;
            }
        }

        if (isValid) {
            this.clearFieldError(input);
        } else {
            this.showFieldError(input, errorMessage);
        }

        return isValid;
    }

    showFieldError(input, message) {
        input.classList.add('error');
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        
        input.parentNode.appendChild(errorElement);
    }

    clearFieldError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    focusFirstError(form) {
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.focus();
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    setupFormSubmission(form) {
        // This will handle the actual form submission logic
        const formData = this.forms.get(form);
        
        if (formData.type === 'contact') {
            // Handle contact form
        } else if (formData.type === 'reservation') {
            // Handle reservation form
        }
    }

    submitForm(form) {
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simulate form submission (replace with actual implementation)
        this.processFormSubmission(data, form.getAttribute('data-form-type'))
            .then(() => {
                this.showSuccessMessage(form);
                form.reset();
            })
            .catch((error) => {
                this.showErrorMessage(form, error.message);
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
            });
    }

    async processFormSubmission(data, formType) {
        // This is where you'd integrate with your backend or Google Forms
        console.log(`Submitting ${formType} form:`, data);
        
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success/failure
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Submission failed. Please try again.'));
                }
            }, 2000);
        });
    }

    showSuccessMessage(form) {
        const message = document.createElement('div');
        message.className = 'alert alert-success';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Thank you! Your submission has been received. We'll contact you shortly.
        `;
        
        form.parentNode.insertBefore(message, form);
        
        // Auto remove after delay
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    showErrorMessage(form, errorText) {
        const message = document.createElement('div');
        message.className = 'alert alert-error';
        message.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            ${errorText}
        `;
        
        form.parentNode.insertBefore(message, form);
        
        // Auto remove after delay
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    handleGoogleForms() {
        // Handle Google Forms integration
        const googleForms = document.querySelectorAll('.google-form');
        
        googleForms.forEach(form => {
            // Add loading state
            form.addEventListener('load', () => {
                form.style.opacity = '1';
            });

            // Handle form submission completion (if possible)
            form.addEventListener('load', () => {
                try {
                    const formDoc = form.contentDocument || form.contentWindow.document;
                    const submitBtn = formDoc.querySelector('[type="submit"]');
                    
                    if (submitBtn) {
                        submitBtn.addEventListener('click', () => {
                            // Show confirmation message after delay
                            setTimeout(() => {
                                this.showGoogleFormConfirmation(form);
                            }, 2000);
                        });
                    }
                } catch (e) {
                    // Cross-origin restrictions prevent access
                    console.log('Cannot access Google Form content due to CORS');
                }
            });
        });
    }

    showGoogleFormConfirmation(formContainer) {
        const confirmation = document.createElement('div');
        confirmation.className = 'form-confirmation';
        confirmation.innerHTML = `
            <div class="glass p-4 rounded-xl text-center">
                <i class="fas fa-check-circle text-primary text-4xl mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">Thank You!</h3>
                <p class="text-secondary">
                    Your submission has been received. Our team will contact you within 24 hours 
                    to discuss your requirements and provide a customized quote.
                </p>
                <div class="mt-4 p-3 bg-primary/10 rounded-lg">
                    <h4 class="text-primary font-semibold mb-2">What happens next?</h4>
                    <ul class="text-sm text-secondary text-left">
                        <li>✓ Our manager will review your request</li>
                        <li>✓ We'll contact you within 24 hours</li>
                        <li>✓ Discuss pricing and customization options</li>
                        <li>✓ Confirm your booking with advance payment</li>
                    </ul>
                </div>
            </div>
        `;
        
        formContainer.parentNode.appendChild(confirmation);
        
        // Smooth scroll to confirmation
        confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Utility function to prefill forms
    prefillForm(formSelector, data) {
        const form = document.querySelector(formSelector);
        if (!form) return;

        Object.entries(data).forEach(([key, value]) => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field) {
                field.value = value;
            }
        });
    }

    // Function to get form data as object
    getFormData(formSelector) {
        const form = document.querySelector(formSelector);
        if (!form) return {};

        const formData = new FormData(form);
        return Object.fromEntries(formData.entries());
    }
}

// Initialize forms when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.formHandler = new FormHandler();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormHandler;
}