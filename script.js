function calculateMortgage() {
    // Clean and parse the principal value (e.g., "$150,000" -> 150000)
    const principal = parseFloat(document.getElementById('principal').value.replace(/[^\d.-]/g, ''));
    // Clean and parse the years value (e.g., "8 years" -> 8)
    const years = parseInt(document.getElementById('years').value.replace(/[^\d]/g, ''), 10);
    // Clean and parse the interest rate value (e.g., "6%" -> 6)
    const interestRate = parseFloat(document.getElementById('interestRate').value.replace(/[^\d.-]/g, ''));
    // Assuming paymentsPerYear is still a number input
    const paymentsPerYear = parseInt(document.getElementById('paymentsPerYear').value);

    // Calculating monthly interest rate
    const monthlyInterestRate = (interestRate / 100) / paymentsPerYear;
    const numberOfPayments = years * paymentsPerYear;

    // Mortgage calculation formula
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    // Calculate payment amount and total interest
    const paymentAmount = principal * (numerator / denominator);
    const totalInterest = (paymentAmount * numberOfPayments) - principal;

    // Displaying the results with formatting
    document.getElementById('paymentAmount').value = `$${paymentAmount.toFixed(2)}`;
    document.getElementById('totalInterest').value = `$${totalInterest.toFixed(2)}`;
}

function resetCalculator() {
    // Reset the input fields to default values with formatting
    document.getElementById('principal').value = '$150,000';
    document.getElementById('years').value = '8 years';
    document.getElementById('interestRate').value = '5.5%';
    document.getElementById('paymentsPerYear').value = '12';
    document.getElementById('paymentAmount').value = '';
    document.getElementById('totalInterest').value = '';
}
