// script.js

function runRiskCalculation() {
    // Initialize risk score
    let riskScore = 0;
    let resultsText = "";

    // Get demographic information
    const age = document.querySelector('input[name="age"]:checked').value;
    const gender = document.querySelector('input[name="Male"]:checked').value;

    // Age scoring
    riskScore += parseInt(age);
    riskScore += parseInt(Male);

    // Get past medical history
    const hasCHF = document.querySelector('input[name="Congestive_heart_failure"]:checked').value;
    const hasDyslipidemia = document.querySelector('input[name="dysplipidemia"]:checked').value;
    const hasHypertension = document.querySelector('input[name="hypertension"]:checked').value;
    const hasValvularHeartDisease = document.querySelector('input[name="valvular_heart_disease"]:checked').value;

    // Scoring for past medical history
    if (hasCHF === 'yes') riskScore += 2;
    if (hasDyslipidemia === 'yes') riskScore += 1;
    if (hasHypertension === 'yes') riskScore += 1;
    if (hasValvularHeartDisease === 'yes') riskScore += 1;

    // Get echo information
    const hasAtrialDilation = document.querySelector('input[name="atrial_dilation"]:checked').value;
    const hasAtrialHypertrophy = document.querySelector('input[name="atrial_hypertrophy"]:checked').value;

    // Scoring for echo results
    if (hasAtrialDilation === 'yes') riskScore += 2;
    if (hasAtrialHypertrophy === 'yes') riskScore += 2;

    // Get physiology information
    const hasTachycardia = document.querySelector('input[name="tachycardia"]:checked').value;
    const hasHeartRateVariability = document.querySelector('input[name="Heart_rate_variability"]:checked').value;
    const hasFever = document.querySelector('input[name="Fever"]:checked').value;

    // Scoring for physiology
    if (hasTachycardia === 'yes') riskScore += 2;
    if (hasHeartRateVariability === 'yes') riskScore += 1;
    if (hasFever === 'yes') riskScore += 1;

    // Prepare the result message
    resultsText = `Your calculated risk score is: ${riskScore}.`;

    // Rationale based on risk score
    if (riskScore <= 3) {
        resultsText += "\nDanny: Low risk for new-onset atrial fibrillation.";
    } else if (riskScore <= 6) {
        resultsText += "\nDanny: Moderate risk for new-onset atrial fibrillation.";
    } else {
        resultsText += "\nDanny: High risk for new-onset atrial fibrillation.";
    }

    // Display results
    document.querySelector('.result p').innerText = resultsText;
}
