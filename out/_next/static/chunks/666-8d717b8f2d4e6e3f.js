(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{1704:function(r,e,t){"use strict";t.d(e,{bZ:function(){return j}});var n=t(7462),a=t(3366),o=t(4655),i=t(7294),l=t(2154),u=t(1180),s=t(6767),c=t.n(s),h=function(r,e){return c()(r).fade(1-e).rgb().string()},f=function(r){return{900:h(r,.92),800:h(r,.8),700:h(r,.6),600:h(r,.48),500:h(r,.38),400:h(r,.24),300:h(r,.16),200:h(r,.12),100:h(r,.08),50:h(r,.04)}},d=function(r,e){switch(e){case"high":return r;case"medium":return f(r)[700];case"low":return f(r)[500];case"lowest":return f(r)[300];default:return}},g=t(7721),p=t(3750);function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,n)}return t}function v(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(t,!0).forEach(function(e){(0,u.Z)(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(t).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}var m=function(r){var e=r.color;return{light:v({pl:3},k(r).light,{borderLeft:"4px",borderColor:e+".500"}),dark:v({pl:3},k(r).dark,{borderLeft:"4px",borderColor:e+".200"})}},y=function(r){var e=r.color;return{light:v({pt:2},k(r).light,{borderTop:"4px",borderColor:e+".500"}),dark:v({pt:2},k(r).dark,{borderTop:"4px",borderColor:e+".200"})}},w=function(r){var e=r.color;return{light:{bg:e+".500",color:"white"},dark:{bg:e+".200",color:"gray.900"}}},k=function(r){var e=r.color,t=r.theme.colors,n=t[e]&&t[e][200];return{light:{bg:e+".100"},dark:{bg:d(n,"lowest")}}},M=function(r){switch(r.variant){case"solid":return w(r);case"subtle":return k(r);case"top-accent":return y(r);case"left-accent":return m(r);default:return{}}},E={display:"flex",alignItems:"center",position:"relative",overflow:"hidden",pl:4,pr:4,pt:3,pb:3},x=function(r){var e=(0,p.If)().colorMode,t=v({},r,{theme:(0,g.F)()});return v({},E,{},M(t)[e])},O={info:{icon:"info",color:"blue"},warning:{icon:"warning-2",color:"orange"},success:{icon:"check-circle",color:"green"},error:{icon:"warning",color:"red"}},R=(0,i.createContext)(),j=function(r){var e=r.status,t=void 0===e?"info":e,i=r.variant,u=void 0===i?"subtle":i,s=(0,a.Z)(r,["status","variant"]),c=x({variant:u,color:O[t]&&O[t].color});return(0,o.tZ)(R.Provider,{value:{status:t,variant:u}},(0,o.tZ)(l.ZP,(0,n.Z)({role:"alert"},c,s)))}},824:function(r,e,t){"use strict";var n=t(7462),a=t(3366),o=t(7294),i=t(2154),l=(0,o.forwardRef)(function(r,e){var t=r.align,l=r.justify,u=r.wrap,s=r.direction,c=(0,a.Z)(r,["align","justify","wrap","direction"]);return o.createElement(i.ZP,(0,n.Z)({ref:e,display:"flex",flexDirection:s,alignItems:t,justifyContent:l,flexWrap:u},c))});l.displayName="Flex",e.Z=l},4968:function(r,e,t){"use strict";t.d(e,{Z:function(){return f}});var n=t(7462),a=t(3366),o=t(7294),i=t(2154),l=(0,o.forwardRef)(function(r,e){var t=r.gap,l=r.rowGap,u=r.columnGap,s=r.autoFlow,c=r.autoRows,h=r.autoColumns,f=r.templateRows,d=r.templateColumns,g=r.templateAreas,p=r.area,b=r.column,v=r.row,m=(0,a.Z)(r,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return o.createElement(i.ZP,(0,n.Z)({ref:e,display:"grid",gridArea:p,gridTemplateAreas:g,gridGap:t,gridRowGap:l,gridColumnGap:u,gridAutoColumns:h,gridColumn:b,gridRow:v,gridAutoFlow:s,gridAutoRows:c,gridTemplateRows:f,gridTemplateColumns:d},m))});l.displayName="Grid";var u=function(r){return"number"==typeof r?r+"px":r},s=function r(e){if(Array.isArray(e))return e.map(r);if(null!==e&&"object"==typeof e&&Object.keys(e).length>0){var t={};for(var n in e)t[n]="repeat(auto-fit, minmax("+u(e[n])+", 1fr))";return t}return null!=e?"repeat(auto-fit, minmax("+u(e)+", 1fr))":null},c=function r(e){if(Array.isArray(e))return e.map(r);if(null!==e&&"object"==typeof e&&Object.keys(e).length>0){var t={};for(var n in e)t[n]="repeat("+e[n]+", 1fr)";return t}return null!=e?"repeat("+e+", 1fr)":null},h=(0,o.forwardRef)(function(r,e){var t=r.columns,i=r.spacingX,u=r.spacingY,h=r.spacing,f=r.minChildWidth,d=(0,a.Z)(r,["columns","spacingX","spacingY","spacing","minChildWidth"]),g=f?s(f):c(t);return o.createElement(l,(0,n.Z)({ref:e,gap:h,columnGap:i,rowGap:u,templateColumns:g},d))});h.displayName="SimpleGrid";var f=h},1395:function(r,e,t){"use strict";var n=t(7462),a=t(7294),o=t(2154),i=a.forwardRef(function(r,e){return a.createElement(o.ZP,(0,n.Z)({ref:e,as:"p",fontFamily:"body"},r))});i.displayName="Text",e.Z=i},8168:function(r,e,t){var n=t(8874),a={};for(var o in n)n.hasOwnProperty(o)&&(a[n[o]]=o);var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i)if(i.hasOwnProperty(l)){if(!("channels"in i[l]))throw Error("missing channels property: "+l);if(!("labels"in i[l]))throw Error("missing channel labels property: "+l);if(i[l].labels.length!==i[l].channels)throw Error("channel and label counts mismatch: "+l);var u=i[l].channels,s=i[l].labels;delete i[l].channels,delete i[l].labels,Object.defineProperty(i[l],"channels",{value:u}),Object.defineProperty(i[l],"labels",{value:s})}i.rgb.hsl=function(r){var e,t,n=r[0]/255,a=r[1]/255,o=r[2]/255,i=Math.min(n,a,o),l=Math.max(n,a,o),u=l-i;return l===i?e=0:n===l?e=(a-o)/u:a===l?e=2+(o-n)/u:o===l&&(e=4+(n-a)/u),(e=Math.min(60*e,360))<0&&(e+=360),t=(i+l)/2,[e,100*(l===i?0:t<=.5?u/(l+i):u/(2-l-i)),100*t]},i.rgb.hsv=function(r){var e,t,n,a,o,i=r[0]/255,l=r[1]/255,u=r[2]/255,s=Math.max(i,l,u),c=s-Math.min(i,l,u),h=function(r){return(s-r)/6/c+.5};return 0===c?a=o=0:(o=c/s,e=h(i),t=h(l),n=h(u),i===s?a=n-t:l===s?a=1/3+e-n:u===s&&(a=2/3+t-e),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*s]},i.rgb.hwb=function(r){var e=r[0],t=r[1],n=r[2];return[i.rgb.hsl(r)[0],100*(1/255*Math.min(e,Math.min(t,n))),100*(n=1-1/255*Math.max(e,Math.max(t,n)))]},i.rgb.cmyk=function(r){var e,t=r[0]/255,n=r[1]/255,a=r[2]/255;return e=Math.min(1-t,1-n,1-a),[100*((1-t-e)/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]},i.rgb.keyword=function(r){var e,t=a[r];if(t)return t;var o=1/0;for(var i in n)if(n.hasOwnProperty(i)){var l=n[i],u=Math.pow(r[0]-l[0],2)+Math.pow(r[1]-l[1],2)+Math.pow(r[2]-l[2],2);u<o&&(o=u,e=i)}return e},i.keyword.rgb=function(r){return n[r]},i.rgb.xyz=function(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*t+.0722*n),100*(.0193*e+.1192*t+.9505*n)]},i.rgb.lab=function(r){var e=i.rgb.xyz(r),t=e[0],n=e[1],a=e[2];return t/=95.047,n/=100,a/=108.883,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},i.hsl.rgb=function(r){var e,t,n,a,o,i=r[0]/360,l=r[1]/100,u=r[2]/100;if(0===l)return[o=255*u,o,o];t=u<.5?u*(1+l):u+l-u*l,e=2*u-t,a=[0,0,0];for(var s=0;s<3;s++)(n=i+-(1/3*(s-1)))<0&&n++,n>1&&n--,o=6*n<1?e+(t-e)*6*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e,a[s]=255*o;return a},i.hsl.hsv=function(r){var e,t=r[0],n=r[1]/100,a=r[2]/100,o=n,i=Math.max(a,.01);return a*=2,n*=a<=1?a:2-a,o*=i<=1?i:2-i,e=(a+n)/2,[t,100*(0===a?2*o/(i+o):2*n/(a+n)),100*e]},i.hsv.rgb=function(r){var e=r[0]/60,t=r[1]/100,n=r[2]/100,a=e-Math.floor(e),o=255*n*(1-t),i=255*n*(1-t*a),l=255*n*(1-t*(1-a));switch(n*=255,Math.floor(e)%6){case 0:return[n,l,o];case 1:return[i,n,o];case 2:return[o,n,l];case 3:return[o,i,n];case 4:return[l,o,n];case 5:return[n,o,i]}},i.hsv.hsl=function(r){var e,t,n,a=r[0],o=r[1]/100,i=r[2]/100,l=Math.max(i,.01);return n=(2-o)*i,e=(2-o)*l,[a,100*(o*l/(e<=1?e:2-e)||0),100*(n/=2)]},i.hwb.rgb=function(r){var e,t,n,a,o,i,l,u=r[0]/360,s=r[1]/100,c=r[2]/100,h=s+c;switch(h>1&&(s/=h,c/=h),e=Math.floor(6*u),t=1-c,n=6*u-e,(1&e)!=0&&(n=1-n),a=s+n*(t-s),e){default:case 6:case 0:o=t,i=a,l=s;break;case 1:o=a,i=t,l=s;break;case 2:o=s,i=t,l=a;break;case 3:o=s,i=a,l=t;break;case 4:o=a,i=s,l=t;break;case 5:o=t,i=s,l=a}return[255*o,255*i,255*l]},i.cmyk.rgb=function(r){var e=r[0]/100,t=r[1]/100,n=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},i.xyz.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,i=r[2]/100;return e=3.2406*a+-1.5372*o+-.4986*i,t=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,[255*(e=Math.min(Math.max(0,e),1)),255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1))]},i.xyz.lab=function(r){var e=r[0],t=r[1],n=r[2];return e/=95.047,t/=100,n/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(e-t),200*(t-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]},i.lab.xyz=function(r){var e,t,n,a=r[0],o=r[1],i=r[2];e=o/500+(t=(a+16)/116),n=t-i/200;var l=Math.pow(t,3),u=Math.pow(e,3),s=Math.pow(n,3);return t=(l>.008856?l:(t-16/116)/7.787)*100,[e=(u>.008856?u:(e-16/116)/7.787)*95.047,t,n=(s>.008856?s:(n-16/116)/7.787)*108.883]},i.lab.lch=function(r){var e,t=r[0],n=r[1],a=r[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[t,Math.sqrt(n*n+a*a),e]},i.lch.lab=function(r){var e,t=r[0],n=r[1];return[t,n*Math.cos(e=r[2]/360*2*Math.PI),n*Math.sin(e)]},i.rgb.ansi16=function(r){var e=r[0],t=r[1],n=r[2],a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])},i.rgb.ansi256=function(r){var e=r[0],t=r[1],n=r[2];return e===t&&t===n?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},i.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),[e=e/10.5*255,e,e];var t=(~~(r>50)+1)*.5;return[(1&e)*t*255,(e>>1&1)*t*255,(e>>2&1)*t*255]},i.ansi256.rgb=function(r){if(r>=232){var e,t=(r-232)*10+8;return[t,t,t]}return[Math.floor((r-=16)/36)/5*255,Math.floor((e=r%36)/6)/5*255,e%6/5*255]},i.rgb.hex=function(r){var e=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var t=e[0];3===e[0].length&&(t=t.split("").map(function(r){return r+r}).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},i.rgb.hcg=function(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255,a=Math.max(Math.max(e,t),n),o=Math.min(Math.min(e,t),n),i=a-o;return[360*((i<=0?0:a===e?(t-n)/i%6:a===t?2+(n-e)/i:4+(e-t)/i+4)/6%1),100*i,100*(i<1?o/(1-i):0)]},i.hsl.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1,a=0;return(n=t<.5?2*e*t:2*e*(1-t))<1&&(a=(t-.5*n)/(1-n)),[r[0],100*n,100*a]},i.hsv.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=e*t,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},i.hcg.rgb=function(r){var e=r[0]/360,t=r[1]/100,n=r[2]/100;if(0===t)return[255*n,255*n,255*n];var a=[0,0,0],o=e%1*6,i=o%1,l=1-i,u=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return u=(1-t)*n,[(t*a[0]+u)*255,(t*a[1]+u)*255,(t*a[2]+u)*255]},i.hcg.hsv=function(r){var e=r[1]/100,t=e+r[2]/100*(1-e),n=0;return t>0&&(n=e/t),[r[0],100*n,100*t]},i.hcg.hsl=function(r){var e=r[1]/100,t=r[2]/100*(1-e)+.5*e,n=0;return t>0&&t<.5?n=e/(2*t):t>=.5&&t<1&&(n=e/(2*(1-t))),[r[0],100*n,100*t]},i.hcg.hwb=function(r){var e=r[1]/100,t=e+r[2]/100*(1-e);return[r[0],(t-e)*100,(1-t)*100]},i.hwb.hcg=function(r){var e=r[1]/100,t=1-r[2]/100,n=t-e,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]},i.gray.hwb=function(r){return[0,100,r[0]]},i.gray.cmyk=function(r){return[0,0,0,r[0]]},i.gray.lab=function(r){return[r[0],0,0]},i.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),t=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},2085:function(r,e,t){var n=t(8168),a=t(4111),o={};Object.keys(n).forEach(function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:n[r].channels}),Object.defineProperty(o[r],"labels",{value:n[r].labels});var e=a(r);Object.keys(e).forEach(function(t){var n,a,i=e[t];o[r][t]=(n=function(r){if(null==r)return r;arguments.length>1&&(r=Array.prototype.slice.call(arguments));var e=i(r);if("object"==typeof e)for(var t=e.length,n=0;n<t;n++)e[n]=Math.round(e[n]);return e},"conversion"in i&&(n.conversion=i.conversion),n),o[r][t].raw=(a=function(r){return null==r?r:(arguments.length>1&&(r=Array.prototype.slice.call(arguments)),i(r))},"conversion"in i&&(a.conversion=i.conversion),a)})}),r.exports=o},4111:function(r,e,t){var n=t(8168);r.exports=function(r){for(var e=function(r){var e=function(){for(var r={},e=Object.keys(n),t=e.length,a=0;a<t;a++)r[e[a]]={distance:-1,parent:null};return r}(),t=[r];for(e[r].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(n[a]),i=o.length,l=0;l<i;l++){var u=o[l],s=e[u];-1===s.distance&&(s.distance=e[a].distance+1,s.parent=a,t.unshift(u))}return e}(r),t={},a=Object.keys(e),o=a.length,i=0;i<o;i++){var l=a[i];null!==e[l].parent&&(t[l]=function(r,e){for(var t=[e[r].parent,r],a=n[e[r].parent][r],o=e[r].parent;e[o].parent;)t.unshift(e[o].parent),a=function(r,e){return function(t){return e(r(t))}}(n[e[o].parent][o],a),o=e[o].parent;return a.conversion=t,a}(l,e))}return t}},8874:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(r,e,t){var n=t(8874),a=t(6851),o=Object.hasOwnProperty,i=Object.create(null);for(var l in n)o.call(n,l)&&(i[n[l]]=l);var u=r.exports={to:{},get:{}};function s(r,e,t){return Math.min(Math.max(e,r),t)}function c(r){var e=Math.round(r).toString(16).toUpperCase();return e.length<2?"0"+e:e}u.get=function(r){var e,t;switch(r.substring(0,3).toLowerCase()){case"hsl":e=u.get.hsl(r),t="hsl";break;case"hwb":e=u.get.hwb(r),t="hwb";break;default:e=u.get.rgb(r),t="rgb"}return e?{model:t,value:e}:null},u.get.rgb=function(r){if(!r)return null;var e,t,a,i=[0,0,0,1];if(e=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(t=0,a=e[2],e=e[1];t<3;t++){var l=2*t;i[t]=parseInt(e.slice(l,l+2),16)}a&&(i[3]=parseInt(a,16)/255)}else if(e=r.match(/^#([a-f0-9]{3,4})$/i)){for(t=0,a=(e=e[1])[3];t<3;t++)i[t]=parseInt(e[t]+e[t],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(e=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)i[t]=parseInt(e[t+1],0);e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else if(e=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)i[t]=Math.round(2.55*parseFloat(e[t+1]));e[4]&&(e[5]?i[3]=.01*parseFloat(e[4]):i[3]=parseFloat(e[4]))}else if(!(e=r.match(/^(\w+)$/)))return null;else return"transparent"===e[1]?[0,0,0,0]:o.call(n,e[1])?((i=n[e[1]])[3]=1,i):null;for(t=0;t<3;t++)i[t]=s(i[t],0,255);return i[3]=s(i[3],0,1),i},u.get.hsl=function(r){if(!r)return null;var e=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var t=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,s(parseFloat(e[2]),0,100),s(parseFloat(e[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},u.get.hwb=function(r){if(!r)return null;var e=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(e){var t=parseFloat(e[4]);return[(parseFloat(e[1])%360+360)%360,s(parseFloat(e[2]),0,100),s(parseFloat(e[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},u.to.hex=function(){var r=a(arguments);return"#"+c(r[0])+c(r[1])+c(r[2])+(r[3]<1?c(Math.round(255*r[3])):"")},u.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},u.to.rgb.percent=function(){var r=a(arguments),e=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+t+"%, "+n+"%)":"rgba("+e+"%, "+t+"%, "+n+"%, "+r[3]+")"},u.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},u.to.hwb=function(){var r=a(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},u.to.keyword=function(r){return i[r.slice(0,3)]}},6767:function(r,e,t){"use strict";var n=t(9818),a=t(2085),o=[].slice,i=["keyword","gray","hex"],l={};Object.keys(a).forEach(function(r){l[o.call(a[r].labels).sort().join("")]=r});var u={};function s(r,e){if(!(this instanceof s))return new s(r,e);if(e&&e in i&&(e=null),e&&!(e in a))throw Error("Unknown model: "+e);if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof s)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var t,c,h=n.get(r);if(null===h)throw Error("Unable to parse color from string: "+r);this.model=h.model,c=a[this.model].channels,this.color=h.value.slice(0,c),this.valpha="number"==typeof h.value[c]?h.value[c]:1}else if(r.length){this.model=e||"rgb",c=a[this.model].channels;var d=o.call(r,0,c);this.color=f(d,c),this.valpha="number"==typeof r[c]?r[c]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var g=Object.keys(r);"alpha"in r&&(g.splice(g.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var p=g.sort().join("");if(!(p in l))throw Error("Unable to parse color from object: "+JSON.stringify(r));this.model=l[p];var b=a[this.model].labels,v=[];for(t=0;t<b.length;t++)v.push(r[b[t]]);this.color=f(v)}if(u[this.model])for(t=0,c=a[this.model].channels;t<c;t++){var m=u[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function c(r,e,t){return(r=Array.isArray(r)?r:[r]).forEach(function(r){(u[r]||(u[r]=[]))[e]=t}),r=r[0],function(n){var a;return arguments.length?(t&&(n=t(n)),(a=this[r]()).color[e]=n):(a=this[r]().color[e],t&&(a=t(a))),a}}function h(r){return function(e){return Math.max(0,Math.min(r,e))}}function f(r,e){for(var t=0;t<e;t++)"number"!=typeof r[t]&&(r[t]=0);return r}s.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in n.to?this:this.rgb(),t=1===(e=e.round("number"==typeof r?r:1)).valpha?e.color:e.color.concat(this.valpha);return n.to[e.model](t)},percentString:function(r){var e=this.rgb().round("number"==typeof r?r:1),t=1===e.valpha?e.color:e.color.concat(this.valpha);return n.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=a[this.model].channels,t=a[this.model].labels,n=0;n<e;n++)r[t[n]]=this.color[n];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){var e;return r=Math.max(r||0,0),new s(this.color.map((e=r,function(r){return Number(r.toFixed(e))})).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new s(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:c("rgb",0,h(255)),green:c("rgb",1,h(255)),blue:c("rgb",2,h(255)),hue:c(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:c("hsl",1,h(100)),lightness:c("hsl",2,h(100)),saturationv:c("hsv",1,h(100)),value:c("hsv",2,h(100)),chroma:c("hcg",1,h(100)),gray:c("hcg",2,h(100)),white:c("hwb",1,h(100)),wblack:c("hwb",2,h(100)),cyan:c("cmyk",0,h(100)),magenta:c("cmyk",1,h(100)),yellow:c("cmyk",2,h(100)),black:c("cmyk",3,h(100)),x:c("xyz",0,h(100)),y:c("xyz",1,h(100)),z:c("xyz",2,h(100)),l:c("lab",0,h(100)),a:c("lab",1),b:c("lab",2),keyword:function(r){return arguments.length?new s(r):a[this.model].keyword(this.color)},hex:function(r){return arguments.length?new s(r):n.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],t=0;t<r.length;t++){var n=r[t]/255;e[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),t=r.luminosity();return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return s.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),t=e.color[0];return t=(t=(t+r)%360)<0?360+t:t,e.color[0]=t,e},mix:function(r,e){if(!r||!r.rgb)throw Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var t=r.rgb(),n=this.rgb(),a=void 0===e?.5:e,o=2*a-1,i=t.alpha()-n.alpha(),l=((o*i==-1?o:(o+i)/(1+o*i))+1)/2,u=1-l;return s.rgb(l*t.red()+u*n.red(),l*t.green()+u*n.green(),l*t.blue()+u*n.blue(),t.alpha()*a+n.alpha()*(1-a))}},Object.keys(a).forEach(function(r){if(-1===i.indexOf(r)){var e=a[r].channels;s.prototype[r]=function(){if(this.model===r)return new s(this);if(arguments.length)return new s(arguments,r);var t,n="number"==typeof arguments[e]?e:this.valpha;return new s((Array.isArray(t=a[this.model][r].raw(this.color))?t:[t]).concat(n),r)},s[r]=function(t){return"number"==typeof t&&(t=f(o.call(arguments),e)),new s(t,r)}}}),r.exports=s},1163:function(r,e,t){r.exports=t(6885)},6851:function(r,e,t){"use strict";var n=t(9594),a=Array.prototype.concat,o=Array.prototype.slice,i=r.exports=function(r){for(var e=[],t=0,i=r.length;t<i;t++){var l=r[t];n(l)?e=a.call(e,o.call(l)):e.push(l)}return e};i.wrap=function(r){return function(){return r(i(arguments))}}},9594:function(r){r.exports=function(r){return!!r&&"string"!=typeof r&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},3250:function(r,e,t){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(7294),a="function"==typeof Object.is?Object.is:function(r,e){return r===e&&(0!==r||1/r==1/e)||r!=r&&e!=e},o=n.useState,i=n.useEffect,l=n.useLayoutEffect,u=n.useDebugValue;function s(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!a(r,t)}catch(r){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(r,e){return e()}:function(r,e){var t=e(),n=o({inst:{value:t,getSnapshot:e}}),a=n[0].inst,c=n[1];return l(function(){a.value=t,a.getSnapshot=e,s(a)&&c({inst:a})},[r,t,e]),i(function(){return s(a)&&c({inst:a}),r(function(){s(a)&&c({inst:a})})},[r]),u(t),t};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},1688:function(r,e,t){"use strict";r.exports=t(3250)},9734:function(r,e,t){"use strict";t.d(e,{ZP:function(){return rr}});var n,a=t(7294),o=t(1688);let i=()=>{},l=i(),u=Object,s=r=>r===l,c=r=>"function"==typeof r,h=(r,e)=>({...r,...e}),f=r=>c(r.then),d=new WeakMap,g=0,p=r=>{let e,t;let n=typeof r,a=r&&r.constructor,o=a==Date;if(u(r)!==r||o||a==RegExp)e=o?r.toJSON():"symbol"==n?r.toString():"string"==n?JSON.stringify(r):""+r;else{if(e=d.get(r))return e;if(e=++g+"~",d.set(r,e),a==Array){for(t=0,e="@";t<r.length;t++)e+=p(r[t])+",";d.set(r,e)}if(a==u){e="#";let n=u.keys(r).sort();for(;!s(t=n.pop());)s(r[t])||(e+=t+":"+p(r[t])+",");d.set(r,e)}}return e},b=new WeakMap,v={},m={},y="undefined",w=typeof window!=y,k=typeof document!=y,M=()=>w&&typeof window.requestAnimationFrame!=y,E=(r,e)=>{let t=b.get(r);return[()=>!s(e)&&r.get(e)||v,n=>{if(!s(e)){let a=r.get(e);e in m||(m[e]=a),t[5](e,h(a,n),a||v)}},t[6],()=>!s(e)&&e in m?m[e]:!s(e)&&r.get(e)||v]},x=!0,[O,R]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],j={initFocus:r=>(k&&document.addEventListener("visibilitychange",r),O("focus",r),()=>{k&&document.removeEventListener("visibilitychange",r),R("focus",r)}),initReconnect:r=>{let e=()=>{x=!0,r()},t=()=>{x=!1};return O("online",e),O("offline",t),()=>{R("online",e),R("offline",t)}}},S=!a.useId,A=!w||"Deno"in window,C=r=>M()?window.requestAnimationFrame(r):setTimeout(r,1),_=A?a.useEffect:a.useLayoutEffect,T="undefined"!=typeof navigator&&navigator.connection,P=!A&&T&&(["slow-2g","2g"].includes(T.effectiveType)||T.saveData),F=r=>{if(c(r))try{r=r()}catch(e){r=""}let e=r;return[r="string"==typeof r?r:(Array.isArray(r)?r.length:r)?p(r):"",e]},V=0,N=()=>++V;var L={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function D(...r){let[e,t,n,a]=r,o=h({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),i=o.populateCache,u=o.rollbackOnError,d=o.optimisticData,g=!1!==o.revalidate,p=r=>"function"==typeof u?u(r):!1!==u,v=o.throwOnError;if(c(t)){let r=[],n=e.keys();for(let a of n)!/^\$(inf|sub)\$/.test(a)&&t(e.get(a)._k)&&r.push(a);return Promise.all(r.map(m))}return m(t);async function m(t){let a;let[o]=F(t);if(!o)return;let[u,h]=E(e,o),[m,y,w,k]=b.get(e),M=()=>{let r=m[o];return g&&(delete w[o],delete k[o],r&&r[0])?r[0](2).then(()=>u().data):u().data};if(r.length<3)return M();let x=n,O=N();y[o]=[O,0];let R=!s(d),j=u(),S=j.data,A=j._c,C=s(A)?S:A;if(R&&h({data:d=c(d)?d(C,S):d,_c:C}),c(x))try{x=x(C)}catch(r){a=r}if(x&&f(x)){if(x=await x.catch(r=>{a=r}),O!==y[o][0]){if(a)throw a;return x}a&&R&&p(a)&&(i=!0,h({data:C,_c:l}))}if(i&&!a){if(c(i)){let r=i(x,C);h({data:r,error:l,_c:l})}else h({data:x,error:l,_c:l})}if(y[o][1]=N(),Promise.resolve(M()).then(()=>{h({_c:l})}),a){if(v)throw a;return}return x}}let I=(r,e)=>{for(let t in r)r[t][0]&&r[t][0](e)},Z=(r,e)=>{if(!b.has(r)){let t=h(j,e),n={},a=D.bind(l,r),o=i,u={},s=(r,e)=>{let t=u[r]||[];return u[r]=t,t.push(e),()=>t.splice(t.indexOf(e),1)},c=(e,t,n)=>{r.set(e,t);let a=u[e];if(a)for(let r of a)r(t,n)},f=()=>{if(!b.has(r)&&(b.set(r,[n,{},{},{},a,c,s]),!A)){let e=t.initFocus(setTimeout.bind(l,I.bind(l,n,0))),a=t.initReconnect(setTimeout.bind(l,I.bind(l,n,1)));o=()=>{e&&e(),a&&a(),b.delete(r)}}};return f(),[r,a,f,o]}return[r,b.get(r)[4]]},[q,z]=Z(new Map),U=h({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(r,e,t,n,a)=>{let o=t.errorRetryCount,i=a.retryCount,l=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;(s(o)||!(i>o))&&setTimeout(n,l,a)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:P?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:P?5e3:3e3,compare:(r,e)=>p(r)==p(e),isPaused:()=>!1,cache:q,mutate:z,fallback:{}},{isOnline:()=>x,isVisible:()=>{let r=k&&document.visibilityState;return s(r)||"hidden"!==r}}),G=(r,e)=>{let t=h(r,e);if(e){let{use:n,fallback:a}=r,{use:o,fallback:i}=e;n&&o&&(t.use=n.concat(o)),a&&i&&(t.fallback=h(a,i))}return t},$=(0,a.createContext)({}),W=w&&window.__SWR_DEVTOOLS_USE__,J=W?window.__SWR_DEVTOOLS_USE__:[],X=r=>c(r[1])?[r[0],r[1],r[2]||{}]:[r[0],null,(null===r[1]?r[2]:r[1])||{}],Y=()=>h(U,(0,a.useContext)($)),B=J.concat(r=>(e,t,n)=>{let a=t&&((...r)=>{let[n]=F(e),[,,,a]=b.get(q);if(n.startsWith("$inf$"))return t(...r);let o=a[n];return s(o)?t(...r):(delete a[n],o)});return r(e,a,n)}),H=(r,e,t)=>{let n=e[r]||(e[r]=[]);return n.push(t),()=>{let r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}};W&&(window.__SWR_DEVTOOLS_REACT__=a);let K=a.use||(r=>{if("pending"===r.status)throw r;if("fulfilled"===r.status)return r.value;if("rejected"===r.status)throw r.reason;throw r.status="pending",r.then(e=>{r.status="fulfilled",r.value=e},e=>{r.status="rejected",r.reason=e}),r}),Q={dedupe:!0};u.defineProperty(r=>{let{value:e}=r,t=(0,a.useContext)($),n=c(e),o=(0,a.useMemo)(()=>n?e(t):e,[n,t,e]),i=(0,a.useMemo)(()=>n?o:G(t,o),[n,t,o]),u=o&&o.provider,s=(0,a.useRef)(l);u&&!s.current&&(s.current=Z(u(i.cache||q),o));let f=s.current;return f&&(i.cache=f[0],i.mutate=f[1]),_(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,a.createElement)($.Provider,h(r,{value:i}))},"defaultValue",{value:U});let rr=(n=(r,e,t)=>{let{cache:n,compare:i,suspense:u,fallbackData:f,revalidateOnMount:d,revalidateIfStale:g,refreshInterval:p,refreshWhenHidden:v,refreshWhenOffline:m,keepPreviousData:y}=t,[w,k,M,x]=b.get(n),[O,R]=F(r),j=(0,a.useRef)(!1),T=(0,a.useRef)(!1),P=(0,a.useRef)(O),V=(0,a.useRef)(e),I=(0,a.useRef)(t),Z=()=>I.current,q=()=>Z().isVisible()&&Z().isOnline(),[z,U,G,$]=E(n,O),W=(0,a.useRef)({}).current,J=s(f)?t.fallback[O]:f,X=(r,e)=>{for(let t in W)if("data"===t){if(!i(r[t],e[t])&&(!s(r[t])||!i(ri,e[t])))return!1}else if(e[t]!==r[t])return!1;return!0},Y=(0,a.useMemo)(()=>{let r=!!O&&!!e&&(s(d)?!Z().isPaused()&&!u&&(!!s(g)||g):d),t=e=>{let t=h(e);return(delete t._k,r)?{isValidating:!0,isLoading:!0,...t}:t},n=z(),a=$(),o=t(n),i=n===a?o:t(a),l=o;return[()=>{let r=t(z()),e=X(r,l);return e?(l.data=r.data,l.isLoading=r.isLoading,l.isValidating=r.isValidating,l.error=r.error,l):(l=r,r)},()=>i]},[n,O]),B=(0,o.useSyncExternalStore)((0,a.useCallback)(r=>G(O,(e,t)=>{X(t,e)||r()}),[n,O]),Y[0],Y[1]),rr=!j.current,re=w[O]&&w[O].length>0,rt=B.data,rn=s(rt)?J:rt,ra=B.error,ro=(0,a.useRef)(rn),ri=y?s(rt)?ro.current:rt:rn,rl=(!re||!!s(ra))&&(rr&&!s(d)?d:!Z().isPaused()&&(u?!s(rn)&&g:s(rn)||g)),ru=!!(O&&e&&rr&&rl),rs=s(B.isValidating)?ru:B.isValidating,rc=s(B.isLoading)?ru:B.isLoading,rh=(0,a.useCallback)(async r=>{let e,n;let a=V.current;if(!O||!a||T.current||Z().isPaused())return!1;let o=!0,u=r||{},h=!M[O]||!u.dedupe,f=()=>S?!T.current&&O===P.current&&j.current:O===P.current,d={isValidating:!1,isLoading:!1},g=()=>{U(d)},p=()=>{let r=M[O];r&&r[1]===n&&delete M[O]},b={isValidating:!0};s(z().data)&&(b.isLoading=!0);try{if(h&&(U(b),t.loadingTimeout&&s(z().data)&&setTimeout(()=>{o&&f()&&Z().onLoadingSlow(O,t)},t.loadingTimeout),M[O]=[a(R),N()]),[e,n]=M[O],e=await e,h&&setTimeout(p,t.dedupingInterval),!M[O]||M[O][1]!==n)return h&&f()&&Z().onDiscarded(O),!1;d.error=l;let r=k[O];if(!s(r)&&(n<=r[0]||n<=r[1]||0===r[1]))return g(),h&&f()&&Z().onDiscarded(O),!1;let u=z().data;d.data=i(u,e)?u:e,h&&f()&&Z().onSuccess(e,O,t)}catch(t){p();let r=Z(),{shouldRetryOnError:e}=r;!r.isPaused()&&(d.error=t,h&&f()&&(r.onError(t,O,r),(!0===e||c(e)&&e(t))&&q()&&r.onErrorRetry(t,O,r,r=>{let e=w[O];e&&e[0]&&e[0](L.ERROR_REVALIDATE_EVENT,r)},{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return o=!1,g(),!0},[O,n]),rf=(0,a.useCallback)((...r)=>D(n,P.current,...r),[]);if(_(()=>{V.current=e,I.current=t,s(rt)||(ro.current=rt)}),_(()=>{if(!O)return;let r=rh.bind(l,Q),e=0,t=H(O,w,(t,n={})=>{if(t==L.FOCUS_EVENT){let t=Date.now();Z().revalidateOnFocus&&t>e&&q()&&(e=t+Z().focusThrottleInterval,r())}else if(t==L.RECONNECT_EVENT)Z().revalidateOnReconnect&&q()&&r();else if(t==L.MUTATE_EVENT)return rh();else if(t==L.ERROR_REVALIDATE_EVENT)return rh(n)});return T.current=!1,P.current=O,j.current=!0,U({_k:R}),rl&&(s(rn)||A?r():C(r)),()=>{T.current=!0,t()}},[O]),_(()=>{let r;function e(){let e=c(p)?p(z().data):p;e&&-1!==r&&(r=setTimeout(t,e))}function t(){!z().error&&(v||Z().isVisible())&&(m||Z().isOnline())?rh(Q).then(e):e()}return e(),()=>{r&&(clearTimeout(r),r=-1)}},[p,v,m,O]),(0,a.useDebugValue)(ri),u&&s(rn)&&O){if(!S&&A)throw Error("Fallback data is required when using suspense in SSR.");V.current=e,I.current=t,T.current=!1;let r=x[O];if(!s(r)){let e=rf(r);K(e)}if(s(ra)){let r=rh(Q);s(ri)||(r.status="fulfilled",r.value=!0),K(r)}else throw ra}return{mutate:rf,get data(){return W.data=!0,ri},get error(){return W.error=!0,ra},get isValidating(){return W.isValidating=!0,rs},get isLoading(){return W.isLoading=!0,rc}}},function(...r){let e=Y(),[t,a,o]=X(r),i=G(e,o),l=n,{use:u}=i,s=(u||[]).concat(B);for(let r=s.length;r--;)l=s[r](l);return l(t,a||i.fetcher||null,i)})}}]);