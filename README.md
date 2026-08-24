# Certificate Verification System

A professional webpage to display certificates with a continuous, permanent verification process running in the background.

## Features

✅ **Professional Certificate Display** - Beautifully styled certificate presentation
✅ **Permanent Verification Loop** - Continuous background verification process that never stops
✅ **Real-time Status Updates** - Live progress tracking and status indicators
✅ **Verification Log** - Detailed log of all verification steps
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Modern UI** - Gradient backgrounds, smooth animations, and professional styling

## What It Does

This webpage displays a certificate and runs a **permanent verification process** that:

1. **Cycles through 20 different verification checks** including:
   - Certificate database validation
   - Digital signature verification
   - Cryptographic hash checking
   - Blockchain registry scanning
   - Issuer authentication
   - And more...

2. **Continuously loops** - Once all verification steps complete, the process automatically restarts
3. **Updates in real-time** - Progress bar, status messages, and detailed logs update as verification progresses
4. **Shows completion badges** - After each cycle completes, displays a "✓ Verified" badge before starting the next cycle

## How to Use

### Option 1: View on GitHub Pages
The page is automatically hosted on GitHub Pages. Access it at:
```
https://prabhanjankumark.github.io/certificate-display/
```

### Option 2: Run Locally
1. Clone the repository
2. Open `index.html` in your web browser
3. The verification process will start automatically

## File Structure

```
certificate-display/
├── index.html       # Main HTML page
├── style.css        # Styling and layout
├── script.js        # Verification logic and permanent loop
└── README.md        # This file
```

## How the Verification Loop Works

The `script.js` file implements:

- **Verification Messages Array** - 20 different verification steps
- **updateVerificationStatus()** - Updates the UI with current verification step
- **startPermanentVerification()** - Initiates the permanent verification loop using `setInterval()`
- **Automatic Cycling** - When all steps complete, counter resets and process repeats indefinitely

### Key Code Logic

```javascript
// Runs every 800ms, updating verification status
setInterval(updateVerificationStatus, 800);

// When all messages are processed
if (currentMessageIndex >= verificationMessages.length) {
    currentMessageIndex = 0;  // Reset counter
    verificationCycle++;       // Increment cycle counter
    // Loop continues automatically
}
```

## Customization

You can customize the following:

### Change Verification Messages
Edit the `verificationMessages` array in `script.js` to add your own verification steps.

### Adjust Verification Speed
Change the interval timing (currently 800ms):
```javascript
setInterval(updateVerificationStatus, 800);  // Adjust this value
```

### Modify Certificate Details
Edit the certificate information in the `DOMContentLoaded` event:
```javascript
certName.textContent = 'Your Name Here';
```

### Change Colors
Modify the CSS in `style.css`, especially the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features of the Verification Process

| Feature | Description |
|---------|-------------|
| **Permanent Loop** | Never stops - continuously cycles through verification steps |
| **Progress Tracking** | Real-time progress bar showing completion percentage |
| **Status Details** | Shows current cycle number, step number, and progress |
| **Verification Log** | Detailed timestamped log of all verification activities |
| **Cycle Indicator** | Tracks how many verification cycles have completed |
| **Auto-scrolling Log** | Log automatically scrolls to show latest entries |

## Certificate Information

The certificate displays:
- Certificate holder name
- Issue date (auto-generated)
- Unique Certificate ID
- Verification status (constantly updating)
- Professional certificate design

## License

This project is open source and available for personal use.

## Contact

Created by: Prabhanjan Kumar
Repository: https://github.com/prabhanjankumark/certificate-display

---

**Note:** This is a demonstration system. The verification process is simulated for display purposes.