module.exports=function(t){[...document.getElementsByClassName("fit-this-text")].forEach(e=>{RegExp("fitter").test(e.firstElementChild.className)||(e.innerHTML=`<div class='fitter'>${e.innerHTML}</div>`);var o=e.firstElementChild;o.style.display="inline-block",function(){var i=[...e.getElementsByTagName("*")];function n(){var t=parseFloat(getComputedStyle(e).paddingTop),i=parseFloat(getComputedStyle(e).paddingBottom);return o.offsetHeight>e.offsetHeight-(t+i)}function l(t,e){return t.style.fontSize=parseFloat(getComputedStyle(t).fontSize)+e+"px"}i.forEach(t=>{t.dataset.size||(t.dataset.size=getComputedStyle(t).fontSize)}),function e(){if(n())for(;n();)i.forEach(t=>l(t,-.5));else if(t)for(;!n();)i.forEach(t=>l(t,.5));else i.forEach(t=>parseFloat(t.style.fontSize)+.5<t.dataset.size?l(t,.5):t.style.removeProperty("font-size"));n()&&e()}()}(),o.style.removeProperty("display")})};
