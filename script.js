// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const projectTitles = document.querySelectorAll("article h3");
  
    projectTitles.forEach(title => {
      title.style.cursor = "pointer";
  
      title.addEventListener("click", () => {
        const description = title.nextElementSibling;
  
        if (description.style.display === "none") {
          description.style.display = "block";
        } else {
          description.style.display = "none";
        }
      });
    });
  });
  