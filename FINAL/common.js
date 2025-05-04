// Function to navigate based on the selected role and language
function navigate(role) {
    const lang = document.getElementById("language").value;
    if (role === "customer") {
        window.location.href = `customer.html?lang=${lang}`;
    } else if (role === "seller") {
        window.location.href = `seller.html?lang=${lang}`;
    }
}

// Function to update the language dynamically when the dropdown is changed
function updateLanguage() {
    const lang = document.getElementById("language").value;
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', lang); // Update the language in URL
    window.location.search = urlParams.toString(); // Refresh the page with new language
}

// Function to translate the page content based on the selected language
function translatePage() {
    const translations = {
        en: {
            header: "Welcome",
            description: "This is the dashboard."
        },
        ta: {
            header: "வெற்கொள்ளுங்கள்",
            description: "இந்தது டாஷ்போர்ட்."
        },
        hi: {
            header: "स्वागत है",
            description: "यह डैशबोर्ड है।"
        },
        te: {
            header: "స్వాగతం",
            description: "ఇది డాష్‌బోర్డ్."
        },
        ml: {
            header: "സ്വാഗതം",
            description: "ഇത് ഡാഷ്‌ബോർഡാണ്."
        },
        kn: {
            header: "ಸ್ವಾಗತ",
            description: "ಇದು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್."
        }
    };

    const selectedLang = new URLSearchParams(window.location.search).get('lang') || 'en';
    document.getElementById("header").textContent = translations[selectedLang].header;
    document.getElementById("description").textContent = translations[selectedLang].description;
}

// Translate page content on load
window.onload = translatePage;