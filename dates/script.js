// Function to format the current date and time
function formatDate(date) {
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Function to calculate the difference in days between two dates
function calculateDateDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Display the current date and time
const currentDateTimeElement = document.getElementById('currentDateTime');
const now = new Date();
currentDateTimeElement.textContent = formatDate(now);

// Add event listener to the date picker
const datePicker = document.getElementById('datePicker');
datePicker.addEventListener('change', (event) => {
    const selectedDate = new Date(event.target.value);
    const diffDays = calculateDateDifference(now, selectedDate);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The selected date is ${diffDays} day(s) from today.`;
});
