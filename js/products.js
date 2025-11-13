// Products page functionality

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const brandFilter = document.getElementById('brand-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    const categories = document.querySelectorAll('.category-section');
    const allProducts = document.querySelectorAll('.product-card');
    
    // Filter by category
    categories.forEach(category => {
        if (categoryFilter === 'all' || category.dataset.category === categoryFilter) {
            category.style.display = 'block';
            
            // Filter products within visible categories
            const products = category.querySelectorAll('.product-card');
            products.forEach(product => {
                let show = true;
                
                // Filter by brand
                if (brandFilter !== 'all') {
                    const brand = product.dataset.brand;
                    if (!brand || !brand.toLowerCase().includes(brandFilter.toLowerCase())) {
                        show = false;
                    }
                }
                
                // Filter by price
                if (priceFilter !== 'all' && show) {
                    const price = parseFloat(product.dataset.price);
                    switch(priceFilter) {
                        case '0-500':
                            if (price >= 500) show = false;
                            break;
                        case '500-1000':
                            if (price < 500 || price >= 1000) show = false;
                            break;
                        case '1000-2500':
                            if (price < 1000 || price >= 2500) show = false;
                            break;
                        case '2500-3500':
                            if (price < 2500 || price >= 3500) show = false;
                            break;
                        case '3500+':
                            if (price < 3500 || price === 0) show = false;
                            break;
                    }
                }
                
                product.style.display = show ? 'block' : 'none';
            });
        } else {
            category.style.display = 'none';
        }
    });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');
        if (searchTerm) {
            searchInput.value = searchTerm;
            performSearch(searchTerm);
        }
        
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
});

function performSearch(term) {
    const products = document.querySelectorAll('.product-card');
    const termLower = term.toLowerCase();
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('.product-description')?.textContent.toLowerCase() || '';
        const category = product.querySelector('.product-category')?.textContent.toLowerCase() || '';
        
        if (title.includes(termLower) || description.includes(termLower) || category.includes(termLower)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

