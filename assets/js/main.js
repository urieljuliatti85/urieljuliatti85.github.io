/* Portfólio — Uriel Juliatti
   Menu mobile, scrollspy, filtro de projetos, reveal e formulário. */

(function () {
  'use strict';

  /* ------------------------- Ano no rodapé ------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* --------------------------- Menu mobile ------------------------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------------- Header: borda ao rolar + scrollspy -------------- */
  var header = document.getElementById('header');
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 10);

    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= 140) current = sections[i];
    }
    links.forEach(function (a) {
      a.classList.toggle('is-active', current && a.getAttribute('href') === '#' + current.id);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ------------------------ Reveal ao entrar ----------------------- */
  var revealables = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px' });

    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ----------------------- Filtro de projetos ---------------------- */
  var filters = document.querySelectorAll('.filter');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#projects .card'));

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.dataset.filter;

      filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });

      cards.forEach(function (card) {
        var tags = (card.dataset.tags || '').split(' ');
        var show = tag === 'all' || tags.indexOf(tag) !== -1;
        card.hidden = !show;
        if (show) card.classList.add('is-visible');
      });
    });
  });

  /* ------------ Estatísticas ao vivo da API pública do GitHub ------- */
  var statRepos = document.getElementById('statRepos');
  var statFollowers = document.getElementById('statFollowers');

  if (statRepos || statFollowers) {
    fetch('https://api.github.com/users/urieljuliatti')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (data) {
        if (statRepos && data.public_repos) {
          statRepos.innerHTML = data.public_repos + '<span>+</span>';
        }
        if (statFollowers && data.followers) {
          statFollowers.innerHTML = data.followers + '<span>+</span>';
        }
      })
      .catch(function () { /* mantém os valores estáticos do HTML */ });
  }

  /* --------------------- Lightbox das imagens ---------------------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');

  if (lightbox && lightboxImg && typeof lightbox.showModal === 'function') {
    document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var img = trigger.querySelector('img');
        lightboxImg.src = trigger.dataset.lightbox;
        lightboxImg.alt = img ? img.alt : '';
        lightbox.showModal();
      });
    });

    lightbox.querySelector('.lightbox__close')
      .addEventListener('click', function () { lightbox.close(); });

    // clique fora da imagem fecha
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.close();
    });

    // libera a imagem da memória ao fechar
    lightbox.addEventListener('close', function () { lightboxImg.src = ''; });
  }

  /* ------------------------- Formulário ---------------------------- */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var submit = document.getElementById('contactSubmit');
  var MAIL = 'uriel.juliattivalle@gmail.com';

  function say(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
  }

  // Enquanto o id do Formspree não for configurado, cai no mailto.
  function mailtoFallback(data) {
    var subject = encodeURIComponent(data.get('subject') || 'Contato pelo portfólio');
    var body = encodeURIComponent(
      'Nome: ' + (data.get('name') || '') + '\n' +
      'E-mail: ' + (data.get('email') || '') + '\n\n' +
      (data.get('message') || '')
    );
    window.location.href = 'mailto:' + MAIL + '?subject=' + subject + '&body=' + body;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var action = form.getAttribute('action') || '';

      if (action.indexOf('SEU_FORM_ID') !== -1) {
        say('Abrindo seu app de e-mail…');
        mailtoFallback(data);
        return;
      }

      if (submit) { submit.disabled = true; }
      say('Enviando…');

      fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (r) {
          if (r.ok) {
            form.reset();
            say('Mensagem enviada. Obrigado — respondo em breve!', 'ok');
          } else {
            return r.json().then(function (d) {
              var msg = d && d.errors && d.errors.length
                ? d.errors.map(function (x) { return x.message; }).join(', ')
                : 'Não consegui enviar agora.';
              var e2 = new Error(msg);
              e2.friendly = true;
              throw e2;
            });
          }
        })
        .catch(function (err) {
          // Erro de validação do Formspree traz mensagem própria;
          // falha de rede vira "Failed to fetch", que não diz nada ao visitante.
          var msg = err && err.friendly
            ? err.message
            : 'Não consegui enviar agora.';
          say(msg + ' Escreva direto para ' + MAIL + '.', 'error');
        })
        .finally(function () {
          if (submit) { submit.disabled = false; }
        });
    });
  }
})();
