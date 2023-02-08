import{E as oe,V as J,M as ft,T as gt,Q as Yt,S as jt,a as K,b as ae,c as re,d as le,e as qt,G as Ot,P as de,f as he,g as Bt,A as ce,h as ue,i as pe,j as me,W as fe,k as ge,l as be}from"./three.5a2e84e9.js";const we=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};we();/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class nt{constructor(e,i,t,s,o="div"){this.parent=e,this.object=i,this.property=t,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),nt.nextNameID=nt.nextNameID||0,this.$name.id=`lil-gui-name-${++nt.nextNameID}`,this.$widget=document.createElement(o),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(t)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ve extends nt{constructor(e,i,t){super(e,i,t,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Tt(d){let e,i;return(e=d.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const ye={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:Tt,toHexString:Tt},yt={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},Ae={isPrimitive:!1,match:Array.isArray,fromHexString(d,e,i=1){const t=yt.fromHexString(d);e[0]=(t>>16&255)/255*i,e[1]=(t>>8&255)/255*i,e[2]=(t&255)/255*i},toHexString([d,e,i],t=1){t=255/t;const s=d*t<<16^e*t<<8^i*t<<0;return yt.toHexString(s)}},Ee={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,e,i=1){const t=yt.fromHexString(d);e.r=(t>>16&255)/255*i,e.g=(t>>8&255)/255*i,e.b=(t&255)/255*i},toHexString({r:d,g:e,b:i},t=1){t=255/t;const s=d*t<<16^e*t<<8^i*t<<0;return yt.toHexString(s)}},xe=[ye,yt,Ae,Ee];function _e(d){return xe.find(e=>e.match(d))}class Me extends nt{constructor(e,i,t,s){super(e,i,t,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=_e(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Tt(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Pt extends nt{constructor(e,i,t){super(e,i,t,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Le extends nt{constructor(e,i,t,s,o,a){super(e,i,t,"number"),this._initInput(),this.min(s),this.max(o);const r=a!==void 0;this.step(r?a:this._getImplicitStep(),r),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))},i=l=>{const C=parseFloat(this.$input.value);isNaN(C)||(this._snapClampSetValue(C+l),this.$input.value=this.getValue())},t=l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),i(this._step*this._arrowKeyMultiplier(l)*-1))},s=l=>{this._inputFocused&&(l.preventDefault(),i(this._step*this._normalizeMouseWheel(l)))};let o=!1,a,r,A,m,c;const v=5,f=l=>{a=l.clientX,r=A=l.clientY,o=!0,m=this.getValue(),c=0,window.addEventListener("mousemove",L),window.addEventListener("mouseup",E)},L=l=>{if(o){const C=l.clientX-a,T=l.clientY-r;Math.abs(T)>v?(l.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(C)>v&&E()}o||(c-=(l.clientY-A)*this._step*this._arrowKeyMultiplier(l),m+c>this._max?c=this._max-m:m+c<this._min&&(c=this._min-m),this._snapClampSetValue(m+c)),A=l.clientY},E=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",E)},x=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",t),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(l,C,T,j,y)=>(l-C)/(T-C)*(y-j)+j,i=l=>{const C=this.$slider.getBoundingClientRect();let T=e(l,C.left,C.right,this._min,this._max);this._snapClampSetValue(T)},t=l=>{this._setDraggingStyle(!0),i(l.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",o)},s=l=>{i(l.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o)};let a=!1,r,A;const m=l=>{l.preventDefault(),this._setDraggingStyle(!0),i(l.touches[0].clientX),a=!1},c=l=>{l.touches.length>1||(this._hasScrollBar?(r=l.touches[0].clientX,A=l.touches[0].clientY,a=!0):m(l),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",f))},v=l=>{if(a){const C=l.touches[0].clientX-r,T=l.touches[0].clientY-A;Math.abs(C)>Math.abs(T)?m(l):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",f))}else l.preventDefault(),i(l.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",f)},L=this._callOnFinishChange.bind(this),E=400;let x;const g=l=>{if(Math.abs(l.deltaX)<Math.abs(l.deltaY)&&this._hasScrollBar)return;l.preventDefault();const T=this._normalizeMouseWheel(l)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(x),x=setTimeout(L,E)};this.$slider.addEventListener("mousedown",t),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:t}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,t=-e.wheelDelta/120,t*=this._stepExplicit?1:10),i+-t}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ce extends nt{constructor(e,i,t,s){super(e,i,t,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(o=>{const a=document.createElement("option");a.innerHTML=o,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?e:this._names[i],this}}class Se extends nt{constructor(e,i,t){super(e,i,t,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Pe=`.lil-gui {
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
}`;function De(d){const e=document.createElement("style");e.innerHTML=d;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let Gt=!1;class It{constructor({parent:e,autoPlace:i=e===void 0,container:t,width:s,title:o="Controls",injectStyles:a=!0,touchStyles:r=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",A=>{(A.code==="Enter"||A.code==="Space")&&(A.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),r&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Gt&&a&&(De(Pe),Gt=!0),t?t.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",A=>A.stopPropagation()),this.domElement.addEventListener("keyup",A=>A.stopPropagation())}add(e,i,t,s,o){if(Object(t)===t)return new Ce(this,e,i,t);const a=e[i];switch(typeof a){case"number":return new Le(this,e,i,t,s,o);case"boolean":return new ve(this,e,i);case"string":return new Se(this,e,i);case"function":return new Pt(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,a)}addColor(e,i,t=1){return new Me(this,e,i,t)}addFolder(e){return new It({parent:this,title:e})}load(e,i=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Pt||t._name in e.controllers&&t.load(e.controllers[t._name])}),i&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof Pt)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save()}}),e&&this.folders.forEach(t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save()}),i}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const t=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",t))};this.$children.addEventListener("transitionend",t);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}var vt=function(){var d=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),t(++d%e.children.length)},!1);function i(c){return e.appendChild(c.dom),c}function t(c){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===c?"block":"none";d=c}var s=(performance||Date).now(),o=s,a=0,r=i(new vt.Panel("FPS","#0ff","#002")),A=i(new vt.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=i(new vt.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:e,addPanel:i,showPanel:t,begin:function(){s=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();if(A.update(c-s,200),c>=o+1e3&&(r.update(a*1e3/(c-o),100),o=c,a=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return c},update:function(){s=this.end()},domElement:e,setMode:t}};vt.Panel=function(d,e,i){var t=1/0,s=0,o=Math.round,a=o(window.devicePixelRatio||1),r=80*a,A=48*a,m=3*a,c=2*a,v=3*a,f=15*a,L=74*a,E=30*a,x=document.createElement("canvas");x.width=r,x.height=A,x.style.cssText="width:80px;height:48px";var g=x.getContext("2d");return g.font="bold "+9*a+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=i,g.fillRect(0,0,r,A),g.fillStyle=e,g.fillText(d,m,c),g.fillRect(v,f,L,E),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(v,f,L,E),{dom:x,update:function(l,C){t=Math.min(t,l),s=Math.max(s,l),g.fillStyle=i,g.globalAlpha=1,g.fillRect(0,0,r,f),g.fillStyle=e,g.fillText(o(l)+" "+d+" ("+o(t)+"-"+o(s)+")",m,c),g.drawImage(x,v+a,f,L-a,E,v,f,L-a,E),g.fillRect(v+L-a,f,a,E),g.fillStyle=i,g.globalAlpha=.9,g.fillRect(v+L-a,f,a,o((1-l/C)*E))}}};const Xt={type:"change"},Dt={type:"start"},kt={type:"end"};class ke extends oe{constructor(e,i){super(),i===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),i===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ft.ROTATE,MIDDLE:ft.DOLLY,RIGHT:ft.PAN},this.touches={ONE:gt.ROTATE,TWO:gt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(n){n.addEventListener("keydown",ht),this._domElementKeyEvents=n},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(Xt),t.update(),o=s.NONE},this.update=function(){const n=new J,p=new Yt().setFromUnitVectors(e.up,new J(0,1,0)),F=p.clone().invert(),z=new J,et=new Yt,mt=2*Math.PI;return function(){const Vt=t.object.position;n.copy(Vt).sub(t.target),n.applyQuaternion(p),r.setFromVector3(n),t.autoRotate&&o===s.NONE&&k(ct()),t.enableDamping?(r.theta+=A.theta*t.dampingFactor,r.phi+=A.phi*t.dampingFactor):(r.theta+=A.theta,r.phi+=A.phi);let ot=t.minAzimuthAngle,at=t.maxAzimuthAngle;return isFinite(ot)&&isFinite(at)&&(ot<-Math.PI?ot+=mt:ot>Math.PI&&(ot-=mt),at<-Math.PI?at+=mt:at>Math.PI&&(at-=mt),ot<=at?r.theta=Math.max(ot,Math.min(at,r.theta)):r.theta=r.theta>(ot+at)/2?Math.max(ot,r.theta):Math.min(at,r.theta)),r.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=m,r.radius=Math.max(t.minDistance,Math.min(t.maxDistance,r.radius)),t.enableDamping===!0?t.target.addScaledVector(c,t.dampingFactor):t.target.add(c),n.setFromSpherical(r),n.applyQuaternion(F),Vt.copy(t.target).add(n),t.object.lookAt(t.target),t.enableDamping===!0?(A.theta*=1-t.dampingFactor,A.phi*=1-t.dampingFactor,c.multiplyScalar(1-t.dampingFactor)):(A.set(0,0,0),c.set(0,0,0)),m=1,v||z.distanceToSquared(t.object.position)>a||8*(1-et.dot(t.object.quaternion))>a?(t.dispatchEvent(Xt),z.copy(t.object.position),et.copy(t.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",Nt),t.domElement.removeEventListener("pointerdown",X),t.domElement.removeEventListener("pointercancel",W),t.domElement.removeEventListener("wheel",Y),t.domElement.removeEventListener("pointermove",U),t.domElement.removeEventListener("pointerup",it),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",ht)};const t=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const a=1e-6,r=new jt,A=new jt;let m=1;const c=new J;let v=!1;const f=new K,L=new K,E=new K,x=new K,g=new K,l=new K,C=new K,T=new K,j=new K,y=[],w={};function ct(){return 2*Math.PI/60/60*t.autoRotateSpeed}function q(){return Math.pow(.95,t.zoomSpeed)}function k(n){A.theta-=n}function M(n){A.phi-=n}const H=function(){const n=new J;return function(F,z){n.setFromMatrixColumn(z,0),n.multiplyScalar(-F),c.add(n)}}(),N=function(){const n=new J;return function(F,z){t.screenSpacePanning===!0?n.setFromMatrixColumn(z,1):(n.setFromMatrixColumn(z,0),n.crossVectors(t.object.up,n)),n.multiplyScalar(F),c.add(n)}}(),V=function(){const n=new J;return function(F,z){const et=t.domElement;if(t.object.isPerspectiveCamera){const mt=t.object.position;n.copy(mt).sub(t.target);let _t=n.length();_t*=Math.tan(t.object.fov/2*Math.PI/180),H(2*F*_t/et.clientHeight,t.object.matrix),N(2*z*_t/et.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(H(F*(t.object.right-t.object.left)/t.object.zoom/et.clientWidth,t.object.matrix),N(z*(t.object.top-t.object.bottom)/t.object.zoom/et.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function ut(n){t.object.isPerspectiveCamera?m/=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*n)),t.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function bt(n){t.object.isPerspectiveCamera?m*=n:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/n)),t.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function At(n){f.set(n.clientX,n.clientY)}function Ct(n){C.set(n.clientX,n.clientY)}function Et(n){x.set(n.clientX,n.clientY)}function xt(n){L.set(n.clientX,n.clientY),E.subVectors(L,f).multiplyScalar(t.rotateSpeed);const p=t.domElement;k(2*Math.PI*E.x/p.clientHeight),M(2*Math.PI*E.y/p.clientHeight),f.copy(L),t.update()}function pt(n){T.set(n.clientX,n.clientY),j.subVectors(T,C),j.y>0?ut(q()):j.y<0&&bt(q()),C.copy(T),t.update()}function h(n){g.set(n.clientX,n.clientY),l.subVectors(g,x).multiplyScalar(t.panSpeed),V(l.x,l.y),x.copy(g),t.update()}function u(n){n.deltaY<0?bt(q()):n.deltaY>0&&ut(q()),t.update()}function b(n){let p=!1;switch(n.code){case t.keys.UP:V(0,t.keyPanSpeed),p=!0;break;case t.keys.BOTTOM:V(0,-t.keyPanSpeed),p=!0;break;case t.keys.LEFT:V(t.keyPanSpeed,0),p=!0;break;case t.keys.RIGHT:V(-t.keyPanSpeed,0),p=!0;break}p&&(n.preventDefault(),t.update())}function D(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const n=.5*(y[0].pageX+y[1].pageX),p=.5*(y[0].pageY+y[1].pageY);f.set(n,p)}}function S(){if(y.length===1)x.set(y[0].pageX,y[0].pageY);else{const n=.5*(y[0].pageX+y[1].pageX),p=.5*(y[0].pageY+y[1].pageY);x.set(n,p)}}function $(){const n=y[0].pageX-y[1].pageX,p=y[0].pageY-y[1].pageY,F=Math.sqrt(n*n+p*p);C.set(0,F)}function P(){t.enableZoom&&$(),t.enablePan&&S()}function O(){t.enableZoom&&$(),t.enableRotate&&D()}function R(n){if(y.length==1)L.set(n.pageX,n.pageY);else{const F=St(n),z=.5*(n.pageX+F.x),et=.5*(n.pageY+F.y);L.set(z,et)}E.subVectors(L,f).multiplyScalar(t.rotateSpeed);const p=t.domElement;k(2*Math.PI*E.x/p.clientHeight),M(2*Math.PI*E.y/p.clientHeight),f.copy(L)}function B(n){if(y.length===1)g.set(n.pageX,n.pageY);else{const p=St(n),F=.5*(n.pageX+p.x),z=.5*(n.pageY+p.y);g.set(F,z)}l.subVectors(g,x).multiplyScalar(t.panSpeed),V(l.x,l.y),x.copy(g)}function G(n){const p=St(n),F=n.pageX-p.x,z=n.pageY-p.y,et=Math.sqrt(F*F+z*z);T.set(0,et),j.set(0,Math.pow(T.y/C.y,t.zoomSpeed)),ut(j.y),C.copy(T)}function Q(n){t.enableZoom&&G(n),t.enablePan&&B(n)}function st(n){t.enableZoom&&G(n),t.enableRotate&&R(n)}function X(n){t.enabled!==!1&&(y.length===0&&(t.domElement.setPointerCapture(n.pointerId),t.domElement.addEventListener("pointermove",U),t.domElement.addEventListener("pointerup",it)),se(n),n.pointerType==="touch"?ee(n):Z(n))}function U(n){t.enabled!==!1&&(n.pointerType==="touch"?ie(n):tt(n))}function it(n){t.enabled!==!1&&(n.pointerType==="touch"?ne():rt(),Rt(n),y.length===0&&(t.domElement.releasePointerCapture(n.pointerId),t.domElement.removeEventListener("pointermove",U),t.domElement.removeEventListener("pointerup",it)))}function W(n){Rt(n)}function Z(n){let p;switch(n.button){case 0:p=t.mouseButtons.LEFT;break;case 1:p=t.mouseButtons.MIDDLE;break;case 2:p=t.mouseButtons.RIGHT;break;default:p=-1}switch(p){case ft.DOLLY:if(t.enableZoom===!1)return;Ct(n),o=s.DOLLY;break;case ft.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enablePan===!1)return;Et(n),o=s.PAN}else{if(t.enableRotate===!1)return;At(n),o=s.ROTATE}break;case ft.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(t.enableRotate===!1)return;At(n),o=s.ROTATE}else{if(t.enablePan===!1)return;Et(n),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&t.dispatchEvent(Dt)}function tt(n){if(t.enabled!==!1)switch(o){case s.ROTATE:if(t.enableRotate===!1)return;xt(n);break;case s.DOLLY:if(t.enableZoom===!1)return;pt(n);break;case s.PAN:if(t.enablePan===!1)return;h(n);break}}function rt(n){t.dispatchEvent(kt),o=s.NONE}function Y(n){t.enabled===!1||t.enableZoom===!1||o!==s.NONE||(n.preventDefault(),t.dispatchEvent(Dt),u(n),t.dispatchEvent(kt))}function ht(n){t.enabled===!1||t.enablePan===!1||b(n)}function ee(n){switch(zt(n),y.length){case 1:switch(t.touches.ONE){case gt.ROTATE:if(t.enableRotate===!1)return;D(),o=s.TOUCH_ROTATE;break;case gt.PAN:if(t.enablePan===!1)return;S(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(t.touches.TWO){case gt.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;P(),o=s.TOUCH_DOLLY_PAN;break;case gt.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;O(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&t.dispatchEvent(Dt)}function ie(n){switch(zt(n),o){case s.TOUCH_ROTATE:if(t.enableRotate===!1)return;R(n),t.update();break;case s.TOUCH_PAN:if(t.enablePan===!1)return;B(n),t.update();break;case s.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Q(n),t.update();break;case s.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;st(n),t.update();break;default:o=s.NONE}}function ne(n){t.dispatchEvent(kt),o=s.NONE}function Nt(n){t.enabled!==!1&&n.preventDefault()}function se(n){y.push(n)}function Rt(n){delete w[n.pointerId];for(let p=0;p<y.length;p++)if(y[p].pointerId==n.pointerId){y.splice(p,1);return}}function zt(n){let p=w[n.pointerId];p===void 0&&(p=new K,w[n.pointerId]=p),p.set(n.pageX,n.pageY)}function St(n){const p=n.pointerId===y[0].pointerId?y[1]:y[0];return w[p.pointerId]}t.domElement.addEventListener("contextmenu",Nt),t.domElement.addEventListener("pointerdown",X),t.domElement.addEventListener("pointercancel",W),t.domElement.addEventListener("wheel",Y,{passive:!1}),this.update()}}const Te=Math.PI/180,Ut=48,Wt=57,Zt=44,Kt=32,$e=46,Jt=45;function Oe(d){const e=new ae;let i=1,t,s=0,o=0,a=0,r=0,A=null,m=null,c=0,v=0,f=0,L=0,E=0,x=0,g=0,l=0,C=0,T,j;const y=d.length;function w(){let k,M,H=!1,N;for(;i<y&&(M=d.charCodeAt(i),!(M!==Zt&&M!==Kt));)i++;for(M===Jt?k=i++:k=i;i<y;){if(M=d.charCodeAt(i),Ut<=M&&M<=Wt){i++;continue}else if(M===$e){i++,H=!0;continue}return N=d.substring(k,i),H?parseFloat(N):parseInt(N)}return N=d.substring(k),H?parseFloat(N):parseInt(N)}function ct(){let k;for(;i<y&&(k=d.charCodeAt(i),!(k!==Zt&&k!==Kt));)i++;return k=d.charCodeAt(i),k===Jt||Ut<=k&&k<=Wt}let q;for(t=d[0];i<=y;){switch(q=!0,t){case"M":s=w(),o=w(),e.moveTo(s,o),t="L",A=s,m=o;break;case"m":s+=w(),o+=w(),e.moveTo(s,o),t="l",A=s,m=o;break;case"Z":case"z":q=!1,(s!==A||o!==m)&&e.lineTo(A,m);break;case"L":case"H":case"V":a=t==="V"?s:w(),r=t==="H"?o:w(),e.lineTo(a,r),s=a,o=r;break;case"l":case"h":case"v":a=t==="v"?s:s+w(),r=t==="h"?o:o+w(),e.lineTo(a,r),s=a,o=r;break;case"C":c=w(),f=w();case"S":t==="S"&&(c=2*s-v,f=2*o-L),v=w(),L=w(),a=w(),r=w(),e.bezierCurveTo(c,f,v,L,a,r),s=a,o=r;break;case"c":c=s+w(),f=o+w();case"s":t==="s"&&(c=2*s-v,f=2*o-L),v=s+w(),L=o+w(),a=s+w(),r=o+w(),e.bezierCurveTo(c,f,v,L,a,r),s=a,o=r;break;case"Q":c=w(),f=w();case"T":t==="T"&&(c=2*s-c,f=2*o-f),a=w(),r=w(),e.quadraticCurveTo(c,f,a,r),s=a,o=r;break;case"q":c=s+w(),f=o+w();case"t":t==="t"&&(c=2*s-c,f=2*o-f),a=s+w(),r=o+w(),e.quadraticCurveTo(c,f,a,r),s=a,o=r;break;case"A":{E=w(),x=w(),g=w()*Te,l=w(),C=w(),a=w(),r=w(),E!==x&&console.warn("Forcing elliptical arc to be a circular one:",E,x),c=Math.cos(g)*(s-a)/2+Math.sin(g)*(o-r)/2,f=-Math.sin(g)*(s-a)/2+Math.cos(g)*(o-r)/2;let k=Math.sqrt((E*E*x*x-E*E*f*f-x*x*c*c)/(E*E*f*f+x*x*c*c));l===C&&(k=-k),v=k*E*f/x,L=k*-x*c/E,T=Math.cos(g)*v-Math.sin(g)*L+(s+a)/2,j=Math.sin(g)*v+Math.cos(g)*L+(o+r)/2;const M=new K(1,0),H=new K((c-v)/E,(f-L)/x);let N=Math.acos(M.dot(H)/M.length()/H.length());M.x*H.y-M.y*H.x<0&&(N=-N),M.x=(-c-v)/E,M.y=(-f-L)/x;let V=Math.acos(H.dot(M)/H.length()/M.length());H.x*M.y-H.y*M.x<0&&(V=-V),!C&&V>0&&(V-=Math.PI*2),C&&V<0&&(V+=Math.PI*2),e.absarc(T,j,E,N,N+V,C),s=a,o=r;break}default:throw new Error(`Wrong path command: ${t}`)}q&&ct()||(t=d[i++])}return e}function Mt(d,e,i,t){const s=Oe(d),o=new re({color:e}),a=s.toShapes(!0);for(let r=0;r<a.length;r++){const A=a[r],m=new le(A,{depth:i,bevelEnabled:!1});t?(t.geometry=m,t.material=o):t=new qt(m,o),t.rotation.x=Math.PI/2,t.translateZ(-i-1)}return t}const lt=class extends Ot{constructor(){super();const e=Mt("M -181.06303,168.32097 L -175.39989,86.992054 L -99.419491,85.261653 L -100.20604,94.228284 L -92.65519,101.80342 L -46.878179,103.19491 L -50.968219,158.88241 Z",5422675,.5);e.receiveShadow=!0;const t=Mt("M -500,350 l 600,0 l 0,-600 l -600,0 Z",8421504,.1);t.receiveShadow=!0;const o=Mt("m -137.59706,98.776225 h 18.13122 v 11.012215 h 9.78864 v 10.67851 h 11.234678 v 14.46048 h -7.452708 v 14.68295 h -21.69073 v -15.35036 h 7.56395 v -13.12566 h -17.35258 z",11250603,3*lt.ratio);o.castShadow=!0,o.receiveShadow=!0;const a="M -300.2865,87.430307 H -287.87487 V 82.091053 L -280.3109,82.758459 L -282.31314,86.762901 L -263.12518,98.275671 L -260.78926,102.28011 L -261.12296,123.74837 L -270.74473,140.15545 L -278.3087,144.27113 L -265.62796,165.85062 L -235.87273,166.40679 L -224.02626,173.5258 L -211.01182,151.16767 L -229.58798,118.79843 V 113.79288 L -218.687,94.994253 L -209.89948,89.988701 L -214.01515,82.980928 L -210.90059,80.645004 L -216.12861,71.857478 L -222.13527,72.191183 L -222.02404,66.073286 L -257.17413,65.405878 L -261.95722,62.625017 L -272.96943,44.16009 L -272.41325,34.48269 L -281.20078,34.92763 L -280.97832,30.255781 L -293.32533,30.033312 L -293.2141,34.816393 L -300.2865,34.48269 Z";this.uni=Mt(a,15763589,1),this.uni.castShadow=!0,this.update(),this.add(o,e,t,this.uni),this.position.set(50,0,-200),this.rotation.y=1.01}update(){this.uni.scale.z=lt.heights[lt.nbdetages]*lt.ratio,this.uni.position.y=lt.heights[lt.nbdetages]*lt.ratio+1}};let dt=lt;dt.heights={6:18.4+1.88,5:15.2+1.88,4:12.3+1.88,3:9.4+1.88};dt.nbdetages=6;dt.ratio=31/14.4;var Qt={exports:{}};(function(d,e){(function(){var i=Math.PI,t=Math.sin,s=Math.cos,o=Math.tan,a=Math.asin,r=Math.atan2,A=Math.acos,m=i/180,c=1e3*60*60*24,v=2440588,f=2451545;function L(h){return h.valueOf()/c-.5+v}function E(h){return new Date((h+.5-v)*c)}function x(h){return L(h)-f}var g=m*23.4397;function l(h,u){return r(t(h)*s(g)-o(u)*t(g),s(h))}function C(h,u){return a(t(u)*s(g)+s(u)*t(g)*t(h))}function T(h,u,b){return r(t(h),s(h)*t(u)-o(b)*s(u))}function j(h,u,b){return a(t(u)*t(b)+s(u)*s(b)*s(h))}function y(h,u){return m*(280.16+360.9856235*h)-u}function w(h){return h<0&&(h=0),2967e-7/Math.tan(h+.00312536/(h+.08901179))}function ct(h){return m*(357.5291+.98560028*h)}function q(h){var u=m*(1.9148*t(h)+.02*t(2*h)+3e-4*t(3*h)),b=m*102.9372;return h+u+b+i}function k(h){var u=ct(h),b=q(u);return{dec:C(b,0),ra:l(b,0)}}var M={};M.getPosition=function(h,u,b){var D=m*-b,S=m*u,$=x(h),P=k($),O=y($,D)-P.ra;return{azimuth:T(O,S,P.dec),altitude:j(O,S,P.dec)}};var H=M.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];M.addTime=function(h,u,b){H.push([h,u,b])};var N=9e-4;function V(h,u){return Math.round(h-N-u/(2*i))}function ut(h,u,b){return N+(h+u)/(2*i)+b}function bt(h,u,b){return f+h+.0053*t(u)-.0069*t(2*b)}function At(h,u,b){return A((t(h)-t(u)*t(b))/(s(u)*s(b)))}function Ct(h){return-2.076*Math.sqrt(h)/60}function Et(h,u,b,D,S,$,P){var O=At(h,b,D),R=ut(O,u,S);return bt(R,$,P)}M.getTimes=function(h,u,b,D){D=D||0;var S=m*-b,$=m*u,P=Ct(D),O=x(h),R=V(O,S),B=ut(0,S,R),G=ct(B),Q=q(G),st=C(Q,0),X=bt(B,G,Q),U,it,W,Z,tt,rt,Y={solarNoon:E(X),nadir:E(X-.5)};for(U=0,it=H.length;U<it;U+=1)W=H[U],Z=(W[0]+P)*m,tt=Et(Z,S,$,st,R,G,Q),rt=X-(tt-X),Y[W[1]]=E(rt),Y[W[2]]=E(tt);return Y};function xt(h){var u=m*(218.316+13.176396*h),b=m*(134.963+13.064993*h),D=m*(93.272+13.22935*h),S=u+m*6.289*t(b),$=m*5.128*t(D),P=385001-20905*s(b);return{ra:l(S,$),dec:C(S,$),dist:P}}M.getMoonPosition=function(h,u,b){var D=m*-b,S=m*u,$=x(h),P=xt($),O=y($,D)-P.ra,R=j(O,S,P.dec),B=r(t(O),o(S)*s(P.dec)-t(P.dec)*s(O));return R=R+w(R),{azimuth:T(O,S,P.dec),altitude:R,distance:P.dist,parallacticAngle:B}},M.getMoonIllumination=function(h){var u=x(h||new Date),b=k(u),D=xt(u),S=149598e3,$=A(t(b.dec)*t(D.dec)+s(b.dec)*s(D.dec)*s(b.ra-D.ra)),P=r(S*t($),D.dist-S*s($)),O=r(s(b.dec)*t(b.ra-D.ra),t(b.dec)*s(D.dec)-s(b.dec)*t(D.dec)*s(b.ra-D.ra));return{fraction:(1+s(P))/2,phase:.5+.5*P*(O<0?-1:1)/Math.PI,angle:O}};function pt(h,u){return new Date(h.valueOf()+u*c/24)}M.getMoonTimes=function(h,u,b,D){var S=new Date(h);D?S.setUTCHours(0,0,0,0):S.setHours(0,0,0,0);for(var $=.133*m,P=M.getMoonPosition(S,u,b).altitude-$,O,R,B,G,Q,st,X,U,it,W,Z,tt,rt,Y=1;Y<=24&&(O=M.getMoonPosition(pt(S,Y),u,b).altitude-$,R=M.getMoonPosition(pt(S,Y+1),u,b).altitude-$,Q=(P+R)/2-O,st=(R-P)/2,X=-st/(2*Q),U=(Q*X+st)*X+O,it=st*st-4*Q*O,W=0,it>=0&&(rt=Math.sqrt(it)/(Math.abs(Q)*2),Z=X-rt,tt=X+rt,Math.abs(Z)<=1&&W++,Math.abs(tt)<=1&&W++,Z<-1&&(Z=tt)),W===1?P<0?B=Y+Z:G=Y+Z:W===2&&(B=Y+(U<0?tt:Z),G=Y+(U<0?Z:tt)),!(B&&G));Y+=2)P=R;var ht={};return B&&(ht.rise=pt(S,B)),G&&(ht.set=pt(S,G)),!B&&!G&&(ht[U>0?"alwaysUp":"alwaysDown"]=!0),ht},d.exports=M})()})(Qt);const I=class{static update(d){I.play&&(I.time+=(d-I.lastUpdateDelta)*I.timeSpeedMultiplier),I.lastUpdateDelta=d}static localDate(){return new Date(I.time+36e5)}static setLocalTime(d){I.time=d-36e5}static addOneMinute(){I.time+=6e4}static removeOneMinute(){I.time-=6e4}static addTenMinutes(){I.time+=6e5}static removeTenMinutes(){I.time-=6e5}static addOneHour(){I.time+=36e5}static removeOneHour(){I.time-=36e5}static addOneDay(){I.time+=864e5}static removeOneDay(){I.time-=864e5}static addTenDays(){I.time+=864e6}static removeTenDays(){I.time-=864e6}static addOneMonth(){I.time+=2592e6}static removeOneMonth(){I.time-=2592e6}};let _=I;_.lastUpdateDelta=0;_.timeSpeedMultiplier=5e3;_.play=!1;_.time=new Date(2022,0,1,7).getTime();const $t=class{static getPosition(){return Qt.exports.getPosition(new Date(_.time),$t.lat,$t.long)}};let Ht=$t;Ht.lat=46.089064115568284;Ht.long=6.107614109077571;class Ie extends de{constructor(){super(16777215,1,1e4),this.decay=0,this.castShadow=!0}setNightMode(e){this.intensity=e?.1:1}}const Lt=class extends qt{constructor(){const d=new he(10,16,8),e=new Bt({color:Lt.dayColor});super(d,e)}setNightMode(d){this.material=new Bt({color:d?Lt.nightColor:Lt.dayColor})}};let Ft=Lt;Ft.nightColor=8947712;Ft.dayColor=16776960;class He extends Ot{constructor(){super(),this.isNight=!1,this.light=new Ie,this.add(this.light),this.sphere=new Ft,this.add(this.sphere),this.updatePosition()}updatePosition(){const e=Ht.getPosition();e.azimuth+=Math.PI/2,e.altitude+=Math.PI/2;const i=450,t=i*Math.sin(e.altitude),s=t*Math.cos(e.azimuth),o=t*Math.sin(e.azimuth),a=i*Math.cos(e.altitude);this.position.set(s,-a,o);const r=this.position.y<0;r!==this.isNight&&(this.sphere.setNightMode(r),this.light.setNightMode(r),this.isNight=r)}}class Fe{constructor(){this.stoppedByFocus=!1;const e=document.createElement("div");Object.assign(e.style,{position:"absolute",top:"10px",width:"100%",textAlign:"center",zIndex:"100",display:"block",color:"#00e6e6"}),this.dateInput=document.createElement("input"),this.dateInput.type="datetime-local",Object.assign(this.dateInput.style,{width:"200px",height:"30px",fontSize:"16px",textAlign:"center",color:"#00e6e6",backgroundColor:"#8e8e8e",border:"none",borderRadius:"3px",borderBottom:"1px solid #00e6e6",padding:"0 5px"}),this.updateDateInputValue(),this.dateInput.addEventListener("change",this.dateChanged.bind(this)),this.dateInput.addEventListener("focusin",()=>{this.stoppedByFocus=_.play,_.play=!1}),this.dateInput.addEventListener("focusout",()=>{_.play=this.stoppedByFocus,this.stoppedByFocus=!1}),e.appendChild(this.dateInput),document.body.appendChild(e),this.update()}dateChanged(){this.stoppedByFocus=!1,_.play=!1,_.setLocalTime(this.dateInput.valueAsNumber)}updateDateInputValue(){this.dateInput.value=_.localDate().toISOString().slice(0,-3)}update(){this.dateInput.matches(":focus")||this.updateDateInputValue()}}const wt=class extends Ot{constructor(){super(),[{position:new J(wt.distance,0,0),name:"E"},{position:new J(-wt.distance,0,0),name:"W"},{position:new J(0,0,-wt.distance),name:"N"},{position:new J(0,0,wt.distance),name:"S"}].forEach(i=>{this.add(new ce(i.position,i.position,100,i.name==="N"?16711935:65535,30,30))});const e=new ue(450);this.add(e)}};let te=wt;te.distance=500;class Ne{constructor(){this.initScene(),this.initStats(),this.initListeners()}initStats(){this.stats=new vt,document.body.appendChild(this.stats.dom)}initScene(){this.scene=new pe,this.camera=new me(75,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.setFromSphericalCoords(600,Math.PI/4,0),this.renderer=new fe,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ge,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(16777215,1),document.body.appendChild(this.renderer.domElement),this.controls=new ke(this.camera,this.renderer.domElement);const e=new be(11184810);this.scene.add(e),this.sun=new He,this.scene.add(this.sun),this.constructions=new dt,this.scene.add(this.constructions),this.currentTime=new Fe,this.scene.add(new te),this.initGui(),this.animate(1)}initGui(){const e=new It,i=e.addFolder("Time");i.add(_,"play").listen(),i.add(_,"timeSpeedMultiplier",0,1e5),e.addFolder("Constructions").add(dt,"nbdetages",3,6,1).onChange(()=>{this.updateConstructions()}),i.add(_,"addOneMinute"),i.add(_,"removeOneMinute"),i.add(_,"addTenMinutes"),i.add(_,"removeTenMinutes"),i.add(_,"addOneHour"),i.add(_,"removeOneHour"),i.add(_,"addOneDay"),i.add(_,"removeOneDay"),i.add(_,"addTenDays"),i.add(_,"removeTenDays"),i.add(_,"addOneMonth"),i.add(_,"removeOneMonth")}initListeners(){window.addEventListener("resize",this.onWindowResize.bind(this),!1),window.addEventListener("keypress",e=>{const{key:i}=e;switch(i){case"e":this.takeScreenShot(),e.preventDefault(),e.stopPropagation();break;case" ":_.play=!_.play,e.preventDefault(),e.stopPropagation();break;case"ArrowDown":dt.nbdetages-=1,e.preventDefault(),e.stopPropagation();break;case"ArrowUp":dt.nbdetages+=1,e.preventDefault(),e.stopPropagation();break;case"ArrowRight":_.addOneMinute(),e.preventDefault(),e.stopPropagation();break;case"ArrowLeft":_.removeOneMinute(),e.preventDefault(),e.stopPropagation();break;case"h":e.shiftKey?_.removeOneHour():_.addOneHour(),e.preventDefault(),e.stopPropagation();break;case"d":e.shiftKey?_.removeOneDay():_.addOneDay(),e.preventDefault(),e.stopPropagation();break;case"m":e.shiftKey?_.removeOneMonth():_.addOneMonth(),e.preventDefault(),e.stopPropagation();break}})}takeScreenShot(){const{domElement:e}=this.renderer;this.renderer.render(this.scene,this.camera);const i=e.toDataURL();this.download(i,`${new Date(_.time).toISOString()}-${dt.nbdetages}etages.png`)}download(e,i){const t=document.createElement("a");t.href=e,t.download=i,t.click()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(e){requestAnimationFrame(i=>{this.animate(i)}),_.update(e),this.update(),this.renderer.render(this.scene,this.camera)}updateConstructions(){this.constructions.update()}update(){var e,i;(e=this.stats)==null||e.update(),(i=this.controls)==null||i.update(),this.currentTime.update(),this.sun.updatePosition()}}window.addEventListener("DOMContentLoaded",()=>{new Ne});
