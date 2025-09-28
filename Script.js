document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    document.querySelector('.nav').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the buttons by their IDs or classes
  const resumeButton = document.getElementById('RESUME');
  const githubButton = document.querySelector('.fa-github');
  const linkedinButton = document.querySelector('.fa-linkedin');
  const liveButton = document.querySelector('project');
  if(liveButton){
    liveButton.addEventListener('click', function(){
      window.open('https://cssproject-blue.vercel.app/','_blank');
    });
  }
  // Add a click event listener to the resume button
  if (resumeButton) {
    resumeButton.addEventListener('click', function() {
      // Create an anchor tag to trigger the download
      const link = document.createElement('a');
      link.href = 'My Resume (2).pdf'; // The path to your resume file
      link.download = 'Sai-Vikas-Rachakonda-Resume.pdf'; // Suggested file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Add a click event listener to the GitHub button
  if (githubButton) {
    githubButton.addEventListener('click', function() {
      window.open('https://github.com/SaiVikas2409', '_blank');
    });
  }

  // Add a click event listener to the LinkedIn button
  if (linkedinButton) {
    linkedinButton.addEventListener('click', function() {
      window.open('https://www.linkedin.com/in/saivikas-rachakonda-a46b87253', '_blank');
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const contactIcons = document.querySelectorAll('.contact-icon button');

    contactIcons.forEach(button => {
        const icon = button.querySelector('i');
        
        if (icon.classList.contains('fa-github')) {
            button.addEventListener('click', function() {
                window.open('https://github.com/SaiVikas2409', '_blank');
            });
        }

        if (icon.classList.contains('fa-linkedin')) {
            button.addEventListener('click', function() {
                window.open('https://www.linkedin.com/in/saivikas-rachakonda-a46b87253', '_blank');
            });
        }
    });
});