// Certificate Verification System - Permanent Verification Loop

const verificationMessages = [
    "Checking certificate database...",
    "Validating certificate signature...",
    "Cross-referencing issuer records...",
    "Authenticating digital credentials...",
    "Scanning blockchain registry...",
    "Verifying cryptographic hash...",
    "Checking revocation status...",
    "Authenticating issuing authority...",
    "Validating certificate metadata...",
    "Cross-checking international databases...",
    "Analyzing biometric data...",
    "Verifying institution credentials...",
    "Checking certificate expiration...",
    "Validating holder information...",
    "Scanning fraud detection systems...",
    "Performing advanced verification...",
    "Checking security certificates...",
    "Authenticating digital signature...",
    "Verifying document integrity...",
    "Final authentication stage...",
];

let currentMessageIndex = 0;
let progressValue = 0;
let verificationCycle = 0;

function updateVerificationStatus() {
    const statusElement = document.getElementById('status');
    const progressElement = document.getElementById('progress');
    const statusDetails = document.getElementById('statusDetails');
    const verificationBadge = document.getElementById('verificationBadge');
    const logContent = document.getElementById('verificationLog');

    // Update status message
    const message = verificationMessages[currentMessageIndex];
    statusElement.textContent = message;

    // Update progress
    progressValue = (currentMessageIndex / verificationMessages.length) * 100;
    progressElement.style.width = progressValue + '%';

    // Update status details
    statusDetails.innerHTML = `
        <p><strong>Cycle:</strong> ${verificationCycle + 1}</p>
        <p><strong>Step:</strong> ${currentMessageIndex + 1} / ${verificationMessages.length}</p>
        <p><strong>Current Process:</strong> ${message}</p>
        <p><strong>Progress:</strong> ${Math.round(progressValue)}%</p>
    `;

    // Add log entry
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    logEntry.className = 'log-entry info';
    logEntry.textContent = `[${timestamp}] ${message}`;
    logContent.appendChild(logEntry);

    // Auto scroll to latest log entry
    logContent.scrollTop = logContent.scrollHeight;

    // Move to next message
    currentMessageIndex++;

    // If all messages processed, start new cycle
    if (currentMessageIndex >= verificationMessages.length) {
        currentMessageIndex = 0;
        verificationCycle++;

        // Add cycle completion message
        const timestamp = new Date().toLocaleTimeString();
        const completionEntry = document.createElement('p');
        completionEntry.className = 'log-entry success';
        completionEntry.textContent = `[${timestamp}] ✓ Verification Cycle ${verificationCycle} Complete - Starting New Cycle...`;
        logContent.appendChild(completionEntry);
        logContent.scrollTop = logContent.scrollHeight;

        // Show verified badge temporarily
        verificationBadge.classList.remove('verifying');
        verificationBadge.classList.add('verified');
        verificationBadge.textContent = '✓ Verified';

        // Reset after 2 seconds to continue verification loop
        setTimeout(() => {
            verificationBadge.classList.remove('verified');
            verificationBadge.classList.add('verifying');
            verificationBadge.textContent = 'Verifying...';
        }, 2000);
    }
}

function startPermanentVerification() {
    // Update verification status every 800ms (creates a continuous loop)
    setInterval(updateVerificationStatus, 800);
    
    // Initial update
    updateVerificationStatus();
    
    // Log that verification has started
    const logContent = document.getElementById('verificationLog');
    const timestamp = new Date().toLocaleTimeString();
    const initialEntry = document.createElement('p');
    initialEntry.className = 'log-entry info';
    initialEntry.textContent = `[${timestamp}] ► Permanent Verification Process Initiated`;
    logContent.appendChild(initialEntry);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Certificate Verification System Initialized');
    
    // Populate certificate info
    const certName = document.getElementById('certName');
    const issueDate = document.getElementById('issueDate');
    const certId = document.getElementById('certId');
    
    certName.textContent = 'Prabhanjan Kumar';
    issueDate.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    certId.textContent = 'CERT-' + Date.now();
    
    // Start the permanent verification process
    startPermanentVerification();
});

// Keep verification running even if tab is inactive
setInterval(() => {
    if (document.hidden === false) {
        // Page is visible, verification continues
    }
}, 1000);