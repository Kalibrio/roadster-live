var ag=Object.defineProperty;var lg=(n,t,e)=>t in n?ag(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var jf=(n,t,e)=>lg(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="170",cg=0,Zf=1,hg=2,bp=1,ug=2,Ys=3,Os=0,Qn=1,Ve=2,lr=0,Vo=1,yn=2,Jf=3,Qf=4,wp=5,Yr=100,fg=101,dg=102,pg=103,mg=104,gg=200,Sp=201,vg=202,xg=203,Qh=204,xc=205,_g=206,yg=207,Mg=208,bg=209,wg=210,Sg=211,Tg=212,Eg=213,Ag=214,tu=0,eu=1,nu=2,Jo=3,iu=4,su=5,ru=6,ou=7,Tp=0,Cg=1,Rg=2,cr=0,Pg=1,Lg=2,Dg=3,Ig=4,Ug=5,Fg=6,zg=7,Ep=300,Qo=301,ta=302,au=303,lu=304,Bc=306,cu=1e3,Qr=1001,hu=1002,Di=1003,Ng=1004,gl=1005,Qi=1006,nh=1007,to=1008,dr=1009,Ap=1010,Cp=1011,rl=1012,hf=1013,oo=1014,Us=1015,ts=1016,uf=1017,ff=1018,ea=1020,Rp=35902,Pp=1021,Lp=1022,Wi=1023,Dp=1024,Ip=1025,Wo=1026,na=1027,df=1028,pf=1029,Up=1030,mf=1031,gf=1033,oc=33776,ac=33777,lc=33778,cc=33779,uu=35840,fu=35841,du=35842,pu=35843,mu=36196,gu=37492,vu=37496,xu=37808,_u=37809,yu=37810,Mu=37811,bu=37812,wu=37813,Su=37814,Tu=37815,Eu=37816,Au=37817,Cu=37818,Ru=37819,Pu=37820,Lu=37821,hc=36492,Du=36494,Iu=36495,Fp=36283,Uu=36284,Fu=36285,zu=36286,Og=3200,Bg=3201,zp=0,kg=1,er="",Mn="srgb",ma="srgb-linear",kc="linear",ln="srgb",go=7680,t0=519,Hg=512,Gg=513,Vg=514,Np=515,Wg=516,Xg=517,qg=518,Yg=519,Nu=35044,zs=35048,e0="300 es",rr=2e3,_c=2001;class ga{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n0=1234567;const Ya=Math.PI/180,ia=180/Math.PI;function Ns(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ui[n&255]+ui[n>>8&255]+ui[n>>16&255]+ui[n>>24&255]+"-"+ui[t&255]+ui[t>>8&255]+"-"+ui[t>>16&15|64]+ui[t>>24&255]+"-"+ui[e&63|128]+ui[e>>8&255]+"-"+ui[e>>16&255]+ui[e>>24&255]+ui[i&255]+ui[i>>8&255]+ui[i>>16&255]+ui[i>>24&255]).toLowerCase()}function Bn(n,t,e){return Math.max(t,Math.min(e,n))}function vf(n,t){return(n%t+t)%t}function Kg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function $g(n,t,e){return n!==t?(e-n)/(t-n):0}function Ka(n,t,e){return(1-e)*n+e*t}function jg(n,t,e,i){return Ka(n,t,1-Math.exp(-e*i))}function Zg(n,t=1){return t-Math.abs(vf(n,t*2)-t)}function Jg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Qg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function t1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function e1(n,t){return n+Math.random()*(t-n)}function n1(n){return n*(.5-Math.random())}function i1(n){n!==void 0&&(n0=n);let t=n0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s1(n){return n*Ya}function r1(n){return n*ia}function o1(n){return(n&n-1)===0&&n!==0}function a1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function l1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function c1(n,t,e,i,s){const r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+i)/2),o=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),v=a((i-t)/2);switch(s){case"XYX":n.set(l*o,c*u,c*f,l*h);break;case"YZY":n.set(c*f,l*o,c*u,l*h);break;case"ZXZ":n.set(c*u,c*f,l*o,l*h);break;case"XZX":n.set(l*o,c*v,c*d,l*h);break;case"YXY":n.set(c*d,l*o,c*v,l*h);break;case"ZYZ":n.set(c*v,c*d,l*o,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vi={DEG2RAD:Ya,RAD2DEG:ia,generateUUID:Ns,clamp:Bn,euclideanModulo:vf,mapLinear:Kg,inverseLerp:$g,lerp:Ka,damp:jg,pingpong:Zg,smoothstep:Jg,smootherstep:Qg,randInt:t1,randFloat:e1,randFloatSpread:n1,seededRandom:i1,degToRad:s1,radToDeg:r1,isPowerOfTwo:o1,ceilPowerOfTwo:a1,floorPowerOfTwo:l1,setQuaternionFromProperEuler:c1,normalize:on,denormalize:ms};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Bn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(t,e,i,s,r,a,l,c,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,h)}set(t,e,i,s,r,a,l,c,h){const o=this.elements;return o[0]=t,o[1]=s,o[2]=l,o[3]=e,o[4]=r,o[5]=c,o[6]=i,o[7]=a,o[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[3],c=i[6],h=i[1],o=i[4],u=i[7],f=i[2],d=i[5],v=i[8],g=s[0],m=s[3],p=s[6],M=s[1],w=s[4],y=s[7],L=s[2],I=s[5],R=s[8];return r[0]=a*g+l*M+c*L,r[3]=a*m+l*w+c*I,r[6]=a*p+l*y+c*R,r[1]=h*g+o*M+u*L,r[4]=h*m+o*w+u*I,r[7]=h*p+o*y+u*R,r[2]=f*g+d*M+v*L,r[5]=f*m+d*w+v*I,r[8]=f*p+d*y+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],o=t[8];return e*a*o-e*l*h-i*r*o+i*l*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],o=t[8],u=o*a-l*h,f=l*c-o*r,d=h*r-a*c,v=e*u+i*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*h-o*i)*g,t[2]=(l*i-s*a)*g,t[3]=f*g,t[4]=(o*e-s*c)*g,t[5]=(s*r-l*e)*g,t[6]=d*g,t[7]=(i*c-h*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,l){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(ih.makeScale(t,e)),this}rotate(t){return this.premultiply(ih.makeRotation(-t)),this}translate(t,e){return this.premultiply(ih.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new De;function Op(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function yc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function h1(){const n=yc("canvas");return n.style.display="block",n}const i0={};function Ha(n){n in i0||(i0[n]=!0,console.warn(n))}function u1(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function f1(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function d1(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ke={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ln&&(n.r=hr(n.r),n.g=hr(n.g),n.b=hr(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ln&&(n.r=Xo(n.r),n.g=Xo(n.g),n.b=Xo(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===er?kc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const s0=[.64,.33,.3,.6,.15,.06],r0=[.2126,.7152,.0722],o0=[.3127,.329],a0=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[ma]:{primaries:s0,whitePoint:o0,transfer:kc,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:r0,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:s0,whitePoint:o0,transfer:ln,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:r0,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let vo;class p1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vo===void 0&&(vo=yc("canvas")),vo.width=t.width,vo.height=t.height;const i=vo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yc("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hr(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hr(e[i]/255)*255):e[i]=hr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let m1=0;class Bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(sh(s[a].image)):r.push(sh(s[a]))}else r=sh(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function sh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?p1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;class bi extends ga{constructor(t=bi.DEFAULT_IMAGE,e=bi.DEFAULT_MAPPING,i=Qr,s=Qr,r=Qi,a=to,l=Wi,c=dr,h=bi.DEFAULT_ANISOTROPY,o=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Ns(),this.name="",this.source=new Bp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=o,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ep)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cu:t.x=t.x-Math.floor(t.x);break;case Qr:t.x=t.x<0?0:1;break;case hu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cu:t.y=t.y-Math.floor(t.y);break;case Qr:t.y=t.y<0?0:1;break;case hu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=Ep;bi.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,e=0,i=0,s=1){Ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,h=c[0],o=c[4],u=c[8],f=c[1],d=c[5],v=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(o-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(o+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,y=(d+1)/2,L=(p+1)/2,I=(o+f)/4,R=(u+g)/4,U=(v+m)/4;return w>y&&w>L?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=I/i,r=R/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=U/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-o)*(f-o));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(u-g)/M,this.z=(f-o)/M,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v1 extends ga{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new bi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends v1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class kp extends bi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Di,this.minFilter=Di,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class x1 extends bi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Di,this.minFilter=Di,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,l){let c=i[s+0],h=i[s+1],o=i[s+2],u=i[s+3];const f=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(l===0){t[e+0]=c,t[e+1]=h,t[e+2]=o,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(u!==g||c!==f||h!==d||o!==v){let m=1-l;const p=c*f+h*d+o*v+u*g,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),I=Math.atan2(L,p*M);m=Math.sin(m*I)/L,l=Math.sin(l*I)/L}const y=l*M;if(c=c*m+f*y,h=h*m+d*y,o=o*m+v*y,u=u*m+g*y,m===1-l){const L=1/Math.sqrt(c*c+h*h+o*o+u*u);c*=L,h*=L,o*=L,u*=L}}t[e]=c,t[e+1]=h,t[e+2]=o,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const l=i[s],c=i[s+1],h=i[s+2],o=i[s+3],u=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return t[e]=l*v+o*u+c*d-h*f,t[e+1]=c*v+o*f+h*u-l*d,t[e+2]=h*v+o*d+l*f-c*u,t[e+3]=o*v-l*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(i/2),o=l(s/2),u=l(r/2),f=c(i/2),d=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=f*o*u+h*d*v,this._y=h*d*u-f*o*v,this._z=h*o*v+f*d*u,this._w=h*o*u-f*d*v;break;case"YXZ":this._x=f*o*u+h*d*v,this._y=h*d*u-f*o*v,this._z=h*o*v-f*d*u,this._w=h*o*u+f*d*v;break;case"ZXY":this._x=f*o*u-h*d*v,this._y=h*d*u+f*o*v,this._z=h*o*v+f*d*u,this._w=h*o*u-f*d*v;break;case"ZYX":this._x=f*o*u-h*d*v,this._y=h*d*u+f*o*v,this._z=h*o*v-f*d*u,this._w=h*o*u+f*d*v;break;case"YZX":this._x=f*o*u+h*d*v,this._y=h*d*u+f*o*v,this._z=h*o*v-f*d*u,this._w=h*o*u-f*d*v;break;case"XZY":this._x=f*o*u-h*d*v,this._y=h*d*u-f*o*v,this._z=h*o*v+f*d*u,this._w=h*o*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],o=e[6],u=e[10],f=i+l+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(o-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>l&&i>u){const d=2*Math.sqrt(1+i-l-u);this._w=(o-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>u){const d=2*Math.sqrt(1+l-i-u);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+o)/d}else{const d=2*Math.sqrt(1+u-i-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+o)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,o=e._w;return this._x=i*o+a*l+s*h-r*c,this._y=s*o+a*c+r*l-i*h,this._z=r*o+a*h+i*c-s*l,this._w=a*o-i*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let l=a*t._w+i*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),o=Math.atan2(h,l),u=Math.sin((1-e)*o)/h,f=Math.sin(e*o)/h;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(c0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(c0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*i),o=2*(l*e-r*s),u=2*(r*i-a*e);return this.x=e+c*h+a*u-l*o,this.y=i+c*o+l*h-r*u,this.z=s+c*u+r*o-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return rh.copy(this).projectOnVector(t),this.sub(rh)}reflect(t){return this.sub(rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Bn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new D,c0=new Jn;class ho{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rs.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rs.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=rs.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,rs):rs.fromBufferAttribute(r,a),rs.applyMatrix4(t.matrixWorld),this.expandByPoint(rs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(t.matrixWorld),this.union(vl)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rs),rs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sa),xl.subVectors(this.max,Sa),xo.subVectors(t.a,Sa),_o.subVectors(t.b,Sa),yo.subVectors(t.c,Sa),pr.subVectors(_o,xo),mr.subVectors(yo,_o),Ur.subVectors(xo,yo);let e=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Ur.z,Ur.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Ur.z,0,-Ur.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Ur.y,Ur.x,0];return!oh(e,xo,_o,yo,xl)||(e=[1,0,0,0,1,0,0,0,1],!oh(e,xo,_o,yo,xl))?!1:(_l.crossVectors(pr,mr),e=[_l.x,_l.y,_l.z],oh(e,xo,_o,yo,xl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gs=[new D,new D,new D,new D,new D,new D,new D,new D],rs=new D,vl=new ho,xo=new D,_o=new D,yo=new D,pr=new D,mr=new D,Ur=new D,Sa=new D,xl=new D,_l=new D,Fr=new D;function oh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fr.fromArray(n,r);const l=s.x*Math.abs(Fr.x)+s.y*Math.abs(Fr.y)+s.z*Math.abs(Fr.z),c=t.dot(Fr),h=e.dot(Fr),o=i.dot(Fr);if(Math.max(-Math.max(c,h,o),Math.min(c,h,o))>l)return!1}return!0}const _1=new ho,Ta=new D,ah=new D;class va{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ta.subVectors(t,this.center);const e=Ta.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ta,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ta.copy(t.center).add(ah)),this.expandByPoint(Ta.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vs=new D,lh=new D,yl=new D,gr=new D,ch=new D,Ml=new D,hh=new D;class Hp{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vs.copy(this.origin).addScaledVector(this.direction,e),Vs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){lh.copy(t).add(e).multiplyScalar(.5),yl.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(lh);const r=t.distanceTo(e)*.5,a=-this.direction.dot(yl),l=gr.dot(this.direction),c=-gr.dot(yl),h=gr.lengthSq(),o=Math.abs(1-a*a);let u,f,d,v;if(o>0)if(u=a*c-l,f=a*l-c,v=r*o,u>=0)if(f>=-v)if(f<=v){const g=1/o;u*=g,f*=g,d=u*(u+a*f+2*l)+f*(a*u+f+2*c)+h}else f=r,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;else f<=-v?(u=Math.max(0,-(-a*r+l)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h):f<=v?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(u=Math.max(0,-(a*r+l)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lh).addScaledVector(yl,f),d}intersectSphere(t,e){Vs.subVectors(t.center,this.origin);const i=Vs.dot(this.direction),s=Vs.dot(Vs)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,l,c;const h=1/this.direction.x,o=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),o>=0?(r=(t.min.y-f.y)*o,a=(t.max.y-f.y)*o):(r=(t.max.y-f.y)*o,a=(t.min.y-f.y)*o),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vs)!==null}intersectTriangle(t,e,i,s,r){ch.subVectors(e,t),Ml.subVectors(i,t),hh.crossVectors(ch,Ml);let a=this.direction.dot(hh),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;gr.subVectors(this.origin,t);const c=l*this.direction.dot(Ml.crossVectors(gr,Ml));if(c<0)return null;const h=l*this.direction.dot(ch.cross(gr));if(h<0||c+h>a)return null;const o=-l*gr.dot(hh);return o<0?null:this.at(o/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,i,s,r,a,l,c,h,o,u,f,d,v,g,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,h,o,u,f,d,v,g,m)}set(t,e,i,s,r,a,l,c,h,o,u,f,d,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=o,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),r=1/Mo.setFromMatrixColumn(t,1).length(),a=1/Mo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s),o=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*o,d=a*u,v=l*o,g=l*u;e[0]=c*o,e[4]=-c*u,e[8]=h,e[1]=d+v*h,e[5]=f-g*h,e[9]=-l*c,e[2]=g-f*h,e[6]=v+d*h,e[10]=a*c}else if(t.order==="YXZ"){const f=c*o,d=c*u,v=h*o,g=h*u;e[0]=f+g*l,e[4]=v*l-d,e[8]=a*h,e[1]=a*u,e[5]=a*o,e[9]=-l,e[2]=d*l-v,e[6]=g+f*l,e[10]=a*c}else if(t.order==="ZXY"){const f=c*o,d=c*u,v=h*o,g=h*u;e[0]=f-g*l,e[4]=-a*u,e[8]=v+d*l,e[1]=d+v*l,e[5]=a*o,e[9]=g-f*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const f=a*o,d=a*u,v=l*o,g=l*u;e[0]=c*o,e[4]=v*h-d,e[8]=f*h+g,e[1]=c*u,e[5]=g*h+f,e[9]=d*h-v,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*h,v=l*c,g=l*h;e[0]=c*o,e[4]=g-f*u,e[8]=v*u+d,e[1]=u,e[5]=a*o,e[9]=-l*o,e[2]=-h*o,e[6]=d*u+v,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*c,d=a*h,v=l*c,g=l*h;e[0]=c*o,e[4]=-u,e[8]=h*o,e[1]=f*u+g,e[5]=a*o,e[9]=d*u-v,e[2]=v*u-d,e[6]=l*o,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y1,t,M1)}lookAt(t,e,i){const s=this.elements;return Gi.subVectors(t,e),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),vr.crossVectors(i,Gi),vr.lengthSq()===0&&(Math.abs(i.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),vr.crossVectors(i,Gi)),vr.normalize(),bl.crossVectors(Gi,vr),s[0]=vr.x,s[4]=bl.x,s[8]=Gi.x,s[1]=vr.y,s[5]=bl.y,s[9]=Gi.y,s[2]=vr.z,s[6]=bl.z,s[10]=Gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[4],c=i[8],h=i[12],o=i[1],u=i[5],f=i[9],d=i[13],v=i[2],g=i[6],m=i[10],p=i[14],M=i[3],w=i[7],y=i[11],L=i[15],I=s[0],R=s[4],U=s[8],P=s[12],_=s[1],N=s[5],W=s[9],nt=s[13],mt=s[2],Ct=s[6],pt=s[10],Ut=s[14],et=s[3],Ot=s[7],Jt=s[11],oe=s[15];return r[0]=a*I+l*_+c*mt+h*et,r[4]=a*R+l*N+c*Ct+h*Ot,r[8]=a*U+l*W+c*pt+h*Jt,r[12]=a*P+l*nt+c*Ut+h*oe,r[1]=o*I+u*_+f*mt+d*et,r[5]=o*R+u*N+f*Ct+d*Ot,r[9]=o*U+u*W+f*pt+d*Jt,r[13]=o*P+u*nt+f*Ut+d*oe,r[2]=v*I+g*_+m*mt+p*et,r[6]=v*R+g*N+m*Ct+p*Ot,r[10]=v*U+g*W+m*pt+p*Jt,r[14]=v*P+g*nt+m*Ut+p*oe,r[3]=M*I+w*_+y*mt+L*et,r[7]=M*R+w*N+y*Ct+L*Ot,r[11]=M*U+w*W+y*pt+L*Jt,r[15]=M*P+w*nt+y*Ut+L*oe,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],o=t[2],u=t[6],f=t[10],d=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*c*u-s*h*u-r*l*f+i*h*f+s*l*d-i*c*d)+g*(+e*c*d-e*h*f+r*a*f-s*a*d+s*h*o-r*c*o)+m*(+e*h*u-e*l*d-r*a*u+i*a*d+r*l*o-i*h*o)+p*(-s*l*o-e*c*u+e*l*f+s*a*u-i*a*f+i*c*o)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],o=t[8],u=t[9],f=t[10],d=t[11],v=t[12],g=t[13],m=t[14],p=t[15],M=u*m*h-g*f*h+g*c*d-l*m*d-u*c*p+l*f*p,w=v*f*h-o*m*h-v*c*d+a*m*d+o*c*p-a*f*p,y=o*g*h-v*u*h+v*l*d-a*g*d-o*l*p+a*u*p,L=v*u*c-o*g*c-v*l*f+a*g*f+o*l*m-a*u*m,I=e*M+i*w+s*y+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=M*R,t[1]=(g*f*r-u*m*r-g*s*d+i*m*d+u*s*p-i*f*p)*R,t[2]=(l*m*r-g*c*r+g*s*h-i*m*h-l*s*p+i*c*p)*R,t[3]=(u*c*r-l*f*r-u*s*h+i*f*h+l*s*d-i*c*d)*R,t[4]=w*R,t[5]=(o*m*r-v*f*r+v*s*d-e*m*d-o*s*p+e*f*p)*R,t[6]=(v*c*r-a*m*r-v*s*h+e*m*h+a*s*p-e*c*p)*R,t[7]=(a*f*r-o*c*r+o*s*h-e*f*h-a*s*d+e*c*d)*R,t[8]=y*R,t[9]=(v*u*r-o*g*r-v*i*d+e*g*d+o*i*p-e*u*p)*R,t[10]=(a*g*r-v*l*r+v*i*h-e*g*h-a*i*p+e*l*p)*R,t[11]=(o*l*r-a*u*r-o*i*h+e*u*h+a*i*d-e*l*d)*R,t[12]=L*R,t[13]=(o*g*s-v*u*s+v*i*f-e*g*f-o*i*m+e*u*m)*R,t[14]=(v*l*s-a*g*s-v*i*c+e*g*c+a*i*m-e*l*m)*R,t[15]=(a*u*s-o*l*s+o*i*c-e*u*c-a*i*f+e*l*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,l=t.y,c=t.z,h=r*a,o=r*l;return this.set(h*a+i,h*l-s*c,h*c+s*l,0,h*l+s*c,o*l+i,o*c-s*a,0,h*c-s*l,o*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,o=a+a,u=l+l,f=r*h,d=r*o,v=r*u,g=a*o,m=a*u,p=l*u,M=c*h,w=c*o,y=c*u,L=i.x,I=i.y,R=i.z;return s[0]=(1-(g+p))*L,s[1]=(d+y)*L,s[2]=(v-w)*L,s[3]=0,s[4]=(d-y)*I,s[5]=(1-(f+p))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(v+w)*R,s[9]=(m-M)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Mo.set(s[0],s[1],s[2]).length();const a=Mo.set(s[4],s[5],s[6]).length(),l=Mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],os.copy(this);const h=1/r,o=1/a,u=1/l;return os.elements[0]*=h,os.elements[1]*=h,os.elements[2]*=h,os.elements[4]*=o,os.elements[5]*=o,os.elements[6]*=o,os.elements[8]*=u,os.elements[9]*=u,os.elements[10]*=u,e.setFromRotationMatrix(os),i.x=r,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,a,l=rr){const c=this.elements,h=2*r/(e-t),o=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,v;if(l===rr)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===_c)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=o,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,l=rr){const c=this.elements,h=1/(e-t),o=1/(i-s),u=1/(a-r),f=(e+t)*h,d=(i+s)*o;let v,g;if(l===rr)v=(a+r)*u,g=-2*u;else if(l===_c)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*o,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Mo=new D,os=new Pe,y1=new D(0,0,0),M1=new D(1,1,1),vr=new D,bl=new D,Gi=new D,h0=new Pe,u0=new Jn;class Ni{constructor(t=0,e=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],o=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-o,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-o,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-o,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return h0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(h0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return u0.setFromEuler(this),this.setFromQuaternion(u0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Gp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let b1=0;const f0=new D,bo=new Jn,Ws=new Pe,wl=new D,Ea=new D,w1=new D,S1=new Jn,d0=new D(1,0,0),p0=new D(0,1,0),m0=new D(0,0,1),g0={type:"added"},T1={type:"removed"},wo={type:"childadded",child:null},uh={type:"childremoved",child:null};class fn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new D,e=new Ni,i=new Jn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new De}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(d0,t)}rotateY(t){return this.rotateOnAxis(p0,t)}rotateZ(t){return this.rotateOnAxis(m0,t)}translateOnAxis(t,e){return f0.copy(t).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(d0,t)}translateY(t){return this.translateOnAxis(p0,t)}translateZ(t){return this.translateOnAxis(m0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wl.copy(t):wl.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(Ea,wl,this.up):Ws.lookAt(wl,Ea,this.up),this.quaternion.setFromRotationMatrix(Ws),s&&(Ws.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(Ws),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g0),wo.child=t,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T1),uh.child=t,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g0),wo.child=t,this.dispatchEvent(wo),wo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,t,w1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,S1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,o=c.length;h<o;h++){const u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),h=a(t.textures),o=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),o.length>0&&(i.images=o),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(l){const c=[];for(const h in l){const o=l[h];delete o.metadata,c.push(o)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}fn.DEFAULT_UP=new D(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const as=new D,Xs=new D,fh=new D,qs=new D,So=new D,To=new D,v0=new D,dh=new D,ph=new D,mh=new D,gh=new Ze,vh=new Ze,xh=new Ze;class Zi{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),as.subVectors(t,e),s.cross(as);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){as.subVectors(s,e),Xs.subVectors(i,e),fh.subVectors(t,e);const a=as.dot(as),l=as.dot(Xs),c=as.dot(fh),h=Xs.dot(Xs),o=Xs.dot(fh),u=a*h-l*l;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(h*c-l*o)*f,v=(a*o-l*c)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qs)===null?!1:qs.x>=0&&qs.y>=0&&qs.x+qs.y<=1}static getInterpolation(t,e,i,s,r,a,l,c){return this.getBarycoord(t,e,i,s,qs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qs.x),c.addScaledVector(a,qs.y),c.addScaledVector(l,qs.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return gh.setScalar(0),vh.setScalar(0),xh.setScalar(0),gh.fromBufferAttribute(t,e),vh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gh,r.x),a.addScaledVector(vh,r.y),a.addScaledVector(xh,r.z),a}static isFrontFacing(t,e,i,s){return as.subVectors(i,e),Xs.subVectors(t,e),as.cross(Xs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return as.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),as.cross(Xs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Zi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,l;So.subVectors(s,i),To.subVectors(r,i),dh.subVectors(t,i);const c=So.dot(dh),h=To.dot(dh);if(c<=0&&h<=0)return e.copy(i);ph.subVectors(t,s);const o=So.dot(ph),u=To.dot(ph);if(o>=0&&u<=o)return e.copy(s);const f=c*u-o*h;if(f<=0&&c>=0&&o<=0)return a=c/(c-o),e.copy(i).addScaledVector(So,a);mh.subVectors(t,r);const d=So.dot(mh),v=To.dot(mh);if(v>=0&&d<=v)return e.copy(r);const g=d*h-c*v;if(g<=0&&h>=0&&v<=0)return l=h/(h-v),e.copy(i).addScaledVector(To,l);const m=o*v-d*u;if(m<=0&&u-o>=0&&d-v>=0)return v0.subVectors(r,s),l=(u-o)/(u-o+(d-v)),e.copy(s).addScaledVector(v0,l);const p=1/(m+g+f);return a=g*p,l=f*p,e.copy(i).addScaledVector(So,a).addScaledVector(To,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function _h(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ke.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ke.workingColorSpace){if(t=vf(t,1),e=Bn(e,0,1),i=Bn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=_h(a,r,t+1/3),this.g=_h(a,r,t),this.b=_h(a,r,t-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const i=Vp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Ke.fromWorkingColorSpace(fi.copy(this),t),Math.round(Bn(fi.r*255,0,255))*65536+Math.round(Bn(fi.g*255,0,255))*256+Math.round(Bn(fi.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ke.workingColorSpace){Ke.fromWorkingColorSpace(fi.copy(this),e);const i=fi.r,s=fi.g,r=fi.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let c,h;const o=(l+a)/2;if(l===a)c=0,h=0;else{const u=a-l;switch(h=o<=.5?u/(a+l):u/(2-a-l),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=o,t}getRGB(t,e=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(fi.copy(this),e),t.r=fi.r,t.g=fi.g,t.b=fi.b,t}getStyle(t=Mn){Ke.fromWorkingColorSpace(fi.copy(this),t);const e=fi.r,i=fi.g,s=fi.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+e,xr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xr),t.getHSL(Sl);const i=Ka(xr.h,Sl.h,e),s=Ka(xr.s,Sl.s,e),r=Ka(xr.l,Sl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fi=new Gt;Gt.NAMES=Vp;let E1=0;class uo extends ga{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Ns(),this.name="",this.blending=Vo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=xc,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qh&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const c=r[l];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class We extends uo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cn=new D,Tl=new Xt;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nu,this.updateRanges=[],this.gpuType=Us,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tl.fromBufferAttribute(this,e),Tl.applyMatrix3(t),this.setXY(e,Tl.x,Tl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=on(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nu&&(t.usage=this.usage),t}}class Wp extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Xp extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let A1=0;const qi=new Pe,yh=new fn,Eo=new D,Vi=new ho,Aa=new ho,$n=new D;class $e extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Op(t)?Xp:Wp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new De().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qi.makeRotationFromQuaternion(t),this.applyMatrix4(qi),this}rotateX(t){return qi.makeRotationX(t),this.applyMatrix4(qi),this}rotateY(t){return qi.makeRotationY(t),this.applyMatrix4(qi),this}rotateZ(t){return qi.makeRotationZ(t),this.applyMatrix4(qi),this}translate(t,e,i){return qi.makeTranslation(t,e,i),this.applyMatrix4(qi),this}scale(t,e,i){return qi.makeScale(t,e,i),this.applyMatrix4(qi),this}lookAt(t){return yh.lookAt(t),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Vi.setFromBufferAttribute(r),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Vi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];Aa.setFromBufferAttribute(l),this.morphTargetsRelative?($n.addVectors(Vi.min,Aa.min),Vi.expandByPoint($n),$n.addVectors(Vi.max,Aa.max),Vi.expandByPoint($n)):(Vi.expandByPoint(Aa.min),Vi.expandByPoint(Aa.max))}Vi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$n.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($n));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],c=this.morphTargetsRelative;for(let h=0,o=l.count;h<o;h++)$n.fromBufferAttribute(l,h),c&&(Eo.fromBufferAttribute(t,h),$n.add(Eo)),s=Math.max(s,i.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let U=0;U<i.count;U++)l[U]=new D,c[U]=new D;const h=new D,o=new D,u=new D,f=new Xt,d=new Xt,v=new Xt,g=new D,m=new D;function p(U,P,_){h.fromBufferAttribute(i,U),o.fromBufferAttribute(i,P),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,P),v.fromBufferAttribute(r,_),o.sub(h),u.sub(h),d.sub(f),v.sub(f);const N=1/(d.x*v.y-v.x*d.y);isFinite(N)&&(g.copy(o).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(o,-v.x).multiplyScalar(N),l[U].add(g),l[P].add(g),l[_].add(g),c[U].add(m),c[P].add(m),c[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let U=0,P=M.length;U<P;++U){const _=M[U],N=_.start,W=_.count;for(let nt=N,mt=N+W;nt<mt;nt+=3)p(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const w=new D,y=new D,L=new D,I=new D;function R(U){L.fromBufferAttribute(s,U),I.copy(L);const P=l[U];w.copy(P),w.sub(L.multiplyScalar(L.dot(P))).normalize(),y.crossVectors(I,P);const N=y.dot(c[U])<0?-1:1;a.setXYZW(U,w.x,w.y,w.z,N)}for(let U=0,P=M.length;U<P;++U){const _=M[U],N=_.start,W=_.count;for(let nt=N,mt=N+W;nt<mt;nt+=3)R(t.getX(nt+0)),R(t.getX(nt+1)),R(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,l=new D,c=new D,h=new D,o=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),o.subVectors(a,r),u.subVectors(s,r),o.cross(u),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),l.add(o),c.add(o),h.add(o),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),o.subVectors(a,r),u.subVectors(s,r),o.cross(u),i.setXYZ(f+0,o.x,o.y,o.z),i.setXYZ(f+1,o.x,o.y,o.z),i.setXYZ(f+2,o.x,o.y,o.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$n.fromBufferAttribute(t,e),$n.normalize(),t.setXYZ(e,$n.x,$n.y,$n.z)}toNonIndexed(){function t(l,c){const h=l.array,o=l.itemSize,u=l.normalized,f=new h.constructor(c.length*o);let d=0,v=0;for(let g=0,m=c.length;g<m;g++){l.isInterleavedBufferAttribute?d=c[g]*l.data.stride+l.offset:d=c[g]*o;for(let p=0;p<o;p++)f[v++]=h[d++]}return new dn(f,o,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,i=this.index.array,s=this.attributes;for(const l in s){const c=s[l],h=t(c,i);e.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const c=[],h=r[l];for(let o=0,u=h.length;o<u;o++){const f=h[o],d=t(f,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],o=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];o.push(d.toJSON(t.data))}o.length>0&&(s[c]=o,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const o=s[h];this.setAttribute(h,o.clone(e))}const r=t.morphAttributes;for(const h in r){const o=[],u=r[h];for(let f=0,d=u.length;f<d;f++)o.push(u[f].clone(e));this.morphAttributes[h]=o}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,o=a.length;h<o;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x0=new Pe,zr=new Hp,El=new va,_0=new D,Al=new D,Cl=new D,Rl=new D,Mh=new D,Pl=new D,y0=new D,Ll=new D;class ge extends fn{constructor(t=new $e,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){Pl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const o=l[c],u=r[c];o!==0&&(Mh.fromBufferAttribute(u,t),a?Pl.addScaledVector(Mh,o):Pl.addScaledVector(Mh.sub(e),o))}e.add(Pl)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),zr.copy(t.ray).recast(t.near),!(El.containsPoint(zr.origin)===!1&&(zr.intersectSphere(El,_0)===null||zr.origin.distanceToSquared(_0)>(t.far-t.near)**2))&&(x0.copy(r).invert(),zr.copy(t.ray).applyMatrix4(x0),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zr)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,o=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,L=w;y<L;y+=3){const I=l.getX(y),R=l.getX(y+1),U=l.getX(y+2);s=Dl(this,p,t,i,h,o,u,I,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const M=l.getX(m),w=l.getX(m+1),y=l.getX(m+2);s=Dl(this,a,t,i,h,o,u,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=M,L=w;y<L;y+=3){const I=y,R=y+1,U=y+2;s=Dl(this,p,t,i,h,o,u,I,R,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const M=m,w=m+1,y=m+2;s=Dl(this,a,t,i,h,o,u,M,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function C1(n,t,e,i,s,r,a,l){let c;if(t.side===Qn?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,t.side===Os,l),c===null)return null;Ll.copy(l),Ll.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ll);return h<e.near||h>e.far?null:{distance:h,point:Ll.clone(),object:n}}function Dl(n,t,e,i,s,r,a,l,c,h){n.getVertexPosition(l,Al),n.getVertexPosition(c,Cl),n.getVertexPosition(h,Rl);const o=C1(n,t,e,i,Al,Cl,Rl,y0);if(o){const u=new D;Zi.getBarycoord(y0,Al,Cl,Rl,u),s&&(o.uv=Zi.getInterpolatedAttribute(s,l,c,h,u,new Xt)),r&&(o.uv1=Zi.getInterpolatedAttribute(r,l,c,h,u,new Xt)),a&&(o.normal=Zi.getInterpolatedAttribute(a,l,c,h,u,new D),o.normal.dot(i.direction)>0&&o.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new D,materialIndex:0};Zi.getNormal(Al,Cl,Rl,f.normal),o.face=f,o.barycoord=u}return o}class nn extends $e{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],o=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,i,e,t,a,r,0),v("z","y","x",1,-1,i,e,-t,a,r,1),v("x","z","y",1,1,t,i,e,s,a,2),v("x","z","y",1,-1,t,i,-e,s,a,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(u,2));function v(g,m,p,M,w,y,L,I,R,U,P){const _=y/R,N=L/U,W=y/2,nt=L/2,mt=I/2,Ct=R+1,pt=U+1;let Ut=0,et=0;const Ot=new D;for(let Jt=0;Jt<pt;Jt++){const oe=Jt*N-nt;for(let ce=0;ce<Ct;ce++){const lt=ce*_-W;Ot[g]=lt*M,Ot[m]=oe*w,Ot[p]=mt,h.push(Ot.x,Ot.y,Ot.z),Ot[g]=0,Ot[m]=0,Ot[p]=I>0?1:-1,o.push(Ot.x,Ot.y,Ot.z),u.push(ce/R),u.push(1-Jt/U),Ut+=1}}for(let Jt=0;Jt<U;Jt++)for(let oe=0;oe<R;oe++){const ce=f+oe+Ct*Jt,lt=f+oe+Ct*(Jt+1),Y=f+(oe+1)+Ct*(Jt+1),V=f+(oe+1)+Ct*Jt;c.push(ce,lt,V),c.push(lt,Y,V),et+=6}l.addGroup(d,et,P),d+=et,f+=Ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sa(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ci(n){const t={};for(let e=0;e<n.length;e++){const i=sa(n[e]);for(const s in i)t[s]=i[s]}return t}function R1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ke.workingColorSpace}const _s={clone:sa,merge:Ci};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends uo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=L1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sa(t.uniforms),this.uniformsGroups=R1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Yp extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=rr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new D,M0=new Xt,b0=new Xt;class Mi extends Yp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,e){return this.getViewBounds(t,M0,b0),e.subVectors(b0,M0)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ao=-90,Co=1;class Kp extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mi(Ao,Co,t,e);s.layers=this.layers,this.add(s);const r=new Mi(Ao,Co,t,e);r.layers=this.layers,this.add(r);const a=new Mi(Ao,Co,t,e);a.layers=this.layers,this.add(a);const l=new Mi(Ao,Co,t,e);l.layers=this.layers,this.add(l);const c=new Mi(Ao,Co,t,e);c.layers=this.layers,this.add(c);const h=new Mi(Ao,Co,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,l,c]=e;for(const h of e)this.remove(h);if(t===rr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,c,h,o]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,o),t.setRenderTarget(u,f,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $p extends bi{constructor(t,e,i,s,r,a,l,c,h,o){t=t!==void 0?t:[],e=e!==void 0?e:Qo,super(t,e,i,s,r,a,l,c,h,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jp extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $p(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:lr});r.uniforms.tEquirect.value=e;const a=new ge(s,r),l=e.minFilter;return e.minFilter===to&&(e.minFilter=Qi),new Kp(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const bh=new D,D1=new D,I1=new De;class Sr{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=bh.subVectors(i,e).cross(D1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||I1.getNormalMatrix(t),s=this.coplanarPoint(bh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new va,Il=new D;class xf{constructor(t=new Sr,e=new Sr,i=new Sr,s=new Sr,r=new Sr,a=new Sr){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=rr){const i=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],c=s[3],h=s[4],o=s[5],u=s[6],f=s[7],d=s[8],v=s[9],g=s[10],m=s[11],p=s[12],M=s[13],w=s[14],y=s[15];if(i[0].setComponents(c-r,f-h,m-d,y-p).normalize(),i[1].setComponents(c+r,f+h,m+d,y+p).normalize(),i[2].setComponents(c+a,f+o,m+v,y+M).normalize(),i[3].setComponents(c-a,f-o,m-v,y-M).normalize(),i[4].setComponents(c-l,f-u,m-g,y-w).normalize(),e===rr)i[5].setComponents(c+l,f+u,m+g,y+w).normalize();else if(e===_c)i[5].setComponents(l,u,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Il.x=s.normal.x>0?t.max.x:t.min.x,Il.y=s.normal.y>0?t.max.y:t.min.y,Il.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zp(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function U1(n){const t=new WeakMap;function e(l,c){const h=l.array,o=l.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,o),l.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}function i(l,c,h){const o=c.array,u=c.updateRanges;if(n.bindBuffer(h,l),u.length===0)n.bufferSubData(h,0,o);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],g=u[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const g=u[d];n.bufferSubData(h,g.start*o.BYTES_PER_ELEMENT,o,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const o=t.get(l);(!o||o.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}class pn extends $e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(i),c=Math.floor(s),h=l+1,o=c+1,u=t/l,f=e/c,d=[],v=[],g=[],m=[];for(let p=0;p<o;p++){const M=p*f-a;for(let w=0;w<h;w++){const y=w*u-r;v.push(y,-M,0),g.push(0,0,1),m.push(w/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<l;M++){const w=M+h*p,y=M+h*(p+1),L=M+1+h*(p+1),I=M+1+h*p;d.push(w,y,I),d.push(y,L,I)}this.setIndex(d),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
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
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`#ifdef USE_BATCHING
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
#endif`,W1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K1=`#ifdef USE_IRIDESCENCE
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
#endif`,$1=`#ifdef USE_BUMPMAP
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sv=`#define PI 3.141592653589793
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
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ov=`vec3 transformedNormal = objectNormal;
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
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
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
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
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
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
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
#endif`,Iv=`struct PhysicalMaterial {
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
}`,Uv=`
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wv=`#if defined( USE_POINTS_UV )
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
#endif`,Xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
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
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,$x=`uniform vec3 diffuse;
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
}`,jx=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,t2=`#define NORMAL
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
}`,e2=`#define NORMAL
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
}`,n2=`#define PHONG
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
}`,i2=`#define PHONG
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
}`,s2=`#define STANDARD
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
}`,r2=`#define STANDARD
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
}`,o2=`#define TOON
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
}`,a2=`#define TOON
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
}`,l2=`uniform float size;
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
}`,c2=`uniform vec3 diffuse;
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
}`,h2=`#include <common>
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
}`,u2=`uniform vec3 color;
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
}`,f2=`uniform float rotation;
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
}`,d2=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:F1,alphahash_pars_fragment:z1,alphamap_fragment:N1,alphamap_pars_fragment:O1,alphatest_fragment:B1,alphatest_pars_fragment:k1,aomap_fragment:H1,aomap_pars_fragment:G1,batching_pars_vertex:V1,batching_vertex:W1,begin_vertex:X1,beginnormal_vertex:q1,bsdfs:Y1,iridescence_fragment:K1,bumpmap_pars_fragment:$1,clipping_planes_fragment:j1,clipping_planes_pars_fragment:Z1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:Q1,color_fragment:tv,color_pars_fragment:ev,color_pars_vertex:nv,color_vertex:iv,common:sv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:ov,displacementmap_pars_vertex:av,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:hv,colorspace_fragment:uv,colorspace_pars_fragment:fv,envmap_fragment:dv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Av,envmap_vertex:vv,fog_vertex:xv,fog_pars_vertex:_v,fog_fragment:yv,fog_pars_fragment:Mv,gradientmap_pars_fragment:bv,lightmap_pars_fragment:wv,lights_lambert_fragment:Sv,lights_lambert_pars_fragment:Tv,lights_pars_begin:Ev,lights_toon_fragment:Cv,lights_toon_pars_fragment:Rv,lights_phong_fragment:Pv,lights_phong_pars_fragment:Lv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Iv,lights_fragment_begin:Uv,lights_fragment_maps:Fv,lights_fragment_end:zv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Bv,logdepthbuf_vertex:kv,map_fragment:Hv,map_pars_fragment:Gv,map_particle_fragment:Vv,map_particle_pars_fragment:Wv,metalnessmap_fragment:Xv,metalnessmap_pars_fragment:qv,morphinstance_vertex:Yv,morphcolor_vertex:Kv,morphnormal_vertex:$v,morphtarget_pars_vertex:jv,morphtarget_vertex:Zv,normal_fragment_begin:Jv,normal_fragment_maps:Qv,normal_pars_fragment:tx,normal_pars_vertex:ex,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:fx,dithering_pars_fragment:dx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:vx,shadowmap_vertex:xx,shadowmask_pars_fragment:_x,skinbase_vertex:yx,skinning_pars_vertex:Mx,skinning_vertex:bx,skinnormal_vertex:wx,specularmap_fragment:Sx,specularmap_pars_fragment:Tx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Ax,transmission_fragment:Cx,transmission_pars_fragment:Rx,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Ix,background_vert:Ux,background_frag:Fx,backgroundCube_vert:zx,backgroundCube_frag:Nx,cube_vert:Ox,cube_frag:Bx,depth_vert:kx,depth_frag:Hx,distanceRGBA_vert:Gx,distanceRGBA_frag:Vx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:Kx,meshbasic_frag:$x,meshlambert_vert:jx,meshlambert_frag:Zx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:t2,meshnormal_frag:e2,meshphong_vert:n2,meshphong_frag:i2,meshphysical_vert:s2,meshphysical_frag:r2,meshtoon_vert:o2,meshtoon_frag:a2,points_vert:l2,points_frag:c2,shadow_vert:h2,shadow_frag:u2,sprite_vert:f2,sprite_frag:d2},ue={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ps={basic:{uniforms:Ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ci([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ci([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ci([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ci([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ci([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ci([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ci([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ci([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ci([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ci([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ci([ue.lights,ue.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ps.physical={uniforms:Ci([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ul={r:0,b:0,g:0},Or=new Ni,p2=new Pe;function m2(n,t,e,i,s,r,a){const l=new Gt(0);let c=r===!0?0:1,h,o,u=null,f=0,d=null;function v(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function g(M){let w=!1;const y=v(M);y===null?p(l,c):y&&y.isColor&&(p(y,1),w=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,w){const y=v(w);y&&(y.isCubeTexture||y.mapping===Bc)?(o===void 0&&(o=new ge(new nn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:sa(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(L,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(o)),Or.copy(w.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),o.material.uniforms.envMap.value=y,o.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(p2.makeRotationFromEuler(Or)),o.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ln,(u!==y||f!==y.version||d!==n.toneMapping)&&(o.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),o.layers.enableAll(),M.unshift(o,o.geometry,o.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new ge(new pn(2,2),new Xe({name:"BackgroundMaterial",uniforms:sa(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ln,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,w){M.getRGB(Ul,qp(n)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,w,a)}return{getClearColor:function(){return l},setClearColor:function(M,w=1){l.set(M),c=w,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(l,c)},render:g,addToRenderList:m}}function g2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function l(_,N,W,nt,mt){let Ct=!1;const pt=u(nt,W,N);r!==pt&&(r=pt,h(r.object)),Ct=d(_,nt,W,mt),Ct&&v(_,nt,W,mt),mt!==null&&t.update(mt,n.ELEMENT_ARRAY_BUFFER),(Ct||a)&&(a=!1,y(_,N,W,nt),mt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function c(){return n.createVertexArray()}function h(_){return n.bindVertexArray(_)}function o(_){return n.deleteVertexArray(_)}function u(_,N,W){const nt=W.wireframe===!0;let mt=i[_.id];mt===void 0&&(mt={},i[_.id]=mt);let Ct=mt[N.id];Ct===void 0&&(Ct={},mt[N.id]=Ct);let pt=Ct[nt];return pt===void 0&&(pt=f(c()),Ct[nt]=pt),pt}function f(_){const N=[],W=[],nt=[];for(let mt=0;mt<e;mt++)N[mt]=0,W[mt]=0,nt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:nt,object:_,attributes:{},index:null}}function d(_,N,W,nt){const mt=r.attributes,Ct=N.attributes;let pt=0;const Ut=W.getAttributes();for(const et in Ut)if(Ut[et].location>=0){const Jt=mt[et];let oe=Ct[et];if(oe===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),Jt===void 0||Jt.attribute!==oe||oe&&Jt.data!==oe.data)return!0;pt++}return r.attributesNum!==pt||r.index!==nt}function v(_,N,W,nt){const mt={},Ct=N.attributes;let pt=0;const Ut=W.getAttributes();for(const et in Ut)if(Ut[et].location>=0){let Jt=Ct[et];Jt===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(Jt=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(Jt=_.instanceColor));const oe={};oe.attribute=Jt,Jt&&Jt.data&&(oe.data=Jt.data),mt[et]=oe,pt++}r.attributes=mt,r.attributesNum=pt,r.index=nt}function g(){const _=r.newAttributes;for(let N=0,W=_.length;N<W;N++)_[N]=0}function m(_){p(_,0)}function p(_,N){const W=r.newAttributes,nt=r.enabledAttributes,mt=r.attributeDivisors;W[_]=1,nt[_]===0&&(n.enableVertexAttribArray(_),nt[_]=1),mt[_]!==N&&(n.vertexAttribDivisor(_,N),mt[_]=N)}function M(){const _=r.newAttributes,N=r.enabledAttributes;for(let W=0,nt=N.length;W<nt;W++)N[W]!==_[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function w(_,N,W,nt,mt,Ct,pt){pt===!0?n.vertexAttribIPointer(_,N,W,mt,Ct):n.vertexAttribPointer(_,N,W,nt,mt,Ct)}function y(_,N,W,nt){g();const mt=nt.attributes,Ct=W.getAttributes(),pt=N.defaultAttributeValues;for(const Ut in Ct){const et=Ct[Ut];if(et.location>=0){let Ot=mt[Ut];if(Ot===void 0&&(Ut==="instanceMatrix"&&_.instanceMatrix&&(Ot=_.instanceMatrix),Ut==="instanceColor"&&_.instanceColor&&(Ot=_.instanceColor)),Ot!==void 0){const Jt=Ot.normalized,oe=Ot.itemSize,ce=t.get(Ot);if(ce===void 0)continue;const lt=ce.buffer,Y=ce.type,V=ce.bytesPerElement,bt=Y===n.INT||Y===n.UNSIGNED_INT||Ot.gpuType===hf;if(Ot.isInterleavedBufferAttribute){const _t=Ot.data,Rt=_t.stride,zt=Ot.offset;if(_t.isInstancedInterleavedBuffer){for(let Ht=0;Ht<et.locationSize;Ht++)p(et.location+Ht,_t.meshPerAttribute);_.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)m(et.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Ht=0;Ht<et.locationSize;Ht++)w(et.location+Ht,oe/et.locationSize,Y,Jt,Rt*V,(zt+oe/et.locationSize*Ht)*V,bt)}else{if(Ot.isInstancedBufferAttribute){for(let _t=0;_t<et.locationSize;_t++)p(et.location+_t,Ot.meshPerAttribute);_.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let _t=0;_t<et.locationSize;_t++)m(et.location+_t);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let _t=0;_t<et.locationSize;_t++)w(et.location+_t,oe/et.locationSize,Y,Jt,oe*V,oe/et.locationSize*_t*V,bt)}}else if(pt!==void 0){const Jt=pt[Ut];if(Jt!==void 0)switch(Jt.length){case 2:n.vertexAttrib2fv(et.location,Jt);break;case 3:n.vertexAttrib3fv(et.location,Jt);break;case 4:n.vertexAttrib4fv(et.location,Jt);break;default:n.vertexAttrib1fv(et.location,Jt)}}}}M()}function L(){U();for(const _ in i){const N=i[_];for(const W in N){const nt=N[W];for(const mt in nt)o(nt[mt].object),delete nt[mt];delete N[W]}delete i[_]}}function I(_){if(i[_.id]===void 0)return;const N=i[_.id];for(const W in N){const nt=N[W];for(const mt in nt)o(nt[mt].object),delete nt[mt];delete N[W]}delete i[_.id]}function R(_){for(const N in i){const W=i[N];if(W[_.id]===void 0)continue;const nt=W[_.id];for(const mt in nt)o(nt[mt].object),delete nt[mt];delete W[_.id]}}function U(){P(),a=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:U,resetDefaultState:P,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function v2(n,t,e){let i;function s(h){i=h}function r(h,o){n.drawArrays(i,h,o),e.update(o,i,1)}function a(h,o,u){u!==0&&(n.drawArraysInstanced(i,h,o,u),e.update(o,i,u))}function l(h,o,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,o,0,u);let d=0;for(let v=0;v<u;v++)d+=o[v];e.update(d,i,1)}function c(h,o,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)a(h[v],o[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,o,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=o[g]*f[g];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function x2(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Wi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const U=R===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Us&&!U)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const o=c(h);o!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",o,"instead."),h=o);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:L,maxSamples:I}}function _2(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Sr,l=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,o(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=o(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||v===null||v.length===0||r&&!m)r?o(null):h();else{const M=r?0:i,w=M*4;let y=p.clippingState||null;c.value=y,y=o(v,f,w,d);for(let L=0;L!==w;++L)y[L]=e[L];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function o(u,f,d,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=d;w!==g;++w,y+=4)a.copy(u[w]).applyMatrix4(M,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function y2(n){let t=new WeakMap;function e(a,l){return l===au?a.mapping=Qo:l===lu&&(a.mapping=ta),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===au||l===lu)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new jp(c.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class _f extends Yp{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=o*this.view.offsetY,c=l-o*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oo=4,w0=[.125,.215,.35,.446,.526,.582],Kr=20,wh=new _f,S0=new Gt;let Sh=null,Th=0,Eh=0,Ah=!1;const qr=(1+Math.sqrt(5))/2,Ro=1/qr,T0=[new D(-qr,Ro,0),new D(qr,Ro,0),new D(-Ro,0,qr),new D(Ro,0,qr),new D(0,qr,-Ro),new D(0,qr,Ro),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Sh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=A0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,Th,Eh),this._renderer.xr.enabled=Ah,t.scissorTest=!1,Fl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qo||t.mapping===ta?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:ts,format:Wi,colorSpace:ma,depthBuffer:!1},s=E0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M2(r)),this._blurMaterial=b2(r,t,e)}return s}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,wh)}_sceneToCubeUV(t,e,i,s){const l=new Mi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],o=this._renderer,u=o.autoClear,f=o.toneMapping;o.getClearColor(S0),o.toneMapping=cr,o.autoClear=!1;const d=new We({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),v=new ge(new nn,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(S0),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(l.up.set(0,c[p],0),l.lookAt(h[p],0,0)):M===1?(l.up.set(0,0,c[p]),l.lookAt(0,h[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,h[p]));const w=this._cubeSize;Fl(s,M*w,p>2?w:0,w,w),o.setRenderTarget(s),g&&o.render(v,l),o.render(t,l)}v.geometry.dispose(),v.material.dispose(),o.toneMapping=f,o.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Qo||t.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=A0());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const c=this._cubeSize;Fl(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,wh)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=T0[(s-r-1)%T0.length];this._blur(t,r-1,r,a,l)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const o=3,u=new ge(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Kr-1),g=r/v,m=isFinite(r)?1+Math.floor(o*g):Kr;m>Kr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const p=[];let M=0;for(let R=0;R<Kr;++R){const U=R/g,P=Math.exp(-U*U/2);p.push(P),R===0?M+=P:R<m&&(M+=2*P)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:w}=this;f.dTheta.value=v,f.mipInt.value=w-i;const y=this._sizeLods[s],L=3*y*(s>w-Oo?s-w+Oo:0),I=4*(this._cubeSize-y);Fl(e,L,I,3*y,2*y),c.setRenderTarget(e),c.render(u,wh)}}function M2(n){const t=[],e=[],i=[];let s=n;const r=n-Oo+1+w0.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);e.push(l);let c=1/l;a>n-Oo?c=w0[a-n+Oo-1]:a===0&&(c=0),i.push(c);const h=1/(l-2),o=-h,u=1+h,f=[o,o,u,o,u,u,o,o,u,u,o,u],d=6,v=6,g=3,m=2,p=1,M=new Float32Array(g*v*d),w=new Float32Array(m*v*d),y=new Float32Array(p*v*d);for(let I=0;I<d;I++){const R=I%3*2/3-1,U=I>2?0:-1,P=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];M.set(P,g*v*I),w.set(f,m*v*I);const _=[I,I,I,I,I,I];y.set(_,p*v*I)}const L=new $e;L.setAttribute("position",new dn(M,g)),L.setAttribute("uv",new dn(w,m)),L.setAttribute("faceIndex",new dn(y,p)),t.push(L),s>Oo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function E0(n,t,e){const i=new Xi(n,t,e);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function b2(n,t,e){const i=new Float32Array(Kr),s=new D(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yf(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function A0(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function C0(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function w2(n){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const c=l.mapping,h=c===au||c===lu,o=c===Qo||c===ta;if(h||o){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new ao(n)),u=h?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const d=l.image;return h&&d&&d.height>0||o&&d&&s(d)?(e===null&&(e=new ao(n)),u=h?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",r),u.texture):null}}}return l}function s(l){let c=0;const h=6;for(let o=0;o<h;o++)l[o]!==void 0&&c++;return c===h}function r(l){const c=l.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function S2(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ha("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function T2(n,t,e,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,v=u.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let w=0,y=M.length;w<y;w+=3){const L=M[w+0],I=M[w+1],R=M[w+2];f.push(L,I,I,R,R,L)}}else if(v!==void 0){const M=v.array;g=v.version;for(let w=0,y=M.length/3-1;w<y;w+=3){const L=w+0,I=w+1,R=w+2;f.push(L,I,I,R,R,L)}}else return;const m=new(Op(f)?Xp:Wp)(f,1);m.version=g;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function o(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:l,update:c,getWireframeAttribute:o}}function E2(n,t,e){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function h(f,d,v){v!==0&&(n.drawElementsInstanced(i,d,r,f*a,v),e.update(d,i,v))}function o(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,i,1)}function u(f,d,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,v);let p=0;for(let M=0;M<v;M++)p+=d[M]*g[M];e.update(p,i,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function A2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function C2(n,t,e){const i=new WeakMap,s=new Ze;function r(a,l,c){const h=a.morphTargetInfluences,o=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=o!==void 0?o.length:0;let f=i.get(l);if(f===void 0||f.count!==u){let _=function(){U.dispose(),i.delete(l),l.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const v=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let L=l.attributes.position.count*y,I=1;L>t.maxTextureSize&&(I=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*I*4*u),U=new kp(R,L,I,u);U.type=Us,U.needsUpdate=!0;const P=y*4;for(let N=0;N<u;N++){const W=p[N],nt=M[N],mt=w[N],Ct=L*I*4*N;for(let pt=0;pt<W.count;pt++){const Ut=pt*P;v===!0&&(s.fromBufferAttribute(W,pt),R[Ct+Ut+0]=s.x,R[Ct+Ut+1]=s.y,R[Ct+Ut+2]=s.z,R[Ct+Ut+3]=0),g===!0&&(s.fromBufferAttribute(nt,pt),R[Ct+Ut+4]=s.x,R[Ct+Ut+5]=s.y,R[Ct+Ut+6]=s.z,R[Ct+Ut+7]=0),m===!0&&(s.fromBufferAttribute(mt,pt),R[Ct+Ut+8]=s.x,R[Ct+Ut+9]=s.y,R[Ct+Ut+10]=s.z,R[Ct+Ut+11]=mt.itemSize===4?s.w:1)}}f={count:u,texture:U,size:new Xt(L,I)},i.set(l,f),l.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<h.length;m++)v+=h[m];const g=l.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function R2(n,t,e,i){let s=new WeakMap;function r(c){const h=i.render.frame,o=c.geometry,u=t.get(c,o);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class Jp extends bi{constructor(t,e,i,s,r,a,l,c,h,o=Wo){if(o!==Wo&&o!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&o===Wo&&(i=oo),i===void 0&&o===na&&(i=ea),super(null,s,r,a,l,c,o,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Di,this.minFilter=c!==void 0?c:Di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qp=new bi,R0=new Jp(1,1),tm=new kp,em=new x1,nm=new $p,P0=[],L0=[],D0=new Float32Array(16),I0=new Float32Array(9),U0=new Float32Array(4);function xa(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=P0[s];if(r===void 0&&(r=new Float32Array(s),P0[s]=r),t!==0){i.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(r,l)}return r}function Hn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Gn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Hc(n,t){let e=L0[t];e===void 0&&(e=new Int32Array(t),L0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function P2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function L2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;n.uniform2fv(this.addr,t),Gn(e,t)}}function D2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Hn(e,t))return;n.uniform3fv(this.addr,t),Gn(e,t)}}function I2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;n.uniform4fv(this.addr,t),Gn(e,t)}}function U2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Hn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,i))return;U0.set(i),n.uniformMatrix2fv(this.addr,!1,U0),Gn(e,i)}}function F2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Hn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,i))return;I0.set(i),n.uniformMatrix3fv(this.addr,!1,I0),Gn(e,i)}}function z2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Hn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Gn(e,t)}else{if(Hn(e,i))return;D0.set(i),n.uniformMatrix4fv(this.addr,!1,D0),Gn(e,i)}}function N2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function O2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;n.uniform2iv(this.addr,t),Gn(e,t)}}function B2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;n.uniform3iv(this.addr,t),Gn(e,t)}}function k2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;n.uniform4iv(this.addr,t),Gn(e,t)}}function H2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function G2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Hn(e,t))return;n.uniform2uiv(this.addr,t),Gn(e,t)}}function V2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Hn(e,t))return;n.uniform3uiv(this.addr,t),Gn(e,t)}}function W2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Hn(e,t))return;n.uniform4uiv(this.addr,t),Gn(e,t)}}function X2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(R0.compareFunction=Np,r=R0):r=Qp,e.setTexture2D(t||r,s)}function q2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||em,s)}function Y2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nm,s)}function K2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tm,s)}function $2(n){switch(n){case 5126:return P2;case 35664:return L2;case 35665:return D2;case 35666:return I2;case 35674:return U2;case 35675:return F2;case 35676:return z2;case 5124:case 35670:return N2;case 35667:case 35671:return O2;case 35668:case 35672:return B2;case 35669:case 35673:return k2;case 5125:return H2;case 36294:return G2;case 36295:return V2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return K2}}function j2(n,t){n.uniform1fv(this.addr,t)}function Z2(n,t){const e=xa(t,this.size,2);n.uniform2fv(this.addr,e)}function J2(n,t){const e=xa(t,this.size,3);n.uniform3fv(this.addr,e)}function Q2(n,t){const e=xa(t,this.size,4);n.uniform4fv(this.addr,e)}function t_(n,t){const e=xa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e_(n,t){const e=xa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n_(n,t){const e=xa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i_(n,t){n.uniform1iv(this.addr,t)}function s_(n,t){n.uniform2iv(this.addr,t)}function r_(n,t){n.uniform3iv(this.addr,t)}function o_(n,t){n.uniform4iv(this.addr,t)}function a_(n,t){n.uniform1uiv(this.addr,t)}function l_(n,t){n.uniform2uiv(this.addr,t)}function c_(n,t){n.uniform3uiv(this.addr,t)}function h_(n,t){n.uniform4uiv(this.addr,t)}function u_(n,t,e){const i=this.cache,s=t.length,r=Hc(e,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Qp,r[a])}function f_(n,t,e){const i=this.cache,s=t.length,r=Hc(e,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||em,r[a])}function d_(n,t,e){const i=this.cache,s=t.length,r=Hc(e,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nm,r[a])}function p_(n,t,e){const i=this.cache,s=t.length,r=Hc(e,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tm,r[a])}function m_(n){switch(n){case 5126:return j2;case 35664:return Z2;case 35665:return J2;case 35666:return Q2;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$2(e.type)}}class v_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}}class x_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],i)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function F0(n,t){n.seq.push(t),n.map[t.id]=t}function __(n,t,e){const i=n.name,s=i.length;for(Ch.lastIndex=0;;){const r=Ch.exec(i),a=Ch.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){F0(e,h===void 0?new g_(l,n,t):new v_(l,n,t));break}else{let u=e.map[l];u===void 0&&(u=new x_(l),F0(e,u)),e=u}}}class uc{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);__(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function z0(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const y_=37297;let M_=0;function b_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}const N0=new De;function w_(n){Ke._getMatrix(N0,Ke.workingColorSpace,n);const t=`mat3( ${N0.elements.map(e=>e.toFixed(4))} )`;switch(Ke.getTransfer(n)){case kc:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function O0(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+b_(n.getShaderSource(t),a)}else return s}function S_(n,t){const e=w_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function T_(n,t){let e;switch(t){case Pg:e="Linear";break;case Lg:e="Reinhard";break;case Dg:e="Cineon";break;case Ig:e="ACESFilmic";break;case Fg:e="AgX";break;case zg:e="Neutral";break;case Ug:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zl=new D;function E_(){Ke.getLuminanceCoefficients(zl);const n=zl.x.toFixed(4),t=zl.y.toFixed(4),e=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function C_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function R_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function Ga(n){return n!==""}function B0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(n){return n.replace(P_,D_)}const L_=new Map;function D_(n,t){let e=Ue[t];if(e===void 0){const i=L_.get(t);if(i!==void 0)e=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(n){return n.replace(I_,U_)}function U_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function G0(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ug?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ys&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qo:case ta:t="ENVMAP_TYPE_CUBE";break;case Bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ta:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tp:t="ENVMAP_BLENDING_MULTIPLY";break;case Cg:t="ENVMAP_BLENDING_MIX";break;case Rg:t="ENVMAP_BLENDING_ADD";break}return t}function B_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function k_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=F_(e),h=z_(e),o=N_(e),u=O_(e),f=B_(e),d=A_(e),v=C_(r),g=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[G0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+o:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Ue.tonemapping_pars_fragment:"",e.toneMapping!==cr?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,S_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ga).join(`
`)),a=Ou(a),a=B0(a,e),a=k0(a,e),l=Ou(l),l=B0(l,e),l=k0(l,e),a=H0(a),l=H0(l),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,y=M+p+l,L=z0(s,s.VERTEX_SHADER,w),I=z0(s,s.FRAGMENT_SHADER,y);s.attachShader(g,L),s.attachShader(g,I),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(N){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),nt=s.getShaderInfoLog(L).trim(),mt=s.getShaderInfoLog(I).trim();let Ct=!0,pt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,L,I);else{const Ut=O0(s,L,"vertex"),et=O0(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+Ut+`
`+et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(nt===""||mt==="")&&(pt=!1);pt&&(N.diagnostics={runnable:Ct,programLog:W,vertexShader:{log:nt,prefix:m},fragmentShader:{log:mt,prefix:p}})}s.deleteShader(L),s.deleteShader(I),U=new uc(s,g),P=R_(s,g)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(g,y_)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=I,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new V_(t),e.set(t,i)),i}}class V_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function W_(n,t,e,i,s,r,a){const l=new Gp,c=new G_,h=new Set,o=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(P){return h.add(P),P===0?"uv":`uv${P}`}function m(P,_,N,W,nt){const mt=W.fog,Ct=nt.geometry,pt=P.isMeshStandardMaterial?W.environment:null,Ut=(P.isMeshStandardMaterial?e:t).get(P.envMap||pt),et=Ut&&Ut.mapping===Bc?Ut.image.height:null,Ot=v[P.type];P.precision!==null&&(d=s.getMaxPrecision(P.precision),d!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",d,"instead."));const Jt=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,oe=Jt!==void 0?Jt.length:0;let ce=0;Ct.morphAttributes.position!==void 0&&(ce=1),Ct.morphAttributes.normal!==void 0&&(ce=2),Ct.morphAttributes.color!==void 0&&(ce=3);let lt,Y,V,bt;if(Ot){const we=Ps[Ot];lt=we.vertexShader,Y=we.fragmentShader}else lt=P.vertexShader,Y=P.fragmentShader,c.update(P),V=c.getVertexShaderID(P),bt=c.getFragmentShaderID(P);const _t=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),zt=nt.isInstancedMesh===!0,Ht=nt.isBatchedMesh===!0,re=!!P.map,yt=!!P.matcap,Nt=!!Ut,z=!!P.aoMap,jt=!!P.lightMap,Vt=!!P.bumpMap,se=!!P.normalMap,K=!!P.displacementMap,gt=!!P.emissiveMap,ft=!!P.metalnessMap,C=!!P.roughnessMap,E=P.anisotropy>0,G=P.clearcoat>0,q=P.dispersion>0,J=P.iridescence>0,Z=P.sheen>0,wt=P.transmission>0,Q=E&&!!P.anisotropyMap,ct=G&&!!P.clearcoatMap,rt=G&&!!P.clearcoatNormalMap,k=G&&!!P.clearcoatRoughnessMap,tt=J&&!!P.iridescenceMap,Mt=J&&!!P.iridescenceThicknessMap,Et=Z&&!!P.sheenColorMap,St=Z&&!!P.sheenRoughnessMap,qt=!!P.specularMap,kt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,F=wt&&!!P.transmissionMap,dt=wt&&!!P.thicknessMap,at=!!P.gradientMap,H=!!P.alphaMap,ht=P.alphaTest>0,At=!!P.alphaHash,Kt=!!P.extensions;let ve=cr;P.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Re={shaderID:Ot,shaderType:P.type,shaderName:P.name,vertexShader:lt,fragmentShader:Y,defines:P.defines,customVertexShaderID:V,customFragmentShaderID:bt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&nt._colorsTexture!==null,instancing:zt,instancingColor:zt&&nt.instanceColor!==null,instancingMorph:zt&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ma,alphaToCoverage:!!P.alphaToCoverage,map:re,matcap:yt,envMap:Nt,envMapMode:Nt&&Ut.mapping,envMapCubeUVHeight:et,aoMap:z,lightMap:jt,bumpMap:Vt,normalMap:se,displacementMap:f&&K,emissiveMap:gt,normalMapObjectSpace:se&&P.normalMapType===kg,normalMapTangentSpace:se&&P.normalMapType===zp,metalnessMap:ft,roughnessMap:C,anisotropy:E,anisotropyMap:Q,clearcoat:G,clearcoatMap:ct,clearcoatNormalMap:rt,clearcoatRoughnessMap:k,dispersion:q,iridescence:J,iridescenceMap:tt,iridescenceThicknessMap:Mt,sheen:Z,sheenColorMap:Et,sheenRoughnessMap:St,specularMap:qt,specularColorMap:kt,specularIntensityMap:Tt,transmission:wt,transmissionMap:F,thicknessMap:dt,gradientMap:at,opaque:P.transparent===!1&&P.blending===Vo&&P.alphaToCoverage===!1,alphaMap:H,alphaTest:ht,alphaHash:At,combine:P.combine,mapUv:re&&g(P.map.channel),aoMapUv:z&&g(P.aoMap.channel),lightMapUv:jt&&g(P.lightMap.channel),bumpMapUv:Vt&&g(P.bumpMap.channel),normalMapUv:se&&g(P.normalMap.channel),displacementMapUv:K&&g(P.displacementMap.channel),emissiveMapUv:gt&&g(P.emissiveMap.channel),metalnessMapUv:ft&&g(P.metalnessMap.channel),roughnessMapUv:C&&g(P.roughnessMap.channel),anisotropyMapUv:Q&&g(P.anisotropyMap.channel),clearcoatMapUv:ct&&g(P.clearcoatMap.channel),clearcoatNormalMapUv:rt&&g(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(P.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(P.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&g(P.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(P.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(P.sheenRoughnessMap.channel),specularMapUv:qt&&g(P.specularMap.channel),specularColorMapUv:kt&&g(P.specularColorMap.channel),specularIntensityMapUv:Tt&&g(P.specularIntensityMap.channel),transmissionMapUv:F&&g(P.transmissionMap.channel),thicknessMapUv:dt&&g(P.thicknessMap.channel),alphaMapUv:H&&g(P.alphaMap.channel),vertexTangents:!!Ct.attributes.tangent&&(se||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!Ct.attributes.uv&&(re||H),fog:!!mt,useFog:P.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:nt.isSkinnedMesh===!0,morphTargets:Ct.morphAttributes.position!==void 0,morphNormals:Ct.morphAttributes.normal!==void 0,morphColors:Ct.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:re&&P.map.isVideoTexture===!0&&Ke.getTransfer(P.map.colorSpace)===ln,decodeVideoTextureEmissive:gt&&P.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(P.emissiveMap.colorSpace)===ln,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ve,flipSided:P.side===Qn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Kt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&P.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function p(P){const _=[];if(P.shaderID?_.push(P.shaderID):(_.push(P.customVertexShaderID),_.push(P.customFragmentShaderID)),P.defines!==void 0)for(const N in P.defines)_.push(N),_.push(P.defines[N]);return P.isRawShaderMaterial===!1&&(M(_,P),w(_,P),_.push(n.outputColorSpace)),_.push(P.customProgramCacheKey),_.join()}function M(P,_){P.push(_.precision),P.push(_.outputColorSpace),P.push(_.envMapMode),P.push(_.envMapCubeUVHeight),P.push(_.mapUv),P.push(_.alphaMapUv),P.push(_.lightMapUv),P.push(_.aoMapUv),P.push(_.bumpMapUv),P.push(_.normalMapUv),P.push(_.displacementMapUv),P.push(_.emissiveMapUv),P.push(_.metalnessMapUv),P.push(_.roughnessMapUv),P.push(_.anisotropyMapUv),P.push(_.clearcoatMapUv),P.push(_.clearcoatNormalMapUv),P.push(_.clearcoatRoughnessMapUv),P.push(_.iridescenceMapUv),P.push(_.iridescenceThicknessMapUv),P.push(_.sheenColorMapUv),P.push(_.sheenRoughnessMapUv),P.push(_.specularMapUv),P.push(_.specularColorMapUv),P.push(_.specularIntensityMapUv),P.push(_.transmissionMapUv),P.push(_.thicknessMapUv),P.push(_.combine),P.push(_.fogExp2),P.push(_.sizeAttenuation),P.push(_.morphTargetsCount),P.push(_.morphAttributeCount),P.push(_.numDirLights),P.push(_.numPointLights),P.push(_.numSpotLights),P.push(_.numSpotLightMaps),P.push(_.numHemiLights),P.push(_.numRectAreaLights),P.push(_.numDirLightShadows),P.push(_.numPointLightShadows),P.push(_.numSpotLightShadows),P.push(_.numSpotLightShadowsWithMaps),P.push(_.numLightProbes),P.push(_.shadowMapType),P.push(_.toneMapping),P.push(_.numClippingPlanes),P.push(_.numClipIntersection),P.push(_.depthPacking)}function w(P,_){l.disableAll(),_.supportsVertexTextures&&l.enable(0),_.instancing&&l.enable(1),_.instancingColor&&l.enable(2),_.instancingMorph&&l.enable(3),_.matcap&&l.enable(4),_.envMap&&l.enable(5),_.normalMapObjectSpace&&l.enable(6),_.normalMapTangentSpace&&l.enable(7),_.clearcoat&&l.enable(8),_.iridescence&&l.enable(9),_.alphaTest&&l.enable(10),_.vertexColors&&l.enable(11),_.vertexAlphas&&l.enable(12),_.vertexUv1s&&l.enable(13),_.vertexUv2s&&l.enable(14),_.vertexUv3s&&l.enable(15),_.vertexTangents&&l.enable(16),_.anisotropy&&l.enable(17),_.alphaHash&&l.enable(18),_.batching&&l.enable(19),_.dispersion&&l.enable(20),_.batchingColor&&l.enable(21),P.push(l.mask),l.disableAll(),_.fog&&l.enable(0),_.useFog&&l.enable(1),_.flatShading&&l.enable(2),_.logarithmicDepthBuffer&&l.enable(3),_.reverseDepthBuffer&&l.enable(4),_.skinning&&l.enable(5),_.morphTargets&&l.enable(6),_.morphNormals&&l.enable(7),_.morphColors&&l.enable(8),_.premultipliedAlpha&&l.enable(9),_.shadowMapEnabled&&l.enable(10),_.doubleSided&&l.enable(11),_.flipSided&&l.enable(12),_.useDepthPacking&&l.enable(13),_.dithering&&l.enable(14),_.transmission&&l.enable(15),_.sheen&&l.enable(16),_.opaque&&l.enable(17),_.pointsUvs&&l.enable(18),_.decodeVideoTexture&&l.enable(19),_.decodeVideoTextureEmissive&&l.enable(20),_.alphaToCoverage&&l.enable(21),P.push(l.mask)}function y(P){const _=v[P.type];let N;if(_){const W=Ps[_];N=_s.clone(W.uniforms)}else N=P.uniforms;return N}function L(P,_){let N;for(let W=0,nt=o.length;W<nt;W++){const mt=o[W];if(mt.cacheKey===_){N=mt,++N.usedTimes;break}}return N===void 0&&(N=new k_(n,_,P,r),o.push(N)),N}function I(P){if(--P.usedTimes===0){const _=o.indexOf(P);o[_]=o[o.length-1],o.pop(),P.destroy()}}function R(P){c.remove(P)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:I,releaseShaderCache:R,programs:o,dispose:U}}function X_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function V0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function W0(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,d,v,g,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function l(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||q_),i.length>1&&i.sort(f||V0),s.length>1&&s.sort(f||V0)}function o(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:o,sort:h}}function Y_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new W0,n.set(i,[a])):s>=r.length?(a=new W0,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function K_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Gt};break;case"SpotLight":e={position:new D,direction:new D,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function $_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let j_=0;function Z_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function J_(n){const t=new K_,e=$_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,r=new Pe,a=new Pe;function l(h){let o=0,u=0,f=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,M=0,w=0,y=0,L=0,I=0,R=0;h.sort(Z_);for(let P=0,_=h.length;P<_;P++){const N=h[P],W=N.color,nt=N.intensity,mt=N.distance,Ct=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)o+=W.r*nt,u+=W.g*nt,f+=W.b*nt;else if(N.isLightProbe){for(let pt=0;pt<9;pt++)i.probe[pt].addScaledVector(N.sh.coefficients[pt],nt);R++}else if(N.isDirectionalLight){const pt=t.get(N);if(pt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Ut=N.shadow,et=e.get(N);et.shadowIntensity=Ut.intensity,et.shadowBias=Ut.bias,et.shadowNormalBias=Ut.normalBias,et.shadowRadius=Ut.radius,et.shadowMapSize=Ut.mapSize,i.directionalShadow[d]=et,i.directionalShadowMap[d]=Ct,i.directionalShadowMatrix[d]=N.shadow.matrix,M++}i.directional[d]=pt,d++}else if(N.isSpotLight){const pt=t.get(N);pt.position.setFromMatrixPosition(N.matrixWorld),pt.color.copy(W).multiplyScalar(nt),pt.distance=mt,pt.coneCos=Math.cos(N.angle),pt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),pt.decay=N.decay,i.spot[g]=pt;const Ut=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,Ut.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[g]=Ut.matrix,N.castShadow){const et=e.get(N);et.shadowIntensity=Ut.intensity,et.shadowBias=Ut.bias,et.shadowNormalBias=Ut.normalBias,et.shadowRadius=Ut.radius,et.shadowMapSize=Ut.mapSize,i.spotShadow[g]=et,i.spotShadowMap[g]=Ct,y++}g++}else if(N.isRectAreaLight){const pt=t.get(N);pt.color.copy(W).multiplyScalar(nt),pt.halfWidth.set(N.width*.5,0,0),pt.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=pt,m++}else if(N.isPointLight){const pt=t.get(N);if(pt.color.copy(N.color).multiplyScalar(N.intensity),pt.distance=N.distance,pt.decay=N.decay,N.castShadow){const Ut=N.shadow,et=e.get(N);et.shadowIntensity=Ut.intensity,et.shadowBias=Ut.bias,et.shadowNormalBias=Ut.normalBias,et.shadowRadius=Ut.radius,et.shadowMapSize=Ut.mapSize,et.shadowCameraNear=Ut.camera.near,et.shadowCameraFar=Ut.camera.far,i.pointShadow[v]=et,i.pointShadowMap[v]=Ct,i.pointShadowMatrix[v]=N.shadow.matrix,w++}i.point[v]=pt,v++}else if(N.isHemisphereLight){const pt=t.get(N);pt.skyColor.copy(N.color).multiplyScalar(nt),pt.groundColor.copy(N.groundColor).multiplyScalar(nt),i.hemi[p]=pt,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=u,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==d||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==w||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,U.directionalLength=d,U.pointLength=v,U.spotLength=g,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=w,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=R,i.version=j_++)}function c(h,o){let u=0,f=0,d=0,v=0,g=0;const m=o.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){const w=h[p];if(w.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function X0(n){const t=new J_(n),e=[],i=[];function s(o){h.camera=o,e.length=0,i.length=0}function r(o){e.push(o)}function a(o){i.push(o)}function l(){t.setup(e)}function c(o){t.setupView(e,o)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function Q_(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new X0(n),t.set(s,[l])):r>=a.length?(l=new X0(n),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}class ty extends uo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ey extends uo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`;function sy(n,t,e){let i=new xf;const s=new Xt,r=new Xt,a=new Ze,l=new ty({depthPacking:Bg}),c=new ey,h={},o=e.maxTextureSize,u={[Os]:Qn,[Qn]:Os,[Ve]:Ve},f=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new $e;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ge(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bp;let p=this.type;this.render=function(I,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const P=n.getRenderTarget(),_=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(lr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const nt=p!==Ys&&this.type===Ys,mt=p===Ys&&this.type!==Ys;for(let Ct=0,pt=I.length;Ct<pt;Ct++){const Ut=I[Ct],et=Ut.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",Ut,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);const Ot=et.getFrameExtents();if(s.multiply(Ot),r.copy(et.mapSize),(s.x>o||s.y>o)&&(s.x>o&&(r.x=Math.floor(o/Ot.x),s.x=r.x*Ot.x,et.mapSize.x=r.x),s.y>o&&(r.y=Math.floor(o/Ot.y),s.y=r.y*Ot.y,et.mapSize.y=r.y)),et.map===null||nt===!0||mt===!0){const oe=this.type!==Ys?{minFilter:Di,magFilter:Di}:{};et.map!==null&&et.map.dispose(),et.map=new Xi(s.x,s.y,oe),et.map.texture.name=Ut.name+".shadowMap",et.camera.updateProjectionMatrix()}n.setRenderTarget(et.map),n.clear();const Jt=et.getViewportCount();for(let oe=0;oe<Jt;oe++){const ce=et.getViewport(oe);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),W.viewport(a),et.updateMatrices(Ut,oe),i=et.getFrustum(),y(R,U,et.camera,Ut,this.type)}et.isPointLightShadow!==!0&&this.type===Ys&&M(et,U),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(P,_,N)};function M(I,R){const U=t.update(g);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,U,d,g,null)}function w(I,R,U,P){let _=null;const N=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)_=N;else if(_=U.isPointLight===!0?c:l,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=_.uuid,nt=R.uuid;let mt=h[W];mt===void 0&&(mt={},h[W]=mt);let Ct=mt[nt];Ct===void 0&&(Ct=_.clone(),mt[nt]=Ct,R.addEventListener("dispose",L)),_=Ct}if(_.visible=R.visible,_.wireframe=R.wireframe,P===Ys?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=n.properties.get(_);W.light=U}return _}function y(I,R,U,P,_){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&_===Ys)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const nt=t.update(I),mt=I.material;if(Array.isArray(mt)){const Ct=nt.groups;for(let pt=0,Ut=Ct.length;pt<Ut;pt++){const et=Ct[pt],Ot=mt[et.materialIndex];if(Ot&&Ot.visible){const Jt=w(I,Ot,P,_);I.onBeforeShadow(n,I,R,U,nt,Jt,et),n.renderBufferDirect(U,null,nt,Jt,I,et),I.onAfterShadow(n,I,R,U,nt,Jt,et)}}}else if(mt.visible){const Ct=w(I,mt,P,_);I.onBeforeShadow(n,I,R,U,nt,Ct,null),n.renderBufferDirect(U,null,nt,Ct,I,null),I.onAfterShadow(n,I,R,U,nt,Ct,null)}}const W=I.children;for(let nt=0,mt=W.length;nt<mt;nt++)y(W[nt],R,U,P,_)}function L(I){I.target.removeEventListener("dispose",L);for(const U in h){const P=h[U],_=I.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const ry={[tu]:eu,[nu]:ru,[iu]:ou,[Jo]:su,[eu]:tu,[ru]:nu,[ou]:iu,[su]:Jo};function oy(n,t){function e(){let F=!1;const dt=new Ze;let at=null;const H=new Ze(0,0,0,0);return{setMask:function(ht){at!==ht&&!F&&(n.colorMask(ht,ht,ht,ht),at=ht)},setLocked:function(ht){F=ht},setClear:function(ht,At,Kt,ve,Re){Re===!0&&(ht*=ve,At*=ve,Kt*=ve),dt.set(ht,At,Kt,ve),H.equals(dt)===!1&&(n.clearColor(ht,At,Kt,ve),H.copy(dt))},reset:function(){F=!1,at=null,H.set(-1,0,0,0)}}}function i(){let F=!1,dt=!1,at=null,H=null,ht=null;return{setReversed:function(At){if(dt!==At){const Kt=t.get("EXT_clip_control");dt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const ve=ht;ht=null,this.setClear(ve)}dt=At},getReversed:function(){return dt},setTest:function(At){At?_t(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(At){at!==At&&!F&&(n.depthMask(At),at=At)},setFunc:function(At){if(dt&&(At=ry[At]),H!==At){switch(At){case tu:n.depthFunc(n.NEVER);break;case eu:n.depthFunc(n.ALWAYS);break;case nu:n.depthFunc(n.LESS);break;case Jo:n.depthFunc(n.LEQUAL);break;case iu:n.depthFunc(n.EQUAL);break;case su:n.depthFunc(n.GEQUAL);break;case ru:n.depthFunc(n.GREATER);break;case ou:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}H=At}},setLocked:function(At){F=At},setClear:function(At){ht!==At&&(dt&&(At=1-At),n.clearDepth(At),ht=At)},reset:function(){F=!1,at=null,H=null,ht=null,dt=!1}}}function s(){let F=!1,dt=null,at=null,H=null,ht=null,At=null,Kt=null,ve=null,Re=null;return{setTest:function(we){F||(we?_t(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(we){dt!==we&&!F&&(n.stencilMask(we),dt=we)},setFunc:function(we,Ie,ut){(at!==we||H!==Ie||ht!==ut)&&(n.stencilFunc(we,Ie,ut),at=we,H=Ie,ht=ut)},setOp:function(we,Ie,ut){(At!==we||Kt!==Ie||ve!==ut)&&(n.stencilOp(we,Ie,ut),At=we,Kt=Ie,ve=ut)},setLocked:function(we){F=we},setClear:function(we){Re!==we&&(n.clearStencil(we),Re=we)},reset:function(){F=!1,dt=null,at=null,H=null,ht=null,At=null,Kt=null,ve=null,Re=null}}}const r=new e,a=new i,l=new s,c=new WeakMap,h=new WeakMap;let o={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,M=null,w=null,y=null,L=null,I=null,R=new Gt(0,0,0),U=0,P=!1,_=null,N=null,W=null,nt=null,mt=null;const Ct=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,Ut=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(Ut=parseFloat(/^WebGL (\d)/.exec(et)[1]),pt=Ut>=1):et.indexOf("OpenGL ES")!==-1&&(Ut=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),pt=Ut>=2);let Ot=null,Jt={};const oe=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),lt=new Ze().fromArray(oe),Y=new Ze().fromArray(ce);function V(F,dt,at,H){const ht=new Uint8Array(4),At=n.createTexture();n.bindTexture(F,At),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<at;Kt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,H,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(dt+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return At}const bt={};bt[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),_t(n.DEPTH_TEST),a.setFunc(Jo),Vt(!1),se(Zf),_t(n.CULL_FACE),z(lr);function _t(F){o[F]!==!0&&(n.enable(F),o[F]=!0)}function Rt(F){o[F]!==!1&&(n.disable(F),o[F]=!1)}function zt(F,dt){return u[F]!==dt?(n.bindFramebuffer(F,dt),u[F]=dt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ht(F,dt){let at=d,H=!1;if(F){at=f.get(dt),at===void 0&&(at=[],f.set(dt,at));const ht=F.textures;if(at.length!==ht.length||at[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Kt=ht.length;At<Kt;At++)at[At]=n.COLOR_ATTACHMENT0+At;at.length=ht.length,H=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,H=!0);H&&n.drawBuffers(at)}function re(F){return v!==F?(n.useProgram(F),v=F,!0):!1}const yt={[Yr]:n.FUNC_ADD,[fg]:n.FUNC_SUBTRACT,[dg]:n.FUNC_REVERSE_SUBTRACT};yt[pg]=n.MIN,yt[mg]=n.MAX;const Nt={[gg]:n.ZERO,[Sp]:n.ONE,[vg]:n.SRC_COLOR,[Qh]:n.SRC_ALPHA,[wg]:n.SRC_ALPHA_SATURATE,[Mg]:n.DST_COLOR,[_g]:n.DST_ALPHA,[xg]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[bg]:n.ONE_MINUS_DST_COLOR,[yg]:n.ONE_MINUS_DST_ALPHA,[Sg]:n.CONSTANT_COLOR,[Tg]:n.ONE_MINUS_CONSTANT_COLOR,[Eg]:n.CONSTANT_ALPHA,[Ag]:n.ONE_MINUS_CONSTANT_ALPHA};function z(F,dt,at,H,ht,At,Kt,ve,Re,we){if(F===lr){g===!0&&(Rt(n.BLEND),g=!1);return}if(g===!1&&(_t(n.BLEND),g=!0),F!==wp){if(F!==m||we!==P){if((p!==Yr||y!==Yr)&&(n.blendEquation(n.FUNC_ADD),p=Yr,y=Yr),we)switch(F){case Vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,w=null,L=null,I=null,R.set(0,0,0),U=0,m=F,P=we}return}ht=ht||dt,At=At||at,Kt=Kt||H,(dt!==p||ht!==y)&&(n.blendEquationSeparate(yt[dt],yt[ht]),p=dt,y=ht),(at!==M||H!==w||At!==L||Kt!==I)&&(n.blendFuncSeparate(Nt[at],Nt[H],Nt[At],Nt[Kt]),M=at,w=H,L=At,I=Kt),(ve.equals(R)===!1||Re!==U)&&(n.blendColor(ve.r,ve.g,ve.b,Re),R.copy(ve),U=Re),m=F,P=!1}function jt(F,dt){F.side===Ve?Rt(n.CULL_FACE):_t(n.CULL_FACE);let at=F.side===Qn;dt&&(at=!at),Vt(at),F.blending===Vo&&F.transparent===!1?z(lr):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const H=F.stencilWrite;l.setTest(H),H&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function se(F){F!==cg?(_t(n.CULL_FACE),F!==N&&(F===Zf?n.cullFace(n.BACK):F===hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),N=F}function K(F){F!==W&&(pt&&n.lineWidth(F),W=F)}function gt(F,dt,at){F?(_t(n.POLYGON_OFFSET_FILL),(nt!==dt||mt!==at)&&(n.polygonOffset(dt,at),nt=dt,mt=at)):Rt(n.POLYGON_OFFSET_FILL)}function ft(F){F?_t(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function C(F){F===void 0&&(F=n.TEXTURE0+Ct-1),Ot!==F&&(n.activeTexture(F),Ot=F)}function E(F,dt,at){at===void 0&&(Ot===null?at=n.TEXTURE0+Ct-1:at=Ot);let H=Jt[at];H===void 0&&(H={type:void 0,texture:void 0},Jt[at]=H),(H.type!==F||H.texture!==dt)&&(Ot!==at&&(n.activeTexture(at),Ot=at),n.bindTexture(F,dt||bt[F]),H.type=F,H.texture=dt)}function G(){const F=Jt[Ot];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(F){lt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),lt.copy(F))}function St(F){Y.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function qt(F,dt){let at=h.get(dt);at===void 0&&(at=new WeakMap,h.set(dt,at));let H=at.get(F);H===void 0&&(H=n.getUniformBlockIndex(dt,F.name),at.set(F,H))}function kt(F,dt){const H=h.get(dt).get(F);c.get(dt)!==H&&(n.uniformBlockBinding(dt,H,F.__bindingPointIndex),c.set(dt,H))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),o={},Ot=null,Jt={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,M=null,w=null,y=null,L=null,I=null,R=new Gt(0,0,0),U=0,P=!1,_=null,N=null,W=null,nt=null,mt=null,lt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:_t,disable:Rt,bindFramebuffer:zt,drawBuffers:Ht,useProgram:re,setBlending:z,setMaterial:jt,setFlipSided:Vt,setCullFace:se,setLineWidth:K,setPolygonOffset:gt,setScissorTest:ft,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:tt,texImage3D:Mt,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:rt,texStorage3D:k,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:Q,compressedTexSubImage3D:ct,scissor:Et,viewport:St,reset:Tt}}function q0(n,t,e,i){const s=ay(i);switch(e){case Pp:return n*t;case Dp:return n*t;case Ip:return n*t*2;case df:return n*t/s.components*s.byteLength;case pf:return n*t/s.components*s.byteLength;case Up:return n*t*2/s.components*s.byteLength;case mf:return n*t*2/s.components*s.byteLength;case Lp:return n*t*3/s.components*s.byteLength;case Wi:return n*t*4/s.components*s.byteLength;case gf:return n*t*4/s.components*s.byteLength;case oc:case ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fu:case pu:return Math.max(n,16)*Math.max(t,8)/4;case uu:case du:return Math.max(n,8)*Math.max(t,8)/2;case mu:case gu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _u:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case bu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Su:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Au:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Lu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hc:case Du:case Iu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Fp:case Uu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fu:case zu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ay(n){switch(n){case dr:case Ap:return{byteLength:1,components:1};case rl:case Cp:case ts:return{byteLength:2,components:1};case uf:case ff:return{byteLength:2,components:4};case oo:case hf:case Us:return{byteLength:4,components:1};case Rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function ly(n,t,e,i,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,o=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return d?new OffscreenCanvas(C,E):yc("canvas")}function g(C,E,G){let q=1;const J=ft(C);if((J.width>G||J.height>G)&&(q=G/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(q*J.width),wt=Math.floor(q*J.height);u===void 0&&(u=v(Z,wt));const Q=E?v(Z,wt):u;return Q.width=Z,Q.height=wt,Q.getContext("2d").drawImage(C,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+wt+")."),Q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,E,G,q,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=E;if(E===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),G===n.UNSIGNED_INT&&(Z=n.RGB32UI),G===n.BYTE&&(Z=n.RGB8I),G===n.SHORT&&(Z=n.RGB16I),G===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),G===n.UNSIGNED_INT&&(Z=n.RGBA32UI),G===n.BYTE&&(Z=n.RGBA8I),G===n.SHORT&&(Z=n.RGBA16I),G===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const wt=J?kc:Ke.getTransfer(q);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=wt===ln?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(C,E){let G;return C?E===null||E===oo||E===ea?G=n.DEPTH24_STENCIL8:E===Us?G=n.DEPTH32F_STENCIL8:E===rl&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oo||E===ea?G=n.DEPTH_COMPONENT24:E===Us?G=n.DEPTH_COMPONENT32F:E===rl&&(G=n.DEPTH_COMPONENT16),G}function L(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Di&&C.minFilter!==Qi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){const E=C.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&o.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),_(E)}function U(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,q=f.get(G);if(q){const J=q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(q).length===0&&f.delete(G)}i.remove(C)}function P(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const G=C.source,q=f.get(G);delete q[E.__cacheKey],a.memory.textures--}function _(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let J=0;J<E.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[q][J]);else n.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)n.deleteFramebuffer(E.__webglFramebuffer[q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let q=0,J=G.length;q<J;q++){const Z=i.get(G[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(C)}let N=0;function W(){N=0}function nt(){const C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function mt(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Ct(C,E){const G=i.get(C);if(C.isVideoTexture&&K(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,C,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function pt(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function Ut(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){Y(G,C,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function et(C,E){const G=i.get(C);if(C.version>0&&G.__version!==C.version){V(G,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const Ot={[cu]:n.REPEAT,[Qr]:n.CLAMP_TO_EDGE,[hu]:n.MIRRORED_REPEAT},Jt={[Di]:n.NEAREST,[Ng]:n.NEAREST_MIPMAP_NEAREST,[gl]:n.NEAREST_MIPMAP_LINEAR,[Qi]:n.LINEAR,[nh]:n.LINEAR_MIPMAP_NEAREST,[to]:n.LINEAR_MIPMAP_LINEAR},oe={[Hg]:n.NEVER,[Yg]:n.ALWAYS,[Gg]:n.LESS,[Np]:n.LEQUAL,[Vg]:n.EQUAL,[qg]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function ce(C,E){if(E.type===Us&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qi||E.magFilter===nh||E.magFilter===gl||E.magFilter===to||E.minFilter===Qi||E.minFilter===nh||E.minFilter===gl||E.minFilter===to)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ot[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ot[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ot[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Jt[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Jt[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Di||E.minFilter!==gl&&E.minFilter!==to||E.type===Us&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function lt(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const q=E.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const Z=mt(E);if(Z!==C.__cacheKey){J[Z]===void 0&&(J[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[Z].usedTimes++;const wt=J[C.__cacheKey];wt!==void 0&&(J[C.__cacheKey].usedTimes--,wt.usedTimes===0&&P(E)),C.__cacheKey=Z,C.__webglTexture=J[Z].texture}return G}function Y(C,E,G){let q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=n.TEXTURE_3D);const J=lt(C,E),Z=E.source;e.bindTexture(q,C.__webglTexture,n.TEXTURE0+G);const wt=i.get(Z);if(Z.version!==wt.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const Q=Ke.getPrimaries(Ke.workingColorSpace),ct=E.colorSpace===er?null:Ke.getPrimaries(E.colorSpace),rt=E.colorSpace===er||Q===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let k=g(E.image,!1,s.maxTextureSize);k=gt(E,k);const tt=r.convert(E.format,E.colorSpace),Mt=r.convert(E.type);let Et=w(E.internalFormat,tt,Mt,E.colorSpace,E.isVideoTexture);ce(q,E);let St;const qt=E.mipmaps,kt=E.isVideoTexture!==!0,Tt=wt.__version===void 0||J===!0,F=Z.dataReady,dt=L(E,k);if(E.isDepthTexture)Et=y(E.format===na,E.type),Tt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,Et,k.width,k.height):e.texImage2D(n.TEXTURE_2D,0,Et,k.width,k.height,0,tt,Mt,null));else if(E.isDataTexture)if(qt.length>0){kt&&Tt&&e.texStorage2D(n.TEXTURE_2D,dt,Et,qt[0].width,qt[0].height);for(let at=0,H=qt.length;at<H;at++)St=qt[at],kt?F&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,St.width,St.height,tt,Mt,St.data):e.texImage2D(n.TEXTURE_2D,at,Et,St.width,St.height,0,tt,Mt,St.data);E.generateMipmaps=!1}else kt?(Tt&&e.texStorage2D(n.TEXTURE_2D,dt,Et,k.width,k.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,tt,Mt,k.data)):e.texImage2D(n.TEXTURE_2D,0,Et,k.width,k.height,0,tt,Mt,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){kt&&Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Et,qt[0].width,qt[0].height,k.depth);for(let at=0,H=qt.length;at<H;at++)if(St=qt[at],E.format!==Wi)if(tt!==null)if(kt){if(F)if(E.layerUpdates.size>0){const ht=q0(St.width,St.height,E.format,E.type);for(const At of E.layerUpdates){const Kt=St.data.subarray(At*ht/St.data.BYTES_PER_ELEMENT,(At+1)*ht/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,At,St.width,St.height,1,tt,Kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,k.depth,tt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Et,St.width,St.height,k.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,St.width,St.height,k.depth,tt,Mt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Et,St.width,St.height,k.depth,0,tt,Mt,St.data)}else{kt&&Tt&&e.texStorage2D(n.TEXTURE_2D,dt,Et,qt[0].width,qt[0].height);for(let at=0,H=qt.length;at<H;at++)St=qt[at],E.format!==Wi?tt!==null?kt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,St.width,St.height,tt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Et,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,St.width,St.height,tt,Mt,St.data):e.texImage2D(n.TEXTURE_2D,at,Et,St.width,St.height,0,tt,Mt,St.data)}else if(E.isDataArrayTexture)if(kt){if(Tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Et,k.width,k.height,k.depth),F)if(E.layerUpdates.size>0){const at=q0(k.width,k.height,E.format,E.type);for(const H of E.layerUpdates){const ht=k.data.subarray(H*at/k.data.BYTES_PER_ELEMENT,(H+1)*at/k.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,H,k.width,k.height,1,tt,Mt,ht)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,tt,Mt,k.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,k.width,k.height,k.depth,0,tt,Mt,k.data);else if(E.isData3DTexture)kt?(Tt&&e.texStorage3D(n.TEXTURE_3D,dt,Et,k.width,k.height,k.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,tt,Mt,k.data)):e.texImage3D(n.TEXTURE_3D,0,Et,k.width,k.height,k.depth,0,tt,Mt,k.data);else if(E.isFramebufferTexture){if(Tt)if(kt)e.texStorage2D(n.TEXTURE_2D,dt,Et,k.width,k.height);else{let at=k.width,H=k.height;for(let ht=0;ht<dt;ht++)e.texImage2D(n.TEXTURE_2D,ht,Et,at,H,0,tt,Mt,null),at>>=1,H>>=1}}else if(qt.length>0){if(kt&&Tt){const at=ft(qt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Et,at.width,at.height)}for(let at=0,H=qt.length;at<H;at++)St=qt[at],kt?F&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,tt,Mt,St):e.texImage2D(n.TEXTURE_2D,at,Et,tt,Mt,St);E.generateMipmaps=!1}else if(kt){if(Tt){const at=ft(k);e.texStorage2D(n.TEXTURE_2D,dt,Et,at.width,at.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,Mt,k)}else e.texImage2D(n.TEXTURE_2D,0,Et,tt,Mt,k);m(E)&&p(q),wt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function V(C,E,G){if(E.image.length!==6)return;const q=lt(C,E),J=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const Z=i.get(J);if(J.version!==Z.__version||q===!0){e.activeTexture(n.TEXTURE0+G);const wt=Ke.getPrimaries(Ke.workingColorSpace),Q=E.colorSpace===er?null:Ke.getPrimaries(E.colorSpace),ct=E.colorSpace===er||wt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const rt=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,tt=[];for(let H=0;H<6;H++)!rt&&!k?tt[H]=g(E.image[H],!0,s.maxCubemapSize):tt[H]=k?E.image[H].image:E.image[H],tt[H]=gt(E,tt[H]);const Mt=tt[0],Et=r.convert(E.format,E.colorSpace),St=r.convert(E.type),qt=w(E.internalFormat,Et,St,E.colorSpace),kt=E.isVideoTexture!==!0,Tt=Z.__version===void 0||q===!0,F=J.dataReady;let dt=L(E,Mt);ce(n.TEXTURE_CUBE_MAP,E);let at;if(rt){kt&&Tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,qt,Mt.width,Mt.height);for(let H=0;H<6;H++){at=tt[H].mipmaps;for(let ht=0;ht<at.length;ht++){const At=at[ht];E.format!==Wi?Et!==null?kt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht,qt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht,0,0,At.width,At.height,Et,St,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht,qt,At.width,At.height,0,Et,St,At.data)}}}else{if(at=E.mipmaps,kt&&Tt){at.length>0&&dt++;const H=ft(tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,qt,H.width,H.height)}for(let H=0;H<6;H++)if(k){kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,tt[H].width,tt[H].height,Et,St,tt[H].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,qt,tt[H].width,tt[H].height,0,Et,St,tt[H].data);for(let ht=0;ht<at.length;ht++){const Kt=at[ht].image[H].image;kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht+1,0,0,Kt.width,Kt.height,Et,St,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht+1,qt,Kt.width,Kt.height,0,Et,St,Kt.data)}}else{kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Et,St,tt[H]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,qt,Et,St,tt[H]);for(let ht=0;ht<at.length;ht++){const At=at[ht];kt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht+1,0,0,Et,St,At.image[H]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ht+1,qt,Et,St,At.image[H])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),Z.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function bt(C,E,G,q,J,Z){const wt=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),ct=w(G.internalFormat,wt,Q,G.colorSpace),rt=i.get(E),k=i.get(G);if(k.__renderTarget=E,!rt.__hasExternalTextures){const tt=Math.max(1,E.width>>Z),Mt=Math.max(1,E.height>>Z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,ct,tt,Mt,E.depth,0,wt,Q,null):e.texImage2D(J,Z,ct,tt,Mt,0,wt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,J,k.__webglTexture,0,Vt(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,J,k.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(C,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const q=E.depthTexture,J=q&&q.isDepthTexture?q.type:null,Z=y(E.stencilBuffer,J),wt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=Vt(E);se(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,Z,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,C)}else{const q=E.textures;for(let J=0;J<q.length;J++){const Z=q[J],wt=r.convert(Z.format,Z.colorSpace),Q=r.convert(Z.type),ct=w(Z.internalFormat,wt,Q,Z.colorSpace),rt=Vt(E);G&&se(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,ct,E.width,E.height):se(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,ct,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ct,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Ct(E.depthTexture,0);const J=q.__webglTexture,Z=Vt(E);if(E.depthTexture.format===Wo)se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===na)se(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function zt(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=n.createRenderbuffer(),_t(E.__webglDepthbuffer[q],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),_t(E.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,J)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(C,E,G){const q=i.get(C);E!==void 0&&bt(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&zt(C)}function re(C){const E=C.texture,G=i.get(C),q=i.get(E);C.addEventListener("dispose",R);const J=C.textures,Z=C.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=E.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let ct=0;ct<E.mipmaps.length;ct++)G.__webglFramebuffer[Q][ct]=n.createFramebuffer()}else G.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(wt)for(let Q=0,ct=J.length;Q<ct;Q++){const rt=i.get(J[Q]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const ct=J[Q];G.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const rt=r.convert(ct.format,ct.colorSpace),k=r.convert(ct.type),tt=w(ct.internalFormat,rt,k,ct.colorSpace,C.isXRRenderTarget===!0),Mt=Vt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,tt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)bt(G.__webglFramebuffer[Q][ct],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ct);else bt(G.__webglFramebuffer[Q],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let Q=0,ct=J.length;Q<ct;Q++){const rt=J[Q],k=i.get(rt);e.bindTexture(n.TEXTURE_2D,k.__webglTexture),ce(n.TEXTURE_2D,rt),bt(G.__webglFramebuffer,C,rt,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),m(rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),ce(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)bt(G.__webglFramebuffer[ct],C,E,n.COLOR_ATTACHMENT0,Q,ct);else bt(G.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,Q,0);m(E)&&p(Q),e.unbindTexture()}C.depthBuffer&&zt(C)}function yt(C){const E=C.textures;for(let G=0,q=E.length;G<q;G++){const J=E[G];if(m(J)){const Z=M(C),wt=i.get(J).__webglTexture;e.bindTexture(Z,wt),p(Z),e.unbindTexture()}}}const Nt=[],z=[];function jt(C){if(C.samples>0){if(se(C)===!1){const E=C.textures,G=C.width,q=C.height;let J=n.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(C),Q=E.length>1;if(Q)for(let ct=0;ct<E.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ct=0;ct<E.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ct]);const rt=i.get(E[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,G,q,0,0,G,q,J,n.NEAREST),c===!0&&(Nt.length=0,z.length=0,Nt.push(n.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Nt.push(Z),z.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ct=0;ct<E.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,wt.__webglColorRenderbuffer[ct]);const rt=i.get(E[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Vt(C){return Math.min(s.maxSamples,C.samples)}function se(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function K(C){const E=a.render.frame;o.get(C)!==E&&(o.set(C,E),C.update())}function gt(C,E){const G=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==ma&&G!==er&&(Ke.getTransfer(G)===ln?(q!==Wi||J!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=W,this.setTexture2D=Ct,this.setTexture2DArray=pt,this.setTexture3D=Ut,this.setTextureCube=et,this.rebindTextures=Ht,this.setupRenderTarget=re,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=se}function cy(n,t){function e(i,s=er){let r;const a=Ke.getTransfer(s);if(i===dr)return n.UNSIGNED_BYTE;if(i===uf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ap)return n.BYTE;if(i===Cp)return n.SHORT;if(i===rl)return n.UNSIGNED_SHORT;if(i===hf)return n.INT;if(i===oo)return n.UNSIGNED_INT;if(i===Us)return n.FLOAT;if(i===ts)return n.HALF_FLOAT;if(i===Pp)return n.ALPHA;if(i===Lp)return n.RGB;if(i===Wi)return n.RGBA;if(i===Dp)return n.LUMINANCE;if(i===Ip)return n.LUMINANCE_ALPHA;if(i===Wo)return n.DEPTH_COMPONENT;if(i===na)return n.DEPTH_STENCIL;if(i===df)return n.RED;if(i===pf)return n.RED_INTEGER;if(i===Up)return n.RG;if(i===mf)return n.RG_INTEGER;if(i===gf)return n.RGBA_INTEGER;if(i===oc||i===ac||i===lc||i===cc)if(a===ln)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ac)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uu||i===fu||i===du||i===pu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===du)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mu||i===gu||i===vu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mu||i===gu)return a===ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xu||i===_u||i===yu||i===Mu||i===bu||i===wu||i===Su||i===Tu||i===Eu||i===Au||i===Cu||i===Ru||i===Pu||i===Lu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Su)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Au)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ru)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lu)return a===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hc||i===Du||i===Iu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hc)return a===ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fp||i===Uu||i===Fu||i===zu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class hy extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rn extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const o=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=o.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&f>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new bi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xe({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends ga{constructor(t,e){super();const i=this;let s=null,r=1,a=null,l="local-floor",c=1,h=null,o=null,u=null,f=null,d=null,v=null;const g=new py,m=e.getContextAttributes();let p=null,M=null;const w=[],y=[],L=new Xt;let I=null;const R=new Mi;R.viewport=new Ze;const U=new Mi;U.viewport=new Ze;const P=[R,U],_=new hy;let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let V=w[Y];return V===void 0&&(V=new Rh,w[Y]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Y){let V=w[Y];return V===void 0&&(V=new Rh,w[Y]=V),V.getGripSpace()},this.getHand=function(Y){let V=w[Y];return V===void 0&&(V=new Rh,w[Y]=V),V.getHandSpace()};function nt(Y){const V=y.indexOf(Y.inputSource);if(V===-1)return;const bt=w[V];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,h||a),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function mt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",Ct);for(let Y=0;Y<w.length;Y++){const V=y[Y];V!==null&&(y[Y]=null,w[Y].disconnect(V))}N=null,W=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",Ct),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Xi(d.framebufferWidth,d.framebufferHeight,{format:Wi,type:dr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,bt=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=m.stencil?na:Wo,bt=m.stencil?ea:oo);const Rt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Xi(f.textureWidth,f.textureHeight,{format:Wi,type:dr,depthTexture:new Jp(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Ct(Y){for(let V=0;V<Y.removed.length;V++){const bt=Y.removed[V],_t=y.indexOf(bt);_t>=0&&(y[_t]=null,w[_t].disconnect(bt))}for(let V=0;V<Y.added.length;V++){const bt=Y.added[V];let _t=y.indexOf(bt);if(_t===-1){for(let zt=0;zt<w.length;zt++)if(zt>=y.length){y.push(bt),_t=zt;break}else if(y[zt]===null){y[zt]=bt,_t=zt;break}if(_t===-1)break}const Rt=w[_t];Rt&&Rt.connect(bt)}}const pt=new D,Ut=new D;function et(Y,V,bt){pt.setFromMatrixPosition(V.matrixWorld),Ut.setFromMatrixPosition(bt.matrixWorld);const _t=pt.distanceTo(Ut),Rt=V.projectionMatrix.elements,zt=bt.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),re=Rt[14]/(Rt[10]+1),yt=(Rt[9]+1)/Rt[5],Nt=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],jt=(zt[8]+1)/zt[0],Vt=Ht*z,se=Ht*jt,K=_t/(-z+jt),gt=K*-z;if(V.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(K),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const ft=Ht+K,C=re+K,E=Vt-gt,G=se+(_t-gt),q=yt*re/C*ft,J=Nt*re/C*ft;Y.projectionMatrix.makePerspective(E,G,q,J,ft,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ot(Y,V){V===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(V.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let V=Y.near,bt=Y.far;g.texture!==null&&(g.depthNear>0&&(V=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),_.near=U.near=R.near=V,_.far=U.far=R.far=bt,(N!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),N=_.near,W=_.far),R.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,_.layers.mask=R.layers.mask|U.layers.mask;const _t=Y.parent,Rt=_.cameras;Ot(_,_t);for(let zt=0;zt<Rt.length;zt++)Ot(Rt[zt],_t);Rt.length===2?et(_,R,U):_.projectionMatrix.copy(R.projectionMatrix),Jt(Y,_,_t)};function Jt(Y,V,bt){bt===null?Y.matrix.copy(V.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(V.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ia*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(_)};let oe=null;function ce(Y,V){if(o=V.getViewerPose(h||a),v=V,o!==null){const bt=o.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let _t=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let zt=0;zt<bt.length;zt++){const Ht=bt[zt];let re=null;if(d!==null)re=d.getViewport(Ht);else{const Nt=u.getViewSubImage(f,Ht);re=Nt.viewport,zt===0&&(t.setRenderTargetTextures(M,Nt.colorTexture,f.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(M))}let yt=P[zt];yt===void 0&&(yt=new Mi,yt.layers.enable(zt),yt.viewport=new Ze,P[zt]=yt),yt.matrix.fromArray(Ht.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Ht.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(re.x,re.y,re.width,re.height),zt===0&&(_.matrix.copy(yt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(yt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const zt=u.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&g.init(t,zt,s.renderState)}}for(let bt=0;bt<w.length;bt++){const _t=y[bt],Rt=w[bt];_t!==null&&Rt!==void 0&&Rt.update(_t,V,h||a)}oe&&oe(Y,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const lt=new Zp;lt.setAnimationLoop(ce),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const Br=new Ni,gy=new Pe;function vy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),o(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,Br.copy(y),Br.x*=-1,Br.y*=-1,Br.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Br)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xy(n,t,e,i){let s={},r={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const y=w.program;i.uniformBlockBinding(M,y)}function h(M,w){let y=s[M.id];y===void 0&&(v(M),y=o(M),s[M.id]=y,M.addEventListener("dispose",m));const L=w.program;i.updateUBOMapping(M,L);const I=t.render.frame;r[M.id]!==I&&(f(M),r[M.id]=I)}function o(M){const w=u();M.__bindingPointIndex=w;const y=n.createBuffer(),L=M.__size,I=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function u(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const w=s[M.id],y=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let I=0,R=y.length;I<R;I++){const U=Array.isArray(y[I])?y[I]:[y[I]];for(let P=0,_=U.length;P<_;P++){const N=U[P];if(d(N,I,P,L)===!0){const W=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value];let mt=0;for(let Ct=0;Ct<nt.length;Ct++){const pt=nt[Ct],Ut=g(pt);typeof pt=="number"||typeof pt=="boolean"?(N.__data[0]=pt,n.bufferSubData(n.UNIFORM_BUFFER,W+mt,N.__data)):pt.isMatrix3?(N.__data[0]=pt.elements[0],N.__data[1]=pt.elements[1],N.__data[2]=pt.elements[2],N.__data[3]=0,N.__data[4]=pt.elements[3],N.__data[5]=pt.elements[4],N.__data[6]=pt.elements[5],N.__data[7]=0,N.__data[8]=pt.elements[6],N.__data[9]=pt.elements[7],N.__data[10]=pt.elements[8],N.__data[11]=0):(pt.toArray(N.__data,mt),mt+=Ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,w,y,L){const I=M.value,R=w+"_"+y;if(L[R]===void 0)return typeof I=="number"||typeof I=="boolean"?L[R]=I:L[R]=I.clone(),!0;{const U=L[R];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return L[R]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function v(M){const w=M.uniforms;let y=0;const L=16;for(let R=0,U=w.length;R<U;R++){const P=Array.isArray(w[R])?w[R]:[w[R]];for(let _=0,N=P.length;_<N;_++){const W=P[_],nt=Array.isArray(W.value)?W.value:[W.value];for(let mt=0,Ct=nt.length;mt<Ct;mt++){const pt=nt[mt],Ut=g(pt),et=y%L,Ot=et%Ut.boundary,Jt=et+Ot;y+=Ot,Jt!==0&&L-Jt<Ut.storage&&(y+=L-Jt),W.__data=new Float32Array(Ut.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=Ut.storage}}}const I=y%L;return I>0&&(y+=L-I),M.__size=y,M.__cache={},this}function g(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class _y{constructor(t={}){const{canvas:e=h1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=cr,this.toneMappingExposure=1;const y=this;let L=!1,I=0,R=0,U=null,P=-1,_=null;const N=new Ze,W=new Ze;let nt=null;const mt=new Gt(0);let Ct=0,pt=e.width,Ut=e.height,et=1,Ot=null,Jt=null;const oe=new Ze(0,0,pt,Ut),ce=new Ze(0,0,pt,Ut);let lt=!1;const Y=new xf;let V=!1,bt=!1;const _t=new Pe,Rt=new Pe,zt=new D,Ht=new Ze,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Nt(){return U===null?et:1}let z=i;function jt(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:o,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cf}`),e.addEventListener("webglcontextlost",H,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",At,!1),z===null){const B="webgl2";if(z=jt(B,A),z===null)throw jt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Vt,se,K,gt,ft,C,E,G,q,J,Z,wt,Q,ct,rt,k,tt,Mt,Et,St,qt,kt,Tt,F;function dt(){Vt=new S2(z),Vt.init(),kt=new cy(z,Vt),se=new x2(z,Vt,t,kt),K=new oy(z,Vt),se.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),gt=new A2(z),ft=new X_,C=new ly(z,Vt,K,ft,se,kt,gt),E=new y2(y),G=new w2(y),q=new U1(z),Tt=new g2(z,q),J=new T2(z,q,gt,Tt),Z=new R2(z,J,q,gt),Et=new C2(z,se,C),k=new _2(ft),wt=new W_(y,E,G,Vt,se,Tt,k),Q=new vy(y,ft),ct=new Y_,rt=new Q_(Vt),Mt=new m2(y,E,G,K,Z,d,c),tt=new sy(y,Z,se),F=new xy(z,gt,se,K),St=new v2(z,Vt,gt),qt=new E2(z,Vt,gt),gt.programs=wt.programs,y.capabilities=se,y.extensions=Vt,y.properties=ft,y.renderLists=ct,y.shadowMap=tt,y.state=K,y.info=gt}dt();const at=new my(y,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(A){A!==void 0&&(et=A,this.setSize(pt,Ut,!1))},this.getSize=function(A){return A.set(pt,Ut)},this.setSize=function(A,B,X=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=A,Ut=B,e.width=Math.floor(A*et),e.height=Math.floor(B*et),X===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(pt*et,Ut*et).floor()},this.setDrawingBufferSize=function(A,B,X){pt=A,Ut=B,et=X,e.width=Math.floor(A*X),e.height=Math.floor(B*X),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,B,X,ot){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,B,X,ot),K.viewport(N.copy(oe).multiplyScalar(et).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,B,X,ot){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,B,X,ot),K.scissor(W.copy(ce).multiplyScalar(et).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){K.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Ot=A},this.setTransparentSort=function(A){Jt=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(A=!0,B=!0,X=!0){let ot=0;if(A){let S=!1;if(U!==null){const x=U.texture.format;S=x===gf||x===mf||x===pf}if(S){const x=U.texture.type,T=x===dr||x===oo||x===rl||x===ea||x===uf||x===ff,b=Mt.getClearColor(),$=Mt.getClearAlpha(),O=b.r,it=b.g,st=b.b;T?(v[0]=O,v[1]=it,v[2]=st,v[3]=$,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=O,g[1]=it,g[2]=st,g[3]=$,z.clearBufferiv(z.COLOR,0,g))}else ot|=z.COLOR_BUFFER_BIT}B&&(ot|=z.DEPTH_BUFFER_BIT),X&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",H,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ct.dispose(),rt.dispose(),ft.dispose(),E.dispose(),G.dispose(),Z.dispose(),Tt.dispose(),F.dispose(),wt.dispose(),at.dispose(),at.removeEventListener("sessionstart",wn),at.removeEventListener("sessionend",Wn),gn.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=gt.autoReset,B=tt.enabled,X=tt.autoUpdate,ot=tt.needsUpdate,S=tt.type;dt(),gt.autoReset=A,tt.enabled=B,tt.autoUpdate=X,tt.needsUpdate=ot,tt.type=S}function At(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kt(A){const B=A.target;B.removeEventListener("dispose",Kt),ve(B)}function ve(A){Re(A),ft.remove(A)}function Re(A){const B=ft.get(A).programs;B!==void 0&&(B.forEach(function(X){wt.releaseProgram(X)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,X,ot,S,x){B===null&&(B=re);const T=S.isMesh&&S.matrixWorld.determinant()<0,b=j(A,B,X,ot,S);K.setMaterial(ot,T);let $=X.index,O=1;if(ot.wireframe===!0){if($=J.getWireframeAttribute(X),$===void 0)return;O=2}const it=X.drawRange,st=X.attributes.position;let Lt=it.start*O,vt=(it.start+it.count)*O;x!==null&&(Lt=Math.max(Lt,x.start*O),vt=Math.min(vt,(x.start+x.count)*O)),$!==null?(Lt=Math.max(Lt,0),vt=Math.min(vt,$.count)):st!=null&&(Lt=Math.max(Lt,0),vt=Math.min(vt,st.count));const Pt=vt-Lt;if(Pt<0||Pt===1/0)return;Tt.setup(S,ot,b,X,$);let Bt,ee=St;if($!==null&&(Bt=q.get($),ee=qt,ee.setIndex(Bt)),S.isMesh)ot.wireframe===!0?(K.setLineWidth(ot.wireframeLinewidth*Nt()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(S.isLine){let It=ot.linewidth;It===void 0&&(It=1),K.setLineWidth(It*Nt()),S.isLineSegments?ee.setMode(z.LINES):S.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else S.isPoints?ee.setMode(z.POINTS):S.isSprite&&ee.setMode(z.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)ee.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ee.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const It=S._multiDrawStarts,Dt=S._multiDrawCounts,Yt=S._multiDrawCount,Qt=$?q.get($).bytesPerElement:1,ae=ft.get(ot).currentProgram.getUniforms();for(let le=0;le<Yt;le++)ae.setValue(z,"_gl_DrawID",le),ee.render(It[le]/Qt,Dt[le])}else if(S.isInstancedMesh)ee.renderInstances(Lt,Pt,S.count);else if(X.isInstancedBufferGeometry){const It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,It);ee.renderInstances(Lt,Pt,Dt)}else ee.render(Lt,Pt)};function we(A,B,X){A.transparent===!0&&A.side===Ve&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Qe(A,B,X),A.side=Os,A.needsUpdate=!0,Qe(A,B,X),A.side=Ve):Qe(A,B,X)}this.compile=function(A,B,X=null){X===null&&(X=A),p=rt.get(X),p.init(B),w.push(p),X.traverseVisible(function(S){S.isLight&&S.layers.test(B.layers)&&(p.pushLight(S),S.castShadow&&p.pushShadow(S))}),A!==X&&A.traverseVisible(function(S){S.isLight&&S.layers.test(B.layers)&&(p.pushLight(S),S.castShadow&&p.pushShadow(S))}),p.setupLights();const ot=new Set;return A.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const x=S.material;if(x)if(Array.isArray(x))for(let T=0;T<x.length;T++){const b=x[T];we(b,X,S),ot.add(b)}else we(x,X,S),ot.add(x)}),w.pop(),p=null,ot},this.compileAsync=function(A,B,X=null){const ot=this.compile(A,B,X);return new Promise(S=>{function x(){if(ot.forEach(function(T){ft.get(T).currentProgram.isReady()&&ot.delete(T)}),ot.size===0){S(A);return}setTimeout(x,10)}Vt.get("KHR_parallel_shader_compile")!==null?x():setTimeout(x,10)})};let Ie=null;function ut(A){Ie&&Ie(A)}function wn(){gn.stop()}function Wn(){gn.start()}const gn=new Zp;gn.setAnimationLoop(ut),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(A){Ie=A,at.setAnimationLoop(A),A===null?gn.stop():gn.start()},at.addEventListener("sessionstart",wn),at.addEventListener("sessionend",Wn),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(B),B=at.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,B,U),p=rt.get(A,w.length),p.init(B),w.push(p),Rt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),bt=this.localClippingEnabled,V=k.init(this.clippingPlanes,bt),m=ct.get(A,M.length),m.init(),M.push(m),at.enabled===!0&&at.isPresenting===!0){const x=y.xr.getDepthSensingMesh();x!==null&&Xn(x,B,-1/0,y.sortObjects)}Xn(A,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Ot,Jt),yt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,yt&&Mt.addToRenderList(m,A),this.info.render.frame++,V===!0&&k.beginShadows();const X=p.state.shadowsArray;tt.render(X,A,B),V===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=m.opaque,S=m.transmissive;if(p.setupLights(),B.isArrayCamera){const x=B.cameras;if(S.length>0)for(let T=0,b=x.length;T<b;T++){const $=x[T];Oi(ot,S,A,$)}yt&&Mt.render(A);for(let T=0,b=x.length;T<b;T++){const $=x[T];Si(m,A,$,$.viewport)}}else S.length>0&&Oi(ot,S,A,B),yt&&Mt.render(A),Si(m,A,B);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(y,A,B),Tt.resetDefaultState(),P=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],V===!0&&k.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Xn(A,B,X,ot){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){ot&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Rt);const T=Z.update(A),b=A.material;b.visible&&m.push(A,T,b,X,Ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const T=Z.update(A),b=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(Rt)),Array.isArray(b)){const $=T.groups;for(let O=0,it=$.length;O<it;O++){const st=$[O],Lt=b[st.materialIndex];Lt&&Lt.visible&&m.push(A,T,Lt,X,Ht.z,st)}}else b.visible&&m.push(A,T,b,X,Ht.z,null)}}const x=A.children;for(let T=0,b=x.length;T<b;T++)Xn(x[T],B,X,ot)}function Si(A,B,X,ot){const S=A.opaque,x=A.transmissive,T=A.transparent;p.setupLightsView(X),V===!0&&k.setGlobalState(y.clippingPlanes,X),ot&&K.viewport(N.copy(ot)),S.length>0&&bs(S,B,X),x.length>0&&bs(x,B,X),T.length>0&&bs(T,B,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Oi(A,B,X,ot){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ot.id]===void 0&&(p.state.transmissionRenderTarget[ot.id]=new Xi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?ts:dr,minFilter:to,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const x=p.state.transmissionRenderTarget[ot.id],T=ot.viewport||N;x.setSize(T.z,T.w);const b=y.getRenderTarget();y.setRenderTarget(x),y.getClearColor(mt),Ct=y.getClearAlpha(),Ct<1&&y.setClearColor(16777215,.5),y.clear(),yt&&Mt.render(X);const $=y.toneMapping;y.toneMapping=cr;const O=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),p.setupLightsView(ot),V===!0&&k.setGlobalState(y.clippingPlanes,ot),bs(A,X,ot),C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let st=0,Lt=B.length;st<Lt;st++){const vt=B[st],Pt=vt.object,Bt=vt.geometry,ee=vt.material,It=vt.group;if(ee.side===Ve&&Pt.layers.test(ot.layers)){const Dt=ee.side;ee.side=Qn,ee.needsUpdate=!0,is(Pt,X,ot,Bt,ee,It),ee.side=Dt,ee.needsUpdate=!0,it=!0}}it===!0&&(C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x))}y.setRenderTarget(b),y.setClearColor(mt,Ct),O!==void 0&&(ot.viewport=O),y.toneMapping=$}function bs(A,B,X){const ot=B.isScene===!0?B.overrideMaterial:null;for(let S=0,x=A.length;S<x;S++){const T=A[S],b=T.object,$=T.geometry,O=ot===null?T.material:ot,it=T.group;b.layers.test(X.layers)&&is(b,B,X,$,O,it)}}function is(A,B,X,ot,S,x){A.onBeforeRender(y,B,X,ot,S,x),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),S.onBeforeRender(y,B,X,ot,A,x),S.transparent===!0&&S.side===Ve&&S.forceSinglePass===!1?(S.side=Qn,S.needsUpdate=!0,y.renderBufferDirect(X,B,ot,S,A,x),S.side=Os,S.needsUpdate=!0,y.renderBufferDirect(X,B,ot,S,A,x),S.side=Ve):y.renderBufferDirect(X,B,ot,S,A,x),A.onAfterRender(y,B,X,ot,S,x)}function Qe(A,B,X){B.isScene!==!0&&(B=re);const ot=ft.get(A),S=p.state.lights,x=p.state.shadowsArray,T=S.state.version,b=wt.getParameters(A,S.state,x,B,X),$=wt.getProgramCacheKey(b);let O=ot.programs;ot.environment=A.isMeshStandardMaterial?B.environment:null,ot.fog=B.fog,ot.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,O===void 0&&(A.addEventListener("dispose",Kt),O=new Map,ot.programs=O);let it=O.get($);if(it!==void 0){if(ot.currentProgram===it&&ot.lightsStateVersion===T)return qn(A,b),it}else b.uniforms=wt.getUniforms(A),A.onBeforeCompile(b,y),it=wt.acquireProgram(b,$),O.set($,it),ot.uniforms=b.uniforms;const st=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=k.uniform),qn(A,b),ot.needsLights=he(A),ot.lightsStateVersion=T,ot.needsLights&&(st.ambientLightColor.value=S.state.ambient,st.lightProbe.value=S.state.probe,st.directionalLights.value=S.state.directional,st.directionalLightShadows.value=S.state.directionalShadow,st.spotLights.value=S.state.spot,st.spotLightShadows.value=S.state.spotShadow,st.rectAreaLights.value=S.state.rectArea,st.ltc_1.value=S.state.rectAreaLTC1,st.ltc_2.value=S.state.rectAreaLTC2,st.pointLights.value=S.state.point,st.pointLightShadows.value=S.state.pointShadow,st.hemisphereLights.value=S.state.hemi,st.directionalShadowMap.value=S.state.directionalShadowMap,st.directionalShadowMatrix.value=S.state.directionalShadowMatrix,st.spotShadowMap.value=S.state.spotShadowMap,st.spotLightMatrix.value=S.state.spotLightMatrix,st.spotLightMap.value=S.state.spotLightMap,st.pointShadowMap.value=S.state.pointShadowMap,st.pointShadowMatrix.value=S.state.pointShadowMatrix),ot.currentProgram=it,ot.uniformsList=null,it}function Bi(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=uc.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function qn(A,B){const X=ft.get(A);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function j(A,B,X,ot,S){B.isScene!==!0&&(B=re),C.resetTextureUnits();const x=B.fog,T=ot.isMeshStandardMaterial?B.environment:null,b=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ma,$=(ot.isMeshStandardMaterial?G:E).get(ot.envMap||T),O=ot.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,it=!!X.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),st=!!X.morphAttributes.position,Lt=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let Pt=cr;ot.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const Bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=Bt!==void 0?Bt.length:0,It=ft.get(ot),Dt=p.state.lights;if(V===!0&&(bt===!0||A!==_)){const fe=A===_&&ot.id===P;k.setState(ot,A,fe)}let Yt=!1;ot.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Dt.state.version||It.outputColorSpace!==b||S.isBatchedMesh&&It.batching===!1||!S.isBatchedMesh&&It.batching===!0||S.isBatchedMesh&&It.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&It.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&It.instancing===!1||!S.isInstancedMesh&&It.instancing===!0||S.isSkinnedMesh&&It.skinning===!1||!S.isSkinnedMesh&&It.skinning===!0||S.isInstancedMesh&&It.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&It.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&It.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&It.instancingMorph===!1&&S.morphTexture!==null||It.envMap!==$||ot.fog===!0&&It.fog!==x||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==k.numPlanes||It.numIntersection!==k.numIntersection)||It.vertexAlphas!==O||It.vertexTangents!==it||It.morphTargets!==st||It.morphNormals!==Lt||It.morphColors!==vt||It.toneMapping!==Pt||It.morphTargetsCount!==ee)&&(Yt=!0):(Yt=!0,It.__version=ot.version);let Qt=It.currentProgram;Yt===!0&&(Qt=Qe(ot,B,S));let ae=!1,le=!1,_e=!1;const ne=Qt.getUniforms(),ie=It.uniforms;if(K.useProgram(Qt.program)&&(ae=!0,le=!0,_e=!0),ot.id!==P&&(P=ot.id,le=!0),ae||_!==A){K.buffers.depth.getReversed()?(_t.copy(A.projectionMatrix),f1(_t),d1(_t),ne.setValue(z,"projectionMatrix",_t)):ne.setValue(z,"projectionMatrix",A.projectionMatrix),ne.setValue(z,"viewMatrix",A.matrixWorldInverse);const xe=ne.map.cameraPosition;xe!==void 0&&xe.setValue(z,zt.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&ne.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ne.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,le=!0,_e=!0)}if(S.isSkinnedMesh){ne.setOptional(z,S,"bindMatrix"),ne.setOptional(z,S,"bindMatrixInverse");const fe=S.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),ne.setValue(z,"boneTexture",fe.boneTexture,C))}S.isBatchedMesh&&(ne.setOptional(z,S,"batchingTexture"),ne.setValue(z,"batchingTexture",S._matricesTexture,C),ne.setOptional(z,S,"batchingIdTexture"),ne.setValue(z,"batchingIdTexture",S._indirectTexture,C),ne.setOptional(z,S,"batchingColorTexture"),S._colorsTexture!==null&&ne.setValue(z,"batchingColorTexture",S._colorsTexture,C));const Wt=X.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Et.update(S,X,Qt),(le||It.receiveShadow!==S.receiveShadow)&&(It.receiveShadow=S.receiveShadow,ne.setValue(z,"receiveShadow",S.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(ie.envMap.value=$,ie.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&B.environment!==null&&(ie.envMapIntensity.value=B.environmentIntensity),le&&(ne.setValue(z,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&$t(ie,_e),x&&ot.fog===!0&&Q.refreshFogUniforms(ie,x),Q.refreshMaterialUniforms(ie,ot,et,Ut,p.state.transmissionRenderTarget[A.id]),uc.upload(z,Bi(It),ie,C)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(uc.upload(z,Bi(It),ie,C),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ne.setValue(z,"center",S.center),ne.setValue(z,"modelViewMatrix",S.modelViewMatrix),ne.setValue(z,"normalMatrix",S.normalMatrix),ne.setValue(z,"modelMatrix",S.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fe=ot.uniformsGroups;for(let xe=0,Le=fe.length;xe<Le;xe++){const Ae=fe[xe];F.update(Ae,Qt),F.bind(Ae,Qt)}}return Qt}function $t(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function he(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,B,X){ft.get(A.texture).__webglTexture=B,ft.get(A.depthTexture).__webglTexture=X;const ot=ft.get(A);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=X===void 0,ot.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const X=ft.get(A);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,X=0){U=A,I=B,R=X;let ot=!0,S=null,x=!1,T=!1;if(A){const $=ft.get(A);if($.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if($.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if($.__hasExternalTextures)C.rebindTextures(A,ft.get(A.texture).__webglTexture,ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if($.__boundDepthTexture!==st){if(st!==null&&ft.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const O=A.texture;(O.isData3DTexture||O.isDataArrayTexture||O.isCompressedArrayTexture)&&(T=!0);const it=ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[B])?S=it[B][X]:S=it[B],x=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?S=ft.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?S=it[X]:S=it,N.copy(A.viewport),W.copy(A.scissor),nt=A.scissorTest}else N.copy(oe).multiplyScalar(et).floor(),W.copy(ce).multiplyScalar(et).floor(),nt=lt;if(K.bindFramebuffer(z.FRAMEBUFFER,S)&&ot&&K.drawBuffers(A,S),K.viewport(N),K.scissor(W),K.setScissorTest(nt),x){const $=ft.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,$.__webglTexture,X)}else if(T){const $=ft.get(A.texture),O=B||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.__webglTexture,X||0,O)}P=-1},this.readRenderTargetPixels=function(A,B,X,ot,S,x,T){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let b=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&T!==void 0&&(b=b[T]),b){K.bindFramebuffer(z.FRAMEBUFFER,b);try{const $=A.texture,O=$.format,it=$.type;if(!se.textureFormatReadable(O)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-ot&&X>=0&&X<=A.height-S&&z.readPixels(B,X,ot,S,kt.convert(O),kt.convert(it),x)}finally{const $=U!==null?ft.get(U).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(A,B,X,ot,S,x,T){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let b=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&T!==void 0&&(b=b[T]),b){const $=A.texture,O=$.format,it=$.type;if(!se.textureFormatReadable(O))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-ot&&X>=0&&X<=A.height-S){K.bindFramebuffer(z.FRAMEBUFFER,b);const st=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.bufferData(z.PIXEL_PACK_BUFFER,x.byteLength,z.STREAM_READ),z.readPixels(B,X,ot,S,kt.convert(O),kt.convert(it),0);const Lt=U!==null?ft.get(U).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,Lt);const vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await u1(z,vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,st),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,x),z.deleteBuffer(st),z.deleteSync(vt),x}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,X=0){A.isTexture!==!0&&(Ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const ot=Math.pow(2,-X),S=Math.floor(A.image.width*ot),x=Math.floor(A.image.height*ot),T=B!==null?B.x:0,b=B!==null?B.y:0;C.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,T,b,S,x),K.unbindTexture()},this.copyTextureToTexture=function(A,B,X=null,ot=null,S=0){A.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,A=arguments[1],B=arguments[2],S=arguments[3]||0,X=null);let x,T,b,$,O,it,st,Lt,vt;const Pt=A.isCompressedTexture?A.mipmaps[S]:A.image;X!==null?(x=X.max.x-X.min.x,T=X.max.y-X.min.y,b=X.isBox3?X.max.z-X.min.z:1,$=X.min.x,O=X.min.y,it=X.isBox3?X.min.z:0):(x=Pt.width,T=Pt.height,b=Pt.depth||1,$=0,O=0,it=0),ot!==null?(st=ot.x,Lt=ot.y,vt=ot.z):(st=0,Lt=0,vt=0);const Bt=kt.convert(B.format),ee=kt.convert(B.type);let It;B.isData3DTexture?(C.setTexture3D(B,0),It=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),It=z.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),It=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const Dt=z.getParameter(z.UNPACK_ROW_LENGTH),Yt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Qt=z.getParameter(z.UNPACK_SKIP_PIXELS),ae=z.getParameter(z.UNPACK_SKIP_ROWS),le=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$),z.pixelStorei(z.UNPACK_SKIP_ROWS,O),z.pixelStorei(z.UNPACK_SKIP_IMAGES,it);const _e=A.isDataArrayTexture||A.isData3DTexture,ne=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const ie=ft.get(A),Wt=ft.get(B),fe=ft.get(ie.__renderTarget),xe=ft.get(Wt.__renderTarget);K.bindFramebuffer(z.READ_FRAMEBUFFER,fe.__webglFramebuffer),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<b;Le++)_e&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ft.get(A).__webglTexture,S,it+Le),A.isDepthTexture?(ne&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ft.get(B).__webglTexture,S,vt+Le),z.blitFramebuffer($,O,x,T,st,Lt,x,T,z.DEPTH_BUFFER_BIT,z.NEAREST)):ne?z.copyTexSubImage3D(It,S,st,Lt,vt+Le,$,O,x,T):z.copyTexSubImage2D(It,S,st,Lt,vt+Le,$,O,x,T);K.bindFramebuffer(z.READ_FRAMEBUFFER,null),K.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ne?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(It,S,st,Lt,vt,x,T,b,Bt,ee,Pt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(It,S,st,Lt,vt,x,T,b,Bt,Pt.data):z.texSubImage3D(It,S,st,Lt,vt,x,T,b,Bt,ee,Pt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,S,st,Lt,x,T,Bt,ee,Pt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,S,st,Lt,Pt.width,Pt.height,Bt,Pt.data):z.texSubImage2D(z.TEXTURE_2D,S,st,Lt,x,T,Bt,ee,Pt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Yt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,le),S===0&&B.generateMipmaps&&z.generateMipmap(It),K.unbindTexture()},this.copyTextureToTexture3D=function(A,B,X=null,ot=null,S=0){return A.isTexture!==!0&&(Ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,ot=arguments[1]||null,A=arguments[2],B=arguments[3],S=arguments[4]||0),Ha('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,X,ot,S)},this.initRenderTarget=function(A){ft.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){I=0,R=0,U=null,K.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ke._getUnpackColorSpace()}}class Mf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Mf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dl extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class yy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ei=new D;class Mc{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ei.fromBufferAttribute(this,e),Ei.applyMatrix4(t),this.setXYZ(e,Ei.x,Ei.y,Ei.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ei.fromBufferAttribute(this,e),Ei.applyNormalMatrix(t),this.setXYZ(e,Ei.x,Ei.y,Ei.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ei.fromBufferAttribute(this,e),Ei.transformDirection(t),this.setXYZ(e,Ei.x,Ei.y,Ei.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=on(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ms(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ms(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ms(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ms(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $a extends uo{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Po;const Ca=new D,Lo=new D,Do=new D,Io=new Xt,Ra=new Xt,im=new Pe,Nl=new D,Pa=new D,Ol=new D,Y0=new Xt,Ph=new Xt,K0=new Xt;class fc extends fn{constructor(t=new $a){if(super(),this.isSprite=!0,this.type="Sprite",Po===void 0){Po=new $e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yy(e,5);Po.setIndex([0,1,2,0,2,3]),Po.setAttribute("position",new Mc(i,3,0,!1)),Po.setAttribute("uv",new Mc(i,2,3,!1))}this.geometry=Po,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lo.setFromMatrixScale(this.matrixWorld),im.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Do.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lo.multiplyScalar(-Do.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Bl(Nl.set(-.5,-.5,0),Do,a,Lo,s,r),Bl(Pa.set(.5,-.5,0),Do,a,Lo,s,r),Bl(Ol.set(.5,.5,0),Do,a,Lo,s,r),Y0.set(0,0),Ph.set(1,0),K0.set(1,1);let l=t.ray.intersectTriangle(Nl,Pa,Ol,!1,Ca);if(l===null&&(Bl(Pa.set(-.5,.5,0),Do,a,Lo,s,r),Ph.set(0,1),l=t.ray.intersectTriangle(Nl,Ol,Pa,!1,Ca),l===null))return;const c=t.ray.origin.distanceTo(Ca);c<t.near||c>t.far||e.push({distance:c,point:Ca.clone(),uv:Zi.getInterpolation(Ca,Nl,Pa,Ol,Y0,Ph,K0,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bl(n,t,e,i,s,r){Io.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ra.x=r*Io.x-s*Io.y,Ra.y=s*Io.x+r*Io.y):Ra.copy(Io),n.copy(t),n.x+=Ra.x,n.y+=Ra.y,n.applyMatrix4(im)}class bf extends bi{constructor(t=null,e=1,i=1,s,r,a,l,c,h=Di,o=Di,u,f){super(null,a,l,c,h,o,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs extends dn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Uo=new Pe,$0=new Pe,kl=[],j0=new ho,My=new Pe,La=new ge,Da=new va;class Bu extends ge{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,My)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ho),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Uo),j0.copy(t.boundingBox).applyMatrix4(Uo),this.boundingBox.union(j0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Uo),Da.copy(t.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(Da)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let l=0;l<i.length;l++)i[l]=s[a+l]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),t.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Uo),$0.multiplyMatrices(i,Uo),La.matrixWorld=$0,La.raycast(t,kl);for(let a=0,l=kl.length;a<l;a++){const c=kl[a];c.instanceId=r,c.object=this,e.push(c)}kl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new bf(new Float32Array(s*this.count),s,this.count,df,Us));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=l,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sm extends uo{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Z0=new Pe,ku=new Hp,Hl=new va,Gl=new D;class by extends fn{constructor(t=new $e,e=new sm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),Hl.radius+=r,t.ray.intersectsSphere(Hl)===!1)return;Z0.copy(s).invert(),ku.copy(t.ray).applyMatrix4(Z0);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,g=d;v<g;v++){const m=h.getX(v);Gl.fromBufferAttribute(u,m),J0(Gl,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,g=d;v<g;v++)Gl.fromBufferAttribute(u,v),J0(Gl,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function J0(n,t,e,i,s,r,a){const l=ku.distanceSqToPoint(n);if(l<e){const c=new D;ku.closestPointToPoint(n,c),c.applyMatrix4(i);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Gc extends bi{constructor(t,e,i,s,r,a,l,c,h){super(t,e,i,s,r,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=i[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const o=i[s],f=i[s+1]-o,d=(a-o)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new Xt:new D);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],a=[],l=new D,c=new Pe;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new D)}r[0]=new D,a[0]=new D;let h=Number.MAX_VALUE;const o=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);o<=h&&(h=o,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),l.crossVectors(s[d-1],s[d]),l.length()>Number.EPSILON){l.normalize();const v=Math.acos(Bn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(l,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Bn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wf extends ks{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new Xt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const o=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*o-d*u+this.aX,h=f*u+d*o+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wy extends wf{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sf(){let n=0,t=0,e=0,i=0;function s(r,a,l,c){n=r,t=l,e=-3*r+3*a-2*l-c,i=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,o,u){let f=(a-r)/h-(l-r)/(h+o)+(l-a)/o,d=(l-a)/o-(c-a)/(o+u)+(c-l)/u;f*=o,d*=o,s(a,l,f,d)},calc:function(r){const a=r*r,l=a*r;return n+t*r+e*a+i*l}}}const Vl=new D,Lh=new Sf,Dh=new Sf,Ih=new Sf;class wr extends ks{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,o;this.closed||l>0?h=s[(l-1)%r]:(Vl.subVectors(s[0],s[1]).add(s[0]),h=Vl);const u=s[l%r],f=s[(l+1)%r];if(this.closed||l+2<r?o=s[(l+2)%r]:(Vl.subVectors(s[r-1],s[r-2]).add(s[r-1]),o=Vl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(o),d);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),Lh.initNonuniformCatmullRom(h.x,u.x,f.x,o.x,v,g,m),Dh.initNonuniformCatmullRom(h.y,u.y,f.y,o.y,v,g,m),Ih.initNonuniformCatmullRom(h.z,u.z,f.z,o.z,v,g,m)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(h.x,u.x,f.x,o.x,this.tension),Dh.initCatmullRom(h.y,u.y,f.y,o.y,this.tension),Ih.initCatmullRom(h.z,u.z,f.z,o.z,this.tension));return i.set(Lh.calc(c),Dh.calc(c),Ih.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Q0(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,l=n*n,c=n*l;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*l+r*n+e}function Sy(n,t){const e=1-n;return e*e*t}function Ty(n,t){return 2*(1-n)*n*t}function Ey(n,t){return n*n*t}function ja(n,t,e,i){return Sy(n,t)+Ty(n,e)+Ey(n,i)}function Ay(n,t){const e=1-n;return e*e*e*t}function Cy(n,t){const e=1-n;return 3*e*e*n*t}function Ry(n,t){return 3*(1-n)*n*n*t}function Py(n,t){return n*n*n*t}function Za(n,t,e,i,s){return Ay(n,t)+Cy(n,e)+Ry(n,i)+Py(n,s)}class rm extends ks{constructor(t=new Xt,e=new Xt,i=new Xt,s=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Xt){const i=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(Za(t,s.x,r.x,a.x,l.x),Za(t,s.y,r.y,a.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ly extends ks{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return i.set(Za(t,s.x,r.x,a.x,l.x),Za(t,s.y,r.y,a.y,l.y),Za(t,s.z,r.z,a.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class om extends ks{constructor(t=new Xt,e=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dy extends ks{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class am extends ks{constructor(t=new Xt,e=new Xt,i=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Xt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ja(t,s.x,r.x,a.x),ja(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lm extends ks{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ja(t,s.x,r.x,a.x),ja(t,s.y,r.y,a.y),ja(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cm extends ks{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Xt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],o=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Q0(l,c.x,h.x,o.x,u.x),Q0(l,c.y,h.y,o.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Xt().fromArray(s))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:wy,CatmullRomCurve3:wr,CubicBezierCurve:rm,CubicBezierCurve3:Ly,EllipseCurve:wf,LineCurve:om,LineCurve3:Dy,QuadraticBezierCurve:am,QuadraticBezierCurve3:lm,SplineCurve:cm});class Iy extends ks{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){const o=c[h];i&&i.equals(o)||(e.push(o),i=o)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new bc[s.type]().fromJSON(s))}return this}}class td extends Iy{constructor(t){super(),this.type="Path",this.currentPoint=new Xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new om(this.currentPoint.clone(),new Xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new am(this.currentPoint.clone(),new Xt(t,e),new Xt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const l=new rm(this.currentPoint.clone(),new Xt(t,e),new Xt(i,s),new Xt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new cm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,l,c){const h=this.currentPoint.x,o=this.currentPoint.y;return this.absellipse(t+h,e+o,i,s,r,a,l,c),this}absellipse(t,e,i,s,r,a,l,c){const h=new wf(t,e,i,s,r,a,l,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const o=h.getPoint(1);return this.currentPoint.copy(o),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qo extends $e{constructor(t=[new Xt(0,-.5),new Xt(.5,0),new Xt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Bn(s,0,Math.PI*2);const r=[],a=[],l=[],c=[],h=[],o=1/e,u=new D,f=new Xt,d=new D,v=new D,g=new D;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(v)}for(let M=0;M<=e;M++){const w=i+M*o*s,y=Math.sin(w),L=Math.cos(w);for(let I=0;I<=t.length-1;I++){u.x=t[I].x*y,u.y=t[I].y,u.z=t[I].x*L,a.push(u.x,u.y,u.z),f.x=M/e,f.y=I/(t.length-1),l.push(f.x,f.y);const R=c[3*I+0]*y,U=c[3*I+1],P=c[3*I+0]*L;h.push(R,U,P)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){const y=w+M*t.length,L=y,I=y+t.length,R=y+t.length+1,U=y+1;r.push(L,I,U),r.push(R,U,I)}this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(l,2)),this.setAttribute("normal",new Me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.points,t.segments,t.phiStart,t.phiLength)}}class gs extends $e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],l=[],c=[],h=new D,o=new Xt;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),o.x=(a[f]/t+1)/2,o.y=(a[f+1]/t+1)/2,c.push(o.x,o.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class cn extends $e{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const o=[],u=[],f=[],d=[];let v=0;const g=[],m=i/2;let p=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(o),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function M(){const y=new D,L=new D;let I=0;const R=(e-t)/i;for(let U=0;U<=r;U++){const P=[],_=U/r,N=_*(e-t)+t;for(let W=0;W<=s;W++){const nt=W/s,mt=nt*c+l,Ct=Math.sin(mt),pt=Math.cos(mt);L.x=N*Ct,L.y=-_*i+m,L.z=N*pt,u.push(L.x,L.y,L.z),y.set(Ct,R,pt).normalize(),f.push(y.x,y.y,y.z),d.push(nt,1-_),P.push(v++)}g.push(P)}for(let U=0;U<s;U++)for(let P=0;P<r;P++){const _=g[P][U],N=g[P+1][U],W=g[P+1][U+1],nt=g[P][U+1];(t>0||P!==0)&&(o.push(_,N,nt),I+=3),(e>0||P!==r-1)&&(o.push(N,W,nt),I+=3)}h.addGroup(p,I,0),p+=I}function w(y){const L=v,I=new Xt,R=new D;let U=0;const P=y===!0?t:e,_=y===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),v++;const N=v;for(let W=0;W<=s;W++){const mt=W/s*c+l,Ct=Math.cos(mt),pt=Math.sin(mt);R.x=P*pt,R.y=m*_,R.z=P*Ct,u.push(R.x,R.y,R.z),f.push(0,_,0),I.x=Ct*.5+.5,I.y=pt*.5*_+.5,d.push(I.x,I.y),v++}for(let W=0;W<s;W++){const nt=L+W,mt=N+W;y===!0?o.push(mt,mt+1,nt):o.push(mt+1,mt,nt),U+=3}h.addGroup(p,U,y===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends td{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new td().fromJSON(s))}return this}}const Uy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=hm(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let l,c,h,o,u,f,d;if(i&&(r=By(n,t,r,e)),n.length>80*e){l=h=n[0],c=o=n[1];for(let v=e;v<s;v+=e)u=n[v],f=n[v+1],u<l&&(l=u),f<c&&(c=f),u>h&&(h=u),f>o&&(o=f);d=Math.max(h-l,o-c),d=d!==0?32767/d:0}return ol(r,a,e,l,c,d,0),a}};function hm(n,t,e,i,s){let r,a;if(s===jy(n,t,e,i)>0)for(r=t;r<e;r+=i)a=ed(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=ed(r,n[r],n[r+1],a);return a&&Vc(a,a.next)&&(ll(a),a=a.next),a}function lo(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Vc(e,e.next)||bn(e.prev,e,e.next)===0)){if(ll(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ol(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Wy(n,i,s,r);let l=n,c,h;for(;n.prev!==n.next;){if(c=n.prev,h=n.next,r?zy(n,i,s,r):Fy(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),ll(n),n=h.next,l=h.next;continue}if(n=h,n===l){a?a===1?(n=Ny(lo(n),t,e),ol(n,t,e,i,s,r,2)):a===2&&Oy(n,t,e,i,s,r):ol(lo(n),t,e,i,s,r,1);break}}}function Fy(n){const t=n.prev,e=n,i=n.next;if(bn(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,l=t.y,c=e.y,h=i.y,o=s<r?s<a?s:a:r<a?r:a,u=l<c?l<h?l:h:c<h?c:h,f=s>r?s>a?s:a:r>a?r:a,d=l>c?l>h?l:h:c>h?c:h;let v=i.next;for(;v!==t;){if(v.x>=o&&v.x<=f&&v.y>=u&&v.y<=d&&Bo(s,l,r,c,a,h,v.x,v.y)&&bn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function zy(n,t,e,i){const s=n.prev,r=n,a=n.next;if(bn(s,r,a)>=0)return!1;const l=s.x,c=r.x,h=a.x,o=s.y,u=r.y,f=a.y,d=l<c?l<h?l:h:c<h?c:h,v=o<u?o<f?o:f:u<f?u:f,g=l>c?l>h?l:h:c>h?c:h,m=o>u?o>f?o:f:u>f?u:f,p=Hu(d,v,t,e,i),M=Hu(g,m,t,e,i);let w=n.prevZ,y=n.nextZ;for(;w&&w.z>=p&&y&&y.z<=M;){if(w.x>=d&&w.x<=g&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&Bo(l,o,c,u,h,f,w.x,w.y)&&bn(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&Bo(l,o,c,u,h,f,y.x,y.y)&&bn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=g&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&Bo(l,o,c,u,h,f,w.x,w.y)&&bn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=g&&y.y>=v&&y.y<=m&&y!==s&&y!==a&&Bo(l,o,c,u,h,f,y.x,y.y)&&bn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ny(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Vc(s,r)&&um(s,i,i.next,r)&&al(s,r)&&al(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ll(i),ll(i.next),i=n=r),i=i.next}while(i!==n);return lo(i)}function Oy(n,t,e,i,s,r){let a=n;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Yy(a,l)){let c=fm(a,l);a=lo(a,a.next),c=lo(c,c.next),ol(a,t,e,i,s,r,0),ol(c,t,e,i,s,r,0);return}l=l.next}a=a.next}while(a!==n)}function By(n,t,e,i){const s=[];let r,a,l,c,h;for(r=0,a=t.length;r<a;r++)l=t[r]*i,c=r<a-1?t[r+1]*i:n.length,h=hm(n,l,c,i,!1),h===h.next&&(h.steiner=!0),s.push(qy(h));for(s.sort(ky),r=0;r<s.length;r++)e=Hy(s[r],e);return e}function ky(n,t){return n.x-t.x}function Hy(n,t){const e=Gy(n,t);if(!e)return t;const i=fm(e,n);return lo(i,i.next),lo(e,e.next)}function Gy(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const l=s,c=s.x,h=s.y;let o=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Bo(a<h?r:i,a,c,h,a<h?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),al(e,n)&&(u<o||u===o&&(e.x>s.x||e.x===s.x&&Vy(s,e)))&&(s=e,o=u)),e=e.next;while(e!==l);return s}function Vy(n,t){return bn(n.prev,n,t.prev)<0&&bn(t.next,n,n.next)<0}function Wy(n,t,e,i){let s=n;do s.z===0&&(s.z=Hu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xy(s)}function Xy(n){let t,e,i,s,r,a,l,c,h=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,l=0,t=0;t<h&&(l++,i=i.nextZ,!!i);t++);for(c=h;l>0||c>0&&i;)l!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,l--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,h*=2}while(a>1);return n}function Hu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function qy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bo(n,t,e,i,s,r,a,l){return(s-a)*(t-l)>=(n-a)*(r-l)&&(n-a)*(i-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(i-l)}function Yy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ky(n,t)&&(al(n,t)&&al(t,n)&&$y(n,t)&&(bn(n.prev,n,t.prev)||bn(n,t.prev,t))||Vc(n,t)&&bn(n.prev,n,n.next)>0&&bn(t.prev,t,t.next)>0)}function bn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Vc(n,t){return n.x===t.x&&n.y===t.y}function um(n,t,e,i){const s=Xl(bn(n,t,e)),r=Xl(bn(n,t,i)),a=Xl(bn(e,i,n)),l=Xl(bn(e,i,t));return!!(s!==r&&a!==l||s===0&&Wl(n,e,t)||r===0&&Wl(n,i,t)||a===0&&Wl(e,n,i)||l===0&&Wl(e,t,i))}function Wl(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Xl(n){return n>0?1:n<0?-1:0}function Ky(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&um(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function al(n,t){return bn(n.prev,n,n.next)<0?bn(n,t,n.next)>=0&&bn(n,n.prev,t)>=0:bn(n,t,n.prev)<0||bn(n,n.next,t)<0}function $y(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function fm(n,t){const e=new Gu(n.i,n.x,n.y),i=new Gu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ed(n,t,e,i){const s=new Gu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ll(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gu(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jy(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class ur{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];nd(t),id(i,t);let a=t.length;e.forEach(nd);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,id(i,e[c]);const l=Uy.triangulate(i,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}}function nd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function id(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Ja extends $e{constructor(t=new $r([new Xt(.5,.5),new Xt(-.5,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];a(h)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(l){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,o=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Zy;let w,y=!1,L,I,R,U;p&&(w=p.getSpacedPoints(o),y=!0,f=!1,L=p.computeFrenetFrames(o,!1),I=new D,R=new D,U=new D),f||(m=0,d=0,v=0,g=0);const P=l.extractPoints(h);let _=P.shape;const N=P.holes;if(!ur.isClockWise(_)){_=_.reverse();for(let yt=0,Nt=N.length;yt<Nt;yt++){const z=N[yt];ur.isClockWise(z)&&(N[yt]=z.reverse())}}const nt=ur.triangulateShape(_,N),mt=_;for(let yt=0,Nt=N.length;yt<Nt;yt++){const z=N[yt];_=_.concat(z)}function Ct(yt,Nt,z){return Nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(Nt,z)}const pt=_.length,Ut=nt.length;function et(yt,Nt,z){let jt,Vt,se;const K=yt.x-Nt.x,gt=yt.y-Nt.y,ft=z.x-yt.x,C=z.y-yt.y,E=K*K+gt*gt,G=K*C-gt*ft;if(Math.abs(G)>Number.EPSILON){const q=Math.sqrt(E),J=Math.sqrt(ft*ft+C*C),Z=Nt.x-gt/q,wt=Nt.y+K/q,Q=z.x-C/J,ct=z.y+ft/J,rt=((Q-Z)*C-(ct-wt)*ft)/(K*C-gt*ft);jt=Z+K*rt-yt.x,Vt=wt+gt*rt-yt.y;const k=jt*jt+Vt*Vt;if(k<=2)return new Xt(jt,Vt);se=Math.sqrt(k/2)}else{let q=!1;K>Number.EPSILON?ft>Number.EPSILON&&(q=!0):K<-Number.EPSILON?ft<-Number.EPSILON&&(q=!0):Math.sign(gt)===Math.sign(C)&&(q=!0),q?(jt=-gt,Vt=K,se=Math.sqrt(E)):(jt=K,Vt=gt,se=Math.sqrt(E/2))}return new Xt(jt/se,Vt/se)}const Ot=[];for(let yt=0,Nt=mt.length,z=Nt-1,jt=yt+1;yt<Nt;yt++,z++,jt++)z===Nt&&(z=0),jt===Nt&&(jt=0),Ot[yt]=et(mt[yt],mt[z],mt[jt]);const Jt=[];let oe,ce=Ot.concat();for(let yt=0,Nt=N.length;yt<Nt;yt++){const z=N[yt];oe=[];for(let jt=0,Vt=z.length,se=Vt-1,K=jt+1;jt<Vt;jt++,se++,K++)se===Vt&&(se=0),K===Vt&&(K=0),oe[jt]=et(z[jt],z[se],z[K]);Jt.push(oe),ce=ce.concat(oe)}for(let yt=0;yt<m;yt++){const Nt=yt/m,z=d*Math.cos(Nt*Math.PI/2),jt=v*Math.sin(Nt*Math.PI/2)+g;for(let Vt=0,se=mt.length;Vt<se;Vt++){const K=Ct(mt[Vt],Ot[Vt],jt);_t(K.x,K.y,-z)}for(let Vt=0,se=N.length;Vt<se;Vt++){const K=N[Vt];oe=Jt[Vt];for(let gt=0,ft=K.length;gt<ft;gt++){const C=Ct(K[gt],oe[gt],jt);_t(C.x,C.y,-z)}}}const lt=v+g;for(let yt=0;yt<pt;yt++){const Nt=f?Ct(_[yt],ce[yt],lt):_[yt];y?(R.copy(L.normals[0]).multiplyScalar(Nt.x),I.copy(L.binormals[0]).multiplyScalar(Nt.y),U.copy(w[0]).add(R).add(I),_t(U.x,U.y,U.z)):_t(Nt.x,Nt.y,0)}for(let yt=1;yt<=o;yt++)for(let Nt=0;Nt<pt;Nt++){const z=f?Ct(_[Nt],ce[Nt],lt):_[Nt];y?(R.copy(L.normals[yt]).multiplyScalar(z.x),I.copy(L.binormals[yt]).multiplyScalar(z.y),U.copy(w[yt]).add(R).add(I),_t(U.x,U.y,U.z)):_t(z.x,z.y,u/o*yt)}for(let yt=m-1;yt>=0;yt--){const Nt=yt/m,z=d*Math.cos(Nt*Math.PI/2),jt=v*Math.sin(Nt*Math.PI/2)+g;for(let Vt=0,se=mt.length;Vt<se;Vt++){const K=Ct(mt[Vt],Ot[Vt],jt);_t(K.x,K.y,u+z)}for(let Vt=0,se=N.length;Vt<se;Vt++){const K=N[Vt];oe=Jt[Vt];for(let gt=0,ft=K.length;gt<ft;gt++){const C=Ct(K[gt],oe[gt],jt);y?_t(C.x,C.y+w[o-1].y,w[o-1].x+z):_t(C.x,C.y,u+z)}}}Y(),V();function Y(){const yt=s.length/3;if(f){let Nt=0,z=pt*Nt;for(let jt=0;jt<Ut;jt++){const Vt=nt[jt];Rt(Vt[2]+z,Vt[1]+z,Vt[0]+z)}Nt=o+m*2,z=pt*Nt;for(let jt=0;jt<Ut;jt++){const Vt=nt[jt];Rt(Vt[0]+z,Vt[1]+z,Vt[2]+z)}}else{for(let Nt=0;Nt<Ut;Nt++){const z=nt[Nt];Rt(z[2],z[1],z[0])}for(let Nt=0;Nt<Ut;Nt++){const z=nt[Nt];Rt(z[0]+pt*o,z[1]+pt*o,z[2]+pt*o)}}i.addGroup(yt,s.length/3-yt,0)}function V(){const yt=s.length/3;let Nt=0;bt(mt,Nt),Nt+=mt.length;for(let z=0,jt=N.length;z<jt;z++){const Vt=N[z];bt(Vt,Nt),Nt+=Vt.length}i.addGroup(yt,s.length/3-yt,1)}function bt(yt,Nt){let z=yt.length;for(;--z>=0;){const jt=z;let Vt=z-1;Vt<0&&(Vt=yt.length-1);for(let se=0,K=o+m*2;se<K;se++){const gt=pt*se,ft=pt*(se+1),C=Nt+jt+gt,E=Nt+Vt+gt,G=Nt+Vt+ft,q=Nt+jt+ft;zt(C,E,G,q)}}}function _t(yt,Nt,z){c.push(yt),c.push(Nt),c.push(z)}function Rt(yt,Nt,z){Ht(yt),Ht(Nt),Ht(z);const jt=s.length/3,Vt=M.generateTopUV(i,s,jt-3,jt-2,jt-1);re(Vt[0]),re(Vt[1]),re(Vt[2])}function zt(yt,Nt,z,jt){Ht(yt),Ht(Nt),Ht(jt),Ht(Nt),Ht(z),Ht(jt);const Vt=s.length/3,se=M.generateSideWallUV(i,s,Vt-6,Vt-3,Vt-2,Vt-1);re(se[0]),re(se[1]),re(se[3]),re(se[1]),re(se[2]),re(se[3])}function Ht(yt){s.push(c[yt*3+0]),s.push(c[yt*3+1]),s.push(c[yt*3+2])}function re(yt){r.push(yt.x),r.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Jy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const l=e[t.shapes[r]];i.push(l)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bc[s.type]().fromJSON(s)),new Ja(i,t.options)}}const Zy={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],l=t[i*3],c=t[i*3+1],h=t[s*3],o=t[s*3+1];return[new Xt(r,a),new Xt(l,c),new Xt(h,o)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[i*3],o=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],v=t[s*3+2],g=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(l-o)<Math.abs(a-h)?[new Xt(a,1-c),new Xt(h,1-u),new Xt(f,1-v),new Xt(g,1-p)]:[new Xt(l,1-c),new Xt(o,1-u),new Xt(d,1-v),new Xt(m,1-p)]}};function Jy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _a extends $e{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const l=[],c=[],h=[],o=[];let u=t;const f=(e-t)/s,d=new D,v=new Xt;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=r+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,o.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const M=p+m,w=M,y=M+i+1,L=M+i+2,I=M+1;l.push(w,y,I),l.push(y,L,I)}}this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wc extends $e{constructor(t=new $r([new Xt(0,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let l=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let o=0;o<t.length;o++)h(t[o]),this.addGroup(l,c,o),l+=c,c=0;this.setIndex(i),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(a,2));function h(o){const u=s.length/3,f=o.extractPoints(e);let d=f.shape;const v=f.holes;ur.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const M=v[m];ur.isClockWise(M)===!0&&(v[m]=M.reverse())}const g=ur.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const M=v[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=g.length;m<p;m++){const M=g[m],w=M[0]+u,y=M[1]+u,L=M[2]+u;i.push(w,y,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Qy(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new wc(i,t.curveSegments)}}function Qy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ra extends $e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let h=0;const o=[],u=new D,f=new D,d=[],v=[],g=[],m=[];for(let p=0;p<=i;p++){const M=[],w=p/i;let y=0;p===0&&a===0?y=.5/e:p===i&&c===Math.PI&&(y=-.5/e);for(let L=0;L<=e;L++){const I=L/e;u.x=-t*Math.cos(s+I*r)*Math.sin(a+w*l),u.y=t*Math.cos(a+w*l),u.z=t*Math.sin(s+I*r)*Math.sin(a+w*l),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(I+y,1-w),M.push(h++)}o.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const w=o[p][M+1],y=o[p][M],L=o[p+1][M],I=o[p+1][M+1];(p!==0||a>0)&&d.push(w,y,I),(p!==i-1||c<Math.PI)&&d.push(y,L,I)}this.setIndex(d),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ls extends $e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],h=[],o=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){const g=v/s*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),l.push(u.x,u.y,u.z),o.x=t*Math.cos(g),o.y=t*Math.sin(g),f.subVectors(u,o).normalize(),c.push(f.x,f.y,f.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){const g=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,M=(s+1)*d+v;a.push(g,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zs extends $e{constructor(t=new lm(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new D,c=new D,h=new Xt;let o=new D;const u=[],f=[],d=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function g(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),p()}function m(w){o=t.getPointAt(w/e,o);const y=a.normals[w],L=a.binormals[w];for(let I=0;I<=s;I++){const R=I/s*Math.PI*2,U=Math.sin(R),P=-Math.cos(R);c.x=P*y.x+U*L.x,c.y=P*y.y+U*L.y,c.z=P*y.z+U*L.z,c.normalize(),f.push(c.x,c.y,c.z),l.x=o.x+i*c.x,l.y=o.y+i*c.y,l.z=o.z+i*c.z,u.push(l.x,l.y,l.z)}}function p(){for(let w=1;w<=e;w++)for(let y=1;y<=s;y++){const L=(s+1)*(w-1)+(y-1),I=(s+1)*w+(y-1),R=(s+1)*w+y,U=(s+1)*(w-1)+y;v.push(L,I,U),v.push(I,R,U)}}function M(){for(let w=0;w<=e;w++)for(let y=0;y<=s;y++)h.x=w/e,h.y=y/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zs(new bc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mn extends uo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ui extends mn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Wc extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tM extends Wc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Uh=new Pe,sd=new D,rd=new D;class Tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eM extends Tf{constructor(){super(new Mi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ia*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class dm extends Wc{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const od=new Pe,Ia=new D,Fh=new D;class nM extends Tf{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ia.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ia),Fh.copy(i.position),Fh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Fh),i.updateMatrixWorld(),s.makeTranslation(-Ia.x,-Ia.y,-Ia.z),od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}}class ad extends Wc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iM extends Tf{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pm extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class rM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ld();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ld(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);class Xc extends ge{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Mi;const i=this,s=e.color!==void 0?new Gt(e.color):new Gt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,l=e.clipBias||0,c=e.shader||Xc.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,o=new Sr,u=new D,f=new D,d=new D,v=new Pe,g=new D(0,0,-1),m=new Ze,p=new D,M=new D,w=new Ze,y=new Pe,L=this.camera,I=new Xi(r,a,{samples:h,type:ts}),R=new Xe({name:c.name!==void 0?c.name:"unspecified",uniforms:_s.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=I.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=y,this.material=R,this.onBeforeRender=function(U,P,_){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(_.matrixWorld),v.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),v.extractRotation(_.matrixWorld),g.set(0,0,-1),g.applyMatrix4(v),g.add(d),M.subVectors(f,g),M.reflect(u).negate(),M.add(f),L.position.copy(p),L.up.set(0,1,0),L.up.applyMatrix4(v),L.up.reflect(u),L.lookAt(M),L.far=_.far,L.updateMatrixWorld(),L.projectionMatrix.copy(_.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(L.projectionMatrix),y.multiply(L.matrixWorldInverse),y.multiply(i.matrixWorld),o.setFromNormalAndCoplanarPoint(u,f),o.applyMatrix4(L.matrixWorldInverse),m.set(o.normal.x,o.normal.y,o.normal.z,o.constant);const N=L.projectionMatrix;w.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],w.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],w.z=-1,w.w=(1+N.elements[10])/N.elements[14],m.multiplyScalar(2/m.dot(w)),N.elements[2]=m.x,N.elements[6]=m.y,N.elements[10]=m.z+1-l,N.elements[14]=m.w,i.visible=!1;const W=U.getRenderTarget(),nt=U.xr.enabled,mt=U.shadowMap.autoUpdate;U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(I),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(P,L),U.xr.enabled=nt,U.shadowMap.autoUpdate=mt,U.setRenderTarget(W);const Ct=_.viewport;Ct!==void 0&&U.state.viewport(Ct),i.visible=!0},this.getRenderTarget=function(){return I},this.dispose=function(){I.dispose(),i.material.dispose()}}}Xc.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function ko(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},l=n[0].morphTargetsRelative,c=new $e;let h=0;for(let o=0;o<n.length;++o){const u=n[o];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+o+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,o),h+=d}}if(e){let o=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+o);o+=n[f].attributes.position.count}c.setIndex(u)}for(const o in r){const u=cd(r[o]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+o+" attribute."),null;c.setAttribute(o,u)}for(const o in a){const u=a[o][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[o]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<a[o].length;++g)d.push(a[o][g][f]);const v=cd(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+o+" morphAttribute."),null;c.morphAttributes[o].push(v)}}return c}function cd(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){const o=n[h];if(t===void 0&&(t=o.array.constructor),t!==o.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=o.itemSize),e!==o.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=o.normalized),i!==o.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=o.gpuType),s!==o.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=o.count*e}const a=new t(r),l=new dn(a,e,i);let c=0;for(let h=0;h<n.length;++h){const o=n[h];if(o.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=o.count;f<d;f++)for(let v=0;v<e;v++){const g=o.getComponent(f,v);l.setComponent(f+u,v,g)}}else a.set(o.array,c);c+=o.count*e}return s!==void 0&&(l.gpuType=s),l}function hd(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const l=Object.keys(n.attributes),c={},h={},o=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,w=l.length;M<w;M++){const y=l[M],L=n.attributes[y];c[y]=new L.constructor(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized);const I=n.morphAttributes[y];I&&(h[y]||(h[y]=[]),I.forEach((R,U)=>{const P=new R.array.constructor(R.count*R.itemSize);h[y][U]=new R.constructor(P,R.itemSize,R.normalized)}))}const d=t*.5,v=Math.log10(1/t),g=Math.pow(10,v),m=d*g;for(let M=0;M<r;M++){const w=i?i.getX(M):M;let y="";for(let L=0,I=l.length;L<I;L++){const R=l[L],U=n.getAttribute(R),P=U.itemSize;for(let _=0;_<P;_++)y+=`${~~(U[u[_]](w)*g+m)},`}if(y in e)o.push(e[y]);else{for(let L=0,I=l.length;L<I;L++){const R=l[L],U=n.getAttribute(R),P=n.morphAttributes[R],_=U.itemSize,N=c[R],W=h[R];for(let nt=0;nt<_;nt++){const mt=u[nt],Ct=f[nt];if(N[Ct](a,U[mt](w)),P)for(let pt=0,Ut=P.length;pt<Ut;pt++)W[pt][Ct](a,P[pt][mt](w))}}e[y]=a,o.push(a),a++}}const p=n.clone();for(const M in n.attributes){const w=c[M];if(p.setAttribute(M,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),M in h)for(let y=0;y<h[M].length;y++){const L=h[M][y];p.morphAttributes[M][y]=new L.constructor(L.array.slice(0,a*L.itemSize),L.itemSize,L.normalized)}}return p.setIndex(o),p}function ud(n,t=Math.PI/3){const e=Math.cos(t),i=(1+1e-10)*100,s=[new D,new D,new D],r=new D,a=new D,l=new D,c=new D;function h(g){const m=~~(g.x*i),p=~~(g.y*i),M=~~(g.z*i);return`${m},${p},${M}`}const o=n.index?n.toNonIndexed():n,u=o.attributes.position,f={};for(let g=0,m=u.count/3;g<m;g++){const p=3*g,M=s[0].fromBufferAttribute(u,p+0),w=s[1].fromBufferAttribute(u,p+1),y=s[2].fromBufferAttribute(u,p+2);r.subVectors(y,w),a.subVectors(M,w);const L=new D().crossVectors(r,a).normalize();for(let I=0;I<3;I++){const R=s[I],U=h(R);U in f||(f[U]=[]),f[U].push(L)}}const d=new Float32Array(u.count*3),v=new dn(d,3,!1);for(let g=0,m=u.count/3;g<m;g++){const p=3*g,M=s[0].fromBufferAttribute(u,p+0),w=s[1].fromBufferAttribute(u,p+1),y=s[2].fromBufferAttribute(u,p+2);r.subVectors(y,w),a.subVectors(M,w),l.crossVectors(r,a).normalize();for(let L=0;L<3;L++){const I=s[L],R=h(I),U=f[R];c.set(0,0,0);for(let P=0,_=U.length;P<_;P++){const N=U[P];l.dot(N)>e&&c.add(N)}c.normalize(),v.setXYZ(p+L,c.x,c.y,c.z)}}return o.setAttribute("normal",v),o}const Bs=59/136,On=n=>n*Bs,Js=n=>n/Bs,li=9.81,cl=2.23694,mm=[{id:"intro",b0:0,b1:16},{id:"launch",b0:16,b1:48},{id:"reveal",b0:48,b1:56},{id:"flip",b0:56,b1:88},{id:"build",b0:88,b1:96},{id:"mega",b0:96,b1:128},{id:"outro",b0:128,b1:136}];function gm(n){const t=Js(n);for(const e of mm)if(t<e.b1)return e.id;return"outro"}const be=(n,t,e)=>Math.max(t,Math.min(e,n)),hn=n=>(n=be(n,0,1),n*n*(3-2*n)),oM=n=>n<=0||n>=1?0:6*n*(1-n),di=(n,t)=>1-Math.exp(-n*t);function Sc(n){const t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)}function aM(n){const t=Math.floor(n),e=n-t,i=e*e*(3-2*e);return Sc(t)*(1-i)+Sc(t+1)*i}const ls=n=>aM(n)*2-1,fs=Math.PI*2,hl=16,qc=.81,vm=60/cl/qc,lM=vm*(60/cl);function cM(n,t){return Math.min(vm*t,lM*t/Math.max(.5,n))}function fd(n,t,e){const i=2.6*(t-n);return i>=0?Math.min(i,cM(n,e)):Math.max(i,-14.715)}const _i=1/240,hM=140,uM={fleet:{g:li,vy:12,tb:.36,sd:.62,vT:2.2,k:1.1,vMax:6.5,kp:7,A:2.6*li},row:{g:2.6*li,vy:11.5,tb:.16,sd:.06,vT:2.4,k:2.6,vMax:12,kp:10,A:5*li},finale:{g:li,vy:12.4,tb:.38,sd:.7,vT:2.2,k:1.1,vMax:6.5,kp:7,A:2.6*li}};function Tc(n){const t=uM[n],e=t.tb+t.vy/t.g;return{kind:n,P:t,tau:0,y:0,vy:0,thr:1,phase:"burn",landed:!1,impact:0,tApex:e,tSink:e+t.sd,sinkT:0,yApex:t.vy*t.tb/2+t.vy*t.vy/(2*t.g)}}function Vu(n,t,e=!0){const i=n.P;n.tau+=t;let s=0;if(n.tau<=i.tb)s=i.vy/i.tb+i.g,n.thr=1,n.phase="burn";else if(e&&n.tau>=n.tSink&&n.vy<0){const r=-Math.min(i.vMax,i.vT+i.k*Math.max(0,n.y));n.thr=be((i.g+i.kp*(r-n.vy))/i.A,.3,1),s=n.thr*i.A,n.phase="sink",n.sinkT+=t}else n.thr=0,n.phase=n.vy>0?"rise":"fall";return n.vy+=(s-i.g)*t,n.y+=n.vy*t,n.tau>i.tb&&n.y<=0&&n.vy<0&&(n.impact=-n.vy,n.y=0,n.landed=!0),n}const dd=7,pd=9,xm=30,_m=1.3,fM=.65,dM=[98.5,102.5,106.5,110.5],Ef=122,md=55,ql=88,Wu=.1,ym=6,Xu=.034,Fs=2.1,Ri=(()=>{const t=[0],e=[0],i=[0];let s=0,r=0,a=0,l=0;for(;s<Fs;){const c=Wu*Math.exp(-(l+.005)/ym)+Xu,h=s+c*.01/2;r+=Math.cos(h)*.01,a+=Math.sin(h)*.01,s=Math.min(Fs,s+c*.01),l+=.01,t.push(s),e.push(r),i.push(a)}return{h:.01,n:t.length-1,th:Float64Array.from(t),a:Float64Array.from(e),y:Float64Array.from(i),len:l}})(),fr=Ri.len;function oa(n,t={}){if(n<=0)return t.a=n,t.y=0,t.th=0,t.k=Wu+Xu,t;const e=Math.min(Ri.n,n/Ri.h),i=Math.min(Ri.n-1,Math.floor(e)),s=e-i;if(t.th=Ri.th[i]+(Ri.th[i+1]-Ri.th[i])*s,t.a=Ri.a[i]+(Ri.a[i+1]-Ri.a[i])*s,t.y=Ri.y[i]+(Ri.y[i+1]-Ri.y[i])*s,t.k=Wu*Math.exp(-Math.min(n,fr)/ym)+Xu,n>fr){const r=n-fr;t.a+=Math.cos(Fs)*r,t.y+=Math.sin(Fs)*r}return t}const qu={},pM=oa(fr).y,Ec=(()=>{let n=0;for(let t=0;t<=Ri.n;t++)n=Math.max(n,Ri.a[t]);return n})(),Mm=Ec,Ac=30,mM=9,gM=5,bm=(n,t)=>{const e=mM*t/Ac;return e+(t-e)*Math.exp(-Math.max(0,n)/gM)},Yo=0,wm=5.6*li,vM=.16,Sm=2.6,Qa=1,xM=4.5,_M=1.1,gd=1.8,yM=3.5,MM=4;let Va=6.6;const bM=.35,wM=.8,vd=1.5,xd=.55,aa=9,Yc=40,Cc=260,SM=n=>(n=be(n,0,1),n*n*n*(n*(6*n-15)+10)),TM=n=>n<=0||n>=1?0:30*n*n*(n-1)*(n-1),Af=n=>aa+(Yc-aa)*SM(n/Cc),EM=n=>(Yc-aa)*TM(n/Cc)/Cc,Yu=Yc;function _d(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){const[i,s]=n[e-1],[r,a]=n[e];return s+(a-s)*(t-i)/Math.max(1e-6,r-i)}return n[n.length-1][1]}const AM=[[hl,60],[20.6,60],[29,dd],[xm+1,dd]],yd=.25;function Cf(n,t,e,i,s,r=Yo,a=Va){const l=i*Math.sin(Fs),c=-i*Math.cos(Fs),h=i*oa(fr,{}).k,o={x:r,y:e,z:t,vx:0,vy:l,vz:c,ph:Fs,w:h,r:0,wr:0,alpha:0,alphaR:0,thr:0,rear:0,gas:1,tau:0,ph0:Fs,w0:h,Ta:l/li,burn:!1,landed:!1,zT:s,xT:aa,ax:0,az:0,side:0,impact:0,upright:!1,tUp:-1,yB:a,phase:"rot",...CM(e,l,a)};return o.r0=Math.max(o.Ta+.15,o.rotT-1.25),o.r1=o.rotT-.12,o}function CM(n,t,e){const i=e+PM,s=(t+Math.sqrt(t*t+2*li*Math.max(0,n-i)))/li;return{yIgn:i,tIgn:s,rotT:s-.05}}const RM=1.6,PM=6.5;function LM(n,t){const e=Math.min(n.rotT-.4,n.Ta+1.1),i=Math.max(0,e-RM);if(t>=e)return[Math.PI,0];if(t<i)return[n.ph0+n.w0*t,n.w0];const s=e-i,r=(t-i)/s,a=r*r,l=a*r,c=n.ph0+n.w0*i,h=2*l-3*a+1,o=l-2*a+r,u=-2*l+3*a,f=(6*a-6*r)/s,d=(3*a-4*r+1)/s,v=(-6*a+6*r)/s;return[h*c+o*s*n.w0+u*Math.PI,f*c+d*s*n.w0+v*Math.PI]}function DM(n,t){if(t<=n.r0)return[0,0];if(t>=n.r1)return[Math.PI,0];const e=n.r1-n.r0,i=(t-n.r0)/e;return[Math.PI*hn(i),Math.PI*oM(i)/e]}function Rf(n,t,e){n.tau+=t;const i=n.thr*wm,[s,r]=LM(n,n.tau);n.alpha=be(160*(s-n.ph)+25*(r-n.w),-45,45),n.w+=n.alpha*t,n.ph+=n.w*t;const[a,l]=DM(n,n.tau);n.alphaR=be(160*(a-n.r)+25*(l-n.wr),-30,30),n.wr+=n.alphaR*t,n.r+=n.wr*t;const c=n.gas>0?be(e,0,1):0;n.thr+=(c-n.thr)*Math.min(1,t*14);const h=Math.abs(n.ph-Math.PI),o=n.gas>0&&h<.45&&Math.abs(n.r-Math.PI)<.5&&!n.landed?be(.9*(MM-n.vz),0,1):0;n.rear+=(o-n.rear)*Math.min(1,t*10);const u=n.rear*yM;n.gas=Math.max(0,n.gas-(n.thr+.3*n.rear)*vM*t);let f=n.tau<Qa?Sm*hn(n.tau/.08)*hn((Qa-n.tau)/.1):0;n.tau>Qa&&(f+=be(.9*(n.xT-n.x)-1.8*n.vx,-1.6,1.6)),n.side=f;const d=Math.cos(n.r);return n.ax=-i*Math.sin(n.r)+f,n.az=i*d*Math.sin(n.ph)-u*Math.cos(n.ph),n.vx+=n.ax*t,n.vy+=(i*d*Math.cos(n.ph)+u*Math.sin(n.ph)-li)*t,n.vz+=n.az*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,!n.upright&&n.tau>n.r1-.04&&Math.abs(n.ph-Math.PI)<.06&&Math.abs(n.r-Math.PI)<.06&&(n.upright=!0,n.tUp=n.tau,n.phase="upright"),n.y<=0&&n.vy<0&&(n.impact=-n.vy,n.y=0,n.landed=!0),n}function Rc(n){const t=n.y,e=n.vy,i=xM,s=Math.max(.3,Math.cos(n.ph)*Math.cos(n.r));if(!n.burn&&(n.tau<.9||t>n.yIgn||e>0))return 0;n.burn=!0,n.sb=!0;let r;return t>n.yB&&e<-i?(n.phase="brake",r=li+(e*e-i*i)/(2*Math.max(.3,t-n.yB))):t>_M?(n.phase="sink",r=li+6*(-i-e)):(n.phase="flare",r=li+Math.max(0,(e*e-gd*gd)/(2*Math.max(.04,t-.03)))),be(r/(wm*s),.08,1)}const la=Math.ceil(hM/_i)+2,Ko=new Float64Array(la),dc=new Float64Array(la),Zt={R:Mm,lipAngle:Fs,vIn:Ac,deckX:Yo,len:fr,depth:Ec},Ln=[{kind:"fleet",b:xm},...dM.map((n,t)=>({kind:"row",b:n,row:t})),{kind:"finale",b:Ef}],Tm=[19,20];let or=0,ca=0,Md=AM;{const n=On(hl),t=On(Ku());let e=0,i=0,s=1,r="drive",a=1,l=0,c=null;const h=(M,w)=>{M.t0=w,M.s0=e,M.v=i,c=Tc(M.kind),M.yApex=c.yApex,M.tApex=w+c.tApex,M.sApex=e+i*c.tApex};for(;s<la;s++){const M=(s-.5)*_i;if(r==="drive"&&(M<n?i=0:l===0&&M>=On(Ln[0].b)?(r="hop",h(Ln[0],M)):l===1&&M>=t?(r="climb",Zt.s0=e,Zt.tIn=M,Zt.vIn=i):i+=fd(i,_d(Md,Js(M+yd)),a)*_i),r==="hop"&&(Vu(c,_i),c.landed)){const w=Ln[0];w.tLand=M,w.sLand=e,w.air=c.tau,w.sinkT=c.sinkT,w.impact=c.impact,l=1,r="drive",a=.85;const y=Js(M);Md=[[y,i],[y+.6,ql],[50.5,ql],[59.2,Ac],[Ku()+2,Ac]],Tm.push(Math.ceil(y+1),Math.ceil(y+3),Math.ceil(y+5))}if(r==="climb"&&(i=bm(e-Zt.s0,Zt.vIn)),e+=i*_i,Ko[s]=e,dc[s]=i,r==="climb"&&e>=Zt.s0+fr){Zt.tLip=s*_i,Zt.vLip=i;break}}Zt.sLip=Zt.s0+fr,Zt.height=pM,Zt.zLip=-Zt.s0-oa(fr).a,Zt.zFoot=-Zt.s0,Zt.xLand=aa;{const M=Zt.vLip*Math.sin(Fs)/li;or=Zt.tLip+M-.3,ca=or+2*Bs}const o=(M,w)=>{const y=Cf(Zt.sLip,Zt.zLip,Zt.height,Zt.vLip,null,Yo,M);let L=Zt.tLip,I=0;const R={maxY:0,tApex:L,tUpright:0,yUpright:0,tBurn:0,yBurn:0,maxTilt:0,sideInt:0,ySink:0,tSink:0,tInv:0};for(;!y.landed&&L<120;){const U=Pf(L);Rf(y,_i*U,Rc(y)),y.y>R.maxY&&(R.maxY=y.y,R.tApex=L),!R.tInv&&y.ph>Math.PI-.05&&(R.tInv=L),y.upright&&!R.tUpright&&(R.tUpright=L,R.yUpright=y.y),y.burn&&!R.tBurn&&(R.tBurn=L,R.yBurn=y.y),y.phase==="sink"&&!R.tSink&&(R.tSink=L,R.ySink=y.y),y.burn&&(R.maxTilt=Math.max(R.maxTilt,Math.abs(y.r-Math.PI),Math.abs(y.ph-Math.PI))),y.tau>Qa&&(R.sideInt+=Math.abs(y.side)*_i*U),L+=_i,I++,w&&(s++,Ko[s]=Zt.sLip,dc[s]=0)}return R.t=L,R.F=y,R.n=I,R};{const M=On(Math.round(Js(o(Va,!1).t)));let w=2,y=14;for(let L=0;L<28;L++){const I=(w+y)/2;o(I,!1).t>M?y=I:w=I}Va=(w+y)/2}const u=o(Va,!0),f=u.F,d=u.t;Zt.yB=Va,Zt.tUpright=u.tUpright,Zt.yUpright=u.yUpright,Zt.tBurn=u.tBurn,Zt.yBurn=u.yBurn,Zt.tSink=u.tSink,Zt.ySink=u.ySink,Zt.tInverted=u.tInv,Zt.tLand=d,Zt.apexY=u.maxY,Zt.tApex=u.tApex,Zt.impactNominal=f.impact,Zt.zLand=f.z,Zt.xTouch=f.x,Zt.maxTilt=u.maxTilt,Zt.sideTrim=u.sideInt,Zt.gasLeft=f.gas,Zt.vzTouch=f.vz,Zt.vxTouch=f.vx,Zt.dir=1;const v=Js(d);let m=[[v,Math.max(0,f.vz)],[v+.6,ql],[95.2,ql],[97.6,md],[400,md]],p=1;for(e=Zt.sLip,i=Math.max(0,f.vz),r="drive",a=.68,s=s+1;s<la;s++){const M=(s-.5)*_i;if(r==="drive"&&(p<Ln.length&&M>=On(Ln[p].b)?(r="hop",h(Ln[p],M)):i=Math.max(0,i+fd(i,_d(m,Js(M+yd)),a)*_i)),r==="hop"&&(Vu(c,_i),c.landed)){const w=Ln[p];w.tLand=M,w.sLand=e,w.air=c.tau,w.sinkT=c.sinkT,w.impact=c.impact,r="drive",a=.9;const y=Js(M);w.kind==="row"&&p===Ln.length-2?m=[[y,i],[y+.3,i],[Ef-.7,pd],[400,pd]]:w.kind==="finale"&&(m=[[y,i],[y+.5,46],[134,46],[136,6],[137.6,0],[400,0]]),p++}e+=i*_i,Ko[s]=e,dc[s]=i}}function Ku(){return 60}const bd=Ku();function Pf(n){if(n<=or-.12||n>=ca+.12)return 1;const t=hn((n-(or-.12))/.24),e=1-hn((n-(ca-.12))/.24);return 1-(1-bM)*Math.min(t,e)}function ha(n){if(n<=0)return 0;const t=n/_i,e=Math.min(la-2,Math.floor(t)),i=t-e;return Ko[e]+(Ko[e+1]-Ko[e])*i}function wd(n){const t=be(Math.round(n/_i),0,la-1);return dc[t]}const Ss=n=>ha(On(n)),ua={semi:{length:7.1,width:2.6,height:3.85},cybertruck:{length:5.68,width:2.2,height:1.79},models:{length:4.97,width:1.96,height:1.44},model3:{length:4.72,width:1.85,height:1.44},modelx:{length:5.06,width:2,height:1.68},modely:{length:4.75,width:1.92,height:1.62}},Sd=["models","cybertruck","semi","model3","modely","modelx"],zi=Ln[0],Cr=Ln[Ln.length-1];function Em(n,t,e=1.1){const i=Sd.map(l=>ua[l].width),s=i.reduce((l,c)=>l+c,0)+e*(i.length-1);let r=n-s/2;const a=[];return Sd.forEach((l,c)=>{const h=i[c];a.push({kind:l,s:r+h/2,x:t,yaw:Math.PI/2*(c%2?1:-1),...ua[l]}),r+=h+e}),{vehicles:a,s0:n-s/2,s1:n+s/2}}const Am=zi.sApex,Yl=Em(Am,0),Sn={beat:Bs,lateral:Yu,returnLane:{xPad:aa,x:Yc,bend:Cc,dir:1},hangar:{s:0},startLine:{s:0},dragStrip:{s0:0,s1:150,tick:1,tickMajor:5},ramp:{s0:zi.s0-.01,s1:zi.s0,height:0,vApproach:zi.v,vLip:zi.v,hop:!0},hop:zi,hops:Ln,fleet:{s0:Yl.s0,s1:Yl.s1,sCenter:Am,count:Yl.vehicles.length,lineup:Yl.vehicles},landing:{s:zi.sLand},shiftBeats:Tm,reveal:{s0:Ss(48),s1:Ss(56)},checkpoint:{s:Ss(48)},flip:Zt,boostArm:{s0:Ss(88),s1:Ss(96)},mega:{s0:Ss(96)-.01,s1:Ss(96),height:0},flight:{s0:Ss(96),s1:Ss(128),floor:0,ceiling:26},fleetRows:[],rings:[],pylons:[],finish:{s:Ss(134),beat:134}};{const n=["cybertruck","models","modelx","cybertruck"];Ln.filter(e=>e.kind==="row").forEach((e,i)=>{const s=n[i%n.length],r=e.sApex,a=ua[s],l=Math.max(2,Math.floor(19/(a.length+.5))),c=l*a.length+(l-1)*.5,h=[];for(let o=0;o<l;o++)h.push({kind:s,s:r,x:Yu-c/2+a.length/2+o*(a.length+.5),yaw:(o%2?1:-1)*Math.PI/2,...a});Sn.fleetRows.push({s:r,depth:a.width,top:a.height,beat:e.b,kind:s,vehicles:h,finale:!1,hop:e})});const t=Em(Cr.sApex,Yu,.9);Sn.fleetRows.push({s:(t.s0+t.s1)/2,depth:t.s1-t.s0,top:ua.semi.height,beat:Ef,kind:"fleet",vehicles:t.vehicles,finale:!0,hop:Cr})}Sn.flight.landStart=Cr.sApex;const Pn={go:On(hl),zero60:On(hl)+qc,fleetLip:zi.t0,fleetHop:zi.t0,fleetApex:zi.tApex,fleetLand:zi.tLand,fleetJets:zi.t0+Tc("fleet").tSink,reveal:On(48),flipClimb:Zt.tIn,flipLip:Zt.tLip,flipApex:Zt.tApex,bullet:[or,ca],flipUpright:Zt.tUpright,flipLand:Zt.tLand,megaLip:Ln[1].t0,rows:Ln.filter(n=>n.kind==="row").map(n=>n.t0),finale:Cr.t0,finaleApex:Cr.tApex,finaleJets:Cr.t0+Tc("finale").tSink,finaleLand:Cr.tLand,finish:On(134)};function Cm(){return 0}function Qs(n,t=null){const e=t||{pos:new D,fwd:new D,up:new D,inLoop:!1,theta:0};if(e.onFlip=!1,e.inLoop=!1,e.theta=0,e.ret=!1,n<Zt.s0)e.pos.set(0,0,-n),e.fwd.set(0,0,-1),e.up.set(0,1,0);else if(n<Zt.sLip){const i=oa(n-Zt.s0,qu),s=i.th;e.pos.set(0,i.y,-Zt.s0-i.a),e.fwd.set(0,Math.sin(s),-Math.cos(s)),e.up.set(0,Math.cos(s),Math.sin(s)),e.onFlip=!0,e.inLoop=!0,e.theta=s}else{const i=n-Zt.sLip;e.pos.set(Af(i),0,Zt.zLand+i),e.fwd.set(EM(i),0,1).normalize(),e.up.set(0,1,0),e.ret=!0}return e}function IM(n){return n<Zt.sLip?0:Af(n-Zt.sLip)}const si={launchPerfect:.07,launchGood:.18,shiftPerfect:.055,shiftGreen:.11,beatOn:.09,cuePerfect:.12,cueGood:.32},Kl=On(hl),Td=zi.tApex-fM;function Ed(){return{t:0,beat:0,section:"intro",mode:"drive",s:0,v:0,vNom:0,mph:0,y:0,vy:0,airborne:!1,airTime:0,xOff:0,zOff:0,pos:new D,quat:new Jn,up:new D(0,1,0),fwd:new D(0,0,-1),pitch:0,roll:0,inLoop:!1,loopTheta:0,upsideDown:!1,holding:!1,pressBeat:-1,rev:0,launched:!1,launchT:0,launch:null,gear:1,shift:{nextT:0,light:0,green:!1,perfect:!1,active:!1,gear:1},perf:1,boost:0,boostV:0,thrust:0,thrustArm:0,flap:0,lastFlapT:-9,score:0,combo:0,maxCombo:0,rings:0,ringsTotal:0,perfectShifts:0,hits:0,lapTime:0,finished:!1,finishT:0,results:null,timeScale:1,shiftT:-9,shiftPerfect:!1,landT:-9,flapT:-9,cam:{shot:"",cut:!1,fov:60,shake:0,roll:0,punch:0},flash:0,aberration:0,landImpact:0,popups:[],events:[],rcs:{down:0,left:0,right:0,pitch:0},cue:null,zero60:{show:!1,t:0,frozen:!1,final:qc},puffs:[],flips:0,fleetFlipped:0,gas:1,kickflip:null,flipAir:null,climbV:0,climbHits:0,megaFlip:null,megaLanding:!1,landGrade:"",flipGrade:"",hop:null,hopIdx:0,hopCue:-1,susp:{z:0,zv:0,p:0,pv:0,r:0,rv:0,aLong:0,load:1,wheels:[0,0,0,0],bottom:0},att:{p:0,w:0,r:0,wr:0},slip:0}}const Ad=[[.865,-1.36],[-.865,-1.36],[.865,1.32],[-.865,1.32]],Ai={travel:.13,ext:.07,wz:10.5,zz:.3,wp:11.5,zp:.36,wr:13,zr:.4},Cd=.3,Rd=.5;function Rm(n,t){if(n<0||n>t)return[0,0];const e=hn(n/.05)*hn((t-n)/.05);return n<t/2?[(n<Cd?1:Rd)*e,0]:[0,(n>t-Cd?1:Rd)*e]}const jr=680,zh=(()=>{const n=_m,t=n/jr,e=new Float64Array(jr+1);let i=0,s=0;for(let a=1;a<=jr;a++){const[l,c]=Rm((a-.5)*t,n);i+=(l-c)*t,s+=i*t,e[a]=s}const r=fs/e[jr];for(let a=0;a<=jr;a++)e[a]*=r;return e})();function UM(n,t){if(n<=0)return 0;if(n>=t)return fs;const e=n/t*jr,i=Math.min(jr-1,Math.floor(e)),s=e-i;return zh[i]+(zh[i+1]-zh[i])*s}const yr={dx:3.2,dz:-6.4,h:.6},$l=(n,t,e)=>{const i=Math.min(n,t);return i-e*Math.log(Math.exp((i-n)/e)+Math.exp((i-t)/e))};function $u(n={}){const{camera:t=null,car:e=null,world:i=null,fx:s=null,hud:r=null,audio:a=null}=n;let l=!!n.autoplay;const c=new Set,h={state:Ed(),muted:!1};let o=h.state;const u=e&&(e.isObject3D?e:e.root||e.group||e.object3d||e.mesh||e.object||null);let f=0,d=0,v,g,m,p,M,w;function y(){f=0,d=0,v={pressed:!1,shiftDone:-1,beatDone:-1,lastFlap:-1,kick:!1},g={shot:"",pos:new D(0,1.4,7),look:new D(0,.6,0),up:new D(0,1,0),fov:50,shake:0,punch:0,carYs:0,initialized:!1,shotT0:0,off:new D,lookOff:new D,rel:!0,fix:null},m=-1,p=0,M=0,w={}}y();function L(S,x,T={}){const b={type:S,text:x,t:o.t,beat:o.beat,...T};o.events.push(b),o.events.length>64&&o.events.shift(),x&&S!=="flap"&&o.popups.push({text:x,t0:o.t,kind:S,style:T.style||S,sub:T.sub});for(const $ of c)try{$(b)}catch(O){console.warn("[gameplay] listener",O)}return h.muted||R(b),b}const I={launch:S=>({name:"launch",grade:S.rating}),shift:S=>({name:"shift",grade:S.perfect?"PERFECT":"GOOD",points:S.perfect?400:200,gear:S.gear}),miss:()=>({name:"shift",grade:"LATE"}),combo:()=>({name:"combo",n:o.combo}),air:()=>({name:"jump"}),land:S=>[{name:"land"},{name:"airtime",secs:S.airTime}],touchdown:()=>({name:"land"}),softland:()=>({name:"land"}),hardland:()=>({name:"land"}),hit:()=>({name:"pylon"}),scrape:()=>({name:"land"}),flap:()=>({name:"thrust"}),kickflip:()=>({name:"thrust"}),thrusters:()=>({name:"thrust"}),fleetflip:()=>({name:"ring",combo:o.combo}),rowclear:()=>({name:"ring",combo:1}),climbbeat:()=>({name:"ring",combo:o.combo}),checkpoint:()=>({name:"checkpoint"}),finish:S=>[{name:"finish",results:S.results},{name:"record"}],megaflip:()=>({name:"whoosh"}),inverted:()=>({name:"whoosh"})};function R(S){const x=I[S.type];let T=x?x(S):null;T&&!Array.isArray(T)&&(T=[T]);try{r&&typeof r.onGameplayEvent=="function"&&r.onGameplayEvent(S)}catch(b){console.warn("[gameplay] hud hook",b)}if(T)for(const b of T){const $={...b,t:S.t,beat:S.beat,source:"gameplay"};if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof CustomEvent=="function")try{window.dispatchEvent(new CustomEvent("rr:event",{detail:$}))}catch(O){console.warn("[gameplay] rr:event",O)}}if(s)try{S.type==="land"||S.type==="touchdown"||S.type==="hardland"?s.land&&s.land(o.pos.clone(),be(o.landImpact+.3,.3,1)):S.type==="hit"?s.hit&&s.hit(o.pos.clone(),1):S.type==="scrape"?s.sparks&&s.sparks(o.pos.clone(),.6,new D(0,1,1)):(S.type==="shift"&&S.perfect||S.type==="megaflip")&&s.boost&&s.boost(S.type==="shift"?.6:1)}catch(b){console.warn("[gameplay] fx hook",b)}if(e)try{(S.type==="flap"||S.type==="kickflip")&&e.thrustPulse&&e.thrustPulse(1),(S.type==="land"||S.type==="touchdown"||S.type==="softland"||S.type==="hardland")&&e.land&&e.land(be(o.landImpact+.3,.3,1.6))}catch(b){console.warn("[gameplay] car hook",b)}}function U({shake:S=0,flash:x=0,punch:T=0,aberr:b=0}={}){if(g.shake=Math.max(g.shake,S),g.punch=Math.max(g.punch,T),o.flash=Math.max(o.flash,x),o.aberration=Math.max(o.aberration,b),!h.muted&&s)try{x>=.3&&s.flash&&s.flash(x*.6)}catch{}}function P(S){o.score+=Math.round(S*(1+Math.min(o.combo,20)*.1))}function _(){o.combo++,o.maxCombo=Math.max(o.maxCombo,o.combo),o.combo>1&&o.combo%5===0&&L("combo",`x${o.combo} COMBO`)}function N(){o.combo=0}function W(S){return Sc(M*1.618+S*7.77+.5)}function nt(S,x,T,b,$,O,it,st,Lt,vt=.55){M++,o.puffs.push({t0:o.t,x:S,y:x,z:T,vx:b,vy:$,vz:O,r0:it,r1:st,life:Lt,a:vt,seed:Sc(M*3.1)}),o.puffs.length>1800&&o.puffs.splice(0,o.puffs.length-1800)}function mt(S,x,T,b){for(w[S]=(w[S]||0)+x*T;w[S]>=1;)w[S]-=1,b()}const Ct=new D;function pt(S,x,T=1,b=.6){mt("tire",x,S,()=>{const $=W(1)<.5?-1:1;Ct.set($*(.7+W(7)*.3),.25,1.25+W(8)*.4).applyQuaternion(o.quat).add(o.pos);const O=$*(.4+W(2)*7.5);nt(Ct.x,.2,Ct.z,O,.25+W(3)*1.1,1+W(4)*4.5,.9*T,(3+W(5)*2.8)*T,2.8+W(6)*1.8,b)})}const Ut=3.6,et=.2,Ot={flip:1,finale:1,fleet:1,mega:.75,row:.55,takeoff:.7,rowTakeoff:.42},Jt=[1,0];function oe(){const S=t?t.position:null;if(!S)return Jt[0]=1,Jt[1]=0,Jt;let x=S.x-o.pos.x,T=S.z-o.pos.z;const b=Math.hypot(x,T)||1;return Jt[0]=x/b,Jt[1]=T/b,Jt}function ce(S,x,T,b,$,O="flip",it=0,st=0){const[Lt,vt]=oe(),Pt=Math.floor(W(b)*4)%4,[Bt,ee]=Ad[Pt];Ct.set(Bt*.85,0,ee*.8).applyQuaternion(o.quat);const It=S+Ct.x,Dt=x+Ct.z,Yt=W(b+1)*fs;let Qt=Math.cos(Yt),ae=Math.sin(Yt),le=Qt*Lt+ae*vt;($===1||$===3)&&le>.25&&(Qt=-Qt,ae=-ae,le=-le);const _e=le>.3;let ne;if($===1){const ie=W(b+9)<.3,Wt=(ie?2.6+W(b+2)*3.4:1.4+W(b+2)*3.6)*T;nt(It+Qt*.9,.3+W(b+3)*.6*T,Dt+ae*.9,Qt*Wt+it,(ie?2.6+W(b+4)*2.2:.9+W(b+4)*1.5)*T,ae*Wt+st,1*T,(ie?2+W(b+5)*1.8:2.4+W(b+5)*2.4)*T,4.6+W(b+6)*3.4,ie?.66:.6),ne=o.puffs[o.puffs.length-1],ne.k=1,ne.rise=ie?.45+.35*W(b+7):.16+.2*W(b+7)}else if($===2){const ie=.4+W(b+2)*1.6,Wt=_e?.45:1;nt(It+Qt*ie*.6,.25,Dt+ae*ie*.6,Qt*1.2*T+it*.6,(1.6+W(b+4)*2.2)*Wt*T,ae*1.2*T+st*.6,.7*T,(1.3+W(b+5)*1)*T*(_e?.75:1),3.2+W(b+6)*2.4,_e?.32:.6),ne=o.puffs[o.puffs.length-1],ne.k=1.5,ne.rise=(.16+.22*W(b+7))*Wt}else if($===3){const ie=(5+W(b+2)*4.5)*T;nt(S+Qt*ie*.35,.4,x+ae*ie*.35,Qt*ie*.65*1.4+it,(1.4+W(b+4)*1.6)*T,ae*ie*.65*1.4+st,.45*T,(1+W(b+5)*1.1)*T,4.5+W(b+6)*3,.5),ne=o.puffs[o.puffs.length-1],ne.k=1.4,ne.rise=.5+.45*W(b+7)}else{const ie=(5.5+Math.pow(W(b+2),.8)*10)*T,Wt=_e?.3:1;nt(It+Qt*.5,.12,Dt+ae*.5,Qt*ie+it,(.25+W(b+4)*1.3)*Wt,ae*ie+st,.6*T,(1.8+W(b+5)*2+ie*.12)*T*(_e?.6:1),3.4+W(b+6)*3,_e?.36:.52),ne=o.puffs[o.puffs.length-1],ne.k=1.45+.4*W(b+8),ne.rise=(.12+.22*W(b+7))*Wt}ne.kind=1}function lt(S,x,T,b,$,O=""){const it=Ot[O]??.7,st=b+et;if($<.05||st>Ut+1.4)return;const Lt=$*hn((Ut+1.4-st)/1.8),vt=O==="flip"?0:o.fwd.x*o.v*.45,Pt=O==="flip"?0:o.fwd.z*o.v*.45,Bt=hn((Ut+.4-st)/1.6);mt("wash",360*Lt*it,S,()=>ce(x,T,it,11,0,O,vt,Pt)),mt("billow",280*Lt*it*Bt,S,()=>ce(x,T,it,31,1,O,vt,Pt)),mt("column",170*Lt*it*Bt,S,()=>ce(x,T,it,57,2,O,vt,Pt)),mt("tendril",110*Lt*it*Bt,S,()=>ce(x,T,it,83,3,O,vt,Pt)),st<2.7&&!o._bloom&&(o._bloom=!0,Y(x,T,O,vt,Pt))}function Y(S,x,T,b=0,$=0){const O=Ot[T]??.7,it=Math.round(150*O),st=Math.round(90*O),Lt=Math.round(50*O),vt=Math.round(40*O);for(let Pt=0;Pt<it;Pt++)M++,ce(S,x,O,300+Pt*3,0,T,b,$);for(let Pt=0;Pt<st;Pt++)M++,ce(S,x,O,700+Pt*3,1,T,b,$);for(let Pt=0;Pt<Lt;Pt++)M++,ce(S,x,O,1100+Pt*3,2,T,b,$);for(let Pt=0;Pt<vt;Pt++)M++,ce(S,x,O,1500+Pt*3,3,T,b,$)}function V(S,x,T){const b=Ot[T]??.7,$=T==="flip"?0:o.fwd.x*o.v*.35,O=T==="flip"?0:o.fwd.z*o.v*.35,it=Math.round(150*b),st=Math.round(100*b),Lt=Math.round(40*b);for(let vt=0;vt<it;vt++)M++,ce(S,x,b,200+vt*3,0,T,$,O);for(let vt=0;vt<st;vt++)M++,ce(S,x,b,900+vt*3,1,T,$,O);for(let vt=0;vt<Lt;vt++)M++,ce(S,x,b,1300+vt*3,2,T,$,O);o._bloom=!1}h.press=()=>{l||f++},h.release=()=>{l||d++},h.setAutoplay=S=>{l=!!S},Object.defineProperty(h,"autoplay",{get:()=>l}),h.on=S=>(c.add(S),()=>c.delete(S)),h.bindInput=(S=window)=>{const x=b=>{if(b.type==="keydown"){if(b.code!=="Space"||b.repeat)return;b.preventDefault()}h.press()},T=b=>{b.type==="keyup"&&b.code!=="Space"||h.release()};return S.addEventListener("pointerdown",x),S.addEventListener("pointerup",T),S.addEventListener("pointercancel",T),window.addEventListener("keydown",x),window.addEventListener("keyup",T),()=>{S.removeEventListener("pointerdown",x),S.removeEventListener("pointerup",T),S.removeEventListener("pointercancel",T),window.removeEventListener("keydown",x),window.removeEventListener("keyup",T)}};function bt(){o.holding=!0,o.pressBeat=o.beat;const S=o.section;S==="intro"||!o.launched&&S==="launch"||Ht()}function _t(){const S=o.holding;o.holding=!1,!o.launched&&S&&o.beat>8&&(o.pressBeat??-1)>=6&&Rt()}function Rt(){if(o.launched)return;const S=o.t-Kl;let x;S<-si.launchGood?x="EARLY":Math.abs(S)<=si.launchPerfect?x="PERFECT":Math.abs(S)<=si.launchGood?x="GOOD":x="LATE",o.launch=x,o.launchT=Math.max(o.t,Kl),o.launched=!0,o.perf={PERFECT:1,GOOD:.985,LATE:.97,EARLY:.965}[x],o.zero60.final=+(qc*{PERFECT:1,GOOD:1.06,LATE:1.16,EARLY:1.22}[x]).toFixed(2),x==="PERFECT"?(P(1e3),_(),o.boostAmp=0,o.boost=Math.min(1,o.boost+.3)):x==="GOOD"&&(P(500),_()),L("launch",`${x} LAUNCH`,{rating:x,err:S,style:x==="PERFECT"?"perfect":"normal"}),U({shake:.9,flash:.08,aberr:.6})}function zt(S,x,T,b,$){o.cue={text:S,kind:x,t0:T,t1:b,tHit:$,k:0,active:!0,done:!1,grade:""}}function Ht(){const S=o.section,x=o.t;if(o.flap=1,o.lastFlapT=x,o.cue&&o.cue.active&&!o.cue.done&&o.cue.kind==="tap"&&x>=o.cue.t0&&x<=o.cue.t1){if(o.cue.id==="hop"&&o.hop)return;const T=Math.abs(x-o.cue.tHit),b=T<=si.cuePerfect?"PERFECT":T<=si.cueGood?"GOOD":"LATE";if(o.cue.done=!0,o.cue.grade=b,o.cue.id==="hop"){tt(o.cue.hop,b);return}o.kickflip={t0:x,dur:_m},P(b==="PERFECT"?1200:b==="GOOD"?700:300),_(),L("kickflip",`${b} KICKFLIP`,{grade:b,style:b==="PERFECT"?"perfect":"normal"}),U({punch:6,aberr:.4});return}if(S==="launch"&&o.launched&&o.mode==="drive"){const T=yt(x);if(T&&Math.abs(x-T.t)<=si.shiftGreen&&!T.used){re[T.idx]=!0;const b=Math.abs(x-T.t)<=si.shiftPerfect;o.gear++,o.boostAmp=b?3.2:1.6,o.boostT0=x,o.perf=be(o.perf+(b?.01:.005),.9,1.05),o.boost=Math.min(1,o.boost+(b?.18:.1)),b&&o.perfectShifts++,P(b?400:200),_(),o.shiftT=x,o.shiftPerfect=b,L("shift",b?"PERFECT SHIFT":"GOOD SHIFT",{gear:o.gear,perfect:b,style:b?"perfect":"normal"}),U({shake:b?.75:.45,aberr:b?1:.4})}else o.airborne||(o.perf=be(o.perf-.01,.9,1.05),L("miss","EARLY SHIFT",{style:"bad"}));return}if((S==="flip"||S==="reveal")&&(o.mode==="drive"||o.mode==="climb")&&o.beat<bd+3&&!(o.beat>70)){const T=Math.round(o.beat);Math.abs(o.t-On(T))<=si.beatOn&&T!==m?(m=T,o.climbHits++,P(150),_(),U({punch:3}),L("climbbeat","",{beatN:T})):S==="flip"&&(N(),o.perf=be(o.perf-.01,.9,1.05),L("offbeat","OFF BEAT",{style:"bad"}));return}if(S==="build"){const T=Math.round(o.beat);Math.abs(o.t-On(T))<=si.beatOn&&T!==m&&(m=T,o.thrustArm=Math.min(1,o.thrustArm+.1),P(100),_(),U({punch:3}))}}const re=[];function yt(S){for(let x=0;x<Sn.shiftBeats.length;x++){const T=On(Sn.shiftBeats[x]);if(S<=T+si.shiftGreen)return{idx:x,t:T,used:!!re[x]}}return null}function Nt(){const S=o.t,x=o.beat,T=o.section;if(T==="intro"||!o.launched&&T==="launch"){!v.pressed&&x>=8&&(v.pressed=!0,bt()),v.pressed&&!o.launched&&S>=Kl-.004&&_t();return}if(o.cue&&o.cue.kind==="tap"&&o.cue.active&&!o.cue.done&&S>=o.cue.tHit-.004){bt(),o.holding=!1;return}if(T==="launch"&&o.mode==="drive"){for(let b=0;b<Sn.shiftBeats.length;b++){const $=On(Sn.shiftBeats[b]);if(b>v.shiftDone&&S>=$-.004&&S<=$+si.shiftPerfect){v.shiftDone=b,bt(),o.holding=!1;return}}return}if((T==="flip"||T==="build")&&(o.mode==="drive"||o.mode==="climb")&&(T==="build"||o.beat<bd+3)){const b=Math.round(x);b>v.beatDone&&Math.abs(S-On(b))<=.012&&(v.beatDone=b,bt(),o.holding=!1)}}const z=Sn.fleetRows,jt={pos:new D,fwd:new D,up:new D,inLoop:!1,theta:0};new Pe,new D,new D,new D;const Vt=new Jn,se=new Jn,K=new Jn,gt=new D(1,0,0),ft=new D(0,1,0),C=new D(0,0,1),E=new D,G=new D,q=new Jn;function J(S){return S<3.2?"SOFT":S<6.5?"GOOD":"HARD"}function Z(S,x,T=null){o.airborne=!1,o.landT=o.t,o.landImpact=be(S/12,.15,1);{const $=o.susp;$.zv=-be(S,0,10),T&&($.p=be(T.p||0,-.1,.1),$.pv=be((T.w||0)-S*Math.sin(T.p||0)*1.4,-3,3),$.r=be(T.r||0,-.07,.07),$.rv=be(T.wr||0,-2,2))}const b=J(S);if(o.landGrade=b,b==="HARD"){if(N(),o.perf=be(o.perf-.03,.9,1.05),o.hits++,!h.muted&&s&&s.sparks)try{s.sparks(o.pos.clone(),1,new D(0,.6,1))}catch{}L("hardland","HARD LANDING",{impact:S,where:x,style:"bad"}),U({shake:1.3,flash:.2,aberr:1})}else P(b==="SOFT"?2e3:1e3),_(),L("softland",x==="row"?"":b==="SOFT"?"SOFT LANDING":"CLEAN LANDING",{impact:S,where:x,style:"perfect"}),U({shake:.5,flash:.12,aberr:.3});V(o.pos.x,o.pos.z,x)}function wt(S,x){o.t=x,o.beat=Js(x),o.holding&&o.pressBeat<6&&o.beat>=6&&(o.pressBeat=6);const T=gm(x);for(T!==o.section&&(o.section,o.section=T,qt(T)),l&&Nt();f>0;)f--,bt();for(;d>0;)d--,_t();const b=Pf(x);if(b!==o.timeScale&&!h.muted&&s&&s.setTimeScale)try{s.setTimeScale(b)}catch{}o.timeScale=b;const $=S*b;o.launched?o.rev+=(.35+.5*be(o.v/60,0,1)-o.rev)*di(3,S):(o.rev+=((o.holding?1:.08)-o.rev)*di(o.holding?3.2:4,S),o.holding&&(o.rev+=.03*Math.sin(x*61)),x>Kl+.45&&(o.holding=!1,Rt()));for(const[O,it]of[[10,"3"],[12,"2"],[14,"1"],[16,"GO"]]){const st=On(O);x>=st&&x-S<st&&L("countdown",it,{n:it,style:"countdown"})}if(T==="launch"&&o.launched&&o.mode==="drive"){const O=yt(x);if(O){const it=O.idx>0?On(Sn.shiftBeats[O.idx-1]):o.launchT;o.shift.nextT=O.t,o.shift.light=be((x-it)/(O.t-it),0,1),o.shift.green=Math.abs(x-O.t)<=si.shiftGreen,o.shift.perfect=Math.abs(x-O.t)<=si.shiftPerfect,o.shift.active=!re[O.idx],!re[O.idx]&&x>O.t+si.shiftGreen-S&&x<=O.t+si.shiftGreen&&(re[O.idx]=!0,o.perf=be(o.perf-.01,.9,1.05),N(),L("miss","MISSED SHIFT",{style:"bad"}))}else o.shift.active=!1,o.shift.green=!1,o.shift.light=0;o.shift.gear=o.gear}else o.shift.active=!1,o.shift.green=!1;o.vNom=wd(x);{const O=x-(o.boostT0??-99);o.boostV=O<0||O>8?0:(o.boostAmp||0)*hn(O/.45)*Math.exp(-Math.max(0,O-.45)/.8)}if(o.rcs.down*=Math.exp(-S*10),o.rcs.left*=Math.exp(-S*10),o.rcs.right*=Math.exp(-S*10),o.rcs.pitch*=Math.exp(-S*10),o.mode==="drive"?k(S,x):o.mode==="jump"?Mt(S,x):o.mode==="climb"?Et(S):o.mode==="flipAir"&&St(S,$,x),o.mph=Math.round((o.launched?o.v:0)*cl),o.mode==="flipAir"&&o.flipAir&&(o.mph=Math.round(Math.hypot(o.flipAir.vx,o.flipAir.vy,o.flipAir.vz)*cl)),o.landImpact*=Math.exp(-S*5),o.lapTime=o.launched?o.finished?o.finishT-o.launchT:x-o.launchT:0,o.launched){const O=x-o.launchT;o.zero60.show=O>=0&&o.beat<23,o.zero60.t=Math.min(O,o.zero60.final),!o.zero60.frozen&&O>=o.zero60.final&&(o.zero60.frozen=!0,o.launch!=="EARLY"&&L("moment3",`#3 0-60 IN ${o.zero60.final.toFixed(2)}s`,{style:"moment",sub:"TESLA ROADSTER"}))}if(o.launched&&o.launch!=="EARLY"&&x-o.launchT>=o.zero60.final-.006&&x-o.launchT<o.zero60.final+1.2&&o.mode==="drive"&&(o.mph=Math.max(o.mph,60)),o.launched&&x>=o.launchT&&x-o.launchT<1.8){const O=(x-o.launchT)/1.8;pt(S,520*(1-O)*(1-O)+50,1.2+.45*(1-O),.85)}if(o.slip=o.launched?17*Math.pow(be(1-(x-o.launchT)/.95,0,1),1.4):0,o.cue){const O=o.cue;O.k=be((x-O.t0)/Math.max(.001,O.tHit-O.t0),0,1),O.active=x>=O.t0&&x<=O.t1&&!(O.kind==="tap"&&O.done&&x>(O.doneT??(O.doneT=x))+.5),x>O.t1+.6&&(o.cue=null)}for(!o.cue&&o.hop&&o.hop.kind==="fleet"&&!o._kickCue&&(o._kickCue=!0,zt("TAP: THRUSTERS","tap",x,Td+si.cueGood+.3,Td),o.cue.id="kickflip"),T==="build"&&(o.thrustArm=Math.max(o.thrustArm,hn((o.beat-88)/8)),o.gas=Math.max(o.gas,o.thrustArm)),T==="build"&&o.beat>=94&&!o._ready&&(o._ready=!0,L("boostready","MEGA FLIP READY",{style:"big",sub:"TAP: THRUSTERS"})),o.flap*=Math.exp(-S*7),o.thrust=T==="build"?o.thrustArm*.3:0,o.mode==="flipAir"&&o.flipAir&&(o.thrust=be(o.flipAir.rear*1.1,0,1)),o.boost=T==="build"?Math.max(o.boost,o.thrustArm):o.boost,(o.mode==="flipAir"||o.mode==="jump")&&(o.boost=o.gas),o.mode==="drive"&&o.s>Zt.sLip&&(o.gas=Math.min(1,o.gas+S*.12)),!o.finished&&o.s>=Sn.finish.s&&o.mode==="drive"&&o.s>Zt.sLip&&(o.finished=!0,o.finishT=x,o.results={time:o.finishT-o.launchT,score:o.score,maxCombo:o.maxCombo,rings:o.fleetFlipped,ringsTotal:Q(),launch:o.launch,zero60:o.zero60.final,perfectShifts:o.perfectShifts,flips:o.flips,fleetFlipped:o.fleetFlipped,newRecord:!0},L("finish","FINISH",{results:o.results,style:"big"}),U({flash:.7,shake:.5,punch:6})),Tt(S),ct(S),o.flash*=Math.exp(-S*5),o.aberration*=Math.exp(-S*4);o.popups.length&&o.t-o.popups[0].t0>2.5;)o.popups.shift();if(o.puffs.length&&!(M&31)){const O=o.t;o.puffs=o.puffs.filter(it=>O-it.t0<it.life)}}function Q(){let S=0;for(const x of z)S+=x.vehicles.length;return S}function ct(S){const x=o.susp,T=!o.airborne&&o.mode!=="flipAir"&&o.mode!=="jump",b=o._vSusp??o.v;o._vSusp=o.v;let $=T&&o.mode==="drive"&&S>0?be((o.v-b)/S,-40,40):0;x.aLong+=($-x.aLong)*di(25,S);let O=0,it=0,st=0,Lt=1;if(T&&(it=be(x.aLong*.00125,-.035,.045),O=-Math.abs(x.aLong)*5e-4,o.mode==="climb"&&(Lt=Math.max(0,o.v*o.v*oa(o.s-Zt.s0,qu).k/li+Math.cos(o.loopTheta||0)),O-=be((Lt-1)*.024,0,.11)),!o.launched&&o.holding&&(it+=.008+.005*Math.sin(o.t*29)*o.rev,O-=.01*o.rev,st=.006*o.rev),o.launched&&o.v>1)){const ee=o.t*(2+o.v*.35);O+=.004*ls(ee)*Math.min(1,o.v/30),it+=.0015*ls(ee*.7+9)}x.load=Lt;const vt=T?1:.6;x.zv+=(-(Ai.wz*Ai.wz*vt)*(x.z-O)-2*Ai.zz*Ai.wz*x.zv)*S,x.z+=x.zv*S,x.pv+=(-(Ai.wp*Ai.wp*vt)*(x.p-it)-2*Ai.zp*Ai.wp*x.pv)*S,x.p+=x.pv*S,x.rv+=(-(Ai.wr*Ai.wr*vt)*(x.r-st)-2*Ai.zr*Ai.wr*x.rv)*S,x.r+=x.rv*S,x.p=be(x.p,-.11,.11),x.r=be(x.r,-.08,.08),x.bottom*=Math.exp(-S*6);let Pt=1/0,Bt=-1/0;for(let ee=0;ee<4;ee++){const[It,Dt]=Ad[ee],Yt=x.z-Dt*x.p+It*x.r;x.wheels[ee]=T?be(-Yt,-.07,Ai.travel):0,Pt=Math.min(Pt,Yt),Bt=Math.max(Bt,Yt)}if(T&&Pt<-.13){const ee=-.13-Pt;x.z+=ee,x.zv<0&&(x.zv<-2.5&&(x.bottom=Math.max(x.bottom,be(-x.zv/6,0,1))),x.zv*=-.2)}Bt>Ai.ext&&(x.z-=Bt-Ai.ext)}function rt(S,x){const T=ha(x),b=wd(x)+o.boostV,$=2*(T+o.boostV*.12-o.s);return Math.max(0,b+be($,-12,12))}function k(S,x){o.launched?o.v=rt(S,x):o.v=0;const T=o.s;if(o.s+=o.v*S,o.xOff*=Math.exp(-S*1.4),o.zOff*=Math.exp(-S*1.4),T<Zt.s0&&o.s>=Zt.s0){o.mode="climb",o.climbV=Zt.vIn*(.985+.015*be(o.climbHits/4,0,1)),zt("HOLD: THRUSTERS","hold",Zt.tBurn-.08,Zt.tLand+1.5,Zt.tBurn),o.cue.active=!1;return}o.y=0,o.vy=0,o.airborne=!1;const b=Ln[o.hopIdx];b&&o.launched&&!o.finished&&(b.kind==="fleet"?x>=b.t0-1e-6&&tt(b,""):(o.hopCue!==o.hopIdx&&x>=b.t0-.6&&(o.hopCue=o.hopIdx,zt("TAP: THRUSTERS","tap",b.t0-.6,b.t0+.35,b.t0),o.cue.id="hop",o.cue.hop=b),x>=b.t0+.35&&(o.cue&&o.cue.id==="hop"&&(o.cue.done=!0,o.cue.grade="LATE"),tt(b,"LATE"))))}function tt(S,x){if(o.hop||o.mode!=="drive"||Ln[o.hopIdx]!==S)return;const T=Tc(S.kind);T.t0=o.t,T.hp=S,T.grade=x,o.hop=T,o.mode="jump",o.airborne=!0,o.airTime=0,o.y=0,o.vy=0,o._bloom=!1,o.att.p=0,o.att.w=0,o.att.r=0,o.att.wr=0,o.hopIdx++,S.kind==="row"?o.megaFlip={t0:o.t+.06,dur:wM}:S.kind==="finale"&&(o.megaFlip={t0:o.t+T.tApex-vd/2,dur:vd,mega:!0}),S.kind==="fleet"?(o._m1Done=!0,o._m1T=o.t,L("moment1","#1 JUMPING THE ENTIRE FLEET",{style:"moment",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y"})):(P(x==="PERFECT"?600:x==="GOOD"?350:100),x!=="LATE"?_():N(),S.kind==="finale"?L("megaflip","MEGA FLIP",{style:"big",sub:"THE ENTIRE FLEET"}):L("hop",x?`${x} HOP`:"",{grade:x,style:x==="PERFECT"?"perfect":x==="LATE"?"bad":"normal"})),L("air","",{}),U({punch:S.kind==="row"?5:9,shake:S.kind==="row"?.3:.45,aberr:.25})}function Mt(S,x){const T=o.hop,b=T.P;o.v=rt(S,x);const $=o.s;o.s+=o.v*S,Vu(T,S),o.y=T.y,o.vy=T.vy,o.airTime+=S,T.phase==="burn"?o.rcs.down=1:T.phase==="sink"&&(o.rcs.down=Math.max(o.rcs.down,.55+.45*T.thr)),o.gas=Math.max(0,o.gas-(T.phase==="burn"?1:T.thr)*.08*S),T.tau<b.tb+.2?lt(S,o.pos.x,o.pos.z,o.y,1,T.kind==="row"?"rowTakeoff":"takeoff"):(T._bloomReset||(T._bloomReset=!0,o._bloom=!1),T.phase==="sink"&&lt(S,o.pos.x,o.pos.z,o.y,.6+.4*T.thr,T.kind));const O=o.att;if(o.kickflip){const it=o.kickflip.dur,st=x-o.kickflip.t0,Lt=UM(st,it);O.wr=S>0?(Lt-O.r)/S:0,O.r=Lt;const[vt,Pt]=Rm(st,it);o.rcs.right=Math.max(o.rcs.right,vt),o.rcs.left=Math.max(o.rcs.left,Pt)}if(o.megaFlip){const it=(x-o.megaFlip.t0)/o.megaFlip.dur;it>=0&&it<.3?o.rcs.pitch=1:it>.7&&it<1&&(o.rcs.pitch=-1),it>=1&&(o.flips++,o.megaFlip=null,o._lastFlipEnd=x)}{const it=.03*hn((2.2-o.y)/1.6),st=be(-10*(O.p-it)-6*O.w,-4.5,4.5);O.w+=st*S,O.p+=O.w*S}T.kind==="fleet"&&T.tau>T.tApex&&!o._fleetDone&&(o._fleetDone=!0,P(1500),_());for(let it=p;it<z.length;it++){const st=z[it],Lt=st.depth/2+1.4;if(o.s<st.s-Lt)break;if(Math.abs(o.s-st.s)<=Lt&&o.y<st.top+.05&&!st._hit&&(st._hit=!0,T.y=o.y=st.top+.3,T.vy=o.vy=Math.max(T.vy,5),o.hits++,N(),L("hit","ROOF CLIP",{style:"bad",row:it}),U({shake:1.2,flash:.2,aberr:1}),!h.muted&&s&&s.sparks))try{s.sparks(o.pos.clone(),.9,new D(0,1,0))}catch{}if($<st.s+Lt&&o.s>=st.s+Lt&&(p=it+1,!st._hit)){const vt=o.megaFlip||o.t-(o._lastFlipEnd||-9)<.25,Pt=st.vehicles.length;vt?(o.fleetFlipped+=Pt,P(400*Pt),_(),L("fleetflip",st.finale?"THE ENTIRE FLEET":`FLEET FLIP x${Pt}`,{style:st.finale?"big":"normal",n:Pt,row:it,sub:`+${400*Pt}`})):(P(150*Pt),_(),L("rowclear","CLEAR",{n:Pt,row:it})),U({punch:3})}}if(T.landed){o.y=0,o.vy=0,o.mode="drive",o.hop=null,o.kickflip&&(o.flips++,o.kickflip=null),o.megaFlip&&(o.flips++,o.megaFlip=null);const it=O.r-fs*Math.round(O.r/fs);Z(T.impact,T.kind,{p:O.p,w:O.w,r:it,wr:O.wr}),T.kind==="fleet"&&o._fleetDone&&!o._fleetMsg&&(o._fleetMsg=!0,L("fleet","FLEET CLEARED",{style:"big",sub:"+1,500"})),o.pitch=0,o.roll=0,O.p=0,O.w=0,O.r=0,O.wr=0,T.kind!=="row"&&L("land",`${o.airTime.toFixed(2)}s AIR`,{airTime:o.airTime,style:"normal"}),o.cue&&o.cue.kind==="hold"&&(o.cue=null)}}function Et(S,x){const T=oa(o.s-Zt.s0,qu).th;if(o.v=bm(o.s-Zt.s0,o.climbV),o.s+=o.v*S,o.y=0,o.vy=0,o.airborne=!1,!o._m2Done&&o.s>Zt.s0+1.5&&(o._m2Done=!0,L("moment2","#2 THE MIDAIR FLIP",{style:"moment",sub:"PAST VERTICAL"})),T>Math.PI/2&&!o._invDone&&(o._invDone=!0,U({punch:6,aberr:.3})),o.s>=Zt.sLip){const b=Cf(Zt.sLip,Zt.zLip,Zt.height,o.v,Zt.zLand);o.flipAir=b,o.mode="flipAir",o.airborne=!0,o.airTime=0,o._burn=!1,o.gas=1,U({punch:8,shake:.4})}}function St(S,x,T){const b=o.flipAir;let $;if(l?$=Rc(b):$=o.holding?Rc(b):0,Rf(b,x,$),o.airTime+=x,o.v=Math.hypot(b.vx,b.vz),o.y=b.y,o.vy=b.vy,o.gas=b.gas,o.rcs.down=Math.max(o.rcs.down,b.thr>.02?.55+.45*b.thr:0),o.rcs.pitch=be(b.alpha/9,-1,1),o.flipRear=b.rear,b.tau<Qa&&b.side>.05)o.rcs.left=Math.max(o.rcs.left,Math.min(1,.35+b.side/Sm));else if(Math.abs(b.alphaR)>.4){const O=Math.min(.55,Math.abs(b.alphaR)/10);b.alphaR>0?o.rcs.right=Math.max(o.rcs.right,O):o.rcs.left=Math.max(o.rcs.left,O)}else b.side>.15?o.rcs.left=Math.max(o.rcs.left,Math.min(.5,b.side/1.6)):b.side<-.15&&(o.rcs.right=Math.max(o.rcs.right,Math.min(.5,-b.side/1.6)));if(T>=or&&!o._bulletDone&&(o._bulletDone=!0,L("bullet","",{})),b.upright&&!o._uprightDone&&(o._uprightDone=!0,o.flips++,P(2500),_(),L("upright","UPRIGHT",{style:"big",sub:"+2,500"})),b.thr>.3&&!o._thrDone&&(o._thrDone=!0,L("thrusters","THRUSTERS",{style:"normal"})),lt(S,b.x,b.z,b.y,b.thr>.02?.6+.4*b.thr:0,"flip"),b.landed){o.mode="drive";const O=b.z-Zt.zLand;o.s=Zt.sLip+Math.max(.001,O),o.zOff=O<.001?O:0,o.xOff=b.x-Af(Math.max(0,O)),o.v=Math.max(0,b.vz),o.y=0,o.vy=0;const it=Math.abs(b.ph-Math.PI)<.5&&Math.abs(b.r-Math.PI)<.5;Z(it?b.impact:Math.max(b.impact,7),"flip",{p:-(b.ph-Math.PI),w:-b.w,r:b.r-Math.PI,wr:b.wr}),o.pitch=0,o.roll=0,o.flipGrade=o.landGrade,o.flipAir=null,o.cue&&o.cue.kind==="hold"&&(o.cue=null)}}function qt(S){S==="reveal"&&L("checkpoint","THE MIDAIR FLIP",{style:"big",sub:"NEXT: #2"})}function kt(S){return S<Zt.s0?Yo*hn((S-(Zt.s0-90))/70):0}function Tt(S){if(Qs(o.s,jt),o.mode==="flipAir"&&o.flipAir){const st=o.flipAir;o.pos.set(st.x,st.y,st.z),o.pitch=st.ph,o.roll=st.r,Vt.setFromAxisAngle(gt,o.pitch),se.setFromAxisAngle(C,st.r),o.quat.copy(Vt).multiply(se),o.fwd.set(0,0,-1).applyQuaternion(o.quat),o.up.set(0,1,0).applyQuaternion(o.quat),o.inLoop=!1,o.upsideDown=Math.cos(st.ph)<-.3;return}if(o.mode==="climb"||jt.onFlip){o.pos.copy(jt.pos),o.pos.x+=Yo,o.fwd.copy(jt.fwd),o.up.copy(jt.up),o.pitch=jt.theta,o.roll=0,Vt.setFromAxisAngle(gt,o.pitch),o.quat.copy(Vt),o.inLoop=!0,o.loopTheta=jt.theta,o.upsideDown=jt.theta>Math.PI*.6;return}o.inLoop=!1,o.upsideDown=!1,o.pos.copy(jt.pos),o.pos.y=o.y,o.pos.x+=o.xOff+kt(o.s),o.pos.z+=o.zOff;const x=Math.atan2(-jt.fwd.x,-jt.fwd.z);let T=0,b=0,$=di(14,S);o.mode==="jump"?(T=o.att.p,$=1):T=Math.atan2(jt.fwd.y,Math.hypot(jt.fwd.x,jt.fwd.z)),o.pitch+=(T-o.pitch)*$,o.roll+=(b-o.roll)*di(5,S);let O=o.pitch,it=o.roll;o.mode==="jump"&&(it=o.att.r),o.mode==="jump"&&o.megaFlip&&(O+=fs*hn((o.t-o.megaFlip.t0)/o.megaFlip.dur)),K.setFromAxisAngle(ft,x),Vt.setFromAxisAngle(gt,O),se.setFromAxisAngle(C,it),o.quat.copy(K).multiply(Vt).multiply(se),o.fwd.set(0,0,-1).applyQuaternion(o.quat),o.up.set(0,1,0).applyQuaternion(o.quat),o.mode==="jump"&&(o.fwd.copy(jt.fwd),o.up.set(0,1,0)),o.upsideDown=Math.cos(O)*Math.cos(it)<-.3,o.mode==="jump"&&(E.set(0,xd,0).applyQuaternion(o.quat),q.copy(K).multiply(Vt.setFromAxisAngle(gt,o.pitch)),G.set(0,xd,0).applyQuaternion(q),o.pos.add(G).sub(E))}const F={intro:"intro",launch:"drop1",reveal:"break",flip:"loop",build:"build",mega:"flight",outro:"outro"};h.carInput=()=>({speed:o.mode==="flipAir"?0:o.v+o.slip,rev:o.rev,throttle:o.launched?be(.5+o.boostV/10,0,1):o.rev,boost:be(o.boostV/9,0,1),brake:o.finished?1:0,flying:o.mode==="flipAir",airborne:o.airborne,grounded:!o.airborne,armed:Math.max(o.thrustArm,o.mode==="flipAir"||o.mode==="jump"?1:0),thrust:o.thrust,lights:1,rcs:o.rcs,jetsDown:o.rcs.down,jetsLeft:o.rcs.left,jetsRight:o.rcs.right,jetsPitch:o.rcs.pitch,mode:o.mode}),h.fxInput=()=>({t:o.t,speed01:be(o.v/80,0,1),boost01:Math.max(o.boost,be(o.boostV/9,0,1)),thrust:o.thrust,car:u,section:F[o.section]||o.section,timeScale:o.timeScale,smoke:o.puffs,rcs:o.rcs}),h.hudState=()=>({t:o.t,speed:o.mph,score:o.score,combo:o.combo,maxCombo:o.maxCombo,boost:o.mode==="flipAir"||o.mode==="jump"?o.gas:Math.max(o.boost,o.thrustArm),rev:o.rev,revTarget:[.85,1],shift:{phase:o.shift.light,window:o.shift.green,perfect:o.shift.perfect,active:o.shift.active},gear:o.gear,launch:o.launch||void 0,shifts:o.perfectShifts,shiftsTotal:Sn.shiftBeats.length,rings:o.fleetFlipped,ringsTotal:Q(),finished:o.finished,phase:F[o.section]||o.section,lapTime:o.lapTime,upsideDown:o.upsideDown,results:o.results,holding:o.holding,section:o.section,mode:o.mode,cue:o.cue,zero60:o.zero60,flips:o.flips,fleetFlipped:o.fleetFlipped,gas:o.gas,timeScale:o.timeScale,carScreen:o.cam.car||null});function dt(){const S=e&&e.body;if(!S||!S.isObject3D)return;const x=o.susp;S.position.y+=x.z,S.rotation.x+=x.p,S.rotation.z+=x.r}function at(S){if(u&&(u.position.copy(o.pos),u.quaternion.copy(o.quat)),!!e){if(n.driveCar&&typeof e.update=="function"){try{e.update(S,h.carInput())}catch(x){console.warn("[gameplay] car.update",x)}dt();return}try{typeof e.setState=="function"&&e.setState(o),typeof e.setSpeed=="function"&&e.setSpeed(o.v),typeof e.setThrusters=="function"&&e.setThrusters(o.thrust)}catch(x){console.warn("[gameplay] car hook",x)}dt()}}const H=new D,ht=new D,At=new D(0,1,0),Kt={pos:new D,fwd:new D,up:new D,inLoop:!1,theta:0},ve={pos:new D,fwd:new D,up:new D,inLoop:!1,theta:0},Re=new Pe,we=new D;function Ie(S,x,T,b,$,O){we.copy(x).sub(S);const it=Math.hypot(we.x,we.z)||1e-6,st=Math.tan($*Math.PI/360),Lt=st*(t?t.aspect:1),vt=Math.atan2(we.x,-we.z)-Math.atan(T*Lt),Pt=Math.atan2(we.y,it)-Math.atan(b*st);return O.set(S.x+Math.sin(vt)*Math.cos(Pt)*20,S.y+Math.sin(Pt)*20,S.z-Math.cos(vt)*Math.cos(Pt)*20),O}const ut=new D,wn=new D,Wn=new D,gn=new D;function Xn(S,x,T,b,$,O){Wn.copy(x).sub(S).normalize(),gn.copy(T).addScaledVector(Wn,-T.dot(Wn)),gn.lengthSq()<1e-8&&gn.set(0,0,-1),gn.normalize();const it=Math.atan(-b*Math.tan($*Math.PI/360));return O.copy(S).addScaledVector(Wn,Math.cos(it)*20).addScaledVector(gn,Math.sin(it)*20),O}const Si=new D;function Oi(S,x,T,b,$,O,it=.5){const st=Math.tan(b*Math.PI/360),Lt=st*(t?t.aspect:1);Si.copy(x).sub(S);let vt=Math.atan2(Si.x,-Si.z),Pt=Math.atan2(Si.y,Math.hypot(Si.x,Si.z));const Bt=T.x-S.x,ee=T.z-S.z,It=Math.max(.001,Math.hypot(Bt,ee)),Dt=Math.atan2(Bt,-ee),Yt=Math.atan2(T.y+it-S.y,It);let Qt=Dt-vt;Qt-=fs*Math.round(Qt/fs);const ae=Math.atan($*Lt),le=Math.atan(O*st);Qt>ae?vt=Dt-ae:Qt<-ae&&(vt=Dt+ae),Yt-Pt>le?Pt=Yt-le:Yt-Pt<-le&&(Pt=Yt+le),x.set(S.x+Math.sin(vt)*Math.cos(Pt)*20,S.y+Math.sin(Pt)*20,S.z-Math.cos(vt)*Math.cos(Pt)*20)}function bs(){const S=be((t.aspect-.5625)/1.2153,0,1),x=(T,b)=>T+(b-T)*S;return{D:x(7.2,4.8),H:x(1.3,.9),fov:x(58,60),ndcY:x(-.24,-.16),k:S}}const is=new D,Qe=new D,Bi=new D,qn=new D,j=.6,$t=(S,x,T)=>S<0||S>6?0:S<x?hn(S/x):Math.exp(-(S-x)/T),he=new D(0,1,0);function A(){const S=o.beat,x=o.hop;if(S<8)return"intro";if(S<16)return"countdown";if(o.finished||o.section==="outro")return x&&x.kind==="finale"?o.t<Pn.finaleJets+.1?"megaWide":"hopLand":o.landT>Pn.finale&&o.t-o.landT<1.6&&!o.finished?"hopLand":!o.finished&&o.hopIdx<Ln.length&&S>=120?"megaWide":"finish";if(o.section==="launch")return x&&x.kind==="fleet"?o.t<Pn.fleetJets+.12?"fleetSide":"hopLand":o.landT>Pn.fleetHop&&o.t-o.landT<1.5?"hopLand":o.hopIdx===0&&o.t>=Pn.fleetHop-1.4?"fleetSide":o.launched&&o.t-o.launchT<.4?"launchFront":o.t<Pn.zero60+.15?"launchTop":S<19.8?"launchSide":S>=24.2&&o.hopIdx===0?"fleetWide":"chase";if(o.section==="reveal")return"flipReveal";if(o.section==="flip")return o.mode==="climb"?"flipClimb":o.mode==="flipAir"?o.t<or-.05?"flipClimb":o.t<ca?"flipOrbit":"flipDescent":o.s>Zt.sLip&&o.t-o.landT<1.3&&o.landT>Zt.tLip?"flipDescent":o.s<Zt.s0?"flipReveal":"chase";if(o.section==="mega"){if(x&&x.kind==="finale")return o.t<Pn.finaleJets+.1?"megaWide":"hopLand";if(o.landT>Pn.finale&&o.t-o.landT<1.6)return"hopLand";if(o.hopIdx>=Ln.length-1&&S>=120)return"megaWide";if(S>=97&&(o.hopIdx<Ln.length-1||x&&x.kind==="row"||o.t-o.landT<.9))return"megaChase"}return"chase"}const B={default:1,hopLand:0,launchFront:0,flipSide:1,fleetSide:0,landHero:0,flipReveal:1.6,climbChase:.8,flipLip:0,flipOrbit:0,flipDescent:.9,flipClimb:0,flipHero:0,megaLand:0,megaLaunch:.5,megaChase:.6,megaWide:0,finish:1.6,countdown:1,launchTop:0,launchSide:0,fleetWide:1.2,fleetJump:0};function X(S){if(!t)return;const x=A(),T=x!==g.shot;if(T){if(g.initialized){const ye=g.shot==="landHero"||g.shot==="flipHero"||g.shot==="launchFront"||g.shot==="hopLand"?0:(B[x]??B.default)*Bs;if(ye>0){const Se=new D(0,0,-1).applyQuaternion(t.quaternion),Be=Math.max(4,t.position.distanceTo(o.pos));g.blend={t0:o.t,dur:ye,off:t.position.clone().sub(o.pos),lookOff:t.position.clone().addScaledVector(Se,Be).sub(o.pos),up:new D(0,1,0).applyQuaternion(t.quaternion),fov:t.fov}}else g.blend=null}g.shot=x,g.shotT0=o.t,g.fix=o.pos.clone(),g.fj=null,g.hz=null,g.mz=null}o.t-g.shotT0;const b=o.pos,$=be(o.v/60,0,1.2);Qs(o.mode==="flipAir"?Zt.sLip+1:Math.max(0,o.s),Kt);let O=Kt.fwd.x,it=Kt.fwd.z;{const te=Math.hypot(O,it)||1;O/=te,it/=te}Kt.onFlip&&(O=0,it=-1);const st=-it,Lt=O,vt=(te,ye)=>b.x+st*te-O*ye,Pt=(te,ye)=>b.z+Lt*te-it*ye,Bt=hn((o.v-18)/62),ee=o.beat,It=bs(),Dt=t.aspect<1,Yt=o.launched?o.t-o.launchT:-1,Qt=$t(Yt,.12,.42),ae=o.t-o.shiftT,le=$t(ae,.06,.32)*(o.shiftPerfect?1:.6),_e=$t(o.t-o.landT,.035,.1),ne=$t(o.t-o.flapT,.04,.2),ie=Qt*1.6+le*.7;let Wt=It.fov,fe=10,xe=14,Le=!0,Ae=!0;g.carYs+=(o.y-g.carYs)*di(o.mode==="fly"?4.5:12,S);const an=be(o.boostV/9,0,1);let qe=Qt*6+le*4,Te=o.launched&&!o.airborne&&!o.finished&&!o.inLoop;const tn=It.ndcY;switch(o.flipAir,x){case"intro":{const te=hn(ee/8),ye=.28+2.3*te,Se=Dt?12.2-.8*te:8-.5*te;H.set(b.x+Math.sin(ye)*Se,1.05+.25*Math.sin(te*Math.PI),b.z+Math.cos(ye)*Se),Wt=Dt?46:40,Xn(H,ut.set(b.x,j,b.z),he,Dt?-.1:-.04,Wt,ht),fe=30,xe=30,Ae=!1;break}case"countdown":{const te=hn((ee-8)/7.5),ye=2.58+(fs-2.58)*te,Se=Dt?11.4:7.5,Be=Se+(It.D-Se)*te,ke=1.05+(It.H+j-1.05)*te;H.set(b.x+Math.sin(ye)*Be,ke,b.z+Math.cos(ye)*Be),Wt=(Dt?46:40)+(It.fov-(Dt?46:40))*te,H.y+=o.rev*.012*Math.sin(o.t*53),Xn(H,ut.set(b.x,j,b.z),he,(Dt?-.1:-.04)+(It.ndcY-(Dt?-.1:-.04))*te,Wt,ht),fe=30,xe=30,Ae=!1;break}case"launchTop":{H.set(.02,Dt?8:6.9,b.z-1.2),ht.set(0,0,H.z-.01),At.set(0,0,-1),Le=!1,Wt=Dt?82:62,fe=60,xe=60,Ae=!0,Te=!1;break}case"launchFront":{H.set(g.fix.x+3,.5,g.fix.z-7),Ie(H,ut.set(b.x,.6,b.z),Dt?0:-.15,-.1,Wt,ht),Wt=Dt?58:44,fe=60,xe=40,Ae=!1,Te=!1;break}case"launchSide":{Dt?H.set(b.x+15,2.3,b.z+2.5):H.set(b.x+8.6,.85,b.z+3.5),Ie(H,ut.set(b.x,.55,b.z-.3),Dt?.34:.42,-.02,Wt,ht),Wt=Dt?60:50,fe=14,xe=18;break}case"fleetWide":{const te=-Sn.fleet.sCenter;H.set(Dt?28.5:27,7,te+24),ut.set(0,2.2,te*.65+b.z*.35),Ie(H,ut,0,Dt?.05:0,Wt,ht),Wt=Dt?56:44,Oi(H,ht,b,Wt,.7,.6),fe=3,xe=5,Ae=!1,Te=!1;break}case"fleetJump":{const te=-Sn.fleet.s0,ye=-(Sn.fleet.lineup.find(hi=>hi.kind==="semi")||{s:Sn.fleet.sCenter}).s,Se=-Sn.ramp.s1-3.5;H.set(Dt?3.2:3.4,1.15,-$l(-Se,-(b.z+7.5),1.5));const Be=b.z-H.z,ke=b.x-H.x,In=Math.max(2,Math.hypot(ke,Be)),Yn=Math.atan2(b.y+.9-H.y,In),ei=Math.atan2(-H.y,Math.max(3,H.z-te)),Kn=Dt?.42:.5,ci=.56,ss=Math.max(.12,Yn-ei);let ni=.4;for(let hi=0;hi<24;hi++)ni*=ss/(Math.atan(Kn*ni)+Math.atan(ci*ni));const ki=Math.max(6,H.z-ye),Hs=Math.tan(Math.atan(4.7/ki))/t.aspect;ni=be(Math.max(ni,Hs),Math.tan(24*Math.PI/360),Math.tan(72*Math.PI/360));const Hi=ei+Math.atan(ci*ni),Ti=Math.atan2(.15-H.x,-(ye-H.z));ht.set(H.x+Math.sin(Ti)*Math.cos(Hi)*20,H.y+Math.sin(Hi)*20,H.z-Math.cos(Ti)*Math.cos(Hi)*20),Wt=2*Math.atan(ni)*180/Math.PI,fe=40,xe=40,Ae=!1,Te=!1;break}case"fleetSide":{const te=Sn.fleet.lineup,ye=te.find(eh=>eh.kind==="semi")||te[Math.floor(te.length/2)],Se=te.find(eh=>eh.kind==="cybertruck")||ye,Be=te[te.length-1],ke=-ye.s,In=-Se.s,Yn=t.aspect,ei=b.z-ke,Kn=hn((15-ei)/6),ci=hn((-ei-3)/4),ss=In+Se.width/2+.35,ni=ke-ye.width/2-.35,ki=-Be.s+Be.width/2+.35,Hs=-Be.s-Be.width/2-.35,Hi=b.z+(ss+(ki-ss)*ci-b.z)*Kn,Ti=b.z+(ni+(Hs-ni)*ci-b.z)*Kn,hi=2.3,ws=Dt?.84:.8,Ma=Dt?.84:.47;let Qm=Math.max(2*hi/ws,(Hi-Ti)/Ma,2*(b.z+hi-Ti)/(ws+Ma),2*(Hi-b.z+hi)/(ws+Ma));const tg=Dt?11.5:15.5,eg=(Dt?15.5:16.5)-(Dt?.5:1.5)*ci,ng=o._m1T!=null&&o.t-o._m1T>-.05&&o.t-o._m1T<1.85,kf=Dt?-.46:-.48,Hf=Dt?.6:ng?.28:.7,Gf=Dt?-.62:-1,Vf=b.y+1.8,ig=2*Yn*Math.max(Vf/(Hf-Gf),((ye.height||3.85)+.4)/(.85-kf)),Wf=Math.max(tg,Math.min(eg,Qm),ig);g.fj||(g.fj={W:Wf,c:0,init:!1}),g.fj.W+=(Wf-g.fj.W)*di(9,S);const Ir=g.fj.W;let po=b.z+hi-ws*Ir/2,mo=b.z-hi+ws*Ir/2,ba=Hi-Ma*Ir/2,wa=Ti+Ma*Ir/2;ba>wa&&(ba=wa=(ba+wa)/2);const Xf=Math.max(po,ba),qf=Math.min(mo,wa);Xf<=qf?(po=Xf,mo=qf):wa<po?mo=po:ba>mo&&(po=mo);const sg=ke+(-Be.s-ke)*ci,Yf=be(b.z+((sg+b.z)/2-b.z)*Kn,po,mo);g.fj.init||(g.fj.c=Yf,g.fj.init=!0),g.fj.c+=(Yf-g.fj.c)*di(14,S);const th=be(Ir*(Dt?2.44:1.78),22,28.5);H.set(th,1.4,g.fj.c);const Kf=Ir/(2*th*Yn);Wt=2*Math.atan(Kf)*180/Math.PI-$*2;const rg=Ir/(2*Yn),og=Math.max(Gf,Math.min(kf,Hf-Vf/rg)),$f=Math.atan2(-H.y,th)-Math.atan(og*Kf);ht.set(H.x-Math.cos($f)*20,H.y+Math.sin($f)*20,H.z),fe=200,xe=200,Ae=!1,Te=!1;break}case"landHero":{g.hz||(g.hz={z:o.mode==="jump"?-ha(Pn.fleetLand):b.z,x:o.mode==="jump"?0:b.x}),H.set(g.hz.x+yr.dx,yr.h,$l(g.hz.z+yr.dz,b.z+yr.dz,1)),Ie(H,ut.set(b.x,Math.max(.6,b.y+.45),b.z),Dt?0:-.1,-.12,Wt,ht),Wt=Dt?60:44,fe=40,xe=24,Ae=!1;break}case"hopLand":{if(!g.hz){const ws=o.hop?o.hop.hp:o.landT>Pn.finale?Cr:zi;Qs(ws.sLand,ve),g.hz={x:ve.pos.x,z:ve.pos.z,fx:O,fz:it}}const te=g.hz,ye=-te.fz,Se=te.fx,Be=Math.max(0,(b.x-te.x)*te.fx+(b.z-te.z)*te.fz),ke=Math.max(0,b.y),In=(Dt?10.5:9)+.7*ke,Yn=Dt?.62:.55,ei=Dt?.78:.83,Kn=te.x+te.fx*Be,ci=te.z+te.fz*Be;H.set(Kn+(ye*Yn+te.fx*ei)*In,.75,ci+(Se*Yn+te.fz*ei)*In);const ss=Math.max(2,Math.hypot(Kn-H.x,ci-H.z)),ni=Math.max(2,Math.hypot(b.x-H.x,b.z-H.z)),ki=Math.min(Math.atan2(-.75,ss),Math.atan2(-.75,ni))-.03,Hi=Math.atan2(ke+1.6-.75,ni)-ki;Wt=Math.max(Dt?54:34,Hi*180/Math.PI*(Dt?1.5:1.4));const Ti=ki+Hi*.5+.02,hi=Math.atan2(b.x*.7+Kn*.3-H.x,-(b.z*.7+ci*.3-H.z));ht.set(H.x+Math.sin(hi)*Math.cos(Ti)*20,H.y+Math.sin(Ti)*20,H.z-Math.cos(hi)*Math.cos(Ti)*20),fe=30,xe=30,Ae=!1,Te=!1;break}case"flipReveal":{const te=hn((ee-48)/12),ye=(Dt?11:9)-2*te,Se=3.4-1.2*te;H.set(vt(Dt?1.2:1.6,ye),Se,Pt(Dt?1.2:1.6,ye)),Wt=Dt?58:46,ut.set(0,Zt.height*.45,Zt.zFoot-Ec*.5);const Be=Math.max(30,H.z-ut.z);Ie(H,wn.set(b.x,b.y+.5,b.z),0,Dt?-.52:-.45,Wt,ht),ht.y+=Math.min(6,400/Be)*0,fe=12,xe=10,Ae=!0,Te=!0;break}case"climbChase":{Qs(Math.max(Zt.s0-30,o.s-8.5),Kt),H.copy(Kt.pos).addScaledVector(Kt.up,1.9+j),Kt.pos.z>-Zt.s0?H.x=b.x:H.x+=Yo,At.copy(Kt.up).add(o.up).normalize(),Le=!1,ut.copy(b).addScaledVector(o.up,j),Xn(H,ut,At,-.12,Wt+4,ht),Wt+=4,fe=26,xe=30,Te=!1;break}case"flipLip":{H.set(Zt.xLand*.75+4,Zt.height+3.5,Zt.zLip+9),Ie(H,ut.set(b.x,b.y,b.z),0,0,Wt,ht),Wt=Dt?60:48,fe=3,xe=14,Ae=!1,Te=!1;break}case"flipOrbit":{const te=be((o.t-or+.05)/(ca-or+.05),0,1),ye=hn(te);Wt=Dt?46:23;const Se=17.2,Be=1.08+.12*ye,ke=.22-.28*ye,In=Se*Math.cos(Be);H.set(b.x+Math.cos(ke)*In,b.y-Se*Math.sin(Be),b.z+Math.sin(ke)*In),ht.set(b.x,b.y-.2,b.z-.7),fe=60,xe=60,Ae=!0,Te=!1;break}case"flipDescent":{const te=Zt.xTouch??Zt.xLand,ye=Zt.zLand,Se=o.mode==="flipAir"?Math.max(0,b.y):0,Be=hn((Se-4)/24);H.set(te+(Dt?17:15),1.5+2.5*Be,Math.max(ye+(Dt?22:19),b.z+12));const ke=o.mode==="flipAir"?b.z:b.z+0,In=b.x,Yn=Math.max(4,Math.hypot(In-H.x,ke-H.z)),ei=Math.max(4,Math.hypot(te-H.x,ye-H.z)),Kn=Math.atan2(-H.y,ei)-.04,ci=Math.atan2(Se+1.8-H.y,Yn),ss=ci-Kn;Wt=be(ss*180/Math.PI*(Dt?1.35:1.3),Dt?52:36,Dt?80:62);const ni=Math.tan(Wt*Math.PI/360),ki=be(Kn+ss*.5,Kn+Math.atan(.7*ni),ci-Math.atan(.55*ni)),Hs=Math.atan2(In-1.5-H.x,-(ke-4-H.z));ht.set(H.x+Math.sin(Hs)*Math.cos(ki)*20,H.y+Math.sin(ki)*20,H.z-Math.cos(Hs)*Math.cos(ki)*20),Oi(H,ht,b,Wt,.72,.62,.6),fe=o.mode==="flipAir"?6:9,xe=o.mode==="flipAir"?14:12,Ae=!1,Te=!1;break}case"flipClimb":{H.set(Dt?17:19,4.5,Zt.zFoot+(Dt?34:28)),Wt=Dt?58:46,ut.set(0,Zt.height*.5,Zt.zFoot-Ec*.6),ut.lerp(wn.set(b.x,b.y+.6,b.z),.3),Ie(H,ut,Dt?0:.08,0,Wt,ht),fe=30,xe=6,Ae=!1,Te=!1;break}case"flipSide":{const te=-Zt.s0-Mm*.62,ye=Dt?38:31;H.set(Zt.xLand+ye,7.5,te+2);const Se=o.mode==="drive"?.08:.12;ut.set(b.x*Se+2*(1-Se),Math.max(1.5,b.y)*Se+Zt.height*.55*(1-Se),b.z*Se+te*(1-Se)),Ie(H,ut,0,0,Wt,ht),Wt=Dt?54:42,fe=3,xe=8,Ae=!1,Te=!1;break}case"flipHero":{const te=Zt.xTouch??Zt.xLand;H.set(te+yr.dx,yr.h,$l(Zt.zLand+yr.dz,b.z+yr.dz,1)),Wt=Dt?60:44,Ie(H,ut.set(b.x,Math.max(.6,b.y+.45),b.z),Dt?0:-.1,-.1,Wt,ht),fe=40,xe=16,Ae=!1;break}case"megaLaunch":{H.set(b.x+(Dt?18:15),3+g.carYs*.55,b.z-4),Ie(H,ut.set(b.x,g.carYs+.5,b.z),0,0,Wt,ht),Wt=Dt?60:48,fe=8,xe=16,Te=!1;break}case"megaChase":{let te=null;for(const ei of z)if(o.s<ei.s+ei.depth/2+2){te=ei;break}const ye=te?be(te.s-o.s,-4,40):20;g.mz||(g.mz={o:ye}),g.mz.o+=(ye-g.mz.o)*di(ye>g.mz.o+8?3:10,S);const Se=Dt?17:15.5,Be=Dt?9.5:8;H.set(vt(Se,Be),1.8,Pt(Se,Be));const ke=Math.max(b.y,g.carYs),In=Dt?.38:.34,Yn=.28;ut.set(vt(1,-g.mz.o*Yn),ke*(1-In)+1.2*In,Pt(1,-g.mz.o*Yn)),Wt=Dt?62:50;{const ei=Math.tan((Wt+$*2+1.5)*Math.PI/360),Kn=Math.hypot(ut.x-H.x,ut.z-H.z),ci=Math.max(1,Math.hypot(b.x-H.x,b.z-H.z)),ss=Math.atan2(ut.y-H.y,Kn),ki=Math.atan2(Math.max(b.y,ke)+1.3-H.y,ci)-Math.atan((Dt?.62:.58)*ei);ki>ss&&(ut.y=H.y+Math.tan(ki)*Kn);const Hs=Math.atan2(ut.x-H.x,-(ut.z-H.z)),Hi=Math.atan2(b.x-H.x,-(b.z-H.z));let Ti=Hi-Hs;Ti-=fs*Math.round(Ti/fs);const hi=Math.atan((Dt?.56:.62)*ei*t.aspect);if(Math.abs(Ti)>hi){const ws=Hi-Math.sign(Ti)*hi;ut.x=H.x+Math.sin(ws)*Kn,ut.z=H.z-Math.cos(ws)*Kn}}ht.copy(ut),qe+=ne*1,fe=40,xe=30,Ae=!1,Te=!1;break}case"megaWide":{const te=z[z.length-1],ye=te.vehicles.find(ke=>ke.kind==="semi")||te.vehicles[Math.floor(te.vehicles.length/2)];Qs(ye.s,ve);const Se=ve.pos.z,Be=ve.pos.x;Wt=Dt?56:40,H.set(Be-(Dt?23:21),2.6,Se-1),Ie(H,ut.set(Be,5.6,Se),0,Dt?-.12:-.15,Wt,ht),Oi(H,ht,b,Wt,.72,.66,.6),fe=3,xe=5,Ae=!1,Te=!1;break}case"megaLand":{g.hz||(g.hz={z:b.z-16,x:b.x}),H.set(g.hz.x+4.2,.7,$l(g.hz.z,b.z-8.5,1)),Ie(H,ut.set(b.x,Math.max(.6,b.y*.75+.5),b.z),Dt?0:-.1,-.1,Wt,ht),Wt=Dt?62:46,fe=40,xe=20,Ae=!1;break}case"finish":{const te=hn((ee-128)/8),ye=.15+.6*te+.25*(1-Math.exp(-Math.max(0,ee-136)/14)),Se=It.D+((Dt?9:7.6)-It.D)*te,Be=g.carYs;H.set(vt(-Math.sin(ye)*Se,Math.cos(ye)*Se),Be+It.H+j-(It.H-.75)*te,Pt(-Math.sin(ye)*Se,Math.cos(ye)*Se)),Wt=It.fov+((Dt?60:46)-It.fov)*te;const ke=tn+((Dt?-.6:-.5)-tn)*hn((ee-134.5)/3);Xn(H,ut.set(b.x,b.y+j,b.z),he,ke,Wt,ht),fe=10,xe=16;break}case"chase":default:{let te=(It.D+ie)*(1-.2*Bt),ye=It.H-.32*Bt;if(o.section==="build"){const Be=hn((ee-88)/8);te*=1+.18*Be,ye+=.5*Be}const Se=o.airborne?g.carYs:b.y;H.set(vt(0,te)-o.xOff*.45,Se+ye+j,Pt(0,te)),ut.set(b.x-o.xOff*.3,Se+j,b.z),At.set(0,1,0),H.y-=_e*.25,Xn(H,ut,At,tn,Wt+$*6,ht),fe=12,xe=18;break}}Le&&At.set(0,1,0),T||!g.initialized||Ae!==g.rel?(g.rel=Ae,g.off.copy(H).sub(b),g.lookOff.copy(ht).sub(b),g.pos.copy(H),g.look.copy(ht),g.up.copy(At),g.initialized=!0):Ae?(g.off.lerp(H.sub(b),di(fe,S)),g.lookOff.lerp(ht.sub(b),di(xe,S)),g.pos.copy(b).add(g.off),g.look.copy(b).add(g.lookOff),g.up.lerp(At,di(Le?6:30,S)).normalize()):(g.pos.lerp(H,di(fe,S)),g.look.lerp(ht,di(xe,S)),g.up.lerp(At,di(Le?6:30,S)).normalize()),x!=="climbChase"&&(g.pos.y=Math.max(g.pos.y,.35)),g.shake*=Math.exp(-S*4.5),g.punch*=Math.exp(-S*3.2);const Oe=Te?.015+$*.04:0,vn=g.shake*.2,de=o.t*23;if(t.position.copy(g.pos),t.position.x+=ls(de)*vn+ls(o.t*7.3+5)*Oe*.6,t.position.y+=ls(de+17.3)*vn*.8+ls(o.t*9.1+11)*Oe+ls(o.t*37+2)*Oe*.35,Te){const te=.022*Bt;t.position.y+=ls(o.t*71+5)*te,t.position.x+=ls(o.t*63+9)*te*.7}if(o.shiftPerfect&&ae>=0&&ae<2/60){const te=ae<.016666666666666666?1:-.6;t.position.y+=.09*te,t.position.x+=.05*te}t.up.copy(g.up),Re.lookAt(t.position,g.look,t.up),t.quaternion.setFromRotationMatrix(Re);const Dn=ls(de*.5+40)*g.shake*.03+ls(o.t*3.1+21)*Oe*.08+le*.02*(o.gear%2?1:-1);Dn&&t.rotateZ(Dn),x==="megaChase"&&t.rotateZ(be(o.vy/24,-1,1)*.03);const ti=x==="chase"?18*Bt:$*2,Ee=Wt+ti+g.punch*.6+(x==="chase"?12*an:0);if(g.fov=T||!g.fovInit?Ee:g.fov+(Ee-g.fov)*di(9,S),g.fovInit=!0,t.fov=g.fov+qe,g.blend){const te=g.blend,ye=(o.t-te.t0)/te.dur;if(ye>=1||ye<0)g.blend=null;else{const Se=hn(ye);is.copy(b).add(te.off),t.position.lerpVectors(is,t.position,Se),t.position.y<.35&&x!=="climbChase"&&(t.position.y=.35),Qe.copy(b).add(te.lookOff).lerp(g.look,Se),Bi.copy(te.up).lerp(g.up,Se),Bi.lengthSq()<1e-4&&Bi.copy(g.up),t.up.copy(Bi.normalize()),Re.lookAt(t.position,Qe,t.up),t.quaternion.setFromRotationMatrix(Re),t.fov=te.fov+(t.fov-te.fov)*Se}}t.updateProjectionMatrix(),o.beat>=8&&x!=="launchTop"&&(t.updateMatrixWorld(),qn.copy(o.pos).addScaledVector(o.up,.55).project(t),(qn.z>1||Math.abs(qn.x)>.86||Math.abs(qn.y)>.86)&&(Qe.set(0,0,-20).applyQuaternion(t.quaternion).add(t.position),Oi(t.position,Qe,o.pos,t.fov,.8,.8,.55),Re.lookAt(t.position,Qe,t.up),t.quaternion.setFromRotationMatrix(Re))),o.cam.shot=x,o.cam.cut=T,o.cam.fov=t.fov,o.cam.shake=g.shake,o.cam.punch=g.punch+qe,o.cam.roll=Math.atan2(g.up.x,g.up.y);{t.updateMatrixWorld(),qn.copy(o.pos).addScaledVector(o.up,.55).project(t);const ye=2.4/(Math.max(.5,t.position.distanceTo(o.pos))*Math.tan(t.fov*Math.PI/360));o.cam.car={x:qn.x,y:qn.y,r:Math.min(2,ye),on:qn.z<1&&Math.abs(qn.x)<1.3&&Math.abs(qn.y)<1.3}}if(!h.muted&&s)try{s.setSpeed&&s.setSpeed($)}catch{}}let ot=0;return h.reset=()=>{h.state=o=Ed(),re.length=0;for(const S of z)delete S._hit;if(y(),ot=0,Tt(1/60),e&&typeof e.reset=="function")try{e.reset()}catch{}},h.update=(S,x)=>{S>0||(S=1/60),x===void 0&&(x=ot+S);const T=x-ot;if(T<=0)return X(1/600),at(1/600),o;const b=Math.min(240,Math.max(1,Math.ceil(T/(1/120)))),$=T/b;for(let O=1;O<=b;O++)wt($,ot+$*O),X($);ot=x,at(T);try{i&&typeof i.setGameplayState=="function"&&i.setGameplayState(o)}catch(O){console.warn("[gameplay] world hook",O)}return o},h.seekTo=(S,x=1/60)=>{const T=h.muted;h.reset();for(let b=x;b<S+1e-9;b+=x)h.muted=T||b<S-1.5,h.update(x,Math.min(b,S));return ot<S&&h.update(S-ot,S),h.muted=T,o},h.trackFrame=Qs,h.COURSE=Sn,h.MOMENTS=Pn,h.reset(),h}const FM={flipLaunchState:Cf,flipAirStep:Rf,flipBotThrust:Rc,bulletScaleAt:Pf,S_DT:_i,FLIP:Zt},zM=Object.freeze(Object.defineProperty({__proto__:null,BEAT:Bs,COURSE:Sn,FLEET_DIMS:ua,G:li,MOMENTS:Pn,MPH:cl,SECTIONS:mm,WINDOWS:si,_flipSim:FM,beatToTime:On,createGameplay:$u,default:$u,groundY:Cm,laneX:IM,sNom:ha,sectionAt:gm,timeToBeat:Js,trackFrame:Qs},Symbol.toStringTag,{value:"Module"})),NM=["semi","cybertruck","models","model3","modelx","modely"],Zn=0,Pc=1,ps=2,un=3,OM=4,Pd=5,nr=6,Li=7,BM=8,kM=9,ul=10,ju=11,pc=12,fl=13,Pm=14,Is=15,jl=16,Ho=17,Zu=18,Zl=19,HM=20,Wa=21,GM=[[8421504,.3,.45,1,1],[263431,.08,0,0,.55],[723724,.3,.1,.6,.8],[1118740,.85,0,0,.35],[723724,.95,0,0,.12],[986897,.9,0,0,.18],[13817305,.26,.7,0,1],[3422012,.34,.75,.4,1],[7829371,.45,1,0,1],[11736091,.32,.1,.8,1],[15264492,.1,1,0,1],[7238264,.36,.85,0,1],[1118999,.08,.3,1,1],[460552,.95,0,0,.1],[14474456,.5,0,.3,1],[131587,.95,0,0,.05],[131844,.04,0,0,.42],[8421504,.3,.45,1,1],[8421504,.3,.45,1,1],[2829876,.75,0,0,.3],[4869715,.5,.25,0,.3]],VM=n=>(n+.5)/Wa,Ds={pearl:[14606300,.04,.26],black:[723982,.35,.3],deepblue:[3102886,.5,.26],red:[12063775,.3,.26],stealth:[5922147,.45,.28],quicksilver:[11712187,.62,.24],white:[14541027,.02,.32],gold:[11771772,.55,.3],graphite:[2369066,.45,.32],semi:[11843772,0,.25]},Lm={semi:["semi"],cybertruck:["pearl"],models:["red","pearl","quicksilver","deepblue"],model3:["pearl","deepblue","quicksilver","red"],modelx:["quicksilver","pearl","deepblue","red"],modely:["pearl","red","quicksilver","gold","deepblue"]},Ld={},Lr={model3:{L:4.72,W:1.85,H:1.44,R:.34,axles:[-1.43,1.44],tyreW:.235,rimRatio:.7,top:[[0,.47],[.025,.55],[.07,.615],[.14,.665],[.26,.715],[.45,.755],[.7,.795],[.93,.83],[1.2,.872],[1.32,.89],[1.5,1.03],[1.75,1.23],[2,1.375],[2.25,1.432],[2.5,1.44],[2.8,1.42],[3.1,1.33],[3.4,1.19],[3.62,1.085],[3.75,1.05],[4.1,1.03],[4.42,1.02],[4.56,1.005],[4.64,.95],[4.69,.85],[4.72,.64]],belt:[[0,.47],[.025,.545],[.07,.6],[.14,.64],[.3,.69],[.6,.745],[.93,.8],[1.3,.85],[2,.9],[3,.94],[3.6,.958],[4.2,.965],[4.56,.955],[4.64,.91],[4.69,.82],[4.72,.63]],rock:[[0,.29],[.06,.24],[.25,.18],[.6,.16],[1.4,.145],[3.4,.145],[4,.165],[4.5,.24],[4.72,.38]],nose:[.56,.8],tail:[.74,.55],n:3.1,lean:.22,tuckB:.07,tuckT:.075,bulge:.05,tm:.5,shoulderExp:1.7,glassTop:[[1.32,3.62]],glassSide:[[1.48,3.36]],pillars:[[2.3,2.4]],gaps:[[1.47,"b"],[2.35,"b"],[3.37,"b"],[1.3,"t"],[3.72,"t"]],zones:[[4.69,4.72,"KB",ps]],band:Zn,beltCell:ps,mirrorD:1.56,plateY:.5,intake:[.36,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.668,.642],y1:[.684,.666],lens:.006,gain:3},{e:"rear",x:[.42,.975],y0:[.896,.892],y1:[.93,.93],lens:.02,gain:1.3,wrap:.15},{e:"rear",x:[.6,.975],y0:[.838,.834],y1:[.864,.862],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.836,.834],y1:[.928,.93],gain:1.3}],wheel:{n:5,sw:.05,cell:Li,cover:!0,accent:nr,caliper:Li}},models:{L:4.97,W:1.96,H:1.44,R:.36,axles:[-1.5,1.46],tyreW:.245,rimRatio:.7,top:[[0,.49],[.025,.57],[.08,.635],[.16,.68],[.3,.725],[.55,.77],[.8,.805],[.985,.83],[1.2,.862],[1.45,.885],[1.65,1],[1.95,1.2],[2.25,1.35],[2.6,1.408],[3,1.415],[3.35,1.39],[3.7,1.305],[4.02,1.165],[4.32,1.04],[4.7,.975],[4.86,.96],[4.93,.87],[4.97,.64]],belt:[[0,.49],[.025,.565],[.08,.62],[.16,.655],[.35,.705],[.65,.76],[.985,.81],[1.45,.855],[2.2,.9],[3.2,.93],[4,.95],[4.6,.95],[4.86,.94],[4.93,.86],[4.97,.63]],rock:[[0,.3],[.06,.25],[.25,.2],[.6,.17],[1.5,.15],[3.6,.15],[4.2,.175],[4.75,.25],[4.97,.4]],nose:[.56,.85],tail:[.76,.6],n:3,lean:.2,tuckB:.07,tuckT:.065,bulge:.042,tm:.52,shoulderExp:1.8,glassTop:[[1.45,4.3]],glassSide:[[1.62,3.82]],pillars:[[2.52,2.62],[3.5,3.58]],aftCell:Zn,cpillar:1,gaps:[[1.62,"b"],[2.57,"b"],[3.57,"b"],[1.43,"t"],[4.32,"t"]],zones:[[4.93,4.97,"KB",ps]],band:Zn,beltCell:ul,mirrorD:1.72,plateY:.51,intake:[.38,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.675,.645],y1:[.695,.69],lens:.006,gain:3},{e:"rear",x:[.4,.975],y0:[.885,.876],y1:[.918,.914],lens:.014,gain:1.3,wrap:.15},{e:"rear",x:[.62,.975],y0:[.83,.824],y1:[.854,.85],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.826,.824],y1:[.914,.914],gain:1.3}],wheel:{n:5,pair:.17,sw:.036,cell:nr,accent:Li,caliper:kM}},modelx:{L:5.06,W:2,H:1.68,R:.38,axles:[-1.5,1.5],tyreW:.265,rimRatio:.66,top:[[0,.53],[.025,.62],[.08,.69],[.18,.75],[.35,.805],[.6,.86],[.85,.915],[1.05,.953],[1.15,.97],[1.4,1.18],[1.7,1.42],[2,1.58],[2.4,1.665],[2.85,1.68],[3.3,1.668],[3.7,1.62],[4.05,1.535],[4.35,1.43],[4.6,1.32],[4.8,1.22],[4.93,1.155],[4.99,1.14],[5.03,1],[5.06,.7]],belt:[[0,.53],[.025,.615],[.08,.675],[.18,.725],[.4,.785],[.75,.86],[1.15,.94],[2,1],[3.2,1.02],[4.2,1.03],[4.8,1.03],[4.97,1.02],[5.03,.9],[5.06,.67]],rock:[[0,.35],[.06,.3],[.3,.24],[.7,.22],[1.6,.21],[3.5,.21],[4.4,.235],[4.85,.31],[5.06,.44]],nose:[.58,.85],tail:[.76,.55],n:3.2,lean:.22,tuckB:.07,tuckT:.065,bulge:.042,tm:.5,shoulderExp:1.8,glassTop:[[1.15,2.8],[4.24,4.92]],glassSide:[[1.32,4.32]],pillars:[[2.25,2.33],[3.55,3.63]],gaps:[[1.33,"b"],[2.29,"b"],[3.59,"bt"],[1.13,"t"],[2.82,"t"],[4.22,"t"]],falcon:[2.82,4.22,.19],zones:[[5.02,5.06,"KB",ps]],band:Zn,beltCell:ul,mirrorD:1.45,plateY:.55,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.715,.695],y1:[.738,.74],lens:.006,gain:3},{e:"rear",x:[.36,.975],y0:[.94,.925],y1:[.982,.99],lens:.012,gain:1.3,wrap:.14},{e:"rear",x:[0,.36],y0:[.962,.958],y1:[.972,.97],gain:1.1}],wheel:{n:6,pair:.12,sw:.028,cell:nr,caliper:Li}},modely:{L:4.75,W:1.92,H:1.62,R:.37,axles:[-1.45,1.44],tyreW:.255,rimRatio:.68,top:[[0,.51],[.025,.6],[.07,.665],[.15,.715],[.3,.76],[.55,.805],[.75,.835],[.925,.862],[1.2,.905],[1.3,.92],[1.5,1.08],[1.8,1.34],[2.1,1.54],[2.4,1.608],[2.7,1.62],[3.05,1.615],[3.4,1.585],[3.78,1.51],[4.1,1.385],[4.38,1.23],[4.55,1.12],[4.65,1.03],[4.71,.88],[4.75,.66]],belt:[[0,.51],[.025,.595],[.07,.65],[.15,.69],[.35,.74],[.65,.79],[.925,.835],[1.3,.9],[2.2,.96],[3.3,1],[4.2,1.03],[4.55,1.03],[4.65,.98],[4.71,.85],[4.75,.65]],rock:[[0,.34],[.06,.28],[.3,.225],[.6,.21],[1.4,.2],[3.3,.2],[4,.22],[4.5,.29],[4.75,.42]],nose:[.5,.92],tail:[.64,.64],n:3.4,lean:.24,tuckB:.08,tuckT:.085,bulge:.052,tm:.46,shoulderExp:1.6,glassTop:[[1.3,4.3]],glassSide:[[1.46,3.74]],pillars:[[2.32,2.42]],aftCell:Zn,gaps:[[1.45,"b"],[2.37,"b"],[3.75,"b"],[1.28,"t"],[4.32,"t"]],zones:[[4.71,4.75,"KB",ps]],band:Zn,beltCell:ps,mirrorD:1.52,plateY:.535,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[0,.93],y0:[.716,.704],y1:[.737,.73],lens:.01,gain:2.6},{e:"front",head:!0,x:[.55,.84],y0:[.64,.635],y1:[.656,.67],lens:.012},{e:"rear",x:[0,.975],y0:[.955,.948],y1:[.988,.982],lens:.01,gain:1.3,wrap:.14},{e:"rear",x:[.55,.96],y0:[.9,.885],y1:[.932,.936],lens:.012,gain:1.3}],wheel:{n:5,pair:.2,sw:.034,cell:Li,accent:nr,caliper:Li}},cybertruck:{L:5.68,W:2.2,H:1.79,R:.44,axles:[-1.84,1.84],tyreW:.305,rimRatio:.58,linear:!0,flat:!0,ct:!0,top:[[0,1.165],[.03,1.175],[2.75,1.79],[5.64,1.25],[5.68,1.24]],belt:[[0,1.165],[5.68,1.165]],rock:[[0,.54],[.24,.38],[5.42,.38],[5.68,.54]],nose:[.9,.22],tail:[.95,.12],tumble:.9,tuckB:.07,tuckT:0,shoulder:.012,bulge:0,inset:.05,arch:{top:1,a0:.37,a1:.66},glassTop:[[1.45,3.72]],glassSide:[[1.6,3.58]],pillars:[[2.62,2.72]],pillarCell:ps,gaps:[[1.6,"b"],[2.67,"b"],[3.6,"b"],[1.42,"t"],[.1,"t"]],zones:[[3.82,5.6,"R",un],[.112,1.408,"R",HM]],band:un,bandH:.06,body:ju,beltCell:ju,mirrorD:1.62,plateY:.8,lamps:[{e:"front",cap:!0,head:!0,y0:1.1,y1:1.158,inset:0,gain:3.5,wrap:.1},{e:"rear",cap:!0,y0:1.17,y1:1.228,inset:0,gain:1.5,wrap:.1}],wheel:{n:6,sw:.05,cell:nr,cover:!0,caliper:Li}},semi:{L:7.1,W:2.6,H:4.05,R:.52,axles:[-2.05,1.8,2.95],tyreW:.32,dualW:.6,rimRatio:.56,cabL:4.7,inset:.03,wheel:{semi:!0,caliper:Li}}};for(const n of NM){const t=Lr[n];t.L,t.W,t.H,t.R,t.axles.slice(),Ds[Lm[n][0]][0]}const Ji=(n,t,e)=>Math.max(t,Math.min(e,n)),Ge=(n,t,e)=>n+(t-n)*e,Dd=n=>Math.sqrt(1-(1-n)*(1-n));function eo(n,t){const e=n.length,i=n.map(l=>l[0]),s=n.map(l=>l[1]),r=[],a=new Array(e).fill(0);for(let l=0;l<e-1;l++)r[l]=(s[l+1]-s[l])/(i[l+1]-i[l]);if(!t&&e>2){a[0]=r[0],a[e-1]=r[e-2];for(let l=1;l<e-1;l++)a[l]=r[l-1]*r[l]<=0?0:(r[l-1]+r[l])/2;for(let l=0;l<e-1;l++){if(r[l]===0){a[l]=a[l+1]=0;continue}const c=a[l]/r[l],h=a[l+1]/r[l],o=c*c+h*h;if(o>9){const u=3/Math.sqrt(o);a[l]=u*c*r[l],a[l+1]=u*h*r[l]}}}return l=>{if(l<=i[0])return s[0];if(l>=i[e-1])return s[e-1];let c=0;for(;c<e-2&&l>i[c+1];)c++;const h=i[c+1]-i[c],o=(l-i[c])/h;if(t||e<=2)return Ge(s[c],s[c+1],o);const u=o*o,f=u*o;return(2*f-3*u+1)*s[c]+(f-2*u+o)*h*a[c]+(-2*f+3*u)*s[c+1]+(f-u)*h*a[c+1]}}const Nh=(n,t)=>{for(const e of n)if(t>=e[0]&&t<=e[1])return!0;return!1},$o=new D,Lc=new D,Dc=new D,As=new D;class xs{constructor(t=!1){this.p=[],this.n=[],this.uv=[],this.c=t?[]:null}vert(t,e,i,s){this.p.push(t[0],t[1],t[2]),this.n.push(e[0],e[1],e[2]),this.c?this.c.push(s[0],s[1],s[2]):this.uv.push(VM(i),.5)}tri(t,e,i,s,r,a){if($o.fromArray(t),Lc.fromArray(e).sub($o),Dc.fromArray(i).sub($o),As.crossVectors(Lc,Dc),As.lengthSq()<1e-14)return;if(r&&As.dot(Dm.fromArray(r))<0){const c=e;e=i,i=c,As.negate()}As.normalize();const l=[As.x,As.y,As.z];this.vert(t,l,s,a),this.vert(e,l,s,a),this.vert(i,l,s,a)}quad(t,e,i,s,r,a,l){this.tri(t,e,i,r,a,l),this.tri(t,i,s,r,a,l)}addRaw(t){const e=t.attributes.position.array,i=t.attributes.normal.array,s=t.attributes.uv.array;for(let r=0;r<e.length;r++)this.p.push(e[r]),this.n.push(i[r]);for(let r=0;r<s.length;r++)this.uv.push(s[r]);t.dispose()}addGeo(t,e,i,s){const r=t.index?t.toNonIndexed():t;i&&r.applyMatrix4(i);const a=r.attributes.position,l=r.attributes.normal;for(let c=0;c<a.count;c++)this.vert([a.getX(c),a.getY(c),a.getZ(c)],[l.getX(c),l.getY(c),l.getZ(c)],e,s);t.dispose(),r!==t&&r.dispose()}box(t,e,i,s,r,a,l,c=0,h=0,o=0,u){this.addGeo(new nn(t,e,i),l,zn(s,r,a,c,h,o),u)}mirroredX(){const t=new xs(!!this.c);for(let e=0;e<this.p.length/9;e++)for(const i of[0,2,1]){const s=e*3+i;t.p.push(-this.p[s*3],this.p[s*3+1],this.p[s*3+2]),t.n.push(-this.n[s*3],this.n[s*3+1],this.n[s*3+2]),this.c?t.c.push(this.c[s*3],this.c[s*3+1],this.c[s*3+2]):t.uv.push(this.uv[s*2],this.uv[s*2+1])}return t}append(t){const e=(i,s)=>{for(let r=0;r<s.length;r++)i.push(s[r])};return e(this.p,t.p),e(this.n,t.n),this.c?e(this.c,t.c):e(this.uv,t.uv),this}build(){const t=new $e;return t.setAttribute("position",new Me(this.p,3)),t.setAttribute("normal",new Me(this.n,3)),this.c?t.setAttribute("color",new Me(this.c,3)):t.setAttribute("uv",new Me(this.uv,2)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const Dm=new D;new Pe;const WM=new Jn,XM=new Ni;new D(1,1,1);const qM=new D;function zn(n,t,e,i=0,s=0,r=0,a=1,l=1,c=1){return new Pe().compose(qM.set(n,t,e),WM.setFromEuler(XM.set(i,s,r)),new D(a,l,c))}const Ic=5,Pi=6,Im=3,Uc=4,tl=5+Ic,pl=tl+Pi,Kc=pl+1,ya=[];ya.push("U","L","K","B");for(let n=0;n<Ic;n++)ya.push("S");ya.push("E");for(let n=0;n<Pi;n++)ya.push(n<Pi/2?"G":"R");function YM(n){const t=Lr[n],e=eo(t.top,t.linear),i=eo(t.belt,t.linear),s=eo(t.rock,t.linear),r=t.L,a=t.W/2,l=t.axles.map(R=>R+r/2),c=t.tyreW,h=t.R+(t.archPad??.035),o=t.R+.01,u=t.winTop?eo(t.winTop,!0):null,f=R=>{let U=-1/0;return l.forEach((P,_)=>{if(n==="semi"&&_>0)return;const N=Math.abs(R-P);t.arch?N<t.arch.a0?U=Math.max(U,t.arch.top):N<t.arch.a1&&(U=Math.max(U,t.arch.top-(N-t.arch.a0)/(t.arch.a1-t.arch.a0)*(t.arch.top-s(R)))):N<h&&(U=Math.max(U,o+Math.sqrt(h*h-N*N)))}),U},d=t.cabL??r,v=R=>{const U=Ge(t.nose[0],1,Dd(Ji(R/t.nose[1],0,1))),P=Ge(t.tail[0],1,Dd(Ji((d-R)/t.tail[1],0,1)));return Math.min(U,P)},g=R=>{let U=0;for(const P of l){const _=Math.abs(R-P)/(h+(t.bulgeLen??.42));_<1&&(U=Math.max(U,Math.pow(1-_*_,1.5)))}return U*(t.bulge||0)},m=R=>R<.15?Ge(.55,1,R/.15):R<.62?1:Ge(1,.15,(R-.62)/.38),p=a-c-.07-(t.inset||0);function M(R){const U=g(R),P=(t.bulge||0)*.5,_=(a-P)*v(R),N=e(R),W=Math.min(i(R),N),nt=s(R),mt=Math.min(nt+.025,W-.1);let Ct=Math.max(nt,f(R));Ct=Math.min(Ct,W-.06);const pt=Math.min(p,_-.08),Ut=Math.max(0,N-W),et=t.bandAbs?Math.min(Math.max(Ct+.04,nt+t.bandH),W-.035):Math.min(Ct+(t.bandH||.06),W-.035),Ot=t.tuckB,Jt=t.tuckT,oe=.42,ce=[[0,mt],[pt,mt],[pt,Math.max(mt,Ct)],[_-Ot+U*.5,Ct],[_-Ot*(t.ct?.88:.55)+U*.55,et]];for(let Y=1;Y<=Ic;Y++){const V=Y/Ic,bt=Ge(et,W-(t.ct?0:.012),V);let _t;if(t.ct)_t=Ge(_-Ot*.88,_,V);else{const Rt=t.tm??oe;_t=V<Rt?_-Ot*.55*Math.pow(1-V/Rt,2):_-Jt*Math.pow((V-Rt)/(1-Rt),t.shoulderExp??2),_t+=U*m(V)}ce.push([_t,bt])}const lt=_-Jt-(t.shoulder??.018)+U*.1;if(ce.push([lt,W]),t.ct){const Y=Math.max(lt-t.tumble*Ut,.2);for(let V=1;V<=Pi/2;V++){const bt=V/(Pi/2);ce.push([Ge(lt,Y,bt),Ge(W,N,bt)])}for(let V=1;V<=Pi/2;V++){const bt=V/(Pi/2);ce.push([Ge(Y,0,bt),N])}}else{const Y=2/t.n;let V=Math.PI/4;if(u&&Ut>1e-4){const bt=Ji((Math.min(u(R),W+.97*Ut)-W)/Ut,0,1);V=Ji(Math.asin(Math.pow(bt,t.n/2)),.06,Math.PI/2-.06)}for(let bt=1;bt<=Pi;bt++){const _t=bt<=Pi/2?bt/(Pi/2)*V:V+(bt-Pi/2)/(Pi/2)*(Math.PI/2-V),Rt=Math.pow(Math.cos(_t),Y),zt=Math.pow(Math.sin(_t),Y);ce.push([Math.max(0,(lt-t.lean*Ut*zt)*Rt),W+Ut*zt])}ce[pl][0]=0}if(t.taper){const Y=t.taper[0],V=t.H;for(const bt of ce)bt[0]*=1-t.taper[1]*Ji((bt[1]-Y)/(V-Y),0,1)}return ce}const w=[],y=n==="semi"?.1:.085;for(let R=0;R<=d+1e-6;R+=y)w.push(R);for(let R=0;R<=.24;R+=.03)w.push(R),w.push(d-R);w.push(d),l.forEach((R,U)=>{if(!(n==="semi"&&U>0))if(t.arch)for(const P of[0,t.arch.a0,t.arch.a1,(t.arch.a0+t.arch.a1)/2,t.arch.a0*.5])w.push(R-P,R+P);else{for(let P=0;P<=16;P++){const _=h*Math.cos(P/16*Math.PI);w.push(R+_)}w.push(R-h-.004,R+h+.004)}});for(const R of[...t.top,...t.belt,...t.rock])w.push(R[0]);for(const R of[...t.glassTop,...t.glassSide,...t.pillars])w.push(R[0],R[1]);for(const R of t.zones)w.push(R[0],R[1]);for(const R of t.gaps)w.push(R[0]-.006,R[0]+.006);const I=[...new Set(w.filter(R=>R>=0&&R<=d).map(R=>Math.round(R*2e3)/2e3))].sort((R,U)=>R-U).map(R=>({d:R,z:R-r/2,pts:M(R)}));return{s:t,L:r,hw:a,rings:I,dAx:l,top:e,belt:i,rock:s,cabL:d}}function Id(n,t,e){const i=ya[t];if(i==="U"||i==="L")return fl;for(const c of n.zones)if(e>=c[0]&&e<=c[1]&&c[2].includes(i))return c[4];for(const c of n.gaps)if(Math.abs(e-c[0])<.0062&&(c[1].includes("b")&&"KBSE".includes(i)||c[1].includes("t")&&"GR".includes(i)))return Is;const s=n.body??Zn,r=Nh(n.glassTop,e),a=Nh(n.glassSide,e),l=Nh(n.pillars,e);return i==="G"?a&&!l?Pc:r&&!a&&n.aftCell!=null&&e>n.glassSide[n.glassSide.length-1][1]?n.aftCell:r||a&&l?n.pillarCell??ps:s:i==="R"?r&&n.cpillar&&t<tl+Pi/2+n.cpillar&&e>n.glassSide[n.glassSide.length-1][1]?n.aftCell??s:r?Pc:s:i==="E"?a||r?n.beltCell??ps:s:i==="K"||i==="B"?n.band??s:s}const xn=2*Kc-2,Ju=n=>n<=pl?n:xn-n;function KM(n,t){const e=Ju(t),i=n.pts[e];return[t<=pl?i[0]:-i[0],i[1],n.z]}const $M={U:0,L:1,K:2,B:3,S:4,E:4,G:5,R:5};function jM(n){const{s:t,rings:e}=n,i=e.length,s=new Float32Array(i*xn*3);for(let M=0;M<i;M++)for(let w=0;w<xn;w++)s.set(KM(e[M],w),(M*xn+w)*3);const r=(M,w)=>[s[(M*xn+w)*3],s[(M*xn+w)*3+1],s[(M*xn+w)*3+2]],a=M=>Math.min(Ju(M),Ju((M+1)%xn)),l=(i-1)*xn,c=new Float32Array(l*3),h=new Int8Array(xn);for(let M=0;M<xn;M++)h[M]=$M[ya[a(M)]]??4;const o=new D,u=new D,f=new D;for(let M=0;M<i-1;M++)for(let w=0;w<xn;w++){const y=(w+1)%xn;o.fromArray(r(M+1,y)).sub(f.fromArray(r(M,w))),u.fromArray(r(M,y)).sub(f.fromArray(r(M+1,w))),o.cross(u),c.set([o.x,o.y,o.z],(M*xn+w)*3)}{const M=Math.floor(i/2),w=Uc+3;o.fromArray(r(M,w)),u.fromArray(r(M,(w+1)%xn)).sub(o),f.fromArray(r(M+1,(w+1)%xn)).sub(o);const y=new D().crossVectors(u,f),L=new D().fromArray(c,(M*xn+w)*3);if(y.dot(L)<0)for(let I=0;I<c.length;I++)c[I]=-c[I]}const d=Math.cos(vi.degToRad(t.crease??40)),v=new D,g=new D,m=new D,p=new xs;for(let M=0;M<i-1;M++){const w=(e[M].d+e[M+1].d)/2;for(let y=0;y<xn;y++){const L=(y+1)%xn,I=Id(t,a(y),w);v.fromArray(c,(M*xn+y)*3);const R=v.length();if(R<1e-10)continue;v.divideScalar(R);const U=(W,nt)=>{if(t.flat)return[v.x,v.y,v.z];m.set(0,0,0);for(const mt of[W-1,W])if(!(mt<0||mt>i-2))for(const Ct of[(nt-1+xn)%xn,nt]){if(h[Ct]!==h[y])continue;g.fromArray(c,(mt*xn+Ct)*3);const pt=g.length();pt<1e-10||g.dot(v)/pt<d||m.add(g)}return m.lengthSq()<1e-14&&m.copy(v),m.normalize(),[m.x,m.y,m.z]},P=[[M,y],[M,L],[M+1,L],[M+1,y]],_=P.map(W=>U(W[0],W[1])),N=P.map(W=>r(W[0],W[1]));for(const W of[[0,1,2],[0,2,3]])if(o.fromArray(N[W[0]]),u.fromArray(N[W[1]]).sub(o),f.fromArray(N[W[2]]).sub(o),!(u.cross(f).lengthSq()<1e-14))for(const nt of W)p.vert(N[nt],_[nt],I)}}for(const[M,w]of[[e[0],[0,0,-1]],[e[i-1],[0,0,1]]])for(let y=0;y<Kc-1;y++){const L=M.pts[y],I=M.pts[y+1];if(Math.abs(I[1]-L[1])<1e-5&&Math.abs(I[0]-L[0])<1e-5)continue;const R=Id(t,y,M.d);p.quad([-L[0],L[1],M.z],[L[0],L[1],M.z],[I[0],I[1],M.z],[-I[0],I[1],M.z],R===fl?un:R,w)}return p}function Qu(n,t){let e=-1/0;for(let i=Im;i<Kc-1;i++){const s=n.pts[i],r=n.pts[i+1],a=Math.min(s[0],r[0]),l=Math.max(s[0],r[0]);if(t<a-1e-6||t>l+1e-6)continue;const c=l-a<1e-6?1:(t-s[0])/(r[0]-s[0]);e=Math.max(e,Ge(s[1],r[1],Ji(c,0,1)))}return e}function no(n,t,e,i){const s=n.rings,r=s.length;let a=null;for(let l=0;l<r;l++){const c=s[i?r-1-l:l],h=Qu(c,t);if(h>=e){if(!a||a.h===-1/0)return[t,e,c.z];const o=(e-a.h)/(h-a.h);return[t,e,Ge(a.r.z,c.z,o)]}a={r:c,h}}return null}function Ud(n,t,e,i){const r=no(n,t+.01,e,i),a=no(n,Math.max(0,t-.01),e,i),l=no(n,t,e+.01,i),c=no(n,t,e-.01,i);if(!r||!a||!l||!c)return[0,0,i?1:-1];const h=new D(r[0]-a[0],r[1]-a[1],r[2]-a[2]),o=new D(l[0]-c[0],l[1]-c[1],l[2]-c[2]),u=h.cross(o).normalize();return u.z*(i?1:-1)<0&&u.negate(),[u.x,u.y,u.z]}function ar(n,t){for(let e=Im;e<Kc-1;e++){const i=n.pts[e],s=n.pts[e+1];if((t-i[1])*(t-s[1])<=0&&Math.abs(s[1]-i[1])>1e-6)return Ge(i[0],s[0],(t-i[1])/(s[1]-i[1]))}return n.pts[Uc+2][0]}function Um(n,t,e,i,s,r=0){const a=e.e==="rear",l=14,c=[];for(let o=0;o<=l;o++){const u=o/l,f=Ge(e.x[0],e.x[1],u)*t.hw,d=Ge(e.y0[0],e.y0[1],u)-r,v=Ge(e.y1[0],e.y1[1],u)+r,g=no(t,f,d,a),m=no(t,f,v,a);if(!g||!m)continue;const p=Ud(t,f,d,a),M=Ud(t,f,v,a);c.push([g.map((w,y)=>w+p[y]*s),m.map((w,y)=>w+M[y]*s),p])}const h=Array.isArray(i);for(let o=0;o<c.length-1;o++){const[u,f,d]=c[o],[v,g]=c[o+1];for(const m of[1,-1]){if(m<0&&e.x[0]<=.001&&o<0)continue;const p=w=>[w[0]*m,w[1],w[2]],M=[d[0]*m,d[1],d[2]];h?n.quad(p(u),p(v),p(g),p(f),0,M,i):n.quad(p(u),p(v),p(g),p(f),i,M)}}}function ZM(n,t,e){const{s:i,L:s,hw:r,rings:a}=t,l=a[0],c=a[a.length-1];for(const h of i.lamps)if(!h.skip)if(h.cap){const o=h.e==="rear"?c:l,u=h.e==="rear"?1:-1,f=h.x?h.x[1]:ar(o,(h.y0+h.y1)/2)-(h.inset||0),d=h.x?h.x[0]:-f,v=h.y1-h.y0+.03;if(h.x)for(const g of[1,-1])n.box(f-d+.04,v,.012,g*(d+f)/2,(h.y0+h.y1)/2,o.z+u*.004,pc);else n.box(2*f+.02,v,.012,0,(h.y0+h.y1)/2,o.z+u*.004,pc)}else h.lens&&Um(n,t,h,pc,.003,h.lens);if(e!=="semi"){const h=i.mirrorD,o=a.reduce((d,v)=>Math.abs(v.d-h)<Math.abs(d.d-h)?v:d),u=Math.min(t.belt(h),t.top(h)),f=o.pts[tl][0];for(const d of[1,-1]){const v=e==="cybertruck"?i.body:Zn;n.addGeo(new ra(1,12,8),v,zn(d*(f+.12),u+.09,o.z+.06,0,0,0,.06,.048,.1)),n.box(.12,.03,.06,d*(f+.05),u+.07,o.z+.06,ps),n.addGeo(new gs(1,12),Pc,zn(d*(f+.12),u+.09,o.z+.155,0,0,0,.052,.04,1))}}if(n.box(.31,.155,.012,0,i.plateY,c.z+.007,Pm),e==="models"||e==="model3"||e==="modelx"||e==="modely"){const h=no(t,0,t.top(.12)-.015,!1);h&&n.box(.07,.035,.01,0,h[1],h[2]-.002,ul,-.6);const o=l.z;if(e==="models"||e==="model3"){const u=i.intake[0],f=ar(l,u)*.62;n.box(2*f,.014,.01,0,u,o-.003,Is)}}if(i.falcon){const[h,o,u]=i.falcon;for(const f of[1,-1]){let d=null;for(const v of a){if(v.d<h||v.d>o)continue;const g=Qu(v,u)+.002;d&&n.quad([f*(u-.006),d.y,d.z],[f*(u+.006),d.y,d.z],[f*(u+.006),g,v.z],[f*(u-.006),g,v.z],Is,[0,1,0]),d={y:g,z:v.z}}}}if(e==="cybertruck"){for(let u=3.85;u<5.58;u+=.14){const f=t.top(u),d=a.reduce((v,g)=>Math.abs(g.d-u)<Math.abs(v.d-u)?g:v);n.box(d.pts[tl+Pi/2][0]*2-.04,.006,.012,0,f+.004,u-s/2,Is,Math.atan2(t.top(u+.01)-t.top(u-.01),.02)*-1)}for(const u of[1,-1]){let f=null;for(const d of a){if(d.d<3.82||d.d>5.62)continue;const v=d.pts[tl+Pi/2][0],g=d.pts[pl][1]+.012,m=[[u*(v-.05),g,d.z],[u*(v+.004),g,d.z]];f&&n.quad(f[0],f[1],m[1],m[0],ju,[0,1,0]),f=m}f=null;for(const d of a){if(d.d<.1||d.d>1.42)continue;const v=Qu(d,.8)+.002,g=[[u*.794,v,d.z],[u*.806,v,d.z]];f&&n.quad(f[0],f[1],g[1],g[0],Is,[0,1,0]),f=g}}n.box(2*ar(l,.8)+.004,.016,.012,0,.8,l.z-.003,Is),n.box(2.08,.24,.12,0,.54,l.z+.02,un),n.box(1.9,.08,.12,0,.5,c.z-.02,un)}}function Oh(n,t,e,i){$o.fromArray(t[0]),Lc.fromArray(t[1]).sub($o),Dc.fromArray(t[2]).sub($o),As.crossVectors(Lc,Dc);const s=[0,0,0];for(const a of e)for(let l=0;l<3;l++)s[l]+=a[l];const r=As.dot(Dm.fromArray(s))>=0?[[0,1,2],[0,2,3]]:[[0,2,1],[0,3,2]];for(const a of r)for(const l of a)n.vert(t[l],e[l],i)}function Fd(n,t,e,i,s,r,a,l,c){for(let o=0;o<12;o++){const u=Ge(a,l,o/12),f=Ge(a,l,(o+1)/12),d=(u+f)/2,v=(y,L)=>[t+y,e+s*Math.sin(L),i+s*Math.cos(L)],g=v(-r,u),m=v(r,u),p=v(r,f),M=v(-r,f),w=[0,Math.sin(d),Math.cos(d)];n.quad(g,m,p,M,c,w),n.quad(g,m,p,M,c,[0,-w[1],-w[2]])}}function JM(n,t,e,i,s,r,a,l=.007){const c=t.rings.filter(h=>(r?t.cabL-h.d:h.d)<=s+1e-6);r&&c.reverse();for(let h=0;h<c.length-1;h++){const o=c[h],u=c[h+1],f=ar(o,e)+l,d=ar(o,i)+l,v=ar(u,e)+l,g=ar(u,i)+l;for(const m of[1,-1])n.quad([m*f,e,o.z],[m*v,e,u.z],[m*g,i,u.z],[m*d,i,o.z],0,[m,0,0],a)}}function zd(n,t,e){const{s:i,rings:s,L:r,hw:a}=n,l=new xs(!0),c=[1,.98,.95],h=[1,-.06,0],o=[1,.42,.04],u=s[0],f=s[s.length-1];for(const d of i.lamps){if(d.skip||d.e==="rear"!==e)continue;const v=d.gain??1,g=(e?h:c).map(m=>m*v);if(d.cap){const m=e?f:u,p=e?1:-1;if(d.x)for(const M of[1,-1])l.box(d.x[1]-d.x[0],d.y1-d.y0,.012,M*(d.x[0]+d.x[1])/2,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g);else{const M=ar(m,(d.y0+d.y1)/2)-(d.inset||0);l.box(2*M,d.y1-d.y0,.012,0,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g)}}else Um(l,n,d,g,.007);if(d.wrap){const m=Array.isArray(d.y0)?d.y0[1]:d.y0,p=Array.isArray(d.y1)?d.y1[1]:d.y1;JM(l,n,m,p,d.wrap,e,g)}}if(!e&&t!=="semi"&&t!=="cybertruck"){const d=t==="models"?1.35:1.2,v=s.reduce((g,m)=>Math.abs(m.d-d)<Math.abs(g.d-d)?m:g);for(const g of[1,-1])l.box(.006,.02,.06,g*(v.pts[Uc+3][0]+.003),v.pts[Uc+3][1],v.z,0,0,0,0,o)}return e&&t==="cybertruck"&&l.box(2*ar(f,1.2)-.06,.008,.05,0,n.top(r-.03)+.004,f.z-.03,0,0,0,0,h.map(d=>d*1.5)),l}function Jl(n,t,e,i,s){const r=new qo(t.map(a=>new Xt(a[0],a[1])),i);n.addGeo(r,e,zn(s,0,0,0,0,-Math.PI/2))}function Bh(n,t,e,i,s){const r=i/2,a=28;Jl(n,[[t-.006,-r+.03],[t,-r+.055],[t,r-.055],[t-.006,r-.03]],OM,a,s),Jl(n,[[e-.005,-r+.02],[e+.02,-r+.002],[Ge(e,t,.55),-r-.004],[t-.03,-r+.008],[t-.006,-r+.03]],Pd,a,s),Jl(n,[[t-.006,r-.03],[t-.03,r-.008],[Ge(e,t,.55),r+.004],[e+.02,r-.002],[e-.005,r-.02]],Pd,a,s);for(const l of[-.22,.22])Jl(n,[[t+.0015,l*i-.006],[t+.0015,l*i+.006]],Is,a,s)}function QM(n){const t=Lr[n],e=t.wheel,i=t.R,s=i*t.rimRatio,r=new xs,a=new xs,l=(c,h,o)=>{const u=h/2,f=u-.028;if(o?(Bh(c,i,s,h/2-.015,h/4+.0075),Bh(c,i,s,h/2-.015,-h/4-.0075)):Bh(c,i,s,h,0),c.addGeo(new gs(s*.99,28),Li,zn(-u*.5,0,0,0,Math.PI/2,0)),c.addGeo(new _a(s*.9,s*1,32),e.semi?nr:e.cover?Li:nr,zn(f+.004,0,0,0,Math.PI/2,0)),e.semi){c.addGeo(new cn(s*.9,s*.9,.02,28),nr,zn(f-.05,0,0,0,0,Math.PI/2)),c.addGeo(new cn(s*.3,s*.36,.16,18),nr,zn(f+0,0,0,0,0,Math.PI/2)),c.addGeo(new cn(s*.17,s*.17,.04,14),Li,zn(f+.08,0,0,0,0,Math.PI/2));for(let M=0;M<10;M++){const w=M/10*Math.PI*2;c.box(.03,.026,.026,f-.025,Math.cos(w)*s*.45,Math.sin(w)*s*.45,ul)}for(let M=0;M<8;M++){const w=(M+.5)/8*Math.PI*2;c.addGeo(new gs(s*.11,10),fl,zn(f-.038,Math.cos(w)*s*.7,Math.sin(w)*s*.7,0,Math.PI/2,0))}return}c.addGeo(new cn(s*.78,s*.78,.028,26),BM,zn(f-.1,0,0,0,0,Math.PI/2));const d=.7;c.box(.07,s*.4,s*.24,f-.075,Math.cos(d)*s*.66,Math.sin(d)*s*.66,e.caliper??Li,-d),e.cover&&c.addGeo(new gs(s*.88,30),Li,zn(f-.016,0,0,0,Math.PI/2,0));const v=e.n,g=e.pair||0,m=s*.74,p=s*.2+m/2;for(let M=0;M<v;M++)for(const w of g?[-g,g]:[0]){const y=M/v*Math.PI*2+w;c.box(.03,m,e.sw,f-.01,Math.cos(y)*p,Math.sin(y)*p,e.cell,y),e.accent&&c.box(.032,m*.85,.008,f-.008,Math.cos(y)*(p+m*.05),Math.sin(y)*(p+m*.05),e.accent,y)}c.addGeo(new cn(s*.22,s*.24,.05,20),e.cover?Li:e.cell,zn(f-.005,0,0,0,0,Math.PI/2)),c.addGeo(new cn(s*.12,s*.12,.01,16),ps,zn(f+.022,0,0,0,0,Math.PI/2))};return l(r,t.tyreW,!1),n==="semi"&&l(a,t.dualW,!0),{front:r,drive:n==="semi"?a:r,R:i}}const mc=(()=>{const a=eo([[.27,.1],[.45,.025],[.8,0],[1.1,.03],[1.35,.12],[1.62,.36],[2.3,.88],[3,1.4],[3.3,1.66],[3.6,2],[3.82,2.38],[3.95,2.78],[4.02,3.1],[4.05,3.36]]),l=eo([[.27,1.27],[.55,1.3],[1.05,1.3],[1.5,1.265],[2.1,1.2],[2.9,1.13],[3.69,1.05]]),c=I=>I<=3.69?l(I):l(3.69)-.36+Math.sqrt(Math.max(0,.36*.36-(I-3.69)*(I-3.69))),h=eo([[.27,.25],[1.1,.32],[1.7,.5],[3,.62],[4.05,.45]]),o=I=>Math.min(h(I),c(I)-.06,3.8-.05-a(I)),u=1.5,f=.62,d=.52,v=1.25,g=I=>{const R=Math.abs(I-u);return R<f?d+Math.sqrt(f*f-R*R):.27},m=()=>1.88,p=()=>2.88,M=I=>a(I)+o(I)+.16;return{WB:1.88,H:4.05,CAB:3.8,YB:.27,dF:a,hw:c,rc:o,AX:u,AR:f,ACY:d,YK:v,archA:g,yWB:m,yWT:p,dP:M,DG1:3,YDT:2.9,yDB:(I,R)=>1.88+.04-.18*(1-Ji((I-M(R)-.1)/.95,0,1)**2)}})();function Fi(n,t){const e=mc.dF(n),i=mc.hw(n),s=mc.rc(n);if(t<=1)return[t*(i-s),n,e];if(t<=2){const r=(t-1)*Math.PI/2;return[i-s+s*Math.sin(r),n,e+s*(1-Math.cos(r))]}return[i,n,e+s+(t-2)]}function Zr(n,t){const i=Fi(n,t+.004),s=Fi(n,Math.max(0,t-.004)),r=Fi(n+.004,t),a=Fi(n-.004,t),l=new D(i[0]-s[0],i[1]-s[1],i[2]-s[2]),c=new D(r[0]-a[0],r[1]-a[1],r[2]-a[2]),h=l.cross(c).normalize(),o=Fi(n,t);return h.x*o[0]+h.y*(o[1]-1.8)+h.z*(o[2]-2.6)<0&&h.negate(),[h.x,h.y,h.z]}function kr(n,t,e,i,s,r,a,l,c=18){const h=Array.isArray(l),o=(u,f)=>{const d=Fi(u,f),v=Zr(u,f);return[d[0]+v[0]*a,d[1]+v[1]*a,d[2]+v[2]*a-t/2]};for(let u=0;u<c;u++){const f=Ge(s,r,u/c),d=Ge(s,r,(u+1)/c),g=Zr((e+i)/2,(f+d)/2);h?n.quad(o(e,f),o(e,d),o(i,d),o(i,f),0,g,l):n.quad(o(e,f),o(e,d),o(i,d),o(i,f),l,g)}}function tb(){const n=Lr.semi,t=n.L,e=mc,i=lt=>lt-t/2,s=[];{const Y=[0];let V=[e.YB,e.dF(e.YB),e.hw(e.YB)];for(let Rt=1;Rt<=2e3;Rt++){const zt=Ge(e.YB,e.H,Rt/2e3),Ht=[zt,e.dF(zt),e.hw(zt)];Y.push(Y[Rt-1]+Math.hypot(Ht[0]-V[0],Ht[1]-V[1],Ht[2]-V[2])),V=Ht}const bt=.085,_t=Y[2e3];for(let Rt=0,zt=0;Rt<=_t;Rt+=bt){for(;zt<2e3&&Y[zt]<Rt;)zt++;s.push(Ge(e.YB,e.H,zt/2e3))}s.push(e.YB,.34,.35,.36,.46,.48,.5,.92,.94,.95,.96,1.06,1.07,1.08,1.1,e.YK,.84,.86,.42,.44,1.8,1.82,1.84,1.86,1.88,1.9,1.92,1.94,1.96,2.82,2.84,2.86,2.88,2.9,2.92,2.94,2.96,3,3.04,3.06,3.08,3.09,3.12,e.H-.32,e.H-.004,e.H)}const r=[...new Set(s.filter(lt=>lt>=e.YB&&lt<=e.H).map(lt=>Math.round(lt*1e3)/1e3))].sort((lt,Y)=>lt-Y),a=[];for(let lt=0;lt<=e.CAB+1e-6;lt+=.11)a.push(lt);for(let lt=0;lt<=16;lt++)a.push(e.AX+e.AR*Math.cos(lt/16*Math.PI));a.push(e.AX-e.AR-.004,e.AX+e.AR+.004,3.095,3.105,e.DG1,e.DG1+.035,e.CAB-.16,e.CAB-.012,e.CAB);const l=[...new Set(a.filter(lt=>lt>=0&&lt<=e.CAB).map(lt=>Math.round(lt*2e3)/2e3))].sort((lt,Y)=>lt-Y),c=6,h=11,o=r.map(lt=>{const Y=[],V=e.dF(lt),bt=e.hw(lt),_t=e.rc(lt),Rt=V+_t;for(let zt=0;zt<=c;zt++){const Ht=Fi(lt,zt/c);Y.push([Ht[0],lt,Ht[2],zt/c,0])}for(let zt=1;zt<=h;zt++){const Ht=Fi(lt,1+zt/h);Y.push([Ht[0],lt,Ht[2],1+zt/h,1])}for(const zt of l){const Ht=Math.max(zt,Rt);Y.push([bt,lt,Ht,2+Ht-Rt,2])}if(lt<e.YK)for(const zt of Y){const Ht=Math.max(e.YB,e.archA(zt[2]));zt[4]===2&&Ht>e.YB&&(zt[1]=Ht+(lt-e.YB)/(e.YK-e.YB)*(e.YK-Ht))}return Y}),u=o.length,f=o[0].length,d=lt=>[lt[0],lt[1],i(lt[2])],v=(lt,Y)=>[lt[0]-Y[0],lt[1]-Y[1],lt[2]-Y[2]],g=(lt,Y)=>(lt[0]-Y[0])**2+(lt[1]-Y[1])**2+(lt[2]-Y[2])**2,m=(lt,Y,V,bt)=>{let _t=lt,Rt=Y;for(let zt=0;zt<40;zt++){const Ht=_t+V,re=Rt+bt;if(Ht<0||Ht>=u||re<0||re>=f||(_t=Ht,Rt=re,g(o[_t][Rt],o[lt][Y])>1e-8))break}return o[_t][Rt]},p=o.map((lt,Y)=>lt.map((V,bt)=>{const _t=v(m(Y,bt,0,1),m(Y,bt,0,-1)),Rt=v(m(Y,bt,1,0),m(Y,bt,-1,0)),zt=new D(_t[0],_t[1],_t[2]).cross(new D(Rt[0],Rt[1],Rt[2]));return zt.lengthSq()<1e-14&&zt.set(1,0,0),zt.normalize(),zt.x*V[0]+zt.y*(V[1]-1.8)+zt.z*(V[2]-2.6)<0&&zt.negate(),bt===0&&(zt.x=0),zt.normalize(),[zt.x,zt.y,zt.z]})),M=(lt,Y,V,bt,_t)=>Y<.43&&_t<2?un:Y>.84&&Y<.86&&_t<2?Is:_t===2&&Y<.35&&e.archA(V)<=e.YB+.001?un:_t===2?Math.abs(V-3.1)<.006&&Y>.55&&Y<2.98?Is:Ho:Y>e.yWB()-.04&&Y<e.yWT()+.04?jl:_t===1&&bt>1.35?Zu:Zn,w=new xs,y=new D,L=new D,I=new D,R=(lt,Y,V)=>{const bt=lt.map(d);if(y.fromArray(v(bt[2],bt[0])),L.fromArray(v(bt[3],bt[1])),I.crossVectors(y,L),I.lengthSq()<1e-12)return;const _t=[0,0,0];for(const zt of Y)for(let Ht=0;Ht<3;Ht++)_t[Ht]+=zt[Ht];const Rt=I.x*_t[0]+I.y*_t[1]+I.z*_t[2]<0;for(const zt of[[0,1,2],[0,2,3]]){const Ht=Rt?[zt[0],zt[2],zt[1]]:zt;if(y.fromArray(v(bt[Ht[1]],bt[Ht[0]])),L.fromArray(v(bt[Ht[2]],bt[Ht[0]])),!(y.cross(L).lengthSq()<1e-14))for(const re of Ht)w.vert(bt[re],Y[re],V)}};for(let lt=0;lt<u-1;lt++)for(let Y=0;Y<f-1;Y++){const V=[o[lt][Y],o[lt][Y+1],o[lt+1][Y+1],o[lt+1][Y]],bt=[p[lt][Y],p[lt][Y+1],p[lt+1][Y+1],p[lt+1][Y]],_t=[0,1,2,3].map(Rt=>V.reduce((zt,Ht)=>zt+Ht[Rt],0)/4);R(V,bt,M(_t[0],_t[1],_t[2],_t[3],V[1][4]))}const U=o[u-1],P=o[0];for(let lt=0;lt<f-1;lt++){const Y=U[lt],V=U[lt+1];R([Y,V,[0,Y[1],V[2]],[0,Y[1],Y[2]]],[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],Zn);const bt=P[lt],_t=P[lt+1];R([bt,_t,[0,e.YB,_t[2]],[0,e.YB,bt[2]]],[[0,-1,0],[0,-1,0],[0,-1,0],[0,-1,0]],fl)}for(let lt=0;lt<u-1;lt++){const Y=o[lt][f-1],V=o[lt+1][f-1],bt=(Y[1]+V[1])/2;R([Y,V,[0,V[1],e.CAB],[0,Y[1],e.CAB]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]],bt<e.YK?un:Zn)}Fd(w,e.hw(.8)-.24,e.ACY,i(e.AX),e.AR-.01,.23,0,Math.PI,fl);{const lt=Rt=>e.dF(Rt)+e.rc(Rt),Y=Rt=>(e.hw(Rt+.005)-e.hw(Rt-.005))/.01,V=(Rt,zt,Ht,re,yt,Nt,z=16,jt=8)=>{const Vt=(se,K)=>{const gt=typeof re=="function"?re:()=>re,ft=Ge(Rt(2.3),zt(2.3),se),C=(Ht(ft)+gt(ft))/2,E=Ge(Rt(C),zt(C),se),G=Ge(Ht(E),gt(E),K),q=Ge(Rt(G),zt(G),se),J=new D(1,-Y(G),0).normalize();return{p:[e.hw(G)+J.x*yt,G+J.y*yt,i(q)],n:[J.x,J.y,0]}};for(let se=0;se<z;se++)for(let K=0;K<jt;K++){const gt=[Vt(se/z,K/jt),Vt((se+1)/z,K/jt),Vt((se+1)/z,(K+1)/jt),Vt(se/z,(K+1)/jt)];Oh(w,gt.map(ft=>ft.p),gt.map(ft=>ft.n),Nt)}},bt=Rt=>{const zt=e.WB+.04,Ht=e.dP(2.1),re=lt(zt),yt=Ht+.12;if(Rt<yt)return Ge(zt,zt-.14,Ji((Rt-re)/(yt-re),0,1));const Nt=Ji((Rt-yt)/(e.DG1-yt),0,1);return Ge(zt-.14,zt+.2,Nt*Nt*(3-2*Nt))},_t=(Rt,zt=0)=>{const Ht=Ge(2.85,2.92,Ji((Rt-lt(2.9))/1.2,0,1))-zt,re=.16,yt=e.DG1-re;if(Rt<=yt)return Ht;const Nt=Ji((Rt-yt)/re,0,1);return Ht-re*(1-Math.sqrt(1-Nt*Nt))};V(lt,()=>e.DG1+.04,Rt=>bt(Rt)-.04,Rt=>_t(Rt-.04)+.04,.003,jl,22,8),V(lt,Rt=>e.dP(Rt),bt,Rt=>_t(Rt),.006,jl,8,8),V(Rt=>e.dP(Rt)+.1,()=>e.DG1,bt,Rt=>_t(Rt),.006,jl,18,8),V(Rt=>e.dP(Rt)+.015,Rt=>e.dP(Rt)+.085,Rt=>bt(Rt)-.04,Rt=>_t(Rt)+.04,.008,Ho,2,8)}kr(w,t,.92,1.1,0,1.62,.003,pc,26),kr(w,t,e.WB-.04,e.yWT()+.04,1.52,1.7,.005,Zn,4);{const lt=(Ht,re,yt)=>{const Nt=Ht/(e.hw(re)-e.rc(re)),z=Fi(re,Nt),jt=Zr(re,Nt);return[z[0]+jt[0]*yt,z[1]+jt[1]*yt,i(z[2]+jt[2]*yt)]},Y=(Ht,re,yt,Nt,z,jt,Vt=3,se=4)=>{for(let K=0;K<Vt;K++)for(let gt=0;gt<se;gt++){const ft=Ge(Ht,re,K/Vt),C=Ge(Ht,re,(K+1)/Vt),E=Ge(yt,Nt,gt/se),G=Ge(yt,Nt,(gt+1)/se),q=Zr((E+G)/2,(ft+C)/2/(e.hw(E)-e.rc(E)));w.quad(lt(ft,E,z),lt(C,E,z),lt(C,G,z),lt(ft,G,z),jt,q)}},V=e.WB;Y(0,.95,V+0,V+.1,.004,Zl,6,1),Y(0,.25,V+.16,V+.7,.004,Zl,2,4),Y(0,.15,V+.7,V+.84,.004,Zl,1,1),Y(.25,.3,V+.16,V+.62,.004,Zl,1,3);const bt=V+.3,_t=.17,Rt=.215,zt=10;for(let Ht=0;Ht<zt;Ht++){const re=-Math.PI/2+Math.PI*Ht/zt,yt=-Math.PI/2+Math.PI*(Ht+1)/zt,Nt=[[_t,re],[Rt,re],[Rt,yt],[_t,yt]].map(([z,jt])=>lt(Math.max(0,z*Math.cos(jt)),bt+z*Math.sin(jt)*.8,.007));w.quad(Nt[0],Nt[1],Nt[2],Nt[3],un,Zr(bt,0))}Y(0,.05,bt-.04,bt+.04,.007,un,1,1),Y(0,.2,bt-.012,bt+.012,.007,un,2,1)}{const lt=i(e.CAB)-.01,Y=lt+.33,V=.035,bt=r.filter(Rt=>Rt>=1.32).map(Rt=>{const zt=Zr(Rt,2.5);return{x:e.hw(Rt),y:Rt,n:[zt[0],zt[1],0]}}).filter(Rt=>Rt.x>e.hw(e.H)+.02||Rt.y>=e.H-.001);for(let Rt=0;Rt<bt.length-1;Rt++){const zt=bt[Rt],Ht=bt[Rt+1],re=(z,jt,Vt)=>[z.x-z.n[0]*Vt,z.y-z.n[1]*Vt,jt];Oh(w,[re(zt,lt,0),re(Ht,lt,0),re(Ht,Y,0),re(zt,Y,0)],[zt.n,Ht.n,Ht.n,zt.n],Ho);const yt=[-zt.n[0],-zt.n[1],0],Nt=[-Ht.n[0],-Ht.n[1],0];Oh(w,[re(zt,lt,V),re(Ht,lt,V),re(Ht,Y,V),re(zt,Y,V)],[yt,Nt,Nt,yt],Zn),w.quad(re(zt,Y,0),re(Ht,Y,0),re(Ht,Y,V),re(zt,Y,V),Zn,[0,0,1])}const _t=bt[0];w.quad([_t.x,_t.y,lt],[_t.x,_t.y,Y],[_t.x-V,_t.y,Y],[_t.x-V,_t.y,lt],Zn,[0,-1,0])}const _=w.append(w.mirroredX()),N=n.W/2,W=i(e.CAB);{const lt=Fi(2.1,2),Y=i(lt[2])+.1,V=.72;for(const bt of[1,-1])_.box(V+.04,.05,.06,bt*(lt[0]+V/2),2.12,Y,un,0,bt*.12,bt*-.1),_.box(.14,.55,.16,bt*(lt[0]+V),2.36,Y-.06,un,.1,bt*.12,0),_.box(.1,.46,.01,bt*(lt[0]+V),2.36,Y+.025,Pc,.1,bt*.12,0),_.box(.05,.6,.035,bt*(N-.025),1.45,i(3.2),ul)}_.box(.34,.16,.012,0,.55,i(e.dF(.55))-.006,Pm),_.box(.8,.55,.02,0,1.75,i(e.CAB)+.012,un);const nt=t/2-W+.3;for(const lt of[1,-1])_.addGeo(new cn(1.0824,1.0824,nt,8,1,!1,Math.PI/8),un,zn(lt*.47,.98,(W-.3+t/2)/2,Math.PI/2,0,0,.11,1,.16));for(const lt of[W+.3,2.35,3.4])_.box(1.06,.12,.1,0,.96,lt,un);const mt=(n.axles[1]+n.axles[2])/2;_.box(.86,.12,.7,0,1.12,mt,un),_.addGeo(new cn(.62,.62,.07,32),Li,zn(0,1.215,mt)),_.box(.17,.02,.66,0,1.252,mt+.33,Is);for(const lt of[1,-1])_.box(.36,.02,.5,lt*.24,1.252,mt+.46,un,0,lt*.5,0);_.box(.6,.06,.2,0,1.2,mt+.72,un,-.35);for(const lt of[n.axles[1],n.axles[2]])_.addGeo(new cn(.13,.13,1.9,12),un,zn(0,n.R,lt,0,0,Math.PI/2)),_.addGeo(new ra(.24,12,8),un,zn(0,n.R,lt,0,0,0,1.2,.9,1));for(const lt of[1,-1]){const Y=lt*(N-n.dualW/2-.02);for(const Rt of[n.axles[1],n.axles[2]])Fd(_,Y,n.R,Rt,n.R+.1,(n.dualW+.1)/2,.3,2.6,un);for(const Rt of[n.axles[1],n.axles[2]])_.box(n.dualW+.06,.55,.025,Y,.5,Rt+n.R+.17,un);const V=W-.15,bt=n.axles[1]-n.R-.08,_t=bt-V;_.box(.05,.92,_t,lt*(N-.035),.88,(V+bt)/2,Ho),_.addGeo(new cn(.025,.025,_t,8),Zn,zn(lt*(N-.035),1.34,(V+bt)/2,Math.PI/2,0,0)),_.box(.055,.16,_t,lt*(N-.037),.35,(V+bt)/2,un),_.box(.4,.5,.8,lt*.82,.8,W+.25,un)}_.box(2.3,.14,.14,0,.72,t/2-.08,un);const Ct=[1,.98,.95],pt=[1,-.06,0],Ut=[1,.42,.04],et=new xs(!0),Ot=new xs(!0);kr(et,t,.95,1.07,0,1.45,.008,Ct.map(lt=>lt*3.5),26),kr(et,t,.95,1.07,1.48,1.6,.008,Ut.map(lt=>lt*1.8),4),kr(et,t,2.47,2.52,0,1.75,.009,[.012,.013,.016],26),kr(et,t,2.52,2.545,0,1.9,.009,[.05,.052,.058],26),kr(et,t,2.545,2.6,0,1.75,.009,[.02,.021,.025],26);const Jt=3.01,oe=e.hw(Jt)-e.rc(Jt);for(const lt of[.13/oe,1.3]){const Y=Fi(Jt,lt),V=Zr(Jt,lt);et.box(.08,.035,.05,Y[0],Jt,i(Y[2])+V[2]*.012,0,0,0,0,Ut.map(bt=>bt*1.5))}{const lt=Fi(3.6,2.3);et.box(.03,.05,.12,lt[0]+.004,3.6,i(lt[2]),0,0,0,0,Ut)}const ce=et.append(et.mirroredX());{const lt=Fi(2.1,2),Y=i(lt[2])+.1,V=.72;for(const bt of[1,-1])ce.box(.025,.46,.012,bt*(lt[0]+V+.06),2.36,Y-.15,0,0,0,0,Ct.map(_t=>_t*.55)),ce.box(.1,.03,.012,bt*(lt[0]+V),2.6,Y-.15,0,0,0,0,Ut.map(_t=>_t*1.4))}{const lt=Fi(Jt,0);ce.box(.08,.035,.05,0,Jt,i(lt[2])-.012,0,0,0,0,Ut.map(Y=>Y*1.5))}for(const lt of[1,-1])Ot.box(.3,.09,.03,lt*.85,.72,t/2,0,0,0,0,pt.map(Y=>Y*1.4));for(const lt of[1,-1])Ot.box(.06,.06,.02,lt*(e.hw(3.8)-.15),3.8,W+.015,0,0,0,0,pt);return{body:_,head:ce,tail:Ot}}const eb=new Map,Lf=new Map,nb=new Map;function ml(n,t,e){let i=n.get(t);return i||(i=e(),n.set(t,i)),i}function ib(n,t,e,i){const s=n+":"+t+":"+e+":"+i;return ml(nb,s,()=>{const r=new Uint8Array(Wa*4),a=new Uint8Array(Wa*4);for(let c=0;c<Wa;c++){const[h,o,u,f,d]=GM[c];let v=c===Zn?n:h;c===Ho&&(v=new Gt(n).multiplyScalar(.86).getHex()),c===Zu&&(v=new Gt(n).multiplyScalar(.92).getHex()),r[c*4]=v>>16&255,r[c*4+1]=v>>8&255,r[c*4+2]=v&255,r[c*4+3]=255;const g=c===Zn||c===Ho||c===Zu,m=g?e:o,p=g?t:u;a[c*4]=Math.round(f*255),a[c*4+1]=Math.round(m*255),a[c*4+2]=Math.round(p*255),a[c*4+3]=Math.round((d??1)*255)}const l=(c,h)=>{const o=new bf(c,Wa,1,Wi);return o.magFilter=Di,o.minFilter=Di,o.generateMipmaps=!1,h&&(o.colorSpace=Mn),o.needsUpdate=!0,o};return{map:l(r,!0),orm:l(a,!1)}})}const Nd={models:"red",model3:"quicksilver",modelx:"pearl",modely:"quicksilver"};function sb(n,t){if(!Nd[n])return null;const e=new Gt(t),i={};return e.getHSL(i,Mn),i.l>.3?null:i.s>.25&&i.h>.5&&i.h<.75?Ds.deepblue:i.s>.35&&(i.h<.05||i.h>.93)?Ds.red:Ds[Nd[n]]}function rb(n){const t=new Gt(n),e={};return t.getHSL(e,Mn),e.l>.72?[.03,.32]:e.l>.4&&e.s>.12?[.55,.3]:[.4,.3]}function ob(n,t=!1,e=!1){const i=t?"0.34":e?"0.4":"0.62",s=t?"0.26":"0.28",r=e?"0.6":"1.4",a=e?"0.18":"0.6",l=e?"0.12":"0.35";return n.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
      #if defined( RE_IndirectDiffuse )
        iblIrradiance = mix( iblIrradiance, vec3( dot( iblIrradiance, vec3( 0.2126, 0.7152, 0.0722 ) ) ), 0.8 );
      #endif
      #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        { float m = max( max( radiance.r, radiance.g ), radiance.b ), K = ${r};
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
        float m = max( max( e.r, e.g ), e.b ), K = ${i};
        if ( m > K ) { float f = ( K + ${s} * log( 1.0 + ( m - K ) / ${s} ) ) / m; reflectedLight.directDiffuse *= f; reflectedLight.indirectDiffuse *= f; } }
      { float m = max( max( reflectedLight.directSpecular.r, reflectedLight.directSpecular.g ), reflectedLight.directSpecular.b ), K = ${a};
        if ( m > K ) reflectedLight.directSpecular *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / ${l} ) ) / m; }
      #ifdef USE_CLEARCOAT
      { float m = max( max( clearcoatSpecularDirect.r, clearcoatSpecularDirect.g ), clearcoatSpecularDirect.b ), K = 0.7;
        if ( m > K ) clearcoatSpecularDirect *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / 0.5 ) ) / m; }
      #endif`)},n.customProgramCacheKey=()=>t?"fleet-stadium-v8-semi":e?"fleet-stadium-v8-ct":"fleet-stadium-v8",n}function ab(n,t,e){let i,s,r;if(n==="semi"&&(t==null||typeof t!="string")){i=t!=null?new Gt(t).getHex(Mn):Ds.semi[0];const l=new Gt(i),c={};l.getHSL(c,Mn),c.l>.6&&(i=Ds.semi[0]),s=Ds.semi[1],r=Ds.semi[2]}else if(typeof t=="string"&&Ds[t])[i,s,r]=Ds[t];else{i=new Gt(t).getHex(Mn);const l=sb(n,i);l?[i,s,r]=l:[s,r]=rb(i)}const a=n==="cybertruck"?"ss":n+":"+i+":"+s+":"+r;return ml(Lf,"body:"+a+":"+(e?e.uuid:""),()=>{const l=ib(i,s,r,n==="cybertruck");return ob(new Ui({map:l.map,roughnessMap:l.orm,metalnessMap:l.orm,clearcoatMap:l.orm,specularIntensityMap:l.orm,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:n==="semi"?.12:.09,specularIntensity:1,envMap:e||null,envMapIntensity:n==="semi"?1:n==="cybertruck"?1.3:1.2}),n==="semi",n==="cybertruck")})}function kh(n,t){const e=Ji(t,0,1);return ml(Lf,"lamp:"+n+":"+e,()=>new We({vertexColors:!0,color:new Gt(2.8*e+.08,2.8*e+.08,2.8*e+.08)}))}let Ua=null;function lb(){return ml(Lf,"shadow",()=>{const e=new Uint8Array(32768);for(let i=0;i<128;i++)for(let s=0;s<64;s++){const r=Math.abs((s+.5)/64*2-1),a=Math.abs((i+.5)/128*2-1),l=Math.max(0,r-.62)/.38,c=Math.max(0,a-.8)/.2,h=Math.min(1,Math.sqrt(l*l+c*c)),o=Math.pow(1-h,1.6)*.82;e.set([0,0,0,Math.round(o*255)],(i*64+s)*4)}return Ua=new bf(e,64,128,Wi),Ua.magFilter=Qi,Ua.minFilter=Qi,Ua.needsUpdate=!0,new We({map:Ua,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})})}function cb(n){return ml(eb,n,()=>{const t=QM(n);let e,i,s;if(n==="semi")({body:e,head:i,tail:s}=tb());else{const f=YM(n);e=jM(f),ZM(e,f,n),i=zd(f,n,!1),s=zd(f,n,!0)}const r=t.front.build(),a=t.front.mirroredX().build(),l=t.drive.build(),c=t.drive.mirroredX().build(),h=e.build(),o=new xs().append(e);for(const f of Fm(n)){const d=(f.drive?f.sx>0?l:c:f.sx>0?r:a).clone().translate(f.x,f.y,f.z);o.addRaw(d)}const u=new xs(!0).append(i).append(s);return{body:h,head:i.build(),tail:s.build(),baked:o.build(),lamps:u.build(),wheelR:r,wheelL:a,driveR:l,driveL:c,shadow:new pn(Lr[n].W+.5,Lr[n].L+.7).rotateX(-Math.PI/2)}})}function Fm(n){const t=Lr[n],e=[],i=n==="semi"?["f","m","r"]:["f","r"];return[...t.axles].sort((s,r)=>s-r).forEach((s,r)=>{const a=n==="semi"&&r>0,l=a?t.dualW:t.tyreW;for(const[c,h]of[["l",-1],["r",1]])e.push({name:`wheel_${i[r]}${c}`,drive:a,sx:h,x:h*(t.W/2-l/2-.02-(t.inset||0)),y:t.R,z:s})}),e}function Od(n,t={}){const e=Lr[n];if(!e)throw new Error(`createTeslaVehicle: unknown kind '${n}'`);const i=cb(n);let s=t.color;if(s==null){const v=Lm[n],g=Ld[n]=(Ld[n]||0)+1;s=v[(g-1)%v.length]}const r=ab(n,s,t.envMap),a=new rn;a.name=`tesla-${n}`;const l=!!t.spinWheels,c=new ge(l?i.body:i.baked,r);c.name="body",a.add(c);const h=[];for(const v of Fm(n)){const g=new rn;if(g.name=v.name,g.position.set(v.x,v.y,v.z),g.userData.baked=!l,l){const m=new ge(v.drive?v.sx>0?i.driveR:i.driveL:v.sx>0?i.wheelR:i.wheelL,r);m.name="wheel",g.add(m)}a.add(g),h.push(g)}const o=t.lights??1;let u,f;l?(u=new ge(i.head,kh("h",o)),u.name="headlight",a.add(u),f=new ge(i.tail,kh("t",o)),f.name="taillight",a.add(f)):(u=f=new ge(i.lamps,kh("h",o)),u.name="lamps",a.add(u));const d=new ge(i.shadow,lb());return d.name="shadow",d.position.y=.015,d.renderOrder=1,a.add(d),a.userData={kind:n,length:e.L,width:e.W,height:e.H,wheelRadius:e.R,wheels:h,lights:{head:[u],tail:[f]}},a}const zm=59/136,us=n=>n*zm,Jr=(n,t,e)=>Math.max(t,Math.min(e,n)),Ks=(n,t,e)=>{const i=Jr((e-n)/(t-n),0,1);return i*i*(3-2*i)};function Hr(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const He=Sn,Nm=ha,hb=n=>Nm(us(n)),en=He.lateral,Un=He.flip,ub=Cm;function io(n){return Qs(n,{pos:new D,fwd:new D,up:new D,inLoop:!1,theta:0})}const Ye=n=>io(n).pos.z,tf=n=>io(n).pos.x,Ql=n=>n>=Un.sLip?1:-1,Fc=He.returnLane||{x:en,bend:1},Ft={hangarBack:-40,door:26,roadStart:24,ramp:He.ramp,fleet:He.fleet,landingS:He.landing?He.landing.s:He.fleet.s1+22,gate:He.checkpoint.s,flip0:Un.s0,flipLip:Un.sLip,boost0:He.boostArm.s0,boost1:He.boostArm.s1,flight0:He.flight.s0,flight1:He.flight.s1,takeoff:He.mega.s0,megaLip:He.mega.s1,landStrip:He.hops?He.hops[He.hops.length-1].sLand+4:hb(125),finish:He.finish.s,end:He.finish.s+700,rows0:He.fleetRows.length?He.fleetRows[0].s:He.mega.s0,retStraight:Un.sLip+(Fc.bend||0)};Ft.cityEnd=Ft.boost0+60;const ef=1.9,fb=3.1;function zo(n){return n<Ft.flip0?9-(9-ef)*Ks(Ft.flip0-110,Ft.flip0-20,n):n<Ft.flipLip?ef:Jr(tf(n)-11,fb,9)}const Fn={uBeat:{value:0},uTime:{value:0},uFlight:{value:0}},Hh=.0026,Fa=new Gt(853536),db=new Gt(1902630),fa=`
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float aaLine(float x, float w){ float fw = max(fwidth(x), 1e-4); return 1.0 - smoothstep(w, w + fw*1.5, abs(x)); }
`;function tc(n){const t=_s.merge([ue.fog,{uChase:{value:n.chase??1},uPulse:{value:n.pulse??.35}}]);return t.uBeat=Fn.uBeat,t.uTime=Fn.uTime,new Xe({uniforms:t,vertexShader:`
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
      }`,fog:!0,side:n.side??Os})}function Bd(n){const t=_s.merge([ue.fog,{uOpaque:{value:n?1:0},uBoost:{value:new Xt(Ft.boost0,Ft.takeoff)},uLines:{value:new Ze(Ft.door+3,Ft.finish,Ft.ramp.s0,Ft.ramp.s1)},uTun:{value:new Xt(-1e9,-1e9)}}]);return t.uBeat=Fn.uBeat,t.uTime=Fn.uTime,new Xe({uniforms:t,vertexShader:`
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
      ${fa}
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
      }`,fog:!0,transparent:!n,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:n?Ve:Os})}function pb(){const n=_s.merge([ue.fog,{}]);return n.uBeat=Fn.uBeat,new Xe({uniforms:n,vertexShader:`
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
      ${fa}
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
      }`,fog:!0})}function Fo(n,t=.35){const e={uColor:{value:new Gt().copy(n)},uStrength:{value:t},uBeat:Fn.uBeat};return new Xe({uniforms:e,vertexShader:`
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
      }`,transparent:!0,blending:yn,depthWrite:!1,side:Ve})}function Gh(n,{accent:t=[.15,.7,1.6],cell:e=[2.4,1.2],lit:i=.05,seamGlow:s=.06,key:r="a"}={}){return n.onBeforeCompile=a=>{a.uniforms.uPAccent={value:new D(t[0],t[1],t[2])},a.uniforms.uPCell={value:new Xt(e[0],e[1])},a.uniforms.uPLit={value:i},a.uniforms.uPSeam={value:s},a.uniforms.uBeat=Fn.uBeat,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += uPAccent * (pSlot * (0.7 + 0.6*exp(-fract(uBeat)*4.0)) + pSeam * uPSeam);`)},n.customProgramCacheKey=()=>"panel-"+r,n}const Df=new nn(1,1,1);(()=>{const n=new nn(1,1,1,1,1,1),t=n.attributes.position;for(let e=0;e<t.count;e++)t.getY(e)>0&&t.setX(e,t.getX(e)*.62-.08);return n.computeVertexNormals(),n})();const Ki=new Pe,zc=new Jn,kd=new Ni,$c=new D,If=new D;class Fe{constructor(){this.geos=[]}add(t,e,i=[1,1,1],s=0,r=-1e3){let a=t.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);if(a.attributes.uv||a.setAttribute("uv",new Me(new Float32Array(a.attributes.position.count*2),2)),!a.index){const u=a.attributes.position.count,f=new Array(u);for(let d=0;d<u;d++)f[d]=d;a.setIndex(f)}e&&a.applyMatrix4(e);const l=a.attributes.position.count,c=new Float32Array(l*3),h=new Float32Array(l),o=new Float32Array(l);for(let u=0;u<l;u++)c[u*3]=i[0],c[u*3+1]=i[1],c[u*3+2]=i[2],h[u]=s,o[u]=r;return a.setAttribute("color",new dn(c,3)),a.setAttribute("aS",new dn(h,1)),a.setAttribute("aOn",new dn(o,1)),this.geos.push(a),this}box(t,e,i,s,r,a,l,c=-a,h=-1e3,o=0,u=0,f=0){return kd.set(o,u,f),zc.setFromEuler(kd),Ki.compose($c.set(s,r,a),zc,If.set(t,e,i)),this.add(Df,Ki,l,c,h)}mesh(t){if(!this.geos.length)return null;const e=ko(this.geos,!1);for(const s of this.geos)s.dispose();return this.geos=[],new ge(e,t)}}function Mr(n,t,{color:e=[1,1,1],on:i=-1e3,hw:s=!1}={}){const r=[],a=[],l=[],c=[],h=[],o=[];let u=0;for(const v of n){const g=io(v),m=new D().crossVectors(g.fwd,g.up).normalize(),p=t(v);u=p.length;const M=zo(v);for(let w=0;w<p.length;w++){const[y,L]=p[w],I=g.pos.clone().addScaledVector(m,y).addScaledVector(g.up,L);r.push(I.x,I.y,I.z),a.push(w/(p.length-1),v),l.push(e[0],e[1],e[2]),c.push(v),h.push(i),o.push(M)}}const f=[];for(let v=0;v<n.length-1;v++)for(let g=0;g<u-1;g++){const m=v*u+g,p=m+1,M=m+u,w=M+1;f.push(m,p,M,p,w,M)}const d=new $e;return d.setAttribute("position",new Me(r,3)),d.setAttribute("uv",new Me(a,2)),d.setAttribute("color",new Me(l,3)),d.setAttribute("aS",new Me(c,1)),d.setAttribute("aOn",new Me(h,1)),s&&d.setAttribute("aHW",new Me(o,1)),d.setIndex(f),d.computeVertexNormals(),d}function Hd(n,t,e){const i=[];for(let s=n;s<t;s+=e)i.push(s);return i.push(t),i}function Gd(n,t){const e=[];let i=n;for(;i<t;){e.push(i);const s=i>Ft.flip0-1&&i<Ft.flipLip+1||i>Ft.ramp.s0-1&&i<Ft.ramp.s1+1||i>Ft.takeoff-1&&i<Ft.megaLip+1,r=i>Ft.flip0-170&&i<Ft.flipLip+(Fc.bend||0)+40;i+=s?1.2:r?6:24}return e.push(t),e}const xt={cyan:[.15,1,1.7],cyanW:[.7,1.6,2],mag:[1.9,.12,1],org:[2.4,.75,.08],red:[2.4,.08,.12],wht:[1.8,1.8,2],warm:[2,1.4,.8],vio:[.8,.25,2.2],blue:[.2,.5,2.4],green:[.2,2.2,.6],amber:[2.4,1.1,.1],metal:[.13,.12,.17],metalD:[.05,.05,.07],metalL:[.2,.19,.24],conc:[.06,.055,.075]},Vd=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Cs=(n,t)=>[n[0]*t,n[1]*t,n[2]*t];function ii(n,t,e,i,s,r,a,l,c,h,o,u=0,f=-Math.PI/2){const d=e*Math.cos(Math.PI/t),v=2*e*Math.sin(Math.PI/t);for(let g=0;g<t;g++){const m=f+g*Math.PI*2/t,p=Math.cos(m)*d,M=Math.sin(m)*d,w=r+p*Math.cos(u),y=l-p*Math.sin(u);n.box(v+i*.8,i,s,w,a+M,y,c,h,o,0,u,m+Math.PI/2)}}function mb(){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,1024,1024),[["VOLT","#2ef"],["HYPER","#f3c"],["RUSH","#fa2"],["MACH 1","#8af"],["NEON","#f45"],["ROADSTER RUSH","#fff"],["ZERO-G","#2fc"],["FINISH","#fff"]].forEach(([s,r],a)=>{const l=a*128,c=t.createLinearGradient(0,l,1024,l+128);c.addColorStop(0,"rgba(255,255,255,0.05)"),c.addColorStop(1,"rgba(255,255,255,0.0)"),t.fillStyle=c,t.fillRect(6,l+6,1012,116),t.strokeStyle=r,t.lineWidth=6,t.strokeRect(10,l+10,1004,108),t.font=`italic 900 ${s.length>8?70:88}px Arial Black, Arial, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.shadowColor=r,t.shadowBlur=18,t.fillStyle=r,t.fillText(s,512,l+66),t.shadowBlur=0,t.fillStyle="#fff",t.globalAlpha=.85,t.fillText(s,512,l+66),t.globalAlpha=1,t.fillStyle=r;for(let h=0;h<5;h++)t.fillRect(40+h*22,l+30,10,68)});const i=new Gc(n);return i.colorSpace=Mn,i.anisotropy=4,i}function Vh(n,t,e,i,s=2.2){const r=new pn(e,i),a=r.attributes.uv;for(let c=0;c<a.count;c++)a.setY(c,(7-t+a.getY(c))/8);const l=new We({map:n,color:new Gt(s,s,s),side:Ve,fog:!0});return new ge(r,l)}function gb(n){if(!n||!n.isWebGLRenderer)return null;try{const t=new dl;t.add(new ge(new nn(40,20,40),new We({color:459790,side:Qn})));const e=(r,a,l,c,h,o,u,f=0,d=0)=>{const v=new ge(new pn(r,a),new We({color:new Gt(o).multiplyScalar(u),side:Ve}));v.position.set(l,c,h),v.rotation.set(d,f,0),t.add(v)};for(let r=-2;r<=2;r++)e(1.2,30,r*4,9.8,0,16777215,3,0,Math.PI/2);e(30,1.2,-19.8,3,0,16722600,5,Math.PI/2),e(30,1.2,19.8,3,0,2287359,5,-Math.PI/2),e(30,4,0,4,-19.8,13161727,1.4),e(30,1,0,1,-19.8,16726666,2),e(30,2,0,6,19.8,6962431,2,Math.PI),e(40,40,0,-9.9,0,656916,1,0,-Math.PI/2);const i=new ao(n),s=i.fromScene(t,.03);return i.dispose(),t.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),s.texture}catch(t){return console.warn("[world] env failed",t),null}}function vb(n){if(!n||!n.isWebGLRenderer)return null;try{const t=new dl;t.add(new ge(new nn(40,20,40),new We({color:394759,side:Qn})));const e=(r,a,l,c,h,o,u,f=0,d=0)=>{const v=new ge(new pn(r,a),new We({color:new Gt(o).multiplyScalar(u),side:Ve}));v.position.set(l,c,h),v.rotation.set(d,f,0),t.add(v)};e(26,8,0,9.8,0,16777215,2.2,0,Math.PI/2);for(const r of[-9,0,9])e(3,3,-19.8,12,r,16054015,6,Math.PI/2);for(const r of[-12,12])e(2,6,19.8,5,r,16777215,3.5,-Math.PI/2);e(40,.5,19.8,.4,0,16715808,2.5,-Math.PI/2),e(40,6,0,3,-19.8,10133674,.35),e(40,6,0,3,19.8,10133674,.35,Math.PI),e(40,40,0,-9.9,0,1052690,1,0,-Math.PI/2);const i=new ao(n),s=i.fromScene(t,.04);return i.dispose(),t.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}),s.texture}catch(t){return console.warn("[world] stage env failed",t),null}}function xb(){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.35,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Gc(n);return i.colorSpace=Mn,i}const Wh=new D,_b=new D(0,0,1),Wd=new Jn,Nc=new Pe,yb=new D;function ri(n,t,e,i,s,r=0){Wh.subVectors(e,t);const a=Wh.length();a<.02||(Wd.setFromUnitVectors(_b,Wh.multiplyScalar(1/a)),Nc.compose(yb.addVectors(t,e).multiplyScalar(.5),Wd,$c.set(i,i,a)),n.add(Df,Nc,s,r))}function Gr(n,t,e,i,s,r,a,l,c,h=0){Ki.compose($c.set(r,a,l),zc.identity(),If.set(e,i,s)),Nc.multiplyMatrices(t,Ki),n.add(Df,Nc,c,h)}function ec(n,t,{x:e,y:i,z:s,cols:r=4,rows:a=3,yaw:l=0,pitch:c=.25,pitchLamp:h=0,size:o=.62,gap:u=.16,s:f=0,mast:d=0}){const v=new Pe().compose(new D(e,i,s),new Jn().setFromEuler(new Ni(c,l,0,"YXZ")),new D(1,1,1)),g=r*(o+u)+u,m=a*(o+u)+u;Gr(n,v,g+.2,.14,.14,0,m/2+.05,-.25,xt.metalL),Gr(n,v,g+.2,.14,.14,0,-m/2-.05,-.25,xt.metalL);for(const p of[-1,1])Gr(n,v,.14,m+.2,.14,p*(g/2+.05),0,-.25,xt.metalL);Gr(n,v,g,m,.08,0,0,-.4,xt.metalD);for(let p=0;p<a;p++)for(let M=0;M<r;M++){const w=-g/2+u+o/2+M*(o+u),y=-m/2+u+o/2+p*(o+u);Gr(n,v,o,o,.36,w,y,-.12,xt.metalD),Gr(t,v,o*.82,o*.82,.04,w,y,.075,[3.2,3.1,2.9],f),Gr(n,v,o*1.02,.05,.22,w,y+o*.5,.12,xt.metal)}if(d>0){const p=e-Math.sin(l)*.6,M=s-Math.cos(l)*.6;for(const w of[-.35,.35])for(const y of[-.35,.35])n.box(.12,i,.12,p+w,i/2,M+y,xt.metalL);for(let w=.8,y=0;w<i-.5;w+=1.4,y++)n.box(.8,.07,.07,p,w,M-.35,xt.metal),n.box(.8,.07,.07,p,w,M+.35,xt.metal),n.box(.07,.07,.8,p-.35,w,M,xt.metal),n.box(.07,.07,.8,p+.35,w,M,xt.metal),ri(n,new D(p-.35,w,M+.36),new D(p+.35,w+1.4,M+.36),.05,xt.metal);n.box(1.6,.3,1.6,p,.15,M,xt.metalD)}return new D(0,0,.3).applyMatrix4(v)}function Xh(n,t,{axis:e="z",at:i,a0:s,a1:r,face:a=1,h:l=.16,y:c=0,pitch:h=.12,col:o=[3,.05,.08],s:u=0}){const f=Math.abs(r-s),d=(s+r)/2;e==="z"?n.box(.22,l,f,i,c+l/2,d,xt.metalD,u):n.box(f,l,.22,d,c+l/2,i,xt.metalD,u);const v=Math.min(s,r);for(let g=0;v+g*h<v+f;g++){const m=v+(g+.5)*h;e==="z"?t.box(.03,.05,.06,i+a*.115,c+l*.55,m,o,u):t.box(.06,.05,.03,m,c+l*.55,i+a*.115,o,u)}e==="z"?t.box(.5,.004,f,i+a*.45,.012,d,Cs(o,.09),u):t.box(f,.004,.5,d,.012,i+a*.45,Cs(o,.09),u)}function Mb(n,t,e=60){const i=new mn({color:5790043,roughness:.92,metalness:0,side:Ve,envMapIntensity:.25});return i.onBeforeCompile=s=>{s.uniforms.uHW={value:n},s.uniforms.uS0={value:t},s.uniforms.uLen={value:e},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDk; varying vec2 vDk;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDk = aDk;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vDk; uniform float uHW, uS0, uLen; vec3 dkEm = vec3(0.0); float dkPaint = 0.0;
        ${fa}`).replace("#include <color_fragment>",`#include <color_fragment>
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
        totalEmissiveRadiance += dkEm;`)},i.customProgramCacheKey=()=>"concrete-deck",i}function bb(n,t,e){const i=_s.merge([ue.fog,{uOn:{value:0},uHW:{value:n},uS60:{value:t},uEnd:{value:e}}]);return i.uBeat=Fn.uBeat,new Xe({uniforms:i,vertexShader:`
      varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_vertex>
      void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz;
        vec4 mvPosition = viewMatrix*wp; gl_Position = projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uOn, uHW, uS60, uEnd, uBeat; varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_fragment>
      ${fa}
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
      }`,fog:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})}const Xd=["models","model3","cybertruck","semi","modelx","modely"],wb={models:1053206,model3:3027256,modelx:1779522,modely:12035717,semi:15659250},qd=2.45,Sb=.5,Tb=ua||{};function Eb(n={}){const t=n.scene||(n.isScene?n:null),e=n.renderer||null;let i=n.camera||null;const s=new rn;s.name="world";const r=Hr(1337),a=[],l=[],c=(K,gt)=>{if(Math.abs(K)>1e8||Math.abs(gt)>1e8)return[-1e9,1e9];let ft=1/0,C=-1/0;const E=64;for(let G=0;G<=E;G++){const q=Ye(K+(gt-K)*G/E);ft=Math.min(ft,q),C=Math.max(C,q)}for(const G of[Un.s0,Un.sLip])if(G>K&&G<gt){const q=Ye(G);ft=Math.min(ft,q),C=Math.max(C,q)}return[ft-(Un.depth||20),C]},h=(K,gt,ft)=>{const C=new rn;C.name=K,s.add(C);const[E,G]=c(gt,ft);return l.push({g:C,zHi:G,zLo:E}),C},o={neon:tc({}),neonD:tc({side:Ve}),neonSoft:tc({chase:0,pulse:.15}),metal:Gh(new mn({vertexColors:!0,metalness:.85,roughness:.38,envMapIntensity:.7}),{key:"m"}),metalD:Gh(new mn({vertexColors:!0,metalness:.85,roughness:.32,envMapIntensity:1.3,side:Ve}),{accent:[1.6,.15,.9],cell:[3.2,1.6],lit:.04,key:"md"}),matte:Gh(new mn({vertexColors:!0,metalness:.3,roughness:.7}),{accent:[2,.7,.15],cell:[4,2],lit:.03,seamGlow:0,key:"mt"}),paint:new Ui({vertexColors:!0,metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6}),glass:new mn({color:329226,metalness:1,roughness:.06,envMapIntensity:1.8}),deck:new Ui({vertexColors:!0,metalness:.65,roughness:.24,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),roadF:Bd(!1),roadO:Bd(!0),bld:pb()};a.push(...Object.values(o));const u=mb(),f={lineup:[],rows:[]},d=[],v=[],g=[];let m=null;const p=vb(e);p&&a.push(p);const M={mat:null,beams:[],s60:10.9};o.steel=new mn({vertexColors:!0,metalness:.75,roughness:.42,envMapIntensity:.9}),o.lamp=tc({chase:0,pulse:0,side:Ve}),a.push(o.steel,o.lamp);const w=xb(),y=new Map;function L(K,gt,ft,C=16052991,E=1){if(!w)return null;const G=C+":"+E;let q=y.get(G);q||(q=new $a({map:w,color:new Gt(C).multiplyScalar(E),blending:yn,transparent:!0,depthWrite:!1,fog:!0}),y.set(G,q),a.push(q));const J=new fc(q);return J.position.copy(gt),J.scale.set(ft,ft,1),K.add(J),J}t&&(t.background=Fa.clone(),t.fog=new Mf(Fa.clone(),Hh));const I=gb(e);t&&I&&!t.environment&&(t.environment=I);const R={uFlight:Fn.uFlight,uTime:Fn.uTime,uBeat:Fn.uBeat,uFog:{value:Fa.clone()},uSunDir:{value:new D(0,.1,-1).normalize()}},U=new ge(new ra(10,48,24),new Xe({uniforms:R,depthWrite:!1,depthTest:!0,side:Qn,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      uniform float uFlight, uTime, uBeat; uniform vec3 uFog; uniform vec3 uSunDir; varying vec3 vDir;
      ${fa}
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
      }`}));U.frustumCulled=!1,U.renderOrder=-1e3,U.name="sky",s.add(U);const P=new tM(8019199,1181724,.3);s.add(P);const _=new sM(11570431,.35);_.position.set(-30,60,20),s.add(_);const N=new dm(16777215,300,40,.55,.6,1.6);N.position.set(0,12,1),N.target.position.set(0,0,0),s.add(N,N.target);const W=Math.min(Ye(Ft.end),-Ft.flip0-60)-900,nt=Math.max(400,Ye(Ft.end)+600),mt=nt-W,Ct={name:"WetGround",uniforms:{color:{value:new Gt(16777215)},tDiffuse:{value:null},textureMatrix:{value:null},fogColor:{value:Fa.clone()},fogDensity:{value:Hh},uBeat:Fn.uBeat,uTime:Fn.uTime,uRegions:{value:new Ze(Ft.hangarBack,Ft.door,Ye(Ft.boost1-40),Ye(Ft.end))},uLat:{value:en}},vertexShader:`
      uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW; varying float vDepth;
      void main(){ vUv = textureMatrix * vec4(position,1.0); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform vec3 color; uniform sampler2D tDiffuse; uniform vec3 fogColor; uniform float fogDensity;
      uniform float uBeat, uTime, uLat; uniform vec4 uRegions;
      varying vec4 vUv; varying vec3 vW; varying float vDepth;
      ${fa}
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
        float flight = smoothstep(uRegions.z - 80.0, uRegions.z + 80.0, vW.z) * smoothstep(uLat - 28.0, uLat - 14.0, vW.x);   // v5: the return lane
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
      }`};let pt=null;try{const K=e&&e.getSize?e.getSize(new Xt):new Xt(540,960),gt=e&&e.getPixelRatio?e.getPixelRatio():1;pt=new Xc(new pn(2400,mt),{textureWidth:Math.max(256,Math.round(K.x*gt*.5)),textureHeight:Math.max(256,Math.round(K.y*gt*.5)),clipBias:.003,shader:Ct,multisample:0}),pt.rotation.x=-Math.PI/2,pt.position.set(0,0,(nt+W)/2),pt.name="wetGround",s.add(pt)}catch(K){console.warn("[world] reflector failed, using plain ground",K);const gt=new ge(new pn(2400,mt),new mn({color:328713,metalness:.9,roughness:.25}));gt.rotation.x=-Math.PI/2,gt.position.set(0,0,(nt+W)/2),s.add(gt)}{const K=h("road",-1e9,1e9),gt=[[Ft.roadStart,Ft.flip0+.01],[Ft.flipLip,Ft.end]];for(const[ft,C]of gt){const E=Mr(Gd(ft,C),q=>{const J=zo(q);return[[-J,.03],[J,.03]]},{hw:!0}),G=new ge(E,o.roadF);G.renderOrder=2,K.add(G)}}{const K=h("walls",-1e9,1e9),gt=new Fe,ft=new Fe,C=He.fleetRows.length?He.fleetRows[He.fleetRows.length-1]:null;[[Ft.door,Ft.ramp.s0-40],[Ft.landingS+26,Ft.flip0-2],[Ft.flipLip+84,Ft.rows0-60],[C?C.s+C.depth/2+40:Ft.landStrip+20,Ft.end]].forEach(([G,q],J)=>{const Z=Gd(G,q),wt=.95;for(const Q of[-1,1]){gt.add(Mr(Z,rt=>{const k=zo(rt)+.35;return[[Q*k,0],[Q*k,wt],[Q*(k+.4),wt],[Q*(k+.4),0]]}),null,xt.metal);const ct=Q<0?xt.cyan:xt.mag;ft.add(Mr(Z,rt=>{const k=zo(rt)+.3;return[[Q*k,wt+.02],[Q*(k+.5),wt+.02]]}),null,ct),ft.add(Mr(Z,rt=>{const k=zo(rt)+.33;return[[Q*k,wt*.45],[Q*k,wt*.55]]}),null,Cs(ct,.6))}}),K.add(gt.mesh(o.metalD)),K.add(ft.mesh(o.neonD))}{const K=h("speedPosts",-1e9,1e9),gt=new Fe,ft=new Fe,C=He.fleetRows.length?He.fleetRows[He.fleetRows.length-1]:null,E=[[Ft.door+30,Ft.ramp.s0-60],[Ft.landingS+40,Ft.flip0-140],[Ft.retStraight,Ft.rows0-70],[C?C.s+C.depth/2+50:Ft.landStrip+30,Ft.finish+400]];let G=0;for(const[Z,wt]of E)for(let Q=Z;Q<wt;Q+=8,G++){const ct=io(Q),rt=-ct.fwd.z,k=ct.fwd.x,tt=zo(Q);for(const Mt of[-1,1]){const Et=Mt*(tt+1.25),St=ct.pos.x+rt*Et,qt=ct.pos.z+k*Et;gt.box(.16,1.1,.16,St,.55,qt,xt.metalD,Q);const kt=G%4===0?xt.wht:Mt<0?xt.cyan:xt.mag;ft.box(.2,.18,.2,St,1.15,qt,kt,Q);const Tt=Mt*(tt+.28);ft.box(Math.abs(rt)>.5?.05:2.2,.04,Math.abs(rt)>.5?2.2:.05,ct.pos.x+rt*Tt,.05,ct.pos.z+k*Tt,Cs(kt,.8),Q)}}const q=gt.mesh(o.metal),J=ft.mesh(o.neonSoft);q&&K.add(q),J&&K.add(J)}const Ut={strips:[],door:[],tree:[]};{const K=h("hangar",Ft.hangarBack-20,Ft.door+60),gt=new Fe,ft=new Fe,C=new Fe,E=18,G=13,q=-Ft.hangarBack,J=-Ft.door;gt.box(.8,G,q-J,-E,G/2,(q+J)/2,xt.metalD),gt.box(.8,G,q-J,E,G/2,(q+J)/2,xt.metalD),gt.box(E*2,.8,q-J,0,G,(q+J)/2,xt.metalD),gt.box(E*2,G,.8,0,G/2,q,xt.metalD),gt.box(5,G,1.2,-E+2.5,G/2,J,xt.metal),gt.box(5,G,1.2,E-2.5,G/2,J,xt.metal),gt.box(E*2,G-10.5,1.2,0,10.5+(G-10.5)/2,J,xt.metal);let Z=0;for(let rt=q-4;rt>J+2;rt-=6,Z++){for(const k of[-1,1])gt.box(1,G-3,1.4,k*(E-.9),(G-3)/2,rt,xt.metal),gt.box(1,4.6,1.4,k*(E-2.3),G-1.6,rt,xt.metal,-rt,-1e3,0,0,k*Math.PI/4),ft.box(.12,G-4,.14,k*(E-1.45),(G-4)/2+.3,rt,xt.cyanW,-rt,1+Z*.5),ft.box(.12,3.6,.14,k*(E-2.75),G-2.1,rt,xt.cyanW,-rt,1+Z*.5,0,0,k*Math.PI/4);gt.box(E*2-6,1,1.4,0,G-.5,rt,xt.metal);for(const k of[-1,1]){gt.box(.3,9,4.4,k*(E-.55),5,rt-3,[.02,.02,.026]);{for(const tt of[-.9,.9])ft.box(.08,6.4,.16,k*(E-.72),4.8,rt-3+tt,Z%2?[.6,.9,2]:[.25,1.1,2],-rt,1+Z*.5);gt.box(.1,6.8,1.5,k*(E-.62),4.8,rt-3,[.012,.012,.018]);for(let tt=0;tt<4;tt++)ft.box(.08,.06,1.3,k*(E-.72),1.3+tt*.25,rt-3+(tt%2?1.4:-1.4),tt%2?xt.cyan:xt.mag,-rt,3+Z*.5);for(let tt=0;tt<7;tt++)gt.box(.1,.05,1.3,k*(E-.66),1.9+tt*.95,rt-3,xt.metalD)}ft.box(.1,.18,3.6,k*(E-.75),1.4,rt-3,xt.mag,-rt,8),ft.box(.1,.18,3.6,k*(E-.75),8.2,rt-3,xt.mag,-rt,8)}}{const rt=G-2,k=q-J;for(const kt of[-10.5,-4,4,10.5]){gt.box(.3,.3,k-2,kt,rt,(q+J)/2,xt.metalL),gt.box(.3,.3,k-2,kt,rt+1.4,(q+J)/2,xt.metalL);for(let Tt=q-2;Tt>J+2;Tt-=2.4)gt.box(.12,1.65,.12,kt,rt+.7,Tt-.6,xt.metal,-Tt,-1e3,Math.round(Tt)%2?.7:-.7,0,0)}for(let kt=q-2;kt>J+2;kt-=6)gt.box(22,.22,.22,0,rt,kt,xt.metalL);const tt=8,Mt=new Fe,Et=new Fe;ii(Mt,tt,6.8,.45,.6,0,0,0,xt.metal,0),ii(Et,tt,6.45,.08,.1,0,0,-.32,xt.cyanW,0,2),ii(Et,tt,7.15,.06,.1,0,0,-.32,xt.mag,0,4);const St=Mt.mesh(o.metal),qt=Et.mesh(o.neon);for(const kt of[St,qt])kt.rotation.x=-Math.PI/2,kt.position.set(0,8.6,0),K.add(kt);for(let kt=0;kt<8;kt++){const Tt=kt/8*Math.PI*2+Math.PI/8;gt.box(.06,G-8.6,.06,Math.cos(Tt)*6.6,(G+8.6)/2,Math.sin(Tt)*6.6,xt.metalL)}for(let kt=0;kt<8;kt++){const Tt=kt/8*Math.PI*2+Math.PI/8,F=Math.cos(Tt)*12.5,dt=Math.sin(Tt)*12.5;Math.abs(F)<6||(ft.box(.12,5.5,.12,F,2.9,dt,kt%2?xt.cyanW:xt.mag,0,6+kt),gt.box(.6,.3,.6,F,.15,dt,xt.metalL))}}K.add(gt.mesh(o.metal));const wt=new nn(E*2-7,.16,.6);for(let rt=0;rt<15;rt++){const k=q-2-rt*((q-J-4)/14),tt=new We({color:0,fog:!0}),Mt=new ge(wt,tt);Mt.position.set(0,G-1.2,k),K.add(Mt),Ut.strips.push({m:Mt,mat:tt,on:[0,2,4,6][Math.min(3,Math.floor(rt*4/15))]})}{const rt=new cn(5.6,5.8,.14,96,1,!0);C.add(rt,Ki.makeTranslation(0,.07,0),[.03,.03,.04]);const k=new _a(4.9,5.6,96,1);k.rotateX(-Math.PI/2),C.add(k,Ki.makeTranslation(0,.14,0),[.05,.05,.065]);for(let tt=0;tt<48;tt++){const Mt=tt/48*Math.PI*2;C.box(.06,.03,.7,Math.cos(Mt)*5.25,.16,Math.sin(Mt)*5.25,xt.metalL,0,-1e3,0,-Mt+Math.PI/2,0)}}K.add(C.mesh(o.metal));{const rt=new ge(new pn(14,14),new Xe({uniforms:{uBeat:Fn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
          void main(){ float r = length(vUv - 0.5)*2.0;
            float ring = exp(-pow((r - 0.62)*14.0, 2.0)) * 0.35 + exp(-pow((r - 0.42)*30.0, 2.0)) * 0.18;
            float a = exp(-r*r*3.0)*0.045 + ring * (0.7 + 0.5*exp(-fract(uBeat)*4.0));
            gl_FragColor = vec4(vec3(0.15,0.7,1.6)*a, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,transparent:!0,blending:yn,depthWrite:!1}));rt.rotation.x=-Math.PI/2,rt.position.y=.02,rt.renderOrder=3,K.add(rt),a.push(rt.material)}const Q=new Fe;Q.add(new Ls(5.3,.06,6,96),Ki.makeRotationX(Math.PI/2).setPosition(0,.15,0),xt.cyanW,0,0),Q.add(new Ls(3.6,.035,6,96),Ki.makeRotationX(Math.PI/2).setPosition(0,.15,0),xt.cyan,0,2);for(let rt=0;rt<24;rt++){const k=rt/24*Math.PI*2;Q.box(.5,.04,.08,Math.cos(k)*4.5,.15,Math.sin(k)*4.5,xt.cyan,0,4+rt*.1,0,-k,0)}for(const rt of[-1,1])for(let k=0;k<9;k++)Q.box(.14,.05,1.6,rt*7.5,.05,-6-k*3.2,xt.wht,6+k*3.2,6+k*.5);K.add(Q.mesh(o.neonSoft));{const rt=new Fe,k=new Fe;ii(rt,12,6.4,.5,.5,0,0,0,xt.metal,0);const tt=rt.mesh(o.metal);tt.rotation.x=Math.PI/2,tt.position.y=8.2,K.add(tt),ii(k,12,6.05,.1,.12,0,0,0,xt.wht,0,0),ii(k,12,6.75,.08,.12,0,0,0,xt.mag,0,4);for(let St=0;St<12;St++){const qt=(St+.5)/12*Math.PI*2;k.box(.42,.42,.2,Math.cos(qt)*6.4,Math.sin(qt)*6.4,.38,xt.wht,0,St*.5)}const Mt=k.mesh(o.neonSoft);Mt.rotation.x=Math.PI/2,Mt.position.y=8.2,K.add(Mt);const Et=new Fe;for(const St of[-1,1])Et.box(.12,4.9,.12,St*6.4,10.65,0,xt.metalL);K.add(Et.mesh(o.metal))}for(let rt=0;rt<6;rt++)ft.box(26-rt*3,.12,.1,0,2+rt*1.6,q-.5,rt%2?xt.mag:xt.cyan,-q,2+rt);for(const rt of[-1,1])ft.box(.25,8,.1,rt*4.5,6.5,q-.5,xt.org,-q,9,0,0,rt*.5);if(K.add(ft.mesh(o.neonD)),u)for(const[rt,k]of[[-1,2],[1,5]]){const tt=Vh(u,k,8,1,1.6);tt.position.set(rt*(E-.7),10,6),tt.rotation.y=-rt*Math.PI/2,K.add(tt)}for(const rt of[-1,1]){const k=new rn,tt=new Fe,Mt=new Fe;tt.box(13,10.5,.7,0,5.25,0,xt.metal);for(let Et=0;Et<5;Et++)tt.box(12.6,.12,.8,0,1+Et*2.1,0,xt.metalL);Mt.box(.16,10.2,.8,-rt*6.4,5.2,0,xt.red,0,0);for(let Et=0;Et<4;Et++)Mt.box(1.6,.18,.8,-rt*(4.5-Et*1.2),5.2+(Et%2?1:-1)*0+Et*0,0,xt.org,0,0,0,0,rt*.6);k.add(tt.mesh(o.metal)),k.add(Mt.mesh(o.neonSoft)),k.position.set(rt*6.5,0,J-.1),K.add(k),Ut.door.push({g:k,sd:rt})}const ct=new ra(.2,16,10);for(const rt of[-1,1]){const k=new Fe;k.box(.18,4.2,.18,rt*9.5,2.1,-14,xt.metalL),k.box(1.2,3.2,.3,rt*9.5,3,-14,xt.metalD),K.add(k.mesh(o.metal));const tt=[["pre",4.2,xt.wht],["a1",3.6,xt.amber],["a2",3,xt.amber],["a3",2.4,xt.amber],["go",1.8,xt.green]];for(const[Mt,Et,St]of tt)for(const qt of[-.3,.3]){const kt=new We({color:0}),Tt=new ge(ct,kt);Tt.position.set(rt*9.5+qt,Et,-13.82),K.add(Tt),Ut.tree.push({mat:kt,id:Mt,col:new Gt(St[0],St[1],St[2])})}}}{const K=h("strip",Ft.door-50,Ft.flip0+60),gt=new Fe,ft=new Fe,C=Ft.ramp.s0-50,E=Ft.landingS+30;let G=0;for(let J=60;J<Ft.flip0-190;J+=42,G++){if(J>C&&J<E)continue;const Z=-J,wt=11.5,Q=10.5,ct=G%3===0;for(const k of[-1,1])gt.box(1.1,Q,1.1,k*wt,Q/2,Z,xt.metal),gt.box(1.6,.6,1.6,k*wt,.3,Z,xt.metalD),ft.box(.12,Q-1,.12,k*(wt-.62),Q/2,Z+.4,xt.cyan,J);gt.box(wt*2+1,1.2,1.4,0,Q,Z,xt.metal);const rt=ct?xt.org:xt.mag;for(let k=-4;k<=4;k++)ft.box(1.6,.12,.9,k*2.4,Q-.66,Z,rt,J);ft.box(wt*2,.12,.12,0,Q+.66,Z+.72,xt.cyanW,J),ct&&ii(ft,6,15.5,.35,.35,0,13.4,Z,xt.vio,J,-1e3)}for(let J=40;J<Ft.flip0-150;J+=26)if(!(J>Ft.ramp.s0-40&&J<Ft.landingS+26))for(const Z of[-1,1]){const wt=Z*10.6;gt.box(.22,7.5,.22,wt,3.75,-J,xt.metalL),gt.box(2.4,.18,.4,wt-Z*1.1,7.5,-J,xt.metalL),ft.box(1.8,.08,.3,wt-Z*1.2,7.38,-J,xt.warm,J)}let q=0;for(let J=140;J<Ft.flip0-160;J+=115,q++){if(J>Ft.ramp.s0-60&&J<Ft.landingS+40)continue;const Z=q%2?1:-1,wt=Z>0?18:-24,Q=-J;if(gt.box(.6,14,.6,wt-5,7,Q,xt.metalD),gt.box(.6,14,.6,wt+5,7,Q,xt.metalD),u){const ct=Vh(u,[0,1,2,3,4,6][q%6],16,4,2.4);ct.position.set(wt,16,Q),ct.rotation.y=Z*.35,K.add(ct)}ft.box(16.6,.15,.2,wt,13.9,Q,xt.wht,J),ft.box(16.6,.15,.2,wt,18.1,Q,xt.wht,J)}{const Z=Math.min(He.dragStrip.s1+40,Ft.ramp.s0-30),wt=4.3,Q=Pn&&isFinite(Pn.zero60)?Nm(Pn.zero60):10.9,ct=bb(wt,Q,Z);a.push(ct),M.mat=ct;const rt=Mr(Hd(-3,Z,2),()=>[[-wt,.045],[wt,.045]]),k=new ge(rt,ct);k.renderOrder=3,K.add(k);const tt=new Fe;for(const Mt of[0,Q])for(const Et of[-1,1])tt.box(.16,.9,.16,Et*3.75,.45,-Mt,xt.metalD),tt.box(.24,.22,.2,Et*3.75,.85,-Mt,xt.metalD),tt.box(.5,.06,.5,Et*3.75,.03,-Mt,xt.metalL);K.add(tt.mesh(o.metal));for(const[Mt,Et]of[[0,0],[Q,1]]){const St=new We({color:0,transparent:!0,blending:yn,depthWrite:!1,fog:!0});a.push(St);const qt=new ge(new nn(7.3,.025,.025),St);qt.position.set(0,.85,-Mt),K.add(qt);for(const kt of[-1,1]){const Tt=new ge(new nn(.03,.08,.08),St);Tt.position.set(kt*3.63,.85,-Mt),K.add(Tt)}M.beams.push({mat:St,k:Et})}M.s60=Q;{const Mt=new Fe,Et=new Fe,St=-Math.max(Q+9,60),qt=5.3,kt=4.6,Tt=5.3,F=.7,dt=[.07,.07,.08],at=[.12,.12,.13],H=(ht,At,Kt)=>new D(ht,At,Kt);for(const ht of[-1,1]){const At=ht*qt;for(const Kt of[-.35,.35])for(const ve of[-F/2,F/2])Mt.box(.1,Tt,.1,At+Kt,Tt/2,St+ve,at);for(let Kt=.6,ve=0;Kt<Tt;Kt+=.9,ve++)Mt.box(.8,.06,.06,At,Kt,St-F/2,dt),Mt.box(.8,.06,.06,At,Kt,St+F/2,dt),Mt.box(.06,.06,F,At-.35,Kt,St,dt),Mt.box(.06,.06,F,At+.35,Kt,St,dt),ri(Mt,H(At-.35,Kt,St+F/2),H(At+.35,Math.min(Tt,Kt+.9),St+F/2),.045,dt),ri(Mt,H(At+.35,Kt,St-F/2),H(At-.35,Math.min(Tt,Kt+.9),St-F/2),.045,dt);Mt.box(1.3,.16,1.3,At,.08,St,xt.metalD);for(let Kt=.5;Kt<Tt-.2;Kt+=.55)Et.box(.05,.05,.05,At-ht*.42,Kt,St+F/2+.03,[3,.05,.08],Q)}for(const ht of[kt,Tt])for(const At of[-F/2,F/2])Mt.box(qt*2+.8,.1,.1,0,ht,St+At,at);for(let ht=-qt+.4,At=0;ht<qt-.4;ht+=.7,At++){for(const Kt of[-F/2,F/2])ri(Mt,H(ht,At%2?kt:Tt,St+Kt),H(ht+.7,At%2?Tt:kt,St+Kt),.045,dt);Mt.box(.05,.05,F,ht,kt,St,dt),Mt.box(.05,.05,F,ht,Tt,St,dt)}for(const ht of[-3.2,-1.1,1.1,3.2])Mt.box(.42,.34,.36,ht,kt-.3,St+.2,xt.metalD),Et.box(.32,.24,.03,ht,kt-.32,St+.39,[2.6,2.55,2.4],Q);Et.box(qt*2-1.2,.05,.05,0,kt-.06,St+F/2+.04,[3,.05,.08],Q),Mt.box(qt*2-.4,2.7,.22,0,Tt+1.45,St,[.02,.02,.024]),Et.box(qt*2-.8,2.35,.02,0,Tt+1.45,St+.125,[.035,.045,.075],Q);for(const ht of[Tt+.12,Tt+2.78])Mt.box(qt*2-.3,.08,.26,0,ht,St,at);for(let ht=-qt+.6;ht<qt-.5;ht+=.9)Et.box(.05,.05,.03,ht,Tt+2.86,St+.14,[3,.05,.08],Q);for(const ht of[-1,1])Et.box(.06,2.3,.03,ht*(qt-.38),Tt+1.45,St+.14,[1.2,1.2,1.25],Q);K.add(Mt.mesh(o.steel)),K.add(Et.mesh(o.lamp))}}K.add(gt.mesh(o.metal)),K.add(ft.mesh(o.neon)),Jt(K)}function et(K,gt,ft,C,{rail2:E=!0,showLights:G=!0,extent:q=null,side:J=1}={}){const Z=new Fe,wt=new Fe,Q=Xd.filter(dt=>gt.some(at=>at.kind===dt)).concat(gt.map(dt=>dt.kind).filter(dt=>!Xd.includes(dt))),ct=dt=>gt.find(at=>at.kind===dt)||Tb[dt],rt=Math.max(0,Q.indexOf("semi")),k=[];{let dt=0;Q.forEach(H=>{const ht=ct(H).width;k.push(dt+ht/2),dt+=ht+Sb});const at=ft-k[rt];for(let H=0;H<k.length;H++)k[H]+=at}let tt=k[0]-ct(Q[0]).width/2,Mt=k[k.length-1]+ct(Q[Q.length-1]).width/2;if(q){const dt=Math.max(q[0]-tt,Math.min(0,q[1]-Mt));for(let at=0;at<k.length;at++)k[at]+=dt;tt+=dt,Mt+=dt}const Et=Math.max(Ye(tt-1),Ye(Mt+1)),St=Math.min(Ye(tt-1),Ye(Mt+1)),qt=Ye(ft),kt=C+J*qd,Tt=[],F=[];Q.forEach((dt,at)=>{const H=ct(dt),ht=Od(dt,{color:wb[dt],envMap:p||void 0}),At=ht.userData&&ht.userData.length||H.length,Kt=kt-J*(At/2+(dt==="semi"?.25:0));ht.position.set(Kt,0,Ye(k[at])),ht.rotation.y=-J*Math.PI/2,ht.userData.stageS=k[at],K.add(ht),Tt.push(ht),F.push([Kt,Ye(k[at]),H.width+.8,At+.8])});{const dt=[4.2,.06,.1],at=Et+5,H=St-5,ht=at-H,At=(at+H)/2,Kt=kt+J*.95;Z.box(.22,.15,ht,Kt,.075,At,[.02,.02,.025]),wt.box(.03,.13,ht,Kt+J*.115,.078,At,Cs(dt,1.3),tt),wt.box(.2,.012,ht,Kt,.155,At,Cs(dt,.7),tt),wt.box(2.2,.004,ht,Kt+J*1.25,.008,At,Cs(dt,.1),tt),wt.box(1.1,.004,ht,Kt-J*.7,.008,At,Cs(dt,.05),tt),E&&Xh(Z,wt,{axis:"z",at:C-J*5.6,a0:Et+22,a1:St-16,face:J,h:.12,s:tt})}{const dt=Fo(new Gt(.95,.97,1.05),.075);a.push(dt);const at=[[C-J*19,qt+10,19,.62],[C-J*19,qt-10,19,.62],[C-J*16,qt,23,.8]];for(const[H,ht,At,Kt]of at){const ve=Math.atan2(kt-J*1.5-H,qt-ht)*.35+J*Math.PI/2*.65,Re=ec(Z,wt,{x:H,y:At,z:ht,cols:4,rows:2,yaw:ve,pitch:Kt,s:tt,mast:1});L(K,Re,5.5,16054271,.9),L(K,Re,18,11062527,.1);const we=new D(C+J*.2,0,ht*.6+qt*.4),Ie=new D().subVectors(we,Re),ut=Ie.length();Ie.normalize();const wn=new ge(new cn(.9,6.5,ut,24,1,!0).translate(0,-ut/2,0),dt);wn.position.copy(Re),wn.quaternion.setFromUnitVectors(new D(0,-1,0),Ie),K.add(wn)}if(G)for(let H=0;H<9;H++){const ht=J>0?Et+3.5+H*1.3:St-3.5-H*1.3,At=C-J*4.6;Z.box(.06,1,.06,At,.5,ht,xt.metalL),Z.box(.5,.05,.5,At,.03,ht,xt.metalD);const Kt=ec(Z,wt,{x:At,y:1.2,z:ht,cols:1,rows:1,size:.34,yaw:J*Math.PI/2,pitch:-.08,s:tt});L(K,Kt,1.6,16777215,.8)}}for(const dt of[Z.mesh(o.steel),wt.mesh(o.lamp)])dt&&K.add(dt);{const dt=Ot(),at=new pn(1,1);at.rotateX(-Math.PI/2);for(const[H,ht,At,Kt]of F){const ve=new ge(at,dt);ve.position.set(H,.12,ht),ve.scale.set(Kt+2.5,1,At+2.5),ve.renderOrder=3,K.add(ve)}}return v.push({z:qt,x:C,side:J}),{vehicles:Tt,s0:tt,s1:Mt}}function Ot(){return m||(m=new Xe({uniforms:{uBeat:Fn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q);
          float a = exp(-r*r*2.2)*0.08 + exp(-pow((r-0.86)*9.0,2.0))*0.025;
          gl_FragColor = vec4(vec3(1.0,0.96,1.05)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:yn,depthWrite:!1}),a.push(m),m)}function Jt(K){const gt=et(K,He.fleet.lineup,He.fleet.sCenter,0);f.lineup.push(...gt.vehicles);for(const[ft,C,E,G]of[[9,5.5,16774386,420],[-6,13,15660287,700]]){const q=new ad(E,G,45,1.6);q.position.set(ft,C,-He.fleet.sCenter),s.add(q),d.push({l:q,k:G}),g.push({l:q,dx:ft})}}{const gt=Math.max(220,Ye(Ft.end+200)+200),ft=Math.min(Ye(Ft.end+200),-Ft.flip0-400),C=Ye(Ft.flip0),E=170,G=Ye(Ft.fleet.sCenter),q=Hr(4711);for(let J=gt;J>ft;J-=420){const Z=[],wt=[{x0:44,x1:70,h0:16,h1:70,tall:.18,d0:12,d1:26},{x0:80,x1:170,h0:40,h1:170,tall:.25,d0:18,d1:34},{x0:190,x1:420,h0:70,h1:300,tall:.3,d0:24,d1:50},{x0:450,x1:800,h0:90,h1:380,tall:.3,d0:30,d1:70}],Q=tt=>tt.d1*.5;for(const tt of[-1,1])for(const[Mt,Et]of wt.entries()){let St=J;for(;St>J-420;){const qt=Et.d0+r()*(Et.d1-Et.d0),kt=3+r()*10*(Mt+1),Tt=St-qt/2;St-=qt+kt;const F=Math.abs(Tt-C)<E;let dt=tt*(Et.x0+r()*(Et.x1-Et.x0));F&&tt>0&&dt<110&&(dt=110+r()*60);const at=F&&tt<0;at&&dt>-240&&(dt=-(240+q()*140));const H=Math.abs(Tt-G)<170&&tt<0;if(H&&dt>-260&&(dt=-(260+q()*120)),Tt>-Ft.hangarBack+30&&Tt<420&&Math.abs(dt)<60)continue;tt>0&&dt-Q(Et)<Fc.x+16&&(dt=Fc.x+16+Q(Et)+r()*18);let ht=Et.h0+Math.pow(r(),1.6)*(Et.h1-Et.h0);r()<Et.tall&&(ht*=1.5);const At=Et.d0+r()*(Et.d1-Et.d0),Kt=Math.floor(r()*4),ve=.25+r()*.45,Re=Math.floor(r()*4),we=H?Math.min(ht,16+ht*.1):at?Math.min(ht,22+ht*.15):ht;if(Z.push([dt,Tt,At,we,qt,r(),Kt,ve,Re]),ht>80&&r()<.7){const Ie=.55+r()*.25,ut=[dt,Tt,At*Ie,ht*(.22+r()*.3),qt*Ie,r(),Kt,ve,(Re+1)%4,ht];!H&&!at&&Z.push(ut)}}}const ct=new Bu(new nn(1,1,1).translate(0,.5,0),o.bld,Z.length),rt=new Float32Array(Z.length*4);Z.forEach(([tt,Mt,Et,St,qt,kt,Tt,F,dt,at=0],H)=>{Ki.compose($c.set(tt,at,Mt),zc.identity(),If.set(Et,St,qt)),ct.setMatrixAt(H,Ki),rt.set([kt,Tt,F,dt],H*4)}),ct.geometry.setAttribute("aB",new vs(rt,4)),ct.computeBoundingSphere(),h("city",-J-300,-J+420+300).add(ct)}}const oe=[];{const K=h("highways",-1e9,1e9),gt=180,ft=Ye(Ft.cityEnd)+50,C=gt-ft,E=Ye(Ft.flip0),G=new Fe,q=new Fe;for(const qt of[-1,1]){const kt=qt>0?112:-64,Tt=15,F=Ye(Ft.fleet.sCenter),dt=qt>0?[[gt,E+160],[E-160,ft]]:[[gt,F+140],[F-140,ft]];for(const[at,H]of dt){const ht=at-H,At=(at+H)/2;G.box(12,1,ht,kt,Tt,At,xt.conc,-At),G.box(.4,1,ht,kt-6,Tt+.9,At,xt.conc,-At),G.box(.4,1,ht,kt+6,Tt+.9,At,xt.conc,-At),q.box(.12,.12,ht,kt-6,Tt+1.45,At,xt.org,-At),q.box(.12,.12,ht,kt+6,Tt+1.45,At,xt.org,-At),q.box(.1,.1,ht,kt-6.1,Tt-.55,At,xt.vio,-At),q.box(.1,.1,ht,kt+6.1,Tt-.55,At,xt.vio,-At);for(let Kt=at-20;Kt>H;Kt-=48)G.box(2.2,Tt,2.2,kt,Tt/2,Kt,xt.conc),q.box(2.3,.15,2.3,kt,4,Kt,xt.vio,-Kt)}}K.add(G.mesh(o.matte)),K.add(q.mesh(o.neonSoft));const J=150,Z=new nn(1.9,.35,1.2),wt=new We({color:16777215,fog:!0}),Q=new Bu(Z,wt,J*4),ct=new Gt(2.2,1.9,1.5),rt=new Gt(2.6,.1,.12);let k=0;for(const qt of[-1,1])for(const kt of[-1,1]){const Tt=Hr(qt*7+kt*3+20);for(let F=0;F<J;F++,k++)oe.push({i:k,x:(qt>0?112:-64)+kt*2.6,y:16,z0:Tt()*C,v:26+Tt()*14,dir:kt,zA:gt,len:C,skip:qt>0,gap:qt>0?[E-160,E+160]:[Ye(Ft.fleet.sCenter)-140,Ye(Ft.fleet.sCenter)+140]}),Q.setColorAt(k,kt>0?ct:rt)}Q.frustumCulled=!1,K.add(Q),oe.mesh=Q;const tt=Fo(new Gt(.6,.7,1.4),.1);a.push(tt);const Mt=Fo(new Gt(1.4,.3,1),.1);a.push(Mt);const Et=new cn(.6,9,520,20,1,!0).translate(0,260,0);oe.beams=[];const St=Hr(99);for(let qt=0;qt<12;qt++){const kt=120+qt*(Ft.cityEnd-200)/12,Tt=qt%2?1:-1,F=new ge(Et,qt%3?tt:Mt);F.position.set(Tt*(110+St()*160),0,Ye(kt)),F.userData.ph=St()*6.28,F.userData.sd=Tt,F.frustumCulled=!1,K.add(F),oe.beams.push(F)}}const ce={lasers:[]},lt=new rn;lt.name="flipRamp";{const K=h("flip",Ft.flip0-420,Ft.flipLip+300);K.add(lt);const gt=new Fe,ft=new Fe;let C=0;for(let Tt=Math.max(Ft.landingS+90,Ft.flip0-560);Tt<Ft.flip0-330;Tt+=45,C++){const F=-Tt;ii(gt,6,14,.9,.9,0,12.1,F,xt.metal,Tt,-1e3,0,-Math.PI/2),ii(ft,6,13.2,.16,.2,0,12.1,F+.5,C%2?xt.mag:xt.vio,Tt,-1e3,0,-Math.PI/2),ii(ft,6,14.8,.1,.2,0,12.1,F+.5,xt.cyan,Tt,-1e3,0,-Math.PI/2)}const E=ef,G=Hd(Ft.flip0-.5,Ft.flipLip-.002,.25),q=new Fe,J=new Fe,Z=Mb(E,Ft.flip0,Ft.flipLip-Ft.flip0),wt=new mn({color:3816513,roughness:.8,metalness:.2,side:Ve});a.push(Z,wt);{const Tt=Mr(G,()=>[[-E,.03],[E,.03]]);Tt.setAttribute("aDk",Tt.attributes.uv.clone()),lt.add(new ge(Tt,Z)),lt.add(new ge(Mr(G,()=>[[E,0],[E,-.42],[-E,-.42],[-E,0]]),wt))}for(const Tt of[-1,1])q.add(Mr(G,()=>[[Tt*E,0],[Tt*E,.1],[Tt*(E+.1),.1],[Tt*(E+.1),-.5],[Tt*(E-.2),-.5]]),null,[.09,.09,.1]);const Q=22,ct=Ft.flip0+Math.min(2.3,(Ft.flipLip-Ft.flip0)*.08),rt=Ft.flipLip-.04,k=[];for(let Tt=0;Tt<=Q;Tt++){const F=io(ct+(rt-ct)*Tt/Q),dt=Math.atan2(F.fwd.y,-F.fwd.z),at=.7+(1.9+.04*Math.max(0,Un.height-18))*Ks(0,1,dt);k.push({th:dt,pin:F.pos.clone().addScaledVector(F.up,-.45),pout:F.pos.clone().addScaledVector(F.up,-.45-at)})}const tt=[.1,.1,.115],Mt=[.16,.16,.18],Et=(Tt,F)=>new D(F,Tt.y,Tt.z);for(const Tt of[-1,1]){const F=Tt*(E-.25);for(let dt=0;dt<k.length;dt++){const at=k[dt];if(ri(q,Et(at.pin,F),Et(at.pout,F),.14,tt),dt+1<k.length){const H=k[dt+1];ri(q,Et(at.pout,F),Et(H.pout,F),.26,Mt),ri(q,Et(at.pin,F),Et(H.pin,F),.16,tt),ri(q,dt%2?Et(at.pin,F):Et(at.pout,F),dt%2?Et(H.pout,F):Et(H.pin,F),.1,tt)}}}for(let Tt=0;Tt<k.length;Tt++){const F=k[Tt];if(ri(q,Et(F.pout,-1.65),Et(F.pout,E-.25),.14,tt),Tt%2===0&&Tt+2<k.length){const dt=k[Tt+2];ri(q,Et(F.pout,-1.65),Et(dt.pout,E-.25),.08,tt),ri(q,Et(F.pout,E-.25),Et(dt.pout,-1.65),.08,tt)}}const St=k.filter((Tt,F)=>F%2===0&&Tt.pout.y>1.5&&Tt.th>.55&&Tt.th<Math.PI/2+.05);for(const Tt of[-1,1]){const F=Tt*(E-.25);St.forEach((H,ht)=>{ri(q,Et(H.pout,F),new D(F,0,H.pout.z),.22,Mt),q.box(.7,.2,.7,F,.1,H.pout.z,xt.metalD);const At=St[ht+1];if(!At)return;const Kt=Math.min(H.pout.y,At.pout.y);for(let ve=2.5,Re=0;ve<Kt-.5;ve+=3,Re++){ri(q,new D(F,ve,H.pout.z),new D(F,ve,At.pout.z),.1,tt);const we=Math.min(Kt,ve+3);ri(q,new D(F,Re%2?ve:we,H.pout.z),new D(F,Re%2?we:ve,At.pout.z),.07,tt)}});const dt=k[k.length-1],at=k[Math.round(Q*.72)];ri(q,Et(dt.pout,F),new D(F,0,dt.pout.z-7.5),.24,Mt),ri(q,Et(at.pout,F),new D(F,0,at.pout.z-6),.2,Mt),q.box(.8,.2,.8,F,.1,dt.pout.z-7.5,xt.metalD),q.box(.8,.2,.8,F,.1,at.pout.z-6,xt.metalD)}for(const Tt of St)for(let F=2.5;F<Tt.pout.y-.5;F+=6)ri(q,new D(-1.65,F,Tt.pout.z),new D(E-.25,F,Tt.pout.z),.1,tt);{const Tt=-Ft.flip0-Un.R*.6;for(const[F,dt,at]of[[-24,Tt+2,26],[-26,Tt-14,32],[-7,Tt+70,14]]){const H=ec(q,J,{x:F,y:at,z:dt,cols:4,rows:3,yaw:Math.atan2(-F,Tt-dt),pitch:.5,s:Ft.flip0,mast:1});L(K,H,10,15922943,1),L(K,H,30,10471679,.16)}}const qt=Un.zLand,kt=Un.xLand;{const Tt=[3.6,.05,.09],F=kt-4.4,dt=qt+16,at=Math.min(qt-16,-Ft.flip0+2);q.box(.2,.13,dt-at,F,.065,(dt+at)/2,[.02,.02,.025]),J.box(.03,.06,dt-at,F+.105,.075,(dt+at)/2,Tt,Ft.flip0),J.box(1.4,.004,dt-at,F+.85,.008,(dt+at)/2,Cs(Tt,.06),Ft.flip0),ft.box(.09,.012,46,kt-1.6,.03,qt-4,[.32,.32,.34],Ft.flipLip);const H=Fo(new Gt(.95,.97,1.05),.06);a.push(H);const ht=kt+9,At=qt+30,Kt=17,ve=-Ft.flip0-(Un.zLip!==void 0?(-Un.zLip-Ft.flip0)*.5:5),Re=ec(q,J,{x:ht,y:Kt,z:At,cols:4,rows:2,yaw:Math.atan2(0-ht,ve-At),pitch:.38,s:Ft.flip0,mast:1});L(K,Re,6,16054271,.9),L(K,Re,20,11062527,.1);const we=new D(1.5,Un.height*.35,ve),Ie=new D().subVectors(we,Re),ut=Ie.length();Ie.normalize();const wn=new ge(new cn(.9,7.5,ut,24,1,!0).translate(0,-ut/2,0),H);wn.position.copy(Re),wn.quaternion.setFromUnitVectors(new D(0,-1,0),Ie),K.add(wn)}K.add(q.mesh(o.steel)),K.add(J.mesh(o.lamp)),K.add(gt.mesh(o.metalD)),K.add(ft.mesh(o.neonD));for(const[Tt,F,dt,at]of[[18,26,-Ft.flip0-2,380],[-16,22,-Ft.flip0+10,260],[kt+6,14,qt+10,450]]){const H=new ad(15922431,at,70,1.5);H.position.set(Tt,F,dt),s.add(H),d.push({l:H,k:at})}}{const K=h("boost",Ft.boost0-200,Ft.takeoff+300),gt=new Fe,ft=new Fe;let C=0;for(let q=Math.max(Ft.boost0-30,Ft.retStraight-40);q<Ft.takeoff;q+=16,C++){const J=io(q),Z=J.pos.z,wt=J.pos.x,Q=(q-Ft.boost0)/(Ft.takeoff-Ft.boost0),ct=-J.fwd.z,rt=88+Jr(Q,0,1)*8,k=4+Jr(Q,0,1)*10;for(const tt of[-1,1]){if(tt>0&&q>Ft.takeoff-150)continue;const Mt=wt+ct*tt*12;gt.box(1.2,k,1.2,Mt,k/2,Z,xt.metal),ft.box(.16,k-.5,.16,Mt-ct*tt*.65,k/2,Z,Vd(xt.blue,xt.cyanW,Jr(Q,0,1)),q,rt),ft.box(1.4,.2,1.4,Mt,k+.1,Z,xt.cyanW,q,rt)}C%2===0&&ii(ft,8,11.5,.14,.2,wt,9.6,Z,Vd(xt.blue,xt.org,Jr(Q,0,1)),q,rt)}const E=Ye(Ft.takeoff),G=Ql(Ft.takeoff);for(let q=0;q<8;q++)ft.box(19,.05,.2,tf(Ft.takeoff),.06,E-G*(2+q*2.2),xt.org,Ft.takeoff,90+q*.5);K.add(gt.mesh(o.metal)),K.add(ft.mesh(o.neon))}const Y=[],V=[];{const K=h("flight",Ft.boost1-400,Ft.finish+400),gt=new Fe,ft=new Fe,C=new Fe,E=new Fe,G=new Xe({uniforms:{uBeat:Fn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q*vec2(1.0,0.8));
          float a = exp(-r*r*2.4)*0.2 + exp(-pow((r-0.86)*9.0,2.0))*0.08*(0.6+0.4*exp(-fract(uBeat)*4.0));
          gl_FragColor = vec4(vec3(1.0,0.92,1.2)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:yn,depthWrite:!1});a.push(G);const q=new pn(1,1);q.rotateX(-Math.PI/2);for(const Z of He.fleetRows){if(Z.finale){const k=et(K,Z.vehicles,Z.s,tf(Z.s),{extent:[Z.s-Z.depth/2,Z.s+Z.depth/2],side:Ql(Z.s)>0?-1:1});f.rows.push({row:Z,vehicles:k.vehicles});continue}const wt=[];for(const k of Z.vehicles){const tt=Od(k.kind,p?{envMap:p}:{});tt.position.set(k.x,0,Ye(k.s)),tt.rotation.y=k.yaw,K.add(tt),wt.push(tt)}const Q=Ye(Z.s),ct=Ql(Z.s),rt=new ge(q,G);rt.position.set(en,.08,Q),rt.scale.set(24,1,Z.depth+6),rt.renderOrder=3,K.add(rt),Xh(C,E,{axis:"x",at:Q-ct*(Z.depth/2+.9),a0:en-10.2,a1:en+10.2,face:-ct,s:Z.s}),Xh(C,E,{axis:"x",at:Q+ct*(Z.depth/2+.9),a0:en-10.2,a1:en+10.2,face:ct,h:.1,s:Z.s});for(const k of[-1,1])gt.box(.4,4.5,.4,en+k*11.5,2.25,Q,xt.metal,Z.s),ft.box(.1,4.2,.1,en+k*11.2,2.25,Q+.25,Z.finale?xt.org:xt.cyan,Z.s),ft.box(.6,.5,.6,en+k*11.5,4.7,Q,xt.wht,Z.s);f.rows.push({row:Z,vehicles:wt})}K.add(gt.mesh(o.metal)),K.add(ft.mesh(o.neon)),K.add(C.mesh(o.steel)),K.add(E.mesh(o.lamp));const J=Hr(4242);for(let Z=Ft.boost1-100;Z<Ft.finish+300;Z+=34+J()*30){const wt=Ye(Z);for(const Q of[-1,1]){if(J()<.25)continue;if(Q<0){J();continue}const ct=en+(75+J()*160),rt=18+J()*70,k=2.5+J()*5;gt.box(k,rt,k,ct,rt/2,wt,xt.metalD),gt.box(k*1.6,3,k*1.6,ct,1.5,wt,xt.metal);const tt=[xt.cyan,xt.mag,xt.org,xt.vio][Math.floor(J()*4)];for(const St of[-1,1])ft.box(.14,rt,.14,ct+St*k/2,rt/2,wt+k/2,tt,Z);ft.box(k+.2,.2,k+.2,ct,rt,wt,tt,Z);const Mt=Math.floor(rt/14);for(let St=1;St<=Mt;St++)ft.box(k+.1,.12,k+.1,ct,St*14-2,wt,Cs(tt,.7),Z);if(J()<.55){const St=6+J()*14,qt=k*.6;gt.box(qt,St,qt,ct,rt+St/2,wt,xt.metalD),ft.box(qt+.15,.18,qt+.15,ct,rt+St,wt,tt,Z),gt.box(.25,10,.25,ct,rt+St+5,wt,xt.metalL),ft.box(.6,.6,.6,ct,rt+St+10.2,wt,xt.red,Z)}else for(const St of[-1,1])ft.box(.1,rt*.8,.1,ct+St*k*.2,rt*.4,wt+k/2+.05,xt.wht,Z)}}K.add(gt.mesh(o.metal)),K.add(ft.mesh(o.neon));{const Z=new Fe,wt=new Fe;let Q=0;for(let rt=Ft.flight0+140;rt<Ft.finish+200;rt+=230,Q++){const k=Ye(rt),tt=[xt.mag,xt.cyan,xt.org][Q%3];if(!(k>Ft.hangarBack-30&&k<-Ft.hangarBack+40)){ii(Z,6,24,1.6,2.2,en,4,k,xt.metal,rt,-1e3,0,-Math.PI/2),ii(wt,6,22.8,.26,.3,en,4,k+1.2,tt,rt,-1e3,0,-Math.PI/2),ii(wt,6,25.2,.16,.3,en,4,k+1.2,xt.wht,rt,-1e3,0,-Math.PI/2);for(let Mt=0;Mt<12;Mt++){const Et=Mt/12*Math.PI*2;wt.box(1,1,.4,en+Math.cos(Et)*24,4+Math.sin(Et)*24,k+1.3,xt.wht,rt,96+Mt*.25)}}}const ct=Hr(777);for(let rt=Ft.flight0+60;rt<Ft.finish+100;rt+=55+ct()*40){const k=ct()<.5?-1:1,tt=en+(k>0?28:26)+ct()*40,Mt=16+ct()*26,Et=Ye(rt),St=10+ct()*10,qt=7+ct()*6,kt=[xt.cyan,xt.mag,xt.vio,xt.org][Math.floor(ct()*4)];if(Z.box(St,1.2,qt,tt,Mt,Et,xt.metal,rt),Z.box(St*.6,1.6,qt*.6,tt,Mt-1.3,Et,xt.metalD,rt),wt.box(St+.2,.14,.14,tt,Mt+.62,Et+qt/2,kt,rt),wt.box(St+.2,.14,.14,tt,Mt+.62,Et-qt/2,kt,rt),wt.box(.14,.14,qt,tt-St/2,Mt+.62,Et,kt,rt),wt.box(.14,.14,qt,tt+St/2,Mt+.62,Et,kt,rt),wt.box(St*.5,.08,qt*.5,tt,Mt-2.12,Et,xt.cyanW,rt),ct()<.6){const Tt=4+ct()*8;Z.box(1.4,Tt,1.4,tt,Mt+.6+Tt/2,Et,xt.metalD,rt),wt.box(1.6,.16,1.6,tt,Mt+.6+Tt,Et,kt,rt),wt.box(.4,.4,.4,tt,Mt+1.2+Tt,Et,xt.red,rt)}}K.add(Z.mesh(o.metal)),K.add(wt.mesh(o.neon))}}const bt={};{const K=h("finish",Ft.landStrip-300,Ft.end+400),gt=new Fe,ft=new Fe;for(let k=Ft.landStrip;k<Ft.finish;k+=6){const tt=Ye(k);for(const Mt of[-1,1])ft.box(.6,.06,1.6,en+Mt*6.5,.06,tt,xt.wht,k)}const C=Ye(Ft.finish),E=11,G=-Ql(Ft.finish);for(const k of[-1,1]){const tt=en+k*E;gt.box(1.6,16,1.6,tt,8,C,xt.metal);for(let Mt=0;Mt<8;Mt++)ft.box(1.7,.6,1.7,tt,1+Mt*1.9,C,Mt%2?xt.wht:[.05,.05,.06],Ft.finish);ft.box(.14,16,.14,tt-k*.85,8,C+.85,xt.cyan,Ft.finish)}gt.box(2*E+2,3.4,1.2,en,15.5,C,xt.metal);for(let k=0;k<24;k++)for(let tt=0;tt<2;tt++)(k+tt)%2===0&&ft.box(.92,.5,.1,en-E+.5+k*.92,18-tt*.5-0+0,C+.62,xt.wht,Ft.finish);for(const[k,tt,Mt]of[[-6,19,xt.mag],[-16,23,xt.cyan],[-28,27,xt.vio]])ii(gt,6,tt,1,1,en,10.5,C+G*k,xt.metal,Ft.finish,-1e3,0,-Math.PI/2),ii(ft,6,tt-.7,.18,.2,en,10.5,C+G*(k+.55),Mt,Ft.finish,126,0,-Math.PI/2),ii(ft,6,tt+.7,.1,.2,en,10.5,C+G*(k+.55),xt.wht,Ft.finish,127,0,-Math.PI/2);if(ft.box(2*E+2,.15,.15,en,13.7,C+.62,xt.mag,Ft.finish),ft.box(2*E+2,.15,.15,en,17.3,C+.62,xt.mag,Ft.finish),u)for(const k of[1,-1]){const tt=Vh(u,7,13,3,2.6);tt.position.set(en,15.5,C+k*.62),k<0&&(tt.rotation.y=Math.PI),K.add(tt)}const q=[],J=[],Z=Hr(77);for(const k of[-1,1]){for(let tt=0;tt<6;tt++){const Mt=en+k*(16+tt*2.4),Et=.6+tt*1.3;gt.box(2.4,Et*2,110,Mt,Et,C-G*30,xt.conc),ft.box(.1,.08,110,Mt-k*1.2,Et*2+.02,C-G*30,tt%2?xt.cyan:xt.mag,Ft.finish);for(let St=0;St<120;St++){q.push(Mt+(Z()-.5)*1.6,Et*2+.5+Z()*.3,C-G*30+(Z()-.5)*108);const qt=[[2,2,2.2],[2.2,.3,1.4],[.3,1.6,2.2],[2.4,1.3,.3]][Math.floor(Z()*4)];J.push(...qt)}}gt.box(1,14,110,en+k*31,7,C-G*30,xt.metalD)}const wt=new $e;wt.setAttribute("position",new Me(q,3)),wt.setAttribute("color",new Me(J,3));const Q=new by(wt,new sm({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!0}));K.add(Q),K.add(gt.mesh(o.matte)),K.add(ft.mesh(o.neon));const ct=Fo(new Gt(.4,1,2),.075);a.push(ct);const rt=Fo(new Gt(2,.35,1.3),.075);a.push(rt),bt.beams=[];for(let k=0;k<8;k++){const tt=new ge(new cn(.3,2.6,300,16,1,!0).translate(0,150,0),(k>>1)%2?rt:ct);tt.position.set(en+(k%2?1:-1)*(24+(k>>1)*5),0,C+G*(10-(k>>1)*22)),tt.userData.k=k,tt.frustumCulled=!1,K.add(tt),bt.beams.push(tt)}}t&&t.add(s);let _t=null;const Rt=Fa.clone(),zt=db.clone(),Ht=new Gt;let re=0;function yt(K,gt,ft){let C,E=null;K&&typeof K=="object"?(E=K,C=K.t):typeof K=="number"&&gt&&typeof gt=="object"?(E=gt,C=gt.t??(_t&&_t.t)??K):typeof K=="number"&&typeof gt=="number"?(C=K<=.1&&gt>K?gt:K,E=ft||null):typeof K=="number"&&(C=K),(C==null||!isFinite(C))&&(C=_t&&isFinite(_t.t)?_t.t:re),re=C;const G=C/zm;Fn.uBeat.value=G,Fn.uTime.value=C;const q=Ks(86,101,G)*(1-Ks(140,150,G));if(Fn.uFlight.value=q,Ht.copy(Rt).lerp(zt,q),t&&(t.fog&&t.fog.color&&t.fog.color.copy(Ht),t.background&&t.background.isColor&&t.background.copy(Ht)),R.uFog.value.copy(Ht),pt&&pt.material&&pt.material.uniforms){const Q=pt.material.uniforms;Q.fogColor.value.copy(Ht),t&&t.fog&&(Q.fogDensity.value=t.fog.density??Hh)}for(const Q of Ut.strips){const ct=G-Q.on,rt=ct<0?0:1+3*Math.exp(-ct*4);Q.mat.color.setRGB(2.4*rt,2.4*rt,2.7*rt)}const J=Ks(us(14.5),us(16.2),C);for(const Q of Ut.door)Q.g.position.x=Q.sd*(6.5+J*13.5);for(const Q of Ut.tree){let ct=0;Q.id==="pre"?ct=G>=6&&G<16?1:0:Q.id==="a1"?ct=G>=10&&G<16?1:0:Q.id==="a2"?ct=G>=12&&G<16?1:0:Q.id==="a3"?ct=G>=14&&G<16?1:0:Q.id==="go"&&(ct=G>=16&&G<24?1+2*Math.exp(-(G-16)*2):0),Q.mat.color.copy(Q.col).multiplyScalar(ct*1.4),ct||Q.mat.color.setRGB(.02,.02,.03)}N.intensity=300*(1-Ks(us(17),us(22),C))*Ks(0,us(2),C+us(1)),M.mat&&(M.mat.uniforms.uOn.value=Ks(us(12),us(15.5),C));{const Q=us(16),ct=Pn&&isFinite(Pn.zero60)?Pn.zero60:Q+.81;for(const rt of M.beams){const k=rt.k?ct:Q,tt=C-k,Mt=(C>us(12)?.35:0)+(tt>=0?3.5*Math.exp(-tt*2.5):0);rt.mat.color.setRGB(2.4*Mt,.06*Mt,.08*Mt)}}if(oe.mesh){const Q=oe.mesh;for(const ct of oe){let rt=ct.zA-((ct.z0+ct.dir*-ct.v*C)%ct.len+ct.len)%ct.len;const k=ct.gap&&rt>ct.gap[0]&&rt<ct.gap[1];Ki.makeTranslation(ct.x,k?-200:ct.y,rt),Q.setMatrixAt(ct.i,Ki)}Q.instanceMatrix.needsUpdate=!0;for(const ct of oe.beams){const rt=ct.userData.ph;ct.rotation.set(.35*Math.sin(C*.4+rt),0,ct.userData.sd*(.25+.25*Math.sin(C*.33+rt*1.7)))}}for(const Q of ce.lasers)Q.m.rotation.z=Math.sin(C*2.2+Q.k*1.1)*.5+(Q.k%2?.35:-.35);if(ce.loopLasers)for(const Q of ce.loopLasers){const ct=Q.userData.k;Q.rotation.set(Math.sin(C*.9+ct)*.5,0,(ct<5?-1:1)*(.25+.3*Math.sin(C*.7+ct*.8)))}const Z=i||E&&E.camera||null;if(bt.beams)for(const Q of bt.beams){const ct=Q.userData.k;Q.rotation.set(Math.sin(C*.8+ct)*.35,0,Math.sin(C*.6+ct*1.3)*.4)}let wt=null;if(Z&&Z.position?wt=Z.position.z:_t&&_t.pos&&(wt=_t.pos.z),wt!=null&&v.length&&g.length){let Q=v[0];for(const ct of v)Math.abs(ct.z-wt)<Math.abs(Q.z-wt)&&(Q=ct);for(const ct of g)ct.l.position.x=Q.x+ct.dx*(Q.side||1),ct.l.position.z=Q.z}for(const Q of d)Q.l.intensity=wt==null?Q.k:Q.k*(1-Ks(60,140,Math.abs(Q.l.position.z-wt)));if(wt!=null){let Q=-1;Z&&Z.matrixWorld&&(Q=-Z.matrixWorld.elements[10]);const ct=Q>.15?2600:Q<-.15?500:1500,rt=Q<-.15?2600:Q>.15?500:1500;for(const k of l)k.g.visible=k.zLo<=wt+ct&&k.zHi>=wt-rt}}const Nt=new D,z=(K,gt,ft,C,E)=>{const G=ft<1,q=K.z,J=K.x,Z=Jr(gt.z,q-40,q+30),wt=q+(Z-q)*(G?E[0]:E[1]);return C.pos.set(J+qd+(G?26:25),3.2,wt+2),C.look.set(J,G?7.2:6,wt-.5),C.fov=G?58:42,C},jt=()=>({pos:new D,look:new D,fov:50}),Vt={fleetJump(K,gt=9/16,ft=jt()){return z(v[0]||{z:Ye(Ft.fleet.sCenter),x:0},K,gt,ft,[.6,.35])},finale(K,gt=9/16,ft=jt()){return z(v[v.length-1]||{z:Ye(Ft.finish),x:en},K,gt,ft,[.6,.35])},flipDescent(K,gt=9/16,ft=jt()){const C=gt<1,E=-Ft.flip0-Un.R,G=Un.zLand;return ft.pos.set(Un.xLand+(C?9:14),4.5,G+(C?34:26)),Nt.set(Un.xLand*.45,Math.max(6,Math.min(K.y,Un.height)*.7+2),E*.35+K.z*.65),ft.look.copy(Nt),ft.fov=C?62:46,ft}};if(e&&t&&e.compile)try{const K=new Mi(60,1,.1,6e3);e.compile(t,i||K)}catch{}const se={group:s,envMap:I,course:He,layout:Ft,rings:Y,pylons:V,reflector:pt,fleet:f,flipRamp:lt,shots:Vt,update:yt,setGameplayState(K){_t=K},setCamera(K){i=K},trackFrame:io,groundY:ub,dispose(){t&&t.remove(s),s.traverse(K=>{K.geometry&&K.geometry.dispose()});for(const K of a)K.dispose&&K.dispose();pt&&pt.dispose&&pt.dispose()}};return yt(0),se}const ze=D,An=-2.26,$i=2.22,Tr=-1.36,Er=1.32,Ts=.375,Pr=.395,Yd=.855,Kd=.775,ds=.112;function _n(n,t){if(t<=n[0][0])return n[0][1];const e=n.length;if(t>=n[e-1][0])return n[e-1][1];let i=1;for(;i<e-1&&t>n[i][0];)i++;const s=n[i-1][0],r=n[i][0],a=n[i-1][1],l=n[i][1],c=r-s,h=(p,M)=>(n[M][1]-n[p][1])/(n[M][0]-n[p][0]),o=h(i-1,i),u=p=>{if(p<=0)return h(0,1);if(p>=e-1)return h(e-2,e-1);const M=h(p-1,p),w=h(p,p+1);return M*w<=0?0:2*M*w/(M+w)};let f=u(i-1),d=u(i);o===0&&(f=0,d=0);const v=(t-s)/c,g=v*v,m=g*v;return(2*m-3*g+1)*a+(m-2*g+v)*c*f+(-2*m+3*g)*l+(m-g)*c*d}function Xa(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const Nn={floorY:[[-2.26,.25],[-2.05,.17],[-1.85,.125],[-1.7,ds],[1.75,ds],[2.22,.2]],floorX:[[-2.26,.45],[-1.9,.65],[0,.8],[2.22,.8]],rockY:[[-2.26,.27],[-1.95,.2],[2,.2],[2.22,.25]],rockX:[[-2.26,.56],[-2,.72],[-1.7,.82],[-1.36,.87],[-.7,.855],[0,.835],[.6,.89],[1.32,.99],[1.8,.99],[2.22,.94]],beltY:[[-2.26,.44],[-1.9,.52],[-1.3,.575],[-.6,.56],[.6,.58],[1.4,.64],[2.22,.665]],beltX:[[-2.26,.6],[-2,.76],[-1.7,.87],[-1.36,.915],[-.75,.895],[-.1,.875],[.6,.95],[1.32,1.06],[1.9,1.05],[2.22,1]],shY:[[-2.26,.64],[-2.05,.735],[-1.8,.778],[-1.36,.79],[-1,.792],[-.5,.79],[.2,.79],[.7,.8],[1,.82],[1.32,.85],[1.8,.848],[2.22,.828]],shX:[[-2.26,.58],[-2,.72],[-1.7,.82],[-1.36,.865],[-.75,.845],[-.1,.832],[.6,.9],[1.32,1],[1.9,.99],[2.22,.94]],finX:[[-2.26,.54],[-1.9,.58],[-1.36,.62],[-.8,.63],[0,.66],[1.32,.67],[2.22,.63]],hoodY:[[-2.26,.625],[-1.9,.6584],[-1.5,.6956],[-1.2,.7234],[-1,.742],[-.6,.758],[.4,.765],[1.2,.785],[1.7,.8],[2.22,.805]]},Ab=n=>_n(Nn.shY,n)+.006,Om=.19,Cb=.54-Om,jc=n=>.24*Math.pow(Math.min(1,Math.abs(n)/.6),2),$d=.63,el=.41,Uf=n=>n>=el?.18*Math.max(0,$d-n):.18*($d-el)+1.27*(el-n),Bm=.7,Rb=n=>1-Xa(An,An+Bm,n),jd=n=>An+jc(n);function km(n){for(const t of[Tr,Er]){const e=n-t;if(Math.abs(e)<Pr)return Ts+Math.sqrt(Pr*Pr-e*e)}return null}const so=7,ai=8,nc=[.14,.38,.62,.84];function nl(n){const t=_n(Nn.floorY,n),e=_n(Nn.floorX,n),i=_n(Nn.rockY,n),s=_n(Nn.rockX,n);let r=_n(Nn.beltY,n);const a=_n(Nn.beltX,n);let l=_n(Nn.shY,n);const c=_n(Nn.shX,n);let h=Ab(n);const o=_n(Nn.finX,n),u=_n(Nn.hoodY,n),f=Xa(An,An+.6,n),d=[[0,t],[e,t]],v=km(n);if(v!==null)r=Math.max(r,v+.004),l=Math.max(l,r+.012),h=Math.max(h,l+.004),d[1][0]=Math.min(e,.62-.02),d.push([.62,i],[.62,v],[(.62+a)/2,v],[a,v],[a,v+(r-v)*.5],[a,r]);else{const M=.018*Xa(An,An+.5,n),w=y=>{const L=(y-nc[0])/(1-nc[0]);return[s+(a-s)*y+(y>nc[0]?M*Math.sin(Math.PI*L):0),i+(r-i)*y]};d.push([s,i],...nc.map(w),[a,r])}const g=.1+.1*(1-Xa(-1,-.6,n))-(.2-Om)*(1-Xa(An,An+.7,n)),m=o-g,p=u+.004+.012*f;return d.push([c,l],[o,h],[m,p],[m*.66,u+(p-u)*.3],[m*.33,u+(p-u)*.06],[0,u]),d}const Pb=[0,0,0,1,1,1,1,1,1,1,1,1,1],Lb=[0,1,2,3,3,3,3,4,5,6,7,7,7],Db=(n,t,e,i)=>i+((n<=ai?Uf(e):0)+jc(t))*Rb(i),Ib={[so]:Nn.beltY,[ai]:Nn.shY,[ai+1]:Nn.shY},Zd=Cb-.07,Hm=n=>[Zd*n,el,An+Uf(el)+jc(Zd)];function nf(n){const t=nl(n).map(([e,i],s)=>{const r=Db(s,e,i,n),a=Ib[s];return[e,a&&r>n+1e-6?i+_n(a,r)-_n(a,n):i,r]});if(Math.abs(n-An)<1e-6){const e=t[ai+2],i=Hm(1),s=t[so],r=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],a=[s[0]-e[0],s[1]-e[1],s[2]-e[2]],l=r[0]*a[1]-r[1]*a[0],c=(r[2]*a[1]-a[2]*r[1])/l,h=(r[0]*a[2]-a[0]*r[2])/l;for(let o=1;o<so;o++)t[o][2]=e[2]+c*(t[o][0]-e[0])+h*(t[o][1]-e[1]);t[0][2]=t[1][2]}return t}function Ub(){const n=[];for(let t=An;t<=$i+1e-6;t+=.05)n.push(t);for(let t=An;t<An+Bm;t+=.025)n.push(t);for(const t of[Tr,Er]){for(let e=-1;e<=1.0001;e+=1/12)n.push(t+Math.sin(e*Math.PI/2)*Pr*.999);n.push(t-Pr-.006,t+Pr+.006)}return n.push($i),n.sort((t,e)=>t-e),n.filter((t,e)=>e===0||t-n[e-1]>.004).filter(t=>t>=An&&t<=$i)}function Fb(){const n=Ub(),t=n.map(nf),e=t[0].length,i=[[],[],[],[]],s=new Map;let r=null;const a=(u,f,d,v)=>{const g=d[0]-f[0],m=d[1]-f[1],p=d[2]-f[2],M=v[0]-f[0],w=v[1]-f[1],y=v[2]-f[2],L=m*y-p*w,I=p*M-g*y,R=g*w-m*M;if(L*L+I*I+R*R<1e-12)return;if(u===2||r===null){i[u].push(...f,...d,...v);return}let U=s.get(r);U||(U={m:u,arr:[]},s.set(r,U)),U.arr.push(...f,...d,...v)},l=n.map(u=>km(u)!==null);for(let u=0;u<t.length-1;u++){const f=t[u],d=t[u+1],v=l[u]||l[u+1];for(let g=0;g<e-1;g++){const m=v&&g>=2&&g<=4?0:Pb[g];r=m+"_"+Lb[g]+(v&&g>=2&&g<=so+1?"a":"");const p=f[g],M=f[g+1],w=d[g+1],y=d[g],L=[-p[0],p[1],p[2]],I=[-M[0],M[1],M[2]],R=[-w[0],w[1],w[2]],U=[-y[0],y[1],y[2]];a(m,p,M,w),a(m,p,w,y),a(m,L,R,I),a(m,L,U,R)}}r=null;const c=t[0],h=t[t.length-1];{const u=ai+2,f=m=>[-m[0],m[1],m[2]],d=(m,p)=>{const M=ur.triangulateShape(p.map(w=>new Xt(w[0],w[1])),[]);for(const[w,y,L]of M){const I=p[w],R=p[y],U=p[L];(R[0]-I[0])*(U[1]-I[1])-(R[1]-I[1])*(U[0]-I[0])<0?a(m,I,R,U):a(m,I,U,R)}},v=Hm,g=[];for(let m=e-1;m>=u;m--)g.push(c[m]);g.push(v(1),v(-1));for(let m=u;m<e-1;m++)g.push(f(c[m]));d(3,g),d(1,[v(1),c[1],c[0],f(c[1]),v(-1)]);for(const m of[1,-1]){const p=[];for(let M=u;M>=1;M--)p.push(m>0?c[M]:f(c[M]));p.push(v(m)),d(2,p)}}const o=[0,(h[0][1]+h[e-1][1])/2,$i];for(let u=0;u<e-1;u++){const f=h[u],d=h[u+1];a(0,o,f,d),a(0,o,[-d[0],d[1],d[2]],[-f[0],f[1],f[2]])}return i.map((u,f)=>{let d=new $e;if(d.setAttribute("position",new Me(u,3)),f===3){let g=0,m=0,p=0;for(let y=0;y<u.length;y+=9){const L=u[y+3]-u[y],I=u[y+4]-u[y+1],R=u[y+5]-u[y+2],U=u[y+6]-u[y],P=u[y+7]-u[y+1],_=u[y+8]-u[y+2];g+=I*_-R*P,m+=R*U-L*_,p+=L*P-I*U}const M=Math.hypot(g,m,p)||1,w=new Float32Array(u.length);for(let y=0;y<u.length;y+=3)w.set([g/M,m/M,p/M],y);return d.setAttribute("normal",new dn(w,3)),d}if(f===2){const g=new Float32Array(u.length);for(const m of[1,-1]){let p=0,M=0,w=0;for(let L=0;L<u.length;L+=9){if(Math.sign(u[L]+u[L+3]+u[L+6])!==m)continue;const I=u[L+3]-u[L],R=u[L+4]-u[L+1],U=u[L+5]-u[L+2],P=u[L+6]-u[L],_=u[L+7]-u[L+1],N=u[L+8]-u[L+2];p+=R*N-U*_,M+=U*P-I*N,w+=I*_-R*P}const y=Math.hypot(p,M,w)||1;for(let L=0;L<u.length;L+=9)if(Math.sign(u[L]+u[L+3]+u[L+6])===m)for(let I=0;I<3;I++)g.set([p/y,M/y,w/y],L+I*3)}return d.setAttribute("normal",new dn(g,3)),d}const v=[];u.length&&v.push(ud(hd(d,1e-5),vi.degToRad(15)));for(const g of s.values()){if(g.m!==f)continue;const m=new $e;m.setAttribute("position",new Me(g.arr,3)),v.push(ud(hd(m,1e-5),vi.degToRad(40)))}for(const g of v)for(const m of Object.keys(g.attributes))m!=="position"&&m!=="normal"&&g.deleteAttribute(m);return ko(v)})}function ro(n,t){t=Math.abs(t);const e=nl(n).slice(ai);if(t>=e[0][0])return e[0][1];for(let i=1;i<e.length;i++){const s=e[i-1],r=e[i];if(t>=r[0])return r[1]+(s[1]-r[1])*((t-r[0])/Math.max(1e-5,s[0]-r[0]))}return e[e.length-1][1]}const zb=-1.12,Jd=1.62,Gm=[[-1.12,.73],[-.75,.93],[-.3,1.08],[.15,1.13],[.6,1.09],[1.1,.97],[1.62,.83]],Ff=[[-1.12,.44],[-.92,.66],[-.6,.76],[-.1,.74],[.5,.64],[1.1,.47],[1.62,.27]],Oc=[.5,.62];function Nb(n,t){const e=_n(Ff,t),i=ro(t,e)-.004,s=ro(t,0)+.01,r=Math.max(s,_n(Gm,t)),a=Math.min(1,Math.abs(n)/e),l=Math.acos(Math.pow(a,1/Oc[0]));return i+(r-i)*Math.pow(Math.sin(l),Oc[1])}const pi=9;function Ob(){const n=[];for(let h=zb;h<=Jd;h+=.04)n.push(h);n.push(Jd);const t=n.map(h=>{const o=_n(Ff,h),u=ro(h,o)-.004,f=ro(h,0)+.01,d=Math.max(f,_n(Gm,h)),v=[];for(let g=0;g<pi;g++){const m=g/(pi-1),p=m*Math.PI/2,M=o*Math.pow(Math.cos(p),Oc[0]),w=u+(d-u)*Math.pow(Math.sin(p),Oc[1]);v.push([g===pi-1?0:M,w,h])}return v}),e=[],i=[],s=t.length;for(const h of[1,-1])for(let o=0;o<s;o++)for(let u=0;u<pi;u++){const f=t[o][u];e.push(f[0]*h,f[1],f[2])}const r=(h,o,u)=>h*s*pi+o*pi+u;for(let h=0;h<s-1;h++)for(let o=0;o<pi-1;o++){const u=r(0,h,o),f=r(0,h,o+1),d=r(0,h+1,o+1),v=r(0,h+1,o);i.push(u,f,d,u,d,v);const g=r(1,h,o),m=r(1,h,o+1),p=r(1,h+1,o+1),M=r(1,h+1,o);i.push(g,p,m,g,M,p)}{const h=t[s-1],o=e.length/3;e.push(0,h[0][1],h[0][2]);for(const u of[1,-1])for(let f=0;f<pi;f++)e.push(h[f][0]*u,h[f][1],h[f][2]);for(let u=0;u<pi-1;u++)i.push(o,o+1+u,o+2+u),i.push(o,o+1+pi+u+1,o+1+pi+u)}const a=new $e;a.setAttribute("position",new Me(e,3)),a.setIndex(i),a.computeVertexNormals();const l=a.attributes.normal;for(let h=0;h<s;h++){const o=r(0,h,pi-1),u=r(1,h,pi-1),f=(l.getY(o)+l.getY(u))/2,d=(l.getZ(o)+l.getZ(u))/2,v=Math.hypot(f,d)||1;l.setXYZ(o,0,f/v,d/v),l.setXYZ(u,0,f/v,d/v)}const c=t.map(h=>[h[0],h[Math.round(pi*.35)],h[pi-3],h[pi-1]]);return{geo:a,secs:c}}function Rs(n,t,e){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new Gc(i);return s.colorSpace=Mn,s.anisotropy=4,s}const Bb=()=>Rs(256,112,(n,t,e)=>{const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#f2f3f4"),i.addColorStop(1,"#c9ccd0"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="#3a3e44",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#4a4f57",n.font="700 64px Arial Narrow, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("RDSTR",t/2,e/2+4)}),qh=n=>Rs(128,128,(t,e,i)=>{const s=t.createRadialGradient(e/2,i/2,0,e/2,i/2,e/2);for(const[r,a]of n)s.addColorStop(r,a);t.fillStyle=s,t.fillRect(0,0,e,i)}),kb=()=>Rs(128,128,(n,t,e)=>{const i=n.createRadialGradient(t/2,e/2,t*.08,t/2,e/2,t/2);i.addColorStop(0,"rgba(40,42,46,0.7)"),i.addColorStop(.55,"rgba(70,74,80,0.35)"),i.addColorStop(.9,"rgba(60,64,70,0.4)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,e)});function Hb(n){const t=new dl;t.background=new Gt(263176);const e=new ge(new nn(60,30,60),new We({color:460556,side:Qn}));e.position.y=10,t.add(e);const i=(l,c,h,o,u,f,d,v=0)=>{const g=new ge(new nn(c,h,o),new We({color:l}));g.position.set(u,f,d),g.rotation.y=v,t.add(g)};i(new Gt(2.2,2.2,2.4),1.2,.2,40,-4,14,0),i(new Gt(2.2,2.2,2.4),1.2,.2,40,4,14,0),i(new Gt(3.5,.3,2.6),.4,1.2,50,-29,2,0),i(new Gt(.2,2.4,3.6),.4,1.2,50,29,2,0),i(new Gt(3.5,1.2,.2),50,.8,.4,0,.6,-29),i(new Gt(1.6,1.5,1.7),50,.5,.4,0,3,29),i(new Gt(.2,1.2,2),50,.4,.4,0,.4,29),i(new Gt(1.8,1.8,2),50,.15,.4,0,6,-29);const s=new ge(new pn(60,60),new We({color:723730}));s.rotation.x=-Math.PI/2,s.position.y=-4,t.add(s);const r=new ao(n),a=r.fromScene(t,.035);return r.dispose(),t.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),a.texture}const Gb=`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Vb=`uniform float uLevel; uniform float uTime; uniform float uSeed; uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uSmoke;
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
}`,Wb="attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Xb="uniform vec3 uColor; uniform float uOpacity; varying float vA; void main(){ gl_FragColor=vec4(uColor*vA*uOpacity,1.0); }";class Qd{constructor(t,e,i=56){this.n=i,this.w=e,this.pts=[],this.ups=[];const s=i*4;this.pos=new Float32Array(s*3),this.alpha=new Float32Array(s);const r=[];for(let l=0;l<i-1;l++)for(const c of[0,2]){const h=l*4+c,o=h+1,u=h+4,f=h+5;r.push(h,o,f,h,f,u)}const a=new $e;a.setAttribute("position",new dn(this.pos,3).setUsage(zs)),a.setAttribute("aA",new dn(this.alpha,1).setUsage(zs)),a.setIndex(r),this.mat=new Xe({vertexShader:Wb,fragmentShader:Xb,transparent:!0,depthWrite:!1,blending:yn,side:Ve,toneMapped:!1,uniforms:{uColor:{value:t},uOpacity:{value:0}}}),this.mesh=new ge(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.renderOrder=5,this.mesh.name="roadster-trail"}reset(){this.pts.length=0,this.ups.length=0}push(t,e,i,s=.12){const r=this.pts[0];r&&r.distanceToSquared(t)<s*s?(r.copy(t),this.ups[0][0].copy(e),this.ups[0][1].copy(i)):(this.pts.unshift(t.clone()),this.ups.unshift([e.clone(),i.clone()]),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop())),this.write()}write(){const t=this.n,e=this.pos,i=this.alpha,s=this.pts.length;for(let a=0;a<t;a++){const l=Math.min(a,Math.max(0,s-1)),c=this.pts[l],h=a/(t-1),o=this.w*(1-h*.6),u=s>1&&a<s?Math.pow(1-h,1.6):0,f=a*4;if(!c){for(let g=0;g<4;g++)e.set([0,-999,0],(f+g)*3),i[f+g]=0;continue}const[d,v]=this.ups[l];e.set([c.x+d.x*o,c.y+d.y*o,c.z+d.z*o],f*3),e.set([c.x-d.x*o,c.y-d.y*o,c.z-d.z*o],(f+1)*3),e.set([c.x+v.x*o,c.y+v.y*o,c.z+v.z*o],(f+2)*3),e.set([c.x-v.x*o,c.y-v.y*o,c.z-v.z*o],(f+3)*3);for(let g=0;g<4;g++)i[f+g]=u}const r=this.mesh.geometry;r.attributes.position.needsUpdate=!0,r.attributes.aA.needsUpdate=!0}}function qb(n={}){const t=new rn;t.name="roadster";const e=new rn;t.add(e),n.forward==="+z"&&(e.rotation.y=Math.PI);const i=new rn;e.add(i);const s=new rn;i.add(s);const r=new Ui({color:12896462,metalness:.82,roughness:.38,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.2,sheen:0}),a={value:1};function l(x,T=1,b=new Gt(1,1,1),$=0,O=0,it=0){x.onBeforeCompile=st=>{st.uniforms.uStudio=a,st.uniforms.uStudioK={value:T},st.uniforms.uStudioTint={value:b},st.uniforms.uDesat={value:$},st.uniforms.uCapK={value:O},st.uniforms.uSkyCut={value:it},st.fragmentShader=`uniform float uStudio; uniform float uStudioK; uniform vec3 uStudioTint; uniform float uDesat; uniform float uCapK; uniform float uSkyCut;
`+st.fragmentShader.replace("#include <opaque_fragment>",`
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
      #include <opaque_fragment>`)},x.customProgramCacheKey=()=>"studio"+T+"_"+$+"_"+O+"_"+it}l(r,1,new Gt(1,1,1),.62,.5);const c=new Ui({color:789776,metalness:.35,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.9}),h=new mn({color:526603,metalness:.35,roughness:.62,envMapIntensity:.4}),o=new mn({color:1447964,metalness:.5,roughness:.55,envMapIntensity:.8}),u=new Ui({color:2303532,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.1}),f=new Ui({color:329483,metalness:.6,roughness:.14,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35,side:Ve}),d=new mn({color:13225686,metalness:1,roughness:.16,envMapIntensity:1.4}),v=new mn({color:1315862,metalness:0,roughness:.86,envMapIntensity:.45}),g=new mn({color:658189,metalness:.5,roughness:.6,envMapIntensity:.6,side:Ve}),m=new mn({color:9080210,metalness:.9,roughness:.38,envMapIntensity:1}),p=new Ui({color:10096664,metalness:.2,roughness:.35,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.9}),M=new Ui({color:11844290,metalness:.95,roughness:.18,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35}),w=new Ui({color:1711136,metalness:.8,roughness:.35,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:1.1}),y=new Gt(2.1,0,.06),L=new Gt(.5,0,.02),I=new We({color:y.clone(),toneMapped:!1}),R=new We({color:L.clone(),toneMapped:!1}),U=new Gt(3.2,.55,.5),P=new Gt(.55,0,.03),_=new We({color:U.clone(),toneMapped:!1}),N=new We({color:P.clone(),transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1,side:Ve}),W=new We({color:new Gt(.12,.125,.14),transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1}),nt=new mn({color:11039802,metalness:1,roughness:.28,envMapIntensity:1.1,emissive:new Gt(.09,.05,.015)}),mt=new mn({color:13936974,metalness:1,roughness:.22,envMapIntensity:1.4,emissive:new Gt(.16,.09,.02)}),Ct=()=>Rs(64,64,(x,T,b)=>{const $=x.createRadialGradient(T/2,b*.9,2,T/2,b*.7,T*.6);$.addColorStop(0,"rgba(255,255,255,1)"),$.addColorStop(1,"rgba(255,255,255,0)"),x.fillStyle=$,x.fillRect(0,0,T,b)}),pt=new Gt(2.3,2.4,2.7),Ut=new We({color:pt.clone(),toneMapped:!1}),et=new Gt(.025,.1,.18),Ot=new We({color:et.clone(),toneMapped:!1}),Jt=new We({color:new Gt(2.4,.9,.1),toneMapped:!1}),oe=new We({color:new Gt(.02,.03,.05),toneMapped:!1}),ce=Bb(),lt=new mn({map:ce,emissiveMap:ce,emissive:new Gt(.32,.32,.33),metalness:.1,roughness:.4}),Y=[h,nt,r,c,o,u,f,d,v,g,M,w,m,p,lt,mt];l(mt,.5,new Gt(1,.8,.45)),l(c,.32),l(u,.4),l(f,.22,new Gt(.8,.9,1.15),.2,2.5,.85),l(d,.9),l(g,.08),l(M,.7),l(w,.35),l(m,.5),l(v,.12);const V=(x,T,b,$=0,O=0,it=0)=>{const st=new ge(T,b);return st.position.set($,O,it),x.add(st),st},[bt,_t,Rt,zt]=Fb(),Ht=V(s,_t,r);Ht.name="roadster-paint",V(s,Rt,r).name="nose-corners",V(s,bt,c),V(s,zt,c).name="nose-face";const re=Ob();V(s,re.geo,f);{const x=re.secs.map(T=>new ze(T[0][0]+.004,T[0][1]+.004,T[0][2]));for(const T of[1,-1]){const b=new wr(x.map($=>new ze($.x*T,$.y,$.z)));V(s,new Zs(b,40,.008,5,!1),d)}for(const T of[1,-1]){const b=[];for(let $=0;$<=14;$++){const O=-.98+2.4*$/14,it=.93-.2*($/14),st=_n(Ff,O)*it;b.push(new ze(st*T,Nb(st,O)+.004,O))}V(s,new Zs(new wr(b),40,.011,5,!1),r).name="glass-pillar"}}const yt=new rn;s.add(yt);{const x=nl(An),T=x.slice(ai+2),b=Bt=>{Bt=Math.abs(Bt);for(let ee=1;ee<T.length;ee++){const It=T[ee-1],Dt=T[ee];if(Bt>=Dt[0])return Dt[1]+(It[1]-Dt[1])*((Bt-Dt[0])/Math.max(1e-5,It[0]-Dt[0]))}return T[T.length-1][1]},$=T[0][0],O=new We({color:new Gt(.22,.24,.28),transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1});yt.userData.glowM=O,yt.userData.glowBase=O.color.clone();const it=(Bt,ee,It=40,Dt=6)=>{const Yt=new wr(Bt,!1,"centripetal",.2),Qt=Yt.computeFrenetFrames(It,!1),ae=[],le=[],_e=ie=>{const Wt=ie*(ee.length-1),fe=Math.min(ee.length-2,Math.floor(Wt));return ee[fe]+(ee[fe+1]-ee[fe])*(Wt-fe)};for(let ie=0;ie<=It;ie++){const Wt=ie/It,fe=Yt.getPointAt(Wt),xe=_e(Wt),Le=Qt.normals[ie],Ae=Qt.binormals[ie];for(let an=0;an<=Dt;an++){const qe=an/Dt*Math.PI*2;ae.push(fe.x+xe*(Math.cos(qe)*Le.x+Math.sin(qe)*Ae.x),fe.y+xe*(Math.cos(qe)*Le.y+Math.sin(qe)*Ae.y),fe.z+xe*(Math.cos(qe)*Le.z+Math.sin(qe)*Ae.z))}if(ie<It)for(let an=0;an<Dt;an++){const qe=ie*(Dt+1)+an,Te=qe+Dt+1;le.push(qe,Te,qe+1,qe+1,Te,Te+1)}}const ne=new $e;return ne.setAttribute("position",new Me(ae,3)),ne.setIndex(le),ne.computeVertexNormals(),ne},st=[];for(let Bt=0;Bt<=24;Bt++){const ee=-$+2*$*(Bt/24);st.push(new ze(ee,b(ee)-.007,jd(ee)-.006))}const Lt=new wr(st,!1,"centripetal");V(yt,new Zs(Lt,64,.0085,6,!1),Ut).name="front-lightbar",V(yt,new Zs(Lt,48,.022,8,!1),O).renderOrder=4;const vt=new We({color:pt.clone().multiplyScalar(1.5),toneMapped:!1,side:Ve});yt.userData.slashM=vt;const Pt=new Ui({color:131845,metalness:.3,roughness:.08,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.4,side:Ve});Y.push(Pt);for(const Bt of[1,-1]){const It=(le,_e,ne)=>{const ie=An+.4*le,Wt=nf(ie),fe=new ze(Wt[ai+2][0]*Bt,Wt[ai+2][1],Wt[ai+2][2]),xe=new ze(Wt[ai+1][0]*Bt,Wt[ai+1][1],Wt[ai+1][2]),Le=nf(ie+.01),Ae=new ze(Le[ai+2][0]*Bt,Le[ai+2][1],Le[ai+2][2]),an=new ze().crossVectors(xe.clone().sub(fe),Ae.clone().sub(fe)).normalize();return an.y<0&&an.negate(),fe.lerp(xe,vi.clamp(_e,0,1)).addScaledVector(an,ne)},Dt=(le,_e,ne,ie,Wt=18,fe=.25)=>{const xe=[],Le=[];for(let an=0;an<=Wt;an++){const qe=an/Wt,Te=le+(_e-le)*qe,tn=ne*(fe+(1-fe)*Math.pow(qe<.6?qe/.6:(1-qe)/.4,.6))*(qe>.97?.3:1),Oe=.04+.92*Te;for(const vn of[It(Te,Oe-tn,ie),It(Te,Oe+tn,ie)])xe.push(vn.x,vn.y,vn.z);if(an<Wt){const vn=an*2;Le.push(vn,vn+1,vn+2,vn+1,vn+3,vn+2)}}const Ae=new $e;return Ae.setAttribute("position",new Me(xe,3)),Ae.setIndex(Le),Ae.computeVertexNormals(),Ae};V(yt,Dt(0,1.04,.26,.004),Pt).name="slash-lens",V(yt,Dt(0,1,.12,.008,18,.55),vt).name="slash-band";const Yt=[];for(let le=0;le<=10;le++){const _e=le/10;Yt.push(It(_e,.04+.92*_e,.01))}Yt[0]=new ze($*Bt,b($)-.007,jd($)-.006),V(yt,it(Yt,[.0085,.012,.015,.016,.013,.004],40,8),vt).name="slash-headlight";const Qt=[.05,.4,.7,.97].map(le=>It(le,.04+.92*le,.012));V(yt,it(Qt,[.02,.05,.05,.015],20,8),O).renderOrder=4;const ae=V(s,new nn(.01,.022,.085),Jt,(_n(Nn.beltX,-.86)+.003)*Bt,_n(Nn.beltY,-.86)+.07,-.86);ae.rotation.y=.05*Bt}for(let Bt=0;Bt<1;Bt++){const ee=[];for(let It=0;It<=12;It++){const Dt=-.38+.76*It/12;ee.push(new ze(Dt,x[0][1]+.01,An+Uf(x[0][1]+.01)+jc(Dt)-.006))}V(yt,new Zs(new wr(ee),24,.008,5,!1),o).name="front-lip"}}{const x=new We({color:328966});for(const T of[1,-1]){for(const[O,it]of[[.62,-.08],[-.88,.04]]){const st=nl(O),Lt=[3,4,5,6,so,ai].map((vt,Pt,Bt)=>new ze((st[vt][0]+.003)*T,st[vt][1]+(Pt===0?.01:0),O+it*(Pt/(Bt.length-1)-.6)));V(s,new Zs(new wr(Lt),16,.0045,4,!1),x)}const b=new $r;b.moveTo(0,0),b.lineTo(.26,0),b.lineTo(.31,.075),b.lineTo(.08,.05),b.closePath();const $=V(s,new wc(b),o,(_n(Nn.beltX,.75)+.004)*T,.42,.86);$.rotation.y=T>0?Math.PI/2:-Math.PI/2,$.scale.x=T>0?1:-1,$.rotation.order="YXZ"}}const Nt=new rn;s.add(Nt);const z={nozzles:[]};{const x=nl($i),b=x[x.length-1][1]-.055,$=x[so][0]-.03,O=$i+.004,it=V(Nt,new nn(2*$,.02,.008),I,0,b,O);it.name="roadster-lightbar",V(Nt,new nn(2*$-.02,.007,.008),_,0,b,O+.003);const st=Rs(16,128,(le,_e,ne)=>{const ie=le.createLinearGradient(0,0,0,ne);ie.addColorStop(0,"rgba(255,255,255,0)"),ie.addColorStop(.5,"rgba(255,255,255,1)"),ie.addColorStop(1,"rgba(255,255,255,0)"),le.fillStyle=ie,le.fillRect(0,0,_e,ne)});N.map=st;const Lt=V(Nt,new pn(2*$+.16,.2),N,0,b,O+.02);Lt.renderOrder=4;for(const le of[1,-1]){const _e=V(Nt,new nn(.012,.02,.09),I,(x[so][0]+.003)*le,b,$i-.04);_e.rotation.y=.04*le}V(Nt,new nn($*1.7,.006,.01),R,0,b-.21,O),z.tailLeft=new fn,z.tailLeft.position.set(-$+.02,b,O+.03),z.tailRight=new fn,z.tailRight.position.set($-.02,b,O+.03),Nt.add(z.tailLeft,z.tailRight);const vt=V(Nt,new nn(.16,.012,.02),Ut,0,.7,O+.008);vt.name="plate-lamp";const Pt=V(Nt,new pn(1,.2),W,0,.62,O+.01);Pt.renderOrder=3,W.map=Ct();const Bt=new $r;Bt.moveTo(-.74,0),Bt.lineTo(.74,0),Bt.lineTo(.82,.24),Bt.lineTo(.78,.3),Bt.lineTo(-.78,.3),Bt.lineTo(-.82,.24),Bt.closePath();const ee=V(Nt,new Ja(Bt,{depth:.03,bevelEnabled:!1}),h,0,.2,$i-.025);ee.name="diffuser-face";const It=new rn;It.position.set(0,.555,O+.006),Nt.add(It);const Dt=V(It,new pn(.3,.13),lt,0,.065,.004);Dt.name="plate",V(It,new nn(.36,.15,.008),o,0,.065,-.001),Nt.userData.plateHinge=It;const Yt=new mn({color:5922406,metalness:1,roughness:.22,envMapIntensity:1.1});Y.push(Yt),l(Yt,.5);const Qt=new mn({color:328966,metalness:.6,roughness:.5,side:Ve});Y.push(Qt),[[-.39,.4,!1],[-.13,.4,!1],[.13,.4,!1],[.39,.4,!1],[0,.62,!0]].forEach(([le,_e,ne])=>{const ie=new rn;ie.position.set(le,_e,ne?$i-.01:O+.012),Nt.add(ie);const Wt=ne?.05:.058;V(ie,new Ls(Wt,ne?.008:.0095,8,36),Yt),V(ie,new Ls(Wt*.86,.004,6,32),o,0,0,-.012);const fe=V(ie,new cn(Wt*.95,Wt*.8,.12,24,1,!0),Qt,0,0,-.06);fe.rotation.x=Math.PI/2,V(ie,new gs(Wt*.8,24),oe,0,0,-.11),ie.userData.main=ne,ie.userData.dir=new ze(0,-.06,1),z.nozzles.push(ie)});{const le=new ge(new pn(1.12,.15),h);le.position.set(0,.4,O+.001),Nt.add(le)}}{const Lt=Qt=>.45*(.2969*Math.sqrt(Qt)-.126*Qt-.3516*Qt*Qt+.2843*Qt**3-.1036*Qt**4),vt=Qt=>.065*Math.sin(Qt*Math.PI)*(1-.35*Qt),Pt=[];for(let Qt=0;Qt<=16;Qt++){const ae=.5*(1-Math.cos(Qt/16*Math.PI));Pt.push([ae,vt(ae)+Lt(ae)])}for(let Qt=15;Qt>=1;Qt--){const ae=Pt[Qt][0];Pt.push([ae,vt(ae)-Lt(ae)])}const Bt=Pt.length,ee=[],It=[];for(let Qt=0;Qt<=24;Qt++){const ae=Qt/24*2-1;for(let le=0;le<Bt;le++){const[_e,ne]=Pt[le],ie=-.45/2+_e*.45,Wt=ne*.45;ee.push(ae*1.94/2,Wt*Math.cos(-.1)-ie*Math.sin(-.1)+.02*ae*ae,ie*Math.cos(-.1)+Wt*Math.sin(-.1)+.03*ae*ae)}}for(let Qt=0;Qt<24;Qt++)for(let ae=0;ae<Bt;ae++){const le=Qt*Bt+ae,_e=Qt*Bt+(ae+1)%Bt,ne=le+Bt,ie=_e+Bt;It.push(le,ne,_e,_e,ne,ie)}const Dt=new $e;Dt.setAttribute("position",new Me(ee,3)),Dt.setIndex(It),Dt.computeVertexNormals();const Yt=V(s,Dt,u,0,.97,1.93);Yt.name="wing";for(const Qt of[1,-1]){const ae=new $r;ae.moveTo(-.45*.58,.05),ae.lineTo(.45*.6,.11),ae.lineTo(.45*.66,-.17),ae.lineTo(-.45*.2,-.09),ae.closePath();const le=new Ja(ae,{depth:.014,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1});le.translate(0,0,-.007),le.rotateY(-Math.PI/2);const _e=V(s,le,u,Qt*(1.94/2+.006),.97+.03,1.93+.02);_e.rotation.y=Qt*.04;const ne=.42*Qt,ie=1.68,Wt=ro(ie,.42),fe=.97+.45*.11,xe=new wr([new ze(ne,Wt-.02,ie),new ze(ne,Wt+.08,ie+.1),new ze(ne,.97-.02,1.93+.17),new ze(ne,fe+.05,1.93+.12),new ze(ne,fe+.03,1.93+0),new ze(ne,fe-.005,1.93-.06)]),Le=new Zs(xe,28,.013,6,!1);V(s,Le,u).name="wing-strut",V(s,new nn(.03,.012,.12),u,ne,Wt-.002,ie)}}const jt=[],Vt=kb(),se=Rs(2048,256,(x,T,b)=>{x.fillStyle="#1b1b1e",x.fillRect(0,0,T,b),x.fillStyle="#76787d",x.font="700 26px Arial Narrow, Arial, sans-serif",x.textBaseline="middle";for(const $ of[.75,.25])for(const O of[60,1084])x.save(),x.translate(O,(1-$)*b),x.scale(1,-1),$<.5&&x.scale(-1,-1),x.fillText("ROADSTER   275/30 ZR21   PERFORMANCE",0,0),x.restore()}),K=new Ui({map:se,color:16777215,metalness:0,roughness:.62,sheen:.4,sheenRoughness:.6,sheenColor:new Gt(.25,.26,.3),envMapIntensity:.5}),gt=new mn({color:13817564,metalness:1,roughness:.25,envMapIntensity:1.35}),ft=new mn({color:2764083,metalness:.85,roughness:.36,envMapIntensity:1,alphaTest:.5,side:Ve}),C=new Ui({color:14212322,metalness:.35,roughness:.32,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:1,emissive:new Gt(.12,.125,.135)});Y.push(K,gt,ft,C),l(C,.45),l(K,.1),l(gt,.75),l(ft,.3),ft.alphaMap=Rs(256,256,(x,T,b)=>{x.fillStyle="#fff",x.fillRect(0,0,T,b),x.fillStyle="#000";const $=T/2,O=b/2,it=T/2;for(let st=0;st<6;st++){const Lt=st/6*Math.PI*2+Math.PI/6-.3,vt=Lt+.6;x.beginPath();for(let Pt=0;Pt<=8;Pt++){const Bt=Lt+(vt-Lt)*Pt/8;x.lineTo($+Math.sin(Bt)*it*.86,O-Math.cos(Bt)*it*.86)}for(let Pt=8;Pt>=0;Pt--){const Bt=Lt+.12+(vt-Lt-.24)*Pt/8;x.lineTo($+Math.sin(Bt)*it*.42,O-Math.cos(Bt)*it*.42)}x.closePath(),x.fill()}}),ft.alphaMap&&(ft.alphaMap.colorSpace=er),m.map=Rs(256,256,(x,T,b)=>{const $=T/2,O=b/2;x.fillStyle="#9a9da2",x.fillRect(0,0,T,b),x.strokeStyle="#2a2c30",x.lineWidth=4;for(let it=0;it<36;it++){const st=it/36*Math.PI*2;x.beginPath();for(let Lt=0;Lt<=6;Lt++){const vt=.6+.3*Lt/6,Pt=st+.25*Lt/6;x.lineTo($+Math.cos(Pt)*vt*T/2,O+Math.sin(Pt)*vt*b/2)}x.stroke()}x.fillStyle="#1a1b1e",x.beginPath(),x.arc($,O,T*.27,0,Math.PI*2),x.fill()});function E(x){const T=x?.29:.33,b=Ts,$=.272,O=new rn,it=new rn;O.add(it);{const ne=T/2,ie=.032,Wt=[];Wt.push([$-.004,ne-.022],[$+.012,ne-.002],[$+.04,ne+.009],[b-.06,ne+.016],[b-ie-.006,ne+.01]);for(let Te=0;Te<=5;Te++){const tn=Te/5*Math.PI/2;Wt.push([b-ie+Math.sin(tn)*ie,ne-ie+Math.cos(tn)*ie+.002*Math.cos(tn)])}const fe=Wt.map(([Te,tn])=>new Xt(Te,tn)).reverse(),xe=Wt.map(([Te,tn])=>new Xt(Te,-tn)),Le=new qo(fe,48);Le.rotateZ(-Math.PI/2);const Ae=new qo(xe,48);Ae.rotateZ(-Math.PI/2),V(it,ko([Le,Ae]),K);const an=[];for(let Te=0;Te<=6;Te++)an.push(new Xt(b+.002*Math.sin(Math.PI*Te/6),-(ne-ie)+2*(ne-ie)*(Te/6)));const qe=new qo(an,48);qe.rotateZ(-Math.PI/2);{const Te=qe.attributes.uv;for(let tn=0;tn<Te.count;tn++)Te.setY(tn,.5)}V(it,qe,K)}const st=new cn($,$,T-.04,32,1,!0);st.rotateZ(Math.PI/2),V(it,st,o);const Lt=new Ls($,.009,6,48);Lt.rotateY(Math.PI/2),V(it,Lt,gt,T/2-.022,0,0);const vt=new Ls($-.014,.004,5,64);vt.rotateY(Math.PI/2),V(it,vt,Ot,T/2-.028,0,0);const Pt=new _a(.075,$-.004,40);Pt.rotateY(Math.PI/2),V(it,Pt,g,-T/2+.04,0,0);const Bt=new gs($-.006,48);Bt.rotateY(Math.PI/2),V(it,Bt,C,T/2-.05,0,0);{const ie=$-.004,Wt=new $r;Wt.moveTo(.06,-.03),Wt.lineTo((.06+ie)/2,-.021),Wt.lineTo(ie,-.014),Wt.lineTo(ie+.003,0),Wt.lineTo(ie,.014),Wt.lineTo((.06+ie)/2,.021),Wt.lineTo(.06,.03),Wt.closePath();const fe=new Ja(Wt,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:1,steps:1,curveSegments:4}),xe=fe.attributes.position;for(let Oe=0;Oe<xe.count;Oe++){const vn=xe.getX(Oe),de=xe.getY(Oe),Dn=xe.getZ(Oe),ti=vi.clamp((vn-.06)/(ie-.06),0,1),Ee=0,te=vn*Math.cos(Ee)-de*Math.sin(Ee),ye=vn*Math.sin(Ee)+de*Math.cos(Ee),Se=Dn-.02-.012*ti+.006*Math.sin(Math.PI*ti)*(de>0?1:-.4);xe.setXYZ(Oe,Se,te,ye)}fe.computeVertexNormals();const Le=(Oe,vn)=>{const de=Oe.groups[vn],Dn=new $e;for(const ti of["position","normal","uv"]){const Ee=Oe.attributes[ti];Ee&&Dn.setAttribute(ti,new dn(Ee.array.slice(de.start*Ee.itemSize,(de.start+de.count)*Ee.itemSize),Ee.itemSize))}return Dn},Ae=Le(fe,0),an=Le(fe,1),qe=[],Te=[];for(let Oe=0;Oe<6;Oe++)qe.push(Ae.clone().rotateX(Oe/6*Math.PI*2)),Te.push(an.clone().rotateX(Oe/6*Math.PI*2));const tn=new rn;it.add(tn),tn.position.x=T/2-.012,tn.add(new ge(ko(qe),w)),tn.add(new ge(ko(Te),gt))}const ee=new cn(.06,.075,.05,6);ee.rotateZ(Math.PI/2),V(it,ee,w,T/2-.045,0,0);const It=new cn(.034,.034,.012,20);It.rotateZ(Math.PI/2),V(it,It,gt,T/2-.016,0,0);const Dt=new We({map:Vt,transparent:!0,opacity:0,depthWrite:!1}),Yt=new gs($,32);Yt.rotateY(Math.PI/2);const Qt=V(O,Yt,Dt,T/2-.004,0,0);Qt.visible=!1;const ae=new cn(.24,.24,.032,48,1,!1);ae.rotateZ(Math.PI/2),V(it,ae,m,.01,0,0);const le=new cn(.1,.1,.05,24);le.rotateZ(Math.PI/2),V(it,le,o,.04,0,0);const _e=V(O,new nn(.075,.2,.1),p,.045,0,0);return _e.position.set(.045,Math.cos(x?.9:2.2)*.2,Math.sin(x?.9:2.2)*.2),_e.rotation.x=(x?.9:2.2)+Math.PI/2,{steer:O,spin:it,blur:Qt,bm:Dt,front:x}}for(const[x,T,b]of[[Kd,Tr,!0],[-Kd,Tr,!0],[Yd+.01,Er,!1],[-Yd-.01,Er,!1]]){const $=E(b),O=new rn;O.position.set(x,Ts,T),x<0&&(O.scale.x=-1),O.add($.steer),i.add(O),$.mount=O,$.baseY=Ts,$.side=Math.sign(x);{const it=o;for(const[Lt,vt]of[[.09,.5],[-.1,.56]])for(const Pt of[-.13,.13]){const Bt=V(O,new cn(.014,.014,vt,6),it,-.12-vt/2*.95,Lt,Pt*.6);Bt.rotation.z=Math.PI/2,Bt.rotation.y=-Pt*.9}const st=V(O,new cn(.035,.035,.34,8),o,-.3,.12,0);st.rotation.z=.9}jt.push($)}z.wheels=jt.map(x=>{const T=new fn;return T.position.set(0,-Ts,0),T.name="tyre-contact",T.userData.front=x.front,T.userData.dir=new ze(0,.3,1),x.mount.add(T),T});{const x=Rs(256,512,(It,Dt,Yt)=>{It.fillStyle="#2a2c31",It.fillRect(0,0,Dt,Yt);for(let Qt=0;Qt<Yt;Qt+=4)for(let ae=0;ae<Dt;ae+=4)It.fillStyle=(ae+Qt)/4%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.05)",It.fillRect(ae,Qt,4,4);It.strokeStyle="rgba(0,0,0,0.75)",It.lineWidth=3;for(const Qt of[70,190,330,440])It.beginPath(),It.moveTo(8,Qt),It.lineTo(Dt-8,Qt),It.stroke();for(const Qt of[56,Dt-56])It.beginPath(),It.moveTo(Qt,8),It.lineTo(Qt,Yt-8),It.stroke();It.strokeRect(4,4,Dt-8,Yt-8),It.fillStyle="rgba(160,165,175,0.55)";for(const Qt of[70,190,330,440])for(const ae of[20,56,128,Dt-56,Dt-20])It.beginPath(),It.arc(ae,Qt-9,2.4,0,7),It.fill()}),T=new Ui({map:x,color:10133158,metalness:.25,roughness:.55,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.55});Y.push(T),l(T,.12);const b=new pn(1.5,3.4);b.rotateX(Math.PI/2),V(s,b,T,0,ds+.004,.1).name="floor";const $=V(s,new nn(.3,.06,2.5),u,0,ds+.036,-.15);$.name="floor-tunnel";for(const It of[1,-1])V(s,new nn(.06,.03,2.2),o,.68*It,ds+.02,0);const O=.62,it=.26,st=V(s,new nn(1.4,.012,O),T,0,ds+.006+Math.sin(it)*O/2,1.6+O/2*Math.cos(it));st.rotation.x=-it;for(let It=-2;It<=2;It++){const Dt=new $r;Dt.moveTo(.05,0),Dt.lineTo(O*Math.cos(it),0),Dt.lineTo(O*Math.cos(it),O*Math.sin(it)),Dt.closePath();const Yt=new wc(Dt);Yt.rotateY(-Math.PI/2),V(s,Yt,u,It*.27,ds+.004,1.6)}const Lt=V(s,new nn(1,.02,.3),u,0,ds+.012,-1.68);Lt.rotation.x=.06;const vt=new Ls(.06,.012,8,24);vt.rotateX(Math.PI/2);const Pt=new gs(.05,20);Pt.rotateX(Math.PI/2);for(const It of[Tr-.05,Er+.1])for(const Dt of[-.72,.72])V(s,vt,d,Dt,ds-.002,It).name="rcs-bezel",V(s,Pt,oe,Dt,ds+.001,It);const Bt=new cn(Pr-.004,Pr-.004,.34,24,1,!0,0,Math.PI);Bt.rotateZ(Math.PI/2);const ee=new mn({color:328966,metalness:.2,roughness:.85,side:Ve});for(const It of[Tr,Er])for(const Dt of[1,-1]){const Yt=V(s,Bt,ee,.78*Dt,Ts,It);Yt.rotation.x=0,Yt.name="wheel-liner"}}const G=Rs(128,256,(x,T,b)=>{const $=x.createRadialGradient(T/2,b/2,4,T/2,b/2,T/2);$.addColorStop(0,"rgba(0,0,0,0.85)"),$.addColorStop(.6,"rgba(0,0,0,0.55)"),$.addColorStop(1,"rgba(0,0,0,0)"),x.save(),x.scale(1,b/T),x.fillStyle=$,x.fillRect(0,0,T,T),x.restore()}),q=new We({map:G,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),J=V(i,new pn(2.5,5.2),q,0,.012,0);J.rotation.x=-Math.PI/2,J.renderOrder=-1;const Z=qh([[0,"rgba(255,255,255,1)"],[.4,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),wt=V(i,new pn(2,4.4),new We({map:Z,color:new Gt(.05,.35,.55),transparent:!0,blending:yn,depthWrite:!1,toneMapped:!1}),0,.02,.05);wt.rotation.x=-Math.PI/2;const Q=(x,T,b,$)=>new Xe({vertexShader:Gb,fragmentShader:Vb,transparent:!0,depthWrite:!1,side:Ve,blending:yn,toneMapped:!1,uniforms:{uLevel:{value:0},uTime:{value:0},uSeed:{value:x},uColor:{value:T},uCore:{value:b},uSmoke:{value:$}}}),ct=new Gt(.38,.72,1).multiplyScalar(.38),rt=new Gt(.75,.92,1.1).multiplyScalar(.55),k=new Gt(.62,.68,.76).multiplyScalar(.22),tt=new Gt(.35,.6,.9).multiplyScalar(.07),Mt=new Gt(.7,.74,.8).multiplyScalar(.1),Et=(x,T,b=20,$=16)=>{const O=new cn(x,T,1,b,$,!0);return O.translate(0,-.5,0),O.rotateX(-Math.PI/2),O},St=qh([[0,"rgba(255,255,255,1)"],[.3,"rgba(200,235,255,0.55)"],[1,"rgba(120,190,255,0)"]]),qt=qh([[0,"rgba(255,255,255,0.75)"],[.4,"rgba(225,232,240,0.35)"],[1,"rgba(200,210,225,0)"]]),kt=[];{const x=Et(.042,.2,18,18),T=Et(.07,.42,14,10);for(const b of z.nozzles){const $=b.userData.main,O=Q(b.position.x*3.1,ct,rt,k),it=new rn;b.add(it),it.rotation.x=.06,it.userData.main=$;const st=new ge(x,O);st.frustumCulled=!1,st.renderOrder=6,it.add(st);const Lt=Q(b.position.x*5.3+1,tt,tt,Mt),vt=new ge(T,Lt);vt.frustumCulled=!1,vt.renderOrder=6,it.add(vt);const Pt=new fc(new $a({map:St,color:new Gt(.5,.8,1),blending:yn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));Pt.scale.setScalar($?.14:.11),Pt.position.z=.02,b.add(Pt),st.visible=vt.visible=!1,kt.push({nz:b,mat:O,coreMat:Lt,plume:st,core:vt,spr:Pt,main:$,pivot:it})}}const Tt=[];z.rcs={down:[],left:[],right:[],pitchUp:[],pitchDown:[]};{const x=Et(.05,.24,18,20),T=Et(.08,.6,14,12),b=new ze(0,0,1),$=new cn(.034,.024,.05,16,1,!0);$.rotateX(Math.PI/2);const O=new Ls(.034,.005,6,20),it=new gs(.026,16),st=new mn({color:394759,metalness:.6,roughness:.45,side:Ve});Y.push(st);let Lt=0;const vt=(Pt,Bt,ee,It,Dt)=>{const Yt=new rn;Yt.position.set(Bt,ee,It),s.add(Yt),Yt.quaternion.setFromUnitVectors(b,Dt.clone().normalize()),Yt.userData.dir=new ze(0,0,1),Lt+=.37;const Qt=Q(Lt,ct,rt,k),ae=new ge(x,Qt);ae.frustumCulled=!1,ae.renderOrder=6,Yt.add(ae);const le=Q(Lt+1.1,tt,tt,Mt),_e=new ge(T,le);_e.renderOrder=6,_e.frustumCulled=!1,Yt.add(_e);const ne=new fc(new $a({map:St,color:new Gt(.55,.82,1),blending:yn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));ne.scale.setScalar(.12),ne.position.z=.03,ne.renderOrder=6,Yt.add(ne);const ie=ne.material,Wt=new fc(new $a({map:qt,color:new Gt(.32,.34,.37),blending:yn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));if(Wt.renderOrder=6,Yt.add(Wt),ae.visible=ne.visible=_e.visible=Wt.visible=!1,Pt==="left"||Pt==="right"){const fe=new ge($,st);fe.position.z=-.02,Yt.add(fe);const xe=new ge(O,d);Yt.add(xe);const Le=new ge(it,oe);Le.position.z=-.03,Yt.add(Le)}z.rcs[Pt].push(Yt),Tt.push({key:Pt,nz:Yt,mat:Qt,coreMat:ie,plume:ae,core:ne,haze:_e,hazeMat:le,puff:Wt,lvl:0})};for(const Pt of[Tr-.05,Er+.1])for(const Bt of[-.72,.72])vt("down",Bt,ds+.005,Pt,new ze(0,-1,0));for(const[Pt,Bt]of[[-1.78,_n(Nn.beltY,-1.78)-.07],[1.86,.56]]){const ee=_n(Nn.beltX,Pt)-.03;vt("left",-ee,Bt,Pt,new ze(-1,.05,0)),vt("right",ee,Bt,Pt,new ze(1,.05,0))}vt("pitchUp",0,.22,An+.35,new ze(0,-1,0)),vt("pitchUp",0,ro($i-.1,0)+.004,$i-.1,new ze(0,1,0)),vt("pitchDown",0,ro(An+.5,0)+.004,An+.5,new ze(0,1,0)),vt("pitchDown",0,.25,$i-.2,new ze(0,-1,0))}let F=null;n.headlight!==!1&&(F=new dm(15134463,40,45,.48,.65,1.4),F.position.set(0,.5,-2.1),F.target.position.set(0,0,-16),s.add(F,F.target)),z.camTarget=new fn,z.camTarget.position.set(0,.7,0),s.add(z.camTarget);const dt=new rn;dt.name="roadster-trails";const at=new Qd(new Gt(1.5,0,.06),.022),H=new Qd(new Gt(1.5,0,.06),.022);n.trails!==!1&&dt.add(at.mesh,H.mesh);function ht(x,T,b=new Set){x.updateMatrixWorld(!0);const $=x.matrixWorld.clone().invert(),O=new Map;for(const it of T)for(const st of[...it.children]){if(!st.isMesh||!st.visible||st.material.isShaderMaterial||b.has(st)||Array.isArray(st.material)||st.onBeforeRender!==fn.prototype.onBeforeRender)continue;const Lt=st.material.uuid+"_"+st.renderOrder+"_"+st.visible;let vt=O.get(Lt);vt||(vt={mat:st.material,ro:st.renderOrder,vis:st.visible,list:[]},O.set(Lt,vt)),vt.list.push(st)}for(const it of O.values()){if(it.list.length<2)continue;const st=it.list.map(Pt=>{Pt.updateMatrixWorld(!0);let Bt=Pt.geometry.index?Pt.geometry.toNonIndexed():Pt.geometry.clone();Bt.attributes.normal||Bt.computeVertexNormals(),Bt.attributes.uv||Bt.setAttribute("uv",new Me(new Float32Array(Bt.attributes.position.count*2),2));for(const ee of Object.keys(Bt.attributes))ee!=="position"&&ee!=="normal"&&ee!=="uv"&&Bt.deleteAttribute(ee);return Bt.clearGroups(),Bt.applyMatrix4(new Pe().multiplyMatrices($,Pt.matrixWorld)),Bt}),Lt=ko(st);if(!Lt)continue;for(const Pt of it.list)Pt.parent.remove(Pt),Pt.geometry.dispose();const vt=new ge(Lt,it.mat);vt.renderOrder=it.ro,vt.visible=it.vis,vt.name="merged-"+(it.list[0].name||"part"),x.add(vt)}}ht(s,[s,Nt,yt,...z.nozzles,...z.rcs.left,...z.rcs.right],new Set([Ht]));for(const x of jt)ht(x.spin,[x.spin,...x.spin.children.filter(T=>T.isGroup)]),ht(x.mount,[x.mount]);let At=n.renderer||null,Kt=null,ve=n.envMap||null,Re=null;Ht.onBeforeRender=(x,T)=>{At=x,Kt=T};let we=null;function Ie(){const x=Kt&&Kt.environment;let T=null;if(we)T=we;else if(!x){if(!ve&&At)try{ve=Hb(At)}catch{ve=null}T=ve}if(T!==Re){for(const b of Y)b.envMap=T,b.needsUpdate=!0;Re=T}}const ut={time:0,spinAngle:0,steer:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,lastPos:null,lastVel:new ze,vel:new ze,speed:0,flyBlend:0,armed:0,jet:0,pulse:0,lights:1,plate:0,brake:0,trailFade:0,wasFlying:!1,boost:0},wn=new ze,Wn=new Jn,gn=new ze,Xn=new ze,Si=new ze,Oi=new ze;function bs(x){let T=x;for(;T.parent;)T=T.parent;return T!==x?T:null}function is(){at.reset(),H.reset(),at.write(),H.write(),ut.lastPos=null,ut.pitch=ut.pitchV=ut.roll=ut.rollV=ut.heave=ut.heaveV=0,ut.pulse=0,ut.rollRate=0,ut.prevQ=null,ut.visAngle=ut.visAngle||0,ut.time=0,ut.spinAngle=0,ut.jet=0,ut.trailFade=0,ut.flyBlend=0,ut.wasFlying=!1,ut.speed=0,ut.vel.set(0,0,0),ut.lastVel.set(0,0,0),j=null}const Qe={};let Bi=!0,qn=!1,j=null;function $t(x=1/60,T){Bi=!0,qn=!1,A(x,T?Object.assign({},Qe,T):Qe)}function he(x){if(x){if(Number.isFinite(x.v)&&(Qe.speed=x.v),typeof x.rev=="number"&&(Qe.rev=x.rev),typeof x.boostV=="number"&&(Qe.boost=vi.clamp(x.boostV/9,0,1)),typeof x.thrustArm=="number"&&(Qe.armed=x.thrustArm),typeof x.thrust=="number"&&(Qe.thrust=x.thrust),typeof x.airborne=="boolean"&&(Qe.airborne=x.airborne),typeof x.section=="string"&&(Qe.flying=x.mode?x.mode==="flipAir"||x.mode==="fly":x.section==="flight"||x.section==="outro"&&!!x.airborne),x.rcs&&(Qe.rcs=x.rcs),typeof x.finished=="boolean"&&(Qe.brake=x.finished?1:0),Bi||(qn=!0),Bi=!1,qn){const T=Number.isFinite(x.t)?x.t:null,b=T!==null&&j!==null&&T>j?T-j:1/60;A(b,Qe)}j=Number.isFinite(x.t)?x.t:null}}function A(x,T){if(x=Math.min(Math.max(x||0,0),.1),x===0)return;ut.time+=x,Ie(),t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(wn,Wn,Si),gn.set(0,0,n.forward==="+z"?1:-1).applyQuaternion(Wn),Xn.set(0,1,0).applyQuaternion(Wn);let b=!1;ut.lastPos&&(Oi.subVectors(wn,ut.lastPos),Oi.length()>Math.max(8,200*x)?b=!0:ut.vel.copy(Oi).divideScalar(x)),ut.lastPos||(ut.lastPos=new ze),ut.lastPos.copy(wn),b&&(is(),ut.lastPos=wn.clone(),ut.vel.set(0,0,0)),ut.prevQ||(ut.prevQ=Wn.clone());{const de=Wn.clone().multiply(ut.prevQ.clone().invert());de.w<0&&(de.x=-de.x,de.y=-de.y,de.z=-de.z,de.w=-de.w);const Dn=2*Math.acos(Math.min(1,de.w)),ti=Math.sqrt(Math.max(1e-9,1-de.w*de.w)),Ee=b?0:Dn/x*((de.x*gn.x+de.y*gn.y+de.z*gn.z)/ti);ut.rollRate=(ut.rollRate||0)+((Number.isFinite(Ee)?Ee:0)-(ut.rollRate||0))*Math.min(1,x*12),ut.prevQ.copy(Wn)}const $=ut.vel.dot(gn),O=Number.isFinite(T.speed)?T.speed:$;let it=Number.isFinite(T.accel)?T.accel:(O-ut.speed)/x;it=vi.clamp(it,-40,40),ut.speed=O;const st=!!(T.airborne??T.flying??T.grounded===!1),Lt=!!(T.flying??!1),vt=vi.clamp(typeof T.rev=="number"?T.rev:0,0,1),Pt=typeof T.armed=="number"?T.armed:T.armed?1:0,Bt=vi.clamp(T.steer||0,-1,1),ee=typeof T.lights=="number"?T.lights:ut.lights;ut.lights+=(ee-ut.lights)*Math.min(1,x*12);const It=typeof T.boost=="number"?T.boost:T.boost?1:0;ut.boost+=(It-ut.boost)*Math.min(1,x*6);const Dt=typeof T.brake=="number"?T.brake:T.brake?1:0;ut.brake+=(Dt-ut.brake)*Math.min(1,x*15);const Yt=st?O*Math.max(0,1-ut.flyBlend):O;ut.spinAngle-=Yt/Ts*x,ut.steer+=(Bt*.32-ut.steer)*Math.min(1,x*10);const Qt=Math.abs(Yt/Ts),ae=vi.clamp((Qt-25)/60,0,.32),le=Yt/Ts,_e=13;ut.visAngle=(ut.visAngle||0)-Math.sign(le)*Math.min(Math.abs(le),_e+Math.max(0,Math.abs(le)-_e)*.04)*x;for(const de of jt)de.spin.rotation.x=ut.visAngle,de.steer.rotation.y=de.front?ut.steer*de.side:0,de.bm.opacity=ae,de.blur.visible=ae>.01;ut.flyBlend+=((st?1:0)-ut.flyBlend)*Math.min(1,x*5),ut.wasFlying&&!st&&X(.8),ut.wasFlying=st;const ne=ut.vel.dot(Xn),ie=ut.lastVel.dot(Xn);!st&&ie<-4&&ne-ie>3&&X(Math.min(2,(ne-ie)/6)),ut.lastVel.copy(ut.vel);const Wt=st?.02:vi.clamp(it*.0028+vt*.018,-.05,.06),fe=st?0:vi.clamp(-Bt*Math.min(1,Math.abs(O)/30)*.045,-.06,.06),xe=st?0:(Math.sin(ut.time*23)*.6+Math.sin(ut.time*37+1.3)*.4)*(Math.min(1,Math.abs(O)/40)*.003+vt*.0035),Le=140,Ae=16;ut.pitchV+=((Wt-ut.pitch)*Le-ut.pitchV*Ae)*x,ut.pitch+=ut.pitchV*x,ut.rollV+=((fe-ut.roll)*Le-ut.rollV*Ae)*x,ut.roll+=ut.rollV*x,ut.heaveV+=((xe-ut.heave)*220-ut.heaveV*18)*x,ut.heave+=ut.heaveV*x,ut.heave<-.1&&(ut.heave=-.1,ut.heaveV=Math.max(0,ut.heaveV)),s.rotation.x=ut.pitch,s.rotation.z=ut.roll,s.position.y=ut.heave;const an=ut.flyBlend*.06;for(const de of jt)de.mount.position.y=de.baseY-an;ut.armed+=(Pt-ut.armed)*Math.min(1,x*4);const qe=typeof T.thrust=="number"?T.thrust:T.thrust?1:0;ut.pulse=Math.max(0,ut.pulse-x*2.6);const Te=Math.min(1.6,Math.max(qe,ut.pulse*1.3)+ut.armed*.12+(Lt?.18:0));ut.jet+=(Te-ut.jet)*Math.min(1,x*20),ut.plate+=((ut.armed>.3||Lt?1:0)-ut.plate)*Math.min(1,x*6),Nt.userData.plateHinge.rotation.x=ut.plate*1.45;const tn=Math.min(1,ut.armed*.5+ut.jet);oe.color.setRGB(.02+tn*.5,.03+tn*1.2,.05+tn*2.6);for(const de of kt){const Dn=ut.jet*(de.main?ut.plate:1);de.pivot.rotation.x=.06+(Lt?ut.flyBlend:0)*(de.main?.75:.45),de.nz.userData.dir.set(0,-Math.sin(de.pivot.rotation.x),Math.cos(de.pivot.rotation.x));const ti=Dn>.02;de.plume.visible=de.core.visible=ti,de.mat.uniforms.uLevel.value=Math.min(1.3,Dn),de.coreMat.uniforms.uLevel.value=Math.min(1.3,Dn),de.mat.uniforms.uTime.value=de.coreMat.uniforms.uTime.value=ut.time;const Ee=.5+1.9*Math.min(1.3,Dn)+(de.main?.3:0);de.plume.scale.set(1,1,Ee),de.core.scale.set(1,1,Ee*1.1),de.spr.material.opacity=Math.min(.8,tn*.6)*(de.main?ut.plate:1),de.spr.visible=de.spr.material.opacity>.01}{const de=T.rcs||{},Dn=typeof de.pitch=="number"?de.pitch:T.jetsPitch||0,ti={down:de.down??T.jetsDown??0,left:de.left??T.jetsLeft??0,right:de.right??T.jetsRight??0,pitchUp:Math.max(0,Dn),pitchDown:Math.max(0,-Dn)};if(st&&Math.abs(ut.rollRate)>1.2){const Ee=vi.clamp((Math.abs(ut.rollRate)-1.2)/2.5,0,1)*.95,te=ut.rollRate>0?"right":"left";ti[te]=Math.max(+ti[te]||0,Ee)}for(const Ee of Tt){const te=vi.clamp(+ti[Ee.key]||0,0,1.3);Ee.lvl+=(te-Ee.lvl)*Math.min(1,x*22);const ye=Ee.lvl>.03;if(Ee.plume.visible=Ee.core.visible=Ee.haze.visible=Ee.puff.visible=ye,!ye)continue;const Se=Ee.key==="down",Be=Ee.key==="left"||Ee.key==="right",ke=Math.min(1.2,Ee.lvl),In=Se?1.2+2.8*ke:Be?.8+1.7*ke:.5+1*ke,Yn=.85+.25*ke;Ee.plume.scale.set(Yn,Yn,In),Ee.haze.scale.set(Yn,Yn,In*1.08),Ee.mat.uniforms.uLevel.value=Math.min(1.25,ke*1.1),Ee.hazeMat.uniforms.uLevel.value=Math.min(1,ke),Ee.coreMat.opacity=Math.min(.9,.35+ke*.5),Ee.core.scale.setScalar(.1+.05*ke),Ee.mat.uniforms.uTime.value=Ee.hazeMat.uniforms.uTime.value=ut.time,Ee.puff.position.z=In*1.02,Ee.puff.scale.setScalar((.55+.35*ke)*(.92+.08*Math.sin(ut.time*37+Ee.nz.position.x*9))),Ee.puff.material.opacity=Math.min(.5,ke*(Se?.4:.25))}}const Oe=ut.lights,vn=1+ut.brake*.8+ut.boost*.3;if(I.color.copy(y).multiplyScalar(Oe*vn),R.color.copy(L).multiplyScalar(Oe*(1+ut.brake)),_.color.copy(U).multiplyScalar(Oe*vn),N.color.copy(P).multiplyScalar(Oe*vn),W.opacity=Oe,a.value=.25+.75*Oe,Ut.color.copy(pt).multiplyScalar(Oe),yt.userData.slashM&&yt.userData.slashM.color.copy(pt).multiplyScalar(1.5*Oe),yt.userData.glowM&&yt.userData.glowM.color.copy(yt.userData.glowBase).multiplyScalar(Oe),Ot.color.copy(et).multiplyScalar(Oe*(.7+.6*ut.boost+.6*ut.armed)),F&&(F.intensity=40*Oe),q.opacity=.9*(1-ut.flyBlend),wt.material.opacity=Oe*(1-ut.flyBlend*.7),n.trails!==!1){if(!dt.parent){const de=bs(t);de&&de.add(dt)}if(dt.parent){const de=vi.clamp((Math.abs(O)-6)/20,0,1)*Oe;ut.trailFade+=(de-ut.trailFade)*Math.min(1,x*4),at.mat.uniforms.uOpacity.value=H.mat.uniforms.uOpacity.value=ut.trailFade*(1+ut.boost*.6),Si.set(1,0,0).applyQuaternion(Wn);const Dn=dt.parent.matrixWorld.clone().invert();for(const[ti,Ee]of[[at,z.tailLeft],[H,z.tailRight]]){Ee.updateWorldMatrix(!0,!1);const te=new ze().setFromMatrixPosition(Ee.matrixWorld).applyMatrix4(Dn);ti.push(te,Xn,Si)}}}}function B(x=1){ut.pulse=Math.min(1.5,ut.pulse+x)}function X(x=1){ut.heaveV-=1.35*Math.min(1.6,x),ut.pitchV-=.45*x}function ot(x){ut.lights=vi.clamp(x,0,1)}const S={object:t,group:t,root:t,mesh:t,body:s,chassis:i,wheels:jt,anchors:z,trails:dt,dims:{length:4.5,width:2.04,height:1.14,wheelRadius:Ts,wheelBase:Er-Tr},materials:{paint:r,trim:c,glass:f,carbon:u,tailM:I,headM:Ut,ringM:Ot},update:$t,thrustPulse:B,land:X,reset:is,setLights:ot,setState:he,setSpeed(x){Number.isFinite(x)&&(Qe.speed=x)},setThrusters(x){Qe.thrust=+x||0},setBoost(x){Qe.boost=+x||0},setRev(x){Qe.rev=+x||0},setBrake(x){Qe.brake=+x||0},setEnvMap(x){x!==we&&(we=x||null,Ie())},get speed(){return ut.speed},dispose(){t.traverse(x=>{x.geometry&&x.geometry.dispose()}),dt.traverse(x=>{x.geometry&&x.geometry.dispose()}),dt.parent&&dt.parent.remove(dt)}};return t.userData.car=S,t.userData.thrusters=z.nozzles,S}const Vm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yb=new _f(-1,1,1,-1,0,1);class Kb extends $e{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const $b=new Kb;class Zc{constructor(t){this._mesh=new ge($b,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Yb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class jb extends fo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_s.clone(t.uniforms),this.material=new Xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Zc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tp extends fo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Zb extends fo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Jb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Xt);this._width=i.width,this._height=i.height,e=new Xi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ts}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jb(Vm),this.copyPass.material.blending=lr,this.clock=new rM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}tp!==void 0&&(a instanceof tp?i=!0:a instanceof Zb&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qb extends fo{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const tw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class da extends fo{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Xt(t.x,t.y):new Xt(256,256),this.clearColor=new Gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xi(r,a,{type:ts}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Xi(r,a,{type:ts});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Xi(r,a,{type:ts});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const l=tw;this.highPassUniforms=_s.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const o=Vm;this.copyUniforms=_s.clone(o.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Gt,this.oldClearAlpha=1,this.basic=new We,this.fsQuad=new Zc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Xt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=da.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=da.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Xt(.5,.5)},direction:{value:new Xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}da.BlurDirectionX=new Xt(1,0);da.BlurDirectionY=new Xt(0,1);const Ar=59/136,ew=58.13,nw=[["intro",0,16],["drop1",16,48],["break",48,56],["loop",56,88],["build",88,96],["flight",96,128],["outro",128,136]];function iw(n){const t=n/Ar;for(const e of nw)if(t<e[2])return e[0];return"outro"}const $s=n=>Math.min(1,Math.max(0,n)),ir=(n,t,e)=>{const i=$s((e-n)/(t-n));return i*i*(3-2*i)};function sw(n){const t=n/Ar;return t<16?0:t<48?.35+.6*ir(16,40,t):t<56?.55:t<88?.85:t<96?.7:t<128?.9:.9*(1-ir(128,134.5,t))}function ep(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Yh={uniforms:{tDiffuse:{value:null},uRes:{value:new Xt(1,1)},uTime:{value:0},uSpeed:{value:0},uCA:{value:0},uExposure:{value:1},uVignette:{value:.55},uGrain:{value:.045},uFlash:{value:0},uFlashColor:{value:new Gt(1,1,1)},uSat:{value:1.12},uContrast:{value:1.08},uShadowTint:{value:new Gt(.012,.006,.03)},uCenter:{value:new Xt(.5,.56)},uCar:{value:new Xt(.5,.4)}},vertexShader:`
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
  `};class rw extends fo{constructor(){super(),this.uniforms=_s.clone(Yh.uniforms),this.material=new Xe({uniforms:this.uniforms,vertexShader:Yh.vertexShader,fragmentShader:Yh.fragmentShader,depthTest:!1,depthWrite:!1}),this.fsQuad=new Zc(this.material)}setSize(t,e){this.uniforms.uRes.value.set(t,e)}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ow extends fo{constructor(){super(),this.uniforms={tDiffuse:{value:null},uMax:{value:24}},this.material=new Xe({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
          c.rgb = max(c.rgb, vec3(0.0));
          float m = max(c.r, max(c.g, c.b));
          if (m > uMax) c.rgb *= uMax / m;
          gl_FragColor = c;
        }
      `,depthTest:!1,depthWrite:!1}),this.fsQuad=new Zc(this.material)}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const jn=2400;function aw(){const n=new pm;n.setAttribute("position",new Me([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]);const t=new vs(new Float32Array(jn*3),3),e=new vs(new Float32Array(jn*3),3),i=new vs(new Float32Array(jn*4),4),s=new vs(new Float32Array(jn*2),2);for(const c of[t,e,i,s])c.setUsage(zs);n.setAttribute("iPos",t),n.setAttribute("iVel",e),n.setAttribute("iCol",i),n.setAttribute("iSz",s),n.instanceCount=0;const r=new Xe({uniforms:{uResY:{value:1920},uAspect:{value:.5625},uMinPx:{value:1.6}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:yn}),a=new ge(n,r);a.frustumCulled=!1,a.renderOrder=10,a.name="fx.particles";const l={n:0,pos:new Float32Array(jn*3),vel:new Float32Array(jn*3),col0:new Float32Array(jn*3),col1:new Float32Array(jn*3),life:new Float32Array(jn),age:new Float32Array(jn),size0:new Float32Array(jn),size1:new Float32Array(jn),stretch:new Float32Array(jn),grav:new Float32Array(jn),drag:new Float32Array(jn),floor:new Float32Array(jn)};return{mesh:a,mat:r,quad:n,iPos:t,iVel:e,iCol:i,iSz:s,P:l}}const il=90;function lw(n){const t=new pn(1,1,1,1);t.translate(0,.5,0),t.rotateX(-Math.PI/2);const e=new Xe({uniforms:{uAlpha:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Ve,blending:yn}),i=new Bu(t,e,il);i.instanceMatrix.setUsage(zs),i.frustumCulled=!1,i.renderOrder=9,i.name="fx.streaks";const s=new Float32Array(il*3),r=[[.5,1.7,2.6],[2.2,.5,1.9],[2.2,2.3,2.6],[2.4,1.1,.35]],a=[];for(let c=0;c<il;c++){const h=r[c%7===0?3:c%3];s.set(h,c*3),a.push({th:n()*Math.PI*2,r:3.4+n()*6,z:-n()*60,v:.7+n()*.6,w:.006+n()*.009})}t.setAttribute("aCol",new vs(s,3));const l=new rn;return l.name="fx.streakRig",l.add(i),{group:l,mesh:i,mat:e,S:a}}const Wm=10;function cw(){const n=new _a(.9,1,128,1),t=[],e=new rn;e.name="fx.rings";for(let i=0;i<Wm;i++){const s=new Xe({uniforms:{uCol:{value:new Gt},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uCol; uniform float uA; varying vec2 vUv;
        void main(){ float r = length(vUv - 0.5) * 2.0; float e = 1.0 - abs((r - 0.95) / 0.05);
          e = clamp(e, 0.0, 1.0); gl_FragColor = vec4(uCol * e * uA, e * uA); }
      `,transparent:!0,depthWrite:!1,side:Ve,blending:yn}),r=new ge(n,s);r.visible=!1,r.frustumCulled=!1,r.renderOrder=8,e.add(r),t.push({m:r,age:0,life:0,r0:1})}return{group:e,list:t,next:0}}const tr=5600;function hw(){const n=new pn(1,1),t=new pm;t.index=n.index,t.attributes.position=n.attributes.position,t.attributes.uv=n.attributes.uv;const e=new vs(new Float32Array(tr*3),3);e.setUsage(zs);const i=new vs(new Float32Array(tr*4),4);i.setUsage(zs);const s=new vs(new Float32Array(tr*2),2);s.setUsage(zs),t.setAttribute("iPos",e),t.setAttribute("iPar",i),t.setAttribute("iExt",s),t.instanceCount=0;const r=_s.merge([ue.fog,{uKey:{value:new Gt(1.9,1.96,2.06)},uFill:{value:new Gt(.2,.32,.62)},uRed:{value:new Gt(1.6,.16,.24)},uAmb:{value:new Gt(.2,.21,.24)},uKeyDir:{value:new D(-.35,1,.3).normalize()},uFillDir:{value:new D(.6,-.35,-.4).normalize()},uRedDir:{value:new D(-1,-.15,.1).normalize()},uCam:{value:new D},uCarInv:{value:new Pe},uCarOn:{value:0},uFloorY:{value:0},uProtect:{value:1}}]),a=new Xe({uniforms:r,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      attribute vec3 iPos; attribute vec4 iPar; attribute vec2 iExt;
      uniform vec3 uKeyDir, uFillDir, uRedDir;
      varying vec2 vUv; varying float vA; varying float vSeed; varying float vH; varying float vAge; varying float vKind;
      varying vec3 vLk; varying vec3 vLf; varying vec3 vLr; varying float vCy; varying float vSz; varying vec3 vWp; varying float vNear;
      #include <fog_pars_vertex>
      void main(){
        vUv = uv; vA = iPar.y; vSeed = iPar.w; vAge = iExt.x; float kn = iExt.y; vNear = step(1.5, kn); vKind = kn - 2.0 * vNear; vSz = iPar.x;
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
        // v4: plume puffs are stretched sideways (rolling gas, not round cotton balls); the high puffs on the upper edge
        // stretch UP instead (rising tendrils / tall heads, not a row of round cumulus tops)
        float hi = smoothstep(1.2, 2.6, iPos.y) * vKind;
        q.x *= 1.0 + (0.08 + 0.22 * fract(iPar.w * 7.31)) * vKind * (1.0 - 0.7 * hi);
        q.y *= 1.0 + hi * (0.2 + 0.4 * fract(iPar.w * 3.17));
        vec3 wp = iPos + R * q.x + U * q.y;
        vH = wp.y; vCy = iPos.y; vWp = wp;
        vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uKey, uFill, uRed, uAmb;
      uniform vec3 uCam; uniform mat4 uCarInv; uniform float uCarOn; uniform float uFloorY; uniform float uProtect;
      varying vec2 vUv; varying float vA; varying float vSeed; varying float vH; varying float vAge; varying float vKind;
      varying vec3 vLk; varying vec3 vLf; varying vec3 vLr; varying float vCy; varying float vSz; varying vec3 vWp; varying float vNear;
      #include <fog_pars_fragment>
      float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float a = 0.55, s = 0.0; for (int i = 0; i < 3; i++) { s += a * vn(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
      float fbm2(vec2 p){ return 0.62 * vn(p) + 0.38 * vn(p * 2.03 + 17.1); }
      // entry + exit distances (1e5 = miss)
      vec2 boxTE(vec3 ro, vec3 rd, vec3 bmin, vec3 bmax){
        vec3 inv = 1.0 / rd; vec3 t0 = (bmin - ro) * inv, t1 = (bmax - ro) * inv;
        vec3 tn = min(t0, t1), tf = max(t0, t1);
        float a = max(max(tn.x, tn.y), tn.z), b = min(min(tf.x, tf.y), tf.z);
        return (b >= max(a, 0.0)) ? vec2(max(a, 0.0), b) : vec2(1e5);
      }
      void main(){
        vec2 p = (vUv - 0.5) * 2.0; float r2 = dot(p, p);
        if (r2 > 1.0 || vA * min(1.0, 3.2 * (1.0 - r2)) < 0.012) discard;
        vec2 o = vec2(vSeed * 37.0, vSeed * 11.0 - vAge * 0.6);
        float n = fbm(p * 1.7 + o);
        float nd = fbm2(p * 3.6 - o * 1.3) * 0.96;
        float nf = vKind > 0.5 ? vn(p * 7.5 + o * 2.1) : 0.5;
        // dense core, cauliflower edge eroded by the noise; the edge gets wispier (ragged, fine-scale) as the puff ages
        float shape = (1.0 - r2) * (0.75 + 0.5 * n) - (0.18 + 0.3 * vAge) * (1.0 - nd) - vKind * (0.06 + 0.12 * vAge) * (1.0 - nf) * r2;
        float dens = smoothstep(0.0, mix(0.42, 0.5, vKind), shape);
        float a = dens * vA;
        a = min(1.0, a * (1.0 + 0.25 * vKind * (1.0 - smoothstep(0.0, 1.1, vH - uFloorY))));   // denser at the floor
        // v4 soft depth fade: against the floor and against the car (analytic boxes in the car's frame), so puffs that
        // cut through the body or the deck melt into it instead of showing hard sprite edges
        a *= smoothstep(0.0, 0.28, vH - uFloorY);
        if (uCarOn > 0.5 && vNear > 0.5) {
          vec3 rdW = vWp - uCam; float tFrag = length(rdW); rdW /= tFrag;
          vec3 ro = (uCarInv * vec4(uCam, 1.0)).xyz, rd = normalize(mat3(uCarInv) * rdW);
          // only fragments INSIDE a body box fade (soft); smoke behind the car is left to the depth test, so the boxes'
          // corners outside the real silhouette never punch rectangular holes in the cloud behind
          vec2 b1 = boxTE(ro, rd, vec3(-0.86, 0.1, -2.1), vec3(0.86, 0.76, 2.1)), b2 = boxTE(ro, rd, vec3(-0.7, 0.76, -0.9), vec3(0.7, 1.06, 1.3));
          float in1 = (1.0 - smoothstep(0.0, 0.55, b1.x - tFrag + 0.05)) * (1.0 - smoothstep(0.0, 0.3, tFrag - b1.y));
          float in2 = (1.0 - smoothstep(0.0, 0.55, b2.x - tFrag + 0.05)) * (1.0 - smoothstep(0.0, 0.3, tFrag - b2.y));
          a *= 1.0 - max(in1, in2);
          // v4 r2: smoke between the lens and the car's UPPER body (belt line and up) clears per pixel (soft 0.3 m
          // feather): the glasshouse and roof stay crisp while the wheels, sills and lower doors sink into the cloud
          // (ref f_027-f_029). Sphere-traced from the fragment toward the car, only when the ray passes near it.
          if (uProtect > 0.5 && a > 0.012) {
            // analytic: closest approach (in front of the fragment) of the view ray to a capsule along the car's axis at
            // belt->roof height, in a space squashed so the capsule is round (x 0.66, y 1.8): feather ~0.6 m sideways,
            // ~0.4 m at the nose / tail, only ~0.22 m down the doors
            vec3 S3 = vec3(0.66, 1.8, 1.0);
            vec3 o3 = (ro - vec3(0.0, 0.9, -0.05)) * S3, d3 = rd * S3;
            float dd2 = dot(d3.xy, d3.xy);
            float ts = dd2 > 1e-5 ? -dot(o3.xy, d3.xy) / dd2 : tFrag;
            vec3 P3 = o3 + d3 * max(ts, tFrag);
            float dz = max(abs(P3.z) - 1.55, 0.0);
            float md = sqrt(dot(P3.xy, P3.xy) + dz * dz) - 0.576;
            a *= smoothstep(-0.05, 0.4, md);
          }
        }
        if (a < 0.012) discard;
        // fake normal: the puff as a lumpy sphere, the noise bending it (noise-lit)
        vec3 N = normalize(vec3(p * 0.95 + (vec2(n, nd) - 0.5) * 0.9, sqrt(max(0.04, 1.0 - r2))));
        float kd = clamp(dot(N, vLk) * 0.62 + 0.38, 0.0, 1.0);
        float fd = clamp(dot(N, vLf) * 0.5 + 0.5, 0.0, 1.0);
        float rim = pow(1.0 - N.z, 1.6) * clamp(dot(N, vLr) * 0.8 + 0.35, 0.0, 1.0);
        // near-white cauliflower with blue-grey shadowed folds and undersides; red/pink floor-LED pickup low down
        float low = mix(exp(-max(0.0, vH - 0.15) / 0.9), 1.0 - smoothstep(0.05, 1.0, vH - uFloorY), vKind);
        float shadow = mix(mix(0.62, 0.74, vKind), 1.0, smoothstep(-0.2, mix(2.6, 2.2, vKind), vH)) * mix(0.8, 1.0, kd);
        vec3 amb = mix(uAmb, vec3(0.27, 0.31, 0.38), vKind);
        vec3 col = amb * (0.6 + 0.4 * n) + uKey * kd * kd * (0.62 + 0.6 * n) * shadow + uFill * fd * (0.32 + 0.3 * (1.0 - kd));
        col *= mix(1.0, 0.9 + 0.36 * dens, vKind);                                      // dense cores glow brighter
        // vertical gradient: blue-grey under the bank, cool white on the tops (ref f_026-f_031)
        float gy = smoothstep(-0.1, 2.6, vH - uFloorY + (N.y - 0.2) * 0.6);
        col *= mix(vec3(1.0), mix(vec3(0.35, 0.4, 0.55), vec3(1.14, 1.17, 1.22), gy), vKind);
        // integration: the neon ambient tinted the plume lavender; pull the lit tops back toward a neutral cool white
        col = mix(col, vec3(dot(col, vec3(0.3, 0.5, 0.2))) * vec3(0.97, 1.0, 1.05), 0.45 * vKind * gy);
        col += uRed * (rim * 0.9 + 0.26) * low * mix(0.3, 0.12, vKind) * (1.0 - 0.4 * dens);
        // billow texture: shadowed folds between the lumps (ref: high-contrast cauliflower, not a soft cotton ball)
        float tex = mix(0.66, 1.14, smoothstep(0.28, 0.78, n * 0.6 + nd * 0.4));
        col *= mix(0.86, tex, vKind);
        // red floor-LED pickup through the base of the plume (ref f_029): hue-pure, added as emission so it survives the
        // tone map, strongest in the lowest 0.5 m and on the lit rims
        float lowR = (1.0 - smoothstep(0.0, 0.55, vH - uFloorY)) * vKind;
        col += vec3(1.6, 0.1, 0.15) * lowR * (0.45 + 0.9 * rim) * (0.55 + 0.45 * dens);
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
      }`}),l=new ge(t,a);return l.frustumCulled=!1,l.renderOrder=5,l.name="fx.smoke",{mesh:l,geo:t,mat:a,iPos:e,iPar:i,iExt:s,ord:new Uint16Array(tr),key:new Float32Array(tr),tmp:new Float32Array(tr*9)}}const oi=new D,za=new D,br=new D,ic=new D,np=new D;function Es(n){const t=Math.sin(n*912.73+17.31)*43758.5453;return t-Math.floor(t)}function Kh(n,t,e,i){const s=i-e.t0;if(s<0||s>=e.life)return!1;const r=e.k??1.7,a=1-Math.exp(-r*s),l=a/r,c=e.r0+(e.r1-e.r0)*(1-Math.exp(-1.25*s));let h=e.y+e.vy*l+(e.rise??.28)*s;h=Math.max(h,c*.32),e.ymax!=null&&(h=Math.min(h,e.ymax));const o=Math.min(1,s/(e.fin??.12))*Math.pow(1-s/e.life,1.4);return n[t]=e.x+e.vx*l,n[t+1]=h,n[t+2]=e.z+e.vz*l,n[t+3]=c,n[t+4]=(e.a??.55)*o,n[t+5]=e.seed*6.283+s*(e.seed-.5)*.6,n[t+6]=e.seed,n[t+7]=s/e.life,n[t+8]=e.kind||0,!0}const mi={t0:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,r0:0,r1:0,life:1,a:.5,seed:0,k:1.4,rise:.03,kind:1,ymax:1.2,fin:.2},sf=new D(1e5,0,0),gi={t0:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,r0:0,r1:0,life:1,a:.5,seed:0,k:1.2,rise:.4,kind:1,ymax:3,fin:.35};function ip(n,t=0){if(n.kind!==1)return null;if(t===1){if(Es(n.seed*4.1+.3)>.06)return null;const v=Es(n.seed*6.7+2.1),g=Es(n.seed*8.3+5.5),m=Math.hypot(n.vx,n.vz)||1,p=Math.min(1,4.5/m)*(.6+.3*v);return gi.t0=n.t0+.1+.3*g,gi.x=n.x,gi.z=n.z,gi.y=.5,gi.vx=n.vx*p,gi.vz=n.vz*p,gi.vy=2+1.2*v,gi.k=1.3,gi.r0=.8,gi.r1=2.5+.5*g,gi.life=5+1.5*v,gi.a=.5,gi.rise=.32+.16*g,gi.ymax=2.4+.6*v,gi.seed=Es(n.seed*17.3+.7),gi}if(Es(n.seed*3.7+.11)>.28)return null;const i=Es(n.seed*5.3+1.7),s=Es(n.seed*9.1+4.2),r=Es(n.seed*2.3+8.8),a=(i-.5)*1.3,l=Math.cos(a),c=Math.sin(a);let h=sf.x-n.x,o=sf.z-n.z;const u=Math.hypot(h,o);if(u>.5)h/=u,o/=u;else{const v=Math.hypot(n.vx,n.vz)||1;h=-n.vx/v,o=-n.vz/v}const f=Math.min(.35+.45*r,1)*Math.min(Math.hypot(n.vx,n.vz)||3,1.8+2.7*r);mi.t0=n.t0-.15+.25*s,mi.x=n.x,mi.z=n.z,mi.vx=(h*l-o*c)*f,mi.vz=(h*c+o*l)*f;const d=s<.4;return mi.vy=d?.35+.6*i:.15+.25*i,mi.r0=d?.18:.35+.2*i,mi.r1=d?.3+.5*r:.9+.8*r,mi.y=.2+.35*i,mi.ymax=d?1.3+.6*r:.85+.35*r,mi.life=n.life*(.65+.3*r),mi.a=d?.55:.62,mi.seed=Es(n.seed*13.7+2.9),mi.k=(n.k??1.4)*1.1,mi.rise=d?.12+.2*s:.03+.06*s,mi}const uw=new Pe;function fw(n,t,e,i,s,r,a){let l=0;const c=n.tmp;if(i&&i.getWorldPosition(sf),e!=null){for(const d of[t,a])if(!(!d||!d.length))for(let v=0;v<d.length&&l<tr;v++){const g=d[v];if(Kh(c,l*9,g,e)&&l++,g.kind===1){if(l<tr){const m=ip(g,0);m&&Kh(c,l*9,m,e)&&l++}if(l<tr){const m=ip(g,1);m&&Kh(c,l*9,m,e)&&l++}}}}const h=n.mat.uniforms;if(i&&(i.getWorldPosition(oi),h.uCam.value.copy(oi)),r&&r.isObject3D?(r.updateWorldMatrix(!0,!1),h.uCarInv.value.copy(uw.copy(r.matrixWorld).invert()),h.uCarOn.value=1):h.uCarOn.value=0,l>0&&i&&s){i.getWorldPosition(oi),i.getWorldDirection(za),br.copy(s),br.y+=.55;const d=br.x-oi.x,v=br.y-oi.y,g=br.z-oi.z,m=Math.hypot(d,v,g);if(m>.5){const p=d/m,M=v/m,w=g/m;for(let y=0;y<l;y++){const L=y*9,I=c[L]-oi.x,R=c[L+1]-oi.y,U=c[L+2]-oi.z,P=I*p+R*M+U*w;if(P>m){Math.hypot(c[L]-br.x,c[L+1]-br.y,c[L+2]-br.z)<c[L+3]*.9+2.6&&(c[L+8]+=2);continue}if(P<0)continue;{const Jt=Math.min(1,Math.max(0,(P-m*.35)/(m*.35)));c[L+4]*=Jt*Jt*(3-2*Jt)}const _=I-p*P,N=R-M*P,W=U-w*P,nt=Math.hypot(_,N,W)*(m/Math.max(.5,P)),mt=c[L+3]*.85*(m/Math.max(.5,P))+2.4;if(nt>=mt)continue;c[L+8]+=2;const Ct=Math.max(0,(nt/mt-.72)/.28),pt=Ct*Ct*(3-2*Ct),Ut=c[L+1]+c[L+3]*.55,et=Math.min(Math.max(1.2,s.y+.62),s.y+.85),Ot=Ut<et?1:Ut<et+.5?1-.65*(Ut-et)/.5:.35;c[L+4]*=Ot+(1-Ot)*pt}}}{let d=0;for(let v=0;v<l;v++)c[v*9+4]>.012&&(n.ord[d++]=v);l=d}if(l>1&&i){i.getWorldPosition(oi),i.getWorldDirection(za);for(let g=0;g<l;g++){const m=n.ord[g],p=m*9;n.key[m]=(c[p]-oi.x)*za.x+(c[p+1]-oi.y)*za.y+(c[p+2]-oi.z)*za.z}const d=n.ord.subarray(0,l),v=n.key;d.sort((g,m)=>v[m]-v[g])}const o=n.iPos.array,u=n.iPar.array,f=n.iExt.array;for(let d=0;d<l;d++){const v=n.ord[d]*9;o[d*3]=c[v],o[d*3+1]=c[v+1],o[d*3+2]=c[v+2],u[d*4]=c[v+3],u[d*4+1]=c[v+4],u[d*4+2]=c[v+5],u[d*4+3]=c[v+6],f[d*2]=c[v+7],f[d*2+1]=c[v+8]}n.geo.instanceCount=l,n.mesh.visible=l>0,n.iPos.needsUpdate=!0,n.iPar.needsUpdate=!0,n.iExt.needsUpdate=!0}const No=40,pa=18,Go=(pa+1)*2;function dw(){const n=new $e,t=new dn(new Float32Array(No*Go*3),3);t.setUsage(zs);const e=new dn(new Float32Array(No*Go*4),4);e.setUsage(zs);const i=new dn(new Float32Array(No*Go*2),2);i.setUsage(zs),n.setAttribute("position",t),n.setAttribute("aJ",e),n.setAttribute("aK",i);const s=new Uint16Array(No*pa*6);let r=0;for(let c=0;c<No;c++)for(let h=0;h<pa;h++){const o=c*Go+h*2;s[r++]=o,s[r++]=o+1,s[r++]=o+2,s[r++]=o+1,s[r++]=o+3,s[r++]=o+2}n.setIndex(new dn(s,1)),n.setDrawRange(0,0);const a=new Xe({uniforms:{uT:{value:0},uCore:{value:new Gt(1.15,1.55,1.9)},uEdge:{value:new Gt(.24,.56,1.2)},uTail:{value:new Gt(.36,.42,.56)}},transparent:!0,depthWrite:!1,toneMapped:!1,side:Ve,blending:wp,blendSrc:Sp,blendDst:xc,vertexShader:`
      attribute vec4 aJ; attribute vec2 aK;
      varying vec4 vJ; varying vec2 vK;
      void main(){ vJ = aJ; vK = aK; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uT; uniform vec3 uCore, uEdge, uTail; varying vec4 vJ; varying vec2 vK;
      float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        float u = clamp(vJ.x, 0.0, 1.0), v = vJ.y, lvl = vJ.z, sd = vJ.w, L = vK.x;
        float d = u * L;
        // gas streaming out of the nozzle: low-frequency density scrolled along the axis (period ~1 m: no beads)
        float n = vn(vec2(d * 1.1 - uT * 7.5, sd * 17.0 + v * 0.6)) * 0.6 + vn(vec2(d * 2.3 - uT * 11.0, sd * 5.0 - v * 1.2)) * 0.4;
        float vv = v + (n - 0.5) * 0.35 * u;                          // ragged soft edge further out
        float across = exp(-vv * vv * 2.8);
        float core = exp(-v * v * 14.0) * pow(1.0 - u, 4.0);
        // v4 r2 (ref f_024): bright only near the nozzle, fading fast; the outer half turns from pale cyan into grey-blue
        // gas (less light, more cover) where it blooms into the plume
        float along = pow(1.0 - u, 1.8) * smoothstep(0.0, 0.025, u + 0.01);
        float a = across * along * (0.72 + 0.5 * n * u + 0.28 * (1.0 - u)) * lvl;
        a *= mix(0.95, 0.75, vK.y);                                    // pitch / rear jets a touch fainter
        float tl = smoothstep(0.35, 0.85, u);
        vec3 col = mix(mix(uEdge, uTail, tl), uCore, clamp(core * 1.4, 0.0, 1.0));
        a = clamp(a, 0.0, 1.0);
        gl_FragColor = vec4(col * a * (1.0 - 0.35 * tl), a * mix(0.45, 0.75, tl));
      }`}),l=new ge(n,a);return l.frustumCulled=!1,l.renderOrder=4,l.name="fx.jets",{mesh:l,geo:n,mat:a,pos:t,aJ:e,aK:i,n:0}}function sp(n){const t=Math.floor(n),e=n-t,i=e*e*(3-2*e),s=r=>{const a=Math.sin(r*127.1+311.7)*43758.5453;return a-Math.floor(a)};return s(t)*(1-i)+s(t+1)*i-.5}const $h=new D,cs=new D,rp=new Jn,Vr=new D,op=new D,Na=new D,Wr=new D,ap=new D,lp=new D,cp=new D,pw=new D,hp=new WeakMap;function mw(n){if(!n||!n.anchors)return;let t=hp.get(n);if(!t){t=[];const e=s=>s.isMesh&&s.material&&s.material.isShaderMaterial||s.isSprite&&s.material&&s.material.color&&s.material.color.b<.5;for(const s of n.anchors.nozzles||[])for(const r of s.children)r.isGroup&&r.children.length&&r.children.every(a=>a.isMesh&&a.material&&a.material.isShaderMaterial)&&t.push(r);const i=n.anchors.rcs||{};for(const s of Object.values(i))if(Array.isArray(s))for(const r of s)for(const a of r.children)e(a)&&t.push(a);hp.set(n,t)}for(const e of t)e.visible=!1}function jh(n,t,e,i,s,r,a,l,c,h,o=0,u=1,f=null,d=0){if(n.n>=No||(t.getWorldPosition($h),t.getWorldQuaternion(rp),cs.copy(t.userData.dir||Vr.set(0,0,1)).applyQuaternion(rp).normalize(),d===1?e*=ir(.35,.75,-cs.y):d===2&&(e*=1-ir(.45,.8,Math.abs(cs.y))),e<.05))return;f&&cs.add(f).normalize();let v=i;if(c&&cs.y<-.4&&(v=Math.min(i,Math.max(.05,($h.y-.02)/-cs.y))),v<.06)return;Vr.set(0,1,0),Math.abs(cs.y)>.9&&Vr.set(1,0,0),Vr.cross(cs).normalize(),op.copy(cs).cross(Vr).normalize();const g=n.pos.array,m=n.aJ.array,p=n.aK.array,M=n.n*Go;for(let w=0;w<=pa;w++){const y=w/pa,L=y*v,I=L/i,R=.11*I*I*u,U=sp(a*1.6-L*.35+l*7.1)*R,P=sp(a*1.3-L*.3+l*3.3+40)*R;Na.copy($h).addScaledVector(cs,L).addScaledVector(Vr,U).addScaledVector(op,P),ap.subVectors(h,Na),Wr.crossVectors(cs,ap),Wr.lengthSq()<1e-8&&Wr.copy(Vr),Wr.normalize();const _=s+(r-s)*Math.pow(I,.85);for(let N=0;N<2;N++){const W=M+w*2+N,nt=N?1:-1;g[W*3]=Na.x+Wr.x*_*nt,g[W*3+1]=Na.y+Wr.y*_*nt,g[W*3+2]=Na.z+Wr.z*_*nt,m[W*4]=I,m[W*4+1]=nt,m[W*4+2]=e,m[W*4+3]=l,p[W*2]=i,p[W*2+1]=o}}n.n++}function gw(n,t,e){const i=n&&n.isWebGLRenderer?{renderer:n,scene:t,camera:e}:n||{},s=i.renderer;let r=i.scene,a=i.camera;if(!s)throw new Error("createFX: renderer required");const l={exposure:1,bloomStrength:.9,bloomRadius:0,bloomThreshold:1,bloomKnee:.5,bloomLimit:.9,vignette:.5,grain:.04,saturation:1.12,contrast:1.07,caBase:0,speedBlur:1,streaks:1,fovPunchDeg:9,shakeAmp:.22,ownCamera:i.ownCamera===!0,autoTimeline:i.autoTimeline!==!1};let c=ep(1337);const h=new Xt;s.getSize(h);const o=s.getPixelRatio(),u=new Xi(Math.max(1,h.x*o),Math.max(1,h.y*o),{type:ts,samples:Math.min(4,s.capabilities.maxSamples||0)});u.texture.name="fx.rt";const f=new Jb(s,u);f.setPixelRatio(o),f.setSize(Math.max(1,h.x),Math.max(1,h.y));const d=new Qb(r,a);f.addPass(d);const v=new ow;f.addPass(v);const g=new da(new Xt(h.x*o,h.y*o),l.bloomStrength,l.bloomRadius,l.bloomThreshold);g.highPassUniforms.smoothWidth.value=l.bloomKnee;try{const j=g.compositeMaterial.uniforms.bloomFactors;j&&Array.isArray(j.value)&&(j.value=[1,.9,.62,.36,.2])}catch{}try{if(g.copyUniforms&&g.blendMaterial){g.copyUniforms.uLimit={value:l.bloomLimit};const j=g.blendMaterial;g.blendMaterial=new Xe({uniforms:g.copyUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
          uniform sampler2D tDiffuse; uniform float opacity; uniform float uLimit; varying vec2 vUv;
          void main() {
            vec3 b = max(texture2D(tDiffuse, vUv).rgb, vec3(0.0));
            float m = max(b.r, max(b.g, b.b));
            b *= 1.0 / (1.0 + m / uLimit);
            gl_FragColor = vec4(b * opacity, 1.0);
          }
        `,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),j.dispose()}}catch{}f.addPass(g);const m=new rw;m.setSize(h.x*o,h.y*o),f.addPass(m);let p=h.x,M=h.y,w=o;const y=aw(),L=lw(c),I=cw(),R=new rn;R.name="fx.root";const U=hw(),P=dw();R.add(y.mesh,L.group,I.group,U.mesh,P.mesh),r&&r.add(R);const _={ca:0,shake:0,fov:0,fovV:0,flash:0,flashColor:new Gt(1,1,1),bloomKick:0,streakKick:0,simT:0,lastT:null,speed:0,boost:0,explicit:{},autoDone:{},lastBeat:-1,gpFlash:0,gpCA:0,timeScale:1,extSpeed:null},N=new D,W=new D,nt=new D,mt=new Jn,Ct=new Pe,pt=new D(1,1,1),Ut=new Ni;let et={};function Ot(){try{return typeof window<"u"&&window.__game||null}catch{return null}}let Jt=()=>null;function oe(j){const $t=Jt();return $t?$t.getWorldPosition(j):a?(a.getWorldDirection(nt),j.copy(a.position).addScaledVector(nt,6).setY(0)):j.set(0,0,0)}function ce(j,$t,he,A,B,X,ot,S,x,T,b,$,O,it,st){const Lt=y.P;let vt;Lt.n<jn?vt=Lt.n++:vt=Math.floor(c()*jn),Lt.pos[vt*3]=j,Lt.pos[vt*3+1]=$t,Lt.pos[vt*3+2]=he,Lt.vel[vt*3]=A,Lt.vel[vt*3+1]=B,Lt.vel[vt*3+2]=X,Lt.life[vt]=ot,Lt.age[vt]=0,Lt.size0[vt]=S,Lt.size1[vt]=x,Lt.col0[vt*3]=T[0],Lt.col0[vt*3+1]=T[1],Lt.col0[vt*3+2]=T[2],Lt.col1[vt*3]=b[0],Lt.col1[vt*3+1]=b[1],Lt.col1[vt*3+2]=b[2],Lt.stretch[vt]=$,Lt.grav[vt]=O,Lt.drag[vt]=it,Lt.floor[vt]=st===void 0?-1e9:st}const lt=[7,4.4,2],Y=[2.6,.55,.08];function V(j,$t=1,he,A=lt,B=Y){const X=j||oe(W),ot=Math.round(70*$t),S=(he?he.x*8:0)+yt.x*.3,x=he?he.y*8:0,T=(he?he.z*8:0)+yt.z*.3;for(let b=0;b<ot;b++){const $=c()*Math.PI*2,O=(4+c()*11)*(.6+.4*$t),it=.3+c()*.9;ce(X.x+(c()-.5)*1.6,X.y+.05,X.z+(c()-.5)*2,Math.cos($)*O+S,it*O*.7+x,Math.sin($)*O+T,.25+c()*.5,.045+c()*.035,.012,A,B,.035,-22,1.6,X.y)}for(let b=0;b<Math.round(8*$t);b++)ce(X.x+(c()-.5)*1.2,X.y+.1,X.z+(c()-.5)*1.2,(c()-.5)*3+S,1+c()*2,(c()-.5)*3+T,.4+c()*.3,.18,.02,[5,2.5,.8],[1.2,.2,.05],0,-4,2.5,X.y)}const bt=[1.2,2.4,4.4],_t=[.15,.55,2],Rt=[.3,1.15,3.2],zt=[.02,.1,.55],Ht=[.08,.22,.6],re=[0,.02,.12],yt=new D,Nt=new D;let z=!1;function jt(j,$t,he=1,A){if(!j)return;const B=$t||nt.set(0,0,1),X=A||yt,ot=Math.max(1,Math.round(5*he));for(let S=0;S<ot;S++){const x=16+c()*10,T=.5+1.2*c(),b=c()*.016;ce(j.x+B.x*x*b,j.y+B.y*x*b,j.z+B.z*x*b,X.x+B.x*x+(c()-.5)*T,X.y+B.y*x+(c()-.5)*T,X.z+B.z*x+(c()-.5)*T,.12+c()*.14,.022+.018*he,.075,Rt,zt,.045,0,3)}c()<.6&&ce(j.x,j.y,j.z,X.x+B.x*7,X.y+B.y*7,X.z+B.z*7,.18,.05+.04*he,.26,Ht,re,.02,0,2.5),ce(j.x,j.y,j.z,X.x+B.x*9,X.y+B.y*9,X.z+B.z*9,.04,.028*he+.012,.02,bt,_t,.03,0,0)}function Vt(j,$t,he,A=4){const B=I.list[I.next];I.next=(I.next+1)%Wm;const X=j||oe(W);B.m.position.copy(X),$t?B.m.quaternion.copy($t):a&&B.m.quaternion.copy(a.quaternion);const ot=he?new Gt(he):new Gt(.3,2.4,3.2);B.m.material.uniforms.uCol.value.copy(ot).multiplyScalar(ot.r+ot.g+ot.b<3.2?2.5:1),B.m.visible=!0,B.age=0,B.life=.55,B.r0=A;const S=B.m.material.uniforms.uCol.value,x=[S.r*1.4,S.g*1.4,S.b*1.4],T=[S.r*.2,S.g*.2,S.b*.2];mt.copy(B.m.quaternion);for(let b=0;b<48;b++){const $=b/48*Math.PI*2+c()*.1;nt.set(Math.cos($),Math.sin($),0).applyQuaternion(mt);const O=3+c()*4;ce(X.x+nt.x*A,X.y+nt.y*A,X.z+nt.z*A,nt.x*O,nt.y*O,nt.z*O,.4+c()*.3,.06,.01,x,T,.05,0,2.2)}_.bloomKick=Math.max(_.bloomKick,.35)}function se(j=1){_.ca=Math.min(1.5,_.ca+.8*j),_.shake=Math.min(1.5,_.shake+.6*j)}function K(j=1){_.shake=Math.min(1.5,_.shake+j),_.ca=Math.min(1.5,Math.max(_.ca,.25*j))}function gt(j=1){_.ca=Math.min(1.5,Math.max(_.ca,j))}function ft(j){_.extSpeed=j==null?null:$s(+j||0)}function C(j){_.timeScale=+j||1}function E(j=1){_.fovV+=l.fovPunchDeg*14*j}function G(j=1,$t){_.flash=Math.max(_.flash,j),_.flashColor.set($t===void 0?16777215:$t)}function q(j=1){_.bloomKick=Math.max(_.bloomKick,.22*j)}function J(j=1){E(j),_.ca=Math.min(1.5,_.ca+.35*j),_.streakKick=Math.max(_.streakKick,.6*j),_.bloomKick=Math.max(_.bloomKick,.3*j)}function Z(j,$t=1){V(j,$t),se(.55*$t),G(.08*$t,16766880)}function wt(j,$t=1){V(j,.8*$t,null,[6,1.2,4.5],[1.5,.05,1.2]),se(1.2*$t),G(.12*$t,16727240)}function Q(j=1){_.explicit.finish=!0,G(j,16777215),_.bloomKick=Math.max(_.bloomKick,1.2),_.ca=Math.min(1.5,_.ca+.6),E(.6);const $t=oe(N);$t.y+=.6,Vt($t,a?a.quaternion:null,16777215,2.5),Vt($t,a?a.quaternion:null,16727240,4),V($t,.9,null,[6,6,7],[1.6,.2,1.4])}function ct(){y.P.n=0,y.quad.instanceCount=0,z=!1,yt.set(0,0,0),At=null,_.ca=_.shake=_.fov=_.fovV=_.flash=_.bloomKick=_.streakKick=0,_.autoDone={},_.lastBeat=-1,_.simT=0;for(const j of I.list)j.m.visible=!1,j.age=j.life=0;c=ep(1337)}function rt(j,$t){if(!l.autoTimeline||j==null)return;const he=(A,B,X)=>{!_.autoDone[A]&&j>=B&&j-B<.5+$t?(_.autoDone[A]=!0,_.explicit[A]||X()):j>=B+.5+$t&&(_.autoDone[A]=!0)};he("launch",16*Ar,()=>{J(1),se(.4),V(null,.6,nt.set(0,0,0))}),he("checkpoint",48*Ar,()=>{Vt(null,null,4253951,5),G(.15,8450303)}),he("liftoff",96*Ar,()=>{J(1.1)}),he("touchdown",128*Ar+1,()=>{Z(null,.8)}),he("finish",ew,()=>Q(.9)),gn(j)}function k(j){const $t=[j&&j.gp,j&&j.gameplay,j&&j.S],he=Ot();he&&$t.push(he.gp,he.gameplay,he.state);for(const A of $t){if(!A)continue;const B=A.state&&typeof A.state=="object"&&"t"in A.state?A.state:A;if(B&&typeof B=="object"&&typeof B.t=="number"&&Array.isArray(B.events))return B}return j&&typeof j.t=="number"&&Array.isArray(j.events)?j:null}function tt(j){if(!j)return null;if(j.isObject3D)return j;for(const $t of["object","root","group","object3d","mesh"])if(j[$t]&&j[$t].isObject3D)return j[$t];return null}Jt=function(){const j=Ot();return tt(et.car)||tt(j&&j.car)||null};function Mt(j){const $t=Ot(),he=(et.car&&!et.car.isObject3D?et.car:null)||j&&j.userData&&j.userData.car||($t&&$t.car&&!$t.car.isObject3D?$t.car:null);return he&&he.anchors&&Array.isArray(he.anchors.nozzles)?he.anchors.nozzles:j&&j.userData&&Array.isArray(j.userData.thrusters)?j.userData.thrusters:null}let Et=new WeakSet,St=null;const qt=new D,kt=new Jn,Tt=new D(0,0,1);function F(j,$t,he){return j&&j.pos&&j.pos.isVector3?(he.copy(j.pos),$t>0&&j.fwd&&j.fwd.isVector3&&he.addScaledVector(j.fwd,-(j.v||0)*$t),he):oe(he)}function dt(j,$t,he){const A=j.type,B=F($t,he,qt),X=$t&&typeof $t.landImpact=="number"?$t.landImpact:.6;switch(A){case"launch":{const ot=j.rating==="PERFECT";j.rating!=="EARLY"&&(nt.set(0,0,0),V(B,ot?.9:.5,null),_.streakKick=Math.max(_.streakKick,ot?.9:.5),_.bloomKick=Math.max(_.bloomKick,.5),_.ca=Math.min(1.5,_.ca+.45));break}case"shift":j.perfect&&(_.streakKick=Math.max(_.streakKick,.45),_.bloomKick=Math.max(_.bloomKick,.3),_.ca+=.15);break;case"land":case"landing":V(B,.5+.4*X);break;case"touchdown":V(B,.3+.2*X);break;case"scrape":V(B,.45,null,[5,3.2,1.6],[1.6,.3,.06]);break;case"hit":case"bounce":case"pylon":V(W.copy(B).add(nt.set(0,.5,0)),.7,null,[6,1.4,4.5],[1.4,.05,1.1]),_.flashColor.set(16734930);break;case"ring":{$t&&$t.fwd&&$t.fwd.isVector3?kt.setFromUnitVectors(Tt,$t.fwd):a&&kt.copy(a.quaternion);const ot=j.text==="BULLSEYE";Vt(B,kt,ot?16757818:3203327,3.2);break}case"checkpoint":{$t&&$t.fwd&&$t.fwd.isVector3?kt.setFromUnitVectors(Tt,$t.fwd):a&&kt.copy(a.quaternion),Vt(B,kt,4253951,5.5),_.bloomKick=Math.max(_.bloomKick,.3);break}case"flies":case"boost":_.streakKick=Math.max(_.streakKick,1),_.bloomKick=Math.max(_.bloomKick,.35);break;case"boostready":_.bloomKick=Math.max(_.bloomKick,.5);break;case"loop":case"upside":_.streakKick=Math.max(_.streakKick,.5);break;case"fleet":_.bloomKick=Math.max(_.bloomKick,.4);break;case"finish":_.explicit.finish=!0,Q(.95);break}}function at(j,$t,he){const A=[];if(!j||!Array.isArray(j.events))return A;for(const B of j.events)!B||typeof B!="object"||Et.has(B)||(Et.add(B),!(typeof B.t=="number"&&$t-B.t>he)&&A.push(B));return A.sort((B,X)=>(B.t||0)-(X.t||0)),A}const H=new WeakMap;let ht=[],At=null;function Kt(j,$t){const he=[];a?a.getWorldPosition(oi):oi.set($t.x+8,2,$t.z);let A=oi.x-$t.x,B=oi.z-$t.z;const X=Math.hypot(A,B)||1;A/=X,B/=X;const ot=170;for(let S=0;S<ot;S++){const x=Pt=>Es(S*1.618+Pt*7.77+j*.013);let T=x(1)*Math.PI*2;const b=S<60?0:S<105?1:S<125?2:S<155?3:4;b===3&&(T=(S-125)/30*Math.PI*2+x(1)*.2),b===4&&(T=Math.atan2(B,A)+(x(1)-.5)*1.6);const $=Math.cos(T),O=Math.sin(T),it=(x(2)-.5)*1.6,st=(x(3)-.5)*3.2,Lt=b===0?2.4+3.6*x(4):b===1?1+2*x(4):b===2?.4+.6*x(4):b===3?6+4*x(4):1.2+1.6*x(4),vt=x(5)<.3;he.push({t0:j-.12+(b===3?.05*x(6):.35*x(6)*(b===0?.5:1)),x:$t.x+it*(b===3?.3:1),y:b===2?.3:.15+.2*x(7),z:$t.z+st*(b===3?.5:1),vx:$*Lt,vy:b===0?.2+.4*x(8):b===1?.7+.9*x(8):b===3?.3+.3*x(8):b===4?.3+.4*x(8):1+1.2*x(8),vz:O*Lt,r0:vt?.2:.4+.2*x(9),r1:b===3?.8+.7*x(10):b===4?.4+.5*x(10):vt?.35+.4*x(10):b===0?.9+.9*x(10):1.1+1*x(10),life:b===3?1.6+.8*x(11):2.4+1.6*x(11),a:b===2?.45:b===3?.6:.55,seed:x(12),k:b===3?2.2:1.3+.4*x(13),rise:b===1?.12+.15*x(14):b===4?.1+.1*x(14):.05+.08*x(14),kind:1,ymax:b===4?.9:void 0})}return he}function ve(j){if(ht.length=0,ht.length===0||!j||!Array.isArray(j.events))return ht;let $t=!1;for(const A of j.events){if(!A||A.type!=="softland"&&A.type!=="hardland"||A.where!=="fleet"||j.t-A.t>7)continue;$t=!0;let B=H.get(A);B||(At&&Math.abs(At.t-A.t)<.2?B=At.L:B=Kt(A.t,F(j,Math.max(0,j.t-A.t),new D)),H.set(A,B));for(const X of B)Re(X)}const he=Pn&&Pn.fleetLand;if(!$t&&typeof he=="number"&&j.mode==="jump"&&j.t>he-.16&&j.t<he+.3){if(!At||Math.abs(At.t-he)>1e-6){const A=F(j,0,new D);j.fwd&&j.fwd.isVector3&&A.addScaledVector(j.fwd,(j.v||0)*Math.max(0,he-j.t)),At={t:he,L:Kt(he,A)}}for(const A of At.L)Re(A)}return ht}function Re(j){ht.push(j)}function we(j,$t,he,A,B){if(_.ca*=Math.exp(-j*5.5),_.shake*=Math.exp(-j*7),_.flash*=Math.exp(-j*(_.flash>.5?3.4:5)),_.bloomKick*=Math.exp(-j*6),_.streakKick*=Math.exp(-j*2.5),_.fovV+=(-_.fov*120-_.fovV*16)*j,_.fov+=_.fovV*j,_.simT+=j,$t>.01&&he)for(const x of he){if(!x||!x.isObject3D)continue;x.getWorldPosition(W),B!=null&&A&&A.t>B&&W.addScaledVector(yt,-(A.t-B)),x.getWorldQuaternion(mt);const T=x.userData&&x.userData.dir&&x.userData.dir.isVector3?nt.copy(x.userData.dir):nt.set(0,-.5,1);T.applyQuaternion(mt).normalize(),jt(W,T,$t*(x.userData&&x.userData.main?1:.6))}const X=y.P;let ot=0;for(let x=0;x<X.n;x++){const T=X.age[x]+j;if(T>=X.life[x])continue;const b=x*3,$=Math.exp(-X.drag[x]*j);let O=X.vel[b]*$,it=X.vel[b+1]*$+X.grav[x]*j,st=X.vel[b+2]*$,Lt=X.pos[b]+O*j,vt=X.pos[b+1]+it*j,Pt=X.pos[b+2]+st*j;vt<X.floor[x]&&(vt=X.floor[x],it=-it*.35,O*=.7,st*=.7);const Bt=ot*3;X.pos[Bt]=Lt,X.pos[Bt+1]=vt,X.pos[Bt+2]=Pt,X.vel[Bt]=O,X.vel[Bt+1]=it,X.vel[Bt+2]=st,ot!==x&&(X.col0[Bt]=X.col0[b],X.col0[Bt+1]=X.col0[b+1],X.col0[Bt+2]=X.col0[b+2],X.col1[Bt]=X.col1[b],X.col1[Bt+1]=X.col1[b+1],X.col1[Bt+2]=X.col1[b+2],X.life[ot]=X.life[x],X.size0[ot]=X.size0[x],X.size1[ot]=X.size1[x],X.stretch[ot]=X.stretch[x],X.grav[ot]=X.grav[x],X.drag[ot]=X.drag[x],X.floor[ot]=X.floor[x]),X.age[ot]=T,ot++}X.n=ot;for(const x of I.list){if(!x.m.visible)continue;x.age+=j;const T=x.age/x.life;if(T>=1){x.m.visible=!1;continue}x.m.scale.setScalar(x.r0*(1+1.4*(1-(1-T)*(1-T)))),x.m.material.uniforms.uA.value=(1-T)*(1-T)}const S=40+140*_.speed+80*_.streakKick;for(let x=0;x<il;x++){const T=L.S[x];T.z+=S*T.v*j,T.z>2&&(T.z-=62,T.th=c()*Math.PI*2,T.r=3.4+c()*6)}}function Ie(){const j=y.P,$t=j.n,he=y.iPos.array,A=y.iVel.array,B=y.iCol.array,X=y.iSz.array;for(let S=0;S<$t;S++){const x=j.age[S]/j.life[S],T=S*3,b=S*4,$=S*2;he[T]=j.pos[T],he[T+1]=j.pos[T+1],he[T+2]=j.pos[T+2],A[T]=j.vel[T],A[T+1]=j.vel[T+1],A[T+2]=j.vel[T+2];const O=Math.min(1,x*1.6);B[b]=j.col0[T]+(j.col1[T]-j.col0[T])*O,B[b+1]=j.col0[T+1]+(j.col1[T+1]-j.col0[T+1])*O,B[b+2]=j.col0[T+2]+(j.col1[T+2]-j.col0[T+2])*O,B[b+3]=(1-x)*(1-x)*Math.min(1,j.age[S]*40+.3),X[$]=j.size0[S]+(j.size1[S]-j.size0[S])*x,X[$+1]=j.stretch[S]}y.quad.instanceCount=$t;for(const S of[y.iPos,y.iVel,y.iCol,y.iSz])S.needsUpdate=!0,S.clearUpdateRanges&&S.clearUpdateRanges(),S.addUpdateRange&&S.addUpdateRange(0,Math.max(1,$t*S.itemSize));const ot=$s(ir(.25,.9,_.speed)*l.streaks+_.streakKick);if(L.mat.uniforms.uAlpha.value=ot*.95,L.mesh.visible=ot>.01,L.mesh.visible){const S=1.2+8.5*_.speed+5*_.streakKick;for(let x=0;x<il;x++){const T=L.S[x];W.set(Math.cos(T.th)*T.r,Math.sin(T.th)*T.r*.8,T.z),Ut.set(0,0,T.th+Math.PI/2),mt.setFromEuler(Ut),pt.set(T.w*(1+.3*_.speed),1,S*T.v),Ct.compose(W,mt,pt),L.mesh.setMatrixAt(x,Ct)}L.mesh.instanceMatrix.needsUpdate=!0}}const ut=1.2;let wn=!1;function Wn(j=1/60,$t){wn=!0,j=Math.min(Math.max(+j||0,0),.1),et=$t||{};const he=Ot(),A=k(et);let B=typeof et.t=="number"?et.t:A?A.t:null;if(B==null&&he)try{B=typeof he.time=="function"?he.time():typeof he.t=="number"?he.t:null}catch{B=null}let X=!1;B!=null&&_.lastT!=null&&(B<_.lastT-1e-4||B-_.lastT>Math.max(.25,j*4))&&(X=!0),A&&St&&A!==St&&(X=!0),X&&(ct(),Et=new WeakSet),_.lastT,B!=null&&(_.lastT=B),St=A;let ot=et.speed01;ot==null&&et.speed!=null&&(ot=et.speed/250),ot==null&&_.extSpeed!=null&&(ot=_.extSpeed),ot==null&&A&&typeof A.mph=="number"&&(ot=A.mph/260),ot==null&&he&&typeof he.speed01=="number"&&(ot=he.speed01),ot==null&&B!=null&&(ot=sw(B)),ot==null&&(ot=0);let S=et.boost01;if(S==null&&A&&typeof A.boost=="number"&&(S=$s(A.boost)),S==null&&B!=null){const O=B/Ar;S=O>=88&&O<96?ir(88,96,O):O>=96&&O<128?.6:0}const x=Jt();et.carVel&&et.carVel.isVector3?yt.copy(et.carVel):A&&A.fwd&&A.fwd.isVector3&&typeof A.v=="number"?yt.copy(A.fwd).multiplyScalar(A.v).y+=A.vy||0:x&&j>0&&!X&&(x.getWorldPosition(W),z&&(nt.subVectors(W,Nt).divideScalar(j),nt.length()<400?yt.lerp(nt,.5):yt.set(0,0,0)),Nt.copy(W),z=!0);const T=Mt(x);let b=et.thrust!=null?+et.thrust:A&&typeof A.thrust=="number"?A.thrust:0;A&&typeof A.flap=="number"&&(b=Math.max(b,$s(A.flap))),A&&A.mode&&(b=0);const $=!!A;if(l._gp=$,X&&B!=null){const O=at(A,B,ut),it=Math.max(0,B-ut),st=1/60;_.speed=$s(ot),_.boost=S||0;let Lt=0;for(let vt=it;vt<B-1e-6;vt+=st){for(;Lt<O.length&&(O[Lt].t??B)<=vt+st;)dt(O[Lt],A,Math.max(0,B-(O[Lt].t??B))),Lt++;$?gn(vt):rt(vt,st),we(st,B-vt<.35?b:0,T,A,vt)}for(;Lt<O.length;Lt++)dt(O[Lt],A,0)}else{if(_.speed+=($s(ot)-_.speed)*Math.min(1,j*6),_.boost+=((S||0)-_.boost)*Math.min(1,j*4),$){for(const O of at(A,B??0,ut))dt(O,A,0);gn(B)}else rt(B,j);we(j,b,T,null,null)}A?(typeof A.flash=="number"?_.gpFlash=A.flash:_.gpFlash=0,typeof A.aberration=="number"?_.gpCA=A.aberration:_.gpCA=0,_.timeScale=typeof A.timeScale=="number"?A.timeScale:_.timeScale):(_.gpFlash=0,_.gpCA=0),Ie();{const O=et.smoke||A&&A.puffs||null;fw(U,O,B??(A?A.t:null),a,A&&A.pos&&A.pos.isVector3?A.pos:null,x,ve(A));const it=et.rcs||A&&A.rcs||null,st=x&&x.userData&&x.userData.car,Lt=st&&st.anchors&&st.anchors.rcs;P.n=0;const vt=B??_.simT;a&&a.getWorldPosition(ic);let Pt=1;x&&(x.getWorldQuaternion(mt),np.set(0,1,0).applyQuaternion(mt));const Bt=x?np.y:0,ee=it&&it.down||0;if(x&&ee>.15&&(Pt=1-ir(.8,.93,Bt)),mw(st),x&&(lp.set(1,0,0).applyQuaternion(mt),cp.set(0,0,1).applyQuaternion(mt)),it&&Lt&&a)for(const[Yt,Qt]of Object.entries(Lt)){let ae=Yt==="pitchUp"?Math.max(0,it.pitch||0):Yt==="pitchDown"?Math.max(0,-(it.pitch||0)):it[Yt]||0;const le=Yt==="down",_e=Yt==="left"||Yt==="right";if(le||(ae*=Pt),!le&&!_e&&(ae*=.7),ae<.06||!Array.isArray(Qt))continue;const ne=Math.min(1,ae),ie=_e?ir(-.95,-.6,Bt):1,Wt=(le?3.3+.6*ne:_e?2.6+1.9*ne:.5+.8*ne)*(.3+.7*ie),fe=le?.07:_e?.045:.04,xe=le?.35:_e?fe+Wt*.033:.16,Le=(_e&&Bt<.8?1.6:1)*(.55+.45*ie);Qt.forEach((Ae,an)=>{let qe=null;if(le&&x){const Te=Math.sign(Ae.position.x)||1,tn=Math.sign(Ae.position.z)||1;qe=pw.copy(lp).multiplyScalar(Te*.087).addScaledVector(cp,tn*.05)}jh(P,Ae,(.35+.75*ne)*Le*(le?1.8:1),Wt,fe,xe,vt,an*1.37+Yt.length*.71,le,ic,le||_e?0:1,_e?.5:1,qe,le?1:_e?2:0)})}const It=(A&&A.mode==="flipAir"&&A.flipRear||0)*Pt*(Bt<.8?1.4:1),Dt=Mt(x);if(It>.06&&Dt&&a&&Dt.forEach((Yt,Qt)=>{Yt.userData&&(Yt.userData.main||Qt===0||Qt===3)&&jh(P,Yt,Math.min(1.5,It),1.2+2.4*Math.min(1,It),.05,.22,vt,9+Qt,!1,ic,1,.6)}),A&&A.mode==="fly"&&Dt&&a&&!(ee>.15&&Bt>.93)){const Yt=Math.min(1,Math.max(+A.thrust||0,$s(+A.flap||0)));Yt>.05&&Dt.forEach((Qt,ae)=>{Qt.userData&&(Qt.userData.main||ae===0||ae===3)&&jh(P,Qt,.3+.7*Yt,.8+2.2*Yt,.05,.2,vt,21+ae,!1,ic,1,.6)})}if(P.mat.uniforms.uT.value=vt,P.geo.setDrawRange(0,P.n*pa*6),P.mesh.visible=P.n>0,P.n>0)for(const Yt of[P.pos,P.aJ,P.aK])Yt.needsUpdate=!0,Yt.clearUpdateRanges&&Yt.clearUpdateRanges(),Yt.addUpdateRange&&Yt.addUpdateRange(0,P.n*Go*Yt.itemSize)}}function gn(j){if(j==null)return;const $t=Math.floor(j/Ar+1e-4);if($t!==_.lastBeat){const he=iw(j);_.lastBeat>=0&&(he==="drop1"||he==="loop"||he==="flight")&&q($t%4===0?1:.55),he==="intro"&&$t>=10&&$t%2===0&&$t<16&&q(.6),_.lastBeat=$t}}const Xn=new D;function Si(){s.getSize(h);const j=s.getPixelRatio();(h.x!==p||h.y!==M||j!==w)&&(p=h.x,M=h.y,w=j,f.setPixelRatio(j),f.setSize(Math.max(1,h.x),Math.max(1,h.y))),m.uniforms.uRes.value.set(h.x*j,h.y*j),y.mat.uniforms.uResY.value=h.y*j,y.mat.uniforms.uAspect.value=h.x/Math.max(1,h.y)}function Oi(j,$t){if(j&&j.isScene&&j!==r&&is(j),$t&&$t.isCamera&&(a=$t),!r||!a)return;wn||Wn(1/60,et),wn=!1,R.parent!==r&&r.add(R),d.scene=r,d.camera=a,Si(),a.updateMatrixWorld(),L.group.position.setFromMatrixPosition(a.matrixWorld),L.group.quaternion.setFromRotationMatrix(Ct.extractRotation(a.matrixWorld));const he=h.y>h.x,A=m.uniforms;A.uTime.value=_.simT,A.uSpeed.value=ir(.2,1,_.speed)*l.speedBlur*(.75+.5*_.streakKick),A.uCA.value=Math.min(1.5,Math.max(_.ca,_.gpCA*.9)+l.caBase+_.speed*.12),A.uExposure.value=l.exposure*(1+.12*_.boost);const B=$s((1-(_.timeScale||1))/.4);A.uVignette.value=l.vignette+.12*B,_.slow=B,A.uGrain.value=l.grain,A.uSat.value=l.saturation*(1-.12*B),A.uContrast.value=l.contrast,A.uFlash.value=Math.min(1,Math.max(_.flash,_.gpFlash*.8)),A.uFlashColor.value.copy(_.flashColor),A.uCenter.value.set(.5,he?.52:.5);{const x=Jt();x&&x.getWorldPosition&&(x.getWorldPosition(W),W.y+=.6,W.project(a),W.z<1?A.uCar.value.set(W.x*.5+.5,W.y*.5+.5):A.uCar.value.set(-5,-5))}g.strength=l.bloomStrength*(1+_.bloomKick+.25*_.boost),g.radius=l.bloomRadius,g.threshold=l.bloomThreshold,g.highPassUniforms.smoothWidth.value=l.bloomKnee,g.copyUniforms&&g.copyUniforms.uLimit&&(g.copyUniforms.uLimit.value=l.bloomLimit*(1+.6*_.bloomKick));const X=a.isPerspectiveCamera,ot=X?a.fov:0;Xn.copy(a.position);const S=l.ownCamera;if(S&&X&&Math.abs(_.fov)>.001&&(a.fov=ot+_.fov,a.updateProjectionMatrix()),S&&_.shake>.001){const x=_.shake*_.shake*l.shakeAmp,T=_.simT*47;W.set(Math.sin(T*1.13)+Math.sin(T*2.71)*.5,Math.cos(T*1.37)+Math.sin(T*3.1)*.5,0).multiplyScalar(x),W.applyQuaternion(a.quaternion),a.position.add(W),a.updateMatrixWorld()}try{f.render()}finally{X&&a.fov!==ot&&(a.fov=ot,a.updateProjectionMatrix()),a.position.equals(Xn)||(a.position.copy(Xn),a.updateMatrixWorld())}}function bs(j,$t){f.setPixelRatio(s.getPixelRatio()),f.setSize(Math.max(1,j),Math.max(1,$t)),p=j,M=$t,w=s.getPixelRatio()}function is(j){R.parent&&R.parent.remove(R),r=j,j&&j.add(R)}function Qe(j){a=j}function Bi(){R.parent&&R.parent.remove(R),f.dispose&&f.dispose(),g.dispose(),m.dispose(),v.dispose(),y.quad.dispose(),y.mat.dispose(),U.geo.dispose(),U.mat.dispose(),L.mesh.geometry.dispose(),L.mat.dispose()}return{update:Wn,render:Oi,setSize:bs,setScene:is,setCamera:Qe,reset:ct,dispose:Bi,impact:se,shake:K,aberration:gt,setSpeed:ft,setTimeScale:C,fovPunch:E,flash:G,sparks:(j,$t,he)=>V(j,$t,he),land:Z,hit:wt,ringPass:Vt,boost:J,thruster:jt,finish:Q,beat:q,params:l,composer:f,bloom:g,finalPass:m,get state(){return _},markExplicit(j){_.explicit[j]=!0}}}const vw="modulepreload",xw=function(n){return"/"+n},up={},_w=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=xw(c),c in up)return;up[c]=!0;const h=c.endsWith(".css"),o=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":vw,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},wi=59/136,fp=16*wi,Xm=134*wi,dp=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),pp=dp.has("capture")||dp.get("mute")==="1",sn=n=>440*Math.pow(2,(n-69)/12),yw=[0,2,4,7,9],Zh=(n,t)=>n+12*Math.floor(t/5)+yw[(t%5+5)%5];class Jc{constructor(){if(this.ctx=null,this.buffer=null,this.src=null,this.playing=!1,this.muted=!1,this._startCtxT=0,this._offset=0,this._perfStart=0,this._loading=null,this._lastTick=-1,this._lastTickAt=0,this._cues=Tw(),this._cueIdx=0,this._noise=null,this._engine=null,this._hiss=null,this._lastThrust=-9,this._lastVoice={},this._wind=null,this._rpm=0,typeof window<"u"){const t=()=>this.unlock();for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});window.addEventListener("rr:event",e=>{const i=e.detail||{};i.name&&this.event(i.name,i)})}}get lastTickAt(){return this._lastTickAt}_ensureCtx(){if(this.ctx||pp)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t({latencyHint:"interactive"});this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=8,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.18,this.comp.connect(this.master),this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.82,this.musicGain.connect(this.comp),this.sfxGain=e.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.comp),this.verb=e.createConvolver(),this.verb.buffer=Sw(e,1.6,2.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain),this.verbGain.connect(this.comp),this._noise=ww(e,2)}catch{this.ctx=null}return this.ctx}unlock(){const t=this._ensureCtx();t&&t.state==="suspended"&&t.resume().catch(()=>{}),!this.buffer&&!this._loading&&this.load()}load(t="/audio/music.mp3"){return this._loading?this._loading:(this._loading=(async()=>{const e=this._ensureCtx();if(!e)return null;try{const s=await(await fetch(t)).arrayBuffer();this.buffer=await new Promise((r,a)=>e.decodeAudioData(s,r,a))}catch{this.buffer=null}return this.buffer})(),this._loading)}play(t=0){this.stop(),this._offset=Math.max(0,t),this._perfStart=performance.now()/1e3-this._offset,this.playing=!0,this._resetCues(this._offset);const e=this._ensureCtx();if(!e||!this.buffer)return;e.state==="suspended"&&e.resume().catch(()=>{});const i=e.createBufferSource();i.buffer=this.buffer,i.connect(this.musicGain),this._startCtxT=e.currentTime+.02,i.start(this._startCtxT,this._offset),i.onended=()=>{this.src===i&&(this.playing=!1)},this.src=i}stop(){if(this.src){try{this.src.stop()}catch{}try{this.src.disconnect()}catch{}}this.src=null,this.playing=!1,this._setEngine(0,0),this._setHiss(0),this._setWind(0)}time(){return this.playing?this.src&&this.ctx?Math.max(0,this.ctx.currentTime-this._startCtxT+this._offset):performance.now()/1e3-this._perfStart:this._offset}setMuted(t){this.muted=!!t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.02)}_live(){return!pp&&this.ctx&&this.ctx.state==="running"&&!this.muted}_resetCues(t){this._cueIdx=this._cues.findIndex(e=>e.t>=t-1e-4),this._cueIdx<0&&(this._cueIdx=this._cues.length)}tick(t,e={}){if(this._lastTickAt=performance.now(),!(t>=0)||((t<this._lastTick-.25||t>this._lastTick+1)&&this._resetCues(t),this._lastTick=t,!this._live()))return;for(this._combo=yi(e.combo,this._combo||0);this._cueIdx<this._cues.length&&this._cues[this._cueIdx].t<=t;){const m=this._cues[this._cueIdx++];!this._gpDriven&&t-m.t<.15&&this._play(m.name,m.opts)}const i=yi(e.mph,yi(e.speed,0)),s=yi(e.rev,0),r=t<fp,a=t>Xm+1.5;let l=0,c=0;const h=e.shift&&typeof e.shift=="object"?e.shift:null,o=h?yi(h.phase,yi(h.light,-1)):-1,u=!r&&t<48*wi&&o>=0&&(e.section?e.section==="launch":!0)&&!e.airborne;if(r)l=s>.02?.1+.25*s:0,c=s*.95;else if(!a)if(l=.07+.1*Math.min(1,i/250),u){const m=.18+.82*Math.pow(Mw(o),.85);this._rpm=m<this._rpm-.25?m:this._rpm+(m-this._rpm)*.35,c=.22+.55*this._rpm+.35*Math.min(1,i/260),l+=.05*this._rpm}else this._rpm=0,c=Math.min(1.2,i/260);this._setEngine(l,c),this._setWind(a?0:Math.pow(Math.min(1,i/260),2)*(t>fp?1:0));const f=e.mode?e.mode==="flipAir"||e.mode==="fly"||e.mode==="jump":e.section?e.section==="flight"||e.section==="outro"&&!!e.airborne:!!e.flying||t>96*wi&&t<128*wi&&e.flying!==!1,d=yi(e.lastThrustT,-9),v=yi(e.flap,Math.max(0,1-(t-d)/.35)),g=e.rcs?Math.max(e.rcs.down||0,e.rcs.left||0,e.rcs.right||0):0;this._setHiss(f?.035+.22*Math.max(v,g):0)}_setEngine(t,e){const i=this.ctx;if(!i)return;if(!this._engine){if(t<=0)return;const l=i.createGain();l.gain.value=0;const c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=2400,c.Q.value=3;const h=i.createOscillator();h.type="sawtooth";const o=i.createOscillator();o.type="square";const u=i.createOscillator();u.type="sine";const f=i.createOscillator();f.type="sawtooth",f.detune.value=9;const d=i.createGain();d.gain.value=.25;const v=i.createGain();v.gain.value=.9;const g=i.createGain();g.gain.value=.55;const m=i.createOscillator();m.type="sine";const p=i.createGain();p.gain.value=0,m.connect(p),p.connect(this.sfxGain);const M=i.createOscillator();M.frequency.value=23;const w=i.createGain();w.gain.value=6,M.connect(w),w.connect(h.detune),w.connect(f.detune),h.connect(c),f.connect(g),g.connect(c),o.connect(d),d.connect(c),u.connect(v),v.connect(l),c.connect(l),l.connect(this.sfxGain);for(const y of[h,o,u,f,m,M])y.start();this._engine={g:l,lp:c,o1:h,o2:o,o3:u,o4:f,o5:m,g5:p}}const s=this._engine,r=i.currentTime,a=sn(50)*Math.pow(2,e*2.6);s.o1.frequency.setTargetAtTime(a,r,.05),s.o4.frequency.setTargetAtTime(a*.5,r,.05),s.o2.frequency.setTargetAtTime(a*1.5,r,.05),s.o3.frequency.setTargetAtTime(a/3,r,.05),s.lp.frequency.setTargetAtTime(900+4200*e,r,.06),s.g.gain.setTargetAtTime(t*.55,r,.06),s.o5.frequency.setTargetAtTime(Math.min(9e3,a*6),r,.04),s.g5.gain.setTargetAtTime(t>0?Math.min(.05,.012+.04*e)*(t/.2):0,r,.06)}duck(t=3,e=.06,i=.4){if(!this._live()||!this.musicGain)return;const s=this.musicGain.gain,r=this.ctx.currentTime,a=.82,l=a*Math.pow(10,-t/20);try{s.cancelScheduledValues(r),s.setValueAtTime(s.value,r),s.linearRampToValueAtTime(l,r+.012),s.setValueAtTime(l,r+.012+e),s.linearRampToValueAtTime(a,r+.012+e+i)}catch{}}_setWind(t){const e=this.ctx;if(!e)return;if(!this._wind){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=600,r.Q.value=.4;const a=e.createGain();a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.sfxGain),s.start(),this._wind={g:a,lp:r}}const i=e.currentTime;this._wind.g.gain.setTargetAtTime(.09*t,i,.12),this._wind.lp.frequency.setTargetAtTime(500+2200*t,i,.12)}_setHiss(t){const e=this.ctx;if(!e)return;if(!this._hiss){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=3200,r.Q.value=.7;const a=e.createGain();a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.sfxGain),s.start(),this._hiss={g:a,bp:r}}const i=e.currentTime;this._hiss.g.gain.setTargetAtTime(t,i,.04),this._hiss.bp.frequency.setTargetAtTime(2200+5e3*t,i,.05)}event(t,e={}){const i=String(t).toLowerCase(),s={shift:()=>this.sfx(e.grade&&String(e.grade).toUpperCase()!=="PERFECT"?"shift":"perfect"),perfectshift:()=>this.sfx("perfect"),ring:()=>this.sfx("ring",{combo:yi(e.combo,1)}),pylon:()=>this.sfx("bounce"),hit:()=>this.sfx("bounce"),bounce:()=>this.sfx("bounce"),land:()=>this.sfx("land"),landing:()=>this.sfx("land"),thrust:()=>this.sfx("thrust"),flap:()=>this.sfx("thrust"),tap:()=>{},jump:()=>this.sfx("jump"),ramp:()=>this.sfx("jump"),launch:()=>this.sfx("launch",{grade:e.grade}),record:()=>this.sfx("record"),combo:()=>this.sfx("ring",{combo:yi(e.n??e.combo,5)+2}),checkpoint:()=>this.sfx("checkpoint"),whoosh:()=>this.sfx("whoosh"),finish:()=>this.sfx("finish")};s[i]?s[i]():this.sfx(i,e)}sfx(t,e={}){e&&typeof e=="object"&&e.type===t&&mp[t]!==void 0&&(this._gpDriven=!0);const i=mp[t];let s=t,r=e||{};if(typeof i=="function")[s,r]=i(r,this);else{if(i===null)return;i&&(s=i)}this._play(s,r)}_play(t,e={}){if(!this._live()||!t)return;const i=js[t];if(!i)return;const s=this.ctx.currentTime,r=bw[t];if(r){if(s-(this._lastVoice[t]??-99)<r)return;this._lastVoice[t]=s}try{i(this,s+.005,e)}catch{}}}function yi(n,t){return typeof n=="number"&&isFinite(n)?n:t}const Mw=n=>Math.min(1,Math.max(0,n)),bw={checkpoint:1.6,finish:2.5,go:.6,count:.5,liftoff:1.2,loop:1.2,boost:1.5,fleet:1,record:2,launch:.6,land:.12,whoosh:.25};function ww(n,t){const e=n.createBuffer(1,Math.floor(n.sampleRate*t),n.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}function Sw(n,t,e){const i=Math.floor(n.sampleRate*t),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)}return s}function zf(n,t,e,i,s,r="exp"){n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(i,t+e),r==="exp"?n.gain.exponentialRampToValueAtTime(1e-4,t+e+s):n.gain.linearRampToValueAtTime(0,t+e+s)}function Rn(n,t,{type:e="sine",f:i=440,f2:s=null,dur:r=.2,a=.004,peak:l=.3,verb:c=0,dest:h=null,detune:o=0}){const u=n.ctx,f=u.createOscillator(),d=u.createGain();if(f.type=e,f.frequency.setValueAtTime(i,t),f.detune.value=o,s&&f.frequency.exponentialRampToValueAtTime(s,t+a+r),zf(d,t,a,l,r),f.connect(d),d.connect(h||n.sfxGain),c){const v=u.createGain();v.gain.value=c,d.connect(v),v.connect(n.verb)}return f.start(t),f.stop(t+a+r+.05),f}function xi(n,t,{type:e="bandpass",f:i=1e3,f2:s=null,q:r=1,dur:a=.3,a:l=.01,peak:c=.3,verb:h=0}){const o=n.ctx,u=o.createBufferSource(),f=o.createBiquadFilter(),d=o.createGain();if(u.buffer=n._noise,f.type=e,f.frequency.setValueAtTime(i,t),f.Q.value=r,s&&f.frequency.exponentialRampToValueAtTime(s,t+l+a),zf(d,t,l,c,a),u.connect(f),f.connect(d),d.connect(n.sfxGain),h){const v=o.createGain();v.gain.value=h,d.connect(v),v.connect(n.verb)}u.start(t,Math.random()),u.stop(t+l+a+.05)}function Ii(n,t,e,i=.22,s=.9){const r=n.ctx,a=sn(e),l=r.createOscillator(),c=r.createOscillator(),h=r.createGain(),o=r.createGain();l.frequency.value=a,c.frequency.value=a*3.5,h.gain.setValueAtTime(a*2.2,t),h.gain.exponentialRampToValueAtTime(a*.05,t+s),c.connect(h),h.connect(l.frequency),l.connect(o),zf(o,t,.002,i,s),o.connect(n.sfxGain);const u=r.createGain();u.gain.value=.6,o.connect(u),u.connect(n.verb),l.start(t),c.start(t),l.stop(t+s+.1),c.stop(t+s+.1)}function Oa(n,t,e=120,i=.7,s=.35){Rn(n,t,{type:"sine",f:e,f2:38,dur:s,a:.002,peak:i})}function Ba(n,t,{sub:e=1,crack:i=1,tail:s=.5,f:r=110,dur:a=.5,db:l=3}={}){Rn(n,t,{type:"sine",f:r,f2:32,dur:a,a:.001,peak:.9*e}),Rn(n,t,{type:"triangle",f:r*2,f2:r*.6,dur:a*.4,a:.001,peak:.3*e}),xi(n,t,{type:"bandpass",f:1800,f2:700,q:1.4,dur:.07,a:5e-4,peak:.55*i}),xi(n,t,{type:"highpass",f:6e3,q:.5,dur:.035,a:5e-4,peak:.25*i}),xi(n,t,{type:"lowpass",f:2600,f2:180,q:.8,dur:a*.8,a:.002,peak:.35,verb:s}),l&&n.duck(l,.05,.35+a*.6)}const js={ui:(n,t)=>{Rn(n,t,{type:"triangle",f:sn(86),dur:.06,peak:.12})},count:(n,t)=>{Rn(n,t,{type:"square",f:sn(74),dur:.16,peak:.12,verb:.3}),Rn(n,t,{type:"sine",f:sn(62),dur:.22,peak:.25})},go:(n,t)=>{for(const e of[74,81,86])Rn(n,t,{type:"sawtooth",f:sn(e),dur:.5,peak:.07,verb:.4});Rn(n,t,{type:"sine",f:sn(86),dur:.6,peak:.18,verb:.4}),Oa(n,t,150,.6,.3)},launch:(n,t,e={})=>{const i=String(e.grade||"PERFECT").toUpperCase();Ba(n,t,{f:110,dur:.6,crack:.8,tail:.4,db:3}),xi(n,t,{type:"lowpass",f:6e3,f2:300,q:.5,dur:.9,a:.005,peak:i==="LATE"?.18:.35}),Rn(n,t,{type:"sawtooth",f:sn(50),f2:sn(86),dur:.9,a:.01,peak:.1}),i==="PERFECT"&&(Ii(n,t+.05,86,.16,.8),Ii(n,t+.12,93,.12,.9))},rev:(n,t,e={})=>{const i=yi(e.level,.6);Rn(n,t,{type:"sawtooth",f:sn(50),f2:sn(50+24*i),dur:.4,a:.02,peak:.12})},shift:(n,t)=>{xi(n,t,{type:"highpass",f:2500,q:.7,dur:.05,a:.001,peak:.35}),Rn(n,t,{type:"square",f:sn(62),f2:sn(50),dur:.12,peak:.12}),Oa(n,t,90,.4,.18)},perfect:(n,t)=>{js.shift(n,t),Rn(n,t+.01,{type:"sawtooth",f:sn(57),f2:sn(81),dur:.22,a:.005,peak:.08}),Ii(n,t+.03,81,.15,.6),xi(n,t,{type:"bandpass",f:800,f2:6e3,q:1.2,dur:.35,a:.02,peak:.14})},good:(n,t)=>js.shift(n,t),late:(n,t)=>{js.shift(n,t),Rn(n,t,{type:"square",f:sn(55),f2:sn(43),dur:.2,peak:.08})},whoosh:(n,t,e={})=>{const i=yi(e.dur,.7);xi(n,t,{type:"bandpass",f:300,f2:5e3,q:1.6,dur:i*.6,a:i*.4,peak:.3,verb:.2})},jump:(n,t)=>{xi(n,t,{type:"bandpass",f:500,f2:4e3,q:1,dur:.6,a:.05,peak:.25}),Rn(n,t,{type:"sine",f:sn(43),f2:sn(67),dur:.5,a:.01,peak:.25})},land:(n,t)=>{Ba(n,t,{f:120,dur:.5,tail:.45,db:3}),Rn(n,t+.03,{type:"square",f:sn(43),f2:sn(36),dur:.09,peak:.07}),xi(n,t+.02,{type:"bandpass",f:3200,f2:2400,q:6,dur:.18,a:.004,peak:.12})},thrust:(n,t)=>{xi(n,t,{type:"highpass",f:5e3,q:.7,dur:.02,a:5e-4,peak:.3}),xi(n,t,{type:"bandpass",f:7e3,f2:1800,q:.9,dur:.32,a:.004,peak:.42}),xi(n,t+.01,{type:"lowpass",f:900,f2:200,q:.7,dur:.25,a:.01,peak:.25}),Oa(n,t,70,.4,.22)},ring:(n,t,e={})=>{const i=Math.max(1,Math.min(20,yi(e.combo,1))),s=Zh(74,i-1);Ii(n,t,Math.min(s,98),.2,.9),Rn(n,t,{type:"triangle",f:sn(Math.min(s,98)+12),dur:.15,peak:.06})},bounce:(n,t)=>{Ba(n,t,{f:80,dur:.35,crack:1.1,tail:.3,db:3}),xi(n,t,{type:"bandpass",f:1200,q:3,dur:.25,a:.001,peak:.35}),Rn(n,t,{type:"square",f:sn(50),f2:sn(38),dur:.3,peak:.12})},checkpoint:(n,t)=>{Ii(n,t,79,.16,1),Ii(n,t+.11,86,.14,1.1),js.whoosh(n,t,{dur:.9})},loop:(n,t)=>{js.whoosh(n,t,{dur:1.1}),Rn(n,t,{type:"sawtooth",f:sn(38),f2:sn(62),dur:1.2,a:.2,peak:.07})},boost:(n,t)=>{const e=6*wi;Rn(n,t,{type:"sawtooth",f:sn(38),f2:sn(74),dur:e-.3,a:.3,peak:.06}),xi(n,t,{type:"bandpass",f:300,f2:8e3,q:2,dur:e-.6,a:.6,peak:.14});for(let i=0;i<6;i++)Rn(n,t+i*wi,{type:"triangle",f:sn(Zh(62,i)),dur:.09,peak:.08});Ii(n,t+e,86,.16,.9),Ii(n,t+e+.06,93,.12,1)},liftoff:(n,t)=>{js.thrust(n,t),js.thrust(n,t+.08),Ba(n,t,{f:60,dur:.8,crack:.4,tail:.6,db:4}),Ii(n,t,74,.12,1.2)},finish:(n,t)=>{Ba(n,t,{f:90,dur:1,crack:1.2,tail:.9,db:5}),Oa(n,t,160,.6,.6),xi(n,t,{type:"highpass",f:3e3,q:.5,dur:1.4,a:.005,peak:.25,verb:.5}),[74,79,83,86,91].forEach((e,i)=>Ii(n,t+i*.06,e,.13,1.4))},fleet:(n,t)=>{n.duck(2.5,.1,.5),js.whoosh(n,t,{dur:.6}),Ii(n,t+.02,79,.15,.9),Ii(n,t+.09,86,.13,1)},scrape:(n,t)=>{xi(n,t,{type:"highpass",f:3500,q:.6,dur:.18,a:.002,peak:.25}),Oa(n,t,70,.4,.18)},combo:(n,t,e={})=>{const i=Math.max(5,yi(e.combo,5));[0,2,4].forEach((s,r)=>Ii(n,t+r*.055,Math.min(98,Zh(74,Math.floor(i/5)+s)),.14,.8))},record:(n,t)=>{[86,88,91,93,98].forEach((e,i)=>Ii(n,t+i*.07,e,.12,.9))}},mp={countdown:n=>[String(n.n??n.text??"").toUpperCase()==="GO"?"go":"count",n],launch:n=>["launch",{grade:n.rating||n.grade}],zero60:null,shift:n=>[n.perfect===!1?"shift":"perfect",n],miss:"late",offbeat:"late",flap:"thrust",air:"jump",fleet:"fleet",land:"land",touchdown:"land",loop:"loop",upside:"whoosh",boostready:"boost",flies:"liftoff",checkpoint:"checkpoint",ring:(n,t)=>["ring",{combo:yi(n.combo,t._combo||1)}],ringmiss:"late",scrape:"scrape",hit:"bounce",combo:(n,t)=>["combo",{combo:yi(n.combo,t._combo||5)}],finish:"finish",replay:"ui",beat:null};function Tw(){const n=e=>e*wi,t=[];return t.push({t:n(10),name:"count"},{t:n(12),name:"count"},{t:n(14),name:"count"},{t:n(16),name:"go"}),t.push({t:n(48),name:"checkpoint"},{t:n(56),name:"loop"},{t:n(88),name:"boost"},{t:n(96),name:"liftoff"},{t:Xm,name:"finish"}),t.sort((e,i)=>e.t-i.t)}const Tn=typeof window<"u"&&window.__rrAudio||new Jc;typeof window<"u"&&(window.__rrAudio=Tn);Jc.prototype.init=function(){return this.load()};Jc.prototype.getTime=function(){return this.time()};Object.defineProperty(Jc.prototype,"currentTime",{get(){return this.time()}});const Yi=n=>n*wi,sr=Yi(16),Rr=Yi(134),qm=1.15*wi,Ew=Rr+qm,sl=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),sc=sl.has("capture"),Aw=sl.get("autoplay")==="1",gp="https://roadster.kalibrio.com",vp=[[0,"INTRO","HANGAR"],[16,"#3 · #1","LAUNCH + FLEET"],[48,"REVEAL","THE FLIP RAMP"],[56,"#2","THE MIDAIR FLIP"],[88,"BUILD","MEGA FLIP"],[96,"MEGA FLIP","FLEET FLIP"],[128,"OUTRO","FINISH"]],Cw=n=>{let t=vp[0];for(const e of vp)n>=e[0]&&(t=e);return t},gc=[20,24,28,32,36,40,44],Rw=[{b:17.9,text:"#3 0-60 IN 0.81s",sub:"TESLA ROADSTER",tone:"cyan",size:"xl",dur:5},{b:27.5,text:"#1 JUMPING THE ENTIRE FLEET",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y",tone:"magenta",size:"l",wrap:!0,dur:5},{b:48,text:"THE MIDAIR FLIP",sub:"NEXT: #2",tone:"green",size:"l",dur:6},{b:61.9,text:"#2 THE MIDAIR FLIP",sub:"PAST VERTICAL",tone:"orange",size:"xl",dur:5},{b:88,text:"MEGA FLIP READY",sub:"TAP: THRUSTERS",tone:"orange",size:"l",dur:6},{b:96.5,text:"MEGA FLIP",sub:"TAP: THRUSTERS",tone:"cyan",size:"xl",dur:5},{b:134,text:"FINISH",tone:"white",size:"xl",dur:8}],Pw={countdown:{skip:!0},launch:{skip:!0},replay:{skip:!0},finish:{tone:"white",size:"xl",pri:9,dur:2.4,slam:!0,subFn:(n,t,e)=>{const i=me(t.flips),s=me(t.fleetFlipped);return qa(e._lap||0)+(i!==void 0?` · ${i} FLIPS`:"")+(s?` · FLEET ×${s}`:"")}},zero60:{tone:"cyan",size:"xl",pri:3,delay:2*wi,dur:2.4-2*wi,text:"0-60 MPH",sub:"UNDER 1 SECOND"},shift:{chip:!0,tone:"green",dur:1.3,subFn:n=>n.style==="perfect"?"+400":"+200"},miss:{chip:!0,tone:"orange",dur:1.2},offbeat:{chip:!0,tone:"orange",dur:.9},air:{tone:"cyan",size:"l",pri:3,dur:1.3},fleet:{tone:"magenta",size:"xl",pri:3,dur:2.3,sub:"+1,500"},land:{chip:!0,tone:"cyan",dur:1.6},touchdown:{tone:"cyan",size:"l",pri:3,dur:1.5},checkpoint:{tone:"green",size:"l",pri:3,dur:2.3,subFn:n=>n.sub||"NEXT: #2"},loop:{tone:"orange",size:"xl",pri:3,dur:2.3,sub:"TAP ON THE BEAT"},upside:{tone:"magenta",size:"xl",pri:3,dur:2.2,flip:!0},boostready:{tone:"orange",size:"l",pri:3,dur:2.3,sub:"TAP: THRUSTERS"},flies:{tone:"cyan",size:"xl",pri:3,dur:2.3,sub:"TAP TO THRUST"},ring:{chip:!0,tone:"magenta",dur:1,sub:"+500"},ringmiss:{chip:!0,tone:"orange",dur:.9},combo:{skip:!0},moment3:{moment:!0,tone:"cyan",size:"xl",pri:4,dur:2.4,subFn:n=>n.sub||"TESLA ROADSTER"},moment1:{moment:!0,tone:"magenta",size:"l",wrap:!0,pri:4,dur:2.4,subFn:n=>n.sub||""},moment2:{moment:!0,tone:"orange",size:"xl",pri:4,dur:2.4,subFn:n=>n.sub||""},kickflip:{chip:!0,tone:"green",dur:1.5,sub:"THRUSTERS"},softland:{chip:!0,tone:"green",dur:1.6,subFn:n=>n.text==="SOFT LANDING"?"+2,000":"+1,000"},hardland:{chip:!0,tone:"orange",dur:1.6,sub:"COMBO LOST"},inverted:{tone:"magenta",size:"l",pri:2,dur:1.4,flip:!0},upright:{chip:!0,tone:"cyan",dur:1.4,sub:"+2,500"},thrusters:{chip:!0,tone:"cyan",dur:1.2},megaflip:{tone:"cyan",size:"xl",pri:3,dur:2,sub:"TAP: THRUSTERS"},fleetflip:{chip:!0,tone:"magenta",dur:1.3,subFn:n=>n.sub||""},rowclear:{chip:!0,tone:"cyan",dur:1},climbbeat:{skip:!0},bullet:{skip:!0},finale:{skip:!0},air:{skip:!0},scrape:{chip:!0,tone:"orange",dur:.9},hit:{chip:!0,tone:"orange",dur:1.1,sub:"COMBO LOST"}},xp=1.15,Lw=1,_p=1.75,yp={intro:["INTRO","HANGAR"],launch:["#3 · #1","LAUNCH + FLEET"],reveal:["REVEAL","THE FLIP RAMP"],flip:["#2","THE MIDAIR FLIP"],build:["BUILD","MEGA FLIP"],mega:["MEGA FLIP","FLEET FLIP"],outro:["OUTRO","FINISH"],tunnel:["BREAK","CHECKPOINT"],loop:["DROP 2","THE LOOP"],flight:["DROP 3","FLIGHT"]};function Dw(n){const t=n/wi;let e=0;if(n>=sr){const h=n-sr;e=238*(1-Math.exp(-h/1.6))+10*Math.min(1,h/12);for(const o of gc){const u=n-Yi(o);u>0&&u<.5&&(e+=6*Math.sin(u/.5*Math.PI))}t>=48&&t<56&&(e=e*.82),t>=56&&t<88&&(e+=8*Math.sin((t-56)/32*Math.PI)-18*Math.exp(-(((t-74)/4)**2))),t>=88&&t<96&&(e+=14*(t-88)/8),t>=96&&t<128&&(e+=22+4*Math.sin(t*Math.PI/2)),t>=128&&(e+=22-16*Math.min(1,(t-128)/8)),n>Rr&&(e*=Math.max(0,1-(n-Rr)/2.5))}let i=0,s=0,r=0,a=0;n>=sr&&(i+=1e3);for(const h of gc)t>=h&&(i+=500,a++);t>=31.5&&(i+=2e3),t>=48&&(i+=1e3),t>=56&&(i+=100*Math.floor(Math.min(88,t)-56)),t>=74&&(i+=1500);for(let h=0;h<15;h++){const o=98+2*h;t>=o&&(r++,s=h+1,i+=250*s)}t>=128&&t<134?s=r:t<98&&(s=0),n>=sr&&(i+=Math.floor(Math.min(n,Rr)-sr)*120);let l=0;t>=16&&t<48?l=Math.min(.6,.12+.07*a):t>=48&&t<88?l=.6-.15*Math.min(1,Math.max(0,(t-56)/32)):t>=88&&t<96?l=.45+.55*(t-88)/8:t>=96&&t<128?l=1-.55*(t-96)/32:t>=128&&(l=.45);let c=0;return t>=9&&t<16&&(c=Math.min(.86,.18+.68*(t-9)/5)+.02*Math.sin(t*9)),{speed:e,score:i,combo:s,maxCombo:Math.max(r,s),boost:l,rev:c,revTarget:[.78,.94],launch:"PERFECT",shifts:a,shiftsTotal:gc.length,rings:r,ringsTotal:15}}const Ce=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),me=n=>typeof n=="number"&&isFinite(n)?n:void 0,Xr=n=>1-Math.pow(1-Ce(n),3),hs=n=>{n=Ce(n);const t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)};function qa(n){n=Math.max(0,n);const t=Math.floor(n/60),e=n-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const rc=n=>Math.round(n).toLocaleString("en-US"),Je=(n,t,e)=>{const i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i};function je(n,t){n.__t!==t&&(n.__t=t,n.textContent=t)}function pe(n,t,e){const i="__s_"+t;n[i]!==e&&(n[i]=e,n.style.setProperty(t,e))}function Ne(n,t,e){const i="__c_"+t;n[i]!==e&&(n[i]=e,n.classList.toggle(t,e))}function ka(n,t,e,i,s){const r=o=>{const u=(o-90)*Math.PI/180;return[n+e*Math.cos(u),t+e*Math.sin(u)]},[a,l]=r(i),[c,h]=r(s);return`M${a.toFixed(2)} ${l.toFixed(2)} A${e} ${e} 0 ${s-i>180?1:0} 1 ${c.toFixed(2)} ${h.toFixed(2)}`}function Iw(n,t,e,i,s,r,a,l){let c="";for(let h=0;h<=a;h++){const o=s+(r-s)*h/a,u=(o-90)*Math.PI/180,f=h%l===0,d=f?e-4:e;c+=`<line x1="${(n+d*Math.cos(u)).toFixed(1)}" y1="${(t+d*Math.sin(u)).toFixed(1)}" x2="${(n+i*Math.cos(u)).toFixed(1)}" y2="${(t+i*Math.sin(u)).toFixed(1)}" class="${f?"tk tk-big":"tk"}"/>`}return c}class Uw{constructor(){this.mesh=null,this.key="",this.failed=!1}_build(){const t=window.__game,e=t&&t.carApi,i=t&&t.car,s=e&&e.anchors&&e.anchors.tailLeft&&e.anchors.tailLeft.parent||(i&&i.isObject3D?i:null);if(!s)return!1;const r=document.createElement("canvas");r.width=512,r.height=144,this.ctx=r.getContext("2d"),this.tex=new Gc(r),this.tex.colorSpace=Mn,this.tex.anisotropy=4;const a=new We({map:this.tex,transparent:!0,depthWrite:!1,blending:yn,toneMapped:!1,side:Ve});a.color.setScalar(1.7),this.mesh=new ge(new pn(.86,.242),a),this.mesh.name="hud-deck-panel",this.mesh.renderOrder=20,this.mesh.frustumCulled=!1;const l=s!==i;return this.mesh.position.set(0,1,1.9),this.mesh.rotation.x=-.62,s.add(this.mesh),!0}update(t,e,i,s,r){if(this.failed)return;if(!this.mesh)try{if(!t||!this._build())return}catch{this.failed=!0;return}if(this.mesh.visible=t,!t)return;const a=e+"|"+i+"|"+(s>.5?1:0)+"|"+(r?1:0);if(a===this.key)return;this.key=a;const l=this.ctx,c=512,h=144;l.clearRect(0,0,c,h);const o=l.createLinearGradient(0,0,0,h);o.addColorStop(0,"rgba(20,90,140,0.30)"),o.addColorStop(1,"rgba(10,30,70,0.10)"),l.fillStyle=o,l.beginPath(),l.moveTo(26,6),l.lineTo(c-6,6),l.lineTo(c-26,h-6),l.lineTo(6,h-6),l.closePath(),l.fill(),l.strokeStyle=`rgba(63,243,255,${.55+.45*s})`,l.lineWidth=3,l.stroke(),l.fillStyle="rgba(255,58,210,0.9)",l.fillRect(30,6,120,4),l.fillRect(c-150,h-10,120,4);const u='"DIN Condensed","Bahnschrift","Barlow Condensed","Roboto Condensed","Arial Narrow",Impact,sans-serif';l.textBaseline="alphabetic",l.shadowColor="rgba(63,243,255,0.95)",l.shadowBlur=14,l.fillStyle="rgba(190,240,255,0.85)",l.font=`700 22px ${u}`,l.fillText("L A P",40,46),l.fillStyle="#ffffff",l.font=`italic 700 92px ${u}`,l.fillText(e,36,126),i>=2&&(l.textAlign="right",l.shadowColor="rgba(255,58,210,0.95)",l.fillStyle="rgba(255,198,243,0.9)",l.font=`700 22px ${u}`,l.fillText("C O M B O",c-40,46),l.fillStyle=r?"#ffe7fb":"#ff7be6",l.font=`italic 700 80px ${u}`,l.fillText("×"+i,c-40,124),l.textAlign="left"),l.shadowBlur=0,this.tex.needsUpdate=!0}}class Nf{constructor(){jf(this,"_loop",()=>{requestAnimationFrame(this._loop),this._wrapSeek(),!(this._previewMode||performance.now()-this.lastExternal<250)&&this._poll()});this.mounted=!1,this.events=[],this.replayFns=[],this.lastExternal=0,this.t=0,this.state={},this.prevCombo=0,this.prevT=-1,this.best=null,this.recordSaved=!1,this.deck=new Uw}mount(t){if(this.mounted||typeof document>"u")return this;t=t||document.getElementById("hud"),t||(t=Je("div"),t.id="hud",document.body.appendChild(t)),this.root=t,t.innerHTML="",Ne(t,"rr-hud",!0),Aw&&(t.dataset.autoplay="1"),t.append(Je("div","rr-scrim rr-scrim-top"),Je("div","rr-scrim rr-scrim-bot"),Je("div","rr-scan")),this.frame=Je("div","rr-frame");for(const f of["tl","tr","bl","br"])this.frame.append(Je("i","rr-br rr-br-"+f));t.append(this.frame);const e=Je("div","rr-top");this.scoreBox=Je("div","rr-score",`
      <div class="rr-lbl">SCORE</div>
      <div class="rr-score-v">${'<i class="rr-d"></i>'.repeat(7)}</div>
      <div class="rr-combo"><b class="rr-combo-x">x0</b><span class="rr-combo-l">COMBO</span><i class="rr-combo-bar"><i></i></i></div>
      <div class="rr-combo-pop"><b></b><span></span></div>`),this.timeBox=Je("div","rr-time",`
      <div class="rr-lbl">LAP <span class="rr-sec"></span></div>
      <div class="rr-time-v">0:00.00</div>
      <div class="rr-split"></div>`),this.center=Je("div","rr-center",`
      <div class="rr-chip"><i class="rr-chip-dot"></i><span class="rr-chip-a"></span><span class="rr-chip-b"></span></div>`),e.append(this.scoreBox,this.center,this.timeBox),t.append(e);const i=200,s=100,r=-135,a=135,l=(f,d)=>`
      <svg viewBox="0 0 ${i} ${i}" class="rr-pod-svg">
        <defs>
          <linearGradient id="g-${f}" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" class="st0"/><stop offset="1" class="st1"/>
          </linearGradient>
        </defs>
        <circle cx="${s}" cy="${s}" r="92" class="pod-bg"/>
        <path d="${ka(s,s,84,r,a)}" class="pod-track"/>
        <g class="pod-ticks">${Iw(s,s,72,78,r,a,24,4)}</g>
        <path d="${ka(s,s,84,r,a)}" class="pod-fill ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${ka(s,s,84,r,a)}" class="pod-glow ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${ka(s,s,92,r,a)}" class="pod-zone" pathLength="100"/>
        <path d="${ka(s,s,63,r+8,a-8)}" class="pod-inner" pathLength="100"/>
        <line x1="${s}" y1="${s}" x2="${s}" y2="${s-92}" class="pod-needle"/>
      </svg>`;this.speedPod=Je("div","rr-pod rr-pod-speed",l("spd","f-speed")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">MPH</div></div>
      <div class="rr-pod-tag">VELOCITY</div>`),this.boostPod=Je("div","rr-pod rr-pod-boost",l("bst","f-boost")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">BOOST</div></div>
      <div class="rr-pod-tag">COLD-GAS</div>`),t.append(this.boostPod,this.speedPod),this.shiftEl=Je("div","rr-shift",`
      <div class="rr-shift-leds">${"<i></i>".repeat(10)}</div>
      <div class="rr-shift-row"><span class="rr-shift-g"><small>GEAR</small><b>1</b></span><span class="rr-shift-l">SHIFT</span></div>`),t.append(this.shiftEl);const c=(f,d)=>f.querySelector(d);this.sp={fill:c(this.speedPod,".pod-fill"),glow:c(this.speedPod,".pod-glow"),v:c(this.speedPod,".rr-pod-v"),needle:c(this.speedPod,".pod-needle"),zone:c(this.speedPod,".pod-zone"),inner:c(this.speedPod,".pod-inner")},this.bp={fill:c(this.boostPod,".pod-fill"),glow:c(this.boostPod,".pod-glow"),v:c(this.boostPod,".rr-pod-v"),u:c(this.boostPod,".rr-pod-u"),tag:c(this.boostPod,".rr-pod-tag"),needle:c(this.boostPod,".pod-needle"),zone:c(this.boostPod,".pod-zone"),inner:c(this.boostPod,".pod-inner")},this.popLayer=Je("div","rr-pops"),t.append(this.popLayer),this.popPool=[];for(let f=0;f<4;f++){const d=Je("div","rr-pop",'<div class="rr-pop-bar rr-pop-bar-a"></div><div class="rr-pop-txt"><span class="rr-pop-c rr-pop-m"></span><span class="rr-pop-c rr-pop-y"></span><span class="rr-pop-main"></span></div><div class="rr-pop-sub"></div><div class="rr-pop-bar rr-pop-bar-b"></div>');d.style.display="none",this.popLayer.append(d),this.popPool.push(d)}this.chips=Je("div","rr-chips"),t.append(this.chips),this.chipPool=[];for(let f=0;f<3;f++){const d=Je("div","rr-tag");d.style.display="none",this.chips.append(d),this.chipPool.push(d)}this.title=Je("div","rr-title",`
      <div class="rr-title-kicker">A ROADSTER DEMO RUN</div>
      <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
      <div class="rr-title-rule"><i></i></div>`),this.titleScrim=Je("div","rr-title-scrim"),this.start=Je("div","rr-start",`
      <div class="rr-press">PRESS START</div>
      <div class="rr-title-hint"><b>HOLD</b> TO REV &nbsp;·&nbsp; <b>RELEASE</b> ON GO</div>`),this.specs=Je("div","rr-specs",`
      <div class="rr-spec"><span class="rr-lbl">0–60 MPH</span><b>&lt;1.0<small>S</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">TOP SPEED</span><b>250+<small>MPH</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">THRUSTERS</span><b>COLD<small>GAS</small></b></div>`),this.specCells=[...this.specs.children],this.count=Je("div","rr-count",`
      <i class="rr-count-wave"></i>
      <svg viewBox="0 0 200 200" class="rr-count-ring"><circle cx="100" cy="100" r="86" class="cr-bg"/><circle cx="100" cy="100" r="86" class="cr-fg" pathLength="100"/></svg>
      <div class="rr-count-n">3</div>
      <div class="rr-tree"><i></i><i></i><i></i></div>
      <div class="rr-count-l">HOLD TO REV</div>`),t.append(this.titleScrim,this.title,this.start,this.specs,this.count),this.countN=this.count.querySelector(".rr-count-n"),this.countL=this.count.querySelector(".rr-count-l"),this.countRing=this.count.querySelector(".cr-fg"),this.countWave=this.count.querySelector(".rr-count-wave"),this.treeLights=[...this.count.querySelectorAll(".rr-tree i")],this.results=Je("div","rr-results",`
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
      </div>`),this.credit=Je("div","rr-credit","Fan-made game · not affiliated with Tesla"),t.append(this.results,this.credit),sl.has("og")&&(Ne(t,"is-og",!0),t.append(Je("div","rr-og",`
        <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
        <div class="rr-og-tag">LAND THE FLIP <i>·</i> JUMP THE FLEET <i>·</i> 0-60 IN 0.81S</div>`)));const h=f=>this.results.querySelector(f);this.rr={card:h(".rr-card"),time:h(".rr-r-time"),score:h(".rr-r-score"),best:h(".rr-r-best"),launch:h(".rr-r-launch"),shifts:h(".rr-r-shifts"),rings:h(".rr-r-rings"),combo:h(".rr-r-combo"),record:h(".rr-record"),replay:h(".rr-replay"),title:h(".rr-card-title"),flag:h(".rr-card-flag"),rank:h(".rr-r-rank"),rankBox:h(".rr-rank"),cells:[...this.results.querySelectorAll(".rr-card-grid > div, .rr-card-time, .rr-card-foot, .rr-card-acts")]},this.cue=Je("div","rr-cue",'<div class="rr-cue-row"><b class="rr-cue-k">TAP</b><span class="rr-cue-t">THRUSTERS</span></div><i class="rr-cue-bar"><i></i></i>'),this.cueK=this.cue.querySelector(".rr-cue-k"),this.cueT=this.cue.querySelector(".rr-cue-t"),this.cueBar=this.cue.querySelector(".rr-cue-bar > i"),this.z60=Je("div","rr-z60",'<span class="rr-lbl">0-60 MPH</span><b class="rr-z60-v">0.00</b><small>S</small>'),this.z60V=this.z60.querySelector(".rr-z60-v"),t.append(this.cue,this.z60),this.flash=Je("div","rr-beatflash"),t.append(this.flash),this.launchLbl=Je("div","rr-launch-lbl"),t.append(this.launchLbl),this.whiteFlash=Je("div","rr-whiteflash"),t.append(this.whiteFlash),this.scoreDigits=[...this.scoreBox.querySelectorAll(".rr-d")],this.comboPop=this.scoreBox.querySelector(".rr-combo-pop"),this.comboPopN=this.comboPop.querySelector("b"),this.comboPopL=this.comboPop.querySelector("span"),this.comboEl=this.scoreBox.querySelector(".rr-combo"),this.comboX=this.scoreBox.querySelector(".rr-combo-x"),this.comboBar=this.scoreBox.querySelector(".rr-combo-bar > i"),this.timeV=this.timeBox.querySelector(".rr-time-v"),this.splitEl=this.timeBox.querySelector(".rr-split"),this.secEl=this.timeBox.querySelector(".rr-sec"),this.chipA=this.center.querySelector(".rr-chip-a"),this.chipB=this.center.querySelector(".rr-chip-b"),this.chipEl=this.center.querySelector(".rr-chip"),this.leds=[...this.shiftEl.querySelectorAll(".rr-shift-leds i")],this.shiftL=this.shiftEl.querySelector(".rr-shift-l"),this.shiftG=this.shiftEl.querySelector(".rr-shift-g b");const o=()=>{if(!this._resultsVisible||this.t<this._resultsAt+.8)return;for(const v of this.replayFns)try{v()}catch{}if(this.replayFns.length)return;window.dispatchEvent(new CustomEvent("rr:replay"));const f=window.__game,d=f&&(f.restart||f.replay||f.reset);if(d)try{d.call(f)}catch{}};window.addEventListener("pointerdown",o,{passive:!0}),this.shareBtn=h(".rr-btn-share"),this.againBtn=h(".rr-btn-again"),this.toast=h(".rr-card-toast");const u=f=>!!(f.target&&f.target.closest&&f.target.closest(".rr-btn-share"));window.addEventListener("pointerdown",f=>{this._resultsVisible&&u(f)&&f.stopImmediatePropagation()},{capture:!0}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&document.activeElement===this.shareBtn&&f.stopImmediatePropagation()},{capture:!0}),this.shareBtn.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this.share()}),this.againBtn.addEventListener("click",f=>{f.detail===0&&o()}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&o()}),window.addEventListener("rr:event",f=>{const d=f.detail||{};d.name&&this.event(d.name,d)});try{const f=localStorage.getItem("rr.best");this.best=f?+f:null}catch{this.best=null}return this.mounted=!0,this.render(0,{}),requestAnimationFrame(this._loop),this}onReplay(t){typeof t=="function"&&this.replayFns.push(t)}bindGameplay(t){return this._gp=t,this}onGameplayEvent(t){if(!t||!t.type)return;this._sawEvent=!0,t.type==="launch"&&t.rating&&(this._launchGrade=t.rating);const e={fleet:"fleet",upside:"whoosh",ringmiss:"late",offbeat:"late"};if(e[t.type]&&Tn.playing&&Math.abs((me(t.t)??0)-Tn.time())<.3)try{Tn._play(e[t.type],{dur:1.2})}catch{}t.text&&(this.gpEvents=(this.gpEvents||[]).filter(i=>me(t.t)===void 0||i.t0<=t.t),this.gpEvents.push({text:t.text,t0:me(t.t)??this.t,kind:t.type,style:t.style}),this.gpEvents.length>16&&this.gpEvents.shift())}update(t,e){typeof t=="object"&&t&&(e=t,t=me(e.t??e.time)),this.lastExternal=performance.now(),this.render(me(t)??this.t,e||{})}popup(t,e={}){const i=me(e.t)??this.t;this.events.push({t:i,text:String(t),sub:e.sub||"",tone:e.tone||"cyan",size:e.size||"l",dur:me(e.dur)??3.5,key:e.key}),this.events.length>24&&this.events.splice(0,this.events.length-24)}chip(t,e={}){const i=me(e.t)??this.t;this.events.push({t:i,text:t,sub:e.sub||"",tone:e.tone||"green",chip:!0,dur:me(e.dur)??2.4,key:e.key})}event(t,e={}){const i=String(t).toLowerCase(),s=me(e.t)??this.t;this._sawEvent=!0;const r=this.events.length;this._event(i,e,s);for(let a=r;a<this.events.length;a++)this.events[a].fromEvent=!0}_event(t,e,i){if(t==="shift"){const s=String(e.grade||"PERFECT").toUpperCase();this.chip(s==="PERFECT"?"PERFECT SHIFT":s==="GOOD"?"GOOD SHIFT":"LATE SHIFT",{t:i,tone:s==="PERFECT"?"green":s==="GOOD"?"cyan":"orange",sub:e.points?"+"+e.points:""})}else t==="launch"?this._launchGrade=String(e.grade||"PERFECT").toUpperCase():t==="combo"?+(e.n??e.combo):t==="pylon"||t==="hit"?this.chip("COMBO LOST",{t:i,tone:"orange"}):t==="airtime"?this.popup("AIR TIME",{t:i,tone:"cyan",size:"l",dur:2.6,sub:e.secs?e.secs.toFixed(2)+" s":""}):t==="record"&&(this._record=!0)}_readGame(){const t=window.__game||{};if(!window.__game&&!this._gp)return null;let e;try{e=me(t.time)??me(t.t)??me(t.musicTime)??(typeof t.getTime=="function"?me(t.getTime()):void 0)??me(t.clock&&(t.clock.t??t.clock.time))??me(t.state&&(t.state.t??t.state.time))}catch{}let i;try{i=this._gp&&this._gp.state||typeof t.hudState=="function"&&t.hudState()||t.gp&&t.gp.state||t.gameplay&&t.gameplay.state||typeof t.getState=="function"&&t.getState()||t.state&&typeof t.state=="object"&&t.state||{},e===void 0&&me(i.t)!==void 0&&(e=i.t)}catch{i={}}return{t:e,s:i}}_poll(t){const e=this._readGame();if(!e&&t===void 0&&!Tn.playing)return;let i=me(t)??(e&&e.t);i===void 0&&Tn.playing&&(i=Tn.time()),i===void 0&&(i=this._seekT??0);const s=e&&e.s||{};if(this.render(i,s),performance.now()-Tn.lastTickAt>250)try{Tn.tick(i,this._merged||s)}catch{}}_wrapSeek(){const t=window.__game;if(!t||typeof t.seek!="function"||t.seek.__hudWrapped)return;const e=t.seek,i=this,s=function(r){return i._seekT=+r,Promise.resolve(e.apply(this,arguments)).then(a=>(performance.now()-i.lastExternal>250&&i._poll(+r),a))};s.__hudWrapped=!0;try{t.seek=s}catch{}}render(t,e={}){if(!this.mounted)return;t<this.prevT-.5&&(this.events=this.events.filter(et=>et.t<=t),this._record=!1,this.recordSaved=!1),this.prevT=t,this.t=t;const i=Dw(t),s={};for(const et in i)s[et]=i[et];for(const et in e)e[et]!==void 0&&e[et]!==null&&(s[et]=e[et]);if(!Array.isArray(e.popups)){let et=null;try{const Ot=window.__game;et=this._gp&&this._gp.state||Ot&&(Ot.gameplay&&Ot.gameplay.state||Ot.gp&&Ot.gp.state)||null}catch{}if(et&&Array.isArray(et.popups)){e={section:et.section,launched:et.launched,launchT:et.launchT,finishT:et.finishT,airborne:et.airborne,results:et.results,mph:et.mph,launch:et.launch,finished:et.finished,...e,popups:et.popups};for(const Ot in e)e[Ot]!==void 0&&e[Ot]!==null&&(s[Ot]=e[Ot])}}const r=Array.isArray(e.popups)||me(e.mph)!==void 0;r&&(e.shift&&typeof e.shift=="object"&&(s.shift={phase:me(e.shift.light)??me(e.shift.phase),window:!!(e.shift.green??e.shift.window),active:e.shift.active!==!1}),me(e.perfectShifts)!==void 0&&(s.shifts=e.perfectShifts),e.results&&typeof e.results=="object"&&(s.results=e.results),e.launched||(s.launchT=void 0),s._gpLaunch=e.launch||null),this._gpState=r;const a=me(e.mph)??me(e.speed)??me(e.speedMph)??i.speed;s.speed=a,s.boost=me(e.boost)??me(e.boostMeter)??i.boost,s.rev=me(e.rev)??me(e.revLevel)??i.rev,this._merged=s;const l=t/wi,c=l-Math.floor(l),h=Math.pow(1-c,3);this.root.style.setProperty("--pulse",h.toFixed(3));let o=0,u=0;try{const et=window.__game,Ot=this._gp&&this._gp.state&&this._gp.state.cam||et&&et.gp&&et.gp.state&&et.gp.state.cam;Ot&&(o=me(Ot.shake)??0,u=me(Ot.punch)??0)}catch{}const f=Ce(o*.9+u*.012);pe(this.root,"--shx",(Math.sin(t*73.1)*f*7).toFixed(2)+"px"),pe(this.root,"--shy",(Math.cos(t*57.7)*f*5).toFixed(2)+"px"),pe(this.root,"--ab",(.6+f*5).toFixed(2));const d=r?e.finished?(me(e.finishT)??t)+qm:1/0:Ew;this._resultsAt=d;const v=r?e.finished?me(e.finishT)??t:1/0:Rr;this._finishing=t>=v,Ne(this.root,"is-finish",this._finishing);const g=t-v;pe(this.whiteFlash,"opacity",(this._finishing?.75*Math.pow(Ce(1-g/.34),2):0).toFixed(3));const m=t<sr,p=t>=d,M=l<9.6;Ne(this.root,"is-intro",m),Ne(this.root,"is-title",M),Ne(this.root,"is-results",p),Ne(this.root,"is-flight",l>=96&&l<128);const w=typeof s.section=="string"&&yp[s.section]?[0,...yp[s.section]]:Cw(l);je(this.chipA,w[1]),je(this.chipB,w[2]),je(this.secEl,"");const y=r?e.launched?me(e.launchT)??sr:void 0:sr,L=r?e.finished?me(e.finishT)??t:t:Math.min(t,Rr),I=y===void 0?0:Math.max(0,L-y);this._lap=I,this._finishT=r?e.finished?me(e.finishT)??t:void 0:t>=Rr?Rr:void 0,je(this.timeV,qa(I));const R=l>=48&&l<60;Ne(this.splitEl,"on",R),je(this.splitEl,R?"CP1  "+qa(Yi(48)-(y??sr)):"");const U=Math.max(0,Math.floor(me(s.score)??0)),P=String(Math.min(U,9999999)).padStart(7,"0"),_=Math.min(6,P.length-String(U).length);this.scoreDigits.forEach((et,Ot)=>{je(et,P[Ot]),Ne(et,"ghost",Ot<_)});const N=Math.floor(me(s.combo)??0);Ne(this.comboEl,"on",N>=2),je(this.comboX,"x"+N),pe(this.comboBar,"width",(Ce(N%5/5+(N%5===0&&N>0?1:0))*100).toFixed(0)+"%"),!r&&N>this.prevCombo&&N>=10&&N%10===0&&!this._sawEvent&&this.events.push({t:this._comboT(N,t),text:`x${N} COMBO`,lane:"combo",dur:1.5}),this.prevCombo=N;const W=l>=16&&l<47.5&&(!r||s.section==="launch"&&!!e.launched&&!e.airborne);if(Ne(this.shiftEl,"on",W),W){let et=me(s.shift&&s.shift.phase);et===void 0&&(et=(l-16)%4/4);const Ot=s.shift&&typeof s.shift.window=="boolean"?s.shift.window:et>.82,Jt=Ot?this.leds.length:Math.floor(Ce(et/.9)*this.leds.length+.001);this.leds.forEach((ce,lt)=>{Ne(ce,"on",lt<Jt),Ne(ce,"win",Ot)}),Ne(this.shiftEl,"win",Ot),je(this.shiftL,Ot?"SHIFT!":Jt>=7?"READY":"SHIFT");const oe=Math.max(1,Math.floor(me(s.gear)??1+(me(s.shifts)??0)));je(this.shiftG,String(oe)),pe(this.shiftEl,"--kick",(et<.12&&l>17?1-et/.12:0).toFixed(3))}const nt=Ce(a/300);pe(this.sp.fill,"stroke-dasharray",`${(nt*100).toFixed(2)} 100`),pe(this.sp.glow,"stroke-dasharray",`${(nt*100).toFixed(2)} 100`),pe(this.sp.needle,"transform",`rotate(${(-135+270*nt).toFixed(2)}deg)`),je(this.sp.v,String(Math.round(a))),Ne(this.speedPod,"redline",a>255),pe(this.sp.zone,"stroke-dasharray","0 100"),pe(this.sp.inner,"stroke-dasharray",`${(Ce(l%4/4)*100).toFixed(1)} 100`);const mt=l>=8&&l<16.5,Ct=l>=88&&l<96;let pt=Ce(mt?s.rev:s.boost);if(Ct){const et=Math.floor(l-88),Ot=l-88-et;pt=Math.max(pt*.25,Ce((et+Xr(Ce(Ot/.22)))/6.5))}else l>=96&&l<97&&(pt=Math.max(pt,1-Ce(l-96.5)));Ne(this.boostPod,"charging",Ct),pe(this.boostPod,"--kick",(Ct?h:0).toFixed(3)),Ne(this.boostPod,"rev",mt),pe(this.bp.fill,"stroke-dasharray",`${(pt*100).toFixed(2)} 100`),pe(this.bp.glow,"stroke-dasharray",`${(pt*100).toFixed(2)} 100`),pe(this.bp.needle,"transform",`rotate(${(-135+270*pt).toFixed(2)}deg)`),je(this.bp.v,String(Math.round(pt*100))),je(this.bp.u,mt?"REV":"BOOST"),je(this.bp.tag,mt?"LAUNCH":Ct?pt>=.999?"READY":"ARMING":"COLD-GAS");const Ut=Array.isArray(e.revTarget)?e.revTarget:this._gpState?[.86,1]:[.78,.94];mt?(pe(this.bp.zone,"stroke-dasharray",`0 ${(Ut[0]*100).toFixed(1)} ${((Ut[1]-Ut[0])*100).toFixed(1)} 100`),Ne(this.boostPod,"inzone",pt>=Ut[0]&&pt<=Ut[1])):(pe(this.bp.zone,"stroke-dasharray","0 100"),Ne(this.boostPod,"inzone",!1)),Ne(this.boostPod,"full",!mt&&pt>.97),pe(this.bp.inner,"stroke-dasharray",`${(l>=88&&l<96?(l-88)/8*100:0).toFixed(1)} 100`),Ne(this.root,"hide-pods",M||p||this._finishing);try{this.deck.update(!1,qa(I),N,h,N>=10)}catch{}this._renderTitle(t,l,c),this._renderCount(t,l,c,s),this._renderCue(t,e),this._renderPops(t,l,s),this._renderResults(t,s),pe(this.flash,"opacity",(m||p?0:h*(l>=16?.1:0)).toFixed(3))}_renderCue(t,e){const i=e&&e.cue,s=!!(i&&i.active&&!this._finishing);if(Ne(this.cue,"on",s),s){const l=String(i.text||"").split(":");je(this.cueK,i.done&&i.grade?String(i.grade):l.length>1?l[0].trim():""),je(this.cueT,i.done&&i.grade?i.kind==="hold"?"LANDING":i.id==="hop"?"HOP":"KICKFLIP":l.length>1?l.slice(1).join(":").trim():i.text);const c=!i.done&&Math.abs(t-(me(i.tHit)??t))<.14;Ne(this.cue,"hot",c||i.kind==="hold"&&!!e.holding&&!i.done),Ne(this.cue,"done",!!i.done),Ne(this.cue,"hold",i.kind==="hold"),pe(this.cueBar,"width",(Ce(me(i.k)??0)*100).toFixed(1)+"%")}this._cueOn=s,this._cueTxt=s?(this.cueK.textContent||"")+(this.cueT.textContent||""):"",this._cueDodge(s,e&&e.carScreen);const r=e&&e.zero60,a=!!(r&&r.show)&&!this._finishing;Ne(this.z60,"on",a),a&&(je(this.z60V,(me(r.t)??0).toFixed(2)),Ne(this.z60,"frozen",!!r.frozen))}_comboT(t,e){if(!this._sawEvent){const i=96+2*t;if(Math.abs(Yi(i)-e)<3)return Yi(i)}return e}_renderTitle(t,e,i){const s=e<9.6,r=Ce((e-8.8)/.8);pe(this.specs,"display",s?"":"none");const a=Xr(Ce(t/.6));if(pe(this.title,"opacity",s?(a*(1-r)).toFixed(3):"0"),pe(this.title,"display",s?"":"none"),pe(this.start,"display",s?"":"none"),pe(this.titleScrim,"display",s?"":"none"),pe(this.start,"opacity",s?(a*(1-r)).toFixed(3):"0"),pe(this.titleScrim,"opacity",s?(1-r).toFixed(3):"0"),!s)return;pe(this.title,"transform",`translate(-50%, -50%) scale(${(.96+.04*a+.08*r).toFixed(3)})`);const l=this.start.querySelector(".rr-press");Ne(l,"lit",e<2?!0:i<.5),pe(this.title,"--wipe",(Ce(t/.5)*115).toFixed(1)+"%"),Ne(this.title,"wiped",t>=.5),this.specCells.forEach((c,h)=>{const o=hs(Ce((e-1-h*.5)/.9));pe(c,"opacity",(Ce((e-1-h*.5)/.4)*(1-r)).toFixed(3)),pe(c,"transform",`translateY(${((1-o)*30).toFixed(1)}px)`)})}_renderCount(t,e,i,s){let r=!1,a="",l="",c=0,h=1,o=1,u=!1;if(e>=10&&e<16){const m=Math.floor((e-10)/2),p=(e-10-m*2)/2;r=!0,a=String(3-m),l="HOLD TO REV",c=1-p,h=1.35-.35*hs(p*4),o=1-.35*Ce((p-.7)/.3)}else if(e>=16&&e<17.4){const m=e-16;r=!0,u=!0,a="GO",c=0,l="";const p=Ce((m-1)/.4);h=1.5-.5*hs(m*2.2)+.9*p*p,o=1-p}const d=e>=16&&e<18?this._gpState?s._gpLaunch:this._launchGrade||s.launch||"PERFECT":null;if(!d)pe(this.launchLbl,"display","none");else{const m=String(d).toUpperCase();pe(this.launchLbl,"display",""),je(this.launchLbl,m+" LAUNCH");const p="rr-launch-lbl g-"+m.toLowerCase();this.launchLbl.__cn!==p&&(this.launchLbl.__cn=p,this.launchLbl.className=p);const M=hs(Ce((e-16)/.35));pe(this.launchLbl,"transform",`translate(-50%, 0) scale(${(1.4-.4*M).toFixed(3)}) skewX(-10deg)`),pe(this.launchLbl,"opacity",Ce((e-16)/.08).toFixed(3))}if(pe(this.count,"display",r?"":"none"),!r)return;Ne(this.count,"go",u);const v=u?3:Math.floor((e-10)/2)+1;this.treeLights.forEach((m,p)=>{Ne(m,"on",p<v),Ne(m,"g",u)});const g=u?(e-16)/1.6:(e-10)%2/1.2;pe(this.countWave,"transform",`scale(${(.8+1.1*Xr(g)).toFixed(3)})`),pe(this.countWave,"opacity",(Ce(1-g)*(u?1:.7)).toFixed(3)),pe(this.count,"--hit",Math.pow(1-Ce(u?(e-16)/.5:(e-10)%2/.5),2).toFixed(3)),je(this.countN,a),je(this.countL,l),pe(this.countRing,"stroke-dasharray",`${(c*100).toFixed(2)} 100`),pe(this.count,"transform",`translate(-50%, -50%) scale(${h.toFixed(3)})`),pe(this.count,"opacity",o.toFixed(3))}_activeCallouts(t,e){const i=[],s=Array.isArray(e.popups)?e.popups:this.gpEvents&&this.gpEvents.length?this.gpEvents:null;if(s){const r=[];for(const l of s){const c=Pw[l.kind]||(l.style==="bad"?{chip:!0,tone:"orange",dur:1}:l.style==="big"?{tone:"cyan",size:"l",pri:2,dur:2}:{chip:!0,tone:"cyan",dur:1.2});if(c.skip||!l.text)continue;if(c.lane==="combo"){const f=+(String(l.text).match(/\d+/)||[0])[0];if(!(f>=10&&f%10===0))continue}const h=c.slam?2.4:c.chip?Lw:c.moment?_p:xp,o=(me(l.t0)??0)+(c.delay||0),u=Math.min(2.4-(c.delay||0),c.dur||1.5,h);r.push({chip:!!c.chip,lane:c.lane,pri:c.pri??1,slam:!!c.slam,t:o,t0p:me(l.t0)??0,dur:u,text:c.text||l.text,sub:c.subFn?c.subFn(l,e,this):c.sub||"",tone:c.tone||"cyan",size:c.size||"l",flip:!!c.flip,wrap:!!c.wrap})}const a=r.filter(l=>!l.chip&&!l.lane);for(const l of r){if(l.chip){let c=l.t;for(const h of a)c>=h.t&&c<h.t+h.dur&&(c=h.t+h.dur);if(c>l.t){const h=Math.min(c+l.dur,l.t0p+2.45);l.dur=Math.max(0,h-c),l.t=c}}l.dur>0&&t>=l.t&&t<l.t+l.dur&&i.push(l)}for(const l of this.events)!l.fromEvent&&t>=l.t&&t<l.t+l.dur&&i.push(l);return i}for(const r of Rw){const a=Yi(r.b),l=r.text==="FINISH"?Yi(r.dur):Math.min(/^#\d/.test(r.text)?_p:xp,Yi(r.dur));t>=a&&t<a+l&&i.push({...r,pri:r.text==="FINISH"?9:3,slam:r.text==="FINISH",t:a,dur:l,sub:r.subFn?r.subFn():r.sub||""})}if(!this._sawEvent)for(const r of gc){const a=Yi(r);t>=a&&t<a+Yi(3)&&i.push({chip:!0,t:a,dur:Yi(3),text:"PERFECT SHIFT",sub:"+500",tone:"green"})}for(const r of this.events)t>=r.t&&t<r.t+r.dur&&i.push(r);return i}_cueDodge(t,e){if(!t||!e||!e.on||!Number.isFinite(e.y)){this._cueFade(1);return}const i=this.root&&this.root.clientHeight||window.innerHeight||1,s=this.cue.offsetTop/i,r=(1-e.y)/2,a=Math.max(.012,(e.r||0)*.5/2.4),l=Math.min(.97,r+a*1.25);this._cueFade(l>s+.01?.75:1)}_cueFade(t){this.__cueF!==t&&(this.__cueF=t,this.cue.style.opacity=t<1?String(t):"")}_popDodge(t,e,i,s){const r=this.root&&this.root.clientHeight||window.innerHeight||1,a=this.root&&this.root.clientWidth||window.innerWidth||1,l=this.popLayer.offsetTop/r;if(!!(s&&s.slam))return this._popSlot=null,[0,1,1];const h=(t.offsetWidth||0)/a,o=(t.offsetHeight||0)/r,u=Math.min(.78,h>0?(a>r?.6:.84)/h:1,o>0?(a>r?.125:.15)/o:1),f=o*u/2;let d=.12;const v=M=>{try{if(!M||M.style.display==="none")return;const w=M.getBoundingClientRect();w.bottom>0&&w.height>0&&(d=Math.max(d,w.bottom/r))}catch{}};v(this.scoreBox),this.z60.classList.contains("on")&&v(this.z60),v(this.launchLbl);let g=d+f+.022,m=1,p=1;if(e&&e.on&&Number.isFinite(e.y)){const M=(1-e.y)/2,w=Math.max(.03,(e.r||0)*.5*(a>r?.8:.75)),y=M-w-.03-(d+.022);if(2*f>y){p=Ce(y/Math.max(.001,2*f),.72,1);const L=f*p;g=d+L+.022,2*L>y&&(m=Ce(.6+.4*(y/Math.max(.001,2*L)),.8,1))}}return this._popSlot={key:i,y:g},[(g-l)*r,m,u*p]}_renderPops(t,e,i){const s=this._activeCallouts(t,i),a=s.filter(g=>!g.chip&&!g.lane).sort((g,m)=>(m.pri??1)-(g.pri??1)||m.t-g.t)[0],l=s.filter(g=>g.lane==="combo").sort((g,m)=>m.t-g.t)[0],c=this._cueOn?String(this._cueTxt||"").replace(/[^A-Z]/gi,"").toUpperCase():"",h=g=>String(g||"").replace(/[^A-Z]/gi,"").toUpperCase(),o=this._cueOn?h(String(this._cueTxt||"").trim().split(/\s+/).pop()):"",u=g=>{if(!c)return!1;const m=h(g.text);return m.length>2&&(m.includes(c)||c.includes(m)||o&&m.includes(o))},f=this._finishing?[]:s.filter(g=>g.chip&&!u(g)).sort((g,m)=>m.t-g.t).slice(0,this.chipPool.length);this.popPool.forEach((g,m)=>{m>0&&pe(g,"display","none")});const d=this.popPool[0];this._popKey=a?a.text+"@"+a.t.toFixed(3):"";let v=!1;if(!a||t>=this._resultsAt)pe(d,"display","none");else{this.launchLbl.style.display!=="none"&&pe(this.launchLbl,"display","none"),pe(d,"display","");const g=t-a.t,m=g/a.dur,p=Ce(g/(a.slam?.1:.16)),M=a.slam?0:Ce(a.dur-g<.22?1-(a.dur-g)/.22:0),w=(a.slam?2.6-1.6*hs(p):1.7-.7*hs(p))*(1-.35*M),y=Ce(g/.04)*(1-M),L=p<1?(1-p)*(a.slam?14:6)*Math.sin(g*90):0,I=`rr-pop tone-${a.tone} size-${a.size}${a.wrap?" wrap":""}${a.flip?" flip":""}${a.slam?" slam":""}${a.sub?" has-sub":""}`;d.__cn!==I&&(d.__cn=I,d.className=I);const R=String(a.text).replace(/^x(\d)/i,"×$1").replace(/\bx(\d+)\b/g,"×$1");for(const N of d.querySelectorAll(".rr-pop-c, .rr-pop-main"))je(N,R);je(d.querySelector(".rr-pop-sub"),a.sub||"");const[U,P,_]=this._popDodge(d,i.carScreen,this._popKey,a);pe(d,"transform",`translate(-50%, -50%) translate(${L.toFixed(1)}px, ${U.toFixed(1)}px) scale(${(w*_).toFixed(3)})${a.flip?` rotate(${(180*(1-hs(Ce((g-.08)/.4)))).toFixed(1)}deg)`:""}`),pe(d,"opacity",(y*P).toFixed(3)),v=!!this.chipB&&String(a.text).toUpperCase().includes(String(this.chipB.textContent||"").trim().toUpperCase())&&String(this.chipB.textContent||"").trim().length>2,pe(d,"--split",((1-p)*10+1.5+2*Math.pow(1-Ce(e%1),4)*(m<.9?1:0)).toFixed(2)+"px"),pe(d,"--bar",(Xr(Ce(g/.35))*100).toFixed(1)+"%")}if(pe(this.chipEl,"opacity",v?"0":""),!l||this._finishing)Ne(this.comboPop,"on",!1);else{const g=t-l.t,m=g/l.dur,p=(String(l.text).match(/\d+/)||["0"])[0];je(this.comboPopN,"×"+p),je(this.comboPopL,"COMBO"),Ne(this.comboPop,"on",!0);const M=hs(Ce(g/.2)),w=Ce((m-.8)/.2);pe(this.comboPop,"opacity",((1-w)*Ce(g/.04)).toFixed(3)),pe(this.comboPop,"transform",`translateX(${((1-M)*-30).toFixed(1)}px) scale(${(1.25-.25*M).toFixed(3)})`)}this.chipPool.forEach((g,m)=>{const p=f[m];if(!p){pe(g,"display","none");return}pe(g,"display","");const M=t-p.t,w=M/p.dur,y=hs(Ce(M/.18)),L=Ce((w-.75)/.25),I=`rr-tag tone-${p.tone}`,R=`<b>${String(p.text).replace(/\bx(\d+)/g,"×$1")}</b>${p.sub?`<span>${p.sub}</span>`:""}`;g.__cn!==I&&(g.__cn=I,g.className=I),g.__h!==R&&(g.__h=R,g.innerHTML=R),pe(g,"transform",`translateX(${((1-y)*-40).toFixed(1)}px) translateY(${(m*115-L*40).toFixed(0)}%)`),pe(g,"opacity",((1-L)*Ce(M/.05)).toFixed(3))})}_renderResults(t,e){const i=t>=this._resultsAt;if(this._resultsVisible=i,pe(this.results,"display",i?"":"none"),!i)return;const s=t-this._resultsAt,r=e.results||{},a=hs(Ce(s/.3));pe(this.results,"opacity",Ce(s/.12).toFixed(3)),pe(this.rr.card,"transform",`translateY(${((1-a)*60).toFixed(1)}px) scale(${(.9+.1*a).toFixed(3)})`);const l=Math.floor(me(r.score)??me(e.score)??0),c=Math.floor(l*Xr(Ce(s/.32)));je(this.rr.time,qa(me(r.time)??this._lap)),je(this.rr.score,rc(c)),this._shareScore=l;const h=(r.launch||this._launchGrade||e.launch||"PERFECT").toString().toUpperCase();je(this.rr.launch,me(r.zero60)!==void 0?`${h} · ${me(r.zero60).toFixed(2)}S`:h),je(this.rr.shifts,`${r.flips??e.flips??"—"}`),je(this.rr.rings,me(r.fleetFlipped)!==void 0?`${r.fleetFlipped} VEHICLES`:`${r.rings??e.rings??"—"}/${r.ringsTotal??e.ringsTotal??15}`),je(this.rr.combo,"×"+(r.maxCombo??e.maxCombo??e.combo??0));const o={PERFECT:1,GOOD:.65,LATE:.3}[h]??.5,u=me(r.flips)!==void 0?me(r.flips)/13:(me(r.perfectShifts)??me(e.shifts)??0)/Math.max(1,me(e.shiftsTotal)??7),f=(me(r.rings)??me(e.rings)??0)/Math.max(1,me(r.ringsTotal)??me(e.ringsTotal)??15),d=(o+Ce(u)+Ce(f))/3,v=d>=.9?"S":d>=.75?"A":d>=.55?"B":"C";je(this.rr.rank,v),this._shareRank=v,this._shareFleet=Math.floor(me(r.fleetFlipped)??0),Ne(this.rr.rankBox,"rank-s",v==="S");const g=Ce((s-.1)/.18);pe(this.rr.rankBox,"opacity",g.toFixed(3)),pe(this.rr.rankBox,"transform",`scale(${(2.2-1.2*hs(g)).toFixed(3)}) rotate(${((1-g)*-12).toFixed(1)}deg)`),this.rr.cells.forEach((M,w)=>{const y=Ce((s-.04-w*.02)/.12);pe(M,"opacity",y.toFixed(3)),pe(M,"transform",`translateX(${((1-Xr(y))*-18).toFixed(1)}px)`)}),pe(this.rr.card,"--sweep",(-30+170*Xr(Ce((s-.04)/.24))).toFixed(1)+"%");let m=this._record||me(e.best)===void 0&&(this.best===null||l>this.best);sc&&(m=!0);const p=sc?l:Math.max(l,me(e.best)??this.best??0);if(je(this.rr.best,rc(m?c:p)),!sc&&!this.recordSaved&&s>.6&&(this.recordSaved=!0,m)){try{localStorage.setItem("rr.best",String(l))}catch{}try{Tn.sfx("record")}catch{}}Ne(this.rr.record,"on",m&&s>.2),je(this.rr.flag,""),Ne(this.rr.replay,"lit",s>.8?t/wi%1<.6:!0),pe(this.rr.record,"transform",`scale(${(1+.08*Math.pow(1-t/wi%1,3)).toFixed(3)}) rotate(-4deg)`)}shareText(){const t=rc(Math.max(0,Math.floor(this._shareScore||0))),e=Number.isFinite(this._shareFleet)&&this._shareFleet>0?this._shareFleet:0,i=this._shareRank?`, rank ${this._shareRank}`:"";return`I ${e?`flipped ${e} Teslas`:"flipped the entire Tesla fleet"}${i} in Roadster Rush — score ${t}. Beat me 👉 ${gp} #TeslaRoadster`}async share(){if(sc)return;const t=this.shareText(),e={title:"Roadster Rush",text:t,url:gp};try{if(navigator.share&&(!navigator.canShare||navigator.canShare(e)))return await navigator.share({title:e.title,text:t}),this._toast("SHARED")}catch(r){if(r&&r.name==="AbortError")return}const i="https://twitter.com/intent/tweet?text="+encodeURIComponent(t),s=document.createElement("a");s.href=i,s.target="_blank",s.rel="noopener noreferrer",document.body.append(s),s.click(),s.remove();try{navigator.clipboard&&(await navigator.clipboard.writeText(t),this._toast("COPIED · OPENING X"))}catch{}}_toast(t){this.toast&&(this.toast.textContent=t,this.toast.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toast.classList.remove("on"),1800))}preview(){this.mount();const t=sl.get("bg");if(t){const s=Je("img","rr-preview-bg");s.src=t,Object.assign(s.style,{position:"fixed",inset:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"0"}),document.body.prepend(s)}else document.body.style.background="radial-gradient(120% 70% at 50% 30%, #2a0f4a 0%, #0a0618 55%, #02010a 100%)";let e=null;const i=sl.get("gp")==="1"?_w(()=>Promise.resolve().then(()=>zM),void 0).then(s=>{e=s.createGameplay({autoplay:!0}),e.muted=!0}).catch(()=>{e=null}):Promise.resolve();window.__hudPreview={ready:i,seek:async s=>{await i,e&&e.seekTo?(e.seekTo(s,1/60),this.update(s,e.state)):this.update(s,{})}},this._previewMode=!0}}const co=typeof window<"u"&&window.__rrHud||new Nf;if(typeof window<"u"){window.__rrHud=co;const n=()=>co.mount();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):n()}Nf.prototype.setState=function(n,t){return this.update(n,t)};Nf.prototype.frame=function(n,t){return this.update(n,t)};const Ym=new URLSearchParams(location.search),Of=Ym.has("capture"),Fw=Ym.get("autoplay")==="1",zw=136*Bs,Km=134*Bs,rf=zw+20,Nw=3.9,Jh=1/60,Ow=document.getElementById("app")||document.body,Vn=new _y({antialias:!1,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:Of});Vn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Vn.setSize(window.innerWidth,window.innerHeight);Vn.toneMapping=cr;Vn.outputColorSpace=Mn;Vn.shadowMap.enabled=!1;Vn.info.autoReset=!1;Vn.domElement.id="gl";Ow.appendChild(Vn.domElement);const es=new dl,ns=new Mi(50,window.innerWidth/window.innerHeight,.1,6e3);ns.position.set(0,1.4,7);const ys=Eb({scene:es,renderer:Vn,camera:ns});if(!es.environment){const n=new ao(Vn),t=new dl;t.background=new Gt(1182244),es.environment=n.fromScene(t,.04).texture,n.dispose()}const $m={};function Bw(){const n=(c,h=1.2,o=0)=>{const u=Qs(ha(c*Bs)).pos;return[u.x+o,u.y+h,u.z,c]},t={intro:[0,1.2,0,12],launch:n(36),reveal:n(52),flip:[Sn.flip.xLand,8,Sn.flip.zLand,70],build:n(92),mega:n(110,8),outro:n(133)},e=new rn,i=(c,h,o,u,f,d,v,g,m)=>{const p=new ge(new pn(c,h),new We({color:new Gt(o).multiplyScalar(u),side:Ve,fog:!1}));return p.position.set(f,d,v),p.rotation.set(g,m,0),e.add(p),p};i(16,60,16777215,1.5,0,16,0,Math.PI/2,0),i(60,1.6,16722600,2.2,-22,2.2,0,0,Math.PI/2),i(60,1.6,2287359,2.2,22,2.2,0,0,-Math.PI/2),i(40,.6,14542591,2,0,.9,26,0,0);const s=new jp(256,{type:ts,generateMipmaps:!1}),r=new Kp(.3,4e3,s),a=new ao(Vn),l=ns.position.clone();es.add(e,r);try{for(const[c,[h,o,u,f]]of Object.entries(t))ns.position.set(h,o,u),ys.update(f*Bs,1/60),e.position.set(h,o,u),r.position.set(h,o,u),r.update(Vn,es),$m[c]=a.fromCubemap(s.texture).texture}catch(c){console.warn("[main] probes",c)}es.remove(e,r),e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),s.dispose(),a.dispose(),ns.position.copy(l),ys.update(0,1/60)}Bw();const Dr=qb({renderer:Vn,envMap:ys.envMap||es.environment});es.add(Dr.object);const Ms=gw({renderer:Vn,scene:es,camera:ns}),kn=$u({camera:ns,car:Dr,world:ys,fx:Ms,hud:co,audio:Tn,autoplay:Fw,driveCar:!0});ys.setCamera&&ys.setCamera(ns);let ji="attract",En=0,of=performance.now()/1e3,af=performance.now();const jo=[];function Qc(){kn.reset(),Ms.reset&&Ms.reset(),Dr.reset&&Dr.reset(),En=0}function vc(n,t){kn.update(t,n),En=n,ys.update(En,t),Ms.update(t,{...kn.fxInput(),gp:kn})}function Bf(){Dr.setEnvMap&&Dr.setEnvMap($m[kn.state.section]||null);const n=kn.hudState();co.update(En,n),Vn.info.reset(),Ms.render()}function Zo(){Qc(),ji="run",Tn.unlock();const n=()=>Tn.play(0);Tn.buffer?n():Tn.load().then(n,n)}function Mp(n){n&&n.type==="keydown"&&n.code!=="Space"&&n.code!=="Enter"||(ji==="attract"||ji==="done"&&En>Km+1.2)&&Zo()}Of||(window.addEventListener("pointerdown",Mp,{capture:!0}),window.addEventListener("keydown",Mp,{capture:!0}),kn.bindInput(window));co.onReplay(()=>Zo());function jm(n){requestAnimationFrame(jm);const t=Math.min(.1,Math.max(0,(n-af)/1e3));if(af=n,t>0&&(jo.push(t),jo.length>60&&jo.shift()),!(lf||ji==="seek")){if(ji==="attract"){let e=n/1e3-of;e>Nw&&(of=n/1e3,Qc(),e=0);const i=Math.max(1e-4,e-En);e>En?vc(e,i):(ys.update(En,t),Ms.update(t,{...kn.fxInput(),gp:kn}))}else if(ji==="run"||ji==="done"){let e=En+t;if(Tn.playing){const s=Tn.time()-e;e=s>.5?Tn.time():e+Math.max(-.5*t,Math.min(.5*t,s*.15))}if(e>=rf&&(e=rf),e>En){const s=e-En;if(s>.25){let r=En;for(;r<e-1e-9;){const a=Math.min(.1,e-r);r+=a,vc(r,a)}}else vc(e,s)}else ys.update(En,t);En>=Km&&ji==="run"&&(ji="done");const i=kn.state;try{Tn.tick(En,{...kn.hudState(),mph:i.mph,section:i.section,mode:i.mode,rcs:i.rcs,airborne:i.airborne,flap:i.flap,lastThrustT:i.lastFlapT})}catch{}}Bf()}}function kw(){const n=window.innerWidth,t=window.innerHeight;Vn.setSize(n,t),ns.aspect=n/t,ns.updateProjectionMatrix(),Ms.setSize&&Ms.setSize(n,t)}window.addEventListener("resize",kw);let lf=!1;function Zm(n){const t=Math.max(0,Math.min(rf,+n||0));lf=!0,ji="seek";try{Tn.stop(),Qc(),kn.seekTo(t,Jh),En=t,ys.update(En,Jh),Ms.update(Jh,{...kn.fxInput(),gp:kn}),Bf()}finally{lf=!1}return new Promise(e=>requestAnimationFrame(()=>e(En)))}const Jm={ready:!1,version:1,get t(){return En},time:()=>En,get mode(){return ji},seek:Zm,start(){return Zo(),!0},restart(){Zo()},replay(){Zo()},stats(){const n=Vn.info.render,t=jo.length?jo.reduce((e,i)=>e+i,0)/jo.length:0;return{fps:t>0?Math.round(10/t)/10:0,drawCalls:n.calls,triangles:n.triangles,t:En,mode:ji}},hudState:()=>kn.hudState(),get state(){return kn.state},get speed01(){return Math.min(1,(kn.state.v||0)/72)},scene:es,camera:ns,renderer:Vn,world:ys,car:Dr.object,carApi:Dr,fx:Ms,gp:kn,gameplay:kn,hud:co,audio:Tn};Zm.__hudWrapped=!0;window.__game=Jm;Qc();vc(.001,.001);{const n=[];es.traverse(t=>{t.visible||(n.push(t),t.visible=!0)});try{Vn.compile(es,ns)}catch{}try{Ms.render()}catch{}for(const t of n)t.visible=!1}Bf();Of||Tn.load();requestAnimationFrame(n=>{af=n,of=n/1e3,Jm.ready=!0,requestAnimationFrame(jm)});new URLSearchParams(location.search).has("hudpreview")&&co.preview();
