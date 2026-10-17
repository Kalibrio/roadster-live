var lm=Object.defineProperty;var hm=(i,t,e)=>t in i?lm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var xf=(i,t,e)=>hm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ou="170",um=0,_f=1,fm=2,Dd=1,dm=2,Fs=3,Ts=0,Zn=1,je=2,Vs=0,Eo=1,Pn=2,yf=3,Mf=4,Id=5,Lr=100,pm=101,mm=102,gm=103,vm=104,xm=200,Ud=201,_m=202,ym=203,zh=204,sl=205,Mm=206,bm=207,Sm=208,wm=209,Tm=210,Em=211,Am=212,Cm=213,Rm=214,Oh=0,Bh=1,kh=2,Fo=3,Hh=4,Gh=5,Vh=6,Wh=7,Fd=0,Pm=1,Lm=2,Ws=0,Dm=1,Im=2,Um=3,Fm=4,Nm=5,zm=6,Om=7,Nd=300,No=301,zo=302,Xh=303,qh=304,wl=306,Yh=1e3,Fr=1001,Kh=1002,bi=1003,Bm=1004,Qa=1005,Yi=1006,Ol=1007,Nr=1008,$s=1009,zd=1010,Od=1011,Ba=1012,Bu=1013,Wr=1014,Ss=1015,Ki=1016,ku=1017,Hu=1018,Oo=1020,Bd=35902,kd=1021,Hd=1022,Di=1023,Gd=1024,Vd=1025,Ao=1026,Bo=1027,Gu=1028,Vu=1029,Wd=1030,Wu=1031,Xu=1033,kc=33776,Hc=33777,Gc=33778,Vc=33779,$h=35840,jh=35841,Zh=35842,Jh=35843,Qh=36196,tu=37492,eu=37496,nu=37808,iu=37809,su=37810,ru=37811,ou=37812,au=37813,cu=37814,lu=37815,hu=37816,uu=37817,fu=37818,du=37819,pu=37820,mu=37821,Wc=36492,gu=36494,vu=36495,Xd=36283,xu=36284,_u=36285,yu=36286,km=3200,Hm=3201,qd=0,Gm=1,Os="",In="srgb",$o="srgb-linear",Tl="linear",dn="srgb",Qr=7680,bf=519,Vm=512,Wm=513,Xm=514,Yd=515,qm=516,Ym=517,Km=518,$m=519,Mu=35044,Xs=35048,Sf="300 es",Hs=2e3,rl=2001;class jo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wf=1234567;const Ea=Math.PI/180,ko=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toLowerCase()}function Vn(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function jm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zm(i,t,e){return i!==t?(e-i)/(t-i):0}function Aa(i,t,e){return(1-e)*i+e*t}function Jm(i,t,e,n){return Aa(i,t,1-Math.exp(-e*n))}function Qm(i,t=1){return t-Math.abs(qu(i,t*2)-t)}function tg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function eg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ng(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ig(i,t){return i+Math.random()*(t-i)}function sg(i){return i*(.5-Math.random())}function rg(i){i!==void 0&&(wf=i);let t=wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function og(i){return i*Ea}function ag(i){return i*ko}function cg(i){return(i&i-1)===0&&i!==0}function lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ug(i,t,e,n,s){const o=Math.cos,a=Math.sin,c=o(e/2),l=a(e/2),h=o((t+n)/2),r=a((t+n)/2),u=o((t-n)/2),f=a((t-n)/2),d=o((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(c*r,l*u,l*f,c*h);break;case"YZY":i.set(l*f,c*r,l*u,c*h);break;case"ZXZ":i.set(l*u,l*f,c*r,c*h);break;case"XZX":i.set(c*r,l*v,l*d,c*h);break;case"YXY":i.set(l*d,c*r,l*v,c*h);break;case"ZYZ":i.set(l*v,l*d,c*r,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:Ea,RAD2DEG:ko,generateUUID:ws,clamp:Vn,euclideanModulo:qu,mapLinear:jm,inverseLerp:Zm,lerp:Aa,damp:Jm,pingpong:Qm,smoothstep:tg,smootherstep:eg,randInt:ng,randFloat:ig,randFloatSpread:sg,seededRandom:rg,degToRad:og,radToDeg:ag,isPowerOfTwo:cg,ceilPowerOfTwo:lg,floorPowerOfTwo:hg,setQuaternionFromProperEuler:ug,normalize:un,denormalize:os};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(t,e,n,s,o,a,c,l,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,c,l,h)}set(t,e,n,s,o,a,c,l,h){const r=this.elements;return r[0]=t,r[1]=s,r[2]=c,r[3]=e,r[4]=o,r[5]=l,r[6]=n,r[7]=a,r[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],c=n[3],l=n[6],h=n[1],r=n[4],u=n[7],f=n[2],d=n[5],v=n[8],g=s[0],m=s[3],p=s[6],_=s[1],M=s[4],y=s[7],R=s[2],U=s[5],D=s[8];return o[0]=a*g+c*_+l*R,o[3]=a*m+c*M+l*U,o[6]=a*p+c*y+l*D,o[1]=h*g+r*_+u*R,o[4]=h*m+r*M+u*U,o[7]=h*p+r*y+u*D,o[2]=f*g+d*_+v*R,o[5]=f*m+d*M+v*U,o[8]=f*p+d*y+v*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8];return e*a*r-e*c*h-n*o*r+n*c*l+s*o*h-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8],u=r*a-c*h,f=c*l-r*o,d=h*o-a*l,v=e*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*h-r*n)*g,t[2]=(c*n-s*a)*g,t[3]=f*g,t[4]=(r*e-s*l)*g,t[5]=(s*o-c*e)*g,t[6]=d*g,t[7]=(n*l-h*e)*g,t[8]=(a*e-n*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,c){const l=Math.cos(o),h=Math.sin(o);return this.set(n*l,n*h,-n*(l*a+h*c)+a+t,-s*h,s*l,-s*(-h*a+l*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bl=new Be;function Kd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ol(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fg(){const i=ol("canvas");return i.style.display="block",i}const Tf={};function xa(i){i in Tf||(Tf[i]=!0,console.warn(i))}function dg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function pg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Je={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===dn&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===dn&&(i.r=Co(i.r),i.g=Co(i.g),i.b=Co(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Os?Tl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ef=[.64,.33,.3,.6,.15,.06],Af=[.2126,.7152,.0722],Cf=[.3127,.329],Rf=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[$o]:{primaries:Ef,whitePoint:Cf,transfer:Tl,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:Af,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:Ef,whitePoint:Cf,transfer:dn,toXYZ:Rf,fromXYZ:Pf,luminanceCoefficients:Af,outputColorSpaceConfig:{drawingBufferColorSpace:In}}});let to;class gg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{to===void 0&&(to=ol("canvas")),to.width=t.width,to.height=t.height;const n=to.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=to}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ol("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=qs(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qs(e[n]/255)*255):e[n]=qs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vg=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?o.push(kl(s[a].image)):o.push(kl(s[a]))}else o=kl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xg=0;class hi extends jo{constructor(t=hi.DEFAULT_IMAGE,e=hi.DEFAULT_MAPPING,n=Fr,s=Fr,o=Yi,a=Nr,c=Di,l=$s,h=hi.DEFAULT_ANISOTROPY,r=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ws(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=r,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case Kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case Kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Nd;hi.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,e=0,n=0,s=1){en.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,h=l[0],r=l[4],u=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(r-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(r+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,y=(d+1)/2,R=(p+1)/2,U=(r+f)/4,D=(u+g)/4,N=(v+m)/4;return M>y&&M>R?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=U/n,o=D/n):y>R?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=U/s,o=N/s):R<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),n=D/o,s=N/o),this.set(n,s,o,e),this}let _=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-r)*(f-r));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(u-g)/_,this.z=(f-r)/_,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends jo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new hi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends _g{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jd extends hi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends hi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,c){let l=n[s+0],h=n[s+1],r=n[s+2],u=n[s+3];const f=o[a+0],d=o[a+1],v=o[a+2],g=o[a+3];if(c===0){t[e+0]=l,t[e+1]=h,t[e+2]=r,t[e+3]=u;return}if(c===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==f||h!==d||r!==v){let m=1-c;const p=l*f+h*d+r*v+u*g,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),U=Math.atan2(R,p*_);m=Math.sin(m*U)/R,c=Math.sin(c*U)/R}const y=c*_;if(l=l*m+f*y,h=h*m+d*y,r=r*m+v*y,u=u*m+g*y,m===1-c){const R=1/Math.sqrt(l*l+h*h+r*r+u*u);l*=R,h*=R,r*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=r,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const c=n[s],l=n[s+1],h=n[s+2],r=n[s+3],u=o[a],f=o[a+1],d=o[a+2],v=o[a+3];return t[e]=c*v+r*u+l*d-h*f,t[e+1]=l*v+r*f+h*u-c*d,t[e+2]=h*v+r*d+c*f-l*u,t[e+3]=r*v-c*u-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,c=Math.cos,l=Math.sin,h=c(n/2),r=c(s/2),u=c(o/2),f=l(n/2),d=l(s/2),v=l(o/2);switch(a){case"XYZ":this._x=f*r*u+h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u-f*d*v;break;case"YXZ":this._x=f*r*u+h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u+f*d*v;break;case"ZXY":this._x=f*r*u-h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u-f*d*v;break;case"ZYX":this._x=f*r*u-h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u+f*d*v;break;case"YZX":this._x=f*r*u+h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u-f*d*v;break;case"XZY":this._x=f*r*u-h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],c=e[5],l=e[9],h=e[2],r=e[6],u=e[10],f=n+c+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(r-l)*d,this._y=(o-h)*d,this._z=(a-s)*d}else if(n>c&&n>u){const d=2*Math.sqrt(1+n-c-u);this._w=(r-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(o+h)/d}else if(c>u){const d=2*Math.sqrt(1+c-n-u);this._w=(o-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+r)/d}else{const d=2*Math.sqrt(1+u-n-c);this._w=(a-s)/d,this._x=(o+h)/d,this._y=(l+r)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,c=e._x,l=e._y,h=e._z,r=e._w;return this._x=n*r+a*c+s*h-o*l,this._y=s*r+a*l+o*c-n*h,this._z=o*r+a*h+n*l-s*c,this._w=a*r-n*c-s*l-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let c=a*t._w+n*t._x+s*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const l=1-c*c;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const h=Math.sqrt(l),r=Math.atan2(h,c),u=Math.sin((1-e)*r)/h,f=Math.sin(e*r)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,c=t.z,l=t.w,h=2*(a*s-c*n),r=2*(c*e-o*s),u=2*(o*n-a*e);return this.x=e+l*h+a*u-c*r,this.y=n+l*r+c*h-o*u,this.z=s+l*u+o*r-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,c=e.y,l=e.z;return this.x=s*l-o*c,this.y=o*a-n*l,this.z=n*c-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hl.copy(this).projectOnVector(t),this.sub(Hl)}reflect(t){return this.sub(Hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hl=new L,Lf=new ni;class Kr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,Zi):Zi.fromBufferAttribute(o,a),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),ec.subVectors(this.max,ea),eo.subVectors(t.a,ea),no.subVectors(t.b,ea),io.subVectors(t.c,ea),js.subVectors(no,eo),Zs.subVectors(io,no),_r.subVectors(eo,io);let e=[0,-js.z,js.y,0,-Zs.z,Zs.y,0,-_r.z,_r.y,js.z,0,-js.x,Zs.z,0,-Zs.x,_r.z,0,-_r.x,-js.y,js.x,0,-Zs.y,Zs.x,0,-_r.y,_r.x,0];return!Gl(e,eo,no,io,ec)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,eo,no,io,ec))?!1:(nc.crossVectors(js,Zs),e=[nc.x,nc.y,nc.z],Gl(e,eo,no,io,ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rs=[new L,new L,new L,new L,new L,new L,new L,new L],Zi=new L,tc=new Kr,eo=new L,no=new L,io=new L,js=new L,Zs=new L,_r=new L,ea=new L,ec=new L,nc=new L,yr=new L;function Gl(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){yr.fromArray(i,o);const c=s.x*Math.abs(yr.x)+s.y*Math.abs(yr.y)+s.z*Math.abs(yr.z),l=t.dot(yr),h=e.dot(yr),r=n.dot(yr);if(Math.max(-Math.max(l,h,r),Math.min(l,h,r))>c)return!1}return!0}const Mg=new Kr,na=new L,Vl=new L;class Zo{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);const e=na.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(Vl)),this.expandByPoint(na.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ps=new L,Wl=new L,ic=new L,Js=new L,Xl=new L,sc=new L,ql=new L;class Zd{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ps)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ps.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ps.copy(this.origin).addScaledVector(this.direction,e),Ps.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wl.copy(t).add(e).multiplyScalar(.5),ic.copy(e).sub(t).normalize(),Js.copy(this.origin).sub(Wl);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ic),c=Js.dot(this.direction),l=-Js.dot(ic),h=Js.lengthSq(),r=Math.abs(1-a*a);let u,f,d,v;if(r>0)if(u=a*l-c,f=a*c-l,v=o*r,u>=0)if(f>=-v)if(f<=v){const g=1/r;u*=g,f*=g,d=u*(u+a*f+2*c)+f*(a*u+f+2*l)+h}else f=o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;else f=-o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;else f<=-v?(u=Math.max(0,-(-a*o+c)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+h):f<=v?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+h):(u=Math.max(0,-(a*o+c)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+h);else f=a>0?-o:o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wl).addScaledVector(ic,f),d}intersectSphere(t,e){Ps.subVectors(t.center,this.origin);const n=Ps.dot(this.direction),s=Ps.dot(Ps)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),c=n-a,l=n+a;return l<0?null:c<0?this.at(l,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,c,l;const h=1/this.direction.x,r=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),r>=0?(o=(t.min.y-f.y)*r,a=(t.max.y-f.y)*r):(o=(t.max.y-f.y)*r,a=(t.min.y-f.y)*r),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(c=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(c=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||c>s)||((c>n||n!==n)&&(n=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ps)!==null}intersectTriangle(t,e,n,s,o){Xl.subVectors(e,t),sc.subVectors(n,t),ql.crossVectors(Xl,sc);let a=this.direction.dot(ql),c;if(a>0){if(s)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Js.subVectors(this.origin,t);const l=c*this.direction.dot(sc.crossVectors(Js,sc));if(l<0)return null;const h=c*this.direction.dot(Xl.cross(Js));if(h<0||l+h>a)return null;const r=-c*Js.dot(ql);return r<0?null:this.at(r/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(t,e,n,s,o,a,c,l,h,r,u,f,d,v,g,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,c,l,h,r,u,f,d,v,g,m)}set(t,e,n,s,o,a,c,l,h,r,u,f,d,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=c,p[13]=l,p[2]=h,p[6]=r,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/so.setFromMatrixColumn(t,0).length(),o=1/so.setFromMatrixColumn(t,1).length(),a=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),c=Math.sin(n),l=Math.cos(s),h=Math.sin(s),r=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=a*r,d=a*u,v=c*r,g=c*u;e[0]=l*r,e[4]=-l*u,e[8]=h,e[1]=d+v*h,e[5]=f-g*h,e[9]=-c*l,e[2]=g-f*h,e[6]=v+d*h,e[10]=a*l}else if(t.order==="YXZ"){const f=l*r,d=l*u,v=h*r,g=h*u;e[0]=f+g*c,e[4]=v*c-d,e[8]=a*h,e[1]=a*u,e[5]=a*r,e[9]=-c,e[2]=d*c-v,e[6]=g+f*c,e[10]=a*l}else if(t.order==="ZXY"){const f=l*r,d=l*u,v=h*r,g=h*u;e[0]=f-g*c,e[4]=-a*u,e[8]=v+d*c,e[1]=d+v*c,e[5]=a*r,e[9]=g-f*c,e[2]=-a*h,e[6]=c,e[10]=a*l}else if(t.order==="ZYX"){const f=a*r,d=a*u,v=c*r,g=c*u;e[0]=l*r,e[4]=v*h-d,e[8]=f*h+g,e[1]=l*u,e[5]=g*h+f,e[9]=d*h-v,e[2]=-h,e[6]=c*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*h,v=c*l,g=c*h;e[0]=l*r,e[4]=g-f*u,e[8]=v*u+d,e[1]=u,e[5]=a*r,e[9]=-c*r,e[2]=-h*r,e[6]=d*u+v,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,d=a*h,v=c*l,g=c*h;e[0]=l*r,e[4]=-u,e[8]=h*r,e[1]=f*u+g,e[5]=a*r,e[9]=d*u-v,e[2]=v*u-d,e[6]=c*r,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bg,t,Sg)}lookAt(t,e,n){const s=this.elements;return Ri.subVectors(t,e),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Qs.crossVectors(n,Ri),Qs.lengthSq()===0&&(Math.abs(n.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Qs.crossVectors(n,Ri)),Qs.normalize(),rc.crossVectors(Ri,Qs),s[0]=Qs.x,s[4]=rc.x,s[8]=Ri.x,s[1]=Qs.y,s[5]=rc.y,s[9]=Ri.y,s[2]=Qs.z,s[6]=rc.z,s[10]=Ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],c=n[4],l=n[8],h=n[12],r=n[1],u=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],M=n[7],y=n[11],R=n[15],U=s[0],D=s[4],N=s[8],P=s[12],x=s[1],z=s[5],B=s[9],et=s[13],vt=s[2],wt=s[6],pt=s[10],Lt=s[14],tt=s[3],Ht=s[7],se=s[11],ue=s[15];return o[0]=a*U+c*x+l*vt+h*tt,o[4]=a*D+c*z+l*wt+h*Ht,o[8]=a*N+c*B+l*pt+h*se,o[12]=a*P+c*et+l*Lt+h*ue,o[1]=r*U+u*x+f*vt+d*tt,o[5]=r*D+u*z+f*wt+d*Ht,o[9]=r*N+u*B+f*pt+d*se,o[13]=r*P+u*et+f*Lt+d*ue,o[2]=v*U+g*x+m*vt+p*tt,o[6]=v*D+g*z+m*wt+p*Ht,o[10]=v*N+g*B+m*pt+p*se,o[14]=v*P+g*et+m*Lt+p*ue,o[3]=_*U+M*x+y*vt+R*tt,o[7]=_*D+M*z+y*wt+R*Ht,o[11]=_*N+M*B+y*pt+R*se,o[15]=_*P+M*et+y*Lt+R*ue,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],c=t[5],l=t[9],h=t[13],r=t[2],u=t[6],f=t[10],d=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+o*l*u-s*h*u-o*c*f+n*h*f+s*c*d-n*l*d)+g*(+e*l*d-e*h*f+o*a*f-s*a*d+s*h*r-o*l*r)+m*(+e*h*u-e*c*d-o*a*u+n*a*d+o*c*r-n*h*r)+p*(-s*c*r-e*l*u+e*c*f+s*a*u-n*a*f+n*l*r)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8],u=t[9],f=t[10],d=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=u*m*h-g*f*h+g*l*d-c*m*d-u*l*p+c*f*p,M=v*f*h-r*m*h-v*l*d+a*m*d+r*l*p-a*f*p,y=r*g*h-v*u*h+v*c*d-a*g*d-r*c*p+a*u*p,R=v*u*l-r*g*l-v*c*f+a*g*f+r*c*m-a*u*m,U=e*_+n*M+s*y+o*R;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return t[0]=_*D,t[1]=(g*f*o-u*m*o-g*s*d+n*m*d+u*s*p-n*f*p)*D,t[2]=(c*m*o-g*l*o+g*s*h-n*m*h-c*s*p+n*l*p)*D,t[3]=(u*l*o-c*f*o-u*s*h+n*f*h+c*s*d-n*l*d)*D,t[4]=M*D,t[5]=(r*m*o-v*f*o+v*s*d-e*m*d-r*s*p+e*f*p)*D,t[6]=(v*l*o-a*m*o-v*s*h+e*m*h+a*s*p-e*l*p)*D,t[7]=(a*f*o-r*l*o+r*s*h-e*f*h-a*s*d+e*l*d)*D,t[8]=y*D,t[9]=(v*u*o-r*g*o-v*n*d+e*g*d+r*n*p-e*u*p)*D,t[10]=(a*g*o-v*c*o+v*n*h-e*g*h-a*n*p+e*c*p)*D,t[11]=(r*c*o-a*u*o-r*n*h+e*u*h+a*n*d-e*c*d)*D,t[12]=R*D,t[13]=(r*g*s-v*u*s+v*n*f-e*g*f-r*n*m+e*u*m)*D,t[14]=(v*c*s-a*g*s-v*n*l+e*g*l+a*n*m-e*c*m)*D,t[15]=(a*u*s-r*c*s+r*n*l-e*u*l-a*n*f+e*c*f)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,c=t.y,l=t.z,h=o*a,r=o*c;return this.set(h*a+n,h*c-s*l,h*l+s*c,0,h*c+s*l,r*c+n,r*l-s*a,0,h*l-s*c,r*l+s*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,c=e._z,l=e._w,h=o+o,r=a+a,u=c+c,f=o*h,d=o*r,v=o*u,g=a*r,m=a*u,p=c*u,_=l*h,M=l*r,y=l*u,R=n.x,U=n.y,D=n.z;return s[0]=(1-(g+p))*R,s[1]=(d+y)*R,s[2]=(v-M)*R,s[3]=0,s[4]=(d-y)*U,s[5]=(1-(f+p))*U,s[6]=(m+_)*U,s[7]=0,s[8]=(v+M)*D,s[9]=(m-_)*D,s[10]=(1-(f+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=so.set(s[0],s[1],s[2]).length();const a=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Ji.copy(this);const h=1/o,r=1/a,u=1/c;return Ji.elements[0]*=h,Ji.elements[1]*=h,Ji.elements[2]*=h,Ji.elements[4]*=r,Ji.elements[5]*=r,Ji.elements[6]*=r,Ji.elements[8]*=u,Ji.elements[9]*=u,Ji.elements[10]*=u,e.setFromRotationMatrix(Ji),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,o,a,c=Hs){const l=this.elements,h=2*o/(e-t),r=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(c===Hs)d=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(c===rl)d=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=r,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,a,c=Hs){const l=this.elements,h=1/(e-t),r=1/(n-s),u=1/(a-o),f=(e+t)*h,d=(n+s)*r;let v,g;if(c===Hs)v=(a+o)*u,g=-2*u;else if(c===rl)v=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*r,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const so=new L,Ji=new Ge,bg=new L(0,0,0),Sg=new L(1,1,1),Qs=new L,rc=new L,Ri=new L,Df=new Ge,If=new ni;class Ci{constructor(t=0,e=0,n=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],r=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-r,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-r,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-Vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-r,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return If.setFromEuler(this),this.setFromQuaternion(If,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wg=0;const Uf=new L,ro=new ni,Ls=new Ge,oc=new L,ia=new L,Tg=new L,Eg=new ni,Ff=new L(1,0,0),Nf=new L(0,1,0),zf=new L(0,0,1),Of={type:"added"},Ag={type:"removed"},oo={type:"childadded",child:null},Yl={type:"childremoved",child:null};class Mn extends jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new L,e=new Ci,n=new ni,s=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Be}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,e){return ro.setFromAxisAngle(t,e),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Nf,t)}rotateZ(t){return this.rotateOnAxis(zf,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Nf,t)}translateZ(t){return this.translateOnAxis(zf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oc.copy(t):oc.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(ia,oc,this.up):Ls.lookAt(oc,ia,this.up),this.quaternion.setFromRotationMatrix(Ls),s&&(Ls.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(Ls),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Of),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Of),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,r=l.length;h<r;h++){const u=l[h];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];s.animations.push(o(t.animations,l))}}if(e){const c=a(t.geometries),l=a(t.materials),h=a(t.textures),r=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),r.length>0&&(n.images=r),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(c){const l=[];for(const h in c){const r=c[h];delete r.metadata,l.push(r)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Mn.DEFAULT_UP=new L(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new L,Ds=new L,Kl=new L,Is=new L,ao=new L,co=new L,Bf=new L,$l=new L,jl=new L,Zl=new L,Jl=new en,Ql=new en,th=new en;class Xi{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qi.subVectors(t,e),s.cross(Qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Qi.subVectors(s,e),Ds.subVectors(n,e),Kl.subVectors(t,e);const a=Qi.dot(Qi),c=Qi.dot(Ds),l=Qi.dot(Kl),h=Ds.dot(Ds),r=Ds.dot(Kl),u=a*h-c*c;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(h*l-c*r)*f,v=(a*r-c*l)*f;return o.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Is)===null?!1:Is.x>=0&&Is.y>=0&&Is.x+Is.y<=1}static getInterpolation(t,e,n,s,o,a,c,l){return this.getBarycoord(t,e,n,s,Is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Is.x),l.addScaledVector(a,Is.y),l.addScaledVector(c,Is.z),l)}static getInterpolatedAttribute(t,e,n,s,o,a){return Jl.setScalar(0),Ql.setScalar(0),th.setScalar(0),Jl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),th.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jl,o.x),a.addScaledVector(Ql,o.y),a.addScaledVector(th,o.z),a}static isFrontFacing(t,e,n,s){return Qi.subVectors(n,e),Ds.subVectors(t,e),Qi.cross(Ds).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Qi.cross(Ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Xi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,c;ao.subVectors(s,n),co.subVectors(o,n),$l.subVectors(t,n);const l=ao.dot($l),h=co.dot($l);if(l<=0&&h<=0)return e.copy(n);jl.subVectors(t,s);const r=ao.dot(jl),u=co.dot(jl);if(r>=0&&u<=r)return e.copy(s);const f=l*u-r*h;if(f<=0&&l>=0&&r<=0)return a=l/(l-r),e.copy(n).addScaledVector(ao,a);Zl.subVectors(t,o);const d=ao.dot(Zl),v=co.dot(Zl);if(v>=0&&d<=v)return e.copy(o);const g=d*h-l*v;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),e.copy(n).addScaledVector(co,c);const m=r*v-d*u;if(m<=0&&u-r>=0&&d-v>=0)return Bf.subVectors(o,s),c=(u-r)/(u-r+(d-v)),e.copy(s).addScaledVector(Bf,c);const p=1/(m+g+f);return a=g*p,c=f*p,e.copy(n).addScaledVector(ao,a).addScaledVector(co,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},ac={h:0,s:0,l:0};function eh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Je.workingColorSpace){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Je.workingColorSpace){if(t=qu(t,1),e=Vn(e,0,1),n=Vn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=eh(a,o,t+1/3),this.g=eh(a,o,t),this.b=eh(a,o,t-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(t,e=In){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=In){const n=Qd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}copyLinearToSRGB(t){return this.r=Co(t.r),this.g=Co(t.g),this.b=Co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return Je.fromWorkingColorSpace(ri.copy(this),t),Math.round(Vn(ri.r*255,0,255))*65536+Math.round(Vn(ri.g*255,0,255))*256+Math.round(Vn(ri.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(ri.copy(this),e);const n=ri.r,s=ri.g,o=ri.b,a=Math.max(n,s,o),c=Math.min(n,s,o);let l,h;const r=(c+a)/2;if(c===a)l=0,h=0;else{const u=a-c;switch(h=r<=.5?u/(a+c):u/(2-a-c),a){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=r,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=In){Je.fromWorkingColorSpace(ri.copy(this),t);const e=ri.r,n=ri.g,s=ri.b;return t!==In?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(ac);const n=Aa(tr.h,ac.h,e),s=Aa(tr.s,ac.s,e),o=Aa(tr.l,ac.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ri=new Xt;Xt.NAMES=Qd;let Cg=0;class $r extends jo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=ws(),this.name="",this.blending=Eo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=sl,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==Ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zh&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $e extends $r{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zn=new L,cc=new qt;class Nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cc.fromBufferAttribute(this,e),cc.applyMatrix3(t),this.setXY(e,cc.x,cc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix3(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),o=un(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mu&&(t.usage=this.usage),t}}class tp extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ep extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rg=0;const zi=new Ge,nh=new Mn,lo=new L,Pi=new Kr,sa=new Kr,Yn=new L;class nn extends jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?ep:tp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Be().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zi.makeRotationFromQuaternion(t),this.applyMatrix4(zi),this}rotateX(t){return zi.makeRotationX(t),this.applyMatrix4(zi),this}rotateY(t){return zi.makeRotationY(t),this.applyMatrix4(zi),this}rotateZ(t){return zi.makeRotationZ(t),this.applyMatrix4(zi),this}translate(t,e,n){return zi.makeTranslation(t,e,n),this.applyMatrix4(zi),this}scale(t,e,n){return zi.makeScale(t,e,n),this.applyMatrix4(zi),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const c=e[o];sa.setFromBufferAttribute(c),this.morphTargetsRelative?(Yn.addVectors(Pi.min,sa.min),Pi.expandByPoint(Yn),Yn.addVectors(Pi.max,sa.max),Pi.expandByPoint(Yn)):(Pi.expandByPoint(sa.min),Pi.expandByPoint(sa.max))}Pi.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)Yn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Yn));if(e)for(let o=0,a=e.length;o<a;o++){const c=e[o],l=this.morphTargetsRelative;for(let h=0,r=c.count;h<r;h++)Yn.fromBufferAttribute(c,h),l&&(lo.fromBufferAttribute(t,h),Yn.add(lo)),s=Math.max(s,n.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let N=0;N<n.count;N++)c[N]=new L,l[N]=new L;const h=new L,r=new L,u=new L,f=new qt,d=new qt,v=new qt,g=new L,m=new L;function p(N,P,x){h.fromBufferAttribute(n,N),r.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),f.fromBufferAttribute(o,N),d.fromBufferAttribute(o,P),v.fromBufferAttribute(o,x),r.sub(h),u.sub(h),d.sub(f),v.sub(f);const z=1/(d.x*v.y-v.x*d.y);isFinite(z)&&(g.copy(r).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(z),m.copy(u).multiplyScalar(d.x).addScaledVector(r,-v.x).multiplyScalar(z),c[N].add(g),c[P].add(g),c[x].add(g),l[N].add(m),l[P].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let N=0,P=_.length;N<P;++N){const x=_[N],z=x.start,B=x.count;for(let et=z,vt=z+B;et<vt;et+=3)p(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const M=new L,y=new L,R=new L,U=new L;function D(N){R.fromBufferAttribute(s,N),U.copy(R);const P=c[N];M.copy(P),M.sub(R.multiplyScalar(R.dot(P))).normalize(),y.crossVectors(U,P);const z=y.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,z)}for(let N=0,P=_.length;N<P;++N){const x=_[N],z=x.start,B=x.count;for(let et=z,vt=z+B;et<vt;et+=3)D(t.getX(et+0)),D(t.getX(et+1)),D(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,r=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),c.add(r),l.add(r),h.add(r),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),n.setXYZ(f+0,r.x,r.y,r.z),n.setXYZ(f+1,r.x,r.y,r.z),n.setXYZ(f+2,r.x,r.y,r.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Yn.fromBufferAttribute(t,e),Yn.normalize(),t.setXYZ(e,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function t(c,l){const h=c.array,r=c.itemSize,u=c.normalized,f=new h.constructor(l.length*r);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){c.isInterleavedBufferAttribute?d=l[g]*c.data.stride+c.offset:d=l[g]*r;for(let p=0;p<r;p++)f[v++]=h[d++]}return new Nn(f,r,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,s=this.attributes;for(const c in s){const l=s[c],h=t(l,n);e.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const l=[],h=o[c];for(let r=0,u=h.length;r<u;r++){const f=h[r],d=t(f,n);l.push(d)}e.morphAttributes[c]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],r=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];r.push(d.toJSON(t.data))}r.length>0&&(s[l]=r,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const r=s[h];this.setAttribute(h,r.clone(e))}const o=t.morphAttributes;for(const h in o){const r=[],u=o[h];for(let f=0,d=u.length;f<d;f++)r.push(u[f].clone(e));this.morphAttributes[h]=r}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,r=a.length;h<r;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Ge,Mr=new Zd,lc=new Zo,Hf=new L,hc=new L,uc=new L,fc=new L,ih=new L,dc=new L,Gf=new L,pc=new L;class be extends Mn{constructor(t=new nn,e=new $e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const c=this.morphTargetInfluences;if(o&&c){dc.set(0,0,0);for(let l=0,h=o.length;l<h;l++){const r=c[l],u=o[l];r!==0&&(ih.fromBufferAttribute(u,t),a?dc.addScaledVector(ih,r):dc.addScaledVector(ih.sub(e),r))}e.add(dc)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(o),Mr.copy(t.ray).recast(t.near),!(lc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(lc,Hf)===null||Mr.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(kf.copy(o).invert(),Mr.copy(t.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,c=o.index,l=o.attributes.position,h=o.attributes.uv,r=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(c!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,R=M;y<R;y+=3){const U=c.getX(y),D=c.getX(y+1),N=c.getX(y+2);s=mc(this,p,t,n,h,r,u,U,D,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const _=c.getX(m),M=c.getX(m+1),y=c.getX(m+2);s=mc(this,a,t,n,h,r,u,_,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,R=M;y<R;y+=3){const U=y,D=y+1,N=y+2;s=mc(this,p,t,n,h,r,u,U,D,N),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const _=m,M=m+1,y=m+2;s=mc(this,a,t,n,h,r,u,_,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pg(i,t,e,n,s,o,a,c){let l;if(t.side===Zn?l=n.intersectTriangle(a,o,s,!0,c):l=n.intersectTriangle(s,o,a,t.side===Ts,c),l===null)return null;pc.copy(c),pc.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(pc);return h<e.near||h>e.far?null:{distance:h,point:pc.clone(),object:i}}function mc(i,t,e,n,s,o,a,c,l,h){i.getVertexPosition(c,hc),i.getVertexPosition(l,uc),i.getVertexPosition(h,fc);const r=Pg(i,t,e,n,hc,uc,fc,Gf);if(r){const u=new L;Xi.getBarycoord(Gf,hc,uc,fc,u),s&&(r.uv=Xi.getInterpolatedAttribute(s,c,l,h,u,new qt)),o&&(r.uv1=Xi.getInterpolatedAttribute(o,c,l,h,u,new qt)),a&&(r.normal=Xi.getInterpolatedAttribute(a,c,l,h,u,new L),r.normal.dot(n.direction)>0&&r.normal.multiplyScalar(-1));const f={a:c,b:l,c:h,normal:new L,materialIndex:0};Xi.getNormal(hc,uc,fc,f.normal),r.face=f,r.barycoord=u}return r}class an extends nn{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const c=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],h=[],r=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,a,o,0),v("z","y","x",1,-1,n,e,-t,a,o,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,o,4),v("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(u,2));function v(g,m,p,_,M,y,R,U,D,N,P){const x=y/D,z=R/N,B=y/2,et=R/2,vt=U/2,wt=D+1,pt=N+1;let Lt=0,tt=0;const Ht=new L;for(let se=0;se<pt;se++){const ue=se*z-et;for(let ae=0;ae<wt;ae++){const mt=ae*x-B;Ht[g]=mt*_,Ht[m]=ue*M,Ht[p]=vt,h.push(Ht.x,Ht.y,Ht.z),Ht[g]=0,Ht[m]=0,Ht[p]=U>0?1:-1,r.push(Ht.x,Ht.y,Ht.z),u.push(ae/D),u.push(1-se/N),Lt+=1}}for(let se=0;se<N;se++)for(let ue=0;ue<D;ue++){const ae=f+ue+wt*se,mt=f+ue+wt*(se+1),X=f+(ue+1)+wt*(se+1),W=f+(ue+1)+wt*se;l.push(ae,mt,W),l.push(mt,X,W),tt+=6}c.addGroup(d,tt,P),d+=tt,f+=Lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ho(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xi(i){const t={};for(let e=0;e<i.length;e++){const n=Ho(i[e]);for(const s in n)t[s]=n[s]}return t}function Lg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function np(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}const us={clone:Ho,merge:xi};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends $r{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=Lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ip extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Hs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new L,Vf=new qt,Wf=new qt;class li extends ip{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Wf),e.subVectors(Wf,Vf)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ho=-90,uo=1;class sp extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new li(ho,uo,t,e);s.layers=this.layers,this.add(s);const o=new li(ho,uo,t,e);o.layers=this.layers,this.add(o);const a=new li(ho,uo,t,e);a.layers=this.layers,this.add(a);const c=new li(ho,uo,t,e);c.layers=this.layers,this.add(c);const l=new li(ho,uo,t,e);l.layers=this.layers,this.add(l);const h=new li(ho,uo,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,c,l]=e;for(const h of e)this.remove(h);if(t===Hs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,l,h,r]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,c),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,r),t.setRenderTarget(u,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class rp extends hi{constructor(t,e,n,s,o,a,c,l,h,r){t=t!==void 0?t:[],e=e!==void 0?e:No,super(t,e,n,s,o,a,c,l,h,r),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class op extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new an(5,5,5),o=new Ze({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Vs});o.uniforms.tEquirect.value=e;const a=new be(s,o),c=e.minFilter;return e.minFilter===Nr&&(e.minFilter=Yi),new sp(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}const sh=new L,Ug=new L,Fg=new Be;class ar{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sh.subVectors(n,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fg.getNormalMatrix(t),s=this.coplanarPoint(sh).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Zo,gc=new L;class Yu{constructor(t=new ar,e=new ar,n=new ar,s=new ar,o=new ar,a=new ar){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hs){const n=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],r=s[5],u=s[6],f=s[7],d=s[8],v=s[9],g=s[10],m=s[11],p=s[12],_=s[13],M=s[14],y=s[15];if(n[0].setComponents(l-o,f-h,m-d,y-p).normalize(),n[1].setComponents(l+o,f+h,m+d,y+p).normalize(),n[2].setComponents(l+a,f+r,m+v,y+_).normalize(),n[3].setComponents(l-a,f-r,m-v,y-_).normalize(),n[4].setComponents(l-c,f-u,m-g,y-M).normalize(),e===Hs)n[5].setComponents(l+c,f+u,m+g,y+M).normalize();else if(e===rl)n[5].setComponents(c,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(gc.x=s.normal.x>0?t.max.x:t.min.x,gc.y=s.normal.y>0?t.max.y:t.min.y,gc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ng(i){const t=new WeakMap;function e(c,l){const h=c.array,r=c.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,h,r),c.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:u}}function n(c,l,h){const r=l.array,u=l.updateRanges;if(i.bindBuffer(h,c),u.length===0)i.bufferSubData(h,0,r);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],g=u[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const g=u[d];i.bufferSubData(h,g.start*r.BYTES_PER_ELEMENT,r,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=t.get(c);l&&(i.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const r=t.get(c);(!r||r.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=t.get(c);if(h===void 0)t.set(c,e(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,l),h.version=c.version}}return{get:s,remove:o,update:a}}class yn extends nn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,c=Math.floor(n),l=Math.floor(s),h=c+1,r=l+1,u=t/c,f=e/l,d=[],v=[],g=[],m=[];for(let p=0;p<r;p++){const _=p*f-a;for(let M=0;M<h;M++){const y=M*u-o;v.push(y,-_,0),g.push(0,0,1),m.push(M/c),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<c;_++){const M=_+h*p,y=_+h*(p+1),R=_+1+h*(p+1),U=_+1+h*p;d.push(M,y,U),d.push(y,R,U)}this.setIndex(d),this.setAttribute("position",new Ee(v,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.widthSegments,t.heightSegments)}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Og=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ex=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ax=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,px=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:zg,alphahash_pars_fragment:Og,alphamap_fragment:Bg,alphamap_pars_fragment:kg,alphatest_fragment:Hg,alphatest_pars_fragment:Gg,aomap_fragment:Vg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:jg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:t1,clipping_planes_vertex:e1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:s1,color_vertex:r1,common:o1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:c1,displacementmap_pars_vertex:l1,displacementmap_vertex:h1,emissivemap_fragment:u1,emissivemap_pars_fragment:f1,colorspace_fragment:d1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:v1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:M1,fog_fragment:b1,fog_pars_fragment:S1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:T1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:A1,lights_pars_begin:C1,lights_toon_fragment:P1,lights_toon_pars_fragment:L1,lights_phong_fragment:D1,lights_phong_pars_fragment:I1,lights_physical_fragment:U1,lights_physical_pars_fragment:F1,lights_fragment_begin:N1,lights_fragment_maps:z1,lights_fragment_end:O1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:G1,map_fragment:V1,map_pars_fragment:W1,map_particle_fragment:X1,map_particle_pars_fragment:q1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:K1,morphinstance_vertex:$1,morphcolor_vertex:j1,morphnormal_vertex:Z1,morphtarget_pars_vertex:J1,morphtarget_vertex:Q1,normal_fragment_begin:tv,normal_fragment_maps:ev,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:sv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:cv,iridescence_pars_fragment:lv,opaque_fragment:hv,packing:uv,premultiplied_alpha_fragment:fv,project_vertex:dv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:vv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:_v,shadowmap_vertex:yv,shadowmask_pars_fragment:Mv,skinbase_vertex:bv,skinning_pars_vertex:Sv,skinning_vertex:wv,skinnormal_vertex:Tv,specularmap_fragment:Ev,specularmap_pars_fragment:Av,tonemapping_fragment:Cv,tonemapping_pars_fragment:Rv,transmission_fragment:Pv,transmission_pars_fragment:Lv,uv_pars_fragment:Dv,uv_pars_vertex:Iv,uv_vertex:Uv,worldpos_vertex:Fv,background_vert:Nv,background_frag:zv,backgroundCube_vert:Ov,backgroundCube_frag:Bv,cube_vert:kv,cube_frag:Hv,depth_vert:Gv,depth_frag:Vv,distanceRGBA_vert:Wv,distanceRGBA_frag:Xv,equirect_vert:qv,equirect_frag:Yv,linedashed_vert:Kv,linedashed_frag:$v,meshbasic_vert:jv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:Qv,meshmatcap_vert:tx,meshmatcap_frag:ex,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:cx,meshtoon_frag:lx,points_vert:hx,points_frag:ux,shadow_vert:fx,shadow_frag:dx,sprite_vert:px,sprite_frag:mx},de={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ys={basic:{uniforms:xi([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:xi([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:xi([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:xi([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:xi([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Xt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:xi([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:xi([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:xi([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:xi([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:xi([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:xi([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:xi([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:xi([de.lights,de.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ys.physical={uniforms:xi([ys.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const vc={r:0,b:0,g:0},Sr=new Ci,gx=new Ge;function vx(i,t,e,n,s,o,a){const c=new Xt(0);let l=o===!0?0:1,h,r,u=null,f=0,d=null;function v(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function g(_){let M=!1;const y=v(_);y===null?p(c,l):y&&y.isColor&&(p(y,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){const y=v(M);y&&(y.isCubeTexture||y.mapping===wl)?(r===void 0&&(r=new be(new an(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ho(ys.backgroundCube.uniforms),vertexShader:ys.backgroundCube.vertexShader,fragmentShader:ys.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),r.geometry.deleteAttribute("uv"),r.onBeforeRender=function(R,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(r.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(r)),Sr.copy(M.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),r.material.uniforms.envMap.value=y,r.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,r.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,r.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,r.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(Sr)),r.material.toneMapped=Je.getTransfer(y.colorSpace)!==dn,(u!==y||f!==y.version||d!==i.toneMapping)&&(r.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),r.layers.enableAll(),_.unshift(r,r.geometry,r.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new be(new yn(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ho(ys.background.uniforms),vertexShader:ys.background.vertexShader,fragmentShader:ys.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Je.getTransfer(y.colorSpace)!==dn,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function p(_,M){_.getRGB(vc,np(i)),n.buffers.color.setClear(vc.r,vc.g,vc.b,M,a)}return{getClearColor:function(){return c},setClearColor:function(_,M=1){c.set(_),l=M,p(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(c,l)},render:g,addToRenderList:m}}function xx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,a=!1;function c(x,z,B,et,vt){let wt=!1;const pt=u(et,B,z);o!==pt&&(o=pt,h(o.object)),wt=d(x,et,B,vt),wt&&v(x,et,B,vt),vt!==null&&t.update(vt,i.ELEMENT_ARRAY_BUFFER),(wt||a)&&(a=!1,y(x,z,B,et),vt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function r(x){return i.deleteVertexArray(x)}function u(x,z,B){const et=B.wireframe===!0;let vt=n[x.id];vt===void 0&&(vt={},n[x.id]=vt);let wt=vt[z.id];wt===void 0&&(wt={},vt[z.id]=wt);let pt=wt[et];return pt===void 0&&(pt=f(l()),wt[et]=pt),pt}function f(x){const z=[],B=[],et=[];for(let vt=0;vt<e;vt++)z[vt]=0,B[vt]=0,et[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:et,object:x,attributes:{},index:null}}function d(x,z,B,et){const vt=o.attributes,wt=z.attributes;let pt=0;const Lt=B.getAttributes();for(const tt in Lt)if(Lt[tt].location>=0){const se=vt[tt];let ue=wt[tt];if(ue===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;pt++}return o.attributesNum!==pt||o.index!==et}function v(x,z,B,et){const vt={},wt=z.attributes;let pt=0;const Lt=B.getAttributes();for(const tt in Lt)if(Lt[tt].location>=0){let se=wt[tt];se===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(se=x.instanceColor));const ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),vt[tt]=ue,pt++}o.attributes=vt,o.attributesNum=pt,o.index=et}function g(){const x=o.newAttributes;for(let z=0,B=x.length;z<B;z++)x[z]=0}function m(x){p(x,0)}function p(x,z){const B=o.newAttributes,et=o.enabledAttributes,vt=o.attributeDivisors;B[x]=1,et[x]===0&&(i.enableVertexAttribArray(x),et[x]=1),vt[x]!==z&&(i.vertexAttribDivisor(x,z),vt[x]=z)}function _(){const x=o.newAttributes,z=o.enabledAttributes;for(let B=0,et=z.length;B<et;B++)z[B]!==x[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function M(x,z,B,et,vt,wt,pt){pt===!0?i.vertexAttribIPointer(x,z,B,vt,wt):i.vertexAttribPointer(x,z,B,et,vt,wt)}function y(x,z,B,et){g();const vt=et.attributes,wt=B.getAttributes(),pt=z.defaultAttributeValues;for(const Lt in wt){const tt=wt[Lt];if(tt.location>=0){let Ht=vt[Lt];if(Ht===void 0&&(Lt==="instanceMatrix"&&x.instanceMatrix&&(Ht=x.instanceMatrix),Lt==="instanceColor"&&x.instanceColor&&(Ht=x.instanceColor)),Ht!==void 0){const se=Ht.normalized,ue=Ht.itemSize,ae=t.get(Ht);if(ae===void 0)continue;const mt=ae.buffer,X=ae.type,W=ae.bytesPerElement,Dt=X===i.INT||X===i.UNSIGNED_INT||Ht.gpuType===Bu;if(Ht.isInterleavedBufferAttribute){const yt=Ht.data,Ot=yt.stride,Nt=Ht.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<tt.locationSize;jt++)p(tt.location+jt,yt.meshPerAttribute);x.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<tt.locationSize;jt++)m(tt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let jt=0;jt<tt.locationSize;jt++)M(tt.location+jt,ue/tt.locationSize,X,se,Ot*W,(Nt+ue/tt.locationSize*jt)*W,Dt)}else{if(Ht.isInstancedBufferAttribute){for(let yt=0;yt<tt.locationSize;yt++)p(tt.location+yt,Ht.meshPerAttribute);x.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let yt=0;yt<tt.locationSize;yt++)m(tt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let yt=0;yt<tt.locationSize;yt++)M(tt.location+yt,ue/tt.locationSize,X,se,ue*W,ue/tt.locationSize*yt*W,Dt)}}else if(pt!==void 0){const se=pt[Lt];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(tt.location,se);break;case 3:i.vertexAttrib3fv(tt.location,se);break;case 4:i.vertexAttrib4fv(tt.location,se);break;default:i.vertexAttrib1fv(tt.location,se)}}}}_()}function R(){N();for(const x in n){const z=n[x];for(const B in z){const et=z[B];for(const vt in et)r(et[vt].object),delete et[vt];delete z[B]}delete n[x]}}function U(x){if(n[x.id]===void 0)return;const z=n[x.id];for(const B in z){const et=z[B];for(const vt in et)r(et[vt].object),delete et[vt];delete z[B]}delete n[x.id]}function D(x){for(const z in n){const B=n[z];if(B[x.id]===void 0)continue;const et=B[x.id];for(const vt in et)r(et[vt].object),delete et[vt];delete B[x.id]}}function N(){P(),a=!0,o!==s&&(o=s,h(o.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function _x(i,t,e){let n;function s(h){n=h}function o(h,r){i.drawArrays(n,h,r),e.update(r,n,1)}function a(h,r,u){u!==0&&(i.drawArraysInstanced(n,h,r,u),e.update(r,n,u))}function c(h,r,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,r,0,u);let d=0;for(let v=0;v<u;v++)d+=r[v];e.update(d,n,1)}function l(h,r,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)a(h[v],r[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,r,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=r[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function yx(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Di&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(D){const N=D===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==$s&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Ss&&!N)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const r=l(h);r!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",r,"instead."),h=r);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:U}}function Mx(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new ar,c=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,r(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=r(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||o&&!m)o?r(null):h();else{const _=o?0:n,M=_*4;let y=p.clippingState||null;l.value=y,y=r(v,f,M,d);for(let R=0;R!==M;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function r(u,f,d,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,_=f.matrixWorldInverse;c.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==g;++M,y+=4)a.copy(u[M]).applyMatrix4(_,c),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function bx(i){let t=new WeakMap;function e(a,c){return c===Xh?a.mapping=No:c===qh&&(a.mapping=zo),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===Xh||c===qh)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new op(l.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ku extends ip{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,c=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,r=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,c-=r*this.view.offsetY,l=c-r*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mo=4,Xf=[.125,.215,.35,.446,.526,.582],Dr=20,rh=new Ku,qf=new Xt;let oh=null,ah=0,ch=0,lh=!1;const Cr=(1+Math.sqrt(5))/2,fo=1/Cr,Yf=[new L(-Cr,fo,0),new L(Cr,fo,0),new L(-fo,0,Cr),new L(fo,0,Cr),new L(0,Cr,-fo),new L(0,Cr,fo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Xr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,ah,ch),this._renderer.xr.enabled=lh,t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===No||t.mapping===zo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:Ki,format:Di,colorSpace:$o,depthBuffer:!1},s=Kf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(o)),this._blurMaterial=wx(o,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,rh)}_sceneToCubeUV(t,e,n,s){const c=new li(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],r=this._renderer,u=r.autoClear,f=r.toneMapping;r.getClearColor(qf),r.toneMapping=Ws,r.autoClear=!1;const d=new $e({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),v=new be(new an,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(qf),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(c.up.set(0,l[p],0),c.lookAt(h[p],0,0)):_===1?(c.up.set(0,0,l[p]),c.lookAt(0,h[p],0)):(c.up.set(0,l[p],0),c.lookAt(0,0,h[p]));const M=this._cubeSize;xc(s,_*M,p>2?M:0,M,M),r.setRenderTarget(s),g&&r.render(v,c),r.render(t,c)}v.geometry.dispose(),v.material.dispose(),r.toneMapping=f,r.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===No||t.mapping===zo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const l=this._cubeSize;xc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,rh)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Yf[(s-o-1)%Yf.length];this._blur(t,o-1,o,a,c)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,c){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const r=3,u=new be(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Dr-1),g=o/v,m=isFinite(o)?1+Math.floor(r*g):Dr;m>Dr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const p=[];let _=0;for(let D=0;D<Dr;++D){const N=D/g,P=Math.exp(-N*N/2);p.push(P),D===0?_+=P:D<m&&(_+=2*P)}for(let D=0;D<p.length;D++)p[D]=p[D]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",c&&(f.poleAxis.value=c);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const y=this._sizeLods[s],R=3*y*(s>M-Mo?s-M+Mo:0),U=4*(this._cubeSize-y);xc(e,R,U,3*y,2*y),l.setRenderTarget(e),l.render(u,rh)}}function Sx(i){const t=[],e=[],n=[];let s=i;const o=i-Mo+1+Xf.length;for(let a=0;a<o;a++){const c=Math.pow(2,s);e.push(c);let l=1/c;a>i-Mo?l=Xf[a-i+Mo-1]:a===0&&(l=0),n.push(l);const h=1/(c-2),r=-h,u=1+h,f=[r,r,u,r,u,u,r,r,u,u,r,u],d=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*d),M=new Float32Array(m*v*d),y=new Float32Array(p*v*d);for(let U=0;U<d;U++){const D=U%3*2/3-1,N=U>2?0:-1,P=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];_.set(P,g*v*U),M.set(f,m*v*U);const x=[U,U,U,U,U,U];y.set(x,p*v*U)}const R=new nn;R.setAttribute("position",new Nn(_,g)),R.setAttribute("uv",new Nn(M,m)),R.setAttribute("faceIndex",new Nn(y,p)),t.push(R),s>Mo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kf(i,t,e){const n=new Fi(i,t,e);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wx(i,t,e){const n=new Float32Array(Dr),s=new L(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function $f(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function jf(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tx(i){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const l=c.mapping,h=l===Xh||l===qh,r=l===No||l===zo;if(h||r){let u=t.get(c);const f=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return e===null&&(e=new Xr(i)),u=h?e.fromEquirectangular(c,u):e.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),u.texture;if(u!==void 0)return u.texture;{const d=c.image;return h&&d&&d.height>0||r&&d&&s(d)?(e===null&&(e=new Xr(i)),u=h?e.fromEquirectangular(c):e.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),c.addEventListener("dispose",o),u.texture):null}}}return c}function s(c){let l=0;const h=6;for(let r=0;r<h;r++)c[r]!==void 0&&l++;return l===h}function o(c){const l=c.target;l.removeEventListener("dispose",o);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ex(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,t,e,n){const s={},o=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,v=u.attributes.position;let g=0;if(d!==null){const _=d.array;g=d.version;for(let M=0,y=_.length;M<y;M+=3){const R=_[M+0],U=_[M+1],D=_[M+2];f.push(R,U,U,D,D,R)}}else if(v!==void 0){const _=v.array;g=v.version;for(let M=0,y=_.length/3-1;M<y;M+=3){const R=M+0,U=M+1,D=M+2;f.push(R,U,U,D,D,R)}}else return;const m=new(Kd(f)?ep:tp)(f,1);m.version=g;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function r(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return o.get(u)}return{get:c,update:l,getWireframeAttribute:r}}function Cx(i,t,e){let n;function s(f){n=f}let o,a;function c(f){o=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*a),e.update(d,n,1)}function h(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,o,f*a,v),e.update(d,n,v))}function r(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function u(f,d,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,g,0,v);let p=0;for(let _=0;_<v;_++)p+=d[_]*g[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=r,this.renderMultiDrawInstances=u}function Rx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,c){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=c*(o/3);break;case i.LINES:e.lines+=c*(o/2);break;case i.LINE_STRIP:e.lines+=c*(o-1);break;case i.LINE_LOOP:e.lines+=c*o;break;case i.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,t,e){const n=new WeakMap,s=new en;function o(a,c,l){const h=a.morphTargetInfluences,r=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,u=r!==void 0?r.length:0;let f=n.get(c);if(f===void 0||f.count!==u){let x=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const v=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let R=c.attributes.position.count*y,U=1;R>t.maxTextureSize&&(U=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const D=new Float32Array(R*U*4*u),N=new jd(D,R,U,u);N.type=Ss,N.needsUpdate=!0;const P=y*4;for(let z=0;z<u;z++){const B=p[z],et=_[z],vt=M[z],wt=R*U*4*z;for(let pt=0;pt<B.count;pt++){const Lt=pt*P;v===!0&&(s.fromBufferAttribute(B,pt),D[wt+Lt+0]=s.x,D[wt+Lt+1]=s.y,D[wt+Lt+2]=s.z,D[wt+Lt+3]=0),g===!0&&(s.fromBufferAttribute(et,pt),D[wt+Lt+4]=s.x,D[wt+Lt+5]=s.y,D[wt+Lt+6]=s.z,D[wt+Lt+7]=0),m===!0&&(s.fromBufferAttribute(vt,pt),D[wt+Lt+8]=s.x,D[wt+Lt+9]=s.y,D[wt+Lt+10]=s.z,D[wt+Lt+11]=vt.itemSize===4?s.w:1)}}f={count:u,texture:N,size:new qt(R,U)},n.set(c,f),c.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<h.length;m++)v+=h[m];const g=c.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Lx(i,t,e,n){let s=new WeakMap;function o(l){const h=n.render.frame,r=l.geometry,u=t.get(l,r);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class cp extends hi{constructor(t,e,n,s,o,a,c,l,h,r=Ao){if(r!==Ao&&r!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&r===Ao&&(n=Wr),n===void 0&&r===Bo&&(n=Oo),super(null,s,o,a,c,l,r,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:bi,this.minFilter=l!==void 0?l:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lp=new hi,Zf=new cp(1,1),hp=new jd,up=new yg,fp=new rp,Jf=[],Qf=[],t0=new Float32Array(16),e0=new Float32Array(9),n0=new Float32Array(4);function Jo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Jf[s];if(o===void 0&&(o=new Float32Array(s),Jf[s]=o),t!==0){n.toArray(o,0);for(let a=1,c=0;a!==t;++a)c+=e,i[a].toArray(o,c)}return o}function Wn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function El(i,t){let e=Qf[t];e===void 0&&(e=new Int32Array(t),Qf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Wn(e,t))return;i.uniform2fv(this.addr,t),Xn(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Wn(e,t))return;i.uniform3fv(this.addr,t),Xn(e,t)}}function Fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Wn(e,t))return;i.uniform4fv(this.addr,t),Xn(e,t)}}function Nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Wn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xn(e,t)}else{if(Wn(e,n))return;n0.set(n),i.uniformMatrix2fv(this.addr,!1,n0),Xn(e,n)}}function zx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Wn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xn(e,t)}else{if(Wn(e,n))return;e0.set(n),i.uniformMatrix3fv(this.addr,!1,e0),Xn(e,n)}}function Ox(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Wn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xn(e,t)}else{if(Wn(e,n))return;t0.set(n),i.uniformMatrix4fv(this.addr,!1,t0),Xn(e,n)}}function Bx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Wn(e,t))return;i.uniform2iv(this.addr,t),Xn(e,t)}}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Wn(e,t))return;i.uniform3iv(this.addr,t),Xn(e,t)}}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Wn(e,t))return;i.uniform4iv(this.addr,t),Xn(e,t)}}function Vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Wn(e,t))return;i.uniform2uiv(this.addr,t),Xn(e,t)}}function Xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Wn(e,t))return;i.uniform3uiv(this.addr,t),Xn(e,t)}}function qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Wn(e,t))return;i.uniform4uiv(this.addr,t),Xn(e,t)}}function Yx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Zf.compareFunction=Yd,o=Zf):o=lp,e.setTexture2D(t||o,s)}function Kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||up,s)}function $x(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fp,s)}function jx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hp,s)}function Zx(i){switch(i){case 5126:return Dx;case 35664:return Ix;case 35665:return Ux;case 35666:return Fx;case 35674:return Nx;case 35675:return zx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return jx}}function Jx(i,t){i.uniform1fv(this.addr,t)}function Qx(i,t){const e=Jo(t,this.size,2);i.uniform2fv(this.addr,e)}function t_(i,t){const e=Jo(t,this.size,3);i.uniform3fv(this.addr,e)}function e_(i,t){const e=Jo(t,this.size,4);i.uniform4fv(this.addr,e)}function n_(i,t){const e=Jo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i_(i,t){const e=Jo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s_(i,t){const e=Jo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function a_(i,t){i.uniform3iv(this.addr,t)}function c_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function h_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function d_(i,t,e){const n=this.cache,s=t.length,o=El(e,s);Wn(n,o)||(i.uniform1iv(this.addr,o),Xn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lp,o[a])}function p_(i,t,e){const n=this.cache,s=t.length,o=El(e,s);Wn(n,o)||(i.uniform1iv(this.addr,o),Xn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||up,o[a])}function m_(i,t,e){const n=this.cache,s=t.length,o=El(e,s);Wn(n,o)||(i.uniform1iv(this.addr,o),Xn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fp,o[a])}function g_(i,t,e){const n=this.cache,s=t.length,o=El(e,s);Wn(n,o)||(i.uniform1iv(this.addr,o),Xn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||hp,o[a])}function v_(i){switch(i){case 5126:return Jx;case 35664:return Qx;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class __{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const c=s[o];c.setValue(t,e[c.id],n)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function i0(i,t){i.seq.push(t),i.map[t.id]=t}function M_(i,t,e){const n=i.name,s=n.length;for(hh.lastIndex=0;;){const o=hh.exec(n),a=hh.lastIndex;let c=o[1];const l=o[2]==="]",h=o[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===s){i0(e,h===void 0?new x_(c,i,t):new __(c,i,t));break}else{let u=e.map[c];u===void 0&&(u=new y_(c),i0(e,u)),e=u}}}class Xc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);M_(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const c=e[o],l=n[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function s0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const b_=37297;let S_=0;function w_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const c=a+1;n.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return n.join(`
`)}const r0=new Be;function T_(i){Je._getMatrix(r0,Je.workingColorSpace,i);const t=`mat3( ${r0.elements.map(e=>e.toFixed(4))} )`;switch(Je.getTransfer(i)){case Tl:return[t,"LinearTransferOETF"];case dn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function o0(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+w_(i.getShaderSource(t),a)}else return s}function E_(i,t){const e=T_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function A_(i,t){let e;switch(t){case Dm:e="Linear";break;case Im:e="Reinhard";break;case Um:e="Cineon";break;case Fm:e="ACESFilmic";break;case zm:e="AgX";break;case Om:e="Neutral";break;case Nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _c=new L;function C_(){Je.getLuminanceCoefficients(_c);const i=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function P_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:c}}return e}function _a(i){return i!==""}function a0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(i){return i.replace(D_,U_)}const I_=new Map;function U_(i,t){let e=He[t];if(e===void 0){const n=I_.get(t);if(n!==void 0)e=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bu(e)}const F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(i){return i.replace(F_,N_)}function N_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function h0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fs&&(t="SHADOWMAP_TYPE_VSM"),t}function O_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case No:case zo:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zo:t="ENVMAP_MODE_REFRACTION";break}return t}function k_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fd:t="ENVMAP_BLENDING_MULTIPLY";break;case Pm:t="ENVMAP_BLENDING_MIX";break;case Lm:t="ENVMAP_BLENDING_ADD";break}return t}function H_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G_(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,c=e.fragmentShader;const l=z_(e),h=O_(e),r=B_(e),u=k_(e),f=H_(e),d=R_(e),v=P_(o),g=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_a).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(m=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+r:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ws?"#define TONE_MAPPING":"",e.toneMapping!==Ws?He.tonemapping_pars_fragment:"",e.toneMapping!==Ws?A_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),C_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),a=bu(a),a=a0(a,e),a=c0(a,e),c=bu(c),c=a0(c,e),c=c0(c,e),a=l0(a),c=l0(c),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+m+a,y=_+p+c,R=s0(s,s.VERTEX_SHADER,M),U=s0(s,s.FRAGMENT_SHADER,y);s.attachShader(g,R),s.attachShader(g,U),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(z){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g).trim(),et=s.getShaderInfoLog(R).trim(),vt=s.getShaderInfoLog(U).trim();let wt=!0,pt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(wt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,U);else{const Lt=o0(s,R,"vertex"),tt=o0(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+B+`
`+Lt+`
`+tt)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(et===""||vt==="")&&(pt=!1);pt&&(z.diagnostics={runnable:wt,programLog:B,vertexShader:{log:et,prefix:m},fragmentShader:{log:vt,prefix:p}})}s.deleteShader(R),s.deleteShader(U),N=new Xc(s,g),P=L_(s,g)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,b_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=U,this}let V_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new X_(t),e.set(t,n)),n}}class X_{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}}function q_(i,t,e,n,s,o,a){const c=new Jd,l=new W_,h=new Set,r=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(P){return h.add(P),P===0?"uv":`uv${P}`}function m(P,x,z,B,et){const vt=B.fog,wt=et.geometry,pt=P.isMeshStandardMaterial?B.environment:null,Lt=(P.isMeshStandardMaterial?e:t).get(P.envMap||pt),tt=Lt&&Lt.mapping===wl?Lt.image.height:null,Ht=v[P.type];P.precision!==null&&(d=s.getMaxPrecision(P.precision),d!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",d,"instead."));const se=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,ue=se!==void 0?se.length:0;let ae=0;wt.morphAttributes.position!==void 0&&(ae=1),wt.morphAttributes.normal!==void 0&&(ae=2),wt.morphAttributes.color!==void 0&&(ae=3);let mt,X,W,Dt;if(Ht){const Re=ys[Ht];mt=Re.vertexShader,X=Re.fragmentShader}else mt=P.vertexShader,X=P.fragmentShader,l.update(P),W=l.getVertexShaderID(P),Dt=l.getFragmentShaderID(P);const yt=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Nt=et.isInstancedMesh===!0,jt=et.isBatchedMesh===!0,re=!!P.map,Rt=!!P.matcap,Bt=!!Lt,O=!!P.aoMap,he=!!P.lightMap,Vt=!!P.bumpMap,ce=!!P.normalMap,ne=!!P.displacementMap,rt=!!P.emissiveMap,ft=!!P.metalnessMap,E=!!P.roughnessMap,b=P.anisotropy>0,H=P.clearcoat>0,q=P.dispersion>0,j=P.iridescence>0,G=P.sheen>0,ut=P.transmission>0,ht=b&&!!P.anisotropyMap,st=H&&!!P.clearcoatMap,_t=H&&!!P.clearcoatNormalMap,F=H&&!!P.clearcoatRoughnessMap,Y=j&&!!P.iridescenceMap,Mt=j&&!!P.iridescenceThicknessMap,At=G&&!!P.sheenColorMap,ot=G&&!!P.sheenRoughnessMap,Ut=!!P.specularMap,zt=!!P.specularColorMap,kt=!!P.specularIntensityMap,I=ut&&!!P.transmissionMap,J=ut&&!!P.thicknessMap,Q=!!P.gradientMap,gt=!!P.alphaMap,Et=P.alphaTest>0,It=!!P.alphaHash,$t=!!P.extensions;let ve=Ws;P.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Pe={shaderID:Ht,shaderType:P.type,shaderName:P.name,vertexShader:mt,fragmentShader:X,defines:P.defines,customVertexShaderID:W,customFragmentShaderID:Dt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:d,batching:jt,batchingColor:jt&&et._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&et.instanceColor!==null,instancingMorph:Nt&&et.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:$o,alphaToCoverage:!!P.alphaToCoverage,map:re,matcap:Rt,envMap:Bt,envMapMode:Bt&&Lt.mapping,envMapCubeUVHeight:tt,aoMap:O,lightMap:he,bumpMap:Vt,normalMap:ce,displacementMap:f&&ne,emissiveMap:rt,normalMapObjectSpace:ce&&P.normalMapType===Gm,normalMapTangentSpace:ce&&P.normalMapType===qd,metalnessMap:ft,roughnessMap:E,anisotropy:b,anisotropyMap:ht,clearcoat:H,clearcoatMap:st,clearcoatNormalMap:_t,clearcoatRoughnessMap:F,dispersion:q,iridescence:j,iridescenceMap:Y,iridescenceThicknessMap:Mt,sheen:G,sheenColorMap:At,sheenRoughnessMap:ot,specularMap:Ut,specularColorMap:zt,specularIntensityMap:kt,transmission:ut,transmissionMap:I,thicknessMap:J,gradientMap:Q,opaque:P.transparent===!1&&P.blending===Eo&&P.alphaToCoverage===!1,alphaMap:gt,alphaTest:Et,alphaHash:It,combine:P.combine,mapUv:re&&g(P.map.channel),aoMapUv:O&&g(P.aoMap.channel),lightMapUv:he&&g(P.lightMap.channel),bumpMapUv:Vt&&g(P.bumpMap.channel),normalMapUv:ce&&g(P.normalMap.channel),displacementMapUv:ne&&g(P.displacementMap.channel),emissiveMapUv:rt&&g(P.emissiveMap.channel),metalnessMapUv:ft&&g(P.metalnessMap.channel),roughnessMapUv:E&&g(P.roughnessMap.channel),anisotropyMapUv:ht&&g(P.anisotropyMap.channel),clearcoatMapUv:st&&g(P.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&g(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(P.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&g(P.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(P.sheenColorMap.channel),sheenRoughnessMapUv:ot&&g(P.sheenRoughnessMap.channel),specularMapUv:Ut&&g(P.specularMap.channel),specularColorMapUv:zt&&g(P.specularColorMap.channel),specularIntensityMapUv:kt&&g(P.specularIntensityMap.channel),transmissionMapUv:I&&g(P.transmissionMap.channel),thicknessMapUv:J&&g(P.thicknessMap.channel),alphaMapUv:gt&&g(P.alphaMap.channel),vertexTangents:!!wt.attributes.tangent&&(ce||b),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!wt.attributes.uv&&(re||gt),fog:!!vt,useFog:P.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:et.isSkinnedMesh===!0,morphTargets:wt.morphAttributes.position!==void 0,morphNormals:wt.morphAttributes.normal!==void 0,morphColors:wt.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:re&&P.map.isVideoTexture===!0&&Je.getTransfer(P.map.colorSpace)===dn,decodeVideoTextureEmissive:rt&&P.emissiveMap.isVideoTexture===!0&&Je.getTransfer(P.emissiveMap.colorSpace)===dn,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===je,flipSided:P.side===Zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:$t&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&P.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Pe.vertexUv1s=h.has(1),Pe.vertexUv2s=h.has(2),Pe.vertexUv3s=h.has(3),h.clear(),Pe}function p(P){const x=[];if(P.shaderID?x.push(P.shaderID):(x.push(P.customVertexShaderID),x.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)x.push(z),x.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(_(x,P),M(x,P),x.push(i.outputColorSpace)),x.push(P.customProgramCacheKey),x.join()}function _(P,x){P.push(x.precision),P.push(x.outputColorSpace),P.push(x.envMapMode),P.push(x.envMapCubeUVHeight),P.push(x.mapUv),P.push(x.alphaMapUv),P.push(x.lightMapUv),P.push(x.aoMapUv),P.push(x.bumpMapUv),P.push(x.normalMapUv),P.push(x.displacementMapUv),P.push(x.emissiveMapUv),P.push(x.metalnessMapUv),P.push(x.roughnessMapUv),P.push(x.anisotropyMapUv),P.push(x.clearcoatMapUv),P.push(x.clearcoatNormalMapUv),P.push(x.clearcoatRoughnessMapUv),P.push(x.iridescenceMapUv),P.push(x.iridescenceThicknessMapUv),P.push(x.sheenColorMapUv),P.push(x.sheenRoughnessMapUv),P.push(x.specularMapUv),P.push(x.specularColorMapUv),P.push(x.specularIntensityMapUv),P.push(x.transmissionMapUv),P.push(x.thicknessMapUv),P.push(x.combine),P.push(x.fogExp2),P.push(x.sizeAttenuation),P.push(x.morphTargetsCount),P.push(x.morphAttributeCount),P.push(x.numDirLights),P.push(x.numPointLights),P.push(x.numSpotLights),P.push(x.numSpotLightMaps),P.push(x.numHemiLights),P.push(x.numRectAreaLights),P.push(x.numDirLightShadows),P.push(x.numPointLightShadows),P.push(x.numSpotLightShadows),P.push(x.numSpotLightShadowsWithMaps),P.push(x.numLightProbes),P.push(x.shadowMapType),P.push(x.toneMapping),P.push(x.numClippingPlanes),P.push(x.numClipIntersection),P.push(x.depthPacking)}function M(P,x){c.disableAll(),x.supportsVertexTextures&&c.enable(0),x.instancing&&c.enable(1),x.instancingColor&&c.enable(2),x.instancingMorph&&c.enable(3),x.matcap&&c.enable(4),x.envMap&&c.enable(5),x.normalMapObjectSpace&&c.enable(6),x.normalMapTangentSpace&&c.enable(7),x.clearcoat&&c.enable(8),x.iridescence&&c.enable(9),x.alphaTest&&c.enable(10),x.vertexColors&&c.enable(11),x.vertexAlphas&&c.enable(12),x.vertexUv1s&&c.enable(13),x.vertexUv2s&&c.enable(14),x.vertexUv3s&&c.enable(15),x.vertexTangents&&c.enable(16),x.anisotropy&&c.enable(17),x.alphaHash&&c.enable(18),x.batching&&c.enable(19),x.dispersion&&c.enable(20),x.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),x.fog&&c.enable(0),x.useFog&&c.enable(1),x.flatShading&&c.enable(2),x.logarithmicDepthBuffer&&c.enable(3),x.reverseDepthBuffer&&c.enable(4),x.skinning&&c.enable(5),x.morphTargets&&c.enable(6),x.morphNormals&&c.enable(7),x.morphColors&&c.enable(8),x.premultipliedAlpha&&c.enable(9),x.shadowMapEnabled&&c.enable(10),x.doubleSided&&c.enable(11),x.flipSided&&c.enable(12),x.useDepthPacking&&c.enable(13),x.dithering&&c.enable(14),x.transmission&&c.enable(15),x.sheen&&c.enable(16),x.opaque&&c.enable(17),x.pointsUvs&&c.enable(18),x.decodeVideoTexture&&c.enable(19),x.decodeVideoTextureEmissive&&c.enable(20),x.alphaToCoverage&&c.enable(21),P.push(c.mask)}function y(P){const x=v[P.type];let z;if(x){const B=ys[x];z=us.clone(B.uniforms)}else z=P.uniforms;return z}function R(P,x){let z;for(let B=0,et=r.length;B<et;B++){const vt=r[B];if(vt.cacheKey===x){z=vt,++z.usedTimes;break}}return z===void 0&&(z=new G_(i,x,P,o),r.push(z)),z}function U(P){if(--P.usedTimes===0){const x=r.indexOf(P);r[x]=r[r.length-1],r.pop(),P.destroy()}}function D(P){l.remove(P)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:U,releaseShaderCache:D,programs:r,dispose:N}}function Y_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function n(a){i.delete(a)}function s(a,c,l){i.get(a)[c]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function K_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function f0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,v,g,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function c(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||K_),n.length>1&&n.sort(f||u0),s.length>1&&s.sort(f||u0)}function r(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:c,unshift:l,finish:r,sort:h}}function $_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new f0,i.set(n,[a])):s>=o.length?(a=new f0,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function j_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let J_=0;function Q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t2(i){const t=new j_,e=Z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const s=new L,o=new Ge,a=new Ge;function c(h){let r=0,u=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,_=0,M=0,y=0,R=0,U=0,D=0;h.sort(Q_);for(let P=0,x=h.length;P<x;P++){const z=h[P],B=z.color,et=z.intensity,vt=z.distance,wt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)r+=B.r*et,u+=B.g*et,f+=B.b*et;else if(z.isLightProbe){for(let pt=0;pt<9;pt++)n.probe[pt].addScaledVector(z.sh.coefficients[pt],et);D++}else if(z.isDirectionalLight){const pt=t.get(z);if(pt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Lt=z.shadow,tt=e.get(z);tt.shadowIntensity=Lt.intensity,tt.shadowBias=Lt.bias,tt.shadowNormalBias=Lt.normalBias,tt.shadowRadius=Lt.radius,tt.shadowMapSize=Lt.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=wt,n.directionalShadowMatrix[d]=z.shadow.matrix,_++}n.directional[d]=pt,d++}else if(z.isSpotLight){const pt=t.get(z);pt.position.setFromMatrixPosition(z.matrixWorld),pt.color.copy(B).multiplyScalar(et),pt.distance=vt,pt.coneCos=Math.cos(z.angle),pt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),pt.decay=z.decay,n.spot[g]=pt;const Lt=z.shadow;if(z.map&&(n.spotLightMap[R]=z.map,R++,Lt.updateMatrices(z),z.castShadow&&U++),n.spotLightMatrix[g]=Lt.matrix,z.castShadow){const tt=e.get(z);tt.shadowIntensity=Lt.intensity,tt.shadowBias=Lt.bias,tt.shadowNormalBias=Lt.normalBias,tt.shadowRadius=Lt.radius,tt.shadowMapSize=Lt.mapSize,n.spotShadow[g]=tt,n.spotShadowMap[g]=wt,y++}g++}else if(z.isRectAreaLight){const pt=t.get(z);pt.color.copy(B).multiplyScalar(et),pt.halfWidth.set(z.width*.5,0,0),pt.halfHeight.set(0,z.height*.5,0),n.rectArea[m]=pt,m++}else if(z.isPointLight){const pt=t.get(z);if(pt.color.copy(z.color).multiplyScalar(z.intensity),pt.distance=z.distance,pt.decay=z.decay,z.castShadow){const Lt=z.shadow,tt=e.get(z);tt.shadowIntensity=Lt.intensity,tt.shadowBias=Lt.bias,tt.shadowNormalBias=Lt.normalBias,tt.shadowRadius=Lt.radius,tt.shadowMapSize=Lt.mapSize,tt.shadowCameraNear=Lt.camera.near,tt.shadowCameraFar=Lt.camera.far,n.pointShadow[v]=tt,n.pointShadowMap[v]=wt,n.pointShadowMatrix[v]=z.shadow.matrix,M++}n.point[v]=pt,v++}else if(z.isHemisphereLight){const pt=t.get(z);pt.skyColor.copy(z.color).multiplyScalar(et),pt.groundColor.copy(z.groundColor).multiplyScalar(et),n.hemi[p]=pt,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=r,n.ambient[1]=u,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==d||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==_||N.numPointShadows!==M||N.numSpotShadows!==y||N.numSpotMaps!==R||N.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+R-U,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,N.directionalLength=d,N.pointLength=v,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=_,N.numPointShadows=M,N.numSpotShadows=y,N.numSpotMaps=R,N.numLightProbes=D,n.version=J_++)}function l(h,r){let u=0,f=0,d=0,v=0,g=0;const m=r.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){const M=h[p];if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:n}}function d0(i){const t=new t2(i),e=[],n=[];function s(r){h.camera=r,e.length=0,n.length=0}function o(r){e.push(r)}function a(r){n.push(r)}function c(){t.setup(e)}function l(r){t.setupView(e,r)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function e2(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new d0(i),t.set(s,[c])):o>=a.length?(c=new d0(i),a.push(c)):c=a[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}class n2 extends $r{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i2 extends $r{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o2(i,t,e){let n=new Yu;const s=new qt,o=new qt,a=new en,c=new n2({depthPacking:Hm}),l=new i2,h={},r=e.maxTextureSize,u={[Ts]:Zn,[Zn]:Ts,[je]:je},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:s2,fragmentShader:r2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new nn;v.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new be(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(U,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const et=p!==Fs&&this.type===Fs,vt=p===Fs&&this.type!==Fs;for(let wt=0,pt=U.length;wt<pt;wt++){const Lt=U[wt],tt=Lt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",Lt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);const Ht=tt.getFrameExtents();if(s.multiply(Ht),o.copy(tt.mapSize),(s.x>r||s.y>r)&&(s.x>r&&(o.x=Math.floor(r/Ht.x),s.x=o.x*Ht.x,tt.mapSize.x=o.x),s.y>r&&(o.y=Math.floor(r/Ht.y),s.y=o.y*Ht.y,tt.mapSize.y=o.y)),tt.map===null||et===!0||vt===!0){const ue=this.type!==Fs?{minFilter:bi,magFilter:bi}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Fi(s.x,s.y,ue),tt.map.texture.name=Lt.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const se=tt.getViewportCount();for(let ue=0;ue<se;ue++){const ae=tt.getViewport(ue);a.set(o.x*ae.x,o.y*ae.y,o.x*ae.z,o.y*ae.w),B.viewport(a),tt.updateMatrices(Lt,ue),n=tt.getFrustum(),y(D,N,tt.camera,Lt,this.type)}tt.isPointLightShadow!==!0&&this.type===Fs&&_(tt,N),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,x,z)};function _(U,D){const N=t.update(g);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,d.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Fi(s.x,s.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(D,null,N,f,g,null),d.uniforms.shadow_pass.value=U.mapPass.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(D,null,N,d,g,null)}function M(U,D,N,P){let x=null;const z=N.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)x=z;else if(x=N.isPointLight===!0?l:c,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const B=x.uuid,et=D.uuid;let vt=h[B];vt===void 0&&(vt={},h[B]=vt);let wt=vt[et];wt===void 0&&(wt=x.clone(),vt[et]=wt,D.addEventListener("dispose",R)),x=wt}if(x.visible=D.visible,x.wireframe=D.wireframe,P===Fs?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:u[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=N}return x}function y(U,D,N,P,x){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&x===Fs)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,U.matrixWorld);const et=t.update(U),vt=U.material;if(Array.isArray(vt)){const wt=et.groups;for(let pt=0,Lt=wt.length;pt<Lt;pt++){const tt=wt[pt],Ht=vt[tt.materialIndex];if(Ht&&Ht.visible){const se=M(U,Ht,P,x);U.onBeforeShadow(i,U,D,N,et,se,tt),i.renderBufferDirect(N,null,et,se,U,tt),U.onAfterShadow(i,U,D,N,et,se,tt)}}}else if(vt.visible){const wt=M(U,vt,P,x);U.onBeforeShadow(i,U,D,N,et,wt,null),i.renderBufferDirect(N,null,et,wt,U,null),U.onAfterShadow(i,U,D,N,et,wt,null)}}const B=U.children;for(let et=0,vt=B.length;et<vt;et++)y(B[et],D,N,P,x)}function R(U){U.target.removeEventListener("dispose",R);for(const N in h){const P=h[N],x=U.target.uuid;x in P&&(P[x].dispose(),delete P[x])}}}const a2={[Oh]:Bh,[kh]:Vh,[Hh]:Wh,[Fo]:Gh,[Bh]:Oh,[Vh]:kh,[Wh]:Hh,[Gh]:Fo};function c2(i,t){function e(){let I=!1;const J=new en;let Q=null;const gt=new en(0,0,0,0);return{setMask:function(Et){Q!==Et&&!I&&(i.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){I=Et},setClear:function(Et,It,$t,ve,Pe){Pe===!0&&(Et*=ve,It*=ve,$t*=ve),J.set(Et,It,$t,ve),gt.equals(J)===!1&&(i.clearColor(Et,It,$t,ve),gt.copy(J))},reset:function(){I=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let I=!1,J=!1,Q=null,gt=null,Et=null;return{setReversed:function(It){if(J!==It){const $t=t.get("EXT_clip_control");J?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const ve=Et;Et=null,this.setClear(ve)}J=It},getReversed:function(){return J},setTest:function(It){It?yt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(It){Q!==It&&!I&&(i.depthMask(It),Q=It)},setFunc:function(It){if(J&&(It=a2[It]),gt!==It){switch(It){case Oh:i.depthFunc(i.NEVER);break;case Bh:i.depthFunc(i.ALWAYS);break;case kh:i.depthFunc(i.LESS);break;case Fo:i.depthFunc(i.LEQUAL);break;case Hh:i.depthFunc(i.EQUAL);break;case Gh:i.depthFunc(i.GEQUAL);break;case Vh:i.depthFunc(i.GREATER);break;case Wh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=It}},setLocked:function(It){I=It},setClear:function(It){Et!==It&&(J&&(It=1-It),i.clearDepth(It),Et=It)},reset:function(){I=!1,Q=null,gt=null,Et=null,J=!1}}}function s(){let I=!1,J=null,Q=null,gt=null,Et=null,It=null,$t=null,ve=null,Pe=null;return{setTest:function(Re){I||(Re?yt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(Re){J!==Re&&!I&&(i.stencilMask(Re),J=Re)},setFunc:function(Re,St,fn){(Q!==Re||gt!==St||Et!==fn)&&(i.stencilFunc(Re,St,fn),Q=Re,gt=St,Et=fn)},setOp:function(Re,St,fn){(It!==Re||$t!==St||ve!==fn)&&(i.stencilOp(Re,St,fn),It=Re,$t=St,ve=fn)},setLocked:function(Re){I=Re},setClear:function(Re){Pe!==Re&&(i.clearStencil(Re),Pe=Re)},reset:function(){I=!1,J=null,Q=null,gt=null,Et=null,It=null,$t=null,ve=null,Pe=null}}}const o=new e,a=new n,c=new s,l=new WeakMap,h=new WeakMap;let r={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,_=null,M=null,y=null,R=null,U=null,D=new Xt(0,0,0),N=0,P=!1,x=null,z=null,B=null,et=null,vt=null;const wt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,Lt=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Lt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),pt=Lt>=1):tt.indexOf("OpenGL ES")!==-1&&(Lt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),pt=Lt>=2);let Ht=null,se={};const ue=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),mt=new en().fromArray(ue),X=new en().fromArray(ae);function W(I,J,Q,gt){const Et=new Uint8Array(4),It=i.createTexture();i.bindTexture(I,It),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Q;$t++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(J+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return It}const Dt={};Dt[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),yt(i.DEPTH_TEST),a.setFunc(Fo),Vt(!1),ce(_f),yt(i.CULL_FACE),O(Vs);function yt(I){r[I]!==!0&&(i.enable(I),r[I]=!0)}function Ot(I){r[I]!==!1&&(i.disable(I),r[I]=!1)}function Nt(I,J){return u[I]!==J?(i.bindFramebuffer(I,J),u[I]=J,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function jt(I,J){let Q=d,gt=!1;if(I){Q=f.get(J),Q===void 0&&(Q=[],f.set(J,Q));const Et=I.textures;if(Q.length!==Et.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let It=0,$t=Et.length;It<$t;It++)Q[It]=i.COLOR_ATTACHMENT0+It;Q.length=Et.length,gt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Q)}function re(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const Rt={[Lr]:i.FUNC_ADD,[pm]:i.FUNC_SUBTRACT,[mm]:i.FUNC_REVERSE_SUBTRACT};Rt[gm]=i.MIN,Rt[vm]=i.MAX;const Bt={[xm]:i.ZERO,[Ud]:i.ONE,[_m]:i.SRC_COLOR,[zh]:i.SRC_ALPHA,[Tm]:i.SRC_ALPHA_SATURATE,[Sm]:i.DST_COLOR,[Mm]:i.DST_ALPHA,[ym]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[wm]:i.ONE_MINUS_DST_COLOR,[bm]:i.ONE_MINUS_DST_ALPHA,[Em]:i.CONSTANT_COLOR,[Am]:i.ONE_MINUS_CONSTANT_COLOR,[Cm]:i.CONSTANT_ALPHA,[Rm]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,J,Q,gt,Et,It,$t,ve,Pe,Re){if(I===Vs){g===!0&&(Ot(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),I!==Id){if(I!==m||Re!==P){if((p!==Lr||y!==Lr)&&(i.blendEquation(i.FUNC_ADD),p=Lr,y=Lr),Re)switch(I){case Eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pn:i.blendFunc(i.ONE,i.ONE);break;case yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,M=null,R=null,U=null,D.set(0,0,0),N=0,m=I,P=Re}return}Et=Et||J,It=It||Q,$t=$t||gt,(J!==p||Et!==y)&&(i.blendEquationSeparate(Rt[J],Rt[Et]),p=J,y=Et),(Q!==_||gt!==M||It!==R||$t!==U)&&(i.blendFuncSeparate(Bt[Q],Bt[gt],Bt[It],Bt[$t]),_=Q,M=gt,R=It,U=$t),(ve.equals(D)===!1||Pe!==N)&&(i.blendColor(ve.r,ve.g,ve.b,Pe),D.copy(ve),N=Pe),m=I,P=!1}function he(I,J){I.side===je?Ot(i.CULL_FACE):yt(i.CULL_FACE);let Q=I.side===Zn;J&&(Q=!Q),Vt(Q),I.blending===Eo&&I.transparent===!1?O(Vs):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),o.setMask(I.colorWrite);const gt=I.stencilWrite;c.setTest(gt),gt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function ce(I){I!==um?(yt(i.CULL_FACE),I!==z&&(I===_f?i.cullFace(i.BACK):I===fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),z=I}function ne(I){I!==B&&(pt&&i.lineWidth(I),B=I)}function rt(I,J,Q){I?(yt(i.POLYGON_OFFSET_FILL),(et!==J||vt!==Q)&&(i.polygonOffset(J,Q),et=J,vt=Q)):Ot(i.POLYGON_OFFSET_FILL)}function ft(I){I?yt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function E(I){I===void 0&&(I=i.TEXTURE0+wt-1),Ht!==I&&(i.activeTexture(I),Ht=I)}function b(I,J,Q){Q===void 0&&(Ht===null?Q=i.TEXTURE0+wt-1:Q=Ht);let gt=se[Q];gt===void 0&&(gt={type:void 0,texture:void 0},se[Q]=gt),(gt.type!==I||gt.texture!==J)&&(Ht!==Q&&(i.activeTexture(Q),Ht=Q),i.bindTexture(I,J||Dt[I]),gt.type=I,gt.texture=J)}function H(){const I=se[Ht];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(I){mt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function ot(I){X.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ut(I,J){let Q=h.get(J);Q===void 0&&(Q=new WeakMap,h.set(J,Q));let gt=Q.get(I);gt===void 0&&(gt=i.getUniformBlockIndex(J,I.name),Q.set(I,gt))}function zt(I,J){const gt=h.get(J).get(I);l.get(J)!==gt&&(i.uniformBlockBinding(J,gt,I.__bindingPointIndex),l.set(J,gt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),r={},Ht=null,se={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,_=null,M=null,y=null,R=null,U=null,D=new Xt(0,0,0),N=0,P=!1,x=null,z=null,B=null,et=null,vt=null,mt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:yt,disable:Ot,bindFramebuffer:Nt,drawBuffers:jt,useProgram:re,setBlending:O,setMaterial:he,setFlipSided:Vt,setCullFace:ce,setLineWidth:ne,setPolygonOffset:rt,setScissorTest:ft,activeTexture:E,bindTexture:b,unbindTexture:H,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:Y,texImage3D:Mt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:_t,texStorage3D:F,texSubImage2D:G,texSubImage3D:ut,compressedTexSubImage2D:ht,compressedTexSubImage3D:st,scissor:At,viewport:ot,reset:kt}}function p0(i,t,e,n){const s=l2(n);switch(e){case kd:return i*t;case Gd:return i*t;case Vd:return i*t*2;case Gu:return i*t/s.components*s.byteLength;case Vu:return i*t/s.components*s.byteLength;case Wd:return i*t*2/s.components*s.byteLength;case Wu:return i*t*2/s.components*s.byteLength;case Hd:return i*t*3/s.components*s.byteLength;case Di:return i*t*4/s.components*s.byteLength;case Xu:return i*t*4/s.components*s.byteLength;case kc:case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jh:case Jh:return Math.max(i,16)*Math.max(t,8)/4;case $h:case Zh:return Math.max(i,8)*Math.max(t,8)/2;case Qh:case tu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case iu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case su:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ou:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case au:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wc:case gu:case vu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xd:case xu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _u:case yu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l2(i){switch(i){case $s:case zd:return{byteLength:1,components:1};case Ba:case Od:case Ki:return{byteLength:2,components:1};case ku:case Hu:return{byteLength:2,components:4};case Wr:case Bu:case Ss:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function h2(i,t,e,n,s,o,a){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,r=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,b){return d?new OffscreenCanvas(E,b):ol("canvas")}function g(E,b,H){let q=1;const j=ft(E);if((j.width>H||j.height>H)&&(q=H/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(q*j.width),ut=Math.floor(q*j.height);u===void 0&&(u=v(G,ut));const ht=b?v(G,ut):u;return ht.width=G,ht.height=ut,ht.getContext("2d").drawImage(E,0,0,G,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+ut+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,b,H,q,j=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=b;if(b===i.RED&&(H===i.FLOAT&&(G=i.R32F),H===i.HALF_FLOAT&&(G=i.R16F),H===i.UNSIGNED_BYTE&&(G=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(G=i.R8UI),H===i.UNSIGNED_SHORT&&(G=i.R16UI),H===i.UNSIGNED_INT&&(G=i.R32UI),H===i.BYTE&&(G=i.R8I),H===i.SHORT&&(G=i.R16I),H===i.INT&&(G=i.R32I)),b===i.RG&&(H===i.FLOAT&&(G=i.RG32F),H===i.HALF_FLOAT&&(G=i.RG16F),H===i.UNSIGNED_BYTE&&(G=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(G=i.RG8UI),H===i.UNSIGNED_SHORT&&(G=i.RG16UI),H===i.UNSIGNED_INT&&(G=i.RG32UI),H===i.BYTE&&(G=i.RG8I),H===i.SHORT&&(G=i.RG16I),H===i.INT&&(G=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(G=i.RGB8UI),H===i.UNSIGNED_SHORT&&(G=i.RGB16UI),H===i.UNSIGNED_INT&&(G=i.RGB32UI),H===i.BYTE&&(G=i.RGB8I),H===i.SHORT&&(G=i.RGB16I),H===i.INT&&(G=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),H===i.UNSIGNED_INT&&(G=i.RGBA32UI),H===i.BYTE&&(G=i.RGBA8I),H===i.SHORT&&(G=i.RGBA16I),H===i.INT&&(G=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),b===i.RGBA){const ut=j?Tl:Je.getTransfer(q);H===i.FLOAT&&(G=i.RGBA32F),H===i.HALF_FLOAT&&(G=i.RGBA16F),H===i.UNSIGNED_BYTE&&(G=ut===dn?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(E,b){let H;return E?b===null||b===Wr||b===Oo?H=i.DEPTH24_STENCIL8:b===Ss?H=i.DEPTH32F_STENCIL8:b===Ba&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wr||b===Oo?H=i.DEPTH_COMPONENT24:b===Ss?H=i.DEPTH_COMPONENT32F:b===Ba&&(H=i.DEPTH_COMPONENT16),H}function R(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==bi&&E.minFilter!==Yi?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function U(E){const b=E.target;b.removeEventListener("dispose",U),N(b),b.isVideoTexture&&r.delete(b)}function D(E){const b=E.target;b.removeEventListener("dispose",D),x(b)}function N(E){const b=n.get(E);if(b.__webglInit===void 0)return;const H=E.source,q=f.get(H);if(q){const j=q[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(E),Object.keys(q).length===0&&f.delete(H)}n.remove(E)}function P(E){const b=n.get(E);i.deleteTexture(b.__webglTexture);const H=E.source,q=f.get(H);delete q[b.__cacheKey],a.memory.textures--}function x(E){const b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let j=0;j<b.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[q][j]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=E.textures;for(let q=0,j=H.length;q<j;q++){const G=n.get(H[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(H[q])}n.remove(E)}let z=0;function B(){z=0}function et(){const E=z;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function vt(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function wt(E,b){const H=n.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,E,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function pt(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){X(H,E,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Lt(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){X(H,E,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function tt(E,b){const H=n.get(E);if(E.version>0&&H.__version!==E.version){W(H,E,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const Ht={[Yh]:i.REPEAT,[Fr]:i.CLAMP_TO_EDGE,[Kh]:i.MIRRORED_REPEAT},se={[bi]:i.NEAREST,[Bm]:i.NEAREST_MIPMAP_NEAREST,[Qa]:i.NEAREST_MIPMAP_LINEAR,[Yi]:i.LINEAR,[Ol]:i.LINEAR_MIPMAP_NEAREST,[Nr]:i.LINEAR_MIPMAP_LINEAR},ue={[Vm]:i.NEVER,[$m]:i.ALWAYS,[Wm]:i.LESS,[Yd]:i.LEQUAL,[Xm]:i.EQUAL,[Km]:i.GEQUAL,[qm]:i.GREATER,[Ym]:i.NOTEQUAL};function ae(E,b){if(b.type===Ss&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yi||b.magFilter===Ol||b.magFilter===Qa||b.magFilter===Nr||b.minFilter===Yi||b.minFilter===Ol||b.minFilter===Qa||b.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ht[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ht[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ht[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ue[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Qa&&b.minFilter!==Nr||b.type===Ss&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function mt(E,b){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",U));const q=b.source;let j=f.get(q);j===void 0&&(j={},f.set(q,j));const G=vt(b);if(G!==E.__cacheKey){j[G]===void 0&&(j[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[G].usedTimes++;const ut=j[E.__cacheKey];ut!==void 0&&(j[E.__cacheKey].usedTimes--,ut.usedTimes===0&&P(b)),E.__cacheKey=G,E.__webglTexture=j[G].texture}return H}function X(E,b,H){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);const j=mt(E,b),G=b.source;e.bindTexture(q,E.__webglTexture,i.TEXTURE0+H);const ut=n.get(G);if(G.version!==ut.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const ht=Je.getPrimaries(Je.workingColorSpace),st=b.colorSpace===Os?null:Je.getPrimaries(b.colorSpace),_t=b.colorSpace===Os||ht===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let F=g(b.image,!1,s.maxTextureSize);F=rt(b,F);const Y=o.convert(b.format,b.colorSpace),Mt=o.convert(b.type);let At=M(b.internalFormat,Y,Mt,b.colorSpace,b.isVideoTexture);ae(q,b);let ot;const Ut=b.mipmaps,zt=b.isVideoTexture!==!0,kt=ut.__version===void 0||j===!0,I=G.dataReady,J=R(b,F);if(b.isDepthTexture)At=y(b.format===Bo,b.type),kt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,At,F.width,F.height):e.texImage2D(i.TEXTURE_2D,0,At,F.width,F.height,0,Y,Mt,null));else if(b.isDataTexture)if(Ut.length>0){zt&&kt&&e.texStorage2D(i.TEXTURE_2D,J,At,Ut[0].width,Ut[0].height);for(let Q=0,gt=Ut.length;Q<gt;Q++)ot=Ut[Q],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,Y,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,At,ot.width,ot.height,0,Y,Mt,ot.data);b.generateMipmaps=!1}else zt?(kt&&e.texStorage2D(i.TEXTURE_2D,J,At,F.width,F.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,Y,Mt,F.data)):e.texImage2D(i.TEXTURE_2D,0,At,F.width,F.height,0,Y,Mt,F.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){zt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,At,Ut[0].width,Ut[0].height,F.depth);for(let Q=0,gt=Ut.length;Q<gt;Q++)if(ot=Ut[Q],b.format!==Di)if(Y!==null)if(zt){if(I)if(b.layerUpdates.size>0){const Et=p0(ot.width,ot.height,b.format,b.type);for(const It of b.layerUpdates){const $t=ot.data.subarray(It*Et/ot.data.BYTES_PER_ELEMENT,(It+1)*Et/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,It,ot.width,ot.height,1,Y,$t)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,F.depth,Y,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,At,ot.width,ot.height,F.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,F.depth,Y,Mt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,At,ot.width,ot.height,F.depth,0,Y,Mt,ot.data)}else{zt&&kt&&e.texStorage2D(i.TEXTURE_2D,J,At,Ut[0].width,Ut[0].height);for(let Q=0,gt=Ut.length;Q<gt;Q++)ot=Ut[Q],b.format!==Di?Y!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,Y,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,At,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,Y,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,At,ot.width,ot.height,0,Y,Mt,ot.data)}else if(b.isDataArrayTexture)if(zt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,At,F.width,F.height,F.depth),I)if(b.layerUpdates.size>0){const Q=p0(F.width,F.height,b.format,b.type);for(const gt of b.layerUpdates){const Et=F.data.subarray(gt*Q/F.data.BYTES_PER_ELEMENT,(gt+1)*Q/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,F.width,F.height,1,Y,Mt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,Y,Mt,F.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,F.width,F.height,F.depth,0,Y,Mt,F.data);else if(b.isData3DTexture)zt?(kt&&e.texStorage3D(i.TEXTURE_3D,J,At,F.width,F.height,F.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,Y,Mt,F.data)):e.texImage3D(i.TEXTURE_3D,0,At,F.width,F.height,F.depth,0,Y,Mt,F.data);else if(b.isFramebufferTexture){if(kt)if(zt)e.texStorage2D(i.TEXTURE_2D,J,At,F.width,F.height);else{let Q=F.width,gt=F.height;for(let Et=0;Et<J;Et++)e.texImage2D(i.TEXTURE_2D,Et,At,Q,gt,0,Y,Mt,null),Q>>=1,gt>>=1}}else if(Ut.length>0){if(zt&&kt){const Q=ft(Ut[0]);e.texStorage2D(i.TEXTURE_2D,J,At,Q.width,Q.height)}for(let Q=0,gt=Ut.length;Q<gt;Q++)ot=Ut[Q],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Y,Mt,ot):e.texImage2D(i.TEXTURE_2D,Q,At,Y,Mt,ot);b.generateMipmaps=!1}else if(zt){if(kt){const Q=ft(F);e.texStorage2D(i.TEXTURE_2D,J,At,Q.width,Q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,Mt,F)}else e.texImage2D(i.TEXTURE_2D,0,At,Y,Mt,F);m(b)&&p(q),ut.__version=G.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function W(E,b,H){if(b.image.length!==6)return;const q=mt(E,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);const G=n.get(j);if(j.version!==G.__version||q===!0){e.activeTexture(i.TEXTURE0+H);const ut=Je.getPrimaries(Je.workingColorSpace),ht=b.colorSpace===Os?null:Je.getPrimaries(b.colorSpace),st=b.colorSpace===Os||ut===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const _t=b.isCompressedTexture||b.image[0].isCompressedTexture,F=b.image[0]&&b.image[0].isDataTexture,Y=[];for(let gt=0;gt<6;gt++)!_t&&!F?Y[gt]=g(b.image[gt],!0,s.maxCubemapSize):Y[gt]=F?b.image[gt].image:b.image[gt],Y[gt]=rt(b,Y[gt]);const Mt=Y[0],At=o.convert(b.format,b.colorSpace),ot=o.convert(b.type),Ut=M(b.internalFormat,At,ot,b.colorSpace),zt=b.isVideoTexture!==!0,kt=G.__version===void 0||q===!0,I=j.dataReady;let J=R(b,Mt);ae(i.TEXTURE_CUBE_MAP,b);let Q;if(_t){zt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Ut,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){Q=Y[gt].mipmaps;for(let Et=0;Et<Q.length;Et++){const It=Q[Et];b.format!==Di?At!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,0,0,It.width,It.height,At,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,Ut,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,0,0,It.width,It.height,At,ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,Ut,It.width,It.height,0,At,ot,It.data)}}}else{if(Q=b.mipmaps,zt&&kt){Q.length>0&&J++;const gt=ft(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Ut,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(F){zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Y[gt].width,Y[gt].height,At,ot,Y[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ut,Y[gt].width,Y[gt].height,0,At,ot,Y[gt].data);for(let Et=0;Et<Q.length;Et++){const $t=Q[Et].image[gt].image;zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,0,0,$t.width,$t.height,At,ot,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,Ut,$t.width,$t.height,0,At,ot,$t.data)}}else{zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,At,ot,Y[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ut,At,ot,Y[gt]);for(let Et=0;Et<Q.length;Et++){const It=Q[Et];zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,0,0,At,ot,It.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,Ut,At,ot,It.image[gt])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),G.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Dt(E,b,H,q,j,G){const ut=o.convert(H.format,H.colorSpace),ht=o.convert(H.type),st=M(H.internalFormat,ut,ht,H.colorSpace),_t=n.get(b),F=n.get(H);if(F.__renderTarget=b,!_t.__hasExternalTextures){const Y=Math.max(1,b.width>>G),Mt=Math.max(1,b.height>>G);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,G,st,Y,Mt,b.depth,0,ut,ht,null):e.texImage2D(j,G,st,Y,Mt,0,ut,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ce(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,F.__webglTexture,0,Vt(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,F.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(E,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){const q=b.depthTexture,j=q&&q.isDepthTexture?q.type:null,G=y(b.stencilBuffer,j),ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Vt(b);ce(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,G,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,G,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,G,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,E)}else{const q=b.textures;for(let j=0;j<q.length;j++){const G=q[j],ut=o.convert(G.format,G.colorSpace),ht=o.convert(G.type),st=M(G.internalFormat,ut,ht,G.colorSpace),_t=Vt(b);H&&ce(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,st,b.width,b.height):ce(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,st,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,st,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),wt(b.depthTexture,0);const j=q.__webglTexture,G=Vt(b);if(b.depthTexture.format===Ao)ce(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(b.depthTexture.format===Bo)ce(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Nt(E){const b=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=q}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ot(b.__webglFramebuffer,E)}else if(H){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),yt(b.__webglDepthbuffer[q],E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),yt(b.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(E,b,H){const q=n.get(E);b!==void 0&&Dt(q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Nt(E)}function re(E){const b=E.texture,H=n.get(E),q=n.get(b);E.addEventListener("dispose",D);const j=E.textures,G=E.isWebGLCubeRenderTarget===!0,ut=j.length>1;if(ut||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,a.memory.textures++),G){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let st=0;st<b.mipmaps.length;st++)H.__webglFramebuffer[ht][st]=i.createFramebuffer()}else H.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)H.__webglFramebuffer[ht]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ut)for(let ht=0,st=j.length;ht<st;ht++){const _t=n.get(j[ht]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ce(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){const st=j[ht];H.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);const _t=o.convert(st.format,st.colorSpace),F=o.convert(st.type),Y=M(st.internalFormat,_t,F,st.colorSpace,E.isXRRenderTarget===!0),Mt=Vt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)Dt(H.__webglFramebuffer[ht][st],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,st);else Dt(H.__webglFramebuffer[ht],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ht=0,st=j.length;ht<st;ht++){const _t=j[ht],F=n.get(_t);e.bindTexture(i.TEXTURE_2D,F.__webglTexture),ae(i.TEXTURE_2D,_t),Dt(H.__webglFramebuffer,E,_t,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(_t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),ae(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)Dt(H.__webglFramebuffer[st],E,b,i.COLOR_ATTACHMENT0,ht,st);else Dt(H.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,ht,0);m(b)&&p(ht),e.unbindTexture()}E.depthBuffer&&Nt(E)}function Rt(E){const b=E.textures;for(let H=0,q=b.length;H<q;H++){const j=b[H];if(m(j)){const G=_(E),ut=n.get(j).__webglTexture;e.bindTexture(G,ut),p(G),e.unbindTexture()}}}const Bt=[],O=[];function he(E){if(E.samples>0){if(ce(E)===!1){const b=E.textures,H=E.width,q=E.height;let j=i.COLOR_BUFFER_BIT;const G=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(E),ht=b.length>1;if(ht)for(let st=0;st<b.length;st++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let st=0;st<b.length;st++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[st]);const _t=n.get(b[st]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,j,i.NEAREST),l===!0&&(Bt.length=0,O.length=0,Bt.push(i.COLOR_ATTACHMENT0+st),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Bt.push(G),O.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let st=0;st<b.length;st++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,ut.__webglColorRenderbuffer[st]);const _t=n.get(b[st]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,_t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Vt(E){return Math.min(s.maxSamples,E.samples)}function ce(E){const b=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(E){const b=a.render.frame;r.get(E)!==b&&(r.set(E,b),E.update())}function rt(E,b){const H=E.colorSpace,q=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==$o&&H!==Os&&(Je.getTransfer(H)===dn?(q!==Di||j!==$s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=et,this.resetTextureUnits=B,this.setTexture2D=wt,this.setTexture2DArray=pt,this.setTexture3D=Lt,this.setTextureCube=tt,this.rebindTextures=jt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ce}function u2(i,t){function e(n,s=Os){let o;const a=Je.getTransfer(s);if(n===$s)return i.UNSIGNED_BYTE;if(n===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return i.BYTE;if(n===Od)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===Wr)return i.UNSIGNED_INT;if(n===Ss)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===kd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Di)return i.RGBA;if(n===Gd)return i.LUMINANCE;if(n===Vd)return i.LUMINANCE_ALPHA;if(n===Ao)return i.DEPTH_COMPONENT;if(n===Bo)return i.DEPTH_STENCIL;if(n===Gu)return i.RED;if(n===Vu)return i.RED_INTEGER;if(n===Wd)return i.RG;if(n===Wu)return i.RG_INTEGER;if(n===Xu)return i.RGBA_INTEGER;if(n===kc||n===Hc||n===Gc||n===Vc)if(a===dn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===kc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===kc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$h||n===jh||n===Zh||n===Jh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===$h)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qh||n===tu||n===eu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Qh||n===tu)return a===dn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===eu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===nu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===iu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===su)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ru)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ou)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===au)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===du)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mu)return a===dn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===gu||n===vu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Wc)return a===dn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xd||n===xu||n===_u||n===yu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Wc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===xu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_u)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class f2 extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hn extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const c=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const r=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=r.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&f>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new hi,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends jo{constructor(t,e){super();const n=this;let s=null,o=1,a=null,c="local-floor",l=1,h=null,r=null,u=null,f=null,d=null,v=null;const g=new g2,m=e.getContextAttributes();let p=null,_=null;const M=[],y=[],R=new qt;let U=null;const D=new li;D.viewport=new en;const N=new li;N.viewport=new en;const P=[D,N],x=new f2;let z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=M[X];return W===void 0&&(W=new uh,M[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=M[X];return W===void 0&&(W=new uh,M[X]=W),W.getGripSpace()},this.getHand=function(X){let W=M[X];return W===void 0&&(W=new uh,M[X]=W),W.getHandSpace()};function et(X){const W=y.indexOf(X.inputSource);if(W===-1)return;const Dt=M[W];Dt!==void 0&&(Dt.update(X.inputSource,X.frame,h||a),Dt.dispatchEvent({type:X.type,data:X.inputSource}))}function vt(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",vt),s.removeEventListener("inputsourceschange",wt);for(let X=0;X<M.length;X++){const W=y[X];W!==null&&(y[X]=null,M[X].disconnect(W))}z=null,B=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,_=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",vt),s.addEventListener("inputsourceschange",wt),m.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Fi(d.framebufferWidth,d.framebufferHeight,{format:Di,type:$s,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,Dt=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?Bo:Ao,Dt=m.stencil?Oo:Wr);const Ot={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Fi(f.textureWidth,f.textureHeight,{format:Di,type:$s,depthTexture:new cp(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(c),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function wt(X){for(let W=0;W<X.removed.length;W++){const Dt=X.removed[W],yt=y.indexOf(Dt);yt>=0&&(y[yt]=null,M[yt].disconnect(Dt))}for(let W=0;W<X.added.length;W++){const Dt=X.added[W];let yt=y.indexOf(Dt);if(yt===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=y.length){y.push(Dt),yt=Nt;break}else if(y[Nt]===null){y[Nt]=Dt,yt=Nt;break}if(yt===-1)break}const Ot=M[yt];Ot&&Ot.connect(Dt)}}const pt=new L,Lt=new L;function tt(X,W,Dt){pt.setFromMatrixPosition(W.matrixWorld),Lt.setFromMatrixPosition(Dt.matrixWorld);const yt=pt.distanceTo(Lt),Ot=W.projectionMatrix.elements,Nt=Dt.projectionMatrix.elements,jt=Ot[14]/(Ot[10]-1),re=Ot[14]/(Ot[10]+1),Rt=(Ot[9]+1)/Ot[5],Bt=(Ot[9]-1)/Ot[5],O=(Ot[8]-1)/Ot[0],he=(Nt[8]+1)/Nt[0],Vt=jt*O,ce=jt*he,ne=yt/(-O+he),rt=ne*-O;if(W.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(rt),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ot[10]===-1)X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ft=jt+ne,E=re+ne,b=Vt-rt,H=ce+(yt-rt),q=Rt*re/E*ft,j=Bt*re/E*ft;X.projectionMatrix.makePerspective(b,H,q,j,ft,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ht(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let W=X.near,Dt=X.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(Dt=g.depthFar)),x.near=N.near=D.near=W,x.far=N.far=D.far=Dt,(z!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),z=x.near,B=x.far),D.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,x.layers.mask=D.layers.mask|N.layers.mask;const yt=X.parent,Ot=x.cameras;Ht(x,yt);for(let Nt=0;Nt<Ot.length;Nt++)Ht(Ot[Nt],yt);Ot.length===2?tt(x,D,N):x.projectionMatrix.copy(D.projectionMatrix),se(X,x,yt)};function se(X,W,Dt){Dt===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(Dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ko*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ue=null;function ae(X,W){if(r=W.getViewerPose(h||a),v=W,r!==null){const Dt=r.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let yt=!1;Dt.length!==x.cameras.length&&(x.cameras.length=0,yt=!0);for(let Nt=0;Nt<Dt.length;Nt++){const jt=Dt[Nt];let re=null;if(d!==null)re=d.getViewport(jt);else{const Bt=u.getViewSubImage(f,jt);re=Bt.viewport,Nt===0&&(t.setRenderTargetTextures(_,Bt.colorTexture,f.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(_))}let Rt=P[Nt];Rt===void 0&&(Rt=new li,Rt.layers.enable(Nt),Rt.viewport=new en,P[Nt]=Rt),Rt.matrix.fromArray(jt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(jt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(re.x,re.y,re.width,re.height),Nt===0&&(x.matrix.copy(Rt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),yt===!0&&x.cameras.push(Rt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Nt=u.getDepthInformation(Dt[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(t,Nt,s.renderState)}}for(let Dt=0;Dt<M.length;Dt++){const yt=y[Dt],Ot=M[Dt];yt!==null&&Ot!==void 0&&Ot.update(yt,W,h||a)}ue&&ue(X,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),v=null}const mt=new ap;mt.setAnimationLoop(ae),this.setAnimationLoop=function(X){ue=X},this.dispose=function(){}}}const wr=new Ci,x2=new Ge;function _2(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,np(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),r(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),v(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),g(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,wr.copy(y),wr.x*=-1,wr.y*=-1,wr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(wr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function r(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y2(i,t,e,n){let s={},o={},a=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const y=M.program;n.uniformBlockBinding(_,y)}function h(_,M){let y=s[_.id];y===void 0&&(v(_),y=r(_),s[_.id]=y,_.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(_,R);const U=t.render.frame;o[_.id]!==U&&(f(_),o[_.id]=U)}function r(_){const M=u();_.__bindingPointIndex=M;const y=i.createBuffer(),R=_.__size,U=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let _=0;_<c;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const M=s[_.id],y=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let U=0,D=y.length;U<D;U++){const N=Array.isArray(y[U])?y[U]:[y[U]];for(let P=0,x=N.length;P<x;P++){const z=N[P];if(d(z,U,P,R)===!0){const B=z.__offset,et=Array.isArray(z.value)?z.value:[z.value];let vt=0;for(let wt=0;wt<et.length;wt++){const pt=et[wt],Lt=g(pt);typeof pt=="number"||typeof pt=="boolean"?(z.__data[0]=pt,i.bufferSubData(i.UNIFORM_BUFFER,B+vt,z.__data)):pt.isMatrix3?(z.__data[0]=pt.elements[0],z.__data[1]=pt.elements[1],z.__data[2]=pt.elements[2],z.__data[3]=0,z.__data[4]=pt.elements[3],z.__data[5]=pt.elements[4],z.__data[6]=pt.elements[5],z.__data[7]=0,z.__data[8]=pt.elements[6],z.__data[9]=pt.elements[7],z.__data[10]=pt.elements[8],z.__data[11]=0):(pt.toArray(z.__data,vt),vt+=Lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,y,R){const U=_.value,D=M+"_"+y;if(R[D]===void 0)return typeof U=="number"||typeof U=="boolean"?R[D]=U:R[D]=U.clone(),!0;{const N=R[D];if(typeof U=="number"||typeof U=="boolean"){if(N!==U)return R[D]=U,!0}else if(N.equals(U)===!1)return N.copy(U),!0}return!1}function v(_){const M=_.uniforms;let y=0;const R=16;for(let D=0,N=M.length;D<N;D++){const P=Array.isArray(M[D])?M[D]:[M[D]];for(let x=0,z=P.length;x<z;x++){const B=P[x],et=Array.isArray(B.value)?B.value:[B.value];for(let vt=0,wt=et.length;vt<wt;vt++){const pt=et[vt],Lt=g(pt),tt=y%R,Ht=tt%Lt.boundary,se=tt+Ht;y+=Ht,se!==0&&R-se<Lt.storage&&(y+=R-se),B.__data=new Float32Array(Lt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Lt.storage}}}const U=y%R;return U>0&&(y+=R-U),_.__size=y,_.__cache={},this}function g(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},o={}}return{bind:l,update:h,dispose:p}}class M2{constructor(t={}){const{canvas:e=fg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:r="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const _=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=In,this.toneMapping=Ws,this.toneMappingExposure=1;const y=this;let R=!1,U=0,D=0,N=null,P=-1,x=null;const z=new en,B=new en;let et=null;const vt=new Xt(0);let wt=0,pt=e.width,Lt=e.height,tt=1,Ht=null,se=null;const ue=new en(0,0,pt,Lt),ae=new en(0,0,pt,Lt);let mt=!1;const X=new Yu;let W=!1,Dt=!1;const yt=new Ge,Ot=new Ge,Nt=new L,jt=new en,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Bt(){return N===null?tt:1}let O=n;function he(w,K){return e.getContext(w,K)}try{const w={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:r,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ou}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",It,!1),O===null){const K="webgl2";if(O=he(K,w),O===null)throw he(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,ce,ne,rt,ft,E,b,H,q,j,G,ut,ht,st,_t,F,Y,Mt,At,ot,Ut,zt,kt,I;function J(){Vt=new Ex(O),Vt.init(),zt=new u2(O,Vt),ce=new yx(O,Vt,t,zt),ne=new c2(O,Vt),ce.reverseDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),rt=new Rx(O),ft=new Y_,E=new h2(O,Vt,ne,ft,ce,zt,rt),b=new bx(y),H=new Tx(y),q=new Ng(O),kt=new xx(O,q),j=new Ax(O,q,rt,kt),G=new Lx(O,j,q,rt),At=new Px(O,ce,E),F=new Mx(ft),ut=new q_(y,b,H,Vt,ce,kt,F),ht=new _2(y,ft),st=new $_,_t=new e2(Vt),Mt=new vx(y,b,H,ne,G,d,l),Y=new o2(y,G,ce),I=new y2(O,rt,ce,ne),ot=new _x(O,Vt,rt),Ut=new Cx(O,Vt,rt),rt.programs=ut.programs,y.capabilities=ce,y.extensions=Vt,y.properties=ft,y.renderLists=st,y.shadowMap=Y,y.state=ne,y.info=rt}J();const Q=new v2(y,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(w){w!==void 0&&(tt=w,this.setSize(pt,Lt,!1))},this.getSize=function(w){return w.set(pt,Lt)},this.setSize=function(w,K,xt=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=w,Lt=K,e.width=Math.floor(w*tt),e.height=Math.floor(K*tt),xt===!0&&(e.style.width=w+"px",e.style.height=K+"px"),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(pt*tt,Lt*tt).floor()},this.setDrawingBufferSize=function(w,K,xt){pt=w,Lt=K,tt=xt,e.width=Math.floor(w*xt),e.height=Math.floor(K*xt),this.setViewport(0,0,w,K)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,K,xt,lt){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,K,xt,lt),ne.viewport(z.copy(ue).multiplyScalar(tt).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,K,xt,lt){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,K,xt,lt),ne.scissor(B.copy(ae).multiplyScalar(tt).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){ne.setScissorTest(mt=w)},this.setOpaqueSort=function(w){Ht=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,K=!0,xt=!0){let lt=0;if(w){let A=!1;if(N!==null){const V=N.texture.format;A=V===Xu||V===Wu||V===Vu}if(A){const V=N.texture.type,ct=V===$s||V===Wr||V===Ba||V===Oo||V===ku||V===Hu,dt=Mt.getClearColor(),Ct=Mt.getClearAlpha(),Pt=dt.r,S=dt.g,C=dt.b;ct?(v[0]=Pt,v[1]=S,v[2]=C,v[3]=Ct,O.clearBufferuiv(O.COLOR,0,v)):(g[0]=Pt,g[1]=S,g[2]=C,g[3]=Ct,O.clearBufferiv(O.COLOR,0,g))}else lt|=O.COLOR_BUFFER_BIT}K&&(lt|=O.DEPTH_BUFFER_BIT),xt&&(lt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",It,!1),st.dispose(),_t.dispose(),ft.dispose(),b.dispose(),H.dispose(),G.dispose(),kt.dispose(),I.dispose(),ut.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ie),Q.removeEventListener("sessionend",ze),wn.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=rt.autoReset,K=Y.enabled,xt=Y.autoUpdate,lt=Y.needsUpdate,A=Y.type;J(),rt.autoReset=w,Y.enabled=K,Y.autoUpdate=xt,Y.needsUpdate=lt,Y.type=A}function It(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $t(w){const K=w.target;K.removeEventListener("dispose",$t),ve(K)}function ve(w){Pe(w),ft.remove(w)}function Pe(w){const K=ft.get(w).programs;K!==void 0&&(K.forEach(function(xt){ut.releaseProgram(xt)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,xt,lt,A,V){K===null&&(K=re);const ct=A.isMesh&&A.matrixWorld.determinant()<0,dt=Te(w,K,xt,lt,A);ne.setMaterial(lt,ct);let Ct=xt.index,Pt=1;if(lt.wireframe===!0){if(Ct=j.getWireframeAttribute(xt),Ct===void 0)return;Pt=2}const S=xt.drawRange,C=xt.attributes.position;let k=S.start*Pt,T=(S.start+S.count)*Pt;V!==null&&(k=Math.max(k,V.start*Pt),T=Math.min(T,(V.start+V.count)*Pt)),Ct!==null?(k=Math.max(k,0),T=Math.min(T,Ct.count)):C!=null&&(k=Math.max(k,0),T=Math.min(T,C.count));const at=T-k;if(at<0||at===1/0)return;kt.setup(A,lt,dt,xt,Ct);let Z,it=ot;if(Ct!==null&&(Z=q.get(Ct),it=Ut,it.setIndex(Z)),A.isMesh)lt.wireframe===!0?(ne.setLineWidth(lt.wireframeLinewidth*Bt()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(A.isLine){let $=lt.linewidth;$===void 0&&($=1),ne.setLineWidth($*Bt()),A.isLineSegments?it.setMode(O.LINES):A.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else A.isPoints?it.setMode(O.POINTS):A.isSprite&&it.setMode(O.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)it.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))it.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const $=A._multiDrawStarts,Gt=A._multiDrawCounts,Tt=A._multiDrawCount,Wt=Ct?q.get(Ct).bytesPerElement:1,fe=ft.get(lt).currentProgram.getUniforms();for(let pe=0;pe<Tt;pe++)fe.setValue(O,"_gl_DrawID",pe),it.render($[pe]/Wt,Gt[pe])}else if(A.isInstancedMesh)it.renderInstances(k,at,A.count);else if(xt.isInstancedBufferGeometry){const $=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,Gt=Math.min(xt.instanceCount,$);it.renderInstances(k,at,Gt)}else it.render(k,at)};function Re(w,K,xt){w.transparent===!0&&w.side===je&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,Kt(w,K,xt),w.side=Ts,w.needsUpdate=!0,Kt(w,K,xt),w.side=je):Kt(w,K,xt)}this.compile=function(w,K,xt=null){xt===null&&(xt=w),p=_t.get(xt),p.init(K),M.push(p),xt.traverseVisible(function(A){A.isLight&&A.layers.test(K.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),w!==xt&&w.traverseVisible(function(A){A.isLight&&A.layers.test(K.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),p.setupLights();const lt=new Set;return w.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const V=A.material;if(V)if(Array.isArray(V))for(let ct=0;ct<V.length;ct++){const dt=V[ct];Re(dt,xt,A),lt.add(dt)}else Re(V,xt,A),lt.add(V)}),M.pop(),p=null,lt},this.compileAsync=function(w,K,xt=null){const lt=this.compile(w,K,xt);return new Promise(A=>{function V(){if(lt.forEach(function(ct){ft.get(ct).currentProgram.isReady()&&lt.delete(ct)}),lt.size===0){A(w);return}setTimeout(V,10)}Vt.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let St=null;function fn(w){St&&St(w)}function ie(){wn.stop()}function ze(){wn.start()}const wn=new ap;wn.setAnimationLoop(fn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(w){St=w,Q.setAnimationLoop(w),w===null?wn.stop():wn.start()},Q.addEventListener("sessionstart",ie),Q.addEventListener("sessionend",ze),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(K),K=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,K,N),p=_t.get(w,M.length),p.init(K),M.push(p),Ot.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(Ot),Dt=this.localClippingEnabled,W=F.init(this.clippingPlanes,Dt),m=st.get(w,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){const V=y.xr.getDepthSensingMesh();V!==null&&fi(V,K,-1/0,y.sortObjects)}fi(w,K,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Ht,se),Rt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Rt&&Mt.addToRenderList(m,w),this.info.render.frame++,W===!0&&F.beginShadows();const xt=p.state.shadowsArray;Y.render(xt,w,K),W===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=m.opaque,A=m.transmissive;if(p.setupLights(),K.isArrayCamera){const V=K.cameras;if(A.length>0)for(let ct=0,dt=V.length;ct<dt;ct++){const Ct=V[ct];nt(lt,A,w,Ct)}Rt&&Mt.render(w);for(let ct=0,dt=V.length;ct<dt;ct++){const Ct=V[ct];Ni(m,w,Ct,Ct.viewport)}}else A.length>0&&nt(lt,A,w,K),Rt&&Mt.render(w),Ni(m,w,K);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(y,w,K),kt.resetDefaultState(),P=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],W===!0&&F.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function fi(w,K,xt,lt){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)xt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){lt&&jt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ot);const ct=G.update(w),dt=w.material;dt.visible&&m.push(w,ct,dt,xt,jt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const ct=G.update(w),dt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),jt.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),jt.copy(ct.boundingSphere.center)),jt.applyMatrix4(w.matrixWorld).applyMatrix4(Ot)),Array.isArray(dt)){const Ct=ct.groups;for(let Pt=0,S=Ct.length;Pt<S;Pt++){const C=Ct[Pt],k=dt[C.materialIndex];k&&k.visible&&m.push(w,ct,k,xt,jt.z,C)}}else dt.visible&&m.push(w,ct,dt,xt,jt.z,null)}}const V=w.children;for(let ct=0,dt=V.length;ct<dt;ct++)fi(V[ct],K,xt,lt)}function Ni(w,K,xt,lt){const A=w.opaque,V=w.transmissive,ct=w.transparent;p.setupLightsView(xt),W===!0&&F.setGlobalState(y.clippingPlanes,xt),lt&&ne.viewport(z.copy(lt)),A.length>0&&Zt(A,K,xt),V.length>0&&Zt(V,K,xt),ct.length>0&&Zt(ct,K,xt),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function nt(w,K,xt,lt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[lt.id]===void 0&&(p.state.transmissionRenderTarget[lt.id]=new Fi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Ki:$s,minFilter:Nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const V=p.state.transmissionRenderTarget[lt.id],ct=lt.viewport||z;V.setSize(ct.z,ct.w);const dt=y.getRenderTarget();y.setRenderTarget(V),y.getClearColor(vt),wt=y.getClearAlpha(),wt<1&&y.setClearColor(16777215,.5),y.clear(),Rt&&Mt.render(xt);const Ct=y.toneMapping;y.toneMapping=Ws;const Pt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),p.setupLightsView(lt),W===!0&&F.setGlobalState(y.clippingPlanes,lt),Zt(w,xt,lt),E.updateMultisampleRenderTarget(V),E.updateRenderTargetMipmap(V),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let S=!1;for(let C=0,k=K.length;C<k;C++){const T=K[C],at=T.object,Z=T.geometry,it=T.material,$=T.group;if(it.side===je&&at.layers.test(lt.layers)){const Gt=it.side;it.side=Zn,it.needsUpdate=!0,Yt(at,xt,lt,Z,it,$),it.side=Gt,it.needsUpdate=!0,S=!0}}S===!0&&(E.updateMultisampleRenderTarget(V),E.updateRenderTargetMipmap(V))}y.setRenderTarget(dt),y.setClearColor(vt,wt),Pt!==void 0&&(lt.viewport=Pt),y.toneMapping=Ct}function Zt(w,K,xt){const lt=K.isScene===!0?K.overrideMaterial:null;for(let A=0,V=w.length;A<V;A++){const ct=w[A],dt=ct.object,Ct=ct.geometry,Pt=lt===null?ct.material:lt,S=ct.group;dt.layers.test(xt.layers)&&Yt(dt,K,xt,Ct,Pt,S)}}function Yt(w,K,xt,lt,A,V){w.onBeforeRender(y,K,xt,lt,A,V),w.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),A.onBeforeRender(y,K,xt,lt,w,V),A.transparent===!0&&A.side===je&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,y.renderBufferDirect(xt,K,lt,A,w,V),A.side=Ts,A.needsUpdate=!0,y.renderBufferDirect(xt,K,lt,A,w,V),A.side=je):y.renderBufferDirect(xt,K,lt,A,w,V),w.onAfterRender(y,K,xt,lt,A,V)}function Kt(w,K,xt){K.isScene!==!0&&(K=re);const lt=ft.get(w),A=p.state.lights,V=p.state.shadowsArray,ct=A.state.version,dt=ut.getParameters(w,A.state,V,K,xt),Ct=ut.getProgramCacheKey(dt);let Pt=lt.programs;lt.environment=w.isMeshStandardMaterial?K.environment:null,lt.fog=K.fog,lt.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",$t),Pt=new Map,lt.programs=Pt);let S=Pt.get(Ct);if(S!==void 0){if(lt.currentProgram===S&&lt.lightsStateVersion===ct)return te(w,dt),S}else dt.uniforms=ut.getUniforms(w),w.onBeforeCompile(dt,y),S=ut.acquireProgram(dt,Ct),Pt.set(Ct,S),lt.uniforms=dt.uniforms;const C=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(C.clippingPlanes=F.uniform),te(w,dt),lt.needsLights=le(w),lt.lightsStateVersion=ct,lt.needsLights&&(C.ambientLightColor.value=A.state.ambient,C.lightProbe.value=A.state.probe,C.directionalLights.value=A.state.directional,C.directionalLightShadows.value=A.state.directionalShadow,C.spotLights.value=A.state.spot,C.spotLightShadows.value=A.state.spotShadow,C.rectAreaLights.value=A.state.rectArea,C.ltc_1.value=A.state.rectAreaLTC1,C.ltc_2.value=A.state.rectAreaLTC2,C.pointLights.value=A.state.point,C.pointLightShadows.value=A.state.pointShadow,C.hemisphereLights.value=A.state.hemi,C.directionalShadowMap.value=A.state.directionalShadowMap,C.directionalShadowMatrix.value=A.state.directionalShadowMatrix,C.spotShadowMap.value=A.state.spotShadowMap,C.spotLightMatrix.value=A.state.spotLightMatrix,C.spotLightMap.value=A.state.spotLightMap,C.pointShadowMap.value=A.state.pointShadowMap,C.pointShadowMatrix.value=A.state.pointShadowMatrix),lt.currentProgram=S,lt.uniformsList=null,S}function Qt(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=Xc.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function te(w,K){const xt=ft.get(w);xt.outputColorSpace=K.outputColorSpace,xt.batching=K.batching,xt.batchingColor=K.batchingColor,xt.instancing=K.instancing,xt.instancingColor=K.instancingColor,xt.instancingMorph=K.instancingMorph,xt.skinning=K.skinning,xt.morphTargets=K.morphTargets,xt.morphNormals=K.morphNormals,xt.morphColors=K.morphColors,xt.morphTargetsCount=K.morphTargetsCount,xt.numClippingPlanes=K.numClippingPlanes,xt.numIntersection=K.numClipIntersection,xt.vertexAlphas=K.vertexAlphas,xt.vertexTangents=K.vertexTangents,xt.toneMapping=K.toneMapping}function Te(w,K,xt,lt,A){K.isScene!==!0&&(K=re),E.resetTextureUnits();const V=K.fog,ct=lt.isMeshStandardMaterial?K.environment:null,dt=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:$o,Ct=(lt.isMeshStandardMaterial?H:b).get(lt.envMap||ct),Pt=lt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,S=!!xt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),C=!!xt.morphAttributes.position,k=!!xt.morphAttributes.normal,T=!!xt.morphAttributes.color;let at=Ws;lt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(at=y.toneMapping);const Z=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,it=Z!==void 0?Z.length:0,$=ft.get(lt),Gt=p.state.lights;if(W===!0&&(Dt===!0||w!==x)){const me=w===x&&lt.id===P;F.setState(lt,w,me)}let Tt=!1;lt.version===$.__version?($.needsLights&&$.lightsStateVersion!==Gt.state.version||$.outputColorSpace!==dt||A.isBatchedMesh&&$.batching===!1||!A.isBatchedMesh&&$.batching===!0||A.isBatchedMesh&&$.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&$.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&$.instancing===!1||!A.isInstancedMesh&&$.instancing===!0||A.isSkinnedMesh&&$.skinning===!1||!A.isSkinnedMesh&&$.skinning===!0||A.isInstancedMesh&&$.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&$.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&$.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&$.instancingMorph===!1&&A.morphTexture!==null||$.envMap!==Ct||lt.fog===!0&&$.fog!==V||$.numClippingPlanes!==void 0&&($.numClippingPlanes!==F.numPlanes||$.numIntersection!==F.numIntersection)||$.vertexAlphas!==Pt||$.vertexTangents!==S||$.morphTargets!==C||$.morphNormals!==k||$.morphColors!==T||$.toneMapping!==at||$.morphTargetsCount!==it)&&(Tt=!0):(Tt=!0,$.__version=lt.version);let Wt=$.currentProgram;Tt===!0&&(Wt=Kt(lt,K,A));let fe=!1,pe=!1,ye=!1;const oe=Wt.getUniforms(),Jt=$.uniforms;if(ne.useProgram(Wt.program)&&(fe=!0,pe=!0,ye=!0),lt.id!==P&&(P=lt.id,pe=!0),fe||x!==w){ne.buffers.depth.getReversed()?(yt.copy(w.projectionMatrix),pg(yt),mg(yt),oe.setValue(O,"projectionMatrix",yt)):oe.setValue(O,"projectionMatrix",w.projectionMatrix),oe.setValue(O,"viewMatrix",w.matrixWorldInverse);const Oe=oe.map.cameraPosition;Oe!==void 0&&Oe.setValue(O,Nt.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&oe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&oe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,pe=!0,ye=!0)}if(A.isSkinnedMesh){oe.setOptional(O,A,"bindMatrix"),oe.setOptional(O,A,"bindMatrixInverse");const me=A.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),oe.setValue(O,"boneTexture",me.boneTexture,E))}A.isBatchedMesh&&(oe.setOptional(O,A,"batchingTexture"),oe.setValue(O,"batchingTexture",A._matricesTexture,E),oe.setOptional(O,A,"batchingIdTexture"),oe.setValue(O,"batchingIdTexture",A._indirectTexture,E),oe.setOptional(O,A,"batchingColorTexture"),A._colorsTexture!==null&&oe.setValue(O,"batchingColorTexture",A._colorsTexture,E));const ge=xt.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&At.update(A,xt,Wt),(pe||$.receiveShadow!==A.receiveShadow)&&($.receiveShadow=A.receiveShadow,oe.setValue(O,"receiveShadow",A.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Jt.envMap.value=Ct,Jt.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&K.environment!==null&&(Jt.envMapIntensity.value=K.environmentIntensity),pe&&(oe.setValue(O,"toneMappingExposure",y.toneMappingExposure),$.needsLights&&Ae(Jt,ye),V&&lt.fog===!0&&ht.refreshFogUniforms(Jt,V),ht.refreshMaterialUniforms(Jt,lt,tt,Lt,p.state.transmissionRenderTarget[w.id]),Xc.upload(O,Qt($),Jt,E)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Xc.upload(O,Qt($),Jt,E),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&oe.setValue(O,"center",A.center),oe.setValue(O,"modelViewMatrix",A.modelViewMatrix),oe.setValue(O,"normalMatrix",A.normalMatrix),oe.setValue(O,"modelMatrix",A.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const me=lt.uniformsGroups;for(let Oe=0,Le=me.length;Oe<Le;Oe++){const sn=me[Oe];I.update(sn,Wt),I.bind(sn,Wt)}}return Wt}function Ae(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function le(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,K,xt){ft.get(w.texture).__webglTexture=K,ft.get(w.depthTexture).__webglTexture=xt;const lt=ft.get(w);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=xt===void 0,lt.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,K){const xt=ft.get(w);xt.__webglFramebuffer=K,xt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(w,K=0,xt=0){N=w,U=K,D=xt;let lt=!0,A=null,V=!1,ct=!1;if(w){const Ct=ft.get(w);if(Ct.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(O.FRAMEBUFFER,null),lt=!1;else if(Ct.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Ct.__hasExternalTextures)E.rebindTextures(w,ft.get(w.texture).__webglTexture,ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const C=w.depthTexture;if(Ct.__boundDepthTexture!==C){if(C!==null&&ft.has(C)&&(w.width!==C.image.width||w.height!==C.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);const S=ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(S[K])?A=S[K][xt]:A=S[K],V=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?A=ft.get(w).__webglMultisampledFramebuffer:Array.isArray(S)?A=S[xt]:A=S,z.copy(w.viewport),B.copy(w.scissor),et=w.scissorTest}else z.copy(ue).multiplyScalar(tt).floor(),B.copy(ae).multiplyScalar(tt).floor(),et=mt;if(ne.bindFramebuffer(O.FRAMEBUFFER,A)&&lt&&ne.drawBuffers(w,A),ne.viewport(z),ne.scissor(B),ne.setScissorTest(et),V){const Ct=ft.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,xt)}else if(ct){const Ct=ft.get(w.texture),Pt=K||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,xt||0,Pt)}P=-1},this.readRenderTargetPixels=function(w,K,xt,lt,A,V,ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){ne.bindFramebuffer(O.FRAMEBUFFER,dt);try{const Ct=w.texture,Pt=Ct.format,S=Ct.type;if(!ce.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(S)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-lt&&xt>=0&&xt<=w.height-A&&O.readPixels(K,xt,lt,A,zt.convert(Pt),zt.convert(S),V)}finally{const Ct=N!==null?ft.get(N).__webglFramebuffer:null;ne.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,K,xt,lt,A,V,ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){const Ct=w.texture,Pt=Ct.format,S=Ct.type;if(!ce.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(S))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=w.width-lt&&xt>=0&&xt<=w.height-A){ne.bindFramebuffer(O.FRAMEBUFFER,dt);const C=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,C),O.bufferData(O.PIXEL_PACK_BUFFER,V.byteLength,O.STREAM_READ),O.readPixels(K,xt,lt,A,zt.convert(Pt),zt.convert(S),0);const k=N!==null?ft.get(N).__webglFramebuffer:null;ne.bindFramebuffer(O.FRAMEBUFFER,k);const T=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dg(O,T,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,C),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,V),O.deleteBuffer(C),O.deleteSync(T),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,K=null,xt=0){w.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1]);const lt=Math.pow(2,-xt),A=Math.floor(w.image.width*lt),V=Math.floor(w.image.height*lt),ct=K!==null?K.x:0,dt=K!==null?K.y:0;E.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,xt,0,0,ct,dt,A,V),ne.unbindTexture()},this.copyTextureToTexture=function(w,K,xt=null,lt=null,A=0){w.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,w=arguments[1],K=arguments[2],A=arguments[3]||0,xt=null);let V,ct,dt,Ct,Pt,S,C,k,T;const at=w.isCompressedTexture?w.mipmaps[A]:w.image;xt!==null?(V=xt.max.x-xt.min.x,ct=xt.max.y-xt.min.y,dt=xt.isBox3?xt.max.z-xt.min.z:1,Ct=xt.min.x,Pt=xt.min.y,S=xt.isBox3?xt.min.z:0):(V=at.width,ct=at.height,dt=at.depth||1,Ct=0,Pt=0,S=0),lt!==null?(C=lt.x,k=lt.y,T=lt.z):(C=0,k=0,T=0);const Z=zt.convert(K.format),it=zt.convert(K.type);let $;K.isData3DTexture?(E.setTexture3D(K,0),$=O.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(E.setTexture2DArray(K,0),$=O.TEXTURE_2D_ARRAY):(E.setTexture2D(K,0),$=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment);const Gt=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wt=O.getParameter(O.UNPACK_SKIP_PIXELS),fe=O.getParameter(O.UNPACK_SKIP_ROWS),pe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S);const ye=w.isDataArrayTexture||w.isData3DTexture,oe=K.isDataArrayTexture||K.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Jt=ft.get(w),ge=ft.get(K),me=ft.get(Jt.__renderTarget),Oe=ft.get(ge.__renderTarget);ne.bindFramebuffer(O.READ_FRAMEBUFFER,me.__webglFramebuffer),ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<dt;Le++)ye&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.get(w).__webglTexture,A,S+Le),w.isDepthTexture?(oe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.get(K).__webglTexture,A,T+Le),O.blitFramebuffer(Ct,Pt,V,ct,C,k,V,ct,O.DEPTH_BUFFER_BIT,O.NEAREST)):oe?O.copyTexSubImage3D($,A,C,k,T+Le,Ct,Pt,V,ct):O.copyTexSubImage2D($,A,C,k,T+Le,Ct,Pt,V,ct);ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?O.texSubImage3D($,A,C,k,T,V,ct,dt,Z,it,at.data):K.isCompressedArrayTexture?O.compressedTexSubImage3D($,A,C,k,T,V,ct,dt,Z,at.data):O.texSubImage3D($,A,C,k,T,V,ct,dt,Z,it,at):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,A,C,k,V,ct,Z,it,at.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,A,C,k,at.width,at.height,Z,at.data):O.texSubImage2D(O.TEXTURE_2D,A,C,k,V,ct,Z,it,at);O.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wt),O.pixelStorei(O.UNPACK_SKIP_ROWS,fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pe),A===0&&K.generateMipmaps&&O.generateMipmap($),ne.unbindTexture()},this.copyTextureToTexture3D=function(w,K,xt=null,lt=null,A=0){return w.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),xt=arguments[0]||null,lt=arguments[1]||null,w=arguments[2],K=arguments[3],A=arguments[4]||0),xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,K,xt,lt,A)},this.initRenderTarget=function(w){ft.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),ne.unbindTexture()},this.resetState=function(){U=0,D=0,N=null,ne.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Je._getDrawingBufferColorSpace(t),e.unpackColorSpace=Je._getUnpackColorSpace()}}class ju{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new ju(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $a extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class b2{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=ws()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ws()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ws()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mi=new L;class al{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=os(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=os(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=os(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=os(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),o=un(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new al(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ca extends $r{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let po;const ra=new L,mo=new L,go=new L,vo=new qt,oa=new qt,dp=new Ge,yc=new L,aa=new L,Mc=new L,m0=new qt,fh=new qt,g0=new qt;class qc extends Mn{constructor(t=new Ca){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new nn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new b2(e,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new al(n,3,0,!1)),po.setAttribute("uv",new al(n,2,3,!1))}this.geometry=po,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),dp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const a=this.center;bc(yc.set(-.5,-.5,0),go,a,mo,s,o),bc(aa.set(.5,-.5,0),go,a,mo,s,o),bc(Mc.set(.5,.5,0),go,a,mo,s,o),m0.set(0,0),fh.set(1,0),g0.set(1,1);let c=t.ray.intersectTriangle(yc,aa,Mc,!1,ra);if(c===null&&(bc(aa.set(-.5,.5,0),go,a,mo,s,o),fh.set(0,1),c=t.ray.intersectTriangle(yc,Mc,aa,!1,ra),c===null))return;const l=t.ray.origin.distanceTo(ra);l<t.near||l>t.far||e.push({distance:l,point:ra.clone(),uv:Xi.getInterpolation(ra,yc,aa,Mc,m0,fh,g0,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function bc(i,t,e,n,s,o){vo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(oa.x=o*vo.x-s*vo.y,oa.y=s*vo.x+o*vo.y):oa.copy(vo),i.copy(t),i.x+=oa.x,i.y+=oa.y,i.applyMatrix4(dp)}class Zu extends hi{constructor(t=null,e=1,n=1,s,o,a,c,l,h=bi,r=bi,u,f){super(null,a,c,l,h,r,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii extends Nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xo=new Ge,v0=new Ge,Sc=[],x0=new Kr,S2=new Ge,ca=new be,la=new Zo;class Su extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,S2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),x0.copy(t.boundingBox).applyMatrix4(xo),this.boundingBox.union(x0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),la.copy(t.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(la)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let c=0;c<n.length;c++)n[c]=s[a+c]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(n),t.ray.intersectsSphere(la)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,xo),v0.multiplyMatrices(n,xo),ca.matrixWorld=v0,ca.raycast(t,Sc);for(let a=0,c=Sc.length;a<c;a++){const l=Sc[a];l.instanceId=o,l.object=this,e.push(l)}Sc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zu(new Float32Array(s*this.count),s,this.count,Gu,Ss));const o=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const c=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=c,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pp extends $r{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _0=new Ge,wu=new Zd,wc=new Zo,Tc=new L;class w2 extends Mn{constructor(t=new nn,e=new pp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),wc.radius+=o,t.ray.intersectsSphere(wc)===!1)return;_0.copy(s).invert(),wu.copy(t.ray).applyMatrix4(_0);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,g=d;v<g;v++){const m=h.getX(v);Tc.fromBufferAttribute(u,m),y0(Tc,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,g=d;v<g;v++)Tc.fromBufferAttribute(u,v),y0(Tc,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function y0(i,t,e,n,s,o,a){const c=wu.distanceSqToPoint(i);if(c<e){const l=new L;wu.closestPointToPoint(i,l),l.applyMatrix4(n);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Al extends hi{constructor(t,e,n,s,o,a,c,l,h){super(t,e,n,s,o,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class As{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let c=0,l=o-1,h;for(;c<=l;)if(s=Math.floor(c+(l-c)/2),h=n[s]-a,h<0)c=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(o-1);const r=n[s],f=n[s+1]-r,d=(a-r)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),c=this.getPoint(o),l=e||(a.isVector2?new qt:new L);return l.copy(c).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],o=[],a=[],c=new L,l=new Ge;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new L)}o[0]=new L,a[0]=new L;let h=Number.MAX_VALUE;const r=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);r<=h&&(h=r,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],c),a[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),a[d]=a[d-1].clone(),c.crossVectors(s[d-1],s[d]),c.length()>Number.EPSILON){c.normalize();const v=Math.acos(Vn(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(c,v))}a[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Vn(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(c.crossVectors(o[0],o[t]))>0&&(d=-d);for(let v=1;v<=t;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ju extends As{constructor(t=0,e=0,n=1,s=1,o=0,a=Math.PI*2,c=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=c,this.aRotation=l}getPoint(t,e=new qt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const c=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const r=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=h-this.aY;l=f*r-d*u+this.aX,h=f*u+d*r+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class T2 extends Ju{constructor(t,e,n,s,o,a){super(t,e,n,n,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qu(){let i=0,t=0,e=0,n=0;function s(o,a,c,l){i=o,t=c,e=-3*o+3*a-2*c-l,n=2*o-2*a+c+l}return{initCatmullRom:function(o,a,c,l,h){s(a,c,h*(c-o),h*(l-a))},initNonuniformCatmullRom:function(o,a,c,l,h,r,u){let f=(a-o)/h-(c-o)/(h+r)+(c-a)/r,d=(c-a)/r-(l-a)/(r+u)+(l-c)/u;f*=r,d*=r,s(a,c,f,d)},calc:function(o){const a=o*o,c=a*o;return i+t*o+e*a+n*c}}}const Ec=new L,dh=new Qu,ph=new Qu,mh=new Qu;class rr extends As{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let c=Math.floor(a),l=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:l===0&&c===o-1&&(c=o-2,l=1);let h,r;this.closed||c>0?h=s[(c-1)%o]:(Ec.subVectors(s[0],s[1]).add(s[0]),h=Ec);const u=s[c%o],f=s[(c+1)%o];if(this.closed||c+2<o?r=s[(c+2)%o]:(Ec.subVectors(s[o-1],s[o-2]).add(s[o-1]),r=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(r),d);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),dh.initNonuniformCatmullRom(h.x,u.x,f.x,r.x,v,g,m),ph.initNonuniformCatmullRom(h.y,u.y,f.y,r.y,v,g,m),mh.initNonuniformCatmullRom(h.z,u.z,f.z,r.z,v,g,m)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(h.x,u.x,f.x,r.x,this.tension),ph.initCatmullRom(h.y,u.y,f.y,r.y,this.tension),mh.initCatmullRom(h.z,u.z,f.z,r.z,this.tension));return n.set(dh.calc(l),ph.calc(l),mh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function M0(i,t,e,n,s){const o=(n-t)*.5,a=(s-e)*.5,c=i*i,l=i*c;return(2*e-2*n+o+a)*l+(-3*e+3*n-2*o-a)*c+o*i+e}function E2(i,t){const e=1-i;return e*e*t}function A2(i,t){return 2*(1-i)*i*t}function C2(i,t){return i*i*t}function Ra(i,t,e,n){return E2(i,t)+A2(i,e)+C2(i,n)}function R2(i,t){const e=1-i;return e*e*e*t}function P2(i,t){const e=1-i;return 3*e*e*i*t}function L2(i,t){return 3*(1-i)*i*i*t}function D2(i,t){return i*i*i*t}function Pa(i,t,e,n,s){return R2(i,t)+P2(i,e)+L2(i,n)+D2(i,s)}class mp extends As{constructor(t=new qt,e=new qt,n=new qt,s=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new qt){const n=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return n.set(Pa(t,s.x,o.x,a.x,c.x),Pa(t,s.y,o.y,a.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class I2 extends As{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return n.set(Pa(t,s.x,o.x,a.x,c.x),Pa(t,s.y,o.y,a.y,c.y),Pa(t,s.z,o.z,a.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gp extends As{constructor(t=new qt,e=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new qt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new qt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class U2 extends As{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends As{constructor(t=new qt,e=new qt,n=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new qt){const n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(Ra(t,s.x,o.x,a.x),Ra(t,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends As{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(Ra(t,s.x,o.x,a.x),Ra(t,s.y,o.y,a.y),Ra(t,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _p extends As{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new qt){const n=e,s=this.points,o=(s.length-1)*t,a=Math.floor(o),c=o-a,l=s[a===0?a:a-1],h=s[a],r=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(M0(c,l.x,h.x,r.x,u.x),M0(c,l.y,h.y,r.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new qt().fromArray(s))}return this}}var cl=Object.freeze({__proto__:null,ArcCurve:T2,CatmullRomCurve3:rr,CubicBezierCurve:mp,CubicBezierCurve3:I2,EllipseCurve:Ju,LineCurve:gp,LineCurve3:U2,QuadraticBezierCurve:vp,QuadraticBezierCurve3:xp,SplineCurve:_p});class F2 extends As{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const a=s[o]-n,c=this.curves[o],l=c.getLength(),h=l===0?0:1-a/l;return c.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],c=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(c);for(let h=0;h<l.length;h++){const r=l[h];n&&n.equals(r)||(e.push(r),n=r)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}}class b0 extends F2{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gp(this.currentPoint.clone(),new qt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new vp(this.currentPoint.clone(),new qt(t,e),new qt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,a){const c=new mp(this.currentPoint.clone(),new qt(t,e),new qt(n,s),new qt(o,a));return this.curves.push(c),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _p(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+c,e+l,n,s,o,a),this}absarc(t,e,n,s,o,a){return this.absellipse(t,e,n,n,s,o,a),this}ellipse(t,e,n,s,o,a,c,l){const h=this.currentPoint.x,r=this.currentPoint.y;return this.absellipse(t+h,e+r,n,s,o,a,c,l),this}absellipse(t,e,n,s,o,a,c,l){const h=new Ju(t,e,n,s,o,a,c,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const r=h.getPoint(1);return this.currentPoint.copy(r),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ro extends nn{constructor(t=[new qt(0,-.5),new qt(.5,0),new qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Vn(s,0,Math.PI*2);const o=[],a=[],c=[],l=[],h=[],r=1/e,u=new L,f=new qt,d=new L,v=new L,g=new L;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(v)}for(let _=0;_<=e;_++){const M=n+_*r*s,y=Math.sin(M),R=Math.cos(M);for(let U=0;U<=t.length-1;U++){u.x=t[U].x*y,u.y=t[U].y,u.z=t[U].x*R,a.push(u.x,u.y,u.z),f.x=_/e,f.y=U/(t.length-1),c.push(f.x,f.y);const D=l[3*U+0]*y,N=l[3*U+1],P=l[3*U+0]*R;h.push(D,N,P)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){const y=M+_*t.length,R=y,U=y+t.length,D=y+t.length+1,N=y+1;o.push(R,U,N),o.push(D,N,U)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(c,2)),this.setAttribute("normal",new Ee(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.points,t.segments,t.phiStart,t.phiLength)}}class as extends nn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],c=[],l=[],h=new L,r=new qt;a.push(0,0,0),c.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),c.push(0,0,1),r.x=(a[f]/t+1)/2,r.y=(a[f+1]/t+1)/2,l.push(r.x,r.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xn extends nn{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:l};const h=this;s=Math.floor(s),o=Math.floor(o);const r=[],u=[],f=[],d=[];let v=0;const g=[],m=n/2;let p=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(r),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function _(){const y=new L,R=new L;let U=0;const D=(e-t)/n;for(let N=0;N<=o;N++){const P=[],x=N/o,z=x*(e-t)+t;for(let B=0;B<=s;B++){const et=B/s,vt=et*l+c,wt=Math.sin(vt),pt=Math.cos(vt);R.x=z*wt,R.y=-x*n+m,R.z=z*pt,u.push(R.x,R.y,R.z),y.set(wt,D,pt).normalize(),f.push(y.x,y.y,y.z),d.push(et,1-x),P.push(v++)}g.push(P)}for(let N=0;N<s;N++)for(let P=0;P<o;P++){const x=g[P][N],z=g[P+1][N],B=g[P+1][N+1],et=g[P][N+1];(t>0||P!==0)&&(r.push(x,z,et),U+=3),(e>0||P!==o-1)&&(r.push(z,B,et),U+=3)}h.addGroup(p,U,0),p+=U}function M(y){const R=v,U=new qt,D=new L;let N=0;const P=y===!0?t:e,x=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),v++;const z=v;for(let B=0;B<=s;B++){const vt=B/s*l+c,wt=Math.cos(vt),pt=Math.sin(vt);D.x=P*pt,D.y=m*x,D.z=P*wt,u.push(D.x,D.y,D.z),f.push(0,x,0),U.x=wt*.5+.5,U.y=pt*.5*x+.5,d.push(U.x,U.y),v++}for(let B=0;B<s;B++){const et=R+B,vt=z+B;y===!0?r.push(vt,vt+1,et):r.push(vt+1,vt,et),N+=3}h.addGroup(p,N,y===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends b0{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new b0().fromJSON(s))}return this}}const N2={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=yp(i,0,s,e,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,r,u,f,d;if(n&&(o=H2(i,t,o,e)),i.length>80*e){c=h=i[0],l=r=i[1];for(let v=e;v<s;v+=e)u=i[v],f=i[v+1],u<c&&(c=u),f<l&&(l=f),u>h&&(h=u),f>r&&(r=f);d=Math.max(h-c,r-l),d=d!==0?32767/d:0}return ka(o,a,e,c,l,d,0),a}};function yp(i,t,e,n,s){let o,a;if(s===J2(i,t,e,n)>0)for(o=t;o<e;o+=n)a=S0(o,i[o],i[o+1],a);else for(o=e-n;o>=t;o-=n)a=S0(o,i[o],i[o+1],a);return a&&Cl(a,a.next)&&(Ga(a),a=a.next),a}function qr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cl(e,e.next)||Ln(e.prev,e,e.next)===0)){if(Ga(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ka(i,t,e,n,s,o,a){if(!i)return;!a&&o&&q2(i,n,s,o);let c=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,o?O2(i,n,s,o):z2(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Ga(i),i=h.next,c=h.next;continue}if(i=h,i===c){a?a===1?(i=B2(qr(i),t,e),ka(i,t,e,n,s,o,2)):a===2&&k2(i,t,e,n,s,o):ka(qr(i),t,e,n,s,o,1);break}}}function z2(i){const t=i.prev,e=i,n=i.next;if(Ln(t,e,n)>=0)return!1;const s=t.x,o=e.x,a=n.x,c=t.y,l=e.y,h=n.y,r=s<o?s<a?s:a:o<a?o:a,u=c<l?c<h?c:h:l<h?l:h,f=s>o?s>a?s:a:o>a?o:a,d=c>l?c>h?c:h:l>h?l:h;let v=n.next;for(;v!==t;){if(v.x>=r&&v.x<=f&&v.y>=u&&v.y<=d&&bo(s,c,o,l,a,h,v.x,v.y)&&Ln(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function O2(i,t,e,n){const s=i.prev,o=i,a=i.next;if(Ln(s,o,a)>=0)return!1;const c=s.x,l=o.x,h=a.x,r=s.y,u=o.y,f=a.y,d=c<l?c<h?c:h:l<h?l:h,v=r<u?r<f?r:f:u<f?u:f,g=c>l?c>h?c:h:l>h?l:h,m=r>u?r>f?r:f:u>f?u:f,p=Tu(d,v,t,e,n),_=Tu(g,m,t,e,n);let M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=_;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&bo(c,r,l,u,h,f,M.x,M.y)&&Ln(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&bo(c,r,l,u,h,f,y.x,y.y)&&Ln(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&bo(c,r,l,u,h,f,M.x,M.y)&&Ln(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&bo(c,r,l,u,h,f,y.x,y.y)&&Ln(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function B2(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Cl(s,o)&&Mp(s,n,n.next,o)&&Ha(s,o)&&Ha(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ga(n),Ga(n.next),n=i=o),n=n.next}while(n!==i);return qr(n)}function k2(i,t,e,n,s,o){let a=i;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&$2(a,c)){let l=bp(a,c);a=qr(a,a.next),l=qr(l,l.next),ka(a,t,e,n,s,o,0),ka(l,t,e,n,s,o,0);return}c=c.next}a=a.next}while(a!==i)}function H2(i,t,e,n){const s=[];let o,a,c,l,h;for(o=0,a=t.length;o<a;o++)c=t[o]*n,l=o<a-1?t[o+1]*n:i.length,h=yp(i,c,l,n,!1),h===h.next&&(h.steiner=!0),s.push(K2(h));for(s.sort(G2),o=0;o<s.length;o++)e=V2(s[o],e);return e}function G2(i,t){return i.x-t.x}function V2(i,t){const e=W2(i,t);if(!e)return t;const n=bp(e,i);return qr(n,n.next),qr(e,e.next)}function W2(i,t){let e=t,n=-1/0,s;const o=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const c=s,l=s.x,h=s.y;let r=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&bo(a<h?o:n,a,l,h,a<h?n:o,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(o-e.x),Ha(e,i)&&(u<r||u===r&&(e.x>s.x||e.x===s.x&&X2(s,e)))&&(s=e,r=u)),e=e.next;while(e!==c);return s}function X2(i,t){return Ln(i.prev,i,t.prev)<0&&Ln(t.next,i,i.next)<0}function q2(i,t,e,n){let s=i;do s.z===0&&(s.z=Tu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y2(s)}function Y2(i){let t,e,n,s,o,a,c,l,h=1;do{for(e=i,i=null,o=null,a=0;e;){for(a++,n=e,c=0,t=0;t<h&&(c++,n=n.nextZ,!!n);t++);for(l=h;c>0||l>0&&n;)c!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,c--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,h*=2}while(a>1);return i}function Tu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function K2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bo(i,t,e,n,s,o,a,c){return(s-a)*(t-c)>=(i-a)*(o-c)&&(i-a)*(n-c)>=(e-a)*(t-c)&&(e-a)*(o-c)>=(s-a)*(n-c)}function $2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!j2(i,t)&&(Ha(i,t)&&Ha(t,i)&&Z2(i,t)&&(Ln(i.prev,i,t.prev)||Ln(i,t.prev,t))||Cl(i,t)&&Ln(i.prev,i,i.next)>0&&Ln(t.prev,t,t.next)>0)}function Ln(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cl(i,t){return i.x===t.x&&i.y===t.y}function Mp(i,t,e,n){const s=Cc(Ln(i,t,e)),o=Cc(Ln(i,t,n)),a=Cc(Ln(e,n,i)),c=Cc(Ln(e,n,t));return!!(s!==o&&a!==c||s===0&&Ac(i,e,t)||o===0&&Ac(i,n,t)||a===0&&Ac(e,i,n)||c===0&&Ac(e,t,n))}function Ac(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Cc(i){return i>0?1:i<0?-1:0}function j2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ha(i,t){return Ln(i.prev,i,i.next)<0?Ln(i,t,i.next)>=0&&Ln(i,i.prev,t)>=0:Ln(i,t,i.prev)<0||Ln(i,i.next,t)<0}function Z2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bp(i,t){const e=new Eu(i.i,i.x,i.y),n=new Eu(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function S0(i,t,e,n){const s=new Eu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Eu(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J2(i,t,e,n){let s=0;for(let o=t,a=e-n;o<e;o+=n)s+=(i[a]-i[o])*(i[o+1]+i[a+1]),a=o;return s}class Ys{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ys.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];w0(t),T0(n,t);let a=t.length;e.forEach(w0);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,T0(n,e[l]);const c=N2.triangulate(n,s);for(let l=0;l<c.length;l+=3)o.push(c.slice(l,l+3));return o}}function w0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function T0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class La extends nn{constructor(t=new Ir([new qt(.5,.5),new qt(-.5,.5),new qt(-.5,-.5),new qt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let c=0,l=t.length;c<l;c++){const h=t[c];a(h)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2)),this.computeVertexNormals();function a(c){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,r=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Q2;let M,y=!1,R,U,D,N;p&&(M=p.getSpacedPoints(r),y=!0,f=!1,R=p.computeFrenetFrames(r,!1),U=new L,D=new L,N=new L),f||(m=0,d=0,v=0,g=0);const P=c.extractPoints(h);let x=P.shape;const z=P.holes;if(!Ys.isClockWise(x)){x=x.reverse();for(let Rt=0,Bt=z.length;Rt<Bt;Rt++){const O=z[Rt];Ys.isClockWise(O)&&(z[Rt]=O.reverse())}}const et=Ys.triangulateShape(x,z),vt=x;for(let Rt=0,Bt=z.length;Rt<Bt;Rt++){const O=z[Rt];x=x.concat(O)}function wt(Rt,Bt,O){return Bt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Rt.clone().addScaledVector(Bt,O)}const pt=x.length,Lt=et.length;function tt(Rt,Bt,O){let he,Vt,ce;const ne=Rt.x-Bt.x,rt=Rt.y-Bt.y,ft=O.x-Rt.x,E=O.y-Rt.y,b=ne*ne+rt*rt,H=ne*E-rt*ft;if(Math.abs(H)>Number.EPSILON){const q=Math.sqrt(b),j=Math.sqrt(ft*ft+E*E),G=Bt.x-rt/q,ut=Bt.y+ne/q,ht=O.x-E/j,st=O.y+ft/j,_t=((ht-G)*E-(st-ut)*ft)/(ne*E-rt*ft);he=G+ne*_t-Rt.x,Vt=ut+rt*_t-Rt.y;const F=he*he+Vt*Vt;if(F<=2)return new qt(he,Vt);ce=Math.sqrt(F/2)}else{let q=!1;ne>Number.EPSILON?ft>Number.EPSILON&&(q=!0):ne<-Number.EPSILON?ft<-Number.EPSILON&&(q=!0):Math.sign(rt)===Math.sign(E)&&(q=!0),q?(he=-rt,Vt=ne,ce=Math.sqrt(b)):(he=ne,Vt=rt,ce=Math.sqrt(b/2))}return new qt(he/ce,Vt/ce)}const Ht=[];for(let Rt=0,Bt=vt.length,O=Bt-1,he=Rt+1;Rt<Bt;Rt++,O++,he++)O===Bt&&(O=0),he===Bt&&(he=0),Ht[Rt]=tt(vt[Rt],vt[O],vt[he]);const se=[];let ue,ae=Ht.concat();for(let Rt=0,Bt=z.length;Rt<Bt;Rt++){const O=z[Rt];ue=[];for(let he=0,Vt=O.length,ce=Vt-1,ne=he+1;he<Vt;he++,ce++,ne++)ce===Vt&&(ce=0),ne===Vt&&(ne=0),ue[he]=tt(O[he],O[ce],O[ne]);se.push(ue),ae=ae.concat(ue)}for(let Rt=0;Rt<m;Rt++){const Bt=Rt/m,O=d*Math.cos(Bt*Math.PI/2),he=v*Math.sin(Bt*Math.PI/2)+g;for(let Vt=0,ce=vt.length;Vt<ce;Vt++){const ne=wt(vt[Vt],Ht[Vt],he);yt(ne.x,ne.y,-O)}for(let Vt=0,ce=z.length;Vt<ce;Vt++){const ne=z[Vt];ue=se[Vt];for(let rt=0,ft=ne.length;rt<ft;rt++){const E=wt(ne[rt],ue[rt],he);yt(E.x,E.y,-O)}}}const mt=v+g;for(let Rt=0;Rt<pt;Rt++){const Bt=f?wt(x[Rt],ae[Rt],mt):x[Rt];y?(D.copy(R.normals[0]).multiplyScalar(Bt.x),U.copy(R.binormals[0]).multiplyScalar(Bt.y),N.copy(M[0]).add(D).add(U),yt(N.x,N.y,N.z)):yt(Bt.x,Bt.y,0)}for(let Rt=1;Rt<=r;Rt++)for(let Bt=0;Bt<pt;Bt++){const O=f?wt(x[Bt],ae[Bt],mt):x[Bt];y?(D.copy(R.normals[Rt]).multiplyScalar(O.x),U.copy(R.binormals[Rt]).multiplyScalar(O.y),N.copy(M[Rt]).add(D).add(U),yt(N.x,N.y,N.z)):yt(O.x,O.y,u/r*Rt)}for(let Rt=m-1;Rt>=0;Rt--){const Bt=Rt/m,O=d*Math.cos(Bt*Math.PI/2),he=v*Math.sin(Bt*Math.PI/2)+g;for(let Vt=0,ce=vt.length;Vt<ce;Vt++){const ne=wt(vt[Vt],Ht[Vt],he);yt(ne.x,ne.y,u+O)}for(let Vt=0,ce=z.length;Vt<ce;Vt++){const ne=z[Vt];ue=se[Vt];for(let rt=0,ft=ne.length;rt<ft;rt++){const E=wt(ne[rt],ue[rt],he);y?yt(E.x,E.y+M[r-1].y,M[r-1].x+O):yt(E.x,E.y,u+O)}}}X(),W();function X(){const Rt=s.length/3;if(f){let Bt=0,O=pt*Bt;for(let he=0;he<Lt;he++){const Vt=et[he];Ot(Vt[2]+O,Vt[1]+O,Vt[0]+O)}Bt=r+m*2,O=pt*Bt;for(let he=0;he<Lt;he++){const Vt=et[he];Ot(Vt[0]+O,Vt[1]+O,Vt[2]+O)}}else{for(let Bt=0;Bt<Lt;Bt++){const O=et[Bt];Ot(O[2],O[1],O[0])}for(let Bt=0;Bt<Lt;Bt++){const O=et[Bt];Ot(O[0]+pt*r,O[1]+pt*r,O[2]+pt*r)}}n.addGroup(Rt,s.length/3-Rt,0)}function W(){const Rt=s.length/3;let Bt=0;Dt(vt,Bt),Bt+=vt.length;for(let O=0,he=z.length;O<he;O++){const Vt=z[O];Dt(Vt,Bt),Bt+=Vt.length}n.addGroup(Rt,s.length/3-Rt,1)}function Dt(Rt,Bt){let O=Rt.length;for(;--O>=0;){const he=O;let Vt=O-1;Vt<0&&(Vt=Rt.length-1);for(let ce=0,ne=r+m*2;ce<ne;ce++){const rt=pt*ce,ft=pt*(ce+1),E=Bt+he+rt,b=Bt+Vt+rt,H=Bt+Vt+ft,q=Bt+he+ft;Nt(E,b,H,q)}}}function yt(Rt,Bt,O){l.push(Rt),l.push(Bt),l.push(O)}function Ot(Rt,Bt,O){jt(Rt),jt(Bt),jt(O);const he=s.length/3,Vt=_.generateTopUV(n,s,he-3,he-2,he-1);re(Vt[0]),re(Vt[1]),re(Vt[2])}function Nt(Rt,Bt,O,he){jt(Rt),jt(Bt),jt(he),jt(Bt),jt(O),jt(he);const Vt=s.length/3,ce=_.generateSideWallUV(n,s,Vt-6,Vt-3,Vt-2,Vt-1);re(ce[0]),re(ce[1]),re(ce[3]),re(ce[1]),re(ce[2]),re(ce[3])}function jt(Rt){s.push(l[Rt*3+0]),s.push(l[Rt*3+1]),s.push(l[Rt*3+2])}function re(Rt){o.push(Rt.x),o.push(Rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ty(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const c=e[t.shapes[o]];n.push(c)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new La(n,t.options)}}const Q2={generateTopUV:function(i,t,e,n,s){const o=t[e*3],a=t[e*3+1],c=t[n*3],l=t[n*3+1],h=t[s*3],r=t[s*3+1];return[new qt(o,a),new qt(c,l),new qt(h,r)]},generateSideWallUV:function(i,t,e,n,s,o){const a=t[e*3],c=t[e*3+1],l=t[e*3+2],h=t[n*3],r=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],v=t[s*3+2],g=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(c-r)<Math.abs(a-h)?[new qt(a,1-l),new qt(h,1-u),new qt(f,1-v),new qt(g,1-p)]:[new qt(c,1-l),new qt(r,1-u),new qt(d,1-v),new qt(m,1-p)]}};function ty(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qo extends nn{constructor(t=.5,e=1,n=32,s=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const c=[],l=[],h=[],r=[];let u=t;const f=(e-t)/s,d=new L,v=new qt;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=o+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,r.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const _=p+m,M=_,y=_+n+1,R=_+n+2,U=_+1;c.push(M,y,U),c.push(y,R,U)}}this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(r,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ll extends nn{constructor(t=new Ir([new qt(0,.5),new qt(-.5,-.5),new qt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],a=[];let c=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let r=0;r<t.length;r++)h(t[r]),this.addGroup(c,l,r),c+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2));function h(r){const u=s.length/3,f=r.extractPoints(e);let d=f.shape;const v=f.holes;Ys.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const _=v[m];Ys.isClockWise(_)===!0&&(v[m]=_.reverse())}const g=Ys.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const _=v[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];s.push(_.x,_.y,0),o.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=g.length;m<p;m++){const _=g[m],M=_[0]+u,y=_[1]+u,R=_[2]+u;n.push(M,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ey(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}return new ll(n,t.curveSegments)}}function ey(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Go extends nn{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+c,Math.PI);let h=0;const r=[],u=new L,f=new L,d=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],M=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const U=R/e;u.x=-t*Math.cos(s+U*o)*Math.sin(a+M*c),u.y=t*Math.cos(a+M*c),u.z=t*Math.sin(s+U*o)*Math.sin(a+M*c),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(U+y,1-M),_.push(h++)}r.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const M=r[p][_+1],y=r[p][_],R=r[p+1][_],U=r[p+1][_+1];(p!==0||a>0)&&d.push(M,y,U),(p!==n-1||l<Math.PI)&&d.push(y,R,U)}this.setIndex(d),this.setAttribute("position",new Ee(v,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ms extends nn{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const a=[],c=[],l=[],h=[],r=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const g=v/s*o,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),r.x=t*Math.cos(g),r.y=t*Math.sin(g),f.subVectors(u,r).normalize(),l.push(f.x,f.y,f.z),h.push(v/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const g=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,_=(s+1)*d+v;a.push(g,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zs extends nn{constructor(t=new xp(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new L,l=new L,h=new qt;let r=new L;const u=[],f=[],d=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function g(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),_(),p()}function m(M){r=t.getPointAt(M/e,r);const y=a.normals[M],R=a.binormals[M];for(let U=0;U<=s;U++){const D=U/s*Math.PI*2,N=Math.sin(D),P=-Math.cos(D);l.x=P*y.x+N*R.x,l.y=P*y.y+N*R.y,l.z=P*y.z+N*R.z,l.normalize(),f.push(l.x,l.y,l.z),c.x=r.x+n*l.x,c.y=r.y+n*l.y,c.z=r.z+n*l.z,u.push(c.x,c.y,c.z)}}function p(){for(let M=1;M<=e;M++)for(let y=1;y<=s;y++){const R=(s+1)*(M-1)+(y-1),U=(s+1)*M+(y-1),D=(s+1)*M+y,N=(s+1)*(M-1)+y;v.push(R,U,N),v.push(U,D,N)}}function _(){for(let M=0;M<=e;M++)for(let y=0;y<=s;y++)h.x=M/e,h.y=y/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new zs(new cl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Tn extends $r{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ei extends Tn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rl extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ny extends Rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gh=new Ge,E0=new L,A0=new L;class tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;E0.setFromMatrixPosition(t.matrixWorld),e.position.copy(E0),A0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(A0),e.updateMatrixWorld(),gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iy extends tf{constructor(){super(new li(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ko*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sp extends Rl{constructor(t,e,n=0,s=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=n,this.angle=s,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new iy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const C0=new Ge,ha=new L,vh=new L;class sy extends tf{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ha.setFromMatrixPosition(t.matrixWorld),n.position.copy(ha),vh.copy(n.position),vh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vh),n.updateMatrixWorld(),s.makeTranslation(-ha.x,-ha.y,-ha.z),C0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C0)}}class R0 extends Rl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ry extends tf{constructor(){super(new Ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oy extends Rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new ry}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ef extends nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ay{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=P0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=P0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function P0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ou);class Pl extends be{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new li;const n=this,s=e.color!==void 0?new Xt(e.color):new Xt(8355711),o=e.textureWidth||512,a=e.textureHeight||512,c=e.clipBias||0,l=e.shader||Pl.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,r=new ar,u=new L,f=new L,d=new L,v=new Ge,g=new L(0,0,-1),m=new en,p=new L,_=new L,M=new en,y=new Ge,R=this.camera,U=new Fi(o,a,{samples:h,type:Ki}),D=new Ze({name:l.name!==void 0?l.name:"unspecified",uniforms:us.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});D.uniforms.tDiffuse.value=U.texture,D.uniforms.color.value=s,D.uniforms.textureMatrix.value=y,this.material=D,this.onBeforeRender=function(N,P,x){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(x.matrixWorld),v.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),v.extractRotation(x.matrixWorld),g.set(0,0,-1),g.applyMatrix4(v),g.add(d),_.subVectors(f,g),_.reflect(u).negate(),_.add(f),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(v),R.up.reflect(u),R.lookAt(_),R.far=x.far,R.updateMatrixWorld(),R.projectionMatrix.copy(x.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(R.projectionMatrix),y.multiply(R.matrixWorldInverse),y.multiply(n.matrixWorld),r.setFromNormalAndCoplanarPoint(u,f),r.applyMatrix4(R.matrixWorldInverse),m.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const z=R.projectionMatrix;M.x=(Math.sign(m.x)+z.elements[8])/z.elements[0],M.y=(Math.sign(m.y)+z.elements[9])/z.elements[5],M.z=-1,M.w=(1+z.elements[10])/z.elements[14],m.multiplyScalar(2/m.dot(M)),z.elements[2]=m.x,z.elements[6]=m.y,z.elements[10]=m.z+1-c,z.elements[14]=m.w,n.visible=!1;const B=N.getRenderTarget(),et=N.xr.enabled,vt=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(U),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(P,R),N.xr.enabled=et,N.shadowMap.autoUpdate=vt,N.setRenderTarget(B);const wt=x.viewport;wt!==void 0&&N.state.viewport(wt),n.visible=!0},this.getRenderTarget=function(){return U},this.dispose=function(){U.dispose(),n.material.dispose()}}}Pl.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function So(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},c=i[0].morphTargetsRelative,l=new nn;let h=0;for(let r=0;r<i.length;++r){const u=i[r];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". Make sure all geometries have the same number of attributes."),null;if(c!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,r),h+=d}}if(e){let r=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+r);r+=i[f].attributes.position.count}l.setIndex(u)}for(const r in o){const u=L0(o[r]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" attribute."),null;l.setAttribute(r,u)}for(const r in a){const u=a[r][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[r]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<a[r].length;++g)d.push(a[r][g][f]);const v=L0(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" morphAttribute."),null;l.morphAttributes[r].push(v)}}return l}function L0(i){let t,e,n,s=-1,o=0;for(let h=0;h<i.length;++h){const r=i[h];if(t===void 0&&(t=r.array.constructor),t!==r.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=r.itemSize),e!==r.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=r.normalized),n!==r.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=r.gpuType),s!==r.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=r.count*e}const a=new t(o),c=new Nn(a,e,n);let l=0;for(let h=0;h<i.length;++h){const r=i[h];if(r.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=r.count;f<d;f++)for(let v=0;v<e;v++){const g=r.getComponent(f,v);c.setComponent(f+u,v,g)}}else a.set(r.array,l);l+=r.count*e}return s!==void 0&&(c.gpuType=s),c}function D0(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count;let a=0;const c=Object.keys(i.attributes),l={},h={},r=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let _=0,M=c.length;_<M;_++){const y=c[_],R=i.attributes[y];l[y]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const U=i.morphAttributes[y];U&&(h[y]||(h[y]=[]),U.forEach((D,N)=>{const P=new D.array.constructor(D.count*D.itemSize);h[y][N]=new D.constructor(P,D.itemSize,D.normalized)}))}const d=t*.5,v=Math.log10(1/t),g=Math.pow(10,v),m=d*g;for(let _=0;_<o;_++){const M=n?n.getX(_):_;let y="";for(let R=0,U=c.length;R<U;R++){const D=c[R],N=i.getAttribute(D),P=N.itemSize;for(let x=0;x<P;x++)y+=`${~~(N[u[x]](M)*g+m)},`}if(y in e)r.push(e[y]);else{for(let R=0,U=c.length;R<U;R++){const D=c[R],N=i.getAttribute(D),P=i.morphAttributes[D],x=N.itemSize,z=l[D],B=h[D];for(let et=0;et<x;et++){const vt=u[et],wt=f[et];if(z[wt](a,N[vt](M)),P)for(let pt=0,Lt=P.length;pt<Lt;pt++)B[pt][wt](a,P[pt][vt](M))}}e[y]=a,r.push(a),a++}}const p=i.clone();for(const _ in i.attributes){const M=l[_];if(p.setAttribute(_,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),_ in h)for(let y=0;y<h[_].length;y++){const R=h[_][y];p.morphAttributes[_][y]=new R.constructor(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(r),p}function I0(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new L,new L,new L],o=new L,a=new L,c=new L,l=new L;function h(g){const m=~~(g.x*n),p=~~(g.y*n),_=~~(g.z*n);return`${m},${p},${_}`}const r=i.index?i.toNonIndexed():i,u=r.attributes.position,f={};for(let g=0,m=u.count/3;g<m;g++){const p=3*g,_=s[0].fromBufferAttribute(u,p+0),M=s[1].fromBufferAttribute(u,p+1),y=s[2].fromBufferAttribute(u,p+2);o.subVectors(y,M),a.subVectors(_,M);const R=new L().crossVectors(o,a).normalize();for(let U=0;U<3;U++){const D=s[U],N=h(D);N in f||(f[N]=[]),f[N].push(R)}}const d=new Float32Array(u.count*3),v=new Nn(d,3,!1);for(let g=0,m=u.count/3;g<m;g++){const p=3*g,_=s[0].fromBufferAttribute(u,p+0),M=s[1].fromBufferAttribute(u,p+1),y=s[2].fromBufferAttribute(u,p+2);o.subVectors(y,M),a.subVectors(_,M),c.crossVectors(o,a).normalize();for(let R=0;R<3;R++){const U=s[R],D=h(U),N=f[D];l.set(0,0,0);for(let P=0,x=N.length;P<x;P++){const z=N[P];c.dot(z)>e&&l.add(z)}l.normalize(),v.setXYZ(p+R,l.x,l.y,l.z)}}return r.setAttribute("normal",v),r}const Ui=59/136,vn=i=>i*Ui,Hr=i=>i/Ui,pn=9.81,Va=2.23694,wp=[{id:"intro",b0:0,b1:16},{id:"launch",b0:16,b1:48},{id:"reveal",b0:48,b1:56},{id:"flip",b0:56,b1:88},{id:"build",b0:88,b1:96},{id:"mega",b0:96,b1:128},{id:"outro",b0:128,b1:136}];function Tp(i){const t=Hr(i);for(const e of wp)if(t<e.b1)return e.id;return"outro"}const Ce=(i,t,e)=>Math.max(t,Math.min(e,i)),gn=i=>(i=Ce(i,0,1),i*i*(3-2*i)),gi=(i,t)=>1-Math.exp(-i*t);function hl(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function cy(i){const t=Math.floor(i),e=i-t,n=e*e*(3-2*e);return hl(t)*(1-n)+hl(t+1)*n}const Us=i=>cy(i)*2-1,Cn=Math.PI*2,Ks=7.5,Wa=16,Ll=.81,Ep=60/Va/Ll,ly=Ep*(60/Va);function hy(i,t){return Math.min(Ep*t,ly*t/Math.max(.5,i))}function U0(i,t,e){const n=2.6*(t-i);return n>=0?Math.min(n,hy(i,e)):Math.max(n,-9.3195)}const Es=2,cs=10,Ap=27.5,nf=1.3,Cp=.3;function Rp(i,t,e,n,s){t=Math.max(.05,t);const o=-2;if(e>=o)return i.burn?Ce(s*.95/n,0,1):0;const a=((e*e-o*o)/(2*t)+s)/n;return!i.burn&&a<.86?0:(i.burn=!0,Ce(a,0,1))}const uy=i=>Es*i*i,Au=i=>2*Es*i/cs;function Pp(i,t){const e=uy(t),n=Au(t);return Math.sqrt(Math.max(1,i*i-2*pn*e))/Math.sqrt(1+n*n)}function fy(i){let t=0,e=0;const n=1/480;for(;t<cs&&e<3;)t+=Pp(i,t/cs)*n,e+=n;return e}function dy(i){let t=Es,e=i,n=0;const s={burn:!1},o=1/480;for(;n<8;){const a=e<0&&n-Cp>nf*.7?Rp(s,t,e,1.8*pn,pn):0;if(e+=(a*1.8*pn-pn)*o,t+=e*o,n+=o,t<=0&&e<0)break}return n}const ms=10,Yc=10,wo=6,zr=115*Math.PI/180,ul=60,ya=ms*Math.PI/2,Lp=wo*(zr-Math.PI/2),Kc=ya+Yc+Lp,$c=ms;function Vo(i,t={}){if(i<=0)return t.a=i,t.y=0,t.th=0,t.k=0,t;if(i<ya){const n=i/ms;return t.a=ms*Math.sin(n),t.y=ms*(1-Math.cos(n)),t.th=n,t.k=1/ms,t}if(i<ya+Yc)return t.a=ms,t.y=ms+(i-ya),t.th=Math.PI/2,t.k=0,t;const e=Math.PI/2+Math.min(i-ya-Yc,Lp)/wo;return t.a=ms+wo*(Math.sin(e)-1),t.y=ms+Yc-wo*Math.cos(e),t.th=e,t.k=1/wo,t}const Da={},Dp=Vo(Kc).y,F0=8.4,Cu=Math.sqrt(F0*F0+2*pn*Dp),Or=0,Ip=5.6*pn,Up=.2,Fp=2.6,Ia=1,Np=4.5,py=1.1,N0=1.8,my=4.5,gy=-2.6;let jc=6.6;const vy=.35,Xa=5,qa=14,sf=96.5,Zc=2*pn,z0=8.5,xh=36,Ma=26,O0=1.7*Zc,B0=.8,_h=2.9,k0=.55;function H0(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){const[n,s]=i[e-1],[o,a]=i[e];return s+(a-s)*(t-n)/Math.max(1e-6,o-n)}return i[i.length-1][1]}const xy=[[Wa,48],[18,48],[20.6,36],[22.4,33],[24.6,25.9],[Ap,25.9],[35.4,23],[37,27],[39,36],[42,47],[46,56],[48,58],[50.5,52],[54.5,30],[56.6,Cu],[ul+2,Cu]],G0=.25;function rf(i,t,e,n,s,o=Or,a=jc){const c=n*Math.sin(zr),l=-n*Math.cos(zr),h=n/wo;return{x:o,y:e,z:t,vx:0,vy:c,vz:l,ph:zr,w:h,r:0,wr:0,alpha:0,alphaR:0,thr:0,rear:0,gas:1,tau:0,ph0:zr,w0:h,Ta:c/pn,burn:!1,landed:!1,zT:s,xT:Ks,ax:0,az:0,side:0,impact:0,upright:!1,tUp:-1,yB:a,phase:"rot",..._y(e,c,a)}}function _y(i,t,e){const n=e+V0,s=(t+Math.sqrt(t*t+2*pn*Math.max(0,i-n)))/pn,o=pn*s-t,a=2*V0/(o+Np);return{yIgn:n,tIgn:s,rotT:s+.05+a}}const yy=.62,V0=5.4;function My(i,t){const e=i.rotT,n=Math.max(0,e-yy);if(t>=e)return[Cn,0];if(t<n)return[i.ph0+i.w0*t,i.w0];const s=e-n,o=(t-n)/s,a=o*o,c=a*o,l=i.ph0+i.w0*n,h=2*c-3*a+1,r=c-2*a+o,u=-2*c+3*a,f=(6*a-6*o)/s,d=(3*a-4*o+1)/s,v=(-6*a+6*o)/s;return[h*l+r*s*i.w0+u*Cn,f*l+d*s*i.w0+v*Cn]}function of(i,t,e){i.tau+=t;const n=i.thr*Ip,[s,o]=My(i,i.tau);i.alpha=Ce(160*(s-i.ph)+25*(o-i.w),-45,45),i.w+=i.alpha*t,i.ph+=i.w*t,i.alphaR=Ce(30*(0-i.r)-11*i.wr,-8,8),i.wr+=i.alphaR*t,i.r+=i.wr*t;const a=i.gas>0?Ce(e,0,1):0;i.thr+=(a-i.thr)*Math.min(1,t*14);const c=i.ph-Cn,l=i.gas>0&&c>-.45&&!i.landed?Ce(.9*(i.vz-gy),0,1):0;i.rear+=(l-i.rear)*Math.min(1,t*10);const h=i.rear*my;i.gas=Math.max(0,i.gas-(i.thr+.3*i.rear)*Up*t);let r=i.tau<Ia?Fp*gn(i.tau/.08)*gn((Ia-i.tau)/.1):0;i.tau>Ia&&(r+=Ce(.9*(i.xT-i.x)-1.8*i.vx,-1.6,1.6)),i.side=r;const u=Math.cos(i.r);return i.ax=-n*Math.sin(i.r)+r,i.az=n*u*Math.sin(i.ph)-h*Math.cos(i.ph),i.vx+=i.ax*t,i.vy+=(n*u*Math.cos(i.ph)+h*Math.sin(i.ph)-pn)*t,i.vz+=i.az*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,!i.upright&&i.tau>i.rotT-.04&&Math.abs(i.ph-Cn)<.06&&(i.upright=!0,i.tUp=i.tau,i.phase="upright"),i.y<=0&&i.vy<0&&(i.impact=-i.vy,i.y=0,i.landed=!0),i}function fl(i){Cn-i.ph;const t=i.y,e=i.vy,n=Np,s=Math.max(.3,Math.cos(i.ph-Cn)*Math.cos(i.r));if(!i.burn&&(i.tau<.9||t>i.yIgn||e>0))return 0;i.burn=!0,i.sb=!0;let o;return t>i.yB&&e<-n?(i.phase="brake",o=pn+(e*e-n*n)/(2*Math.max(.3,t-i.yB))):t>py?(i.phase="sink",o=pn+6*(-n-e)):(i.phase="flare",o=pn+Math.max(0,(e*e-N0*N0)/(2*Math.max(.04,t-.03)))),Ce(o/(Ip*s),.08,1)}const Ai=1/240,by=140,Wo=Math.ceil(by/Ai)+2,Po=new Float64Array(Wo),Jc=new Float64Array(Wo),ee={R:$c,lipAngle:zr,vIn:Cu,deckX:Or},We={s0:0,s1:0,vA:0,tLip:0,vx:0,vy:0,uLip:0,tLand:0,done:!1};let Gs=0,Xo=0;{const i=vn(Wa),t=vn(Ap),e=vn(ul);let n=0,s=0,o=1,a="drive",c=1,l=0;for(;o<Wo;o++){const g=(o-.5)*Ai;if(a==="drive"&&(g<i?s=0:!We.done&&g>t-1.5&&g+fy(s)>=t?(a="kick",We.s0=n,We.vA=s):We.done&&g>=e?(a="climb",ee.s0=n,ee.tIn=g,ee.vIn=s):s+=U0(s,H0(xy,Hr(g+G0)),c)*Ai),a==="kick"){const m=(n-We.s0)/cs;if(s=Pp(We.vA,Math.min(1,m)),n-We.s0>=cs){We.s1=We.s0+cs,We.tLip=g,We.uLip=Math.sqrt(We.vA*We.vA-2*pn*Es);const p=1/Math.sqrt(1+Au(1)**2);We.vx=We.uLip*p,We.vy=We.vx*Au(1),l=g+dy(We.vy),a="air",s=We.vx}}if(a==="air"&&(s=We.vx,g>=l&&(a="drive",We.done=!0,We.tLand=g,c=.85)),a==="climb"&&(s=Math.sqrt(Math.max(4,ee.vIn*ee.vIn-2*pn*Vo(n-ee.s0,Da).y))),n+=s*Ai,Po[o]=n,Jc[o]=s,a==="climb"&&n>=ee.s0+Kc){ee.tLip=o*Ai,ee.vLip=s;break}}ee.sLip=ee.s0+Kc,ee.height=Dp,ee.zLip=-ee.s0-Vo(Kc).a,ee.xLand=Ks;{const g=ee.vLip*Math.sin(zr)/pn;Gs=ee.tLip+g-.115,Xo=Gs+2*Ui}const h=(g,m)=>{const p=rf(ee.sLip,ee.zLip,ee.height,ee.vLip,null,Or,g);let _=ee.tLip,M=0;const y={maxY:0,tApex:_,tUpright:0,yUpright:0,tBurn:0,yBurn:0,maxTilt:0,sideInt:0,ySink:0,tSink:0};for(;!p.landed&&_<120;){const R=af(_);of(p,Ai*R,fl(p)),p.y>y.maxY&&(y.maxY=p.y,y.tApex=_),p.upright&&!y.tUpright&&(y.tUpright=_,y.yUpright=p.y),p.burn&&!y.tBurn&&(y.tBurn=_,y.yBurn=p.y),p.phase==="sink"&&!y.tSink&&(y.tSink=_,y.ySink=p.y),p.burn&&(y.maxTilt=Math.max(y.maxTilt,Math.abs(p.r),Math.abs(p.ph-Cn))),p.tau>Ia&&(y.sideInt+=Math.abs(p.side)*Ai*R),_+=Ai,M++,m&&(o++,Po[o]=ee.sLip,Jc[o]=0)}return y.t=_,y.F=p,y.n=M,y};{const g=vn(75);let m=1.6,p=12;for(let _=0;_<26;_++){const M=(m+p)/2;h(M,!1).t>g?p=M:m=M}jc=(m+p)/2}const r=h(jc,!0),u=r.F,f=r.t;ee.yB=jc,ee.tUpright=r.tUpright,ee.yUpright=r.yUpright,ee.tBurn=r.tBurn,ee.yBurn=r.yBurn,ee.tSink=r.tSink,ee.ySink=r.ySink,ee.tLand=f,ee.apexY=r.maxY,ee.tApex=r.tApex,ee.impactNominal=u.impact,ee.zLand=u.z,ee.xTouch=u.x,ee.maxTilt=r.maxTilt,ee.sideTrim=r.sideInt,ee.gasLeft=u.gas,ee.vzTouch=u.vz,ee.vxTouch=u.vx;const d=Hr(f),v=[[d,46],[d+2.2,46],[d+4,40],[Math.max(d+5,84),50],[88,52],[92,44],[95,xh],[sf,xh],[126,xh],[129,30],[132,26],[134,22],[136,6],[137.6,0],[400,0]];for(n=ee.sLip,s=Math.max(0,-u.vz),o=o+1;o<Wo;o++){const g=(o-.5)*Ai;s=Math.max(0,s+U0(s,H0(v,Hr(g+G0)),.68)*Ai),n+=s*Ai,Po[o]=n,Jc[o]=s}}function af(i){if(i<=Gs-.12||i>=Xo+.12)return 1;const t=gn((i-(Gs-.12))/.24),e=1-gn((i-(Xo-.12))/.24);return 1-(1-vy)*Math.min(t,e)}function Gi(i){if(i<=0)return 0;const t=i/Ai,e=Math.min(Wo-2,Math.floor(t)),n=t-e;return Po[e]+(Po[e+1]-Po[e])*n}function W0(i){const t=Ce(Math.round(i/Ai),0,Wo-1);return Jc[t]}const xs=i=>Gi(vn(i)),qo={semi:{length:7.1,width:2.6,height:3.85},cybertruck:{length:5.68,width:2.2,height:1.79},models:{length:4.97,width:1.96,height:1.44},model3:{length:4.72,width:1.85,height:1.44},modelx:{length:5.06,width:2,height:1.68},modely:{length:4.75,width:1.92,height:1.62}},X0=["models","cybertruck","semi","model3","modely","modelx"],Sy=We.s1,yh=xs(sf);function zp(i,t,e=1.1){const n=X0.map(c=>qo[c].width),s=n.reduce((c,l)=>c+l,0)+e*(n.length-1);let o=i-s/2;const a=[];return X0.forEach((c,l)=>{const h=n[l];a.push({kind:c,s:o+h/2,x:t,yaw:Math.PI/2*(l%2?1:-1),...qo[c]}),o+=h+e}),{vehicles:a,s0:i-s/2,s1:i+s/2}}const Op=Sy+We.vx*(We.vy/pn),Rc=zp(Op,0),Ve={beat:Ui,lateral:Ks,hangar:{s:0},startLine:{s:0},dragStrip:{s0:0,s1:150,tick:1,tickMajor:5},ramp:{s0:We.s0,s1:We.s1,height:Es,vApproach:We.vA,vLip:We.uLip},fleet:{s0:Rc.s0,s1:Rc.s1,sCenter:Op,count:Rc.vehicles.length,lineup:Rc.vehicles},landing:{s:Gi(We.tLand)},shiftBeats:[20,24,38,42,46],reveal:{s0:xs(48),s1:xs(56)},checkpoint:{s:xs(48)},flip:ee,boostArm:{s0:xs(88),s1:xs(96)},mega:{s0:yh-qa,s1:yh,height:Xa},flight:{s0:yh,s1:xs(128),floor:0,ceiling:Ma},fleetRows:[],rings:[],pylons:[],finish:{s:xs(134),beat:134}};{["cybertruck","semi","models","modelx","semi","model3","cybertruck","modely","semi","modelx"].forEach((e,n)=>{const s=102+n*2,o=xs(s),a=qo[e],c=Math.max(2,Math.floor(19/(a.length+.5))),l=c*a.length+(c-1)*.5,h=[];for(let r=0;r<c;r++)h.push({kind:e,s:o,x:Ks-l/2+a.length/2+r*(a.length+.5),yaw:(r%2?1:-1)*Math.PI/2,...a});Ve.fleetRows.push({s:o,depth:a.width,top:a.height,beat:s,kind:e,vehicles:h,finale:!1})});const t=zp(xs(123.5),Ks,.9);Ve.fleetRows.push({s:(t.s0+t.s1)/2,depth:t.s1-t.s0,top:qo.semi.height,beat:123.5,kind:"fleet",vehicles:t.vehicles,finale:!0})}Ve.flight.landStart=Ve.fleetRows[Ve.fleetRows.length-1].s+Ve.fleetRows[Ve.fleetRows.length-1].depth/2+2.2;const ti={go:vn(Wa),zero60:vn(Wa)+Ll,fleetLip:We.tLip,fleetApex:We.tLip+We.vy/pn,fleetLand:We.tLand,reveal:vn(48),flipClimb:ee.tIn,flipLip:ee.tLip,flipApex:ee.tApex,bullet:[Gs,Xo],flipUpright:ee.tUpright,flipLand:ee.tLand,megaLip:vn(sf),finale:vn(123.5),finish:vn(134)};function ur(i){const t=Ve.ramp;if(i>t.s0&&i<=t.s1){const n=(i-t.s0)/cs;return Es*n*n}const e=Ve.mega;if(i>e.s0&&i<=e.s1){const n=(i-e.s0)/qa;return Xa*n*n}return 0}function q0(i){const t=Ve.ramp,e=Ve.mega;return i>t.s0&&i<=t.s1?2*Es*(i-t.s0)/(cs*cs):i>e.s0&&i<=e.s1?2*Xa*(i-e.s0)/(qa*qa):0}function Lo(i,t=null){const e=t||{pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0};if(e.onFlip=!1,e.inLoop=!1,e.theta=0,i<ee.s0){const n=q0(i);e.pos.set(0,ur(i),-i),e.fwd.set(0,n,-1).normalize(),e.up.set(0,1,n).normalize()}else if(i<ee.sLip){const n=Vo(i-ee.s0,Da),s=n.th;e.pos.set(0,n.y,-ee.s0-n.a),e.fwd.set(0,Math.sin(s),-Math.cos(s)),e.up.set(0,Math.cos(s),Math.sin(s)),e.onFlip=!0,e.inLoop=!0,e.theta=s}else{const n=q0(i);e.pos.set(Ks,ur(i),ee.zLand-(i-ee.sLip)),e.fwd.set(0,n,-1).normalize(),e.up.set(0,1,n).normalize()}return e}const Qn={launchPerfect:.07,launchGood:.18,shiftPerfect:.055,shiftGreen:.11,beatOn:.09,cuePerfect:.12,cueGood:.32},Pc=vn(Wa),Y0=We.tLip+Cp;function K0(){return{t:0,beat:0,section:"intro",mode:"drive",s:0,v:0,vNom:0,mph:0,y:0,vy:0,airborne:!1,airTime:0,xOff:0,zOff:0,pos:new L,quat:new ni,up:new L(0,1,0),fwd:new L(0,0,-1),pitch:0,roll:0,inLoop:!1,loopTheta:0,upsideDown:!1,holding:!1,rev:0,launched:!1,launchT:0,launch:null,gear:1,shift:{nextT:0,light:0,green:!1,perfect:!1,active:!1,gear:1},perf:1,boost:0,boostV:0,thrust:0,thrustArm:0,flap:0,lastFlapT:-9,score:0,combo:0,maxCombo:0,rings:0,ringsTotal:0,perfectShifts:0,hits:0,lapTime:0,finished:!1,finishT:0,results:null,timeScale:1,shiftT:-9,shiftPerfect:!1,landT:-9,flapT:-9,cam:{shot:"",cut:!1,fov:60,shake:0,roll:0,punch:0},flash:0,aberration:0,landImpact:0,popups:[],events:[],rcs:{down:0,left:0,right:0,pitch:0},cue:null,zero60:{show:!1,t:0,frozen:!1,final:Ll},puffs:[],flips:0,fleetFlipped:0,gas:1,kickflip:null,flipAir:null,climbV:0,climbHits:0,megaFlip:null,megaLanding:!1,landGrade:"",flipGrade:"",susp:{z:0,zv:0,p:0,pv:0,r:0,rv:0,aLong:0,load:1,wheels:[0,0,0,0],bottom:0},att:{p:0,w:0,r:0,wr:0},slip:0}}const $0=[[.865,-1.36],[-.865,-1.36],[.865,1.32],[-.865,1.32]],vi={travel:.13,ext:.07,wz:10.5,zz:.3,wp:11.5,zp:.36,wr:13,zr:.4},wy=Math.atan(2*Es/cs),j0=.3,Z0=.5;function Bp(i,t){if(i<0||i>t)return[0,0];const e=gn(i/.05)*gn((t-i)/.05);return i<t/2?[(i<j0?1:Z0)*e,0]:[0,(i>t-j0?1:Z0)*e]}const Ur=680,Mh=(()=>{const i=nf,t=i/Ur,e=new Float64Array(Ur+1);let n=0,s=0;for(let a=1;a<=Ur;a++){const[c,l]=Bp((a-.5)*t,i);n+=(c-l)*t,s+=n*t,e[a]=s}const o=Cn/e[Ur];for(let a=0;a<=Ur;a++)e[a]*=o;return e})();function Ty(i,t){if(i<=0)return 0;if(i>=t)return Cn;const e=i/t*Ur,n=Math.min(Ur-1,Math.floor(e)),s=e-n;return Mh[n]+(Mh[n+1]-Mh[n])*s}const Bi={dx:3.2,dz:-6.4,h:.6},nr=(()=>{const i=Math.hypot(Bi.dx,Bi.dz);return[Bi.dx/i,Bi.dz/i]})(),Lc=(i,t,e)=>{const n=Math.min(i,t);return n-e*Math.log(Math.exp((n-i)/e)+Math.exp((n-t)/e))};function Ru(i={}){const{camera:t=null,car:e=null,world:n=null,fx:s=null,hud:o=null,audio:a=null}=i;let c=!!i.autoplay;const l=new Set,h={state:K0(),muted:!1};let r=h.state;const u=e&&(e.isObject3D?e:e.root||e.group||e.object3d||e.mesh||e.object||null);let f=0,d=0,v,g,m,p,_,M;function y(){f=0,d=0,v={pressed:!1,shiftDone:-1,beatDone:-1,lastFlap:-1,kick:!1},g={shot:"",pos:new L(0,1.4,7),look:new L(0,.6,0),up:new L(0,1,0),fov:50,shake:0,punch:0,carYs:0,initialized:!1,shotT0:0,off:new L,lookOff:new L,rel:!0,fix:null},m=-1,p=0,_=0,M={}}y();function R(S,C,k={}){const T={type:S,text:C,t:r.t,beat:r.beat,...k};r.events.push(T),r.events.length>64&&r.events.shift(),C&&S!=="flap"&&r.popups.push({text:C,t0:r.t,kind:S,style:k.style||S,sub:k.sub});for(const at of l)try{at(T)}catch(Z){console.warn("[gameplay] listener",Z)}return h.muted||D(T),T}const U={launch:S=>({name:"launch",grade:S.rating}),shift:S=>({name:"shift",grade:S.perfect?"PERFECT":"GOOD",points:S.perfect?400:200,gear:S.gear}),miss:()=>({name:"shift",grade:"LATE"}),combo:()=>({name:"combo",n:r.combo}),air:()=>({name:"jump"}),land:S=>[{name:"land"},{name:"airtime",secs:S.airTime}],touchdown:()=>({name:"land"}),softland:()=>({name:"land"}),hardland:()=>({name:"land"}),hit:()=>({name:"pylon"}),scrape:()=>({name:"land"}),flap:()=>({name:"thrust"}),kickflip:()=>({name:"thrust"}),thrusters:()=>({name:"thrust"}),fleetflip:()=>({name:"ring",combo:r.combo}),rowclear:()=>({name:"ring",combo:1}),climbbeat:()=>({name:"ring",combo:r.combo}),checkpoint:()=>({name:"checkpoint"}),finish:S=>[{name:"finish",results:S.results},{name:"record"}],megaflip:()=>({name:"whoosh"}),inverted:()=>({name:"whoosh"})};function D(S){const C=U[S.type];let k=C?C(S):null;k&&!Array.isArray(k)&&(k=[k]);try{o&&typeof o.onGameplayEvent=="function"&&o.onGameplayEvent(S)}catch(T){console.warn("[gameplay] hud hook",T)}if(k)for(const T of k){const at={...T,t:S.t,beat:S.beat,source:"gameplay"};if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof CustomEvent=="function")try{window.dispatchEvent(new CustomEvent("rr:event",{detail:at}))}catch(Z){console.warn("[gameplay] rr:event",Z)}}if(s)try{S.type==="land"||S.type==="touchdown"||S.type==="hardland"?s.land&&s.land(r.pos.clone(),Ce(r.landImpact+.3,.3,1)):S.type==="hit"?s.hit&&s.hit(r.pos.clone(),1):S.type==="scrape"?s.sparks&&s.sparks(r.pos.clone(),.6,new L(0,1,1)):(S.type==="shift"&&S.perfect||S.type==="megaflip")&&s.boost&&s.boost(S.type==="shift"?.6:1)}catch(T){console.warn("[gameplay] fx hook",T)}if(e)try{(S.type==="flap"||S.type==="kickflip")&&e.thrustPulse&&e.thrustPulse(1),(S.type==="land"||S.type==="touchdown"||S.type==="softland"||S.type==="hardland")&&e.land&&e.land(Ce(r.landImpact+.3,.3,1.6))}catch(T){console.warn("[gameplay] car hook",T)}}function N({shake:S=0,flash:C=0,punch:k=0,aberr:T=0}={}){if(g.shake=Math.max(g.shake,S),g.punch=Math.max(g.punch,k),r.flash=Math.max(r.flash,C),r.aberration=Math.max(r.aberration,T),!h.muted&&s)try{C>=.3&&s.flash&&s.flash(C*.6)}catch{}}function P(S){r.score+=Math.round(S*(1+Math.min(r.combo,20)*.1))}function x(){r.combo++,r.maxCombo=Math.max(r.maxCombo,r.combo),r.combo>1&&r.combo%5===0&&R("combo",`x${r.combo} COMBO`)}function z(){r.combo=0}function B(S){return hl(_*1.618+S*7.77+.5)}function et(S,C,k,T,at,Z,it,$,Gt,Tt=.55){_++,r.puffs.push({t0:r.t,x:S,y:C,z:k,vx:T,vy:at,vz:Z,r0:it,r1:$,life:Gt,a:Tt,seed:hl(_*3.1)}),r.puffs.length>3400&&r.puffs.splice(0,r.puffs.length-3400)}function vt(S,C,k,T){for(M[S]=(M[S]||0)+C*k;M[S]>=1;)M[S]-=1,T()}const wt=new L;function pt(S,C,k=1,T=.6){vt("tire",C,S,()=>{const at=B(1)<.5?-1:1;wt.set(at*(.7+B(7)*.3),.25,1.25+B(8)*.4).applyQuaternion(r.quat).add(r.pos);const Z=at*(.4+B(2)*7.5);et(wt.x,.2,wt.z,Z,.25+B(3)*1.1,1+B(4)*4.5,.9*k,(3+B(5)*2.8)*k,2.8+B(6)*1.8,T)})}function Lt(S,C,k,T,at=1,Z=0,it=1,$=.5){for(let Gt=0;Gt<S;Gt++){const Tt=B(Gt)*Cn,Wt=(4+B(Gt+9)*9)*T;let fe=Math.cos(Tt),pe=Math.sin(Tt);-(fe*Z+pe*it)>1-$||et(C+fe*1.2,.1,k+pe*1.2,fe*Wt,.15+B(Gt+3)*.5,pe*Wt,.6*at,(1.4+Wt*.32+B(Gt+5))*at,3.2+B(Gt+7)*2,.6)}}const tt=3.6,Ht=.2,se={flip:1,mega:.75,fleet:.6},ue={flip:[.96,-.27],mega:[.44,-.9],fleet:[nr[0],nr[1]]};function ae(S,C,k,T,at,Z="flip",it=0,$=0){const[Gt,Tt]=ue[Z]||ue.flip,Wt=Math.floor(B(T)*4)%4,[fe,pe]=$0[Wt];wt.set(fe*.85,0,pe*.8).applyQuaternion(r.quat);const ye=S+wt.x,oe=C+wt.z,Jt=B(T+1)*Cn;let ge=Math.cos(Jt),me=Math.sin(Jt),Oe=ge*Gt+me*Tt;(at===1||at===3)&&Oe>.25&&(ge=-ge,me=-me,Oe=-Oe);const Le=Oe>.3;let sn;if(at===1){const Fe=B(T+9)<.3,we=(Fe?2.6+B(T+2)*3.4:1.4+B(T+2)*3.6)*k;et(ye+ge*.9,.3+B(T+3)*.6*k,oe+me*.9,ge*we+it,(Fe?2.6+B(T+4)*2.2:.9+B(T+4)*1.5)*k,me*we+$,1*k,(Fe?2+B(T+5)*1.8:2.4+B(T+5)*2.4)*k,4.6+B(T+6)*3.4,Fe?.66:.6),sn=r.puffs[r.puffs.length-1],sn.k=1,sn.rise=Fe?.45+.35*B(T+7):.16+.2*B(T+7)}else if(at===2){const Fe=.4+B(T+2)*1.6,we=Le?.45:1;et(ye+ge*Fe*.6,.25,oe+me*Fe*.6,ge*1.2*k+it*.6,(1.6+B(T+4)*2.2)*we*k,me*1.2*k+$*.6,.7*k,(1.3+B(T+5)*1)*k*(Le?.75:1),3.2+B(T+6)*2.4,Le?.32:.6),sn=r.puffs[r.puffs.length-1],sn.k=1.5,sn.rise=(.16+.22*B(T+7))*we}else if(at===3){const Fe=(5+B(T+2)*4.5)*k;et(S+ge*Fe*.35,.4,C+me*Fe*.35,ge*Fe*.65*1.4+it,(1.4+B(T+4)*1.6)*k,me*Fe*.65*1.4+$,.45*k,(1+B(T+5)*1.1)*k,4.5+B(T+6)*3,.5),sn=r.puffs[r.puffs.length-1],sn.k=1.4,sn.rise=.5+.45*B(T+7)}else{const Fe=(5.5+Math.pow(B(T+2),.8)*10)*k,we=Le?.3:1;et(ye+ge*.5,.12,oe+me*.5,ge*Fe+it,(.25+B(T+4)*1.3)*we,me*Fe+$,.6*k,(1.8+B(T+5)*2+Fe*.12)*k*(Le?.6:1),3.4+B(T+6)*3,Le?.36:.52),sn=r.puffs[r.puffs.length-1],sn.k=1.45+.4*B(T+8),sn.rise=(.12+.22*B(T+7))*we}sn.kind=1}function mt(S,C,k,T,at,Z=""){const it=se[Z]??.7,$=T+Ht;if(at<.05||$>tt+1.4)return;const Gt=at*gn((tt+1.4-$)/1.8),Tt=Z==="mega"?r.fwd.x*r.v*.45:0,Wt=Z==="mega"?r.fwd.z*r.v*.45:0,fe=gn((tt+.4-$)/1.6);vt("wash",360*Gt*it,S,()=>ae(C,k,it,11,0,Z,Tt,Wt)),vt("billow",280*Gt*it*fe,S,()=>ae(C,k,it,31,1,Z,Tt,Wt)),vt("column",170*Gt*it*fe,S,()=>ae(C,k,it,57,2,Z,Tt,Wt)),vt("tendril",110*Gt*it*fe,S,()=>ae(C,k,it,83,3,Z,Tt,Wt)),$<2.7&&!r._bloom&&(r._bloom=!0,X(C,k,Z,Tt,Wt))}function X(S,C,k,T=0,at=0){const Z=se[k]??.7,it=Math.round(150*Z),$=Math.round(90*Z),Gt=Math.round(50*Z),Tt=Math.round(40*Z);for(let Wt=0;Wt<it;Wt++)_++,ae(S,C,Z,300+Wt*3,0,k,T,at);for(let Wt=0;Wt<$;Wt++)_++,ae(S,C,Z,700+Wt*3,1,k,T,at);for(let Wt=0;Wt<Gt;Wt++)_++,ae(S,C,Z,1100+Wt*3,2,k,T,at);for(let Wt=0;Wt<Tt;Wt++)_++,ae(S,C,Z,1500+Wt*3,3,k,T,at)}function W(S,C,k){const T=se[k]??.7,at=k==="mega"?r.fwd.x*r.v*.35:0,Z=k==="mega"?r.fwd.z*r.v*.35:0,it=Math.round(150*T),$=Math.round(100*T),Gt=Math.round(40*T);for(let Tt=0;Tt<it;Tt++)_++,ae(S,C,T,200+Tt*3,0,k,at,Z);for(let Tt=0;Tt<$;Tt++)_++,ae(S,C,T,900+Tt*3,1,k,at,Z);for(let Tt=0;Tt<Gt;Tt++)_++,ae(S,C,T,1300+Tt*3,2,k,at,Z);r._bloom=!1}h.press=()=>{c||f++},h.release=()=>{c||d++},h.setAutoplay=S=>{c=!!S},Object.defineProperty(h,"autoplay",{get:()=>c}),h.on=S=>(l.add(S),()=>l.delete(S)),h.bindInput=(S=window)=>{const C=T=>{if(T.type==="keydown"){if(T.code!=="Space"||T.repeat)return;T.preventDefault()}h.press()},k=T=>{T.type==="keyup"&&T.code!=="Space"||h.release()};return S.addEventListener("pointerdown",C),S.addEventListener("pointerup",k),S.addEventListener("pointercancel",k),window.addEventListener("keydown",C),window.addEventListener("keyup",k),()=>{S.removeEventListener("pointerdown",C),S.removeEventListener("pointerup",k),S.removeEventListener("pointercancel",k),window.removeEventListener("keydown",C),window.removeEventListener("keyup",k)}};function Dt(){r.holding=!0;const S=r.section;S==="intro"||!r.launched&&S==="launch"||jt()}function yt(){const S=r.holding;r.holding=!1,!r.launched&&S&&Ot()}function Ot(){if(r.launched)return;const S=r.t-Pc;let C;S<-Qn.launchGood?C="EARLY":Math.abs(S)<=Qn.launchPerfect?C="PERFECT":Math.abs(S)<=Qn.launchGood?C="GOOD":C="LATE",r.launch=C,r.launchT=Math.max(r.t,Pc),r.launched=!0,r.perf={PERFECT:1,GOOD:.985,LATE:.97,EARLY:.965}[C],r.zero60.final=+(Ll*{PERFECT:1,GOOD:1.06,LATE:1.16,EARLY:1.22}[C]).toFixed(2),C==="PERFECT"?(P(1e3),x(),r.boostAmp=0,r.boost=Math.min(1,r.boost+.3)):C==="GOOD"&&(P(500),x()),R("launch",`${C} LAUNCH`,{rating:C,err:S,style:C==="PERFECT"?"perfect":"normal"}),N({shake:.9,flash:.08,aberr:.6})}function Nt(S,C,k,T,at){r.cue={text:S,kind:C,t0:k,t1:T,tHit:at,k:0,active:!0,done:!1,grade:""}}function jt(){const S=r.section,C=r.t;if(r.flap=1,r.lastFlapT=C,r.cue&&r.cue.active&&!r.cue.done&&r.cue.kind==="tap"&&r.mode!=="fly"&&C>=r.cue.t0&&C<=r.cue.t1){const k=Math.abs(C-r.cue.tHit),T=k<=Qn.cuePerfect?"PERFECT":k<=Qn.cueGood?"GOOD":"LATE";r.cue.done=!0,r.cue.grade=T,r.kickflip={t0:C,dur:nf},P(T==="PERFECT"?1200:T==="GOOD"?700:300),x(),R("kickflip",`${T} KICKFLIP`,{grade:T,style:T==="PERFECT"?"perfect":"normal"}),N({punch:6,aberr:.4});return}if(S==="launch"&&r.launched&&r.mode==="drive"){const k=Rt(C);if(k&&Math.abs(C-k.t)<=Qn.shiftGreen&&!k.used){re[k.idx]=!0;const T=Math.abs(C-k.t)<=Qn.shiftPerfect;r.gear++,r.boostAmp=T?3.2:1.6,r.boostT0=C,r.perf=Ce(r.perf+(T?.01:.005),.9,1.05),r.boost=Math.min(1,r.boost+(T?.18:.1)),T&&r.perfectShifts++,P(T?400:200),x(),r.shiftT=C,r.shiftPerfect=T,R("shift",T?"PERFECT SHIFT":"GOOD SHIFT",{gear:r.gear,perfect:T,style:T?"perfect":"normal"}),N({shake:T?.75:.45,aberr:T?1:.4})}else r.airborne||(r.perf=Ce(r.perf-.01,.9,1.05),R("miss","EARLY SHIFT",{style:"bad"}));return}if((S==="flip"||S==="reveal")&&(r.mode==="drive"||r.mode==="climb")&&r.beat<ul+3&&!(r.beat>70)){const k=Math.round(r.beat);Math.abs(r.t-vn(k))<=Qn.beatOn&&k!==m?(m=k,r.climbHits++,P(150),x(),N({punch:3}),R("climbbeat","",{beatN:k})):S==="flip"&&(z(),r.perf=Ce(r.perf-.01,.9,1.05),R("offbeat","OFF BEAT",{style:"bad"}));return}if(S==="build"){const k=Math.round(r.beat);Math.abs(r.t-vn(k))<=Qn.beatOn&&k!==m&&(m=k,r.thrustArm=Math.min(1,r.thrustArm+.1),P(100),x(),N({punch:3}));return}if(r.mode==="fly"&&!r.megaLanding){if(C-r.flapT<.06)return;r.flapT=C,r.vy=z0,(!r.megaFlip||C-r.megaFlip.t0>=r.megaFlip.dur)&&(r.megaFlip={t0:C,dur:B0}),r.gas=Math.max(0,r.gas-.04),R("flap","",{}),N({punch:2.5})}}const re=[];function Rt(S){for(let C=0;C<Ve.shiftBeats.length;C++){const k=vn(Ve.shiftBeats[C]);if(S<=k+Qn.shiftGreen)return{idx:C,t:k,used:!!re[C]}}return null}function Bt(){const S=r.t,C=r.beat,k=r.section;if(k==="intro"||!r.launched&&k==="launch"){!v.pressed&&C>=8&&(v.pressed=!0,Dt()),v.pressed&&!r.launched&&S>=Pc-.004&&yt();return}if(r.cue&&r.cue.kind==="tap"&&r.cue.active&&!r.cue.done&&r.mode!=="fly"&&S>=r.cue.tHit-.004){Dt(),r.holding=!1;return}if(k==="launch"&&r.mode==="drive"){for(let T=0;T<Ve.shiftBeats.length;T++){const at=vn(Ve.shiftBeats[T]);if(T>v.shiftDone&&S>=at-.004&&S<=at+Qn.shiftPerfect){v.shiftDone=T,Dt(),r.holding=!1;return}}return}if((k==="flip"||k==="build")&&(r.mode==="drive"||r.mode==="climb")&&(k==="build"||r.beat<ul+3)){const T=Math.round(C);T>v.beatDone&&Math.abs(S-vn(T))<=.012&&(v.beatDone=T,Dt(),r.holding=!1);return}if(r.mode==="fly"&&!r.megaLanding){if(r.s>he[he.length-1].s&&!(r.y<.7&&r.vy<0))return;const T=Math.floor(C*2+1e-6)/2,at=vn(T),Z=r.y<.7&&r.vy<0&&S-r.flapT>.12;if(!(T>v.lastFlap&&S-at<.02)&&!Z)return;v.lastFlap=Math.max(v.lastFlap,T),(Z||b(S,T))&&(Dt(),r.holding=!1)}}const O=1/120,he=Ve.fleetRows;function Vt(S){for(const C of he)if(C.s+C.depth/2+2>S)return C.top+_h;return 2}function ce(S,C,k,T,at){const Z=r.s-Gi(r.t);let it=k,$=0,Gt=!0,Tt=Z+Gi(k);for(;it<T-1e-9;){const Wt=Math.min(O,T-it);Gt&&at&&(C=z0),Gt=!1,C-=Zc*Wt,S+=C*Wt,it+=Wt,S<0&&(S=0,C=6,$+=600),S>Ma&&(S=Ma,C=Math.min(C,-1),$+=200);const fe=Z+Gi(it);for(const pe of he){const ye=pe.depth/2+2.2;if(Math.abs(fe-pe.s)<=ye&&S<pe.top+_h-.9&&($+=1500*Wt*60),Tt<pe.s&&fe>=pe.s){const oe=S-(pe.top+_h);$+=oe*oe*1.2}}Tt=fe}return{y:S,vy:C,cost:$}}const ne=he.map(S=>S.beat-1),rt=B0/Ui,ft=S=>{for(const C of ne)if(C>=S-1e-6)return C;return 1/0};function E(S,C,k,T,at,Z){const it=vn(T+.5);let $=1/0,Gt=!1;const Tt=ne.some(fe=>Math.abs(fe-T)<1e-6),Wt=T>=Z-1e-6;for(const fe of Tt?[!0]:[!1,!0]){if(fe&&!Tt&&Wt&&T+rt>ft(T+.01))continue;const pe=ce(S,C,k,it,fe);let ye=pe.cost+(fe&&!Tt?.05+(Math.abs(T-Math.round(T))>.01?.3:0):0);if(ye>=$)continue;const oe=fe&&Wt?T+rt:Z;at>1?ye+=E(pe.y,pe.vy,it,T+.5,at-1,oe).cost:ye+=Math.abs(pe.y-Vt(r.s+(Gi(it)-Gi(r.t))))*.4+Math.abs(pe.vy)*.02,ye<$&&($=ye,Gt=fe)}return{cost:$,flap:Gt}}function b(S,C){const k=r.megaFlip?Hr(r.megaFlip.t0+r.megaFlip.dur):-1;return E(r.y,r.vy,S,C,6,k).flap}function H(S,C){const k=-Math.min(7,1.8+1.5*Math.max(0,S));return Ce((Zc+10*(k-C))/O0,.3,1)}const q={burn:!1};function j(S,C,k,T){q.burn=!!r._burn;const at=Rp(q,S,C,k,T);return r._burn=q.burn,at}const G={pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0};new Ge,new L,new L,new L;const ut=new ni,ht=new ni,st=new L(1,0,0),_t=new L(0,0,1),F=new L,Y=new L,Mt=new ni;function At(S){return S<3.2?"SOFT":S<6.5?"GOOD":"HARD"}function ot(S,C,k=null){r.airborne=!1,r.landT=r.t,r.landImpact=Ce(S/12,.15,1);{const Z=r.susp;Z.zv=-Ce(S,0,10),k&&(Z.p=Ce(k.p||0,-.1,.1),Z.pv=Ce((k.w||0)-S*Math.sin(k.p||0)*1.4,-3,3),Z.r=Ce(k.r||0,-.07,.07),Z.rv=Ce(k.wr||0,-2,2))}const T=At(S);if(r.landGrade=T,T==="HARD"){if(z(),r.perf=Ce(r.perf-.03,.9,1.05),r.hits++,!h.muted&&s&&s.sparks)try{s.sparks(r.pos.clone(),1,new L(0,.6,1))}catch{}R("hardland","HARD LANDING",{impact:S,where:C,style:"bad"}),N({shake:1.3,flash:.2,aberr:1})}else P(T==="SOFT"?2e3:1e3),x(),R("softland",T==="SOFT"?"SOFT LANDING":"CLEAN LANDING",{impact:S,where:C,style:"perfect"}),N({shake:.5,flash:.12,aberr:.3});if(C==="flip"||C==="mega"){W(r.pos.x,r.pos.z,C);return}if(C==="fleet"?Lt(52,r.pos.x,r.pos.z,.75,1.15,nr[0],nr[1],.75):Lt(80,r.pos.x,r.pos.z,.75,1.2,nr[0],nr[1],.8),C!=="fleet"){const Z=C==="flip"?1:.8;for(let it=0;it<70;it++){const $=B(it+120)*Cn,Gt=(.8+Math.pow(B(it+121),.7)*5.2)*Z,Tt=Math.cos($),Wt=Math.sin($);if(Tt*nr[0]+Wt*nr[1]>.8&&Gt>2.2)continue;const fe=.3+B(it+122)*1.6;et(r.pos.x+Tt*Gt,fe,r.pos.z+Wt*Gt,Tt*(1.5+B(it+123)*2.5),.35+B(it+124)*.8,Wt*(1.5+B(it+123)*2.5)+1.2,1.6*Z,(3+B(it+125)*2.2)*Z,4.2+B(it+126)*2.6,.5)}}const at=C==="fleet"?18:26;for(let Z=0;Z<at;Z++){const it=(B(Z+40)-.5)*3,$=Math.sin(it)-.35,Gt=Math.cos(it),Tt=2.5+B(Z+45)*3.5;et(r.pos.x+$*Tt,.2+B(Z+46)*.8,r.pos.z+Gt*Tt,$*2,.6+B(Z+42)*1,Gt*2.5,1.4,3.8+B(Z+43)*2.4,4.5+B(Z+44)*2.5,.5)}}function Ut(S,C){r.t=C,r.beat=Hr(C);const k=Tp(C);for(k!==r.section&&(r.section,r.section=k,$t(k)),c&&Bt();f>0;)f--,Dt();for(;d>0;)d--,yt();const T=af(C);if(T!==r.timeScale&&!h.muted&&s&&s.setTimeScale)try{s.setTimeScale(T)}catch{}r.timeScale=T;const at=S*T;r.launched?r.rev+=(.35+.5*Ce(r.v/60,0,1)-r.rev)*gi(3,S):(r.rev+=((r.holding?1:.08)-r.rev)*gi(r.holding?3.2:4,S),r.holding&&(r.rev+=.03*Math.sin(C*61)),C>Pc+.45&&(r.holding=!1,Ot()));for(const[Z,it]of[[10,"3"],[12,"2"],[14,"1"],[16,"GO"]]){const $=vn(Z);C>=$&&C-S<$&&R("countdown",it,{n:it,style:"countdown"})}if(k==="launch"&&r.launched&&r.mode==="drive"){const Z=Rt(C);if(Z){const it=Z.idx>0?vn(Ve.shiftBeats[Z.idx-1]):r.launchT;r.shift.nextT=Z.t,r.shift.light=Ce((C-it)/(Z.t-it),0,1),r.shift.green=Math.abs(C-Z.t)<=Qn.shiftGreen,r.shift.perfect=Math.abs(C-Z.t)<=Qn.shiftPerfect,r.shift.active=!re[Z.idx],!re[Z.idx]&&C>Z.t+Qn.shiftGreen-S&&C<=Z.t+Qn.shiftGreen&&(re[Z.idx]=!0,r.perf=Ce(r.perf-.01,.9,1.05),z(),R("miss","MISSED SHIFT",{style:"bad"}))}else r.shift.active=!1,r.shift.green=!1,r.shift.light=0;r.shift.gear=r.gear}else r.shift.active=!1,r.shift.green=!1;r.vNom=W0(C);{const Z=C-(r.boostT0??-99);r.boostV=Z<0||Z>8?0:(r.boostAmp||0)*gn(Z/.45)*Math.exp(-Math.max(0,Z-.45)/.8)}if(r.rcs.down*=Math.exp(-S*10),r.rcs.left*=Math.exp(-S*10),r.rcs.right*=Math.exp(-S*10),r.rcs.pitch*=Math.exp(-S*10),r.mode==="drive"?J(S,C):r.mode==="jump"?Q(S,C):r.mode==="climb"?gt(S):r.mode==="flipAir"?Et(S,at,C):r.mode==="fly"&&It(S,C),r.mph=Math.round((r.launched?Math.hypot(r.v,(r.mode==="flipAir",0)):0)*Va*(r.mode==="drive"?r.perf:1)),r.mode==="flipAir"&&r.flipAir&&(r.mph=Math.round(Math.hypot(r.flipAir.vx,r.flipAir.vy,r.flipAir.vz)*Va)),r.landImpact*=Math.exp(-S*5),r.lapTime=r.launched?r.finished?r.finishT-r.launchT:C-r.launchT:0,r.launched){const Z=C-r.launchT;r.zero60.show=Z>=0&&r.beat<23,r.zero60.t=Math.min(Z,r.zero60.final),!r.zero60.frozen&&Z>=r.zero60.final&&(r.zero60.frozen=!0,r.launch!=="EARLY"&&R("moment3",`#3 0-60 IN ${r.zero60.final.toFixed(2)}s`,{style:"moment",sub:"TESLA ROADSTER"}))}if(r.launched&&r.launch!=="EARLY"&&C-r.launchT>=r.zero60.final-.006&&C-r.launchT<r.zero60.final+1.2&&r.mode==="drive"&&(r.mph=Math.max(r.mph,60)),!r.launched&&r.holding&&r.beat>12&&pt(S,30+40*gn((r.beat-12)/3.5),.85,.6),r.launched&&C-r.launchT<1.8){const Z=(C-r.launchT)/1.8;pt(S,1100*(1-Z)*(1-Z)+80,1.45+.6*(1-Z),.92)}if(r.slip=r.launched?17*Math.pow(Ce(1-(C-r.launchT)/.95,0,1),1.4):0,r.cue){const Z=r.cue;Z.k=Ce((C-Z.t0)/Math.max(.001,Z.tHit-Z.t0),0,1),Z.active=C>=Z.t0&&C<=Z.t1&&!(Z.kind==="tap"&&Z.done&&C>(Z.doneT??(Z.doneT=C))+.5),C>Z.t1+.6&&(r.cue=null)}for(!r.cue&&C>=We.tLip-1.2*Ui&&C<We.tLip&&!r._kickCue&&(r._kickCue=!0,Nt("TAP: THRUSTERS","tap",We.tLip-1.2*Ui,Y0+Qn.cueGood+.3,Y0)),k==="build"&&(r.thrustArm=Math.max(r.thrustArm,gn((r.beat-88)/8)),r.gas=Math.max(r.gas,r.thrustArm)),k==="build"&&r.beat>=94&&!r._ready&&(r._ready=!0,R("boostready","MEGA FLIP READY",{style:"big",sub:"TAP: THRUSTERS"})),r.flap*=Math.exp(-S*7),r.thrust=r.mode==="fly"?Ce(.25+r.flap*.9,0,1):k==="build"?r.thrustArm*.3:0,r.mode==="flipAir"&&r.flipAir&&(r.thrust=Ce(r.flipAir.rear*1.1,0,1)),r.boost=k==="build"?Math.max(r.boost,r.thrustArm):r.boost,(r.mode==="flipAir"||r.mode==="fly")&&(r.boost=r.gas),!r.finished&&r.s>=Ve.finish.s&&r.mode==="drive"&&r.s>ee.sLip&&(r.finished=!0,r.finishT=C,r.results={time:r.finishT-r.launchT,score:r.score,maxCombo:r.maxCombo,rings:r.fleetFlipped,ringsTotal:zt(),launch:r.launch,zero60:r.zero60.final,perfectShifts:r.perfectShifts,flips:r.flips,fleetFlipped:r.fleetFlipped,newRecord:!0},R("finish","FINISH",{results:r.results,style:"big"}),N({flash:.7,shake:.5,punch:6})),Pe(S),kt(S),r.flash*=Math.exp(-S*5),r.aberration*=Math.exp(-S*4);r.popups.length&&r.t-r.popups[0].t0>2.5;)r.popups.shift();if(r.puffs.length&&!(_&31)){const Z=r.t;r.puffs=r.puffs.filter(it=>Z-it.t0<it.life)}}function zt(){let S=0;for(const C of he)S+=C.vehicles.length;return S}function kt(S){const C=r.susp,k=!r.airborne&&r.mode!=="flipAir"&&r.mode!=="fly"&&r.mode!=="jump",T=r._vSusp??r.v;r._vSusp=r.v;let at=k&&r.mode==="drive"&&S>0?Ce((r.v-T)/S,-40,40):0;C.aLong+=(at-C.aLong)*gi(25,S);let Z=0,it=0,$=0,Gt=1;if(k&&(it=Ce(C.aLong*.00125,-.035,.045),Z=-Math.abs(C.aLong)*5e-4,r.mode==="climb"&&(Gt=Math.max(0,r.v*r.v*Vo(r.s-ee.s0,Da).k/pn+Math.cos(r.loopTheta||0)),Z-=Ce((Gt-1)*.024,0,.11)),!r.launched&&r.holding&&(it+=.008+.005*Math.sin(r.t*29)*r.rev,Z-=.01*r.rev,$=.006*r.rev),r.launched&&r.v>1)){const pe=r.t*(2+r.v*.35);Z+=.004*Us(pe)*Math.min(1,r.v/30),it+=.0015*Us(pe*.7+9)}C.load=Gt;const Tt=k?1:.6;C.zv+=(-(vi.wz*vi.wz*Tt)*(C.z-Z)-2*vi.zz*vi.wz*C.zv)*S,C.z+=C.zv*S,C.pv+=(-(vi.wp*vi.wp*Tt)*(C.p-it)-2*vi.zp*vi.wp*C.pv)*S,C.p+=C.pv*S,C.rv+=(-(vi.wr*vi.wr*Tt)*(C.r-$)-2*vi.zr*vi.wr*C.rv)*S,C.r+=C.rv*S,C.p=Ce(C.p,-.11,.11),C.r=Ce(C.r,-.08,.08),C.bottom*=Math.exp(-S*6);let Wt=1/0,fe=-1/0;for(let pe=0;pe<4;pe++){const[ye,oe]=$0[pe],Jt=C.z-oe*C.p+ye*C.r;C.wheels[pe]=k?Ce(-Jt,-.07,vi.travel):0,Wt=Math.min(Wt,Jt),fe=Math.max(fe,Jt)}if(k&&Wt<-.13){const pe=-.13-Wt;C.z+=pe,C.zv<0&&(C.zv<-2.5&&(C.bottom=Math.max(C.bottom,Ce(-C.zv/6,0,1))),C.zv*=-.2)}fe>vi.ext&&(C.z-=fe-vi.ext)}function I(S,C){const k=Gi(C),T=W0(C)+r.boostV,at=2*(k+r.boostV*.12-r.s);return Math.max(0,T+Ce(at,-12,12))}function J(S,C){r.launched?r.v=I(S,C):r.v=0;const k=r.s;if(r.s+=r.v*S,r.xOff*=Math.exp(-S*1.4),r.zOff*=Math.exp(-S*1.4),k<Ve.ramp.s1&&r.s>=Ve.ramp.s1){r.mode="jump",r.airborne=!0,r.airTime=0,r._burn=!1,r.y=Es,r.vy=r.v*(2*Es/cs),r.att.p=wy+r.susp.p,r.att.w=-.16,r.att.r=0,r.att.wr=0,R("air","",{}),N({punch:9,shake:.25});return}if(k<ee.s0&&r.s>=ee.s0){r.mode="climb",r.climbV=ee.vIn*(.985+.015*Ce(r.climbHits/4,0,1)),Nt("HOLD: THRUSTERS","hold",ee.tBurn-.08,ee.tLand+1.5,ee.tBurn),r.cue.active=!1;return}if(k<Ve.mega.s1&&r.s>=Ve.mega.s1&&r.s>ee.sLip){r.mode="fly",r.airborne=!0,r.airTime=0,r.y=Xa,r.vy=r.v*(2*Xa/qa),r.megaLanding=!1,r._burn=!1,r.megaFlip={t0:C,dur:1.5,mega:!0},r.flips++,r.gas=1,R("megaflip","MEGA FLIP",{style:"big",sub:"TAP: THRUSTERS"}),Nt("TAP: THRUSTERS","tap",C+.6,vn(100.6),vn(100)),N({punch:12,shake:.6,flash:.3,aberr:.5});return}r.y=ur(r.s),r.vy=0,r.airborne=!1}function Q(S,C){r.v=I(S,C),r.s+=r.v*S;const k=r.vy;let T=0;r.kickflip&&r.vy<0&&C-r.kickflip.t0>r.kickflip.dur*.7&&(T=j(r.y-ur(r.s),r.vy,1.8*pn,pn)),r.rcs.down=Math.max(r.rcs.down,T),r.vy+=(T*1.8*pn-pn)*S,r.y+=r.vy*S,r.airTime+=S;const at=r.att;if(r.kickflip){const $=r.kickflip.dur,Gt=C-r.kickflip.t0,Tt=Ty(Gt,$);at.wr=S>0?(Tt-at.r)/S:0,at.r=Tt;const[Wt,fe]=Bp(Gt,$);r.rcs.right=Math.max(r.rcs.right,Wt),r.rcs.left=Math.max(r.rcs.left,fe)}let Z=0;if(r.kickflip&&C-r.kickflip.t0>r.kickflip.dur*.45){const $=.035*gn((2.2-(r.y-ur(r.s)))/1.6);Z=Ce(-10*(at.p-$)-6*at.w,-4.5,4.5),r.rcs.pitch=Ce(Z/4.5,-1,1)}at.w+=Z*S,at.p+=at.w*S,!r._m1Done&&r.s>Ve.fleet.s1+10&&(r._m1Done=!0,R("moment1","#1 JUMPING THE ENTIRE FLEET",{style:"moment",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y"})),k>0&&r.vy<=0&&!r._fleetDone&&(r._fleetDone=!0,P(1500),x());const it=ur(r.s);if(r.y<=it&&r.vy<0){const $=-r.vy;r.y=it,r.vy=0,r.mode="drive",r.kickflip&&(r.flips++,r.kickflip=null);const Gt=at.r-Cn*Math.round(at.r/Cn);ot($,"fleet",{p:at.p,w:at.w,r:Gt,wr:at.wr}),r._fleetDone&&!r._fleetMsg&&(r._fleetMsg=!0,R("fleet","FLEET CLEARED",{style:"big",sub:"+1,500"})),r.pitch=0,r.roll=0,at.p=0,at.w=0,at.r=0,at.wr=0,R("land",`${r.airTime.toFixed(2)}s AIR`,{airTime:r.airTime,style:"normal"})}}function gt(S,C){const k=Vo(r.s-ee.s0,Da).th;if(r.v=Math.sqrt(Math.max(4,r.climbV*r.climbV-2*pn*Da.y)),r.s+=r.v*S,r.y=0,r.vy=0,r.airborne=!1,!r._m2Done&&r.s>ee.s0+1.5&&(r._m2Done=!0,R("moment2","#2 THE MIDAIR FLIP",{style:"moment",sub:"PAST VERTICAL"})),k>Math.PI/2&&!r._invDone&&(r._invDone=!0,N({punch:6,aberr:.3})),r.s>=ee.sLip){const T=rf(ee.sLip,ee.zLip,ee.height,r.v,ee.zLand);r.flipAir=T,r.mode="flipAir",r.airborne=!0,r.airTime=0,r._burn=!1,r.gas=1,N({punch:8,shake:.4})}}function Et(S,C,k){const T=r.flipAir;let at;if(c?at=fl(T):at=r.holding?fl(T):0,of(T,C,at),r.airTime+=C,r.v=Math.hypot(T.vx,T.vz),r.y=T.y,r.vy=T.vy,r.gas=T.gas,r.rcs.down=Math.max(r.rcs.down,T.thr>.02?.55+.45*T.thr:0),r.rcs.pitch=Ce(T.alpha/9,-1,1),r.flipRear=T.rear,T.tau<Ia&&T.side>.05?r.rcs.left=Math.max(r.rcs.left,Math.min(1,.35+T.side/Fp)):T.side>.15?r.rcs.left=Math.max(r.rcs.left,Math.min(.5,T.side/1.6)):T.side<-.15&&(r.rcs.right=Math.max(r.rcs.right,Math.min(.5,-T.side/1.6))),k>=Gs&&!r._bulletDone&&(r._bulletDone=!0,R("bullet","",{})),T.upright&&!r._uprightDone&&(r._uprightDone=!0,r.flips++,P(2500),x(),R("upright","UPRIGHT",{style:"big",sub:"+2,500"})),T.thr>.3&&!r._thrDone&&(r._thrDone=!0,R("thrusters","THRUSTERS",{style:"normal"})),mt(S,T.x,T.z,T.y,T.thr>.02?.6+.4*T.thr:0,"flip"),T.landed){r.mode="drive";const Z=ee.zLand-T.z;r.s=ee.sLip+Math.max(.001,Z),r.zOff=Z<.001?Z*-1:0,r.xOff=T.x-Ks,r.v=Math.max(0,-T.vz),r.y=0,r.vy=0,r.pitch-=Cn*Math.round(r.pitch/Cn);const it=Math.abs(T.ph-Cn)<.5;ot(it?T.impact:Math.max(T.impact,7),"flip",{p:T.ph-Cn,w:T.w,r:T.r,wr:T.wr}),r.pitch=0,r.flipGrade=r.landGrade,r.flipAir=null,r.cue&&r.cue.kind==="hold"&&(r.cue.done=!0,r.cue.grade=r.landGrade,r.cue.t1=Math.min(r.cue.t1,k+.4))}}function It(S,C){r.v=I(S,C);const k=r.s;r.s+=r.v*S,r.airTime+=S,!r.megaLanding&&r.s>=Ve.flight.landStart&&(r.megaLanding=!0,r._burn=!1,Nt("HOLD: THRUSTERS","hold",C,C+3,C+.3),R("thrusters","HOLD: THRUSTERS",{style:"normal"}));let T=0;if(r.megaLanding&&(T=c?H(r.y,r.vy):r.holding&&r.gas>0?1:0,r.gas=Math.max(0,r.gas-T*Up*S),r.rcs.down=Math.max(r.rcs.down,T),mt(S,r.pos.x,r.pos.z,r.y,T,"mega")),r.vy+=(T*O0-Zc)*S,r.vy=Math.max(r.vy,-30),r.y+=r.vy*S,r.y>Ma&&(r.y=Ma,r.vy=Math.min(r.vy,-1)),r.megaFlip){const at=(C-r.megaFlip.t0)/r.megaFlip.dur;r.rcs.pitch=at<.3?1:at>.7&&at<1?-1:r.rcs.pitch,at>=1&&(r.megaFlip.mega||r.flips++,r.megaFlip=null)}for(let at=p;at<he.length;at++){const Z=he[at],it=Z.depth/2+2.1;if(r.s<Z.s-it)break;if(Math.abs(r.s-Z.s)<=it&&r.y<Z.top+.05&&!Z._hit&&(Z._hit=!0,r.y=Z.top+.3,r.vy=7,r.hits++,z(),R("hit","ROOF CLIP",{style:"bad",row:at}),N({shake:1.2,flash:.2,aberr:1}),!h.muted&&s&&s.sparks))try{s.sparks(r.pos.clone(),.9,new L(0,1,0))}catch{}if(k<Z.s+it&&r.s>=Z.s+it&&(p=at+1,!Z._hit)){const $=r.megaFlip||r.t-(r._lastFlipEnd||-9)<.25,Gt=Z.vehicles.length;$?(r.fleetFlipped+=Gt,P(400*Gt),x(),R("fleetflip",Z.finale?"THE ENTIRE FLEET":`FLEET FLIP x${Gt}`,{style:Z.finale?"big":"normal",n:Gt,row:at,sub:`+${400*Gt}`})):(P(150*Gt),x(),R("rowclear","CLEAR",{n:Gt,row:at})),N({punch:3})}}if(r.megaFlip==null&&r._wasFlip&&(r._lastFlipEnd=r.t),r._wasFlip=!!r.megaFlip,r.y<=0&&r.vy<0)if(r.megaLanding){const at=-r.vy;r.y=0,r.vy=0,r.mode="drive",r.megaFlip=null,r.pitch-=Cn*Math.round(r.pitch/Cn),ot(at,"mega",{p:r.pitch,w:0,r:0,wr:0}),r.pitch=0,r.cue&&r.cue.kind==="hold"&&(r.cue.done=!0,r.cue.grade=r.landGrade,r.cue.t1=Math.min(r.cue.t1,C+.4))}else r.y=0,r.vy=6,C-(r._scrapeT||-9)>.3&&(r._scrapeT=C,z(),R("scrape","SCRAPE",{style:"bad"}),N({shake:.6,aberr:.4}));r.beat>124&&!r._finaleDone&&(r._finaleDone=!0,R("finale","",{}))}function $t(S){S==="reveal"&&R("checkpoint","THE MIDAIR FLIP",{style:"big",sub:"NEXT: #2"})}function ve(S){return S<ee.s0?Or*gn((S-(ee.s0-90))/70):0}function Pe(S){if(Lo(r.s,G),r.mode==="flipAir"&&r.flipAir){const it=r.flipAir;r.pos.set(it.x,it.y,it.z),r.pitch=it.ph,r.roll=it.r,ut.setFromAxisAngle(st,r.pitch),ht.setFromAxisAngle(_t,it.r),r.quat.copy(ut).multiply(ht),r.fwd.set(0,0,-1).applyQuaternion(r.quat),r.up.set(0,1,0).applyQuaternion(r.quat),r.inLoop=!1,r.upsideDown=Math.cos(it.ph)<-.3;return}if(r.mode==="climb"||G.onFlip){r.pos.copy(G.pos),r.pos.x+=Or,r.fwd.copy(G.fwd),r.up.copy(G.up),r.pitch=G.theta,r.roll=0,ut.setFromAxisAngle(st,r.pitch),r.quat.copy(ut),r.inLoop=!0,r.loopTheta=G.theta,r.upsideDown=G.theta>Math.PI*.6;return}r.inLoop=!1,r.upsideDown=!1,r.fwd.copy(G.fwd),r.up.copy(G.up),r.pos.copy(G.pos),r.pos.y=r.y,r.pos.x+=r.xOff+ve(r.s),r.pos.z+=r.zOff;let C=0,k=0,T=gi(14,S);r.mode==="jump"?(C=r.att.p,T=1):r.mode==="fly"?(C=Math.atan2(r.vy,Math.max(1,r.v))*.5,T=gi(8,S)):C=Math.atan2(G.fwd.y,-G.fwd.z),r.pitch+=(C-r.pitch)*T,r.roll+=(k-r.roll)*gi(5,S);let at=r.pitch,Z=r.roll;if(r.mode==="jump"&&(Z=r.att.r),r.mode==="fly"&&r.megaFlip&&(at+=Cn*gn((r.t-r.megaFlip.t0)/r.megaFlip.dur)),ut.setFromAxisAngle(st,at),ht.setFromAxisAngle(_t,Z),r.quat.copy(ut).multiply(ht),r.upsideDown=Math.cos(at)*Math.cos(Z)<-.3,r.mode==="jump"||r.mode==="fly"){F.set(0,k0,0).applyQuaternion(r.quat);const it=(r.mode==="jump",Mt.setFromAxisAngle(st,r.pitch));Y.set(0,k0,0).applyQuaternion(it),r.pos.add(Y).sub(F)}}const Re={intro:"intro",launch:"drop1",reveal:"break",flip:"loop",build:"build",mega:"flight",outro:"outro"};h.carInput=()=>({speed:r.mode==="flipAir"?0:r.v+r.slip,rev:r.rev,throttle:r.launched?Ce(.5+r.boostV/10,0,1):r.rev,boost:Ce(r.boostV/9,0,1),brake:r.finished?1:0,flying:r.mode==="flipAir"||r.mode==="fly",airborne:r.airborne,grounded:!r.airborne,armed:Math.max(r.thrustArm,r.mode==="flipAir"||r.mode==="fly"||r.mode==="jump"?1:0),thrust:r.thrust,lights:1,rcs:r.rcs,jetsDown:r.rcs.down,jetsLeft:r.rcs.left,jetsRight:r.rcs.right,jetsPitch:r.rcs.pitch,mode:r.mode}),h.fxInput=()=>({t:r.t,speed01:Ce(r.v/60,0,1),boost01:Math.max(r.boost,Ce(r.boostV/9,0,1)),thrust:r.thrust,car:u,section:Re[r.section]||r.section,timeScale:r.timeScale,smoke:r.puffs,rcs:r.rcs}),h.hudState=()=>({t:r.t,speed:r.mph,score:r.score,combo:r.combo,maxCombo:r.maxCombo,boost:r.mode==="flipAir"||r.mode==="fly"?r.gas:Math.max(r.boost,r.thrustArm),rev:r.rev,revTarget:[.85,1],shift:{phase:r.shift.light,window:r.shift.green,perfect:r.shift.perfect,active:r.shift.active},gear:r.gear,launch:r.launch||void 0,shifts:r.perfectShifts,shiftsTotal:Ve.shiftBeats.length,rings:r.fleetFlipped,ringsTotal:zt(),finished:r.finished,phase:Re[r.section]||r.section,lapTime:r.lapTime,upsideDown:r.upsideDown,results:r.results,holding:r.holding,section:r.section,mode:r.mode,cue:r.cue,zero60:r.zero60,flips:r.flips,fleetFlipped:r.fleetFlipped,gas:r.gas,timeScale:r.timeScale,carScreen:r.cam.car||null});function St(){const S=e&&e.body;if(!S||!S.isObject3D)return;const C=r.susp;S.position.y+=C.z,S.rotation.x+=C.p,S.rotation.z+=C.r}function fn(S){if(u&&(u.position.copy(r.pos),u.quaternion.copy(r.quat)),!!e){if(i.driveCar&&typeof e.update=="function"){try{e.update(S,h.carInput())}catch(C){console.warn("[gameplay] car.update",C)}St();return}try{typeof e.setState=="function"&&e.setState(r),typeof e.setSpeed=="function"&&e.setSpeed(r.v),typeof e.setThrusters=="function"&&e.setThrusters(r.thrust)}catch(C){console.warn("[gameplay] car hook",C)}St()}}const ie=new L,ze=new L,wn=new L(0,1,0),fi={pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0},Ni=new Ge,nt=new L;function Zt(S,C,k,T,at,Z){nt.copy(C).sub(S);const it=Math.hypot(nt.x,nt.z)||1e-6,$=Math.tan(at*Math.PI/360),Gt=$*(t?t.aspect:1),Tt=Math.atan2(nt.x,-nt.z)-Math.atan(k*Gt),Wt=Math.atan2(nt.y,it)-Math.atan(T*$);return Z.set(S.x+Math.sin(Tt)*Math.cos(Wt)*20,S.y+Math.sin(Wt)*20,S.z-Math.cos(Tt)*Math.cos(Wt)*20),Z}const Yt=new L,Kt=new L,Qt=new L,te=new L;function Te(S,C,k,T,at,Z){Qt.copy(C).sub(S).normalize(),te.copy(k).addScaledVector(Qt,-k.dot(Qt)),te.lengthSq()<1e-8&&te.set(0,0,-1),te.normalize();const it=Math.atan(-T*Math.tan(at*Math.PI/360));return Z.copy(S).addScaledVector(Qt,Math.cos(it)*20).addScaledVector(te,Math.sin(it)*20),Z}function Ae(){const S=Ce((t.aspect-.5625)/1.2153,0,1),C=(k,T)=>k+(T-k)*S;return{D:C(7.2,4.8),H:C(1.3,.9),fov:C(58,60),ndcY:C(-.24,-.16),k:S}}const le=new L,w=new L,K=new L,xt=new L,lt=.6,A=(S,C,k)=>S<0||S>6?0:S<C?gn(S/C):Math.exp(-(S-C)/k),V=new L(0,1,0);function ct(){const S=r.beat;if(r.flipAir,S<8)return"intro";if(S<16)return"countdown";if(r.finished||r.section==="outro")return r.t-r.landT<1.9&&r.landT>vn(124)&&!r.finished?"megaLand":"finish";if(r.section==="launch")return r.t>=ti.fleetLip-.62&&r.t<ti.fleetLand-.85?"fleetSide":r.t>=ti.fleetLand-.85&&r.t<ti.fleetLand+1.6?"landHero":r.launched&&r.t-r.launchT<.4?"launchFront":r.t<ti.zero60+.15?"launchTop":S<19.8?"launchSide":S>=24.2&&r.s<Ve.ramp.s1?"fleetWide":r.t-r.landT<.7&&r.landT>vn(30)?"landHero":"chase";if(r.section==="reveal")return"flipReveal";if(r.section==="flip")return r.mode==="climb"?"flipClimb":r.mode==="flipAir"?r.t<Gs-.05?"flipClimb":r.t<Xo?"flipOrbit":"flipDescent":r.s>ee.sLip&&r.s<ee.sLip+80&&r.t-r.landT<2.1&&r.landT>ee.tLip?"flipDescent":r.s<ee.s0&&S<58?"flipReveal":r.s<ee.s0&&S>=59?r.s>ee.s0-30?"flipClimb":"flipSide":"chase";if(r.section==="mega"){if(r.mode==="fly")return S<99.5?"megaLaunch":r.megaLanding?"megaLand":S>=121.6?"megaWide":"megaChase";if(r.t-r.landT<1.9&&r.landT>vn(120))return"megaLand"}return"chase"}const dt={default:1,launchFront:0,flipSide:1,fleetSide:0,landHero:0,flipReveal:1.6,climbChase:.8,flipLip:0,flipOrbit:0,flipDescent:0,flipClimb:0,flipHero:0,megaLand:0,megaLaunch:.5,megaChase:.6,megaWide:0,finish:1.6,countdown:1,launchTop:0,launchSide:0,fleetWide:1.2,fleetJump:0};function Ct(S){if(!t)return;const C=ct(),k=C!==g.shot;if(k){if(g.initialized){const Ue=g.shot==="landHero"||g.shot==="flipHero"||g.shot==="launchFront"?0:(dt[C]??dt.default)*Ui;if(Ue>0){const Ie=new L(0,0,-1).applyQuaternion(t.quaternion),mn=Math.max(4,t.position.distanceTo(r.pos));g.blend={t0:r.t,dur:Ue,off:t.position.clone().sub(r.pos),lookOff:t.position.clone().addScaledVector(Ie,mn).sub(r.pos),up:new L(0,1,0).applyQuaternion(t.quaternion),fov:t.fov}}else g.blend=null}g.shot=C,g.shotT0=r.t,g.fix=r.pos.clone(),g.fj=null,g.hz=null,g.mz=null}r.t-g.shotT0;const T=r.pos,at=Ce(r.v/60,0,1.2),Z=r.beat,it=Ae(),$=t.aspect<1,Gt=r.launched?r.t-r.launchT:-1,Tt=A(Gt,.12,.42),Wt=r.t-r.shiftT,fe=A(Wt,.06,.32)*(r.shiftPerfect?1:.6),pe=A(r.t-r.landT,.035,.1),ye=A(r.t-r.flapT,.04,.2),oe=Tt*1.6+fe*.7;let Jt=it.fov,ge=10,me=14,Oe=!0,Le=!0;g.carYs+=(r.y-g.carYs)*gi(r.mode==="fly"?4.5:12,S);const sn=Ce(r.boostV/9,0,1);let Fe=Tt*6+fe*4,we=r.launched&&!r.airborne&&!r.finished&&!r.inLoop;const Qe=it.ndcY;switch(r.flipAir,C){case"intro":{const _e=gn(Z/8),Ue=.28+2.3*_e,Ie=$?12.2-.8*_e:8-.5*_e;ie.set(T.x+Math.sin(Ue)*Ie,1.05+.25*Math.sin(_e*Math.PI),T.z+Math.cos(Ue)*Ie),Jt=$?46:40,Te(ie,Yt.set(T.x,lt,T.z),V,$?-.1:-.04,Jt,ze),ge=30,me=30,Le=!1;break}case"countdown":{const _e=gn((Z-8)/7.5),Ue=2.58+(Cn-2.58)*_e,Ie=$?11.4:7.5,mn=Ie+(it.D-Ie)*_e,_n=1.05+(it.H+lt-1.05)*_e;ie.set(T.x+Math.sin(Ue)*mn,_n,T.z+Math.cos(Ue)*mn),Jt=($?46:40)+(it.fov-($?46:40))*_e,ie.y+=r.rev*.012*Math.sin(r.t*53),Te(ie,Yt.set(T.x,lt,T.z),V,($?-.1:-.04)+(it.ndcY-($?-.1:-.04))*_e,Jt,ze),ge=30,me=30,Le=!1;break}case"launchTop":{ie.set(.02,$?8:6.9,T.z-1.2),ze.set(0,0,ie.z-.01),wn.set(0,0,-1),Oe=!1,Jt=$?82:62,ge=60,me=60,Le=!0,we=!1;break}case"launchFront":{ie.set(g.fix.x+3,.5,g.fix.z-7),Zt(ie,Yt.set(T.x,.6,T.z),$?0:-.15,-.1,Jt,ze),Jt=$?58:44,ge=60,me=40,Le=!1,we=!1;break}case"launchSide":{$?ie.set(T.x+15,2.3,T.z+2.5):ie.set(T.x+8.6,.85,T.z+3.5),Zt(ie,Yt.set(T.x,.55,T.z-.3),$?.34:.42,-.02,Jt,ze),Jt=$?60:50,ge=14,me=18;break}case"fleetWide":{const _e=-Ve.fleet.sCenter;ie.set($?34:27,7,_e+24),Yt.set(0,2.2,_e*.65+T.z*.35),Zt(ie,Yt,0,$?.05:0,Jt,ze),Jt=$?56:44,ge=3,me=5,Le=!1,we=!1;break}case"fleetJump":{const _e=-Ve.fleet.s0,Ue=-(Ve.fleet.lineup.find(Ja=>Ja.kind==="semi")||{s:Ve.fleet.sCenter}).s,Ie=-Ve.ramp.s1-3.5;ie.set($?3.2:3.4,1.15,-Lc(-Ie,-(T.z+7.5),1.5));const mn=T.z-ie.z,_n=T.x-ie.x,pi=Math.max(2,Math.hypot(_n,mn)),ii=Math.atan2(T.y+.9-ie.y,pi),Cs=Math.atan2(-ie.y,Math.max(3,ie.z-_e)),ds=$?.42:.5,Zr=.56,xr=Math.max(.12,ii-Cs);let Si=.4;for(let Ja=0;Ja<24;Ja++)Si*=xr/(Math.atan(ds*Si)+Math.atan(Zr*Si));const Jr=Math.max(6,ie.z-Ue),cm=Math.tan(Math.atan(4.7/Jr))/t.aspect;Si=Ce(Math.max(Si,cm),Math.tan(24*Math.PI/360),Math.tan(72*Math.PI/360));const zl=Cs+Math.atan(Zr*Si),vf=Math.atan2(.15-ie.x,-(Ue-ie.z));ze.set(ie.x+Math.sin(vf)*Math.cos(zl)*20,ie.y+Math.sin(zl)*20,ie.z-Math.cos(vf)*Math.cos(zl)*20),Jt=2*Math.atan(Si)*180/Math.PI,ge=40,me=40,Le=!1,we=!1;break}case"fleetSide":{const _e=Ve.fleet.lineup,Ie=-(_e.find(Jr=>Jr.kind==="semi")||_e[Math.floor(_e.length/2)]).s,mn=-Ve.fleet.sCenter,_n=$?25:26;ie.set(_n,1.5,Ie+.5);const pi=r.t-ti.fleetLip,ii=ti.fleetApex-ti.fleetLip,Cs=($?.32:.55)+($?.5:.3)*gn(pi/ii)-($?.45:.3)*gn((pi-ii)/.7),ds=Ie*Cs+Ce(T.z,mn-22,mn+22)*(1-Cs);Jt=($?60:42)+($?6:4)*(1-gn((pi+.3)/(ii+.3)));const Zr=Math.tan(Jt*Math.PI/360),xr=Math.atan2(-ie.y,_n)+Math.atan(.2*Zr),Si=Math.atan2(0-ie.x,-(ds-ie.z));ze.set(ie.x+Math.sin(Si)*Math.cos(xr)*20,ie.y+Math.sin(xr)*20,ie.z-Math.cos(Si)*Math.cos(xr)*20),ge=20,me=3.5,Le=!1,we=!1;break}case"landHero":{g.hz||(g.hz={z:r.mode==="jump"?-Gi(ti.fleetLand):T.z,x:r.mode==="jump"?0:T.x}),ie.set(g.hz.x+Bi.dx,Bi.h,Lc(g.hz.z+Bi.dz,T.z+Bi.dz,1)),Zt(ie,Yt.set(T.x,Math.max(.6,T.y+.45),T.z),$?0:-.1,-.12,Jt,ze),Jt=$?60:44,ge=40,me=24,Le=!1;break}case"flipReveal":{const _e=-ee.s0-$c*.5,Ue=gn((Z-48)/12);ie.set(($?46:38)-10*Ue,8+3*Ue,-ee.s0+($?40:32)-10*Ue),Yt.set(2,ee.height*.5,_e+(T.z-_e)*.12*(1-Ue)),Zt(ie,Yt,0,0,Jt,ze),Jt=$?52:40,ge=4,me=4,Le=!1,we=!1;break}case"climbChase":{Lo(Math.max(ee.s0-30,r.s-8.5),fi),ie.copy(fi.pos).addScaledVector(fi.up,1.9+lt),fi.pos.z>-ee.s0?ie.x=T.x:ie.x+=Or,wn.copy(fi.up).add(r.up).normalize(),Oe=!1,Yt.copy(T).addScaledVector(r.up,lt),Te(ie,Yt,wn,-.12,Jt+4,ze),Jt+=4,ge=26,me=30,we=!1;break}case"flipLip":{ie.set(ee.xLand*.75+4,ee.height+3.5,ee.zLip+9),Zt(ie,Yt.set(T.x,T.y,T.z),0,0,Jt,ze),Jt=$?60:48,ge=3,me=14,Le=!1,we=!1;break}case"flipOrbit":{const _e=Ce((r.t-Gs+.05)/(Xo-Gs+.05),0,1),Ue=gn(_e);Jt=$?54:40;const Ie=Math.tan(Jt*Math.PI/360),mn=$?10.8/(2*Ie*t.aspect):14.5/(2*Ie*t.aspect),_n=-.55+1.75*Ue;ie.set(T.x+Math.cos(_n)*mn,T.y+.35-2.4*Math.sin(Math.PI*.5*(.4+Ue)),T.z+Math.sin(_n)*mn),Zt(ie,Yt.set(T.x,T.y+.4,T.z),0,$?-.05:0,Jt,ze),ge=60,me=60,Le=!0,we=!1;break}case"flipDescent":{const _e=ee.xTouch??ee.xLand,Ue=ee.zLand,Ie=r.mode==="flipAir"?T.y:0,mn=gn((Ie-3)/16),_n=($?18.5:16)+($?7:6)*mn;ie.set(_e+_n,1.8+5.2*mn,Math.min(Ue-4.5-2*mn,T.z-4.5-(r.mode==="flipAir"?0:.3*r.v))),Jt=$?52:38;const pi=Math.tan(Jt*Math.PI/360),ii=r.mode==="flipAir"?T.z*.75+Ue*.25:T.z,Cs=T.x*.8+_e*.2,ds=Math.max(4,Math.hypot(Cs-ie.x,ii-ie.z)),Zr=Math.atan2(-ie.y,ds),xr=Math.atan2(Ie+.7-ie.y,ds),Si=Math.max(Zr+Math.atan(($?.27:.1)*pi),xr-Math.atan(.42*pi)),Jr=Math.atan2(Cs-ie.x,-(ii-ie.z))-Math.atan(($?0:-.05)*pi*t.aspect);ze.set(ie.x+Math.sin(Jr)*Math.cos(Si)*20,ie.y+Math.sin(Si)*20,ie.z-Math.cos(Jr)*Math.cos(Si)*20),ge=r.mode==="flipAir"?3.2:9,me=r.mode==="flipAir"?8:12,Le=!1,we=!1;break}case"flipClimb":{ie.set(Or+4.2,.9,-ee.s0+($?7:5.5)),Yt.set(.6,ee.height*.62,-ee.s0-$c*.62),Yt.lerp(Kt.set(T.x,T.y+.6,T.z),.25),Zt(ie,Yt,$?0:.1,0,Jt,ze),Jt=$?74:60,ge=30,me=6,Le=!1,we=!1;break}case"flipSide":{const _e=-ee.s0-$c*.62,Ue=$?38:31;ie.set(ee.xLand+Ue,7.5,_e+2);const Ie=r.mode==="drive"?.08:.12;Yt.set(T.x*Ie+2*(1-Ie),Math.max(1.5,T.y)*Ie+ee.height*.55*(1-Ie),T.z*Ie+_e*(1-Ie)),Zt(ie,Yt,0,0,Jt,ze),Jt=$?54:42,ge=3,me=8,Le=!1,we=!1;break}case"flipHero":{const _e=ee.xTouch??ee.xLand;ie.set(_e+Bi.dx,Bi.h,Lc(ee.zLand+Bi.dz,T.z+Bi.dz,1)),Jt=$?60:44,Zt(ie,Yt.set(T.x,Math.max(.6,T.y+.45),T.z),$?0:-.1,-.1,Jt,ze),ge=40,me=16,Le=!1;break}case"megaLaunch":{ie.set(T.x+($?18:15),3+g.carYs*.55,T.z-4),Zt(ie,Yt.set(T.x,g.carYs+.5,T.z),0,0,Jt,ze),Jt=$?60:48,ge=8,me=16,we=!1;break}case"megaChase":{let _e=null;for(const ds of he)if(r.s<ds.s+ds.depth/2+2){_e=ds;break}const Ie=-(_e?Ce(_e.s-r.s,-4,30):20);g.mz||(g.mz={o:Ie}),g.mz.o+=(Ie-g.mz.o)*gi(Ie>g.mz.o+8?3:10,S);const mn=$?17:15.5,_n=$?9.5:8;ie.set(T.x+mn,1.8,T.z+_n);const pi=Math.max(T.y,g.carYs),ii=$?.38:.34;Yt.set(T.x+1,pi*(1-ii)+1.2*ii,T.z+g.mz.o*.28),ze.copy(Yt),Jt=$?62:50,Fe+=ye*1,ge=40,me=30,Le=!1,we=!1;break}case"megaWide":{const _e=he[he.length-1],Ue=_e.vehicles.find(mn=>mn.kind==="semi")||_e.vehicles[Math.floor(_e.vehicles.length/2)],Ie=ee.zLand-(Ue.s-ee.sLip);ie.set(Ks+($?22:20),2.6,Ie+1),Zt(ie,Yt.set(Ks,5.2,Ie),0,$?-.12:-.15,Jt,ze),Jt=$?54:40,ge=3,me=5,Le=!1,we=!1;break}case"megaLand":{g.hz||(g.hz={z:T.z-16,x:T.x}),ie.set(g.hz.x+4.2,.7,Lc(g.hz.z,T.z-8.5,1)),Zt(ie,Yt.set(T.x,Math.max(.6,T.y*.75+.5),T.z),$?0:-.1,-.1,Jt,ze),Jt=$?62:46,ge=40,me=20,Le=!1;break}case"finish":{const _e=gn((Z-128)/8),Ue=.15+.6*_e+.25*(1-Math.exp(-Math.max(0,Z-136)/14)),Ie=it.D+(($?9:7.6)-it.D)*_e,mn=g.carYs;ie.set(T.x-Math.sin(Ue)*Ie,mn+it.H+lt-(it.H-.75)*_e,T.z+Math.cos(Ue)*Ie),Jt=it.fov+(($?60:46)-it.fov)*_e;const _n=Qe+(($?-.6:-.5)-Qe)*gn((Z-134.5)/3);Te(ie,Yt.set(T.x,T.y+lt,T.z),V,_n,Jt,ze),ge=10,me=16;break}case"chase":default:{let _e=it.D+oe,Ue=it.H;if(r.section==="build"){const mn=gn((Z-88)/8);_e*=1+.28*mn,Ue+=1.1*mn}const Ie=r.airborne?g.carYs:T.y;ie.set(T.x-r.xOff*.45,Ie+Ue+lt,T.z+_e),Yt.set(T.x-r.xOff*.3,Ie+lt,T.z),wn.set(0,1,0),ie.y-=pe*.25,Te(ie,Yt,wn,Qe,Jt+at*6,ze),ge=12,me=18;break}}Oe&&wn.set(0,1,0),k||!g.initialized||Le!==g.rel?(g.rel=Le,g.off.copy(ie).sub(T),g.lookOff.copy(ze).sub(T),g.pos.copy(ie),g.look.copy(ze),g.up.copy(wn),g.initialized=!0):Le?(g.off.lerp(ie.sub(T),gi(ge,S)),g.lookOff.lerp(ze.sub(T),gi(me,S)),g.pos.copy(T).add(g.off),g.look.copy(T).add(g.lookOff),g.up.lerp(wn,gi(Oe?6:30,S)).normalize()):(g.pos.lerp(ie,gi(ge,S)),g.look.lerp(ze,gi(me,S)),g.up.lerp(wn,gi(Oe?6:30,S)).normalize()),C!=="climbChase"&&(g.pos.y=Math.max(g.pos.y,.35)),g.shake*=Math.exp(-S*4.5),g.punch*=Math.exp(-S*3.2);const qe=we?.015+at*.04:0,di=g.shake*.2,xe=r.t*23;if(t.position.copy(g.pos),t.position.x+=Us(xe)*di+Us(r.t*7.3+5)*qe*.6,t.position.y+=Us(xe+17.3)*di*.8+Us(r.t*9.1+11)*qe+Us(r.t*37+2)*qe*.35,r.shiftPerfect&&Wt>=0&&Wt<2/60){const _e=Wt<.016666666666666666?1:-.6;t.position.y+=.09*_e,t.position.x+=.05*_e}t.up.copy(g.up),Ni.lookAt(t.position,g.look,t.up),t.quaternion.setFromRotationMatrix(Ni);const bn=Us(xe*.5+40)*g.shake*.03+Us(r.t*3.1+21)*qe*.08+fe*.02*(r.gear%2?1:-1);bn&&t.rotateZ(bn),C==="megaChase"&&t.rotateZ(Ce(r.vy/24,-1,1)*.03);const kn=C==="chase"?at*6:at*2,De=Jt+kn+g.punch*.6+(C==="chase"?12*sn:0);if(g.fov=k||!g.fovInit?De:g.fov+(De-g.fov)*gi(9,S),g.fovInit=!0,t.fov=g.fov+Fe,g.blend){const _e=g.blend,Ue=(r.t-_e.t0)/_e.dur;if(Ue>=1||Ue<0)g.blend=null;else{const Ie=gn(Ue);le.copy(T).add(_e.off),t.position.lerpVectors(le,t.position,Ie),t.position.y<.35&&C!=="climbChase"&&(t.position.y=.35),w.copy(T).add(_e.lookOff).lerp(g.look,Ie),K.copy(_e.up).lerp(g.up,Ie),K.lengthSq()<1e-4&&K.copy(g.up),t.up.copy(K.normalize()),Ni.lookAt(t.position,w,t.up),t.quaternion.setFromRotationMatrix(Ni),t.fov=_e.fov+(t.fov-_e.fov)*Ie}}t.updateProjectionMatrix(),r.cam.shot=C,r.cam.cut=k,r.cam.fov=t.fov,r.cam.shake=g.shake,r.cam.punch=g.punch+Fe,r.cam.roll=Math.atan2(g.up.x,g.up.y);{t.updateMatrixWorld(),xt.copy(r.pos).addScaledVector(r.up,.55).project(t);const Ue=2.4/(Math.max(.5,t.position.distanceTo(r.pos))*Math.tan(t.fov*Math.PI/360));r.cam.car={x:xt.x,y:xt.y,r:Math.min(2,Ue),on:xt.z<1&&Math.abs(xt.x)<1.3&&Math.abs(xt.y)<1.3}}if(!h.muted&&s)try{s.setSpeed&&s.setSpeed(at)}catch{}}let Pt=0;return h.reset=()=>{h.state=r=K0(),re.length=0;for(const S of he)delete S._hit;if(y(),Pt=0,Pe(1/60),e&&typeof e.reset=="function")try{e.reset()}catch{}},h.update=(S,C)=>{S>0||(S=1/60),C===void 0&&(C=Pt+S);const k=C-Pt;if(k<=0)return Ct(1/600),fn(1/600),r;const T=Math.min(240,Math.max(1,Math.ceil(k/(1/120)))),at=k/T;for(let Z=1;Z<=T;Z++)Ut(at,Pt+at*Z),Ct(at);Pt=C,fn(k);try{n&&typeof n.setGameplayState=="function"&&n.setGameplayState(r)}catch(Z){console.warn("[gameplay] world hook",Z)}return r},h.seekTo=(S,C=1/60)=>{const k=h.muted;h.reset();for(let T=C;T<S+1e-9;T+=C)h.muted=k||T<S-1.5,h.update(C,Math.min(T,S));return Pt<S&&h.update(S-Pt,S),h.muted=k,r},h.trackFrame=Lo,h.COURSE=Ve,h.MOMENTS=ti,h.reset(),h}const Ey={flipLaunchState:rf,flipAirStep:of,flipBotThrust:fl,bulletScaleAt:af,S_DT:Ai,FLIP:ee},Ay=Object.freeze(Object.defineProperty({__proto__:null,BEAT:Ui,COURSE:Ve,FLEET_DIMS:qo,G:pn,MOMENTS:ti,MPH:Va,SECTIONS:wp,WINDOWS:Qn,_flipSim:Ey,beatToTime:vn,createGameplay:Ru,default:Ru,groundY:ur,sNom:Gi,sectionAt:Tp,timeToBeat:Hr,trackFrame:Lo},Symbol.toStringTag,{value:"Module"})),Cy=["semi","cybertruck","models","model3","modelx","modely"],Bn=0,dl=1,bs=2,An=3,Ry=4,J0=5,Bs=6,Mi=7,Py=8,Ly=9,Ya=10,Qc=11,ba=12,Ka=13,kp=14,Gr=15,Dc=16,Sa=17,Dy=[[8421504,.3,.45,1,1],[263431,.08,0,0,.55],[723724,.3,.1,.6,.8],[1118740,.85,0,0,.35],[723724,.95,0,0,.12],[986897,.9,0,0,.18],[13817305,.26,.7,0,1],[3422012,.34,.75,.4,1],[7829371,.45,1,0,1],[11736091,.32,.1,.8,1],[15264492,.1,1,0,1],[12567238,.42,.85,0,1],[1118999,.08,.3,1,1],[460552,.95,0,0,.1],[14474456,.5,0,.3,1],[131587,.95,0,0,.05],[65794,.02,0,0,.18]],Iy=i=>(i+.5)/Sa,Rr={pearl:[15330023,.04,.3],black:[723982,.35,.3],deepblue:[2376830,.5,.28],red:[11014686,.3,.28],stealth:[4869459,.45,.3],quicksilver:[10725292,.6,.28],white:[14541027,.02,.32],gold:[11771772,.55,.3],graphite:[2369066,.45,.32]},Hp={semi:["white"],cybertruck:["pearl"],models:["red","deepblue","pearl","quicksilver"],model3:["deepblue","pearl","red","stealth"],modelx:["pearl","quicksilver","deepblue"],modely:["quicksilver","gold","pearl","red","deepblue"]},Q0={},gr={model3:{L:4.72,W:1.85,H:1.44,R:.34,axles:[-1.43,1.44],tyreW:.235,rimRatio:.7,top:[[0,.47],[.025,.55],[.07,.615],[.14,.665],[.26,.715],[.45,.755],[.7,.795],[.93,.83],[1.2,.872],[1.32,.89],[1.5,1.03],[1.75,1.23],[2,1.375],[2.25,1.432],[2.5,1.44],[2.8,1.42],[3.1,1.33],[3.4,1.19],[3.62,1.085],[3.75,1.05],[4.1,1.03],[4.42,1.02],[4.56,1.005],[4.64,.95],[4.69,.85],[4.72,.64]],belt:[[0,.47],[.025,.545],[.07,.6],[.14,.64],[.3,.69],[.6,.745],[.93,.8],[1.3,.85],[2,.9],[3,.94],[3.6,.958],[4.2,.965],[4.56,.955],[4.64,.91],[4.69,.82],[4.72,.63]],rock:[[0,.29],[.06,.24],[.25,.18],[.6,.16],[1.4,.145],[3.4,.145],[4,.165],[4.5,.24],[4.72,.38]],nose:[.56,.8],tail:[.74,.55],n:3.1,lean:.22,tuckB:.07,tuckT:.075,bulge:.05,tm:.5,shoulderExp:1.7,glassTop:[[1.32,3.62]],glassSide:[[1.48,3.36]],pillars:[[2.3,2.4]],gaps:[[1.47,"b"],[2.35,"b"],[3.37,"b"],[1.3,"t"],[3.72,"t"]],zones:[[4.69,4.72,"KB",bs]],band:Bn,beltCell:bs,mirrorD:1.56,plateY:.5,intake:[.36,.05],lamps:[{e:"front",head:!0,x:[.4,.95],y0:[.676,.642],y1:[.692,.668],lens:.014,gain:1.8},{e:"rear",x:[.42,.975],y0:[.896,.892],y1:[.93,.93],lens:.02,gain:1.3,wrap:.15},{e:"rear",x:[.6,.975],y0:[.838,.834],y1:[.864,.862],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.836,.834],y1:[.928,.93],gain:1.3}],wheel:{n:5,sw:.05,cell:Mi,cover:!0,accent:Bs,caliper:Mi}},models:{L:4.97,W:1.96,H:1.44,R:.36,axles:[-1.5,1.46],tyreW:.245,rimRatio:.7,top:[[0,.49],[.025,.57],[.08,.635],[.16,.68],[.3,.725],[.55,.77],[.8,.805],[.985,.83],[1.2,.862],[1.45,.885],[1.65,1],[1.95,1.2],[2.25,1.35],[2.6,1.408],[3,1.415],[3.35,1.39],[3.7,1.305],[4.02,1.165],[4.32,1.04],[4.7,.975],[4.86,.96],[4.93,.87],[4.97,.64]],belt:[[0,.49],[.025,.565],[.08,.62],[.16,.655],[.35,.705],[.65,.76],[.985,.81],[1.45,.855],[2.2,.9],[3.2,.93],[4,.95],[4.6,.95],[4.86,.94],[4.93,.86],[4.97,.63]],rock:[[0,.3],[.06,.25],[.25,.2],[.6,.17],[1.5,.15],[3.6,.15],[4.2,.175],[4.75,.25],[4.97,.4]],nose:[.56,.85],tail:[.76,.6],n:3,lean:.2,tuckB:.07,tuckT:.065,bulge:.042,tm:.52,shoulderExp:1.8,glassTop:[[1.45,4.3]],glassSide:[[1.62,3.82]],pillars:[[2.52,2.62],[3.5,3.58]],aftCell:Bn,cpillar:1,gaps:[[1.62,"b"],[2.57,"b"],[3.57,"b"],[1.43,"t"],[4.32,"t"]],zones:[[4.93,4.97,"KB",bs]],band:Bn,beltCell:Ya,mirrorD:1.72,plateY:.51,intake:[.38,.05],lamps:[{e:"front",head:!0,x:[.38,.95],y0:[.685,.645],y1:[.708,.705],lens:.015,gain:1.8},{e:"rear",x:[.4,.975],y0:[.885,.876],y1:[.918,.914],lens:.014,gain:1.3,wrap:.15},{e:"rear",x:[.62,.975],y0:[.83,.824],y1:[.854,.85],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.826,.824],y1:[.914,.914],gain:1.3}],wheel:{n:5,pair:.17,sw:.036,cell:Bs,accent:Mi,caliper:Ly}},modelx:{L:5.06,W:2,H:1.68,R:.38,axles:[-1.5,1.5],tyreW:.265,rimRatio:.66,top:[[0,.53],[.025,.62],[.08,.69],[.18,.75],[.35,.805],[.6,.86],[.85,.915],[1.05,.953],[1.15,.97],[1.4,1.18],[1.7,1.42],[2,1.58],[2.4,1.665],[2.85,1.68],[3.3,1.668],[3.7,1.62],[4.05,1.535],[4.35,1.43],[4.6,1.32],[4.8,1.22],[4.93,1.155],[4.99,1.14],[5.03,1],[5.06,.7]],belt:[[0,.53],[.025,.615],[.08,.675],[.18,.725],[.4,.785],[.75,.86],[1.15,.94],[2,1],[3.2,1.02],[4.2,1.03],[4.8,1.03],[4.97,1.02],[5.03,.9],[5.06,.67]],rock:[[0,.35],[.06,.3],[.3,.24],[.7,.22],[1.6,.21],[3.5,.21],[4.4,.235],[4.85,.31],[5.06,.44]],nose:[.58,.85],tail:[.76,.55],n:3.2,lean:.22,tuckB:.07,tuckT:.065,bulge:.042,tm:.5,shoulderExp:1.8,glassTop:[[1.15,2.8],[4.24,4.92]],glassSide:[[1.32,4.32]],pillars:[[2.25,2.33],[3.55,3.63]],gaps:[[1.33,"b"],[2.29,"b"],[3.59,"bt"],[1.13,"t"],[2.82,"t"],[4.22,"t"]],falcon:[2.82,4.22,.19],zones:[[5.02,5.06,"KB",bs]],band:Bn,beltCell:Ya,mirrorD:1.45,plateY:.55,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[.42,.95],y0:[.725,.695],y1:[.75,.755],lens:.016,gain:1.8},{e:"rear",x:[.36,.975],y0:[.94,.925],y1:[.982,.99],lens:.012,gain:1.3,wrap:.14},{e:"rear",x:[0,.36],y0:[.962,.958],y1:[.972,.97],gain:1.1}],wheel:{n:6,pair:.12,sw:.028,cell:Bs,caliper:Mi}},modely:{L:4.75,W:1.92,H:1.62,R:.37,axles:[-1.45,1.44],tyreW:.255,rimRatio:.68,top:[[0,.51],[.025,.6],[.07,.665],[.15,.715],[.3,.76],[.55,.805],[.75,.835],[.925,.862],[1.2,.905],[1.3,.92],[1.5,1.08],[1.8,1.34],[2.1,1.54],[2.4,1.608],[2.7,1.62],[3.05,1.615],[3.4,1.585],[3.78,1.51],[4.1,1.385],[4.38,1.23],[4.55,1.12],[4.65,1.03],[4.71,.88],[4.75,.66]],belt:[[0,.51],[.025,.595],[.07,.65],[.15,.69],[.35,.74],[.65,.79],[.925,.835],[1.3,.9],[2.2,.96],[3.3,1],[4.2,1.03],[4.55,1.03],[4.65,.98],[4.71,.85],[4.75,.65]],rock:[[0,.34],[.06,.28],[.3,.225],[.6,.21],[1.4,.2],[3.3,.2],[4,.22],[4.5,.29],[4.75,.42]],nose:[.5,.92],tail:[.64,.64],n:3.4,lean:.24,tuckB:.08,tuckT:.085,bulge:.052,tm:.46,shoulderExp:1.6,glassTop:[[1.3,4.3]],glassSide:[[1.46,3.74]],pillars:[[2.32,2.42]],aftCell:Bn,gaps:[[1.45,"b"],[2.37,"b"],[3.75,"b"],[1.28,"t"],[4.32,"t"]],zones:[[4.71,4.75,"KB",bs]],band:Bn,beltCell:bs,mirrorD:1.52,plateY:.535,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[0,.93],y0:[.716,.704],y1:[.737,.73],lens:.01,gain:1.7},{e:"front",head:!0,x:[.55,.84],y0:[.64,.635],y1:[.656,.67],lens:.012},{e:"rear",x:[0,.975],y0:[.955,.948],y1:[.988,.982],lens:.01,gain:1.3,wrap:.14},{e:"rear",x:[.55,.96],y0:[.9,.885],y1:[.932,.936],lens:.012,gain:1.3}],wheel:{n:5,pair:.2,sw:.034,cell:Mi,accent:Bs,caliper:Mi}},cybertruck:{L:5.68,W:2.2,H:1.79,R:.44,axles:[-1.84,1.84],tyreW:.305,rimRatio:.58,linear:!0,flat:!0,ct:!0,top:[[0,1.165],[.03,1.175],[2.75,1.79],[5.64,1.25],[5.68,1.24]],belt:[[0,1.165],[5.68,1.165]],rock:[[0,.54],[.24,.38],[5.42,.38],[5.68,.54]],nose:[.9,.22],tail:[.95,.12],tumble:.9,tuckB:.07,tuckT:0,shoulder:.012,bulge:0,inset:.05,arch:{top:1,a0:.37,a1:.66},glassTop:[[1.45,3.72]],glassSide:[[1.6,3.58]],pillars:[[2.62,2.72]],pillarCell:Qc,gaps:[[1.6,"b"],[2.67,"b"],[3.6,"b"],[1.42,"t"],[.1,"t"]],zones:[[3.82,5.6,"R",An]],band:An,bandH:.06,body:Qc,beltCell:Qc,mirrorD:1.62,plateY:.8,lamps:[{e:"front",cap:!0,head:!0,y0:1.1,y1:1.158,inset:0,gain:6,wrap:.1},{e:"rear",cap:!0,y0:1.17,y1:1.228,inset:0,gain:1.5,wrap:.1}],wheel:{n:6,sw:.05,cell:Bs,cover:!0,caliper:Mi}},semi:{L:7.1,W:2.6,H:4.05,R:.52,axles:[-2.05,1.8,2.95],tyreW:.32,dualW:.6,rimRatio:.56,cabL:4.7,inset:.03,wheel:{semi:!0,caliper:Mi}}};for(const i of Cy){const t=gr[i];t.L,t.W,t.H,t.R,t.axles.slice(),Rr[Hp[i][0]][0]}const qi=(i,t,e)=>Math.max(t,Math.min(e,i)),cn=(i,t,e)=>i+(t-i)*e,td=i=>Math.sqrt(1-(1-i)*(1-i));function Br(i,t){const e=i.length,n=i.map(c=>c[0]),s=i.map(c=>c[1]),o=[],a=new Array(e).fill(0);for(let c=0;c<e-1;c++)o[c]=(s[c+1]-s[c])/(n[c+1]-n[c]);if(!t&&e>2){a[0]=o[0],a[e-1]=o[e-2];for(let c=1;c<e-1;c++)a[c]=o[c-1]*o[c]<=0?0:(o[c-1]+o[c])/2;for(let c=0;c<e-1;c++){if(o[c]===0){a[c]=a[c+1]=0;continue}const l=a[c]/o[c],h=a[c+1]/o[c],r=l*l+h*h;if(r>9){const u=3/Math.sqrt(r);a[c]=u*l*o[c],a[c+1]=u*h*o[c]}}}return c=>{if(c<=n[0])return s[0];if(c>=n[e-1])return s[e-1];let l=0;for(;l<e-2&&c>n[l+1];)l++;const h=n[l+1]-n[l],r=(c-n[l])/h;if(t||e<=2)return cn(s[l],s[l+1],r);const u=r*r,f=u*r;return(2*f-3*u+1)*s[l]+(f-2*u+r)*h*a[l]+(-2*f+3*u)*s[l+1]+(f-u)*h*a[l+1]}}const bh=(i,t)=>{for(const e of i)if(t>=e[0]&&t<=e[1])return!0;return!1},Do=new L,pl=new L,ml=new L,gs=new L;class ls{constructor(t=!1){this.p=[],this.n=[],this.uv=[],this.c=t?[]:null}vert(t,e,n,s){this.p.push(t[0],t[1],t[2]),this.n.push(e[0],e[1],e[2]),this.c?this.c.push(s[0],s[1],s[2]):this.uv.push(Iy(n),.5)}tri(t,e,n,s,o,a){if(Do.fromArray(t),pl.fromArray(e).sub(Do),ml.fromArray(n).sub(Do),gs.crossVectors(pl,ml),gs.lengthSq()<1e-14)return;if(o&&gs.dot(Gp.fromArray(o))<0){const l=e;e=n,n=l,gs.negate()}gs.normalize();const c=[gs.x,gs.y,gs.z];this.vert(t,c,s,a),this.vert(e,c,s,a),this.vert(n,c,s,a)}quad(t,e,n,s,o,a,c){this.tri(t,e,n,o,a,c),this.tri(t,n,s,o,a,c)}addRaw(t){const e=t.attributes.position.array,n=t.attributes.normal.array,s=t.attributes.uv.array;for(let o=0;o<e.length;o++)this.p.push(e[o]),this.n.push(n[o]);for(let o=0;o<s.length;o++)this.uv.push(s[o]);t.dispose()}addGeo(t,e,n,s){const o=t.index?t.toNonIndexed():t;n&&o.applyMatrix4(n);const a=o.attributes.position,c=o.attributes.normal;for(let l=0;l<a.count;l++)this.vert([a.getX(l),a.getY(l),a.getZ(l)],[c.getX(l),c.getY(l),c.getZ(l)],e,s);t.dispose(),o!==t&&o.dispose()}box(t,e,n,s,o,a,c,l=0,h=0,r=0,u){this.addGeo(new an(t,e,n),c,jn(s,o,a,l,h,r),u)}mirroredX(){const t=new ls(!!this.c);for(let e=0;e<this.p.length/9;e++)for(const n of[0,2,1]){const s=e*3+n;t.p.push(-this.p[s*3],this.p[s*3+1],this.p[s*3+2]),t.n.push(-this.n[s*3],this.n[s*3+1],this.n[s*3+2]),this.c?t.c.push(this.c[s*3],this.c[s*3+1],this.c[s*3+2]):t.uv.push(this.uv[s*2],this.uv[s*2+1])}return t}append(t){const e=(n,s)=>{for(let o=0;o<s.length;o++)n.push(s[o])};return e(this.p,t.p),e(this.n,t.n),this.c?e(this.c,t.c):e(this.uv,t.uv),this}build(){const t=new nn;return t.setAttribute("position",new Ee(this.p,3)),t.setAttribute("normal",new Ee(this.n,3)),this.c?t.setAttribute("color",new Ee(this.c,3)):t.setAttribute("uv",new Ee(this.uv,2)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const Gp=new L;new Ge;const Uy=new ni,Fy=new Ci;new L(1,1,1);const Ny=new L;function jn(i,t,e,n=0,s=0,o=0,a=1,c=1,l=1){return new Ge().compose(Ny.set(i,t,e),Uy.setFromEuler(Fy.set(n,s,o)),new L(a,c,l))}const gl=5,yi=6,Vp=3,vl=4,Ua=5+gl,ja=Ua+yi,Dl=ja+1,ta=[];ta.push("U","L","K","B");for(let i=0;i<gl;i++)ta.push("S");ta.push("E");for(let i=0;i<yi;i++)ta.push(i<yi/2?"G":"R");function zy(i){const t=gr[i],e=Br(t.top,t.linear),n=Br(t.belt,t.linear),s=Br(t.rock,t.linear),o=t.L,a=t.W/2,c=t.axles.map(D=>D+o/2),l=t.tyreW,h=t.R+(t.archPad??.035),r=t.R+.01,u=t.winTop?Br(t.winTop,!0):null,f=D=>{let N=-1/0;return c.forEach((P,x)=>{if(i==="semi"&&x>0)return;const z=Math.abs(D-P);t.arch?z<t.arch.a0?N=Math.max(N,t.arch.top):z<t.arch.a1&&(N=Math.max(N,t.arch.top-(z-t.arch.a0)/(t.arch.a1-t.arch.a0)*(t.arch.top-s(D)))):z<h&&(N=Math.max(N,r+Math.sqrt(h*h-z*z)))}),N},d=t.cabL??o,v=D=>{const N=cn(t.nose[0],1,td(qi(D/t.nose[1],0,1))),P=cn(t.tail[0],1,td(qi((d-D)/t.tail[1],0,1)));return Math.min(N,P)},g=D=>{let N=0;for(const P of c){const x=Math.abs(D-P)/(h+(t.bulgeLen??.42));x<1&&(N=Math.max(N,Math.pow(1-x*x,1.5)))}return N*(t.bulge||0)},m=D=>D<.15?cn(.55,1,D/.15):D<.62?1:cn(1,.15,(D-.62)/.38),p=a-l-.07-(t.inset||0);function _(D){const N=g(D),P=(t.bulge||0)*.5,x=(a-P)*v(D),z=e(D),B=Math.min(n(D),z),et=s(D),vt=Math.min(et+.025,B-.1);let wt=Math.max(et,f(D));wt=Math.min(wt,B-.06);const pt=Math.min(p,x-.08),Lt=Math.max(0,z-B),tt=t.bandAbs?Math.min(Math.max(wt+.04,et+t.bandH),B-.035):Math.min(wt+(t.bandH||.06),B-.035),Ht=t.tuckB,se=t.tuckT,ue=.42,ae=[[0,vt],[pt,vt],[pt,Math.max(vt,wt)],[x-Ht+N*.5,wt],[x-Ht*(t.ct?.88:.55)+N*.55,tt]];for(let X=1;X<=gl;X++){const W=X/gl,Dt=cn(tt,B-(t.ct?0:.012),W);let yt;if(t.ct)yt=cn(x-Ht*.88,x,W);else{const Ot=t.tm??ue;yt=W<Ot?x-Ht*.55*Math.pow(1-W/Ot,2):x-se*Math.pow((W-Ot)/(1-Ot),t.shoulderExp??2),yt+=N*m(W)}ae.push([yt,Dt])}const mt=x-se-(t.shoulder??.018)+N*.1;if(ae.push([mt,B]),t.ct){const X=Math.max(mt-t.tumble*Lt,.2);for(let W=1;W<=yi/2;W++){const Dt=W/(yi/2);ae.push([cn(mt,X,Dt),cn(B,z,Dt)])}for(let W=1;W<=yi/2;W++){const Dt=W/(yi/2);ae.push([cn(X,0,Dt),z])}}else{const X=2/t.n;let W=Math.PI/4;if(u&&Lt>1e-4){const Dt=qi((Math.min(u(D),B+.97*Lt)-B)/Lt,0,1);W=qi(Math.asin(Math.pow(Dt,t.n/2)),.06,Math.PI/2-.06)}for(let Dt=1;Dt<=yi;Dt++){const yt=Dt<=yi/2?Dt/(yi/2)*W:W+(Dt-yi/2)/(yi/2)*(Math.PI/2-W),Ot=Math.pow(Math.cos(yt),X),Nt=Math.pow(Math.sin(yt),X);ae.push([Math.max(0,(mt-t.lean*Lt*Nt)*Ot),B+Lt*Nt])}ae[ja][0]=0}if(t.taper){const X=t.taper[0],W=t.H;for(const Dt of ae)Dt[0]*=1-t.taper[1]*qi((Dt[1]-X)/(W-X),0,1)}return ae}const M=[],y=i==="semi"?.1:.085;for(let D=0;D<=d+1e-6;D+=y)M.push(D);for(let D=0;D<=.24;D+=.03)M.push(D),M.push(d-D);M.push(d),c.forEach((D,N)=>{if(!(i==="semi"&&N>0))if(t.arch)for(const P of[0,t.arch.a0,t.arch.a1,(t.arch.a0+t.arch.a1)/2,t.arch.a0*.5])M.push(D-P,D+P);else{for(let P=0;P<=16;P++){const x=h*Math.cos(P/16*Math.PI);M.push(D+x)}M.push(D-h-.004,D+h+.004)}});for(const D of[...t.top,...t.belt,...t.rock])M.push(D[0]);for(const D of[...t.glassTop,...t.glassSide,...t.pillars])M.push(D[0],D[1]);for(const D of t.zones)M.push(D[0],D[1]);for(const D of t.gaps)M.push(D[0]-.006,D[0]+.006);const U=[...new Set(M.filter(D=>D>=0&&D<=d).map(D=>Math.round(D*2e3)/2e3))].sort((D,N)=>D-N).map(D=>({d:D,z:D-o/2,pts:_(D)}));return{s:t,L:o,hw:a,rings:U,dAx:c,top:e,belt:n,rock:s,cabL:d}}function ed(i,t,e){const n=ta[t];if(n==="U"||n==="L")return Ka;for(const l of i.zones)if(e>=l[0]&&e<=l[1]&&l[2].includes(n))return l[4];for(const l of i.gaps)if(Math.abs(e-l[0])<.0062&&(l[1].includes("b")&&"KBSE".includes(n)||l[1].includes("t")&&"GR".includes(n)))return Gr;const s=i.body??Bn,o=bh(i.glassTop,e),a=bh(i.glassSide,e),c=bh(i.pillars,e);return n==="G"?a&&!c?dl:o&&!a&&i.aftCell!=null&&e>i.glassSide[i.glassSide.length-1][1]?i.aftCell:o||a&&c?i.pillarCell??bs:s:n==="R"?o&&i.cpillar&&t<Ua+yi/2+i.cpillar&&e>i.glassSide[i.glassSide.length-1][1]?i.aftCell??s:o?dl:s:n==="E"?a||o?i.beltCell??bs:s:n==="K"||n==="B"?i.band??s:s}const En=2*Dl-2,Pu=i=>i<=ja?i:En-i;function Oy(i,t){const e=Pu(t),n=i.pts[e];return[t<=ja?n[0]:-n[0],n[1],i.z]}const By={U:0,L:1,K:2,B:3,S:4,E:4,G:5,R:5};function ky(i){const{s:t,rings:e}=i,n=e.length,s=new Float32Array(n*En*3);for(let _=0;_<n;_++)for(let M=0;M<En;M++)s.set(Oy(e[_],M),(_*En+M)*3);const o=(_,M)=>[s[(_*En+M)*3],s[(_*En+M)*3+1],s[(_*En+M)*3+2]],a=_=>Math.min(Pu(_),Pu((_+1)%En)),c=(n-1)*En,l=new Float32Array(c*3),h=new Int8Array(En);for(let _=0;_<En;_++)h[_]=By[ta[a(_)]]??4;const r=new L,u=new L,f=new L;for(let _=0;_<n-1;_++)for(let M=0;M<En;M++){const y=(M+1)%En;r.fromArray(o(_+1,y)).sub(f.fromArray(o(_,M))),u.fromArray(o(_,y)).sub(f.fromArray(o(_+1,M))),r.cross(u),l.set([r.x,r.y,r.z],(_*En+M)*3)}{const _=Math.floor(n/2),M=vl+3;r.fromArray(o(_,M)),u.fromArray(o(_,(M+1)%En)).sub(r),f.fromArray(o(_+1,(M+1)%En)).sub(r);const y=new L().crossVectors(u,f),R=new L().fromArray(l,(_*En+M)*3);if(y.dot(R)<0)for(let U=0;U<l.length;U++)l[U]=-l[U]}const d=Math.cos(_i.degToRad(t.crease??40)),v=new L,g=new L,m=new L,p=new ls;for(let _=0;_<n-1;_++){const M=(e[_].d+e[_+1].d)/2;for(let y=0;y<En;y++){const R=(y+1)%En,U=ed(t,a(y),M);v.fromArray(l,(_*En+y)*3);const D=v.length();if(D<1e-10)continue;v.divideScalar(D);const N=(B,et)=>{if(t.flat)return[v.x,v.y,v.z];m.set(0,0,0);for(const vt of[B-1,B])if(!(vt<0||vt>n-2))for(const wt of[(et-1+En)%En,et]){if(h[wt]!==h[y])continue;g.fromArray(l,(vt*En+wt)*3);const pt=g.length();pt<1e-10||g.dot(v)/pt<d||m.add(g)}return m.lengthSq()<1e-14&&m.copy(v),m.normalize(),[m.x,m.y,m.z]},P=[[_,y],[_,R],[_+1,R],[_+1,y]],x=P.map(B=>N(B[0],B[1])),z=P.map(B=>o(B[0],B[1]));for(const B of[[0,1,2],[0,2,3]])if(r.fromArray(z[B[0]]),u.fromArray(z[B[1]]).sub(r),f.fromArray(z[B[2]]).sub(r),!(u.cross(f).lengthSq()<1e-14))for(const et of B)p.vert(z[et],x[et],U)}}for(const[_,M]of[[e[0],[0,0,-1]],[e[n-1],[0,0,1]]])for(let y=0;y<Dl-1;y++){const R=_.pts[y],U=_.pts[y+1];if(Math.abs(U[1]-R[1])<1e-5&&Math.abs(U[0]-R[0])<1e-5)continue;const D=ed(t,y,_.d);p.quad([-R[0],R[1],_.z],[R[0],R[1],_.z],[U[0],U[1],_.z],[-U[0],U[1],_.z],D===Ka?An:D,M)}return p}function Lu(i,t){let e=-1/0;for(let n=Vp;n<Dl-1;n++){const s=i.pts[n],o=i.pts[n+1],a=Math.min(s[0],o[0]),c=Math.max(s[0],o[0]);if(t<a-1e-6||t>c+1e-6)continue;const l=c-a<1e-6?1:(t-s[0])/(o[0]-s[0]);e=Math.max(e,cn(s[1],o[1],qi(l,0,1)))}return e}function kr(i,t,e,n){const s=i.rings,o=s.length;let a=null;for(let c=0;c<o;c++){const l=s[n?o-1-c:c],h=Lu(l,t);if(h>=e){if(!a||a.h===-1/0)return[t,e,l.z];const r=(e-a.h)/(h-a.h);return[t,e,cn(a.r.z,l.z,r)]}a={r:l,h}}return null}function nd(i,t,e,n){const o=kr(i,t+.01,e,n),a=kr(i,Math.max(0,t-.01),e,n),c=kr(i,t,e+.01,n),l=kr(i,t,e-.01,n);if(!o||!a||!c||!l)return[0,0,n?1:-1];const h=new L(o[0]-a[0],o[1]-a[1],o[2]-a[2]),r=new L(c[0]-l[0],c[1]-l[1],c[2]-l[2]),u=h.cross(r).normalize();return u.z*(n?1:-1)<0&&u.negate(),[u.x,u.y,u.z]}function fr(i,t){for(let e=Vp;e<Dl-1;e++){const n=i.pts[e],s=i.pts[e+1];if((t-n[1])*(t-s[1])<=0&&Math.abs(s[1]-n[1])>1e-6)return cn(n[0],s[0],(t-n[1])/(s[1]-n[1]))}return i.pts[vl+2][0]}function Wp(i,t,e,n,s,o=0){const a=e.e==="rear",c=14,l=[];for(let r=0;r<=c;r++){const u=r/c,f=cn(e.x[0],e.x[1],u)*t.hw,d=cn(e.y0[0],e.y0[1],u)-o,v=cn(e.y1[0],e.y1[1],u)+o,g=kr(t,f,d,a),m=kr(t,f,v,a);if(!g||!m)continue;const p=nd(t,f,d,a),_=nd(t,f,v,a);l.push([g.map((M,y)=>M+p[y]*s),m.map((M,y)=>M+_[y]*s),p])}const h=Array.isArray(n);for(let r=0;r<l.length-1;r++){const[u,f,d]=l[r],[v,g]=l[r+1];for(const m of[1,-1]){if(m<0&&e.x[0]<=.001&&r<0)continue;const p=M=>[M[0]*m,M[1],M[2]],_=[d[0]*m,d[1],d[2]];h?i.quad(p(u),p(v),p(g),p(f),0,_,n):i.quad(p(u),p(v),p(g),p(f),n,_)}}}function Hy(i,t,e){const{s:n,L:s,hw:o,rings:a}=t,c=a[0],l=a[a.length-1];for(const h of n.lamps)if(!h.skip)if(h.cap){const r=h.e==="rear"?l:c,u=h.e==="rear"?1:-1,f=h.x?h.x[1]:fr(r,(h.y0+h.y1)/2)-(h.inset||0),d=h.x?h.x[0]:-f,v=h.y1-h.y0+.03;if(h.x)for(const g of[1,-1])i.box(f-d+.04,v,.012,g*(d+f)/2,(h.y0+h.y1)/2,r.z+u*.004,ba);else i.box(2*f+.02,v,.012,0,(h.y0+h.y1)/2,r.z+u*.004,ba)}else h.lens&&Wp(i,t,h,ba,.003,h.lens);if(e!=="semi"){const h=n.mirrorD,r=a.reduce((d,v)=>Math.abs(v.d-h)<Math.abs(d.d-h)?v:d),u=Math.min(t.belt(h),t.top(h)),f=r.pts[Ua][0];for(const d of[1,-1]){const v=e==="cybertruck"?n.body:Bn;i.addGeo(new Go(1,12,8),v,jn(d*(f+.12),u+.09,r.z+.06,0,0,0,.06,.048,.1)),i.box(.12,.03,.06,d*(f+.05),u+.07,r.z+.06,bs),i.addGeo(new as(1,12),dl,jn(d*(f+.12),u+.09,r.z+.155,0,0,0,.052,.04,1))}}if(i.box(.31,.155,.012,0,n.plateY,l.z+.007,kp),e==="models"||e==="model3"||e==="modelx"||e==="modely"){const h=kr(t,0,t.top(.12)-.015,!1);h&&i.box(.07,.035,.01,0,h[1],h[2]-.002,Ya,-.6);const r=c.z,u=n.intake[0],f=fr(c,u)-.06;i.box(2*f,n.intake[1],.02,0,u,r-.004,ba)}if(n.falcon){const[h,r,u]=n.falcon;for(const f of[1,-1]){let d=null;for(const v of a){if(v.d<h||v.d>r)continue;const g=Lu(v,u)+.002;d&&i.quad([f*(u-.006),d.y,d.z],[f*(u+.006),d.y,d.z],[f*(u+.006),g,v.z],[f*(u-.006),g,v.z],Gr,[0,1,0]),d={y:g,z:v.z}}}}if(e==="cybertruck"){for(let u=3.85;u<5.58;u+=.14){const f=t.top(u),d=a.reduce((v,g)=>Math.abs(g.d-u)<Math.abs(v.d-u)?g:v);i.box(d.pts[Ua+yi/2][0]*2-.04,.006,.012,0,f+.004,u-s/2,Gr,Math.atan2(t.top(u+.01)-t.top(u-.01),.02)*-1)}for(const u of[1,-1]){let f=null;for(const d of a){if(d.d<3.82||d.d>5.62)continue;const v=d.pts[Ua+yi/2][0],g=d.pts[ja][1]+.012,m=[[u*(v-.05),g,d.z],[u*(v+.004),g,d.z]];f&&i.quad(f[0],f[1],m[1],m[0],Qc,[0,1,0]),f=m}f=null;for(const d of a){if(d.d<.1||d.d>1.42)continue;const v=Lu(d,.8)+.002,g=[[u*.794,v,d.z],[u*.806,v,d.z]];f&&i.quad(f[0],f[1],g[1],g[0],Gr,[0,1,0]),f=g}}i.box(2.06,.1,.12,0,.52,c.z+.02,An),i.box(1.9,.08,.12,0,.5,l.z-.02,An)}}function Sh(i,t,e,n){Do.fromArray(t[0]),pl.fromArray(t[1]).sub(Do),ml.fromArray(t[2]).sub(Do),gs.crossVectors(pl,ml);const s=[0,0,0];for(const a of e)for(let c=0;c<3;c++)s[c]+=a[c];const o=gs.dot(Gp.fromArray(s))>=0?[[0,1,2],[0,2,3]]:[[0,2,1],[0,3,2]];for(const a of o)for(const c of a)i.vert(t[c],e[c],n)}function id(i,t,e,n,s,o,a,c,l){for(let r=0;r<12;r++){const u=cn(a,c,r/12),f=cn(a,c,(r+1)/12),d=(u+f)/2,v=(y,R)=>[t+y,e+s*Math.sin(R),n+s*Math.cos(R)],g=v(-o,u),m=v(o,u),p=v(o,f),_=v(-o,f),M=[0,Math.sin(d),Math.cos(d)];i.quad(g,m,p,_,l,M),i.quad(g,m,p,_,l,[0,-M[1],-M[2]])}}function Gy(i,t,e,n,s,o,a,c=.007){const l=t.rings.filter(h=>(o?t.cabL-h.d:h.d)<=s+1e-6);o&&l.reverse();for(let h=0;h<l.length-1;h++){const r=l[h],u=l[h+1],f=fr(r,e)+c,d=fr(r,n)+c,v=fr(u,e)+c,g=fr(u,n)+c;for(const m of[1,-1])i.quad([m*f,e,r.z],[m*v,e,u.z],[m*g,n,u.z],[m*d,n,r.z],0,[m,0,0],a)}}function sd(i,t,e){const{s:n,rings:s,L:o,hw:a}=i,c=new ls(!0),l=[1,.98,.95],h=[1,-.06,0],r=[1,.42,.04],u=s[0],f=s[s.length-1];for(const d of n.lamps){if(d.skip||d.e==="rear"!==e)continue;const v=d.gain??1,g=(e?h:l).map(m=>m*v);if(d.cap){const m=e?f:u,p=e?1:-1;if(d.x)for(const _ of[1,-1])c.box(d.x[1]-d.x[0],d.y1-d.y0,.012,_*(d.x[0]+d.x[1])/2,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g);else{const _=fr(m,(d.y0+d.y1)/2)-(d.inset||0);c.box(2*_,d.y1-d.y0,.012,0,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g)}}else Wp(c,i,d,g,.007);if(d.wrap){const m=Array.isArray(d.y0)?d.y0[1]:d.y0,p=Array.isArray(d.y1)?d.y1[1]:d.y1;Gy(c,i,m,p,d.wrap,e,g)}}if(!e&&t!=="semi"&&t!=="cybertruck"){const d=t==="models"?1.35:1.2,v=s.reduce((g,m)=>Math.abs(m.d-d)<Math.abs(g.d-d)?m:g);for(const g of[1,-1])c.box(.006,.02,.06,g*(v.pts[vl+3][0]+.003),v.pts[vl+3][1],v.z,0,0,0,0,r)}return e&&t==="cybertruck"&&c.box(2*fr(f,1.2)-.06,.008,.05,0,i.top(o-.03)+.004,f.z-.03,0,0,0,0,h.map(d=>d*1.5)),c}function Ic(i,t,e,n,s){const o=new Ro(t.map(a=>new qt(a[0],a[1])),n);i.addGeo(o,e,jn(s,0,0,0,0,-Math.PI/2))}function wh(i,t,e,n,s){const o=n/2,a=28;Ic(i,[[t-.006,-o+.03],[t,-o+.055],[t,o-.055],[t-.006,o-.03]],Ry,a,s),Ic(i,[[e-.005,-o+.02],[e+.02,-o+.002],[cn(e,t,.55),-o-.004],[t-.03,-o+.008],[t-.006,-o+.03]],J0,a,s),Ic(i,[[t-.006,o-.03],[t-.03,o-.008],[cn(e,t,.55),o+.004],[e+.02,o-.002],[e-.005,o-.02]],J0,a,s);for(const c of[-.22,.22])Ic(i,[[t+.0015,c*n-.006],[t+.0015,c*n+.006]],Gr,a,s)}function Vy(i){const t=gr[i],e=t.wheel,n=t.R,s=n*t.rimRatio,o=new ls,a=new ls,c=(l,h,r)=>{const u=h/2,f=u-.028;if(r?(wh(l,n,s,h/2-.015,h/4+.0075),wh(l,n,s,h/2-.015,-h/4-.0075)):wh(l,n,s,h,0),l.addGeo(new as(s*.99,28),Mi,jn(-u*.5,0,0,0,Math.PI/2,0)),l.addGeo(new Qo(s*.9,s*1,32),e.semi?Bs:e.cover?Mi:Bs,jn(f+.004,0,0,0,Math.PI/2,0)),e.semi){l.addGeo(new xn(s*.9,s*.9,.02,28),Bs,jn(f-.05,0,0,0,0,Math.PI/2)),l.addGeo(new xn(s*.3,s*.36,.16,18),Bs,jn(f+0,0,0,0,0,Math.PI/2)),l.addGeo(new xn(s*.17,s*.17,.04,14),Mi,jn(f+.08,0,0,0,0,Math.PI/2));for(let _=0;_<10;_++){const M=_/10*Math.PI*2;l.box(.03,.026,.026,f-.025,Math.cos(M)*s*.45,Math.sin(M)*s*.45,Ya)}for(let _=0;_<8;_++){const M=(_+.5)/8*Math.PI*2;l.addGeo(new as(s*.11,10),Ka,jn(f-.038,Math.cos(M)*s*.7,Math.sin(M)*s*.7,0,Math.PI/2,0))}return}l.addGeo(new xn(s*.78,s*.78,.028,26),Py,jn(f-.1,0,0,0,0,Math.PI/2));const d=.7;l.box(.07,s*.4,s*.24,f-.075,Math.cos(d)*s*.66,Math.sin(d)*s*.66,e.caliper??Mi,-d),e.cover&&l.addGeo(new as(s*.88,30),Mi,jn(f-.016,0,0,0,Math.PI/2,0));const v=e.n,g=e.pair||0,m=s*.74,p=s*.2+m/2;for(let _=0;_<v;_++)for(const M of g?[-g,g]:[0]){const y=_/v*Math.PI*2+M;l.box(.03,m,e.sw,f-.01,Math.cos(y)*p,Math.sin(y)*p,e.cell,y),e.accent&&l.box(.032,m*.85,.008,f-.008,Math.cos(y)*(p+m*.05),Math.sin(y)*(p+m*.05),e.accent,y)}l.addGeo(new xn(s*.22,s*.24,.05,20),e.cover?Mi:e.cell,jn(f-.005,0,0,0,0,Math.PI/2)),l.addGeo(new xn(s*.12,s*.12,.01,16),bs,jn(f+.022,0,0,0,0,Math.PI/2))};return c(o,t.tyreW,!1),i==="semi"&&c(a,t.dualW,!0),{front:o,drive:i==="semi"?a:o,R:n}}const tl=(()=>{const o=Br([[.27,.12],[.6,.02],[1,.08],[1.4,.28],[1.7,.5],[3.05,1.4],[3.35,1.63],[3.62,1.95],[3.82,2.3],[3.94,2.67],[4.01,3.02],[4.05,3.36]]),a=Br([[.27,1.26],[.6,1.3],[1.6,1.3],[2,1.275],[3,1.2],[3.69,1.15]]),c=R=>R<=3.69?a(R):a(3.69)-.36+Math.sqrt(Math.max(0,.36*.36-(R-3.69)*(R-3.69))),l=Br([[.27,.25],[1.1,.32],[1.7,.5],[3,.62],[4.05,.45]]),h=R=>Math.min(l(R),c(R)-.06,3.8-.05-o(R)),r=1.5,u=.62,f=.52,d=1.25,v=R=>{const U=Math.abs(R-r);return U<u?f+Math.sqrt(u*u-U*U):.27},g=R=>1.93+.04*qi(R-1,0,1),m=R=>3.05-.13*qi(R-1,0,1),p=R=>o(R)+h(R)+.16;return{H:4.05,CAB:3.8,YB:.27,dF:o,hw:c,rc:h,AX:r,AR:u,ACY:f,YK:d,archA:v,yWB:g,yWT:m,dP:p,DG1:3,YDT:2.9,yDB:(R,U)=>1.99-.22*(1-qi((R-p(U)-.1)/.95,0,1)**2)}})();function Vi(i,t){const e=tl.dF(i),n=tl.hw(i),s=tl.rc(i);if(t<=1)return[t*(n-s),i,e];if(t<=2){const o=(t-1)*Math.PI/2;return[n-s+s*Math.sin(o),i,e+s*(1-Math.cos(o))]}return[n,i,e+s+(t-2)]}function xl(i,t){const n=Vi(i,t+.004),s=Vi(i,Math.max(0,t-.004)),o=Vi(i+.004,t),a=Vi(i-.004,t),c=new L(n[0]-s[0],n[1]-s[1],n[2]-s[2]),l=new L(o[0]-a[0],o[1]-a[1],o[2]-a[2]),h=c.cross(l).normalize(),r=Vi(i,t);return h.x*r[0]+h.y*(r[1]-1.8)+h.z*(r[2]-2.6)<0&&h.negate(),[h.x,h.y,h.z]}function Th(i,t,e,n,s,o,a,c,l=18){const h=Array.isArray(c),r=(u,f)=>{const d=Vi(u,f),v=xl(u,f);return[d[0]+v[0]*a,d[1]+v[1]*a,d[2]+v[2]*a-t/2]};for(let u=0;u<l;u++){const f=cn(s,o,u/l),d=cn(s,o,(u+1)/l),g=xl((e+n)/2,(f+d)/2);h?i.quad(r(e,f),r(e,d),r(n,d),r(n,f),0,g,c):i.quad(r(e,f),r(e,d),r(n,d),r(n,f),c,g)}}function Wy(){const i=gr.semi,t=i.L,e=tl,n=mt=>mt-t/2,s=[];{const X=[0];let W=[e.YB,e.dF(e.YB),e.hw(e.YB)];for(let Ot=1;Ot<=2e3;Ot++){const Nt=cn(e.YB,e.H,Ot/2e3),jt=[Nt,e.dF(Nt),e.hw(Nt)];X.push(X[Ot-1]+Math.hypot(jt[0]-W[0],jt[1]-W[1],jt[2]-W[2])),W=jt}const Dt=.085,yt=X[2e3];for(let Ot=0,Nt=0;Ot<=yt;Ot+=Dt){for(;Nt<2e3&&X[Nt]<Ot;)Nt++;s.push(cn(e.YB,e.H,Nt/2e3))}s.push(e.YB,.41,.42,.43,.54,.56,.58,1.13,1.14,1.15,1.23,1.24,1.25,e.YK,1.66,1.68,1.7,1.73,1.75,1.77,1.79,1.89,1.91,1.93,1.95,1.97,1.99,2.88,2.9,2.92,2.94,3.01,3.05,3.07,3.09,3.12,e.H-.32,e.H-.004,e.H)}const o=[...new Set(s.filter(mt=>mt>=e.YB&&mt<=e.H).map(mt=>Math.round(mt*1e3)/1e3))].sort((mt,X)=>mt-X),a=[];for(let mt=0;mt<=e.CAB+1e-6;mt+=.11)a.push(mt);for(let mt=0;mt<=16;mt++)a.push(e.AX+e.AR*Math.cos(mt/16*Math.PI));a.push(e.AX-e.AR-.004,e.AX+e.AR+.004,3.095,3.105,e.DG1,e.DG1+.035,e.CAB-.16,e.CAB-.012,e.CAB);const c=[...new Set(a.filter(mt=>mt>=0&&mt<=e.CAB).map(mt=>Math.round(mt*2e3)/2e3))].sort((mt,X)=>mt-X),l=6,h=11,r=o.map(mt=>{const X=[],W=e.dF(mt),Dt=e.hw(mt),yt=e.rc(mt),Ot=W+yt;for(let Nt=0;Nt<=l;Nt++){const jt=Vi(mt,Nt/l);X.push([jt[0],mt,jt[2],Nt/l,0])}for(let Nt=1;Nt<=h;Nt++){const jt=Vi(mt,1+Nt/h);X.push([jt[0],mt,jt[2],1+Nt/h,1])}for(const Nt of c){const jt=Math.max(Nt,Ot);X.push([Dt,mt,jt,2+jt-Ot,2])}if(mt<e.YK)for(const Nt of X){const jt=Math.max(e.YB,e.archA(Nt[2]));Nt[4]===2&&jt>e.YB&&(Nt[1]=jt+(mt-e.YB)/(e.YK-e.YB)*(e.YK-jt))}return X}),u=r.length,f=r[0].length,d=mt=>[mt[0],mt[1],n(mt[2])],v=(mt,X)=>[mt[0]-X[0],mt[1]-X[1],mt[2]-X[2]],g=(mt,X)=>(mt[0]-X[0])**2+(mt[1]-X[1])**2+(mt[2]-X[2])**2,m=(mt,X,W,Dt)=>{let yt=mt,Ot=X;for(let Nt=0;Nt<40;Nt++){const jt=yt+W,re=Ot+Dt;if(jt<0||jt>=u||re<0||re>=f||(yt=jt,Ot=re,g(r[yt][Ot],r[mt][X])>1e-8))break}return r[yt][Ot]},p=r.map((mt,X)=>mt.map((W,Dt)=>{const yt=v(m(X,Dt,0,1),m(X,Dt,0,-1)),Ot=v(m(X,Dt,1,0),m(X,Dt,-1,0)),Nt=new L(yt[0],yt[1],yt[2]).cross(new L(Ot[0],Ot[1],Ot[2]));return Nt.lengthSq()<1e-14&&Nt.set(1,0,0),Nt.normalize(),Nt.x*W[0]+Nt.y*(W[1]-1.8)+Nt.z*(W[2]-2.6)<0&&Nt.negate(),Dt===0&&(Nt.x=0),Nt.normalize(),[Nt.x,Nt.y,Nt.z]})),_=(mt,X,W,Dt,yt)=>X<.42&&yt<2||yt===2&&X<.42&&e.archA(W)<=e.YB+.001?An:yt===2?Math.abs(W-3.1)<.006&&X>.55&&X<2.98?Gr:Bn:X>e.yWB(Dt)-.04&&X<e.yWT(Dt)+.04?Dc:Bn,M=new ls,y=new L,R=new L,U=new L,D=(mt,X,W)=>{const Dt=mt.map(d);if(y.fromArray(v(Dt[2],Dt[0])),R.fromArray(v(Dt[3],Dt[1])),U.crossVectors(y,R),U.lengthSq()<1e-12)return;const yt=[0,0,0];for(const Nt of X)for(let jt=0;jt<3;jt++)yt[jt]+=Nt[jt];const Ot=U.x*yt[0]+U.y*yt[1]+U.z*yt[2]<0;for(const Nt of[[0,1,2],[0,2,3]]){const jt=Ot?[Nt[0],Nt[2],Nt[1]]:Nt;if(y.fromArray(v(Dt[jt[1]],Dt[jt[0]])),R.fromArray(v(Dt[jt[2]],Dt[jt[0]])),!(y.cross(R).lengthSq()<1e-14))for(const re of jt)M.vert(Dt[re],X[re],W)}};for(let mt=0;mt<u-1;mt++)for(let X=0;X<f-1;X++){const W=[r[mt][X],r[mt][X+1],r[mt+1][X+1],r[mt+1][X]],Dt=[p[mt][X],p[mt][X+1],p[mt+1][X+1],p[mt+1][X]],yt=[0,1,2,3].map(Ot=>W.reduce((Nt,jt)=>Nt+jt[Ot],0)/4);D(W,Dt,_(yt[0],yt[1],yt[2],yt[3],W[1][4]))}const N=r[u-1],P=r[0];for(let mt=0;mt<f-1;mt++){const X=N[mt],W=N[mt+1];D([X,W,[0,X[1],W[2]],[0,X[1],X[2]]],[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],Bn);const Dt=P[mt],yt=P[mt+1];D([Dt,yt,[0,e.YB,yt[2]],[0,e.YB,Dt[2]]],[[0,-1,0],[0,-1,0],[0,-1,0],[0,-1,0]],Ka)}for(let mt=0;mt<u-1;mt++){const X=r[mt][f-1],W=r[mt+1][f-1],Dt=(X[1]+W[1])/2;D([X,W,[0,W[1],e.CAB],[0,X[1],e.CAB]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]],Dt<e.YK?An:Bn)}id(M,e.hw(.8)-.24,e.ACY,n(e.AX),e.AR-.01,.23,0,Math.PI,Ka);{const mt=yt=>e.dF(yt)+e.rc(yt),X=yt=>(e.hw(yt+.005)-e.hw(yt-.005))/.01,W=(yt,Ot,Nt,jt,re,Rt,Bt=16,O=8)=>{const he=(Vt,ce)=>{const ne=(Nt(cn(yt(2.3),Ot(2.3),Vt))+jt)/2,rt=cn(yt(ne),Ot(ne),Vt),ft=cn(Nt(rt),jt,ce),E=cn(yt(ft),Ot(ft),Vt),b=new L(1,-X(ft),0).normalize();return{p:[e.hw(ft)+b.x*re,ft+b.y*re,n(E)],n:[b.x,b.y,0]}};for(let Vt=0;Vt<Bt;Vt++)for(let ce=0;ce<O;ce++){const ne=[he(Vt/Bt,ce/O),he((Vt+1)/Bt,ce/O),he((Vt+1)/Bt,(ce+1)/O),he(Vt/Bt,(ce+1)/O)];Sh(M,ne.map(rt=>rt.p),ne.map(rt=>rt.n),Rt)}},Dt=yt=>{const Ot=e.dP(2.1),Nt=mt(1.97),jt=Ot+.12;if(yt<jt)return cn(1.97,1.8,qi((yt-Nt)/(jt-Nt),0,1));const re=qi((yt-jt)/(e.DG1-jt),0,1);return cn(1.8,2.06,re*re*(3-2*re))};W(mt,()=>e.DG1+.04,yt=>Dt(yt)-.04,2.96,.003,Dc,20,6),W(mt,yt=>e.dP(yt),Dt,2.92,.006,Dc,8,6),W(yt=>e.dP(yt)+.1,()=>e.DG1,Dt,e.YDT,.006,Dc,16,6)}Th(M,t,1.135,1.245,0,1.62,.003,ba,26);{const mt=n(e.CAB)-.01,X=mt+.33,W=.035,Dt=o.filter(Ot=>Ot>=1.32).map(Ot=>{const Nt=xl(Ot,2.5);return{x:e.hw(Ot),y:Ot,n:[Nt[0],Nt[1],0]}}).filter(Ot=>Ot.x>e.hw(e.H)+.02||Ot.y>=e.H-.001);for(let Ot=0;Ot<Dt.length-1;Ot++){const Nt=Dt[Ot],jt=Dt[Ot+1],re=(O,he,Vt)=>[O.x-O.n[0]*Vt,O.y-O.n[1]*Vt,he];Sh(M,[re(Nt,mt,0),re(jt,mt,0),re(jt,X,0),re(Nt,X,0)],[Nt.n,jt.n,jt.n,Nt.n],Bn);const Rt=[-Nt.n[0],-Nt.n[1],0],Bt=[-jt.n[0],-jt.n[1],0];Sh(M,[re(Nt,mt,W),re(jt,mt,W),re(jt,X,W),re(Nt,X,W)],[Rt,Bt,Bt,Rt],Bn),M.quad(re(Nt,X,0),re(jt,X,0),re(jt,X,W),re(Nt,X,W),Bn,[0,0,1])}const yt=Dt[0];M.quad([yt.x,yt.y,mt],[yt.x,yt.y,X],[yt.x-W,yt.y,X],[yt.x-W,yt.y,mt],Bn,[0,-1,0])}const x=M.append(M.mirroredX()),z=i.W/2,B=n(e.CAB);{const mt=Vi(1.98,1.9),X=n(mt[2]);for(const W of[1,-1])x.box(.34,.06,.07,W*(mt[0]+.12),2,X+.02,An,0,0,W*.12),x.box(.1,.72,.2,W*(mt[0]+.3),2.36,X-.02,An),x.box(.075,.6,.012,W*(mt[0]+.3),2.37,X+.084,dl),x.box(.05,.6,.035,W*(z-.025),1.45,n(3.2),Ya)}x.box(.34,.16,.012,0,.62,n(e.dF(.62))-.006,kp),x.box(.8,.55,.02,0,1.75,n(e.CAB)+.012,An);const et=t/2-B+.3;for(const mt of[1,-1])x.addGeo(new xn(1.0824,1.0824,et,8,1,!1,Math.PI/8),An,jn(mt*.47,.98,(B-.3+t/2)/2,Math.PI/2,0,0,.11,1,.16));for(const mt of[B+.3,2.35,3.4])x.box(1.06,.12,.1,0,.96,mt,An);const vt=(i.axles[1]+i.axles[2])/2;x.box(.86,.12,.7,0,1.12,vt,An),x.addGeo(new xn(.62,.62,.07,32),Mi,jn(0,1.215,vt)),x.box(.17,.02,.66,0,1.252,vt+.33,Gr);for(const mt of[1,-1])x.box(.36,.02,.5,mt*.24,1.252,vt+.46,An,0,mt*.5,0);x.box(.6,.06,.2,0,1.2,vt+.72,An,-.35);for(const mt of[i.axles[1],i.axles[2]])x.addGeo(new xn(.13,.13,1.9,12),An,jn(0,i.R,mt,0,0,Math.PI/2)),x.addGeo(new Go(.24,12,8),An,jn(0,i.R,mt,0,0,0,1.2,.9,1));for(const mt of[1,-1]){const X=mt*(z-i.dualW/2-.02);for(const Ot of[i.axles[1],i.axles[2]])id(x,X,i.R,Ot,i.R+.1,(i.dualW+.1)/2,.3,2.6,An);for(const Ot of[i.axles[1],i.axles[2]])x.box(i.dualW+.06,.55,.025,X,.5,Ot+i.R+.17,An);const W=B-.15,Dt=i.axles[1]-i.R-.3,yt=Dt-W;x.box(.05,.6,yt,mt*(z-.035),.71,(W+Dt)/2,Bn),x.box(.055,.15,yt,mt*(z-.037),.34,(W+Dt)/2,An),x.box(.4,.5,.8,mt*.82,.8,B+.25,An)}x.box(2.3,.14,.14,0,.72,t/2-.08,An);const wt=[1,.98,.95],pt=[1,-.06,0],Lt=[1,.42,.04],tt=new ls(!0),Ht=new ls(!0);Th(tt,t,1.15,1.23,0,1.45,.008,wt.map(mt=>mt*2.8),26),Th(tt,t,1.15,1.23,1.48,1.6,.008,Lt.map(mt=>mt*1.6),4);const se=3.09,ue=e.hw(se)-e.rc(se);for(const mt of[.13/ue,1.3]){const X=Vi(se,mt),W=xl(se,mt);tt.box(.08,.035,.05,X[0],se,n(X[2])+W[2]*.012,0,0,0,0,Lt.map(Dt=>Dt*1.5))}{const mt=Vi(3.6,2.3);tt.box(.03,.05,.12,mt[0]+.004,3.6,n(mt[2]),0,0,0,0,Lt)}const ae=tt.append(tt.mirroredX());{const mt=Vi(se,0);ae.box(.08,.035,.05,0,se,n(mt[2])-.012,0,0,0,0,Lt.map(X=>X*1.5))}for(const mt of[1,-1])Ht.box(.3,.09,.03,mt*.85,.72,t/2,0,0,0,0,pt.map(X=>X*1.4));for(const mt of[1,-1])Ht.box(.06,.06,.02,mt*(e.hw(3.8)-.15),3.8,B+.015,0,0,0,0,pt);return{body:x,head:ae,tail:Ht}}const Xy=new Map,cf=new Map,qy=new Map;function Za(i,t,e){let n=i.get(t);return n||(n=e(),i.set(t,n)),n}function Yy(i,t,e,n){const s=i+":"+t+":"+e+":"+n;return Za(qy,s,()=>{const o=new Uint8Array(Sa*4),a=new Uint8Array(Sa*4);for(let l=0;l<Sa;l++){const[h,r,u,f,d]=Dy[l],v=l===Bn?i:h;o[l*4]=v>>16&255,o[l*4+1]=v>>8&255,o[l*4+2]=v&255,o[l*4+3]=255;const g=l===Bn?e:r,m=l===Bn?t:u;a[l*4]=Math.round(f*255),a[l*4+1]=Math.round(g*255),a[l*4+2]=Math.round(m*255),a[l*4+3]=Math.round((d??1)*255)}const c=(l,h)=>{const r=new Zu(l,Sa,1,Di);return r.magFilter=bi,r.minFilter=bi,r.generateMipmaps=!1,h&&(r.colorSpace=In),r.needsUpdate=!0,r};return{map:c(o,!0),orm:c(a,!1)}})}function Ky(i){const t=new Xt(i),e={};return t.getHSL(e,In),e.l>.72?[.03,.32]:e.l>.4&&e.s>.12?[.55,.3]:[.4,.3]}function $y(i){return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
      #if defined( RE_IndirectDiffuse )
        iblIrradiance = mix( iblIrradiance, vec3( dot( iblIrradiance, vec3( 0.2126, 0.7152, 0.0722 ) ) ), 0.8 );
      #endif
      #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        { float m = max( max( radiance.r, radiance.g ), radiance.b ), K = 1.4;
          if ( m > K ) radiance *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / K ) ) / m; }
        #ifdef USE_CLEARCOAT
          { float m = max( max( clearcoatRadiance.r, clearcoatRadiance.g ), clearcoatRadiance.b ), K = 1.45;
            if ( m > K ) clearcoatRadiance *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / K ) ) / m; }
        #endif
      #endif`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      // the show lights are very hot at close range: soft-knee the direct light per pixel so white paint and stainless
      // keep their shading (and the windscreen / panel detail) instead of clipping to a bloom blob
      { vec3 dc = max( material.diffuseColor, vec3( 0.02 ) );
        vec3 e = ( reflectedLight.directDiffuse + reflectedLight.indirectDiffuse ) / dc;
        float m = max( max( e.r, e.g ), e.b ), K = 0.62;
        if ( m > K ) { float f = ( K + ( m - K ) / ( 1.0 + ( m - K ) / 0.28 ) ) / m; reflectedLight.directDiffuse *= f; reflectedLight.indirectDiffuse *= f; } }
      { float m = max( max( reflectedLight.directSpecular.r, reflectedLight.directSpecular.g ), reflectedLight.directSpecular.b ), K = 0.6;
        if ( m > K ) reflectedLight.directSpecular *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / 0.35 ) ) / m; }
      #ifdef USE_CLEARCOAT
      { float m = max( max( clearcoatSpecularDirect.r, clearcoatSpecularDirect.g ), clearcoatSpecularDirect.b ), K = 0.7;
        if ( m > K ) clearcoatSpecularDirect *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / 0.5 ) ) / m; }
      #endif`)},i.customProgramCacheKey=()=>"fleet-stadium-v6",i}function jy(i,t,e){let n,s,o;if(i==="semi"&&(t==null||typeof t!="string")){n=t!=null?new Xt(t).getHex(In):Rr.white[0];const c=new Xt(n),l={};c.getHSL(l,In),l.l>.6&&(n=Rr.white[0]),s=Rr.white[1],o=Rr.white[2]}else typeof t=="string"&&Rr[t]?[n,s,o]=Rr[t]:(n=new Xt(t).getHex(In),[s,o]=Ky(n));const a=i==="cybertruck"?"ss":n+":"+s+":"+o;return Za(cf,"body:"+a+":"+(e?e.uuid:""),()=>{const c=Yy(n,s,o,i==="cybertruck");return $y(new Ei({map:c.map,roughnessMap:c.orm,metalnessMap:c.orm,clearcoatMap:c.orm,specularIntensityMap:c.orm,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.09,specularIntensity:1,envMap:e||null,envMapIntensity:1.35}))})}function Eh(i,t){const e=qi(t,0,1);return Za(cf,"lamp:"+i+":"+e,()=>new $e({vertexColors:!0,color:new Xt(2.8*e+.08,2.8*e+.08,2.8*e+.08)}))}let ua=null;function Zy(){return Za(cf,"shadow",()=>{const e=new Uint8Array(32768);for(let n=0;n<128;n++)for(let s=0;s<64;s++){const o=Math.abs((s+.5)/64*2-1),a=Math.abs((n+.5)/128*2-1),c=Math.max(0,o-.62)/.38,l=Math.max(0,a-.8)/.2,h=Math.min(1,Math.sqrt(c*c+l*l)),r=Math.pow(1-h,1.6)*.82;e.set([0,0,0,Math.round(r*255)],(n*64+s)*4)}return ua=new Zu(e,64,128,Di),ua.magFilter=Yi,ua.minFilter=Yi,ua.needsUpdate=!0,new $e({map:ua,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})})}function Jy(i){return Za(Xy,i,()=>{const t=Vy(i);let e,n,s;if(i==="semi")({body:e,head:n,tail:s}=Wy());else{const f=zy(i);e=ky(f),Hy(e,f,i),n=sd(f,i,!1),s=sd(f,i,!0)}const o=t.front.build(),a=t.front.mirroredX().build(),c=t.drive.build(),l=t.drive.mirroredX().build(),h=e.build(),r=new ls().append(e);for(const f of Xp(i)){const d=(f.drive?f.sx>0?c:l:f.sx>0?o:a).clone().translate(f.x,f.y,f.z);r.addRaw(d)}const u=new ls(!0).append(n).append(s);return{body:h,head:n.build(),tail:s.build(),baked:r.build(),lamps:u.build(),wheelR:o,wheelL:a,driveR:c,driveL:l,shadow:new yn(gr[i].W+.5,gr[i].L+.7).rotateX(-Math.PI/2)}})}function Xp(i){const t=gr[i],e=[],n=i==="semi"?["f","m","r"]:["f","r"];return[...t.axles].sort((s,o)=>s-o).forEach((s,o)=>{const a=i==="semi"&&o>0,c=a?t.dualW:t.tyreW;for(const[l,h]of[["l",-1],["r",1]])e.push({name:`wheel_${n[o]}${l}`,drive:a,sx:h,x:h*(t.W/2-c/2-.02-(t.inset||0)),y:t.R,z:s})}),e}function rd(i,t={}){const e=gr[i];if(!e)throw new Error(`createTeslaVehicle: unknown kind '${i}'`);const n=Jy(i);let s=t.color;if(s==null){const v=Hp[i],g=Q0[i]=(Q0[i]||0)+1;s=v[(g-1)%v.length]}const o=jy(i,s,t.envMap),a=new hn;a.name=`tesla-${i}`;const c=!!t.spinWheels,l=new be(c?n.body:n.baked,o);l.name="body",a.add(l);const h=[];for(const v of Xp(i)){const g=new hn;if(g.name=v.name,g.position.set(v.x,v.y,v.z),g.userData.baked=!c,c){const m=new be(v.drive?v.sx>0?n.driveR:n.driveL:v.sx>0?n.wheelR:n.wheelL,o);m.name="wheel",g.add(m)}a.add(g),h.push(g)}const r=t.lights??1;let u,f;c?(u=new be(n.head,Eh("h",r)),u.name="headlight",a.add(u),f=new be(n.tail,Eh("t",r)),f.name="taillight",a.add(f)):(u=f=new be(n.lamps,Eh("h",r)),u.name="lamps",a.add(u));const d=new be(n.shadow,Zy());return d.name="shadow",d.position.y=.015,d.renderOrder=1,a.add(d),a.userData={kind:i,length:e.L,width:e.W,height:e.H,wheelRadius:e.R,wheels:h,lights:{head:[u],tail:[f]}},a}const qp=59/136,ns=i=>i*qp,yo=(i,t,e)=>Math.max(t,Math.min(e,i)),vs=(i,t,e)=>{const n=yo((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Tr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Sn=Ve,Yp=Gi,Qy=i=>Yp(ns(i)),Ye=Sn.lateral,Ti=Sn.flip,od=ur;function _l(i){return Lo(i,{pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0})}const rn=i=>_l(i).pos.z,Ft={hangarBack:-40,door:26,roadStart:24,ramp:Sn.ramp,fleet:Sn.fleet,landingS:Sn.landing?Sn.landing.s:Sn.fleet.s1+22,gate:Sn.checkpoint.s,flip0:Ti.s0,flipLip:Ti.sLip,boost0:Sn.boostArm.s0,boost1:Sn.boostArm.s1,flight0:Sn.flight.s0,flight1:Sn.flight.s1,takeoff:Sn.mega.s0,megaLip:Sn.mega.s1,landStrip:Qy(125),finish:Sn.finish.s,end:Sn.finish.s+700};Ft.cityEnd=Ft.boost0+60;const Du=1.9,ad=3.1;function wa(i){return i<Ft.flip0?9-(9-Du)*vs(Ft.flip0-110,Ft.flip0-20,i):i<Ft.flipLip?Du:ad+(9-ad)*vs(Ft.flipLip+30,Ft.flipLip+110,i)}const Hn={uBeat:{value:0},uTime:{value:0},uFlight:{value:0}},Ah=.0026,fa=new Xt(853536),tM=new Xt(1902630),Yo=`
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float aaLine(float x, float w){ float fw = max(fwidth(x), 1e-4); return 1.0 - smoothstep(w, w + fw*1.5, abs(x)); }
`;function Uc(i){const t=us.merge([de.fog,{uChase:{value:i.chase??1},uPulse:{value:i.pulse??.35}}]);return t.uBeat=Hn.uBeat,t.uTime=Hn.uTime,new Ze({uniforms:t,vertexShader:`
      attribute vec3 color; attribute float aS; attribute float aOn;
      uniform float uBeat, uTime, uChase, uPulse;
      varying vec3 vC; varying float vB;
      #include <fog_pars_vertex>
      void main(){
        vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
        float since = uBeat - aOn;
        float on = step(0.0, since);
        float flash = mix(0.05, 1.0 + 2.5*exp(-max(since,0.0)*5.0), on);
        float bp = exp(-fract(uBeat)*5.0);
        float ch = smoothstep(0.82, 1.0, fract(aS/56.0 - uBeat*0.5)) * uChase;
        vB = flash * (0.72 + uPulse*bp + 1.1*ch);
        vC = color;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      varying vec3 vC; varying float vB;
      #include <fog_pars_fragment>
      void main(){
        gl_FragColor = vec4(vC*vB, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,fog:!0,side:i.side??Ts})}function cd(i){const t=us.merge([de.fog,{uOpaque:{value:i?1:0},uBoost:{value:new qt(Ft.boost0,Ft.takeoff)},uLines:{value:new en(Ft.door+3,Ft.finish,Ft.ramp.s0,Ft.ramp.s1)},uTun:{value:new qt(-1e9,-1e9)}}]);return t.uBeat=Hn.uBeat,t.uTime=Hn.uTime,new Ze({uniforms:t,vertexShader:`
      attribute float aHW;
      varying vec2 vUv; varying float vHW; varying vec3 vN; varying vec3 vV; varying vec3 vWP;
      #include <fog_pars_vertex>
      void main(){
        vUv = uv; vHW = aHW;
        vec4 wp = modelMatrix * vec4(position,1.0);
        vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vWP = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uBeat, uTime, uOpaque; uniform vec2 uBoost; uniform vec4 uLines; uniform vec2 uTun;
      varying vec2 vUv; varying float vHW; varying vec3 vN; varying vec3 vV; varying vec3 vWP;
      #include <fog_pars_fragment>
      ${Yo}
      void main(){
        float lat = vUv.x*2.0-1.0; float a = abs(lat); float m = a*vHW; float v = vUv.y;
        float bp = exp(-fract(uBeat)*4.0);
        vec3 cyan = vec3(0.15,0.95,1.6), mag = vec3(1.7,0.12,0.95), wht = vec3(1.4,1.35,1.5), org = vec3(2.2,0.7,0.1);
        vec3 col = vec3(0.012,0.011,0.02) + (vnoise(vec2(lat*vHW*3.0, v*1.3))-0.5)*0.008;
        // panel seams + fine grid (Distance-style tech floor)
        float seam = aaLine((fract(v/12.0)-0.5)*12.0 - 6.0 + 6.0, 0.035);
        col += cyan * 0.06 * aaLine(fract(v/12.0)*12.0 - 6.0, 0.03);
        col += cyan * 0.04 * aaLine(fract(m/3.0)*3.0 - 1.5, 0.02) * step(m, vHW-1.2);
        // centre dashes + lane lines
        // short emissive dashes that fade out near the lens (no giant grey quad in the lower third)
        float nearF = smoothstep(4.0, 18.0, distance(cameraPosition, vWP));
        float dash = step(fract(v/9.0), 0.22);
        col += vec3(0.7,1.2,1.7) * 0.55 * aaLine(lat*vHW, 0.035) * dash * nearF;
        col += wht * 0.22 * aaLine(m - vHW*0.5, 0.04) * step(fract(v/6.0+0.25), 0.3) * nearF;
        // speed-streak floor lines: thin rails with light pulses racing forward on the beat
        for (int k=0;k<3;k++){
          float mk = vHW*(0.2 + 0.22*float(k));
          float ln = aaLine(m - mk, 0.025);
          float ph = fract(v/24.0 + uBeat*(0.5 + 0.12*float(k)) + float(k)*0.37 + step(0.0, lat)*0.5);
          float pulse = smoothstep(0.0, 0.08, ph) * (1.0 - smoothstep(0.1, 0.55, ph));
          col += mix(mag, cyan, float(k)*0.5) * ln * (0.05 + 0.9*pulse) * (0.4 + 0.6*nearF);
        }
        // glowing kerb line + halo bleeding onto the wet surface
        float chase = smoothstep(0.75,1.0, fract(v/56.0 - uBeat*0.5));
        float kp = 0.8 + 0.35*bp + 1.4*chase;
        float kd = m - (vHW - 0.75);
        col += cyan * 2.6 * kp * aaLine(kd, 0.07);
        col += cyan * 0.22 * kp * exp(-abs(kd)*1.6) * step(kd, 0.0);
        // outer kerb blocks
        float blk = step(0.5, fract(v/3.0));
        col += mix(mag*1.2, wht*0.9, blk) * step(vHW-0.45, m) * 0.75;
        // boost chevrons
        float inB = step(uBoost.x, v)*step(v, uBoost.y);
        float cv = fract((v + m*0.9)/5.0 - uBeat*0.25);
        float chev = smoothstep(0.0,0.04,cv)*(1.0-smoothstep(0.22,0.27,cv))*step(m, vHW*0.62);
        col += org * chev * inB * (0.6 + 1.2*bp);
        // ramp-approach chevrons (magenta)
        float inR = step(uLines.z - 60.0, v)*step(v, uLines.z);
        float cr = fract((v + m*0.9)/4.0);
        col += mag * smoothstep(0.0,0.04,cr)*(1.0-smoothstep(0.2,0.25,cr))*step(m, vHW*0.6) * inR * 0.9;
        // tunnel: light-runway chevrons across the full deck, racing forward on the beat, cyan/magenta
        float inT = step(uTun.x, v) * step(v, uTun.y);
        float tc = fract((v + m*0.7)/6.0 - uBeat*0.5);
        float tchev = smoothstep(0.0,0.03,tc)*(1.0-smoothstep(0.1,0.16,tc))*step(m, vHW-1.0);
        col += mix(cyan, mag, step(0.5, fract(v/24.0))) * tchev * inT * (0.25 + 0.6*bp);
        col += cyan * 0.05 * inT * (1.0 - smoothstep(0.0, 3.0, m));
        // start + finish checkers
        for (int k=0;k<2;k++){
          float s0 = k==0 ? uLines.x : uLines.y;
          float inC = step(s0, v)*step(v, s0 + 2.4);
          float ck = mod(floor(m/0.8 + 10.0) + floor((v-s0)/0.8), 2.0);
          col = mix(col, mix(vec3(0.02), wht*1.3, ck), inC * step(m, vHW-0.8));
        }
        float lum = max(max(col.r,col.g),col.b);
        float alpha = uOpaque > 0.5 ? 1.0 : clamp(0.64 + lum*1.5, 0.0, 1.0);
        if (uOpaque > 0.5) {
          float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 4.0);
          col += vec3(0.05,0.015,0.08)*fr;
          // hex-ish tech plates + beat-synced chevrons racing up the loop
          vec2 hp = vec2(m*0.55, v*0.32); hp.x += step(1.0, mod(floor(hp.y), 2.0))*0.5;
          vec2 hf = abs(fract(hp) - 0.5);
          float plate = aaLine(max(hf.x, hf.y) - 0.5, 0.025);
          col += vec3(0.4,0.12,0.9) * 0.05 * plate * step(m, vHW-1.0);
          float lc = fract((v - m*1.1)/7.0 - uBeat*0.5);
          float chv = smoothstep(0.0,0.03,lc)*(1.0-smoothstep(0.07,0.11,lc))*step(m, vHW*0.7);
          col += mix(mag, org, 0.35) * chv * (0.35 + 1.1*bp);
        }
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,fog:!0,transparent:!i,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:i?je:Ts})}function eM(){const i=us.merge([de.fog,{}]);return i.uBeat=Hn.uBeat,new Ze({uniforms:i,vertexShader:`
      attribute vec4 aB;
      varying vec3 vL; varying vec3 vS; varying vec3 vNo; varying vec4 vB; varying float vDepth;
      void main(){
        mat4 im = instanceMatrix;
        vS = vec3(length(im[0].xyz), length(im[1].xyz), length(im[2].xyz));
        vec4 wp = modelMatrix * im * vec4(position,1.0);
        vL = position; vNo = normal; vB = aB;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 fogColor; uniform float fogDensity; uniform float uBeat;
      varying vec3 vL; varying vec3 vS; varying vec3 vNo; varying vec4 vB; varying float vDepth;
      ${Yo}
      vec3 hueCol(float i){ i = mod(i,4.0);
        return i<1.0 ? vec3(0.1,0.85,1.7) : i<2.0 ? vec3(1.7,0.1,0.85) : i<3.0 ? vec3(2.2,0.55,0.07) : vec3(0.75,0.25,2.0); }
      void main(){
        vec3 n = vNo; vec3 p = vL; vec3 sc = vS;
        float seed = vB.x, lit = vB.z, style = vB.w; vec3 hc = hueCol(vB.y);
        float hgt = p.y*sc.y;
        vec3 col;
        if (n.y > 0.5) {
          vec2 q = vec2(p.x*sc.x, p.z*sc.z); vec2 e = 0.5*sc.xz - abs(q);
          float edge = 1.0 - smoothstep(0.25, 0.6, min(e.x,e.y));
          col = vec3(0.008,0.008,0.016) + hc*edge*(style>0.5 ? 1.6 : 0.25);
        } else if (n.y < -0.5) { col = vec3(0.0); }
        else {
          bool sx = abs(n.x) > 0.5;
          float u = sx ? p.z*sc.z : p.x*sc.x;
          float halfW = sx ? sc.z*0.5 : sc.x*0.5;
          vec2 cs = vec2(2.6, 3.4);
          vec2 g = vec2(u + halfW, hgt)/cs; vec2 cell = floor(g); vec2 f = fract(g);
          float face = sx ? (n.x>0.0?1.0:2.0) : (n.z>0.0?3.0:4.0);
          float rnd = h21(cell + vec2(seed*91.7 + face*13.1, seed*17.3));
          float floorOn = step(0.22, h21(vec2(cell.y*1.37, seed*7.1 + face)));
          float blockOn = step(0.3, h21(floor(cell/vec2(4.0,6.0)) + seed*3.3 + face));
          float on = step(rnd, lit) * floorOn * blockOn;
          float win;
          if (style < 0.5) win = step(0.16,f.x)*step(f.x,0.84)*step(0.2,f.y)*step(f.y,0.8);            // punched grid
          else if (style < 1.5) win = step(0.28,f.y)*step(f.y,0.74)*step(0.06, fract(g.x*1.5));       // ribbon bands
          else if (style < 2.5) win = step(0.38,f.x)*step(f.x,0.62)*step(0.04,f.y);                   // vertical strips
          else win = step(0.08,f.x)*step(f.x,0.92)*step(0.55,f.y)*step(f.y,0.72);                     // thin slots
          float fw = max(fwidth(g.x), fwidth(g.y));
          vec3 wc = mix(vec3(1.7,1.05,0.55), vec3(0.55,0.9,1.7), step(0.62, h21(cell.yx + seed)));
          wc = mix(wc, hc*0.8, step(0.9, h21(cell*0.37 + seed)));
          wc *= 0.35 + 1.1*h21(cell + 3.7);
          vec3 facade = vec3(0.010,0.009,0.02) + vec3(0.02,0.008,0.035)*(1.0 - p.y);
          vec3 nearC = mix(facade, mix(vec3(0.016,0.02,0.035), wc, on), win);
          vec3 farC = facade + vec3(1.2,0.9,0.8) * lit * 0.13 * 0.75;
          col = mix(nearC, farC, smoothstep(0.3, 0.9, fw));
          col += hc * 0.07 * exp(-hgt*0.25);
          float ed = halfW - abs(u);
          if (style > 0.5 && style < 1.5) col += hc * (1.0 - smoothstep(0.12, 0.4, ed)) * 1.8;
          if (style > 1.5 && style < 2.5) col += hc * step(0.965, fract(hgt/(cs.y*5.0))) * 1.5;
          if (style > 2.5) col += hc * 0.9 * step(0.5, fract(u/1.3)) * step(sc.y - 9.0, hgt) * step(hgt, sc.y - 2.0);
          float top = sc.y - hgt;
          col += hc * (1.0 - smoothstep(0.25, 0.6, top)) * (style > 0.5 ? 2.2 : 1.3);
          col += hc * 0.5 * (1.0 - smoothstep(0.08, 0.22, ed));                       // vertical corner trims on every tower
        }
        float fd = fogDensity*0.5*vDepth; float ff = 1.0 - exp(-fd*fd);
        col = mix(col, fogColor, ff);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,fog:!0})}function _o(i,t=.35){const e={uColor:{value:new Xt().copy(i)},uStrength:{value:t},uBeat:Hn.uBeat};return new Ze({uniforms:e,vertexShader:`
      varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0);
        vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`
      uniform vec3 uColor; uniform float uStrength; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ float along = pow(1.0 - vUv.y, 1.6);
        float rim = pow(abs(dot(normalize(vN), normalize(vV))), 1.5);
        gl_FragColor = vec4(uColor * along * rim * uStrength, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:!0,blending:Pn,depthWrite:!1,side:je})}function Ch(i,{accent:t=[.15,.7,1.6],cell:e=[2.4,1.2],lit:n=.05,seamGlow:s=.06,key:o="a"}={}){return i.onBeforeCompile=a=>{a.uniforms.uPAccent={value:new L(t[0],t[1],t[2])},a.uniforms.uPCell={value:new qt(e[0],e[1])},a.uniforms.uPLit={value:n},a.uniforms.uPSeam={value:s},a.uniforms.uBeat=Hn.uBeat,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPW; varying vec3 vPN;`).replace("#include <project_vertex>",`#include <project_vertex>
  vPW = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vPN = normalize(mat3(modelMatrix) * objectNormal);`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vPW; varying vec3 vPN; uniform vec3 uPAccent; uniform vec2 uPCell; uniform float uPLit, uPSeam, uBeat;
        float pH(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
        float pSeam = 0.0, pN = 0.5, pFar = 0.0, pSlot = 0.0;`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 an = abs(vPN);
          vec2 pq = an.y > 0.6 ? vPW.xz : (an.x > 0.6 ? vPW.zy : vPW.xy);
          vec2 g = pq / uPCell; vec2 cell = floor(g); vec2 f = fract(g) - 0.5;
          vec2 fw = max(fwidth(g), vec2(1e-4));
          pFar = smoothstep(0.18, 0.5, max(fw.x, fw.y));
          vec2 e = 0.5 - abs(f);
          vec2 sm = 1.0 - smoothstep(vec2(0.012), vec2(0.012) + fw*1.5, e);
          pSeam = max(sm.x, sm.y) * (1.0 - pFar);
          pN = pH(cell + floor(an.x*3.0 + an.y*7.0));
          float slotOn = step(1.0 - uPLit, pH(cell*1.31 + 7.7));
          pSlot = slotOn * step(abs(f.x), 0.38) * step(abs(f.y), 0.05) * (1.0 - pFar);
          diffuseColor.rgb *= (0.72 + 0.56*pN) * (1.0 - 0.55*pSeam);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor * (0.7 + 0.6*pN) + pSeam*0.25, 0.05, 1.0);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += uPAccent * (pSlot * (0.7 + 0.6*exp(-fract(uBeat)*4.0)) + pSeam * uPSeam);`)},i.customProgramCacheKey=()=>"panel-"+o,i}const lf=new an(1,1,1);(()=>{const i=new an(1,1,1,1,1,1),t=i.attributes.position;for(let e=0;e<t.count;e++)t.getY(e)>0&&t.setX(e,t.getX(e)*.62-.08);return i.computeVertexNormals(),i})();const ki=new Ge,yl=new ni,ld=new Ci,Il=new L,hf=new L;class ke{constructor(){this.geos=[]}add(t,e,n=[1,1,1],s=0,o=-1e3){let a=t.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);if(a.attributes.uv||a.setAttribute("uv",new Ee(new Float32Array(a.attributes.position.count*2),2)),!a.index){const u=a.attributes.position.count,f=new Array(u);for(let d=0;d<u;d++)f[d]=d;a.setIndex(f)}e&&a.applyMatrix4(e);const c=a.attributes.position.count,l=new Float32Array(c*3),h=new Float32Array(c),r=new Float32Array(c);for(let u=0;u<c;u++)l[u*3]=n[0],l[u*3+1]=n[1],l[u*3+2]=n[2],h[u]=s,r[u]=o;return a.setAttribute("color",new Nn(l,3)),a.setAttribute("aS",new Nn(h,1)),a.setAttribute("aOn",new Nn(r,1)),this.geos.push(a),this}box(t,e,n,s,o,a,c,l=-a,h=-1e3,r=0,u=0,f=0){return ld.set(r,u,f),yl.setFromEuler(ld),ki.compose(Il.set(s,o,a),yl,hf.set(t,e,n)),this.add(lf,ki,c,l,h)}mesh(t){if(!this.geos.length)return null;const e=So(this.geos,!1);for(const s of this.geos)s.dispose();return this.geos=[],new be(e,t)}}function Li(i,t,{color:e=[1,1,1],on:n=-1e3,hw:s=!1}={}){const o=[],a=[],c=[],l=[],h=[],r=[];let u=0;for(const v of i){const g=_l(v),m=new L().crossVectors(g.fwd,g.up).normalize(),p=t(v);u=p.length;const _=wa(v);for(let M=0;M<p.length;M++){const[y,R]=p[M],U=g.pos.clone().addScaledVector(m,y).addScaledVector(g.up,R);o.push(U.x,U.y,U.z),a.push(M/(p.length-1),v),c.push(e[0],e[1],e[2]),l.push(v),h.push(n),r.push(_)}}const f=[];for(let v=0;v<i.length-1;v++)for(let g=0;g<u-1;g++){const m=v*u+g,p=m+1,_=m+u,M=_+1;f.push(m,p,_,p,M,_)}const d=new nn;return d.setAttribute("position",new Ee(o,3)),d.setAttribute("uv",new Ee(a,2)),d.setAttribute("color",new Ee(c,3)),d.setAttribute("aS",new Ee(l,1)),d.setAttribute("aOn",new Ee(h,1)),s&&d.setAttribute("aHW",new Ee(r,1)),d.setIndex(f),d.computeVertexNormals(),d}function Rh(i,t,e){const n=[];for(let s=i;s<t;s+=e)n.push(s);return n.push(t),n}function hd(i,t){const e=[];let n=i;for(;n<t;){e.push(n);const s=n>Ft.flip0-1&&n<Ft.flipLip+1||n>Ft.ramp.s0-1&&n<Ft.ramp.s1+1||n>Ft.takeoff-1&&n<Ft.megaLip+1,o=n>Ft.flip0-170&&n<Ft.flipLip+170;n+=s?1.2:o?6:24}return e.push(t),e}const bt={cyan:[.15,1,1.7],cyanW:[.7,1.6,2],mag:[1.9,.12,1],org:[2.4,.75,.08],red:[2.4,.08,.12],wht:[1.8,1.8,2],warm:[2,1.4,.8],vio:[.8,.25,2.2],blue:[.2,.5,2.4],green:[.2,2.2,.6],amber:[2.4,1.1,.1],metal:[.13,.12,.17],metalD:[.05,.05,.07],metalL:[.2,.19,.24],conc:[.06,.055,.075]},ud=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],is=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];function Jn(i,t,e,n,s,o,a,c,l,h,r,u=0,f=-Math.PI/2){const d=e*Math.cos(Math.PI/t),v=2*e*Math.sin(Math.PI/t);for(let g=0;g<t;g++){const m=f+g*Math.PI*2/t,p=Math.cos(m)*d,_=Math.sin(m)*d,M=o+p*Math.cos(u),y=c-p*Math.sin(u);i.box(v+n*.8,n,s,M,a+_,y,l,h,r,0,u,m+Math.PI/2)}}function nM(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,1024,1024),[["VOLT","#2ef"],["HYPER","#f3c"],["RUSH","#fa2"],["MACH 1","#8af"],["NEON","#f45"],["ROADSTER RUSH","#fff"],["ZERO-G","#2fc"],["FINISH","#fff"]].forEach(([s,o],a)=>{const c=a*128,l=t.createLinearGradient(0,c,1024,c+128);l.addColorStop(0,"rgba(255,255,255,0.05)"),l.addColorStop(1,"rgba(255,255,255,0.0)"),t.fillStyle=l,t.fillRect(6,c+6,1012,116),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(10,c+10,1004,108),t.font=`italic 900 ${s.length>8?70:88}px Arial Black, Arial, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=18,t.fillStyle=o,t.fillText(s,512,c+66),t.shadowBlur=0,t.fillStyle="#fff",t.globalAlpha=.85,t.fillText(s,512,c+66),t.globalAlpha=1,t.fillStyle=o;for(let h=0;h<5;h++)t.fillRect(40+h*22,c+30,10,68)});const n=new Al(i);return n.colorSpace=In,n.anisotropy=4,n}function Ph(i,t,e,n,s=2.2){const o=new yn(e,n),a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setY(l,(7-t+a.getY(l))/8);const c=new $e({map:i,color:new Xt(s,s,s),side:je,fog:!0});return new be(o,c)}function iM(i){if(!i||!i.isWebGLRenderer)return null;try{const t=new $a;t.add(new be(new an(40,20,40),new $e({color:459790,side:Zn})));const e=(o,a,c,l,h,r,u,f=0,d=0)=>{const v=new be(new yn(o,a),new $e({color:new Xt(r).multiplyScalar(u),side:je}));v.position.set(c,l,h),v.rotation.set(d,f,0),t.add(v)};for(let o=-2;o<=2;o++)e(1.2,30,o*4,9.8,0,16777215,3,0,Math.PI/2);e(30,1.2,-19.8,3,0,16722600,5,Math.PI/2),e(30,1.2,19.8,3,0,2287359,5,-Math.PI/2),e(30,4,0,4,-19.8,13161727,1.4),e(30,1,0,1,-19.8,16726666,2),e(30,2,0,6,19.8,6962431,2,Math.PI),e(40,40,0,-9.9,0,656916,1,0,-Math.PI/2);const n=new Xr(i),s=n.fromScene(t,.03);return n.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] env failed",t),null}}function sM(i){if(!i||!i.isWebGLRenderer)return null;try{const t=new $a;t.add(new be(new an(40,20,40),new $e({color:394759,side:Zn})));const e=(o,a,c,l,h,r,u,f=0,d=0)=>{const v=new be(new yn(o,a),new $e({color:new Xt(r).multiplyScalar(u),side:je}));v.position.set(c,l,h),v.rotation.set(d,f,0),t.add(v)};e(26,8,0,9.8,0,16777215,2.2,0,Math.PI/2);for(const o of[-9,0,9])e(3,3,-19.8,12,o,16054015,6,Math.PI/2);for(const o of[-12,12])e(2,6,19.8,5,o,16777215,3.5,-Math.PI/2);e(40,.5,19.8,.4,0,16715808,2.5,-Math.PI/2),e(40,6,0,3,-19.8,10133674,.35),e(40,6,0,3,19.8,10133674,.35,Math.PI),e(40,40,0,-9.9,0,1052690,1,0,-Math.PI/2);const n=new Xr(i),s=n.fromScene(t,.04);return n.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] stage env failed",t),null}}function rM(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.35,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Al(i);return n.colorSpace=In,n}const Lh=new L,oM=new L(0,0,1),fd=new ni,Ml=new Ge,aM=new L;function Kn(i,t,e,n,s,o=0){Lh.subVectors(e,t);const a=Lh.length();a<.02||(fd.setFromUnitVectors(oM,Lh.multiplyScalar(1/a)),Ml.compose(aM.addVectors(t,e).multiplyScalar(.5),fd,Il.set(n,n,a)),i.add(lf,Ml,s,o))}function Er(i,t,e,n,s,o,a,c,l,h=0){ki.compose(Il.set(o,a,c),yl.identity(),hf.set(e,n,s)),Ml.multiplyMatrices(t,ki),i.add(lf,Ml,l,h)}function Fc(i,t,{x:e,y:n,z:s,cols:o=4,rows:a=3,yaw:c=0,pitch:l=.25,pitchLamp:h=0,size:r=.62,gap:u=.16,s:f=0,mast:d=0}){const v=new Ge().compose(new L(e,n,s),new ni().setFromEuler(new Ci(l,c,0,"YXZ")),new L(1,1,1)),g=o*(r+u)+u,m=a*(r+u)+u;Er(i,v,g+.2,.14,.14,0,m/2+.05,-.25,bt.metalL),Er(i,v,g+.2,.14,.14,0,-m/2-.05,-.25,bt.metalL);for(const p of[-1,1])Er(i,v,.14,m+.2,.14,p*(g/2+.05),0,-.25,bt.metalL);Er(i,v,g,m,.08,0,0,-.4,bt.metalD);for(let p=0;p<a;p++)for(let _=0;_<o;_++){const M=-g/2+u+r/2+_*(r+u),y=-m/2+u+r/2+p*(r+u);Er(i,v,r,r,.36,M,y,-.12,bt.metalD),Er(t,v,r*.82,r*.82,.04,M,y,.075,[3.2,3.1,2.9],f),Er(i,v,r*1.02,.05,.22,M,y+r*.5,.12,bt.metal)}if(d>0){const p=e-Math.sin(c)*.6,_=s-Math.cos(c)*.6;for(const M of[-.35,.35])for(const y of[-.35,.35])i.box(.12,n,.12,p+M,n/2,_+y,bt.metalL);for(let M=.8,y=0;M<n-.5;M+=1.4,y++)i.box(.8,.07,.07,p,M,_-.35,bt.metal),i.box(.8,.07,.07,p,M,_+.35,bt.metal),i.box(.07,.07,.8,p-.35,M,_,bt.metal),i.box(.07,.07,.8,p+.35,M,_,bt.metal),Kn(i,new L(p-.35,M,_+.36),new L(p+.35,M+1.4,_+.36),.05,bt.metal);i.box(1.6,.3,1.6,p,.15,_,bt.metalD)}return new L(0,0,.3).applyMatrix4(v)}function Dh(i,t,{axis:e="z",at:n,a0:s,a1:o,face:a=1,h:c=.16,y:l=0,pitch:h=.12,col:r=[3,.05,.08],s:u=0}){const f=Math.abs(o-s),d=(s+o)/2;e==="z"?i.box(.22,c,f,n,l+c/2,d,bt.metalD,u):i.box(f,c,.22,d,l+c/2,n,bt.metalD,u);const v=Math.min(s,o);for(let g=0;v+g*h<v+f;g++){const m=v+(g+.5)*h;e==="z"?t.box(.03,.05,.06,n+a*.115,l+c*.55,m,r,u):t.box(.06,.05,.03,m,l+c*.55,n+a*.115,r,u)}e==="z"?t.box(.5,.004,f,n+a*.45,.012,d,is(r,.09),u):t.box(f,.004,.5,d,.012,n+a*.45,is(r,.09),u)}function cM(i,t,e=60){const n=new Tn({color:5790043,roughness:.92,metalness:0,side:je,envMapIntensity:.25});return n.onBeforeCompile=s=>{s.uniforms.uHW={value:i},s.uniforms.uS0={value:t},s.uniforms.uLen={value:e},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDk; varying vec2 vDk;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDk = aDk;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vDk; uniform float uHW, uS0, uLen; vec3 dkEm = vec3(0.0); float dkPaint = 0.0;
        ${Yo}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float m = (vDk.x - 0.5) * 2.0 * uHW; float s = vDk.y - uS0;
          float n = vnoise(vec2(m*1.1, s*1.1))*0.45 + vnoise(vec2(m*4.3, s*4.3))*0.3 + vnoise(vec2(m*17.0, s*17.0))*0.25;
          // low-frequency mottling / water staining (the real deck's patchy pours)
          float st1 = smoothstep(0.35, 0.85, vnoise(vec2(m*0.45 + 3.0, s*0.16)));
          float st2 = smoothstep(0.45, 0.9, vnoise(vec2(m*0.9 - 7.0, s*0.38 + 11.0)));
          vec3 c = diffuseColor.rgb * (0.84 + 0.24*n) * (1.0 - 0.18*st1) * (1.0 + 0.1*st2);
          float broom = vnoise(vec2(m*0.6, s*90.0)); c *= 0.96 + 0.06*broom;
          // pour joints: faint, solid, full width (not lane dashes)
          float jt = aaLine(fract(s/6.8)*6.8 - 3.4, 0.03); c *= 1.0 - 0.12*jt;
          float trk = exp(-pow((abs(m) - 0.82)/0.3, 2.0)) * (0.3 + 0.25*vnoise(vec2(s*0.6, m*3.0)));
          c *= 1.0 - trk * (1.0 - 0.6*smoothstep(8.0, 30.0, s));
          // the real deck: ONE white centre line + ONE edge line per side, right on the edge: red LED strip on
          // the upper (overhang) part, turning into a white painted line lower down (flip_official_18/20)
          float wear = 0.82 + 0.18*vnoise(vec2(m*9.0, s*2.3));
          float edge = aaLine(abs(m) - (uHW - 0.05), 0.04);
          float redF = smoothstep(uLen*0.5, uLen*0.6, s);
          dkPaint = max(aaLine(m, 0.055) * wear, edge * (1.0 - redF));
          c = mix(c, vec3(0.7, 0.7, 0.71), dkPaint * 0.92);
          c = mix(c, vec3(0.05, 0.02, 0.02), edge * redF);
          diffuseColor.rgb = c;
          float ledDot = 0.7 + 0.3*smoothstep(0.25, 0.4, abs(fract(s/0.14) - 0.5));
          dkEm = vec3(2.6, 0.03, 0.05) * edge * redF * ledDot + vec3(0.35) * edge * (1.0 - redF);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.8, dkPaint);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += dkEm;`)},n.customProgramCacheKey=()=>"concrete-deck",n}function lM(i,t,e){const n=us.merge([de.fog,{uOn:{value:0},uHW:{value:i},uS60:{value:t},uEnd:{value:e}}]);return n.uBeat=Hn.uBeat,new Ze({uniforms:n,vertexShader:`
      varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_vertex>
      void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz;
        vec4 mvPosition = viewMatrix*wp; gl_Position = projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uOn, uHW, uS60, uEnd, uBeat; varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_fragment>
      ${Yo}
      void main(){
        float m = (vUv.x - 0.5) * 2.0 * uHW, a = abs(m), s = vUv.y;
        float n = vnoise(vec2(m*1.3, s*1.3))*0.5 + vnoise(vec2(m*6.0, s*6.0))*0.3 + vnoise(vec2(m*23.0, s*23.0))*0.2;
        // concrete lane (|m| < 2.9), darker asphalt shoulders out to the edge
        // uniform, lighter swept concrete between the rulers (the official overhead), dark shoulders outside
        vec3 conc = vec3(0.17, 0.168, 0.172) * (0.9 + 0.16*n);
        vec3 asph = vec3(0.03, 0.028, 0.032) * (0.8 + 0.4*n);
        vec3 col = mix(conc, asph, smoothstep(3.45, 3.6, a));
        // tyre rubber laid down by launches
        col *= 1.0 - 0.28*exp(-pow((a - 0.8)/0.3, 2.0)) * (1.0 - smoothstep(0.0, 45.0, s));
        // the two rulers (official overhead): one continuous white line just inside each lane edge, dense short
        // ticks perpendicular to it pointing outward every 0.5 m, a long tick every 5th mark (2.5 m)
        vec3 pnt = vec3(0.8, 0.8, 0.82);
        float r0 = 2.9;              // ~2.5 car widths of lane between the ruler lines
        float rails = aaLine(a - r0, 0.045);
        float fm = fract(s*2.0 + 0.5) - 0.5, fM = fract(s/2.5 + 0.5) - 0.5;
        float out0 = step(r0, a);
        float tick = aaLine(fm*0.5, 0.022) * out0 * step(a, r0 + 0.2)
                   + aaLine(fM*2.5, 0.03) * out0 * step(a, r0 + 0.42);
        float centre = aaLine(m, 0.05);
        float lines = aaLine(s, 0.08) + aaLine(s - uS60, 0.06) * step(a, r0);   // start + 60 mph timing line
        float paint = clamp(rails + tick + centre + lines, 0.0, 1.0) * (0.85 + 0.15*n);
        col = mix(col, pnt, paint);
        // the 60 mph trap glows red for a beat after the car crosses it
        col += vec3(1.6, 0.04, 0.06) * aaLine(s - uS60, 0.05) * step(a, r0) * 0.25;
        float edge = 1.0 - smoothstep(uHW - 0.6, uHW, a);
        float endF = 1.0 - smoothstep(uEnd - 25.0, uEnd, s);
        float alpha = uOn * edge * endF * smoothstep(-3.0, -1.5, s);
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,fog:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})}const dd=["models","model3","cybertruck","semi","modelx","modely"],hM={models:1053206,model3:3027256,modelx:1779522,modely:12035717,semi:15659250},pd=2.45,uM=.5,fM=qo||{};function dM(i={}){const t=i.scene||(i.isScene?i:null),e=i.renderer||null;let n=i.camera||null;const s=new hn;s.name="world";const o=Tr(1337),a=[],c=[],l=rt=>Math.abs(rt)>1e8?-rt:rn(rt),h=(rt,ft,E)=>{const b=new hn;return b.name=rt,s.add(b),c.push({g:b,zHi:l(ft),zLo:l(E)}),b},r={neon:Uc({}),neonD:Uc({side:je}),neonSoft:Uc({chase:0,pulse:.15}),metal:Ch(new Tn({vertexColors:!0,metalness:.85,roughness:.38,envMapIntensity:.7}),{key:"m"}),metalD:Ch(new Tn({vertexColors:!0,metalness:.85,roughness:.32,envMapIntensity:1.3,side:je}),{accent:[1.6,.15,.9],cell:[3.2,1.6],lit:.04,key:"md"}),matte:Ch(new Tn({vertexColors:!0,metalness:.3,roughness:.7}),{accent:[2,.7,.15],cell:[4,2],lit:.03,seamGlow:0,key:"mt"}),paint:new Ei({vertexColors:!0,metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6}),glass:new Tn({color:329226,metalness:1,roughness:.06,envMapIntensity:1.8}),deck:new Ei({vertexColors:!0,metalness:.65,roughness:.24,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),roadF:cd(!1),roadO:cd(!0),bld:eM()};a.push(...Object.values(r));const u=nM(),f={lineup:[],rows:[]},d=[],v=[],g=[];let m=null;const p=sM(e);p&&a.push(p);const _={mat:null,beams:[],s60:10.9};r.steel=new Tn({vertexColors:!0,metalness:.75,roughness:.42,envMapIntensity:.9}),r.lamp=Uc({chase:0,pulse:0,side:je}),a.push(r.steel,r.lamp);const M=rM(),y=new Map;function R(rt,ft,E,b=16052991,H=1){if(!M)return null;const q=b+":"+H;let j=y.get(q);j||(j=new Ca({map:M,color:new Xt(b).multiplyScalar(H),blending:Pn,transparent:!0,depthWrite:!1,fog:!0}),y.set(q,j),a.push(j));const G=new qc(j);return G.position.copy(ft),G.scale.set(E,E,1),rt.add(G),G}t&&(t.background=fa.clone(),t.fog=new ju(fa.clone(),Ah));const U=iM(e);t&&U&&!t.environment&&(t.environment=U);const D={uFlight:Hn.uFlight,uTime:Hn.uTime,uBeat:Hn.uBeat,uFog:{value:fa.clone()},uSunDir:{value:new L(0,.1,-1).normalize()}},N=new be(new Go(10,48,24),new Ze({uniforms:D,depthWrite:!1,depthTest:!0,side:Zn,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      uniform float uFlight, uTime, uBeat; uniform vec3 uFog; uniform vec3 uSunDir; varying vec3 vDir;
      ${Yo}
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 top = vec3(0.003,0.002,0.010);
        vec3 glowC = mix(vec3(0.22,0.03,0.22), vec3(0.75,0.12,0.22), uFlight);
        vec3 col = mix(uFog, top, smoothstep(0.0, 0.5, h));
        col += glowC * exp(-max(h,0.0)*9.0) * 0.55;
        col += vec3(0.05,0.0,0.12) * exp(-abs(h-0.25)*6.0) * 0.3;
        // stars
        vec3 sd = d * 220.0; vec2 cell = floor(sd.xz/ max(0.25, 1.0 - abs(d.y)*0.0) + sd.y*3.1);
        float st = h21(floor(sd.xy) + floor(sd.zx)*1.7);
        float tw = 0.6 + 0.4*sin(uTime*3.0 + st*60.0);
        col += vec3(0.9,0.85,1.2) * step(0.9975, st) * smoothstep(0.08, 0.4, h) * tw * 1.2;
        // synthwave sun
        float a = acos(clamp(dot(d, uSunDir), -1.0, 1.0));
        float rs = 0.2;
        float vy = (d.y - uSunDir.y) / rs;
        vec3 sunC = mix(vec3(1.25,0.06,0.42), vec3(1.5,0.85,0.12), smoothstep(-0.9, 0.8, vy));
        float disc = 1.0 - smoothstep(rs - 0.003, rs, a);
        float band = vy < 0.15 ? step(0.32 + (0.15 - vy)*0.22, fract(vy*7.0 + uTime*0.25)) : 1.0;
        col = mix(col, sunC, disc * band * uFlight);
        col += sunC * exp(-max(a - rs, 0.0) * 7.0) * 0.16 * uFlight;
        col += sunC * exp(-abs(h - uSunDir.y + 0.0)*40.0) * exp(-abs(d.x)*2.0) * 0.15 * uFlight;
        col = mix(col, uFog, smoothstep(0.0, -0.05, h));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));N.frustumCulled=!1,N.renderOrder=-1e3,N.name="sky",s.add(N);const P=new ny(8019199,1181724,.3);s.add(P);const x=new oy(11570431,.35);x.position.set(-30,60,20),s.add(x);const z=new Sp(16777215,300,40,.55,.6,1.6);z.position.set(0,12,1),z.target.position.set(0,0,0),s.add(z,z.target);const B=rn(Ft.end)-900,et=400,vt=et-B,wt={name:"WetGround",uniforms:{color:{value:new Xt(16777215)},tDiffuse:{value:null},textureMatrix:{value:null},fogColor:{value:fa.clone()},fogDensity:{value:Ah},uBeat:Hn.uBeat,uTime:Hn.uTime,uRegions:{value:new en(Ft.hangarBack,Ft.door,rn(Ft.boost1-40),rn(Ft.end))},uLat:{value:Ye}},vertexShader:`
      uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW; varying float vDepth;
      void main(){ vUv = textureMatrix * vec4(position,1.0); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform vec3 color; uniform sampler2D tDiffuse; uniform vec3 fogColor; uniform float fogDensity;
      uniform float uBeat, uTime, uLat; uniform vec4 uRegions;
      varying vec4 vUv; varying vec3 vW; varying float vDepth;
      ${Yo}
      void main(){
        vec2 rip = vec2(vnoise(vW.xz*0.35), vnoise(vW.zx*0.35 + 7.0)) - 0.5;
        vec2 rip2 = vec2(vnoise(vW.xz*2.1), vnoise(vW.zx*2.3 + 3.0)) - 0.5;
        vec4 uv = vUv; uv.xy += (rip*0.010 + rip2*0.004) * uv.w;
        float bl = 0.0045 * uv.w;
        vec3 r = texture2DProj(tDiffuse, uv).rgb * 0.30;
        r += texture2DProj(tDiffuse, uv + vec4(0.0,  bl*1.5, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, uv + vec4(0.0, -bl*1.5, 0.0, 0.0)).rgb * 0.16;
        r += texture2DProj(tDiffuse, uv + vec4(0.0,  bl*4.0, 0.0, 0.0)).rgb * 0.10;
        r += texture2DProj(tDiffuse, uv + vec4(0.0, -bl*4.0, 0.0, 0.0)).rgb * 0.10;
        r += texture2DProj(tDiffuse, uv + vec4( bl, 0.0, 0.0, 0.0)).rgb * 0.09;
        r += texture2DProj(tDiffuse, uv + vec4(-bl, 0.0, 0.0, 0.0)).rgb * 0.09;
        float s = -vW.z;
        float inHangar = step(uRegions.x, s) * step(s, uRegions.y) * step(abs(vW.x), 18.0);
        float flight = smoothstep(-uRegions.z - 80.0, -uRegions.z + 80.0, -vW.z) ;
        vec3 base = vec3(0.006,0.005,0.012) * (0.7 + 0.6*vnoise(vW.xz*0.08));
        // puddle mask: shinier patches
        float pud = smoothstep(0.45, 0.7, vnoise(vW.xz*0.06 + 11.0));
        float refl = mix(0.42, 0.75, pud);
        vec3 col = base;
        // city: faint tech grid
        vec2 g24 = (fract(vW.xz/24.0) - 0.5) * 24.0;
        float cityGrid = max(aaLine(g24.x, 0.06), aaLine(g24.y, 0.06));
        col += vec3(0.1,0.35,0.6) * 0.12 * cityGrid * (1.0 - flight) * (1.0 - inHangar);
        // hangar: polished tiles
        vec2 g2 = (fract(vW.xz/2.0) - 0.5) * 2.0;
        vec2 g4 = (fract(vW.xz/4.0) - 0.5) * 4.0;
        float tl = max(aaLine(g2.x,0.012), aaLine(g2.y,0.012));
        float tl4 = max(aaLine(g4.x,0.03), aaLine(g4.y,0.03));
        float rr = length(vW.xz);
        float rings = aaLine(rr - 7.2, 0.05) + aaLine(rr - 8.4, 0.025) + aaLine(fract(rr/1.2)*1.2 - 0.6, 0.01)*step(rr, 6.4)*0.4;
        float spokes = aaLine(fract(atan(vW.z, vW.x)/6.2832*36.0)*1.0 - 0.5, 0.02) * step(6.0, rr) * step(rr, 8.0);
        float hb = exp(-fract(uBeat)*4.0);
        vec3 hcol = vec3(0.3,0.35,0.5)*0.06*tl + vec3(0.15,0.6,1.3)*0.10*tl4*(1.0-step(rr,8.6))
                  + vec3(0.2,0.9,1.8)*(0.35 + 0.25*hb)*rings + vec3(0.9,0.2,1.4)*0.18*spokes;
        col += hcol * inHangar;
        // tiles: a touch of per-tile variation so the mirror is not a perfect plate
        float tv = h21(floor(vW.xz/2.0));
        refl = mix(refl, 0.72 + 0.22*tv, inHangar);
        // flight: synthwave grid
        vec2 g12 = (fract(vec2(vW.x - uLat, vW.z)/12.0) - 0.5) * 12.0;
        float sg = max(aaLine(g12.x, 0.07), aaLine(g12.y, 0.07));
        float fade = exp(-vDepth*0.0025);
        col += mix(vec3(1.8,0.1,1.0), vec3(0.2,0.9,1.8), step(0.5, fract(floor(vW.z/12.0)/8.0))*0.0) * sg * flight * (0.25 + 0.75*fade) * (0.8 + 0.4*exp(-fract(uBeat)*4.0));
        refl = mix(refl, 0.55, flight);
        col += r * refl * color;
        float fd = fogDensity * vDepth; float ff = 1.0 - exp(-fd*fd);
        col = mix(col, fogColor, ff);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`};let pt=null;try{const rt=e&&e.getSize?e.getSize(new qt):new qt(540,960),ft=e&&e.getPixelRatio?e.getPixelRatio():1;pt=new Pl(new yn(2400,vt),{textureWidth:Math.max(256,Math.round(rt.x*ft*.5)),textureHeight:Math.max(256,Math.round(rt.y*ft*.5)),clipBias:.003,shader:wt,multisample:0}),pt.rotation.x=-Math.PI/2,pt.position.set(0,0,(et+B)/2),pt.name="wetGround",s.add(pt)}catch(rt){console.warn("[world] reflector failed, using plain ground",rt);const ft=new be(new yn(2400,vt),new Tn({color:328713,metalness:.9,roughness:.25}));ft.rotation.x=-Math.PI/2,ft.position.set(0,0,(et+B)/2),s.add(ft)}{const rt=h("road",-1e9,1e9),ft=[[Ft.roadStart,Ft.flip0+.01],[Ft.flipLip,Ft.takeoff],[Ft.landStrip,Ft.end]];for(const[E,b]of ft){const H=Li(hd(E,b),j=>{const G=wa(j);return[[-G,.03],[G,.03]]},{hw:!0}),q=new be(H,r.roadF);q.renderOrder=2,rt.add(q)}}{const rt=h("walls",-1e9,1e9),ft=new ke,E=new ke;[[Ft.door,Ft.ramp.s0-34],[Ft.landingS+26,Ft.flip0-2],[Ft.flipLip+84,Ft.takeoff-2],[Ft.landStrip+20,Ft.end]].forEach(([H,q],j)=>{const G=hd(H,q),ut=.95;for(const ht of[-1,1]){ft.add(Li(G,_t=>{const F=wa(_t)+.35;return[[ht*F,0],[ht*F,ut],[ht*(F+.4),ut],[ht*(F+.4),0]]}),null,bt.metal);const st=ht<0?bt.cyan:bt.mag;E.add(Li(G,_t=>{const F=wa(_t)+.3;return[[ht*F,ut+.02],[ht*(F+.5),ut+.02]]}),null,st),E.add(Li(G,_t=>{const F=wa(_t)+.33;return[[ht*F,ut*.45],[ht*F,ut*.55]]}),null,is(st,.6))}}),rt.add(ft.mesh(r.metalD)),rt.add(E.mesh(r.neonD))}const Lt={strips:[],door:[],tree:[]};{const rt=h("hangar",Ft.hangarBack-20,Ft.door+60),ft=new ke,E=new ke,b=new ke,H=18,q=13,j=-Ft.hangarBack,G=-Ft.door;ft.box(.8,q,j-G,-H,q/2,(j+G)/2,bt.metalD),ft.box(.8,q,j-G,H,q/2,(j+G)/2,bt.metalD),ft.box(H*2,.8,j-G,0,q,(j+G)/2,bt.metalD),ft.box(H*2,q,.8,0,q/2,j,bt.metalD),ft.box(5,q,1.2,-H+2.5,q/2,G,bt.metal),ft.box(5,q,1.2,H-2.5,q/2,G,bt.metal),ft.box(H*2,q-10.5,1.2,0,10.5+(q-10.5)/2,G,bt.metal);let ut=0;for(let F=j-4;F>G+2;F-=6,ut++){for(const Y of[-1,1])ft.box(1,q-3,1.4,Y*(H-.9),(q-3)/2,F,bt.metal),ft.box(1,4.6,1.4,Y*(H-2.3),q-1.6,F,bt.metal,-F,-1e3,0,0,Y*Math.PI/4),E.box(.12,q-4,.14,Y*(H-1.45),(q-4)/2+.3,F,bt.cyanW,-F,1+ut*.5),E.box(.12,3.6,.14,Y*(H-2.75),q-2.1,F,bt.cyanW,-F,1+ut*.5,0,0,Y*Math.PI/4);ft.box(H*2-6,1,1.4,0,q-.5,F,bt.metal);for(const Y of[-1,1]){ft.box(.3,9,4.4,Y*(H-.55),5,F-3,[.02,.02,.026]);{for(const Mt of[-.9,.9])E.box(.08,6.4,.16,Y*(H-.72),4.8,F-3+Mt,ut%2?[.6,.9,2]:[.25,1.1,2],-F,1+ut*.5);ft.box(.1,6.8,1.5,Y*(H-.62),4.8,F-3,[.012,.012,.018]);for(let Mt=0;Mt<4;Mt++)E.box(.08,.06,1.3,Y*(H-.72),1.3+Mt*.25,F-3+(Mt%2?1.4:-1.4),Mt%2?bt.cyan:bt.mag,-F,3+ut*.5);for(let Mt=0;Mt<7;Mt++)ft.box(.1,.05,1.3,Y*(H-.66),1.9+Mt*.95,F-3,bt.metalD)}E.box(.1,.18,3.6,Y*(H-.75),1.4,F-3,bt.mag,-F,8),E.box(.1,.18,3.6,Y*(H-.75),8.2,F-3,bt.mag,-F,8)}}{const F=q-2,Y=j-G;for(const kt of[-10.5,-4,4,10.5]){ft.box(.3,.3,Y-2,kt,F,(j+G)/2,bt.metalL),ft.box(.3,.3,Y-2,kt,F+1.4,(j+G)/2,bt.metalL);for(let I=j-2;I>G+2;I-=2.4)ft.box(.12,1.65,.12,kt,F+.7,I-.6,bt.metal,-I,-1e3,Math.round(I)%2?.7:-.7,0,0)}for(let kt=j-2;kt>G+2;kt-=6)ft.box(22,.22,.22,0,F,kt,bt.metalL);const Mt=8,At=new ke,ot=new ke;Jn(At,Mt,6.8,.45,.6,0,0,0,bt.metal,0),Jn(ot,Mt,6.45,.08,.1,0,0,-.32,bt.cyanW,0,2),Jn(ot,Mt,7.15,.06,.1,0,0,-.32,bt.mag,0,4);const Ut=At.mesh(r.metal),zt=ot.mesh(r.neon);for(const kt of[Ut,zt])kt.rotation.x=-Math.PI/2,kt.position.set(0,8.6,0),rt.add(kt);for(let kt=0;kt<8;kt++){const I=kt/8*Math.PI*2+Math.PI/8;ft.box(.06,q-8.6,.06,Math.cos(I)*6.6,(q+8.6)/2,Math.sin(I)*6.6,bt.metalL)}for(let kt=0;kt<8;kt++){const I=kt/8*Math.PI*2+Math.PI/8,J=Math.cos(I)*12.5,Q=Math.sin(I)*12.5;Math.abs(J)<6||(E.box(.12,5.5,.12,J,2.9,Q,kt%2?bt.cyanW:bt.mag,0,6+kt),ft.box(.6,.3,.6,J,.15,Q,bt.metalL))}}rt.add(ft.mesh(r.metal));const ht=new an(H*2-7,.16,.6);for(let F=0;F<15;F++){const Y=j-2-F*((j-G-4)/14),Mt=new $e({color:0,fog:!0}),At=new be(ht,Mt);At.position.set(0,q-1.2,Y),rt.add(At),Lt.strips.push({m:At,mat:Mt,on:[0,2,4,6][Math.min(3,Math.floor(F*4/15))]})}{const F=new xn(5.6,5.8,.14,96,1,!0);b.add(F,ki.makeTranslation(0,.07,0),[.03,.03,.04]);const Y=new Qo(4.9,5.6,96,1);Y.rotateX(-Math.PI/2),b.add(Y,ki.makeTranslation(0,.14,0),[.05,.05,.065]);for(let Mt=0;Mt<48;Mt++){const At=Mt/48*Math.PI*2;b.box(.06,.03,.7,Math.cos(At)*5.25,.16,Math.sin(At)*5.25,bt.metalL,0,-1e3,0,-At+Math.PI/2,0)}}rt.add(b.mesh(r.metal));{const F=new be(new yn(14,14),new Ze({uniforms:{uBeat:Hn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
          void main(){ float r = length(vUv - 0.5)*2.0;
            float ring = exp(-pow((r - 0.62)*14.0, 2.0)) * 0.35 + exp(-pow((r - 0.42)*30.0, 2.0)) * 0.18;
            float a = exp(-r*r*3.0)*0.045 + ring * (0.7 + 0.5*exp(-fract(uBeat)*4.0));
            gl_FragColor = vec4(vec3(0.15,0.7,1.6)*a, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,transparent:!0,blending:Pn,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=.02,F.renderOrder=3,rt.add(F),a.push(F.material)}const st=new ke;st.add(new Ms(5.3,.06,6,96),ki.makeRotationX(Math.PI/2).setPosition(0,.15,0),bt.cyanW,0,0),st.add(new Ms(3.6,.035,6,96),ki.makeRotationX(Math.PI/2).setPosition(0,.15,0),bt.cyan,0,2);for(let F=0;F<24;F++){const Y=F/24*Math.PI*2;st.box(.5,.04,.08,Math.cos(Y)*4.5,.15,Math.sin(Y)*4.5,bt.cyan,0,4+F*.1,0,-Y,0)}for(const F of[-1,1])for(let Y=0;Y<9;Y++)st.box(.14,.05,1.6,F*7.5,.05,-6-Y*3.2,bt.wht,6+Y*3.2,6+Y*.5);rt.add(st.mesh(r.neonSoft));{const F=new ke,Y=new ke;Jn(F,12,6.4,.5,.5,0,0,0,bt.metal,0);const Mt=F.mesh(r.metal);Mt.rotation.x=Math.PI/2,Mt.position.y=8.2,rt.add(Mt),Jn(Y,12,6.05,.1,.12,0,0,0,bt.wht,0,0),Jn(Y,12,6.75,.08,.12,0,0,0,bt.mag,0,4);for(let Ut=0;Ut<12;Ut++){const zt=(Ut+.5)/12*Math.PI*2;Y.box(.42,.42,.2,Math.cos(zt)*6.4,Math.sin(zt)*6.4,.38,bt.wht,0,Ut*.5)}const At=Y.mesh(r.neonSoft);At.rotation.x=Math.PI/2,At.position.y=8.2,rt.add(At);const ot=new ke;for(const Ut of[-1,1])ot.box(.12,4.9,.12,Ut*6.4,10.65,0,bt.metalL);rt.add(ot.mesh(r.metal))}for(let F=0;F<6;F++)E.box(26-F*3,.12,.1,0,2+F*1.6,j-.5,F%2?bt.mag:bt.cyan,-j,2+F);for(const F of[-1,1])E.box(.25,8,.1,F*4.5,6.5,j-.5,bt.org,-j,9,0,0,F*.5);if(rt.add(E.mesh(r.neonD)),u)for(const[F,Y]of[[-1,2],[1,5]]){const Mt=Ph(u,Y,8,1,1.6);Mt.position.set(F*(H-.7),10,6),Mt.rotation.y=-F*Math.PI/2,rt.add(Mt)}for(const F of[-1,1]){const Y=new hn,Mt=new ke,At=new ke;Mt.box(13,10.5,.7,0,5.25,0,bt.metal);for(let ot=0;ot<5;ot++)Mt.box(12.6,.12,.8,0,1+ot*2.1,0,bt.metalL);At.box(.16,10.2,.8,-F*6.4,5.2,0,bt.red,0,0);for(let ot=0;ot<4;ot++)At.box(1.6,.18,.8,-F*(4.5-ot*1.2),5.2+(ot%2?1:-1)*0+ot*0,0,bt.org,0,0,0,0,F*.6);Y.add(Mt.mesh(r.metal)),Y.add(At.mesh(r.neonSoft)),Y.position.set(F*6.5,0,G-.1),rt.add(Y),Lt.door.push({g:Y,sd:F})}const _t=new Go(.2,16,10);for(const F of[-1,1]){const Y=new ke;Y.box(.18,4.2,.18,F*9.5,2.1,-14,bt.metalL),Y.box(1.2,3.2,.3,F*9.5,3,-14,bt.metalD),rt.add(Y.mesh(r.metal));const Mt=[["pre",4.2,bt.wht],["a1",3.6,bt.amber],["a2",3,bt.amber],["a3",2.4,bt.amber],["go",1.8,bt.green]];for(const[At,ot,Ut]of Mt)for(const zt of[-.3,.3]){const kt=new $e({color:0}),I=new be(_t,kt);I.position.set(F*9.5+zt,ot,-13.82),rt.add(I),Lt.tree.push({mat:kt,id:At,col:new Xt(Ut[0],Ut[1],Ut[2])})}}}{const rt=h("strip",Ft.door-50,Ft.flip0+60),ft=new ke,E=new ke,b=Ft.ramp.s0-50,H=Ft.landingS+30;let q=0;for(let G=60;G<Ft.flip0-190;G+=42,q++){if(G>b&&G<H)continue;const ut=-G,ht=11.5,st=10.5,_t=q%3===0;for(const Y of[-1,1])ft.box(1.1,st,1.1,Y*ht,st/2,ut,bt.metal),ft.box(1.6,.6,1.6,Y*ht,.3,ut,bt.metalD),E.box(.12,st-1,.12,Y*(ht-.62),st/2,ut+.4,bt.cyan,G);ft.box(ht*2+1,1.2,1.4,0,st,ut,bt.metal);const F=_t?bt.org:bt.mag;for(let Y=-4;Y<=4;Y++)E.box(1.6,.12,.9,Y*2.4,st-.66,ut,F,G);E.box(ht*2,.12,.12,0,st+.66,ut+.72,bt.cyanW,G),_t&&Jn(E,6,15.5,.35,.35,0,13.4,ut,bt.vio,G,-1e3)}for(let G=40;G<Ft.flip0-150;G+=26)if(!(G>Ft.ramp.s0-40&&G<Ft.landingS+26))for(const ut of[-1,1]){const ht=ut*10.6;ft.box(.22,7.5,.22,ht,3.75,-G,bt.metalL),ft.box(2.4,.18,.4,ht-ut*1.1,7.5,-G,bt.metalL),E.box(1.8,.08,.3,ht-ut*1.2,7.38,-G,bt.warm,G)}let j=0;for(let G=140;G<Ft.flip0-160;G+=115,j++){if(G>Ft.ramp.s0-60&&G<Ft.landingS+40)continue;const ut=j%2?1:-1,ht=ut*24,st=-G;if(ft.box(.6,14,.6,ht-5,7,st,bt.metalD),ft.box(.6,14,.6,ht+5,7,st,bt.metalD),u){const _t=Ph(u,[0,1,2,3,4,6][j%6],16,4,2.4);_t.position.set(ht,16,st),_t.rotation.y=ut*.35,rt.add(_t)}E.box(16.6,.15,.2,ht,13.9,st,bt.wht,G),E.box(16.6,.15,.2,ht,18.1,st,bt.wht,G)}{const ut=Math.min(Sn.dragStrip.s1+40,Ft.ramp.s0-30),ht=4.3,st=ti&&isFinite(ti.zero60)?Yp(ti.zero60):10.9,_t=lM(ht,st,ut);a.push(_t),_.mat=_t;const F=Li(Rh(-3,ut,2),()=>[[-ht,.045],[ht,.045]]),Y=new be(F,_t);Y.renderOrder=3,rt.add(Y);const Mt=new ke;for(const At of[0,st])for(const ot of[-1,1])Mt.box(.16,.9,.16,ot*3.75,.45,-At,bt.metalD),Mt.box(.24,.22,.2,ot*3.75,.85,-At,bt.metalD),Mt.box(.5,.06,.5,ot*3.75,.03,-At,bt.metalL);rt.add(Mt.mesh(r.metal));for(const[At,ot]of[[0,0],[st,1]]){const Ut=new $e({color:0,transparent:!0,blending:Pn,depthWrite:!1,fog:!0});a.push(Ut);const zt=new be(new an(7.3,.025,.025),Ut);zt.position.set(0,.85,-At),rt.add(zt);for(const kt of[-1,1]){const I=new be(new an(.03,.08,.08),Ut);I.position.set(kt*3.63,.85,-At),rt.add(I)}_.beams.push({mat:Ut,k:ot})}_.s60=st;{const At=new ke,ot=new ke,Ut=-Math.max(st+9,60),zt=5.3,kt=4.6,I=5.3,J=.7,Q=[.07,.07,.08],gt=[.12,.12,.13],Et=(It,$t,ve)=>new L(It,$t,ve);for(const It of[-1,1]){const $t=It*zt;for(const ve of[-.35,.35])for(const Pe of[-J/2,J/2])At.box(.1,I,.1,$t+ve,I/2,Ut+Pe,gt);for(let ve=.6,Pe=0;ve<I;ve+=.9,Pe++)At.box(.8,.06,.06,$t,ve,Ut-J/2,Q),At.box(.8,.06,.06,$t,ve,Ut+J/2,Q),At.box(.06,.06,J,$t-.35,ve,Ut,Q),At.box(.06,.06,J,$t+.35,ve,Ut,Q),Kn(At,Et($t-.35,ve,Ut+J/2),Et($t+.35,Math.min(I,ve+.9),Ut+J/2),.045,Q),Kn(At,Et($t+.35,ve,Ut-J/2),Et($t-.35,Math.min(I,ve+.9),Ut-J/2),.045,Q);At.box(1.3,.16,1.3,$t,.08,Ut,bt.metalD);for(let ve=.5;ve<I-.2;ve+=.55)ot.box(.05,.05,.05,$t-It*.42,ve,Ut+J/2+.03,[3,.05,.08],st)}for(const It of[kt,I])for(const $t of[-J/2,J/2])At.box(zt*2+.8,.1,.1,0,It,Ut+$t,gt);for(let It=-zt+.4,$t=0;It<zt-.4;It+=.7,$t++){for(const ve of[-J/2,J/2])Kn(At,Et(It,$t%2?kt:I,Ut+ve),Et(It+.7,$t%2?I:kt,Ut+ve),.045,Q);At.box(.05,.05,J,It,kt,Ut,Q),At.box(.05,.05,J,It,I,Ut,Q)}for(const It of[-3.2,-1.1,1.1,3.2])At.box(.42,.34,.36,It,kt-.3,Ut+.2,bt.metalD),ot.box(.32,.24,.03,It,kt-.32,Ut+.39,[2.6,2.55,2.4],st);ot.box(zt*2-1.2,.05,.05,0,kt-.06,Ut+J/2+.04,[3,.05,.08],st),At.box(zt*2-.4,2.7,.22,0,I+1.45,Ut,[.02,.02,.024]),ot.box(zt*2-.8,2.35,.02,0,I+1.45,Ut+.125,[.035,.045,.075],st);for(const It of[I+.12,I+2.78])At.box(zt*2-.3,.08,.26,0,It,Ut,gt);for(let It=-zt+.6;It<zt-.5;It+=.9)ot.box(.05,.05,.03,It,I+2.86,Ut+.14,[3,.05,.08],st);for(const It of[-1,1])ot.box(.06,2.3,.03,It*(zt-.38),I+1.45,Ut+.14,[1.2,1.2,1.25],st);rt.add(At.mesh(r.steel)),rt.add(ot.mesh(r.lamp))}}tt(rt,Ft.ramp.s0,Ft.ramp.s1,Ft.ramp.height,0,G=>-G),rt.add(ft.mesh(r.metal)),rt.add(E.mesh(r.neon)),ue(rt)}function tt(rt,ft,E,b,H,q,j=1.6){const G=new ke,ut=new ke,ht=new ke,st=Rh(ft,E,.5),_t=ot=>od(ot)+.02,F=[3,.05,.08],Y=Li(st,ot=>{const Ut=_t(ot);return[[-j,0],[-j,Ut],[j,Ut],[j,0]]}),Mt=Y.attributes.position;for(let ot=0;ot<Mt.count;ot++){const Ut=Y.attributes.uv.getY(ot),zt=ot%4;Mt.setY(ot,zt===0||zt===3?0:_t(Ut))}Y.computeVertexNormals(),G.add(Y,null,[.035,.036,.042]),G.box(j*2,b,.3,H,b/2,q(E)-.12,[.03,.03,.036]);const At=ot=>Math.atan2(2*b*(ot-ft)/(E-ft)**2,1);for(let ot=ft+1.2;ot<E-.3;ot+=1.2)ut.box(j*2-.1,.012,.05,H,_t(ot)+.006,q(ot),[.11,.11,.12],ot,-1e3,At(ot),0,0);for(const ot of[-1,1]){ut.add(Li(st,kt=>[[ot*(j-.08),0],[ot*(j-.08),.06],[ot*(j+.06),.06],[ot*(j+.06),0]]),null,[.09,.09,.1]),ht.add(Li(st,()=>[[ot*(j-.02),.075],[ot*(j+.04),.075]]),null,F);const Ut=H+ot*(j+.07);let zt=null;for(let kt=ft+2;kt<=E+.01;kt+=1.5){const I=_t(Math.min(kt,E));I<.12||(ut.box(.1,I,.12,Ut,I/2,q(kt),[.08,.08,.09]),zt&&Kn(ut,new L(Ut,.05,q(zt.s)),new L(Ut,I-.05,q(kt)),.05,[.07,.07,.08]),zt={s:kt,h:I})}ht.add(Li(st.filter(kt=>_t(kt)>.35),kt=>[[ot*(j+.13),-_t(kt)*.5+.03],[ot*(j+.13),-_t(kt)*.5-.03]]),null,is(F,.8)),ht.add(Li(st,kt=>[[ot*(j+.4),.02-_t(kt)+.02],[ot*(j+.9),.02-_t(kt)+.02]]),null,is(F,.07)),ut.box(.16,b+.04,.16,H+ot*(j-.05),(b+.04)/2,q(E)-.1,[.1,.1,.11])}ut.box(j*2+.12,.08,.14,H,b+.03,q(E)-.05,[.14,.14,.15]),ht.box(j*2-.2,.05,.04,H,b-.12,q(E)-.29,F,E),rt.add(G.mesh(r.deck)),rt.add(ut.mesh(r.steel)),rt.add(ht.mesh(r.lamp))}function Ht(rt,ft,E,b,{rail2:H=!0,showLights:q=!0,extent:j=null}={}){const G=new ke,ut=new ke,ht=dd.filter(J=>ft.some(Q=>Q.kind===J)).concat(ft.map(J=>J.kind).filter(J=>!dd.includes(J))),st=J=>ft.find(Q=>Q.kind===J)||fM[J],_t=Math.max(0,ht.indexOf("semi")),F=[];{let J=0;ht.forEach(gt=>{const Et=st(gt).width;F.push(J+Et/2),J+=Et+uM});const Q=E-F[_t];for(let gt=0;gt<F.length;gt++)F[gt]+=Q}let Y=F[0]-st(ht[0]).width/2,Mt=F[F.length-1]+st(ht[ht.length-1]).width/2;if(j){const J=Math.max(j[0]-Y,Math.min(0,j[1]-Mt));for(let Q=0;Q<F.length;Q++)F[Q]+=J;Y+=J,Mt+=J}const At=rn(Y-1),ot=rn(Mt+1),Ut=rn(E),zt=b+pd,kt=[],I=[];ht.forEach((J,Q)=>{const gt=st(J),Et=rd(J,{color:hM[J],envMap:p||void 0}),It=Et.userData&&Et.userData.length||gt.length,$t=zt-It/2+(J==="semi"?-.25:0);Et.position.set($t,0,rn(F[Q])),Et.rotation.y=-Math.PI/2,Et.userData.stageS=F[Q],rt.add(Et),kt.push(Et),I.push([$t,rn(F[Q]),gt.width+.8,It+.8])});{const J=[4.2,.06,.1],Q=At+5,gt=ot-5,Et=Q-gt,It=(Q+gt)/2,$t=zt+.95;G.box(.22,.15,Et,$t,.075,It,[.02,.02,.025]),ut.box(.03,.13,Et,$t+.115,.078,It,is(J,1.3),Y),ut.box(.2,.012,Et,$t,.155,It,is(J,.7),Y),ut.box(2.2,.004,Et,$t+1.25,.008,It,is(J,.1),Y),ut.box(1.1,.004,Et,$t-.7,.008,It,is(J,.05),Y),H&&Dh(G,ut,{axis:"z",at:b-5.6,a0:At+22,a1:ot-16,face:1,h:.12,s:Y})}{const J=_o(new Xt(.95,.97,1.05),.075);a.push(J);const Q=[[b-19,Ut+10,19,.62],[b-19,Ut-10,19,.62],[b-16,Ut,23,.8]];for(const[gt,Et,It,$t]of Q){const ve=Math.atan2(zt-1.5-gt,Ut-Et)*.35+Math.PI/2*.65,Pe=Fc(G,ut,{x:gt,y:It,z:Et,cols:4,rows:2,yaw:ve,pitch:$t,s:Y,mast:1});R(rt,Pe,5.5,16054271,.9),R(rt,Pe,18,11062527,.1);const Re=new L(b+.2,0,Et*.6+Ut*.4),St=new L().subVectors(Re,Pe),fn=St.length();St.normalize();const ie=new be(new xn(.9,6.5,fn,24,1,!0).translate(0,-fn/2,0),J);ie.position.copy(Pe),ie.quaternion.setFromUnitVectors(new L(0,-1,0),St),rt.add(ie)}if(q)for(let gt=0;gt<9;gt++){const Et=At+3.5+gt*1.3,It=b-4.6;G.box(.06,1,.06,It,.5,Et,bt.metalL),G.box(.5,.05,.5,It,.03,Et,bt.metalD);const $t=Fc(G,ut,{x:It,y:1.2,z:Et,cols:1,rows:1,size:.34,yaw:Math.PI/2,pitch:-.08,s:Y});R(rt,$t,1.6,16777215,.8)}}for(const J of[G.mesh(r.steel),ut.mesh(r.lamp)])J&&rt.add(J);{const J=se(),Q=new yn(1,1);Q.rotateX(-Math.PI/2);for(const[gt,Et,It,$t]of I){const ve=new be(Q,J);ve.position.set(gt,.12,Et),ve.scale.set($t+2.5,1,It+2.5),ve.renderOrder=3,rt.add(ve)}}return v.push({z:Ut,x:b}),{vehicles:kt,s0:Y,s1:Mt}}function se(){return m||(m=new Ze({uniforms:{uBeat:Hn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q);
          float a = exp(-r*r*2.2)*0.08 + exp(-pow((r-0.86)*9.0,2.0))*0.025;
          gl_FragColor = vec4(vec3(1.0,0.96,1.05)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:Pn,depthWrite:!1}),a.push(m),m)}function ue(rt){const ft=Ht(rt,Sn.fleet.lineup,Sn.fleet.sCenter,0);f.lineup.push(...ft.vehicles);for(const[E,b,H,q]of[[9,5.5,16774386,420],[-6,13,15660287,700]]){const j=new R0(H,q,45,1.6);j.position.set(E,b,-Sn.fleet.sCenter),s.add(j),d.push({l:j,k:q}),g.push({l:j,dx:E})}}{const E=rn(Ft.end+200),b=rn(Ft.flip0),H=170,q=rn(Ft.fleet.sCenter),j=Tr(4711);for(let G=220;G>E;G-=420){const ut=[],ht=[{x0:44,x1:70,h0:16,h1:70,tall:.18,d0:12,d1:26},{x0:80,x1:170,h0:40,h1:170,tall:.25,d0:18,d1:34},{x0:190,x1:420,h0:70,h1:300,tall:.3,d0:24,d1:50},{x0:450,x1:800,h0:90,h1:380,tall:.3,d0:30,d1:70}],st=G<rn(Ft.cityEnd);for(const Mt of[-1,1])for(const[At,ot]of ht.entries()){if(st&&At===0)continue;let Ut=G;for(;Ut>G-420;){const zt=ot.d0+o()*(ot.d1-ot.d0),kt=3+o()*10*(At+1),I=Ut-zt/2;Ut-=zt+kt;const J=Math.abs(I-b)<H;let Q=Mt*(ot.x0+o()*(ot.x1-ot.x0));J&&Mt>0&&Q<110&&(Q=110+o()*60);const gt=Math.abs(I-q)<170&&Mt<0;if(gt&&Q>-260&&(Q=-(260+j()*120)),I>-Ft.hangarBack+30&&Math.abs(Q)<60)continue;let Et=ot.h0+Math.pow(o(),1.6)*(ot.h1-ot.h0);o()<ot.tall&&(Et*=1.5);const It=ot.d0+o()*(ot.d1-ot.d0),$t=Math.floor(o()*4),ve=.25+o()*.45,Pe=Math.floor(o()*4),Re=gt?Math.min(Et,16+Et*.1):Et;if(ut.push([Q,I,It,Re,zt,o(),$t,ve,Pe]),Et>80&&o()<.7){const St=.55+o()*.25,fn=[Q,I,It*St,Et*(.22+o()*.3),zt*St,o(),$t,ve,(Pe+1)%4,Et];gt||ut.push(fn)}}}const _t=new Su(new an(1,1,1).translate(0,.5,0),r.bld,ut.length),F=new Float32Array(ut.length*4);ut.forEach(([Mt,At,ot,Ut,zt,kt,I,J,Q,gt=0],Et)=>{ki.compose(Il.set(Mt,gt,At),yl.identity(),hf.set(ot,Ut,zt)),_t.setMatrixAt(Et,ki),F.set([kt,I,J,Q],Et*4)}),_t.geometry.setAttribute("aB",new Ii(F,4)),_t.computeBoundingSphere(),h("city",-G-300,-G+420+300).add(_t)}}const ae=[];{const rt=h("highways",-1e9,1e9),ft=180,E=rn(Ft.cityEnd)+50,b=ft-E,H=rn(Ft.flip0),q=new ke,j=new ke;for(const zt of[-1,1]){const kt=zt*64,I=15,J=rn(Ft.fleet.sCenter),Q=zt>0?[[ft,H+160],[H-160,E]]:[[ft,J+140],[J-140,E]];for(const[gt,Et]of Q){const It=gt-Et,$t=(gt+Et)/2;q.box(12,1,It,kt,I,$t,bt.conc,-$t),q.box(.4,1,It,kt-6,I+.9,$t,bt.conc,-$t),q.box(.4,1,It,kt+6,I+.9,$t,bt.conc,-$t),j.box(.12,.12,It,kt-6,I+1.45,$t,bt.org,-$t),j.box(.12,.12,It,kt+6,I+1.45,$t,bt.org,-$t),j.box(.1,.1,It,kt-6.1,I-.55,$t,bt.vio,-$t),j.box(.1,.1,It,kt+6.1,I-.55,$t,bt.vio,-$t);for(let ve=gt-20;ve>Et;ve-=48)q.box(2.2,I,2.2,kt,I/2,ve,bt.conc),j.box(2.3,.15,2.3,kt,4,ve,bt.vio,-ve)}}rt.add(q.mesh(r.matte)),rt.add(j.mesh(r.neonSoft));const G=150,ut=new an(1.9,.35,1.2),ht=new $e({color:16777215,fog:!0}),st=new Su(ut,ht,G*4),_t=new Xt(2.2,1.9,1.5),F=new Xt(2.6,.1,.12);let Y=0;for(const zt of[-1,1])for(const kt of[-1,1]){const I=Tr(zt*7+kt*3+20);for(let J=0;J<G;J++,Y++)ae.push({i:Y,x:zt*64+kt*2.6,y:16,z0:I()*b,v:26+I()*14,dir:kt,zA:ft,len:b,skip:zt>0,gap:zt>0?[H-160,H+160]:[rn(Ft.fleet.sCenter)-140,rn(Ft.fleet.sCenter)+140]}),st.setColorAt(Y,kt>0?_t:F)}st.frustumCulled=!1,rt.add(st),ae.mesh=st;const Mt=_o(new Xt(.6,.7,1.4),.1);a.push(Mt);const At=_o(new Xt(1.4,.3,1),.1);a.push(At);const ot=new xn(.6,9,520,20,1,!0).translate(0,260,0);ae.beams=[];const Ut=Tr(99);for(let zt=0;zt<12;zt++){const kt=120+zt*(Ft.cityEnd-200)/12,I=zt%2?1:-1,J=new be(ot,zt%3?Mt:At);J.position.set(I*(110+Ut()*160),0,rn(kt)),J.userData.ph=Ut()*6.28,J.userData.sd=I,J.frustumCulled=!1,rt.add(J),ae.beams.push(J)}}const mt={lasers:[]},X=new hn;X.name="flipRamp";{const rt=h("flip",Ft.flip0-420,Ft.flipLip+300);rt.add(X);const ft=new ke,E=new ke;let b=0;for(let I=Ft.flip0-330;I<Ft.flip0-110;I+=45,b++){const J=-I;Jn(ft,6,14,.9,.9,0,12.1,J,bt.metal,I,-1e3,0,-Math.PI/2),Jn(E,6,13.2,.16,.2,0,12.1,J+.5,b%2?bt.mag:bt.vio,I,-1e3,0,-Math.PI/2),Jn(E,6,14.8,.1,.2,0,12.1,J+.5,bt.cyan,I,-1e3,0,-Math.PI/2)}const H=Du,q=Rh(Ft.flip0-.5,Ft.flipLip-.002,.25),j=new ke,G=new ke,ut=cM(H,Ft.flip0,Ft.flipLip-Ft.flip0),ht=new Tn({color:3816513,roughness:.8,metalness:.2,side:je});a.push(ut,ht);{const I=Li(q,()=>[[-H,.03],[H,.03]]);I.setAttribute("aDk",I.attributes.uv.clone()),X.add(new be(I,ut)),X.add(new be(Li(q,()=>[[H,0],[H,-.42],[-H,-.42],[-H,0]]),ht))}for(const I of[-1,1])j.add(Li(q,()=>[[I*H,0],[I*H,.1],[I*(H+.1),.1],[I*(H+.1),-.5],[I*(H-.2),-.5]]),null,[.09,.09,.1]);const st=22,_t=Ft.flip0+Math.min(2.3,(Ft.flipLip-Ft.flip0)*.08),F=Ft.flipLip-.04,Y=[];for(let I=0;I<=st;I++){const J=_l(_t+(F-_t)*I/st),Q=Math.atan2(J.fwd.y,-J.fwd.z),gt=.7+(1.9+.04*Math.max(0,Ti.height-18))*vs(0,1,Q);Y.push({th:Q,pin:J.pos.clone().addScaledVector(J.up,-.45),pout:J.pos.clone().addScaledVector(J.up,-.45-gt)})}const Mt=[.1,.1,.115],At=[.16,.16,.18],ot=(I,J)=>new L(J,I.y,I.z);for(const I of[-1,1]){const J=I*(H-.25);for(let Q=0;Q<Y.length;Q++){const gt=Y[Q];if(Kn(j,ot(gt.pin,J),ot(gt.pout,J),.14,Mt),Q+1<Y.length){const Et=Y[Q+1];Kn(j,ot(gt.pout,J),ot(Et.pout,J),.26,At),Kn(j,ot(gt.pin,J),ot(Et.pin,J),.16,Mt),Kn(j,Q%2?ot(gt.pin,J):ot(gt.pout,J),Q%2?ot(Et.pout,J):ot(Et.pin,J),.1,Mt)}}}for(let I=0;I<Y.length;I++){const J=Y[I];if(Kn(j,ot(J.pout,-1.65),ot(J.pout,H-.25),.14,Mt),I%2===0&&I+2<Y.length){const Q=Y[I+2];Kn(j,ot(J.pout,-1.65),ot(Q.pout,H-.25),.08,Mt),Kn(j,ot(J.pout,H-.25),ot(Q.pout,-1.65),.08,Mt)}}const Ut=Y.filter((I,J)=>J%2===0&&I.pout.y>1.5&&I.th>.55);for(const I of[-1,1]){const J=I*(H-.25);Ut.forEach((Et,It)=>{Kn(j,ot(Et.pout,J),new L(J,0,Et.pout.z),.22,At),j.box(.7,.2,.7,J,.1,Et.pout.z,bt.metalD);const $t=Ut[It+1];if(!$t)return;const ve=Math.min(Et.pout.y,$t.pout.y);for(let Pe=2.5,Re=0;Pe<ve-.5;Pe+=3,Re++){Kn(j,new L(J,Pe,Et.pout.z),new L(J,Pe,$t.pout.z),.1,Mt);const St=Math.min(ve,Pe+3);Kn(j,new L(J,Re%2?Pe:St,Et.pout.z),new L(J,Re%2?St:Pe,$t.pout.z),.07,Mt)}});const Q=Y[Y.length-1],gt=Y[Math.round(st*.72)];Kn(j,ot(Q.pout,J),new L(J,0,Q.pout.z-7.5),.24,At),Kn(j,ot(gt.pout,J),new L(J,0,gt.pout.z-6),.2,At),j.box(.8,.2,.8,J,.1,Q.pout.z-7.5,bt.metalD),j.box(.8,.2,.8,J,.1,gt.pout.z-6,bt.metalD)}for(const I of Ut)for(let J=2.5;J<I.pout.y-.5;J+=6)Kn(j,new L(-1.65,J,I.pout.z),new L(H-.25,J,I.pout.z),.1,Mt);{const I=-Ft.flip0-Ti.R*.6;for(const[J,Q,gt]of[[-24,I+2,22],[-26,I-14,26],[-6,I+46,14]]){const Et=Fc(j,G,{x:J,y:gt,z:Q,cols:4,rows:3,yaw:Math.atan2(-J,I-Q),pitch:.5,s:Ft.flip0,mast:1});R(rt,Et,10,15922943,1),R(rt,Et,30,10471679,.16)}}const zt=Ti.zLand,kt=Ti.xLand;{const I=[3.6,.05,.09],J=kt-4.4,Q=zt+16,gt=Math.min(zt-16,-Ft.flip0+2);j.box(.2,.13,Q-gt,J,.065,(Q+gt)/2,[.02,.02,.025]),G.box(.03,.06,Q-gt,J+.105,.075,(Q+gt)/2,I,Ft.flip0),G.box(1.4,.004,Q-gt,J+.85,.008,(Q+gt)/2,is(I,.06),Ft.flip0),E.box(.09,.012,46,kt-1.6,.03,zt-4,[.32,.32,.34],Ft.flipLip);const Et=_o(new Xt(.95,.97,1.05),.06);a.push(Et);const It=kt+9,$t=zt+30,ve=17,Pe=-Ft.flip0-(Ti.zLip!==void 0?(-Ti.zLip-Ft.flip0)*.5:5),Re=Fc(j,G,{x:It,y:ve,z:$t,cols:4,rows:2,yaw:Math.atan2(0-It,Pe-$t),pitch:.38,s:Ft.flip0,mast:1});R(rt,Re,6,16054271,.9),R(rt,Re,20,11062527,.1);const St=new L(1.5,Ti.height*.35,Pe),fn=new L().subVectors(St,Re),ie=fn.length();fn.normalize();const ze=new be(new xn(.9,7.5,ie,24,1,!0).translate(0,-ie/2,0),Et);ze.position.copy(Re),ze.quaternion.setFromUnitVectors(new L(0,-1,0),fn),rt.add(ze)}rt.add(j.mesh(r.steel)),rt.add(G.mesh(r.lamp)),rt.add(ft.mesh(r.metalD)),rt.add(E.mesh(r.neonD));for(const[I,J,Q,gt]of[[18,26,-Ft.flip0-2,380],[-16,22,-Ft.flip0+10,260],[kt+6,14,zt+10,450]]){const Et=new R0(15922431,gt,70,1.5);Et.position.set(I,J,Q),s.add(Et),d.push({l:Et,k:gt})}}{const rt=h("boost",Ft.boost0-200,Ft.takeoff+300),ft=new ke,E=new ke;let b=0;for(let q=Ft.boost0-30;q<Ft.takeoff;q+=16,b++){const j=rn(q),G=(q-Ft.boost0)/(Ft.takeoff-Ft.boost0),ut=88+yo(G,0,1)*8,ht=4+yo(G,0,1)*10;for(const st of[-1,1]){if(st>0&&q>Ft.takeoff-150)continue;const _t=Ye+st*12;ft.box(1.2,ht,1.2,_t,ht/2,j,bt.metal),E.box(.16,ht-.5,.16,_t-st*.65,ht/2,j,ud(bt.blue,bt.cyanW,yo(G,0,1)),q,ut),E.box(1.4,.2,1.4,_t,ht+.1,j,bt.cyanW,q,ut)}b%2===0&&Jn(E,8,11.5,.14,.2,Ye,9.6,j,ud(bt.blue,bt.org,yo(G,0,1)),q,ut)}const H=rn(Ft.takeoff);for(let q=0;q<8;q++)E.box(19,.05,.2,Ye,.06,H+2+q*2.2,bt.org,Ft.takeoff,90+q*.5);rt.add(ft.mesh(r.metal)),rt.add(E.mesh(r.neon)),tt(rt,Sn.mega.s0,Sn.mega.s1,Sn.mega.height,Ye,rn,2)}const W=[],Dt=[];{const rt=h("flight",Ft.boost1-400,Ft.finish+400),ft=new ke,E=new ke,b=new ke,H=new ke,q=new Ze({uniforms:{uBeat:Hn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q*vec2(1.0,0.8));
          float a = exp(-r*r*2.4)*0.2 + exp(-pow((r-0.86)*9.0,2.0))*0.08*(0.6+0.4*exp(-fract(uBeat)*4.0));
          gl_FragColor = vec4(vec3(1.0,0.92,1.2)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:Pn,depthWrite:!1});a.push(q);const j=new yn(1,1);j.rotateX(-Math.PI/2);for(const ut of Sn.fleetRows){if(ut.finale){const F=Ht(rt,ut.vehicles,ut.s,Ye,{extent:[ut.s-ut.depth/2,ut.s+ut.depth/2]});f.rows.push({row:ut,vehicles:F.vehicles});continue}const ht=[];for(const F of ut.vehicles){const Y=rd(F.kind,p?{envMap:p}:{});Y.position.set(F.x,0,rn(F.s)),Y.rotation.y=F.yaw,rt.add(Y),ht.push(Y)}const st=rn(ut.s),_t=new be(j,q);_t.position.set(Ye,.08,st),_t.scale.set(24,1,ut.depth+6),_t.renderOrder=3,rt.add(_t),Dh(b,H,{axis:"x",at:st+ut.depth/2+.9,a0:Ye-10.2,a1:Ye+10.2,face:1,s:ut.s}),Dh(b,H,{axis:"x",at:st-ut.depth/2-.9,a0:Ye-10.2,a1:Ye+10.2,face:-1,h:.1,s:ut.s});for(const F of[-1,1])ft.box(.4,4.5,.4,Ye+F*11.5,2.25,st,bt.metal,ut.s),E.box(.1,4.2,.1,Ye+F*11.2,2.25,st+.25,ut.finale?bt.org:bt.cyan,ut.s),E.box(.6,.5,.6,Ye+F*11.5,4.7,st,bt.wht,ut.s);f.rows.push({row:ut,vehicles:ht})}rt.add(ft.mesh(r.metal)),rt.add(E.mesh(r.neon)),rt.add(b.mesh(r.steel)),rt.add(H.mesh(r.lamp));const G=Tr(4242);for(let ut=Ft.boost1-100;ut<Ft.finish+300;ut+=34+G()*30){const ht=rn(ut);for(const st of[-1,1]){if(G()<.25)continue;const _t=st<0?Ye-(26+G()*120):Ye+(75+G()*160),F=18+G()*70,Y=2.5+G()*5;ft.box(Y,F,Y,_t,F/2,ht,bt.metalD),ft.box(Y*1.6,3,Y*1.6,_t,1.5,ht,bt.metal);const Mt=[bt.cyan,bt.mag,bt.org,bt.vio][Math.floor(G()*4)];for(const Ut of[-1,1])E.box(.14,F,.14,_t+Ut*Y/2,F/2,ht+Y/2,Mt,ut);E.box(Y+.2,.2,Y+.2,_t,F,ht,Mt,ut);const At=Math.floor(F/14);for(let Ut=1;Ut<=At;Ut++)E.box(Y+.1,.12,Y+.1,_t,Ut*14-2,ht,is(Mt,.7),ut);if(G()<.55){const Ut=6+G()*14,zt=Y*.6;ft.box(zt,Ut,zt,_t,F+Ut/2,ht,bt.metalD),E.box(zt+.15,.18,zt+.15,_t,F+Ut,ht,Mt,ut),ft.box(.25,10,.25,_t,F+Ut+5,ht,bt.metalL),E.box(.6,.6,.6,_t,F+Ut+10.2,ht,bt.red,ut)}else for(const Ut of[-1,1])E.box(.1,F*.8,.1,_t+Ut*Y*.2,F*.4,ht+Y/2+.05,bt.wht,ut)}}rt.add(ft.mesh(r.metal)),rt.add(E.mesh(r.neon));{const ut=new ke,ht=new ke;let st=0;for(let F=Ft.flight0+140;F<Ft.finish+200;F+=230,st++){const Y=rn(F),Mt=[bt.mag,bt.cyan,bt.org][st%3];Jn(ut,6,52,2.2,2.6,Ye,8,Y,bt.metal,F,-1e3,0,-Math.PI/2),Jn(ht,6,50.4,.3,.3,Ye,8,Y+1.4,Mt,F,-1e3,0,-Math.PI/2),Jn(ht,6,53.6,.18,.3,Ye,8,Y+1.4,bt.wht,F,-1e3,0,-Math.PI/2);for(let At=0;At<12;At++){const ot=At/12*Math.PI*2;ht.box(1.2,1.2,.4,Ye+Math.cos(ot)*52,8+Math.sin(ot)*52,Y+1.5,bt.wht,F,96+At*.25)}}const _t=Tr(777);for(let F=Ft.flight0+60;F<Ft.finish+100;F+=55+_t()*40){const Y=_t()<.5?-1:1,Mt=Ye+Y*(28+_t()*40),At=16+_t()*26,ot=rn(F),Ut=10+_t()*10,zt=7+_t()*6,kt=[bt.cyan,bt.mag,bt.vio,bt.org][Math.floor(_t()*4)];if(ut.box(Ut,1.2,zt,Mt,At,ot,bt.metal,F),ut.box(Ut*.6,1.6,zt*.6,Mt,At-1.3,ot,bt.metalD,F),ht.box(Ut+.2,.14,.14,Mt,At+.62,ot+zt/2,kt,F),ht.box(Ut+.2,.14,.14,Mt,At+.62,ot-zt/2,kt,F),ht.box(.14,.14,zt,Mt-Ut/2,At+.62,ot,kt,F),ht.box(.14,.14,zt,Mt+Ut/2,At+.62,ot,kt,F),ht.box(Ut*.5,.08,zt*.5,Mt,At-2.12,ot,bt.cyanW,F),_t()<.6){const I=4+_t()*8;ut.box(1.4,I,1.4,Mt,At+.6+I/2,ot,bt.metalD,F),ht.box(1.6,.16,1.6,Mt,At+.6+I,ot,kt,F),ht.box(.4,.4,.4,Mt,At+1.2+I,ot,bt.red,F)}}rt.add(ut.mesh(r.metal)),rt.add(ht.mesh(r.neon))}}const yt={};{const rt=h("finish",Ft.landStrip-300,Ft.end+400),ft=new ke,E=new ke;for(let F=Ft.landStrip;F<Ft.finish;F+=6){const Y=rn(F);for(const Mt of[-1,1])E.box(.6,.06,1.6,Ye+Mt*6.5,.06,Y,bt.wht,F)}const b=rn(Ft.finish),H=11;for(const F of[-1,1]){const Y=Ye+F*H;ft.box(1.6,16,1.6,Y,8,b,bt.metal);for(let Mt=0;Mt<8;Mt++)E.box(1.7,.6,1.7,Y,1+Mt*1.9,b,Mt%2?bt.wht:[.05,.05,.06],Ft.finish);E.box(.14,16,.14,Y-F*.85,8,b+.85,bt.cyan,Ft.finish)}ft.box(2*H+2,3.4,1.2,Ye,15.5,b,bt.metal);for(let F=0;F<24;F++)for(let Y=0;Y<2;Y++)(F+Y)%2===0&&E.box(.92,.5,.1,Ye-H+.5+F*.92,18-Y*.5-0+0,b+.62,bt.wht,Ft.finish);for(const[F,Y,Mt]of[[-6,19,bt.mag],[-16,23,bt.cyan],[-28,27,bt.vio]])Jn(ft,6,Y,1,1,Ye,10.5,b+F,bt.metal,Ft.finish,-1e3,0,-Math.PI/2),Jn(E,6,Y-.7,.18,.2,Ye,10.5,b+F+.55,Mt,Ft.finish,126,0,-Math.PI/2),Jn(E,6,Y+.7,.1,.2,Ye,10.5,b+F+.55,bt.wht,Ft.finish,127,0,-Math.PI/2);if(E.box(2*H+2,.15,.15,Ye,13.7,b+.62,bt.mag,Ft.finish),E.box(2*H+2,.15,.15,Ye,17.3,b+.62,bt.mag,Ft.finish),u)for(const F of[1,-1]){const Y=Ph(u,7,13,3,2.6);Y.position.set(Ye,15.5,b+F*.62),F<0&&(Y.rotation.y=Math.PI),rt.add(Y)}const q=[],j=[],G=Tr(77);for(const F of[-1,1]){for(let Y=0;Y<6;Y++){const Mt=Ye+F*(16+Y*2.4),At=.6+Y*1.3;ft.box(2.4,At*2,150,Mt,At,b+20,bt.conc),E.box(.1,.08,150,Mt-F*1.2,At*2+.02,b+20,Y%2?bt.cyan:bt.mag,Ft.finish);for(let ot=0;ot<120;ot++){q.push(Mt+(G()-.5)*1.6,At*2+.5+G()*.3,b+20+(G()-.5)*148);const Ut=[[2,2,2.2],[2.2,.3,1.4],[.3,1.6,2.2],[2.4,1.3,.3]][Math.floor(G()*4)];j.push(...Ut)}}ft.box(1,14,150,Ye+F*31,7,b+20,bt.metalD)}const ut=new nn;ut.setAttribute("position",new Ee(q,3)),ut.setAttribute("color",new Ee(j,3));const ht=new w2(ut,new pp({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!0}));rt.add(ht),rt.add(ft.mesh(r.matte)),rt.add(E.mesh(r.neon));const st=_o(new Xt(.4,1,2),.075);a.push(st);const _t=_o(new Xt(2,.35,1.3),.075);a.push(_t),yt.beams=[];for(let F=0;F<8;F++){const Y=new be(new xn(.3,2.6,300,16,1,!0).translate(0,150,0),(F>>1)%2?_t:st);Y.position.set(Ye+(F%2?1:-1)*(24+(F>>1)*5),0,b+10-(F>>1)*22),Y.userData.k=F,Y.frustumCulled=!1,rt.add(Y),yt.beams.push(Y)}}t&&t.add(s);let Ot=null;const Nt=fa.clone(),jt=tM.clone(),re=new Xt;let Rt=0;function Bt(rt,ft,E){let b,H=null;rt&&typeof rt=="object"?(H=rt,b=rt.t):typeof rt=="number"&&ft&&typeof ft=="object"?(H=ft,b=ft.t??(Ot&&Ot.t)??rt):typeof rt=="number"&&typeof ft=="number"?(b=rt<=.1&&ft>rt?ft:rt,H=E||null):typeof rt=="number"&&(b=rt),(b==null||!isFinite(b))&&(b=Ot&&isFinite(Ot.t)?Ot.t:Rt),Rt=b;const q=b/qp;Hn.uBeat.value=q,Hn.uTime.value=b;const j=vs(86,101,q)*(1-vs(140,150,q));if(Hn.uFlight.value=j,re.copy(Nt).lerp(jt,j),t&&(t.fog&&t.fog.color&&t.fog.color.copy(re),t.background&&t.background.isColor&&t.background.copy(re)),D.uFog.value.copy(re),pt&&pt.material&&pt.material.uniforms){const st=pt.material.uniforms;st.fogColor.value.copy(re),t&&t.fog&&(st.fogDensity.value=t.fog.density??Ah)}for(const st of Lt.strips){const _t=q-st.on,F=_t<0?0:1+3*Math.exp(-_t*4);st.mat.color.setRGB(2.4*F,2.4*F,2.7*F)}const G=vs(ns(14.5),ns(16.2),b);for(const st of Lt.door)st.g.position.x=st.sd*(6.5+G*13.5);for(const st of Lt.tree){let _t=0;st.id==="pre"?_t=q>=6&&q<16?1:0:st.id==="a1"?_t=q>=10&&q<16?1:0:st.id==="a2"?_t=q>=12&&q<16?1:0:st.id==="a3"?_t=q>=14&&q<16?1:0:st.id==="go"&&(_t=q>=16&&q<24?1+2*Math.exp(-(q-16)*2):0),st.mat.color.copy(st.col).multiplyScalar(_t*1.4),_t||st.mat.color.setRGB(.02,.02,.03)}z.intensity=300*(1-vs(ns(17),ns(22),b))*vs(0,ns(2),b+ns(1)),_.mat&&(_.mat.uniforms.uOn.value=vs(ns(12),ns(15.5),b));{const st=ns(16),_t=ti&&isFinite(ti.zero60)?ti.zero60:st+.81;for(const F of _.beams){const Y=F.k?_t:st,Mt=b-Y,At=(b>ns(12)?.35:0)+(Mt>=0?3.5*Math.exp(-Mt*2.5):0);F.mat.color.setRGB(2.4*At,.06*At,.08*At)}}if(ae.mesh){const st=ae.mesh;for(const _t of ae){let F=_t.zA-((_t.z0+_t.dir*-_t.v*b)%_t.len+_t.len)%_t.len;const Y=_t.gap&&F>_t.gap[0]&&F<_t.gap[1];ki.makeTranslation(_t.x,Y?-200:_t.y,F),st.setMatrixAt(_t.i,ki)}st.instanceMatrix.needsUpdate=!0;for(const _t of ae.beams){const F=_t.userData.ph;_t.rotation.set(.35*Math.sin(b*.4+F),0,_t.userData.sd*(.25+.25*Math.sin(b*.33+F*1.7)))}}for(const st of mt.lasers)st.m.rotation.z=Math.sin(b*2.2+st.k*1.1)*.5+(st.k%2?.35:-.35);if(mt.loopLasers)for(const st of mt.loopLasers){const _t=st.userData.k;st.rotation.set(Math.sin(b*.9+_t)*.5,0,(_t<5?-1:1)*(.25+.3*Math.sin(b*.7+_t*.8)))}const ut=n||H&&H.camera||null;if(yt.beams)for(const st of yt.beams){const _t=st.userData.k;st.rotation.set(Math.sin(b*.8+_t)*.35,0,Math.sin(b*.6+_t*1.3)*.4)}let ht=null;if(ut&&ut.position?ht=ut.position.z:Ot&&Ot.pos&&(ht=Ot.pos.z),ht!=null&&v.length&&g.length){let st=v[0];for(const _t of v)Math.abs(_t.z-ht)<Math.abs(st.z-ht)&&(st=_t);for(const _t of g)_t.l.position.x=st.x+_t.dx,_t.l.position.z=st.z}for(const st of d)st.l.intensity=ht==null?st.k:st.k*(1-vs(60,140,Math.abs(st.l.position.z-ht)));if(ht!=null)for(const st of c)st.g.visible=st.zLo<=ht+500&&st.zHi>=ht-2600}const O=new L,he=(rt,ft,E,b,H)=>{const q=E<1,j=rt.z,G=rt.x,ut=yo(ft.z,j-40,j+30),ht=j+(ut-j)*(q?H[0]:H[1]);return b.pos.set(G+pd+(q?26:25),3.2,ht+2),b.look.set(G,q?7.2:6,ht-.5),b.fov=q?58:42,b},Vt=()=>({pos:new L,look:new L,fov:50}),ce={fleetJump(rt,ft=9/16,E=Vt()){return he(v[0]||{z:rn(Ft.fleet.sCenter),x:0},rt,ft,E,[.6,.35])},finale(rt,ft=9/16,E=Vt()){return he(v[v.length-1]||{z:rn(Ft.finish),x:Ye},rt,ft,E,[.6,.35])},flipDescent(rt,ft=9/16,E=Vt()){const b=ft<1,H=-Ft.flip0-Ti.R,q=Ti.zLand;return E.pos.set(Ti.xLand+(b?9:14),4.5,q+(b?34:26)),O.set(Ti.xLand*.45,Math.max(6,Math.min(rt.y,Ti.height)*.7+2),H*.35+rt.z*.65),E.look.copy(O),E.fov=b?62:46,E}};if(e&&t&&e.compile)try{const rt=new li(60,1,.1,6e3);e.compile(t,n||rt)}catch{}const ne={group:s,envMap:U,course:Sn,layout:Ft,rings:W,pylons:Dt,reflector:pt,fleet:f,flipRamp:X,shots:ce,update:Bt,setGameplayState(rt){Ot=rt},setCamera(rt){n=rt},trackFrame:_l,groundY:od,dispose(){t&&t.remove(s),s.traverse(rt=>{rt.geometry&&rt.geometry.dispose()});for(const rt of a)rt.dispose&&rt.dispose();pt&&pt.dispose&&pt.dispose()}};return Bt(0),ne}const Ke=L,ei=-2.26,Hi=2.22,cr=-1.36,lr=1.32,ps=.375,mr=.395,md=.855,gd=.775,ss=.112;function Rn(i,t){if(t<=i[0][0])return i[0][1];const e=i.length;if(t>=i[e-1][0])return i[e-1][1];let n=1;for(;n<e-1&&t>i[n][0];)n++;const s=i[n-1][0],o=i[n][0],a=i[n-1][1],c=i[n][1],l=o-s,h=(p,_)=>(i[_][1]-i[p][1])/(i[_][0]-i[p][0]),r=h(n-1,n),u=p=>{if(p<=0)return h(0,1);if(p>=e-1)return h(e-2,e-1);const _=h(p-1,p),M=h(p,p+1);return _*M<=0?0:2*_*M/(_+M)};let f=u(n-1),d=u(n);r===0&&(f=0,d=0);const v=(t-s)/l,g=v*v,m=g*v;return(2*m-3*g+1)*a+(m-2*g+v)*l*f+(-2*m+3*g)*c+(m-g)*l*d}function el(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}const Gn={floorY:[[-2.26,.205],[-2,.15],[-1.7,ss],[1.75,ss],[2.22,.2]],floorX:[[-2.26,.45],[-1.9,.65],[0,.8],[2.22,.8]],rockY:[[-2.26,.225],[-1.95,.2],[2,.2],[2.22,.25]],rockX:[[-2.26,.56],[-2,.72],[-1.7,.82],[-1.36,.87],[-.6,.9],[.6,.93],[1.6,.97],[2.22,.94]],beltY:[[-2.26,.44],[-1.9,.52],[-1.3,.575],[-.6,.56],[.6,.58],[1.4,.64],[2.22,.665]],beltX:[[-2.26,.6],[-2,.76],[-1.7,.87],[-1.36,.915],[-.6,.95],[.4,.985],[1.32,1.035],[1.9,1.03],[2.22,1]],shY:[[-2.26,.6],[-1.95,.664],[-1.65,.726],[-1.36,.786],[-1,.792],[-.5,.79],[.2,.79],[.7,.8],[1,.82],[1.32,.85],[1.8,.848],[2.22,.828]],shX:[[-2.26,.58],[-2,.72],[-1.7,.82],[-1.36,.865],[-.6,.895],[.4,.925],[1.32,.975],[1.9,.97],[2.22,.94]],finX:[[-2.26,.54],[-1.9,.58],[-1.36,.62],[-.8,.63],[0,.66],[1.32,.67],[2.22,.63]],hoodY:[[-2.26,.47],[-1.9,.556],[-1.5,.652],[-1.2,.724],[-1,.748],[-.6,.758],[.4,.765],[1.2,.785],[1.7,.8],[2.22,.805]]},pM=i=>Rn(Gn.shY,i)+.006,uf=i=>.24*Math.pow(Math.min(1,Math.abs(i)/.62),2.2),mM=[.08,.08,.075,.07,.06,.05,.04,.03,.11,.07,0,0,0,0],Kp=.7,gM=i=>1-el(ei,ei+Kp,i),vM=i=>ei+uf(i);function $p(i){for(const t of[cr,lr]){const e=i-t;if(Math.abs(e)<mr)return ps+Math.sqrt(mr*mr-e*e)}return null}const To=7,dr=8,Nc=[.14,.38,.62,.84];function Fa(i){const t=Rn(Gn.floorY,i),e=Rn(Gn.floorX,i),n=Rn(Gn.rockY,i),s=Rn(Gn.rockX,i);let o=Rn(Gn.beltY,i);const a=Rn(Gn.beltX,i);let c=Rn(Gn.shY,i);const l=Rn(Gn.shX,i);let h=pM(i);const r=Rn(Gn.finX,i),u=Rn(Gn.hoodY,i),f=el(ei,ei+.6,i),d=[[0,t],[e,t]],v=$p(i);if(v!==null)o=Math.max(o,v+.004),c=Math.max(c,o+.012),h=Math.max(h,c+.004),d[1][0]=Math.min(e,.62-.02),d.push([.62,n],[.62,v],[(.62+a)/2,v],[a,v],[a,v+(o-v)*.5],[a,o]);else{const _=.018*el(ei,ei+.5,i),M=y=>{const R=(y-Nc[0])/(1-Nc[0]);return[s+(a-s)*y+(y>Nc[0]?_*Math.sin(Math.PI*R):0),n+(o-n)*y]};d.push([s,n],...Nc.map(M),[a,o])}const g=.1+.1*(1-el(-1,-.6,i)),m=r-g,p=u+.004+.012*f;return d.push([l,c],[r,h],[m,p],[m*.66,u+(p-u)*.3],[m*.33,u+(p-u)*.06],[0,u]),d}const xM=[0,0,0,1,1,1,1,1,1,1,1,1,1],_M=[0,1,2,3,3,3,3,4,5,6,7,7,7],yM=(i,t,e)=>e+(mM[i]+uf(t))*gM(e),MM={[To]:Gn.beltY,[dr]:Gn.shY,[dr+1]:Gn.shY};function jp(i){return Fa(i).map(([t,e],n)=>{const s=yM(n,t,i),o=MM[n];return[t,o&&s>i+1e-6?e+Rn(o,s)-Rn(o,i):e,s]})}function bM(){const i=[];for(let t=ei;t<=Hi+1e-6;t+=.05)i.push(t);for(let t=ei;t<ei+Kp;t+=.025)i.push(t);for(const t of[cr,lr]){for(let e=-1;e<=1.0001;e+=1/12)i.push(t+Math.sin(e*Math.PI/2)*mr*.999);i.push(t-mr-.006,t+mr+.006)}return i.push(Hi),i.sort((t,e)=>t-e),i.filter((t,e)=>e===0||t-i[e-1]>.004).filter(t=>t>=ei&&t<=Hi)}function SM(){const i=bM(),t=i.map(jp),e=t[0].length,n=[[],[],[]],s=new Map;let o=null;const a=(u,f,d,v)=>{const g=d[0]-f[0],m=d[1]-f[1],p=d[2]-f[2],_=v[0]-f[0],M=v[1]-f[1],y=v[2]-f[2],R=m*y-p*M,U=p*_-g*y,D=g*M-m*_;if(R*R+U*U+D*D<1e-12)return;if(u===2||o===null){n[u].push(...f,...d,...v);return}let N=s.get(o);N||(N={m:u,arr:[]},s.set(o,N)),N.arr.push(...f,...d,...v)},c=i.map(u=>$p(u)!==null);for(let u=0;u<t.length-1;u++){const f=t[u],d=t[u+1],v=c[u]||c[u+1];for(let g=0;g<e-1;g++){const m=v&&g>=2&&g<=4?0:xM[g];o=m+"_"+_M[g]+(v&&g>=2&&g<=To+1?"a":"");const p=f[g],_=f[g+1],M=d[g+1],y=d[g],R=[-p[0],p[1],p[2]],U=[-_[0],_[1],_[2]],D=[-M[0],M[1],M[2]],N=[-y[0],y[1],y[2]];a(m,p,_,M),a(m,p,M,y),a(m,R,D,U),a(m,R,N,D)}}o=null;const l=t[0],h=t[t.length-1];{const u=dr+2,f=g=>[-g[0],g[1],g[2]],d=(g,m)=>{const p=Ys.triangulateShape(m.map(_=>new qt(_[0],_[1])),[]);for(const[_,M,y]of p){const R=m[_],U=m[M],D=m[y];(U[0]-R[0])*(D[1]-R[1])-(U[1]-R[1])*(D[0]-R[0])<0?a(g,R,U,D):a(g,R,D,U)}},v=[];for(let g=e-1;g>=u;g--)v.push(l[g]);v.push(l[1],l[0],f(l[1]));for(let g=u;g<e-1;g++)v.push(f(l[g]));d(0,v);for(const g of[1,-1]){const m=[];for(let p=u;p>=1;p--)m.push(g>0?l[p]:f(l[p]));d(2,m)}}const r=[0,(h[0][1]+h[e-1][1])/2,Hi];for(let u=0;u<e-1;u++){const f=h[u],d=h[u+1];a(0,r,f,d),a(0,r,[-d[0],d[1],d[2]],[-f[0],f[1],f[2]])}return n.map((u,f)=>{let d=new nn;if(d.setAttribute("position",new Ee(u,3)),f===2){const g=new Float32Array(u.length);for(const m of[1,-1]){let p=0,_=0,M=0;for(let R=0;R<u.length;R+=9){if(Math.sign(u[R]+u[R+3]+u[R+6])!==m)continue;const U=u[R+3]-u[R],D=u[R+4]-u[R+1],N=u[R+5]-u[R+2],P=u[R+6]-u[R],x=u[R+7]-u[R+1],z=u[R+8]-u[R+2];p+=D*z-N*x,_+=N*P-U*z,M+=U*x-D*P}const y=Math.hypot(p,_,M)||1;for(let R=0;R<u.length;R+=9)if(Math.sign(u[R]+u[R+3]+u[R+6])===m)for(let U=0;U<3;U++)g.set([p/y,_/y,M/y],R+U*3)}return d.setAttribute("normal",new Nn(g,3)),d}const v=[];u.length&&v.push(I0(D0(d,1e-5),_i.degToRad(15)));for(const g of s.values()){if(g.m!==f)continue;const m=new nn;m.setAttribute("position",new Ee(g.arr,3)),v.push(I0(D0(m,1e-5),_i.degToRad(40)))}for(const g of v)for(const m of Object.keys(g.attributes))m!=="position"&&m!=="normal"&&g.deleteAttribute(m);return So(v)})}function Vr(i,t){t=Math.abs(t);const e=Fa(i).slice(dr);if(t>=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){const s=e[n-1],o=e[n];if(t>=o[0])return o[1]+(s[1]-o[1])*((t-o[0])/Math.max(1e-5,s[0]-o[0]))}return e[e.length-1][1]}const wM=-1.12,vd=1.62,Zp=[[-1.12,.73],[-.75,.93],[-.3,1.08],[.15,1.13],[.6,1.09],[1.1,.97],[1.62,.83]],ff=[[-1.12,.44],[-.92,.66],[-.6,.76],[-.1,.74],[.5,.64],[1.1,.47],[1.62,.27]],bl=[.5,.62];function TM(i,t){const e=Rn(ff,t),n=Vr(t,e)-.004,s=Vr(t,0)+.01,o=Math.max(s,Rn(Zp,t)),a=Math.min(1,Math.abs(i)/e),c=Math.acos(Math.pow(a,1/bl[0]));return n+(o-n)*Math.pow(Math.sin(c),bl[1])}const oi=9;function EM(){const i=[];for(let h=wM;h<=vd;h+=.04)i.push(h);i.push(vd);const t=i.map(h=>{const r=Rn(ff,h),u=Vr(h,r)-.004,f=Vr(h,0)+.01,d=Math.max(f,Rn(Zp,h)),v=[];for(let g=0;g<oi;g++){const m=g/(oi-1),p=m*Math.PI/2,_=r*Math.pow(Math.cos(p),bl[0]),M=u+(d-u)*Math.pow(Math.sin(p),bl[1]);v.push([g===oi-1?0:_,M,h])}return v}),e=[],n=[],s=t.length;for(const h of[1,-1])for(let r=0;r<s;r++)for(let u=0;u<oi;u++){const f=t[r][u];e.push(f[0]*h,f[1],f[2])}const o=(h,r,u)=>h*s*oi+r*oi+u;for(let h=0;h<s-1;h++)for(let r=0;r<oi-1;r++){const u=o(0,h,r),f=o(0,h,r+1),d=o(0,h+1,r+1),v=o(0,h+1,r);n.push(u,f,d,u,d,v);const g=o(1,h,r),m=o(1,h,r+1),p=o(1,h+1,r+1),_=o(1,h+1,r);n.push(g,p,m,g,_,p)}{const h=t[s-1],r=e.length/3;e.push(0,h[0][1],h[0][2]);for(const u of[1,-1])for(let f=0;f<oi;f++)e.push(h[f][0]*u,h[f][1],h[f][2]);for(let u=0;u<oi-1;u++)n.push(r,r+1+u,r+2+u),n.push(r,r+1+oi+u+1,r+1+oi+u)}const a=new nn;a.setAttribute("position",new Ee(e,3)),a.setIndex(n),a.computeVertexNormals();const c=a.attributes.normal;for(let h=0;h<s;h++){const r=o(0,h,oi-1),u=o(1,h,oi-1),f=(c.getY(r)+c.getY(u))/2,d=(c.getZ(r)+c.getZ(u))/2,v=Math.hypot(f,d)||1;c.setXYZ(r,0,f/v,d/v),c.setXYZ(u,0,f/v,d/v)}const l=t.map(h=>[h[0],h[Math.round(oi*.35)],h[oi-3],h[oi-1]]);return{geo:a,secs:l}}function _s(i,t,e){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Al(n);return s.colorSpace=In,s.anisotropy=4,s}const AM=()=>_s(256,112,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#f2f3f4"),n.addColorStop(1,"#c9ccd0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="#3a3e44",i.lineWidth=5,i.strokeRect(6,6,t-12,e-12),i.fillStyle="#4a4f57",i.font="700 64px Arial Narrow, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("RDSTR",t/2,e/2+4)}),Ih=i=>_s(128,128,(t,e,n)=>{const s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);for(const[o,a]of i)s.addColorStop(o,a);t.fillStyle=s,t.fillRect(0,0,e,n)}),CM=()=>_s(128,128,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,t*.08,t/2,e/2,t/2);n.addColorStop(0,"rgba(40,42,46,0.7)"),n.addColorStop(.55,"rgba(70,74,80,0.35)"),n.addColorStop(.9,"rgba(60,64,70,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)});function RM(i){const t=new $a;t.background=new Xt(263176);const e=new be(new an(60,30,60),new $e({color:460556,side:Zn}));e.position.y=10,t.add(e);const n=(c,l,h,r,u,f,d,v=0)=>{const g=new be(new an(l,h,r),new $e({color:c}));g.position.set(u,f,d),g.rotation.y=v,t.add(g)};n(new Xt(2.2,2.2,2.4),1.2,.2,40,-4,14,0),n(new Xt(2.2,2.2,2.4),1.2,.2,40,4,14,0),n(new Xt(3.5,.3,2.6),.4,1.2,50,-29,2,0),n(new Xt(.2,2.4,3.6),.4,1.2,50,29,2,0),n(new Xt(3.5,1.2,.2),50,.8,.4,0,.6,-29),n(new Xt(1.6,1.5,1.7),50,.5,.4,0,3,29),n(new Xt(.2,1.2,2),50,.4,.4,0,.4,29),n(new Xt(1.8,1.8,2),50,.15,.4,0,6,-29);const s=new be(new yn(60,60),new $e({color:723730}));s.rotation.x=-Math.PI/2,s.position.y=-4,t.add(s);const o=new Xr(i),a=o.fromScene(t,.035);return o.dispose(),t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),a.texture}const PM=`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,LM=`uniform float uLevel; uniform float uTime; uniform float uSeed; uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uSmoke;
varying vec2 vUv; varying vec3 vN; varying vec3 vV;
float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
  return mix(mix(h2(i), h2(i+vec2(1.,0.)), f.x), mix(h2(i+vec2(0.,1.)), h2(i+vec2(1.,1.)), f.x), f.y); }
void main(){
  float a = 1.0 - vUv.y;                                   // 0 nozzle -> 1 column end
  float rim = abs(dot(normalize(vN), normalize(vV)));
  float t = uTime + uSeed * 7.0;
  float n = vn(vec2(vUv.x * 10.0, a * 7.0 - t * 16.0)) * 0.6 + vn(vec2(vUv.x * 23.0 + 3.0, a * 15.0 - t * 27.0)) * 0.4;
  float soft = pow(rim, 1.8 + 1.5 * (1.0 - a));            // tight fresnel core near the nozzle, softer downstream
  float body = (1.0 - smoothstep(0.5, 1.0, a)) * (0.6 + 0.4 * (1.0 - a)) * (0.7 + 0.3 * n) * smoothstep(0.0, 0.03, a + 0.01);
  float hot = exp(-a * 16.0);
  vec3 c = mix(uColor, uSmoke, smoothstep(0.3, 0.95, a + 0.2 * (n - 0.5)));
  vec3 col = (c * body + uCore * hot) * soft * uLevel;
  gl_FragColor = vec4(min(col, vec3(0.85)), 1.0);
}`,DM="attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",IM="uniform vec3 uColor; uniform float uOpacity; varying float vA; void main(){ gl_FragColor=vec4(uColor*vA*uOpacity,1.0); }";class xd{constructor(t,e,n=56){this.n=n,this.w=e,this.pts=[],this.ups=[];const s=n*4;this.pos=new Float32Array(s*3),this.alpha=new Float32Array(s);const o=[];for(let c=0;c<n-1;c++)for(const l of[0,2]){const h=c*4+l,r=h+1,u=h+4,f=h+5;o.push(h,r,f,h,f,u)}const a=new nn;a.setAttribute("position",new Nn(this.pos,3).setUsage(Xs)),a.setAttribute("aA",new Nn(this.alpha,1).setUsage(Xs)),a.setIndex(o),this.mat=new Ze({vertexShader:DM,fragmentShader:IM,transparent:!0,depthWrite:!1,blending:Pn,side:je,toneMapped:!1,uniforms:{uColor:{value:t},uOpacity:{value:0}}}),this.mesh=new be(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.renderOrder=5,this.mesh.name="roadster-trail"}reset(){this.pts.length=0,this.ups.length=0}push(t,e,n,s=.12){const o=this.pts[0];o&&o.distanceToSquared(t)<s*s?(o.copy(t),this.ups[0][0].copy(e),this.ups[0][1].copy(n)):(this.pts.unshift(t.clone()),this.ups.unshift([e.clone(),n.clone()]),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop())),this.write()}write(){const t=this.n,e=this.pos,n=this.alpha,s=this.pts.length;for(let a=0;a<t;a++){const c=Math.min(a,Math.max(0,s-1)),l=this.pts[c],h=a/(t-1),r=this.w*(1-h*.6),u=s>1&&a<s?Math.pow(1-h,1.6):0,f=a*4;if(!l){for(let g=0;g<4;g++)e.set([0,-999,0],(f+g)*3),n[f+g]=0;continue}const[d,v]=this.ups[c];e.set([l.x+d.x*r,l.y+d.y*r,l.z+d.z*r],f*3),e.set([l.x-d.x*r,l.y-d.y*r,l.z-d.z*r],(f+1)*3),e.set([l.x+v.x*r,l.y+v.y*r,l.z+v.z*r],(f+2)*3),e.set([l.x-v.x*r,l.y-v.y*r,l.z-v.z*r],(f+3)*3);for(let g=0;g<4;g++)n[f+g]=u}const o=this.mesh.geometry;o.attributes.position.needsUpdate=!0,o.attributes.aA.needsUpdate=!0}}function UM(i={}){const t=new hn;t.name="roadster";const e=new hn;t.add(e),i.forward==="+z"&&(e.rotation.y=Math.PI);const n=new hn;e.add(n);const s=new hn;n.add(s);const o=new Ei({color:12896462,metalness:.82,roughness:.38,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.2,sheen:0}),a={value:1};function c(A,V=1,ct=new Xt(1,1,1),dt=0,Ct=0,Pt=0){A.onBeforeCompile=S=>{S.uniforms.uStudio=a,S.uniforms.uStudioK={value:V},S.uniforms.uStudioTint={value:ct},S.uniforms.uDesat={value:dt},S.uniforms.uCapK={value:Ct},S.uniforms.uSkyCut={value:Pt},S.fragmentShader=`uniform float uStudio; uniform float uStudioK; uniform vec3 uStudioTint; uniform float uDesat; uniform float uCapK; uniform float uSkyCut;
`+S.fragmentShader.replace("#include <opaque_fragment>",`
      {
        vec3 nW = inverseTransformDirection(normal, viewMatrix);
        vec3 rW = inverseTransformDirection(reflect(-geometryViewDir, normal), viewMatrix);
        float ndv = saturate(dot(normal, geometryViewDir));
        float soft = smoothstep(0.42, 0.86, rW.y) * (0.55 + 0.45 * smoothstep(0.75, 0.1, abs(rW.x)));
        float strip = exp(-pow((rW.y - 0.10) / 0.035, 2.0)) * (0.6 + 0.4 * abs(rW.z));
        float side = smoothstep(0.55, 0.95, abs(rW.x)) * smoothstep(-0.2, 0.25, rW.y);
        float fres = pow(1.0 - ndv, 4.0);
        float fill = 0.5 + 0.5 * nW.y;
        soft *= 1.0 - 0.75 * pow(ndv, 3.0);
        vec3 st = vec3(0.92, 0.95, 1.0) * soft * 0.4 + vec3(0.85, 0.9, 1.0) * strip * 0.55
          + vec3(0.55, 0.62, 0.9) * side * 0.18 + vec3(0.6, 0.72, 1.0) * fres * 0.28 + vec3(0.05, 0.055, 0.07) * fill;
        outgoingLight *= 1.0 - uSkyCut * smoothstep(0.8, 0.97, rW.y);   // r6: no blown zenith hot-spot on the roof glass
        outgoingLight += st * uStudioTint * uStudio * uStudioK;
        // r5: titanium-silver, not lavender: pull the neon-tinted reflections most of the way to neutral grey
        // (the specular highlights keep a little of their colour) and soft-cap the brightness against bloom blowout
        float lum = dot(outgoingLight, vec3(0.2126, 0.7152, 0.0722));
        outgoingLight = mix(outgoingLight, vec3(lum) * vec3(0.97, 0.99, 1.03), uDesat);
        outgoingLight = outgoingLight / (1.0 + max(0.0, lum - 0.9) * 0.6 * uDesat);
        outgoingLight = outgoingLight / (1.0 + max(0.0, lum - 0.35) * uCapK);   // r6: hot-spot cap (no blown roof highlight)
      }
      #include <opaque_fragment>`)},A.customProgramCacheKey=()=>"studio"+V+"_"+dt+"_"+Ct+"_"+Pt}c(o,1,new Xt(1,1,1),.62,.5);const l=new Ei({color:789776,metalness:.35,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.9}),h=new Tn({color:526603,metalness:.35,roughness:.62,envMapIntensity:.4}),r=new Tn({color:1447964,metalness:.5,roughness:.55,envMapIntensity:.8}),u=new Ei({color:2303532,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.1}),f=new Ei({color:329483,metalness:.6,roughness:.14,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35,side:je}),d=new Tn({color:13225686,metalness:1,roughness:.16,envMapIntensity:1.4}),v=new Tn({color:1315862,metalness:0,roughness:.86,envMapIntensity:.45}),g=new Tn({color:658189,metalness:.5,roughness:.6,envMapIntensity:.6,side:je}),m=new Tn({color:9080210,metalness:.9,roughness:.38,envMapIntensity:1}),p=new Ei({color:10096664,metalness:.2,roughness:.35,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.9}),_=new Ei({color:11844290,metalness:.95,roughness:.18,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35}),M=new Ei({color:1711136,metalness:.8,roughness:.35,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:1.1}),y=new Xt(2.1,0,.06),R=new Xt(.5,0,.02),U=new $e({color:y.clone(),toneMapped:!1}),D=new $e({color:R.clone(),toneMapped:!1}),N=new Xt(3.2,.55,.5),P=new Xt(.55,0,.03),x=new $e({color:N.clone(),toneMapped:!1}),z=new $e({color:P.clone(),transparent:!0,blending:Pn,depthWrite:!1,toneMapped:!1,side:je}),B=new $e({color:new Xt(.12,.125,.14),transparent:!0,blending:Pn,depthWrite:!1,toneMapped:!1}),et=new Tn({color:11039802,metalness:1,roughness:.28,envMapIntensity:1.1,emissive:new Xt(.09,.05,.015)}),vt=new Tn({color:13936974,metalness:1,roughness:.22,envMapIntensity:1.4,emissive:new Xt(.16,.09,.02)}),wt=()=>_s(64,64,(A,V,ct)=>{const dt=A.createRadialGradient(V/2,ct*.9,2,V/2,ct*.7,V*.6);dt.addColorStop(0,"rgba(255,255,255,1)"),dt.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=dt,A.fillRect(0,0,V,ct)}),pt=new Xt(2.3,2.4,2.7),Lt=new $e({color:pt.clone(),toneMapped:!1}),tt=new Xt(.025,.1,.18),Ht=new $e({color:tt.clone(),toneMapped:!1}),se=new $e({color:new Xt(2.4,.9,.1),toneMapped:!1}),ue=new $e({color:new Xt(.02,.03,.05),toneMapped:!1}),ae=AM(),mt=new Tn({map:ae,emissiveMap:ae,emissive:new Xt(.32,.32,.33),metalness:.1,roughness:.4}),X=[h,et,o,l,r,u,f,d,v,g,_,M,m,p,mt,vt];c(vt,.5,new Xt(1,.8,.45)),c(l,.32),c(u,.4),c(f,.22,new Xt(.8,.9,1.15),.2,2.5,.85),c(d,.9),c(g,.08),c(_,.7),c(M,.35),c(m,.5),c(v,.12);const W=(A,V,ct,dt=0,Ct=0,Pt=0)=>{const S=new be(V,ct);return S.position.set(dt,Ct,Pt),A.add(S),S},[Dt,yt,Ot]=SM(),Nt=W(s,yt,o);Nt.name="roadster-paint",W(s,Ot,o).name="nose-corners",W(s,Dt,l);const jt=EM();W(s,jt.geo,f);{const A=jt.secs.map(V=>new Ke(V[0][0]+.004,V[0][1]+.004,V[0][2]));for(const V of[1,-1]){const ct=new rr(A.map(dt=>new Ke(dt.x*V,dt.y,dt.z)));W(s,new zs(ct,40,.008,5,!1),d)}for(const V of[1,-1]){const ct=[];for(let dt=0;dt<=14;dt++){const Ct=-.98+2.4*dt/14,Pt=.93-.2*(dt/14),S=Rn(ff,Ct)*Pt;ct.push(new Ke(S*V,TM(S,Ct)+.004,Ct))}W(s,new zs(new rr(ct),40,.011,5,!1),o).name="glass-pillar"}}const re=new hn;s.add(re);{const A=Fa(ei),V=(Z,it=1,$=ei)=>{const[Gt,Tt,Wt]=jp($)[Z];return new Ke(Gt*it,Tt,Wt)},ct=A.slice(dr+2),dt=Z=>{Z=Math.abs(Z);for(let it=1;it<ct.length;it++){const $=ct[it-1],Gt=ct[it];if(Z>=Gt[0])return Gt[1]+($[1]-Gt[1])*((Z-Gt[0])/Math.max(1e-5,$[0]-Gt[0]))}return ct[ct.length-1][1]},Ct=ct[0][0],Pt=new $e({color:new Xt(.22,.24,.28),transparent:!0,blending:Pn,depthWrite:!1,toneMapped:!1});re.userData.glowM=Pt,re.userData.glowBase=Pt.color.clone();const S=(Z,it,$=40,Gt=6)=>{const Tt=new rr(Z,!1,"centripetal",.2),Wt=Tt.computeFrenetFrames($,!1),fe=[],pe=[],ye=Jt=>{const ge=Jt*(it.length-1),me=Math.min(it.length-2,Math.floor(ge));return it[me]+(it[me+1]-it[me])*(ge-me)};for(let Jt=0;Jt<=$;Jt++){const ge=Jt/$,me=Tt.getPointAt(ge),Oe=ye(ge),Le=Wt.normals[Jt],sn=Wt.binormals[Jt];for(let Fe=0;Fe<=Gt;Fe++){const we=Fe/Gt*Math.PI*2;fe.push(me.x+Oe*(Math.cos(we)*Le.x+Math.sin(we)*sn.x),me.y+Oe*(Math.cos(we)*Le.y+Math.sin(we)*sn.y),me.z+Oe*(Math.cos(we)*Le.z+Math.sin(we)*sn.z))}if(Jt<$)for(let Fe=0;Fe<Gt;Fe++){const we=Jt*(Gt+1)+Fe,Qe=we+Gt+1;pe.push(we,Qe,we+1,we+1,Qe,Qe+1)}}const oe=new nn;return oe.setAttribute("position",new Ee(fe,3)),oe.setIndex(pe),oe.computeVertexNormals(),oe},C=[];for(let Z=0;Z<=24;Z++){const it=-Ct+2*Ct*(Z/24);C.push(new Ke(it,dt(it)-.007,vM(it)-.006))}const k=new rr(C,!1,"centripetal");W(re,new zs(k,64,.0085,6,!1),Lt).name="front-lightbar",W(re,new zs(k,48,.022,8,!1),Pt).renderOrder=4;const T=new $e({color:pt.clone().multiplyScalar(1.5),toneMapped:!1,side:je});re.userData.slashM=T;const at=new Ei({color:131845,metalness:.3,roughness:.08,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.4,side:je});X.push(at);for(const Z of[1,-1]){const it=V(dr+2,Z),$=V(dr+1,Z),Gt=V(To,Z),Tt=$.clone().sub(it),Wt=Tt.length();Tt.normalize();const fe=new Ke().crossVectors(Tt,Gt.clone().sub(it)).normalize();fe.z>0&&fe.negate();const pe=new Ke().crossVectors(fe,Tt).normalize();pe.y>0&&pe.negate();const ye=(ge,me,Oe,Le,sn)=>{const Fe=(bn,kn)=>it.clone().addScaledVector(Tt,Wt*bn).addScaledVector(pe,Le+kn).addScaledVector(fe,sn),we=ge+(me-ge)*.55,Qe=ge+(me-ge)*.2,qe=[Fe(ge,0),Fe(Qe,-Oe*.75),Fe(we,-Oe),Fe(me,0),Fe(we,Oe),Fe(Qe,Oe*.75)],di=[];for(const bn of qe)di.push(bn.x,bn.y,bn.z);const xe=new nn;return xe.setAttribute("position",new Ee(di,3)),xe.setIndex([0,1,5,1,2,5,5,2,4,2,3,4]),xe.computeVertexNormals(),xe};W(re,ye(0,1.02,.034,.03,.003),at).name="slash-lens",W(re,ye(.1,.98,.017,.026,.006),T).name="slash-headlight";const oe=[.12,.4,.7,.96].map(ge=>it.clone().addScaledVector(Tt,Wt*ge).addScaledVector(pe,.026).addScaledVector(fe,.01));W(re,S(oe,[.02,.05,.05,.015],20,8),Pt).renderOrder=4;const Jt=W(s,new an(.01,.022,.085),se,(Rn(Gn.beltX,-.86)+.003)*Z,Rn(Gn.beltY,-.86)+.07,-.86);Jt.rotation.y=.05*Z}for(let Z=0;Z<1;Z++){const it=[];for(let $=0;$<=12;$++){const Gt=-.48+.96*$/12;it.push(new Ke(Gt,A[0][1]+.01,ei+.035+uf(Gt)-.006))}W(re,new zs(new rr(it),24,.008,5,!1),r).name="front-lip"}}{const A=new $e({color:328966});for(const V of[1,-1]){for(const[Ct,Pt]of[[.62,-.08],[-.88,.04]]){const S=Fa(Ct),C=[3,4,5,6,To,dr].map((k,T,at)=>new Ke((S[k][0]+.003)*V,S[k][1]+(T===0?.01:0),Ct+Pt*(T/(at.length-1)-.6)));W(s,new zs(new rr(C),16,.0045,4,!1),A)}const ct=new Ir;ct.moveTo(0,0),ct.lineTo(.26,0),ct.lineTo(.31,.075),ct.lineTo(.08,.05),ct.closePath();const dt=W(s,new ll(ct),r,(Rn(Gn.beltX,.75)+.004)*V,.42,.86);dt.rotation.y=V>0?Math.PI/2:-Math.PI/2,dt.scale.x=V>0?1:-1,dt.rotation.order="YXZ"}}const Rt=new hn;s.add(Rt);const Bt={nozzles:[]};{const A=Fa(Hi),ct=A[A.length-1][1]-.055,dt=A[To][0]-.03,Ct=Hi+.004,Pt=W(Rt,new an(2*dt,.02,.008),U,0,ct,Ct);Pt.name="roadster-lightbar",W(Rt,new an(2*dt-.02,.007,.008),x,0,ct,Ct+.003);const S=_s(16,128,(fe,pe,ye)=>{const oe=fe.createLinearGradient(0,0,0,ye);oe.addColorStop(0,"rgba(255,255,255,0)"),oe.addColorStop(.5,"rgba(255,255,255,1)"),oe.addColorStop(1,"rgba(255,255,255,0)"),fe.fillStyle=oe,fe.fillRect(0,0,pe,ye)});z.map=S;const C=W(Rt,new yn(2*dt+.16,.2),z,0,ct,Ct+.02);C.renderOrder=4;for(const fe of[1,-1]){const pe=W(Rt,new an(.012,.02,.09),U,(A[To][0]+.003)*fe,ct,Hi-.04);pe.rotation.y=.04*fe}W(Rt,new an(dt*1.7,.006,.01),D,0,ct-.21,Ct),Bt.tailLeft=new Mn,Bt.tailLeft.position.set(-dt+.02,ct,Ct+.03),Bt.tailRight=new Mn,Bt.tailRight.position.set(dt-.02,ct,Ct+.03),Rt.add(Bt.tailLeft,Bt.tailRight);const k=W(Rt,new an(.16,.012,.02),Lt,0,.7,Ct+.008);k.name="plate-lamp";const T=W(Rt,new yn(1,.2),B,0,.62,Ct+.01);T.renderOrder=3,B.map=wt();const at=new Ir;at.moveTo(-.74,0),at.lineTo(.74,0),at.lineTo(.82,.24),at.lineTo(.78,.3),at.lineTo(-.78,.3),at.lineTo(-.82,.24),at.closePath();const Z=W(Rt,new La(at,{depth:.03,bevelEnabled:!1}),h,0,.2,Hi-.025);Z.name="diffuser-face";const it=new hn;it.position.set(0,.555,Ct+.006),Rt.add(it);const $=W(it,new yn(.3,.13),mt,0,.065,.004);$.name="plate",W(it,new an(.36,.15,.008),r,0,.065,-.001),Rt.userData.plateHinge=it;const Gt=new Tn({color:5922406,metalness:1,roughness:.22,envMapIntensity:1.1});X.push(Gt),c(Gt,.5);const Tt=new Tn({color:328966,metalness:.6,roughness:.5,side:je});X.push(Tt),[[-.39,.4,!1],[-.13,.4,!1],[.13,.4,!1],[.39,.4,!1],[0,.62,!0]].forEach(([fe,pe,ye])=>{const oe=new hn;oe.position.set(fe,pe,ye?Hi-.01:Ct+.012),Rt.add(oe);const Jt=ye?.05:.058;W(oe,new Ms(Jt,ye?.008:.0095,8,36),Gt),W(oe,new Ms(Jt*.86,.004,6,32),r,0,0,-.012);const ge=W(oe,new xn(Jt*.95,Jt*.8,.12,24,1,!0),Tt,0,0,-.06);ge.rotation.x=Math.PI/2,W(oe,new as(Jt*.8,24),ue,0,0,-.11),oe.userData.main=ye,oe.userData.dir=new Ke(0,-.06,1),Bt.nozzles.push(oe)});{const fe=new be(new yn(1.12,.15),h);fe.position.set(0,.4,Ct+.001),Rt.add(fe)}}{const C=Tt=>.45*(.2969*Math.sqrt(Tt)-.126*Tt-.3516*Tt*Tt+.2843*Tt**3-.1036*Tt**4),k=Tt=>.065*Math.sin(Tt*Math.PI)*(1-.35*Tt),T=[];for(let Tt=0;Tt<=16;Tt++){const Wt=.5*(1-Math.cos(Tt/16*Math.PI));T.push([Wt,k(Wt)+C(Wt)])}for(let Tt=15;Tt>=1;Tt--){const Wt=T[Tt][0];T.push([Wt,k(Wt)-C(Wt)])}const at=T.length,Z=[],it=[];for(let Tt=0;Tt<=24;Tt++){const Wt=Tt/24*2-1;for(let fe=0;fe<at;fe++){const[pe,ye]=T[fe],oe=-.45/2+pe*.45,Jt=ye*.45;Z.push(Wt*1.94/2,Jt*Math.cos(-.1)-oe*Math.sin(-.1)+.02*Wt*Wt,oe*Math.cos(-.1)+Jt*Math.sin(-.1)+.03*Wt*Wt)}}for(let Tt=0;Tt<24;Tt++)for(let Wt=0;Wt<at;Wt++){const fe=Tt*at+Wt,pe=Tt*at+(Wt+1)%at,ye=fe+at,oe=pe+at;it.push(fe,ye,pe,pe,ye,oe)}const $=new nn;$.setAttribute("position",new Ee(Z,3)),$.setIndex(it),$.computeVertexNormals();const Gt=W(s,$,u,0,.97,1.93);Gt.name="wing";for(const Tt of[1,-1]){const Wt=new Ir;Wt.moveTo(-.45*.58,.05),Wt.lineTo(.45*.6,.11),Wt.lineTo(.45*.66,-.17),Wt.lineTo(-.45*.2,-.09),Wt.closePath();const fe=new La(Wt,{depth:.014,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1});fe.translate(0,0,-.007),fe.rotateY(-Math.PI/2);const pe=W(s,fe,u,Tt*(1.94/2+.006),.97+.03,1.93+.02);pe.rotation.y=Tt*.04;const ye=.42*Tt,oe=1.68,Jt=Vr(oe,.42),ge=.97+.45*.11,me=new rr([new Ke(ye,Jt-.02,oe),new Ke(ye,Jt+.08,oe+.1),new Ke(ye,.97-.02,1.93+.17),new Ke(ye,ge+.05,1.93+.12),new Ke(ye,ge+.03,1.93+0),new Ke(ye,ge-.005,1.93-.06)]),Oe=new zs(me,28,.013,6,!1);W(s,Oe,u).name="wing-strut",W(s,new an(.03,.012,.12),u,ye,Jt-.002,oe)}}const O=[],he=CM(),Vt=_s(2048,256,(A,V,ct)=>{A.fillStyle="#1b1b1e",A.fillRect(0,0,V,ct),A.fillStyle="#76787d",A.font="700 26px Arial Narrow, Arial, sans-serif",A.textBaseline="middle";for(const dt of[.75,.25])for(const Ct of[60,1084])A.save(),A.translate(Ct,(1-dt)*ct),A.scale(1,-1),dt<.5&&A.scale(-1,-1),A.fillText("ROADSTER   275/30 ZR21   PERFORMANCE",0,0),A.restore()}),ce=new Ei({map:Vt,color:16777215,metalness:0,roughness:.62,sheen:.4,sheenRoughness:.6,sheenColor:new Xt(.25,.26,.3),envMapIntensity:.5}),ne=new Tn({color:13817564,metalness:1,roughness:.25,envMapIntensity:1.35}),rt=new Tn({color:2764083,metalness:.85,roughness:.36,envMapIntensity:1,alphaTest:.5,side:je}),ft=new Ei({color:14212322,metalness:.35,roughness:.32,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:1,emissive:new Xt(.12,.125,.135)});X.push(ce,ne,rt,ft),c(ft,.45),c(ce,.1),c(ne,.75),c(rt,.3),rt.alphaMap=_s(256,256,(A,V,ct)=>{A.fillStyle="#fff",A.fillRect(0,0,V,ct),A.fillStyle="#000";const dt=V/2,Ct=ct/2,Pt=V/2;for(let S=0;S<6;S++){const C=S/6*Math.PI*2+Math.PI/6-.3,k=C+.6;A.beginPath();for(let T=0;T<=8;T++){const at=C+(k-C)*T/8;A.lineTo(dt+Math.sin(at)*Pt*.86,Ct-Math.cos(at)*Pt*.86)}for(let T=8;T>=0;T--){const at=C+.12+(k-C-.24)*T/8;A.lineTo(dt+Math.sin(at)*Pt*.42,Ct-Math.cos(at)*Pt*.42)}A.closePath(),A.fill()}}),rt.alphaMap&&(rt.alphaMap.colorSpace=Os),m.map=_s(256,256,(A,V,ct)=>{const dt=V/2,Ct=ct/2;A.fillStyle="#9a9da2",A.fillRect(0,0,V,ct),A.strokeStyle="#2a2c30",A.lineWidth=4;for(let Pt=0;Pt<36;Pt++){const S=Pt/36*Math.PI*2;A.beginPath();for(let C=0;C<=6;C++){const k=.6+.3*C/6,T=S+.25*C/6;A.lineTo(dt+Math.cos(T)*k*V/2,Ct+Math.sin(T)*k*ct/2)}A.stroke()}A.fillStyle="#1a1b1e",A.beginPath(),A.arc(dt,Ct,V*.27,0,Math.PI*2),A.fill()});function E(A){const V=A?.29:.33,ct=ps,dt=.272,Ct=new hn,Pt=new hn;Ct.add(Pt);{const ye=V/2,oe=.032,Jt=[];Jt.push([dt-.004,ye-.022],[dt+.012,ye-.002],[dt+.04,ye+.009],[ct-.06,ye+.016],[ct-oe-.006,ye+.01]);for(let we=0;we<=5;we++){const Qe=we/5*Math.PI/2;Jt.push([ct-oe+Math.sin(Qe)*oe,ye-oe+Math.cos(Qe)*oe+.002*Math.cos(Qe)])}const ge=Jt.map(([we,Qe])=>new qt(we,Qe)).reverse(),me=Jt.map(([we,Qe])=>new qt(we,-Qe)),Oe=new Ro(ge,48);Oe.rotateZ(-Math.PI/2);const Le=new Ro(me,48);Le.rotateZ(-Math.PI/2),W(Pt,So([Oe,Le]),ce);const sn=[];for(let we=0;we<=6;we++)sn.push(new qt(ct+.002*Math.sin(Math.PI*we/6),-(ye-oe)+2*(ye-oe)*(we/6)));const Fe=new Ro(sn,48);Fe.rotateZ(-Math.PI/2);{const we=Fe.attributes.uv;for(let Qe=0;Qe<we.count;Qe++)we.setY(Qe,.5)}W(Pt,Fe,ce)}const S=new xn(dt,dt,V-.04,32,1,!0);S.rotateZ(Math.PI/2),W(Pt,S,r);const C=new Ms(dt,.009,6,48);C.rotateY(Math.PI/2),W(Pt,C,ne,V/2-.022,0,0);const k=new Ms(dt-.014,.004,5,64);k.rotateY(Math.PI/2),W(Pt,k,Ht,V/2-.028,0,0);const T=new Qo(.075,dt-.004,40);T.rotateY(Math.PI/2),W(Pt,T,g,-V/2+.04,0,0);const at=new as(dt-.006,48);at.rotateY(Math.PI/2),W(Pt,at,ft,V/2-.05,0,0);{const oe=dt-.004,Jt=new Ir;Jt.moveTo(.06,-.03),Jt.lineTo((.06+oe)/2,-.021),Jt.lineTo(oe,-.014),Jt.lineTo(oe+.003,0),Jt.lineTo(oe,.014),Jt.lineTo((.06+oe)/2,.021),Jt.lineTo(.06,.03),Jt.closePath();const ge=new La(Jt,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:1,steps:1,curveSegments:4}),me=ge.attributes.position;for(let qe=0;qe<me.count;qe++){const di=me.getX(qe),xe=me.getY(qe),bn=me.getZ(qe),kn=_i.clamp((di-.06)/(oe-.06),0,1),De=0,_e=di*Math.cos(De)-xe*Math.sin(De),Ue=di*Math.sin(De)+xe*Math.cos(De),Ie=bn-.02-.012*kn+.006*Math.sin(Math.PI*kn)*(xe>0?1:-.4);me.setXYZ(qe,Ie,_e,Ue)}ge.computeVertexNormals();const Oe=(qe,di)=>{const xe=qe.groups[di],bn=new nn;for(const kn of["position","normal","uv"]){const De=qe.attributes[kn];De&&bn.setAttribute(kn,new Nn(De.array.slice(xe.start*De.itemSize,(xe.start+xe.count)*De.itemSize),De.itemSize))}return bn},Le=Oe(ge,0),sn=Oe(ge,1),Fe=[],we=[];for(let qe=0;qe<6;qe++)Fe.push(Le.clone().rotateX(qe/6*Math.PI*2)),we.push(sn.clone().rotateX(qe/6*Math.PI*2));const Qe=new hn;Pt.add(Qe),Qe.position.x=V/2-.012,Qe.add(new be(So(Fe),M)),Qe.add(new be(So(we),ne))}const Z=new xn(.06,.075,.05,6);Z.rotateZ(Math.PI/2),W(Pt,Z,M,V/2-.045,0,0);const it=new xn(.034,.034,.012,20);it.rotateZ(Math.PI/2),W(Pt,it,ne,V/2-.016,0,0);const $=new $e({map:he,transparent:!0,opacity:0,depthWrite:!1}),Gt=new as(dt,32);Gt.rotateY(Math.PI/2);const Tt=W(Ct,Gt,$,V/2-.004,0,0);Tt.visible=!1;const Wt=new xn(.24,.24,.032,48,1,!1);Wt.rotateZ(Math.PI/2),W(Pt,Wt,m,.01,0,0);const fe=new xn(.1,.1,.05,24);fe.rotateZ(Math.PI/2),W(Pt,fe,r,.04,0,0);const pe=W(Ct,new an(.075,.2,.1),p,.045,0,0);return pe.position.set(.045,Math.cos(A?.9:2.2)*.2,Math.sin(A?.9:2.2)*.2),pe.rotation.x=(A?.9:2.2)+Math.PI/2,{steer:Ct,spin:Pt,blur:Tt,bm:$,front:A}}for(const[A,V,ct]of[[gd,cr,!0],[-gd,cr,!0],[md+.01,lr,!1],[-md-.01,lr,!1]]){const dt=E(ct),Ct=new hn;Ct.position.set(A,ps,V),A<0&&(Ct.scale.x=-1),Ct.add(dt.steer),n.add(Ct),dt.mount=Ct,dt.baseY=ps,dt.side=Math.sign(A);{const Pt=r;for(const[C,k]of[[.09,.5],[-.1,.56]])for(const T of[-.13,.13]){const at=W(Ct,new xn(.014,.014,k,6),Pt,-.12-k/2*.95,C,T*.6);at.rotation.z=Math.PI/2,at.rotation.y=-T*.9}const S=W(Ct,new xn(.035,.035,.34,8),r,-.3,.12,0);S.rotation.z=.9}O.push(dt)}Bt.wheels=O.map(A=>{const V=new Mn;return V.position.set(0,-ps,0),V.name="tyre-contact",V.userData.front=A.front,V.userData.dir=new Ke(0,.3,1),A.mount.add(V),V});{const A=_s(256,512,(it,$,Gt)=>{it.fillStyle="#2a2c31",it.fillRect(0,0,$,Gt);for(let Tt=0;Tt<Gt;Tt+=4)for(let Wt=0;Wt<$;Wt+=4)it.fillStyle=(Wt+Tt)/4%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.05)",it.fillRect(Wt,Tt,4,4);it.strokeStyle="rgba(0,0,0,0.75)",it.lineWidth=3;for(const Tt of[70,190,330,440])it.beginPath(),it.moveTo(8,Tt),it.lineTo($-8,Tt),it.stroke();for(const Tt of[56,$-56])it.beginPath(),it.moveTo(Tt,8),it.lineTo(Tt,Gt-8),it.stroke();it.strokeRect(4,4,$-8,Gt-8),it.fillStyle="rgba(160,165,175,0.55)";for(const Tt of[70,190,330,440])for(const Wt of[20,56,128,$-56,$-20])it.beginPath(),it.arc(Wt,Tt-9,2.4,0,7),it.fill()}),V=new Ei({map:A,color:10133158,metalness:.25,roughness:.55,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.55});X.push(V),c(V,.12);const ct=new yn(1.5,3.6);ct.rotateX(Math.PI/2),W(s,ct,V,0,ss+.004,0).name="floor";const dt=W(s,new an(.3,.06,2.5),u,0,ss+.036,-.15);dt.name="floor-tunnel";for(const it of[1,-1])W(s,new an(.06,.03,2.2),r,.68*it,ss+.02,0);const Ct=.62,Pt=.26,S=W(s,new an(1.4,.012,Ct),V,0,ss+.006+Math.sin(Pt)*Ct/2,1.6+Ct/2*Math.cos(Pt));S.rotation.x=-Pt;for(let it=-2;it<=2;it++){const $=new Ir;$.moveTo(.05,0),$.lineTo(Ct*Math.cos(Pt),0),$.lineTo(Ct*Math.cos(Pt),Ct*Math.sin(Pt)),$.closePath();const Gt=new ll($);Gt.rotateY(-Math.PI/2),W(s,Gt,u,it*.27,ss+.004,1.6)}const C=W(s,new an(1,.02,.4),u,0,ss+.012,-1.8);C.rotation.x=.06;const k=new Ms(.06,.012,8,24);k.rotateX(Math.PI/2);const T=new as(.05,20);T.rotateX(Math.PI/2);for(const it of[cr-.05,lr+.1])for(const $ of[-.72,.72])W(s,k,d,$,ss-.002,it).name="rcs-bezel",W(s,T,ue,$,ss+.001,it);const at=new xn(mr-.004,mr-.004,.34,24,1,!0,0,Math.PI);at.rotateZ(Math.PI/2);const Z=new Tn({color:328966,metalness:.2,roughness:.85,side:je});for(const it of[cr,lr])for(const $ of[1,-1]){const Gt=W(s,at,Z,.78*$,ps,it);Gt.rotation.x=0,Gt.name="wheel-liner"}}const b=_s(128,256,(A,V,ct)=>{const dt=A.createRadialGradient(V/2,ct/2,4,V/2,ct/2,V/2);dt.addColorStop(0,"rgba(0,0,0,0.85)"),dt.addColorStop(.6,"rgba(0,0,0,0.55)"),dt.addColorStop(1,"rgba(0,0,0,0)"),A.save(),A.scale(1,ct/V),A.fillStyle=dt,A.fillRect(0,0,V,V),A.restore()}),H=new $e({map:b,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),q=W(n,new yn(2.5,5.2),H,0,.012,0);q.rotation.x=-Math.PI/2,q.renderOrder=-1;const j=Ih([[0,"rgba(255,255,255,1)"],[.4,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),G=W(n,new yn(2,4.4),new $e({map:j,color:new Xt(.05,.35,.55),transparent:!0,blending:Pn,depthWrite:!1,toneMapped:!1}),0,.02,.05);G.rotation.x=-Math.PI/2;const ut=(A,V,ct,dt)=>new Ze({vertexShader:PM,fragmentShader:LM,transparent:!0,depthWrite:!1,side:je,blending:Pn,toneMapped:!1,uniforms:{uLevel:{value:0},uTime:{value:0},uSeed:{value:A},uColor:{value:V},uCore:{value:ct},uSmoke:{value:dt}}}),ht=new Xt(.38,.72,1).multiplyScalar(.38),st=new Xt(.75,.92,1.1).multiplyScalar(.55),_t=new Xt(.62,.68,.76).multiplyScalar(.22),F=new Xt(.35,.6,.9).multiplyScalar(.07),Y=new Xt(.7,.74,.8).multiplyScalar(.1),Mt=(A,V,ct=20,dt=16)=>{const Ct=new xn(A,V,1,ct,dt,!0);return Ct.translate(0,-.5,0),Ct.rotateX(-Math.PI/2),Ct},At=Ih([[0,"rgba(255,255,255,1)"],[.3,"rgba(200,235,255,0.55)"],[1,"rgba(120,190,255,0)"]]),ot=Ih([[0,"rgba(255,255,255,0.75)"],[.4,"rgba(225,232,240,0.35)"],[1,"rgba(200,210,225,0)"]]),Ut=[];{const A=Mt(.042,.2,18,18),V=Mt(.07,.42,14,10);for(const ct of Bt.nozzles){const dt=ct.userData.main,Ct=ut(ct.position.x*3.1,ht,st,_t),Pt=new hn;ct.add(Pt),Pt.rotation.x=.06,Pt.userData.main=dt;const S=new be(A,Ct);S.frustumCulled=!1,S.renderOrder=6,Pt.add(S);const C=ut(ct.position.x*5.3+1,F,F,Y),k=new be(V,C);k.frustumCulled=!1,k.renderOrder=6,Pt.add(k);const T=new qc(new Ca({map:At,color:new Xt(.5,.8,1),blending:Pn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));T.scale.setScalar(dt?.14:.11),T.position.z=.02,ct.add(T),S.visible=k.visible=!1,Ut.push({nz:ct,mat:Ct,coreMat:C,plume:S,core:k,spr:T,main:dt,pivot:Pt})}}const zt=[];Bt.rcs={down:[],left:[],right:[],pitchUp:[],pitchDown:[]};{const A=Mt(.05,.24,18,20),V=Mt(.08,.6,14,12),ct=new Ke(0,0,1),dt=new xn(.034,.024,.05,16,1,!0);dt.rotateX(Math.PI/2);const Ct=new Ms(.034,.005,6,20),Pt=new as(.026,16),S=new Tn({color:394759,metalness:.6,roughness:.45,side:je});X.push(S);let C=0;const k=(T,at,Z,it,$)=>{const Gt=new hn;Gt.position.set(at,Z,it),s.add(Gt),Gt.quaternion.setFromUnitVectors(ct,$.clone().normalize()),Gt.userData.dir=new Ke(0,0,1),C+=.37;const Tt=ut(C,ht,st,_t),Wt=new be(A,Tt);Wt.frustumCulled=!1,Wt.renderOrder=6,Gt.add(Wt);const fe=ut(C+1.1,F,F,Y),pe=new be(V,fe);pe.renderOrder=6,pe.frustumCulled=!1,Gt.add(pe);const ye=new qc(new Ca({map:At,color:new Xt(.55,.82,1),blending:Pn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));ye.scale.setScalar(.12),ye.position.z=.03,ye.renderOrder=6,Gt.add(ye);const oe=ye.material,Jt=new qc(new Ca({map:ot,color:new Xt(.32,.34,.37),blending:Pn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));if(Jt.renderOrder=6,Gt.add(Jt),Wt.visible=ye.visible=pe.visible=Jt.visible=!1,T==="left"||T==="right"){const ge=new be(dt,S);ge.position.z=-.02,Gt.add(ge);const me=new be(Ct,d);Gt.add(me);const Oe=new be(Pt,ue);Oe.position.z=-.03,Gt.add(Oe)}Bt.rcs[T].push(Gt),zt.push({key:T,nz:Gt,mat:Tt,coreMat:oe,plume:Wt,core:ye,haze:pe,hazeMat:fe,puff:Jt,lvl:0})};for(const T of[cr-.05,lr+.1])for(const at of[-.72,.72])k("down",at,ss+.005,T,new Ke(0,-1,0));for(const[T,at]of[[-1.78,Rn(Gn.beltY,-1.78)-.07],[1.86,.56]]){const Z=Rn(Gn.beltX,T)-.03;k("left",-Z,at,T,new Ke(-1,.05,0)),k("right",Z,at,T,new Ke(1,.05,0))}k("pitchUp",0,.22,ei+.35,new Ke(0,-1,0)),k("pitchUp",0,Vr(Hi-.1,0)+.004,Hi-.1,new Ke(0,1,0)),k("pitchDown",0,Vr(ei+.5,0)+.004,ei+.5,new Ke(0,1,0)),k("pitchDown",0,.25,Hi-.2,new Ke(0,-1,0))}let kt=null;i.headlight!==!1&&(kt=new Sp(15134463,40,45,.48,.65,1.4),kt.position.set(0,.5,-2.1),kt.target.position.set(0,0,-16),s.add(kt,kt.target)),Bt.camTarget=new Mn,Bt.camTarget.position.set(0,.7,0),s.add(Bt.camTarget);const I=new hn;I.name="roadster-trails";const J=new xd(new Xt(1.5,0,.06),.022),Q=new xd(new Xt(1.5,0,.06),.022);i.trails!==!1&&I.add(J.mesh,Q.mesh);function gt(A,V,ct=new Set){A.updateMatrixWorld(!0);const dt=A.matrixWorld.clone().invert(),Ct=new Map;for(const Pt of V)for(const S of[...Pt.children]){if(!S.isMesh||!S.visible||S.material.isShaderMaterial||ct.has(S)||Array.isArray(S.material)||S.onBeforeRender!==Mn.prototype.onBeforeRender)continue;const C=S.material.uuid+"_"+S.renderOrder+"_"+S.visible;let k=Ct.get(C);k||(k={mat:S.material,ro:S.renderOrder,vis:S.visible,list:[]},Ct.set(C,k)),k.list.push(S)}for(const Pt of Ct.values()){if(Pt.list.length<2)continue;const S=Pt.list.map(T=>{T.updateMatrixWorld(!0);let at=T.geometry.index?T.geometry.toNonIndexed():T.geometry.clone();at.attributes.normal||at.computeVertexNormals(),at.attributes.uv||at.setAttribute("uv",new Ee(new Float32Array(at.attributes.position.count*2),2));for(const Z of Object.keys(at.attributes))Z!=="position"&&Z!=="normal"&&Z!=="uv"&&at.deleteAttribute(Z);return at.clearGroups(),at.applyMatrix4(new Ge().multiplyMatrices(dt,T.matrixWorld)),at}),C=So(S);if(!C)continue;for(const T of Pt.list)T.parent.remove(T),T.geometry.dispose();const k=new be(C,Pt.mat);k.renderOrder=Pt.ro,k.visible=Pt.vis,k.name="merged-"+(Pt.list[0].name||"part"),A.add(k)}}gt(s,[s,Rt,re,...Bt.nozzles,...Bt.rcs.left,...Bt.rcs.right],new Set([Nt]));for(const A of O)gt(A.spin,[A.spin,...A.spin.children.filter(V=>V.isGroup)]),gt(A.mount,[A.mount]);let Et=i.renderer||null,It=null,$t=i.envMap||null,ve=null;Nt.onBeforeRender=(A,V)=>{Et=A,It=V};let Pe=null;function Re(){const A=It&&It.environment;let V=null;if(Pe)V=Pe;else if(!A){if(!$t&&Et)try{$t=RM(Et)}catch{$t=null}V=$t}if(V!==ve){for(const ct of X)ct.envMap=V,ct.needsUpdate=!0;ve=V}}const St={time:0,spinAngle:0,steer:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,lastPos:null,lastVel:new Ke,vel:new Ke,speed:0,flyBlend:0,armed:0,jet:0,pulse:0,lights:1,plate:0,brake:0,trailFade:0,wasFlying:!1,boost:0},fn=new Ke,ie=new ni,ze=new Ke,wn=new Ke,fi=new Ke,Ni=new Ke;function nt(A){let V=A;for(;V.parent;)V=V.parent;return V!==A?V:null}function Zt(){J.reset(),Q.reset(),J.write(),Q.write(),St.lastPos=null,St.pitch=St.pitchV=St.roll=St.rollV=St.heave=St.heaveV=0,St.pulse=0,St.rollRate=0,St.prevQ=null,St.visAngle=St.visAngle||0,St.time=0,St.spinAngle=0,St.jet=0,St.trailFade=0,St.flyBlend=0,St.wasFlying=!1,St.speed=0,St.vel.set(0,0,0),St.lastVel.set(0,0,0),te=null}const Yt={};let Kt=!0,Qt=!1,te=null;function Te(A=1/60,V){Kt=!0,Qt=!1,le(A,V?Object.assign({},Yt,V):Yt)}function Ae(A){if(A){if(Number.isFinite(A.v)&&(Yt.speed=A.v),typeof A.rev=="number"&&(Yt.rev=A.rev),typeof A.boostV=="number"&&(Yt.boost=_i.clamp(A.boostV/9,0,1)),typeof A.thrustArm=="number"&&(Yt.armed=A.thrustArm),typeof A.thrust=="number"&&(Yt.thrust=A.thrust),typeof A.airborne=="boolean"&&(Yt.airborne=A.airborne),typeof A.section=="string"&&(Yt.flying=A.mode?A.mode==="flipAir"||A.mode==="fly":A.section==="flight"||A.section==="outro"&&!!A.airborne),A.rcs&&(Yt.rcs=A.rcs),typeof A.finished=="boolean"&&(Yt.brake=A.finished?1:0),Kt||(Qt=!0),Kt=!1,Qt){const V=Number.isFinite(A.t)?A.t:null,ct=V!==null&&te!==null&&V>te?V-te:1/60;le(ct,Yt)}te=Number.isFinite(A.t)?A.t:null}}function le(A,V){if(A=Math.min(Math.max(A||0,0),.1),A===0)return;St.time+=A,Re(),t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(fn,ie,fi),ze.set(0,0,i.forward==="+z"?1:-1).applyQuaternion(ie),wn.set(0,1,0).applyQuaternion(ie);let ct=!1;St.lastPos&&(Ni.subVectors(fn,St.lastPos),Ni.length()>Math.max(8,200*A)?ct=!0:St.vel.copy(Ni).divideScalar(A)),St.lastPos||(St.lastPos=new Ke),St.lastPos.copy(fn),ct&&(Zt(),St.lastPos=fn.clone(),St.vel.set(0,0,0)),St.prevQ||(St.prevQ=ie.clone());{const xe=ie.clone().multiply(St.prevQ.clone().invert());xe.w<0&&(xe.x=-xe.x,xe.y=-xe.y,xe.z=-xe.z,xe.w=-xe.w);const bn=2*Math.acos(Math.min(1,xe.w)),kn=Math.sqrt(Math.max(1e-9,1-xe.w*xe.w)),De=ct?0:bn/A*((xe.x*ze.x+xe.y*ze.y+xe.z*ze.z)/kn);St.rollRate=(St.rollRate||0)+((Number.isFinite(De)?De:0)-(St.rollRate||0))*Math.min(1,A*12),St.prevQ.copy(ie)}const dt=St.vel.dot(ze),Ct=Number.isFinite(V.speed)?V.speed:dt;let Pt=Number.isFinite(V.accel)?V.accel:(Ct-St.speed)/A;Pt=_i.clamp(Pt,-40,40),St.speed=Ct;const S=!!(V.airborne??V.flying??V.grounded===!1),C=!!(V.flying??!1),k=_i.clamp(typeof V.rev=="number"?V.rev:0,0,1),T=typeof V.armed=="number"?V.armed:V.armed?1:0,at=_i.clamp(V.steer||0,-1,1),Z=typeof V.lights=="number"?V.lights:St.lights;St.lights+=(Z-St.lights)*Math.min(1,A*12);const it=typeof V.boost=="number"?V.boost:V.boost?1:0;St.boost+=(it-St.boost)*Math.min(1,A*6);const $=typeof V.brake=="number"?V.brake:V.brake?1:0;St.brake+=($-St.brake)*Math.min(1,A*15);const Gt=S?Ct*Math.max(0,1-St.flyBlend):Ct;St.spinAngle-=Gt/ps*A,St.steer+=(at*.32-St.steer)*Math.min(1,A*10);const Tt=Math.abs(Gt/ps),Wt=_i.clamp((Tt-25)/60,0,.32),fe=Gt/ps,pe=13;St.visAngle=(St.visAngle||0)-Math.sign(fe)*Math.min(Math.abs(fe),pe+Math.max(0,Math.abs(fe)-pe)*.04)*A;for(const xe of O)xe.spin.rotation.x=St.visAngle,xe.steer.rotation.y=xe.front?St.steer*xe.side:0,xe.bm.opacity=Wt,xe.blur.visible=Wt>.01;St.flyBlend+=((S?1:0)-St.flyBlend)*Math.min(1,A*5),St.wasFlying&&!S&&K(.8),St.wasFlying=S;const ye=St.vel.dot(wn),oe=St.lastVel.dot(wn);!S&&oe<-4&&ye-oe>3&&K(Math.min(2,(ye-oe)/6)),St.lastVel.copy(St.vel);const Jt=S?.02:_i.clamp(Pt*.0028+k*.018,-.05,.06),ge=S?0:_i.clamp(-at*Math.min(1,Math.abs(Ct)/30)*.045,-.06,.06),me=S?0:(Math.sin(St.time*23)*.6+Math.sin(St.time*37+1.3)*.4)*(Math.min(1,Math.abs(Ct)/40)*.003+k*.0035),Oe=140,Le=16;St.pitchV+=((Jt-St.pitch)*Oe-St.pitchV*Le)*A,St.pitch+=St.pitchV*A,St.rollV+=((ge-St.roll)*Oe-St.rollV*Le)*A,St.roll+=St.rollV*A,St.heaveV+=((me-St.heave)*220-St.heaveV*18)*A,St.heave+=St.heaveV*A,St.heave<-.1&&(St.heave=-.1,St.heaveV=Math.max(0,St.heaveV)),s.rotation.x=St.pitch,s.rotation.z=St.roll,s.position.y=St.heave;const sn=St.flyBlend*.06;for(const xe of O)xe.mount.position.y=xe.baseY-sn;St.armed+=(T-St.armed)*Math.min(1,A*4);const Fe=typeof V.thrust=="number"?V.thrust:V.thrust?1:0;St.pulse=Math.max(0,St.pulse-A*2.6);const we=Math.min(1.6,Math.max(Fe,St.pulse*1.3)+St.armed*.12+(C?.18:0));St.jet+=(we-St.jet)*Math.min(1,A*20),St.plate+=((St.armed>.3||C?1:0)-St.plate)*Math.min(1,A*6),Rt.userData.plateHinge.rotation.x=St.plate*1.45;const Qe=Math.min(1,St.armed*.5+St.jet);ue.color.setRGB(.02+Qe*.5,.03+Qe*1.2,.05+Qe*2.6);for(const xe of Ut){const bn=St.jet*(xe.main?St.plate:1);xe.pivot.rotation.x=.06+(C?St.flyBlend:0)*(xe.main?.75:.45),xe.nz.userData.dir.set(0,-Math.sin(xe.pivot.rotation.x),Math.cos(xe.pivot.rotation.x));const kn=bn>.02;xe.plume.visible=xe.core.visible=kn,xe.mat.uniforms.uLevel.value=Math.min(1.3,bn),xe.coreMat.uniforms.uLevel.value=Math.min(1.3,bn),xe.mat.uniforms.uTime.value=xe.coreMat.uniforms.uTime.value=St.time;const De=.5+1.9*Math.min(1.3,bn)+(xe.main?.3:0);xe.plume.scale.set(1,1,De),xe.core.scale.set(1,1,De*1.1),xe.spr.material.opacity=Math.min(.8,Qe*.6)*(xe.main?St.plate:1),xe.spr.visible=xe.spr.material.opacity>.01}{const xe=V.rcs||{},bn=typeof xe.pitch=="number"?xe.pitch:V.jetsPitch||0,kn={down:xe.down??V.jetsDown??0,left:xe.left??V.jetsLeft??0,right:xe.right??V.jetsRight??0,pitchUp:Math.max(0,bn),pitchDown:Math.max(0,-bn)};if(S&&Math.abs(St.rollRate)>1.2){const De=_i.clamp((Math.abs(St.rollRate)-1.2)/2.5,0,1)*.95,_e=St.rollRate>0?"right":"left";kn[_e]=Math.max(+kn[_e]||0,De)}for(const De of zt){const _e=_i.clamp(+kn[De.key]||0,0,1.3);De.lvl+=(_e-De.lvl)*Math.min(1,A*22);const Ue=De.lvl>.03;if(De.plume.visible=De.core.visible=De.haze.visible=De.puff.visible=Ue,!Ue)continue;const Ie=De.key==="down",mn=De.key==="left"||De.key==="right",_n=Math.min(1.2,De.lvl),pi=Ie?1.2+2.8*_n:mn?.8+1.7*_n:.5+1*_n,ii=.85+.25*_n;De.plume.scale.set(ii,ii,pi),De.haze.scale.set(ii,ii,pi*1.08),De.mat.uniforms.uLevel.value=Math.min(1.25,_n*1.1),De.hazeMat.uniforms.uLevel.value=Math.min(1,_n),De.coreMat.opacity=Math.min(.9,.35+_n*.5),De.core.scale.setScalar(.1+.05*_n),De.mat.uniforms.uTime.value=De.hazeMat.uniforms.uTime.value=St.time,De.puff.position.z=pi*1.02,De.puff.scale.setScalar((.55+.35*_n)*(.92+.08*Math.sin(St.time*37+De.nz.position.x*9))),De.puff.material.opacity=Math.min(.5,_n*(Ie?.4:.25))}}const qe=St.lights,di=1+St.brake*.8+St.boost*.3;if(U.color.copy(y).multiplyScalar(qe*di),D.color.copy(R).multiplyScalar(qe*(1+St.brake)),x.color.copy(N).multiplyScalar(qe*di),z.color.copy(P).multiplyScalar(qe*di),B.opacity=qe,a.value=.25+.75*qe,Lt.color.copy(pt).multiplyScalar(qe),re.userData.slashM&&re.userData.slashM.color.copy(pt).multiplyScalar(1.5*qe),re.userData.glowM&&re.userData.glowM.color.copy(re.userData.glowBase).multiplyScalar(qe),Ht.color.copy(tt).multiplyScalar(qe*(.7+.6*St.boost+.6*St.armed)),kt&&(kt.intensity=40*qe),H.opacity=.9*(1-St.flyBlend),G.material.opacity=qe*(1-St.flyBlend*.7),i.trails!==!1){if(!I.parent){const xe=nt(t);xe&&xe.add(I)}if(I.parent){const xe=_i.clamp((Math.abs(Ct)-6)/20,0,1)*qe;St.trailFade+=(xe-St.trailFade)*Math.min(1,A*4),J.mat.uniforms.uOpacity.value=Q.mat.uniforms.uOpacity.value=St.trailFade*(1+St.boost*.6),fi.set(1,0,0).applyQuaternion(ie);const bn=I.parent.matrixWorld.clone().invert();for(const[kn,De]of[[J,Bt.tailLeft],[Q,Bt.tailRight]]){De.updateWorldMatrix(!0,!1);const _e=new Ke().setFromMatrixPosition(De.matrixWorld).applyMatrix4(bn);kn.push(_e,wn,fi)}}}}function w(A=1){St.pulse=Math.min(1.5,St.pulse+A)}function K(A=1){St.heaveV-=1.35*Math.min(1.6,A),St.pitchV-=.45*A}function xt(A){St.lights=_i.clamp(A,0,1)}const lt={object:t,group:t,root:t,mesh:t,body:s,chassis:n,wheels:O,anchors:Bt,trails:I,dims:{length:4.5,width:2.04,height:1.14,wheelRadius:ps,wheelBase:lr-cr},materials:{paint:o,trim:l,glass:f,carbon:u,tailM:U,headM:Lt,ringM:Ht},update:Te,thrustPulse:w,land:K,reset:Zt,setLights:xt,setState:Ae,setSpeed(A){Number.isFinite(A)&&(Yt.speed=A)},setThrusters(A){Yt.thrust=+A||0},setBoost(A){Yt.boost=+A||0},setRev(A){Yt.rev=+A||0},setBrake(A){Yt.brake=+A||0},setEnvMap(A){A!==Pe&&(Pe=A||null,Re())},get speed(){return St.speed},dispose(){t.traverse(A=>{A.geometry&&A.geometry.dispose()}),I.traverse(A=>{A.geometry&&A.geometry.dispose()}),I.parent&&I.parent.remove(I)}};return t.userData.car=lt,t.userData.thrusters=Bt.nozzles,lt}const Jp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FM=new Ku(-1,1,1,-1,0,1);class NM extends nn{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}}const zM=new NM;class Ul{constructor(t){this._mesh=new be(zM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class OM extends jr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=us.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ul(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _d extends jr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,c;this.inverse?(a=0,c=1):(a=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class BM extends jr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class kM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new qt);this._width=n.width,this._height=n.height,e=new Fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ki}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new OM(Jp),this.copyPass.material.blending=Vs,this.clock=new ay}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const c=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}_d!==void 0&&(a instanceof _d?n=!0:a instanceof BM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HM extends jr{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const GM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ko extends jr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fi(o,a,{type:Ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Fi(o,a,{type:Ki});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Fi(o,a,{type:Ki});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const c=GM;this.highPassUniforms=us.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new qt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const r=Jp;this.copyUniforms=us.clone(r.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,blending:Pn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new $e,this.fsQuad=new Ul(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new qt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let c=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ko.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ko.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),c=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ko.BlurDirectionX=new qt(1,0);Ko.BlurDirectionY=new qt(0,1);const hr=59/136,VM=58.13,WM=[["intro",0,16],["drop1",16,48],["break",48,56],["loop",56,88],["build",88,96],["flight",96,128],["outro",128,136]];function XM(i){const t=i/hr;for(const e of WM)if(t<e[2])return e[0];return"outro"}const or=i=>Math.min(1,Math.max(0,i)),Na=(i,t,e)=>{const n=or((e-i)/(t-i));return n*n*(3-2*n)};function qM(i){const t=i/hr;return t<16?0:t<48?.35+.6*Na(16,40,t):t<56?.55:t<88?.85:t<96?.7:t<128?.9:.9*(1-Na(128,134.5,t))}function yd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Uh={uniforms:{tDiffuse:{value:null},uRes:{value:new qt(1,1)},uTime:{value:0},uSpeed:{value:0},uCA:{value:0},uExposure:{value:1},uVignette:{value:.55},uGrain:{value:.045},uFlash:{value:0},uFlashColor:{value:new Xt(1,1,1)},uSat:{value:1.12},uContrast:{value:1.08},uShadowTint:{value:new Xt(.012,.006,.03)},uCenter:{value:new qt(.5,.56)},uCar:{value:new qt(.5,.4)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime, uSpeed, uCA, uExposure, uVignette, uGrain, uFlash, uSat, uContrast;
    uniform vec3 uFlashColor, uShadowTint;
    uniform vec2 uCenter, uCar;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    // ACES fitted (Stephen Hill)
    vec3 fxRRTODT(vec3 v) {
      vec3 a = v * (v + 0.0245786) - 0.000090537;
      vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
      return a / b;
    }
    vec3 fxAces(vec3 c) {
      const mat3 ACESIn = mat3(0.59719, 0.07600, 0.02840, 0.35458, 0.90834, 0.13383, 0.04823, 0.01566, 0.83777);
      const mat3 ACESOut = mat3(1.60475, -0.10208, -0.00327, -0.53108, 1.10813, -0.07276, -0.07367, -0.00605, 1.07602);
      c = ACESIn * c;
      c = fxRRTODT(c);
      c = ACESOut * c;
      return clamp(c, 0.0, 1.0);
    }
    vec3 fxToSRGB(vec3 c) {
      return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uRes.x / uRes.y;
      vec2 d = uv - uCenter;
      float r = length(d * vec2(aspect, 1.0));

      // Chromatic aberration: tiny lens baseline at the edges + impact kicks.
      float ca = (0.0012 + uCA * 0.010) * smoothstep(0.08, 0.75, r);
      // Radial speed blur: masked out of the centre (car stays crisp).
      // r3: Distance-strength smear; the car itself stays sharp (mask around its screen position)
      float carD = length((uv - uCar) * vec2(aspect, 1.0));
      float blur = uSpeed * 0.12 * smoothstep(0.1, 0.8, r) * smoothstep(0.07, 0.3, carD);

      vec3 col = vec3(0.0);
      float wsum = 0.0;
      const int N = 10;
      // interleaved-gradient jitter turns blur banding into fine noise
      float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      int n = blur > 0.0004 ? N : 1;   // single tap when there is no speed blur
      for (int i = 0; i < N; i++) {
        if (i >= n) break;
        float f = n > 1 ? (float(i) + jit) / float(N) : 0.0;
        float w = 1.0 - 0.6 * f;
        vec2 base = uv - d * blur * f;
        vec2 off = d * ca;
        col.r += texture2D(tDiffuse, base + off).r * w;
        col.g += texture2D(tDiffuse, base).g * w;
        col.b += texture2D(tDiffuse, base - off).b * w;
        wsum += w;
      }
      col /= wsum;

      // Exposure + filmic tone map. Flash is added in HDR so it over-exposes like a camera.
      col *= uExposure;
      float fl = uFlash * uFlash;                         // small flashes stay subtle, big ones over-expose
      col *= 1.0 + fl * 2.2;
      col += uFlashColor * fl * (0.05 + 1.2 * dot(col, vec3(0.333)));
      col += uShadowTint * (1.0 - smoothstep(0.0, 0.25, dot(col, vec3(0.333))));
      col = fxAces(col);

      // Grade in display-ish space: contrast around mid grey + saturation.
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      col = clamp((col - 0.18) * uContrast + 0.18, 0.0, 1.0);

      col = fxToSRGB(col);

      // Vignette (elliptical, slightly stronger at the top/bottom in portrait).
      vec2 vd = d * vec2(aspect > 1.0 ? 1.0 : 1.25, 1.0);
      float vig = smoothstep(0.95, 0.25, length(vd * vec2(aspect, 1.0) * 1.05));
      col *= mix(1.0 - uVignette, 1.0, vig);

      // Film grain, luma-weighted (less in highlights so neon stays clean).
      float g = hash12(gl_FragCoord.xy + fract(uTime * 7.31) * 517.0) - 0.5;
      float gl = dot(col, vec3(0.333));
      col += g * uGrain * (1.0 - gl * 0.7);

      // Flash (display-space lift on top of the HDR over-exposure above).
      // radial burst from the frame centre instead of a flat grey veil; only a full hit whites out
      float burst = 1.0 - smoothstep(0.0, 0.95, r);
      col += uFlashColor * fl * (0.1 + 0.45 * burst * burst);
      col = mix(col, uFlashColor, smoothstep(0.82, 1.0, uFlash) * 0.85);

      // Dither to kill banding in the dark gradients.
      col += (hash12(gl_FragCoord.xy * 1.37) - 0.5) / 255.0;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `};class YM extends jr{constructor(){super(),this.uniforms=us.clone(Uh.uniforms),this.material=new Ze({uniforms:this.uniforms,vertexShader:Uh.vertexShader,fragmentShader:Uh.fragmentShader,depthTest:!1,depthWrite:!1}),this.fsQuad=new Ul(this.material)}setSize(t,e){this.uniforms.uRes.value.set(t,e)}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class KM extends jr{constructor(){super(),this.uniforms={tDiffuse:{value:null},uMax:{value:24}},this.material=new Ze({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
          c.rgb = max(c.rgb, vec3(0.0));
          float m = max(c.r, max(c.g, c.b));
          if (m > uMax) c.rgb *= uMax / m;
          gl_FragColor = c;
        }
      `,depthTest:!1,depthWrite:!1}),this.fsQuad=new Ul(this.material)}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const $n=2400;function $M(){const i=new ef;i.setAttribute("position",new Ee([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const t=new Ii(new Float32Array($n*3),3),e=new Ii(new Float32Array($n*3),3),n=new Ii(new Float32Array($n*4),4),s=new Ii(new Float32Array($n*2),2);for(const l of[t,e,n,s])l.setUsage(Xs);i.setAttribute("iPos",t),i.setAttribute("iVel",e),i.setAttribute("iCol",n),i.setAttribute("iSz",s),i.instanceCount=0;const o=new Ze({uniforms:{uResY:{value:1920},uAspect:{value:.5625},uMinPx:{value:1.6}},vertexShader:`
      attribute vec3 iPos; attribute vec3 iVel; attribute vec4 iCol; attribute vec2 iSz;
      uniform float uResY, uAspect, uMinPx;
      varying vec4 vCol; varying vec2 vLocal; varying float vLen; varying float vSize;
      void main() {
        mat4 vp = projectionMatrix * viewMatrix;
        vec4 head = vp * vec4(iPos, 1.0);
        vec4 tail = vp * vec4(iPos - iVel * iSz.y, 1.0);
        if (head.w < 0.05 || iCol.a <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
        if (tail.w < 0.05) tail = head;
        vec2 hs = head.xy / head.w; vec2 ts = tail.xy / tail.w;
        hs.x *= uAspect; ts.x *= uAspect;
        vec2 dv = hs - ts; float len = length(dv);
        vec2 dir = len > 1e-5 ? dv / len : vec2(0.0, 1.0);
        len = min(len, 0.6);
        vec2 nrm = vec2(-dir.y, dir.x);
        float size = max(iSz.x * projectionMatrix[1][1] / head.w, uMinPx / uResY);
        float along = mix(size, -(len + size), position.y);
        vec2 p = hs + dir * along + nrm * size * position.x;
        p.x /= uAspect;
        gl_Position = vec4(p, head.z / head.w, 1.0);
        vCol = iCol; vLocal = vec2(position.x * size, along); vLen = len; vSize = size;
      }
    `,fragmentShader:`
      varying vec4 vCol; varying vec2 vLocal; varying float vLen; varying float vSize;
      void main() {
        float a = clamp(vLocal.y, -vLen, 0.0);
        float dist = length(vec2(vLocal.x, vLocal.y - a)) / vSize;
        float m = 1.0 - smoothstep(0.0, 1.0, dist);
        m = m * m;
        float tailFade = vLen > 1e-4 ? mix(1.0, 0.15, clamp(-vLocal.y / vLen, 0.0, 1.0)) : 1.0;
        float core = 1.0 + 1.3 * (1.0 - smoothstep(0.0, 0.3, dist));
        float alpha = m * tailFade * vCol.a;
        gl_FragColor = vec4(vCol.rgb * core * alpha, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:Pn}),a=new be(i,o);a.frustumCulled=!1,a.renderOrder=10,a.name="fx.particles";const c={n:0,pos:new Float32Array($n*3),vel:new Float32Array($n*3),col0:new Float32Array($n*3),col1:new Float32Array($n*3),life:new Float32Array($n),age:new Float32Array($n),size0:new Float32Array($n),size1:new Float32Array($n),stretch:new Float32Array($n),grav:new Float32Array($n),drag:new Float32Array($n),floor:new Float32Array($n)};return{mesh:a,mat:o,quad:i,iPos:t,iVel:e,iCol:n,iSz:s,P:c}}const za=90;function jM(i){const t=new yn(1,1,1,1);t.translate(0,.5,0),t.rotateX(-Math.PI/2);const e=new Ze({uniforms:{uAlpha:{value:0}},vertexShader:`
      attribute vec3 aCol; varying vec3 vCol; varying vec2 vUv; varying float vFade;
      void main() {
        vCol = aCol; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        vFade = smoothstep(-58.0, -24.0, mv.z) * (1.0 - smoothstep(-9.0, -3.5, mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uAlpha; varying vec3 vCol; varying vec2 vUv; varying float vFade;
      void main() {
        float across = 1.0 - abs(vUv.x * 2.0 - 1.0);
        float along = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
        float a = across * across * along * uAlpha * vFade;
        gl_FragColor = vec4(vCol * a, a);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:je,blending:Pn}),n=new Su(t,e,za);n.instanceMatrix.setUsage(Xs),n.frustumCulled=!1,n.renderOrder=9,n.name="fx.streaks";const s=new Float32Array(za*3),o=[[.5,1.7,2.6],[2.2,.5,1.9],[2.2,2.3,2.6],[2.4,1.1,.35]],a=[];for(let l=0;l<za;l++){const h=o[l%7===0?3:l%3];s.set(h,l*3),a.push({th:i()*Math.PI*2,r:3.4+i()*6,z:-i()*60,v:.7+i()*.6,w:.006+i()*.009})}t.setAttribute("aCol",new Ii(s,3));const c=new hn;return c.name="fx.streakRig",c.add(n),{group:c,mesh:n,mat:e,S:a}}const Qp=10;function ZM(){const i=new Qo(.9,1,128,1),t=[],e=new hn;e.name="fx.rings";for(let n=0;n<Qp;n++){const s=new Ze({uniforms:{uCol:{value:new Xt},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uCol; uniform float uA; varying vec2 vUv;
        void main(){ float r = length(vUv - 0.5) * 2.0; float e = 1.0 - abs((r - 0.95) / 0.05);
          e = clamp(e, 0.0, 1.0); gl_FragColor = vec4(uCol * e * uA, e * uA); }
      `,transparent:!0,depthWrite:!1,side:je,blending:Pn}),o=new be(i,s);o.visible=!1,o.frustumCulled=!1,o.renderOrder=8,e.add(o),t.push({m:o,age:0,life:0,r0:1})}return{group:e,list:t,next:0}}const Pr=3600;function JM(){const i=new yn(1,1),t=new ef;t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const e=new Ii(new Float32Array(Pr*3),3);e.setUsage(Xs);const n=new Ii(new Float32Array(Pr*4),4);n.setUsage(Xs);const s=new Ii(new Float32Array(Pr*2),2);s.setUsage(Xs),t.setAttribute("iPos",e),t.setAttribute("iPar",n),t.setAttribute("iExt",s),t.instanceCount=0;const o=us.merge([de.fog,{uKey:{value:new Xt(1.9,1.96,2.06)},uFill:{value:new Xt(.2,.32,.62)},uRed:{value:new Xt(1.6,.16,.24)},uAmb:{value:new Xt(.2,.21,.24)},uKeyDir:{value:new L(-.35,1,.3).normalize()},uFillDir:{value:new L(.6,-.35,-.4).normalize()},uRedDir:{value:new L(-1,-.15,.1).normalize()}}]),a=new Ze({uniforms:o,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      attribute vec3 iPos; attribute vec4 iPar; attribute vec2 iExt;
      uniform vec3 uKeyDir, uFillDir, uRedDir;
      varying vec2 vUv; varying float vA; varying float vSeed; varying float vH; varying float vAge; varying float vKind;
      varying vec3 vLk; varying vec3 vLf; varying vec3 vLr; varying float vCy; varying float vSz;
      #include <fog_pars_vertex>
      void main(){
        vUv = uv; vA = iPar.y; vSeed = iPar.w; vAge = iExt.x; vKind = iExt.y; vSz = iPar.x;
        vec3 R = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 U = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 B = vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
        float c = cos(iPar.z), s = sin(iPar.z);
        // light directions in the (rotated) billboard basis: the fake normal lives in uv space
        vec3 Rr = R * c + U * s, Ur = -R * s + U * c;
        vLk = vec3(dot(uKeyDir, Rr), dot(uKeyDir, Ur), dot(uKeyDir, B));
        vLf = vec3(dot(uFillDir, Rr), dot(uFillDir, Ur), dot(uFillDir, B));
        vLr = vec3(dot(uRedDir, Rr), dot(uRedDir, Ur), dot(uRedDir, B));
        vec2 q = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * iPar.x;
        vec3 wp = iPos + R * q.x + U * q.y;
        vH = wp.y; vCy = iPos.y;
        vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uKey, uFill, uRed, uAmb;
      varying vec2 vUv; varying float vA; varying float vSeed; varying float vH; varying float vAge; varying float vKind;
      varying vec3 vLk; varying vec3 vLf; varying vec3 vLr; varying float vCy; varying float vSz;
      #include <fog_pars_fragment>
      float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = 0.55, s = 0.0; for (int i = 0; i < 3; i++) { s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
      void main(){
        vec2 p = (vUv - 0.5) * 2.0; float r2 = dot(p, p);
        if (r2 > 1.0) discard;
        vec2 o = vec2(vSeed * 37.0, vSeed * 11.0 - vAge * 0.6);
        float n = fbm(p * 1.7 + o);
        float nd = fbm(p * 3.6 - o * 1.3);
        // dense core, cauliflower edge eroded by the noise; the edge gets wispier as the puff ages
        float shape = (1.0 - r2) * (0.75 + 0.5 * n) - (0.18 + 0.3 * vAge) * (1.0 - nd);
        float dens = smoothstep(0.0, 0.42, shape);
        float a = dens * vA;
        if (a < 0.012) discard;
        // fake normal: the puff as a lumpy sphere, the noise bending it (noise-lit)
        vec3 N = normalize(vec3(p * 0.95 + (vec2(n, nd) - 0.5) * 0.9, sqrt(max(0.04, 1.0 - r2))));
        float kd = clamp(dot(N, vLk) * 0.62 + 0.38, 0.0, 1.0);
        float fd = clamp(dot(N, vLf) * 0.5 + 0.5, 0.0, 1.0);
        float rim = pow(1.0 - N.z, 1.6) * clamp(dot(N, vLr) * 0.8 + 0.35, 0.0, 1.0);
        // r2 (critic P1, ref f_026/f_029): near-white cauliflower (#EEF3F8) with blue-grey shadowed folds; the red
        // floor-LED rim only on the lowest ~30 % of the cloud
        float low = mix(exp(-max(0.0, vH - 0.15) / 0.9), 1.0 - smoothstep(0.1, 0.85, vH), vKind);
        float shadow = mix(mix(0.62, 0.78, vKind), 1.0, smoothstep(-0.2, mix(2.6, 1.8, vKind), vH)) * mix(0.82, 1.0, kd);
        vec3 amb = mix(uAmb, vec3(0.30, 0.33, 0.38), vKind);
        vec3 col = amb * (0.6 + 0.4 * n) + uKey * kd * kd * (0.62 + 0.6 * n) * shadow + uFill * fd * (0.32 + 0.3 * (1.0 - kd));
        col *= mix(1.0, 0.92 + 0.38 * dens, vKind);                                     // dense cores glow brighter
        col += uRed * (rim * 0.9 + 0.22) * low * mix(0.3, 0.85, vKind) * (1.0 - 0.45 * dens);
        col *= mix(0.86, 1.0, vKind);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          #else
            float fogF = smoothstep(fogNear, fogFar, vFogDepth);
          #endif
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogF * mix(0.4, 0.15, vKind));   // lit gas: only part of the haze (plume: less purple pickup)
        #endif
      }`}),c=new be(t,a);return c.frustumCulled=!1,c.renderOrder=5,c.name="fx.smoke",{mesh:c,geo:t,mat:a,iPos:e,iPar:n,iExt:s,ord:new Uint16Array(Pr),key:new Float32Array(Pr),tmp:new Float32Array(Pr*9)}}const ts=new L,da=new L,pa=new L;function QM(i,t,e,n,s){let o=0;const a=i.tmp;if(t&&t.length&&e!=null)for(let r=0;r<t.length&&o<Pr;r++){const u=t[r],f=e-u.t0;if(f<0||f>=u.life)continue;const d=u.k??1.7,v=1-Math.exp(-d*f),g=v/d,m=u.r0+(u.r1-u.r0)*(1-Math.exp(-1.25*f));let p=u.y+u.vy*g+(u.rise??.28)*f;p=Math.max(p,m*.32);const _=Math.min(1,f/.12)*Math.pow(1-f/u.life,1.4),M=o*9;a[M]=u.x+u.vx*g,a[M+1]=p,a[M+2]=u.z+u.vz*g,a[M+3]=m,a[M+4]=(u.a??.55)*_,a[M+5]=u.seed*6.283+f*(u.seed-.5)*.6,a[M+6]=u.seed,a[M+7]=f/u.life,a[M+8]=u.kind||0,o++}if(o>0&&n&&s){n.getWorldPosition(ts),n.getWorldDirection(da),pa.copy(s),pa.y+=.55;const r=pa.x-ts.x,u=pa.y-ts.y,f=pa.z-ts.z,d=Math.hypot(r,u,f);if(d>.5){const v=r/d,g=u/d,m=f/d;for(let p=0;p<o;p++){const _=p*9,M=a[_]-ts.x,y=a[_+1]-ts.y,R=a[_+2]-ts.z,U=M*v+y*g+R*m;if(U>d+1.7||U<0)continue;const D=M-v*U,N=y-g*U,P=R-m*U,x=Math.hypot(D,N,P)*(d/Math.max(.5,U)),B=U>d?a[_+3]*.3+1.9:a[_+3]*.5*(d/Math.max(.5,U))+2.4;if(x>=B)continue;const et=Math.max(0,(x/B-.72)/.28),vt=et*et*(3-2*et),wt=a[_+1]+a[_+3]*.22<s.y+.5?.35:0;a[_+4]*=wt+(1-wt)*vt}}}if(o>1&&n){n.getWorldPosition(ts),n.getWorldDirection(da);for(let f=0;f<o;f++){const d=f*9;i.key[f]=(a[d]-ts.x)*da.x+(a[d+1]-ts.y)*da.y+(a[d+2]-ts.z)*da.z,i.ord[f]=f}const r=i.ord.subarray(0,o),u=i.key;r.sort((f,d)=>u[d]-u[f])}else for(let r=0;r<o;r++)i.ord[r]=r;const c=i.iPos.array,l=i.iPar.array,h=i.iExt.array;for(let r=0;r<o;r++){const u=i.ord[r]*9;c[r*3]=a[u],c[r*3+1]=a[u+1],c[r*3+2]=a[u+2],l[r*4]=a[u+3],l[r*4+1]=a[u+4],l[r*4+2]=a[u+5],l[r*4+3]=a[u+6],h[r*2]=a[u+7],h[r*2+1]=a[u+8]}i.geo.instanceCount=o,i.mesh.visible=o>0,i.iPos.needsUpdate=!0,i.iPar.needsUpdate=!0,i.iExt.needsUpdate=!0}const Sl=900;function tb(){const i=new yn(1,1),t=new ef;t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const e=new Ii(new Float32Array(Sl*3),3);e.setUsage(Xs);const n=new Ii(new Float32Array(Sl*4),4);n.setUsage(Xs),t.setAttribute("iPos",e),t.setAttribute("iPar",n),t.instanceCount=0;const s=new Ze({uniforms:{uCore:{value:new Xt(.95,1.25,1.6)},uEdge:{value:new Xt(.22,.58,1.3)},uTail:{value:new Xt(.4,.62,.95)}},transparent:!0,depthWrite:!1,toneMapped:!1,blending:Id,blendSrc:Ud,blendDst:sl,vertexShader:`
      attribute vec3 iPos; attribute vec4 iPar;
      varying vec2 vUv; varying vec4 vPar;
      void main(){
        vUv = uv; vPar = iPar;
        vec3 R = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 U = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        vec3 wp = iPos + (R * position.x + U * position.y) * iPar.x;
        gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }`,fragmentShader:`
      uniform vec3 uCore, uEdge, uTail; varying vec2 vUv; varying vec4 vPar;
      void main(){
        vec2 p = (vUv - 0.5) * 2.0; float r2 = dot(p, p);
        if (r2 > 1.0) discard;
        float g = exp(-r2 * 3.2) - 0.04;
        float core = exp(-r2 * 14.0);
        float a = clamp(g, 0.0, 1.0) * vPar.y;
        vec3 col = mix(mix(uEdge, uTail, smoothstep(0.35, 1.0, vPar.w)), uCore, core * (1.0 - 0.6 * vPar.w));
        gl_FragColor = vec4(col * a, a * (1.0 - vPar.z));
      }`}),o=new be(t,s);return o.frustumCulled=!1,o.renderOrder=7,o.name="fx.jets",{mesh:o,geo:t,mat:s,iPos:e,iPar:n,n:0}}function Fh(i){const t=Math.floor(i),e=i-t,n=e*e*(3-2*e),s=o=>{const a=Math.sin(o*127.1+311.7)*43758.5453;return a-Math.floor(a)};return s(t)*(1-n)+s(t+1)*n-.5}const ir=new L,Oi=new L,Md=new ni,sr=new L,zc=new L;function bd(i,t,e,n,s,o,a,c){t.getWorldPosition(ir),t.getWorldQuaternion(Md),Oi.copy(t.userData.dir||sr.set(0,0,1)).applyQuaternion(Md).normalize(),c&&Oi.y<-.4&&(n=Math.min(n,Math.max(.05,(ir.y-.03)/-Oi.y))),sr.set(0,1,0),Math.abs(Oi.y)>.9&&sr.set(1,0,0),sr.cross(Oi).normalize(),zc.copy(Oi).cross(sr).normalize();const l=Math.max(6,Math.min(26,Math.round(n*6))),h=i.iPos.array,r=i.iPar.array;for(let u=0;u<l&&i.n<Sl;u++){const f=Math.pow((u+.5)/l,1.25),d=f*n,v=(.06+.22*f)*Math.min(1.4,n/3),g=Fh(o*5.3-d*1.7+a*7.1)*v,m=Fh(o*4.1-d*1.3+a*3.3+40)*v,p=i.n*3,_=i.n*4;h[p]=ir.x+Oi.x*d+sr.x*g+zc.x*m,h[p+1]=ir.y+Oi.y*d+sr.y*g+zc.y*m,h[p+2]=ir.z+Oi.z*d+sr.z*g+zc.z*m;const M=.85+.3*Fh(o*23+u*.7+a*5);r[_]=(s+(.3+.12*e)*Math.pow(f,.9))*(.9+.2*M),r[_+1]=Math.min(1,e*(.34+.32*Math.pow(1-f,.6))*M*(f>.82?(1-f)/.18:1)*1.9),r[_+2]=.75*Math.pow(1-f,2),r[_+3]=f,i.n++}if(i.n<Sl){const u=i.n*3,f=i.n*4;h[u]=ir.x+Oi.x*.05,h[u+1]=ir.y+Oi.y*.05,h[u+2]=ir.z+Oi.z*.05,r[f]=.16+.06*e,r[f+1]=Math.min(1,.55+.4*e),r[f+2]=.9,r[f+3]=0,i.n++}}function eb(i,t,e){const n=i&&i.isWebGLRenderer?{renderer:i,scene:t,camera:e}:i||{},s=n.renderer;let o=n.scene,a=n.camera;if(!s)throw new Error("createFX: renderer required");const c={exposure:1,bloomStrength:.9,bloomRadius:0,bloomThreshold:1,bloomKnee:.5,bloomLimit:.9,vignette:.5,grain:.04,saturation:1.12,contrast:1.07,caBase:0,speedBlur:1,streaks:1,fovPunchDeg:9,shakeAmp:.22,ownCamera:n.ownCamera===!0,autoTimeline:n.autoTimeline!==!1};let l=yd(1337);const h=new qt;s.getSize(h);const r=s.getPixelRatio(),u=new Fi(Math.max(1,h.x*r),Math.max(1,h.y*r),{type:Ki,samples:Math.min(4,s.capabilities.maxSamples||0)});u.texture.name="fx.rt";const f=new kM(s,u);f.setPixelRatio(r),f.setSize(Math.max(1,h.x),Math.max(1,h.y));const d=new HM(o,a);f.addPass(d);const v=new KM;f.addPass(v);const g=new Ko(new qt(h.x*r,h.y*r),c.bloomStrength,c.bloomRadius,c.bloomThreshold);g.highPassUniforms.smoothWidth.value=c.bloomKnee;try{const nt=g.compositeMaterial.uniforms.bloomFactors;nt&&Array.isArray(nt.value)&&(nt.value=[1,.9,.62,.36,.2])}catch{}try{if(g.copyUniforms&&g.blendMaterial){g.copyUniforms.uLimit={value:c.bloomLimit};const nt=g.blendMaterial;g.blendMaterial=new Ze({uniforms:g.copyUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
          uniform sampler2D tDiffuse; uniform float opacity; uniform float uLimit; varying vec2 vUv;
          void main() {
            vec3 b = max(texture2D(tDiffuse, vUv).rgb, vec3(0.0));
            float m = max(b.r, max(b.g, b.b));
            b *= 1.0 / (1.0 + m / uLimit);
            gl_FragColor = vec4(b * opacity, 1.0);
          }
        `,blending:Pn,depthTest:!1,depthWrite:!1,transparent:!0}),nt.dispose()}}catch{}f.addPass(g);const m=new YM;m.setSize(h.x*r,h.y*r),f.addPass(m);let p=h.x,_=h.y,M=r;const y=$M(),R=jM(l),U=ZM(),D=new hn;D.name="fx.root";const N=JM(),P=tb();D.add(y.mesh,R.group,U.group,N.mesh,P.mesh),o&&o.add(D);const x={ca:0,shake:0,fov:0,fovV:0,flash:0,flashColor:new Xt(1,1,1),bloomKick:0,streakKick:0,simT:0,lastT:null,speed:0,boost:0,explicit:{},autoDone:{},lastBeat:-1,gpFlash:0,gpCA:0,timeScale:1,extSpeed:null},z=new L,B=new L,et=new L,vt=new ni,wt=new Ge,pt=new L(1,1,1),Lt=new Ci;let tt={};function Ht(){try{return typeof window<"u"&&window.__game||null}catch{return null}}let se=()=>null;function ue(nt){const Zt=se();return Zt?Zt.getWorldPosition(nt):a?(a.getWorldDirection(et),nt.copy(a.position).addScaledVector(et,6).setY(0)):nt.set(0,0,0)}function ae(nt,Zt,Yt,Kt,Qt,te,Te,Ae,le,w,K,xt,lt,A,V){const ct=y.P;let dt;ct.n<$n?dt=ct.n++:dt=Math.floor(l()*$n),ct.pos[dt*3]=nt,ct.pos[dt*3+1]=Zt,ct.pos[dt*3+2]=Yt,ct.vel[dt*3]=Kt,ct.vel[dt*3+1]=Qt,ct.vel[dt*3+2]=te,ct.life[dt]=Te,ct.age[dt]=0,ct.size0[dt]=Ae,ct.size1[dt]=le,ct.col0[dt*3]=w[0],ct.col0[dt*3+1]=w[1],ct.col0[dt*3+2]=w[2],ct.col1[dt*3]=K[0],ct.col1[dt*3+1]=K[1],ct.col1[dt*3+2]=K[2],ct.stretch[dt]=xt,ct.grav[dt]=lt,ct.drag[dt]=A,ct.floor[dt]=V===void 0?-1e9:V}const mt=[7,4.4,2],X=[2.6,.55,.08];function W(nt,Zt=1,Yt,Kt=mt,Qt=X){const te=nt||ue(B),Te=Math.round(70*Zt),Ae=(Yt?Yt.x*8:0)+Rt.x*.3,le=Yt?Yt.y*8:0,w=(Yt?Yt.z*8:0)+Rt.z*.3;for(let K=0;K<Te;K++){const xt=l()*Math.PI*2,lt=(4+l()*11)*(.6+.4*Zt),A=.3+l()*.9;ae(te.x+(l()-.5)*1.6,te.y+.05,te.z+(l()-.5)*2,Math.cos(xt)*lt+Ae,A*lt*.7+le,Math.sin(xt)*lt+w,.25+l()*.5,.045+l()*.035,.012,Kt,Qt,.035,-22,1.6,te.y)}for(let K=0;K<Math.round(8*Zt);K++)ae(te.x+(l()-.5)*1.2,te.y+.1,te.z+(l()-.5)*1.2,(l()-.5)*3+Ae,1+l()*2,(l()-.5)*3+w,.4+l()*.3,.18,.02,[5,2.5,.8],[1.2,.2,.05],0,-4,2.5,te.y)}const Dt=[1.2,2.4,4.4],yt=[.15,.55,2],Ot=[.3,1.15,3.2],Nt=[.02,.1,.55],jt=[.08,.22,.6],re=[0,.02,.12],Rt=new L,Bt=new L;let O=!1;function he(nt,Zt,Yt=1,Kt){if(!nt)return;const Qt=Zt||et.set(0,0,1),te=Kt||Rt,Te=Math.max(1,Math.round(5*Yt));for(let Ae=0;Ae<Te;Ae++){const le=16+l()*10,w=.5+1.2*l(),K=l()*.016;ae(nt.x+Qt.x*le*K,nt.y+Qt.y*le*K,nt.z+Qt.z*le*K,te.x+Qt.x*le+(l()-.5)*w,te.y+Qt.y*le+(l()-.5)*w,te.z+Qt.z*le+(l()-.5)*w,.12+l()*.14,.022+.018*Yt,.075,Ot,Nt,.045,0,3)}l()<.6&&ae(nt.x,nt.y,nt.z,te.x+Qt.x*7,te.y+Qt.y*7,te.z+Qt.z*7,.18,.05+.04*Yt,.26,jt,re,.02,0,2.5),ae(nt.x,nt.y,nt.z,te.x+Qt.x*9,te.y+Qt.y*9,te.z+Qt.z*9,.04,.028*Yt+.012,.02,Dt,yt,.03,0,0)}function Vt(nt,Zt,Yt,Kt=4){const Qt=U.list[U.next];U.next=(U.next+1)%Qp;const te=nt||ue(B);Qt.m.position.copy(te),Zt?Qt.m.quaternion.copy(Zt):a&&Qt.m.quaternion.copy(a.quaternion);const Te=Yt?new Xt(Yt):new Xt(.3,2.4,3.2);Qt.m.material.uniforms.uCol.value.copy(Te).multiplyScalar(Te.r+Te.g+Te.b<3.2?2.5:1),Qt.m.visible=!0,Qt.age=0,Qt.life=.55,Qt.r0=Kt;const Ae=Qt.m.material.uniforms.uCol.value,le=[Ae.r*1.4,Ae.g*1.4,Ae.b*1.4],w=[Ae.r*.2,Ae.g*.2,Ae.b*.2];vt.copy(Qt.m.quaternion);for(let K=0;K<48;K++){const xt=K/48*Math.PI*2+l()*.1;et.set(Math.cos(xt),Math.sin(xt),0).applyQuaternion(vt);const lt=3+l()*4;ae(te.x+et.x*Kt,te.y+et.y*Kt,te.z+et.z*Kt,et.x*lt,et.y*lt,et.z*lt,.4+l()*.3,.06,.01,le,w,.05,0,2.2)}x.bloomKick=Math.max(x.bloomKick,.35)}function ce(nt=1){x.ca=Math.min(1.5,x.ca+.8*nt),x.shake=Math.min(1.5,x.shake+.6*nt)}function ne(nt=1){x.shake=Math.min(1.5,x.shake+nt),x.ca=Math.min(1.5,Math.max(x.ca,.25*nt))}function rt(nt=1){x.ca=Math.min(1.5,Math.max(x.ca,nt))}function ft(nt){x.extSpeed=nt==null?null:or(+nt||0)}function E(nt){x.timeScale=+nt||1}function b(nt=1){x.fovV+=c.fovPunchDeg*14*nt}function H(nt=1,Zt){x.flash=Math.max(x.flash,nt),x.flashColor.set(Zt===void 0?16777215:Zt)}function q(nt=1){x.bloomKick=Math.max(x.bloomKick,.22*nt)}function j(nt=1){b(nt),x.ca=Math.min(1.5,x.ca+.35*nt),x.streakKick=Math.max(x.streakKick,.6*nt),x.bloomKick=Math.max(x.bloomKick,.3*nt)}function G(nt,Zt=1){W(nt,Zt),ce(.55*Zt),H(.08*Zt,16766880)}function ut(nt,Zt=1){W(nt,.8*Zt,null,[6,1.2,4.5],[1.5,.05,1.2]),ce(1.2*Zt),H(.12*Zt,16727240)}function ht(nt=1){x.explicit.finish=!0,H(nt,16777215),x.bloomKick=Math.max(x.bloomKick,1.2),x.ca=Math.min(1.5,x.ca+.6),b(.6);const Zt=ue(z);Zt.y+=.6,Vt(Zt,a?a.quaternion:null,16777215,2.5),Vt(Zt,a?a.quaternion:null,16727240,4),W(Zt,.9,null,[6,6,7],[1.6,.2,1.4])}function st(){y.P.n=0,y.quad.instanceCount=0,O=!1,Rt.set(0,0,0),x.ca=x.shake=x.fov=x.fovV=x.flash=x.bloomKick=x.streakKick=0,x.autoDone={},x.lastBeat=-1,x.simT=0;for(const nt of U.list)nt.m.visible=!1,nt.age=nt.life=0;l=yd(1337)}function _t(nt,Zt){if(!c.autoTimeline||nt==null)return;const Yt=(Kt,Qt,te)=>{!x.autoDone[Kt]&&nt>=Qt&&nt-Qt<.5+Zt?(x.autoDone[Kt]=!0,x.explicit[Kt]||te()):nt>=Qt+.5+Zt&&(x.autoDone[Kt]=!0)};Yt("launch",16*hr,()=>{j(1),ce(.4),W(null,.6,et.set(0,0,0))}),Yt("checkpoint",48*hr,()=>{Vt(null,null,4253951,5),H(.15,8450303)}),Yt("liftoff",96*hr,()=>{j(1.1)}),Yt("touchdown",128*hr+1,()=>{G(null,.8)}),Yt("finish",VM,()=>ht(.9)),Pe(nt)}function F(nt){const Zt=[nt&&nt.gp,nt&&nt.gameplay,nt&&nt.S],Yt=Ht();Yt&&Zt.push(Yt.gp,Yt.gameplay,Yt.state);for(const Kt of Zt){if(!Kt)continue;const Qt=Kt.state&&typeof Kt.state=="object"&&"t"in Kt.state?Kt.state:Kt;if(Qt&&typeof Qt=="object"&&typeof Qt.t=="number"&&Array.isArray(Qt.events))return Qt}return nt&&typeof nt.t=="number"&&Array.isArray(nt.events)?nt:null}function Y(nt){if(!nt)return null;if(nt.isObject3D)return nt;for(const Zt of["object","root","group","object3d","mesh"])if(nt[Zt]&&nt[Zt].isObject3D)return nt[Zt];return null}se=function(){const nt=Ht();return Y(tt.car)||Y(nt&&nt.car)||null};function Mt(nt){const Zt=Ht(),Yt=(tt.car&&!tt.car.isObject3D?tt.car:null)||nt&&nt.userData&&nt.userData.car||(Zt&&Zt.car&&!Zt.car.isObject3D?Zt.car:null);return Yt&&Yt.anchors&&Array.isArray(Yt.anchors.nozzles)?Yt.anchors.nozzles:nt&&nt.userData&&Array.isArray(nt.userData.thrusters)?nt.userData.thrusters:null}let At=new WeakSet,ot=null;const Ut=new L,zt=new ni,kt=new L(0,0,1);function I(nt,Zt,Yt){return nt&&nt.pos&&nt.pos.isVector3?(Yt.copy(nt.pos),Zt>0&&nt.fwd&&nt.fwd.isVector3&&Yt.addScaledVector(nt.fwd,-(nt.v||0)*Zt),Yt):ue(Yt)}function J(nt,Zt,Yt){const Kt=nt.type,Qt=I(Zt,Yt,Ut),te=Zt&&typeof Zt.landImpact=="number"?Zt.landImpact:.6;switch(Kt){case"launch":{const Te=nt.rating==="PERFECT";nt.rating!=="EARLY"&&(et.set(0,0,0),W(Qt,Te?.9:.5,null),x.streakKick=Math.max(x.streakKick,Te?.9:.5),x.bloomKick=Math.max(x.bloomKick,.5),x.ca=Math.min(1.5,x.ca+.45));break}case"shift":nt.perfect&&(x.streakKick=Math.max(x.streakKick,.45),x.bloomKick=Math.max(x.bloomKick,.3),x.ca+=.15);break;case"land":case"landing":W(Qt,.5+.4*te);break;case"touchdown":W(Qt,.3+.2*te);break;case"scrape":W(Qt,.45,null,[5,3.2,1.6],[1.6,.3,.06]);break;case"hit":case"bounce":case"pylon":W(B.copy(Qt).add(et.set(0,.5,0)),.7,null,[6,1.4,4.5],[1.4,.05,1.1]),x.flashColor.set(16734930);break;case"ring":{Zt&&Zt.fwd&&Zt.fwd.isVector3?zt.setFromUnitVectors(kt,Zt.fwd):a&&zt.copy(a.quaternion);const Te=nt.text==="BULLSEYE";Vt(Qt,zt,Te?16757818:3203327,3.2);break}case"checkpoint":{Zt&&Zt.fwd&&Zt.fwd.isVector3?zt.setFromUnitVectors(kt,Zt.fwd):a&&zt.copy(a.quaternion),Vt(Qt,zt,4253951,5.5),x.bloomKick=Math.max(x.bloomKick,.3);break}case"flies":case"boost":x.streakKick=Math.max(x.streakKick,1),x.bloomKick=Math.max(x.bloomKick,.35);break;case"boostready":x.bloomKick=Math.max(x.bloomKick,.5);break;case"loop":case"upside":x.streakKick=Math.max(x.streakKick,.5);break;case"fleet":x.bloomKick=Math.max(x.bloomKick,.4);break;case"finish":x.explicit.finish=!0,ht(.95);break}}function Q(nt,Zt,Yt){const Kt=[];if(!nt||!Array.isArray(nt.events))return Kt;for(const Qt of nt.events)!Qt||typeof Qt!="object"||At.has(Qt)||(At.add(Qt),!(typeof Qt.t=="number"&&Zt-Qt.t>Yt)&&Kt.push(Qt));return Kt.sort((Qt,te)=>(Qt.t||0)-(te.t||0)),Kt}function gt(nt,Zt,Yt,Kt,Qt){if(x.ca*=Math.exp(-nt*5.5),x.shake*=Math.exp(-nt*7),x.flash*=Math.exp(-nt*(x.flash>.5?3.4:5)),x.bloomKick*=Math.exp(-nt*6),x.streakKick*=Math.exp(-nt*2.5),x.fovV+=(-x.fov*120-x.fovV*16)*nt,x.fov+=x.fovV*nt,x.simT+=nt,Zt>.01&&Yt)for(const le of Yt){if(!le||!le.isObject3D)continue;le.getWorldPosition(B),Qt!=null&&Kt&&Kt.t>Qt&&B.addScaledVector(Rt,-(Kt.t-Qt)),le.getWorldQuaternion(vt);const w=le.userData&&le.userData.dir&&le.userData.dir.isVector3?et.copy(le.userData.dir):et.set(0,-.5,1);w.applyQuaternion(vt).normalize(),he(B,w,Zt*(le.userData&&le.userData.main?1:.6))}const te=y.P;let Te=0;for(let le=0;le<te.n;le++){const w=te.age[le]+nt;if(w>=te.life[le])continue;const K=le*3,xt=Math.exp(-te.drag[le]*nt);let lt=te.vel[K]*xt,A=te.vel[K+1]*xt+te.grav[le]*nt,V=te.vel[K+2]*xt,ct=te.pos[K]+lt*nt,dt=te.pos[K+1]+A*nt,Ct=te.pos[K+2]+V*nt;dt<te.floor[le]&&(dt=te.floor[le],A=-A*.35,lt*=.7,V*=.7);const Pt=Te*3;te.pos[Pt]=ct,te.pos[Pt+1]=dt,te.pos[Pt+2]=Ct,te.vel[Pt]=lt,te.vel[Pt+1]=A,te.vel[Pt+2]=V,Te!==le&&(te.col0[Pt]=te.col0[K],te.col0[Pt+1]=te.col0[K+1],te.col0[Pt+2]=te.col0[K+2],te.col1[Pt]=te.col1[K],te.col1[Pt+1]=te.col1[K+1],te.col1[Pt+2]=te.col1[K+2],te.life[Te]=te.life[le],te.size0[Te]=te.size0[le],te.size1[Te]=te.size1[le],te.stretch[Te]=te.stretch[le],te.grav[Te]=te.grav[le],te.drag[Te]=te.drag[le],te.floor[Te]=te.floor[le]),te.age[Te]=w,Te++}te.n=Te;for(const le of U.list){if(!le.m.visible)continue;le.age+=nt;const w=le.age/le.life;if(w>=1){le.m.visible=!1;continue}le.m.scale.setScalar(le.r0*(1+1.4*(1-(1-w)*(1-w)))),le.m.material.uniforms.uA.value=(1-w)*(1-w)}const Ae=40+140*x.speed+80*x.streakKick;for(let le=0;le<za;le++){const w=R.S[le];w.z+=Ae*w.v*nt,w.z>2&&(w.z-=62,w.th=l()*Math.PI*2,w.r=3.4+l()*6)}}function Et(){const nt=y.P,Zt=nt.n,Yt=y.iPos.array,Kt=y.iVel.array,Qt=y.iCol.array,te=y.iSz.array;for(let Ae=0;Ae<Zt;Ae++){const le=nt.age[Ae]/nt.life[Ae],w=Ae*3,K=Ae*4,xt=Ae*2;Yt[w]=nt.pos[w],Yt[w+1]=nt.pos[w+1],Yt[w+2]=nt.pos[w+2],Kt[w]=nt.vel[w],Kt[w+1]=nt.vel[w+1],Kt[w+2]=nt.vel[w+2];const lt=Math.min(1,le*1.6);Qt[K]=nt.col0[w]+(nt.col1[w]-nt.col0[w])*lt,Qt[K+1]=nt.col0[w+1]+(nt.col1[w+1]-nt.col0[w+1])*lt,Qt[K+2]=nt.col0[w+2]+(nt.col1[w+2]-nt.col0[w+2])*lt,Qt[K+3]=(1-le)*(1-le)*Math.min(1,nt.age[Ae]*40+.3),te[xt]=nt.size0[Ae]+(nt.size1[Ae]-nt.size0[Ae])*le,te[xt+1]=nt.stretch[Ae]}y.quad.instanceCount=Zt;for(const Ae of[y.iPos,y.iVel,y.iCol,y.iSz])Ae.needsUpdate=!0,Ae.clearUpdateRanges&&Ae.clearUpdateRanges(),Ae.addUpdateRange&&Ae.addUpdateRange(0,Math.max(1,Zt*Ae.itemSize));const Te=or(Na(.25,.9,x.speed)*c.streaks+x.streakKick);if(R.mat.uniforms.uAlpha.value=Te*.7,R.mesh.visible=Te>.01,R.mesh.visible){const Ae=1.2+6*x.speed+5*x.streakKick;for(let le=0;le<za;le++){const w=R.S[le];B.set(Math.cos(w.th)*w.r,Math.sin(w.th)*w.r*.8,w.z),Lt.set(0,0,w.th+Math.PI/2),vt.setFromEuler(Lt),pt.set(w.w*(1+.3*x.speed),1,Ae*w.v),wt.compose(B,vt,pt),R.mesh.setMatrixAt(le,wt)}R.mesh.instanceMatrix.needsUpdate=!0}}const It=1.2;let $t=!1;function ve(nt=1/60,Zt){$t=!0,nt=Math.min(Math.max(+nt||0,0),.1),tt=Zt||{};const Yt=Ht(),Kt=F(tt);let Qt=typeof tt.t=="number"?tt.t:Kt?Kt.t:null;if(Qt==null&&Yt)try{Qt=typeof Yt.time=="function"?Yt.time():typeof Yt.t=="number"?Yt.t:null}catch{Qt=null}let te=!1;Qt!=null&&x.lastT!=null&&(Qt<x.lastT-1e-4||Qt-x.lastT>Math.max(.25,nt*4))&&(te=!0),Kt&&ot&&Kt!==ot&&(te=!0),te&&(st(),At=new WeakSet),x.lastT,Qt!=null&&(x.lastT=Qt),ot=Kt;let Te=tt.speed01;Te==null&&tt.speed!=null&&(Te=tt.speed/250),Te==null&&x.extSpeed!=null&&(Te=x.extSpeed),Te==null&&Kt&&typeof Kt.mph=="number"&&(Te=Kt.mph/260),Te==null&&Yt&&typeof Yt.speed01=="number"&&(Te=Yt.speed01),Te==null&&Qt!=null&&(Te=qM(Qt)),Te==null&&(Te=0);let Ae=tt.boost01;if(Ae==null&&Kt&&typeof Kt.boost=="number"&&(Ae=or(Kt.boost)),Ae==null&&Qt!=null){const lt=Qt/hr;Ae=lt>=88&&lt<96?Na(88,96,lt):lt>=96&&lt<128?.6:0}const le=se();tt.carVel&&tt.carVel.isVector3?Rt.copy(tt.carVel):Kt&&Kt.fwd&&Kt.fwd.isVector3&&typeof Kt.v=="number"?Rt.copy(Kt.fwd).multiplyScalar(Kt.v).y+=Kt.vy||0:le&&nt>0&&!te&&(le.getWorldPosition(B),O&&(et.subVectors(B,Bt).divideScalar(nt),et.length()<400?Rt.lerp(et,.5):Rt.set(0,0,0)),Bt.copy(B),O=!0);const w=Mt(le);let K=tt.thrust!=null?+tt.thrust:Kt&&typeof Kt.thrust=="number"?Kt.thrust:0;Kt&&typeof Kt.flap=="number"&&(K=Math.max(K,or(Kt.flap)));const xt=!!Kt;if(c._gp=xt,te&&Qt!=null){const lt=Q(Kt,Qt,It),A=Math.max(0,Qt-It),V=1/60;x.speed=or(Te),x.boost=Ae||0;let ct=0;for(let dt=A;dt<Qt-1e-6;dt+=V){for(;ct<lt.length&&(lt[ct].t??Qt)<=dt+V;)J(lt[ct],Kt,Math.max(0,Qt-(lt[ct].t??Qt))),ct++;xt?Pe(dt):_t(dt,V),gt(V,Qt-dt<.35?K:0,w,Kt,dt)}for(;ct<lt.length;ct++)J(lt[ct],Kt,0)}else{if(x.speed+=(or(Te)-x.speed)*Math.min(1,nt*6),x.boost+=((Ae||0)-x.boost)*Math.min(1,nt*4),xt){for(const lt of Q(Kt,Qt??0,It))J(lt,Kt,0);Pe(Qt)}else _t(Qt,nt);gt(nt,K,w,null,null)}Kt?(typeof Kt.flash=="number"?x.gpFlash=Kt.flash:x.gpFlash=0,typeof Kt.aberration=="number"?x.gpCA=Kt.aberration:x.gpCA=0,x.timeScale=typeof Kt.timeScale=="number"?Kt.timeScale:x.timeScale):(x.gpFlash=0,x.gpCA=0),Et();{const lt=tt.smoke||Kt&&Kt.puffs||null;QM(N,lt,Qt??(Kt?Kt.t:null),a,Kt&&Kt.pos&&Kt.pos.isVector3?Kt.pos:null);const A=tt.rcs||Kt&&Kt.rcs||null,V=le&&le.userData&&le.userData.car,ct=V&&V.anchors&&V.anchors.rcs;P.n=0;const dt=Qt??x.simT;if(A&&ct)for(const[S,C]of Object.entries(ct)){const k=S==="pitchUp"?Math.max(0,A.pitch||0):S==="pitchDown"?Math.max(0,-(A.pitch||0)):A[S]||0;if(k<.05||!Array.isArray(C))continue;const T=Math.min(1.2,k),at=S==="down",it=at?2.2+1.8*T:S==="left"||S==="right"?.9+3.2*T:.35+.9*T;C.forEach(($,Gt)=>bd(P,$,T,it,at?.14:.11,dt,Gt*1.37+S.length*.71,at))}const Ct=Kt&&Kt.mode==="flipAir"&&Kt.flipRear||0,Pt=Mt(le);Ct>.05&&Pt&&Pt.forEach((S,C)=>{S.userData&&(S.userData.main||C===0||C===3)&&bd(P,S,Math.min(1,Ct),.8+2.6*Ct,.08,dt,9+C,!1)}),P.geo.instanceCount=P.n,P.mesh.visible=P.n>0,P.iPos.needsUpdate=!0,P.iPar.needsUpdate=!0}}function Pe(nt){if(nt==null)return;const Zt=Math.floor(nt/hr+1e-4);if(Zt!==x.lastBeat){const Yt=XM(nt);x.lastBeat>=0&&(Yt==="drop1"||Yt==="loop"||Yt==="flight")&&q(Zt%4===0?1:.55),Yt==="intro"&&Zt>=10&&Zt%2===0&&Zt<16&&q(.6),x.lastBeat=Zt}}const Re=new L;function St(){s.getSize(h);const nt=s.getPixelRatio();(h.x!==p||h.y!==_||nt!==M)&&(p=h.x,_=h.y,M=nt,f.setPixelRatio(nt),f.setSize(Math.max(1,h.x),Math.max(1,h.y))),m.uniforms.uRes.value.set(h.x*nt,h.y*nt),y.mat.uniforms.uResY.value=h.y*nt,y.mat.uniforms.uAspect.value=h.x/Math.max(1,h.y)}function fn(nt,Zt){if(nt&&nt.isScene&&nt!==o&&ze(nt),Zt&&Zt.isCamera&&(a=Zt),!o||!a)return;$t||ve(1/60,tt),$t=!1,D.parent!==o&&o.add(D),d.scene=o,d.camera=a,St(),a.updateMatrixWorld(),R.group.position.setFromMatrixPosition(a.matrixWorld),R.group.quaternion.setFromRotationMatrix(wt.extractRotation(a.matrixWorld));const Yt=h.y>h.x,Kt=m.uniforms;Kt.uTime.value=x.simT,Kt.uSpeed.value=Na(.2,1,x.speed)*c.speedBlur*(.75+.5*x.streakKick),Kt.uCA.value=Math.min(1.5,Math.max(x.ca,x.gpCA*.9)+c.caBase+x.speed*.12),Kt.uExposure.value=c.exposure*(1+.12*x.boost);const Qt=or((1-(x.timeScale||1))/.4);Kt.uVignette.value=c.vignette+.12*Qt,x.slow=Qt,Kt.uGrain.value=c.grain,Kt.uSat.value=c.saturation*(1-.12*Qt),Kt.uContrast.value=c.contrast,Kt.uFlash.value=Math.min(1,Math.max(x.flash,x.gpFlash*.8)),Kt.uFlashColor.value.copy(x.flashColor),Kt.uCenter.value.set(.5,Yt?.52:.5);{const le=se();le&&le.getWorldPosition&&(le.getWorldPosition(B),B.y+=.6,B.project(a),B.z<1?Kt.uCar.value.set(B.x*.5+.5,B.y*.5+.5):Kt.uCar.value.set(-5,-5))}g.strength=c.bloomStrength*(1+x.bloomKick+.25*x.boost),g.radius=c.bloomRadius,g.threshold=c.bloomThreshold,g.highPassUniforms.smoothWidth.value=c.bloomKnee,g.copyUniforms&&g.copyUniforms.uLimit&&(g.copyUniforms.uLimit.value=c.bloomLimit*(1+.6*x.bloomKick));const te=a.isPerspectiveCamera,Te=te?a.fov:0;Re.copy(a.position);const Ae=c.ownCamera;if(Ae&&te&&Math.abs(x.fov)>.001&&(a.fov=Te+x.fov,a.updateProjectionMatrix()),Ae&&x.shake>.001){const le=x.shake*x.shake*c.shakeAmp,w=x.simT*47;B.set(Math.sin(w*1.13)+Math.sin(w*2.71)*.5,Math.cos(w*1.37)+Math.sin(w*3.1)*.5,0).multiplyScalar(le),B.applyQuaternion(a.quaternion),a.position.add(B),a.updateMatrixWorld()}try{f.render()}finally{te&&a.fov!==Te&&(a.fov=Te,a.updateProjectionMatrix()),a.position.equals(Re)||(a.position.copy(Re),a.updateMatrixWorld())}}function ie(nt,Zt){f.setPixelRatio(s.getPixelRatio()),f.setSize(Math.max(1,nt),Math.max(1,Zt)),p=nt,_=Zt,M=s.getPixelRatio()}function ze(nt){D.parent&&D.parent.remove(D),o=nt,nt&&nt.add(D)}function wn(nt){a=nt}function fi(){D.parent&&D.parent.remove(D),f.dispose&&f.dispose(),g.dispose(),m.dispose(),v.dispose(),y.quad.dispose(),y.mat.dispose(),N.geo.dispose(),N.mat.dispose(),R.mesh.geometry.dispose(),R.mat.dispose()}return{update:ve,render:fn,setSize:ie,setScene:ze,setCamera:wn,reset:st,dispose:fi,impact:ce,shake:ne,aberration:rt,setSpeed:ft,setTimeScale:E,fovPunch:b,flash:H,sparks:(nt,Zt,Yt)=>W(nt,Zt,Yt),land:G,hit:ut,ringPass:Vt,boost:j,thruster:he,finish:ht,beat:q,params:c,composer:f,bloom:g,finalPass:m,get state(){return x},markExplicit(nt){x.explicit[nt]=!0}}}const nb="modulepreload",ib=function(i){return"/"+i},Sd={},sb=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=ib(l),l in Sd)return;Sd[l]=!0;const h=l.endsWith(".css"),r=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":nb,h||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},ui=59/136,wd=16*ui,tm=134*ui,Td=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),Ed=Td.has("capture")||Td.get("mute")==="1",ln=i=>440*Math.pow(2,(i-69)/12),rb=[0,2,4,7,9],Nh=(i,t)=>i+12*Math.floor(t/5)+rb[(t%5+5)%5];class Fl{constructor(){if(this.ctx=null,this.buffer=null,this.src=null,this.playing=!1,this.muted=!1,this._startCtxT=0,this._offset=0,this._perfStart=0,this._loading=null,this._lastTick=-1,this._lastTickAt=0,this._cues=hb(),this._cueIdx=0,this._noise=null,this._engine=null,this._hiss=null,this._lastThrust=-9,this._lastVoice={},this._wind=null,this._rpm=0,typeof window<"u"){const t=()=>this.unlock();for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});window.addEventListener("rr:event",e=>{const n=e.detail||{};n.name&&this.event(n.name,n)})}}get lastTickAt(){return this._lastTickAt}_ensureCtx(){if(this.ctx||Ed)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t({latencyHint:"interactive"});this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=8,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.18,this.comp.connect(this.master),this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.82,this.musicGain.connect(this.comp),this.sfxGain=e.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.comp),this.verb=e.createConvolver(),this.verb.buffer=lb(e,1.6,2.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain),this.verbGain.connect(this.comp),this._noise=cb(e,2)}catch{this.ctx=null}return this.ctx}unlock(){const t=this._ensureCtx();t&&t.state==="suspended"&&t.resume().catch(()=>{}),!this.buffer&&!this._loading&&this.load()}load(t="/audio/music.mp3"){return this._loading?this._loading:(this._loading=(async()=>{const e=this._ensureCtx();if(!e)return null;try{const s=await(await fetch(t)).arrayBuffer();this.buffer=await new Promise((o,a)=>e.decodeAudioData(s,o,a))}catch{this.buffer=null}return this.buffer})(),this._loading)}play(t=0){this.stop(),this._offset=Math.max(0,t),this._perfStart=performance.now()/1e3-this._offset,this.playing=!0,this._resetCues(this._offset);const e=this._ensureCtx();if(!e||!this.buffer)return;e.state==="suspended"&&e.resume().catch(()=>{});const n=e.createBufferSource();n.buffer=this.buffer,n.connect(this.musicGain),this._startCtxT=e.currentTime+.02,n.start(this._startCtxT,this._offset),n.onended=()=>{this.src===n&&(this.playing=!1)},this.src=n}stop(){if(this.src){try{this.src.stop()}catch{}try{this.src.disconnect()}catch{}}this.src=null,this.playing=!1,this._setEngine(0,0),this._setHiss(0),this._setWind(0)}time(){return this.playing?this.src&&this.ctx?Math.max(0,this.ctx.currentTime-this._startCtxT+this._offset):performance.now()/1e3-this._perfStart:this._offset}setMuted(t){this.muted=!!t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.02)}_live(){return!Ed&&this.ctx&&this.ctx.state==="running"&&!this.muted}_resetCues(t){this._cueIdx=this._cues.findIndex(e=>e.t>=t-1e-4),this._cueIdx<0&&(this._cueIdx=this._cues.length)}tick(t,e={}){if(this._lastTickAt=performance.now(),!(t>=0)||((t<this._lastTick-.25||t>this._lastTick+1)&&this._resetCues(t),this._lastTick=t,!this._live()))return;for(this._combo=ci(e.combo,this._combo||0);this._cueIdx<this._cues.length&&this._cues[this._cueIdx].t<=t;){const m=this._cues[this._cueIdx++];!this._gpDriven&&t-m.t<.15&&this._play(m.name,m.opts)}const n=ci(e.mph,ci(e.speed,0)),s=ci(e.rev,0),o=t<wd,a=t>tm+1.5;let c=0,l=0;const h=e.shift&&typeof e.shift=="object"?e.shift:null,r=h?ci(h.phase,ci(h.light,-1)):-1,u=!o&&t<48*ui&&r>=0&&(e.section?e.section==="launch":!0)&&!e.airborne;if(o)c=s>.02?.1+.25*s:0,l=s*.95;else if(!a)if(c=.07+.1*Math.min(1,n/250),u){const m=.18+.82*Math.pow(ob(r),.85);this._rpm=m<this._rpm-.25?m:this._rpm+(m-this._rpm)*.35,l=.22+.55*this._rpm+.35*Math.min(1,n/260),c+=.05*this._rpm}else this._rpm=0,l=Math.min(1.2,n/260);this._setEngine(c,l),this._setWind(a?0:Math.pow(Math.min(1,n/260),2)*(t>wd?1:0));const f=e.mode?e.mode==="flipAir"||e.mode==="fly"||e.mode==="jump":e.section?e.section==="flight"||e.section==="outro"&&!!e.airborne:!!e.flying||t>96*ui&&t<128*ui&&e.flying!==!1,d=ci(e.lastThrustT,-9),v=ci(e.flap,Math.max(0,1-(t-d)/.35)),g=e.rcs?Math.max(e.rcs.down||0,e.rcs.left||0,e.rcs.right||0):0;this._setHiss(f?.035+.22*Math.max(v,g):0)}_setEngine(t,e){const n=this.ctx;if(!n)return;if(!this._engine){if(t<=0)return;const c=n.createGain();c.gain.value=0;const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,l.Q.value=3;const h=n.createOscillator();h.type="sawtooth";const r=n.createOscillator();r.type="square";const u=n.createOscillator();u.type="sine";const f=n.createOscillator();f.type="sawtooth",f.detune.value=9;const d=n.createGain();d.gain.value=.25;const v=n.createGain();v.gain.value=.9;const g=n.createGain();g.gain.value=.55;const m=n.createOscillator();m.type="sine";const p=n.createGain();p.gain.value=0,m.connect(p),p.connect(this.sfxGain);const _=n.createOscillator();_.frequency.value=23;const M=n.createGain();M.gain.value=6,_.connect(M),M.connect(h.detune),M.connect(f.detune),h.connect(l),f.connect(g),g.connect(l),r.connect(d),d.connect(l),u.connect(v),v.connect(c),l.connect(c),c.connect(this.sfxGain);for(const y of[h,r,u,f,m,_])y.start();this._engine={g:c,lp:l,o1:h,o2:r,o3:u,o4:f,o5:m,g5:p}}const s=this._engine,o=n.currentTime,a=ln(50)*Math.pow(2,e*2.6);s.o1.frequency.setTargetAtTime(a,o,.05),s.o4.frequency.setTargetAtTime(a*.5,o,.05),s.o2.frequency.setTargetAtTime(a*1.5,o,.05),s.o3.frequency.setTargetAtTime(a/3,o,.05),s.lp.frequency.setTargetAtTime(900+4200*e,o,.06),s.g.gain.setTargetAtTime(t*.55,o,.06),s.o5.frequency.setTargetAtTime(Math.min(9e3,a*6),o,.04),s.g5.gain.setTargetAtTime(t>0?Math.min(.05,.012+.04*e)*(t/.2):0,o,.06)}duck(t=3,e=.06,n=.4){if(!this._live()||!this.musicGain)return;const s=this.musicGain.gain,o=this.ctx.currentTime,a=.82,c=a*Math.pow(10,-t/20);try{s.cancelScheduledValues(o),s.setValueAtTime(s.value,o),s.linearRampToValueAtTime(c,o+.012),s.setValueAtTime(c,o+.012+e),s.linearRampToValueAtTime(a,o+.012+e+n)}catch{}}_setWind(t){const e=this.ctx;if(!e)return;if(!this._wind){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=600,o.Q.value=.4;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._wind={g:a,lp:o}}const n=e.currentTime;this._wind.g.gain.setTargetAtTime(.09*t,n,.12),this._wind.lp.frequency.setTargetAtTime(500+2200*t,n,.12)}_setHiss(t){const e=this.ctx;if(!e)return;if(!this._hiss){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=3200,o.Q.value=.7;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._hiss={g:a,bp:o}}const n=e.currentTime;this._hiss.g.gain.setTargetAtTime(t,n,.04),this._hiss.bp.frequency.setTargetAtTime(2200+5e3*t,n,.05)}event(t,e={}){const n=String(t).toLowerCase(),s={shift:()=>this.sfx(e.grade&&String(e.grade).toUpperCase()!=="PERFECT"?"shift":"perfect"),perfectshift:()=>this.sfx("perfect"),ring:()=>this.sfx("ring",{combo:ci(e.combo,1)}),pylon:()=>this.sfx("bounce"),hit:()=>this.sfx("bounce"),bounce:()=>this.sfx("bounce"),land:()=>this.sfx("land"),landing:()=>this.sfx("land"),thrust:()=>this.sfx("thrust"),flap:()=>this.sfx("thrust"),tap:()=>{},jump:()=>this.sfx("jump"),ramp:()=>this.sfx("jump"),launch:()=>this.sfx("launch",{grade:e.grade}),record:()=>this.sfx("record"),combo:()=>this.sfx("ring",{combo:ci(e.n??e.combo,5)+2}),checkpoint:()=>this.sfx("checkpoint"),whoosh:()=>this.sfx("whoosh"),finish:()=>this.sfx("finish")};s[n]?s[n]():this.sfx(n,e)}sfx(t,e={}){e&&typeof e=="object"&&e.type===t&&Ad[t]!==void 0&&(this._gpDriven=!0);const n=Ad[t];let s=t,o=e||{};if(typeof n=="function")[s,o]=n(o,this);else{if(n===null)return;n&&(s=n)}this._play(s,o)}_play(t,e={}){if(!this._live()||!t)return;const n=Ns[t];if(!n)return;const s=this.ctx.currentTime,o=ab[t];if(o){if(s-(this._lastVoice[t]??-99)<o)return;this._lastVoice[t]=s}try{n(this,s+.005,e)}catch{}}}function ci(i,t){return typeof i=="number"&&isFinite(i)?i:t}const ob=i=>Math.min(1,Math.max(0,i)),ab={checkpoint:1.6,finish:2.5,go:.6,count:.5,liftoff:1.2,loop:1.2,boost:1.5,fleet:1,record:2,launch:.6,land:.12,whoosh:.25};function cb(i,t){const e=i.createBuffer(1,Math.floor(i.sampleRate*t),i.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return e}function lb(i,t,e){const n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let c=0;c<n;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/n,e)}return s}function df(i,t,e,n,s,o="exp"){i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n,t+e),o==="exp"?i.gain.exponentialRampToValueAtTime(1e-4,t+e+s):i.gain.linearRampToValueAtTime(0,t+e+s)}function On(i,t,{type:e="sine",f:n=440,f2:s=null,dur:o=.2,a=.004,peak:c=.3,verb:l=0,dest:h=null,detune:r=0}){const u=i.ctx,f=u.createOscillator(),d=u.createGain();if(f.type=e,f.frequency.setValueAtTime(n,t),f.detune.value=r,s&&f.frequency.exponentialRampToValueAtTime(s,t+a+o),df(d,t,a,c,o),f.connect(d),d.connect(h||i.sfxGain),l){const v=u.createGain();v.gain.value=l,d.connect(v),v.connect(i.verb)}return f.start(t),f.stop(t+a+o+.05),f}function ai(i,t,{type:e="bandpass",f:n=1e3,f2:s=null,q:o=1,dur:a=.3,a:c=.01,peak:l=.3,verb:h=0}){const r=i.ctx,u=r.createBufferSource(),f=r.createBiquadFilter(),d=r.createGain();if(u.buffer=i._noise,f.type=e,f.frequency.setValueAtTime(n,t),f.Q.value=o,s&&f.frequency.exponentialRampToValueAtTime(s,t+c+a),df(d,t,c,l,a),u.connect(f),f.connect(d),d.connect(i.sfxGain),h){const v=r.createGain();v.gain.value=h,d.connect(v),v.connect(i.verb)}u.start(t,Math.random()),u.stop(t+c+a+.05)}function wi(i,t,e,n=.22,s=.9){const o=i.ctx,a=ln(e),c=o.createOscillator(),l=o.createOscillator(),h=o.createGain(),r=o.createGain();c.frequency.value=a,l.frequency.value=a*3.5,h.gain.setValueAtTime(a*2.2,t),h.gain.exponentialRampToValueAtTime(a*.05,t+s),l.connect(h),h.connect(c.frequency),c.connect(r),df(r,t,.002,n,s),r.connect(i.sfxGain);const u=o.createGain();u.gain.value=.6,r.connect(u),u.connect(i.verb),c.start(t),l.start(t),c.stop(t+s+.1),l.stop(t+s+.1)}function ma(i,t,e=120,n=.7,s=.35){On(i,t,{type:"sine",f:e,f2:38,dur:s,a:.002,peak:n})}function ga(i,t,{sub:e=1,crack:n=1,tail:s=.5,f:o=110,dur:a=.5,db:c=3}={}){On(i,t,{type:"sine",f:o,f2:32,dur:a,a:.001,peak:.9*e}),On(i,t,{type:"triangle",f:o*2,f2:o*.6,dur:a*.4,a:.001,peak:.3*e}),ai(i,t,{type:"bandpass",f:1800,f2:700,q:1.4,dur:.07,a:5e-4,peak:.55*n}),ai(i,t,{type:"highpass",f:6e3,q:.5,dur:.035,a:5e-4,peak:.25*n}),ai(i,t,{type:"lowpass",f:2600,f2:180,q:.8,dur:a*.8,a:.002,peak:.35,verb:s}),c&&i.duck(c,.05,.35+a*.6)}const Ns={ui:(i,t)=>{On(i,t,{type:"triangle",f:ln(86),dur:.06,peak:.12})},count:(i,t)=>{On(i,t,{type:"square",f:ln(74),dur:.16,peak:.12,verb:.3}),On(i,t,{type:"sine",f:ln(62),dur:.22,peak:.25})},go:(i,t)=>{for(const e of[74,81,86])On(i,t,{type:"sawtooth",f:ln(e),dur:.5,peak:.07,verb:.4});On(i,t,{type:"sine",f:ln(86),dur:.6,peak:.18,verb:.4}),ma(i,t,150,.6,.3)},launch:(i,t,e={})=>{const n=String(e.grade||"PERFECT").toUpperCase();ga(i,t,{f:110,dur:.6,crack:.8,tail:.4,db:3}),ai(i,t,{type:"lowpass",f:6e3,f2:300,q:.5,dur:.9,a:.005,peak:n==="LATE"?.18:.35}),On(i,t,{type:"sawtooth",f:ln(50),f2:ln(86),dur:.9,a:.01,peak:.1}),n==="PERFECT"&&(wi(i,t+.05,86,.16,.8),wi(i,t+.12,93,.12,.9))},rev:(i,t,e={})=>{const n=ci(e.level,.6);On(i,t,{type:"sawtooth",f:ln(50),f2:ln(50+24*n),dur:.4,a:.02,peak:.12})},shift:(i,t)=>{ai(i,t,{type:"highpass",f:2500,q:.7,dur:.05,a:.001,peak:.35}),On(i,t,{type:"square",f:ln(62),f2:ln(50),dur:.12,peak:.12}),ma(i,t,90,.4,.18)},perfect:(i,t)=>{Ns.shift(i,t),On(i,t+.01,{type:"sawtooth",f:ln(57),f2:ln(81),dur:.22,a:.005,peak:.08}),wi(i,t+.03,81,.15,.6),ai(i,t,{type:"bandpass",f:800,f2:6e3,q:1.2,dur:.35,a:.02,peak:.14})},good:(i,t)=>Ns.shift(i,t),late:(i,t)=>{Ns.shift(i,t),On(i,t,{type:"square",f:ln(55),f2:ln(43),dur:.2,peak:.08})},whoosh:(i,t,e={})=>{const n=ci(e.dur,.7);ai(i,t,{type:"bandpass",f:300,f2:5e3,q:1.6,dur:n*.6,a:n*.4,peak:.3,verb:.2})},jump:(i,t)=>{ai(i,t,{type:"bandpass",f:500,f2:4e3,q:1,dur:.6,a:.05,peak:.25}),On(i,t,{type:"sine",f:ln(43),f2:ln(67),dur:.5,a:.01,peak:.25})},land:(i,t)=>{ga(i,t,{f:120,dur:.5,tail:.45,db:3}),On(i,t+.03,{type:"square",f:ln(43),f2:ln(36),dur:.09,peak:.07}),ai(i,t+.02,{type:"bandpass",f:3200,f2:2400,q:6,dur:.18,a:.004,peak:.12})},thrust:(i,t)=>{ai(i,t,{type:"highpass",f:5e3,q:.7,dur:.02,a:5e-4,peak:.3}),ai(i,t,{type:"bandpass",f:7e3,f2:1800,q:.9,dur:.32,a:.004,peak:.42}),ai(i,t+.01,{type:"lowpass",f:900,f2:200,q:.7,dur:.25,a:.01,peak:.25}),ma(i,t,70,.4,.22)},ring:(i,t,e={})=>{const n=Math.max(1,Math.min(20,ci(e.combo,1))),s=Nh(74,n-1);wi(i,t,Math.min(s,98),.2,.9),On(i,t,{type:"triangle",f:ln(Math.min(s,98)+12),dur:.15,peak:.06})},bounce:(i,t)=>{ga(i,t,{f:80,dur:.35,crack:1.1,tail:.3,db:3}),ai(i,t,{type:"bandpass",f:1200,q:3,dur:.25,a:.001,peak:.35}),On(i,t,{type:"square",f:ln(50),f2:ln(38),dur:.3,peak:.12})},checkpoint:(i,t)=>{wi(i,t,79,.16,1),wi(i,t+.11,86,.14,1.1),Ns.whoosh(i,t,{dur:.9})},loop:(i,t)=>{Ns.whoosh(i,t,{dur:1.1}),On(i,t,{type:"sawtooth",f:ln(38),f2:ln(62),dur:1.2,a:.2,peak:.07})},boost:(i,t)=>{const e=6*ui;On(i,t,{type:"sawtooth",f:ln(38),f2:ln(74),dur:e-.3,a:.3,peak:.06}),ai(i,t,{type:"bandpass",f:300,f2:8e3,q:2,dur:e-.6,a:.6,peak:.14});for(let n=0;n<6;n++)On(i,t+n*ui,{type:"triangle",f:ln(Nh(62,n)),dur:.09,peak:.08});wi(i,t+e,86,.16,.9),wi(i,t+e+.06,93,.12,1)},liftoff:(i,t)=>{Ns.thrust(i,t),Ns.thrust(i,t+.08),ga(i,t,{f:60,dur:.8,crack:.4,tail:.6,db:4}),wi(i,t,74,.12,1.2)},finish:(i,t)=>{ga(i,t,{f:90,dur:1,crack:1.2,tail:.9,db:5}),ma(i,t,160,.6,.6),ai(i,t,{type:"highpass",f:3e3,q:.5,dur:1.4,a:.005,peak:.25,verb:.5}),[74,79,83,86,91].forEach((e,n)=>wi(i,t+n*.06,e,.13,1.4))},fleet:(i,t)=>{i.duck(2.5,.1,.5),Ns.whoosh(i,t,{dur:.6}),wi(i,t+.02,79,.15,.9),wi(i,t+.09,86,.13,1)},scrape:(i,t)=>{ai(i,t,{type:"highpass",f:3500,q:.6,dur:.18,a:.002,peak:.25}),ma(i,t,70,.4,.18)},combo:(i,t,e={})=>{const n=Math.max(5,ci(e.combo,5));[0,2,4].forEach((s,o)=>wi(i,t+o*.055,Math.min(98,Nh(74,Math.floor(n/5)+s)),.14,.8))},record:(i,t)=>{[86,88,91,93,98].forEach((e,n)=>wi(i,t+n*.07,e,.12,.9))}},Ad={countdown:i=>[String(i.n??i.text??"").toUpperCase()==="GO"?"go":"count",i],launch:i=>["launch",{grade:i.rating||i.grade}],zero60:null,shift:i=>[i.perfect===!1?"shift":"perfect",i],miss:"late",offbeat:"late",flap:"thrust",air:"jump",fleet:"fleet",land:"land",touchdown:"land",loop:"loop",upside:"whoosh",boostready:"boost",flies:"liftoff",checkpoint:"checkpoint",ring:(i,t)=>["ring",{combo:ci(i.combo,t._combo||1)}],ringmiss:"late",scrape:"scrape",hit:"bounce",combo:(i,t)=>["combo",{combo:ci(i.combo,t._combo||5)}],finish:"finish",replay:"ui",beat:null};function hb(){const i=e=>e*ui,t=[];return t.push({t:i(10),name:"count"},{t:i(12),name:"count"},{t:i(14),name:"count"},{t:i(16),name:"go"}),t.push({t:i(48),name:"checkpoint"},{t:i(56),name:"loop"},{t:i(88),name:"boost"},{t:i(96),name:"liftoff"},{t:tm,name:"finish"}),t.sort((e,n)=>e.t-n.t)}const Fn=typeof window<"u"&&window.__rrAudio||new Fl;typeof window<"u"&&(window.__rrAudio=Fn);Fl.prototype.init=function(){return this.load()};Fl.prototype.getTime=function(){return this.time()};Object.defineProperty(Fl.prototype,"currentTime",{get(){return this.time()}});const rs=i=>i*ui,ks=rs(16),pr=rs(134),em=1.15*ui,ub=pr+em,Oa=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),Oc=Oa.has("capture"),fb=Oa.get("autoplay")==="1",Cd="https://roadster.kalibrio.com",Rd=[[0,"INTRO","HANGAR"],[16,"#3 · #1","LAUNCH + FLEET"],[48,"REVEAL","THE FLIP RAMP"],[56,"#2","THE MIDAIR FLIP"],[88,"BUILD","MEGA FLIP"],[96,"MEGA FLIP","FLEET FLIP"],[128,"OUTRO","FINISH"]],db=i=>{let t=Rd[0];for(const e of Rd)i>=e[0]&&(t=e);return t},nl=[20,24,28,32,36,40,44],pb=[{b:17.9,text:"#3 0-60 IN 0.81s",sub:"TESLA ROADSTER",tone:"cyan",size:"xl",dur:5},{b:27.5,text:"#1 JUMPING THE ENTIRE FLEET",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y",tone:"magenta",size:"l",wrap:!0,dur:5},{b:48,text:"THE MIDAIR FLIP",sub:"NEXT: #2",tone:"green",size:"l",dur:6},{b:61.9,text:"#2 THE MIDAIR FLIP",sub:"PAST VERTICAL",tone:"orange",size:"xl",dur:5},{b:88,text:"MEGA FLIP READY",sub:"TAP: THRUSTERS",tone:"orange",size:"l",dur:6},{b:96.5,text:"MEGA FLIP",sub:"TAP: THRUSTERS",tone:"cyan",size:"xl",dur:5},{b:134,text:"FINISH",tone:"white",size:"xl",dur:8}],mb={countdown:{skip:!0},launch:{skip:!0},replay:{skip:!0},finish:{tone:"white",size:"xl",pri:9,dur:2.4,slam:!0,subFn:(i,t,e)=>Ta(e._lap||0)},zero60:{tone:"cyan",size:"xl",pri:3,delay:2*ui,dur:2.4-2*ui,text:"0-60 MPH",sub:"UNDER 1 SECOND"},shift:{chip:!0,tone:"green",dur:1.3,subFn:i=>i.style==="perfect"?"+400":"+200"},miss:{chip:!0,tone:"orange",dur:1.2},offbeat:{chip:!0,tone:"orange",dur:.9},air:{tone:"cyan",size:"l",pri:3,dur:1.3},fleet:{tone:"magenta",size:"xl",pri:3,dur:2.3,sub:"+1,500"},land:{chip:!0,tone:"cyan",dur:1.6},touchdown:{tone:"cyan",size:"l",pri:3,dur:1.5},checkpoint:{tone:"green",size:"l",pri:3,dur:2.3,subFn:i=>i.sub||"NEXT: #2"},loop:{tone:"orange",size:"xl",pri:3,dur:2.3,sub:"TAP ON THE BEAT"},upside:{tone:"magenta",size:"xl",pri:3,dur:2.2,flip:!0},boostready:{tone:"orange",size:"l",pri:3,dur:2.3,sub:"TAP: THRUSTERS"},flies:{tone:"cyan",size:"xl",pri:3,dur:2.3,sub:"TAP TO THRUST"},ring:{chip:!0,tone:"magenta",dur:1,sub:"+500"},ringmiss:{chip:!0,tone:"orange",dur:.9},combo:{skip:!0},moment3:{tone:"cyan",size:"xl",pri:4,dur:2.4,subFn:i=>i.sub||"TESLA ROADSTER"},moment1:{tone:"magenta",size:"l",wrap:!0,pri:4,dur:2.4,subFn:i=>i.sub||""},moment2:{tone:"orange",size:"xl",pri:4,dur:2.4,subFn:i=>i.sub||""},kickflip:{chip:!0,tone:"green",dur:1.5,sub:"THRUSTERS"},softland:{chip:!0,tone:"green",dur:1.6,subFn:i=>i.text==="SOFT LANDING"?"+2,000":"+1,000"},hardland:{chip:!0,tone:"orange",dur:1.6,sub:"COMBO LOST"},inverted:{tone:"magenta",size:"l",pri:2,dur:1.4,flip:!0},upright:{chip:!0,tone:"cyan",dur:1.4,sub:"+2,500"},thrusters:{chip:!0,tone:"cyan",dur:1.2},megaflip:{tone:"cyan",size:"xl",pri:3,dur:2,sub:"TAP: THRUSTERS"},fleetflip:{chip:!0,tone:"magenta",dur:1.3,subFn:i=>i.sub||""},rowclear:{chip:!0,tone:"cyan",dur:1},climbbeat:{skip:!0},bullet:{skip:!0},finale:{skip:!0},air:{skip:!0},scrape:{chip:!0,tone:"orange",dur:.9},hit:{chip:!0,tone:"orange",dur:1.1,sub:"COMBO LOST"}},Pd={intro:["INTRO","HANGAR"],launch:["#3 · #1","LAUNCH + FLEET"],reveal:["REVEAL","THE FLIP RAMP"],flip:["#2","THE MIDAIR FLIP"],build:["BUILD","MEGA FLIP"],mega:["MEGA FLIP","FLEET FLIP"],outro:["OUTRO","FINISH"],tunnel:["BREAK","CHECKPOINT"],loop:["DROP 2","THE LOOP"],flight:["DROP 3","FLIGHT"]};function gb(i){const t=i/ui;let e=0;if(i>=ks){const h=i-ks;e=238*(1-Math.exp(-h/1.6))+10*Math.min(1,h/12);for(const r of nl){const u=i-rs(r);u>0&&u<.5&&(e+=6*Math.sin(u/.5*Math.PI))}t>=48&&t<56&&(e=e*.82),t>=56&&t<88&&(e+=8*Math.sin((t-56)/32*Math.PI)-18*Math.exp(-(((t-74)/4)**2))),t>=88&&t<96&&(e+=14*(t-88)/8),t>=96&&t<128&&(e+=22+4*Math.sin(t*Math.PI/2)),t>=128&&(e+=22-16*Math.min(1,(t-128)/8)),i>pr&&(e*=Math.max(0,1-(i-pr)/2.5))}let n=0,s=0,o=0,a=0;i>=ks&&(n+=1e3);for(const h of nl)t>=h&&(n+=500,a++);t>=31.5&&(n+=2e3),t>=48&&(n+=1e3),t>=56&&(n+=100*Math.floor(Math.min(88,t)-56)),t>=74&&(n+=1500);for(let h=0;h<15;h++){const r=98+2*h;t>=r&&(o++,s=h+1,n+=250*s)}t>=128&&t<134?s=o:t<98&&(s=0),i>=ks&&(n+=Math.floor(Math.min(i,pr)-ks)*120);let c=0;t>=16&&t<48?c=Math.min(.6,.12+.07*a):t>=48&&t<88?c=.6-.15*Math.min(1,Math.max(0,(t-56)/32)):t>=88&&t<96?c=.45+.55*(t-88)/8:t>=96&&t<128?c=1-.55*(t-96)/32:t>=128&&(c=.45);let l=0;return t>=9&&t<16&&(l=Math.min(.86,.18+.68*(t-9)/5)+.02*Math.sin(t*9)),{speed:e,score:n,combo:s,maxCombo:Math.max(o,s),boost:c,rev:l,revTarget:[.78,.94],launch:"PERFECT",shifts:a,shiftsTotal:nl.length,rings:o,ringsTotal:15}}const Ne=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Se=i=>typeof i=="number"&&isFinite(i)?i:void 0,Ar=i=>1-Math.pow(1-Ne(i),3),es=i=>{i=Ne(i);const t=1.9;return 1+(t+1)*Math.pow(i-1,3)+t*Math.pow(i-1,2)};function Ta(i){i=Math.max(0,i);const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const Bc=i=>Math.round(i).toLocaleString("en-US"),on=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n};function tn(i,t){i.__t!==t&&(i.__t=t,i.textContent=t)}function Me(i,t,e){const n="__s_"+t;i[n]!==e&&(i[n]=e,i.style.setProperty(t,e))}function Xe(i,t,e){const n="__c_"+t;i[n]!==e&&(i[n]=e,i.classList.toggle(t,e))}function va(i,t,e,n,s){const o=r=>{const u=(r-90)*Math.PI/180;return[i+e*Math.cos(u),t+e*Math.sin(u)]},[a,c]=o(n),[l,h]=o(s);return`M${a.toFixed(2)} ${c.toFixed(2)} A${e} ${e} 0 ${s-n>180?1:0} 1 ${l.toFixed(2)} ${h.toFixed(2)}`}function vb(i,t,e,n,s,o,a,c){let l="";for(let h=0;h<=a;h++){const r=s+(o-s)*h/a,u=(r-90)*Math.PI/180,f=h%c===0,d=f?e-4:e;l+=`<line x1="${(i+d*Math.cos(u)).toFixed(1)}" y1="${(t+d*Math.sin(u)).toFixed(1)}" x2="${(i+n*Math.cos(u)).toFixed(1)}" y2="${(t+n*Math.sin(u)).toFixed(1)}" class="${f?"tk tk-big":"tk"}"/>`}return l}class xb{constructor(){this.mesh=null,this.key="",this.failed=!1}_build(){const t=window.__game,e=t&&t.carApi,n=t&&t.car,s=e&&e.anchors&&e.anchors.tailLeft&&e.anchors.tailLeft.parent||(n&&n.isObject3D?n:null);if(!s)return!1;const o=document.createElement("canvas");o.width=512,o.height=144,this.ctx=o.getContext("2d"),this.tex=new Al(o),this.tex.colorSpace=In,this.tex.anisotropy=4;const a=new $e({map:this.tex,transparent:!0,depthWrite:!1,blending:Pn,toneMapped:!1,side:je});a.color.setScalar(1.7),this.mesh=new be(new yn(.86,.242),a),this.mesh.name="hud-deck-panel",this.mesh.renderOrder=20,this.mesh.frustumCulled=!1;const c=s!==n;return this.mesh.position.set(0,1,1.9),this.mesh.rotation.x=-.62,s.add(this.mesh),!0}update(t,e,n,s,o){if(this.failed)return;if(!this.mesh)try{if(!t||!this._build())return}catch{this.failed=!0;return}if(this.mesh.visible=t,!t)return;const a=e+"|"+n+"|"+(s>.5?1:0)+"|"+(o?1:0);if(a===this.key)return;this.key=a;const c=this.ctx,l=512,h=144;c.clearRect(0,0,l,h);const r=c.createLinearGradient(0,0,0,h);r.addColorStop(0,"rgba(20,90,140,0.30)"),r.addColorStop(1,"rgba(10,30,70,0.10)"),c.fillStyle=r,c.beginPath(),c.moveTo(26,6),c.lineTo(l-6,6),c.lineTo(l-26,h-6),c.lineTo(6,h-6),c.closePath(),c.fill(),c.strokeStyle=`rgba(63,243,255,${.55+.45*s})`,c.lineWidth=3,c.stroke(),c.fillStyle="rgba(255,58,210,0.9)",c.fillRect(30,6,120,4),c.fillRect(l-150,h-10,120,4);const u='"DIN Condensed","Bahnschrift","Barlow Condensed","Roboto Condensed","Arial Narrow",Impact,sans-serif';c.textBaseline="alphabetic",c.shadowColor="rgba(63,243,255,0.95)",c.shadowBlur=14,c.fillStyle="rgba(190,240,255,0.85)",c.font=`700 22px ${u}`,c.fillText("L A P",40,46),c.fillStyle="#ffffff",c.font=`italic 700 92px ${u}`,c.fillText(e,36,126),n>=2&&(c.textAlign="right",c.shadowColor="rgba(255,58,210,0.95)",c.fillStyle="rgba(255,198,243,0.9)",c.font=`700 22px ${u}`,c.fillText("C O M B O",l-40,46),c.fillStyle=o?"#ffe7fb":"#ff7be6",c.font=`italic 700 80px ${u}`,c.fillText("×"+n,l-40,124),c.textAlign="left"),c.shadowBlur=0,this.tex.needsUpdate=!0}}class pf{constructor(){xf(this,"_loop",()=>{requestAnimationFrame(this._loop),this._wrapSeek(),!(this._previewMode||performance.now()-this.lastExternal<250)&&this._poll()});this.mounted=!1,this.events=[],this.replayFns=[],this.lastExternal=0,this.t=0,this.state={},this.prevCombo=0,this.prevT=-1,this.best=null,this.recordSaved=!1,this.deck=new xb}mount(t){if(this.mounted||typeof document>"u")return this;t=t||document.getElementById("hud"),t||(t=on("div"),t.id="hud",document.body.appendChild(t)),this.root=t,t.innerHTML="",Xe(t,"rr-hud",!0),fb&&(t.dataset.autoplay="1"),t.append(on("div","rr-scrim rr-scrim-top"),on("div","rr-scrim rr-scrim-bot"),on("div","rr-scan")),this.frame=on("div","rr-frame");for(const f of["tl","tr","bl","br"])this.frame.append(on("i","rr-br rr-br-"+f));t.append(this.frame);const e=on("div","rr-top");this.scoreBox=on("div","rr-score",`
      <div class="rr-lbl">SCORE</div>
      <div class="rr-score-v">${'<i class="rr-d"></i>'.repeat(7)}</div>
      <div class="rr-combo"><b class="rr-combo-x">x0</b><span class="rr-combo-l">COMBO</span><i class="rr-combo-bar"><i></i></i></div>
      <div class="rr-combo-pop"><b></b><span></span></div>`),this.timeBox=on("div","rr-time",`
      <div class="rr-lbl">LAP <span class="rr-sec"></span></div>
      <div class="rr-time-v">0:00.00</div>
      <div class="rr-split"></div>`),this.center=on("div","rr-center",`
      <div class="rr-chip"><i class="rr-chip-dot"></i><span class="rr-chip-a"></span><span class="rr-chip-b"></span></div>`),e.append(this.scoreBox,this.center,this.timeBox),t.append(e);const n=200,s=100,o=-135,a=135,c=(f,d)=>`
      <svg viewBox="0 0 ${n} ${n}" class="rr-pod-svg">
        <defs>
          <linearGradient id="g-${f}" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" class="st0"/><stop offset="1" class="st1"/>
          </linearGradient>
        </defs>
        <circle cx="${s}" cy="${s}" r="92" class="pod-bg"/>
        <path d="${va(s,s,84,o,a)}" class="pod-track"/>
        <g class="pod-ticks">${vb(s,s,72,78,o,a,24,4)}</g>
        <path d="${va(s,s,84,o,a)}" class="pod-fill ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${va(s,s,84,o,a)}" class="pod-glow ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${va(s,s,92,o,a)}" class="pod-zone" pathLength="100"/>
        <path d="${va(s,s,63,o+8,a-8)}" class="pod-inner" pathLength="100"/>
        <line x1="${s}" y1="${s}" x2="${s}" y2="${s-92}" class="pod-needle"/>
      </svg>`;this.speedPod=on("div","rr-pod rr-pod-speed",c("spd","f-speed")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">MPH</div></div>
      <div class="rr-pod-tag">VELOCITY</div>`),this.boostPod=on("div","rr-pod rr-pod-boost",c("bst","f-boost")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">BOOST</div></div>
      <div class="rr-pod-tag">COLD-GAS</div>`),t.append(this.boostPod,this.speedPod),this.shiftEl=on("div","rr-shift",`
      <div class="rr-shift-leds">${"<i></i>".repeat(10)}</div>
      <div class="rr-shift-row"><span class="rr-shift-g"><small>GEAR</small><b>1</b></span><span class="rr-shift-l">SHIFT</span></div>`),t.append(this.shiftEl);const l=(f,d)=>f.querySelector(d);this.sp={fill:l(this.speedPod,".pod-fill"),glow:l(this.speedPod,".pod-glow"),v:l(this.speedPod,".rr-pod-v"),needle:l(this.speedPod,".pod-needle"),zone:l(this.speedPod,".pod-zone"),inner:l(this.speedPod,".pod-inner")},this.bp={fill:l(this.boostPod,".pod-fill"),glow:l(this.boostPod,".pod-glow"),v:l(this.boostPod,".rr-pod-v"),u:l(this.boostPod,".rr-pod-u"),tag:l(this.boostPod,".rr-pod-tag"),needle:l(this.boostPod,".pod-needle"),zone:l(this.boostPod,".pod-zone"),inner:l(this.boostPod,".pod-inner")},this.popLayer=on("div","rr-pops"),t.append(this.popLayer),this.popPool=[];for(let f=0;f<4;f++){const d=on("div","rr-pop",'<div class="rr-pop-bar rr-pop-bar-a"></div><div class="rr-pop-txt"><span class="rr-pop-c rr-pop-m"></span><span class="rr-pop-c rr-pop-y"></span><span class="rr-pop-main"></span></div><div class="rr-pop-sub"></div><div class="rr-pop-bar rr-pop-bar-b"></div>');d.style.display="none",this.popLayer.append(d),this.popPool.push(d)}this.chips=on("div","rr-chips"),t.append(this.chips),this.chipPool=[];for(let f=0;f<3;f++){const d=on("div","rr-tag");d.style.display="none",this.chips.append(d),this.chipPool.push(d)}this.title=on("div","rr-title",`
      <div class="rr-title-kicker">A ROADSTER DEMO RUN</div>
      <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
      <div class="rr-title-rule"><i></i></div>`),this.titleScrim=on("div","rr-title-scrim"),this.start=on("div","rr-start",`
      <div class="rr-press">PRESS START</div>
      <div class="rr-title-hint"><b>HOLD</b> TO REV &nbsp;·&nbsp; <b>RELEASE</b> ON GO</div>`),this.specs=on("div","rr-specs",`
      <div class="rr-spec"><span class="rr-lbl">0–60 MPH</span><b>&lt;1.0<small>S</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">TOP SPEED</span><b>250+<small>MPH</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">THRUSTERS</span><b>COLD<small>GAS</small></b></div>`),this.specCells=[...this.specs.children],this.count=on("div","rr-count",`
      <i class="rr-count-wave"></i>
      <svg viewBox="0 0 200 200" class="rr-count-ring"><circle cx="100" cy="100" r="86" class="cr-bg"/><circle cx="100" cy="100" r="86" class="cr-fg" pathLength="100"/></svg>
      <div class="rr-count-n">3</div>
      <div class="rr-tree"><i></i><i></i><i></i></div>
      <div class="rr-count-l">HOLD TO REV</div>`),t.append(this.titleScrim,this.title,this.start,this.specs,this.count),this.countN=this.count.querySelector(".rr-count-n"),this.countL=this.count.querySelector(".rr-count-l"),this.countRing=this.count.querySelector(".cr-fg"),this.countWave=this.count.querySelector(".rr-count-wave"),this.treeLights=[...this.count.querySelectorAll(".rr-tree i")],this.results=on("div","rr-results",`
      <div class="rr-card">
        <i class="rr-card-sweep"></i>
        <div class="rr-card-head"><span class="rr-card-k">RUN COMPLETE</span><span class="rr-card-flag"></span></div>
        <div class="rr-card-top">
          <div class="rr-card-title">FINISH</div>
          <div class="rr-rank"><span class="rr-lbl">RANK</span><b class="rr-r-rank">S</b></div>
        </div>
        <div class="rr-card-time"><div class="rr-card-tl"><span class="rr-lbl">LAP TIME</span><b class="rr-r-time">0:00.00</b></div><div class="rr-record">NEW RECORD</div></div>
        <div class="rr-card-grid">
          <div><span class="rr-lbl">SCORE</span><b class="rr-r-score">0</b></div>
          <div><span class="rr-lbl">BEST</span><b class="rr-r-best">—</b></div>
          <div><span class="rr-lbl">LAUNCH</span><b class="rr-r-launch">—</b></div>
          <div><span class="rr-lbl">FLIPS</span><b class="rr-r-shifts">—</b></div>
          <div><span class="rr-lbl">FLEET FLIPPED</span><b class="rr-r-rings">—</b></div>
          <div><span class="rr-lbl">MAX COMBO</span><b class="rr-r-combo">—</b></div>
        </div>
        <div class="rr-card-foot"><span class="rr-wm-a">ROADSTER</span><span class="rr-replay">ROADSTER.KALIBRIO.COM</span></div>
        <div class="rr-card-acts">
          <button type="button" class="rr-btn rr-btn-share" aria-label="Share your score"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg><span>SHARE</span></button>
          <button type="button" class="rr-btn rr-btn-again" aria-label="Play again"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5"/></svg><span>PLAY AGAIN</span></button>
        </div>
        <div class="rr-card-toast" aria-live="polite"></div>
      </div>`),this.credit=on("div","rr-credit","Fan-made game · not affiliated with Tesla"),t.append(this.results,this.credit),Oa.has("og")&&(Xe(t,"is-og",!0),t.append(on("div","rr-og",`
        <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
        <div class="rr-og-tag">LAND THE FLIP <i>·</i> JUMP THE FLEET <i>·</i> 0-60 IN 0.81S</div>`)));const h=f=>this.results.querySelector(f);this.rr={card:h(".rr-card"),time:h(".rr-r-time"),score:h(".rr-r-score"),best:h(".rr-r-best"),launch:h(".rr-r-launch"),shifts:h(".rr-r-shifts"),rings:h(".rr-r-rings"),combo:h(".rr-r-combo"),record:h(".rr-record"),replay:h(".rr-replay"),title:h(".rr-card-title"),flag:h(".rr-card-flag"),rank:h(".rr-r-rank"),rankBox:h(".rr-rank"),cells:[...this.results.querySelectorAll(".rr-card-grid > div, .rr-card-time, .rr-card-foot, .rr-card-acts")]},this.cue=on("div","rr-cue",'<div class="rr-cue-row"><b class="rr-cue-k">TAP</b><span class="rr-cue-t">THRUSTERS</span></div><i class="rr-cue-bar"><i></i></i>'),this.cueK=this.cue.querySelector(".rr-cue-k"),this.cueT=this.cue.querySelector(".rr-cue-t"),this.cueBar=this.cue.querySelector(".rr-cue-bar > i"),this.z60=on("div","rr-z60",'<span class="rr-lbl">0-60 MPH</span><b class="rr-z60-v">0.00</b><small>S</small>'),this.z60V=this.z60.querySelector(".rr-z60-v"),t.append(this.cue,this.z60),this.flash=on("div","rr-beatflash"),t.append(this.flash),this.launchLbl=on("div","rr-launch-lbl"),t.append(this.launchLbl),this.whiteFlash=on("div","rr-whiteflash"),t.append(this.whiteFlash),this.scoreDigits=[...this.scoreBox.querySelectorAll(".rr-d")],this.comboPop=this.scoreBox.querySelector(".rr-combo-pop"),this.comboPopN=this.comboPop.querySelector("b"),this.comboPopL=this.comboPop.querySelector("span"),this.comboEl=this.scoreBox.querySelector(".rr-combo"),this.comboX=this.scoreBox.querySelector(".rr-combo-x"),this.comboBar=this.scoreBox.querySelector(".rr-combo-bar > i"),this.timeV=this.timeBox.querySelector(".rr-time-v"),this.splitEl=this.timeBox.querySelector(".rr-split"),this.secEl=this.timeBox.querySelector(".rr-sec"),this.chipA=this.center.querySelector(".rr-chip-a"),this.chipB=this.center.querySelector(".rr-chip-b"),this.chipEl=this.center.querySelector(".rr-chip"),this.leds=[...this.shiftEl.querySelectorAll(".rr-shift-leds i")],this.shiftL=this.shiftEl.querySelector(".rr-shift-l"),this.shiftG=this.shiftEl.querySelector(".rr-shift-g b");const r=()=>{if(!this._resultsVisible||this.t<this._resultsAt+.8)return;for(const v of this.replayFns)try{v()}catch{}if(this.replayFns.length)return;window.dispatchEvent(new CustomEvent("rr:replay"));const f=window.__game,d=f&&(f.restart||f.replay||f.reset);if(d)try{d.call(f)}catch{}};window.addEventListener("pointerdown",r,{passive:!0}),this.shareBtn=h(".rr-btn-share"),this.againBtn=h(".rr-btn-again"),this.toast=h(".rr-card-toast");const u=f=>!!(f.target&&f.target.closest&&f.target.closest(".rr-btn-share"));window.addEventListener("pointerdown",f=>{this._resultsVisible&&u(f)&&f.stopImmediatePropagation()},{capture:!0}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&document.activeElement===this.shareBtn&&f.stopImmediatePropagation()},{capture:!0}),this.shareBtn.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this.share()}),this.againBtn.addEventListener("click",f=>{f.detail===0&&r()}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&r()}),window.addEventListener("rr:event",f=>{const d=f.detail||{};d.name&&this.event(d.name,d)});try{const f=localStorage.getItem("rr.best");this.best=f?+f:null}catch{this.best=null}return this.mounted=!0,this.render(0,{}),requestAnimationFrame(this._loop),this}onReplay(t){typeof t=="function"&&this.replayFns.push(t)}bindGameplay(t){return this._gp=t,this}onGameplayEvent(t){if(!t||!t.type)return;this._sawEvent=!0,t.type==="launch"&&t.rating&&(this._launchGrade=t.rating);const e={fleet:"fleet",upside:"whoosh",ringmiss:"late",offbeat:"late"};if(e[t.type]&&Fn.playing&&Math.abs((Se(t.t)??0)-Fn.time())<.3)try{Fn._play(e[t.type],{dur:1.2})}catch{}t.text&&(this.gpEvents=(this.gpEvents||[]).filter(n=>Se(t.t)===void 0||n.t0<=t.t),this.gpEvents.push({text:t.text,t0:Se(t.t)??this.t,kind:t.type,style:t.style}),this.gpEvents.length>16&&this.gpEvents.shift())}update(t,e){typeof t=="object"&&t&&(e=t,t=Se(e.t??e.time)),this.lastExternal=performance.now(),this.render(Se(t)??this.t,e||{})}popup(t,e={}){const n=Se(e.t)??this.t;this.events.push({t:n,text:String(t),sub:e.sub||"",tone:e.tone||"cyan",size:e.size||"l",dur:Se(e.dur)??3.5,key:e.key}),this.events.length>24&&this.events.splice(0,this.events.length-24)}chip(t,e={}){const n=Se(e.t)??this.t;this.events.push({t:n,text:t,sub:e.sub||"",tone:e.tone||"green",chip:!0,dur:Se(e.dur)??2.4,key:e.key})}event(t,e={}){const n=String(t).toLowerCase(),s=Se(e.t)??this.t;this._sawEvent=!0;const o=this.events.length;this._event(n,e,s);for(let a=o;a<this.events.length;a++)this.events[a].fromEvent=!0}_event(t,e,n){if(t==="shift"){const s=String(e.grade||"PERFECT").toUpperCase();this.chip(s==="PERFECT"?"PERFECT SHIFT":s==="GOOD"?"GOOD SHIFT":"LATE SHIFT",{t:n,tone:s==="PERFECT"?"green":s==="GOOD"?"cyan":"orange",sub:e.points?"+"+e.points:""})}else t==="launch"?this._launchGrade=String(e.grade||"PERFECT").toUpperCase():t==="combo"?+(e.n??e.combo):t==="pylon"||t==="hit"?this.chip("COMBO LOST",{t:n,tone:"orange"}):t==="airtime"?this.popup("AIR TIME",{t:n,tone:"cyan",size:"l",dur:2.6,sub:e.secs?e.secs.toFixed(2)+" s":""}):t==="record"&&(this._record=!0)}_readGame(){const t=window.__game||{};if(!window.__game&&!this._gp)return null;let e;try{e=Se(t.time)??Se(t.t)??Se(t.musicTime)??(typeof t.getTime=="function"?Se(t.getTime()):void 0)??Se(t.clock&&(t.clock.t??t.clock.time))??Se(t.state&&(t.state.t??t.state.time))}catch{}let n;try{n=this._gp&&this._gp.state||typeof t.hudState=="function"&&t.hudState()||t.gp&&t.gp.state||t.gameplay&&t.gameplay.state||typeof t.getState=="function"&&t.getState()||t.state&&typeof t.state=="object"&&t.state||{},e===void 0&&Se(n.t)!==void 0&&(e=n.t)}catch{n={}}return{t:e,s:n}}_poll(t){const e=this._readGame();if(!e&&t===void 0&&!Fn.playing)return;let n=Se(t)??(e&&e.t);n===void 0&&Fn.playing&&(n=Fn.time()),n===void 0&&(n=this._seekT??0);const s=e&&e.s||{};if(this.render(n,s),performance.now()-Fn.lastTickAt>250)try{Fn.tick(n,this._merged||s)}catch{}}_wrapSeek(){const t=window.__game;if(!t||typeof t.seek!="function"||t.seek.__hudWrapped)return;const e=t.seek,n=this,s=function(o){return n._seekT=+o,Promise.resolve(e.apply(this,arguments)).then(a=>(performance.now()-n.lastExternal>250&&n._poll(+o),a))};s.__hudWrapped=!0;try{t.seek=s}catch{}}render(t,e={}){if(!this.mounted)return;t<this.prevT-.5&&(this.events=this.events.filter(tt=>tt.t<=t),this._record=!1,this.recordSaved=!1),this.prevT=t,this.t=t;const n=gb(t),s={};for(const tt in n)s[tt]=n[tt];for(const tt in e)e[tt]!==void 0&&e[tt]!==null&&(s[tt]=e[tt]);if(!Array.isArray(e.popups)){let tt=null;try{const Ht=window.__game;tt=this._gp&&this._gp.state||Ht&&(Ht.gameplay&&Ht.gameplay.state||Ht.gp&&Ht.gp.state)||null}catch{}if(tt&&Array.isArray(tt.popups)){e={section:tt.section,launched:tt.launched,launchT:tt.launchT,finishT:tt.finishT,airborne:tt.airborne,results:tt.results,mph:tt.mph,launch:tt.launch,finished:tt.finished,...e,popups:tt.popups};for(const Ht in e)e[Ht]!==void 0&&e[Ht]!==null&&(s[Ht]=e[Ht])}}const o=Array.isArray(e.popups)||Se(e.mph)!==void 0;o&&(e.shift&&typeof e.shift=="object"&&(s.shift={phase:Se(e.shift.light)??Se(e.shift.phase),window:!!(e.shift.green??e.shift.window),active:e.shift.active!==!1}),Se(e.perfectShifts)!==void 0&&(s.shifts=e.perfectShifts),e.results&&typeof e.results=="object"&&(s.results=e.results),e.launched||(s.launchT=void 0),s._gpLaunch=e.launch||null),this._gpState=o;const a=Se(e.mph)??Se(e.speed)??Se(e.speedMph)??n.speed;s.speed=a,s.boost=Se(e.boost)??Se(e.boostMeter)??n.boost,s.rev=Se(e.rev)??Se(e.revLevel)??n.rev,this._merged=s;const c=t/ui,l=c-Math.floor(c),h=Math.pow(1-l,3);this.root.style.setProperty("--pulse",h.toFixed(3));let r=0,u=0;try{const tt=window.__game,Ht=this._gp&&this._gp.state&&this._gp.state.cam||tt&&tt.gp&&tt.gp.state&&tt.gp.state.cam;Ht&&(r=Se(Ht.shake)??0,u=Se(Ht.punch)??0)}catch{}const f=Ne(r*.9+u*.012);Me(this.root,"--shx",(Math.sin(t*73.1)*f*7).toFixed(2)+"px"),Me(this.root,"--shy",(Math.cos(t*57.7)*f*5).toFixed(2)+"px"),Me(this.root,"--ab",(.6+f*5).toFixed(2));const d=o?e.finished?(Se(e.finishT)??t)+em:1/0:ub;this._resultsAt=d;const v=o?e.finished?Se(e.finishT)??t:1/0:pr;this._finishing=t>=v,Xe(this.root,"is-finish",this._finishing);const g=t-v;Me(this.whiteFlash,"opacity",(this._finishing?.75*Math.pow(Ne(1-g/.34),2):0).toFixed(3));const m=t<ks,p=t>=d,_=c<9.6;Xe(this.root,"is-intro",m),Xe(this.root,"is-title",_),Xe(this.root,"is-results",p),Xe(this.root,"is-flight",c>=96&&c<128);const M=typeof s.section=="string"&&Pd[s.section]?[0,...Pd[s.section]]:db(c);tn(this.chipA,M[1]),tn(this.chipB,M[2]),tn(this.secEl,"");const y=o?e.launched?Se(e.launchT)??ks:void 0:ks,R=o?e.finished?Se(e.finishT)??t:t:Math.min(t,pr),U=y===void 0?0:Math.max(0,R-y);this._lap=U,this._finishT=o?e.finished?Se(e.finishT)??t:void 0:t>=pr?pr:void 0,tn(this.timeV,Ta(U));const D=c>=48&&c<60;Xe(this.splitEl,"on",D),tn(this.splitEl,D?"CP1  "+Ta(rs(48)-(y??ks)):"");const N=Math.max(0,Math.floor(Se(s.score)??0)),P=String(Math.min(N,9999999)).padStart(7,"0"),x=Math.min(6,P.length-String(N).length);this.scoreDigits.forEach((tt,Ht)=>{tn(tt,P[Ht]),Xe(tt,"ghost",Ht<x)});const z=Math.floor(Se(s.combo)??0);Xe(this.comboEl,"on",z>=2),tn(this.comboX,"x"+z),Me(this.comboBar,"width",(Ne(z%5/5+(z%5===0&&z>0?1:0))*100).toFixed(0)+"%"),!o&&z>this.prevCombo&&z>=10&&z%10===0&&!this._sawEvent&&this.events.push({t:this._comboT(z,t),text:`x${z} COMBO`,lane:"combo",dur:1.5}),this.prevCombo=z;const B=c>=16&&c<47.5&&(!o||s.section==="launch"&&!!e.launched&&!e.airborne);if(Xe(this.shiftEl,"on",B),B){let tt=Se(s.shift&&s.shift.phase);tt===void 0&&(tt=(c-16)%4/4);const Ht=s.shift&&typeof s.shift.window=="boolean"?s.shift.window:tt>.82,se=Ht?this.leds.length:Math.floor(Ne(tt/.9)*this.leds.length+.001);this.leds.forEach((ae,mt)=>{Xe(ae,"on",mt<se),Xe(ae,"win",Ht)}),Xe(this.shiftEl,"win",Ht),tn(this.shiftL,Ht?"SHIFT!":se>=7?"READY":"SHIFT");const ue=Math.max(1,Math.floor(Se(s.gear)??1+(Se(s.shifts)??0)));tn(this.shiftG,String(ue)),Me(this.shiftEl,"--kick",(tt<.12&&c>17?1-tt/.12:0).toFixed(3))}const et=Ne(a/300);Me(this.sp.fill,"stroke-dasharray",`${(et*100).toFixed(2)} 100`),Me(this.sp.glow,"stroke-dasharray",`${(et*100).toFixed(2)} 100`),Me(this.sp.needle,"transform",`rotate(${(-135+270*et).toFixed(2)}deg)`),tn(this.sp.v,String(Math.round(a))),Xe(this.speedPod,"redline",a>255),Me(this.sp.zone,"stroke-dasharray","0 100"),Me(this.sp.inner,"stroke-dasharray",`${(Ne(c%4/4)*100).toFixed(1)} 100`);const vt=c>=8&&c<16.5,wt=c>=88&&c<96;let pt=Ne(vt?s.rev:s.boost);if(wt){const tt=Math.floor(c-88),Ht=c-88-tt;pt=Math.max(pt*.25,Ne((tt+Ar(Ne(Ht/.22)))/6.5))}else c>=96&&c<97&&(pt=Math.max(pt,1-Ne(c-96.5)));Xe(this.boostPod,"charging",wt),Me(this.boostPod,"--kick",(wt?h:0).toFixed(3)),Xe(this.boostPod,"rev",vt),Me(this.bp.fill,"stroke-dasharray",`${(pt*100).toFixed(2)} 100`),Me(this.bp.glow,"stroke-dasharray",`${(pt*100).toFixed(2)} 100`),Me(this.bp.needle,"transform",`rotate(${(-135+270*pt).toFixed(2)}deg)`),tn(this.bp.v,String(Math.round(pt*100))),tn(this.bp.u,vt?"REV":"BOOST"),tn(this.bp.tag,vt?"LAUNCH":wt?pt>=.999?"READY":"ARMING":"COLD-GAS");const Lt=Array.isArray(e.revTarget)?e.revTarget:this._gpState?[.86,1]:[.78,.94];vt?(Me(this.bp.zone,"stroke-dasharray",`0 ${(Lt[0]*100).toFixed(1)} ${((Lt[1]-Lt[0])*100).toFixed(1)} 100`),Xe(this.boostPod,"inzone",pt>=Lt[0]&&pt<=Lt[1])):(Me(this.bp.zone,"stroke-dasharray","0 100"),Xe(this.boostPod,"inzone",!1)),Xe(this.boostPod,"full",!vt&&pt>.97),Me(this.bp.inner,"stroke-dasharray",`${(c>=88&&c<96?(c-88)/8*100:0).toFixed(1)} 100`),Xe(this.root,"hide-pods",_||p||this._finishing);try{this.deck.update(!1,Ta(U),z,h,z>=10)}catch{}this._renderTitle(t,c,l),this._renderCount(t,c,l,s),this._renderCue(t,e),this._renderPops(t,c,s),this._renderResults(t,s),Me(this.flash,"opacity",(m||p?0:h*(c>=16?.1:0)).toFixed(3))}_renderCue(t,e){const n=e&&e.cue,s=!!(n&&n.active&&!this._finishing);if(Xe(this.cue,"on",s),s){const c=String(n.text||"").split(":");tn(this.cueK,n.done&&n.grade?String(n.grade):c.length>1?c[0].trim():""),tn(this.cueT,n.done&&n.grade?n.kind==="hold"?"LANDING":"KICKFLIP":c.length>1?c.slice(1).join(":").trim():n.text);const l=!n.done&&Math.abs(t-(Se(n.tHit)??t))<.14;Xe(this.cue,"hot",l||n.kind==="hold"&&!!e.holding&&!n.done),Xe(this.cue,"done",!!n.done),Xe(this.cue,"hold",n.kind==="hold"),Me(this.cueBar,"width",(Ne(Se(n.k)??0)*100).toFixed(1)+"%")}this._cueDodge(s,e&&e.carScreen);const o=e&&e.zero60,a=!!(o&&o.show)&&!this._finishing;Xe(this.z60,"on",a),a&&(tn(this.z60V,(Se(o.t)??0).toFixed(2)),Xe(this.z60,"frozen",!!o.frozen))}_comboT(t,e){if(!this._sawEvent){const n=96+2*t;if(Math.abs(rs(n)-e)<3)return rs(n)}return e}_renderTitle(t,e,n){const s=e<9.6,o=Ne((e-8.8)/.8);Me(this.specs,"display",s?"":"none");const a=Ar(Ne(t/.6));if(Me(this.title,"opacity",s?(a*(1-o)).toFixed(3):"0"),Me(this.title,"display",s?"":"none"),Me(this.start,"display",s?"":"none"),Me(this.titleScrim,"display",s?"":"none"),Me(this.start,"opacity",s?(a*(1-o)).toFixed(3):"0"),Me(this.titleScrim,"opacity",s?(1-o).toFixed(3):"0"),!s)return;Me(this.title,"transform",`translate(-50%, -50%) scale(${(.96+.04*a+.08*o).toFixed(3)})`);const c=this.start.querySelector(".rr-press");Xe(c,"lit",e<2?!0:n<.5),Me(this.title,"--wipe",(Ne(t/.5)*115).toFixed(1)+"%"),Xe(this.title,"wiped",t>=.5),this.specCells.forEach((l,h)=>{const r=es(Ne((e-1-h*.5)/.9));Me(l,"opacity",(Ne((e-1-h*.5)/.4)*(1-o)).toFixed(3)),Me(l,"transform",`translateY(${((1-r)*30).toFixed(1)}px)`)})}_renderCount(t,e,n,s){let o=!1,a="",c="",l=0,h=1,r=1,u=!1;if(e>=10&&e<16){const m=Math.floor((e-10)/2),p=(e-10-m*2)/2;o=!0,a=String(3-m),c="HOLD TO REV",l=1-p,h=1.35-.35*es(p*4),r=1-.35*Ne((p-.7)/.3)}else if(e>=16&&e<17.4){const m=e-16;o=!0,u=!0,a="GO",l=0,c="";const p=Ne((m-1)/.4);h=1.5-.5*es(m*2.2)+.9*p*p,r=1-p}const d=e>=16&&e<18?this._gpState?s._gpLaunch:this._launchGrade||s.launch||"PERFECT":null;if(!d)Me(this.launchLbl,"display","none");else{const m=String(d).toUpperCase();Me(this.launchLbl,"display",""),tn(this.launchLbl,m+" LAUNCH");const p="rr-launch-lbl g-"+m.toLowerCase();this.launchLbl.__cn!==p&&(this.launchLbl.__cn=p,this.launchLbl.className=p);const _=es(Ne((e-16)/.35));Me(this.launchLbl,"transform",`translate(-50%, 0) scale(${(1.4-.4*_).toFixed(3)}) skewX(-10deg)`),Me(this.launchLbl,"opacity",Ne((e-16)/.08).toFixed(3))}if(Me(this.count,"display",o?"":"none"),!o)return;Xe(this.count,"go",u);const v=u?3:Math.floor((e-10)/2)+1;this.treeLights.forEach((m,p)=>{Xe(m,"on",p<v),Xe(m,"g",u)});const g=u?(e-16)/1.6:(e-10)%2/1.2;Me(this.countWave,"transform",`scale(${(.8+1.1*Ar(g)).toFixed(3)})`),Me(this.countWave,"opacity",(Ne(1-g)*(u?1:.7)).toFixed(3)),Me(this.count,"--hit",Math.pow(1-Ne(u?(e-16)/.5:(e-10)%2/.5),2).toFixed(3)),tn(this.countN,a),tn(this.countL,c),Me(this.countRing,"stroke-dasharray",`${(l*100).toFixed(2)} 100`),Me(this.count,"transform",`translate(-50%, -50%) scale(${h.toFixed(3)})`),Me(this.count,"opacity",r.toFixed(3))}_activeCallouts(t,e){const n=[],s=Array.isArray(e.popups)?e.popups:this.gpEvents&&this.gpEvents.length?this.gpEvents:null;if(s){for(const o of s){const a=mb[o.kind]||(o.style==="bad"?{chip:!0,tone:"orange",dur:1}:o.style==="big"?{tone:"cyan",size:"l",pri:2,dur:2}:{chip:!0,tone:"cyan",dur:1.2});if(a.skip||!o.text)continue;if(a.lane==="combo"){const h=+(String(o.text).match(/\d+/)||[0])[0];if(!(h>=10&&h%10===0))continue}const c=(Se(o.t0)??0)+(a.delay||0),l=Math.min(2.4-(a.delay||0),a.dur||1.5);t<c||t>=c+l||n.push({chip:!!a.chip,lane:a.lane,pri:a.pri??1,slam:!!a.slam,t:c,dur:l,text:a.text||o.text,sub:a.subFn?a.subFn(o,e,this):a.sub||"",tone:a.tone||"cyan",size:a.size||"l",flip:!!a.flip,wrap:!!a.wrap})}for(const o of this.events)!o.fromEvent&&t>=o.t&&t<o.t+o.dur&&n.push(o);return n}for(const o of pb){const a=rs(o.b),c=rs(o.dur);t>=a&&t<a+c&&n.push({...o,pri:o.text==="FINISH"?9:3,slam:o.text==="FINISH",t:a,dur:c,sub:o.subFn?o.subFn():o.sub||""})}if(!this._sawEvent)for(const o of nl){const a=rs(o);t>=a&&t<a+rs(3)&&n.push({chip:!0,t:a,dur:rs(3),text:"PERFECT SHIFT",sub:"+500",tone:"green"})}for(const o of this.events)t>=o.t&&t<o.t+o.dur&&n.push(o);return n}_cueDodge(t,e){if(!t||!e||!e.on||!Number.isFinite(e.y)){Me(this.cue,"top",""),this._cueFade(1);return}const n=this.root&&this.root.clientHeight||window.innerHeight||1,s=this.root&&this.root.clientWidth||window.innerWidth||1;Me(this.cue,"top","");const o=this.cue.offsetTop/n,a=(this.cue.offsetHeight||0)/n,c=(1-e.y)/2,l=Math.max(.03,(e.r||0)*.5*(s>n?1:.62)),h=.012,r=c-l-h,u=c+l+h,f=g=>g<u&&g+a>r;let d=o,v=1;if(f(o)){const g=u,m=r-a,p=s>n?.9:.8;g+a<=p?d=g:m>=.2?d=m:v=0}Me(this.cue,"top",d===o?"":(d*100).toFixed(2)+"%"),this._cueFade(v)}_cueFade(t){this.__cueF!==t&&(this.__cueF=t,this.cue.style.opacity=t<1?String(t):"")}_popDodge(t,e,n){if(!e||!e.on||!Number.isFinite(e.y))return this._popSlot=null,[0,1];const s=this.root&&this.root.clientHeight||window.innerHeight||1,o=this.popLayer.offsetTop/s,a=(t.offsetHeight||0)/s/2+.015,c=(1-e.y)/2,l=Math.max(.03,(e.r||0)*.5*.75),h=v=>Math.abs(v-c)<a+l;let r=.155;try{const v=this.scoreBox&&this.scoreBox.getBoundingClientRect();v&&v.bottom>0&&(r=Math.max(r,v.bottom/s+a+.01))}catch{}const u=[o,r,.62];let f=this._popSlot&&this._popSlot.key===n?this._popSlot.y:o,d=1;if(h(f)){const v=u.filter(g=>!h(g));v.length?f=v.sort((g,m)=>Math.abs(g-o)-Math.abs(m-o))[0]:(f=u.sort((g,m)=>Math.abs(m-c)-Math.abs(g-c))[0],d=.25)}return this._popSlot={key:n,y:f},[(f-o)*s,d]}_renderPops(t,e,n){const s=this._activeCallouts(t,n),a=s.filter(u=>!u.chip&&!u.lane).sort((u,f)=>(f.pri??1)-(u.pri??1)||f.t-u.t)[0],c=s.filter(u=>u.lane==="combo").sort((u,f)=>f.t-u.t)[0],l=this._finishing?[]:s.filter(u=>u.chip).sort((u,f)=>f.t-u.t).slice(0,this.chipPool.length);this.popPool.forEach((u,f)=>{f>0&&Me(u,"display","none")});const h=this.popPool[0];this._popKey=a?a.text+"@"+a.t.toFixed(3):"";let r=!1;if(!a||t>=this._resultsAt)Me(h,"display","none");else{Me(h,"display","");const u=t-a.t,f=u/a.dur,d=Ne(u/(a.slam?.1:.16)),v=a.slam?0:Ne(a.dur-u<.12?1-(a.dur-u)/.12:0),g=(a.slam?2.6-1.6*es(d):1.7-.7*es(d))*(1-.35*v),m=Ne(u/.04)*(1-v),p=d<1?(1-d)*(a.slam?14:6)*Math.sin(u*90):0,_=`rr-pop tone-${a.tone} size-${a.size}${a.wrap?" wrap":""}${a.flip?" flip":""}${a.slam?" slam":""}${a.sub?" has-sub":""}`;h.__cn!==_&&(h.__cn=_,h.className=_);const M=String(a.text).replace(/^x(\d)/i,"×$1").replace(/\bx(\d+)\b/g,"×$1");for(const U of h.querySelectorAll(".rr-pop-c, .rr-pop-main"))tn(U,M);tn(h.querySelector(".rr-pop-sub"),a.sub||"");const[y,R]=this._popDodge(h,n.carScreen,this._popKey);Me(h,"transform",`translate(-50%, -50%) translate(${p.toFixed(1)}px, ${y.toFixed(1)}px) scale(${g.toFixed(3)})${a.flip?` rotate(${(180*(1-es(Ne((u-.08)/.4)))).toFixed(1)}deg)`:""}`),Me(h,"opacity",(m*R).toFixed(3)),r=!!this.chipB&&String(a.text).toUpperCase().includes(String(this.chipB.textContent||"").trim().toUpperCase())&&String(this.chipB.textContent||"").trim().length>2,Me(h,"--split",((1-d)*10+1.5+2*Math.pow(1-Ne(e%1),4)*(f<.9?1:0)).toFixed(2)+"px"),Me(h,"--bar",(Ar(Ne(u/.35))*100).toFixed(1)+"%")}if(Me(this.chipEl,"opacity",r?"0":""),!c||this._finishing)Xe(this.comboPop,"on",!1);else{const u=t-c.t,f=u/c.dur,d=(String(c.text).match(/\d+/)||["0"])[0];tn(this.comboPopN,"×"+d),tn(this.comboPopL,"COMBO"),Xe(this.comboPop,"on",!0);const v=es(Ne(u/.2)),g=Ne((f-.8)/.2);Me(this.comboPop,"opacity",((1-g)*Ne(u/.04)).toFixed(3)),Me(this.comboPop,"transform",`translateX(${((1-v)*-30).toFixed(1)}px) scale(${(1.25-.25*v).toFixed(3)})`)}this.chipPool.forEach((u,f)=>{const d=l[f];if(!d){Me(u,"display","none");return}Me(u,"display","");const v=t-d.t,g=v/d.dur,m=es(Ne(v/.18)),p=Ne((g-.75)/.25),_=`rr-tag tone-${d.tone}`,M=`<b>${String(d.text).replace(/\bx(\d+)/g,"×$1")}</b>${d.sub?`<span>${d.sub}</span>`:""}`;u.__cn!==_&&(u.__cn=_,u.className=_),u.__h!==M&&(u.__h=M,u.innerHTML=M),Me(u,"transform",`translateX(${((1-m)*-40).toFixed(1)}px) translateY(${(f*115-p*40).toFixed(0)}%)`),Me(u,"opacity",((1-p)*Ne(v/.05)).toFixed(3))})}_renderResults(t,e){const n=t>=this._resultsAt;if(this._resultsVisible=n,Me(this.results,"display",n?"":"none"),!n)return;const s=t-this._resultsAt,o=e.results||{},a=es(Ne(s/.3));Me(this.results,"opacity",Ne(s/.12).toFixed(3)),Me(this.rr.card,"transform",`translateY(${((1-a)*60).toFixed(1)}px) scale(${(.9+.1*a).toFixed(3)})`);const c=Math.floor(Se(o.score)??Se(e.score)??0),l=Math.floor(c*Ar(Ne(s/.32)));tn(this.rr.time,Ta(Se(o.time)??this._lap)),tn(this.rr.score,Bc(l)),this._shareScore=c;const h=(o.launch||this._launchGrade||e.launch||"PERFECT").toString().toUpperCase();tn(this.rr.launch,Se(o.zero60)!==void 0?`${h} · ${Se(o.zero60).toFixed(2)}S`:h),tn(this.rr.shifts,`${o.flips??e.flips??"—"}`),tn(this.rr.rings,Se(o.fleetFlipped)!==void 0?`${o.fleetFlipped} VEHICLES`:`${o.rings??e.rings??"—"}/${o.ringsTotal??e.ringsTotal??15}`),tn(this.rr.combo,"×"+(o.maxCombo??e.maxCombo??e.combo??0));const r={PERFECT:1,GOOD:.65,LATE:.3}[h]??.5,u=Se(o.flips)!==void 0?Se(o.flips)/13:(Se(o.perfectShifts)??Se(e.shifts)??0)/Math.max(1,Se(e.shiftsTotal)??7),f=(Se(o.rings)??Se(e.rings)??0)/Math.max(1,Se(o.ringsTotal)??Se(e.ringsTotal)??15),d=(r+Ne(u)+Ne(f))/3,v=d>=.9?"S":d>=.75?"A":d>=.55?"B":"C";tn(this.rr.rank,v),this._shareRank=v,this._shareFleet=Math.floor(Se(o.fleetFlipped)??0),Xe(this.rr.rankBox,"rank-s",v==="S");const g=Ne((s-.1)/.18);Me(this.rr.rankBox,"opacity",g.toFixed(3)),Me(this.rr.rankBox,"transform",`scale(${(2.2-1.2*es(g)).toFixed(3)}) rotate(${((1-g)*-12).toFixed(1)}deg)`),this.rr.cells.forEach((_,M)=>{const y=Ne((s-.04-M*.02)/.12);Me(_,"opacity",y.toFixed(3)),Me(_,"transform",`translateX(${((1-Ar(y))*-18).toFixed(1)}px)`)}),Me(this.rr.card,"--sweep",(-30+170*Ar(Ne((s-.04)/.24))).toFixed(1)+"%");let m=this._record||Se(e.best)===void 0&&(this.best===null||c>this.best);Oc&&(m=!0);const p=Oc?c:Math.max(c,Se(e.best)??this.best??0);if(tn(this.rr.best,Bc(m?l:p)),!Oc&&!this.recordSaved&&s>.6&&(this.recordSaved=!0,m)){try{localStorage.setItem("rr.best",String(c))}catch{}try{Fn.sfx("record")}catch{}}Xe(this.rr.record,"on",m&&s>.2),tn(this.rr.flag,""),Xe(this.rr.replay,"lit",s>.8?t/ui%1<.6:!0),Me(this.rr.record,"transform",`scale(${(1+.08*Math.pow(1-t/ui%1,3)).toFixed(3)}) rotate(-4deg)`)}shareText(){const t=Bc(Math.max(0,Math.floor(this._shareScore||0))),e=Number.isFinite(this._shareFleet)&&this._shareFleet>0?this._shareFleet:0,n=this._shareRank?`, rank ${this._shareRank}`:"";return`I ${e?`flipped ${e} Teslas`:"flipped the entire Tesla fleet"}${n} in Roadster Rush — score ${t}. Beat me 👉 ${Cd} #TeslaRoadster`}async share(){if(Oc)return;const t=this.shareText(),e={title:"Roadster Rush",text:t,url:Cd};try{if(navigator.share&&(!navigator.canShare||navigator.canShare(e)))return await navigator.share({title:e.title,text:t}),this._toast("SHARED")}catch(o){if(o&&o.name==="AbortError")return}const n="https://twitter.com/intent/tweet?text="+encodeURIComponent(t),s=document.createElement("a");s.href=n,s.target="_blank",s.rel="noopener noreferrer",document.body.append(s),s.click(),s.remove();try{navigator.clipboard&&(await navigator.clipboard.writeText(t),this._toast("COPIED · OPENING X"))}catch{}}_toast(t){this.toast&&(this.toast.textContent=t,this.toast.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toast.classList.remove("on"),1800))}preview(){this.mount();const t=Oa.get("bg");if(t){const s=on("img","rr-preview-bg");s.src=t,Object.assign(s.style,{position:"fixed",inset:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"0"}),document.body.prepend(s)}else document.body.style.background="radial-gradient(120% 70% at 50% 30%, #2a0f4a 0%, #0a0618 55%, #02010a 100%)";let e=null;const n=Oa.get("gp")==="1"?sb(()=>Promise.resolve().then(()=>Ay),void 0).then(s=>{e=s.createGameplay({autoplay:!0}),e.muted=!0}).catch(()=>{e=null}):Promise.resolve();window.__hudPreview={ready:n,seek:async s=>{await n,e&&e.seekTo?(e.seekTo(s,1/60),this.update(s,e.state)):this.update(s,{})}},this._previewMode=!0}}const Yr=typeof window<"u"&&window.__rrHud||new pf;if(typeof window<"u"){window.__rrHud=Yr;const i=()=>Yr.mount();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i,{once:!0}):i()}pf.prototype.setState=function(i,t){return this.update(i,t)};pf.prototype.frame=function(i,t){return this.update(i,t)};const nm=new URLSearchParams(location.search),mf=nm.has("capture"),_b=nm.get("autoplay")==="1",yb=136*Ui,im=134*Ui,Iu=yb+20,Mb=3.9,il=1/60,bb=document.getElementById("app")||document.body,qn=new M2({antialias:!1,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:mf});qn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));qn.setSize(window.innerWidth,window.innerHeight);qn.toneMapping=Ws;qn.outputColorSpace=In;qn.shadowMap.enabled=!1;qn.info.autoReset=!1;qn.domElement.id="gl";bb.appendChild(qn.domElement);const hs=new $a,$i=new li(50,window.innerWidth/window.innerHeight,.1,6e3);$i.position.set(0,1.4,7);const ji=dM({scene:hs,renderer:qn,camera:$i});if(!hs.environment){const i=new Xr(qn),t=new $a;t.background=new Xt(1182244),hs.environment=i.fromScene(t,.04).texture,i.dispose()}const sm={};function Sb(){const i=(l,h=1.2,r=0)=>{const u=Lo(Gi(l*Ui)).pos;return[u.x+r,u.y+h,u.z,l]},t={intro:[0,1.2,0,12],launch:i(36),reveal:i(52),flip:[Ve.flip.xLand,8,Ve.flip.zLand,70],build:i(92),mega:i(110,8),outro:i(133)},e=new hn,n=(l,h,r,u,f,d,v,g,m)=>{const p=new be(new yn(l,h),new $e({color:new Xt(r).multiplyScalar(u),side:je,fog:!1}));return p.position.set(f,d,v),p.rotation.set(g,m,0),e.add(p),p};n(16,60,16777215,1.5,0,16,0,Math.PI/2,0),n(60,1.6,16722600,2.2,-22,2.2,0,0,Math.PI/2),n(60,1.6,2287359,2.2,22,2.2,0,0,-Math.PI/2),n(40,.6,14542591,2,0,.9,26,0,0);const s=new op(256,{type:Ki,generateMipmaps:!1}),o=new sp(.3,4e3,s),a=new Xr(qn),c=$i.position.clone();hs.add(e,o);try{for(const[l,[h,r,u,f]]of Object.entries(t))$i.position.set(h,r,u),ji.update(f*Ui,1/60),e.position.set(h,r,u),o.position.set(h,r,u),o.update(qn,hs),sm[l]=a.fromCubemap(s.texture).texture}catch(l){console.warn("[main] probes",l)}hs.remove(e,o),e.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),s.dispose(),a.dispose(),$i.position.copy(c),ji.update(0,1/60)}Sb();const vr=UM({renderer:qn,envMap:ji.envMap||hs.environment});hs.add(vr.object);const fs=eb({renderer:qn,scene:hs,camera:$i}),Un=Ru({camera:$i,car:vr,world:ji,fx:fs,hud:Yr,audio:Fn,autoplay:_b,driveCar:!0});ji.setCamera&&ji.setCamera($i);let Wi="attract",Dn=0,Uu=performance.now()/1e3,Fu=performance.now();const Io=[];function Nl(){Un.reset(),fs.reset&&fs.reset(),vr.reset&&vr.reset(),Dn=0}function Nu(i,t){Un.update(t,i),Dn=i,ji.update(Dn,t),fs.update(t,{...Un.fxInput(),gp:Un})}function gf(){vr.setEnvMap&&vr.setEnvMap(sm[Un.state.section]||null);const i=Un.hudState();Yr.update(Dn,i),qn.info.reset(),fs.render()}function Uo(){Nl(),Wi="run",Fn.unlock();const i=()=>Fn.play(0);Fn.buffer?i():Fn.load().then(i,i)}function Ld(i){i&&i.type==="keydown"&&i.code!=="Space"&&i.code!=="Enter"||(Wi==="attract"||Wi==="done"&&Dn>im+1.2)&&Uo()}mf||(window.addEventListener("pointerdown",Ld,{capture:!0}),window.addEventListener("keydown",Ld,{capture:!0}),Un.bindInput(window));Yr.onReplay(()=>Uo());function rm(i){requestAnimationFrame(rm);const t=Math.min(.1,Math.max(0,(i-Fu)/1e3));if(Fu=i,t>0&&(Io.push(t),Io.length>60&&Io.shift()),!(zu||Wi==="seek")){if(Wi==="attract"){let e=i/1e3-Uu;e>Mb&&(Uu=i/1e3,Nl(),e=0);const n=Math.max(1e-4,e-Dn);e>Dn?Nu(e,n):(ji.update(Dn,t),fs.update(t,{...Un.fxInput(),gp:Un}))}else if(Wi==="run"||Wi==="done"){let e=Fn.playing?Fn.time():Dn+t;if(e>=Iu&&(e=Iu),e>Dn){const s=e-Dn;s>.25?(Un.seekTo(e,il),Dn=e,ji.update(Dn,s),fs.update(s,{...Un.fxInput(),gp:Un})):Nu(e,s)}else ji.update(Dn,t);Dn>=im&&Wi==="run"&&(Wi="done");const n=Un.state;try{Fn.tick(Dn,{...Un.hudState(),mph:n.mph,section:n.section,mode:n.mode,rcs:n.rcs,airborne:n.airborne,flap:n.flap,lastThrustT:n.lastFlapT})}catch{}}gf()}}function wb(){const i=window.innerWidth,t=window.innerHeight;qn.setSize(i,t),$i.aspect=i/t,$i.updateProjectionMatrix(),fs.setSize&&fs.setSize(i,t)}window.addEventListener("resize",wb);let zu=!1;function om(i){const t=Math.max(0,Math.min(Iu,+i||0));zu=!0,Wi="seek";try{Fn.stop(),Nl(),Un.seekTo(t,il),Dn=t,ji.update(Dn,il),fs.update(il,{...Un.fxInput(),gp:Un}),gf()}finally{zu=!1}return new Promise(e=>requestAnimationFrame(()=>e(Dn)))}const am={ready:!1,version:1,get t(){return Dn},time:()=>Dn,get mode(){return Wi},seek:om,start(){return Uo(),!0},restart(){Uo()},replay(){Uo()},stats(){const i=qn.info.render,t=Io.length?Io.reduce((e,n)=>e+n,0)/Io.length:0;return{fps:t>0?Math.round(10/t)/10:0,drawCalls:i.calls,triangles:i.triangles,t:Dn,mode:Wi}},hudState:()=>Un.hudState(),get state(){return Un.state},get speed01(){return Math.min(1,(Un.state.v||0)/72)},scene:hs,camera:$i,renderer:qn,world:ji,car:vr.object,carApi:vr,fx:fs,gp:Un,gameplay:Un,hud:Yr,audio:Fn};om.__hudWrapped=!0;window.__game=am;Nl();Nu(.001,.001);try{qn.compile(hs,$i)}catch{}gf();mf||Fn.load();requestAnimationFrame(i=>{Fu=i,Uu=i/1e3,am.ready=!0,requestAnimationFrame(rm)});new URLSearchParams(location.search).has("hudpreview")&&Yr.preview();
