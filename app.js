/* SYGNATURA — strona demonstracyjna. Formularz nie wysyła danych. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var AREAS = [
    { rep: 'GC', name: 'Prawo gospodarcze i spółki', short: 'Prawo gospodarcze',
      cases: 'spory z kontrahentami, windykacja, umowy handlowe, spory wspólników', who: 'M. Wierzbicka', robe: 'adw',
      do: ['Piszemy i negocjujemy umowy handlowe oraz umowy spółek.', 'Prowadzimy windykację i spory przed sądem gospodarczym.', 'Pomagamy przy wyjściu wspólnika i podziale spółki.'],
      bring: 'umowę z kontrahentem, faktury, korespondencję mailową, KRS spółki' },
    { rep: 'C', name: 'Nieruchomości i umowy', short: 'Nieruchomości',
      cases: 'umowy deweloperskie, wady lokalu, służebności, zasiedzenie', who: 'T. Kalinowski', robe: 'rp',
      do: ['Sprawdzamy umowy deweloperskie i księgi wieczyste przed podpisem.', 'Dochodzimy roszczeń z tytułu wad lokalu i opóźnień.', 'Prowadzimy sprawy o zasiedzenie i ustanowienie służebności.'],
      bring: 'umowę, odpis księgi wieczystej, protokół odbioru, zdjęcia usterek' },
    { rep: 'Ns', name: 'Spadki', short: 'Spadki',
      cases: 'stwierdzenie nabycia spadku, dział spadku, zachowek', who: 'J. Nowicka', robe: 'adw',
      do: ['Przeprowadzamy stwierdzenie nabycia spadku w sądzie lub u notariusza.', 'Prowadzimy dział spadku i rozliczenia między spadkobiercami.', 'Dochodzimy zachowku albo bronimy przed takim roszczeniem.'],
      bring: 'akt zgonu, testament (jeśli jest), listę majątku, dane spadkobierców' },
    { rep: 'RC', name: 'Sprawy rodzinne', short: 'Sprawy rodzinne',
      cases: 'rozwód, podział majątku, alimenty, kontakty z dzieckiem', who: 'J. Nowicka', robe: 'adw',
      do: ['Reprezentujemy w sprawach rozwodowych, także bez orzekania o winie.', 'Przygotowujemy podział majątku wspólnego.', 'Ustalamy alimenty i kontakty z dzieckiem, również w mediacji.'],
      bring: 'akt małżeństwa, akty urodzenia dzieci, dokumenty majątku, zaświadczenia o dochodach' },
    { rep: 'P', name: 'Prawo pracy', short: 'Prawo pracy',
      cases: 'odwołanie od wypowiedzenia, mobbing, zaległe wynagrodzenie, zakaz konkurencji', who: 'P. Brzeziński', robe: 'rp',
      do: ['Piszemy odwołania od wypowiedzeń i zwolnień dyscyplinarnych.', 'Prowadzimy sprawy o mobbing i dyskryminację.', 'Doradzamy pracodawcom przy regulaminach i restrukturyzacji.'],
      bring: 'umowę o pracę, wypowiedzenie, świadectwo pracy, korespondencję z pracodawcą' },
    { rep: 'K', name: 'Prawo karne gospodarcze', short: 'Prawo karne',
      cases: 'obrona w postępowaniu przygotowawczym i przed sądem, sprawy karnoskarbowe', who: 'M. Wierzbicka', robe: 'adw',
      do: ['Bronimy na etapie przesłuchania, zarzutów i aktu oskarżenia.', 'Reprezentujemy pokrzywdzonych jako pełnomocnik.', 'Prowadzimy sprawy karnoskarbowe przedsiębiorców.'],
      bring: 'wezwanie lub postanowienie, protokoły przesłuchań, dokumenty firmy' }
  ];

  /* dzisiejsza data w pasku hero */
  var d = new Date();
  var DAYS = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
  var MON = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
  $('[data-today]').textContent = DAYS[d.getDay()] + ', ' + d.getDate() + ' ' + MON[d.getMonth()];

  /* ---------- wokanda ---------- */
  var list = $('#list');
  list.innerHTML = '<div class="list__row list__row--head" aria-hidden="true"><span>Repertorium</span><span>Obszar</span><span>Typowe sprawy</span><span>Prowadzi</span><span></span></div>' +
    AREAS.map(function (a, i) {
      return '<div class="entry" role="listitem">' +
        '<button class="list__row entry__btn" type="button" aria-expanded="false" aria-controls="e-' + i + '" id="eb-' + i + '">' +
          '<span class="entry__rep">' + a.rep + '</span>' +
          '<span class="entry__name">' + a.name + '</span>' +
          '<span class="entry__cases">' + a.cases + '</span>' +
          '<span class="entry__who"><i class="robe robe--' + a.robe + '"></i>' + a.who + '</span>' +
          '<span class="entry__icon" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="entry__body" id="e-' + i + '" role="region" aria-labelledby="eb-' + i + '"><div class="entry__inner">' +
          '<div><h3>Czym się zajmujemy</h3><ul>' + a.do.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
          '<div><h3>Na pierwszą rozmowę</h3><p>' + a.bring + '.</p>' +
          '<button class="btn btn--white" type="button" data-pick="' + i + '">Opisz sprawę z tego zakresu</button></div>' +
        '</div></div>' +
      '</div>';
    }).join('');

  list.addEventListener('click', function (e) {
    var b = e.target.closest('.entry__btn');
    if (b) {
      var entry = b.parentNode, open = b.getAttribute('aria-expanded') === 'true';
      $$('.entry', list).forEach(function (en) { en.classList.remove('is-open'); $('.entry__btn', en).setAttribute('aria-expanded', 'false'); });
      if (!open) { entry.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
      return;
    }
    var p = e.target.closest('[data-pick]');
    if (p) pickTopic(+p.getAttribute('data-pick'), true);
  });

  /* ---------- formularz ---------- */
  var form = $('#form');
  var topics = $('[data-topics]');
  topics.innerHTML = AREAS.map(function (a, i) {
    return '<label class="topic"><input type="radio" name="topic" value="' + i + '"' + (i === 0 ? ' required' : '') + '><span><b>' + a.rep + '</b>' + a.short + '</span></label>';
  }).join('') + '<label class="topic"><input type="radio" name="topic" value="x"><span><b>—</b>Inna sprawa</span></label>';

  function pickTopic(i, scroll) {
    var r = $('input[name="topic"][value="' + i + '"]', topics);
    if (r) { r.checked = true; topics.closest('fieldset').classList.remove('is-bad'); }
    if (scroll) {
      $('#kontakt').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      setTimeout(function () { $('textarea[name="desc"]').focus({ preventScroll: true }); }, reduce ? 0 : 650);
    }
  }

  var desc = $('textarea[name="desc"]'), count = $('[data-count]');
  desc.addEventListener('input', function () {
    var n = desc.value.trim().length;
    count.textContent = n >= 20 ? n + ' znaków' : n + ' / min. 20 znaków';
    count.classList.toggle('is-ok', n >= 20);
  });

  var termDate = $('[data-term-date]');
  form.addEventListener('change', function (e) {
    if (e.target.name === 'term') {
      var yes = e.target.value === 'tak';
      termDate.hidden = !yes;
      $('input', termDate).required = yes;
    }
    if (e.target.name === 'topic') topics.closest('fieldset').classList.remove('is-bad');
  });
  form.addEventListener('input', function (e) { var f = e.target.closest('.field'); if (f) f.classList.remove('is-bad'); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var err = $('[data-error]'), first = null, msg = '';
    var topic = $('input[name="topic"]:checked', form);
    topics.closest('fieldset').classList.toggle('is-bad', !topic);
    if (!topic) { first = $('input[name="topic"]', form); msg = 'Wybierz, czego dotyczy sprawa.'; }
    $$('.field input, .field textarea', form).forEach(function (inp) {
      var f = inp.closest('.field'); if (f.hidden) return;
      var ok = inp.checkValidity();
      f.classList.toggle('is-bad', !ok);
      if (!ok && !first) {
        first = inp;
        msg = inp.name === 'desc' ? 'Opisz sprawę w kilku zdaniach, co najmniej 20 znaków.' :
          inp.name === 'email' && inp.value ? 'Sprawdź adres e-mail.' :
          inp.name === 'phone' && inp.value ? 'Wpisz numer telefonu, co najmniej 9 cyfr.' :
          inp.name === 'termDate' ? 'Podaj datę, do kiedy biegnie termin.' : 'Uzupełnij zaznaczone pola.';
      }
    });
    var rodo = $('input[name="rodo"]', form);
    if (!rodo.checked && !first) { first = rodo; msg = 'Zaznacz zgodę na kontakt, żebyśmy mogli odpowiedzieć.'; }
    if (first) { err.textContent = msg; first.focus(); return; }
    err.textContent = '';
    var btn = $('[data-submit]'); btn.disabled = true; btn.classList.add('is-loading'); btn.textContent = 'Wysyłanie';
    setTimeout(function () {
      var a = topic.value === 'x' ? null : AREAS[+topic.value];
      var no = (a ? a.rep : 'Ogól') + ' ' + (100 + Math.floor(Math.random() * 800)) + '/' + String(new Date().getFullYear()).slice(2);
      var term = $('input[name="term"]:checked', form).value;
      $('[data-filed-no]').textContent = no;
      $('[data-filed-text]').textContent = (term === 'tak'
        ? 'Biegnie termin, więc oddzwonimy jeszcze dziś na numer ' + form.phone.value + '.'
        : 'Odpowiemy w ciągu 24 godzin roboczych na adres ' + form.email.value + '.') +
        (a ? ' Sprawę z zakresu: ' + a.short.toLowerCase() + ' przejmie ' + a.who + '.' : '') +
        ' To strona demonstracyjna, więc nic nie zostało wysłane.';
      form.hidden = true;
      var filed = $('[data-filed]'); filed.hidden = false; filed.focus();
      btn.disabled = false; btn.classList.remove('is-loading'); btn.textContent = 'Wyślij zapytanie';
    }, 900);
  });
  $('[data-again]').addEventListener('click', function () {
    form.reset(); termDate.hidden = true; count.textContent = '0 / min. 20 znaków'; count.classList.remove('is-ok');
    $('[data-filed]').hidden = true; form.hidden = false; $('input[name="topic"]', form).focus();
  });
})();
