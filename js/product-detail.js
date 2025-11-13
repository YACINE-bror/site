// Product detail page functionality

// Product database (you can replace this with an API call or JSON file)
const products = {
    'z24': {
        title: 'Serrure Intelligente Z24',
        price: '3,200 MAD',
        description: 'La serrure intelligente Z24 de Tuya offre une sécurité renforcée grâce à son système de reconnaissance faciale 3D avancé. Idéale pour les entreprises et les résidences souhaitant un contrôle d\'accès fiable et moderne.',
        image: 'les produit/les serrures/z24.png',
        features: [
            'Reconnaissance faciale 3D',
            'Accès par empreinte digitale',
            'Code PIN sécurisé',
            'Connectivité Bluetooth et Wi-Fi',
            'Application mobile dédiée',
            'Gestion des accès à distance'
        ],
        specs: {
            'Type': 'Serrure intelligente biométrique',
            'Reconnaissance': 'Faciale 3D, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Capacité': 'Jusqu\'à 500 utilisateurs',
            'Batterie': 'Lithium rechargeable',
            'Dimensions': 'Standard',
            'Garantie': '2 ans'
        }
    },
    'i30': {
        title: 'Serrure Intelligente i30',
        price: '3,149 MAD',
        description: 'Serrure intelligente i30 avec contrôle d\'accès Bluetooth et application mobile intuitive. Solution moderne et sécurisée pour votre entreprise ou résidence.',
        image: 'les produit/les serrures/i30.png',
        features: [
            'Contrôle d\'accès Bluetooth',
            'Application mobile',
            'Accès par code',
            'Design moderne',
            'Installation facile',
            'Sécurité renforcée'
        ],
        specs: {
            'Type': 'Serrure intelligente',
            'Connectivité': 'Bluetooth',
            'Alimentation': 'Batterie',
            'Garantie': '1 an'
        }
    },
    'i40': {
        title: 'Serrure Intelligente i40',
        price: '3,300 MAD',
        description: 'Serrure intelligente i40 de Tuya avec fonctionnalités avancées. Solution haut de gamme pour un contrôle d\'accès professionnel.',
        image: 'les produit/les serrures/i40.png',
        features: [
            'Reconnaissance faciale',
            'Empreinte digitale',
            'Code PIN',
            'Application mobile',
            'Gestion avancée des accès',
            'Design premium'
        ],
        specs: {
            'Type': 'Serrure intelligente biométrique',
            'Reconnaissance': 'Faciale, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Garantie': '2 ans'
        }
    },
    'h20': {
        title: 'Serrure Intelligente H20',
        price: 'Sur demande',
        description: 'Serrure intelligente H20 de Tuya. Solution professionnelle avec fonctionnalités avancées pour un contrôle d\'accès optimal.',
        image: 'les produit/les serrures/h20.png',
        features: [
            'Reconnaissance faciale',
            'Empreinte digitale',
            'Code PIN',
            'Application mobile',
            'Gestion des accès',
            'Design moderne'
        ],
        specs: {
            'Type': 'Serrure intelligente biométrique',
            'Reconnaissance': 'Faciale, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Garantie': '2 ans'
        }
    },
    'x25': {
        title: 'Serrure Électronique X25 Face ID',
        price: '3,149 MAD',
        description: 'Serrure électronique X25 avec reconnaissance faciale Face ID de Tuya. Solution moderne et sécurisée pour un contrôle d\'accès fiable.',
        image: 'les produit/les serrures/x25.png',
        features: [
            'Reconnaissance faciale Face ID',
            'Empreinte digitale',
            'Code PIN sécurisé',
            'Application mobile',
            'Gestion des accès à distance',
            'Design élégant'
        ],
        specs: {
            'Type': 'Serrure électronique biométrique',
            'Reconnaissance': 'Face ID, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Capacité': 'Jusqu\'à 500 utilisateurs',
            'Batterie': 'Lithium rechargeable',
            'Garantie': '2 ans'
        }
    },
    'x10': {
        title: 'Serrure Électronique X10 Face ID Luxury',
        price: '3,149 MAD',
        description: 'Serrure électronique X10 Face ID Luxury de Tuya. Version haut de gamme avec reconnaissance faciale avancée et design premium.',
        image: 'les produit/les serrures/x10.png',
        features: [
            'Reconnaissance faciale Face ID avancée',
            'Empreinte digitale haute précision',
            'Code PIN sécurisé',
            'Application mobile intuitive',
            'Gestion avancée des accès',
            'Design luxury premium',
            'Finition haut de gamme'
        ],
        specs: {
            'Type': 'Serrure électronique biométrique luxury',
            'Reconnaissance': 'Face ID, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Capacité': 'Jusqu\'à 1000 utilisateurs',
            'Batterie': 'Lithium rechargeable longue durée',
            'Finition': 'Premium',
            'Garantie': '2 ans'
        }
    },
    'h24': {
        title: 'Serrure Électronique H24 Face ID',
        price: '3,149 MAD',
        description: 'Serrure électronique H24 avec reconnaissance faciale Face ID de Tuya. Solution professionnelle avec fonctionnalités avancées pour un contrôle d\'accès optimal.',
        image: 'les produit/les serrures/h24.png',
        features: [
            'Reconnaissance faciale Face ID 3D',
            'Empreinte digitale',
            'Code PIN sécurisé',
            'Application mobile',
            'Gestion des accès à distance',
            'Historique des accès',
            'Design professionnel'
        ],
        specs: {
            'Type': 'Serrure électronique biométrique',
            'Reconnaissance': 'Face ID 3D, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Capacité': 'Jusqu\'à 500 utilisateurs',
            'Batterie': 'Lithium rechargeable',
            'Garantie': '2 ans'
        }
    },
    'tapo': {
        title: 'Caméra Tapo',
        price: '749 MAD',
        description: 'Caméra de sécurité 2K extérieure panoramique Tapo. Parfaite pour la surveillance résidentielle et commerciale avec une qualité d\'image exceptionnelle et une vue panoramique.',
        image: 'les produit/les camera/tapo.png',
        features: [
            'Résolution 2K extérieure',
            'Vue panoramique',
            'Vision nocturne infrarouge',
            'Détection de mouvement avec alertes',
            'Audio bidirectionnel',
            'Résistance aux intempéries',
            'Stockage cloud ou local',
            'Application mobile intuitive'
        ],
        specs: {
            'Résolution': '2K (2560x1440)',
            'Type': 'Extérieure panoramique',
            'Vision nocturne': 'Infrarouge',
            'Angle de vue': 'Panoramique',
            'Stockage': 'Cloud ou carte microSD',
            'Connectivité': 'Wi-Fi 2.4GHz',
            'Protection': 'Résistance aux intempéries',
            'Garantie': '1 an'
        }
    },
    'hikvision': {
        title: 'Caméra Hikvision DS-2CE16K0T-LFS',
        price: '324 MAD',
        description: 'HIKVISION CAMERA 3K DS-2CE16K0T-LFS(2.8MM) BULLET 3K COLORVU. Caméra bullet professionnelle avec résolution 3K et technologie ColorVu pour des images en couleur même la nuit.',
        image: 'les produit/les camera/hikvision.png',
        features: [
            'Résolution 3K ColorVu',
            'Objectif 2.8mm',
            'Vision nocturne en couleur',
            'Résistance aux intempéries',
            'Installation bullet',
            'Image haute qualité'
        ],
        specs: {
            'Modèle': 'DS-2CE16K0T-LFS',
            'Résolution': '3K ColorVu',
            'Objectif': '2.8mm',
            'Type': 'Bullet',
            'Vision nocturne': 'ColorVu',
            'Garantie': '2 ans'
        },
        stock: 'rupture'
    },
    'tiandy': {
        title: 'Caméra IP Tiandy TC-C32HN',
        price: '349 MAD',
        description: 'TIANDY CAMERA IP TC-C32HN SPEC:I3/E/Y/C/2.8MM/V4.2 2MP Fixed IR Turret Camera. Caméra IP turret fixe avec infrarouge, résolution 2MP pour une surveillance efficace.',
        image: 'les produit/les camera/tiandy.png',
        features: [
            'Résolution 2MP',
            'Objectif 2.8mm',
            'Vision nocturne IR',
            'Installation turret',
            'Caméra IP fixe',
            'Version V4.2'
        ],
        specs: {
            'Modèle': 'TC-C32HN',
            'Résolution': '2MP',
            'Objectif': '2.8mm',
            'Type': 'Turret IR Fixe',
            'Vision nocturne': 'IR',
            'Version': 'V4.2',
            'Garantie': '2 ans'
        }
    },
    'dome-hikvision': {
        title: 'Caméra Dome Analogique Hybrid Light 4K/8MP HIKVISION DS-2CE78U0T-LTS',
        price: '400 MAD',
        description: 'Caméra dome analogique Hikvision avec technologie Hybrid Light 4K/8MP. Équipée d\'un système audio bidirectionnel avec micro intégré pour une communication complète.',
        image: 'les produit/les camera/dome.png',
        features: [
            'Résolution 4K/8MP',
            'Technologie Hybrid Light',
            'Audio bidirectionnel',
            'Micro intégré',
            'Installation dome',
            'Vision nocturne avancée',
            'Qualité d\'image exceptionnelle'
        ],
        specs: {
            'Modèle': 'DS-2CE78U0T-LTS',
            'Résolution': '4K/8MP',
            'Type': 'Dome analogique',
            'Technologie': 'Hybrid Light',
            'Audio': 'Two-way Audio + Micro',
            'Garantie': '2 ans'
        }
    },
    'cs-h6c': {
        title: 'Caméra IP WiFi 2MP EZVIZ Motorisée avec Audio CS-H6cm',
        price: '399 MAD',
        description: 'Caméra IP WiFi EZVIZ CS-H6cm motorisée avec résolution 2MP. Équipée d\'un système audio pour une surveillance complète et flexible.',
        image: 'les produit/les camera/CS-H6c.png',
        features: [
            'Résolution 2MP',
            'WiFi intégré',
            'Motorisation',
            'Audio bidirectionnel',
            'Application mobile',
            'Vision nocturne',
            'Contrôle à distance'
        ],
        specs: {
            'Modèle': 'CS-H6cm',
            'Résolution': '2MP',
            'Type': 'IP WiFi motorisée',
            'Connectivité': 'WiFi',
            'Audio': 'Bidirectionnel',
            'Garantie': '1 an'
        }
    },
    'hikvision-dome-ip': {
        title: 'Caméra IP Dome 2MP Smart Hybrid Audio Hikvision DS-2CD1123G2-LIU',
        price: '450 MAD',
        description: 'Caméra IP dome Hikvision DS-2CD1123G2-LIU avec résolution 2MP et technologie Smart Hybrid. Équipée d\'un système audio pour une surveillance intelligente.',
        image: 'les produit/les camera/image.png',
        features: [
            'Résolution 2MP',
            'Technologie Smart Hybrid',
            'Audio intégré',
            'Installation dome',
            'Vision nocturne',
            'Détection intelligente',
            'Application mobile'
        ],
        specs: {
            'Modèle': 'DS-2CD1123G2-LIU',
            'Résolution': '2MP',
            'Type': 'IP Dome Smart Hybrid',
            'Audio': 'Intégré',
            'Garantie': '2 ans'
        }
    },
    'm1pro': {
        title: 'M1 Pro Visio',
        price: '2,200 MAD',
        description: 'Serrure intelligente M1 Pro Visio de Tuya avec vidéophone intégré. Solution complète de contrôle d\'accès avec communication vidéo.',
        image: 'les produit/les serrures/m1pro.png',
        features: [
            'Vidéophone intégré',
            'Reconnaissance faciale',
            'Empreinte digitale',
            'Code PIN',
            'Application mobile',
            'Communication vidéo',
            'Gestion des accès'
        ],
        specs: {
            'Type': 'Serrure intelligente avec vidéophone',
            'Reconnaissance': 'Faciale, empreinte digitale, PIN',
            'Vidéophone': 'Intégré',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Garantie': '2 ans'
        }
    },
    'edgemax': {
        title: 'Edgemax M1 Pro Face ID',
        price: '2,200 MAD',
        description: 'Serrure intelligente Edgemax M1 Pro Face ID de Tuya avec reconnaissance faciale avancée et écran tactile. Solution premium pour un contrôle d\'accès de haute qualité.',
        image: 'les produit/les serrures/edgemax.png',
        features: [
            'Reconnaissance faciale avancée',
            'Écran tactile',
            'Empreinte digitale',
            'Code PIN',
            'Application mobile',
            'Design premium',
            'Installation facile'
        ],
        specs: {
            'Type': 'Serrure intelligente biométrique',
            'Reconnaissance': 'Faciale avancée, empreinte digitale, PIN',
            'Écran': 'Tactile',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Garantie': '2 ans'
        }
    },
    'x5': {
        title: 'Serrure Intelligente X5',
        price: '2,200 MAD',
        description: 'Serrure intelligente X5 de Tuya. Solution moderne et performante pour un contrôle d\'accès fiable et sécurisé.',
        image: 'les produit/les serrures/x5.png',
        features: [
            'Reconnaissance faciale',
            'Empreinte digitale',
            'Code PIN',
            'Application mobile',
            'Design moderne',
            'Performance optimale'
        ],
        specs: {
            'Type': 'Serrure intelligente biométrique',
            'Reconnaissance': 'Faciale, empreinte digitale, PIN',
            'Connectivité': 'Wi-Fi, Bluetooth',
            'Garantie': '2 ans'
        }
    },
    'ax1800': {
        title: 'Routeur WiFi 6 AX1800 bi-bande',
        price: 'Sur demande',
        description: 'Routeur WiFi 6 AX1800 bi-bande haute performance pour une connexion rapide et stable. Idéal pour les maisons et petits bureaux avec besoins en bande passante élevés.',
        image: 'les produit/les routeurs/ax1800.png',
        features: [
            'Wi-Fi 6 (802.11ax)',
            'Bi-bande (2.4 GHz et 5 GHz)',
            'Vitesse jusqu\'à 1800 Mbps',
            'Couverture étendue',
            'Pare-feu intégré',
            'Contrôle parental',
            'Installation facile'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi 6 (802.11ax)',
            'Bandes': 'Bi-bande (2.4 GHz / 5 GHz)',
            'Vitesse': 'Jusqu\'à 1800 Mbps',
            'Ports': '4 ports Gigabit Ethernet',
            'Garantie': '2 ans'
        }
    },
    'archer-be220': {
        title: 'WiFi 7 Archer BE220 – Routeur BE3600 bi-bande',
        price: 'Sur demande',
        description: 'Routeur WiFi 7 Archer BE220 dernière génération avec technologie BE3600 bi-bande. Performance ultime pour les connexions haut débit et les applications exigeantes.',
        image: 'les produit/les routeurs/archer-be220.png',
        features: [
            'Wi-Fi 7 (802.11be)',
            'BE3600 bi-bande',
            'Vitesse ultra-rapide',
            'Latence ultra-faible',
            'Pare-feu intégré',
            'Contrôle parental avancé',
            'MU-MIMO'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi 7 (802.11be)',
            'Bandes': 'Bi-bande (2.4 GHz / 5 GHz / 6 GHz)',
            'Vitesse': 'BE3600',
            'Ports': 'Multiples ports Gigabit Ethernet',
            'Garantie': '2 ans'
        }
    },
    'tl-wr844n': {
        title: 'TL-WR844N Nouveauté 300 Mbps Multi-Mode Wi-Fi Router',
        price: 'Sur demande',
        description: 'Routeur Multi-Mode Wi-Fi N 300 Mbps TL-WR844N. Solution économique et efficace pour les réseaux domestiques et petits bureaux.',
        image: 'les produit/les routeurs/tl-wr844n.png',
        features: [
            'Wi-Fi N (802.11n)',
            '300 Mbps',
            'Mode multi-fonction',
            'Pare-feu intégré',
            'Installation simple',
            'Design compact'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi N (802.11n)',
            'Vitesse': '300 Mbps',
            'Modes': 'Routeur / Point d\'accès / Répéteur',
            'Ports': '4 ports Ethernet',
            'Garantie': '2 ans'
        }
    },
    'tl-wr840n': {
        title: 'Point d\'accès Wi-Fi N 300 Mbps – TL-WR840N',
        price: 'Sur demande',
        description: 'Point d\'accès Wi-Fi N 300 Mbps TL-WR840N. Solution idéale pour étendre la couverture réseau dans votre domicile ou bureau.',
        image: 'les produit/les routeurs/tl-wr840n.png',
        features: [
            'Wi-Fi N (802.11n)',
            '300 Mbps',
            'Point d\'accès',
            'Installation facile',
            'Design discret',
            'Performance fiable'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi N (802.11n)',
            'Vitesse': '300 Mbps',
            'Type': 'Point d\'accès',
            'Ports': 'Ports Ethernet',
            'Garantie': '2 ans'
        }
    },
    'eap115': {
        title: 'Point d\'accès WiFi N 300 Mbps PoE – Plafonnier -EAP115',
        price: 'Sur demande',
        description: 'Point d\'accès WiFi N 300 Mbps PoE EAP115 plafonnier. Installation discrète au plafond avec alimentation PoE pour une intégration facile dans votre réseau.',
        image: 'les produit/les routeurs/eap115.png',
        features: [
            'Wi-Fi N (802.11n)',
            '300 Mbps',
            'Alimentation PoE',
            'Installation plafonnier',
            'Design discret',
            'Gestion centralisée'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi N (802.11n)',
            'Vitesse': '300 Mbps',
            'Type': 'Point d\'accès plafonnier',
            'Alimentation': 'PoE (Power over Ethernet)',
            'Garantie': '2 ans'
        }
    },
    'archer-c86': {
        title: 'AC1900 Wireless MU-MIMO Wi-Fi Router – Archer C86',
        price: 'Sur demande',
        description: 'Routeur AC1900 Wireless MU-MIMO Archer C86. Performance élevée avec technologie MU-MIMO pour une connexion simultanée optimale de plusieurs appareils.',
        image: 'les produit/les routeurs/archer-c86.png',
        features: [
            'AC1900',
            'Wi-Fi 5 (802.11ac)',
            'MU-MIMO',
            'Bi-bande',
            'Pare-feu intégré',
            'Contrôle parental',
            'Performance élevée'
        ],
        specs: {
            'Norme Wi-Fi': 'Wi-Fi 5 (802.11ac)',
            'Vitesse': 'AC1900',
            'Technologie': 'MU-MIMO',
            'Bandes': 'Bi-bande (2.4 GHz / 5 GHz)',
            'Ports': 'Multiples ports Gigabit Ethernet',
            'Garantie': '2 ans'
        }
    }
};

