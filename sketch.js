const pad = document.getElementById('text');

const fontSize = document.getElementById('thickness');
const fontFamily = document.getElementById('fontfam');
const picker = document.getElementById('picker');
const area = document.getElementById('color');
const size = document.getElementById('size');

fontSize.addEventListener('input', () => {
  size.textContent = fontSize.value;
  pad.style.fontSize = `${fontSize.value}px`
});

fontFamily.addEventListener('input', () => pad.style.fontFamily = fontFamily.value);
picker.addEventListener('input', () => pad.style[area.value] = picker.value);
[...document.getElementsByClassName('fam')].forEach(fam => fam.style.fontFamily = fam.value);