document.addEventListener("DOMContentLoaded", () => {
  const originalDiv = document.querySelector('.box');

  originalDiv.addEventListener('click', () => {
      // Clone the original div
      const clonedDiv = originalDiv.cloneNode(true);
  
      // Generate a random color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      // Apply the random background color
      clonedDiv.style.backgroundColor = randomColor;

      // Append the cloned div to the body
      document.body.appendChild(clonedDiv);
  });
});
