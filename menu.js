document.addEventListener('DOMContentLoaded', function() {
    const pricesContainer = document.getElementById('prices-container');
    const menuContainer = document.getElementById('menu-container');

    // Game prices data
    const gamePrices = [
        {
            name: 'Tek Kişilik (Antrenman)',
            price: '100 TL/saat',
            hours: '12:00 - 17:00',
            startTime: 12,
            endTime: 17,
            isSpecial: true
        },
        {
            name: 'İki Kişilik',
            price: '300 TL/saat',
            hours: 'Tüm gün',
            isSpecial: false
        },
        {
            name: 'Üç veya Dört Kişilik',
            price: '400 TL/saat',
            hours: 'Tüm gün',
            isSpecial: false
        }
    ];

    // Check current time
    const now = new Date();
    const currentHour = now.getHours();
    const isTrainingTime = currentHour >= 12 && currentHour < 17;

    // Display game prices
    if (pricesContainer) {
        pricesContainer.innerHTML = `
            <div class="prices-cards">
                ${gamePrices.map(game => `
                    <div class="price-card ${game.isSpecial && isTrainingTime ? 'special-offer' : ''}">
                        <div class="price-card-title">${game.name}</div>
                        <div class="price-card-price">${game.price}</div>
                        <div class="price-card-hours">${game.hours}</div>
                    </div>
                `).join('')}
            </div>
            ${isTrainingTime ? 
                `<p class="special-note">\u26A0\uFE0F Tek Kişilik Antrenman fırsatından yararlanmak için acele edin! (Sadece 12:00-17:00 arası)</p>` : 
                currentHour < 12 ?
                `<p class="closed-note">\uD83D\uDD52 Tek Kişilik Antrenman bugün 12:00'de başlayacaktır.</p>` :
                `<p class="closed-note">\uD83D\uDD52 Tek Kişilik Antrenman için yarın 12:00'yi bekleyin.</p>`
            }
        `;
    }

    // Menu sections with flavors
    const menuSections = [
        {
            category: 'Sıcak İçecekler',
            items: [
                { name: 'Çay', price: '30 TL', flavor: 'Demli klasik tat', category: 'Sıcak İçecekler' },
                { name: 'Türk Kahvesi', price: '100 TL', flavor: 'Yoğun kavrulmuş aroması', category: 'Sıcak İçecekler' },
                { name: 'Nescafe', price: '100 TL', flavor: 'Hafif kremalı kahve', category: 'Sıcak İçecekler' }
            ]
        },
        {
            category: 'Soğuk İçecekler',
            items: [
                { name: 'Su', price: '25 TL', flavor: 'Doğal ve ferah', category: 'Soğuk İçecekler' },
                { name: 'Soda', price: '30 TL', flavor: 'Mineral zengini tazelik', category: 'Soğuk İçecekler' }
            ]
        },
        {
            category: 'Gazlı İçecekler',
            items: [
                { name: 'Fanta', price: '80 TL', flavor: 'Portakal aromalı bulaşan tat', category: 'Gazlı İçecekler' },
                { name: 'Sprite', price: '80 TL', flavor: 'Limon ferahlığı', category: 'Gazlı İçecekler' },
                { name: 'Kola', price: '80 TL', flavor: 'Karamel & baharat dengesi', category: 'Gazlı İçecekler' }
            ]
        },
        {
            category: 'Soğuk Çaylar',
            items: [
                { name: 'Fuse Tea Lemon', price: '80 TL', flavor: 'Limon ferahlatıcı tat', category: 'Soğuk Çaylar' },
                { name: 'Fuse Tea Peach', price: '80 TL', flavor: 'Şeftali aromalı yumuşak içim', category: 'Soğuk Çaylar' }
            ]
        },
        {
            category: 'Atıştırmalıklar',
            items: [
                { name: 'Gofret', price: '35 TL', flavor: 'Çikolata dolgulu çıtır katlar', category: 'Atıştırmalıklar' },
                { name: 'Kek', price: '35 TL', flavor: 'Kakaolu yumuşak kek', category: 'Atıştırmalıklar' },
                { name: 'Tost', price: '130 TL', flavor: 'Kaşar & sucuk dolgulu', category: 'Atıştırmalıklar', outOfStock: true }
            ]
        }
    ];

    // Display categorized menu
    if (menuContainer) {
        menuContainer.innerHTML = menuSections.map(section => `
            <div class="menu-category">
                <h3>${section.category}</h3>
                <div class="menu-items">
                    ${section.items.map(item => `
                        <a href="menu-item.html?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&category=${encodeURIComponent(section.category)}&flavor=${encodeURIComponent(item.flavor || '')}"
                           target="_blank"
                           class="menu-item ${item.outOfStock ? 'out-of-stock' : ''}">
                            <div class="menu-item-top">
                                <div class="menu-item-name">${item.name}</div>
                                <div class="menu-item-price">${item.price}</div>
                            </div>
                            ${item.flavor ? `<div class="menu-item-flavor">${item.flavor}</div>` : ''}
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
});
