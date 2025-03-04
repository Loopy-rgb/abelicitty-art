document.addEventListener("DOMContentLoaded", function () {
  // Handle the purchase type selection
  document.getElementById('purchaseType').addEventListener('change', function () {
      var preOrderDetails = document.getElementById('preOrderDetails');
      
      if (this.value === 'preOrder') {
          preOrderDetails.style.display = 'block';
      } else {
          preOrderDetails.style.display = 'none';
      }
  });

  // Handle the payment method selection
  document.getElementById('paymentMethod').addEventListener('change', function () {
      var paymentDetails = document.getElementById('paymentDetails');
      
      if (this.value === 'website') {
          paymentDetails.style.display = 'block';
      } else {
          paymentDetails.style.display = 'none';
      }
  });
});
