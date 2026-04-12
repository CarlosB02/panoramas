const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'components', 'Header.css');

const cssToAdd = `
/* ── Newsletter Modal ── */
.newsletter-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.78rem;
    padding: 0;
}

.newsletter-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease;
}

.newsletter-modal {
    background: var(--color-surface, #fff);
    width: 90%;
    max-width: 480px;
    border-radius: var(--radius-lg, 8px);
    padding: var(--spacing-xl, 32px);
    position: relative;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    animation: slideUp 0.3s ease;
    color: var(--color-text-main, #333);
}

@keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.newsletter-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: var(--color-text-muted, #777);
    cursor: pointer;
    transition: color 0.2s;
    line-height: 1;
}

.newsletter-close:hover {
    color: var(--color-primary, #062a64);
}

.newsletter-form h3 {
    font-family: var(--font-heading, serif);
    font-size: 1.5rem;
    color: var(--color-primary, #062a64);
    margin-bottom: 8px;
    margin-top: 0;
}

.newsletter-form p {
    font-size: 0.9rem;
    color: var(--color-text-muted, #555);
    margin-bottom: 24px;
    line-height: 1.5;
}

.nl-label {
    display: block;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--color-primary, #062a64);
    margin-bottom: 8px;
}

.nl-input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--color-border, #ddd);
    border-radius: var(--radius-sm, 4px);
    font-size: 0.95rem;
    margin-bottom: 24px;
    transition: border-color 0.2s;
    font-family: var(--font-body, sans-serif);
}

.nl-input:focus {
    outline: none;
    border-color: var(--color-primary, #062a64);
}

.nl-categories {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
}

.nl-checkbox-btn {
    border: 1px solid var(--color-border-light, #eee);
    background: var(--color-background, #fafafa);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    color: var(--color-text-secondary, #666);
}

.nl-checkbox-btn input {
    display: none;
}

.nl-checkbox-btn:hover {
    border-color: #ccc;
}

.nl-checkbox-btn.checked {
    background: var(--color-primary, #062a64);
    color: white;
    border-color: var(--color-primary, #062a64);
}

.nl-submit {
    width: 100%;
    background: var(--color-accent, #e53935);
    color: white;
    border: none;
    padding: 14px;
    border-radius: var(--radius-sm, 4px);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    text-transform: uppercase;
}

.nl-submit:hover:not(:disabled) {
    background: #c62828;
}

.nl-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.newsletter-success {
    text-align: center;
    padding: 20px 0;
}

.success-icon {
    width: 60px;
    height: 60px;
    background: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto 20px;
}

.newsletter-success h3 {
    font-family: var(--font-heading, serif);
    font-size: 1.6rem;
    color: #4caf50;
    margin-bottom: 10px;
}

.newsletter-success p {
    color: var(--color-text-secondary, #666);
}
`;

fs.appendFileSync(cssPath, cssToAdd, 'utf8');
console.log('Appended CSS successfully.');
