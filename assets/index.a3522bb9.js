import{E as oe,V as K,M as mt,T as ft,Q as Yt,S as jt,a as J,b as ae,c as re,d as le,e as qt,G as Ot,P as he,f as ce,g as Bt,A as de,h as ue,i as pe,j as me,W as fe,k as ge,l as be}from"./three.5a2e84e9.js";const we=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};we();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class nt{constructor(e,i,t,s,o="div"){this.parent=e,this.object=i,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),nt.nextNameID=nt.nextNameID||0,this.$name.id=`lil-gui-name-${++nt.nextNameID}`,this.$widget=document.createElement(o),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ve extends nt{constructor(e,i,t){super(e,i,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function $t(h){let e,i;return(e=h.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=h.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=h.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const Ae={isPrimitive:!0,match:h=>typeof h=="string",fromHexString:$t,toHexString:$t},At={isPrimitive:!0,match:h=>typeof h=="number",fromHexString:h=>parseInt(h.substring(1),16),toHexString:h=>"#"+h.toString(16).padStart(6,0)},ye={isPrimitive:!1,match:Array.isArray,fromHexString(h,e,i=1){const t=At.fromHexString(h);e[0]=(t>>16&255)/255*i,e[1]=(t>>8&255)/255*i,e[2]=(t&255)/255*i},toHexString([h,e,i],t=1){t=255/t;const s=h*t<<16^e*t<<8^i*t<<0;return At.toHexString(s)}},Ee={isPrimitive:!1,match:h=>Object(h)===h,fromHexString(h,e,i=1){const t=At.fromHexString(h);e.r=(t>>16&255)/255*i,e.g=(t>>8&255)/255*i,e.b=(t&255)/255*i},toHexString({r:h,g:e,b:i},t=1){t=255/t;const s=h*t<<16^e*t<<8^i*t<<0;return At.toHexString(s)}},xe=[Ae,At,ye,Ee];function _e(h){return xe.find(e=>e.match(h))}class Me extends nt{constructor(e,i,t,s){super(e,i,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_e(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=$t(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Pt extends nt{constructor(e,i,t){super(e,i,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Le extends nt{constructor(e,i,t,s,o,a){super(e,i,t,"number"),this._initInput(),this.min(s),this.max(o);const r=a!==void 0;this.step(r?a:this._getImplicitStep(),r),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))},i=l=>{const L=parseFloat(this.$input.value);isNaN(L)||(this._snapClampSetValue(L+l),this.$input.value=this.getValue())},t=l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l)*-1))},s=l=>{this._inputFocused&&(l.preventDefault(),i(this._step*this._normalizeMouseWheel(l)))};let o=!1,a,r,y,m,d;const v=5,f=l=>{a=l.clientX,r=y=l.clientY,o=!0,m=this.getValue(),d=0,window.addEventListener("mousemove",M),window.addEventListener("mouseup",E)},M=l=>{if(o){const L=l.clientX-a,k=l.clientY-r;Math.abs(k)>v?(l.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(L)>v&&E()}o||(d-=(l.clientY-y)*this._step*this._arrowKeyMultiplier(l),m+d>this._max?d=this._max-m:m+d<this._min&&(d=this._min-m),this._snapClampSetValue(m+d)),y=l.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",E)},x=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",t),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(l,L,k,Y,A)=>(l-L)/(k-L)*(A-Y)+Y,i=l=>{const L=this.$slider.getBoundingClientRect();let k=e(l,L.left,L.right,this._min,this._max);this._snapClampSetValue(k)},t=l=>{this._setDraggingStyle(!0),i(l.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",o)},s=l=>{i(l.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o)};let a=!1,r,y;const m=l=>{l.preventDefault(),this._setDraggingStyle(!0),i(l.touches[0].clientX),a=!1},d=l=>{l.touches.length>1||(this._hasScrollBar?(r=l.touches[0].clientX,y=l.touches[0].clientY,a=!0):m(l),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",f))},v=l=>{if(a){const L=l.touches[0].clientX-r,k=l.touches[0].clientY-y;Math.abs(L)>Math.abs(k)?m(l):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",f))}else l.preventDefault(),i(l.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",f)},M=this._callOnFinishChange.bind(this),E=400;let x;const g=l=>{if(Math.abs(l.deltaX)<Math.abs(l.deltaY)&&this._hasScrollBar)return;l.preventDefault();const k=this._normalizeMouseWheel(l)*this._step;this._snapClampSetValue(this.getValue()+k),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(M,E)};this.$slider.addEventListener("mousedown",t),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:t}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,t=-e.wheelDelta/120,t*=this._stepExplicit?1:10),i+-t}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ce extends nt{constructor(e,i,t,s){super(e,i,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(o=>{const a=document.createElement("option");a.innerHTML=o,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?e:this._names[i],this}}class Se extends nt{constructor(e,i,t){super(e,i,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Pe=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Te(h){const e=document.createElement("style");e.innerHTML=h;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let Gt=!1;class It{constructor({parent:e,autoPlace:i=e===void 0,container:t,width:s,title:o="Controls",injectStyles:a=!0,touchStyles:r=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",y=>{(y.code==="Enter"||y.code==="Space")&&(y.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),r&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Gt&&a&&(Te(Pe),Gt=!0),t?t.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",y=>y.stopPropagation()),this.domElement.addEventListener("keyup",y=>y.stopPropagation())}add(e,i,t,s,o){if(Object(t)===t)return new Ce(this,e,i,t);const a=e[i];switch(typeof a){case"number":return new Le(this,e,i,t,s,o);case"boolean":return new ve(this,e,i);case"string":return new Se(this,e,i);case"function":return new Pt(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,a)}addColor(e,i,t=1){return new Me(this,e,i,t)}addFolder(e){return new It({parent:this,title:e})}load(e,i=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Pt||t._name in e.controllers&&t.load(e.controllers[t._name])}),i&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Pt)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save()}}),e&&this.folders.forEach(t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save()}),i}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const t=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}var vt=function(){var h=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),t(++h%e.children.length)},!1);function i(d){return e.appendChild(d.dom),d}function t(d){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===d?"block":"none";h=d}var s=(performance||Date).now(),o=s,a=0,r=i(new vt.Panel("FPS","#0ff","#002")),y=i(new vt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=i(new vt.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:e,addPanel:i,showPanel:t,begin:function(){s=(performance||Date).now()},end:function(){a++;var d=(performance||Date).now();if(y.update(d-s,200),d>=o+1e3&&(r.update(a*1e3/(d-o),100),o=d,a=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return d},update:function(){s=this.end()},domElement:e,setMode:t}};vt.Panel=function(h,e,i){var t=1/0,s=0,o=Math.round,a=o(window.devicePixelRatio||1),r=80*a,y=48*a,m=3*a,d=2*a,v=3*a,f=15*a,M=74*a,E=30*a,x=document.createElement("canvas");x.width=r,x.height=y,x.style.cssText="width:80px;height:48px";var g=x.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=i,g.fillRect(0,0,r,y),g.fillStyle=e,g.fillText(h,m,d),g.fillRect(v,f,M,E),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(v,f,M,E),{dom:x,update:function(l,L){t=Math.min(t,l),s=Math.max(s,l),g.fillStyle=i,g.globalAlpha=1,g.fillRect(0,0,r,f),g.fillStyle=e,g.fillText(o(l)+" "+h+" ("+o(t)+"-"+o(s)+")",m,d),g.drawImage(x,v+a,f,M-a,E,v,f,M-a,E),g.fillRect(v+M-a,f,a,E),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(v+M-a,f,a,o((1-l/L)*E))}}};const Xt={type:"change"},Tt={type:"start"},kt={type:"end"};class ke extends oe{constructor(e,i){super(),i===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),i===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mt.ROTATE,MIDDLE:mt.DOLLY,RIGHT:mt.PAN},this.touches={ONE:ft.ROTATE,TWO:ft.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(n){n.addEventListener("keydown",ht),this._domElementKeyEvents=n},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(Xt),t.update(),o=s.NONE},this.update=function(){const n=new K,p=new Yt().setFromUnitVectors(e.up,new K(0,1,0)),I=p.clone().invert(),R=new K,et=new Yt,pt=2*Math.PI;return function(){const Vt=t.object.position;n.copy(Vt).sub(t.target),n.applyQuaternion(p),r.setFromVector3(n),t.autoRotate&&o===s.NONE&&T(ct()),t.enableDamping?(r.theta+=y.theta*t.dampingFactor,r.phi+=y.phi*t.dampingFactor):(r.theta+=y.theta,r.phi+=y.phi);let ot=t.minAzimuthAngle,at=t.maxAzimuthAngle;return isFinite(ot)&&isFinite(at)&&(ot<-Math.PI?ot+=pt:ot>Math.PI&&(ot-=pt),at<-Math.PI?at+=pt:at>Math.PI&&(at-=pt),ot<=at?r.theta=Math.max(ot,Math.min(at,r.theta)):r.theta=r.theta>(ot+at)/2?Math.max(ot,r.theta):Math.min(at,r.theta)),r.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=m,r.radius=Math.max(t.minDistance,Math.min(t.maxDistance,r.radius)),t.enableDamping===!0?t.target.addScaledVector(d,t.dampingFactor):t.target.add(d),n.setFromSpherical(r),n.applyQuaternion(I),Vt.copy(t.target).add(n),t.object.lookAt(t.target),t.enableDamping===!0?(y.theta*=1-t.dampingFactor,y.phi*=1-t.dampingFactor,d.multiplyScalar(1-t.dampingFactor)):(y.set(0,0,0),d.set(0,0,0)),m=1,v||R.distanceToSquared(t.object.position)>a||8*(1-et.dot(t.object.quaternion))>a?(t.dispatchEvent(Xt),R.copy(t.object.position),et.copy(t.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",Nt),t.domElement.removeEventListener("pointerdown",G),t.domElement.removeEventListener("pointercancel",U),t.domElement.removeEventListener("wheel",V),t.domElement.removeEventListener("pointermove",X),t.domElement.removeEventListener("pointerup",it),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",ht)};const t=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const a=1e-6,r=new jt,y=new jt;let m=1;const d=new K;let v=!1;const f=new J,M=new J,E=new J,x=new J,g=new J,l=new J,L=new J,k=new J,Y=new J,A=[],w={};function ct(){return 2*Math.PI/60/60*t.autoRotateSpeed}function q(){return Math.pow(.95,t.zoomSpeed)}function T(n){y.theta-=n}function _(n){y.phi-=n}const O=function(){const n=new K;return function(I,R){n.setFromMatrixColumn(R,0),n.multiplyScalar(-I),d.add(n)}}(),F=function(){const n=new K;return function(I,R){t.screenSpacePanning===!0?n.setFromMatrixColumn(R,1):(n.setFromMatrixColumn(R,0),n.crossVectors(t.object.up,n)),n.multiplyScalar(I),d.add(n)}}(),z=function(){const n=new K;return function(I,R){const et=t.domElement;if(t.object.isPerspectiveCamera){const pt=t.object.position;n.copy(pt).sub(t.target);let _t=n.length();_t*=Math.tan(t.object.fov/2*Math.PI/180),O(2*I*_t/et.clientHeight,t.object.matrix),F(2*R*_t/et.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(O(I*(t.object.right-t.object.left)/t.object.zoom/et.clientWidth,t.object.matrix),F(R*(t.object.top-t.object.bottom)/t.object.zoom/et.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function dt(n){t.object.isPerspectiveCamera?m/=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*n)),t.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function bt(n){t.object.isPerspectiveCamera?m*=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/n)),t.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function yt(n){f.set(n.clientX,n.clientY)}function Ct(n){L.set(n.clientX,n.clientY)}function Et(n){x.set(n.clientX,n.clientY)}function xt(n){M.set(n.clientX,n.clientY),E.subVectors(M,f).multiplyScalar(t.rotateSpeed);const p=t.domElement;T(2*Math.PI*E.x/p.clientHeight),_(2*Math.PI*E.y/p.clientHeight),f.copy(M),t.update()}function ut(n){k.set(n.clientX,n.clientY),Y.subVectors(k,L),Y.y>0?dt(q()):Y.y<0&&bt(q()),L.copy(k),t.update()}function c(n){g.set(n.clientX,n.clientY),l.subVectors(g,x).multiplyScalar(t.panSpeed),z(l.x,l.y),x.copy(g),t.update()}function u(n){n.deltaY<0?bt(q()):n.deltaY>0&&dt(q()),t.update()}function b(n){let p=!1;switch(n.code){case t.keys.UP:z(0,t.keyPanSpeed),p=!0;break;case t.keys.BOTTOM:z(0,-t.keyPanSpeed),p=!0;break;case t.keys.LEFT:z(t.keyPanSpeed,0),p=!0;break;case t.keys.RIGHT:z(-t.keyPanSpeed,0),p=!0;break}p&&(n.preventDefault(),t.update())}function P(){if(A.length===1)f.set(A[0].pageX,A[0].pageY);else{const n=.5*(A[0].pageX+A[1].pageX),p=.5*(A[0].pageY+A[1].pageY);f.set(n,p)}}function C(){if(A.length===1)x.set(A[0].pageX,A[0].pageY);else{const n=.5*(A[0].pageX+A[1].pageX),p=.5*(A[0].pageY+A[1].pageY);x.set(n,p)}}function $(){const n=A[0].pageX-A[1].pageX,p=A[0].pageY-A[1].pageY,I=Math.sqrt(n*n+p*p);L.set(0,I)}function S(){t.enableZoom&&$(),t.enablePan&&C()}function D(){t.enableZoom&&$(),t.enableRotate&&P()}function N(n){if(A.length==1)M.set(n.pageX,n.pageY);else{const I=St(n),R=.5*(n.pageX+I.x),et=.5*(n.pageY+I.y);M.set(R,et)}E.subVectors(M,f).multiplyScalar(t.rotateSpeed);const p=t.domElement;T(2*Math.PI*E.x/p.clientHeight),_(2*Math.PI*E.y/p.clientHeight),f.copy(M)}function j(n){if(A.length===1)g.set(n.pageX,n.pageY);else{const p=St(n),I=.5*(n.pageX+p.x),R=.5*(n.pageY+p.y);g.set(I,R)}l.subVectors(g,x).multiplyScalar(t.panSpeed),z(l.x,l.y),x.copy(g)}function B(n){const p=St(n),I=n.pageX-p.x,R=n.pageY-p.y,et=Math.sqrt(I*I+R*R);k.set(0,et),Y.set(0,Math.pow(k.y/L.y,t.zoomSpeed)),dt(Y.y),L.copy(k)}function Q(n){t.enableZoom&&B(n),t.enablePan&&j(n)}function st(n){t.enableZoom&&B(n),t.enableRotate&&N(n)}function G(n){t.enabled!==!1&&(A.length===0&&(t.domElement.setPointerCapture(n.pointerId),t.domElement.addEventListener("pointermove",X),t.domElement.addEventListener("pointerup",it)),se(n),n.pointerType==="touch"?ee(n):W(n))}function X(n){t.enabled!==!1&&(n.pointerType==="touch"?ie(n):tt(n))}function it(n){t.enabled!==!1&&(n.pointerType==="touch"?ne():lt(),Rt(n),A.length===0&&(t.domElement.releasePointerCapture(n.pointerId),t.domElement.removeEventListener("pointermove",X),t.domElement.removeEventListener("pointerup",it)))}function U(n){Rt(n)}function W(n){let p;switch(n.button){case 0:p=t.mouseButtons.LEFT;break;case 1:p=t.mouseButtons.MIDDLE;break;case 2:p=t.mouseButtons.RIGHT;break;default:p=-1}switch(p){case mt.DOLLY:if(t.enableZoom===!1)return;Ct(n),o=s.DOLLY;break;case mt.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enablePan===!1)return;Et(n),o=s.PAN}else{if(t.enableRotate===!1)return;yt(n),o=s.ROTATE}break;case mt.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enableRotate===!1)return;yt(n),o=s.ROTATE}else{if(t.enablePan===!1)return;Et(n),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&t.dispatchEvent(Tt)}function tt(n){if(t.enabled!==!1)switch(o){case s.ROTATE:if(t.enableRotate===!1)return;xt(n);break;case s.DOLLY:if(t.enableZoom===!1)return;ut(n);break;case s.PAN:if(t.enablePan===!1)return;c(n);break}}function lt(n){t.dispatchEvent(kt),o=s.NONE}function V(n){t.enabled===!1||t.enableZoom===!1||o!==s.NONE||(n.preventDefault(),t.dispatchEvent(Tt),u(n),t.dispatchEvent(kt))}function ht(n){t.enabled===!1||t.enablePan===!1||b(n)}function ee(n){switch(zt(n),A.length){case 1:switch(t.touches.ONE){case ft.ROTATE:if(t.enableRotate===!1)return;P(),o=s.TOUCH_ROTATE;break;case ft.PAN:if(t.enablePan===!1)return;C(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(t.touches.TWO){case ft.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;S(),o=s.TOUCH_DOLLY_PAN;break;case ft.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;D(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&t.dispatchEvent(Tt)}function ie(n){switch(zt(n),o){case s.TOUCH_ROTATE:if(t.enableRotate===!1)return;N(n),t.update();break;case s.TOUCH_PAN:if(t.enablePan===!1)return;j(n),t.update();break;case s.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Q(n),t.update();break;case s.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;st(n),t.update();break;default:o=s.NONE}}function ne(n){t.dispatchEvent(kt),o=s.NONE}function Nt(n){t.enabled!==!1&&n.preventDefault()}function se(n){A.push(n)}function Rt(n){delete w[n.pointerId];for(let p=0;p<A.length;p++)if(A[p].pointerId==n.pointerId){A.splice(p,1);return}}function zt(n){let p=w[n.pointerId];p===void 0&&(p=new J,w[n.pointerId]=p),p.set(n.pageX,n.pageY)}function St(n){const p=n.pointerId===A[0].pointerId?A[1]:A[0];return w[p.pointerId]}t.domElement.addEventListener("contextmenu",Nt),t.domElement.addEventListener("pointerdown",G),t.domElement.addEventListener("pointercancel",U),t.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}const $e=Math.PI/180,Ut=48,Wt=57,Zt=44,Jt=32,De=46,Kt=45;function Oe(h){const e=new ae;let i=1,t,s=0,o=0,a=0,r=0,y=null,m=null,d=0,v=0,f=0,M=0,E=0,x=0,g=0,l=0,L=0,k,Y;const A=h.length;function w(){let T,_,O=!1,F;for(;i<A&&(_=h.charCodeAt(i),!(_!==Zt&&_!==Jt));)i++;for(_===Kt?T=i++:T=i;i<A;){if(_=h.charCodeAt(i),Ut<=_&&_<=Wt){i++;continue}else if(_===De){i++,O=!0;continue}return F=h.substring(T,i),O?parseFloat(F):parseInt(F)}return F=h.substring(T),O?parseFloat(F):parseInt(F)}function ct(){let T;for(;i<A&&(T=h.charCodeAt(i),!(T!==Zt&&T!==Jt));)i++;return T=h.charCodeAt(i),T===Kt||Ut<=T&&T<=Wt}let q;for(t=h[0];i<=A;){switch(q=!0,t){case"M":s=w(),o=w(),e.moveTo(s,o),t="L",y=s,m=o;break;case"m":s+=w(),o+=w(),e.moveTo(s,o),t="l",y=s,m=o;break;case"Z":case"z":q=!1,(s!==y||o!==m)&&e.lineTo(y,m);break;case"L":case"H":case"V":a=t==="V"?s:w(),r=t==="H"?o:w(),e.lineTo(a,r),s=a,o=r;break;case"l":case"h":case"v":a=t==="v"?s:s+w(),r=t==="h"?o:o+w(),e.lineTo(a,r),s=a,o=r;break;case"C":d=w(),f=w();case"S":t==="S"&&(d=2*s-v,f=2*o-M),v=w(),M=w(),a=w(),r=w(),e.bezierCurveTo(d,f,v,M,a,r),s=a,o=r;break;case"c":d=s+w(),f=o+w();case"s":t==="s"&&(d=2*s-v,f=2*o-M),v=s+w(),M=o+w(),a=s+w(),r=o+w(),e.bezierCurveTo(d,f,v,M,a,r),s=a,o=r;break;case"Q":d=w(),f=w();case"T":t==="T"&&(d=2*s-d,f=2*o-f),a=w(),r=w(),e.quadraticCurveTo(d,f,a,r),s=a,o=r;break;case"q":d=s+w(),f=o+w();case"t":t==="t"&&(d=2*s-d,f=2*o-f),a=s+w(),r=o+w(),e.quadraticCurveTo(d,f,a,r),s=a,o=r;break;case"A":{E=w(),x=w(),g=w()*$e,l=w(),L=w(),a=w(),r=w(),E!==x&&console.warn("Forcing elliptical arc to be a circular one:",E,x),d=Math.cos(g)*(s-a)/2+Math.sin(g)*(o-r)/2,f=-Math.sin(g)*(s-a)/2+Math.cos(g)*(o-r)/2;let T=Math.sqrt((E*E*x*x-E*E*f*f-x*x*d*d)/(E*E*f*f+x*x*d*d));l===L&&(T=-T),v=T*E*f/x,M=T*-x*d/E,k=Math.cos(g)*v-Math.sin(g)*M+(s+a)/2,Y=Math.sin(g)*v+Math.cos(g)*M+(o+r)/2;const _=new J(1,0),O=new J((d-v)/E,(f-M)/x);let F=Math.acos(_.dot(O)/_.length()/O.length());_.x*O.y-_.y*O.x<0&&(F=-F),_.x=(-d-v)/E,_.y=(-f-M)/x;let z=Math.acos(O.dot(_)/O.length()/_.length());O.x*_.y-O.y*_.x<0&&(z=-z),!L&&z>0&&(z-=Math.PI*2),L&&z<0&&(z+=Math.PI*2),e.absarc(k,Y,E,F,F+z,L),s=a,o=r;break}default:throw new Error(`Wrong path command: ${t}`)}q&&ct()||(t=h[i++])}return e}function Mt(h,e,i,t){const s=Oe(h),o=new re({color:e}),a=s.toShapes(!0);for(let r=0;r<a.length;r++){const y=a[r],m=new le(y,{depth:i,bevelEnabled:!1});t?(t.geometry=m,t.material=o):t=new qt(m,o),t.rotation.x=Math.PI/2,t.translateZ(-i-1)}return t}const rt=class extends Ot{constructor(){super();const e=Mt("M -181.06303,168.32097 L -175.39989,86.992054 L -99.419491,85.261653 L -100.20604,94.228284 L -92.65519,101.80342 L -46.878179,103.19491 L -50.968219,158.88241 Z",5422675,.5);e.translateY(.4),e.receiveShadow=!0;const t=Mt("M -500,350 l 600,0 l 0,-600 l -600,0 Z",8421504,.1);t.receiveShadow=!0;const o=Mt("m -137.59706,98.776225 h 18.13122 v 11.012215 h 9.78864 v 10.67851 h 11.234678 v 14.46048 h -7.452708 v 14.68295 h -21.69073 v -15.35036 h 7.56395 v -13.12566 h -17.35258 z",11250603,3*rt.ratio);o.castShadow=!0,o.receiveShadow=!0;const a="M -300.2865,87.430307 H -287.87487 V 82.091053 L -280.3109,82.758459 L -282.31314,86.762901 L -263.12518,98.275671 L -260.78926,102.28011 L -261.12296,123.74837 L -270.74473,140.15545 L -278.3087,144.27113 L -265.62796,165.85062 L -235.87273,166.40679 L -224.02626,173.5258 L -211.01182,151.16767 L -229.58798,118.79843 V 113.79288 L -218.687,94.994253 L -209.89948,89.988701 L -214.01515,82.980928 L -210.90059,80.645004 L -216.12861,71.857478 L -222.13527,72.191183 L -222.02404,66.073286 L -257.17413,65.405878 L -261.95722,62.625017 L -272.96943,44.16009 L -272.41325,34.48269 L -281.20078,34.92763 L -280.97832,30.255781 L -293.32533,30.033312 L -293.2141,34.816393 L -300.2865,34.48269 Z";this.uni=Mt(a,15763589,rt.hauteurParEtage*rt.nbdetages*rt.ratio),this.uni.castShadow=!0,this.add(o,e,t,this.uni),this.position.set(50,0,-200),this.rotation.y=1.01}update(){this.uni.scale.z=rt.nbdetages/6,this.uni.position.y=rt.hauteurParEtage*rt.nbdetages*rt.ratio}};let gt=rt;gt.nbdetages=6;gt.hauteurParEtage=18.4/6;gt.ratio=31/14.4;var Qt={exports:{}};(function(h,e){(function(){var i=Math.PI,t=Math.sin,s=Math.cos,o=Math.tan,a=Math.asin,r=Math.atan2,y=Math.acos,m=i/180,d=1e3*60*60*24,v=2440588,f=2451545;function M(c){return c.valueOf()/d-.5+v}function E(c){return new Date((c+.5-v)*d)}function x(c){return M(c)-f}var g=m*23.4397;function l(c,u){return r(t(c)*s(g)-o(u)*t(g),s(c))}function L(c,u){return a(t(u)*s(g)+s(u)*t(g)*t(c))}function k(c,u,b){return r(t(c),s(c)*t(u)-o(b)*s(u))}function Y(c,u,b){return a(t(u)*t(b)+s(u)*s(b)*s(c))}function A(c,u){return m*(280.16+360.9856235*c)-u}function w(c){return c<0&&(c=0),2967e-7/Math.tan(c+.00312536/(c+.08901179))}function ct(c){return m*(357.5291+.98560028*c)}function q(c){var u=m*(1.9148*t(c)+.02*t(2*c)+3e-4*t(3*c)),b=m*102.9372;return c+u+b+i}function T(c){var u=ct(c),b=q(u);return{dec:L(b,0),ra:l(b,0)}}var _={};_.getPosition=function(c,u,b){var P=m*-b,C=m*u,$=x(c),S=T($),D=A($,P)-S.ra;return{azimuth:k(D,C,S.dec),altitude:Y(D,C,S.dec)}};var O=_.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];_.addTime=function(c,u,b){O.push([c,u,b])};var F=9e-4;function z(c,u){return Math.round(c-F-u/(2*i))}function dt(c,u,b){return F+(c+u)/(2*i)+b}function bt(c,u,b){return f+c+.0053*t(u)-.0069*t(2*b)}function yt(c,u,b){return y((t(c)-t(u)*t(b))/(s(u)*s(b)))}function Ct(c){return-2.076*Math.sqrt(c)/60}function Et(c,u,b,P,C,$,S){var D=yt(c,b,P),N=dt(D,u,C);return bt(N,$,S)}_.getTimes=function(c,u,b,P){P=P||0;var C=m*-b,$=m*u,S=Ct(P),D=x(c),N=z(D,C),j=dt(0,C,N),B=ct(j),Q=q(B),st=L(Q,0),G=bt(j,B,Q),X,it,U,W,tt,lt,V={solarNoon:E(G),nadir:E(G-.5)};for(X=0,it=O.length;X<it;X+=1)U=O[X],W=(U[0]+S)*m,tt=Et(W,C,$,st,N,B,Q),lt=G-(tt-G),V[U[1]]=E(lt),V[U[2]]=E(tt);return V};function xt(c){var u=m*(218.316+13.176396*c),b=m*(134.963+13.064993*c),P=m*(93.272+13.22935*c),C=u+m*6.289*t(b),$=m*5.128*t(P),S=385001-20905*s(b);return{ra:l(C,$),dec:L(C,$),dist:S}}_.getMoonPosition=function(c,u,b){var P=m*-b,C=m*u,$=x(c),S=xt($),D=A($,P)-S.ra,N=Y(D,C,S.dec),j=r(t(D),o(C)*s(S.dec)-t(S.dec)*s(D));return N=N+w(N),{azimuth:k(D,C,S.dec),altitude:N,distance:S.dist,parallacticAngle:j}},_.getMoonIllumination=function(c){var u=x(c||new Date),b=T(u),P=xt(u),C=149598e3,$=y(t(b.dec)*t(P.dec)+s(b.dec)*s(P.dec)*s(b.ra-P.ra)),S=r(C*t($),P.dist-C*s($)),D=r(s(b.dec)*t(b.ra-P.ra),t(b.dec)*s(P.dec)-s(b.dec)*t(P.dec)*s(b.ra-P.ra));return{fraction:(1+s(S))/2,phase:.5+.5*S*(D<0?-1:1)/Math.PI,angle:D}};function ut(c,u){return new Date(c.valueOf()+u*d/24)}_.getMoonTimes=function(c,u,b,P){var C=new Date(c);P?C.setUTCHours(0,0,0,0):C.setHours(0,0,0,0);for(var $=.133*m,S=_.getMoonPosition(C,u,b).altitude-$,D,N,j,B,Q,st,G,X,it,U,W,tt,lt,V=1;V<=24&&(D=_.getMoonPosition(ut(C,V),u,b).altitude-$,N=_.getMoonPosition(ut(C,V+1),u,b).altitude-$,Q=(S+N)/2-D,st=(N-S)/2,G=-st/(2*Q),X=(Q*G+st)*G+D,it=st*st-4*Q*D,U=0,it>=0&&(lt=Math.sqrt(it)/(Math.abs(Q)*2),W=G-lt,tt=G+lt,Math.abs(W)<=1&&U++,Math.abs(tt)<=1&&U++,W<-1&&(W=tt)),U===1?S<0?j=V+W:B=V+W:U===2&&(j=V+(X<0?tt:W),B=V+(X<0?W:tt)),!(j&&B));V+=2)S=N;var ht={};return j&&(ht.rise=ut(C,j)),B&&(ht.set=ut(C,B)),!j&&!B&&(ht[X>0?"alwaysUp":"alwaysDown"]=!0),ht},h.exports=_})()})(Qt);const Z=class{static update(h){Z.play&&(Z.time+=(h-Z.lastUpdateDelta)*Z.timeSpeedMultiplier),Z.lastUpdateDelta=h}static addOneMinute(){Z.time+=6e4}static addTenMinutes(){Z.time+=6e5}static addOneHour(){Z.time+=36e5}static addOneDay(){Z.time+=864e5}static addTenDays(){Z.time+=864e6}static addOneMonth(){Z.time+=2592e6}};let H=Z;H.lastUpdateDelta=0;H.timeSpeedMultiplier=5e3;H.play=!0;H.time=new Date(2022,0,1,1).getTime();const Dt=class{static getPosition(){return Qt.exports.getPosition(new Date(H.time),Dt.lat,Dt.long)}};let Ht=Dt;Ht.lat=46.089064115568284;Ht.long=6.107614109077571;class Ie extends he{constructor(){super(16777215,1,1e4),this.castShadow=!0}setNightMode(e){this.intensity=e?.1:1}}const Lt=class extends qt{constructor(){const h=new ce(10,16,8),e=new Bt({color:Lt.dayColor});super(h,e)}setNightMode(h){this.material=new Bt({color:h?Lt.nightColor:Lt.dayColor})}};let Ft=Lt;Ft.nightColor=8947712;Ft.dayColor=16776960;class He extends Ot{constructor(){super(),this.isNight=!1,this.light=new Ie,this.add(this.light),this.sphere=new Ft,this.add(this.sphere),this.updatePosition()}updatePosition(){const e=Ht.getPosition();e.azimuth+=Math.PI/2,e.altitude+=Math.PI/2;const i=450,t=i*Math.sin(e.altitude),s=t*Math.cos(e.azimuth),o=t*Math.sin(e.azimuth),a=i*Math.cos(e.altitude);this.position.set(s,-a,o);const r=this.position.y<0;r!==this.isNight&&(this.sphere.setNightMode(r),this.light.setNightMode(r),this.isNight=r)}}class Fe{constructor(){this.el=document.createElement("div"),Object.assign(this.el.style,{position:"absolute",top:"10px",width:"100%",textAlign:"center",zIndex:"100",display:"block",color:"#00e6e6"}),document.body.appendChild(this.el),this.update()}update(){this.el.innerText=new Date(H.time).toUTCString()}}const wt=class extends Ot{constructor(){super(),[{position:new K(wt.distance,0,0),name:"E"},{position:new K(-wt.distance,0,0),name:"W"},{position:new K(0,0,-wt.distance),name:"N"},{position:new K(0,0,wt.distance),name:"S"}].forEach(i=>{this.add(new de(i.position,i.position,100,i.name==="N"?16711935:65535,30,30))});const e=new ue(450);this.add(e)}};let te=wt;te.distance=500;class Ne{constructor(){this.initScene(),this.initStats(),this.initListeners()}initStats(){this.stats=new vt,document.body.appendChild(this.stats.dom)}initScene(){this.scene=new pe,this.camera=new me(75,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.setFromSphericalCoords(600,Math.PI/4,0),this.renderer=new fe,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ge,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new ke(this.camera,this.renderer.domElement);const e=new be(11184810);this.scene.add(e),this.sun=new He,this.scene.add(this.sun),this.constructions=new gt,this.scene.add(this.constructions),this.currentTime=new Fe,this.scene.add(new te),this.initGui(),this.animate(1)}initGui(){const e=new It,i=e.addFolder("Time");i.add(H,"play"),i.add(H,"timeSpeedMultiplier",0,1e5),i.add(H,"addOneMinute"),i.add(H,"addTenMinutes"),i.add(H,"addOneHour"),i.add(H,"addOneDay"),i.add(H,"addTenDays"),i.add(H,"addOneMonth"),e.addFolder("Constructions").add(gt,"nbdetages",1,10,1).onChange(()=>{this.updateConstructions()})}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keydown",e=>{const{key:i}=e;switch(i){case"e":this.takeScreenShot(),e.preventDefault(),e.stopPropagation();break;case" ":H.play=!H.play,e.preventDefault(),e.stopPropagation();break}})}takeScreenShot(){const{domElement:e}=this.renderer;this.renderer.render(this.scene,this.camera);const i=e.toDataURL();this.download(i,`${new Date(H.time).toISOString()}-${gt.nbdetages}etages.png`)}download(e,i){const t=document.createElement("a");t.href=e,t.download=i,t.click()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(e){requestAnimationFrame(i=>{this.animate(i)}),H.update(e),this.update(),this.renderer.render(this.scene,this.camera)}updateConstructions(){this.constructions.update()}update(){var e,i;(e=this.stats)==null||e.update(),(i=this.controls)==null||i.update(),this.currentTime.update(),this.sun.updatePosition()}}window.addEventListener("DOMContentLoaded",()=>{new Ne});
