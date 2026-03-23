/**
 * RTL Toggle Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    const htmlTag = document.documentElement;

    // Check for saved preference
    const currentDir = localStorage.getItem('dir') || 'ltr';
    htmlTag.setAttribute('dir', currentDir);
    updateToggleText(currentDir);

    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const newDir = htmlTag.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
            htmlTag.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            updateToggleText(newDir);
            
            // Dispatch event for other listeners if needed
            window.dispatchEvent(new Event('rtlChange'));
        });
    }

    function updateToggleText(dir) {
        if (!rtlToggleBtn) return;
        rtlToggleBtn.innerHTML = dir === 'ltr' ? 'RTL' : 'LTR';
    }
});
