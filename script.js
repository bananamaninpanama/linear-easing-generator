/*
    THE ORIGINAL SOURCE IS FROM:
    https://github.com/jakearchibald/linear-easing-generator
*/
const SVGPATHS = {
  COPY: "M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z",
  ARROW: "M8.57.33 4.54 2.96a.42.42 0 0 1-.43 0L.08.33a.15.15 0 0 1 0-.27.43.43 0 0 1 .43 0l3.82 2.48L8.14.05a.43.43 0 0 1 .42 0 .15.15 0 0 1 0 .28Z",
  ODD: "M1 10H196L190 5M190 15L196 10M197 4L197 16", /* I genuinely have no idea what this could have possibly been */
  PAUSE: "M525 856V296h235v560H525Zm-325 0V296h235v560H200Zm385-60h115V356H585v440Zm-325 0h115V356H260v440Zm0-440v440-440Zm325 0v440-440Z",
  PLAY: "M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z",
  GITHUB: "M48.85 0C21.84 0 0 22 0 49.22 0 70.97 14 89.39 33.4 95.9c2.43.49 3.32-1.06 3.32-2.37 0-1.14-.08-5.05-.08-9.12-13.59 2.93-16.42-5.87-16.42-5.87-2.18-5.7-5.42-7.17-5.42-7.17-4.45-3.01.33-3.01.33-3.01 4.93.32 7.52 5.05 7.52 5.05 4.37 7.5 11.4 5.38 14.23 4.07.4-3.18 1.7-5.38 3.08-6.6-10.84-1.14-22.25-5.38-22.25-24.28 0-5.38 1.94-9.78 5.02-13.2-.49-1.22-2.19-6.28.48-13.04 0 0 4.13-1.3 13.43 5.05a46.97 46.97 0 0 1 12.21-1.63 47 47 0 0 1 12.22 1.63c9.3-6.35 13.42-5.05 13.42-5.05 2.67 6.76.97 11.82.49 13.04a18.9 18.9 0 0 1 5.01 13.2c0 18.9-11.4 23.06-22.32 24.28 1.78 1.55 3.32 4.48 3.32 9.13 0 6.6-.08 11.9-.08 13.52 0 1.3.89 2.86 3.31 2.37a49.18 49.18 0 0 0 33.4-46.7C97.72 22 75.8 0 48.86 0z"
},
PROCESS_SCRIPT = `<script>
    self.nextDefineUri = /*location.origin +*/ "./frame.js";
const minified_PROCESS_SCRIPTJS = \`const t=/^\\\\s*at .*(\\\\S+:\\\\d+|\\\\(native\\\\))/m,n=/^(eval@)?(\\\\[native code])?$/;function e(e){if(e.stack&&e.stack.match(t))return function(n){let e=n.stack.split("\\\\n").find((n=>n.match(t)));e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\\\\(eval at [^()]*)|(,.*$)/g,""));let r=e.replace(/^\\\\s+/,"").replace(/\\\\(eval code/g,"(").replace(/^.*?\\\\s+/,"");const h=r.match(/ (\\\\(.+\\\\)$)/);r=h?r.replace(h[0],""):r;const s=i(h?h[1]:r),a=h&&r||void 0;return{fileName:s[0],functionName:a,lineNumber:Number(s[1]),columnNumber:Number(s[2])}}(e);if(e.stack)return function(t){let e=t.stack.split("\\\\n").find((t=>!t.match(n)));e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\\\\d+)(?: > eval line \\\\d+)* > eval:\\\\d+:\\\\d+/g,":$1"));if(-1===e.indexOf("@")&&-1===e.indexOf(":"))return{functionName:e};{const t=/((.*".+"[^@]*)?[^@]*)(?:@)/,n=e.match(t),r=n&&n[1]?n[1]:void 0,h=i(e.replace(t,""));return{fileName:h[0],functionName:r,lineNumber:Number(h[1]),columnNumber:Number(h[2])}}}(e);throw new Error("Cannot parse given Error object")}function i(t){if(-1===t.indexOf(":"))return[t];const n=/(.+?)(?::(\\\\d+))?(?::(\\\\d+))?$/.exec(t.replace(/[()]/g,""));return[n[1],n[2]||void 0,n[3]||void 0]}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function h(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var a={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},o=/([astvzqmhlc])([^astvzqmhlc]*)/gi,g=/-?[0-9]*\\\\.?[0-9]+(?:e[-+]?\\\\d+)?/gi,c=function(t){var n=t.match(g);return n?n.map(Number):[]},u=function(t,n,e,i){var h=this;r(this,"x0",void 0),r(this,"x1",void 0),r(this,"y0",void 0),r(this,"y1",void 0),r(this,"getTotalLength",(function(){return Math.sqrt(Math.pow(h.x0-h.x1,2)+Math.pow(h.y0-h.y1,2))})),r(this,"getPointAtLength",(function(t){var n=t/Math.sqrt(Math.pow(h.x0-h.x1,2)+Math.pow(h.y0-h.y1,2));n=Number.isNaN(n)?1:n;var e=(h.x1-h.x0)*n,i=(h.y1-h.y0)*n;return{x:h.x0+e,y:h.y0+i}})),r(this,"getTangentAtLength",(function(t){var n=Math.sqrt((h.x1-h.x0)*(h.x1-h.x0)+(h.y1-h.y0)*(h.y1-h.y0));return{x:-(h.x1-h.x0)/n,y:-(h.y1-h.y0)/n}})),r(this,"getPropertiesAtLength",(function(t){var n=h.getPointAtLength(t),e=h.getTangentAtLength(t);return{x:n.x,y:n.y,tangentX:e.x,tangentY:e.y}})),this.x0=t,this.x1=n,this.y0=e,this.y1=i},l=function(t,n,e,i,h,s,a,o,g){var c=this;r(this,"x0",void 0),r(this,"y0",void 0),r(this,"rx",void 0),r(this,"ry",void 0),r(this,"xAxisRotate",void 0),r(this,"LargeArcFlag",void 0),r(this,"SweepFlag",void 0),r(this,"x1",void 0),r(this,"y1",void 0),r(this,"length",void 0),r(this,"getTotalLength",(function(){return c.length})),r(this,"getPointAtLength",(function(t){t<0?t=0:t>c.length&&(t=c.length);var n=f({x:c.x0,y:c.y0},c.rx,c.ry,c.xAxisRotate,c.LargeArcFlag,c.SweepFlag,{x:c.x1,y:c.y1},t/c.length);return{x:n.x,y:n.y}})),r(this,"getTangentAtLength",(function(t){t<0?t=0:t>c.length&&(t=c.length);var n,e=.05,i=c.getPointAtLength(t);t<0?t=0:t>c.length&&(t=c.length);var r=(n=t<c.length-e?c.getPointAtLength(t+e):c.getPointAtLength(t-e)).x-i.x,h=n.y-i.y,s=Math.sqrt(r*r+h*h);return t<c.length-e?{x:-r/s,y:-h/s}:{x:r/s,y:h/s}})),r(this,"getPropertiesAtLength",(function(t){var n=c.getTangentAtLength(t),e=c.getPointAtLength(t);return{x:e.x,y:e.y,tangentX:n.x,tangentY:n.y}})),this.x0=t,this.y0=n,this.rx=e,this.ry=i,this.xAxisRotate=h,this.LargeArcFlag=s,this.SweepFlag=a,this.x1=o,this.y1=g;var u=p(300,(function(r){return f({x:t,y:n},e,i,h,s,a,{x:o,y:g},r)}));this.length=u.arcLength},f=function(t,n,e,i,r,h,s,a){n=Math.abs(n),e=Math.abs(e),i=y(i,360);var o=x(i);if(t.x===s.x&&t.y===s.y)return{x:t.x,y:t.y,ellipticalArcAngle:0};if(0===n||0===e)return{x:0,y:0,ellipticalArcAngle:0};var g=(t.x-s.x)/2,c=(t.y-s.y)/2,u={x:Math.cos(o)*g+Math.sin(o)*c,y:-Math.sin(o)*g+Math.cos(o)*c},l=Math.pow(u.x,2)/Math.pow(n,2)+Math.pow(u.y,2)/Math.pow(e,2);l>1&&(n=Math.sqrt(l)*n,e=Math.sqrt(l)*e);var f=(Math.pow(n,2)*Math.pow(e,2)-Math.pow(n,2)*Math.pow(u.y,2)-Math.pow(e,2)*Math.pow(u.x,2))/(Math.pow(n,2)*Math.pow(u.y,2)+Math.pow(e,2)*Math.pow(u.x,2));f=f<0?0:f;var p=(r!==h?1:-1)*Math.sqrt(f),v=p*(n*u.y/e),d=p*(-e*u.x/n),w={x:Math.cos(o)*v-Math.sin(o)*d+(t.x+s.x)/2,y:Math.sin(o)*v+Math.cos(o)*d+(t.y+s.y)/2},L={x:(u.x-v)/n,y:(u.y-d)/e},A=M({x:1,y:0},L),m=M(L,{x:(-u.x-v)/n,y:(-u.y-d)/e});!h&&m>0?m-=2*Math.PI:h&&m<0&&(m+=2*Math.PI);var b=A+(m%=2*Math.PI)*a,P=n*Math.cos(b),T=e*Math.sin(b);return{x:Math.cos(o)*P-Math.sin(o)*T+w.x,y:Math.sin(o)*P+Math.cos(o)*T+w.y,ellipticalArcStartAngle:A,ellipticalArcEndAngle:A+m,ellipticalArcAngle:b,ellipticalArcCenter:w,resultantRx:n,resultantRy:e}},p=function(t,n){t=t||500;for(var e,i=0,r=[],h=[],s=n(0),a=0;a<t;a++){var o=d(a*(1/t),0,1);e=n(o),i+=v(s,e),h.push([s,e]),r.push({t:o,arcLength:i}),s=e}return e=n(1),h.push([s,e]),i+=v(s,e),r.push({t:1,arcLength:i}),{arcLength:i,arcLengthMap:r,approximationLines:h}},y=function(t,n){return(t%n+n)%n},x=function(t){return t*(Math.PI/180)},v=function(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))},d=function(t,n,e){return Math.min(Math.max(t,n),e)},M=function(t,n){var e=t.x*n.x+t.y*n.y,i=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(n.x,2)+Math.pow(n.y,2)));return(t.x*n.y-t.y*n.x<0?-1:1)*Math.acos(e/i)},w=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],L=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],A=[[1],[1,1],[1,2,1],[1,3,3,1]],m=function(t,n,e){return{x:(1-e)*(1-e)*(1-e)*t[0]+3*(1-e)*(1-e)*e*t[1]+3*(1-e)*e*e*t[2]+e*e*e*t[3],y:(1-e)*(1-e)*(1-e)*n[0]+3*(1-e)*(1-e)*e*n[1]+3*(1-e)*e*e*n[2]+e*e*e*n[3]}},b=function(t,n,e){return T([3*(t[1]-t[0]),3*(t[2]-t[1]),3*(t[3]-t[2])],[3*(n[1]-n[0]),3*(n[2]-n[1]),3*(n[3]-n[2])],e)},P=function(t,n,e){var i,r,h;i=e/2,r=0;for(var s=0;s<20;s++)h=i*w[20][s]+i,r+=L[20][s]*_(t,n,h);return i*r},T=function(t,n,e){return{x:(1-e)*(1-e)*t[0]+2*(1-e)*e*t[1]+e*e*t[2],y:(1-e)*(1-e)*n[0]+2*(1-e)*e*n[1]+e*e*n[2]}},q=function(t,n,e){void 0===e&&(e=1);var i=t[0]-2*t[1]+t[2],r=n[0]-2*n[1]+n[2],h=2*t[1]-2*t[0],s=2*n[1]-2*n[0],a=4*(i*i+r*r),o=4*(i*h+r*s),g=h*h+s*s;if(0===a)return e*Math.sqrt(Math.pow(t[2]-t[0],2)+Math.pow(n[2]-n[0],2));var c=o/(2*a),u=e+c,l=g/a-c*c,f=u*u+l>0?Math.sqrt(u*u+l):0,p=c*c+l>0?Math.sqrt(c*c+l):0,y=c+Math.sqrt(c*c+l)!==0?l*Math.log(Math.abs((u+f)/(c+p))):0;return Math.sqrt(a)/2*(u*f-c*p+y)},N=function(t,n,e){return{x:2*(1-e)*(t[1]-t[0])+2*e*(t[2]-t[1]),y:2*(1-e)*(n[1]-n[0])+2*e*(n[2]-n[1])}};function _(t,n,e){var i=O(1,e,t),r=O(1,e,n),h=i*i+r*r;return Math.sqrt(h)}var O=function t(n,e,i){var r,h,s=i.length-1;if(0===s)return 0;if(0===n){h=0;for(var a=0;a<=s;a++)h+=A[s][a]*Math.pow(1-e,s-a)*Math.pow(e,a)*i[a];return h}r=new Array(s);for(var o=0;o<s;o++)r[o]=s*(i[o+1]-i[o]);return t(n-1,e,r)},S=function(t,n,e){for(var i=1,r=t/n,h=(t-e(r))/n,s=0;i>.001;){var a=e(r+h),o=Math.abs(t-a)/n;if(o<i)i=o,r+=h;else{var g=e(r-h),c=Math.abs(t-g)/n;c<i?(i=c,r-=h):h/=2}if(++s>500)break}return r},C=function(t,n,e,i,h,s,a,o){var g=this;r(this,"a",void 0),r(this,"b",void 0),r(this,"c",void 0),r(this,"d",void 0),r(this,"length",void 0),r(this,"getArcLength",void 0),r(this,"getPoint",void 0),r(this,"getDerivative",void 0),r(this,"getTotalLength",(function(){return g.length})),r(this,"getPointAtLength",(function(t){var n=[g.a.x,g.b.x,g.c.x,g.d.x],e=[g.a.y,g.b.y,g.c.y,g.d.y],i=S(t,g.length,(function(t){return g.getArcLength(n,e,t)}));return g.getPoint(n,e,i)})),r(this,"getTangentAtLength",(function(t){var n=[g.a.x,g.b.x,g.c.x,g.d.x],e=[g.a.y,g.b.y,g.c.y,g.d.y],i=S(t,g.length,(function(t){return g.getArcLength(n,e,t)})),r=g.getDerivative(n,e,i),h=Math.sqrt(r.x*r.x+r.y*r.y);return h>0?{x:r.x/h,y:r.y/h}:{x:0,y:0}})),r(this,"getPropertiesAtLength",(function(t){var n,e=[g.a.x,g.b.x,g.c.x,g.d.x],i=[g.a.y,g.b.y,g.c.y,g.d.y],r=S(t,g.length,(function(t){return g.getArcLength(e,i,t)})),h=g.getDerivative(e,i,r),s=Math.sqrt(h.x*h.x+h.y*h.y);n=s>0?{x:h.x/s,y:h.y/s}:{x:0,y:0};var a=g.getPoint(e,i,r);return{x:a.x,y:a.y,tangentX:n.x,tangentY:n.y}})),r(this,"getC",(function(){return g.c})),r(this,"getD",(function(){return g.d})),this.a={x:t,y:n},this.b={x:e,y:i},this.c={x:h,y:s},void 0!==a&&void 0!==o?(this.getArcLength=P,this.getPoint=m,this.getDerivative=b,this.d={x:a,y:o}):(this.getArcLength=q,this.getPoint=T,this.getDerivative=N,this.d={x:0,y:0}),this.length=this.getArcLength([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],1)},E=function(t){var n=this;r(this,"length",0),r(this,"partial_lengths",[]),r(this,"functions",[]),r(this,"initial_point",null),r(this,"getPartAtLength",(function(t){t<0?t=0:t>n.length&&(t=n.length);for(var e=n.partial_lengths.length-1;n.partial_lengths[e]>=t&&e>0;)e--;return e++,{fraction:t-n.partial_lengths[e-1],i:e}})),r(this,"getTotalLength",(function(){return n.length})),r(this,"getPointAtLength",(function(t){var e=n.getPartAtLength(t),i=n.functions[e.i];if(i)return i.getPointAtLength(e.fraction);if(n.initial_point)return n.initial_point;throw new Error("Wrong function at this part.")})),r(this,"getTangentAtLength",(function(t){var e=n.getPartAtLength(t),i=n.functions[e.i];if(i)return i.getTangentAtLength(e.fraction);if(n.initial_point)return{x:0,y:0};throw new Error("Wrong function at this part.")})),r(this,"getPropertiesAtLength",(function(t){var e=n.getPartAtLength(t),i=n.functions[e.i];if(i)return i.getPropertiesAtLength(e.fraction);if(n.initial_point)return{x:n.initial_point.x,y:n.initial_point.y,tangentX:0,tangentY:0};throw new Error("Wrong function at this part.")})),r(this,"getParts",(function(){for(var t=[],e=0;e<n.functions.length;e++)if(null!==n.functions[e]){n.functions[e]=n.functions[e];var i={start:n.functions[e].getPointAtLength(0),end:n.functions[e].getPointAtLength(n.partial_lengths[e]-n.partial_lengths[e-1]),length:n.partial_lengths[e]-n.partial_lengths[e-1],getPointAtLength:n.functions[e].getPointAtLength,getTangentAtLength:n.functions[e].getTangentAtLength,getPropertiesAtLength:n.functions[e].getPropertiesAtLength};t.push(i)}return t}));for(var e,i=Array.isArray(t)?t:function(t){var n=(t&&t.length>0?t:"M0,0").match(o);if(!n)throw new Error("No path elements found in string ".concat(t));return n.reduce((function(t,n){var e=n.charAt(0),i=e.toLowerCase(),r=c(n.substr(1));for("m"===i&&r.length>2&&(t.push([e].concat(h(r.splice(0,2)))),i="l",e="m"===e?"l":"L");r.length>=0;){if(r.length===a[i]){t.push([e].concat(h(r.splice(0,a[i]))));break}if(r.length<a[i])throw new Error('Malformed path data: "'.concat(e,'" must have ').concat(a[i]," elements and has ").concat(r.length,": ").concat(n));t.push([e].concat(h(r.splice(0,a[i]))))}return t}),[])}(t),s=[0,0],g=[0,0],f=[0,0],p=0;p<i.length;p++){if("M"===i[p][0])f=[(s=[i[p][1],i[p][2]])[0],s[1]],this.functions.push(null),0===p&&(this.initial_point={x:i[p][1],y:i[p][2]});else if("m"===i[p][0])f=[(s=[i[p][1]+s[0],i[p][2]+s[1]])[0],s[1]],this.functions.push(null);else if("L"===i[p][0])this.length+=Math.sqrt(Math.pow(s[0]-i[p][1],2)+Math.pow(s[1]-i[p][2],2)),this.functions.push(new u(s[0],i[p][1],s[1],i[p][2])),s=[i[p][1],i[p][2]];else if("l"===i[p][0])this.length+=Math.sqrt(Math.pow(i[p][1],2)+Math.pow(i[p][2],2)),this.functions.push(new u(s[0],i[p][1]+s[0],s[1],i[p][2]+s[1])),s=[i[p][1]+s[0],i[p][2]+s[1]];else if("H"===i[p][0])this.length+=Math.abs(s[0]-i[p][1]),this.functions.push(new u(s[0],i[p][1],s[1],s[1])),s[0]=i[p][1];else if("h"===i[p][0])this.length+=Math.abs(i[p][1]),this.functions.push(new u(s[0],s[0]+i[p][1],s[1],s[1])),s[0]=i[p][1]+s[0];else if("V"===i[p][0])this.length+=Math.abs(s[1]-i[p][1]),this.functions.push(new u(s[0],s[0],s[1],i[p][1])),s[1]=i[p][1];else if("v"===i[p][0])this.length+=Math.abs(i[p][1]),this.functions.push(new u(s[0],s[0],s[1],s[1]+i[p][1])),s[1]=i[p][1]+s[1];else if("z"===i[p][0]||"Z"===i[p][0])this.length+=Math.sqrt(Math.pow(f[0]-s[0],2)+Math.pow(f[1]-s[1],2)),this.functions.push(new u(s[0],f[0],s[1],f[1])),s=[f[0],f[1]];else if("C"===i[p][0])e=new C(s[0],s[1],i[p][1],i[p][2],i[p][3],i[p][4],i[p][5],i[p][6]),this.length+=e.getTotalLength(),s=[i[p][5],i[p][6]],this.functions.push(e);else if("c"===i[p][0])(e=new C(s[0],s[1],s[0]+i[p][1],s[1]+i[p][2],s[0]+i[p][3],s[1]+i[p][4],s[0]+i[p][5],s[1]+i[p][6])).getTotalLength()>0?(this.length+=e.getTotalLength(),this.functions.push(e),s=[i[p][5]+s[0],i[p][6]+s[1]]):this.functions.push(new u(s[0],s[0],s[1],s[1]));else if("S"===i[p][0]){if(p>0&&["C","c","S","s"].indexOf(i[p-1][0])>-1){if(e){var y=e.getC();e=new C(s[0],s[1],2*s[0]-y.x,2*s[1]-y.y,i[p][1],i[p][2],i[p][3],i[p][4])}}else e=new C(s[0],s[1],s[0],s[1],i[p][1],i[p][2],i[p][3],i[p][4]);e&&(this.length+=e.getTotalLength(),s=[i[p][3],i[p][4]],this.functions.push(e))}else if("s"===i[p][0]){if(p>0&&["C","c","S","s"].indexOf(i[p-1][0])>-1){if(e){var x=e.getC(),v=e.getD();e=new C(s[0],s[1],s[0]+v.x-x.x,s[1]+v.y-x.y,s[0]+i[p][1],s[1]+i[p][2],s[0]+i[p][3],s[1]+i[p][4])}}else e=new C(s[0],s[1],s[0],s[1],s[0]+i[p][1],s[1]+i[p][2],s[0]+i[p][3],s[1]+i[p][4]);e&&(this.length+=e.getTotalLength(),s=[i[p][3]+s[0],i[p][4]+s[1]],this.functions.push(e))}else if("Q"===i[p][0]){if(s[0]==i[p][1]&&s[1]==i[p][2]){var d=new u(i[p][1],i[p][3],i[p][2],i[p][4]);this.length+=d.getTotalLength(),this.functions.push(d)}else e=new C(s[0],s[1],i[p][1],i[p][2],i[p][3],i[p][4],void 0,void 0),this.length+=e.getTotalLength(),this.functions.push(e);s=[i[p][3],i[p][4]],g=[i[p][1],i[p][2]]}else if("q"===i[p][0]){if(0!=i[p][1]||0!=i[p][2])e=new C(s[0],s[1],s[0]+i[p][1],s[1]+i[p][2],s[0]+i[p][3],s[1]+i[p][4],void 0,void 0),this.length+=e.getTotalLength(),this.functions.push(e);else{var M=new u(s[0]+i[p][1],s[0]+i[p][3],s[1]+i[p][2],s[1]+i[p][4]);this.length+=M.getTotalLength(),this.functions.push(M)}g=[s[0]+i[p][1],s[1]+i[p][2]],s=[i[p][3]+s[0],i[p][4]+s[1]]}else if("T"===i[p][0]){if(p>0&&["Q","q","T","t"].indexOf(i[p-1][0])>-1)e=new C(s[0],s[1],2*s[0]-g[0],2*s[1]-g[1],i[p][1],i[p][2],void 0,void 0),this.functions.push(e),this.length+=e.getTotalLength();else{var w=new u(s[0],i[p][1],s[1],i[p][2]);this.functions.push(w),this.length+=w.getTotalLength()}g=[2*s[0]-g[0],2*s[1]-g[1]],s=[i[p][1],i[p][2]]}else if("t"===i[p][0]){if(p>0&&["Q","q","T","t"].indexOf(i[p-1][0])>-1)e=new C(s[0],s[1],2*s[0]-g[0],2*s[1]-g[1],s[0]+i[p][1],s[1]+i[p][2],void 0,void 0),this.length+=e.getTotalLength(),this.functions.push(e);else{var L=new u(s[0],s[0]+i[p][1],s[1],s[1]+i[p][2]);this.length+=L.getTotalLength(),this.functions.push(L)}g=[2*s[0]-g[0],2*s[1]-g[1]],s=[i[p][1]+s[0],i[p][2]+s[1]]}else if("A"===i[p][0]){var A=new l(s[0],s[1],i[p][1],i[p][2],i[p][3],1===i[p][4],1===i[p][5],i[p][6],i[p][7]);this.length+=A.getTotalLength(),s=[i[p][6],i[p][7]],this.functions.push(A)}else if("a"===i[p][0]){var m=new l(s[0],s[1],i[p][1],i[p][2],i[p][3],1===i[p][4],1===i[p][5],s[0]+i[p][6],s[1]+i[p][7]);this.length+=m.getTotalLength(),s=[s[0]+i[p][6],s[1]+i[p][7]],this.functions.push(m)}this.partial_lengths.push(this.length)}},j=function(t){var n=this;if(r(this,"inst",void 0),r(this,"getTotalLength",(function(){return n.inst.getTotalLength()})),r(this,"getPointAtLength",(function(t){return n.inst.getPointAtLength(t)})),r(this,"getTangentAtLength",(function(t){return n.inst.getTangentAtLength(t)})),r(this,"getPropertiesAtLength",(function(t){return n.inst.getPropertiesAtLength(t)})),r(this,"getParts",(function(){return n.inst.getParts()})),this.inst=new E(t),!(this instanceof j))return new j(t)};const k=1e4;let I=!1;onmessage=({data:t})=>{if("null"===origin&&"object"==typeof t&&null!==t&&(function(t){return"process-script"===t.action}(t)||function(t){return"process-svg"===t.action}(t))){const{port:n,script:i}=t;if(I){const t={message:"Worker already used"};return void n.postMessage({error:t})}I=!0;try{const e="process-svg"===t.action?function(t){const n=new j(t),e=n.getTotalLength();if(0===e)throw new TypeError("Path is zero length");let i=-1/0;const r=Array.from({length:k},((t,r)=>{const h=r/(k-1)*e,s=n.getPointAtLength(h);return i=Math.max(i,s.x),[i,s.y]}));return{name:"custom",points:r,duration:0}}(i):function(t){const n=Object.keys(self);let e;importScripts(\\\`data:text/javascript,\\\${encodeURIComponent(\\\`(() => {\\\${t};})()\\\`)}\\\`);const i=new Set(Object.keys(self));for(const t of n)i.delete(t);for(const t of i)"function"!=typeof self[t]&&i.delete(t);if(i.size>1)throw Error("Too many global functions. Found: "+[...i].join(", "));if(0===i.size)throw Error("No global function found.");const[r]=i;return e=self[r],{name:r.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase())),points:Array.from({length:k},((t,n)=>{const i=n/(k-1);return[i,Number(e(i))]})),duration:"duration"in self&&"number"==typeof self.duration&&self.duration||0}}(i);n.postMessage({result:e})}catch(t){const i={...e(t),message:t.message};throw n.postMessage({error:i}),t}}};\`,
TESTBASE64 = atob("Y29uc3QgdCA9IC9eXHMqYXQgLiooXFMrOlxkK3xcKG5hdGl2ZVwpKS9tLA0KICAgIG4gPSAvXihldmFsQCk/KFxbbmF0aXZlIGNvZGVdKT8kLzsNCg0KZnVuY3Rpb24gZShlKSB7DQogICAgaWYgKGUuc3RhY2sgJiYgZS5zdGFjay5tYXRjaCh0KSkgcmV0dXJuIGZ1bmN0aW9uKG4pIHsNCiAgICAgICAgbGV0IGUgPSBuLnN0YWNrLnNwbGl0KCJcbiIpLmZpbmQoKG4gPT4gbi5tYXRjaCh0KSkpOw0KICAgICAgICBlLmluZGV4T2YoIihldmFsICIpID4gLTEgJiYgKGUgPSBlLnJlcGxhY2UoL2V2YWwgY29kZS9nLCAiZXZhbCIpLnJlcGxhY2UoLyhcKGV2YWwgYXQgW14oKV0qKXwoLC4qJCkvZywgIiIpKTsNCiAgICAgICAgbGV0IHIgPSBlLnJlcGxhY2UoL15ccysvLCAiIikucmVwbGFjZSgvXChldmFsIGNvZGUvZywgIigiKS5yZXBsYWNlKC9eLio/XHMrLywgIiIpOw0KICAgICAgICBjb25zdCBoID0gci5tYXRjaCgvIChcKC4rXCkkKS8pOw0KICAgICAgICByID0gaCA/IHIucmVwbGFjZShoWzBdLCAiIikgOiByOw0KICAgICAgICBjb25zdCBzID0gaShoID8gaFsxXSA6IHIpLA0KICAgICAgICAgICAgYSA9IGggJiYgciB8fCB2b2lkIDA7DQogICAgICAgIHJldHVybiB7DQogICAgICAgICAgICBmaWxlTmFtZTogc1swXSwNCiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogYSwNCiAgICAgICAgICAgIGxpbmVOdW1iZXI6IE51bWJlcihzWzFdKSwNCiAgICAgICAgICAgIGNvbHVtbk51bWJlcjogTnVtYmVyKHNbMl0pDQogICAgICAgIH0NCiAgICB9KGUpOw0KICAgIGlmIChlLnN0YWNrKSByZXR1cm4gZnVuY3Rpb24odCkgew0KICAgICAgICBsZXQgZSA9IHQuc3RhY2suc3BsaXQoIlxuIikuZmluZCgodCA9PiAhdC5tYXRjaChuKSkpOw0KICAgICAgICBlLmluZGV4T2YoIiA+IGV2YWwiKSA+IC0xICYmIChlID0gZS5yZXBsYWNlKC8gbGluZSAoXGQrKSg/OiA+IGV2YWwgbGluZSBcZCspKiA+IGV2YWw6XGQrOlxkKy9nLCAiOiQxIikpOw0KICAgICAgICBpZiAoLTEgPT09IGUuaW5kZXhPZigiQCIpICYmIC0xID09PSBlLmluZGV4T2YoIjoiKSkgcmV0dXJuIHsNCiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogZQ0KICAgICAgICB9Ow0KICAgICAgICB7DQogICAgICAgICAgICBjb25zdCB0ID0gLygoLioiLisiW15AXSopP1teQF0qKSg/OkApLywNCiAgICAgICAgICAgICAgICBuID0gZS5tYXRjaCh0KSwNCiAgICAgICAgICAgICAgICByID0gbiAmJiBuWzFdID8gblsxXSA6IHZvaWQgMCwNCiAgICAgICAgICAgICAgICBoID0gaShlLnJlcGxhY2UodCwgIiIpKTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhbMF0sDQogICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiByLA0KICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IE51bWJlcihoWzFdKSwNCiAgICAgICAgICAgICAgICBjb2x1bW5OdW1iZXI6IE51bWJlcihoWzJdKQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfShlKTsNCiAgICB0aHJvdyBuZXcgRXJyb3IoIkNhbm5vdCBwYXJzZSBnaXZlbiBFcnJvciBvYmplY3QiKQ0KfQ0KDQpmdW5jdGlvbiBpKHQpIHsNCiAgICBpZiAoLTEgPT09IHQuaW5kZXhPZigiOiIpKSByZXR1cm4gW3RdOw0KICAgIGNvbnN0IG4gPSAvKC4rPykoPzo6KFxkKykpPyg/OjooXGQrKSk/JC8uZXhlYyh0LnJlcGxhY2UoL1soKV0vZywgIiIpKTsNCiAgICByZXR1cm4gW25bMV0sIG5bMl0gfHwgdm9pZCAwLCBuWzNdIHx8IHZvaWQgMF0NCn0NCg0KZnVuY3Rpb24gcih0LCBuLCBlKSB7DQogICAgcmV0dXJuIG4gaW4gdCA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBuLCB7DQogICAgICAgIHZhbHVlOiBlLA0KICAgICAgICBlbnVtZXJhYmxlOiAhMCwNCiAgICAgICAgY29uZmlndXJhYmxlOiAhMCwNCiAgICAgICAgd3JpdGFibGU6ICEwDQogICAgfSkgOiB0W25dID0gZSwgdA0KfQ0KDQpmdW5jdGlvbiBoKHQpIHsNCiAgICByZXR1cm4gZnVuY3Rpb24odCkgew0KICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkgcmV0dXJuIHModCkNCiAgICB9KHQpIHx8IGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgaWYgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkgcmV0dXJuIEFycmF5LmZyb20odCkNCiAgICB9KHQpIHx8IGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgaWYgKHQpIHsNCiAgICAgICAgICAgIGlmICgic3RyaW5nIiA9PSB0eXBlb2YgdCkgcmV0dXJuIHModCwgbik7DQogICAgICAgICAgICB2YXIgZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LCAtMSk7DQogICAgICAgICAgICByZXR1cm4gIk9iamVjdCIgPT09IGUgJiYgdC5jb25zdHJ1Y3RvciAmJiAoZSA9IHQuY29uc3RydWN0b3IubmFtZSksICJNYXAiID09PSBlIHx8ICJTZXQiID09PSBlID8gQXJyYXkuZnJvbSh0KSA6ICJBcmd1bWVudHMiID09PSBlIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGUpID8gcyh0LCBuKSA6IHZvaWQgMA0KICAgICAgICB9DQogICAgfSh0KSB8fCBmdW5jdGlvbigpIHsNCiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIikNCiAgICB9KCkNCn0NCg0KZnVuY3Rpb24gcyh0LCBuKSB7DQogICAgKG51bGwgPT0gbiB8fCBuID4gdC5sZW5ndGgpICYmIChuID0gdC5sZW5ndGgpOw0KICAgIGZvciAodmFyIGUgPSAwLCBpID0gbmV3IEFycmF5KG4pOyBlIDwgbjsgZSsrKSBpW2VdID0gdFtlXTsNCiAgICByZXR1cm4gaQ0KfQ0KdmFyIGEgPSB7DQogICAgICAgIGE6IDcsDQogICAgICAgIGM6IDYsDQogICAgICAgIGg6IDEsDQogICAgICAgIGw6IDIsDQogICAgICAgIG06IDIsDQogICAgICAgIHE6IDQsDQogICAgICAgIHM6IDQsDQogICAgICAgIHQ6IDIsDQogICAgICAgIHY6IDEsDQogICAgICAgIHo6IDANCiAgICB9LA0KICAgIG8gPSAvKFthc3R2enFtaGxjXSkoW15hc3R2enFtaGxjXSopL2dpLA0KICAgIGcgPSAvLT9bMC05XSpcLj9bMC05XSsoPzplWy0rXT9cZCspPy9naSwNCiAgICBjID0gZnVuY3Rpb24odCkgew0KICAgICAgICB2YXIgbiA9IHQubWF0Y2goZyk7DQogICAgICAgIHJldHVybiBuID8gbi5tYXAoTnVtYmVyKSA6IFtdDQogICAgfSwNCiAgICB1ID0gZnVuY3Rpb24odCwgbiwgZSwgaSkgew0KICAgICAgICB2YXIgaCA9IHRoaXM7DQogICAgICAgIHIodGhpcywgIngwIiwgdm9pZCAwKSwgcih0aGlzLCAieDEiLCB2b2lkIDApLCByKHRoaXMsICJ5MCIsIHZvaWQgMCksIHIodGhpcywgInkxIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0VG90YWxMZW5ndGgiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGgueDAgLSBoLngxLCAyKSArIE1hdGgucG93KGgueTAgLSBoLnkxLCAyKSkNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQb2ludEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gdCAvIE1hdGguc3FydChNYXRoLnBvdyhoLngwIC0gaC54MSwgMikgKyBNYXRoLnBvdyhoLnkwIC0gaC55MSwgMikpOw0KICAgICAgICAgICAgbiA9IE51bWJlci5pc05hTihuKSA/IDEgOiBuOw0KICAgICAgICAgICAgdmFyIGUgPSAoaC54MSAtIGgueDApICogbiwNCiAgICAgICAgICAgICAgICBpID0gKGgueTEgLSBoLnkwKSAqIG47DQogICAgICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgICAgIHg6IGgueDAgKyBlLA0KICAgICAgICAgICAgICAgIHk6IGgueTAgKyBpDQogICAgICAgICAgICB9DQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gTWF0aC5zcXJ0KChoLngxIC0gaC54MCkgKiAoaC54MSAtIGgueDApICsgKGgueTEgLSBoLnkwKSAqIChoLnkxIC0gaC55MCkpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiAtKGgueDEgLSBoLngwKSAvIG4sDQogICAgICAgICAgICAgICAgeTogLShoLnkxIC0gaC55MCkgLyBuDQogICAgICAgICAgICB9DQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UHJvcGVydGllc0F0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gaC5nZXRQb2ludEF0TGVuZ3RoKHQpLA0KICAgICAgICAgICAgICAgIGUgPSBoLmdldFRhbmdlbnRBdExlbmd0aCh0KTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi54LA0KICAgICAgICAgICAgICAgIHk6IG4ueSwNCiAgICAgICAgICAgICAgICB0YW5nZW50WDogZS54LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRZOiBlLnkNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCB0aGlzLngwID0gdCwgdGhpcy54MSA9IG4sIHRoaXMueTAgPSBlLCB0aGlzLnkxID0gaQ0KICAgIH0sDQogICAgbCA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIGgsIHMsIGEsIG8sIGcpIHsNCiAgICAgICAgdmFyIGMgPSB0aGlzOw0KICAgICAgICByKHRoaXMsICJ4MCIsIHZvaWQgMCksIHIodGhpcywgInkwIiwgdm9pZCAwKSwgcih0aGlzLCAicngiLCB2b2lkIDApLCByKHRoaXMsICJyeSIsIHZvaWQgMCksIHIodGhpcywgInhBeGlzUm90YXRlIiwgdm9pZCAwKSwgcih0aGlzLCAiTGFyZ2VBcmNGbGFnIiwgdm9pZCAwKSwgcih0aGlzLCAiU3dlZXBGbGFnIiwgdm9pZCAwKSwgcih0aGlzLCAieDEiLCB2b2lkIDApLCByKHRoaXMsICJ5MSIsIHZvaWQgMCksIHIodGhpcywgImxlbmd0aCIsIHZvaWQgMCksIHIodGhpcywgImdldFRvdGFsTGVuZ3RoIiwgKGZ1bmN0aW9uKCkgew0KICAgICAgICAgICAgcmV0dXJuIGMubGVuZ3RoDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UG9pbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB0IDwgMCA/IHQgPSAwIDogdCA+IGMubGVuZ3RoICYmICh0ID0gYy5sZW5ndGgpOw0KICAgICAgICAgICAgdmFyIG4gPSBmKHsNCiAgICAgICAgICAgICAgICB4OiBjLngwLA0KICAgICAgICAgICAgICAgIHk6IGMueTANCiAgICAgICAgICAgIH0sIGMucngsIGMucnksIGMueEF4aXNSb3RhdGUsIGMuTGFyZ2VBcmNGbGFnLCBjLlN3ZWVwRmxhZywgew0KICAgICAgICAgICAgICAgIHg6IGMueDEsDQogICAgICAgICAgICAgICAgeTogYy55MQ0KICAgICAgICAgICAgfSwgdCAvIGMubGVuZ3RoKTsNCiAgICAgICAgICAgIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi54LA0KICAgICAgICAgICAgICAgIHk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFRhbmdlbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB0IDwgMCA/IHQgPSAwIDogdCA+IGMubGVuZ3RoICYmICh0ID0gYy5sZW5ndGgpOw0KICAgICAgICAgICAgdmFyIG4sIGUgPSAuMDUsDQogICAgICAgICAgICAgICAgaSA9IGMuZ2V0UG9pbnRBdExlbmd0aCh0KTsNCiAgICAgICAgICAgIHQgPCAwID8gdCA9IDAgOiB0ID4gYy5sZW5ndGggJiYgKHQgPSBjLmxlbmd0aCk7DQogICAgICAgICAgICB2YXIgciA9IChuID0gdCA8IGMubGVuZ3RoIC0gZSA/IGMuZ2V0UG9pbnRBdExlbmd0aCh0ICsgZSkgOiBjLmdldFBvaW50QXRMZW5ndGgodCAtIGUpKS54IC0gaS54LA0KICAgICAgICAgICAgICAgIGggPSBuLnkgLSBpLnksDQogICAgICAgICAgICAgICAgcyA9IE1hdGguc3FydChyICogciArIGggKiBoKTsNCiAgICAgICAgICAgIHJldHVybiB0IDwgYy5sZW5ndGggLSBlID8gew0KICAgICAgICAgICAgICAgIHg6IC1yIC8gcywNCiAgICAgICAgICAgICAgICB5OiAtaCAvIHMNCiAgICAgICAgICAgIH0gOiB7DQogICAgICAgICAgICAgICAgeDogciAvIHMsDQogICAgICAgICAgICAgICAgeTogaCAvIHMNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQcm9wZXJ0aWVzQXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIG4gPSBjLmdldFRhbmdlbnRBdExlbmd0aCh0KSwNCiAgICAgICAgICAgICAgICBlID0gYy5nZXRQb2ludEF0TGVuZ3RoKHQpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiBlLngsDQogICAgICAgICAgICAgICAgeTogZS55LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRYOiBuLngsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHRoaXMueDAgPSB0LCB0aGlzLnkwID0gbiwgdGhpcy5yeCA9IGUsIHRoaXMucnkgPSBpLCB0aGlzLnhBeGlzUm90YXRlID0gaCwgdGhpcy5MYXJnZUFyY0ZsYWcgPSBzLCB0aGlzLlN3ZWVwRmxhZyA9IGEsIHRoaXMueDEgPSBvLCB0aGlzLnkxID0gZzsNCiAgICAgICAgdmFyIHUgPSBwKDMwMCwgKGZ1bmN0aW9uKHIpIHsNCiAgICAgICAgICAgIHJldHVybiBmKHsNCiAgICAgICAgICAgICAgICB4OiB0LA0KICAgICAgICAgICAgICAgIHk6IG4NCiAgICAgICAgICAgIH0sIGUsIGksIGgsIHMsIGEsIHsNCiAgICAgICAgICAgICAgICB4OiBvLA0KICAgICAgICAgICAgICAgIHk6IGcNCiAgICAgICAgICAgIH0sIHIpDQogICAgICAgIH0pKTsNCiAgICAgICAgdGhpcy5sZW5ndGggPSB1LmFyY0xlbmd0aA0KICAgIH0sDQogICAgZiA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIHIsIGgsIHMsIGEpIHsNCiAgICAgICAgbiA9IE1hdGguYWJzKG4pLCBlID0gTWF0aC5hYnMoZSksIGkgPSB5KGksIDM2MCk7DQogICAgICAgIHZhciBvID0geChpKTsNCiAgICAgICAgaWYgKHQueCA9PT0gcy54ICYmIHQueSA9PT0gcy55KSByZXR1cm4gew0KICAgICAgICAgICAgeDogdC54LA0KICAgICAgICAgICAgeTogdC55LA0KICAgICAgICAgICAgZWxsaXB0aWNhbEFyY0FuZ2xlOiAwDQogICAgICAgIH07DQogICAgICAgIGlmICgwID09PSBuIHx8IDAgPT09IGUpIHJldHVybiB7DQogICAgICAgICAgICB4OiAwLA0KICAgICAgICAgICAgeTogMCwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNBbmdsZTogMA0KICAgICAgICB9Ow0KICAgICAgICB2YXIgZyA9ICh0LnggLSBzLngpIC8gMiwNCiAgICAgICAgICAgIGMgPSAodC55IC0gcy55KSAvIDIsDQogICAgICAgICAgICB1ID0gew0KICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogZyArIE1hdGguc2luKG8pICogYywNCiAgICAgICAgICAgICAgICB5OiAtTWF0aC5zaW4obykgKiBnICsgTWF0aC5jb3MobykgKiBjDQogICAgICAgICAgICB9LA0KICAgICAgICAgICAgbCA9IE1hdGgucG93KHUueCwgMikgLyBNYXRoLnBvdyhuLCAyKSArIE1hdGgucG93KHUueSwgMikgLyBNYXRoLnBvdyhlLCAyKTsNCiAgICAgICAgbCA+IDEgJiYgKG4gPSBNYXRoLnNxcnQobCkgKiBuLCBlID0gTWF0aC5zcXJ0KGwpICogZSk7DQogICAgICAgIHZhciBmID0gKE1hdGgucG93KG4sIDIpICogTWF0aC5wb3coZSwgMikgLSBNYXRoLnBvdyhuLCAyKSAqIE1hdGgucG93KHUueSwgMikgLSBNYXRoLnBvdyhlLCAyKSAqIE1hdGgucG93KHUueCwgMikpIC8gKE1hdGgucG93KG4sIDIpICogTWF0aC5wb3codS55LCAyKSArIE1hdGgucG93KGUsIDIpICogTWF0aC5wb3codS54LCAyKSk7DQogICAgICAgIGYgPSBmIDwgMCA/IDAgOiBmOw0KICAgICAgICB2YXIgcCA9IChyICE9PSBoID8gMSA6IC0xKSAqIE1hdGguc3FydChmKSwNCiAgICAgICAgICAgIHYgPSBwICogKG4gKiB1LnkgLyBlKSwNCiAgICAgICAgICAgIGQgPSBwICogKC1lICogdS54IC8gbiksDQogICAgICAgICAgICB3ID0gew0KICAgICAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogdiAtIE1hdGguc2luKG8pICogZCArICh0LnggKyBzLngpIC8gMiwNCiAgICAgICAgICAgICAgICB5OiBNYXRoLnNpbihvKSAqIHYgKyBNYXRoLmNvcyhvKSAqIGQgKyAodC55ICsgcy55KSAvIDINCiAgICAgICAgICAgIH0sDQogICAgICAgICAgICBMID0gew0KICAgICAgICAgICAgICAgIHg6ICh1LnggLSB2KSAvIG4sDQogICAgICAgICAgICAgICAgeTogKHUueSAtIGQpIC8gZQ0KICAgICAgICAgICAgfSwNCiAgICAgICAgICAgIEEgPSBNKHsNCiAgICAgICAgICAgICAgICB4OiAxLA0KICAgICAgICAgICAgICAgIHk6IDANCiAgICAgICAgICAgIH0sIEwpLA0KICAgICAgICAgICAgbSA9IE0oTCwgew0KICAgICAgICAgICAgICAgIHg6ICgtdS54IC0gdikgLyBuLA0KICAgICAgICAgICAgICAgIHk6ICgtdS55IC0gZCkgLyBlDQogICAgICAgICAgICB9KTsNCiAgICAgICAgIWggJiYgbSA+IDAgPyBtIC09IDIgKiBNYXRoLlBJIDogaCAmJiBtIDwgMCAmJiAobSArPSAyICogTWF0aC5QSSk7DQogICAgICAgIHZhciBiID0gQSArIChtICU9IDIgKiBNYXRoLlBJKSAqIGEsDQogICAgICAgICAgICBQID0gbiAqIE1hdGguY29zKGIpLA0KICAgICAgICAgICAgVCA9IGUgKiBNYXRoLnNpbihiKTsNCiAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgIHg6IE1hdGguY29zKG8pICogUCAtIE1hdGguc2luKG8pICogVCArIHcueCwNCiAgICAgICAgICAgIHk6IE1hdGguc2luKG8pICogUCArIE1hdGguY29zKG8pICogVCArIHcueSwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNTdGFydEFuZ2xlOiBBLA0KICAgICAgICAgICAgZWxsaXB0aWNhbEFyY0VuZEFuZ2xlOiBBICsgbSwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNBbmdsZTogYiwNCiAgICAgICAgICAgIGVsbGlwdGljYWxBcmNDZW50ZXI6IHcsDQogICAgICAgICAgICByZXN1bHRhbnRSeDogbiwNCiAgICAgICAgICAgIHJlc3VsdGFudFJ5OiBlDQogICAgICAgIH0NCiAgICB9LA0KICAgIHAgPSBmdW5jdGlvbih0LCBuKSB7DQogICAgICAgIHQgPSB0IHx8IDUwMDsNCiAgICAgICAgZm9yICh2YXIgZSwgaSA9IDAsIHIgPSBbXSwgaCA9IFtdLCBzID0gbigwKSwgYSA9IDA7IGEgPCB0OyBhKyspIHsNCiAgICAgICAgICAgIHZhciBvID0gZChhICogKDEgLyB0KSwgMCwgMSk7DQogICAgICAgICAgICBlID0gbihvKSwgaSArPSB2KHMsIGUpLCBoLnB1c2goW3MsIGVdKSwgci5wdXNoKHsNCiAgICAgICAgICAgICAgICB0OiBvLA0KICAgICAgICAgICAgICAgIGFyY0xlbmd0aDogaQ0KICAgICAgICAgICAgfSksIHMgPSBlDQogICAgICAgIH0NCiAgICAgICAgcmV0dXJuIGUgPSBuKDEpLCBoLnB1c2goW3MsIGVdKSwgaSArPSB2KHMsIGUpLCByLnB1c2goew0KICAgICAgICAgICAgdDogMSwNCiAgICAgICAgICAgIGFyY0xlbmd0aDogaQ0KICAgICAgICB9KSwgew0KICAgICAgICAgICAgYXJjTGVuZ3RoOiBpLA0KICAgICAgICAgICAgYXJjTGVuZ3RoTWFwOiByLA0KICAgICAgICAgICAgYXBwcm94aW1hdGlvbkxpbmVzOiBoDQogICAgICAgIH0NCiAgICB9LA0KICAgIHkgPSBmdW5jdGlvbih0LCBuKSB7DQogICAgICAgIHJldHVybiAodCAlIG4gKyBuKSAlIG4NCiAgICB9LA0KICAgIHggPSBmdW5jdGlvbih0KSB7DQogICAgICAgIHJldHVybiB0ICogKE1hdGguUEkgLyAxODApDQogICAgfSwNCiAgICB2ID0gZnVuY3Rpb24odCwgbikgew0KICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KG4ueCAtIHQueCwgMikgKyBNYXRoLnBvdyhuLnkgLSB0LnksIDIpKQ0KICAgIH0sDQogICAgZCA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHQsIG4pLCBlKQ0KICAgIH0sDQogICAgTSA9IGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgdmFyIGUgPSB0LnggKiBuLnggKyB0LnkgKiBuLnksDQogICAgICAgICAgICBpID0gTWF0aC5zcXJ0KChNYXRoLnBvdyh0LngsIDIpICsgTWF0aC5wb3codC55LCAyKSkgKiAoTWF0aC5wb3cobi54LCAyKSArIE1hdGgucG93KG4ueSwgMikpKTsNCiAgICAgICAgcmV0dXJuICh0LnggKiBuLnkgLSB0LnkgKiBuLnggPCAwID8gLTEgOiAxKSAqIE1hdGguYWNvcyhlIC8gaSkNCiAgICB9LA0KICAgIHcgPSBbDQogICAgICAgIFtdLA0KICAgICAgICBbXSwNCiAgICAgICAgWy0uNTc3MzUwMjY5MTg5NjI1NywgLjU3NzM1MDI2OTE4OTYyNTddLA0KICAgICAgICBbMCwgLS43NzQ1OTY2NjkyNDE0ODM0LCAuNzc0NTk2NjY5MjQxNDgzNF0sDQogICAgICAgIFstLjMzOTk4MTA0MzU4NDg1NjI2LCAuMzM5OTgxMDQzNTg0ODU2MjYsIC0uODYxMTM2MzExNTk0MDUyNiwgLjg2MTEzNjMxMTU5NDA1MjZdLA0KICAgICAgICBbMCwgLS41Mzg0NjkzMTAxMDU2ODMxLCAuNTM4NDY5MzEwMTA1NjgzMSwgLS45MDYxNzk4NDU5Mzg2NjQsIC45MDYxNzk4NDU5Mzg2NjRdLA0KICAgICAgICBbLjY2MTIwOTM4NjQ2NjI2NDUsIC0uNjYxMjA5Mzg2NDY2MjY0NSwgLS4yMzg2MTkxODYwODMxOTY5LCAuMjM4NjE5MTg2MDgzMTk2OSwgLS45MzI0Njk1MTQyMDMxNTIsIC45MzI0Njk1MTQyMDMxNTJdLA0KICAgICAgICBbMCwgLjQwNTg0NTE1MTM3NzM5NzIsIC0uNDA1ODQ1MTUxMzc3Mzk3MiwgLS43NDE1MzExODU1OTkzOTQ1LCAuNzQxNTMxMTg1NTk5Mzk0NSwgLS45NDkxMDc5MTIzNDI3NTg1LCAuOTQ5MTA3OTEyMzQyNzU4NV0sDQogICAgICAgIFstLjE4MzQzNDY0MjQ5NTY0OTgsIC4xODM0MzQ2NDI0OTU2NDk4LCAtLjUyNTUzMjQwOTkxNjMyOSwgLjUyNTUzMjQwOTkxNjMyOSwgLS43OTY2NjY0Nzc0MTM2MjY3LCAuNzk2NjY2NDc3NDEzNjI2NywgLS45NjAyODk4NTY0OTc1MzYzLCAuOTYwMjg5ODU2NDk3NTM2M10sDQogICAgICAgIFswLCAtLjgzNjAzMTEwNzMyNjYzNTgsIC44MzYwMzExMDczMjY2MzU4LCAtLjk2ODE2MDIzOTUwNzYyNjEsIC45NjgxNjAyMzk1MDc2MjYxLCAtLjMyNDI1MzQyMzQwMzgwODksIC4zMjQyNTM0MjM0MDM4MDg5LCAtLjYxMzM3MTQzMjcwMDU5MDQsIC42MTMzNzE0MzI3MDA1OTA0XSwNCiAgICAgICAgWy0uMTQ4ODc0MzM4OTgxNjMxMjIsIC4xNDg4NzQzMzg5ODE2MzEyMiwgLS40MzMzOTUzOTQxMjkyNDcyLCAuNDMzMzk1Mzk0MTI5MjQ3MiwgLS42Nzk0MDk1NjgyOTkwMjQ0LCAuNjc5NDA5NTY4Mjk5MDI0NCwgLS44NjUwNjMzNjY2ODg5ODQ1LCAuODY1MDYzMzY2Njg4OTg0NSwgLS45NzM5MDY1Mjg1MTcxNzE3LCAuOTczOTA2NTI4NTE3MTcxN10sDQogICAgICAgIFswLCAtLjI2OTU0MzE1NTk1MjM0NDk2LCAuMjY5NTQzMTU1OTUyMzQ0OTYsIC0uNTE5MDk2MTI5MjA2ODExOCwgLjUxOTA5NjEyOTIwNjgxMTgsIC0uNzMwMTUyMDA1NTc0MDQ5NCwgLjczMDE1MjAwNTU3NDA0OTQsIC0uODg3MDYyNTk5NzY4MDk1MywgLjg4NzA2MjU5OTc2ODA5NTMsIC0uOTc4MjI4NjU4MTQ2MDU3LCAuOTc4MjI4NjU4MTQ2MDU3XSwNCiAgICAgICAgWy0uMTI1MjMzNDA4NTExNDY4OSwgLjEyNTIzMzQwODUxMTQ2ODksIC0uMzY3ODMxNDk4OTk4MTgwMiwgLjM2NzgzMTQ5ODk5ODE4MDIsIC0uNTg3MzE3OTU0Mjg2NjE3NSwgLjU4NzMxNzk1NDI4NjYxNzUsIC0uNzY5OTAyNjc0MTk0MzA0NywgLjc2OTkwMjY3NDE5NDMwNDcsIC0uOTA0MTE3MjU2MzcwNDc0OSwgLjkwNDExNzI1NjM3MDQ3NDksIC0uOTgxNTYwNjM0MjQ2NzE5MiwgLjk4MTU2MDYzNDI0NjcxOTJdLA0KICAgICAgICBbMCwgLS4yMzA0NTgzMTU5NTUxMzQ4LCAuMjMwNDU4MzE1OTU1MTM0OCwgLS40NDg0OTI3NTEwMzY0NDY4NywgLjQ0ODQ5Mjc1MTAzNjQ0Njg3LCAtLjY0MjM0OTMzOTQ0MDM0MDIsIC42NDIzNDkzMzk0NDAzNDAyLCAtLjgwMTU3ODA5MDczMzMwOTksIC44MDE1NzgwOTA3MzMzMDk5LCAtLjkxNzU5ODM5OTIyMjk3NzksIC45MTc1OTgzOTkyMjI5Nzc5LCAtLjk4NDE4MzA1NDcxODU4ODEsIC45ODQxODMwNTQ3MTg1ODgxXSwNCiAgICAgICAgWy0uMTA4MDU0OTQ4NzA3MzQzNjcsIC4xMDgwNTQ5NDg3MDczNDM2NywgLS4zMTkxMTIzNjg5Mjc4ODk3NCwgLjMxOTExMjM2ODkyNzg4OTc0LCAtLjUxNTI0ODYzNjM1ODE1NDEsIC41MTUyNDg2MzYzNTgxNTQxLCAtLjY4NzI5MjkwNDgxMTY4NTUsIC42ODcyOTI5MDQ4MTE2ODU1LCAtLjgyNzIwMTMxNTA2OTc2NSwgLjgyNzIwMTMxNTA2OTc2NSwgLS45Mjg0MzQ4ODM2NjM1NzM1LCAuOTI4NDM0ODgzNjYzNTczNSwgLS45ODYyODM4MDg2OTY4MTIzLCAuOTg2MjgzODA4Njk2ODEyM10sDQogICAgICAgIFswLCAtLjIwMTE5NDA5Mzk5NzQzNDUxLCAuMjAxMTk0MDkzOTk3NDM0NTEsIC0uMzk0MTUxMzQ3MDc3NTYzNCwgLjM5NDE1MTM0NzA3NzU2MzQsIC0uNTcwOTcyMTcyNjA4NTM4OCwgLjU3MDk3MjE3MjYwODUzODgsIC0uNzI0NDE3NzMxMzYwMTcwMSwgLjcyNDQxNzczMTM2MDE3MDEsIC0uODQ4MjA2NTgzNDEwNDI3MiwgLjg0ODIwNjU4MzQxMDQyNzIsIC0uOTM3MjczMzkyNDAwNzA2LCAuOTM3MjczMzkyNDAwNzA2LCAtLjk4Nzk5MjUxODAyMDQ4NTQsIC45ODc5OTI1MTgwMjA0ODU0XSwNCiAgICAgICAgWy0uMDk1MDEyNTA5ODM3NjM3NDQsIC4wOTUwMTI1MDk4Mzc2Mzc0NCwgLS4yODE2MDM1NTA3NzkyNTg5LCAuMjgxNjAzNTUwNzc5MjU4OSwgLS40NTgwMTY3Nzc2NTcyMjczNywgLjQ1ODAxNjc3NzY1NzIyNzM3LCAtLjYxNzg3NjI0NDQwMjY0MzgsIC42MTc4NzYyNDQ0MDI2NDM4LCAtLjc1NTQwNDQwODM1NTAwMywgLjc1NTQwNDQwODM1NTAwMywgLS44NjU2MzEyMDIzODc4MzE4LCAuODY1NjMxMjAyMzg3ODMxOCwgLS45NDQ1NzUwMjMwNzMyMzI2LCAuOTQ0NTc1MDIzMDczMjMyNiwgLS45ODk0MDA5MzQ5OTE2NDk5LCAuOTg5NDAwOTM0OTkxNjQ5OV0sDQogICAgICAgIFswLCAtLjE3ODQ4NDE4MTQ5NTg0Nzg1LCAuMTc4NDg0MTgxNDk1ODQ3ODUsIC0uMzUxMjMxNzYzNDUzODc2MywgLjM1MTIzMTc2MzQ1Mzg3NjMsIC0uNTEyNjkwNTM3MDg2NDc2OSwgLjUxMjY5MDUzNzA4NjQ3NjksIC0uNjU3NjcxMTU5MjE2NjkwNywgLjY1NzY3MTE1OTIxNjY5MDcsIC0uNzgxNTE0MDAzODk2ODAxNCwgLjc4MTUxNDAwMzg5NjgwMTQsIC0uODgwMjM5MTUzNzI2OTg1OSwgLjg4MDIzOTE1MzcyNjk4NTksIC0uOTUwNjc1NTIxNzY4NzY3OCwgLjk1MDY3NTUyMTc2ODc2NzgsIC0uOTkwNTc1NDc1MzE0NDE3NCwgLjk5MDU3NTQ3NTMxNDQxNzRdLA0KICAgICAgICBbLS4wODQ3NzUwMTMwNDE3MzUzLCAuMDg0Nzc1MDEzMDQxNzM1MywgLS4yNTE4ODYyMjU2OTE1MDU1LCAuMjUxODg2MjI1NjkxNTA1NSwgLS40MTE3NTExNjE0NjI4NDI2MywgLjQxMTc1MTE2MTQ2Mjg0MjYzLCAtLjU1OTc3MDgzMTA3Mzk0NzUsIC41NTk3NzA4MzEwNzM5NDc1LCAtLjY5MTY4NzA0MzA2MDM1MzIsIC42OTE2ODcwNDMwNjAzNTMyLCAtLjgwMzcwNDk1ODk3MjUyMzEsIC44MDM3MDQ5NTg5NzI1MjMxLCAtLjg5MjYwMjQ2NjQ5NzU1NTcsIC44OTI2MDI0NjY0OTc1NTU3LCAtLjk1NTgyMzk0OTU3MTM5NzcsIC45NTU4MjM5NDk1NzEzOTc3LCAtLjk5MTU2NTE2ODQyMDkzMDksIC45OTE1NjUxNjg0MjA5MzA5XSwNCiAgICAgICAgWzAsIC0uMTYwMzU4NjQ1NjQwMjI1MzcsIC4xNjAzNTg2NDU2NDAyMjUzNywgLS4zMTY1NjQwOTk5NjM2Mjk4MywgLjMxNjU2NDA5OTk2MzYyOTgzLCAtLjQ2NDU3MDc0MTM3NTk2MDk0LCAuNDY0NTcwNzQxMzc1OTYwOTQsIC0uNjAwNTQ1MzA0NjYxNjgxLCAuNjAwNTQ1MzA0NjYxNjgxLCAtLjcyMDk2NjE3NzMzNTIyOTQsIC43MjA5NjYxNzczMzUyMjk0LCAtLjgyMjcxNDY1NjUzNzE0MjgsIC44MjI3MTQ2NTY1MzcxNDI4LCAtLjkwMzE1NTkwMzYxNDgxNzksIC45MDMxNTU5MDM2MTQ4MTc5LCAtLjk2MDIwODE1MjEzNDgzLCAuOTYwMjA4MTUyMTM0ODMsIC0uOTkyNDA2ODQzODQzNTg0NCwgLjk5MjQwNjg0Mzg0MzU4NDRdLA0KICAgICAgICBbLS4wNzY1MjY1MjExMzM0OTczNCwgLjA3NjUyNjUyMTEzMzQ5NzM0LCAtLjIyNzc4NTg1MTE0MTY0NTA3LCAuMjI3Nzg1ODUxMTQxNjQ1MDcsIC0uMzczNzA2MDg4NzE1NDE5NTUsIC4zNzM3MDYwODg3MTU0MTk1NSwgLS41MTA4NjcwMDE5NTA4MjcxLCAuNTEwODY3MDAxOTUwODI3MSwgLS42MzYwNTM2ODA3MjY1MTUsIC42MzYwNTM2ODA3MjY1MTUsIC0uNzQ2MzMxOTA2NDYwMTUwOCwgLjc0NjMzMTkwNjQ2MDE1MDgsIC0uODM5MTE2OTcxODIyMjE4OCwgLjgzOTExNjk3MTgyMjIxODgsIC0uOTEyMjM0NDI4MjUxMzI2LCAuOTEyMjM0NDI4MjUxMzI2LCAtLjk2Mzk3MTkyNzI3NzkxMzgsIC45NjM5NzE5MjcyNzc5MTM4LCAtLjk5MzEyODU5OTE4NTA5NDksIC45OTMxMjg1OTkxODUwOTQ5XSwNCiAgICAgICAgWzAsIC0uMTQ1NTYxODU0MTYwODk1MSwgLjE0NTU2MTg1NDE2MDg5NTEsIC0uMjg4MDIxMzE2ODAyNDAxMSwgLjI4ODAyMTMxNjgwMjQwMTEsIC0uNDI0MzQyMTIwMjA3NDM4OCwgLjQyNDM0MjEyMDIwNzQzODgsIC0uNTUxNjE4ODM1ODg3MjE5OCwgLjU1MTYxODgzNTg4NzIxOTgsIC0uNjY3MTM4ODA0MTk3NDEyMywgLjY2NzEzODgwNDE5NzQxMjMsIC0uNzY4NDM5OTYzNDc1Njc3OSwgLjc2ODQzOTk2MzQ3NTY3NzksIC0uODUzMzYzMzY0NTgzMzE3MywgLjg1MzM2MzM2NDU4MzMxNzMsIC0uOTIwMDk5MzM0MTUwNDAwOCwgLjkyMDA5OTMzNDE1MDQwMDgsIC0uOTY3MjI2ODM4NTY2MzA2MywgLjk2NzIyNjgzODU2NjMwNjMsIC0uOTkzNzUyMTcwNjIwMzg5NSwgLjk5Mzc1MjE3MDYyMDM4OTVdLA0KICAgICAgICBbLS4wNjk3MzkyNzMzMTk3MjIyMywgLjA2OTczOTI3MzMxOTcyMjIzLCAtLjIwNzg2MDQyNjY4ODIyMTI3LCAuMjA3ODYwNDI2Njg4MjIxMjcsIC0uMzQxOTM1ODIwODkyMDg0MjQsIC4zNDE5MzU4MjA4OTIwODQyNCwgLS40NjkzNTU4Mzc5ODY3NTcsIC40NjkzNTU4Mzc5ODY3NTcsIC0uNTg3NjQwNDAzNTA2OTExNiwgLjU4NzY0MDQwMzUwNjkxMTYsIC0uNjk0NDg3MjYzMTg2NjgyNywgLjY5NDQ4NzI2MzE4NjY4MjcsIC0uNzg3ODE2ODA1OTc5MjA4MSwgLjc4NzgxNjgwNTk3OTIwODEsIC0uODY1ODEyNTc3NzIwMzAwMiwgLjg2NTgxMjU3NzcyMDMwMDIsIC0uOTI2OTU2NzcyMTg3MTc0LCAuOTI2OTU2NzcyMTg3MTc0LCAtLjk3MDA2MDQ5NzgzNTQyODcsIC45NzAwNjA0OTc4MzU0Mjg3LCAtLjk5NDI5NDU4NTQ4MjM5OTIsIC45OTQyOTQ1ODU0ODIzOTkyXSwNCiAgICAgICAgWzAsIC0uMTMzMjU2ODI0Mjk4NDY2MSwgLjEzMzI1NjgyNDI5ODQ2NjEsIC0uMjY0MTM1NjgwOTcwMzQ0OTUsIC4yNjQxMzU2ODA5NzAzNDQ5NSwgLS4zOTAzMDEwMzgwMzAyOTA4LCAuMzkwMzAxMDM4MDMwMjkwOCwgLS41MDk1MDE0Nzc4NDYwMDc1LCAuNTA5NTAxNDc3ODQ2MDA3NSwgLS42MTk2MDk4NzU3NjM2NDYxLCAuNjE5NjA5ODc1NzYzNjQ2MSwgLS43MTg2NjEzNjMxMzE5NTAyLCAuNzE4NjYxMzYzMTMxOTUwMiwgLS44MDQ4ODg0MDE2MTg4Mzk5LCAuODA0ODg4NDAxNjE4ODM5OSwgLS44NzY3NTIzNTgyNzA0NDE2LCAuODc2NzUyMzU4MjcwNDQxNiwgLS45MzI5NzEwODY4MjYwMTYxLCAuOTMyOTcxMDg2ODI2MDE2MSwgLS45NzI1NDI0NzEyMTgxMTUyLCAuOTcyNTQyNDcxMjE4MTE1MiwgLS45OTQ3NjkzMzQ5OTc1NTIyLCAuOTk0NzY5MzM0OTk3NTUyMl0sDQogICAgICAgIFstLjA2NDA1Njg5Mjg2MjYwNTYzLCAuMDY0MDU2ODkyODYyNjA1NjMsIC0uMTkxMTE4ODY3NDczNjE2MywgLjE5MTExODg2NzQ3MzYxNjMsIC0uMzE1MDQyNjc5Njk2MTYzNCwgLjMxNTA0MjY3OTY5NjE2MzQsIC0uNDMzNzkzNTA3NjI2MDQ1MSwgLjQzMzc5MzUwNzYyNjA0NTEsIC0uNTQ1NDIxNDcxMzg4ODM5NiwgLjU0NTQyMTQ3MTM4ODgzOTYsIC0uNjQ4MDkzNjUxOTM2OTc1NSwgLjY0ODA5MzY1MTkzNjk3NTUsIC0uNzQwMTI0MTkxNTc4NTU0NCwgLjc0MDEyNDE5MTU3ODU1NDQsIC0uODIwMDAxOTg1OTczOTAzLCAuODIwMDAxOTg1OTczOTAzLCAtLjg4NjQxNTUyNzAwNDQwMTEsIC44ODY0MTU1MjcwMDQ0MDExLCAtLjkzODI3NDU1MjAwMjczMjgsIC45MzgyNzQ1NTIwMDI3MzI4LCAtLjk3NDcyODU1NTk3MTMwOTUsIC45NzQ3Mjg1NTU5NzEzMDk1LCAtLjk5NTE4NzIxOTk5NzAyMTMsIC45OTUxODcyMTk5OTcwMjEzXQ0KICAgIF0sDQogICAgTCA9IFsNCiAgICAgICAgW10sDQogICAgICAgIFtdLA0KICAgICAgICBbMSwgMV0sDQogICAgICAgIFsuODg4ODg4ODg4ODg4ODg4OCwgLjU1NTU1NTU1NTU1NTU1NTYsIC41NTU1NTU1NTU1NTU1NTU2XSwNCiAgICAgICAgWy42NTIxNDUxNTQ4NjI1NDYxLCAuNjUyMTQ1MTU0ODYyNTQ2MSwgLjM0Nzg1NDg0NTEzNzQ1Mzg1LCAuMzQ3ODU0ODQ1MTM3NDUzODVdLA0KICAgICAgICBbLjU2ODg4ODg4ODg4ODg4ODksIC40Nzg2Mjg2NzA0OTkzNjY0NywgLjQ3ODYyODY3MDQ5OTM2NjQ3LCAuMjM2OTI2ODg1MDU2MTg5MDgsIC4yMzY5MjY4ODUwNTYxODkwOF0sDQogICAgICAgIFsuMzYwNzYxNTczMDQ4MTM4NiwgLjM2MDc2MTU3MzA0ODEzODYsIC40Njc5MTM5MzQ1NzI2OTEwNCwgLjQ2NzkxMzkzNDU3MjY5MTA0LCAuMTcxMzI0NDkyMzc5MTcwMzYsIC4xNzEzMjQ0OTIzNzkxNzAzNl0sDQogICAgICAgIFsuNDE3OTU5MTgzNjczNDY5NCwgLjM4MTgzMDA1MDUwNTExODksIC4zODE4MzAwNTA1MDUxMTg5LCAuMjc5NzA1MzkxNDg5Mjc2NjQsIC4yNzk3MDUzOTE0ODkyNzY2NCwgLjEyOTQ4NDk2NjE2ODg2OTcsIC4xMjk0ODQ5NjYxNjg4Njk3XSwNCiAgICAgICAgWy4zNjI2ODM3ODMzNzgzNjIsIC4zNjI2ODM3ODMzNzgzNjIsIC4zMTM3MDY2NDU4Nzc4ODcyNywgLjMxMzcwNjY0NTg3Nzg4NzI3LCAuMjIyMzgxMDM0NDUzMzc0NDgsIC4yMjIzODEwMzQ0NTMzNzQ0OCwgLjEwMTIyODUzNjI5MDM3NjI2LCAuMTAxMjI4NTM2MjkwMzc2MjZdLA0KICAgICAgICBbLjMzMDIzOTM1NTAwMTI1OTgsIC4xODA2NDgxNjA2OTQ4NTc0LCAuMTgwNjQ4MTYwNjk0ODU3NCwgLjA4MTI3NDM4ODM2MTU3NDQxLCAuMDgxMjc0Mzg4MzYxNTc0NDEsIC4zMTIzNDcwNzcwNDAwMDI4NiwgLjMxMjM0NzA3NzA0MDAwMjg2LCAuMjYwNjEwNjk2NDAyOTM1NDQsIC4yNjA2MTA2OTY0MDI5MzU0NF0sDQogICAgICAgIFsuMjk1NTI0MjI0NzE0NzUyODcsIC4yOTU1MjQyMjQ3MTQ3NTI4NywgLjI2OTI2NjcxOTMwOTk5NjM1LCAuMjY5MjY2NzE5MzA5OTk2MzUsIC4yMTkwODYzNjI1MTU5ODIwNCwgLjIxOTA4NjM2MjUxNTk4MjA0LCAuMTQ5NDUxMzQ5MTUwNTgwNiwgLjE0OTQ1MTM0OTE1MDU4MDYsIC4wNjY2NzEzNDQzMDg2ODgxNCwgLjA2NjY3MTM0NDMwODY4ODE0XSwNCiAgICAgICAgWy4yNzI5MjUwODY3Nzc5MDA2LCAuMjYyODA0NTQ0NTEwMjQ2NjUsIC4yNjI4MDQ1NDQ1MTAyNDY2NSwgLjIzMzE5Mzc2NDU5MTk5MDQ4LCAuMjMzMTkzNzY0NTkxOTkwNDgsIC4xODYyOTAyMTA5Mjc3MzQyNiwgLjE4NjI5MDIxMDkyNzczNDI2LCAuMTI1NTgwMzY5NDY0OTA0NiwgLjEyNTU4MDM2OTQ2NDkwNDYsIC4wNTU2Njg1NjcxMTYxNzM2NiwgLjA1NTY2ODU2NzExNjE3MzY2XSwNCiAgICAgICAgWy4yNDkxNDcwNDU4MTM0MDI3NywgLjI0OTE0NzA0NTgxMzQwMjc3LCAuMjMzNDkyNTM2NTM4MzU0OCwgLjIzMzQ5MjUzNjUzODM1NDgsIC4yMDMxNjc0MjY3MjMwNjU5MiwgLjIwMzE2NzQyNjcyMzA2NTkyLCAuMTYwMDc4MzI4NTQzMzQ2MjIsIC4xNjAwNzgzMjg1NDMzNDYyMiwgLjEwNjkzOTMyNTk5NTMxODQzLCAuMTA2OTM5MzI1OTk1MzE4NDMsIC4wNDcxNzUzMzYzODY1MTE4MywgLjA0NzE3NTMzNjM4NjUxMTgzXSwNCiAgICAgICAgWy4yMzI1NTE1NTMyMzA4NzM5LCAuMjI2MjgzMTgwMjYyODk3MjMsIC4yMjYyODMxODAyNjI4OTcyMywgLjIwNzgxNjA0NzUzNjg4ODUsIC4yMDc4MTYwNDc1MzY4ODg1LCAuMTc4MTQ1OTgwNzYxOTQ1NzQsIC4xNzgxNDU5ODA3NjE5NDU3NCwgLjEzODg3MzUxMDIxOTc4NzI1LCAuMTM4ODczNTEwMjE5Nzg3MjUsIC4wOTIxMjE0OTk4Mzc3Mjg0NSwgLjA5MjEyMTQ5OTgzNzcyODQ1LCAuMDQwNDg0MDA0NzY1MzE1ODgsIC4wNDA0ODQwMDQ3NjUzMTU4OF0sDQogICAgICAgIFsuMjE1MjYzODUzNDYzMTU3OCwgLjIxNTI2Mzg1MzQ2MzE1NzgsIC4yMDUxOTg0NjM3MjEyOTU2LCAuMjA1MTk4NDYzNzIxMjk1NiwgLjE4NTUzODM5NzQ3NzkzNzgyLCAuMTg1NTM4Mzk3NDc3OTM3ODIsIC4xNTcyMDMxNjcxNTgxOTM1NSwgLjE1NzIwMzE2NzE1ODE5MzU1LCAuMTIxNTE4NTcwNjg3OTAzMTksIC4xMjE1MTg1NzA2ODc5MDMxOSwgLjA4MDE1ODA4NzE1OTc2MDIxLCAuMDgwMTU4MDg3MTU5NzYwMjEsIC4wMzUxMTk0NjAzMzE3NTE4NiwgLjAzNTExOTQ2MDMzMTc1MTg2XSwNCiAgICAgICAgWy4yMDI1NzgyNDE5MjU1NjEzLCAuMTk4NDMxNDg1MzI3MTExNTgsIC4xOTg0MzE0ODUzMjcxMTE1OCwgLjE4NjE2MTAwMDAxNTU2MjIsIC4xODYxNjEwMDAwMTU1NjIyLCAuMTY2MjY5MjA1ODE2OTkzOTIsIC4xNjYyNjkyMDU4MTY5OTM5MiwgLjEzOTU3MDY3NzkyNjE1NDMyLCAuMTM5NTcwNjc3OTI2MTU0MzIsIC4xMDcxNTkyMjA0NjcxNzE5NCwgLjEwNzE1OTIyMDQ2NzE3MTk0LCAuMDcwMzY2MDQ3NDg4MTA4MTIsIC4wNzAzNjYwNDc0ODgxMDgxMiwgLjAzMDc1MzI0MTk5NjExNzI3LCAuMDMwNzUzMjQxOTk2MTE3MjddLA0KICAgICAgICBbLjE4OTQ1MDYxMDQ1NTA2ODUsIC4xODk0NTA2MTA0NTUwNjg1LCAuMTgyNjAzNDE1MDQ0OTIzNTgsIC4xODI2MDM0MTUwNDQ5MjM1OCwgLjE2OTE1NjUxOTM5NTAwMjU0LCAuMTY5MTU2NTE5Mzk1MDAyNTQsIC4xNDk1OTU5ODg4MTY1NzY3NCwgLjE0OTU5NTk4ODgxNjU3Njc0LCAuMTI0NjI4OTcxMjU1NTMzODgsIC4xMjQ2Mjg5NzEyNTU1MzM4OCwgLjA5NTE1ODUxMTY4MjQ5Mjc5LCAuMDk1MTU4NTExNjgyNDkyNzksIC4wNjIyNTM1MjM5Mzg2NDc4OTQsIC4wNjIyNTM1MjM5Mzg2NDc4OTQsIC4wMjcxNTI0NTk0MTE3NTQwOTYsIC4wMjcxNTI0NTk0MTE3NTQwOTZdLA0KICAgICAgICBbLjE3OTQ0NjQ3MDM1NjIwNjUzLCAuMTc2NTYyNzA1MzY2OTkyNjQsIC4xNzY1NjI3MDUzNjY5OTI2NCwgLjE2ODAwNDEwMjE1NjQ1MDA0LCAuMTY4MDA0MTAyMTU2NDUwMDQsIC4xNTQwNDU3NjEwNzY4MTAyOCwgLjE1NDA0NTc2MTA3NjgxMDI4LCAuMTM1MTM2MzY4NDY4NTI1NDgsIC4xMzUxMzYzNjg0Njg1MjU0OCwgLjExMTg4Mzg0NzE5MzQwMzk3LCAuMTExODgzODQ3MTkzNDAzOTcsIC4wODUwMzYxNDgzMTcxNzkxOCwgLjA4NTAzNjE0ODMxNzE3OTE4LCAuMDU1NDU5NTI5MzczOTg3MiwgLjA1NTQ1OTUyOTM3Mzk4NzIsIC4wMjQxNDgzMDI4Njg1NDc5MywgLjAyNDE0ODMwMjg2ODU0NzkzXSwNCiAgICAgICAgWy4xNjkxNDIzODI5NjMxNDM2LCAuMTY5MTQyMzgyOTYzMTQzNiwgLjE2NDI3NjQ4Mzc0NTgzMjczLCAuMTY0Mjc2NDgzNzQ1ODMyNzMsIC4xNTQ2ODQ2NzUxMjYyNjUyNCwgLjE1NDY4NDY3NTEyNjI2NTI0LCAuMTQwNjQyOTE0NjcwNjUwNjUsIC4xNDA2NDI5MTQ2NzA2NTA2NSwgLjEyMjU1NTIwNjcxMTQ3ODQ2LCAuMTIyNTU1MjA2NzExNDc4NDYsIC4xMDA5NDIwNDQxMDYyODcxNywgLjEwMDk0MjA0NDEwNjI4NzE3LCAuMDc2NDI1NzMwMjU0ODg5MDUsIC4wNzY0MjU3MzAyNTQ4ODkwNSwgLjA0OTcxNDU0ODg5NDk2OTgsIC4wNDk3MTQ1NDg4OTQ5Njk4LCAuMDIxNjE2MDEzNTI2NDgzMzEsIC4wMjE2MTYwMTM1MjY0ODMzMV0sDQogICAgICAgIFsuMTYxMDU0NDQ5ODQ4NzgzNywgLjE1ODk2ODg0MzM5Mzk1NDM0LCAuMTU4OTY4ODQzMzkzOTU0MzQsIC4xNTI3NjYwNDIwNjU4NTk2NywgLjE1Mjc2NjA0MjA2NTg1OTY3LCAuMTQyNjA2NzAyMTczNjA2NiwgLjE0MjYwNjcwMjE3MzYwNjYsIC4xMjg3NTM5NjI1MzkzMzYyMSwgLjEyODc1Mzk2MjUzOTMzNjIxLCAuMTExNTY2NjQ1NTQ3MzMzOTksIC4xMTE1NjY2NDU1NDczMzM5OSwgLjA5MTQ5MDAyMTYyMjQ1LCAuMDkxNDkwMDIxNjIyNDUsIC4wNjkwNDQ1NDI3Mzc2NDEyMywgLjA2OTA0NDU0MjczNzY0MTIzLCAuMDQ0ODE0MjI2NzY1Njk5NiwgLjA0NDgxNDIyNjc2NTY5OTYsIC4wMTk0NjE3ODgyMjk3MjY0NzgsIC4wMTk0NjE3ODgyMjk3MjY0NzhdLA0KICAgICAgICBbLjE1Mjc1MzM4NzEzMDcyNTg0LCAuMTUyNzUzMzg3MTMwNzI1ODQsIC4xNDkxNzI5ODY0NzI2MDM3NCwgLjE0OTE3Mjk4NjQ3MjYwMzc0LCAuMTQyMDk2MTA5MzE4MzgyMDQsIC4xNDIwOTYxMDkzMTgzODIwNCwgLjEzMTY4ODYzODQ0OTE3NjY0LCAuMTMxNjg4NjM4NDQ5MTc2NjQsIC4xMTgxOTQ1MzE5NjE1MTg0MSwgLjExODE5NDUzMTk2MTUxODQxLCAuMTAxOTMwMTE5ODE3MjQwNDQsIC4xMDE5MzAxMTk4MTcyNDA0NCwgLjA4MzI3Njc0MTU3NjcwNDc1LCAuMDgzMjc2NzQxNTc2NzA0NzUsIC4wNjI2NzIwNDgzMzQxMDkwNywgLjA2MjY3MjA0ODMzNDEwOTA3LCAuMDQwNjAxNDI5ODAwMzg2OTQsIC4wNDA2MDE0Mjk4MDAzODY5NCwgLjAxNzYxNDAwNzEzOTE1MjExOCwgLjAxNzYxNDAwNzEzOTE1MjExOF0sDQogICAgICAgIFsuMTQ2MDgxMTMzNjQ5NjkwNDEsIC4xNDQ1MjQ0MDM5ODk5NzAwNSwgLjE0NDUyNDQwMzk4OTk3MDA1LCAuMTM5ODg3Mzk0NzkxMDczMTUsIC4xMzk4ODczOTQ3OTEwNzMxNSwgLjEzMjI2ODkzODYzMzMzNzQ3LCAuMTMyMjY4OTM4NjMzMzM3NDcsIC4xMjE4MzE0MTYwNTM3Mjg1MywgLjEyMTgzMTQxNjA1MzcyODUzLCAuMTA4Nzk3Mjk5MTY3MTQ4MzgsIC4xMDg3OTcyOTkxNjcxNDgzOCwgLjA5MzQ0NDQyMzQ1NjAzMzg2LCAuMDkzNDQ0NDIzNDU2MDMzODYsIC4wNzYxMDAxMTM2MjgzNzkzLCAuMDc2MTAwMTEzNjI4Mzc5MywgLjA1NzEzNDQyNTQyNjg1NzIwNSwgLjA1NzEzNDQyNTQyNjg1NzIwNSwgLjAzNjk1Mzc4OTc3MDg1MjQ5NCwgLjAzNjk1Mzc4OTc3MDg1MjQ5NCwgLjAxNjAxNzIyODI1Nzc3NDMzNSwgLjAxNjAxNzIyODI1Nzc3NDMzNV0sDQogICAgICAgIFsuMTM5MjUxODcyODU1NjMxOTgsIC4xMzkyNTE4NzI4NTU2MzE5OCwgLjEzNjU0MTQ5ODM0NjAxNTE3LCAuMTM2NTQxNDk4MzQ2MDE1MTcsIC4xMzExNzM1MDQ3ODcwNjIzOCwgLjEzMTE3MzUwNDc4NzA2MjM4LCAuMTIzMjUyMzc2ODEwNTEyNDIsIC4xMjMyNTIzNzY4MTA1MTI0MiwgLjExMjkzMjI5NjA4MDUzOTIyLCAuMTEyOTMyMjk2MDgwNTM5MjIsIC4xMDA0MTQxNDQ0NDI4ODA5NiwgLjEwMDQxNDE0NDQ0Mjg4MDk2LCAuMDg1OTQxNjA2MjE3MDY3NzMsIC4wODU5NDE2MDYyMTcwNjc3MywgLjA2OTc5NjQ2ODQyNDUyMDQ5LCAuMDY5Nzk2NDY4NDI0NTIwNDksIC4wNTIyOTMzMzUxNTI2ODMyODYsIC4wNTIyOTMzMzUxNTI2ODMyODYsIC4wMzM3NzQ5MDE1ODQ4MTQxNSwgLjAzMzc3NDkwMTU4NDgxNDE1LCAuMDE0NjI3OTk1Mjk4MjcyMiwgLjAxNDYyNzk5NTI5ODI3MjJdLA0KICAgICAgICBbLjEzMzY1NDU3MjE4NjEwNjE5LCAuMTMyNDYyMDM5NDA0Njk2NiwgLjEzMjQ2MjAzOTQwNDY5NjYsIC4xMjg5MDU3MjIxODgwODIxNiwgLjEyODkwNTcyMjE4ODA4MjE2LCAuMTIzMDQ5MDg0MzA2NzI5NTMsIC4xMjMwNDkwODQzMDY3Mjk1MywgLjExNDk5NjY0MDIyMjQxMTM2LCAuMTE0OTk2NjQwMjIyNDExMzYsIC4xMDQ4OTIwOTE0NjQ1NDE0MSwgLjEwNDg5MjA5MTQ2NDU0MTQxLCAuMDkyOTE1NzY2MDYwMDM1MTUsIC4wOTI5MTU3NjYwNjAwMzUxNSwgLjA3OTI4MTQxMTc3NjcxODk1LCAuMDc5MjgxNDExNzc2NzE4OTUsIC4wNjQyMzI0MjE0MDg1MjU4NSwgLjA2NDIzMjQyMTQwODUyNTg1LCAuMDQ4MDM3NjcxNzMxMDg0NjcsIC4wNDgwMzc2NzE3MzEwODQ2NywgLjAzMDk4ODAwNTg1Njk3OTQ0NSwgLjAzMDk4ODAwNTg1Njk3OTQ0NSwgLjAxMzQxMTg1OTQ4NzE0MTc3MSwgLjAxMzQxMTg1OTQ4NzE0MTc3MV0sDQogICAgICAgIFsuMTI3OTM4MTk1MzQ2NzUyMTYsIC4xMjc5MzgxOTUzNDY3NTIxNiwgLjEyNTgzNzQ1NjM0NjgyODMsIC4xMjU4Mzc0NTYzNDY4MjgzLCAuMTIxNjcwNDcyOTI3ODAzMzksIC4xMjE2NzA0NzI5Mjc4MDMzOSwgLjExNTUwNTY2ODA1MzcyNTYsIC4xMTU1MDU2NjgwNTM3MjU2LCAuMTA3NDQ0MjcwMTE1OTY1NjMsIC4xMDc0NDQyNzAxMTU5NjU2MywgLjA5NzYxODY1MjEwNDExMzg4LCAuMDk3NjE4NjUyMTA0MTEzODgsIC4wODYxOTAxNjE1MzE5NTMyNywgLjA4NjE5MDE2MTUzMTk1MzI3LCAuMDczMzQ2NDgxNDExMDgwMywgLjA3MzM0NjQ4MTQxMTA4MDMsIC4wNTkyOTg1ODQ5MTU0MzY3OCwgLjA1OTI5ODU4NDkxNTQzNjc4LCAuMDQ0Mjc3NDM4ODE3NDE5ODEsIC4wNDQyNzc0Mzg4MTc0MTk4MSwgLjAyODUzMTM4ODYyODkzMzY2MywgLjAyODUzMTM4ODYyODkzMzY2MywgLjAxMjM0MTIyOTc5OTk4NzIsIC4wMTIzNDEyMjk3OTk5ODcyXQ0KICAgIF0sDQogICAgQSA9IFsNCiAgICAgICAgWzFdLA0KICAgICAgICBbMSwgMV0sDQogICAgICAgIFsxLCAyLCAxXSwNCiAgICAgICAgWzEsIDMsIDMsIDFdDQogICAgXSwNCiAgICBtID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgeDogKDEgLSBlKSAqICgxIC0gZSkgKiAoMSAtIGUpICogdFswXSArIDMgKiAoMSAtIGUpICogKDEgLSBlKSAqIGUgKiB0WzFdICsgMyAqICgxIC0gZSkgKiBlICogZSAqIHRbMl0gKyBlICogZSAqIGUgKiB0WzNdLA0KICAgICAgICAgICAgeTogKDEgLSBlKSAqICgxIC0gZSkgKiAoMSAtIGUpICogblswXSArIDMgKiAoMSAtIGUpICogKDEgLSBlKSAqIGUgKiBuWzFdICsgMyAqICgxIC0gZSkgKiBlICogZSAqIG5bMl0gKyBlICogZSAqIGUgKiBuWzNdDQogICAgICAgIH0NCiAgICB9LA0KICAgIGIgPSBmdW5jdGlvbih0LCBuLCBlKSB7DQogICAgICAgIHJldHVybiBUKFszICogKHRbMV0gLSB0WzBdKSwgMyAqICh0WzJdIC0gdFsxXSksIDMgKiAodFszXSAtIHRbMl0pXSwgWzMgKiAoblsxXSAtIG5bMF0pLCAzICogKG5bMl0gLSBuWzFdKSwgMyAqIChuWzNdIC0gblsyXSldLCBlKQ0KICAgIH0sDQogICAgUCA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgdmFyIGksIHIsIGg7DQogICAgICAgIGkgPSBlIC8gMiwgciA9IDA7DQogICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgMjA7IHMrKykgaCA9IGkgKiB3WzIwXVtzXSArIGksIHIgKz0gTFsyMF1bc10gKiBfKHQsIG4sIGgpOw0KICAgICAgICByZXR1cm4gaSAqIHINCiAgICB9LA0KICAgIFQgPSBmdW5jdGlvbih0LCBuLCBlKSB7DQogICAgICAgIHJldHVybiB7DQogICAgICAgICAgICB4OiAoMSAtIGUpICogKDEgLSBlKSAqIHRbMF0gKyAyICogKDEgLSBlKSAqIGUgKiB0WzFdICsgZSAqIGUgKiB0WzJdLA0KICAgICAgICAgICAgeTogKDEgLSBlKSAqICgxIC0gZSkgKiBuWzBdICsgMiAqICgxIC0gZSkgKiBlICogblsxXSArIGUgKiBlICogblsyXQ0KICAgICAgICB9DQogICAgfSwNCiAgICBxID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAxKTsNCiAgICAgICAgdmFyIGkgPSB0WzBdIC0gMiAqIHRbMV0gKyB0WzJdLA0KICAgICAgICAgICAgciA9IG5bMF0gLSAyICogblsxXSArIG5bMl0sDQogICAgICAgICAgICBoID0gMiAqIHRbMV0gLSAyICogdFswXSwNCiAgICAgICAgICAgIHMgPSAyICogblsxXSAtIDIgKiBuWzBdLA0KICAgICAgICAgICAgYSA9IDQgKiAoaSAqIGkgKyByICogciksDQogICAgICAgICAgICBvID0gNCAqIChpICogaCArIHIgKiBzKSwNCiAgICAgICAgICAgIGcgPSBoICogaCArIHMgKiBzOw0KICAgICAgICBpZiAoMCA9PT0gYSkgcmV0dXJuIGUgKiBNYXRoLnNxcnQoTWF0aC5wb3codFsyXSAtIHRbMF0sIDIpICsgTWF0aC5wb3coblsyXSAtIG5bMF0sIDIpKTsNCiAgICAgICAgdmFyIGMgPSBvIC8gKDIgKiBhKSwNCiAgICAgICAgICAgIHUgPSBlICsgYywNCiAgICAgICAgICAgIGwgPSBnIC8gYSAtIGMgKiBjLA0KICAgICAgICAgICAgZiA9IHUgKiB1ICsgbCA+IDAgPyBNYXRoLnNxcnQodSAqIHUgKyBsKSA6IDAsDQogICAgICAgICAgICBwID0gYyAqIGMgKyBsID4gMCA/IE1hdGguc3FydChjICogYyArIGwpIDogMCwNCiAgICAgICAgICAgIHkgPSBjICsgTWF0aC5zcXJ0KGMgKiBjICsgbCkgIT09IDAgPyBsICogTWF0aC5sb2coTWF0aC5hYnMoKHUgKyBmKSAvIChjICsgcCkpKSA6IDA7DQogICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSkgLyAyICogKHUgKiBmIC0gYyAqIHAgKyB5KQ0KICAgIH0sDQogICAgTiA9IGZ1bmN0aW9uKHQsIG4sIGUpIHsNCiAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgIHg6IDIgKiAoMSAtIGUpICogKHRbMV0gLSB0WzBdKSArIDIgKiBlICogKHRbMl0gLSB0WzFdKSwNCiAgICAgICAgICAgIHk6IDIgKiAoMSAtIGUpICogKG5bMV0gLSBuWzBdKSArIDIgKiBlICogKG5bMl0gLSBuWzFdKQ0KICAgICAgICB9DQogICAgfTsNCg0KZnVuY3Rpb24gXyh0LCBuLCBlKSB7DQogICAgdmFyIGkgPSBPKDEsIGUsIHQpLA0KICAgICAgICByID0gTygxLCBlLCBuKSwNCiAgICAgICAgaCA9IGkgKiBpICsgciAqIHI7DQogICAgcmV0dXJuIE1hdGguc3FydChoKQ0KfQ0KdmFyIE8gPSBmdW5jdGlvbiB0KG4sIGUsIGkpIHsNCiAgICAgICAgdmFyIHIsIGgsIHMgPSBpLmxlbmd0aCAtIDE7DQogICAgICAgIGlmICgwID09PSBzKSByZXR1cm4gMDsNCiAgICAgICAgaWYgKDAgPT09IG4pIHsNCiAgICAgICAgICAgIGggPSAwOw0KICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPD0gczsgYSsrKSBoICs9IEFbc11bYV0gKiBNYXRoLnBvdygxIC0gZSwgcyAtIGEpICogTWF0aC5wb3coZSwgYSkgKiBpW2FdOw0KICAgICAgICAgICAgcmV0dXJuIGgNCiAgICAgICAgfQ0KICAgICAgICByID0gbmV3IEFycmF5KHMpOw0KICAgICAgICBmb3IgKHZhciBvID0gMDsgbyA8IHM7IG8rKykgcltvXSA9IHMgKiAoaVtvICsgMV0gLSBpW29dKTsNCiAgICAgICAgcmV0dXJuIHQobiAtIDEsIGUsIHIpDQogICAgfSwNCiAgICBTID0gZnVuY3Rpb24odCwgbiwgZSkgew0KICAgICAgICBmb3IgKHZhciBpID0gMSwgciA9IHQgLyBuLCBoID0gKHQgLSBlKHIpKSAvIG4sIHMgPSAwOyBpID4gLjAwMTspIHsNCiAgICAgICAgICAgIHZhciBhID0gZShyICsgaCksDQogICAgICAgICAgICAgICAgbyA9IE1hdGguYWJzKHQgLSBhKSAvIG47DQogICAgICAgICAgICBpZiAobyA8IGkpIGkgPSBvLCByICs9IGg7DQogICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICB2YXIgZyA9IGUociAtIGgpLA0KICAgICAgICAgICAgICAgICAgICBjID0gTWF0aC5hYnModCAtIGcpIC8gbjsNCiAgICAgICAgICAgICAgICBjIDwgaSA/IChpID0gYywgciAtPSBoKSA6IGggLz0gMg0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgaWYgKCsrcyA+IDUwMCkgYnJlYWsNCiAgICAgICAgfQ0KICAgICAgICByZXR1cm4gcg0KICAgIH0sDQogICAgQyA9IGZ1bmN0aW9uKHQsIG4sIGUsIGksIGgsIHMsIGEsIG8pIHsNCiAgICAgICAgdmFyIGcgPSB0aGlzOw0KICAgICAgICByKHRoaXMsICJhIiwgdm9pZCAwKSwgcih0aGlzLCAiYiIsIHZvaWQgMCksIHIodGhpcywgImMiLCB2b2lkIDApLCByKHRoaXMsICJkIiwgdm9pZCAwKSwgcih0aGlzLCAibGVuZ3RoIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0QXJjTGVuZ3RoIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0UG9pbnQiLCB2b2lkIDApLCByKHRoaXMsICJnZXREZXJpdmF0aXZlIiwgdm9pZCAwKSwgcih0aGlzLCAiZ2V0VG90YWxMZW5ndGgiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gZy5sZW5ndGgNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQb2ludEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBuID0gW2cuYS54LCBnLmIueCwgZy5jLngsIGcuZC54XSwNCiAgICAgICAgICAgICAgICBlID0gW2cuYS55LCBnLmIueSwgZy5jLnksIGcuZC55XSwNCiAgICAgICAgICAgICAgICBpID0gUyh0LCBnLmxlbmd0aCwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcuZ2V0QXJjTGVuZ3RoKG4sIGUsIHQpDQogICAgICAgICAgICAgICAgfSkpOw0KICAgICAgICAgICAgcmV0dXJuIGcuZ2V0UG9pbnQobiwgZSwgaSkNCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRUYW5nZW50QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIG4gPSBbZy5hLngsIGcuYi54LCBnLmMueCwgZy5kLnhdLA0KICAgICAgICAgICAgICAgIGUgPSBbZy5hLnksIGcuYi55LCBnLmMueSwgZy5kLnldLA0KICAgICAgICAgICAgICAgIGkgPSBTKHQsIGcubGVuZ3RoLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gZy5nZXRBcmNMZW5ndGgobiwgZSwgdCkNCiAgICAgICAgICAgICAgICB9KSksDQogICAgICAgICAgICAgICAgciA9IGcuZ2V0RGVyaXZhdGl2ZShuLCBlLCBpKSwNCiAgICAgICAgICAgICAgICBoID0gTWF0aC5zcXJ0KHIueCAqIHIueCArIHIueSAqIHIueSk7DQogICAgICAgICAgICByZXR1cm4gaCA+IDAgPyB7DQogICAgICAgICAgICAgICAgeDogci54IC8gaCwNCiAgICAgICAgICAgICAgICB5OiByLnkgLyBoDQogICAgICAgICAgICB9IDogew0KICAgICAgICAgICAgICAgIHg6IDAsDQogICAgICAgICAgICAgICAgeTogMA0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFByb3BlcnRpZXNBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB2YXIgbiwgZSA9IFtnLmEueCwgZy5iLngsIGcuYy54LCBnLmQueF0sDQogICAgICAgICAgICAgICAgaSA9IFtnLmEueSwgZy5iLnksIGcuYy55LCBnLmQueV0sDQogICAgICAgICAgICAgICAgciA9IFModCwgZy5sZW5ndGgsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgICAgIHJldHVybiBnLmdldEFyY0xlbmd0aChlLCBpLCB0KQ0KICAgICAgICAgICAgICAgIH0pKSwNCiAgICAgICAgICAgICAgICBoID0gZy5nZXREZXJpdmF0aXZlKGUsIGksIHIpLA0KICAgICAgICAgICAgICAgIHMgPSBNYXRoLnNxcnQoaC54ICogaC54ICsgaC55ICogaC55KTsNCiAgICAgICAgICAgIG4gPSBzID4gMCA/IHsNCiAgICAgICAgICAgICAgICB4OiBoLnggLyBzLA0KICAgICAgICAgICAgICAgIHk6IGgueSAvIHMNCiAgICAgICAgICAgIH0gOiB7DQogICAgICAgICAgICAgICAgeDogMCwNCiAgICAgICAgICAgICAgICB5OiAwDQogICAgICAgICAgICB9Ow0KICAgICAgICAgICAgdmFyIGEgPSBnLmdldFBvaW50KGUsIGksIHIpOw0KICAgICAgICAgICAgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiBhLngsDQogICAgICAgICAgICAgICAgeTogYS55LA0KICAgICAgICAgICAgICAgIHRhbmdlbnRYOiBuLngsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IG4ueQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSksIHIodGhpcywgImdldEMiLCAoZnVuY3Rpb24oKSB7DQogICAgICAgICAgICByZXR1cm4gZy5jDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0RCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgIHJldHVybiBnLmQNCiAgICAgICAgfSkpLCB0aGlzLmEgPSB7DQogICAgICAgICAgICB4OiB0LA0KICAgICAgICAgICAgeTogbg0KICAgICAgICB9LCB0aGlzLmIgPSB7DQogICAgICAgICAgICB4OiBlLA0KICAgICAgICAgICAgeTogaQ0KICAgICAgICB9LCB0aGlzLmMgPSB7DQogICAgICAgICAgICB4OiBoLA0KICAgICAgICAgICAgeTogcw0KICAgICAgICB9LCB2b2lkIDAgIT09IGEgJiYgdm9pZCAwICE9PSBvID8gKHRoaXMuZ2V0QXJjTGVuZ3RoID0gUCwgdGhpcy5nZXRQb2ludCA9IG0sIHRoaXMuZ2V0RGVyaXZhdGl2ZSA9IGIsIHRoaXMuZCA9IHsNCiAgICAgICAgICAgIHg6IGEsDQogICAgICAgICAgICB5OiBvDQogICAgICAgIH0pIDogKHRoaXMuZ2V0QXJjTGVuZ3RoID0gcSwgdGhpcy5nZXRQb2ludCA9IFQsIHRoaXMuZ2V0RGVyaXZhdGl2ZSA9IE4sIHRoaXMuZCA9IHsNCiAgICAgICAgICAgIHg6IDAsDQogICAgICAgICAgICB5OiAwDQogICAgICAgIH0pLCB0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0QXJjTGVuZ3RoKFt0aGlzLmEueCwgdGhpcy5iLngsIHRoaXMuYy54LCB0aGlzLmQueF0sIFt0aGlzLmEueSwgdGhpcy5iLnksIHRoaXMuYy55LCB0aGlzLmQueV0sIDEpDQogICAgfSwNCiAgICBFID0gZnVuY3Rpb24odCkgew0KICAgICAgICB2YXIgbiA9IHRoaXM7DQogICAgICAgIHIodGhpcywgImxlbmd0aCIsIDApLCByKHRoaXMsICJwYXJ0aWFsX2xlbmd0aHMiLCBbXSksIHIodGhpcywgImZ1bmN0aW9ucyIsIFtdKSwgcih0aGlzLCAiaW5pdGlhbF9wb2ludCIsIG51bGwpLCByKHRoaXMsICJnZXRQYXJ0QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdCA8IDAgPyB0ID0gMCA6IHQgPiBuLmxlbmd0aCAmJiAodCA9IG4ubGVuZ3RoKTsNCiAgICAgICAgICAgIGZvciAodmFyIGUgPSBuLnBhcnRpYWxfbGVuZ3Rocy5sZW5ndGggLSAxOyBuLnBhcnRpYWxfbGVuZ3Roc1tlXSA+PSB0ICYmIGUgPiAwOykgZS0tOw0KICAgICAgICAgICAgcmV0dXJuIGUrKywgew0KICAgICAgICAgICAgICAgIGZyYWN0aW9uOiB0IC0gbi5wYXJ0aWFsX2xlbmd0aHNbZSAtIDFdLA0KICAgICAgICAgICAgICAgIGk6IGUNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSkpLCByKHRoaXMsICJnZXRUb3RhbExlbmd0aCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgIHJldHVybiBuLmxlbmd0aA0KICAgICAgICB9KSksIHIodGhpcywgImdldFBvaW50QXRMZW5ndGgiLCAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgdmFyIGUgPSBuLmdldFBhcnRBdExlbmd0aCh0KSwNCiAgICAgICAgICAgICAgICBpID0gbi5mdW5jdGlvbnNbZS5pXTsNCiAgICAgICAgICAgIGlmIChpKSByZXR1cm4gaS5nZXRQb2ludEF0TGVuZ3RoKGUuZnJhY3Rpb24pOw0KICAgICAgICAgICAgaWYgKG4uaW5pdGlhbF9wb2ludCkgcmV0dXJuIG4uaW5pdGlhbF9wb2ludDsNCiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigiV3JvbmcgZnVuY3Rpb24gYXQgdGhpcyBwYXJ0LiIpDQogICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgIHZhciBlID0gbi5nZXRQYXJ0QXRMZW5ndGgodCksDQogICAgICAgICAgICAgICAgaSA9IG4uZnVuY3Rpb25zW2UuaV07DQogICAgICAgICAgICBpZiAoaSkgcmV0dXJuIGkuZ2V0VGFuZ2VudEF0TGVuZ3RoKGUuZnJhY3Rpb24pOw0KICAgICAgICAgICAgaWYgKG4uaW5pdGlhbF9wb2ludCkgcmV0dXJuIHsNCiAgICAgICAgICAgICAgICB4OiAwLA0KICAgICAgICAgICAgICAgIHk6IDANCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIldyb25nIGZ1bmN0aW9uIGF0IHRoaXMgcGFydC4iKQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFByb3BlcnRpZXNBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICB2YXIgZSA9IG4uZ2V0UGFydEF0TGVuZ3RoKHQpLA0KICAgICAgICAgICAgICAgIGkgPSBuLmZ1bmN0aW9uc1tlLmldOw0KICAgICAgICAgICAgaWYgKGkpIHJldHVybiBpLmdldFByb3BlcnRpZXNBdExlbmd0aChlLmZyYWN0aW9uKTsNCiAgICAgICAgICAgIGlmIChuLmluaXRpYWxfcG9pbnQpIHJldHVybiB7DQogICAgICAgICAgICAgICAgeDogbi5pbml0aWFsX3BvaW50LngsDQogICAgICAgICAgICAgICAgeTogbi5pbml0aWFsX3BvaW50LnksDQogICAgICAgICAgICAgICAgdGFuZ2VudFg6IDAsDQogICAgICAgICAgICAgICAgdGFuZ2VudFk6IDANCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIldyb25nIGZ1bmN0aW9uIGF0IHRoaXMgcGFydC4iKQ0KICAgICAgICB9KSksIHIodGhpcywgImdldFBhcnRzIiwgKGZ1bmN0aW9uKCkgew0KICAgICAgICAgICAgZm9yICh2YXIgdCA9IFtdLCBlID0gMDsgZSA8IG4uZnVuY3Rpb25zLmxlbmd0aDsgZSsrKQ0KICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBuLmZ1bmN0aW9uc1tlXSkgew0KICAgICAgICAgICAgICAgICAgICBuLmZ1bmN0aW9uc1tlXSA9IG4uZnVuY3Rpb25zW2VdOw0KICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKDApLA0KICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKG4ucGFydGlhbF9sZW5ndGhzW2VdIC0gbi5wYXJ0aWFsX2xlbmd0aHNbZSAtIDFdKSwNCiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbi5wYXJ0aWFsX2xlbmd0aHNbZV0gLSBuLnBhcnRpYWxfbGVuZ3Roc1tlIC0gMV0sDQogICAgICAgICAgICAgICAgICAgICAgICBnZXRQb2ludEF0TGVuZ3RoOiBuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoLA0KICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGFuZ2VudEF0TGVuZ3RoOiBuLmZ1bmN0aW9uc1tlXS5nZXRUYW5nZW50QXRMZW5ndGgsDQogICAgICAgICAgICAgICAgICAgICAgICBnZXRQcm9wZXJ0aWVzQXRMZW5ndGg6IG4uZnVuY3Rpb25zW2VdLmdldFByb3BlcnRpZXNBdExlbmd0aA0KICAgICAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgICAgICB0LnB1c2goaSkNCiAgICAgICAgICAgICAgICB9IHJldHVybiB0DQogICAgICAgIH0pKTsNCiAgICAgICAgZm9yICh2YXIgZSwgaSA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgICAgIHZhciBuID0gKHQgJiYgdC5sZW5ndGggPiAwID8gdCA6ICJNMCwwIikubWF0Y2gobyk7DQogICAgICAgICAgICAgICAgaWYgKCFuKSB0aHJvdyBuZXcgRXJyb3IoIk5vIHBhdGggZWxlbWVudHMgZm91bmQgaW4gc3RyaW5nICIuY29uY2F0KHQpKTsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5yZWR1Y2UoKGZ1bmN0aW9uKHQsIG4pIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuLmNoYXJBdCgwKSwNCiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBlLnRvTG93ZXJDYXNlKCksDQogICAgICAgICAgICAgICAgICAgICAgICByID0gYyhuLnN1YnN0cigxKSk7DQogICAgICAgICAgICAgICAgICAgIGZvciAoIm0iID09PSBpICYmIHIubGVuZ3RoID4gMiAmJiAodC5wdXNoKFtlXS5jb25jYXQoaChyLnNwbGljZSgwLCAyKSkpKSwgaSA9ICJsIiwgZSA9ICJtIiA9PT0gZSA/ICJsIiA6ICJMIik7IHIubGVuZ3RoID49IDA7KSB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPT09IGFbaV0pIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goW2VdLmNvbmNhdChoKHIuc3BsaWNlKDAsIGFbaV0pKSkpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrDQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPCBhW2ldKSB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBwYXRoIGRhdGE6ICInLmNvbmNhdChlLCAnIiBtdXN0IGhhdmUgJykuY29uY2F0KGFbaV0sICIgZWxlbWVudHMgYW5kIGhhcyAiKS5jb25jYXQoci5sZW5ndGgsICI6ICIpLmNvbmNhdChuKSk7DQogICAgICAgICAgICAgICAgICAgICAgICB0LnB1c2goW2VdLmNvbmNhdChoKHIuc3BsaWNlKDAsIGFbaV0pKSkpDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQNCiAgICAgICAgICAgICAgICB9KSwgW10pDQogICAgICAgICAgICB9KHQpLCBzID0gWzAsIDBdLCBnID0gWzAsIDBdLCBmID0gWzAsIDBdLCBwID0gMDsgcCA8IGkubGVuZ3RoOyBwKyspIHsNCiAgICAgICAgICAgIGlmICgiTSIgPT09IGlbcF1bMF0pIGYgPSBbKHMgPSBbaVtwXVsxXSwgaVtwXVsyXV0pWzBdLCBzWzFdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChudWxsKSwgMCA9PT0gcCAmJiAodGhpcy5pbml0aWFsX3BvaW50ID0gew0KICAgICAgICAgICAgICAgIHg6IGlbcF1bMV0sDQogICAgICAgICAgICAgICAgeTogaVtwXVsyXQ0KICAgICAgICAgICAgfSk7DQogICAgICAgICAgICBlbHNlIGlmICgibSIgPT09IGlbcF1bMF0pIGYgPSBbKHMgPSBbaVtwXVsxXSArIHNbMF0sIGlbcF1bMl0gKyBzWzFdXSlbMF0sIHNbMV1dLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKG51bGwpOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkwiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLnNxcnQoTWF0aC5wb3coc1swXSAtIGlbcF1bMV0sIDIpICsgTWF0aC5wb3coc1sxXSAtIGlbcF1bMl0sIDIpKSwgdGhpcy5mdW5jdGlvbnMucHVzaChuZXcgdShzWzBdLCBpW3BdWzFdLCBzWzFdLCBpW3BdWzJdKSksIHMgPSBbaVtwXVsxXSwgaVtwXVsyXV07DQogICAgICAgICAgICBlbHNlIGlmICgibCIgPT09IGlbcF1bMF0pIHRoaXMubGVuZ3RoICs9IE1hdGguc3FydChNYXRoLnBvdyhpW3BdWzFdLCAyKSArIE1hdGgucG93KGlbcF1bMl0sIDIpKSwgdGhpcy5mdW5jdGlvbnMucHVzaChuZXcgdShzWzBdLCBpW3BdWzFdICsgc1swXSwgc1sxXSwgaVtwXVsyXSArIHNbMV0pKSwgcyA9IFtpW3BdWzFdICsgc1swXSwgaVtwXVsyXSArIHNbMV1dOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkgiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLmFicyhzWzBdIC0gaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgaVtwXVsxXSwgc1sxXSwgc1sxXSkpLCBzWzBdID0gaVtwXVsxXTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJoIiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5hYnMoaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSArIGlbcF1bMV0sIHNbMV0sIHNbMV0pKSwgc1swXSA9IGlbcF1bMV0gKyBzWzBdOw0KICAgICAgICAgICAgZWxzZSBpZiAoIlYiID09PSBpW3BdWzBdKSB0aGlzLmxlbmd0aCArPSBNYXRoLmFicyhzWzFdIC0gaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSwgc1sxXSwgaVtwXVsxXSkpLCBzWzFdID0gaVtwXVsxXTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJ2IiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5hYnMoaVtwXVsxXSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgc1swXSwgc1sxXSwgc1sxXSArIGlbcF1bMV0pKSwgc1sxXSA9IGlbcF1bMV0gKyBzWzFdOw0KICAgICAgICAgICAgZWxzZSBpZiAoInoiID09PSBpW3BdWzBdIHx8ICJaIiA9PT0gaVtwXVswXSkgdGhpcy5sZW5ndGggKz0gTWF0aC5zcXJ0KE1hdGgucG93KGZbMF0gLSBzWzBdLCAyKSArIE1hdGgucG93KGZbMV0gLSBzWzFdLCAyKSksIHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSwgZlswXSwgc1sxXSwgZlsxXSkpLCBzID0gW2ZbMF0sIGZbMV1dOw0KICAgICAgICAgICAgZWxzZSBpZiAoIkMiID09PSBpW3BdWzBdKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSwgaVtwXVs1XSwgaVtwXVs2XSksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgcyA9IFtpW3BdWzVdLCBpW3BdWzZdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJjIiA9PT0gaVtwXVswXSkoZSA9IG5ldyBDKHNbMF0sIHNbMV0sIHNbMF0gKyBpW3BdWzFdLCBzWzFdICsgaVtwXVsyXSwgc1swXSArIGlbcF1bM10sIHNbMV0gKyBpW3BdWzRdLCBzWzBdICsgaVtwXVs1XSwgc1sxXSArIGlbcF1bNl0pKS5nZXRUb3RhbExlbmd0aCgpID4gMCA/ICh0aGlzLmxlbmd0aCArPSBlLmdldFRvdGFsTGVuZ3RoKCksIHRoaXMuZnVuY3Rpb25zLnB1c2goZSksIHMgPSBbaVtwXVs1XSArIHNbMF0sIGlbcF1bNl0gKyBzWzFdXSkgOiB0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0sIHNbMF0sIHNbMV0sIHNbMV0pKTsNCiAgICAgICAgICAgIGVsc2UgaWYgKCJTIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmIChwID4gMCAmJiBbIkMiLCAiYyIsICJTIiwgInMiXS5pbmRleE9mKGlbcCAtIDFdWzBdKSA+IC0xKSB7DQogICAgICAgICAgICAgICAgICAgIGlmIChlKSB7DQogICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGUuZ2V0QygpOw0KICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG5ldyBDKHNbMF0sIHNbMV0sIDIgKiBzWzBdIC0geS54LCAyICogc1sxXSAtIHkueSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSkNCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIH0gZWxzZSBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSwgc1sxXSwgaVtwXVsxXSwgaVtwXVsyXSwgaVtwXVszXSwgaVtwXVs0XSk7DQogICAgICAgICAgICAgICAgZSAmJiAodGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpLCBzID0gW2lbcF1bM10sIGlbcF1bNF1dLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpKQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgicyIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICBpZiAocCA+IDAgJiYgWyJDIiwgImMiLCAiUyIsICJzIl0uaW5kZXhPZihpW3AgLSAxXVswXSkgPiAtMSkgew0KICAgICAgICAgICAgICAgICAgICBpZiAoZSkgew0KICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBlLmdldEMoKSwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gZS5nZXREKCk7DQogICAgICAgICAgICAgICAgICAgICAgICBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSArIHYueCAtIHgueCwgc1sxXSArIHYueSAtIHgueSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bNF0pDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9IGVsc2UgZSA9IG5ldyBDKHNbMF0sIHNbMV0sIHNbMF0sIHNbMV0sIHNbMF0gKyBpW3BdWzFdLCBzWzFdICsgaVtwXVsyXSwgc1swXSArIGlbcF1bM10sIHNbMV0gKyBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICBlICYmICh0aGlzLmxlbmd0aCArPSBlLmdldFRvdGFsTGVuZ3RoKCksIHMgPSBbaVtwXVszXSArIHNbMF0sIGlbcF1bNF0gKyBzWzFdXSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKSkNCiAgICAgICAgICAgIH0gZWxzZSBpZiAoIlEiID09PSBpW3BdWzBdKSB7DQogICAgICAgICAgICAgICAgaWYgKHNbMF0gPT0gaVtwXVsxXSAmJiBzWzFdID09IGlbcF1bMl0pIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgdShpW3BdWzFdLCBpW3BdWzNdLCBpW3BdWzJdLCBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gZC5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGQpDQogICAgICAgICAgICAgICAgfSBlbHNlIGUgPSBuZXcgQyhzWzBdLCBzWzFdLCBpW3BdWzFdLCBpW3BdWzJdLCBpW3BdWzNdLCBpW3BdWzRdLCB2b2lkIDAsIHZvaWQgMCksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgICAgICBzID0gW2lbcF1bM10sIGlbcF1bNF1dLCBnID0gW2lbcF1bMV0sIGlbcF1bMl1dDQogICAgICAgICAgICB9IGVsc2UgaWYgKCJxIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmICgwICE9IGlbcF1bMV0gfHwgMCAhPSBpW3BdWzJdKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bNF0sIHZvaWQgMCwgdm9pZCAwKSwgdGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpOw0KICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IG5ldyB1KHNbMF0gKyBpW3BdWzFdLCBzWzBdICsgaVtwXVszXSwgc1sxXSArIGlbcF1bMl0sIHNbMV0gKyBpW3BdWzRdKTsNCiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gTS5nZXRUb3RhbExlbmd0aCgpLCB0aGlzLmZ1bmN0aW9ucy5wdXNoKE0pDQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGcgPSBbc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdXSwgcyA9IFtpW3BdWzNdICsgc1swXSwgaVtwXVs0XSArIHNbMV1dDQogICAgICAgICAgICB9IGVsc2UgaWYgKCJUIiA9PT0gaVtwXVswXSkgew0KICAgICAgICAgICAgICAgIGlmIChwID4gMCAmJiBbIlEiLCAicSIsICJUIiwgInQiXS5pbmRleE9mKGlbcCAtIDFdWzBdKSA+IC0xKSBlID0gbmV3IEMoc1swXSwgc1sxXSwgMiAqIHNbMF0gLSBnWzBdLCAyICogc1sxXSAtIGdbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIHZvaWQgMCwgdm9pZCAwKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKSwgdGhpcy5sZW5ndGggKz0gZS5nZXRUb3RhbExlbmd0aCgpOw0KICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IG5ldyB1KHNbMF0sIGlbcF1bMV0sIHNbMV0sIGlbcF1bMl0pOw0KICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmN0aW9ucy5wdXNoKHcpLCB0aGlzLmxlbmd0aCArPSB3LmdldFRvdGFsTGVuZ3RoKCkNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgZyA9IFsyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXV0sIHMgPSBbaVtwXVsxXSwgaVtwXVsyXV0NCiAgICAgICAgICAgIH0gZWxzZSBpZiAoInQiID09PSBpW3BdWzBdKSB7DQogICAgICAgICAgICAgICAgaWYgKHAgPiAwICYmIFsiUSIsICJxIiwgIlQiLCAidCJdLmluZGV4T2YoaVtwIC0gMV1bMF0pID4gLTEpIGUgPSBuZXcgQyhzWzBdLCBzWzFdLCAyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXSwgc1swXSArIGlbcF1bMV0sIHNbMV0gKyBpW3BdWzJdLCB2b2lkIDAsIHZvaWQgMCksIHRoaXMubGVuZ3RoICs9IGUuZ2V0VG90YWxMZW5ndGgoKSwgdGhpcy5mdW5jdGlvbnMucHVzaChlKTsNCiAgICAgICAgICAgICAgICBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgdmFyIEwgPSBuZXcgdShzWzBdLCBzWzBdICsgaVtwXVsxXSwgc1sxXSwgc1sxXSArIGlbcF1bMl0pOw0KICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCArPSBMLmdldFRvdGFsTGVuZ3RoKCksIHRoaXMuZnVuY3Rpb25zLnB1c2goTCkNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgZyA9IFsyICogc1swXSAtIGdbMF0sIDIgKiBzWzFdIC0gZ1sxXV0sIHMgPSBbaVtwXVsxXSArIHNbMF0sIGlbcF1bMl0gKyBzWzFdXQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgiQSIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICB2YXIgQSA9IG5ldyBsKHNbMF0sIHNbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIGlbcF1bM10sIDEgPT09IGlbcF1bNF0sIDEgPT09IGlbcF1bNV0sIGlbcF1bNl0sIGlbcF1bN10pOw0KICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoICs9IEEuZ2V0VG90YWxMZW5ndGgoKSwgcyA9IFtpW3BdWzZdLCBpW3BdWzddXSwgdGhpcy5mdW5jdGlvbnMucHVzaChBKQ0KICAgICAgICAgICAgfSBlbHNlIGlmICgiYSIgPT09IGlbcF1bMF0pIHsNCiAgICAgICAgICAgICAgICB2YXIgbSA9IG5ldyBsKHNbMF0sIHNbMV0sIGlbcF1bMV0sIGlbcF1bMl0sIGlbcF1bM10sIDEgPT09IGlbcF1bNF0sIDEgPT09IGlbcF1bNV0sIHNbMF0gKyBpW3BdWzZdLCBzWzFdICsgaVtwXVs3XSk7DQogICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggKz0gbS5nZXRUb3RhbExlbmd0aCgpLCBzID0gW3NbMF0gKyBpW3BdWzZdLCBzWzFdICsgaVtwXVs3XV0sIHRoaXMuZnVuY3Rpb25zLnB1c2gobSkNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIHRoaXMucGFydGlhbF9sZW5ndGhzLnB1c2godGhpcy5sZW5ndGgpDQogICAgICAgIH0NCiAgICB9LA0KICAgIGogPSBmdW5jdGlvbih0KSB7DQogICAgICAgIHZhciBuID0gdGhpczsNCiAgICAgICAgaWYgKHIodGhpcywgImluc3QiLCB2b2lkIDApLCByKHRoaXMsICJnZXRUb3RhbExlbmd0aCIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFRvdGFsTGVuZ3RoKCkNCiAgICAgICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UG9pbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgcmV0dXJuIG4uaW5zdC5nZXRQb2ludEF0TGVuZ3RoKHQpDQogICAgICAgICAgICB9KSksIHIodGhpcywgImdldFRhbmdlbnRBdExlbmd0aCIsIChmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgcmV0dXJuIG4uaW5zdC5nZXRUYW5nZW50QXRMZW5ndGgodCkNCiAgICAgICAgICAgIH0pKSwgcih0aGlzLCAiZ2V0UHJvcGVydGllc0F0TGVuZ3RoIiwgKGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFByb3BlcnRpZXNBdExlbmd0aCh0KQ0KICAgICAgICAgICAgfSkpLCByKHRoaXMsICJnZXRQYXJ0cyIsIChmdW5jdGlvbigpIHsNCiAgICAgICAgICAgICAgICByZXR1cm4gbi5pbnN0LmdldFBhcnRzKCkNCiAgICAgICAgICAgIH0pKSwgdGhpcy5pbnN0ID0gbmV3IEUodCksICEodGhpcyBpbnN0YW5jZW9mIGopKSByZXR1cm4gbmV3IGoodCkNCiAgICB9Ow0KY29uc3QgayA9IDFlNDsNCmxldCBJID0gITE7DQpvbm1lc3NhZ2UgPSAoew0KICAgIGRhdGE6IHQNCn0pID0+IHsNCiAgICBpZiAoIm51bGwiID09PSBvcmlnaW4gJiYgIm9iamVjdCIgPT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdCAmJiAoZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgcmV0dXJuICJwcm9jZXNzLXNjcmlwdCIgPT09IHQuYWN0aW9uDQogICAgICAgIH0odCkgfHwgZnVuY3Rpb24odCkgew0KICAgICAgICAgICAgcmV0dXJuICJwcm9jZXNzLXN2ZyIgPT09IHQuYWN0aW9uDQogICAgICAgIH0odCkpKSB7DQogICAgICAgIGNvbnN0IHsNCiAgICAgICAgICAgIHBvcnQ6IG4sDQogICAgICAgICAgICBzY3JpcHQ6IGkNCiAgICAgICAgfSA9IHQ7DQogICAgICAgIGlmIChJKSB7DQogICAgICAgICAgICBjb25zdCB0ID0gew0KICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICJXb3JrZXIgYWxyZWFkeSB1c2VkIg0KICAgICAgICAgICAgfTsNCiAgICAgICAgICAgIHJldHVybiB2b2lkIG4ucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgIGVycm9yOiB0DQogICAgICAgICAgICB9KQ0KICAgICAgICB9DQogICAgICAgIEkgPSAhMDsNCiAgICAgICAgdHJ5IHsNCiAgICAgICAgICAgIGNvbnN0IGUgPSAicHJvY2Vzcy1zdmciID09PSB0LmFjdGlvbiA/IGZ1bmN0aW9uKHQpIHsNCiAgICAgICAgICAgICAgICBjb25zdCBuID0gbmV3IGoodCksDQogICAgICAgICAgICAgICAgICAgIGUgPSBuLmdldFRvdGFsTGVuZ3RoKCk7DQogICAgICAgICAgICAgICAgaWYgKDAgPT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoIlBhdGggaXMgemVybyBsZW5ndGgiKTsNCiAgICAgICAgICAgICAgICBsZXQgaSA9IC0xIC8gMDsNCiAgICAgICAgICAgICAgICBjb25zdCByID0gQXJyYXkuZnJvbSh7DQogICAgICAgICAgICAgICAgICAgIGxlbmd0aDogaw0KICAgICAgICAgICAgICAgIH0sICgodCwgcikgPT4gew0KICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gciAvIChrIC0gMSkgKiBlLA0KICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG4uZ2V0UG9pbnRBdExlbmd0aChoKTsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSBNYXRoLm1heChpLCBzLngpLCBbaSwgcy55XQ0KICAgICAgICAgICAgICAgIH0pKTsNCiAgICAgICAgICAgICAgICByZXR1cm4gew0KICAgICAgICAgICAgICAgICAgICBuYW1lOiAiY3VzdG9tIiwNCiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiByLA0KICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMA0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0oaSkgOiBmdW5jdGlvbih0KSB7DQogICAgICAgICAgICAgICAgY29uc3QgbiA9IE9iamVjdC5rZXlzKHNlbGYpOw0KICAgICAgICAgICAgICAgIGxldCBlOw0KICAgICAgICAgICAgICAgIGltcG9ydFNjcmlwdHMoYGRhdGE6dGV4dC9qYXZhc2NyaXB0LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGAoKCkgPT4geyR7dH07fSkoKWApfWApOw0KICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHNlbGYpKTsNCiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgbikgaS5kZWxldGUodCk7DQogICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIGkpICJmdW5jdGlvbiIgIT0gdHlwZW9mIHNlbGZbdF0gJiYgaS5kZWxldGUodCk7DQogICAgICAgICAgICAgICAgaWYgKGkuc2l6ZSA+IDEpIHRocm93IEVycm9yKCJUb28gbWFueSBnbG9iYWwgZnVuY3Rpb25zLiBGb3VuZDogIiArIFsuLi5pXS5qb2luKCIsICIpKTsNCiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gaS5zaXplKSB0aHJvdyBFcnJvcigiTm8gZ2xvYmFsIGZ1bmN0aW9uIGZvdW5kLiIpOw0KICAgICAgICAgICAgICAgIGNvbnN0IFtyXSA9IGk7DQogICAgICAgICAgICAgICAgcmV0dXJuIGUgPSBzZWxmW3JdLCB7DQogICAgICAgICAgICAgICAgICAgIG5hbWU6IHIucmVwbGFjZSgvW0EtWl0vZywgKHQgPT4gIi0iICsgdC50b0xvd2VyQ2FzZSgpKSksDQogICAgICAgICAgICAgICAgICAgIHBvaW50czogQXJyYXkuZnJvbSh7DQogICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IGsNCiAgICAgICAgICAgICAgICAgICAgfSwgKCh0LCBuKSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gbiAvIChrIC0gMSk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ksIE51bWJlcihlKGkpKV0NCiAgICAgICAgICAgICAgICAgICAgfSkpLA0KICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogImR1cmF0aW9uIiBpbiBzZWxmICYmICJudW1iZXIiID09IHR5cGVvZiBzZWxmLmR1cmF0aW9uICYmIHNlbGYuZHVyYXRpb24gfHwgMA0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0oaSk7DQogICAgICAgICAgICBuLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICByZXN1bHQ6IGUNCiAgICAgICAgICAgIH0pDQogICAgICAgIH0gY2F0Y2ggKHQpIHsNCiAgICAgICAgICAgIGNvbnN0IGkgPSB7DQogICAgICAgICAgICAgICAgLi4uZSh0KSwNCiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0Lm1lc3NhZ2UNCiAgICAgICAgICAgIH07DQogICAgICAgICAgICB0aHJvdyBuLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICBlcnJvcjogaQ0KICAgICAgICAgICAgfSksIHQNCiAgICAgICAgfQ0KICAgIH0NCn07"),
TESTBASE64Minified = atob("Y29uc3QgdD0vXlxzKmF0IC4qKFxTKzpcZCt8XChuYXRpdmVcKSkvbSxuPS9eKGV2YWxAKT8oXFtuYXRpdmUgY29kZV0pPyQvO2Z1bmN0aW9uIGUoZSl7aWYoZS5zdGFjayYmZS5zdGFjay5tYXRjaCh0KSlyZXR1cm4gZnVuY3Rpb24obil7bGV0IGU9bi5zdGFjay5zcGxpdCgiXG4iKS5maW5kKChuPT5uLm1hdGNoKHQpKSk7ZS5pbmRleE9mKCIoZXZhbCAiKT4tMSYmKGU9ZS5yZXBsYWNlKC9ldmFsIGNvZGUvZywiZXZhbCIpLnJlcGxhY2UoLyhcKGV2YWwgYXQgW14oKV0qKXwoLC4qJCkvZywiIikpO2xldCByPWUucmVwbGFjZSgvXlxzKy8sIiIpLnJlcGxhY2UoL1woZXZhbCBjb2RlL2csIigiKS5yZXBsYWNlKC9eLio_XHMrLywiIik7Y29uc3QgaD1yLm1hdGNoKC8gKFwoLitcKSQpLyk7cj1oP3IucmVwbGFjZShoWzBdLCIiKTpyO2NvbnN0IHM9aShoP2hbMV06ciksYT1oJiZyfHx2b2lkIDA7cmV0dXJue2ZpbGVOYW1lOnNbMF0sZnVuY3Rpb25OYW1lOmEsbGluZU51bWJlcjpOdW1iZXIoc1sxXSksY29sdW1uTnVtYmVyOk51bWJlcihzWzJdKX19KGUpO2lmKGUuc3RhY2spcmV0dXJuIGZ1bmN0aW9uKHQpe2xldCBlPXQuc3RhY2suc3BsaXQoIlxuIikuZmluZCgodD0-IXQubWF0Y2gobikpKTtlLmluZGV4T2YoIiA-IGV2YWwiKT4tMSYmKGU9ZS5yZXBsYWNlKC8gbGluZSAoXGQrKSg_OiA-IGV2YWwgbGluZSBcZCspKiA-IGV2YWw6XGQrOlxkKy9nLCI6JDEiKSk7aWYoLTE9PT1lLmluZGV4T2YoIkAiKSYmLTE9PT1lLmluZGV4T2YoIjoiKSlyZXR1cm57ZnVuY3Rpb25OYW1lOmV9O3tjb25zdCB0PS8oKC4qIi4rIlteQF0qKT9bXkBdKikoPzpAKS8sbj1lLm1hdGNoKHQpLHI9biYmblsxXT9uWzFdOnZvaWQgMCxoPWkoZS5yZXBsYWNlKHQsIiIpKTtyZXR1cm57ZmlsZU5hbWU6aFswXSxmdW5jdGlvbk5hbWU6cixsaW5lTnVtYmVyOk51bWJlcihoWzFdKSxjb2x1bW5OdW1iZXI6TnVtYmVyKGhbMl0pfX19KGUpO3Rocm93IG5ldyBFcnJvcigiQ2Fubm90IHBhcnNlIGdpdmVuIEVycm9yIG9iamVjdCIpfWZ1bmN0aW9uIGkodCl7aWYoLTE9PT10LmluZGV4T2YoIjoiKSlyZXR1cm5bdF07Y29uc3Qgbj0vKC4rPykoPzo6KFxkKykpPyg_OjooXGQrKSk_JC8uZXhlYyh0LnJlcGxhY2UoL1soKV0vZywiIikpO3JldHVybltuWzFdLG5bMl18fHZvaWQgMCxuWzNdfHx2b2lkIDBdfWZ1bmN0aW9uIHIodCxuLGUpe3JldHVybiBuIGluIHQ_T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbbl09ZSx0fWZ1bmN0aW9uIGgodCl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHModCl9KHQpfHxmdW5jdGlvbih0KXtpZigidW5kZWZpbmVkIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fGZ1bmN0aW9uKHQsbil7aWYodCl7aWYoInN0cmluZyI9PXR5cGVvZiB0KXJldHVybiBzKHQsbik7dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO3JldHVybiJPYmplY3QiPT09ZSYmdC5jb25zdHJ1Y3RvciYmKGU9dC5jb25zdHJ1Y3Rvci5uYW1lKSwiTWFwIj09PWV8fCJTZXQiPT09ZT9BcnJheS5mcm9tKHQpOiJBcmd1bWVudHMiPT09ZXx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoZSk_cyh0LG4pOnZvaWQgMH19KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLiIpfSgpfWZ1bmN0aW9uIHModCxuKXsobnVsbD09bnx8bj50Lmxlbmd0aCkmJihuPXQubGVuZ3RoKTtmb3IodmFyIGU9MCxpPW5ldyBBcnJheShuKTtlPG47ZSsrKWlbZV09dFtlXTtyZXR1cm4gaX12YXIgYT17YTo3LGM6NixoOjEsbDoyLG06MixxOjQsczo0LHQ6Mix2OjEsejowfSxvPS8oW2FzdHZ6cW1obGNdKShbXmFzdHZ6cW1obGNdKikvZ2ksZz0vLT9bMC05XSpcLj9bMC05XSsoPzplWy0rXT9cZCspPy9naSxjPWZ1bmN0aW9uKHQpe3ZhciBuPXQubWF0Y2goZyk7cmV0dXJuIG4_bi5tYXAoTnVtYmVyKTpbXX0sdT1mdW5jdGlvbih0LG4sZSxpKXt2YXIgaD10aGlzO3IodGhpcywieDAiLHZvaWQgMCkscih0aGlzLCJ4MSIsdm9pZCAwKSxyKHRoaXMsInkwIix2b2lkIDApLHIodGhpcywieTEiLHZvaWQgMCkscih0aGlzLCJnZXRUb3RhbExlbmd0aCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhoLngwLWgueDEsMikrTWF0aC5wb3coaC55MC1oLnkxLDIpKX0pKSxyKHRoaXMsImdldFBvaW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgbj10L01hdGguc3FydChNYXRoLnBvdyhoLngwLWgueDEsMikrTWF0aC5wb3coaC55MC1oLnkxLDIpKTtuPU51bWJlci5pc05hTihuKT8xOm47dmFyIGU9KGgueDEtaC54MCkqbixpPShoLnkxLWgueTApKm47cmV0dXJue3g6aC54MCtlLHk6aC55MCtpfX0pKSxyKHRoaXMsImdldFRhbmdlbnRBdExlbmd0aCIsKGZ1bmN0aW9uKHQpe3ZhciBuPU1hdGguc3FydCgoaC54MS1oLngwKSooaC54MS1oLngwKSsoaC55MS1oLnkwKSooaC55MS1oLnkwKSk7cmV0dXJue3g6LShoLngxLWgueDApL24seTotKGgueTEtaC55MCkvbn19KSkscih0aGlzLCJnZXRQcm9wZXJ0aWVzQXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgbj1oLmdldFBvaW50QXRMZW5ndGgodCksZT1oLmdldFRhbmdlbnRBdExlbmd0aCh0KTtyZXR1cm57eDpuLngseTpuLnksdGFuZ2VudFg6ZS54LHRhbmdlbnRZOmUueX19KSksdGhpcy54MD10LHRoaXMueDE9bix0aGlzLnkwPWUsdGhpcy55MT1pfSxsPWZ1bmN0aW9uKHQsbixlLGksaCxzLGEsbyxnKXt2YXIgYz10aGlzO3IodGhpcywieDAiLHZvaWQgMCkscih0aGlzLCJ5MCIsdm9pZCAwKSxyKHRoaXMsInJ4Iix2b2lkIDApLHIodGhpcywicnkiLHZvaWQgMCkscih0aGlzLCJ4QXhpc1JvdGF0ZSIsdm9pZCAwKSxyKHRoaXMsIkxhcmdlQXJjRmxhZyIsdm9pZCAwKSxyKHRoaXMsIlN3ZWVwRmxhZyIsdm9pZCAwKSxyKHRoaXMsIngxIix2b2lkIDApLHIodGhpcywieTEiLHZvaWQgMCkscih0aGlzLCJsZW5ndGgiLHZvaWQgMCkscih0aGlzLCJnZXRUb3RhbExlbmd0aCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGMubGVuZ3RofSkpLHIodGhpcywiZ2V0UG9pbnRBdExlbmd0aCIsKGZ1bmN0aW9uKHQpe3Q8MD90PTA6dD5jLmxlbmd0aCYmKHQ9Yy5sZW5ndGgpO3ZhciBuPWYoe3g6Yy54MCx5OmMueTB9LGMucngsYy5yeSxjLnhBeGlzUm90YXRlLGMuTGFyZ2VBcmNGbGFnLGMuU3dlZXBGbGFnLHt4OmMueDEseTpjLnkxfSx0L2MubGVuZ3RoKTtyZXR1cm57eDpuLngseTpuLnl9fSkpLHIodGhpcywiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwoZnVuY3Rpb24odCl7dDwwP3Q9MDp0PmMubGVuZ3RoJiYodD1jLmxlbmd0aCk7dmFyIG4sZT0uMDUsaT1jLmdldFBvaW50QXRMZW5ndGgodCk7dDwwP3Q9MDp0PmMubGVuZ3RoJiYodD1jLmxlbmd0aCk7dmFyIHI9KG49dDxjLmxlbmd0aC1lP2MuZ2V0UG9pbnRBdExlbmd0aCh0K2UpOmMuZ2V0UG9pbnRBdExlbmd0aCh0LWUpKS54LWkueCxoPW4ueS1pLnkscz1NYXRoLnNxcnQocipyK2gqaCk7cmV0dXJuIHQ8Yy5sZW5ndGgtZT97eDotci9zLHk6LWgvc306e3g6ci9zLHk6aC9zfX0pKSxyKHRoaXMsImdldFByb3BlcnRpZXNBdExlbmd0aCIsKGZ1bmN0aW9uKHQpe3ZhciBuPWMuZ2V0VGFuZ2VudEF0TGVuZ3RoKHQpLGU9Yy5nZXRQb2ludEF0TGVuZ3RoKHQpO3JldHVybnt4OmUueCx5OmUueSx0YW5nZW50WDpuLngsdGFuZ2VudFk6bi55fX0pKSx0aGlzLngwPXQsdGhpcy55MD1uLHRoaXMucng9ZSx0aGlzLnJ5PWksdGhpcy54QXhpc1JvdGF0ZT1oLHRoaXMuTGFyZ2VBcmNGbGFnPXMsdGhpcy5Td2VlcEZsYWc9YSx0aGlzLngxPW8sdGhpcy55MT1nO3ZhciB1PXAoMzAwLChmdW5jdGlvbihyKXtyZXR1cm4gZih7eDp0LHk6bn0sZSxpLGgscyxhLHt4Om8seTpnfSxyKX0pKTt0aGlzLmxlbmd0aD11LmFyY0xlbmd0aH0sZj1mdW5jdGlvbih0LG4sZSxpLHIsaCxzLGEpe249TWF0aC5hYnMobiksZT1NYXRoLmFicyhlKSxpPXkoaSwzNjApO3ZhciBvPXgoaSk7aWYodC54PT09cy54JiZ0Lnk9PT1zLnkpcmV0dXJue3g6dC54LHk6dC55LGVsbGlwdGljYWxBcmNBbmdsZTowfTtpZigwPT09bnx8MD09PWUpcmV0dXJue3g6MCx5OjAsZWxsaXB0aWNhbEFyY0FuZ2xlOjB9O3ZhciBnPSh0Lngtcy54KS8yLGM9KHQueS1zLnkpLzIsdT17eDpNYXRoLmNvcyhvKSpnK01hdGguc2luKG8pKmMseTotTWF0aC5zaW4obykqZytNYXRoLmNvcyhvKSpjfSxsPU1hdGgucG93KHUueCwyKS9NYXRoLnBvdyhuLDIpK01hdGgucG93KHUueSwyKS9NYXRoLnBvdyhlLDIpO2w-MSYmKG49TWF0aC5zcXJ0KGwpKm4sZT1NYXRoLnNxcnQobCkqZSk7dmFyIGY9KE1hdGgucG93KG4sMikqTWF0aC5wb3coZSwyKS1NYXRoLnBvdyhuLDIpKk1hdGgucG93KHUueSwyKS1NYXRoLnBvdyhlLDIpKk1hdGgucG93KHUueCwyKSkvKE1hdGgucG93KG4sMikqTWF0aC5wb3codS55LDIpK01hdGgucG93KGUsMikqTWF0aC5wb3codS54LDIpKTtmPWY8MD8wOmY7dmFyIHA9KHIhPT1oPzE6LTEpKk1hdGguc3FydChmKSx2PXAqKG4qdS55L2UpLGQ9cCooLWUqdS54L24pLHc9e3g6TWF0aC5jb3Mobykqdi1NYXRoLnNpbihvKSpkKyh0Lngrcy54KS8yLHk6TWF0aC5zaW4obykqditNYXRoLmNvcyhvKSpkKyh0Lnkrcy55KS8yfSxMPXt4Oih1Lngtdikvbix5Oih1LnktZCkvZX0sQT1NKHt4OjEseTowfSxMKSxtPU0oTCx7eDooLXUueC12KS9uLHk6KC11LnktZCkvZX0pOyFoJiZtPjA_bS09MipNYXRoLlBJOmgmJm08MCYmKG0rPTIqTWF0aC5QSSk7dmFyIGI9QSsobSU9MipNYXRoLlBJKSphLFA9bipNYXRoLmNvcyhiKSxUPWUqTWF0aC5zaW4oYik7cmV0dXJue3g6TWF0aC5jb3MobykqUC1NYXRoLnNpbihvKSpUK3cueCx5Ok1hdGguc2luKG8pKlArTWF0aC5jb3MobykqVCt3LnksZWxsaXB0aWNhbEFyY1N0YXJ0QW5nbGU6QSxlbGxpcHRpY2FsQXJjRW5kQW5nbGU6QSttLGVsbGlwdGljYWxBcmNBbmdsZTpiLGVsbGlwdGljYWxBcmNDZW50ZXI6dyxyZXN1bHRhbnRSeDpuLHJlc3VsdGFudFJ5OmV9fSxwPWZ1bmN0aW9uKHQsbil7dD10fHw1MDA7Zm9yKHZhciBlLGk9MCxyPVtdLGg9W10scz1uKDApLGE9MDthPHQ7YSsrKXt2YXIgbz1kKGEqKDEvdCksMCwxKTtlPW4obyksaSs9dihzLGUpLGgucHVzaChbcyxlXSksci5wdXNoKHt0Om8sYXJjTGVuZ3RoOml9KSxzPWV9cmV0dXJuIGU9bigxKSxoLnB1c2goW3MsZV0pLGkrPXYocyxlKSxyLnB1c2goe3Q6MSxhcmNMZW5ndGg6aX0pLHthcmNMZW5ndGg6aSxhcmNMZW5ndGhNYXA6cixhcHByb3hpbWF0aW9uTGluZXM6aH19LHk9ZnVuY3Rpb24odCxuKXtyZXR1cm4odCVuK24pJW59LHg9ZnVuY3Rpb24odCl7cmV0dXJuIHQqKE1hdGguUEkvMTgwKX0sdj1mdW5jdGlvbih0LG4pe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cobi54LXQueCwyKStNYXRoLnBvdyhuLnktdC55LDIpKX0sZD1mdW5jdGlvbih0LG4sZSl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHQsbiksZSl9LE09ZnVuY3Rpb24odCxuKXt2YXIgZT10Lngqbi54K3QueSpuLnksaT1NYXRoLnNxcnQoKE1hdGgucG93KHQueCwyKStNYXRoLnBvdyh0LnksMikpKihNYXRoLnBvdyhuLngsMikrTWF0aC5wb3cobi55LDIpKSk7cmV0dXJuKHQueCpuLnktdC55Km4ueDwwPy0xOjEpKk1hdGguYWNvcyhlL2kpfSx3PVtbXSxbXSxbLS41NzczNTAyNjkxODk2MjU3LC41NzczNTAyNjkxODk2MjU3XSxbMCwtLjc3NDU5NjY2OTI0MTQ4MzQsLjc3NDU5NjY2OTI0MTQ4MzRdLFstLjMzOTk4MTA0MzU4NDg1NjI2LC4zMzk5ODEwNDM1ODQ4NTYyNiwtLjg2MTEzNjMxMTU5NDA1MjYsLjg2MTEzNjMxMTU5NDA1MjZdLFswLC0uNTM4NDY5MzEwMTA1NjgzMSwuNTM4NDY5MzEwMTA1NjgzMSwtLjkwNjE3OTg0NTkzODY2NCwuOTA2MTc5ODQ1OTM4NjY0XSxbLjY2MTIwOTM4NjQ2NjI2NDUsLS42NjEyMDkzODY0NjYyNjQ1LC0uMjM4NjE5MTg2MDgzMTk2OSwuMjM4NjE5MTg2MDgzMTk2OSwtLjkzMjQ2OTUxNDIwMzE1MiwuOTMyNDY5NTE0MjAzMTUyXSxbMCwuNDA1ODQ1MTUxMzc3Mzk3MiwtLjQwNTg0NTE1MTM3NzM5NzIsLS43NDE1MzExODU1OTkzOTQ1LC43NDE1MzExODU1OTkzOTQ1LC0uOTQ5MTA3OTEyMzQyNzU4NSwuOTQ5MTA3OTEyMzQyNzU4NV0sWy0uMTgzNDM0NjQyNDk1NjQ5OCwuMTgzNDM0NjQyNDk1NjQ5OCwtLjUyNTUzMjQwOTkxNjMyOSwuNTI1NTMyNDA5OTE2MzI5LC0uNzk2NjY2NDc3NDEzNjI2NywuNzk2NjY2NDc3NDEzNjI2NywtLjk2MDI4OTg1NjQ5NzUzNjMsLjk2MDI4OTg1NjQ5NzUzNjNdLFswLC0uODM2MDMxMTA3MzI2NjM1OCwuODM2MDMxMTA3MzI2NjM1OCwtLjk2ODE2MDIzOTUwNzYyNjEsLjk2ODE2MDIzOTUwNzYyNjEsLS4zMjQyNTM0MjM0MDM4MDg5LC4zMjQyNTM0MjM0MDM4MDg5LC0uNjEzMzcxNDMyNzAwNTkwNCwuNjEzMzcxNDMyNzAwNTkwNF0sWy0uMTQ4ODc0MzM4OTgxNjMxMjIsLjE0ODg3NDMzODk4MTYzMTIyLC0uNDMzMzk1Mzk0MTI5MjQ3MiwuNDMzMzk1Mzk0MTI5MjQ3MiwtLjY3OTQwOTU2ODI5OTAyNDQsLjY3OTQwOTU2ODI5OTAyNDQsLS44NjUwNjMzNjY2ODg5ODQ1LC44NjUwNjMzNjY2ODg5ODQ1LC0uOTczOTA2NTI4NTE3MTcxNywuOTczOTA2NTI4NTE3MTcxN10sWzAsLS4yNjk1NDMxNTU5NTIzNDQ5NiwuMjY5NTQzMTU1OTUyMzQ0OTYsLS41MTkwOTYxMjkyMDY4MTE4LC41MTkwOTYxMjkyMDY4MTE4LC0uNzMwMTUyMDA1NTc0MDQ5NCwuNzMwMTUyMDA1NTc0MDQ5NCwtLjg4NzA2MjU5OTc2ODA5NTMsLjg4NzA2MjU5OTc2ODA5NTMsLS45NzgyMjg2NTgxNDYwNTcsLjk3ODIyODY1ODE0NjA1N10sWy0uMTI1MjMzNDA4NTExNDY4OSwuMTI1MjMzNDA4NTExNDY4OSwtLjM2NzgzMTQ5ODk5ODE4MDIsLjM2NzgzMTQ5ODk5ODE4MDIsLS41ODczMTc5NTQyODY2MTc1LC41ODczMTc5NTQyODY2MTc1LC0uNzY5OTAyNjc0MTk0MzA0NywuNzY5OTAyNjc0MTk0MzA0NywtLjkwNDExNzI1NjM3MDQ3NDksLjkwNDExNzI1NjM3MDQ3NDksLS45ODE1NjA2MzQyNDY3MTkyLC45ODE1NjA2MzQyNDY3MTkyXSxbMCwtLjIzMDQ1ODMxNTk1NTEzNDgsLjIzMDQ1ODMxNTk1NTEzNDgsLS40NDg0OTI3NTEwMzY0NDY4NywuNDQ4NDkyNzUxMDM2NDQ2ODcsLS42NDIzNDkzMzk0NDAzNDAyLC42NDIzNDkzMzk0NDAzNDAyLC0uODAxNTc4MDkwNzMzMzA5OSwuODAxNTc4MDkwNzMzMzA5OSwtLjkxNzU5ODM5OTIyMjk3NzksLjkxNzU5ODM5OTIyMjk3NzksLS45ODQxODMwNTQ3MTg1ODgxLC45ODQxODMwNTQ3MTg1ODgxXSxbLS4xMDgwNTQ5NDg3MDczNDM2NywuMTA4MDU0OTQ4NzA3MzQzNjcsLS4zMTkxMTIzNjg5Mjc4ODk3NCwuMzE5MTEyMzY4OTI3ODg5NzQsLS41MTUyNDg2MzYzNTgxNTQxLC41MTUyNDg2MzYzNTgxNTQxLC0uNjg3MjkyOTA0ODExNjg1NSwuNjg3MjkyOTA0ODExNjg1NSwtLjgyNzIwMTMxNTA2OTc2NSwuODI3MjAxMzE1MDY5NzY1LC0uOTI4NDM0ODgzNjYzNTczNSwuOTI4NDM0ODgzNjYzNTczNSwtLjk4NjI4MzgwODY5NjgxMjMsLjk4NjI4MzgwODY5NjgxMjNdLFswLC0uMjAxMTk0MDkzOTk3NDM0NTEsLjIwMTE5NDA5Mzk5NzQzNDUxLC0uMzk0MTUxMzQ3MDc3NTYzNCwuMzk0MTUxMzQ3MDc3NTYzNCwtLjU3MDk3MjE3MjYwODUzODgsLjU3MDk3MjE3MjYwODUzODgsLS43MjQ0MTc3MzEzNjAxNzAxLC43MjQ0MTc3MzEzNjAxNzAxLC0uODQ4MjA2NTgzNDEwNDI3MiwuODQ4MjA2NTgzNDEwNDI3MiwtLjkzNzI3MzM5MjQwMDcwNiwuOTM3MjczMzkyNDAwNzA2LC0uOTg3OTkyNTE4MDIwNDg1NCwuOTg3OTkyNTE4MDIwNDg1NF0sWy0uMDk1MDEyNTA5ODM3NjM3NDQsLjA5NTAxMjUwOTgzNzYzNzQ0LC0uMjgxNjAzNTUwNzc5MjU4OSwuMjgxNjAzNTUwNzc5MjU4OSwtLjQ1ODAxNjc3NzY1NzIyNzM3LC40NTgwMTY3Nzc2NTcyMjczNywtLjYxNzg3NjI0NDQwMjY0MzgsLjYxNzg3NjI0NDQwMjY0MzgsLS43NTU0MDQ0MDgzNTUwMDMsLjc1NTQwNDQwODM1NTAwMywtLjg2NTYzMTIwMjM4NzgzMTgsLjg2NTYzMTIwMjM4NzgzMTgsLS45NDQ1NzUwMjMwNzMyMzI2LC45NDQ1NzUwMjMwNzMyMzI2LC0uOTg5NDAwOTM0OTkxNjQ5OSwuOTg5NDAwOTM0OTkxNjQ5OV0sWzAsLS4xNzg0ODQxODE0OTU4NDc4NSwuMTc4NDg0MTgxNDk1ODQ3ODUsLS4zNTEyMzE3NjM0NTM4NzYzLC4zNTEyMzE3NjM0NTM4NzYzLC0uNTEyNjkwNTM3MDg2NDc2OSwuNTEyNjkwNTM3MDg2NDc2OSwtLjY1NzY3MTE1OTIxNjY5MDcsLjY1NzY3MTE1OTIxNjY5MDcsLS43ODE1MTQwMDM4OTY4MDE0LC43ODE1MTQwMDM4OTY4MDE0LC0uODgwMjM5MTUzNzI2OTg1OSwuODgwMjM5MTUzNzI2OTg1OSwtLjk1MDY3NTUyMTc2ODc2NzgsLjk1MDY3NTUyMTc2ODc2NzgsLS45OTA1NzU0NzUzMTQ0MTc0LC45OTA1NzU0NzUzMTQ0MTc0XSxbLS4wODQ3NzUwMTMwNDE3MzUzLC4wODQ3NzUwMTMwNDE3MzUzLC0uMjUxODg2MjI1NjkxNTA1NSwuMjUxODg2MjI1NjkxNTA1NSwtLjQxMTc1MTE2MTQ2Mjg0MjYzLC40MTE3NTExNjE0NjI4NDI2MywtLjU1OTc3MDgzMTA3Mzk0NzUsLjU1OTc3MDgzMTA3Mzk0NzUsLS42OTE2ODcwNDMwNjAzNTMyLC42OTE2ODcwNDMwNjAzNTMyLC0uODAzNzA0OTU4OTcyNTIzMSwuODAzNzA0OTU4OTcyNTIzMSwtLjg5MjYwMjQ2NjQ5NzU1NTcsLjg5MjYwMjQ2NjQ5NzU1NTcsLS45NTU4MjM5NDk1NzEzOTc3LC45NTU4MjM5NDk1NzEzOTc3LC0uOTkxNTY1MTY4NDIwOTMwOSwuOTkxNTY1MTY4NDIwOTMwOV0sWzAsLS4xNjAzNTg2NDU2NDAyMjUzNywuMTYwMzU4NjQ1NjQwMjI1MzcsLS4zMTY1NjQwOTk5NjM2Mjk4MywuMzE2NTY0MDk5OTYzNjI5ODMsLS40NjQ1NzA3NDEzNzU5NjA5NCwuNDY0NTcwNzQxMzc1OTYwOTQsLS42MDA1NDUzMDQ2NjE2ODEsLjYwMDU0NTMwNDY2MTY4MSwtLjcyMDk2NjE3NzMzNTIyOTQsLjcyMDk2NjE3NzMzNTIyOTQsLS44MjI3MTQ2NTY1MzcxNDI4LC44MjI3MTQ2NTY1MzcxNDI4LC0uOTAzMTU1OTAzNjE0ODE3OSwuOTAzMTU1OTAzNjE0ODE3OSwtLjk2MDIwODE1MjEzNDgzLC45NjAyMDgxNTIxMzQ4MywtLjk5MjQwNjg0Mzg0MzU4NDQsLjk5MjQwNjg0Mzg0MzU4NDRdLFstLjA3NjUyNjUyMTEzMzQ5NzM0LC4wNzY1MjY1MjExMzM0OTczNCwtLjIyNzc4NTg1MTE0MTY0NTA3LC4yMjc3ODU4NTExNDE2NDUwNywtLjM3MzcwNjA4ODcxNTQxOTU1LC4zNzM3MDYwODg3MTU0MTk1NSwtLjUxMDg2NzAwMTk1MDgyNzEsLjUxMDg2NzAwMTk1MDgyNzEsLS42MzYwNTM2ODA3MjY1MTUsLjYzNjA1MzY4MDcyNjUxNSwtLjc0NjMzMTkwNjQ2MDE1MDgsLjc0NjMzMTkwNjQ2MDE1MDgsLS44MzkxMTY5NzE4MjIyMTg4LC44MzkxMTY5NzE4MjIyMTg4LC0uOTEyMjM0NDI4MjUxMzI2LC45MTIyMzQ0MjgyNTEzMjYsLS45NjM5NzE5MjcyNzc5MTM4LC45NjM5NzE5MjcyNzc5MTM4LC0uOTkzMTI4NTk5MTg1MDk0OSwuOTkzMTI4NTk5MTg1MDk0OV0sWzAsLS4xNDU1NjE4NTQxNjA4OTUxLC4xNDU1NjE4NTQxNjA4OTUxLC0uMjg4MDIxMzE2ODAyNDAxMSwuMjg4MDIxMzE2ODAyNDAxMSwtLjQyNDM0MjEyMDIwNzQzODgsLjQyNDM0MjEyMDIwNzQzODgsLS41NTE2MTg4MzU4ODcyMTk4LC41NTE2MTg4MzU4ODcyMTk4LC0uNjY3MTM4ODA0MTk3NDEyMywuNjY3MTM4ODA0MTk3NDEyMywtLjc2ODQzOTk2MzQ3NTY3NzksLjc2ODQzOTk2MzQ3NTY3NzksLS44NTMzNjMzNjQ1ODMzMTczLC44NTMzNjMzNjQ1ODMzMTczLC0uOTIwMDk5MzM0MTUwNDAwOCwuOTIwMDk5MzM0MTUwNDAwOCwtLjk2NzIyNjgzODU2NjMwNjMsLjk2NzIyNjgzODU2NjMwNjMsLS45OTM3NTIxNzA2MjAzODk1LC45OTM3NTIxNzA2MjAzODk1XSxbLS4wNjk3MzkyNzMzMTk3MjIyMywuMDY5NzM5MjczMzE5NzIyMjMsLS4yMDc4NjA0MjY2ODgyMjEyNywuMjA3ODYwNDI2Njg4MjIxMjcsLS4zNDE5MzU4MjA4OTIwODQyNCwuMzQxOTM1ODIwODkyMDg0MjQsLS40NjkzNTU4Mzc5ODY3NTcsLjQ2OTM1NTgzNzk4Njc1NywtLjU4NzY0MDQwMzUwNjkxMTYsLjU4NzY0MDQwMzUwNjkxMTYsLS42OTQ0ODcyNjMxODY2ODI3LC42OTQ0ODcyNjMxODY2ODI3LC0uNzg3ODE2ODA1OTc5MjA4MSwuNzg3ODE2ODA1OTc5MjA4MSwtLjg2NTgxMjU3NzcyMDMwMDIsLjg2NTgxMjU3NzcyMDMwMDIsLS45MjY5NTY3NzIxODcxNzQsLjkyNjk1Njc3MjE4NzE3NCwtLjk3MDA2MDQ5NzgzNTQyODcsLjk3MDA2MDQ5NzgzNTQyODcsLS45OTQyOTQ1ODU0ODIzOTkyLC45OTQyOTQ1ODU0ODIzOTkyXSxbMCwtLjEzMzI1NjgyNDI5ODQ2NjEsLjEzMzI1NjgyNDI5ODQ2NjEsLS4yNjQxMzU2ODA5NzAzNDQ5NSwuMjY0MTM1NjgwOTcwMzQ0OTUsLS4zOTAzMDEwMzgwMzAyOTA4LC4zOTAzMDEwMzgwMzAyOTA4LC0uNTA5NTAxNDc3ODQ2MDA3NSwuNTA5NTAxNDc3ODQ2MDA3NSwtLjYxOTYwOTg3NTc2MzY0NjEsLjYxOTYwOTg3NTc2MzY0NjEsLS43MTg2NjEzNjMxMzE5NTAyLC43MTg2NjEzNjMxMzE5NTAyLC0uODA0ODg4NDAxNjE4ODM5OSwuODA0ODg4NDAxNjE4ODM5OSwtLjg3Njc1MjM1ODI3MDQ0MTYsLjg3Njc1MjM1ODI3MDQ0MTYsLS45MzI5NzEwODY4MjYwMTYxLC45MzI5NzEwODY4MjYwMTYxLC0uOTcyNTQyNDcxMjE4MTE1MiwuOTcyNTQyNDcxMjE4MTE1MiwtLjk5NDc2OTMzNDk5NzU1MjIsLjk5NDc2OTMzNDk5NzU1MjJdLFstLjA2NDA1Njg5Mjg2MjYwNTYzLC4wNjQwNTY4OTI4NjI2MDU2MywtLjE5MTExODg2NzQ3MzYxNjMsLjE5MTExODg2NzQ3MzYxNjMsLS4zMTUwNDI2Nzk2OTYxNjM0LC4zMTUwNDI2Nzk2OTYxNjM0LC0uNDMzNzkzNTA3NjI2MDQ1MSwuNDMzNzkzNTA3NjI2MDQ1MSwtLjU0NTQyMTQ3MTM4ODgzOTYsLjU0NTQyMTQ3MTM4ODgzOTYsLS42NDgwOTM2NTE5MzY5NzU1LC42NDgwOTM2NTE5MzY5NzU1LC0uNzQwMTI0MTkxNTc4NTU0NCwuNzQwMTI0MTkxNTc4NTU0NCwtLjgyMDAwMTk4NTk3MzkwMywuODIwMDAxOTg1OTczOTAzLC0uODg2NDE1NTI3MDA0NDAxMSwuODg2NDE1NTI3MDA0NDAxMSwtLjkzODI3NDU1MjAwMjczMjgsLjkzODI3NDU1MjAwMjczMjgsLS45NzQ3Mjg1NTU5NzEzMDk1LC45NzQ3Mjg1NTU5NzEzMDk1LC0uOTk1MTg3MjE5OTk3MDIxMywuOTk1MTg3MjE5OTk3MDIxM11dLEw9W1tdLFtdLFsxLDFdLFsuODg4ODg4ODg4ODg4ODg4OCwuNTU1NTU1NTU1NTU1NTU1NiwuNTU1NTU1NTU1NTU1NTU1Nl0sWy42NTIxNDUxNTQ4NjI1NDYxLC42NTIxNDUxNTQ4NjI1NDYxLC4zNDc4NTQ4NDUxMzc0NTM4NSwuMzQ3ODU0ODQ1MTM3NDUzODVdLFsuNTY4ODg4ODg4ODg4ODg4OSwuNDc4NjI4NjcwNDk5MzY2NDcsLjQ3ODYyODY3MDQ5OTM2NjQ3LC4yMzY5MjY4ODUwNTYxODkwOCwuMjM2OTI2ODg1MDU2MTg5MDhdLFsuMzYwNzYxNTczMDQ4MTM4NiwuMzYwNzYxNTczMDQ4MTM4NiwuNDY3OTEzOTM0NTcyNjkxMDQsLjQ2NzkxMzkzNDU3MjY5MTA0LC4xNzEzMjQ0OTIzNzkxNzAzNiwuMTcxMzI0NDkyMzc5MTcwMzZdLFsuNDE3OTU5MTgzNjczNDY5NCwuMzgxODMwMDUwNTA1MTE4OSwuMzgxODMwMDUwNTA1MTE4OSwuMjc5NzA1MzkxNDg5Mjc2NjQsLjI3OTcwNTM5MTQ4OTI3NjY0LC4xMjk0ODQ5NjYxNjg4Njk3LC4xMjk0ODQ5NjYxNjg4Njk3XSxbLjM2MjY4Mzc4MzM3ODM2MiwuMzYyNjgzNzgzMzc4MzYyLC4zMTM3MDY2NDU4Nzc4ODcyNywuMzEzNzA2NjQ1ODc3ODg3MjcsLjIyMjM4MTAzNDQ1MzM3NDQ4LC4yMjIzODEwMzQ0NTMzNzQ0OCwuMTAxMjI4NTM2MjkwMzc2MjYsLjEwMTIyODUzNjI5MDM3NjI2XSxbLjMzMDIzOTM1NTAwMTI1OTgsLjE4MDY0ODE2MDY5NDg1NzQsLjE4MDY0ODE2MDY5NDg1NzQsLjA4MTI3NDM4ODM2MTU3NDQxLC4wODEyNzQzODgzNjE1NzQ0MSwuMzEyMzQ3MDc3MDQwMDAyODYsLjMxMjM0NzA3NzA0MDAwMjg2LC4yNjA2MTA2OTY0MDI5MzU0NCwuMjYwNjEwNjk2NDAyOTM1NDRdLFsuMjk1NTI0MjI0NzE0NzUyODcsLjI5NTUyNDIyNDcxNDc1Mjg3LC4yNjkyNjY3MTkzMDk5OTYzNSwuMjY5MjY2NzE5MzA5OTk2MzUsLjIxOTA4NjM2MjUxNTk4MjA0LC4yMTkwODYzNjI1MTU5ODIwNCwuMTQ5NDUxMzQ5MTUwNTgwNiwuMTQ5NDUxMzQ5MTUwNTgwNiwuMDY2NjcxMzQ0MzA4Njg4MTQsLjA2NjY3MTM0NDMwODY4ODE0XSxbLjI3MjkyNTA4Njc3NzkwMDYsLjI2MjgwNDU0NDUxMDI0NjY1LC4yNjI4MDQ1NDQ1MTAyNDY2NSwuMjMzMTkzNzY0NTkxOTkwNDgsLjIzMzE5Mzc2NDU5MTk5MDQ4LC4xODYyOTAyMTA5Mjc3MzQyNiwuMTg2MjkwMjEwOTI3NzM0MjYsLjEyNTU4MDM2OTQ2NDkwNDYsLjEyNTU4MDM2OTQ2NDkwNDYsLjA1NTY2ODU2NzExNjE3MzY2LC4wNTU2Njg1NjcxMTYxNzM2Nl0sWy4yNDkxNDcwNDU4MTM0MDI3NywuMjQ5MTQ3MDQ1ODEzNDAyNzcsLjIzMzQ5MjUzNjUzODM1NDgsLjIzMzQ5MjUzNjUzODM1NDgsLjIwMzE2NzQyNjcyMzA2NTkyLC4yMDMxNjc0MjY3MjMwNjU5MiwuMTYwMDc4MzI4NTQzMzQ2MjIsLjE2MDA3ODMyODU0MzM0NjIyLC4xMDY5MzkzMjU5OTUzMTg0MywuMTA2OTM5MzI1OTk1MzE4NDMsLjA0NzE3NTMzNjM4NjUxMTgzLC4wNDcxNzUzMzYzODY1MTE4M10sWy4yMzI1NTE1NTMyMzA4NzM5LC4yMjYyODMxODAyNjI4OTcyMywuMjI2MjgzMTgwMjYyODk3MjMsLjIwNzgxNjA0NzUzNjg4ODUsLjIwNzgxNjA0NzUzNjg4ODUsLjE3ODE0NTk4MDc2MTk0NTc0LC4xNzgxNDU5ODA3NjE5NDU3NCwuMTM4ODczNTEwMjE5Nzg3MjUsLjEzODg3MzUxMDIxOTc4NzI1LC4wOTIxMjE0OTk4Mzc3Mjg0NSwuMDkyMTIxNDk5ODM3NzI4NDUsLjA0MDQ4NDAwNDc2NTMxNTg4LC4wNDA0ODQwMDQ3NjUzMTU4OF0sWy4yMTUyNjM4NTM0NjMxNTc4LC4yMTUyNjM4NTM0NjMxNTc4LC4yMDUxOTg0NjM3MjEyOTU2LC4yMDUxOTg0NjM3MjEyOTU2LC4xODU1MzgzOTc0Nzc5Mzc4MiwuMTg1NTM4Mzk3NDc3OTM3ODIsLjE1NzIwMzE2NzE1ODE5MzU1LC4xNTcyMDMxNjcxNTgxOTM1NSwuMTIxNTE4NTcwNjg3OTAzMTksLjEyMTUxODU3MDY4NzkwMzE5LC4wODAxNTgwODcxNTk3NjAyMSwuMDgwMTU4MDg3MTU5NzYwMjEsLjAzNTExOTQ2MDMzMTc1MTg2LC4wMzUxMTk0NjAzMzE3NTE4Nl0sWy4yMDI1NzgyNDE5MjU1NjEzLC4xOTg0MzE0ODUzMjcxMTE1OCwuMTk4NDMxNDg1MzI3MTExNTgsLjE4NjE2MTAwMDAxNTU2MjIsLjE4NjE2MTAwMDAxNTU2MjIsLjE2NjI2OTIwNTgxNjk5MzkyLC4xNjYyNjkyMDU4MTY5OTM5MiwuMTM5NTcwNjc3OTI2MTU0MzIsLjEzOTU3MDY3NzkyNjE1NDMyLC4xMDcxNTkyMjA0NjcxNzE5NCwuMTA3MTU5MjIwNDY3MTcxOTQsLjA3MDM2NjA0NzQ4ODEwODEyLC4wNzAzNjYwNDc0ODgxMDgxMiwuMDMwNzUzMjQxOTk2MTE3MjcsLjAzMDc1MzI0MTk5NjExNzI3XSxbLjE4OTQ1MDYxMDQ1NTA2ODUsLjE4OTQ1MDYxMDQ1NTA2ODUsLjE4MjYwMzQxNTA0NDkyMzU4LC4xODI2MDM0MTUwNDQ5MjM1OCwuMTY5MTU2NTE5Mzk1MDAyNTQsLjE2OTE1NjUxOTM5NTAwMjU0LC4xNDk1OTU5ODg4MTY1NzY3NCwuMTQ5NTk1OTg4ODE2NTc2NzQsLjEyNDYyODk3MTI1NTUzMzg4LC4xMjQ2Mjg5NzEyNTU1MzM4OCwuMDk1MTU4NTExNjgyNDkyNzksLjA5NTE1ODUxMTY4MjQ5Mjc5LC4wNjIyNTM1MjM5Mzg2NDc4OTQsLjA2MjI1MzUyMzkzODY0Nzg5NCwuMDI3MTUyNDU5NDExNzU0MDk2LC4wMjcxNTI0NTk0MTE3NTQwOTZdLFsuMTc5NDQ2NDcwMzU2MjA2NTMsLjE3NjU2MjcwNTM2Njk5MjY0LC4xNzY1NjI3MDUzNjY5OTI2NCwuMTY4MDA0MTAyMTU2NDUwMDQsLjE2ODAwNDEwMjE1NjQ1MDA0LC4xNTQwNDU3NjEwNzY4MTAyOCwuMTU0MDQ1NzYxMDc2ODEwMjgsLjEzNTEzNjM2ODQ2ODUyNTQ4LC4xMzUxMzYzNjg0Njg1MjU0OCwuMTExODgzODQ3MTkzNDAzOTcsLjExMTg4Mzg0NzE5MzQwMzk3LC4wODUwMzYxNDgzMTcxNzkxOCwuMDg1MDM2MTQ4MzE3MTc5MTgsLjA1NTQ1OTUyOTM3Mzk4NzIsLjA1NTQ1OTUyOTM3Mzk4NzIsLjAyNDE0ODMwMjg2ODU0NzkzLC4wMjQxNDgzMDI4Njg1NDc5M10sWy4xNjkxNDIzODI5NjMxNDM2LC4xNjkxNDIzODI5NjMxNDM2LC4xNjQyNzY0ODM3NDU4MzI3MywuMTY0Mjc2NDgzNzQ1ODMyNzMsLjE1NDY4NDY3NTEyNjI2NTI0LC4xNTQ2ODQ2NzUxMjYyNjUyNCwuMTQwNjQyOTE0NjcwNjUwNjUsLjE0MDY0MjkxNDY3MDY1MDY1LC4xMjI1NTUyMDY3MTE0Nzg0NiwuMTIyNTU1MjA2NzExNDc4NDYsLjEwMDk0MjA0NDEwNjI4NzE3LC4xMDA5NDIwNDQxMDYyODcxNywuMDc2NDI1NzMwMjU0ODg5MDUsLjA3NjQyNTczMDI1NDg4OTA1LC4wNDk3MTQ1NDg4OTQ5Njk4LC4wNDk3MTQ1NDg4OTQ5Njk4LC4wMjE2MTYwMTM1MjY0ODMzMSwuMDIxNjE2MDEzNTI2NDgzMzFdLFsuMTYxMDU0NDQ5ODQ4NzgzNywuMTU4OTY4ODQzMzkzOTU0MzQsLjE1ODk2ODg0MzM5Mzk1NDM0LC4xNTI3NjYwNDIwNjU4NTk2NywuMTUyNzY2MDQyMDY1ODU5NjcsLjE0MjYwNjcwMjE3MzYwNjYsLjE0MjYwNjcwMjE3MzYwNjYsLjEyODc1Mzk2MjUzOTMzNjIxLC4xMjg3NTM5NjI1MzkzMzYyMSwuMTExNTY2NjQ1NTQ3MzMzOTksLjExMTU2NjY0NTU0NzMzMzk5LC4wOTE0OTAwMjE2MjI0NSwuMDkxNDkwMDIxNjIyNDUsLjA2OTA0NDU0MjczNzY0MTIzLC4wNjkwNDQ1NDI3Mzc2NDEyMywuMDQ0ODE0MjI2NzY1Njk5NiwuMDQ0ODE0MjI2NzY1Njk5NiwuMDE5NDYxNzg4MjI5NzI2NDc4LC4wMTk0NjE3ODgyMjk3MjY0NzhdLFsuMTUyNzUzMzg3MTMwNzI1ODQsLjE1Mjc1MzM4NzEzMDcyNTg0LC4xNDkxNzI5ODY0NzI2MDM3NCwuMTQ5MTcyOTg2NDcyNjAzNzQsLjE0MjA5NjEwOTMxODM4MjA0LC4xNDIwOTYxMDkzMTgzODIwNCwuMTMxNjg4NjM4NDQ5MTc2NjQsLjEzMTY4ODYzODQ0OTE3NjY0LC4xMTgxOTQ1MzE5NjE1MTg0MSwuMTE4MTk0NTMxOTYxNTE4NDEsLjEwMTkzMDExOTgxNzI0MDQ0LC4xMDE5MzAxMTk4MTcyNDA0NCwuMDgzMjc2NzQxNTc2NzA0NzUsLjA4MzI3Njc0MTU3NjcwNDc1LC4wNjI2NzIwNDgzMzQxMDkwNywuMDYyNjcyMDQ4MzM0MTA5MDcsLjA0MDYwMTQyOTgwMDM4Njk0LC4wNDA2MDE0Mjk4MDAzODY5NCwuMDE3NjE0MDA3MTM5MTUyMTE4LC4wMTc2MTQwMDcxMzkxNTIxMThdLFsuMTQ2MDgxMTMzNjQ5NjkwNDEsLjE0NDUyNDQwMzk4OTk3MDA1LC4xNDQ1MjQ0MDM5ODk5NzAwNSwuMTM5ODg3Mzk0NzkxMDczMTUsLjEzOTg4NzM5NDc5MTA3MzE1LC4xMzIyNjg5Mzg2MzMzMzc0NywuMTMyMjY4OTM4NjMzMzM3NDcsLjEyMTgzMTQxNjA1MzcyODUzLC4xMjE4MzE0MTYwNTM3Mjg1MywuMTA4Nzk3Mjk5MTY3MTQ4MzgsLjEwODc5NzI5OTE2NzE0ODM4LC4wOTM0NDQ0MjM0NTYwMzM4NiwuMDkzNDQ0NDIzNDU2MDMzODYsLjA3NjEwMDExMzYyODM3OTMsLjA3NjEwMDExMzYyODM3OTMsLjA1NzEzNDQyNTQyNjg1NzIwNSwuMDU3MTM0NDI1NDI2ODU3MjA1LC4wMzY5NTM3ODk3NzA4NTI0OTQsLjAzNjk1Mzc4OTc3MDg1MjQ5NCwuMDE2MDE3MjI4MjU3Nzc0MzM1LC4wMTYwMTcyMjgyNTc3NzQzMzVdLFsuMTM5MjUxODcyODU1NjMxOTgsLjEzOTI1MTg3Mjg1NTYzMTk4LC4xMzY1NDE0OTgzNDYwMTUxNywuMTM2NTQxNDk4MzQ2MDE1MTcsLjEzMTE3MzUwNDc4NzA2MjM4LC4xMzExNzM1MDQ3ODcwNjIzOCwuMTIzMjUyMzc2ODEwNTEyNDIsLjEyMzI1MjM3NjgxMDUxMjQyLC4xMTI5MzIyOTYwODA1MzkyMiwuMTEyOTMyMjk2MDgwNTM5MjIsLjEwMDQxNDE0NDQ0Mjg4MDk2LC4xMDA0MTQxNDQ0NDI4ODA5NiwuMDg1OTQxNjA2MjE3MDY3NzMsLjA4NTk0MTYwNjIxNzA2NzczLC4wNjk3OTY0Njg0MjQ1MjA0OSwuMDY5Nzk2NDY4NDI0NTIwNDksLjA1MjI5MzMzNTE1MjY4MzI4NiwuMDUyMjkzMzM1MTUyNjgzMjg2LC4wMzM3NzQ5MDE1ODQ4MTQxNSwuMDMzNzc0OTAxNTg0ODE0MTUsLjAxNDYyNzk5NTI5ODI3MjIsLjAxNDYyNzk5NTI5ODI3MjJdLFsuMTMzNjU0NTcyMTg2MTA2MTksLjEzMjQ2MjAzOTQwNDY5NjYsLjEzMjQ2MjAzOTQwNDY5NjYsLjEyODkwNTcyMjE4ODA4MjE2LC4xMjg5MDU3MjIxODgwODIxNiwuMTIzMDQ5MDg0MzA2NzI5NTMsLjEyMzA0OTA4NDMwNjcyOTUzLC4xMTQ5OTY2NDAyMjI0MTEzNiwuMTE0OTk2NjQwMjIyNDExMzYsLjEwNDg5MjA5MTQ2NDU0MTQxLC4xMDQ4OTIwOTE0NjQ1NDE0MSwuMDkyOTE1NzY2MDYwMDM1MTUsLjA5MjkxNTc2NjA2MDAzNTE1LC4wNzkyODE0MTE3NzY3MTg5NSwuMDc5MjgxNDExNzc2NzE4OTUsLjA2NDIzMjQyMTQwODUyNTg1LC4wNjQyMzI0MjE0MDg1MjU4NSwuMDQ4MDM3NjcxNzMxMDg0NjcsLjA0ODAzNzY3MTczMTA4NDY3LC4wMzA5ODgwMDU4NTY5Nzk0NDUsLjAzMDk4ODAwNTg1Njk3OTQ0NSwuMDEzNDExODU5NDg3MTQxNzcxLC4wMTM0MTE4NTk0ODcxNDE3NzFdLFsuMTI3OTM4MTk1MzQ2NzUyMTYsLjEyNzkzODE5NTM0Njc1MjE2LC4xMjU4Mzc0NTYzNDY4MjgzLC4xMjU4Mzc0NTYzNDY4MjgzLC4xMjE2NzA0NzI5Mjc4MDMzOSwuMTIxNjcwNDcyOTI3ODAzMzksLjExNTUwNTY2ODA1MzcyNTYsLjExNTUwNTY2ODA1MzcyNTYsLjEwNzQ0NDI3MDExNTk2NTYzLC4xMDc0NDQyNzAxMTU5NjU2MywuMDk3NjE4NjUyMTA0MTEzODgsLjA5NzYxODY1MjEwNDExMzg4LC4wODYxOTAxNjE1MzE5NTMyNywuMDg2MTkwMTYxNTMxOTUzMjcsLjA3MzM0NjQ4MTQxMTA4MDMsLjA3MzM0NjQ4MTQxMTA4MDMsLjA1OTI5ODU4NDkxNTQzNjc4LC4wNTkyOTg1ODQ5MTU0MzY3OCwuMDQ0Mjc3NDM4ODE3NDE5ODEsLjA0NDI3NzQzODgxNzQxOTgxLC4wMjg1MzEzODg2Mjg5MzM2NjMsLjAyODUzMTM4ODYyODkzMzY2MywuMDEyMzQxMjI5Nzk5OTg3MiwuMDEyMzQxMjI5Nzk5OTg3Ml1dLEE9W1sxXSxbMSwxXSxbMSwyLDFdLFsxLDMsMywxXV0sbT1mdW5jdGlvbih0LG4sZSl7cmV0dXJue3g6KDEtZSkqKDEtZSkqKDEtZSkqdFswXSszKigxLWUpKigxLWUpKmUqdFsxXSszKigxLWUpKmUqZSp0WzJdK2UqZSplKnRbM10seTooMS1lKSooMS1lKSooMS1lKSpuWzBdKzMqKDEtZSkqKDEtZSkqZSpuWzFdKzMqKDEtZSkqZSplKm5bMl0rZSplKmUqblszXX19LGI9ZnVuY3Rpb24odCxuLGUpe3JldHVybiBUKFszKih0WzFdLXRbMF0pLDMqKHRbMl0tdFsxXSksMyoodFszXS10WzJdKV0sWzMqKG5bMV0tblswXSksMyooblsyXS1uWzFdKSwzKihuWzNdLW5bMl0pXSxlKX0sUD1mdW5jdGlvbih0LG4sZSl7dmFyIGkscixoO2k9ZS8yLHI9MDtmb3IodmFyIHM9MDtzPDIwO3MrKyloPWkqd1syMF1bc10raSxyKz1MWzIwXVtzXSpfKHQsbixoKTtyZXR1cm4gaSpyfSxUPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm57eDooMS1lKSooMS1lKSp0WzBdKzIqKDEtZSkqZSp0WzFdK2UqZSp0WzJdLHk6KDEtZSkqKDEtZSkqblswXSsyKigxLWUpKmUqblsxXStlKmUqblsyXX19LHE9ZnVuY3Rpb24odCxuLGUpe3ZvaWQgMD09PWUmJihlPTEpO3ZhciBpPXRbMF0tMip0WzFdK3RbMl0scj1uWzBdLTIqblsxXStuWzJdLGg9Mip0WzFdLTIqdFswXSxzPTIqblsxXS0yKm5bMF0sYT00KihpKmkrcipyKSxvPTQqKGkqaCtyKnMpLGc9aCpoK3MqcztpZigwPT09YSlyZXR1cm4gZSpNYXRoLnNxcnQoTWF0aC5wb3codFsyXS10WzBdLDIpK01hdGgucG93KG5bMl0tblswXSwyKSk7dmFyIGM9by8oMiphKSx1PWUrYyxsPWcvYS1jKmMsZj11KnUrbD4wP01hdGguc3FydCh1KnUrbCk6MCxwPWMqYytsPjA_TWF0aC5zcXJ0KGMqYytsKTowLHk9YytNYXRoLnNxcnQoYypjK2wpIT09MD9sKk1hdGgubG9nKE1hdGguYWJzKCh1K2YpLyhjK3ApKSk6MDtyZXR1cm4gTWF0aC5zcXJ0KGEpLzIqKHUqZi1jKnAreSl9LE49ZnVuY3Rpb24odCxuLGUpe3JldHVybnt4OjIqKDEtZSkqKHRbMV0tdFswXSkrMiplKih0WzJdLXRbMV0pLHk6MiooMS1lKSooblsxXS1uWzBdKSsyKmUqKG5bMl0tblsxXSl9fTtmdW5jdGlvbiBfKHQsbixlKXt2YXIgaT1PKDEsZSx0KSxyPU8oMSxlLG4pLGg9aSppK3IqcjtyZXR1cm4gTWF0aC5zcXJ0KGgpfXZhciBPPWZ1bmN0aW9uIHQobixlLGkpe3ZhciByLGgscz1pLmxlbmd0aC0xO2lmKDA9PT1zKXJldHVybiAwO2lmKDA9PT1uKXtoPTA7Zm9yKHZhciBhPTA7YTw9czthKyspaCs9QVtzXVthXSpNYXRoLnBvdygxLWUscy1hKSpNYXRoLnBvdyhlLGEpKmlbYV07cmV0dXJuIGh9cj1uZXcgQXJyYXkocyk7Zm9yKHZhciBvPTA7bzxzO28rKylyW29dPXMqKGlbbysxXS1pW29dKTtyZXR1cm4gdChuLTEsZSxyKX0sUz1mdW5jdGlvbih0LG4sZSl7Zm9yKHZhciBpPTEscj10L24saD0odC1lKHIpKS9uLHM9MDtpPi4wMDE7KXt2YXIgYT1lKHIraCksbz1NYXRoLmFicyh0LWEpL247aWYobzxpKWk9byxyKz1oO2Vsc2V7dmFyIGc9ZShyLWgpLGM9TWF0aC5hYnModC1nKS9uO2M8aT8oaT1jLHItPWgpOmgvPTJ9aWYoKytzPjUwMClicmVha31yZXR1cm4gcn0sQz1mdW5jdGlvbih0LG4sZSxpLGgscyxhLG8pe3ZhciBnPXRoaXM7cih0aGlzLCJhIix2b2lkIDApLHIodGhpcywiYiIsdm9pZCAwKSxyKHRoaXMsImMiLHZvaWQgMCkscih0aGlzLCJkIix2b2lkIDApLHIodGhpcywibGVuZ3RoIix2b2lkIDApLHIodGhpcywiZ2V0QXJjTGVuZ3RoIix2b2lkIDApLHIodGhpcywiZ2V0UG9pbnQiLHZvaWQgMCkscih0aGlzLCJnZXREZXJpdmF0aXZlIix2b2lkIDApLHIodGhpcywiZ2V0VG90YWxMZW5ndGgiLChmdW5jdGlvbigpe3JldHVybiBnLmxlbmd0aH0pKSxyKHRoaXMsImdldFBvaW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgbj1bZy5hLngsZy5iLngsZy5jLngsZy5kLnhdLGU9W2cuYS55LGcuYi55LGcuYy55LGcuZC55XSxpPVModCxnLmxlbmd0aCwoZnVuY3Rpb24odCl7cmV0dXJuIGcuZ2V0QXJjTGVuZ3RoKG4sZSx0KX0pKTtyZXR1cm4gZy5nZXRQb2ludChuLGUsaSl9KSkscih0aGlzLCJnZXRUYW5nZW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgbj1bZy5hLngsZy5iLngsZy5jLngsZy5kLnhdLGU9W2cuYS55LGcuYi55LGcuYy55LGcuZC55XSxpPVModCxnLmxlbmd0aCwoZnVuY3Rpb24odCl7cmV0dXJuIGcuZ2V0QXJjTGVuZ3RoKG4sZSx0KX0pKSxyPWcuZ2V0RGVyaXZhdGl2ZShuLGUsaSksaD1NYXRoLnNxcnQoci54KnIueCtyLnkqci55KTtyZXR1cm4gaD4wP3t4OnIueC9oLHk6ci55L2h9Ont4OjAseTowfX0pKSxyKHRoaXMsImdldFByb3BlcnRpZXNBdExlbmd0aCIsKGZ1bmN0aW9uKHQpe3ZhciBuLGU9W2cuYS54LGcuYi54LGcuYy54LGcuZC54XSxpPVtnLmEueSxnLmIueSxnLmMueSxnLmQueV0scj1TKHQsZy5sZW5ndGgsKGZ1bmN0aW9uKHQpe3JldHVybiBnLmdldEFyY0xlbmd0aChlLGksdCl9KSksaD1nLmdldERlcml2YXRpdmUoZSxpLHIpLHM9TWF0aC5zcXJ0KGgueCpoLngraC55KmgueSk7bj1zPjA_e3g6aC54L3MseTpoLnkvc306e3g6MCx5OjB9O3ZhciBhPWcuZ2V0UG9pbnQoZSxpLHIpO3JldHVybnt4OmEueCx5OmEueSx0YW5nZW50WDpuLngsdGFuZ2VudFk6bi55fX0pKSxyKHRoaXMsImdldEMiLChmdW5jdGlvbigpe3JldHVybiBnLmN9KSkscih0aGlzLCJnZXREIiwoZnVuY3Rpb24oKXtyZXR1cm4gZy5kfSkpLHRoaXMuYT17eDp0LHk6bn0sdGhpcy5iPXt4OmUseTppfSx0aGlzLmM9e3g6aCx5OnN9LHZvaWQgMCE9PWEmJnZvaWQgMCE9PW8_KHRoaXMuZ2V0QXJjTGVuZ3RoPVAsdGhpcy5nZXRQb2ludD1tLHRoaXMuZ2V0RGVyaXZhdGl2ZT1iLHRoaXMuZD17eDphLHk6b30pOih0aGlzLmdldEFyY0xlbmd0aD1xLHRoaXMuZ2V0UG9pbnQ9VCx0aGlzLmdldERlcml2YXRpdmU9Tix0aGlzLmQ9e3g6MCx5OjB9KSx0aGlzLmxlbmd0aD10aGlzLmdldEFyY0xlbmd0aChbdGhpcy5hLngsdGhpcy5iLngsdGhpcy5jLngsdGhpcy5kLnhdLFt0aGlzLmEueSx0aGlzLmIueSx0aGlzLmMueSx0aGlzLmQueV0sMSl9LEU9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyKHRoaXMsImxlbmd0aCIsMCkscih0aGlzLCJwYXJ0aWFsX2xlbmd0aHMiLFtdKSxyKHRoaXMsImZ1bmN0aW9ucyIsW10pLHIodGhpcywiaW5pdGlhbF9wb2ludCIsbnVsbCkscih0aGlzLCJnZXRQYXJ0QXRMZW5ndGgiLChmdW5jdGlvbih0KXt0PDA_dD0wOnQ-bi5sZW5ndGgmJih0PW4ubGVuZ3RoKTtmb3IodmFyIGU9bi5wYXJ0aWFsX2xlbmd0aHMubGVuZ3RoLTE7bi5wYXJ0aWFsX2xlbmd0aHNbZV0-PXQmJmU-MDspZS0tO3JldHVybiBlKysse2ZyYWN0aW9uOnQtbi5wYXJ0aWFsX2xlbmd0aHNbZS0xXSxpOmV9fSkpLHIodGhpcywiZ2V0VG90YWxMZW5ndGgiLChmdW5jdGlvbigpe3JldHVybiBuLmxlbmd0aH0pKSxyKHRoaXMsImdldFBvaW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgZT1uLmdldFBhcnRBdExlbmd0aCh0KSxpPW4uZnVuY3Rpb25zW2UuaV07aWYoaSlyZXR1cm4gaS5nZXRQb2ludEF0TGVuZ3RoKGUuZnJhY3Rpb24pO2lmKG4uaW5pdGlhbF9wb2ludClyZXR1cm4gbi5pbml0aWFsX3BvaW50O3Rocm93IG5ldyBFcnJvcigiV3JvbmcgZnVuY3Rpb24gYXQgdGhpcyBwYXJ0LiIpfSkpLHIodGhpcywiZ2V0VGFuZ2VudEF0TGVuZ3RoIiwoZnVuY3Rpb24odCl7dmFyIGU9bi5nZXRQYXJ0QXRMZW5ndGgodCksaT1uLmZ1bmN0aW9uc1tlLmldO2lmKGkpcmV0dXJuIGkuZ2V0VGFuZ2VudEF0TGVuZ3RoKGUuZnJhY3Rpb24pO2lmKG4uaW5pdGlhbF9wb2ludClyZXR1cm57eDowLHk6MH07dGhyb3cgbmV3IEVycm9yKCJXcm9uZyBmdW5jdGlvbiBhdCB0aGlzIHBhcnQuIil9KSkscih0aGlzLCJnZXRQcm9wZXJ0aWVzQXRMZW5ndGgiLChmdW5jdGlvbih0KXt2YXIgZT1uLmdldFBhcnRBdExlbmd0aCh0KSxpPW4uZnVuY3Rpb25zW2UuaV07aWYoaSlyZXR1cm4gaS5nZXRQcm9wZXJ0aWVzQXRMZW5ndGgoZS5mcmFjdGlvbik7aWYobi5pbml0aWFsX3BvaW50KXJldHVybnt4Om4uaW5pdGlhbF9wb2ludC54LHk6bi5pbml0aWFsX3BvaW50LnksdGFuZ2VudFg6MCx0YW5nZW50WTowfTt0aHJvdyBuZXcgRXJyb3IoIldyb25nIGZ1bmN0aW9uIGF0IHRoaXMgcGFydC4iKX0pKSxyKHRoaXMsImdldFBhcnRzIiwoZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8bi5mdW5jdGlvbnMubGVuZ3RoO2UrKylpZihudWxsIT09bi5mdW5jdGlvbnNbZV0pe24uZnVuY3Rpb25zW2VdPW4uZnVuY3Rpb25zW2VdO3ZhciBpPXtzdGFydDpuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKDApLGVuZDpuLmZ1bmN0aW9uc1tlXS5nZXRQb2ludEF0TGVuZ3RoKG4ucGFydGlhbF9sZW5ndGhzW2VdLW4ucGFydGlhbF9sZW5ndGhzW2UtMV0pLGxlbmd0aDpuLnBhcnRpYWxfbGVuZ3Roc1tlXS1uLnBhcnRpYWxfbGVuZ3Roc1tlLTFdLGdldFBvaW50QXRMZW5ndGg6bi5mdW5jdGlvbnNbZV0uZ2V0UG9pbnRBdExlbmd0aCxnZXRUYW5nZW50QXRMZW5ndGg6bi5mdW5jdGlvbnNbZV0uZ2V0VGFuZ2VudEF0TGVuZ3RoLGdldFByb3BlcnRpZXNBdExlbmd0aDpuLmZ1bmN0aW9uc1tlXS5nZXRQcm9wZXJ0aWVzQXRMZW5ndGh9O3QucHVzaChpKX1yZXR1cm4gdH0pKTtmb3IodmFyIGUsaT1BcnJheS5pc0FycmF5KHQpP3Q6ZnVuY3Rpb24odCl7dmFyIG49KHQmJnQubGVuZ3RoPjA_dDoiTTAsMCIpLm1hdGNoKG8pO2lmKCFuKXRocm93IG5ldyBFcnJvcigiTm8gcGF0aCBlbGVtZW50cyBmb3VuZCBpbiBzdHJpbmcgIi5jb25jYXQodCkpO3JldHVybiBuLnJlZHVjZSgoZnVuY3Rpb24odCxuKXt2YXIgZT1uLmNoYXJBdCgwKSxpPWUudG9Mb3dlckNhc2UoKSxyPWMobi5zdWJzdHIoMSkpO2ZvcigibSI9PT1pJiZyLmxlbmd0aD4yJiYodC5wdXNoKFtlXS5jb25jYXQoaChyLnNwbGljZSgwLDIpKSkpLGk9ImwiLGU9Im0iPT09ZT8ibCI6IkwiKTtyLmxlbmd0aD49MDspe2lmKHIubGVuZ3RoPT09YVtpXSl7dC5wdXNoKFtlXS5jb25jYXQoaChyLnNwbGljZSgwLGFbaV0pKSkpO2JyZWFrfWlmKHIubGVuZ3RoPGFbaV0pdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgcGF0aCBkYXRhOiAiJy5jb25jYXQoZSwnIiBtdXN0IGhhdmUgJykuY29uY2F0KGFbaV0sIiBlbGVtZW50cyBhbmQgaGFzICIpLmNvbmNhdChyLmxlbmd0aCwiOiAiKS5jb25jYXQobikpO3QucHVzaChbZV0uY29uY2F0KGgoci5zcGxpY2UoMCxhW2ldKSkpKX1yZXR1cm4gdH0pLFtdKX0odCkscz1bMCwwXSxnPVswLDBdLGY9WzAsMF0scD0wO3A8aS5sZW5ndGg7cCsrKXtpZigiTSI9PT1pW3BdWzBdKWY9WyhzPVtpW3BdWzFdLGlbcF1bMl1dKVswXSxzWzFdXSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG51bGwpLDA9PT1wJiYodGhpcy5pbml0aWFsX3BvaW50PXt4OmlbcF1bMV0seTppW3BdWzJdfSk7ZWxzZSBpZigibSI9PT1pW3BdWzBdKWY9WyhzPVtpW3BdWzFdK3NbMF0saVtwXVsyXStzWzFdXSlbMF0sc1sxXV0sdGhpcy5mdW5jdGlvbnMucHVzaChudWxsKTtlbHNlIGlmKCJMIj09PWlbcF1bMF0pdGhpcy5sZW5ndGgrPU1hdGguc3FydChNYXRoLnBvdyhzWzBdLWlbcF1bMV0sMikrTWF0aC5wb3coc1sxXS1pW3BdWzJdLDIpKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0saVtwXVsxXSxzWzFdLGlbcF1bMl0pKSxzPVtpW3BdWzFdLGlbcF1bMl1dO2Vsc2UgaWYoImwiPT09aVtwXVswXSl0aGlzLmxlbmd0aCs9TWF0aC5zcXJ0KE1hdGgucG93KGlbcF1bMV0sMikrTWF0aC5wb3coaVtwXVsyXSwyKSksdGhpcy5mdW5jdGlvbnMucHVzaChuZXcgdShzWzBdLGlbcF1bMV0rc1swXSxzWzFdLGlbcF1bMl0rc1sxXSkpLHM9W2lbcF1bMV0rc1swXSxpW3BdWzJdK3NbMV1dO2Vsc2UgaWYoIkgiPT09aVtwXVswXSl0aGlzLmxlbmd0aCs9TWF0aC5hYnMoc1swXS1pW3BdWzFdKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0saVtwXVsxXSxzWzFdLHNbMV0pKSxzWzBdPWlbcF1bMV07ZWxzZSBpZigiaCI9PT1pW3BdWzBdKXRoaXMubGVuZ3RoKz1NYXRoLmFicyhpW3BdWzFdKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0sc1swXStpW3BdWzFdLHNbMV0sc1sxXSkpLHNbMF09aVtwXVsxXStzWzBdO2Vsc2UgaWYoIlYiPT09aVtwXVswXSl0aGlzLmxlbmd0aCs9TWF0aC5hYnMoc1sxXS1pW3BdWzFdKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0sc1swXSxzWzFdLGlbcF1bMV0pKSxzWzFdPWlbcF1bMV07ZWxzZSBpZigidiI9PT1pW3BdWzBdKXRoaXMubGVuZ3RoKz1NYXRoLmFicyhpW3BdWzFdKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKG5ldyB1KHNbMF0sc1swXSxzWzFdLHNbMV0raVtwXVsxXSkpLHNbMV09aVtwXVsxXStzWzFdO2Vsc2UgaWYoInoiPT09aVtwXVswXXx8IloiPT09aVtwXVswXSl0aGlzLmxlbmd0aCs9TWF0aC5zcXJ0KE1hdGgucG93KGZbMF0tc1swXSwyKStNYXRoLnBvdyhmWzFdLXNbMV0sMikpLHRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSxmWzBdLHNbMV0sZlsxXSkpLHM9W2ZbMF0sZlsxXV07ZWxzZSBpZigiQyI9PT1pW3BdWzBdKWU9bmV3IEMoc1swXSxzWzFdLGlbcF1bMV0saVtwXVsyXSxpW3BdWzNdLGlbcF1bNF0saVtwXVs1XSxpW3BdWzZdKSx0aGlzLmxlbmd0aCs9ZS5nZXRUb3RhbExlbmd0aCgpLHM9W2lbcF1bNV0saVtwXVs2XV0sdGhpcy5mdW5jdGlvbnMucHVzaChlKTtlbHNlIGlmKCJjIj09PWlbcF1bMF0pKGU9bmV3IEMoc1swXSxzWzFdLHNbMF0raVtwXVsxXSxzWzFdK2lbcF1bMl0sc1swXStpW3BdWzNdLHNbMV0raVtwXVs0XSxzWzBdK2lbcF1bNV0sc1sxXStpW3BdWzZdKSkuZ2V0VG90YWxMZW5ndGgoKT4wPyh0aGlzLmxlbmd0aCs9ZS5nZXRUb3RhbExlbmd0aCgpLHRoaXMuZnVuY3Rpb25zLnB1c2goZSkscz1baVtwXVs1XStzWzBdLGlbcF1bNl0rc1sxXV0pOnRoaXMuZnVuY3Rpb25zLnB1c2gobmV3IHUoc1swXSxzWzBdLHNbMV0sc1sxXSkpO2Vsc2UgaWYoIlMiPT09aVtwXVswXSl7aWYocD4wJiZbIkMiLCJjIiwiUyIsInMiXS5pbmRleE9mKGlbcC0xXVswXSk-LTEpe2lmKGUpe3ZhciB5PWUuZ2V0QygpO2U9bmV3IEMoc1swXSxzWzFdLDIqc1swXS15LngsMipzWzFdLXkueSxpW3BdWzFdLGlbcF1bMl0saVtwXVszXSxpW3BdWzRdKX19ZWxzZSBlPW5ldyBDKHNbMF0sc1sxXSxzWzBdLHNbMV0saVtwXVsxXSxpW3BdWzJdLGlbcF1bM10saVtwXVs0XSk7ZSYmKHRoaXMubGVuZ3RoKz1lLmdldFRvdGFsTGVuZ3RoKCkscz1baVtwXVszXSxpW3BdWzRdXSx0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpKX1lbHNlIGlmKCJzIj09PWlbcF1bMF0pe2lmKHA-MCYmWyJDIiwiYyIsIlMiLCJzIl0uaW5kZXhPZihpW3AtMV1bMF0pPi0xKXtpZihlKXt2YXIgeD1lLmdldEMoKSx2PWUuZ2V0RCgpO2U9bmV3IEMoc1swXSxzWzFdLHNbMF0rdi54LXgueCxzWzFdK3YueS14Lnksc1swXStpW3BdWzFdLHNbMV0raVtwXVsyXSxzWzBdK2lbcF1bM10sc1sxXStpW3BdWzRdKX19ZWxzZSBlPW5ldyBDKHNbMF0sc1sxXSxzWzBdLHNbMV0sc1swXStpW3BdWzFdLHNbMV0raVtwXVsyXSxzWzBdK2lbcF1bM10sc1sxXStpW3BdWzRdKTtlJiYodGhpcy5sZW5ndGgrPWUuZ2V0VG90YWxMZW5ndGgoKSxzPVtpW3BdWzNdK3NbMF0saVtwXVs0XStzWzFdXSx0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpKX1lbHNlIGlmKCJRIj09PWlbcF1bMF0pe2lmKHNbMF09PWlbcF1bMV0mJnNbMV09PWlbcF1bMl0pe3ZhciBkPW5ldyB1KGlbcF1bMV0saVtwXVszXSxpW3BdWzJdLGlbcF1bNF0pO3RoaXMubGVuZ3RoKz1kLmdldFRvdGFsTGVuZ3RoKCksdGhpcy5mdW5jdGlvbnMucHVzaChkKX1lbHNlIGU9bmV3IEMoc1swXSxzWzFdLGlbcF1bMV0saVtwXVsyXSxpW3BdWzNdLGlbcF1bNF0sdm9pZCAwLHZvaWQgMCksdGhpcy5sZW5ndGgrPWUuZ2V0VG90YWxMZW5ndGgoKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpO3M9W2lbcF1bM10saVtwXVs0XV0sZz1baVtwXVsxXSxpW3BdWzJdXX1lbHNlIGlmKCJxIj09PWlbcF1bMF0pe2lmKDAhPWlbcF1bMV18fDAhPWlbcF1bMl0pZT1uZXcgQyhzWzBdLHNbMV0sc1swXStpW3BdWzFdLHNbMV0raVtwXVsyXSxzWzBdK2lbcF1bM10sc1sxXStpW3BdWzRdLHZvaWQgMCx2b2lkIDApLHRoaXMubGVuZ3RoKz1lLmdldFRvdGFsTGVuZ3RoKCksdGhpcy5mdW5jdGlvbnMucHVzaChlKTtlbHNle3ZhciBNPW5ldyB1KHNbMF0raVtwXVsxXSxzWzBdK2lbcF1bM10sc1sxXStpW3BdWzJdLHNbMV0raVtwXVs0XSk7dGhpcy5sZW5ndGgrPU0uZ2V0VG90YWxMZW5ndGgoKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKE0pfWc9W3NbMF0raVtwXVsxXSxzWzFdK2lbcF1bMl1dLHM9W2lbcF1bM10rc1swXSxpW3BdWzRdK3NbMV1dfWVsc2UgaWYoIlQiPT09aVtwXVswXSl7aWYocD4wJiZbIlEiLCJxIiwiVCIsInQiXS5pbmRleE9mKGlbcC0xXVswXSk-LTEpZT1uZXcgQyhzWzBdLHNbMV0sMipzWzBdLWdbMF0sMipzWzFdLWdbMV0saVtwXVsxXSxpW3BdWzJdLHZvaWQgMCx2b2lkIDApLHRoaXMuZnVuY3Rpb25zLnB1c2goZSksdGhpcy5sZW5ndGgrPWUuZ2V0VG90YWxMZW5ndGgoKTtlbHNle3ZhciB3PW5ldyB1KHNbMF0saVtwXVsxXSxzWzFdLGlbcF1bMl0pO3RoaXMuZnVuY3Rpb25zLnB1c2godyksdGhpcy5sZW5ndGgrPXcuZ2V0VG90YWxMZW5ndGgoKX1nPVsyKnNbMF0tZ1swXSwyKnNbMV0tZ1sxXV0scz1baVtwXVsxXSxpW3BdWzJdXX1lbHNlIGlmKCJ0Ij09PWlbcF1bMF0pe2lmKHA-MCYmWyJRIiwicSIsIlQiLCJ0Il0uaW5kZXhPZihpW3AtMV1bMF0pPi0xKWU9bmV3IEMoc1swXSxzWzFdLDIqc1swXS1nWzBdLDIqc1sxXS1nWzFdLHNbMF0raVtwXVsxXSxzWzFdK2lbcF1bMl0sdm9pZCAwLHZvaWQgMCksdGhpcy5sZW5ndGgrPWUuZ2V0VG90YWxMZW5ndGgoKSx0aGlzLmZ1bmN0aW9ucy5wdXNoKGUpO2Vsc2V7dmFyIEw9bmV3IHUoc1swXSxzWzBdK2lbcF1bMV0sc1sxXSxzWzFdK2lbcF1bMl0pO3RoaXMubGVuZ3RoKz1MLmdldFRvdGFsTGVuZ3RoKCksdGhpcy5mdW5jdGlvbnMucHVzaChMKX1nPVsyKnNbMF0tZ1swXSwyKnNbMV0tZ1sxXV0scz1baVtwXVsxXStzWzBdLGlbcF1bMl0rc1sxXV19ZWxzZSBpZigiQSI9PT1pW3BdWzBdKXt2YXIgQT1uZXcgbChzWzBdLHNbMV0saVtwXVsxXSxpW3BdWzJdLGlbcF1bM10sMT09PWlbcF1bNF0sMT09PWlbcF1bNV0saVtwXVs2XSxpW3BdWzddKTt0aGlzLmxlbmd0aCs9QS5nZXRUb3RhbExlbmd0aCgpLHM9W2lbcF1bNl0saVtwXVs3XV0sdGhpcy5mdW5jdGlvbnMucHVzaChBKX1lbHNlIGlmKCJhIj09PWlbcF1bMF0pe3ZhciBtPW5ldyBsKHNbMF0sc1sxXSxpW3BdWzFdLGlbcF1bMl0saVtwXVszXSwxPT09aVtwXVs0XSwxPT09aVtwXVs1XSxzWzBdK2lbcF1bNl0sc1sxXStpW3BdWzddKTt0aGlzLmxlbmd0aCs9bS5nZXRUb3RhbExlbmd0aCgpLHM9W3NbMF0raVtwXVs2XSxzWzFdK2lbcF1bN11dLHRoaXMuZnVuY3Rpb25zLnB1c2gobSl9dGhpcy5wYXJ0aWFsX2xlbmd0aHMucHVzaCh0aGlzLmxlbmd0aCl9fSxqPWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7aWYocih0aGlzLCJpbnN0Iix2b2lkIDApLHIodGhpcywiZ2V0VG90YWxMZW5ndGgiLChmdW5jdGlvbigpe3JldHVybiBuLmluc3QuZ2V0VG90YWxMZW5ndGgoKX0pKSxyKHRoaXMsImdldFBvaW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXtyZXR1cm4gbi5pbnN0LmdldFBvaW50QXRMZW5ndGgodCl9KSkscih0aGlzLCJnZXRUYW5nZW50QXRMZW5ndGgiLChmdW5jdGlvbih0KXtyZXR1cm4gbi5pbnN0LmdldFRhbmdlbnRBdExlbmd0aCh0KX0pKSxyKHRoaXMsImdldFByb3BlcnRpZXNBdExlbmd0aCIsKGZ1bmN0aW9uKHQpe3JldHVybiBuLmluc3QuZ2V0UHJvcGVydGllc0F0TGVuZ3RoKHQpfSkpLHIodGhpcywiZ2V0UGFydHMiLChmdW5jdGlvbigpe3JldHVybiBuLmluc3QuZ2V0UGFydHMoKX0pKSx0aGlzLmluc3Q9bmV3IEUodCksISh0aGlzIGluc3RhbmNlb2YgaikpcmV0dXJuIG5ldyBqKHQpfTtjb25zdCBrPTFlNDtsZXQgST0hMTtvbm1lc3NhZ2U9KHtkYXRhOnR9KT0-e2lmKCJudWxsIj09PW9yaWdpbiYmIm9iamVjdCI9PXR5cGVvZiB0JiZudWxsIT09dCYmKGZ1bmN0aW9uKHQpe3JldHVybiJwcm9jZXNzLXNjcmlwdCI9PT10LmFjdGlvbn0odCl8fGZ1bmN0aW9uKHQpe3JldHVybiJwcm9jZXNzLXN2ZyI9PT10LmFjdGlvbn0odCkpKXtjb25zdHtwb3J0Om4sc2NyaXB0Oml9PXQ7aWYoSSl7Y29uc3QgdD17bWVzc2FnZToiV29ya2VyIGFscmVhZHkgdXNlZCJ9O3JldHVybiB2b2lkIG4ucG9zdE1lc3NhZ2Uoe2Vycm9yOnR9KX1JPSEwO3RyeXtjb25zdCBlPSJwcm9jZXNzLXN2ZyI9PT10LmFjdGlvbj9mdW5jdGlvbih0KXtjb25zdCBuPW5ldyBqKHQpLGU9bi5nZXRUb3RhbExlbmd0aCgpO2lmKDA9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoIlBhdGggaXMgemVybyBsZW5ndGgiKTtsZXQgaT0tMS8wO2NvbnN0IHI9QXJyYXkuZnJvbSh7bGVuZ3RoOmt9LCgodCxyKT0-e2NvbnN0IGg9ci8oay0xKSplLHM9bi5nZXRQb2ludEF0TGVuZ3RoKGgpO3JldHVybiBpPU1hdGgubWF4KGkscy54KSxbaSxzLnldfSkpO3JldHVybntuYW1lOiJjdXN0b20iLHBvaW50czpyLGR1cmF0aW9uOjB9fShpKTpmdW5jdGlvbih0KXtjb25zdCBuPU9iamVjdC5rZXlzKHNlbGYpO2xldCBlO2ltcG9ydFNjcmlwdHMoYGRhdGE6dGV4dC9qYXZhc2NyaXB0LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGAoKCkgPT4geyR7dH07fSkoKWApfWApO2NvbnN0IGk9bmV3IFNldChPYmplY3Qua2V5cyhzZWxmKSk7Zm9yKGNvbnN0IHQgb2YgbilpLmRlbGV0ZSh0KTtmb3IoY29uc3QgdCBvZiBpKSJmdW5jdGlvbiIhPXR5cGVvZiBzZWxmW3RdJiZpLmRlbGV0ZSh0KTtpZihpLnNpemU-MSl0aHJvdyBFcnJvcigiVG9vIG1hbnkgZ2xvYmFsIGZ1bmN0aW9ucy4gRm91bmQ6ICIrWy4uLmldLmpvaW4oIiwgIikpO2lmKDA9PT1pLnNpemUpdGhyb3cgRXJyb3IoIk5vIGdsb2JhbCBmdW5jdGlvbiBmb3VuZC4iKTtjb25zdFtyXT1pO3JldHVybiBlPXNlbGZbcl0se25hbWU6ci5yZXBsYWNlKC9bQS1aXS9nLCh0PT4iLSIrdC50b0xvd2VyQ2FzZSgpKSkscG9pbnRzOkFycmF5LmZyb20oe2xlbmd0aDprfSwoKHQsbik9Pntjb25zdCBpPW4vKGstMSk7cmV0dXJuW2ksTnVtYmVyKGUoaSkpXX0pKSxkdXJhdGlvbjoiZHVyYXRpb24iaW4gc2VsZiYmIm51bWJlciI9PXR5cGVvZiBzZWxmLmR1cmF0aW9uJiZzZWxmLmR1cmF0aW9ufHwwfX0oaSk7bi5wb3N0TWVzc2FnZSh7cmVzdWx0OmV9KX1jYXRjaCh0KXtjb25zdCBpPXsuLi5lKHQpLG1lc3NhZ2U6dC5tZXNzYWdlfTt0aHJvdyBuLnBvc3RNZXNzYWdlKHtlcnJvcjppfSksdH19fTs")

const t = (async () => {
    const t = await fetch('./process-script.js'),
        e = await t.text();
    return URL.createObjectURL(new Blob([PROCESS_SCRIPTJS], {
        type: "text/javascript"
    }))
})();
let e = null;
onmessage = async ({
    data: r
}) => {
    if ("object" == typeof r && null !== r)
        if (function(t) {
                return "process-script" === t.action
            }(r) || function(t) {
                return "process-svg" === t.action
            }(r)) {
            try {
                ! function() {
                    if (e) throw Error("Worker already running");
                    e = t.then((t => new Worker(t)))
                }()
            } catch (t) {
                const e = {
                    message: t.message
                };
                throw r.port.postMessage({
                    error: e
                }), t
            }(await e).postMessage(r, [r.port])
        } else(function(t) {
            return "terminate-worker" === t.action
        })(r) && async function() {
            if (!e) return;
            const t = e;
            e = null, (await t).terminate()
        }()
};
    self.nextDefineUri = ""
</script>`

var t, e, i, n, r, s, o = {},
    l = [],
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function h(t, e) {
    for (var i in e) t[i] = e[i];
    return t
}

function c(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
}

function O(e, i, n) {
    var r, s, o, l = {};
    for (o in i) "key" == o ? r = i[o] : "ref" == o ? s = i[o] : l[o] = i[o];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? t.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === l[o] && (l[o] = e.defaultProps[o]);
    return u(e, l, r, s, null)
}

function u(t, n, r, s, o) {
    var l = {
        type: t,
        props: n,
        key: r,
        ref: s,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++i : o
    };
    return null == o && null != e.vnode && e.vnode(l), l
}

function f(t) {
    return t.children
}

function d(t, e) {
    this.props = t, this.context = e
}

function p(t, e) {
    if (null == e) return t.__ ? p(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var i; e < t.__k.length; e++)
        if (null != (i = t.__k[e]) && null != i.__e) return i.__e;
    return "function" == typeof t.type ? p(t) : null
}

function g(t) {
    var e, i;
    if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
            if (null != (i = t.__k[e]) && null != i.__e) {
                t.__e = t.__c.base = i.__e;
                break
            } return g(t)
    }
}

function m(t) {
    (!t.__d && (t.__d = !0) && n.push(t) && !Q.__r++ || r !== e.debounceRendering) && ((r = e.debounceRendering) || s)(Q)
}

function Q() {
    var t, e, i, r, s, o, l, a;
    for (n.sort((function(t, e) {
            return t.__v.__b - e.__v.__b
        })); t = n.shift();) t.__d && (e = n.length, r = void 0, s = void 0, l = (o = (i = t).__v).__e, (a = i.__P) && (r = [], (s = h({}, o)).__v = o.__v + 1, P(a, o, s, i.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [l] : null, r, null == l ? p(o) : l, o.__h), _(r, o), o.__e != l && g(o)), n.length > e && n.sort((function(t, e) {
        return t.__v.__b - e.__v.__b
    })));
    Q.__r = 0
}

function S(t, e, i, n, r, s, a, h, c, O) {
    var d, g, m, Q, S, w, x, $ = n && n.__k || l,
        k = $.length;
    for (i.__k = [], d = 0; d < e.length; d++)
        if (null != (Q = i.__k[d] = null == (Q = e[d]) || "boolean" == typeof Q ? null : "string" == typeof Q || "number" == typeof Q || "bigint" == typeof Q ? u(null, Q, null, null, Q) : Array.isArray(Q) ? u(f, {
                children: Q
            }, null, null, null) : Q.__b > 0 ? u(Q.type, Q.props, Q.key, Q.ref ? Q.ref : null, Q.__v) : Q)) {
            if (Q.__ = i, Q.__b = i.__b + 1, null === (m = $[d]) || m && Q.key == m.key && Q.type === m.type) $[d] = void 0;
            else
                for (g = 0; g < k; g++) {
                    if ((m = $[g]) && Q.key == m.key && Q.type === m.type) {
                        $[g] = void 0;
                        break
                    }
                    m = null
                }
            P(t, Q, m = m || o, r, s, a, h, c, O), S = Q.__e, (g = Q.ref) && m.ref != g && (x || (x = []), m.ref && x.push(m.ref, null, Q), x.push(g, Q.__c || S, Q)), null != S ? (null == w && (w = S), "function" == typeof Q.type && Q.__k === m.__k ? Q.__d = c = v(Q, c, t) : c = y(t, Q, m, $, S, c), "function" == typeof i.type && (i.__d = c)) : c && m.__e == c && c.parentNode != t && (c = p(m))
        } for (i.__e = w, d = k; d--;) null != $[d] && ("function" == typeof i.type && null != $[d].__e && $[d].__e == i.__d && (i.__d = b(n).nextSibling), C($[d], $[d]));
    if (x)
        for (d = 0; d < x.length; d++) X(x[d], x[++d], x[++d])
}

function v(t, e, i) {
    for (var n, r = t.__k, s = 0; r && s < r.length; s++)(n = r[s]) && (n.__ = t, e = "function" == typeof n.type ? v(n, e, i) : y(i, n, n, r, n.__e, e));
    return e
}

function y(t, e, i, n, r, s) {
    var o, l, a;
    if (void 0 !== e.__d) o = e.__d, e.__d = void 0;
    else if (null == i || r != s || null == r.parentNode) t: if (null == s || s.parentNode !== t) t.appendChild(r), o = null;
        else {
            for (l = s, a = 0;
                (l = l.nextSibling) && a < n.length; a += 1)
                if (l == r) break t;
            t.insertBefore(r, s), o = s
        } return void 0 !== o ? o : r.nextSibling
}

function b(t) {
    var e, i, n;
    if (null == t.type || "string" == typeof t.type) return t.__e;
    if (t.__k)
        for (e = t.__k.length - 1; e >= 0; e--)
            if ((i = t.__k[e]) && (n = b(i))) return n;
    return null
}

function w(t, e, i) {
    "-" === e[0] ? t.setProperty(e, null == i ? "" : i) : t[e] = null == i ? "" : "number" != typeof i || a.test(e) ? i : i + "px"
}

function x(t, e, i, n, r) {
    var s;
    t: if ("style" === e)
        if ("string" == typeof i) t.style.cssText = i;
        else {
            if ("string" == typeof n && (t.style.cssText = n = ""), n)
                for (e in n) i && e in i || w(t.style, e, "");
            if (i)
                for (e in i) n && i[e] === n[e] || w(t.style, e, i[e])
        }
    else if ("o" === e[0] && "n" === e[1]) s = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = i, i ? n || t.addEventListener(e, s ? k : $, s) : t.removeEventListener(e, s ? k : $, s);
    else if ("dangerouslySetInnerHTML" !== e) {
        if (r) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== e && "height" !== e && "href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t) try {
            t[e] = null == i ? "" : i;
            break t
        } catch (t) {}
        "function" == typeof i || (null == i || !1 === i && -1 == e.indexOf("-") ? t.removeAttribute(e) : t.setAttribute(e, i))
    }
}

function $(t) {
    return this.l[t.type + !1](e.event ? e.event(t) : t)
}

function k(t) {
    return this.l[t.type + !0](e.event ? e.event(t) : t)
}

function P(t, i, n, r, s, o, l, a, c) {
    var O, u, p, g, m, Q, v, y, b, w, x, $, k, P, _, X = i.type;
    if (void 0 !== i.constructor) return null;
    null != n.__h && (c = n.__h, a = i.__e = n.__e, i.__h = null, o = [a]), (O = e.__b) && O(i);
    try {
        t: if ("function" == typeof X) {
            if (y = i.props, b = (O = X.contextType) && r[O.__c], w = O ? b ? b.props.value : O.__ : r, n.__c ? v = (u = i.__c = n.__c).__ = u.__E : ("prototype" in X && X.prototype.render ? i.__c = u = new X(y, w) : (i.__c = u = new d(y, w), u.constructor = X, u.render = T), b && b.sub(u), u.props = y, u.state || (u.state = {}), u.context = w, u.__n = r, p = u.__d = !0, u.__h = [], u._sb = []), null == u.__s && (u.__s = u.state), null != X.getDerivedStateFromProps && (u.__s == u.state && (u.__s = h({}, u.__s)), h(u.__s, X.getDerivedStateFromProps(y, u.__s))), g = u.props, m = u.state, u.__v = i, p) null == X.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
            else {
                if (null == X.getDerivedStateFromProps && y !== g && null != u.componentWillReceiveProps && u.componentWillReceiveProps(y, w), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(y, u.__s, w) || i.__v === n.__v) {
                    for (i.__v !== n.__v && (u.props = y, u.state = u.__s, u.__d = !1), u.__e = !1, i.__e = n.__e, i.__k = n.__k, i.__k.forEach((function(t) {
                            t && (t.__ = i)
                        })), x = 0; x < u._sb.length; x++) u.__h.push(u._sb[x]);
                    u._sb = [], u.__h.length && l.push(u);
                    break t
                }
                null != u.componentWillUpdate && u.componentWillUpdate(y, u.__s, w), null != u.componentDidUpdate && u.__h.push((function() {
                    u.componentDidUpdate(g, m, Q)
                }))
            }
            if (u.context = w, u.props = y, u.__P = t, $ = e.__r, k = 0, "prototype" in X && X.prototype.render) {
                for (u.state = u.__s, u.__d = !1, $ && $(i), O = u.render(u.props, u.state, u.context), P = 0; P < u._sb.length; P++) u.__h.push(u._sb[P]);
                u._sb = []
            } else
                do {
                    u.__d = !1, $ && $(i), O = u.render(u.props, u.state, u.context), u.state = u.__s
                } while (u.__d && ++k < 25);
            u.state = u.__s, null != u.getChildContext && (r = h(h({}, r), u.getChildContext())), p || null == u.getSnapshotBeforeUpdate || (Q = u.getSnapshotBeforeUpdate(g, m)), _ = null != O && O.type === f && null == O.key ? O.props.children : O, S(t, Array.isArray(_) ? _ : [_], i, n, r, s, o, l, a, c), u.base = i.__e, i.__h = null, u.__h.length && l.push(u), v && (u.__E = u.__ = null), u.__e = !1
        } else null == o && i.__v === n.__v ? (i.__k = n.__k, i.__e = n.__e) : i.__e = Z(n.__e, i, n, r, s, o, l, c);
        (O = e.diffed) && O(i)
    }
    catch (t) {
        i.__v = null, (c || null != o) && (i.__e = a, i.__h = !!c, o[o.indexOf(a)] = null), e.__e(t, i, n)
    }
}

function _(t, i) {
    e.__c && e.__c(i, t), t.some((function(i) {
        try {
            t = i.__h, i.__h = [], t.some((function(t) {
                t.call(i)
            }))
        } catch (t) {
            e.__e(t, i.__v)
        }
    }))
}

function Z(e, i, n, r, s, l, a, h) {
    var O, u, f, d = n.props,
        g = i.props,
        m = i.type,
        Q = 0;
    if ("svg" === m && (s = !0), null != l)
        for (; Q < l.length; Q++)
            if ((O = l[Q]) && "setAttribute" in O == !!m && (m ? O.localName === m : 3 === O.nodeType)) {
                e = O, l[Q] = null;
                break
            } if (null == e) {
        if (null === m) return document.createTextNode(g);
        /* why the frick did it have to minimize this code TvT */
        /* i am so confused as to what this is... */
        e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g), l = null, h = !1
    }
    if (null === m) d === g || h && e.data === g || (e.data = g);
    else {
        if (l = l && t.call(e.childNodes), u = (d = n.props || o).dangerouslySetInnerHTML, f = g.dangerouslySetInnerHTML, !h) {
            if (null != l)
                for (d = {}, Q = 0; Q < e.attributes.length; Q++) d[e.attributes[Q].name] = e.attributes[Q].value;
            (f || u) && (f && (u && f.__html == u.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
        }
        if (function(t, e, i, n, r) {
                var s;
                for (s in i) "children" === s || "key" === s || s in e || x(t, s, null, i[s], n);
                for (s in e) r && "function" != typeof e[s] || "children" === s || "key" === s || "value" === s || "checked" === s || i[s] === e[s] || x(t, s, e[s], i[s], n)
            }(e, g, d, s, h), f) i.__k = [];
        else if (Q = i.props.children, S(e, Array.isArray(Q) ? Q : [Q], i, n, r, s && "foreignObject" !== m, l, a, l ? l[0] : n.__k && p(n, 0), h), null != l)
            for (Q = l.length; Q--;) null != l[Q] && c(l[Q]);
        h || ("value" in g && void 0 !== (Q = g.value) && (Q !== e.value || "progress" === m && !Q || "option" === m && Q !== d.value) && x(e, "value", Q, d.value, !1), "checked" in g && void 0 !== (Q = g.checked) && Q !== e.checked && x(e, "checked", Q, d.checked, !1))
    }
    return e
}

function X(t, i, n) {
    try {
        "function" == typeof t ? t(i) : t.current = i
    } catch (t) {
        e.__e(t, n)
    }
}

function C(t, i, n) {
    var r, s;
    if (e.unmount && e.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || X(r, null, i)), null != (r = t.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (t) {
            e.__e(t, i)
        }
        r.base = r.__P = null, t.__c = void 0
    }
    if (r = t.__k)
        for (s = 0; s < r.length; s++) r[s] && C(r[s], i, n || "function" != typeof t.type);
    n || null == t.__e || c(t.__e), t.__ = t.__e = t.__d = void 0
}

function T(t, e, i) {
    return this.constructor(t, i)
}
t = l.slice, e = {
    __e: function(t, e, i, n) {
        for (var r, s, o; e = e.__;)
            if ((r = e.__c) && !r.__) try {
                if ((s = r.constructor) && null != s.getDerivedStateFromError && (r.setState(s.getDerivedStateFromError(t)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(t, n || {}), o = r.__d), o) return r.__E = r
            } catch (e) {
                t = e
            }
        throw t
    }
}, i = 0, d.prototype.setState = function(t, e) {
    var i;
    i = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof t && (t = t(h({}, i), this.props)), t && h(i, t), null != t && this.__v && (e && this._sb.push(e), m(this))
}, d.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), m(this))
}, d.prototype.render = f, n = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Q.__r = 0;
var W, A, Y, R, U = 0,
    V = [],
    M = [],
    j = e.__b,
    D = e.__r,
    E = e.diffed,
    q = e.__c,
    I = e.unmount;

function z(t, i) {
    e.__h && e.__h(A, t, U || i), U = 0;
    var n = A.__H || (A.__H = {
        __: [],
        __h: []
    });
    return t >= n.__.length && n.__.push({
        __V: M
    }), n.__[t]
}

function G(t, i) {
    var n = z(W++, 3);
    !e.__s && it(n.__H, i) && (n.__ = t, n.i = i, A.__H.__h.push(n))
}

function N(t, i) {
    var n = z(W++, 4);
    !e.__s && it(n.__H, i) && (n.__ = t, n.i = i, A.__h.push(n))
}

function B(t) {
    return U = 5, L((function() {
        return {
            current: t
        }
    }), [])
}

function L(t, e) {
    var i = z(W++, 7);
    return it(i.__H, e) ? (i.__V = t(), i.i = e, i.__h = t, i.__V) : i.__
}

function H(t, e) {
    return U = 8, L((function() {
        return t
    }), e)
}

function F() {
    for (var t; t = V.shift();)
        if (t.__P && t.__H) try {
            t.__H.__h.forEach(tt), t.__H.__h.forEach(et), t.__H.__h = []
        } catch (i) {
            t.__H.__h = [], e.__e(i, t.__v)
        }
}
e.__b = function(t) {
    A = null, j && j(t)
}, e.__r = function(t) {
    D && D(t), W = 0;
    var e = (A = t.__c).__H;
    e && (Y === A ? (e.__h = [], A.__h = [], e.__.forEach((function(t) {
        t.__N && (t.__ = t.__N), t.__V = M, t.__N = t.i = void 0
    }))) : (e.__h.forEach(tt), e.__h.forEach(et), e.__h = [])), Y = A
}, e.diffed = function(t) {
    E && E(t);
    var i = t.__c;
    i && i.__H && (i.__H.__h.length && (1 !== V.push(i) && R === e.requestAnimationFrame || ((R = e.requestAnimationFrame) || K)(F)), i.__H.__.forEach((function(t) {
        t.i && (t.__H = t.i), t.__V !== M && (t.__ = t.__V), t.i = void 0, t.__V = M
    }))), Y = A = null
}, e.__c = function(t, i) {
    i.some((function(t) {
        try {
            t.__h.forEach(tt), t.__h = t.__h.filter((function(t) {
                return !t.__ || et(t)
            }))
        } catch (n) {
            i.some((function(t) {
                t.__h && (t.__h = [])
            })), i = [], e.__e(n, t.__v)
        }
    })), q && q(t, i)
}, e.unmount = function(t) {
    I && I(t);
    var i, n = t.__c;
    n && n.__H && (n.__H.__.forEach((function(t) {
        try {
            tt(t)
        } catch (t) {
            i = t
        }
    })), n.__H = void 0, i && e.__e(i, n.__v))
};
var J = "function" == typeof requestAnimationFrame;

function K(t) {
    var e, i = function() {
            clearTimeout(n), J && cancelAnimationFrame(e), setTimeout(t)
        },
        n = setTimeout(i, 100);
    J && (e = requestAnimationFrame(i))
}

function tt(t) {
    var e = A,
        i = t.__c;
    "function" == typeof i && (t.__c = void 0, i()), A = e
}

function et(t) {
    var e = A;
    t.__c = t.__(), A = e
}

function it(t, e) {
    return !t || t.length !== e.length || e.some((function(e, i) {
        return e !== t[i]
    }))
}

function nt() {
    throw new Error("Cycle detected")
}

function rt() {
    if (ht > 1) return void ht--;
    let t, e = !1;
    for (; void 0 !== ot;) {
        let i = ot;
        for (ot = void 0, ct++; void 0 !== i;) {
            const n = i.o;
            if (i.o = void 0, i.f &= -3, !(8 & i.f) && pt(i)) try {
                i.c()
            } catch (i) {
                e || (t = i, e = !0)
            }
            i = n
        }
    }
    if (ct = 0, ht--, e) throw t
}
let st, ot, lt, at, ht = 0,
    ct = 0,
    Ot = 0;

function ut(t) {
    if (void 0 === st) return;
    let e = t.n;
    return void 0 === e || e.t !== st ? (e = {
        i: 0,
        S: t,
        p: st.s,
        n: void 0,
        t: st,
        e: void 0,
        x: void 0,
        r: e
    }, void 0 !== st.s && (st.s.n = e), st.s = e, t.n = e, 32 & st.f && t.S(e), e) : -1 === e.i ? (e.i = 0, void 0 !== e.n && (e.n.p = e.p, void 0 !== e.p && (e.p.n = e.n), e.p = st.s, e.n = void 0, st.s.n = e, st.s = e), e) : void 0
}

function ft(t) {
    this.v = t, this.i = 0, this.n = void 0, this.t = void 0
}

function dt(t) {
    return new ft(t)
}

function pt(t) {
    for (let e = t.s; void 0 !== e; e = e.n)
        if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
    return !1
}

function gt(t) {
    for (let e = t.s; void 0 !== e; e = e.n) {
        const i = e.S.n;
        if (void 0 !== i && (e.r = i), e.S.n = e, e.i = -1, void 0 === e.n) {
            t.s = e;
            break
        }
    }
}

function mt(t) {
    let e, i = t.s;
    for (; void 0 !== i;) {
        const t = i.p; - 1 === i.i ? (i.S.U(i), void 0 !== t && (t.n = i.n), void 0 !== i.n && (i.n.p = t)) : e = i, i.S.n = i.r, void 0 !== i.r && (i.r = void 0), i = t
    }
    t.s = e
}

function Qt(t) {
    ft.call(this, void 0), this.x = t, this.s = void 0, this.g = Ot - 1, this.f = 4
}

function St(t) {
    return new Qt(t)
}

function vt(t) {
    const e = t.u;
    if (t.u = void 0, "function" == typeof e) {
        ht++;
        const i = st;
        st = void 0;
        try {
            e()
        } catch (e) {
            throw t.f &= -2, t.f |= 8, yt(t), e
        } finally {
            st = i, rt()
        }
    }
}

function yt(t) {
    for (let e = t.s; void 0 !== e; e = e.n) e.S.U(e);
    t.x = void 0, t.s = void 0, vt(t)
}

function bt(t) {
    if (st !== this) throw new Error("Out-of-order effect");
    mt(this), st = t, this.f &= -2, 8 & this.f && yt(this), rt()
}

function wt(t) {
    this.x = t, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
}

function xt(t) {
    const e = new wt(t);
    try {
        e.c()
    } catch (t) {
        throw e.d(), t
    }
    return e.d.bind(e)
}

function $t(t, i) {
    e[t] = i.bind(null, e[t] || (() => {}))
}

function kt(t) {
    at && at(), at = t && t.S()
}

function Pt({
    data: t
}) {
    const e = Zt(t);
    e.value = t;
    const i = L((() => {
        let t = this.__v;
        for (; t = t.__;)
            if (t.__c) {
                t.__c.__$f |= 4;
                break
            } return this.__$u.c = () => {
            this.base.data = i.peek()
        }, St((() => {
            let t = e.value.value;
            return 0 === t ? 0 : !0 === t ? "" : t || ""
        }))
    }), []);
    return i.value
}

function _t(t, e, i, n) {
    const r = e in t && void 0 === t.ownerSVGElement,
        s = dt(i);
    return {
        o: (t, e) => {
            s.value = t, n = e
        },
        d: xt((() => {
            const i = s.value.value;
            n[e] !== i && (n[e] = i, r ? t[e] = i : i ? t.setAttribute(e, i) : t.removeAttribute(e))
        }))
    }
}

function Zt(t) {
    return L((() => dt(t)), [])
}

function Xt(t) {
    const e = B(t);
    return e.current = t, lt.__$f |= 4, L((() => St((() => e.current()))), [])
}

function Ct(t) {
    const e = B(t);
    e.current = t, G((() => xt((() => e.current()))), [])
}
ft.prototype.h = function() {
    return !0
}, ft.prototype.S = function(t) {
    this.t !== t && void 0 === t.e && (t.x = this.t, void 0 !== this.t && (this.t.e = t), this.t = t)
}, ft.prototype.U = function(t) {
    if (void 0 !== this.t) {
        const e = t.e,
            i = t.x;
        void 0 !== e && (e.x = i, t.e = void 0), void 0 !== i && (i.e = e, t.x = void 0), t === this.t && (this.t = i)
    }
}, ft.prototype.subscribe = function(t) {
    const e = this;
    return xt((function() {
        const i = e.value,
            n = 32 & this.f;
        this.f &= -33;
        try {
            t(i)
        } finally {
            this.f |= n
        }
    }))
}, ft.prototype.valueOf = function() {
    return this.value
}, ft.prototype.toString = function() {
    return this.value + ""
}, ft.prototype.peek = function() {
    return this.v
}, Object.defineProperty(ft.prototype, "value", {
    get() {
        const t = ut(this);
        return void 0 !== t && (t.i = this.i), this.v
    },
    set(t) {
        if (t !== this.v) {
            ct > 100 && nt(), this.v = t, this.i++, Ot++, ht++;
            try {
                for (let t = this.t; void 0 !== t; t = t.x) t.t.N()
            } finally {
                rt()
            }
        }
    }
}), (Qt.prototype = new ft).h = function() {
    if (this.f &= -3, 1 & this.f) return !1;
    if (32 == (36 & this.f)) return !0;
    if (this.f &= -5, this.g === Ot) return !0;
    if (this.g = Ot, this.f |= 1, this.i > 0 && !pt(this)) return this.f &= -2, !0;
    const t = st;
    try {
        gt(this), st = this;
        const t = this.x();
        (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
    } catch (t) {
        this.v = t, this.f |= 16, this.i++
    }
    return st = t, mt(this), this.f &= -2, !0
}, Qt.prototype.S = function(t) {
    if (void 0 === this.t) {
        this.f |= 36;
        for (let t = this.s; void 0 !== t; t = t.n) t.S.S(t)
    }
    ft.prototype.S.call(this, t)
}, Qt.prototype.U = function(t) {
    if (void 0 !== this.t && (ft.prototype.U.call(this, t), void 0 === this.t)) {
        this.f &= -33;
        for (let t = this.s; void 0 !== t; t = t.n) t.S.U(t)
    }
}, Qt.prototype.N = function() {
    if (!(2 & this.f)) {
        this.f |= 6;
        for (let t = this.t; void 0 !== t; t = t.x) t.t.N()
    }
}, Qt.prototype.peek = function() {
    if (this.h() || nt(), 16 & this.f) throw this.v;
    return this.v
}, Object.defineProperty(Qt.prototype, "value", {
    get() {
        1 & this.f && nt();
        const t = ut(this);
        if (this.h(), void 0 !== t && (t.i = this.i), 16 & this.f) throw this.v;
        return this.v
    }
}), wt.prototype.c = function() {
    const t = this.S();
    try {
        8 & this.f || void 0 === this.x || (this.u = this.x())
    } finally {
        t()
    }
}, wt.prototype.S = function() {
    1 & this.f && nt(), this.f |= 1, this.f &= -9, vt(this), gt(this), ht++;
    const t = st;
    return st = this, bt.bind(this, t)
}, wt.prototype.N = function() {
    2 & this.f || (this.f |= 2, this.o = ot, ot = this)
}, wt.prototype.d = function() {
    this.f |= 8, 1 & this.f || yt(this)
}, Pt.displayName = "_st", Object.defineProperties(ft.prototype, {
    constructor: {
        configurable: !0,
        value: void 0
    },
    type: {
        configurable: !0,
        value: Pt
    },
    props: {
        configurable: !0,
        get() {
            return {
                data: this
            }
        }
    },
    __b: {
        configurable: !0,
        value: 1
    }
}), $t("__b", ((t, e) => {
    if ("string" == typeof e.type) {
        let t, i = e.props;
        for (let n in i) {
            if ("children" === n) continue;
            let r = i[n];
            r instanceof ft && (t || (e.__np = t = {}), t[n] = r, i[n] = r.peek())
        }
    }
    t(e)
})), $t("__r", ((t, e) => {
    kt();
    let i, n = e.__c;
    n && (n.__$f &= -2, i = n.__$u, void 0 === i && (n.__$u = i = function(t) {
        let e;
        return xt((function() {
            e = this
        })), e.c = () => {
            n.__$f |= 1, n.setState({})
        }, e
    }())), lt = n, kt(i), t(e)
})), $t("__e", ((t, e, i, n) => {
    kt(), lt = void 0, t(e, i, n)
})), $t("diffed", ((t, e) => {
    let i;
    if (kt(), lt = void 0, "string" == typeof e.type && (i = e.__e)) {
        let t = e.__np,
            n = e.props;
        if (t) {
            let e = i.U;
            if (e)
                for (let i in e) {
                    let n = e[i];
                    void 0 === n || i in t || (n.d(), e[i] = void 0)
                } else e = {}, i.U = e;
            for (let r in t) {
                let s = e[r],
                    o = t[r];
                void 0 === s ? (s = _t(i, r, o, n), e[r] = s) : s.o(o, n)
            }
        }
    }
    t(e)
})), $t("unmount", ((t, e) => {
    if ("string" == typeof e.type) {
        let t = e.__e;
        if (t) {
            const e = t.U;
            if (e) {
                t.U = void 0;
                for (let t in e) {
                    let i = e[t];
                    i && i.d()
                }
            }
        }
    } else {
        let t = e.__c;
        if (t) {
            const e = t.__$u;
            e && (t.__$u = void 0, e.d())
        }
    }
    t(e)
})), $t("__h", ((t, e, i, n) => {
    n < 3 && (e.__$f |= 2), t(e, i, n)
})), d.prototype.shouldComponentUpdate = function(t, e) {
    const i = this.__$u;
    if (!(i && void 0 !== i.s || 4 & this.__$f)) return !0;
    if (3 & this.__$f) return !0;
    for (let t in e) return !0;
    for (let e in t)
        if ("__source" !== e && t[e] !== this.props[e]) return !0;
    for (let e in this.props)
        if (!(e in t)) return !0;
    return !1
};
class Tt {
    constructor() {}
    lineAt(t) {
        if (t < 0 || t > this.length) throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
        return this.lineInner(t, !1, 1, 0)
    }
    line(t) {
        if (t < 1 || t > this.lines) throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
        return this.lineInner(t, !0, 1, 0)
    }
    replace(t, e, i) {
        let n = [];
        return this.decompose(0, t, n, 2), i.length && i.decompose(0, i.length, n, 3), this.decompose(e, this.length, n, 1), At.from(n, this.length - (e - t) + i.length)
    }
    append(t) {
        return this.replace(this.length, this.length, t)
    }
    slice(t, e = this.length) {
        let i = [];
        return this.decompose(t, e, i, 0), At.from(i, e - t)
    }
    eq(t) {
        if (t == this) return !0;
        if (t.length != this.length || t.lines != this.lines) return !1;
        let e = this.scanIdentical(t, 1),
            i = this.length - this.scanIdentical(t, -1),
            n = new Ut(this),
            r = new Ut(t);
        for (let t = e, s = e;;) {
            if (n.next(t), r.next(t), t = 0, n.lineBreak != r.lineBreak || n.done != r.done || n.value != r.value) return !1;
            if (s += n.value.length, n.done || s >= i) return !0
        }
    }
    iter(t = 1) {
        return new Ut(this, t)
    }
    iterRange(t, e = this.length) {
        return new Vt(this, t, e)
    }
    iterLines(t, e) {
        let i;
        if (null == t) i = this.iter();
        else {
            null == e && (e = this.lines + 1);
            let n = this.line(t).from;
            i = this.iterRange(n, Math.max(n, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to))
        }
        return new Mt(i)
    }
    toString() {
        return this.sliceString(0)
    }
    toJSON() {
        let t = [];
        return this.flatten(t), t
    }
    static of (t) {
        if (0 == t.length) throw new RangeError("A document must have at least one line");
        return 1 != t.length || t[0] ? t.length <= 32 ? new Wt(t) : At.from(Wt.split(t, [])) : Tt.empty
    }
}
class Wt extends Tt {
    constructor(t, e = function(t) {
        let e = -1;
        for (let i of t) e += i.length + 1;
        return e
    }(t)) {
        super(), this.text = t, this.length = e
    }
    get lines() {
        return this.text.length
    }
    get children() {
        return null
    }
    lineInner(t, e, i, n) {
        for (let r = 0;; r++) {
            let s = this.text[r],
                o = n + s.length;
            if ((e ? i : o) >= t) return new jt(n, o, i, s);
            n = o + 1, i++
        }
    }
    decompose(t, e, i, n) {
        let r = t <= 0 && e >= this.length ? this : new Wt(Rt(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
        if (1 & n) {
            let t = i.pop(),
                e = Yt(r.text, t.text.slice(), 0, r.length);
            if (e.length <= 32) i.push(new Wt(e, t.length + r.length));
            else {
                let t = e.length >> 1;
                i.push(new Wt(e.slice(0, t)), new Wt(e.slice(t)))
            }
        } else i.push(r)
    }
    replace(t, e, i) {
        if (!(i instanceof Wt)) return super.replace(t, e, i);
        let n = Yt(this.text, Yt(i.text, Rt(this.text, 0, t)), e),
            r = this.length + i.length - (e - t);
        return n.length <= 32 ? new Wt(n, r) : At.from(Wt.split(n, []), r)
    }
    sliceString(t, e = this.length, i = "\n") {
        let n = "";
        for (let r = 0, s = 0; r <= e && s < this.text.length; s++) {
            let o = this.text[s],
                l = r + o.length;
            r > t && s && (n += i), t < l && e > r && (n += o.slice(Math.max(0, t - r), e - r)), r = l + 1
        }
        return n
    }
    flatten(t) {
        for (let e of this.text) t.push(e)
    }
    scanIdentical() {
        return 0
    }
    static split(t, e) {
        let i = [],
            n = -1;
        for (let r of t) i.push(r), n += r.length + 1, 32 == i.length && (e.push(new Wt(i, n)), i = [], n = -1);
        return n > -1 && e.push(new Wt(i, n)), e
    }
}
class At extends Tt {
    constructor(t, e) {
        super(), this.children = t, this.length = e, this.lines = 0;
        for (let e of t) this.lines += e.lines
    }
    lineInner(t, e, i, n) {
        for (let r = 0;; r++) {
            let s = this.children[r],
                o = n + s.length,
                l = i + s.lines - 1;
            if ((e ? l : o) >= t) return s.lineInner(t, e, i, n);
            n = o + 1, i = l + 1
        }
    }
    decompose(t, e, i, n) {
        for (let r = 0, s = 0; s <= e && r < this.children.length; r++) {
            let o = this.children[r],
                l = s + o.length;
            if (t <= l && e >= s) {
                let r = n & ((s <= t ? 1 : 0) | (l >= e ? 2 : 0));
                s >= t && l <= e && !r ? i.push(o) : o.decompose(t - s, e - s, i, r)
            }
            s = l + 1
        }
    }
    replace(t, e, i) {
        if (i.lines < this.lines)
            for (let n = 0, r = 0; n < this.children.length; n++) {
                let s = this.children[n],
                    o = r + s.length;
                if (t >= r && e <= o) {
                    let l = s.replace(t - r, e - r, i),
                        a = this.lines - s.lines + l.lines;
                    if (l.lines < a >> 4 && l.lines > a >> 6) {
                        let r = this.children.slice();
                        return r[n] = l, new At(r, this.length - (e - t) + i.length)
                    }
                    return super.replace(r, o, l)
                }
                r = o + 1
            }
        return super.replace(t, e, i)
    }
    sliceString(t, e = this.length, i = "\n") {
        let n = "";
        for (let r = 0, s = 0; r < this.children.length && s <= e; r++) {
            let o = this.children[r],
                l = s + o.length;
            s > t && r && (n += i), t < l && e > s && (n += o.sliceString(t - s, e - s, i)), s = l + 1
        }
        return n
    }
    flatten(t) {
        for (let e of this.children) e.flatten(t)
    }
    scanIdentical(t, e) {
        if (!(t instanceof At)) return 0;
        let i = 0,
            [n, r, s, o] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
        for (;; n += e, r += e) {
            if (n == s || r == o) return i;
            let l = this.children[n],
                a = t.children[r];
            if (l != a) return i + l.scanIdentical(a, e);
            i += l.length + 1
        }
    }
    static from(t, e = t.reduce(((t, e) => t + e.length + 1), -1)) {
        let i = 0;
        for (let e of t) i += e.lines;
        if (i < 32) {
            let i = [];
            for (let e of t) e.flatten(i);
            return new Wt(i, e)
        }
        let n = Math.max(32, i >> 5),
            r = n << 1,
            s = n >> 1,
            o = [],
            l = 0,
            a = -1,
            h = [];

        function c(t) {
            let e;
            if (t.lines > r && t instanceof At)
                for (let e of t.children) c(e);
            else t.lines > s && (l > s || !l) ? (O(), o.push(t)) : t instanceof Wt && l && (e = h[h.length - 1]) instanceof Wt && t.lines + e.lines <= 32 ? (l += t.lines, a += t.length + 1, h[h.length - 1] = new Wt(e.text.concat(t.text), e.length + 1 + t.length)) : (l + t.lines > n && O(), l += t.lines, a += t.length + 1, h.push(t))
        }

        function O() {
            0 != l && (o.push(1 == h.length ? h[0] : At.from(h, a)), a = -1, l = h.length = 0)
        }
        for (let e of t) c(e);
        return O(), 1 == o.length ? o[0] : new At(o, e)
    }
}

function Yt(t, e, i = 0, n = 1e9) {
    for (let r = 0, s = 0, o = !0; s < t.length && r <= n; s++) {
        let l = t[s],
            a = r + l.length;
        a >= i && (a > n && (l = l.slice(0, n - r)), r < i && (l = l.slice(i - r)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), r = a + 1
    }
    return e
}

function Rt(t, e, i) {
    return Yt(t, [""], e, i)
}
Tt.empty = new Wt([""], 0);
class Ut {
    constructor(t, e = 1) {
        this.dir = e, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof Wt ? t.text.length : t.children.length) << 1]
    }
    nextInner(t, e) {
        for (this.done = this.lineBreak = !1;;) {
            let i = this.nodes.length - 1,
                n = this.nodes[i],
                r = this.offsets[i],
                s = r >> 1,
                o = n instanceof Wt ? n.text.length : n.children.length;
            if (s == (e > 0 ? o : 0)) {
                if (0 == i) return this.done = !0, this.value = "", this;
                e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop()
            } else if ((1 & r) == (e > 0 ? 0 : 1)) {
                if (this.offsets[i] += e, 0 == t) return this.lineBreak = !0, this.value = "\n", this;
                t--
            } else if (n instanceof Wt) {
                let r = n.text[s + (e < 0 ? -1 : 0)];
                if (this.offsets[i] += e, r.length > Math.max(0, t)) return this.value = 0 == t ? r : e > 0 ? r.slice(t) : r.slice(0, r.length - t), this;
                t -= r.length
            } else {
                let r = n.children[s + (e < 0 ? -1 : 0)];
                t > r.length ? (t -= r.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(r), this.offsets.push(e > 0 ? 1 : (r instanceof Wt ? r.text.length : r.children.length) << 1))
            }
        }
    }
    next(t = 0) {
        return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir)
    }
}
class Vt {
    constructor(t, e, i) {
        this.value = "", this.done = !1, this.cursor = new Ut(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i)
    }
    nextInner(t, e) {
        if (e < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
        let i = e < 0 ? this.pos - this.from : this.to - this.pos;
        t > i && (t = i), i -= t;
        let {
            value: n
        } = this.cursor.next(t);
        return this.pos += (n.length + t) * e, this.value = n.length <= i ? n : e < 0 ? n.slice(n.length - i) : n.slice(0, i), this.done = !this.value, this
    }
    next(t = 0) {
        return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir)
    }
    get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
    }
}
class Mt {
    constructor(t) {
        this.inner = t, this.afterBreak = !0, this.value = "", this.done = !1
    }
    next(t = 0) {
        let {
            done: e,
            lineBreak: i,
            value: n
        } = this.inner.next(t);
        return e ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = n, this.afterBreak = !1), this
    }
    get lineBreak() {
        return !1
    }
}
"undefined" != typeof Symbol && (Tt.prototype[Symbol.iterator] = function() {
    return this.iter()
}, Ut.prototype[Symbol.iterator] = Vt.prototype[Symbol.iterator] = Mt.prototype[Symbol.iterator] = function() {
    return this
});
class jt {
    constructor(t, e, i, n) {
        this.from = t, this.to = e, this.number = i, this.text = n
    }
    get length() {
        return this.to - this.from
    }
}
let Dt = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((t => t ? parseInt(t, 36) : 1));
for (let t = 1; t < Dt.length; t++) Dt[t] += Dt[t - 1];

function Et(t) {
    for (let e = 1; e < Dt.length; e += 2)
        if (Dt[e] > t) return Dt[e - 1] <= t;
    return !1
}

function qt(t) {
    return t >= 127462 && t <= 127487
}
const It = 8205;

function zt(t, e, i = !0, n = !0) {
    return (i ? Gt : Nt)(t, e, n)
}

function Gt(t, e, i) {
    if (e == t.length) return e;
    e && Bt(t.charCodeAt(e)) && Lt(t.charCodeAt(e - 1)) && e--;
    let n = Ht(t, e);
    for (e += Jt(n); e < t.length;) {
        let r = Ht(t, e);
        if (n == It || r == It || i && Et(r)) e += Jt(r), n = r;
        else {
            if (!qt(r)) break;
            {
                let i = 0,
                    n = e - 2;
                for (; n >= 0 && qt(Ht(t, n));) i++, n -= 2;
                if (i % 2 == 0) break;
                e += 2
            }
        }
    }
    return e
}

function Nt(t, e, i) {
    for (; e > 0;) {
        let n = Gt(t, e - 2, i);
        if (n < e) return n;
        e--
    }
    return 0
}

function Bt(t) {
    return t >= 56320 && t < 57344
}

function Lt(t) {
    return t >= 55296 && t < 56320
}

function Ht(t, e) {
    let i = t.charCodeAt(e);
    if (!Lt(i) || e + 1 == t.length) return i;
    let n = t.charCodeAt(e + 1);
    return Bt(n) ? n - 56320 + (i - 55296 << 10) + 65536 : i
}

function Ft(t) {
    return t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
}

function Jt(t) {
    return t < 65536 ? 1 : 2
}
const Kt = /\r\n?|\n/;
var te = function(t) {
    return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t
}(te || (te = {}));
class ee {
    constructor(t) {
        this.sections = t
    }
    get length() {
        let t = 0;
        for (let e = 0; e < this.sections.length; e += 2) t += this.sections[e];
        return t
    }
    get newLength() {
        let t = 0;
        for (let e = 0; e < this.sections.length; e += 2) {
            let i = this.sections[e + 1];
            t += i < 0 ? this.sections[e] : i
        }
        return t
    }
    get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
    }
    iterGaps(t) {
        for (let e = 0, i = 0, n = 0; e < this.sections.length;) {
            let r = this.sections[e++],
                s = this.sections[e++];
            s < 0 ? (t(i, n, r), n += r) : n += s, i += r
        }
    }
    iterChangedRanges(t, e = !1) {
        se(this, t, e)
    }
    get invertedDesc() {
        let t = [];
        for (let e = 0; e < this.sections.length;) {
            let i = this.sections[e++],
                n = this.sections[e++];
            n < 0 ? t.push(i, n) : t.push(n, i)
        }
        return new ee(t)
    }
    composeDesc(t) {
        return this.empty ? t : t.empty ? this : le(this, t)
    }
    mapDesc(t, e = !1) {
        return t.empty ? this : oe(this, t, e)
    }
    mapPos(t, e = -1, i = te.Simple) {
        let n = 0,
            r = 0;
        for (let s = 0; s < this.sections.length;) {
            let o = this.sections[s++],
                l = this.sections[s++],
                a = n + o;
            if (l < 0) {
                if (a > t) return r + (t - n);
                r += o
            } else {
                if (i != te.Simple && a >= t && (i == te.TrackDel && n < t && a > t || i == te.TrackBefore && n < t || i == te.TrackAfter && a > t)) return null;
                if (a > t || a == t && e < 0 && !o) return t == n || e < 0 ? r : r + l;
                r += l
            }
            n = a
        }
        if (t > n) throw new RangeError(`Position ${t} is out of range for changeset of length ${n}`);
        return r
    }
    touchesRange(t, e = t) {
        for (let i = 0, n = 0; i < this.sections.length && n <= e;) {
            let r = n + this.sections[i++];
            if (this.sections[i++] >= 0 && n <= e && r >= t) return !(n < t && r > e) || "cover";
            n = r
        }
        return !1
    }
    toString() {
        let t = "";
        for (let e = 0; e < this.sections.length;) {
            let i = this.sections[e++],
                n = this.sections[e++];
            t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "")
        }
        return t
    }
    toJSON() {
        return this.sections
    }
    static fromJSON(t) {
        if (!Array.isArray(t) || t.length % 2 || t.some((t => "number" != typeof t))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new ee(t)
    }
    static create(t) {
        return new ee(t)
    }
}
class ie extends ee {
    constructor(t, e) {
        super(t), this.inserted = e
    }
    apply(t) {
        if (this.length != t.length) throw new RangeError("Applying change set to a document with the wrong length");
        return se(this, ((e, i, n, r, s) => t = t.replace(n, n + (i - e), s)), !1), t
    }
    mapDesc(t, e = !1) {
        return oe(this, t, e, !0)
    }
    invert(t) {
        let e = this.sections.slice(),
            i = [];
        for (let n = 0, r = 0; n < e.length; n += 2) {
            let s = e[n],
                o = e[n + 1];
            if (o >= 0) {
                e[n] = o, e[n + 1] = s;
                let l = n >> 1;
                for (; i.length < l;) i.push(Tt.empty);
                i.push(s ? t.slice(r, r + s) : Tt.empty)
            }
            r += s
        }
        return new ie(e, i)
    }
    compose(t) {
        return this.empty ? t : t.empty ? this : le(this, t, !0)
    }
    map(t, e = !1) {
        return t.empty ? this : oe(this, t, e, !0)
    }
    iterChanges(t, e = !1) {
        se(this, t, e)
    }
    get desc() {
        return ee.create(this.sections)
    }
    filter(t) {
        let e = [],
            i = [],
            n = [],
            r = new ae(this);
        t: for (let s = 0, o = 0;;) {
            let l = s == t.length ? 1e9 : t[s++];
            for (; o < l || o == l && 0 == r.len;) {
                if (r.done) break t;
                let t = Math.min(r.len, l - o);
                ne(n, t, -1);
                let s = -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0;
                ne(e, t, s), s > 0 && re(i, e, r.text), r.forward(t), o += t
            }
            let a = t[s++];
            for (; o < a;) {
                if (r.done) break t;
                let t = Math.min(r.len, a - o);
                ne(e, t, -1), ne(n, t, -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0), r.forward(t), o += t
            }
        }
        return {
            changes: new ie(e, i),
            filtered: ee.create(n)
        }
    }
    toJSON() {
        let t = [];
        for (let e = 0; e < this.sections.length; e += 2) {
            let i = this.sections[e],
                n = this.sections[e + 1];
            n < 0 ? t.push(i) : 0 == n ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()))
        }
        return t
    }
    static of (t, e, i) {
        let n = [],
            r = [],
            s = 0,
            o = null;

        function l(t = !1) {
            if (!t && !n.length) return;
            s < e && ne(n, e - s, -1);
            let i = new ie(n, r);
            o = o ? o.compose(i.map(o)) : i, n = [], r = [], s = 0
        }
        return function t(a) {
            if (Array.isArray(a))
                for (let e of a) t(e);
            else if (a instanceof ie) {
                if (a.length != e) throw new RangeError(`Mismatched change set length (got ${a.length}, expected ${e})`);
                l(), o = o ? o.compose(a.map(o)) : a
            } else {
                let {
                    from: t,
                    to: o = t,
                    insert: h
                } = a;
                if (t > o || t < 0 || o > e) throw new RangeError(`Invalid change range ${t} to ${o} (in doc of length ${e})`);
                let c = h ? "string" == typeof h ? Tt.of(h.split(i || Kt)) : h : Tt.empty,
                    O = c.length;
                if (t == o && 0 == O) return;
                t < s && l(), t > s && ne(n, t - s, -1), ne(n, o - t, O), re(r, n, c), s = o
            }
        }(t), l(!o), o
    }
    static empty(t) {
        return new ie(t ? [t, -1] : [], [])
    }
    static fromJSON(t) {
        if (!Array.isArray(t)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let e = [],
            i = [];
        for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if ("number" == typeof r) e.push(r, -1);
            else {
                if (!Array.isArray(r) || "number" != typeof r[0] || r.some(((t, e) => e && "string" != typeof t))) throw new RangeError("Invalid JSON representation of ChangeSet");
                if (1 == r.length) e.push(r[0], 0);
                else {
                    for (; i.length < n;) i.push(Tt.empty);
                    i[n] = Tt.of(r.slice(1)), e.push(r[0], i[n].length)
                }
            }
        }
        return new ie(e, i)
    }
    static createSet(t, e) {
        return new ie(t, e)
    }
}

function ne(t, e, i, n = !1) {
    if (0 == e && i <= 0) return;
    let r = t.length - 2;
    r >= 0 && i <= 0 && i == t[r + 1] ? t[r] += e : 0 == e && 0 == t[r] ? t[r + 1] += i : n ? (t[r] += e, t[r + 1] += i) : t.push(e, i)
}

function re(t, e, i) {
    if (0 == i.length) return;
    let n = e.length - 2 >> 1;
    if (n < t.length) t[t.length - 1] = t[t.length - 1].append(i);
    else {
        for (; t.length < n;) t.push(Tt.empty);
        t.push(i)
    }
}

function se(t, e, i) {
    let n = t.inserted;
    for (let r = 0, s = 0, o = 0; o < t.sections.length;) {
        let l = t.sections[o++],
            a = t.sections[o++];
        if (a < 0) r += l, s += l;
        else {
            let h = r,
                c = s,
                O = Tt.empty;
            for (; h += l, c += a, a && n && (O = O.append(n[o - 2 >> 1])), !(i || o == t.sections.length || t.sections[o + 1] < 0);) l = t.sections[o++], a = t.sections[o++];
            e(r, h, s, c, O), r = h, s = c
        }
    }
}

function oe(t, e, i, n = !1) {
    let r = [],
        s = n ? [] : null,
        o = new ae(t),
        l = new ae(e);
    for (let t = -1;;)
        if (-1 == o.ins && -1 == l.ins) {
            let t = Math.min(o.len, l.len);
            ne(r, t, -1), o.forward(t), l.forward(t)
        } else if (l.ins >= 0 && (o.ins < 0 || t == o.i || 0 == o.off && (l.len < o.len || l.len == o.len && !i))) {
        let e = l.len;
        for (ne(r, l.ins, -1); e;) {
            let i = Math.min(o.len, e);
            o.ins >= 0 && t < o.i && o.len <= i && (ne(r, 0, o.ins), s && re(s, r, o.text), t = o.i), o.forward(i), e -= i
        }
        l.next()
    } else {
        if (!(o.ins >= 0)) {
            if (o.done && l.done) return s ? ie.createSet(r, s) : ee.create(r);
            throw new Error("Mismatched change set lengths")
        } {
            let e = 0,
                i = o.len;
            for (; i;)
                if (-1 == l.ins) {
                    let t = Math.min(i, l.len);
                    e += t, i -= t, l.forward(t)
                } else {
                    if (!(0 == l.ins && l.len < i)) break;
                    i -= l.len, l.next()
                } ne(r, e, t < o.i ? o.ins : 0), s && t < o.i && re(s, r, o.text), t = o.i, o.forward(o.len - i)
        }
    }
}

function le(t, e, i = !1) {
    let n = [],
        r = i ? [] : null,
        s = new ae(t),
        o = new ae(e);
    for (let t = !1;;) {
        if (s.done && o.done) return r ? ie.createSet(n, r) : ee.create(n);
        if (0 == s.ins) ne(n, s.len, 0, t), s.next();
        else if (0 != o.len || o.done) {
            if (s.done || o.done) throw new Error("Mismatched change set lengths");
            {
                let e = Math.min(s.len2, o.len),
                    i = n.length;
                if (-1 == s.ins) {
                    let i = -1 == o.ins ? -1 : o.off ? 0 : o.ins;
                    ne(n, e, i, t), r && i && re(r, n, o.text)
                } else - 1 == o.ins ? (ne(n, s.off ? 0 : s.len, e, t), r && re(r, n, s.textBit(e))) : (ne(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, t), r && !o.off && re(r, n, o.text));
                t = (s.ins > e || o.ins >= 0 && o.len > e) && (t || n.length > i), s.forward2(e), o.forward(e)
            }
        } else ne(n, 0, o.ins, t), r && re(r, n, o.text), o.next()
    }
}
class ae {
    constructor(t) {
        this.set = t, this.i = 0, this.next()
    }
    next() {
        let {
            sections: t
        } = this.set;
        this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
    }
    get done() {
        return -2 == this.ins
    }
    get len2() {
        return this.ins < 0 ? this.len : this.ins
    }
    get text() {
        let {
            inserted: t
        } = this.set, e = this.i - 2 >> 1;
        return e >= t.length ? Tt.empty : t[e]
    }
    textBit(t) {
        let {
            inserted: e
        } = this.set, i = this.i - 2 >> 1;
        return i >= e.length && !t ? Tt.empty : e[i].slice(this.off, null == t ? void 0 : this.off + t)
    }
    forward(t) {
        t == this.len ? this.next() : (this.len -= t, this.off += t)
    }
    forward2(t) {
        -1 == this.ins ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t)
    }
}
class he {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.flags = i
    }
    get anchor() {
        return 16 & this.flags ? this.to : this.from
    }
    get head() {
        return 16 & this.flags ? this.from : this.to
    }
    get empty() {
        return this.from == this.to
    }
    get assoc() {
        return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0
    }
    get bidiLevel() {
        let t = 3 & this.flags;
        return 3 == t ? null : t
    }
    get goalColumn() {
        let t = this.flags >> 5;
        return 33554431 == t ? void 0 : t
    }
    map(t, e = -1) {
        let i, n;
        return this.empty ? i = n = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), n = t.mapPos(this.to, -1)), i == this.from && n == this.to ? this : new he(i, n, this.flags)
    }
    extend(t, e = t) {
        if (t <= this.anchor && e >= this.anchor) return ce.range(t, e);
        let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
        return ce.range(this.anchor, i)
    }
    eq(t) {
        return this.anchor == t.anchor && this.head == t.head
    }
    toJSON() {
        return {
            anchor: this.anchor,
            head: this.head
        }
    }
    static fromJSON(t) {
        if (!t || "number" != typeof t.anchor || "number" != typeof t.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return ce.range(t.anchor, t.head)
    }
    static create(t, e, i) {
        return new he(t, e, i)
    }
}
class ce {
    constructor(t, e) {
        this.ranges = t, this.mainIndex = e
    }
    map(t, e = -1) {
        return t.empty ? this : ce.create(this.ranges.map((i => i.map(t, e))), this.mainIndex)
    }
    eq(t) {
        if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex) return !1;
        for (let e = 0; e < this.ranges.length; e++)
            if (!this.ranges[e].eq(t.ranges[e])) return !1;
        return !0
    }
    get main() {
        return this.ranges[this.mainIndex]
    }
    asSingle() {
        return 1 == this.ranges.length ? this : new ce([this.main], 0)
    }
    addRange(t, e = !0) {
        return ce.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1)
    }
    replaceRange(t, e = this.mainIndex) {
        let i = this.ranges.slice();
        return i[e] = t, ce.create(i, this.mainIndex)
    }
    toJSON() {
        return {
            ranges: this.ranges.map((t => t.toJSON())),
            main: this.mainIndex
        }
    }
    static fromJSON(t) {
        if (!t || !Array.isArray(t.ranges) || "number" != typeof t.main || t.main >= t.ranges.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new ce(t.ranges.map((t => he.fromJSON(t))), t.main)
    }
    static single(t, e = t) {
        return new ce([ce.range(t, e)], 0)
    }
    static create(t, e = 0) {
        if (0 == t.length) throw new RangeError("A selection needs at least one range");
        for (let i = 0, n = 0; n < t.length; n++) {
            let r = t[n];
            if (r.empty ? r.from <= i : r.from < i) return ce.normalized(t.slice(), e);
            i = r.to
        }
        return new ce(t, e)
    }
    static cursor(t, e = 0, i, n) {
        return he.create(t, t, (0 == e ? 0 : e < 0 ? 4 : 8) | (null == i ? 3 : Math.min(2, i)) | (null != n ? n : 33554431) << 5)
    }
    static range(t, e, i, n) {
        let r = (null != i ? i : 33554431) << 5 | (null == n ? 3 : Math.min(2, n));
        return e < t ? he.create(e, t, 24 | r) : he.create(t, e, (e > t ? 4 : 0) | r)
    }
    static normalized(t, e = 0) {
        let i = t[e];
        t.sort(((t, e) => t.from - e.from)), e = t.indexOf(i);
        for (let i = 1; i < t.length; i++) {
            let n = t[i],
                r = t[i - 1];
            if (n.empty ? n.from <= r.to : n.from < r.to) {
                let s = r.from,
                    o = Math.max(n.to, r.to);
                i <= e && e--, t.splice(--i, 2, n.anchor > n.head ? ce.range(o, s) : ce.range(s, o))
            }
        }
        return new ce(t, e)
    }
}

function Oe(t, e) {
    for (let i of t.ranges)
        if (i.to > e) throw new RangeError("Selection points outside of document")
}
let ue = 0;
class fe {
    constructor(t, e, i, n, r) {
        this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = n, this.id = ue++, this.default = t([]), this.extensions = "function" == typeof r ? r(this) : r
    }
    static define(t = {}) {
        return new fe(t.combine || (t => t), t.compareInput || ((t, e) => t === e), t.compare || (t.combine ? (t, e) => t === e : de), !!t.static, t.enables)
    }
    of(t) {
        return new pe([], this, 0, t)
    }
    compute(t, e) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pe(t, this, 1, e)
    }
    computeN(t, e) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pe(t, this, 2, e)
    }
    from(t, e) {
        return e || (e = t => t), this.compute([t], (i => e(i.field(t))))
    }
}

function de(t, e) {
    return t == e || t.length == e.length && t.every(((t, i) => t === e[i]))
}
class pe {
    constructor(t, e, i, n) {
        this.dependencies = t, this.facet = e, this.type = i, this.value = n, this.id = ue++
    }
    dynamicSlot(t) {
        var e;
        let i = this.value,
            n = this.facet.compareInput,
            r = this.id,
            s = t[r] >> 1,
            o = 2 == this.type,
            l = !1,
            a = !1,
            h = [];
        for (let i of this.dependencies) "doc" == i ? l = !0 : "selection" == i ? a = !0 : 0 == (1 & (null !== (e = t[i.id]) && void 0 !== e ? e : 1)) && h.push(t[i.id]);
        return {
            create: t => (t.values[s] = i(t), 1),
            update(t, e) {
                if (l && e.docChanged || a && (e.docChanged || e.selection) || me(t, h)) {
                    let e = i(t);
                    if (o ? !ge(e, t.values[s], n) : !n(e, t.values[s])) return t.values[s] = e, 1
                }
                return 0
            },
            reconfigure: (t, e) => {
                let l, a = e.config.address[r];
                if (null != a) {
                    let r = Ze(e, a);
                    if (this.dependencies.every((i => i instanceof fe ? e.facet(i) === t.facet(i) : !(i instanceof ve) || e.field(i, !1) == t.field(i, !1))) || (o ? ge(l = i(t), r, n) : n(l = i(t), r))) return t.values[s] = r, 0
                } else l = i(t);
                return t.values[s] = l, 1
            }
        }
    }
}

function ge(t, e, i) {
    if (t.length != e.length) return !1;
    for (let n = 0; n < t.length; n++)
        if (!i(t[n], e[n])) return !1;
    return !0
}

function me(t, e) {
    let i = !1;
    for (let n of e) 1 & _e(t, n) && (i = !0);
    return i
}

function Qe(t, e, i) {
    let n = i.map((e => t[e.id])),
        r = i.map((t => t.type)),
        s = n.filter((t => !(1 & t))),
        o = t[e.id] >> 1;

    function l(t) {
        let i = [];
        for (let e = 0; e < n.length; e++) {
            let s = Ze(t, n[e]);
            if (2 == r[e])
                for (let t of s) i.push(t);
            else i.push(s)
        }
        return e.combine(i)
    }
    return {
        create(t) {
            for (let e of n) _e(t, e);
            return t.values[o] = l(t), 1
        },
        update(t, i) {
            if (!me(t, s)) return 0;
            let n = l(t);
            return e.compare(n, t.values[o]) ? 0 : (t.values[o] = n, 1)
        },
        reconfigure(t, r) {
            let s = me(t, n),
                a = r.config.facets[e.id],
                h = r.facet(e);
            if (a && !s && de(i, a)) return t.values[o] = h, 0;
            let c = l(t);
            return e.compare(c, h) ? (t.values[o] = h, 0) : (t.values[o] = c, 1)
        }
    }
}
const Se = fe.define({
    static: !0
});
class ve {
    constructor(t, e, i, n, r) {
        this.id = t, this.createF = e, this.updateF = i, this.compareF = n, this.spec = r, this.provides = void 0
    }
    static define(t) {
        let e = new ve(ue++, t.create, t.update, t.compare || ((t, e) => t === e), t);
        return t.provide && (e.provides = t.provide(e)), e
    }
    create(t) {
        let e = t.facet(Se).find((t => t.field == this));
        return ((null == e ? void 0 : e.create) || this.createF)(t)
    }
    slot(t) {
        let e = t[this.id] >> 1;
        return {
            create: t => (t.values[e] = this.create(t), 1),
            update: (t, i) => {
                let n = t.values[e],
                    r = this.updateF(n, i);
                return this.compareF(n, r) ? 0 : (t.values[e] = r, 1)
            },
            reconfigure: (t, i) => null != i.config.address[this.id] ? (t.values[e] = i.field(this), 0) : (t.values[e] = this.create(t), 1)
        }
    }
    init(t) {
        return [this, Se.of({
            field: this,
            create: t
        })]
    }
    get extension() {
        return this
    }
}
const ye = {
    lowest: 4,
    low: 3,
    default: 2,
    high: 1,
    highest: 0
};

function be(t) {
    return e => new xe(e, t)
}
const we = {
    highest: be(ye.highest),
    high: be(ye.high),
    default: be(ye.default),
    low: be(ye.low),
    lowest: be(ye.lowest)
};
class xe {
    constructor(t, e) {
        this.inner = t, this.prec = e
    }
}
class $e {
    of(t) {
        return new ke(this, t)
    }
    reconfigure(t) {
        return $e.reconfigure.of({
            compartment: this,
            extension: t
        })
    }
    get(t) {
        return t.config.compartments.get(this)
    }
}
class ke {
    constructor(t, e) {
        this.compartment = t, this.inner = e
    }
}
class Pe {
    constructor(t, e, i, n, r, s) {
        for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = n, this.staticValues = r, this.facets = s, this.statusTemplate = []; this.statusTemplate.length < i.length;) this.statusTemplate.push(0)
    }
    staticFacet(t) {
        let e = this.address[t.id];
        return null == e ? t.default : this.staticValues[e >> 1]
    }
    static resolve(t, e, i) {
        let n = [],
            r = Object.create(null),
            s = new Map;
        for (let i of function(t, e, i) {
                let n = [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    r = new Map;

                function s(t, o) {
                    let l = r.get(t);
                    if (null != l) {
                        if (l <= o) return;
                        let e = n[l].indexOf(t);
                        e > -1 && n[l].splice(e, 1), t instanceof ke && i.delete(t.compartment)
                    }
                    if (r.set(t, o), Array.isArray(t))
                        for (let e of t) s(e, o);
                    else if (t instanceof ke) {
                        if (i.has(t.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                        let n = e.get(t.compartment) || t.inner;
                        i.set(t.compartment, n), s(n, o)
                    } else if (t instanceof xe) s(t.inner, t.prec);
                    else if (t instanceof ve) n[o].push(t), t.provides && s(t.provides, o);
                    else if (t instanceof pe) n[o].push(t), t.facet.extensions && s(t.facet.extensions, ye.default);
                    else {
                        let e = t.extension;
                        if (!e) throw new Error(`Unrecognized extension value in extension set (${t}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                        s(e, o)
                    }
                }
                return s(t, ye.default), n.reduce(((t, e) => t.concat(e)))
            }(t, e, s)) i instanceof ve ? n.push(i) : (r[i.facet.id] || (r[i.facet.id] = [])).push(i);
        let o = Object.create(null),
            l = [],
            a = [];
        for (let t of n) o[t.id] = a.length << 1, a.push((e => t.slot(e)));
        let h = null == i ? void 0 : i.config.facets;
        for (let t in r) {
            let e = r[t],
                n = e[0].facet,
                s = h && h[t] || [];
            if (e.every((t => 0 == t.type)))
                if (o[n.id] = l.length << 1 | 1, de(s, e)) l.push(i.facet(n));
                else {
                    let t = n.combine(e.map((t => t.value)));
                    l.push(i && n.compare(t, i.facet(n)) ? i.facet(n) : t)
                }
            else {
                for (let t of e) 0 == t.type ? (o[t.id] = l.length << 1 | 1, l.push(t.value)) : (o[t.id] = a.length << 1, a.push((e => t.dynamicSlot(e))));
                o[n.id] = a.length << 1, a.push((t => Qe(t, n, e)))
            }
        }
        let c = a.map((t => t(o)));
        return new Pe(t, s, c, o, l, r)
    }
}

function _e(t, e) {
    if (1 & e) return 2;
    let i = e >> 1,
        n = t.status[i];
    if (4 == n) throw new Error("Cyclic dependency between fields and/or facets");
    if (2 & n) return n;
    t.status[i] = 4;
    let r = t.computeSlot(t, t.config.dynamicSlots[i]);
    return t.status[i] = 2 | r
}

function Ze(t, e) {
    return 1 & e ? t.config.staticValues[e >> 1] : t.values[e >> 1]
}
const Xe = fe.define(),
    Ce = fe.define({
        combine: t => t.some((t => t)),
        static: !0
    }),
    Te = fe.define({
        combine: t => t.length ? t[0] : void 0,
        static: !0
    }),
    We = fe.define(),
    Ae = fe.define(),
    Ye = fe.define(),
    Re = fe.define({
        combine: t => !!t.length && t[0]
    });
class Ue {
    constructor(t, e) {
        this.type = t, this.value = e
    }
    static define() {
        return new Ve
    }
}
class Ve {
    of(t) {
        return new Ue(this, t)
    }
}
class Me {
    constructor(t) {
        this.map = t
    }
    of(t) {
        return new je(this, t)
    }
}
class je {
    constructor(t, e) {
        this.type = t, this.value = e
    }
    map(t) {
        let e = this.type.map(this.value, t);
        return void 0 === e ? void 0 : e == this.value ? this : new je(this.type, e)
    }
    is(t) {
        return this.type == t
    }
    static define(t = {}) {
        return new Me(t.map || (t => t))
    }
    static mapEffects(t, e) {
        if (!t.length) return t;
        let i = [];
        for (let n of t) {
            let t = n.map(e);
            t && i.push(t)
        }
        return i
    }
}
je.reconfigure = je.define(), je.appendConfig = je.define();
class De {
    constructor(t, e, i, n, r, s) {
        this.startState = t, this.changes = e, this.selection = i, this.effects = n, this.annotations = r, this.scrollIntoView = s, this._doc = null, this._state = null, i && Oe(i, e.newLength), r.some((t => t.type == De.time)) || (this.annotations = r.concat(De.time.of(Date.now())))
    }
    static create(t, e, i, n, r, s) {
        return new De(t, e, i, n, r, s)
    }
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc))
    }
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes)
    }
    get state() {
        return this._state || this.startState.applyTransaction(this), this._state
    }
    annotation(t) {
        for (let e of this.annotations)
            if (e.type == t) return e.value
    }
    get docChanged() {
        return !this.changes.empty
    }
    get reconfigured() {
        return this.startState.config != this.state.config
    }
    isUserEvent(t) {
        let e = this.annotation(De.userEvent);
        return !(!e || !(e == t || e.length > t.length && e.slice(0, t.length) == t && "." == e[t.length]))
    }
}

function Ee(t, e) {
    let i = [];
    for (let n = 0, r = 0;;) {
        let s, o;
        if (n < t.length && (r == e.length || e[r] >= t[n])) s = t[n++], o = t[n++];
        else {
            if (!(r < e.length)) return i;
            s = e[r++], o = e[r++]
        }!i.length || i[i.length - 1] < s ? i.push(s, o) : i[i.length - 1] < o && (i[i.length - 1] = o)
    }
}

function qe(t, e, i) {
    var n;
    let r, s, o;
    return i ? (r = e.changes, s = ie.empty(e.changes.length), o = t.changes.compose(e.changes)) : (r = e.changes.map(t.changes), s = t.changes.mapDesc(e.changes, !0), o = t.changes.compose(r)), {
        changes: o,
        selection: e.selection ? e.selection.map(s) : null === (n = t.selection) || void 0 === n ? void 0 : n.map(r),
        effects: je.mapEffects(t.effects, r).concat(je.mapEffects(e.effects, s)),
        annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
        scrollIntoView: t.scrollIntoView || e.scrollIntoView
    }
}

function Ie(t, e, i) {
    let n = e.selection,
        r = Ne(e.annotations);
    return e.userEvent && (r = r.concat(De.userEvent.of(e.userEvent))), {
        changes: e.changes instanceof ie ? e.changes : ie.of(e.changes || [], i, t.facet(Te)),
        selection: n && (n instanceof ce ? n : ce.single(n.anchor, n.head)),
        effects: Ne(e.effects),
        annotations: r,
        scrollIntoView: !!e.scrollIntoView
    }
}

function ze(t, e, i) {
    let n = Ie(t, e.length ? e[0] : {}, t.doc.length);
    e.length && !1 === e[0].filter && (i = !1);
    for (let r = 1; r < e.length; r++) {
        !1 === e[r].filter && (i = !1);
        let s = !!e[r].sequential;
        n = qe(n, Ie(t, e[r], s ? n.changes.newLength : t.doc.length), s)
    }
    let r = De.create(t, n.changes, n.selection, n.effects, n.annotations, n.scrollIntoView);
    return function(t) {
        let e = t.startState,
            i = e.facet(Ye),
            n = t;
        for (let r = i.length - 1; r >= 0; r--) {
            let s = i[r](t);
            s && Object.keys(s).length && (n = qe(n, Ie(e, s, t.changes.newLength), !0))
        }
        return n == t ? t : De.create(e, t.changes, t.selection, n.effects, n.annotations, n.scrollIntoView)
    }(i ? function(t) {
        let e = t.startState,
            i = !0;
        for (let n of e.facet(We)) {
            let e = n(t);
            if (!1 === e) {
                i = !1;
                break
            }
            Array.isArray(e) && (i = !0 === i ? e : Ee(i, e))
        }
        if (!0 !== i) {
            let n, r;
            if (!1 === i) r = t.changes.invertedDesc, n = ie.empty(e.doc.length);
            else {
                let e = t.changes.filter(i);
                n = e.changes, r = e.filtered.mapDesc(e.changes).invertedDesc
            }
            t = De.create(e, n, t.selection && t.selection.map(r), je.mapEffects(t.effects, r), t.annotations, t.scrollIntoView)
        }
        let n = e.facet(Ae);
        for (let i = n.length - 1; i >= 0; i--) {
            let r = n[i](t);
            t = r instanceof De ? r : Array.isArray(r) && 1 == r.length && r[0] instanceof De ? r[0] : ze(e, Ne(r), !1)
        }
        return t
    }(r) : r)
}
De.time = Ue.define(), De.userEvent = Ue.define(), De.addToHistory = Ue.define(), De.remote = Ue.define();
const Ge = [];

function Ne(t) {
    return null == t ? Ge : Array.isArray(t) ? t : [t]
}
var Be = function(t) {
    return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t
}(Be || (Be = {}));
const Le = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let He;
try {
    He = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
} catch (yt) {}

function Fe(t) {
    return e => {
        if (!/\S/.test(e)) return Be.Space;
        if (function(t) {
                if (He) return He.test(t);
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    if (/\w/.test(i) || i > "" && (i.toUpperCase() != i.toLowerCase() || Le.test(i))) return !0
                }
                return !1
            }(e)) return Be.Word;
        for (let i = 0; i < t.length; i++)
            if (e.indexOf(t[i]) > -1) return Be.Word;
        return Be.Other
    }
}
class Je {
    constructor(t, e, i, n, r, s) {
        this.config = t, this.doc = e, this.selection = i, this.values = n, this.status = t.statusTemplate.slice(), this.computeSlot = r, s && (s._state = this);
        for (let t = 0; t < this.config.dynamicSlots.length; t++) _e(this, t << 1);
        this.computeSlot = null
    }
    field(t, e = !0) {
        let i = this.config.address[t.id];
        if (null != i) return _e(this, i), Ze(this, i);
        if (e) throw new RangeError("Field is not present in this state")
    }
    update(...t) {
        return ze(this, t, !0)
    }
    applyTransaction(t) {
        let e, i = this.config,
            {
                base: n,
                compartments: r
            } = i;
        for (let e of t.effects) e.is($e.reconfigure) ? (i && (r = new Map, i.compartments.forEach(((t, e) => r.set(e, t))), i = null), r.set(e.value.compartment, e.value.extension)) : e.is(je.reconfigure) ? (i = null, n = e.value) : e.is(je.appendConfig) && (i = null, n = Ne(n).concat(e.value));
        if (i) e = t.startState.values.slice();
        else {
            i = Pe.resolve(n, r, this), e = new Je(i, this.doc, this.selection, i.dynamicSlots.map((() => null)), ((t, e) => e.reconfigure(t, this)), null).values
        }
        new Je(i, t.newDoc, t.newSelection, e, ((e, i) => i.update(e, t)), t)
    }
    replaceSelection(t) {
        return "string" == typeof t && (t = this.toText(t)), this.changeByRange((e => ({
            changes: {
                from: e.from,
                to: e.to,
                insert: t
            },
            range: ce.cursor(e.from + t.length)
        })))
    }
    changeByRange(t) {
        let e = this.selection,
            i = t(e.ranges[0]),
            n = this.changes(i.changes),
            r = [i.range],
            s = Ne(i.effects);
        for (let i = 1; i < e.ranges.length; i++) {
            let o = t(e.ranges[i]),
                l = this.changes(o.changes),
                a = l.map(n);
            for (let t = 0; t < i; t++) r[t] = r[t].map(a);
            let h = n.mapDesc(l, !0);
            r.push(o.range.map(h)), n = n.compose(a), s = je.mapEffects(s, a).concat(je.mapEffects(Ne(o.effects), h))
        }
        return {
            changes: n,
            selection: ce.create(r, e.mainIndex),
            effects: s
        }
    }
    changes(t = []) {
        return t instanceof ie ? t : ie.of(t, this.doc.length, this.facet(Je.lineSeparator))
    }
    toText(t) {
        return Tt.of(t.split(this.facet(Je.lineSeparator) || Kt))
    }
    sliceDoc(t = 0, e = this.doc.length) {
        return this.doc.sliceString(t, e, this.lineBreak)
    }
    facet(t) {
        let e = this.config.address[t.id];
        return null == e ? t.default : (_e(this, e), Ze(this, e))
    }
    toJSON(t) {
        let e = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (t)
            for (let i in t) {
                let n = t[i];
                n instanceof ve && null != this.config.address[n.id] && (e[i] = n.spec.toJSON(this.field(t[i]), this))
            }
        return e
    }
    static fromJSON(t, e = {}, i) {
        if (!t || "string" != typeof t.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let n = [];
        if (i)
            for (let e in i)
                if (Object.prototype.hasOwnProperty.call(t, e)) {
                    let r = i[e],
                        s = t[e];
                    n.push(r.init((t => r.spec.fromJSON(s, t))))
                } return Je.create({
            doc: t.doc,
            selection: ce.fromJSON(t.selection),
            extensions: e.extensions ? n.concat([e.extensions]) : n
        })
    }
    static create(t = {}) {
        let e = Pe.resolve(t.extensions || [], new Map),
            i = t.doc instanceof Tt ? t.doc : Tt.of((t.doc || "").split(e.staticFacet(Je.lineSeparator) || Kt)),
            n = t.selection ? t.selection instanceof ce ? t.selection : ce.single(t.selection.anchor, t.selection.head) : ce.single(0);
        return Oe(n, i.length), e.staticFacet(Ce) || (n = n.asSingle()), new Je(e, i, n, e.dynamicSlots.map((() => null)), ((t, e) => e.create(t)), null)
    }
    get tabSize() {
        return this.facet(Je.tabSize)
    }
    get lineBreak() {
        return this.facet(Je.lineSeparator) || "\n"
    }
    get readOnly() {
        return this.facet(Re)
    }
    phrase(t, ...e) {
        for (let e of this.facet(Je.phrases))
            if (Object.prototype.hasOwnProperty.call(e, t)) {
                t = e[t];
                break
            } return e.length && (t = t.replace(/\$(\$|\d*)/g, ((t, i) => {
            if ("$" == i) return "$";
            let n = +(i || 1);
            return !n || n > e.length ? t : e[n - 1]
        }))), t
    }
    languageDataAt(t, e, i = -1) {
        let n = [];
        for (let r of this.facet(Xe))
            for (let s of r(this, e, i)) Object.prototype.hasOwnProperty.call(s, t) && n.push(s[t]);
        return n
    }
    charCategorizer(t) {
        return Fe(this.languageDataAt("wordChars", t).join(""))
    }
    wordAt(t) {
        let {
            text: e,
            from: i,
            length: n
        } = this.doc.lineAt(t), r = this.charCategorizer(t), s = t - i, o = t - i;
        for (; s > 0;) {
            let t = zt(e, s, !1);
            if (r(e.slice(t, s)) != Be.Word) break;
            s = t
        }
        for (; o < n;) {
            let t = zt(e, o);
            if (r(e.slice(o, t)) != Be.Word) break;
            o = t
        }
        return s == o ? null : ce.range(s + i, o + i)
    }
}

function Ke(t, e, i = {}) {
    let n = {};
    for (let e of t)
        for (let t of Object.keys(e)) {
            let r = e[t],
                s = n[t];
            if (void 0 === s) n[t] = r;
            else if (s === r || void 0 === r);
            else {
                if (!Object.hasOwnProperty.call(i, t)) throw new Error("Config merge conflict for field " + t);
                n[t] = i[t](s, r)
            }
        }
    for (let t in e) void 0 === n[t] && (n[t] = e[t]);
    return n
}
Je.allowMultipleSelections = Ce, Je.tabSize = fe.define({
    combine: t => t.length ? t[0] : 4
}), Je.lineSeparator = Te, Je.readOnly = Re, Je.phrases = fe.define({
    compare(t, e) {
        let i = Object.keys(t),
            n = Object.keys(e);
        return i.length == n.length && i.every((i => t[i] == e[i]))
    }
}), Je.languageData = Xe, Je.changeFilter = We, Je.transactionFilter = Ae, Je.transactionExtender = Ye, $e.reconfigure = je.define();
class ti {
    eq(t) {
        return this == t
    }
    range(t, e = t) {
        return ei.create(t, e, this)
    }
}
ti.prototype.startSide = ti.prototype.endSide = 0, ti.prototype.point = !1, ti.prototype.mapMode = te.TrackDel;
let ei = class t {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.value = i
    }
    static create(e, i, n) {
        return new t(e, i, n)
    }
};

function ii(t, e) {
    return t.from - e.from || t.value.startSide - e.value.startSide
}
class ni {
    constructor(t, e, i, n) {
        this.from = t, this.to = e, this.value = i, this.maxPoint = n
    }
    get length() {
        return this.to[this.to.length - 1]
    }
    findIndex(t, e, i, n = 0) {
        let r = i ? this.to : this.from;
        for (let s = n, o = r.length;;) {
            if (s == o) return s;
            let n = s + o >> 1,
                l = r[n] - t || (i ? this.value[n].endSide : this.value[n].startSide) - e;
            if (n == s) return l >= 0 ? s : o;
            l >= 0 ? o = n : s = n + 1
        }
    }
    between(t, e, i, n) {
        for (let r = this.findIndex(e, -1e9, !0), s = this.findIndex(i, 1e9, !1, r); r < s; r++)
            if (!1 === n(this.from[r] + t, this.to[r] + t, this.value[r])) return !1
    }
    map(t, e) {
        let i = [],
            n = [],
            r = [],
            s = -1,
            o = -1;
        for (let l = 0; l < this.value.length; l++) {
            let a, h, c = this.value[l],
                O = this.from[l] + t,
                u = this.to[l] + t;
            if (O == u) {
                let t = e.mapPos(O, c.startSide, c.mapMode);
                if (null == t) continue;
                if (a = h = t, c.startSide != c.endSide && (h = e.mapPos(O, c.endSide), h < a)) continue
            } else if (a = e.mapPos(O, c.startSide), h = e.mapPos(u, c.endSide), a > h || a == h && c.startSide > 0 && c.endSide <= 0) continue;
            (h - a || c.endSide - c.startSide) < 0 || (s < 0 && (s = a), c.point && (o = Math.max(o, h - a)), i.push(c), n.push(a - s), r.push(h - s))
        }
        return {
            mapped: i.length ? new ni(n, r, i, o) : null,
            pos: s
        }
    }
}
class ri {
    constructor(t, e, i, n) {
        this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = n
    }
    static create(t, e, i, n) {
        return new ri(t, e, i, n)
    }
    get length() {
        let t = this.chunk.length - 1;
        return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length)
    }
    get size() {
        if (this.isEmpty) return 0;
        let t = this.nextLayer.size;
        for (let e of this.chunk) t += e.value.length;
        return t
    }
    chunkEnd(t) {
        return this.chunkPos[t] + this.chunk[t].length
    }
    update(t) {
        let {
            add: e = [],
            sort: i = !1,
            filterFrom: n = 0,
            filterTo: r = this.length
        } = t, s = t.filter;
        if (0 == e.length && !s) return this;
        if (i && (e = e.slice().sort(ii)), this.isEmpty) return e.length ? ri.of(e) : this;
        let o = new li(this, null, -1).goto(0),
            l = 0,
            a = [],
            h = new si;
        for (; o.value || l < e.length;)
            if (l < e.length && (o.from - e[l].from || o.startSide - e[l].value.startSide) >= 0) {
                let t = e[l++];
                h.addInner(t.from, t.to, t.value) || a.push(t)
            } else 1 == o.rangeIndex && o.chunkIndex < this.chunk.length && (l == e.length || this.chunkEnd(o.chunkIndex) < e[l].from) && (!s || n > this.chunkEnd(o.chunkIndex) || r < this.chunkPos[o.chunkIndex]) && h.addChunk(this.chunkPos[o.chunkIndex], this.chunk[o.chunkIndex]) ? o.nextChunk() : ((!s || n > o.to || r < o.from || s(o.from, o.to, o.value)) && (h.addInner(o.from, o.to, o.value) || a.push(ei.create(o.from, o.to, o.value))), o.next());
        return h.finishInner(this.nextLayer.isEmpty && !a.length ? ri.empty : this.nextLayer.update({
            add: a,
            filter: s,
            filterFrom: n,
            filterTo: r
        }))
    }
    map(t) {
        if (t.empty || this.isEmpty) return this;
        let e = [],
            i = [],
            n = -1;
        for (let r = 0; r < this.chunk.length; r++) {
            let s = this.chunkPos[r],
                o = this.chunk[r],
                l = t.touchesRange(s, s + o.length);
            if (!1 === l) n = Math.max(n, o.maxPoint), e.push(o), i.push(t.mapPos(s));
            else if (!0 === l) {
                let {
                    mapped: r,
                    pos: l
                } = o.map(s, t);
                r && (n = Math.max(n, r.maxPoint), e.push(r), i.push(l))
            }
        }
        let r = this.nextLayer.map(t);
        return 0 == e.length ? r : new ri(i, e, r || ri.empty, n)
    }
    between(t, e, i) {
        if (!this.isEmpty) {
            for (let n = 0; n < this.chunk.length; n++) {
                let r = this.chunkPos[n],
                    s = this.chunk[n];
                if (e >= r && t <= r + s.length && !1 === s.between(r, t - r, e - r, i)) return
            }
            this.nextLayer.between(t, e, i)
        }
    }
    iter(t = 0) {
        return ai.from([this]).goto(t)
    }
    get isEmpty() {
        return this.nextLayer == this
    }
    static iter(t, e = 0) {
        return ai.from(t).goto(e)
    }
    static compare(t, e, i, n, r = -1) {
        let s = t.filter((t => t.maxPoint > 0 || !t.isEmpty && t.maxPoint >= r)),
            o = e.filter((t => t.maxPoint > 0 || !t.isEmpty && t.maxPoint >= r)),
            l = oi(s, o, i),
            a = new ci(s, l, r),
            h = new ci(o, l, r);
        i.iterGaps(((t, e, i) => Oi(a, t, h, e, i, n))), i.empty && 0 == i.length && Oi(a, 0, h, 0, 0, n)
    }
    static eq(t, e, i = 0, n) {
        null == n && (n = 999999999);
        let r = t.filter((t => !t.isEmpty && e.indexOf(t) < 0)),
            s = e.filter((e => !e.isEmpty && t.indexOf(e) < 0));
        if (r.length != s.length) return !1;
        if (!r.length) return !0;
        let o = oi(r, s),
            l = new ci(r, o, 0).goto(i),
            a = new ci(s, o, 0).goto(i);
        for (;;) {
            if (l.to != a.to || !ui(l.active, a.active) || l.point && (!a.point || !l.point.eq(a.point))) return !1;
            if (l.to > n) return !0;
            l.next(), a.next()
        }
    }
    static spans(t, e, i, n, r = -1) {
        let s = new ci(t, null, r).goto(e),
            o = e,
            l = s.openStart;
        for (;;) {
            let t = Math.min(s.to, i);
            if (s.point) {
                let i = s.activeForPoint(s.to),
                    r = s.pointFrom < e ? i.length + 1 : Math.min(i.length, l);
                n.point(o, t, s.point, i, r, s.pointRank), l = Math.min(s.openEnd(t), i.length)
            } else t > o && (n.span(o, t, s.active, l), l = s.openEnd(t));
            if (s.to > i) return l + (s.point && s.to > i ? 1 : 0);
            o = s.to, s.next()
        }
    }
    static of (t, e = !1) {
        let i = new si;
        for (let n of t instanceof ei ? [t] : e ? function(t) {
                if (t.length > 1)
                    for (let e = t[0], i = 1; i < t.length; i++) {
                        let n = t[i];
                        if (ii(e, n) > 0) return t.slice().sort(ii);
                        e = n
                    }
                return t
            }(t) : t) i.add(n.from, n.to, n.value);
        return i.finish()
    }
}
ri.empty = new ri([], [], null, -1), ri.empty.nextLayer = ri.empty;
class si {
    constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null
    }
    finishChunk(t) {
        this.chunks.push(new ni(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = [])
    }
    add(t, e, i) {
        this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new si)).add(t, e, i)
    }
    addInner(t, e, i) {
        let n = t - this.lastTo || i.startSide - this.last.endSide;
        if (n <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(n < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), !0)
    }
    addChunk(t, e) {
        if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
        let i = e.value.length - 1;
        return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, !0
    }
    finish() {
        return this.finishInner(ri.empty)
    }
    finishInner(t) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return t;
        let e = ri.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
        return this.from = null, e
    }
}

function oi(t, e, i) {
    let n = new Map;
    for (let e of t)
        for (let t = 0; t < e.chunk.length; t++) e.chunk[t].maxPoint <= 0 && n.set(e.chunk[t], e.chunkPos[t]);
    let r = new Set;
    for (let t of e)
        for (let e = 0; e < t.chunk.length; e++) {
            let s = n.get(t.chunk[e]);
            null == s || (i ? i.mapPos(s) : s) != t.chunkPos[e] || (null == i ? void 0 : i.touchesRange(s, s + t.chunk[e].length)) || r.add(t.chunk[e])
        }
    return r
}
class li {
    constructor(t, e, i, n = 0) {
        this.layer = t, this.skip = e, this.minPoint = i, this.rank = n
    }
    get startSide() {
        return this.value ? this.value.startSide : 0
    }
    get endSide() {
        return this.value ? this.value.endSide : 0
    }
    goto(t, e = -1e9) {
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, !1), this
    }
    gotoInner(t, e, i) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
            let e = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(e) || this.layer.chunkEnd(this.chunkIndex) < t || e.maxPoint < this.minPoint)) break;
            this.chunkIndex++, i = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let n = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, !0);
            (!i || this.rangeIndex < n) && this.setRangeIndex(n)
        }
        this.next()
    }
    forward(t, e) {
        (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0)
    }
    next() {
        for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = 1e9, this.value = null;
                break
            } {
                let t = this.layer.chunkPos[this.chunkIndex],
                    e = this.layer.chunk[this.chunkIndex],
                    i = t + e.from[this.rangeIndex];
                if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break
            }
        }
    }
    setRangeIndex(t) {
        if (t == this.layer.chunk[this.chunkIndex].value.length) {
            if (this.chunkIndex++, this.skip)
                for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
            this.rangeIndex = 0
        } else this.rangeIndex = t
    }
    nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
    }
    compare(t) {
        return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide
    }
}
class ai {
    constructor(t) {
        this.heap = t
    }
    static from(t, e = null, i = -1) {
        let n = [];
        for (let r = 0; r < t.length; r++)
            for (let s = t[r]; !s.isEmpty; s = s.nextLayer) s.maxPoint >= i && n.push(new li(s, e, i, r));
        return 1 == n.length ? n[0] : new ai(n)
    }
    get startSide() {
        return this.value ? this.value.startSide : 0
    }
    goto(t, e = -1e9) {
        for (let i of this.heap) i.goto(t, e);
        for (let t = this.heap.length >> 1; t >= 0; t--) hi(this.heap, t);
        return this.next(), this
    }
    forward(t, e) {
        for (let i of this.heap) i.forward(t, e);
        for (let t = this.heap.length >> 1; t >= 0; t--) hi(this.heap, t);
        (this.to - t || this.value.endSide - e) < 0 && this.next()
    }
    next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
            let t = this.heap[0];
            this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), hi(this.heap, 0)
        }
    }
}

function hi(t, e) {
    for (let i = t[e];;) {
        let n = 1 + (e << 1);
        if (n >= t.length) break;
        let r = t[n];
        if (n + 1 < t.length && r.compare(t[n + 1]) >= 0 && (r = t[n + 1], n++), i.compare(r) < 0) break;
        t[n] = i, t[e] = r, e = n
    }
}
class ci {
    constructor(t, e, i) {
        this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ai.from(t, e, i)
    }
    goto(t, e = -1e9) {
        return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this
    }
    forward(t, e) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(t, e)
    }
    removeActive(t) {
        fi(this.active, t), fi(this.activeTo, t), fi(this.activeRank, t), this.minActive = pi(this.active, this.activeTo)
    }
    addActive(t) {
        let e = 0,
            {
                value: i,
                to: n,
                rank: r
            } = this.cursor;
        for (; e < this.activeRank.length && this.activeRank[e] <= r;) e++;
        di(this.active, e, i), di(this.activeTo, e, n), di(this.activeRank, e, r), t && di(t, e, this.cursor.from), this.minActive = pi(this.active, this.activeTo)
    }
    next() {
        let t = this.to,
            e = this.point;
        this.point = null;
        let i = this.openStart < 0 ? [] : null;
        for (;;) {
            let n = this.minActive;
            if (n > -1 && (this.activeTo[n] - this.cursor.from || this.active[n].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[n] > t) {
                    this.to = this.activeTo[n], this.endSide = this.active[n].endSide;
                    break
                }
                this.removeActive(n), i && fi(i, n)
            } else {
                if (!this.cursor.value) {
                    this.to = this.endSide = 1e9;
                    break
                }
                if (this.cursor.from > t) {
                    this.to = this.cursor.from, this.endSide = this.cursor.startSide;
                    break
                } {
                    let t = this.cursor.value;
                    if (t.point) {
                        if (!(e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                            this.point = t, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = t.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                            break
                        }
                        this.cursor.next()
                    } else this.addActive(i), this.cursor.next()
                }
            }
        }
        if (i) {
            this.openStart = 0;
            for (let e = i.length - 1; e >= 0 && i[e] < t; e--) this.openStart++
        }
    }
    activeForPoint(t) {
        if (!this.active.length) return this.active;
        let e = [];
        for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)(this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
        return e.reverse()
    }
    openEnd(t) {
        let e = 0;
        for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--) e++;
        return e
    }
}

function Oi(t, e, i, n, r, s) {
    t.goto(e), i.goto(n);
    let o = n + r,
        l = n,
        a = n - e;
    for (;;) {
        let e = t.to + a - i.to || t.endSide - i.endSide,
            n = e < 0 ? t.to + a : i.to,
            r = Math.min(n, o);
        if (t.point || i.point ? t.point && i.point && (t.point == i.point || t.point.eq(i.point)) && ui(t.activeForPoint(t.to + a), i.activeForPoint(i.to)) || s.comparePoint(l, r, t.point, i.point) : r > l && !ui(t.active, i.active) && s.compareRange(l, r, t.active, i.active), n > o) break;
        l = n, e <= 0 && t.next(), e >= 0 && i.next()
    }
}

function ui(t, e) {
    if (t.length != e.length) return !1;
    for (let i = 0; i < t.length; i++)
        if (t[i] != e[i] && !t[i].eq(e[i])) return !1;
    return !0
}

function fi(t, e) {
    for (let i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
    t.pop()
}

function di(t, e, i) {
    for (let i = t.length - 1; i >= e; i--) t[i + 1] = t[i];
    t[e] = i
}

function pi(t, e) {
    let i = -1,
        n = 1e9;
    for (let r = 0; r < e.length; r++)(e[r] - n || t[r].endSide - t[i].endSide) < 0 && (i = r, n = e[r]);
    return i
}

function gi(t, e, i = t.length) {
    let n = 0;
    for (let r = 0; r < i;) 9 == t.charCodeAt(r) ? (n += e - n % e, r++) : (n++, r = zt(t, r));
    return n
}
const mi = "undefined" == typeof Symbol ? "__ͼ" : Symbol.for("ͼ"),
    Qi = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
    Si = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
class vi {
    constructor(t, e) {
        this.rules = [];
        let {
            finish: i
        } = e || {};

        function n(t) {
            return /^@/.test(t) ? [t] : t.split(/,\s*/)
        }

        function r(t, e, s, o) {
            let l = [],
                a = /^@(\w+)\b/.exec(t[0]),
                h = a && "keyframes" == a[1];
            if (a && null == e) return s.push(t[0] + ";");
            for (let i in e) {
                let o = e[i];
                if (/&/.test(i)) r(i.split(/,\s*/).map((e => t.map((t => e.replace(/&/, t))))).reduce(((t, e) => t.concat(e))), o, s);
                else if (o && "object" == typeof o) {
                    if (!a) throw new RangeError("The value of a property (" + i + ") should be a primitive value.");
                    r(n(i), o, l, h)
                } else null != o && l.push(i.replace(/_.*/, "").replace(/[A-Z]/g, (t => "-" + t.toLowerCase())) + ": " + o + ";")
            }(l.length || h) && s.push((!i || a || o ? t : t.map(i)).join(", ") + " {" + l.join(" ") + "}")
        }
        for (let e in t) r(n(e), t[e], this.rules)
    }
    getRules() {
        return this.rules.join("\n")
    }
    static newName() {
        let t = Si[mi] || 1;
        return Si[mi] = t + 1, "ͼ" + t.toString(36)
    }
    static mount(t, e) {
        (t[Qi] || new bi(t)).mount(Array.isArray(e) ? e : [e])
    }
}
let yi = null;
class bi {
    constructor(t) {
        if (!t.head && t.adoptedStyleSheets && "undefined" != typeof CSSStyleSheet) {
            if (yi) return t.adoptedStyleSheets = [yi.sheet].concat(t.adoptedStyleSheets), t[Qi] = yi;
            this.sheet = new CSSStyleSheet, t.adoptedStyleSheets = [this.sheet].concat(t.adoptedStyleSheets), yi = this
        } else {
            this.styleTag = (t.ownerDocument || t).createElement("style");
            let e = t.head || t;
            e.insertBefore(this.styleTag, e.firstChild)
        }
        this.modules = [], t[Qi] = this
    }
    mount(t) {
        let e = this.sheet,
            i = 0,
            n = 0;
        for (let r = 0; r < t.length; r++) {
            let s = t[r],
                o = this.modules.indexOf(s);
            if (o < n && o > -1 && (this.modules.splice(o, 1), n--, o = -1), -1 == o) {
                if (this.modules.splice(n++, 0, s), e)
                    for (let t = 0; t < s.rules.length; t++) e.insertRule(s.rules[t], i++)
            } else {
                for (; n < o;) i += this.modules[n++].rules.length;
                i += s.rules.length, n++
            }
        }
        if (!e) {
            let t = "";
            for (let e = 0; e < this.modules.length; e++) t += this.modules[e].getRules() + "\n";
            this.styleTag.textContent = t
        }
    }
}
for (var wi = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, xi = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
    }, $i = "undefined" != typeof navigator && /Chrome\/(\d+)/.exec(navigator.userAgent), ki = "undefined" != typeof navigator && /Mac/.test(navigator.platform), Pi = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), _i = ki || $i && +$i[1] < 57, Zi = 0; Zi < 10; Zi++) wi[48 + Zi] = wi[96 + Zi] = String(Zi);
for (Zi = 1; Zi <= 24; Zi++) wi[Zi + 111] = "F" + Zi;
for (Zi = 65; Zi <= 90; Zi++) wi[Zi] = String.fromCharCode(Zi + 32), xi[Zi] = String.fromCharCode(Zi);
for (var Xi in wi) xi.hasOwnProperty(Xi) || (xi[Xi] = wi[Xi]);

function Ci(t) {
    let e;
    return e = 11 == t.nodeType ? t.getSelection ? t : t.ownerDocument : t, e.getSelection()
}

function Ti(t, e) {
    return !!e && (t == e || t.contains(1 != e.nodeType ? e.parentNode : e))
}

function Wi(t, e) {
    if (!e.anchorNode) return !1;
    try {
        return Ti(t, e.anchorNode)
    } catch (t) {
        return !1
    }
}

function Ai(t) {
    return 3 == t.nodeType ? Gi(t, 0, t.nodeValue.length).getClientRects() : 1 == t.nodeType ? t.getClientRects() : []
}

function Yi(t, e, i, n) {
    return !!i && (Ui(t, e, i, n, -1) || Ui(t, e, i, n, 1))
}

function Ri(t) {
    for (var e = 0;; e++)
        if (!(t = t.previousSibling)) return e
}

function Ui(t, e, i, n, r) {
    for (;;) {
        if (t == i && e == n) return !0;
        if (e == (r < 0 ? 0 : Vi(t))) {
            if ("DIV" == t.nodeName) return !1;
            let i = t.parentNode;
            if (!i || 1 != i.nodeType) return !1;
            e = Ri(t) + (r < 0 ? 0 : 1), t = i
        } else {
            if (1 != t.nodeType) return !1;
            if (1 == (t = t.childNodes[e + (r < 0 ? -1 : 0)]).nodeType && "false" == t.contentEditable) return !1;
            e = r < 0 ? Vi(t) : 0
        }
    }
}

function Vi(t) {
    return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length
}
const Mi = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

function ji(t, e) {
    let i = e ? t.left : t.right;
    return {
        left: i,
        right: i,
        top: t.top,
        bottom: t.bottom
    }
}

function Di(t) {
    return {
        left: 0,
        right: t.innerWidth,
        top: 0,
        bottom: t.innerHeight
    }
}
class Ei {
    constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
    }
    eq(t) {
        return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset
    }
    setRange(t) {
        this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset)
    }
    set(t, e, i, n) {
        this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = n
    }
}
let qi, Ii = null;

function zi(t) {
    if (t.setActive) return t.setActive();
    if (Ii) return t.focus(Ii);
    let e = [];
    for (let i = t; i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument); i = i.parentNode);
    if (t.focus(null == Ii ? {
            get preventScroll() {
                return Ii = {
                    preventScroll: !0
                }, !0
            }
        } : void 0), !Ii) {
        Ii = !1;
        for (let t = 0; t < e.length;) {
            let i = e[t++],
                n = e[t++],
                r = e[t++];
            i.scrollTop != n && (i.scrollTop = n), i.scrollLeft != r && (i.scrollLeft = r)
        }
    }
}

function Gi(t, e, i = e) {
    let n = qi || (qi = document.createRange());
    return n.setEnd(t, i), n.setStart(t, e), n
}

function Ni(t, e, i) {
    let n = {
            key: e,
            code: e,
            keyCode: i,
            which: i,
            cancelable: !0
        },
        r = new KeyboardEvent("keydown", n);
    r.synthetic = !0, t.dispatchEvent(r);
    let s = new KeyboardEvent("keyup", n);
    return s.synthetic = !0, t.dispatchEvent(s), r.defaultPrevented || s.defaultPrevented
}

function Bi(t) {
    for (; t.attributes.length;) t.removeAttributeNode(t.attributes[0])
}
class Li {
    constructor(t, e, i = !0) {
        this.node = t, this.offset = e, this.precise = i
    }
    static before(t, e) {
        return new Li(t.parentNode, Ri(t), e)
    }
    static after(t, e) {
        return new Li(t.parentNode, Ri(t) + 1, e)
    }
}
const Hi = [];
class Fi {
    constructor() {
        this.parent = null, this.dom = null, this.dirty = 2
    }
    get overrideDOMText() {
        return null
    }
    get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
    }
    get posAtEnd() {
        return this.posAtStart + this.length
    }
    posBefore(t) {
        let e = this.posAtStart;
        for (let i of this.children) {
            if (i == t) return e;
            e += i.length + i.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
    }
    posAfter(t) {
        return this.posBefore(t) + t.length
    }
    coordsAt(t, e) {
        return null
    }
    sync(t, e) {
        if (2 & this.dirty) {
            let i, n = this.dom,
                r = null;
            for (let s of this.children) {
                if (s.dirty) {
                    if (!s.dom && (i = r ? r.nextSibling : n.firstChild)) {
                        let t = Fi.get(i);
                        (!t || !t.parent && t.canReuseDOM(s)) && s.reuseDOM(i)
                    }
                    s.sync(t, e), s.dirty = 0
                }
                if (i = r ? r.nextSibling : n.firstChild, e && !e.written && e.node == n && i != s.dom && (e.written = !0), s.dom.parentNode == n)
                    for (; i && i != s.dom;) i = Ji(i);
                else n.insertBefore(s.dom, i);
                r = s.dom
            }
            for (i = r ? r.nextSibling : n.firstChild, i && e && e.node == n && (e.written = !0); i;) i = Ji(i)
        } else if (1 & this.dirty)
            for (let i of this.children) i.dirty && (i.sync(t, e), i.dirty = 0)
    }
    reuseDOM(t) {}
    localPosFromDOM(t, e) {
        let i;
        if (t == this.dom) i = this.dom.childNodes[e];
        else {
            let n = 0 == Vi(t) ? 0 : 0 == e ? -1 : 1;
            for (;;) {
                let e = t.parentNode;
                if (e == this.dom) break;
                0 == n && e.firstChild != e.lastChild && (n = t == e.firstChild ? -1 : 1), t = e
            }
            i = n < 0 ? t : t.nextSibling
        }
        if (i == this.dom.firstChild) return 0;
        for (; i && !Fi.get(i);) i = i.nextSibling;
        if (!i) return this.length;
        for (let t = 0, e = 0;; t++) {
            let n = this.children[t];
            if (n.dom == i) return e;
            e += n.length + n.breakAfter
        }
    }
    domBoundsAround(t, e, i = 0) {
        let n = -1,
            r = -1,
            s = -1,
            o = -1;
        for (let l = 0, a = i, h = i; l < this.children.length; l++) {
            let i = this.children[l],
                c = a + i.length;
            if (a < t && c > e) return i.domBoundsAround(t, e, a);
            if (c >= t && -1 == n && (n = l, r = a), a > e && i.dom.parentNode == this.dom) {
                s = l, o = h;
                break
            }
            h = c, a = c + i.breakAfter
        }
        return {
            from: r,
            to: o < 0 ? i + this.length : o,
            startDOM: (n ? this.children[n - 1].dom.nextSibling : null) || this.dom.firstChild,
            endDOM: s < this.children.length && s >= 0 ? this.children[s].dom : null
        }
    }
    markDirty(t = !1) {
        this.dirty |= 2, this.markParentsDirty(t)
    }
    markParentsDirty(t) {
        for (let e = this.parent; e; e = e.parent) {
            if (t && (e.dirty |= 2), 1 & e.dirty) return;
            e.dirty |= 1, t = !1
        }
    }
    setParent(t) {
        this.parent != t && (this.parent = t, this.dirty && this.markParentsDirty(!0))
    }
    setDOM(t) {
        this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this
    }
    get rootView() {
        for (let t = this;;) {
            let e = t.parent;
            if (!e) return t;
            t = e
        }
    }
    replaceChildren(t, e, i = Hi) {
        this.markDirty();
        for (let i = t; i < e; i++) {
            let t = this.children[i];
            t.parent == this && t.destroy()
        }
        this.children.splice(t, e - t, ...i);
        for (let t = 0; t < i.length; t++) i[t].setParent(this)
    }
    ignoreMutation(t) {
        return !1
    }
    ignoreEvent(t) {
        return !1
    }
    childCursor(t = this.length) {
        return new Ki(this.children, t, this.children.length)
    }
    childPos(t, e = 1) {
        return this.childCursor().findPos(t, e)
    }
    toString() {
        let t = this.constructor.name.replace("View", "");
        return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + ("Text" == t ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "")
    }
    static get(t) {
        return t.cmView
    }
    get isEditable() {
        return !0
    }
    get isWidget() {
        return !1
    }
    merge(t, e, i, n, r, s) {
        return !1
    }
    become(t) {
        return !1
    }
    canReuseDOM(t) {
        return t.constructor == this.constructor
    }
    getSide() {
        return 0
    }
    destroy() {
        this.parent = null
    }
}

function Ji(t) {
    let e = t.nextSibling;
    return t.parentNode.removeChild(t), e
}
Fi.prototype.breakAfter = 0;
class Ki {
    constructor(t, e, i) {
        this.children = t, this.pos = e, this.i = i, this.off = 0
    }
    findPos(t, e = 1) {
        for (;;) {
            if (t > this.pos || t == this.pos && (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter)) return this.off = t - this.pos, this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter
        }
    }
}

function tn(t, e, i, n, r, s, o, l, a) {
    let {
        children: h
    } = t, c = h.length ? h[e] : null, O = s.length ? s[s.length - 1] : null, u = O ? O.breakAfter : o;
    if (!(e == n && c && !o && !u && s.length < 2 && c.merge(i, r, s.length ? O : null, 0 == i, l, a))) {
        if (n < h.length) {
            let t = h[n];
            t && r < t.length ? (e == n && (t = t.split(r), r = 0), !u && O && t.merge(0, r, O, !0, 0, a) ? s[s.length - 1] = t : (r && t.merge(0, r, null, !1, 0, a), s.push(t))) : (null == t ? void 0 : t.breakAfter) && (O ? O.breakAfter = 1 : o = 1), n++
        }
        for (c && (c.breakAfter = o, i > 0 && (!o && s.length && c.merge(i, c.length, s[0], !1, l, 0) ? c.breakAfter = s.shift().breakAfter : (i < c.length || c.children.length && 0 == c.children[c.children.length - 1].length) && c.merge(i, c.length, null, !1, l, 0), e++)); e < n && s.length;)
            if (h[n - 1].become(s[s.length - 1])) n--, s.pop(), a = s.length ? 0 : l;
            else {
                if (!h[e].become(s[0])) break;
                e++, s.shift(), l = s.length ? 0 : a
            }! s.length && e && n < h.length && !h[e - 1].breakAfter && h[n].merge(0, 0, h[e - 1], !1, l, a) && e--, (e < n || s.length) && t.replaceChildren(e, n, s)
    }
}

function en(t, e, i, n, r, s) {
    let o = t.childCursor(),
        {
            i: l,
            off: a
        } = o.findPos(i, 1),
        {
            i: h,
            off: c
        } = o.findPos(e, -1),
        O = e - i;
    for (let t of n) O += t.length;
    t.length += O, tn(t, h, c, l, a, n, 0, r, s)
}
let nn = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
    },
    rn = "undefined" != typeof document ? document : {
        documentElement: {
            style: {}
        }
    };
const sn = /Edge\/(\d+)/.exec(nn.userAgent),
    on = /MSIE \d/.test(nn.userAgent),
    ln = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(nn.userAgent),
    an = !!(on || ln || sn),
    hn = !an && /gecko\/(\d+)/i.test(nn.userAgent),
    cn = !an && /Chrome\/(\d+)/.exec(nn.userAgent),
    On = "webkitFontSmoothing" in rn.documentElement.style,
    un = !an && /Apple Computer/.test(nn.vendor),
    fn = un && (/Mobile\/\w+/.test(nn.userAgent) || nn.maxTouchPoints > 2);
var dn = {
    mac: fn || /Mac/.test(nn.platform),
    windows: /Win/.test(nn.platform),
    linux: /Linux|X11/.test(nn.platform),
    ie: an,
    ie_version: on ? rn.documentMode || 6 : ln ? +ln[1] : sn ? +sn[1] : 0,
    gecko: hn,
    gecko_version: hn ? +(/Firefox\/(\d+)/.exec(nn.userAgent) || [0, 0])[1] : 0,
    chrome: !!cn,
    chrome_version: cn ? +cn[1] : 0,
    ios: fn,
    android: /Android\b/.test(nn.userAgent),
    webkit: On,
    safari: un,
    webkit_version: On ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
    tabSize: null != rn.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
};
class pn extends Fi {
    constructor(t) {
        super(), this.text = t
    }
    get length() {
        return this.text.length
    }
    createDOM(t) {
        this.setDOM(t || document.createTextNode(this.text))
    }
    sync(t, e) {
        this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text)
    }
    reuseDOM(t) {
        3 == t.nodeType && this.createDOM(t)
    }
    merge(t, e, i) {
        return (!i || i instanceof pn && !(this.length - (e - t) + i.length > 256)) && (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), !0)
    }
    split(t) {
        let e = new pn(this.text.slice(t));
        return this.text = this.text.slice(0, t), this.markDirty(), e
    }
    localPosFromDOM(t, e) {
        return t == this.dom ? e : e ? this.text.length : 0
    }
    domAtPos(t) {
        return new Li(this.dom, t)
    }
    domBoundsAround(t, e, i) {
        return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling
        }
    }
    coordsAt(t, e) {
        return mn(this.dom, t, e)
    }
}
class gn extends Fi {
    constructor(t, e = [], i = 0) {
        super(), this.mark = t, this.children = e, this.length = i;
        for (let t of e) t.setParent(this)
    }
    setAttrs(t) {
        if (Bi(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
            for (let e in this.mark.attrs) t.setAttribute(e, this.mark.attrs[e]);
        return t
    }
    reuseDOM(t) {
        t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.dirty |= 6)
    }
    sync(t, e) {
        this.dom ? 4 & this.dirty && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e)
    }
    merge(t, e, i, n, r, s) {
        return (!i || !(!(i instanceof gn && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && s <= 0)) && (en(this, t, e, i ? i.children : [], r - 1, s - 1), this.markDirty(), !0)
    }
    split(t) {
        let e = [],
            i = 0,
            n = -1,
            r = 0;
        for (let s of this.children) {
            let o = i + s.length;
            o > t && e.push(i < t ? s.split(t - i) : s), n < 0 && i >= t && (n = r), i = o, r++
        }
        let s = this.length - t;
        return this.length = t, n > -1 && (this.children.length = n, this.markDirty()), new gn(this.mark, e, s)
    }
    domAtPos(t) {
        return wn(this, t)
    }
    coordsAt(t, e) {
        return $n(this, t, e)
    }
}

function mn(t, e, i) {
    let n = t.nodeValue.length;
    e > n && (e = n);
    let r = e,
        s = e,
        o = 0;
    0 == e && i < 0 || e == n && i >= 0 ? dn.chrome || dn.gecko || (e ? (r--, o = 1) : s < n && (s++, o = -1)) : i < 0 ? r-- : s < n && s++;
    let l = Gi(t, r, s).getClientRects();
    if (!l.length) return Mi;
    let a = l[(o ? o < 0 : i >= 0) ? 0 : l.length - 1];
    return dn.safari && !o && 0 == a.width && (a = Array.prototype.find.call(l, (t => t.width)) || a), o ? ji(a, o < 0) : a || null
}
class Qn extends Fi {
    constructor(t, e, i) {
        super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null
    }
    static create(t, e, i) {
        return new(t.customView || Qn)(t, e, i)
    }
    split(t) {
        let e = Qn.create(this.widget, this.length - t, this.side);
        return this.length -= t, e
    }
    sync(t) {
        this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false")
    }
    getSide() {
        return this.side
    }
    merge(t, e, i, n, r, s) {
        return !(i && (!(i instanceof Qn && this.widget.compare(i.widget)) || t > 0 && r <= 0 || e < this.length && s <= 0)) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
    }
    become(t) {
        return t.length == this.length && t instanceof Qn && t.side == this.side && this.widget.constructor == t.widget.constructor && (this.widget.eq(t.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, !0)
    }
    ignoreMutation() {
        return !0
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t)
    }
    get overrideDOMText() {
        if (0 == this.length) return Tt.empty;
        let t = this;
        for (; t.parent;) t = t.parent;
        let {
            view: e
        } = t, i = e && e.state.doc, n = this.posAtStart;
        return i ? i.slice(n, n + this.length) : Tt.empty
    }
    domAtPos(t) {
        return 0 == t ? Li.before(this.dom) : Li.after(this.dom, t == this.length)
    }
    domBoundsAround() {
        return null
    }
    coordsAt(t, e) {
        let i = this.dom.getClientRects(),
            n = null;
        if (!i.length) return Mi;
        for (let e = t > 0 ? i.length - 1 : 0; n = i[e], !(t > 0 ? 0 == e : e == i.length - 1 || n.top < n.bottom); e += t > 0 ? -1 : 1);
        return this.length ? n : ji(n, this.side > 0)
    }
    get isEditable() {
        return !1
    }
    get isWidget() {
        return !0
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom)
    }
}
class Sn extends Qn {
    domAtPos(t) {
        let {
            topView: e,
            text: i
        } = this.widget;
        return e ? vn(t, 0, e, i, ((t, e) => t.domAtPos(e)), (t => new Li(i, Math.min(t, i.nodeValue.length)))) : new Li(i, Math.min(t, i.nodeValue.length))
    }
    sync() {
        this.setDOM(this.widget.toDOM())
    }
    localPosFromDOM(t, e) {
        let {
            topView: i,
            text: n
        } = this.widget;
        return i ? yn(t, e, i, n) : Math.min(e, this.length)
    }
    ignoreMutation() {
        return !1
    }
    get overrideDOMText() {
        return null
    }
    coordsAt(t, e) {
        let {
            topView: i,
            text: n
        } = this.widget;
        return i ? vn(t, e, i, n, ((t, e, i) => t.coordsAt(e, i)), ((t, e) => mn(n, t, e))) : mn(n, t, e)
    }
    destroy() {
        var t;
        super.destroy(), null === (t = this.widget.topView) || void 0 === t || t.destroy()
    }
    get isEditable() {
        return !0
    }
    canReuseDOM() {
        return !0
    }
}

function vn(t, e, i, n, r, s) {
    if (i instanceof gn) {
        for (let o = i.dom.firstChild; o; o = o.nextSibling) {
            let i = Fi.get(o);
            if (!i) return s(t, e);
            let l = Ti(o, n),
                a = i.length + (l ? n.nodeValue.length : 0);
            if (t < a || t == a && i.getSide() <= 0) return l ? vn(t, e, i, n, r, s) : r(i, t, e);
            t -= a
        }
        return r(i, i.length, -1)
    }
    return i.dom == n ? s(t, e) : r(i, t, e)
}

function yn(t, e, i, n) {
    if (i instanceof gn)
        for (let r of i.children) {
            let i = 0,
                s = Ti(r.dom, n);
            if (Ti(r.dom, t)) return i + (s ? yn(t, e, r, n) : r.localPosFromDOM(t, e));
            i += s ? n.nodeValue.length : r.length
        } else if (i.dom == n) return Math.min(e, n.nodeValue.length);
    return i.localPosFromDOM(t, e)
}
class bn extends Fi {
    constructor(t) {
        super(), this.side = t
    }
    get length() {
        return 0
    }
    merge() {
        return !1
    }
    become(t) {
        return t instanceof bn && t.side == this.side
    }
    split() {
        return new bn(this.side)
    }
    sync() {
        if (!this.dom) {
            let t = document.createElement("img");
            t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t)
        }
    }
    getSide() {
        return this.side
    }
    domAtPos(t) {
        return Li.before(this.dom)
    }
    localPosFromDOM() {
        return 0
    }
    domBoundsAround() {
        return null
    }
    coordsAt(t) {
        let e = this.dom.getBoundingClientRect(),
            i = function(t, e) {
                let i = t.parent,
                    n = i ? i.children.indexOf(t) : -1;
                for (; i && n >= 0;)
                    if (e < 0 ? n > 0 : n < i.children.length) {
                        let t = i.children[n + e];
                        if (t instanceof pn) {
                            let i = t.coordsAt(e < 0 ? t.length : 0, e);
                            if (i) return i
                        }
                        n += e
                    } else {
                        if (!(i instanceof gn && i.parent)) {
                            let t = i.dom.lastChild;
                            if (t && "BR" == t.nodeName) return t.getClientRects()[0];
                            break
                        }
                        n = i.parent.children.indexOf(i) + (e < 0 ? 0 : 1), i = i.parent
                    } return
            }(this, this.side > 0 ? -1 : 1);
        return i && i.top < e.bottom && i.bottom > e.top ? {
            left: e.left,
            right: e.right,
            top: i.top,
            bottom: i.bottom
        } : e
    }
    get overrideDOMText() {
        return Tt.empty
    }
}

function wn(t, e) {
    let i = t.dom,
        {
            children: n
        } = t,
        r = 0;
    for (let t = 0; r < n.length; r++) {
        let s = n[r],
            o = t + s.length;
        if (!(o == t && s.getSide() <= 0)) {
            if (e > t && e < o && s.dom.parentNode == i) return s.domAtPos(e - t);
            if (e <= t) break;
            t = o
        }
    }
    for (let t = r; t > 0; t--) {
        let e = n[t - 1];
        if (e.dom.parentNode == i) return e.domAtPos(e.length)
    }
    for (let t = r; t < n.length; t++) {
        let e = n[t];
        if (e.dom.parentNode == i) return e.domAtPos(0)
    }
    return new Li(i, 0)
}

function xn(t, e, i) {
    let n, {
        children: r
    } = t;
    i > 0 && e instanceof gn && r.length && (n = r[r.length - 1]) instanceof gn && n.mark.eq(e.mark) ? xn(n, e.children[0], i - 1) : (r.push(e), e.setParent(t)), t.length += e.length
}

function $n(t, e, i) {
    let n = null,
        r = -1,
        s = null,
        o = -1;
    ! function t(e, i) {
        for (let l = 0, a = 0; l < e.children.length && a <= i; l++) {
            let h = e.children[l],
                c = a + h.length;
            c >= i && (h.children.length ? t(h, i - a) : !s && (c > i || a == c && h.getSide() > 0) ? (s = h, o = i - a) : (a < i || a == c && h.getSide() < 0) && (n = h, r = i - a)), a = c
        }
    }(t, e);
    let l = (i < 0 ? n : s) || n || s;
    return l ? l.coordsAt(Math.max(0, l == n ? r : o), i) : function(t) {
        let e = t.dom.lastChild;
        if (!e) return t.dom.getBoundingClientRect();
        let i = Ai(e);
        return i[i.length - 1] || null
    }(t)
}

function kn(t, e) {
    for (let i in t) "class" == i && e.class ? e.class += " " + t.class : "style" == i && e.style ? e.style += ";" + t.style : e[i] = t[i];
    return e
}

function Pn(t, e) {
    if (t == e) return !0;
    if (!t || !e) return !1;
    let i = Object.keys(t),
        n = Object.keys(e);
    if (i.length != n.length) return !1;
    for (let r of i)
        if (-1 == n.indexOf(r) || t[r] !== e[r]) return !1;
    return !0
}

function _n(t, e, i) {
    let n = null;
    if (e)
        for (let r in e) i && r in i || t.removeAttribute(n = r);
    if (i)
        for (let r in i) e && e[r] == i[r] || t.setAttribute(n = r, i[r]);
    return !!n
}
pn.prototype.children = Qn.prototype.children = bn.prototype.children = Hi;
class Zn {
    eq(t) {
        return !1
    }
    updateDOM(t, e) {
        return !1
    }
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t)
    }
    get estimatedHeight() {
        return -1
    }
    ignoreEvent(t) {
        return !0
    }
    get customView() {
        return null
    }
    destroy(t) {}
}
var Xn = function(t) {
    return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t
}(Xn || (Xn = {}));
class Cn extends ti {
    constructor(t, e, i, n) {
        super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = n
    }
    get heightRelevant() {
        return !1
    }
    static mark(t) {
        return new Tn(t)
    }
    static widget(t) {
        let e = t.side || 0,
            i = !!t.block;
        return e += i ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new An(t, e, e, i, t.widget || null, !1)
    }
    static replace(t) {
        let e, i, n = !!t.block;
        if (t.isBlockGap) e = -5e8, i = 4e8;
        else {
            let {
                start: r,
                end: s
            } = Yn(t, n);
            e = (r ? n ? -3e8 : -1 : 5e8) - 1, i = 1 + (s ? n ? 2e8 : 1 : -6e8)
        }
        return new An(t, e, i, n, t.widget || null, !0)
    }
    static line(t) {
        return new Wn(t)
    }
    static set(t, e = !1) {
        return ri.of(t, e)
    }
    hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
    }
}
Cn.none = ri.empty;
class Tn extends Cn {
    constructor(t) {
        let {
            start: e,
            end: i
        } = Yn(t);
        super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null
    }
    eq(t) {
        return this == t || t instanceof Tn && this.tagName == t.tagName && this.class == t.class && Pn(this.attrs, t.attrs)
    }
    range(t, e = t) {
        if (t >= e) throw new RangeError("Mark decorations may not be empty");
        return super.range(t, e)
    }
}
Tn.prototype.point = !1;
class Wn extends Cn {
    constructor(t) {
        super(-2e8, -2e8, null, t)
    }
    eq(t) {
        return t instanceof Wn && this.spec.class == t.spec.class && Pn(this.spec.attributes, t.spec.attributes)
    }
    range(t, e = t) {
        if (e != t) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(t, e)
    }
}
Wn.prototype.mapMode = te.TrackBefore, Wn.prototype.point = !0;
class An extends Cn {
    constructor(t, e, i, n, r, s) {
        super(e, i, r, t), this.block = n, this.isReplace = s, this.mapMode = n ? e <= 0 ? te.TrackBefore : te.TrackAfter : te.TrackDel
    }
    get type() {
        return this.startSide < this.endSide ? Xn.WidgetRange : this.startSide <= 0 ? Xn.WidgetBefore : Xn.WidgetAfter
    }
    get heightRelevant() {
        return this.block || !!this.widget && this.widget.estimatedHeight >= 5
    }
    eq(t) {
        return t instanceof An && function(t, e) {
            return t == e || !!(t && e && t.compare(e))
        }(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide
    }
    range(t, e = t) {
        if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && e != t) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(t, e)
    }
}

function Yn(t, e = !1) {
    let {
        inclusiveStart: i,
        inclusiveEnd: n
    } = t;
    return null == i && (i = t.inclusive), null == n && (n = t.inclusive), {
        start: null != i ? i : e,
        end: null != n ? n : e
    }
}

function Rn(t, e, i, n = 0) {
    let r = i.length - 1;
    r >= 0 && i[r] + n >= t ? i[r] = Math.max(i[r], e) : i.push(t, e)
}
An.prototype.point = !0;
class Un extends Fi {
    constructor() {
        super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0
    }
    merge(t, e, i, n, r, s) {
        if (i) {
            if (!(i instanceof Un)) return !1;
            this.dom || i.transferDOM(this)
        }
        return n && this.setDeco(i ? i.attrs : null), en(this, t, e, i ? i.children : [], r, s), !0
    }
    split(t) {
        let e = new Un;
        if (e.breakAfter = this.breakAfter, 0 == this.length) return e;
        let {
            i: i,
            off: n
        } = this.childPos(t);
        n && (e.append(this.children[i].split(n), 0), this.children[i].merge(n, this.children[i].length, null, !1, 0, 0), i++);
        for (let t = i; t < this.children.length; t++) e.append(this.children[t], 0);
        for (; i > 0 && 0 == this.children[i - 1].length;) this.children[--i].destroy();
        return this.children.length = i, this.markDirty(), this.length = t, e
    }
    transferDOM(t) {
        this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = void 0 === this.prevAttrs ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null)
    }
    setDeco(t) {
        Pn(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t)
    }
    append(t, e) {
        xn(this, t, e)
    }
    addLineDeco(t) {
        let e = t.spec.attributes,
            i = t.spec.class;
        e && (this.attrs = kn(e, this.attrs || {})), i && (this.attrs = kn({
            class: i
        }, this.attrs || {}))
    }
    domAtPos(t) {
        return wn(this, t)
    }
    reuseDOM(t) {
        "DIV" == t.nodeName && (this.setDOM(t), this.dirty |= 6)
    }
    sync(t, e) {
        var i;
        this.dom ? 4 & this.dirty && (Bi(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), void 0 !== this.prevAttrs && (_n(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
        let n = this.dom.lastChild;
        for (; n && Fi.get(n) instanceof gn;) n = n.lastChild;
        if (!(n && this.length && ("BR" == n.nodeName || 0 != (null === (i = Fi.get(n)) || void 0 === i ? void 0 : i.isEditable) || dn.ios && this.children.some((t => t instanceof pn))))) {
            let t = document.createElement("BR");
            t.cmIgnore = !0, this.dom.appendChild(t)
        }
    }
    measureTextSize() {
        if (0 == this.children.length || this.length > 20) return null;
        let t = 0;
        for (let e of this.children) {
            if (!(e instanceof pn) || /[^ -~]/.test(e.text)) return null;
            let i = Ai(e.dom);
            if (1 != i.length) return null;
            t += i[0].width
        }
        return t ? {
            lineHeight: this.dom.getBoundingClientRect().height,
            charWidth: t / this.length
        } : null
    }
    coordsAt(t, e) {
        return $n(this, t, e)
    }
    become(t) {
        return !1
    }
    get type() {
        return Xn.Text
    }
    static find(t, e) {
        for (let i = 0, n = 0; i < t.children.length; i++) {
            let r = t.children[i],
                s = n + r.length;
            if (s >= e) {
                if (r instanceof Un) return r;
                if (s > e) break
            }
            n = s + r.breakAfter
        }
        return null
    }
}
class Vn extends Fi {
    constructor(t, e, i) {
        super(), this.widget = t, this.length = e, this.type = i, this.breakAfter = 0, this.prevWidget = null
    }
    merge(t, e, i, n, r, s) {
        return !(i && (!(i instanceof Vn && this.widget.compare(i.widget)) || t > 0 && r <= 0 || e < this.length && s <= 0)) && (this.length = t + (i ? i.length : 0) + (this.length - e), !0)
    }
    domAtPos(t) {
        return 0 == t ? Li.before(this.dom) : Li.after(this.dom, t == this.length)
    }
    split(t) {
        let e = this.length - t;
        this.length = t;
        let i = new Vn(this.widget, e, this.type);
        return i.breakAfter = this.breakAfter, i
    }
    get children() {
        return Hi
    }
    sync(t) {
        this.dom && this.widget.updateDOM(this.dom, t) || (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.dom.contentEditable = "false")
    }
    get overrideDOMText() {
        return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Tt.empty
    }
    domBoundsAround() {
        return null
    }
    become(t) {
        return t instanceof Vn && t.type == this.type && t.widget.constructor == this.widget.constructor && (t.widget.eq(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.breakAfter = t.breakAfter, !0)
    }
    ignoreMutation() {
        return !0
    }
    ignoreEvent(t) {
        return this.widget.ignoreEvent(t)
    }
    get isEditable() {
        return !1
    }
    get isWidget() {
        return !0
    }
    destroy() {
        super.destroy(), this.dom && this.widget.destroy(this.dom)
    }
}
class Mn {
    constructor(t, e, i, n) {
        this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = n, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e
    }
    posCovered() {
        if (0 == this.content.length) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
        let t = this.content[this.content.length - 1];
        return !(t.breakAfter || t instanceof Vn && t.type == Xn.WidgetBefore)
    }
    getLine() {
        return this.curLine || (this.content.push(this.curLine = new Un), this.atCursorPos = !0), this.curLine
    }
    flushBuffer(t = this.bufferMarks) {
        this.pendingBuffer && (this.curLine.append(jn(new bn(-1), t), t.length), this.pendingBuffer = 0)
    }
    addBlockWidget(t) {
        this.flushBuffer(), this.curLine = null, this.content.push(t)
    }
    finish(t) {
        this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, this.posCovered() || this.getLine()
    }
    buildText(t, e, i) {
        for (; t > 0;) {
            if (this.textOff == this.text.length) {
                let {
                    value: e,
                    lineBreak: i,
                    done: n
                } = this.cursor.next(this.skip);
                if (this.skip = 0, n) throw new Error("Ran out of text content when drawing inline views");
                if (i) {
                    this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, t--;
                    continue
                }
                this.text = e, this.textOff = 0
            }
            let n = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e.slice(e.length - i)), this.getLine().append(jn(new pn(this.text.slice(this.textOff, this.textOff + n)), e), i), this.atCursorPos = !0, this.textOff += n, t -= n, i = 0
        }
    }
    span(t, e, i, n) {
        this.buildText(e - t, i, n), this.pos = e, this.openStart < 0 && (this.openStart = n)
    }
    point(t, e, i, n, r, s) {
        if (this.disallowBlockEffectsFor[s] && i instanceof An) {
            if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
            if (e > this.doc.lineAt(this.pos).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
        }
        let o = e - t;
        if (i instanceof An)
            if (i.block) {
                let {
                    type: t
                } = i;
                t != Xn.WidgetAfter || this.posCovered() || this.getLine(), this.addBlockWidget(new Vn(i.widget || new Dn("div"), o, t))
            } else {
                let s = Qn.create(i.widget || new Dn("span"), o, o ? 0 : i.startSide),
                    l = this.atCursorPos && !s.isEditable && r <= n.length && (t < e || i.startSide > 0),
                    a = !s.isEditable && (t < e || r > n.length || i.startSide <= 0),
                    h = this.getLine();
                2 != this.pendingBuffer || l || (this.pendingBuffer = 0), this.flushBuffer(n), l && (h.append(jn(new bn(1), n), r), r = n.length + Math.max(0, r - n.length)), h.append(jn(s, n), r), this.atCursorPos = a, this.pendingBuffer = a ? t < e || r > n.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = n.slice())
            }
        else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
        o && (this.textOff + o <= this.text.length ? this.textOff += o : (this.skip += o - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r)
    }
    static build(t, e, i, n, r) {
        let s = new Mn(t, e, i, r);
        return s.openEnd = ri.spans(n, e, i, s), s.openStart < 0 && (s.openStart = s.openEnd), s.finish(s.openEnd), s
    }
}

function jn(t, e) {
    for (let i of e) t = new gn(i, [t], t.length);
    return t
}
class Dn extends Zn {
    constructor(t) {
        super(), this.tag = t
    }
    eq(t) {
        return t.tag == this.tag
    }
    toDOM() {
        return document.createElement(this.tag)
    }
    updateDOM(t) {
        return t.nodeName.toLowerCase() == this.tag
    }
}
const En = fe.define(),
    qn = fe.define(),
    In = fe.define(),
    zn = fe.define(),
    Gn = fe.define(),
    Nn = fe.define(),
    Bn = fe.define(),
    Ln = fe.define({
        combine: t => t.some((t => t))
    }),
    Hn = fe.define({
        combine: t => t.some((t => t))
    });
class Fn {
    constructor(t, e = "nearest", i = "nearest", n = 5, r = 5) {
        this.range = t, this.y = e, this.x = i, this.yMargin = n, this.xMargin = r
    }
    map(t) {
        return t.empty ? this : new Fn(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin)
    }
}
const Jn = je.define({
    map: (t, e) => t.map(e)
});

function Kn(t, e, i) {
    let n = t.facet(zn);
    n.length ? n[0](e) : window.onerror ? window.onerror(String(e), i, void 0, void 0, e) : i ? console.error(i + ":", e) : console.error(e)
}
const tr = fe.define({
    combine: t => !t.length || t[0]
});
let er = 0;
const ir = fe.define();
class nr {
    constructor(t, e, i, n) {
        this.id = t, this.create = e, this.domEventHandlers = i, this.extension = n(this)
    }
    static define(t, e) {
        const {
            eventHandlers: i,
            provide: n,
            decorations: r
        } = e || {};
        return new nr(er++, t, i, (t => {
            let e = [ir.of(t)];
            return r && e.push(lr.of((e => {
                let i = e.plugin(t);
                return i ? r(i) : Cn.none
            }))), n && e.push(n(t)), e
        }))
    }
    static fromClass(t, e) {
        return nr.define((e => new t(e)), e)
    }
}
class rr {
    constructor(t) {
        this.spec = t, this.mustUpdate = null, this.value = null
    }
    update(t) {
        if (this.value) {
            if (this.mustUpdate) {
                let t = this.mustUpdate;
                if (this.mustUpdate = null, this.value.update) try {
                    this.value.update(t)
                } catch (e) {
                    if (Kn(t.state, e, "CodeMirror plugin crashed"), this.value.destroy) try {
                        this.value.destroy()
                    } catch (t) {}
                    this.deactivate()
                }
            }
        } else if (this.spec) try {
            this.value = this.spec.create(t)
        } catch (e) {
            Kn(t.state, e, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
    }
    destroy(t) {
        var e;
        if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy) try {
            this.value.destroy()
        } catch (e) {
            Kn(t.state, e, "CodeMirror plugin crashed")
        }
    }
    deactivate() {
        this.spec = this.value = null
    }
}
const sr = fe.define(),
    or = fe.define(),
    lr = fe.define(),
    ar = fe.define(),
    hr = fe.define(),
    cr = fe.define();
class Or {
    constructor(t, e, i, n) {
        this.fromA = t, this.toA = e, this.fromB = i, this.toB = n
    }
    join(t) {
        return new Or(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB))
    }
    addToSet(t) {
        let e = t.length,
            i = this;
        for (; e > 0; e--) {
            let n = t[e - 1];
            if (!(n.fromA > i.toA)) {
                if (n.toA < i.fromA) break;
                i = i.join(n), t.splice(e - 1, 1)
            }
        }
        return t.splice(e, 0, i), t
    }
    static extendWithRanges(t, e) {
        if (0 == e.length) return t;
        let i = [];
        for (let n = 0, r = 0, s = 0, o = 0;; n++) {
            let l = n == t.length ? null : t[n],
                a = s - o,
                h = l ? l.fromB : 1e9;
            for (; r < e.length && e[r] < h;) {
                let t = e[r],
                    n = e[r + 1],
                    s = Math.max(o, t),
                    l = Math.min(h, n);
                if (s <= l && new Or(s + a, l + a, s, l).addToSet(i), n > h) break;
                r += 2
            }
            if (!l) return i;
            new Or(l.fromA, l.toA, l.fromB, l.toB).addToSet(i), s = l.toA, o = l.toB
        }
    }
}
class ur {
    constructor(t, e, i) {
        this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = ie.empty(this.startState.doc.length);
        for (let t of i) this.changes = this.changes.compose(t.changes);
        let n = [];
        this.changes.iterChangedRanges(((t, e, i, r) => n.push(new Or(t, e, i, r)))), this.changedRanges = n
    }
    static create(t, e, i) {
        return new ur(t, e, i)
    }
    get viewportChanged() {
        return (4 & this.flags) > 0
    }
    get heightChanged() {
        return (2 & this.flags) > 0
    }
    get geometryChanged() {
        return this.docChanged || (10 & this.flags) > 0
    }
    get focusChanged() {
        return (1 & this.flags) > 0
    }
    get docChanged() {
        return !this.changes.empty
    }
    get selectionSet() {
        return this.transactions.some((t => t.selection))
    }
    get empty() {
        return 0 == this.flags && 0 == this.transactions.length
    }
}
var fr = function(t) {
    return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t
}(fr || (fr = {}));
const dr = fr.LTR,
    pr = fr.RTL;

function gr(t) {
    let e = [];
    for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
    return e
}
const mr = gr("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
    Qr = gr("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
    Sr = Object.create(null),
    vr = [];
for (let t of ["()", "[]", "{}"]) {
    let e = t.charCodeAt(0),
        i = t.charCodeAt(1);
    Sr[e] = i, Sr[i] = -e
}
const yr = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class br {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.level = i
    }
    get dir() {
        return this.level % 2 ? pr : dr
    }
    side(t, e) {
        return this.dir == e == t ? this.to : this.from
    }
    static find(t, e, i, n) {
        let r = -1;
        for (let s = 0; s < t.length; s++) {
            let o = t[s];
            if (o.from <= e && o.to >= e) {
                if (o.level == i) return s;
                (r < 0 || (0 != n ? n < 0 ? o.from < e : o.to > e : t[r].level > o.level)) && (r = s)
            }
        }
        if (r < 0) throw new RangeError("Index out of range");
        return r
    }
}
const wr = [];

function xr(t) {
    return [new br(0, t, 0)]
}
let $r = "";

function kr(t, e, i, n, r) {
    var s;
    let o = n.head - t.from,
        l = -1;
    if (0 == o) {
        if (!r || !t.length) return null;
        e[0].level != i && (o = e[0].side(!1, i), l = 0)
    } else if (o == t.length) {
        if (r) return null;
        let t = e[e.length - 1];
        t.level != i && (o = t.side(!0, i), l = e.length - 1)
    }
    l < 0 && (l = br.find(e, o, null !== (s = n.bidiLevel) && void 0 !== s ? s : -1, n.assoc));
    let a = e[l];
    o == a.side(r, i) && (a = e[l += r ? 1 : -1], o = a.side(!r, i));
    let h = r == (a.dir == i),
        c = zt(t.text, o, h);
    if ($r = t.text.slice(Math.min(o, c), Math.max(o, c)), c != a.side(r, i)) return ce.cursor(c + t.from, h ? -1 : 1, a.level);
    let O = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
    return O || a.level == i ? O && O.level < a.level ? ce.cursor(O.side(!r, i) + t.from, r ? 1 : -1, O.level) : ce.cursor(c + t.from, r ? -1 : 1, a.level) : ce.cursor(r ? t.to : t.from, r ? -1 : 1, i)
}
const Pr = "￿";
class _r {
    constructor(t, e) {
        this.points = t, this.text = "", this.lineSeparator = e.facet(Je.lineSeparator)
    }
    append(t) {
        this.text += t
    }
    lineBreak() {
        this.text += Pr
    }
    readRange(t, e) {
        if (!t) return this;
        let i = t.parentNode;
        for (let n = t;;) {
            this.findPointBefore(i, n), this.readNode(n);
            let t = n.nextSibling;
            if (t == e) break;
            let r = Fi.get(n),
                s = Fi.get(t);
            (r && s ? r.breakAfter : (r ? r.breakAfter : Zr(n)) || Zr(t) && ("BR" != n.nodeName || n.cmIgnore)) && this.lineBreak(), n = t
        }
        return this.findPointBefore(i, e), this
    }
    readTextNode(t) {
        let e = t.nodeValue;
        for (let i of this.points) i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
        for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g;;) {
            let r, s = -1,
                o = 1;
            if (this.lineSeparator ? (s = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (r = n.exec(e)) && (s = r.index, o = r[0].length), this.append(e.slice(i, s < 0 ? e.length : s)), s < 0) break;
            if (this.lineBreak(), o > 1)
                for (let e of this.points) e.node == t && e.pos > this.text.length && (e.pos -= o - 1);
            i = s + o
        }
    }
    readNode(t) {
        if (t.cmIgnore) return;
        let e = Fi.get(t),
            i = e && e.overrideDOMText;
        if (null != i) {
            this.findPointInside(t, i.length);
            for (let t = i.iter(); !t.next().done;) t.lineBreak ? this.lineBreak() : this.append(t.value)
        } else 3 == t.nodeType ? this.readTextNode(t) : "BR" == t.nodeName ? t.nextSibling && this.lineBreak() : 1 == t.nodeType && this.readRange(t.firstChild, null)
    }
    findPointBefore(t, e) {
        for (let i of this.points) i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length)
    }
    findPointInside(t, e) {
        for (let i of this.points)(3 == t.nodeType ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + Math.min(e, i.offset))
    }
}

function Zr(t) {
    return 1 == t.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
}
class Xr {
    constructor(t, e) {
        this.node = t, this.offset = e, this.pos = -1
    }
}
class Cr extends Fi {
    constructor(t) {
        super(), this.view = t, this.compositionDeco = Cn.none, this.decorations = [], this.dynamicDecorationMap = [], this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new Un], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Or(0, 0, 0, t.state.doc.length)], 0)
    }
    get length() {
        return this.view.state.doc.length
    }
    update(t) {
        let e = t.changedRanges;
        this.minWidth > 0 && e.length && (e.every((({
            fromA: t,
            toA: e
        }) => e < this.minWidthFrom || t > this.minWidthTo)) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.view.inputState.composing < 0 ? this.compositionDeco = Cn.none : (t.transactions.length || this.dirty) && (this.compositionDeco = function(t, e) {
            let i = Wr(t);
            if (!i) return Cn.none;
            let {
                from: n,
                to: r,
                node: s,
                text: o
            } = i, l = e.mapPos(n, 1), a = Math.max(l, e.mapPos(r, -1)), {
                state: h
            } = t, c = 3 == s.nodeType ? s.nodeValue : new _r([], h).readRange(s.firstChild, null).text;
            if (a - l < c.length)
                if (h.doc.sliceString(l, Math.min(h.doc.length, l + c.length), Pr) == c) a = l + c.length;
                else {
                    if (h.doc.sliceString(Math.max(0, a - c.length), a, Pr) != c) return Cn.none;
                    l = a - c.length
                }
            else if (h.doc.sliceString(l, a, Pr) != c) return Cn.none;
            let O = Fi.get(s);
            O instanceof Sn ? O = O.widget.topView : O && (O.parent = null);
            return Cn.set(Cn.replace({
                widget: new Ar(s, o, O),
                inclusive: !0
            }).range(l, a))
        }(this.view, t.changes)), (dn.ie || dn.chrome) && !this.compositionDeco.size && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = !0);
        let i = function(t, e, i) {
            let n = new Rr;
            return ri.compare(t, e, i, n), n.changes
        }(this.decorations, this.updateDeco(), t.changes);
        return e = Or.extendWithRanges(e, i), (0 != this.dirty || 0 != e.length) && (this.updateInner(e, t.startState.doc.length), t.transactions.length && (this.lastUpdate = Date.now()), !0)
    }
    updateInner(t, e) {
        this.view.viewState.mustMeasureContent = !0, this.updateChildren(t, e);
        let {
            observer: i
        } = this.view;
        i.ignore((() => {
            this.dom.style.height = this.view.viewState.contentHeight + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
            let t = dn.chrome || dn.ios ? {
                node: i.selectionRange.focusNode,
                written: !1
            } : void 0;
            this.sync(this.view, t), this.dirty = 0, t && (t.written || i.selectionRange.focusNode != t.node) && (this.forceSelection = !0), this.dom.style.height = ""
        }));
        let n = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
            for (let t of this.children) t instanceof Vn && t.widget instanceof Tr && n.push(t.dom);
        i.updateGaps(n)
    }
    updateChildren(t, e) {
        let i = this.childCursor(e);
        for (let e = t.length - 1;; e--) {
            let n = e >= 0 ? t[e] : null;
            if (!n) break;
            let {
                fromA: r,
                toA: s,
                fromB: o,
                toB: l
            } = n, {
                content: a,
                breakAtStart: h,
                openStart: c,
                openEnd: O
            } = Mn.build(this.view.state.doc, o, l, this.decorations, this.dynamicDecorationMap), {
                i: u,
                off: f
            } = i.findPos(s, 1), {
                i: d,
                off: p
            } = i.findPos(r, -1);
            tn(this, d, p, u, f, a, h, c, O)
        }
    }
    updateSelection(t = !1, e = !1) {
        if (!t && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange(), !e && !this.mayControlSelection()) return;
        let i = this.forceSelection;
        this.forceSelection = !1;
        let n = this.view.state.selection.main,
            r = this.domAtPos(n.anchor),
            s = n.empty ? r : this.domAtPos(n.head);
        if (dn.gecko && n.empty && (1 == (o = r).node.nodeType && o.node.firstChild && (0 == o.offset || "false" == o.node.childNodes[o.offset - 1].contentEditable) && (o.offset == o.node.childNodes.length || "false" == o.node.childNodes[o.offset].contentEditable))) {
            let t = document.createTextNode("");
            this.view.observer.ignore((() => r.node.insertBefore(t, r.node.childNodes[r.offset] || null))), r = s = new Li(t, 0), i = !0
        }
        var o;
        let l = this.view.observer.selectionRange;
        !i && l.focusNode && Yi(r.node, r.offset, l.anchorNode, l.anchorOffset) && Yi(s.node, s.offset, l.focusNode, l.focusOffset) || (this.view.observer.ignore((() => {
            dn.android && dn.chrome && this.dom.contains(l.focusNode) && function(t, e) {
                for (let i = t; i && i != e; i = i.assignedSlot || i.parentNode)
                    if (1 == i.nodeType && "false" == i.contentEditable) return !0;
                return !1
            }(l.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({
                preventScroll: !0
            }));
            let t = Ci(this.view.root);
            if (t)
                if (n.empty) {
                    if (dn.gecko) {
                        let t = (e = r.node, i = r.offset, 1 != e.nodeType ? 0 : (i && "false" == e.childNodes[i - 1].contentEditable ? 1 : 0) | (i < e.childNodes.length && "false" == e.childNodes[i].contentEditable ? 2 : 0));
                        if (t && 3 != t) {
                            let e = Yr(r.node, r.offset, 1 == t ? 1 : -1);
                            e && (r = new Li(e, 1 == t ? 0 : e.nodeValue.length))
                        }
                    }
                    t.collapse(r.node, r.offset), null != n.bidiLevel && null != l.cursorBidiLevel && (l.cursorBidiLevel = n.bidiLevel)
                } else if (t.extend) {
                t.collapse(r.node, r.offset);
                try {
                    t.extend(s.node, s.offset)
                } catch (t) {}
            } else {
                let e = document.createRange();
                n.anchor > n.head && ([r, s] = [s, r]), e.setEnd(s.node, s.offset), e.setStart(r.node, r.offset), t.removeAllRanges(), t.addRange(e)
            } else;
            var e, i
        })), this.view.observer.setSelectionRange(r, s)), this.impreciseAnchor = r.precise ? null : new Li(l.anchorNode, l.anchorOffset), this.impreciseHead = s.precise ? null : new Li(l.focusNode, l.focusOffset)
    }
    enforceCursorAssoc() {
        if (this.compositionDeco.size) return;
        let {
            view: t
        } = this, e = t.state.selection.main, i = Ci(t.root), {
            anchorNode: n,
            anchorOffset: r
        } = t.observer.selectionRange;
        if (!(i && e.empty && e.assoc && i.modify)) return;
        let s = Un.find(this, e.head);
        if (!s) return;
        let o = s.posAtStart;
        if (e.head == o || e.head == o + s.length) return;
        let l = this.coordsAt(e.head, -1),
            a = this.coordsAt(e.head, 1);
        if (!l || !a || l.bottom > a.top) return;
        let h = this.domAtPos(e.head + e.assoc);
        i.collapse(h.node, h.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
        let c = t.observer.selectionRange;
        t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from && i.collapse(n, r)
    }
    mayControlSelection() {
        let t = this.view.root.activeElement;
        return t == this.dom || Wi(this.dom, this.view.observer.selectionRange) && !(t && this.dom.contains(t))
    }
    nearest(t) {
        for (let e = t; e;) {
            let t = Fi.get(e);
            if (t && t.rootView == this) return t;
            e = e.parentNode
        }
        return null
    }
    posFromDOM(t, e) {
        let i = this.nearest(t);
        if (!i) throw new RangeError("Trying to find position for a DOM position outside of the document");
        return i.localPosFromDOM(t, e) + i.posAtStart
    }
    domAtPos(t) {
        let {
            i: e,
            off: i
        } = this.childCursor().findPos(t, -1);
        for (; e < this.children.length - 1;) {
            let t = this.children[e];
            if (i < t.length || t instanceof Un) break;
            e++, i = 0
        }
        return this.children[e].domAtPos(i)
    }
    coordsAt(t, e) {
        for (let i = this.length, n = this.children.length - 1;; n--) {
            let r = this.children[n],
                s = i - r.breakAfter - r.length;
            if (t > s || t == s && r.type != Xn.WidgetBefore && r.type != Xn.WidgetAfter && (!n || 2 == e || this.children[n - 1].breakAfter || this.children[n - 1].type == Xn.WidgetBefore && e > -2)) return r.coordsAt(t - s, e);
            i = s
        }
    }
    measureVisibleLineHeights(t) {
        let e = [],
            {
                from: i,
                to: n
            } = t,
            r = this.view.contentDOM.clientWidth,
            s = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
            o = -1,
            l = this.view.textDirection == fr.LTR;
        for (let t = 0, a = 0; a < this.children.length; a++) {
            let h = this.children[a],
                c = t + h.length;
            if (c > n) break;
            if (t >= i) {
                let i = h.dom.getBoundingClientRect();
                if (e.push(i.height), s) {
                    let e = h.dom.lastChild,
                        n = e ? Ai(e) : [];
                    if (n.length) {
                        let e = n[n.length - 1],
                            s = l ? e.right - i.left : i.right - e.left;
                        s > o && (o = s, this.minWidth = r, this.minWidthFrom = t, this.minWidthTo = c)
                    }
                }
            }
            t = c + h.breakAfter
        }
        return e
    }
    textDirectionAt(t) {
        let {
            i: e
        } = this.childPos(t, 1);
        return "rtl" == getComputedStyle(this.children[e].dom).direction ? fr.RTL : fr.LTR
    }
    measureTextSize() {
        for (let t of this.children)
            if (t instanceof Un) {
                let e = t.measureTextSize();
                if (e) return e
            } let t, e, i = document.createElement("div");
        return i.className = "cm-line", i.style.width = "99999px", i.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
            this.dom.appendChild(i);
            let n = Ai(i.firstChild)[0];
            t = i.getBoundingClientRect().height, e = n ? n.width / 27 : 7, i.remove()
        })), {
            lineHeight: t,
            charWidth: e
        }
    }
    childCursor(t = this.length) {
        let e = this.children.length;
        return e && (t -= this.children[--e].length), new Ki(this.children, t, e)
    }
    computeBlockGapDeco() {
        let t = [],
            e = this.view.viewState;
        for (let i = 0, n = 0;; n++) {
            let r = n == e.viewports.length ? null : e.viewports[n],
                s = r ? r.from - 1 : this.length;
            if (s > i) {
                let n = e.lineBlockAt(s).bottom - e.lineBlockAt(i).top;
                t.push(Cn.replace({
                    widget: new Tr(n),
                    block: !0,
                    inclusive: !0,
                    isBlockGap: !0
                }).range(i, s))
            }
            if (!r) break;
            i = r.to + 1
        }
        return Cn.set(t)
    }
    updateDeco() {
        let t = this.view.state.facet(lr).map(((t, e) => (this.dynamicDecorationMap[e] = "function" == typeof t) ? t(this.view) : t));
        for (let e = t.length; e < t.length + 3; e++) this.dynamicDecorationMap[e] = !1;
        return this.decorations = [...t, this.compositionDeco, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]
    }
    scrollIntoView(t) {
        let e, {
                range: i
            } = t,
            n = this.coordsAt(i.head, i.empty ? i.assoc : i.head > i.anchor ? -1 : 1);
        if (!n) return;
        !i.empty && (e = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) && (n = {
            left: Math.min(n.left, e.left),
            top: Math.min(n.top, e.top),
            right: Math.max(n.right, e.right),
            bottom: Math.max(n.bottom, e.bottom)
        });
        let r = 0,
            s = 0,
            o = 0,
            l = 0;
        for (let t of this.view.state.facet(hr).map((t => t(this.view))))
            if (t) {
                let {
                    left: e,
                    right: i,
                    top: n,
                    bottom: a
                } = t;
                null != e && (r = Math.max(r, e)), null != i && (s = Math.max(s, i)), null != n && (o = Math.max(o, n)), null != a && (l = Math.max(l, a))
            } let a = {
            left: n.left - r,
            top: n.top - o,
            right: n.right + s,
            bottom: n.bottom + l
        };
        ! function(t, e, i, n, r, s, o, l) {
            let a = t.ownerDocument,
                h = a.defaultView || window;
            for (let c = t; c;)
                if (1 == c.nodeType) {
                    let t, O = c == a.body;
                    if (O) t = Di(h);
                    else {
                        if (c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
                            c = c.assignedSlot || c.parentNode;
                            continue
                        }
                        let e = c.getBoundingClientRect();
                        t = {
                            left: e.left,
                            right: e.left + c.clientWidth,
                            top: e.top,
                            bottom: e.top + c.clientHeight
                        }
                    }
                    let u = 0,
                        f = 0;
                    if ("nearest" == r) e.top < t.top ? (f = -(t.top - e.top + o), i > 0 && e.bottom > t.bottom + f && (f = e.bottom - t.bottom + f + o)) : e.bottom > t.bottom && (f = e.bottom - t.bottom + o, i < 0 && e.top - f < t.top && (f = -(t.top + f - e.top + o)));
                    else {
                        let n = e.bottom - e.top,
                            s = t.bottom - t.top;
                        f = ("center" == r && n <= s ? e.top + n / 2 - s / 2 : "start" == r || "center" == r && i < 0 ? e.top - o : e.bottom - s + o) - t.top
                    }
                    if ("nearest" == n ? e.left < t.left ? (u = -(t.left - e.left + s), i > 0 && e.right > t.right + u && (u = e.right - t.right + u + s)) : e.right > t.right && (u = e.right - t.right + s, i < 0 && e.left < t.left + u && (u = -(t.left + u - e.left + s))) : u = ("center" == n ? e.left + (e.right - e.left) / 2 - (t.right - t.left) / 2 : "start" == n == l ? e.left - s : e.right - (t.right - t.left) + s) - t.left, u || f)
                        if (O) h.scrollBy(u, f);
                        else {
                            let t = 0,
                                i = 0;
                            if (f) {
                                let t = c.scrollTop;
                                c.scrollTop += f, i = c.scrollTop - t
                            }
                            if (u) {
                                let e = c.scrollLeft;
                                c.scrollLeft += u, t = c.scrollLeft - e
                            }
                            e = {
                                left: e.left - t,
                                top: e.top - i,
                                right: e.right - t,
                                bottom: e.bottom - i
                            }, t && Math.abs(t - u) < 1 && (n = "nearest"), i && Math.abs(i - f) < 1 && (r = "nearest")
                        } if (O) break;
                    c = c.assignedSlot || c.parentNode
                } else {
                    if (11 != c.nodeType) break;
                    c = c.host
                }
        }(this.view.scrollDOM, a, i.head < i.anchor ? -1 : 1, t.x, t.y, t.xMargin, t.yMargin, this.view.textDirection == fr.LTR)
    }
}
class Tr extends Zn {
    constructor(t) {
        super(), this.height = t
    }
    toDOM() {
        let t = document.createElement("div");
        return this.updateDOM(t), t
    }
    eq(t) {
        return t.height == this.height
    }
    updateDOM(t) {
        return t.style.height = this.height + "px", !0
    }
    get estimatedHeight() {
        return this.height
    }
}

function Wr(t) {
    let e = t.observer.selectionRange,
        i = e.focusNode && Yr(e.focusNode, e.focusOffset, 0);
    if (!i) return null;
    let n = t.docView.nearest(i);
    if (!n) return null;
    if (n instanceof Un) {
        let t = i;
        for (; t.parentNode != n.dom;) t = t.parentNode;
        let e = t.previousSibling;
        for (; e && !Fi.get(e);) e = e.previousSibling;
        let r = e ? Fi.get(e).posAtEnd : n.posAtStart;
        return {
            from: r,
            to: r,
            node: t,
            text: i
        }
    } {
        for (;;) {
            let {
                parent: t
            } = n;
            if (!t) return null;
            if (t instanceof Un) break;
            n = t
        }
        let t = n.posAtStart;
        return {
            from: t,
            to: t + n.length,
            node: n.dom,
            text: i
        }
    }
}
class Ar extends Zn {
    constructor(t, e, i) {
        super(), this.top = t, this.text = e, this.topView = i
    }
    eq(t) {
        return this.top == t.top && this.text == t.text
    }
    toDOM() {
        return this.top
    }
    ignoreEvent() {
        return !1
    }
    get customView() {
        return Sn
    }
}

function Yr(t, e, i) {
    for (;;) {
        if (3 == t.nodeType) return t;
        if (1 == t.nodeType && e > 0 && i <= 0) e = Vi(t = t.childNodes[e - 1]);
        else {
            if (!(1 == t.nodeType && e < t.childNodes.length && i >= 0)) return null;
            t = t.childNodes[e], e = 0
        }
    }
}
class Rr {
    constructor() {
        this.changes = []
    }
    compareRange(t, e) {
        Rn(t, e, this.changes)
    }
    comparePoint(t, e) {
        Rn(t, e, this.changes)
    }
}

function Ur(t, e) {
    return e.left > t ? e.left - t : Math.max(0, t - e.right)
}

function Vr(t, e) {
    return e.top > t ? e.top - t : Math.max(0, t - e.bottom)
}

function Mr(t, e) {
    return t.top < e.bottom - 1 && t.bottom > e.top + 1
}

function jr(t, e) {
    return e < t.top ? {
        top: e,
        left: t.left,
        right: t.right,
        bottom: t.bottom
    } : t
}

function Dr(t, e) {
    return e > t.bottom ? {
        top: t.top,
        left: t.left,
        right: t.right,
        bottom: e
    } : t
}

function Er(t, e, i) {
    let n, r, s, o, l, a, h, c, O = !1;
    for (let u = t.firstChild; u; u = u.nextSibling) {
        let t = Ai(u);
        for (let f = 0; f < t.length; f++) {
            let d = t[f];
            r && Mr(r, d) && (d = jr(Dr(d, r.bottom), r.top));
            let p = Ur(e, d),
                g = Vr(i, d);
            if (0 == p && 0 == g) return 3 == u.nodeType ? qr(u, e, i) : Er(u, e, i);
            if (!n || o > g || o == g && s > p) {
                n = u, r = d, s = p, o = g;
                let l = g ? i < d.top ? -1 : 1 : p ? e < d.left ? -1 : 1 : 0;
                O = !l || (l > 0 ? f < t.length - 1 : f > 0)
            }
            0 == p ? i > d.bottom && (!h || h.bottom < d.bottom) ? (l = u, h = d) : i < d.top && (!c || c.top > d.top) && (a = u, c = d) : h && Mr(h, d) ? h = Dr(h, d.bottom) : c && Mr(c, d) && (c = jr(c, d.top))
        }
    }
    if (h && h.bottom >= i ? (n = l, r = h) : c && c.top <= i && (n = a, r = c), !n) return {
        node: t,
        offset: 0
    };
    let u = Math.max(r.left, Math.min(r.right, e));
    return 3 == n.nodeType ? qr(n, u, i) : O && "false" != n.contentEditable ? Er(n, u, i) : {
        node: t,
        offset: Array.prototype.indexOf.call(t.childNodes, n) + (e >= (r.left + r.right) / 2 ? 1 : 0)
    }
}

function qr(t, e, i) {
    let n = t.nodeValue.length,
        r = -1,
        s = 1e9,
        o = 0;
    for (let l = 0; l < n; l++) {
        let n = Gi(t, l, l + 1).getClientRects();
        for (let a = 0; a < n.length; a++) {
            let h = n[a];
            if (h.top == h.bottom) continue;
            o || (o = e - h.left);
            let c = (h.top > i ? h.top - i : i - h.bottom) - 1;
            if (h.left - 1 <= e && h.right + 1 >= e && c < s) {
                let i = e >= (h.left + h.right) / 2,
                    n = i;
                if (dn.chrome || dn.gecko) {
                    Gi(t, l).getBoundingClientRect().left == h.right && (n = !i)
                }
                if (c <= 0) return {
                    node: t,
                    offset: l + (n ? 1 : 0)
                };
                r = l + (n ? 1 : 0), s = c
            }
        }
    }
    return {
        node: t,
        offset: r > -1 ? r : o > 0 ? t.nodeValue.length : 0
    }
}

function Ir(t, e, i, n = -1) {
    var r;
    let s, o = t.contentDOM.getBoundingClientRect(),
        l = o.top + t.viewState.paddingTop,
        {
            docHeight: a
        } = t.viewState,
        {
            x: h,
            y: c
        } = e,
        O = c - l;
    if (O < 0) return 0;
    if (O > a) return t.state.doc.length;
    for (let e = t.defaultLineHeight / 2, r = !1; s = t.elementAtHeight(O), s.type != Xn.Text;)
        for (; O = n > 0 ? s.bottom + e : s.top - e, !(O >= 0 && O <= a);) {
            if (r) return i ? null : 0;
            r = !0, n = -n
        }
    c = l + O;
    let u = s.from;
    if (u < t.viewport.from) return 0 == t.viewport.from ? 0 : i ? null : zr(t, o, s, h, c);
    if (u > t.viewport.to) return t.viewport.to == t.state.doc.length ? t.state.doc.length : i ? null : zr(t, o, s, h, c);
    let f = t.dom.ownerDocument,
        d = t.root.elementFromPoint ? t.root : f,
        p = d.elementFromPoint(h, c);
    p && !t.contentDOM.contains(p) && (p = null), p || (h = Math.max(o.left + 1, Math.min(o.right - 1, h)), p = d.elementFromPoint(h, c), p && !t.contentDOM.contains(p) && (p = null));
    let g, m = -1;
    if (p && 0 != (null === (r = t.docView.nearest(p)) || void 0 === r ? void 0 : r.isEditable))
        if (f.caretPositionFromPoint) {
            let t = f.caretPositionFromPoint(h, c);
            t && ({
                offsetNode: g,
                offset: m
            } = t)
        } else if (f.caretRangeFromPoint) {
        let e = f.caretRangeFromPoint(h, c);
        e && (({
            startContainer: g,
            startOffset: m
        } = e), (!t.contentDOM.contains(g) || dn.safari && function(t, e, i) {
            let n;
            if (3 != t.nodeType || e != (n = t.nodeValue.length)) return !1;
            for (let e = t.nextSibling; e; e = e.nextSibling)
                if (1 != e.nodeType || "BR" != e.nodeName) return !1;
            return Gi(t, n - 1, n).getBoundingClientRect().left > i
        }(g, m, h) || dn.chrome && function(t, e, i) {
            if (0 != e) return !1;
            for (let e = t;;) {
                let t = e.parentNode;
                if (!t || 1 != t.nodeType || t.firstChild != e) return !1;
                if (t.classList.contains("cm-line")) break;
                e = t
            }
            let n = 1 == t.nodeType ? t.getBoundingClientRect() : Gi(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
            return i - n.left > 5
        }(g, m, h)) && (g = void 0))
    }
    if (!g || !t.docView.dom.contains(g)) {
        let e = Un.find(t.docView, u);
        if (!e) return O > s.top + s.height / 2 ? s.to : s.from;
        ({
            node: g,
            offset: m
        } = Er(e.dom, h, c))
    }
    let Q = t.docView.nearest(g);
    if (!Q) return null;
    if (Q.isWidget) {
        let t = Q.dom.getBoundingClientRect();
        return e.y < t.top || e.y <= t.bottom && e.x <= (t.left + t.right) / 2 ? Q.posAtStart : Q.posAtEnd
    }
    return Q.localPosFromDOM(g, m) + Q.posAtStart
}

function zr(t, e, i, n, r) {
    let s = Math.round((n - e.left) * t.defaultCharacterWidth);
    if (t.lineWrapping && i.height > 1.5 * t.defaultLineHeight) {
        s += Math.floor((r - i.top) / t.defaultLineHeight) * t.viewState.heightOracle.lineLength
    }
    let o = t.state.sliceDoc(i.from, i.to);
    return i.from + function(t, e, i, n) {
        for (let n = 0, r = 0;;) {
            if (r >= e) return n;
            if (n == t.length) break;
            r += 9 == t.charCodeAt(n) ? i - r % i : 1, n = zt(t, n)
        }
        return !0 === n ? -1 : t.length
    }(o, s, t.state.tabSize)
}

function Gr(t, e, i, n) {
    let r = t.state.doc.lineAt(e.head),
        s = t.bidiSpans(r),
        o = t.textDirectionAt(r.from);
    for (let l = e, a = null;;) {
        let e = kr(r, s, o, l, i),
            h = $r;
        if (!e) {
            if (r.number == (i ? t.state.doc.lines : 1)) return l;
            h = "\n", r = t.state.doc.line(r.number + (i ? 1 : -1)), s = t.bidiSpans(r), e = ce.cursor(i ? r.from : r.to)
        }
        if (a) {
            if (!a(h)) return l
        } else {
            if (!n) return e;
            a = n(h)
        }
        l = e
    }
}

function Nr(t, e, i) {
    let n = t.state.facet(ar).map((e => e(t)));
    for (;;) {
        let t = !1;
        for (let r of n) r.between(i.from - 1, i.from + 1, ((n, r, s) => {
            i.from > n && i.from < r && (i = e.head > i.from ? ce.cursor(n, 1) : ce.cursor(r, -1), t = !0)
        }));
        if (!t) return i
    }
}
class Br {
    constructor(t) {
        this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.chromeScrollHack = -1, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.registeredEvents = [], this.customHandlers = [], this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.mouseSelection = null;
        let e = (e, i) => {
            this.ignoreDuringComposition(i) || "keydown" == i.type && this.keydown(t, i) || (this.mustFlushObserver(i) && t.observer.forceFlush(), this.runCustomHandlers(i.type, t, i) ? i.preventDefault() : e(t, i))
        };
        for (let i in es) {
            let n = es[i];
            t.contentDOM.addEventListener(i, (i => {
                ts(t, i) && e(n, i)
            }), is[i]), this.registeredEvents.push(i)
        }
        t.scrollDOM.addEventListener("mousedown", (i => {
            i.target == t.scrollDOM && i.clientY > t.contentDOM.getBoundingClientRect().bottom && e(es.mousedown, i)
        })), dn.chrome && 102 == dn.chrome_version && t.scrollDOM.addEventListener("wheel", (() => {
            this.chromeScrollHack < 0 ? t.contentDOM.style.pointerEvents = "none" : window.clearTimeout(this.chromeScrollHack), this.chromeScrollHack = setTimeout((() => {
                this.chromeScrollHack = -1, t.contentDOM.style.pointerEvents = ""
            }), 100)
        }), {
            passive: !0
        }), this.notifiedFocused = t.hasFocus, dn.safari && t.contentDOM.addEventListener("input", (() => null))
    }
    setSelectionOrigin(t) {
        this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now()
    }
    ensureHandlers(t, e) {
        var i;
        let n;
        this.customHandlers = [];
        for (let r of e)
            if (n = null === (i = r.update(t).spec) || void 0 === i ? void 0 : i.domEventHandlers) {
                this.customHandlers.push({
                    plugin: r.value,
                    handlers: n
                });
                for (let e in n) this.registeredEvents.indexOf(e) < 0 && "scroll" != e && (this.registeredEvents.push(e), t.contentDOM.addEventListener(e, (i => {
                    ts(t, i) && this.runCustomHandlers(e, t, i) && i.preventDefault()
                })))
            }
    }
    runCustomHandlers(t, e, i) {
        for (let n of this.customHandlers) {
            let r = n.handlers[t];
            if (r) try {
                if (r.call(n.plugin, i, e) || i.defaultPrevented) return !0
            } catch (t) {
                Kn(e.state, t)
            }
        }
        return !1
    }
    runScrollHandlers(t, e) {
        this.lastScrollTop = t.scrollDOM.scrollTop, this.lastScrollLeft = t.scrollDOM.scrollLeft;
        for (let i of this.customHandlers) {
            let n = i.handlers.scroll;
            if (n) try {
                n.call(i.plugin, e, t)
            } catch (e) {
                Kn(t.state, e)
            }
        }
    }
    keydown(t, e) {
        if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), 9 == e.keyCode && Date.now() < this.lastEscPress + 2e3) return !0;
        if (dn.android && dn.chrome && !e.synthetic && (13 == e.keyCode || 8 == e.keyCode)) return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
        let i;
        return !(!dn.ios || e.synthetic || e.altKey || e.metaKey || !((i = Lr.find((t => t.keyCode == e.keyCode))) && !e.ctrlKey || Hr.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey)) && (this.pendingIOSKey = i || e, setTimeout((() => this.flushIOSKey(t)), 250), !0)
    }
    flushIOSKey(t) {
        let e = this.pendingIOSKey;
        return !!e && (this.pendingIOSKey = void 0, Ni(t.contentDOM, e.key, e.keyCode))
    }
    ignoreDuringComposition(t) {
        return !!/^key/.test(t.type) && (this.composing > 0 || !!(dn.safari && !dn.ios && Date.now() - this.compositionEndedAt < 100) && (this.compositionEndedAt = 0, !0))
    }
    mustFlushObserver(t) {
        return "keydown" == t.type && 229 != t.keyCode
    }
    startMouseSelection(t) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t
    }
    update(t) {
        this.mouseSelection && this.mouseSelection.update(t), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
    }
    destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
    }
}
const Lr = [{
        key: "Backspace",
        keyCode: 8,
        inputType: "deleteContentBackward"
    }, {
        key: "Enter",
        keyCode: 13,
        inputType: "insertParagraph"
    }, {
        key: "Delete",
        keyCode: 46,
        inputType: "deleteContentForward"
    }],
    Hr = "dthko",
    Fr = [16, 17, 18, 20, 91, 92, 224, 225];

function Jr(t) {
    return .7 * t + 8
}
class Kr {
    constructor(t, e, i, n) {
        this.view = t, this.style = i, this.mustSelect = n, this.scrollSpeed = {
            x: 0,
            y: 0
        }, this.scrolling = -1, this.lastEvent = e, this.scrollParent = function(t) {
            let e = t.ownerDocument;
            for (let i = t.parentNode; i && i != e.body;)
                if (1 == i.nodeType) {
                    if (i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) return i;
                    i = i.assignedSlot || i.parentNode
                } else {
                    if (11 != i.nodeType) break;
                    i = i.host
                } return null
        }(t.contentDOM);
        let r = t.contentDOM.ownerDocument;
        r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(Je.allowMultipleSelections) && function(t, e) {
            let i = t.state.facet(En);
            return i.length ? i[0](e) : dn.mac ? e.metaKey : e.ctrlKey
        }(t, e), this.dragMove = function(t, e) {
            let i = t.state.facet(qn);
            return i.length ? i[0](e) : dn.mac ? !e.altKey : !e.ctrlKey
        }(t, e), this.dragging = !(! function(t, e) {
            let {
                main: i
            } = t.state.selection;
            if (i.empty) return !1;
            let n = Ci(t.root);
            if (!n || 0 == n.rangeCount) return !0;
            let r = n.getRangeAt(0).getClientRects();
            for (let t = 0; t < r.length; t++) {
                let i = r[t];
                if (i.left <= e.clientX && i.right >= e.clientX && i.top <= e.clientY && i.bottom >= e.clientY) return !0
            }
            return !1
        }(t, e) || 1 != ds(e)) && null
    }
    start(t) {
        !1 === this.dragging && (t.preventDefault(), this.select(t))
    }
    move(t) {
        var e;
        if (0 == t.buttons) return this.destroy();
        if (!1 !== this.dragging) return;
        this.select(this.lastEvent = t);
        let i = 0,
            n = 0,
            r = (null === (e = this.scrollParent) || void 0 === e ? void 0 : e.getBoundingClientRect()) || {
                left: 0,
                top: 0,
                right: this.view.win.innerWidth,
                bottom: this.view.win.innerHeight
            };
        t.clientX <= r.left ? i = -Jr(r.left - t.clientX) : t.clientX >= r.right && (i = Jr(t.clientX - r.right)), t.clientY <= r.top ? n = -Jr(r.top - t.clientY) : t.clientY >= r.bottom && (n = Jr(t.clientY - r.bottom)), this.setScrollSpeed(i, n)
    }
    up(t) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy()
    }
    destroy() {
        this.setScrollSpeed(0, 0);
        let t = this.view.contentDOM.ownerDocument;
        t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = null
    }
    setScrollSpeed(t, e) {
        this.scrollSpeed = {
            x: t,
            y: e
        }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
    }
    scroll() {
        this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), !1 === this.dragging && this.select(this.lastEvent)
    }
    select(t) {
        let e = this.style.get(t, this.extend, this.multiple);
        !this.mustSelect && e.eq(this.view.state.selection) && e.main.assoc == this.view.state.selection.main.assoc || this.view.dispatch({
            selection: e,
            userEvent: "select.pointer"
        }), this.mustSelect = !1
    }
    update(t) {
        t.docChanged && this.dragging && (this.dragging = this.dragging.map(t.changes)), this.style.update(t) && setTimeout((() => this.select(this.lastEvent)), 20)
    }
}

function ts(t, e) {
    if (!e.bubbles) return !0;
    if (e.defaultPrevented) return !1;
    for (let i, n = e.target; n != t.contentDOM; n = n.parentNode)
        if (!n || 11 == n.nodeType || (i = Fi.get(n)) && i.ignoreEvent(e)) return !1;
    return !0
}
const es = Object.create(null),
    is = Object.create(null),
    ns = dn.ie && dn.ie_version < 15 || dn.ios && dn.webkit_version < 604;

function rs(t, e) {
    let i, {
            state: n
        } = t,
        r = 1,
        s = n.toText(e),
        o = s.lines == n.selection.ranges.length,
        l = null != gs && n.selection.ranges.every((t => t.empty)) && gs == s.toString();
    if (l) {
        let t = -1;
        i = n.changeByRange((i => {
            let l = n.doc.lineAt(i.from);
            if (l.from == t) return {
                range: i
            };
            t = l.from;
            let a = n.toText((o ? s.line(r++).text : e) + n.lineBreak);
            return {
                changes: {
                    from: l.from,
                    insert: a
                },
                range: ce.cursor(i.from + a.length)
            }
        }))
    } else i = o ? n.changeByRange((t => {
        let e = s.line(r++);
        return {
            changes: {
                from: t.from,
                to: t.to,
                insert: e.text
            },
            range: ce.cursor(t.from + e.length)
        }
    })) : n.replaceSelection(s);
    t.dispatch(i, {
        userEvent: "input.paste",
        scrollIntoView: !0
    })
}

function ss(t, e, i, n) {
    if (1 == n) return ce.cursor(e, i);
    if (2 == n) return function(t, e, i = 1) {
        let n = t.charCategorizer(e),
            r = t.doc.lineAt(e),
            s = e - r.from;
        if (0 == r.length) return ce.cursor(e);
        0 == s ? i = 1 : s == r.length && (i = -1);
        let o = s,
            l = s;
        i < 0 ? o = zt(r.text, s, !1) : l = zt(r.text, s);
        let a = n(r.text.slice(o, l));
        for (; o > 0;) {
            let t = zt(r.text, o, !1);
            if (n(r.text.slice(t, o)) != a) break;
            o = t
        }
        for (; l < r.length;) {
            let t = zt(r.text, l);
            if (n(r.text.slice(l, t)) != a) break;
            l = t
        }
        return ce.range(o + r.from, l + r.from)
    }(t.state, e, i);
    {
        let i = Un.find(t.docView, e),
            n = t.state.doc.lineAt(i ? i.posAtEnd : e),
            r = i ? i.posAtStart : n.from,
            s = i ? i.posAtEnd : n.to;
        return s < t.state.doc.length && s == n.to && s++, ce.range(r, s)
    }
}
es.keydown = (t, e) => {
    t.inputState.setSelectionOrigin("select"), 27 == e.keyCode ? t.inputState.lastEscPress = Date.now() : Fr.indexOf(e.keyCode) < 0 && (t.inputState.lastEscPress = 0)
}, es.touchstart = (t, e) => {
    t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer")
}, es.touchmove = t => {
    t.inputState.setSelectionOrigin("select.pointer")
}, is.touchstart = is.touchmove = {
    passive: !0
}, es.mousedown = (t, e) => {
    if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3) return;
    let i = null;
    for (let n of t.state.facet(In))
        if (i = n(t, e), i) break;
    if (i || 0 != e.button || (i = function(t, e) {
            let i = hs(t, e),
                n = ds(e),
                r = t.state.selection;
            return {
                update(t) {
                    t.docChanged && (i.pos = t.changes.mapPos(i.pos), r = r.map(t.changes))
                },
                get(e, s, o) {
                    let l = hs(t, e),
                        a = ss(t, l.pos, l.bias, n);
                    if (i.pos != l.pos && !s) {
                        let e = ss(t, i.pos, i.bias, n),
                            r = Math.min(e.from, a.from),
                            s = Math.max(e.to, a.to);
                        a = r < a.from ? ce.range(r, s) : ce.range(s, r)
                    }
                    return s ? r.replaceRange(r.main.extend(a.from, a.to)) : o && r.ranges.length > 1 && r.ranges.some((t => t.eq(a))) ? function(t, e) {
                        for (let i = 0;; i++)
                            if (t.ranges[i].eq(e)) return ce.create(t.ranges.slice(0, i).concat(t.ranges.slice(i + 1)), t.mainIndex == i ? 0 : t.mainIndex - (t.mainIndex > i ? 1 : 0))
                    }(r, a) : o ? r.addRange(a) : ce.create([a])
                }
            }
        }(t, e)), i) {
        let n = t.root.activeElement != t.contentDOM;
        t.inputState.startMouseSelection(new Kr(t, e, i, n)), n && t.observer.ignore((() => zi(t.contentDOM))), t.inputState.mouseSelection && t.inputState.mouseSelection.start(e)
    }
};
let os = (t, e) => t >= e.top && t <= e.bottom,
    ls = (t, e, i) => os(e, i) && t >= i.left && t <= i.right;

function as(t, e, i, n) {
    let r = Un.find(t.docView, e);
    if (!r) return 1;
    let s = e - r.posAtStart;
    if (0 == s) return 1;
    if (s == r.length) return -1;
    let o = r.coordsAt(s, -1);
    if (o && ls(i, n, o)) return -1;
    let l = r.coordsAt(s, 1);
    return l && ls(i, n, l) ? 1 : o && os(n, o) ? -1 : 1
}

function hs(t, e) {
    let i = t.posAtCoords({
        x: e.clientX,
        y: e.clientY
    }, !1);
    return {
        pos: i,
        bias: as(t, i, e.clientX, e.clientY)
    }
}
const cs = dn.ie && dn.ie_version <= 11;
let Os = null,
    us = 0,
    fs = 0;

function ds(t) {
    if (!cs) return t.detail;
    let e = Os,
        i = fs;
    return Os = t, fs = Date.now(), us = !e || i > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (us + 1) % 3 : 1
}

function ps(t, e, i, n) {
    if (!i) return;
    let r = t.posAtCoords({
        x: e.clientX,
        y: e.clientY
    }, !1);
    e.preventDefault();
    let {
        mouseSelection: s
    } = t.inputState, o = n && s && s.dragging && s.dragMove ? {
        from: s.dragging.from,
        to: s.dragging.to
    } : null, l = {
        from: r,
        insert: i
    }, a = t.state.changes(o ? [o, l] : l);
    t.focus(), t.dispatch({
        changes: a,
        selection: {
            anchor: a.mapPos(r, -1),
            head: a.mapPos(r, 1)
        },
        userEvent: o ? "move.drop" : "input.drop"
    })
}
es.dragstart = (t, e) => {
    let {
        selection: {
            main: i
        }
    } = t.state, {
        mouseSelection: n
    } = t.inputState;
    n && (n.dragging = i), e.dataTransfer && (e.dataTransfer.setData("Text", t.state.sliceDoc(i.from, i.to)), e.dataTransfer.effectAllowed = "copyMove")
}, es.drop = (t, e) => {
    if (!e.dataTransfer) return;
    if (t.state.readOnly) return e.preventDefault();
    let i = e.dataTransfer.files;
    if (i && i.length) {
        e.preventDefault();
        let n = Array(i.length),
            r = 0,
            s = () => {
                ++r == i.length && ps(t, e, n.filter((t => null != t)).join(t.state.lineBreak), !1)
            };
        for (let t = 0; t < i.length; t++) {
            let e = new FileReader;
            e.onerror = s, e.onload = () => {
                /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (n[t] = e.result), s()
            }, e.readAsText(i[t])
        }
    } else ps(t, e, e.dataTransfer.getData("Text"), !0)
}, es.paste = (t, e) => {
    if (t.state.readOnly) return e.preventDefault();
    t.observer.flush();
    let i = ns ? null : e.clipboardData;
    i ? (rs(t, i.getData("text/plain")), e.preventDefault()) : function(t) {
        let e = t.dom.parentNode;
        if (!e) return;
        let i = e.appendChild(document.createElement("textarea"));
        i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.focus(), setTimeout((() => {
            t.focus(), i.remove(), rs(t, i.value)
        }), 50)
    }(t)
};
let gs = null;
es.copy = es.cut = (t, e) => {
    let {
        text: i,
        ranges: n,
        linewise: r
    } = function(t) {
        let e = [],
            i = [],
            n = !1;
        for (let n of t.selection.ranges) n.empty || (e.push(t.sliceDoc(n.from, n.to)), i.push(n));
        if (!e.length) {
            let r = -1;
            for (let {
                    from: n
                }
                of t.selection.ranges) {
                let s = t.doc.lineAt(n);
                s.number > r && (e.push(s.text), i.push({
                    from: s.from,
                    to: Math.min(t.doc.length, s.to + 1)
                })), r = s.number
            }
            n = !0
        }
        return {
            text: e.join(t.lineBreak),
            ranges: i,
            linewise: n
        }
    }(t.state);
    if (!i && !r) return;
    gs = r ? i : null;
    let s = ns ? null : e.clipboardData;
    s ? (e.preventDefault(), s.clearData(), s.setData("text/plain", i)) : function(t, e) {
        let i = t.dom.parentNode;
        if (!i) return;
        let n = i.appendChild(document.createElement("textarea"));
        n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.value = e, n.focus(), n.selectionEnd = e.length, n.selectionStart = 0, setTimeout((() => {
            n.remove(), t.focus()
        }), 50)
    }(t, i), "cut" != e.type || t.state.readOnly || t.dispatch({
        changes: n,
        scrollIntoView: !0,
        userEvent: "delete.cut"
    })
};
const ms = Ue.define();

function Qs(t, e) {
    let i = [];
    for (let n of t.facet(Bn)) {
        let r = n(t, e);
        r && i.push(r)
    }
    return i ? t.update({
        effects: i,
        annotations: ms.of(!0)
    }) : null
}

function Ss(t) {
    setTimeout((() => {
        let e = t.hasFocus;
        if (e != t.inputState.notifiedFocused) {
            let i = Qs(t.state, e);
            i ? t.dispatch(i) : t.update([])
        }
    }), 10)
}
es.focus = t => {
    t.inputState.lastFocusTime = Date.now(), t.scrollDOM.scrollTop || !t.inputState.lastScrollTop && !t.inputState.lastScrollLeft || (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), Ss(t)
}, es.blur = t => {
    t.observer.clearSelectionRange(), Ss(t)
}, es.compositionstart = es.compositionupdate = t => {
    null == t.inputState.compositionFirstChange && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0)
}, es.compositionend = t => {
    t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionFirstChange = null, dn.chrome && dn.android && t.observer.flushSoon(), setTimeout((() => {
        t.inputState.composing < 0 && t.docView.compositionDeco.size && t.update([])
    }), 50)
}, es.contextmenu = t => {
    t.inputState.lastContextMenu = Date.now()
}, es.beforeinput = (t, e) => {
    var i;
    let n;
    if (dn.chrome && dn.android && (n = Lr.find((t => t.inputType == e.inputType))) && (t.observer.delayAndroidKey(n.key, n.keyCode), "Backspace" == n.key || "Delete" == n.key)) {
        let e = (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.height) || 0;
        setTimeout((() => {
            var i;
            ((null === (i = window.visualViewport) || void 0 === i ? void 0 : i.height) || 0) > e + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus())
        }), 100)
    }
};
const vs = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class ys {
    constructor(t) {
        this.lineWrapping = t, this.doc = Tt.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.lineLength = 30, this.heightChanged = !1
    }
    heightForGap(t, e) {
        let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
        return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * .5) / this.lineLength))), this.lineHeight * i
    }
    heightForLine(t) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight
    }
    setDoc(t) {
        return this.doc = t, this
    }
    mustRefreshForWrapping(t) {
        return vs.indexOf(t) > -1 != this.lineWrapping
    }
    mustRefreshForHeights(t) {
        let e = !1;
        for (let i = 0; i < t.length; i++) {
            let n = t[i];
            n < 0 ? i++ : this.heightSamples[Math.floor(10 * n)] || (e = !0, this.heightSamples[Math.floor(10 * n)] = !0)
        }
        return e
    }
    refresh(t, e, i, n, r) {
        let s = vs.indexOf(t) > -1,
            o = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != s;
        if (this.lineWrapping = s, this.lineHeight = e, this.charWidth = i, this.lineLength = n, o) {
            this.heightSamples = {};
            for (let t = 0; t < r.length; t++) {
                let e = r[t];
                e < 0 ? t++ : this.heightSamples[Math.floor(10 * e)] = !0
            }
        }
        return o
    }
}
class bs {
    constructor(t, e) {
        this.from = t, this.heights = e, this.index = 0
    }
    get more() {
        return this.index < this.heights.length
    }
}
class ws {
    constructor(t, e, i, n, r) {
        this.from = t, this.length = e, this.top = i, this.height = n, this.type = r
    }
    get to() {
        return this.from + this.length
    }
    get bottom() {
        return this.top + this.height
    }
    join(t) {
        let e = (Array.isArray(this.type) ? this.type : [this]).concat(Array.isArray(t.type) ? t.type : [t]);
        return new ws(this.from, this.length + t.length, this.top, this.height + t.height, e)
    }
}
var xs = function(t) {
    return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t
}(xs || (xs = {}));
const $s = .001;
class ks {
    constructor(t, e, i = 2) {
        this.length = t, this.height = e, this.flags = i
    }
    get outdated() {
        return (2 & this.flags) > 0
    }
    set outdated(t) {
        this.flags = (t ? 2 : 0) | -3 & this.flags
    }
    setHeight(t, e) {
        this.height != e && (Math.abs(this.height - e) > $s && (t.heightChanged = !0), this.height = e)
    }
    replace(t, e, i) {
        return ks.of(i)
    }
    decomposeLeft(t, e) {
        e.push(this)
    }
    decomposeRight(t, e) {
        e.push(this)
    }
    applyChanges(t, e, i, n) {
        let r = this,
            s = i.doc;
        for (let o = n.length - 1; o >= 0; o--) {
            let {
                fromA: l,
                toA: a,
                fromB: h,
                toB: c
            } = n[o], O = r.lineAt(l, xs.ByPosNoHeight, i.setDoc(e), 0, 0), u = O.to >= a ? O : r.lineAt(a, xs.ByPosNoHeight, i, 0, 0);
            for (c += u.to - a, a = u.to; o > 0 && O.from <= n[o - 1].toA;) l = n[o - 1].fromA, h = n[o - 1].fromB, o--, l < O.from && (O = r.lineAt(l, xs.ByPosNoHeight, i, 0, 0));
            h += O.from - l, l = O.from;
            let f = Ts.build(i.setDoc(s), t, h, c);
            r = r.replace(l, a, f)
        }
        return r.updateHeight(i, 0)
    }
    static empty() {
        return new _s(0, 0)
    }
    static of (t) {
        if (1 == t.length) return t[0];
        let e = 0,
            i = t.length,
            n = 0,
            r = 0;
        for (;;)
            if (e == i)
                if (n > 2 * r) {
                    let r = t[e - 1];
                    r.break ? t.splice(--e, 1, r.left, null, r.right) : t.splice(--e, 1, r.left, r.right), i += 1 + r.break, n -= r.size
                } else {
                    if (!(r > 2 * n)) break;
                    {
                        let e = t[i];
                        e.break ? t.splice(i, 1, e.left, null, e.right) : t.splice(i, 1, e.left, e.right), i += 2 + e.break, r -= e.size
                    }
                }
        else if (n < r) {
            let i = t[e++];
            i && (n += i.size)
        } else {
            let e = t[--i];
            e && (r += e.size)
        }
        let s = 0;
        return null == t[e - 1] ? (s = 1, e--) : null == t[e] && (s = 1, i++), new Xs(ks.of(t.slice(0, e)), s, ks.of(t.slice(i)))
    }
}
ks.prototype.size = 1;
class Ps extends ks {
    constructor(t, e, i) {
        super(t, e), this.type = i
    }
    blockAt(t, e, i, n) {
        return new ws(n, this.length, i, this.height, this.type)
    }
    lineAt(t, e, i, n, r) {
        return this.blockAt(0, i, n, r)
    }
    forEachLine(t, e, i, n, r, s) {
        t <= r + this.length && e >= r && s(this.blockAt(0, i, n, r))
    }
    updateHeight(t, e = 0, i = !1, n) {
        return n && n.from <= e && n.more && this.setHeight(t, n.heights[n.index++]), this.outdated = !1, this
    }
    toString() {
        return `block(${this.length})`
    }
}
class _s extends Ps {
    constructor(t, e) {
        super(t, e, Xn.Text), this.collapsed = 0, this.widgetHeight = 0
    }
    replace(t, e, i) {
        let n = i[0];
        return 1 == i.length && (n instanceof _s || n instanceof Zs && 4 & n.flags) && Math.abs(this.length - n.length) < 10 ? (n instanceof Zs ? n = new _s(n.length, this.height) : n.height = this.height, this.outdated || (n.outdated = !1), n) : ks.of(i)
    }
    updateHeight(t, e = 0, i = !1, n) {
        return n && n.from <= e && n.more ? this.setHeight(t, n.heights[n.index++]) : (i || this.outdated) && this.setHeight(t, Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed))), this.outdated = !1, this
    }
    toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
    }
}
class Zs extends ks {
    constructor(t) {
        super(t, 0)
    }
    heightMetrics(t, e) {
        let i, n = t.doc.lineAt(e).number,
            r = t.doc.lineAt(e + this.length).number,
            s = r - n + 1,
            o = 0;
        if (t.lineWrapping) {
            let e = Math.min(this.height, t.lineHeight * s);
            i = e / s, o = (this.height - e) / (this.length - s - 1)
        } else i = this.height / s;
        return {
            firstLine: n,
            lastLine: r,
            perLine: i,
            perChar: o
        }
    }
    blockAt(t, e, i, n) {
        let {
            firstLine: r,
            lastLine: s,
            perLine: o,
            perChar: l
        } = this.heightMetrics(e, n);
        if (e.lineWrapping) {
            let r = n + Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length),
                s = e.doc.lineAt(r),
                a = o + s.length * l,
                h = Math.max(i, t - a / 2);
            return new ws(s.from, s.length, h, a, Xn.Text)
        } {
            let n = Math.max(0, Math.min(s - r, Math.floor((t - i) / o))),
                {
                    from: l,
                    length: a
                } = e.doc.line(r + n);
            return new ws(l, a, i + o * n, o, Xn.Text)
        }
    }
    lineAt(t, e, i, n, r) {
        if (e == xs.ByHeight) return this.blockAt(t, i, n, r);
        if (e == xs.ByPosNoHeight) {
            let {
                from: e,
                to: n
            } = i.doc.lineAt(t);
            return new ws(e, n - e, 0, 0, Xn.Text)
        }
        let {
            firstLine: s,
            perLine: o,
            perChar: l
        } = this.heightMetrics(i, r), a = i.doc.lineAt(t), h = o + a.length * l, c = a.number - s, O = n + o * c + l * (a.from - r - c);
        return new ws(a.from, a.length, Math.max(n, Math.min(O, n + this.height - h)), h, Xn.Text)
    }
    forEachLine(t, e, i, n, r, s) {
        t = Math.max(t, r), e = Math.min(e, r + this.length);
        let {
            firstLine: o,
            perLine: l,
            perChar: a
        } = this.heightMetrics(i, r);
        for (let h = t, c = n; h <= e;) {
            let e = i.doc.lineAt(h);
            if (h == t) {
                let i = e.number - o;
                c += l * i + a * (t - r - i)
            }
            let n = l + a * e.length;
            s(new ws(e.from, e.length, c, n, Xn.Text)), c += n, h = e.to + 1
        }
    }
    replace(t, e, i) {
        let n = this.length - e;
        if (n > 0) {
            let t = i[i.length - 1];
            t instanceof Zs ? i[i.length - 1] = new Zs(t.length + n) : i.push(null, new Zs(n - 1))
        }
        if (t > 0) {
            let e = i[0];
            e instanceof Zs ? i[0] = new Zs(t + e.length) : i.unshift(new Zs(t - 1), null)
        }
        return ks.of(i)
    }
    decomposeLeft(t, e) {
        e.push(new Zs(t - 1), null)
    }
    decomposeRight(t, e) {
        e.push(null, new Zs(this.length - t - 1))
    }
    updateHeight(t, e = 0, i = !1, n) {
        let r = e + this.length;
        if (n && n.from <= e + this.length && n.more) {
            let i = [],
                s = Math.max(e, n.from),
                o = -1;
            for (n.from > e && i.push(new Zs(n.from - e - 1).updateHeight(t, e)); s <= r && n.more;) {
                let e = t.doc.lineAt(s).length;
                i.length && i.push(null);
                let r = n.heights[n.index++]; - 1 == o ? o = r : Math.abs(r - o) >= $s && (o = -2);
                let l = new _s(e, r);
                l.outdated = !1, i.push(l), s += e + 1
            }
            s <= r && i.push(null, new Zs(r - s).updateHeight(t, s));
            let l = ks.of(i);
            return (o < 0 || Math.abs(l.height - this.height) >= $s || Math.abs(o - this.heightMetrics(t, e).perLine) >= $s) && (t.heightChanged = !0), l
        }
        return (i || this.outdated) && (this.setHeight(t, t.heightForGap(e, e + this.length)), this.outdated = !1), this
    }
    toString() {
        return `gap(${this.length})`
    }
}
class Xs extends ks {
    constructor(t, e, i) {
        super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size
    }
    get break() {
        return 1 & this.flags
    }
    blockAt(t, e, i, n) {
        let r = i + this.left.height;
        return t < r ? this.left.blockAt(t, e, i, n) : this.right.blockAt(t, e, r, n + this.left.length + this.break)
    }
    lineAt(t, e, i, n, r) {
        let s = n + this.left.height,
            o = r + this.left.length + this.break,
            l = e == xs.ByHeight ? t < s : t < o,
            a = l ? this.left.lineAt(t, e, i, n, r) : this.right.lineAt(t, e, i, s, o);
        if (this.break || (l ? a.to < o : a.from > o)) return a;
        let h = e == xs.ByPosNoHeight ? xs.ByPosNoHeight : xs.ByPos;
        return l ? a.join(this.right.lineAt(o, h, i, s, o)) : this.left.lineAt(o, h, i, n, r).join(a)
    }
    forEachLine(t, e, i, n, r, s) {
        let o = n + this.left.height,
            l = r + this.left.length + this.break;
        if (this.break) t < l && this.left.forEachLine(t, e, i, n, r, s), e >= l && this.right.forEachLine(t, e, i, o, l, s);
        else {
            let a = this.lineAt(l, xs.ByPos, i, n, r);
            t < a.from && this.left.forEachLine(t, a.from - 1, i, n, r, s), a.to >= t && a.from <= e && s(a), e > a.to && this.right.forEachLine(a.to + 1, e, i, o, l, s)
        }
    }
    replace(t, e, i) {
        let n = this.left.length + this.break;
        if (e < n) return this.balanced(this.left.replace(t, e, i), this.right);
        if (t > this.left.length) return this.balanced(this.left, this.right.replace(t - n, e - n, i));
        let r = [];
        t > 0 && this.decomposeLeft(t, r);
        let s = r.length;
        for (let t of i) r.push(t);
        if (t > 0 && Cs(r, s - 1), e < this.length) {
            let t = r.length;
            this.decomposeRight(e, r), Cs(r, t)
        }
        return ks.of(r)
    }
    decomposeLeft(t, e) {
        let i = this.left.length;
        if (t <= i) return this.left.decomposeLeft(t, e);
        e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e)
    }
    decomposeRight(t, e) {
        let i = this.left.length,
            n = i + this.break;
        if (t >= n) return this.right.decomposeRight(t - n, e);
        t < i && this.left.decomposeRight(t, e), this.break && t < n && e.push(null), e.push(this.right)
    }
    balanced(t, e) {
        return t.size > 2 * e.size || e.size > 2 * t.size ? ks.of(this.break ? [t, null, e] : [t, e]) : (this.left = t, this.right = e, this.height = t.height + e.height, this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break+e.length, this)
    }
    updateHeight(t, e = 0, i = !1, n) {
        let {
            left: r,
            right: s
        } = this, o = e + r.length + this.break, l = null;
        return n && n.from <= e + r.length && n.more ? l = r = r.updateHeight(t, e, i, n) : r.updateHeight(t, e, i), n && n.from <= o + s.length && n.more ? l = s = s.updateHeight(t, o, i, n) : s.updateHeight(t, o, i), l ? this.balanced(r, s) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
    }
    toString() {
        return this.left + (this.break ? " " : "-") + this.right
    }
}

function Cs(t, e) {
    let i, n;
    null == t[e] && (i = t[e - 1]) instanceof Zs && (n = t[e + 1]) instanceof Zs && t.splice(e - 1, 3, new Zs(i.length + 1 + n.length))
}
class Ts {
    constructor(t, e) {
        this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t
    }
    get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
    }
    span(t, e) {
        if (this.lineStart > -1) {
            let t = Math.min(e, this.lineEnd),
                i = this.nodes[this.nodes.length - 1];
            i instanceof _s ? i.length += t - this.pos : (t > this.pos || !this.isCovered) && this.nodes.push(new _s(t - this.pos, -1)), this.writtenTo = t, e > t && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = e
    }
    point(t, e, i) {
        if (t < e || i.heightRelevant) {
            let n = i.widget ? i.widget.estimatedHeight : 0;
            n < 0 && (n = this.oracle.lineHeight);
            let r = e - t;
            i.block ? this.addBlock(new Ps(r, n, i.type)) : (r || n >= 5) && this.addLineDeco(n, r)
        } else e > t && this.span(t, e);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
    }
    enterLine() {
        if (this.lineStart > -1) return;
        let {
            from: t,
            to: e
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new _s(this.pos - t, -1)), this.writtenTo = this.pos
    }
    blankContent(t, e) {
        let i = new Zs(e - t);
        return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i
    }
    ensureLine() {
        this.enterLine();
        let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (t instanceof _s) return t;
        let e = new _s(0, -1);
        return this.nodes.push(e), e
    }
    addBlock(t) {
        this.enterLine(), t.type != Xn.WidgetAfter || this.isCovered || this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, t.type != Xn.WidgetBefore && (this.covering = t)
    }
    addLineDeco(t, e) {
        let i = this.ensureLine();
        i.length += e, i.collapsed += e, i.widgetHeight = Math.max(i.widgetHeight, t), this.writtenTo = this.pos = this.pos + e
    }
    finish(t) {
        let e = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || e instanceof _s || this.isCovered ? (this.writtenTo < this.pos || null == e) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new _s(0, -1));
        let i = t;
        for (let t of this.nodes) t instanceof _s && t.updateHeight(this.oracle, i), i += t ? t.length : 1;
        return this.nodes
    }
    static build(t, e, i, n) {
        let r = new Ts(i, t);
        return ri.spans(e, i, n, r, 0), r.finish(i)
    }
}
class Ws {
    constructor() {
        this.changes = []
    }
    compareRange() {}
    comparePoint(t, e, i, n) {
        (t < e || i && i.heightRelevant || n && n.heightRelevant) && Rn(t, e, this.changes, 5)
    }
}

function As(t, e) {
    let i = t.getBoundingClientRect(),
        n = t.ownerDocument,
        r = n.defaultView || window,
        s = Math.max(0, i.left),
        o = Math.min(r.innerWidth, i.right),
        l = Math.max(0, i.top),
        a = Math.min(r.innerHeight, i.bottom);
    for (let e = t.parentNode; e && e != n.body;)
        if (1 == e.nodeType) {
            let i = e,
                n = window.getComputedStyle(i);
            if ((i.scrollHeight > i.clientHeight || i.scrollWidth > i.clientWidth) && "visible" != n.overflow) {
                let n = i.getBoundingClientRect();
                s = Math.max(s, n.left), o = Math.min(o, n.right), l = Math.max(l, n.top), a = e == t.parentNode ? n.bottom : Math.min(a, n.bottom)
            }
            e = "absolute" == n.position || "fixed" == n.position ? i.offsetParent : i.parentNode
        } else {
            if (11 != e.nodeType) break;
            e = e.host
        } return {
        left: s - i.left,
        right: Math.max(s, o) - i.left,
        top: l - (i.top + e),
        bottom: Math.max(l, a) - (i.top + e)
    }
}

function Ys(t, e) {
    let i = t.getBoundingClientRect();
    return {
        left: 0,
        right: i.right - i.left,
        top: e,
        bottom: i.bottom - (i.top + e)
    }
}
class Rs {
    constructor(t, e, i) {
        this.from = t, this.to = e, this.size = i
    }
    static same(t, e) {
        if (t.length != e.length) return !1;
        for (let i = 0; i < t.length; i++) {
            let n = t[i],
                r = e[i];
            if (n.from != r.from || n.to != r.to || n.size != r.size) return !1
        }
        return !0
    }
    draw(t) {
        return Cn.replace({
            widget: new Us(this.size, t)
        }).range(this.from, this.to)
    }
}
class Us extends Zn {
    constructor(t, e) {
        super(), this.size = t, this.vertical = e
    }
    eq(t) {
        return t.size == this.size && t.vertical == this.vertical
    }
    toDOM() {
        let t = document.createElement("div");
        return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t
    }
    get estimatedHeight() {
        return this.vertical ? this.size : -1
    }
}
class Vs {
    constructor(t) {
        this.state = t, this.pixelViewport = {
            left: 0,
            right: window.innerWidth,
            top: 0,
            bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaler = qs, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = fr.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
        let e = t.facet(or).some((t => "function" != typeof t && "cm-lineWrapping" == t.class));
        this.heightOracle = new ys(e), this.stateDeco = t.facet(lr).filter((t => "function" != typeof t)), this.heightMap = ks.empty().applyChanges(this.stateDeco, Tt.empty, this.heightOracle.setDoc(t.doc), [new Or(0, 0, 0, t.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Cn.set(this.lineGaps.map((t => t.draw(!1)))), this.computeVisibleRanges()
    }
    updateForViewport() {
        let t = [this.viewport],
            {
                main: e
            } = this.state.selection;
        for (let i = 0; i <= 1; i++) {
            let n = i ? e.head : e.anchor;
            if (!t.some((({
                    from: t,
                    to: e
                }) => n >= t && n <= e))) {
                let {
                    from: e,
                    to: i
                } = this.lineBlockAt(n);
                t.push(new Ms(e, i))
            }
        }
        this.viewports = t.sort(((t, e) => t.from - e.from)), this.scaler = this.heightMap.height <= 7e6 ? qs : new Is(this.heightOracle, this.heightMap, this.viewports)
    }
    updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t => {
            this.viewportLines.push(1 == this.scaler.scale ? t : zs(t, this.scaler))
        }))
    }
    update(t, e = null) {
        this.state = t.state;
        let i = this.stateDeco;
        this.stateDeco = this.state.facet(lr).filter((t => "function" != typeof t));
        let n = t.changedRanges,
            r = Or.extendWithRanges(n, function(t, e, i) {
                let n = new Ws;
                return ri.compare(t, e, i, n, 0), n.changes
            }(i, this.stateDeco, t ? t.changes : ie.empty(this.state.doc.length))),
            s = this.heightMap.height;
        this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), this.heightMap.height != s && (t.flags |= 2);
        let o = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
        (e && (e.range.head < o.from || e.range.head > o.to) || !this.viewportIsAppropriate(o)) && (o = this.getViewport(0, e));
        let l = !t.changes.empty || 2 & t.flags || o.from != this.viewport.from || o.to != this.viewport.to;
        this.viewport = o, this.updateForViewport(), l && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(Hn) && (this.mustEnforceCursorAssoc = !0)
    }
    measure(t) {
        let e = t.contentDOM,
            i = window.getComputedStyle(e),
            n = this.heightOracle,
            r = i.whiteSpace;
        this.defaultTextDirection = "rtl" == i.direction ? fr.RTL : fr.LTR;
        let s = this.heightOracle.mustRefreshForWrapping(r),
            o = e.getBoundingClientRect(),
            l = s || this.mustMeasureContent || this.contentDOMHeight != o.height;
        this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
        let a = 0,
            h = 0,
            c = parseInt(i.paddingTop) || 0,
            O = parseInt(i.paddingBottom) || 0;
        this.paddingTop == c && this.paddingBottom == O || (this.paddingTop = c, this.paddingBottom = O, a |= 10), this.editorWidth != t.scrollDOM.clientWidth && (n.lineWrapping && (l = !0), this.editorWidth = t.scrollDOM.clientWidth, a |= 8);
        let u = (this.printing ? Ys : As)(e, this.paddingTop),
            f = u.top - this.pixelViewport.top,
            d = u.bottom - this.pixelViewport.bottom;
        this.pixelViewport = u;
        let p = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (p != this.inView && (this.inView = p, p && (l = !0)), !this.inView && !this.scrollTarget) return 0;
        let g = o.width;
        if (this.contentDOMWidth == g && this.editorHeight == t.scrollDOM.clientHeight || (this.contentDOMWidth = o.width, this.editorHeight = t.scrollDOM.clientHeight, a |= 8), l) {
            let e = t.docView.measureVisibleLineHeights(this.viewport);
            if (n.mustRefreshForHeights(e) && (s = !0), s || n.lineWrapping && Math.abs(g - this.contentDOMWidth) > n.charWidth) {
                let {
                    lineHeight: i,
                    charWidth: o
                } = t.docView.measureTextSize();
                s = i > 0 && n.refresh(r, i, o, g / o, e), s && (t.docView.minWidth = 0, a |= 8)
            }
            f > 0 && d > 0 ? h = Math.max(f, d) : f < 0 && d < 0 && (h = Math.min(f, d)), n.heightChanged = !1;
            for (let i of this.viewports) {
                let r = i.from == this.viewport.from ? e : t.docView.measureVisibleLineHeights(i);
                this.heightMap = (s ? ks.empty().applyChanges(this.stateDeco, Tt.empty, this.heightOracle, [new Or(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(n, 0, s, new bs(i.from, r))
            }
            n.heightChanged && (a |= 2)
        }
        let m = !this.viewportIsAppropriate(this.viewport, h) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return m && (this.viewport = this.getViewport(h, this.scrollTarget)), this.updateForViewport(), (2 & a || m) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(s ? [] : this.lineGaps, t)), a |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, t.docView.enforceCursorAssoc()), a
    }
    get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
    }
    get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
    }
    getViewport(t, e) {
        let i = .5 - Math.max(-.5, Math.min(.5, t / 1e3 / 2)),
            n = this.heightMap,
            r = this.heightOracle,
            {
                visibleTop: s,
                visibleBottom: o
            } = this,
            l = new Ms(n.lineAt(s - 1e3 * i, xs.ByHeight, r, 0, 0).from, n.lineAt(o + 1e3 * (1 - i), xs.ByHeight, r, 0, 0).to);
        if (e) {
            let {
                head: t
            } = e.range;
            if (t < l.from || t > l.to) {
                let i, s = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
                    o = n.lineAt(t, xs.ByPos, r, 0, 0);
                i = "center" == e.y ? (o.top + o.bottom) / 2 - s / 2 : "start" == e.y || "nearest" == e.y && t < l.from ? o.top : o.bottom - s, l = new Ms(n.lineAt(i - 500, xs.ByHeight, r, 0, 0).from, n.lineAt(i + s + 500, xs.ByHeight, r, 0, 0).to)
            }
        }
        return l
    }
    mapViewport(t, e) {
        let i = e.mapPos(t.from, -1),
            n = e.mapPos(t.to, 1);
        return new Ms(this.heightMap.lineAt(i, xs.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(n, xs.ByPos, this.heightOracle, 0, 0).to)
    }
    viewportIsAppropriate({
        from: t,
        to: e
    }, i = 0) {
        if (!this.inView) return !0;
        let {
            top: n
        } = this.heightMap.lineAt(t, xs.ByPos, this.heightOracle, 0, 0), {
            bottom: r
        } = this.heightMap.lineAt(e, xs.ByPos, this.heightOracle, 0, 0), {
            visibleTop: s,
            visibleBottom: o
        } = this;
        return (0 == t || n <= s - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= o + Math.max(10, Math.min(i, 250))) && n > s - 2e3 && r < o + 2e3
    }
    mapLineGaps(t, e) {
        if (!t.length || e.empty) return t;
        let i = [];
        for (let n of t) e.touchesRange(n.from, n.to) || i.push(new Rs(e.mapPos(n.from), e.mapPos(n.to), n.size));
        return i
    }
    ensureLineGaps(t, e) {
        let i = this.heightOracle.lineWrapping,
            n = i ? 1e4 : 2e3,
            r = n >> 1,
            s = n << 1;
        if (this.defaultTextDirection != fr.LTR && !i) return [];
        let o = [],
            l = (n, s, a, h) => {
                if (s - n < r) return;
                let c = this.state.selection.main,
                    O = [c.from];
                c.empty || O.push(c.to);
                for (let t of O)
                    if (t > n && t < s) return l(n, t - 10, a, h), void l(t + 10, s, a, h);
                let u = function(t, e) {
                    for (let i of t)
                        if (e(i)) return i;
                    return
                }(t, (t => t.from >= a.from && t.to <= a.to && Math.abs(t.from - n) < r && Math.abs(t.to - s) < r && !O.some((e => t.from < e && t.to > e))));
                if (!u) {
                    if (s < a.to && e && i && e.visibleRanges.some((t => t.from <= s && t.to >= s))) {
                        let t = e.moveToLineBoundary(ce.cursor(s), !1, !0).head;
                        t > n && (s = t)
                    }
                    u = new Rs(n, s, this.gapSize(a, n, s, h))
                }
                o.push(u)
            };
        for (let t of this.viewportLines) {
            if (t.length < s) continue;
            let e = js(t.from, t.to, this.stateDeco);
            if (e.total < s) continue;
            let r, o, a = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (i) {
                let i, s, l = n / this.heightOracle.lineLength * this.heightOracle.lineHeight;
                if (null != a) {
                    let n = Es(e, a),
                        r = ((this.visibleBottom - this.visibleTop) / 2 + l) / t.height;
                    i = n - r, s = n + r
                } else i = (this.visibleTop - t.top - l) / t.height, s = (this.visibleBottom - t.top + l) / t.height;
                r = Ds(e, i), o = Ds(e, s)
            } else {
                let t, i, s = e.total * this.heightOracle.charWidth,
                    l = n * this.heightOracle.charWidth;
                if (null != a) {
                    let n = Es(e, a),
                        r = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + l) / s;
                    t = n - r, i = n + r
                } else t = (this.pixelViewport.left - l) / s, i = (this.pixelViewport.right + l) / s;
                r = Ds(e, t), o = Ds(e, i)
            }
            r > t.from && l(t.from, r, t, e), o < t.to && l(o, t.to, t, e)
        }
        return o
    }
    gapSize(t, e, i, n) {
        let r = Es(n, i) - Es(n, e);
        return this.heightOracle.lineWrapping ? t.height * r : n.total * this.heightOracle.charWidth * r
    }
    updateLineGaps(t) {
        Rs.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = Cn.set(t.map((t => t.draw(this.heightOracle.lineWrapping)))))
    }
    computeVisibleRanges() {
        let t = this.stateDeco;
        this.lineGaps.length && (t = t.concat(this.lineGapDeco));
        let e = [];
        ri.spans(t, this.viewport.from, this.viewport.to, {
            span(t, i) {
                e.push({
                    from: t,
                    to: i
                })
            },
            point() {}
        }, 20);
        let i = e.length != this.visibleRanges.length || this.visibleRanges.some(((t, i) => t.from != e[i].from || t.to != e[i].to));
        return this.visibleRanges = e, i ? 4 : 0
    }
    lineBlockAt(t) {
        return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e => e.from <= t && e.to >= t)) || zs(this.heightMap.lineAt(t, xs.ByPos, this.heightOracle, 0, 0), this.scaler)
    }
    lineBlockAtHeight(t) {
        return zs(this.heightMap.lineAt(this.scaler.fromDOM(t), xs.ByHeight, this.heightOracle, 0, 0), this.scaler)
    }
    elementAtHeight(t) {
        return zs(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler)
    }
    get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
    }
    get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
    }
}
class Ms {
    constructor(t, e) {
        this.from = t, this.to = e
    }
}

function js(t, e, i) {
    let n = [],
        r = t,
        s = 0;
    return ri.spans(i, t, e, {
        span() {},
        point(t, e) {
            t > r && (n.push({
                from: r,
                to: t
            }), s += t - r), r = e
        }
    }, 20), r < e && (n.push({
        from: r,
        to: e
    }), s += e - r), {
        total: s,
        ranges: n
    }
}

function Ds({
    total: t,
    ranges: e
}, i) {
    if (i <= 0) return e[0].from;
    if (i >= 1) return e[e.length - 1].to;
    let n = Math.floor(t * i);
    for (let t = 0;; t++) {
        let {
            from: i,
            to: r
        } = e[t], s = r - i;
        if (n <= s) return i + n;
        n -= s
    }
}

function Es(t, e) {
    let i = 0;
    for (let {
            from: n,
            to: r
        }
        of t.ranges) {
        if (e <= r) {
            i += e - n;
            break
        }
        i += r - n
    }
    return i / t.total
}
const qs = {
    toDOM: t => t,
    fromDOM: t => t,
    scale: 1
};
class Is {
    constructor(t, e, i) {
        let n = 0,
            r = 0,
            s = 0;
        this.viewports = i.map((({
            from: i,
            to: r
        }) => {
            let s = e.lineAt(i, xs.ByPos, t, 0, 0).top,
                o = e.lineAt(r, xs.ByPos, t, 0, 0).bottom;
            return n += o - s, {
                from: i,
                to: r,
                top: s,
                bottom: o,
                domTop: 0,
                domBottom: 0
            }
        })), this.scale = (7e6 - n) / (e.height - n);
        for (let t of this.viewports) t.domTop = s + (t.top - r) * this.scale, s = t.domBottom = t.domTop + (t.bottom - t.top), r = t.bottom
    }
    toDOM(t) {
        for (let e = 0, i = 0, n = 0;; e++) {
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.top) return n + (t - i) * this.scale;
            if (t <= r.bottom) return r.domTop + (t - r.top);
            i = r.bottom, n = r.domBottom
        }
    }
    fromDOM(t) {
        for (let e = 0, i = 0, n = 0;; e++) {
            let r = e < this.viewports.length ? this.viewports[e] : null;
            if (!r || t < r.domTop) return i + (t - n) / this.scale;
            if (t <= r.domBottom) return r.top + (t - r.domTop);
            i = r.bottom, n = r.domBottom
        }
    }
}

function zs(t, e) {
    if (1 == e.scale) return t;
    let i = e.toDOM(t.top),
        n = e.toDOM(t.bottom);
    return new ws(t.from, t.length, i, n - i, Array.isArray(t.type) ? t.type.map((t => zs(t, e))) : t.type)
}
const Gs = fe.define({
        combine: t => t.join(" ")
    }),
    Ns = fe.define({
        combine: t => t.indexOf(!0) > -1
    }),
    Bs = vi.newName(),
    Ls = vi.newName(),
    Hs = vi.newName(),
    Fs = {
        "&light": "." + Ls,
        "&dark": "." + Hs
    };

function Js(t, e, i) {
    return new vi(e, {
        finish: e => /&/.test(e) ? e.replace(/&\w*/, (e => {
            if ("&" == e) return t;
            if (!i || !i[e]) throw new RangeError(`Unsupported selector: ${e}`);
            return i[e]
        })) : t + " " + e
    })
}
const Ks = Js("." + Bs, {
    "&": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": {
            outline: "1px dotted #212121"
        },
        display: "flex !important",
        flexDirection: "column"
    },
    ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0
    },
    ".cm-content": {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": {
            WebkitUserModify: "read-write-plaintext-only"
        }
    },
    ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        flexShrink: 1
    },
    "&light .cm-content": {
        caretColor: "black"
    },
    "&dark .cm-content": {
        caretColor: "white"
    },
    ".cm-line": {
        display: "block",
        padding: "0 2px 0 6px"
    },
    ".cm-layer": {
        contain: "size style",
        "& > *": {
            position: "absolute"
        }
    },
    "&light .cm-selectionBackground": {
        background: "#d9d9d9"
    },
    "&dark .cm-selectionBackground": {
        background: "#222"
    },
    "&light.cm-focused .cm-selectionBackground": {
        background: "#d7d4f0"
    },
    "&dark.cm-focused .cm-selectionBackground": {
        background: "#233"
    },
    ".cm-cursorLayer": {
        pointerEvents: "none"
    },
    "&.cm-focused .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite"
    },
    "@keyframes cm-blink": {
        "0%": {},
        "50%": {
            opacity: 0
        },
        "100%": {}
    },
    "@keyframes cm-blink2": {
        "0%": {},
        "50%": {
            opacity: 0
        },
        "100%": {}
    },
    ".cm-cursor, .cm-dropCursor": {
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none"
    },
    ".cm-cursor": {
        display: "none"
    },
    "&dark .cm-cursor": {
        borderLeftColor: "#444"
    },
    ".cm-dropCursor": {
        position: "absolute"
    },
    "&.cm-focused .cm-cursor": {
        display: "block"
    },
    "&light .cm-activeLine": {
        backgroundColor: "#cceeff44"
    },
    "&dark .cm-activeLine": {
        backgroundColor: "#99eeff33"
    },
    "&light .cm-specialChar": {
        color: "red"
    },
    "&dark .cm-specialChar": {
        color: "#f78"
    },
    ".cm-gutters": {
        flexShrink: 0,
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        left: 0,
        zIndex: 200
    },
    "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#6c6c6c",
        borderRight: "1px solid #ddd"
    },
    "&dark .cm-gutters": {
        backgroundColor: "#333338",
        color: "#ccc"
    },
    ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden"
    },
    ".cm-gutterElement": {
        boxSizing: "border-box"
    },
    ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap"
    },
    "&light .cm-activeLineGutter": {
        backgroundColor: "#e2f2ff"
    },
    "&dark .cm-activeLineGutter": {
        backgroundColor: "#222227"
    },
    ".cm-panels": {
        boxSizing: "border-box",
        position: "sticky",
        left: 0,
        right: 0
    },
    "&light .cm-panels": {
        backgroundColor: "#f5f5f5",
        color: "black"
    },
    "&light .cm-panels-top": {
        borderBottom: "1px solid #ddd"
    },
    "&light .cm-panels-bottom": {
        borderTop: "1px solid #ddd"
    },
    "&dark .cm-panels": {
        backgroundColor: "#333338",
        color: "white"
    },
    ".cm-tab": {
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom"
    },
    ".cm-widgetBuffer": {
        verticalAlign: "text-top",
        height: "1em",
        width: 0,
        display: "inline"
    },
    ".cm-placeholder": {
        color: "#888",
        display: "inline-block",
        verticalAlign: "top"
    },
    ".cm-highlightSpace:before": {
        content: "attr(data-display)",
        position: "absolute",
        pointerEvents: "none",
        color: "#888"
    },
    ".cm-highlightTab": {
        backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="' + SVGPATHS.ODD + '"/></svg>\')',
        backgroundSize: "auto 100%",
        backgroundPosition: "right 90%",
        backgroundRepeat: "no-repeat"
    },
    ".cm-trailingSpace": {
        backgroundColor: "#ff332255"
    },
    ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px"
    },
    "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
        }
    },
    "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": {
            backgroundImage: "linear-gradient(#111, #333)"
        }
    },
    ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em"
    },
    "&light .cm-textfield": {
        backgroundColor: "white"
    },
    "&dark .cm-textfield": {
        border: "1px solid #555",
        backgroundColor: "inherit"
    }
}, Fs);
class to {
    constructor(t, e, i, n) {
        this.typeOver = n, this.bounds = null, this.text = "";
        let {
            impreciseHead: r,
            impreciseAnchor: s
        } = t.docView;
        if (t.state.readOnly && e > -1) this.newSel = null;
        else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
            let e = r || s ? [] : function(t) {
                    let e = [];
                    if (t.root.activeElement != t.contentDOM) return e;
                    let {
                        anchorNode: i,
                        anchorOffset: n,
                        focusNode: r,
                        focusOffset: s
                    } = t.observer.selectionRange;
                    i && (e.push(new Xr(i, n)), r == i && s == n || e.push(new Xr(r, s)));
                    return e
                }(t),
                i = new _r(e, t.state);
            i.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = i.text, this.newSel = function(t, e) {
                if (0 == t.length) return null;
                let i = t[0].pos,
                    n = 2 == t.length ? t[1].pos : i;
                return i > -1 && n > -1 ? ce.single(i + e, n + e) : null
            }(e, this.bounds.from)
        } else {
            let e = t.observer.selectionRange,
                i = r && r.node == e.focusNode && r.offset == e.focusOffset || !Ti(t.contentDOM, e.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(e.focusNode, e.focusOffset),
                n = s && s.node == e.anchorNode && s.offset == e.anchorOffset || !Ti(t.contentDOM, e.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
            this.newSel = ce.single(n, i)
        }
    }
}

function eo(t, e) {
    let i, {
            newSel: n
        } = e,
        r = t.state.selection.main;
    if (e.bounds) {
        let {
            from: n,
            to: s
        } = e.bounds, o = r.from, l = null;
        (8 === t.inputState.lastKeyCode && t.inputState.lastKeyTime > Date.now() - 100 || dn.android && e.text.length < s - n) && (o = r.to, l = "end");
        let a = function(t, e, i, n) {
            let r = Math.min(t.length, e.length),
                s = 0;
            for (; s < r && t.charCodeAt(s) == e.charCodeAt(s);) s++;
            if (s == r && t.length == e.length) return null;
            let o = t.length,
                l = e.length;
            for (; o > 0 && l > 0 && t.charCodeAt(o - 1) == e.charCodeAt(l - 1);) o--, l--;
            if ("end" == n) {
                i -= o + Math.max(0, s - Math.min(o, l)) - s
            }
            if (o < s && t.length < e.length) {
                s -= i <= s && i >= o ? s - i : 0, l = s + (l - o), o = s
            } else if (l < s) {
                s -= i <= s && i >= l ? s - i : 0, o = s + (o - l), l = s
            }
            return {
                from: s,
                toA: o,
                toB: l
            }
        }(t.state.doc.sliceString(n, s, Pr), e.text, o - n, l);
        a && (dn.chrome && 13 == t.inputState.lastKeyCode && a.toB == a.from + 2 && e.text.slice(a.from, a.toB) == Pr + Pr && a.toB--, i = {
            from: n + a.from,
            to: n + a.toA,
            insert: Tt.of(e.text.slice(a.from, a.toB).split(Pr))
        })
    } else n && (!t.hasFocus && t.state.facet(tr) || n.main.eq(r)) && (n = null);
    if (!i && !n) return !1;
    if (!i && e.typeOver && !r.empty && n && n.main.empty ? i = {
            from: r.from,
            to: r.to,
            insert: t.state.doc.slice(r.from, r.to)
        } : i && i.from >= r.from && i.to <= r.to && (i.from != r.from || i.to != r.to) && r.to - r.from - (i.to - i.from) <= 4 ? i = {
            from: r.from,
            to: r.to,
            insert: t.state.doc.slice(r.from, i.from).append(i.insert).append(t.state.doc.slice(i.to, r.to))
        } : (dn.mac || dn.android) && i && i.from == i.to && i.from == r.head - 1 && /^\. ?$/.test(i.insert.toString()) && "off" == t.contentDOM.getAttribute("autocorrect") ? (n && 2 == i.insert.length && (n = ce.single(n.main.anchor - 1, n.main.head - 1)), i = {
            from: r.from,
            to: r.to,
            insert: Tt.of([" "])
        }) : dn.chrome && i && i.from == i.to && i.from == r.head && "\n " == i.insert.toString() && t.lineWrapping && (n && (n = ce.single(n.main.anchor - 1, n.main.head - 1)), i = {
            from: r.from,
            to: r.to,
            insert: Tt.of([" "])
        }), i) {
        let e = t.state;
        if (dn.ios && t.inputState.flushIOSKey(t)) return !0;
        if (dn.android && (i.from == r.from && i.to == r.to && 1 == i.insert.length && 2 == i.insert.lines && Ni(t.contentDOM, "Enter", 13) || i.from == r.from - 1 && i.to == r.to && 0 == i.insert.length && Ni(t.contentDOM, "Backspace", 8) || i.from == r.from && i.to == r.to + 1 && 0 == i.insert.length && Ni(t.contentDOM, "Delete", 46))) return !0;
        let s, o = i.insert.toString();
        if (t.state.facet(Nn).some((e => e(t, i.from, i.to, o)))) return !0;
        if (t.inputState.composing >= 0 && t.inputState.composing++, i.from >= r.from && i.to <= r.to && i.to - i.from >= (r.to - r.from) / 3 && (!n || n.main.empty && n.main.from == i.from + i.insert.length) && t.inputState.composing < 0) {
            let n = r.from < i.from ? e.sliceDoc(r.from, i.from) : "",
                o = r.to > i.to ? e.sliceDoc(i.to, r.to) : "";
            s = e.replaceSelection(t.state.toText(n + i.insert.sliceString(0, void 0, t.state.lineBreak) + o))
        } else {
            let o = e.changes(i),
                l = n && !e.selection.main.eq(n.main) && n.main.to <= o.newLength ? n.main : void 0;
            if (e.selection.ranges.length > 1 && t.inputState.composing >= 0 && i.to <= r.to && i.to >= r.to - 10) {
                let n = t.state.sliceDoc(i.from, i.to),
                    a = Wr(t) || t.state.doc.lineAt(r.head),
                    h = r.to - i.to,
                    c = r.to - r.from;
                s = e.changeByRange((s => {
                    if (s.from == r.from && s.to == r.to) return {
                        changes: o,
                        range: l || s.map(o)
                    };
                    let O = s.to - h,
                        u = O - n.length;
                    if (s.to - s.from != c || t.state.sliceDoc(u, O) != n || a && s.to >= a.from && s.from <= a.to) return {
                        range: s
                    };
                    let f = e.changes({
                            from: u,
                            to: O,
                            insert: i.insert
                        }),
                        d = s.to - r.to;
                    return {
                        changes: f,
                        range: l ? ce.range(Math.max(0, l.anchor + d), Math.max(0, l.head + d)) : s.map(f)
                    }
                }))
            } else s = {
                changes: o,
                selection: l && e.selection.replaceRange(l)
            }
        }
        let l = "input.type";
        return t.composing && (l += ".compose", t.inputState.compositionFirstChange && (l += ".start", t.inputState.compositionFirstChange = !1)), t.dispatch(s, {
            scrollIntoView: !0,
            userEvent: l
        }), !0
    }
    if (n && !n.main.eq(r)) {
        let e = !1,
            i = "select";
        return t.inputState.lastSelectionTime > Date.now() - 50 && ("select" == t.inputState.lastSelectionOrigin && (e = !0), i = t.inputState.lastSelectionOrigin), t.dispatch({
            selection: n,
            scrollIntoView: e,
            userEvent: i
        }), !0
    }
    return !1
}
const io = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
    },
    no = dn.ie && dn.ie_version <= 11;
class ro {
    constructor(t) {
        this.view = t, this.active = !1, this.selectionRange = new Ei, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.resizeContent = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e => {
            for (let t of e) this.queue.push(t);
            (dn.ie && dn.ie_version <= 11 || dn.ios && t.composing) && e.some((t => "childList" == t.type && t.removedNodes.length || "characterData" == t.type && t.oldValue.length > t.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), no && (this.onCharData = t => {
            this.queue.push({
                target: t.target,
                type: "characterData",
                oldValue: t.prevValue
            }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
            var t;
            (null === (t = this.view.docView) || void 0 === t ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize()
        })), this.resizeScroll.observe(t.scrollDOM), this.resizeContent = new ResizeObserver((() => this.view.requestMeasure())), this.resizeContent.observe(t.contentDOM)), this.addWindowListeners(this.win = t.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((t => {
            this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {}), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t => {
            t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
    }
    onScrollChanged(t) {
        this.view.inputState.runScrollHandlers(this.view, t), this.intersecting && this.view.measure()
    }
    onScroll(t) {
        this.intersecting && this.flush(!1), this.onScrollChanged(t)
    }
    onResize() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
            this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
    }
    onPrint() {
        this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
            this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500)
    }
    updateGaps(t) {
        if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some(((e, i) => e != t[i])))) {
            this.gapIntersection.disconnect();
            for (let e of t) this.gapIntersection.observe(e);
            this.gaps = t
        }
    }
    onSelectionChange(t) {
        let e = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
            view: i
        } = this, n = this.selectionRange;
        if (i.state.facet(tr) ? i.root.activeElement != this.dom : !Wi(i.dom, n)) return;
        let r = n.anchorNode && i.docView.nearest(n.anchorNode);
        r && r.ignoreEvent(t) ? e || (this.selectionChanged = !1) : (dn.ie && dn.ie_version <= 11 || dn.android && dn.chrome) && !i.state.selection.main.empty && n.focusNode && Yi(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset) ? this.flushSoon() : this.flush(!1)
    }
    readSelectionRange() {
        let {
            view: t
        } = this, e = dn.safari && 11 == t.root.nodeType && function(t) {
            let e = t.activeElement;
            for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
            return e
        }(this.dom.ownerDocument) == this.dom && function(t) {
            let e = null;

            function i(t) {
                t.preventDefault(), t.stopImmediatePropagation(), e = t.getTargetRanges()[0]
            }
            if (t.contentDOM.addEventListener("beforeinput", i, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", i, !0), !e) return null;
            let n = e.startContainer,
                r = e.startOffset,
                s = e.endContainer,
                o = e.endOffset,
                l = t.docView.domAtPos(t.state.selection.main.anchor);
            Yi(l.node, l.offset, s, o) && ([n, r, s, o] = [s, o, n, r]);
            return {
                anchorNode: n,
                anchorOffset: r,
                focusNode: s,
                focusOffset: o
            }
        }(this.view) || Ci(t.root);
        if (!e || this.selectionRange.eq(e)) return !1;
        let i = Wi(this.dom, e);
        return i && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && function(t, e) {
            let i = e.focusNode,
                n = e.focusOffset;
            if (!i || e.anchorNode != i || e.anchorOffset != n) return !1;
            for (;;)
                if (n) {
                    if (1 != i.nodeType) return !1;
                    let t = i.childNodes[n - 1];
                    "false" == t.contentEditable ? n-- : (i = t, n = Vi(i))
                } else {
                    if (i == t) return !0;
                    n = Ri(i), i = i.parentNode
                }
        }(this.dom, e) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), !1) : (this.selectionRange.setRange(e), i && (this.selectionChanged = !0), !0)
    }
    setSelectionRange(t, e) {
        this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = !1
    }
    clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
    }
    listenForScroll() {
        this.parentCheck = -1;
        let t = 0,
            e = null;
        for (let i = this.dom; i;)
            if (1 == i.nodeType) !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
            else {
                if (11 != i.nodeType) break;
                i = i.host
            } if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
            for (let t of this.scrollTargets) t.removeEventListener("scroll", this.onScroll);
            for (let t of this.scrollTargets = e) t.addEventListener("scroll", this.onScroll)
        }
    }
    ignore(t) {
        if (!this.active) return t();
        try {
            return this.stop(), t()
        } finally {
            this.start(), this.clear()
        }
    }
    start() {
        this.active || (this.observer.observe(this.dom, io), no && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
    }
    stop() {
        this.active && (this.active = !1, this.observer.disconnect(), no && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
    }
    clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
    }
    delayAndroidKey(t, e) {
        var i;
        if (!this.delayedAndroidKey) {
            let t = () => {
                let t = this.delayedAndroidKey;
                t && (this.clearDelayedAndroidKey(), !this.flush() && t.force && Ni(this.dom, t.key, t.keyCode))
            };
            this.flushingAndroidKey = this.view.win.requestAnimationFrame(t)
        }
        this.delayedAndroidKey && "Enter" != t || (this.delayedAndroidKey = {
            key: t,
            keyCode: e,
            force: this.lastChange < Date.now() - 50 || !!(null === (i = this.delayedAndroidKey) || void 0 === i ? void 0 : i.force)
        })
    }
    clearDelayedAndroidKey() {
        this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
    }
    flushSoon() {
        this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame((() => {
            this.delayedFlush = -1, this.flush()
        })))
    }
    forceFlush() {
        this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
    }
    processRecords() {
        let t = this.queue;
        for (let e of this.observer.takeRecords()) t.push(e);
        t.length && (this.queue = []);
        let e = -1,
            i = -1,
            n = !1;
        for (let r of t) {
            let t = this.readMutation(r);
            t && (t.typeOver && (n = !0), -1 == e ? ({
                from: e,
                to: i
            } = t) : (e = Math.min(t.from, e), i = Math.max(t.to, i)))
        }
        return {
            from: e,
            to: i,
            typeOver: n
        }
    }
    readChange() {
        let {
            from: t,
            to: e,
            typeOver: i
        } = this.processRecords(), n = this.selectionChanged && Wi(this.dom, this.selectionRange);
        return t < 0 && !n ? null : (t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1, new to(this.view, t, e, i))
    }
    flush(t = !0) {
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        t && this.readSelectionRange();
        let e = this.readChange();
        if (!e) return !1;
        let i = this.view.state,
            n = eo(this.view, e);
        return this.view.state == i && this.view.update([]), n
    }
    readMutation(t) {
        let e = this.view.docView.nearest(t.target);
        if (!e || e.ignoreMutation(t)) return null;
        if (e.markDirty("attributes" == t.type), "attributes" == t.type && (e.dirty |= 4), "childList" == t.type) {
            let i = so(e, t.previousSibling || t.target.previousSibling, -1),
                n = so(e, t.nextSibling || t.target.nextSibling, 1);
            return {
                from: i ? e.posAfter(i) : e.posAtStart,
                to: n ? e.posBefore(n) : e.posAtEnd,
                typeOver: !1
            }
        }
        return "characterData" == t.type ? {
            from: e.posAtStart,
            to: e.posAtEnd,
            typeOver: t.target.nodeValue == t.oldValue
        } : null
    }
    setWindow(t) {
        t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win))
    }
    addWindowListeners(t) {
        t.addEventListener("resize", this.onResize), t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange)
    }
    removeWindowListeners(t) {
        t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange)
    }
    destroy() {
        var t, e, i, n;
        this.stop(), null === (t = this.intersection) || void 0 === t || t.disconnect(), null === (e = this.gapIntersection) || void 0 === e || e.disconnect(), null === (i = this.resizeScroll) || void 0 === i || i.disconnect(), null === (n = this.resizeContent) || void 0 === n || n.disconnect();
        for (let t of this.scrollTargets) t.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey)
    }
}

function so(t, e, i) {
    for (; e;) {
        let n = Fi.get(e);
        if (n && n.parent == t) return n;
        let r = e.parentNode;
        e = r != t.dom ? r : i > 0 ? e.nextSibling : e.previousSibling
    }
    return null
}
class oo {
    constructor(t = {}) {
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.style.cssText = "position: fixed; top: -10000px", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), this._dispatch = t.dispatch || (t => this.update([t])), this.dispatch = this.dispatch.bind(this), this._root = t.root || function(t) {
            for (; t;) {
                if (t && (9 == t.nodeType || 11 == t.nodeType && t.host)) return t;
                t = t.assignedSlot || t.parentNode
            }
            return null
        }(t.parent) || document, this.viewState = new Vs(t.state || Je.create(t)), this.plugins = this.state.facet(ir).map((t => new rr(t)));
        for (let t of this.plugins) t.update(this);
        this.observer = new ro(this), this.inputState = new Br(this), this.inputState.ensureHandlers(this, this.plugins), this.docView = new Cr(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), t.parent && t.parent.appendChild(this.dom)
    }
    get state() {
        return this.viewState.state
    }
    get viewport() {
        return this.viewState.viewport
    }
    get visibleRanges() {
        return this.viewState.visibleRanges
    }
    get inView() {
        return this.viewState.inView
    }
    get composing() {
        return this.inputState.composing > 0
    }
    get compositionStarted() {
        return this.inputState.composing >= 0
    }
    get root() {
        return this._root
    }
    get win() {
        return this.dom.ownerDocument.defaultView || window
    }
    dispatch(...t) {
        this._dispatch(1 == t.length && t[0] instanceof De ? t[0] : this.state.update(...t))
    }
    update(t) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let e, i = !1,
            n = !1,
            r = this.state;
        for (let e of t) {
            if (e.startState != r) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
            r = e.state
        }
        if (this.destroyed) return void(this.viewState.state = r);
        let s = this.hasFocus,
            o = 0,
            l = null;
        t.some((t => t.annotation(ms))) ? (this.inputState.notifiedFocused = s, o = 1) : s != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = s, l = Qs(r, s), l || (o = 1));
        let a = this.observer.delayedAndroidKey,
            h = null;
        if (a ? (this.observer.clearDelayedAndroidKey(), h = this.observer.readChange(), (h && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (h = null)) : this.observer.clear(), r.facet(Je.phrases) != this.state.facet(Je.phrases)) return this.setState(r);
        e = ur.create(this, r, t), e.flags |= o;
        let c = this.viewState.scrollTarget;
        try {
            this.updateState = 2;
            for (let e of t) {
                if (c && (c = c.map(e.changes)), e.scrollIntoView) {
                    let {
                        main: t
                    } = e.state.selection;
                    c = new Fn(t.empty ? t : ce.cursor(t.head, t.head > t.anchor ? -1 : 1))
                }
                for (let t of e.effects) t.is(Jn) && (c = t.value)
            }
            this.viewState.update(e, c), this.bidiCache = ho.update(this.bidiCache, e.changes), e.empty || (this.updatePlugins(e), this.inputState.update(e)), i = this.docView.update(e), this.state.facet(cr) != this.styleModules && this.mountStyles(), n = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(i, t.some((t => t.isUserEvent("select.pointer"))))
        } finally {
            this.updateState = 0
        }
        if (e.startState.facet(Gs) != e.state.facet(Gs) && (this.viewState.mustMeasureContent = !0), (i || n || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), !e.empty)
            for (let t of this.state.facet(Gn)) t(e);
        (l || h) && Promise.resolve().then((() => {
            l && this.state == l.startState && this.dispatch(l), h && !eo(this, h) && a.force && Ni(this.contentDOM, a.key, a.keyCode)
        }))
    }
    setState(t) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = t);
        this.updateState = 2;
        let e = this.hasFocus;
        try {
            for (let t of this.plugins) t.destroy(this);
            this.viewState = new Vs(t), this.plugins = t.facet(ir).map((t => new rr(t))), this.pluginMap.clear();
            for (let t of this.plugins) t.update(this);
            this.docView = new Cr(this), this.inputState.ensureHandlers(this, this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
            this.updateState = 0
        }
        e && this.focus(), this.requestMeasure()
    }
    updatePlugins(t) {
        let e = t.startState.facet(ir),
            i = t.state.facet(ir);
        if (e != i) {
            let n = [];
            for (let r of i) {
                let i = e.indexOf(r);
                if (i < 0) n.push(new rr(r));
                else {
                    let e = this.plugins[i];
                    e.mustUpdate = t, n.push(e)
                }
            }
            for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
            this.plugins = n, this.pluginMap.clear(), this.inputState.ensureHandlers(this, this.plugins)
        } else
            for (let e of this.plugins) e.mustUpdate = t;
        for (let t = 0; t < this.plugins.length; t++) this.plugins[t].update(this)
    }
    measure(t = !0) {
        if (this.destroyed) return;
        this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.measureScheduled = 0, t && this.observer.forceFlush();
        let e = null,
            {
                scrollHeight: i,
                scrollTop: n,
                clientHeight: r
            } = this.scrollDOM,
            s = n > i - r - 4 ? i : n;
        try {
            for (let t = 0;; t++) {
                this.updateState = 1;
                let i = this.viewport,
                    n = this.viewState.lineBlockAtHeight(s),
                    r = this.viewState.measure(this);
                if (!r && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
                if (t > 5) {
                    console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
                    break
                }
                let o = [];
                4 & r || ([this.measureRequests, o] = [o, this.measureRequests]);
                let l = o.map((t => {
                        try {
                            return t.read(this)
                        } catch (t) {
                            return Kn(this.state, t), ao
                        }
                    })),
                    a = ur.create(this, this.state, []),
                    h = !1,
                    c = !1;
                a.flags |= r, e ? e.flags |= r : e = a, this.updateState = 2, a.empty || (this.updatePlugins(a), this.inputState.update(a), this.updateAttrs(), h = this.docView.update(a));
                for (let t = 0; t < o.length; t++)
                    if (l[t] != ao) try {
                        let e = o[t];
                        e.write && e.write(l[t], this)
                    } catch (t) {
                        Kn(this.state, t)
                    }
                if (this.viewState.editorHeight)
                    if (this.viewState.scrollTarget) this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, c = !0;
                    else {
                        let t = this.viewState.lineBlockAt(n.from).top - n.top;
                        (t > 1 || t < -1) && (this.scrollDOM.scrollTop += t, c = !0)
                    } if (h && this.docView.updateSelection(!0), this.viewport.from == i.from && this.viewport.to == i.to && !c && 0 == this.measureRequests.length) break
            }
        } finally {
            this.updateState = 0, this.measureScheduled = -1
        }
        if (e && !e.empty)
            for (let t of this.state.facet(Gn)) t(e)
    }
    get themeClasses() {
        return Bs + " " + (this.state.facet(Ns) ? Hs : Ls) + " " + this.state.facet(Gs)
    }
    updateAttrs() {
        let t = co(this, sr, {
                class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
            }),
            e = {
                spellcheck: "false",
                autocorrect: "off",
                autocapitalize: "off",
                translate: "no",
                contenteditable: this.state.facet(tr) ? "true" : "false",
                class: "cm-content",
                style: `${dn.tabSize}: ${this.state.tabSize}`,
                role: "textbox",
                "aria-multiline": "true"
            };
        this.state.readOnly && (e["aria-readonly"] = "true"), co(this, or, e);
        let i = this.observer.ignore((() => {
            let i = _n(this.contentDOM, this.contentAttrs, e),
                n = _n(this.dom, this.editorAttrs, t);
            return i || n
        }));
        return this.editorAttrs = t, this.contentAttrs = e, i
    }
    showAnnouncements(t) {
        let e = !0;
        for (let i of t)
            for (let t of i.effects)
                if (t.is(oo.announce)) {
                    e && (this.announceDOM.textContent = ""), e = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = t.value
                }
    }
    mountStyles() {
        this.styleModules = this.state.facet(cr), vi.mount(this.root, this.styleModules.concat(Ks).reverse())
    }
    readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
    }
    requestMeasure(t) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), t) {
            if (this.measureRequests.indexOf(t) > -1) return;
            if (null != t.key)
                for (let e = 0; e < this.measureRequests.length; e++)
                    if (this.measureRequests[e].key === t.key) return void(this.measureRequests[e] = t);
            this.measureRequests.push(t)
        }
    }
    plugin(t) {
        let e = this.pluginMap.get(t);
        return (void 0 === e || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((e => e.spec == t)) || null), e && e.update(this).value
    }
    get documentTop() {
        return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
    }
    get documentPadding() {
        return {
            top: this.viewState.paddingTop,
            bottom: this.viewState.paddingBottom
        }
    }
    elementAtHeight(t) {
        return this.readMeasured(), this.viewState.elementAtHeight(t)
    }
    lineBlockAtHeight(t) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(t)
    }
    get viewportLineBlocks() {
        return this.viewState.viewportLines
    }
    lineBlockAt(t) {
        return this.viewState.lineBlockAt(t)
    }
    get contentHeight() {
        return this.viewState.contentHeight
    }
    moveByChar(t, e, i) {
        return Nr(this, t, Gr(this, t, e, i))
    }
    moveByGroup(t, e) {
        return Nr(this, t, Gr(this, t, e, (e => function(t, e, i) {
            let n = t.state.charCategorizer(e),
                r = n(i);
            return t => {
                let e = n(t);
                return r == Be.Space && (r = e), r == e
            }
        }(this, t.head, e))))
    }
    moveToLineBoundary(t, e, i = !0) {
        return function(t, e, i, n) {
            let r = t.state.doc.lineAt(e.head),
                s = n && t.lineWrapping ? t.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head) : null;
            if (s) {
                let e = t.dom.getBoundingClientRect(),
                    n = t.textDirectionAt(r.from),
                    o = t.posAtCoords({
                        x: i == (n == fr.LTR) ? e.right - 1 : e.left + 1,
                        y: (s.top + s.bottom) / 2
                    });
                if (null != o) return ce.cursor(o, i ? -1 : 1)
            }
            let o = Un.find(t.docView, e.head),
                l = o ? i ? o.posAtEnd : o.posAtStart : i ? r.to : r.from;
            return ce.cursor(l, i ? -1 : 1)
        }(this, t, e, i)
    }
    moveVertically(t, e, i) {
        return Nr(this, t, function(t, e, i, n) {
            let r = e.head,
                s = i ? 1 : -1;
            if (r == (i ? t.state.doc.length : 0)) return ce.cursor(r, e.assoc);
            let o, l = e.goalColumn,
                a = t.contentDOM.getBoundingClientRect(),
                h = t.coordsAtPos(r),
                c = t.documentTop;
            if (h) null == l && (l = h.left - a.left), o = s < 0 ? h.top : h.bottom;
            else {
                let e = t.viewState.lineBlockAt(r);
                null == l && (l = Math.min(a.right - a.left, t.defaultCharacterWidth * (r - e.from))), o = (s < 0 ? e.top : e.bottom) + c
            }
            let O = a.left + l,
                u = null != n ? n : t.defaultLineHeight >> 1;
            for (let i = 0;; i += 10) {
                let n = o + (u + i) * s,
                    h = Ir(t, {
                        x: O,
                        y: n
                    }, !1, s);
                if (n < a.top || n > a.bottom || (s < 0 ? h < r : h > r)) return ce.cursor(h, e.assoc, void 0, l)
            }
        }(this, t, e, i))
    }
    domAtPos(t) {
        return this.docView.domAtPos(t)
    }
    posAtDOM(t, e = 0) {
        return this.docView.posFromDOM(t, e)
    }
    posAtCoords(t, e = !0) {
        return this.readMeasured(), Ir(this, t, e)
    }
    coordsAtPos(t, e = 1) {
        this.readMeasured();
        let i = this.docView.coordsAt(t, e);
        if (!i || i.left == i.right) return i;
        let n = this.state.doc.lineAt(t),
            r = this.bidiSpans(n);
        return ji(i, r[br.find(r, t - n.from, -1, e)].dir == fr.LTR == e > 0)
    }
    get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth
    }
    get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight
    }
    get textDirection() {
        return this.viewState.defaultTextDirection
    }
    textDirectionAt(t) {
        return !this.state.facet(Ln) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t))
    }
    get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
    }
    bidiSpans(t) {
        if (t.length > lo) return xr(t.length);
        let e = this.textDirectionAt(t.from);
        for (let i of this.bidiCache)
            if (i.from == t.from && i.dir == e) return i.order;
        let i = function(t, e) {
            let i = t.length,
                n = e == dr ? 1 : 2,
                r = e == dr ? 2 : 1;
            if (!t || 1 == n && !yr.test(t)) return xr(i);
            for (let e = 0, r = n, o = n; e < i; e++) {
                let i = (s = t.charCodeAt(e)) <= 247 ? mr[s] : 1424 <= s && s <= 1524 ? 2 : 1536 <= s && s <= 1785 ? Qr[s - 1536] : 1774 <= s && s <= 2220 ? 4 : 8192 <= s && s <= 8203 ? 256 : 64336 <= s && s <= 65023 ? 4 : 8204 == s ? 256 : 1;
                512 == i ? i = r : 8 == i && 4 == o && (i = 16), wr[e] = 4 == i ? 2 : i, 7 & i && (o = i), r = i
            }
            var s;
            for (let t = 0, e = n, r = n; t < i; t++) {
                let n = wr[t];
                if (128 == n) t < i - 1 && e == wr[t + 1] && 24 & e ? n = wr[t] = e : wr[t] = 256;
                else if (64 == n) {
                    let n = t + 1;
                    for (; n < i && 64 == wr[n];) n++;
                    let s = t && 8 == e || n < i && 8 == wr[n] ? 1 == r ? 1 : 8 : 256;
                    for (let e = t; e < n; e++) wr[e] = s;
                    t = n - 1
                } else 8 == n && 1 == r && (wr[t] = 1);
                e = n, 7 & n && (r = n)
            }
            for (let e, s, o, l = 0, a = 0, h = 0; l < i; l++)
                if (s = Sr[e = t.charCodeAt(l)])
                    if (s < 0) {
                        for (let t = a - 3; t >= 0; t -= 3)
                            if (vr[t + 1] == -s) {
                                let e = vr[t + 2],
                                    i = 2 & e ? n : 4 & e ? 1 & e ? r : n : 0;
                                i && (wr[l] = wr[vr[t]] = i), a = t;
                                break
                            }
                    } else {
                        if (189 == vr.length) break;
                        vr[a++] = l, vr[a++] = e, vr[a++] = h
                    }
            else if (2 == (o = wr[l]) || 1 == o) {
                let t = o == n;
                h = t ? 0 : 1;
                for (let e = a - 3; e >= 0; e -= 3) {
                    let i = vr[e + 2];
                    if (2 & i) break;
                    if (t) vr[e + 2] |= 2;
                    else {
                        if (4 & i) break;
                        vr[e + 2] |= 4
                    }
                }
            }
            for (let t = 0; t < i; t++)
                if (256 == wr[t]) {
                    let e = t + 1;
                    for (; e < i && 256 == wr[e];) e++;
                    let r = 1 == (t ? wr[t - 1] : n),
                        s = r == (1 == (e < i ? wr[e] : n)) ? r ? 1 : 2 : n;
                    for (let i = t; i < e; i++) wr[i] = s;
                    t = e - 1
                } let o = [];
            if (1 == n)
                for (let t = 0; t < i;) {
                    let e = t,
                        n = 1 != wr[t++];
                    for (; t < i && n == (1 != wr[t]);) t++;
                    if (n)
                        for (let i = t; i > e;) {
                            let t = i,
                                n = 2 != wr[--i];
                            for (; i > e && n == (2 != wr[i - 1]);) i--;
                            o.push(new br(i, t, n ? 2 : 1))
                        } else o.push(new br(e, t, 0))
                } else
                    for (let t = 0; t < i;) {
                        let e = t,
                            n = 2 == wr[t++];
                        for (; t < i && n == (2 == wr[t]);) t++;
                        o.push(new br(e, t, n ? 1 : 2))
                    }
            return o
        }(t.text, e);
        return this.bidiCache.push(new ho(t.from, t.to, e, i)), i
    }
    get hasFocus() {
        var t;
        return (this.dom.ownerDocument.hasFocus() || dn.safari && (null === (t = this.inputState) || void 0 === t ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
    }
    focus() {
        this.observer.ignore((() => {
            zi(this.contentDOM), this.docView.updateSelection()
        }))
    }
    setRoot(t) {
        this._root != t && (this._root = t, this.observer.setWindow((9 == t.nodeType ? t : t.ownerDocument).defaultView || window), this.mountStyles())
    }
    destroy() {
        for (let t of this.plugins) t.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
    }
    static scrollIntoView(t, e = {}) {
        return Jn.of(new Fn("number" == typeof t ? ce.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin))
    }
    static domEventHandlers(t) {
        return nr.define((() => ({})), {
            eventHandlers: t
        })
    }
    static theme(t, e) {
        let i = vi.newName(),
            n = [Gs.of(i), cr.of(Js(`.${i}`, t))];
        return e && e.dark && n.push(Ns.of(!0)), n
    }
    static baseTheme(t) {
        return we.lowest(cr.of(Js("." + Bs, t, Fs)))
    }
    static findFromDOM(t) {
        var e;
        let i = t.querySelector(".cm-content"),
            n = i && Fi.get(i) || Fi.get(t);
        return (null === (e = null == n ? void 0 : n.rootView) || void 0 === e ? void 0 : e.view) || null
    }
}
oo.styleModule = cr, oo.inputHandler = Nn, oo.focusChangeEffect = Bn, oo.perLineTextDirection = Ln, oo.exceptionSink = zn, oo.updateListener = Gn, oo.editable = tr, oo.mouseSelectionStyle = In, oo.dragMovesSelection = qn, oo.clickAddsSelectionRange = En, oo.decorations = lr, oo.atomicRanges = ar, oo.scrollMargins = hr, oo.darkTheme = Ns, oo.contentAttributes = or, oo.editorAttributes = sr, oo.lineWrapping = oo.contentAttributes.of({
    class: "cm-lineWrapping"
}), oo.announce = je.define();
const lo = 4096,
    ao = {};
class ho {
    constructor(t, e, i, n) {
        this.from = t, this.to = e, this.dir = i, this.order = n
    }
    static update(t, e) {
        if (e.empty) return t;
        let i = [],
            n = t.length ? t[t.length - 1].dir : fr.LTR;
        for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
            let s = t[r];
            s.dir != n || e.touchesRange(s.from, s.to) || i.push(new ho(e.mapPos(s.from, 1), e.mapPos(s.to, -1), s.dir, s.order))
        }
        return i
    }
}

function co(t, e, i) {
    for (let n = t.state.facet(e), r = n.length - 1; r >= 0; r--) {
        let e = n[r],
            s = "function" == typeof e ? e(t) : e;
        s && kn(s, i)
    }
    return i
}
const Oo = dn.mac ? "mac" : dn.windows ? "win" : dn.linux ? "linux" : "key";

function uo(t, e, i) {
    return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), !1 !== i && e.shiftKey && (t = "Shift-" + t), t
}
const fo = we.default(oo.domEventHandlers({
        keydown: (t, e) => function(t, e, i, n) {
            let r = function(t) {
                    var e = !(_i && (t.ctrlKey || t.altKey || t.metaKey) || Pi && t.shiftKey && t.key && 1 == t.key.length || "Unidentified" == t.key) && t.key || (t.shiftKey ? xi : wi)[t.keyCode] || t.key || "Unidentified";
                    return "Esc" == e && (e = "Escape"), "Del" == e && (e = "Delete"), "Left" == e && (e = "ArrowLeft"), "Up" == e && (e = "ArrowUp"), "Right" == e && (e = "ArrowRight"), "Down" == e && (e = "ArrowDown"), e
                }(e),
                s = Ht(r, 0),
                o = Jt(s) == r.length && " " != r,
                l = "",
                a = !1;
            mo && mo.view == i && mo.scope == n && (l = mo.prefix + " ", (a = Fr.indexOf(e.keyCode) < 0) && (mo = null));
            let h, c, O = new Set,
                u = t => {
                    if (t) {
                        for (let n of t.run)
                            if (!O.has(n) && (O.add(n), n(i, e))) return !0;
                        t.preventDefault && (a = !0)
                    }
                    return !1
                },
                f = t[n];
            if (f) {
                if (u(f[l + uo(r, e, !o)])) return !0;
                if (o && (e.altKey || e.metaKey || e.ctrlKey) && !(dn.windows && e.ctrlKey && e.altKey) && (h = wi[e.keyCode]) && h != r) {
                    if (u(f[l + uo(h, e, !0)])) return !0;
                    if (e.shiftKey && (c = xi[e.keyCode]) != r && c != h && u(f[l + uo(c, e, !1)])) return !0
                } else if (o && e.shiftKey && u(f[l + uo(r, e, !0)])) return !0;
                if (u(f._any)) return !0
            }
            return a
        }(function(t) {
            let e = t.facet(po),
                i = go.get(e);
            i || go.set(e, i = function(t, e = Oo) {
                let i = Object.create(null),
                    n = Object.create(null),
                    r = (t, e) => {
                        let i = n[t];
                        if (null == i) n[t] = e;
                        else if (i != e) throw new Error("Key binding " + t + " is used both as a regular binding and as a multi-stroke prefix")
                    },
                    s = (t, n, s, o) => {
                        var l, a;
                        let h = i[t] || (i[t] = Object.create(null)),
                            c = n.split(/ (?!$)/).map((t => function(t, e) {
                                const i = t.split(/-(?!$)/);
                                let n, r, s, o, l = i[i.length - 1];
                                "Space" == l && (l = " ");
                                for (let t = 0; t < i.length - 1; ++t) {
                                    const l = i[t];
                                    if (/^(cmd|meta|m)$/i.test(l)) o = !0;
                                    else if (/^a(lt)?$/i.test(l)) n = !0;
                                    else if (/^(c|ctrl|control)$/i.test(l)) r = !0;
                                    else if (/^s(hift)?$/i.test(l)) s = !0;
                                    else {
                                        if (!/^mod$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);
                                        "mac" == e ? o = !0 : r = !0
                                    }
                                }
                                return n && (l = "Alt-" + l), r && (l = "Ctrl-" + l), o && (l = "Meta-" + l), s && (l = "Shift-" + l), l
                            }(t, e)));
                        for (let e = 1; e < c.length; e++) {
                            let i = c.slice(0, e).join(" ");
                            r(i, !0), h[i] || (h[i] = {
                                preventDefault: !0,
                                run: [e => {
                                    let n = mo = {
                                        view: e,
                                        prefix: i,
                                        scope: t
                                    };
                                    return setTimeout((() => {
                                        mo == n && (mo = null)
                                    }), Qo), !0
                                }]
                            })
                        }
                        let O = c.join(" ");
                        r(O, !1);
                        let u = h[O] || (h[O] = {
                            preventDefault: !1,
                            run: (null === (a = null === (l = h._any) || void 0 === l ? void 0 : l.run) || void 0 === a ? void 0 : a.slice()) || []
                        });
                        s && u.run.push(s), o && (u.preventDefault = !0)
                    };
                for (let n of t) {
                    let t = n.scope ? n.scope.split(" ") : ["editor"];
                    if (n.any)
                        for (let e of t) {
                            let t = i[e] || (i[e] = Object.create(null));
                            t._any || (t._any = {
                                preventDefault: !1,
                                run: []
                            });
                            for (let e in t) t[e].run.push(n.any)
                        }
                    let r = n[e] || n.key;
                    if (r)
                        for (let e of t) s(e, r, n.run, n.preventDefault), n.shift && s(e, "Shift-" + r, n.shift, n.preventDefault)
                }
                return i
            }(e.reduce(((t, e) => t.concat(e)), [])));
            return i
        }(e.state), t, e, "editor")
    })),
    po = fe.define({
        enables: fo
    }),
    go = new WeakMap;
let mo = null;
const Qo = 4e3;
class So {
    constructor(t, e, i, n, r) {
        this.className = t, this.left = e, this.top = i, this.width = n, this.height = r
    }
    draw() {
        let t = document.createElement("div");
        return t.className = this.className, this.adjust(t), t
    }
    update(t, e) {
        return e.className == this.className && (this.adjust(t), !0)
    }
    adjust(t) {
        t.style.left = this.left + "px", t.style.top = this.top + "px", null != this.width && (t.style.width = this.width + "px"), t.style.height = this.height + "px"
    }
    eq(t) {
        return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className
    }
    static forRange(t, e, i) {
        if (i.empty) {
            let n = t.coordsAtPos(i.head, i.assoc || 1);
            if (!n) return [];
            let r = vo(t);
            return [new So(e, n.left - r.left, n.top - r.top, null, n.bottom - n.top)]
        }
        return function(t, e, i) {
            if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
            let n = Math.max(i.from, t.viewport.from),
                r = Math.min(i.to, t.viewport.to),
                s = t.textDirection == fr.LTR,
                o = t.contentDOM,
                l = o.getBoundingClientRect(),
                a = vo(t),
                h = window.getComputedStyle(o.firstChild),
                c = l.left + parseInt(h.paddingLeft) + Math.min(0, parseInt(h.textIndent)),
                O = l.right - parseInt(h.paddingRight),
                u = bo(t, n),
                f = bo(t, r),
                d = u.type == Xn.Text ? u : null,
                p = f.type == Xn.Text ? f : null;
            t.lineWrapping && (d && (d = yo(t, n, d)), p && (p = yo(t, r, p)));
            if (d && p && d.from == p.from) return m(Q(i.from, i.to, d));
            {
                let e = d ? Q(i.from, null, d) : S(u, !1),
                    n = p ? Q(null, i.to, p) : S(f, !0),
                    r = [];
                return (d || u).to < (p || f).from - 1 ? r.push(g(c, e.bottom, O, n.top)) : e.bottom < n.top && t.elementAtHeight((e.bottom + n.top) / 2).type == Xn.Text && (e.bottom = n.top = (e.bottom + n.top) / 2), m(e).concat(r).concat(m(n))
            }

            function g(t, i, n, r) {
                return new So(e, t - a.left, i - a.top - .01, n - t, r - i + .01)
            }

            function m({
                top: t,
                bottom: e,
                horizontal: i
            }) {
                let n = [];
                for (let r = 0; r < i.length; r += 2) n.push(g(i[r], t, i[r + 1], e));
                return n
            }

            function Q(e, i, n) {
                let r = 1e9,
                    o = -1e9,
                    l = [];

                function a(e, i, a, h, u) {
                    let f = t.coordsAtPos(e, e == n.to ? -2 : 2),
                        d = t.coordsAtPos(a, a == n.from ? 2 : -2);
                    r = Math.min(f.top, d.top, r), o = Math.max(f.bottom, d.bottom, o), u == fr.LTR ? l.push(s && i ? c : f.left, s && h ? O : d.right) : l.push(!s && h ? c : d.left, !s && i ? O : f.right)
                }
                let h = null != e ? e : n.from,
                    u = null != i ? i : n.to;
                for (let n of t.visibleRanges)
                    if (n.to > h && n.from < u)
                        for (let r = Math.max(n.from, h), s = Math.min(n.to, u);;) {
                            let n = t.state.doc.lineAt(r);
                            for (let o of t.bidiSpans(n)) {
                                let t = o.from + n.from,
                                    l = o.to + n.from;
                                if (t >= s) break;
                                l > r && a(Math.max(t, r), null == e && t <= h, Math.min(l, s), null == i && l >= u, o.dir)
                            }
                            if (r = n.to + 1, r >= s) break
                        }
                return 0 == l.length && a(h, null == e, u, null == i, t.textDirection), {
                    top: r,
                    bottom: o,
                    horizontal: l
                }
            }

            function S(t, e) {
                let i = l.top + (e ? t.top : t.bottom);
                return {
                    top: i,
                    bottom: i,
                    horizontal: []
                }
            }
        }(t, e, i)
    }
}

function vo(t) {
    let e = t.scrollDOM.getBoundingClientRect();
    return {
        left: (t.textDirection == fr.LTR ? e.left : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
        top: e.top - t.scrollDOM.scrollTop
    }
}

function yo(t, e, i) {
    let n = ce.cursor(e);
    return {
        from: Math.max(i.from, t.moveToLineBoundary(n, !1, !0).from),
        to: Math.min(i.to, t.moveToLineBoundary(n, !0, !0).from),
        type: Xn.Text
    }
}

function bo(t, e) {
    let i = t.lineBlockAt(e);
    if (Array.isArray(i.type))
        for (let t of i.type)
            if (t.to > e || t.to == e && (t.to == i.to || t.type == Xn.Text)) return t;
    return i
}
class wo {
    constructor(t, e) {
        this.view = t, this.layer = e, this.drawn = [], this.measureReq = {
            read: this.measure.bind(this),
            write: this.draw.bind(this)
        }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t)
    }
    update(t) {
        t.startState.facet(xo) != t.state.facet(xo) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && t.view.requestMeasure(this.measureReq)
    }
    setOrder(t) {
        let e = 0,
            i = t.facet(xo);
        for (; e < i.length && i[e] != this.layer;) e++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e)
    }
    measure() {
        return this.layer.markers(this.view)
    }
    draw(t) {
        if (t.length != this.drawn.length || t.some(((t, e) => ! function(t, e) {
                return t.constructor == e.constructor && t.eq(e)
            }(t, this.drawn[e])))) {
            let e = this.dom.firstChild,
                i = 0;
            for (let n of t) n.update && e && n.constructor && this.drawn[i].constructor && n.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(n.draw(), e);
            for (; e;) {
                let t = e.nextSibling;
                e.remove(), e = t
            }
            this.drawn = t
        }
    }
    destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
    }
}
const xo = fe.define();

function $o(t) {
    return [nr.define((e => new wo(e, t))), xo.of(t)]
}
const ko = !dn.ios,
    Po = fe.define({
        combine: t => Ke(t, {
            cursorBlinkRate: 1200,
            drawRangeCursor: !0
        }, {
            cursorBlinkRate: (t, e) => Math.min(t, e),
            drawRangeCursor: (t, e) => t || e
        })
    });

function _o(t = {}) {
    return [Po.of(t), Xo, To, Ao, Hn.of(!0)]
}

function Zo(t) {
    return t.startState.facet(Po) != t.state.facet(Po)
}
const Xo = $o({
    above: !0,
    markers(t) {
        let {
            state: e
        } = t, i = e.facet(Po), n = [];
        for (let r of e.selection.ranges) {
            let s = r == e.selection.main;
            if (r.empty ? !s || ko : i.drawRangeCursor) {
                let e = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
                    i = r.empty ? r : ce.cursor(r.head, r.head > r.anchor ? -1 : 1);
                for (let r of So.forRange(t, e, i)) n.push(r)
            }
        }
        return n
    },
    update(t, e) {
        t.transactions.some((t => t.selection)) && (e.style.animationName = "cm-blink" == e.style.animationName ? "cm-blink2" : "cm-blink");
        let i = Zo(t);
        return i && Co(t.state, e), t.docChanged || t.selectionSet || i
    },
    mount(t, e) {
        Co(e.state, t)
    },
    class: "cm-cursorLayer"
});

function Co(t, e) {
    e.style.animationDuration = t.facet(Po).cursorBlinkRate + "ms"
}
const To = $o({
        above: !1,
        markers: t => t.state.selection.ranges.map((e => e.empty ? [] : So.forRange(t, "cm-selectionBackground", e))).reduce(((t, e) => t.concat(e))),
        update: (t, e) => t.docChanged || t.selectionSet || t.viewportChanged || Zo(t),
        class: "cm-selectionLayer"
    }),
    Wo = {
        ".cm-line": {
            "& ::selection": {
                backgroundColor: "transparent !important"
            },
            "&::selection": {
                backgroundColor: "transparent !important"
            }
        }
    };
ko && (Wo[".cm-line"].caretColor = "transparent !important");
const Ao = we.highest(oo.theme(Wo));

function Yo(t, e, i, n, r) {
    e.lastIndex = 0;
    for (let s, o = t.iterRange(i, n), l = i; !o.next().done; l += o.value.length)
        if (!o.lineBreak)
            for (; s = e.exec(o.value);) r(l + s.index, s)
}
class Ro {
    constructor(t) {
        const {
            regexp: e,
            decoration: i,
            decorate: n,
            boundary: r,
            maxLength: s = 1e3
        } = t;
        if (!e.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = e, n) this.addMatch = (t, e, i, r) => n(r, i, i + t[0].length, t, e);
        else if ("function" == typeof i) this.addMatch = (t, e, n, r) => {
            let s = i(t, e, n);
            s && r(n, n + t[0].length, s)
        };
        else {
            if (!i) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
            this.addMatch = (t, e, n, r) => r(n, n + t[0].length, i)
        }
        this.boundary = r, this.maxLength = s
    }
    createDeco(t) {
        let e = new si,
            i = e.add.bind(e);
        for (let {
                from: e,
                to: n
            }
            of
            function(t, e) {
                let i = t.visibleRanges;
                if (1 == i.length && i[0].from == t.viewport.from && i[0].to == t.viewport.to) return i;
                let n = [];
                for (let {
                        from: r,
                        to: s
                    }
                    of i) r = Math.max(t.state.doc.lineAt(r).from, r - e), s = Math.min(t.state.doc.lineAt(s).to, s + e), n.length && n[n.length - 1].to >= r ? n[n.length - 1].to = s : n.push({
                    from: r,
                    to: s
                });
                return n
            }(t, this.maxLength)) Yo(t.state.doc, this.regexp, e, n, ((e, n) => this.addMatch(n, t, e, i)));
        return e.finish()
    }
    updateDeco(t, e) {
        let i = 1e9,
            n = -1;
        return t.docChanged && t.changes.iterChanges(((e, r, s, o) => {
            o > t.view.viewport.from && s < t.view.viewport.to && (i = Math.min(s, i), n = Math.max(o, n))
        })), t.viewportChanged || n - i > 1e3 ? this.createDeco(t.view) : n > -1 ? this.updateRange(t.view, e.map(t.changes), i, n) : e
    }
    updateRange(t, e, i, n) {
        for (let r of t.visibleRanges) {
            let s = Math.max(r.from, i),
                o = Math.min(r.to, n);
            if (o > s) {
                let i = t.state.doc.lineAt(s),
                    n = i.to < o ? t.state.doc.lineAt(o) : i,
                    l = Math.max(r.from, i.from),
                    a = Math.min(r.to, n.to);
                if (this.boundary) {
                    for (; s > i.from; s--)
                        if (this.boundary.test(i.text[s - 1 - i.from])) {
                            l = s;
                            break
                        } for (; o < n.to; o++)
                        if (this.boundary.test(n.text[o - n.from])) {
                            a = o;
                            break
                        }
                }
                let h, c = [],
                    O = (t, e, i) => c.push(i.range(t, e));
                if (i == n)
                    for (this.regexp.lastIndex = l - i.from;
                        (h = this.regexp.exec(i.text)) && h.index < a - i.from;) this.addMatch(h, t, h.index + i.from, O);
                else Yo(t.state.doc, this.regexp, l, a, ((e, i) => this.addMatch(i, t, e, O)));
                e = e.update({
                    filterFrom: l,
                    filterTo: a,
                    filter: (t, e) => t < l || e > a,
                    add: c
                })
            }
        }
        return e
    }
}
const Uo = null != /x/.unicode ? "gu" : "g",
    Vo = new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]", Uo),
    Mo = {
        0: "null",
        7: "bell",
        8: "backspace",
        10: "newline",
        11: "vertical tab",
        13: "carriage return",
        27: "escape",
        8203: "zero width space",
        8204: "zero width non-joiner",
        8205: "zero width joiner",
        8206: "left-to-right mark",
        8207: "right-to-left mark",
        8232: "line separator",
        8237: "left-to-right override",
        8238: "right-to-left override",
        8294: "left-to-right isolate",
        8295: "right-to-left isolate",
        8297: "pop directional isolate",
        8233: "paragraph separator",
        65279: "zero width no-break space",
        65532: "object replacement"
    };
let jo = null;
const Do = fe.define({
    combine(t) {
        let e = Ke(t, {
            render: null,
            specialChars: Vo,
            addSpecialChars: null
        });
        return (e.replaceTabs = ! function() {
            var t;
            if (null == jo && "undefined" != typeof document && document.body) {
                let e = document.body.style;
                jo = null != (null !== (t = e.tabSize) && void 0 !== t ? t : e.MozTabSize)
            }
            return jo || !1
        }()) && (e.specialChars = new RegExp("\t|" + e.specialChars.source, Uo)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Uo)), e
    }
});

function Eo(t = {}) {
    return [Do.of(t), qo || (qo = nr.fromClass(class {
        constructor(t) {
            this.view = t, this.decorations = Cn.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(t.state.facet(Do)), this.decorations = this.decorator.createDeco(t)
        }
        makeDecorator(t) {
            return new Ro({
                regexp: t.specialChars,
                decoration: (e, i, n) => {
                    let {
                        doc: r
                    } = i.state, s = Ht(e[0], 0);
                    if (9 == s) {
                        let t = r.lineAt(n),
                            e = i.state.tabSize,
                            s = gi(t.text, e, n - t.from);
                        return Cn.replace({
                            widget: new Go((e - s % e) * this.view.defaultCharacterWidth)
                        })
                    }
                    return this.decorationCache[s] || (this.decorationCache[s] = Cn.replace({
                        widget: new zo(t, s)
                    }))
                },
                boundary: t.replaceTabs ? void 0 : /[^]/
            })
        }
        update(t) {
            let e = t.state.facet(Do);
            t.startState.facet(Do) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(t.view)) : this.decorations = this.decorator.updateDeco(t, this.decorations)
        }
    }, {
        decorations: t => t.decorations
    }))]
}
let qo = null;
const Io = "•";
class zo extends Zn {
    constructor(t, e) {
        super(), this.options = t, this.code = e
    }
    eq(t) {
        return t.code == this.code
    }
    toDOM(t) {
        let e = function(t) {
                return t >= 32 ? Io : 10 == t ? "␤" : String.fromCharCode(9216 + t)
            }(this.code),
            i = t.state.phrase("Control character") + " " + (Mo[this.code] || "0x" + this.code.toString(16)),
            n = this.options.render && this.options.render(this.code, i, e);
        if (n) return n;
        let r = document.createElement("span");
        return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r
    }
    ignoreEvent() {
        return !1
    }
}
class Go extends Zn {
    constructor(t) {
        super(), this.width = t
    }
    eq(t) {
        return t.width == this.width
    }
    toDOM() {
        let t = document.createElement("span");
        return t.textContent = "\t", t.className = "cm-tab", t.style.width = this.width + "px", t
    }
    ignoreEvent() {
        return !1
    }
}
const No = Cn.line({
        class: "cm-activeLine"
    }),
    Bo = nr.fromClass(class {
        constructor(t) {
            this.decorations = this.getDeco(t)
        }
        update(t) {
            (t.docChanged || t.selectionSet) && (this.decorations = this.getDeco(t.view))
        }
        getDeco(t) {
            let e = -1,
                i = [];
            for (let n of t.state.selection.ranges) {
                let r = t.lineBlockAt(n.head);
                r.from > e && (i.push(No.range(r.from)), e = r.from)
            }
            return Cn.set(i)
        }
    }, {
        decorations: t => t.decorations
    }),
    Lo = "-10000px";
class Ho {
    constructor(t, e, i) {
        this.facet = e, this.createTooltipView = i, this.input = t.state.facet(e), this.tooltips = this.input.filter((t => t)), this.tooltipViews = this.tooltips.map(i)
    }
    update(t) {
        var e;
        let i = t.state.facet(this.facet),
            n = i.filter((t => t));
        if (i === this.input) {
            for (let e of this.tooltipViews) e.update && e.update(t);
            return !1
        }
        let r = [];
        for (let e = 0; e < n.length; e++) {
            let i = n[e],
                s = -1;
            if (i) {
                for (let t = 0; t < this.tooltips.length; t++) {
                    let e = this.tooltips[t];
                    e && e.create == i.create && (s = t)
                }
                if (s < 0) r[e] = this.createTooltipView(i);
                else {
                    let i = r[e] = this.tooltipViews[s];
                    i.update && i.update(t)
                }
            }
        }
        for (let t of this.tooltipViews) r.indexOf(t) < 0 && (t.dom.remove(), null === (e = t.destroy) || void 0 === e || e.call(t));
        return this.input = i, this.tooltips = n, this.tooltipViews = r, !0
    }
}

function Fo(t) {
    let {
        win: e
    } = t;
    return {
        top: 0,
        left: 0,
        bottom: e.innerHeight,
        right: e.innerWidth
    }
}
const Jo = fe.define({
        combine: t => {
            var e, i, n;
            return {
                position: dn.ios ? "absolute" : (null === (e = t.find((t => t.position))) || void 0 === e ? void 0 : e.position) || "fixed",
                parent: (null === (i = t.find((t => t.parent))) || void 0 === i ? void 0 : i.parent) || null,
                tooltipSpace: (null === (n = t.find((t => t.tooltipSpace))) || void 0 === n ? void 0 : n.tooltipSpace) || Fo
            }
        }
    }),
    Ko = new WeakMap,
    tl = nr.fromClass(class {
        constructor(t) {
            this.view = t, this.inView = !0, this.lastTransaction = 0, this.measureTimeout = -1;
            let e = t.state.facet(Jo);
            this.position = e.position, this.parent = e.parent, this.classes = t.themeClasses, this.createContainer(), this.measureReq = {
                read: this.readMeasure.bind(this),
                write: this.writeMeasure.bind(this),
                key: this
            }, this.manager = new Ho(t, nl, (t => this.createTooltip(t))), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((t => {
                Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon()
            }), {
                threshold: [1]
            }) : null, this.observeIntersection(), t.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
            this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect();
                for (let t of this.manager.tooltipViews) this.intersectionObserver.observe(t.dom)
            }
        }
        measureSoon() {
            this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
                this.measureTimeout = -1, this.maybeMeasure()
            }), 50))
        }
        update(t) {
            t.transactions.length && (this.lastTransaction = Date.now());
            let e = this.manager.update(t);
            e && this.observeIntersection();
            let i = e || t.geometryChanged,
                n = t.state.facet(Jo);
            if (n.position != this.position) {
                this.position = n.position;
                for (let t of this.manager.tooltipViews) t.dom.style.position = this.position;
                i = !0
            }
            if (n.parent != this.parent) {
                this.parent && this.container.remove(), this.parent = n.parent, this.createContainer();
                for (let t of this.manager.tooltipViews) this.container.appendChild(t.dom);
                i = !0
            } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
            i && this.maybeMeasure()
        }
        createTooltip(t) {
            let e = t.create(this.view);
            if (e.dom.classList.add("cm-tooltip"), t.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
                let t = document.createElement("div");
                t.className = "cm-tooltip-arrow", e.dom.appendChild(t)
            }
            return e.dom.style.position = this.position, e.dom.style.top = Lo, this.container.appendChild(e.dom), e.mount && e.mount(this.view), e
        }
        destroy() {
            var t, e;
            this.view.win.removeEventListener("resize", this.measureSoon);
            for (let e of this.manager.tooltipViews) e.dom.remove(), null === (t = e.destroy) || void 0 === t || t.call(e);
            null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
            let t = this.view.dom.getBoundingClientRect();
            return {
                editor: t,
                parent: this.parent ? this.container.getBoundingClientRect() : t,
                pos: this.manager.tooltips.map(((t, e) => {
                    let i = this.manager.tooltipViews[e];
                    return i.getCoords ? i.getCoords(t.pos) : this.view.coordsAtPos(t.pos)
                })),
                size: this.manager.tooltipViews.map((({
                    dom: t
                }) => t.getBoundingClientRect())),
                space: this.view.state.facet(Jo).tooltipSpace(this.view)
            }
        }
        writeMeasure(t) {
            var e;
            let {
                editor: i,
                space: n
            } = t, r = [];
            for (let s = 0; s < this.manager.tooltips.length; s++) {
                let o = this.manager.tooltips[s],
                    l = this.manager.tooltipViews[s],
                    {
                        dom: a
                    } = l,
                    h = t.pos[s],
                    c = t.size[s];
                if (!h || h.bottom <= Math.max(i.top, n.top) || h.top >= Math.min(i.bottom, n.bottom) || h.right < Math.max(i.left, n.left) - .1 || h.left > Math.min(i.right, n.right) + .1) {
                    a.style.top = Lo;
                    continue
                }
                let O = o.arrow ? l.dom.querySelector(".cm-tooltip-arrow") : null,
                    u = O ? 7 : 0,
                    f = c.right - c.left,
                    d = null !== (e = Ko.get(l)) && void 0 !== e ? e : c.bottom - c.top,
                    p = l.offset || il,
                    g = this.view.textDirection == fr.LTR,
                    m = c.width > n.right - n.left ? g ? n.left : n.right - c.width : g ? Math.min(h.left - (O ? 14 : 0) + p.x, n.right - f) : Math.max(n.left, h.left - f + (O ? 14 : 0) - p.x),
                    Q = !!o.above;
                !o.strictSide && (Q ? h.top - (c.bottom - c.top) - p.y < n.top : h.bottom + (c.bottom - c.top) + p.y > n.bottom) && Q == n.bottom - h.bottom > h.top - n.top && (Q = !Q);
                let S = (Q ? h.top - n.top : n.bottom - h.bottom) - u;
                if (S < d && !1 !== l.resize) {
                    if (S < this.view.defaultLineHeight) {
                        a.style.top = Lo;
                        continue
                    }
                    Ko.set(l, d), a.style.height = (d = S) + "px"
                } else a.style.height && (a.style.height = "");
                let v = Q ? h.top - d - u - p.y : h.bottom + u + p.y,
                    y = m + f;
                if (!0 !== l.overlap)
                    for (let t of r) t.left < y && t.right > m && t.top < v + d && t.bottom > v && (v = Q ? t.top - d - 2 - u : t.bottom + u + 2);
                "absolute" == this.position ? (a.style.top = v - t.parent.top + "px", a.style.left = m - t.parent.left + "px") : (a.style.top = v + "px", a.style.left = m + "px"), O && (O.style.left = h.left + (g ? p.x : -p.x) - (m + 14 - 7) + "px"), !0 !== l.overlap && r.push({
                    left: m,
                    top: v,
                    right: y,
                    bottom: v + d
                }), a.classList.toggle("cm-tooltip-above", Q), a.classList.toggle("cm-tooltip-below", !Q), l.positioned && l.positioned(t.space)
            }
        }
        maybeMeasure() {
            if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
                for (let t of this.manager.tooltipViews) t.dom.style.top = Lo
        }
    }, {
        eventHandlers: {
            scroll() {
                this.maybeMeasure()
            }
        }
    }),
    el = oo.baseTheme({
        ".cm-tooltip": {
            zIndex: 100,
            boxSizing: "border-box"
        },
        "&light .cm-tooltip": {
            border: "1px solid #bbb",
            backgroundColor: "#f5f5f5"
        },
        "&light .cm-tooltip-section:not(:first-child)": {
            borderTop: "1px solid #bbb"
        },
        "&dark .cm-tooltip": {
            backgroundColor: "#333338",
            color: "white"
        },
        ".cm-tooltip-arrow": {
            height: "7px",
            width: "14px",
            position: "absolute",
            zIndex: -1,
            overflow: "hidden",
            "&:before, &:after": {
                content: "''",
                position: "absolute",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent"
            },
            ".cm-tooltip-above &": {
                bottom: "-7px",
                "&:before": {
                    borderTop: "7px solid #bbb"
                },
                "&:after": {
                    borderTop: "7px solid #f5f5f5",
                    bottom: "1px"
                }
            },
            ".cm-tooltip-below &": {
                top: "-7px",
                "&:before": {
                    borderBottom: "7px solid #bbb"
                },
                "&:after": {
                    borderBottom: "7px solid #f5f5f5",
                    top: "1px"
                }
            }
        },
        "&dark .cm-tooltip .cm-tooltip-arrow": {
            "&:before": {
                borderTopColor: "#333338",
                borderBottomColor: "#333338"
            },
            "&:after": {
                borderTopColor: "transparent",
                borderBottomColor: "transparent"
            }
        }
    }),
    il = {
        x: 0,
        y: 0
    },
    nl = fe.define({
        enables: [tl, el]
    });
class rl extends ti {
    compare(t) {
        return this == t || this.constructor == t.constructor && this.eq(t)
    }
    eq(t) {
        return !1
    }
    destroy(t) {}
}
rl.prototype.elementClass = "", rl.prototype.toDOM = void 0, rl.prototype.mapMode = te.TrackBefore, rl.prototype.startSide = rl.prototype.endSide = -1, rl.prototype.point = !0;
const sl = fe.define(),
    ol = fe.define(),
    ll = fe.define({
        combine: t => t.some((t => t))
    });

function al(t) {
    let e = [hl];
    return t && !1 === t.fixed && e.push(ll.of(!0)), e
}
const hl = nr.fromClass(class {
    constructor(t) {
        this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight + "px", this.gutters = t.state.facet(ol).map((e => new fl(t, e)));
        for (let t of this.gutters) this.dom.appendChild(t.dom);
        this.fixed = !t.state.facet(ll), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM)
    }
    update(t) {
        if (this.updateGutters(t)) {
            let e = this.prevViewport,
                i = t.view.viewport,
                n = Math.min(e.to, i.to) - Math.max(e.from, i.from);
            this.syncGutters(n < .8 * (i.to - i.from))
        }
        t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight + "px"), this.view.state.facet(ll) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport
    }
    syncGutters(t) {
        let e = this.dom.nextSibling;
        t && this.dom.remove();
        let i = ri.iter(this.view.state.facet(sl), this.view.viewport.from),
            n = [],
            r = this.gutters.map((t => new ul(t, this.view.viewport, -this.view.documentPadding.top)));
        for (let t of this.view.viewportLineBlocks) {
            let e;
            if (Array.isArray(t.type)) {
                for (let i of t.type)
                    if (i.type == Xn.Text) {
                        e = i;
                        break
                    }
            } else e = t.type == Xn.Text ? t : void 0;
            if (e) {
                n.length && (n = []), Ol(i, n, t.from);
                for (let t of r) t.line(this.view, e, n)
            }
        }
        for (let t of r) t.finish();
        t && this.view.scrollDOM.insertBefore(this.dom, e)
    }
    updateGutters(t) {
        let e = t.startState.facet(ol),
            i = t.state.facet(ol),
            n = t.docChanged || t.heightChanged || t.viewportChanged || !ri.eq(t.startState.facet(sl), t.state.facet(sl), t.view.viewport.from, t.view.viewport.to);
        if (e == i)
            for (let e of this.gutters) e.update(t) && (n = !0);
        else {
            n = !0;
            let r = [];
            for (let n of i) {
                let i = e.indexOf(n);
                i < 0 ? r.push(new fl(this.view, n)) : (this.gutters[i].update(t), r.push(this.gutters[i]))
            }
            for (let t of this.gutters) t.dom.remove(), r.indexOf(t) < 0 && t.destroy();
            for (let t of r) this.dom.appendChild(t.dom);
            this.gutters = r
        }
        return n
    }
    destroy() {
        for (let t of this.gutters) t.destroy();
        this.dom.remove()
    }
}, {
    provide: t => oo.scrollMargins.of((e => {
        let i = e.plugin(t);
        return i && 0 != i.gutters.length && i.fixed ? e.textDirection == fr.LTR ? {
            left: i.dom.offsetWidth
        } : {
            right: i.dom.offsetWidth
        } : null
    }))
});

function cl(t) {
    return Array.isArray(t) ? t : [t]
}

function Ol(t, e, i) {
    for (; t.value && t.from <= i;) t.from == i && e.push(t.value), t.next()
}
class ul {
    constructor(t, e, i) {
        this.gutter = t, this.height = i, this.i = 0, this.cursor = ri.iter(t.markers, e.from)
    }
    line(t, e, i) {
        let n = [];
        Ol(this.cursor, n, e.from), i.length && (n = n.concat(i));
        let r = this.gutter.config.lineMarker(t, e, n);
        r && n.unshift(r);
        let s = this.gutter;
        if (0 == n.length && !s.config.renderEmptyElements) return;
        let o = e.top - this.height;
        if (this.i == s.elements.length) {
            let i = new dl(t, e.height, o, n);
            s.elements.push(i), s.dom.appendChild(i.dom)
        } else s.elements[this.i].update(t, e.height, o, n);
        this.height = e.bottom, this.i++
    }
    finish() {
        let t = this.gutter;
        for (; t.elements.length > this.i;) {
            let e = t.elements.pop();
            t.dom.removeChild(e.dom), e.destroy()
        }
    }
}
class fl {
    constructor(t, e) {
        this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let i in e.domEventHandlers) this.dom.addEventListener(i, (n => {
            let r, s = n.target;
            if (s != this.dom && this.dom.contains(s)) {
                for (; s.parentNode != this.dom;) s = s.parentNode;
                let t = s.getBoundingClientRect();
                r = (t.top + t.bottom) / 2
            } else r = n.clientY;
            let o = t.lineBlockAtHeight(r - t.documentTop);
            e.domEventHandlers[i](t, o, n) && n.preventDefault()
        }));
        this.markers = cl(e.markers(t)), e.initialSpacer && (this.spacer = new dl(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
    }
    update(t) {
        let e = this.markers;
        if (this.markers = cl(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
            let e = this.config.updateSpacer(this.spacer.markers[0], t);
            e != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [e])
        }
        let i = t.view.viewport;
        return !ri.eq(this.markers, e, i.from, i.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(t)
    }
    destroy() {
        for (let t of this.elements) t.destroy()
    }
}
class dl {
    constructor(t, e, i, n) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, n)
    }
    update(t, e, i, n) {
        this.height != e && (this.dom.style.height = (this.height = e) + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""),
            function(t, e) {
                if (t.length != e.length) return !1;
                for (let i = 0; i < t.length; i++)
                    if (!t[i].compare(e[i])) return !1;
                return !0
            }(this.markers, n) || this.setMarkers(t, n)
    }
    setMarkers(t, e) {
        let i = "cm-gutterElement",
            n = this.dom.firstChild;
        for (let r = 0, s = 0;;) {
            let o = s,
                l = r < e.length ? e[r++] : null,
                a = !1;
            if (l) {
                let t = l.elementClass;
                t && (i += " " + t);
                for (let t = s; t < this.markers.length; t++)
                    if (this.markers[t].compare(l)) {
                        o = t, a = !0;
                        break
                    }
            } else o = this.markers.length;
            for (; s < o;) {
                let t = this.markers[s++];
                if (t.toDOM) {
                    t.destroy(n);
                    let e = n.nextSibling;
                    n.remove(), n = e
                }
            }
            if (!l) break;
            l.toDOM && (a ? n = n.nextSibling : this.dom.insertBefore(l.toDOM(t), n)), a && s++
        }
        this.dom.className = i, this.markers = e
    }
    destroy() {
        this.setMarkers(null, [])
    }
}
const pl = fe.define(),
    gl = fe.define({
        combine: t => Ke(t, {
            formatNumber: String,
            domEventHandlers: {}
        }, {
            domEventHandlers(t, e) {
                let i = Object.assign({}, t);
                for (let t in e) {
                    let n = i[t],
                        r = e[t];
                    i[t] = n ? (t, e, i) => n(t, e, i) || r(t, e, i) : r
                }
                return i
            }
        })
    });
class ml extends rl {
    constructor(t) {
        super(), this.number = t
    }
    eq(t) {
        return this.number == t.number
    }
    toDOM() {
        return document.createTextNode(this.number)
    }
}

function Ql(t, e) {
    return t.state.facet(gl).formatNumber(e, t.state)
}
const Sl = ol.compute([gl], (t => ({
    class: "cm-lineNumbers",
    renderEmptyElements: !1,
    markers: t => t.state.facet(pl),
    lineMarker: (t, e, i) => i.some((t => t.toDOM)) ? null : new ml(Ql(t, t.state.doc.lineAt(e.from).number)),
    lineMarkerChange: t => t.startState.facet(gl) != t.state.facet(gl),
    initialSpacer: t => new ml(Ql(t, yl(t.state.doc.lines))),
    updateSpacer(t, e) {
        let i = Ql(e.view, yl(e.view.state.doc.lines));
        return i == t.number ? t : new ml(i)
    },
    domEventHandlers: t.facet(gl).domEventHandlers
})));

function vl(t = {}) {
    return [gl.of(t), al(), Sl]
}

function yl(t) {
    let e = 9;
    for (; e < t;) e = 10 * e + 9;
    return e
}
const bl = new class extends rl {
        constructor() {
            super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
    },
    wl = sl.compute(["selection"], (t => {
        let e = [],
            i = -1;
        for (let n of t.selection.ranges) {
            let r = t.doc.lineAt(n.head).from;
            r > i && (i = r, e.push(bl.range(r)))
        }
        return ri.of(e)
    }));
const xl = 1024;
let $l = 0,
    kl = class {
        constructor(t, e) {
            this.from = t, this.to = e
        }
    };
class Pl {
    constructor(t = {}) {
        this.id = $l++, this.perNode = !!t.perNode, this.deserialize = t.deserialize || (() => {
            throw new Error("This node type doesn't define a deserialize function")
        })
    }
    add(t) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof t && (t = Zl.match(t)), e => {
            let i = t(e);
            return void 0 === i ? null : [this, i]
        }
    }
}
Pl.closedBy = new Pl({
    deserialize: t => t.split(" ")
}), Pl.openedBy = new Pl({
    deserialize: t => t.split(" ")
}), Pl.group = new Pl({
    deserialize: t => t.split(" ")
}), Pl.contextHash = new Pl({
    perNode: !0
}), Pl.lookAhead = new Pl({
    perNode: !0
}), Pl.mounted = new Pl({
    perNode: !0
});
const _l = Object.create(null);
class Zl {
    constructor(t, e, i, n = 0) {
        this.name = t, this.props = e, this.id = i, this.flags = n
    }
    static define(t) {
        let e = t.props && t.props.length ? Object.create(null) : _l,
            i = (t.top ? 1 : 0) | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (null == t.name ? 8 : 0),
            n = new Zl(t.name || "", e, t.id, i);
        if (t.props)
            for (let i of t.props)
                if (Array.isArray(i) || (i = i(n)), i) {
                    if (i[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
                    e[i[0].id] = i[1]
                } return n
    }
    prop(t) {
        return this.props[t.id]
    }
    get isTop() {
        return (1 & this.flags) > 0
    }
    get isSkipped() {
        return (2 & this.flags) > 0
    }
    get isError() {
        return (4 & this.flags) > 0
    }
    get isAnonymous() {
        return (8 & this.flags) > 0
    }
    is(t) {
        if ("string" == typeof t) {
            if (this.name == t) return !0;
            let e = this.prop(Pl.group);
            return !!e && e.indexOf(t) > -1
        }
        return this.id == t
    }
    static match(t) {
        let e = Object.create(null);
        for (let i in t)
            for (let n of i.split(" ")) e[n] = t[i];
        return t => {
            for (let i = t.prop(Pl.group), n = -1; n < (i ? i.length : 0); n++) {
                let r = e[n < 0 ? t.name : i[n]];
                if (r) return r
            }
        }
    }
}
Zl.none = new Zl("", Object.create(null), 0, 8);
class Xl {
    constructor(t) {
        this.types = t;
        for (let e = 0; e < t.length; e++)
            if (t[e].id != e) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
    }
    extend(...t) {
        let e = [];
        for (let i of this.types) {
            let n = null;
            for (let e of t) {
                let t = e(i);
                t && (n || (n = Object.assign({}, i.props)), n[t[0].id] = t[1])
            }
            e.push(n ? new Zl(i.name, n, i.id, i.flags) : i)
        }
        return new Xl(e)
    }
}
const Cl = new WeakMap,
    Tl = new WeakMap;
var Wl;
! function(t) {
    t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays"
}(Wl || (Wl = {}));
class Al {
    constructor(t, e, i, n, r) {
        if (this.type = t, this.children = e, this.positions = i, this.length = n, this.props = null, r && r.length) {
            this.props = Object.create(null);
            for (let [t, e] of r) this.props["number" == typeof t ? t : t.id] = e
        }
    }
    toString() {
        let t = this.prop(Pl.mounted);
        if (t && !t.overlay) return t.tree.toString();
        let e = "";
        for (let t of this.children) {
            let i = t.toString();
            i && (e && (e += ","), e += i)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (e.length ? "(" + e + ")" : "") : e
    }
    cursor(t = 0) {
        return new zl(this.topNode, t)
    }
    cursorAt(t, e = 0, i = 0) {
        let n = Cl.get(this) || this.topNode,
            r = new zl(n);
        return r.moveTo(t, e), Cl.set(this, r._tree), r
    }
    get topNode() {
        return new jl(this, 0, 0, null)
    }
    resolve(t, e = 0) {
        let i = Ml(Cl.get(this) || this.topNode, t, e, !1);
        return Cl.set(this, i), i
    }
    resolveInner(t, e = 0) {
        let i = Ml(Tl.get(this) || this.topNode, t, e, !0);
        return Tl.set(this, i), i
    }
    iterate(t) {
        let {
            enter: e,
            leave: i,
            from: n = 0,
            to: r = this.length
        } = t;
        for (let s = this.cursor((t.mode || 0) | Wl.IncludeAnonymous);;) {
            let t = !1;
            if (s.from <= r && s.to >= n && (s.type.isAnonymous || !1 !== e(s))) {
                if (s.firstChild()) continue;
                t = !0
            }
            for (; t && i && !s.type.isAnonymous && i(s), !s.nextSibling();) {
                if (!s.parent()) return;
                t = !0
            }
        }
    }
    prop(t) {
        return t.perNode ? this.props ? this.props[t.id] : void 0 : this.type.prop(t)
    }
    get propValues() {
        let t = [];
        if (this.props)
            for (let e in this.props) t.push([+e, this.props[e]]);
        return t
    }
    balance(t = {}) {
        return this.children.length <= 8 ? this : Ll(Zl.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((t, e, i) => new Al(this.type, t, e, i, this.propValues)), t.makeTree || ((t, e, i) => new Al(Zl.none, t, e, i)))
    }
    static build(t) {
        return function(t) {
            var e;
            let {
                buffer: i,
                nodeSet: n,
                maxBufferLength: r = xl,
                reused: s = [],
                minRepeatType: o = n.types.length
            } = t, l = Array.isArray(i) ? new Yl(i, i.length) : i, a = n.types, h = 0, c = 0;

            function O(t, e, i, m, Q) {
                let {
                    id: S,
                    start: v,
                    end: y,
                    size: b
                } = l, w = c;
                for (; b < 0;) {
                    if (l.next(), -1 == b) {
                        let e = s[S];
                        return i.push(e), void m.push(v - t)
                    }
                    if (-3 == b) return void(h = S);
                    if (-4 == b) return void(c = S);
                    throw new RangeError(`Unrecognized record size: ${b}`)
                }
                let x, $, k = a[S],
                    P = v - t;
                if (y - v <= r && ($ = p(l.pos - e, Q))) {
                    let e = new Uint16Array($.size - $.skip),
                        i = l.pos - $.size,
                        r = e.length;
                    for (; l.pos > i;) r = g($.start, e, r);
                    x = new Rl(e, y - $.start, n), P = $.start - t
                } else {
                    let t = l.pos - b;
                    l.next();
                    let e = [],
                        i = [],
                        n = S >= o ? S : -1,
                        s = 0,
                        a = y;
                    for (; l.pos > t;) n >= 0 && l.id == n && l.size >= 0 ? (l.end <= a - r && (f(e, i, v, s, l.end, a, n, w), s = e.length, a = l.end), l.next()) : O(v, t, e, i, n);
                    if (n >= 0 && s > 0 && s < e.length && f(e, i, v, s, v, a, n, w), e.reverse(), i.reverse(), n > -1 && s > 0) {
                        let t = u(k);
                        x = Ll(k, e, i, 0, e.length, 0, y - v, t, t)
                    } else x = d(k, e, i, y - v, w - y)
                }
                i.push(x), m.push(P)
            }

            function u(t) {
                return (e, i, n) => {
                    let r, s, o = 0,
                        l = e.length - 1;
                    if (l >= 0 && (r = e[l]) instanceof Al) {
                        if (!l && r.type == t && r.length == n) return r;
                        (s = r.prop(Pl.lookAhead)) && (o = i[l] + r.length + s)
                    }
                    return d(t, e, i, n, o)
                }
            }

            function f(t, e, i, r, s, o, l, a) {
                let h = [],
                    c = [];
                for (; t.length > r;) h.push(t.pop()), c.push(e.pop() + i - s);
                t.push(d(n.types[l], h, c, o - s, a - o)), e.push(s - i)
            }

            function d(t, e, i, n, r = 0, s) {
                if (h) {
                    let t = [Pl.contextHash, h];
                    s = s ? [t].concat(s) : [t]
                }
                if (r > 25) {
                    let t = [Pl.lookAhead, r];
                    s = s ? [t].concat(s) : [t]
                }
                return new Al(t, e, i, n, s)
            }

            function p(t, e) {
                let i = l.fork(),
                    n = 0,
                    s = 0,
                    a = 0,
                    h = i.end - r,
                    c = {
                        size: 0,
                        start: 0,
                        skip: 0
                    };
                t: for (let r = i.pos - t; i.pos > r;) {
                    let t = i.size;
                    if (i.id == e && t >= 0) {
                        c.size = n, c.start = s, c.skip = a, a += 4, n += 4, i.next();
                        continue
                    }
                    let l = i.pos - t;
                    if (t < 0 || l < r || i.start < h) break;
                    let O = i.id >= o ? 4 : 0,
                        u = i.start;
                    for (i.next(); i.pos > l;) {
                        if (i.size < 0) {
                            if (-3 != i.size) break t;
                            O += 4
                        } else i.id >= o && (O += 4);
                        i.next()
                    }
                    s = u, n += t, a += O
                }
                return (e < 0 || n == t) && (c.size = n, c.start = s, c.skip = a), c.size > 4 ? c : void 0
            }

            function g(t, e, i) {
                let {
                    id: n,
                    start: r,
                    end: s,
                    size: a
                } = l;
                if (l.next(), a >= 0 && n < o) {
                    let o = i;
                    if (a > 4) {
                        let n = l.pos - (a - 4);
                        for (; l.pos > n;) i = g(t, e, i)
                    }
                    e[--i] = o, e[--i] = s - t, e[--i] = r - t, e[--i] = n
                } else - 3 == a ? h = n : -4 == a && (c = n);
                return i
            }
            let m = [],
                Q = [];
            for (; l.pos > 0;) O(t.start || 0, t.bufferStart || 0, m, Q, -1);
            let S = null !== (e = t.length) && void 0 !== e ? e : m.length ? Q[0] + m[0].length : 0;
            return new Al(a[t.topID], m.reverse(), Q.reverse(), S)
        }(t)
    }
}
Al.empty = new Al(Zl.none, [], [], 0);
class Yl {
    constructor(t, e) {
        this.buffer = t, this.index = e
    }
    get id() {
        return this.buffer[this.index - 4]
    }
    get start() {
        return this.buffer[this.index - 3]
    }
    get end() {
        return this.buffer[this.index - 2]
    }
    get size() {
        return this.buffer[this.index - 1]
    }
    get pos() {
        return this.index
    }
    next() {
        this.index -= 4
    }
    fork() {
        return new Yl(this.buffer, this.index)
    }
}
class Rl {
    constructor(t, e, i) {
        this.buffer = t, this.length = e, this.set = i
    }
    get type() {
        return Zl.none
    }
    toString() {
        let t = [];
        for (let e = 0; e < this.buffer.length;) t.push(this.childString(e)), e = this.buffer[e + 3];
        return t.join(",")
    }
    childString(t) {
        let e = this.buffer[t],
            i = this.buffer[t + 3],
            n = this.set.types[e],
            r = n.name;
        if (/\W/.test(r) && !n.isError && (r = JSON.stringify(r)), i == (t += 4)) return r;
        let s = [];
        for (; t < i;) s.push(this.childString(t)), t = this.buffer[t + 3];
        return r + "(" + s.join(",") + ")"
    }
    findChild(t, e, i, n, r) {
        let {
            buffer: s
        } = this, o = -1;
        for (let l = t; l != e && !(Ul(r, n, s[l + 1], s[l + 2]) && (o = l, i > 0)); l = s[l + 3]);
        return o
    }
    slice(t, e, i) {
        let n = this.buffer,
            r = new Uint16Array(e - t),
            s = 0;
        for (let o = t, l = 0; o < e;) {
            r[l++] = n[o++], r[l++] = n[o++] - i;
            let e = r[l++] = n[o++] - i;
            r[l++] = n[o++] - t, s = Math.max(s, e)
        }
        return new Rl(r, s, this.set)
    }
}

function Ul(t, e, i, n) {
    switch (t) {
        case -2:
            return i < e;
        case -1:
            return n >= e && i < e;
        case 0:
            return i < e && n > e;
        case 1:
            return i <= e && n > e;
        case 2:
            return n > e;
        case 4:
            return !0
    }
}

function Vl(t, e) {
    let i = t.childBefore(e);
    for (; i;) {
        let e = i.lastChild;
        if (!e || e.to != i.to) break;
        e.type.isError && e.from == e.to ? (t = i, i = e.prevSibling) : i = e
    }
    return t
}

function Ml(t, e, i, n) {
    for (var r; t.from == t.to || (i < 1 ? t.from >= e : t.from > e) || (i > -1 ? t.to <= e : t.to < e);) {
        let e = !n && t instanceof jl && t.index < 0 ? null : t.parent;
        if (!e) return t;
        t = e
    }
    let s = n ? 0 : Wl.IgnoreOverlays;
    if (n)
        for (let n = t, o = n.parent; o; n = o, o = n.parent) n instanceof jl && n.index < 0 && (null === (r = o.enter(e, i, s)) || void 0 === r ? void 0 : r.from) != n.from && (t = o);
    for (;;) {
        let n = t.enter(e, i, s);
        if (!n) return t;
        t = n
    }
}
class jl {
    constructor(t, e, i, n) {
        this._tree = t, this.from = e, this.index = i, this._parent = n
    }
    get type() {
        return this._tree.type
    }
    get name() {
        return this._tree.type.name
    }
    get to() {
        return this.from + this._tree.length
    }
    nextChild(t, e, i, n, r = 0) {
        for (let s = this;;) {
            for (let {
                    children: o,
                    positions: l
                } = s._tree, a = e > 0 ? o.length : -1; t != a; t += e) {
                let a = o[t],
                    h = l[t] + s.from;
                if (Ul(n, i, h, h + a.length))
                    if (a instanceof Rl) {
                        if (r & Wl.ExcludeBuffers) continue;
                        let o = a.findChild(0, a.buffer.length, e, i - h, n);
                        if (o > -1) return new Il(new ql(s, a, t, h), null, o)
                    } else if (r & Wl.IncludeAnonymous || !a.type.isAnonymous || Gl(a)) {
                    let o;
                    if (!(r & Wl.IgnoreMounts) && a.props && (o = a.prop(Pl.mounted)) && !o.overlay) return new jl(o.tree, h, t, s);
                    let l = new jl(a, h, t, s);
                    return r & Wl.IncludeAnonymous || !l.type.isAnonymous ? l : l.nextChild(e < 0 ? a.children.length - 1 : 0, e, i, n)
                }
            }
            if (r & Wl.IncludeAnonymous || !s.type.isAnonymous) return null;
            if (t = s.index >= 0 ? s.index + e : e < 0 ? -1 : s._parent._tree.children.length, s = s._parent, !s) return null
        }
    }
    get firstChild() {
        return this.nextChild(0, 1, 0, 4)
    }
    get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
    }
    childAfter(t) {
        return this.nextChild(0, 1, t, 2)
    }
    childBefore(t) {
        return this.nextChild(this._tree.children.length - 1, -1, t, -2)
    }
    enter(t, e, i = 0) {
        let n;
        if (!(i & Wl.IgnoreOverlays) && (n = this._tree.prop(Pl.mounted)) && n.overlay) {
            let i = t - this.from;
            for (let {
                    from: t,
                    to: r
                }
                of n.overlay)
                if ((e > 0 ? t <= i : t < i) && (e < 0 ? r >= i : r > i)) return new jl(n.tree, n.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, t, e, i)
    }
    nextSignificantParent() {
        let t = this;
        for (; t.type.isAnonymous && t._parent;) t = t._parent;
        return t
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
    }
    cursor(t = 0) {
        return new zl(this, t)
    }
    get tree() {
        return this._tree
    }
    toTree() {
        return this._tree
    }
    resolve(t, e = 0) {
        return Ml(this, t, e, !1)
    }
    resolveInner(t, e = 0) {
        return Ml(this, t, e, !0)
    }
    enterUnfinishedNodesBefore(t) {
        return Vl(this, t)
    }
    getChild(t, e = null, i = null) {
        let n = Dl(this, t, e, i);
        return n.length ? n[0] : null
    }
    getChildren(t, e = null, i = null) {
        return Dl(this, t, e, i)
    }
    toString() {
        return this._tree.toString()
    }
    get node() {
        return this
    }
    matchContext(t) {
        return El(this, t)
    }
}

function Dl(t, e, i, n) {
    let r = t.cursor(),
        s = [];
    if (!r.firstChild()) return s;
    if (null != i)
        for (; !r.type.is(i);)
            if (!r.nextSibling()) return s;
    for (;;) {
        if (null != n && r.type.is(n)) return s;
        if (r.type.is(e) && s.push(r.node), !r.nextSibling()) return null == n ? s : []
    }
}

function El(t, e, i = e.length - 1) {
    for (let n = t.parent; i >= 0; n = n.parent) {
        if (!n) return !1;
        if (!n.type.isAnonymous) {
            if (e[i] && e[i] != n.name) return !1;
            i--
        }
    }
    return !0
}
class ql {
    constructor(t, e, i, n) {
        this.parent = t, this.buffer = e, this.index = i, this.start = n
    }
}
class Il {
    get name() {
        return this.type.name
    }
    get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
    }
    get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
    }
    constructor(t, e, i) {
        this.context = t, this._parent = e, this.index = i, this.type = t.buffer.set.types[t.buffer.buffer[i]]
    }
    child(t, e, i) {
        let {
            buffer: n
        } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.context.start, i);
        return r < 0 ? null : new Il(this.context, this, r)
    }
    get firstChild() {
        return this.child(1, 0, 4)
    }
    get lastChild() {
        return this.child(-1, 0, 4)
    }
    childAfter(t) {
        return this.child(1, t, 2)
    }
    childBefore(t) {
        return this.child(-1, t, -2)
    }
    enter(t, e, i = 0) {
        if (i & Wl.ExcludeBuffers) return null;
        let {
            buffer: n
        } = this.context, r = n.findChild(this.index + 4, n.buffer[this.index + 3], e > 0 ? 1 : -1, t - this.context.start, e);
        return r < 0 ? null : new Il(this.context, this, r)
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
    }
    externalSibling(t) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + t, t, 0, 4)
    }
    get nextSibling() {
        let {
            buffer: t
        } = this.context, e = t.buffer[this.index + 3];
        return e < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new Il(this.context, this._parent, e) : this.externalSibling(1)
    }
    get prevSibling() {
        let {
            buffer: t
        } = this.context, e = this._parent ? this._parent.index + 4 : 0;
        return this.index == e ? this.externalSibling(-1) : new Il(this.context, this._parent, t.findChild(e, this.index, -1, 0, 4))
    }
    cursor(t = 0) {
        return new zl(this, t)
    }
    get tree() {
        return null
    }
    toTree() {
        let t = [],
            e = [],
            {
                buffer: i
            } = this.context,
            n = this.index + 4,
            r = i.buffer[this.index + 3];
        if (r > n) {
            let s = i.buffer[this.index + 1];
            t.push(i.slice(n, r, s)), e.push(0)
        }
        return new Al(this.type, t, e, this.to - this.from)
    }
    resolve(t, e = 0) {
        return Ml(this, t, e, !1)
    }
    resolveInner(t, e = 0) {
        return Ml(this, t, e, !0)
    }
    enterUnfinishedNodesBefore(t) {
        return Vl(this, t)
    }
    toString() {
        return this.context.buffer.childString(this.index)
    }
    getChild(t, e = null, i = null) {
        let n = Dl(this, t, e, i);
        return n.length ? n[0] : null
    }
    getChildren(t, e = null, i = null) {
        return Dl(this, t, e, i)
    }
    get node() {
        return this
    }
    matchContext(t) {
        return El(this, t)
    }
}
class zl {
    get name() {
        return this.type.name
    }
    constructor(t, e = 0) {
        if (this.mode = e, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, t instanceof jl) this.yieldNode(t);
        else {
            this._tree = t.context.parent, this.buffer = t.context;
            for (let e = t._parent; e; e = e._parent) this.stack.unshift(e.index);
            this.bufferNode = t, this.yieldBuf(t.index)
        }
    }
    yieldNode(t) {
        return !!t && (this._tree = t, this.type = t.type, this.from = t.from, this.to = t.to, !0)
    }
    yieldBuf(t, e) {
        this.index = t;
        let {
            start: i,
            buffer: n
        } = this.buffer;
        return this.type = e || n.set.types[n.buffer[t]], this.from = i + n.buffer[t + 1], this.to = i + n.buffer[t + 2], !0
    }
    yield(t) {
        return !!t && (t instanceof jl ? (this.buffer = null, this.yieldNode(t)) : (this.buffer = t.context, this.yieldBuf(t.index, t.type)))
    }
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
    }
    enterChild(t, e, i) {
        if (!this.buffer) return this.yield(this._tree.nextChild(t < 0 ? this._tree._tree.children.length - 1 : 0, t, e, i, this.mode));
        let {
            buffer: n
        } = this.buffer, r = n.findChild(this.index + 4, n.buffer[this.index + 3], t, e - this.buffer.start, i);
        return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r))
    }
    firstChild() {
        return this.enterChild(1, 0, 4)
    }
    lastChild() {
        return this.enterChild(-1, 0, 4)
    }
    childAfter(t) {
        return this.enterChild(1, t, 2)
    }
    childBefore(t) {
        return this.enterChild(-1, t, -2)
    }
    enter(t, e, i = this.mode) {
        return this.buffer ? !(i & Wl.ExcludeBuffers) && this.enterChild(1, t, e) : this.yield(this._tree.enter(t, e, i))
    }
    parent() {
        if (!this.buffer) return this.yieldNode(this.mode & Wl.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let t = this.mode & Wl.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(t)
    }
    sibling(t) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + t, t, 0, 4, this.mode));
        let {
            buffer: e
        } = this.buffer, i = this.stack.length - 1;
        if (t < 0) {
            let t = i < 0 ? 0 : this.stack[i] + 4;
            if (this.index != t) return this.yieldBuf(e.findChild(t, this.index, -1, 0, 4))
        } else {
            let t = e.buffer[this.index + 3];
            if (t < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3])) return this.yieldBuf(t)
        }
        return i < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + t, t, 0, 4, this.mode))
    }
    nextSibling() {
        return this.sibling(1)
    }
    prevSibling() {
        return this.sibling(-1)
    }
    atLastNode(t) {
        let e, i, {
            buffer: n
        } = this;
        if (n) {
            if (t > 0) {
                if (this.index < n.buffer.buffer.length) return !1
            } else
                for (let t = 0; t < this.index; t++)
                    if (n.buffer.buffer[t + 3] < this.index) return !1;
            ({
                index: e,
                parent: i
            } = n)
        } else({
            index: e,
            _parent: i
        } = this._tree);
        for (; i;
            ({
                index: e,
                _parent: i
            } = i))
            if (e > -1)
                for (let n = e + t, r = t < 0 ? -1 : i._tree.children.length; n != r; n += t) {
                    let t = i._tree.children[n];
                    if (this.mode & Wl.IncludeAnonymous || t instanceof Rl || !t.type.isAnonymous || Gl(t)) return !1
                }
        return !0
    }
    move(t, e) {
        if (e && this.enterChild(t, 0, 4)) return !0;
        for (;;) {
            if (this.sibling(t)) return !0;
            if (this.atLastNode(t) || !this.parent()) return !1
        }
    }
    next(t = !0) {
        return this.move(1, t)
    }
    prev(t = !0) {
        return this.move(-1, t)
    }
    moveTo(t, e = 0) {
        for (;
            (this.from == this.to || (e < 1 ? this.from >= t : this.from > t) || (e > -1 ? this.to <= t : this.to < t)) && this.parent(););
        for (; this.enterChild(1, t, e););
        return this
    }
    get node() {
        if (!this.buffer) return this._tree;
        let t = this.bufferNode,
            e = null,
            i = 0;
        if (t && t.context == this.buffer) t: for (let n = this.index, r = this.stack.length; r >= 0;) {
            for (let s = t; s; s = s._parent)
                if (s.index == n) {
                    if (n == this.index) return s;
                    e = s, i = r + 1;
                    break t
                } n = this.stack[--r]
        }
        for (let t = i; t < this.stack.length; t++) e = new Il(this.buffer, e, this.stack[t]);
        return this.bufferNode = new Il(this.buffer, e, this.index)
    }
    get tree() {
        return this.buffer ? null : this._tree._tree
    }
    iterate(t, e) {
        for (let i = 0;;) {
            let n = !1;
            if (this.type.isAnonymous || !1 !== t(this)) {
                if (this.firstChild()) {
                    i++;
                    continue
                }
                this.type.isAnonymous || (n = !0)
            }
            for (; n && e && e(this), n = this.type.isAnonymous, !this.nextSibling();) {
                if (!i) return;
                this.parent(), i--, n = !0
            }
        }
    }
    matchContext(t) {
        if (!this.buffer) return El(this.node, t);
        let {
            buffer: e
        } = this.buffer, {
            types: i
        } = e.set;
        for (let n = t.length - 1, r = this.stack.length - 1; n >= 0; r--) {
            if (r < 0) return El(this.node, t, n);
            let s = i[e.buffer[this.stack[r]]];
            if (!s.isAnonymous) {
                if (t[n] && t[n] != s.name) return !1;
                n--
            }
        }
        return !0
    }
}

function Gl(t) {
    return t.children.some((t => t instanceof Rl || !t.type.isAnonymous || Gl(t)))
}
const Nl = new WeakMap;

function Bl(t, e) {
    if (!t.isAnonymous || e instanceof Rl || e.type != t) return 1;
    let i = Nl.get(e);
    if (null == i) {
        i = 1;
        for (let n of e.children) {
            if (n.type != t || !(n instanceof Al)) {
                i = 1;
                break
            }
            i += Bl(t, n)
        }
        Nl.set(e, i)
    }
    return i
}

function Ll(t, e, i, n, r, s, o, l, a) {
    let h = 0;
    for (let i = n; i < r; i++) h += Bl(t, e[i]);
    let c = Math.ceil(1.5 * h / 8),
        O = [],
        u = [];
    return function e(i, n, r, o, l) {
        for (let h = r; h < o;) {
            let r = h,
                f = n[h],
                d = Bl(t, i[h]);
            for (h++; h < o; h++) {
                let e = Bl(t, i[h]);
                if (d + e >= c) break;
                d += e
            }
            if (h == r + 1) {
                if (d > c) {
                    let t = i[r];
                    e(t.children, t.positions, 0, t.children.length, n[r] + l);
                    continue
                }
                O.push(i[r])
            } else {
                let e = n[h - 1] + i[h - 1].length - f;
                O.push(Ll(t, i, n, r, h, f, e, null, a))
            }
            u.push(f + l - s)
        }
    }(e, i, n, r, 0), (l || a)(O, u, o)
}
class Hl {
    constructor() {
        this.map = new WeakMap
    }
    setBuffer(t, e, i) {
        let n = this.map.get(t);
        n || this.map.set(t, n = new Map), n.set(e, i)
    }
    getBuffer(t, e) {
        let i = this.map.get(t);
        return i && i.get(e)
    }
    set(t, e) {
        t instanceof Il ? this.setBuffer(t.context.buffer, t.index, e) : t instanceof jl && this.map.set(t.tree, e)
    }
    get(t) {
        return t instanceof Il ? this.getBuffer(t.context.buffer, t.index) : t instanceof jl ? this.map.get(t.tree) : void 0
    }
    cursorSet(t, e) {
        t.buffer ? this.setBuffer(t.buffer.buffer, t.index, e) : this.map.set(t.tree, e)
    }
    cursorGet(t) {
        return t.buffer ? this.getBuffer(t.buffer.buffer, t.index) : this.map.get(t.tree)
    }
}
class Fl {
    constructor(t, e, i, n, r = !1, s = !1) {
        this.from = t, this.to = e, this.tree = i, this.offset = n, this.open = (r ? 1 : 0) | (s ? 2 : 0)
    }
    get openStart() {
        return (1 & this.open) > 0
    }
    get openEnd() {
        return (2 & this.open) > 0
    }
    static addTree(t, e = [], i = !1) {
        let n = [new Fl(0, t.length, t, 0, !1, i)];
        for (let i of e) i.to > t.length && n.push(i);
        return n
    }
    static applyChanges(t, e, i = 128) {
        if (!e.length) return t;
        let n = [],
            r = 1,
            s = t.length ? t[0] : null;
        for (let o = 0, l = 0, a = 0;; o++) {
            let h = o < e.length ? e[o] : null,
                c = h ? h.fromA : 1e9;
            if (c - l >= i)
                for (; s && s.from < c;) {
                    let e = s;
                    if (l >= e.from || c <= e.to || a) {
                        let t = Math.max(e.from, l) - a,
                            i = Math.min(e.to, c) - a;
                        e = t >= i ? null : new Fl(t, i, e.tree, e.offset + a, o > 0, !!h)
                    }
                    if (e && n.push(e), s.to > c) break;
                    s = r < t.length ? t[r++] : null
                }
            if (!h) break;
            l = h.toA, a = h.toA - h.toB
        }
        return n
    }
}
class Jl {
    startParse(t, e, i) {
        return "string" == typeof t && (t = new Kl(t)), i = i ? i.length ? i.map((t => new kl(t.from, t.to))) : [new kl(0, 0)] : [new kl(0, t.length)], this.createParse(t, e || [], i)
    }
    parse(t, e, i) {
        let n = this.startParse(t, e, i);
        for (;;) {
            let t = n.advance();
            if (t) return t
        }
    }
}
class Kl {
    constructor(t) {
        this.string = t
    }
    get length() {
        return this.string.length
    }
    chunk(t) {
        return this.string.slice(t)
    }
    get lineChunks() {
        return !1
    }
    read(t, e) {
        return this.string.slice(t, e)
    }
}
new Pl({
    perNode: !0
});
let ta = 0;
class ea {
    constructor(t, e, i) {
        this.set = t, this.base = e, this.modified = i, this.id = ta++
    }
    static define(t) {
        if (null == t ? void 0 : t.base) throw new Error("Can not derive from a modified tag");
        let e = new ea([], null, []);
        if (e.set.push(e), t)
            for (let i of t.set) e.set.push(i);
        return e
    }
    static defineModifier() {
        let t = new na;
        return e => e.modified.indexOf(t) > -1 ? e : na.get(e.base || e, e.modified.concat(t).sort(((t, e) => t.id - e.id)))
    }
}
let ia = 0;
class na {
    constructor() {
        this.instances = [], this.id = ia++
    }
    static get(t, e) {
        if (!e.length) return t;
        let i = e[0].instances.find((i => i.base == t && function(t, e) {
            return t.length == e.length && t.every(((t, i) => t == e[i]))
        }(e, i.modified)));
        if (i) return i;
        let n = [],
            r = new ea(n, t, e);
        for (let t of e) t.instances.push(r);
        let s = function(t) {
            let e = [
                []
            ];
            for (let i = 0; i < t.length; i++)
                for (let n = 0, r = e.length; n < r; n++) e.push(e[n].concat(t[i]));
            return e.sort(((t, e) => e.length - t.length))
        }(e);
        for (let e of t.set)
            if (!e.modified.length)
                for (let t of s) n.push(na.get(e, t));
        return r
    }
}

function ra(t) {
    let e = Object.create(null);
    for (let i in t) {
        let n = t[i];
        Array.isArray(n) || (n = [n]);
        for (let t of i.split(" "))
            if (t) {
                let i = [],
                    r = 2,
                    s = t;
                for (let e = 0;;) {
                    if ("..." == s && e > 0 && e + 3 == t.length) {
                        r = 1;
                        break
                    }
                    let n = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
                    if (!n) throw new RangeError("Invalid path: " + t);
                    if (i.push("*" == n[0] ? "" : '"' == n[0][0] ? JSON.parse(n[0]) : n[0]), e += n[0].length, e == t.length) break;
                    let o = t[e++];
                    if (e == t.length && "!" == o) {
                        r = 0;
                        break
                    }
                    if ("/" != o) throw new RangeError("Invalid path: " + t);
                    s = t.slice(e)
                }
                let o = i.length - 1,
                    l = i[o];
                if (!l) throw new RangeError("Invalid path: " + t);
                let a = new oa(n, r, o > 0 ? i.slice(0, o) : null);
                e[l] = a.sort(e[l])
            }
    }
    return sa.add(e)
}
const sa = new Pl;
class oa {
    constructor(t, e, i, n) {
        this.tags = t, this.mode = e, this.context = i, this.next = n
    }
    get opaque() {
        return 0 == this.mode
    }
    get inherit() {
        return 1 == this.mode
    }
    sort(t) {
        return !t || t.depth < this.depth ? (this.next = t, this) : (t.next = this.sort(t.next), t)
    }
    get depth() {
        return this.context ? this.context.length : 0
    }
}

function la(t, e) {
    let i = Object.create(null);
    for (let e of t)
        if (Array.isArray(e.tag))
            for (let t of e.tag) i[t.id] = e.class;
        else i[e.tag.id] = e.class;
    let {
        scope: n,
        all: r = null
    } = e || {};
    return {
        style: t => {
            let e = r;
            for (let n of t)
                for (let t of n.set) {
                    let n = i[t.id];
                    if (n) {
                        e = e ? e + " " + n : n;
                        break
                    }
                }
            return e
        },
        scope: n
    }
}

function aa(t, e, i, n = 0, r = t.length) {
    let s = new ha(n, Array.isArray(e) ? e : [e], i);
    s.highlightRange(t.cursor(), n, r, "", s.highlighters), s.flush(r)
}
oa.empty = new oa([], 2, null);
class ha {
    constructor(t, e, i) {
        this.at = t, this.highlighters = e, this.span = i, this.class = ""
    }
    startSpan(t, e) {
        e != this.class && (this.flush(t), t > this.at && (this.at = t), this.class = e)
    }
    flush(t) {
        t > this.at && this.class && this.span(this.at, t, this.class)
    }
    highlightRange(t, e, i, n, r) {
        let {
            type: s,
            from: o,
            to: l
        } = t;
        if (o >= i || l <= e) return;
        s.isTop && (r = this.highlighters.filter((t => !t.scope || t.scope(s))));
        let a = n,
            h = function(t) {
                let e = t.type.prop(sa);
                for (; e && e.context && !t.matchContext(e.context);) e = e.next;
                return e || null
            }(t) || oa.empty,
            c = function(t, e) {
                let i = null;
                for (let n of t) {
                    let t = n.style(e);
                    t && (i = i ? i + " " + t : t)
                }
                return i
            }(r, h.tags);
        if (c && (a && (a += " "), a += c, 1 == h.mode && (n += (n ? " " : "") + c)), this.startSpan(t.from, a), h.opaque) return;
        let O = t.tree && t.tree.prop(Pl.mounted);
        if (O && O.overlay) {
            let s = t.node.enter(O.overlay[0].from + o, 1),
                h = this.highlighters.filter((t => !t.scope || t.scope(O.tree.type))),
                c = t.firstChild();
            for (let u = 0, f = o;; u++) {
                let d = u < O.overlay.length ? O.overlay[u] : null,
                    p = d ? d.from + o : l,
                    g = Math.max(e, f),
                    m = Math.min(i, p);
                if (g < m && c)
                    for (; t.from < m && (this.highlightRange(t, g, m, n, r), this.startSpan(Math.min(m, t.to), a), !(t.to >= p) && t.nextSibling()););
                if (!d || p > i) break;
                f = d.to + o, f > e && (this.highlightRange(s.cursor(), Math.max(e, d.from + o), Math.min(i, f), n, h), this.startSpan(f, a))
            }
            c && t.parent()
        } else if (t.firstChild()) {
            do {
                if (!(t.to <= e)) {
                    if (t.from >= i) break;
                    this.highlightRange(t, e, i, n, r), this.startSpan(Math.min(i, t.to), a)
                }
            } while (t.nextSibling());
            t.parent()
        }
    }
}
const ca = ea.define,
    Oa = ca(),
    ua = ca(),
    fa = ca(ua),
    da = ca(ua),
    pa = ca(),
    ga = ca(pa),
    ma = ca(pa),
    Qa = ca(),
    Sa = ca(Qa),
    va = ca(),
    ya = ca(),
    ba = ca(),
    wa = ca(ba),
    xa = ca(),
    $a = {
        comment: Oa,
        lineComment: ca(Oa),
        blockComment: ca(Oa),
        docComment: ca(Oa),
        name: ua,
        variableName: ca(ua),
        typeName: fa,
        tagName: ca(fa),
        propertyName: da,
        attributeName: ca(da),
        className: ca(ua),
        labelName: ca(ua),
        namespace: ca(ua),
        macroName: ca(ua),
        literal: pa,
        string: ga,
        docString: ca(ga),
        character: ca(ga),
        attributeValue: ca(ga),
        number: ma,
        integer: ca(ma),
        float: ca(ma),
        bool: ca(pa),
        regexp: ca(pa),
        escape: ca(pa),
        color: ca(pa),
        url: ca(pa),
        keyword: va,
        self: ca(va),
        null: ca(va),
        atom: ca(va),
        unit: ca(va),
        modifier: ca(va),
        operatorKeyword: ca(va),
        controlKeyword: ca(va),
        definitionKeyword: ca(va),
        moduleKeyword: ca(va),
        operator: ya,
        derefOperator: ca(ya),
        arithmeticOperator: ca(ya),
        logicOperator: ca(ya),
        bitwiseOperator: ca(ya),
        compareOperator: ca(ya),
        updateOperator: ca(ya),
        definitionOperator: ca(ya),
        typeOperator: ca(ya),
        controlOperator: ca(ya),
        punctuation: ba,
        separator: ca(ba),
        bracket: wa,
        angleBracket: ca(wa),
        squareBracket: ca(wa),
        paren: ca(wa),
        brace: ca(wa),
        content: Qa,
        heading: Sa,
        heading1: ca(Sa),
        heading2: ca(Sa),
        heading3: ca(Sa),
        heading4: ca(Sa),
        heading5: ca(Sa),
        heading6: ca(Sa),
        contentSeparator: ca(Qa),
        list: ca(Qa),
        quote: ca(Qa),
        emphasis: ca(Qa),
        strong: ca(Qa),
        link: ca(Qa),
        monospace: ca(Qa),
        strikethrough: ca(Qa),
        inserted: ca(),
        deleted: ca(),
        changed: ca(),
        invalid: ca(),
        meta: xa,
        documentMeta: ca(xa),
        annotation: ca(xa),
        processingInstruction: ca(xa),
        definition: ea.defineModifier(),
        constant: ea.defineModifier(),
        function: ea.defineModifier(),
        standard: ea.defineModifier(),
        local: ea.defineModifier(),
        special: ea.defineModifier()
    };
var ka;
la([{
    tag: $a.link,
    class: "tok-link"
}, {
    tag: $a.heading,
    class: "tok-heading"
}, {
    tag: $a.emphasis,
    class: "tok-emphasis"
}, {
    tag: $a.strong,
    class: "tok-strong"
}, {
    tag: $a.keyword,
    class: "tok-keyword"
}, {
    tag: $a.atom,
    class: "tok-atom"
}, {
    tag: $a.bool,
    class: "tok-bool"
}, {
    tag: $a.url,
    class: "tok-url"
}, {
    tag: $a.labelName,
    class: "tok-labelName"
}, {
    tag: $a.inserted,
    class: "tok-inserted"
}, {
    tag: $a.deleted,
    class: "tok-deleted"
}, {
    tag: $a.literal,
    class: "tok-literal"
}, {
    tag: $a.string,
    class: "tok-string"
}, {
    tag: $a.number,
    class: "tok-number"
}, {
    tag: [$a.regexp, $a.escape, $a.special($a.string)],
    class: "tok-string2"
}, {
    tag: $a.variableName,
    class: "tok-variableName"
}, {
    tag: $a.local($a.variableName),
    class: "tok-variableName tok-local"
}, {
    tag: $a.definition($a.variableName),
    class: "tok-variableName tok-definition"
}, {
    tag: $a.special($a.variableName),
    class: "tok-variableName2"
}, {
    tag: $a.definition($a.propertyName),
    class: "tok-propertyName tok-definition"
}, {
    tag: $a.typeName,
    class: "tok-typeName"
}, {
    tag: $a.namespace,
    class: "tok-namespace"
}, {
    tag: $a.className,
    class: "tok-className"
}, {
    tag: $a.macroName,
    class: "tok-macroName"
}, {
    tag: $a.propertyName,
    class: "tok-propertyName"
}, {
    tag: $a.operator,
    class: "tok-operator"
}, {
    tag: $a.comment,
    class: "tok-comment"
}, {
    tag: $a.meta,
    class: "tok-meta"
}, {
    tag: $a.invalid,
    class: "tok-invalid"
}, {
    tag: $a.punctuation,
    class: "tok-punctuation"
}]);
const Pa = new Pl;

function _a(t) {
    return fe.define({
        combine: t ? e => e.concat(t) : void 0
    })
}
const Za = new Pl;
class Xa {
    constructor(t, e, i = [], n = "") {
        this.data = t, this.name = n, Je.prototype.hasOwnProperty("tree") || Object.defineProperty(Je.prototype, "tree", {
            get() {
                return Wa(this)
            }
        }), this.parser = e, this.extension = [Ea.of(this), Je.languageData.of(((t, e, i) => {
            let n = Ca(t, e, i),
                r = n.type.prop(Pa);
            if (!r) return [];
            let s = t.facet(r),
                o = n.type.prop(Za);
            if (o) {
                let r = n.resolve(e - n.from, i);
                for (let e of o)
                    if (e.test(r, t)) {
                        let i = t.facet(e.facet);
                        return "replace" == e.type ? i : i.concat(s)
                    }
            }
            return s
        }))].concat(i)
    }
    isActiveAt(t, e, i = -1) {
        return Ca(t, e, i).type.prop(Pa) == this.data
    }
    findRegions(t) {
        let e = t.facet(Ea);
        if ((null == e ? void 0 : e.data) == this.data) return [{
            from: 0,
            to: t.doc.length
        }];
        if (!e || !e.allowsNesting) return [];
        let i = [],
            n = (t, e) => {
                if (t.prop(Pa) == this.data) return void i.push({
                    from: e,
                    to: e + t.length
                });
                let r = t.prop(Pl.mounted);
                if (r) {
                    if (r.tree.prop(Pa) == this.data) {
                        if (r.overlay)
                            for (let t of r.overlay) i.push({
                                from: t.from + e,
                                to: t.to + e
                            });
                        else i.push({
                            from: e,
                            to: e + t.length
                        });
                        return
                    }
                    if (r.overlay) {
                        let t = i.length;
                        if (n(r.tree, r.overlay[0].from + e), i.length > t) return
                    }
                }
                for (let i = 0; i < t.children.length; i++) {
                    let r = t.children[i];
                    r instanceof Al && n(r, t.positions[i] + e)
                }
            };
        return n(Wa(t), 0), i
    }
    get allowsNesting() {
        return !0
    }
}

function Ca(t, e, i) {
    let n = t.facet(Ea),
        r = Wa(t).topNode;
    if (!n || n.allowsNesting)
        for (let t = r; t; t = t.enter(e, i, Wl.ExcludeBuffers)) t.type.isTop && (r = t);
    return r
}
Xa.setState = je.define();
class Ta extends Xa {
    constructor(t, e, i) {
        super(t, e, [], i), this.parser = e
    }
    static define(t) {
        let e = _a(t.languageData);
        return new Ta(e, t.parser.configure({
            props: [Pa.add((t => t.isTop ? e : void 0))]
        }), t.name)
    }
    configure(t, e) {
        return new Ta(this.data, this.parser.configure(t), e || this.name)
    }
    get allowsNesting() {
        return this.parser.hasWrappers()
    }
}

function Wa(t) {
    let e = t.field(Xa.state, !1);
    return e ? e.tree : Al.empty
}
class Aa {
    constructor(t) {
        this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter()
    }
    get length() {
        return this.doc.length
    }
    syncTo(t) {
        return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length
    }
    chunk(t) {
        return this.syncTo(t), this.string
    }
    get lineChunks() {
        return !0
    }
    read(t, e) {
        let i = this.cursorPos - this.string.length;
        return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i)
    }
}
let Ya = null;
class Ra {
    constructor(t, e, i = [], n, r, s, o, l) {
        this.parser = t, this.state = e, this.fragments = i, this.tree = n, this.treeLen = r, this.viewport = s, this.skipped = o, this.scheduleOn = l, this.parse = null, this.tempSkipped = []
    }
    static create(t, e, i) {
        return new Ra(t, e, [], Al.empty, 0, i, [], null)
    }
    startParse() {
        return this.parser.startParse(new Aa(this.state.doc), this.fragments)
    }
    work(t, e) {
        return null != e && e >= this.state.doc.length && (e = void 0), this.tree != Al.empty && this.isDone(null != e ? e : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
            var i;
            if ("number" == typeof t) {
                let e = Date.now() + t;
                t = () => Date.now() > e
            }
            for (this.parse || (this.parse = this.startParse()), null != e && (null == this.parse.stoppedAt || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e);;) {
                let n = this.parse.advance();
                if (n) {
                    if (this.fragments = this.withoutTempSkipped(Fl.addTree(n, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (i = this.parse.stoppedAt) && void 0 !== i ? i : this.state.doc.length, this.tree = n, this.parse = null, !(this.treeLen < (null != e ? e : this.state.doc.length))) return !0;
                    this.parse = this.startParse()
                }
                if (t()) return !1
            }
        }))
    }
    takeTree() {
        let t, e;
        this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext((() => {
            for (; !(e = this.parse.advance()););
        })), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Fl.addTree(this.tree, this.fragments, !0)), this.parse = null)
    }
    withContext(t) {
        let e = Ya;
        Ya = this;
        try {
            return t()
        } finally {
            Ya = e
        }
    }
    withoutTempSkipped(t) {
        for (let e; e = this.tempSkipped.pop();) t = Ua(t, e.from, e.to);
        return t
    }
    changes(t, e) {
        let {
            fragments: i,
            tree: n,
            treeLen: r,
            viewport: s,
            skipped: o
        } = this;
        if (this.takeTree(), !t.empty) {
            let e = [];
            if (t.iterChangedRanges(((t, i, n, r) => e.push({
                    fromA: t,
                    toA: i,
                    fromB: n,
                    toB: r
                }))), i = Fl.applyChanges(i, e), n = Al.empty, r = 0, s = {
                    from: t.mapPos(s.from, -1),
                    to: t.mapPos(s.to, 1)
                }, this.skipped.length) {
                o = [];
                for (let e of this.skipped) {
                    let i = t.mapPos(e.from, 1),
                        n = t.mapPos(e.to, -1);
                    i < n && o.push({
                        from: i,
                        to: n
                    })
                }
            }
        }
        return new Ra(this.parser, e, i, n, r, s, o, this.scheduleOn)
    }
    updateViewport(t) {
        if (this.viewport.from == t.from && this.viewport.to == t.to) return !1;
        this.viewport = t;
        let e = this.skipped.length;
        for (let e = 0; e < this.skipped.length; e++) {
            let {
                from: i,
                to: n
            } = this.skipped[e];
            i < t.to && n > t.from && (this.fragments = Ua(this.fragments, i, n), this.skipped.splice(e--, 1))
        }
        return !(this.skipped.length >= e) && (this.reset(), !0)
    }
    reset() {
        this.parse && (this.takeTree(), this.parse = null)
    }
    skipUntilInView(t, e) {
        this.skipped.push({
            from: t,
            to: e
        })
    }
    static getSkippingParser(t) {
        return new class extends Jl {
            createParse(e, i, n) {
                let r = n[0].from,
                    s = n[n.length - 1].to,
                    o = {
                        parsedPos: r,
                        advance() {
                            let e = Ya;
                            if (e) {
                                for (let t of n) e.tempSkipped.push(t);
                                t && (e.scheduleOn = e.scheduleOn ? Promise.all([e.scheduleOn, t]) : t)
                            }
                            return this.parsedPos = s, new Al(Zl.none, [], [], s - r)
                        },
                        stoppedAt: null,
                        stopAt() {}
                    };
                return o
            }
        }
    }
    isDone(t) {
        t = Math.min(t, this.state.doc.length);
        let e = this.fragments;
        return this.treeLen >= t && e.length && 0 == e[0].from && e[0].to >= t
    }
    static get() {
        return Ya
    }
}

function Ua(t, e, i) {
    return Fl.applyChanges(t, [{
        fromA: e,
        toA: i,
        fromB: e,
        toB: i
    }])
}
class Va {
    constructor(t) {
        this.context = t, this.tree = t.tree
    }
    apply(t) {
        if (!t.docChanged && this.tree == this.context.tree) return this;
        let e = this.context.changes(t.changes, t.state),
            i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
        return e.work(20, i) || e.takeTree(), new Va(e)
    }
    static init(t) {
        let e = Math.min(3e3, t.doc.length),
            i = Ra.create(t.facet(Ea).parser, t, {
                from: 0,
                to: e
            });
        return i.work(20, e) || i.takeTree(), new Va(i)
    }
}
Xa.state = ve.define({
    create: Va.init,
    update(t, e) {
        for (let t of e.effects)
            if (t.is(Xa.setState)) return t.value;
        return e.startState.facet(Ea) != e.state.facet(Ea) ? Va.init(e.state) : t.apply(e)
    }
});
let Ma = t => {
    let e = setTimeout((() => t()), 500);
    return () => clearTimeout(e)
};
"undefined" != typeof requestIdleCallback && (Ma = t => {
    let e = -1,
        i = setTimeout((() => {
            e = requestIdleCallback(t, {
                timeout: 400
            })
        }), 100);
    return () => e < 0 ? clearTimeout(i) : cancelIdleCallback(e)
});
const ja = "undefined" != typeof navigator && (null === (ka = navigator.scheduling) || void 0 === ka ? void 0 : ka.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
    Da = nr.fromClass(class {
        constructor(t) {
            this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(t) {
            let e = this.view.state.field(Xa.state).context;
            (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), t.docChanged && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e)
        }
        scheduleWork() {
            if (this.working) return;
            let {
                state: t
            } = this.view, e = t.field(Xa.state);
            e.tree == e.context.tree && e.context.isDone(t.doc.length) || (this.working = Ma(this.work))
        }
        work(t) {
            this.working = null;
            let e = Date.now();
            if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
            let {
                state: i,
                viewport: {
                    to: n
                }
            } = this.view, r = i.field(Xa.state);
            if (r.tree == r.context.tree && r.context.isDone(n + 1e5)) return;
            let s = Date.now() + Math.min(this.chunkBudget, 100, t && !ja ? Math.max(25, t.timeRemaining() - 5) : 1e9),
                o = r.context.treeLen < n && i.doc.length > n + 1e3,
                l = r.context.work((() => ja && ja() || Date.now() > s), n + (o ? 0 : 1e5));
            this.chunkBudget -= Date.now() - e, (l || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({
                effects: Xa.setState.of(new Va(r.context))
            })), this.chunkBudget > 0 && (!l || o) && this.scheduleWork(), this.checkAsyncSchedule(r.context)
        }
        checkAsyncSchedule(t) {
            t.scheduleOn && (this.workScheduled++, t.scheduleOn.then((() => this.scheduleWork())).catch((t => Kn(this.view.state, t))).then((() => this.workScheduled--)), t.scheduleOn = null)
        }
        destroy() {
            this.working && this.working()
        }
        isWorking() {
            return !!(this.working || this.workScheduled > 0)
        }
    }, {
        eventHandlers: {
            focus() {
                this.scheduleWork()
            }
        }
    }),
    Ea = fe.define({
        combine: t => t.length ? t[0] : null,
        enables: t => [Xa.state, Da, oo.contentAttributes.compute([t], (e => {
            let i = e.facet(t);
            return i && i.name ? {
                "data-language": i.name
            } : {}
        }))]
    });
class qa {
    constructor(t, e = []) {
        this.language = t, this.support = e, this.extension = [t, e]
    }
}
const Ia = fe.define(),
    za = fe.define({
        combine: t => {
            if (!t.length) return "  ";
            let e = t[0];
            if (!e || /\S/.test(e) || Array.from(e).some((t => t != e[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
            return e
        }
    });

function Ga(t) {
    let e = t.facet(za);
    return 9 == e.charCodeAt(0) ? t.tabSize * e.length : e.length
}

function Na(t, e) {
    let i = "",
        n = t.tabSize,
        r = t.facet(za)[0];
    if ("\t" == r) {
        for (; e >= n;) i += "\t", e -= n;
        r = " "
    }
    for (let t = 0; t < e; t++) i += r;
    return i
}

function Ba(t, e) {
    t instanceof Je && (t = new La(t));
    for (let i of t.state.facet(Ia)) {
        let n = i(t, e);
        if (void 0 !== n) return n
    }
    let i = Wa(t.state);
    return i ? function(t, e, i) {
        return Ja(e.resolveInner(i).enterUnfinishedNodesBefore(i), i, t)
    }(t, i, e) : null
}
class La {
    constructor(t, e = {}) {
        this.state = t, this.options = e, this.unit = Ga(t)
    }
    lineAt(t, e = 1) {
        let i = this.state.doc.lineAt(t),
            {
                simulateBreak: n,
                simulateDoubleBreak: r
            } = this.options;
        return null != n && n >= i.from && n <= i.to ? r && n == t ? {
            text: "",
            from: t
        } : (e < 0 ? n < t : n <= t) ? {
            text: i.text.slice(n - i.from),
            from: n
        } : {
            text: i.text.slice(0, n - i.from),
            from: i.from
        } : i
    }
    textAfterPos(t, e = 1) {
        if (this.options.simulateDoubleBreak && t == this.options.simulateBreak) return "";
        let {
            text: i,
            from: n
        } = this.lineAt(t, e);
        return i.slice(t - n, Math.min(i.length, t + 100 - n))
    }
    column(t, e = 1) {
        let {
            text: i,
            from: n
        } = this.lineAt(t, e), r = this.countColumn(i, t - n), s = this.options.overrideIndentation ? this.options.overrideIndentation(n) : -1;
        return s > -1 && (r += s - this.countColumn(i, i.search(/\S|$/))), r
    }
    countColumn(t, e = t.length) {
        return gi(t, this.state.tabSize, e)
    }
    lineIndent(t, e = 1) {
        let {
            text: i,
            from: n
        } = this.lineAt(t, e), r = this.options.overrideIndentation;
        if (r) {
            let t = r(n);
            if (t > -1) return t
        }
        return this.countColumn(i, i.search(/\S|$/))
    }
    get simulatedBreak() {
        return this.options.simulateBreak || null
    }
}
const Ha = new Pl;

function Fa(t) {
    let e = t.type.prop(Ha);
    if (e) return e;
    let i, n = t.firstChild;
    if (n && (i = n.type.prop(Pl.closedBy))) {
        let e = t.lastChild,
            n = e && i.indexOf(e.name) > -1;
        return t => nh(t, !0, 1, void 0, n && ! function(t) {
            return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak
        }(t) ? e.from : void 0)
    }
    return null == t.parent ? Ka : null
}

function Ja(t, e, i) {
    for (; t; t = t.parent) {
        let n = Fa(t);
        if (n) return n(th.create(i, e, t))
    }
    return null
}

function Ka() {
    return 0
}
class th extends La {
    constructor(t, e, i) {
        super(t.state, t.options), this.base = t, this.pos = e, this.node = i
    }
    static create(t, e, i) {
        return new th(t, e, i)
    }
    get textAfter() {
        return this.textAfterPos(this.pos)
    }
    get baseIndent() {
        let t = this.state.doc.lineAt(this.node.from);
        for (;;) {
            let e = this.node.resolve(t.from);
            for (; e.parent && e.parent.from == e.from;) e = e.parent;
            if (eh(e, this.node)) break;
            t = this.state.doc.lineAt(e.from)
        }
        return this.lineIndent(t.from)
    }
    continue () {
        let t = this.node.parent;
        return t ? Ja(t, this.pos, this.base) : 0
    }
}

function eh(t, e) {
    for (let i = e; i; i = i.parent)
        if (t == i) return !0;
    return !1
}

function ih({
    closing: t,
    align: e = !0,
    units: i = 1
}) {
    return n => nh(n, e, i, t)
}

function nh(t, e, i, n, r) {
    let s = t.textAfter,
        o = s.match(/^\s*/)[0].length,
        l = n && s.slice(o, o + n.length) == n || r == t.pos + o,
        a = e ? function(t) {
            let e = t.node,
                i = e.childAfter(e.from),
                n = e.lastChild;
            if (!i) return null;
            let r = t.options.simulateBreak,
                s = t.state.doc.lineAt(i.from),
                o = null == r || r <= s.from ? s.to : Math.min(s.to, r);
            for (let t = i.to;;) {
                let r = e.childAfter(t);
                if (!r || r == n) return null;
                if (!r.type.isSkipped) return r.from < o ? i : null;
                t = r.to
            }
        }(t) : null;
    return a ? l ? t.column(a.from) : t.column(a.to) : t.baseIndent + (l ? 0 : t.unit * i)
}

function rh({
    except: t,
    units: e = 1
} = {}) {
    return i => {
        let n = t && t.test(i.textAfter);
        return i.baseIndent + (n ? 0 : e * i.unit)
    }
}
const sh = 200;
const oh = new Pl;

function lh(t) {
    let e = t.firstChild,
        i = t.lastChild;
    return e && e.to < i.from ? {
        from: e.to,
        to: i.type.isError ? t.to : i.from
    } : null
}
class ah {
    constructor(t, e) {
        let i;

        function n(t) {
            let e = vi.newName();
            return (i || (i = Object.create(null)))["." + e] = t, e
        }
        this.specs = t;
        const r = "string" == typeof e.all ? e.all : e.all ? n(e.all) : void 0,
            s = e.scope;
        this.scope = s instanceof Xa ? t => t.prop(Pa) == s.data : s ? t => t == s : void 0, this.style = la(t.map((t => ({
            tag: t.tag,
            class: t.class || n(Object.assign({}, t, {
                tag: null
            }))
        }))), {
            all: r
        }).style, this.module = i ? new vi(i) : null, this.themeType = e.themeType
    }
    static define(t, e) {
        return new ah(t, e || {})
    }
}
const hh = fe.define(),
    ch = fe.define({
        combine: t => t.length ? [t[0]] : null
    });

function Oh(t) {
    let e = t.facet(hh);
    return e.length ? e : t.facet(ch)
}

function uh(t, e) {
    let i, n = [dh];
    return t instanceof ah && (t.module && n.push(oo.styleModule.of(t.module)), i = t.themeType), (null == e ? void 0 : e.fallback) ? n.push(ch.of(t)) : i ? n.push(hh.computeN([oo.darkTheme], (e => e.facet(oo.darkTheme) == ("dark" == i) ? [t] : []))) : n.push(hh.of(t)), n
}
class fh {
    constructor(t) {
        this.markCache = Object.create(null), this.tree = Wa(t.state), this.decorations = this.buildDeco(t, Oh(t.state))
    }
    update(t) {
        let e = Wa(t.state),
            i = Oh(t.state),
            n = i != Oh(t.startState);
        e.length < t.view.viewport.to && !n && e.type == this.tree.type ? this.decorations = this.decorations.map(t.changes) : (e != this.tree || t.viewportChanged || n) && (this.tree = e, this.decorations = this.buildDeco(t.view, i))
    }
    buildDeco(t, e) {
        if (!e || !this.tree.length) return Cn.none;
        let i = new si;
        for (let {
                from: n,
                to: r
            }
            of t.visibleRanges) aa(this.tree, e, ((t, e, n) => {
            i.add(t, e, this.markCache[n] || (this.markCache[n] = Cn.mark({
                class: n
            })))
        }), n, r);
        return i.finish()
    }
}
const dh = we.high(nr.fromClass(fh, {
        decorations: t => t.decorations
    })),
    ph = oo.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
            backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
            backgroundColor: "#bb555544"
        }
    }),
    gh = 1e4,
    mh = "()[]{}",
    Qh = fe.define({
        combine: t => Ke(t, {
            afterCursor: !0,
            brackets: mh,
            maxScanDistance: gh,
            renderMatch: yh
        })
    }),
    Sh = Cn.mark({
        class: "cm-matchingBracket"
    }),
    vh = Cn.mark({
        class: "cm-nonmatchingBracket"
    });

function yh(t) {
    let e = [],
        i = t.matched ? Sh : vh;
    return e.push(i.range(t.start.from, t.start.to)), t.end && e.push(i.range(t.end.from, t.end.to)), e
}
const bh = ve.define({
        create: () => Cn.none,
        update(t, e) {
            if (!e.docChanged && !e.selection) return t;
            let i = [],
                n = e.state.facet(Qh);
            for (let t of e.state.selection.ranges) {
                if (!t.empty) continue;
                let r = _h(e.state, t.head, -1, n) || t.head > 0 && _h(e.state, t.head - 1, 1, n) || n.afterCursor && (_h(e.state, t.head, 1, n) || t.head < e.state.doc.length && _h(e.state, t.head + 1, -1, n));
                r && (i = i.concat(n.renderMatch(r, e.state)))
            }
            return Cn.set(i, !0)
        },
        provide: t => oo.decorations.from(t)
    }),
    wh = [bh, ph];

function xh(t = {}) {
    return [Qh.of(t), wh]
}
const $h = new Pl;

function kh(t, e, i) {
    let n = t.prop(e < 0 ? Pl.openedBy : Pl.closedBy);
    if (n) return n;
    if (1 == t.name.length) {
        let n = i.indexOf(t.name);
        if (n > -1 && n % 2 == (e < 0 ? 1 : 0)) return [i[n + e]]
    }
    return null
}

function Ph(t) {
    let e = t.type.prop($h);
    return e ? e(t.node) : t
}

function _h(t, e, i, n = {}) {
    let r = n.maxScanDistance || gh,
        s = n.brackets || mh,
        o = Wa(t),
        l = o.resolveInner(e, i);
    for (let n = l; n; n = n.parent) {
        let r = kh(n.type, i, s);
        if (r && n.from < n.to) {
            let o = Ph(n);
            if (o && (i > 0 ? e >= o.from && e < o.to : e > o.from && e <= o.to)) return Zh(t, e, i, n, o, r, s)
        }
    }
    return function(t, e, i, n, r, s, o) {
        let l = i < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1),
            a = o.indexOf(l);
        if (a < 0 || a % 2 == 0 != i > 0) return null;
        let h = {
                from: i < 0 ? e - 1 : e,
                to: i > 0 ? e + 1 : e
            },
            c = t.doc.iterRange(e, i > 0 ? t.doc.length : 0),
            O = 0;
        for (let t = 0; !c.next().done && t <= s;) {
            let s = c.value;
            i < 0 && (t += s.length);
            let l = e + t * i;
            for (let t = i > 0 ? 0 : s.length - 1, e = i > 0 ? s.length : -1; t != e; t += i) {
                let e = o.indexOf(s[t]);
                if (!(e < 0 || n.resolveInner(l + t, 1).type != r))
                    if (e % 2 == 0 == i > 0) O++;
                    else {
                        if (1 == O) return {
                            start: h,
                            end: {
                                from: l + t,
                                to: l + t + 1
                            },
                            matched: e >> 1 == a >> 1
                        };
                        O--
                    }
            }
            i > 0 && (t += s.length)
        }
        return c.done ? {
            start: h,
            matched: !1
        } : null
    }(t, e, i, o, l.type, r, s)
}

function Zh(t, e, i, n, r, s, o) {
    let l = n.parent,
        a = {
            from: r.from,
            to: r.to
        },
        h = 0,
        c = null == l ? void 0 : l.cursor();
    if (c && (i < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
        do {
            if (i < 0 ? c.to <= n.from : c.from >= n.to) {
                if (0 == h && s.indexOf(c.type.name) > -1 && c.from < c.to) {
                    let t = Ph(c);
                    return {
                        start: a,
                        end: t ? {
                            from: t.from,
                            to: t.to
                        } : void 0,
                        matched: !0
                    }
                }
                if (kh(c.type, i, o)) h++;
                else if (kh(c.type, -i, o)) {
                    if (0 == h) {
                        let t = Ph(c);
                        return {
                            start: a,
                            end: t && t.from < t.to ? {
                                from: t.from,
                                to: t.to
                            } : void 0,
                            matched: !1
                        }
                    }
                    h--
                }
            }
        } while (i < 0 ? c.prevSibling() : c.nextSibling());
    return {
        start: a,
        matched: !1
    }
}
const Xh = Object.create(null),
    Ch = [Zl.none],
    Th = [],
    Wh = Object.create(null);
for (let [t, e] of [
        ["variable", "variableName"],
        ["variable-2", "variableName.special"],
        ["string-2", "string.special"],
        ["def", "variableName.definition"],
        ["tag", "tagName"],
        ["attribute", "attributeName"],
        ["type", "typeName"],
        ["builtin", "variableName.standard"],
        ["qualifier", "modifier"],
        ["error", "invalid"],
        ["header", "heading"],
        ["property", "propertyName"]
    ]) Wh[t] = Yh(Xh, e);

function Ah(t, e) {
    Th.indexOf(t) > -1 || (Th.push(t), console.warn(e))
}

function Yh(t, e) {
    let i = null;
    for (let n of e.split(".")) {
        let e = t[n] || $a[n];
        e ? "function" == typeof e ? i ? i = e(i) : Ah(n, `Modifier ${n} used at start of tag`) : i ? Ah(n, `Tag ${n} used as modifier`) : i = e : Ah(n, `Unknown highlighting tag ${n}`)
    }
    if (!i) return 0;
    let n = e.replace(/ /g, "_"),
        r = Zl.define({
            id: Ch.length,
            name: n,
            props: [ra({
                [n]: i
            })]
        });
    return Ch.push(r), r.id
}

function Rh(t, e) {
    return ({
        state: i,
        dispatch: n
    }) => {
        if (i.readOnly) return !1;
        let r = t(e, i);
        return !!r && (n(i.update(r)), !0)
    }
}
const Uh = Rh(qh, 0),
    Vh = Rh(Eh, 0),
    Mh = Rh(((t, e) => Eh(t, e, function(t) {
        let e = [];
        for (let i of t.selection.ranges) {
            let n = t.doc.lineAt(i.from),
                r = i.to <= n.to ? n : t.doc.lineAt(i.to),
                s = e.length - 1;
            s >= 0 && e[s].to > n.from ? e[s].to = r.to : e.push({
                from: n.from,
                to: r.to
            })
        }
        return e
    }(e))), 0);

function jh(t, e) {
    let i = t.languageDataAt("commentTokens", e);
    return i.length ? i[0] : {}
}
const Dh = 50;

function Eh(t, e, i = e.selection.ranges) {
    let n = i.map((t => jh(e, t.from).block));
    if (!n.every((t => t))) return null;
    let r = i.map(((t, i) => function(t, {
        open: e,
        close: i
    }, n, r) {
        let s, o, l = t.sliceDoc(n - Dh, n),
            a = t.sliceDoc(r, r + Dh),
            h = /\s*$/.exec(l)[0].length,
            c = /^\s*/.exec(a)[0].length,
            O = l.length - h;
        if (l.slice(O - e.length, O) == e && a.slice(c, c + i.length) == i) return {
            open: {
                pos: n - h,
                margin: h && 1
            },
            close: {
                pos: r + c,
                margin: c && 1
            }
        };
        r - n <= 2 * Dh ? s = o = t.sliceDoc(n, r) : (s = t.sliceDoc(n, n + Dh), o = t.sliceDoc(r - Dh, r));
        let u = /^\s*/.exec(s)[0].length,
            f = /\s*$/.exec(o)[0].length,
            d = o.length - f - i.length;
        return s.slice(u, u + e.length) == e && o.slice(d, d + i.length) == i ? {
            open: {
                pos: n + u + e.length,
                margin: /\s/.test(s.charAt(u + e.length)) ? 1 : 0
            },
            close: {
                pos: r - f - i.length,
                margin: /\s/.test(o.charAt(d - 1)) ? 1 : 0
            }
        } : null
    }(e, n[i], t.from, t.to)));
    if (2 != t && !r.every((t => t))) return {
        changes: e.changes(i.map(((t, e) => r[e] ? [] : [{
            from: t.from,
            insert: n[e].open + " "
        }, {
            from: t.to,
            insert: " " + n[e].close
        }])))
    };
    if (1 != t && r.some((t => t))) {
        let t = [];
        for (let e, i = 0; i < r.length; i++)
            if (e = r[i]) {
                let r = n[i],
                    {
                        open: s,
                        close: o
                    } = e;
                t.push({
                    from: s.pos - r.open.length,
                    to: s.pos + s.margin
                }, {
                    from: o.pos - o.margin,
                    to: o.pos + r.close.length
                })
            } return {
            changes: t
        }
    }
    return null
}

function qh(t, e, i = e.selection.ranges) {
    let n = [],
        r = -1;
    for (let {
            from: t,
            to: s
        }
        of i) {
        let i = n.length,
            o = 1e9;
        for (let i = t; i <= s;) {
            let l = e.doc.lineAt(i);
            if (l.from > r && (t == s || s > l.from)) {
                r = l.from;
                let t = jh(e, l.from).line;
                if (!t) continue;
                let i = /^\s*/.exec(l.text)[0].length,
                    s = i == l.length,
                    a = l.text.slice(i, i + t.length) == t ? i : -1;
                i < l.text.length && i < o && (o = i), n.push({
                    line: l,
                    comment: a,
                    token: t,
                    indent: i,
                    empty: s,
                    single: !1
                })
            }
            i = l.to + 1
        }
        if (o < 1e9)
            for (let t = i; t < n.length; t++) n[t].indent < n[t].line.text.length && (n[t].indent = o);
        n.length == i + 1 && (n[i].single = !0)
    }
    if (2 != t && n.some((t => t.comment < 0 && (!t.empty || t.single)))) {
        let t = [];
        for (let {
                line: e,
                token: i,
                indent: r,
                empty: s,
                single: o
            }
            of n) !o && s || t.push({
            from: e.from + r,
            insert: i + " "
        });
        let i = e.changes(t);
        return {
            changes: i,
            selection: e.selection.map(i, 1)
        }
    }
    if (1 != t && n.some((t => t.comment >= 0))) {
        let t = [];
        for (let {
                line: e,
                comment: i,
                token: r
            }
            of n)
            if (i >= 0) {
                let n = e.from + i,
                    s = n + r.length;
                " " == e.text[s - e.from] && s++, t.push({
                    from: n,
                    to: s
                })
            } return {
            changes: t
        }
    }
    return null
}
const Ih = Ue.define(),
    zh = Ue.define(),
    Gh = fe.define(),
    Nh = fe.define({
        combine: t => Ke(t, {
            minDepth: 100,
            newGroupDelay: 500,
            joinToEvent: (t, e) => e
        }, {
            minDepth: Math.max,
            newGroupDelay: Math.min,
            joinToEvent: (t, e) => (i, n) => t(i, n) || e(i, n)
        })
    });
const Bh = ve.define({
    create: () => Oc.empty,
    update(t, e) {
        let i = e.state.facet(Nh),
            n = e.annotation(Ih);
        if (n) {
            let r = e.docChanged ? ce.single(function(t) {
                    let e = 0;
                    return t.iterChangedRanges(((t, i) => e = i)), e
                }(e.changes)) : void 0,
                s = ec.fromTransaction(e, r),
                o = n.side,
                l = 0 == o ? t.undone : t.done;
            return l = s ? ic(l, l.length, i.minDepth, s) : oc(l, e.startState.selection), new Oc(0 == o ? n.rest : l, 0 == o ? l : n.rest)
        }
        let r = e.annotation(zh);
        if ("full" != r && "before" != r || (t = t.isolate()), !1 === e.annotation(De.addToHistory)) return e.changes.empty ? t : t.addMapping(e.changes.desc);
        let s = ec.fromTransaction(e),
            o = e.annotation(De.time),
            l = e.annotation(De.userEvent);
        return s ? t = t.addChanges(s, o, l, i, e) : e.selection && (t = t.addSelection(e.startState.selection, o, l, i.newGroupDelay)), "full" != r && "after" != r || (t = t.isolate()), t
    },
    toJSON: t => ({
        done: t.done.map((t => t.toJSON())),
        undone: t.undone.map((t => t.toJSON()))
    }),
    fromJSON: t => new Oc(t.done.map(ec.fromJSON), t.undone.map(ec.fromJSON))
});

function Lh(t = {}) {
    return [Bh, Nh.of(t), oo.domEventHandlers({
        beforeinput(t, e) {
            let i = "historyUndo" == t.inputType ? Fh : "historyRedo" == t.inputType ? Jh : null;
            return !!i && (t.preventDefault(), i(e))
        }
    })]
}

function Hh(t, e) {
    return function({
        state: i,
        dispatch: n
    }) {
        if (!e && i.readOnly) return !1;
        let r = i.field(Bh, !1);
        if (!r) return !1;
        let s = r.pop(t, i, e);
        return !!s && (n(s), !0)
    }
}
const Fh = Hh(0, !1),
    Jh = Hh(1, !1),
    Kh = Hh(0, !0),
    tc = Hh(1, !0);
class ec {
    constructor(t, e, i, n, r) {
        this.changes = t, this.effects = e, this.mapped = i, this.startSelection = n, this.selectionsAfter = r
    }
    setSelAfter(t) {
        return new ec(this.changes, this.effects, this.mapped, this.startSelection, t)
    }
    toJSON() {
        var t, e, i;
        return {
            changes: null === (t = this.changes) || void 0 === t ? void 0 : t.toJSON(),
            mapped: null === (e = this.mapped) || void 0 === e ? void 0 : e.toJSON(),
            startSelection: null === (i = this.startSelection) || void 0 === i ? void 0 : i.toJSON(),
            selectionsAfter: this.selectionsAfter.map((t => t.toJSON()))
        }
    }
    static fromJSON(t) {
        return new ec(t.changes && ie.fromJSON(t.changes), [], t.mapped && ee.fromJSON(t.mapped), t.startSelection && ce.fromJSON(t.startSelection), t.selectionsAfter.map(ce.fromJSON))
    }
    static fromTransaction(t, e) {
        let i = rc;
        for (let e of t.startState.facet(Gh)) {
            let n = e(t);
            n.length && (i = i.concat(n))
        }
        return !i.length && t.changes.empty ? null : new ec(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, rc)
    }
    static selection(t) {
        return new ec(void 0, rc, void 0, void 0, t)
    }
}

function ic(t, e, i, n) {
    let r = e + 1 > i + 20 ? e - i - 1 : 0,
        s = t.slice(r, e);
    return s.push(n), s
}

function nc(t, e) {
    return t.length ? e.length ? t.concat(e) : t : e
}
const rc = [],
    sc = 200;

function oc(t, e) {
    if (t.length) {
        let i = t[t.length - 1],
            n = i.selectionsAfter.slice(Math.max(0, i.selectionsAfter.length - sc));
        return n.length && n[n.length - 1].eq(e) ? t : (n.push(e), ic(t, t.length - 1, 1e9, i.setSelAfter(n)))
    }
    return [ec.selection([e])]
}

function lc(t) {
    let e = t[t.length - 1],
        i = t.slice();
    return i[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), i
}

function ac(t, e) {
    if (!t.length) return t;
    let i = t.length,
        n = rc;
    for (; i;) {
        let r = hc(t[i - 1], e, n);
        if (r.changes && !r.changes.empty || r.effects.length) {
            let e = t.slice(0, i);
            return e[i - 1] = r, e
        }
        e = r.mapped, i--, n = r.selectionsAfter
    }
    return n.length ? [ec.selection(n)] : rc
}

function hc(t, e, i) {
    let n = nc(t.selectionsAfter.length ? t.selectionsAfter.map((t => t.map(e))) : rc, i);
    if (!t.changes) return ec.selection(n);
    let r = t.changes.map(e),
        s = e.mapDesc(t.changes, !0),
        o = t.mapped ? t.mapped.composeDesc(s) : s;
    return new ec(r, je.mapEffects(t.effects, e), o, t.startSelection.map(s), n)
}
const cc = /^(input\.type|delete)($|\.)/;
class Oc {
    constructor(t, e, i = 0, n = undefined) {
        this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = n
    }
    isolate() {
        return this.prevTime ? new Oc(this.done, this.undone) : this
    }
    addChanges(t, e, i, n, r) {
        let s = this.done,
            o = s[s.length - 1];
        return s = o && o.changes && !o.changes.empty && t.changes && (!i || cc.test(i)) && (!o.selectionsAfter.length && e - this.prevTime < n.newGroupDelay && n.joinToEvent(r, function(t, e) {
            let i = [],
                n = !1;
            return t.iterChangedRanges(((t, e) => i.push(t, e))), e.iterChangedRanges(((t, e, r, s) => {
                for (let t = 0; t < i.length;) {
                    let e = i[t++],
                        o = i[t++];
                    s >= e && r <= o && (n = !0)
                }
            })), n
        }(o.changes, t.changes)) || "input.type.compose" == i) ? ic(s, s.length - 1, n.minDepth, new ec(t.changes.compose(o.changes), nc(t.effects, o.effects), o.mapped, o.startSelection, rc)) : ic(s, s.length, n.minDepth, t), new Oc(s, rc, e, i)
    }
    addSelection(t, e, i, n) {
        let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : rc;
        return r.length > 0 && e - this.prevTime < n && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && function(t, e) {
            return t.ranges.length == e.ranges.length && 0 === t.ranges.filter(((t, i) => t.empty != e.ranges[i].empty)).length
        }(r[r.length - 1], t) ? this : new Oc(oc(this.done, t), this.undone, e, i)
    }
    addMapping(t) {
        return new Oc(ac(this.done, t), ac(this.undone, t), this.prevTime, this.prevUserEvent)
    }
    pop(t, e, i) {
        let n = 0 == t ? this.done : this.undone;
        if (0 == n.length) return null;
        let r = n[n.length - 1];
        if (i && r.selectionsAfter.length) return e.update({
            selection: r.selectionsAfter[r.selectionsAfter.length - 1],
            annotations: Ih.of({
                side: t,
                rest: lc(n)
            }),
            userEvent: 0 == t ? "select.undo" : "select.redo",
            scrollIntoView: !0
        });
        if (r.changes) {
            let i = 1 == n.length ? rc : n.slice(0, n.length - 1);
            return r.mapped && (i = ac(i, r.mapped)), e.update({
                changes: r.changes,
                selection: r.startSelection,
                effects: r.effects,
                annotations: Ih.of({
                    side: t,
                    rest: i
                }),
                filter: !1,
                userEvent: 0 == t ? "undo" : "redo",
                scrollIntoView: !0
            })
        }
        return null
    }
}
Oc.empty = new Oc(rc, rc);
const uc = [{
    key: "Mod-z",
    run: Fh,
    preventDefault: !0
}, {
    key: "Mod-y",
    mac: "Mod-Shift-z",
    run: Jh,
    preventDefault: !0
}, {
    linux: "Ctrl-Shift-z",
    run: Jh,
    preventDefault: !0
}, {
    key: "Mod-u",
    run: Kh,
    preventDefault: !0
}, {
    key: "Alt-u",
    mac: "Mod-Shift-u",
    run: tc,
    preventDefault: !0
}];

function fc(t, e) {
    return ce.create(t.ranges.map(e), t.mainIndex)
}

function dc(t, e) {
    return t.update({
        selection: e,
        scrollIntoView: !0,
        userEvent: "select"
    })
}

function pc({
    state: t,
    dispatch: e
}, i) {
    let n = fc(t.selection, i);
    return !n.eq(t.selection) && (e(dc(t, n)), !0)
}

function gc(t, e) {
    return ce.cursor(e ? t.to : t.from)
}

function mc(t, e) {
    return pc(t, (i => i.empty ? t.moveByChar(i, e) : gc(i, e)))
}

function Qc(t) {
    return t.textDirectionAt(t.state.selection.main.head) == fr.LTR
}
const Sc = t => mc(t, !Qc(t)),
    vc = t => mc(t, Qc(t));

function yc(t, e) {
    return pc(t, (i => i.empty ? t.moveByGroup(i, e) : gc(i, e)))
}

function bc(t, e, i) {
    if (e.type.prop(i)) return !0;
    let n = e.to - e.from;
    return n && (n > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild
}

function wc(t, e, i) {
    let n, r, s = Wa(t).resolveInner(e.head),
        o = i ? Pl.closedBy : Pl.openedBy;
    for (let n = e.head;;) {
        let e = i ? s.childAfter(n) : s.childBefore(n);
        if (!e) break;
        bc(t, e, o) ? s = e : n = i ? e.to : e.from
    }
    return r = s.type.prop(o) && (n = i ? _h(t, s.from, 1) : _h(t, s.to, -1)) && n.matched ? i ? n.end.to : n.end.from : i ? s.to : s.from, ce.cursor(r, i ? -1 : 1)
}

function xc(t, e) {
    return pc(t, (i => {
        if (!i.empty) return gc(i, e);
        let n = t.moveVertically(i, e);
        return n.head != i.head ? n : t.moveToLineBoundary(i, e)
    }))
}
const $c = t => xc(t, !1),
    kc = t => xc(t, !0);

function Pc(t) {
    let e, i = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2,
        n = 0,
        r = 0;
    if (i) {
        for (let e of t.state.facet(oo.scrollMargins)) {
            let i = e(t);
            (null == i ? void 0 : i.top) && (n = Math.max(null == i ? void 0 : i.top, n)), (null == i ? void 0 : i.bottom) && (r = Math.max(null == i ? void 0 : i.bottom, r))
        }
        e = t.scrollDOM.clientHeight - n - r
    } else e = (t.dom.ownerDocument.defaultView || window).innerHeight;
    return {
        marginTop: n,
        marginBottom: r,
        selfScroll: i,
        height: Math.max(t.defaultLineHeight, e - 5)
    }
}

function _c(t, e) {
    let i, n = Pc(t),
        {
            state: r
        } = t,
        s = fc(r.selection, (i => i.empty ? t.moveVertically(i, e, n.height) : gc(i, e)));
    if (s.eq(r.selection)) return !1;
    if (n.selfScroll) {
        let e = t.coordsAtPos(r.selection.main.head),
            o = t.scrollDOM.getBoundingClientRect(),
            l = o.top + n.marginTop,
            a = o.bottom - n.marginBottom;
        e && e.top > l && e.bottom < a && (i = oo.scrollIntoView(s.main.head, {
            y: "start",
            yMargin: e.top - l
        }))
    }
    return t.dispatch(dc(r, s), {
        effects: i
    }), !0
}
const Zc = t => _c(t, !1),
    Xc = t => _c(t, !0);

function Cc(t, e, i) {
    let n = t.lineBlockAt(e.head),
        r = t.moveToLineBoundary(e, i);
    if (r.head == e.head && r.head != (i ? n.to : n.from) && (r = t.moveToLineBoundary(e, i, !1)), !i && r.head == n.from && n.length) {
        let i = /^\s*/.exec(t.state.sliceDoc(n.from, Math.min(n.from + 100, n.to)))[0].length;
        i && e.head != n.from + i && (r = ce.cursor(n.from + i))
    }
    return r
}

function Tc(t, e) {
    let i = fc(t.state.selection, (t => {
        let i = e(t);
        return ce.range(t.anchor, i.head, i.goalColumn, i.bidiLevel || void 0)
    }));
    return !i.eq(t.state.selection) && (t.dispatch(dc(t.state, i)), !0)
}

function Wc(t, e) {
    return Tc(t, (i => t.moveByChar(i, e)))
}
const Ac = t => Wc(t, !Qc(t)),
    Yc = t => Wc(t, Qc(t));

function Rc(t, e) {
    return Tc(t, (i => t.moveByGroup(i, e)))
}

function Uc(t, e) {
    return Tc(t, (i => t.moveVertically(i, e)))
}
const Vc = t => Uc(t, !1),
    Mc = t => Uc(t, !0);

function jc(t, e) {
    return Tc(t, (i => t.moveVertically(i, e, Pc(t).height)))
}
const Dc = t => jc(t, !1),
    Ec = t => jc(t, !0),
    qc = ({
        state: t,
        dispatch: e
    }) => (e(dc(t, {
        anchor: 0
    })), !0),
    Ic = ({
        state: t,
        dispatch: e
    }) => (e(dc(t, {
        anchor: t.doc.length
    })), !0),
    zc = ({
        state: t,
        dispatch: e
    }) => (e(dc(t, {
        anchor: t.selection.main.anchor,
        head: 0
    })), !0),
    Gc = ({
        state: t,
        dispatch: e
    }) => (e(dc(t, {
        anchor: t.selection.main.anchor,
        head: t.doc.length
    })), !0);

function Nc(t, e) {
    if (t.state.readOnly) return !1;
    let i = "delete.selection",
        {
            state: n
        } = t,
        r = n.changeByRange((n => {
            let {
                from: r,
                to: s
            } = n;
            if (r == s) {
                let n = e(r);
                n < r ? (i = "delete.backward", n = Bc(t, n, !1)) : n > r && (i = "delete.forward", n = Bc(t, n, !0)), r = Math.min(r, n), s = Math.max(s, n)
            } else r = Bc(t, r, !1), s = Bc(t, s, !0);
            return r == s ? {
                range: n
            } : {
                changes: {
                    from: r,
                    to: s
                },
                range: ce.cursor(r)
            }
        }));
    return !r.changes.empty && (t.dispatch(n.update(r, {
        scrollIntoView: !0,
        userEvent: i,
        effects: "delete.selection" == i ? oo.announce.of(n.phrase("Selection deleted")) : void 0
    })), !0)
}

function Bc(t, e, i) {
    if (t instanceof oo)
        for (let n of t.state.facet(oo.atomicRanges).map((e => e(t)))) n.between(e, e, ((t, n) => {
            t < e && n > e && (e = i ? n : t)
        }));
    return e
}
const Lc = (t, e) => Nc(t, (i => {
        let n, r, {
                state: s
            } = t,
            o = s.doc.lineAt(i);
        if (!e && i > o.from && i < o.from + 200 && !/[^ \t]/.test(n = o.text.slice(0, i - o.from))) {
            if ("\t" == n[n.length - 1]) return i - 1;
            let t = gi(n, s.tabSize) % Ga(s) || Ga(s);
            for (let e = 0; e < t && " " == n[n.length - 1 - e]; e++) i--;
            r = i
        } else r = zt(o.text, i - o.from, e, e) + o.from, r == i && o.number != (e ? s.doc.lines : 1) && (r += e ? 1 : -1);
        return r
    })),
    Hc = t => Lc(t, !1),
    Fc = t => Lc(t, !0),
    Jc = (t, e) => Nc(t, (i => {
        let n = i,
            {
                state: r
            } = t,
            s = r.doc.lineAt(n),
            o = r.charCategorizer(n);
        for (let t = null;;) {
            if (n == (e ? s.to : s.from)) {
                n == i && s.number != (e ? r.doc.lines : 1) && (n += e ? 1 : -1);
                break
            }
            let l = zt(s.text, n - s.from, e) + s.from,
                a = s.text.slice(Math.min(n, l) - s.from, Math.max(n, l) - s.from),
                h = o(a);
            if (null != t && h != t) break;
            " " == a && n == i || (t = h), n = l
        }
        return n
    })),
    Kc = t => Jc(t, !1),
    tO = t => Nc(t, (e => {
        let i = t.lineBlockAt(e).to;
        return e < i ? i : Math.min(t.state.doc.length, e + 1)
    }));

function eO(t) {
    let e = [],
        i = -1;
    for (let n of t.selection.ranges) {
        let r = t.doc.lineAt(n.from),
            s = t.doc.lineAt(n.to);
        if (n.empty || n.to != s.from || (s = t.doc.lineAt(n.to - 1)), i >= r.number) {
            let t = e[e.length - 1];
            t.to = s.to, t.ranges.push(n)
        } else e.push({
            from: r.from,
            to: s.to,
            ranges: [n]
        });
        i = s.number + 1
    }
    return e
}

function iO(t, e, i) {
    if (t.readOnly) return !1;
    let n = [],
        r = [];
    for (let e of eO(t)) {
        if (i ? e.to == t.doc.length : 0 == e.from) continue;
        let s = t.doc.lineAt(i ? e.to + 1 : e.from - 1),
            o = s.length + 1;
        if (i) {
            n.push({
                from: e.to,
                to: s.to
            }, {
                from: e.from,
                insert: s.text + t.lineBreak
            });
            for (let i of e.ranges) r.push(ce.range(Math.min(t.doc.length, i.anchor + o), Math.min(t.doc.length, i.head + o)))
        } else {
            n.push({
                from: s.from,
                to: e.from
            }, {
                from: e.to,
                insert: t.lineBreak + s.text
            });
            for (let t of e.ranges) r.push(ce.range(t.anchor - o, t.head - o))
        }
    }
    return !!n.length && (e(t.update({
        changes: n,
        scrollIntoView: !0,
        selection: ce.create(r, t.selection.mainIndex),
        userEvent: "move.line"
    })), !0)
}

function nO(t, e, i) {
    if (t.readOnly) return !1;
    let n = [];
    for (let e of eO(t)) i ? n.push({
        from: e.from,
        insert: t.doc.slice(e.from, e.to) + t.lineBreak
    }) : n.push({
        from: e.to,
        insert: t.lineBreak + t.doc.slice(e.from, e.to)
    });
    return e(t.update({
        changes: n,
        scrollIntoView: !0,
        userEvent: "input.copyline"
    })), !0
}
const rO = oO(!1),
    sO = oO(!0);

function oO(t) {
    return ({
        state: e,
        dispatch: i
    }) => {
        if (e.readOnly) return !1;
        let n = e.changeByRange((i => {
            let {
                from: n,
                to: r
            } = i, s = e.doc.lineAt(n), o = !t && n == r && function(t, e) {
                if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1))) return {
                    from: e,
                    to: e
                };
                let i, n = Wa(t).resolveInner(e),
                    r = n.childBefore(e),
                    s = n.childAfter(e);
                return r && s && r.to <= e && s.from >= e && (i = r.type.prop(Pl.closedBy)) && i.indexOf(s.name) > -1 && t.doc.lineAt(r.to).from == t.doc.lineAt(s.from).from ? {
                    from: r.to,
                    to: s.from
                } : null
            }(e, n);
            t && (n = r = (r <= s.to ? s : e.doc.lineAt(r)).to);
            let l = new La(e, {
                    simulateBreak: n,
                    simulateDoubleBreak: !!o
                }),
                a = Ba(l, n);
            for (null == a && (a = /^\s*/.exec(e.doc.lineAt(n).text)[0].length); r < s.to && /\s/.test(s.text[r - s.from]);) r++;
            o ? ({
                from: n,
                to: r
            } = o) : n > s.from && n < s.from + 100 && !/\S/.test(s.text.slice(0, n)) && (n = s.from);
            let h = ["", Na(e, a)];
            return o && h.push(Na(e, l.lineIndent(s.from, -1))), {
                changes: {
                    from: n,
                    to: r,
                    insert: Tt.of(h)
                },
                range: ce.cursor(n + 1 + h[1].length)
            }
        }));
        return i(e.update(n, {
            scrollIntoView: !0,
            userEvent: "input"
        })), !0
    }
}

function lO(t, e) {
    let i = -1;
    return t.changeByRange((n => {
        let r = [];
        for (let s = n.from; s <= n.to;) {
            let o = t.doc.lineAt(s);
            o.number > i && (n.empty || n.to > o.from) && (e(o, r, n), i = o.number), s = o.to + 1
        }
        let s = t.changes(r);
        return {
            changes: r,
            range: ce.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1))
        }
    }))
}
const aO = ({
        state: t,
        dispatch: e
    }) => !t.readOnly && (e(t.update(lO(t, ((e, i) => {
        i.push({
            from: e.from,
            insert: t.facet(za)
        })
    })), {
        userEvent: "input.indent"
    })), !0),
    hO = ({
        state: t,
        dispatch: e
    }) => !t.readOnly && (e(t.update(lO(t, ((e, i) => {
        let n = /^\s*/.exec(e.text)[0];
        if (!n) return;
        let r = gi(n, t.tabSize),
            s = 0,
            o = Na(t, Math.max(0, r - Ga(t)));
        for (; s < n.length && s < o.length && n.charCodeAt(s) == o.charCodeAt(s);) s++;
        i.push({
            from: e.from + s,
            to: e.from + n.length,
            insert: o.slice(s)
        })
    })), {
        userEvent: "delete.dedent"
    })), !0),
    cO = [{
        key: "ArrowLeft",
        run: Sc,
        shift: Ac,
        preventDefault: !0
    }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: t => yc(t, !Qc(t)),
        shift: t => Rc(t, !Qc(t)),
        preventDefault: !0
    }, {
        mac: "Cmd-ArrowLeft",
        run: t => pc(t, (e => Cc(t, e, !Qc(t)))),
        shift: t => Tc(t, (e => Cc(t, e, !Qc(t)))),
        preventDefault: !0
    }, {
        key: "ArrowRight",
        run: vc,
        shift: Yc,
        preventDefault: !0
    }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: t => yc(t, Qc(t)),
        shift: t => Rc(t, Qc(t)),
        preventDefault: !0
    }, {
        mac: "Cmd-ArrowRight",
        run: t => pc(t, (e => Cc(t, e, Qc(t)))),
        shift: t => Tc(t, (e => Cc(t, e, Qc(t)))),
        preventDefault: !0
    }, {
        key: "ArrowUp",
        run: $c,
        shift: Vc,
        preventDefault: !0
    }, {
        mac: "Cmd-ArrowUp",
        run: qc,
        shift: zc
    }, {
        mac: "Ctrl-ArrowUp",
        run: Zc,
        shift: Dc
    }, {
        key: "ArrowDown",
        run: kc,
        shift: Mc,
        preventDefault: !0
    }, {
        mac: "Cmd-ArrowDown",
        run: Ic,
        shift: Gc
    }, {
        mac: "Ctrl-ArrowDown",
        run: Xc,
        shift: Ec
    }, {
        key: "PageUp",
        run: Zc,
        shift: Dc
    }, {
        key: "PageDown",
        run: Xc,
        shift: Ec
    }, {
        key: "Home",
        run: t => pc(t, (e => Cc(t, e, !1))),
        shift: t => Tc(t, (e => Cc(t, e, !1))),
        preventDefault: !0
    }, {
        key: "Mod-Home",
        run: qc,
        shift: zc
    }, {
        key: "End",
        run: t => pc(t, (e => Cc(t, e, !0))),
        shift: t => Tc(t, (e => Cc(t, e, !0))),
        preventDefault: !0
    }, {
        key: "Mod-End",
        run: Ic,
        shift: Gc
    }, {
        key: "Enter",
        run: rO
    }, {
        key: "Mod-a",
        run: ({
            state: t,
            dispatch: e
        }) => (e(t.update({
            selection: {
                anchor: 0,
                head: t.doc.length
            },
            userEvent: "select"
        })), !0)
    }, {
        key: "Backspace",
        run: Hc,
        shift: Hc
    }, {
        key: "Delete",
        run: Fc
    }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Kc
    }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: t => Jc(t, !0)
    }, {
        mac: "Mod-Backspace",
        run: t => Nc(t, (e => {
            let i = t.lineBlockAt(e).from;
            return e > i ? i : Math.max(0, e - 1)
        }))
    }, {
        mac: "Mod-Delete",
        run: tO
    }].concat([{
        key: "Ctrl-b",
        run: Sc,
        shift: Ac,
        preventDefault: !0
    }, {
        key: "Ctrl-f",
        run: vc,
        shift: Yc
    }, {
        key: "Ctrl-p",
        run: $c,
        shift: Vc
    }, {
        key: "Ctrl-n",
        run: kc,
        shift: Mc
    }, {
        key: "Ctrl-a",
        run: t => pc(t, (e => ce.cursor(t.lineBlockAt(e.head).from, 1))),
        shift: t => Tc(t, (e => ce.cursor(t.lineBlockAt(e.head).from)))
    }, {
        key: "Ctrl-e",
        run: t => pc(t, (e => ce.cursor(t.lineBlockAt(e.head).to, -1))),
        shift: t => Tc(t, (e => ce.cursor(t.lineBlockAt(e.head).to)))
    }, {
        key: "Ctrl-d",
        run: Fc
    }, {
        key: "Ctrl-h",
        run: Hc
    }, {
        key: "Ctrl-k",
        run: tO
    }, {
        key: "Ctrl-Alt-h",
        run: Kc
    }, {
        key: "Ctrl-o",
        run: ({
            state: t,
            dispatch: e
        }) => {
            if (t.readOnly) return !1;
            let i = t.changeByRange((t => ({
                changes: {
                    from: t.from,
                    to: t.to,
                    insert: Tt.of(["", ""])
                },
                range: ce.cursor(t.from)
            })));
            return e(t.update(i, {
                scrollIntoView: !0,
                userEvent: "input"
            })), !0
        }
    }, {
        key: "Ctrl-t",
        run: ({
            state: t,
            dispatch: e
        }) => {
            if (t.readOnly) return !1;
            let i = t.changeByRange((e => {
                if (!e.empty || 0 == e.from || e.from == t.doc.length) return {
                    range: e
                };
                let i = e.from,
                    n = t.doc.lineAt(i),
                    r = i == n.from ? i - 1 : zt(n.text, i - n.from, !1) + n.from,
                    s = i == n.to ? i + 1 : zt(n.text, i - n.from, !0) + n.from;
                return {
                    changes: {
                        from: r,
                        to: s,
                        insert: t.doc.slice(i, s).append(t.doc.slice(r, i))
                    },
                    range: ce.cursor(s)
                }
            }));
            return !i.changes.empty && (e(t.update(i, {
                scrollIntoView: !0,
                userEvent: "move.character"
            })), !0)
        }
    }, {
        key: "Ctrl-v",
        run: Xc
    }].map((t => ({
        mac: t.key,
        run: t.run,
        shift: t.shift
    })))),
    OO = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: t => pc(t, (e => wc(t.state, e, !Qc(t)))),
        shift: t => Tc(t, (e => wc(t.state, e, !Qc(t))))
    }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: t => pc(t, (e => wc(t.state, e, Qc(t)))),
        shift: t => Tc(t, (e => wc(t.state, e, Qc(t))))
    }, {
        key: "Alt-ArrowUp",
        run: ({
            state: t,
            dispatch: e
        }) => iO(t, e, !1)
    }, {
        key: "Shift-Alt-ArrowUp",
        run: ({
            state: t,
            dispatch: e
        }) => nO(t, e, !1)
    }, {
        key: "Alt-ArrowDown",
        run: ({
            state: t,
            dispatch: e
        }) => iO(t, e, !0)
    }, {
        key: "Shift-Alt-ArrowDown",
        run: ({
            state: t,
            dispatch: e
        }) => nO(t, e, !0)
    }, {
        key: "Escape",
        run: ({
            state: t,
            dispatch: e
        }) => {
            let i = t.selection,
                n = null;
            return i.ranges.length > 1 ? n = ce.create([i.main]) : i.main.empty || (n = ce.create([ce.cursor(i.main.head)])), !!n && (e(dc(t, n)), !0)
        }
    }, {
        key: "Mod-Enter",
        run: sO
    }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: ({
            state: t,
            dispatch: e
        }) => {
            let i = eO(t).map((({
                from: e,
                to: i
            }) => ce.range(e, Math.min(i + 1, t.doc.length))));
            return e(t.update({
                selection: ce.create(i),
                userEvent: "select"
            })), !0
        }
    }, {
        key: "Mod-i",
        run: ({
            state: t,
            dispatch: e
        }) => {
            let i = fc(t.selection, (e => {
                var i;
                let n = Wa(t).resolveInner(e.head, 1);
                for (; !(n.from < e.from && n.to >= e.to || n.to > e.to && n.from <= e.from) && (null === (i = n.parent) || void 0 === i ? void 0 : i.parent);) n = n.parent;
                return ce.range(n.to, n.from)
            }));
            return e(dc(t, i)), !0
        },
        preventDefault: !0
    }, {
        key: "Mod-[",
        run: hO
    }, {
        key: "Mod-]",
        run: aO
    }, {
        key: "Mod-Alt-\\",
        run: ({
            state: t,
            dispatch: e
        }) => {
            if (t.readOnly) return !1;
            let i = Object.create(null),
                n = new La(t, {
                    overrideIndentation: t => {
                        let e = i[t];
                        return null == e ? -1 : e
                    }
                }),
                r = lO(t, ((e, r, s) => {
                    let o = Ba(n, e.from);
                    if (null == o) return;
                    /\S/.test(e.text) || (o = 0);
                    let l = /^\s*/.exec(e.text)[0],
                        a = Na(t, o);
                    (l != a || s.from < e.from + l.length) && (i[e.from] = o, r.push({
                        from: e.from,
                        to: e.from + l.length,
                        insert: a
                    }))
                }));
            return r.changes.empty || e(t.update(r, {
                userEvent: "indent"
            })), !0
        }
    }, {
        key: "Shift-Mod-k",
        run: t => {
            if (t.state.readOnly) return !1;
            let {
                state: e
            } = t, i = e.changes(eO(e).map((({
                from: t,
                to: i
            }) => (t > 0 ? t-- : i < e.doc.length && i++, {
                from: t,
                to: i
            })))), n = fc(e.selection, (e => t.moveVertically(e, !0))).map(i);
            return t.dispatch({
                changes: i,
                selection: n,
                scrollIntoView: !0,
                userEvent: "delete.line"
            }), !0
        }
    }, {
        key: "Shift-Mod-\\",
        run: ({
            state: t,
            dispatch: e
        }) => function(t, e, i) {
            let n = !1,
                r = fc(t.selection, (e => {
                    let r = _h(t, e.head, -1) || _h(t, e.head, 1) || e.head > 0 && _h(t, e.head - 1, 1) || e.head < t.doc.length && _h(t, e.head + 1, -1);
                    if (!r || !r.end) return e;
                    n = !0;
                    let s = r.start.from == e.head ? r.end.to : r.end.from;
                    return i ? ce.range(e.anchor, s) : ce.cursor(s)
                }));
            return !!n && (e(dc(t, r)), !0)
        }(t, e, !1)
    }, {
        key: "Mod-/",
        run: t => {
            let {
                state: e
            } = t, i = e.doc.lineAt(e.selection.main.head), n = jh(t.state, i.from);
            return n.line ? Uh(t) : !!n.block && Mh(t)
        }
    }, {
        key: "Alt-A",
        run: Vh
    }].concat(cO),
    uO = {
        key: "Tab",
        run: aO,
        shift: hO
    };
class fO {
    constructor(t, e, i) {
        this.state = t, this.pos = e, this.explicit = i, this.abortListeners = []
    }
    tokenBefore(t) {
        let e = Wa(this.state).resolveInner(this.pos, -1);
        for (; e && t.indexOf(e.name) < 0;) e = e.parent;
        return e ? {
            from: e.from,
            to: this.pos,
            text: this.state.sliceDoc(e.from, this.pos),
            type: e.type
        } : null
    }
    matchBefore(t) {
        let e = this.state.doc.lineAt(this.pos),
            i = Math.max(e.from, this.pos - 250),
            n = e.text.slice(i - e.from, this.pos - e.from),
            r = n.search(QO(t, !1));
        return r < 0 ? null : {
            from: i + r,
            to: this.pos,
            text: n.slice(r)
        }
    }
    get aborted() {
        return null == this.abortListeners
    }
    addEventListener(t, e) {
        "abort" == t && this.abortListeners && this.abortListeners.push(e)
    }
}

function dO(t) {
    let e = Object.keys(t).join(""),
        i = /\w/.test(e);
    return i && (e = e.replace(/\w/g, "")), `[${i?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`
}

function pO(t) {
    let e = t.map((t => "string" == typeof t ? {
            label: t
        } : t)),
        [i, n] = e.every((t => /^\w+$/.test(t.label))) ? [/\w*$/, /\w+$/] : function(t) {
            let e = Object.create(null),
                i = Object.create(null);
            for (let {
                    label: n
                }
                of t) {
                e[n[0]] = !0;
                for (let t = 1; t < n.length; t++) i[n[t]] = !0
            }
            let n = dO(e) + dO(i) + "*$";
            return [new RegExp("^" + n), new RegExp(n)]
        }(e);
    return t => {
        let r = t.matchBefore(n);
        return r || t.explicit ? {
            from: r ? r.from : t.pos,
            options: e,
            validFor: i
        } : null
    }
}
class gO {
    constructor(t, e, i) {
        this.completion = t, this.source = e, this.match = i
    }
}

function mO(t) {
    return t.selection.main.head
}

function QO(t, e) {
    var i;
    let {
        source: n
    } = t, r = e && "^" != n[0], s = "$" != n[n.length - 1];
    return r || s ? new RegExp(`${r?"^":""}(?:${n})${s?"$":""}`, null !== (i = t.flags) && void 0 !== i ? i : t.ignoreCase ? "i" : "") : t
}
const SO = Ue.define();

function vO(t, e) {
    const i = e.completion.apply || e.completion.label;
    let n = e.source;
    var r, s, o, l;
    "string" == typeof i ? t.dispatch(Object.assign(Object.assign({}, (r = t.state, s = i, o = n.from, l = n.to, Object.assign(Object.assign({}, r.changeByRange((t => {
        if (t == r.selection.main) return {
            changes: {
                from: o,
                to: l,
                insert: s
            },
            range: ce.cursor(o + s.length)
        };
        let e = l - o;
        return !t.empty || e && r.sliceDoc(t.from - e, t.from) != r.sliceDoc(o, l) ? {
            range: t
        } : {
            changes: {
                from: t.from - e,
                to: t.from,
                insert: s
            },
            range: ce.cursor(t.from - e + s.length)
        }
    }))), {
        userEvent: "input.complete"
    }))), {
        annotations: SO.of(e.completion)
    })) : i(t, e.completion, n.from, n.to)
}
const yO = new WeakMap;

function bO(t) {
    if (!Array.isArray(t)) return t;
    let e = yO.get(t);
    return e || yO.set(t, e = pO(t)), e
}
class wO {
    constructor(t) {
        this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [];
        for (let e = 0; e < t.length;) {
            let i = Ht(t, e),
                n = Jt(i);
            this.chars.push(i);
            let r = t.slice(e, e + n),
                s = r.toUpperCase();
            this.folded.push(Ht(s == r ? r.toLowerCase() : s, 0)), e += n
        }
        this.astral = t.length != this.chars.length
    }
    match(t) {
        if (0 == this.pattern.length) return [0];
        if (t.length < this.pattern.length) return null;
        let {
            chars: e,
            folded: i,
            any: n,
            precise: r,
            byWord: s
        } = this;
        if (1 == e.length) {
            let n = Ht(t, 0),
                r = Jt(n),
                s = r == t.length ? 0 : -100;
            if (n == e[0]);
            else {
                if (n != i[0]) return null;
                s += -200
            }
            return [s, 0, r]
        }
        let o = t.indexOf(this.pattern);
        if (0 == o) return [t.length == this.pattern.length ? 0 : -100, 0, this.pattern.length];
        let l = e.length,
            a = 0;
        if (o < 0) {
            for (let r = 0, s = Math.min(t.length, 200); r < s && a < l;) {
                let s = Ht(t, r);
                s != e[a] && s != i[a] || (n[a++] = r), r += Jt(s)
            }
            if (a < l) return null
        }
        let h = 0,
            c = 0,
            O = !1,
            u = 0,
            f = -1,
            d = -1,
            p = /[a-z]/.test(t),
            g = !0;
        for (let n = 0, a = Math.min(t.length, 200), m = 0; n < a && c < l;) {
            let a = Ht(t, n);
            o < 0 && (h < l && a == e[h] && (r[h++] = n), u < l && (a == e[u] || a == i[u] ? (0 == u && (f = n), d = n + 1, u++) : u = 0));
            let Q, S = a < 255 ? a >= 48 && a <= 57 || a >= 97 && a <= 122 ? 2 : a >= 65 && a <= 90 ? 1 : 0 : (Q = Ft(a)) != Q.toLowerCase() ? 1 : Q != Q.toUpperCase() ? 2 : 0;
            (!n || 1 == S && p || 0 == m && 0 != S) && (e[c] == a || i[c] == a && (O = !0) ? s[c++] = n : s.length && (g = !1)), m = S, n += Jt(a)
        }
        return c == l && 0 == s[0] && g ? this.result((O ? -200 : 0) - 100, s, t) : u == l && 0 == f ? [-200 - t.length + (d == t.length ? 0 : -100), 0, d] : o > -1 ? [-700 - t.length, o, o + this.pattern.length] : u == l ? [-900 - t.length, f, d] : c == l ? this.result((O ? -200 : 0) - 100 - 700 + (g ? 0 : -1100), s, t) : 2 == e.length ? null : this.result((n[0] ? -700 : 0) - 200 - 1100, n, t)
    }
    result(t, e, i) {
        let n = [t - i.length],
            r = 1;
        for (let t of e) {
            let e = t + (this.astral ? Jt(Ht(i, t)) : 1);
            r > 1 && n[r - 1] == t ? n[r - 1] = e : (n[r++] = t, n[r++] = e)
        }
        return n
    }
}
const xO = fe.define({
    combine: t => Ke(t, {
        activateOnTyping: !0,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        compareCompletions: (t, e) => t.label.localeCompare(e.label),
        interactionDelay: 75
    }, {
        defaultKeymap: (t, e) => t && e,
        closeOnBlur: (t, e) => t && e,
        icons: (t, e) => t && e,
        tooltipClass: (t, e) => i => $O(t(i), e(i)),
        optionClass: (t, e) => i => $O(t(i), e(i)),
        addToOptions: (t, e) => t.concat(e)
    })
});

function $O(t, e) {
    return t ? e ? t + " " + e : t : e
}

function kO(t, e, i) {
    if (t <= i) return {
        from: 0,
        to: t
    };
    if (e < 0 && (e = 0), e <= t >> 1) {
        let t = Math.floor(e / i);
        return {
            from: t * i,
            to: (t + 1) * i
        }
    }
    let n = Math.floor((t - e) / i);
    return {
        from: t - (n + 1) * i,
        to: t - n * i
    }
}
class PO {
    constructor(t, e) {
        this.view = t, this.stateField = e, this.info = null, this.placeInfo = {
            read: () => this.measureInfo(),
            write: t => this.positionInfo(t),
            key: this
        }, this.space = null, this.currentClass = "";
        let i = t.state.field(e),
            {
                options: n,
                selected: r
            } = i.open,
            s = t.state.facet(xO);
        this.optionContent = function(t) {
            let e = t.addToOptions.slice();
            return t.icons && e.push({
                render(t) {
                    let e = document.createElement("div");
                    return e.classList.add("cm-completionIcon"), t.type && e.classList.add(...t.type.split(/\s+/g).map((t => "cm-completionIcon-" + t))), e.setAttribute("aria-hidden", "true"), e
                },
                position: 20
            }), e.push({
                render(t, e, i) {
                    let n = document.createElement("span");
                    n.className = "cm-completionLabel";
                    let {
                        label: r
                    } = t, s = 0;
                    for (let t = 1; t < i.length;) {
                        let e = i[t++],
                            o = i[t++];
                        e > s && n.appendChild(document.createTextNode(r.slice(s, e)));
                        let l = n.appendChild(document.createElement("span"));
                        l.appendChild(document.createTextNode(r.slice(e, o))), l.className = "cm-completionMatchedText", s = o
                    }
                    return s < r.length && n.appendChild(document.createTextNode(r.slice(s))), n
                },
                position: 50
            }, {
                render(t) {
                    if (!t.detail) return null;
                    let e = document.createElement("span");
                    return e.className = "cm-completionDetail", e.textContent = t.detail, e
                },
                position: 80
            }), e.sort(((t, e) => t.position - e.position)).map((t => t.render))
        }(s), this.optionClass = s.optionClass, this.tooltipClass = s.tooltipClass, this.range = kO(n.length, r, s.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (e => {
            for (let i, r = e.target; r && r != this.dom; r = r.parentNode)
                if ("LI" == r.nodeName && (i = /-(\d+)$/.exec(r.id)) && +i[1] < n.length) return vO(t, n[+i[1]]), void e.preventDefault()
        })), this.list = this.dom.appendChild(this.createListBox(n, i.id, this.range)), this.list.addEventListener("scroll", (() => {
            this.info && this.view.requestMeasure(this.placeInfo)
        }))
    }
    mount() {
        this.updateSel()
    }
    update(t) {
        var e, i, n;
        let r = t.state.field(this.stateField),
            s = t.startState.field(this.stateField);
        this.updateTooltipClass(t.state), r != s && (this.updateSel(), (null === (e = r.open) || void 0 === e ? void 0 : e.disabled) != (null === (i = s.open) || void 0 === i ? void 0 : i.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!(null === (n = r.open) || void 0 === n ? void 0 : n.disabled)))
    }
    updateTooltipClass(t) {
        let e = this.tooltipClass(t);
        if (e != this.currentClass) {
            for (let t of this.currentClass.split(" ")) t && this.dom.classList.remove(t);
            for (let t of e.split(" ")) t && this.dom.classList.add(t);
            this.currentClass = e
        }
    }
    positioned(t) {
        this.space = t, this.info && this.view.requestMeasure(this.placeInfo)
    }
    updateSel() {
        let t = this.view.state.field(this.stateField),
            e = t.open;
        if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = kO(e.options.length, e.selected, this.view.state.facet(xO).maxRenderedOptions), this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e.options, t.id, this.range)), this.list.addEventListener("scroll", (() => {
                this.info && this.view.requestMeasure(this.placeInfo)
            }))), this.updateSelectedOption(e.selected)) {
            this.info && (this.info.remove(), this.info = null);
            let {
                completion: i
            } = e.options[e.selected], {
                info: n
            } = i;
            if (!n) return;
            let r = "string" == typeof n ? document.createTextNode(n) : n(i);
            if (!r) return;
            "then" in r ? r.then((e => {
                e && this.view.state.field(this.stateField, !1) == t && this.addInfoPane(e)
            })).catch((t => Kn(this.view.state, t, "completion info"))) : this.addInfoPane(r)
        }
    }
    addInfoPane(t) {
        let e = this.info = document.createElement("div");
        e.className = "cm-tooltip cm-completionInfo", e.appendChild(t), this.dom.appendChild(e), this.view.requestMeasure(this.placeInfo)
    }
    updateSelectedOption(t) {
        let e = null;
        for (let i = this.list.firstChild, n = this.range.from; i; i = i.nextSibling, n++) n == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
        return e && function(t, e) {
            let i = t.getBoundingClientRect(),
                n = e.getBoundingClientRect();
            n.top < i.top ? t.scrollTop -= i.top - n.top : n.bottom > i.bottom && (t.scrollTop += n.bottom - i.bottom)
        }(this.list, e), e
    }
    measureInfo() {
        let t = this.dom.querySelector("[aria-selected]");
        if (!t || !this.info) return null;
        let e = this.dom.getBoundingClientRect(),
            i = this.info.getBoundingClientRect(),
            n = t.getBoundingClientRect(),
            r = this.space;
        if (!r) {
            let t = this.dom.ownerDocument.defaultView || window;
            r = {
                left: 0,
                top: 0,
                right: t.innerWidth,
                bottom: t.innerHeight
            }
        }
        if (n.top > Math.min(r.bottom, e.bottom) - 10 || n.bottom < Math.max(r.top, e.top) + 10) return null;
        let s, o = this.view.textDirection == fr.RTL,
            l = o,
            a = !1,
            h = "",
            c = "",
            O = e.left - r.left,
            u = r.right - e.right;
        if (l && O < Math.min(i.width, u) ? l = !1 : !l && u < Math.min(i.width, O) && (l = !0), i.width <= (l ? O : u)) h = Math.max(r.top, Math.min(n.top, r.bottom - i.height)) - e.top + "px", s = Math.min(400, l ? O : u) + "px";
        else {
            a = !0, s = Math.min(400, (o ? e.right : r.right - e.left) - 30) + "px";
            let t = r.bottom - e.bottom;
            t >= i.height || t > e.top ? h = n.bottom - e.top + "px" : c = e.bottom - n.top + "px"
        }
        return {
            top: h,
            bottom: c,
            maxWidth: s,
            class: a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right"
        }
    }
    positionInfo(t) {
        this.info && (t ? (this.info.style.top = t.top, this.info.style.bottom = t.bottom, this.info.style.maxWidth = t.maxWidth, this.info.className = "cm-tooltip cm-completionInfo cm-completionInfo-" + t.class) : this.info.style.top = "-1e6px")
    }
    createListBox(t, e, i) {
        const n = document.createElement("ul");
        n.id = e, n.setAttribute("role", "listbox"), n.setAttribute("aria-expanded", "true"), n.setAttribute("aria-label", this.view.state.phrase("Completions"));
        for (let r = i.from; r < i.to; r++) {
            let {
                completion: i,
                match: s
            } = t[r];
            const o = n.appendChild(document.createElement("li"));
            o.id = e + "-" + r, o.setAttribute("role", "option");
            let l = this.optionClass(i);
            l && (o.className = l);
            for (let t of this.optionContent) {
                let e = t(i, this.view.state, s);
                e && o.appendChild(e)
            }
        }
        return i.from && n.classList.add("cm-completionListIncompleteTop"), i.to < t.length && n.classList.add("cm-completionListIncompleteBottom"), n
    }
}

function _O(t) {
    return 100 * (t.boost || 0) + (t.apply ? 10 : 0) + (t.info ? 5 : 0) + (t.type ? 1 : 0)
}
class ZO {
    constructor(t, e, i, n, r, s) {
        this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = n, this.selected = r, this.disabled = s
    }
    setSelected(t, e) {
        return t == this.selected || t >= this.options.length ? this : new ZO(this.options, TO(e, t), this.tooltip, this.timestamp, t, this.disabled)
    }
    static build(t, e, i, n, r) {
        let s = function(t, e) {
            let i = [],
                n = 0;
            for (let r of t)
                if (r.hasResult())
                    if (!1 === r.result.filter) {
                        let t = r.result.getMatch;
                        for (let e of r.result.options) {
                            let s = [1e9 - n++];
                            if (t)
                                for (let i of t(e)) s.push(i);
                            i.push(new gO(e, r, s))
                        }
                    } else {
                        let t, n = new wO(e.sliceDoc(r.from, r.to));
                        for (let e of r.result.options)(t = n.match(e.label)) && (null != e.boost && (t[0] += e.boost), i.push(new gO(e, r, t)))
                    } let r = [],
                s = null,
                o = e.facet(xO).compareCompletions;
            for (let t of i.sort(((t, e) => e.match[0] - t.match[0] || o(t.completion, e.completion)))) !s || s.label != t.completion.label || s.detail != t.completion.detail || null != s.type && null != t.completion.type && s.type != t.completion.type || s.apply != t.completion.apply ? r.push(t) : _O(t.completion) > _O(s) && (r[r.length - 1] = t), s = t.completion;
            return r
        }(t, e);
        if (!s.length) return n && t.some((t => 1 == t.state)) ? new ZO(n.options, n.attrs, n.tooltip, n.timestamp, n.selected, !0) : null;
        let o = e.facet(xO).selectOnOpen ? 0 : -1;
        if (n && n.selected != o && -1 != n.selected) {
            let t = n.options[n.selected].completion;
            for (let e = 0; e < s.length; e++)
                if (s[e].completion == t) {
                    o = e;
                    break
                }
        }
        return new ZO(s, TO(i, o), {
            pos: t.reduce(((t, e) => e.hasResult() ? Math.min(t, e.from) : t), 1e8),
            create: (l = DO, t => new PO(t, l)),
            above: r.aboveCursor
        }, n ? n.timestamp : Date.now(), o, !1);
        var l
    }
    map(t) {
        return new ZO(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
            pos: t.mapPos(this.tooltip.pos)
        }), this.timestamp, this.selected, this.disabled)
    }
}
class XO {
    constructor(t, e, i) {
        this.active = t, this.id = e, this.open = i
    }
    static start() {
        return new XO(WO, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
    }
    update(t) {
        let {
            state: e
        } = t, i = e.facet(xO), n = (i.override || e.languageDataAt("autocomplete", mO(e)).map(bO)).map((e => {
            let n = this.active.find((t => t.source == e)) || new YO(e, this.active.some((t => 0 != t.state)) ? 1 : 0);
            return n.update(t, i)
        }));
        n.length == this.active.length && n.every(((t, e) => t == this.active[e])) && (n = this.active);
        let r = this.open;
        r && t.docChanged && (r = r.map(t.changes)), t.selection || n.some((e => e.hasResult() && t.changes.touchesRange(e.from, e.to))) || ! function(t, e) {
            if (t == e) return !0;
            for (let i = 0, n = 0;;) {
                for (; i < t.length && !t[i].hasResult;) i++;
                for (; n < e.length && !e[n].hasResult;) n++;
                let r = i == t.length,
                    s = n == e.length;
                if (r || s) return r == s;
                if (t[i++].result != e[n++].result) return !1
            }
        }(n, this.active) ? r = ZO.build(n, e, this.id, r, i) : r && r.disabled && !n.some((t => 1 == t.state)) && (r = null), !r && n.every((t => 1 != t.state)) && n.some((t => t.hasResult())) && (n = n.map((t => t.hasResult() ? new YO(t.source, 0) : t)));
        for (let e of t.effects) e.is(jO) && (r = r && r.setSelected(e.value, this.id));
        return n == this.active && r == this.open ? this : new XO(n, this.id, r)
    }
    get tooltip() {
        return this.open ? this.open.tooltip : null
    }
    get attrs() {
        return this.open ? this.open.attrs : CO
    }
}
const CO = {
    "aria-autocomplete": "list"
};

function TO(t, e) {
    let i = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": t
    };
    return e > -1 && (i["aria-activedescendant"] = t + "-" + e), i
}
const WO = [];

function AO(t) {
    return t.isUserEvent("input.type") ? "input" : t.isUserEvent("delete.backward") ? "delete" : null
}
class YO {
    constructor(t, e, i = -1) {
        this.source = t, this.state = e, this.explicitPos = i
    }
    hasResult() {
        return !1
    }
    update(t, e) {
        let i = AO(t),
            n = this;
        i ? n = n.handleUserEvent(t, i, e) : t.docChanged ? n = n.handleChange(t) : t.selection && 0 != n.state && (n = new YO(n.source, 0));
        for (let e of t.effects)
            if (e.is(UO)) n = new YO(n.source, 1, e.value ? mO(t.state) : -1);
            else if (e.is(VO)) n = new YO(n.source, 0);
        else if (e.is(MO))
            for (let t of e.value) t.source == n.source && (n = t);
        return n
    }
    handleUserEvent(t, e, i) {
        return "delete" != e && i.activateOnTyping ? new YO(this.source, 1) : this.map(t.changes)
    }
    handleChange(t) {
        return t.changes.touchesRange(mO(t.startState)) ? new YO(this.source, 0) : this.map(t.changes)
    }
    map(t) {
        return t.empty || this.explicitPos < 0 ? this : new YO(this.source, this.state, t.mapPos(this.explicitPos))
    }
}
class RO extends YO {
    constructor(t, e, i, n, r) {
        super(t, 2, e), this.result = i, this.from = n, this.to = r
    }
    hasResult() {
        return !0
    }
    handleUserEvent(t, e, i) {
        var n;
        let r = t.changes.mapPos(this.from),
            s = t.changes.mapPos(this.to, 1),
            o = mO(t.state);
        if ((this.explicitPos < 0 ? o <= r : o < this.from) || o > s || "delete" == e && mO(t.startState) == this.from) return new YO(this.source, "input" == e && i.activateOnTyping ? 1 : 0);
        let l, a = this.explicitPos < 0 ? -1 : t.changes.mapPos(this.explicitPos);
        return function(t, e, i, n) {
            if (!t) return !1;
            let r = e.sliceDoc(i, n);
            return "function" == typeof t ? t(r, i, n, e) : QO(t, !0).test(r)
        }(this.result.validFor, t.state, r, s) ? new RO(this.source, a, this.result, r, s) : this.result.update && (l = this.result.update(this.result, r, s, new fO(t.state, o, a >= 0))) ? new RO(this.source, a, l, l.from, null !== (n = l.to) && void 0 !== n ? n : mO(t.state)) : new YO(this.source, 1, a)
    }
    handleChange(t) {
        return t.changes.touchesRange(this.from, this.to) ? new YO(this.source, 0) : this.map(t.changes)
    }
    map(t) {
        return t.empty ? this : new RO(this.source, this.explicitPos < 0 ? -1 : t.mapPos(this.explicitPos), this.result, t.mapPos(this.from), t.mapPos(this.to, 1))
    }
}
const UO = je.define(),
    VO = je.define(),
    MO = je.define({
        map: (t, e) => t.map((t => t.map(e)))
    }),
    jO = je.define(),
    DO = ve.define({
        create: () => XO.start(),
        update: (t, e) => t.update(e),
        provide: t => [nl.from(t, (t => t.tooltip)), oo.contentAttributes.from(t, (t => t.attrs))]
    });

function EO(t, e = "option") {
    return i => {
        let n = i.state.field(DO, !1);
        if (!n || !n.open || n.open.disabled || Date.now() - n.open.timestamp < i.state.facet(xO).interactionDelay) return !1;
        let r, s = 1;
        "page" == e && (r = function(t, e) {
            let i = t.plugin(tl);
            if (!i) return null;
            let n = i.manager.tooltips.indexOf(e);
            return n < 0 ? null : i.manager.tooltipViews[n]
        }(i, n.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
        let {
            length: o
        } = n.open.options, l = n.open.selected > -1 ? n.open.selected + s * (t ? 1 : -1) : t ? 0 : o - 1;
        return l < 0 ? l = "page" == e ? 0 : o - 1 : l >= o && (l = "page" == e ? o - 1 : 0), i.dispatch({
            effects: jO.of(l)
        }), !0
    }
}
class qO {
    constructor(t, e) {
        this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0
    }
}
const IO = nr.fromClass(class {
        constructor(t) {
            this.view = t, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.composing = 0;
            for (let e of t.state.field(DO).active) 1 == e.state && this.startQuery(e)
        }
        update(t) {
            let e = t.state.field(DO);
            if (!t.selectionSet && !t.docChanged && t.startState.field(DO) == e) return;
            let i = t.transactions.some((t => (t.selection || t.docChanged) && !AO(t)));
            for (let e = 0; e < this.running.length; e++) {
                let n = this.running[e];
                if (i || n.updates.length + t.transactions.length > 50 && Date.now() - n.time > 1e3) {
                    for (let t of n.context.abortListeners) try {
                        t()
                    } catch (t) {
                        Kn(this.view.state, t)
                    }
                    n.context.abortListeners = null, this.running.splice(e--, 1)
                } else n.updates.push(...t.transactions)
            }
            if (this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), this.debounceUpdate = e.active.some((t => 1 == t.state && !this.running.some((e => e.active.source == t.source)))) ? setTimeout((() => this.startUpdate()), 50) : -1, 0 != this.composing)
                for (let e of t.transactions) "input" == AO(e) ? this.composing = 2 : 2 == this.composing && e.selection && (this.composing = 3)
        }
        startUpdate() {
            this.debounceUpdate = -1;
            let {
                state: t
            } = this.view, e = t.field(DO);
            for (let t of e.active) 1 != t.state || this.running.some((e => e.active.source == t.source)) || this.startQuery(t)
        }
        startQuery(t) {
            let {
                state: e
            } = this.view, i = mO(e), n = new fO(e, i, t.explicitPos == i), r = new qO(t, n);
            this.running.push(r), Promise.resolve(t.source(n)).then((t => {
                r.context.aborted || (r.done = t || null, this.scheduleAccept())
            }), (t => {
                this.view.dispatch({
                    effects: VO.of(null)
                }), Kn(this.view.state, t)
            }))
        }
        scheduleAccept() {
            this.running.every((t => void 0 !== t.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), 50))
        }
        accept() {
            var t;
            this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
            let e = [],
                i = this.view.state.facet(xO);
            for (let n = 0; n < this.running.length; n++) {
                let r = this.running[n];
                if (void 0 === r.done) continue;
                if (this.running.splice(n--, 1), r.done) {
                    let n = new RO(r.active.source, r.active.explicitPos, r.done, r.done.from, null !== (t = r.done.to) && void 0 !== t ? t : mO(r.updates.length ? r.updates[0].startState : this.view.state));
                    for (let t of r.updates) n = n.update(t, i);
                    if (n.hasResult()) {
                        e.push(n);
                        continue
                    }
                }
                let s = this.view.state.field(DO).active.find((t => t.source == r.active.source));
                if (s && 1 == s.state)
                    if (null == r.done) {
                        let t = new YO(r.active.source, 0);
                        for (let e of r.updates) t = t.update(e, i);
                        1 != t.state && e.push(t)
                    } else this.startQuery(s)
            }
            e.length && this.view.dispatch({
                effects: MO.of(e)
            })
        }
    }, {
        eventHandlers: {
            blur() {
                let t = this.view.state.field(DO, !1);
                t && t.tooltip && this.view.state.facet(xO).closeOnBlur && this.view.dispatch({
                    effects: VO.of(null)
                })
            },
            compositionstart() {
                this.composing = 1
            },
            compositionend() {
                3 == this.composing && setTimeout((() => this.view.dispatch({
                    effects: UO.of(!1)
                })), 20), this.composing = 0
            }
        }
    }),
    zO = oo.baseTheme({
        ".cm-tooltip.cm-tooltip-autocomplete": {
            "& > ul": {
                fontFamily: "monospace",
                whiteSpace: "nowrap",
                overflow: "hidden auto",
                maxWidth_fallback: "700px",
                maxWidth: "min(700px, 95vw)",
                minWidth: "250px",
                maxHeight: "10em",
                height: "100%",
                listStyle: "none",
                margin: 0,
                padding: 0,
                "& > li": {
                    overflowX: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                    padding: "1px 3px",
                    lineHeight: 1.2
                }
            }
        },
        "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
            background: "#17c",
            color: "white"
        },
        "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
            background: "#777"
        },
        "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
            background: "#347",
            color: "white"
        },
        "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
            background: "#444"
        },
        ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
            content: '"···"',
            opacity: .5,
            display: "block",
            textAlign: "center"
        },
        ".cm-tooltip.cm-completionInfo": {
            position: "absolute",
            padding: "3px 9px",
            width: "max-content",
            maxWidth: "400px",
            boxSizing: "border-box"
        },
        ".cm-completionInfo.cm-completionInfo-left": {
            right: "100%"
        },
        ".cm-completionInfo.cm-completionInfo-right": {
            left: "100%"
        },
        ".cm-completionInfo.cm-completionInfo-left-narrow": {
            right: "30px"
        },
        ".cm-completionInfo.cm-completionInfo-right-narrow": {
            left: "30px"
        },
        "&light .cm-snippetField": {
            backgroundColor: "#00000022"
        },
        "&dark .cm-snippetField": {
            backgroundColor: "#ffffff22"
        },
        ".cm-snippetFieldPosition": {
            verticalAlign: "text-top",
            width: 0,
            height: "1.15em",
            display: "inline-block",
            margin: "0 -0.7px -.7em",
            borderLeft: "1.4px dotted #888"
        },
        ".cm-completionMatchedText": {
            textDecoration: "underline"
        },
        ".cm-completionDetail": {
            marginLeft: "0.5em",
            fontStyle: "italic"
        },
        ".cm-completionIcon": {
            fontSize: "90%",
            width: ".8em",
            display: "inline-block",
            textAlign: "center",
            paddingRight: ".6em",
            opacity: "0.6",
            boxSizing: "content-box"
        },
        ".cm-completionIcon-function, .cm-completionIcon-method": {
            "&:after": {
                content: "'ƒ'"
            }
        },
        ".cm-completionIcon-class": {
            "&:after": {
                content: "'○'"
            }
        },
        ".cm-completionIcon-interface": {
            "&:after": {
                content: "'◌'"
            }
        },
        ".cm-completionIcon-variable": {
            "&:after": {
                content: "'𝑥'"
            }
        },
        ".cm-completionIcon-constant": {
            "&:after": {
                content: "'𝐶'"
            }
        },
        ".cm-completionIcon-type": {
            "&:after": {
                content: "'𝑡'"
            }
        },
        ".cm-completionIcon-enum": {
            "&:after": {
                content: "'∪'"
            }
        },
        ".cm-completionIcon-property": {
            "&:after": {
                content: "'□'"
            }
        },
        ".cm-completionIcon-keyword": {
            "&:after": {
                content: "'🔑︎'"
            }
        },
        ".cm-completionIcon-namespace": {
            "&:after": {
                content: "'▢'"
            }
        },
        ".cm-completionIcon-text": {
            "&:after": {
                content: "'abc'",
                fontSize: "50%",
                verticalAlign: "middle"
            }
        }
    });
class GO {
    constructor(t, e, i, n) {
        this.field = t, this.line = e, this.from = i, this.to = n
    }
}
class NO {
    constructor(t, e, i) {
        this.field = t, this.from = e, this.to = i
    }
    map(t) {
        let e = t.mapPos(this.from, -1, te.TrackDel),
            i = t.mapPos(this.to, 1, te.TrackDel);
        return null == e || null == i ? null : new NO(this.field, e, i)
    }
}
class BO {
    constructor(t, e) {
        this.lines = t, this.fieldPositions = e
    }
    instantiate(t, e) {
        let i = [],
            n = [e],
            r = t.doc.lineAt(e),
            s = /^\s*/.exec(r.text)[0];
        for (let r of this.lines) {
            if (i.length) {
                let i = s,
                    o = /^\t*/.exec(r)[0].length;
                for (let e = 0; e < o; e++) i += t.facet(za);
                n.push(e + i.length - o), r = i + r.slice(o)
            }
            i.push(r), e += r.length + 1
        }
        let o = this.fieldPositions.map((t => new NO(t.field, n[t.line] + t.from, n[t.line] + t.to)));
        return {
            text: i,
            ranges: o
        }
    }
    static parse(t) {
        let e, i = [],
            n = [],
            r = [];
        for (let s of t.split(/\r\n?|\n/)) {
            for (; e = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s);) {
                let t = e[1] ? +e[1] : null,
                    o = e[2] || e[3] || "",
                    l = -1;
                for (let e = 0; e < i.length; e++)(null != t ? i[e].seq == t : o && i[e].name == o) && (l = e);
                if (l < 0) {
                    let e = 0;
                    for (; e < i.length && (null == t || null != i[e].seq && i[e].seq < t);) e++;
                    i.splice(e, 0, {
                        seq: t,
                        name: o
                    }), l = e;
                    for (let t of r) t.field >= l && t.field++
                }
                r.push(new GO(l, n.length, e.index, e.index + o.length)), s = s.slice(0, e.index) + o + s.slice(e.index + e[0].length)
            }
            for (let t; t = /\\([{}])/.exec(s);) {
                s = s.slice(0, t.index) + t[1] + s.slice(t.index + t[0].length);
                for (let e of r) e.line == n.length && e.from > t.index && (e.from--, e.to--)
            }
            n.push(s)
        }
        return new BO(n, r)
    }
}
let LO = Cn.widget({
        widget: new class extends Zn {
            toDOM() {
                let t = document.createElement("span");
                return t.className = "cm-snippetFieldPosition", t
            }
            ignoreEvent() {
                return !1
            }
        }
    }),
    HO = Cn.mark({
        class: "cm-snippetField"
    });
class FO {
    constructor(t, e) {
        this.ranges = t, this.active = e, this.deco = Cn.set(t.map((t => (t.from == t.to ? LO : HO).range(t.from, t.to))))
    }
    map(t) {
        let e = [];
        for (let i of this.ranges) {
            let n = i.map(t);
            if (!n) return null;
            e.push(n)
        }
        return new FO(e, this.active)
    }
    selectionInsideField(t) {
        return t.ranges.every((t => this.ranges.some((e => e.field == this.active && e.from <= t.from && e.to >= t.to))))
    }
}
const JO = je.define({
        map: (t, e) => t && t.map(e)
    }),
    KO = je.define(),
    tu = ve.define({
        create: () => null,
        update(t, e) {
            for (let i of e.effects) {
                if (i.is(JO)) return i.value;
                if (i.is(KO) && t) return new FO(t.ranges, i.value)
            }
            return t && e.docChanged && (t = t.map(e.changes)), t && e.selection && !t.selectionInsideField(e.selection) && (t = null), t
        },
        provide: t => oo.decorations.from(t, (t => t ? t.deco : Cn.none))
    });

function eu(t, e) {
    return ce.create(t.filter((t => t.field == e)).map((t => ce.range(t.from, t.to))))
}

function iu(t) {
    let e = BO.parse(t);
    return (t, i, n, r) => {
        let {
            text: s,
            ranges: o
        } = e.instantiate(t.state, n), l = {
            changes: {
                from: n,
                to: r,
                insert: Tt.of(s)
            },
            scrollIntoView: !0,
            annotations: SO.of(i)
        };
        if (o.length && (l.selection = eu(o, 0)), o.length > 1) {
            let e = new FO(o, 0),
                i = l.effects = [JO.of(e)];
            void 0 === t.state.field(tu, !1) && i.push(je.appendConfig.of([tu, ou, au, zO]))
        }
        t.dispatch(t.state.update(l))
    }
}

function nu(t) {
    return ({
        state: e,
        dispatch: i
    }) => {
        let n = e.field(tu, !1);
        if (!n || t < 0 && 0 == n.active) return !1;
        let r = n.active + t,
            s = t > 0 && !n.ranges.some((e => e.field == r + t));
        return i(e.update({
            selection: eu(n.ranges, r),
            effects: JO.of(s ? null : new FO(n.ranges, r))
        })), !0
    }
}
const ru = [{
        key: "Tab",
        run: nu(1),
        shift: nu(-1)
    }, {
        key: "Escape",
        run: ({
            state: t,
            dispatch: e
        }) => !!t.field(tu, !1) && (e(t.update({
            effects: JO.of(null)
        })), !0)
    }],
    su = fe.define({
        combine: t => t.length ? t[0] : ru
    }),
    ou = we.highest(po.compute([su], (t => t.facet(su))));

function lu(t, e) {
    return Object.assign(Object.assign({}, e), {
        apply: iu(t)
    })
}
const au = oo.domEventHandlers({
        mousedown(t, e) {
            let i, n = e.state.field(tu, !1);
            if (!n || null == (i = e.posAtCoords({
                    x: t.clientX,
                    y: t.clientY
                }))) return !1;
            let r = n.ranges.find((t => t.from <= i && t.to >= i));
            return !(!r || r.field == n.active) && (e.dispatch({
                selection: eu(n.ranges, r.field),
                effects: JO.of(n.ranges.some((t => t.field > r.field)) ? new FO(n.ranges, r.field) : null)
            }), !0)
        }
    }),
    hu = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
    },
    cu = je.define({
        map(t, e) {
            let i = e.mapPos(t, -1, te.TrackAfter);
            return null == i ? void 0 : i
        }
    }),
    Ou = je.define({
        map: (t, e) => e.mapPos(t)
    }),
    uu = new class extends ti {};
uu.startSide = 1, uu.endSide = -1;
const fu = ve.define({
    create: () => ri.empty,
    update(t, e) {
        if (e.selection) {
            let i = e.state.doc.lineAt(e.selection.main.head).from,
                n = e.startState.doc.lineAt(e.startState.selection.main.head).from;
            i != e.changes.mapPos(n, -1) && (t = ri.empty)
        }
        t = t.map(e.changes);
        for (let i of e.effects) i.is(cu) ? t = t.update({
            add: [uu.range(i.value, i.value + 1)]
        }) : i.is(Ou) && (t = t.update({
            filter: t => t != i.value
        }));
        return t
    }
});
const du = "()[]{}<>";

function pu(t) {
    for (let e = 0; e < du.length; e += 2)
        if (du.charCodeAt(e) == t) return du.charAt(e + 1);
    return Ft(t < 128 ? t : t + 1)
}

function gu(t, e) {
    return t.languageDataAt("closeBrackets", e)[0] || hu
}
const mu = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
    Qu = oo.inputHandler.of(((t, e, i, n) => {
        if ((mu ? t.composing : t.compositionStarted) || t.state.readOnly) return !1;
        let r = t.state.selection.main;
        if (n.length > 2 || 2 == n.length && 1 == Jt(Ht(n, 0)) || e != r.from || i != r.to) return !1;
        let s = function(t, e) {
            let i = gu(t, t.selection.main.head),
                n = i.brackets || hu.brackets;
            for (let r of n) {
                let s = pu(Ht(r, 0));
                if (e == r) return s == r ? xu(t, r, n.indexOf(r + r + r) > -1, i) : bu(t, r, s, i.before || hu.before);
                if (e == s && vu(t, t.selection.main.from)) return wu(t, r, s)
            }
            return null
        }(t.state, n);
        return !!s && (t.dispatch(s), !0)
    })),
    Su = [{
        key: "Backspace",
        run: ({
            state: t,
            dispatch: e
        }) => {
            if (t.readOnly) return !1;
            let i = gu(t, t.selection.main.head).brackets || hu.brackets,
                n = null,
                r = t.changeByRange((e => {
                    if (e.empty) {
                        let n = function(t, e) {
                            let i = t.sliceString(e - 2, e);
                            return Jt(Ht(i, 0)) == i.length ? i : i.slice(1)
                        }(t.doc, e.head);
                        for (let r of i)
                            if (r == n && yu(t.doc, e.head) == pu(Ht(r, 0))) return {
                                changes: {
                                    from: e.head - r.length,
                                    to: e.head + r.length
                                },
                                range: ce.cursor(e.head - r.length)
                            }
                    }
                    return {
                        range: n = e
                    }
                }));
            return n || e(t.update(r, {
                scrollIntoView: !0,
                userEvent: "delete.backward"
            })), !n
        }
    }];

function vu(t, e) {
    let i = !1;
    return t.field(fu).between(0, t.doc.length, (t => {
        t == e && (i = !0)
    })), i
}

function yu(t, e) {
    let i = t.sliceString(e, e + 2);
    return i.slice(0, Jt(Ht(i, 0)))
}

function bu(t, e, i, n) {
    let r = null,
        s = t.changeByRange((s => {
            if (!s.empty) return {
                changes: [{
                    insert: e,
                    from: s.from
                }, {
                    insert: i,
                    from: s.to
                }],
                effects: cu.of(s.to + e.length),
                range: ce.range(s.anchor + e.length, s.head + e.length)
            };
            let o = yu(t.doc, s.head);
            return !o || /\s/.test(o) || n.indexOf(o) > -1 ? {
                changes: {
                    insert: e + i,
                    from: s.head
                },
                effects: cu.of(s.head + e.length),
                range: ce.cursor(s.head + e.length)
            } : {
                range: r = s
            }
        }));
    return r ? null : t.update(s, {
        scrollIntoView: !0,
        userEvent: "input.type"
    })
}

function wu(t, e, i) {
    let n = null,
        r = t.selection.ranges.map((e => e.empty && yu(t.doc, e.head) == i ? ce.cursor(e.head + i.length) : n = e));
    return n ? null : t.update({
        selection: ce.create(r, t.selection.mainIndex),
        scrollIntoView: !0,
        effects: t.selection.ranges.map((({
            from: t
        }) => Ou.of(t)))
    })
}

function xu(t, e, i, n) {
    let r = n.stringPrefixes || hu.stringPrefixes,
        s = null,
        o = t.changeByRange((n => {
            if (!n.empty) return {
                changes: [{
                    insert: e,
                    from: n.from
                }, {
                    insert: e,
                    from: n.to
                }],
                effects: cu.of(n.to + e.length),
                range: ce.range(n.anchor + e.length, n.head + e.length)
            };
            let o, l = n.head,
                a = yu(t.doc, l);
            if (a == e) {
                if ($u(t, l)) return {
                    changes: {
                        insert: e + e,
                        from: l
                    },
                    effects: cu.of(l + e.length),
                    range: ce.cursor(l + e.length)
                };
                if (vu(t, l)) {
                    let n = i && t.sliceDoc(l, l + 3 * e.length) == e + e + e;
                    return {
                        range: ce.cursor(l + e.length * (n ? 3 : 1)),
                        effects: Ou.of(l)
                    }
                }
            } else {
                if (i && t.sliceDoc(l - 2 * e.length, l) == e + e && (o = ku(t, l - 2 * e.length, r)) > -1 && $u(t, o)) return {
                    changes: {
                        insert: e + e + e + e,
                        from: l
                    },
                    effects: cu.of(l + e.length),
                    range: ce.cursor(l + e.length)
                };
                if (t.charCategorizer(l)(a) != Be.Word && ku(t, l, r) > -1 && ! function(t, e, i, n) {
                        let r = Wa(t).resolveInner(e, -1),
                            s = n.reduce(((t, e) => Math.max(t, e.length)), 0);
                        for (let o = 0; o < 5; o++) {
                            let o = t.sliceDoc(r.from, Math.min(r.to, r.from + i.length + s)),
                                l = o.indexOf(i);
                            if (!l || l > -1 && n.indexOf(o.slice(0, l)) > -1) {
                                let e = r.firstChild;
                                for (; e && e.from == r.from && e.to - e.from > i.length + l;) {
                                    if (t.sliceDoc(e.to - i.length, e.to) == i) return !1;
                                    e = e.firstChild
                                }
                                return !0
                            }
                            let a = r.to == e && r.parent;
                            if (!a) break;
                            r = a
                        }
                        return !1
                    }(t, l, e, r)) return {
                    changes: {
                        insert: e + e,
                        from: l
                    },
                    effects: cu.of(l + e.length),
                    range: ce.cursor(l + e.length)
                }
            }
            return {
                range: s = n
            }
        }));
    return s ? null : t.update(o, {
        scrollIntoView: !0,
        userEvent: "input.type"
    })
}

function $u(t, e) {
    let i = Wa(t).resolveInner(e + 1);
    return i.parent && i.from == e
}

function ku(t, e, i) {
    let n = t.charCategorizer(e);
    if (n(t.sliceDoc(e - 1, e)) != Be.Word) return e;
    for (let r of i) {
        let i = e - r.length;
        if (t.sliceDoc(i, e) == r && n(t.sliceDoc(i - 1, i)) != Be.Word) return i
    }
    return -1
}

function Pu(t = {}) {
    return [DO, xO.of(t), IO, Zu, zO]
}
const _u = [{
        key: "Ctrl-Space",
        run: t => !!t.state.field(DO, !1) && (t.dispatch({
            effects: UO.of(!0)
        }), !0)
    }, {
        key: "Escape",
        run: t => {
            let e = t.state.field(DO, !1);
            return !(!e || !e.active.some((t => 0 != t.state))) && (t.dispatch({
                effects: VO.of(null)
            }), !0)
        }
    }, {
        key: "ArrowDown",
        run: EO(!0)
    }, {
        key: "ArrowUp",
        run: EO(!1)
    }, {
        key: "PageDown",
        run: EO(!0, "page")
    }, {
        key: "PageUp",
        run: EO(!1, "page")
    }, {
        key: "Enter",
        run: t => {
            let e = t.state.field(DO, !1);
            return !(t.state.readOnly || !e || !e.open || e.open.selected < 0 || Date.now() - e.open.timestamp < t.state.facet(xO).interactionDelay) && (e.open.disabled || vO(t, e.open.options[e.open.selected]), !0)
        }
    }],
    Zu = we.highest(po.computeN([xO], (t => t.facet(xO).defaultKeymap ? [_u] : [])));
class Xu {
    constructor(t, e, i, n, r, s, o, l, a, h = 0, c) {
        this.p = t, this.stack = e, this.state = i, this.reducePos = n, this.pos = r, this.score = s, this.buffer = o, this.bufferBase = l, this.curContext = a, this.lookAhead = h, this.parent = c
    }
    toString() {
        return `[${this.stack.filter(((t,e)=>e%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
    }
    static start(t, e, i = 0) {
        let n = t.parser.context;
        return new Xu(t, [], e, i, i, 0, [], 0, n ? new Cu(n, n.start) : null, 0, null)
    }
    get context() {
        return this.curContext ? this.curContext.context : null
    }
    pushState(t, e) {
        this.stack.push(this.state, e, this.bufferBase + this.buffer.length), this.state = t
    }
    reduce(t) {
        var e;
        let i = t >> 19,
            n = 65535 & t,
            {
                parser: r
            } = this.p,
            s = r.dynamicPrecedence(n);
        if (s && (this.score += s), 0 == i) return this.pushState(r.getGoto(this.state, n, !0), this.reducePos), n < r.minRepeatTerm && this.storeNode(n, this.reducePos, this.reducePos, 4, !0), void this.reduceContext(n, this.reducePos);
        let o = this.stack.length - 3 * (i - 1) - (262144 & t ? 6 : 0),
            l = o ? this.stack[o - 2] : this.p.ranges[0].from,
            a = this.reducePos - l;
        a >= 2e3 && !(null === (e = this.p.parser.nodeSet.types[n]) || void 0 === e ? void 0 : e.isAnonymous) && (l == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = a) : this.p.lastBigReductionSize < a && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = l, this.p.lastBigReductionSize = a));
        let h = o ? this.stack[o - 1] : 0,
            c = this.bufferBase + this.buffer.length - h;
        if (n < r.minRepeatTerm || 131072 & t) {
            let t = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
            this.storeNode(n, l, t, c + 4, !0)
        }
        if (262144 & t) this.state = this.stack[o];
        else {
            let t = this.stack[o - 3];
            this.state = r.getGoto(t, n, !0)
        }
        for (; this.stack.length > o;) this.stack.pop();
        this.reduceContext(n, l)
    }
    storeNode(t, e, i, n = 4, r = !1) {
        if (0 == t && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
            let t = this,
                n = this.buffer.length;
            if (0 == n && t.parent && (n = t.bufferBase - t.parent.bufferBase, t = t.parent), n > 0 && 0 == t.buffer[n - 4] && t.buffer[n - 1] > -1) {
                if (e == i) return;
                if (t.buffer[n - 2] >= e) return void(t.buffer[n - 2] = i)
            }
        }
        if (r && this.pos != i) {
            let r = this.buffer.length;
            if (r > 0 && 0 != this.buffer[r - 4])
                for (; r > 0 && this.buffer[r - 2] > i;) this.buffer[r] = this.buffer[r - 4], this.buffer[r + 1] = this.buffer[r - 3], this.buffer[r + 2] = this.buffer[r - 2], this.buffer[r + 3] = this.buffer[r - 1], r -= 4, n > 4 && (n -= 4);
            this.buffer[r] = t, this.buffer[r + 1] = e, this.buffer[r + 2] = i, this.buffer[r + 3] = n
        } else this.buffer.push(t, e, i, n)
    }
    shift(t, e, i) {
        let n = this.pos;
        if (131072 & t) this.pushState(65535 & t, this.pos);
        else if (0 == (262144 & t)) {
            let r = t,
                {
                    parser: s
                } = this.p;
            (i > this.pos || e <= s.maxNode) && (this.pos = i, s.stateFlag(r, 1) || (this.reducePos = i)), this.pushState(r, n), this.shiftContext(e, n), e <= s.maxNode && this.buffer.push(e, n, i, 4)
        } else this.pos = i, this.shiftContext(e, n), e <= this.p.parser.maxNode && this.buffer.push(e, n, i, 4)
    }
    apply(t, e, i) {
        65536 & t ? this.reduce(t) : this.shift(t, e, i)
    }
    useNode(t, e) {
        let i = this.p.reused.length - 1;
        (i < 0 || this.p.reused[i] != t) && (this.p.reused.push(t), i++);
        let n = this.pos;
        this.reducePos = this.pos = n + t.length, this.pushState(e, n), this.buffer.push(i, n, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, t, this, this.p.stream.reset(this.pos - t.length)))
    }
    split() {
        let t = this,
            e = t.buffer.length;
        for (; e > 0 && t.buffer[e - 2] > t.reducePos;) e -= 4;
        let i = t.buffer.slice(e),
            n = t.bufferBase + e;
        for (; t && n == t.bufferBase;) t = t.parent;
        return new Xu(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, i, n, this.curContext, this.lookAhead, t)
    }
    recoverByDelete(t, e) {
        let i = t <= this.p.parser.maxNode;
        i && this.storeNode(t, this.pos, e, 4), this.storeNode(0, this.pos, e, i ? 8 : 4), this.pos = this.reducePos = e, this.score -= 190
    }
    canShift(t) {
        for (let e = new Wu(this);;) {
            let i = this.p.parser.stateSlot(e.state, 4) || this.p.parser.hasAction(e.state, t);
            if (0 == i) return !1;
            if (0 == (65536 & i)) return !0;
            e.reduce(i)
        }
    }
    recoverByInsert(t) {
        if (this.stack.length >= 300) return [];
        let e = this.p.parser.nextStates(this.state);
        if (e.length > 8 || this.stack.length >= 120) {
            let i = [];
            for (let n, r = 0; r < e.length; r += 2)(n = e[r + 1]) != this.state && this.p.parser.hasAction(n, t) && i.push(e[r], n);
            if (this.stack.length < 120)
                for (let t = 0; i.length < 8 && t < e.length; t += 2) {
                    let n = e[t + 1];
                    i.some(((t, e) => 1 & e && t == n)) || i.push(e[t], n)
                }
            e = i
        }
        let i = [];
        for (let t = 0; t < e.length && i.length < 4; t += 2) {
            let n = e[t + 1];
            if (n == this.state) continue;
            let r = this.split();
            r.pushState(n, this.pos), r.storeNode(0, r.pos, r.pos, 4, !0), r.shiftContext(e[t], this.pos), r.score -= 200, i.push(r)
        }
        return i
    }
    forceReduce() {
        let t = this.p.parser.stateSlot(this.state, 5);
        if (0 == (65536 & t)) return !1;
        let {
            parser: e
        } = this.p;
        if (!e.validAction(this.state, t)) {
            let i = t >> 19,
                n = 65535 & t,
                r = this.stack.length - 3 * i;
            if (r < 0 || e.getGoto(this.stack[r], n, !1) < 0) return !1;
            this.storeNode(0, this.reducePos, this.reducePos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(t), !0
    }
    forceAll() {
        for (; !this.p.parser.stateFlag(this.state, 2);)
            if (!this.forceReduce()) {
                this.storeNode(0, this.pos, this.pos, 4, !0);
                break
            } return this
    }
    get deadEnd() {
        if (3 != this.stack.length) return !1;
        let {
            parser: t
        } = this.p;
        return 65535 == t.data[t.stateSlot(this.state, 1)] && !t.stateSlot(this.state, 4)
    }
    restart() {
        this.state = this.stack[0], this.stack.length = 0
    }
    sameState(t) {
        if (this.state != t.state || this.stack.length != t.stack.length) return !1;
        for (let e = 0; e < this.stack.length; e += 3)
            if (this.stack[e] != t.stack[e]) return !1;
        return !0
    }
    get parser() {
        return this.p.parser
    }
    dialectEnabled(t) {
        return this.p.parser.dialect.flags[t]
    }
    shiftContext(t, e) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, t, this, this.p.stream.reset(e)))
    }
    reduceContext(t, e) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, t, this, this.p.stream.reset(e)))
    }
    emitContext() {
        let t = this.buffer.length - 1;
        (t < 0 || -3 != this.buffer[t]) && this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3)
    }
    emitLookAhead() {
        let t = this.buffer.length - 1;
        (t < 0 || -4 != this.buffer[t]) && this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4)
    }
    updateContext(t) {
        if (t != this.curContext.context) {
            let e = new Cu(this.curContext.tracker, t);
            e.hash != this.curContext.hash && this.emitContext(), this.curContext = e
        }
    }
    setLookAhead(t) {
        t > this.lookAhead && (this.emitLookAhead(), this.lookAhead = t)
    }
    close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
    }
}
class Cu {
    constructor(t, e) {
        this.tracker = t, this.context = e, this.hash = t.strict ? t.hash(e) : 0
    }
}
var Tu;
! function(t) {
    t[t.Insert = 200] = "Insert", t[t.Delete = 190] = "Delete", t[t.Reduce = 100] = "Reduce", t[t.MaxNext = 4] = "MaxNext", t[t.MaxInsertStackDepth = 300] = "MaxInsertStackDepth", t[t.DampenInsertStackDepth = 120] = "DampenInsertStackDepth", t[t.MinBigReduction = 2e3] = "MinBigReduction"
}(Tu || (Tu = {}));
class Wu {
    constructor(t) {
        this.start = t, this.state = t.state, this.stack = t.stack, this.base = this.stack.length
    }
    reduce(t) {
        let e = 65535 & t,
            i = t >> 19;
        0 == i ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (i - 1);
        let n = this.start.p.parser.getGoto(this.stack[this.base - 3], e, !0);
        this.state = n
    }
}
class Au {
    constructor(t, e, i) {
        this.stack = t, this.pos = e, this.index = i, this.buffer = t.buffer, 0 == this.index && this.maybeNext()
    }
    static create(t, e = t.bufferBase + t.buffer.length) {
        return new Au(t, e, e - t.bufferBase)
    }
    maybeNext() {
        let t = this.stack.parent;
        null != t && (this.index = this.stack.bufferBase - t.bufferBase, this.stack = t, this.buffer = t.buffer)
    }
    get id() {
        return this.buffer[this.index - 4]
    }
    get start() {
        return this.buffer[this.index - 3]
    }
    get end() {
        return this.buffer[this.index - 2]
    }
    get size() {
        return this.buffer[this.index - 1]
    }
    next() {
        this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext()
    }
    fork() {
        return new Au(this.stack, this.pos, this.index)
    }
}

function Yu(t, e = Uint16Array) {
    if ("string" != typeof t) return t;
    let i = null;
    for (let n = 0, r = 0; n < t.length;) {
        let s = 0;
        for (;;) {
            let e = t.charCodeAt(n++),
                i = !1;
            if (126 == e) {
                s = 65535;
                break
            }
            e >= 92 && e--, e >= 34 && e--;
            let r = e - 32;
            if (r >= 46 && (r -= 46, i = !0), s += r, i) break;
            s *= 46
        }
        i ? i[r++] = s : i = new e(s)
    }
    return i
}
class Ru {
    constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
    }
}
const Uu = new Ru;
class Vu {
    constructor(t, e) {
        this.input = t, this.ranges = e, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = Uu, this.rangeIndex = 0, this.pos = this.chunkPos = e[0].from, this.range = e[0], this.end = e[e.length - 1].to, this.readNext()
    }
    resolveOffset(t, e) {
        let i = this.range,
            n = this.rangeIndex,
            r = this.pos + t;
        for (; r < i.from;) {
            if (!n) return null;
            let t = this.ranges[--n];
            r -= i.from - t.to, i = t
        }
        for (; e < 0 ? r > i.to : r >= i.to;) {
            if (n == this.ranges.length - 1) return null;
            let t = this.ranges[++n];
            r += t.from - i.to, i = t
        }
        return r
    }
    clipPos(t) {
        if (t >= this.range.from && t < this.range.to) return t;
        for (let e of this.ranges)
            if (e.to > t) return Math.max(t, e.from);
        return this.end
    }
    peek(t) {
        let e, i, n = this.chunkOff + t;
        if (n >= 0 && n < this.chunk.length) e = this.pos + t, i = this.chunk.charCodeAt(n);
        else {
            let n = this.resolveOffset(t, 1);
            if (null == n) return -1;
            if (e = n, e >= this.chunk2Pos && e < this.chunk2Pos + this.chunk2.length) i = this.chunk2.charCodeAt(e - this.chunk2Pos);
            else {
                let t = this.rangeIndex,
                    n = this.range;
                for (; n.to <= e;) n = this.ranges[++t];
                this.chunk2 = this.input.chunk(this.chunk2Pos = e), e + this.chunk2.length > n.to && (this.chunk2 = this.chunk2.slice(0, n.to - e)), i = this.chunk2.charCodeAt(0)
            }
        }
        return e >= this.token.lookAhead && (this.token.lookAhead = e + 1), i
    }
    acceptToken(t, e = 0) {
        let i = e ? this.resolveOffset(e, -1) : this.pos;
        if (null == i || i < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = t, this.token.end = i
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let {
                chunk: t,
                chunkPos: e
            } = this;
            this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = t, this.chunk2Pos = e, this.chunkOff = this.pos - this.chunkPos
        } else {
            this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
            let t = this.input.chunk(this.pos),
                e = this.pos + t.length;
            this.chunk = e > this.range.to ? t.slice(0, this.range.to - this.pos) : t, this.chunkPos = this.pos, this.chunkOff = 0
        }
    }
    readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
    }
    advance(t = 1) {
        for (this.chunkOff += t; this.pos + t >= this.range.to;) {
            if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
            t -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += t, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
    }
    setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = "", this.next = -1
    }
    reset(t, e) {
        if (e ? (this.token = e, e.start = t, e.lookAhead = t + 1, e.value = e.extended = -1) : this.token = Uu, this.pos != t) {
            if (this.pos = t, t == this.end) return this.setDone(), this;
            for (; t < this.range.from;) this.range = this.ranges[--this.rangeIndex];
            for (; t >= this.range.to;) this.range = this.ranges[++this.rangeIndex];
            t >= this.chunkPos && t < this.chunkPos + this.chunk.length ? this.chunkOff = t - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
    }
    read(t, e) {
        if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length) return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
        if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
        if (t >= this.range.from && e <= this.range.to) return this.input.read(t, e);
        let i = "";
        for (let n of this.ranges) {
            if (n.from >= e) break;
            n.to > t && (i += this.input.read(Math.max(n.from, t), Math.min(n.to, e)))
        }
        return i
    }
}
class Mu {
    constructor(t, e) {
        this.data = t, this.id = e
    }
    token(t, e) {
        let {
            parser: i
        } = e.p;
        Eu(this.data, t, e, this.id, i.data, i.tokenPrecTable)
    }
}
Mu.prototype.contextual = Mu.prototype.fallback = Mu.prototype.extend = !1;
class ju {
    constructor(t, e, i) {
        this.precTable = e, this.elseToken = i, this.data = "string" == typeof t ? Yu(t) : t
    }
    token(t, e) {
        let i, n = t.pos;
        for (; i = t.pos, Eu(this.data, t, e, 0, this.data, this.precTable), !(t.token.value > -1);) {
            if (null == this.elseToken) return;
            if (t.next < 0) break;
            t.advance(), t.reset(i + 1, t.token)
        }
        i > n && (t.reset(n, t.token), t.acceptToken(this.elseToken, i - n))
    }
}
ju.prototype.contextual = Mu.prototype.fallback = Mu.prototype.extend = !1;
class Du {
    constructor(t, e = {}) {
        this.token = t, this.contextual = !!e.contextual, this.fallback = !!e.fallback, this.extend = !!e.extend
    }
}

function Eu(t, e, i, n, r, s) {
    let o = 0,
        l = 1 << n,
        {
            dialect: a
        } = i.p.parser;
    t: for (; 0 != (l & t[o]);) {
        let i = t[o + 1];
        for (let n = o + 3; n < i; n += 2)
            if ((t[n + 1] & l) > 0) {
                let i = t[n];
                if (a.allows(i) && (-1 == e.token.value || e.token.value == i || Iu(i, e.token.value, r, s))) {
                    e.acceptToken(i);
                    break
                }
            } let n = e.next,
            h = 0,
            c = t[o + 2];
        if (!(e.next < 0 && c > h && 65535 == t[i + 3 * c - 3] && 65535 == t[i + 3 * c - 3])) {
            for (; h < c;) {
                let r = h + c >> 1,
                    s = i + r + (r << 1),
                    l = t[s],
                    a = t[s + 1] || 65536;
                if (n < l) c = r;
                else {
                    if (!(n >= a)) {
                        o = t[s + 2], e.advance();
                        continue t
                    }
                    h = r + 1
                }
            }
            break
        }
        o = t[i + 3 * c - 1]
    }
}

function qu(t, e, i) {
    for (let n, r = e; 65535 != (n = t[r]); r++)
        if (n == i) return r - e;
    return -1
}

function Iu(t, e, i, n) {
    let r = qu(i, n, e);
    return r < 0 || qu(i, n, t) < r
}
const zu = "undefined" != typeof process && process.env && /\bparse\b/.test(process.env.LOG);
let Gu = null;
var Nu, Bu;

function Lu(t, e, i) {
    let n = t.cursor(Wl.IncludeAnonymous);
    for (n.moveTo(e);;)
        if (!(i < 0 ? n.childBefore(e) : n.childAfter(e)))
            for (;;) {
                if ((i < 0 ? n.to < e : n.from > e) && !n.type.isError) return i < 0 ? Math.max(0, Math.min(n.to - 1, e - 25)) : Math.min(t.length, Math.max(n.from + 1, e + 25));
                if (i < 0 ? n.prevSibling() : n.nextSibling()) break;
                if (!n.parent()) return i < 0 ? 0 : t.length
            }
}! function(t) {
    t[t.Margin = 25] = "Margin"
}(Nu || (Nu = {}));
class Hu {
    constructor(t, e) {
        this.fragments = t, this.nodeSet = e, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
    }
    nextFragment() {
        let t = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (t) {
            for (this.safeFrom = t.openStart ? Lu(t.tree, t.from + t.offset, 1) - t.offset : t.from, this.safeTo = t.openEnd ? Lu(t.tree, t.to + t.offset, -1) - t.offset : t.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
            this.trees.push(t.tree), this.start.push(-t.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
    }
    nodeAt(t) {
        if (t < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= t;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
            let e = this.trees.length - 1;
            if (e < 0) return this.nextFragment(), null;
            let i = this.trees[e],
                n = this.index[e];
            if (n == i.children.length) {
                this.trees.pop(), this.start.pop(), this.index.pop();
                continue
            }
            let r = i.children[n],
                s = this.start[e] + i.positions[n];
            if (s > t) return this.nextStart = s, null;
            if (r instanceof Al) {
                if (s == t) {
                    if (s < this.safeFrom) return null;
                    let t = s + r.length;
                    if (t <= this.safeTo) {
                        let e = r.prop(Pl.lookAhead);
                        if (!e || t + e < this.fragment.to) return r
                    }
                }
                this.index[e]++, s + r.length >= Math.max(this.safeFrom, t) && (this.trees.push(r), this.start.push(s), this.index.push(0))
            } else this.index[e]++, this.nextStart = s + r.length
        }
    }
}
class Fu {
    constructor(t, e) {
        this.stream = e, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = t.tokenizers.map((t => new Ru))
    }
    getActions(t) {
        let e = 0,
            i = null,
            {
                parser: n
            } = t.p,
            {
                tokenizers: r
            } = n,
            s = n.stateSlot(t.state, 3),
            o = t.curContext ? t.curContext.hash : 0,
            l = 0;
        for (let n = 0; n < r.length; n++) {
            if (0 == (1 << n & s)) continue;
            let a = r[n],
                h = this.tokens[n];
            if ((!i || a.fallback) && ((a.contextual || h.start != t.pos || h.mask != s || h.context != o) && (this.updateCachedToken(h, a, t), h.mask = s, h.context = o), h.lookAhead > h.end + 25 && (l = Math.max(h.lookAhead, l)), 0 != h.value)) {
                let n = e;
                if (h.extended > -1 && (e = this.addActions(t, h.extended, h.end, e)), e = this.addActions(t, h.value, h.end, e), !a.extend && (i = h, e > n)) break
            }
        }
        for (; this.actions.length > e;) this.actions.pop();
        return l && t.setLookAhead(l), i || t.pos != this.stream.end || (i = new Ru, i.value = t.p.parser.eofTerm, i.start = i.end = t.pos, e = this.addActions(t, i.value, i.end, e)), this.mainToken = i, this.actions
    }
    getMainToken(t) {
        if (this.mainToken) return this.mainToken;
        let e = new Ru,
            {
                pos: i,
                p: n
            } = t;
        return e.start = i, e.end = Math.min(i + 1, n.stream.end), e.value = i == n.stream.end ? n.parser.eofTerm : 0, e
    }
    updateCachedToken(t, e, i) {
        let n = this.stream.clipPos(i.pos);
        if (e.token(this.stream.reset(n, t), i), t.value > -1) {
            let {
                parser: e
            } = i.p;
            for (let n = 0; n < e.specialized.length; n++)
                if (e.specialized[n] == t.value) {
                    let r = e.specializers[n](this.stream.read(t.start, t.end), i);
                    if (r >= 0 && i.p.parser.dialect.allows(r >> 1)) {
                        0 == (1 & r) ? t.value = r >> 1 : t.extended = r >> 1;
                        break
                    }
                }
        } else t.value = 0, t.end = this.stream.clipPos(n + 1)
    }
    putAction(t, e, i, n) {
        for (let e = 0; e < n; e += 3)
            if (this.actions[e] == t) return n;
        return this.actions[n++] = t, this.actions[n++] = e, this.actions[n++] = i, n
    }
    addActions(t, e, i, n) {
        let {
            state: r
        } = t, {
            parser: s
        } = t.p, {
            data: o
        } = s;
        for (let t = 0; t < 2; t++)
            for (let l = s.stateSlot(r, t ? 2 : 1);; l += 3) {
                if (65535 == o[l]) {
                    if (1 != o[l + 1]) {
                        0 == n && 2 == o[l + 1] && (n = this.putAction(rf(o, l + 2), e, i, n));
                        break
                    }
                    l = rf(o, l + 2)
                }
                o[l] == e && (n = this.putAction(rf(o, l + 1), e, i, n))
            }
        return n
    }
}! function(t) {
    t[t.Distance = 5] = "Distance", t[t.MaxRemainingPerStep = 3] = "MaxRemainingPerStep", t[t.MinBufferLengthPrune = 500] = "MinBufferLengthPrune", t[t.ForceReduceLimit = 10] = "ForceReduceLimit", t[t.CutDepth = 15e3] = "CutDepth", t[t.CutTo = 9e3] = "CutTo", t[t.MaxLeftAssociativeReductionCount = 300] = "MaxLeftAssociativeReductionCount", t[t.MaxStackCount = 12] = "MaxStackCount"
}(Bu || (Bu = {}));
class Ju {
    constructor(t, e, i, n) {
        this.parser = t, this.input = e, this.ranges = n, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new Vu(e, n), this.tokens = new Fu(t, this.stream), this.topTerm = t.top[1];
        let {
            from: r
        } = n[0];
        this.stacks = [Xu.start(this, t.top[0], r)], this.fragments = i.length && this.stream.end - r > 4 * t.bufferLength ? new Hu(i, t.nodeSet) : null
    }
    get parsedPos() {
        return this.minStackPos
    }
    advance() {
        let t, e, i = this.stacks,
            n = this.minStackPos,
            r = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == i.length) {
            let [t] = i;
            for (; t.forceReduce() && t.stack.length && t.stack[t.stack.length - 2] >= this.lastBigReductionStart;);
            this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let s = 0; s < i.length; s++) {
            let o = i[s];
            for (;;) {
                if (this.tokens.mainToken = null, o.pos > n) r.push(o);
                else {
                    if (this.advanceStack(o, r, i)) continue;
                    {
                        t || (t = [], e = []), t.push(o);
                        let i = this.tokens.getMainToken(o);
                        e.push(i.value, i.end)
                    }
                }
                break
            }
        }
        if (!r.length) {
            let e = t && function(t) {
                let e = null;
                for (let i of t) {
                    let t = i.p.stoppedAt;
                    (i.pos == i.p.stream.end || null != t && i.pos > t) && i.p.parser.stateFlag(i.state, 2) && (!e || e.score < i.score) && (e = i)
                }
                return e
            }(t);
            if (e) return this.stackToTree(e);
            if (this.parser.strict) throw zu && t && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + n);
            this.recovering || (this.recovering = 5)
        }
        if (this.recovering && t) {
            let i = null != this.stoppedAt && t[0].pos > this.stoppedAt ? t[0] : this.runRecovery(t, e, r);
            if (i) return this.stackToTree(i.forceAll())
        }
        if (this.recovering) {
            let t = 1 == this.recovering ? 1 : 3 * this.recovering;
            if (r.length > t)
                for (r.sort(((t, e) => e.score - t.score)); r.length > t;) r.pop();
            r.some((t => t.reducePos > n)) && this.recovering--
        } else if (r.length > 1) {
            t: for (let t = 0; t < r.length - 1; t++) {
                let e = r[t];
                for (let i = t + 1; i < r.length; i++) {
                    let n = r[i];
                    if (e.sameState(n) || e.buffer.length > 500 && n.buffer.length > 500) {
                        if (!((e.score - n.score || e.buffer.length - n.buffer.length) > 0)) {
                            r.splice(t--, 1);
                            continue t
                        }
                        r.splice(i--, 1)
                    }
                }
            }
            r.length > 12 && r.splice(12, r.length - 12)
        }
        this.minStackPos = r[0].pos;
        for (let t = 1; t < r.length; t++) r[t].pos < this.minStackPos && (this.minStackPos = r[t].pos);
        return null
    }
    stopAt(t) {
        if (null != this.stoppedAt && this.stoppedAt < t) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = t
    }
    advanceStack(t, e, i) {
        let n = t.pos,
            {
                parser: r
            } = this,
            s = zu ? this.stackID(t) + " -> " : "";
        if (null != this.stoppedAt && n > this.stoppedAt) return t.forceReduce() ? t : null;
        if (this.fragments) {
            let e = t.curContext && t.curContext.tracker.strict,
                i = e ? t.curContext.hash : 0;
            for (let o = this.fragments.nodeAt(n); o;) {
                let n = this.parser.nodeSet.types[o.type.id] == o.type ? r.getGoto(t.state, o.type.id) : -1;
                if (n > -1 && o.length && (!e || (o.prop(Pl.contextHash) || 0) == i)) return t.useNode(o, n), zu && console.log(s + this.stackID(t) + ` (via reuse of ${r.getName(o.type.id)})`), !0;
                if (!(o instanceof Al) || 0 == o.children.length || o.positions[0] > 0) break;
                let l = o.children[0];
                if (!(l instanceof Al && 0 == o.positions[0])) break;
                o = l
            }
        }
        let o = r.stateSlot(t.state, 4);
        if (o > 0) return t.reduce(o), zu && console.log(s + this.stackID(t) + ` (via always-reduce ${r.getName(65535&o)})`), !0;
        if (t.stack.length >= 15e3)
            for (; t.stack.length > 9e3 && t.forceReduce(););
        let l = this.tokens.getActions(t);
        for (let o = 0; o < l.length;) {
            let a = l[o++],
                h = l[o++],
                c = l[o++],
                O = o == l.length || !i,
                u = O ? t : t.split();
            if (u.apply(a, h, c), zu && console.log(s + this.stackID(u) + ` (via ${0==(65536&a)?"shift":`reduce of ${r.getName(65535&a)}`} for ${r.getName(h)} @ ${n}${u==t?"":", split"})`), O) return !0;
            u.pos > n ? e.push(u) : i.push(u)
        }
        return !1
    }
    advanceFully(t, e) {
        let i = t.pos;
        for (;;) {
            if (!this.advanceStack(t, null, null)) return !1;
            if (t.pos > i) return Ku(t, e), !0
        }
    }
    runRecovery(t, e, i) {
        let n = null,
            r = !1;
        for (let s = 0; s < t.length; s++) {
            let o = t[s],
                l = e[s << 1],
                a = e[1 + (s << 1)],
                h = zu ? this.stackID(o) + " -> " : "";
            if (o.deadEnd) {
                if (r) continue;
                if (r = !0, o.restart(), zu && console.log(h + this.stackID(o) + " (restarted)"), this.advanceFully(o, i)) continue
            }
            let c = o.split(),
                O = h;
            for (let t = 0; c.forceReduce() && t < 10; t++) {
                if (zu && console.log(O + this.stackID(c) + " (via force-reduce)"), this.advanceFully(c, i)) break;
                zu && (O = this.stackID(c) + " -> ")
            }
            for (let t of o.recoverByInsert(l)) zu && console.log(h + this.stackID(t) + " (via recover-insert)"), this.advanceFully(t, i);
            this.stream.end > o.pos ? (a == o.pos && (a++, l = 0), o.recoverByDelete(l, a), zu && console.log(h + this.stackID(o) + ` (via recover-delete ${this.parser.getName(l)})`), Ku(o, i)) : (!n || n.score < o.score) && (n = o)
        }
        return n
    }
    stackToTree(t) {
        return t.close(), Al.build({
            buffer: Au.create(t),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: t.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm
        })
    }
    stackID(t) {
        let e = (Gu || (Gu = new WeakMap)).get(t);
        return e || Gu.set(t, e = String.fromCodePoint(this.nextStackID++)), e + t
    }
}

function Ku(t, e) {
    for (let i = 0; i < e.length; i++) {
        let n = e[i];
        if (n.pos == t.pos && n.sameState(t)) return void(e[i].score < t.score && (e[i] = t))
    }
    e.push(t)
}
class tf {
    constructor(t, e, i) {
        this.source = t, this.flags = e, this.disabled = i
    }
    allows(t) {
        return !this.disabled || 0 == this.disabled[t]
    }
}
const ef = t => t;
class nf extends Jl {
    constructor(t) {
        if (super(), this.wrappers = [], 14 != t.version) throw new RangeError(`Parser version (${t.version}) doesn't match runtime version (14)`);
        let e = t.nodeNames.split(" ");
        this.minRepeatTerm = e.length;
        for (let i = 0; i < t.repeatNodeCount; i++) e.push("");
        let i = Object.keys(t.topRules).map((e => t.topRules[e][1])),
            n = [];
        for (let t = 0; t < e.length; t++) n.push([]);

        function r(t, e, i) {
            n[t].push([e, e.deserialize(String(i))])
        }
        if (t.nodeProps)
            for (let e of t.nodeProps) {
                let t = e[0];
                "string" == typeof t && (t = Pl[t]);
                for (let i = 1; i < e.length;) {
                    let n = e[i++];
                    if (n >= 0) r(n, t, e[i++]);
                    else {
                        let s = e[i + -n];
                        for (let o = -n; o > 0; o--) r(e[i++], t, s);
                        i++
                    }
                }
            }
        this.nodeSet = new Xl(e.map(((e, r) => Zl.define({
            name: r >= this.minRepeatTerm ? void 0 : e,
            id: r,
            props: n[r],
            top: i.indexOf(r) > -1,
            error: 0 == r,
            skipped: t.skippedNodes && t.skippedNodes.indexOf(r) > -1
        })))), t.propSources && (this.nodeSet = this.nodeSet.extend(...t.propSources)), this.strict = !1, this.bufferLength = xl;
        let s = Yu(t.tokenData);
        this.context = t.context, this.specializerSpecs = t.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let t = 0; t < this.specializerSpecs.length; t++) this.specialized[t] = this.specializerSpecs[t].term;
        this.specializers = this.specializerSpecs.map(sf), this.states = Yu(t.states, Uint32Array), this.data = Yu(t.stateData), this.goto = Yu(t.goto), this.maxTerm = t.maxTerm, this.tokenizers = t.tokenizers.map((t => "number" == typeof t ? new Mu(s, t) : t)), this.topRules = t.topRules, this.dialects = t.dialects || {}, this.dynamicPrecedences = t.dynamicPrecedences || null, this.tokenPrecTable = t.tokenPrec, this.termNames = t.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
    }
    createParse(t, e, i) {
        let n = new Ju(this, t, e, i);
        for (let r of this.wrappers) n = r(n, t, e, i);
        return n
    }
    getGoto(t, e, i = !1) {
        let n = this.goto;
        if (e >= n[0]) return -1;
        for (let r = n[e + 1];;) {
            let e = n[r++],
                s = 1 & e,
                o = n[r++];
            if (s && i) return o;
            for (let i = r + (e >> 1); r < i; r++)
                if (n[r] == t) return o;
            if (s) return -1
        }
    }
    hasAction(t, e) {
        let i = this.data;
        for (let n = 0; n < 2; n++)
            for (let r, s = this.stateSlot(t, n ? 2 : 1);; s += 3) {
                if (65535 == (r = i[s])) {
                    if (1 != i[s + 1]) {
                        if (2 == i[s + 1]) return rf(i, s + 2);
                        break
                    }
                    r = i[s = rf(i, s + 2)]
                }
                if (r == e || 0 == r) return rf(i, s + 1)
            }
        return 0
    }
    stateSlot(t, e) {
        return this.states[6 * t + e]
    }
    stateFlag(t, e) {
        return (this.stateSlot(t, 0) & e) > 0
    }
    validAction(t, e) {
        if (e == this.stateSlot(t, 4)) return !0;
        for (let i = this.stateSlot(t, 1);; i += 3) {
            if (65535 == this.data[i]) {
                if (1 != this.data[i + 1]) return !1;
                i = rf(this.data, i + 2)
            }
            if (e == rf(this.data, i + 1)) return !0
        }
    }
    nextStates(t) {
        let e = [];
        for (let i = this.stateSlot(t, 1);; i += 3) {
            if (65535 == this.data[i]) {
                if (1 != this.data[i + 1]) break;
                i = rf(this.data, i + 2)
            }
            if (0 == (1 & this.data[i + 2])) {
                let t = this.data[i + 1];
                e.some(((e, i) => 1 & i && e == t)) || e.push(this.data[i], t)
            }
        }
        return e
    }
    configure(t) {
        let e = Object.assign(Object.create(nf.prototype), this);
        if (t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top) {
            let i = this.topRules[t.top];
            if (!i) throw new RangeError(`Invalid top rule name ${t.top}`);
            e.top = i
        }
        return t.tokenizers && (e.tokenizers = this.tokenizers.map((e => {
            let i = t.tokenizers.find((t => t.from == e));
            return i ? i.to : e
        }))), t.specializers && (e.specializers = this.specializers.slice(), e.specializerSpecs = this.specializerSpecs.map(((i, n) => {
            let r = t.specializers.find((t => t.from == i.external));
            if (!r) return i;
            let s = Object.assign(Object.assign({}, i), {
                external: r.to
            });
            return e.specializers[n] = sf(s), s
        }))), t.contextTracker && (e.context = t.contextTracker), t.dialect && (e.dialect = this.parseDialect(t.dialect)), null != t.strict && (e.strict = t.strict), t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)), null != t.bufferLength && (e.bufferLength = t.bufferLength), e
    }
    hasWrappers() {
        return this.wrappers.length > 0
    }
    getName(t) {
        return this.termNames ? this.termNames[t] : String(t <= this.maxNode && this.nodeSet.types[t].name || t)
    }
    get eofTerm() {
        return this.maxNode + 1
    }
    get topNode() {
        return this.nodeSet.types[this.top[1]]
    }
    dynamicPrecedence(t) {
        let e = this.dynamicPrecedences;
        return null == e ? 0 : e[t] || 0
    }
    parseDialect(t) {
        let e = Object.keys(this.dialects),
            i = e.map((() => !1));
        if (t)
            for (let n of t.split(" ")) {
                let t = e.indexOf(n);
                t >= 0 && (i[t] = !0)
            }
        let n = null;
        for (let t = 0; t < e.length; t++)
            if (!i[t])
                for (let i, r = this.dialects[e[t]]; 65535 != (i = this.data[r++]);)(n || (n = new Uint8Array(this.maxTerm + 1)))[i] = 1;
        return new tf(t, i, n)
    }
    static deserialize(t) {
        return new nf(t)
    }
}

function rf(t, e) {
    return t[e] | t[e + 1] << 16
}

function sf(t) {
    if (t.external) {
        let e = t.extend ? 1 : 0;
        return (i, n) => t.external(i, n) << 1 | e
    }
    return t.get
}
const of = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288], lf = new class {
    constructor(t) {
        this.start = t.start, this.shift = t.shift || ef, this.reduce = t.reduce || ef, this.reuse = t.reuse || ef, this.hash = t.hash || (() => 0), this.strict = !1 !== t.strict
    }
}({
    start: !1,
    shift: (t, e) => 3 == e || 4 == e || 304 == e ? t : 305 == e,
    strict: !1
}), af = new Du(((t, e) => {
    let {
        next: i
    } = t;
    (125 == i || -1 == i || e.context) && e.canShift(302) && t.acceptToken(302)
}), {
    contextual: !0,
    fallback: !0
}), hf = new Du(((t, e) => {
    let i, {
        next: n
    } = t;
    of.indexOf(n) > -1 || (47 != n || 47 != (i = t.peek(1)) && 42 != i) && 125 != n && 59 != n && -1 != n && !e.context && e.canShift(301) && t.acceptToken(301)
}), {
    contextual: !0
}), cf = new Du(((t, e) => {
    let {
        next: i
    } = t;
    if ((43 == i || 45 == i) && (t.advance(), i == t.next)) {
        t.advance();
        let i = !e.context && e.canShift(1);
        t.acceptToken(i ? 1 : 2)
    }
}), {
    contextual: !0
}), Of = ra({
    "get set async static": $a.modifier,
    "for while do if else switch try catch finally return throw break continue default case": $a.controlKeyword,
    "in of await yield void typeof delete instanceof": $a.operatorKeyword,
    "let var const function class extends": $a.definitionKeyword,
    "import export from": $a.moduleKeyword,
    "with debugger as new": $a.keyword,
    TemplateString: $a.special($a.string),
    super: $a.atom,
    BooleanLiteral: $a.bool,
    this: $a.self,
    null: $a.null,
    Star: $a.modifier,
    VariableName: $a.variableName,
    "CallExpression/VariableName TaggedTemplateExpression/VariableName": $a.function($a.variableName),
    VariableDefinition: $a.definition($a.variableName),
    Label: $a.labelName,
    PropertyName: $a.propertyName,
    PrivatePropertyName: $a.special($a.propertyName),
    "CallExpression/MemberExpression/PropertyName": $a.function($a.propertyName),
    "FunctionDeclaration/VariableDefinition": $a.function($a.definition($a.variableName)),
    "ClassDeclaration/VariableDefinition": $a.definition($a.className),
    PropertyDefinition: $a.definition($a.propertyName),
    PrivatePropertyDefinition: $a.definition($a.special($a.propertyName)),
    UpdateOp: $a.updateOperator,
    LineComment: $a.lineComment,
    BlockComment: $a.blockComment,
    Number: $a.number,
    String: $a.string,
    Escape: $a.escape,
    ArithOp: $a.arithmeticOperator,
    LogicOp: $a.logicOperator,
    BitOp: $a.bitwiseOperator,
    CompareOp: $a.compareOperator,
    RegExp: $a.regexp,
    Equals: $a.definitionOperator,
    Arrow: $a.function($a.punctuation),
    ": Spread": $a.punctuation,
    "( )": $a.paren,
    "[ ]": $a.squareBracket,
    "{ }": $a.brace,
    "InterpolationStart InterpolationEnd": $a.special($a.brace),
    ".": $a.derefOperator,
    ", ;": $a.separator,
    "@": $a.meta,
    TypeName: $a.typeName,
    TypeDefinition: $a.definition($a.typeName),
    "type enum interface implements namespace module declare": $a.definitionKeyword,
    "abstract global Privacy readonly override": $a.modifier,
    "is keyof unique infer": $a.operatorKeyword,
    JSXAttributeValue: $a.attributeValue,
    JSXText: $a.content,
    "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": $a.angleBracket,
    "JSXIdentifier JSXNameSpacedName": $a.tagName,
    "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": $a.attributeName,
    "JSXBuiltin/JSXIdentifier": $a.standard($a.tagName)
}), uf = {
    __proto__: null,
    export: 14,
    as: 19,
    from: 27,
    default: 30,
    async: 35,
    function: 36,
    extends: 46,
    this: 50,
    true: 58,
    false: 58,
    null: 70,
    void: 74,
    typeof: 78,
    super: 96,
    new: 130,
    delete: 146,
    yield: 155,
    await: 159,
    class: 164,
    public: 219,
    private: 219,
    protected: 219,
    readonly: 221,
    instanceof: 240,
    satisfies: 243,
    in: 244,
    const: 246,
    import: 278,
    keyof: 333,
    unique: 337,
    infer: 343,
    is: 379,
    abstract: 399,
    implements: 401,
    type: 403,
    let: 406,
    var: 408,
    interface: 415,
    enum: 419,
    namespace: 425,
    module: 427,
    declare: 431,
    global: 435,
    for: 456,
    of: 465,
    while: 468,
    with: 472,
    do: 476,
    if: 480,
    else: 482,
    switch: 486,
    case: 492,
    try: 498,
    catch: 502,
    finally: 506,
    return: 510,
    throw: 514,
    break: 518,
    continue: 522,
    debugger: 526
}, ff = {
    __proto__: null,
    async: 117,
    get: 119,
    set: 121,
    public: 181,
    private: 181,
    protected: 181,
    static: 183,
    abstract: 185,
    override: 187,
    readonly: 193,
    accessor: 195,
    new: 383
}, df = {
    __proto__: null,
    "<": 137
}, pf = nf.deserialize({
    version: 14,
    states: "$BhO`QUOOO%QQUOOO'TQWOOP(_OSOOO*mQ(CjO'#CfO*tOpO'#CgO+SO!bO'#CgO+bO07`O'#DZO-sQUO'#DaO.TQUO'#DlO%QQUO'#DvO0[QUO'#EOOOQ(CY'#EW'#EWO0rQSO'#ETOOQO'#I_'#I_O0zQSO'#GjOOQO'#Eh'#EhO1VQSO'#EgO1[QSO'#EgO3^Q(CjO'#JbO5}Q(CjO'#JcO6kQSO'#FVO6pQ#tO'#FnOOQ(CY'#F_'#F_O6{O&jO'#F_O7ZQ,UO'#FuO8qQSO'#FtOOQ(CY'#Jc'#JcOOQ(CW'#Jb'#JbOOQQ'#J|'#J|O8vQSO'#IOO8{Q(C[O'#IPOOQQ'#JO'#JOOOQQ'#IT'#ITQ`QUOOO%QQUO'#DnO9TQUO'#DzO%QQUO'#D|O9[QSO'#GjO9aQ,UO'#ClO9oQSO'#EfO9zQSO'#EqO:PQ,UO'#F^O:nQSO'#GjO:sQSO'#GnO;OQSO'#GnO;^QSO'#GqO;^QSO'#GrO;^QSO'#GtO9[QSO'#GwO;}QSO'#GzO=`QSO'#CbO=pQSO'#HXO=xQSO'#H_O=xQSO'#HaO`QUO'#HcO=xQSO'#HeO=xQSO'#HhO=}QSO'#HnO>SQ(C]O'#HtO%QQUO'#HvO>_Q(C]O'#HxO>jQ(C]O'#HzO8{Q(C[O'#H|O>uQ(CjO'#CfO?wQWO'#DfQOQSOOO@_QSO'#EPO9aQ,UO'#EfO@jQSO'#EfO@uQ`O'#F^OOQQ'#Cd'#CdOOQ(CW'#Dk'#DkOOQ(CW'#Jf'#JfO%QQUO'#JfOBOQWO'#E_OOQ(CW'#E^'#E^OBYQ(C`O'#E_OBtQWO'#ESOOQO'#Ji'#JiOCYQWO'#ESOCgQWO'#E_OC}QWO'#EeODQQWO'#E_O@}QWO'#E_OBtQWO'#E_PDkO?MpO'#C`POOO)CDm)CDmOOOO'#IU'#IUODvOpO,59ROOQ(CY,59R,59ROOOO'#IV'#IVOEUO!bO,59RO%QQUO'#D]OOOO'#IX'#IXOEdO07`O,59uOOQ(CY,59u,59uOErQUO'#IYOFVQSO'#JdOHXQbO'#JdO+pQUO'#JdOH`QSO,59{OHvQSO'#EhOITQSO'#JqOI`QSO'#JpOI`QSO'#JpOIhQSO,5;UOImQSO'#JoOOQ(CY,5:W,5:WOItQUO,5:WOKuQ(CjO,5:bOLfQSO,5:jOLkQSO'#JmOMeQ(C[O'#JnO:sQSO'#JmOMlQSO'#JmOMtQSO,5;TOMyQSO'#JmOOQ(CY'#Cf'#CfO%QQUO'#EOONmQ`O,5:oOOQO'#Jj'#JjOOQO-E<]-E<]O9[QSO,5=UO! TQSO,5=UO! YQUO,5;RO!#]Q,UO'#EcO!$pQSO,5;RO!&YQ,UO'#DpO!&aQUO'#DuO!&kQWO,5;[O!&sQWO,5;[O%QQUO,5;[OOQQ'#E}'#E}OOQQ'#FP'#FPO%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]OOQQ'#FT'#FTO!'RQUO,5;nOOQ(CY,5;s,5;sOOQ(CY,5;t,5;tO!)UQSO,5;tOOQ(CY,5;u,5;uO%QQUO'#IeO!)^Q(C[O,5<bO!#]Q,UO,5;]O!){Q,UO,5;]O%QQUO,5;qO!*SQ#tO'#FdO!+PQ#tO'#JuO!*kQ#tO'#JuO!+WQ#tO'#JuOOQO'#Ju'#JuO!+lQ#tO,5;|OOOO,5<Y,5<YO!+}QUO'#FpOOOO'#Id'#IdO6{O&jO,5;yO!,UQ#tO'#FrOOQ(CY,5;y,5;yO!,uQ7[O'#CrOOQ(CY'#Cv'#CvO!-YQSO'#CvO!-_O07`O'#CzO!-{Q,UO,5<_O!.SQSO,5<aO!/iQMhO'#GPO!/vQSO'#GQO!/{QSO'#GQO!0QQMhO'#GUO!1PQWO'#GYO!1rQ7[O'#J]OOQ(CY'#J]'#J]O!1|QSO'#J[O!2[QSO'#JZO!2dQSO'#CqOOQ(CY'#Ct'#CtOOQ(CY'#DO'#DOOOQ(CY'#DQ'#DQO0uQSO'#DSO!$uQ,UO'#FwO!$uQ,UO'#FyO!2lQSO'#F{O!2qQSO'#F|O!/{QSO'#GSO!$uQ,UO'#GXO!2vQSO'#EiO!3bQSO,5<`O`QUO,5>jOOQQ'#JW'#JWOOQQ,5>k,5>kOOQQ-E<R-E<RO!5aQ(CjO,5:YO!7}Q(CjO,5:fO%QQUO,5:fO!:hQ(CjO,5:hOOQ(CW'#Co'#CoO!;XQ,UO,5=UO!;gQ(C[O'#JXO8qQSO'#JXO=}QSO,59WO!;xQWO,59WO!<QQ,UO,59WO9aQ,UO,59WO!<]QSO,5;RO!<eQSO'#HWO!<vQSO'#KQO%QQUO,5;vO!=OQWO,5;xO!=TQSO,5=qO!=YQSO,5=qO!=_QSO,5=qO8{Q(C[O,5=qO!=mQSO'#EjO!>gQWO'#EkOOQ(CW'#Jo'#JoO!>nQ(C[O'#J}O8{Q(C[O,5=YO;^QSO,5=`OOQO'#Cr'#CrO!>yQWO,5=]O!?RQ,UO,5=^O!?^QSO,5=`O!?cQ`O,5=cO=}QSO'#G|O9[QSO'#HOO!?kQSO'#HOO9aQ,UO'#HRO!?pQSO'#HROOQQ,5=f,5=fO!?uQSO'#HSO!?}QSO'#ClO!@SQSO,58|O!@^QSO,58|O!BfQUO,58|OOQQ,58|,58|O!BsQ(C[O,58|O%QQUO,58|O!COQUO'#HZOOQQ'#H['#H[OOQQ'#H]'#H]O`QUO,5=sO!C`QSO,5=sO`QUO,5=yO`QUO,5={O!CeQSO,5=}O`QUO,5>PO!CjQSO,5>SO!CoQUO,5>YOOQQ,5>`,5>`O%QQUO,5>`O8{Q(C[O,5>bOOQQ,5>d,5>dO!GvQSO,5>dOOQQ,5>f,5>fO!GvQSO,5>fOOQQ,5>h,5>hO!G{QWO'#DXO%QQUO'#JfO!HjQWO'#JfO!IXQWO'#DgO!IjQWO'#DgO!K{QUO'#DgO!LSQSO'#JeO!L[QSO,5:QO!LaQSO'#ElO!LoQSO'#JrO!LwQSO,5;VO!L|QWO'#DgO!MZQWO'#EROOQ(CY,5:k,5:kO%QQUO,5:kO!MbQSO,5:kO=}QSO,5;QO!;xQWO,5;QO!<QQ,UO,5;QO9aQ,UO,5;QO!MjQSO,5@QO!MoQ!LQO,5:oO!NrQ(C`O,5:yOBtQWO,5:nO# ^QWO,5:nO# kQWO,5:yO#!RQWO,5:yO#!lQWO,5:yOBtQWO,5:yO=}QSO,5:nOOQ(CW'#Eb'#EbOOQO,5:y,5:yO%QQUO,5:yO##]Q(C[O,5:yO##hQ(C[O,5:yO!;xQWO,5:nOOQO,5;P,5;PO##vQ(C[O,5:yPOOO'#IS'#ISP#$[O?MpO,58zPOOO,58z,58zOOOO-E<S-E<SOOQ(CY1G.m1G.mOOOO-E<T-E<TO#$gQ`O,59wOOOO-E<V-E<VOOQ(CY1G/a1G/aO#$lQbO,5>tO+pQUO,5>tOOQO,5>z,5>zO#$vQUO'#IYOOQO-E<W-E<WO#%TQSO,5@OO#%]QbO,5@OO#%dQSO,5@[OOQ(CY1G/g1G/gO%QQUO,5@]O#%lQSO'#I`OOQO-E<^-E<^O#%dQSO,5@[OOQ(CW1G0p1G0pOOQ(CY1G/r1G/rOOQ(CY1G0U1G0UO#&QQSO,5@XO:sQSO,5@XO#&YQSO,5@XO%QQUO,5@YO#&hQ(C[O,5@YO#&yQ(C[O,5@YO#'QQSO'#IbO#&QQSO,5@XOOQ(CW1G0o1G0oO!&kQWO,5:qO!&vQWO,5:qOOQO,5:s,5:sO#'oQSO,5:sO#'wQ,UO1G2pO9[QSO1G2pOOQ(CY1G0m1G0mO#(VQ(CjO1G0mO#)[Q(ChO,5:}OOQ(CY'#GO'#GOO#)xQ(CjO'#J]O! YQUO1G0mO#,QQ,UO'#JgO#,[QSO,5:[O#,aQbO'#JhO%QQUO'#JhO#,kQSO,5:aOOQ(CY'#DX'#DXOOQ(CY1G0v1G0vO%QQUO1G0vOOQ(CY1G1`1G1`O#,pQSO1G0vO#/XQ(CjO1G0wO#/`Q(CjO1G0wO#1yQ(CjO1G0wO#2QQ(CjO1G0wO#4[Q(CjO1G0wO#4rQ(CjO1G0wO#7lQ(CjO1G0wO#7sQ(CjO1G0wO#:^Q(CjO1G0wO#:eQ(CjO1G0wO#<]Q(CjO1G0wO#?]Q$IUO'#CfO#AZQ$IUO1G1YO#CXQ$IUO'#JcO!)XQSO1G1`O#ClQ(CjO,5?POOQ(CW-E<c-E<cO#D`Q(CjO1G0wOOQ(CY1G0w1G0wO#FkQ(CjO1G1]O#G_Q#tO,5<QO#GgQ#tO,5<RO#GoQ#tO'#FiO#HWQSO'#FhOOQO'#Jv'#JvOOQO'#Ic'#IcO#H]Q#tO1G1hOOQ(CY1G1h1G1hOOOO1G1s1G1sO#HnQ$IUO'#JbO#HxQSO,5<[O!'RQUO,5<[OOOO-E<b-E<bOOQ(CY1G1e1G1eO#H}QWO'#JuOOQ(CY,5<^,5<^O#IVQWO,5<^OOQ(CY,59b,59bO!#]Q,UO'#C|OOOO'#IW'#IWO#I[O07`O,59fOOQ(CY,59f,59fO%QQUO1G1yO!2qQSO'#IgO#IgQSO,5<rOOQ(CY,5<o,5<oOOQO'#Ge'#GeO!$uQ,UO,5=OOOQO'#Gg'#GgO!$uQ,UO,5=QO!#]Q,UO,5=SOOQO1G1{1G1{O#IuQ`O'#CoO#JYQ`O,5<kO#JaQSO'#JyO9[QSO'#JyO#JoQSO,5<mO!$uQ,UO,5<lO#JtQSO'#GRO#KPQSO,5<lO#KUQ`O'#GOO#KcQ`O'#JzO#KmQSO'#JzO!#]Q,UO'#JzO#KrQSO,5<pO#KwQWO'#GZO!0zQWO'#GZO#LYQSO'#G]O#L_QSO'#G_O!/{QSO'#GbO#LdQ(C[O'#IiO#LoQWO,5<tOOQ(CY,5<t,5<tO#LvQWO'#GZO#MUQWO'#G[O#M^QWO'#G[OOQ(CY,5=T,5=TO!$uQ,UO,5?vO!$uQ,UO,5?vO#McQSO'#IjO#MnQSO,5?uO#MvQSO,59]O#NgQ,UO,59nOOQ(CY,59n,59nO$ YQ,UO,5<cO$ {Q,UO,5<eO?oQSO,5<gOOQ(CY,5<h,5<hO$!VQSO,5<nO$![Q,UO,5<sO! YQUO1G1zO$!lQSO1G1zOOQQ1G4U1G4UOOQ(CY1G/t1G/tO!)UQSO1G/tO$$kQ(CjO1G0QOOQQ1G2p1G2pO!#]Q,UO1G2pO%QQUO1G2pO$%[QSO1G2pO$%gQ,UO'#EcOOQ(CW,5?s,5?sO$%qQ(C[O,5?sOOQQ1G.r1G.rO=}QSO1G.rO!;xQWO1G.rO!<QQ,UO1G.rO$&SQSO1G0mO$&XQSO'#CfO$&dQSO'#KRO$&lQSO,5=rO$&qQSO'#KRO$&vQSO'#KRO$'RQSO'#IrO$'aQSO,5@lO$'iQbO1G1bOOQ(CY1G1d1G1dO9[QSO1G3]O?oQSO1G3]O$'pQSO1G3]O$'uQSO1G3]OOQQ1G3]1G3]O:sQSO'#JpO:sQSO'#ElO%QQUO'#ElO:sQSO'#IlO$'zQ(C[O,5@iOOQQ1G2t1G2tO!?^QSO1G2zO!#]Q,UO1G2wO$(VQSO1G2wOOQQ1G2x1G2xO!#]Q,UO1G2xO$([QSO1G2xO$(dQWO'#GvOOQQ1G2z1G2zO!0zQWO'#InO!?cQ`O1G2}OOQQ1G2}1G2}OOQQ,5=h,5=hO$(lQ,UO,5=jO9[QSO,5=jO#L_QSO,5=mO8qQSO,5=mO!;xQWO,5=mO!<QQ,UO,5=mO9aQ,UO,5=mO$(zQSO'#KPO$)VQSO,5=nOOQQ1G.h1G.hO$)[Q(C[O1G.hO?oQSO1G.hO$)gQSO1G.hO8{Q(C[O1G.hO$)rQbO,5@nO$*VQSO,5@nO$*bQUO,5=uO$*iQSO,5=uO:sQSO,5@nOOQQ1G3_1G3_O`QUO1G3_OOQQ1G3e1G3eOOQQ1G3g1G3gO=xQSO1G3iO$*nQUO1G3kO$.oQUO'#HjOOQQ1G3n1G3nO$.|QSO'#HpO=}QSO'#HrOOQQ1G3t1G3tO$/UQUO1G3tO8{Q(C[O1G3zOOQQ1G3|1G3|OOQ(CW'#GV'#GVO8{Q(C[O1G4OO8{Q(C[O1G4QO$3YQSO,5@QO!'RQUO,5;WO:sQSO,5;WO=}QSO,5:RO!'RQUO,5:RO!;xQWO,5:RO$3_Q$IUO,5:ROOQO,5;W,5;WO$3iQWO'#IZO$4PQSO,5@POOQ(CY1G/l1G/lO$4XQWO'#IaO$4cQSO,5@^OOQ(CW1G0q1G0qO!IjQWO,5:ROOQO'#I^'#I^O$4kQWO,5:mOOQ(CY,5:m,5:mO!MeQSO1G0VOOQ(CY1G0V1G0VO%QQUO1G0VOOQ(CY1G0l1G0lO=}QSO1G0lO!;xQWO1G0lO!<QQ,UO1G0lOOQ(CW1G5l1G5lO=}QSO1G0YOOQO1G0e1G0eO%QQUO1G0eO$4rQ(C[O1G0eO$4}Q(C[O1G0eO!;xQWO1G0YOBtQWO1G0YO$5]Q(C`O1G0eO$5wQWO1G0YOBtQWO1G0eO$6UQWO1G0eO$6lQWO1G0eO$7VQ(C[O1G0eOOQO1G0Y1G0YO$7kQ(CjO1G0ePOOO-E<Q-E<QPOOO1G.f1G.fOOOO1G/c1G/cO$7uQ`O,5<bO$7}QbO1G4`OOQO1G4f1G4fO%QQUO,5>tO$8XQSO1G5jO$8aQSO1G5vO$8iQbO1G5wO:sQSO,5>zO$8sQSO1G5sO$8sQSO1G5sO:sQSO1G5sO$8{Q(CjO1G5tO%QQUO1G5tO$9]Q(C[O1G5tO$9nQSO,5>|O:sQSO,5>|OOQO,5>|,5>|O$:SQSO,5>|OOQO-E<`-E<`OOQO1G0]1G0]OOQO1G0_1G0_O!)XQSO1G0_OOQQ7+([7+([O!#]Q,UO7+([O%QQUO7+([O$:bQSO7+([O$:mQ,UO7+([O$:{Q(CjO,59nO$=TQ(CjO,5<cO$?`Q(CjO,5<eO$AkQ(CjO,5<sOOQ(CY7+&X7+&XO$C|Q(CjO7+&XO$DpQ,UO'#I[O$DzQSO,5@ROOQ(CY1G/v1G/vO$ESQUO'#I]O$EaQSO,5@SO$EiQbO,5@SOOQ(CY1G/{1G/{O$EsQSO7+&bOOQ(CY7+&b7+&bO$ExQ$IUO,5:bO%QQUO7+&tO$FSQ$IUO,5:YO$FaQ$IUO,5:fO$FkQ$IUO,5:hOOQ(CY7+&z7+&zOOQO1G1l1G1lOOQO1G1m1G1mO$FuQ#tO,5<TO!'RQUO,5<SOOQO-E<a-E<aOOQ(CY7+'S7+'SOOOO7+'_7+'_OOOO1G1v1G1vO$GQQSO1G1vOOQ(CY1G1x1G1xO$GVQ`O,59hOOOO-E<U-E<UOOQ(CY1G/Q1G/QO$G^Q(CjO7+'eOOQ(CY,5?R,5?RO$HQQSO,5?ROOQ(CY1G2^1G2^P$HVQSO'#IgPOQ(CY-E<e-E<eO$HyQ,UO1G2jO$IlQ,UO1G2lO$IvQ`O1G2nOOQ(CY1G2V1G2VO$I}QSO'#IfO$J]QSO,5@eO$J]QSO,5@eO$JeQSO,5@eO$JpQSO,5@eOOQO1G2X1G2XO$KOQ,UO1G2WO!$uQ,UO1G2WO$K`QMhO'#IhO$KpQSO,5@fO!#]Q,UO,5@fO$KxQ`O,5@fOOQ(CY1G2[1G2[OOQ(CW,5<u,5<uOOQ(CW,5<v,5<vO$LSQSO,5<vOBoQSO,5<vO!;xQWO,5<uOOQO'#G^'#G^O$LXQSO,5<wOOQ(CW,5<y,5<yO$LSQSO,5<|OOQO,5?T,5?TOOQO-E<g-E<gOOQ(CY1G2`1G2`O!0zQWO,5<uO$LaQSO,5<vO#LYQSO,5<wO!0zQWO,5<vO$LlQ,UO1G5bO$LvQ,UO1G5bOOQO,5?U,5?UOOQO-E<h-E<hOOQO1G.w1G.wO!=OQWO,59pO%QQUO,59pO$MTQSO1G2RO!$uQ,UO1G2YO$MYQ(CjO7+'fOOQ(CY7+'f7+'fO! YQUO7+'fOOQ(CY7+%`7+%`O$M|Q`O'#J{O!MeQSO7+([O$NWQbO7+([O$:eQSO7+([O$N_Q(ChO'#CfO$NrQ(ChO,5<zO% dQSO,5<zOOQ(CW1G5_1G5_OOQQ7+$^7+$^O=}QSO7+$^O!;xQWO7+$^O! YQUO7+&XO% iQSO'#IqO% }QSO,5@mOOQO1G3^1G3^O9[QSO,5@mO% }QSO,5@mO%!VQSO,5@mOOQO,5?^,5?^OOQO-E<p-E<pOOQ(CY7+&|7+&|O%![QSO7+(wO8{Q(C[O7+(wO9[QSO7+(wO?oQSO7+(wO%!aQSO,5;WOOQ(CW,5?W,5?WOOQ(CW-E<j-E<jOOQQ7+(f7+(fO%!fQ(ChO7+(cO!#]Q,UO7+(cO%!pQ`O7+(dOOQQ7+(d7+(dO!#]Q,UO7+(dO%!wQSO'#KOO%#SQSO,5=bOOQO,5?Y,5?YOOQO-E<l-E<lOOQQ7+(i7+(iO%$`QWO'#HPOOQQ1G3U1G3UO!#]Q,UO1G3UO%QQUO1G3UO%$gQSO1G3UO%$rQ,UO1G3UO8{Q(C[O1G3XO#L_QSO1G3XO8qQSO1G3XO!;xQWO1G3XO!<QQ,UO1G3XO%%QQSO'#IpO%%]QSO,5@kO%%eQWO,5@kOOQ(CW1G3Y1G3YOOQQ7+$S7+$SO?oQSO7+$SO8{Q(C[O7+$SO%%pQSO7+$SO%QQUO1G6YO%QQUO1G6ZO%%uQUO1G3aO%%|QSO1G3aO%&RQUO1G3aO%&YQ(C[O1G6YOOQQ7+(y7+(yO8{Q(C[O7+)TO`QUO7+)VOOQQ'#KU'#KUOOQQ'#Is'#IsO%&dQUO,5>UOOQQ,5>U,5>UO%QQUO'#HkO%&qQSO'#HmOOQQ,5>[,5>[O:sQSO,5>[OOQQ,5>^,5>^OOQQ7+)`7+)`OOQQ7+)f7+)fOOQQ7+)j7+)jOOQQ7+)l7+)lO%&vQWO1G5lO%'[Q$IUO1G0rO%'fQSO1G0rOOQO1G/m1G/mO%'qQ$IUO1G/mO=}QSO1G/mO!'RQUO'#DgOOQO,5>u,5>uOOQO-E<X-E<XOOQO,5>{,5>{OOQO-E<_-E<_O!;xQWO1G/mOOQO-E<[-E<[OOQ(CY1G0X1G0XOOQ(CY7+%q7+%qO!MeQSO7+%qOOQ(CY7+&W7+&WO=}QSO7+&WO!;xQWO7+&WOOQO7+%t7+%tO$7kQ(CjO7+&POOQO7+&P7+&PO%QQUO7+&PO%'{Q(C[O7+&PO=}QSO7+%tO!;xQWO7+%tO%(WQ(C[O7+&POBtQWO7+%tO%(fQ(C[O7+&PO%(zQ(C`O7+&PO%)UQWO7+%tOBtQWO7+&PO%)cQWO7+&PO%)yQSO7++_O%)yQSO7++_O%*RQ(CjO7++`O%QQUO7++`OOQO1G4h1G4hO:sQSO1G4hO%*cQSO1G4hOOQO7+%y7+%yO!MeQSO<<KvO$NWQbO<<KvO%*qQSO<<KvOOQQ<<Kv<<KvO!#]Q,UO<<KvO%QQUO<<KvO%*yQSO<<KvO%+UQ(CjO1G2jO%-aQ(CjO1G2lO%/lQ(CjO1G2WO%1}Q,UO,5>vOOQO-E<Y-E<YO%2XQbO,5>wO%QQUO,5>wOOQO-E<Z-E<ZO%2cQSO1G5nOOQ(CY<<I|<<I|O%2kQ$IUO1G0mO%4uQ$IUO1G0wO%4|Q$IUO1G0wO%7QQ$IUO1G0wO%7XQ$IUO1G0wO%8|Q$IUO1G0wO%9dQ$IUO1G0wO%;wQ$IUO1G0wO%<OQ$IUO1G0wO%>SQ$IUO1G0wO%>ZQ$IUO1G0wO%@RQ$IUO1G0wO%@fQ(CjO<<J`O%AkQ$IUO1G0wO%CaQ$IUO'#J]O%EdQ$IUO1G1]O%EqQ$IUO1G0QO!'RQUO'#FkOOQO'#Jw'#JwOOQO1G1o1G1oO%E{QSO1G1nO%FQQ$IUO,5?POOOO7+'b7+'bOOOO1G/S1G/SOOQ(CY1G4m1G4mO!$uQ,UO7+(YO%F[QSO,5?QO9[QSO,5?QOOQO-E<d-E<dO%FjQSO1G6PO%FjQSO1G6PO%FrQSO1G6PO%F}Q,UO7+'rO%G_Q`O,5?SO%GiQSO,5?SO!#]Q,UO,5?SOOQO-E<f-E<fO%GnQ`O1G6QO%GxQSO1G6QOOQ(CW1G2b1G2bO$LSQSO1G2bOOQ(CW1G2a1G2aO%HQQSO1G2cO!#]Q,UO1G2cOOQ(CW1G2h1G2hO!;xQWO1G2aOBoQSO1G2bO%HVQSO1G2cO%H_QSO1G2bO!$uQ,UO7+*|OOQ(CY1G/[1G/[O%HjQSO1G/[OOQ(CY7+'m7+'mO%HoQ,UO7+'tO%IPQ(CjO<<KQOOQ(CY<<KQ<<KQO!#]Q,UO'#IkO%IsQSO,5@gO!#]Q,UO1G2fOOQQ<<Gx<<GxO=}QSO<<GxO%I{Q(CjO<<IsOOQ(CY<<Is<<IsOOQO,5?],5?]O%JoQSO,5?]O$&vQSO,5?]OOQO-E<o-E<oO%JtQSO1G6XO%JtQSO1G6XO9[QSO1G6XO?oQSO<<LcOOQQ<<Lc<<LcO%J|QSO<<LcO8{Q(C[O<<LcO%KRQSO1G0rOOQQ<<K}<<K}O%!fQ(ChO<<K}OOQQ<<LO<<LOO%!pQ`O<<LOO%KWQWO'#ImO%KcQSO,5@jO!'RQUO,5@jOOQQ1G2|1G2|O%KkQ(C`O'#JfO%LVQUO'#JfO%L^QWO'#E_O%LwQ(C[O'#E_OBYQ(C`O'#E_O(VQWO'#HQOOQO'#Io'#IoO8{Q(C[O'#IoO%M]QWO,5=kOOQQ,5=k,5=kO%MuQWO'#E_O%LmQWO'#E_O%M|QWO'#E_O%NgQWO'#E_O& WQWO'#HQO& iQSO7+(pO& nQSO7+(pOOQQ7+(p7+(pO!#]Q,UO7+(pO%QQUO7+(pO& vQSO7+(pOOQQ7+(s7+(sO8{Q(C[O7+(sO#L_QSO7+(sO8qQSO7+(sO!;xQWO7+(sO&!RQSO,5?[OOQO-E<n-E<nOOQO'#HT'#HTO&!^QSO1G6VO8{Q(C[O<<GnOOQQ<<Gn<<GnO?oQSO<<GnO&!fQSO7++tO&!kQSO7++uOOQQ7+({7+({O&!pQSO7+({O&!uQUO7+({O&!|QSO7+({O%QQUO7++tO%QQUO7++uOOQQ<<Lo<<LoOOQQ<<Lq<<LqOOQQ-E<q-E<qOOQQ1G3p1G3pO&#RQSO,5>VOOQQ,5>X,5>XO&#WQSO1G3vO:sQSO7+&^O!'RQUO7+&^OOQO7+%X7+%XO&#]Q$IUO1G5wO=}QSO7+%XOOQ(CY<<I]<<I]OOQ(CY<<Ir<<IrO=}QSO<<IrOOQO<<Ik<<IkO$7kQ(CjO<<IkO%QQUO<<IkOOQO<<I`<<I`O=}QSO<<I`O&#gQ(C[O<<IkO!;xQWO<<I`O&#rQ(C[O<<IkOBtQWO<<I`O&$QQ(C[O<<IkO&$fQ(C`O<<IkO&$pQWO<<I`OBtQWO<<IkO&$}QSO<<NyO&%VQ(CjO<<NzOOQO7+*S7+*SO:sQSO7+*SOOQQANAbANAbO&%gQSOANAbO!#]Q,UOANAbO!MeQSOANAbO$NWQbOANAbO%QQUOANAbO&%oQ(CjO7+'rO&(QQ(CjO7+'tO&*cQbO1G4cO&*mQ$IUO7+&XO&*zQ$IUO,59nO&,}Q$IUO,5<cO&/QQ$IUO,5<eO&1TQ$IUO,5<sO&2yQ$IUO7+'eO&3WQ$IUO7+'fO&3eQSO,5<VOOQO7+'Y7+'YO&3jQ,UO<<KtOOQO1G4l1G4lO&3qQSO1G4lO&3|QSO1G4lO&4[QSO7++kO&4[QSO7++kO!#]Q,UO1G4nO&4dQ`O1G4nO&4nQSO7++lOOQ(CW7+'|7+'|O$LSQSO7+'}O&4vQ`O7+'}OOQ(CW7+'{7+'{O$LSQSO7+'|O&4}QSO7+'}O!#]Q,UO7+'}OBoQSO7+'|O&5SQ,UO<<NhOOQ(CY7+$v7+$vO&5^Q`O,5?VOOQO-E<i-E<iO&5hQ(ChO7+(QOOQQAN=dAN=dO9[QSO1G4wOOQO1G4w1G4wO&5xQSO1G4wO&5}QSO7++sO&5}QSO7++sO8{Q(C[OANA}O?oQSOANA}OOQQANA}ANA}OOQQANAiANAiOOQQANAjANAjO&6VQSO,5?XOOQO-E<k-E<kO&6bQ$IUO1G6UO#L_QSO,5=lO8qQSO,5=lO&8rQbO'#CfO&8|QWO,5:yO&9WQWO,5:yO&9eQWO,5:yO!;xQWO,5=lOOQO,5?Z,5?ZOOQO-E<m-E<mOOQQ1G3V1G3VO%LVQUO,5<wO%KkQ(C`O,5=lO!NrQ(C`O,5:yO(VQWO,5=lO&9xQWO,5=lO&:ZQWO,5:yOOQQ<<L[<<L[O!#]Q,UO<<L[O& iQSO<<L[O&:tQSO<<L[O%QQUO<<L[OOQQ<<L_<<L_O8{Q(C[O<<L_O#L_QSO<<L_O8qQSO<<L_O&:|QWO1G4vO&;XQSO7++qOOQQAN=YAN=YO8{Q(C[OAN=YOOQQ<= `<= `OOQQ<= a<= aOOQQ<<Lg<<LgO&;aQSO<<LgO&;fQUO<<LgO&;mQSO<= `O&;rQSO<= aOOQQ1G3q1G3qO=}QSO7+)bO&;wQSO<<IxO&<SQ$IUO<<IxOOQO<<Hs<<HsOOQ(CYAN?^AN?^OOQOAN?VAN?VO$7kQ(CjOAN?VOOQOAN>zAN>zO%QQUOAN?VO=}QSOAN>zO&<^Q(C[OAN?VO!;xQWOAN>zO&<iQ(C[OAN?VOBtQWOAN>zO&<wQ(C[OAN?VOOQO<<Mn<<MnOOQQG26|G26|O!#]Q,UOG26|O!MeQSOG26|O&=]QSOG26|O$NWQbOG26|O&=eQ$IUO<<J`O&=rQ$IUO1G2WO&?hQ$IUO1G2jO&AkQ$IUO1G2lO&CnQ$IUO<<KQO&C{Q$IUO<<IsOOQO1G1q1G1qO!$uQ,UOANA`OOQO7+*W7+*WO&DYQSO7+*WO&DeQSO<= VO&DmQ`O7+*YOOQ(CW<<Ki<<KiO$LSQSO<<KiOOQ(CW<<Kh<<KhO&DwQ`O<<KiO$LSQSO<<KhOOQO7+*c7+*cO9[QSO7+*cO&EOQSO<= _OOQQG27iG27iO8{Q(C[OG27iO!'RQUO1G4sO&EWQSO7++pO8{Q(C[O1G3WO#L_QSO1G3WO&E`QWO1G0eO&EjQWO1G0eO8qQSO1G3WO!;xQWO1G3WO(VQWO1G3WO%KkQ(C`O1G3WO$5]Q(C`O1G0eO&EwQWO1G3WO& iQSOANAvOOQQANAvANAvO!#]Q,UOANAvO&FYQSOANAvOOQQANAyANAyO8{Q(C[OANAyO#L_QSOANAyOOQO'#HU'#HUOOQO7+*b7+*bOOQQG22tG22tOOQQANBRANBRO&FbQSOANBROOQQANDzANDzOOQQAND{AND{OOQQ<<L|<<L|O!'RQUOAN?dOOQOG24qG24qO$7kQ(CjOG24qOOQOG24fG24fO%QQUOG24qO=}QSOG24fO&FgQ(C[OG24qO!;xQWOG24fO&FrQ(C[OG24qO!MeQSOLD,hOOQQLD,hLD,hO!#]Q,UOLD,hO&GQQSOLD,hO&GYQ$IUO7+'rO&IOQ$IUO7+'tO&JtQ,UOG26zOOQO<<Mr<<MrOOQ(CWANATANATO$LSQSOANATOOQ(CWANASANASOOQO<<M}<<M}OOQQLD-TLD-TO&KUQ$IUO7+*_OOQO7+(r7+(rO8{Q(C[O7+(rO&K`QWO7+&PO#L_QSO7+(rO8qQSO7+(rO!;xQWO7+(rO(VQWO7+(rOOQQG27bG27bO& iQSOG27bO!#]Q,UOG27bOOQQG27eG27eO8{Q(C[OG27eOOQQG27mG27mO&KjQ$IUOG25OOOQOLD*]LD*]O$7kQ(CjOLD*]OOQOLD*QLD*QO%QQUOLD*]O=}QSOLD*QO&KtQ(C[OLD*]OOQQ!$(!S!$(!SO!MeQSO!$(!SO!#]Q,UO!$(!SO&LPQ(CjOG26zOOQ(CWG26oG26oOOQO<<L^<<L^O8{Q(C[O<<L^O#L_QSO<<L^O8qQSO<<L^O!;xQWO<<L^OOQQLD,|LD,|O& iQSOLD,|OOQQLD-PLD-POOQO!$'Mw!$'MwO$7kQ(CjO!$'MwOOQO!$'Ml!$'MlO%QQUO!$'MwOOQQ!)9En!)9EnO!MeQSO!)9EnOOQOANAxANAxO8{Q(C[OANAxO#L_QSOANAxO8qQSOANAxOOQQ!$(!h!$(!hOOQO!)9Cc!)9CcO$7kQ(CjO!)9CcOOQQ!.K;Y!.K;YO&NbQ$IUOG26zOOQOG27dG27dO8{Q(C[OG27dO#L_QSOG27dOOQO!.K8}!.K8}OOQOLD-OLD-OO8{Q(C[OLD-OOOQO!$(!j!$(!jO!'RQUO'#DvO0rQSO'#ETO'!WQbO'#JbO!'RQUO'#DnO'!_QUO'#DzO!'RQUO'#D|O'!fQbO'#CfO'$|QbO'#CfO'%^QUO,5;RO!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO'#IeO''aQSO,5<bO''iQ,UO,5;]O'(|Q,UO,5;]O!'RQUO,5;qO0uQSO'#DSO0uQSO'#DSO!#]Q,UO'#FwO''iQ,UO'#FwO!#]Q,UO'#FyO''iQ,UO'#FyO!#]Q,UO'#GXO''iQ,UO'#GXO!'RQUO,5:fO!'RQUO,5@]O'%^QUO1G0mO')TQ$IUO'#CfO!'RQUO1G1yO!#]Q,UO,5=OO''iQ,UO,5=OO!#]Q,UO,5=QO''iQ,UO,5=QO!#]Q,UO,5<lO''iQ,UO,5<lO'%^QUO1G1zO!'RQUO7+&tO!#]Q,UO1G2WO''iQ,UO1G2WO!#]Q,UO1G2YO''iQ,UO1G2YO'%^QUO7+'fO'%^QUO7+&XO!#]Q,UOANA`O''iQ,UOANA`O')_QSO'#EgO')dQSO'#EgO')lQSO'#FVO')qQSO'#EqO')vQSO'#JqO'*RQSO'#JoO'*^QSO,5;RO'*cQ,UO,5<_O'*jQSO'#GQO'*oQSO'#GQO'*tQSO,5<`O'*|QSO,5;RO'+UQ$IUO1G1YO'+]QSO,5<lO'+bQSO,5<lO'+gQSO,5<nO'+lQSO,5<nO'+qQSO1G1zO'+vQSO1G0mO'+{Q,UO<<KtO',SQ,UO<<KtO7ZQ,UO'#FuO8qQSO'#FtO@jQSO'#EfO!'RQUO,5;nO!/{QSO'#GQO!/{QSO'#GQO!/{QSO'#GSO!/{QSO'#GSO!$uQ,UO7+(YO!$uQ,UO7+(YO$IvQ`O1G2nO$IvQ`O1G2nO!#]Q,UO,5=SO!#]Q,UO,5=S",
    stateData: "'-[~O'lOS'mOSROS'nRQ~OPYOQYOV!TO^pOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O#o}O$PzO$TfO%_{O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO%|!UO&S!VO&U!WO&W!XO&Y!YO&]!ZO&c![O&i!]O&k!^O&m!_O&o!`O&q!aO'sSO'uTO'xUO(QVO(_[O(liO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~O^!qOl!kO|!lO![!rO!]!pO!^!pO!x;oO!|!vO!}!tO#O!uO#P!sO#S!wO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O'n!xO~OPYXXYX^YXkYXyYXzYX|YX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX'jYX(QYX(`YX(gYX(hYX~O!a$yX~P(dO[!zO'u!|O'v!zO'w!|O~O[!}O'w!|O'x!|O'y!}O~Oq#PO!O#QO(R#QO(S#SO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's;tO'uTO'xUO(QVO(_[O(liO~O!U#WO!V#TO!S(WP!S(dP~P+pO!W#`O~P`OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(liO~O!U#fO!x]O#a#iO#b#fO's;uO!g(aP~P.[O!h#kO's#jO~O!t#oO!x]O%_#pO~O#c#qO~O!a#rO#c#qO~OP$YOX$aOk#}Oy#vOz#wO|#xO!V$^O!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^(UX'j(UX'h(UX!g(UX!S(UX!X(UX%`(UX!a(UX~P1dO#W$bO#z$bOP(VXX(VXk(VXy(VXz(VX|(VX!V(VX!e(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#n(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!X(VX%`(VX~O^(VX!f(VX'j(VX'h(VX!S(VX!g(VXo(VX!a(VX~P3zO#W$bO~O$V$dO$X$cO$`$iO~O!X$jO$TfO$c$kO$e$mO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's$oO'uTO'xUO'|%OO(Q$rOd'}P~O!h%ZO~O!a%]O~O^%^O'j%^O~O't!iO~P%QO's%eO~O!h%ZO's%eO't!iO'|%OO~Ob%lO!h%ZO's%eO~O#n$PO~Oy%qO!X%nO!h%pO%a%tO's%eO't!iO'uTO'xUO](tP~O!t#oO~O|%vO!X%wO's%eO~O|%vO!X%wO%i%{O's%eO~O's%|O~O#o}O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO~Oa&VOb&UO!t&SO%_&TO%q&RO~P;cOa&YObwO!X&XO!tvO!x]O#o}O%_{O%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO~O_&]O#W&`O%a&ZO't!iO~P<bO!h&aO!q&eO~O!h#kO~O!XXO~O^%^O'i&mO'j%^O~O^%^O'i&pO'j%^O~O^%^O'i&rO'j%^O~O'hYX!SYXoYX!gYX&QYX!XYX%`YX!aYX~P(dO!['PO!]&xO!^&xO't!iO'uTO'xUO~Ol&vO|&uO!U&yO(T&tO!W(XP!W(fP~P?cOg'SO!X'QO's%eO~Ob'XO!h%ZO's%eO~Oy%qO!h%pO~Ol!kO|!lO!['^O!]']O!^']O!}'`O#O'`O#P'_O#S'bO#T'bO't!iO'uTO'xUO(T!jO(_!nO~O!x;oO!|'aO~P@}O^%^O!a#rO!h%ZO!l'hO#W'fO'j%^O'|%OO(`'dO~Ol!kO|!lO'uTO'xUO(T!jO(_!nO~O!]']O!^']O't!iO~PBtO!['^O!]']O!^']O#S'bO#T'bO't!iO~PBtO!XXO!['^O!]']O!^']O#P'_O#S'bO#T'bO't!iO~PBtO'o'lO'p'lO'q'nO~O[!zO'u'pO'v!zO'w'pO~O[!}O'w'pO'x'pO'y!}O~Oq#PO!O#QO(R#QO(S'tO~O!U'vO!S&|X!S'SX!V&|X!V'SX~P+pO!V'xO!S(WX~OP$YOX$aOk#}Oy#vOz#wO|#xO!V'xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O!S(WX~PF_O!S'}O~O!S(cX!V(cX!a(cX!g(cX(`(cX~O#W(cX#c#[X!W(cX~PHeO#W(OO!S(eX!V(eX~O!V(PO!S(dX~O!S(SO~O#W$bO~PHeO!W(TO~P`Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!jaX!jak!ja!V!ja!e!ja!l!ja#f!ja#g!ja#h!ja#i!ja#j!ja#k!ja#l!ja#m!ja#n!ja#p!ja#r!ja#t!ja#u!ja(`!ja(g!ja(h!ja~O^!ja'j!ja'h!ja!S!ja!g!jao!ja!X!ja%`!ja!a!ja~PI{O!g(UO~O|%vO!X%wO!x]O#a(XO#b(WO's%eO~O!a#rO#W(YO(`'dO!V(bX^(bX'j(bX~O!g(bX~PMPO!V(]O!g(aX~O!g(_O~O|%vO!X%wO#b(WO's%eO~Oy(`Oz(aO!f#tO!h#uO!x!wa|!wa~O!t!wa%_!wa!X!wa#a!wa#b!wa's!wa~PNXO!t(eO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#c(kO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's(iO'uTO'xUO'|%OO(Q$rO~Od(ZP~P!$uO!U(oO!g([P~P%QO(T(qO(_[O~O|(sO!h#uO(T(qO(_[O~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~Oz)UO!h#uO~O!V$^O^$ja'j$ja'h$ja!g$ja!S$ja!X$ja%`$ja!a$ja~O#o)YO~P!#]Oy)]O!a)[O!X$WX$S$WX$V$WX$X$WX$`$WX~O!a)[O!X(iX$S(iX$V(iX$X(iX$`(iX~Oy)]O~P!*kOy)]O!X(iX$S(iX$V(iX$X(iX$`(iX~O!X)_O$S)cO$V)^O$X)^O$`)dO~O!U)gO~P!'RO$V$dO$X$cO$`)kO~Og$rXy$rX|$rX!f$rX(g$rX(h$rX~OdfXd$rXgfX!VfX#WfX~P!,aOl)mO~Oq)nO(R)oO(S)qO~Og)zOy)sO|)tO(g)vO(h)xO~Od)rO~P!-jOd){O~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO'uTO'xUO'|%OO(Q$rO~O!U*PO's)|O!g(mP~P!.XO#c*RO~O!h*SO~O!U*XO's*UO!S(nP~P!.XOk*eO|*]O![*cO!]*[O!^*[O!h*SO#S*dO%V*_O't!iO(T!jO~O!W*bO~P!0_O!f#tOg(PXy(PX|(PX(g(PX(h(PX!V(PX#W(PX~Od(PX#x(PX~P!1WOg*hO#W*gOd(OX!V(OX~O!V*iOd'}X~O's%|Od'}P~O!h*pO~O's(iO~O|%vO!U#fO!X%wO!x]O#a#iO#b#fO's%eO!g(aP~O!a#rO#c*tO~OP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^!ba!V!ba'j!ba'h!ba!S!ba!g!bao!ba!X!ba%`!ba!a!ba~P!3jOy#vOz#wO|#xO!f#tO!h#uO(QVOP!naX!nak!na!V!na!e!na!l!na#f!na#g!na#h!na#i!na#j!na#k!na#l!na#m!na#n!na#p!na#r!na#t!na#u!na(`!na(g!na(h!na~O^!na'j!na'h!na!S!na!g!nao!na!X!na%`!na!a!na~P!6TOy#vOz#wO|#xO!f#tO!h#uO(QVOP!paX!pak!pa!V!pa!e!pa!l!pa#f!pa#g!pa#h!pa#i!pa#j!pa#k!pa#l!pa#m!pa#n!pa#p!pa#r!pa#t!pa#u!pa(`!pa(g!pa(h!pa~O^!pa'j!pa'h!pa!S!pa!g!pao!pa!X!pa%`!pa!a!pa~P!8nOg*|O!X'QO%`*{O'|%OO~O!a+OO!X'{X^'{X!V'{X'j'{X~O!h%ZO'|%OO~O!h%ZO's%eO'|%OO~O!a#rO#c(kO~O%a+[O's+WO'uTO'xUO!W(uP~O!V+]O](tX~O(T(qO~OX+aO~O]+bO~O!X%nO's%eO't!iO](tP~O|%vO!U+fO!V(PO!X%wO's%eO!S(dP~Ol&|O|+hO!U+gO'uTO'xUO(T(qO~O!W(fP~P!>RO!V+iO^(qX'j(qX~O#W+mO'|%OO~Og+pO!X$yO'|%OO~O!X+rO~Oy+tO!XXO~O!t+yO~Ob,OO~O's#jO!W(sP~Ob%lO~O%a!OO's%|O~P<bOX,UO],TO~OPYOQYOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O$TfO%_{O'uTO'xUO(QVO(_[O(liO~O!X!cO$P!hO's!bO~P!@fO],TO^%^O'j%^O~O^,YO#o,[O%c,[O%d,[O~P%QO!h&aO~O&S,aO~O!X,cO~O&e,eO&g,fOP&baQ&baV&ba^&baa&bab&bai&bak&bal&bam&bas&bau&baw&ba|&ba!Q&ba!R&ba!X&ba!c&ba!h&ba!k&ba!l&ba!m&ba!o&ba!q&ba!t&ba!x&ba#o&ba$P&ba$T&ba%_&ba%a&ba%c&ba%d&ba%g&ba%i&ba%l&ba%m&ba%o&ba%|&ba&S&ba&U&ba&W&ba&Y&ba&]&ba&c&ba&i&ba&k&ba&m&ba&o&ba&q&ba'h&ba's&ba'u&ba'x&ba(Q&ba(_&ba(l&ba!W&ba&Z&ba_&ba&`&ba~O's,kO~O!V{X!V!_X!W{X!W!_X!a{X!a!_X!h!_X#W{X'|!_X~O!a,pO#W,oO!V#`X!V(YX!W#`X!W(YX!a(YX!h(YX'|(YX~O!a,rO!h%ZO'|%OO!V!ZX!W!ZX~Ol!kO|!lO'uTO'xUO(T!jO~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(l=]O~O's<dO~P!I{O!V,vO!W(XX~O!W,xO~O!a,pO#W,oO!V#`X!W#`X~O!V,yO!W(fX~O!W,{O~O!],|O!^,|O't!iO~P!IjO!W-PO~P'TOg-SO!X'QO~O!S-XO~Ol!wa![!wa!]!wa!^!wa!|!wa!}!wa#O!wa#P!wa#S!wa#T!wa't!wa'u!wa'x!wa(T!wa(_!wa~PNXO^%^O!a#rO!h%ZO!l-^O#W-[O'j%^O'|%OO(`'dO~O!]-`O!^-`O't!iO~PBtO![-bO!]-`O!^-`O#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O#P-dO#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O!}-eO#O-eO#P-dO#S-cO#T-cO't!iO~PBtO^%^O#W-[O'j%^O~O^%^O!a#rO#W-[O'j%^O~O^%^O!a#rO!l-^O#W-[O'j%^O(`'dO~O'o'lO'p'lO'q-jO~Oo-kO~O!S&|a!V&|a~P!3jO!U-oO!S&|X!V&|X~P%QO!V'xO!S(Wa~O!S(Wa~PF_O!V(PO!S(da~O|%vO!U-sO!X%wO's%eO!S'SX!V'SX~O!V(]O!g(aa~O|%vO!X%wO#b-vO's%eO~O#W-xO!V(ba!g(ba^(ba'j(ba~O!a#rO~P#&hO|%vO!U-{O!X%wO!x]O#a-}O#b-{O's%eO!V'UX!g'UX~Oz.RO!h#uO~Og.UO!X'QO%`.TO'|%OO~O^#Zi!V#Zi'j#Zi'h#Zi!S#Zi!g#Zio#Zi!X#Zi%`#Zi!a#Zi~P!3jOg=iOy)sO|)tO(g)vO(h)xO~O#c#Va^#Va#W#Va'j#Va!V#Va!g#Va!X#Va!S#Va~P#(yO#c(PXP(PXX(PX^(PXk(PXz(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX'j(PX(Q(PX(`(PX!g(PX!S(PX'h(PXo(PX!X(PX%`(PX!a(PX~P!1WO!V._Od(ZX~P!-jOd.aO~O!V.bO!g([X~P!3jO!g.eO~O!S.gO~OP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#ei^#eik#ei!V#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O#f#ei~P#,uO#f#{O~P#,uOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O(QVOX#ei^#ei!V#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~Ok#ei~P#/gOk#}O~P#/gOP$YOk#}Oy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO(QVO^#ei!V#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P#2XOX$aO!e$PO#k$PO#l$PO#m$`O#n$PO~P#2XOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO(QVO^#ei!V#ei#r#ei#t#ei#u#ei'j#ei(`#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(g#ei~P#5YO(g#yO~P#5YOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO(QVO(g#yO^#ei!V#ei#t#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(h#ei~P#7zO(h#zO~P#7zOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO(QVO(g#yO(h#zO~O^#ei!V#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#:lOPYXXYXkYXyYXzYX|YX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX!VYX!WYX~O#xYX~P#=VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO#u<RO(QVO(`$WO(g#yO(h#zO~O#x.iO~P#?dOP(VXX(VXk(VXy(VXz(VX|(VX!e(VX!f(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!V(VX~O#W<WO#z<WO#n(VX#x(VX!W(VX~P#AbO^'Xa!V'Xa'j'Xa'h'Xa!g'Xa!S'Xao'Xa!X'Xa%`'Xa!a'Xa~P!3jOP#eiX#ei^#eik#eiz#ei!V#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(Q#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#(yO^#yi!V#yi'j#yi'h#yi!S#yi!g#yio#yi!X#yi%`#yi!a#yi~P!3jO$V.nO$X.nO~O$V.oO$X.oO~O!a)[O#W.pO!X$]X$S$]X$V$]X$X$]X$`$]X~O!U.qO~O!X)_O$S.sO$V)^O$X)^O$`.tO~O!V<SO!W(UX~P#?dO!W.uO~O!a)[O$`(iX~O$`.wO~Oq)nO(R)oO(S.zO~Ol.}O!S/OO'uTO'xUO~O!VcX!acX!gcX!g$rX(`cX~P!,aO!g/UO~P#(yO!V/VO!a#rO(`'dO!g(mX~O!g/[O~O!U*PO's%eO!g(mP~O#c/^O~O!S$rX!V$rX!a$yX~P!,aO!V/_O!S(nX~P#(yO!a/aO~O!S/cO~Ok/gO!a#rO!h%ZO'|%OO(`'dO~O's/iO~O!a+OO~O^%^O!V/mO'j%^O~O!W/oO~P!0_O!]/pO!^/pO't!iO(T!jO~O|/rO(T!jO~O#S/sO~O's%|Od'^X!V'^X~O!V*iOd'}a~Od/xO~Oy/yOz/yO|/zOgva(gva(hva!Vva#Wva~Odva#xva~P#M{Oy)sO|)tOg$ka(g$ka(h$ka!V$ka#W$ka~Od$ka#x$ka~P#NqOy)sO|)tOg$ma(g$ma(h$ma!V$ma#W$ma~Od$ma#x$ma~P$ dO#c/|O~Od${a!V${a#W${a#x${a~P!-jO#c0PO~Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!niX!nik!ni!V!ni!e!ni!l!ni#f!ni#g!ni#h!ni#i!ni#j!ni#k!ni#l!ni#m!ni#n!ni#p!ni#r!ni#t!ni#u!ni(`!ni(g!ni(h!ni~O^!ni'j!ni'h!ni!S!ni!g!nio!ni!X!ni%`!ni!a!ni~P$!qOg.UO!X'QO%`.TO~Oi0WO's0VO~P!.[O!a+OO!X'{a^'{a!V'{a'j'{a~O#c0^O~OXYX!VcX!WcX~O!V0_O!W(uX~O!W0aO~OX0bO~O's+WO'uTO'xUO~O!X%nO's%eO]'fX!V'fX~O!V+]O](ta~O!g0gO~P!3jOX0jO~O]0kO~O!V+iO^(qa'j(qa~O#W0qO~Og0tO!X$yO~O(T(qO!W(rP~Og0}O!X0zO%`0|O'|%OO~OX1XO!V1VO!W(sX~O!W1YO~O]1[O^%^O'j%^O~O's#jO'uTO'xUO~O#W$bO#n1_O#z$bO&Q1`O^(VX~P#AbO#W$bO#n1_O&Q1`O~O^1aO~P%QO^1cO~O&Z1gOP&XiQ&XiV&Xi^&Xia&Xib&Xii&Xik&Xil&Xim&Xis&Xiu&Xiw&Xi|&Xi!Q&Xi!R&Xi!X&Xi!c&Xi!h&Xi!k&Xi!l&Xi!m&Xi!o&Xi!q&Xi!t&Xi!x&Xi#o&Xi$P&Xi$T&Xi%_&Xi%a&Xi%c&Xi%d&Xi%g&Xi%i&Xi%l&Xi%m&Xi%o&Xi%|&Xi&S&Xi&U&Xi&W&Xi&Y&Xi&]&Xi&c&Xi&i&Xi&k&Xi&m&Xi&o&Xi&q&Xi'h&Xi's&Xi'u&Xi'x&Xi(Q&Xi(_&Xi(l&Xi!W&Xi_&Xi&`&Xi~O_1mO!W1kO&`1lO~P`O!XXO!h1oO~O&g,fOP&biQ&biV&bi^&bia&bib&bii&bik&bil&bim&bis&biu&biw&bi|&bi!Q&bi!R&bi!X&bi!c&bi!h&bi!k&bi!l&bi!m&bi!o&bi!q&bi!t&bi!x&bi#o&bi$P&bi$T&bi%_&bi%a&bi%c&bi%d&bi%g&bi%i&bi%l&bi%m&bi%o&bi%|&bi&S&bi&U&bi&W&bi&Y&bi&]&bi&c&bi&i&bi&k&bi&m&bi&o&bi&q&bi'h&bi's&bi'u&bi'x&bi(Q&bi(_&bi(l&bi!W&bi&Z&bi_&bi&`&bi~O!S1uO~O!V!Za!W!Za~P#?dOl!kO|!lO!U1{O(T!jO!V&}X!W&}X~P?cO!V,vO!W(Xa~O!V'TX!W'TX~P!>RO!V,yO!W(fa~O!W2SO~P'TO^%^O#W2]O'j%^O~O^%^O!a#rO#W2]O'j%^O~O^%^O!a#rO!h%ZO!l2aO#W2]O'j%^O'|%OO(`'dO~O!]2bO!^2bO't!iO~PBtO![2eO!]2bO!^2bO#S2fO#T2fO't!iO~PBtO![2eO!]2bO!^2bO#P2gO#S2fO#T2fO't!iO~PBtO^%^O!a#rO!l2aO#W2]O'j%^O(`'dO~O^%^O'j%^O~P!3jO!V$^Oo$ja~O!S&|i!V&|i~P!3jO!V'xO!S(Wi~O!V(PO!S(di~O!S(ei!V(ei~P!3jO!V(]O!g(ai~O!V(bi!g(bi^(bi'j(bi~P!3jO#W2kO!V(bi!g(bi^(bi'j(bi~O|%vO!X%wO!x]O#a2nO#b2mO's%eO~O|%vO!X%wO#b2mO's%eO~Og2uO!X'QO%`2tO~Og2uO!X'QO%`2tO'|%OO~O#cvaPvaXva^vakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva'jva(Qva(`va!gva!Sva'hvaova!Xva%`va!ava~P#M{O#c$kaP$kaX$ka^$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka'j$ka(Q$ka(`$ka!g$ka!S$ka'h$kao$ka!X$ka%`$ka!a$ka~P#NqO#c$maP$maX$ma^$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma'j$ma(Q$ma(`$ma!g$ma!S$ma'h$mao$ma!X$ma%`$ma!a$ma~P$ dO#c${aP${aX${a^${ak${az${a!V${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a'j${a(Q${a(`${a!g${a!S${a'h${a#W${ao${a!X${a%`${a!a${a~P#(yO^#Zq!V#Zq'j#Zq'h#Zq!S#Zq!g#Zqo#Zq!X#Zq%`#Zq!a#Zq~P!3jOd'OX!V'OX~P!$uO!V._Od(Za~O!U2}O!V'PX!g'PX~P%QO!V.bO!g([a~O!V.bO!g([a~P!3jO!S3QO~O#x!ja!W!ja~PI{O#x!ba!V!ba!W!ba~P#?dO#x!na!W!na~P!6TO#x!pa!W!pa~P!8nO!X3dO$TfO$^3eO~O!W3iO~Oo3jO~P#(yO^$gq!V$gq'j$gq'h$gq!S$gq!g$gqo$gq!X$gq%`$gq!a$gq~P!3jO!S3kO~Ol.}O'uTO'xUO~Oy)sO|)tO(h)xOg%Wi(g%Wi!V%Wi#W%Wi~Od%Wi#x%Wi~P$HbOy)sO|)tOg%Yi(g%Yi(h%Yi!V%Yi#W%Yi~Od%Yi#x%Yi~P$ITO(`$WO~P#(yO!U3nO's%eO!V'YX!g'YX~O!V/VO!g(ma~O!V/VO!a#rO!g(ma~O!V/VO!a#rO(`'dO!g(ma~Od$ti!V$ti#W$ti#x$ti~P!-jO!U3vO's*UO!S'[X!V'[X~P!.XO!V/_O!S(na~O!V/_O!S(na~P#(yO!a#rO~O!a#rO#n4OO~Ok4RO!a#rO(`'dO~Od(Oi!V(Oi~P!-jO#W4UOd(Oi!V(Oi~P!-jO!g4XO~O^$hq!V$hq'j$hq'h$hq!S$hq!g$hqo$hq!X$hq%`$hq!a$hq~P!3jO!V4]O!X(oX~P#(yO!f#tO~P3zO!X$rX%TYX^$rX!V$rX'j$rX~P!,aO%T4_OghXyhX|hX!XhX(ghX(hhX^hX!VhX'jhX~O%T4_O~O%a4fO's+WO'uTO'xUO!V'eX!W'eX~O!V0_O!W(ua~OX4jO~O]4kO~O!S4oO~O^%^O'j%^O~P#(yO!X$yO~P#(yO!V4tO#W4vO!W(rX~O!W4wO~Ol!kO|4yO![5WO!]4}O!^4}O!x;oO!|5VO!}5UO#O5UO#P5TO#S5SO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O!W5RO~P%#XOg5]O!X0zO%`5[O~Og5]O!X0zO%`5[O'|%OO~O's#jO!V'dX!W'dX~O!V1VO!W(sa~O'uTO'xUO(T5fO~O]5jO~O!g5mO~P%QO^5oO~O^5oO~P%QO#n5qO&Q5rO~PMPO_1mO!W5vO&`1lO~P`O!a5xO~O!a5zO!V(Yi!W(Yi!a(Yi!h(Yi'|(Yi~O!V#`i!W#`i~P#?dO#W5{O!V#`i!W#`i~O!V!Zi!W!Zi~P#?dO^%^O#W6UO'j%^O~O^%^O!a#rO#W6UO'j%^O~O^%^O!a#rO!l6ZO#W6UO'j%^O(`'dO~O!h%ZO'|%OO~P%(fO!]6[O!^6[O't!iO~PBtO![6_O!]6[O!^6[O#S6`O#T6`O't!iO~PBtO!V(]O!g(aq~O!V(bq!g(bq^(bq'j(bq~P!3jO|%vO!X%wO#b6dO's%eO~O!X'QO%`6gO~Og6jO!X'QO%`6gO~O#c%WiP%WiX%Wi^%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi'j%Wi(Q%Wi(`%Wi!g%Wi!S%Wi'h%Wio%Wi!X%Wi%`%Wi!a%Wi~P$HbO#c%YiP%YiX%Yi^%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi'j%Yi(Q%Yi(`%Yi!g%Yi!S%Yi'h%Yio%Yi!X%Yi%`%Yi!a%Yi~P$ITO#c$tiP$tiX$ti^$tik$tiz$ti!V$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti'j$ti(Q$ti(`$ti!g$ti!S$ti'h$ti#W$tio$ti!X$ti%`$ti!a$ti~P#(yOd'Oa!V'Oa~P!-jO!V'Pa!g'Pa~P!3jO!V.bO!g([i~O#x#Zi!V#Zi!W#Zi~P#?dOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#eik#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~O#f#ei~P%2xO#f;wO~P%2xOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO(QVOX#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~Ok#ei~P%5TOk;yO~P%5TOP$YOk;yOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO(QVO#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P%7`OX<VO!e;{O#k;{O#l;{O#m<UO#n;{O~P%7`OP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O(QVO#r#ei#t#ei#u#ei#x#ei(`#ei(h#ei!V#ei!W#ei~O(g#ei~P%9zO(g#yO~P%9zOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO(QVO(g#yO#t#ei#u#ei#x#ei(`#ei!V#ei!W#ei~O(h#ei~P%<VO(h#zO~P%<VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO(QVO(g#yO(h#zO~O#u#ei#x#ei(`#ei!V#ei!W#ei~P%>bO^#vy!V#vy'j#vy'h#vy!S#vy!g#vyo#vy!X#vy%`#vy!a#vy~P!3jOg=jOy)sO|)tO(g)vO(h)xO~OP#eiX#eik#eiz#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(Q#ei(`#ei!V#ei!W#ei~P%AYO!f#tOP(PXX(PXg(PXk(PXy(PXz(PX|(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX#x(PX(Q(PX(`(PX(g(PX(h(PX!V(PX!W(PX~O#x#yi!V#yi!W#yi~P#?dO#x!ni!W!ni~P$!qO!W6vO~O!V'Xa!W'Xa~P#?dO!a#rO(`'dO!V'Ya!g'Ya~O!V/VO!g(mi~O!V/VO!a#rO!g(mi~Od$tq!V$tq#W$tq#x$tq~P!-jO!S'[a!V'[a~P#(yO!a6}O~O!V/_O!S(ni~P#(yO!V/_O!S(ni~O!S7RO~O!a#rO#n7WO~Ok7XO!a#rO(`'dO~O!S7ZO~Od$vq!V$vq#W$vq#x$vq~P!-jO^$hy!V$hy'j$hy'h$hy!S$hy!g$hyo$hy!X$hy%`$hy!a$hy~P!3jO!V4]O!X(oa~O^#Zy!V#Zy'j#Zy'h#Zy!S#Zy!g#Zyo#Zy!X#Zy%`#Zy!a#Zy~P!3jOX7`O~O!V0_O!W(ui~O]7fO~O!a5zO~O(T(qO!V'aX!W'aX~O!V4tO!W(ra~O!h%ZO'|%OO^(YX!a(YX!l(YX#W(YX'j(YX(`(YX~O's7oO~P.[O!x;oO!|7rO!}7qO#O7qO#P7pO#S'bO#T'bO~PBtO^%^O!a#rO!l'hO#W'fO'j%^O(`'dO~O!W7vO~P%#XOl!kO'uTO'xUO(T!jO(_!nO~O|7wO~P%MdO![7{O!]7zO!^7zO#P7pO#S'bO#T'bO't!iO~PBtO![7{O!]7zO!^7zO!}7|O#O7|O#P7pO#S'bO#T'bO't!iO~PBtO!]7zO!^7zO't!iO(T!jO(_!nO~O!X0zO~O!X0zO%`8OO~Og8RO!X0zO%`8OO~OX8WO!V'da!W'da~O!V1VO!W(si~O!g8[O~O!g8]O~O!g8^O~O!g8^O~P%QO^8`O~O!a8cO~O!g8dO~O!V(ei!W(ei~P#?dO^%^O#W8lO'j%^O~O^%^O!a#rO#W8lO'j%^O~O^%^O!a#rO!l8pO#W8lO'j%^O(`'dO~O!h%ZO'|%OO~P&$QO!]8qO!^8qO't!iO~PBtO!V(]O!g(ay~O!V(by!g(by^(by'j(by~P!3jO!X'QO%`8uO~O#c$tqP$tqX$tq^$tqk$tqz$tq!V$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq'j$tq(Q$tq(`$tq!g$tq!S$tq'h$tq#W$tqo$tq!X$tq%`$tq!a$tq~P#(yO#c$vqP$vqX$vq^$vqk$vqz$vq!V$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq'j$vq(Q$vq(`$vq!g$vq!S$vq'h$vq#W$vqo$vq!X$vq%`$vq!a$vq~P#(yO!V'Pi!g'Pi~P!3jO#x#Zq!V#Zq!W#Zq~P#?dOy/yOz/yO|/zOPvaXvagvakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva#xva(Qva(`va(gva(hva!Vva!Wva~Oy)sO|)tOP$kaX$kag$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka#x$ka(Q$ka(`$ka(g$ka(h$ka!V$ka!W$ka~Oy)sO|)tOP$maX$mag$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma#x$ma(Q$ma(`$ma(g$ma(h$ma!V$ma!W$ma~OP${aX${ak${az${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a#x${a(Q${a(`${a!V${a!W${a~P%AYO#x$gq!V$gq!W$gq~P#?dO#x$hq!V$hq!W$hq~P#?dO!W9PO~O#x9QO~P!-jO!a#rO!V'Yi!g'Yi~O!a#rO(`'dO!V'Yi!g'Yi~O!V/VO!g(mq~O!S'[i!V'[i~P#(yO!V/_O!S(nq~O!S9WO~P#(yO!S9WO~Od(Oy!V(Oy~P!-jO!V'_a!X'_a~P#(yO!X%Sq^%Sq!V%Sq'j%Sq~P#(yOX9]O~O!V0_O!W(uq~O#W9aO!V'aa!W'aa~O!V4tO!W(ri~P#?dOPYXXYXkYXyYXzYX|YX!SYX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!a%QX#n%QX~P&6lO#S-cO#T-cO~PBtO#P9eO#S-cO#T-cO~PBtO!}9fO#O9fO#P9eO#S-cO#T-cO~PBtO!]9iO!^9iO't!iO(T!jO(_!nO~O![9lO!]9iO!^9iO#P9eO#S-cO#T-cO't!iO~PBtO!X0zO%`9oO~O'uTO'xUO(T9tO~O!V1VO!W(sq~O!g9wO~O!g9wO~P%QO!g9yO~O!g9zO~O#W9|O!V#`y!W#`y~O!V#`y!W#`y~P#?dO^%^O#W:QO'j%^O~O^%^O!a#rO#W:QO'j%^O~O^%^O!a#rO!l:UO#W:QO'j%^O(`'dO~O!X'QO%`:XO~O#x#vy!V#vy!W#vy~P#?dOP$tiX$tik$tiz$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti#x$ti(Q$ti(`$ti!V$ti!W$ti~P%AYOy)sO|)tO(h)xOP%WiX%Wig%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi#x%Wi(Q%Wi(`%Wi(g%Wi!V%Wi!W%Wi~Oy)sO|)tOP%YiX%Yig%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi#x%Yi(Q%Yi(`%Yi(g%Yi(h%Yi!V%Yi!W%Yi~O#x$hy!V$hy!W$hy~P#?dO#x#Zy!V#Zy!W#Zy~P#?dO!a#rO!V'Yq!g'Yq~O!V/VO!g(my~O!S'[q!V'[q~P#(yO!S:`O~P#(yO!V0_O!W(uy~O!V4tO!W(rq~O#S2fO#T2fO~PBtO#P:gO#S2fO#T2fO~PBtO!]:kO!^:kO't!iO(T!jO(_!nO~O!X0zO%`:nO~O!g:qO~O^%^O#W:vO'j%^O~O^%^O!a#rO#W:vO'j%^O~O!X'QO%`:{O~OP$tqX$tqk$tqz$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq#x$tq(Q$tq(`$tq!V$tq!W$tq~P%AYOP$vqX$vqk$vqz$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq#x$vq(Q$vq(`$vq!V$vq!W$vq~P%AYOd%[!Z!V%[!Z#W%[!Z#x%[!Z~P!-jO!V'aq!W'aq~P#?dO#S6`O#T6`O~PBtO!V#`!Z!W#`!Z~P#?dO^%^O#W;ZO'j%^O~O#c%[!ZP%[!ZX%[!Z^%[!Zk%[!Zz%[!Z!V%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z'j%[!Z(Q%[!Z(`%[!Z!g%[!Z!S%[!Z'h%[!Z#W%[!Zo%[!Z!X%[!Z%`%[!Z!a%[!Z~P#(yOP%[!ZX%[!Zk%[!Zz%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z#x%[!Z(Q%[!Z(`%[!Z!V%[!Z!W%[!Z~P%AYOo(UX~P1dO't!iO~P!'RO!ScX!VcX#WcX~P&6lOPYXXYXkYXyYXzYX|YX!VYX!VcX!eYX!fYX!hYX!lYX#WYX#WcX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!acX!gYX!gcX(`cX~P'!sOP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!XXO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~O!V<SO!W$ja~Oi%POk$qOl$pOm$pOs%QOu%ROw<YO|$xO!X$yO!c=dO!h$uO#b<`O$P%VO$l<[O$n<^O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#o)YO~P''iO!WYX!WcX~P'!sO#c;vO~O!a#rO#c;vO~O#W<WO~O#n;{O~O#W<bO!V(eX!W(eX~O#W<WO!V(cX!W(cX~O#c<cO~Od<eO~P!-jO#c<jO~O#c<kO~O!a#rO#c<lO~O!a#rO#c<cO~O#x<mO~P#?dO#c<nO~O#c<oO~O#c<pO~O#c<qO~O#c<rO~O#c<sO~O#x<tO~P!-jO#x<uO~P!-jO$T~!f!|#O#P#S#a#b#m(l$l$n$q%T%_%`%a%g%i%l%m%o%q~'nR$T(l#g!R'l't#hl#f#iky'm(T'm's$V$X$V~",
    goto: "$/X(yPPPP(zP(}P)_P+a/fPPPP6iPP7OP<|@mPAQPAQPPPAQPBpPAQPAQPAQPBtPPByPCdPH`PPPHdPPPPHdKfPPPKlMlPHdP!!SPPPP!$eHdPPPHdPHdP!&vHdP!*]!+_!+dP!,U!,Y!,UPPPP!/f!1kPP!1t!3OP!+_HdHd!6b!9m!>v!>v!BnPPP!BuHdPPPPPPPPPPP!FTP!GiPPHd!HyPHdPHdHdHdHdPHd!J`PP!MiP#!nP#!r#!|##Q##QP!MfP##U##UP#&ZP#&_HdHd#&e#)iAQPAQPAQAQP#*sAQAQ#,mAQ#.zAQ#0nAQAQ#1[#3W#3W#3[#3d#3W#3lP#3WPAQ#4hAQ#5pAQAQ6iPPP#6{PP#7e#7eP#7eP#7z#7ePP#8QP#7wP#7w#8d!1p#7w#9O#9U6f(}#9X(}P#9`#9`#9`P(}P(}P(}P(}PP(}P#9f#9iP#9i(}P#9mP#9pP(}P(}P(}P(}P(}P(}(}PP#9v#9|#:W#:^#:d#:j#:p#;O#;U#;[#;f#;l#<h#<w#<}#=a#=g#=m#={#>b#?r#@Q#@W#@^#@d#@j#@t#@z#AQ#A[#An#AtPPPPPPPPPP#AzPPPPPPP#Bn#FYP#Gu#G|#HUPPPP#L`$ U$'t$'w$'z$)w$)z$)}$*UPP$*[$*`$+X$,X$,]$,qPP$,u$,{$-PP$-S$-W$-Z$.P$.g$.l$.o$.r$.x$.{$/P$/TR!yRmpOXr!X#a%]&d&f&g&i,^,c1g1jU!pQ'Q-OQ%ctQ%kwQ%rzQ&[!TS&x!c,vQ'W!f[']!m!r!s!t!u!vS*[$y*aQ+U%lQ+c%tQ+}&UQ,|'PQ-W'XW-`'^'_'`'aQ/p*cQ1U,OU2b-b-d-eS4}0z5QS6[2e2gU7z5U5V5WQ8q6_S9i7{7|Q:k9lR<a;r%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;ZS#m];o!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q*l%SQ+Z%nQ,P&XQ,W&aQ.X<XQ0T*|Q0X+OQ0d+[Q1^,UQ2q.UQ4e0_Q5d1VQ6i2uQ6o<YQ7b4fR8x6j'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#S!kQ!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e0z2b2e2f2g4z5Q5S5T5U5V6[6_6`7p7q7r7|8q9e9f:g$Y$pi#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ%uzQ&v!cS&|%w,yQ+Z%nS.})t/PQ/{*pQ0d+[Q0i+bQ1],TQ1^,UQ4e0_Q4n0kQ5g1XQ5h1[Q7b4fQ7e4kQ8Z5jQ9`7fR9u8WpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR,R&]&x`OPXYrstux!X!^!g!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=_=`[#YWZ#T#W&y'vQ%fvQ%jwS%oz%t!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ&Q!RQ'T!eQ'V!fQ(d#oS*O$u*SS+T%k%lQ+X%nQ+x&SQ+|&US-V'W'XQ.W(eQ/Z*PQ0]+UQ0c+[Q0e+]Q0h+aQ1P+yS1T+},OQ2X-WQ3m/VQ4d0_Q4h0bQ4m0jQ5c1UQ6z3nQ7a4fQ7d4jQ9[7`R:b9]v$wi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!`%hw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TQ*}%fQ+n%}Q+q&OQ+{&UQ.V(dQ1O+xU1S+|+},OQ2v.WQ5^1PS5b1T1US7n4x4|Q8V5cU9g7s7x7yU:i9h9j9kQ;R:jQ;a;S!z=a#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg=b<U<V<[<^<`<g<i<k<o<q<uW$|i%O*i=]S%}!O&ZQ&O!PQ&P!QR+l%{$Z${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jT)o$r)pV*m%S<X<YU&|!c%w,yS(r#v#wQ+`%qS.P(`(aQ0u+rQ4V/yR7j4t'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`$o$]c#V#b%a%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.j.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=ST#QV#R'PkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q&z!cR1|,v!z!kQ!c!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e2b2e2f2g4z5S5T6[6_6`7p7q7r8q9e9f:gS*Z$y*aS/h*[*cQ/q*dQ0w+tQ4Q/pQ4T/sS4x0z5QS7s4}5WS7x5U5VS9h7z7{Q9j7|S:j9i9lR;S:klpOXr!X#a%]&d&f&g&i,^,c1g1jQ&k![Q'j!tS(f#q;vQ+R%iQ+v&QQ+w&RQ-T'UQ-g'cS.](k<cS0O*t<lQ0Z+SQ0y+uQ1n,eQ1p,fQ1x,qQ2V-UQ2Y-YS4[0P<rQ4`0[S4c0^<sQ5|1zQ6Q2WQ6V2_Q7_4aQ8g6OQ8h6RQ8k6WQ9{8dQ:P8mQ:u:RR;Y:w$j$[c#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(c#l'ZU*f$z(j3aS*x%a.jQ2r0TQ6f2qQ8w6iR:Y8x$j$Zc#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(b#l'ZS(t#w$[S*w%a.jS.Q(a(cQ.m)UQ0Q*xR2o.R'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S#m];oQ&f!VQ&g!WQ&i!YQ&j!ZR1f,aQ'R!eQ*z%fQ-R'TS.S(d*}Q2T-QW2s.V.W0S0UQ6P2UU6e2p2r2vS8t6f6hS:W8v8wS:y:V:YQ;[:zR;e;]V!qQ'Q-O!_^OQXZ_r!T!X!m#a#d%Z%]&Z&]&d&f&g&i'Q(],^,c-O-z0z1g1j4z5QT#m];o%[yOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS(r#v#wS.P(`(a!s<y$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`U!oQ'Q-OY'[!m!s!t!u!vS'i!p!rW'k!w4z5S5TS-_']'^U-a'_'`'aW-f'b7p7q7rS2`-`-bU2c-c9e9fS2d-d-eS4|0z5QS6Y2b2eS6]2f:gQ6^2gS7s4}5WS7y5U5VS8o6[6_Q8r6`S9h7z7{Q9k7|Q:T8qS:j9i9lR;S:kU!qQ'Q-OT5O0z5QU'h!o4{4|S([#e1dU-^'['k7yQ/Y*OQ/f*ZU2a-a-f9kQ3r/ZS3{/g/qS6Z2c2dQ6y3mS7U4R4TS8p6]6^Q9S6zQ9Z7XR:U8rQ#sbU'g!o4{4|S(Z#e1dQ*u%[Q+P%gQ+V%mW-]'['h'k7yQ-y([Q/X*OQ/e*ZQ/k*^Q0Y+QQ1Q+zW2^-^-a-f9kS3q/Y/ZS3z/f/qQ3}/jQ4P/lQ5`1RU6X2a2c2dQ6x3mQ6|3rS7Q3{4TQ7V4SQ8T5aU8n6Z6]6^S9R6y6zQ9V7RQ9X7UQ9c7mQ9r8US:S8p8rQ:^9SQ:_9WQ:a9ZQ:f9dQ:p9sQ:x:UQ:}:`Q;P:hQ;_;QQ;h;`Q;l;iQ<|<wQ=X=QR=Y=R%[aOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS#sx!g!r<v$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<|=_%[bOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZQ%[j!`%gw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TS%mx!gQ+Q%hQ+z&UW1R+{+|+},OU5a1S1T1US7m4x4|S8U5b5cW9d7n7s7x7yQ9s8VW:h9g9h9j9kS;Q:i:jS;`;R;SQ;i;a!r<w$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q=Q=^R=R=_%OeOPXYrstu!X!^!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZY#_WZ#T#W'v!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ,X&a!p<x$X$j)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<{&yS&}!c%wR2O,y%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;Z!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q,W&aQ0T*|Q2q.UQ6i2uR8x6j!l$Rc#V%a'u'{(g(n(})O)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!T;})S)e,t.j1v1y3R3Z3[3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!h$Tc#V%a'u'{(g(n)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!P<P)S)e,t.j1v1y3R3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!d$Xc#V%a'u'{(g(n)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;pQ3l/Tz=`)S)e,t.j1v1y3R3b3h5}6n6s6t7l8f8y8}9O:d:r=SQ=e=gR=f=h'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S$kh$lR3e.p'VgOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$gf$mQ$efS)^$h)bR)j$mT$ff$mT)`$h)b'VhOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$kh$lQ$nhR)i$l%[jOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;Z!s=^$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#alOPXZr!X!^!l#P#a#k#x$j%]&]&`&a&d&f&g&i&m&u'S(s)g*|+h,Y,^,c-S.U.q/z0}1_1`1a1c1g1j1l2u3d4y5]5o5q5r6j7w8R8`v$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jQ*q%WQ.|)sg3a<U<V<[<^<`<g<i<k<o<q<uv$vi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=fQ*T$wS*^$y*aQ*r%XQ/l*_!z=O#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jf=P<U<V<[<^<`<g<i<k<o<q<uQ=T=aQ=U=bQ=V=cR=W=dv$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg3a<U<V<[<^<`<g<i<k<o<q<ulnOXr!X#a%]&d&f&g&i,^,c1g1jQ*W$xQ,l&pQ,m&rR3u/_$Y${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ+o&OQ0s+qQ4r0rR7i4sT*`$y*aS*`$y*aT5P0z5QS/j*]4yT4S/r7wQ+P%gQ/k*^Q0Y+QQ1Q+zQ5`1RQ8T5aQ9c7mQ9r8UQ:f9dQ:p9sQ;P:hQ;_;QQ;h;`R;l;in)w$s(l*s/]/t/u2z3s4Y6w7Y:]<}=Z=[!W<f(h)X)}*V.[.x/T/b0R0p0r2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h]<g3`6r8z:Z:[;fp)y$s(l*s/R/]/t/u2z3s4Y6w7Y:]<}=Z=[!Y<h(h)X)}*V.[.x/T/b0R0p0r2w2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h_<i3`6r8z8{:Z:[;fpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ&W!SR,Y&apmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR&W!SQ+s&PR0o+lqmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ0{+xS5Z1O1PU7}5X5Y5^S9n8P8QS:l9m9pQ;T:mR;b;UQ&_!TR,S&ZR5g1XS%oz%tR0e+]Q&d!UR,^&eR,d&jT1h,c1jR,h&kQ,g&kR1q,hQ'm!xR-i'mQrOQ#aXT%`r#aQ!{TR'o!{Q#OUR'q#OQ)p$rR.y)pQ#RVR's#RQ#UWU'y#U'z-pQ'z#VR-p'{Q,w&zR1},wQ.`(lR2{.`Q.c(nS3O.c3PR3P.dQ-O'QR2R-Or_OXr!T!X#a%]&Z&]&d&f&g&i,^,c1g1jU!mQ'Q-OS#dZ%ZY#n_!m#d-z4zQ-z(]T4z0z5QS#[W%vU(Q#[(R-qQ(R#]R-q'|Q,z&}R2P,zQ(^#gQ-t(VW.O(^-t2h6aQ2h-uR6a2iQ)b$hR.r)bQ$lhR)h$lQ$_cU)W$_-l<TQ-l;pR<T)eQ/W*OW3o/W3p6{9TU3p/X/Y/ZS6{3q3rR9T6|#m)u$s(h(l)X)}*V*n*o*s.Y.Z.[.x/R/S/T/]/b/t/u0R0p0r2w2x2y2z3`3s3t3x4Y4q4s6k6l6p6q6r6w7O7S7Y7[7^8z8{8|9U9Y:Z:[:]:|;f<}=Z=[=g=hQ/`*VU3w/`3y7PQ3y/bR7P3xQ*a$yR/n*aQ*j$}R/w*jQ4^0RR7]4^Q+j%yR0n+jQ4u0uS7k4u9bR9b7lQ+u&QR0x+uQ5Q0zR7u5QQ1W,PS5e1W8XR8X5gQ0`+XW4g0`4i7c9^Q4i0cQ7c4hR9^7dQ+^%oR0f+^Q1j,cR5u1jWqOXr#aQ&h!XQ*v%]Q,]&dQ,_&fQ,`&gQ,b&iQ1e,^S1h,c1jR5t1gQ%_oQ&l!]Q&o!_Q&q!`Q&s!aU'e!o4{4|Q+e%uQ+k%zQ,R&_Q,j&nY-Z'['g'h'k7yQ/m*`S1Z,S,VQ1r,iQ1s,lQ1t,m[2[-]-^-a-f-h9kQ4l0iQ4p0pQ5_1QQ5i1]Q5s1fY6S2Z2^2a2c2dQ7g4nQ7h4qQ7t5PQ8S5`Q8Y5hY8i6T6X6Z6]6^Q9_7eQ9q8TQ9v8ZW9}8j8n8p8rQ:c9`Q:e9cQ:o9rU:s:O:S:UQ;O:fQ;V:pS;W:t:xQ;^;PQ;c;XQ;g;_Q;j;dQ;k;hR;m;lQ%iwQ'U!fQ'c!oU+S%j%k%lQ,q&wU-U'V'W'XS-Y'['iQ/d*ZS0[+T+UQ1z,sS2W-V-WS2_-_-aQ3|/hQ4a0]Q6O2QQ6R2XS6W2`2dQ7T4QS8m6Y6^Q:R8oR:w:TS$ti=]R*k%OU$}i%O=]R/v*iQ$siS(h#r+OQ(l#tS)X$`$aQ)}$uQ*V$xQ*n%TQ*o%UQ*s%YQ.Y<ZQ.Z<]Q.[<_Q.x)nQ/R)wQ/S)yQ/T)zQ/]*RQ/b*XQ/t*gQ/u*hh0R*{.T0|2t5[6g8O8u9o:X:n:{Q0p+mQ0r+pQ2w<fQ2x<hQ2y<jQ2z._S3`<U<VQ3s/^Q3t/_Q3x/aQ4Y/|Q4q0qQ4s0tQ6k<nQ6l<pQ6p<[Q6q<^Q6r<`Q6w3lQ7O3vQ7S4OQ7Y4UQ7[4]Q7^4_Q8z<kQ8{<gQ8|<iQ9U6}Q9Y7WQ:Z<oQ:[<qQ:]9QQ:|<tQ;f<uQ<}=]Q=Z=eQ=[=fQ=g=iR=h=jloOXr!X#a%]&d&f&g&i,^,c1g1jQ!dPS#cZ#kQ&n!^U'Y!l4y7wQ'r#PQ(u#xQ)f$jS,V&]&`Q,Z&aQ,i&mQ,n&uQ-Q'SQ.f(sQ.v)gQ0U*|Q0l+hQ1b,YQ2U-SQ2r.UQ3g.qQ4W/zQ5Y0}Q5k1_Q5l1`Q5n1aQ5p1cQ5w1lQ6f2uQ6u3dQ8Q5]Q8_5oQ8a5qQ8b5rQ8w6jQ9p8RR9x8`#UcOPXZr!X!^!l#a#k#x%]&]&`&a&d&f&g&i&m&u'S(s*|+h,Y,^,c-S.U/z0}1_1`1a1c1g1j1l2u4y5]5o5q5r6j7w8R8`Q#VWQ#bYQ%asQ%btQ%duS'u#T'xQ'{#WQ(g#qQ(n#uQ(v#{Q(w#|Q(x#}Q(y$OQ(z$PQ({$QQ(|$RQ(}$SQ)O$TQ)P$UQ)Q$VQ)S$XQ)V$^Q)Z$bW)e$j)g.q3dQ*y%cQ+_%pS,t&y1{Q-h'fS-m'v-oQ-r(OQ-w(YQ.^(kQ.d(oQ.h;nQ.j;qQ.k;rQ.l;sQ.{)rQ/}*tQ1v,oQ1y,rQ2Z-[Q2j-xQ2|.bQ3R;vQ3S;wQ3T;xQ3U;yQ3V;zQ3W;{Q3X;|Q3Y;}Q3Z<OQ3[<PQ3]<QQ3^<RQ3_.iQ3b<WQ3c<aQ3h<SQ4Z0PQ4b0^Q5}<bQ6T2]Q6b2kQ6m2}Q6n<cQ6s<eQ6t<lQ7l4vQ8f5{Q8j6UQ8y<mQ8}<rQ9O<sQ:O8lQ:d9aQ:r9|Q:t:QQ;X:vQ;d;ZQ;p#PR=S=`R#XWR&{!cU!oQ'Q-OS&w!c,vY'[!m!s!t!u!vS'i!p!r['k!w4z5S5T5U5VS,s&x'PS-_']'^U-a'_'`'aY-f'b7p7q7r7|Q2Q,|S2`-`-bU2c-c9e9fS2d-d-eS4{0z5QS6Y2b2eS6]2f:gQ6^2gS8o6[6_Q8r6`R:T8qR(m#tR(p#uQ!dQT,}'Q-OQ#l]R'Z;oT#hZ%ZS#gZ%ZU%y|},[U(V#d#f#iS-u(W(XQ-|(]Q0m+iQ2i-vU2l-z-{-}S6c2m2nR8s6d`#ZW#T#W%v'v(P+f-st#eZ|}#d#f#i%Z(W(X(]+i-v-z-{-}2m2n6dQ1d,[Q1w,pQ5y1oQ8e5zT<z&y+gT#^W%vS#]W%vS'w#T(PS'|#W+fS,u&y+gT-n'v-sT'O!c%wQ$hfR)l$mT)a$h)bR3f.pT*Q$u*SR*Y$xQ0S*{Q2p.TQ5X0|Q6h2tQ8P5[Q8v6gQ9m8OQ:V8uQ:m9oQ:z:XQ;U:nR;]:{lpOXr!X#a%]&d&f&g&i,^,c1g1jQ&^!TR,R&ZV%z|},[R0v+rR,Q&XQ%szR+d%tR+Y%nT&b!U&eT&c!U&eT1i,c1j",
    nodeNames: "⚠ ArithOp ArithOp LineComment BlockComment Script ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
    maxTerm: 362,
    context: lf,
    nodeProps: [
        ["group", -26, 6, 14, 16, 62, 198, 202, 205, 206, 208, 211, 214, 225, 227, 233, 235, 237, 239, 242, 248, 254, 256, 258, 260, 262, 264, 265, "Statement", -32, 10, 11, 25, 28, 29, 35, 45, 48, 49, 51, 56, 64, 72, 76, 78, 80, 81, 102, 103, 112, 113, 130, 133, 135, 136, 137, 138, 140, 141, 161, 162, 164, "Expression", -23, 24, 26, 30, 34, 36, 38, 165, 167, 169, 170, 172, 173, 174, 176, 177, 178, 180, 181, 182, 192, 194, 196, 197, "Type", -3, 84, 95, 101, "ClassItem"],
        ["openedBy", 31, "InterpolationStart", 50, "[", 54, "{", 69, "(", 142, "JSXStartTag", 154, "JSXStartTag JSXStartCloseTag"],
        ["closedBy", 33, "InterpolationEnd", 44, "]", 55, "}", 70, ")", 143, "JSXSelfCloseEndTag JSXEndTag", 159, "JSXEndTag"]
    ],
    propSources: [Of],
    skippedNodes: [0, 3, 4, 268],
    repeatNodeCount: 32,
    tokenData: "$>y(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tu>PuvBavwDxwxGgxyMvyz! Qz{!![{|!%O|}!&]}!O!%O!O!P!'g!P!Q!1w!Q!R#0t!R![#3T![!]#@T!]!^#Aa!^!_#Bk!_!`#GS!`!a#In!a!b#N{!b!c$$z!c!}>P!}#O$&U#O#P$'`#P#Q$,w#Q#R$.R#R#S>P#S#T$/`#T#o$0j#o#p$4z#p#q$5p#q#r$7Q#r#s$8^#s$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$I|>P$I|$I}$<s$I}$JO$<s$JO$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(n%d_$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$c&j'vp'y!b'l(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'w#S$c&j'm(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$c&j'vp'y!b'm(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$c&j!l$Ip'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'u$(n$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$c&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$^#t$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$^#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$^#t$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'y!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$^#t'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|<[i$c&j(_!L^'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!Q%Z!Q![<P![!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|=|P;=`<%l<P(CS>`k$c&j'vp'y!b(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P+d@`k$c&j'vp'y!b$V#tOY%ZYZ&cZr%Zrs&}st%Ztu@Tuw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![@T![!^%Z!^!_*g!_!c%Z!c!}@T!}#O%Z#O#P&c#P#R%Z#R#S@T#S#T%Z#T#o@T#o#p*g#p$g%Z$g;'S@T;'S;=`BT<%lO@T+dBWP;=`<%l@T(CSB^P;=`<%l>P%#SBl`$c&j'vp'y!b#h$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SCy_$c&j#z$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfETa(h%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sv%ZvwFYwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SFe`$c&j#t$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2bGp_'x$)`$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo*QHv_$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo)`IzX$c&jOwIuwx6cx!^Iu!^!_Jg!_#oIu#o#pJg#p;'SIu;'S;=`KP<%lOIu#tJjTOwJgwx7]x;'SJg;'S;=`Jy<%lOJg#tJ|P;=`<%lJg)`KSP;=`<%lIu*QK`]$^#t$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$fL^Z'vpOYLXYZJgZrLXrsJgswLXwxMPx#OLX#O#PJg#P;'SLX;'S;=`Mj<%lOLX$fMWU$^#t'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$fMmP;=`<%lLX*QMsP;=`<%lHo(*QNR_!h(!b$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l! ]_!gM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!!ib$c&j'vp'y!b't#)d#i$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!#q{!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!#|`$c&j'vp'y!b#f$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!%Z`$c&j'vp'y!bk&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!&h_!V&;l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!'rc$c&j'vp'y!by'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!(}!P!Q%Z!Q![!+g![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!)Wa$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!*]!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!*h_!UMt$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!+rg$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!+g![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S!+g#S#X%Z#X#Y!-Z#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!-dg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!.{|}%Z}!O!.{!O!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!/Uc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!0lc$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!2Sf$c&j'vp'y!b#g$IdOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}xz!3hz{#$s{!P!3h!P!Q#&Y!Q!^!3h!^!_!Mh!_!`#-x!`!a#/_!a!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(r!3sb$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(Q!5U`$c&j'y!b!RSOY!4{YZ&cZw!4{wx!6Wx!P!4{!P!Q!=o!Q!^!4{!^!_!?g!_!}!4{!}#O!Bn#O#P!<w#P#o!4{#o#p!?g#p;'S!4{;'S;=`!Cw<%lO!4{&n!6_^$c&j!RSOY!6WYZ&cZ!P!6W!P!Q!7Z!Q!^!6W!^!_!8g!_!}!6W!}#O!;U#O#P!<w#P#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!7ba$c&j!RSO!^&c!_#Z&c#Z#[!7Z#[#]&c#]#^!7Z#^#a&c#a#b!7Z#b#g&c#g#h!7Z#h#i&c#i#j!7Z#j#m&c#m#n!7Z#n#o&c#p;'S&c;'S;=`&w<%lO&cS!8lX!RSOY!8gZ!P!8g!P!Q!9X!Q!}!8g!}#O!9p#O#P!:o#P;'S!8g;'S;=`!;O<%lO!8gS!9^U!RS#Z#[!9X#]#^!9X#a#b!9X#g#h!9X#i#j!9X#m#n!9XS!9sVOY!9pZ#O!9p#O#P!:Y#P#Q!8g#Q;'S!9p;'S;=`!:i<%lO!9pS!:]SOY!9pZ;'S!9p;'S;=`!:i<%lO!9pS!:lP;=`<%l!9pS!:rSOY!8gZ;'S!8g;'S;=`!;O<%lO!8gS!;RP;=`<%l!8g&n!;Z[$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#O!;U#O#P!<P#P#Q!6W#Q#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<UX$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<tP;=`<%l!;U&n!<|X$c&jOY!6WYZ&cZ!^!6W!^!_!8g!_#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!=lP;=`<%l!6W(Q!=xi$c&j'y!b!RSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!=o#[#]&}#]#^!=o#^#a&}#a#b!=o#b#g&}#g#h!=o#h#i&}#i#j!=o#j#m&}#m#n!=o#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!?nZ'y!b!RSOY!?gZw!?gwx!8gx!P!?g!P!Q!@a!Q!}!?g!}#O!Ap#O#P!:o#P;'S!?g;'S;=`!Bh<%lO!?g!f!@hb'y!b!RSOY'}Zw'}x#O'}#P#Z'}#Z#[!@a#[#]'}#]#^!@a#^#a'}#a#b!@a#b#g'}#g#h!@a#h#i'}#i#j!@a#j#m'}#m#n!@a#n;'S'};'S;=`(f<%lO'}!f!AuX'y!bOY!ApZw!Apwx!9px#O!Ap#O#P!:Y#P#Q!?g#Q;'S!Ap;'S;=`!Bb<%lO!Ap!f!BeP;=`<%l!Ap!f!BkP;=`<%l!?g(Q!Bu^$c&j'y!bOY!BnYZ&cZw!Bnwx!;Ux!^!Bn!^!_!Ap!_#O!Bn#O#P!<P#P#Q!4{#Q#o!Bn#o#p!Ap#p;'S!Bn;'S;=`!Cq<%lO!Bn(Q!CtP;=`<%l!Bn(Q!CzP;=`<%l!4{'`!DW`$c&j'vp!RSOY!C}YZ&cZr!C}rs!6Ws!P!C}!P!Q!EY!Q!^!C}!^!_!GQ!_!}!C}!}#O!JX#O#P!<w#P#o!C}#o#p!GQ#p;'S!C};'S;=`!Kb<%lO!C}'`!Eci$c&j'vp!RSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!EY#[#](r#]#^!EY#^#a(r#a#b!EY#b#g(r#g#h!EY#h#i(r#i#j!EY#j#m(r#m#n!EY#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!GXZ'vp!RSOY!GQZr!GQrs!8gs!P!GQ!P!Q!Gz!Q!}!GQ!}#O!IZ#O#P!:o#P;'S!GQ;'S;=`!JR<%lO!GQt!HRb'vp!RSOY)rZr)rs#O)r#P#Z)r#Z#[!Gz#[#])r#]#^!Gz#^#a)r#a#b!Gz#b#g)r#g#h!Gz#h#i)r#i#j!Gz#j#m)r#m#n!Gz#n;'S)r;'S;=`*Z<%lO)rt!I`X'vpOY!IZZr!IZrs!9ps#O!IZ#O#P!:Y#P#Q!GQ#Q;'S!IZ;'S;=`!I{<%lO!IZt!JOP;=`<%l!IZt!JUP;=`<%l!GQ'`!J`^$c&j'vpOY!JXYZ&cZr!JXrs!;Us!^!JX!^!_!IZ!_#O!JX#O#P!<P#P#Q!C}#Q#o!JX#o#p!IZ#p;'S!JX;'S;=`!K[<%lO!JX'`!K_P;=`<%l!JX'`!KeP;=`<%l!C}(r!Ksk$c&j'vp'y!b!RSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[!Kh#[#]%Z#]#^!Kh#^#a%Z#a#b!Kh#b#g%Z#g#h!Kh#h#i%Z#i#j!Kh#j#m%Z#m#n!Kh#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W!Mq]'vp'y!b!RSOY!MhZr!Mhrs!?gsw!Mhwx!GQx!P!Mh!P!Q!Nj!Q!}!Mh!}#O#!U#O#P!:o#P;'S!Mh;'S;=`##U<%lO!Mh#W!Nse'vp'y!b!RSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[!Nj#[#]*g#]#^!Nj#^#a*g#a#b!Nj#b#g*g#g#h!Nj#h#i*g#i#j!Nj#j#m*g#m#n!Nj#n;'S*g;'S;=`+Z<%lO*g#W#!]Z'vp'y!bOY#!UZr#!Urs!Apsw#!Uwx!IZx#O#!U#O#P!:Y#P#Q!Mh#Q;'S#!U;'S;=`##O<%lO#!U#W##RP;=`<%l#!U#W##XP;=`<%l!Mh(r##e`$c&j'vp'y!bOY##[YZ&cZr##[rs!Bnsw##[wx!JXx!^##[!^!_#!U!_#O##[#O#P!<P#P#Q!3h#Q#o##[#o#p#!U#p;'S##[;'S;=`#$g<%lO##[(r#$jP;=`<%l##[(r#$pP;=`<%l!3h(CS#%Qb$c&j'vp'y!b'n(;d!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(CS#&e_$c&j'vp'y!bR(;dOY#&YYZ&cZr#&Yrs#'dsw#&Ywx#*tx!^#&Y!^!_#,s!_#O#&Y#O#P#(f#P#o#&Y#o#p#,s#p;'S#&Y;'S;=`#-r<%lO#&Y(Bb#'m]$c&j'y!bR(;dOY#'dYZ&cZw#'dwx#(fx!^#'d!^!_#)w!_#O#'d#O#P#(f#P#o#'d#o#p#)w#p;'S#'d;'S;=`#*n<%lO#'d(AO#(mX$c&jR(;dOY#(fYZ&cZ!^#(f!^!_#)Y!_#o#(f#o#p#)Y#p;'S#(f;'S;=`#)q<%lO#(f(;d#)_SR(;dOY#)YZ;'S#)Y;'S;=`#)k<%lO#)Y(;d#)nP;=`<%l#)Y(AO#)tP;=`<%l#(f(<v#*OW'y!bR(;dOY#)wZw#)wwx#)Yx#O#)w#O#P#)Y#P;'S#)w;'S;=`#*h<%lO#)w(<v#*kP;=`<%l#)w(Bb#*qP;=`<%l#'d(Ap#*}]$c&j'vpR(;dOY#*tYZ&cZr#*trs#(fs!^#*t!^!_#+v!_#O#*t#O#P#(f#P#o#*t#o#p#+v#p;'S#*t;'S;=`#,m<%lO#*t(<U#+}W'vpR(;dOY#+vZr#+vrs#)Ys#O#+v#O#P#)Y#P;'S#+v;'S;=`#,g<%lO#+v(<U#,jP;=`<%l#+v(Ap#,pP;=`<%l#*t(=h#,|Y'vp'y!bR(;dOY#,sZr#,srs#)wsw#,swx#+vx#O#,s#O#P#)Y#P;'S#,s;'S;=`#-l<%lO#,s(=h#-oP;=`<%l#,s(CS#-uP;=`<%l#&Y%#W#.Vb$c&j#z$Id'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h+h#/lb$S#t$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h$/l#1Pp$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#U%Z#U#V#6_#V#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#d#9g#d#l%Z#l#m#<i#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#3`k$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#5`_$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#6hd$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#8Rf$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#9pc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;We$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#<rg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>fi$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#@b_!a$b$c&j#x%<f'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Al_^l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Bz^'|!*v!e'.r'vp'y!b$T)d(lSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Cv!Q!^*g!^!_#Dl!_!`#F^!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#DPX$e&j'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#DuZ#j$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Eh!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#EqX#z$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#FgX#k$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh#G_a#W%?x$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a#Hd!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W#Ho_#c$Ih$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#I}adBf#k$Id$`#|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`#KS!`!a#L^!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#K__#k$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#Lia#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`!a#Mn!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#My`#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$ Wc(`$Ip$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$!c!P!^%Z!^!_*g!_!a%Z!a!b$#m!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$!n_z'#p$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$#x`$c&j#u$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$%V_!x!Ln$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$&a_|(8n$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$'eZ$c&jO!^$(W!^!_$(n!_#i$(W#i#j$(s#j#l$(W#l#m$*f#m#o$(W#o#p$(n#p;'S$(W;'S;=`$,q<%lO$(W(n$(_T[#S$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$(sO[#S(n$(x[$c&jO!Q&c!Q![$)n![!^&c!_!c&c!c!i$)n!i#T&c#T#Z$)n#Z#o&c#o#p$,U#p;'S&c;'S;=`&w<%lO&c(n$)sZ$c&jO!Q&c!Q![$*f![!^&c!_!c&c!c!i$*f!i#T&c#T#Z$*f#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$*kZ$c&jO!Q&c!Q![$+^![!^&c!_!c&c!c!i$+^!i#T&c#T#Z$+^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$+cZ$c&jO!Q&c!Q![$(W![!^&c!_!c&c!c!i$(W!i#T&c#T#Z$(W#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$,XR!Q![$,b!c!i$,b#T#Z$,b#S$,eS!Q![$,b!c!i$,b#T#Z$,b#q#r$(n(n$,tP;=`<%l$(W!'l$-S_!SM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$.^`#r$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$/k_$c&j'vp'y!b(Q&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$0yk$c&j'vp'y!b(T!LY's&;d$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$0juw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$0j![!^%Z!^!_*g!_!c%Z!c!}$0j!}#O%Z#O#P&c#P#R%Z#R#S$0j#S#T%Z#T#o$0j#o#p*g#p$g%Z$g;'S$0j;'S;=`$4t<%lO$0j+d$2yk$c&j'vp'y!b$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$2nuw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$2n![!^%Z!^!_*g!_!c%Z!c!}$2n!}#O%Z#O#P&c#P#R%Z#R#S$2n#S#T%Z#T#o$2n#o#p*g#p$g%Z$g;'S$2n;'S;=`$4n<%lO$2n+d$4qP;=`<%l$2n(CS$4wP;=`<%l$0j!5p$5TX!X!3l'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$5{a(g%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$#m#q;'S%Z;'S;=`+a<%lO%Z%#`$7__!W$I`o`$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$8i_!mS$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$9y|$c&j'vp'y!b'l(;d(T!LY's&;d$V#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(CS$=Uk$c&j'vp'y!b'm(;d(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P",
    tokenizers: [hf, cf, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, af, new ju("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOq~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!O~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(S~~", 141, 325), new ju("j~RQYZXz{^~^O'p~~aP!P!Qd~iO'q~~", 25, 307)],
    topRules: {
        Script: [0, 5],
        SingleExpression: [1, 266],
        SingleClassItem: [2, 267]
    },
    dialects: {
        jsx: 13213,
        ts: 13215
    },
    dynamicPrecedences: {
        76: 1,
        78: 1,
        162: 1,
        190: 1
    },
    specialized: [{
        term: 311,
        get: t => uf[t] || -1
    }, {
        term: 327,
        get: t => ff[t] || -1
    }, {
        term: 67,
        get: t => df[t] || -1
    }],
    tokenPrec: 13238
}), gf = [lu("function ${name}(${params}) {\n\t${}\n}", {
    label: "function",
    detail: "definition",
    type: "keyword"
}), lu("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
    label: "for",
    detail: "loop",
    type: "keyword"
}), lu("for (let ${name} of ${collection}) {\n\t${}\n}", {
    label: "for",
    detail: "of loop",
    type: "keyword"
}), lu("do {\n\t${}\n} while (${})", {
    label: "do",
    detail: "loop",
    type: "keyword"
}), lu("while (${}) {\n\t${}\n}", {
    label: "while",
    detail: "loop",
    type: "keyword"
}), lu("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
    label: "try",
    detail: "/ catch block",
    type: "keyword"
}), lu("if (${}) {\n\t${}\n}", {
    label: "if",
    detail: "block",
    type: "keyword"
}), lu("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
    label: "if",
    detail: "/ else block",
    type: "keyword"
}), lu("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
    label: "class",
    detail: "definition",
    type: "keyword"
}), lu('import {${names}} from "${module}"\n${}', {
    label: "import",
    detail: "named",
    type: "keyword"
}), lu('import ${name} from "${module}"\n${}', {
    label: "import",
    detail: "default",
    type: "keyword"
})], mf = new Hl, Qf = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

function Sf(t) {
    return (e, i) => {
        let n = e.node.getChild("VariableDefinition");
        return n && i(n, t), !0
    }
}
const vf = ["FunctionDeclaration"],
    yf = {
        FunctionDeclaration: Sf("function"),
        ClassDeclaration: Sf("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Sf("constant"),
        TypeAliasDeclaration: Sf("type"),
        NamespaceDeclaration: Sf("namespace"),
        VariableDefinition(t, e) {
            t.matchContext(vf) || e(t, "variable")
        },
        TypeDefinition(t, e) {
            e(t, "type")
        },
        __proto__: null
    };

function bf(t, e) {
    let i = mf.get(e);
    if (i) return i;
    let n = [],
        r = !0;

    function s(e, i) {
        let r = t.sliceString(e.from, e.to);
        n.push({
            label: r,
            type: i
        })
    }
    return e.cursor(Wl.IncludeAnonymous).iterate((e => {
        if (r) r = !1;
        else if (e.name) {
            let t = yf[e.name];
            if (t && t(e, s) || Qf.has(e.name)) return !1
        } else if (e.to - e.from > 8192) {
            for (let i of bf(t, e.node)) n.push(i);
            return !1
        }
    })), mf.set(e, n), n
}
const wf = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
    xf = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName"];

function $f(t) {
    let e = Wa(t.state).resolveInner(t.pos, -1);
    if (xf.indexOf(e.name) > -1) return null;
    let i = "VariableName" == e.name || e.to - e.from < 20 && wf.test(t.state.sliceDoc(e.from, e.to));
    if (!i && !t.explicit) return null;
    let n = [];
    for (let i = e; i; i = i.parent) Qf.has(i.name) && (n = n.concat(bf(t.state.doc, i)));
    return {
        options: n,
        from: i ? e.from : t.pos,
        validFor: wf
    }
}
const kf = Ta.define({
        name: "javascript",
        parser: pf.configure({
            props: [Ha.add({
                IfStatement: rh({
                    except: /^\s*({|else\b)/
                }),
                TryStatement: rh({
                    except: /^\s*({|catch\b|finally\b)/
                }),
                LabeledStatement: t => t.baseIndent,
                SwitchBody: t => {
                    let e = t.textAfter,
                        i = /^\s*\}/.test(e),
                        n = /^\s*(case|default)\b/.test(e);
                    return t.baseIndent + (i ? 0 : n ? 1 : 2) * t.unit
                },
                Block: ih({
                    closing: "}"
                }),
                ArrowFunction: t => t.baseIndent + t.unit,
                "TemplateString BlockComment": () => null,
                "Statement Property": rh({
                    except: /^{/
                }),
                JSXElement(t) {
                    let e = /^\s*<\//.test(t.textAfter);
                    return t.lineIndent(t.node.from) + (e ? 0 : t.unit)
                },
                JSXEscape(t) {
                    let e = /\s*\}/.test(t.textAfter);
                    return t.lineIndent(t.node.from) + (e ? 0 : t.unit)
                },
                "JSXOpenTag JSXSelfClosingTag": t => t.column(t.node.from) + t.unit
            }), oh.add({
                "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression": lh,
                BlockComment: t => ({
                    from: t.from + 2,
                    to: t.to - 2
                })
            })]
        }),
        languageData: {
            closeBrackets: {
                brackets: ["(", "[", "{", "'", '"', "`"]
            },
            commentTokens: {
                line: "//",
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
            wordChars: "$"
        }
    }),
    Pf = {
        test: t => /^JSX/.test(t.name),
        facet: _a({
            commentTokens: {
                block: {
                    open: "{/*",
                    close: "*/}"
                }
            }
        })
    },
    _f = kf.configure({
        dialect: "ts"
    }, "typescript"),
    Zf = kf.configure({
        dialect: "jsx",
        props: [Za.add((t => t.isTop ? [Pf] : void 0))]
    }),
    Xf = kf.configure({
        dialect: "jsx ts",
        props: [Za.add((t => t.isTop ? [Pf] : void 0))]
    }, "typescript"),
    Cf = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map((t => ({
        label: t,
        type: "keyword"
    })));

function Tf(t, e, i = t.length) {
    for (let n = null == e ? void 0 : e.firstChild; n; n = n.nextSibling)
        if ("JSXIdentifier" == n.name || "JSXBuiltin" == n.name || "JSXNamespacedName" == n.name || "JSXMemberExpression" == n.name) return t.sliceString(n.from, Math.min(n.to, i));
    return ""
}
const Wf = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
    Af = oo.inputHandler.of(((t, e, i, n) => {
        if ((Wf ? t.composing : t.compositionStarted) || t.state.readOnly || e != i || ">" != n && "/" != n || !kf.isActiveAt(t.state, e, -1)) return !1;
        let {
            state: r
        } = t, s = r.changeByRange((t => {
            var e, i;
            let s, {
                    head: o
                } = t,
                l = Wa(r).resolveInner(o, -1);
            if ("JSXStartTag" == l.name && (l = l.parent), ">" == n && "JSXFragmentTag" == l.name) return {
                range: ce.cursor(o + 1),
                changes: {
                    from: o,
                    insert: "></>"
                }
            };
            if ("/" == n && "JSXFragmentTag" == l.name) {
                let t = l.parent,
                    i = null == t ? void 0 : t.parent;
                if (t.from == o - 1 && "JSXEndTag" != (null === (e = i.lastChild) || void 0 === e ? void 0 : e.name) && (s = Tf(r.doc, null == i ? void 0 : i.firstChild, o))) {
                    let t = `/${s}>`;
                    return {
                        range: ce.cursor(o + t.length),
                        changes: {
                            from: o,
                            insert: t
                        }
                    }
                }
            } else if (">" == n) {
                let t = function(t) {
                    for (;;) {
                        if ("JSXOpenTag" == t.name || "JSXSelfClosingTag" == t.name || "JSXFragmentTag" == t.name) return t;
                        if (!t.parent) return null;
                        t = t.parent
                    }
                }(l);
                if (t && "JSXEndTag" != (null === (i = t.lastChild) || void 0 === i ? void 0 : i.name) && "</" != r.sliceDoc(o, o + 2) && (s = Tf(r.doc, t, o))) return {
                    range: ce.cursor(o + 1),
                    changes: {
                        from: o,
                        insert: `></${s}>`
                    }
                }
            }
            return {
                range: t
            }
        }));
        return !s.changes.empty && (t.dispatch(s, {
            userEvent: "input.type",
            scrollIntoView: !0
        }), !0)
    })),
    Yf = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288];

function Rf(t) {
    return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 161
}
const Uf = new Du(((t, e) => {
        for (let n = !1, r = 0, s = 0;; s++) {
            let {
                next: o
            } = t;
            if (!(Rf(o) || 45 == o || 95 == o || n && (i = o, i >= 48 && i <= 57))) {
                n && t.acceptToken(40 == o ? 95 : 2 == r && e.canShift(2) ? 2 : 96);
                break
            }!n && (45 != o || s > 0) && (n = !0), r === s && 45 == o && r++, t.advance()
        }
        var i
    })),
    Vf = new Du((t => {
        if (Yf.includes(t.peek(-1))) {
            let {
                next: e
            } = t;
            (Rf(e) || 95 == e || 35 == e || 46 == e || 91 == e || 58 == e || 45 == e) && t.acceptToken(94)
        }
    })),
    Mf = new Du((t => {
        if (!Yf.includes(t.peek(-1))) {
            let {
                next: e
            } = t;
            if (37 == e && (t.advance(), t.acceptToken(1)), Rf(e)) {
                do {
                    t.advance()
                } while (Rf(t.next));
                t.acceptToken(1)
            }
        }
    })),
    jf = ra({
        "AtKeyword import charset namespace keyframes media supports": $a.definitionKeyword,
        "from to selector": $a.keyword,
        NamespaceName: $a.namespace,
        KeyframeName: $a.labelName,
        TagName: $a.tagName,
        ClassName: $a.className,
        PseudoClassName: $a.constant($a.className),
        IdName: $a.labelName,
        "FeatureName PropertyName": $a.propertyName,
        AttributeName: $a.attributeName,
        NumberLiteral: $a.number,
        KeywordQuery: $a.keyword,
        UnaryQueryOp: $a.operatorKeyword,
        "CallTag ValueName": $a.atom,
        VariableName: $a.variableName,
        Callee: $a.operatorKeyword,
        Unit: $a.unit,
        "UniversalSelector NestingSelector": $a.definitionOperator,
        MatchOp: $a.compareOperator,
        "ChildOp SiblingOp, LogicOp": $a.logicOperator,
        BinOp: $a.arithmeticOperator,
        Important: $a.modifier,
        Comment: $a.blockComment,
        ParenthesizedContent: $a.special($a.name),
        ColorLiteral: $a.color,
        StringLiteral: $a.string,
        ":": $a.punctuation,
        "PseudoOp #": $a.derefOperator,
        "; ,": $a.separator,
        "( )": $a.paren,
        "[ ]": $a.squareBracket,
        "{ }": $a.brace
    }),
    Df = {
        __proto__: null,
        lang: 32,
        "nth-child": 32,
        "nth-last-child": 32,
        "nth-of-type": 32,
        "nth-last-of-type": 32,
        dir: 32,
        "host-context": 32,
        url: 60,
        "url-prefix": 60,
        domain: 60,
        regexp: 60,
        selector: 134
    },
    Ef = {
        __proto__: null,
        "@import": 114,
        "@media": 138,
        "@charset": 142,
        "@namespace": 146,
        "@keyframes": 152,
        "@supports": 164
    },
    qf = {
        __proto__: null,
        not: 128,
        only: 128,
        from: 158,
        to: 160
    },
    If = nf.deserialize({
        version: 14,
        states: "7WQYQ[OOO#_Q[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO#fQ[O'#CfO$YQXO'#CaO$aQ[O'#ChO$lQ[O'#DPO$qQ[O'#DTOOQP'#Ed'#EdO$vQdO'#DeO%bQ[O'#DrO$vQdO'#DtO%sQ[O'#DvO&OQ[O'#DyO&TQ[O'#EPO&cQ[O'#EROOQS'#Ec'#EcOOQS'#ET'#ETQYQ[OOO&jQXO'#CdO'_QWO'#DaO'dQWO'#EjO'oQ[O'#EjQOQWOOOOQP'#Cg'#CgOOQP,59Q,59QO#fQ[O,59QO'yQ[O'#EWO(eQWO,58{O(mQ[O,59SO$lQ[O,59kO$qQ[O,59oO'yQ[O,59sO'yQ[O,59uO'yQ[O,59vO(xQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO)PQWO,59SO)UQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO)ZQ`O,59oOOQS'#Cp'#CpO$vQdO'#CqO)cQvO'#CsO*pQtO,5:POOQO'#Cx'#CxO)UQWO'#CwO+UQWO'#CyOOQS'#Eg'#EgOOQO'#Dh'#DhO+ZQ[O'#DoO+iQWO'#EkO&TQ[O'#DmO+wQWO'#DpOOQO'#El'#ElO(hQWO,5:^O+|QpO,5:`OOQS'#Dx'#DxO,UQWO,5:bO,ZQ[O,5:bOOQO'#D{'#D{O,cQWO,5:eO,hQWO,5:kO,pQWO,5:mOOQS-E8R-E8RO$vQdO,59{O,xQ[O'#EYO-VQWO,5;UO-VQWO,5;UOOQP1G.l1G.lO-|QXO,5:rOOQO-E8U-E8UOOQS1G.g1G.gOOQP1G.n1G.nO)PQWO1G.nO)UQWO1G.nOOQP1G/V1G/VO.ZQ`O1G/ZO.tQXO1G/_O/[QXO1G/aO/rQXO1G/bO0YQWO,59zO0_Q[O'#DOO0fQdO'#CoOOQP1G/Z1G/ZO$vQdO1G/ZO0mQpO,59]OOQS,59_,59_O$vQdO,59aO0uQWO1G/kOOQS,59c,59cO0zQ!bO,59eO1SQWO'#DhO1_QWO,5:TO1dQWO,5:ZO&TQ[O,5:VO&TQ[O'#EZO1lQWO,5;VO1wQWO,5:XO'yQ[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O2YQWO1G/|O2_QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XO2mQtO1G/gOOQO,5:t,5:tO3TQ[O,5:tOOQO-E8W-E8WO3bQWO1G0pOOQP7+$Y7+$YOOQP7+$u7+$uO$vQdO7+$uOOQS1G/f1G/fO3mQXO'#EiO3tQWO,59jO3yQtO'#EUO4nQdO'#EfO4xQWO,59ZO4}QpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO5VQWO1G/PO$vQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO5[QWO,5:uOOQO-E8X-E8XO5jQXO1G/vOOQS7+%h7+%hO5qQYO'#CsO(hQWO'#E[O5yQdO,5:hOOQS,5:h,5:hO6XQtO'#EXO$vQdO'#EXO7VQdO7+%ROOQO7+%R7+%ROOQO1G0`1G0`O7jQpO<<HaO7rQWO,5;TOOQP1G/U1G/UOOQS-E8S-E8SO$vQdO'#EVO7zQWO,5;QOOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO8SQdO7+%ZOOQO7+%b7+%bOOQS,5:v,5:vOOQS-E8Y-E8YOOQS1G0S1G0SO8ZQtO,5:sOOQS-E8V-E8VOOQO<<Hm<<HmOOQPAN={AN={O9XQdO,5:qOOQO-E8T-E8TOOQO<<Hu<<Hu",
        stateData: "9i~O#UOSROS~OUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SQO#XSO~OQeOUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SdO#XSO~O#P#^P~P!ZO#SiO~O]nO^nOplOtoOxpO|qO!PsO#QrO#XkO~O!RtO~P#kO`zO#RwO#SvO~O#S{O~O#S}O~OQ!WOb!QOf!WOh!WOn!VO#R!TO#S!PO#[!RO~Ob!YO!b![O!e!]O#S!XO!R#_P~Oh!bOn!VO#S!aO~O#S!dO~Ob!YO!b![O!e!]O#S!XO~O!W#_P~P%bO]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#QWX#XWX~O]!iO~O!W!jO#P#^X!Q#^X~O#P#^X!Q#^X~P!ZOUXOXXO]UO^UOtVOxWO#SQO#XSO~OplO!RtO~O`!sO#RwO#SvO~O!Q#^P~P!ZOb!zO~Ob!{O~Ov!|Oz!}O~OP#PObgXjgX!WgX!bgX!egX#SgXagXQgXfgXhgXngXpgX!VgX#PgX#RgX#[gXvgX!QgX~Ob!YOj#QO!b![O!e!]O#S!XO!W#_P~Ob#TO~Ob!YO!b![O!e!]O#S#UO~Op#YO!`#XO!R#_X!W#_X~Ob#]O~Oj#QO!W#_O~O!W#`O~Oh#aOn!VO~O!R#bO~O!RtO!`#XO~O!RtO!W#eO~O!W!|X#P!|X!Q!|X~P!ZO!W!jO#P#^a!Q#^a~O]nO^nOtoOxpO|qO!PsO#QrO#XkO~Op!za!R!zaa!za~P-bOv#lOz#mO~O]nO^nOtoOxpO#XkO~Op{i|{i!P{i!R{i#Q{ia{i~P.cOp}i|}i!P}i!R}i#Q}ia}i~P.cOp!Oi|!Oi!P!Oi!R!Oi#Q!Oia!Oi~P.cO!Q#nO~Oa#]P~P'yOa#YP~P$vOa#uOj#QO~O!W#wO~Oh#xOo#xO~O]!^Xa![X!`![X~O]#yO~Oa#zO!`#XO~Op#YO!R#_a!W#_a~O!`#XOp!aa!R!aa!W!aaa!aa~O!W$PO~O!Q$TO!q$RO!r$RO#[$QO~Oj#QOp$VO!V$XO!W!Ti#P!Ti!Q!Ti~P$vO!W!|a#P!|a!Q!|a~P!ZO!W!jO#P#^i!Q#^i~Oa#]X~P#kOa$]O~Oj#QOQ!xXa!xXb!xXf!xXh!xXn!xXp!xX#R!xX#S!xX#[!xX~Op$_Oa#YX~P$vOa$aO~Oj#QOv$bO~Oa$cO~O!`#XOp!}a!R!}a!W!}a~Oa$eO~P-bOP#PO!RgX~O!Q$hO!q$RO!r$RO#[$QO~Oj#QOQ!{Xb!{Xf!{Xh!{Xn!{Xp!{X!V!{X!W!{X#P!{X#R!{X#S!{X#[!{X!Q!{X~Op$VO!V$kO!W!Tq#P!Tq!Q!Tq~P$vOj#QOv$lO~OplOa#]a~Op$_Oa#Ya~Oa$oO~P$vOj#QOQ!{ab!{af!{ah!{an!{ap!{a!V!{a!W!{a#P!{a#R!{a#S!{a#[!{a!Q!{a~Oa!yap!ya~P$vOo#[j!Pj~",
        goto: ",`#aPPPPP#bP#k#zP#k$Z#kPP$aPPP$g$p$pP%SP$pP$p%j%|PPP&f&l#kP&rP#kP&xP#kP#k#kPPP'O'b'oPP#bPP'v'v(Q'vP'vP'v'vP#bP#bP#bP(T#bP(W(ZPP#bP#bP(^(m({)R)])c)m)sPPPPPP)y*SP*o*rP+h+k+q+z_aOPcgt!j#hkXOPcglqrst!j!z#]#hkROPcglqrst!j!z#]#hQjSR!mkQxUR!qnQ!qzQ#S!UR#k!sq!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mT$R#b$Sq!UY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mQ!b]R#a!cQyUR!rnQ!qyR#k!rQ|VR!toQ!OWR!upQuTQ!pmQ#^!_Q#d!fQ#e!gR$f$RSfPtQ!lgQ#g!jR$Y#hZePgt!j#ha!^Z_`!S!Y![#X#YR#V!YR!c]R!e^R#c!eQcOSgPtU!hcg#hR#h!jQ#r!{U$^#r$d$mQ$d#yR$m$_Q$`#rR$n$`QmTS!om$[R$[#oQ$W#fR$j$WQ!kfS#i!k#jR#j!lQ#Z!ZR#}#ZQ$S#bR$g$S_bOPcgt!j#h^TOPcgt!j#hQ!nlQ!vqQ!wrQ!xsQ#o!zR$O#]R#s!{Q!SYQ!`[Q#O!QQ#f!i[#q!{#r#y$_$d$mQ#t!}Q#v#QS$U#f$WQ$Z#mR$i$VR#p!zQhPR!ytQ!_ZQ!g`R#R!SU!ZZ`!SQ!f_Q#W!YQ#[![Q#{#XR#|#Y",
        nodeNames: "⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule Styles",
        maxTerm: 108,
        nodeProps: [
            ["openedBy", 17, "(", 48, "{"],
            ["closedBy", 18, ")", 49, "}"]
        ],
        propSources: [jf],
        skippedNodes: [0, 3],
        repeatNodeCount: 8,
        tokenData: "Lq~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Cu![!]Dp!]!^El!^!_$}!_!`E}!`!aF`!a!b$}!b!cG[!c!}$}!}#OHt#O#P$}#P#QIV#Q#R6d#R#T$}#T#UIh#U#c$}#c#dJy#d#o$}#o#pK`#p#q6d#q#rKq#r#sLS#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`Lk<%lO$}W%QSOy%^z;'S%^;'S;=`%o<%lO%^W%cSoWOy%^z;'S%^;'S;=`%o<%lO%^W%rP;=`<%l%^~%zh#U~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#U~oWOX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^^)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^^)sUoWOy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^^*[UoWOy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^^*sUoWOy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^^+[UoWOy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^^+sUoWOy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^^,[UoWOy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^^,sUoWOy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^^-[UoWOy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^^-uS!VUoWOy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.R_/zYtPOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^^0oYoWOy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^^1dYoWOy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^^2ZYfUoWOy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^^3QYfUoWOy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^^3uYoWOy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^^4lYfUoWOy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^^5aYoWOy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^^6WSfUoWOy%^z;'S%^;'S;=`%o<%lO%^Y6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^Y7QSzQoWOy%^z;'S%^;'S;=`%o<%lO%^X7cSXPOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7o_9cSbVOy%^z;'S%^;'S;=`%o<%lO%^~9tOa~_9{UUPjSOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^_:fWjS!PPOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^^;TUoWOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^^;nYoW#[UOy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^^<cYoWOy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=WUoWOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=qUoW#[UOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^>[[oW#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^_?VSpVOy%^z;'S%^;'S;=`%o<%lO%^^?hWjSOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^_@VU#XPOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjSOy%^z{@}{;'S%^;'S;=`%o<%lO%^~ASUoWOy@}yzAfz{Bm{;'S@};'S;=`Co<%lO@}~AiTOzAfz{Ax{;'SAf;'S;=`Bg<%lOAf~A{VOzAfz{Ax{!PAf!P!QBb!Q;'SAf;'S;=`Bg<%lOAf~BgOR~~BjP;=`<%lAf~BrWoWOy@}yzAfz{Bm{!P@}!P!QC[!Q;'S@};'S;=`Co<%lO@}~CcSoWR~Oy%^z;'S%^;'S;=`%o<%lO%^~CrP;=`<%l@}^Cz[#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^XDuU]POy%^z![%^![!]EX!];'S%^;'S;=`%o<%lO%^XE`S^PoWOy%^z;'S%^;'S;=`%o<%lO%^_EqS!WVOy%^z;'S%^;'S;=`%o<%lO%^YFSSzQOy%^z;'S%^;'S;=`%o<%lO%^XFeU|POy%^z!`%^!`!aFw!a;'S%^;'S;=`%o<%lO%^XGOS|PoWOy%^z;'S%^;'S;=`%o<%lO%^XG_WOy%^z!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHO[!YPoWOy%^z}%^}!OGw!O!Q%^!Q![Gw![!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHySxPOy%^z;'S%^;'S;=`%o<%lO%^^I[SvUOy%^z;'S%^;'S;=`%o<%lO%^XIkUOy%^z#b%^#b#cI}#c;'S%^;'S;=`%o<%lO%^XJSUoWOy%^z#W%^#W#XJf#X;'S%^;'S;=`%o<%lO%^XJmS!`PoWOy%^z;'S%^;'S;=`%o<%lO%^XJ|UOy%^z#f%^#f#gJf#g;'S%^;'S;=`%o<%lO%^XKeS!RPOy%^z;'S%^;'S;=`%o<%lO%^_KvS!QVOy%^z;'S%^;'S;=`%o<%lO%^ZLXU!PPOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^WLnP;=`<%l$}",
        tokenizers: [Vf, Mf, Uf, 0, 1, 2, 3],
        topRules: {
            StyleSheet: [0, 4],
            Styles: [1, 84]
        },
        specialized: [{
            term: 95,
            get: t => Df[t] || -1
        }, {
            term: 56,
            get: t => Ef[t] || -1
        }, {
            term: 96,
            get: t => qf[t] || -1
        }],
        tokenPrec: 1123
    }),
    zf = Ta.define({
        name: "css",
        parser: If.configure({
            props: [Ha.add({
                Declaration: rh()
            }), oh.add({
                Block: lh
            })]
        }),
        languageData: {
            commentTokens: {
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            indentOnInput: /^\s*\}$/,
            wordChars: "-"
        }
    }),
    Gf = "#e06c75",
    Nf = "#abb2bf",
    Bf = "#7d8799",
    Lf = "#d19a66",
    Hf = "#2c313a",
    Ff = "#282c34",
    Jf = "#353a42",
    Kf = "#528bff",
    td = [oo.theme({
        "&": {
            color: Nf,
            backgroundColor: Ff
        },
        ".cm-content": {
            caretColor: Kf
        },
        ".cm-cursor, .cm-dropCursor": {
            borderLeftColor: Kf
        },
        "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
            backgroundColor: "#3E4451"
        },
        ".cm-panels": {
            backgroundColor: "#21252b",
            color: Nf
        },
        ".cm-panels.cm-panels-top": {
            borderBottom: "2px solid black"
        },
        ".cm-panels.cm-panels-bottom": {
            borderTop: "2px solid black"
        },
        ".cm-searchMatch": {
            backgroundColor: "#72a1ff59",
            outline: "1px solid #457dff"
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
            backgroundColor: "#6199ff2f"
        },
        ".cm-activeLine": {
            backgroundColor: "#6699ff0b"
        },
        ".cm-selectionMatch": {
            backgroundColor: "#aafe661a"
        },
        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
            backgroundColor: "#bad0f847"
        },
        ".cm-gutters": {
            backgroundColor: Ff,
            color: Bf,
            border: "none"
        },
        ".cm-activeLineGutter": {
            backgroundColor: Hf
        },
        ".cm-foldPlaceholder": {
            backgroundColor: "transparent",
            border: "none",
            color: "#ddd"
        },
        ".cm-tooltip": {
            border: "none",
            backgroundColor: Jf
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
            borderTopColor: Jf,
            borderBottomColor: Jf
        },
        ".cm-tooltip-autocomplete": {
            "& > ul > li[aria-selected]": {
                backgroundColor: Hf,
                color: Nf
            }
        }
    }, {
        dark: !0
    }), uh(ah.define([{
        tag: $a.keyword,
        color: "#c678dd"
    }, {
        tag: [$a.name, $a.deleted, $a.character, $a.propertyName, $a.macroName],
        color: Gf
    }, {
        tag: [$a.function($a.variableName), $a.labelName],
        color: "#61afef"
    }, {
        tag: [$a.color, $a.constant($a.name), $a.standard($a.name)],
        color: Lf
    }, {
        tag: [$a.definition($a.name), $a.separator],
        color: Nf
    }, {
        tag: [$a.typeName, $a.className, $a.number, $a.changed, $a.annotation, $a.modifier, $a.self, $a.namespace],
        color: "#e5c07b"
    }, {
        tag: [$a.operator, $a.operatorKeyword, $a.url, $a.escape, $a.regexp, $a.link, $a.special($a.string)],
        color: "#56b6c2"
    }, {
        tag: [$a.meta, $a.comment],
        color: Bf
    }, {
        tag: $a.strong,
        fontWeight: "bold"
    }, {
        tag: $a.emphasis,
        fontStyle: "italic"
    }, {
        tag: $a.strikethrough,
        textDecoration: "line-through"
    }, {
        tag: $a.link,
        color: Bf,
        textDecoration: "underline"
    }, {
        tag: $a.heading,
        fontWeight: "bold",
        color: Gf
    }, {
        tag: [$a.atom, $a.bool, $a.special($a.variableName)],
        color: Lf
    }, {
        tag: [$a.processingInstruction, $a.string, $a.inserted],
        color: "#98c379"
    }, {
        tag: $a.invalid,
        color: "#ffffff"
    }]))],
    ed = {
        0: function(t = {}) {
            let e = t.jsx ? t.typescript ? Xf : Zf : t.typescript ? _f : kf;
            return new qa(e, [kf.data.of({
                autocomplete: (i = xf, n = pO(gf.concat(Cf)), t => {
                    for (let e = Wa(t.state).resolveInner(t.pos, -1); e; e = e.parent) {
                        if (i.indexOf(e.name) > -1) return null;
                        if (e.type.isTop) break
                    }
                    return n(t)
                })
            }), kf.data.of({
                autocomplete: $f
            }), t.jsx ? Af : []]);
            var i, n
        },
        2: () => zf,
        1: () => []
    },
    id = ({
        code: t,
        onInput: e,
        error: i = dt(""),
        language: n,
        readOnly: r
    }) => {
        const s = B(null),
            o = B(null),
            l = B(""),
            a = B(void 0),
            h = B(null),
            c = B(null);
        G((() => {
            a.current = e
        }), [e]), N((() => {
            const t = oo.updateListener.of((t => {
                if (!t.docChanged) return;
                const e = t.state.doc.toString();
                e !== l.current && (l.current = e, a.current?.(e))
            }));
            return h.current = new $e, c.current = new $e, o.current = new oo({
                extensions: [vl(), wl, Eo(), Lh(), Je.allowMultipleSelections.of(!0), Je.transactionFilter.of((t => {
                    if (!t.docChanged || !t.isUserEvent("input.type") && !t.isUserEvent("input.complete")) return t;
                    let e = t.startState.languageDataAt("indentOnInput", t.startState.selection.main.head);
                    if (!e.length) return t;
                    let i = t.newDoc,
                        {
                            head: n
                        } = t.newSelection.main,
                        r = i.lineAt(n);
                    if (n > r.from + sh) return t;
                    let s = i.sliceString(r.from, n);
                    if (!e.some((t => t.test(s)))) return t;
                    let {
                        state: o
                    } = t, l = -1, a = [];
                    for (let {
                            head: t
                        }
                        of o.selection.ranges) {
                        let e = o.doc.lineAt(t);
                        if (e.from == l) continue;
                        l = e.from;
                        let i = Ba(o, e.from);
                        if (null == i) continue;
                        let n = /^\s*/.exec(e.text)[0],
                            r = Na(o, i);
                        n != r && a.push({
                            from: e.from,
                            to: e.from + n.length,
                            insert: r
                        })
                    }
                    return a.length ? [t, {
                        changes: a,
                        sequential: !0
                    }] : t
                })), xh(), [Qu, fu], Pu(), Bo, _o(), po.of([...Su, ...OO, ...uc, ..._u, uO]), td, h.current.of([]), c.current.of([]), t],
                parent: s.current
            }), () => {
                o.current.destroy()
            }
        }), []), Ct((() => {
            if (t.value === l.current) return;
            const e = l.current.length;
            l.current = t.value, o.current.dispatch({
                changes: {
                    from: 0,
                    to: e,
                    insert: t.value
                }
            })
        })), Ct((() => {
            o.current.dispatch({
                effects: h.current.reconfigure(ed[n.value]())
            })
        })), G((() => {
            o.current.dispatch({
                effects: c.current.reconfigure(Je.readOnly.of(r || !1))
            })
        }), [r]);
        const u = Xt((() => i.value ? "" : "display: none"));
        return O("div", {
            class: "_component_6pnp9_1"
        }, O("div", {
            class: "_editor-container_6pnp9_8",
            ref: s
        }), O("div", {
            style: u,
            class: "_error_6pnp9_18",
            "aria-live": "polite"
        }, i))
    },
    nd = "_section-header_1s7gt_30",
    rd = "_section-header-title_1s7gt_42",
    sd = "_select-label_1s7gt_61",
    od = "_label-text_1s7gt_65",
    ld = "_label-text-end_1s7gt_66",
    ad = "_app-module_1s7gt_78",
    hd = "_input_1s7gt_132",
    cd = "_duration-input_1s7gt_141",
    Od = "_section-header-icon-button_1s7gt_153",
    ud = "_section-header-icon-button-text_1s7gt_180",
    fd = "_simplify-module_1s7gt_188";
const dd = "";

function pd(t) {
    return Xt((() => t.value ? "string" == typeof t.value ? t.value : "M " + t.value.map((([t, e]) => `${t} ${1-e}`)).join() : ""))
}

function gd(t) {
    const [e, i] = function() {
        const t = Zt(null),
            e = Zt(null),
            i = H((e => {
                t.value = e
            }), []);
        return Ct((() => {
            if (!t.value) return;
            const i = new ResizeObserver((t => {
                const i = t[0].contentBoxSize[0];
                e.value = {
                    width: i.inlineSize,
                    height: i.blockSize
                }
            }));
            return i.observe(t.value), () => i.disconnect()
        })), [i, e]
    }(), n = Xt((() => {
        const e = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        if (null === t.value) return e;
        for (const i of t.value) {
            i[0] < e.x1 ? e.x1 = i[0] : i[0] > e.x2 && (e.x2 = i[0]);
            const t = 1 - i[1];
            t < e.y1 ? e.y1 = t : t > e.y2 && (e.y2 = t)
        }
        return e
    })), r = function(t) {
        const e = Zt(!1);
        return N((() => {
            const i = matchMedia(t),
                n = () => e.value = i.matches;
            return i.addEventListener("change", n), n(), () => i.removeEventListener("change", n)
        }), []), e
    }("(min-width: 1820px), (max-width: 1159px)");
    return [e, Xt((() => {
        const t = 30,
            e = r.value ? t : 250,
            s = r.value ? 250 : t;
        if (!i.value) return {
            scale: 1,
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 1
        };
        const o = i.value.width - (t + e),
            l = i.value.height - (t + s),
            a = n.value.x2 - n.value.x1,
            h = n.value.y2 - n.value.y1;
        let c;
        c = a / h < o / l ? l / h : o / a;
        const O = i.value.width / c,
            u = i.value.height / c,
            f = n.value.x1 - (r.value ? (O - a) / 2 : t / c),
            d = f + O,
            p = n.value.y1 - (r.value ? t / c : (u - h) / 2);
        return {
            scale: c,
            x1: f,
            x2: d,
            y1: p,
            y2: p + u
        }
    }))]
}
const md = ({
        fullPoints: t,
        optimizedPoints: e
    }) => {
        const i = pd(t),
            n = pd(e),
            [r, s] = gd(e),
            o = Xt((() => s.value.scale)),
            l = Xt((() => `${s.value.x1*s.value.scale} ${s.value.y1*s.value.scale} ${(s.value.x2-s.value.x1)*s.value.scale} ${(s.value.y2-s.value.y1)*s.value.scale}`)),
            a = Xt((() => `M 0 0 V ${s.value.scale} H ${s.value.scale}`)),
            h = Xt((() => {
                let t = "";
                const {
                    scale: e,
                    x1: i,
                    x2: n,
                    y1: r,
                    y2: o
                } = s.value;
                for (let n = 0; n > i; n -= .25) t += `M ${n*e} ${r*e} V ${o*e}`;
                for (let i = 0; i < n; i += .25) t += `M ${i*e} ${r*e} V ${o*e}`;
                for (let s = 0; s > r; s -= .25) t += `M ${i*e} ${s*e} H ${n*e}`;
                for (let r = 0; r < o; r += .25) t += `M ${i*e} ${r*e} H ${n*e}`;
                return t
            })),
            c = Xt((() => "string" == typeof t.value ? "transform: scaleY(-1); transform-origin: 50% 50%;" : ""));
        return O("div", {
            ref: r,
            class: "_graph-component_kmc97_1"
        }, O("svg", {
            style: Xt((() => null === t.value ? "visibility: hidden;" : "")),
            class: "_graph-svg_kmc97_10",
            viewBox: l
        }, O("path", {
            class: "_graph-sublines_kmc97_39",
            d: h
        }), O("path", {
            class: "_graph-axis_kmc97_33",
            d: a
        }), O("svg", {
            class: "_points-svg_kmc97_50",
            width: o,
            height: o,
            viewBox: "0 0 1 1"
        }, O("path", {
            class: "_full-path_kmc97_18",
            style: c,
            d: i
        }), O("path", {
            class: "_optimized-path_kmc97_19",
            d: n
        }))))
    },
    [Qd, Sd] = (() => {
        const t = document.createElement("iframe");
        t.setAttribute("sandbox", "allow-scripts"), t.srcdoc = PROCESS_SCRIPT, t.className = "_process-scripts-iframe_1s7gt_21";
        const e = new Promise((e => t.onload = () => e()));
        return document.body.appendChild(t), [t, e]
    })();
let vd = Promise.resolve();
class yd extends Error {
    fileName;
    lineNumber;
    columnNumber;
    functionName;
    constructor(t) {
        super(t.message), this.name = "ProcessScriptEasingError", "fileName" in t && (this.fileName = t.fileName, this.lineNumber = t.lineNumber, this.columnNumber = t.columnNumber, this.functionName = t.functionName)
    }
}

function bd(t, e, i) {
    return vd = vd.catch((() => {})).then((() => function(t, e) {
        if (t.aborted) throw new DOMException("", "AbortError");
        let i, n, r;
        const s = e((t => {
            i = t
        }));
        return Promise.race([new Promise(((e, s) => {
            n = () => {
                s(new DOMException("", "AbortError")), r = i?.()
            }, t.addEventListener("abort", n)
        })), s]).finally((() => (t.removeEventListener("abort", n), r)))
    }(t, (async t => {
        if (1 === i && !CSS.supports(`clip-path: path("${e.replaceAll("\n"," ")}")`)) throw new TypeError("Invalid SVG path");
        const {
            port1: n,
            port2: r
        } = new MessageChannel;
        await Sd;
        const s = () => Qd.contentWindow.postMessage({
            action: "terminate-worker"
        }, "*");
        t(s);
        const o = new Promise(((t, e) => {
            n.onmessage = ({
                data: i
            }) => {
                i.error ? e(new yd(i.error)) : t(i.result), s()
            }
        }));
        return Qd.contentWindow.postMessage({
            action: 0 === i ? "process-script" : "process-svg",
            script: e,
            port: r
        }, "*", [r]), o
    }))))
}
const wd = 300;
const xd = ({
        value: t,
        max: e,
        min: i,
        step: n,
        onInput: r
    }) => O("div", {
        class: "_range-component_jwx9i_1"
    }, O("div", {
        "aria-hidden": "true",
        class: "_fake-range_jwx9i_13",
        style: Xt((() => "--pos: " + (t.value - i) / (e - i)))
    }, O("div", {
        class: "_active-line_jwx9i_22"
    }), O("div", {
        class: "_inactive-line_jwx9i_23"
    }), O("div", {
        class: "_track_jwx9i_44"
    }, O("div", {
        class: "_control_jwx9i_50"
    }))), O("input", {
        class: "_range-input_jwx9i_9",
        type: "range",
        min: i,
        max: e,
        step: n,
        value: t,
        onInput: t => r(t.currentTarget.valueAsNumber)
    })),
    $d = ({
        round: t,
        simplify: e,
        onInput: i
    }) => O("form", {
        class: "_form_1jvvb_1"
    }, O("label", {
        style: dd
    }, O("span", {
        class: od
    }, "Simplify"), O(xd, {
        min: 1e-5,
        max: .025,
        step: "any",
        onInput: e => i(e, t.value),
        value: e
    })), O("label", {
        style: dd
    }, O("span", {
        class: od
    }, "Round"), O(xd, {
        min: 2,
        max: 5,
        step: 1,
        onInput: t => i(e.value, t),
        value: t
    })));

function kd(t, e, i) {
    let n = e[0],
        r = e[1],
        s = i[0] - n,
        o = i[1] - r;
    if (0 !== s || 0 !== o) {
        var l = ((t[0] - n) * s + (t[1] - r) * o) / (s * s + o * o);
        l > 1 ? (n = i[0], r = i[1]) : l > 0 && (n += s * l, r += o * l)
    }
    return s = t[0] - n, o = t[1] - r, s * s + o * o
}

function Pd(t, e, i, n, r) {
    let s, o = n;
    for (let n = e + 1; n < i; n++) {
        const r = kd(t[n], t[e], t[i]);
        r > o && (s = n, o = r)
    }
    o > n && (s - e > 1 && Pd(t, e, s, n, r), r.push(t[s]), i - s > 1 && Pd(t, s, i, n, r))
}

function _d(t, e) {
    if (t.length <= 1) return t;
    const i = e * e,
        n = t.length - 1,
        r = [t[0]];
    return Pd(t, 0, n, i, r), r.push(t[n]), r
}

function Zd(t, e, i) {
    return Xt((() => {
        if (!t.value) return null;
        const n = Math.max(i.value, 2);
        return _d(t.value, e.value).map((([t, e]) => [Math.round(t * 10 ** n) / 10 ** n, Math.round(e * 10 ** i.value) / 10 ** i.value]))
    }))
}

function Xd(t, e) {
    return Xt((() => {
        if (!t.value) return [];
        const i = new Intl.NumberFormat("en-US", {
                maximumFractionDigits: Math.max(e.value - 2, 0)
            }),
            n = new Intl.NumberFormat("en-US", {
                maximumFractionDigits: e.value
            }),
            r = t.value,
            s = new Set,
            o = 1 / 10 ** e.value;
        for (const [t, e] of r.entries()) {
            const [i] = e;
            if (0 === t) {
                0 === i && s.add(e);
                continue
            }
            if (t === r.length - 1) {
                const n = r[t - 1][0];
                1 === i && n <= 1 && s.add(e);
                continue
            }
            const n = r[t - 1][0],
                l = (r[t + 1][0] - n) / 2 + n;
            Math.abs(i - l) < o && s.add(e)
        }
        const l = [
            [r[0]]
        ];
        for (const t of r.slice(1)) t[1] === l.at(-1)[0][1] ? l.at(-1).push(t) : l.push([t]);
        const a = l.map((t => {
            const e = n.format(t[0][1]),
                r = t.map((t => {
                    const [n] = t;
                    let r = e;
                    return s.has(t) || (r += " " + i.format(100 * n) + "%"), r
                })).join(", ");
            if (1 === t.length) return r;
            const o = [t[0][0], t.at(-1)[0]].map((t => i.format(100 * t) + "%")).join(" "),
                l = `${e} ${o}`;
            return l.length > r.length ? r : l
        }));
        return a
    }))
}
const Cd = "_demo-box_4dbgd_10",
    Td = "_unoptimized-demo-box_4dbgd_21",
    Wd = CSS.supports("animation-timing-function", "linear(0, 1)"),
    Ad = (t, e, i, n) => t.animate(n, {
        fill: "forwards",
        duration: i,
        easing: e || "linear"
    }),
    Yd = t => Xt((() => 0 === t.value.length ? "" : `linear(${t.value.join()})`)),
    Rd = ({
        slightlyOptimizedLinear: t,
        linear: e,
        duration: i,
        play: n
    }) => {
        const r = Yd(t),
            s = Yd(e),
            o = Xt((() => Boolean(n.value && r.value && s.value))),
            l = B(null),
            a = B(null),
            h = B(null);
        return G((() => {
            let t = !1;
            const e = matchMedia("(min-width: 1820px), (max-width: 1159px)");
            let n = null;
            const o = () => n?.();
            e.addEventListener("change", o);
            const l = () => e.matches ? "X" : "Y",
                c = () => [`translate${l()}(0)`, `translate${l()}(100%)`],
                O = () => [`translate${l()}(100%)`, `translate${l()}(0)`];
            return (async () => {
                if (Wd)
                    for (; !t;) {
                        const e = [Ad(a.current, r.value, i.value, {
                            transform: c()
                        }), Ad(h.current, s.value, i.value, {
                            transform: c()
                        })];
                        if (n = () => {
                                for (const t of e) t.effect.setKeyframes({
                                    transform: c()
                                })
                            }, await Promise.all(e.map((t => t.finished))), await a.current.animate(null, 500).finished, t) break;
                        const o = [Ad(a.current, r.value, i.value, {
                            transform: O()
                        }), Ad(h.current, s.value, i.value, {
                            transform: O()
                        })];
                        n = () => {
                            for (const t of e) t.effect.setKeyframes({
                                transform: O()
                            })
                        }, await Promise.all(o.map((t => t.finished))), await a.current.animate(null, 500).finished
                    }
            })(), () => {
                t = !0, e.removeEventListener("change", o)
            }
        }), []), Ct((() => {
            if ("" === r.value || "" === s.value || !Wd) return;
            const t = [a.current].flatMap((t => t.getAnimations())),
                e = [h.current].flatMap((t => t.getAnimations()));
            for (const e of t) e.effect.updateTiming({
                easing: r.value
            });
            for (const t of e) t.effect.updateTiming({
                easing: s.value
            })
        })), Ct((() => {
            if ("" === r.value || "" === s.value || !Wd) return;
            const t = [a.current, h.current].flatMap((t => t.getAnimations()));
            for (const e of t) e.effect.updateTiming({
                duration: i.value
            })
        })), Ct((() => {
            const t = [a.current, h.current].flatMap((t => t.getAnimations()));
            for (const e of t) "finished" !== e.playState && (o.value ? e.play() : e.pause())
        })), O("div", {
            ref: l,
            class: "_demos_4dbgd_1"
        }, O("div", {
            class: "_translate_4dbgd_25"
        }, O("div", {
            ref: a
        }, O("div", {
            class: [Cd, Td].join(" ")
        }, "Input")), O("div", {
            ref: h
        }, O("div", {
            class: Cd
        }, "Output"))), !Wd && O("div", {
            class: "_unsupported-message_4dbgd_47"
        }, O("div", null, "linear() not supported by this browser.", " ", O("a", {
            href: "https://caniuse.com/mdn-css_types_easing-function_linear-function",
            target: "_blank"
        }, "See browser support."))))
    },
    Ud = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 3
    });

function Vd(t, e, i, {
    addLineBreaksWithinLinear: n = !1
} = {}) {
    return Xt((() => {
        if (0 === t.value.length) return "";
        const r = n ? 80 : 1 / 0;
        let s = `  --${e}-easing: linear(`,
            o = ");",
            l = [],
            a = "";
        for (const e of t.value) a.length + e.length + 4 + 1 > r && (l.push(a + ","), a = ""), a && (a += ", "), a += e;
        a && l.push(a);
        let h = "";
        h = 1 === l.length && s.length + l[0].length + o.length < r ? s + l[0] + o : s + "\n    " + l.join("\n    ") + "\n  " + o;
        let c = "";
        return 0 !== i.value && (c = `\n  --${e}-duration: ${Ud.format(i.value/1e3)}s;`), ":root {\n" + h + c + "\n}"
    }))
}
const Md = {
        codeType: 1,
        code: "M 0,0\nC 0.05, 0, 0.133333, 0.06, 0.166666, 0.4\nC 0.208333, 0.82, 0.25, 1, 1, 1"
    },
    jd = {
        codeType: 0,
        code: "const [duration, func] = createSpring({\n  mass: 1,\n  stiffness: 100,\n  damping: 10,\n  velocity: 0,\n});\n\n/*\n  Export your easing function as a global.\n  The name you use here will appear in the output.\n  The easing function must take a number as input,\n  where 0 is the start, and 1 is the end.\n  It must return the 'eased' value.\n*/\nself.spring = func;\n/*\n  Some easings have an ideal duration, like this one.\n  You can export it to the global, in milliseconds,\n  and it will be used in the output.\n  This is optional.\n*/\nself.duration = duration;\n\nfunction createSpring({ mass, stiffness, damping, velocity }) {\n  const w0 = Math.sqrt(stiffness / mass);\n  const zeta = damping / (2 * Math.sqrt(stiffness * mass));\n  const wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;\n  const b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;\n\n  function solver(t) {\n    if (zeta < 1) {\n      t =\n        Math.exp(-t * zeta * w0) *\n        (1 * Math.cos(wd * t) + b * Math.sin(wd * t));\n    } else {\n      t = (1 + b * t) * Math.exp(-t * w0);\n    }\n\n    return 1 - t;\n  }\n\n  const duration = (() => {\n    const step = 1 / 6;\n    let time = 0;\n\n    while (true) {\n      if (Math.abs(1 - solver(time)) < 0.001) {\n        const restStart = time;\n        let restSteps = 1;\n        while (true) {\n          time += step;\n          if (Math.abs(1 - solver(time)) >= 0.001) break;\n          restSteps++;\n          if (restSteps === 16) return restStart;\n        }\n      }\n      time += step;\n    }\n  })();\n\n  return [duration * 1000, (t) => solver(duration * t)];\n}"
    },
    Dd = jd,
    Ed = Md;

function qd() {
    const t = new URLSearchParams(location.search),
        e = {};
    if (t.has("codeType")) {
        const i = t.get("codeType");
        e.codeType = "js" === i ? 0 : 1, t.has("code") && (e.code = t.get("code"))
    }
    if (t.has("simplify")) {
        const i = Number(t.get("simplify"));
        isNaN(i) || (e.simplify = i)
    }
    if (t.has("round")) {
        const i = Number(t.get("round"));
        isNaN(i) || (e.round = i)
    }
    return e
}

function Id() {
    const t = L(qd, []),
        e = t.codeType || 0,
        i = Zt(e),
        n = Zt(t.code || (0 === e ? Dd.code : Ed.code)),
        r = Zt(t.simplify ?? .0017),
        s = Zt(t.round ?? 3),
        o = B(null),
        l = H((t => {
            ! function(t) {
                if (ht > 0) return t();
                ht++;
                try {
                    return t()
                } finally {
                    rt()
                }
            }((() => {
                void 0 !== t.codeType && (i.value = t.codeType), void 0 !== t.code && (n.value = t.code), void 0 !== t.simplify && (r.value = t.simplify), void 0 !== t.round && (s.value = t.round)
            })), null !== o.current && clearTimeout(o.current), o.current = setTimeout((() => {
                const t = new URL(location.href);
                t.search = function(t) {
                    const e = new URLSearchParams;
                    return 0 === t.codeType ? e.set("codeType", "js") : 1 === t.codeType && e.set("codeType", "svg"), t.code && e.set("code", t.code), void 0 !== t.simplify && e.set("simplify", t.simplify.toString()), void 0 !== t.round && e.set("round", t.round.toString()), e
                }({
                    codeType: i.value,
                    code: n.value,
                    simplify: r.value,
                    round: s.value
                }).toString(), history.replaceState(null, "", t.toString())
            }), 250)
        }), []);
    return L((() => ({
        codeType: i,
        code: n,
        simplify: r,
        round: s,
        update: l
    })), [])
}
const zd = ({
        value: t
    }) => {
        const e = B(null);
        return O("button", {
            style: dd,
            ref: e,
            class: Od,
            onClick: () => {
                var i, n, r;
                navigator.clipboard.writeText(t.value), i = e.current, n = {
                    scale: 1.3
                }, r = {
                    duration: 200,
                    easing: "ease-out"
                }, i.animate({
                    ...n,
                    offset: 0
                }, {
                    ...r,
                    fill: "backwards"
                })
            }
        }, O("span", {
            class: ud
        }, "Copy"), O("svg", {
            viewBox: "0 96 960 960"
        }, O("path", {
            d: SVGPATHS.COPY
        })))
    },
    Gd = ({
        value: t,
        onChange: e,
        children: i,
        displayedValue: n
    }) => {
        const r = Xt((() => {
                if (n) return n.value;
                const e = (Array.isArray(i) ? i.flat() : [i]).filter((t => t && "object" == typeof t && "type" in t && "option" === t.type)).find((e => String(e.props.value) === t.value));
                return e ? e.props.children : ""
            })),
            s = B(null);
        return O("div", {
            class: "_select_ss74s_1"
        }, O("div", {
            class: "_select-current_ss74s_6",
            "aria-hidden": "true"
        }, O("span", null, r), O("svg", {
            viewBox: "0 0 8.65 3.02"
        }, O("path", {
            d: SVGPATHS.ARROW
        }))), O("select", {
            class: "_real-select_ss74s_22",
            ref: s,
            value: t,
            onChange: function() {
                const t = s.current,
                    i = t.options[t.selectedIndex];
                e(i.value)
            }
        }, i))
    };
const Nd = ({
        code: t,
        codeType: e,
        error: i,
        onChange: n
    }) => {
        const r = Xt((() => 0 == e.value ? 0 : 1)),
            s = Xt((() => String(e.value))),
            o = function(t, e) {
                const i = B(Dd.code),
                    n = B(Ed.code);
                return Ct((() => {
                    0 === e.value ? i.current = t.value : n.current = t.value
                })), {
                    0: i,
                    1: n
                }
            }(t, e);
        return O(f, null, O("div", {
            class: nd
        }, O("div", {
            class: rd
        }, O("h2", null, "Input"), O("p", null, "Provide easing as JavaScript or SVG")), O("label", {
            class: sd,
            style: dd
        }, O("span", {
            class: ld
        }, "Format"), O(Gd, {
            value: s,
            onChange: function(t) {
                const e = Number(t);
                n(o[e].current, e)
            }
        }, O("option", {
            value: 0
        }, "JS"), O("option", {
            value: 1
        }, "SVG")))), O(id, {
            error: i,
            code: t,
            onInput: t => n(t, e.value),
            language: r
        }))
    },
    Bd = {
        Spring: jd,
        Bounce: {
            codeType: 0,
            code: "self.bounce = function(pos) {\n  const n1 = 7.5625;\n  const d1 = 2.75;\n\n  if (pos < 1 / d1) {\n    return n1 * pos * pos;\n  } else if (pos < 2 / d1) {\n    return n1 * (pos -= 1.5 / d1) * pos + 0.75;\n  } else if (pos < 2.5 / d1) {\n    return n1 * (pos -= 2.25 / d1) * pos + 0.9375;\n  } else {\n    return n1 * (pos -= 2.625 / d1) * pos + 0.984375;\n  }\n}"
        },
        "Simple elastic": {
            codeType: 0,
            code: "self.elastic = function(x) {\n  if (x === 0 || x === 1) return x;\n  const c4 = (2 * Math.PI) / 3;\n  return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;\n}"
        },
        "Material Design emphasized easing": Md
    },
    Ld = dt("Presets"),
    Hd = ({
        onPresetSelect: t
    }) => {
        const e = dt("?");
        return O("header", {
            class: "_site-header_n4kfl_1"
        }, O("h1", {
            class: "_site-title_n4kfl_12"
        }, "linear()", O("span", {
            class: "_extended-title_n4kfl_19"
        }, " generator")), O("div", {
            style: dd
        }, O(Gd, {
            value: e,
            displayedValue: Ld,
            onChange: e => {
                e && t(Bd[e])
            }
        }, Object.keys(Bd).map((t => O("option", {
            value: t
        }, t))))), O("a", {
            class: Od,
            href: "https://github.com/jakearchibald/linear-easing-generator",
            target: "_blank"
        }, O("span", {
            class: ud
        }, "GitHub repository"), O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 98 96"
        }, O("path", {
            d: SVGPATHS.GITHUB
        }))))
    },
    Fd = matchMedia("(prefers-reduced-motion: no-preference)").matches;
! function(i, n, r) {
    var s, l, a;
    e.__ && e.__(i, n), l = (s = "function" == typeof r) ? null : r && r.__k || n.__k, a = [], P(n, i = (!s && r || n).__k = O(f, null, [i]), l || o, o, void 0 !== n.ownerSVGElement, !s && r ? [r] : l ? null : n.firstChild ? t.call(n.childNodes) : null, a, !s && r ? r : l ? l.__e : n.firstChild, s), _(a, i)
}(O((({}) => {
    const {
        codeType: t,
        code: e,
        simplify: i,
        round: n,
        update: r
    } = Id(), s = Zt(Fd), o = Zt("1.333"), l = Xt((() => 1e3 * (Number(o.value) || 1.333))), [a, h, c, u] = function(t, e) {
        const i = Zt(null),
            n = Zt(""),
            r = Zt(""),
            s = Zt(0),
            o = B(null),
            l = B(0),
            a = B(!0),
            h = B(null);
        return Ct((() => {
            const c = h.current;
            h.current = e.value;
            const O = t.value;
            async function u() {
                a.current = !1, o.current = new AbortController;
                try {
                    const t = await bd(o.current.signal, O, e.value);
                    i.value = t.points, n.value = "", r.value = t.name, s.value = t.duration || 0
                } catch (t) {
                    if ("AbortError" === t.name) return;
                    if (i.value = null, r.value = "", t instanceof yd) {
                        let e = t.message;
                        t.fileName && t.fileName.startsWith("data:") && t.lineNumber && t.columnNumber && (e += ` at line ${t.lineNumber}, column ${t.columnNumber}`), n.value = e
                    } else n.value = t.message
                }
            }
            o.current?.abort(), clearTimeout(l.current), a.current || e.value !== c ? (i.value = null, n.value = "", u()) : l.current = setTimeout(u, wd)
        })), [i, n, r, s]
    }(e, t);
    Ct((() => {
        u.value && (o.value = (u.value / 1e3).toFixed(3))
    }));
    const d = Zd(a, i, n),
        p = Xt((() => 0 === t.value ? a.value : e.value)),
        g = Xd(d, n),
        m = Vd(g, c, u, {
            addLineBreaksWithinLinear: !0
        }),
        Q = Vd(g, c, u),
        S = Xd(Zd(a, Zt(1e-5), Zt(5)), Zt(5)),
        v = Xt((() => s.value ? "Pause" : "Play")),
        y = Xt((() => s.value ? SVGPATHS.PAUSE : SVGPATHS.PLAY));
    return O(f, null, O(Hd, {
        onPresetSelect: t => r(t)
    }), O("div", {
        class: "_app-grid_1s7gt_1"
    }, O("div", {
        class: ad,
        style: {
            gridArea: "input"
        }
    }, O(Nd, {
        code: e,
        codeType: t,
        error: h,
        onChange: (t, e) => r({
            code: t,
            codeType: e
        })
    })), O("div", {
        class: "_preview-output_1s7gt_84",
        style: {
            gridArea: "preview-output"
        }
    }, O("div", {
        class: ad,
        style: {
            gridArea: "preview"
        }
    }, O("div", {
        class: nd
    }, O("div", {
        class: rd
    }, O("h2", null, "Preview"), O("p", null, "Here's how it looks:")), O("label", {
        class: sd,
        style: dd
    }, O("span", {
        class: ld
    }, "Duration"), O("input", {
        class: [hd, cd].join(" "),
        type: "number",
        value: o,
        onInput: t => o.value = t.target.value
    })), O("button", {
        style: dd,
        class: Od,
        onClick: () => s.value = !s.value
    }, O("span", {
        class: ud
    }, v), O("svg", {
        viewBox: "0 96 960 960"
    }, O("path", {
        d: y
    })))), O("div", {
        class: "_preview-content_1s7gt_103"
    }, O(md, {
        fullPoints: p,
        optimizedPoints: d
    }), O("div", {
        class: "_animated-demos_1s7gt_116"
    }, O(Rd, {
        play: s,
        duration: l,
        linear: g,
        slightlyOptimizedLinear: S
    })))), O("div", {
        class: ad,
        style: {
            gridArea: "output"
        }
    }, O("div", {
        class: nd
    }, O("div", {
        class: rd
    }, O("h2", null, "Output"), O("p", null, "Some shiny new CSS!")), O(zd, {
        value: Q
    })), O(id, {
        code: m,
        language: dt(2),
        readOnly: !0
    })), O("div", {
        class: [ad, fd].join(" "),
        style: {
            gridArea: "simplify"
        }
    }, O($d, {
        onInput: (t, e) => r({
            simplify: t,
            round: e
        }),
        round: n,
        simplify: i
    })))))}), null), document.getElementById("app"));
//SETVALUES();
