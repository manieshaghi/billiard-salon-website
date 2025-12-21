document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const itemName = urlParams.get('name');
    const itemPrice = urlParams.get('price');
    const itemCategory = urlParams.get('category');
    const itemFlavor = urlParams.get('flavor');

    // Update the page with item details
    if (itemName && itemPrice) {
        document.getElementById('item-name').textContent = itemName;
        document.getElementById('item-price').textContent = itemPrice;
        
        // Add a simple description based on the item
        const description = document.getElementById('item-description');
        const details = [];

        details.push(`<p><strong>Kategori:</strong> ${itemCategory || 'Genel'}</p>`);

        if (itemFlavor) {
            details.push(`<p><strong>Tat:</strong> ${itemFlavor}</p>`);
        }

        details.push('<p>Bu ürün hakkında daha fazla bilgi için lütfen personelimizle iletişime geçiniz.</p>');

        description.innerHTML = details.join('');
    } else {
        // If no item data is provided, redirect back to menu
        window.location.href = 'index.html';
    }
});
