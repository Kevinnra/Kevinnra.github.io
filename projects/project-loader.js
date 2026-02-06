// Dynamic Project Content Loader

// Get project ID from URL parameter
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Load project data and populate page
function loadProject() {
  const projectId = getProjectId();
  
  if (!projectId || !projectsData[projectId]) {
    document.body.innerHTML = `
      <div style="text-align: center; padding: 100px 20px; color: var(--text-color);">
        <h1>Project Not Found</h1>
        <p>The requested project does not exist.</p>
        <a href="/index.html#projects" class="btn btn-primary" style="display: inline-block; margin-top: 20px;">Back to Projects</a>
      </div>
    `;
    return;
  }
  
  const project = projectsData[projectId];
  
  // Update page title
  document.title = `${project.title} - Kevinn Ramirez`;
  document.getElementById('page-title').textContent = `${project.title} - Kevinn Ramirez`;
  
  // Populate breadcrumb
  document.getElementById('breadcrumb-title').textContent = project.title;
  
  // Populate hero section
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-tagline').textContent = project.tagline;
  
  // Add tech badges
  const badgesContainer = document.getElementById('project-badges');
  badgesContainer.innerHTML = project.badges
    .map(badge => `<span class="tech-badge">${badge}</span>`)
    .join('');
  
  // Add links
  if (project.links.github) {
    const githubLink = document.getElementById('github-link');
    const githubLinkBottom = document.getElementById('github-link-bottom');
    githubLink.href = project.links.github;
    githubLink.style.display = 'inline-flex';
    githubLinkBottom.href = project.links.github;
    githubLinkBottom.style.display = 'inline-block';
  }
  
  if (project.links.demo) {
    const demoLink = document.getElementById('demo-link');
    demoLink.href = project.links.demo;
    demoLink.style.display = 'inline-flex';
  }
  
  // Populate overview section
  document.getElementById('overview-problem').textContent = project.overview.problem;
  document.getElementById('overview-solution').textContent = project.overview.solution;
  
  const resultsContainer = document.getElementById('overview-results');
  resultsContainer.innerHTML = project.overview.results
    .map(result => `<li>${result}</li>`)
    .join('');
  
  // Populate architecture section
  const archImage = document.getElementById('architecture-image');
  archImage.src = project.architecture.image;
  archImage.alt = `${project.title} Architecture`;
  document.getElementById('architecture-description').textContent = project.architecture.description;
  
  // Setup image lightbox
  setupLightbox(archImage);
  
  // Populate optional technical details section
  if (project.technicalDetails && project.technicalDetails.length > 0) {
    document.getElementById('technical-section').style.display = 'block';
    const techGrid = document.getElementById('technical-grid');
    techGrid.innerHTML = project.technicalDetails
      .map(tech => `
        <div class="tech-card">
          <h4>${tech.service}</h4>
          <p>${tech.details}</p>
        </div>
      `)
      .join('');
  }
  
  // Populate optional features section
  if (project.features && project.features.length > 0) {
    document.getElementById('features-section').style.display = 'block';
    const featuresGrid = document.getElementById('features-grid');
    featuresGrid.innerHTML = project.features
      .map(feature => `
        <div class="feature-card">
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `)
      .join('');
  }
  
  // Populate challenges section
  const challengesContainer = document.getElementById('challenges-container');
  challengesContainer.innerHTML = project.challenges
    .map(challenge => {
      let html = `
        <div class="challenge-box">
          <div class="challenge">
            <h3>${challenge.title}</h3>
            <p><strong>Problem:</strong> ${challenge.problem}</p>
          </div>
          <div class="solution">
            <h4>Solution</h4>
            <p>${challenge.solution}</p>
      `;
      
      // Add code block if present
      if (challenge.code) {
        html += `
            <div class="code-block">
              <div class="code-header">${challenge.code.title}</div>
              <pre><code class="language-${challenge.code.language}">${escapeHtml(challenge.code.content)}</code></pre>
            </div>
        `;
      }
      
      // Add benefits if present
      if (challenge.benefits && challenge.benefits.length > 0) {
        html += `
            <p style="margin-top: 1.5rem;"><strong>Benefits:</strong></p>
            <ul style="margin-left: 1.5rem; color: var(--text-color);">
              ${challenge.benefits.map(benefit => `<li style="margin: 0.5rem 0;">${benefit}</li>`).join('')}
            </ul>
        `;
      }
      
      html += `
          </div>
        </div>
      `;
      
      return html;
    })
    .join('');
  
  // Populate optional code deep dive section
  if (project.codeBlocks && project.codeBlocks.length > 0) {
    document.getElementById('code-section').style.display = 'block';
    const codeContainer = document.getElementById('code-container');
    codeContainer.innerHTML = project.codeBlocks
      .map(block => `
        <div class="code-block">
          <div class="code-header">${block.title}</div>
          <pre><code class="language-${block.language}">${escapeHtml(block.code)}</code></pre>
        </div>
      `)
      .join('');
  }
  
  // Populate metrics section
  const metricsGrid = document.getElementById('metrics-grid');
  metricsGrid.innerHTML = project.metrics
    .map(metric => `
      <div class="metric-card">
        <div class="metric-number">${metric.value}</div>
        <div class="metric-label">${metric.label}</div>
      </div>
    `)
    .join('');
  
  // Populate lessons learned section
  const lessonsGrid = document.getElementById('lessons-grid');
  lessonsGrid.innerHTML = project.lessons
    .map(lesson => `
      <div class="lesson-card">
        <p>${lesson}</p>
      </div>
    `)
    .join('');
  
  // Apply syntax highlighting after content is loaded
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

// Setup lightbox functionality for images
function setupLightbox(imageElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  
  imageElement.onclick = function() {
    lightbox.style.display = 'block';
    lightboxImg.src = this.src;
    lightboxCaption.textContent = this.alt;
  };
  
  closeBtn.onclick = function() {
    lightbox.style.display = 'none';
  };
  
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  };
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });
}

// Escape HTML for code blocks
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  loadProject();
  
  // Add smooth scrolling to all links with # in href
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});