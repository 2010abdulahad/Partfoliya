/**
 * Abdulahad Mahmudjonov - Portfolio Application Logic
 * Features: Dark/Light Mode, 3-Language i18n, Dynamic Typing, Filterable Projects/Skills,
 * Modals, Toasts, and Java REST Backend Integration.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. STATE MANAGEMENT (Theme, Language)
  // ============================================================
  const state = {
    theme: localStorage.getItem('portfolio_theme') || 'dark',
    lang: localStorage.getItem('preferred_lang') || 'uz',
    backendOnline: false,
    activeFilterSkill: 'all',
    activeFilterProject: 'all',
    typewriterIndex: 0,
    typewriterChar: 0,
    typewriterDeleting: false,
    typewriterTimeout: null
  };

  // DOM Elements
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const currentLangLabel = document.getElementById('current-lang-label');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const backendStatusPill = document.getElementById('backend-status-pill');
  const statusIndicator = document.getElementById('status-indicator');
  const statusText = document.getElementById('status-text');
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  // ============================================================
  // 2. THEME SWITCHING (Dark / Light Mode)
  // ============================================================
  function applyTheme(theme, notify = false) {
    state.theme = theme;
    localStorage.setItem('portfolio_theme', theme);

    if (theme === 'light') {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
      if (notify) showToast(getTranslation('toast_theme_light'), 'info');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      if (themeIcon) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
      if (notify) showToast(getTranslation('toast_theme_dark'), 'info');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme, true);
    });
  }

  // Initialize Theme
  applyTheme(state.theme, false);

  // ============================================================
  // 3. MULTI-LANGUAGE SYSTEM (UZ / RU / EN)
  // ============================================================
  function getTranslation(key) {
    if (typeof translations !== 'undefined' && translations[state.lang] && translations[state.lang][key]) {
      return translations[state.lang][key];
    }
    return key;
  }

  function applyLanguage(lang, notify = false) {
    if (typeof translations === 'undefined' || !translations[lang]) return;
    
    state.lang = lang;
    localStorage.setItem('preferred_lang', lang);

    // Update label in navbar
    const langLabels = { uz: 'UZ', ru: 'RU', en: 'EN' };
    if (currentLangLabel) {
      currentLangLabel.textContent = langLabels[lang] || lang.toUpperCase();
    }

    // Update active class on dropdown options
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = getTranslation(key);
      if (text) {
        el.innerHTML = text;
      }
    });

    // Translate placeholder attributes with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const text = getTranslation(key);
      if (text) {
        el.setAttribute('placeholder', text);
      }
    });

    // Restart typewriter with current language roles
    resetTypewriter();

    if (notify) {
      showToast(getTranslation('toast_lang_changed'), 'info');
    }
  }

  // Language Dropdown Events
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        applyLanguage(selectedLang, true);
        langMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('open');
    });
  }

  // Initialize Language
  applyLanguage(state.lang, false);

  // ============================================================
  // 4. TYPEWRITER EFFECT (Hero Section)
  // ============================================================
  const roleTypingEl = document.getElementById('role-typing');

  function resetTypewriter() {
    if (state.typewriterTimeout) clearTimeout(state.typewriterTimeout);
    state.typewriterIndex = 0;
    state.typewriterChar = 0;
    state.typewriterDeleting = false;
    typeRole();
  }

  function typeRole() {
    if (!roleTypingEl) return;

    const roles = (typeof translations !== 'undefined' && translations[state.lang]?.hero_roles) 
      ? translations[state.lang].hero_roles 
      : ["Java Backend Developer", "Spring Boot & REST API", "High Performance Architecture"];

    const currentRole = roles[state.typewriterIndex % roles.length];

    if (!state.typewriterDeleting) {
      state.typewriterChar++;
      roleTypingEl.textContent = currentRole.substring(0, state.typewriterChar);

      if (state.typewriterChar === currentRole.length) {
        state.typewriterDeleting = true;
        state.typewriterTimeout = setTimeout(typeRole, 2000); // Wait 2s on full word
        return;
      }
      state.typewriterTimeout = setTimeout(typeRole, 75);
    } else {
      state.typewriterChar--;
      roleTypingEl.textContent = currentRole.substring(0, state.typewriterChar);

      if (state.typewriterChar === 0) {
        state.typewriterDeleting = false;
        state.typewriterIndex++;
        state.typewriterTimeout = setTimeout(typeRole, 400); // Short pause before next
        return;
      }
      state.typewriterTimeout = setTimeout(typeRole, 40);
    }
  }

  resetTypewriter();

  // ============================================================
  // 5. FILTERING (Skills & Projects)
  // ============================================================
  // Skills Filter
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      state.activeFilterSkill = filter;

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Projects Filter
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      state.activeFilterProject = filter;

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============================================================
  // 6. MODALS (Project Detail & CV Modal)
  // ============================================================
  const modalOverlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Projects dataset for detailed modal display
  const projectDetails = {
    'restaurant': {
      titleKey: 'project_1_title',
      badge: 'Java 21 / Concurrency',
      image: 'img/project-restaurant.svg',
      detailKey: 'project_1_modal_details',
      features: [
        'Multi-threaded order processing with PriorityQueues',
        'Automatic receipt & bill generation with tax calculations',
        'Table reservation lock manager (Thread-safe concurrency)',
        'In-memory cache + persistent disk transaction log'
      ],
      tags: ['Java 21', 'OOP', 'Multithreading', 'Collections', 'Design Patterns'],
      github: 'https://github.com/AbdulahadMahmudjonov/RestaurantManagement'
    },
    'education': {
      titleKey: 'project_2_title',
      badge: 'Spring Boot / PostgreSQL',
      image: 'img/project-education.svg',
      detailKey: 'project_2_modal_details',
      features: [
        'Role-Based Access Control (Admin, Teacher, Student)',
        'Attendance tracking with monthly auto-debt invoicing',
        'Spring Data JPA with optimized B-Tree indexed queries',
        'RESTful endpoints with Swagger/OpenAPI documentation'
      ],
      tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST API'],
      github: 'https://github.com/AbdulahadMahmudjonov/EduCenterCRM'
    },
    'banking': {
      titleKey: 'project_3_title',
      badge: 'FinTech / High-Security',
      image: 'img/project-banking.svg',
      detailKey: 'project_3_modal_details',
      features: [
        'Strict ACID transactional fund transfers (@Transactional)',
        'Pessimistic locking to prevent double-spending & race conditions',
        'JWT token authentication & sensitive data hashing (BCrypt)',
        'Comprehensive JUnit 5 & Mockito test coverage'
      ],
      tags: ['Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'JUnit 5'],
      github: 'https://github.com/AbdulahadMahmudjonov/BankingWalletAPI'
    },
    'telegram_bot': {
      titleKey: 'project_4_title',
      badge: 'Telegram API / Webhook',
      image: 'img/project-bot.svg',
      detailKey: 'project_4_modal_details',
      features: [
        'Interactive inline keyboards for category & product browsing',
        'Shopping cart state management with instant checkout flow',
        'Direct push notifications to administration channel on new orders',
        'Webhook architecture for sub-10ms response latency'
      ],
      tags: ['Java', 'TelegramBots API', 'Webhook', 'REST Client', 'JSON'],
      github: 'https://github.com/AbdulahadMahmudjonov/EcommerceTelegramBot'
    }
  };

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    const title = getTranslation(data.titleKey);
    const detail = getTranslation(data.detailKey);
    const featuresTitle = getTranslation('project_features_title');
    const techTitle = getTranslation('project_tech_used');
    const githubBtnText = getTranslation('project_github_btn');

    modalBody.innerHTML = `
      <h2 class="modal-title">${title}</h2>
      <div class="modal-subtitle">${data.badge}</div>
      <div class="modal-img-wrap">
        <img src="${data.image}" alt="${title}">
      </div>
      <p class="modal-text">${detail}</p>
      
      <h4 class="modal-section-title">${featuresTitle}</h4>
      <ul style="margin-left: 20px; margin-bottom: 24px; color: var(--text-secondary); line-height: 1.8;">
        ${data.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <h4 class="modal-section-title">${techTitle}</h4>
      <div class="modal-tech-list">
        ${data.tags.map(t => `<span class="badge" style="margin: 0;">#${t}</span>`).join('')}
      </div>

      <div class="modal-actions">
        <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-primary">
          <i class="fab fa-github"></i> ${githubBtnText}
        </a>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function openCvModal() {
    const title = getTranslation('cv_modal_title');
    const downloadText = getTranslation('cv_download_pdf');
    const summaryTitle = getTranslation('cv_summary_title');
    const summaryText = getTranslation('cv_summary_text');

    modalBody.innerHTML = `
      <h2 class="modal-title">${title}</h2>
      <div class="modal-subtitle">Java Backend Developer • Tashkent, Uzbekistan</div>
      
      <div style="background: var(--bg-input); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin: 20px 0;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">${summaryTitle}</h4>
        <p style="color: var(--text-secondary); line-height: 1.7;">${summaryText}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
        <div>
          <h4 style="color: var(--text-primary); margin-bottom: 8px;">Technical Stack:</h4>
          <ul style="color: var(--text-muted); padding-left: 20px; font-size: 0.95rem; line-height: 1.6;">
            <li>Java 21, OOP, Collections</li>
            <li>Spring Boot, Spring MVC, JPA</li>
            <li>PostgreSQL, MySQL, Redis</li>
            <li>Docker, Git, CI/CD, Linux</li>
            <li>Clean Architecture, SOLID, JUnit</li>
          </ul>
        </div>
        <div>
          <h4 style="color: var(--text-primary); margin-bottom: 8px;">Contact & Info:</h4>
          <ul style="color: var(--text-muted); list-style: none; font-size: 0.95rem; line-height: 1.8;">
            <li><i class="fas fa-envelope" style="color: var(--accent); width: 20px;"></i> mahmudjonov.dev@gmail.com</li>
            <li><i class="fab fa-telegram" style="color: var(--accent); width: 20px;"></i> @Abdulahad_Mahmudjonov</li>
            <li><i class="fas fa-map-marker-alt" style="color: var(--accent); width: 20px;"></i> Tashkent, Uzbekistan</li>
            <li><i class="fas fa-check-circle" style="color: var(--accent); width: 20px;"></i> Available for hire</li>
          </ul>
        </div>
      </div>

      <div class="modal-actions">
        <button id="btn-print-cv" class="btn btn-primary">
          <i class="fas fa-print"></i> ${downloadText}
        </button>
      </div>
    `;

    const printBtn = document.getElementById('btn-print-cv');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Attach modal trigger buttons
  document.querySelectorAll('[data-project-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-project-modal');
      openProjectModal(pId);
    });
  });

  document.querySelectorAll('[data-cv-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // ============================================================
  // 7. TOAST NOTIFICATION UTILITY
  // ============================================================
  function showToast(message, type = 'success') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
    
    const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ============================================================
  // 8. CLIPBOARD COPY UTILITIES
  // ============================================================
  const copyJsonBtn = document.getElementById('copy-json-btn');
  if (copyJsonBtn) {
    copyJsonBtn.addEventListener('click', () => {
      const jsonText = document.getElementById('profile-json-code')?.textContent || '';
      navigator.clipboard.writeText(jsonText.trim()).then(() => {
        showToast(getTranslation('toast_copied'), 'success');
      }).catch(() => {
        showToast('Nusxa olindi', 'success');
      });
    });
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mahmudjonov.dev@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`${email} - ${getTranslation('toast_copied')}`, 'success');
      }).catch(() => {
        showToast(`${email} - ${getTranslation('toast_copied')}`, 'success');
      });
    });
  }

  // ============================================================
  // 9. BACKEND API INTEGRATION (Java REST Server)
  // ============================================================
  async function checkBackendHealth() {
    try {
      const response = await fetch('/api/health', { method: 'GET' });
      if (response.ok) {
        const data = await response.json();
        state.backendOnline = true;
        if (statusIndicator) {
          statusIndicator.className = 'status-indicator online';
        }
        if (statusText) {
          statusText.textContent = getTranslation('footer_status_online');
        }
        return true;
      }
    } catch (err) {
      // Backend not running on same origin or offline
    }

    state.backendOnline = false;
    if (statusIndicator) {
      statusIndicator.className = 'status-indicator offline';
    }
    if (statusText) {
      statusText.textContent = getTranslation('footer_status_offline');
    }
    return false;
  }

  // Perform initial health check
  checkBackendHealth();

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const contactInput = document.getElementById('form-contact');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      const payload = {
        name: nameInput?.value.trim() || '',
        contact: contactInput?.value.trim() || '',
        subject: subjectInput?.value.trim() || 'Portfolio Inquiry',
        message: messageInput?.value.trim() || '',
        timestamp: new Date().toISOString()
      };

      if (!payload.name || !payload.message) {
        showToast('Iltimos, ismingiz va xabaringizni kiriting!', 'error');
        return;
      }

      // Button loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${getTranslation('contact_btn_sending')}`;

      let dispatched = false;

      // Try sending to backend API
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          dispatched = true;
          showToast(getTranslation('toast_form_server_saved'), 'success');
          contactForm.reset();
        }
      } catch (err) {
        // Fallback to offline mode
      }

      // If backend not reached, save locally to localStorage
      if (!dispatched) {
        const offlineList = JSON.parse(localStorage.getItem('offline_inquiries') || '[]');
        offlineList.push(payload);
        localStorage.setItem('offline_inquiries', JSON.stringify(offlineList));

        showToast(getTranslation('toast_form_offline'), 'success');
        contactForm.reset();
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    });
  }

  // ============================================================
  // 10. SCROLL EFFECTS & NAVBAR BEHAVIORS
  // ============================================================
  // Back to top
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollToTopBtn?.classList.add('show');
    } else {
      scrollToTopBtn?.classList.remove('show');
    }

    // Active nav links on scroll
    const sections = document.querySelectorAll('section, header');
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${id}`) {
            a.classList.add('active');
          }
        });
      }
    });
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  if (mobileNavToggle && mobileDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        const icon = mobileNavToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
});