// Load product based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        loadProduct(products[productId]);
    } else {
        document.getElementById('product-content').innerHTML = '<div style="text-align: center; padding: 40px;"><h2>Produit non trouvé</h2><p><a href="produits.html">Retour aux produits</a></p></div>';
    }
});

function loadProduct(product) {
    // Set main content
    document.getElementById('product-title').textContent = product.title;
    
    // Handle stock status
    const priceElement = document.getElementById('product-price');
    if (product.stock === 'rupture') {
        priceElement.innerHTML = '<span style="color: #dc3545; font-weight: bold;">⚠️ Rupture de stock</span><br><span style="color: var(--gray); text-decoration: line-through;">' + product.price + '</span>';
    } else {
        priceElement.textContent = product.price;
    }
    
    document.getElementById('product-description').textContent = product.description;
    
    // Set main image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = product.image;
    mainImage.alt = product.title;
    mainImage.onerror = function() {
        this.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(product.title);
    };
    
    // Set features
    const featuresList = document.getElementById('product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = '<i class="fas fa-check"></i>' + feature;
        featuresList.appendChild(li);
    });
    
    // Set specifications
    const specsTable = document.getElementById('product-specs');
    specsTable.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${key}</td><td>${value}</td>`;
        specsTable.appendChild(tr);
    }
    
    // Set thumbnails (using same image for now, can be extended)
    const thumbnails = document.getElementById('product-thumbnails');
    thumbnails.innerHTML = '';
    const thumbnail = document.createElement('img');
    thumbnail.src = product.image;
    thumbnail.alt = product.title;
    thumbnail.className = 'product-thumbnail active';
    thumbnail.onerror = function() {
        this.src = 'https://via.placeholder.com/80x80?text=' + encodeURIComponent(product.title);
    };
    thumbnail.onclick = function() {
        mainImage.src = this.src;
        document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    };
    thumbnails.appendChild(thumbnail);
    
    // Disable order button if out of stock
    const orderButton = document.getElementById('order-button');
    if (product.stock === 'rupture' && orderButton) {
        orderButton.disabled = true;
        orderButton.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Rupture de stock';
        orderButton.style.opacity = '0.6';
        orderButton.style.cursor = 'not-allowed';
        orderButton.onclick = null;
    }
}

// WhatsApp number (replace with your WhatsApp business number)
const WHATSAPP_NUMBER = '212615544772'; // Format: country code + number without + or 0 (0615 544 772)

function orderViaWhatsApp() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    if (productId && products[productId]) {
        const product = products[productId];
        
        // Check if product is out of stock
        if (product.stock === 'rupture') {
            alert('Ce produit est en rupture de stock. Contactez-nous pour plus d\'informations.');
            return;
        }
        
        // Create WhatsApp message with product details
        let messageText = `Bonjour, je suis intéressé(e) par le produit suivant :\n\n`;
        messageText += `📦 *${product.title}*\n`;
        messageText += `💰 Prix : ${product.price}\n`;
        messageText += `🔢 Quantité : ${quantity}\n`;
        messageText += `\n`;
        messageText += `Merci de me contacter pour finaliser ma commande.`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(messageText);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    }
}

// Keep addToCart function for backward compatibility
function addToCart() {
    orderViaWhatsApp();
}

