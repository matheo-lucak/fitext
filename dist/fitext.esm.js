export default function(t){Array.from(document.getElementsByClassName("fit-this-text")).forEach(e=>{RegExp("fitter").test(e.firstElementChild.className)||(e.innerHTML=`<div class='fitter'>${e.innerHTML}</div>`);var r=e.firstElementChild;r.style.display="inline-block",function(){var o=Array.from(e.getElementsByTagName("*")),a=()=>{var t=parseFloat(getComputedStyle(e).paddingTop),o=parseFloat(getComputedStyle(e).paddingBottom);return r.offsetHeight>e.offsetHeight-(t+o)};function i(t,e){return t.style.fontSize=parseFloat(getComputedStyle(t).fontSize)+e+"px"}o.forEach(t=>{t.dataset.size||(t.dataset.size=getComputedStyle(t).fontSize)}),function(){for(;a();)o.forEach(t=>i(t,-.5));for(;!a();)o.forEach(e=>t||parseFloat(e.style.fontSize)+.5<e.dataset.size?i(e,.5):e.style.fontSize=e.dataset.size)}()}(),r.style.removeProperty("display")})}
