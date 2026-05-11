const resumeButton = document.getElementById('resumeButton');
const resumeInput = document.getElementById('resumeInput');
const resumeFeedback = document.getElementById('resumeFeedback');

if (resumeButton && resumeInput && resumeFeedback) {
  resumeButton.addEventListener('click', () => resumeInput.click());

  resumeInput.addEventListener('change', (event) => {
    const target = event.target;
    if (target.files && target.files.length > 0) {
      const fileName = target.files[0].name;
      resumeFeedback.textContent = `Selected resume: ${fileName}`;
    } else {
      resumeFeedback.textContent = 'No resume selected yet.';
    }
  });
}
