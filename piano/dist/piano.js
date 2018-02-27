!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports={whiteKey:"white-key",blackKey:"black-key",keyUp:"key-up",keyDown:"key-down",keyHighlighted:"key-highlighted",piano:"piano",whiteKeys:"white-keys",blackKeys:"black-keys"}},function(e,t){t.pianoKeyNumberFromWhiteKeyNumber=function(e=0,t=[]){let n=0;for(let i=0;i<e;i++)1==t[i]&&n++;return e+n},t.pianoKeyNumberFromBlackKeyNumber=function(e,t){},t.arrayFromBlackKeys=function(e){e=e||[];const t=[];for(layout of e){const e=layout.visible?1:0;for(let n=0;n<layout.amount;n++)t.push(e)}return t},t.keyNumber=function(e){if(!e)return null;if(!e.classList)return null;let t=null;const n=e.classList;for(elementClass of n)if(elementClass.startsWith("piano-key-")){t=Number(elementClass.substr("piano-key-".length));break}return t}},function(e,t,n){n(1);const i=n(0);t.pianoElementMake=function(){const e=document.createElement("div");e.classList.add(i.piano);const t=document.createElement("div");t.classList.add(i.whiteKeys),e.appendChild(t),this.whiteKeysWrapper=t;const n=document.createElement("div");return n.classList.add(i.blackKeys),e.appendChild(n),this.blackKeysWrapper=n,e},t.whiteKeyMake=function(e,t,n,s){const a=document.createElement("div");return a.classList.add("piano-key",i.whiteKey,i.keyUp,"white-key-"+e,"piano-key-"+n),this.whiteKeysWrapper.appendChild(a),a.style.cssText=`width: ${t}%`,a},t.blackKeyMake=function(e,t,n,s){const a=document.createElement("div");return a.classList.add("piano-key",i.blackKey,"black-key-"+e,"piano-key-"+n),this.blackKeysWrapper.appendChild(a),a.style.cssText=`width: ${t}%`,a},t.blackBlankMake=function(e,t,n,i=!1){const s=document.createElement("div");s.classList.add("black-key-blank"),this.blackKeysWrapper.appendChild(s),i&&e--;let a=i?n-t/2:n-t;for(let t=0;t<e;t++)a+=n;return s.style.cssText=`width: ${a}%; height: 10px;`,s}},function(e,t){let n=!1;function i(e,t){for(key of t)key.addEventListener("mousedown",function(t){if(console.log("mouse down"),n)return!1;n=!0,e._keyDown(this)}),key.addEventListener("mouseup",function(t){if(!n)return!1;n=!1,e._keyUp(this)}),key.addEventListener("mouseout",function(t){if(!n)return!1;e._keyUp(this)}),key.addEventListener("mouseover",function(t){if(!n)return!1;e._keyDown(this)})}t.addPianoKeyEventListeners=function(e){i(e,e.whiteKeysWrapper.children),i(e,e.blackKeysWrapper.children)}},function(e,t,n){const i=n(1),s=n(3),a=n(2),o=n(0);let r={keyUp:()=>{},keyDown:()=>{}};window.newPiano=function(e,t){const n=Object.create(r),c=a.pianoElementMake.call(r);n.HTML=c,n.blackKeysArray=i.arrayFromBlackKeys(t);const l=100/e/1.5,u=100/e;return function(){for(let t=1;t<=e;t++){const n=i.pianoKeyNumberFromWhiteKeyNumber(t,this.blackKeysArray);a.whiteKeyMake.call(this,t,u,n,e)}}.call(n),function(){let t=1,n=0,i=!0;for(let s=0;s<=this.blackKeysArray.length-1;s++){if(0===this.blackKeysArray[s]){n++;continue}a.blackBlankMake.call(this,n,l,u,i);const o=s;a.blackKeyMake.call(this,t,l,o+t,e),t++,n=0,i=!1}}.call(n),function(){this._keyDown=(e=>{e.classList.remove(o.keyUp),e.classList.add(o.keyDown),this.keyDown(i.keyNumber(e))}),this._keyUp=(e=>{e.classList.add(o.keyUp),e.classList.remove(o.keyDown),this.keyUp(i.keyNumber(e))})}.call(n),s.addPianoKeyEventListeners(n),n}}]);