// Hero fade out removed

// Rotating text removed

// Count up animation for stats
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statFigures = entry.target.querySelectorAll('.stat-figure');
        statFigures.forEach(figure => {
          const text = figure.textContent;
          const number = parseInt(text.replace(/[^\d]/g, ''));
          if (!isNaN(number)) {
            animateValue(figure, 0, number, 2000);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  });

  const statsSection = document.querySelector('.statistics');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

document.addEventListener('DOMContentLoaded', initCountUp);

// FAQ accordion (single-open)
document.querySelectorAll(".accordion .accordion-item").forEach((item) => {
  const btn = item.querySelector(".accordion-trigger");
  const panel = item.querySelector(".accordion-content");
  if (!btn || !panel) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    document
      .querySelectorAll(".accordion .accordion-trigger")
      .forEach((b) => b.setAttribute("aria-expanded", "false"));
    document
      .querySelectorAll(".accordion .accordion-content")
      .forEach((p) => (p.hidden = true));
    if (!open) {
      btn.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    if (window.location.pathname.includes('index2.html')) {
      window.location.href = 'index.html';
    } else {
      window.location.href = 'index2.html';
    }
  });
}