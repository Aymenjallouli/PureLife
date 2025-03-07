
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [
      {
        id: "1",
        name: "FORCAPIL ANTI CHUTE BTE30",
        reference: "8715345004713",
        price: 59.001,
        originalPrice: 65.0,
        discount: 9,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: "2",
        name: "BIO ORIENT HUILE ESSENTIELLE DE CITRONNELLE 10ML",
        reference: "6191450602280",
        price: 59.001,
        originalPrice: 62.0,
        discount: 5,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ];
  
    const cartTableBody = document.querySelector('tbody');
    const subtotalElement = document.querySelector('.font-medium:nth-child(2)');
    const totalElement = document.querySelector('.text-lg.font-bold:nth-child(2)');
  
    function renderCartItems() {
      cartTableBody.innerHTML = '';
      let subtotal = 0;
  
      cartItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = `border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`;
  
        row.innerHTML = `
          <td class="py-6 px-6">
            <div class="flex items-start gap-4">
              <button onclick="removeItem('${item.id}')" class="text-gray-400 hover:text-red-500 transition-colors" aria-label="Remove item">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
              <div class="relative w-20 h-20 bg-white border rounded-md overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="object-contain p-1 w-full h-full"/>
              </div>
              <div>
                <div class="font-medium">${item.name}</div>
                <div class="text-sm text-gray-500 mt-1">Référence: ${item.reference}</div>
              </div>
            </div>
          </td>
          <td class="py-6 px-4">
            <div class="flex flex-col">
              <div class="text-red-500 font-medium">${item.price.toFixed(3)} DT</div>
              ${item.discount ? `
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-xs text-gray-500 line-through">${item.originalPrice.toFixed(3)} DT</span>
                  <span class="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">-${item.discount}%</span>
                </div>
              ` : ''}
            </div>
          </td>
          <td class="py-6 px-4">
            <div class="flex items-center gap-1 border rounded-md w-fit bg-cream">
              <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})" class="px-2 py-1 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Decrease quantity">
                <i data-lucide="minus" class="w-3 h-3"></i>
              </button>
              <span class="w-8 text-center font-medium">${item.quantity}</span>
              <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})" class="px-2 py-1 text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Increase quantity">
                <i data-lucide="plus" class="w-3 h-3"></i>
              </button>
            </div>
          </td>
          <td class="py-6 px-4 font-medium">${(item.price * item.quantity).toFixed(3)} DT</td>
        `;
  
        cartTableBody.appendChild(row);
        subtotal += item.price * item.quantity;
      });
  
      subtotalElement.textContent = `${subtotal.toFixed(3)} DT`;
      totalElement.textContent = `${(subtotal + 8.0).toFixed(3)} DT`;
      lucide.createIcons();
    }
  
    window.updateQuantity = function (id, newQuantity) {
      if (newQuantity < 1) return;
      const item = cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = newQuantity;
        renderCartItems();
      }
    };
  
    window.removeItem = function (id) {
      cartItems = cartItems.filter(item => item.id !== id);
      renderCartItems();
    };
  
    renderCartItems();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('form');
    const emailInput = newsletterForm.querySelector('input[type="email"]');
  
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(email)) {
        alert('Inscription réussie! Vous êtes maintenant inscrit à notre newsletter.');
        emailInput.value = '';
      } else {
        alert('Veuillez entrer une adresse email valide.');
      }
    });
  });
  
  lucide.createIcons();
  