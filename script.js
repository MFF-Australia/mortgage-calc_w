
function calculateMortgage() {
    const principal = parseFloat(document.getElementById('principal').value);
    const years = parseInt(document.getElementById('years').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const paymentsPerYear = parseInt(document.getElementById('paymentsPerYear').value);

    const monthlyInterestRate = (interestRate / 100) / paymentsPerYear;
    const numberOfPayments = years * paymentsPerYear;

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

    const paymentAmount = principal * (numerator / denominator);
    const totalInterest = (paymentAmount * numberOfPayments) - principal;

    document.getElementById('paymentAmount').value = `$${paymentAmount.toFixed(2)}`;
    document.getElementById('totalInterest').value = `$${totalInterest.toFixed(2)}`;
}

function resetCalculator() {
    document.getElementById('principal').value = '150000';
    document.getElementById('years').value = '8';
    document.getElementById('interestRate').value = '5.5';
    document.getElementById('paymentsPerYear').value = '12';
    document.getElementById('paymentAmount').value = '';
    document.getElementById('totalInterest').value = '';
}
