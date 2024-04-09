document.getElementById('demoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    for (let [name, value] of formData.entries()) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `${name}: ${value}`;
      outputDiv.appendChild(paragraph);
    }
  });
  