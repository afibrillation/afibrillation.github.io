function calculateRisk() {
    let score = 0;

    // Get the user's answers
    const smoke = document.querySelector('input[name="smoke"]:checked');
    const exercise = document.querySelector('input[name="exercise"]:checked');
    const familyHistory = document.querySelector('input[name="familyHistory"]:checked');
    const bloodPressure = document.querySelector('input[name="bloodPressure"]:checked');

    // Check if all questions are answered
    if (!smoke || !exercise || !familyHistory || !bloodPressure) {
        document.getElementById('result').textContent = "Please answer all the questions.";
        return;
    }

    // Risk calculation based on answers
    if (smoke.value === 'yes') score += 2;
    if (exercise.value === 'no') score += 1;
    if (familyHistory.value === 'yes') score += 2;
    if (bloodPressure.value === 'yes') score += 2;

    // Display the result based on score
    let riskMessage;
    if (score >= 5) {
        riskMessage = "High risk of disease.";
    } else if (score >= 3) {
        riskMessage = "Moderate risk of disease.";
    } else {
        riskMessage = "Low risk of disease.";
    }

    document.getElementById('result').textContent = riskMessage;
}
