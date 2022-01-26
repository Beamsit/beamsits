"use strict";!function(t){function e(){var e=this;e.reads=[],e.writes=[],e.raf=a.bind(t),o("initialized",e)}function n(t){t.scheduled||(t.scheduled=!0,t.raf(i.bind(null,t)),o("flush scheduled"))}function i(t){o("flush");var e=t.writes,i=t.reads,r;try{o("flushing reads",i.length),t.runTasks(i),o("flushing writes",e.length),t.runTasks(e)}catch(t){r=t}if(t.scheduled=!1,(i.length||e.length)&&n(t),r){if(o("task errored",r.message),!t.catch)throw r;t.catch(r)}}function r(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}var o=function(){},a=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)};e.prototype={constructor:e,runTasks:function t(e){var n;for(o("run tasks");n=e.shift();)n()},measure:function t(e,i){o("measure");var r=i?e.bind(i):e;return this.reads.push(r),n(this),r},mutate:function t(e,i){o("mutate");var r=i?e.bind(i):e;return this.writes.push(r),n(this),r},clear:function t(e){return o("clear",e),r(this.reads,e)||r(this.writes,e)},extend:function t(e){if(o("extend",e),"object"!=typeof e)throw new Error("expected object");var n=Object.create(this);return s(n,e),n.fastdom=this,n.initialize&&n.initialize(),n},catch:null};var u=t.fastdom=t.fastdom||new e;"function"==typeof define?define((function(){return u})):"object"==typeof module&&(module.exports=u)}("undefined"!=typeof window?window:void 0),function(){function t(t,e,n,i){var r=t._tasks,s=t.fastdom,o,a=new Promise((function(t,u){o=s[e]((function(){r.delete(a);try{t(i?n.call(i):n())}catch(t){u(t)}}),i)}));return r.set(a,o),a}var e={initialize:function t(){this._tasks=new Map},mutate:function e(n,i){return t(this,"mutate",n,i)},measure:function e(n,i){return t(this,"measure",n,i)},clear:function t(e){var n=this._tasks,i=n.get(e);this.fastdom.clear(i),n.delete(e)}};"f"==(typeof define)[0]?define((function(){return e})):"o"==(typeof module)[0]?module.exports=e:window.fastdomPromised=e}(),window.fastdomPromised=fastdom.extend(fastdomPromised);
;