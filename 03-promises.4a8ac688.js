document.querySelector(".form").addEventListener("submit",(function(e){var n=function(e,n){setTimeout((function(){var t,o;(t=e,o=n,new Promise((function(e,n){Math.random()>.3?e({position:t,delay:o}):n({position:t,delay:o})}))).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}),n)};e.preventDefault();var t=e.currentTarget.elements,o=t.delay,a=t.step,r=t.amount,c=Number(o.value),i=Number(a.value),u=Number(r.value);e.currentTarget.reset();for(var l=1,s=c;l<=u;l+=1,s+=i)n(l,s)}));
//# sourceMappingURL=03-promises.4a8ac688.js.map
