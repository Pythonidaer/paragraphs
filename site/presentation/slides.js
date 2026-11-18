const track = document.querySelector('#track');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const stage = document.querySelector('.stage');
const firstExcerpt = document.querySelector('#excerpt-first');
const sceneExcerpt = document.querySelector('#scene-excerpt');

const excerptLayouts = new Map([
  ['Bury the hatchet', { last: ['bottom-center'] }],
  ['A light in the room', { last: ['below-lights'] }],
  ['Everything is not fine', { last: ['top-left'] }],
  ['A sleepless night', { last: ['bottom-right', '36vw'] }],
  ['The stove and the coal', { last: ['bottom-left'] }],
  ['Breaking down', { last: ['bottom-right', '24vw'] }],
  ['“I told everyone”', { last: ['bottom-left', '22vw'] }],
  ['Eggshells at the show', { first: ['top-left', '31vw'], last: ['bottom-left', '31vw'] }],
  ['Butter and pizza', { last: ['top-left', '32vw'] }],
  ['April and a new job', { first: ['bottom-left'] }],
  ['What got back to me', { first: ['top-left', '36vw'] }],
  ['Mics, shows, and bills', { first: ['bottom-left'] }],
  ['Saying yes anyway', { last: ['bottom-center'] }],
  ['Room to talk', { last: ['bottom-center'] }],
  ['A reset', { first: ['bottom-left'], last: ['bottom-right'] }],
]);

function placeExcerpt(card, [position, width]) {
  card.dataset.position = position;
  if (width) card.style.setProperty('--excerpt-width', width);
  else card.style.removeProperty('--excerpt-width');
}

function splitExcerpt(passage) {
  if (passage.length <= 350) return ['', passage];

  // Prefer a paragraph break near the middle, then a sentence or word boundary.
  const midpoint = passage.length / 2;
  const closest = (matches) => matches.reduce((best, match) =>
    Math.abs(match.index - midpoint) < Math.abs(best - midpoint) ? match.index : best, Infinity);
  const paragraph = closest([...passage.matchAll(/\n\n/g)]);
  const sentence = closest([...passage.matchAll(/(?<=[.!?…”])\s+(?=[A-Z“])/g)]);
  const splitAt = Math.abs(paragraph - midpoint) <= passage.length * 0.14 ? paragraph
    : Math.abs(sentence - midpoint) <= passage.length * 0.22 ? sentence
    : closest([...passage.matchAll(/\s+/g)]);
  return [passage.slice(0, splitAt).trimEnd(), passage.slice(splitAt).trimStart()];
}

track.innerHTML = scenes.map(({ title, background, art }) =>
  `<svg viewBox="0 0 960 540" preserveAspectRatio="none" style="background:${background}" role="img" aria-label="${title}">${rect(0,0,960,540,background)}${art}</svg>`
).join('');

const spin = track.querySelector('.spin');
const spinSlide = spin.ownerSVGElement;
function setSpinSpeed(speed) {
  for (const animation of spin.getAnimations()) animation.updatePlaybackRate(speed);
}
spinSlide.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') setSpinSpeed(1.9);
});
spinSlide.addEventListener('pointerleave', () => setSpinSpeed(1));

let current = 0;
let revealed = 0;
let hasFirstExcerpt = false;

function updateReveals() {
  firstExcerpt.hidden = !hasFirstExcerpt || revealed === 0;
  sceneExcerpt.hidden = revealed < (hasFirstExcerpt ? 2 : 1);
  previous.hidden = current === 0 && revealed === 0;
  next.hidden = current === scenes.length - 1 && !sceneExcerpt.hidden;
}

function show(index, revealAll = false) {
  current = index;
  track.style.transform = `translateX(-${current * 100}%)`;
  Array.from(track.children).forEach((scene, i) => scene.setAttribute('aria-hidden', String(i !== current)));
  const scene = scenes[current];
  const [first, last] = splitExcerpt(scene.excerpt);
  const layout = excerptLayouts.get(scene.title);
  placeExcerpt(firstExcerpt, layout?.first ?? ['top-left']);
  placeExcerpt(sceneExcerpt, layout?.last ?? ['bottom-right']);
  stage.toggleAttribute('data-split-excerpt', Boolean(first));
  hasFirstExcerpt = Boolean(first);
  revealed = revealAll ? (hasFirstExcerpt ? 2 : 1) : 0;
  firstExcerpt.textContent = first;
  sceneExcerpt.textContent = last;
  sceneExcerpt.setAttribute('aria-label', first ? 'Letter excerpt, part two' : 'Letter excerpt');
  firstExcerpt.scrollTop = 0;
  sceneExcerpt.scrollTop = 0;
  updateReveals();
}

let idleTimer;
function hideArrows() {
  window.clearTimeout(idleTimer);
  stage.removeAttribute('data-show-arrows');
}

stage.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch') return;
  stage.setAttribute('data-show-arrows', '');
  window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(hideArrows, 1600);
});
stage.addEventListener('pointerleave', hideArrows);

function advance() {
  if (sceneExcerpt.hidden) {
    revealed += 1;
    updateReveals();
  } else if (current < scenes.length - 1) {
    show(current + 1);
  }
}

function goBack() {
  if (revealed > 0) {
    revealed -= 1;
    updateReveals();
  } else if (current > 0) {
    show(current - 1, true);
  }
}

previous.addEventListener('click', goBack);
next.addEventListener('click', advance);
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    if (event.key === 'ArrowRight') advance();
    else goBack();
  }
});
show(0);
