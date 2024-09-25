function calculateRisk() {
    let score = 0;

    // Get the user's answers
    const smokingStatus = document.querySelector('input[name="Male"]:checked');
    const age = document.querySelector('input[name="18_≤_Age_<_65"]:checked') || 
                document.querySelector('input[name="65_≤_Age_<_75"]:checked') || 
                document.querySelector('input[name="75_≤_Age"]:checked');
    const congestiveHeartFailure = document.querySelector('input[name="Congestive_heart_failure"]:checked');
    const dyslipidemia = document.querySelector('input[name="dysplipidemia"]:checked');
    const hypertension = document.querySelector('input[name="hypertension"]:checked');
    const valvularHeartDisease = document.querySelector('input[name="valvular_heart_disease"]:checked');
    const atrialDilation = document.querySelector('input[name="atrial_dilation"]:checked');
    const atrialHypertrophy = document.querySelector('input[name="atrial_hypertrophy"]:checked');
    const tachycardia = document.querySelector('input[name="tachycardia"]:checked');
    const heartRateVariability = document.querySelector('input[name="Heart_rate_variability"]:checked');
    const fever = document.querySelector('input[name="Fever"]:checked');

    // Check if all questions are answered
    if (!smokingStatus || !age || !congestiveHeartFailure || !dyslipidemia ||
        !hypertension || !valvularHeartDisease || !atrialDilation || 
        !atrialHypertrophy || !tachycardia || !heartRateVariability || !fever) {
        document.querySelector('.result p').textContent = "Please answer all the questions.";
        return;
    }

    // Calculate score based on responses
    // Gender: Male
    if (smokingStatus.value === 'yes') score += 2; // Modify as per scoring guidelines if needed

    // Age scoring
    score += parseInt(age.value); // Age points are directly given as the value

    // Congestive heart failure
    if (congestiveHeartFailure.value === 'yes') score += 2;

    // Dyslipidemia
    if (dyslipidemia.value === 'yes') score += 1;

    // Hypertension
    if (hypertension.value === 'yes') score += 1;

    // Valvular heart disease
    if (valvularHeartDisease.value === 'yes') score += 1;

    // Atrial dilation
    if (atrialDilation.value === 'yes') score += 2;

    // Atrial hypertrophy
    if (atrialHypertrophy.value === 'yes') score += 1;

    // Tachycardia
    if (tachycardia.value === 'yes') score += 2;

    // Heart rate variability
    if (heartRateVariability.value === 'yes') score += 1;

    // Fever
    if (fever.value === 'yes') score += 1;

    // Display the result based on score
    let riskMessage;
    if (score >= 8) {
        riskMessage = "High risk of New-Onset Atrial Fibrillation.";
    } else if (score >= 5) {
        riskMessage = "Moderate risk of New-Onset Atrial Fibrillation.";
    } else {
        riskMessage = "Low risk of New-Onset Atrial Fibrillation.";
    }

    document.querySelector('.result p').textContent = `Your risk score is: ${score}. ${riskMessage}`;
}
