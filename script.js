function calcScore() {

  event.preventDefault();

  // Get values
  const examScoreInput = document.getElementById('exam-score');
  const examScore = parseFloat(examScoreInput.value);

  const pimScoreInput = document.getElementById('pim-score');
  const pimScore = parseFloat(pimScoreInput.value);

  const assessmentGradeScoreInput = document.getElementById('assesment-grade-score');
  const assessmentGradeScore = parseFloat(assessmentGradeScoreInput.value);


  // convert str to float
  const finalScore = ((7 * examScore) + (2 * pimScore) + assessmentGradeScore) / 10;

  const finalScoreText = document.querySelector('.final-score-text');
  finalScoreText.textContent = finalScore.toFixed(2);

  if (finalScore > 7) {
    finalScoreText.className = 'final-score-text approved'
  } else {
    finalScoreText.className = 'final-score-text reproved'
  }
}