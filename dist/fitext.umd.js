var t,e;t=this,e=function(){return function(t){[].concat(document.getElementsByClassName("fit-this-text")).forEach((function(e){RegExp("fitter").test(e.firstElementChild.className)||(e.innerHTML="<div class='fitter'>"+e.innerHTML+"</div>");var n=e.firstElementChild;n.style.display="inline-block",function(){var o=[].concat(e.getElementsByTagName("*"));function i(){var t=parseFloat(getComputedStyle(e).paddingTop),o=parseFloat(getComputedStyle(e).paddingBottom);return n.offsetHeight>e.offsetHeight-(t+o)}function f(t,e){return t.style.fontSize=parseFloat(getComputedStyle(t).fontSize)+e+"px"}o.forEach((function(t){t.dataset.size||(t.dataset.size=getComputedStyle(t).fontSize)})),function e(){if(i())for(;i();)o.forEach((function(t){return f(t,-.5)}));else if(t)for(;!i();)o.forEach((function(t){return f(t,.5)}));else o.forEach((function(t){return parseFloat(t.style.fontSize)+.5<t.dataset.size?f(t,.5):t.style.removeProperty("font-size")}));i()&&e()}()}(),n.style.removeProperty("display")}))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).fitext=e();
