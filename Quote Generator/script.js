/* =============================================
   THE CURATED WHISPER — SCRIPT.JS
   =============================================*/

'use strict';

/* ---------- Quote Database (50 quotes) ---------- */
const QUOTES = [
  // MOTIVATION
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", role: "26th U.S. President", category: "motivation" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", role: "American Writer", category: "motivation" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", role: "South African Leader", category: "motivation" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", role: "Humorist & Author", category: "motivation" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James", role: "Philosopher & Psychologist", category: "motivation" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill", role: "British Prime Minister", category: "motivation" },
  { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh", role: "Alice in Wonderland", category: "motivation" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein", role: "Theoretical Physicist", category: "motivation" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", role: "Essayist & Philosopher", category: "motivation" },
  { text: "Hardship often prepares an ordinary person for an extraordinary destiny.", author: "C.S. Lewis", role: "Author & Theologian", category: "motivation" },

  // SUCCESS
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", role: "Author & Philosopher", category: "success" },
  { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", role: "Orchestra Conductor", category: "success" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson", role: "3rd U.S. President", category: "success" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett", role: "Author", category: "success" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", role: "Industrialist", category: "success" },
  { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder", role: "Business Leader", category: "success" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", role: "British Prime Minister", category: "success" },
  { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr.", role: "Philanthropist", category: "success" },
  { text: "There are no shortcuts to any place worth going.", author: "Beverly Sills", role: "Opera Singer", category: "success" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", role: "Entrepreneur", category: "success" },

  // LIFE
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", role: "Musician & Activist", category: "life" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.", author: "Ralph Waldo Emerson", role: "Essayist & Philosopher", category: "life" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln", role: "16th U.S. President", category: "life" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth", role: "Baseball Legend", category: "life" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison", role: "Inventor", category: "life" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West", role: "Actress & Writer", category: "life" },
  { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", role: "Philosopher", category: "life" },
  { text: "The good life is one inspired by love and guided by knowledge.", author: "Bertrand Russell", role: "Philosopher & Mathematician", category: "life" },
  { text: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe", role: "Actress & Icon", category: "life" },
  { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou", role: "Poet & Author", category: "life" },

  // WISDOM
  { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", role: "Greek Philosopher", category: "wisdom" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", role: "Ancient Philosopher", category: "wisdom" },
  { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix", role: "Musician & Artist", category: "wisdom" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", role: "Media Mogul & Philanthropist", category: "wisdom" },
  { text: "Be who you are and say what you feel, because those who mind don't matter.", author: "Dr. Seuss", role: "Author & Illustrator", category: "wisdom" },
  { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bill Keane", role: "Cartoonist", category: "wisdom" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain", role: "American Writer", category: "wisdom" },
  { text: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.", author: "William Shakespeare", role: "Playwright & Poet", category: "wisdom" },
  { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin", role: "Naturalist & Scientist", category: "wisdom" },
  { text: "The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain", role: "American Writer", category: "wisdom" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare", role: "Playwright & Poet", category: "wisdom" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair", role: "Businessman & Orator", category: "wisdom" },
  { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein", role: "Theoretical Physicist", category: "wisdom" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", role: "Historian & Philosopher", category: "wisdom" },
  { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr.", role: "Civil Rights Leader", category: "wisdom" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", role: "South African Leader", category: "wisdom" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", role: "Philosopher", category: "wisdom" },
  { text: "The unexamined life is not worth living.", author: "Socrates", role: "Greek Philosopher", category: "wisdom" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", role: "Theoretical Physicist", category: "wisdom" },
  { text: "No act of kindness, no matter how small, is ever wasted.", author: "Aesop", role: "Ancient Greek Storyteller", category: "wisdom" },
];

/* ---------- State ---------- */
let currentCategory = 'all';
let currentQuoteIndex = -1;
let isAutoplay = false;
let autoplayInterval = null;
let autoplayCountdown = null;
let autoplaySeconds = 15;
let remainingSeconds = 15;
let favorites = JSON.parse(localStorage.getItem('tcw_favorites') || '[]');
let isDark = localStorage.getItem('tcw_theme') === 'dark';
let isAnimating = false;

/* ---------- DOM References ---------- */
const quoteText        = document.getElementById('quote-text');
const authorName       = document.getElementById('author-name');
const authorTag        = document.getElementById('author-tag');
const categoryBadge    = document.getElementById('category-badge');
const quoteCard        = document.getElementById('quote-card');
const quoteBody        = document.getElementById('quote-body');
const spinnerOverlay   = document.getElementById('spinner-overlay');
const generateBtn      = document.getElementById('generate-btn');
const btnIcon          = generateBtn.querySelector('.btn-icon');
const copyBtn          = document.getElementById('copy-btn');
const shareBtn         = document.getElementById('share-btn');
const favoriteBtn      = document.getElementById('favorite-btn');
const autoplayToggle   = document.getElementById('autoplay-toggle');
const autoplayIconBtn  = document.getElementById('autoplay-icon-btn');
const progressWrap     = document.getElementById('autoplay-progress-wrap');
const progressBar      = document.getElementById('autoplay-progress');
const progressLabel    = document.getElementById('progress-label');
const themeToggle      = document.getElementById('theme-toggle');
const toast            = document.getElementById('toast');
const catBtns          = document.querySelectorAll('.cat-btn');
const statCount        = document.getElementById('stat-count');
const statFavorites    = document.getElementById('stat-favorites');
const favouritesSection= document.getElementById('favourites-section');
const favouritesGrid   = document.getElementById('favourites-grid');

/* =============================================
   THEME
   =============================================*/
function applyTheme(dark) {
  isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('tcw_theme', dark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => applyTheme(!isDark));

/* =============================================
   GET QUOTES BY CATEGORY
   =============================================*/
function getPool() {
  if (currentCategory === 'all') return QUOTES;
  return QUOTES.filter(q => q.category === currentCategory);
}

function updateStatCount() {
  statCount.textContent = getPool().length;
}

/* =============================================
   SHOW QUOTE
   =============================================*/
function showQuote(idx) {
  const pool = getPool();
  if (!pool.length) return;

  const quote = pool[idx];
  currentQuoteIndex = idx;

  // Swap card gradient by category
  quoteCard.setAttribute('data-cat', quote.category);
  categoryBadge.textContent = quote.category;

  quoteText.textContent    = quote.text;
  authorName.textContent   = quote.author;
  authorTag.textContent    = quote.role.toUpperCase();

  // Sync favorite button
  const isFav = favorites.some(f => f.text === quote.text);
  favoriteBtn.innerHTML = isFav
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
  favoriteBtn.classList.toggle('liked', isFav);
}

/* =============================================
   GENERATE QUOTE (animated)
   =============================================*/
function generateQuote(animate = true) {
  if (isAnimating) return;

  const pool = getPool();
  if (!pool.length) return;

  // Pick a different random index
  let nextIdx;
  do { nextIdx = Math.floor(Math.random() * pool.length); }
  while (nextIdx === currentQuoteIndex && pool.length > 1);

  if (!animate) {
    showQuote(nextIdx);
    return;
  }

  isAnimating = true;
  generateBtn.disabled = true;

  // 1. Fade out body, show spinner briefly
  quoteBody.classList.add('fading');
  setTimeout(() => {
    spinnerOverlay.classList.add('visible');
  }, 200);

  // 2. Simulate quote load (150-400ms random feel)
  const delay = 250 + Math.random() * 200;
  setTimeout(() => {
    showQuote(nextIdx);
    spinnerOverlay.classList.remove('visible');
    quoteBody.classList.remove('fading');

    // Spin the icon briefly
    btnIcon.classList.add('rotating');
    setTimeout(() => { btnIcon.classList.remove('rotating'); }, 700);

    isAnimating = false;
    generateBtn.disabled = false;
  }, delay + 250);
}

/* =============================================
   AUTOPLAY
   =============================================*/
function startAutoplay() {
  isAutoplay = true;
  remainingSeconds = autoplaySeconds;
  autoplayIconBtn.classList.add('autoplay-active');
  progressWrap.classList.add('visible');
  updateProgress();

  autoplayInterval = setInterval(() => {
    generateQuote();
    remainingSeconds = autoplaySeconds;
  }, autoplaySeconds * 1000);

  autoplayCountdown = setInterval(() => {
    remainingSeconds = Math.max(0, remainingSeconds - 1);
    updateProgress();
    if (remainingSeconds <= 0) remainingSeconds = autoplaySeconds;
  }, 1000);
}

function stopAutoplay() {
  isAutoplay = false;
  clearInterval(autoplayInterval);
  clearInterval(autoplayCountdown);
  autoplayInterval = null;
  autoplayCountdown = null;
  autoplayIconBtn.classList.remove('autoplay-active');
  progressWrap.classList.remove('visible');
  progressBar.value = 0;
}

function updateProgress() {
  const pct = ((autoplaySeconds - remainingSeconds) / autoplaySeconds) * 100;
  progressBar.value = pct;
  progressLabel.textContent = `NEXT IN ${remainingSeconds}S`;
}

autoplayToggle.addEventListener('change', () => {
  if (autoplayToggle.checked) {
    startAutoplay();
    autoplayToggle.setAttribute('aria-checked', 'true');
    showToast('Auto-play enabled — new whisper every 15s');
  } else {
    stopAutoplay();
    autoplayToggle.setAttribute('aria-checked', 'false');
    showToast('Auto-play disabled');
  }
});

autoplayIconBtn.addEventListener('click', () => {
  autoplayToggle.checked = !autoplayToggle.checked;
  autoplayToggle.dispatchEvent(new Event('change'));
});

/* =============================================
   CATEGORY FILTER
   =============================================*/
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    currentQuoteIndex = -1;
    updateStatCount();
    generateQuote();
  });
});

/* =============================================
   COPY TO CLIPBOARD
   =============================================*/
copyBtn.addEventListener('click', async () => {
  const pool = getPool();
  if (!pool.length) return;
  const q = pool[currentQuoteIndex];
  const text = `"${q.text}" — ${q.author}`;

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.classList.add('copied');
    showToast('✓ Quote copied to clipboard!');
    setTimeout(() => copyBtn.classList.remove('copied'), 2000);
  } catch {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copyBtn.classList.add('copied');
    showToast('✓ Quote copied!');
    setTimeout(() => copyBtn.classList.remove('copied'), 2000);
  }
});

/* =============================================
   SHARE ON X / TWITTER
   =============================================*/
shareBtn.addEventListener('click', () => {
  const pool = getPool();
  if (!pool.length) return;
  const q = pool[currentQuoteIndex];
  const tweetText = encodeURIComponent(`"${q.text}" — ${q.author}\n\n#TheCuratedWhisper #quotes`);
  window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank', 'noopener,noreferrer');
});

/* =============================================
   FAVOURITE
   =============================================*/
favoriteBtn.addEventListener('click', () => {
  const pool = getPool();
  if (!pool.length) return;
  const q = pool[currentQuoteIndex];

  const idx = favorites.findIndex(f => f.text === q.text);
  if (idx === -1) {
    favorites.push(q);
    showToast('❤️ Added to favourites!');
  } else {
    favorites.splice(idx, 1);
    showToast('Removed from favourites');
  }

  localStorage.setItem('tcw_favorites', JSON.stringify(favorites));
  statFavorites.textContent = favorites.length;
  renderFavourites();
  showQuote(currentQuoteIndex); // refresh heart icon
});

function renderFavourites() {
  favouritesGrid.innerHTML = '';
  if (favorites.length === 0) {
    favouritesSection.hidden = true;
    return;
  }
  favouritesSection.hidden = false;
  favorites.forEach((q, i) => {
    const card = document.createElement('article');
    card.className = 'fav-card';
    card.innerHTML = `
      <p class="fav-text">"${q.text}"</p>
      <p class="fav-author">— ${q.author}</p>
      <button class="fav-remove" data-idx="${i}" aria-label="Remove from favourites" title="Remove">✕</button>
    `;
    favouritesGrid.appendChild(card);
  });

  favouritesGrid.querySelectorAll('.fav-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = parseInt(e.currentTarget.dataset.idx, 10);
      favorites.splice(i, 1);
      localStorage.setItem('tcw_favorites', JSON.stringify(favorites));
      statFavorites.textContent = favorites.length;
      renderFavourites();
      showToast('Removed from favourites');
      // Refresh current quote heart if needed
      const pool = getPool();
      if (pool.length) showQuote(currentQuoteIndex);
    });
  });
}

/* =============================================
   GENERATE BUTTON
   =============================================*/
generateBtn.addEventListener('click', () => generateQuote());

/* =============================================
   TOAST
   =============================================*/
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* =============================================
   KEYBOARD SHORTCUT (Space = new quote)
   =============================================*/
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement.tagName;
  if ((e.key === ' ' || e.key === 'Spacebar') && tag !== 'BUTTON' && tag !== 'INPUT') {
    e.preventDefault();
    generateQuote();
  }
});

/* =============================================
   INIT
   =============================================*/
function init() {
  // Apply saved theme
  applyTheme(isDark);
  updateStatCount();
  statFavorites.textContent = favorites.length;
  renderFavourites();

  // Load initial quote without animation
  generateQuote(false);
}

init();
