// One vector source for all desktop and mobile interface icons.
const names=new Set(['arrow-up-right','arrow-left','download','copy','refresh','check','close','heart','asterisk','sparkle','moon','wave','leaf','wifi','battery','signal','dots']);
export function icon(name){
 if(!names.has(name))throw new Error(`Unknown icon: ${name}`);
 return `<svg class="ui-icon icon-${name}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="${name==='signal'?'0 0 25 16':'0 0 24 24'}" aria-hidden="true" focusable="false"><use href="/hftea-website/assets/icons.svg#${name}"/></svg>`;
}
