// script.js

function runRiskCalculation() {
    // Initialize risk score
    let riskScore = 0;
    let resultsText = "";

    // Get demographic information
    const age = document.querySelector('input[name="age"]:checked') ? 
                document.querySelector('input[name="age"]:checked').value : null;
    
    const gender = document.querySelector('input[name="Male"]:checked') ? 
                   document.querySelector('input[name="Male"]:checked').value : null;
    
    // Get past medical history
    const hasCHF = document.querySelector('input[name="Congestive_heart_failure"]:checked') ? 
                    document.querySelector('input[name="Congestive_heart_failure"]:checked').value : null;
    
    const hasDyslipidemia = document.querySelector('input[name="dysplipidemia"]:checked') ? 
                            document.querySelector('input[name="dysplipidemia"]:checked').value : null;
    
    const hasHypertension = document.querySelector('input[name="hypertension"]:checked') ? 
                            document.querySelector('input[name="hypertension"]:checked').value : null;
    
    const hasValvularHeartDisease = document.querySelector('input[name="valvular_heart_disease"]:checked') ? 
                                    document.querySelector('input[name="valvular_heart_disease"]:checked').value : null;
    
    // Get echo information
    const hasAtrialDilation = document.querySelector('input[name="atrial_dilation"]:checked') ? 
                              document.querySelector('input[name="atrial_dilation"]:checked').value : null;
    
    const hasAtrialHypertrophy = document.querySelector('input[name="atrial_hypertrophy"]:checked') ? 
                                 document.querySelector('input[name="atrial_hypertrophy"]:checked').value : null;
    
    // Get physiology information
    const hasTachycardia = document.querySelector('input[name="tachycardia"]:checked') ? 
                           document.querySelector('input[name="tachycardia"]:checked').value : null;
    
    const hasHeartRateVariability = document.querySelector('input[name="Heart_rate_variability"]:checked') ? 
                                   document.querySelector('input[name="Heart_rate_variability"]:checked').value : null;
    
    const hasFever = document.querySelector('input[name="Fever"]:checked') ? 
                     document.querySelector('input[name="Fever"]:checked').value : null;

    // Check if all questions are answered
    const allQuestionsAnswered = 
        age !== undefined && age !== null && 
        gender !== undefined && gender !== null && 
        hasCHF &&
        hasDyslipidemia &&
        hasHypertension &&
        hasValvularHeartDisease &&
        hasAtrialDilation &&
        hasAtrialHypertrophy &&
        hasTachycardia &&
        hasHeartRateVariability &&
        hasFever;
    if (!allQuestionsAnswered) {
        document.querySelector('.result p').innerText = "Please answer all the questions.";
        return; // Exit the function if not all questions are answered
    }


    // Risk calculation based on answers
    // Example scoring logic based on responses (you can modify as needed)
    
    // Age scoring
    riskScore += parseInt(age);
    riskScore += parseInt(gender);
    
    // Scoring for past medical history
    if (hasCHF === 'yes') riskScore += 2;
    if (hasDyslipidemia === 'yes') riskScore += 1;
    if (hasHypertension === 'yes') riskScore += 1;
    if (hasValvularHeartDisease === 'yes') riskScore += 1;
    
    // Scoring for echo results
    if (hasAtrialDilation === 'yes') riskScore += 2;
    if (hasAtrialHypertrophy === 'yes') riskScore += 2;
    
    // Scoring for physiology
    if (hasTachycardia === 'yes') riskScore += 2;
    if (hasHeartRateVariability === 'yes') riskScore += 1;
    if (hasFever === 'yes') riskScore += 1;

    // Prepare the result message
    resultsText = `Your calculated risk score is: ${riskScore}.\n`;

    // Rationale based on risk score
    if (riskScore <= 3) {
        resultsText += "Danny: low risk for new-onset atrial fibrillation!";
    } else if (riskScore <= 6) {
        resultsText += "Danny: Moderate risk for new-onset atrial fibrillation!";
    } else {
        resultsText += "Danny: High risk for new-onset atrial fibrillation!
            It's important to consult with your healthcare team for a personalized plan.";
    }

    // Display results
    document.querySelector('.result p').innerText = resultsText;
}
