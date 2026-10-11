import {dataTranslations} from './data-translations.js';
import {uiTranslations} from './ui-translations.js';

const supported = new Set(['zh-HK', 'en']);
let language = 'zh-HK';
try {
  const selected = new URL(location.href).searchParams.get('lang') || localStorage.getItem('hftea-language');
  if (supported.has(selected)) language = selected;
} catch {}

const dictionary = {...dataTranslations, ...uiTranslations};
for (const name of ['廿四味','五花茶','竹蔗茅根','夏枯草']) {
  dictionary[name + '人格'] = dataTranslations[name] + ' Personality';
}
const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const pattern = new RegExp(Object.keys(dictionary).sort((a,b) => b.length-a.length).map(escape).join('|'), 'g');

export const getLanguage = () => language;
export function setLanguage(next) {
  if (!supported.has(next)) return;
  language = next;
  try { localStorage.setItem('hftea-language', next); } catch {}
}
export function translate(value) {
  const text = String(value ?? '');
  if (language !== 'en') return text;
  const trimmed = text.trim();
  if (Object.hasOwn(dictionary, trimmed)) return text.replace(trimmed, dictionary[trimmed]);
  return text.replace(pattern, match => dictionary[match])
    .replaceAll('：', ': ').replaceAll('、', ', ').replaceAll('，', ', ')
    .replaceAll('。', '.').replaceAll('「', '“').replaceAll('」', '”')
    .replaceAll('／', ' / ');
}

const attributes = ['aria-label','alt','title','placeholder'];
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
export function translateElement(root, remember = false) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  function visit(node) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (element?.closest('[data-no-translate],script,style')) return;
    if (node.nodeType === Node.TEXT_NODE) {
      if (remember && !originalText.has(node)) originalText.set(node, node.nodeValue);
      node.nodeValue = translate(remember ? originalText.get(node) : node.nodeValue);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (remember && !originalAttributes.has(node)) originalAttributes.set(node, Object.fromEntries(attributes.filter(a => node.hasAttribute(a)).map(a => [a,node.getAttribute(a)])));
      const saved = remember ? originalAttributes.get(node) : Object.fromEntries(attributes.filter(a => node.hasAttribute(a)).map(a => [a,node.getAttribute(a)]));
      for (const [key,value] of Object.entries(saved)) node.setAttribute(key, translate(value));
    }
  }
  visit(root);
  while (walker.nextNode()) visit(walker.currentNode);
}
export function translateMarkup(markup) {
  const template = document.createElement('template');
  template.innerHTML = markup;
  translateElement(template.content);
  return template.innerHTML;
}
