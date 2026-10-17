var ug=Object.defineProperty;var fg=(n,t,e)=>t in n?ug(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Jf=(n,t,e)=>fg(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="170",dg=0,Qf=1,pg=2,Tp=1,mg=2,Ys=3,Os=0,Qn=1,Xe=2,rr=0,Xo=1,An=2,t0=3,e0=4,Ep=5,Yr=100,gg=101,vg=102,xg=103,_g=104,yg=200,Ap=201,Mg=202,bg=203,ou=204,Tl=205,wg=206,Sg=207,Tg=208,Eg=209,Ag=210,Cg=211,Rg=212,Pg=213,Lg=214,au=0,cu=1,lu=2,ta=3,hu=4,uu=5,fu=6,du=7,Cp=0,Dg=1,Ig=2,or=0,Ug=1,Fg=2,Ng=3,zg=4,Og=5,Bg=6,kg=7,Rp=300,ea=301,na=302,pu=303,mu=304,Vl=306,gu=1e3,Jr=1001,vu=1002,Ai=1003,Hg=1004,yc=1005,ns=1006,rh=1007,Qr=1008,hr=1009,Pp=1010,Lp=1011,ac=1012,ff=1013,ao=1014,Fs=1015,is=1016,df=1017,pf=1018,ia=1020,Dp=35902,Ip=1021,Up=1022,Wi=1023,Fp=1024,Np=1025,qo=1026,sa=1027,mf=1028,gf=1029,zp=1030,vf=1031,xf=1033,cl=33776,ll=33777,hl=33778,ul=33779,xu=35840,_u=35841,yu=35842,Mu=35843,bu=36196,wu=37492,Su=37496,Tu=37808,Eu=37809,Au=37810,Cu=37811,Ru=37812,Pu=37813,Lu=37814,Du=37815,Iu=37816,Uu=37817,Fu=37818,Nu=37819,zu=37820,Ou=37821,fl=36492,Bu=36494,ku=36495,Op=36283,Hu=36284,Gu=36285,Vu=36286,Gg=3200,Vg=3201,Bp=0,Wg=1,Js="",Cn="srgb",ma="srgb-linear",Wl="linear",hn="srgb",vo=7680,n0=519,Xg=512,qg=513,Yg=514,kp=515,Kg=516,$g=517,jg=518,Zg=519,Wu=35044,Ns=35048,i0="300 es",nr=2e3,El=2001;class ga{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s0=1234567;const Ka=Math.PI/180,ra=180/Math.PI;function zs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]+"-"+ai[t&255]+ai[t>>8&255]+"-"+ai[t>>16&15|64]+ai[t>>24&255]+"-"+ai[e&63|128]+ai[e>>8&255]+"-"+ai[e>>16&255]+ai[e>>24&255]+ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]).toLowerCase()}function kn(n,t,e){return Math.max(t,Math.min(e,n))}function _f(n,t){return(n%t+t)%t}function Jg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qg(n,t,e){return n!==t?(e-n)/(t-n):0}function $a(n,t,e){return(1-e)*n+e*t}function t1(n,t,e,i){return $a(n,t,1-Math.exp(-e*i))}function e1(n,t=1){return t-Math.abs(_f(n,t*2)-t)}function n1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function i1(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function s1(n,t){return n+Math.floor(Math.random()*(t-n+1))}function r1(n,t){return n+Math.random()*(t-n)}function o1(n){return n*(.5-Math.random())}function a1(n){n!==void 0&&(s0=n);let t=s0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c1(n){return n*Ka}function l1(n){return n*ra}function h1(n){return(n&n-1)===0&&n!==0}function u1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function f1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function d1(n,t,e,i,s){const o=Math.cos,a=Math.sin,c=o(e/2),l=a(e/2),h=o((t+i)/2),r=a((t+i)/2),u=o((t-i)/2),f=a((t-i)/2),d=o((i-t)/2),v=a((i-t)/2);switch(s){case"XYX":n.set(c*r,l*u,l*f,c*h);break;case"YZY":n.set(l*f,c*r,l*u,c*h);break;case"ZXZ":n.set(l*u,l*f,c*r,c*h);break;case"XZX":n.set(c*r,l*v,l*d,c*h);break;case"YXY":n.set(l*d,c*r,l*v,c*h);break;case"ZYZ":n.set(l*v,l*d,c*r,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fi={DEG2RAD:Ka,RAD2DEG:ra,generateUUID:zs,clamp:kn,euclideanModulo:_f,mapLinear:Jg,inverseLerp:Qg,lerp:$a,damp:t1,pingpong:e1,smoothstep:n1,smootherstep:i1,randInt:s1,randFloat:r1,randFloatSpread:o1,seededRandom:a1,degToRad:c1,radToDeg:l1,isPowerOfTwo:h1,ceilPowerOfTwo:u1,floorPowerOfTwo:f1,setQuaternionFromProperEuler:d1,normalize:cn,denormalize:ms};class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*i-a*s+t.x,this.y=o*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(t,e,i,s,o,a,c,l,h){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,c,l,h)}set(t,e,i,s,o,a,c,l,h){const r=this.elements;return r[0]=t,r[1]=s,r[2]=c,r[3]=e,r[4]=o,r[5]=l,r[6]=i,r[7]=a,r[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],c=i[3],l=i[6],h=i[1],r=i[4],u=i[7],f=i[2],d=i[5],v=i[8],g=s[0],m=s[3],p=s[6],y=s[1],M=s[4],_=s[7],D=s[2],I=s[5],P=s[8];return o[0]=a*g+c*y+l*D,o[3]=a*m+c*M+l*I,o[6]=a*p+c*_+l*P,o[1]=h*g+r*y+u*D,o[4]=h*m+r*M+u*I,o[7]=h*p+r*_+u*P,o[2]=f*g+d*y+v*D,o[5]=f*m+d*M+v*I,o[8]=f*p+d*_+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8];return e*a*r-e*c*h-i*o*r+i*c*l+s*o*h-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8],u=r*a-c*h,f=c*l-r*o,d=h*o-a*l,v=e*u+i*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*h-r*i)*g,t[2]=(c*i-s*a)*g,t[3]=f*g,t[4]=(r*e-s*l)*g,t[5]=(s*o-c*e)*g,t[6]=d*g,t[7]=(i*l-h*e)*g,t[8]=(a*e-i*o)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,a,c){const l=Math.cos(o),h=Math.sin(o);return this.set(i*l,i*h,-i*(l*a+h*c)+a+t,-s*h,s*l,-s*(-h*a+l*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(oh.makeScale(t,e)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,e){return this.premultiply(oh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new Fe;function Hp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Al(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p1(){const n=Al("canvas");return n.style.display="block",n}const r0={};function ka(n){n in r0||(r0[n]=!0,console.warn(n))}function m1(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function g1(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function v1(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const je={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===hn&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===hn&&(n.r=Yo(n.r),n.g=Yo(n.g),n.b=Yo(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Js?Wl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const o0=[.64,.33,.3,.6,.15,.06],a0=[.2126,.7152,.0722],c0=[.3127,.329],l0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h0=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[ma]:{primaries:o0,whitePoint:c0,transfer:Wl,toXYZ:l0,fromXYZ:h0,luminanceCoefficients:a0,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:o0,whitePoint:c0,transfer:hn,toXYZ:l0,fromXYZ:h0,luminanceCoefficients:a0,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let xo;class x1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xo===void 0&&(xo=Al("canvas")),xo.width=t.width,xo.height=t.height;const i=xo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Al("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=ar(o[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ar(e[i]/255)*255):e[i]=ar(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _1=0;class Gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,c=s.length;a<c;a++)s[a].isDataTexture?o.push(ah(s[a].image)):o.push(ah(s[a]))}else o=ah(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?x1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y1=0;class vi extends ga{constructor(t=vi.DEFAULT_IMAGE,e=vi.DEFAULT_MAPPING,i=Jr,s=Jr,o=ns,a=Qr,c=Wi,l=hr,h=vi.DEFAULT_ANISOTROPY,r=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=zs(),this.name="",this.source=new Gp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=r,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gu:t.x=t.x-Math.floor(t.x);break;case Jr:t.x=t.x<0?0:1;break;case vu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gu:t.y=t.y-Math.floor(t.y);break;case Jr:t.y=t.y<0?0:1;break;case vu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vi.DEFAULT_IMAGE=null;vi.DEFAULT_MAPPING=Rp;vi.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,e=0,i=0,s=1){Qe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,h=l[0],r=l[4],u=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(r-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(r+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,_=(d+1)/2,D=(p+1)/2,I=(r+f)/4,P=(u+g)/4,F=(v+m)/4;return M>_&&M>D?M<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(M),s=I/i,o=P/i):_>D?_<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),i=I/s,o=F/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=P/o,s=F/o),this.set(i,s,o,e),this}let y=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-r)*(f-r));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-g)/y,this.z=(f-r)/y,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M1 extends ga{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ns,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new vi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends M1{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Vp extends vi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class b1 extends vi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,a,c){let l=i[s+0],h=i[s+1],r=i[s+2],u=i[s+3];const f=o[a+0],d=o[a+1],v=o[a+2],g=o[a+3];if(c===0){t[e+0]=l,t[e+1]=h,t[e+2]=r,t[e+3]=u;return}if(c===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==f||h!==d||r!==v){let m=1-c;const p=l*f+h*d+r*v+u*g,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),I=Math.atan2(D,p*y);m=Math.sin(m*I)/D,c=Math.sin(c*I)/D}const _=c*y;if(l=l*m+f*_,h=h*m+d*_,r=r*m+v*_,u=u*m+g*_,m===1-c){const D=1/Math.sqrt(l*l+h*h+r*r+u*u);l*=D,h*=D,r*=D,u*=D}}t[e]=l,t[e+1]=h,t[e+2]=r,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,a){const c=i[s],l=i[s+1],h=i[s+2],r=i[s+3],u=o[a],f=o[a+1],d=o[a+2],v=o[a+3];return t[e]=c*v+r*u+l*d-h*f,t[e+1]=l*v+r*f+h*u-c*d,t[e+2]=h*v+r*d+c*f-l*u,t[e+3]=r*v-c*u-l*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,a=t._order,c=Math.cos,l=Math.sin,h=c(i/2),r=c(s/2),u=c(o/2),f=l(i/2),d=l(s/2),v=l(o/2);switch(a){case"XYZ":this._x=f*r*u+h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u-f*d*v;break;case"YXZ":this._x=f*r*u+h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u+f*d*v;break;case"ZXY":this._x=f*r*u-h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u-f*d*v;break;case"ZYX":this._x=f*r*u-h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u+f*d*v;break;case"YZX":this._x=f*r*u+h*d*v,this._y=h*d*u+f*r*v,this._z=h*r*v-f*d*u,this._w=h*r*u-f*d*v;break;case"XZY":this._x=f*r*u-h*d*v,this._y=h*d*u-f*r*v,this._z=h*r*v+f*d*u,this._w=h*r*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],a=e[1],c=e[5],l=e[9],h=e[2],r=e[6],u=e[10],f=i+c+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(r-l)*d,this._y=(o-h)*d,this._z=(a-s)*d}else if(i>c&&i>u){const d=2*Math.sqrt(1+i-c-u);this._w=(r-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(o+h)/d}else if(c>u){const d=2*Math.sqrt(1+c-i-u);this._w=(o-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+r)/d}else{const d=2*Math.sqrt(1+u-i-c);this._w=(a-s)/d,this._x=(o+h)/d,this._y=(l+r)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,a=t._w,c=e._x,l=e._y,h=e._z,r=e._w;return this._x=i*r+a*c+s*h-o*l,this._y=s*r+a*l+o*c-i*h,this._z=o*r+a*h+i*l-s*c,this._w=a*r-i*c-s*l-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,a=this._w;let c=a*t._w+i*t._x+s*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const l=1-c*c;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const h=Math.sqrt(l),r=Math.atan2(h,c),u=Math.sin((1-e)*r)/h,f=Math.sin(e*r)/h;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(u0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(u0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,a=t.y,c=t.z,l=t.w,h=2*(a*s-c*i),r=2*(c*e-o*s),u=2*(o*i-a*e);return this.x=e+l*h+a*u-c*r,this.y=i+l*r+c*h-o*u,this.z=s+l*u+o*r-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,a=e.x,c=e.y,l=e.z;return this.x=s*l-o*c,this.y=o*a-i*l,this.z=i*c-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new L,u0=new ri;class uo{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(os.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(os.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=os.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,os):os.fromBufferAttribute(o,a),os.applyMatrix4(t.matrixWorld),this.expandByPoint(os);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mc.copy(i.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,os),os.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wa),bc.subVectors(this.max,wa),_o.subVectors(t.a,wa),yo.subVectors(t.b,wa),Mo.subVectors(t.c,wa),pr.subVectors(yo,_o),mr.subVectors(Mo,yo),Ur.subVectors(_o,Mo);let e=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Ur.z,Ur.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Ur.z,0,-Ur.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Ur.y,Ur.x,0];return!lh(e,_o,yo,Mo,bc)||(e=[1,0,0,0,1,0,0,0,1],!lh(e,_o,yo,Mo,bc))?!1:(wc.crossVectors(pr,mr),e=[wc.x,wc.y,wc.z],lh(e,_o,yo,Mo,bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,os).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(os).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hs=[new L,new L,new L,new L,new L,new L,new L,new L],os=new L,Mc=new uo,_o=new L,yo=new L,Mo=new L,pr=new L,mr=new L,Ur=new L,wa=new L,bc=new L,wc=new L,Fr=new L;function lh(n,t,e,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){Fr.fromArray(n,o);const c=s.x*Math.abs(Fr.x)+s.y*Math.abs(Fr.y)+s.z*Math.abs(Fr.z),l=t.dot(Fr),h=e.dot(Fr),r=i.dot(Fr);if(Math.max(-Math.max(l,h,r),Math.min(l,h,r))>c)return!1}return!0}const w1=new uo,Sa=new L,hh=new L;class va{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):w1.setFromPoints(t).getCenter(i);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sa.subVectors(t,this.center);const e=Sa.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sa.copy(t.center).add(hh)),this.expandByPoint(Sa.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gs=new L,uh=new L,Sc=new L,gr=new L,fh=new L,Tc=new L,dh=new L;class Wp{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gs.copy(this.origin).addScaledVector(this.direction,e),Gs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){uh.copy(t).add(e).multiplyScalar(.5),Sc.copy(e).sub(t).normalize(),gr.copy(this.origin).sub(uh);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Sc),c=gr.dot(this.direction),l=-gr.dot(Sc),h=gr.lengthSq(),r=Math.abs(1-a*a);let u,f,d,v;if(r>0)if(u=a*l-c,f=a*c-l,v=o*r,u>=0)if(f>=-v)if(f<=v){const g=1/r;u*=g,f*=g,d=u*(u+a*f+2*c)+f*(a*u+f+2*l)+h}else f=o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;else f=-o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;else f<=-v?(u=Math.max(0,-(-a*o+c)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+h):f<=v?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+h):(u=Math.max(0,-(a*o+c)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+h);else f=a>0?-o:o,u=Math.max(0,-(a*f+c)),d=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uh).addScaledVector(Sc,f),d}intersectSphere(t,e){Gs.subVectors(t.center,this.origin);const i=Gs.dot(this.direction),s=Gs.dot(Gs)-i*i,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,a,c,l;const h=1/this.direction.x,r=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),r>=0?(o=(t.min.y-f.y)*r,a=(t.max.y-f.y)*r):(o=(t.max.y-f.y)*r,a=(t.min.y-f.y)*r),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),u>=0?(c=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(c=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||c>s)||((c>i||i!==i)&&(i=c),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gs)!==null}intersectTriangle(t,e,i,s,o){fh.subVectors(e,t),Tc.subVectors(i,t),dh.crossVectors(fh,Tc);let a=this.direction.dot(dh),c;if(a>0){if(s)return null;c=1}else if(a<0)c=-1,a=-a;else return null;gr.subVectors(this.origin,t);const l=c*this.direction.dot(Tc.crossVectors(gr,Tc));if(l<0)return null;const h=c*this.direction.dot(fh.cross(gr));if(h<0||l+h>a)return null;const r=-c*gr.dot(dh);return r<0?null:this.at(r/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,i,s,o,a,c,l,h,r,u,f,d,v,g,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,c,l,h,r,u,f,d,v,g,m)}set(t,e,i,s,o,a,c,l,h,r,u,f,d,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=a,p[9]=c,p[13]=l,p[2]=h,p[6]=r,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/bo.setFromMatrixColumn(t,0).length(),o=1/bo.setFromMatrixColumn(t,1).length(),a=1/bo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(s),h=Math.sin(s),r=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=a*r,d=a*u,v=c*r,g=c*u;e[0]=l*r,e[4]=-l*u,e[8]=h,e[1]=d+v*h,e[5]=f-g*h,e[9]=-c*l,e[2]=g-f*h,e[6]=v+d*h,e[10]=a*l}else if(t.order==="YXZ"){const f=l*r,d=l*u,v=h*r,g=h*u;e[0]=f+g*c,e[4]=v*c-d,e[8]=a*h,e[1]=a*u,e[5]=a*r,e[9]=-c,e[2]=d*c-v,e[6]=g+f*c,e[10]=a*l}else if(t.order==="ZXY"){const f=l*r,d=l*u,v=h*r,g=h*u;e[0]=f-g*c,e[4]=-a*u,e[8]=v+d*c,e[1]=d+v*c,e[5]=a*r,e[9]=g-f*c,e[2]=-a*h,e[6]=c,e[10]=a*l}else if(t.order==="ZYX"){const f=a*r,d=a*u,v=c*r,g=c*u;e[0]=l*r,e[4]=v*h-d,e[8]=f*h+g,e[1]=l*u,e[5]=g*h+f,e[9]=d*h-v,e[2]=-h,e[6]=c*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*h,v=c*l,g=c*h;e[0]=l*r,e[4]=g-f*u,e[8]=v*u+d,e[1]=u,e[5]=a*r,e[9]=-c*r,e[2]=-h*r,e[6]=d*u+v,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,d=a*h,v=c*l,g=c*h;e[0]=l*r,e[4]=-u,e[8]=h*r,e[1]=f*u+g,e[5]=a*r,e[9]=d*u-v,e[2]=v*u-d,e[6]=c*r,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(S1,t,T1)}lookAt(t,e,i){const s=this.elements;return Hi.subVectors(t,e),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),vr.crossVectors(i,Hi),vr.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),vr.crossVectors(i,Hi)),vr.normalize(),Ec.crossVectors(Hi,vr),s[0]=vr.x,s[4]=Ec.x,s[8]=Hi.x,s[1]=vr.y,s[5]=Ec.y,s[9]=Hi.y,s[2]=vr.z,s[6]=Ec.z,s[10]=Hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],c=i[4],l=i[8],h=i[12],r=i[1],u=i[5],f=i[9],d=i[13],v=i[2],g=i[6],m=i[10],p=i[14],y=i[3],M=i[7],_=i[11],D=i[15],I=s[0],P=s[4],F=s[8],R=s[12],x=s[1],z=s[5],G=s[9],st=s[13],vt=s[2],Rt=s[6],mt=s[10],It=s[14],nt=s[3],kt=s[7],se=s[11],fe=s[15];return o[0]=a*I+c*x+l*vt+h*nt,o[4]=a*P+c*z+l*Rt+h*kt,o[8]=a*F+c*G+l*mt+h*se,o[12]=a*R+c*st+l*It+h*fe,o[1]=r*I+u*x+f*vt+d*nt,o[5]=r*P+u*z+f*Rt+d*kt,o[9]=r*F+u*G+f*mt+d*se,o[13]=r*R+u*st+f*It+d*fe,o[2]=v*I+g*x+m*vt+p*nt,o[6]=v*P+g*z+m*Rt+p*kt,o[10]=v*F+g*G+m*mt+p*se,o[14]=v*R+g*st+m*It+p*fe,o[3]=y*I+M*x+_*vt+D*nt,o[7]=y*P+M*z+_*Rt+D*kt,o[11]=y*F+M*G+_*mt+D*se,o[15]=y*R+M*st+_*It+D*fe,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],a=t[1],c=t[5],l=t[9],h=t[13],r=t[2],u=t[6],f=t[10],d=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+o*l*u-s*h*u-o*c*f+i*h*f+s*c*d-i*l*d)+g*(+e*l*d-e*h*f+o*a*f-s*a*d+s*h*r-o*l*r)+m*(+e*h*u-e*c*d-o*a*u+i*a*d+o*c*r-i*h*r)+p*(-s*c*r-e*l*u+e*c*f+s*a*u-i*a*f+i*l*r)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],c=t[5],l=t[6],h=t[7],r=t[8],u=t[9],f=t[10],d=t[11],v=t[12],g=t[13],m=t[14],p=t[15],y=u*m*h-g*f*h+g*l*d-c*m*d-u*l*p+c*f*p,M=v*f*h-r*m*h-v*l*d+a*m*d+r*l*p-a*f*p,_=r*g*h-v*u*h+v*c*d-a*g*d-r*c*p+a*u*p,D=v*u*l-r*g*l-v*c*f+a*g*f+r*c*m-a*u*m,I=e*y+i*M+s*_+o*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=y*P,t[1]=(g*f*o-u*m*o-g*s*d+i*m*d+u*s*p-i*f*p)*P,t[2]=(c*m*o-g*l*o+g*s*h-i*m*h-c*s*p+i*l*p)*P,t[3]=(u*l*o-c*f*o-u*s*h+i*f*h+c*s*d-i*l*d)*P,t[4]=M*P,t[5]=(r*m*o-v*f*o+v*s*d-e*m*d-r*s*p+e*f*p)*P,t[6]=(v*l*o-a*m*o-v*s*h+e*m*h+a*s*p-e*l*p)*P,t[7]=(a*f*o-r*l*o+r*s*h-e*f*h-a*s*d+e*l*d)*P,t[8]=_*P,t[9]=(v*u*o-r*g*o-v*i*d+e*g*d+r*i*p-e*u*p)*P,t[10]=(a*g*o-v*c*o+v*i*h-e*g*h-a*i*p+e*c*p)*P,t[11]=(r*c*o-a*u*o-r*i*h+e*u*h+a*i*d-e*c*d)*P,t[12]=D*P,t[13]=(r*g*s-v*u*s+v*i*f-e*g*f-r*i*m+e*u*m)*P,t[14]=(v*c*s-a*g*s-v*i*l+e*g*l+a*i*m-e*c*m)*P,t[15]=(a*u*s-r*c*s+r*i*l-e*u*l-a*i*f+e*c*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,a=t.x,c=t.y,l=t.z,h=o*a,r=o*c;return this.set(h*a+i,h*c-s*l,h*l+s*c,0,h*c+s*l,r*c+i,r*l-s*a,0,h*l-s*c,r*l+s*a,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,a){return this.set(1,i,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,a=e._y,c=e._z,l=e._w,h=o+o,r=a+a,u=c+c,f=o*h,d=o*r,v=o*u,g=a*r,m=a*u,p=c*u,y=l*h,M=l*r,_=l*u,D=i.x,I=i.y,P=i.z;return s[0]=(1-(g+p))*D,s[1]=(d+_)*D,s[2]=(v-M)*D,s[3]=0,s[4]=(d-_)*I,s[5]=(1-(f+p))*I,s[6]=(m+y)*I,s[7]=0,s[8]=(v+M)*P,s[9]=(m-y)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=bo.set(s[0],s[1],s[2]).length();const a=bo.set(s[4],s[5],s[6]).length(),c=bo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],as.copy(this);const h=1/o,r=1/a,u=1/c;return as.elements[0]*=h,as.elements[1]*=h,as.elements[2]*=h,as.elements[4]*=r,as.elements[5]*=r,as.elements[6]*=r,as.elements[8]*=u,as.elements[9]*=u,as.elements[10]*=u,e.setFromRotationMatrix(as),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,o,a,c=nr){const l=this.elements,h=2*o/(e-t),r=2*o/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,v;if(c===nr)d=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(c===El)d=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=r,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,a,c=nr){const l=this.elements,h=1/(e-t),r=1/(i-s),u=1/(a-o),f=(e+t)*h,d=(i+s)*r;let v,g;if(c===nr)v=(a+o)*u,g=-2*u;else if(c===El)v=o*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*r,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bo=new L,as=new Ie,S1=new L(0,0,0),T1=new L(1,1,1),vr=new L,Ec=new L,Hi=new L,f0=new Ie,d0=new ri;class Fi{constructor(t=0,e=0,i=0,s=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],r=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(kn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-r,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(kn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-kn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-r,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-r,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return f0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(f0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return d0.setFromEuler(this),this.setFromQuaternion(d0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let E1=0;const p0=new L,wo=new ri,Vs=new Ie,Ac=new L,Ta=new L,A1=new L,C1=new ri,m0=new L(1,0,0),g0=new L(0,1,0),v0=new L(0,0,1),x0={type:"added"},R1={type:"removed"},So={type:"childadded",child:null},ph={type:"childremoved",child:null};class vn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new L,e=new Fi,i=new ri,s=new L(1,1,1);function o(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wo.setFromAxisAngle(t,e),this.quaternion.multiply(wo),this}rotateOnWorldAxis(t,e){return wo.setFromAxisAngle(t,e),this.quaternion.premultiply(wo),this}rotateX(t){return this.rotateOnAxis(m0,t)}rotateY(t){return this.rotateOnAxis(g0,t)}rotateZ(t){return this.rotateOnAxis(v0,t)}translateOnAxis(t,e){return p0.copy(t).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(m0,t)}translateY(t){return this.translateOnAxis(g0,t)}translateZ(t){return this.translateOnAxis(v0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vs.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ac.copy(t):Ac.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vs.lookAt(Ta,Ac,this.up):Vs.lookAt(Ac,Ta,this.up),this.quaternion.setFromRotationMatrix(Vs),s&&(Vs.extractRotation(s.matrixWorld),wo.setFromRotationMatrix(Vs),this.quaternion.premultiply(wo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(x0),So.child=t,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R1),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(x0),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,t,A1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,C1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,r=l.length;h<r;h++){const u=l[h];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];s.animations.push(o(t.animations,l))}}if(e){const c=a(t.geometries),l=a(t.materials),h=a(t.textures),r=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),v=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),r.length>0&&(i.images=r),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(c){const l=[];for(const h in c){const r=c[h];delete r.metadata,l.push(r)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new L(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cs=new L,Ws=new L,mh=new L,Xs=new L,To=new L,Eo=new L,_0=new L,gh=new L,vh=new L,xh=new L,_h=new Qe,yh=new Qe,Mh=new Qe;class ts{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),cs.subVectors(t,e),s.cross(cs);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){cs.subVectors(s,e),Ws.subVectors(i,e),mh.subVectors(t,e);const a=cs.dot(cs),c=cs.dot(Ws),l=cs.dot(mh),h=Ws.dot(Ws),r=Ws.dot(mh),u=a*h-c*c;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(h*l-c*r)*f,v=(a*r-c*l)*f;return o.set(1-d-v,v,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xs)===null?!1:Xs.x>=0&&Xs.y>=0&&Xs.x+Xs.y<=1}static getInterpolation(t,e,i,s,o,a,c,l){return this.getBarycoord(t,e,i,s,Xs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Xs.x),l.addScaledVector(a,Xs.y),l.addScaledVector(c,Xs.z),l)}static getInterpolatedAttribute(t,e,i,s,o,a){return _h.setScalar(0),yh.setScalar(0),Mh.setScalar(0),_h.fromBufferAttribute(t,e),yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_h,o.x),a.addScaledVector(yh,o.y),a.addScaledVector(Mh,o.z),a}static isFrontFacing(t,e,i,s){return cs.subVectors(i,e),Ws.subVectors(t,e),cs.cross(Ws).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cs.subVectors(this.c,this.b),Ws.subVectors(this.a,this.b),cs.cross(Ws).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ts.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ts.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ts.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ts.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ts.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let a,c;To.subVectors(s,i),Eo.subVectors(o,i),gh.subVectors(t,i);const l=To.dot(gh),h=Eo.dot(gh);if(l<=0&&h<=0)return e.copy(i);vh.subVectors(t,s);const r=To.dot(vh),u=Eo.dot(vh);if(r>=0&&u<=r)return e.copy(s);const f=l*u-r*h;if(f<=0&&l>=0&&r<=0)return a=l/(l-r),e.copy(i).addScaledVector(To,a);xh.subVectors(t,o);const d=To.dot(xh),v=Eo.dot(xh);if(v>=0&&d<=v)return e.copy(o);const g=d*h-l*v;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),e.copy(i).addScaledVector(Eo,c);const m=r*v-d*u;if(m<=0&&u-r>=0&&d-v>=0)return _0.subVectors(o,s),c=(u-r)/(u-r+(d-v)),e.copy(s).addScaledVector(_0,c);const p=1/(m+g+f);return a=g*p,c=f*p,e.copy(i).addScaledVector(To,a).addScaledVector(Eo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function bh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=je.workingColorSpace){return this.r=t,this.g=e,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=je.workingColorSpace){if(t=_f(t,1),e=kn(e,0,1),i=kn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,a=2*i-o;this.r=bh(a,o,t+1/3),this.g=bh(a,o,t),this.b=bh(a,o,t-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(t,e=Cn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],c=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const i=qp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=Yo(t.r),this.g=Yo(t.g),this.b=Yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return je.fromWorkingColorSpace(ci.copy(this),t),Math.round(kn(ci.r*255,0,255))*65536+Math.round(kn(ci.g*255,0,255))*256+Math.round(kn(ci.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=je.workingColorSpace){je.fromWorkingColorSpace(ci.copy(this),e);const i=ci.r,s=ci.g,o=ci.b,a=Math.max(i,s,o),c=Math.min(i,s,o);let l,h;const r=(c+a)/2;if(c===a)l=0,h=0;else{const u=a-c;switch(h=r<=.5?u/(a+c):u/(2-a-c),a){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=r,t}getRGB(t,e=je.workingColorSpace){return je.fromWorkingColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=Cn){je.fromWorkingColorSpace(ci.copy(this),t);const e=ci.r,i=ci.g,s=ci.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+e,xr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xr),t.getHSL(Cc);const i=$a(xr.h,Cc.h,e),s=$a(xr.s,Cc.s,e),o=$a(xr.l,Cc.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ci=new Vt;Vt.NAMES=qp;let P1=0;class fo extends ga{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=zs(),this.name="",this.blending=Xo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=Tl,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ou&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ke extends fo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Un=new L,Rc=new Kt;class xn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=Fs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rc.fromBufferAttribute(this,e),Rc.applyMatrix3(t),this.setXY(e,Rc.x,Rc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix3(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyMatrix4(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.applyNormalMatrix(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Un.fromBufferAttribute(this,e),Un.transformDirection(t),this.setXYZ(e,Un.x,Un.y,Un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),o=cn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wu&&(t.usage=this.usage),t}}class Yp extends xn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kp extends xn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends xn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let L1=0;const Yi=new Ie,wh=new vn,Ao=new L,Gi=new uo,Ea=new uo,$n=new L;class Ze extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?Kp:Yp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Fe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yi.makeRotationFromQuaternion(t),this.applyMatrix4(Yi),this}rotateX(t){return Yi.makeRotationX(t),this.applyMatrix4(Yi),this}rotateY(t){return Yi.makeRotationY(t),this.applyMatrix4(Yi),this}rotateZ(t){return Yi.makeRotationZ(t),this.applyMatrix4(Yi),this}translate(t,e,i){return Yi.makeTranslation(t,e,i),this.applyMatrix4(Yi),this}scale(t,e,i){return Yi.makeScale(t,e,i),this.applyMatrix4(Yi),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?($n.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint($n),$n.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint($n)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Gi.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const c=e[o];Ea.setFromBufferAttribute(c),this.morphTargetsRelative?($n.addVectors(Gi.min,Ea.min),Gi.expandByPoint($n),$n.addVectors(Gi.max,Ea.max),Gi.expandByPoint($n)):(Gi.expandByPoint(Ea.min),Gi.expandByPoint(Ea.max))}Gi.getCenter(i);let s=0;for(let o=0,a=t.count;o<a;o++)$n.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared($n));if(e)for(let o=0,a=e.length;o<a;o++){const c=e[o],l=this.morphTargetsRelative;for(let h=0,r=c.count;h<r;h++)$n.fromBufferAttribute(c,h),l&&(Ao.fromBufferAttribute(t,h),$n.add(Ao)),s=Math.max(s,i.distanceToSquared($n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let F=0;F<i.count;F++)c[F]=new L,l[F]=new L;const h=new L,r=new L,u=new L,f=new Kt,d=new Kt,v=new Kt,g=new L,m=new L;function p(F,R,x){h.fromBufferAttribute(i,F),r.fromBufferAttribute(i,R),u.fromBufferAttribute(i,x),f.fromBufferAttribute(o,F),d.fromBufferAttribute(o,R),v.fromBufferAttribute(o,x),r.sub(h),u.sub(h),d.sub(f),v.sub(f);const z=1/(d.x*v.y-v.x*d.y);isFinite(z)&&(g.copy(r).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(z),m.copy(u).multiplyScalar(d.x).addScaledVector(r,-v.x).multiplyScalar(z),c[F].add(g),c[R].add(g),c[x].add(g),l[F].add(m),l[R].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,R=y.length;F<R;++F){const x=y[F],z=x.start,G=x.count;for(let st=z,vt=z+G;st<vt;st+=3)p(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const M=new L,_=new L,D=new L,I=new L;function P(F){D.fromBufferAttribute(s,F),I.copy(D);const R=c[F];M.copy(R),M.sub(D.multiplyScalar(D.dot(R))).normalize(),_.crossVectors(I,R);const z=_.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,z)}for(let F=0,R=y.length;F<R;++F){const x=y[F],z=x.start,G=x.count;for(let st=z,vt=z+G;st<vt;st+=3)P(t.getX(st+0)),P(t.getX(st+1)),P(t.getX(st+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,r=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,m),c.add(r),l.add(r),h.add(r),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),i.setXYZ(f+0,r.x,r.y,r.z),i.setXYZ(f+1,r.x,r.y,r.z),i.setXYZ(f+2,r.x,r.y,r.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$n.fromBufferAttribute(t,e),$n.normalize(),t.setXYZ(e,$n.x,$n.y,$n.z)}toNonIndexed(){function t(c,l){const h=c.array,r=c.itemSize,u=c.normalized,f=new h.constructor(l.length*r);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){c.isInterleavedBufferAttribute?d=l[g]*c.data.stride+c.offset:d=l[g]*r;for(let p=0;p<r;p++)f[v++]=h[d++]}return new xn(f,r,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,i=this.index.array,s=this.attributes;for(const c in s){const l=s[c],h=t(l,i);e.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const l=[],h=o[c];for(let r=0,u=h.length;r<u;r++){const f=h[r],d=t(f,i);l.push(d)}e.morphAttributes[c]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],r=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];r.push(d.toJSON(t.data))}r.length>0&&(s[l]=r,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const r=s[h];this.setAttribute(h,r.clone(e))}const o=t.morphAttributes;for(const h in o){const r=[],u=o[h];for(let f=0,d=u.length;f<d;f++)r.push(u[f].clone(e));this.morphAttributes[h]=r}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,r=a.length;h<r;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y0=new Ie,Nr=new Wp,Pc=new va,M0=new L,Lc=new L,Dc=new L,Ic=new L,Sh=new L,Uc=new L,b0=new L,Fc=new L;class ye extends vn{constructor(t=new Ze,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const c=this.morphTargetInfluences;if(o&&c){Uc.set(0,0,0);for(let l=0,h=o.length;l<h;l++){const r=c[l],u=o[l];r!==0&&(Sh.fromBufferAttribute(u,t),a?Uc.addScaledVector(Sh,r):Uc.addScaledVector(Sh.sub(e),r))}e.add(Uc)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(o),Nr.copy(t.ray).recast(t.near),!(Pc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Pc,M0)===null||Nr.origin.distanceToSquared(M0)>(t.far-t.near)**2))&&(y0.copy(o).invert(),Nr.copy(t.ray).applyMatrix4(y0),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,i){let s;const o=this.geometry,a=this.material,c=o.index,l=o.attributes.position,h=o.attributes.uv,r=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(c!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,D=M;_<D;_+=3){const I=c.getX(_),P=c.getX(_+1),F=c.getX(_+2);s=Nc(this,p,t,i,h,r,u,I,P,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const y=c.getX(m),M=c.getX(m+1),_=c.getX(m+2);s=Nc(this,a,t,i,h,r,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,D=M;_<D;_+=3){const I=_,P=_+1,F=_+2;s=Nc(this,p,t,i,h,r,u,I,P,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const y=m,M=m+1,_=m+2;s=Nc(this,a,t,i,h,r,u,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function D1(n,t,e,i,s,o,a,c){let l;if(t.side===Qn?l=i.intersectTriangle(a,o,s,!0,c):l=i.intersectTriangle(s,o,a,t.side===Os,c),l===null)return null;Fc.copy(c),Fc.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Fc);return h<e.near||h>e.far?null:{distance:h,point:Fc.clone(),object:n}}function Nc(n,t,e,i,s,o,a,c,l,h){n.getVertexPosition(c,Lc),n.getVertexPosition(l,Dc),n.getVertexPosition(h,Ic);const r=D1(n,t,e,i,Lc,Dc,Ic,b0);if(r){const u=new L;ts.getBarycoord(b0,Lc,Dc,Ic,u),s&&(r.uv=ts.getInterpolatedAttribute(s,c,l,h,u,new Kt)),o&&(r.uv1=ts.getInterpolatedAttribute(o,c,l,h,u,new Kt)),a&&(r.normal=ts.getInterpolatedAttribute(a,c,l,h,u,new L),r.normal.dot(i.direction)>0&&r.normal.multiplyScalar(-1));const f={a:c,b:l,c:h,normal:new L,materialIndex:0};ts.getNormal(Lc,Dc,Ic,f.normal),r.face=f,r.barycoord=u}return r}class rn extends Ze{constructor(t=1,e=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const c=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],h=[],r=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,i,e,t,a,o,0),v("z","y","x",1,-1,i,e,-t,a,o,1),v("x","z","y",1,1,t,i,e,s,a,2),v("x","z","y",1,-1,t,i,-e,s,a,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(r,3)),this.setAttribute("uv",new Me(u,2));function v(g,m,p,y,M,_,D,I,P,F,R){const x=_/P,z=D/F,G=_/2,st=D/2,vt=I/2,Rt=P+1,mt=F+1;let It=0,nt=0;const kt=new L;for(let se=0;se<mt;se++){const fe=se*z-st;for(let le=0;le<Rt;le++){const ut=le*x-G;kt[g]=ut*y,kt[m]=fe*M,kt[p]=vt,h.push(kt.x,kt.y,kt.z),kt[g]=0,kt[m]=0,kt[p]=I>0?1:-1,r.push(kt.x,kt.y,kt.z),u.push(le/P),u.push(1-se/F),It+=1}}for(let se=0;se<F;se++)for(let fe=0;fe<P;fe++){const le=f+fe+Rt*se,ut=f+fe+Rt*(se+1),$=f+(fe+1)+Rt*(se+1),X=f+(fe+1)+Rt*se;l.push(le,ut,X),l.push(ut,$,X),nt+=6}c.addGroup(d,nt,R),d+=nt,f+=It}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function oa(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Si(n){const t={};for(let e=0;e<n.length;e++){const i=oa(n[e]);for(const s in i)t[s]=i[s]}return t}function I1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $p(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:je.workingColorSpace}const ys={clone:oa,merge:Si};var U1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $e extends fo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U1,this.fragmentShader=F1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oa(t.uniforms),this.uniformsGroups=I1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=nr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new L,w0=new Kt,S0=new Kt;class gi extends jp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,e){return this.getViewBounds(t,w0,S0),e.subVectors(S0,w0)}setViewOffset(t,e,i,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Co=-90,Ro=1;class Zp extends vn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(Co,Ro,t,e);s.layers=this.layers,this.add(s);const o=new gi(Co,Ro,t,e);o.layers=this.layers,this.add(o);const a=new gi(Co,Ro,t,e);a.layers=this.layers,this.add(a);const c=new gi(Co,Ro,t,e);c.layers=this.layers,this.add(c);const l=new gi(Co,Ro,t,e);l.layers=this.layers,this.add(l);const h=new gi(Co,Ro,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,a,c,l]=e;for(const h of e)this.remove(h);if(t===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,l,h,r]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,c),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,r),t.setRenderTarget(u,f,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Jp extends vi{constructor(t,e,i,s,o,a,c,l,h,r){t=t!==void 0?t:[],e=e!==void 0?e:ea,super(t,e,i,s,o,a,c,l,h,r),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qp extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Jp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ns}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),o=new $e({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qn,blending:rr});o.uniforms.tEquirect.value=e;const a=new ye(s,o),c=e.minFilter;return e.minFilter===Qr&&(e.minFilter=ns),new Zp(1,10,this).update(t,a),e.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(o)}}const Th=new L,N1=new L,z1=new Fe;class wr{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Th.subVectors(i,e).cross(N1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Th),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||z1.getNormalMatrix(t),s=this.coplanarPoint(Th).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new va,zc=new L;class yf{constructor(t=new wr,e=new wr,i=new wr,s=new wr,o=new wr,a=new wr){this.planes=[t,e,i,s,o,a]}set(t,e,i,s,o,a){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=nr){const i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],r=s[5],u=s[6],f=s[7],d=s[8],v=s[9],g=s[10],m=s[11],p=s[12],y=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-o,f-h,m-d,_-p).normalize(),i[1].setComponents(l+o,f+h,m+d,_+p).normalize(),i[2].setComponents(l+a,f+r,m+v,_+y).normalize(),i[3].setComponents(l-a,f-r,m-v,_-y).normalize(),i[4].setComponents(l-c,f-u,m-g,_-M).normalize(),e===nr)i[5].setComponents(l+c,f+u,m+g,_+M).normalize();else if(e===El)i[5].setComponents(c,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(t){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(zc.x=s.normal.x>0?t.max.x:t.min.x,zc.y=s.normal.y>0?t.max.y:t.min.y,zc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tm(){let n=null,t=!1,e=null,i=null;function s(o,a){e(o,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function O1(n){const t=new WeakMap;function e(c,l){const h=c.array,r=c.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,r),c.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:u}}function i(c,l,h){const r=l.array,u=l.updateRanges;if(n.bindBuffer(h,c),u.length===0)n.bufferSubData(h,0,r);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],g=u[d];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const g=u[d];n.bufferSubData(h,g.start*r.BYTES_PER_ELEMENT,r,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=t.get(c);l&&(n.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const r=t.get(c);(!r||r.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=t.get(c);if(h===void 0)t.set(c,e(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,l),h.version=c.version}}return{get:s,remove:o,update:a}}class Mn extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,a=e/2,c=Math.floor(i),l=Math.floor(s),h=c+1,r=l+1,u=t/c,f=e/l,d=[],v=[],g=[],m=[];for(let p=0;p<r;p++){const y=p*f-a;for(let M=0;M<h;M++){const _=M*u-o;v.push(_,-y,0),g.push(0,0,1),m.push(M/c),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<c;y++){const M=y+h*p,_=y+h*(p+1),D=y+1+h*(p+1),I=y+1+h*p;d.push(M,_,I),d.push(_,D,I)}this.setIndex(d),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var B1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k1=`#ifdef USE_ALPHAHASH
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
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
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
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
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
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J1=`#ifdef USE_IRIDESCENCE
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
#endif`,Q1=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hv=`vec3 transformedNormal = objectNormal;
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
#endif`,uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vv=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nv=`PhysicalMaterial material;
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
#endif`,zv=`struct PhysicalMaterial {
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
}`,Ov=`
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
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
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
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
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,Xx=`#if DEPTH_PACKING == 3200
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
}`,qx=`#define DISTANCE
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
}`,Yx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 diffuse;
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
}`,t2=`#define LAMBERT
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
}`,e2=`#define LAMBERT
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
}`,n2=`#define MATCAP
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
}`,i2=`#define MATCAP
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
}`,s2=`#define NORMAL
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
}`,r2=`#define NORMAL
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
}`,o2=`#define PHONG
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
}`,a2=`#define PHONG
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
}`,c2=`#define STANDARD
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
}`,l2=`#define STANDARD
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
}`,h2=`#define TOON
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
}`,u2=`#define TOON
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
}`,f2=`uniform float size;
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#include <common>
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
}`,m2=`uniform vec3 color;
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
}`,g2=`uniform float rotation;
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
}`,v2=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:B1,alphahash_pars_fragment:k1,alphamap_fragment:H1,alphamap_pars_fragment:G1,alphatest_fragment:V1,alphatest_pars_fragment:W1,aomap_fragment:X1,aomap_pars_fragment:q1,batching_pars_vertex:Y1,batching_vertex:K1,begin_vertex:$1,beginnormal_vertex:j1,bsdfs:Z1,iridescence_fragment:J1,bumpmap_pars_fragment:Q1,clipping_planes_fragment:tv,clipping_planes_pars_fragment:ev,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:sv,color_pars_fragment:rv,color_pars_vertex:ov,color_vertex:av,common:cv,cube_uv_reflection_fragment:lv,defaultnormal_vertex:hv,displacementmap_pars_vertex:uv,displacementmap_vertex:fv,emissivemap_fragment:dv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:vv,envmap_common_pars_fragment:xv,envmap_pars_fragment:_v,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Lv,envmap_vertex:Mv,fog_vertex:bv,fog_pars_vertex:wv,fog_fragment:Sv,fog_pars_fragment:Tv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:Av,lights_lambert_fragment:Cv,lights_lambert_pars_fragment:Rv,lights_pars_begin:Pv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Uv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Nv,lights_physical_pars_fragment:zv,lights_fragment_begin:Ov,lights_fragment_maps:Bv,lights_fragment_end:kv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:Kv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:jv,morphinstance_vertex:Zv,morphcolor_vertex:Jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:tx,morphtarget_vertex:ex,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:sx,normal_pars_vertex:rx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:lx,clearcoat_pars_fragment:hx,iridescence_pars_fragment:ux,opaque_fragment:fx,packing:dx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:Mx,shadowmap_vertex:bx,shadowmask_pars_fragment:wx,skinbase_vertex:Sx,skinning_pars_vertex:Tx,skinning_vertex:Ex,skinnormal_vertex:Ax,specularmap_fragment:Cx,specularmap_pars_fragment:Rx,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ix,uv_pars_fragment:Ux,uv_pars_vertex:Fx,uv_vertex:Nx,worldpos_vertex:zx,background_vert:Ox,background_frag:Bx,backgroundCube_vert:kx,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Vx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:Yx,equirect_vert:Kx,equirect_frag:$x,linedashed_vert:jx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:Qx,meshlambert_vert:t2,meshlambert_frag:e2,meshmatcap_vert:n2,meshmatcap_frag:i2,meshnormal_vert:s2,meshnormal_frag:r2,meshphong_vert:o2,meshphong_frag:a2,meshphysical_vert:c2,meshphysical_frag:l2,meshtoon_vert:h2,meshtoon_frag:u2,points_vert:f2,points_frag:d2,shadow_vert:p2,shadow_frag:m2,sprite_vert:g2,sprite_frag:v2},de={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Ls={basic:{uniforms:Si([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Si([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Si([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Si([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Si([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Si([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Si([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Si([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Si([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Si([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Si([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Si([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Si([de.lights,de.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ls.physical={uniforms:Si([Ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Oc={r:0,b:0,g:0},Or=new Fi,x2=new Ie;function _2(n,t,e,i,s,o,a){const c=new Vt(0);let l=o===!0?0:1,h,r,u=null,f=0,d=null;function v(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function g(y){let M=!1;const _=v(y);_===null?p(c,l):_&&_.isColor&&(p(_,1),M=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,M){const _=v(M);_&&(_.isCubeTexture||_.mapping===Vl)?(r===void 0&&(r=new ye(new rn(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:oa(Ls.backgroundCube.uniforms),vertexShader:Ls.backgroundCube.vertexShader,fragmentShader:Ls.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),r.geometry.deleteAttribute("uv"),r.onBeforeRender=function(D,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(r.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(r)),Or.copy(M.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),r.material.uniforms.envMap.value=_,r.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,r.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,r.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,r.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(Or)),r.material.toneMapped=je.getTransfer(_.colorSpace)!==hn,(u!==_||f!==_.version||d!==n.toneMapping)&&(r.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),r.layers.enableAll(),y.unshift(r,r.geometry,r.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new ye(new Mn(2,2),new $e({name:"BackgroundMaterial",uniforms:oa(Ls.background.uniforms),vertexShader:Ls.background.vertexShader,fragmentShader:Ls.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=je.getTransfer(_.colorSpace)!==hn,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,M){y.getRGB(Oc,$p(n)),i.buffers.color.setClear(Oc.r,Oc.g,Oc.b,M,a)}return{getClearColor:function(){return c},setClearColor:function(y,M=1){c.set(y),l=M,p(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(c,l)},render:g,addToRenderList:m}}function y2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,a=!1;function c(x,z,G,st,vt){let Rt=!1;const mt=u(st,G,z);o!==mt&&(o=mt,h(o.object)),Rt=d(x,st,G,vt),Rt&&v(x,st,G,vt),vt!==null&&t.update(vt,n.ELEMENT_ARRAY_BUFFER),(Rt||a)&&(a=!1,_(x,z,G,st),vt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function l(){return n.createVertexArray()}function h(x){return n.bindVertexArray(x)}function r(x){return n.deleteVertexArray(x)}function u(x,z,G){const st=G.wireframe===!0;let vt=i[x.id];vt===void 0&&(vt={},i[x.id]=vt);let Rt=vt[z.id];Rt===void 0&&(Rt={},vt[z.id]=Rt);let mt=Rt[st];return mt===void 0&&(mt=f(l()),Rt[st]=mt),mt}function f(x){const z=[],G=[],st=[];for(let vt=0;vt<e;vt++)z[vt]=0,G[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:st,object:x,attributes:{},index:null}}function d(x,z,G,st){const vt=o.attributes,Rt=z.attributes;let mt=0;const It=G.getAttributes();for(const nt in It)if(It[nt].location>=0){const se=vt[nt];let fe=Rt[nt];if(fe===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;mt++}return o.attributesNum!==mt||o.index!==st}function v(x,z,G,st){const vt={},Rt=z.attributes;let mt=0;const It=G.getAttributes();for(const nt in It)if(It[nt].location>=0){let se=Rt[nt];se===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(se=x.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),vt[nt]=fe,mt++}o.attributes=vt,o.attributesNum=mt,o.index=st}function g(){const x=o.newAttributes;for(let z=0,G=x.length;z<G;z++)x[z]=0}function m(x){p(x,0)}function p(x,z){const G=o.newAttributes,st=o.enabledAttributes,vt=o.attributeDivisors;G[x]=1,st[x]===0&&(n.enableVertexAttribArray(x),st[x]=1),vt[x]!==z&&(n.vertexAttribDivisor(x,z),vt[x]=z)}function y(){const x=o.newAttributes,z=o.enabledAttributes;for(let G=0,st=z.length;G<st;G++)z[G]!==x[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function M(x,z,G,st,vt,Rt,mt){mt===!0?n.vertexAttribIPointer(x,z,G,vt,Rt):n.vertexAttribPointer(x,z,G,st,vt,Rt)}function _(x,z,G,st){g();const vt=st.attributes,Rt=G.getAttributes(),mt=z.defaultAttributeValues;for(const It in Rt){const nt=Rt[It];if(nt.location>=0){let kt=vt[It];if(kt===void 0&&(It==="instanceMatrix"&&x.instanceMatrix&&(kt=x.instanceMatrix),It==="instanceColor"&&x.instanceColor&&(kt=x.instanceColor)),kt!==void 0){const se=kt.normalized,fe=kt.itemSize,le=t.get(kt);if(le===void 0)continue;const ut=le.buffer,$=le.type,X=le.bytesPerElement,Et=$===n.INT||$===n.UNSIGNED_INT||kt.gpuType===ff;if(kt.isInterleavedBufferAttribute){const At=kt.data,St=At.stride,Ft=kt.offset;if(At.isInstancedInterleavedBuffer){for(let Wt=0;Wt<nt.locationSize;Wt++)p(nt.location+Wt,At.meshPerAttribute);x.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Wt=0;Wt<nt.locationSize;Wt++)m(nt.location+Wt);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Wt=0;Wt<nt.locationSize;Wt++)M(nt.location+Wt,fe/nt.locationSize,$,se,St*X,(Ft+fe/nt.locationSize*Wt)*X,Et)}else{if(kt.isInstancedBufferAttribute){for(let At=0;At<nt.locationSize;At++)p(nt.location+At,kt.meshPerAttribute);x.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let At=0;At<nt.locationSize;At++)m(nt.location+At);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let At=0;At<nt.locationSize;At++)M(nt.location+At,fe/nt.locationSize,$,se,fe*X,fe/nt.locationSize*At*X,Et)}}else if(mt!==void 0){const se=mt[It];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(nt.location,se);break;case 3:n.vertexAttrib3fv(nt.location,se);break;case 4:n.vertexAttrib4fv(nt.location,se);break;default:n.vertexAttrib1fv(nt.location,se)}}}}y()}function D(){F();for(const x in i){const z=i[x];for(const G in z){const st=z[G];for(const vt in st)r(st[vt].object),delete st[vt];delete z[G]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const z=i[x.id];for(const G in z){const st=z[G];for(const vt in st)r(st[vt].object),delete st[vt];delete z[G]}delete i[x.id]}function P(x){for(const z in i){const G=i[z];if(G[x.id]===void 0)continue;const st=G[x.id];for(const vt in st)r(st[vt].object),delete st[vt];delete G[x.id]}}function F(){R(),a=!0,o!==s&&(o=s,h(o.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:F,resetDefaultState:R,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function M2(n,t,e){let i;function s(h){i=h}function o(h,r){n.drawArrays(i,h,r),e.update(r,i,1)}function a(h,r,u){u!==0&&(n.drawArraysInstanced(i,h,r,u),e.update(r,i,u))}function c(h,r,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,r,0,u);let d=0;for(let v=0;v<u;v++)d+=r[v];e.update(d,i,1)}function l(h,r,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<h.length;v++)a(h[v],r[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,r,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=r[g]*f[g];e.update(v,i,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function b2(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Wi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){const F=P===is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==hr&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fs&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const r=l(h);r!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",r,"instead."),h=r);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:D,maxSamples:I}}function w2(n){const t=this;let e=null,i=0,s=!1,o=!1;const a=new wr,c=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){o=!0,r(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=r(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||v===null||v.length===0||o&&!m)o?r(null):h();else{const y=o?0:i,M=y*4;let _=p.clippingState||null;l.value=_,_=r(v,f,M,d);for(let D=0;D!==M;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function r(u,f,d,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,y=f.matrixWorldInverse;c.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=d;M!==g;++M,_+=4)a.copy(u[M]).applyMatrix4(y,c),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function S2(n){let t=new WeakMap;function e(a,c){return c===pu?a.mapping=ea:c===mu&&(a.mapping=na),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===pu||c===mu)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Qp(l.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Mf extends jp{constructor(t=-1,e=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,a=i+t,c=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,r=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,c-=r*this.view.offsetY,l=c-r*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bo=4,T0=[.125,.215,.35,.446,.526,.582],Kr=20,Eh=new Mf,E0=new Vt;let Ah=null,Ch=0,Rh=0,Ph=!1;const qr=(1+Math.sqrt(5))/2,Po=1/qr,A0=[new L(-qr,Po,0),new L(qr,Po,0),new L(-Po,0,qr),new L(Po,0,qr),new L(0,qr,-Po),new L(0,qr,Po),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class co{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ah,Ch,Rh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ea||t.mapping===na?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ah=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ns,minFilter:ns,generateMipmaps:!1,type:is,format:Wi,colorSpace:ma,depthBuffer:!1},s=C0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C0(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T2(o)),this._blurMaterial=E2(o,t,e)}return s}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Eh)}_sceneToCubeUV(t,e,i,s){const c=new gi(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],r=this._renderer,u=r.autoClear,f=r.toneMapping;r.getClearColor(E0),r.toneMapping=or,r.autoClear=!1;const d=new Ke({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),v=new ye(new rn,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(E0),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(c.up.set(0,l[p],0),c.lookAt(h[p],0,0)):y===1?(c.up.set(0,0,l[p]),c.lookAt(0,h[p],0)):(c.up.set(0,l[p],0),c.lookAt(0,0,h[p]));const M=this._cubeSize;Bc(s,y*M,p>2?M:0,M,M),r.setRenderTarget(s),g&&r.render(v,c),r.render(t,c)}v.geometry.dispose(),v.material.dispose(),r.toneMapping=f,r.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ea||t.mapping===na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const l=this._cubeSize;Bc(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Eh)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=A0[(s-o-1)%A0.length];this._blur(t,o-1,o,a,c)}e.autoClear=i}_blur(t,e,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",o),this._halfBlur(a,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,a,c){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const r=3,u=new ye(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Kr-1),g=o/v,m=isFinite(o)?1+Math.floor(r*g):Kr;m>Kr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const p=[];let y=0;for(let P=0;P<Kr;++P){const F=P/g,R=Math.exp(-F*F/2);p.push(R),P===0?y+=R:P<m&&(y+=2*R)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",c&&(f.poleAxis.value=c);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-i;const _=this._sizeLods[s],D=3*_*(s>M-Bo?s-M+Bo:0),I=4*(this._cubeSize-_);Bc(e,D,I,3*_,2*_),l.setRenderTarget(e),l.render(u,Eh)}}function T2(n){const t=[],e=[],i=[];let s=n;const o=n-Bo+1+T0.length;for(let a=0;a<o;a++){const c=Math.pow(2,s);e.push(c);let l=1/c;a>n-Bo?l=T0[a-n+Bo-1]:a===0&&(l=0),i.push(l);const h=1/(c-2),r=-h,u=1+h,f=[r,r,u,r,u,u,r,r,u,u,r,u],d=6,v=6,g=3,m=2,p=1,y=new Float32Array(g*v*d),M=new Float32Array(m*v*d),_=new Float32Array(p*v*d);for(let I=0;I<d;I++){const P=I%3*2/3-1,F=I>2?0:-1,R=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];y.set(R,g*v*I),M.set(f,m*v*I);const x=[I,I,I,I,I,I];_.set(x,p*v*I)}const D=new Ze;D.setAttribute("position",new xn(y,g)),D.setAttribute("uv",new xn(M,m)),D.setAttribute("faceIndex",new xn(_,p)),t.push(D),s>Bo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function C0(n,t,e){const i=new qi(n,t,e);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bc(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function E2(n,t,e){const i=new Float32Array(Kr),s=new L(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function R0(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function P0(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function bf(){return`

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
	`}function A2(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const l=c.mapping,h=l===pu||l===mu,r=l===ea||l===na;if(h||r){let u=t.get(c);const f=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return e===null&&(e=new co(n)),u=h?e.fromEquirectangular(c,u):e.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),u.texture;if(u!==void 0)return u.texture;{const d=c.image;return h&&d&&d.height>0||r&&d&&s(d)?(e===null&&(e=new co(n)),u=h?e.fromEquirectangular(c):e.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),c.addEventListener("dispose",o),u.texture):null}}}return c}function s(c){let l=0;const h=6;for(let r=0;r<h;r++)c[r]!==void 0&&l++;return l===h}function o(c){const l=c.target;l.removeEventListener("dispose",o);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function C2(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ka("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R2(n,t,e,i){const s={},o=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],n.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,v=u.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let M=0,_=y.length;M<_;M+=3){const D=y[M+0],I=y[M+1],P=y[M+2];f.push(D,I,I,P,P,D)}}else if(v!==void 0){const y=v.array;g=v.version;for(let M=0,_=y.length/3-1;M<_;M+=3){const D=M+0,I=M+1,P=M+2;f.push(D,I,I,P,P,D)}}else return;const m=new(Hp(f)?Kp:Yp)(f,1);m.version=g;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function r(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return o.get(u)}return{get:c,update:l,getWireframeAttribute:r}}function P2(n,t,e){let i;function s(f){i=f}let o,a;function c(f){o=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,o,f*a),e.update(d,i,1)}function h(f,d,v){v!==0&&(n.drawElementsInstanced(i,d,o,f*a,v),e.update(d,i,v))}function r(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,i,1)}function u(f,d,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,o,f,0,g,0,v);let p=0;for(let y=0;y<v;y++)p+=d[y]*g[y];e.update(p,i,1)}}this.setMode=s,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=r,this.renderMultiDrawInstances=u}function L2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,c){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=c*(o/3);break;case n.LINES:e.lines+=c*(o/2);break;case n.LINE_STRIP:e.lines+=c*(o-1);break;case n.LINE_LOOP:e.lines+=c*o;break;case n.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function D2(n,t,e){const i=new WeakMap,s=new Qe;function o(a,c,l){const h=a.morphTargetInfluences,r=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,u=r!==void 0?r.length:0;let f=i.get(c);if(f===void 0||f.count!==u){let x=function(){F.dispose(),i.delete(c),c.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const v=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],M=c.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let D=c.attributes.position.count*_,I=1;D>t.maxTextureSize&&(I=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*I*4*u),F=new Vp(P,D,I,u);F.type=Fs,F.needsUpdate=!0;const R=_*4;for(let z=0;z<u;z++){const G=p[z],st=y[z],vt=M[z],Rt=D*I*4*z;for(let mt=0;mt<G.count;mt++){const It=mt*R;v===!0&&(s.fromBufferAttribute(G,mt),P[Rt+It+0]=s.x,P[Rt+It+1]=s.y,P[Rt+It+2]=s.z,P[Rt+It+3]=0),g===!0&&(s.fromBufferAttribute(st,mt),P[Rt+It+4]=s.x,P[Rt+It+5]=s.y,P[Rt+It+6]=s.z,P[Rt+It+7]=0),m===!0&&(s.fromBufferAttribute(vt,mt),P[Rt+It+8]=s.x,P[Rt+It+9]=s.y,P[Rt+It+10]=s.z,P[Rt+It+11]=vt.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Kt(D,I)},i.set(c,f),c.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<h.length;m++)v+=h[m];const g=c.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function I2(n,t,e,i){let s=new WeakMap;function o(l){const h=i.render.frame,r=l.geometry,u=t.get(l,r);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class em extends vi{constructor(t,e,i,s,o,a,c,l,h,r=qo){if(r!==qo&&r!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&r===qo&&(i=ao),i===void 0&&r===sa&&(i=ia),super(null,s,o,a,c,l,r,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:Ai,this.minFilter=l!==void 0?l:Ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nm=new vi,L0=new em(1,1),im=new Vp,sm=new b1,rm=new Jp,D0=[],I0=[],U0=new Float32Array(16),F0=new Float32Array(9),N0=new Float32Array(4);function xa(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=D0[s];if(o===void 0&&(o=new Float32Array(s),D0[s]=o),t!==0){i.toArray(o,0);for(let a=1,c=0;a!==t;++a)c+=e,n[a].toArray(o,c)}return o}function Gn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Vn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Xl(n,t){let e=I0[t];e===void 0&&(e=new Int32Array(t),I0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function F2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Gn(e,t))return;n.uniform2fv(this.addr,t),Vn(e,t)}}function N2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Gn(e,t))return;n.uniform3fv(this.addr,t),Vn(e,t)}}function z2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Gn(e,t))return;n.uniform4fv(this.addr,t),Vn(e,t)}}function O2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Gn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Vn(e,t)}else{if(Gn(e,i))return;N0.set(i),n.uniformMatrix2fv(this.addr,!1,N0),Vn(e,i)}}function B2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Gn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Vn(e,t)}else{if(Gn(e,i))return;F0.set(i),n.uniformMatrix3fv(this.addr,!1,F0),Vn(e,i)}}function k2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Gn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Vn(e,t)}else{if(Gn(e,i))return;U0.set(i),n.uniformMatrix4fv(this.addr,!1,U0),Vn(e,i)}}function H2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Gn(e,t))return;n.uniform2iv(this.addr,t),Vn(e,t)}}function V2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Gn(e,t))return;n.uniform3iv(this.addr,t),Vn(e,t)}}function W2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Gn(e,t))return;n.uniform4iv(this.addr,t),Vn(e,t)}}function X2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function q2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Gn(e,t))return;n.uniform2uiv(this.addr,t),Vn(e,t)}}function Y2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Gn(e,t))return;n.uniform3uiv(this.addr,t),Vn(e,t)}}function K2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Gn(e,t))return;n.uniform4uiv(this.addr,t),Vn(e,t)}}function $2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(L0.compareFunction=kp,o=L0):o=nm,e.setTexture2D(t||o,s)}function j2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||sm,s)}function Z2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||rm,s)}function J2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||im,s)}function Q2(n){switch(n){case 5126:return U2;case 35664:return F2;case 35665:return N2;case 35666:return z2;case 35674:return O2;case 35675:return B2;case 35676:return k2;case 5124:case 35670:return H2;case 35667:case 35671:return G2;case 35668:case 35672:return V2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return q2;case 36295:return Y2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return J2}}function t_(n,t){n.uniform1fv(this.addr,t)}function e_(n,t){const e=xa(t,this.size,2);n.uniform2fv(this.addr,e)}function n_(n,t){const e=xa(t,this.size,3);n.uniform3fv(this.addr,e)}function i_(n,t){const e=xa(t,this.size,4);n.uniform4fv(this.addr,e)}function s_(n,t){const e=xa(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r_(n,t){const e=xa(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function o_(n,t){const e=xa(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function a_(n,t){n.uniform1iv(this.addr,t)}function c_(n,t){n.uniform2iv(this.addr,t)}function l_(n,t){n.uniform3iv(this.addr,t)}function h_(n,t){n.uniform4iv(this.addr,t)}function u_(n,t){n.uniform1uiv(this.addr,t)}function f_(n,t){n.uniform2uiv(this.addr,t)}function d_(n,t){n.uniform3uiv(this.addr,t)}function p_(n,t){n.uniform4uiv(this.addr,t)}function m_(n,t,e){const i=this.cache,s=t.length,o=Xl(e,s);Gn(i,o)||(n.uniform1iv(this.addr,o),Vn(i,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nm,o[a])}function g_(n,t,e){const i=this.cache,s=t.length,o=Xl(e,s);Gn(i,o)||(n.uniform1iv(this.addr,o),Vn(i,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||sm,o[a])}function v_(n,t,e){const i=this.cache,s=t.length,o=Xl(e,s);Gn(i,o)||(n.uniform1iv(this.addr,o),Vn(i,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rm,o[a])}function x_(n,t,e){const i=this.cache,s=t.length,o=Xl(e,s);Gn(i,o)||(n.uniform1iv(this.addr,o),Vn(i,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||im,o[a])}function __(n){switch(n){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return c_;case 35668:case 35672:return l_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return x_}}class y_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Q2(e.type)}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}}class b_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const c=s[o];c.setValue(t,e[c.id],i)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function z0(n,t){n.seq.push(t),n.map[t.id]=t}function w_(n,t,e){const i=n.name,s=i.length;for(Lh.lastIndex=0;;){const o=Lh.exec(i),a=Lh.lastIndex;let c=o[1];const l=o[2]==="]",h=o[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===s){z0(e,h===void 0?new y_(c,n,t):new M_(c,n,t));break}else{let u=e.map[c];u===void 0&&(u=new b_(c),z0(e,u)),e=u}}}class dl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);w_(o,a,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,a=e.length;o!==a;++o){const c=e[o],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function O0(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const S_=37297;let T_=0;function E_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const c=a+1;i.push(`${c===t?">":" "} ${c}: ${e[a]}`)}return i.join(`
`)}const B0=new Fe;function A_(n){je._getMatrix(B0,je.workingColorSpace,n);const t=`mat3( ${B0.elements.map(e=>e.toFixed(4))} )`;switch(je.getTransfer(n)){case Wl:return[t,"LinearTransferOETF"];case hn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function k0(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+E_(n.getShaderSource(t),a)}else return s}function C_(n,t){const e=A_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function R_(n,t){let e;switch(t){case Ug:e="Linear";break;case Fg:e="Reinhard";break;case Ng:e="Cineon";break;case zg:e="ACESFilmic";break;case Bg:e="AgX";break;case kg:e="Neutral";break;case Og:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const kc=new L;function P_(){je.getLuminanceCoefficients(kc);const n=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function D_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function I_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),a=o.name;let c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),e[a]={type:o.type,location:n.getAttribLocation(t,a),locationSize:c}}return e}function Ha(n){return n!==""}function H0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(n){return n.replace(U_,N_)}const F_=new Map;function N_(n,t){let e=ze[t];if(e===void 0){const i=F_.get(t);if(i!==void 0)e=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xu(e)}const z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(n){return n.replace(z_,O_)}function O_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function W0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function B_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===mg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ys&&(t="SHADOWMAP_TYPE_VSM"),t}function k_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case na:t="ENVMAP_TYPE_CUBE";break;case Vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case na:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cp:t="ENVMAP_BLENDING_MULTIPLY";break;case Dg:t="ENVMAP_BLENDING_MIX";break;case Ig:t="ENVMAP_BLENDING_ADD";break}return t}function V_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function W_(n,t,e,i){const s=n.getContext(),o=e.defines;let a=e.vertexShader,c=e.fragmentShader;const l=B_(e),h=k_(e),r=H_(e),u=G_(e),f=V_(e),d=L_(e),v=D_(o),g=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ha).join(`
`),p.length>0&&(p+=`
`)):(m=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),p=[W0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+r:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==or?"#define TONE_MAPPING":"",e.toneMapping!==or?ze.tonemapping_pars_fragment:"",e.toneMapping!==or?R_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,C_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Xu(a),a=H0(a,e),a=G0(a,e),c=Xu(c),c=H0(c,e),c=G0(c,e),a=V0(a),c=V0(c),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,_=y+p+c,D=O0(s,s.VERTEX_SHADER,M),I=O0(s,s.FRAGMENT_SHADER,_);s.attachShader(g,D),s.attachShader(g,I),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(z){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(g).trim(),st=s.getShaderInfoLog(D).trim(),vt=s.getShaderInfoLog(I).trim();let Rt=!0,mt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,D,I);else{const It=k0(s,D,"vertex"),nt=k0(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+G+`
`+It+`
`+nt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(st===""||vt==="")&&(mt=!1);mt&&(z.diagnostics={runnable:Rt,programLog:G,vertexShader:{log:st,prefix:m},fragmentShader:{log:vt,prefix:p}})}s.deleteShader(D),s.deleteShader(I),F=new dl(s,g),R=I_(s,g)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,S_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=I,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Y_(t),e.set(t,i)),i}}class Y_{constructor(t){this.id=X_++,this.code=t,this.usedTimes=0}}function K_(n,t,e,i,s,o,a){const c=new Xp,l=new q_,h=new Set,r=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(R){return h.add(R),R===0?"uv":`uv${R}`}function m(R,x,z,G,st){const vt=G.fog,Rt=st.geometry,mt=R.isMeshStandardMaterial?G.environment:null,It=(R.isMeshStandardMaterial?e:t).get(R.envMap||mt),nt=It&&It.mapping===Vl?It.image.height:null,kt=v[R.type];R.precision!==null&&(d=s.getMaxPrecision(R.precision),d!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const se=Rt.morphAttributes.position||Rt.morphAttributes.normal||Rt.morphAttributes.color,fe=se!==void 0?se.length:0;let le=0;Rt.morphAttributes.position!==void 0&&(le=1),Rt.morphAttributes.normal!==void 0&&(le=2),Rt.morphAttributes.color!==void 0&&(le=3);let ut,$,X,Et;if(kt){const Te=Ls[kt];ut=Te.vertexShader,$=Te.fragmentShader}else ut=R.vertexShader,$=R.fragmentShader,l.update(R),X=l.getVertexShaderID(R),Et=l.getFragmentShaderID(R);const At=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Ft=st.isInstancedMesh===!0,Wt=st.isBatchedMesh===!0,ae=!!R.map,bt=!!R.matcap,Ot=!!It,O=!!R.aoMap,ie=!!R.lightMap,Yt=!!R.bumpMap,ce=!!R.normalMap,Jt=!!R.displacementMap,ct=!!R.emissiveMap,ft=!!R.metalnessMap,C=!!R.roughnessMap,b=R.anisotropy>0,W=R.clearcoat>0,Z=R.dispersion>0,tt=R.iridescence>0,Y=R.sheen>0,pt=R.transmission>0,dt=b&&!!R.anisotropyMap,lt=W&&!!R.clearcoatMap,Mt=W&&!!R.clearcoatNormalMap,N=W&&!!R.clearcoatRoughnessMap,J=tt&&!!R.iridescenceMap,Tt=tt&&!!R.iridescenceThicknessMap,Dt=Y&&!!R.sheenColorMap,ht=Y&&!!R.sheenRoughnessMap,zt=!!R.specularMap,Gt=!!R.specularColorMap,Xt=!!R.specularIntensityMap,U=pt&&!!R.transmissionMap,et=pt&&!!R.thicknessMap,it=!!R.gradientMap,gt=!!R.alphaMap,Lt=R.alphaTest>0,Ut=!!R.alphaHash,jt=!!R.extensions;let pe=or;R.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(pe=n.toneMapping);const Ae={shaderID:kt,shaderType:R.type,shaderName:R.name,vertexShader:ut,fragmentShader:$,defines:R.defines,customVertexShaderID:X,customFragmentShaderID:Et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&st._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&st.instanceColor!==null,instancingMorph:Ft&&st.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:At===null?n.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:ma,alphaToCoverage:!!R.alphaToCoverage,map:ae,matcap:bt,envMap:Ot,envMapMode:Ot&&It.mapping,envMapCubeUVHeight:nt,aoMap:O,lightMap:ie,bumpMap:Yt,normalMap:ce,displacementMap:f&&Jt,emissiveMap:ct,normalMapObjectSpace:ce&&R.normalMapType===Wg,normalMapTangentSpace:ce&&R.normalMapType===Bp,metalnessMap:ft,roughnessMap:C,anisotropy:b,anisotropyMap:dt,clearcoat:W,clearcoatMap:lt,clearcoatNormalMap:Mt,clearcoatRoughnessMap:N,dispersion:Z,iridescence:tt,iridescenceMap:J,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:ht,specularMap:zt,specularColorMap:Gt,specularIntensityMap:Xt,transmission:pt,transmissionMap:U,thicknessMap:et,gradientMap:it,opaque:R.transparent===!1&&R.blending===Xo&&R.alphaToCoverage===!1,alphaMap:gt,alphaTest:Lt,alphaHash:Ut,combine:R.combine,mapUv:ae&&g(R.map.channel),aoMapUv:O&&g(R.aoMap.channel),lightMapUv:ie&&g(R.lightMap.channel),bumpMapUv:Yt&&g(R.bumpMap.channel),normalMapUv:ce&&g(R.normalMap.channel),displacementMapUv:Jt&&g(R.displacementMap.channel),emissiveMapUv:ct&&g(R.emissiveMap.channel),metalnessMapUv:ft&&g(R.metalnessMap.channel),roughnessMapUv:C&&g(R.roughnessMap.channel),anisotropyMapUv:dt&&g(R.anisotropyMap.channel),clearcoatMapUv:lt&&g(R.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&g(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&g(R.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(R.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&g(R.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(R.sheenColorMap.channel),sheenRoughnessMapUv:ht&&g(R.sheenRoughnessMap.channel),specularMapUv:zt&&g(R.specularMap.channel),specularColorMapUv:Gt&&g(R.specularColorMap.channel),specularIntensityMapUv:Xt&&g(R.specularIntensityMap.channel),transmissionMapUv:U&&g(R.transmissionMap.channel),thicknessMapUv:et&&g(R.thicknessMap.channel),alphaMapUv:gt&&g(R.alphaMap.channel),vertexTangents:!!Rt.attributes.tangent&&(ce||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Rt.attributes.color&&Rt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!Rt.attributes.uv&&(ae||gt),fog:!!vt,useFog:R.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:st.isSkinnedMesh===!0,morphTargets:Rt.morphAttributes.position!==void 0,morphNormals:Rt.morphAttributes.normal!==void 0,morphColors:Rt.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:ae&&R.map.isVideoTexture===!0&&je.getTransfer(R.map.colorSpace)===hn,decodeVideoTextureEmissive:ct&&R.emissiveMap.isVideoTexture===!0&&je.getTransfer(R.emissiveMap.colorSpace)===hn,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Xe,flipSided:R.side===Qn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:jt&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&R.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Ae.vertexUv1s=h.has(1),Ae.vertexUv2s=h.has(2),Ae.vertexUv3s=h.has(3),h.clear(),Ae}function p(R){const x=[];if(R.shaderID?x.push(R.shaderID):(x.push(R.customVertexShaderID),x.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)x.push(z),x.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(y(x,R),M(x,R),x.push(n.outputColorSpace)),x.push(R.customProgramCacheKey),x.join()}function y(R,x){R.push(x.precision),R.push(x.outputColorSpace),R.push(x.envMapMode),R.push(x.envMapCubeUVHeight),R.push(x.mapUv),R.push(x.alphaMapUv),R.push(x.lightMapUv),R.push(x.aoMapUv),R.push(x.bumpMapUv),R.push(x.normalMapUv),R.push(x.displacementMapUv),R.push(x.emissiveMapUv),R.push(x.metalnessMapUv),R.push(x.roughnessMapUv),R.push(x.anisotropyMapUv),R.push(x.clearcoatMapUv),R.push(x.clearcoatNormalMapUv),R.push(x.clearcoatRoughnessMapUv),R.push(x.iridescenceMapUv),R.push(x.iridescenceThicknessMapUv),R.push(x.sheenColorMapUv),R.push(x.sheenRoughnessMapUv),R.push(x.specularMapUv),R.push(x.specularColorMapUv),R.push(x.specularIntensityMapUv),R.push(x.transmissionMapUv),R.push(x.thicknessMapUv),R.push(x.combine),R.push(x.fogExp2),R.push(x.sizeAttenuation),R.push(x.morphTargetsCount),R.push(x.morphAttributeCount),R.push(x.numDirLights),R.push(x.numPointLights),R.push(x.numSpotLights),R.push(x.numSpotLightMaps),R.push(x.numHemiLights),R.push(x.numRectAreaLights),R.push(x.numDirLightShadows),R.push(x.numPointLightShadows),R.push(x.numSpotLightShadows),R.push(x.numSpotLightShadowsWithMaps),R.push(x.numLightProbes),R.push(x.shadowMapType),R.push(x.toneMapping),R.push(x.numClippingPlanes),R.push(x.numClipIntersection),R.push(x.depthPacking)}function M(R,x){c.disableAll(),x.supportsVertexTextures&&c.enable(0),x.instancing&&c.enable(1),x.instancingColor&&c.enable(2),x.instancingMorph&&c.enable(3),x.matcap&&c.enable(4),x.envMap&&c.enable(5),x.normalMapObjectSpace&&c.enable(6),x.normalMapTangentSpace&&c.enable(7),x.clearcoat&&c.enable(8),x.iridescence&&c.enable(9),x.alphaTest&&c.enable(10),x.vertexColors&&c.enable(11),x.vertexAlphas&&c.enable(12),x.vertexUv1s&&c.enable(13),x.vertexUv2s&&c.enable(14),x.vertexUv3s&&c.enable(15),x.vertexTangents&&c.enable(16),x.anisotropy&&c.enable(17),x.alphaHash&&c.enable(18),x.batching&&c.enable(19),x.dispersion&&c.enable(20),x.batchingColor&&c.enable(21),R.push(c.mask),c.disableAll(),x.fog&&c.enable(0),x.useFog&&c.enable(1),x.flatShading&&c.enable(2),x.logarithmicDepthBuffer&&c.enable(3),x.reverseDepthBuffer&&c.enable(4),x.skinning&&c.enable(5),x.morphTargets&&c.enable(6),x.morphNormals&&c.enable(7),x.morphColors&&c.enable(8),x.premultipliedAlpha&&c.enable(9),x.shadowMapEnabled&&c.enable(10),x.doubleSided&&c.enable(11),x.flipSided&&c.enable(12),x.useDepthPacking&&c.enable(13),x.dithering&&c.enable(14),x.transmission&&c.enable(15),x.sheen&&c.enable(16),x.opaque&&c.enable(17),x.pointsUvs&&c.enable(18),x.decodeVideoTexture&&c.enable(19),x.decodeVideoTextureEmissive&&c.enable(20),x.alphaToCoverage&&c.enable(21),R.push(c.mask)}function _(R){const x=v[R.type];let z;if(x){const G=Ls[x];z=ys.clone(G.uniforms)}else z=R.uniforms;return z}function D(R,x){let z;for(let G=0,st=r.length;G<st;G++){const vt=r[G];if(vt.cacheKey===x){z=vt,++z.usedTimes;break}}return z===void 0&&(z=new W_(n,x,R,o),r.push(z)),z}function I(R){if(--R.usedTimes===0){const x=r.indexOf(R);r[x]=r[r.length-1],r.pop(),R.destroy()}}function P(R){l.remove(R)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:I,releaseShaderCache:P,programs:r,dispose:F}}function $_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function s(a,c,l){n.get(a)[c]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function j_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function X0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function q0(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,d,v,g,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function c(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,v,g,m){const p=a(u,f,d,v,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||j_),i.length>1&&i.sort(f||X0),s.length>1&&s.sort(f||X0)}function r(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:c,unshift:l,finish:r,sort:h}}function Z_(){let n=new WeakMap;function t(i,s){const o=n.get(i);let a;return o===void 0?(a=new q0,n.set(i,[a])):s>=o.length?(a=new q0,o.push(a)):a=o[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function J_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Q_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ty=0;function ey(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ny(n){const t=new J_,e=Q_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,o=new Ie,a=new Ie;function c(h){let r=0,u=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,v=0,g=0,m=0,p=0,y=0,M=0,_=0,D=0,I=0,P=0;h.sort(ey);for(let R=0,x=h.length;R<x;R++){const z=h[R],G=z.color,st=z.intensity,vt=z.distance,Rt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)r+=G.r*st,u+=G.g*st,f+=G.b*st;else if(z.isLightProbe){for(let mt=0;mt<9;mt++)i.probe[mt].addScaledVector(z.sh.coefficients[mt],st);P++}else if(z.isDirectionalLight){const mt=t.get(z);if(mt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const It=z.shadow,nt=e.get(z);nt.shadowIntensity=It.intensity,nt.shadowBias=It.bias,nt.shadowNormalBias=It.normalBias,nt.shadowRadius=It.radius,nt.shadowMapSize=It.mapSize,i.directionalShadow[d]=nt,i.directionalShadowMap[d]=Rt,i.directionalShadowMatrix[d]=z.shadow.matrix,y++}i.directional[d]=mt,d++}else if(z.isSpotLight){const mt=t.get(z);mt.position.setFromMatrixPosition(z.matrixWorld),mt.color.copy(G).multiplyScalar(st),mt.distance=vt,mt.coneCos=Math.cos(z.angle),mt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),mt.decay=z.decay,i.spot[g]=mt;const It=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,It.updateMatrices(z),z.castShadow&&I++),i.spotLightMatrix[g]=It.matrix,z.castShadow){const nt=e.get(z);nt.shadowIntensity=It.intensity,nt.shadowBias=It.bias,nt.shadowNormalBias=It.normalBias,nt.shadowRadius=It.radius,nt.shadowMapSize=It.mapSize,i.spotShadow[g]=nt,i.spotShadowMap[g]=Rt,_++}g++}else if(z.isRectAreaLight){const mt=t.get(z);mt.color.copy(G).multiplyScalar(st),mt.halfWidth.set(z.width*.5,0,0),mt.halfHeight.set(0,z.height*.5,0),i.rectArea[m]=mt,m++}else if(z.isPointLight){const mt=t.get(z);if(mt.color.copy(z.color).multiplyScalar(z.intensity),mt.distance=z.distance,mt.decay=z.decay,z.castShadow){const It=z.shadow,nt=e.get(z);nt.shadowIntensity=It.intensity,nt.shadowBias=It.bias,nt.shadowNormalBias=It.normalBias,nt.shadowRadius=It.radius,nt.shadowMapSize=It.mapSize,nt.shadowCameraNear=It.camera.near,nt.shadowCameraFar=It.camera.far,i.pointShadow[v]=nt,i.pointShadowMap[v]=Rt,i.pointShadowMatrix[v]=z.shadow.matrix,M++}i.point[v]=mt,v++}else if(z.isHemisphereLight){const mt=t.get(z);mt.skyColor.copy(z.color).multiplyScalar(st),mt.groundColor.copy(z.groundColor).multiplyScalar(st),i.hemi[p]=mt,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=r,i.ambient[1]=u,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==d||F.pointLength!==v||F.spotLength!==g||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==y||F.numPointShadows!==M||F.numSpotShadows!==_||F.numSpotMaps!==D||F.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,F.directionalLength=d,F.pointLength=v,F.spotLength=g,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=y,F.numPointShadows=M,F.numSpotShadows=_,F.numSpotMaps=D,F.numLightProbes=P,i.version=ty++)}function l(h,r){let u=0,f=0,d=0,v=0,g=0;const m=r.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const M=h[p];if(M.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(M.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=i.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:i}}function Y0(n){const t=new ny(n),e=[],i=[];function s(r){h.camera=r,e.length=0,i.length=0}function o(r){e.push(r)}function a(r){i.push(r)}function c(){t.setup(e)}function l(r){t.setupView(e,r)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function iy(n){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Y0(n),t.set(s,[c])):o>=a.length?(c=new Y0(n),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:e,dispose:i}}class sy extends fo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ry extends fo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`;function cy(n,t,e){let i=new yf;const s=new Kt,o=new Kt,a=new Qe,c=new sy({depthPacking:Vg}),l=new ry,h={},r=e.maxTextureSize,u={[Os]:Qn,[Qn]:Os,[Xe]:Xe},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ze;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ye(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tp;let p=this.type;this.render=function(I,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const R=n.getRenderTarget(),x=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),G=n.state;G.setBlending(rr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const st=p!==Ys&&this.type===Ys,vt=p===Ys&&this.type!==Ys;for(let Rt=0,mt=I.length;Rt<mt;Rt++){const It=I[Rt],nt=It.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",It,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);const kt=nt.getFrameExtents();if(s.multiply(kt),o.copy(nt.mapSize),(s.x>r||s.y>r)&&(s.x>r&&(o.x=Math.floor(r/kt.x),s.x=o.x*kt.x,nt.mapSize.x=o.x),s.y>r&&(o.y=Math.floor(r/kt.y),s.y=o.y*kt.y,nt.mapSize.y=o.y)),nt.map===null||st===!0||vt===!0){const fe=this.type!==Ys?{minFilter:Ai,magFilter:Ai}:{};nt.map!==null&&nt.map.dispose(),nt.map=new qi(s.x,s.y,fe),nt.map.texture.name=It.name+".shadowMap",nt.camera.updateProjectionMatrix()}n.setRenderTarget(nt.map),n.clear();const se=nt.getViewportCount();for(let fe=0;fe<se;fe++){const le=nt.getViewport(fe);a.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),G.viewport(a),nt.updateMatrices(It,fe),i=nt.getFrustum(),_(P,F,nt.camera,It,this.type)}nt.isPointLightShadow!==!0&&this.type===Ys&&y(nt,F),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,x,z)};function y(I,P){const F=t.update(g);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(P,null,F,f,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(P,null,F,d,g,null)}function M(I,P,F,R){let x=null;const z=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)x=z;else if(x=F.isPointLight===!0?l:c,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=x.uuid,st=P.uuid;let vt=h[G];vt===void 0&&(vt={},h[G]=vt);let Rt=vt[st];Rt===void 0&&(Rt=x.clone(),vt[st]=Rt,P.addEventListener("dispose",D)),x=Rt}if(x.visible=P.visible,x.wireframe=P.wireframe,R===Ys?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=n.properties.get(x);G.light=F}return x}function _(I,P,F,R,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Ys)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const st=t.update(I),vt=I.material;if(Array.isArray(vt)){const Rt=st.groups;for(let mt=0,It=Rt.length;mt<It;mt++){const nt=Rt[mt],kt=vt[nt.materialIndex];if(kt&&kt.visible){const se=M(I,kt,R,x);I.onBeforeShadow(n,I,P,F,st,se,nt),n.renderBufferDirect(F,null,st,se,I,nt),I.onAfterShadow(n,I,P,F,st,se,nt)}}}else if(vt.visible){const Rt=M(I,vt,R,x);I.onBeforeShadow(n,I,P,F,st,Rt,null),n.renderBufferDirect(F,null,st,Rt,I,null),I.onAfterShadow(n,I,P,F,st,Rt,null)}}const G=I.children;for(let st=0,vt=G.length;st<vt;st++)_(G[st],P,F,R,x)}function D(I){I.target.removeEventListener("dispose",D);for(const F in h){const R=h[F],x=I.target.uuid;x in R&&(R[x].dispose(),delete R[x])}}}const ly={[au]:cu,[lu]:fu,[hu]:du,[ta]:uu,[cu]:au,[fu]:lu,[du]:hu,[uu]:ta};function hy(n,t){function e(){let U=!1;const et=new Qe;let it=null;const gt=new Qe(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!U&&(n.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){U=Lt},setClear:function(Lt,Ut,jt,pe,Ae){Ae===!0&&(Lt*=pe,Ut*=pe,jt*=pe),et.set(Lt,Ut,jt,pe),gt.equals(et)===!1&&(n.clearColor(Lt,Ut,jt,pe),gt.copy(et))},reset:function(){U=!1,it=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,et=!1,it=null,gt=null,Lt=null;return{setReversed:function(Ut){if(et!==Ut){const jt=t.get("EXT_clip_control");et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const pe=Lt;Lt=null,this.setClear(pe)}et=Ut},getReversed:function(){return et},setTest:function(Ut){Ut?At(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(Ut){it!==Ut&&!U&&(n.depthMask(Ut),it=Ut)},setFunc:function(Ut){if(et&&(Ut=ly[Ut]),gt!==Ut){switch(Ut){case au:n.depthFunc(n.NEVER);break;case cu:n.depthFunc(n.ALWAYS);break;case lu:n.depthFunc(n.LESS);break;case ta:n.depthFunc(n.LEQUAL);break;case hu:n.depthFunc(n.EQUAL);break;case uu:n.depthFunc(n.GEQUAL);break;case fu:n.depthFunc(n.GREATER);break;case du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=Ut}},setLocked:function(Ut){U=Ut},setClear:function(Ut){Lt!==Ut&&(et&&(Ut=1-Ut),n.clearDepth(Ut),Lt=Ut)},reset:function(){U=!1,it=null,gt=null,Lt=null,et=!1}}}function s(){let U=!1,et=null,it=null,gt=null,Lt=null,Ut=null,jt=null,pe=null,Ae=null;return{setTest:function(Te){U||(Te?At(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(Te){et!==Te&&!U&&(n.stencilMask(Te),et=Te)},setFunc:function(Te,tn,Ct){(it!==Te||gt!==tn||Lt!==Ct)&&(n.stencilFunc(Te,tn,Ct),it=Te,gt=tn,Lt=Ct)},setOp:function(Te,tn,Ct){(Ut!==Te||jt!==tn||pe!==Ct)&&(n.stencilOp(Te,tn,Ct),Ut=Te,jt=tn,pe=Ct)},setLocked:function(Te){U=Te},setClear:function(Te){Ae!==Te&&(n.clearStencil(Te),Ae=Te)},reset:function(){U=!1,et=null,it=null,gt=null,Lt=null,Ut=null,jt=null,pe=null,Ae=null}}}const o=new e,a=new i,c=new s,l=new WeakMap,h=new WeakMap;let r={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,y=null,M=null,_=null,D=null,I=null,P=new Vt(0,0,0),F=0,R=!1,x=null,z=null,G=null,st=null,vt=null;const Rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let mt=!1,It=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(It=parseFloat(/^WebGL (\d)/.exec(nt)[1]),mt=It>=1):nt.indexOf("OpenGL ES")!==-1&&(It=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),mt=It>=2);let kt=null,se={};const fe=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ut=new Qe().fromArray(fe),$=new Qe().fromArray(le);function X(U,et,it,gt){const Lt=new Uint8Array(4),Ut=n.createTexture();n.bindTexture(U,Ut),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<it;jt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(et+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return Ut}const Et={};Et[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),At(n.DEPTH_TEST),a.setFunc(ta),Yt(!1),ce(Qf),At(n.CULL_FACE),O(rr);function At(U){r[U]!==!0&&(n.enable(U),r[U]=!0)}function St(U){r[U]!==!1&&(n.disable(U),r[U]=!1)}function Ft(U,et){return u[U]!==et?(n.bindFramebuffer(U,et),u[U]=et,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=et),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=et),!0):!1}function Wt(U,et){let it=d,gt=!1;if(U){it=f.get(et),it===void 0&&(it=[],f.set(et,it));const Lt=U.textures;if(it.length!==Lt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Ut=0,jt=Lt.length;Ut<jt;Ut++)it[Ut]=n.COLOR_ATTACHMENT0+Ut;it.length=Lt.length,gt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,gt=!0);gt&&n.drawBuffers(it)}function ae(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const bt={[Yr]:n.FUNC_ADD,[gg]:n.FUNC_SUBTRACT,[vg]:n.FUNC_REVERSE_SUBTRACT};bt[xg]=n.MIN,bt[_g]=n.MAX;const Ot={[yg]:n.ZERO,[Ap]:n.ONE,[Mg]:n.SRC_COLOR,[ou]:n.SRC_ALPHA,[Ag]:n.SRC_ALPHA_SATURATE,[Tg]:n.DST_COLOR,[wg]:n.DST_ALPHA,[bg]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Eg]:n.ONE_MINUS_DST_COLOR,[Sg]:n.ONE_MINUS_DST_ALPHA,[Cg]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Pg]:n.CONSTANT_ALPHA,[Lg]:n.ONE_MINUS_CONSTANT_ALPHA};function O(U,et,it,gt,Lt,Ut,jt,pe,Ae,Te){if(U===rr){g===!0&&(St(n.BLEND),g=!1);return}if(g===!1&&(At(n.BLEND),g=!0),U!==Ep){if(U!==m||Te!==R){if((p!==Yr||_!==Yr)&&(n.blendEquation(n.FUNC_ADD),p=Yr,_=Yr),Te)switch(U){case Xo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case An:n.blendFunc(n.ONE,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case e0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case An:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case t0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case e0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,D=null,I=null,P.set(0,0,0),F=0,m=U,R=Te}return}Lt=Lt||et,Ut=Ut||it,jt=jt||gt,(et!==p||Lt!==_)&&(n.blendEquationSeparate(bt[et],bt[Lt]),p=et,_=Lt),(it!==y||gt!==M||Ut!==D||jt!==I)&&(n.blendFuncSeparate(Ot[it],Ot[gt],Ot[Ut],Ot[jt]),y=it,M=gt,D=Ut,I=jt),(pe.equals(P)===!1||Ae!==F)&&(n.blendColor(pe.r,pe.g,pe.b,Ae),P.copy(pe),F=Ae),m=U,R=!1}function ie(U,et){U.side===Xe?St(n.CULL_FACE):At(n.CULL_FACE);let it=U.side===Qn;et&&(it=!it),Yt(it),U.blending===Xo&&U.transparent===!1?O(rr):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),o.setMask(U.colorWrite);const gt=U.stencilWrite;c.setTest(gt),gt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?At(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function ce(U){U!==dg?(At(n.CULL_FACE),U!==z&&(U===Qf?n.cullFace(n.BACK):U===pg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),z=U}function Jt(U){U!==G&&(mt&&n.lineWidth(U),G=U)}function ct(U,et,it){U?(At(n.POLYGON_OFFSET_FILL),(st!==et||vt!==it)&&(n.polygonOffset(et,it),st=et,vt=it)):St(n.POLYGON_OFFSET_FILL)}function ft(U){U?At(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+Rt-1),kt!==U&&(n.activeTexture(U),kt=U)}function b(U,et,it){it===void 0&&(kt===null?it=n.TEXTURE0+Rt-1:it=kt);let gt=se[it];gt===void 0&&(gt={type:void 0,texture:void 0},se[it]=gt),(gt.type!==U||gt.texture!==et)&&(kt!==it&&(n.activeTexture(it),kt=it),n.bindTexture(U,et||Et[U]),gt.type=U,gt.texture=et)}function W(){const U=se[kt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){ut.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function ht(U){$.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function zt(U,et){let it=h.get(et);it===void 0&&(it=new WeakMap,h.set(et,it));let gt=it.get(U);gt===void 0&&(gt=n.getUniformBlockIndex(et,U.name),it.set(U,gt))}function Gt(U,et){const gt=h.get(et).get(U);l.get(et)!==gt&&(n.uniformBlockBinding(et,gt,U.__bindingPointIndex),l.set(et,gt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),r={},kt=null,se={},u={},f=new WeakMap,d=[],v=null,g=!1,m=null,p=null,y=null,M=null,_=null,D=null,I=null,P=new Vt(0,0,0),F=0,R=!1,x=null,z=null,G=null,st=null,vt=null,ut.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:At,disable:St,bindFramebuffer:Ft,drawBuffers:Wt,useProgram:ae,setBlending:O,setMaterial:ie,setFlipSided:Yt,setCullFace:ce,setLineWidth:Jt,setPolygonOffset:ct,setScissorTest:ft,activeTexture:C,bindTexture:b,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:J,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Gt,texStorage2D:Mt,texStorage3D:N,texSubImage2D:Y,texSubImage3D:pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:lt,scissor:Dt,viewport:ht,reset:Xt}}function K0(n,t,e,i){const s=uy(i);switch(e){case Ip:return n*t;case Fp:return n*t;case Np:return n*t*2;case mf:return n*t/s.components*s.byteLength;case gf:return n*t/s.components*s.byteLength;case zp:return n*t*2/s.components*s.byteLength;case vf:return n*t*2/s.components*s.byteLength;case Up:return n*t*3/s.components*s.byteLength;case Wi:return n*t*4/s.components*s.byteLength;case xf:return n*t*4/s.components*s.byteLength;case cl:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hl:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _u:case Mu:return Math.max(n,16)*Math.max(t,8)/4;case xu:case yu:return Math.max(n,8)*Math.max(t,8)/2;case bu:case wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Su:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Au:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Du:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fl:case Bu:case ku:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Op:case Hu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gu:case Vu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(n){switch(n){case hr:case Pp:return{byteLength:1,components:1};case ac:case Lp:case is:return{byteLength:2,components:1};case df:case pf:return{byteLength:2,components:4};case ao:case ff:case Fs:return{byteLength:4,components:1};case Dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function fy(n,t,e,i,s,o,a){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Kt,r=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return d?new OffscreenCanvas(C,b):Al("canvas")}function g(C,b,W){let Z=1;const tt=ft(C);if((tt.width>W||tt.height>W)&&(Z=W/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*tt.width),pt=Math.floor(Z*tt.height);u===void 0&&(u=v(Y,pt));const dt=b?v(Y,pt):u;return dt.width=Y,dt.height=pt,dt.getContext("2d").drawImage(C,0,0,Y,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+pt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,b,W,Z,tt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=b;if(b===n.RED&&(W===n.FLOAT&&(Y=n.R32F),W===n.HALF_FLOAT&&(Y=n.R16F),W===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.R8UI),W===n.UNSIGNED_SHORT&&(Y=n.R16UI),W===n.UNSIGNED_INT&&(Y=n.R32UI),W===n.BYTE&&(Y=n.R8I),W===n.SHORT&&(Y=n.R16I),W===n.INT&&(Y=n.R32I)),b===n.RG&&(W===n.FLOAT&&(Y=n.RG32F),W===n.HALF_FLOAT&&(Y=n.RG16F),W===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RG8UI),W===n.UNSIGNED_SHORT&&(Y=n.RG16UI),W===n.UNSIGNED_INT&&(Y=n.RG32UI),W===n.BYTE&&(Y=n.RG8I),W===n.SHORT&&(Y=n.RG16I),W===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),W===n.UNSIGNED_INT&&(Y=n.RGB32UI),W===n.BYTE&&(Y=n.RGB8I),W===n.SHORT&&(Y=n.RGB16I),W===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),W===n.UNSIGNED_INT&&(Y=n.RGBA32UI),W===n.BYTE&&(Y=n.RGBA8I),W===n.SHORT&&(Y=n.RGBA16I),W===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),b===n.RGBA){const pt=tt?Wl:je.getTransfer(Z);W===n.FLOAT&&(Y=n.RGBA32F),W===n.HALF_FLOAT&&(Y=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Y=pt===hn?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(C,b){let W;return C?b===null||b===ao||b===ia?W=n.DEPTH24_STENCIL8:b===Fs?W=n.DEPTH32F_STENCIL8:b===ac&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ao||b===ia?W=n.DEPTH_COMPONENT24:b===Fs?W=n.DEPTH_COMPONENT32F:b===ac&&(W=n.DEPTH_COMPONENT16),W}function D(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ai&&C.minFilter!==ns?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){const b=C.target;b.removeEventListener("dispose",I),F(b),b.isVideoTexture&&r.delete(b)}function P(C){const b=C.target;b.removeEventListener("dispose",P),x(b)}function F(C){const b=i.get(C);if(b.__webglInit===void 0)return;const W=C.source,Z=f.get(W);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&R(C),Object.keys(Z).length===0&&f.delete(W)}i.remove(C)}function R(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const W=C.source,Z=f.get(W);delete Z[b.__cacheKey],a.memory.textures--}function x(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=C.textures;for(let Z=0,tt=W.length;Z<tt;Z++){const Y=i.get(W[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(W[Z])}i.remove(C)}let z=0;function G(){z=0}function st(){const C=z;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function vt(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function Rt(C,b){const W=i.get(C);if(C.isVideoTexture&&Jt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,C,b);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function mt(C,b){const W=i.get(C);if(C.version>0&&W.__version!==C.version){$(W,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function It(C,b){const W=i.get(C);if(C.version>0&&W.__version!==C.version){$(W,C,b);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function nt(C,b){const W=i.get(C);if(C.version>0&&W.__version!==C.version){X(W,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}const kt={[gu]:n.REPEAT,[Jr]:n.CLAMP_TO_EDGE,[vu]:n.MIRRORED_REPEAT},se={[Ai]:n.NEAREST,[Hg]:n.NEAREST_MIPMAP_NEAREST,[yc]:n.NEAREST_MIPMAP_LINEAR,[ns]:n.LINEAR,[rh]:n.LINEAR_MIPMAP_NEAREST,[Qr]:n.LINEAR_MIPMAP_LINEAR},fe={[Xg]:n.NEVER,[Zg]:n.ALWAYS,[qg]:n.LESS,[kp]:n.LEQUAL,[Yg]:n.EQUAL,[jg]:n.GEQUAL,[Kg]:n.GREATER,[$g]:n.NOTEQUAL};function le(C,b){if(b.type===Fs&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ns||b.magFilter===rh||b.magFilter===yc||b.magFilter===Qr||b.minFilter===ns||b.minFilter===rh||b.minFilter===yc||b.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,kt[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,kt[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,kt[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ai||b.minFilter!==yc&&b.minFilter!==Qr||b.type===Fs&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ut(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const Y=vt(b);if(Y!==C.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),tt[Y].usedTimes++;const pt=tt[C.__cacheKey];pt!==void 0&&(tt[C.__cacheKey].usedTimes--,pt.usedTimes===0&&R(b)),C.__cacheKey=Y,C.__webglTexture=tt[Y].texture}return W}function $(C,b,W){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const tt=ut(C,b),Y=b.source;e.bindTexture(Z,C.__webglTexture,n.TEXTURE0+W);const pt=i.get(Y);if(Y.version!==pt.__version||tt===!0){e.activeTexture(n.TEXTURE0+W);const dt=je.getPrimaries(je.workingColorSpace),lt=b.colorSpace===Js?null:je.getPrimaries(b.colorSpace),Mt=b.colorSpace===Js||dt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let N=g(b.image,!1,s.maxTextureSize);N=ct(b,N);const J=o.convert(b.format,b.colorSpace),Tt=o.convert(b.type);let Dt=M(b.internalFormat,J,Tt,b.colorSpace,b.isVideoTexture);le(Z,b);let ht;const zt=b.mipmaps,Gt=b.isVideoTexture!==!0,Xt=pt.__version===void 0||tt===!0,U=Y.dataReady,et=D(b,N);if(b.isDepthTexture)Dt=_(b.format===sa,b.type),Xt&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Dt,N.width,N.height):e.texImage2D(n.TEXTURE_2D,0,Dt,N.width,N.height,0,J,Tt,null));else if(b.isDataTexture)if(zt.length>0){Gt&&Xt&&e.texStorage2D(n.TEXTURE_2D,et,Dt,zt[0].width,zt[0].height);for(let it=0,gt=zt.length;it<gt;it++)ht=zt[it],Gt?U&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,J,Tt,ht.data):e.texImage2D(n.TEXTURE_2D,it,Dt,ht.width,ht.height,0,J,Tt,ht.data);b.generateMipmaps=!1}else Gt?(Xt&&e.texStorage2D(n.TEXTURE_2D,et,Dt,N.width,N.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,N.width,N.height,J,Tt,N.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,N.width,N.height,0,J,Tt,N.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Dt,zt[0].width,zt[0].height,N.depth);for(let it=0,gt=zt.length;it<gt;it++)if(ht=zt[it],b.format!==Wi)if(J!==null)if(Gt){if(U)if(b.layerUpdates.size>0){const Lt=K0(ht.width,ht.height,b.format,b.type);for(const Ut of b.layerUpdates){const jt=ht.data.subarray(Ut*Lt/ht.data.BYTES_PER_ELEMENT,(Ut+1)*Lt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Ut,ht.width,ht.height,1,J,jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,N.depth,J,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Dt,ht.width,ht.height,N.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ht.width,ht.height,N.depth,J,Tt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Dt,ht.width,ht.height,N.depth,0,J,Tt,ht.data)}else{Gt&&Xt&&e.texStorage2D(n.TEXTURE_2D,et,Dt,zt[0].width,zt[0].height);for(let it=0,gt=zt.length;it<gt;it++)ht=zt[it],b.format!==Wi?J!==null?Gt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,J,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Dt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ht.width,ht.height,J,Tt,ht.data):e.texImage2D(n.TEXTURE_2D,it,Dt,ht.width,ht.height,0,J,Tt,ht.data)}else if(b.isDataArrayTexture)if(Gt){if(Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Dt,N.width,N.height,N.depth),U)if(b.layerUpdates.size>0){const it=K0(N.width,N.height,b.format,b.type);for(const gt of b.layerUpdates){const Lt=N.data.subarray(gt*it/N.data.BYTES_PER_ELEMENT,(gt+1)*it/N.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,N.width,N.height,1,J,Tt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,J,Tt,N.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,N.width,N.height,N.depth,0,J,Tt,N.data);else if(b.isData3DTexture)Gt?(Xt&&e.texStorage3D(n.TEXTURE_3D,et,Dt,N.width,N.height,N.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,J,Tt,N.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,N.width,N.height,N.depth,0,J,Tt,N.data);else if(b.isFramebufferTexture){if(Xt)if(Gt)e.texStorage2D(n.TEXTURE_2D,et,Dt,N.width,N.height);else{let it=N.width,gt=N.height;for(let Lt=0;Lt<et;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Dt,it,gt,0,J,Tt,null),it>>=1,gt>>=1}}else if(zt.length>0){if(Gt&&Xt){const it=ft(zt[0]);e.texStorage2D(n.TEXTURE_2D,et,Dt,it.width,it.height)}for(let it=0,gt=zt.length;it<gt;it++)ht=zt[it],Gt?U&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,J,Tt,ht):e.texImage2D(n.TEXTURE_2D,it,Dt,J,Tt,ht);b.generateMipmaps=!1}else if(Gt){if(Xt){const it=ft(N);e.texStorage2D(n.TEXTURE_2D,et,Dt,it.width,it.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,J,Tt,N)}else e.texImage2D(n.TEXTURE_2D,0,Dt,J,Tt,N);m(b)&&p(Z),pt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function X(C,b,W){if(b.image.length!==6)return;const Z=ut(C,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const Y=i.get(tt);if(tt.version!==Y.__version||Z===!0){e.activeTexture(n.TEXTURE0+W);const pt=je.getPrimaries(je.workingColorSpace),dt=b.colorSpace===Js?null:je.getPrimaries(b.colorSpace),lt=b.colorSpace===Js||pt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,J=[];for(let gt=0;gt<6;gt++)!Mt&&!N?J[gt]=g(b.image[gt],!0,s.maxCubemapSize):J[gt]=N?b.image[gt].image:b.image[gt],J[gt]=ct(b,J[gt]);const Tt=J[0],Dt=o.convert(b.format,b.colorSpace),ht=o.convert(b.type),zt=M(b.internalFormat,Dt,ht,b.colorSpace),Gt=b.isVideoTexture!==!0,Xt=Y.__version===void 0||Z===!0,U=tt.dataReady;let et=D(b,Tt);le(n.TEXTURE_CUBE_MAP,b);let it;if(Mt){Gt&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,et,zt,Tt.width,Tt.height);for(let gt=0;gt<6;gt++){it=J[gt].mipmaps;for(let Lt=0;Lt<it.length;Lt++){const Ut=it[Lt];b.format!==Wi?Dt!==null?Gt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,zt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Ut.width,Ut.height,Dt,ht,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,zt,Ut.width,Ut.height,0,Dt,ht,Ut.data)}}}else{if(it=b.mipmaps,Gt&&Xt){it.length>0&&et++;const gt=ft(J[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,et,zt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(N){Gt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,J[gt].width,J[gt].height,Dt,ht,J[gt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,zt,J[gt].width,J[gt].height,0,Dt,ht,J[gt].data);for(let Lt=0;Lt<it.length;Lt++){const jt=it[Lt].image[gt].image;Gt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,jt.width,jt.height,Dt,ht,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,zt,jt.width,jt.height,0,Dt,ht,jt.data)}}else{Gt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt,ht,J[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,zt,Dt,ht,J[gt]);for(let Lt=0;Lt<it.length;Lt++){const Ut=it[Lt];Gt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,Dt,ht,Ut.image[gt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,zt,Dt,ht,Ut.image[gt])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),Y.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Et(C,b,W,Z,tt,Y){const pt=o.convert(W.format,W.colorSpace),dt=o.convert(W.type),lt=M(W.internalFormat,pt,dt,W.colorSpace),Mt=i.get(b),N=i.get(W);if(N.__renderTarget=b,!Mt.__hasExternalTextures){const J=Math.max(1,b.width>>Y),Tt=Math.max(1,b.height>>Y);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,lt,J,Tt,b.depth,0,pt,dt,null):e.texImage2D(tt,Y,lt,J,Tt,0,pt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ce(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,tt,N.__webglTexture,0,Yt(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,tt,N.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(C,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,Y=_(b.stencilBuffer,tt),pt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=Yt(b);ce(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Y,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,C)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const Y=Z[tt],pt=o.convert(Y.format,Y.colorSpace),dt=o.convert(Y.type),lt=M(Y.internalFormat,pt,dt,Y.colorSpace),Mt=Yt(b);W&&ce(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,lt,b.width,b.height):ce(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,lt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,lt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function St(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Rt(b.depthTexture,0);const tt=Z.__webglTexture,Y=Yt(b);if(b.depthTexture.format===qo)ce(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(b.depthTexture.format===sa)ce(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ft(C){const b=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),At(b.__webglDepthbuffer[Z],C,!1);else{const tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),At(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,b,W){const Z=i.get(C);b!==void 0&&Et(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ft(C)}function ae(C){const b=C.texture,W=i.get(C),Z=i.get(b);C.addEventListener("dispose",P);const tt=C.textures,Y=C.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,a.memory.textures++),Y){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let lt=0;lt<b.mipmaps.length;lt++)W.__webglFramebuffer[dt][lt]=n.createFramebuffer()}else W.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)W.__webglFramebuffer[dt]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(pt)for(let dt=0,lt=tt.length;dt<lt;dt++){const Mt=i.get(tt[dt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const lt=tt[dt];W.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Mt=o.convert(lt.format,lt.colorSpace),N=o.convert(lt.type),J=M(lt.internalFormat,Mt,N,lt.colorSpace,C.isXRRenderTarget===!0),Tt=Yt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,J,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),At(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),le(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Et(W.__webglFramebuffer[dt][lt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,lt);else Et(W.__webglFramebuffer[dt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let dt=0,lt=tt.length;dt<lt;dt++){const Mt=tt[dt],N=i.get(Mt);e.bindTexture(n.TEXTURE_2D,N.__webglTexture),le(n.TEXTURE_2D,Mt),Et(W.__webglFramebuffer,C,Mt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),m(Mt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),le(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Et(W.__webglFramebuffer[lt],C,b,n.COLOR_ATTACHMENT0,dt,lt);else Et(W.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,dt,0);m(b)&&p(dt),e.unbindTexture()}C.depthBuffer&&Ft(C)}function bt(C){const b=C.textures;for(let W=0,Z=b.length;W<Z;W++){const tt=b[W];if(m(tt)){const Y=y(C),pt=i.get(tt).__webglTexture;e.bindTexture(Y,pt),p(Y),e.unbindTexture()}}}const Ot=[],O=[];function ie(C){if(C.samples>0){if(ce(C)===!1){const b=C.textures,W=C.width,Z=C.height;let tt=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(C),dt=b.length>1;if(dt)for(let lt=0;lt<b.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let lt=0;lt<b.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[lt]);const Mt=i.get(b[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Mt,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,tt,n.NEAREST),l===!0&&(Ot.length=0,O.length=0,Ot.push(n.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(Y),O.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let lt=0;lt<b.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[lt]);const Mt=i.get(b[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Yt(C){return Math.min(s.maxSamples,C.samples)}function ce(C){const b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Jt(C){const b=a.render.frame;r.get(C)!==b&&(r.set(C,b),C.update())}function ct(C,b){const W=C.colorSpace,Z=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==ma&&W!==Js&&(je.getTransfer(W)===hn?(Z!==Wi||tt!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=st,this.resetTextureUnits=G,this.setTexture2D=Rt,this.setTexture2DArray=mt,this.setTexture3D=It,this.setTextureCube=nt,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ce}function dy(n,t){function e(i,s=Js){let o;const a=je.getTransfer(s);if(i===hr)return n.UNSIGNED_BYTE;if(i===df)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pp)return n.BYTE;if(i===Lp)return n.SHORT;if(i===ac)return n.UNSIGNED_SHORT;if(i===ff)return n.INT;if(i===ao)return n.UNSIGNED_INT;if(i===Fs)return n.FLOAT;if(i===is)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Up)return n.RGB;if(i===Wi)return n.RGBA;if(i===Fp)return n.LUMINANCE;if(i===Np)return n.LUMINANCE_ALPHA;if(i===qo)return n.DEPTH_COMPONENT;if(i===sa)return n.DEPTH_STENCIL;if(i===mf)return n.RED;if(i===gf)return n.RED_INTEGER;if(i===zp)return n.RG;if(i===vf)return n.RG_INTEGER;if(i===xf)return n.RGBA_INTEGER;if(i===cl||i===ll||i===hl||i===ul)if(a===hn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xu||i===_u||i===yu||i===Mu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===xu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_u)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bu||i===wu||i===Su)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===bu||i===wu)return a===hn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Su)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tu||i===Eu||i===Au||i===Cu||i===Ru||i===Pu||i===Lu||i===Du||i===Iu||i===Uu||i===Fu||i===Nu||i===zu||i===Ou)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Tu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Au)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ru)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Du)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zu)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ou)return a===hn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===Bu||i===ku)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===fl)return a===hn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ku)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Op||i===Hu||i===Gu||i===Vu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class py extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const my={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,a=null;const c=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const r=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=r.position.distanceTo(u.position),d=.02,v=.005;h.inputState.pinching&&f>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(my)))}return c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new an;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`;class xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new vi,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $e({vertexShader:gy,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _y extends ga{constructor(t,e){super();const i=this;let s=null,o=1,a=null,c="local-floor",l=1,h=null,r=null,u=null,f=null,d=null,v=null;const g=new xy,m=e.getContextAttributes();let p=null,y=null;const M=[],_=[],D=new Kt;let I=null;const P=new gi;P.viewport=new Qe;const F=new gi;F.viewport=new Qe;const R=[P,F],x=new py;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let X=M[$];return X===void 0&&(X=new Dh,M[$]=X),X.getTargetRaySpace()},this.getControllerGrip=function($){let X=M[$];return X===void 0&&(X=new Dh,M[$]=X),X.getGripSpace()},this.getHand=function($){let X=M[$];return X===void 0&&(X=new Dh,M[$]=X),X.getHandSpace()};function st($){const X=_.indexOf($.inputSource);if(X===-1)return;const Et=M[X];Et!==void 0&&(Et.update($.inputSource,$.frame,h||a),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function vt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",vt),s.removeEventListener("inputsourceschange",Rt);for(let $=0;$<M.length;$++){const X=_[$];X!==null&&(_[$]=null,M[$].disconnect(X))}z=null,G=null,g.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",vt),s.addEventListener("inputsourceschange",Rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new qi(d.framebufferWidth,d.framebufferHeight,{format:Wi,type:hr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,Et=null,At=null;m.depth&&(At=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=m.stencil?sa:qo,Et=m.stencil?ia:ao);const St={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new qi(f.textureWidth,f.textureHeight,{format:Wi,type:hr,depthTexture:new em(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(c),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Rt($){for(let X=0;X<$.removed.length;X++){const Et=$.removed[X],At=_.indexOf(Et);At>=0&&(_[At]=null,M[At].disconnect(Et))}for(let X=0;X<$.added.length;X++){const Et=$.added[X];let At=_.indexOf(Et);if(At===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=_.length){_.push(Et),At=Ft;break}else if(_[Ft]===null){_[Ft]=Et,At=Ft;break}if(At===-1)break}const St=M[At];St&&St.connect(Et)}}const mt=new L,It=new L;function nt($,X,Et){mt.setFromMatrixPosition(X.matrixWorld),It.setFromMatrixPosition(Et.matrixWorld);const At=mt.distanceTo(It),St=X.projectionMatrix.elements,Ft=Et.projectionMatrix.elements,Wt=St[14]/(St[10]-1),ae=St[14]/(St[10]+1),bt=(St[9]+1)/St[5],Ot=(St[9]-1)/St[5],O=(St[8]-1)/St[0],ie=(Ft[8]+1)/Ft[0],Yt=Wt*O,ce=Wt*ie,Jt=At/(-O+ie),ct=Jt*-O;if(X.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(Jt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),St[10]===-1)$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const ft=Wt+Jt,C=ae+Jt,b=Yt-ct,W=ce+(At-ct),Z=bt*ae/C*ft,tt=Ot*ae/C*ft;$.projectionMatrix.makePerspective(b,W,Z,tt,ft,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function kt($,X){X===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(X.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let X=$.near,Et=$.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),x.near=F.near=P.near=X,x.far=F.far=P.far=Et,(z!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),z=x.near,G=x.far),P.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,x.layers.mask=P.layers.mask|F.layers.mask;const At=$.parent,St=x.cameras;kt(x,At);for(let Ft=0;Ft<St.length;Ft++)kt(St[Ft],At);St.length===2?nt(x,P,F):x.projectionMatrix.copy(P.projectionMatrix),se($,x,At)};function se($,X,Et){Et===null?$.matrix.copy(X.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(X.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(X.projectionMatrix),$.projectionMatrixInverse.copy(X.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ra*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let fe=null;function le($,X){if(r=X.getViewerPose(h||a),v=X,r!==null){const Et=r.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let At=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,At=!0);for(let Ft=0;Ft<Et.length;Ft++){const Wt=Et[Ft];let ae=null;if(d!==null)ae=d.getViewport(Wt);else{const Ot=u.getViewSubImage(f,Wt);ae=Ot.viewport,Ft===0&&(t.setRenderTargetTextures(y,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(y))}let bt=R[Ft];bt===void 0&&(bt=new gi,bt.layers.enable(Ft),bt.viewport=new Qe,R[Ft]=bt),bt.matrix.fromArray(Wt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Wt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ft===0&&(x.matrix.copy(bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),At===!0&&x.cameras.push(bt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Ft=u.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&g.init(t,Ft,s.renderState)}}for(let Et=0;Et<M.length;Et++){const At=_[Et],St=M[Et];At!==null&&St!==void 0&&St.update(At,X,h||a)}fe&&fe($,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),v=null}const ut=new tm;ut.setAnimationLoop(le),this.setAnimationLoop=function($){fe=$},this.dispose=function(){}}}const Br=new Fi,yy=new Ie;function My(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$p(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),r(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(o(m,p),v(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),g(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&c(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,Br.copy(_),Br.x*=-1,Br.y*=-1,Br.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(yy.makeRotationFromEuler(Br)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function c(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function r(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function by(n,t,e,i){let s={},o={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const _=M.program;i.uniformBlockBinding(y,_)}function h(y,M){let _=s[y.id];_===void 0&&(v(y),_=r(y),s[y.id]=_,y.addEventListener("dispose",m));const D=M.program;i.updateUBOMapping(y,D);const I=t.render.frame;o[y.id]!==I&&(f(y),o[y.id]=I)}function r(y){const M=u();y.__bindingPointIndex=M;const _=n.createBuffer(),D=y.__size,I=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,D,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function u(){for(let y=0;y<c;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],_=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,P=_.length;I<P;I++){const F=Array.isArray(_[I])?_[I]:[_[I]];for(let R=0,x=F.length;R<x;R++){const z=F[R];if(d(z,I,R,D)===!0){const G=z.__offset,st=Array.isArray(z.value)?z.value:[z.value];let vt=0;for(let Rt=0;Rt<st.length;Rt++){const mt=st[Rt],It=g(mt);typeof mt=="number"||typeof mt=="boolean"?(z.__data[0]=mt,n.bufferSubData(n.UNIFORM_BUFFER,G+vt,z.__data)):mt.isMatrix3?(z.__data[0]=mt.elements[0],z.__data[1]=mt.elements[1],z.__data[2]=mt.elements[2],z.__data[3]=0,z.__data[4]=mt.elements[3],z.__data[5]=mt.elements[4],z.__data[6]=mt.elements[5],z.__data[7]=0,z.__data[8]=mt.elements[6],z.__data[9]=mt.elements[7],z.__data[10]=mt.elements[8],z.__data[11]=0):(mt.toArray(z.__data,vt),vt+=It.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,M,_,D){const I=y.value,P=M+"_"+_;if(D[P]===void 0)return typeof I=="number"||typeof I=="boolean"?D[P]=I:D[P]=I.clone(),!0;{const F=D[P];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return D[P]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function v(y){const M=y.uniforms;let _=0;const D=16;for(let P=0,F=M.length;P<F;P++){const R=Array.isArray(M[P])?M[P]:[M[P]];for(let x=0,z=R.length;x<z;x++){const G=R[x],st=Array.isArray(G.value)?G.value:[G.value];for(let vt=0,Rt=st.length;vt<Rt;vt++){const mt=st[vt],It=g(mt),nt=_%D,kt=nt%It.boundary,se=nt+kt;_+=kt,se!==0&&D-se<It.storage&&(_+=D-se),G.__data=new Float32Array(It.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=It.storage}}}const I=_%D;return I>0&&(_+=D-I),y.__size=_,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},o={}}return{bind:l,update:h,dispose:p}}class wy{constructor(t={}){const{canvas:e=p1(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:r="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=or,this.toneMappingExposure=1;const _=this;let D=!1,I=0,P=0,F=null,R=-1,x=null;const z=new Qe,G=new Qe;let st=null;const vt=new Vt(0);let Rt=0,mt=e.width,It=e.height,nt=1,kt=null,se=null;const fe=new Qe(0,0,mt,It),le=new Qe(0,0,mt,It);let ut=!1;const $=new yf;let X=!1,Et=!1;const At=new Ie,St=new Ie,Ft=new L,Wt=new Qe,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Ot(){return F===null?nt:1}let O=i;function ie(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:r,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uf}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),O===null){const B="webgl2";if(O=ie(B,w),O===null)throw ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Yt,ce,Jt,ct,ft,C,b,W,Z,tt,Y,pt,dt,lt,Mt,N,J,Tt,Dt,ht,zt,Gt,Xt,U;function et(){Yt=new C2(O),Yt.init(),Gt=new dy(O,Yt),ce=new b2(O,Yt,t,Gt),Jt=new hy(O,Yt),ce.reverseDepthBuffer&&f&&Jt.buffers.depth.setReversed(!0),ct=new L2(O),ft=new $_,C=new fy(O,Yt,Jt,ft,ce,Gt,ct),b=new S2(_),W=new A2(_),Z=new O1(O),Xt=new y2(O,Z),tt=new R2(O,Z,ct,Xt),Y=new I2(O,tt,Z,ct),Dt=new D2(O,ce,C),N=new w2(ft),pt=new K_(_,b,W,Yt,ce,Xt,N),dt=new My(_,ft),lt=new Z_,Mt=new iy(Yt),Tt=new _2(_,b,W,Jt,Y,d,l),J=new cy(_,Y,ce),U=new by(O,ct,ce,Jt),ht=new M2(O,Yt,ct),zt=new P2(O,Yt,ct),ct.programs=pt.programs,_.capabilities=ce,_.extensions=Yt,_.properties=ft,_.renderLists=lt,_.shadowMap=J,_.state=Jt,_.info=ct}et();const it=new _y(_,O);this.xr=it,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(w){w!==void 0&&(nt=w,this.setSize(mt,It,!1))},this.getSize=function(w){return w.set(mt,It)},this.setSize=function(w,B,q=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}mt=w,It=B,e.width=Math.floor(w*nt),e.height=Math.floor(B*nt),q===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(mt*nt,It*nt).floor()},this.setDrawingBufferSize=function(w,B,q){mt=w,It=B,nt=q,e.width=Math.floor(w*q),e.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,B,q,ot){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,B,q,ot),Jt.viewport(z.copy(fe).multiplyScalar(nt).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,B,q,ot){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,B,q,ot),Jt.scissor(G.copy(le).multiplyScalar(nt).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){Jt.setScissorTest(ut=w)},this.setOpaqueSort=function(w){kt=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,B=!0,q=!0){let ot=0;if(w){let j=!1;if(F!==null){const A=F.texture.format;j=A===xf||A===vf||A===gf}if(j){const A=F.texture.type,k=A===hr||A===ao||A===ac||A===ia||A===df||A===pf,rt=Tt.getClearColor(),yt=Tt.getClearAlpha(),_t=rt.r,E=rt.g,T=rt.b;k?(v[0]=_t,v[1]=E,v[2]=T,v[3]=yt,O.clearBufferuiv(O.COLOR,0,v)):(g[0]=_t,g[1]=E,g[2]=T,g[3]=yt,O.clearBufferiv(O.COLOR,0,g))}else ot|=O.COLOR_BUFFER_BIT}B&&(ot|=O.DEPTH_BUFFER_BIT),q&&(ot|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),lt.dispose(),Mt.dispose(),ft.dispose(),b.dispose(),W.dispose(),Y.dispose(),Xt.dispose(),U.dispose(),pt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Zt),it.removeEventListener("sessionend",Pe),dn.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=ct.autoReset,B=J.enabled,q=J.autoUpdate,ot=J.needsUpdate,j=J.type;et(),ct.autoReset=w,J.enabled=B,J.autoUpdate=q,J.needsUpdate=ot,J.type=j}function Ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const B=w.target;B.removeEventListener("dispose",jt),pe(B)}function pe(w){Ae(w),ft.remove(w)}function Ae(w){const B=ft.get(w).programs;B!==void 0&&(B.forEach(function(q){pt.releaseProgram(q)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,ot,j,A){B===null&&(B=ae);const k=j.isMesh&&j.matrixWorld.determinant()<0,rt=Q(w,B,q,ot,j);Jt.setMaterial(ot,k);let yt=q.index,_t=1;if(ot.wireframe===!0){if(yt=tt.getWireframeAttribute(q),yt===void 0)return;_t=2}const E=q.drawRange,T=q.attributes.position;let H=E.start*_t,S=(E.start+E.count)*_t;A!==null&&(H=Math.max(H,A.start*_t),S=Math.min(S,(A.start+A.count)*_t)),yt!==null?(H=Math.max(H,0),S=Math.min(S,yt.count)):T!=null&&(H=Math.max(H,0),S=Math.min(S,T.count));const at=S-H;if(at<0||at===1/0)return;Xt.setup(j,ot,rt,q,yt);let V,xt=ht;if(yt!==null&&(V=Z.get(yt),xt=zt,xt.setIndex(V)),j.isMesh)ot.wireframe===!0?(Jt.setLineWidth(ot.wireframeLinewidth*Ot()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(j.isLine){let K=ot.linewidth;K===void 0&&(K=1),Jt.setLineWidth(K*Ot()),j.isLineSegments?xt.setMode(O.LINES):j.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else j.isPoints?xt.setMode(O.POINTS):j.isSprite&&xt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const K=j._multiDrawStarts,qt=j._multiDrawCounts,Pt=j._multiDrawCount,Nt=yt?Z.get(yt).bytesPerElement:1,ne=ft.get(ot).currentProgram.getUniforms();for(let te=0;te<Pt;te++)ne.setValue(O,"_gl_DrawID",te),xt.render(K[te]/Nt,qt[te])}else if(j.isInstancedMesh)xt.renderInstances(H,at,j.count);else if(q.isInstancedBufferGeometry){const K=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,qt=Math.min(q.instanceCount,K);xt.renderInstances(H,at,qt)}else xt.render(H,at)};function Te(w,B,q){w.transparent===!0&&w.side===Xe&&w.forceSinglePass===!1?(w.side=Qn,w.needsUpdate=!0,pn(w,B,q),w.side=Os,w.needsUpdate=!0,pn(w,B,q),w.side=Xe):pn(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),p=Mt.get(q),p.init(B),M.push(p),q.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),w!==q&&w.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const ot=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const A=j.material;if(A)if(Array.isArray(A))for(let k=0;k<A.length;k++){const rt=A[k];Te(rt,q,j),ot.add(rt)}else Te(A,q,j),ot.add(A)}),M.pop(),p=null,ot},this.compileAsync=function(w,B,q=null){const ot=this.compile(w,B,q);return new Promise(j=>{function A(){if(ot.forEach(function(k){ft.get(k).currentProgram.isReady()&&ot.delete(k)}),ot.size===0){j(w);return}setTimeout(A,10)}Yt.get("KHR_parallel_shader_compile")!==null?A():setTimeout(A,10)})};let tn=null;function Ct(w){tn&&tn(w)}function Zt(){dn.stop()}function Pe(){dn.start()}const dn=new tm;dn.setAnimationLoop(Ct),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(w){tn=w,it.setAnimationLoop(w),w===null?dn.stop():dn.start()},it.addEventListener("sessionstart",Zt),it.addEventListener("sessionend",Pe),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(B),B=it.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,B,F),p=Mt.get(w,M.length),p.init(B),M.push(p),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(St),Et=this.localClippingEnabled,X=N.init(this.clippingPlanes,Et),m=lt.get(w,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){const A=_.xr.getDepthSensingMesh();A!==null&&Xn(A,B,-1/0,_.sortObjects)}Xn(w,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(kt,se),bt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,bt&&Tt.addToRenderList(m,w),this.info.render.frame++,X===!0&&N.beginShadows();const q=p.state.shadowsArray;J.render(q,w,B),X===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=m.opaque,j=m.transmissive;if(p.setupLights(),B.isArrayCamera){const A=B.cameras;if(j.length>0)for(let k=0,rt=A.length;k<rt;k++){const yt=A[k];_i(ot,j,w,yt)}bt&&Tt.render(w);for(let k=0,rt=A.length;k<rt;k++){const yt=A[k];Ni(m,w,yt,yt.viewport)}}else j.length>0&&_i(ot,j,w,B),bt&&Tt.render(w),Ni(m,w,B);F!==null&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(_,w,B),Xt.resetDefaultState(),R=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],X===!0&&N.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Xn(w,B,q,ot){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){ot&&Wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const k=Y.update(w),rt=w.material;rt.visible&&m.push(w,k,rt,q,Wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const k=Y.update(w),rt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Wt.copy(w.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Wt.copy(k.boundingSphere.center)),Wt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(rt)){const yt=k.groups;for(let _t=0,E=yt.length;_t<E;_t++){const T=yt[_t],H=rt[T.materialIndex];H&&H.visible&&m.push(w,k,H,q,Wt.z,T)}}else rt.visible&&m.push(w,k,rt,q,Wt.z,null)}}const A=w.children;for(let k=0,rt=A.length;k<rt;k++)Xn(A[k],B,q,ot)}function Ni(w,B,q,ot){const j=w.opaque,A=w.transmissive,k=w.transparent;p.setupLightsView(q),X===!0&&N.setGlobalState(_.clippingPlanes,q),ot&&Jt.viewport(z.copy(ot)),j.length>0&&Ln(j,B,q),A.length>0&&Ln(A,B,q),k.length>0&&Ln(k,B,q),Jt.buffers.depth.setTest(!0),Jt.buffers.depth.setMask(!0),Jt.buffers.color.setMask(!0),Jt.setPolygonOffset(!1)}function _i(w,B,q,ot){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ot.id]===void 0&&(p.state.transmissionRenderTarget[ot.id]=new qi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?is:hr,minFilter:Qr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const A=p.state.transmissionRenderTarget[ot.id],k=ot.viewport||z;A.setSize(k.z,k.w);const rt=_.getRenderTarget();_.setRenderTarget(A),_.getClearColor(vt),Rt=_.getClearAlpha(),Rt<1&&_.setClearColor(16777215,.5),_.clear(),bt&&Tt.render(q);const yt=_.toneMapping;_.toneMapping=or;const _t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),p.setupLightsView(ot),X===!0&&N.setGlobalState(_.clippingPlanes,ot),Ln(w,q,ot),C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let E=!1;for(let T=0,H=B.length;T<H;T++){const S=B[T],at=S.object,V=S.geometry,xt=S.material,K=S.group;if(xt.side===Xe&&at.layers.test(ot.layers)){const qt=xt.side;xt.side=Qn,xt.needsUpdate=!0,Le(at,q,ot,V,xt,K),xt.side=qt,xt.needsUpdate=!0,E=!0}}E===!0&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A))}_.setRenderTarget(rt),_.setClearColor(vt,Rt),_t!==void 0&&(ot.viewport=_t),_.toneMapping=yt}function Ln(w,B,q){const ot=B.isScene===!0?B.overrideMaterial:null;for(let j=0,A=w.length;j<A;j++){const k=w[j],rt=k.object,yt=k.geometry,_t=ot===null?k.material:ot,E=k.group;rt.layers.test(q.layers)&&Le(rt,B,q,yt,_t,E)}}function Le(w,B,q,ot,j,A){w.onBeforeRender(_,B,q,ot,j,A),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(_,B,q,ot,w,A),j.transparent===!0&&j.side===Xe&&j.forceSinglePass===!1?(j.side=Qn,j.needsUpdate=!0,_.renderBufferDirect(q,B,ot,j,w,A),j.side=Os,j.needsUpdate=!0,_.renderBufferDirect(q,B,ot,j,w,A),j.side=Xe):_.renderBufferDirect(q,B,ot,j,w,A),w.onAfterRender(_,B,q,ot,j,A)}function pn(w,B,q){B.isScene!==!0&&(B=ae);const ot=ft.get(w),j=p.state.lights,A=p.state.shadowsArray,k=j.state.version,rt=pt.getParameters(w,j.state,A,B,q),yt=pt.getProgramCacheKey(rt);let _t=ot.programs;ot.environment=w.isMeshStandardMaterial?B.environment:null,ot.fog=B.fog,ot.envMap=(w.isMeshStandardMaterial?W:b).get(w.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,_t===void 0&&(w.addEventListener("dispose",jt),_t=new Map,ot.programs=_t);let E=_t.get(yt);if(E!==void 0){if(ot.currentProgram===E&&ot.lightsStateVersion===k)return Oi(w,rt),E}else rt.uniforms=pt.getUniforms(w),w.onBeforeCompile(rt,_),E=pt.acquireProgram(rt,yt),_t.set(yt,E),ot.uniforms=rt.uniforms;const T=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(T.clippingPlanes=N.uniform),Oi(w,rt),ot.needsLights=ue(w),ot.lightsStateVersion=k,ot.needsLights&&(T.ambientLightColor.value=j.state.ambient,T.lightProbe.value=j.state.probe,T.directionalLights.value=j.state.directional,T.directionalLightShadows.value=j.state.directionalShadow,T.spotLights.value=j.state.spot,T.spotLightShadows.value=j.state.spotShadow,T.rectAreaLights.value=j.state.rectArea,T.ltc_1.value=j.state.rectAreaLTC1,T.ltc_2.value=j.state.rectAreaLTC2,T.pointLights.value=j.state.point,T.pointLightShadows.value=j.state.pointShadow,T.hemisphereLights.value=j.state.hemi,T.directionalShadowMap.value=j.state.directionalShadowMap,T.directionalShadowMatrix.value=j.state.directionalShadowMatrix,T.spotShadowMap.value=j.state.spotShadowMap,T.spotLightMatrix.value=j.state.spotLightMatrix,T.spotLightMap.value=j.state.spotLightMap,T.pointShadowMap.value=j.state.pointShadowMap,T.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=E,ot.uniformsList=null,E}function zi(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=dl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Oi(w,B){const q=ft.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Q(w,B,q,ot,j){B.isScene!==!0&&(B=ae),C.resetTextureUnits();const A=B.fog,k=ot.isMeshStandardMaterial?B.environment:null,rt=F===null?_.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ma,yt=(ot.isMeshStandardMaterial?W:b).get(ot.envMap||k),_t=ot.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,E=!!q.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),T=!!q.morphAttributes.position,H=!!q.morphAttributes.normal,S=!!q.morphAttributes.color;let at=or;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(at=_.toneMapping);const V=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=V!==void 0?V.length:0,K=ft.get(ot),qt=p.state.lights;if(X===!0&&(Et===!0||w!==x)){const he=w===x&&ot.id===R;N.setState(ot,w,he)}let Pt=!1;ot.version===K.__version?(K.needsLights&&K.lightsStateVersion!==qt.state.version||K.outputColorSpace!==rt||j.isBatchedMesh&&K.batching===!1||!j.isBatchedMesh&&K.batching===!0||j.isBatchedMesh&&K.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&K.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&K.instancing===!1||!j.isInstancedMesh&&K.instancing===!0||j.isSkinnedMesh&&K.skinning===!1||!j.isSkinnedMesh&&K.skinning===!0||j.isInstancedMesh&&K.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&K.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&K.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&K.instancingMorph===!1&&j.morphTexture!==null||K.envMap!==yt||ot.fog===!0&&K.fog!==A||K.numClippingPlanes!==void 0&&(K.numClippingPlanes!==N.numPlanes||K.numIntersection!==N.numIntersection)||K.vertexAlphas!==_t||K.vertexTangents!==E||K.morphTargets!==T||K.morphNormals!==H||K.morphColors!==S||K.toneMapping!==at||K.morphTargetsCount!==xt)&&(Pt=!0):(Pt=!0,K.__version=ot.version);let Nt=K.currentProgram;Pt===!0&&(Nt=pn(ot,B,j));let ne=!1,te=!1,me=!1;const oe=Nt.getUniforms(),Ht=K.uniforms;if(Jt.useProgram(Nt.program)&&(ne=!0,te=!0,me=!0),ot.id!==R&&(R=ot.id,te=!0),ne||x!==w){Jt.buffers.depth.getReversed()?(At.copy(w.projectionMatrix),g1(At),v1(At),oe.setValue(O,"projectionMatrix",At)):oe.setValue(O,"projectionMatrix",w.projectionMatrix),oe.setValue(O,"viewMatrix",w.matrixWorldInverse);const De=oe.map.cameraPosition;De!==void 0&&De.setValue(O,Ft.setFromMatrixPosition(w.matrixWorld)),ce.logarithmicDepthBuffer&&oe.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&oe.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,te=!0,me=!0)}if(j.isSkinnedMesh){oe.setOptional(O,j,"bindMatrix"),oe.setOptional(O,j,"bindMatrixInverse");const he=j.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),oe.setValue(O,"boneTexture",he.boneTexture,C))}j.isBatchedMesh&&(oe.setOptional(O,j,"batchingTexture"),oe.setValue(O,"batchingTexture",j._matricesTexture,C),oe.setOptional(O,j,"batchingIdTexture"),oe.setValue(O,"batchingIdTexture",j._indirectTexture,C),oe.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&oe.setValue(O,"batchingColorTexture",j._colorsTexture,C));const re=q.morphAttributes;if((re.position!==void 0||re.normal!==void 0||re.color!==void 0)&&Dt.update(j,q,Nt),(te||K.receiveShadow!==j.receiveShadow)&&(K.receiveShadow=j.receiveShadow,oe.setValue(O,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Ht.envMap.value=yt,Ht.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&B.environment!==null&&(Ht.envMapIntensity.value=B.environmentIntensity),te&&(oe.setValue(O,"toneMappingExposure",_.toneMappingExposure),K.needsLights&&Qt(Ht,me),A&&ot.fog===!0&&dt.refreshFogUniforms(Ht,A),dt.refreshMaterialUniforms(Ht,ot,nt,It,p.state.transmissionRenderTarget[w.id]),dl.upload(O,zi(K),Ht,C)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(dl.upload(O,zi(K),Ht,C),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&oe.setValue(O,"center",j.center),oe.setValue(O,"modelViewMatrix",j.modelViewMatrix),oe.setValue(O,"normalMatrix",j.normalMatrix),oe.setValue(O,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const he=ot.uniformsGroups;for(let De=0,_e=he.length;De<_e;De++){const Ue=he[De];U.update(Ue,Nt),U.bind(Ue,Nt)}}return Nt}function Qt(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function ue(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,B,q){ft.get(w.texture).__webglTexture=B,ft.get(w.depthTexture).__webglTexture=q;const ot=ft.get(w);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=q===void 0,ot.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const q=ft.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){F=w,I=B,P=q;let ot=!0,j=null,A=!1,k=!1;if(w){const yt=ft.get(w);if(yt.__useDefaultFramebuffer!==void 0)Jt.bindFramebuffer(O.FRAMEBUFFER,null),ot=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(yt.__hasExternalTextures)C.rebindTextures(w,ft.get(w.texture).__webglTexture,ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const T=w.depthTexture;if(yt.__boundDepthTexture!==T){if(T!==null&&ft.has(T)&&(w.width!==T.image.width||w.height!==T.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(k=!0);const E=ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(E[B])?j=E[B][q]:j=E[B],A=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?j=ft.get(w).__webglMultisampledFramebuffer:Array.isArray(E)?j=E[q]:j=E,z.copy(w.viewport),G.copy(w.scissor),st=w.scissorTest}else z.copy(fe).multiplyScalar(nt).floor(),G.copy(le).multiplyScalar(nt).floor(),st=ut;if(Jt.bindFramebuffer(O.FRAMEBUFFER,j)&&ot&&Jt.drawBuffers(w,j),Jt.viewport(z),Jt.scissor(G),Jt.setScissorTest(st),A){const yt=ft.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,q)}else if(k){const yt=ft.get(w.texture),_t=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,q||0,_t)}R=-1},this.readRenderTargetPixels=function(w,B,q,ot,j,A,k){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&k!==void 0&&(rt=rt[k]),rt){Jt.bindFramebuffer(O.FRAMEBUFFER,rt);try{const yt=w.texture,_t=yt.format,E=yt.type;if(!ce.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(E)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-ot&&q>=0&&q<=w.height-j&&O.readPixels(B,q,ot,j,Gt.convert(_t),Gt.convert(E),A)}finally{const yt=F!==null?ft.get(F).__webglFramebuffer:null;Jt.bindFramebuffer(O.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,ot,j,A,k){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&k!==void 0&&(rt=rt[k]),rt){const yt=w.texture,_t=yt.format,E=yt.type;if(!ce.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(E))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-ot&&q>=0&&q<=w.height-j){Jt.bindFramebuffer(O.FRAMEBUFFER,rt);const T=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,T),O.bufferData(O.PIXEL_PACK_BUFFER,A.byteLength,O.STREAM_READ),O.readPixels(B,q,ot,j,Gt.convert(_t),Gt.convert(E),0);const H=F!==null?ft.get(F).__webglFramebuffer:null;Jt.bindFramebuffer(O.FRAMEBUFFER,H);const S=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await m1(O,S,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,T),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,A),O.deleteBuffer(T),O.deleteSync(S),A}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,B=null,q=0){w.isTexture!==!0&&(ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const ot=Math.pow(2,-q),j=Math.floor(w.image.width*ot),A=Math.floor(w.image.height*ot),k=B!==null?B.x:0,rt=B!==null?B.y:0;C.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,k,rt,j,A),Jt.unbindTexture()},this.copyTextureToTexture=function(w,B,q=null,ot=null,j=0){w.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,w=arguments[1],B=arguments[2],j=arguments[3]||0,q=null);let A,k,rt,yt,_t,E,T,H,S;const at=w.isCompressedTexture?w.mipmaps[j]:w.image;q!==null?(A=q.max.x-q.min.x,k=q.max.y-q.min.y,rt=q.isBox3?q.max.z-q.min.z:1,yt=q.min.x,_t=q.min.y,E=q.isBox3?q.min.z:0):(A=at.width,k=at.height,rt=at.depth||1,yt=0,_t=0,E=0),ot!==null?(T=ot.x,H=ot.y,S=ot.z):(T=0,H=0,S=0);const V=Gt.convert(B.format),xt=Gt.convert(B.type);let K;B.isData3DTexture?(C.setTexture3D(B,0),K=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),K=O.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),K=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const qt=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Nt=O.getParameter(O.UNPACK_SKIP_PIXELS),ne=O.getParameter(O.UNPACK_SKIP_ROWS),te=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,at.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,_t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E);const me=w.isDataArrayTexture||w.isData3DTexture,oe=B.isDataArrayTexture||B.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ht=ft.get(w),re=ft.get(B),he=ft.get(Ht.__renderTarget),De=ft.get(re.__renderTarget);Jt.bindFramebuffer(O.READ_FRAMEBUFFER,he.__webglFramebuffer),Jt.bindFramebuffer(O.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let _e=0;_e<rt;_e++)me&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.get(w).__webglTexture,j,E+_e),w.isDepthTexture?(oe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.get(B).__webglTexture,j,S+_e),O.blitFramebuffer(yt,_t,A,k,T,H,A,k,O.DEPTH_BUFFER_BIT,O.NEAREST)):oe?O.copyTexSubImage3D(K,j,T,H,S+_e,yt,_t,A,k):O.copyTexSubImage2D(K,j,T,H,S+_e,yt,_t,A,k);Jt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Jt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(K,j,T,H,S,A,k,rt,V,xt,at.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(K,j,T,H,S,A,k,rt,V,at.data):O.texSubImage3D(K,j,T,H,S,A,k,rt,V,xt,at):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,T,H,A,k,V,xt,at.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,T,H,at.width,at.height,V,at.data):O.texSubImage2D(O.TEXTURE_2D,j,T,H,A,k,V,xt,at);O.pixelStorei(O.UNPACK_ROW_LENGTH,qt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ne),O.pixelStorei(O.UNPACK_SKIP_IMAGES,te),j===0&&B.generateMipmaps&&O.generateMipmap(K),Jt.unbindTexture()},this.copyTextureToTexture3D=function(w,B,q=null,ot=null,j=0){return w.isTexture!==!0&&(ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,ot=arguments[1]||null,w=arguments[2],B=arguments[3],j=arguments[4]||0),ka('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,q,ot,j)},this.initRenderTarget=function(w){ft.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Jt.unbindTexture()},this.resetState=function(){I=0,P=0,F=null,Jt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=je._getDrawingBufferColorSpace(t),e.unpackColorSpace=je._getUnpackColorSpace()}}class wf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new wf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vc extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=zs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bi=new L;class Cl{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bi.fromBufferAttribute(this,e),bi.applyMatrix4(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bi.fromBufferAttribute(this,e),bi.applyNormalMatrix(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bi.fromBufferAttribute(this,e),bi.transformDirection(t),this.setXYZ(e,bi.x,bi.y,bi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ms(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ms(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ms(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ms(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),o=cn(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new xn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Cl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ja extends fo{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Lo;const Aa=new L,Do=new L,Io=new L,Uo=new Kt,Ca=new Kt,om=new Ie,Hc=new L,Ra=new L,Gc=new L,$0=new Kt,Ih=new Kt,j0=new Kt;class pl extends vn{constructor(t=new ja){if(super(),this.isSprite=!0,this.type="Sprite",Lo===void 0){Lo=new Ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sy(e,5);Lo.setIndex([0,1,2,0,2,3]),Lo.setAttribute("position",new Cl(i,3,0,!1)),Lo.setAttribute("uv",new Cl(i,2,3,!1))}this.geometry=Lo,this.material=t,this.center=new Kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Do.setFromMatrixScale(this.matrixWorld),om.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Io.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-Io.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const a=this.center;Vc(Hc.set(-.5,-.5,0),Io,a,Do,s,o),Vc(Ra.set(.5,-.5,0),Io,a,Do,s,o),Vc(Gc.set(.5,.5,0),Io,a,Do,s,o),$0.set(0,0),Ih.set(1,0),j0.set(1,1);let c=t.ray.intersectTriangle(Hc,Ra,Gc,!1,Aa);if(c===null&&(Vc(Ra.set(-.5,.5,0),Io,a,Do,s,o),Ih.set(0,1),c=t.ray.intersectTriangle(Hc,Gc,Ra,!1,Aa),c===null))return;const l=t.ray.origin.distanceTo(Aa);l<t.near||l>t.far||e.push({distance:l,point:Aa.clone(),uv:ts.getInterpolation(Aa,Hc,Ra,Gc,$0,Ih,j0,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vc(n,t,e,i,s,o){Uo.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ca.x=o*Uo.x-s*Uo.y,Ca.y=s*Uo.x+o*Uo.y):Ca.copy(Uo),n.copy(t),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(om)}class Sf extends vi{constructor(t=null,e=1,i=1,s,o,a,c,l,h=Ai,r=Ai,u,f){super(null,a,c,l,h,r,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs extends xn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fo=new Ie,Z0=new Ie,Wc=[],J0=new uo,Ty=new Ie,Pa=new ye,La=new va;class qu extends ye{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ty)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new uo),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fo),J0.copy(t.boundingBox).applyMatrix4(Fo),this.boundingBox.union(J0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fo),La.copy(t.boundingSphere).applyMatrix4(Fo),this.boundingSphere.union(La)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,a=t*o+1;for(let c=0;c<i.length;c++)i[c]=s[a+c]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),t.ray.intersectsSphere(La)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Fo),Z0.multiplyMatrices(i,Fo),Pa.matrixWorld=Z0,Pa.raycast(t,Wc);for(let a=0,c=Wc.length;a<c;a++){const l=Wc[a];l.instanceId=o,l.object=this,e.push(l)}Wc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sf(new Float32Array(s*this.count),s,this.count,mf,Fs));const o=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const c=this.geometry.morphTargetsRelative?1:1-a,l=s*t;o[l]=c,o.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class am extends fo{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q0=new Ie,Yu=new Wp,Xc=new va,qc=new L;class Ey extends vn{constructor(t=new Ze,e=new am){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),Xc.radius+=o,t.ray.intersectsSphere(Xc)===!1)return;Q0.copy(s).invert(),Yu.copy(t.ray).applyMatrix4(Q0);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,g=d;v<g;v++){const m=h.getX(v);qc.fromBufferAttribute(u,m),td(qc,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let v=f,g=d;v<g;v++)qc.fromBufferAttribute(u,v),td(qc,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function td(n,t,e,i,s,o,a){const c=Yu.distanceSqToPoint(n);if(c<e){const l=new L;Yu.closestPointToPoint(n,l),l.applyMatrix4(i);const h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ql extends vi{constructor(t,e,i,s,o,a,c,l,h){super(t,e,i,s,o,a,c,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let a;e?a=e:a=t*i[o-1];let c=0,l=o-1,h;for(;c<=l;)if(s=Math.floor(c+(l-c)/2),h=i[s]-a,h<0)c=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(o-1);const r=i[s],f=i[s+1]-r,d=(a-r)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),c=this.getPoint(o),l=e||(a.isVector2?new Kt:new L);return l.copy(c).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],o=[],a=[],c=new L,l=new Ie;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new L)}o[0]=new L,a[0]=new L;let h=Number.MAX_VALUE;const r=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);r<=h&&(h=r,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),c.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],c),a[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),a[d]=a[d-1].clone(),c.crossVectors(s[d-1],s[d]),c.length()>Number.EPSILON){c.normalize();const v=Math.acos(kn(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(c,v))}a[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(kn(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(c.crossVectors(o[0],o[t]))>0&&(d=-d);for(let v=1;v<=t;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tf extends ks{constructor(t=0,e=0,i=1,s=1,o=0,a=Math.PI*2,c=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=c,this.aRotation=l}getPoint(t,e=new Kt){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const c=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const r=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=h-this.aY;l=f*r-d*u+this.aX,h=f*u+d*r+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ay extends Tf{constructor(t,e,i,s,o,a){super(t,e,i,i,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ef(){let n=0,t=0,e=0,i=0;function s(o,a,c,l){n=o,t=c,e=-3*o+3*a-2*c-l,i=2*o-2*a+c+l}return{initCatmullRom:function(o,a,c,l,h){s(a,c,h*(c-o),h*(l-a))},initNonuniformCatmullRom:function(o,a,c,l,h,r,u){let f=(a-o)/h-(c-o)/(h+r)+(c-a)/r,d=(c-a)/r-(l-a)/(r+u)+(l-c)/u;f*=r,d*=r,s(a,c,f,d)},calc:function(o){const a=o*o,c=a*o;return n+t*o+e*a+i*c}}}const Yc=new L,Uh=new Ef,Fh=new Ef,Nh=new Ef;class br extends ks{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let c=Math.floor(a),l=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:l===0&&c===o-1&&(c=o-2,l=1);let h,r;this.closed||c>0?h=s[(c-1)%o]:(Yc.subVectors(s[0],s[1]).add(s[0]),h=Yc);const u=s[c%o],f=s[(c+1)%o];if(this.closed||c+2<o?r=s[(c+2)%o]:(Yc.subVectors(s[o-1],s[o-2]).add(s[o-1]),r=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(r),d);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),Uh.initNonuniformCatmullRom(h.x,u.x,f.x,r.x,v,g,m),Fh.initNonuniformCatmullRom(h.y,u.y,f.y,r.y,v,g,m),Nh.initNonuniformCatmullRom(h.z,u.z,f.z,r.z,v,g,m)}else this.curveType==="catmullrom"&&(Uh.initCatmullRom(h.x,u.x,f.x,r.x,this.tension),Fh.initCatmullRom(h.y,u.y,f.y,r.y,this.tension),Nh.initCatmullRom(h.z,u.z,f.z,r.z,this.tension));return i.set(Uh.calc(l),Fh.calc(l),Nh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ed(n,t,e,i,s){const o=(i-t)*.5,a=(s-e)*.5,c=n*n,l=n*c;return(2*e-2*i+o+a)*l+(-3*e+3*i-2*o-a)*c+o*n+e}function Cy(n,t){const e=1-n;return e*e*t}function Ry(n,t){return 2*(1-n)*n*t}function Py(n,t){return n*n*t}function Za(n,t,e,i){return Cy(n,t)+Ry(n,e)+Py(n,i)}function Ly(n,t){const e=1-n;return e*e*e*t}function Dy(n,t){const e=1-n;return 3*e*e*n*t}function Iy(n,t){return 3*(1-n)*n*n*t}function Uy(n,t){return n*n*n*t}function Ja(n,t,e,i,s){return Ly(n,t)+Dy(n,e)+Iy(n,i)+Uy(n,s)}class cm extends ks{constructor(t=new Kt,e=new Kt,i=new Kt,s=new Kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Kt){const i=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return i.set(Ja(t,s.x,o.x,a.x,c.x),Ja(t,s.y,o.y,a.y,c.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fy extends ks{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,a=this.v2,c=this.v3;return i.set(Ja(t,s.x,o.x,a.x,c.x),Ja(t,s.y,o.y,a.y,c.y),Ja(t,s.z,o.z,a.z,c.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lm extends ks{constructor(t=new Kt,e=new Kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Kt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ny extends ks{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends ks{constructor(t=new Kt,e=new Kt,i=new Kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Kt){const i=e,s=this.v0,o=this.v1,a=this.v2;return i.set(Za(t,s.x,o.x,a.x),Za(t,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends ks{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,a=this.v2;return i.set(Za(t,s.x,o.x,a.x),Za(t,s.y,o.y,a.y),Za(t,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends ks{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Kt){const i=e,s=this.points,o=(s.length-1)*t,a=Math.floor(o),c=o-a,l=s[a===0?a:a-1],h=s[a],r=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ed(c,l.x,h.x,r.x,u.x),ed(c,l.y,h.y,r.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Kt().fromArray(s))}return this}}var Rl=Object.freeze({__proto__:null,ArcCurve:Ay,CatmullRomCurve3:br,CubicBezierCurve:cm,CubicBezierCurve3:Fy,EllipseCurve:Tf,LineCurve:lm,LineCurve3:Ny,QuadraticBezierCurve:hm,QuadraticBezierCurve3:um,SplineCurve:fm});class zy extends ks{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const a=s[o]-i,c=this.curves[o],l=c.getLength(),h=l===0?0:1-a/l;return c.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],c=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(c);for(let h=0;h<l.length;h++){const r=l[h];i&&i.equals(r)||(e.push(r),i=r)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Rl[s.type]().fromJSON(s))}return this}}class nd extends zy{constructor(t){super(),this.type="Path",this.currentPoint=new Kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new lm(this.currentPoint.clone(),new Kt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new hm(this.currentPoint.clone(),new Kt(t,e),new Kt(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,a){const c=new cm(this.currentPoint.clone(),new Kt(t,e),new Kt(i,s),new Kt(o,a));return this.curves.push(c),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new fm(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,a){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+c,e+l,i,s,o,a),this}absarc(t,e,i,s,o,a){return this.absellipse(t,e,i,i,s,o,a),this}ellipse(t,e,i,s,o,a,c,l){const h=this.currentPoint.x,r=this.currentPoint.y;return this.absellipse(t+h,e+r,i,s,o,a,c,l),this}absellipse(t,e,i,s,o,a,c,l){const h=new Tf(t,e,i,s,o,a,c,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const r=h.getPoint(1);return this.currentPoint.copy(r),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ko extends Ze{constructor(t=[new Kt(0,-.5),new Kt(.5,0),new Kt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=kn(s,0,Math.PI*2);const o=[],a=[],c=[],l=[],h=[],r=1/e,u=new L,f=new Kt,d=new L,v=new L,g=new L;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(v)}for(let y=0;y<=e;y++){const M=i+y*r*s,_=Math.sin(M),D=Math.cos(M);for(let I=0;I<=t.length-1;I++){u.x=t[I].x*_,u.y=t[I].y,u.z=t[I].x*D,a.push(u.x,u.y,u.z),f.x=y/e,f.y=I/(t.length-1),c.push(f.x,f.y);const P=l[3*I+0]*_,F=l[3*I+1],R=l[3*I+0]*D;h.push(P,F,R)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const _=M+y*t.length,D=_,I=_+t.length,P=_+t.length+1,F=_+1;o.push(D,I,F),o.push(P,F,I)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(c,2)),this.setAttribute("normal",new Me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.points,t.segments,t.phiStart,t.phiLength)}}class gs extends Ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],a=[],c=[],l=[],h=new L,r=new Kt;a.push(0,0,0),c.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),c.push(0,0,1),r.x=(a[f]/t+1)/2,r.y=(a[f+1]/t+1)/2,l.push(r.x,r.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class un extends Ze{constructor(t=1,e=1,i=1,s=32,o=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:l};const h=this;s=Math.floor(s),o=Math.floor(o);const r=[],u=[],f=[],d=[];let v=0;const g=[],m=i/2;let p=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(r),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function y(){const _=new L,D=new L;let I=0;const P=(e-t)/i;for(let F=0;F<=o;F++){const R=[],x=F/o,z=x*(e-t)+t;for(let G=0;G<=s;G++){const st=G/s,vt=st*l+c,Rt=Math.sin(vt),mt=Math.cos(vt);D.x=z*Rt,D.y=-x*i+m,D.z=z*mt,u.push(D.x,D.y,D.z),_.set(Rt,P,mt).normalize(),f.push(_.x,_.y,_.z),d.push(st,1-x),R.push(v++)}g.push(R)}for(let F=0;F<s;F++)for(let R=0;R<o;R++){const x=g[R][F],z=g[R+1][F],G=g[R+1][F+1],st=g[R][F+1];(t>0||R!==0)&&(r.push(x,z,st),I+=3),(e>0||R!==o-1)&&(r.push(z,G,st),I+=3)}h.addGroup(p,I,0),p+=I}function M(_){const D=v,I=new Kt,P=new L;let F=0;const R=_===!0?t:e,x=_===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),v++;const z=v;for(let G=0;G<=s;G++){const vt=G/s*l+c,Rt=Math.cos(vt),mt=Math.sin(vt);P.x=R*mt,P.y=m*x,P.z=R*Rt,u.push(P.x,P.y,P.z),f.push(0,x,0),I.x=Rt*.5+.5,I.y=mt*.5*x+.5,d.push(I.x,I.y),v++}for(let G=0;G<s;G++){const st=D+G,vt=z+G;_===!0?r.push(vt,vt+1,st):r.push(vt+1,vt,st),F+=3}h.addGroup(p,F,_===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends nd{constructor(t){super(t),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new nd().fromJSON(s))}return this}}const Oy={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=dm(n,0,s,e,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,r,u,f,d;if(i&&(o=Vy(n,t,o,e)),n.length>80*e){c=h=n[0],l=r=n[1];for(let v=e;v<s;v+=e)u=n[v],f=n[v+1],u<c&&(c=u),f<l&&(l=f),u>h&&(h=u),f>r&&(r=f);d=Math.max(h-c,r-l),d=d!==0?32767/d:0}return cc(o,a,e,c,l,d,0),a}};function dm(n,t,e,i,s){let o,a;if(s===tM(n,t,e,i)>0)for(o=t;o<e;o+=i)a=id(o,n[o],n[o+1],a);else for(o=e-i;o>=t;o-=i)a=id(o,n[o],n[o+1],a);return a&&Yl(a,a.next)&&(hc(a),a=a.next),a}function lo(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Yl(e,e.next)||Rn(e.prev,e,e.next)===0)){if(hc(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function cc(n,t,e,i,s,o,a){if(!n)return;!a&&o&&Ky(n,i,s,o);let c=n,l,h;for(;n.prev!==n.next;){if(l=n.prev,h=n.next,o?ky(n,i,s,o):By(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),hc(n),n=h.next,c=h.next;continue}if(n=h,n===c){a?a===1?(n=Hy(lo(n),t,e),cc(n,t,e,i,s,o,2)):a===2&&Gy(n,t,e,i,s,o):cc(lo(n),t,e,i,s,o,1);break}}}function By(n){const t=n.prev,e=n,i=n.next;if(Rn(t,e,i)>=0)return!1;const s=t.x,o=e.x,a=i.x,c=t.y,l=e.y,h=i.y,r=s<o?s<a?s:a:o<a?o:a,u=c<l?c<h?c:h:l<h?l:h,f=s>o?s>a?s:a:o>a?o:a,d=c>l?c>h?c:h:l>h?l:h;let v=i.next;for(;v!==t;){if(v.x>=r&&v.x<=f&&v.y>=u&&v.y<=d&&ko(s,c,o,l,a,h,v.x,v.y)&&Rn(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ky(n,t,e,i){const s=n.prev,o=n,a=n.next;if(Rn(s,o,a)>=0)return!1;const c=s.x,l=o.x,h=a.x,r=s.y,u=o.y,f=a.y,d=c<l?c<h?c:h:l<h?l:h,v=r<u?r<f?r:f:u<f?u:f,g=c>l?c>h?c:h:l>h?l:h,m=r>u?r>f?r:f:u>f?u:f,p=Ku(d,v,t,e,i),y=Ku(g,m,t,e,i);let M=n.prevZ,_=n.nextZ;for(;M&&M.z>=p&&_&&_.z<=y;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&ko(c,r,l,u,h,f,M.x,M.y)&&Rn(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==a&&ko(c,r,l,u,h,f,_.x,_.y)&&Rn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=v&&M.y<=m&&M!==s&&M!==a&&ko(c,r,l,u,h,f,M.x,M.y)&&Rn(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=g&&_.y>=v&&_.y<=m&&_!==s&&_!==a&&ko(c,r,l,u,h,f,_.x,_.y)&&Rn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hy(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Yl(s,o)&&pm(s,i,i.next,o)&&lc(s,o)&&lc(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),hc(i),hc(i.next),i=n=o),i=i.next}while(i!==n);return lo(i)}function Gy(n,t,e,i,s,o){let a=n;do{let c=a.next.next;for(;c!==a.prev;){if(a.i!==c.i&&Zy(a,c)){let l=mm(a,c);a=lo(a,a.next),l=lo(l,l.next),cc(a,t,e,i,s,o,0),cc(l,t,e,i,s,o,0);return}c=c.next}a=a.next}while(a!==n)}function Vy(n,t,e,i){const s=[];let o,a,c,l,h;for(o=0,a=t.length;o<a;o++)c=t[o]*i,l=o<a-1?t[o+1]*i:n.length,h=dm(n,c,l,i,!1),h===h.next&&(h.steiner=!0),s.push(jy(h));for(s.sort(Wy),o=0;o<s.length;o++)e=Xy(s[o],e);return e}function Wy(n,t){return n.x-t.x}function Xy(n,t){const e=qy(n,t);if(!e)return t;const i=mm(e,n);return lo(i,i.next),lo(e,e.next)}function qy(n,t){let e=t,i=-1/0,s;const o=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const c=s,l=s.x,h=s.y;let r=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&ko(a<h?o:i,a,l,h,a<h?i:o,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(o-e.x),lc(e,n)&&(u<r||u===r&&(e.x>s.x||e.x===s.x&&Yy(s,e)))&&(s=e,r=u)),e=e.next;while(e!==c);return s}function Yy(n,t){return Rn(n.prev,n,t.prev)<0&&Rn(t.next,n,n.next)<0}function Ky(n,t,e,i){let s=n;do s.z===0&&(s.z=Ku(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$y(s)}function $y(n){let t,e,i,s,o,a,c,l,h=1;do{for(e=n,n=null,o=null,a=0;e;){for(a++,i=e,c=0,t=0;t<h&&(c++,i=i.nextZ,!!i);t++);for(l=h;c>0||l>0&&i;)c!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,c--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,h*=2}while(a>1);return n}function Ku(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function jy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ko(n,t,e,i,s,o,a,c){return(s-a)*(t-c)>=(n-a)*(o-c)&&(n-a)*(i-c)>=(e-a)*(t-c)&&(e-a)*(o-c)>=(s-a)*(i-c)}function Zy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Jy(n,t)&&(lc(n,t)&&lc(t,n)&&Qy(n,t)&&(Rn(n.prev,n,t.prev)||Rn(n,t.prev,t))||Yl(n,t)&&Rn(n.prev,n,n.next)>0&&Rn(t.prev,t,t.next)>0)}function Rn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Yl(n,t){return n.x===t.x&&n.y===t.y}function pm(n,t,e,i){const s=$c(Rn(n,t,e)),o=$c(Rn(n,t,i)),a=$c(Rn(e,i,n)),c=$c(Rn(e,i,t));return!!(s!==o&&a!==c||s===0&&Kc(n,e,t)||o===0&&Kc(n,i,t)||a===0&&Kc(e,n,i)||c===0&&Kc(e,t,i))}function Kc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function $c(n){return n>0?1:n<0?-1:0}function Jy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pm(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function lc(n,t){return Rn(n.prev,n,n.next)<0?Rn(n,t,n.next)>=0&&Rn(n,n.prev,t)>=0:Rn(n,t,n.prev)<0||Rn(n,n.next,t)<0}function Qy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function mm(n,t){const e=new $u(n.i,n.x,n.y),i=new $u(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function id(n,t,e,i){const s=new $u(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hc(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $u(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tM(n,t,e,i){let s=0;for(let o=t,a=e-i;o<e;o+=i)s+=(n[a]-n[o])*(n[o+1]+n[a+1]),a=o;return s}class cr{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];sd(t),rd(i,t);let a=t.length;e.forEach(sd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,rd(i,e[l]);const c=Oy.triangulate(i,s);for(let l=0;l<c.length;l+=3)o.push(c.slice(l,l+3));return o}}function sd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function rd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Qa extends Ze{constructor(t=new $r([new Kt(.5,.5),new Kt(-.5,.5),new Kt(-.5,-.5),new Kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let c=0,l=t.length;c<l;c++){const h=t[c];a(h)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(o,2)),this.computeVertexNormals();function a(c){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,r=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:eM;let M,_=!1,D,I,P,F;p&&(M=p.getSpacedPoints(r),_=!0,f=!1,D=p.computeFrenetFrames(r,!1),I=new L,P=new L,F=new L),f||(m=0,d=0,v=0,g=0);const R=c.extractPoints(h);let x=R.shape;const z=R.holes;if(!cr.isClockWise(x)){x=x.reverse();for(let bt=0,Ot=z.length;bt<Ot;bt++){const O=z[bt];cr.isClockWise(O)&&(z[bt]=O.reverse())}}const st=cr.triangulateShape(x,z),vt=x;for(let bt=0,Ot=z.length;bt<Ot;bt++){const O=z[bt];x=x.concat(O)}function Rt(bt,Ot,O){return Ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),bt.clone().addScaledVector(Ot,O)}const mt=x.length,It=st.length;function nt(bt,Ot,O){let ie,Yt,ce;const Jt=bt.x-Ot.x,ct=bt.y-Ot.y,ft=O.x-bt.x,C=O.y-bt.y,b=Jt*Jt+ct*ct,W=Jt*C-ct*ft;if(Math.abs(W)>Number.EPSILON){const Z=Math.sqrt(b),tt=Math.sqrt(ft*ft+C*C),Y=Ot.x-ct/Z,pt=Ot.y+Jt/Z,dt=O.x-C/tt,lt=O.y+ft/tt,Mt=((dt-Y)*C-(lt-pt)*ft)/(Jt*C-ct*ft);ie=Y+Jt*Mt-bt.x,Yt=pt+ct*Mt-bt.y;const N=ie*ie+Yt*Yt;if(N<=2)return new Kt(ie,Yt);ce=Math.sqrt(N/2)}else{let Z=!1;Jt>Number.EPSILON?ft>Number.EPSILON&&(Z=!0):Jt<-Number.EPSILON?ft<-Number.EPSILON&&(Z=!0):Math.sign(ct)===Math.sign(C)&&(Z=!0),Z?(ie=-ct,Yt=Jt,ce=Math.sqrt(b)):(ie=Jt,Yt=ct,ce=Math.sqrt(b/2))}return new Kt(ie/ce,Yt/ce)}const kt=[];for(let bt=0,Ot=vt.length,O=Ot-1,ie=bt+1;bt<Ot;bt++,O++,ie++)O===Ot&&(O=0),ie===Ot&&(ie=0),kt[bt]=nt(vt[bt],vt[O],vt[ie]);const se=[];let fe,le=kt.concat();for(let bt=0,Ot=z.length;bt<Ot;bt++){const O=z[bt];fe=[];for(let ie=0,Yt=O.length,ce=Yt-1,Jt=ie+1;ie<Yt;ie++,ce++,Jt++)ce===Yt&&(ce=0),Jt===Yt&&(Jt=0),fe[ie]=nt(O[ie],O[ce],O[Jt]);se.push(fe),le=le.concat(fe)}for(let bt=0;bt<m;bt++){const Ot=bt/m,O=d*Math.cos(Ot*Math.PI/2),ie=v*Math.sin(Ot*Math.PI/2)+g;for(let Yt=0,ce=vt.length;Yt<ce;Yt++){const Jt=Rt(vt[Yt],kt[Yt],ie);At(Jt.x,Jt.y,-O)}for(let Yt=0,ce=z.length;Yt<ce;Yt++){const Jt=z[Yt];fe=se[Yt];for(let ct=0,ft=Jt.length;ct<ft;ct++){const C=Rt(Jt[ct],fe[ct],ie);At(C.x,C.y,-O)}}}const ut=v+g;for(let bt=0;bt<mt;bt++){const Ot=f?Rt(x[bt],le[bt],ut):x[bt];_?(P.copy(D.normals[0]).multiplyScalar(Ot.x),I.copy(D.binormals[0]).multiplyScalar(Ot.y),F.copy(M[0]).add(P).add(I),At(F.x,F.y,F.z)):At(Ot.x,Ot.y,0)}for(let bt=1;bt<=r;bt++)for(let Ot=0;Ot<mt;Ot++){const O=f?Rt(x[Ot],le[Ot],ut):x[Ot];_?(P.copy(D.normals[bt]).multiplyScalar(O.x),I.copy(D.binormals[bt]).multiplyScalar(O.y),F.copy(M[bt]).add(P).add(I),At(F.x,F.y,F.z)):At(O.x,O.y,u/r*bt)}for(let bt=m-1;bt>=0;bt--){const Ot=bt/m,O=d*Math.cos(Ot*Math.PI/2),ie=v*Math.sin(Ot*Math.PI/2)+g;for(let Yt=0,ce=vt.length;Yt<ce;Yt++){const Jt=Rt(vt[Yt],kt[Yt],ie);At(Jt.x,Jt.y,u+O)}for(let Yt=0,ce=z.length;Yt<ce;Yt++){const Jt=z[Yt];fe=se[Yt];for(let ct=0,ft=Jt.length;ct<ft;ct++){const C=Rt(Jt[ct],fe[ct],ie);_?At(C.x,C.y+M[r-1].y,M[r-1].x+O):At(C.x,C.y,u+O)}}}$(),X();function $(){const bt=s.length/3;if(f){let Ot=0,O=mt*Ot;for(let ie=0;ie<It;ie++){const Yt=st[ie];St(Yt[2]+O,Yt[1]+O,Yt[0]+O)}Ot=r+m*2,O=mt*Ot;for(let ie=0;ie<It;ie++){const Yt=st[ie];St(Yt[0]+O,Yt[1]+O,Yt[2]+O)}}else{for(let Ot=0;Ot<It;Ot++){const O=st[Ot];St(O[2],O[1],O[0])}for(let Ot=0;Ot<It;Ot++){const O=st[Ot];St(O[0]+mt*r,O[1]+mt*r,O[2]+mt*r)}}i.addGroup(bt,s.length/3-bt,0)}function X(){const bt=s.length/3;let Ot=0;Et(vt,Ot),Ot+=vt.length;for(let O=0,ie=z.length;O<ie;O++){const Yt=z[O];Et(Yt,Ot),Ot+=Yt.length}i.addGroup(bt,s.length/3-bt,1)}function Et(bt,Ot){let O=bt.length;for(;--O>=0;){const ie=O;let Yt=O-1;Yt<0&&(Yt=bt.length-1);for(let ce=0,Jt=r+m*2;ce<Jt;ce++){const ct=mt*ce,ft=mt*(ce+1),C=Ot+ie+ct,b=Ot+Yt+ct,W=Ot+Yt+ft,Z=Ot+ie+ft;Ft(C,b,W,Z)}}}function At(bt,Ot,O){l.push(bt),l.push(Ot),l.push(O)}function St(bt,Ot,O){Wt(bt),Wt(Ot),Wt(O);const ie=s.length/3,Yt=y.generateTopUV(i,s,ie-3,ie-2,ie-1);ae(Yt[0]),ae(Yt[1]),ae(Yt[2])}function Ft(bt,Ot,O,ie){Wt(bt),Wt(Ot),Wt(ie),Wt(Ot),Wt(O),Wt(ie);const Yt=s.length/3,ce=y.generateSideWallUV(i,s,Yt-6,Yt-3,Yt-2,Yt-1);ae(ce[0]),ae(ce[1]),ae(ce[3]),ae(ce[1]),ae(ce[2]),ae(ce[3])}function Wt(bt){s.push(l[bt*3+0]),s.push(l[bt*3+1]),s.push(l[bt*3+2])}function ae(bt){o.push(bt.x),o.push(bt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return nM(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,a=t.shapes.length;o<a;o++){const c=e[t.shapes[o]];i.push(c)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rl[s.type]().fromJSON(s)),new Qa(i,t.options)}}const eM={generateTopUV:function(n,t,e,i,s){const o=t[e*3],a=t[e*3+1],c=t[i*3],l=t[i*3+1],h=t[s*3],r=t[s*3+1];return[new Kt(o,a),new Kt(c,l),new Kt(h,r)]},generateSideWallUV:function(n,t,e,i,s,o){const a=t[e*3],c=t[e*3+1],l=t[e*3+2],h=t[i*3],r=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],v=t[s*3+2],g=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(c-r)<Math.abs(a-h)?[new Kt(a,1-l),new Kt(h,1-u),new Kt(f,1-v),new Kt(g,1-p)]:[new Kt(c,1-l),new Kt(r,1-u),new Kt(d,1-v),new Kt(m,1-p)]}};function nM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _a extends Ze{constructor(t=.5,e=1,i=32,s=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const c=[],l=[],h=[],r=[];let u=t;const f=(e-t)/s,d=new L,v=new Kt;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const p=o+m/i*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),h.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,r.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){const m=g*(i+1);for(let p=0;p<i;p++){const y=p+m,M=y,_=y+i+1,D=y+i+2,I=y+1;c.push(M,_,I),c.push(_,D,I)}}this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(r,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Pl extends Ze{constructor(t=new $r([new Kt(0,.5),new Kt(-.5,-.5),new Kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],a=[];let c=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let r=0;r<t.length;r++)h(t[r]),this.addGroup(c,l,r),c+=l,l=0;this.setIndex(i),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(a,2));function h(r){const u=s.length/3,f=r.extractPoints(e);let d=f.shape;const v=f.holes;cr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const y=v[m];cr.isClockWise(y)===!0&&(v[m]=y.reverse())}const g=cr.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const y=v[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];s.push(y.x,y.y,0),o.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=g.length;m<p;m++){const y=g[m],M=y[0]+u,_=y[1]+u,D=y[2]+u;i.push(M,_,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return iM(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}return new Pl(i,t.curveSegments)}}function iM(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class aa extends Ze{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+c,Math.PI);let h=0;const r=[],u=new L,f=new L,d=[],v=[],g=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let _=0;p===0&&a===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const I=D/e;u.x=-t*Math.cos(s+I*o)*Math.sin(a+M*c),u.y=t*Math.cos(a+M*c),u.z=t*Math.sin(s+I*o)*Math.sin(a+M*c),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(I+_,1-M),y.push(h++)}r.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const M=r[p][y+1],_=r[p][y],D=r[p+1][y],I=r[p+1][y+1];(p!==0||a>0)&&d.push(M,_,I),(p!==i-1||l<Math.PI)&&d.push(_,D,I)}this.setIndex(d),this.setAttribute("position",new Me(v,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ds extends Ze{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],c=[],l=[],h=[],r=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let v=0;v<=s;v++){const g=v/s*o,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),r.x=t*Math.cos(g),r.y=t*Math.sin(g),f.subVectors(u,r).normalize(),l.push(f.x,f.y,f.z),h.push(v/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let v=1;v<=s;v++){const g=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,p=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(g,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class js extends Ze{constructor(t=new um(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const c=new L,l=new L,h=new Kt;let r=new L;const u=[],f=[],d=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function g(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),y(),p()}function m(M){r=t.getPointAt(M/e,r);const _=a.normals[M],D=a.binormals[M];for(let I=0;I<=s;I++){const P=I/s*Math.PI*2,F=Math.sin(P),R=-Math.cos(P);l.x=R*_.x+F*D.x,l.y=R*_.y+F*D.y,l.z=R*_.z+F*D.z,l.normalize(),f.push(l.x,l.y,l.z),c.x=r.x+i*l.x,c.y=r.y+i*l.y,c.z=r.z+i*l.z,u.push(c.x,c.y,c.z)}}function p(){for(let M=1;M<=e;M++)for(let _=1;_<=s;_++){const D=(s+1)*(M-1)+(_-1),I=(s+1)*M+(_-1),P=(s+1)*M+_,F=(s+1)*(M-1)+_;v.push(D,I,F),v.push(I,P,F)}}function y(){for(let M=0;M<=e;M++)for(let _=0;_<=s;_++)h.x=M/e,h.y=_/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new js(new Rl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Sn extends fo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bp,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Di extends Sn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kl extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sM extends Kl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zh=new Ie,od=new L,ad=new L;class Af{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rM extends Af{constructor(){super(new gi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ra*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gm extends Kl{constructor(t,e,i=0,s=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.distance=i,this.angle=s,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new rM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const cd=new Ie,Da=new L,Oh=new L;class oM extends Af{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Da.setFromMatrixPosition(t.matrixWorld),i.position.copy(Da),Oh.copy(i.position),Oh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Oh),i.updateMatrixWorld(),s.makeTranslation(-Da.x,-Da.y,-Da.z),cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}}class ld extends Kl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new oM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class aM extends Af{constructor(){super(new Mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cM extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new aM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vm extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class lM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hd(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);class $l extends ye{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new gi;const i=this,s=e.color!==void 0?new Vt(e.color):new Vt(8355711),o=e.textureWidth||512,a=e.textureHeight||512,c=e.clipBias||0,l=e.shader||$l.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,r=new wr,u=new L,f=new L,d=new L,v=new Ie,g=new L(0,0,-1),m=new Qe,p=new L,y=new L,M=new Qe,_=new Ie,D=this.camera,I=new qi(o,a,{samples:h,type:is}),P=new $e({name:l.name!==void 0?l.name:"unspecified",uniforms:ys.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});P.uniforms.tDiffuse.value=I.texture,P.uniforms.color.value=s,P.uniforms.textureMatrix.value=_,this.material=P,this.onBeforeRender=function(F,R,x){if(f.setFromMatrixPosition(i.matrixWorld),d.setFromMatrixPosition(x.matrixWorld),v.extractRotation(i.matrixWorld),u.set(0,0,1),u.applyMatrix4(v),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),v.extractRotation(x.matrixWorld),g.set(0,0,-1),g.applyMatrix4(v),g.add(d),y.subVectors(f,g),y.reflect(u).negate(),y.add(f),D.position.copy(p),D.up.set(0,1,0),D.up.applyMatrix4(v),D.up.reflect(u),D.lookAt(y),D.far=x.far,D.updateMatrixWorld(),D.projectionMatrix.copy(x.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(D.projectionMatrix),_.multiply(D.matrixWorldInverse),_.multiply(i.matrixWorld),r.setFromNormalAndCoplanarPoint(u,f),r.applyMatrix4(D.matrixWorldInverse),m.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const z=D.projectionMatrix;M.x=(Math.sign(m.x)+z.elements[8])/z.elements[0],M.y=(Math.sign(m.y)+z.elements[9])/z.elements[5],M.z=-1,M.w=(1+z.elements[10])/z.elements[14],m.multiplyScalar(2/m.dot(M)),z.elements[2]=m.x,z.elements[6]=m.y,z.elements[10]=m.z+1-c,z.elements[14]=m.w,i.visible=!1;const G=F.getRenderTarget(),st=F.xr.enabled,vt=F.shadowMap.autoUpdate;F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(I),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(R,D),F.xr.enabled=st,F.shadowMap.autoUpdate=vt,F.setRenderTarget(G);const Rt=x.viewport;Rt!==void 0&&F.state.viewport(Rt),i.visible=!0},this.getRenderTarget=function(){return I},this.dispose=function(){I.dispose(),i.material.dispose()}}}$l.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Ho(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},a={},c=n[0].morphTargetsRelative,l=new Ze;let h=0;for(let r=0;r<n.length;++r){const u=n[r];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". Make sure all geometries have the same number of attributes."),null;if(c!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,r),h+=d}}if(e){let r=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+r);r+=n[f].attributes.position.count}l.setIndex(u)}for(const r in o){const u=ud(o[r]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" attribute."),null;l.setAttribute(r,u)}for(const r in a){const u=a[r][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[r]=[];for(let f=0;f<u;++f){const d=[];for(let g=0;g<a[r].length;++g)d.push(a[r][g][f]);const v=ud(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" morphAttribute."),null;l.morphAttributes[r].push(v)}}return l}function ud(n){let t,e,i,s=-1,o=0;for(let h=0;h<n.length;++h){const r=n[h];if(t===void 0&&(t=r.array.constructor),t!==r.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=r.itemSize),e!==r.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=r.normalized),i!==r.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=r.gpuType),s!==r.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=r.count*e}const a=new t(o),c=new xn(a,e,i);let l=0;for(let h=0;h<n.length;++h){const r=n[h];if(r.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=r.count;f<d;f++)for(let v=0;v<e;v++){const g=r.getComponent(f,v);c.setComponent(f+u,v,g)}}else a.set(r.array,l);l+=r.count*e}return s!==void 0&&(c.gpuType=s),c}function fd(n,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},i=n.getIndex(),s=n.getAttribute("position"),o=i?i.count:s.count;let a=0;const c=Object.keys(n.attributes),l={},h={},r=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,M=c.length;y<M;y++){const _=c[y],D=n.attributes[_];l[_]=new D.constructor(new D.array.constructor(D.count*D.itemSize),D.itemSize,D.normalized);const I=n.morphAttributes[_];I&&(h[_]||(h[_]=[]),I.forEach((P,F)=>{const R=new P.array.constructor(P.count*P.itemSize);h[_][F]=new P.constructor(R,P.itemSize,P.normalized)}))}const d=t*.5,v=Math.log10(1/t),g=Math.pow(10,v),m=d*g;for(let y=0;y<o;y++){const M=i?i.getX(y):y;let _="";for(let D=0,I=c.length;D<I;D++){const P=c[D],F=n.getAttribute(P),R=F.itemSize;for(let x=0;x<R;x++)_+=`${~~(F[u[x]](M)*g+m)},`}if(_ in e)r.push(e[_]);else{for(let D=0,I=c.length;D<I;D++){const P=c[D],F=n.getAttribute(P),R=n.morphAttributes[P],x=F.itemSize,z=l[P],G=h[P];for(let st=0;st<x;st++){const vt=u[st],Rt=f[st];if(z[Rt](a,F[vt](M)),R)for(let mt=0,It=R.length;mt<It;mt++)G[mt][Rt](a,R[mt][vt](M))}}e[_]=a,r.push(a),a++}}const p=n.clone();for(const y in n.attributes){const M=l[y];if(p.setAttribute(y,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),y in h)for(let _=0;_<h[y].length;_++){const D=h[y][_];p.morphAttributes[y][_]=new D.constructor(D.array.slice(0,a*D.itemSize),D.itemSize,D.normalized)}}return p.setIndex(r),p}function dd(n,t=Math.PI/3){const e=Math.cos(t),i=(1+1e-10)*100,s=[new L,new L,new L],o=new L,a=new L,c=new L,l=new L;function h(g){const m=~~(g.x*i),p=~~(g.y*i),y=~~(g.z*i);return`${m},${p},${y}`}const r=n.index?n.toNonIndexed():n,u=r.attributes.position,f={};for(let g=0,m=u.count/3;g<m;g++){const p=3*g,y=s[0].fromBufferAttribute(u,p+0),M=s[1].fromBufferAttribute(u,p+1),_=s[2].fromBufferAttribute(u,p+2);o.subVectors(_,M),a.subVectors(y,M);const D=new L().crossVectors(o,a).normalize();for(let I=0;I<3;I++){const P=s[I],F=h(P);F in f||(f[F]=[]),f[F].push(D)}}const d=new Float32Array(u.count*3),v=new xn(d,3,!1);for(let g=0,m=u.count/3;g<m;g++){const p=3*g,y=s[0].fromBufferAttribute(u,p+0),M=s[1].fromBufferAttribute(u,p+1),_=s[2].fromBufferAttribute(u,p+2);o.subVectors(_,M),a.subVectors(y,M),c.crossVectors(o,a).normalize();for(let D=0;D<3;D++){const I=s[D],P=h(I),F=f[P];l.set(0,0,0);for(let R=0,x=F.length;R<x;R++){const z=F[R];c.dot(z)>e&&l.add(z)}l.normalize(),v.setXYZ(p+D,l.x,l.y,l.z)}}return r.setAttribute("normal",v),r}const Xi=59/136,mn=n=>n*Xi,so=n=>n/Xi,fn=9.81,uc=2.23694,xm=[{id:"intro",b0:0,b1:16},{id:"launch",b0:16,b1:48},{id:"reveal",b0:48,b1:56},{id:"flip",b0:56,b1:88},{id:"build",b0:88,b1:96},{id:"mega",b0:96,b1:128},{id:"outro",b0:128,b1:136}];function _m(n){const t=so(n);for(const e of xm)if(t<e.b1)return e.id;return"outro"}const we=(n,t,e)=>Math.max(t,Math.min(e,n)),ln=n=>(n=we(n,0,1),n*n*(3-2*n)),ti=(n,t)=>1-Math.exp(-n*t);function Ll(n){const t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)}function hM(n){const t=Math.floor(n),e=n-t,i=e*e*(3-2*e);return Ll(t)*(1-i)+Ll(t+1)*i}const qs=n=>hM(n)*2-1,_n=Math.PI*2,lr=7.5,fc=16,jl=.81,ym=60/uc/jl,uM=ym*(60/uc);function fM(n,t){return Math.min(ym*t,uM*t/Math.max(.5,n))}function pd(n,t,e){const i=2.6*(t-n);return i>=0?Math.min(i,fM(n,e)):Math.max(i,-9.3195)}const Bs=2,xs=10,Mm=27.5,Cf=1.3,bm=.3;function wm(n,t,e,i,s){t=Math.max(.05,t);const o=-2;if(e>=o)return n.burn?we(s*.95/i,0,1):0;const a=((e*e-o*o)/(2*t)+s)/i;return!n.burn&&a<.86?0:(n.burn=!0,we(a,0,1))}const dM=n=>Bs*n*n,ju=n=>2*Bs*n/xs;function Sm(n,t){const e=dM(t),i=ju(t);return Math.sqrt(Math.max(1,n*n-2*fn*e))/Math.sqrt(1+i*i)}function pM(n){let t=0,e=0;const i=1/480;for(;t<xs&&e<3;)t+=Sm(n,t/xs)*i,e+=i;return e}function mM(n){let t=Bs,e=n,i=0;const s={burn:!1},o=1/480;for(;i<8;){const a=e<0&&i-bm>Cf*.7?wm(s,t,e,1.8*fn,fn):0;if(e+=(a*1.8*fn-fn)*o,t+=e*o,i+=o,t<=0&&e<0)break}return i}const Es=10,ml=10,Go=6,to=115*Math.PI/180,Dl=60,Ga=Es*Math.PI/2,Tm=Go*(to-Math.PI/2),gl=Ga+ml+Tm,vl=Es;function ca(n,t={}){if(n<=0)return t.a=n,t.y=0,t.th=0,t.k=0,t;if(n<Ga){const i=n/Es;return t.a=Es*Math.sin(i),t.y=Es*(1-Math.cos(i)),t.th=i,t.k=1/Es,t}if(n<Ga+ml)return t.a=Es,t.y=Es+(n-Ga),t.th=Math.PI/2,t.k=0,t;const e=Math.PI/2+Math.min(n-Ga-ml,Tm)/Go;return t.a=Es+Go*(Math.sin(e)-1),t.y=Es+ml-Go*Math.cos(e),t.th=e,t.k=1/Go,t}const tc={},Em=ca(gl).y,md=8.4,Zu=Math.sqrt(md*md+2*fn*Em),eo=0,Am=5.6*fn,Cm=.2,Rm=2.6,ec=1,Pm=4.5,gM=1.1,gd=1.8,vM=4.5,xM=-2.6;let xl=6.6;const _M=.35,dc=5,pc=14,Rf=96.5,_l=2*fn,vd=8.5,Bh=36,Va=26,xd=1.7*_l,_d=.8,kh=2.9,yd=.55;function Md(n,t){if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){const[i,s]=n[e-1],[o,a]=n[e];return s+(a-s)*(t-i)/Math.max(1e-6,o-i)}return n[n.length-1][1]}const yM=[[fc,48],[18,48],[20.6,36],[22.4,33],[24.6,25.9],[Mm,25.9],[35.4,23],[37,27],[39,36],[42,47],[46,56],[48,58],[50.5,52],[54.5,30],[56.6,Zu],[Dl+2,Zu]],bd=.25;function Pf(n,t,e,i,s,o=eo,a=xl){const c=i*Math.sin(to),l=-i*Math.cos(to),h=i/Go;return{x:o,y:e,z:t,vx:0,vy:c,vz:l,ph:to,w:h,r:0,wr:0,alpha:0,alphaR:0,thr:0,rear:0,gas:1,tau:0,ph0:to,w0:h,Ta:c/fn,burn:!1,landed:!1,zT:s,xT:lr,ax:0,az:0,side:0,impact:0,upright:!1,tUp:-1,yB:a,phase:"rot",...MM(e,c,a)}}function MM(n,t,e){const i=e+wd,s=(t+Math.sqrt(t*t+2*fn*Math.max(0,n-i)))/fn,o=fn*s-t,a=2*wd/(o+Pm);return{yIgn:i,tIgn:s,rotT:s+.05+a}}const bM=.62,wd=5.4;function wM(n,t){const e=n.rotT,i=Math.max(0,e-bM);if(t>=e)return[_n,0];if(t<i)return[n.ph0+n.w0*t,n.w0];const s=e-i,o=(t-i)/s,a=o*o,c=a*o,l=n.ph0+n.w0*i,h=2*c-3*a+1,r=c-2*a+o,u=-2*c+3*a,f=(6*a-6*o)/s,d=(3*a-4*o+1)/s,v=(-6*a+6*o)/s;return[h*l+r*s*n.w0+u*_n,f*l+d*s*n.w0+v*_n]}function Lf(n,t,e){n.tau+=t;const i=n.thr*Am,[s,o]=wM(n,n.tau);n.alpha=we(160*(s-n.ph)+25*(o-n.w),-45,45),n.w+=n.alpha*t,n.ph+=n.w*t,n.alphaR=we(30*(0-n.r)-11*n.wr,-8,8),n.wr+=n.alphaR*t,n.r+=n.wr*t;const a=n.gas>0?we(e,0,1):0;n.thr+=(a-n.thr)*Math.min(1,t*14);const c=n.ph-_n,l=n.gas>0&&c>-.45&&!n.landed?we(.9*(n.vz-xM),0,1):0;n.rear+=(l-n.rear)*Math.min(1,t*10);const h=n.rear*vM;n.gas=Math.max(0,n.gas-(n.thr+.3*n.rear)*Cm*t);let r=n.tau<ec?Rm*ln(n.tau/.08)*ln((ec-n.tau)/.1):0;n.tau>ec&&(r+=we(.9*(n.xT-n.x)-1.8*n.vx,-1.6,1.6)),n.side=r;const u=Math.cos(n.r);return n.ax=-i*Math.sin(n.r)+r,n.az=i*u*Math.sin(n.ph)-h*Math.cos(n.ph),n.vx+=n.ax*t,n.vy+=(i*u*Math.cos(n.ph)+h*Math.sin(n.ph)-fn)*t,n.vz+=n.az*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,!n.upright&&n.tau>n.rotT-.04&&Math.abs(n.ph-_n)<.06&&(n.upright=!0,n.tUp=n.tau,n.phase="upright"),n.y<=0&&n.vy<0&&(n.impact=-n.vy,n.y=0,n.landed=!0),n}function Il(n){_n-n.ph;const t=n.y,e=n.vy,i=Pm,s=Math.max(.3,Math.cos(n.ph-_n)*Math.cos(n.r));if(!n.burn&&(n.tau<.9||t>n.yIgn||e>0))return 0;n.burn=!0,n.sb=!0;let o;return t>n.yB&&e<-i?(n.phase="brake",o=fn+(e*e-i*i)/(2*Math.max(.3,t-n.yB))):t>gM?(n.phase="sink",o=fn+6*(-i-e)):(n.phase="flare",o=fn+Math.max(0,(e*e-gd*gd)/(2*Math.max(.04,t-.03)))),we(o/(Am*s),.08,1)}const Ii=1/240,SM=140,la=Math.ceil(SM/Ii)+2,$o=new Float64Array(la),yl=new Float64Array(la),ee={R:vl,lipAngle:to,vIn:Zu,deckX:eo},Oe={s0:0,s1:0,vA:0,tLip:0,vx:0,vy:0,uLip:0,tLand:0,done:!1};let ir=0,ha=0;{const n=mn(fc),t=mn(Mm),e=mn(Dl);let i=0,s=0,o=1,a="drive",c=1,l=0;for(;o<la;o++){const g=(o-.5)*Ii;if(a==="drive"&&(g<n?s=0:!Oe.done&&g>t-1.5&&g+pM(s)>=t?(a="kick",Oe.s0=i,Oe.vA=s):Oe.done&&g>=e?(a="climb",ee.s0=i,ee.tIn=g,ee.vIn=s):s+=pd(s,Md(yM,so(g+bd)),c)*Ii),a==="kick"){const m=(i-Oe.s0)/xs;if(s=Sm(Oe.vA,Math.min(1,m)),i-Oe.s0>=xs){Oe.s1=Oe.s0+xs,Oe.tLip=g,Oe.uLip=Math.sqrt(Oe.vA*Oe.vA-2*fn*Bs);const p=1/Math.sqrt(1+ju(1)**2);Oe.vx=Oe.uLip*p,Oe.vy=Oe.vx*ju(1),l=g+mM(Oe.vy),a="air",s=Oe.vx}}if(a==="air"&&(s=Oe.vx,g>=l&&(a="drive",Oe.done=!0,Oe.tLand=g,c=.85)),a==="climb"&&(s=Math.sqrt(Math.max(4,ee.vIn*ee.vIn-2*fn*ca(i-ee.s0,tc).y))),i+=s*Ii,$o[o]=i,yl[o]=s,a==="climb"&&i>=ee.s0+gl){ee.tLip=o*Ii,ee.vLip=s;break}}ee.sLip=ee.s0+gl,ee.height=Em,ee.zLip=-ee.s0-ca(gl).a,ee.xLand=lr;{const g=ee.vLip*Math.sin(to)/fn;ir=ee.tLip+g-.115,ha=ir+2*Xi}const h=(g,m)=>{const p=Pf(ee.sLip,ee.zLip,ee.height,ee.vLip,null,eo,g);let y=ee.tLip,M=0;const _={maxY:0,tApex:y,tUpright:0,yUpright:0,tBurn:0,yBurn:0,maxTilt:0,sideInt:0,ySink:0,tSink:0};for(;!p.landed&&y<120;){const D=Df(y);Lf(p,Ii*D,Il(p)),p.y>_.maxY&&(_.maxY=p.y,_.tApex=y),p.upright&&!_.tUpright&&(_.tUpright=y,_.yUpright=p.y),p.burn&&!_.tBurn&&(_.tBurn=y,_.yBurn=p.y),p.phase==="sink"&&!_.tSink&&(_.tSink=y,_.ySink=p.y),p.burn&&(_.maxTilt=Math.max(_.maxTilt,Math.abs(p.r),Math.abs(p.ph-_n))),p.tau>ec&&(_.sideInt+=Math.abs(p.side)*Ii*D),y+=Ii,M++,m&&(o++,$o[o]=ee.sLip,yl[o]=0)}return _.t=y,_.F=p,_.n=M,_};{const g=mn(75);let m=1.6,p=12;for(let y=0;y<26;y++){const M=(m+p)/2;h(M,!1).t>g?p=M:m=M}xl=(m+p)/2}const r=h(xl,!0),u=r.F,f=r.t;ee.yB=xl,ee.tUpright=r.tUpright,ee.yUpright=r.yUpright,ee.tBurn=r.tBurn,ee.yBurn=r.yBurn,ee.tSink=r.tSink,ee.ySink=r.ySink,ee.tLand=f,ee.apexY=r.maxY,ee.tApex=r.tApex,ee.impactNominal=u.impact,ee.zLand=u.z,ee.xTouch=u.x,ee.maxTilt=r.maxTilt,ee.sideTrim=r.sideInt,ee.gasLeft=u.gas,ee.vzTouch=u.vz,ee.vxTouch=u.vx;const d=so(f),v=[[d,46],[d+2.2,46],[d+4,40],[Math.max(d+5,84),50],[88,52],[92,44],[95,Bh],[Rf,Bh],[126,Bh],[129,30],[132,26],[134,22],[136,6],[137.6,0],[400,0]];for(i=ee.sLip,s=Math.max(0,-u.vz),o=o+1;o<la;o++){const g=(o-.5)*Ii;s=Math.max(0,s+pd(s,Md(v,so(g+bd)),.68)*Ii),i+=s*Ii,$o[o]=i,yl[o]=s}}function Df(n){if(n<=ir-.12||n>=ha+.12)return 1;const t=ln((n-(ir-.12))/.24),e=1-ln((n-(ha-.12))/.24);return 1-(1-_M)*Math.min(t,e)}function Ji(n){if(n<=0)return 0;const t=n/Ii,e=Math.min(la-2,Math.floor(t)),i=t-e;return $o[e]+($o[e+1]-$o[e])*i}function Sd(n){const t=we(Math.round(n/Ii),0,la-1);return yl[t]}const Rs=n=>Ji(mn(n)),ua={semi:{length:7.1,width:2.6,height:3.85},cybertruck:{length:5.68,width:2.2,height:1.79},models:{length:4.97,width:1.96,height:1.44},model3:{length:4.72,width:1.85,height:1.44},modelx:{length:5.06,width:2,height:1.68},modely:{length:4.75,width:1.92,height:1.62}},Td=["models","cybertruck","semi","model3","modely","modelx"],TM=Oe.s1,Hh=Rs(Rf);function Lm(n,t,e=1.1){const i=Td.map(c=>ua[c].width),s=i.reduce((c,l)=>c+l,0)+e*(i.length-1);let o=n-s/2;const a=[];return Td.forEach((c,l)=>{const h=i[l];a.push({kind:c,s:o+h/2,x:t,yaw:Math.PI/2*(l%2?1:-1),...ua[c]}),o+=h+e}),{vehicles:a,s0:n-s/2,s1:n+s/2}}const Dm=TM+Oe.vx*(Oe.vy/fn),jc=Lm(Dm,0),He={beat:Xi,lateral:lr,hangar:{s:0},startLine:{s:0},dragStrip:{s0:0,s1:150,tick:1,tickMajor:5},ramp:{s0:Oe.s0,s1:Oe.s1,height:Bs,vApproach:Oe.vA,vLip:Oe.uLip},fleet:{s0:jc.s0,s1:jc.s1,sCenter:Dm,count:jc.vehicles.length,lineup:jc.vehicles},landing:{s:Ji(Oe.tLand)},shiftBeats:[20,24,38,42,46],reveal:{s0:Rs(48),s1:Rs(56)},checkpoint:{s:Rs(48)},flip:ee,boostArm:{s0:Rs(88),s1:Rs(96)},mega:{s0:Hh-pc,s1:Hh,height:dc},flight:{s0:Hh,s1:Rs(128),floor:0,ceiling:Va},fleetRows:[],rings:[],pylons:[],finish:{s:Rs(134),beat:134}};{["cybertruck","semi","models","modelx","semi","model3","cybertruck","modely","semi","modelx"].forEach((e,i)=>{const s=102+i*2,o=Rs(s),a=ua[e],c=Math.max(2,Math.floor(19/(a.length+.5))),l=c*a.length+(c-1)*.5,h=[];for(let r=0;r<c;r++)h.push({kind:e,s:o,x:lr-l/2+a.length/2+r*(a.length+.5),yaw:(r%2?1:-1)*Math.PI/2,...a});He.fleetRows.push({s:o,depth:a.width,top:a.height,beat:s,kind:e,vehicles:h,finale:!1})});const t=Lm(Rs(123.5),lr,.9);He.fleetRows.push({s:(t.s0+t.s1)/2,depth:t.s1-t.s0,top:ua.semi.height,beat:123.5,kind:"fleet",vehicles:t.vehicles,finale:!0})}He.flight.landStart=He.fleetRows[He.fleetRows.length-1].s+He.fleetRows[He.fleetRows.length-1].depth/2+2.2;const mi={go:mn(fc),zero60:mn(fc)+jl,fleetLip:Oe.tLip,fleetApex:Oe.tLip+Oe.vy/fn,fleetLand:Oe.tLand,reveal:mn(48),flipClimb:ee.tIn,flipLip:ee.tLip,flipApex:ee.tApex,bullet:[ir,ha],flipUpright:ee.tUpright,flipLand:ee.tLand,megaLip:mn(Rf),finale:mn(123.5),finish:mn(134)};function Ar(n){const t=He.ramp;if(n>t.s0&&n<=t.s1){const i=(n-t.s0)/xs;return Bs*i*i}const e=He.mega;if(n>e.s0&&n<=e.s1){const i=(n-e.s0)/pc;return dc*i*i}return 0}function Ed(n){const t=He.ramp,e=He.mega;return n>t.s0&&n<=t.s1?2*Bs*(n-t.s0)/(xs*xs):n>e.s0&&n<=e.s1?2*dc*(n-e.s0)/(pc*pc):0}function jo(n,t=null){const e=t||{pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0};if(e.onFlip=!1,e.inLoop=!1,e.theta=0,n<ee.s0){const i=Ed(n);e.pos.set(0,Ar(n),-n),e.fwd.set(0,i,-1).normalize(),e.up.set(0,1,i).normalize()}else if(n<ee.sLip){const i=ca(n-ee.s0,tc),s=i.th;e.pos.set(0,i.y,-ee.s0-i.a),e.fwd.set(0,Math.sin(s),-Math.cos(s)),e.up.set(0,Math.cos(s),Math.sin(s)),e.onFlip=!0,e.inLoop=!0,e.theta=s}else{const i=Ed(n);e.pos.set(lr,Ar(n),ee.zLand-(n-ee.sLip)),e.fwd.set(0,i,-1).normalize(),e.up.set(0,1,i).normalize()}return e}const ni={launchPerfect:.07,launchGood:.18,shiftPerfect:.055,shiftGreen:.11,beatOn:.09,cuePerfect:.12,cueGood:.32},Zc=mn(fc),Ad=Oe.tLip+bm;function Cd(){return{t:0,beat:0,section:"intro",mode:"drive",s:0,v:0,vNom:0,mph:0,y:0,vy:0,airborne:!1,airTime:0,xOff:0,zOff:0,pos:new L,quat:new ri,up:new L(0,1,0),fwd:new L(0,0,-1),pitch:0,roll:0,inLoop:!1,loopTheta:0,upsideDown:!1,holding:!1,pressBeat:-1,rev:0,launched:!1,launchT:0,launch:null,gear:1,shift:{nextT:0,light:0,green:!1,perfect:!1,active:!1,gear:1},perf:1,boost:0,boostV:0,thrust:0,thrustArm:0,flap:0,lastFlapT:-9,score:0,combo:0,maxCombo:0,rings:0,ringsTotal:0,perfectShifts:0,hits:0,lapTime:0,finished:!1,finishT:0,results:null,timeScale:1,shiftT:-9,shiftPerfect:!1,landT:-9,flapT:-9,cam:{shot:"",cut:!1,fov:60,shake:0,roll:0,punch:0},flash:0,aberration:0,landImpact:0,popups:[],events:[],rcs:{down:0,left:0,right:0,pitch:0},cue:null,zero60:{show:!1,t:0,frozen:!1,final:jl},puffs:[],flips:0,fleetFlipped:0,gas:1,kickflip:null,flipAir:null,climbV:0,climbHits:0,megaFlip:null,megaLanding:!1,landGrade:"",flipGrade:"",susp:{z:0,zv:0,p:0,pv:0,r:0,rv:0,aLong:0,load:1,wheels:[0,0,0,0],bottom:0},att:{p:0,w:0,r:0,wr:0},slip:0}}const Rd=[[.865,-1.36],[-.865,-1.36],[.865,1.32],[-.865,1.32]],wi={travel:.13,ext:.07,wz:10.5,zz:.3,wp:11.5,zp:.36,wr:13,zr:.4},EM=Math.atan(2*Bs/xs),Pd=.3,Ld=.5;function Im(n,t){if(n<0||n>t)return[0,0];const e=ln(n/.05)*ln((t-n)/.05);return n<t/2?[(n<Pd?1:Ld)*e,0]:[0,(n>t-Pd?1:Ld)*e]}const jr=680,Gh=(()=>{const n=Cf,t=n/jr,e=new Float64Array(jr+1);let i=0,s=0;for(let a=1;a<=jr;a++){const[c,l]=Im((a-.5)*t,n);i+=(c-l)*t,s+=i*t,e[a]=s}const o=_n/e[jr];for(let a=0;a<=jr;a++)e[a]*=o;return e})();function AM(n,t){if(n<=0)return 0;if(n>=t)return _n;const e=n/t*jr,i=Math.min(jr-1,Math.floor(e)),s=e-i;return Gh[i]+(Gh[i+1]-Gh[i])*s}const $i={dx:3.2,dz:-6.4,h:.6},yr=(()=>{const n=Math.hypot($i.dx,$i.dz);return[$i.dx/n,$i.dz/n]})(),Jc=(n,t,e)=>{const i=Math.min(n,t);return i-e*Math.log(Math.exp((i-n)/e)+Math.exp((i-t)/e))};function Ju(n={}){const{camera:t=null,car:e=null,world:i=null,fx:s=null,hud:o=null,audio:a=null}=n;let c=!!n.autoplay;const l=new Set,h={state:Cd(),muted:!1};let r=h.state;const u=e&&(e.isObject3D?e:e.root||e.group||e.object3d||e.mesh||e.object||null);let f=0,d=0,v,g,m,p,y,M;function _(){f=0,d=0,v={pressed:!1,shiftDone:-1,beatDone:-1,lastFlap:-1,kick:!1},g={shot:"",pos:new L(0,1.4,7),look:new L(0,.6,0),up:new L(0,1,0),fov:50,shake:0,punch:0,carYs:0,initialized:!1,shotT0:0,off:new L,lookOff:new L,rel:!0,fix:null},m=-1,p=0,y=0,M={}}_();function D(E,T,H={}){const S={type:E,text:T,t:r.t,beat:r.beat,...H};r.events.push(S),r.events.length>64&&r.events.shift(),T&&E!=="flap"&&r.popups.push({text:T,t0:r.t,kind:E,style:H.style||E,sub:H.sub});for(const at of l)try{at(S)}catch(V){console.warn("[gameplay] listener",V)}return h.muted||P(S),S}const I={launch:E=>({name:"launch",grade:E.rating}),shift:E=>({name:"shift",grade:E.perfect?"PERFECT":"GOOD",points:E.perfect?400:200,gear:E.gear}),miss:()=>({name:"shift",grade:"LATE"}),combo:()=>({name:"combo",n:r.combo}),air:()=>({name:"jump"}),land:E=>[{name:"land"},{name:"airtime",secs:E.airTime}],touchdown:()=>({name:"land"}),softland:()=>({name:"land"}),hardland:()=>({name:"land"}),hit:()=>({name:"pylon"}),scrape:()=>({name:"land"}),flap:()=>({name:"thrust"}),kickflip:()=>({name:"thrust"}),thrusters:()=>({name:"thrust"}),fleetflip:()=>({name:"ring",combo:r.combo}),rowclear:()=>({name:"ring",combo:1}),climbbeat:()=>({name:"ring",combo:r.combo}),checkpoint:()=>({name:"checkpoint"}),finish:E=>[{name:"finish",results:E.results},{name:"record"}],megaflip:()=>({name:"whoosh"}),inverted:()=>({name:"whoosh"})};function P(E){const T=I[E.type];let H=T?T(E):null;H&&!Array.isArray(H)&&(H=[H]);try{o&&typeof o.onGameplayEvent=="function"&&o.onGameplayEvent(E)}catch(S){console.warn("[gameplay] hud hook",S)}if(H)for(const S of H){const at={...S,t:E.t,beat:E.beat,source:"gameplay"};if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof CustomEvent=="function")try{window.dispatchEvent(new CustomEvent("rr:event",{detail:at}))}catch(V){console.warn("[gameplay] rr:event",V)}}if(s)try{E.type==="land"||E.type==="touchdown"||E.type==="hardland"?s.land&&s.land(r.pos.clone(),we(r.landImpact+.3,.3,1)):E.type==="hit"?s.hit&&s.hit(r.pos.clone(),1):E.type==="scrape"?s.sparks&&s.sparks(r.pos.clone(),.6,new L(0,1,1)):(E.type==="shift"&&E.perfect||E.type==="megaflip")&&s.boost&&s.boost(E.type==="shift"?.6:1)}catch(S){console.warn("[gameplay] fx hook",S)}if(e)try{(E.type==="flap"||E.type==="kickflip")&&e.thrustPulse&&e.thrustPulse(1),(E.type==="land"||E.type==="touchdown"||E.type==="softland"||E.type==="hardland")&&e.land&&e.land(we(r.landImpact+.3,.3,1.6))}catch(S){console.warn("[gameplay] car hook",S)}}function F({shake:E=0,flash:T=0,punch:H=0,aberr:S=0}={}){if(g.shake=Math.max(g.shake,E),g.punch=Math.max(g.punch,H),r.flash=Math.max(r.flash,T),r.aberration=Math.max(r.aberration,S),!h.muted&&s)try{T>=.3&&s.flash&&s.flash(T*.6)}catch{}}function R(E){r.score+=Math.round(E*(1+Math.min(r.combo,20)*.1))}function x(){r.combo++,r.maxCombo=Math.max(r.maxCombo,r.combo),r.combo>1&&r.combo%5===0&&D("combo",`x${r.combo} COMBO`)}function z(){r.combo=0}function G(E){return Ll(y*1.618+E*7.77+.5)}function st(E,T,H,S,at,V,xt,K,qt,Pt=.55){y++,r.puffs.push({t0:r.t,x:E,y:T,z:H,vx:S,vy:at,vz:V,r0:xt,r1:K,life:qt,a:Pt,seed:Ll(y*3.1)}),r.puffs.length>1800&&r.puffs.splice(0,r.puffs.length-1800)}function vt(E,T,H,S){for(M[E]=(M[E]||0)+T*H;M[E]>=1;)M[E]-=1,S()}const Rt=new L;function mt(E,T,H=1,S=.6){vt("tire",T,E,()=>{const at=G(1)<.5?-1:1;Rt.set(at*(.7+G(7)*.3),.25,1.25+G(8)*.4).applyQuaternion(r.quat).add(r.pos);const V=at*(.4+G(2)*7.5);st(Rt.x,.2,Rt.z,V,.25+G(3)*1.1,1+G(4)*4.5,.9*H,(3+G(5)*2.8)*H,2.8+G(6)*1.8,S)})}function It(E,T,H,S,at=1,V=0,xt=1,K=.5){for(let qt=0;qt<E;qt++){const Pt=G(qt)*_n,Nt=(4+G(qt+9)*9)*S;let ne=Math.cos(Pt),te=Math.sin(Pt);-(ne*V+te*xt)>1-K||st(T+ne*1.2,.1,H+te*1.2,ne*Nt,.15+G(qt+3)*.5,te*Nt,.6*at,(1.4+Nt*.32+G(qt+5))*at,3.2+G(qt+7)*2,.6)}}const nt=3.6,kt=.2,se={flip:1,mega:.75,fleet:.6},fe={flip:[.96,-.27],mega:[.44,-.9],fleet:[yr[0],yr[1]]};function le(E,T,H,S,at,V="flip",xt=0,K=0){const[qt,Pt]=fe[V]||fe.flip,Nt=Math.floor(G(S)*4)%4,[ne,te]=Rd[Nt];Rt.set(ne*.85,0,te*.8).applyQuaternion(r.quat);const me=E+Rt.x,oe=T+Rt.z,Ht=G(S+1)*_n;let re=Math.cos(Ht),he=Math.sin(Ht),De=re*qt+he*Pt;(at===1||at===3)&&De>.25&&(re=-re,he=-he,De=-De);const _e=De>.3;let Ue;if(at===1){const Ce=G(S+9)<.3,be=(Ce?2.6+G(S+2)*3.4:1.4+G(S+2)*3.6)*H;st(me+re*.9,.3+G(S+3)*.6*H,oe+he*.9,re*be+xt,(Ce?2.6+G(S+4)*2.2:.9+G(S+4)*1.5)*H,he*be+K,1*H,(Ce?2+G(S+5)*1.8:2.4+G(S+5)*2.4)*H,4.6+G(S+6)*3.4,Ce?.66:.6),Ue=r.puffs[r.puffs.length-1],Ue.k=1,Ue.rise=Ce?.45+.35*G(S+7):.16+.2*G(S+7)}else if(at===2){const Ce=.4+G(S+2)*1.6,be=_e?.45:1;st(me+re*Ce*.6,.25,oe+he*Ce*.6,re*1.2*H+xt*.6,(1.6+G(S+4)*2.2)*be*H,he*1.2*H+K*.6,.7*H,(1.3+G(S+5)*1)*H*(_e?.75:1),3.2+G(S+6)*2.4,_e?.32:.6),Ue=r.puffs[r.puffs.length-1],Ue.k=1.5,Ue.rise=(.16+.22*G(S+7))*be}else if(at===3){const Ce=(5+G(S+2)*4.5)*H;st(E+re*Ce*.35,.4,T+he*Ce*.35,re*Ce*.65*1.4+xt,(1.4+G(S+4)*1.6)*H,he*Ce*.65*1.4+K,.45*H,(1+G(S+5)*1.1)*H,4.5+G(S+6)*3,.5),Ue=r.puffs[r.puffs.length-1],Ue.k=1.4,Ue.rise=.5+.45*G(S+7)}else{const Ce=(5.5+Math.pow(G(S+2),.8)*10)*H,be=_e?.3:1;st(me+re*.5,.12,oe+he*.5,re*Ce+xt,(.25+G(S+4)*1.3)*be,he*Ce+K,.6*H,(1.8+G(S+5)*2+Ce*.12)*H*(_e?.6:1),3.4+G(S+6)*3,_e?.36:.52),Ue=r.puffs[r.puffs.length-1],Ue.k=1.45+.4*G(S+8),Ue.rise=(.12+.22*G(S+7))*be}Ue.kind=1}function ut(E,T,H,S,at,V=""){const xt=se[V]??.7,K=S+kt;if(at<.05||K>nt+1.4)return;const qt=at*ln((nt+1.4-K)/1.8),Pt=V==="mega"?r.fwd.x*r.v*.45:0,Nt=V==="mega"?r.fwd.z*r.v*.45:0,ne=ln((nt+.4-K)/1.6);vt("wash",360*qt*xt,E,()=>le(T,H,xt,11,0,V,Pt,Nt)),vt("billow",280*qt*xt*ne,E,()=>le(T,H,xt,31,1,V,Pt,Nt)),vt("column",170*qt*xt*ne,E,()=>le(T,H,xt,57,2,V,Pt,Nt)),vt("tendril",110*qt*xt*ne,E,()=>le(T,H,xt,83,3,V,Pt,Nt)),K<2.7&&!r._bloom&&(r._bloom=!0,$(T,H,V,Pt,Nt))}function $(E,T,H,S=0,at=0){const V=se[H]??.7,xt=Math.round(150*V),K=Math.round(90*V),qt=Math.round(50*V),Pt=Math.round(40*V);for(let Nt=0;Nt<xt;Nt++)y++,le(E,T,V,300+Nt*3,0,H,S,at);for(let Nt=0;Nt<K;Nt++)y++,le(E,T,V,700+Nt*3,1,H,S,at);for(let Nt=0;Nt<qt;Nt++)y++,le(E,T,V,1100+Nt*3,2,H,S,at);for(let Nt=0;Nt<Pt;Nt++)y++,le(E,T,V,1500+Nt*3,3,H,S,at)}function X(E,T,H){const S=se[H]??.7,at=H==="mega"?r.fwd.x*r.v*.35:0,V=H==="mega"?r.fwd.z*r.v*.35:0,xt=Math.round(150*S),K=Math.round(100*S),qt=Math.round(40*S);for(let Pt=0;Pt<xt;Pt++)y++,le(E,T,S,200+Pt*3,0,H,at,V);for(let Pt=0;Pt<K;Pt++)y++,le(E,T,S,900+Pt*3,1,H,at,V);for(let Pt=0;Pt<qt;Pt++)y++,le(E,T,S,1300+Pt*3,2,H,at,V);r._bloom=!1}h.press=()=>{c||f++},h.release=()=>{c||d++},h.setAutoplay=E=>{c=!!E},Object.defineProperty(h,"autoplay",{get:()=>c}),h.on=E=>(l.add(E),()=>l.delete(E)),h.bindInput=(E=window)=>{const T=S=>{if(S.type==="keydown"){if(S.code!=="Space"||S.repeat)return;S.preventDefault()}h.press()},H=S=>{S.type==="keyup"&&S.code!=="Space"||h.release()};return E.addEventListener("pointerdown",T),E.addEventListener("pointerup",H),E.addEventListener("pointercancel",H),window.addEventListener("keydown",T),window.addEventListener("keyup",H),()=>{E.removeEventListener("pointerdown",T),E.removeEventListener("pointerup",H),E.removeEventListener("pointercancel",H),window.removeEventListener("keydown",T),window.removeEventListener("keyup",H)}};function Et(){r.holding=!0,r.pressBeat=r.beat;const E=r.section;E==="intro"||!r.launched&&E==="launch"||Wt()}function At(){const E=r.holding;r.holding=!1,!r.launched&&E&&r.beat>8&&(r.pressBeat??-1)>=6&&St()}function St(){if(r.launched)return;const E=r.t-Zc;let T;E<-ni.launchGood?T="EARLY":Math.abs(E)<=ni.launchPerfect?T="PERFECT":Math.abs(E)<=ni.launchGood?T="GOOD":T="LATE",r.launch=T,r.launchT=Math.max(r.t,Zc),r.launched=!0,r.perf={PERFECT:1,GOOD:.985,LATE:.97,EARLY:.965}[T],r.zero60.final=+(jl*{PERFECT:1,GOOD:1.06,LATE:1.16,EARLY:1.22}[T]).toFixed(2),T==="PERFECT"?(R(1e3),x(),r.boostAmp=0,r.boost=Math.min(1,r.boost+.3)):T==="GOOD"&&(R(500),x()),D("launch",`${T} LAUNCH`,{rating:T,err:E,style:T==="PERFECT"?"perfect":"normal"}),F({shake:.9,flash:.08,aberr:.6})}function Ft(E,T,H,S,at){r.cue={text:E,kind:T,t0:H,t1:S,tHit:at,k:0,active:!0,done:!1,grade:""}}function Wt(){const E=r.section,T=r.t;if(r.flap=1,r.lastFlapT=T,r.cue&&r.cue.active&&!r.cue.done&&r.cue.kind==="tap"&&r.mode!=="fly"&&T>=r.cue.t0&&T<=r.cue.t1){const H=Math.abs(T-r.cue.tHit),S=H<=ni.cuePerfect?"PERFECT":H<=ni.cueGood?"GOOD":"LATE";r.cue.done=!0,r.cue.grade=S,r.kickflip={t0:T,dur:Cf},R(S==="PERFECT"?1200:S==="GOOD"?700:300),x(),D("kickflip",`${S} KICKFLIP`,{grade:S,style:S==="PERFECT"?"perfect":"normal"}),F({punch:6,aberr:.4});return}if(E==="launch"&&r.launched&&r.mode==="drive"){const H=bt(T);if(H&&Math.abs(T-H.t)<=ni.shiftGreen&&!H.used){ae[H.idx]=!0;const S=Math.abs(T-H.t)<=ni.shiftPerfect;r.gear++,r.boostAmp=S?3.2:1.6,r.boostT0=T,r.perf=we(r.perf+(S?.01:.005),.9,1.05),r.boost=Math.min(1,r.boost+(S?.18:.1)),S&&r.perfectShifts++,R(S?400:200),x(),r.shiftT=T,r.shiftPerfect=S,D("shift",S?"PERFECT SHIFT":"GOOD SHIFT",{gear:r.gear,perfect:S,style:S?"perfect":"normal"}),F({shake:S?.75:.45,aberr:S?1:.4})}else r.airborne||(r.perf=we(r.perf-.01,.9,1.05),D("miss","EARLY SHIFT",{style:"bad"}));return}if((E==="flip"||E==="reveal")&&(r.mode==="drive"||r.mode==="climb")&&r.beat<Dl+3&&!(r.beat>70)){const H=Math.round(r.beat);Math.abs(r.t-mn(H))<=ni.beatOn&&H!==m?(m=H,r.climbHits++,R(150),x(),F({punch:3}),D("climbbeat","",{beatN:H})):E==="flip"&&(z(),r.perf=we(r.perf-.01,.9,1.05),D("offbeat","OFF BEAT",{style:"bad"}));return}if(E==="build"){const H=Math.round(r.beat);Math.abs(r.t-mn(H))<=ni.beatOn&&H!==m&&(m=H,r.thrustArm=Math.min(1,r.thrustArm+.1),R(100),x(),F({punch:3}));return}if(r.mode==="fly"&&!r.megaLanding){if(T-r.flapT<.06)return;r.flapT=T,r.vy=vd,(!r.megaFlip||T-r.megaFlip.t0>=r.megaFlip.dur)&&(r.megaFlip={t0:T,dur:_d}),r.gas=Math.max(0,r.gas-.04),D("flap","",{}),F({punch:2.5})}}const ae=[];function bt(E){for(let T=0;T<He.shiftBeats.length;T++){const H=mn(He.shiftBeats[T]);if(E<=H+ni.shiftGreen)return{idx:T,t:H,used:!!ae[T]}}return null}function Ot(){const E=r.t,T=r.beat,H=r.section;if(H==="intro"||!r.launched&&H==="launch"){!v.pressed&&T>=8&&(v.pressed=!0,Et()),v.pressed&&!r.launched&&E>=Zc-.004&&At();return}if(r.cue&&r.cue.kind==="tap"&&r.cue.active&&!r.cue.done&&r.mode!=="fly"&&E>=r.cue.tHit-.004){Et(),r.holding=!1;return}if(H==="launch"&&r.mode==="drive"){for(let S=0;S<He.shiftBeats.length;S++){const at=mn(He.shiftBeats[S]);if(S>v.shiftDone&&E>=at-.004&&E<=at+ni.shiftPerfect){v.shiftDone=S,Et(),r.holding=!1;return}}return}if((H==="flip"||H==="build")&&(r.mode==="drive"||r.mode==="climb")&&(H==="build"||r.beat<Dl+3)){const S=Math.round(T);S>v.beatDone&&Math.abs(E-mn(S))<=.012&&(v.beatDone=S,Et(),r.holding=!1);return}if(r.mode==="fly"&&!r.megaLanding){if(r.s>ie[ie.length-1].s&&!(r.y<.7&&r.vy<0))return;const S=Math.floor(T*2+1e-6)/2,at=mn(S),V=r.y<.7&&r.vy<0&&E-r.flapT>.12;if(!(S>v.lastFlap&&E-at<.02)&&!V)return;v.lastFlap=Math.max(v.lastFlap,S),(V||b(E,S))&&(Et(),r.holding=!1)}}const O=1/120,ie=He.fleetRows;function Yt(E){for(const T of ie)if(T.s+T.depth/2+2>E)return T.top+kh;return 2}function ce(E,T,H,S,at){const V=r.s-Ji(r.t);let xt=H,K=0,qt=!0,Pt=V+Ji(H);for(;xt<S-1e-9;){const Nt=Math.min(O,S-xt);qt&&at&&(T=vd),qt=!1,T-=_l*Nt,E+=T*Nt,xt+=Nt,E<0&&(E=0,T=6,K+=600),E>Va&&(E=Va,T=Math.min(T,-1),K+=200);const ne=V+Ji(xt);for(const te of ie){const me=te.depth/2+2.2;if(Math.abs(ne-te.s)<=me&&E<te.top+kh-.9&&(K+=1500*Nt*60),Pt<te.s&&ne>=te.s){const oe=E-(te.top+kh);K+=oe*oe*1.2}}Pt=ne}return{y:E,vy:T,cost:K}}const Jt=ie.map(E=>E.beat-1),ct=_d/Xi,ft=E=>{for(const T of Jt)if(T>=E-1e-6)return T;return 1/0};function C(E,T,H,S,at,V){const xt=mn(S+.5);let K=1/0,qt=!1;const Pt=Jt.some(ne=>Math.abs(ne-S)<1e-6),Nt=S>=V-1e-6;for(const ne of Pt?[!0]:[!1,!0]){if(ne&&!Pt&&Nt&&S+ct>ft(S+.01))continue;const te=ce(E,T,H,xt,ne);let me=te.cost+(ne&&!Pt?.05+(Math.abs(S-Math.round(S))>.01?.3:0):0);if(me>=K)continue;const oe=ne&&Nt?S+ct:V;at>1?me+=C(te.y,te.vy,xt,S+.5,at-1,oe).cost:me+=Math.abs(te.y-Yt(r.s+(Ji(xt)-Ji(r.t))))*.4+Math.abs(te.vy)*.02,me<K&&(K=me,qt=ne)}return{cost:K,flap:qt}}function b(E,T){const H=r.megaFlip?so(r.megaFlip.t0+r.megaFlip.dur):-1;return C(r.y,r.vy,E,T,6,H).flap}function W(E,T){const H=-Math.min(7,1.8+1.5*Math.max(0,E));return we((_l+10*(H-T))/xd,.3,1)}const Z={burn:!1};function tt(E,T,H,S){Z.burn=!!r._burn;const at=wm(Z,E,T,H,S);return r._burn=Z.burn,at}const Y={pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0};new Ie,new L,new L,new L;const pt=new ri,dt=new ri,lt=new L(1,0,0),Mt=new L(0,0,1),N=new L,J=new L,Tt=new ri;function Dt(E){return E<3.2?"SOFT":E<6.5?"GOOD":"HARD"}function ht(E,T,H=null){r.airborne=!1,r.landT=r.t,r.landImpact=we(E/12,.15,1);{const V=r.susp;V.zv=-we(E,0,10),H&&(V.p=we(H.p||0,-.1,.1),V.pv=we((H.w||0)-E*Math.sin(H.p||0)*1.4,-3,3),V.r=we(H.r||0,-.07,.07),V.rv=we(H.wr||0,-2,2))}const S=Dt(E);if(r.landGrade=S,S==="HARD"){if(z(),r.perf=we(r.perf-.03,.9,1.05),r.hits++,!h.muted&&s&&s.sparks)try{s.sparks(r.pos.clone(),1,new L(0,.6,1))}catch{}D("hardland","HARD LANDING",{impact:E,where:T,style:"bad"}),F({shake:1.3,flash:.2,aberr:1})}else R(S==="SOFT"?2e3:1e3),x(),D("softland",S==="SOFT"?"SOFT LANDING":"CLEAN LANDING",{impact:E,where:T,style:"perfect"}),F({shake:.5,flash:.12,aberr:.3});if(T==="flip"||T==="mega"){X(r.pos.x,r.pos.z,T);return}if(T==="fleet"?It(52,r.pos.x,r.pos.z,.75,1.15,yr[0],yr[1],.75):It(80,r.pos.x,r.pos.z,.75,1.2,yr[0],yr[1],.8),T!=="fleet"){const V=T==="flip"?1:.8;for(let xt=0;xt<70;xt++){const K=G(xt+120)*_n,qt=(.8+Math.pow(G(xt+121),.7)*5.2)*V,Pt=Math.cos(K),Nt=Math.sin(K);if(Pt*yr[0]+Nt*yr[1]>.8&&qt>2.2)continue;const ne=.3+G(xt+122)*1.6;st(r.pos.x+Pt*qt,ne,r.pos.z+Nt*qt,Pt*(1.5+G(xt+123)*2.5),.35+G(xt+124)*.8,Nt*(1.5+G(xt+123)*2.5)+1.2,1.6*V,(3+G(xt+125)*2.2)*V,4.2+G(xt+126)*2.6,.5)}}const at=T==="fleet"?18:26;for(let V=0;V<at;V++){const xt=(G(V+40)-.5)*3,K=Math.sin(xt)-.35,qt=Math.cos(xt),Pt=2.5+G(V+45)*3.5;st(r.pos.x+K*Pt,.2+G(V+46)*.8,r.pos.z+qt*Pt,K*2,.6+G(V+42)*1,qt*2.5,1.4,3.8+G(V+43)*2.4,4.5+G(V+44)*2.5,.5)}}function zt(E,T){r.t=T,r.beat=so(T),r.holding&&r.pressBeat<6&&r.beat>=6&&(r.pressBeat=6);const H=_m(T);for(H!==r.section&&(r.section,r.section=H,jt(H)),c&&Ot();f>0;)f--,Et();for(;d>0;)d--,At();const S=Df(T);if(S!==r.timeScale&&!h.muted&&s&&s.setTimeScale)try{s.setTimeScale(S)}catch{}r.timeScale=S;const at=E*S;r.launched?r.rev+=(.35+.5*we(r.v/60,0,1)-r.rev)*ti(3,E):(r.rev+=((r.holding?1:.08)-r.rev)*ti(r.holding?3.2:4,E),r.holding&&(r.rev+=.03*Math.sin(T*61)),T>Zc+.45&&(r.holding=!1,St()));for(const[V,xt]of[[10,"3"],[12,"2"],[14,"1"],[16,"GO"]]){const K=mn(V);T>=K&&T-E<K&&D("countdown",xt,{n:xt,style:"countdown"})}if(H==="launch"&&r.launched&&r.mode==="drive"){const V=bt(T);if(V){const xt=V.idx>0?mn(He.shiftBeats[V.idx-1]):r.launchT;r.shift.nextT=V.t,r.shift.light=we((T-xt)/(V.t-xt),0,1),r.shift.green=Math.abs(T-V.t)<=ni.shiftGreen,r.shift.perfect=Math.abs(T-V.t)<=ni.shiftPerfect,r.shift.active=!ae[V.idx],!ae[V.idx]&&T>V.t+ni.shiftGreen-E&&T<=V.t+ni.shiftGreen&&(ae[V.idx]=!0,r.perf=we(r.perf-.01,.9,1.05),z(),D("miss","MISSED SHIFT",{style:"bad"}))}else r.shift.active=!1,r.shift.green=!1,r.shift.light=0;r.shift.gear=r.gear}else r.shift.active=!1,r.shift.green=!1;r.vNom=Sd(T);{const V=T-(r.boostT0??-99);r.boostV=V<0||V>8?0:(r.boostAmp||0)*ln(V/.45)*Math.exp(-Math.max(0,V-.45)/.8)}if(r.rcs.down*=Math.exp(-E*10),r.rcs.left*=Math.exp(-E*10),r.rcs.right*=Math.exp(-E*10),r.rcs.pitch*=Math.exp(-E*10),r.mode==="drive"?et(E,T):r.mode==="jump"?it(E,T):r.mode==="climb"?gt(E):r.mode==="flipAir"?Lt(E,at,T):r.mode==="fly"&&Ut(E,T),r.mph=Math.round((r.launched?Math.hypot(r.v,(r.mode==="flipAir",0)):0)*uc*(r.mode==="drive"?r.perf:1)),r.mode==="flipAir"&&r.flipAir&&(r.mph=Math.round(Math.hypot(r.flipAir.vx,r.flipAir.vy,r.flipAir.vz)*uc)),r.landImpact*=Math.exp(-E*5),r.lapTime=r.launched?r.finished?r.finishT-r.launchT:T-r.launchT:0,r.launched){const V=T-r.launchT;r.zero60.show=V>=0&&r.beat<23,r.zero60.t=Math.min(V,r.zero60.final),!r.zero60.frozen&&V>=r.zero60.final&&(r.zero60.frozen=!0,r.launch!=="EARLY"&&D("moment3",`#3 0-60 IN ${r.zero60.final.toFixed(2)}s`,{style:"moment",sub:"TESLA ROADSTER"}))}if(r.launched&&r.launch!=="EARLY"&&T-r.launchT>=r.zero60.final-.006&&T-r.launchT<r.zero60.final+1.2&&r.mode==="drive"&&(r.mph=Math.max(r.mph,60)),!r.launched&&r.holding&&r.beat>12&&(r.pressBeat??-1)>=6&&mt(E,30+40*ln((r.beat-12)/3.5),.85,.6),r.launched&&T>=r.launchT&&T-r.launchT<1.8){const V=(T-r.launchT)/1.8;mt(E,520*(1-V)*(1-V)+50,1.2+.45*(1-V),.85)}if(r.slip=r.launched?17*Math.pow(we(1-(T-r.launchT)/.95,0,1),1.4):0,r.cue){const V=r.cue;V.k=we((T-V.t0)/Math.max(.001,V.tHit-V.t0),0,1),V.active=T>=V.t0&&T<=V.t1&&!(V.kind==="tap"&&V.done&&T>(V.doneT??(V.doneT=T))+.5),T>V.t1+.6&&(r.cue=null)}for(!r.cue&&T>=Oe.tLip-1.2*Xi&&T<Oe.tLip&&!r._kickCue&&(r._kickCue=!0,Ft("TAP: THRUSTERS","tap",Oe.tLip-1.2*Xi,Ad+ni.cueGood+.3,Ad)),H==="build"&&(r.thrustArm=Math.max(r.thrustArm,ln((r.beat-88)/8)),r.gas=Math.max(r.gas,r.thrustArm)),H==="build"&&r.beat>=94&&!r._ready&&(r._ready=!0,D("boostready","MEGA FLIP READY",{style:"big",sub:"TAP: THRUSTERS"})),r.flap*=Math.exp(-E*7),r.thrust=r.mode==="fly"?we(.25+r.flap*.9,0,1):H==="build"?r.thrustArm*.3:0,r.mode==="flipAir"&&r.flipAir&&(r.thrust=we(r.flipAir.rear*1.1,0,1)),r.boost=H==="build"?Math.max(r.boost,r.thrustArm):r.boost,(r.mode==="flipAir"||r.mode==="fly")&&(r.boost=r.gas),!r.finished&&r.s>=He.finish.s&&r.mode==="drive"&&r.s>ee.sLip&&(r.finished=!0,r.finishT=T,r.results={time:r.finishT-r.launchT,score:r.score,maxCombo:r.maxCombo,rings:r.fleetFlipped,ringsTotal:Gt(),launch:r.launch,zero60:r.zero60.final,perfectShifts:r.perfectShifts,flips:r.flips,fleetFlipped:r.fleetFlipped,newRecord:!0},D("finish","FINISH",{results:r.results,style:"big"}),F({flash:.7,shake:.5,punch:6})),Ae(E),Xt(E),r.flash*=Math.exp(-E*5),r.aberration*=Math.exp(-E*4);r.popups.length&&r.t-r.popups[0].t0>2.5;)r.popups.shift();if(r.puffs.length&&!(y&31)){const V=r.t;r.puffs=r.puffs.filter(xt=>V-xt.t0<xt.life)}}function Gt(){let E=0;for(const T of ie)E+=T.vehicles.length;return E}function Xt(E){const T=r.susp,H=!r.airborne&&r.mode!=="flipAir"&&r.mode!=="fly"&&r.mode!=="jump",S=r._vSusp??r.v;r._vSusp=r.v;let at=H&&r.mode==="drive"&&E>0?we((r.v-S)/E,-40,40):0;T.aLong+=(at-T.aLong)*ti(25,E);let V=0,xt=0,K=0,qt=1;if(H&&(xt=we(T.aLong*.00125,-.035,.045),V=-Math.abs(T.aLong)*5e-4,r.mode==="climb"&&(qt=Math.max(0,r.v*r.v*ca(r.s-ee.s0,tc).k/fn+Math.cos(r.loopTheta||0)),V-=we((qt-1)*.024,0,.11)),!r.launched&&r.holding&&(xt+=.008+.005*Math.sin(r.t*29)*r.rev,V-=.01*r.rev,K=.006*r.rev),r.launched&&r.v>1)){const te=r.t*(2+r.v*.35);V+=.004*qs(te)*Math.min(1,r.v/30),xt+=.0015*qs(te*.7+9)}T.load=qt;const Pt=H?1:.6;T.zv+=(-(wi.wz*wi.wz*Pt)*(T.z-V)-2*wi.zz*wi.wz*T.zv)*E,T.z+=T.zv*E,T.pv+=(-(wi.wp*wi.wp*Pt)*(T.p-xt)-2*wi.zp*wi.wp*T.pv)*E,T.p+=T.pv*E,T.rv+=(-(wi.wr*wi.wr*Pt)*(T.r-K)-2*wi.zr*wi.wr*T.rv)*E,T.r+=T.rv*E,T.p=we(T.p,-.11,.11),T.r=we(T.r,-.08,.08),T.bottom*=Math.exp(-E*6);let Nt=1/0,ne=-1/0;for(let te=0;te<4;te++){const[me,oe]=Rd[te],Ht=T.z-oe*T.p+me*T.r;T.wheels[te]=H?we(-Ht,-.07,wi.travel):0,Nt=Math.min(Nt,Ht),ne=Math.max(ne,Ht)}if(H&&Nt<-.13){const te=-.13-Nt;T.z+=te,T.zv<0&&(T.zv<-2.5&&(T.bottom=Math.max(T.bottom,we(-T.zv/6,0,1))),T.zv*=-.2)}ne>wi.ext&&(T.z-=ne-wi.ext)}function U(E,T){const H=Ji(T),S=Sd(T)+r.boostV,at=2*(H+r.boostV*.12-r.s);return Math.max(0,S+we(at,-12,12))}function et(E,T){r.launched?r.v=U(E,T):r.v=0;const H=r.s;if(r.s+=r.v*E,r.xOff*=Math.exp(-E*1.4),r.zOff*=Math.exp(-E*1.4),H<He.ramp.s1&&r.s>=He.ramp.s1){r.mode="jump",r.airborne=!0,r.airTime=0,r._burn=!1,r.y=Bs,r.vy=r.v*(2*Bs/xs),r.att.p=EM+r.susp.p,r.att.w=-.16,r.att.r=0,r.att.wr=0,D("air","",{}),F({punch:9,shake:.25});return}if(H<ee.s0&&r.s>=ee.s0){r.mode="climb",r.climbV=ee.vIn*(.985+.015*we(r.climbHits/4,0,1)),Ft("HOLD: THRUSTERS","hold",ee.tBurn-.08,ee.tLand+1.5,ee.tBurn),r.cue.active=!1;return}if(H<He.mega.s1&&r.s>=He.mega.s1&&r.s>ee.sLip){r.mode="fly",r.airborne=!0,r.airTime=0,r.y=dc,r.vy=r.v*(2*dc/pc),r.megaLanding=!1,r._burn=!1,r.megaFlip={t0:T,dur:1.5,mega:!0},r.flips++,r.gas=1,D("megaflip","MEGA FLIP",{style:"big",sub:"TAP: THRUSTERS"}),Ft("TAP: THRUSTERS","tap",T+.6,mn(100.6),mn(100)),F({punch:12,shake:.6,flash:.3,aberr:.5});return}r.y=Ar(r.s),r.vy=0,r.airborne=!1}function it(E,T){r.v=U(E,T),r.s+=r.v*E;const H=r.vy;let S=0;r.kickflip&&r.vy<0&&T-r.kickflip.t0>r.kickflip.dur*.7&&(S=tt(r.y-Ar(r.s),r.vy,1.8*fn,fn)),r.rcs.down=Math.max(r.rcs.down,S),r.vy+=(S*1.8*fn-fn)*E,r.y+=r.vy*E,r.airTime+=E;const at=r.att;if(r.kickflip){const K=r.kickflip.dur,qt=T-r.kickflip.t0,Pt=AM(qt,K);at.wr=E>0?(Pt-at.r)/E:0,at.r=Pt;const[Nt,ne]=Im(qt,K);r.rcs.right=Math.max(r.rcs.right,Nt),r.rcs.left=Math.max(r.rcs.left,ne)}let V=0;if(r.kickflip&&T-r.kickflip.t0>r.kickflip.dur*.45){const K=.035*ln((2.2-(r.y-Ar(r.s)))/1.6);V=we(-10*(at.p-K)-6*at.w,-4.5,4.5),r.rcs.pitch=we(V/4.5,-1,1)}at.w+=V*E,at.p+=at.w*E,!r._m1Done&&r.s>=He.ramp.s1&&(r._m1Done=!0,r._m1T=r.t,D("moment1","#1 JUMPING THE ENTIRE FLEET",{style:"moment",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y"})),H>0&&r.vy<=0&&!r._fleetDone&&(r._fleetDone=!0,R(1500),x());const xt=Ar(r.s);if(r.y<=xt&&r.vy<0){const K=-r.vy;r.y=xt,r.vy=0,r.mode="drive",r.kickflip&&(r.flips++,r.kickflip=null);const qt=at.r-_n*Math.round(at.r/_n);ht(K,"fleet",{p:at.p,w:at.w,r:qt,wr:at.wr}),r._fleetDone&&!r._fleetMsg&&(r._fleetMsg=!0,D("fleet","FLEET CLEARED",{style:"big",sub:"+1,500"})),r.pitch=0,r.roll=0,at.p=0,at.w=0,at.r=0,at.wr=0,D("land",`${r.airTime.toFixed(2)}s AIR`,{airTime:r.airTime,style:"normal"})}}function gt(E,T){const H=ca(r.s-ee.s0,tc).th;if(r.v=Math.sqrt(Math.max(4,r.climbV*r.climbV-2*fn*tc.y)),r.s+=r.v*E,r.y=0,r.vy=0,r.airborne=!1,!r._m2Done&&r.s>ee.s0+1.5&&(r._m2Done=!0,D("moment2","#2 THE MIDAIR FLIP",{style:"moment",sub:"PAST VERTICAL"})),H>Math.PI/2&&!r._invDone&&(r._invDone=!0,F({punch:6,aberr:.3})),r.s>=ee.sLip){const S=Pf(ee.sLip,ee.zLip,ee.height,r.v,ee.zLand);r.flipAir=S,r.mode="flipAir",r.airborne=!0,r.airTime=0,r._burn=!1,r.gas=1,F({punch:8,shake:.4})}}function Lt(E,T,H){const S=r.flipAir;let at;if(c?at=Il(S):at=r.holding?Il(S):0,Lf(S,T,at),r.airTime+=T,r.v=Math.hypot(S.vx,S.vz),r.y=S.y,r.vy=S.vy,r.gas=S.gas,r.rcs.down=Math.max(r.rcs.down,S.thr>.02?.55+.45*S.thr:0),r.rcs.pitch=we(S.alpha/9,-1,1),r.flipRear=S.rear,S.tau<ec&&S.side>.05?r.rcs.left=Math.max(r.rcs.left,Math.min(1,.35+S.side/Rm)):S.side>.15?r.rcs.left=Math.max(r.rcs.left,Math.min(.5,S.side/1.6)):S.side<-.15&&(r.rcs.right=Math.max(r.rcs.right,Math.min(.5,-S.side/1.6))),H>=ir&&!r._bulletDone&&(r._bulletDone=!0,D("bullet","",{})),S.upright&&!r._uprightDone&&(r._uprightDone=!0,r.flips++,R(2500),x(),D("upright","UPRIGHT",{style:"big",sub:"+2,500"})),S.thr>.3&&!r._thrDone&&(r._thrDone=!0,D("thrusters","THRUSTERS",{style:"normal"})),ut(E,S.x,S.z,S.y,S.thr>.02?.6+.4*S.thr:0,"flip"),S.landed){r.mode="drive";const V=ee.zLand-S.z;r.s=ee.sLip+Math.max(.001,V),r.zOff=V<.001?V*-1:0,r.xOff=S.x-lr,r.v=Math.max(0,-S.vz),r.y=0,r.vy=0,r.pitch-=_n*Math.round(r.pitch/_n);const xt=Math.abs(S.ph-_n)<.5;ht(xt?S.impact:Math.max(S.impact,7),"flip",{p:S.ph-_n,w:S.w,r:S.r,wr:S.wr}),r.pitch=0,r.flipGrade=r.landGrade,r.flipAir=null,r.cue&&r.cue.kind==="hold"&&(r.cue=null)}}function Ut(E,T){r.v=U(E,T);const H=r.s;r.s+=r.v*E,r.airTime+=E,!r.megaLanding&&r.s>=He.flight.landStart&&(r.megaLanding=!0,r._burn=!1,Ft("HOLD: THRUSTERS","hold",T,T+3,T+.3),D("thrusters","HOLD: THRUSTERS",{style:"normal"}));let S=0;if(r.megaLanding&&(S=c?W(r.y,r.vy):r.holding&&r.gas>0?1:0,r.gas=Math.max(0,r.gas-S*Cm*E),r.rcs.down=Math.max(r.rcs.down,S),ut(E,r.pos.x,r.pos.z,r.y,S,"mega")),r.vy+=(S*xd-_l)*E,r.vy=Math.max(r.vy,-30),r.y+=r.vy*E,r.y>Va&&(r.y=Va,r.vy=Math.min(r.vy,-1)),r.megaFlip){const at=(T-r.megaFlip.t0)/r.megaFlip.dur;r.rcs.pitch=at<.3?1:at>.7&&at<1?-1:r.rcs.pitch,at>=1&&(r.megaFlip.mega||r.flips++,r.megaFlip=null)}for(let at=p;at<ie.length;at++){const V=ie[at],xt=V.depth/2+2.1;if(r.s<V.s-xt)break;if(Math.abs(r.s-V.s)<=xt&&r.y<V.top+.05&&!V._hit&&(V._hit=!0,r.y=V.top+.3,r.vy=7,r.hits++,z(),D("hit","ROOF CLIP",{style:"bad",row:at}),F({shake:1.2,flash:.2,aberr:1}),!h.muted&&s&&s.sparks))try{s.sparks(r.pos.clone(),.9,new L(0,1,0))}catch{}if(H<V.s+xt&&r.s>=V.s+xt&&(p=at+1,!V._hit)){const K=r.megaFlip||r.t-(r._lastFlipEnd||-9)<.25,qt=V.vehicles.length;K?(r.fleetFlipped+=qt,R(400*qt),x(),D("fleetflip",V.finale?"THE ENTIRE FLEET":`FLEET FLIP x${qt}`,{style:V.finale?"big":"normal",n:qt,row:at,sub:`+${400*qt}`})):(R(150*qt),x(),D("rowclear","CLEAR",{n:qt,row:at})),F({punch:3})}}if(r.megaFlip==null&&r._wasFlip&&(r._lastFlipEnd=r.t),r._wasFlip=!!r.megaFlip,r.y<=0&&r.vy<0)if(r.megaLanding){const at=-r.vy;r.y=0,r.vy=0,r.mode="drive",r.megaFlip=null,r.pitch-=_n*Math.round(r.pitch/_n),ht(at,"mega",{p:r.pitch,w:0,r:0,wr:0}),r.pitch=0,r.cue&&r.cue.kind==="hold"&&(r.cue=null)}else r.y=0,r.vy=6,T-(r._scrapeT||-9)>.3&&(r._scrapeT=T,z(),D("scrape","SCRAPE",{style:"bad"}),F({shake:.6,aberr:.4}));r.beat>124&&!r._finaleDone&&(r._finaleDone=!0,D("finale","",{}))}function jt(E){E==="reveal"&&D("checkpoint","THE MIDAIR FLIP",{style:"big",sub:"NEXT: #2"})}function pe(E){return E<ee.s0?eo*ln((E-(ee.s0-90))/70):0}function Ae(E){if(jo(r.s,Y),r.mode==="flipAir"&&r.flipAir){const xt=r.flipAir;r.pos.set(xt.x,xt.y,xt.z),r.pitch=xt.ph,r.roll=xt.r,pt.setFromAxisAngle(lt,r.pitch),dt.setFromAxisAngle(Mt,xt.r),r.quat.copy(pt).multiply(dt),r.fwd.set(0,0,-1).applyQuaternion(r.quat),r.up.set(0,1,0).applyQuaternion(r.quat),r.inLoop=!1,r.upsideDown=Math.cos(xt.ph)<-.3;return}if(r.mode==="climb"||Y.onFlip){r.pos.copy(Y.pos),r.pos.x+=eo,r.fwd.copy(Y.fwd),r.up.copy(Y.up),r.pitch=Y.theta,r.roll=0,pt.setFromAxisAngle(lt,r.pitch),r.quat.copy(pt),r.inLoop=!0,r.loopTheta=Y.theta,r.upsideDown=Y.theta>Math.PI*.6;return}r.inLoop=!1,r.upsideDown=!1,r.fwd.copy(Y.fwd),r.up.copy(Y.up),r.pos.copy(Y.pos),r.pos.y=r.y,r.pos.x+=r.xOff+pe(r.s),r.pos.z+=r.zOff;let T=0,H=0,S=ti(14,E);r.mode==="jump"?(T=r.att.p,S=1):r.mode==="fly"?(T=Math.atan2(r.vy,Math.max(1,r.v))*.5,S=ti(8,E)):T=Math.atan2(Y.fwd.y,-Y.fwd.z),r.pitch+=(T-r.pitch)*S,r.roll+=(H-r.roll)*ti(5,E);let at=r.pitch,V=r.roll;if(r.mode==="jump"&&(V=r.att.r),r.mode==="fly"&&r.megaFlip&&(at+=_n*ln((r.t-r.megaFlip.t0)/r.megaFlip.dur)),pt.setFromAxisAngle(lt,at),dt.setFromAxisAngle(Mt,V),r.quat.copy(pt).multiply(dt),r.upsideDown=Math.cos(at)*Math.cos(V)<-.3,r.mode==="jump"||r.mode==="fly"){N.set(0,yd,0).applyQuaternion(r.quat);const xt=(r.mode==="jump",Tt.setFromAxisAngle(lt,r.pitch));J.set(0,yd,0).applyQuaternion(xt),r.pos.add(J).sub(N)}}const Te={intro:"intro",launch:"drop1",reveal:"break",flip:"loop",build:"build",mega:"flight",outro:"outro"};h.carInput=()=>({speed:r.mode==="flipAir"?0:r.v+r.slip,rev:r.rev,throttle:r.launched?we(.5+r.boostV/10,0,1):r.rev,boost:we(r.boostV/9,0,1),brake:r.finished?1:0,flying:r.mode==="flipAir"||r.mode==="fly",airborne:r.airborne,grounded:!r.airborne,armed:Math.max(r.thrustArm,r.mode==="flipAir"||r.mode==="fly"||r.mode==="jump"?1:0),thrust:r.thrust,lights:1,rcs:r.rcs,jetsDown:r.rcs.down,jetsLeft:r.rcs.left,jetsRight:r.rcs.right,jetsPitch:r.rcs.pitch,mode:r.mode}),h.fxInput=()=>({t:r.t,speed01:we(r.v/60,0,1),boost01:Math.max(r.boost,we(r.boostV/9,0,1)),thrust:r.thrust,car:u,section:Te[r.section]||r.section,timeScale:r.timeScale,smoke:r.puffs,rcs:r.rcs}),h.hudState=()=>({t:r.t,speed:r.mph,score:r.score,combo:r.combo,maxCombo:r.maxCombo,boost:r.mode==="flipAir"||r.mode==="fly"?r.gas:Math.max(r.boost,r.thrustArm),rev:r.rev,revTarget:[.85,1],shift:{phase:r.shift.light,window:r.shift.green,perfect:r.shift.perfect,active:r.shift.active},gear:r.gear,launch:r.launch||void 0,shifts:r.perfectShifts,shiftsTotal:He.shiftBeats.length,rings:r.fleetFlipped,ringsTotal:Gt(),finished:r.finished,phase:Te[r.section]||r.section,lapTime:r.lapTime,upsideDown:r.upsideDown,results:r.results,holding:r.holding,section:r.section,mode:r.mode,cue:r.cue,zero60:r.zero60,flips:r.flips,fleetFlipped:r.fleetFlipped,gas:r.gas,timeScale:r.timeScale,carScreen:r.cam.car||null});function tn(){const E=e&&e.body;if(!E||!E.isObject3D)return;const T=r.susp;E.position.y+=T.z,E.rotation.x+=T.p,E.rotation.z+=T.r}function Ct(E){if(u&&(u.position.copy(r.pos),u.quaternion.copy(r.quat)),!!e){if(n.driveCar&&typeof e.update=="function"){try{e.update(E,h.carInput())}catch(T){console.warn("[gameplay] car.update",T)}tn();return}try{typeof e.setState=="function"&&e.setState(r),typeof e.setSpeed=="function"&&e.setSpeed(r.v),typeof e.setThrusters=="function"&&e.setThrusters(r.thrust)}catch(T){console.warn("[gameplay] car hook",T)}tn()}}const Zt=new L,Pe=new L,dn=new L(0,1,0),Xn={pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0},Ni=new Ie,_i=new L;function Ln(E,T,H,S,at,V){_i.copy(T).sub(E);const xt=Math.hypot(_i.x,_i.z)||1e-6,K=Math.tan(at*Math.PI/360),qt=K*(t?t.aspect:1),Pt=Math.atan2(_i.x,-_i.z)-Math.atan(H*qt),Nt=Math.atan2(_i.y,xt)-Math.atan(S*K);return V.set(E.x+Math.sin(Pt)*Math.cos(Nt)*20,E.y+Math.sin(Nt)*20,E.z-Math.cos(Pt)*Math.cos(Nt)*20),V}const Le=new L,pn=new L,zi=new L,Oi=new L;function Q(E,T,H,S,at,V){zi.copy(T).sub(E).normalize(),Oi.copy(H).addScaledVector(zi,-H.dot(zi)),Oi.lengthSq()<1e-8&&Oi.set(0,0,-1),Oi.normalize();const xt=Math.atan(-S*Math.tan(at*Math.PI/360));return V.copy(E).addScaledVector(zi,Math.cos(xt)*20).addScaledVector(Oi,Math.sin(xt)*20),V}function Qt(){const E=we((t.aspect-.5625)/1.2153,0,1),T=(H,S)=>H+(S-H)*E;return{D:T(7.2,4.8),H:T(1.3,.9),fov:T(58,60),ndcY:T(-.24,-.16),k:E}}const ue=new L,w=new L,B=new L,q=new L,ot=.6,j=(E,T,H)=>E<0||E>6?0:E<T?ln(E/T):Math.exp(-(E-T)/H),A=new L(0,1,0);function k(){const E=r.beat;if(r.flipAir,E<8)return"intro";if(E<16)return"countdown";if(r.finished||r.section==="outro")return r.t-r.landT<1.9&&r.landT>mn(124)&&!r.finished?"megaLand":"finish";if(r.section==="launch")return r.t>=mi.fleetLip-.62&&r.t<mi.fleetLand-.85?"fleetSide":r.t>=mi.fleetLand-.85&&r.t<mi.fleetLand+1.6?"landHero":r.launched&&r.t-r.launchT<.4?"launchFront":r.t<mi.zero60+.15?"launchTop":E<19.8?"launchSide":E>=24.2&&r.s<He.ramp.s1?"fleetWide":r.t-r.landT<.7&&r.landT>mn(30)?"landHero":"chase";if(r.section==="reveal")return"flipReveal";if(r.section==="flip")return r.mode==="climb"?"flipClimb":r.mode==="flipAir"?r.t<ir-.05?"flipClimb":r.t<ha?"flipOrbit":"flipDescent":r.s>ee.sLip&&r.s<ee.sLip+80&&r.t-r.landT<2.1&&r.landT>ee.tLip?"flipDescent":r.s<ee.s0&&E<58?"flipReveal":r.s<ee.s0&&E>=59?r.s>ee.s0-30?"flipClimb":"flipSide":"chase";if(r.section==="mega"){if(r.mode==="fly")return E<99.5?"megaLaunch":r.megaLanding?"megaLand":E>=121.6?"megaWide":"megaChase";if(r.t-r.landT<1.9&&r.landT>mn(120))return"megaLand"}return"chase"}const rt={default:1,launchFront:0,flipSide:1,fleetSide:0,landHero:0,flipReveal:1.6,climbChase:.8,flipLip:0,flipOrbit:0,flipDescent:.9,flipClimb:0,flipHero:0,megaLand:0,megaLaunch:.5,megaChase:.6,megaWide:0,finish:1.6,countdown:1,launchTop:0,launchSide:0,fleetWide:1.2,fleetJump:0};function yt(E){if(!t)return;const T=k(),H=T!==g.shot;if(H){if(g.initialized){const Se=g.shot==="landHero"||g.shot==="flipHero"||g.shot==="launchFront"?0:(rt[T]??rt.default)*Xi;if(Se>0){const Ee=new L(0,0,-1).applyQuaternion(t.quaternion),Ge=Math.max(4,t.position.distanceTo(r.pos));g.blend={t0:r.t,dur:Se,off:t.position.clone().sub(r.pos),lookOff:t.position.clone().addScaledVector(Ee,Ge).sub(r.pos),up:new L(0,1,0).applyQuaternion(t.quaternion),fov:t.fov}}else g.blend=null}g.shot=T,g.shotT0=r.t,g.fix=r.pos.clone(),g.fj=null,g.hz=null,g.mz=null}r.t-g.shotT0;const S=r.pos,at=we(r.v/60,0,1.2),V=r.beat,xt=Qt(),K=t.aspect<1,qt=r.launched?r.t-r.launchT:-1,Pt=j(qt,.12,.42),Nt=r.t-r.shiftT,ne=j(Nt,.06,.32)*(r.shiftPerfect?1:.6),te=j(r.t-r.landT,.035,.1),me=j(r.t-r.flapT,.04,.2),oe=Pt*1.6+ne*.7;let Ht=xt.fov,re=10,he=14,De=!0,_e=!0;g.carYs+=(r.y-g.carYs)*ti(r.mode==="fly"?4.5:12,E);const Ue=we(r.boostV/9,0,1);let Ce=Pt*6+ne*4,be=r.launched&&!r.airborne&&!r.finished&&!r.inLoop;const qe=xt.ndcY;switch(r.flipAir,T){case"intro":{const $t=ln(V/8),Se=.28+2.3*$t,Ee=K?12.2-.8*$t:8-.5*$t;Zt.set(S.x+Math.sin(Se)*Ee,1.05+.25*Math.sin($t*Math.PI),S.z+Math.cos(Se)*Ee),Ht=K?46:40,Q(Zt,Le.set(S.x,ot,S.z),A,K?-.1:-.04,Ht,Pe),re=30,he=30,_e=!1;break}case"countdown":{const $t=ln((V-8)/7.5),Se=2.58+(_n-2.58)*$t,Ee=K?11.4:7.5,Ge=Ee+(xt.D-Ee)*$t,Nn=1.05+(xt.H+ot-1.05)*$t;Zt.set(S.x+Math.sin(Se)*Ge,Nn,S.z+Math.cos(Se)*Ge),Ht=(K?46:40)+(xt.fov-(K?46:40))*$t,Zt.y+=r.rev*.012*Math.sin(r.t*53),Q(Zt,Le.set(S.x,ot,S.z),A,(K?-.1:-.04)+(xt.ndcY-(K?-.1:-.04))*$t,Ht,Pe),re=30,he=30,_e=!1;break}case"launchTop":{Zt.set(.02,K?8:6.9,S.z-1.2),Pe.set(0,0,Zt.z-.01),dn.set(0,0,-1),De=!1,Ht=K?82:62,re=60,he=60,_e=!0,be=!1;break}case"launchFront":{Zt.set(g.fix.x+3,.5,g.fix.z-7),Ln(Zt,Le.set(S.x,.6,S.z),K?0:-.15,-.1,Ht,Pe),Ht=K?58:44,re=60,he=40,_e=!1,be=!1;break}case"launchSide":{K?Zt.set(S.x+15,2.3,S.z+2.5):Zt.set(S.x+8.6,.85,S.z+3.5),Ln(Zt,Le.set(S.x,.55,S.z-.3),K?.34:.42,-.02,Ht,Pe),Ht=K?60:50,re=14,he=18;break}case"fleetWide":{const $t=-He.fleet.sCenter;Zt.set(K?34:27,7,$t+24),Le.set(0,2.2,$t*.65+S.z*.35),Ln(Zt,Le,0,K?.05:0,Ht,Pe),Ht=K?56:44,re=3,he=5,_e=!1,be=!1;break}case"fleetJump":{const $t=-He.fleet.s0,Se=-(He.fleet.lineup.find(Kn=>Kn.kind==="semi")||{s:He.fleet.sCenter}).s,Ee=-He.ramp.s1-3.5;Zt.set(K?3.2:3.4,1.15,-Jc(-Ee,-(S.z+7.5),1.5));const Ge=S.z-Zt.z,Nn=S.x-Zt.x,wn=Math.max(2,Math.hypot(Nn,Ge)),yi=Math.atan2(S.y+.9-Zt.y,wn),Ci=Math.atan2(-Zt.y,Math.max(3,Zt.z-$t)),Mi=K?.42:.5,Ri=.56,ur=Math.max(.12,yi-Ci);let oi=.4;for(let Kn=0;Kn<24;Kn++)oi*=ur/(Math.atan(Mi*oi)+Math.atan(Ri*oi));const Dr=Math.max(6,Zt.z-Se),Bi=Math.tan(Math.atan(4.7/Dr))/t.aspect;oi=we(Math.max(oi,Bi),Math.tan(24*Math.PI/360),Math.tan(72*Math.PI/360));const ws=Ci+Math.atan(Ri*oi),ki=Math.atan2(.15-Zt.x,-(Se-Zt.z));Pe.set(Zt.x+Math.sin(ki)*Math.cos(ws)*20,Zt.y+Math.sin(ws)*20,Zt.z-Math.cos(ki)*Math.cos(ws)*20),Ht=2*Math.atan(oi)*180/Math.PI,re=40,he=40,_e=!1,be=!1;break}case"fleetSide":{const $t=He.fleet.lineup,Se=$t.find(sh=>sh.kind==="semi")||$t[Math.floor($t.length/2)],Ee=$t.find(sh=>sh.kind==="cybertruck")||Se,Ge=$t[$t.length-1],Nn=-Se.s,wn=-Ee.s,yi=t.aspect,Ci=S.z-Nn,Mi=ln((15-Ci)/6),Ri=ln((-Ci-3)/4),ur=wn+Ee.width/2+.35,oi=Nn-Se.width/2-.35,Dr=-Ge.s+Ge.width/2+.35,Bi=-Ge.s-Ge.width/2-.35,ws=S.z+(ur+(Dr-ur)*Ri-S.z)*Mi,ki=S.z+(oi+(Bi-oi)*Ri-S.z)*Mi,Kn=2.3,fr=K?.84:.8,dr=K?.84:.47;let ig=Math.max(2*Kn/fr,(ws-ki)/dr,2*(S.z+Kn-ki)/(fr+dr),2*(ws-S.z+Kn)/(fr+dr));const sg=K?11.5:15.5,rg=(K?15.5:16.5)-(K?.5:1.5)*Ri,og=r._m1T!=null&&r.t-r._m1T>-.05&&r.t-r._m1T<1.85,Gf=K?-.46:-.48,Vf=K?.6:og?.28:.7,Wf=K?-.62:-1,Xf=S.y+1.8,ag=2*yi*Math.max(Xf/(Vf-Wf),((Se.height||3.85)+.4)/(.85-Gf)),qf=Math.max(sg,Math.min(rg,ig),ag);g.fj||(g.fj={W:qf,c:0,init:!1}),g.fj.W+=(qf-g.fj.W)*ti(9,E);const Ir=g.fj.W;let mo=S.z+Kn-fr*Ir/2,go=S.z-Kn+fr*Ir/2,Ma=ws-dr*Ir/2,ba=ki+dr*Ir/2;Ma>ba&&(Ma=ba=(Ma+ba)/2);const Yf=Math.max(mo,Ma),Kf=Math.min(go,ba);Yf<=Kf?(mo=Yf,go=Kf):ba<mo?go=mo:Ma>go&&(mo=go);const cg=Nn+(-Ge.s-Nn)*Ri,$f=we(S.z+((cg+S.z)/2-S.z)*Mi,mo,go);g.fj.init||(g.fj.c=$f,g.fj.init=!0),g.fj.c+=($f-g.fj.c)*ti(14,E);const ih=we(Ir*(K?2.44:1.78),24,K?40:33);Zt.set(ih,1.4,g.fj.c);const jf=Ir/(2*ih*yi);Ht=2*Math.atan(jf)*180/Math.PI-at*2;const lg=Ir/(2*yi),hg=Math.max(Wf,Math.min(Gf,Vf-Xf/lg)),Zf=Math.atan2(-Zt.y,ih)-Math.atan(hg*jf);Pe.set(Zt.x-Math.cos(Zf)*20,Zt.y+Math.sin(Zf)*20,Zt.z),re=200,he=200,_e=!1,be=!1;break}case"landHero":{g.hz||(g.hz={z:r.mode==="jump"?-Ji(mi.fleetLand):S.z,x:r.mode==="jump"?0:S.x}),Zt.set(g.hz.x+$i.dx,$i.h,Jc(g.hz.z+$i.dz,S.z+$i.dz,1)),Ln(Zt,Le.set(S.x,Math.max(.6,S.y+.45),S.z),K?0:-.1,-.12,Ht,Pe),Ht=K?60:44,re=40,he=24,_e=!1;break}case"flipReveal":{const $t=-ee.s0-vl*.5,Se=ln((V-48)/12);Zt.set((K?46:38)-10*Se,8+3*Se,-ee.s0+(K?40:32)-10*Se),Le.set(2,ee.height*.5,$t+(S.z-$t)*.12*(1-Se)),Ln(Zt,Le,0,0,Ht,Pe),Ht=K?52:40,re=4,he=4,_e=!1,be=!1;break}case"climbChase":{jo(Math.max(ee.s0-30,r.s-8.5),Xn),Zt.copy(Xn.pos).addScaledVector(Xn.up,1.9+ot),Xn.pos.z>-ee.s0?Zt.x=S.x:Zt.x+=eo,dn.copy(Xn.up).add(r.up).normalize(),De=!1,Le.copy(S).addScaledVector(r.up,ot),Q(Zt,Le,dn,-.12,Ht+4,Pe),Ht+=4,re=26,he=30,be=!1;break}case"flipLip":{Zt.set(ee.xLand*.75+4,ee.height+3.5,ee.zLip+9),Ln(Zt,Le.set(S.x,S.y,S.z),0,0,Ht,Pe),Ht=K?60:48,re=3,he=14,_e=!1,be=!1;break}case"flipOrbit":{const $t=we((r.t-ir+.05)/(ha-ir+.05),0,1),Se=ln($t);Ht=K?46:23;const Ee=17.2,Ge=1.08+.12*Se,Nn=.22-.28*Se,wn=Ee*Math.cos(Ge);Zt.set(S.x+Math.cos(Nn)*wn,S.y-Ee*Math.sin(Ge),S.z+Math.sin(Nn)*wn),Pe.set(S.x,S.y-.2,S.z-.7),re=60,he=60,_e=!0,be=!1;break}case"flipDescent":{const $t=ee.xTouch??ee.xLand,Se=ee.zLand,Ee=r.mode==="flipAir"?S.y:0,Ge=ln((Ee-3)/16),Nn=(K?19:16)-(K?5:3)*Ge;Zt.set($t+Nn,1.2+1.8*Ge,Math.min(Se-6+3*Ge,S.z-6-(r.mode==="flipAir"?0:.3*r.v))),Ht=K?52-4*Ge:38-8*Ge;const wn=Math.tan(Ht*Math.PI/360),yi=r.mode==="flipAir"?S.z*.75+Se*.25:S.z,Ci=S.x*.8+$t*.2,Mi=Math.max(4,Math.hypot(Ci-Zt.x,yi-Zt.z)),Ri=Math.atan2(-Zt.y,Mi),ur=Math.atan2(Ee+.7-Zt.y,Mi),oi=Math.max(Ri+Math.atan((K?.27:.1)*wn),ur-Math.atan((.42-.32*Ge)*wn)),Dr=Math.atan2(Ci-Zt.x,-(yi-Zt.z))-Math.atan((K?0:-.05)*wn*t.aspect);Pe.set(Zt.x+Math.sin(Dr)*Math.cos(oi)*20,Zt.y+Math.sin(oi)*20,Zt.z-Math.cos(Dr)*Math.cos(oi)*20),re=r.mode==="flipAir"?3.2:9,he=r.mode==="flipAir"?8:12,_e=!1,be=!1;{const Bi=r.mode==="flipAir"?ln((Ee-4)/5):0;if(Bi>0){const ki=6.2+1.3*Math.max(0,14-S.y);Le.set(S.x+Math.cos(-.06)*ki,Math.max(1.2,S.y-ki*Math.tan(1.2)),S.z+Math.sin(-.06)*ki),Zt.lerp(Le,Bi),Pe.lerp(pn.set(S.x,S.y-.2,S.z-.7),Bi);const Kn=1-ln((Ee-8)/10);Ht+=((K?46+8*Kn:23+19*Kn)-Ht)*Bi,re=3.2+50*Bi,he=8+50*Bi}}break}case"flipClimb":{Zt.set(eo+4.2,.9,-ee.s0+(K?7:5.5)),Le.set(.6,ee.height*.62,-ee.s0-vl*.62),Le.lerp(pn.set(S.x,S.y+.6,S.z),.25),Ln(Zt,Le,K?0:.1,0,Ht,Pe),Ht=K?74:60,re=30,he=6,_e=!1,be=!1;break}case"flipSide":{const $t=-ee.s0-vl*.62,Se=K?38:31;Zt.set(ee.xLand+Se,7.5,$t+2);const Ee=r.mode==="drive"?.08:.12;Le.set(S.x*Ee+2*(1-Ee),Math.max(1.5,S.y)*Ee+ee.height*.55*(1-Ee),S.z*Ee+$t*(1-Ee)),Ln(Zt,Le,0,0,Ht,Pe),Ht=K?54:42,re=3,he=8,_e=!1,be=!1;break}case"flipHero":{const $t=ee.xTouch??ee.xLand;Zt.set($t+$i.dx,$i.h,Jc(ee.zLand+$i.dz,S.z+$i.dz,1)),Ht=K?60:44,Ln(Zt,Le.set(S.x,Math.max(.6,S.y+.45),S.z),K?0:-.1,-.1,Ht,Pe),re=40,he=16,_e=!1;break}case"megaLaunch":{Zt.set(S.x+(K?18:15),3+g.carYs*.55,S.z-4),Ln(Zt,Le.set(S.x,g.carYs+.5,S.z),0,0,Ht,Pe),Ht=K?60:48,re=8,he=16,be=!1;break}case"megaChase":{let $t=null;for(const Mi of ie)if(r.s<Mi.s+Mi.depth/2+2){$t=Mi;break}const Ee=-($t?we($t.s-r.s,-4,30):20);g.mz||(g.mz={o:Ee}),g.mz.o+=(Ee-g.mz.o)*ti(Ee>g.mz.o+8?3:10,E);const Ge=K?17:15.5,Nn=K?9.5:8;Zt.set(S.x+Ge,1.8,S.z+Nn);const wn=Math.max(S.y,g.carYs),yi=K?.38:.34;Le.set(S.x+1,wn*(1-yi)+1.2*yi,S.z+g.mz.o*.28),Ht=K?62:50;{const Mi=Math.tan((Ht+at*2+1.5)*Math.PI/360),Ri=Math.hypot(Le.x-Zt.x,Le.z-Zt.z),ur=Math.max(1,Math.hypot(S.x-Zt.x,S.z-Zt.z)),oi=Math.atan2(Le.y-Zt.y,Ri),Bi=Math.atan2(Math.max(S.y,wn)+1.3-Zt.y,ur)-Math.atan((K?.62:.58)*Mi);Bi>oi&&(Le.y=Zt.y+Math.tan(Bi)*Ri);const ws=Math.atan2(Le.x-Zt.x,-(Le.z-Zt.z)),ki=Math.atan2(S.x-Zt.x,-(S.z-Zt.z));let Kn=ki-ws;Kn-=_n*Math.round(Kn/_n);const fr=Math.atan((K?.56:.62)*Mi*t.aspect);if(Math.abs(Kn)>fr){const dr=ki-Math.sign(Kn)*fr;Le.x=Zt.x+Math.sin(dr)*Ri,Le.z=Zt.z-Math.cos(dr)*Ri}}Pe.copy(Le),Ce+=me*1,re=40,he=30,_e=!1,be=!1;break}case"megaWide":{const $t=ie[ie.length-1],Se=$t.vehicles.find(Ge=>Ge.kind==="semi")||$t.vehicles[Math.floor($t.vehicles.length/2)],Ee=ee.zLand-(Se.s-ee.sLip);Zt.set(lr+(K?22:20),2.6,Ee+1),Ln(Zt,Le.set(lr,5.2,Ee),0,K?-.12:-.15,Ht,Pe),Ht=K?54:40,re=3,he=5,_e=!1,be=!1;break}case"megaLand":{g.hz||(g.hz={z:S.z-16,x:S.x}),Zt.set(g.hz.x+4.2,.7,Jc(g.hz.z,S.z-8.5,1)),Ln(Zt,Le.set(S.x,Math.max(.6,S.y*.75+.5),S.z),K?0:-.1,-.1,Ht,Pe),Ht=K?62:46,re=40,he=20,_e=!1;break}case"finish":{const $t=ln((V-128)/8),Se=.15+.6*$t+.25*(1-Math.exp(-Math.max(0,V-136)/14)),Ee=xt.D+((K?9:7.6)-xt.D)*$t,Ge=g.carYs;Zt.set(S.x-Math.sin(Se)*Ee,Ge+xt.H+ot-(xt.H-.75)*$t,S.z+Math.cos(Se)*Ee),Ht=xt.fov+((K?60:46)-xt.fov)*$t;const Nn=qe+((K?-.6:-.5)-qe)*ln((V-134.5)/3);Q(Zt,Le.set(S.x,S.y+ot,S.z),A,Nn,Ht,Pe),re=10,he=16;break}case"chase":default:{let $t=xt.D+oe,Se=xt.H;if(r.section==="build"){const Ge=ln((V-88)/8);$t*=1+.28*Ge,Se+=1.1*Ge}const Ee=r.airborne?g.carYs:S.y;Zt.set(S.x-r.xOff*.45,Ee+Se+ot,S.z+$t),Le.set(S.x-r.xOff*.3,Ee+ot,S.z),dn.set(0,1,0),Zt.y-=te*.25,Q(Zt,Le,dn,qe,Ht+at*6,Pe),re=12,he=18;break}}De&&dn.set(0,1,0),H||!g.initialized||_e!==g.rel?(g.rel=_e,g.off.copy(Zt).sub(S),g.lookOff.copy(Pe).sub(S),g.pos.copy(Zt),g.look.copy(Pe),g.up.copy(dn),g.initialized=!0):_e?(g.off.lerp(Zt.sub(S),ti(re,E)),g.lookOff.lerp(Pe.sub(S),ti(he,E)),g.pos.copy(S).add(g.off),g.look.copy(S).add(g.lookOff),g.up.lerp(dn,ti(De?6:30,E)).normalize()):(g.pos.lerp(Zt,ti(re,E)),g.look.lerp(Pe,ti(he,E)),g.up.lerp(dn,ti(De?6:30,E)).normalize()),T!=="climbChase"&&(g.pos.y=Math.max(g.pos.y,.35)),g.shake*=Math.exp(-E*4.5),g.punch*=Math.exp(-E*3.2);const en=be?.015+at*.04:0,Ye=g.shake*.2,bn=r.t*23;if(t.position.copy(g.pos),t.position.x+=qs(bn)*Ye+qs(r.t*7.3+5)*en*.6,t.position.y+=qs(bn+17.3)*Ye*.8+qs(r.t*9.1+11)*en+qs(r.t*37+2)*en*.35,r.shiftPerfect&&Nt>=0&&Nt<2/60){const $t=Nt<.016666666666666666?1:-.6;t.position.y+=.09*$t,t.position.x+=.05*$t}t.up.copy(g.up),Ni.lookAt(t.position,g.look,t.up),t.quaternion.setFromRotationMatrix(Ni);const ge=qs(bn*.5+40)*g.shake*.03+qs(r.t*3.1+21)*en*.08+ne*.02*(r.gear%2?1:-1);ge&&t.rotateZ(ge),T==="megaChase"&&t.rotateZ(we(r.vy/24,-1,1)*.03);const qn=T==="chase"?at*6:at*2,Yn=Ht+qn+g.punch*.6+(T==="chase"?12*Ue:0);if(g.fov=H||!g.fovInit?Yn:g.fov+(Yn-g.fov)*ti(9,E),g.fovInit=!0,t.fov=g.fov+Ce,g.blend){const $t=g.blend,Se=(r.t-$t.t0)/$t.dur;if(Se>=1||Se<0)g.blend=null;else{const Ee=ln(Se);ue.copy(S).add($t.off),t.position.lerpVectors(ue,t.position,Ee),t.position.y<.35&&T!=="climbChase"&&(t.position.y=.35),w.copy(S).add($t.lookOff).lerp(g.look,Ee),B.copy($t.up).lerp(g.up,Ee),B.lengthSq()<1e-4&&B.copy(g.up),t.up.copy(B.normalize()),Ni.lookAt(t.position,w,t.up),t.quaternion.setFromRotationMatrix(Ni),t.fov=$t.fov+(t.fov-$t.fov)*Ee}}t.updateProjectionMatrix(),r.cam.shot=T,r.cam.cut=H,r.cam.fov=t.fov,r.cam.shake=g.shake,r.cam.punch=g.punch+Ce,r.cam.roll=Math.atan2(g.up.x,g.up.y);{t.updateMatrixWorld(),q.copy(r.pos).addScaledVector(r.up,.55).project(t);const Se=2.4/(Math.max(.5,t.position.distanceTo(r.pos))*Math.tan(t.fov*Math.PI/360));r.cam.car={x:q.x,y:q.y,r:Math.min(2,Se),on:q.z<1&&Math.abs(q.x)<1.3&&Math.abs(q.y)<1.3}}if(!h.muted&&s)try{s.setSpeed&&s.setSpeed(at)}catch{}}let _t=0;return h.reset=()=>{h.state=r=Cd(),ae.length=0;for(const E of ie)delete E._hit;if(_(),_t=0,Ae(1/60),e&&typeof e.reset=="function")try{e.reset()}catch{}},h.update=(E,T)=>{E>0||(E=1/60),T===void 0&&(T=_t+E);const H=T-_t;if(H<=0)return yt(1/600),Ct(1/600),r;const S=Math.min(240,Math.max(1,Math.ceil(H/(1/120)))),at=H/S;for(let V=1;V<=S;V++)zt(at,_t+at*V),yt(at);_t=T,Ct(H);try{i&&typeof i.setGameplayState=="function"&&i.setGameplayState(r)}catch(V){console.warn("[gameplay] world hook",V)}return r},h.seekTo=(E,T=1/60)=>{const H=h.muted;h.reset();for(let S=T;S<E+1e-9;S+=T)h.muted=H||S<E-1.5,h.update(T,Math.min(S,E));return _t<E&&h.update(E-_t,E),h.muted=H,r},h.trackFrame=jo,h.COURSE=He,h.MOMENTS=mi,h.reset(),h}const CM={flipLaunchState:Pf,flipAirStep:Lf,flipBotThrust:Il,bulletScaleAt:Df,S_DT:Ii,FLIP:ee},RM=Object.freeze(Object.defineProperty({__proto__:null,BEAT:Xi,COURSE:He,FLEET_DIMS:ua,G:fn,MOMENTS:mi,MPH:uc,SECTIONS:xm,WINDOWS:ni,_flipSim:CM,beatToTime:mn,createGameplay:Ju,default:Ju,groundY:Ar,sNom:Ji,sectionAt:_m,timeToBeat:so,trackFrame:jo},Symbol.toStringTag,{value:"Module"})),PM=["semi","cybertruck","models","model3","modelx","modely"],Jn=0,Ul=1,ps=2,gn=3,LM=4,Dd=5,Qs=6,Ei=7,DM=8,IM=9,mc=10,Qu=11,Ml=12,gc=13,Um=14,Us=15,Qc=16,Vo=17,tf=18,tl=19,UM=20,Wa=21,FM=[[8421504,.3,.45,1,1],[263431,.08,0,0,.55],[723724,.3,.1,.6,.8],[1118740,.85,0,0,.35],[723724,.95,0,0,.12],[986897,.9,0,0,.18],[13817305,.26,.7,0,1],[3422012,.34,.75,.4,1],[7829371,.45,1,0,1],[11736091,.32,.1,.8,1],[15264492,.1,1,0,1],[7238264,.36,.85,0,1],[1118999,.08,.3,1,1],[460552,.95,0,0,.1],[14474456,.5,0,.3,1],[131587,.95,0,0,.05],[131844,.04,0,0,.42],[8421504,.3,.45,1,1],[8421504,.3,.45,1,1],[2829876,.75,0,0,.3],[4869715,.5,.25,0,.3]],NM=n=>(n+.5)/Wa,Is={pearl:[14606300,.04,.26],black:[723982,.35,.3],deepblue:[3102886,.5,.26],red:[12063775,.3,.26],stealth:[5922147,.45,.28],quicksilver:[11712187,.62,.24],white:[14541027,.02,.32],gold:[11771772,.55,.3],graphite:[2369066,.45,.32],semi:[11843772,0,.25]},Fm={semi:["semi"],cybertruck:["pearl"],models:["red","pearl","quicksilver","deepblue"],model3:["pearl","deepblue","quicksilver","red"],modelx:["quicksilver","pearl","deepblue","red"],modely:["pearl","red","quicksilver","gold","deepblue"]},Id={},Pr={model3:{L:4.72,W:1.85,H:1.44,R:.34,axles:[-1.43,1.44],tyreW:.235,rimRatio:.7,top:[[0,.47],[.025,.55],[.07,.615],[.14,.665],[.26,.715],[.45,.755],[.7,.795],[.93,.83],[1.2,.872],[1.32,.89],[1.5,1.03],[1.75,1.23],[2,1.375],[2.25,1.432],[2.5,1.44],[2.8,1.42],[3.1,1.33],[3.4,1.19],[3.62,1.085],[3.75,1.05],[4.1,1.03],[4.42,1.02],[4.56,1.005],[4.64,.95],[4.69,.85],[4.72,.64]],belt:[[0,.47],[.025,.545],[.07,.6],[.14,.64],[.3,.69],[.6,.745],[.93,.8],[1.3,.85],[2,.9],[3,.94],[3.6,.958],[4.2,.965],[4.56,.955],[4.64,.91],[4.69,.82],[4.72,.63]],rock:[[0,.29],[.06,.24],[.25,.18],[.6,.16],[1.4,.145],[3.4,.145],[4,.165],[4.5,.24],[4.72,.38]],nose:[.56,.8],tail:[.74,.55],n:3.1,lean:.22,tuckB:.07,tuckT:.075,bulge:.05,tm:.5,shoulderExp:1.7,glassTop:[[1.32,3.62]],glassSide:[[1.48,3.36]],pillars:[[2.3,2.4]],gaps:[[1.47,"b"],[2.35,"b"],[3.37,"b"],[1.3,"t"],[3.72,"t"]],zones:[[4.69,4.72,"KB",ps]],band:Jn,beltCell:ps,mirrorD:1.56,plateY:.5,intake:[.36,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.668,.642],y1:[.684,.666],lens:.006,gain:3},{e:"rear",x:[.42,.975],y0:[.896,.892],y1:[.93,.93],lens:.02,gain:1.3,wrap:.15},{e:"rear",x:[.6,.975],y0:[.838,.834],y1:[.864,.862],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.836,.834],y1:[.928,.93],gain:1.3}],wheel:{n:5,sw:.05,cell:Ei,cover:!0,accent:Qs,caliper:Ei}},models:{L:4.97,W:1.96,H:1.44,R:.36,axles:[-1.5,1.46],tyreW:.245,rimRatio:.7,top:[[0,.49],[.025,.57],[.08,.635],[.16,.68],[.3,.725],[.55,.77],[.8,.805],[.985,.83],[1.2,.862],[1.45,.885],[1.65,1],[1.95,1.2],[2.25,1.35],[2.6,1.408],[3,1.415],[3.35,1.39],[3.7,1.305],[4.02,1.165],[4.32,1.04],[4.7,.975],[4.86,.96],[4.93,.87],[4.97,.64]],belt:[[0,.49],[.025,.565],[.08,.62],[.16,.655],[.35,.705],[.65,.76],[.985,.81],[1.45,.855],[2.2,.9],[3.2,.93],[4,.95],[4.6,.95],[4.86,.94],[4.93,.86],[4.97,.63]],rock:[[0,.3],[.06,.25],[.25,.2],[.6,.17],[1.5,.15],[3.6,.15],[4.2,.175],[4.75,.25],[4.97,.4]],nose:[.56,.85],tail:[.76,.6],n:3,lean:.2,tuckB:.07,tuckT:.065,bulge:.042,tm:.52,shoulderExp:1.8,glassTop:[[1.45,4.3]],glassSide:[[1.62,3.82]],pillars:[[2.52,2.62],[3.5,3.58]],aftCell:Jn,cpillar:1,gaps:[[1.62,"b"],[2.57,"b"],[3.57,"b"],[1.43,"t"],[4.32,"t"]],zones:[[4.93,4.97,"KB",ps]],band:Jn,beltCell:mc,mirrorD:1.72,plateY:.51,intake:[.38,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.675,.645],y1:[.695,.69],lens:.006,gain:3},{e:"rear",x:[.4,.975],y0:[.885,.876],y1:[.918,.914],lens:.014,gain:1.3,wrap:.15},{e:"rear",x:[.62,.975],y0:[.83,.824],y1:[.854,.85],gain:1.3,wrap:.12},{e:"rear",x:[.9,.975],y0:[.826,.824],y1:[.914,.914],gain:1.3}],wheel:{n:5,pair:.17,sw:.036,cell:Qs,accent:Ei,caliper:IM}},modelx:{L:5.06,W:2,H:1.68,R:.38,axles:[-1.5,1.5],tyreW:.265,rimRatio:.66,top:[[0,.53],[.025,.62],[.08,.69],[.18,.75],[.35,.805],[.6,.86],[.85,.915],[1.05,.953],[1.15,.97],[1.4,1.18],[1.7,1.42],[2,1.58],[2.4,1.665],[2.85,1.68],[3.3,1.668],[3.7,1.62],[4.05,1.535],[4.35,1.43],[4.6,1.32],[4.8,1.22],[4.93,1.155],[4.99,1.14],[5.03,1],[5.06,.7]],belt:[[0,.53],[.025,.615],[.08,.675],[.18,.725],[.4,.785],[.75,.86],[1.15,.94],[2,1],[3.2,1.02],[4.2,1.03],[4.8,1.03],[4.97,1.02],[5.03,.9],[5.06,.67]],rock:[[0,.35],[.06,.3],[.3,.24],[.7,.22],[1.6,.21],[3.5,.21],[4.4,.235],[4.85,.31],[5.06,.44]],nose:[.58,.85],tail:[.76,.55],n:3.2,lean:.22,tuckB:.07,tuckT:.065,bulge:.042,tm:.5,shoulderExp:1.8,glassTop:[[1.15,2.8],[4.24,4.92]],glassSide:[[1.32,4.32]],pillars:[[2.25,2.33],[3.55,3.63]],gaps:[[1.33,"b"],[2.29,"b"],[3.59,"bt"],[1.13,"t"],[2.82,"t"],[4.22,"t"]],falcon:[2.82,4.22,.19],zones:[[5.02,5.06,"KB",ps]],band:Jn,beltCell:mc,mirrorD:1.45,plateY:.55,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[.6,.95],y0:[.715,.695],y1:[.738,.74],lens:.006,gain:3},{e:"rear",x:[.36,.975],y0:[.94,.925],y1:[.982,.99],lens:.012,gain:1.3,wrap:.14},{e:"rear",x:[0,.36],y0:[.962,.958],y1:[.972,.97],gain:1.1}],wheel:{n:6,pair:.12,sw:.028,cell:Qs,caliper:Ei}},modely:{L:4.75,W:1.92,H:1.62,R:.37,axles:[-1.45,1.44],tyreW:.255,rimRatio:.68,top:[[0,.51],[.025,.6],[.07,.665],[.15,.715],[.3,.76],[.55,.805],[.75,.835],[.925,.862],[1.2,.905],[1.3,.92],[1.5,1.08],[1.8,1.34],[2.1,1.54],[2.4,1.608],[2.7,1.62],[3.05,1.615],[3.4,1.585],[3.78,1.51],[4.1,1.385],[4.38,1.23],[4.55,1.12],[4.65,1.03],[4.71,.88],[4.75,.66]],belt:[[0,.51],[.025,.595],[.07,.65],[.15,.69],[.35,.74],[.65,.79],[.925,.835],[1.3,.9],[2.2,.96],[3.3,1],[4.2,1.03],[4.55,1.03],[4.65,.98],[4.71,.85],[4.75,.65]],rock:[[0,.34],[.06,.28],[.3,.225],[.6,.21],[1.4,.2],[3.3,.2],[4,.22],[4.5,.29],[4.75,.42]],nose:[.5,.92],tail:[.64,.64],n:3.4,lean:.24,tuckB:.08,tuckT:.085,bulge:.052,tm:.46,shoulderExp:1.6,glassTop:[[1.3,4.3]],glassSide:[[1.46,3.74]],pillars:[[2.32,2.42]],aftCell:Jn,gaps:[[1.45,"b"],[2.37,"b"],[3.75,"b"],[1.28,"t"],[4.32,"t"]],zones:[[4.71,4.75,"KB",ps]],band:Jn,beltCell:ps,mirrorD:1.52,plateY:.535,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[0,.93],y0:[.716,.704],y1:[.737,.73],lens:.01,gain:2.6},{e:"front",head:!0,x:[.55,.84],y0:[.64,.635],y1:[.656,.67],lens:.012},{e:"rear",x:[0,.975],y0:[.955,.948],y1:[.988,.982],lens:.01,gain:1.3,wrap:.14},{e:"rear",x:[.55,.96],y0:[.9,.885],y1:[.932,.936],lens:.012,gain:1.3}],wheel:{n:5,pair:.2,sw:.034,cell:Ei,accent:Qs,caliper:Ei}},cybertruck:{L:5.68,W:2.2,H:1.79,R:.44,axles:[-1.84,1.84],tyreW:.305,rimRatio:.58,linear:!0,flat:!0,ct:!0,top:[[0,1.165],[.03,1.175],[2.75,1.79],[5.64,1.25],[5.68,1.24]],belt:[[0,1.165],[5.68,1.165]],rock:[[0,.54],[.24,.38],[5.42,.38],[5.68,.54]],nose:[.9,.22],tail:[.95,.12],tumble:.9,tuckB:.07,tuckT:0,shoulder:.012,bulge:0,inset:.05,arch:{top:1,a0:.37,a1:.66},glassTop:[[1.45,3.72]],glassSide:[[1.6,3.58]],pillars:[[2.62,2.72]],pillarCell:ps,gaps:[[1.6,"b"],[2.67,"b"],[3.6,"b"],[1.42,"t"],[.1,"t"]],zones:[[3.82,5.6,"R",gn],[.112,1.408,"R",UM]],band:gn,bandH:.06,body:Qu,beltCell:Qu,mirrorD:1.62,plateY:.8,lamps:[{e:"front",cap:!0,head:!0,y0:1.1,y1:1.158,inset:0,gain:3.5,wrap:.1},{e:"rear",cap:!0,y0:1.17,y1:1.228,inset:0,gain:1.5,wrap:.1}],wheel:{n:6,sw:.05,cell:Qs,cover:!0,caliper:Ei}},semi:{L:7.1,W:2.6,H:4.05,R:.52,axles:[-2.05,1.8,2.95],tyreW:.32,dualW:.6,rimRatio:.56,cabL:4.7,inset:.03,wheel:{semi:!0,caliper:Ei}}};for(const n of PM){const t=Pr[n];t.L,t.W,t.H,t.R,t.axles.slice(),Is[Fm[n][0]][0]}const es=(n,t,e)=>Math.max(t,Math.min(e,n)),We=(n,t,e)=>n+(t-n)*e,Ud=n=>Math.sqrt(1-(1-n)*(1-n));function no(n,t){const e=n.length,i=n.map(c=>c[0]),s=n.map(c=>c[1]),o=[],a=new Array(e).fill(0);for(let c=0;c<e-1;c++)o[c]=(s[c+1]-s[c])/(i[c+1]-i[c]);if(!t&&e>2){a[0]=o[0],a[e-1]=o[e-2];for(let c=1;c<e-1;c++)a[c]=o[c-1]*o[c]<=0?0:(o[c-1]+o[c])/2;for(let c=0;c<e-1;c++){if(o[c]===0){a[c]=a[c+1]=0;continue}const l=a[c]/o[c],h=a[c+1]/o[c],r=l*l+h*h;if(r>9){const u=3/Math.sqrt(r);a[c]=u*l*o[c],a[c+1]=u*h*o[c]}}}return c=>{if(c<=i[0])return s[0];if(c>=i[e-1])return s[e-1];let l=0;for(;l<e-2&&c>i[l+1];)l++;const h=i[l+1]-i[l],r=(c-i[l])/h;if(t||e<=2)return We(s[l],s[l+1],r);const u=r*r,f=u*r;return(2*f-3*u+1)*s[l]+(f-2*u+r)*h*a[l]+(-2*f+3*u)*s[l+1]+(f-u)*h*a[l+1]}}const Vh=(n,t)=>{for(const e of n)if(t>=e[0]&&t<=e[1])return!0;return!1},Zo=new L,Fl=new L,Nl=new L,As=new L;class _s{constructor(t=!1){this.p=[],this.n=[],this.uv=[],this.c=t?[]:null}vert(t,e,i,s){this.p.push(t[0],t[1],t[2]),this.n.push(e[0],e[1],e[2]),this.c?this.c.push(s[0],s[1],s[2]):this.uv.push(NM(i),.5)}tri(t,e,i,s,o,a){if(Zo.fromArray(t),Fl.fromArray(e).sub(Zo),Nl.fromArray(i).sub(Zo),As.crossVectors(Fl,Nl),As.lengthSq()<1e-14)return;if(o&&As.dot(Nm.fromArray(o))<0){const l=e;e=i,i=l,As.negate()}As.normalize();const c=[As.x,As.y,As.z];this.vert(t,c,s,a),this.vert(e,c,s,a),this.vert(i,c,s,a)}quad(t,e,i,s,o,a,c){this.tri(t,e,i,o,a,c),this.tri(t,i,s,o,a,c)}addRaw(t){const e=t.attributes.position.array,i=t.attributes.normal.array,s=t.attributes.uv.array;for(let o=0;o<e.length;o++)this.p.push(e[o]),this.n.push(i[o]);for(let o=0;o<s.length;o++)this.uv.push(s[o]);t.dispose()}addGeo(t,e,i,s){const o=t.index?t.toNonIndexed():t;i&&o.applyMatrix4(i);const a=o.attributes.position,c=o.attributes.normal;for(let l=0;l<a.count;l++)this.vert([a.getX(l),a.getY(l),a.getZ(l)],[c.getX(l),c.getY(l),c.getZ(l)],e,s);t.dispose(),o!==t&&o.dispose()}box(t,e,i,s,o,a,c,l=0,h=0,r=0,u){this.addGeo(new rn(t,e,i),c,On(s,o,a,l,h,r),u)}mirroredX(){const t=new _s(!!this.c);for(let e=0;e<this.p.length/9;e++)for(const i of[0,2,1]){const s=e*3+i;t.p.push(-this.p[s*3],this.p[s*3+1],this.p[s*3+2]),t.n.push(-this.n[s*3],this.n[s*3+1],this.n[s*3+2]),this.c?t.c.push(this.c[s*3],this.c[s*3+1],this.c[s*3+2]):t.uv.push(this.uv[s*2],this.uv[s*2+1])}return t}append(t){const e=(i,s)=>{for(let o=0;o<s.length;o++)i.push(s[o])};return e(this.p,t.p),e(this.n,t.n),this.c?e(this.c,t.c):e(this.uv,t.uv),this}build(){const t=new Ze;return t.setAttribute("position",new Me(this.p,3)),t.setAttribute("normal",new Me(this.n,3)),this.c?t.setAttribute("color",new Me(this.c,3)):t.setAttribute("uv",new Me(this.uv,2)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const Nm=new L;new Ie;const zM=new ri,OM=new Fi;new L(1,1,1);const BM=new L;function On(n,t,e,i=0,s=0,o=0,a=1,c=1,l=1){return new Ie().compose(BM.set(n,t,e),zM.setFromEuler(OM.set(i,s,o)),new L(a,c,l))}const zl=5,Ti=6,zm=3,Ol=4,nc=5+zl,xc=nc+Ti,Zl=xc+1,ya=[];ya.push("U","L","K","B");for(let n=0;n<zl;n++)ya.push("S");ya.push("E");for(let n=0;n<Ti;n++)ya.push(n<Ti/2?"G":"R");function kM(n){const t=Pr[n],e=no(t.top,t.linear),i=no(t.belt,t.linear),s=no(t.rock,t.linear),o=t.L,a=t.W/2,c=t.axles.map(P=>P+o/2),l=t.tyreW,h=t.R+(t.archPad??.035),r=t.R+.01,u=t.winTop?no(t.winTop,!0):null,f=P=>{let F=-1/0;return c.forEach((R,x)=>{if(n==="semi"&&x>0)return;const z=Math.abs(P-R);t.arch?z<t.arch.a0?F=Math.max(F,t.arch.top):z<t.arch.a1&&(F=Math.max(F,t.arch.top-(z-t.arch.a0)/(t.arch.a1-t.arch.a0)*(t.arch.top-s(P)))):z<h&&(F=Math.max(F,r+Math.sqrt(h*h-z*z)))}),F},d=t.cabL??o,v=P=>{const F=We(t.nose[0],1,Ud(es(P/t.nose[1],0,1))),R=We(t.tail[0],1,Ud(es((d-P)/t.tail[1],0,1)));return Math.min(F,R)},g=P=>{let F=0;for(const R of c){const x=Math.abs(P-R)/(h+(t.bulgeLen??.42));x<1&&(F=Math.max(F,Math.pow(1-x*x,1.5)))}return F*(t.bulge||0)},m=P=>P<.15?We(.55,1,P/.15):P<.62?1:We(1,.15,(P-.62)/.38),p=a-l-.07-(t.inset||0);function y(P){const F=g(P),R=(t.bulge||0)*.5,x=(a-R)*v(P),z=e(P),G=Math.min(i(P),z),st=s(P),vt=Math.min(st+.025,G-.1);let Rt=Math.max(st,f(P));Rt=Math.min(Rt,G-.06);const mt=Math.min(p,x-.08),It=Math.max(0,z-G),nt=t.bandAbs?Math.min(Math.max(Rt+.04,st+t.bandH),G-.035):Math.min(Rt+(t.bandH||.06),G-.035),kt=t.tuckB,se=t.tuckT,fe=.42,le=[[0,vt],[mt,vt],[mt,Math.max(vt,Rt)],[x-kt+F*.5,Rt],[x-kt*(t.ct?.88:.55)+F*.55,nt]];for(let $=1;$<=zl;$++){const X=$/zl,Et=We(nt,G-(t.ct?0:.012),X);let At;if(t.ct)At=We(x-kt*.88,x,X);else{const St=t.tm??fe;At=X<St?x-kt*.55*Math.pow(1-X/St,2):x-se*Math.pow((X-St)/(1-St),t.shoulderExp??2),At+=F*m(X)}le.push([At,Et])}const ut=x-se-(t.shoulder??.018)+F*.1;if(le.push([ut,G]),t.ct){const $=Math.max(ut-t.tumble*It,.2);for(let X=1;X<=Ti/2;X++){const Et=X/(Ti/2);le.push([We(ut,$,Et),We(G,z,Et)])}for(let X=1;X<=Ti/2;X++){const Et=X/(Ti/2);le.push([We($,0,Et),z])}}else{const $=2/t.n;let X=Math.PI/4;if(u&&It>1e-4){const Et=es((Math.min(u(P),G+.97*It)-G)/It,0,1);X=es(Math.asin(Math.pow(Et,t.n/2)),.06,Math.PI/2-.06)}for(let Et=1;Et<=Ti;Et++){const At=Et<=Ti/2?Et/(Ti/2)*X:X+(Et-Ti/2)/(Ti/2)*(Math.PI/2-X),St=Math.pow(Math.cos(At),$),Ft=Math.pow(Math.sin(At),$);le.push([Math.max(0,(ut-t.lean*It*Ft)*St),G+It*Ft])}le[xc][0]=0}if(t.taper){const $=t.taper[0],X=t.H;for(const Et of le)Et[0]*=1-t.taper[1]*es((Et[1]-$)/(X-$),0,1)}return le}const M=[],_=n==="semi"?.1:.085;for(let P=0;P<=d+1e-6;P+=_)M.push(P);for(let P=0;P<=.24;P+=.03)M.push(P),M.push(d-P);M.push(d),c.forEach((P,F)=>{if(!(n==="semi"&&F>0))if(t.arch)for(const R of[0,t.arch.a0,t.arch.a1,(t.arch.a0+t.arch.a1)/2,t.arch.a0*.5])M.push(P-R,P+R);else{for(let R=0;R<=16;R++){const x=h*Math.cos(R/16*Math.PI);M.push(P+x)}M.push(P-h-.004,P+h+.004)}});for(const P of[...t.top,...t.belt,...t.rock])M.push(P[0]);for(const P of[...t.glassTop,...t.glassSide,...t.pillars])M.push(P[0],P[1]);for(const P of t.zones)M.push(P[0],P[1]);for(const P of t.gaps)M.push(P[0]-.006,P[0]+.006);const I=[...new Set(M.filter(P=>P>=0&&P<=d).map(P=>Math.round(P*2e3)/2e3))].sort((P,F)=>P-F).map(P=>({d:P,z:P-o/2,pts:y(P)}));return{s:t,L:o,hw:a,rings:I,dAx:c,top:e,belt:i,rock:s,cabL:d}}function Fd(n,t,e){const i=ya[t];if(i==="U"||i==="L")return gc;for(const l of n.zones)if(e>=l[0]&&e<=l[1]&&l[2].includes(i))return l[4];for(const l of n.gaps)if(Math.abs(e-l[0])<.0062&&(l[1].includes("b")&&"KBSE".includes(i)||l[1].includes("t")&&"GR".includes(i)))return Us;const s=n.body??Jn,o=Vh(n.glassTop,e),a=Vh(n.glassSide,e),c=Vh(n.pillars,e);return i==="G"?a&&!c?Ul:o&&!a&&n.aftCell!=null&&e>n.glassSide[n.glassSide.length-1][1]?n.aftCell:o||a&&c?n.pillarCell??ps:s:i==="R"?o&&n.cpillar&&t<nc+Ti/2+n.cpillar&&e>n.glassSide[n.glassSide.length-1][1]?n.aftCell??s:o?Ul:s:i==="E"?a||o?n.beltCell??ps:s:i==="K"||i==="B"?n.band??s:s}const Tn=2*Zl-2,ef=n=>n<=xc?n:Tn-n;function HM(n,t){const e=ef(t),i=n.pts[e];return[t<=xc?i[0]:-i[0],i[1],n.z]}const GM={U:0,L:1,K:2,B:3,S:4,E:4,G:5,R:5};function VM(n){const{s:t,rings:e}=n,i=e.length,s=new Float32Array(i*Tn*3);for(let y=0;y<i;y++)for(let M=0;M<Tn;M++)s.set(HM(e[y],M),(y*Tn+M)*3);const o=(y,M)=>[s[(y*Tn+M)*3],s[(y*Tn+M)*3+1],s[(y*Tn+M)*3+2]],a=y=>Math.min(ef(y),ef((y+1)%Tn)),c=(i-1)*Tn,l=new Float32Array(c*3),h=new Int8Array(Tn);for(let y=0;y<Tn;y++)h[y]=GM[ya[a(y)]]??4;const r=new L,u=new L,f=new L;for(let y=0;y<i-1;y++)for(let M=0;M<Tn;M++){const _=(M+1)%Tn;r.fromArray(o(y+1,_)).sub(f.fromArray(o(y,M))),u.fromArray(o(y,_)).sub(f.fromArray(o(y+1,M))),r.cross(u),l.set([r.x,r.y,r.z],(y*Tn+M)*3)}{const y=Math.floor(i/2),M=Ol+3;r.fromArray(o(y,M)),u.fromArray(o(y,(M+1)%Tn)).sub(r),f.fromArray(o(y+1,(M+1)%Tn)).sub(r);const _=new L().crossVectors(u,f),D=new L().fromArray(l,(y*Tn+M)*3);if(_.dot(D)<0)for(let I=0;I<l.length;I++)l[I]=-l[I]}const d=Math.cos(fi.degToRad(t.crease??40)),v=new L,g=new L,m=new L,p=new _s;for(let y=0;y<i-1;y++){const M=(e[y].d+e[y+1].d)/2;for(let _=0;_<Tn;_++){const D=(_+1)%Tn,I=Fd(t,a(_),M);v.fromArray(l,(y*Tn+_)*3);const P=v.length();if(P<1e-10)continue;v.divideScalar(P);const F=(G,st)=>{if(t.flat)return[v.x,v.y,v.z];m.set(0,0,0);for(const vt of[G-1,G])if(!(vt<0||vt>i-2))for(const Rt of[(st-1+Tn)%Tn,st]){if(h[Rt]!==h[_])continue;g.fromArray(l,(vt*Tn+Rt)*3);const mt=g.length();mt<1e-10||g.dot(v)/mt<d||m.add(g)}return m.lengthSq()<1e-14&&m.copy(v),m.normalize(),[m.x,m.y,m.z]},R=[[y,_],[y,D],[y+1,D],[y+1,_]],x=R.map(G=>F(G[0],G[1])),z=R.map(G=>o(G[0],G[1]));for(const G of[[0,1,2],[0,2,3]])if(r.fromArray(z[G[0]]),u.fromArray(z[G[1]]).sub(r),f.fromArray(z[G[2]]).sub(r),!(u.cross(f).lengthSq()<1e-14))for(const st of G)p.vert(z[st],x[st],I)}}for(const[y,M]of[[e[0],[0,0,-1]],[e[i-1],[0,0,1]]])for(let _=0;_<Zl-1;_++){const D=y.pts[_],I=y.pts[_+1];if(Math.abs(I[1]-D[1])<1e-5&&Math.abs(I[0]-D[0])<1e-5)continue;const P=Fd(t,_,y.d);p.quad([-D[0],D[1],y.z],[D[0],D[1],y.z],[I[0],I[1],y.z],[-I[0],I[1],y.z],P===gc?gn:P,M)}return p}function nf(n,t){let e=-1/0;for(let i=zm;i<Zl-1;i++){const s=n.pts[i],o=n.pts[i+1],a=Math.min(s[0],o[0]),c=Math.max(s[0],o[0]);if(t<a-1e-6||t>c+1e-6)continue;const l=c-a<1e-6?1:(t-s[0])/(o[0]-s[0]);e=Math.max(e,We(s[1],o[1],es(l,0,1)))}return e}function io(n,t,e,i){const s=n.rings,o=s.length;let a=null;for(let c=0;c<o;c++){const l=s[i?o-1-c:c],h=nf(l,t);if(h>=e){if(!a||a.h===-1/0)return[t,e,l.z];const r=(e-a.h)/(h-a.h);return[t,e,We(a.r.z,l.z,r)]}a={r:l,h}}return null}function Nd(n,t,e,i){const o=io(n,t+.01,e,i),a=io(n,Math.max(0,t-.01),e,i),c=io(n,t,e+.01,i),l=io(n,t,e-.01,i);if(!o||!a||!c||!l)return[0,0,i?1:-1];const h=new L(o[0]-a[0],o[1]-a[1],o[2]-a[2]),r=new L(c[0]-l[0],c[1]-l[1],c[2]-l[2]),u=h.cross(r).normalize();return u.z*(i?1:-1)<0&&u.negate(),[u.x,u.y,u.z]}function sr(n,t){for(let e=zm;e<Zl-1;e++){const i=n.pts[e],s=n.pts[e+1];if((t-i[1])*(t-s[1])<=0&&Math.abs(s[1]-i[1])>1e-6)return We(i[0],s[0],(t-i[1])/(s[1]-i[1]))}return n.pts[Ol+2][0]}function Om(n,t,e,i,s,o=0){const a=e.e==="rear",c=14,l=[];for(let r=0;r<=c;r++){const u=r/c,f=We(e.x[0],e.x[1],u)*t.hw,d=We(e.y0[0],e.y0[1],u)-o,v=We(e.y1[0],e.y1[1],u)+o,g=io(t,f,d,a),m=io(t,f,v,a);if(!g||!m)continue;const p=Nd(t,f,d,a),y=Nd(t,f,v,a);l.push([g.map((M,_)=>M+p[_]*s),m.map((M,_)=>M+y[_]*s),p])}const h=Array.isArray(i);for(let r=0;r<l.length-1;r++){const[u,f,d]=l[r],[v,g]=l[r+1];for(const m of[1,-1]){if(m<0&&e.x[0]<=.001&&r<0)continue;const p=M=>[M[0]*m,M[1],M[2]],y=[d[0]*m,d[1],d[2]];h?n.quad(p(u),p(v),p(g),p(f),0,y,i):n.quad(p(u),p(v),p(g),p(f),i,y)}}}function WM(n,t,e){const{s:i,L:s,hw:o,rings:a}=t,c=a[0],l=a[a.length-1];for(const h of i.lamps)if(!h.skip)if(h.cap){const r=h.e==="rear"?l:c,u=h.e==="rear"?1:-1,f=h.x?h.x[1]:sr(r,(h.y0+h.y1)/2)-(h.inset||0),d=h.x?h.x[0]:-f,v=h.y1-h.y0+.03;if(h.x)for(const g of[1,-1])n.box(f-d+.04,v,.012,g*(d+f)/2,(h.y0+h.y1)/2,r.z+u*.004,Ml);else n.box(2*f+.02,v,.012,0,(h.y0+h.y1)/2,r.z+u*.004,Ml)}else h.lens&&Om(n,t,h,Ml,.003,h.lens);if(e!=="semi"){const h=i.mirrorD,r=a.reduce((d,v)=>Math.abs(v.d-h)<Math.abs(d.d-h)?v:d),u=Math.min(t.belt(h),t.top(h)),f=r.pts[nc][0];for(const d of[1,-1]){const v=e==="cybertruck"?i.body:Jn;n.addGeo(new aa(1,12,8),v,On(d*(f+.12),u+.09,r.z+.06,0,0,0,.06,.048,.1)),n.box(.12,.03,.06,d*(f+.05),u+.07,r.z+.06,ps),n.addGeo(new gs(1,12),Ul,On(d*(f+.12),u+.09,r.z+.155,0,0,0,.052,.04,1))}}if(n.box(.31,.155,.012,0,i.plateY,l.z+.007,Um),e==="models"||e==="model3"||e==="modelx"||e==="modely"){const h=io(t,0,t.top(.12)-.015,!1);h&&n.box(.07,.035,.01,0,h[1],h[2]-.002,mc,-.6);const r=c.z;if(e==="models"||e==="model3"){const u=i.intake[0],f=sr(c,u)*.62;n.box(2*f,.014,.01,0,u,r-.003,Us)}}if(i.falcon){const[h,r,u]=i.falcon;for(const f of[1,-1]){let d=null;for(const v of a){if(v.d<h||v.d>r)continue;const g=nf(v,u)+.002;d&&n.quad([f*(u-.006),d.y,d.z],[f*(u+.006),d.y,d.z],[f*(u+.006),g,v.z],[f*(u-.006),g,v.z],Us,[0,1,0]),d={y:g,z:v.z}}}}if(e==="cybertruck"){for(let u=3.85;u<5.58;u+=.14){const f=t.top(u),d=a.reduce((v,g)=>Math.abs(g.d-u)<Math.abs(v.d-u)?g:v);n.box(d.pts[nc+Ti/2][0]*2-.04,.006,.012,0,f+.004,u-s/2,Us,Math.atan2(t.top(u+.01)-t.top(u-.01),.02)*-1)}for(const u of[1,-1]){let f=null;for(const d of a){if(d.d<3.82||d.d>5.62)continue;const v=d.pts[nc+Ti/2][0],g=d.pts[xc][1]+.012,m=[[u*(v-.05),g,d.z],[u*(v+.004),g,d.z]];f&&n.quad(f[0],f[1],m[1],m[0],Qu,[0,1,0]),f=m}f=null;for(const d of a){if(d.d<.1||d.d>1.42)continue;const v=nf(d,.8)+.002,g=[[u*.794,v,d.z],[u*.806,v,d.z]];f&&n.quad(f[0],f[1],g[1],g[0],Us,[0,1,0]),f=g}}n.box(2*sr(c,.8)+.004,.016,.012,0,.8,c.z-.003,Us),n.box(2.08,.24,.12,0,.54,c.z+.02,gn),n.box(1.9,.08,.12,0,.5,l.z-.02,gn)}}function Wh(n,t,e,i){Zo.fromArray(t[0]),Fl.fromArray(t[1]).sub(Zo),Nl.fromArray(t[2]).sub(Zo),As.crossVectors(Fl,Nl);const s=[0,0,0];for(const a of e)for(let c=0;c<3;c++)s[c]+=a[c];const o=As.dot(Nm.fromArray(s))>=0?[[0,1,2],[0,2,3]]:[[0,2,1],[0,3,2]];for(const a of o)for(const c of a)n.vert(t[c],e[c],i)}function zd(n,t,e,i,s,o,a,c,l){for(let r=0;r<12;r++){const u=We(a,c,r/12),f=We(a,c,(r+1)/12),d=(u+f)/2,v=(_,D)=>[t+_,e+s*Math.sin(D),i+s*Math.cos(D)],g=v(-o,u),m=v(o,u),p=v(o,f),y=v(-o,f),M=[0,Math.sin(d),Math.cos(d)];n.quad(g,m,p,y,l,M),n.quad(g,m,p,y,l,[0,-M[1],-M[2]])}}function XM(n,t,e,i,s,o,a,c=.007){const l=t.rings.filter(h=>(o?t.cabL-h.d:h.d)<=s+1e-6);o&&l.reverse();for(let h=0;h<l.length-1;h++){const r=l[h],u=l[h+1],f=sr(r,e)+c,d=sr(r,i)+c,v=sr(u,e)+c,g=sr(u,i)+c;for(const m of[1,-1])n.quad([m*f,e,r.z],[m*v,e,u.z],[m*g,i,u.z],[m*d,i,r.z],0,[m,0,0],a)}}function Od(n,t,e){const{s:i,rings:s,L:o,hw:a}=n,c=new _s(!0),l=[1,.98,.95],h=[1,-.06,0],r=[1,.42,.04],u=s[0],f=s[s.length-1];for(const d of i.lamps){if(d.skip||d.e==="rear"!==e)continue;const v=d.gain??1,g=(e?h:l).map(m=>m*v);if(d.cap){const m=e?f:u,p=e?1:-1;if(d.x)for(const y of[1,-1])c.box(d.x[1]-d.x[0],d.y1-d.y0,.012,y*(d.x[0]+d.x[1])/2,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g);else{const y=sr(m,(d.y0+d.y1)/2)-(d.inset||0);c.box(2*y,d.y1-d.y0,.012,0,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,g)}}else Om(c,n,d,g,.007);if(d.wrap){const m=Array.isArray(d.y0)?d.y0[1]:d.y0,p=Array.isArray(d.y1)?d.y1[1]:d.y1;XM(c,n,m,p,d.wrap,e,g)}}if(!e&&t!=="semi"&&t!=="cybertruck"){const d=t==="models"?1.35:1.2,v=s.reduce((g,m)=>Math.abs(m.d-d)<Math.abs(g.d-d)?m:g);for(const g of[1,-1])c.box(.006,.02,.06,g*(v.pts[Ol+3][0]+.003),v.pts[Ol+3][1],v.z,0,0,0,0,r)}return e&&t==="cybertruck"&&c.box(2*sr(f,1.2)-.06,.008,.05,0,n.top(o-.03)+.004,f.z-.03,0,0,0,0,h.map(d=>d*1.5)),c}function el(n,t,e,i,s){const o=new Ko(t.map(a=>new Kt(a[0],a[1])),i);n.addGeo(o,e,On(s,0,0,0,0,-Math.PI/2))}function Xh(n,t,e,i,s){const o=i/2,a=28;el(n,[[t-.006,-o+.03],[t,-o+.055],[t,o-.055],[t-.006,o-.03]],LM,a,s),el(n,[[e-.005,-o+.02],[e+.02,-o+.002],[We(e,t,.55),-o-.004],[t-.03,-o+.008],[t-.006,-o+.03]],Dd,a,s),el(n,[[t-.006,o-.03],[t-.03,o-.008],[We(e,t,.55),o+.004],[e+.02,o-.002],[e-.005,o-.02]],Dd,a,s);for(const c of[-.22,.22])el(n,[[t+.0015,c*i-.006],[t+.0015,c*i+.006]],Us,a,s)}function qM(n){const t=Pr[n],e=t.wheel,i=t.R,s=i*t.rimRatio,o=new _s,a=new _s,c=(l,h,r)=>{const u=h/2,f=u-.028;if(r?(Xh(l,i,s,h/2-.015,h/4+.0075),Xh(l,i,s,h/2-.015,-h/4-.0075)):Xh(l,i,s,h,0),l.addGeo(new gs(s*.99,28),Ei,On(-u*.5,0,0,0,Math.PI/2,0)),l.addGeo(new _a(s*.9,s*1,32),e.semi?Qs:e.cover?Ei:Qs,On(f+.004,0,0,0,Math.PI/2,0)),e.semi){l.addGeo(new un(s*.9,s*.9,.02,28),Qs,On(f-.05,0,0,0,0,Math.PI/2)),l.addGeo(new un(s*.3,s*.36,.16,18),Qs,On(f+0,0,0,0,0,Math.PI/2)),l.addGeo(new un(s*.17,s*.17,.04,14),Ei,On(f+.08,0,0,0,0,Math.PI/2));for(let y=0;y<10;y++){const M=y/10*Math.PI*2;l.box(.03,.026,.026,f-.025,Math.cos(M)*s*.45,Math.sin(M)*s*.45,mc)}for(let y=0;y<8;y++){const M=(y+.5)/8*Math.PI*2;l.addGeo(new gs(s*.11,10),gc,On(f-.038,Math.cos(M)*s*.7,Math.sin(M)*s*.7,0,Math.PI/2,0))}return}l.addGeo(new un(s*.78,s*.78,.028,26),DM,On(f-.1,0,0,0,0,Math.PI/2));const d=.7;l.box(.07,s*.4,s*.24,f-.075,Math.cos(d)*s*.66,Math.sin(d)*s*.66,e.caliper??Ei,-d),e.cover&&l.addGeo(new gs(s*.88,30),Ei,On(f-.016,0,0,0,Math.PI/2,0));const v=e.n,g=e.pair||0,m=s*.74,p=s*.2+m/2;for(let y=0;y<v;y++)for(const M of g?[-g,g]:[0]){const _=y/v*Math.PI*2+M;l.box(.03,m,e.sw,f-.01,Math.cos(_)*p,Math.sin(_)*p,e.cell,_),e.accent&&l.box(.032,m*.85,.008,f-.008,Math.cos(_)*(p+m*.05),Math.sin(_)*(p+m*.05),e.accent,_)}l.addGeo(new un(s*.22,s*.24,.05,20),e.cover?Ei:e.cell,On(f-.005,0,0,0,0,Math.PI/2)),l.addGeo(new un(s*.12,s*.12,.01,16),ps,On(f+.022,0,0,0,0,Math.PI/2))};return c(o,t.tyreW,!1),n==="semi"&&c(a,t.dualW,!0),{front:o,drive:n==="semi"?a:o,R:i}}const bl=(()=>{const a=no([[.27,.1],[.45,.025],[.8,0],[1.1,.03],[1.35,.12],[1.62,.36],[2.3,.88],[3,1.4],[3.3,1.66],[3.6,2],[3.82,2.38],[3.95,2.78],[4.02,3.1],[4.05,3.36]]),c=no([[.27,1.27],[.55,1.3],[1.05,1.3],[1.5,1.265],[2.1,1.2],[2.9,1.13],[3.69,1.05]]),l=I=>I<=3.69?c(I):c(3.69)-.36+Math.sqrt(Math.max(0,.36*.36-(I-3.69)*(I-3.69))),h=no([[.27,.25],[1.1,.32],[1.7,.5],[3,.62],[4.05,.45]]),r=I=>Math.min(h(I),l(I)-.06,3.8-.05-a(I)),u=1.5,f=.62,d=.52,v=1.25,g=I=>{const P=Math.abs(I-u);return P<f?d+Math.sqrt(f*f-P*P):.27},m=()=>1.88,p=()=>2.88,y=I=>a(I)+r(I)+.16;return{WB:1.88,H:4.05,CAB:3.8,YB:.27,dF:a,hw:l,rc:r,AX:u,AR:f,ACY:d,YK:v,archA:g,yWB:m,yWT:p,dP:y,DG1:3,YDT:2.9,yDB:(I,P)=>1.88+.04-.18*(1-es((I-y(P)-.1)/.95,0,1)**2)}})();function Ui(n,t){const e=bl.dF(n),i=bl.hw(n),s=bl.rc(n);if(t<=1)return[t*(i-s),n,e];if(t<=2){const o=(t-1)*Math.PI/2;return[i-s+s*Math.sin(o),n,e+s*(1-Math.cos(o))]}return[i,n,e+s+(t-2)]}function Zr(n,t){const i=Ui(n,t+.004),s=Ui(n,Math.max(0,t-.004)),o=Ui(n+.004,t),a=Ui(n-.004,t),c=new L(i[0]-s[0],i[1]-s[1],i[2]-s[2]),l=new L(o[0]-a[0],o[1]-a[1],o[2]-a[2]),h=c.cross(l).normalize(),r=Ui(n,t);return h.x*r[0]+h.y*(r[1]-1.8)+h.z*(r[2]-2.6)<0&&h.negate(),[h.x,h.y,h.z]}function kr(n,t,e,i,s,o,a,c,l=18){const h=Array.isArray(c),r=(u,f)=>{const d=Ui(u,f),v=Zr(u,f);return[d[0]+v[0]*a,d[1]+v[1]*a,d[2]+v[2]*a-t/2]};for(let u=0;u<l;u++){const f=We(s,o,u/l),d=We(s,o,(u+1)/l),g=Zr((e+i)/2,(f+d)/2);h?n.quad(r(e,f),r(e,d),r(i,d),r(i,f),0,g,c):n.quad(r(e,f),r(e,d),r(i,d),r(i,f),c,g)}}function YM(){const n=Pr.semi,t=n.L,e=bl,i=ut=>ut-t/2,s=[];{const $=[0];let X=[e.YB,e.dF(e.YB),e.hw(e.YB)];for(let St=1;St<=2e3;St++){const Ft=We(e.YB,e.H,St/2e3),Wt=[Ft,e.dF(Ft),e.hw(Ft)];$.push($[St-1]+Math.hypot(Wt[0]-X[0],Wt[1]-X[1],Wt[2]-X[2])),X=Wt}const Et=.085,At=$[2e3];for(let St=0,Ft=0;St<=At;St+=Et){for(;Ft<2e3&&$[Ft]<St;)Ft++;s.push(We(e.YB,e.H,Ft/2e3))}s.push(e.YB,.34,.35,.36,.46,.48,.5,.92,.94,.95,.96,1.06,1.07,1.08,1.1,e.YK,.84,.86,.42,.44,1.8,1.82,1.84,1.86,1.88,1.9,1.92,1.94,1.96,2.82,2.84,2.86,2.88,2.9,2.92,2.94,2.96,3,3.04,3.06,3.08,3.09,3.12,e.H-.32,e.H-.004,e.H)}const o=[...new Set(s.filter(ut=>ut>=e.YB&&ut<=e.H).map(ut=>Math.round(ut*1e3)/1e3))].sort((ut,$)=>ut-$),a=[];for(let ut=0;ut<=e.CAB+1e-6;ut+=.11)a.push(ut);for(let ut=0;ut<=16;ut++)a.push(e.AX+e.AR*Math.cos(ut/16*Math.PI));a.push(e.AX-e.AR-.004,e.AX+e.AR+.004,3.095,3.105,e.DG1,e.DG1+.035,e.CAB-.16,e.CAB-.012,e.CAB);const c=[...new Set(a.filter(ut=>ut>=0&&ut<=e.CAB).map(ut=>Math.round(ut*2e3)/2e3))].sort((ut,$)=>ut-$),l=6,h=11,r=o.map(ut=>{const $=[],X=e.dF(ut),Et=e.hw(ut),At=e.rc(ut),St=X+At;for(let Ft=0;Ft<=l;Ft++){const Wt=Ui(ut,Ft/l);$.push([Wt[0],ut,Wt[2],Ft/l,0])}for(let Ft=1;Ft<=h;Ft++){const Wt=Ui(ut,1+Ft/h);$.push([Wt[0],ut,Wt[2],1+Ft/h,1])}for(const Ft of c){const Wt=Math.max(Ft,St);$.push([Et,ut,Wt,2+Wt-St,2])}if(ut<e.YK)for(const Ft of $){const Wt=Math.max(e.YB,e.archA(Ft[2]));Ft[4]===2&&Wt>e.YB&&(Ft[1]=Wt+(ut-e.YB)/(e.YK-e.YB)*(e.YK-Wt))}return $}),u=r.length,f=r[0].length,d=ut=>[ut[0],ut[1],i(ut[2])],v=(ut,$)=>[ut[0]-$[0],ut[1]-$[1],ut[2]-$[2]],g=(ut,$)=>(ut[0]-$[0])**2+(ut[1]-$[1])**2+(ut[2]-$[2])**2,m=(ut,$,X,Et)=>{let At=ut,St=$;for(let Ft=0;Ft<40;Ft++){const Wt=At+X,ae=St+Et;if(Wt<0||Wt>=u||ae<0||ae>=f||(At=Wt,St=ae,g(r[At][St],r[ut][$])>1e-8))break}return r[At][St]},p=r.map((ut,$)=>ut.map((X,Et)=>{const At=v(m($,Et,0,1),m($,Et,0,-1)),St=v(m($,Et,1,0),m($,Et,-1,0)),Ft=new L(At[0],At[1],At[2]).cross(new L(St[0],St[1],St[2]));return Ft.lengthSq()<1e-14&&Ft.set(1,0,0),Ft.normalize(),Ft.x*X[0]+Ft.y*(X[1]-1.8)+Ft.z*(X[2]-2.6)<0&&Ft.negate(),Et===0&&(Ft.x=0),Ft.normalize(),[Ft.x,Ft.y,Ft.z]})),y=(ut,$,X,Et,At)=>$<.43&&At<2?gn:$>.84&&$<.86&&At<2?Us:At===2&&$<.35&&e.archA(X)<=e.YB+.001?gn:At===2?Math.abs(X-3.1)<.006&&$>.55&&$<2.98?Us:Vo:$>e.yWB()-.04&&$<e.yWT()+.04?Qc:At===1&&Et>1.35?tf:Jn,M=new _s,_=new L,D=new L,I=new L,P=(ut,$,X)=>{const Et=ut.map(d);if(_.fromArray(v(Et[2],Et[0])),D.fromArray(v(Et[3],Et[1])),I.crossVectors(_,D),I.lengthSq()<1e-12)return;const At=[0,0,0];for(const Ft of $)for(let Wt=0;Wt<3;Wt++)At[Wt]+=Ft[Wt];const St=I.x*At[0]+I.y*At[1]+I.z*At[2]<0;for(const Ft of[[0,1,2],[0,2,3]]){const Wt=St?[Ft[0],Ft[2],Ft[1]]:Ft;if(_.fromArray(v(Et[Wt[1]],Et[Wt[0]])),D.fromArray(v(Et[Wt[2]],Et[Wt[0]])),!(_.cross(D).lengthSq()<1e-14))for(const ae of Wt)M.vert(Et[ae],$[ae],X)}};for(let ut=0;ut<u-1;ut++)for(let $=0;$<f-1;$++){const X=[r[ut][$],r[ut][$+1],r[ut+1][$+1],r[ut+1][$]],Et=[p[ut][$],p[ut][$+1],p[ut+1][$+1],p[ut+1][$]],At=[0,1,2,3].map(St=>X.reduce((Ft,Wt)=>Ft+Wt[St],0)/4);P(X,Et,y(At[0],At[1],At[2],At[3],X[1][4]))}const F=r[u-1],R=r[0];for(let ut=0;ut<f-1;ut++){const $=F[ut],X=F[ut+1];P([$,X,[0,$[1],X[2]],[0,$[1],$[2]]],[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],Jn);const Et=R[ut],At=R[ut+1];P([Et,At,[0,e.YB,At[2]],[0,e.YB,Et[2]]],[[0,-1,0],[0,-1,0],[0,-1,0],[0,-1,0]],gc)}for(let ut=0;ut<u-1;ut++){const $=r[ut][f-1],X=r[ut+1][f-1],Et=($[1]+X[1])/2;P([$,X,[0,X[1],e.CAB],[0,$[1],e.CAB]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]],Et<e.YK?gn:Jn)}zd(M,e.hw(.8)-.24,e.ACY,i(e.AX),e.AR-.01,.23,0,Math.PI,gc);{const ut=St=>e.dF(St)+e.rc(St),$=St=>(e.hw(St+.005)-e.hw(St-.005))/.01,X=(St,Ft,Wt,ae,bt,Ot,O=16,ie=8)=>{const Yt=(ce,Jt)=>{const ct=typeof ae=="function"?ae:()=>ae,ft=We(St(2.3),Ft(2.3),ce),C=(Wt(ft)+ct(ft))/2,b=We(St(C),Ft(C),ce),W=We(Wt(b),ct(b),Jt),Z=We(St(W),Ft(W),ce),tt=new L(1,-$(W),0).normalize();return{p:[e.hw(W)+tt.x*bt,W+tt.y*bt,i(Z)],n:[tt.x,tt.y,0]}};for(let ce=0;ce<O;ce++)for(let Jt=0;Jt<ie;Jt++){const ct=[Yt(ce/O,Jt/ie),Yt((ce+1)/O,Jt/ie),Yt((ce+1)/O,(Jt+1)/ie),Yt(ce/O,(Jt+1)/ie)];Wh(M,ct.map(ft=>ft.p),ct.map(ft=>ft.n),Ot)}},Et=St=>{const Ft=e.WB+.04,Wt=e.dP(2.1),ae=ut(Ft),bt=Wt+.12;if(St<bt)return We(Ft,Ft-.14,es((St-ae)/(bt-ae),0,1));const Ot=es((St-bt)/(e.DG1-bt),0,1);return We(Ft-.14,Ft+.2,Ot*Ot*(3-2*Ot))},At=(St,Ft=0)=>{const Wt=We(2.85,2.92,es((St-ut(2.9))/1.2,0,1))-Ft,ae=.16,bt=e.DG1-ae;if(St<=bt)return Wt;const Ot=es((St-bt)/ae,0,1);return Wt-ae*(1-Math.sqrt(1-Ot*Ot))};X(ut,()=>e.DG1+.04,St=>Et(St)-.04,St=>At(St-.04)+.04,.003,Qc,22,8),X(ut,St=>e.dP(St),Et,St=>At(St),.006,Qc,8,8),X(St=>e.dP(St)+.1,()=>e.DG1,Et,St=>At(St),.006,Qc,18,8),X(St=>e.dP(St)+.015,St=>e.dP(St)+.085,St=>Et(St)-.04,St=>At(St)+.04,.008,Vo,2,8)}kr(M,t,.92,1.1,0,1.62,.003,Ml,26),kr(M,t,e.WB-.04,e.yWT()+.04,1.52,1.7,.005,Jn,4);{const ut=(Wt,ae,bt)=>{const Ot=Wt/(e.hw(ae)-e.rc(ae)),O=Ui(ae,Ot),ie=Zr(ae,Ot);return[O[0]+ie[0]*bt,O[1]+ie[1]*bt,i(O[2]+ie[2]*bt)]},$=(Wt,ae,bt,Ot,O,ie,Yt=3,ce=4)=>{for(let Jt=0;Jt<Yt;Jt++)for(let ct=0;ct<ce;ct++){const ft=We(Wt,ae,Jt/Yt),C=We(Wt,ae,(Jt+1)/Yt),b=We(bt,Ot,ct/ce),W=We(bt,Ot,(ct+1)/ce),Z=Zr((b+W)/2,(ft+C)/2/(e.hw(b)-e.rc(b)));M.quad(ut(ft,b,O),ut(C,b,O),ut(C,W,O),ut(ft,W,O),ie,Z)}},X=e.WB;$(0,.95,X+0,X+.1,.004,tl,6,1),$(0,.25,X+.16,X+.7,.004,tl,2,4),$(0,.15,X+.7,X+.84,.004,tl,1,1),$(.25,.3,X+.16,X+.62,.004,tl,1,3);const Et=X+.3,At=.17,St=.215,Ft=10;for(let Wt=0;Wt<Ft;Wt++){const ae=-Math.PI/2+Math.PI*Wt/Ft,bt=-Math.PI/2+Math.PI*(Wt+1)/Ft,Ot=[[At,ae],[St,ae],[St,bt],[At,bt]].map(([O,ie])=>ut(Math.max(0,O*Math.cos(ie)),Et+O*Math.sin(ie)*.8,.007));M.quad(Ot[0],Ot[1],Ot[2],Ot[3],gn,Zr(Et,0))}$(0,.05,Et-.04,Et+.04,.007,gn,1,1),$(0,.2,Et-.012,Et+.012,.007,gn,2,1)}{const ut=i(e.CAB)-.01,$=ut+.33,X=.035,Et=o.filter(St=>St>=1.32).map(St=>{const Ft=Zr(St,2.5);return{x:e.hw(St),y:St,n:[Ft[0],Ft[1],0]}}).filter(St=>St.x>e.hw(e.H)+.02||St.y>=e.H-.001);for(let St=0;St<Et.length-1;St++){const Ft=Et[St],Wt=Et[St+1],ae=(O,ie,Yt)=>[O.x-O.n[0]*Yt,O.y-O.n[1]*Yt,ie];Wh(M,[ae(Ft,ut,0),ae(Wt,ut,0),ae(Wt,$,0),ae(Ft,$,0)],[Ft.n,Wt.n,Wt.n,Ft.n],Vo);const bt=[-Ft.n[0],-Ft.n[1],0],Ot=[-Wt.n[0],-Wt.n[1],0];Wh(M,[ae(Ft,ut,X),ae(Wt,ut,X),ae(Wt,$,X),ae(Ft,$,X)],[bt,Ot,Ot,bt],Jn),M.quad(ae(Ft,$,0),ae(Wt,$,0),ae(Wt,$,X),ae(Ft,$,X),Jn,[0,0,1])}const At=Et[0];M.quad([At.x,At.y,ut],[At.x,At.y,$],[At.x-X,At.y,$],[At.x-X,At.y,ut],Jn,[0,-1,0])}const x=M.append(M.mirroredX()),z=n.W/2,G=i(e.CAB);{const ut=Ui(2.1,2),$=i(ut[2])+.1,X=.72;for(const Et of[1,-1])x.box(X+.04,.05,.06,Et*(ut[0]+X/2),2.12,$,gn,0,Et*.12,Et*-.1),x.box(.14,.55,.16,Et*(ut[0]+X),2.36,$-.06,gn,.1,Et*.12,0),x.box(.1,.46,.01,Et*(ut[0]+X),2.36,$+.025,Ul,.1,Et*.12,0),x.box(.05,.6,.035,Et*(z-.025),1.45,i(3.2),mc)}x.box(.34,.16,.012,0,.55,i(e.dF(.55))-.006,Um),x.box(.8,.55,.02,0,1.75,i(e.CAB)+.012,gn);const st=t/2-G+.3;for(const ut of[1,-1])x.addGeo(new un(1.0824,1.0824,st,8,1,!1,Math.PI/8),gn,On(ut*.47,.98,(G-.3+t/2)/2,Math.PI/2,0,0,.11,1,.16));for(const ut of[G+.3,2.35,3.4])x.box(1.06,.12,.1,0,.96,ut,gn);const vt=(n.axles[1]+n.axles[2])/2;x.box(.86,.12,.7,0,1.12,vt,gn),x.addGeo(new un(.62,.62,.07,32),Ei,On(0,1.215,vt)),x.box(.17,.02,.66,0,1.252,vt+.33,Us);for(const ut of[1,-1])x.box(.36,.02,.5,ut*.24,1.252,vt+.46,gn,0,ut*.5,0);x.box(.6,.06,.2,0,1.2,vt+.72,gn,-.35);for(const ut of[n.axles[1],n.axles[2]])x.addGeo(new un(.13,.13,1.9,12),gn,On(0,n.R,ut,0,0,Math.PI/2)),x.addGeo(new aa(.24,12,8),gn,On(0,n.R,ut,0,0,0,1.2,.9,1));for(const ut of[1,-1]){const $=ut*(z-n.dualW/2-.02);for(const St of[n.axles[1],n.axles[2]])zd(x,$,n.R,St,n.R+.1,(n.dualW+.1)/2,.3,2.6,gn);for(const St of[n.axles[1],n.axles[2]])x.box(n.dualW+.06,.55,.025,$,.5,St+n.R+.17,gn);const X=G-.15,Et=n.axles[1]-n.R-.08,At=Et-X;x.box(.05,.92,At,ut*(z-.035),.88,(X+Et)/2,Vo),x.addGeo(new un(.025,.025,At,8),Jn,On(ut*(z-.035),1.34,(X+Et)/2,Math.PI/2,0,0)),x.box(.055,.16,At,ut*(z-.037),.35,(X+Et)/2,gn),x.box(.4,.5,.8,ut*.82,.8,G+.25,gn)}x.box(2.3,.14,.14,0,.72,t/2-.08,gn);const Rt=[1,.98,.95],mt=[1,-.06,0],It=[1,.42,.04],nt=new _s(!0),kt=new _s(!0);kr(nt,t,.95,1.07,0,1.45,.008,Rt.map(ut=>ut*3.5),26),kr(nt,t,.95,1.07,1.48,1.6,.008,It.map(ut=>ut*1.8),4),kr(nt,t,2.47,2.52,0,1.75,.009,[.012,.013,.016],26),kr(nt,t,2.52,2.545,0,1.9,.009,[.05,.052,.058],26),kr(nt,t,2.545,2.6,0,1.75,.009,[.02,.021,.025],26);const se=3.01,fe=e.hw(se)-e.rc(se);for(const ut of[.13/fe,1.3]){const $=Ui(se,ut),X=Zr(se,ut);nt.box(.08,.035,.05,$[0],se,i($[2])+X[2]*.012,0,0,0,0,It.map(Et=>Et*1.5))}{const ut=Ui(3.6,2.3);nt.box(.03,.05,.12,ut[0]+.004,3.6,i(ut[2]),0,0,0,0,It)}const le=nt.append(nt.mirroredX());{const ut=Ui(2.1,2),$=i(ut[2])+.1,X=.72;for(const Et of[1,-1])le.box(.025,.46,.012,Et*(ut[0]+X+.06),2.36,$-.15,0,0,0,0,Rt.map(At=>At*.55)),le.box(.1,.03,.012,Et*(ut[0]+X),2.6,$-.15,0,0,0,0,It.map(At=>At*1.4))}{const ut=Ui(se,0);le.box(.08,.035,.05,0,se,i(ut[2])-.012,0,0,0,0,It.map($=>$*1.5))}for(const ut of[1,-1])kt.box(.3,.09,.03,ut*.85,.72,t/2,0,0,0,0,mt.map($=>$*1.4));for(const ut of[1,-1])kt.box(.06,.06,.02,ut*(e.hw(3.8)-.15),3.8,G+.015,0,0,0,0,mt);return{body:x,head:le,tail:kt}}const KM=new Map,If=new Map,$M=new Map;function _c(n,t,e){let i=n.get(t);return i||(i=e(),n.set(t,i)),i}function jM(n,t,e,i){const s=n+":"+t+":"+e+":"+i;return _c($M,s,()=>{const o=new Uint8Array(Wa*4),a=new Uint8Array(Wa*4);for(let l=0;l<Wa;l++){const[h,r,u,f,d]=FM[l];let v=l===Jn?n:h;l===Vo&&(v=new Vt(n).multiplyScalar(.86).getHex()),l===tf&&(v=new Vt(n).multiplyScalar(.92).getHex()),o[l*4]=v>>16&255,o[l*4+1]=v>>8&255,o[l*4+2]=v&255,o[l*4+3]=255;const g=l===Jn||l===Vo||l===tf,m=g?e:r,p=g?t:u;a[l*4]=Math.round(f*255),a[l*4+1]=Math.round(m*255),a[l*4+2]=Math.round(p*255),a[l*4+3]=Math.round((d??1)*255)}const c=(l,h)=>{const r=new Sf(l,Wa,1,Wi);return r.magFilter=Ai,r.minFilter=Ai,r.generateMipmaps=!1,h&&(r.colorSpace=Cn),r.needsUpdate=!0,r};return{map:c(o,!0),orm:c(a,!1)}})}const Bd={models:"red",model3:"quicksilver",modelx:"pearl",modely:"quicksilver"};function ZM(n,t){if(!Bd[n])return null;const e=new Vt(t),i={};return e.getHSL(i,Cn),i.l>.3?null:i.s>.25&&i.h>.5&&i.h<.75?Is.deepblue:i.s>.35&&(i.h<.05||i.h>.93)?Is.red:Is[Bd[n]]}function JM(n){const t=new Vt(n),e={};return t.getHSL(e,Cn),e.l>.72?[.03,.32]:e.l>.4&&e.s>.12?[.55,.3]:[.4,.3]}function QM(n,t=!1,e=!1){const i=t?"0.34":e?"0.4":"0.62",s=t?"0.26":"0.28",o=e?"0.6":"1.4",a=e?"0.18":"0.6",c=e?"0.12":"0.35";return n.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
      #if defined( RE_IndirectDiffuse )
        iblIrradiance = mix( iblIrradiance, vec3( dot( iblIrradiance, vec3( 0.2126, 0.7152, 0.0722 ) ) ), 0.8 );
      #endif
      #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        { float m = max( max( radiance.r, radiance.g ), radiance.b ), K = ${o};
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
        if ( m > K ) reflectedLight.directSpecular *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / ${c} ) ) / m; }
      #ifdef USE_CLEARCOAT
      { float m = max( max( clearcoatSpecularDirect.r, clearcoatSpecularDirect.g ), clearcoatSpecularDirect.b ), K = 0.7;
        if ( m > K ) clearcoatSpecularDirect *= ( K + ( m - K ) / ( 1.0 + ( m - K ) / 0.5 ) ) / m; }
      #endif`)},n.customProgramCacheKey=()=>t?"fleet-stadium-v8-semi":e?"fleet-stadium-v8-ct":"fleet-stadium-v8",n}function tb(n,t,e){let i,s,o;if(n==="semi"&&(t==null||typeof t!="string")){i=t!=null?new Vt(t).getHex(Cn):Is.semi[0];const c=new Vt(i),l={};c.getHSL(l,Cn),l.l>.6&&(i=Is.semi[0]),s=Is.semi[1],o=Is.semi[2]}else if(typeof t=="string"&&Is[t])[i,s,o]=Is[t];else{i=new Vt(t).getHex(Cn);const c=ZM(n,i);c?[i,s,o]=c:[s,o]=JM(i)}const a=n==="cybertruck"?"ss":n+":"+i+":"+s+":"+o;return _c(If,"body:"+a+":"+(e?e.uuid:""),()=>{const c=jM(i,s,o,n==="cybertruck");return QM(new Di({map:c.map,roughnessMap:c.orm,metalnessMap:c.orm,clearcoatMap:c.orm,specularIntensityMap:c.orm,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:n==="semi"?.12:.09,specularIntensity:1,envMap:e||null,envMapIntensity:n==="semi"?1:n==="cybertruck"?1.3:1.2}),n==="semi",n==="cybertruck")})}function qh(n,t){const e=es(t,0,1);return _c(If,"lamp:"+n+":"+e,()=>new Ke({vertexColors:!0,color:new Vt(2.8*e+.08,2.8*e+.08,2.8*e+.08)}))}let Ia=null;function eb(){return _c(If,"shadow",()=>{const e=new Uint8Array(32768);for(let i=0;i<128;i++)for(let s=0;s<64;s++){const o=Math.abs((s+.5)/64*2-1),a=Math.abs((i+.5)/128*2-1),c=Math.max(0,o-.62)/.38,l=Math.max(0,a-.8)/.2,h=Math.min(1,Math.sqrt(c*c+l*l)),r=Math.pow(1-h,1.6)*.82;e.set([0,0,0,Math.round(r*255)],(i*64+s)*4)}return Ia=new Sf(e,64,128,Wi),Ia.magFilter=ns,Ia.minFilter=ns,Ia.needsUpdate=!0,new Ke({map:Ia,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})})}function nb(n){return _c(KM,n,()=>{const t=qM(n);let e,i,s;if(n==="semi")({body:e,head:i,tail:s}=YM());else{const f=kM(n);e=VM(f),WM(e,f,n),i=Od(f,n,!1),s=Od(f,n,!0)}const o=t.front.build(),a=t.front.mirroredX().build(),c=t.drive.build(),l=t.drive.mirroredX().build(),h=e.build(),r=new _s().append(e);for(const f of Bm(n)){const d=(f.drive?f.sx>0?c:l:f.sx>0?o:a).clone().translate(f.x,f.y,f.z);r.addRaw(d)}const u=new _s(!0).append(i).append(s);return{body:h,head:i.build(),tail:s.build(),baked:r.build(),lamps:u.build(),wheelR:o,wheelL:a,driveR:c,driveL:l,shadow:new Mn(Pr[n].W+.5,Pr[n].L+.7).rotateX(-Math.PI/2)}})}function Bm(n){const t=Pr[n],e=[],i=n==="semi"?["f","m","r"]:["f","r"];return[...t.axles].sort((s,o)=>s-o).forEach((s,o)=>{const a=n==="semi"&&o>0,c=a?t.dualW:t.tyreW;for(const[l,h]of[["l",-1],["r",1]])e.push({name:`wheel_${i[o]}${l}`,drive:a,sx:h,x:h*(t.W/2-c/2-.02-(t.inset||0)),y:t.R,z:s})}),e}function kd(n,t={}){const e=Pr[n];if(!e)throw new Error(`createTeslaVehicle: unknown kind '${n}'`);const i=nb(n);let s=t.color;if(s==null){const v=Fm[n],g=Id[n]=(Id[n]||0)+1;s=v[(g-1)%v.length]}const o=tb(n,s,t.envMap),a=new an;a.name=`tesla-${n}`;const c=!!t.spinWheels,l=new ye(c?i.body:i.baked,o);l.name="body",a.add(l);const h=[];for(const v of Bm(n)){const g=new an;if(g.name=v.name,g.position.set(v.x,v.y,v.z),g.userData.baked=!c,c){const m=new ye(v.drive?v.sx>0?i.driveR:i.driveL:v.sx>0?i.wheelR:i.wheelL,o);m.name="wheel",g.add(m)}a.add(g),h.push(g)}const r=t.lights??1;let u,f;c?(u=new ye(i.head,qh("h",r)),u.name="headlight",a.add(u),f=new ye(i.tail,qh("t",r)),f.name="taillight",a.add(f)):(u=f=new ye(i.lamps,qh("h",r)),u.name="lamps",a.add(u));const d=new ye(i.shadow,eb());return d.name="shadow",d.position.y=.015,d.renderOrder=1,a.add(d),a.userData={kind:n,length:e.L,width:e.W,height:e.H,wheelRadius:e.R,wheels:h,lights:{head:[u],tail:[f]}},a}const km=59/136,us=n=>n*km,zo=(n,t,e)=>Math.max(t,Math.min(e,n)),Cs=(n,t,e)=>{const i=zo((e-n)/(t-n),0,1);return i*i*(3-2*i)};function Hr(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const yn=He,Hm=Ji,ib=n=>Hm(us(n)),Ve=yn.lateral,Li=yn.flip,Hd=Ar;function Bl(n){return jo(n,{pos:new L,fwd:new L,up:new L,inLoop:!1,theta:0})}const nn=n=>Bl(n).pos.z,Bt={hangarBack:-40,door:26,roadStart:24,ramp:yn.ramp,fleet:yn.fleet,landingS:yn.landing?yn.landing.s:yn.fleet.s1+22,gate:yn.checkpoint.s,flip0:Li.s0,flipLip:Li.sLip,boost0:yn.boostArm.s0,boost1:yn.boostArm.s1,flight0:yn.flight.s0,flight1:yn.flight.s1,takeoff:yn.mega.s0,megaLip:yn.mega.s1,landStrip:ib(125),finish:yn.finish.s,end:yn.finish.s+700};Bt.cityEnd=Bt.boost0+60;const sf=1.9,Gd=3.1;function Xa(n){return n<Bt.flip0?9-(9-sf)*Cs(Bt.flip0-110,Bt.flip0-20,n):n<Bt.flipLip?sf:Gd+(9-Gd)*Cs(Bt.flipLip+30,Bt.flipLip+110,n)}const zn={uBeat:{value:0},uTime:{value:0},uFlight:{value:0}},Yh=.0026,Ua=new Vt(853536),sb=new Vt(1902630),fa=`
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float aaLine(float x, float w){ float fw = max(fwidth(x), 1e-4); return 1.0 - smoothstep(w, w + fw*1.5, abs(x)); }
`;function nl(n){const t=ys.merge([de.fog,{uChase:{value:n.chase??1},uPulse:{value:n.pulse??.35}}]);return t.uBeat=zn.uBeat,t.uTime=zn.uTime,new $e({uniforms:t,vertexShader:`
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
      }`,fog:!0,side:n.side??Os})}function Vd(n){const t=ys.merge([de.fog,{uOpaque:{value:n?1:0},uBoost:{value:new Kt(Bt.boost0,Bt.takeoff)},uLines:{value:new Qe(Bt.door+3,Bt.finish,Bt.ramp.s0,Bt.ramp.s1)},uTun:{value:new Kt(-1e9,-1e9)}}]);return t.uBeat=zn.uBeat,t.uTime=zn.uTime,new $e({uniforms:t,vertexShader:`
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
      }`,fog:!0,transparent:!n,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:n?Xe:Os})}function rb(){const n=ys.merge([de.fog,{}]);return n.uBeat=zn.uBeat,new $e({uniforms:n,vertexShader:`
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
      }`,fog:!0})}function No(n,t=.35){const e={uColor:{value:new Vt().copy(n)},uStrength:{value:t},uBeat:zn.uBeat};return new $e({uniforms:e,vertexShader:`
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
      }`,transparent:!0,blending:An,depthWrite:!1,side:Xe})}function Kh(n,{accent:t=[.15,.7,1.6],cell:e=[2.4,1.2],lit:i=.05,seamGlow:s=.06,key:o="a"}={}){return n.onBeforeCompile=a=>{a.uniforms.uPAccent={value:new L(t[0],t[1],t[2])},a.uniforms.uPCell={value:new Kt(e[0],e[1])},a.uniforms.uPLit={value:i},a.uniforms.uPSeam={value:s},a.uniforms.uBeat=zn.uBeat,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += uPAccent * (pSlot * (0.7 + 0.6*exp(-fract(uBeat)*4.0)) + pSeam * uPSeam);`)},n.customProgramCacheKey=()=>"panel-"+o,n}const Uf=new rn(1,1,1);(()=>{const n=new rn(1,1,1,1,1,1),t=n.attributes.position;for(let e=0;e<t.count;e++)t.getY(e)>0&&t.setX(e,t.getX(e)*.62-.08);return n.computeVertexNormals(),n})();const ji=new Ie,kl=new ri,Wd=new Fi,Jl=new L,Ff=new L;class Ne{constructor(){this.geos=[]}add(t,e,i=[1,1,1],s=0,o=-1e3){let a=t.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);if(a.attributes.uv||a.setAttribute("uv",new Me(new Float32Array(a.attributes.position.count*2),2)),!a.index){const u=a.attributes.position.count,f=new Array(u);for(let d=0;d<u;d++)f[d]=d;a.setIndex(f)}e&&a.applyMatrix4(e);const c=a.attributes.position.count,l=new Float32Array(c*3),h=new Float32Array(c),r=new Float32Array(c);for(let u=0;u<c;u++)l[u*3]=i[0],l[u*3+1]=i[1],l[u*3+2]=i[2],h[u]=s,r[u]=o;return a.setAttribute("color",new xn(l,3)),a.setAttribute("aS",new xn(h,1)),a.setAttribute("aOn",new xn(r,1)),this.geos.push(a),this}box(t,e,i,s,o,a,c,l=-a,h=-1e3,r=0,u=0,f=0){return Wd.set(r,u,f),kl.setFromEuler(Wd),ji.compose(Jl.set(s,o,a),kl,Ff.set(t,e,i)),this.add(Uf,ji,c,l,h)}mesh(t){if(!this.geos.length)return null;const e=Ho(this.geos,!1);for(const s of this.geos)s.dispose();return this.geos=[],new ye(e,t)}}function Vi(n,t,{color:e=[1,1,1],on:i=-1e3,hw:s=!1}={}){const o=[],a=[],c=[],l=[],h=[],r=[];let u=0;for(const v of n){const g=Bl(v),m=new L().crossVectors(g.fwd,g.up).normalize(),p=t(v);u=p.length;const y=Xa(v);for(let M=0;M<p.length;M++){const[_,D]=p[M],I=g.pos.clone().addScaledVector(m,_).addScaledVector(g.up,D);o.push(I.x,I.y,I.z),a.push(M/(p.length-1),v),c.push(e[0],e[1],e[2]),l.push(v),h.push(i),r.push(y)}}const f=[];for(let v=0;v<n.length-1;v++)for(let g=0;g<u-1;g++){const m=v*u+g,p=m+1,y=m+u,M=y+1;f.push(m,p,y,p,M,y)}const d=new Ze;return d.setAttribute("position",new Me(o,3)),d.setAttribute("uv",new Me(a,2)),d.setAttribute("color",new Me(c,3)),d.setAttribute("aS",new Me(l,1)),d.setAttribute("aOn",new Me(h,1)),s&&d.setAttribute("aHW",new Me(r,1)),d.setIndex(f),d.computeVertexNormals(),d}function $h(n,t,e){const i=[];for(let s=n;s<t;s+=e)i.push(s);return i.push(t),i}function Xd(n,t){const e=[];let i=n;for(;i<t;){e.push(i);const s=i>Bt.flip0-1&&i<Bt.flipLip+1||i>Bt.ramp.s0-1&&i<Bt.ramp.s1+1||i>Bt.takeoff-1&&i<Bt.megaLip+1,o=i>Bt.flip0-170&&i<Bt.flipLip+170;i+=s?1.2:o?6:24}return e.push(t),e}const wt={cyan:[.15,1,1.7],cyanW:[.7,1.6,2],mag:[1.9,.12,1],org:[2.4,.75,.08],red:[2.4,.08,.12],wht:[1.8,1.8,2],warm:[2,1.4,.8],vio:[.8,.25,2.2],blue:[.2,.5,2.4],green:[.2,2.2,.6],amber:[2.4,1.1,.1],metal:[.13,.12,.17],metalD:[.05,.05,.07],metalL:[.2,.19,.24],conc:[.06,.055,.075]},qd=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],fs=(n,t)=>[n[0]*t,n[1]*t,n[2]*t];function ei(n,t,e,i,s,o,a,c,l,h,r,u=0,f=-Math.PI/2){const d=e*Math.cos(Math.PI/t),v=2*e*Math.sin(Math.PI/t);for(let g=0;g<t;g++){const m=f+g*Math.PI*2/t,p=Math.cos(m)*d,y=Math.sin(m)*d,M=o+p*Math.cos(u),_=c-p*Math.sin(u);n.box(v+i*.8,i,s,M,a+y,_,l,h,r,0,u,m+Math.PI/2)}}function ob(){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=1024,n.height=1024;const t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,1024,1024),[["VOLT","#2ef"],["HYPER","#f3c"],["RUSH","#fa2"],["MACH 1","#8af"],["NEON","#f45"],["ROADSTER RUSH","#fff"],["ZERO-G","#2fc"],["FINISH","#fff"]].forEach(([s,o],a)=>{const c=a*128,l=t.createLinearGradient(0,c,1024,c+128);l.addColorStop(0,"rgba(255,255,255,0.05)"),l.addColorStop(1,"rgba(255,255,255,0.0)"),t.fillStyle=l,t.fillRect(6,c+6,1012,116),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(10,c+10,1004,108),t.font=`italic 900 ${s.length>8?70:88}px Arial Black, Arial, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=18,t.fillStyle=o,t.fillText(s,512,c+66),t.shadowBlur=0,t.fillStyle="#fff",t.globalAlpha=.85,t.fillText(s,512,c+66),t.globalAlpha=1,t.fillStyle=o;for(let h=0;h<5;h++)t.fillRect(40+h*22,c+30,10,68)});const i=new ql(n);return i.colorSpace=Cn,i.anisotropy=4,i}function jh(n,t,e,i,s=2.2){const o=new Mn(e,i),a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setY(l,(7-t+a.getY(l))/8);const c=new Ke({map:n,color:new Vt(s,s,s),side:Xe,fog:!0});return new ye(o,c)}function ab(n){if(!n||!n.isWebGLRenderer)return null;try{const t=new vc;t.add(new ye(new rn(40,20,40),new Ke({color:459790,side:Qn})));const e=(o,a,c,l,h,r,u,f=0,d=0)=>{const v=new ye(new Mn(o,a),new Ke({color:new Vt(r).multiplyScalar(u),side:Xe}));v.position.set(c,l,h),v.rotation.set(d,f,0),t.add(v)};for(let o=-2;o<=2;o++)e(1.2,30,o*4,9.8,0,16777215,3,0,Math.PI/2);e(30,1.2,-19.8,3,0,16722600,5,Math.PI/2),e(30,1.2,19.8,3,0,2287359,5,-Math.PI/2),e(30,4,0,4,-19.8,13161727,1.4),e(30,1,0,1,-19.8,16726666,2),e(30,2,0,6,19.8,6962431,2,Math.PI),e(40,40,0,-9.9,0,656916,1,0,-Math.PI/2);const i=new co(n),s=i.fromScene(t,.03);return i.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] env failed",t),null}}function cb(n){if(!n||!n.isWebGLRenderer)return null;try{const t=new vc;t.add(new ye(new rn(40,20,40),new Ke({color:394759,side:Qn})));const e=(o,a,c,l,h,r,u,f=0,d=0)=>{const v=new ye(new Mn(o,a),new Ke({color:new Vt(r).multiplyScalar(u),side:Xe}));v.position.set(c,l,h),v.rotation.set(d,f,0),t.add(v)};e(26,8,0,9.8,0,16777215,2.2,0,Math.PI/2);for(const o of[-9,0,9])e(3,3,-19.8,12,o,16054015,6,Math.PI/2);for(const o of[-12,12])e(2,6,19.8,5,o,16777215,3.5,-Math.PI/2);e(40,.5,19.8,.4,0,16715808,2.5,-Math.PI/2),e(40,6,0,3,-19.8,10133674,.35),e(40,6,0,3,19.8,10133674,.35,Math.PI),e(40,40,0,-9.9,0,1052690,1,0,-Math.PI/2);const i=new co(n),s=i.fromScene(t,.04);return i.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] stage env failed",t),null}}function lb(){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.35,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new ql(n);return i.colorSpace=Cn,i}const Zh=new L,hb=new L(0,0,1),Yd=new ri,Hl=new Ie,ub=new L;function jn(n,t,e,i,s,o=0){Zh.subVectors(e,t);const a=Zh.length();a<.02||(Yd.setFromUnitVectors(hb,Zh.multiplyScalar(1/a)),Hl.compose(ub.addVectors(t,e).multiplyScalar(.5),Yd,Jl.set(i,i,a)),n.add(Uf,Hl,s,o))}function Gr(n,t,e,i,s,o,a,c,l,h=0){ji.compose(Jl.set(o,a,c),kl.identity(),Ff.set(e,i,s)),Hl.multiplyMatrices(t,ji),n.add(Uf,Hl,l,h)}function il(n,t,{x:e,y:i,z:s,cols:o=4,rows:a=3,yaw:c=0,pitch:l=.25,pitchLamp:h=0,size:r=.62,gap:u=.16,s:f=0,mast:d=0}){const v=new Ie().compose(new L(e,i,s),new ri().setFromEuler(new Fi(l,c,0,"YXZ")),new L(1,1,1)),g=o*(r+u)+u,m=a*(r+u)+u;Gr(n,v,g+.2,.14,.14,0,m/2+.05,-.25,wt.metalL),Gr(n,v,g+.2,.14,.14,0,-m/2-.05,-.25,wt.metalL);for(const p of[-1,1])Gr(n,v,.14,m+.2,.14,p*(g/2+.05),0,-.25,wt.metalL);Gr(n,v,g,m,.08,0,0,-.4,wt.metalD);for(let p=0;p<a;p++)for(let y=0;y<o;y++){const M=-g/2+u+r/2+y*(r+u),_=-m/2+u+r/2+p*(r+u);Gr(n,v,r,r,.36,M,_,-.12,wt.metalD),Gr(t,v,r*.82,r*.82,.04,M,_,.075,[3.2,3.1,2.9],f),Gr(n,v,r*1.02,.05,.22,M,_+r*.5,.12,wt.metal)}if(d>0){const p=e-Math.sin(c)*.6,y=s-Math.cos(c)*.6;for(const M of[-.35,.35])for(const _ of[-.35,.35])n.box(.12,i,.12,p+M,i/2,y+_,wt.metalL);for(let M=.8,_=0;M<i-.5;M+=1.4,_++)n.box(.8,.07,.07,p,M,y-.35,wt.metal),n.box(.8,.07,.07,p,M,y+.35,wt.metal),n.box(.07,.07,.8,p-.35,M,y,wt.metal),n.box(.07,.07,.8,p+.35,M,y,wt.metal),jn(n,new L(p-.35,M,y+.36),new L(p+.35,M+1.4,y+.36),.05,wt.metal);n.box(1.6,.3,1.6,p,.15,y,wt.metalD)}return new L(0,0,.3).applyMatrix4(v)}function Jh(n,t,{axis:e="z",at:i,a0:s,a1:o,face:a=1,h:c=.16,y:l=0,pitch:h=.12,col:r=[3,.05,.08],s:u=0}){const f=Math.abs(o-s),d=(s+o)/2;e==="z"?n.box(.22,c,f,i,l+c/2,d,wt.metalD,u):n.box(f,c,.22,d,l+c/2,i,wt.metalD,u);const v=Math.min(s,o);for(let g=0;v+g*h<v+f;g++){const m=v+(g+.5)*h;e==="z"?t.box(.03,.05,.06,i+a*.115,l+c*.55,m,r,u):t.box(.06,.05,.03,m,l+c*.55,i+a*.115,r,u)}e==="z"?t.box(.5,.004,f,i+a*.45,.012,d,fs(r,.09),u):t.box(f,.004,.5,d,.012,i+a*.45,fs(r,.09),u)}function fb(n,t,e=60){const i=new Sn({color:5790043,roughness:.92,metalness:0,side:Xe,envMapIntensity:.25});return i.onBeforeCompile=s=>{s.uniforms.uHW={value:n},s.uniforms.uS0={value:t},s.uniforms.uLen={value:e},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += dkEm;`)},i.customProgramCacheKey=()=>"concrete-deck",i}function db(n,t,e){const i=ys.merge([de.fog,{uOn:{value:0},uHW:{value:n},uS60:{value:t},uEnd:{value:e}}]);return i.uBeat=zn.uBeat,new $e({uniforms:i,vertexShader:`
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
      }`,fog:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})}const Kd=["models","model3","cybertruck","semi","modelx","modely"],pb={models:1053206,model3:3027256,modelx:1779522,modely:12035717,semi:15659250},$d=2.45,mb=.5,gb=ua||{};function vb(n={}){const t=n.scene||(n.isScene?n:null),e=n.renderer||null;let i=n.camera||null;const s=new an;s.name="world";const o=Hr(1337),a=[],c=[],l=ct=>Math.abs(ct)>1e8?-ct:nn(ct),h=(ct,ft,C)=>{const b=new an;return b.name=ct,s.add(b),c.push({g:b,zHi:l(ft),zLo:l(C)}),b},r={neon:nl({}),neonD:nl({side:Xe}),neonSoft:nl({chase:0,pulse:.15}),metal:Kh(new Sn({vertexColors:!0,metalness:.85,roughness:.38,envMapIntensity:.7}),{key:"m"}),metalD:Kh(new Sn({vertexColors:!0,metalness:.85,roughness:.32,envMapIntensity:1.3,side:Xe}),{accent:[1.6,.15,.9],cell:[3.2,1.6],lit:.04,key:"md"}),matte:Kh(new Sn({vertexColors:!0,metalness:.3,roughness:.7}),{accent:[2,.7,.15],cell:[4,2],lit:.03,seamGlow:0,key:"mt"}),paint:new Di({vertexColors:!0,metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6}),glass:new Sn({color:329226,metalness:1,roughness:.06,envMapIntensity:1.8}),deck:new Di({vertexColors:!0,metalness:.65,roughness:.24,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),roadF:Vd(!1),roadO:Vd(!0),bld:rb()};a.push(...Object.values(r));const u=ob(),f={lineup:[],rows:[]},d=[],v=[],g=[];let m=null;const p=cb(e);p&&a.push(p);const y={mat:null,beams:[],s60:10.9};r.steel=new Sn({vertexColors:!0,metalness:.75,roughness:.42,envMapIntensity:.9}),r.lamp=nl({chase:0,pulse:0,side:Xe}),a.push(r.steel,r.lamp);const M=lb(),_=new Map;function D(ct,ft,C,b=16052991,W=1){if(!M)return null;const Z=b+":"+W;let tt=_.get(Z);tt||(tt=new ja({map:M,color:new Vt(b).multiplyScalar(W),blending:An,transparent:!0,depthWrite:!1,fog:!0}),_.set(Z,tt),a.push(tt));const Y=new pl(tt);return Y.position.copy(ft),Y.scale.set(C,C,1),ct.add(Y),Y}t&&(t.background=Ua.clone(),t.fog=new wf(Ua.clone(),Yh));const I=ab(e);t&&I&&!t.environment&&(t.environment=I);const P={uFlight:zn.uFlight,uTime:zn.uTime,uBeat:zn.uBeat,uFog:{value:Ua.clone()},uSunDir:{value:new L(0,.1,-1).normalize()}},F=new ye(new aa(10,48,24),new $e({uniforms:P,depthWrite:!1,depthTest:!0,side:Qn,fog:!1,vertexShader:`
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
      }`}));F.frustumCulled=!1,F.renderOrder=-1e3,F.name="sky",s.add(F);const R=new sM(8019199,1181724,.3);s.add(R);const x=new cM(11570431,.35);x.position.set(-30,60,20),s.add(x);const z=new gm(16777215,300,40,.55,.6,1.6);z.position.set(0,12,1),z.target.position.set(0,0,0),s.add(z,z.target);const G=nn(Bt.end)-900,st=400,vt=st-G,Rt={name:"WetGround",uniforms:{color:{value:new Vt(16777215)},tDiffuse:{value:null},textureMatrix:{value:null},fogColor:{value:Ua.clone()},fogDensity:{value:Yh},uBeat:zn.uBeat,uTime:zn.uTime,uRegions:{value:new Qe(Bt.hangarBack,Bt.door,nn(Bt.boost1-40),nn(Bt.end))},uLat:{value:Ve}},vertexShader:`
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
      }`};let mt=null;try{const ct=e&&e.getSize?e.getSize(new Kt):new Kt(540,960),ft=e&&e.getPixelRatio?e.getPixelRatio():1;mt=new $l(new Mn(2400,vt),{textureWidth:Math.max(256,Math.round(ct.x*ft*.5)),textureHeight:Math.max(256,Math.round(ct.y*ft*.5)),clipBias:.003,shader:Rt,multisample:0}),mt.rotation.x=-Math.PI/2,mt.position.set(0,0,(st+G)/2),mt.name="wetGround",s.add(mt)}catch(ct){console.warn("[world] reflector failed, using plain ground",ct);const ft=new ye(new Mn(2400,vt),new Sn({color:328713,metalness:.9,roughness:.25}));ft.rotation.x=-Math.PI/2,ft.position.set(0,0,(st+G)/2),s.add(ft)}{const ct=h("road",-1e9,1e9),ft=[[Bt.roadStart,Bt.flip0+.01],[Bt.flipLip,Bt.takeoff],[Bt.landStrip,Bt.end]];for(const[C,b]of ft){const W=Vi(Xd(C,b),tt=>{const Y=Xa(tt);return[[-Y,.03],[Y,.03]]},{hw:!0}),Z=new ye(W,r.roadF);Z.renderOrder=2,ct.add(Z)}}{const ct=h("walls",-1e9,1e9),ft=new Ne,C=new Ne;[[Bt.door,Bt.ramp.s0-34],[Bt.landingS+26,Bt.flip0-2],[Bt.flipLip+84,Bt.takeoff-2],[Bt.landStrip+20,Bt.end]].forEach(([W,Z],tt)=>{const Y=Xd(W,Z),pt=.95;for(const dt of[-1,1]){ft.add(Vi(Y,Mt=>{const N=Xa(Mt)+.35;return[[dt*N,0],[dt*N,pt],[dt*(N+.4),pt],[dt*(N+.4),0]]}),null,wt.metal);const lt=dt<0?wt.cyan:wt.mag;C.add(Vi(Y,Mt=>{const N=Xa(Mt)+.3;return[[dt*N,pt+.02],[dt*(N+.5),pt+.02]]}),null,lt),C.add(Vi(Y,Mt=>{const N=Xa(Mt)+.33;return[[dt*N,pt*.45],[dt*N,pt*.55]]}),null,fs(lt,.6))}}),ct.add(ft.mesh(r.metalD)),ct.add(C.mesh(r.neonD))}const It={strips:[],door:[],tree:[]};{const ct=h("hangar",Bt.hangarBack-20,Bt.door+60),ft=new Ne,C=new Ne,b=new Ne,W=18,Z=13,tt=-Bt.hangarBack,Y=-Bt.door;ft.box(.8,Z,tt-Y,-W,Z/2,(tt+Y)/2,wt.metalD),ft.box(.8,Z,tt-Y,W,Z/2,(tt+Y)/2,wt.metalD),ft.box(W*2,.8,tt-Y,0,Z,(tt+Y)/2,wt.metalD),ft.box(W*2,Z,.8,0,Z/2,tt,wt.metalD),ft.box(5,Z,1.2,-W+2.5,Z/2,Y,wt.metal),ft.box(5,Z,1.2,W-2.5,Z/2,Y,wt.metal),ft.box(W*2,Z-10.5,1.2,0,10.5+(Z-10.5)/2,Y,wt.metal);let pt=0;for(let N=tt-4;N>Y+2;N-=6,pt++){for(const J of[-1,1])ft.box(1,Z-3,1.4,J*(W-.9),(Z-3)/2,N,wt.metal),ft.box(1,4.6,1.4,J*(W-2.3),Z-1.6,N,wt.metal,-N,-1e3,0,0,J*Math.PI/4),C.box(.12,Z-4,.14,J*(W-1.45),(Z-4)/2+.3,N,wt.cyanW,-N,1+pt*.5),C.box(.12,3.6,.14,J*(W-2.75),Z-2.1,N,wt.cyanW,-N,1+pt*.5,0,0,J*Math.PI/4);ft.box(W*2-6,1,1.4,0,Z-.5,N,wt.metal);for(const J of[-1,1]){ft.box(.3,9,4.4,J*(W-.55),5,N-3,[.02,.02,.026]);{for(const Tt of[-.9,.9])C.box(.08,6.4,.16,J*(W-.72),4.8,N-3+Tt,pt%2?[.6,.9,2]:[.25,1.1,2],-N,1+pt*.5);ft.box(.1,6.8,1.5,J*(W-.62),4.8,N-3,[.012,.012,.018]);for(let Tt=0;Tt<4;Tt++)C.box(.08,.06,1.3,J*(W-.72),1.3+Tt*.25,N-3+(Tt%2?1.4:-1.4),Tt%2?wt.cyan:wt.mag,-N,3+pt*.5);for(let Tt=0;Tt<7;Tt++)ft.box(.1,.05,1.3,J*(W-.66),1.9+Tt*.95,N-3,wt.metalD)}C.box(.1,.18,3.6,J*(W-.75),1.4,N-3,wt.mag,-N,8),C.box(.1,.18,3.6,J*(W-.75),8.2,N-3,wt.mag,-N,8)}}{const N=Z-2,J=tt-Y;for(const Xt of[-10.5,-4,4,10.5]){ft.box(.3,.3,J-2,Xt,N,(tt+Y)/2,wt.metalL),ft.box(.3,.3,J-2,Xt,N+1.4,(tt+Y)/2,wt.metalL);for(let U=tt-2;U>Y+2;U-=2.4)ft.box(.12,1.65,.12,Xt,N+.7,U-.6,wt.metal,-U,-1e3,Math.round(U)%2?.7:-.7,0,0)}for(let Xt=tt-2;Xt>Y+2;Xt-=6)ft.box(22,.22,.22,0,N,Xt,wt.metalL);const Tt=8,Dt=new Ne,ht=new Ne;ei(Dt,Tt,6.8,.45,.6,0,0,0,wt.metal,0),ei(ht,Tt,6.45,.08,.1,0,0,-.32,wt.cyanW,0,2),ei(ht,Tt,7.15,.06,.1,0,0,-.32,wt.mag,0,4);const zt=Dt.mesh(r.metal),Gt=ht.mesh(r.neon);for(const Xt of[zt,Gt])Xt.rotation.x=-Math.PI/2,Xt.position.set(0,8.6,0),ct.add(Xt);for(let Xt=0;Xt<8;Xt++){const U=Xt/8*Math.PI*2+Math.PI/8;ft.box(.06,Z-8.6,.06,Math.cos(U)*6.6,(Z+8.6)/2,Math.sin(U)*6.6,wt.metalL)}for(let Xt=0;Xt<8;Xt++){const U=Xt/8*Math.PI*2+Math.PI/8,et=Math.cos(U)*12.5,it=Math.sin(U)*12.5;Math.abs(et)<6||(C.box(.12,5.5,.12,et,2.9,it,Xt%2?wt.cyanW:wt.mag,0,6+Xt),ft.box(.6,.3,.6,et,.15,it,wt.metalL))}}ct.add(ft.mesh(r.metal));const dt=new rn(W*2-7,.16,.6);for(let N=0;N<15;N++){const J=tt-2-N*((tt-Y-4)/14),Tt=new Ke({color:0,fog:!0}),Dt=new ye(dt,Tt);Dt.position.set(0,Z-1.2,J),ct.add(Dt),It.strips.push({m:Dt,mat:Tt,on:[0,2,4,6][Math.min(3,Math.floor(N*4/15))]})}{const N=new un(5.6,5.8,.14,96,1,!0);b.add(N,ji.makeTranslation(0,.07,0),[.03,.03,.04]);const J=new _a(4.9,5.6,96,1);J.rotateX(-Math.PI/2),b.add(J,ji.makeTranslation(0,.14,0),[.05,.05,.065]);for(let Tt=0;Tt<48;Tt++){const Dt=Tt/48*Math.PI*2;b.box(.06,.03,.7,Math.cos(Dt)*5.25,.16,Math.sin(Dt)*5.25,wt.metalL,0,-1e3,0,-Dt+Math.PI/2,0)}}ct.add(b.mesh(r.metal));{const N=new ye(new Mn(14,14),new $e({uniforms:{uBeat:zn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
          void main(){ float r = length(vUv - 0.5)*2.0;
            float ring = exp(-pow((r - 0.62)*14.0, 2.0)) * 0.35 + exp(-pow((r - 0.42)*30.0, 2.0)) * 0.18;
            float a = exp(-r*r*3.0)*0.045 + ring * (0.7 + 0.5*exp(-fract(uBeat)*4.0));
            gl_FragColor = vec4(vec3(0.15,0.7,1.6)*a, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,transparent:!0,blending:An,depthWrite:!1}));N.rotation.x=-Math.PI/2,N.position.y=.02,N.renderOrder=3,ct.add(N),a.push(N.material)}const lt=new Ne;lt.add(new Ds(5.3,.06,6,96),ji.makeRotationX(Math.PI/2).setPosition(0,.15,0),wt.cyanW,0,0),lt.add(new Ds(3.6,.035,6,96),ji.makeRotationX(Math.PI/2).setPosition(0,.15,0),wt.cyan,0,2);for(let N=0;N<24;N++){const J=N/24*Math.PI*2;lt.box(.5,.04,.08,Math.cos(J)*4.5,.15,Math.sin(J)*4.5,wt.cyan,0,4+N*.1,0,-J,0)}for(const N of[-1,1])for(let J=0;J<9;J++)lt.box(.14,.05,1.6,N*7.5,.05,-6-J*3.2,wt.wht,6+J*3.2,6+J*.5);ct.add(lt.mesh(r.neonSoft));{const N=new Ne,J=new Ne;ei(N,12,6.4,.5,.5,0,0,0,wt.metal,0);const Tt=N.mesh(r.metal);Tt.rotation.x=Math.PI/2,Tt.position.y=8.2,ct.add(Tt),ei(J,12,6.05,.1,.12,0,0,0,wt.wht,0,0),ei(J,12,6.75,.08,.12,0,0,0,wt.mag,0,4);for(let zt=0;zt<12;zt++){const Gt=(zt+.5)/12*Math.PI*2;J.box(.42,.42,.2,Math.cos(Gt)*6.4,Math.sin(Gt)*6.4,.38,wt.wht,0,zt*.5)}const Dt=J.mesh(r.neonSoft);Dt.rotation.x=Math.PI/2,Dt.position.y=8.2,ct.add(Dt);const ht=new Ne;for(const zt of[-1,1])ht.box(.12,4.9,.12,zt*6.4,10.65,0,wt.metalL);ct.add(ht.mesh(r.metal))}for(let N=0;N<6;N++)C.box(26-N*3,.12,.1,0,2+N*1.6,tt-.5,N%2?wt.mag:wt.cyan,-tt,2+N);for(const N of[-1,1])C.box(.25,8,.1,N*4.5,6.5,tt-.5,wt.org,-tt,9,0,0,N*.5);if(ct.add(C.mesh(r.neonD)),u)for(const[N,J]of[[-1,2],[1,5]]){const Tt=jh(u,J,8,1,1.6);Tt.position.set(N*(W-.7),10,6),Tt.rotation.y=-N*Math.PI/2,ct.add(Tt)}for(const N of[-1,1]){const J=new an,Tt=new Ne,Dt=new Ne;Tt.box(13,10.5,.7,0,5.25,0,wt.metal);for(let ht=0;ht<5;ht++)Tt.box(12.6,.12,.8,0,1+ht*2.1,0,wt.metalL);Dt.box(.16,10.2,.8,-N*6.4,5.2,0,wt.red,0,0);for(let ht=0;ht<4;ht++)Dt.box(1.6,.18,.8,-N*(4.5-ht*1.2),5.2+(ht%2?1:-1)*0+ht*0,0,wt.org,0,0,0,0,N*.6);J.add(Tt.mesh(r.metal)),J.add(Dt.mesh(r.neonSoft)),J.position.set(N*6.5,0,Y-.1),ct.add(J),It.door.push({g:J,sd:N})}const Mt=new aa(.2,16,10);for(const N of[-1,1]){const J=new Ne;J.box(.18,4.2,.18,N*9.5,2.1,-14,wt.metalL),J.box(1.2,3.2,.3,N*9.5,3,-14,wt.metalD),ct.add(J.mesh(r.metal));const Tt=[["pre",4.2,wt.wht],["a1",3.6,wt.amber],["a2",3,wt.amber],["a3",2.4,wt.amber],["go",1.8,wt.green]];for(const[Dt,ht,zt]of Tt)for(const Gt of[-.3,.3]){const Xt=new Ke({color:0}),U=new ye(Mt,Xt);U.position.set(N*9.5+Gt,ht,-13.82),ct.add(U),It.tree.push({mat:Xt,id:Dt,col:new Vt(zt[0],zt[1],zt[2])})}}}{const ct=h("strip",Bt.door-50,Bt.flip0+60),ft=new Ne,C=new Ne,b=Bt.ramp.s0-50,W=Bt.landingS+30;let Z=0;for(let Y=60;Y<Bt.flip0-190;Y+=42,Z++){if(Y>b&&Y<W)continue;const pt=-Y,dt=11.5,lt=10.5,Mt=Z%3===0;for(const J of[-1,1])ft.box(1.1,lt,1.1,J*dt,lt/2,pt,wt.metal),ft.box(1.6,.6,1.6,J*dt,.3,pt,wt.metalD),C.box(.12,lt-1,.12,J*(dt-.62),lt/2,pt+.4,wt.cyan,Y);ft.box(dt*2+1,1.2,1.4,0,lt,pt,wt.metal);const N=Mt?wt.org:wt.mag;for(let J=-4;J<=4;J++)C.box(1.6,.12,.9,J*2.4,lt-.66,pt,N,Y);C.box(dt*2,.12,.12,0,lt+.66,pt+.72,wt.cyanW,Y),Mt&&ei(C,6,15.5,.35,.35,0,13.4,pt,wt.vio,Y,-1e3)}for(let Y=40;Y<Bt.flip0-150;Y+=26)if(!(Y>Bt.ramp.s0-40&&Y<Bt.landingS+26))for(const pt of[-1,1]){const dt=pt*10.6;ft.box(.22,7.5,.22,dt,3.75,-Y,wt.metalL),ft.box(2.4,.18,.4,dt-pt*1.1,7.5,-Y,wt.metalL),C.box(1.8,.08,.3,dt-pt*1.2,7.38,-Y,wt.warm,Y)}let tt=0;for(let Y=140;Y<Bt.flip0-160;Y+=115,tt++){if(Y>Bt.ramp.s0-60&&Y<Bt.landingS+40)continue;const pt=tt%2?1:-1,dt=pt*24,lt=-Y;if(ft.box(.6,14,.6,dt-5,7,lt,wt.metalD),ft.box(.6,14,.6,dt+5,7,lt,wt.metalD),u){const Mt=jh(u,[0,1,2,3,4,6][tt%6],16,4,2.4);Mt.position.set(dt,16,lt),Mt.rotation.y=pt*.35,ct.add(Mt)}C.box(16.6,.15,.2,dt,13.9,lt,wt.wht,Y),C.box(16.6,.15,.2,dt,18.1,lt,wt.wht,Y)}{const pt=Math.min(yn.dragStrip.s1+40,Bt.ramp.s0-30),dt=4.3,lt=mi&&isFinite(mi.zero60)?Hm(mi.zero60):10.9,Mt=db(dt,lt,pt);a.push(Mt),y.mat=Mt;const N=Vi($h(-3,pt,2),()=>[[-dt,.045],[dt,.045]]),J=new ye(N,Mt);J.renderOrder=3,ct.add(J);const Tt=new Ne;for(const Dt of[0,lt])for(const ht of[-1,1])Tt.box(.16,.9,.16,ht*3.75,.45,-Dt,wt.metalD),Tt.box(.24,.22,.2,ht*3.75,.85,-Dt,wt.metalD),Tt.box(.5,.06,.5,ht*3.75,.03,-Dt,wt.metalL);ct.add(Tt.mesh(r.metal));for(const[Dt,ht]of[[0,0],[lt,1]]){const zt=new Ke({color:0,transparent:!0,blending:An,depthWrite:!1,fog:!0});a.push(zt);const Gt=new ye(new rn(7.3,.025,.025),zt);Gt.position.set(0,.85,-Dt),ct.add(Gt);for(const Xt of[-1,1]){const U=new ye(new rn(.03,.08,.08),zt);U.position.set(Xt*3.63,.85,-Dt),ct.add(U)}y.beams.push({mat:zt,k:ht})}y.s60=lt;{const Dt=new Ne,ht=new Ne,zt=-Math.max(lt+9,60),Gt=5.3,Xt=4.6,U=5.3,et=.7,it=[.07,.07,.08],gt=[.12,.12,.13],Lt=(Ut,jt,pe)=>new L(Ut,jt,pe);for(const Ut of[-1,1]){const jt=Ut*Gt;for(const pe of[-.35,.35])for(const Ae of[-et/2,et/2])Dt.box(.1,U,.1,jt+pe,U/2,zt+Ae,gt);for(let pe=.6,Ae=0;pe<U;pe+=.9,Ae++)Dt.box(.8,.06,.06,jt,pe,zt-et/2,it),Dt.box(.8,.06,.06,jt,pe,zt+et/2,it),Dt.box(.06,.06,et,jt-.35,pe,zt,it),Dt.box(.06,.06,et,jt+.35,pe,zt,it),jn(Dt,Lt(jt-.35,pe,zt+et/2),Lt(jt+.35,Math.min(U,pe+.9),zt+et/2),.045,it),jn(Dt,Lt(jt+.35,pe,zt-et/2),Lt(jt-.35,Math.min(U,pe+.9),zt-et/2),.045,it);Dt.box(1.3,.16,1.3,jt,.08,zt,wt.metalD);for(let pe=.5;pe<U-.2;pe+=.55)ht.box(.05,.05,.05,jt-Ut*.42,pe,zt+et/2+.03,[3,.05,.08],lt)}for(const Ut of[Xt,U])for(const jt of[-et/2,et/2])Dt.box(Gt*2+.8,.1,.1,0,Ut,zt+jt,gt);for(let Ut=-Gt+.4,jt=0;Ut<Gt-.4;Ut+=.7,jt++){for(const pe of[-et/2,et/2])jn(Dt,Lt(Ut,jt%2?Xt:U,zt+pe),Lt(Ut+.7,jt%2?U:Xt,zt+pe),.045,it);Dt.box(.05,.05,et,Ut,Xt,zt,it),Dt.box(.05,.05,et,Ut,U,zt,it)}for(const Ut of[-3.2,-1.1,1.1,3.2])Dt.box(.42,.34,.36,Ut,Xt-.3,zt+.2,wt.metalD),ht.box(.32,.24,.03,Ut,Xt-.32,zt+.39,[2.6,2.55,2.4],lt);ht.box(Gt*2-1.2,.05,.05,0,Xt-.06,zt+et/2+.04,[3,.05,.08],lt),Dt.box(Gt*2-.4,2.7,.22,0,U+1.45,zt,[.02,.02,.024]),ht.box(Gt*2-.8,2.35,.02,0,U+1.45,zt+.125,[.035,.045,.075],lt);for(const Ut of[U+.12,U+2.78])Dt.box(Gt*2-.3,.08,.26,0,Ut,zt,gt);for(let Ut=-Gt+.6;Ut<Gt-.5;Ut+=.9)ht.box(.05,.05,.03,Ut,U+2.86,zt+.14,[3,.05,.08],lt);for(const Ut of[-1,1])ht.box(.06,2.3,.03,Ut*(Gt-.38),U+1.45,zt+.14,[1.2,1.2,1.25],lt);ct.add(Dt.mesh(r.steel)),ct.add(ht.mesh(r.lamp))}}nt(ct,Bt.ramp.s0,Bt.ramp.s1,Bt.ramp.height,0,Y=>-Y),ct.add(ft.mesh(r.metal)),ct.add(C.mesh(r.neon)),fe(ct)}function nt(ct,ft,C,b,W,Z,tt=1.6){const Y=new Ne,pt=new Ne,dt=new Ne,lt=$h(ft,C,.5),Mt=ht=>Hd(ht)+.02,N=[3,.05,.08],J=Vi(lt,ht=>{const zt=Mt(ht);return[[-tt,0],[-tt,zt],[tt,zt],[tt,0]]}),Tt=J.attributes.position;for(let ht=0;ht<Tt.count;ht++){const zt=J.attributes.uv.getY(ht),Gt=ht%4;Tt.setY(ht,Gt===0||Gt===3?0:Mt(zt))}J.computeVertexNormals(),Y.add(J,null,[.035,.036,.042]),Y.box(tt*2,b,.3,W,b/2,Z(C)-.12,[.03,.03,.036]);const Dt=ht=>Math.atan2(2*b*(ht-ft)/(C-ft)**2,1);for(let ht=ft+1.2;ht<C-.3;ht+=1.2)pt.box(tt*2-.1,.012,.05,W,Mt(ht)+.006,Z(ht),[.11,.11,.12],ht,-1e3,Dt(ht),0,0);for(const ht of[-1,1]){pt.add(Vi(lt,Xt=>[[ht*(tt-.08),0],[ht*(tt-.08),.06],[ht*(tt+.06),.06],[ht*(tt+.06),0]]),null,[.09,.09,.1]),dt.add(Vi(lt,()=>[[ht*(tt-.02),.075],[ht*(tt+.04),.075]]),null,N);const zt=W+ht*(tt+.07);let Gt=null;for(let Xt=ft+2;Xt<=C+.01;Xt+=1.5){const U=Mt(Math.min(Xt,C));U<.12||(pt.box(.1,U,.12,zt,U/2,Z(Xt),[.08,.08,.09]),Gt&&jn(pt,new L(zt,.05,Z(Gt.s)),new L(zt,U-.05,Z(Xt)),.05,[.07,.07,.08]),Gt={s:Xt,h:U})}dt.add(Vi(lt.filter(Xt=>Mt(Xt)>.35),Xt=>[[ht*(tt+.13),-Mt(Xt)*.5+.03],[ht*(tt+.13),-Mt(Xt)*.5-.03]]),null,fs(N,.8)),dt.add(Vi(lt,Xt=>[[ht*(tt+.4),.02-Mt(Xt)+.02],[ht*(tt+.9),.02-Mt(Xt)+.02]]),null,fs(N,.07)),pt.box(.16,b+.04,.16,W+ht*(tt-.05),(b+.04)/2,Z(C)-.1,[.1,.1,.11])}pt.box(tt*2+.12,.08,.14,W,b+.03,Z(C)-.05,[.14,.14,.15]),dt.box(tt*2-.2,.05,.04,W,b-.12,Z(C)-.29,N,C),ct.add(Y.mesh(r.deck)),ct.add(pt.mesh(r.steel)),ct.add(dt.mesh(r.lamp))}function kt(ct,ft,C,b,{rail2:W=!0,showLights:Z=!0,extent:tt=null}={}){const Y=new Ne,pt=new Ne,dt=Kd.filter(et=>ft.some(it=>it.kind===et)).concat(ft.map(et=>et.kind).filter(et=>!Kd.includes(et))),lt=et=>ft.find(it=>it.kind===et)||gb[et],Mt=Math.max(0,dt.indexOf("semi")),N=[];{let et=0;dt.forEach(gt=>{const Lt=lt(gt).width;N.push(et+Lt/2),et+=Lt+mb});const it=C-N[Mt];for(let gt=0;gt<N.length;gt++)N[gt]+=it}let J=N[0]-lt(dt[0]).width/2,Tt=N[N.length-1]+lt(dt[dt.length-1]).width/2;if(tt){const et=Math.max(tt[0]-J,Math.min(0,tt[1]-Tt));for(let it=0;it<N.length;it++)N[it]+=et;J+=et,Tt+=et}const Dt=nn(J-1),ht=nn(Tt+1),zt=nn(C),Gt=b+$d,Xt=[],U=[];dt.forEach((et,it)=>{const gt=lt(et),Lt=kd(et,{color:pb[et],envMap:p||void 0}),Ut=Lt.userData&&Lt.userData.length||gt.length,jt=Gt-Ut/2+(et==="semi"?-.25:0);Lt.position.set(jt,0,nn(N[it])),Lt.rotation.y=-Math.PI/2,Lt.userData.stageS=N[it],ct.add(Lt),Xt.push(Lt),U.push([jt,nn(N[it]),gt.width+.8,Ut+.8])});{const et=[4.2,.06,.1],it=Dt+5,gt=ht-5,Lt=it-gt,Ut=(it+gt)/2,jt=Gt+.95;Y.box(.22,.15,Lt,jt,.075,Ut,[.02,.02,.025]),pt.box(.03,.13,Lt,jt+.115,.078,Ut,fs(et,1.3),J),pt.box(.2,.012,Lt,jt,.155,Ut,fs(et,.7),J),pt.box(2.2,.004,Lt,jt+1.25,.008,Ut,fs(et,.1),J),pt.box(1.1,.004,Lt,jt-.7,.008,Ut,fs(et,.05),J),W&&Jh(Y,pt,{axis:"z",at:b-5.6,a0:Dt+22,a1:ht-16,face:1,h:.12,s:J})}{const et=No(new Vt(.95,.97,1.05),.075);a.push(et);const it=[[b-19,zt+10,19,.62],[b-19,zt-10,19,.62],[b-16,zt,23,.8]];for(const[gt,Lt,Ut,jt]of it){const pe=Math.atan2(Gt-1.5-gt,zt-Lt)*.35+Math.PI/2*.65,Ae=il(Y,pt,{x:gt,y:Ut,z:Lt,cols:4,rows:2,yaw:pe,pitch:jt,s:J,mast:1});D(ct,Ae,5.5,16054271,.9),D(ct,Ae,18,11062527,.1);const Te=new L(b+.2,0,Lt*.6+zt*.4),tn=new L().subVectors(Te,Ae),Ct=tn.length();tn.normalize();const Zt=new ye(new un(.9,6.5,Ct,24,1,!0).translate(0,-Ct/2,0),et);Zt.position.copy(Ae),Zt.quaternion.setFromUnitVectors(new L(0,-1,0),tn),ct.add(Zt)}if(Z)for(let gt=0;gt<9;gt++){const Lt=Dt+3.5+gt*1.3,Ut=b-4.6;Y.box(.06,1,.06,Ut,.5,Lt,wt.metalL),Y.box(.5,.05,.5,Ut,.03,Lt,wt.metalD);const jt=il(Y,pt,{x:Ut,y:1.2,z:Lt,cols:1,rows:1,size:.34,yaw:Math.PI/2,pitch:-.08,s:J});D(ct,jt,1.6,16777215,.8)}}for(const et of[Y.mesh(r.steel),pt.mesh(r.lamp)])et&&ct.add(et);{const et=se(),it=new Mn(1,1);it.rotateX(-Math.PI/2);for(const[gt,Lt,Ut,jt]of U){const pe=new ye(it,et);pe.position.set(gt,.12,Lt),pe.scale.set(jt+2.5,1,Ut+2.5),pe.renderOrder=3,ct.add(pe)}}return v.push({z:zt,x:b}),{vehicles:Xt,s0:J,s1:Tt}}function se(){return m||(m=new $e({uniforms:{uBeat:zn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q);
          float a = exp(-r*r*2.2)*0.08 + exp(-pow((r-0.86)*9.0,2.0))*0.025;
          gl_FragColor = vec4(vec3(1.0,0.96,1.05)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:An,depthWrite:!1}),a.push(m),m)}function fe(ct){const ft=kt(ct,yn.fleet.lineup,yn.fleet.sCenter,0);f.lineup.push(...ft.vehicles);for(const[C,b,W,Z]of[[9,5.5,16774386,420],[-6,13,15660287,700]]){const tt=new ld(W,Z,45,1.6);tt.position.set(C,b,-yn.fleet.sCenter),s.add(tt),d.push({l:tt,k:Z}),g.push({l:tt,dx:C})}}{const C=nn(Bt.end+200),b=nn(Bt.flip0),W=170,Z=nn(Bt.fleet.sCenter),tt=Hr(4711);for(let Y=220;Y>C;Y-=420){const pt=[],dt=[{x0:44,x1:70,h0:16,h1:70,tall:.18,d0:12,d1:26},{x0:80,x1:170,h0:40,h1:170,tall:.25,d0:18,d1:34},{x0:190,x1:420,h0:70,h1:300,tall:.3,d0:24,d1:50},{x0:450,x1:800,h0:90,h1:380,tall:.3,d0:30,d1:70}],lt=Y<nn(Bt.cityEnd);for(const Tt of[-1,1])for(const[Dt,ht]of dt.entries()){if(lt&&Dt===0)continue;let zt=Y;for(;zt>Y-420;){const Gt=ht.d0+o()*(ht.d1-ht.d0),Xt=3+o()*10*(Dt+1),U=zt-Gt/2;zt-=Gt+Xt;const et=Math.abs(U-b)<W;let it=Tt*(ht.x0+o()*(ht.x1-ht.x0));et&&Tt>0&&it<110&&(it=110+o()*60);const gt=Math.abs(U-Z)<170&&Tt<0;if(gt&&it>-260&&(it=-(260+tt()*120)),U>-Bt.hangarBack+30&&Math.abs(it)<60)continue;let Lt=ht.h0+Math.pow(o(),1.6)*(ht.h1-ht.h0);o()<ht.tall&&(Lt*=1.5);const Ut=ht.d0+o()*(ht.d1-ht.d0),jt=Math.floor(o()*4),pe=.25+o()*.45,Ae=Math.floor(o()*4),Te=gt?Math.min(Lt,16+Lt*.1):Lt;if(pt.push([it,U,Ut,Te,Gt,o(),jt,pe,Ae]),Lt>80&&o()<.7){const tn=.55+o()*.25,Ct=[it,U,Ut*tn,Lt*(.22+o()*.3),Gt*tn,o(),jt,pe,(Ae+1)%4,Lt];gt||pt.push(Ct)}}}const Mt=new qu(new rn(1,1,1).translate(0,.5,0),r.bld,pt.length),N=new Float32Array(pt.length*4);pt.forEach(([Tt,Dt,ht,zt,Gt,Xt,U,et,it,gt=0],Lt)=>{ji.compose(Jl.set(Tt,gt,Dt),kl.identity(),Ff.set(ht,zt,Gt)),Mt.setMatrixAt(Lt,ji),N.set([Xt,U,et,it],Lt*4)}),Mt.geometry.setAttribute("aB",new vs(N,4)),Mt.computeBoundingSphere(),h("city",-Y-300,-Y+420+300).add(Mt)}}const le=[];{const ct=h("highways",-1e9,1e9),ft=180,C=nn(Bt.cityEnd)+50,b=ft-C,W=nn(Bt.flip0),Z=new Ne,tt=new Ne;for(const Gt of[-1,1]){const Xt=Gt*64,U=15,et=nn(Bt.fleet.sCenter),it=Gt>0?[[ft,W+160],[W-160,C]]:[[ft,et+140],[et-140,C]];for(const[gt,Lt]of it){const Ut=gt-Lt,jt=(gt+Lt)/2;Z.box(12,1,Ut,Xt,U,jt,wt.conc,-jt),Z.box(.4,1,Ut,Xt-6,U+.9,jt,wt.conc,-jt),Z.box(.4,1,Ut,Xt+6,U+.9,jt,wt.conc,-jt),tt.box(.12,.12,Ut,Xt-6,U+1.45,jt,wt.org,-jt),tt.box(.12,.12,Ut,Xt+6,U+1.45,jt,wt.org,-jt),tt.box(.1,.1,Ut,Xt-6.1,U-.55,jt,wt.vio,-jt),tt.box(.1,.1,Ut,Xt+6.1,U-.55,jt,wt.vio,-jt);for(let pe=gt-20;pe>Lt;pe-=48)Z.box(2.2,U,2.2,Xt,U/2,pe,wt.conc),tt.box(2.3,.15,2.3,Xt,4,pe,wt.vio,-pe)}}ct.add(Z.mesh(r.matte)),ct.add(tt.mesh(r.neonSoft));const Y=150,pt=new rn(1.9,.35,1.2),dt=new Ke({color:16777215,fog:!0}),lt=new qu(pt,dt,Y*4),Mt=new Vt(2.2,1.9,1.5),N=new Vt(2.6,.1,.12);let J=0;for(const Gt of[-1,1])for(const Xt of[-1,1]){const U=Hr(Gt*7+Xt*3+20);for(let et=0;et<Y;et++,J++)le.push({i:J,x:Gt*64+Xt*2.6,y:16,z0:U()*b,v:26+U()*14,dir:Xt,zA:ft,len:b,skip:Gt>0,gap:Gt>0?[W-160,W+160]:[nn(Bt.fleet.sCenter)-140,nn(Bt.fleet.sCenter)+140]}),lt.setColorAt(J,Xt>0?Mt:N)}lt.frustumCulled=!1,ct.add(lt),le.mesh=lt;const Tt=No(new Vt(.6,.7,1.4),.1);a.push(Tt);const Dt=No(new Vt(1.4,.3,1),.1);a.push(Dt);const ht=new un(.6,9,520,20,1,!0).translate(0,260,0);le.beams=[];const zt=Hr(99);for(let Gt=0;Gt<12;Gt++){const Xt=120+Gt*(Bt.cityEnd-200)/12,U=Gt%2?1:-1,et=new ye(ht,Gt%3?Tt:Dt);et.position.set(U*(110+zt()*160),0,nn(Xt)),et.userData.ph=zt()*6.28,et.userData.sd=U,et.frustumCulled=!1,ct.add(et),le.beams.push(et)}}const ut={lasers:[]},$=new an;$.name="flipRamp";{const ct=h("flip",Bt.flip0-420,Bt.flipLip+300);ct.add($);const ft=new Ne,C=new Ne;let b=0;for(let U=Bt.flip0-330;U<Bt.flip0-110;U+=45,b++){const et=-U;ei(ft,6,14,.9,.9,0,12.1,et,wt.metal,U,-1e3,0,-Math.PI/2),ei(C,6,13.2,.16,.2,0,12.1,et+.5,b%2?wt.mag:wt.vio,U,-1e3,0,-Math.PI/2),ei(C,6,14.8,.1,.2,0,12.1,et+.5,wt.cyan,U,-1e3,0,-Math.PI/2)}const W=sf,Z=$h(Bt.flip0-.5,Bt.flipLip-.002,.25),tt=new Ne,Y=new Ne,pt=fb(W,Bt.flip0,Bt.flipLip-Bt.flip0),dt=new Sn({color:3816513,roughness:.8,metalness:.2,side:Xe});a.push(pt,dt);{const U=Vi(Z,()=>[[-W,.03],[W,.03]]);U.setAttribute("aDk",U.attributes.uv.clone()),$.add(new ye(U,pt)),$.add(new ye(Vi(Z,()=>[[W,0],[W,-.42],[-W,-.42],[-W,0]]),dt))}for(const U of[-1,1])tt.add(Vi(Z,()=>[[U*W,0],[U*W,.1],[U*(W+.1),.1],[U*(W+.1),-.5],[U*(W-.2),-.5]]),null,[.09,.09,.1]);const lt=22,Mt=Bt.flip0+Math.min(2.3,(Bt.flipLip-Bt.flip0)*.08),N=Bt.flipLip-.04,J=[];for(let U=0;U<=lt;U++){const et=Bl(Mt+(N-Mt)*U/lt),it=Math.atan2(et.fwd.y,-et.fwd.z),gt=.7+(1.9+.04*Math.max(0,Li.height-18))*Cs(0,1,it);J.push({th:it,pin:et.pos.clone().addScaledVector(et.up,-.45),pout:et.pos.clone().addScaledVector(et.up,-.45-gt)})}const Tt=[.1,.1,.115],Dt=[.16,.16,.18],ht=(U,et)=>new L(et,U.y,U.z);for(const U of[-1,1]){const et=U*(W-.25);for(let it=0;it<J.length;it++){const gt=J[it];if(jn(tt,ht(gt.pin,et),ht(gt.pout,et),.14,Tt),it+1<J.length){const Lt=J[it+1];jn(tt,ht(gt.pout,et),ht(Lt.pout,et),.26,Dt),jn(tt,ht(gt.pin,et),ht(Lt.pin,et),.16,Tt),jn(tt,it%2?ht(gt.pin,et):ht(gt.pout,et),it%2?ht(Lt.pout,et):ht(Lt.pin,et),.1,Tt)}}}for(let U=0;U<J.length;U++){const et=J[U];if(jn(tt,ht(et.pout,-1.65),ht(et.pout,W-.25),.14,Tt),U%2===0&&U+2<J.length){const it=J[U+2];jn(tt,ht(et.pout,-1.65),ht(it.pout,W-.25),.08,Tt),jn(tt,ht(et.pout,W-.25),ht(it.pout,-1.65),.08,Tt)}}const zt=J.filter((U,et)=>et%2===0&&U.pout.y>1.5&&U.th>.55);for(const U of[-1,1]){const et=U*(W-.25);zt.forEach((Lt,Ut)=>{jn(tt,ht(Lt.pout,et),new L(et,0,Lt.pout.z),.22,Dt),tt.box(.7,.2,.7,et,.1,Lt.pout.z,wt.metalD);const jt=zt[Ut+1];if(!jt)return;const pe=Math.min(Lt.pout.y,jt.pout.y);for(let Ae=2.5,Te=0;Ae<pe-.5;Ae+=3,Te++){jn(tt,new L(et,Ae,Lt.pout.z),new L(et,Ae,jt.pout.z),.1,Tt);const tn=Math.min(pe,Ae+3);jn(tt,new L(et,Te%2?Ae:tn,Lt.pout.z),new L(et,Te%2?tn:Ae,jt.pout.z),.07,Tt)}});const it=J[J.length-1],gt=J[Math.round(lt*.72)];jn(tt,ht(it.pout,et),new L(et,0,it.pout.z-7.5),.24,Dt),jn(tt,ht(gt.pout,et),new L(et,0,gt.pout.z-6),.2,Dt),tt.box(.8,.2,.8,et,.1,it.pout.z-7.5,wt.metalD),tt.box(.8,.2,.8,et,.1,gt.pout.z-6,wt.metalD)}for(const U of zt)for(let et=2.5;et<U.pout.y-.5;et+=6)jn(tt,new L(-1.65,et,U.pout.z),new L(W-.25,et,U.pout.z),.1,Tt);{const U=-Bt.flip0-Li.R*.6;for(const[et,it,gt]of[[-24,U+2,22],[-26,U-14,26],[-6,U+46,14]]){const Lt=il(tt,Y,{x:et,y:gt,z:it,cols:4,rows:3,yaw:Math.atan2(-et,U-it),pitch:.5,s:Bt.flip0,mast:1});D(ct,Lt,10,15922943,1),D(ct,Lt,30,10471679,.16)}}const Gt=Li.zLand,Xt=Li.xLand;{const U=[3.6,.05,.09],et=Xt-4.4,it=Gt+16,gt=Math.min(Gt-16,-Bt.flip0+2);tt.box(.2,.13,it-gt,et,.065,(it+gt)/2,[.02,.02,.025]),Y.box(.03,.06,it-gt,et+.105,.075,(it+gt)/2,U,Bt.flip0),Y.box(1.4,.004,it-gt,et+.85,.008,(it+gt)/2,fs(U,.06),Bt.flip0),C.box(.09,.012,46,Xt-1.6,.03,Gt-4,[.32,.32,.34],Bt.flipLip);const Lt=No(new Vt(.95,.97,1.05),.06);a.push(Lt);const Ut=Xt+9,jt=Gt+30,pe=17,Ae=-Bt.flip0-(Li.zLip!==void 0?(-Li.zLip-Bt.flip0)*.5:5),Te=il(tt,Y,{x:Ut,y:pe,z:jt,cols:4,rows:2,yaw:Math.atan2(0-Ut,Ae-jt),pitch:.38,s:Bt.flip0,mast:1});D(ct,Te,6,16054271,.9),D(ct,Te,20,11062527,.1);const tn=new L(1.5,Li.height*.35,Ae),Ct=new L().subVectors(tn,Te),Zt=Ct.length();Ct.normalize();const Pe=new ye(new un(.9,7.5,Zt,24,1,!0).translate(0,-Zt/2,0),Lt);Pe.position.copy(Te),Pe.quaternion.setFromUnitVectors(new L(0,-1,0),Ct),ct.add(Pe)}ct.add(tt.mesh(r.steel)),ct.add(Y.mesh(r.lamp)),ct.add(ft.mesh(r.metalD)),ct.add(C.mesh(r.neonD));for(const[U,et,it,gt]of[[18,26,-Bt.flip0-2,380],[-16,22,-Bt.flip0+10,260],[Xt+6,14,Gt+10,450]]){const Lt=new ld(15922431,gt,70,1.5);Lt.position.set(U,et,it),s.add(Lt),d.push({l:Lt,k:gt})}}{const ct=h("boost",Bt.boost0-200,Bt.takeoff+300),ft=new Ne,C=new Ne;let b=0;for(let Z=Bt.boost0-30;Z<Bt.takeoff;Z+=16,b++){const tt=nn(Z),Y=(Z-Bt.boost0)/(Bt.takeoff-Bt.boost0),pt=88+zo(Y,0,1)*8,dt=4+zo(Y,0,1)*10;for(const lt of[-1,1]){if(lt>0&&Z>Bt.takeoff-150)continue;const Mt=Ve+lt*12;ft.box(1.2,dt,1.2,Mt,dt/2,tt,wt.metal),C.box(.16,dt-.5,.16,Mt-lt*.65,dt/2,tt,qd(wt.blue,wt.cyanW,zo(Y,0,1)),Z,pt),C.box(1.4,.2,1.4,Mt,dt+.1,tt,wt.cyanW,Z,pt)}b%2===0&&ei(C,8,11.5,.14,.2,Ve,9.6,tt,qd(wt.blue,wt.org,zo(Y,0,1)),Z,pt)}const W=nn(Bt.takeoff);for(let Z=0;Z<8;Z++)C.box(19,.05,.2,Ve,.06,W+2+Z*2.2,wt.org,Bt.takeoff,90+Z*.5);ct.add(ft.mesh(r.metal)),ct.add(C.mesh(r.neon)),nt(ct,yn.mega.s0,yn.mega.s1,yn.mega.height,Ve,nn,2)}const X=[],Et=[];{const ct=h("flight",Bt.boost1-400,Bt.finish+400),ft=new Ne,C=new Ne,b=new Ne,W=new Ne,Z=new $e({uniforms:{uBeat:zn.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q*vec2(1.0,0.8));
          float a = exp(-r*r*2.4)*0.2 + exp(-pow((r-0.86)*9.0,2.0))*0.08*(0.6+0.4*exp(-fract(uBeat)*4.0));
          gl_FragColor = vec4(vec3(1.0,0.92,1.2)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:An,depthWrite:!1});a.push(Z);const tt=new Mn(1,1);tt.rotateX(-Math.PI/2);for(const pt of yn.fleetRows){if(pt.finale){const N=kt(ct,pt.vehicles,pt.s,Ve,{extent:[pt.s-pt.depth/2,pt.s+pt.depth/2]});f.rows.push({row:pt,vehicles:N.vehicles});continue}const dt=[];for(const N of pt.vehicles){const J=kd(N.kind,p?{envMap:p}:{});J.position.set(N.x,0,nn(N.s)),J.rotation.y=N.yaw,ct.add(J),dt.push(J)}const lt=nn(pt.s),Mt=new ye(tt,Z);Mt.position.set(Ve,.08,lt),Mt.scale.set(24,1,pt.depth+6),Mt.renderOrder=3,ct.add(Mt),Jh(b,W,{axis:"x",at:lt+pt.depth/2+.9,a0:Ve-10.2,a1:Ve+10.2,face:1,s:pt.s}),Jh(b,W,{axis:"x",at:lt-pt.depth/2-.9,a0:Ve-10.2,a1:Ve+10.2,face:-1,h:.1,s:pt.s});for(const N of[-1,1])ft.box(.4,4.5,.4,Ve+N*11.5,2.25,lt,wt.metal,pt.s),C.box(.1,4.2,.1,Ve+N*11.2,2.25,lt+.25,pt.finale?wt.org:wt.cyan,pt.s),C.box(.6,.5,.6,Ve+N*11.5,4.7,lt,wt.wht,pt.s);f.rows.push({row:pt,vehicles:dt})}ct.add(ft.mesh(r.metal)),ct.add(C.mesh(r.neon)),ct.add(b.mesh(r.steel)),ct.add(W.mesh(r.lamp));const Y=Hr(4242);for(let pt=Bt.boost1-100;pt<Bt.finish+300;pt+=34+Y()*30){const dt=nn(pt);for(const lt of[-1,1]){if(Y()<.25)continue;const Mt=lt<0?Ve-(26+Y()*120):Ve+(75+Y()*160),N=18+Y()*70,J=2.5+Y()*5;ft.box(J,N,J,Mt,N/2,dt,wt.metalD),ft.box(J*1.6,3,J*1.6,Mt,1.5,dt,wt.metal);const Tt=[wt.cyan,wt.mag,wt.org,wt.vio][Math.floor(Y()*4)];for(const zt of[-1,1])C.box(.14,N,.14,Mt+zt*J/2,N/2,dt+J/2,Tt,pt);C.box(J+.2,.2,J+.2,Mt,N,dt,Tt,pt);const Dt=Math.floor(N/14);for(let zt=1;zt<=Dt;zt++)C.box(J+.1,.12,J+.1,Mt,zt*14-2,dt,fs(Tt,.7),pt);if(Y()<.55){const zt=6+Y()*14,Gt=J*.6;ft.box(Gt,zt,Gt,Mt,N+zt/2,dt,wt.metalD),C.box(Gt+.15,.18,Gt+.15,Mt,N+zt,dt,Tt,pt),ft.box(.25,10,.25,Mt,N+zt+5,dt,wt.metalL),C.box(.6,.6,.6,Mt,N+zt+10.2,dt,wt.red,pt)}else for(const zt of[-1,1])C.box(.1,N*.8,.1,Mt+zt*J*.2,N*.4,dt+J/2+.05,wt.wht,pt)}}ct.add(ft.mesh(r.metal)),ct.add(C.mesh(r.neon));{const pt=new Ne,dt=new Ne;let lt=0;for(let N=Bt.flight0+140;N<Bt.finish+200;N+=230,lt++){const J=nn(N),Tt=[wt.mag,wt.cyan,wt.org][lt%3];ei(pt,6,52,2.2,2.6,Ve,8,J,wt.metal,N,-1e3,0,-Math.PI/2),ei(dt,6,50.4,.3,.3,Ve,8,J+1.4,Tt,N,-1e3,0,-Math.PI/2),ei(dt,6,53.6,.18,.3,Ve,8,J+1.4,wt.wht,N,-1e3,0,-Math.PI/2);for(let Dt=0;Dt<12;Dt++){const ht=Dt/12*Math.PI*2;dt.box(1.2,1.2,.4,Ve+Math.cos(ht)*52,8+Math.sin(ht)*52,J+1.5,wt.wht,N,96+Dt*.25)}}const Mt=Hr(777);for(let N=Bt.flight0+60;N<Bt.finish+100;N+=55+Mt()*40){const J=Mt()<.5?-1:1,Tt=Ve+J*(28+Mt()*40),Dt=16+Mt()*26,ht=nn(N),zt=10+Mt()*10,Gt=7+Mt()*6,Xt=[wt.cyan,wt.mag,wt.vio,wt.org][Math.floor(Mt()*4)];if(pt.box(zt,1.2,Gt,Tt,Dt,ht,wt.metal,N),pt.box(zt*.6,1.6,Gt*.6,Tt,Dt-1.3,ht,wt.metalD,N),dt.box(zt+.2,.14,.14,Tt,Dt+.62,ht+Gt/2,Xt,N),dt.box(zt+.2,.14,.14,Tt,Dt+.62,ht-Gt/2,Xt,N),dt.box(.14,.14,Gt,Tt-zt/2,Dt+.62,ht,Xt,N),dt.box(.14,.14,Gt,Tt+zt/2,Dt+.62,ht,Xt,N),dt.box(zt*.5,.08,Gt*.5,Tt,Dt-2.12,ht,wt.cyanW,N),Mt()<.6){const U=4+Mt()*8;pt.box(1.4,U,1.4,Tt,Dt+.6+U/2,ht,wt.metalD,N),dt.box(1.6,.16,1.6,Tt,Dt+.6+U,ht,Xt,N),dt.box(.4,.4,.4,Tt,Dt+1.2+U,ht,wt.red,N)}}ct.add(pt.mesh(r.metal)),ct.add(dt.mesh(r.neon))}}const At={};{const ct=h("finish",Bt.landStrip-300,Bt.end+400),ft=new Ne,C=new Ne;for(let N=Bt.landStrip;N<Bt.finish;N+=6){const J=nn(N);for(const Tt of[-1,1])C.box(.6,.06,1.6,Ve+Tt*6.5,.06,J,wt.wht,N)}const b=nn(Bt.finish),W=11;for(const N of[-1,1]){const J=Ve+N*W;ft.box(1.6,16,1.6,J,8,b,wt.metal);for(let Tt=0;Tt<8;Tt++)C.box(1.7,.6,1.7,J,1+Tt*1.9,b,Tt%2?wt.wht:[.05,.05,.06],Bt.finish);C.box(.14,16,.14,J-N*.85,8,b+.85,wt.cyan,Bt.finish)}ft.box(2*W+2,3.4,1.2,Ve,15.5,b,wt.metal);for(let N=0;N<24;N++)for(let J=0;J<2;J++)(N+J)%2===0&&C.box(.92,.5,.1,Ve-W+.5+N*.92,18-J*.5-0+0,b+.62,wt.wht,Bt.finish);for(const[N,J,Tt]of[[-6,19,wt.mag],[-16,23,wt.cyan],[-28,27,wt.vio]])ei(ft,6,J,1,1,Ve,10.5,b+N,wt.metal,Bt.finish,-1e3,0,-Math.PI/2),ei(C,6,J-.7,.18,.2,Ve,10.5,b+N+.55,Tt,Bt.finish,126,0,-Math.PI/2),ei(C,6,J+.7,.1,.2,Ve,10.5,b+N+.55,wt.wht,Bt.finish,127,0,-Math.PI/2);if(C.box(2*W+2,.15,.15,Ve,13.7,b+.62,wt.mag,Bt.finish),C.box(2*W+2,.15,.15,Ve,17.3,b+.62,wt.mag,Bt.finish),u)for(const N of[1,-1]){const J=jh(u,7,13,3,2.6);J.position.set(Ve,15.5,b+N*.62),N<0&&(J.rotation.y=Math.PI),ct.add(J)}const Z=[],tt=[],Y=Hr(77);for(const N of[-1,1]){for(let J=0;J<6;J++){const Tt=Ve+N*(16+J*2.4),Dt=.6+J*1.3;ft.box(2.4,Dt*2,150,Tt,Dt,b+20,wt.conc),C.box(.1,.08,150,Tt-N*1.2,Dt*2+.02,b+20,J%2?wt.cyan:wt.mag,Bt.finish);for(let ht=0;ht<120;ht++){Z.push(Tt+(Y()-.5)*1.6,Dt*2+.5+Y()*.3,b+20+(Y()-.5)*148);const zt=[[2,2,2.2],[2.2,.3,1.4],[.3,1.6,2.2],[2.4,1.3,.3]][Math.floor(Y()*4)];tt.push(...zt)}}ft.box(1,14,150,Ve+N*31,7,b+20,wt.metalD)}const pt=new Ze;pt.setAttribute("position",new Me(Z,3)),pt.setAttribute("color",new Me(tt,3));const dt=new Ey(pt,new am({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!0}));ct.add(dt),ct.add(ft.mesh(r.matte)),ct.add(C.mesh(r.neon));const lt=No(new Vt(.4,1,2),.075);a.push(lt);const Mt=No(new Vt(2,.35,1.3),.075);a.push(Mt),At.beams=[];for(let N=0;N<8;N++){const J=new ye(new un(.3,2.6,300,16,1,!0).translate(0,150,0),(N>>1)%2?Mt:lt);J.position.set(Ve+(N%2?1:-1)*(24+(N>>1)*5),0,b+10-(N>>1)*22),J.userData.k=N,J.frustumCulled=!1,ct.add(J),At.beams.push(J)}}t&&t.add(s);let St=null;const Ft=Ua.clone(),Wt=sb.clone(),ae=new Vt;let bt=0;function Ot(ct,ft,C){let b,W=null;ct&&typeof ct=="object"?(W=ct,b=ct.t):typeof ct=="number"&&ft&&typeof ft=="object"?(W=ft,b=ft.t??(St&&St.t)??ct):typeof ct=="number"&&typeof ft=="number"?(b=ct<=.1&&ft>ct?ft:ct,W=C||null):typeof ct=="number"&&(b=ct),(b==null||!isFinite(b))&&(b=St&&isFinite(St.t)?St.t:bt),bt=b;const Z=b/km;zn.uBeat.value=Z,zn.uTime.value=b;const tt=Cs(86,101,Z)*(1-Cs(140,150,Z));if(zn.uFlight.value=tt,ae.copy(Ft).lerp(Wt,tt),t&&(t.fog&&t.fog.color&&t.fog.color.copy(ae),t.background&&t.background.isColor&&t.background.copy(ae)),P.uFog.value.copy(ae),mt&&mt.material&&mt.material.uniforms){const lt=mt.material.uniforms;lt.fogColor.value.copy(ae),t&&t.fog&&(lt.fogDensity.value=t.fog.density??Yh)}for(const lt of It.strips){const Mt=Z-lt.on,N=Mt<0?0:1+3*Math.exp(-Mt*4);lt.mat.color.setRGB(2.4*N,2.4*N,2.7*N)}const Y=Cs(us(14.5),us(16.2),b);for(const lt of It.door)lt.g.position.x=lt.sd*(6.5+Y*13.5);for(const lt of It.tree){let Mt=0;lt.id==="pre"?Mt=Z>=6&&Z<16?1:0:lt.id==="a1"?Mt=Z>=10&&Z<16?1:0:lt.id==="a2"?Mt=Z>=12&&Z<16?1:0:lt.id==="a3"?Mt=Z>=14&&Z<16?1:0:lt.id==="go"&&(Mt=Z>=16&&Z<24?1+2*Math.exp(-(Z-16)*2):0),lt.mat.color.copy(lt.col).multiplyScalar(Mt*1.4),Mt||lt.mat.color.setRGB(.02,.02,.03)}z.intensity=300*(1-Cs(us(17),us(22),b))*Cs(0,us(2),b+us(1)),y.mat&&(y.mat.uniforms.uOn.value=Cs(us(12),us(15.5),b));{const lt=us(16),Mt=mi&&isFinite(mi.zero60)?mi.zero60:lt+.81;for(const N of y.beams){const J=N.k?Mt:lt,Tt=b-J,Dt=(b>us(12)?.35:0)+(Tt>=0?3.5*Math.exp(-Tt*2.5):0);N.mat.color.setRGB(2.4*Dt,.06*Dt,.08*Dt)}}if(le.mesh){const lt=le.mesh;for(const Mt of le){let N=Mt.zA-((Mt.z0+Mt.dir*-Mt.v*b)%Mt.len+Mt.len)%Mt.len;const J=Mt.gap&&N>Mt.gap[0]&&N<Mt.gap[1];ji.makeTranslation(Mt.x,J?-200:Mt.y,N),lt.setMatrixAt(Mt.i,ji)}lt.instanceMatrix.needsUpdate=!0;for(const Mt of le.beams){const N=Mt.userData.ph;Mt.rotation.set(.35*Math.sin(b*.4+N),0,Mt.userData.sd*(.25+.25*Math.sin(b*.33+N*1.7)))}}for(const lt of ut.lasers)lt.m.rotation.z=Math.sin(b*2.2+lt.k*1.1)*.5+(lt.k%2?.35:-.35);if(ut.loopLasers)for(const lt of ut.loopLasers){const Mt=lt.userData.k;lt.rotation.set(Math.sin(b*.9+Mt)*.5,0,(Mt<5?-1:1)*(.25+.3*Math.sin(b*.7+Mt*.8)))}const pt=i||W&&W.camera||null;if(At.beams)for(const lt of At.beams){const Mt=lt.userData.k;lt.rotation.set(Math.sin(b*.8+Mt)*.35,0,Math.sin(b*.6+Mt*1.3)*.4)}let dt=null;if(pt&&pt.position?dt=pt.position.z:St&&St.pos&&(dt=St.pos.z),dt!=null&&v.length&&g.length){let lt=v[0];for(const Mt of v)Math.abs(Mt.z-dt)<Math.abs(lt.z-dt)&&(lt=Mt);for(const Mt of g)Mt.l.position.x=lt.x+Mt.dx,Mt.l.position.z=lt.z}for(const lt of d)lt.l.intensity=dt==null?lt.k:lt.k*(1-Cs(60,140,Math.abs(lt.l.position.z-dt)));if(dt!=null)for(const lt of c)lt.g.visible=lt.zLo<=dt+500&&lt.zHi>=dt-2600}const O=new L,ie=(ct,ft,C,b,W)=>{const Z=C<1,tt=ct.z,Y=ct.x,pt=zo(ft.z,tt-40,tt+30),dt=tt+(pt-tt)*(Z?W[0]:W[1]);return b.pos.set(Y+$d+(Z?26:25),3.2,dt+2),b.look.set(Y,Z?7.2:6,dt-.5),b.fov=Z?58:42,b},Yt=()=>({pos:new L,look:new L,fov:50}),ce={fleetJump(ct,ft=9/16,C=Yt()){return ie(v[0]||{z:nn(Bt.fleet.sCenter),x:0},ct,ft,C,[.6,.35])},finale(ct,ft=9/16,C=Yt()){return ie(v[v.length-1]||{z:nn(Bt.finish),x:Ve},ct,ft,C,[.6,.35])},flipDescent(ct,ft=9/16,C=Yt()){const b=ft<1,W=-Bt.flip0-Li.R,Z=Li.zLand;return C.pos.set(Li.xLand+(b?9:14),4.5,Z+(b?34:26)),O.set(Li.xLand*.45,Math.max(6,Math.min(ct.y,Li.height)*.7+2),W*.35+ct.z*.65),C.look.copy(O),C.fov=b?62:46,C}};if(e&&t&&e.compile)try{const ct=new gi(60,1,.1,6e3);e.compile(t,i||ct)}catch{}const Jt={group:s,envMap:I,course:yn,layout:Bt,rings:X,pylons:Et,reflector:mt,fleet:f,flipRamp:$,shots:ce,update:Ot,setGameplayState(ct){St=ct},setCamera(ct){i=ct},trackFrame:Bl,groundY:Hd,dispose(){t&&t.remove(s),s.traverse(ct=>{ct.geometry&&ct.geometry.dispose()});for(const ct of a)ct.dispose&&ct.dispose();mt&&mt.dispose&&mt.dispose()}};return Ot(0),Jt}const Be=L,In=-2.26,Zi=2.22,Sr=-1.36,Tr=1.32,Ss=.375,Rr=.395,jd=.855,Zd=.775,ds=.112;function En(n,t){if(t<=n[0][0])return n[0][1];const e=n.length;if(t>=n[e-1][0])return n[e-1][1];let i=1;for(;i<e-1&&t>n[i][0];)i++;const s=n[i-1][0],o=n[i][0],a=n[i-1][1],c=n[i][1],l=o-s,h=(p,y)=>(n[y][1]-n[p][1])/(n[y][0]-n[p][0]),r=h(i-1,i),u=p=>{if(p<=0)return h(0,1);if(p>=e-1)return h(e-2,e-1);const y=h(p-1,p),M=h(p,p+1);return y*M<=0?0:2*y*M/(y+M)};let f=u(i-1),d=u(i);r===0&&(f=0,d=0);const v=(t-s)/l,g=v*v,m=g*v;return(2*m-3*g+1)*a+(m-2*g+v)*l*f+(-2*m+3*g)*c+(m-g)*l*d}function qa(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}const Bn={floorY:[[-2.26,.25],[-2.05,.17],[-1.85,.125],[-1.7,ds],[1.75,ds],[2.22,.2]],floorX:[[-2.26,.45],[-1.9,.65],[0,.8],[2.22,.8]],rockY:[[-2.26,.27],[-1.95,.2],[2,.2],[2.22,.25]],rockX:[[-2.26,.56],[-2,.72],[-1.7,.82],[-1.36,.87],[-.7,.855],[0,.835],[.6,.89],[1.32,.99],[1.8,.99],[2.22,.94]],beltY:[[-2.26,.44],[-1.9,.52],[-1.3,.575],[-.6,.56],[.6,.58],[1.4,.64],[2.22,.665]],beltX:[[-2.26,.6],[-2,.76],[-1.7,.87],[-1.36,.915],[-.75,.895],[-.1,.875],[.6,.95],[1.32,1.06],[1.9,1.05],[2.22,1]],shY:[[-2.26,.64],[-2.05,.735],[-1.8,.778],[-1.36,.79],[-1,.792],[-.5,.79],[.2,.79],[.7,.8],[1,.82],[1.32,.85],[1.8,.848],[2.22,.828]],shX:[[-2.26,.58],[-2,.72],[-1.7,.82],[-1.36,.865],[-.75,.845],[-.1,.832],[.6,.9],[1.32,1],[1.9,.99],[2.22,.94]],finX:[[-2.26,.54],[-1.9,.58],[-1.36,.62],[-.8,.63],[0,.66],[1.32,.67],[2.22,.63]],hoodY:[[-2.26,.625],[-1.9,.6584],[-1.5,.6956],[-1.2,.7234],[-1,.742],[-.6,.758],[.4,.765],[1.2,.785],[1.7,.8],[2.22,.805]]},xb=n=>En(Bn.shY,n)+.006,Gm=.19,_b=.54-Gm,Ql=n=>.24*Math.pow(Math.min(1,Math.abs(n)/.6),2),Jd=.63,ic=.41,Nf=n=>n>=ic?.18*Math.max(0,Jd-n):.18*(Jd-ic)+1.27*(ic-n),Vm=.7,yb=n=>1-qa(In,In+Vm,n),Qd=n=>In+Ql(n);function Wm(n){for(const t of[Sr,Tr]){const e=n-t;if(Math.abs(e)<Rr)return Ss+Math.sqrt(Rr*Rr-e*e)}return null}const ro=7,si=8,sl=[.14,.38,.62,.84];function sc(n){const t=En(Bn.floorY,n),e=En(Bn.floorX,n),i=En(Bn.rockY,n),s=En(Bn.rockX,n);let o=En(Bn.beltY,n);const a=En(Bn.beltX,n);let c=En(Bn.shY,n);const l=En(Bn.shX,n);let h=xb(n);const r=En(Bn.finX,n),u=En(Bn.hoodY,n),f=qa(In,In+.6,n),d=[[0,t],[e,t]],v=Wm(n);if(v!==null)o=Math.max(o,v+.004),c=Math.max(c,o+.012),h=Math.max(h,c+.004),d[1][0]=Math.min(e,.62-.02),d.push([.62,i],[.62,v],[(.62+a)/2,v],[a,v],[a,v+(o-v)*.5],[a,o]);else{const y=.018*qa(In,In+.5,n),M=_=>{const D=(_-sl[0])/(1-sl[0]);return[s+(a-s)*_+(_>sl[0]?y*Math.sin(Math.PI*D):0),i+(o-i)*_]};d.push([s,i],...sl.map(M),[a,o])}const g=.1+.1*(1-qa(-1,-.6,n))-(.2-Gm)*(1-qa(In,In+.7,n)),m=r-g,p=u+.004+.012*f;return d.push([l,c],[r,h],[m,p],[m*.66,u+(p-u)*.3],[m*.33,u+(p-u)*.06],[0,u]),d}const Mb=[0,0,0,1,1,1,1,1,1,1,1,1,1],bb=[0,1,2,3,3,3,3,4,5,6,7,7,7],wb=(n,t,e,i)=>i+((n<=si?Nf(e):0)+Ql(t))*yb(i),Sb={[ro]:Bn.beltY,[si]:Bn.shY,[si+1]:Bn.shY},tp=_b-.07,Xm=n=>[tp*n,ic,In+Nf(ic)+Ql(tp)];function rf(n){const t=sc(n).map(([e,i],s)=>{const o=wb(s,e,i,n),a=Sb[s];return[e,a&&o>n+1e-6?i+En(a,o)-En(a,n):i,o]});if(Math.abs(n-In)<1e-6){const e=t[si+2],i=Xm(1),s=t[ro],o=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],a=[s[0]-e[0],s[1]-e[1],s[2]-e[2]],c=o[0]*a[1]-o[1]*a[0],l=(o[2]*a[1]-a[2]*o[1])/c,h=(o[0]*a[2]-a[0]*o[2])/c;for(let r=1;r<ro;r++)t[r][2]=e[2]+l*(t[r][0]-e[0])+h*(t[r][1]-e[1]);t[0][2]=t[1][2]}return t}function Tb(){const n=[];for(let t=In;t<=Zi+1e-6;t+=.05)n.push(t);for(let t=In;t<In+Vm;t+=.025)n.push(t);for(const t of[Sr,Tr]){for(let e=-1;e<=1.0001;e+=1/12)n.push(t+Math.sin(e*Math.PI/2)*Rr*.999);n.push(t-Rr-.006,t+Rr+.006)}return n.push(Zi),n.sort((t,e)=>t-e),n.filter((t,e)=>e===0||t-n[e-1]>.004).filter(t=>t>=In&&t<=Zi)}function Eb(){const n=Tb(),t=n.map(rf),e=t[0].length,i=[[],[],[],[]],s=new Map;let o=null;const a=(u,f,d,v)=>{const g=d[0]-f[0],m=d[1]-f[1],p=d[2]-f[2],y=v[0]-f[0],M=v[1]-f[1],_=v[2]-f[2],D=m*_-p*M,I=p*y-g*_,P=g*M-m*y;if(D*D+I*I+P*P<1e-12)return;if(u===2||o===null){i[u].push(...f,...d,...v);return}let F=s.get(o);F||(F={m:u,arr:[]},s.set(o,F)),F.arr.push(...f,...d,...v)},c=n.map(u=>Wm(u)!==null);for(let u=0;u<t.length-1;u++){const f=t[u],d=t[u+1],v=c[u]||c[u+1];for(let g=0;g<e-1;g++){const m=v&&g>=2&&g<=4?0:Mb[g];o=m+"_"+bb[g]+(v&&g>=2&&g<=ro+1?"a":"");const p=f[g],y=f[g+1],M=d[g+1],_=d[g],D=[-p[0],p[1],p[2]],I=[-y[0],y[1],y[2]],P=[-M[0],M[1],M[2]],F=[-_[0],_[1],_[2]];a(m,p,y,M),a(m,p,M,_),a(m,D,P,I),a(m,D,F,P)}}o=null;const l=t[0],h=t[t.length-1];{const u=si+2,f=m=>[-m[0],m[1],m[2]],d=(m,p)=>{const y=cr.triangulateShape(p.map(M=>new Kt(M[0],M[1])),[]);for(const[M,_,D]of y){const I=p[M],P=p[_],F=p[D];(P[0]-I[0])*(F[1]-I[1])-(P[1]-I[1])*(F[0]-I[0])<0?a(m,I,P,F):a(m,I,F,P)}},v=Xm,g=[];for(let m=e-1;m>=u;m--)g.push(l[m]);g.push(v(1),v(-1));for(let m=u;m<e-1;m++)g.push(f(l[m]));d(3,g),d(1,[v(1),l[1],l[0],f(l[1]),v(-1)]);for(const m of[1,-1]){const p=[];for(let y=u;y>=1;y--)p.push(m>0?l[y]:f(l[y]));p.push(v(m)),d(2,p)}}const r=[0,(h[0][1]+h[e-1][1])/2,Zi];for(let u=0;u<e-1;u++){const f=h[u],d=h[u+1];a(0,r,f,d),a(0,r,[-d[0],d[1],d[2]],[-f[0],f[1],f[2]])}return i.map((u,f)=>{let d=new Ze;if(d.setAttribute("position",new Me(u,3)),f===3){let g=0,m=0,p=0;for(let _=0;_<u.length;_+=9){const D=u[_+3]-u[_],I=u[_+4]-u[_+1],P=u[_+5]-u[_+2],F=u[_+6]-u[_],R=u[_+7]-u[_+1],x=u[_+8]-u[_+2];g+=I*x-P*R,m+=P*F-D*x,p+=D*R-I*F}const y=Math.hypot(g,m,p)||1,M=new Float32Array(u.length);for(let _=0;_<u.length;_+=3)M.set([g/y,m/y,p/y],_);return d.setAttribute("normal",new xn(M,3)),d}if(f===2){const g=new Float32Array(u.length);for(const m of[1,-1]){let p=0,y=0,M=0;for(let D=0;D<u.length;D+=9){if(Math.sign(u[D]+u[D+3]+u[D+6])!==m)continue;const I=u[D+3]-u[D],P=u[D+4]-u[D+1],F=u[D+5]-u[D+2],R=u[D+6]-u[D],x=u[D+7]-u[D+1],z=u[D+8]-u[D+2];p+=P*z-F*x,y+=F*R-I*z,M+=I*x-P*R}const _=Math.hypot(p,y,M)||1;for(let D=0;D<u.length;D+=9)if(Math.sign(u[D]+u[D+3]+u[D+6])===m)for(let I=0;I<3;I++)g.set([p/_,y/_,M/_],D+I*3)}return d.setAttribute("normal",new xn(g,3)),d}const v=[];u.length&&v.push(dd(fd(d,1e-5),fi.degToRad(15)));for(const g of s.values()){if(g.m!==f)continue;const m=new Ze;m.setAttribute("position",new Me(g.arr,3)),v.push(dd(fd(m,1e-5),fi.degToRad(40)))}for(const g of v)for(const m of Object.keys(g.attributes))m!=="position"&&m!=="normal"&&g.deleteAttribute(m);return Ho(v)})}function oo(n,t){t=Math.abs(t);const e=sc(n).slice(si);if(t>=e[0][0])return e[0][1];for(let i=1;i<e.length;i++){const s=e[i-1],o=e[i];if(t>=o[0])return o[1]+(s[1]-o[1])*((t-o[0])/Math.max(1e-5,s[0]-o[0]))}return e[e.length-1][1]}const Ab=-1.12,ep=1.62,qm=[[-1.12,.73],[-.75,.93],[-.3,1.08],[.15,1.13],[.6,1.09],[1.1,.97],[1.62,.83]],zf=[[-1.12,.44],[-.92,.66],[-.6,.76],[-.1,.74],[.5,.64],[1.1,.47],[1.62,.27]],Gl=[.5,.62];function Cb(n,t){const e=En(zf,t),i=oo(t,e)-.004,s=oo(t,0)+.01,o=Math.max(s,En(qm,t)),a=Math.min(1,Math.abs(n)/e),c=Math.acos(Math.pow(a,1/Gl[0]));return i+(o-i)*Math.pow(Math.sin(c),Gl[1])}const li=9;function Rb(){const n=[];for(let h=Ab;h<=ep;h+=.04)n.push(h);n.push(ep);const t=n.map(h=>{const r=En(zf,h),u=oo(h,r)-.004,f=oo(h,0)+.01,d=Math.max(f,En(qm,h)),v=[];for(let g=0;g<li;g++){const m=g/(li-1),p=m*Math.PI/2,y=r*Math.pow(Math.cos(p),Gl[0]),M=u+(d-u)*Math.pow(Math.sin(p),Gl[1]);v.push([g===li-1?0:y,M,h])}return v}),e=[],i=[],s=t.length;for(const h of[1,-1])for(let r=0;r<s;r++)for(let u=0;u<li;u++){const f=t[r][u];e.push(f[0]*h,f[1],f[2])}const o=(h,r,u)=>h*s*li+r*li+u;for(let h=0;h<s-1;h++)for(let r=0;r<li-1;r++){const u=o(0,h,r),f=o(0,h,r+1),d=o(0,h+1,r+1),v=o(0,h+1,r);i.push(u,f,d,u,d,v);const g=o(1,h,r),m=o(1,h,r+1),p=o(1,h+1,r+1),y=o(1,h+1,r);i.push(g,p,m,g,y,p)}{const h=t[s-1],r=e.length/3;e.push(0,h[0][1],h[0][2]);for(const u of[1,-1])for(let f=0;f<li;f++)e.push(h[f][0]*u,h[f][1],h[f][2]);for(let u=0;u<li-1;u++)i.push(r,r+1+u,r+2+u),i.push(r,r+1+li+u+1,r+1+li+u)}const a=new Ze;a.setAttribute("position",new Me(e,3)),a.setIndex(i),a.computeVertexNormals();const c=a.attributes.normal;for(let h=0;h<s;h++){const r=o(0,h,li-1),u=o(1,h,li-1),f=(c.getY(r)+c.getY(u))/2,d=(c.getZ(r)+c.getZ(u))/2,v=Math.hypot(f,d)||1;c.setXYZ(r,0,f/v,d/v),c.setXYZ(u,0,f/v,d/v)}const l=t.map(h=>[h[0],h[Math.round(li*.35)],h[li-3],h[li-1]]);return{geo:a,secs:l}}function Ps(n,t,e){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new ql(i);return s.colorSpace=Cn,s.anisotropy=4,s}const Pb=()=>Ps(256,112,(n,t,e)=>{const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#f2f3f4"),i.addColorStop(1,"#c9ccd0"),n.fillStyle=i,n.fillRect(0,0,t,e),n.strokeStyle="#3a3e44",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12),n.fillStyle="#4a4f57",n.font="700 64px Arial Narrow, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("RDSTR",t/2,e/2+4)}),Qh=n=>Ps(128,128,(t,e,i)=>{const s=t.createRadialGradient(e/2,i/2,0,e/2,i/2,e/2);for(const[o,a]of n)s.addColorStop(o,a);t.fillStyle=s,t.fillRect(0,0,e,i)}),Lb=()=>Ps(128,128,(n,t,e)=>{const i=n.createRadialGradient(t/2,e/2,t*.08,t/2,e/2,t/2);i.addColorStop(0,"rgba(40,42,46,0.7)"),i.addColorStop(.55,"rgba(70,74,80,0.35)"),i.addColorStop(.9,"rgba(60,64,70,0.4)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,t,e)});function Db(n){const t=new vc;t.background=new Vt(263176);const e=new ye(new rn(60,30,60),new Ke({color:460556,side:Qn}));e.position.y=10,t.add(e);const i=(c,l,h,r,u,f,d,v=0)=>{const g=new ye(new rn(l,h,r),new Ke({color:c}));g.position.set(u,f,d),g.rotation.y=v,t.add(g)};i(new Vt(2.2,2.2,2.4),1.2,.2,40,-4,14,0),i(new Vt(2.2,2.2,2.4),1.2,.2,40,4,14,0),i(new Vt(3.5,.3,2.6),.4,1.2,50,-29,2,0),i(new Vt(.2,2.4,3.6),.4,1.2,50,29,2,0),i(new Vt(3.5,1.2,.2),50,.8,.4,0,.6,-29),i(new Vt(1.6,1.5,1.7),50,.5,.4,0,3,29),i(new Vt(.2,1.2,2),50,.4,.4,0,.4,29),i(new Vt(1.8,1.8,2),50,.15,.4,0,6,-29);const s=new ye(new Mn(60,60),new Ke({color:723730}));s.rotation.x=-Math.PI/2,s.position.y=-4,t.add(s);const o=new co(n),a=o.fromScene(t,.035);return o.dispose(),t.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),a.texture}const Ib=`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Ub=`uniform float uLevel; uniform float uTime; uniform float uSeed; uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uSmoke;
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
}`,Fb="attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Nb="uniform vec3 uColor; uniform float uOpacity; varying float vA; void main(){ gl_FragColor=vec4(uColor*vA*uOpacity,1.0); }";class np{constructor(t,e,i=56){this.n=i,this.w=e,this.pts=[],this.ups=[];const s=i*4;this.pos=new Float32Array(s*3),this.alpha=new Float32Array(s);const o=[];for(let c=0;c<i-1;c++)for(const l of[0,2]){const h=c*4+l,r=h+1,u=h+4,f=h+5;o.push(h,r,f,h,f,u)}const a=new Ze;a.setAttribute("position",new xn(this.pos,3).setUsage(Ns)),a.setAttribute("aA",new xn(this.alpha,1).setUsage(Ns)),a.setIndex(o),this.mat=new $e({vertexShader:Fb,fragmentShader:Nb,transparent:!0,depthWrite:!1,blending:An,side:Xe,toneMapped:!1,uniforms:{uColor:{value:t},uOpacity:{value:0}}}),this.mesh=new ye(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.renderOrder=5,this.mesh.name="roadster-trail"}reset(){this.pts.length=0,this.ups.length=0}push(t,e,i,s=.12){const o=this.pts[0];o&&o.distanceToSquared(t)<s*s?(o.copy(t),this.ups[0][0].copy(e),this.ups[0][1].copy(i)):(this.pts.unshift(t.clone()),this.ups.unshift([e.clone(),i.clone()]),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop())),this.write()}write(){const t=this.n,e=this.pos,i=this.alpha,s=this.pts.length;for(let a=0;a<t;a++){const c=Math.min(a,Math.max(0,s-1)),l=this.pts[c],h=a/(t-1),r=this.w*(1-h*.6),u=s>1&&a<s?Math.pow(1-h,1.6):0,f=a*4;if(!l){for(let g=0;g<4;g++)e.set([0,-999,0],(f+g)*3),i[f+g]=0;continue}const[d,v]=this.ups[c];e.set([l.x+d.x*r,l.y+d.y*r,l.z+d.z*r],f*3),e.set([l.x-d.x*r,l.y-d.y*r,l.z-d.z*r],(f+1)*3),e.set([l.x+v.x*r,l.y+v.y*r,l.z+v.z*r],(f+2)*3),e.set([l.x-v.x*r,l.y-v.y*r,l.z-v.z*r],(f+3)*3);for(let g=0;g<4;g++)i[f+g]=u}const o=this.mesh.geometry;o.attributes.position.needsUpdate=!0,o.attributes.aA.needsUpdate=!0}}function zb(n={}){const t=new an;t.name="roadster";const e=new an;t.add(e),n.forward==="+z"&&(e.rotation.y=Math.PI);const i=new an;e.add(i);const s=new an;i.add(s);const o=new Di({color:12896462,metalness:.82,roughness:.38,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.2,sheen:0}),a={value:1};function c(A,k=1,rt=new Vt(1,1,1),yt=0,_t=0,E=0){A.onBeforeCompile=T=>{T.uniforms.uStudio=a,T.uniforms.uStudioK={value:k},T.uniforms.uStudioTint={value:rt},T.uniforms.uDesat={value:yt},T.uniforms.uCapK={value:_t},T.uniforms.uSkyCut={value:E},T.fragmentShader=`uniform float uStudio; uniform float uStudioK; uniform vec3 uStudioTint; uniform float uDesat; uniform float uCapK; uniform float uSkyCut;
`+T.fragmentShader.replace("#include <opaque_fragment>",`
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
      #include <opaque_fragment>`)},A.customProgramCacheKey=()=>"studio"+k+"_"+yt+"_"+_t+"_"+E}c(o,1,new Vt(1,1,1),.62,.5);const l=new Di({color:789776,metalness:.35,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.9}),h=new Sn({color:526603,metalness:.35,roughness:.62,envMapIntensity:.4}),r=new Sn({color:1447964,metalness:.5,roughness:.55,envMapIntensity:.8}),u=new Di({color:2303532,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.1}),f=new Di({color:329483,metalness:.6,roughness:.14,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35,side:Xe}),d=new Sn({color:13225686,metalness:1,roughness:.16,envMapIntensity:1.4}),v=new Sn({color:1315862,metalness:0,roughness:.86,envMapIntensity:.45}),g=new Sn({color:658189,metalness:.5,roughness:.6,envMapIntensity:.6,side:Xe}),m=new Sn({color:9080210,metalness:.9,roughness:.38,envMapIntensity:1}),p=new Di({color:10096664,metalness:.2,roughness:.35,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.9}),y=new Di({color:11844290,metalness:.95,roughness:.18,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35}),M=new Di({color:1711136,metalness:.8,roughness:.35,clearcoat:.8,clearcoatRoughness:.1,envMapIntensity:1.1}),_=new Vt(2.1,0,.06),D=new Vt(.5,0,.02),I=new Ke({color:_.clone(),toneMapped:!1}),P=new Ke({color:D.clone(),toneMapped:!1}),F=new Vt(3.2,.55,.5),R=new Vt(.55,0,.03),x=new Ke({color:F.clone(),toneMapped:!1}),z=new Ke({color:R.clone(),transparent:!0,blending:An,depthWrite:!1,toneMapped:!1,side:Xe}),G=new Ke({color:new Vt(.12,.125,.14),transparent:!0,blending:An,depthWrite:!1,toneMapped:!1}),st=new Sn({color:11039802,metalness:1,roughness:.28,envMapIntensity:1.1,emissive:new Vt(.09,.05,.015)}),vt=new Sn({color:13936974,metalness:1,roughness:.22,envMapIntensity:1.4,emissive:new Vt(.16,.09,.02)}),Rt=()=>Ps(64,64,(A,k,rt)=>{const yt=A.createRadialGradient(k/2,rt*.9,2,k/2,rt*.7,k*.6);yt.addColorStop(0,"rgba(255,255,255,1)"),yt.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=yt,A.fillRect(0,0,k,rt)}),mt=new Vt(2.3,2.4,2.7),It=new Ke({color:mt.clone(),toneMapped:!1}),nt=new Vt(.025,.1,.18),kt=new Ke({color:nt.clone(),toneMapped:!1}),se=new Ke({color:new Vt(2.4,.9,.1),toneMapped:!1}),fe=new Ke({color:new Vt(.02,.03,.05),toneMapped:!1}),le=Pb(),ut=new Sn({map:le,emissiveMap:le,emissive:new Vt(.32,.32,.33),metalness:.1,roughness:.4}),$=[h,st,o,l,r,u,f,d,v,g,y,M,m,p,ut,vt];c(vt,.5,new Vt(1,.8,.45)),c(l,.32),c(u,.4),c(f,.22,new Vt(.8,.9,1.15),.2,2.5,.85),c(d,.9),c(g,.08),c(y,.7),c(M,.35),c(m,.5),c(v,.12);const X=(A,k,rt,yt=0,_t=0,E=0)=>{const T=new ye(k,rt);return T.position.set(yt,_t,E),A.add(T),T},[Et,At,St,Ft]=Eb(),Wt=X(s,At,o);Wt.name="roadster-paint",X(s,St,o).name="nose-corners",X(s,Et,l),X(s,Ft,l).name="nose-face";const ae=Rb();X(s,ae.geo,f);{const A=ae.secs.map(k=>new Be(k[0][0]+.004,k[0][1]+.004,k[0][2]));for(const k of[1,-1]){const rt=new br(A.map(yt=>new Be(yt.x*k,yt.y,yt.z)));X(s,new js(rt,40,.008,5,!1),d)}for(const k of[1,-1]){const rt=[];for(let yt=0;yt<=14;yt++){const _t=-.98+2.4*yt/14,E=.93-.2*(yt/14),T=En(zf,_t)*E;rt.push(new Be(T*k,Cb(T,_t)+.004,_t))}X(s,new js(new br(rt),40,.011,5,!1),o).name="glass-pillar"}}const bt=new an;s.add(bt);{const A=sc(In),k=A.slice(si+2),rt=V=>{V=Math.abs(V);for(let xt=1;xt<k.length;xt++){const K=k[xt-1],qt=k[xt];if(V>=qt[0])return qt[1]+(K[1]-qt[1])*((V-qt[0])/Math.max(1e-5,K[0]-qt[0]))}return k[k.length-1][1]},yt=k[0][0],_t=new Ke({color:new Vt(.22,.24,.28),transparent:!0,blending:An,depthWrite:!1,toneMapped:!1});bt.userData.glowM=_t,bt.userData.glowBase=_t.color.clone();const E=(V,xt,K=40,qt=6)=>{const Pt=new br(V,!1,"centripetal",.2),Nt=Pt.computeFrenetFrames(K,!1),ne=[],te=[],me=Ht=>{const re=Ht*(xt.length-1),he=Math.min(xt.length-2,Math.floor(re));return xt[he]+(xt[he+1]-xt[he])*(re-he)};for(let Ht=0;Ht<=K;Ht++){const re=Ht/K,he=Pt.getPointAt(re),De=me(re),_e=Nt.normals[Ht],Ue=Nt.binormals[Ht];for(let Ce=0;Ce<=qt;Ce++){const be=Ce/qt*Math.PI*2;ne.push(he.x+De*(Math.cos(be)*_e.x+Math.sin(be)*Ue.x),he.y+De*(Math.cos(be)*_e.y+Math.sin(be)*Ue.y),he.z+De*(Math.cos(be)*_e.z+Math.sin(be)*Ue.z))}if(Ht<K)for(let Ce=0;Ce<qt;Ce++){const be=Ht*(qt+1)+Ce,qe=be+qt+1;te.push(be,qe,be+1,be+1,qe,qe+1)}}const oe=new Ze;return oe.setAttribute("position",new Me(ne,3)),oe.setIndex(te),oe.computeVertexNormals(),oe},T=[];for(let V=0;V<=24;V++){const xt=-yt+2*yt*(V/24);T.push(new Be(xt,rt(xt)-.007,Qd(xt)-.006))}const H=new br(T,!1,"centripetal");X(bt,new js(H,64,.0085,6,!1),It).name="front-lightbar",X(bt,new js(H,48,.022,8,!1),_t).renderOrder=4;const S=new Ke({color:mt.clone().multiplyScalar(1.5),toneMapped:!1,side:Xe});bt.userData.slashM=S;const at=new Di({color:131845,metalness:.3,roughness:.08,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.4,side:Xe});$.push(at);for(const V of[1,-1]){const K=(te,me,oe)=>{const Ht=In+.4*te,re=rf(Ht),he=new Be(re[si+2][0]*V,re[si+2][1],re[si+2][2]),De=new Be(re[si+1][0]*V,re[si+1][1],re[si+1][2]),_e=rf(Ht+.01),Ue=new Be(_e[si+2][0]*V,_e[si+2][1],_e[si+2][2]),Ce=new Be().crossVectors(De.clone().sub(he),Ue.clone().sub(he)).normalize();return Ce.y<0&&Ce.negate(),he.lerp(De,fi.clamp(me,0,1)).addScaledVector(Ce,oe)},qt=(te,me,oe,Ht,re=18,he=.25)=>{const De=[],_e=[];for(let Ce=0;Ce<=re;Ce++){const be=Ce/re,qe=te+(me-te)*be,en=oe*(he+(1-he)*Math.pow(be<.6?be/.6:(1-be)/.4,.6))*(be>.97?.3:1),Ye=.04+.92*qe;for(const bn of[K(qe,Ye-en,Ht),K(qe,Ye+en,Ht)])De.push(bn.x,bn.y,bn.z);if(Ce<re){const bn=Ce*2;_e.push(bn,bn+1,bn+2,bn+1,bn+3,bn+2)}}const Ue=new Ze;return Ue.setAttribute("position",new Me(De,3)),Ue.setIndex(_e),Ue.computeVertexNormals(),Ue};X(bt,qt(0,1.04,.26,.004),at).name="slash-lens",X(bt,qt(0,1,.12,.008,18,.55),S).name="slash-band";const Pt=[];for(let te=0;te<=10;te++){const me=te/10;Pt.push(K(me,.04+.92*me,.01))}Pt[0]=new Be(yt*V,rt(yt)-.007,Qd(yt)-.006),X(bt,E(Pt,[.0085,.012,.015,.016,.013,.004],40,8),S).name="slash-headlight";const Nt=[.05,.4,.7,.97].map(te=>K(te,.04+.92*te,.012));X(bt,E(Nt,[.02,.05,.05,.015],20,8),_t).renderOrder=4;const ne=X(s,new rn(.01,.022,.085),se,(En(Bn.beltX,-.86)+.003)*V,En(Bn.beltY,-.86)+.07,-.86);ne.rotation.y=.05*V}for(let V=0;V<1;V++){const xt=[];for(let K=0;K<=12;K++){const qt=-.38+.76*K/12;xt.push(new Be(qt,A[0][1]+.01,In+Nf(A[0][1]+.01)+Ql(qt)-.006))}X(bt,new js(new br(xt),24,.008,5,!1),r).name="front-lip"}}{const A=new Ke({color:328966});for(const k of[1,-1]){for(const[_t,E]of[[.62,-.08],[-.88,.04]]){const T=sc(_t),H=[3,4,5,6,ro,si].map((S,at,V)=>new Be((T[S][0]+.003)*k,T[S][1]+(at===0?.01:0),_t+E*(at/(V.length-1)-.6)));X(s,new js(new br(H),16,.0045,4,!1),A)}const rt=new $r;rt.moveTo(0,0),rt.lineTo(.26,0),rt.lineTo(.31,.075),rt.lineTo(.08,.05),rt.closePath();const yt=X(s,new Pl(rt),r,(En(Bn.beltX,.75)+.004)*k,.42,.86);yt.rotation.y=k>0?Math.PI/2:-Math.PI/2,yt.scale.x=k>0?1:-1,yt.rotation.order="YXZ"}}const Ot=new an;s.add(Ot);const O={nozzles:[]};{const A=sc(Zi),rt=A[A.length-1][1]-.055,yt=A[ro][0]-.03,_t=Zi+.004,E=X(Ot,new rn(2*yt,.02,.008),I,0,rt,_t);E.name="roadster-lightbar",X(Ot,new rn(2*yt-.02,.007,.008),x,0,rt,_t+.003);const T=Ps(16,128,(te,me,oe)=>{const Ht=te.createLinearGradient(0,0,0,oe);Ht.addColorStop(0,"rgba(255,255,255,0)"),Ht.addColorStop(.5,"rgba(255,255,255,1)"),Ht.addColorStop(1,"rgba(255,255,255,0)"),te.fillStyle=Ht,te.fillRect(0,0,me,oe)});z.map=T;const H=X(Ot,new Mn(2*yt+.16,.2),z,0,rt,_t+.02);H.renderOrder=4;for(const te of[1,-1]){const me=X(Ot,new rn(.012,.02,.09),I,(A[ro][0]+.003)*te,rt,Zi-.04);me.rotation.y=.04*te}X(Ot,new rn(yt*1.7,.006,.01),P,0,rt-.21,_t),O.tailLeft=new vn,O.tailLeft.position.set(-yt+.02,rt,_t+.03),O.tailRight=new vn,O.tailRight.position.set(yt-.02,rt,_t+.03),Ot.add(O.tailLeft,O.tailRight);const S=X(Ot,new rn(.16,.012,.02),It,0,.7,_t+.008);S.name="plate-lamp";const at=X(Ot,new Mn(1,.2),G,0,.62,_t+.01);at.renderOrder=3,G.map=Rt();const V=new $r;V.moveTo(-.74,0),V.lineTo(.74,0),V.lineTo(.82,.24),V.lineTo(.78,.3),V.lineTo(-.78,.3),V.lineTo(-.82,.24),V.closePath();const xt=X(Ot,new Qa(V,{depth:.03,bevelEnabled:!1}),h,0,.2,Zi-.025);xt.name="diffuser-face";const K=new an;K.position.set(0,.555,_t+.006),Ot.add(K);const qt=X(K,new Mn(.3,.13),ut,0,.065,.004);qt.name="plate",X(K,new rn(.36,.15,.008),r,0,.065,-.001),Ot.userData.plateHinge=K;const Pt=new Sn({color:5922406,metalness:1,roughness:.22,envMapIntensity:1.1});$.push(Pt),c(Pt,.5);const Nt=new Sn({color:328966,metalness:.6,roughness:.5,side:Xe});$.push(Nt),[[-.39,.4,!1],[-.13,.4,!1],[.13,.4,!1],[.39,.4,!1],[0,.62,!0]].forEach(([te,me,oe])=>{const Ht=new an;Ht.position.set(te,me,oe?Zi-.01:_t+.012),Ot.add(Ht);const re=oe?.05:.058;X(Ht,new Ds(re,oe?.008:.0095,8,36),Pt),X(Ht,new Ds(re*.86,.004,6,32),r,0,0,-.012);const he=X(Ht,new un(re*.95,re*.8,.12,24,1,!0),Nt,0,0,-.06);he.rotation.x=Math.PI/2,X(Ht,new gs(re*.8,24),fe,0,0,-.11),Ht.userData.main=oe,Ht.userData.dir=new Be(0,-.06,1),O.nozzles.push(Ht)});{const te=new ye(new Mn(1.12,.15),h);te.position.set(0,.4,_t+.001),Ot.add(te)}}{const H=Nt=>.45*(.2969*Math.sqrt(Nt)-.126*Nt-.3516*Nt*Nt+.2843*Nt**3-.1036*Nt**4),S=Nt=>.065*Math.sin(Nt*Math.PI)*(1-.35*Nt),at=[];for(let Nt=0;Nt<=16;Nt++){const ne=.5*(1-Math.cos(Nt/16*Math.PI));at.push([ne,S(ne)+H(ne)])}for(let Nt=15;Nt>=1;Nt--){const ne=at[Nt][0];at.push([ne,S(ne)-H(ne)])}const V=at.length,xt=[],K=[];for(let Nt=0;Nt<=24;Nt++){const ne=Nt/24*2-1;for(let te=0;te<V;te++){const[me,oe]=at[te],Ht=-.45/2+me*.45,re=oe*.45;xt.push(ne*1.94/2,re*Math.cos(-.1)-Ht*Math.sin(-.1)+.02*ne*ne,Ht*Math.cos(-.1)+re*Math.sin(-.1)+.03*ne*ne)}}for(let Nt=0;Nt<24;Nt++)for(let ne=0;ne<V;ne++){const te=Nt*V+ne,me=Nt*V+(ne+1)%V,oe=te+V,Ht=me+V;K.push(te,oe,me,me,oe,Ht)}const qt=new Ze;qt.setAttribute("position",new Me(xt,3)),qt.setIndex(K),qt.computeVertexNormals();const Pt=X(s,qt,u,0,.97,1.93);Pt.name="wing";for(const Nt of[1,-1]){const ne=new $r;ne.moveTo(-.45*.58,.05),ne.lineTo(.45*.6,.11),ne.lineTo(.45*.66,-.17),ne.lineTo(-.45*.2,-.09),ne.closePath();const te=new Qa(ne,{depth:.014,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1});te.translate(0,0,-.007),te.rotateY(-Math.PI/2);const me=X(s,te,u,Nt*(1.94/2+.006),.97+.03,1.93+.02);me.rotation.y=Nt*.04;const oe=.42*Nt,Ht=1.68,re=oo(Ht,.42),he=.97+.45*.11,De=new br([new Be(oe,re-.02,Ht),new Be(oe,re+.08,Ht+.1),new Be(oe,.97-.02,1.93+.17),new Be(oe,he+.05,1.93+.12),new Be(oe,he+.03,1.93+0),new Be(oe,he-.005,1.93-.06)]),_e=new js(De,28,.013,6,!1);X(s,_e,u).name="wing-strut",X(s,new rn(.03,.012,.12),u,oe,re-.002,Ht)}}const ie=[],Yt=Lb(),ce=Ps(2048,256,(A,k,rt)=>{A.fillStyle="#1b1b1e",A.fillRect(0,0,k,rt),A.fillStyle="#76787d",A.font="700 26px Arial Narrow, Arial, sans-serif",A.textBaseline="middle";for(const yt of[.75,.25])for(const _t of[60,1084])A.save(),A.translate(_t,(1-yt)*rt),A.scale(1,-1),yt<.5&&A.scale(-1,-1),A.fillText("ROADSTER   275/30 ZR21   PERFORMANCE",0,0),A.restore()}),Jt=new Di({map:ce,color:16777215,metalness:0,roughness:.62,sheen:.4,sheenRoughness:.6,sheenColor:new Vt(.25,.26,.3),envMapIntensity:.5}),ct=new Sn({color:13817564,metalness:1,roughness:.25,envMapIntensity:1.35}),ft=new Sn({color:2764083,metalness:.85,roughness:.36,envMapIntensity:1,alphaTest:.5,side:Xe}),C=new Di({color:14212322,metalness:.35,roughness:.32,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:1,emissive:new Vt(.12,.125,.135)});$.push(Jt,ct,ft,C),c(C,.45),c(Jt,.1),c(ct,.75),c(ft,.3),ft.alphaMap=Ps(256,256,(A,k,rt)=>{A.fillStyle="#fff",A.fillRect(0,0,k,rt),A.fillStyle="#000";const yt=k/2,_t=rt/2,E=k/2;for(let T=0;T<6;T++){const H=T/6*Math.PI*2+Math.PI/6-.3,S=H+.6;A.beginPath();for(let at=0;at<=8;at++){const V=H+(S-H)*at/8;A.lineTo(yt+Math.sin(V)*E*.86,_t-Math.cos(V)*E*.86)}for(let at=8;at>=0;at--){const V=H+.12+(S-H-.24)*at/8;A.lineTo(yt+Math.sin(V)*E*.42,_t-Math.cos(V)*E*.42)}A.closePath(),A.fill()}}),ft.alphaMap&&(ft.alphaMap.colorSpace=Js),m.map=Ps(256,256,(A,k,rt)=>{const yt=k/2,_t=rt/2;A.fillStyle="#9a9da2",A.fillRect(0,0,k,rt),A.strokeStyle="#2a2c30",A.lineWidth=4;for(let E=0;E<36;E++){const T=E/36*Math.PI*2;A.beginPath();for(let H=0;H<=6;H++){const S=.6+.3*H/6,at=T+.25*H/6;A.lineTo(yt+Math.cos(at)*S*k/2,_t+Math.sin(at)*S*rt/2)}A.stroke()}A.fillStyle="#1a1b1e",A.beginPath(),A.arc(yt,_t,k*.27,0,Math.PI*2),A.fill()});function b(A){const k=A?.29:.33,rt=Ss,yt=.272,_t=new an,E=new an;_t.add(E);{const oe=k/2,Ht=.032,re=[];re.push([yt-.004,oe-.022],[yt+.012,oe-.002],[yt+.04,oe+.009],[rt-.06,oe+.016],[rt-Ht-.006,oe+.01]);for(let qe=0;qe<=5;qe++){const en=qe/5*Math.PI/2;re.push([rt-Ht+Math.sin(en)*Ht,oe-Ht+Math.cos(en)*Ht+.002*Math.cos(en)])}const he=re.map(([qe,en])=>new Kt(qe,en)).reverse(),De=re.map(([qe,en])=>new Kt(qe,-en)),_e=new Ko(he,48);_e.rotateZ(-Math.PI/2);const Ue=new Ko(De,48);Ue.rotateZ(-Math.PI/2),X(E,Ho([_e,Ue]),Jt);const Ce=[];for(let qe=0;qe<=6;qe++)Ce.push(new Kt(rt+.002*Math.sin(Math.PI*qe/6),-(oe-Ht)+2*(oe-Ht)*(qe/6)));const be=new Ko(Ce,48);be.rotateZ(-Math.PI/2);{const qe=be.attributes.uv;for(let en=0;en<qe.count;en++)qe.setY(en,.5)}X(E,be,Jt)}const T=new un(yt,yt,k-.04,32,1,!0);T.rotateZ(Math.PI/2),X(E,T,r);const H=new Ds(yt,.009,6,48);H.rotateY(Math.PI/2),X(E,H,ct,k/2-.022,0,0);const S=new Ds(yt-.014,.004,5,64);S.rotateY(Math.PI/2),X(E,S,kt,k/2-.028,0,0);const at=new _a(.075,yt-.004,40);at.rotateY(Math.PI/2),X(E,at,g,-k/2+.04,0,0);const V=new gs(yt-.006,48);V.rotateY(Math.PI/2),X(E,V,C,k/2-.05,0,0);{const Ht=yt-.004,re=new $r;re.moveTo(.06,-.03),re.lineTo((.06+Ht)/2,-.021),re.lineTo(Ht,-.014),re.lineTo(Ht+.003,0),re.lineTo(Ht,.014),re.lineTo((.06+Ht)/2,.021),re.lineTo(.06,.03),re.closePath();const he=new Qa(re,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:1,steps:1,curveSegments:4}),De=he.attributes.position;for(let Ye=0;Ye<De.count;Ye++){const bn=De.getX(Ye),ge=De.getY(Ye),qn=De.getZ(Ye),Yn=fi.clamp((bn-.06)/(Ht-.06),0,1),$t=0,Se=bn*Math.cos($t)-ge*Math.sin($t),Ee=bn*Math.sin($t)+ge*Math.cos($t),Ge=qn-.02-.012*Yn+.006*Math.sin(Math.PI*Yn)*(ge>0?1:-.4);De.setXYZ(Ye,Ge,Se,Ee)}he.computeVertexNormals();const _e=(Ye,bn)=>{const ge=Ye.groups[bn],qn=new Ze;for(const Yn of["position","normal","uv"]){const $t=Ye.attributes[Yn];$t&&qn.setAttribute(Yn,new xn($t.array.slice(ge.start*$t.itemSize,(ge.start+ge.count)*$t.itemSize),$t.itemSize))}return qn},Ue=_e(he,0),Ce=_e(he,1),be=[],qe=[];for(let Ye=0;Ye<6;Ye++)be.push(Ue.clone().rotateX(Ye/6*Math.PI*2)),qe.push(Ce.clone().rotateX(Ye/6*Math.PI*2));const en=new an;E.add(en),en.position.x=k/2-.012,en.add(new ye(Ho(be),M)),en.add(new ye(Ho(qe),ct))}const xt=new un(.06,.075,.05,6);xt.rotateZ(Math.PI/2),X(E,xt,M,k/2-.045,0,0);const K=new un(.034,.034,.012,20);K.rotateZ(Math.PI/2),X(E,K,ct,k/2-.016,0,0);const qt=new Ke({map:Yt,transparent:!0,opacity:0,depthWrite:!1}),Pt=new gs(yt,32);Pt.rotateY(Math.PI/2);const Nt=X(_t,Pt,qt,k/2-.004,0,0);Nt.visible=!1;const ne=new un(.24,.24,.032,48,1,!1);ne.rotateZ(Math.PI/2),X(E,ne,m,.01,0,0);const te=new un(.1,.1,.05,24);te.rotateZ(Math.PI/2),X(E,te,r,.04,0,0);const me=X(_t,new rn(.075,.2,.1),p,.045,0,0);return me.position.set(.045,Math.cos(A?.9:2.2)*.2,Math.sin(A?.9:2.2)*.2),me.rotation.x=(A?.9:2.2)+Math.PI/2,{steer:_t,spin:E,blur:Nt,bm:qt,front:A}}for(const[A,k,rt]of[[Zd,Sr,!0],[-Zd,Sr,!0],[jd+.01,Tr,!1],[-jd-.01,Tr,!1]]){const yt=b(rt),_t=new an;_t.position.set(A,Ss,k),A<0&&(_t.scale.x=-1),_t.add(yt.steer),i.add(_t),yt.mount=_t,yt.baseY=Ss,yt.side=Math.sign(A);{const E=r;for(const[H,S]of[[.09,.5],[-.1,.56]])for(const at of[-.13,.13]){const V=X(_t,new un(.014,.014,S,6),E,-.12-S/2*.95,H,at*.6);V.rotation.z=Math.PI/2,V.rotation.y=-at*.9}const T=X(_t,new un(.035,.035,.34,8),r,-.3,.12,0);T.rotation.z=.9}ie.push(yt)}O.wheels=ie.map(A=>{const k=new vn;return k.position.set(0,-Ss,0),k.name="tyre-contact",k.userData.front=A.front,k.userData.dir=new Be(0,.3,1),A.mount.add(k),k});{const A=Ps(256,512,(K,qt,Pt)=>{K.fillStyle="#2a2c31",K.fillRect(0,0,qt,Pt);for(let Nt=0;Nt<Pt;Nt+=4)for(let ne=0;ne<qt;ne+=4)K.fillStyle=(ne+Nt)/4%2?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.05)",K.fillRect(ne,Nt,4,4);K.strokeStyle="rgba(0,0,0,0.75)",K.lineWidth=3;for(const Nt of[70,190,330,440])K.beginPath(),K.moveTo(8,Nt),K.lineTo(qt-8,Nt),K.stroke();for(const Nt of[56,qt-56])K.beginPath(),K.moveTo(Nt,8),K.lineTo(Nt,Pt-8),K.stroke();K.strokeRect(4,4,qt-8,Pt-8),K.fillStyle="rgba(160,165,175,0.55)";for(const Nt of[70,190,330,440])for(const ne of[20,56,128,qt-56,qt-20])K.beginPath(),K.arc(ne,Nt-9,2.4,0,7),K.fill()}),k=new Di({map:A,color:10133158,metalness:.25,roughness:.55,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.55});$.push(k),c(k,.12);const rt=new Mn(1.5,3.4);rt.rotateX(Math.PI/2),X(s,rt,k,0,ds+.004,.1).name="floor";const yt=X(s,new rn(.3,.06,2.5),u,0,ds+.036,-.15);yt.name="floor-tunnel";for(const K of[1,-1])X(s,new rn(.06,.03,2.2),r,.68*K,ds+.02,0);const _t=.62,E=.26,T=X(s,new rn(1.4,.012,_t),k,0,ds+.006+Math.sin(E)*_t/2,1.6+_t/2*Math.cos(E));T.rotation.x=-E;for(let K=-2;K<=2;K++){const qt=new $r;qt.moveTo(.05,0),qt.lineTo(_t*Math.cos(E),0),qt.lineTo(_t*Math.cos(E),_t*Math.sin(E)),qt.closePath();const Pt=new Pl(qt);Pt.rotateY(-Math.PI/2),X(s,Pt,u,K*.27,ds+.004,1.6)}const H=X(s,new rn(1,.02,.3),u,0,ds+.012,-1.68);H.rotation.x=.06;const S=new Ds(.06,.012,8,24);S.rotateX(Math.PI/2);const at=new gs(.05,20);at.rotateX(Math.PI/2);for(const K of[Sr-.05,Tr+.1])for(const qt of[-.72,.72])X(s,S,d,qt,ds-.002,K).name="rcs-bezel",X(s,at,fe,qt,ds+.001,K);const V=new un(Rr-.004,Rr-.004,.34,24,1,!0,0,Math.PI);V.rotateZ(Math.PI/2);const xt=new Sn({color:328966,metalness:.2,roughness:.85,side:Xe});for(const K of[Sr,Tr])for(const qt of[1,-1]){const Pt=X(s,V,xt,.78*qt,Ss,K);Pt.rotation.x=0,Pt.name="wheel-liner"}}const W=Ps(128,256,(A,k,rt)=>{const yt=A.createRadialGradient(k/2,rt/2,4,k/2,rt/2,k/2);yt.addColorStop(0,"rgba(0,0,0,0.85)"),yt.addColorStop(.6,"rgba(0,0,0,0.55)"),yt.addColorStop(1,"rgba(0,0,0,0)"),A.save(),A.scale(1,rt/k),A.fillStyle=yt,A.fillRect(0,0,k,k),A.restore()}),Z=new Ke({map:W,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),tt=X(i,new Mn(2.5,5.2),Z,0,.012,0);tt.rotation.x=-Math.PI/2,tt.renderOrder=-1;const Y=Qh([[0,"rgba(255,255,255,1)"],[.4,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),pt=X(i,new Mn(2,4.4),new Ke({map:Y,color:new Vt(.05,.35,.55),transparent:!0,blending:An,depthWrite:!1,toneMapped:!1}),0,.02,.05);pt.rotation.x=-Math.PI/2;const dt=(A,k,rt,yt)=>new $e({vertexShader:Ib,fragmentShader:Ub,transparent:!0,depthWrite:!1,side:Xe,blending:An,toneMapped:!1,uniforms:{uLevel:{value:0},uTime:{value:0},uSeed:{value:A},uColor:{value:k},uCore:{value:rt},uSmoke:{value:yt}}}),lt=new Vt(.38,.72,1).multiplyScalar(.38),Mt=new Vt(.75,.92,1.1).multiplyScalar(.55),N=new Vt(.62,.68,.76).multiplyScalar(.22),J=new Vt(.35,.6,.9).multiplyScalar(.07),Tt=new Vt(.7,.74,.8).multiplyScalar(.1),Dt=(A,k,rt=20,yt=16)=>{const _t=new un(A,k,1,rt,yt,!0);return _t.translate(0,-.5,0),_t.rotateX(-Math.PI/2),_t},ht=Qh([[0,"rgba(255,255,255,1)"],[.3,"rgba(200,235,255,0.55)"],[1,"rgba(120,190,255,0)"]]),zt=Qh([[0,"rgba(255,255,255,0.75)"],[.4,"rgba(225,232,240,0.35)"],[1,"rgba(200,210,225,0)"]]),Gt=[];{const A=Dt(.042,.2,18,18),k=Dt(.07,.42,14,10);for(const rt of O.nozzles){const yt=rt.userData.main,_t=dt(rt.position.x*3.1,lt,Mt,N),E=new an;rt.add(E),E.rotation.x=.06,E.userData.main=yt;const T=new ye(A,_t);T.frustumCulled=!1,T.renderOrder=6,E.add(T);const H=dt(rt.position.x*5.3+1,J,J,Tt),S=new ye(k,H);S.frustumCulled=!1,S.renderOrder=6,E.add(S);const at=new pl(new ja({map:ht,color:new Vt(.5,.8,1),blending:An,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));at.scale.setScalar(yt?.14:.11),at.position.z=.02,rt.add(at),T.visible=S.visible=!1,Gt.push({nz:rt,mat:_t,coreMat:H,plume:T,core:S,spr:at,main:yt,pivot:E})}}const Xt=[];O.rcs={down:[],left:[],right:[],pitchUp:[],pitchDown:[]};{const A=Dt(.05,.24,18,20),k=Dt(.08,.6,14,12),rt=new Be(0,0,1),yt=new un(.034,.024,.05,16,1,!0);yt.rotateX(Math.PI/2);const _t=new Ds(.034,.005,6,20),E=new gs(.026,16),T=new Sn({color:394759,metalness:.6,roughness:.45,side:Xe});$.push(T);let H=0;const S=(at,V,xt,K,qt)=>{const Pt=new an;Pt.position.set(V,xt,K),s.add(Pt),Pt.quaternion.setFromUnitVectors(rt,qt.clone().normalize()),Pt.userData.dir=new Be(0,0,1),H+=.37;const Nt=dt(H,lt,Mt,N),ne=new ye(A,Nt);ne.frustumCulled=!1,ne.renderOrder=6,Pt.add(ne);const te=dt(H+1.1,J,J,Tt),me=new ye(k,te);me.renderOrder=6,me.frustumCulled=!1,Pt.add(me);const oe=new pl(new ja({map:ht,color:new Vt(.55,.82,1),blending:An,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));oe.scale.setScalar(.12),oe.position.z=.03,oe.renderOrder=6,Pt.add(oe);const Ht=oe.material,re=new pl(new ja({map:zt,color:new Vt(.32,.34,.37),blending:An,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));if(re.renderOrder=6,Pt.add(re),ne.visible=oe.visible=me.visible=re.visible=!1,at==="left"||at==="right"){const he=new ye(yt,T);he.position.z=-.02,Pt.add(he);const De=new ye(_t,d);Pt.add(De);const _e=new ye(E,fe);_e.position.z=-.03,Pt.add(_e)}O.rcs[at].push(Pt),Xt.push({key:at,nz:Pt,mat:Nt,coreMat:Ht,plume:ne,core:oe,haze:me,hazeMat:te,puff:re,lvl:0})};for(const at of[Sr-.05,Tr+.1])for(const V of[-.72,.72])S("down",V,ds+.005,at,new Be(0,-1,0));for(const[at,V]of[[-1.78,En(Bn.beltY,-1.78)-.07],[1.86,.56]]){const xt=En(Bn.beltX,at)-.03;S("left",-xt,V,at,new Be(-1,.05,0)),S("right",xt,V,at,new Be(1,.05,0))}S("pitchUp",0,.22,In+.35,new Be(0,-1,0)),S("pitchUp",0,oo(Zi-.1,0)+.004,Zi-.1,new Be(0,1,0)),S("pitchDown",0,oo(In+.5,0)+.004,In+.5,new Be(0,1,0)),S("pitchDown",0,.25,Zi-.2,new Be(0,-1,0))}let U=null;n.headlight!==!1&&(U=new gm(15134463,40,45,.48,.65,1.4),U.position.set(0,.5,-2.1),U.target.position.set(0,0,-16),s.add(U,U.target)),O.camTarget=new vn,O.camTarget.position.set(0,.7,0),s.add(O.camTarget);const et=new an;et.name="roadster-trails";const it=new np(new Vt(1.5,0,.06),.022),gt=new np(new Vt(1.5,0,.06),.022);n.trails!==!1&&et.add(it.mesh,gt.mesh);function Lt(A,k,rt=new Set){A.updateMatrixWorld(!0);const yt=A.matrixWorld.clone().invert(),_t=new Map;for(const E of k)for(const T of[...E.children]){if(!T.isMesh||!T.visible||T.material.isShaderMaterial||rt.has(T)||Array.isArray(T.material)||T.onBeforeRender!==vn.prototype.onBeforeRender)continue;const H=T.material.uuid+"_"+T.renderOrder+"_"+T.visible;let S=_t.get(H);S||(S={mat:T.material,ro:T.renderOrder,vis:T.visible,list:[]},_t.set(H,S)),S.list.push(T)}for(const E of _t.values()){if(E.list.length<2)continue;const T=E.list.map(at=>{at.updateMatrixWorld(!0);let V=at.geometry.index?at.geometry.toNonIndexed():at.geometry.clone();V.attributes.normal||V.computeVertexNormals(),V.attributes.uv||V.setAttribute("uv",new Me(new Float32Array(V.attributes.position.count*2),2));for(const xt of Object.keys(V.attributes))xt!=="position"&&xt!=="normal"&&xt!=="uv"&&V.deleteAttribute(xt);return V.clearGroups(),V.applyMatrix4(new Ie().multiplyMatrices(yt,at.matrixWorld)),V}),H=Ho(T);if(!H)continue;for(const at of E.list)at.parent.remove(at),at.geometry.dispose();const S=new ye(H,E.mat);S.renderOrder=E.ro,S.visible=E.vis,S.name="merged-"+(E.list[0].name||"part"),A.add(S)}}Lt(s,[s,Ot,bt,...O.nozzles,...O.rcs.left,...O.rcs.right],new Set([Wt]));for(const A of ie)Lt(A.spin,[A.spin,...A.spin.children.filter(k=>k.isGroup)]),Lt(A.mount,[A.mount]);let Ut=n.renderer||null,jt=null,pe=n.envMap||null,Ae=null;Wt.onBeforeRender=(A,k)=>{Ut=A,jt=k};let Te=null;function tn(){const A=jt&&jt.environment;let k=null;if(Te)k=Te;else if(!A){if(!pe&&Ut)try{pe=Db(Ut)}catch{pe=null}k=pe}if(k!==Ae){for(const rt of $)rt.envMap=k,rt.needsUpdate=!0;Ae=k}}const Ct={time:0,spinAngle:0,steer:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,lastPos:null,lastVel:new Be,vel:new Be,speed:0,flyBlend:0,armed:0,jet:0,pulse:0,lights:1,plate:0,brake:0,trailFade:0,wasFlying:!1,boost:0},Zt=new Be,Pe=new ri,dn=new Be,Xn=new Be,Ni=new Be,_i=new Be;function Ln(A){let k=A;for(;k.parent;)k=k.parent;return k!==A?k:null}function Le(){it.reset(),gt.reset(),it.write(),gt.write(),Ct.lastPos=null,Ct.pitch=Ct.pitchV=Ct.roll=Ct.rollV=Ct.heave=Ct.heaveV=0,Ct.pulse=0,Ct.rollRate=0,Ct.prevQ=null,Ct.visAngle=Ct.visAngle||0,Ct.time=0,Ct.spinAngle=0,Ct.jet=0,Ct.trailFade=0,Ct.flyBlend=0,Ct.wasFlying=!1,Ct.speed=0,Ct.vel.set(0,0,0),Ct.lastVel.set(0,0,0),Q=null}const pn={};let zi=!0,Oi=!1,Q=null;function Qt(A=1/60,k){zi=!0,Oi=!1,w(A,k?Object.assign({},pn,k):pn)}function ue(A){if(A){if(Number.isFinite(A.v)&&(pn.speed=A.v),typeof A.rev=="number"&&(pn.rev=A.rev),typeof A.boostV=="number"&&(pn.boost=fi.clamp(A.boostV/9,0,1)),typeof A.thrustArm=="number"&&(pn.armed=A.thrustArm),typeof A.thrust=="number"&&(pn.thrust=A.thrust),typeof A.airborne=="boolean"&&(pn.airborne=A.airborne),typeof A.section=="string"&&(pn.flying=A.mode?A.mode==="flipAir"||A.mode==="fly":A.section==="flight"||A.section==="outro"&&!!A.airborne),A.rcs&&(pn.rcs=A.rcs),typeof A.finished=="boolean"&&(pn.brake=A.finished?1:0),zi||(Oi=!0),zi=!1,Oi){const k=Number.isFinite(A.t)?A.t:null,rt=k!==null&&Q!==null&&k>Q?k-Q:1/60;w(rt,pn)}Q=Number.isFinite(A.t)?A.t:null}}function w(A,k){if(A=Math.min(Math.max(A||0,0),.1),A===0)return;Ct.time+=A,tn(),t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(Zt,Pe,Ni),dn.set(0,0,n.forward==="+z"?1:-1).applyQuaternion(Pe),Xn.set(0,1,0).applyQuaternion(Pe);let rt=!1;Ct.lastPos&&(_i.subVectors(Zt,Ct.lastPos),_i.length()>Math.max(8,200*A)?rt=!0:Ct.vel.copy(_i).divideScalar(A)),Ct.lastPos||(Ct.lastPos=new Be),Ct.lastPos.copy(Zt),rt&&(Le(),Ct.lastPos=Zt.clone(),Ct.vel.set(0,0,0)),Ct.prevQ||(Ct.prevQ=Pe.clone());{const ge=Pe.clone().multiply(Ct.prevQ.clone().invert());ge.w<0&&(ge.x=-ge.x,ge.y=-ge.y,ge.z=-ge.z,ge.w=-ge.w);const qn=2*Math.acos(Math.min(1,ge.w)),Yn=Math.sqrt(Math.max(1e-9,1-ge.w*ge.w)),$t=rt?0:qn/A*((ge.x*dn.x+ge.y*dn.y+ge.z*dn.z)/Yn);Ct.rollRate=(Ct.rollRate||0)+((Number.isFinite($t)?$t:0)-(Ct.rollRate||0))*Math.min(1,A*12),Ct.prevQ.copy(Pe)}const yt=Ct.vel.dot(dn),_t=Number.isFinite(k.speed)?k.speed:yt;let E=Number.isFinite(k.accel)?k.accel:(_t-Ct.speed)/A;E=fi.clamp(E,-40,40),Ct.speed=_t;const T=!!(k.airborne??k.flying??k.grounded===!1),H=!!(k.flying??!1),S=fi.clamp(typeof k.rev=="number"?k.rev:0,0,1),at=typeof k.armed=="number"?k.armed:k.armed?1:0,V=fi.clamp(k.steer||0,-1,1),xt=typeof k.lights=="number"?k.lights:Ct.lights;Ct.lights+=(xt-Ct.lights)*Math.min(1,A*12);const K=typeof k.boost=="number"?k.boost:k.boost?1:0;Ct.boost+=(K-Ct.boost)*Math.min(1,A*6);const qt=typeof k.brake=="number"?k.brake:k.brake?1:0;Ct.brake+=(qt-Ct.brake)*Math.min(1,A*15);const Pt=T?_t*Math.max(0,1-Ct.flyBlend):_t;Ct.spinAngle-=Pt/Ss*A,Ct.steer+=(V*.32-Ct.steer)*Math.min(1,A*10);const Nt=Math.abs(Pt/Ss),ne=fi.clamp((Nt-25)/60,0,.32),te=Pt/Ss,me=13;Ct.visAngle=(Ct.visAngle||0)-Math.sign(te)*Math.min(Math.abs(te),me+Math.max(0,Math.abs(te)-me)*.04)*A;for(const ge of ie)ge.spin.rotation.x=Ct.visAngle,ge.steer.rotation.y=ge.front?Ct.steer*ge.side:0,ge.bm.opacity=ne,ge.blur.visible=ne>.01;Ct.flyBlend+=((T?1:0)-Ct.flyBlend)*Math.min(1,A*5),Ct.wasFlying&&!T&&q(.8),Ct.wasFlying=T;const oe=Ct.vel.dot(Xn),Ht=Ct.lastVel.dot(Xn);!T&&Ht<-4&&oe-Ht>3&&q(Math.min(2,(oe-Ht)/6)),Ct.lastVel.copy(Ct.vel);const re=T?.02:fi.clamp(E*.0028+S*.018,-.05,.06),he=T?0:fi.clamp(-V*Math.min(1,Math.abs(_t)/30)*.045,-.06,.06),De=T?0:(Math.sin(Ct.time*23)*.6+Math.sin(Ct.time*37+1.3)*.4)*(Math.min(1,Math.abs(_t)/40)*.003+S*.0035),_e=140,Ue=16;Ct.pitchV+=((re-Ct.pitch)*_e-Ct.pitchV*Ue)*A,Ct.pitch+=Ct.pitchV*A,Ct.rollV+=((he-Ct.roll)*_e-Ct.rollV*Ue)*A,Ct.roll+=Ct.rollV*A,Ct.heaveV+=((De-Ct.heave)*220-Ct.heaveV*18)*A,Ct.heave+=Ct.heaveV*A,Ct.heave<-.1&&(Ct.heave=-.1,Ct.heaveV=Math.max(0,Ct.heaveV)),s.rotation.x=Ct.pitch,s.rotation.z=Ct.roll,s.position.y=Ct.heave;const Ce=Ct.flyBlend*.06;for(const ge of ie)ge.mount.position.y=ge.baseY-Ce;Ct.armed+=(at-Ct.armed)*Math.min(1,A*4);const be=typeof k.thrust=="number"?k.thrust:k.thrust?1:0;Ct.pulse=Math.max(0,Ct.pulse-A*2.6);const qe=Math.min(1.6,Math.max(be,Ct.pulse*1.3)+Ct.armed*.12+(H?.18:0));Ct.jet+=(qe-Ct.jet)*Math.min(1,A*20),Ct.plate+=((Ct.armed>.3||H?1:0)-Ct.plate)*Math.min(1,A*6),Ot.userData.plateHinge.rotation.x=Ct.plate*1.45;const en=Math.min(1,Ct.armed*.5+Ct.jet);fe.color.setRGB(.02+en*.5,.03+en*1.2,.05+en*2.6);for(const ge of Gt){const qn=Ct.jet*(ge.main?Ct.plate:1);ge.pivot.rotation.x=.06+(H?Ct.flyBlend:0)*(ge.main?.75:.45),ge.nz.userData.dir.set(0,-Math.sin(ge.pivot.rotation.x),Math.cos(ge.pivot.rotation.x));const Yn=qn>.02;ge.plume.visible=ge.core.visible=Yn,ge.mat.uniforms.uLevel.value=Math.min(1.3,qn),ge.coreMat.uniforms.uLevel.value=Math.min(1.3,qn),ge.mat.uniforms.uTime.value=ge.coreMat.uniforms.uTime.value=Ct.time;const $t=.5+1.9*Math.min(1.3,qn)+(ge.main?.3:0);ge.plume.scale.set(1,1,$t),ge.core.scale.set(1,1,$t*1.1),ge.spr.material.opacity=Math.min(.8,en*.6)*(ge.main?Ct.plate:1),ge.spr.visible=ge.spr.material.opacity>.01}{const ge=k.rcs||{},qn=typeof ge.pitch=="number"?ge.pitch:k.jetsPitch||0,Yn={down:ge.down??k.jetsDown??0,left:ge.left??k.jetsLeft??0,right:ge.right??k.jetsRight??0,pitchUp:Math.max(0,qn),pitchDown:Math.max(0,-qn)};if(T&&Math.abs(Ct.rollRate)>1.2){const $t=fi.clamp((Math.abs(Ct.rollRate)-1.2)/2.5,0,1)*.95,Se=Ct.rollRate>0?"right":"left";Yn[Se]=Math.max(+Yn[Se]||0,$t)}for(const $t of Xt){const Se=fi.clamp(+Yn[$t.key]||0,0,1.3);$t.lvl+=(Se-$t.lvl)*Math.min(1,A*22);const Ee=$t.lvl>.03;if($t.plume.visible=$t.core.visible=$t.haze.visible=$t.puff.visible=Ee,!Ee)continue;const Ge=$t.key==="down",Nn=$t.key==="left"||$t.key==="right",wn=Math.min(1.2,$t.lvl),yi=Ge?1.2+2.8*wn:Nn?.8+1.7*wn:.5+1*wn,Ci=.85+.25*wn;$t.plume.scale.set(Ci,Ci,yi),$t.haze.scale.set(Ci,Ci,yi*1.08),$t.mat.uniforms.uLevel.value=Math.min(1.25,wn*1.1),$t.hazeMat.uniforms.uLevel.value=Math.min(1,wn),$t.coreMat.opacity=Math.min(.9,.35+wn*.5),$t.core.scale.setScalar(.1+.05*wn),$t.mat.uniforms.uTime.value=$t.hazeMat.uniforms.uTime.value=Ct.time,$t.puff.position.z=yi*1.02,$t.puff.scale.setScalar((.55+.35*wn)*(.92+.08*Math.sin(Ct.time*37+$t.nz.position.x*9))),$t.puff.material.opacity=Math.min(.5,wn*(Ge?.4:.25))}}const Ye=Ct.lights,bn=1+Ct.brake*.8+Ct.boost*.3;if(I.color.copy(_).multiplyScalar(Ye*bn),P.color.copy(D).multiplyScalar(Ye*(1+Ct.brake)),x.color.copy(F).multiplyScalar(Ye*bn),z.color.copy(R).multiplyScalar(Ye*bn),G.opacity=Ye,a.value=.25+.75*Ye,It.color.copy(mt).multiplyScalar(Ye),bt.userData.slashM&&bt.userData.slashM.color.copy(mt).multiplyScalar(1.5*Ye),bt.userData.glowM&&bt.userData.glowM.color.copy(bt.userData.glowBase).multiplyScalar(Ye),kt.color.copy(nt).multiplyScalar(Ye*(.7+.6*Ct.boost+.6*Ct.armed)),U&&(U.intensity=40*Ye),Z.opacity=.9*(1-Ct.flyBlend),pt.material.opacity=Ye*(1-Ct.flyBlend*.7),n.trails!==!1){if(!et.parent){const ge=Ln(t);ge&&ge.add(et)}if(et.parent){const ge=fi.clamp((Math.abs(_t)-6)/20,0,1)*Ye;Ct.trailFade+=(ge-Ct.trailFade)*Math.min(1,A*4),it.mat.uniforms.uOpacity.value=gt.mat.uniforms.uOpacity.value=Ct.trailFade*(1+Ct.boost*.6),Ni.set(1,0,0).applyQuaternion(Pe);const qn=et.parent.matrixWorld.clone().invert();for(const[Yn,$t]of[[it,O.tailLeft],[gt,O.tailRight]]){$t.updateWorldMatrix(!0,!1);const Se=new Be().setFromMatrixPosition($t.matrixWorld).applyMatrix4(qn);Yn.push(Se,Xn,Ni)}}}}function B(A=1){Ct.pulse=Math.min(1.5,Ct.pulse+A)}function q(A=1){Ct.heaveV-=1.35*Math.min(1.6,A),Ct.pitchV-=.45*A}function ot(A){Ct.lights=fi.clamp(A,0,1)}const j={object:t,group:t,root:t,mesh:t,body:s,chassis:i,wheels:ie,anchors:O,trails:et,dims:{length:4.5,width:2.04,height:1.14,wheelRadius:Ss,wheelBase:Tr-Sr},materials:{paint:o,trim:l,glass:f,carbon:u,tailM:I,headM:It,ringM:kt},update:Qt,thrustPulse:B,land:q,reset:Le,setLights:ot,setState:ue,setSpeed(A){Number.isFinite(A)&&(pn.speed=A)},setThrusters(A){pn.thrust=+A||0},setBoost(A){pn.boost=+A||0},setRev(A){pn.rev=+A||0},setBrake(A){pn.brake=+A||0},setEnvMap(A){A!==Te&&(Te=A||null,tn())},get speed(){return Ct.speed},dispose(){t.traverse(A=>{A.geometry&&A.geometry.dispose()}),et.traverse(A=>{A.geometry&&A.geometry.dispose()}),et.parent&&et.parent.remove(et)}};return t.userData.car=j,t.userData.thrusters=O.nozzles,j}const Ym={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class po{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ob=new Mf(-1,1,1,-1,0,1);class Bb extends Ze{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const kb=new Bb;class th{constructor(t){this._mesh=new ye(kb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ob)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hb extends po{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ys.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new th(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ip extends po{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,c;this.inverse?(a=0,c=1):(a=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Gb extends po{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Kt);this._width=i.width,this._height=i.height,e=new qi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:is}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hb(Ym),this.copyPass.material.blending=rr,this.clock=new lM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const c=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}ip!==void 0&&(a instanceof ip?i=!0:a instanceof Gb&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wb extends po{constructor(t,e,i=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Xb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class da extends po{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Kt(t.x,t.y):new Kt(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qi(o,a,{type:is}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new qi(o,a,{type:is});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new qi(o,a,{type:is});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const c=Xb;this.highPassUniforms=ys.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $e({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Kt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const r=Ym;this.copyUniforms=ys.clone(r.uniforms),this.blendMaterial=new $e({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new th(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Kt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let c=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[l].uniforms.direction.value=da.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=da.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),c=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new $e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Kt(.5,.5)},direction:{value:new Kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new $e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}da.BlurDirectionX=new Kt(1,0);da.BlurDirectionY=new Kt(0,1);const Er=59/136,qb=58.13,Yb=[["intro",0,16],["drop1",16,48],["break",48,56],["loop",56,88],["build",88,96],["flight",96,128],["outro",128,136]];function Kb(n){const t=n/Er;for(const e of Yb)if(t<e[2])return e[0];return"outro"}const Ks=n=>Math.min(1,Math.max(0,n)),tr=(n,t,e)=>{const i=Ks((e-n)/(t-n));return i*i*(3-2*i)};function $b(n){const t=n/Er;return t<16?0:t<48?.35+.6*tr(16,40,t):t<56?.55:t<88?.85:t<96?.7:t<128?.9:.9*(1-tr(128,134.5,t))}function sp(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const tu={uniforms:{tDiffuse:{value:null},uRes:{value:new Kt(1,1)},uTime:{value:0},uSpeed:{value:0},uCA:{value:0},uExposure:{value:1},uVignette:{value:.55},uGrain:{value:.045},uFlash:{value:0},uFlashColor:{value:new Vt(1,1,1)},uSat:{value:1.12},uContrast:{value:1.08},uShadowTint:{value:new Vt(.012,.006,.03)},uCenter:{value:new Kt(.5,.56)},uCar:{value:new Kt(.5,.4)}},vertexShader:`
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
  `};class jb extends po{constructor(){super(),this.uniforms=ys.clone(tu.uniforms),this.material=new $e({uniforms:this.uniforms,vertexShader:tu.vertexShader,fragmentShader:tu.fragmentShader,depthTest:!1,depthWrite:!1}),this.fsQuad=new th(this.material)}setSize(t,e){this.uniforms.uRes.value.set(t,e)}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zb extends po{constructor(){super(),this.uniforms={tDiffuse:{value:null},uMax:{value:24}},this.material=new $e({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
          c.rgb = max(c.rgb, vec3(0.0));
          float m = max(c.r, max(c.g, c.b));
          if (m > uMax) c.rgb *= uMax / m;
          gl_FragColor = c;
        }
      `,depthTest:!1,depthWrite:!1}),this.fsQuad=new th(this.material)}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Zn=2400;function Jb(){const n=new vm;n.setAttribute("position",new Me([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),n.setIndex([0,1,2,0,2,3]);const t=new vs(new Float32Array(Zn*3),3),e=new vs(new Float32Array(Zn*3),3),i=new vs(new Float32Array(Zn*4),4),s=new vs(new Float32Array(Zn*2),2);for(const l of[t,e,i,s])l.setUsage(Ns);n.setAttribute("iPos",t),n.setAttribute("iVel",e),n.setAttribute("iCol",i),n.setAttribute("iSz",s),n.instanceCount=0;const o=new $e({uniforms:{uResY:{value:1920},uAspect:{value:.5625},uMinPx:{value:1.6}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:An}),a=new ye(n,o);a.frustumCulled=!1,a.renderOrder=10,a.name="fx.particles";const c={n:0,pos:new Float32Array(Zn*3),vel:new Float32Array(Zn*3),col0:new Float32Array(Zn*3),col1:new Float32Array(Zn*3),life:new Float32Array(Zn),age:new Float32Array(Zn),size0:new Float32Array(Zn),size1:new Float32Array(Zn),stretch:new Float32Array(Zn),grav:new Float32Array(Zn),drag:new Float32Array(Zn),floor:new Float32Array(Zn)};return{mesh:a,mat:o,quad:n,iPos:t,iVel:e,iCol:i,iSz:s,P:c}}const rc=90;function Qb(n){const t=new Mn(1,1,1,1);t.translate(0,.5,0),t.rotateX(-Math.PI/2);const e=new $e({uniforms:{uAlpha:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Xe,blending:An}),i=new qu(t,e,rc);i.instanceMatrix.setUsage(Ns),i.frustumCulled=!1,i.renderOrder=9,i.name="fx.streaks";const s=new Float32Array(rc*3),o=[[.5,1.7,2.6],[2.2,.5,1.9],[2.2,2.3,2.6],[2.4,1.1,.35]],a=[];for(let l=0;l<rc;l++){const h=o[l%7===0?3:l%3];s.set(h,l*3),a.push({th:n()*Math.PI*2,r:3.4+n()*6,z:-n()*60,v:.7+n()*.6,w:.006+n()*.009})}t.setAttribute("aCol",new vs(s,3));const c=new an;return c.name="fx.streakRig",c.add(i),{group:c,mesh:i,mat:e,S:a}}const Km=10;function tw(){const n=new _a(.9,1,128,1),t=[],e=new an;e.name="fx.rings";for(let i=0;i<Km;i++){const s=new $e({uniforms:{uCol:{value:new Vt},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uCol; uniform float uA; varying vec2 vUv;
        void main(){ float r = length(vUv - 0.5) * 2.0; float e = 1.0 - abs((r - 0.95) / 0.05);
          e = clamp(e, 0.0, 1.0); gl_FragColor = vec4(uCol * e * uA, e * uA); }
      `,transparent:!0,depthWrite:!1,side:Xe,blending:An}),o=new ye(n,s);o.visible=!1,o.frustumCulled=!1,o.renderOrder=8,e.add(o),t.push({m:o,age:0,life:0,r0:1})}return{group:e,list:t,next:0}}const Zs=5600;function ew(){const n=new Mn(1,1),t=new vm;t.index=n.index,t.attributes.position=n.attributes.position,t.attributes.uv=n.attributes.uv;const e=new vs(new Float32Array(Zs*3),3);e.setUsage(Ns);const i=new vs(new Float32Array(Zs*4),4);i.setUsage(Ns);const s=new vs(new Float32Array(Zs*2),2);s.setUsage(Ns),t.setAttribute("iPos",e),t.setAttribute("iPar",i),t.setAttribute("iExt",s),t.instanceCount=0;const o=ys.merge([de.fog,{uKey:{value:new Vt(1.9,1.96,2.06)},uFill:{value:new Vt(.2,.32,.62)},uRed:{value:new Vt(1.6,.16,.24)},uAmb:{value:new Vt(.2,.21,.24)},uKeyDir:{value:new L(-.35,1,.3).normalize()},uFillDir:{value:new L(.6,-.35,-.4).normalize()},uRedDir:{value:new L(-1,-.15,.1).normalize()},uCam:{value:new L},uCarInv:{value:new Ie},uCarOn:{value:0},uFloorY:{value:0},uProtect:{value:1}}]),a=new $e({uniforms:o,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
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
      }`}),c=new ye(t,a);return c.frustumCulled=!1,c.renderOrder=5,c.name="fx.smoke",{mesh:c,geo:t,mat:a,iPos:e,iPar:i,iExt:s,ord:new Uint16Array(Zs),key:new Float32Array(Zs),tmp:new Float32Array(Zs*9)}}const ii=new L,Fa=new L,Mr=new L,rl=new L,rp=new L;function Ts(n){const t=Math.sin(n*912.73+17.31)*43758.5453;return t-Math.floor(t)}function eu(n,t,e,i){const s=i-e.t0;if(s<0||s>=e.life)return!1;const o=e.k??1.7,a=1-Math.exp(-o*s),c=a/o,l=e.r0+(e.r1-e.r0)*(1-Math.exp(-1.25*s));let h=e.y+e.vy*c+(e.rise??.28)*s;h=Math.max(h,l*.32),e.ymax!=null&&(h=Math.min(h,e.ymax));const r=Math.min(1,s/(e.fin??.12))*Math.pow(1-s/e.life,1.4);return n[t]=e.x+e.vx*c,n[t+1]=h,n[t+2]=e.z+e.vz*c,n[t+3]=l,n[t+4]=(e.a??.55)*r,n[t+5]=e.seed*6.283+s*(e.seed-.5)*.6,n[t+6]=e.seed,n[t+7]=s/e.life,n[t+8]=e.kind||0,!0}const hi={t0:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,r0:0,r1:0,life:1,a:.5,seed:0,k:1.4,rise:.03,kind:1,ymax:1.2,fin:.2},of=new L(1e5,0,0),ui={t0:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,r0:0,r1:0,life:1,a:.5,seed:0,k:1.2,rise:.4,kind:1,ymax:3,fin:.35};function op(n,t=0){if(n.kind!==1)return null;if(t===1){if(Ts(n.seed*4.1+.3)>.06)return null;const v=Ts(n.seed*6.7+2.1),g=Ts(n.seed*8.3+5.5),m=Math.hypot(n.vx,n.vz)||1,p=Math.min(1,4.5/m)*(.6+.3*v);return ui.t0=n.t0+.1+.3*g,ui.x=n.x,ui.z=n.z,ui.y=.5,ui.vx=n.vx*p,ui.vz=n.vz*p,ui.vy=2+1.2*v,ui.k=1.3,ui.r0=.8,ui.r1=2.5+.5*g,ui.life=5+1.5*v,ui.a=.5,ui.rise=.32+.16*g,ui.ymax=2.4+.6*v,ui.seed=Ts(n.seed*17.3+.7),ui}if(Ts(n.seed*3.7+.11)>.28)return null;const i=Ts(n.seed*5.3+1.7),s=Ts(n.seed*9.1+4.2),o=Ts(n.seed*2.3+8.8),a=(i-.5)*1.3,c=Math.cos(a),l=Math.sin(a);let h=of.x-n.x,r=of.z-n.z;const u=Math.hypot(h,r);if(u>.5)h/=u,r/=u;else{const v=Math.hypot(n.vx,n.vz)||1;h=-n.vx/v,r=-n.vz/v}const f=Math.min(.35+.45*o,1)*Math.min(Math.hypot(n.vx,n.vz)||3,1.8+2.7*o);hi.t0=n.t0-.15+.25*s,hi.x=n.x,hi.z=n.z,hi.vx=(h*c-r*l)*f,hi.vz=(h*l+r*c)*f;const d=s<.4;return hi.vy=d?.35+.6*i:.15+.25*i,hi.r0=d?.18:.35+.2*i,hi.r1=d?.3+.5*o:.9+.8*o,hi.y=.2+.35*i,hi.ymax=d?1.3+.6*o:.85+.35*o,hi.life=n.life*(.65+.3*o),hi.a=d?.55:.62,hi.seed=Ts(n.seed*13.7+2.9),hi.k=(n.k??1.4)*1.1,hi.rise=d?.12+.2*s:.03+.06*s,hi}const nw=new Ie;function iw(n,t,e,i,s,o,a){let c=0;const l=n.tmp;if(i&&i.getWorldPosition(of),e!=null){for(const d of[t,a])if(!(!d||!d.length))for(let v=0;v<d.length&&c<Zs;v++){const g=d[v];if(eu(l,c*9,g,e)&&c++,g.kind===1){if(c<Zs){const m=op(g,0);m&&eu(l,c*9,m,e)&&c++}if(c<Zs){const m=op(g,1);m&&eu(l,c*9,m,e)&&c++}}}}const h=n.mat.uniforms;if(i&&(i.getWorldPosition(ii),h.uCam.value.copy(ii)),o&&o.isObject3D?(o.updateWorldMatrix(!0,!1),h.uCarInv.value.copy(nw.copy(o.matrixWorld).invert()),h.uCarOn.value=1):h.uCarOn.value=0,c>0&&i&&s){i.getWorldPosition(ii),i.getWorldDirection(Fa),Mr.copy(s),Mr.y+=.55;const d=Mr.x-ii.x,v=Mr.y-ii.y,g=Mr.z-ii.z,m=Math.hypot(d,v,g);if(m>.5){const p=d/m,y=v/m,M=g/m;for(let _=0;_<c;_++){const D=_*9,I=l[D]-ii.x,P=l[D+1]-ii.y,F=l[D+2]-ii.z,R=I*p+P*y+F*M;if(R>m){Math.hypot(l[D]-Mr.x,l[D+1]-Mr.y,l[D+2]-Mr.z)<l[D+3]*.9+2.6&&(l[D+8]+=2);continue}if(R<0)continue;{const se=Math.min(1,Math.max(0,(R-m*.35)/(m*.35)));l[D+4]*=se*se*(3-2*se)}const x=I-p*R,z=P-y*R,G=F-M*R,st=Math.hypot(x,z,G)*(m/Math.max(.5,R)),vt=l[D+3]*.85*(m/Math.max(.5,R))+2.4;if(st>=vt)continue;l[D+8]+=2;const Rt=Math.max(0,(st/vt-.72)/.28),mt=Rt*Rt*(3-2*Rt),It=l[D+1]+l[D+3]*.55,nt=Math.min(Math.max(1.2,s.y+.62),s.y+.85),kt=It<nt?1:It<nt+.5?1-.65*(It-nt)/.5:.35;l[D+4]*=kt+(1-kt)*mt}}}{let d=0;for(let v=0;v<c;v++)l[v*9+4]>.012&&(n.ord[d++]=v);c=d}if(c>1&&i){i.getWorldPosition(ii),i.getWorldDirection(Fa);for(let g=0;g<c;g++){const m=n.ord[g],p=m*9;n.key[m]=(l[p]-ii.x)*Fa.x+(l[p+1]-ii.y)*Fa.y+(l[p+2]-ii.z)*Fa.z}const d=n.ord.subarray(0,c),v=n.key;d.sort((g,m)=>v[m]-v[g])}const r=n.iPos.array,u=n.iPar.array,f=n.iExt.array;for(let d=0;d<c;d++){const v=n.ord[d]*9;r[d*3]=l[v],r[d*3+1]=l[v+1],r[d*3+2]=l[v+2],u[d*4]=l[v+3],u[d*4+1]=l[v+4],u[d*4+2]=l[v+5],u[d*4+3]=l[v+6],f[d*2]=l[v+7],f[d*2+1]=l[v+8]}n.geo.instanceCount=c,n.mesh.visible=c>0,n.iPos.needsUpdate=!0,n.iPar.needsUpdate=!0,n.iExt.needsUpdate=!0}const Oo=40,pa=18,Wo=(pa+1)*2;function sw(){const n=new Ze,t=new xn(new Float32Array(Oo*Wo*3),3);t.setUsage(Ns);const e=new xn(new Float32Array(Oo*Wo*4),4);e.setUsage(Ns);const i=new xn(new Float32Array(Oo*Wo*2),2);i.setUsage(Ns),n.setAttribute("position",t),n.setAttribute("aJ",e),n.setAttribute("aK",i);const s=new Uint16Array(Oo*pa*6);let o=0;for(let l=0;l<Oo;l++)for(let h=0;h<pa;h++){const r=l*Wo+h*2;s[o++]=r,s[o++]=r+1,s[o++]=r+2,s[o++]=r+1,s[o++]=r+3,s[o++]=r+2}n.setIndex(new xn(s,1)),n.setDrawRange(0,0);const a=new $e({uniforms:{uT:{value:0},uCore:{value:new Vt(1.15,1.55,1.9)},uEdge:{value:new Vt(.24,.56,1.2)},uTail:{value:new Vt(.36,.42,.56)}},transparent:!0,depthWrite:!1,toneMapped:!1,side:Xe,blending:Ep,blendSrc:Ap,blendDst:Tl,vertexShader:`
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
      }`}),c=new ye(n,a);return c.frustumCulled=!1,c.renderOrder=4,c.name="fx.jets",{mesh:c,geo:n,mat:a,pos:t,aJ:e,aK:i,n:0}}function ap(n){const t=Math.floor(n),e=n-t,i=e*e*(3-2*e),s=o=>{const a=Math.sin(o*127.1+311.7)*43758.5453;return a-Math.floor(a)};return s(t)*(1-i)+s(t+1)*i-.5}const nu=new L,ls=new L,cp=new ri,Vr=new L,lp=new L,Na=new L,Wr=new L,hp=new L,up=new L,fp=new L,rw=new L,dp=new WeakMap;function ow(n){if(!n||!n.anchors)return;let t=dp.get(n);if(!t){t=[];const e=s=>s.isMesh&&s.material&&s.material.isShaderMaterial||s.isSprite&&s.material&&s.material.color&&s.material.color.b<.5;for(const s of n.anchors.nozzles||[])for(const o of s.children)o.isGroup&&o.children.length&&o.children.every(a=>a.isMesh&&a.material&&a.material.isShaderMaterial)&&t.push(o);const i=n.anchors.rcs||{};for(const s of Object.values(i))if(Array.isArray(s))for(const o of s)for(const a of o.children)e(a)&&t.push(a);dp.set(n,t)}for(const e of t)e.visible=!1}function iu(n,t,e,i,s,o,a,c,l,h,r=0,u=1,f=null,d=0){if(n.n>=Oo||(t.getWorldPosition(nu),t.getWorldQuaternion(cp),ls.copy(t.userData.dir||Vr.set(0,0,1)).applyQuaternion(cp).normalize(),d===1?e*=tr(.35,.75,-ls.y):d===2&&(e*=1-tr(.45,.8,Math.abs(ls.y))),e<.05))return;f&&ls.add(f).normalize();let v=i;if(l&&ls.y<-.4&&(v=Math.min(i,Math.max(.05,(nu.y-.02)/-ls.y))),v<.06)return;Vr.set(0,1,0),Math.abs(ls.y)>.9&&Vr.set(1,0,0),Vr.cross(ls).normalize(),lp.copy(ls).cross(Vr).normalize();const g=n.pos.array,m=n.aJ.array,p=n.aK.array,y=n.n*Wo;for(let M=0;M<=pa;M++){const _=M/pa,D=_*v,I=D/i,P=.11*I*I*u,F=ap(a*1.6-D*.35+c*7.1)*P,R=ap(a*1.3-D*.3+c*3.3+40)*P;Na.copy(nu).addScaledVector(ls,D).addScaledVector(Vr,F).addScaledVector(lp,R),hp.subVectors(h,Na),Wr.crossVectors(ls,hp),Wr.lengthSq()<1e-8&&Wr.copy(Vr),Wr.normalize();const x=s+(o-s)*Math.pow(I,.85);for(let z=0;z<2;z++){const G=y+M*2+z,st=z?1:-1;g[G*3]=Na.x+Wr.x*x*st,g[G*3+1]=Na.y+Wr.y*x*st,g[G*3+2]=Na.z+Wr.z*x*st,m[G*4]=I,m[G*4+1]=st,m[G*4+2]=e,m[G*4+3]=c,p[G*2]=i,p[G*2+1]=r}}n.n++}function aw(n,t,e){const i=n&&n.isWebGLRenderer?{renderer:n,scene:t,camera:e}:n||{},s=i.renderer;let o=i.scene,a=i.camera;if(!s)throw new Error("createFX: renderer required");const c={exposure:1,bloomStrength:.9,bloomRadius:0,bloomThreshold:1,bloomKnee:.5,bloomLimit:.9,vignette:.5,grain:.04,saturation:1.12,contrast:1.07,caBase:0,speedBlur:1,streaks:1,fovPunchDeg:9,shakeAmp:.22,ownCamera:i.ownCamera===!0,autoTimeline:i.autoTimeline!==!1};let l=sp(1337);const h=new Kt;s.getSize(h);const r=s.getPixelRatio(),u=new qi(Math.max(1,h.x*r),Math.max(1,h.y*r),{type:is,samples:Math.min(4,s.capabilities.maxSamples||0)});u.texture.name="fx.rt";const f=new Vb(s,u);f.setPixelRatio(r),f.setSize(Math.max(1,h.x),Math.max(1,h.y));const d=new Wb(o,a);f.addPass(d);const v=new Zb;f.addPass(v);const g=new da(new Kt(h.x*r,h.y*r),c.bloomStrength,c.bloomRadius,c.bloomThreshold);g.highPassUniforms.smoothWidth.value=c.bloomKnee;try{const Q=g.compositeMaterial.uniforms.bloomFactors;Q&&Array.isArray(Q.value)&&(Q.value=[1,.9,.62,.36,.2])}catch{}try{if(g.copyUniforms&&g.blendMaterial){g.copyUniforms.uLimit={value:c.bloomLimit};const Q=g.blendMaterial;g.blendMaterial=new $e({uniforms:g.copyUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
          uniform sampler2D tDiffuse; uniform float opacity; uniform float uLimit; varying vec2 vUv;
          void main() {
            vec3 b = max(texture2D(tDiffuse, vUv).rgb, vec3(0.0));
            float m = max(b.r, max(b.g, b.b));
            b *= 1.0 / (1.0 + m / uLimit);
            gl_FragColor = vec4(b * opacity, 1.0);
          }
        `,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),Q.dispose()}}catch{}f.addPass(g);const m=new jb;m.setSize(h.x*r,h.y*r),f.addPass(m);let p=h.x,y=h.y,M=r;const _=Jb(),D=Qb(l),I=tw(),P=new an;P.name="fx.root";const F=ew(),R=sw();P.add(_.mesh,D.group,I.group,F.mesh,R.mesh),o&&o.add(P);const x={ca:0,shake:0,fov:0,fovV:0,flash:0,flashColor:new Vt(1,1,1),bloomKick:0,streakKick:0,simT:0,lastT:null,speed:0,boost:0,explicit:{},autoDone:{},lastBeat:-1,gpFlash:0,gpCA:0,timeScale:1,extSpeed:null},z=new L,G=new L,st=new L,vt=new ri,Rt=new Ie,mt=new L(1,1,1),It=new Fi;let nt={};function kt(){try{return typeof window<"u"&&window.__game||null}catch{return null}}let se=()=>null;function fe(Q){const Qt=se();return Qt?Qt.getWorldPosition(Q):a?(a.getWorldDirection(st),Q.copy(a.position).addScaledVector(st,6).setY(0)):Q.set(0,0,0)}function le(Q,Qt,ue,w,B,q,ot,j,A,k,rt,yt,_t,E,T){const H=_.P;let S;H.n<Zn?S=H.n++:S=Math.floor(l()*Zn),H.pos[S*3]=Q,H.pos[S*3+1]=Qt,H.pos[S*3+2]=ue,H.vel[S*3]=w,H.vel[S*3+1]=B,H.vel[S*3+2]=q,H.life[S]=ot,H.age[S]=0,H.size0[S]=j,H.size1[S]=A,H.col0[S*3]=k[0],H.col0[S*3+1]=k[1],H.col0[S*3+2]=k[2],H.col1[S*3]=rt[0],H.col1[S*3+1]=rt[1],H.col1[S*3+2]=rt[2],H.stretch[S]=yt,H.grav[S]=_t,H.drag[S]=E,H.floor[S]=T===void 0?-1e9:T}const ut=[7,4.4,2],$=[2.6,.55,.08];function X(Q,Qt=1,ue,w=ut,B=$){const q=Q||fe(G),ot=Math.round(70*Qt),j=(ue?ue.x*8:0)+bt.x*.3,A=ue?ue.y*8:0,k=(ue?ue.z*8:0)+bt.z*.3;for(let rt=0;rt<ot;rt++){const yt=l()*Math.PI*2,_t=(4+l()*11)*(.6+.4*Qt),E=.3+l()*.9;le(q.x+(l()-.5)*1.6,q.y+.05,q.z+(l()-.5)*2,Math.cos(yt)*_t+j,E*_t*.7+A,Math.sin(yt)*_t+k,.25+l()*.5,.045+l()*.035,.012,w,B,.035,-22,1.6,q.y)}for(let rt=0;rt<Math.round(8*Qt);rt++)le(q.x+(l()-.5)*1.2,q.y+.1,q.z+(l()-.5)*1.2,(l()-.5)*3+j,1+l()*2,(l()-.5)*3+k,.4+l()*.3,.18,.02,[5,2.5,.8],[1.2,.2,.05],0,-4,2.5,q.y)}const Et=[1.2,2.4,4.4],At=[.15,.55,2],St=[.3,1.15,3.2],Ft=[.02,.1,.55],Wt=[.08,.22,.6],ae=[0,.02,.12],bt=new L,Ot=new L;let O=!1;function ie(Q,Qt,ue=1,w){if(!Q)return;const B=Qt||st.set(0,0,1),q=w||bt,ot=Math.max(1,Math.round(5*ue));for(let j=0;j<ot;j++){const A=16+l()*10,k=.5+1.2*l(),rt=l()*.016;le(Q.x+B.x*A*rt,Q.y+B.y*A*rt,Q.z+B.z*A*rt,q.x+B.x*A+(l()-.5)*k,q.y+B.y*A+(l()-.5)*k,q.z+B.z*A+(l()-.5)*k,.12+l()*.14,.022+.018*ue,.075,St,Ft,.045,0,3)}l()<.6&&le(Q.x,Q.y,Q.z,q.x+B.x*7,q.y+B.y*7,q.z+B.z*7,.18,.05+.04*ue,.26,Wt,ae,.02,0,2.5),le(Q.x,Q.y,Q.z,q.x+B.x*9,q.y+B.y*9,q.z+B.z*9,.04,.028*ue+.012,.02,Et,At,.03,0,0)}function Yt(Q,Qt,ue,w=4){const B=I.list[I.next];I.next=(I.next+1)%Km;const q=Q||fe(G);B.m.position.copy(q),Qt?B.m.quaternion.copy(Qt):a&&B.m.quaternion.copy(a.quaternion);const ot=ue?new Vt(ue):new Vt(.3,2.4,3.2);B.m.material.uniforms.uCol.value.copy(ot).multiplyScalar(ot.r+ot.g+ot.b<3.2?2.5:1),B.m.visible=!0,B.age=0,B.life=.55,B.r0=w;const j=B.m.material.uniforms.uCol.value,A=[j.r*1.4,j.g*1.4,j.b*1.4],k=[j.r*.2,j.g*.2,j.b*.2];vt.copy(B.m.quaternion);for(let rt=0;rt<48;rt++){const yt=rt/48*Math.PI*2+l()*.1;st.set(Math.cos(yt),Math.sin(yt),0).applyQuaternion(vt);const _t=3+l()*4;le(q.x+st.x*w,q.y+st.y*w,q.z+st.z*w,st.x*_t,st.y*_t,st.z*_t,.4+l()*.3,.06,.01,A,k,.05,0,2.2)}x.bloomKick=Math.max(x.bloomKick,.35)}function ce(Q=1){x.ca=Math.min(1.5,x.ca+.8*Q),x.shake=Math.min(1.5,x.shake+.6*Q)}function Jt(Q=1){x.shake=Math.min(1.5,x.shake+Q),x.ca=Math.min(1.5,Math.max(x.ca,.25*Q))}function ct(Q=1){x.ca=Math.min(1.5,Math.max(x.ca,Q))}function ft(Q){x.extSpeed=Q==null?null:Ks(+Q||0)}function C(Q){x.timeScale=+Q||1}function b(Q=1){x.fovV+=c.fovPunchDeg*14*Q}function W(Q=1,Qt){x.flash=Math.max(x.flash,Q),x.flashColor.set(Qt===void 0?16777215:Qt)}function Z(Q=1){x.bloomKick=Math.max(x.bloomKick,.22*Q)}function tt(Q=1){b(Q),x.ca=Math.min(1.5,x.ca+.35*Q),x.streakKick=Math.max(x.streakKick,.6*Q),x.bloomKick=Math.max(x.bloomKick,.3*Q)}function Y(Q,Qt=1){X(Q,Qt),ce(.55*Qt),W(.08*Qt,16766880)}function pt(Q,Qt=1){X(Q,.8*Qt,null,[6,1.2,4.5],[1.5,.05,1.2]),ce(1.2*Qt),W(.12*Qt,16727240)}function dt(Q=1){x.explicit.finish=!0,W(Q,16777215),x.bloomKick=Math.max(x.bloomKick,1.2),x.ca=Math.min(1.5,x.ca+.6),b(.6);const Qt=fe(z);Qt.y+=.6,Yt(Qt,a?a.quaternion:null,16777215,2.5),Yt(Qt,a?a.quaternion:null,16727240,4),X(Qt,.9,null,[6,6,7],[1.6,.2,1.4])}function lt(){_.P.n=0,_.quad.instanceCount=0,O=!1,bt.set(0,0,0),Ut=null,x.ca=x.shake=x.fov=x.fovV=x.flash=x.bloomKick=x.streakKick=0,x.autoDone={},x.lastBeat=-1,x.simT=0;for(const Q of I.list)Q.m.visible=!1,Q.age=Q.life=0;l=sp(1337)}function Mt(Q,Qt){if(!c.autoTimeline||Q==null)return;const ue=(w,B,q)=>{!x.autoDone[w]&&Q>=B&&Q-B<.5+Qt?(x.autoDone[w]=!0,x.explicit[w]||q()):Q>=B+.5+Qt&&(x.autoDone[w]=!0)};ue("launch",16*Er,()=>{tt(1),ce(.4),X(null,.6,st.set(0,0,0))}),ue("checkpoint",48*Er,()=>{Yt(null,null,4253951,5),W(.15,8450303)}),ue("liftoff",96*Er,()=>{tt(1.1)}),ue("touchdown",128*Er+1,()=>{Y(null,.8)}),ue("finish",qb,()=>dt(.9)),dn(Q)}function N(Q){const Qt=[Q&&Q.gp,Q&&Q.gameplay,Q&&Q.S],ue=kt();ue&&Qt.push(ue.gp,ue.gameplay,ue.state);for(const w of Qt){if(!w)continue;const B=w.state&&typeof w.state=="object"&&"t"in w.state?w.state:w;if(B&&typeof B=="object"&&typeof B.t=="number"&&Array.isArray(B.events))return B}return Q&&typeof Q.t=="number"&&Array.isArray(Q.events)?Q:null}function J(Q){if(!Q)return null;if(Q.isObject3D)return Q;for(const Qt of["object","root","group","object3d","mesh"])if(Q[Qt]&&Q[Qt].isObject3D)return Q[Qt];return null}se=function(){const Q=kt();return J(nt.car)||J(Q&&Q.car)||null};function Tt(Q){const Qt=kt(),ue=(nt.car&&!nt.car.isObject3D?nt.car:null)||Q&&Q.userData&&Q.userData.car||(Qt&&Qt.car&&!Qt.car.isObject3D?Qt.car:null);return ue&&ue.anchors&&Array.isArray(ue.anchors.nozzles)?ue.anchors.nozzles:Q&&Q.userData&&Array.isArray(Q.userData.thrusters)?Q.userData.thrusters:null}let Dt=new WeakSet,ht=null;const zt=new L,Gt=new ri,Xt=new L(0,0,1);function U(Q,Qt,ue){return Q&&Q.pos&&Q.pos.isVector3?(ue.copy(Q.pos),Qt>0&&Q.fwd&&Q.fwd.isVector3&&ue.addScaledVector(Q.fwd,-(Q.v||0)*Qt),ue):fe(ue)}function et(Q,Qt,ue){const w=Q.type,B=U(Qt,ue,zt),q=Qt&&typeof Qt.landImpact=="number"?Qt.landImpact:.6;switch(w){case"launch":{const ot=Q.rating==="PERFECT";Q.rating!=="EARLY"&&(st.set(0,0,0),X(B,ot?.9:.5,null),x.streakKick=Math.max(x.streakKick,ot?.9:.5),x.bloomKick=Math.max(x.bloomKick,.5),x.ca=Math.min(1.5,x.ca+.45));break}case"shift":Q.perfect&&(x.streakKick=Math.max(x.streakKick,.45),x.bloomKick=Math.max(x.bloomKick,.3),x.ca+=.15);break;case"land":case"landing":X(B,.5+.4*q);break;case"touchdown":X(B,.3+.2*q);break;case"scrape":X(B,.45,null,[5,3.2,1.6],[1.6,.3,.06]);break;case"hit":case"bounce":case"pylon":X(G.copy(B).add(st.set(0,.5,0)),.7,null,[6,1.4,4.5],[1.4,.05,1.1]),x.flashColor.set(16734930);break;case"ring":{Qt&&Qt.fwd&&Qt.fwd.isVector3?Gt.setFromUnitVectors(Xt,Qt.fwd):a&&Gt.copy(a.quaternion);const ot=Q.text==="BULLSEYE";Yt(B,Gt,ot?16757818:3203327,3.2);break}case"checkpoint":{Qt&&Qt.fwd&&Qt.fwd.isVector3?Gt.setFromUnitVectors(Xt,Qt.fwd):a&&Gt.copy(a.quaternion),Yt(B,Gt,4253951,5.5),x.bloomKick=Math.max(x.bloomKick,.3);break}case"flies":case"boost":x.streakKick=Math.max(x.streakKick,1),x.bloomKick=Math.max(x.bloomKick,.35);break;case"boostready":x.bloomKick=Math.max(x.bloomKick,.5);break;case"loop":case"upside":x.streakKick=Math.max(x.streakKick,.5);break;case"fleet":x.bloomKick=Math.max(x.bloomKick,.4);break;case"finish":x.explicit.finish=!0,dt(.95);break}}function it(Q,Qt,ue){const w=[];if(!Q||!Array.isArray(Q.events))return w;for(const B of Q.events)!B||typeof B!="object"||Dt.has(B)||(Dt.add(B),!(typeof B.t=="number"&&Qt-B.t>ue)&&w.push(B));return w.sort((B,q)=>(B.t||0)-(q.t||0)),w}const gt=new WeakMap;let Lt=[],Ut=null;function jt(Q,Qt){const ue=[];a?a.getWorldPosition(ii):ii.set(Qt.x+8,2,Qt.z);let w=ii.x-Qt.x,B=ii.z-Qt.z;const q=Math.hypot(w,B)||1;w/=q,B/=q;const ot=170;for(let j=0;j<ot;j++){const A=at=>Ts(j*1.618+at*7.77+Q*.013);let k=A(1)*Math.PI*2;const rt=j<60?0:j<105?1:j<125?2:j<155?3:4;rt===3&&(k=(j-125)/30*Math.PI*2+A(1)*.2),rt===4&&(k=Math.atan2(B,w)+(A(1)-.5)*1.6);const yt=Math.cos(k),_t=Math.sin(k),E=(A(2)-.5)*1.6,T=(A(3)-.5)*3.2,H=rt===0?2.4+3.6*A(4):rt===1?1+2*A(4):rt===2?.4+.6*A(4):rt===3?6+4*A(4):1.2+1.6*A(4),S=A(5)<.3;ue.push({t0:Q-.12+(rt===3?.05*A(6):.35*A(6)*(rt===0?.5:1)),x:Qt.x+E*(rt===3?.3:1),y:rt===2?.3:.15+.2*A(7),z:Qt.z+T*(rt===3?.5:1),vx:yt*H,vy:rt===0?.2+.4*A(8):rt===1?.7+.9*A(8):rt===3?.3+.3*A(8):rt===4?.3+.4*A(8):1+1.2*A(8),vz:_t*H,r0:S?.2:.4+.2*A(9),r1:rt===3?.8+.7*A(10):rt===4?.4+.5*A(10):S?.35+.4*A(10):rt===0?.9+.9*A(10):1.1+1*A(10),life:rt===3?1.6+.8*A(11):2.4+1.6*A(11),a:rt===2?.45:rt===3?.6:.55,seed:A(12),k:rt===3?2.2:1.3+.4*A(13),rise:rt===1?.12+.15*A(14):rt===4?.1+.1*A(14):.05+.08*A(14),kind:1,ymax:rt===4?.9:void 0})}return ue}function pe(Q){if(Lt.length=0,!Q||!Array.isArray(Q.events))return Lt;let Qt=!1;for(const w of Q.events){if(!w||w.type!=="softland"&&w.type!=="hardland"||w.where!=="fleet"||Q.t-w.t>7)continue;Qt=!0;let B=gt.get(w);B||(Ut&&Math.abs(Ut.t-w.t)<.2?B=Ut.L:B=jt(w.t,U(Q,Math.max(0,Q.t-w.t),new L)),gt.set(w,B));for(const q of B)Ae(q)}const ue=mi&&mi.fleetLand;if(!Qt&&typeof ue=="number"&&Q.mode==="jump"&&Q.t>ue-.16&&Q.t<ue+.3){if(!Ut||Math.abs(Ut.t-ue)>1e-6){const w=U(Q,0,new L);Q.fwd&&Q.fwd.isVector3&&w.addScaledVector(Q.fwd,(Q.v||0)*Math.max(0,ue-Q.t)),Ut={t:ue,L:jt(ue,w)}}for(const w of Ut.L)Ae(w)}return Lt}function Ae(Q){Lt.push(Q)}function Te(Q,Qt,ue,w,B){if(x.ca*=Math.exp(-Q*5.5),x.shake*=Math.exp(-Q*7),x.flash*=Math.exp(-Q*(x.flash>.5?3.4:5)),x.bloomKick*=Math.exp(-Q*6),x.streakKick*=Math.exp(-Q*2.5),x.fovV+=(-x.fov*120-x.fovV*16)*Q,x.fov+=x.fovV*Q,x.simT+=Q,Qt>.01&&ue)for(const A of ue){if(!A||!A.isObject3D)continue;A.getWorldPosition(G),B!=null&&w&&w.t>B&&G.addScaledVector(bt,-(w.t-B)),A.getWorldQuaternion(vt);const k=A.userData&&A.userData.dir&&A.userData.dir.isVector3?st.copy(A.userData.dir):st.set(0,-.5,1);k.applyQuaternion(vt).normalize(),ie(G,k,Qt*(A.userData&&A.userData.main?1:.6))}const q=_.P;let ot=0;for(let A=0;A<q.n;A++){const k=q.age[A]+Q;if(k>=q.life[A])continue;const rt=A*3,yt=Math.exp(-q.drag[A]*Q);let _t=q.vel[rt]*yt,E=q.vel[rt+1]*yt+q.grav[A]*Q,T=q.vel[rt+2]*yt,H=q.pos[rt]+_t*Q,S=q.pos[rt+1]+E*Q,at=q.pos[rt+2]+T*Q;S<q.floor[A]&&(S=q.floor[A],E=-E*.35,_t*=.7,T*=.7);const V=ot*3;q.pos[V]=H,q.pos[V+1]=S,q.pos[V+2]=at,q.vel[V]=_t,q.vel[V+1]=E,q.vel[V+2]=T,ot!==A&&(q.col0[V]=q.col0[rt],q.col0[V+1]=q.col0[rt+1],q.col0[V+2]=q.col0[rt+2],q.col1[V]=q.col1[rt],q.col1[V+1]=q.col1[rt+1],q.col1[V+2]=q.col1[rt+2],q.life[ot]=q.life[A],q.size0[ot]=q.size0[A],q.size1[ot]=q.size1[A],q.stretch[ot]=q.stretch[A],q.grav[ot]=q.grav[A],q.drag[ot]=q.drag[A],q.floor[ot]=q.floor[A]),q.age[ot]=k,ot++}q.n=ot;for(const A of I.list){if(!A.m.visible)continue;A.age+=Q;const k=A.age/A.life;if(k>=1){A.m.visible=!1;continue}A.m.scale.setScalar(A.r0*(1+1.4*(1-(1-k)*(1-k)))),A.m.material.uniforms.uA.value=(1-k)*(1-k)}const j=40+140*x.speed+80*x.streakKick;for(let A=0;A<rc;A++){const k=D.S[A];k.z+=j*k.v*Q,k.z>2&&(k.z-=62,k.th=l()*Math.PI*2,k.r=3.4+l()*6)}}function tn(){const Q=_.P,Qt=Q.n,ue=_.iPos.array,w=_.iVel.array,B=_.iCol.array,q=_.iSz.array;for(let j=0;j<Qt;j++){const A=Q.age[j]/Q.life[j],k=j*3,rt=j*4,yt=j*2;ue[k]=Q.pos[k],ue[k+1]=Q.pos[k+1],ue[k+2]=Q.pos[k+2],w[k]=Q.vel[k],w[k+1]=Q.vel[k+1],w[k+2]=Q.vel[k+2];const _t=Math.min(1,A*1.6);B[rt]=Q.col0[k]+(Q.col1[k]-Q.col0[k])*_t,B[rt+1]=Q.col0[k+1]+(Q.col1[k+1]-Q.col0[k+1])*_t,B[rt+2]=Q.col0[k+2]+(Q.col1[k+2]-Q.col0[k+2])*_t,B[rt+3]=(1-A)*(1-A)*Math.min(1,Q.age[j]*40+.3),q[yt]=Q.size0[j]+(Q.size1[j]-Q.size0[j])*A,q[yt+1]=Q.stretch[j]}_.quad.instanceCount=Qt;for(const j of[_.iPos,_.iVel,_.iCol,_.iSz])j.needsUpdate=!0,j.clearUpdateRanges&&j.clearUpdateRanges(),j.addUpdateRange&&j.addUpdateRange(0,Math.max(1,Qt*j.itemSize));const ot=Ks(tr(.25,.9,x.speed)*c.streaks+x.streakKick);if(D.mat.uniforms.uAlpha.value=ot*.7,D.mesh.visible=ot>.01,D.mesh.visible){const j=1.2+6*x.speed+5*x.streakKick;for(let A=0;A<rc;A++){const k=D.S[A];G.set(Math.cos(k.th)*k.r,Math.sin(k.th)*k.r*.8,k.z),It.set(0,0,k.th+Math.PI/2),vt.setFromEuler(It),mt.set(k.w*(1+.3*x.speed),1,j*k.v),Rt.compose(G,vt,mt),D.mesh.setMatrixAt(A,Rt)}D.mesh.instanceMatrix.needsUpdate=!0}}const Ct=1.2;let Zt=!1;function Pe(Q=1/60,Qt){Zt=!0,Q=Math.min(Math.max(+Q||0,0),.1),nt=Qt||{};const ue=kt(),w=N(nt);let B=typeof nt.t=="number"?nt.t:w?w.t:null;if(B==null&&ue)try{B=typeof ue.time=="function"?ue.time():typeof ue.t=="number"?ue.t:null}catch{B=null}let q=!1;B!=null&&x.lastT!=null&&(B<x.lastT-1e-4||B-x.lastT>Math.max(.25,Q*4))&&(q=!0),w&&ht&&w!==ht&&(q=!0),q&&(lt(),Dt=new WeakSet),x.lastT,B!=null&&(x.lastT=B),ht=w;let ot=nt.speed01;ot==null&&nt.speed!=null&&(ot=nt.speed/250),ot==null&&x.extSpeed!=null&&(ot=x.extSpeed),ot==null&&w&&typeof w.mph=="number"&&(ot=w.mph/260),ot==null&&ue&&typeof ue.speed01=="number"&&(ot=ue.speed01),ot==null&&B!=null&&(ot=$b(B)),ot==null&&(ot=0);let j=nt.boost01;if(j==null&&w&&typeof w.boost=="number"&&(j=Ks(w.boost)),j==null&&B!=null){const _t=B/Er;j=_t>=88&&_t<96?tr(88,96,_t):_t>=96&&_t<128?.6:0}const A=se();nt.carVel&&nt.carVel.isVector3?bt.copy(nt.carVel):w&&w.fwd&&w.fwd.isVector3&&typeof w.v=="number"?bt.copy(w.fwd).multiplyScalar(w.v).y+=w.vy||0:A&&Q>0&&!q&&(A.getWorldPosition(G),O&&(st.subVectors(G,Ot).divideScalar(Q),st.length()<400?bt.lerp(st,.5):bt.set(0,0,0)),Ot.copy(G),O=!0);const k=Tt(A);let rt=nt.thrust!=null?+nt.thrust:w&&typeof w.thrust=="number"?w.thrust:0;w&&typeof w.flap=="number"&&(rt=Math.max(rt,Ks(w.flap))),w&&w.mode&&(rt=0);const yt=!!w;if(c._gp=yt,q&&B!=null){const _t=it(w,B,Ct),E=Math.max(0,B-Ct),T=1/60;x.speed=Ks(ot),x.boost=j||0;let H=0;for(let S=E;S<B-1e-6;S+=T){for(;H<_t.length&&(_t[H].t??B)<=S+T;)et(_t[H],w,Math.max(0,B-(_t[H].t??B))),H++;yt?dn(S):Mt(S,T),Te(T,B-S<.35?rt:0,k,w,S)}for(;H<_t.length;H++)et(_t[H],w,0)}else{if(x.speed+=(Ks(ot)-x.speed)*Math.min(1,Q*6),x.boost+=((j||0)-x.boost)*Math.min(1,Q*4),yt){for(const _t of it(w,B??0,Ct))et(_t,w,0);dn(B)}else Mt(B,Q);Te(Q,rt,k,null,null)}w?(typeof w.flash=="number"?x.gpFlash=w.flash:x.gpFlash=0,typeof w.aberration=="number"?x.gpCA=w.aberration:x.gpCA=0,x.timeScale=typeof w.timeScale=="number"?w.timeScale:x.timeScale):(x.gpFlash=0,x.gpCA=0),tn();{const _t=nt.smoke||w&&w.puffs||null;iw(F,_t,B??(w?w.t:null),a,w&&w.pos&&w.pos.isVector3?w.pos:null,A,pe(w));const E=nt.rcs||w&&w.rcs||null,T=A&&A.userData&&A.userData.car,H=T&&T.anchors&&T.anchors.rcs;R.n=0;const S=B??x.simT;a&&a.getWorldPosition(rl);let at=1;A&&(A.getWorldQuaternion(vt),rp.set(0,1,0).applyQuaternion(vt));const V=A?rp.y:0,xt=E&&E.down||0;if(A&&xt>.15&&(at=1-tr(.8,.93,V)),ow(T),A&&(up.set(1,0,0).applyQuaternion(vt),fp.set(0,0,1).applyQuaternion(vt)),E&&H&&a)for(const[Pt,Nt]of Object.entries(H)){let ne=Pt==="pitchUp"?Math.max(0,E.pitch||0):Pt==="pitchDown"?Math.max(0,-(E.pitch||0)):E[Pt]||0;const te=Pt==="down",me=Pt==="left"||Pt==="right";if(te||(ne*=at),!te&&!me&&(ne*=.7),ne<.06||!Array.isArray(Nt))continue;const oe=Math.min(1,ne),Ht=me?tr(-.95,-.6,V):1,re=(te?3.3+.6*oe:me?2.6+1.9*oe:.5+.8*oe)*(.3+.7*Ht),he=te?.07:me?.045:.04,De=te?.35:me?he+re*.033:.16,_e=(me&&V<.8?1.6:1)*(.55+.45*Ht);Nt.forEach((Ue,Ce)=>{let be=null;if(te&&A){const qe=Math.sign(Ue.position.x)||1,en=Math.sign(Ue.position.z)||1;be=rw.copy(up).multiplyScalar(qe*.087).addScaledVector(fp,en*.05)}iu(R,Ue,(.35+.75*oe)*_e*(te?1.8:1),re,he,De,S,Ce*1.37+Pt.length*.71,te,rl,te||me?0:1,me?.5:1,be,te?1:me?2:0)})}const K=(w&&w.mode==="flipAir"&&w.flipRear||0)*at*(V<.8?1.4:1),qt=Tt(A);if(K>.06&&qt&&a&&qt.forEach((Pt,Nt)=>{Pt.userData&&(Pt.userData.main||Nt===0||Nt===3)&&iu(R,Pt,Math.min(1.5,K),1.2+2.4*Math.min(1,K),.05,.22,S,9+Nt,!1,rl,1,.6)}),w&&w.mode==="fly"&&qt&&a&&!(xt>.15&&V>.93)){const Pt=Math.min(1,Math.max(+w.thrust||0,Ks(+w.flap||0)));Pt>.05&&qt.forEach((Nt,ne)=>{Nt.userData&&(Nt.userData.main||ne===0||ne===3)&&iu(R,Nt,.3+.7*Pt,.8+2.2*Pt,.05,.2,S,21+ne,!1,rl,1,.6)})}if(R.mat.uniforms.uT.value=S,R.geo.setDrawRange(0,R.n*pa*6),R.mesh.visible=R.n>0,R.n>0)for(const Pt of[R.pos,R.aJ,R.aK])Pt.needsUpdate=!0,Pt.clearUpdateRanges&&Pt.clearUpdateRanges(),Pt.addUpdateRange&&Pt.addUpdateRange(0,R.n*Wo*Pt.itemSize)}}function dn(Q){if(Q==null)return;const Qt=Math.floor(Q/Er+1e-4);if(Qt!==x.lastBeat){const ue=Kb(Q);x.lastBeat>=0&&(ue==="drop1"||ue==="loop"||ue==="flight")&&Z(Qt%4===0?1:.55),ue==="intro"&&Qt>=10&&Qt%2===0&&Qt<16&&Z(.6),x.lastBeat=Qt}}const Xn=new L;function Ni(){s.getSize(h);const Q=s.getPixelRatio();(h.x!==p||h.y!==y||Q!==M)&&(p=h.x,y=h.y,M=Q,f.setPixelRatio(Q),f.setSize(Math.max(1,h.x),Math.max(1,h.y))),m.uniforms.uRes.value.set(h.x*Q,h.y*Q),_.mat.uniforms.uResY.value=h.y*Q,_.mat.uniforms.uAspect.value=h.x/Math.max(1,h.y)}function _i(Q,Qt){if(Q&&Q.isScene&&Q!==o&&Le(Q),Qt&&Qt.isCamera&&(a=Qt),!o||!a)return;Zt||Pe(1/60,nt),Zt=!1,P.parent!==o&&o.add(P),d.scene=o,d.camera=a,Ni(),a.updateMatrixWorld(),D.group.position.setFromMatrixPosition(a.matrixWorld),D.group.quaternion.setFromRotationMatrix(Rt.extractRotation(a.matrixWorld));const ue=h.y>h.x,w=m.uniforms;w.uTime.value=x.simT,w.uSpeed.value=tr(.2,1,x.speed)*c.speedBlur*(.75+.5*x.streakKick),w.uCA.value=Math.min(1.5,Math.max(x.ca,x.gpCA*.9)+c.caBase+x.speed*.12),w.uExposure.value=c.exposure*(1+.12*x.boost);const B=Ks((1-(x.timeScale||1))/.4);w.uVignette.value=c.vignette+.12*B,x.slow=B,w.uGrain.value=c.grain,w.uSat.value=c.saturation*(1-.12*B),w.uContrast.value=c.contrast,w.uFlash.value=Math.min(1,Math.max(x.flash,x.gpFlash*.8)),w.uFlashColor.value.copy(x.flashColor),w.uCenter.value.set(.5,ue?.52:.5);{const A=se();A&&A.getWorldPosition&&(A.getWorldPosition(G),G.y+=.6,G.project(a),G.z<1?w.uCar.value.set(G.x*.5+.5,G.y*.5+.5):w.uCar.value.set(-5,-5))}g.strength=c.bloomStrength*(1+x.bloomKick+.25*x.boost),g.radius=c.bloomRadius,g.threshold=c.bloomThreshold,g.highPassUniforms.smoothWidth.value=c.bloomKnee,g.copyUniforms&&g.copyUniforms.uLimit&&(g.copyUniforms.uLimit.value=c.bloomLimit*(1+.6*x.bloomKick));const q=a.isPerspectiveCamera,ot=q?a.fov:0;Xn.copy(a.position);const j=c.ownCamera;if(j&&q&&Math.abs(x.fov)>.001&&(a.fov=ot+x.fov,a.updateProjectionMatrix()),j&&x.shake>.001){const A=x.shake*x.shake*c.shakeAmp,k=x.simT*47;G.set(Math.sin(k*1.13)+Math.sin(k*2.71)*.5,Math.cos(k*1.37)+Math.sin(k*3.1)*.5,0).multiplyScalar(A),G.applyQuaternion(a.quaternion),a.position.add(G),a.updateMatrixWorld()}try{f.render()}finally{q&&a.fov!==ot&&(a.fov=ot,a.updateProjectionMatrix()),a.position.equals(Xn)||(a.position.copy(Xn),a.updateMatrixWorld())}}function Ln(Q,Qt){f.setPixelRatio(s.getPixelRatio()),f.setSize(Math.max(1,Q),Math.max(1,Qt)),p=Q,y=Qt,M=s.getPixelRatio()}function Le(Q){P.parent&&P.parent.remove(P),o=Q,Q&&Q.add(P)}function pn(Q){a=Q}function zi(){P.parent&&P.parent.remove(P),f.dispose&&f.dispose(),g.dispose(),m.dispose(),v.dispose(),_.quad.dispose(),_.mat.dispose(),F.geo.dispose(),F.mat.dispose(),D.mesh.geometry.dispose(),D.mat.dispose()}return{update:Pe,render:_i,setSize:Ln,setScene:Le,setCamera:pn,reset:lt,dispose:zi,impact:ce,shake:Jt,aberration:ct,setSpeed:ft,setTimeScale:C,fovPunch:b,flash:W,sparks:(Q,Qt,ue)=>X(Q,Qt,ue),land:Y,hit:pt,ringPass:Yt,boost:tt,thruster:ie,finish:dt,beat:Z,params:c,composer:f,bloom:g,finalPass:m,get state(){return x},markExplicit(Q){x.explicit[Q]=!0}}}const cw="modulepreload",lw=function(n){return"/"+n},pp={},hw=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=lw(l),l in pp)return;pp[l]=!0;const h=l.endsWith(".css"),r=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":cw,h||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),h)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})},xi=59/136,mp=16*xi,$m=134*xi,gp=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),vp=gp.has("capture")||gp.get("mute")==="1",on=n=>440*Math.pow(2,(n-69)/12),uw=[0,2,4,7,9],su=(n,t)=>n+12*Math.floor(t/5)+uw[(t%5+5)%5];class eh{constructor(){if(this.ctx=null,this.buffer=null,this.src=null,this.playing=!1,this.muted=!1,this._startCtxT=0,this._offset=0,this._perfStart=0,this._loading=null,this._lastTick=-1,this._lastTickAt=0,this._cues=gw(),this._cueIdx=0,this._noise=null,this._engine=null,this._hiss=null,this._lastThrust=-9,this._lastVoice={},this._wind=null,this._rpm=0,typeof window<"u"){const t=()=>this.unlock();for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});window.addEventListener("rr:event",e=>{const i=e.detail||{};i.name&&this.event(i.name,i)})}}get lastTickAt(){return this._lastTickAt}_ensureCtx(){if(this.ctx||vp)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t({latencyHint:"interactive"});this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=8,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.18,this.comp.connect(this.master),this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.82,this.musicGain.connect(this.comp),this.sfxGain=e.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.comp),this.verb=e.createConvolver(),this.verb.buffer=mw(e,1.6,2.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain),this.verbGain.connect(this.comp),this._noise=pw(e,2)}catch{this.ctx=null}return this.ctx}unlock(){const t=this._ensureCtx();t&&t.state==="suspended"&&t.resume().catch(()=>{}),!this.buffer&&!this._loading&&this.load()}load(t="/audio/music.mp3"){return this._loading?this._loading:(this._loading=(async()=>{const e=this._ensureCtx();if(!e)return null;try{const s=await(await fetch(t)).arrayBuffer();this.buffer=await new Promise((o,a)=>e.decodeAudioData(s,o,a))}catch{this.buffer=null}return this.buffer})(),this._loading)}play(t=0){this.stop(),this._offset=Math.max(0,t),this._perfStart=performance.now()/1e3-this._offset,this.playing=!0,this._resetCues(this._offset);const e=this._ensureCtx();if(!e||!this.buffer)return;e.state==="suspended"&&e.resume().catch(()=>{});const i=e.createBufferSource();i.buffer=this.buffer,i.connect(this.musicGain),this._startCtxT=e.currentTime+.02,i.start(this._startCtxT,this._offset),i.onended=()=>{this.src===i&&(this.playing=!1)},this.src=i}stop(){if(this.src){try{this.src.stop()}catch{}try{this.src.disconnect()}catch{}}this.src=null,this.playing=!1,this._setEngine(0,0),this._setHiss(0),this._setWind(0)}time(){return this.playing?this.src&&this.ctx?Math.max(0,this.ctx.currentTime-this._startCtxT+this._offset):performance.now()/1e3-this._perfStart:this._offset}setMuted(t){this.muted=!!t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.02)}_live(){return!vp&&this.ctx&&this.ctx.state==="running"&&!this.muted}_resetCues(t){this._cueIdx=this._cues.findIndex(e=>e.t>=t-1e-4),this._cueIdx<0&&(this._cueIdx=this._cues.length)}tick(t,e={}){if(this._lastTickAt=performance.now(),!(t>=0)||((t<this._lastTick-.25||t>this._lastTick+1)&&this._resetCues(t),this._lastTick=t,!this._live()))return;for(this._combo=pi(e.combo,this._combo||0);this._cueIdx<this._cues.length&&this._cues[this._cueIdx].t<=t;){const m=this._cues[this._cueIdx++];!this._gpDriven&&t-m.t<.15&&this._play(m.name,m.opts)}const i=pi(e.mph,pi(e.speed,0)),s=pi(e.rev,0),o=t<mp,a=t>$m+1.5;let c=0,l=0;const h=e.shift&&typeof e.shift=="object"?e.shift:null,r=h?pi(h.phase,pi(h.light,-1)):-1,u=!o&&t<48*xi&&r>=0&&(e.section?e.section==="launch":!0)&&!e.airborne;if(o)c=s>.02?.1+.25*s:0,l=s*.95;else if(!a)if(c=.07+.1*Math.min(1,i/250),u){const m=.18+.82*Math.pow(fw(r),.85);this._rpm=m<this._rpm-.25?m:this._rpm+(m-this._rpm)*.35,l=.22+.55*this._rpm+.35*Math.min(1,i/260),c+=.05*this._rpm}else this._rpm=0,l=Math.min(1.2,i/260);this._setEngine(c,l),this._setWind(a?0:Math.pow(Math.min(1,i/260),2)*(t>mp?1:0));const f=e.mode?e.mode==="flipAir"||e.mode==="fly"||e.mode==="jump":e.section?e.section==="flight"||e.section==="outro"&&!!e.airborne:!!e.flying||t>96*xi&&t<128*xi&&e.flying!==!1,d=pi(e.lastThrustT,-9),v=pi(e.flap,Math.max(0,1-(t-d)/.35)),g=e.rcs?Math.max(e.rcs.down||0,e.rcs.left||0,e.rcs.right||0):0;this._setHiss(f?.035+.22*Math.max(v,g):0)}_setEngine(t,e){const i=this.ctx;if(!i)return;if(!this._engine){if(t<=0)return;const c=i.createGain();c.gain.value=0;const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,l.Q.value=3;const h=i.createOscillator();h.type="sawtooth";const r=i.createOscillator();r.type="square";const u=i.createOscillator();u.type="sine";const f=i.createOscillator();f.type="sawtooth",f.detune.value=9;const d=i.createGain();d.gain.value=.25;const v=i.createGain();v.gain.value=.9;const g=i.createGain();g.gain.value=.55;const m=i.createOscillator();m.type="sine";const p=i.createGain();p.gain.value=0,m.connect(p),p.connect(this.sfxGain);const y=i.createOscillator();y.frequency.value=23;const M=i.createGain();M.gain.value=6,y.connect(M),M.connect(h.detune),M.connect(f.detune),h.connect(l),f.connect(g),g.connect(l),r.connect(d),d.connect(l),u.connect(v),v.connect(c),l.connect(c),c.connect(this.sfxGain);for(const _ of[h,r,u,f,m,y])_.start();this._engine={g:c,lp:l,o1:h,o2:r,o3:u,o4:f,o5:m,g5:p}}const s=this._engine,o=i.currentTime,a=on(50)*Math.pow(2,e*2.6);s.o1.frequency.setTargetAtTime(a,o,.05),s.o4.frequency.setTargetAtTime(a*.5,o,.05),s.o2.frequency.setTargetAtTime(a*1.5,o,.05),s.o3.frequency.setTargetAtTime(a/3,o,.05),s.lp.frequency.setTargetAtTime(900+4200*e,o,.06),s.g.gain.setTargetAtTime(t*.55,o,.06),s.o5.frequency.setTargetAtTime(Math.min(9e3,a*6),o,.04),s.g5.gain.setTargetAtTime(t>0?Math.min(.05,.012+.04*e)*(t/.2):0,o,.06)}duck(t=3,e=.06,i=.4){if(!this._live()||!this.musicGain)return;const s=this.musicGain.gain,o=this.ctx.currentTime,a=.82,c=a*Math.pow(10,-t/20);try{s.cancelScheduledValues(o),s.setValueAtTime(s.value,o),s.linearRampToValueAtTime(c,o+.012),s.setValueAtTime(c,o+.012+e),s.linearRampToValueAtTime(a,o+.012+e+i)}catch{}}_setWind(t){const e=this.ctx;if(!e)return;if(!this._wind){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=600,o.Q.value=.4;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._wind={g:a,lp:o}}const i=e.currentTime;this._wind.g.gain.setTargetAtTime(.09*t,i,.12),this._wind.lp.frequency.setTargetAtTime(500+2200*t,i,.12)}_setHiss(t){const e=this.ctx;if(!e)return;if(!this._hiss){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=3200,o.Q.value=.7;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._hiss={g:a,bp:o}}const i=e.currentTime;this._hiss.g.gain.setTargetAtTime(t,i,.04),this._hiss.bp.frequency.setTargetAtTime(2200+5e3*t,i,.05)}event(t,e={}){const i=String(t).toLowerCase(),s={shift:()=>this.sfx(e.grade&&String(e.grade).toUpperCase()!=="PERFECT"?"shift":"perfect"),perfectshift:()=>this.sfx("perfect"),ring:()=>this.sfx("ring",{combo:pi(e.combo,1)}),pylon:()=>this.sfx("bounce"),hit:()=>this.sfx("bounce"),bounce:()=>this.sfx("bounce"),land:()=>this.sfx("land"),landing:()=>this.sfx("land"),thrust:()=>this.sfx("thrust"),flap:()=>this.sfx("thrust"),tap:()=>{},jump:()=>this.sfx("jump"),ramp:()=>this.sfx("jump"),launch:()=>this.sfx("launch",{grade:e.grade}),record:()=>this.sfx("record"),combo:()=>this.sfx("ring",{combo:pi(e.n??e.combo,5)+2}),checkpoint:()=>this.sfx("checkpoint"),whoosh:()=>this.sfx("whoosh"),finish:()=>this.sfx("finish")};s[i]?s[i]():this.sfx(i,e)}sfx(t,e={}){e&&typeof e=="object"&&e.type===t&&xp[t]!==void 0&&(this._gpDriven=!0);const i=xp[t];let s=t,o=e||{};if(typeof i=="function")[s,o]=i(o,this);else{if(i===null)return;i&&(s=i)}this._play(s,o)}_play(t,e={}){if(!this._live()||!t)return;const i=$s[t];if(!i)return;const s=this.ctx.currentTime,o=dw[t];if(o){if(s-(this._lastVoice[t]??-99)<o)return;this._lastVoice[t]=s}try{i(this,s+.005,e)}catch{}}}function pi(n,t){return typeof n=="number"&&isFinite(n)?n:t}const fw=n=>Math.min(1,Math.max(0,n)),dw={checkpoint:1.6,finish:2.5,go:.6,count:.5,liftoff:1.2,loop:1.2,boost:1.5,fleet:1,record:2,launch:.6,land:.12,whoosh:.25};function pw(n,t){const e=n.createBuffer(1,Math.floor(n.sampleRate*t),n.sampleRate),i=e.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return e}function mw(n,t,e){const i=Math.floor(n.sampleRate*t),s=n.createBuffer(2,i,n.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let c=0;c<i;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)}return s}function Of(n,t,e,i,s,o="exp"){n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(i,t+e),o==="exp"?n.gain.exponentialRampToValueAtTime(1e-4,t+e+s):n.gain.linearRampToValueAtTime(0,t+e+s)}function Fn(n,t,{type:e="sine",f:i=440,f2:s=null,dur:o=.2,a=.004,peak:c=.3,verb:l=0,dest:h=null,detune:r=0}){const u=n.ctx,f=u.createOscillator(),d=u.createGain();if(f.type=e,f.frequency.setValueAtTime(i,t),f.detune.value=r,s&&f.frequency.exponentialRampToValueAtTime(s,t+a+o),Of(d,t,a,c,o),f.connect(d),d.connect(h||n.sfxGain),l){const v=u.createGain();v.gain.value=l,d.connect(v),v.connect(n.verb)}return f.start(t),f.stop(t+a+o+.05),f}function di(n,t,{type:e="bandpass",f:i=1e3,f2:s=null,q:o=1,dur:a=.3,a:c=.01,peak:l=.3,verb:h=0}){const r=n.ctx,u=r.createBufferSource(),f=r.createBiquadFilter(),d=r.createGain();if(u.buffer=n._noise,f.type=e,f.frequency.setValueAtTime(i,t),f.Q.value=o,s&&f.frequency.exponentialRampToValueAtTime(s,t+c+a),Of(d,t,c,l,a),u.connect(f),f.connect(d),d.connect(n.sfxGain),h){const v=r.createGain();v.gain.value=h,d.connect(v),v.connect(n.verb)}u.start(t,Math.random()),u.stop(t+c+a+.05)}function Pi(n,t,e,i=.22,s=.9){const o=n.ctx,a=on(e),c=o.createOscillator(),l=o.createOscillator(),h=o.createGain(),r=o.createGain();c.frequency.value=a,l.frequency.value=a*3.5,h.gain.setValueAtTime(a*2.2,t),h.gain.exponentialRampToValueAtTime(a*.05,t+s),l.connect(h),h.connect(c.frequency),c.connect(r),Of(r,t,.002,i,s),r.connect(n.sfxGain);const u=o.createGain();u.gain.value=.6,r.connect(u),u.connect(n.verb),c.start(t),l.start(t),c.stop(t+s+.1),l.stop(t+s+.1)}function za(n,t,e=120,i=.7,s=.35){Fn(n,t,{type:"sine",f:e,f2:38,dur:s,a:.002,peak:i})}function Oa(n,t,{sub:e=1,crack:i=1,tail:s=.5,f:o=110,dur:a=.5,db:c=3}={}){Fn(n,t,{type:"sine",f:o,f2:32,dur:a,a:.001,peak:.9*e}),Fn(n,t,{type:"triangle",f:o*2,f2:o*.6,dur:a*.4,a:.001,peak:.3*e}),di(n,t,{type:"bandpass",f:1800,f2:700,q:1.4,dur:.07,a:5e-4,peak:.55*i}),di(n,t,{type:"highpass",f:6e3,q:.5,dur:.035,a:5e-4,peak:.25*i}),di(n,t,{type:"lowpass",f:2600,f2:180,q:.8,dur:a*.8,a:.002,peak:.35,verb:s}),c&&n.duck(c,.05,.35+a*.6)}const $s={ui:(n,t)=>{Fn(n,t,{type:"triangle",f:on(86),dur:.06,peak:.12})},count:(n,t)=>{Fn(n,t,{type:"square",f:on(74),dur:.16,peak:.12,verb:.3}),Fn(n,t,{type:"sine",f:on(62),dur:.22,peak:.25})},go:(n,t)=>{for(const e of[74,81,86])Fn(n,t,{type:"sawtooth",f:on(e),dur:.5,peak:.07,verb:.4});Fn(n,t,{type:"sine",f:on(86),dur:.6,peak:.18,verb:.4}),za(n,t,150,.6,.3)},launch:(n,t,e={})=>{const i=String(e.grade||"PERFECT").toUpperCase();Oa(n,t,{f:110,dur:.6,crack:.8,tail:.4,db:3}),di(n,t,{type:"lowpass",f:6e3,f2:300,q:.5,dur:.9,a:.005,peak:i==="LATE"?.18:.35}),Fn(n,t,{type:"sawtooth",f:on(50),f2:on(86),dur:.9,a:.01,peak:.1}),i==="PERFECT"&&(Pi(n,t+.05,86,.16,.8),Pi(n,t+.12,93,.12,.9))},rev:(n,t,e={})=>{const i=pi(e.level,.6);Fn(n,t,{type:"sawtooth",f:on(50),f2:on(50+24*i),dur:.4,a:.02,peak:.12})},shift:(n,t)=>{di(n,t,{type:"highpass",f:2500,q:.7,dur:.05,a:.001,peak:.35}),Fn(n,t,{type:"square",f:on(62),f2:on(50),dur:.12,peak:.12}),za(n,t,90,.4,.18)},perfect:(n,t)=>{$s.shift(n,t),Fn(n,t+.01,{type:"sawtooth",f:on(57),f2:on(81),dur:.22,a:.005,peak:.08}),Pi(n,t+.03,81,.15,.6),di(n,t,{type:"bandpass",f:800,f2:6e3,q:1.2,dur:.35,a:.02,peak:.14})},good:(n,t)=>$s.shift(n,t),late:(n,t)=>{$s.shift(n,t),Fn(n,t,{type:"square",f:on(55),f2:on(43),dur:.2,peak:.08})},whoosh:(n,t,e={})=>{const i=pi(e.dur,.7);di(n,t,{type:"bandpass",f:300,f2:5e3,q:1.6,dur:i*.6,a:i*.4,peak:.3,verb:.2})},jump:(n,t)=>{di(n,t,{type:"bandpass",f:500,f2:4e3,q:1,dur:.6,a:.05,peak:.25}),Fn(n,t,{type:"sine",f:on(43),f2:on(67),dur:.5,a:.01,peak:.25})},land:(n,t)=>{Oa(n,t,{f:120,dur:.5,tail:.45,db:3}),Fn(n,t+.03,{type:"square",f:on(43),f2:on(36),dur:.09,peak:.07}),di(n,t+.02,{type:"bandpass",f:3200,f2:2400,q:6,dur:.18,a:.004,peak:.12})},thrust:(n,t)=>{di(n,t,{type:"highpass",f:5e3,q:.7,dur:.02,a:5e-4,peak:.3}),di(n,t,{type:"bandpass",f:7e3,f2:1800,q:.9,dur:.32,a:.004,peak:.42}),di(n,t+.01,{type:"lowpass",f:900,f2:200,q:.7,dur:.25,a:.01,peak:.25}),za(n,t,70,.4,.22)},ring:(n,t,e={})=>{const i=Math.max(1,Math.min(20,pi(e.combo,1))),s=su(74,i-1);Pi(n,t,Math.min(s,98),.2,.9),Fn(n,t,{type:"triangle",f:on(Math.min(s,98)+12),dur:.15,peak:.06})},bounce:(n,t)=>{Oa(n,t,{f:80,dur:.35,crack:1.1,tail:.3,db:3}),di(n,t,{type:"bandpass",f:1200,q:3,dur:.25,a:.001,peak:.35}),Fn(n,t,{type:"square",f:on(50),f2:on(38),dur:.3,peak:.12})},checkpoint:(n,t)=>{Pi(n,t,79,.16,1),Pi(n,t+.11,86,.14,1.1),$s.whoosh(n,t,{dur:.9})},loop:(n,t)=>{$s.whoosh(n,t,{dur:1.1}),Fn(n,t,{type:"sawtooth",f:on(38),f2:on(62),dur:1.2,a:.2,peak:.07})},boost:(n,t)=>{const e=6*xi;Fn(n,t,{type:"sawtooth",f:on(38),f2:on(74),dur:e-.3,a:.3,peak:.06}),di(n,t,{type:"bandpass",f:300,f2:8e3,q:2,dur:e-.6,a:.6,peak:.14});for(let i=0;i<6;i++)Fn(n,t+i*xi,{type:"triangle",f:on(su(62,i)),dur:.09,peak:.08});Pi(n,t+e,86,.16,.9),Pi(n,t+e+.06,93,.12,1)},liftoff:(n,t)=>{$s.thrust(n,t),$s.thrust(n,t+.08),Oa(n,t,{f:60,dur:.8,crack:.4,tail:.6,db:4}),Pi(n,t,74,.12,1.2)},finish:(n,t)=>{Oa(n,t,{f:90,dur:1,crack:1.2,tail:.9,db:5}),za(n,t,160,.6,.6),di(n,t,{type:"highpass",f:3e3,q:.5,dur:1.4,a:.005,peak:.25,verb:.5}),[74,79,83,86,91].forEach((e,i)=>Pi(n,t+i*.06,e,.13,1.4))},fleet:(n,t)=>{n.duck(2.5,.1,.5),$s.whoosh(n,t,{dur:.6}),Pi(n,t+.02,79,.15,.9),Pi(n,t+.09,86,.13,1)},scrape:(n,t)=>{di(n,t,{type:"highpass",f:3500,q:.6,dur:.18,a:.002,peak:.25}),za(n,t,70,.4,.18)},combo:(n,t,e={})=>{const i=Math.max(5,pi(e.combo,5));[0,2,4].forEach((s,o)=>Pi(n,t+o*.055,Math.min(98,su(74,Math.floor(i/5)+s)),.14,.8))},record:(n,t)=>{[86,88,91,93,98].forEach((e,i)=>Pi(n,t+i*.07,e,.12,.9))}},xp={countdown:n=>[String(n.n??n.text??"").toUpperCase()==="GO"?"go":"count",n],launch:n=>["launch",{grade:n.rating||n.grade}],zero60:null,shift:n=>[n.perfect===!1?"shift":"perfect",n],miss:"late",offbeat:"late",flap:"thrust",air:"jump",fleet:"fleet",land:"land",touchdown:"land",loop:"loop",upside:"whoosh",boostready:"boost",flies:"liftoff",checkpoint:"checkpoint",ring:(n,t)=>["ring",{combo:pi(n.combo,t._combo||1)}],ringmiss:"late",scrape:"scrape",hit:"bounce",combo:(n,t)=>["combo",{combo:pi(n.combo,t._combo||5)}],finish:"finish",replay:"ui",beat:null};function gw(){const n=e=>e*xi,t=[];return t.push({t:n(10),name:"count"},{t:n(12),name:"count"},{t:n(14),name:"count"},{t:n(16),name:"go"}),t.push({t:n(48),name:"checkpoint"},{t:n(56),name:"loop"},{t:n(88),name:"boost"},{t:n(96),name:"liftoff"},{t:$m,name:"finish"}),t.sort((e,i)=>e.t-i.t)}const Pn=typeof window<"u"&&window.__rrAudio||new eh;typeof window<"u"&&(window.__rrAudio=Pn);eh.prototype.init=function(){return this.load()};eh.prototype.getTime=function(){return this.time()};Object.defineProperty(eh.prototype,"currentTime",{get(){return this.time()}});const Ki=n=>n*xi,er=Ki(16),Cr=Ki(134),jm=1.15*xi,vw=Cr+jm,oc=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),ol=oc.has("capture"),xw=oc.get("autoplay")==="1",_p="https://roadster.kalibrio.com",yp=[[0,"INTRO","HANGAR"],[16,"#3 · #1","LAUNCH + FLEET"],[48,"REVEAL","THE FLIP RAMP"],[56,"#2","THE MIDAIR FLIP"],[88,"BUILD","MEGA FLIP"],[96,"MEGA FLIP","FLEET FLIP"],[128,"OUTRO","FINISH"]],_w=n=>{let t=yp[0];for(const e of yp)n>=e[0]&&(t=e);return t},wl=[20,24,28,32,36,40,44],yw=[{b:17.9,text:"#3 0-60 IN 0.81s",sub:"TESLA ROADSTER",tone:"cyan",size:"xl",dur:5},{b:27.5,text:"#1 JUMPING THE ENTIRE FLEET",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y",tone:"magenta",size:"l",wrap:!0,dur:5},{b:48,text:"THE MIDAIR FLIP",sub:"NEXT: #2",tone:"green",size:"l",dur:6},{b:61.9,text:"#2 THE MIDAIR FLIP",sub:"PAST VERTICAL",tone:"orange",size:"xl",dur:5},{b:88,text:"MEGA FLIP READY",sub:"TAP: THRUSTERS",tone:"orange",size:"l",dur:6},{b:96.5,text:"MEGA FLIP",sub:"TAP: THRUSTERS",tone:"cyan",size:"xl",dur:5},{b:134,text:"FINISH",tone:"white",size:"xl",dur:8}],Mw={countdown:{skip:!0},launch:{skip:!0},replay:{skip:!0},finish:{tone:"white",size:"xl",pri:9,dur:2.4,slam:!0,subFn:(n,t,e)=>{const i=xe(t.flips),s=xe(t.fleetFlipped);return Ya(e._lap||0)+(i!==void 0?` · ${i} FLIPS`:"")+(s?` · FLEET ×${s}`:"")}},zero60:{tone:"cyan",size:"xl",pri:3,delay:2*xi,dur:2.4-2*xi,text:"0-60 MPH",sub:"UNDER 1 SECOND"},shift:{chip:!0,tone:"green",dur:1.3,subFn:n=>n.style==="perfect"?"+400":"+200"},miss:{chip:!0,tone:"orange",dur:1.2},offbeat:{chip:!0,tone:"orange",dur:.9},air:{tone:"cyan",size:"l",pri:3,dur:1.3},fleet:{tone:"magenta",size:"xl",pri:3,dur:2.3,sub:"+1,500"},land:{chip:!0,tone:"cyan",dur:1.6},touchdown:{tone:"cyan",size:"l",pri:3,dur:1.5},checkpoint:{tone:"green",size:"l",pri:3,dur:2.3,subFn:n=>n.sub||"NEXT: #2"},loop:{tone:"orange",size:"xl",pri:3,dur:2.3,sub:"TAP ON THE BEAT"},upside:{tone:"magenta",size:"xl",pri:3,dur:2.2,flip:!0},boostready:{tone:"orange",size:"l",pri:3,dur:2.3,sub:"TAP: THRUSTERS"},flies:{tone:"cyan",size:"xl",pri:3,dur:2.3,sub:"TAP TO THRUST"},ring:{chip:!0,tone:"magenta",dur:1,sub:"+500"},ringmiss:{chip:!0,tone:"orange",dur:.9},combo:{skip:!0},moment3:{moment:!0,tone:"cyan",size:"xl",pri:4,dur:2.4,subFn:n=>n.sub||"TESLA ROADSTER"},moment1:{moment:!0,tone:"magenta",size:"l",wrap:!0,pri:4,dur:2.4,subFn:n=>n.sub||""},moment2:{moment:!0,tone:"orange",size:"xl",pri:4,dur:2.4,subFn:n=>n.sub||""},kickflip:{chip:!0,tone:"green",dur:1.5,sub:"THRUSTERS"},softland:{chip:!0,tone:"green",dur:1.6,subFn:n=>n.text==="SOFT LANDING"?"+2,000":"+1,000"},hardland:{chip:!0,tone:"orange",dur:1.6,sub:"COMBO LOST"},inverted:{tone:"magenta",size:"l",pri:2,dur:1.4,flip:!0},upright:{chip:!0,tone:"cyan",dur:1.4,sub:"+2,500"},thrusters:{chip:!0,tone:"cyan",dur:1.2},megaflip:{tone:"cyan",size:"xl",pri:3,dur:2,sub:"TAP: THRUSTERS"},fleetflip:{chip:!0,tone:"magenta",dur:1.3,subFn:n=>n.sub||""},rowclear:{chip:!0,tone:"cyan",dur:1},climbbeat:{skip:!0},bullet:{skip:!0},finale:{skip:!0},air:{skip:!0},scrape:{chip:!0,tone:"orange",dur:.9},hit:{chip:!0,tone:"orange",dur:1.1,sub:"COMBO LOST"}},Mp=1.15,bw=1,bp=1.75,wp={intro:["INTRO","HANGAR"],launch:["#3 · #1","LAUNCH + FLEET"],reveal:["REVEAL","THE FLIP RAMP"],flip:["#2","THE MIDAIR FLIP"],build:["BUILD","MEGA FLIP"],mega:["MEGA FLIP","FLEET FLIP"],outro:["OUTRO","FINISH"],tunnel:["BREAK","CHECKPOINT"],loop:["DROP 2","THE LOOP"],flight:["DROP 3","FLIGHT"]};function ww(n){const t=n/xi;let e=0;if(n>=er){const h=n-er;e=238*(1-Math.exp(-h/1.6))+10*Math.min(1,h/12);for(const r of wl){const u=n-Ki(r);u>0&&u<.5&&(e+=6*Math.sin(u/.5*Math.PI))}t>=48&&t<56&&(e=e*.82),t>=56&&t<88&&(e+=8*Math.sin((t-56)/32*Math.PI)-18*Math.exp(-(((t-74)/4)**2))),t>=88&&t<96&&(e+=14*(t-88)/8),t>=96&&t<128&&(e+=22+4*Math.sin(t*Math.PI/2)),t>=128&&(e+=22-16*Math.min(1,(t-128)/8)),n>Cr&&(e*=Math.max(0,1-(n-Cr)/2.5))}let i=0,s=0,o=0,a=0;n>=er&&(i+=1e3);for(const h of wl)t>=h&&(i+=500,a++);t>=31.5&&(i+=2e3),t>=48&&(i+=1e3),t>=56&&(i+=100*Math.floor(Math.min(88,t)-56)),t>=74&&(i+=1500);for(let h=0;h<15;h++){const r=98+2*h;t>=r&&(o++,s=h+1,i+=250*s)}t>=128&&t<134?s=o:t<98&&(s=0),n>=er&&(i+=Math.floor(Math.min(n,Cr)-er)*120);let c=0;t>=16&&t<48?c=Math.min(.6,.12+.07*a):t>=48&&t<88?c=.6-.15*Math.min(1,Math.max(0,(t-56)/32)):t>=88&&t<96?c=.45+.55*(t-88)/8:t>=96&&t<128?c=1-.55*(t-96)/32:t>=128&&(c=.45);let l=0;return t>=9&&t<16&&(l=Math.min(.86,.18+.68*(t-9)/5)+.02*Math.sin(t*9)),{speed:e,score:i,combo:s,maxCombo:Math.max(o,s),boost:c,rev:l,revTarget:[.78,.94],launch:"PERFECT",shifts:a,shiftsTotal:wl.length,rings:o,ringsTotal:15}}const Re=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),xe=n=>typeof n=="number"&&isFinite(n)?n:void 0,Xr=n=>1-Math.pow(1-Re(n),3),hs=n=>{n=Re(n);const t=1.9;return 1+(t+1)*Math.pow(n-1,3)+t*Math.pow(n-1,2)};function Ya(n){n=Math.max(0,n);const t=Math.floor(n/60),e=n-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const al=n=>Math.round(n).toLocaleString("en-US"),sn=(n,t,e)=>{const i=document.createElement(n);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i};function Je(n,t){n.__t!==t&&(n.__t=t,n.textContent=t)}function ve(n,t,e){const i="__s_"+t;n[i]!==e&&(n[i]=e,n.style.setProperty(t,e))}function ke(n,t,e){const i="__c_"+t;n[i]!==e&&(n[i]=e,n.classList.toggle(t,e))}function Ba(n,t,e,i,s){const o=r=>{const u=(r-90)*Math.PI/180;return[n+e*Math.cos(u),t+e*Math.sin(u)]},[a,c]=o(i),[l,h]=o(s);return`M${a.toFixed(2)} ${c.toFixed(2)} A${e} ${e} 0 ${s-i>180?1:0} 1 ${l.toFixed(2)} ${h.toFixed(2)}`}function Sw(n,t,e,i,s,o,a,c){let l="";for(let h=0;h<=a;h++){const r=s+(o-s)*h/a,u=(r-90)*Math.PI/180,f=h%c===0,d=f?e-4:e;l+=`<line x1="${(n+d*Math.cos(u)).toFixed(1)}" y1="${(t+d*Math.sin(u)).toFixed(1)}" x2="${(n+i*Math.cos(u)).toFixed(1)}" y2="${(t+i*Math.sin(u)).toFixed(1)}" class="${f?"tk tk-big":"tk"}"/>`}return l}class Tw{constructor(){this.mesh=null,this.key="",this.failed=!1}_build(){const t=window.__game,e=t&&t.carApi,i=t&&t.car,s=e&&e.anchors&&e.anchors.tailLeft&&e.anchors.tailLeft.parent||(i&&i.isObject3D?i:null);if(!s)return!1;const o=document.createElement("canvas");o.width=512,o.height=144,this.ctx=o.getContext("2d"),this.tex=new ql(o),this.tex.colorSpace=Cn,this.tex.anisotropy=4;const a=new Ke({map:this.tex,transparent:!0,depthWrite:!1,blending:An,toneMapped:!1,side:Xe});a.color.setScalar(1.7),this.mesh=new ye(new Mn(.86,.242),a),this.mesh.name="hud-deck-panel",this.mesh.renderOrder=20,this.mesh.frustumCulled=!1;const c=s!==i;return this.mesh.position.set(0,1,1.9),this.mesh.rotation.x=-.62,s.add(this.mesh),!0}update(t,e,i,s,o){if(this.failed)return;if(!this.mesh)try{if(!t||!this._build())return}catch{this.failed=!0;return}if(this.mesh.visible=t,!t)return;const a=e+"|"+i+"|"+(s>.5?1:0)+"|"+(o?1:0);if(a===this.key)return;this.key=a;const c=this.ctx,l=512,h=144;c.clearRect(0,0,l,h);const r=c.createLinearGradient(0,0,0,h);r.addColorStop(0,"rgba(20,90,140,0.30)"),r.addColorStop(1,"rgba(10,30,70,0.10)"),c.fillStyle=r,c.beginPath(),c.moveTo(26,6),c.lineTo(l-6,6),c.lineTo(l-26,h-6),c.lineTo(6,h-6),c.closePath(),c.fill(),c.strokeStyle=`rgba(63,243,255,${.55+.45*s})`,c.lineWidth=3,c.stroke(),c.fillStyle="rgba(255,58,210,0.9)",c.fillRect(30,6,120,4),c.fillRect(l-150,h-10,120,4);const u='"DIN Condensed","Bahnschrift","Barlow Condensed","Roboto Condensed","Arial Narrow",Impact,sans-serif';c.textBaseline="alphabetic",c.shadowColor="rgba(63,243,255,0.95)",c.shadowBlur=14,c.fillStyle="rgba(190,240,255,0.85)",c.font=`700 22px ${u}`,c.fillText("L A P",40,46),c.fillStyle="#ffffff",c.font=`italic 700 92px ${u}`,c.fillText(e,36,126),i>=2&&(c.textAlign="right",c.shadowColor="rgba(255,58,210,0.95)",c.fillStyle="rgba(255,198,243,0.9)",c.font=`700 22px ${u}`,c.fillText("C O M B O",l-40,46),c.fillStyle=o?"#ffe7fb":"#ff7be6",c.font=`italic 700 80px ${u}`,c.fillText("×"+i,l-40,124),c.textAlign="left"),c.shadowBlur=0,this.tex.needsUpdate=!0}}class Bf{constructor(){Jf(this,"_loop",()=>{requestAnimationFrame(this._loop),this._wrapSeek(),!(this._previewMode||performance.now()-this.lastExternal<250)&&this._poll()});this.mounted=!1,this.events=[],this.replayFns=[],this.lastExternal=0,this.t=0,this.state={},this.prevCombo=0,this.prevT=-1,this.best=null,this.recordSaved=!1,this.deck=new Tw}mount(t){if(this.mounted||typeof document>"u")return this;t=t||document.getElementById("hud"),t||(t=sn("div"),t.id="hud",document.body.appendChild(t)),this.root=t,t.innerHTML="",ke(t,"rr-hud",!0),xw&&(t.dataset.autoplay="1"),t.append(sn("div","rr-scrim rr-scrim-top"),sn("div","rr-scrim rr-scrim-bot"),sn("div","rr-scan")),this.frame=sn("div","rr-frame");for(const f of["tl","tr","bl","br"])this.frame.append(sn("i","rr-br rr-br-"+f));t.append(this.frame);const e=sn("div","rr-top");this.scoreBox=sn("div","rr-score",`
      <div class="rr-lbl">SCORE</div>
      <div class="rr-score-v">${'<i class="rr-d"></i>'.repeat(7)}</div>
      <div class="rr-combo"><b class="rr-combo-x">x0</b><span class="rr-combo-l">COMBO</span><i class="rr-combo-bar"><i></i></i></div>
      <div class="rr-combo-pop"><b></b><span></span></div>`),this.timeBox=sn("div","rr-time",`
      <div class="rr-lbl">LAP <span class="rr-sec"></span></div>
      <div class="rr-time-v">0:00.00</div>
      <div class="rr-split"></div>`),this.center=sn("div","rr-center",`
      <div class="rr-chip"><i class="rr-chip-dot"></i><span class="rr-chip-a"></span><span class="rr-chip-b"></span></div>`),e.append(this.scoreBox,this.center,this.timeBox),t.append(e);const i=200,s=100,o=-135,a=135,c=(f,d)=>`
      <svg viewBox="0 0 ${i} ${i}" class="rr-pod-svg">
        <defs>
          <linearGradient id="g-${f}" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" class="st0"/><stop offset="1" class="st1"/>
          </linearGradient>
        </defs>
        <circle cx="${s}" cy="${s}" r="92" class="pod-bg"/>
        <path d="${Ba(s,s,84,o,a)}" class="pod-track"/>
        <g class="pod-ticks">${Sw(s,s,72,78,o,a,24,4)}</g>
        <path d="${Ba(s,s,84,o,a)}" class="pod-fill ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${Ba(s,s,84,o,a)}" class="pod-glow ${d}" pathLength="100" stroke="url(#g-${f})"/>
        <path d="${Ba(s,s,92,o,a)}" class="pod-zone" pathLength="100"/>
        <path d="${Ba(s,s,63,o+8,a-8)}" class="pod-inner" pathLength="100"/>
        <line x1="${s}" y1="${s}" x2="${s}" y2="${s-92}" class="pod-needle"/>
      </svg>`;this.speedPod=sn("div","rr-pod rr-pod-speed",c("spd","f-speed")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">MPH</div></div>
      <div class="rr-pod-tag">VELOCITY</div>`),this.boostPod=sn("div","rr-pod rr-pod-boost",c("bst","f-boost")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">BOOST</div></div>
      <div class="rr-pod-tag">COLD-GAS</div>`),t.append(this.boostPod,this.speedPod),this.shiftEl=sn("div","rr-shift",`
      <div class="rr-shift-leds">${"<i></i>".repeat(10)}</div>
      <div class="rr-shift-row"><span class="rr-shift-g"><small>GEAR</small><b>1</b></span><span class="rr-shift-l">SHIFT</span></div>`),t.append(this.shiftEl);const l=(f,d)=>f.querySelector(d);this.sp={fill:l(this.speedPod,".pod-fill"),glow:l(this.speedPod,".pod-glow"),v:l(this.speedPod,".rr-pod-v"),needle:l(this.speedPod,".pod-needle"),zone:l(this.speedPod,".pod-zone"),inner:l(this.speedPod,".pod-inner")},this.bp={fill:l(this.boostPod,".pod-fill"),glow:l(this.boostPod,".pod-glow"),v:l(this.boostPod,".rr-pod-v"),u:l(this.boostPod,".rr-pod-u"),tag:l(this.boostPod,".rr-pod-tag"),needle:l(this.boostPod,".pod-needle"),zone:l(this.boostPod,".pod-zone"),inner:l(this.boostPod,".pod-inner")},this.popLayer=sn("div","rr-pops"),t.append(this.popLayer),this.popPool=[];for(let f=0;f<4;f++){const d=sn("div","rr-pop",'<div class="rr-pop-bar rr-pop-bar-a"></div><div class="rr-pop-txt"><span class="rr-pop-c rr-pop-m"></span><span class="rr-pop-c rr-pop-y"></span><span class="rr-pop-main"></span></div><div class="rr-pop-sub"></div><div class="rr-pop-bar rr-pop-bar-b"></div>');d.style.display="none",this.popLayer.append(d),this.popPool.push(d)}this.chips=sn("div","rr-chips"),t.append(this.chips),this.chipPool=[];for(let f=0;f<3;f++){const d=sn("div","rr-tag");d.style.display="none",this.chips.append(d),this.chipPool.push(d)}this.title=sn("div","rr-title",`
      <div class="rr-title-kicker">A ROADSTER DEMO RUN</div>
      <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
      <div class="rr-title-rule"><i></i></div>`),this.titleScrim=sn("div","rr-title-scrim"),this.start=sn("div","rr-start",`
      <div class="rr-press">PRESS START</div>
      <div class="rr-title-hint"><b>HOLD</b> TO REV &nbsp;·&nbsp; <b>RELEASE</b> ON GO</div>`),this.specs=sn("div","rr-specs",`
      <div class="rr-spec"><span class="rr-lbl">0–60 MPH</span><b>&lt;1.0<small>S</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">TOP SPEED</span><b>250+<small>MPH</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">THRUSTERS</span><b>COLD<small>GAS</small></b></div>`),this.specCells=[...this.specs.children],this.count=sn("div","rr-count",`
      <i class="rr-count-wave"></i>
      <svg viewBox="0 0 200 200" class="rr-count-ring"><circle cx="100" cy="100" r="86" class="cr-bg"/><circle cx="100" cy="100" r="86" class="cr-fg" pathLength="100"/></svg>
      <div class="rr-count-n">3</div>
      <div class="rr-tree"><i></i><i></i><i></i></div>
      <div class="rr-count-l">HOLD TO REV</div>`),t.append(this.titleScrim,this.title,this.start,this.specs,this.count),this.countN=this.count.querySelector(".rr-count-n"),this.countL=this.count.querySelector(".rr-count-l"),this.countRing=this.count.querySelector(".cr-fg"),this.countWave=this.count.querySelector(".rr-count-wave"),this.treeLights=[...this.count.querySelectorAll(".rr-tree i")],this.results=sn("div","rr-results",`
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
      </div>`),this.credit=sn("div","rr-credit","Fan-made game · not affiliated with Tesla"),t.append(this.results,this.credit),oc.has("og")&&(ke(t,"is-og",!0),t.append(sn("div","rr-og",`
        <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
        <div class="rr-og-tag">LAND THE FLIP <i>·</i> JUMP THE FLEET <i>·</i> 0-60 IN 0.81S</div>`)));const h=f=>this.results.querySelector(f);this.rr={card:h(".rr-card"),time:h(".rr-r-time"),score:h(".rr-r-score"),best:h(".rr-r-best"),launch:h(".rr-r-launch"),shifts:h(".rr-r-shifts"),rings:h(".rr-r-rings"),combo:h(".rr-r-combo"),record:h(".rr-record"),replay:h(".rr-replay"),title:h(".rr-card-title"),flag:h(".rr-card-flag"),rank:h(".rr-r-rank"),rankBox:h(".rr-rank"),cells:[...this.results.querySelectorAll(".rr-card-grid > div, .rr-card-time, .rr-card-foot, .rr-card-acts")]},this.cue=sn("div","rr-cue",'<div class="rr-cue-row"><b class="rr-cue-k">TAP</b><span class="rr-cue-t">THRUSTERS</span></div><i class="rr-cue-bar"><i></i></i>'),this.cueK=this.cue.querySelector(".rr-cue-k"),this.cueT=this.cue.querySelector(".rr-cue-t"),this.cueBar=this.cue.querySelector(".rr-cue-bar > i"),this.z60=sn("div","rr-z60",'<span class="rr-lbl">0-60 MPH</span><b class="rr-z60-v">0.00</b><small>S</small>'),this.z60V=this.z60.querySelector(".rr-z60-v"),t.append(this.cue,this.z60),this.flash=sn("div","rr-beatflash"),t.append(this.flash),this.launchLbl=sn("div","rr-launch-lbl"),t.append(this.launchLbl),this.whiteFlash=sn("div","rr-whiteflash"),t.append(this.whiteFlash),this.scoreDigits=[...this.scoreBox.querySelectorAll(".rr-d")],this.comboPop=this.scoreBox.querySelector(".rr-combo-pop"),this.comboPopN=this.comboPop.querySelector("b"),this.comboPopL=this.comboPop.querySelector("span"),this.comboEl=this.scoreBox.querySelector(".rr-combo"),this.comboX=this.scoreBox.querySelector(".rr-combo-x"),this.comboBar=this.scoreBox.querySelector(".rr-combo-bar > i"),this.timeV=this.timeBox.querySelector(".rr-time-v"),this.splitEl=this.timeBox.querySelector(".rr-split"),this.secEl=this.timeBox.querySelector(".rr-sec"),this.chipA=this.center.querySelector(".rr-chip-a"),this.chipB=this.center.querySelector(".rr-chip-b"),this.chipEl=this.center.querySelector(".rr-chip"),this.leds=[...this.shiftEl.querySelectorAll(".rr-shift-leds i")],this.shiftL=this.shiftEl.querySelector(".rr-shift-l"),this.shiftG=this.shiftEl.querySelector(".rr-shift-g b");const r=()=>{if(!this._resultsVisible||this.t<this._resultsAt+.8)return;for(const v of this.replayFns)try{v()}catch{}if(this.replayFns.length)return;window.dispatchEvent(new CustomEvent("rr:replay"));const f=window.__game,d=f&&(f.restart||f.replay||f.reset);if(d)try{d.call(f)}catch{}};window.addEventListener("pointerdown",r,{passive:!0}),this.shareBtn=h(".rr-btn-share"),this.againBtn=h(".rr-btn-again"),this.toast=h(".rr-card-toast");const u=f=>!!(f.target&&f.target.closest&&f.target.closest(".rr-btn-share"));window.addEventListener("pointerdown",f=>{this._resultsVisible&&u(f)&&f.stopImmediatePropagation()},{capture:!0}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&document.activeElement===this.shareBtn&&f.stopImmediatePropagation()},{capture:!0}),this.shareBtn.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this.share()}),this.againBtn.addEventListener("click",f=>{f.detail===0&&r()}),window.addEventListener("keydown",f=>{(f.code==="Space"||f.code==="Enter")&&r()}),window.addEventListener("rr:event",f=>{const d=f.detail||{};d.name&&this.event(d.name,d)});try{const f=localStorage.getItem("rr.best");this.best=f?+f:null}catch{this.best=null}return this.mounted=!0,this.render(0,{}),requestAnimationFrame(this._loop),this}onReplay(t){typeof t=="function"&&this.replayFns.push(t)}bindGameplay(t){return this._gp=t,this}onGameplayEvent(t){if(!t||!t.type)return;this._sawEvent=!0,t.type==="launch"&&t.rating&&(this._launchGrade=t.rating);const e={fleet:"fleet",upside:"whoosh",ringmiss:"late",offbeat:"late"};if(e[t.type]&&Pn.playing&&Math.abs((xe(t.t)??0)-Pn.time())<.3)try{Pn._play(e[t.type],{dur:1.2})}catch{}t.text&&(this.gpEvents=(this.gpEvents||[]).filter(i=>xe(t.t)===void 0||i.t0<=t.t),this.gpEvents.push({text:t.text,t0:xe(t.t)??this.t,kind:t.type,style:t.style}),this.gpEvents.length>16&&this.gpEvents.shift())}update(t,e){typeof t=="object"&&t&&(e=t,t=xe(e.t??e.time)),this.lastExternal=performance.now(),this.render(xe(t)??this.t,e||{})}popup(t,e={}){const i=xe(e.t)??this.t;this.events.push({t:i,text:String(t),sub:e.sub||"",tone:e.tone||"cyan",size:e.size||"l",dur:xe(e.dur)??3.5,key:e.key}),this.events.length>24&&this.events.splice(0,this.events.length-24)}chip(t,e={}){const i=xe(e.t)??this.t;this.events.push({t:i,text:t,sub:e.sub||"",tone:e.tone||"green",chip:!0,dur:xe(e.dur)??2.4,key:e.key})}event(t,e={}){const i=String(t).toLowerCase(),s=xe(e.t)??this.t;this._sawEvent=!0;const o=this.events.length;this._event(i,e,s);for(let a=o;a<this.events.length;a++)this.events[a].fromEvent=!0}_event(t,e,i){if(t==="shift"){const s=String(e.grade||"PERFECT").toUpperCase();this.chip(s==="PERFECT"?"PERFECT SHIFT":s==="GOOD"?"GOOD SHIFT":"LATE SHIFT",{t:i,tone:s==="PERFECT"?"green":s==="GOOD"?"cyan":"orange",sub:e.points?"+"+e.points:""})}else t==="launch"?this._launchGrade=String(e.grade||"PERFECT").toUpperCase():t==="combo"?+(e.n??e.combo):t==="pylon"||t==="hit"?this.chip("COMBO LOST",{t:i,tone:"orange"}):t==="airtime"?this.popup("AIR TIME",{t:i,tone:"cyan",size:"l",dur:2.6,sub:e.secs?e.secs.toFixed(2)+" s":""}):t==="record"&&(this._record=!0)}_readGame(){const t=window.__game||{};if(!window.__game&&!this._gp)return null;let e;try{e=xe(t.time)??xe(t.t)??xe(t.musicTime)??(typeof t.getTime=="function"?xe(t.getTime()):void 0)??xe(t.clock&&(t.clock.t??t.clock.time))??xe(t.state&&(t.state.t??t.state.time))}catch{}let i;try{i=this._gp&&this._gp.state||typeof t.hudState=="function"&&t.hudState()||t.gp&&t.gp.state||t.gameplay&&t.gameplay.state||typeof t.getState=="function"&&t.getState()||t.state&&typeof t.state=="object"&&t.state||{},e===void 0&&xe(i.t)!==void 0&&(e=i.t)}catch{i={}}return{t:e,s:i}}_poll(t){const e=this._readGame();if(!e&&t===void 0&&!Pn.playing)return;let i=xe(t)??(e&&e.t);i===void 0&&Pn.playing&&(i=Pn.time()),i===void 0&&(i=this._seekT??0);const s=e&&e.s||{};if(this.render(i,s),performance.now()-Pn.lastTickAt>250)try{Pn.tick(i,this._merged||s)}catch{}}_wrapSeek(){const t=window.__game;if(!t||typeof t.seek!="function"||t.seek.__hudWrapped)return;const e=t.seek,i=this,s=function(o){return i._seekT=+o,Promise.resolve(e.apply(this,arguments)).then(a=>(performance.now()-i.lastExternal>250&&i._poll(+o),a))};s.__hudWrapped=!0;try{t.seek=s}catch{}}render(t,e={}){if(!this.mounted)return;t<this.prevT-.5&&(this.events=this.events.filter(nt=>nt.t<=t),this._record=!1,this.recordSaved=!1),this.prevT=t,this.t=t;const i=ww(t),s={};for(const nt in i)s[nt]=i[nt];for(const nt in e)e[nt]!==void 0&&e[nt]!==null&&(s[nt]=e[nt]);if(!Array.isArray(e.popups)){let nt=null;try{const kt=window.__game;nt=this._gp&&this._gp.state||kt&&(kt.gameplay&&kt.gameplay.state||kt.gp&&kt.gp.state)||null}catch{}if(nt&&Array.isArray(nt.popups)){e={section:nt.section,launched:nt.launched,launchT:nt.launchT,finishT:nt.finishT,airborne:nt.airborne,results:nt.results,mph:nt.mph,launch:nt.launch,finished:nt.finished,...e,popups:nt.popups};for(const kt in e)e[kt]!==void 0&&e[kt]!==null&&(s[kt]=e[kt])}}const o=Array.isArray(e.popups)||xe(e.mph)!==void 0;o&&(e.shift&&typeof e.shift=="object"&&(s.shift={phase:xe(e.shift.light)??xe(e.shift.phase),window:!!(e.shift.green??e.shift.window),active:e.shift.active!==!1}),xe(e.perfectShifts)!==void 0&&(s.shifts=e.perfectShifts),e.results&&typeof e.results=="object"&&(s.results=e.results),e.launched||(s.launchT=void 0),s._gpLaunch=e.launch||null),this._gpState=o;const a=xe(e.mph)??xe(e.speed)??xe(e.speedMph)??i.speed;s.speed=a,s.boost=xe(e.boost)??xe(e.boostMeter)??i.boost,s.rev=xe(e.rev)??xe(e.revLevel)??i.rev,this._merged=s;const c=t/xi,l=c-Math.floor(c),h=Math.pow(1-l,3);this.root.style.setProperty("--pulse",h.toFixed(3));let r=0,u=0;try{const nt=window.__game,kt=this._gp&&this._gp.state&&this._gp.state.cam||nt&&nt.gp&&nt.gp.state&&nt.gp.state.cam;kt&&(r=xe(kt.shake)??0,u=xe(kt.punch)??0)}catch{}const f=Re(r*.9+u*.012);ve(this.root,"--shx",(Math.sin(t*73.1)*f*7).toFixed(2)+"px"),ve(this.root,"--shy",(Math.cos(t*57.7)*f*5).toFixed(2)+"px"),ve(this.root,"--ab",(.6+f*5).toFixed(2));const d=o?e.finished?(xe(e.finishT)??t)+jm:1/0:vw;this._resultsAt=d;const v=o?e.finished?xe(e.finishT)??t:1/0:Cr;this._finishing=t>=v,ke(this.root,"is-finish",this._finishing);const g=t-v;ve(this.whiteFlash,"opacity",(this._finishing?.75*Math.pow(Re(1-g/.34),2):0).toFixed(3));const m=t<er,p=t>=d,y=c<9.6;ke(this.root,"is-intro",m),ke(this.root,"is-title",y),ke(this.root,"is-results",p),ke(this.root,"is-flight",c>=96&&c<128);const M=typeof s.section=="string"&&wp[s.section]?[0,...wp[s.section]]:_w(c);Je(this.chipA,M[1]),Je(this.chipB,M[2]),Je(this.secEl,"");const _=o?e.launched?xe(e.launchT)??er:void 0:er,D=o?e.finished?xe(e.finishT)??t:t:Math.min(t,Cr),I=_===void 0?0:Math.max(0,D-_);this._lap=I,this._finishT=o?e.finished?xe(e.finishT)??t:void 0:t>=Cr?Cr:void 0,Je(this.timeV,Ya(I));const P=c>=48&&c<60;ke(this.splitEl,"on",P),Je(this.splitEl,P?"CP1  "+Ya(Ki(48)-(_??er)):"");const F=Math.max(0,Math.floor(xe(s.score)??0)),R=String(Math.min(F,9999999)).padStart(7,"0"),x=Math.min(6,R.length-String(F).length);this.scoreDigits.forEach((nt,kt)=>{Je(nt,R[kt]),ke(nt,"ghost",kt<x)});const z=Math.floor(xe(s.combo)??0);ke(this.comboEl,"on",z>=2),Je(this.comboX,"x"+z),ve(this.comboBar,"width",(Re(z%5/5+(z%5===0&&z>0?1:0))*100).toFixed(0)+"%"),!o&&z>this.prevCombo&&z>=10&&z%10===0&&!this._sawEvent&&this.events.push({t:this._comboT(z,t),text:`x${z} COMBO`,lane:"combo",dur:1.5}),this.prevCombo=z;const G=c>=16&&c<47.5&&(!o||s.section==="launch"&&!!e.launched&&!e.airborne);if(ke(this.shiftEl,"on",G),G){let nt=xe(s.shift&&s.shift.phase);nt===void 0&&(nt=(c-16)%4/4);const kt=s.shift&&typeof s.shift.window=="boolean"?s.shift.window:nt>.82,se=kt?this.leds.length:Math.floor(Re(nt/.9)*this.leds.length+.001);this.leds.forEach((le,ut)=>{ke(le,"on",ut<se),ke(le,"win",kt)}),ke(this.shiftEl,"win",kt),Je(this.shiftL,kt?"SHIFT!":se>=7?"READY":"SHIFT");const fe=Math.max(1,Math.floor(xe(s.gear)??1+(xe(s.shifts)??0)));Je(this.shiftG,String(fe)),ve(this.shiftEl,"--kick",(nt<.12&&c>17?1-nt/.12:0).toFixed(3))}const st=Re(a/300);ve(this.sp.fill,"stroke-dasharray",`${(st*100).toFixed(2)} 100`),ve(this.sp.glow,"stroke-dasharray",`${(st*100).toFixed(2)} 100`),ve(this.sp.needle,"transform",`rotate(${(-135+270*st).toFixed(2)}deg)`),Je(this.sp.v,String(Math.round(a))),ke(this.speedPod,"redline",a>255),ve(this.sp.zone,"stroke-dasharray","0 100"),ve(this.sp.inner,"stroke-dasharray",`${(Re(c%4/4)*100).toFixed(1)} 100`);const vt=c>=8&&c<16.5,Rt=c>=88&&c<96;let mt=Re(vt?s.rev:s.boost);if(Rt){const nt=Math.floor(c-88),kt=c-88-nt;mt=Math.max(mt*.25,Re((nt+Xr(Re(kt/.22)))/6.5))}else c>=96&&c<97&&(mt=Math.max(mt,1-Re(c-96.5)));ke(this.boostPod,"charging",Rt),ve(this.boostPod,"--kick",(Rt?h:0).toFixed(3)),ke(this.boostPod,"rev",vt),ve(this.bp.fill,"stroke-dasharray",`${(mt*100).toFixed(2)} 100`),ve(this.bp.glow,"stroke-dasharray",`${(mt*100).toFixed(2)} 100`),ve(this.bp.needle,"transform",`rotate(${(-135+270*mt).toFixed(2)}deg)`),Je(this.bp.v,String(Math.round(mt*100))),Je(this.bp.u,vt?"REV":"BOOST"),Je(this.bp.tag,vt?"LAUNCH":Rt?mt>=.999?"READY":"ARMING":"COLD-GAS");const It=Array.isArray(e.revTarget)?e.revTarget:this._gpState?[.86,1]:[.78,.94];vt?(ve(this.bp.zone,"stroke-dasharray",`0 ${(It[0]*100).toFixed(1)} ${((It[1]-It[0])*100).toFixed(1)} 100`),ke(this.boostPod,"inzone",mt>=It[0]&&mt<=It[1])):(ve(this.bp.zone,"stroke-dasharray","0 100"),ke(this.boostPod,"inzone",!1)),ke(this.boostPod,"full",!vt&&mt>.97),ve(this.bp.inner,"stroke-dasharray",`${(c>=88&&c<96?(c-88)/8*100:0).toFixed(1)} 100`),ke(this.root,"hide-pods",y||p||this._finishing);try{this.deck.update(!1,Ya(I),z,h,z>=10)}catch{}this._renderTitle(t,c,l),this._renderCount(t,c,l,s),this._renderCue(t,e),this._renderPops(t,c,s),this._renderResults(t,s),ve(this.flash,"opacity",(m||p?0:h*(c>=16?.1:0)).toFixed(3))}_renderCue(t,e){const i=e&&e.cue,s=!!(i&&i.active&&!this._finishing);if(ke(this.cue,"on",s),s){const c=String(i.text||"").split(":");Je(this.cueK,i.done&&i.grade?String(i.grade):c.length>1?c[0].trim():""),Je(this.cueT,i.done&&i.grade?i.kind==="hold"?"LANDING":"KICKFLIP":c.length>1?c.slice(1).join(":").trim():i.text);const l=!i.done&&Math.abs(t-(xe(i.tHit)??t))<.14;ke(this.cue,"hot",l||i.kind==="hold"&&!!e.holding&&!i.done),ke(this.cue,"done",!!i.done),ke(this.cue,"hold",i.kind==="hold"),ve(this.cueBar,"width",(Re(xe(i.k)??0)*100).toFixed(1)+"%")}this._cueOn=s,this._cueTxt=s?(this.cueK.textContent||"")+(this.cueT.textContent||""):"",this._cueDodge(s,e&&e.carScreen);const o=e&&e.zero60,a=!!(o&&o.show)&&!this._finishing;ke(this.z60,"on",a),a&&(Je(this.z60V,(xe(o.t)??0).toFixed(2)),ke(this.z60,"frozen",!!o.frozen))}_comboT(t,e){if(!this._sawEvent){const i=96+2*t;if(Math.abs(Ki(i)-e)<3)return Ki(i)}return e}_renderTitle(t,e,i){const s=e<9.6,o=Re((e-8.8)/.8);ve(this.specs,"display",s?"":"none");const a=Xr(Re(t/.6));if(ve(this.title,"opacity",s?(a*(1-o)).toFixed(3):"0"),ve(this.title,"display",s?"":"none"),ve(this.start,"display",s?"":"none"),ve(this.titleScrim,"display",s?"":"none"),ve(this.start,"opacity",s?(a*(1-o)).toFixed(3):"0"),ve(this.titleScrim,"opacity",s?(1-o).toFixed(3):"0"),!s)return;ve(this.title,"transform",`translate(-50%, -50%) scale(${(.96+.04*a+.08*o).toFixed(3)})`);const c=this.start.querySelector(".rr-press");ke(c,"lit",e<2?!0:i<.5),ve(this.title,"--wipe",(Re(t/.5)*115).toFixed(1)+"%"),ke(this.title,"wiped",t>=.5),this.specCells.forEach((l,h)=>{const r=hs(Re((e-1-h*.5)/.9));ve(l,"opacity",(Re((e-1-h*.5)/.4)*(1-o)).toFixed(3)),ve(l,"transform",`translateY(${((1-r)*30).toFixed(1)}px)`)})}_renderCount(t,e,i,s){let o=!1,a="",c="",l=0,h=1,r=1,u=!1;if(e>=10&&e<16){const m=Math.floor((e-10)/2),p=(e-10-m*2)/2;o=!0,a=String(3-m),c="HOLD TO REV",l=1-p,h=1.35-.35*hs(p*4),r=1-.35*Re((p-.7)/.3)}else if(e>=16&&e<17.4){const m=e-16;o=!0,u=!0,a="GO",l=0,c="";const p=Re((m-1)/.4);h=1.5-.5*hs(m*2.2)+.9*p*p,r=1-p}const d=e>=16&&e<18?this._gpState?s._gpLaunch:this._launchGrade||s.launch||"PERFECT":null;if(!d)ve(this.launchLbl,"display","none");else{const m=String(d).toUpperCase();ve(this.launchLbl,"display",""),Je(this.launchLbl,m+" LAUNCH");const p="rr-launch-lbl g-"+m.toLowerCase();this.launchLbl.__cn!==p&&(this.launchLbl.__cn=p,this.launchLbl.className=p);const y=hs(Re((e-16)/.35));ve(this.launchLbl,"transform",`translate(-50%, 0) scale(${(1.4-.4*y).toFixed(3)}) skewX(-10deg)`),ve(this.launchLbl,"opacity",Re((e-16)/.08).toFixed(3))}if(ve(this.count,"display",o?"":"none"),!o)return;ke(this.count,"go",u);const v=u?3:Math.floor((e-10)/2)+1;this.treeLights.forEach((m,p)=>{ke(m,"on",p<v),ke(m,"g",u)});const g=u?(e-16)/1.6:(e-10)%2/1.2;ve(this.countWave,"transform",`scale(${(.8+1.1*Xr(g)).toFixed(3)})`),ve(this.countWave,"opacity",(Re(1-g)*(u?1:.7)).toFixed(3)),ve(this.count,"--hit",Math.pow(1-Re(u?(e-16)/.5:(e-10)%2/.5),2).toFixed(3)),Je(this.countN,a),Je(this.countL,c),ve(this.countRing,"stroke-dasharray",`${(l*100).toFixed(2)} 100`),ve(this.count,"transform",`translate(-50%, -50%) scale(${h.toFixed(3)})`),ve(this.count,"opacity",r.toFixed(3))}_activeCallouts(t,e){const i=[],s=Array.isArray(e.popups)?e.popups:this.gpEvents&&this.gpEvents.length?this.gpEvents:null;if(s){const o=[];for(const c of s){const l=Mw[c.kind]||(c.style==="bad"?{chip:!0,tone:"orange",dur:1}:c.style==="big"?{tone:"cyan",size:"l",pri:2,dur:2}:{chip:!0,tone:"cyan",dur:1.2});if(l.skip||!c.text)continue;if(l.lane==="combo"){const f=+(String(c.text).match(/\d+/)||[0])[0];if(!(f>=10&&f%10===0))continue}const h=l.slam?2.4:l.chip?bw:l.moment?bp:Mp,r=(xe(c.t0)??0)+(l.delay||0),u=Math.min(2.4-(l.delay||0),l.dur||1.5,h);o.push({chip:!!l.chip,lane:l.lane,pri:l.pri??1,slam:!!l.slam,t:r,t0p:xe(c.t0)??0,dur:u,text:l.text||c.text,sub:l.subFn?l.subFn(c,e,this):l.sub||"",tone:l.tone||"cyan",size:l.size||"l",flip:!!l.flip,wrap:!!l.wrap})}const a=o.filter(c=>!c.chip&&!c.lane);for(const c of o){if(c.chip){let l=c.t;for(const h of a)l>=h.t&&l<h.t+h.dur&&(l=h.t+h.dur);if(l>c.t){const h=Math.min(l+c.dur,c.t0p+2.45);c.dur=Math.max(0,h-l),c.t=l}}c.dur>0&&t>=c.t&&t<c.t+c.dur&&i.push(c)}for(const c of this.events)!c.fromEvent&&t>=c.t&&t<c.t+c.dur&&i.push(c);return i}for(const o of yw){const a=Ki(o.b),c=o.text==="FINISH"?Ki(o.dur):Math.min(/^#\d/.test(o.text)?bp:Mp,Ki(o.dur));t>=a&&t<a+c&&i.push({...o,pri:o.text==="FINISH"?9:3,slam:o.text==="FINISH",t:a,dur:c,sub:o.subFn?o.subFn():o.sub||""})}if(!this._sawEvent)for(const o of wl){const a=Ki(o);t>=a&&t<a+Ki(3)&&i.push({chip:!0,t:a,dur:Ki(3),text:"PERFECT SHIFT",sub:"+500",tone:"green"})}for(const o of this.events)t>=o.t&&t<o.t+o.dur&&i.push(o);return i}_cueDodge(t,e){if(!t||!e||!e.on||!Number.isFinite(e.y)){this._cueFade(1);return}const i=this.root&&this.root.clientHeight||window.innerHeight||1,s=this.cue.offsetTop/i,o=(1-e.y)/2,a=Math.max(.012,(e.r||0)*.5/2.4),c=Math.min(.97,o+a*1.25);this._cueFade(c>s+.01?.75:1)}_cueFade(t){this.__cueF!==t&&(this.__cueF=t,this.cue.style.opacity=t<1?String(t):"")}_popDodge(t,e,i,s){const o=this.root&&this.root.clientHeight||window.innerHeight||1,a=this.root&&this.root.clientWidth||window.innerWidth||1,c=this.popLayer.offsetTop/o;if(!!(s&&s.slam))return this._popSlot=null,[0,1,1];const h=(t.offsetWidth||0)/a,r=(t.offsetHeight||0)/o,u=Math.min(.78,h>0?(a>o?.6:.84)/h:1,r>0?(a>o?.125:.15)/r:1),f=r*u/2;let d=.12;const v=y=>{try{if(!y||y.style.display==="none")return;const M=y.getBoundingClientRect();M.bottom>0&&M.height>0&&(d=Math.max(d,M.bottom/o))}catch{}};v(this.scoreBox),this.z60.classList.contains("on")&&v(this.z60),v(this.launchLbl);let g=d+f+.022,m=1,p=1;if(e&&e.on&&Number.isFinite(e.y)){const y=(1-e.y)/2,M=Math.max(.03,(e.r||0)*.5*(a>o?.8:.75)),_=y-M-.03-(d+.022);if(2*f>_){p=Re(_/Math.max(.001,2*f),.72,1);const D=f*p;g=d+D+.022,2*D>_&&(m=Re(.6+.4*(_/Math.max(.001,2*D)),.8,1))}}return this._popSlot={key:i,y:g},[(g-c)*o,m,u*p]}_renderPops(t,e,i){const s=this._activeCallouts(t,i),a=s.filter(g=>!g.chip&&!g.lane).sort((g,m)=>(m.pri??1)-(g.pri??1)||m.t-g.t)[0],c=s.filter(g=>g.lane==="combo").sort((g,m)=>m.t-g.t)[0],l=this._cueOn?String(this._cueTxt||"").replace(/[^A-Z]/gi,"").toUpperCase():"",h=g=>String(g||"").replace(/[^A-Z]/gi,"").toUpperCase(),r=this._cueOn?h(String(this._cueTxt||"").trim().split(/\s+/).pop()):"",u=g=>{if(!l)return!1;const m=h(g.text);return m.length>2&&(m.includes(l)||l.includes(m)||r&&m.includes(r))},f=this._finishing?[]:s.filter(g=>g.chip&&!u(g)).sort((g,m)=>m.t-g.t).slice(0,this.chipPool.length);this.popPool.forEach((g,m)=>{m>0&&ve(g,"display","none")});const d=this.popPool[0];this._popKey=a?a.text+"@"+a.t.toFixed(3):"";let v=!1;if(!a||t>=this._resultsAt)ve(d,"display","none");else{this.launchLbl.style.display!=="none"&&ve(this.launchLbl,"display","none"),ve(d,"display","");const g=t-a.t,m=g/a.dur,p=Re(g/(a.slam?.1:.16)),y=a.slam?0:Re(a.dur-g<.22?1-(a.dur-g)/.22:0),M=(a.slam?2.6-1.6*hs(p):1.7-.7*hs(p))*(1-.35*y),_=Re(g/.04)*(1-y),D=p<1?(1-p)*(a.slam?14:6)*Math.sin(g*90):0,I=`rr-pop tone-${a.tone} size-${a.size}${a.wrap?" wrap":""}${a.flip?" flip":""}${a.slam?" slam":""}${a.sub?" has-sub":""}`;d.__cn!==I&&(d.__cn=I,d.className=I);const P=String(a.text).replace(/^x(\d)/i,"×$1").replace(/\bx(\d+)\b/g,"×$1");for(const z of d.querySelectorAll(".rr-pop-c, .rr-pop-main"))Je(z,P);Je(d.querySelector(".rr-pop-sub"),a.sub||"");const[F,R,x]=this._popDodge(d,i.carScreen,this._popKey,a);ve(d,"transform",`translate(-50%, -50%) translate(${D.toFixed(1)}px, ${F.toFixed(1)}px) scale(${(M*x).toFixed(3)})${a.flip?` rotate(${(180*(1-hs(Re((g-.08)/.4)))).toFixed(1)}deg)`:""}`),ve(d,"opacity",(_*R).toFixed(3)),v=!!this.chipB&&String(a.text).toUpperCase().includes(String(this.chipB.textContent||"").trim().toUpperCase())&&String(this.chipB.textContent||"").trim().length>2,ve(d,"--split",((1-p)*10+1.5+2*Math.pow(1-Re(e%1),4)*(m<.9?1:0)).toFixed(2)+"px"),ve(d,"--bar",(Xr(Re(g/.35))*100).toFixed(1)+"%")}if(ve(this.chipEl,"opacity",v?"0":""),!c||this._finishing)ke(this.comboPop,"on",!1);else{const g=t-c.t,m=g/c.dur,p=(String(c.text).match(/\d+/)||["0"])[0];Je(this.comboPopN,"×"+p),Je(this.comboPopL,"COMBO"),ke(this.comboPop,"on",!0);const y=hs(Re(g/.2)),M=Re((m-.8)/.2);ve(this.comboPop,"opacity",((1-M)*Re(g/.04)).toFixed(3)),ve(this.comboPop,"transform",`translateX(${((1-y)*-30).toFixed(1)}px) scale(${(1.25-.25*y).toFixed(3)})`)}this.chipPool.forEach((g,m)=>{const p=f[m];if(!p){ve(g,"display","none");return}ve(g,"display","");const y=t-p.t,M=y/p.dur,_=hs(Re(y/.18)),D=Re((M-.75)/.25),I=`rr-tag tone-${p.tone}`,P=`<b>${String(p.text).replace(/\bx(\d+)/g,"×$1")}</b>${p.sub?`<span>${p.sub}</span>`:""}`;g.__cn!==I&&(g.__cn=I,g.className=I),g.__h!==P&&(g.__h=P,g.innerHTML=P),ve(g,"transform",`translateX(${((1-_)*-40).toFixed(1)}px) translateY(${(m*115-D*40).toFixed(0)}%)`),ve(g,"opacity",((1-D)*Re(y/.05)).toFixed(3))})}_renderResults(t,e){const i=t>=this._resultsAt;if(this._resultsVisible=i,ve(this.results,"display",i?"":"none"),!i)return;const s=t-this._resultsAt,o=e.results||{},a=hs(Re(s/.3));ve(this.results,"opacity",Re(s/.12).toFixed(3)),ve(this.rr.card,"transform",`translateY(${((1-a)*60).toFixed(1)}px) scale(${(.9+.1*a).toFixed(3)})`);const c=Math.floor(xe(o.score)??xe(e.score)??0),l=Math.floor(c*Xr(Re(s/.32)));Je(this.rr.time,Ya(xe(o.time)??this._lap)),Je(this.rr.score,al(l)),this._shareScore=c;const h=(o.launch||this._launchGrade||e.launch||"PERFECT").toString().toUpperCase();Je(this.rr.launch,xe(o.zero60)!==void 0?`${h} · ${xe(o.zero60).toFixed(2)}S`:h),Je(this.rr.shifts,`${o.flips??e.flips??"—"}`),Je(this.rr.rings,xe(o.fleetFlipped)!==void 0?`${o.fleetFlipped} VEHICLES`:`${o.rings??e.rings??"—"}/${o.ringsTotal??e.ringsTotal??15}`),Je(this.rr.combo,"×"+(o.maxCombo??e.maxCombo??e.combo??0));const r={PERFECT:1,GOOD:.65,LATE:.3}[h]??.5,u=xe(o.flips)!==void 0?xe(o.flips)/13:(xe(o.perfectShifts)??xe(e.shifts)??0)/Math.max(1,xe(e.shiftsTotal)??7),f=(xe(o.rings)??xe(e.rings)??0)/Math.max(1,xe(o.ringsTotal)??xe(e.ringsTotal)??15),d=(r+Re(u)+Re(f))/3,v=d>=.9?"S":d>=.75?"A":d>=.55?"B":"C";Je(this.rr.rank,v),this._shareRank=v,this._shareFleet=Math.floor(xe(o.fleetFlipped)??0),ke(this.rr.rankBox,"rank-s",v==="S");const g=Re((s-.1)/.18);ve(this.rr.rankBox,"opacity",g.toFixed(3)),ve(this.rr.rankBox,"transform",`scale(${(2.2-1.2*hs(g)).toFixed(3)}) rotate(${((1-g)*-12).toFixed(1)}deg)`),this.rr.cells.forEach((y,M)=>{const _=Re((s-.04-M*.02)/.12);ve(y,"opacity",_.toFixed(3)),ve(y,"transform",`translateX(${((1-Xr(_))*-18).toFixed(1)}px)`)}),ve(this.rr.card,"--sweep",(-30+170*Xr(Re((s-.04)/.24))).toFixed(1)+"%");let m=this._record||xe(e.best)===void 0&&(this.best===null||c>this.best);ol&&(m=!0);const p=ol?c:Math.max(c,xe(e.best)??this.best??0);if(Je(this.rr.best,al(m?l:p)),!ol&&!this.recordSaved&&s>.6&&(this.recordSaved=!0,m)){try{localStorage.setItem("rr.best",String(c))}catch{}try{Pn.sfx("record")}catch{}}ke(this.rr.record,"on",m&&s>.2),Je(this.rr.flag,""),ke(this.rr.replay,"lit",s>.8?t/xi%1<.6:!0),ve(this.rr.record,"transform",`scale(${(1+.08*Math.pow(1-t/xi%1,3)).toFixed(3)}) rotate(-4deg)`)}shareText(){const t=al(Math.max(0,Math.floor(this._shareScore||0))),e=Number.isFinite(this._shareFleet)&&this._shareFleet>0?this._shareFleet:0,i=this._shareRank?`, rank ${this._shareRank}`:"";return`I ${e?`flipped ${e} Teslas`:"flipped the entire Tesla fleet"}${i} in Roadster Rush — score ${t}. Beat me 👉 ${_p} #TeslaRoadster`}async share(){if(ol)return;const t=this.shareText(),e={title:"Roadster Rush",text:t,url:_p};try{if(navigator.share&&(!navigator.canShare||navigator.canShare(e)))return await navigator.share({title:e.title,text:t}),this._toast("SHARED")}catch(o){if(o&&o.name==="AbortError")return}const i="https://twitter.com/intent/tweet?text="+encodeURIComponent(t),s=document.createElement("a");s.href=i,s.target="_blank",s.rel="noopener noreferrer",document.body.append(s),s.click(),s.remove();try{navigator.clipboard&&(await navigator.clipboard.writeText(t),this._toast("COPIED · OPENING X"))}catch{}}_toast(t){this.toast&&(this.toast.textContent=t,this.toast.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toast.classList.remove("on"),1800))}preview(){this.mount();const t=oc.get("bg");if(t){const s=sn("img","rr-preview-bg");s.src=t,Object.assign(s.style,{position:"fixed",inset:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"0"}),document.body.prepend(s)}else document.body.style.background="radial-gradient(120% 70% at 50% 30%, #2a0f4a 0%, #0a0618 55%, #02010a 100%)";let e=null;const i=oc.get("gp")==="1"?hw(()=>Promise.resolve().then(()=>RM),void 0).then(s=>{e=s.createGameplay({autoplay:!0}),e.muted=!0}).catch(()=>{e=null}):Promise.resolve();window.__hudPreview={ready:i,seek:async s=>{await i,e&&e.seekTo?(e.seekTo(s,1/60),this.update(s,e.state)):this.update(s,{})}},this._previewMode=!0}}const ho=typeof window<"u"&&window.__rrHud||new Bf;if(typeof window<"u"){window.__rrHud=ho;const n=()=>ho.mount();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):n()}Bf.prototype.setState=function(n,t){return this.update(n,t)};Bf.prototype.frame=function(n,t){return this.update(n,t)};const Zm=new URLSearchParams(location.search),kf=Zm.has("capture"),Ew=Zm.get("autoplay")==="1",Aw=136*Xi,Jm=134*Xi,af=Aw+20,Cw=3.9,ru=1/60,Rw=document.getElementById("app")||document.body,Wn=new wy({antialias:!1,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:kf});Wn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Wn.setSize(window.innerWidth,window.innerHeight);Wn.toneMapping=or;Wn.outputColorSpace=Cn;Wn.shadowMap.enabled=!1;Wn.info.autoReset=!1;Wn.domElement.id="gl";Rw.appendChild(Wn.domElement);const ss=new vc,rs=new gi(50,window.innerWidth/window.innerHeight,.1,6e3);rs.position.set(0,1.4,7);const Ms=vb({scene:ss,renderer:Wn,camera:rs});if(!ss.environment){const n=new co(Wn),t=new vc;t.background=new Vt(1182244),ss.environment=n.fromScene(t,.04).texture,n.dispose()}const Qm={};function Pw(){const n=(l,h=1.2,r=0)=>{const u=jo(Ji(l*Xi)).pos;return[u.x+r,u.y+h,u.z,l]},t={intro:[0,1.2,0,12],launch:n(36),reveal:n(52),flip:[He.flip.xLand,8,He.flip.zLand,70],build:n(92),mega:n(110,8),outro:n(133)},e=new an,i=(l,h,r,u,f,d,v,g,m)=>{const p=new ye(new Mn(l,h),new Ke({color:new Vt(r).multiplyScalar(u),side:Xe,fog:!1}));return p.position.set(f,d,v),p.rotation.set(g,m,0),e.add(p),p};i(16,60,16777215,1.5,0,16,0,Math.PI/2,0),i(60,1.6,16722600,2.2,-22,2.2,0,0,Math.PI/2),i(60,1.6,2287359,2.2,22,2.2,0,0,-Math.PI/2),i(40,.6,14542591,2,0,.9,26,0,0);const s=new Qp(256,{type:is,generateMipmaps:!1}),o=new Zp(.3,4e3,s),a=new co(Wn),c=rs.position.clone();ss.add(e,o);try{for(const[l,[h,r,u,f]]of Object.entries(t))rs.position.set(h,r,u),Ms.update(f*Xi,1/60),e.position.set(h,r,u),o.position.set(h,r,u),o.update(Wn,ss),Qm[l]=a.fromCubemap(s.texture).texture}catch(l){console.warn("[main] probes",l)}ss.remove(e,o),e.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),s.dispose(),a.dispose(),rs.position.copy(c),Ms.update(0,1/60)}Pw();const Lr=zb({renderer:Wn,envMap:Ms.envMap||ss.environment});ss.add(Lr.object);const bs=aw({renderer:Wn,scene:ss,camera:rs}),Hn=Ju({camera:rs,car:Lr,world:Ms,fx:bs,hud:ho,audio:Pn,autoplay:Ew,driveCar:!0});Ms.setCamera&&Ms.setCamera(rs);let Qi="attract",Dn=0,cf=performance.now()/1e3,lf=performance.now();const Jo=[];function nh(){Hn.reset(),bs.reset&&bs.reset(),Lr.reset&&Lr.reset(),Dn=0}function Sl(n,t){Hn.update(t,n),Dn=n,Ms.update(Dn,t),bs.update(t,{...Hn.fxInput(),gp:Hn})}function Hf(){Lr.setEnvMap&&Lr.setEnvMap(Qm[Hn.state.section]||null);const n=Hn.hudState();ho.update(Dn,n),Wn.info.reset(),bs.render()}function Qo(){nh(),Qi="run",Pn.unlock();const n=()=>Pn.play(0);Pn.buffer?n():Pn.load().then(n,n)}function Sp(n){n&&n.type==="keydown"&&n.code!=="Space"&&n.code!=="Enter"||(Qi==="attract"||Qi==="done"&&Dn>Jm+1.2)&&Qo()}kf||(window.addEventListener("pointerdown",Sp,{capture:!0}),window.addEventListener("keydown",Sp,{capture:!0}),Hn.bindInput(window));ho.onReplay(()=>Qo());function tg(n){requestAnimationFrame(tg);const t=Math.min(.1,Math.max(0,(n-lf)/1e3));if(lf=n,t>0&&(Jo.push(t),Jo.length>60&&Jo.shift()),!(hf||Qi==="seek")){if(Qi==="attract"){let e=n/1e3-cf;e>Cw&&(cf=n/1e3,nh(),e=0);const i=Math.max(1e-4,e-Dn);e>Dn?Sl(e,i):(Ms.update(Dn,t),bs.update(t,{...Hn.fxInput(),gp:Hn}))}else if(Qi==="run"||Qi==="done"){let e=Dn+t;if(Pn.playing){const s=Pn.time()-e;e=s>.5?Pn.time():e+Math.max(-.5*t,Math.min(.5*t,s*.15))}if(e>=af&&(e=af),e>Dn){const s=e-Dn;if(s>.25){let o=Dn;for(;o<e-1e-9;){const a=Math.min(.1,e-o);o+=a,Sl(o,a)}}else Sl(e,s)}else Ms.update(Dn,t);Dn>=Jm&&Qi==="run"&&(Qi="done");const i=Hn.state;try{Pn.tick(Dn,{...Hn.hudState(),mph:i.mph,section:i.section,mode:i.mode,rcs:i.rcs,airborne:i.airborne,flap:i.flap,lastThrustT:i.lastFlapT})}catch{}}Hf()}}function Lw(){const n=window.innerWidth,t=window.innerHeight;Wn.setSize(n,t),rs.aspect=n/t,rs.updateProjectionMatrix(),bs.setSize&&bs.setSize(n,t)}window.addEventListener("resize",Lw);let hf=!1;function eg(n){const t=Math.max(0,Math.min(af,+n||0));hf=!0,Qi="seek";try{Pn.stop(),nh(),Hn.seekTo(t,ru),Dn=t,Ms.update(Dn,ru),bs.update(ru,{...Hn.fxInput(),gp:Hn}),Hf()}finally{hf=!1}return new Promise(e=>requestAnimationFrame(()=>e(Dn)))}const ng={ready:!1,version:1,get t(){return Dn},time:()=>Dn,get mode(){return Qi},seek:eg,start(){return Qo(),!0},restart(){Qo()},replay(){Qo()},stats(){const n=Wn.info.render,t=Jo.length?Jo.reduce((e,i)=>e+i,0)/Jo.length:0;return{fps:t>0?Math.round(10/t)/10:0,drawCalls:n.calls,triangles:n.triangles,t:Dn,mode:Qi}},hudState:()=>Hn.hudState(),get state(){return Hn.state},get speed01(){return Math.min(1,(Hn.state.v||0)/72)},scene:ss,camera:rs,renderer:Wn,world:Ms,car:Lr.object,carApi:Lr,fx:bs,gp:Hn,gameplay:Hn,hud:ho,audio:Pn};eg.__hudWrapped=!0;window.__game=ng;nh();Sl(.001,.001);{const n=[];ss.traverse(t=>{t.visible||(n.push(t),t.visible=!0)});try{Wn.compile(ss,rs)}catch{}try{bs.render()}catch{}for(const t of n)t.visible=!1}Hf();kf||Pn.load();requestAnimationFrame(n=>{lf=n,cf=n/1e3,ng.ready=!0,requestAnimationFrame(tg)});new URLSearchParams(location.search).has("hudpreview")&&ho.preview();
