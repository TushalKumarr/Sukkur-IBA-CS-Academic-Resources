// 1. Target the main large image element and all option buttons
const mainPic = document.getElementById('main-pic');
const buttons = document.querySelectorAll('.avatar-btn');

// 2. Attach a click event listener to every single button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    // 3. Extract the image source stored inside the data-img attribute
    const newImageSource = button.getAttribute('data-img');
    
    // 4. CORE MECHANIC: Replace the main image source with the new one
    mainPic.src = newImageSource;

    // 5. VISUAL FLUSH: Update the button focus styling
    // Remove the 'active' highlight class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add the 'active' highlight class exclusively to the clicked button
    button.classList.add('active');
  });
});
