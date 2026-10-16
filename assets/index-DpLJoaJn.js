var bp=Object.defineProperty;var Sp=(i,t,e)=>t in i?bp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ku=(i,t,e)=>Sp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",wp=0,Hu=1,Tp=2,$0=1,Ep=2,bs=3,hs=0,Gn=1,Ge=2,Ps=0,no=1,dn=2,Gu=3,Vu=4,Ap=5,cr=100,Cp=101,Rp=102,Pp=103,Lp=104,Dp=200,Ip=201,Up=202,Fp=203,rh=204,oh=205,Np=206,zp=207,Op=208,Bp=209,kp=210,Hp=211,Gp=212,Vp=213,Wp=214,ah=0,lh=1,ch=2,fo=3,hh=4,uh=5,fh=6,dh=7,K0=0,Xp=1,qp=2,Ls=0,Yp=1,$p=2,Kp=3,jp=4,Zp=5,Jp=6,Qp=7,j0=300,po=301,mo=302,ph=303,mh=304,Kl=306,gh=1e3,vr=1001,vh=1002,ri=1003,tm=1004,Da=1005,Ii=1006,lc=1007,xr=1008,Is=1009,Z0=1010,J0=1011,ya=1012,uu=1013,br=1014,rs=1015,Ui=1016,fu=1017,du=1018,go=1020,Q0=35902,td=1021,ed=1022,wi=1023,nd=1024,id=1025,io=1026,vo=1027,pu=1028,mu=1029,sd=1030,gu=1031,vu=1033,vl=33776,xl=33777,_l=33778,yl=33779,xh=35840,_h=35841,yh=35842,Mh=35843,bh=36196,Sh=37492,wh=37496,Th=37808,Eh=37809,Ah=37810,Ch=37811,Rh=37812,Ph=37813,Lh=37814,Dh=37815,Ih=37816,Uh=37817,Fh=37818,Nh=37819,zh=37820,Oh=37821,Ml=36492,Bh=36494,kh=36495,rd=36283,Hh=36284,Gh=36285,Vh=36286,em=3200,nm=3201,od=0,im=1,ws="",xn="srgb",Ro="srgb-linear",jl="linear",sn="srgb",Rr=7680,Wu=519,sm=512,rm=513,om=514,ad=515,am=516,lm=517,cm=518,hm=519,Wh=35044,xo=35048,Xu="300 es",Cs=2e3,Ul=2001;class Po{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const ra=Math.PI/180,_o=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[e&63|128]+qn[e>>8&255]+"-"+qn[e>>16&255]+qn[e>>24&255]+qn[n&255]+qn[n>>8&255]+qn[n>>16&255]+qn[n>>24&255]).toLowerCase()}function Un(i,t,e){return Math.max(t,Math.min(e,i))}function xu(i,t){return(i%t+t)%t}function um(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fm(i,t,e){return i!==t?(e-i)/(t-i):0}function oa(i,t,e){return(1-e)*i+e*t}function dm(i,t,e,n){return oa(i,t,1-Math.exp(-e*n))}function pm(i,t=1){return t-Math.abs(xu(i,t*2)-t)}function mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xm(i,t){return i+Math.random()*(t-i)}function _m(i){return i*(.5-Math.random())}function ym(i){i!==void 0&&(qu=i);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mm(i){return i*ra}function bm(i){return i*_o}function Sm(i){return(i&i-1)===0&&i!==0}function wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Em(i,t,e,n,s){const o=Math.cos,a=Math.sin,l=o(e/2),c=a(e/2),h=o((t+n)/2),r=a((t+n)/2),u=o((t-n)/2),f=a((t-n)/2),d=o((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(l*r,c*u,c*f,l*h);break;case"YZY":i.set(c*f,l*r,c*u,l*h);break;case"ZXZ":i.set(c*u,c*f,l*r,l*h);break;case"XZX":i.set(l*r,c*g,c*d,l*h);break;case"YXY":i.set(c*d,l*r,c*g,l*h);break;case"ZYZ":i.set(c*g,c*d,l*r,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ui={DEG2RAD:ra,RAD2DEG:_o,generateUUID:cs,clamp:Un,euclideanModulo:xu,mapLinear:um,inverseLerp:fm,lerp:oa,damp:dm,pingpong:pm,smoothstep:mm,smootherstep:gm,randInt:vm,randFloat:xm,randFloatSpread:_m,seededRandom:ym,degToRad:Mm,radToDeg:bm,isPowerOfTwo:Sm,ceilPowerOfTwo:wm,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Em,normalize:Qe,denormalize:Yi};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*s+t.x,this.y=o*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t,e,n,s,o,a,l,c,h){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,l,c,h)}set(t,e,n,s,o,a,l,c,h){const r=this.elements;return r[0]=t,r[1]=s,r[2]=l,r[3]=e,r[4]=o,r[5]=c,r[6]=n,r[7]=a,r[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],r=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],T=s[4],S=s[7],F=s[2],O=s[5],R=s[8];return o[0]=a*v+l*b+c*F,o[3]=a*m+l*T+c*O,o[6]=a*p+l*S+c*R,o[1]=h*v+r*b+u*F,o[4]=h*m+r*T+u*O,o[7]=h*p+r*S+u*R,o[2]=f*v+d*b+g*F,o[5]=f*m+d*T+g*O,o[8]=f*p+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],r=t[8];return e*a*r-e*l*h-n*o*r+n*l*c+s*o*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],r=t[8],u=r*a-l*h,f=l*c-r*o,d=h*o-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*h-r*n)*v,t[2]=(l*n-s*a)*v,t[3]=f*v,t[4]=(r*e-s*c)*v,t[5]=(s*o-l*e)*v,t[6]=d*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,a,l){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(cc.makeScale(t,e)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Re;function ld(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Am(){const i=Fl("canvas");return i.style.display="block",i}const Yu={};function Zo(i){i in Yu||(Yu[i]=!0,console.warn(i))}function Cm(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Rm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const He={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===sn&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===sn&&(i.r=so(i.r),i.g=so(i.g),i.b=so(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ws?jl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $u=[.64,.33,.3,.6,.15,.06],Ku=[.2126,.7152,.0722],ju=[.3127,.329],Zu=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ju=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);He.define({[Ro]:{primaries:$u,whitePoint:ju,transfer:jl,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:Ku,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:$u,whitePoint:ju,transfer:sn,toXYZ:Zu,fromXYZ:Ju,luminanceCoefficients:Ku,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});let Pr;class Lm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pr===void 0&&(Pr=Fl("canvas")),Pr.width=t.width,Pr.height=t.height;const n=Pr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Ds(o[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ds(e[n]/255)*255):e[n]=Ds(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dm=0;class cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(hc(s[a].image)):o.push(hc(s[a]))}else o=hc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Im=0;class Jn extends Po{constructor(t=Jn.DEFAULT_IMAGE,e=Jn.DEFAULT_MAPPING,n=vr,s=vr,o=Ii,a=xr,l=wi,c=Is,h=Jn.DEFAULT_ANISOTROPY,r=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=cs(),this.name="",this.source=new cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=r,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gh:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gh:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=j0;Jn.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,e=0,n=0,s=1){Xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,h=c[0],r=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(r-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(r+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(h+1)/2,S=(d+1)/2,F=(p+1)/2,O=(r+f)/4,R=(u+v)/4,B=(g+m)/4;return T>S&&T>F?T<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(T),s=O/n,o=R/n):S>F?S<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),n=O/s,o=B/s):F<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(F),n=R/o,s=B/o),this.set(n,s,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-r)*(f-r));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-r)/b,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends Po{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xe(0,0,t,e),this.scissorTest=!1,this.viewport=new Xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Um{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hd extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ri,this.minFilter=ri,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,a,l){let c=n[s+0],h=n[s+1],r=n[s+2],u=n[s+3];const f=o[a+0],d=o[a+1],g=o[a+2],v=o[a+3];if(l===0){t[e+0]=c,t[e+1]=h,t[e+2]=r,t[e+3]=u;return}if(l===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||h!==d||r!==g){let m=1-l;const p=c*f+h*d+r*g+u*v,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const F=Math.sqrt(T),O=Math.atan2(F,p*b);m=Math.sin(m*O)/F,l=Math.sin(l*O)/F}const S=l*b;if(c=c*m+f*S,h=h*m+d*S,r=r*m+g*S,u=u*m+v*S,m===1-l){const F=1/Math.sqrt(c*c+h*h+r*r+u*u);c*=F,h*=F,r*=F,u*=F}}t[e]=c,t[e+1]=h,t[e+2]=r,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,a){const l=n[s],c=n[s+1],h=n[s+2],r=n[s+3],u=o[a],f=o[a+1],d=o[a+2],g=o[a+3];return t[e]=l*g+r*u+c*d-h*f,t[e+1]=c*g+r*f+h*u-l*d,t[e+2]=h*g+r*d+l*f-c*u,t[e+3]=r*g-l*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),r=l(s/2),u=l(o/2),f=c(n/2),d=c(s/2),g=c(o/2);switch(a){case"XYZ":this._x=f*r*u+h*d*g,this._y=h*d*u-f*r*g,this._z=h*r*g+f*d*u,this._w=h*r*u-f*d*g;break;case"YXZ":this._x=f*r*u+h*d*g,this._y=h*d*u-f*r*g,this._z=h*r*g-f*d*u,this._w=h*r*u+f*d*g;break;case"ZXY":this._x=f*r*u-h*d*g,this._y=h*d*u+f*r*g,this._z=h*r*g+f*d*u,this._w=h*r*u-f*d*g;break;case"ZYX":this._x=f*r*u-h*d*g,this._y=h*d*u+f*r*g,this._z=h*r*g-f*d*u,this._w=h*r*u+f*d*g;break;case"YZX":this._x=f*r*u+h*d*g,this._y=h*d*u+f*r*g,this._z=h*r*g-f*d*u,this._w=h*r*u-f*d*g;break;case"XZY":this._x=f*r*u-h*d*g,this._y=h*d*u-f*r*g,this._z=h*r*g+f*d*u,this._w=h*r*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],a=e[1],l=e[5],c=e[9],h=e[2],r=e[6],u=e[10],f=n+l+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(r-c)*d,this._y=(o-h)*d,this._z=(a-s)*d}else if(n>l&&n>u){const d=2*Math.sqrt(1+n-l-u);this._w=(r-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(o+h)/d}else if(l>u){const d=2*Math.sqrt(1+l-n-u);this._w=(o-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+r)/d}else{const d=2*Math.sqrt(1+u-n-l);this._w=(a-s)/d,this._x=(o+h)/d,this._y=(c+r)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Un(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,a=t._w,l=e._x,c=e._y,h=e._z,r=e._w;return this._x=n*r+a*l+s*h-o*c,this._y=s*r+a*c+o*l-n*h,this._z=o*r+a*h+n*c-s*l,this._w=a*r-n*l-s*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,a=this._w;let l=a*t._w+n*t._x+s*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),r=Math.atan2(h,l),u=Math.sin((1-e)*r)/h,f=Math.sin(e*r)/h;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),r=2*(l*e-o*s),u=2*(o*n-a*e);return this.x=e+c*h+a*u-l*r,this.y=n+c*r+l*h-o*u,this.z=s+c*u+o*r-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-o*l,this.y=o*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new P,Qu=new Qn;class Er{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ki):ki.fromBufferAttribute(o,a),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)),Ia.applyMatrix4(t.matrixWorld),this.union(Ia)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),Ua.subVectors(this.max,No),Lr.subVectors(t.a,No),Dr.subVectors(t.b,No),Ir.subVectors(t.c,No),Us.subVectors(Dr,Lr),Fs.subVectors(Ir,Dr),Js.subVectors(Lr,Ir);let e=[0,-Us.z,Us.y,0,-Fs.z,Fs.y,0,-Js.z,Js.y,Us.z,0,-Us.x,Fs.z,0,-Fs.x,Js.z,0,-Js.x,-Us.y,Us.x,0,-Fs.y,Fs.x,0,-Js.y,Js.x,0];return!fc(e,Lr,Dr,Ir,Ua)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,Lr,Dr,Ir,Ua))?!1:(Fa.crossVectors(Us,Fs),e=[Fa.x,Fa.y,Fa.z],fc(e,Lr,Dr,Ir,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gs=[new P,new P,new P,new P,new P,new P,new P,new P],ki=new P,Ia=new Er,Lr=new P,Dr=new P,Ir=new P,Us=new P,Fs=new P,Js=new P,No=new P,Ua=new P,Fa=new P,Qs=new P;function fc(i,t,e,n,s){for(let o=0,a=i.length-3;o<=a;o+=3){Qs.fromArray(i,o);const l=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),c=t.dot(Qs),h=e.dot(Qs),r=n.dot(Qs);if(Math.max(-Math.max(c,h,r),Math.min(c,h,r))>l)return!1}return!0}const Nm=new Er,zo=new P,dc=new P;class Lo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nm.setFromPoints(t).getCenter(n);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const e=zo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(dc)),this.expandByPoint(zo.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vs=new P,pc=new P,Na=new P,Ns=new P,mc=new P,za=new P,gc=new P;class ud{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pc.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),Ns.copy(this.origin).sub(pc);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Na),l=Ns.dot(this.direction),c=-Ns.dot(Na),h=Ns.lengthSq(),r=Math.abs(1-a*a);let u,f,d,g;if(r>0)if(u=a*c-l,f=a*l-c,g=o*r,u>=0)if(f>=-g)if(f<=g){const v=1/r;u*=v,f*=v,d=u*(u+a*f+2*l)+f*(a*u+f+2*c)+h}else f=o,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;else f=-o,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-a*o+l)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+h):(u=Math.max(0,-(a*o+l)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+h);else f=a>0?-o:o,u=Math.max(0,-(a*f+l)),d=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pc).addScaledVector(Na,f),d}intersectSphere(t,e){vs.subVectors(t.center,this.origin);const n=vs.dot(this.direction),s=vs.dot(vs)-n*n,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,a,l,c;const h=1/this.direction.x,r=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),r>=0?(o=(t.min.y-f.y)*r,a=(t.max.y-f.y)*r):(o=(t.max.y-f.y)*r,a=(t.min.y-f.y)*r),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),u>=0?(l=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(l=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,s,o){mc.subVectors(e,t),za.subVectors(n,t),gc.crossVectors(mc,za);let a=this.direction.dot(gc),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ns.subVectors(this.origin,t);const c=l*this.direction.dot(za.crossVectors(Ns,za));if(c<0)return null;const h=l*this.direction.dot(mc.cross(Ns));if(h<0||c+h>a)return null;const r=-l*Ns.dot(gc);return r<0?null:this.at(r/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,s,o,a,l,c,h,r,u,f,d,g,v,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,a,l,c,h,r,u,f,d,g,v,m)}set(t,e,n,s,o,a,l,c,h,r,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=a,p[9]=l,p[13]=c,p[2]=h,p[6]=r,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ur.setFromMatrixColumn(t,0).length(),o=1/Ur.setFromMatrixColumn(t,1).length(),a=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),r=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=a*r,d=a*u,g=l*r,v=l*u;e[0]=c*r,e[4]=-c*u,e[8]=h,e[1]=d+g*h,e[5]=f-v*h,e[9]=-l*c,e[2]=v-f*h,e[6]=g+d*h,e[10]=a*c}else if(t.order==="YXZ"){const f=c*r,d=c*u,g=h*r,v=h*u;e[0]=f+v*l,e[4]=g*l-d,e[8]=a*h,e[1]=a*u,e[5]=a*r,e[9]=-l,e[2]=d*l-g,e[6]=v+f*l,e[10]=a*c}else if(t.order==="ZXY"){const f=c*r,d=c*u,g=h*r,v=h*u;e[0]=f-v*l,e[4]=-a*u,e[8]=g+d*l,e[1]=d+g*l,e[5]=a*r,e[9]=v-f*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){const f=a*r,d=a*u,g=l*r,v=l*u;e[0]=c*r,e[4]=g*h-d,e[8]=f*h+v,e[1]=c*u,e[5]=v*h+f,e[9]=d*h-g,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*h,g=l*c,v=l*h;e[0]=c*r,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*r,e[9]=-l*r,e[2]=-h*r,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*c,d=a*h,g=l*c,v=l*h;e[0]=c*r,e[4]=-u,e[8]=h*r,e[1]=f*u+v,e[5]=a*r,e[9]=d*u-g,e[2]=g*u-d,e[6]=l*r,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zm,t,Om)}lookAt(t,e,n){const s=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),zs.crossVectors(n,yi),zs.lengthSq()===0&&(Math.abs(n.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),zs.crossVectors(n,yi)),zs.normalize(),Oa.crossVectors(yi,zs),s[0]=zs.x,s[4]=Oa.x,s[8]=yi.x,s[1]=zs.y,s[5]=Oa.y,s[9]=yi.y,s[2]=zs.z,s[6]=Oa.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],r=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],T=n[7],S=n[11],F=n[15],O=s[0],R=s[4],B=s[8],M=s[12],C=s[1],N=s[5],$=s[9],et=s[13],pt=s[2],Mt=s[6],lt=s[10],gt=s[14],nt=s[3],Ct=s[7],$t=s[11],Qt=s[15];return o[0]=a*O+l*C+c*pt+h*nt,o[4]=a*R+l*N+c*Mt+h*Ct,o[8]=a*B+l*$+c*lt+h*$t,o[12]=a*M+l*et+c*gt+h*Qt,o[1]=r*O+u*C+f*pt+d*nt,o[5]=r*R+u*N+f*Mt+d*Ct,o[9]=r*B+u*$+f*lt+d*$t,o[13]=r*M+u*et+f*gt+d*Qt,o[2]=g*O+v*C+m*pt+p*nt,o[6]=g*R+v*N+m*Mt+p*Ct,o[10]=g*B+v*$+m*lt+p*$t,o[14]=g*M+v*et+m*gt+p*Qt,o[3]=b*O+T*C+S*pt+F*nt,o[7]=b*R+T*N+S*Mt+F*Ct,o[11]=b*B+T*$+S*lt+F*$t,o[15]=b*M+T*et+S*gt+F*Qt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],a=t[1],l=t[5],c=t[9],h=t[13],r=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+o*c*u-s*h*u-o*l*f+n*h*f+s*l*d-n*c*d)+v*(+e*c*d-e*h*f+o*a*f-s*a*d+s*h*r-o*c*r)+m*(+e*h*u-e*l*d-o*a*u+n*a*d+o*l*r-n*h*r)+p*(-s*l*r-e*c*u+e*l*f+s*a*u-n*a*f+n*c*r)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],c=t[6],h=t[7],r=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=u*m*h-v*f*h+v*c*d-l*m*d-u*c*p+l*f*p,T=g*f*h-r*m*h-g*c*d+a*m*d+r*c*p-a*f*p,S=r*v*h-g*u*h+g*l*d-a*v*d-r*l*p+a*u*p,F=g*u*c-r*v*c-g*l*f+a*v*f+r*l*m-a*u*m,O=e*b+n*T+s*S+o*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/O;return t[0]=b*R,t[1]=(v*f*o-u*m*o-v*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(l*m*o-v*c*o+v*s*h-n*m*h-l*s*p+n*c*p)*R,t[3]=(u*c*o-l*f*o-u*s*h+n*f*h+l*s*d-n*c*d)*R,t[4]=T*R,t[5]=(r*m*o-g*f*o+g*s*d-e*m*d-r*s*p+e*f*p)*R,t[6]=(g*c*o-a*m*o-g*s*h+e*m*h+a*s*p-e*c*p)*R,t[7]=(a*f*o-r*c*o+r*s*h-e*f*h-a*s*d+e*c*d)*R,t[8]=S*R,t[9]=(g*u*o-r*v*o-g*n*d+e*v*d+r*n*p-e*u*p)*R,t[10]=(a*v*o-g*l*o+g*n*h-e*v*h-a*n*p+e*l*p)*R,t[11]=(r*l*o-a*u*o-r*n*h+e*u*h+a*n*d-e*l*d)*R,t[12]=F*R,t[13]=(r*v*s-g*u*s+g*n*f-e*v*f-r*n*m+e*u*m)*R,t[14]=(g*l*s-a*v*s-g*n*c+e*v*c+a*n*m-e*l*m)*R,t[15]=(a*u*s-r*l*s+r*n*c-e*u*c-a*n*f+e*l*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,a=t.x,l=t.y,c=t.z,h=o*a,r=o*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,r*l+n,r*c-s*a,0,h*c-s*l,r*c+s*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,a){return this.set(1,n,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,a=e._y,l=e._z,c=e._w,h=o+o,r=a+a,u=l+l,f=o*h,d=o*r,g=o*u,v=a*r,m=a*u,p=l*u,b=c*h,T=c*r,S=c*u,F=n.x,O=n.y,R=n.z;return s[0]=(1-(v+p))*F,s[1]=(d+S)*F,s[2]=(g-T)*F,s[3]=0,s[4]=(d-S)*O,s[5]=(1-(f+p))*O,s[6]=(m+b)*O,s[7]=0,s[8]=(g+T)*R,s[9]=(m-b)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Ur.set(s[0],s[1],s[2]).length();const a=Ur.set(s[4],s[5],s[6]).length(),l=Ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Hi.copy(this);const h=1/o,r=1/a,u=1/l;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=r,Hi.elements[5]*=r,Hi.elements[6]*=r,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,e.setFromRotationMatrix(Hi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,a,l=Cs){const c=this.elements,h=2*o/(e-t),r=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(l===Cs)d=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(l===Ul)d=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=r,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,a,l=Cs){const c=this.elements,h=1/(e-t),r=1/(n-s),u=1/(a-o),f=(e+t)*h,d=(n+s)*r;let g,v;if(l===Cs)g=(a+o)*u,v=-2*u;else if(l===Ul)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*r,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ur=new P,Hi=new Ie,zm=new P(0,0,0),Om=new P(1,1,1),zs=new P,Oa=new P,yi=new P,tf=new Ie,ef=new Qn;class xi{constructor(t=0,e=0,n=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],r=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-r,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-r,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-r,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ef.setFromEuler(this),this.setFromQuaternion(ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bm=0;const nf=new P,Fr=new Qn,xs=new Ie,Ba=new P,Oo=new P,km=new P,Hm=new Qn,sf=new P(1,0,0),rf=new P(0,1,0),of=new P(0,0,1),af={type:"added"},Gm={type:"removed"},Nr={type:"childadded",child:null},vc={type:"childremoved",child:null};class ln extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new P,e=new xi,n=new Qn,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Re}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,e){return Fr.setFromAxisAngle(t,e),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(sf,t)}rotateY(t){return this.rotateOnAxis(rf,t)}rotateZ(t){return this.rotateOnAxis(of,t)}translateOnAxis(t,e){return nf.copy(t).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sf,t)}translateY(t){return this.translateOnAxis(rf,t)}translateZ(t){return this.translateOnAxis(of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ba.copy(t):Ba.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Oo,Ba,this.up):xs.lookAt(Ba,Oo,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),Fr.setFromRotationMatrix(xs),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(af),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gm),vc.child=t,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xs.multiply(t.parent.matrixWorld)),t.applyMatrix4(xs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(af),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,r=c.length;h<r;h++){const u=c[h];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(o(t.animations,c))}}if(e){const l=a(t.geometries),c=a(t.materials),h=a(t.textures),r=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),r.length>0&&(n.images=r),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){const c=[];for(const h in l){const r=l[h];delete r.metadata,c.push(r)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new P(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new P,_s=new P,xc=new P,ys=new P,zr=new P,Or=new P,lf=new P,_c=new P,yc=new P,Mc=new P,bc=new Xe,Sc=new Xe,wc=new Xe;class Di{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gi.subVectors(t,e),s.cross(Gi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Gi.subVectors(s,e),_s.subVectors(n,e),xc.subVectors(t,e);const a=Gi.dot(Gi),l=Gi.dot(_s),c=Gi.dot(xc),h=_s.dot(_s),r=_s.dot(xc),u=a*h-l*l;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(h*c-l*r)*f,g=(a*r-l*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ys)===null?!1:ys.x>=0&&ys.y>=0&&ys.x+ys.y<=1}static getInterpolation(t,e,n,s,o,a,l,c){return this.getBarycoord(t,e,n,s,ys)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ys.x),c.addScaledVector(a,ys.y),c.addScaledVector(l,ys.z),c)}static getInterpolatedAttribute(t,e,n,s,o,a){return bc.setScalar(0),Sc.setScalar(0),wc.setScalar(0),bc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,n),wc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bc,o.x),a.addScaledVector(Sc,o.y),a.addScaledVector(wc,o.z),a}static isFrontFacing(t,e,n,s){return Gi.subVectors(n,e),_s.subVectors(t,e),Gi.cross(_s).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Gi.cross(_s).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Di.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let a,l;zr.subVectors(s,n),Or.subVectors(o,n),_c.subVectors(t,n);const c=zr.dot(_c),h=Or.dot(_c);if(c<=0&&h<=0)return e.copy(n);yc.subVectors(t,s);const r=zr.dot(yc),u=Or.dot(yc);if(r>=0&&u<=r)return e.copy(s);const f=c*u-r*h;if(f<=0&&c>=0&&r<=0)return a=c/(c-r),e.copy(n).addScaledVector(zr,a);Mc.subVectors(t,o);const d=zr.dot(Mc),g=Or.dot(Mc);if(g>=0&&d<=g)return e.copy(o);const v=d*h-c*g;if(v<=0&&h>=0&&g<=0)return l=h/(h-g),e.copy(n).addScaledVector(Or,l);const m=r*g-d*u;if(m<=0&&u-r>=0&&d-g>=0)return lf.subVectors(o,s),l=(u-r)/(u-r+(d-g)),e.copy(s).addScaledVector(lf,l);const p=1/(m+v+f);return a=v*p,l=f*p,e.copy(n).addScaledVector(zr,a).addScaledVector(Or,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=He.workingColorSpace){return this.r=t,this.g=e,this.b=n,He.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=He.workingColorSpace){if(t=xu(t,1),e=Un(e,0,1),n=Un(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Tc(a,o,t+1/3),this.g=Tc(a,o,t),this.b=Tc(a,o,t-1/3)}return He.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return He.fromWorkingColorSpace(Yn.copy(this),t),Math.round(Un(Yn.r*255,0,255))*65536+Math.round(Un(Yn.g*255,0,255))*256+Math.round(Un(Yn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=He.workingColorSpace){He.fromWorkingColorSpace(Yn.copy(this),e);const n=Yn.r,s=Yn.g,o=Yn.b,a=Math.max(n,s,o),l=Math.min(n,s,o);let c,h;const r=(l+a)/2;if(l===a)c=0,h=0;else{const u=a-l;switch(h=r<=.5?u/(a+l):u/(2-a-l),a){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=r,t}getRGB(t,e=He.workingColorSpace){return He.fromWorkingColorSpace(Yn.copy(this),e),t.r=Yn.r,t.g=Yn.g,t.b=Yn.b,t}getStyle(t=xn){He.fromWorkingColorSpace(Yn.copy(this),t);const e=Yn.r,n=Yn.g,s=Yn.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Os),this.setHSL(Os.h+t,Os.s+e,Os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Os),t.getHSL(ka);const n=oa(Os.h,ka.h,e),s=oa(Os.s,ka.s,e),o=oa(Os.l,ka.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Lt;Lt.NAMES=dd;let Vm=0;class Ar extends Po{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=cs(),this.name="",this.blending=no,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(n.blending=this.blending),this.side!==hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rh&&(n.blendSrc=this.blendSrc),this.blendDst!==oh&&(n.blendDst=this.blendDst),this.blendEquation!==cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ke extends Ar{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const En=new P,Ha=new Dt;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=rs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix3(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyMatrix4(t),this.setXYZ(e,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.applyNormalMatrix(t),this.setXYZ(e,En.x,En.y,En.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)En.fromBufferAttribute(this,e),En.transformDirection(t),this.setXYZ(e,En.x,En.y,En.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),o=Qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class pd extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class md extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wm=0;const Ei=new Ie,Ec=new ln,Br=new P,Mi=new Er,Bo=new Er,On=new P;class Ke extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?md:pd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Re().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return Ec.lookAt(t),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Mi.setFromBufferAttribute(o),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const l=e[o];Bo.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(Mi.min,Bo.min),Mi.expandByPoint(On),On.addVectors(Mi.max,Bo.max),Mi.expandByPoint(On)):(Mi.expandByPoint(Bo.min),Mi.expandByPoint(Bo.max))}Mi.getCenter(n);let s=0;for(let o=0,a=t.count;o<a;o++)On.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(On));if(e)for(let o=0,a=e.length;o<a;o++){const l=e[o],c=this.morphTargetsRelative;for(let h=0,r=l.count;h<r;h++)On.fromBufferAttribute(l,h),c&&(Br.fromBufferAttribute(t,h),On.add(Br)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let B=0;B<n.count;B++)l[B]=new P,c[B]=new P;const h=new P,r=new P,u=new P,f=new Dt,d=new Dt,g=new Dt,v=new P,m=new P;function p(B,M,C){h.fromBufferAttribute(n,B),r.fromBufferAttribute(n,M),u.fromBufferAttribute(n,C),f.fromBufferAttribute(o,B),d.fromBufferAttribute(o,M),g.fromBufferAttribute(o,C),r.sub(h),u.sub(h),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(r).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(r,-g.x).multiplyScalar(N),l[B].add(v),l[M].add(v),l[C].add(v),c[B].add(m),c[M].add(m),c[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let B=0,M=b.length;B<M;++B){const C=b[B],N=C.start,$=C.count;for(let et=N,pt=N+$;et<pt;et+=3)p(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const T=new P,S=new P,F=new P,O=new P;function R(B){F.fromBufferAttribute(s,B),O.copy(F);const M=l[B];T.copy(M),T.sub(F.multiplyScalar(F.dot(M))).normalize(),S.crossVectors(O,M);const N=S.dot(c[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,N)}for(let B=0,M=b.length;B<M;++B){const C=b[B],N=C.start,$=C.count;for(let et=N,pt=N+$;et<pt;et+=3)R(t.getX(et+0)),R(t.getX(et+1)),R(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,r=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),l.add(r),c.add(r),h.add(r),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),r.subVectors(a,o),u.subVectors(s,o),r.cross(u),n.setXYZ(f+0,r.x,r.y,r.z),n.setXYZ(f+1,r.x,r.y,r.z),n.setXYZ(f+2,r.x,r.y,r.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)On.fromBufferAttribute(t,e),On.normalize(),t.setXYZ(e,On.x,On.y,On.z)}toNonIndexed(){function t(l,c){const h=l.array,r=l.itemSize,u=l.normalized,f=new h.constructor(c.length*r);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?d=c[v]*l.data.stride+l.offset:d=c[v]*r;for(let p=0;p<r;p++)f[g++]=h[d++]}return new Pn(f,r,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],h=t(c,n);e.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const c=[],h=o[l];for(let r=0,u=h.length;r<u;r++){const f=h[r],d=t(f,n);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],r=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];r.push(d.toJSON(t.data))}r.length>0&&(s[c]=r,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const r=s[h];this.setAttribute(h,r.clone(e))}const o=t.morphAttributes;for(const h in o){const r=[],u=o[h];for(let f=0,d=u.length;f<d;f++)r.push(u[f].clone(e));this.morphAttributes[h]=r}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,r=a.length;h<r;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new Ie,tr=new ud,Ga=new Lo,hf=new P,Va=new P,Wa=new P,Xa=new P,Ac=new P,qa=new P,uf=new P,Ya=new P;class ue extends ln{constructor(t=new Ke,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(o&&l){qa.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const r=l[c],u=o[c];r!==0&&(Ac.fromBufferAttribute(u,t),a?qa.addScaledVector(Ac,r):qa.addScaledVector(Ac.sub(e),r))}e.add(qa)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(o),tr.copy(t.ray).recast(t.near),!(Ga.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ga,hf)===null||tr.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(cf.copy(o).invert(),tr.copy(t.ray).applyMatrix4(cf),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,tr)))}_computeIntersections(t,e,n){let s;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,h=o.attributes.uv,r=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,F=T;S<F;S+=3){const O=l.getX(S),R=l.getX(S+1),B=l.getX(S+2);s=$a(this,p,t,n,h,r,u,O,R,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=l.getX(m),T=l.getX(m+1),S=l.getX(m+2);s=$a(this,a,t,n,h,r,u,b,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,F=T;S<F;S+=3){const O=S,R=S+1,B=S+2;s=$a(this,p,t,n,h,r,u,O,R,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const b=m,T=m+1,S=m+2;s=$a(this,a,t,n,h,r,u,b,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xm(i,t,e,n,s,o,a,l){let c;if(t.side===Gn?c=n.intersectTriangle(a,o,s,!0,l):c=n.intersectTriangle(s,o,a,t.side===hs,l),c===null)return null;Ya.copy(l),Ya.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ya);return h<e.near||h>e.far?null:{distance:h,point:Ya.clone(),object:i}}function $a(i,t,e,n,s,o,a,l,c,h){i.getVertexPosition(l,Va),i.getVertexPosition(c,Wa),i.getVertexPosition(h,Xa);const r=Xm(i,t,e,n,Va,Wa,Xa,uf);if(r){const u=new P;Di.getBarycoord(uf,Va,Wa,Xa,u),s&&(r.uv=Di.getInterpolatedAttribute(s,l,c,h,u,new Dt)),o&&(r.uv1=Di.getInterpolatedAttribute(o,l,c,h,u,new Dt)),a&&(r.normal=Di.getInterpolatedAttribute(a,l,c,h,u,new P),r.normal.dot(n.direction)>0&&r.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new P,materialIndex:0};Di.getNormal(Va,Wa,Xa,f.normal),r.face=f,r.barycoord=u}return r}class Be extends Ke{constructor(t=1,e=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],r=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Se(h,3)),this.setAttribute("normal",new Se(r,3)),this.setAttribute("uv",new Se(u,2));function g(v,m,p,b,T,S,F,O,R,B,M){const C=S/R,N=F/B,$=S/2,et=F/2,pt=O/2,Mt=R+1,lt=B+1;let gt=0,nt=0;const Ct=new P;for(let $t=0;$t<lt;$t++){const Qt=$t*N-et;for(let se=0;se<Mt;se++){const Ee=se*C-$;Ct[v]=Ee*b,Ct[m]=Qt*T,Ct[p]=pt,h.push(Ct.x,Ct.y,Ct.z),Ct[v]=0,Ct[m]=0,Ct[p]=O>0?1:-1,r.push(Ct.x,Ct.y,Ct.z),u.push(se/R),u.push(1-$t/B),gt+=1}}for(let $t=0;$t<B;$t++)for(let Qt=0;Qt<R;Qt++){const se=f+Qt+Mt*$t,Ee=f+Qt+Mt*($t+1),mt=f+(Qt+1)+Mt*($t+1),ht=f+(Qt+1)+Mt*$t;c.push(se,Ee,ht),c.push(Ee,mt,ht),nt+=6}l.addGroup(d,nt,M),d+=nt,f+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ii(i){const t={};for(let e=0;e<i.length;e++){const n=yo(i[e]);for(const s in n)t[s]=n[s]}return t}function qm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}const ji={clone:yo,merge:ii};var Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Ar{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yo(t.uniforms),this.uniformsGroups=qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vd extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Cs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bs=new P,ff=new Dt,df=new Dt;class Zn extends vd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,e){return this.getViewBounds(t,ff,df),e.subVectors(df,ff)}setViewOffset(t,e,n,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ra*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const kr=-90,Hr=1;class xd extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zn(kr,Hr,t,e);s.layers=this.layers,this.add(s);const o=new Zn(kr,Hr,t,e);o.layers=this.layers,this.add(o);const a=new Zn(kr,Hr,t,e);a.layers=this.layers,this.add(a);const l=new Zn(kr,Hr,t,e);l.layers=this.layers,this.add(l);const c=new Zn(kr,Hr,t,e);c.layers=this.layers,this.add(c);const h=new Zn(kr,Hr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,a,l,c]=e;for(const h of e)this.remove(h);if(t===Cs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,h,r]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,r),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _d extends Jn{constructor(t,e,n,s,o,a,l,c,h,r){t=t!==void 0?t:[],e=e!==void 0?e:po,super(t,e,n,s,o,a,l,c,h,r),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yd extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _d(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),o=new Ve({name:"CubemapFromEquirect",uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Ps});o.uniforms.tEquirect.value=e;const a=new ue(s,o),l=e.minFilter;return e.minFilter===xr&&(e.minFilter=Ii),new xd(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(o)}}const Cc=new P,Km=new P,jm=new Re;class Gs{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Cc.subVectors(n,e).cross(Km.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||jm.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Lo,Ka=new P;class _u{constructor(t=new Gs,e=new Gs,n=new Gs,s=new Gs,o=new Gs,a=new Gs){this.planes=[t,e,n,s,o,a]}set(t,e,n,s,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cs){const n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],r=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],b=s[13],T=s[14],S=s[15];if(n[0].setComponents(c-o,f-h,m-d,S-p).normalize(),n[1].setComponents(c+o,f+h,m+d,S+p).normalize(),n[2].setComponents(c+a,f+r,m+g,S+b).normalize(),n[3].setComponents(c-a,f-r,m-g,S-b).normalize(),n[4].setComponents(c-l,f-u,m-v,S-T).normalize(),e===Cs)n[5].setComponents(c+l,f+u,m+v,S+T).normalize();else if(e===Ul)n[5].setComponents(l,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let i=null,t=!1,e=null,n=null;function s(o,a){e(o,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Zm(i){const t=new WeakMap;function e(l,c){const h=l.array,r=l.usage,u=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,r),l.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,c,h){const r=c.array,u=c.updateRanges;if(i.bindBuffer(h,l),u.length===0)i.bufferSubData(h,0,r);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(h,v.start*r.BYTES_PER_ELEMENT,r,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const r=t.get(l);(!r||r.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:o,update:a}}class an extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,r=c+1,u=t/l,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<r;p++){const b=p*f-a;for(let T=0;T<h;T++){const S=T*u-o;g.push(S,-b,0),v.push(0,0,1),m.push(T/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<l;b++){const T=b+h*p,S=b+h*(p+1),F=b+1+h*(p+1),O=b+1+h*p;d.push(T,S,O),d.push(S,F,O)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,jg=`struct PhysicalMaterial {
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
}`,Zg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,av=`#if defined( USE_POINTS_UV )
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
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,s1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,o1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,h1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,v1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,M1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,S1=`#define TOON
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
}`,w1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,P1=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:tg,alphamap_pars_fragment:eg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:fg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:vg,color_pars_fragment:xg,color_pars_vertex:_g,color_vertex:yg,common:Mg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:wg,displacementmap_vertex:Tg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Ag,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Pg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Wg,envmap_vertex:Ug,fog_vertex:Fg,fog_pars_vertex:Ng,fog_fragment:zg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:kg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Vg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:$g,lights_physical_fragment:Kg,lights_physical_pars_fragment:jg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Qg,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:sv,map_pars_fragment:rv,map_particle_fragment:ov,map_particle_pars_fragment:av,metalnessmap_fragment:lv,metalnessmap_pars_fragment:cv,morphinstance_vertex:hv,morphcolor_vertex:uv,morphnormal_vertex:fv,morphtarget_pars_vertex:dv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:vv,normal_pars_vertex:xv,normal_vertex:_v,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:wv,opaque_fragment:Tv,packing:Ev,premultiplied_alpha_fragment:Av,project_vertex:Cv,dithering_fragment:Rv,dithering_pars_fragment:Pv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Iv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Nv,skinbase_vertex:zv,skinning_pars_vertex:Ov,skinning_vertex:Bv,skinnormal_vertex:kv,specularmap_fragment:Hv,specularmap_pars_fragment:Gv,tonemapping_fragment:Vv,tonemapping_pars_fragment:Wv,transmission_fragment:Xv,transmission_pars_fragment:qv,uv_pars_fragment:Yv,uv_pars_vertex:$v,uv_vertex:Kv,worldpos_vertex:jv,background_vert:Zv,background_frag:Jv,backgroundCube_vert:Qv,backgroundCube_frag:t1,cube_vert:e1,cube_frag:n1,depth_vert:i1,depth_frag:s1,distanceRGBA_vert:r1,distanceRGBA_frag:o1,equirect_vert:a1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:h1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:v1,meshnormal_frag:x1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:M1,meshphysical_frag:b1,meshtoon_vert:S1,meshtoon_frag:w1,points_vert:T1,points_frag:E1,shadow_vert:A1,shadow_frag:C1,sprite_vert:R1,sprite_frag:P1},ee={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ss={basic:{uniforms:ii([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ii([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ii([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ii([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ii([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ii([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ii([ee.points,ee.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ii([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ii([ee.common,ee.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ii([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ii([ee.sprite,ee.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ii([ee.common,ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ii([ee.lights,ee.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ss.physical={uniforms:ii([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const ja={r:0,b:0,g:0},nr=new xi,L1=new Ie;function D1(i,t,e,n,s,o,a){const l=new Lt(0);let c=o===!0?0:1,h,r,u=null,f=0,d=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function v(b){let T=!1;const S=g(b);S===null?p(l,c):S&&S.isColor&&(p(S,1),T=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===Kl)?(r===void 0&&(r=new ue(new Be(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:yo(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),r.geometry.deleteAttribute("uv"),r.onBeforeRender=function(F,O,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(r.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(r)),nr.copy(T.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),r.material.uniforms.envMap.value=S,r.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,r.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,r.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,r.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(nr)),r.material.toneMapped=He.getTransfer(S.colorSpace)!==sn,(u!==S||f!==S.version||d!==i.toneMapping)&&(r.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),r.layers.enableAll(),b.unshift(r,r.geometry,r.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new ue(new an(2,2),new Ve({name:"BackgroundMaterial",uniforms:yo(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=He.getTransfer(S.colorSpace)!==sn,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,T){b.getRGB(ja,gd(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,T,a)}return{getClearColor:function(){return l},setClearColor:function(b,T=1){l.set(b),c=T,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(l,c)},render:v,addToRenderList:m}}function I1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,a=!1;function l(C,N,$,et,pt){let Mt=!1;const lt=u(et,$,N);o!==lt&&(o=lt,h(o.object)),Mt=d(C,et,$,pt),Mt&&g(C,et,$,pt),pt!==null&&t.update(pt,i.ELEMENT_ARRAY_BUFFER),(Mt||a)&&(a=!1,S(C,N,$,et),pt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function c(){return i.createVertexArray()}function h(C){return i.bindVertexArray(C)}function r(C){return i.deleteVertexArray(C)}function u(C,N,$){const et=$.wireframe===!0;let pt=n[C.id];pt===void 0&&(pt={},n[C.id]=pt);let Mt=pt[N.id];Mt===void 0&&(Mt={},pt[N.id]=Mt);let lt=Mt[et];return lt===void 0&&(lt=f(c()),Mt[et]=lt),lt}function f(C){const N=[],$=[],et=[];for(let pt=0;pt<e;pt++)N[pt]=0,$[pt]=0,et[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:$,attributeDivisors:et,object:C,attributes:{},index:null}}function d(C,N,$,et){const pt=o.attributes,Mt=N.attributes;let lt=0;const gt=$.getAttributes();for(const nt in gt)if(gt[nt].location>=0){const $t=pt[nt];let Qt=Mt[nt];if(Qt===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(Qt=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(Qt=C.instanceColor)),$t===void 0||$t.attribute!==Qt||Qt&&$t.data!==Qt.data)return!0;lt++}return o.attributesNum!==lt||o.index!==et}function g(C,N,$,et){const pt={},Mt=N.attributes;let lt=0;const gt=$.getAttributes();for(const nt in gt)if(gt[nt].location>=0){let $t=Mt[nt];$t===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&($t=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&($t=C.instanceColor));const Qt={};Qt.attribute=$t,$t&&$t.data&&(Qt.data=$t.data),pt[nt]=Qt,lt++}o.attributes=pt,o.attributesNum=lt,o.index=et}function v(){const C=o.newAttributes;for(let N=0,$=C.length;N<$;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){const $=o.newAttributes,et=o.enabledAttributes,pt=o.attributeDivisors;$[C]=1,et[C]===0&&(i.enableVertexAttribArray(C),et[C]=1),pt[C]!==N&&(i.vertexAttribDivisor(C,N),pt[C]=N)}function b(){const C=o.newAttributes,N=o.enabledAttributes;for(let $=0,et=N.length;$<et;$++)N[$]!==C[$]&&(i.disableVertexAttribArray($),N[$]=0)}function T(C,N,$,et,pt,Mt,lt){lt===!0?i.vertexAttribIPointer(C,N,$,pt,Mt):i.vertexAttribPointer(C,N,$,et,pt,Mt)}function S(C,N,$,et){v();const pt=et.attributes,Mt=$.getAttributes(),lt=N.defaultAttributeValues;for(const gt in Mt){const nt=Mt[gt];if(nt.location>=0){let Ct=pt[gt];if(Ct===void 0&&(gt==="instanceMatrix"&&C.instanceMatrix&&(Ct=C.instanceMatrix),gt==="instanceColor"&&C.instanceColor&&(Ct=C.instanceColor)),Ct!==void 0){const $t=Ct.normalized,Qt=Ct.itemSize,se=t.get(Ct);if(se===void 0)continue;const Ee=se.buffer,mt=se.type,ht=se.bytesPerElement,Kt=mt===i.INT||mt===i.UNSIGNED_INT||Ct.gpuType===uu;if(Ct.isInterleavedBufferAttribute){const Bt=Ct.data,Jt=Bt.stride,xe=Ct.offset;if(Bt.isInstancedInterleavedBuffer){for(let le=0;le<nt.locationSize;le++)p(nt.location+le,Bt.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let le=0;le<nt.locationSize;le++)m(nt.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let le=0;le<nt.locationSize;le++)T(nt.location+le,Qt/nt.locationSize,mt,$t,Jt*ht,(xe+Qt/nt.locationSize*le)*ht,Kt)}else{if(Ct.isInstancedBufferAttribute){for(let Bt=0;Bt<nt.locationSize;Bt++)p(nt.location+Bt,Ct.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Bt=0;Bt<nt.locationSize;Bt++)m(nt.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Bt=0;Bt<nt.locationSize;Bt++)T(nt.location+Bt,Qt/nt.locationSize,mt,$t,Qt*ht,Qt/nt.locationSize*Bt*ht,Kt)}}else if(lt!==void 0){const $t=lt[gt];if($t!==void 0)switch($t.length){case 2:i.vertexAttrib2fv(nt.location,$t);break;case 3:i.vertexAttrib3fv(nt.location,$t);break;case 4:i.vertexAttrib4fv(nt.location,$t);break;default:i.vertexAttrib1fv(nt.location,$t)}}}}b()}function F(){B();for(const C in n){const N=n[C];for(const $ in N){const et=N[$];for(const pt in et)r(et[pt].object),delete et[pt];delete N[$]}delete n[C]}}function O(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const $ in N){const et=N[$];for(const pt in et)r(et[pt].object),delete et[pt];delete N[$]}delete n[C.id]}function R(C){for(const N in n){const $=n[N];if($[C.id]===void 0)continue;const et=$[C.id];for(const pt in et)r(et[pt].object),delete et[pt];delete $[C.id]}}function B(){M(),a=!0,o!==s&&(o=s,h(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function U1(i,t,e){let n;function s(h){n=h}function o(h,r){i.drawArrays(n,h,r),e.update(r,n,1)}function a(h,r,u){u!==0&&(i.drawArraysInstanced(n,h,r,u),e.update(r,n,u))}function l(h,r,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,r,0,u);let d=0;for(let g=0;g<u;g++)d+=r[g];e.update(d,n,1)}function c(h,r,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)a(h[g],r[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,r,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=r[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function F1(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const B=R===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Is&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rs&&!B)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const r=c(h);r!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",r,"instead."),h=r);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:F,maxSamples:O}}function N1(i){const t=this;let e=null,n=0,s=!1,o=!1;const a=new Gs,l=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,r(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=r(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?r(null):h();else{const b=o?0:n,T=b*4;let S=p.clippingState||null;c.value=S,S=r(g,f,T,d);for(let F=0;F!==T;++F)S[F]=e[F];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function r(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,b=f.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=d;T!==v;++T,S+=4)a.copy(u[T]).applyMatrix4(b,l),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function z1(i){let t=new WeakMap;function e(a,l){return l===ph?a.mapping=po:l===mh&&(a.mapping=mo),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===ph||l===mh)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new yd(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class yu extends vd{constructor(t=-1,e=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,r=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,l-=r*this.view.offsetY,c=l-r*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const jr=4,pf=[.125,.215,.35,.446,.526,.582],hr=20,Rc=new yu,mf=new Lt;let Pc=null,Lc=0,Dc=0,Ic=!1;const ar=(1+Math.sqrt(5))/2,Gr=1/ar,gf=[new P(-ar,Gr,0),new P(ar,Gr,0),new P(-Gr,0,ar),new P(Gr,0,ar),new P(0,ar,-Gr),new P(0,ar,Gr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Sr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Lc,Dc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===po||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Ui,format:wi,colorSpace:Ro,depthBuffer:!1},s=vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O1(o)),this._blurMaterial=B1(o,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,n,s){const l=new Zn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],r=this._renderer,u=r.autoClear,f=r.toneMapping;r.getClearColor(mf),r.toneMapping=Ls,r.autoClear=!1;const d=new ke({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new ue(new Be,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(mf),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(l.up.set(0,c[p],0),l.lookAt(h[p],0,0)):b===1?(l.up.set(0,0,c[p]),l.lookAt(0,h[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,h[p]));const T=this._cubeSize;Za(s,b*T,p>2?T:0,T,T),r.setRenderTarget(s),v&&r.render(g,l),r.render(t,l)}g.geometry.dispose(),g.material.dispose(),r.toneMapping=f,r.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===po||t.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_f()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const c=this._cubeSize;Za(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Rc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=gf[(s-o-1)%gf.length];this._blur(t,o-1,o,a,l)}e.autoClear=n}_blur(t,e,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",o),this._halfBlur(a,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const r=3,u=new ue(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*hr-1),v=o/g,m=isFinite(o)?1+Math.floor(r*v):hr;m>hr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const p=[];let b=0;for(let R=0;R<hr;++R){const B=R/v,M=Math.exp(-B*B/2);p.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const S=this._sizeLods[s],F=3*S*(s>T-jr?s-T+jr:0),O=4*(this._cubeSize-S);Za(e,F,O,3*S,2*S),c.setRenderTarget(e),c.render(u,Rc)}}function O1(i){const t=[],e=[],n=[];let s=i;const o=i-jr+1+pf.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);e.push(l);let c=1/l;a>i-jr?c=pf[a-i+jr-1]:a===0&&(c=0),n.push(c);const h=1/(l-2),r=-h,u=1+h,f=[r,r,u,r,u,u,r,r,u,u,r,u],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),T=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let O=0;O<d;O++){const R=O%3*2/3-1,B=O>2?0:-1,M=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];b.set(M,v*g*O),T.set(f,m*g*O);const C=[O,O,O,O,O,O];S.set(C,p*g*O)}const F=new Ke;F.setAttribute("position",new Pn(b,v)),F.setAttribute("uv",new Pn(T,m)),F.setAttribute("faceIndex",new Pn(S,p)),t.push(F),s>jr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vf(i,t,e){const n=new Ti(i,t,e);return n.texture.mapping=Kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B1(i,t,e){const n=new Float32Array(hr),s=new P(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function xf(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function _f(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function k1(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===ph||c===mh,r=c===po||c===mo;if(h||r){let u=t.get(l);const f=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new Sr(i)),u=h?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const d=l.image;return h&&d&&d.height>0||r&&d&&s(d)?(e===null&&(e=new Sr(i)),u=h?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",o),u.texture):null}}}return l}function s(l){let c=0;const h=6;for(let r=0;r<h;r++)l[r]!==void 0&&c++;return c===h}function o(l){const c=l.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function H1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function G1(i,t,e,n){const s={},o=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let T=0,S=b.length;T<S;T+=3){const F=b[T+0],O=b[T+1],R=b[T+2];f.push(F,O,O,R,R,F)}}else if(g!==void 0){const b=g.array;v=g.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const F=T+0,O=T+1,R=T+2;f.push(F,O,O,R,R,F)}}else return;const m=new(ld(f)?md:pd)(f,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function r(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return o.get(u)}return{get:l,update:c,getWireframeAttribute:r}}function V1(i,t,e){let n;function s(f){n=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,o,f*a),e.update(d,n,1)}function h(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,o,f*a,g),e.update(d,n,g))}function r(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)h(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=r,this.renderMultiDrawInstances=u}function W1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(o/3);break;case i.LINES:e.lines+=l*(o/2);break;case i.LINE_STRIP:e.lines+=l*(o-1);break;case i.LINE_LOOP:e.lines+=l*o;break;case i.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function X1(i,t,e){const n=new WeakMap,s=new Xe;function o(a,l,c){const h=a.morphTargetInfluences,r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=r!==void 0?r.length:0;let f=n.get(l);if(f===void 0||f.count!==u){let C=function(){B.dispose(),n.delete(l),l.removeEventListener("dispose",C)};var d=C;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let F=l.attributes.position.count*S,O=1;F>t.maxTextureSize&&(O=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const R=new Float32Array(F*O*4*u),B=new hd(R,F,O,u);B.type=rs,B.needsUpdate=!0;const M=S*4;for(let N=0;N<u;N++){const $=p[N],et=b[N],pt=T[N],Mt=F*O*4*N;for(let lt=0;lt<$.count;lt++){const gt=lt*M;g===!0&&(s.fromBufferAttribute($,lt),R[Mt+gt+0]=s.x,R[Mt+gt+1]=s.y,R[Mt+gt+2]=s.z,R[Mt+gt+3]=0),v===!0&&(s.fromBufferAttribute(et,lt),R[Mt+gt+4]=s.x,R[Mt+gt+5]=s.y,R[Mt+gt+6]=s.z,R[Mt+gt+7]=0),m===!0&&(s.fromBufferAttribute(pt,lt),R[Mt+gt+8]=s.x,R[Mt+gt+9]=s.y,R[Mt+gt+10]=s.z,R[Mt+gt+11]=pt.itemSize===4?s.w:1)}}f={count:u,texture:B,size:new Dt(F,O)},n.set(l,f),l.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function q1(i,t,e,n){let s=new WeakMap;function o(c){const h=n.render.frame,r=c.geometry,u=t.get(c,r);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class bd extends Jn{constructor(t,e,n,s,o,a,l,c,h,r=io){if(r!==io&&r!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&r===io&&(n=br),n===void 0&&r===vo&&(n=go),super(null,s,o,a,l,c,r,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:ri,this.minFilter=c!==void 0?c:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sd=new Jn,yf=new bd(1,1),wd=new hd,Td=new Fm,Ed=new _d,Mf=[],bf=[],Sf=new Float32Array(16),wf=new Float32Array(9),Tf=new Float32Array(4);function Do(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Mf[s];if(o===void 0&&(o=new Float32Array(s),Mf[s]=o),t!==0){n.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(o,l)}return o}function Fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Y1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2fv(this.addr,t),Nn(e,t)}}function K1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fn(e,t))return;i.uniform3fv(this.addr,t),Nn(e,t)}}function j1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4fv(this.addr,t),Nn(e,t)}}function Z1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Nn(e,t)}else{if(Fn(e,n))return;Tf.set(n),i.uniformMatrix2fv(this.addr,!1,Tf),Nn(e,n)}}function J1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Nn(e,t)}else{if(Fn(e,n))return;wf.set(n),i.uniformMatrix3fv(this.addr,!1,wf),Nn(e,n)}}function Q1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Nn(e,t)}else{if(Fn(e,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),Nn(e,n)}}function tx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2iv(this.addr,t),Nn(e,t)}}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fn(e,t))return;i.uniform3iv(this.addr,t),Nn(e,t)}}function ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4iv(this.addr,t),Nn(e,t)}}function sx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2uiv(this.addr,t),Nn(e,t)}}function ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fn(e,t))return;i.uniform3uiv(this.addr,t),Nn(e,t)}}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4uiv(this.addr,t),Nn(e,t)}}function lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(yf.compareFunction=ad,o=yf):o=Sd,e.setTexture2D(t||o,s)}function cx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Td,s)}function hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ed,s)}function ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function fx(i){switch(i){case 5126:return Y1;case 35664:return $1;case 35665:return K1;case 35666:return j1;case 35674:return Z1;case 35675:return J1;case 35676:return Q1;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){const e=Do(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){const e=Do(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){const e=Do(t,this.size,4);i.uniform4fv(this.addr,e)}function vx(i,t){const e=Do(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){const e=Do(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _x(i,t){const e=Do(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function Mx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function wx(i,t){i.uniform1uiv(this.addr,t)}function Tx(i,t){i.uniform2uiv(this.addr,t)}function Ex(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Cx(i,t,e){const n=this.cache,s=t.length,o=Zl(e,s);Fn(n,o)||(i.uniform1iv(this.addr,o),Nn(n,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Sd,o[a])}function Rx(i,t,e){const n=this.cache,s=t.length,o=Zl(e,s);Fn(n,o)||(i.uniform1iv(this.addr,o),Nn(n,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Td,o[a])}function Px(i,t,e){const n=this.cache,s=t.length,o=Zl(e,s);Fn(n,o)||(i.uniform1iv(this.addr,o),Nn(n,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ed,o[a])}function Lx(i,t,e){const n=this.cache,s=t.length,o=Zl(e,s);Fn(n,o)||(i.uniform1iv(this.addr,o),Nn(n,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wd,o[a])}function Dx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return vx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Tx;case 36295:return Ex;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ix{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}}class Ux{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}}class Fx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(t,e[l.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function Ef(i,t){i.seq.push(t),i.map[t.id]=t}function Nx(i,t,e){const n=i.name,s=n.length;for(Uc.lastIndex=0;;){const o=Uc.exec(n),a=Uc.lastIndex;let l=o[1];const c=o[2]==="]",h=o[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){Ef(e,h===void 0?new Ix(l,i,t):new Ux(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new Fx(l),Ef(e,u)),e=u}}}class bl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);Nx(o,a,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,a=e.length;o!==a;++o){const l=e[o],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Af(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zx=37297;let Ox=0;function Bx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Cf=new Re;function kx(i){He._getMatrix(Cf,He.workingColorSpace,i);const t=`mat3( ${Cf.elements.map(e=>e.toFixed(4))} )`;switch(He.getTransfer(i)){case jl:return[t,"LinearTransferOETF"];case sn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Bx(i.getShaderSource(t),a)}else return s}function Hx(i,t){const e=kx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gx(i,t){let e;switch(t){case Yp:e="Linear";break;case $p:e="Reinhard";break;case Kp:e="Cineon";break;case jp:e="ACESFilmic";break;case Jp:e="AgX";break;case Qp:e="Neutral";break;case Zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ja=new P;function Vx(){He.getLuminanceCoefficients(Ja);const i=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function Xx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),a=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),e[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Jo(i){return i!==""}function Pf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(Yx,Kx)}const $x=new Map;function Kx(i,t){let e=Le[t];if(e===void 0){const n=$x.get(t);if(n!==void 0)e=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xh(e)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(jx,Zx)}function Zx(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function If(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Jx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bs&&(t="SHADOWMAP_TYPE_VSM"),t}function Qx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case po:case mo:t="ENVMAP_TYPE_CUBE";break;case Kl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mo:t="ENVMAP_MODE_REFRACTION";break}return t}function e_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case K0:t="ENVMAP_BLENDING_MULTIPLY";break;case Xp:t="ENVMAP_BLENDING_MIX";break;case qp:t="ENVMAP_BLENDING_ADD";break}return t}function n_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function i_(i,t,e,n){const s=i.getContext(),o=e.defines;let a=e.vertexShader,l=e.fragmentShader;const c=Jx(e),h=Qx(e),r=t_(e),u=e_(e),f=n_(e),d=Wx(e),g=Xx(o),v=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Jo).join(`
`),p.length>0&&(p+=`
`)):(m=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),p=[If(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+r:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ls?"#define TONE_MAPPING":"",e.toneMapping!==Ls?Le.tonemapping_pars_fragment:"",e.toneMapping!==Ls?Gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Hx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jo).join(`
`)),a=Xh(a),a=Pf(a,e),a=Lf(a,e),l=Xh(l),l=Pf(l,e),l=Lf(l,e),a=Df(a),l=Df(l),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+a,S=b+p+l,F=Af(s,s.VERTEX_SHADER,T),O=Af(s,s.FRAGMENT_SHADER,S);s.attachShader(v,F),s.attachShader(v,O),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(N){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),et=s.getShaderInfoLog(F).trim(),pt=s.getShaderInfoLog(O).trim();let Mt=!0,lt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,O);else{const gt=Rf(s,F,"vertex"),nt=Rf(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+gt+`
`+nt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(et===""||pt==="")&&(lt=!1);lt&&(N.diagnostics={runnable:Mt,programLog:$,vertexShader:{log:et,prefix:m},fragmentShader:{log:pt,prefix:p}})}s.deleteShader(F),s.deleteShader(O),B=new bl(s,v),M=qx(s,v)}let B;this.getUniforms=function(){return B===void 0&&R(this),B};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,zx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ox++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=O,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o_(t),e.set(t,n)),n}}class o_{constructor(t){this.id=s_++,this.code=t,this.usedTimes=0}}function a_(i,t,e,n,s,o,a){const l=new fd,c=new r_,h=new Set,r=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,C,N,$,et){const pt=$.fog,Mt=et.geometry,lt=M.isMeshStandardMaterial?$.environment:null,gt=(M.isMeshStandardMaterial?e:t).get(M.envMap||lt),nt=gt&&gt.mapping===Kl?gt.image.height:null,Ct=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const $t=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Qt=$t!==void 0?$t.length:0;let se=0;Mt.morphAttributes.position!==void 0&&(se=1),Mt.morphAttributes.normal!==void 0&&(se=2),Mt.morphAttributes.color!==void 0&&(se=3);let Ee,mt,ht,Kt;if(Ct){const ye=ss[Ct];Ee=ye.vertexShader,mt=ye.fragmentShader}else Ee=M.vertexShader,mt=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),Kt=c.getFragmentShaderID(M);const Bt=i.getRenderTarget(),Jt=i.state.buffers.depth.getReversed(),xe=et.isInstancedMesh===!0,le=et.isBatchedMesh===!0,oe=!!M.map,Tt=!!M.matcap,zt=!!gt,V=!!M.aoMap,jt=!!M.lightMap,It=!!M.bumpMap,te=!!M.normalMap,Wt=!!M.displacementMap,tt=!!M.emissiveMap,at=!!M.metalnessMap,A=!!M.roughnessMap,w=M.anisotropy>0,G=M.clearcoat>0,q=M.dispersion>0,K=M.iridescence>0,W=M.sheen>0,rt=M.transmission>0,it=w&&!!M.anisotropyMap,J=G&&!!M.clearcoatMap,ut=G&&!!M.clearcoatNormalMap,U=G&&!!M.clearcoatRoughnessMap,Y=K&&!!M.iridescenceMap,dt=K&&!!M.iridescenceThicknessMap,yt=W&&!!M.sheenColorMap,Q=W&&!!M.sheenRoughnessMap,_t=!!M.specularMap,St=!!M.specularColorMap,Rt=!!M.specularIntensityMap,D=rt&&!!M.transmissionMap,z=rt&&!!M.thicknessMap,X=!!M.gradientMap,st=!!M.alphaMap,vt=M.alphaTest>0,bt=!!M.alphaHash,Pt=!!M.extensions;let Z=Ls;M.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(Z=i.toneMapping);const ne={shaderID:Ct,shaderType:M.type,shaderName:M.name,vertexShader:Ee,fragmentShader:mt,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Kt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:le,batchingColor:le&&et._colorsTexture!==null,instancing:xe,instancingColor:xe&&et.instanceColor!==null,instancingMorph:xe&&et.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:Ro,alphaToCoverage:!!M.alphaToCoverage,map:oe,matcap:Tt,envMap:zt,envMapMode:zt&&gt.mapping,envMapCubeUVHeight:nt,aoMap:V,lightMap:jt,bumpMap:It,normalMap:te,displacementMap:f&&Wt,emissiveMap:tt,normalMapObjectSpace:te&&M.normalMapType===im,normalMapTangentSpace:te&&M.normalMapType===od,metalnessMap:at,roughnessMap:A,anisotropy:w,anisotropyMap:it,clearcoat:G,clearcoatMap:J,clearcoatNormalMap:ut,clearcoatRoughnessMap:U,dispersion:q,iridescence:K,iridescenceMap:Y,iridescenceThicknessMap:dt,sheen:W,sheenColorMap:yt,sheenRoughnessMap:Q,specularMap:_t,specularColorMap:St,specularIntensityMap:Rt,transmission:rt,transmissionMap:D,thicknessMap:z,gradientMap:X,opaque:M.transparent===!1&&M.blending===no&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:bt,combine:M.combine,mapUv:oe&&v(M.map.channel),aoMapUv:V&&v(M.aoMap.channel),lightMapUv:jt&&v(M.lightMap.channel),bumpMapUv:It&&v(M.bumpMap.channel),normalMapUv:te&&v(M.normalMap.channel),displacementMapUv:Wt&&v(M.displacementMap.channel),emissiveMapUv:tt&&v(M.emissiveMap.channel),metalnessMapUv:at&&v(M.metalnessMap.channel),roughnessMapUv:A&&v(M.roughnessMap.channel),anisotropyMapUv:it&&v(M.anisotropyMap.channel),clearcoatMapUv:J&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Q&&v(M.sheenRoughnessMap.channel),specularMapUv:_t&&v(M.specularMap.channel),specularColorMapUv:St&&v(M.specularColorMap.channel),specularIntensityMapUv:Rt&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:z&&v(M.thicknessMap.channel),alphaMapUv:st&&v(M.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(te||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!Mt.attributes.uv&&(oe||st),fog:!!pt,useFog:M.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Jt,skinning:et.isSkinnedMesh===!0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Z,decodeVideoTexture:oe&&M.map.isVideoTexture===!0&&He.getTransfer(M.map.colorSpace)===sn,decodeVideoTextureEmissive:tt&&M.emissiveMap.isVideoTexture===!0&&He.getTransfer(M.emissiveMap.colorSpace)===sn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ge,flipSided:M.side===Gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&M.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function p(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)C.push(N),C.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(b(C,M),T(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function b(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function T(M,C){l.disableAll(),C.supportsVertexTextures&&l.enable(0),C.instancing&&l.enable(1),C.instancingColor&&l.enable(2),C.instancingMorph&&l.enable(3),C.matcap&&l.enable(4),C.envMap&&l.enable(5),C.normalMapObjectSpace&&l.enable(6),C.normalMapTangentSpace&&l.enable(7),C.clearcoat&&l.enable(8),C.iridescence&&l.enable(9),C.alphaTest&&l.enable(10),C.vertexColors&&l.enable(11),C.vertexAlphas&&l.enable(12),C.vertexUv1s&&l.enable(13),C.vertexUv2s&&l.enable(14),C.vertexUv3s&&l.enable(15),C.vertexTangents&&l.enable(16),C.anisotropy&&l.enable(17),C.alphaHash&&l.enable(18),C.batching&&l.enable(19),C.dispersion&&l.enable(20),C.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),C.fog&&l.enable(0),C.useFog&&l.enable(1),C.flatShading&&l.enable(2),C.logarithmicDepthBuffer&&l.enable(3),C.reverseDepthBuffer&&l.enable(4),C.skinning&&l.enable(5),C.morphTargets&&l.enable(6),C.morphNormals&&l.enable(7),C.morphColors&&l.enable(8),C.premultipliedAlpha&&l.enable(9),C.shadowMapEnabled&&l.enable(10),C.doubleSided&&l.enable(11),C.flipSided&&l.enable(12),C.useDepthPacking&&l.enable(13),C.dithering&&l.enable(14),C.transmission&&l.enable(15),C.sheen&&l.enable(16),C.opaque&&l.enable(17),C.pointsUvs&&l.enable(18),C.decodeVideoTexture&&l.enable(19),C.decodeVideoTextureEmissive&&l.enable(20),C.alphaToCoverage&&l.enable(21),M.push(l.mask)}function S(M){const C=g[M.type];let N;if(C){const $=ss[C];N=ji.clone($.uniforms)}else N=M.uniforms;return N}function F(M,C){let N;for(let $=0,et=r.length;$<et;$++){const pt=r[$];if(pt.cacheKey===C){N=pt,++N.usedTimes;break}}return N===void 0&&(N=new i_(i,C,M,o),r.push(N)),N}function O(M){if(--M.usedTimes===0){const C=r.indexOf(M);r[C]=r[r.length-1],r.pop(),M.destroy()}}function R(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:F,releaseProgram:O,releaseShaderCache:R,programs:r,dispose:B}}function l_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ff(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,f){e.length>1&&e.sort(u||c_),n.length>1&&n.sort(f||Uf),s.length>1&&s.sort(f||Uf)}function r(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:r,sort:h}}function h_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let a;return o===void 0?(a=new Ff,i.set(n,[a])):s>=o.length?(a=new Ff,o.push(a)):a=o[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function f_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let d_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){const t=new u_,e=f_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,o=new Ie,a=new Ie;function l(h){let r=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,T=0,S=0,F=0,O=0,R=0;h.sort(p_);for(let M=0,C=h.length;M<C;M++){const N=h[M],$=N.color,et=N.intensity,pt=N.distance,Mt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)r+=$.r*et,u+=$.g*et,f+=$.b*et;else if(N.isLightProbe){for(let lt=0;lt<9;lt++)n.probe[lt].addScaledVector(N.sh.coefficients[lt],et);R++}else if(N.isDirectionalLight){const lt=t.get(N);if(lt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const gt=N.shadow,nt=e.get(N);nt.shadowIntensity=gt.intensity,nt.shadowBias=gt.bias,nt.shadowNormalBias=gt.normalBias,nt.shadowRadius=gt.radius,nt.shadowMapSize=gt.mapSize,n.directionalShadow[d]=nt,n.directionalShadowMap[d]=Mt,n.directionalShadowMatrix[d]=N.shadow.matrix,b++}n.directional[d]=lt,d++}else if(N.isSpotLight){const lt=t.get(N);lt.position.setFromMatrixPosition(N.matrixWorld),lt.color.copy($).multiplyScalar(et),lt.distance=pt,lt.coneCos=Math.cos(N.angle),lt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),lt.decay=N.decay,n.spot[v]=lt;const gt=N.shadow;if(N.map&&(n.spotLightMap[F]=N.map,F++,gt.updateMatrices(N),N.castShadow&&O++),n.spotLightMatrix[v]=gt.matrix,N.castShadow){const nt=e.get(N);nt.shadowIntensity=gt.intensity,nt.shadowBias=gt.bias,nt.shadowNormalBias=gt.normalBias,nt.shadowRadius=gt.radius,nt.shadowMapSize=gt.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=Mt,S++}v++}else if(N.isRectAreaLight){const lt=t.get(N);lt.color.copy($).multiplyScalar(et),lt.halfWidth.set(N.width*.5,0,0),lt.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=lt,m++}else if(N.isPointLight){const lt=t.get(N);if(lt.color.copy(N.color).multiplyScalar(N.intensity),lt.distance=N.distance,lt.decay=N.decay,N.castShadow){const gt=N.shadow,nt=e.get(N);nt.shadowIntensity=gt.intensity,nt.shadowBias=gt.bias,nt.shadowNormalBias=gt.normalBias,nt.shadowRadius=gt.radius,nt.shadowMapSize=gt.mapSize,nt.shadowCameraNear=gt.camera.near,nt.shadowCameraFar=gt.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=Mt,n.pointShadowMatrix[g]=N.shadow.matrix,T++}n.point[g]=lt,g++}else if(N.isHemisphereLight){const lt=t.get(N);lt.skyColor.copy(N.color).multiplyScalar(et),lt.groundColor.copy(N.groundColor).multiplyScalar(et),n.hemi[p]=lt,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_FLOAT_1,n.rectAreaLTC2=ee.LTC_FLOAT_2):(n.rectAreaLTC1=ee.LTC_HALF_1,n.rectAreaLTC2=ee.LTC_HALF_2)),n.ambient[0]=r,n.ambient[1]=u,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==d||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==b||B.numPointShadows!==T||B.numSpotShadows!==S||B.numSpotMaps!==F||B.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+F-O,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=R,B.directionalLength=d,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=b,B.numPointShadows=T,B.numSpotShadows=S,B.numSpotMaps=F,B.numLightProbes=R,n.version=d_++)}function c(h,r){let u=0,f=0,d=0,g=0,v=0;const m=r.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const T=h[p];if(T.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(T.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:l,setupView:c,state:n}}function Nf(i){const t=new m_(i),e=[],n=[];function s(r){h.camera=r,e.length=0,n.length=0}function o(r){e.push(r)}function a(r){n.push(r)}function l(){t.setup(e)}function c(r){t.setupView(e,r)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function g_(i){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Nf(i),t.set(s,[l])):o>=a.length?(l=new Nf(i),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class v_ extends Ar{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x_ extends Ar{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`;function M_(i,t,e){let n=new _u;const s=new Dt,o=new Dt,a=new Xe,l=new v_({depthPacking:nm}),c=new x_,h={},r=e.maxTextureSize,u={[hs]:Gn,[Gn]:hs,[Ge]:Ge},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:__,fragmentShader:y_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0;let p=this.type;this.render=function(O,R,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const M=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Ps),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const et=p!==bs&&this.type===bs,pt=p===bs&&this.type!==bs;for(let Mt=0,lt=O.length;Mt<lt;Mt++){const gt=O[Mt],nt=gt.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",gt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);const Ct=nt.getFrameExtents();if(s.multiply(Ct),o.copy(nt.mapSize),(s.x>r||s.y>r)&&(s.x>r&&(o.x=Math.floor(r/Ct.x),s.x=o.x*Ct.x,nt.mapSize.x=o.x),s.y>r&&(o.y=Math.floor(r/Ct.y),s.y=o.y*Ct.y,nt.mapSize.y=o.y)),nt.map===null||et===!0||pt===!0){const Qt=this.type!==bs?{minFilter:ri,magFilter:ri}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Ti(s.x,s.y,Qt),nt.map.texture.name=gt.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const $t=nt.getViewportCount();for(let Qt=0;Qt<$t;Qt++){const se=nt.getViewport(Qt);a.set(o.x*se.x,o.y*se.y,o.x*se.z,o.y*se.w),$.viewport(a),nt.updateMatrices(gt,Qt),n=nt.getFrustum(),S(R,B,nt.camera,gt,this.type)}nt.isPointLightShadow!==!0&&this.type===bs&&b(nt,B),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,C,N)};function b(O,R){const B=t.update(v);f.defines.VSM_SAMPLES!==O.blurSamples&&(f.defines.VSM_SAMPLES=O.blurSamples,d.defines.VSM_SAMPLES=O.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=O.map.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(R,null,B,f,v,null),d.uniforms.shadow_pass.value=O.mapPass.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(R,null,B,d,v,null)}function T(O,R,B,M){let C=null;const N=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(N!==void 0)C=N;else if(C=B.isPointLight===!0?c:l,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=C.uuid,et=R.uuid;let pt=h[$];pt===void 0&&(pt={},h[$]=pt);let Mt=pt[et];Mt===void 0&&(Mt=C.clone(),pt[et]=Mt,R.addEventListener("dispose",F)),C=Mt}if(C.visible=R.visible,C.wireframe=R.wireframe,M===bs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=i.properties.get(C);$.light=B}return C}function S(O,R,B,M,C){if(O.visible===!1)return;if(O.layers.test(R.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===bs)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);const et=t.update(O),pt=O.material;if(Array.isArray(pt)){const Mt=et.groups;for(let lt=0,gt=Mt.length;lt<gt;lt++){const nt=Mt[lt],Ct=pt[nt.materialIndex];if(Ct&&Ct.visible){const $t=T(O,Ct,M,C);O.onBeforeShadow(i,O,R,B,et,$t,nt),i.renderBufferDirect(B,null,et,$t,O,nt),O.onAfterShadow(i,O,R,B,et,$t,nt)}}}else if(pt.visible){const Mt=T(O,pt,M,C);O.onBeforeShadow(i,O,R,B,et,Mt,null),i.renderBufferDirect(B,null,et,Mt,O,null),O.onAfterShadow(i,O,R,B,et,Mt,null)}}const $=O.children;for(let et=0,pt=$.length;et<pt;et++)S($[et],R,B,M,C)}function F(O){O.target.removeEventListener("dispose",F);for(const B in h){const M=h[B],C=O.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}const b_={[ah]:lh,[ch]:fh,[hh]:dh,[fo]:uh,[lh]:ah,[fh]:ch,[dh]:hh,[uh]:fo};function S_(i,t){function e(){let D=!1;const z=new Xe;let X=null;const st=new Xe(0,0,0,0);return{setMask:function(vt){X!==vt&&!D&&(i.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){D=vt},setClear:function(vt,bt,Pt,Z,ne){ne===!0&&(vt*=Z,bt*=Z,Pt*=Z),z.set(vt,bt,Pt,Z),st.equals(z)===!1&&(i.clearColor(vt,bt,Pt,Z),st.copy(z))},reset:function(){D=!1,X=null,st.set(-1,0,0,0)}}}function n(){let D=!1,z=!1,X=null,st=null,vt=null;return{setReversed:function(bt){if(z!==bt){const Pt=t.get("EXT_clip_control");z?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const Z=vt;vt=null,this.setClear(Z)}z=bt},getReversed:function(){return z},setTest:function(bt){bt?Bt(i.DEPTH_TEST):Jt(i.DEPTH_TEST)},setMask:function(bt){X!==bt&&!D&&(i.depthMask(bt),X=bt)},setFunc:function(bt){if(z&&(bt=b_[bt]),st!==bt){switch(bt){case ah:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case fh:i.depthFunc(i.GREATER);break;case dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){D=bt},setClear:function(bt){vt!==bt&&(z&&(bt=1-bt),i.clearDepth(bt),vt=bt)},reset:function(){D=!1,X=null,st=null,vt=null,z=!1}}}function s(){let D=!1,z=null,X=null,st=null,vt=null,bt=null,Pt=null,Z=null,ne=null;return{setTest:function(ye){D||(ye?Bt(i.STENCIL_TEST):Jt(i.STENCIL_TEST))},setMask:function(ye){z!==ye&&!D&&(i.stencilMask(ye),z=ye)},setFunc:function(ye,Fe,qe){(X!==ye||st!==Fe||vt!==qe)&&(i.stencilFunc(ye,Fe,qe),X=ye,st=Fe,vt=qe)},setOp:function(ye,Fe,qe){(bt!==ye||Pt!==Fe||Z!==qe)&&(i.stencilOp(ye,Fe,qe),bt=ye,Pt=Fe,Z=qe)},setLocked:function(ye){D=ye},setClear:function(ye){ne!==ye&&(i.clearStencil(ye),ne=ye)},reset:function(){D=!1,z=null,X=null,st=null,vt=null,bt=null,Pt=null,Z=null,ne=null}}}const o=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap;let r={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,T=null,S=null,F=null,O=null,R=new Lt(0,0,0),B=0,M=!1,C=null,N=null,$=null,et=null,pt=null;const Mt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,gt=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),lt=gt>=1):nt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),lt=gt>=2);let Ct=null,$t={};const Qt=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Ee=new Xe().fromArray(Qt),mt=new Xe().fromArray(se);function ht(D,z,X,st){const vt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(D,bt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<X;Pt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(z+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return bt}const Kt={};Kt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Kt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Kt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Kt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Bt(i.DEPTH_TEST),a.setFunc(fo),It(!1),te(Hu),Bt(i.CULL_FACE),V(Ps);function Bt(D){r[D]!==!0&&(i.enable(D),r[D]=!0)}function Jt(D){r[D]!==!1&&(i.disable(D),r[D]=!1)}function xe(D,z){return u[D]!==z?(i.bindFramebuffer(D,z),u[D]=z,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function le(D,z){let X=d,st=!1;if(D){X=f.get(z),X===void 0&&(X=[],f.set(z,X));const vt=D.textures;if(X.length!==vt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Pt=vt.length;bt<Pt;bt++)X[bt]=i.COLOR_ATTACHMENT0+bt;X.length=vt.length,st=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,st=!0);st&&i.drawBuffers(X)}function oe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Tt={[cr]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Rp]:i.FUNC_REVERSE_SUBTRACT};Tt[Pp]=i.MIN,Tt[Lp]=i.MAX;const zt={[Dp]:i.ZERO,[Ip]:i.ONE,[Up]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[kp]:i.SRC_ALPHA_SATURATE,[Op]:i.DST_COLOR,[Np]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[Bp]:i.ONE_MINUS_DST_COLOR,[zp]:i.ONE_MINUS_DST_ALPHA,[Hp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Vp]:i.CONSTANT_ALPHA,[Wp]:i.ONE_MINUS_CONSTANT_ALPHA};function V(D,z,X,st,vt,bt,Pt,Z,ne,ye){if(D===Ps){v===!0&&(Jt(i.BLEND),v=!1);return}if(v===!1&&(Bt(i.BLEND),v=!0),D!==Ap){if(D!==m||ye!==M){if((p!==cr||S!==cr)&&(i.blendEquation(i.FUNC_ADD),p=cr,S=cr),ye)switch(D){case no:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,T=null,F=null,O=null,R.set(0,0,0),B=0,m=D,M=ye}return}vt=vt||z,bt=bt||X,Pt=Pt||st,(z!==p||vt!==S)&&(i.blendEquationSeparate(Tt[z],Tt[vt]),p=z,S=vt),(X!==b||st!==T||bt!==F||Pt!==O)&&(i.blendFuncSeparate(zt[X],zt[st],zt[bt],zt[Pt]),b=X,T=st,F=bt,O=Pt),(Z.equals(R)===!1||ne!==B)&&(i.blendColor(Z.r,Z.g,Z.b,ne),R.copy(Z),B=ne),m=D,M=!1}function jt(D,z){D.side===Ge?Jt(i.CULL_FACE):Bt(i.CULL_FACE);let X=D.side===Gn;z&&(X=!X),It(X),D.blending===no&&D.transparent===!1?V(Ps):V(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),o.setMask(D.colorWrite);const st=D.stencilWrite;l.setTest(st),st&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Bt(i.SAMPLE_ALPHA_TO_COVERAGE):Jt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function te(D){D!==wp?(Bt(i.CULL_FACE),D!==N&&(D===Hu?i.cullFace(i.BACK):D===Tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Jt(i.CULL_FACE),N=D}function Wt(D){D!==$&&(lt&&i.lineWidth(D),$=D)}function tt(D,z,X){D?(Bt(i.POLYGON_OFFSET_FILL),(et!==z||pt!==X)&&(i.polygonOffset(z,X),et=z,pt=X)):Jt(i.POLYGON_OFFSET_FILL)}function at(D){D?Bt(i.SCISSOR_TEST):Jt(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+Mt-1),Ct!==D&&(i.activeTexture(D),Ct=D)}function w(D,z,X){X===void 0&&(Ct===null?X=i.TEXTURE0+Mt-1:X=Ct);let st=$t[X];st===void 0&&(st={type:void 0,texture:void 0},$t[X]=st),(st.type!==D||st.texture!==z)&&(Ct!==X&&(i.activeTexture(X),Ct=X),i.bindTexture(D,z||Kt[D]),st.type=D,st.texture=z)}function G(){const D=$t[Ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(D){Ee.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function Q(D){mt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),mt.copy(D))}function _t(D,z){let X=h.get(z);X===void 0&&(X=new WeakMap,h.set(z,X));let st=X.get(D);st===void 0&&(st=i.getUniformBlockIndex(z,D.name),X.set(D,st))}function St(D,z){const st=h.get(z).get(D);c.get(z)!==st&&(i.uniformBlockBinding(z,st,D.__bindingPointIndex),c.set(z,st))}function Rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),r={},Ct=null,$t={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,T=null,S=null,F=null,O=null,R=new Lt(0,0,0),B=0,M=!1,C=null,N=null,$=null,et=null,pt=null,Ee.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:Bt,disable:Jt,bindFramebuffer:xe,drawBuffers:le,useProgram:oe,setBlending:V,setMaterial:jt,setFlipSided:It,setCullFace:te,setLineWidth:Wt,setPolygonOffset:tt,setScissorTest:at,activeTexture:A,bindTexture:w,unbindTexture:G,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:Y,texImage3D:dt,updateUBOMapping:_t,uniformBlockBinding:St,texStorage2D:ut,texStorage3D:U,texSubImage2D:W,texSubImage3D:rt,compressedTexSubImage2D:it,compressedTexSubImage3D:J,scissor:yt,viewport:Q,reset:Rt}}function zf(i,t,e,n){const s=w_(n);switch(e){case td:return i*t;case nd:return i*t;case id:return i*t*2;case pu:return i*t/s.components*s.byteLength;case mu:return i*t/s.components*s.byteLength;case sd:return i*t*2/s.components*s.byteLength;case gu:return i*t*2/s.components*s.byteLength;case ed:return i*t*3/s.components*s.byteLength;case wi:return i*t*4/s.components*s.byteLength;case vu:return i*t*4/s.components*s.byteLength;case vl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _l:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _h:case Mh:return Math.max(i,16)*Math.max(t,8)/4;case xh:case yh:return Math.max(i,8)*Math.max(t,8)/2;case bh:case Sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ml:case Bh:case kh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rd:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Gh:case Vh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w_(i){switch(i){case Is:case Z0:return{byteLength:1,components:1};case ya:case J0:case Ui:return{byteLength:2,components:1};case fu:case du:return{byteLength:2,components:4};case br:case uu:case rs:return{byteLength:4,components:1};case Q0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T_(i,t,e,n,s,o,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,r=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return d?new OffscreenCanvas(A,w):Fl("canvas")}function v(A,w,G){let q=1;const K=at(A);if((K.width>G||K.height>G)&&(q=G/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(q*K.width),rt=Math.floor(q*K.height);u===void 0&&(u=g(W,rt));const it=w?g(W,rt):u;return it.width=W,it.height=rt,it.getContext("2d").drawImage(A,0,0,W,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+rt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,w,G,q,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=w;if(w===i.RED&&(G===i.FLOAT&&(W=i.R32F),G===i.HALF_FLOAT&&(W=i.R16F),G===i.UNSIGNED_BYTE&&(W=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.R8UI),G===i.UNSIGNED_SHORT&&(W=i.R16UI),G===i.UNSIGNED_INT&&(W=i.R32UI),G===i.BYTE&&(W=i.R8I),G===i.SHORT&&(W=i.R16I),G===i.INT&&(W=i.R32I)),w===i.RG&&(G===i.FLOAT&&(W=i.RG32F),G===i.HALF_FLOAT&&(W=i.RG16F),G===i.UNSIGNED_BYTE&&(W=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RG8UI),G===i.UNSIGNED_SHORT&&(W=i.RG16UI),G===i.UNSIGNED_INT&&(W=i.RG32UI),G===i.BYTE&&(W=i.RG8I),G===i.SHORT&&(W=i.RG16I),G===i.INT&&(W=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGB8UI),G===i.UNSIGNED_SHORT&&(W=i.RGB16UI),G===i.UNSIGNED_INT&&(W=i.RGB32UI),G===i.BYTE&&(W=i.RGB8I),G===i.SHORT&&(W=i.RGB16I),G===i.INT&&(W=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),G===i.UNSIGNED_INT&&(W=i.RGBA32UI),G===i.BYTE&&(W=i.RGBA8I),G===i.SHORT&&(W=i.RGBA16I),G===i.INT&&(W=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),w===i.RGBA){const rt=K?jl:He.getTransfer(q);G===i.FLOAT&&(W=i.RGBA32F),G===i.HALF_FLOAT&&(W=i.RGBA16F),G===i.UNSIGNED_BYTE&&(W=rt===sn?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(A,w){let G;return A?w===null||w===br||w===go?G=i.DEPTH24_STENCIL8:w===rs?G=i.DEPTH32F_STENCIL8:w===ya&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===br||w===go?G=i.DEPTH_COMPONENT24:w===rs?G=i.DEPTH_COMPONENT32F:w===ya&&(G=i.DEPTH_COMPONENT16),G}function F(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ri&&A.minFilter!==Ii?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function O(A){const w=A.target;w.removeEventListener("dispose",O),B(w),w.isVideoTexture&&r.delete(w)}function R(A){const w=A.target;w.removeEventListener("dispose",R),C(w)}function B(A){const w=n.get(A);if(w.__webglInit===void 0)return;const G=A.source,q=f.get(G);if(q){const K=q[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(A),Object.keys(q).length===0&&f.delete(G)}n.remove(A)}function M(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const G=A.source,q=f.get(G);delete q[w.__cacheKey],a.memory.textures--}function C(A){const w=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let K=0;K<w.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(w.__webglFramebuffer[q][K]);else i.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)i.deleteFramebuffer(w.__webglFramebuffer[q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=A.textures;for(let q=0,K=G.length;q<K;q++){const W=n.get(G[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(A)}let N=0;function $(){N=0}function et(){const A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function pt(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Mt(A,w){const G=n.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(G,A,w);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function lt(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){mt(G,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function gt(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){mt(G,A,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function nt(A,w){const G=n.get(A);if(A.version>0&&G.__version!==A.version){ht(G,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const Ct={[gh]:i.REPEAT,[vr]:i.CLAMP_TO_EDGE,[vh]:i.MIRRORED_REPEAT},$t={[ri]:i.NEAREST,[tm]:i.NEAREST_MIPMAP_NEAREST,[Da]:i.NEAREST_MIPMAP_LINEAR,[Ii]:i.LINEAR,[lc]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},Qt={[sm]:i.NEVER,[hm]:i.ALWAYS,[rm]:i.LESS,[ad]:i.LEQUAL,[om]:i.EQUAL,[cm]:i.GEQUAL,[am]:i.GREATER,[lm]:i.NOTEQUAL};function se(A,w){if(w.type===rs&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ii||w.magFilter===lc||w.magFilter===Da||w.magFilter===xr||w.minFilter===Ii||w.minFilter===lc||w.minFilter===Da||w.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ct[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ct[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ct[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,$t[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,$t[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Qt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ri||w.minFilter!==Da&&w.minFilter!==xr||w.type===rs&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",O));const q=w.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const W=pt(w);if(W!==A.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[W].usedTimes++;const rt=K[A.__cacheKey];rt!==void 0&&(K[A.__cacheKey].usedTimes--,rt.usedTimes===0&&M(w)),A.__cacheKey=W,A.__webglTexture=K[W].texture}return G}function mt(A,w,G){let q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=i.TEXTURE_3D);const K=Ee(A,w),W=w.source;e.bindTexture(q,A.__webglTexture,i.TEXTURE0+G);const rt=n.get(W);if(W.version!==rt.__version||K===!0){e.activeTexture(i.TEXTURE0+G);const it=He.getPrimaries(He.workingColorSpace),J=w.colorSpace===ws?null:He.getPrimaries(w.colorSpace),ut=w.colorSpace===ws||it===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let U=v(w.image,!1,s.maxTextureSize);U=tt(w,U);const Y=o.convert(w.format,w.colorSpace),dt=o.convert(w.type);let yt=T(w.internalFormat,Y,dt,w.colorSpace,w.isVideoTexture);se(q,w);let Q;const _t=w.mipmaps,St=w.isVideoTexture!==!0,Rt=rt.__version===void 0||K===!0,D=W.dataReady,z=F(w,U);if(w.isDepthTexture)yt=S(w.format===vo,w.type),Rt&&(St?e.texStorage2D(i.TEXTURE_2D,1,yt,U.width,U.height):e.texImage2D(i.TEXTURE_2D,0,yt,U.width,U.height,0,Y,dt,null));else if(w.isDataTexture)if(_t.length>0){St&&Rt&&e.texStorage2D(i.TEXTURE_2D,z,yt,_t[0].width,_t[0].height);for(let X=0,st=_t.length;X<st;X++)Q=_t[X],St?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Q.width,Q.height,Y,dt,Q.data):e.texImage2D(i.TEXTURE_2D,X,yt,Q.width,Q.height,0,Y,dt,Q.data);w.generateMipmaps=!1}else St?(Rt&&e.texStorage2D(i.TEXTURE_2D,z,yt,U.width,U.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,U.width,U.height,Y,dt,U.data)):e.texImage2D(i.TEXTURE_2D,0,yt,U.width,U.height,0,Y,dt,U.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){St&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,yt,_t[0].width,_t[0].height,U.depth);for(let X=0,st=_t.length;X<st;X++)if(Q=_t[X],w.format!==wi)if(Y!==null)if(St){if(D)if(w.layerUpdates.size>0){const vt=zf(Q.width,Q.height,w.format,w.type);for(const bt of w.layerUpdates){const Pt=Q.data.subarray(bt*vt/Q.data.BYTES_PER_ELEMENT,(bt+1)*vt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,bt,Q.width,Q.height,1,Y,Pt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Q.width,Q.height,U.depth,Y,Q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,yt,Q.width,Q.height,U.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Q.width,Q.height,U.depth,Y,dt,Q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,yt,Q.width,Q.height,U.depth,0,Y,dt,Q.data)}else{St&&Rt&&e.texStorage2D(i.TEXTURE_2D,z,yt,_t[0].width,_t[0].height);for(let X=0,st=_t.length;X<st;X++)Q=_t[X],w.format!==wi?Y!==null?St?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Q.width,Q.height,Y,Q.data):e.compressedTexImage2D(i.TEXTURE_2D,X,yt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Q.width,Q.height,Y,dt,Q.data):e.texImage2D(i.TEXTURE_2D,X,yt,Q.width,Q.height,0,Y,dt,Q.data)}else if(w.isDataArrayTexture)if(St){if(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,yt,U.width,U.height,U.depth),D)if(w.layerUpdates.size>0){const X=zf(U.width,U.height,w.format,w.type);for(const st of w.layerUpdates){const vt=U.data.subarray(st*X/U.data.BYTES_PER_ELEMENT,(st+1)*X/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,U.width,U.height,1,Y,dt,vt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,Y,dt,U.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,U.width,U.height,U.depth,0,Y,dt,U.data);else if(w.isData3DTexture)St?(Rt&&e.texStorage3D(i.TEXTURE_3D,z,yt,U.width,U.height,U.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,Y,dt,U.data)):e.texImage3D(i.TEXTURE_3D,0,yt,U.width,U.height,U.depth,0,Y,dt,U.data);else if(w.isFramebufferTexture){if(Rt)if(St)e.texStorage2D(i.TEXTURE_2D,z,yt,U.width,U.height);else{let X=U.width,st=U.height;for(let vt=0;vt<z;vt++)e.texImage2D(i.TEXTURE_2D,vt,yt,X,st,0,Y,dt,null),X>>=1,st>>=1}}else if(_t.length>0){if(St&&Rt){const X=at(_t[0]);e.texStorage2D(i.TEXTURE_2D,z,yt,X.width,X.height)}for(let X=0,st=_t.length;X<st;X++)Q=_t[X],St?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Y,dt,Q):e.texImage2D(i.TEXTURE_2D,X,yt,Y,dt,Q);w.generateMipmaps=!1}else if(St){if(Rt){const X=at(U);e.texStorage2D(i.TEXTURE_2D,z,yt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,dt,U)}else e.texImage2D(i.TEXTURE_2D,0,yt,Y,dt,U);m(w)&&p(q),rt.__version=W.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ht(A,w,G){if(w.image.length!==6)return;const q=Ee(A,w),K=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const W=n.get(K);if(K.version!==W.__version||q===!0){e.activeTexture(i.TEXTURE0+G);const rt=He.getPrimaries(He.workingColorSpace),it=w.colorSpace===ws?null:He.getPrimaries(w.colorSpace),J=w.colorSpace===ws||rt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let st=0;st<6;st++)!ut&&!U?Y[st]=v(w.image[st],!0,s.maxCubemapSize):Y[st]=U?w.image[st].image:w.image[st],Y[st]=tt(w,Y[st]);const dt=Y[0],yt=o.convert(w.format,w.colorSpace),Q=o.convert(w.type),_t=T(w.internalFormat,yt,Q,w.colorSpace),St=w.isVideoTexture!==!0,Rt=W.__version===void 0||q===!0,D=K.dataReady;let z=F(w,dt);se(i.TEXTURE_CUBE_MAP,w);let X;if(ut){St&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,z,_t,dt.width,dt.height);for(let st=0;st<6;st++){X=Y[st].mipmaps;for(let vt=0;vt<X.length;vt++){const bt=X[vt];w.format!==wi?yt!==null?St?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,_t,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,0,0,bt.width,bt.height,yt,Q,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt,_t,bt.width,bt.height,0,yt,Q,bt.data)}}}else{if(X=w.mipmaps,St&&Rt){X.length>0&&z++;const st=at(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,z,_t,st.width,st.height)}for(let st=0;st<6;st++)if(U){St?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Y[st].width,Y[st].height,yt,Q,Y[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,_t,Y[st].width,Y[st].height,0,yt,Q,Y[st].data);for(let vt=0;vt<X.length;vt++){const Pt=X[vt].image[st].image;St?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,Pt.width,Pt.height,yt,Q,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,_t,Pt.width,Pt.height,0,yt,Q,Pt.data)}}else{St?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt,Q,Y[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,_t,yt,Q,Y[st]);for(let vt=0;vt<X.length;vt++){const bt=X[vt];St?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,0,0,yt,Q,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt+1,_t,yt,Q,bt.image[st])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),W.__version=K.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Kt(A,w,G,q,K,W){const rt=o.convert(G.format,G.colorSpace),it=o.convert(G.type),J=T(G.internalFormat,rt,it,G.colorSpace),ut=n.get(w),U=n.get(G);if(U.__renderTarget=w,!ut.__hasExternalTextures){const Y=Math.max(1,w.width>>W),dt=Math.max(1,w.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,W,J,Y,dt,w.depth,0,rt,it,null):e.texImage2D(K,W,J,Y,dt,0,rt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,U.__webglTexture,0,It(w)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,U.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){const q=w.depthTexture,K=q&&q.isDepthTexture?q.type:null,W=S(w.stencilBuffer,K),rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=It(w);te(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,W,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,W,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,W,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,A)}else{const q=w.textures;for(let K=0;K<q.length;K++){const W=q[K],rt=o.convert(W.format,W.colorSpace),it=o.convert(W.type),J=T(W.internalFormat,rt,it,W.colorSpace),ut=It(w);G&&te(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,w.width,w.height):te(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(w.depthTexture);q.__renderTarget=w,(!q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Mt(w.depthTexture,0);const K=q.__webglTexture,W=It(w);if(w.depthTexture.format===io)te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(w.depthTexture.format===vo)te(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function xe(A){const w=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){const K=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),w.__depthDisposeCallback=K}w.__boundDepthTexture=q}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Jt(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=i.createRenderbuffer(),Bt(w.__webglDepthbuffer[q],A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=w.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Bt(w.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(A,w,G){const q=n.get(A);w!==void 0&&Kt(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&xe(A)}function oe(A){const w=A.texture,G=n.get(A),q=n.get(w);A.addEventListener("dispose",R);const K=A.textures,W=A.isWebGLCubeRenderTarget===!0,rt=K.length>1;if(rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=w.version,a.memory.textures++),W){G.__webglFramebuffer=[];for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[it]=[];for(let J=0;J<w.mipmaps.length;J++)G.__webglFramebuffer[it][J]=i.createFramebuffer()}else G.__webglFramebuffer[it]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let it=0;it<w.mipmaps.length;it++)G.__webglFramebuffer[it]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(rt)for(let it=0,J=K.length;it<J;it++){const ut=n.get(K[it]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&te(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){const J=K[it];G.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[it]);const ut=o.convert(J.format,J.colorSpace),U=o.convert(J.type),Y=T(J.internalFormat,ut,U,J.colorSpace,A.isXRRenderTarget===!0),dt=It(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Y,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,G.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),se(i.TEXTURE_CUBE_MAP,w);for(let it=0;it<6;it++)if(w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Kt(G.__webglFramebuffer[it][J],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,J);else Kt(G.__webglFramebuffer[it],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let it=0,J=K.length;it<J;it++){const ut=K[it],U=n.get(ut);e.bindTexture(i.TEXTURE_2D,U.__webglTexture),se(i.TEXTURE_2D,ut),Kt(G.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),m(ut)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),se(it,w),w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)Kt(G.__webglFramebuffer[J],A,w,i.COLOR_ATTACHMENT0,it,J);else Kt(G.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,it,0);m(w)&&p(it),e.unbindTexture()}A.depthBuffer&&xe(A)}function Tt(A){const w=A.textures;for(let G=0,q=w.length;G<q;G++){const K=w[G];if(m(K)){const W=b(A),rt=n.get(K).__webglTexture;e.bindTexture(W,rt),p(W),e.unbindTexture()}}}const zt=[],V=[];function jt(A){if(A.samples>0){if(te(A)===!1){const w=A.textures,G=A.width,q=A.height;let K=i.COLOR_BUFFER_BIT;const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(A),it=w.length>1;if(it)for(let J=0;J<w.length;J++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let J=0;J<w.length;J++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[J]);const ut=n.get(w[J]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,K,i.NEAREST),c===!0&&(zt.length=0,V.length=0,zt.push(i.COLOR_ATTACHMENT0+J),A.depthBuffer&&A.resolveDepthBuffer===!1&&(zt.push(W),V.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let J=0;J<w.length;J++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,rt.__webglColorRenderbuffer[J]);const ut=n.get(w[J]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function It(A){return Math.min(s.maxSamples,A.samples)}function te(A){const w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Wt(A){const w=a.render.frame;r.get(A)!==w&&(r.set(A,w),A.update())}function tt(A,w){const G=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ro&&G!==ws&&(He.getTransfer(G)===sn?(q!==wi||K!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function at(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=et,this.resetTextureUnits=$,this.setTexture2D=Mt,this.setTexture2DArray=lt,this.setTexture3D=gt,this.setTextureCube=nt,this.rebindTextures=le,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=te}function E_(i,t){function e(n,s=ws){let o;const a=He.getTransfer(s);if(n===Is)return i.UNSIGNED_BYTE;if(n===fu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Q0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Z0)return i.BYTE;if(n===J0)return i.SHORT;if(n===ya)return i.UNSIGNED_SHORT;if(n===uu)return i.INT;if(n===br)return i.UNSIGNED_INT;if(n===rs)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===td)return i.ALPHA;if(n===ed)return i.RGB;if(n===wi)return i.RGBA;if(n===nd)return i.LUMINANCE;if(n===id)return i.LUMINANCE_ALPHA;if(n===io)return i.DEPTH_COMPONENT;if(n===vo)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===mu)return i.RED_INTEGER;if(n===sd)return i.RG;if(n===gu)return i.RG_INTEGER;if(n===vu)return i.RGBA_INTEGER;if(n===vl||n===xl||n===_l||n===yl)if(a===sn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===vl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===vl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===_h||n===yh||n===Mh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===xh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_h)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bh||n===Sh||n===wh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===bh||n===Sh)return a===sn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Th||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Lh||n===Dh||n===Ih||n===Uh||n===Fh||n===Nh||n===zh||n===Oh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Th)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return a===sn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Bh||n===kh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ml)return a===sn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===Hh||n===Gh||n===Vh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ml)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class A_ extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Je extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C_={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const r=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=r.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Jn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:R_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new an(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Po{constructor(t,e){super();const n=this;let s=null,o=1,a=null,l="local-floor",c=1,h=null,r=null,u=null,f=null,d=null,g=null;const v=new L_,m=e.getContextAttributes();let p=null,b=null;const T=[],S=[],F=new Dt;let O=null;const R=new Zn;R.viewport=new Xe;const B=new Zn;B.viewport=new Xe;const M=[R,B],C=new A_;let N=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let ht=T[mt];return ht===void 0&&(ht=new Fc,T[mt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(mt){let ht=T[mt];return ht===void 0&&(ht=new Fc,T[mt]=ht),ht.getGripSpace()},this.getHand=function(mt){let ht=T[mt];return ht===void 0&&(ht=new Fc,T[mt]=ht),ht.getHandSpace()};function et(mt){const ht=S.indexOf(mt.inputSource);if(ht===-1)return;const Kt=T[ht];Kt!==void 0&&(Kt.update(mt.inputSource,mt.frame,h||a),Kt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function pt(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",pt),s.removeEventListener("inputsourceschange",Mt);for(let mt=0;mt<T.length;mt++){const ht=S[mt];ht!==null&&(S[mt]=null,T[mt].disconnect(ht))}N=null,$=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,Ee.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){o=mt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){l=mt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(mt){h=mt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",pt),s.addEventListener("inputsourceschange",Mt),m.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ti(d.framebufferWidth,d.framebufferHeight,{format:wi,type:Is,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,Kt=null,Bt=null;m.depth&&(Bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?vo:io,Kt=m.stencil?go:br);const Jt={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Ti(f.textureWidth,f.textureHeight,{format:wi,type:Is,depthTexture:new bd(f.textureWidth,f.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Mt(mt){for(let ht=0;ht<mt.removed.length;ht++){const Kt=mt.removed[ht],Bt=S.indexOf(Kt);Bt>=0&&(S[Bt]=null,T[Bt].disconnect(Kt))}for(let ht=0;ht<mt.added.length;ht++){const Kt=mt.added[ht];let Bt=S.indexOf(Kt);if(Bt===-1){for(let xe=0;xe<T.length;xe++)if(xe>=S.length){S.push(Kt),Bt=xe;break}else if(S[xe]===null){S[xe]=Kt,Bt=xe;break}if(Bt===-1)break}const Jt=T[Bt];Jt&&Jt.connect(Kt)}}const lt=new P,gt=new P;function nt(mt,ht,Kt){lt.setFromMatrixPosition(ht.matrixWorld),gt.setFromMatrixPosition(Kt.matrixWorld);const Bt=lt.distanceTo(gt),Jt=ht.projectionMatrix.elements,xe=Kt.projectionMatrix.elements,le=Jt[14]/(Jt[10]-1),oe=Jt[14]/(Jt[10]+1),Tt=(Jt[9]+1)/Jt[5],zt=(Jt[9]-1)/Jt[5],V=(Jt[8]-1)/Jt[0],jt=(xe[8]+1)/xe[0],It=le*V,te=le*jt,Wt=Bt/(-V+jt),tt=Wt*-V;if(ht.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(tt),mt.translateZ(Wt),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Jt[10]===-1)mt.projectionMatrix.copy(ht.projectionMatrix),mt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const at=le+Wt,A=oe+Wt,w=It-tt,G=te+(Bt-tt),q=Tt*oe/A*at,K=zt*oe/A*at;mt.projectionMatrix.makePerspective(w,G,q,K,at,A),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function Ct(mt,ht){ht===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(ht.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let ht=mt.near,Kt=mt.far;v.texture!==null&&(v.depthNear>0&&(ht=v.depthNear),v.depthFar>0&&(Kt=v.depthFar)),C.near=B.near=R.near=ht,C.far=B.far=R.far=Kt,(N!==C.near||$!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,$=C.far),R.layers.mask=mt.layers.mask|2,B.layers.mask=mt.layers.mask|4,C.layers.mask=R.layers.mask|B.layers.mask;const Bt=mt.parent,Jt=C.cameras;Ct(C,Bt);for(let xe=0;xe<Jt.length;xe++)Ct(Jt[xe],Bt);Jt.length===2?nt(C,R,B):C.projectionMatrix.copy(R.projectionMatrix),$t(mt,C,Bt)};function $t(mt,ht,Kt){Kt===null?mt.matrix.copy(ht.matrixWorld):(mt.matrix.copy(Kt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(ht.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(ht.projectionMatrix),mt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=_o*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(mt){c=mt,f!==null&&(f.fixedFoveation=mt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=mt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)};let Qt=null;function se(mt,ht){if(r=ht.getViewerPose(h||a),g=ht,r!==null){const Kt=r.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Bt=!1;Kt.length!==C.cameras.length&&(C.cameras.length=0,Bt=!0);for(let xe=0;xe<Kt.length;xe++){const le=Kt[xe];let oe=null;if(d!==null)oe=d.getViewport(le);else{const zt=u.getViewSubImage(f,le);oe=zt.viewport,xe===0&&(t.setRenderTargetTextures(b,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(b))}let Tt=M[xe];Tt===void 0&&(Tt=new Zn,Tt.layers.enable(xe),Tt.viewport=new Xe,M[xe]=Tt),Tt.matrix.fromArray(le.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(le.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(oe.x,oe.y,oe.width,oe.height),xe===0&&(C.matrix.copy(Tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Bt===!0&&C.cameras.push(Tt)}const Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")){const xe=u.getDepthInformation(Kt[0]);xe&&xe.isValid&&xe.texture&&v.init(t,xe,s.renderState)}}for(let Kt=0;Kt<T.length;Kt++){const Bt=S[Kt],Jt=T[Kt];Bt!==null&&Jt!==void 0&&Jt.update(Bt,ht,h||a)}Qt&&Qt(mt,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Ee=new Md;Ee.setAnimationLoop(se),this.setAnimationLoop=function(mt){Qt=mt},this.dispose=function(){}}}const ir=new xi,I_=new Ie;function U_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),r(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),T=b.envMap,S=b.envMapRotation;T&&(m.envMap.value=T,ir.copy(S),ir.x*=-1,ir.y*=-1,ir.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(ir)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function r(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,t,e,n){let s={},o={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function h(b,T){let S=s[b.id];S===void 0&&(g(b),S=r(b),s[b.id]=S,b.addEventListener("dispose",m));const F=T.program;n.updateUBOMapping(b,F);const O=t.render.frame;o[b.id]!==O&&(f(b),o[b.id]=O)}function r(b){const T=u();b.__bindingPointIndex=T;const S=i.createBuffer(),F=b.__size,O=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,F,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let b=0;b<l;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const T=s[b.id],S=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let O=0,R=S.length;O<R;O++){const B=Array.isArray(S[O])?S[O]:[S[O]];for(let M=0,C=B.length;M<C;M++){const N=B[M];if(d(N,O,M,F)===!0){const $=N.__offset,et=Array.isArray(N.value)?N.value:[N.value];let pt=0;for(let Mt=0;Mt<et.length;Mt++){const lt=et[Mt],gt=v(lt);typeof lt=="number"||typeof lt=="boolean"?(N.__data[0]=lt,i.bufferSubData(i.UNIFORM_BUFFER,$+pt,N.__data)):lt.isMatrix3?(N.__data[0]=lt.elements[0],N.__data[1]=lt.elements[1],N.__data[2]=lt.elements[2],N.__data[3]=0,N.__data[4]=lt.elements[3],N.__data[5]=lt.elements[4],N.__data[6]=lt.elements[5],N.__data[7]=0,N.__data[8]=lt.elements[6],N.__data[9]=lt.elements[7],N.__data[10]=lt.elements[8],N.__data[11]=0):(lt.toArray(N.__data,pt),pt+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,T,S,F){const O=b.value,R=T+"_"+S;if(F[R]===void 0)return typeof O=="number"||typeof O=="boolean"?F[R]=O:F[R]=O.clone(),!0;{const B=F[R];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return F[R]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function g(b){const T=b.uniforms;let S=0;const F=16;for(let R=0,B=T.length;R<B;R++){const M=Array.isArray(T[R])?T[R]:[T[R]];for(let C=0,N=M.length;C<N;C++){const $=M[C],et=Array.isArray($.value)?$.value:[$.value];for(let pt=0,Mt=et.length;pt<Mt;pt++){const lt=et[pt],gt=v(lt),nt=S%F,Ct=nt%gt.boundary,$t=nt+Ct;S+=Ct,$t!==0&&F-$t<gt.storage&&(S+=F-$t),$.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=gt.storage}}}const O=S%F;return O>0&&(S+=F-O),b.__size=S,b.__cache={},this}function v(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete o[T.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},o={}}return{bind:c,update:h,dispose:p}}class N_{constructor(t={}){const{canvas:e=Am(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:r="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=Ls,this.toneMappingExposure=1;const S=this;let F=!1,O=0,R=0,B=null,M=-1,C=null;const N=new Xe,$=new Xe;let et=null;const pt=new Lt(0);let Mt=0,lt=e.width,gt=e.height,nt=1,Ct=null,$t=null;const Qt=new Xe(0,0,lt,gt),se=new Xe(0,0,lt,gt);let Ee=!1;const mt=new _u;let ht=!1,Kt=!1;const Bt=new Ie,Jt=new Ie,xe=new P,le=new Xe,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function zt(){return B===null?nt:1}let V=n;function jt(x,y){return e.getContext(x,y)}try{const x={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:r,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),V===null){const y="webgl2";if(V=jt(y,x),V===null)throw jt(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let It,te,Wt,tt,at,A,w,G,q,K,W,rt,it,J,ut,U,Y,dt,yt,Q,_t,St,Rt,D;function z(){It=new H1(V),It.init(),St=new E_(V,It),te=new F1(V,It,t,St),Wt=new S_(V,It),te.reverseDepthBuffer&&f&&Wt.buffers.depth.setReversed(!0),tt=new W1(V),at=new l_,A=new T_(V,It,Wt,at,te,St,tt),w=new z1(S),G=new k1(S),q=new Zm(V),Rt=new I1(V,q),K=new G1(V,q,tt,Rt),W=new q1(V,K,q,tt),yt=new X1(V,te,A),U=new N1(at),rt=new a_(S,w,G,It,te,Rt,U),it=new U_(S,at),J=new h_,ut=new g_(It),dt=new D1(S,w,G,Wt,W,d,c),Y=new M_(S,W,te),D=new F_(V,tt,te,Wt),Q=new U1(V,It,tt),_t=new V1(V,It,tt),tt.programs=rt.programs,S.capabilities=te,S.extensions=It,S.properties=at,S.renderLists=J,S.shadowMap=Y,S.state=Wt,S.info=tt}z();const X=new D_(S,V);this.xr=X,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const x=It.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=It.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(x){x!==void 0&&(nt=x,this.setSize(lt,gt,!1))},this.getSize=function(x){return x.set(lt,gt)},this.setSize=function(x,y,_=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=x,gt=y,e.width=Math.floor(x*nt),e.height=Math.floor(y*nt),_===!0&&(e.style.width=x+"px",e.style.height=y+"px"),this.setViewport(0,0,x,y)},this.getDrawingBufferSize=function(x){return x.set(lt*nt,gt*nt).floor()},this.setDrawingBufferSize=function(x,y,_){lt=x,gt=y,nt=_,e.width=Math.floor(x*_),e.height=Math.floor(y*_),this.setViewport(0,0,x,y)},this.getCurrentViewport=function(x){return x.copy(N)},this.getViewport=function(x){return x.copy(Qt)},this.setViewport=function(x,y,_,I){x.isVector4?Qt.set(x.x,x.y,x.z,x.w):Qt.set(x,y,_,I),Wt.viewport(N.copy(Qt).multiplyScalar(nt).round())},this.getScissor=function(x){return x.copy(se)},this.setScissor=function(x,y,_,I){x.isVector4?se.set(x.x,x.y,x.z,x.w):se.set(x,y,_,I),Wt.scissor($.copy(se).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(x){Wt.setScissorTest(Ee=x)},this.setOpaqueSort=function(x){Ct=x},this.setTransparentSort=function(x){$t=x},this.getClearColor=function(x){return x.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(x=!0,y=!0,_=!0){let I=0;if(x){let E=!1;if(B!==null){const k=B.texture.format;E=k===vu||k===gu||k===mu}if(E){const k=B.texture.type,H=k===Is||k===br||k===ya||k===go||k===fu||k===du,ot=dt.getClearColor(),ct=dt.getClearAlpha(),xt=ot.r,At=ot.g,wt=ot.b;H?(g[0]=xt,g[1]=At,g[2]=wt,g[3]=ct,V.clearBufferuiv(V.COLOR,0,g)):(v[0]=xt,v[1]=At,v[2]=wt,v[3]=ct,V.clearBufferiv(V.COLOR,0,v))}else I|=V.COLOR_BUFFER_BIT}y&&(I|=V.DEPTH_BUFFER_BIT),_&&(I|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),J.dispose(),ut.dispose(),at.dispose(),w.dispose(),G.dispose(),W.dispose(),Rt.dispose(),D.dispose(),rt.dispose(),X.dispose(),X.removeEventListener("sessionstart",gn),X.removeEventListener("sessionend",oi),ai.stop()};function st(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const x=tt.autoReset,y=Y.enabled,_=Y.autoUpdate,I=Y.needsUpdate,E=Y.type;z(),tt.autoReset=x,Y.enabled=y,Y.autoUpdate=_,Y.needsUpdate=I,Y.type=E}function bt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Pt(x){const y=x.target;y.removeEventListener("dispose",Pt),Z(y)}function Z(x){ne(x),at.remove(x)}function ne(x){const y=at.get(x).programs;y!==void 0&&(y.forEach(function(_){rt.releaseProgram(_)}),x.isShaderMaterial&&rt.releaseShaderCache(x))}this.renderBufferDirect=function(x,y,_,I,E,k){y===null&&(y=oe);const H=E.isMesh&&E.matrixWorld.determinant()<0,ot=_e(x,y,_,I,E);Wt.setMaterial(I,H);let ct=_.index,xt=1;if(I.wireframe===!0){if(ct=K.getWireframeAttribute(_),ct===void 0)return;xt=2}const At=_.drawRange,wt=_.attributes.position;let me=At.start*xt,ge=(At.start+At.count)*xt;k!==null&&(me=Math.max(me,k.start*xt),ge=Math.min(ge,(k.start+k.count)*xt)),ct!==null?(me=Math.max(me,0),ge=Math.min(ge,ct.count)):wt!=null&&(me=Math.max(me,0),ge=Math.min(ge,wt.count));const Nt=ge-me;if(Nt<0||Nt===1/0)return;Rt.setup(E,I,ot,_,ct);let Ht,Gt=Q;if(ct!==null&&(Ht=q.get(ct),Gt=_t,Gt.setIndex(Ht)),E.isMesh)I.wireframe===!0?(Wt.setLineWidth(I.wireframeLinewidth*zt()),Gt.setMode(V.LINES)):Gt.setMode(V.TRIANGLES);else if(E.isLine){let Xt=I.linewidth;Xt===void 0&&(Xt=1),Wt.setLineWidth(Xt*zt()),E.isLineSegments?Gt.setMode(V.LINES):E.isLineLoop?Gt.setMode(V.LINE_LOOP):Gt.setMode(V.LINE_STRIP)}else E.isPoints?Gt.setMode(V.POINTS):E.isSprite&&Gt.setMode(V.TRIANGLES);if(E.isBatchedMesh)if(E._multiDrawInstances!==null)Gt.renderMultiDrawInstances(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount,E._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Gt.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{const Xt=E._multiDrawStarts,Me=E._multiDrawCounts,re=E._multiDrawCount,we=ct?q.get(ct).bytesPerElement:1,fe=at.get(I).currentProgram.getUniforms();for(let pe=0;pe<re;pe++)fe.setValue(V,"_gl_DrawID",pe),Gt.render(Xt[pe]/we,Me[pe])}else if(E.isInstancedMesh)Gt.renderInstances(me,Nt,E.count);else if(_.isInstancedBufferGeometry){const Xt=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,Me=Math.min(_.instanceCount,Xt);Gt.renderInstances(me,Nt,Me)}else Gt.render(me,Nt)};function ye(x,y,_){x.transparent===!0&&x.side===Ge&&x.forceSinglePass===!1?(x.side=Gn,x.needsUpdate=!0,Ft(x,y,_),x.side=hs,x.needsUpdate=!0,Ft(x,y,_),x.side=Ge):Ft(x,y,_)}this.compile=function(x,y,_=null){_===null&&(_=x),p=ut.get(_),p.init(y),T.push(p),_.traverseVisible(function(E){E.isLight&&E.layers.test(y.layers)&&(p.pushLight(E),E.castShadow&&p.pushShadow(E))}),x!==_&&x.traverseVisible(function(E){E.isLight&&E.layers.test(y.layers)&&(p.pushLight(E),E.castShadow&&p.pushShadow(E))}),p.setupLights();const I=new Set;return x.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;const k=E.material;if(k)if(Array.isArray(k))for(let H=0;H<k.length;H++){const ot=k[H];ye(ot,_,E),I.add(ot)}else ye(k,_,E),I.add(k)}),T.pop(),p=null,I},this.compileAsync=function(x,y,_=null){const I=this.compile(x,y,_);return new Promise(E=>{function k(){if(I.forEach(function(H){at.get(H).currentProgram.isReady()&&I.delete(H)}),I.size===0){E(x);return}setTimeout(k,10)}It.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Fe=null;function qe(x){Fe&&Fe(x)}function gn(){ai.stop()}function oi(){ai.start()}const ai=new Md;ai.setAnimationLoop(qe),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(x){Fe=x,X.setAnimationLoop(x),x===null?ai.stop():ai.start()},X.addEventListener("sessionstart",gn),X.addEventListener("sessionend",oi),this.render=function(x,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(y),y=X.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,y,B),p=ut.get(x,T.length),p.init(y),T.push(p),Jt.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),mt.setFromProjectionMatrix(Jt),Kt=this.localClippingEnabled,ht=U.init(this.clippingPlanes,Kt),m=J.get(x,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const k=S.xr.getDepthSensingMesh();k!==null&&Ji(k,y,-1/0,S.sortObjects)}Ji(x,y,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Ct,$t),Tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Tt&&dt.addToRenderList(m,x),this.info.render.frame++,ht===!0&&U.beginShadows();const _=p.state.shadowsArray;Y.render(_,x,y),ht===!0&&U.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=m.opaque,E=m.transmissive;if(p.setupLights(),y.isArrayCamera){const k=y.cameras;if(E.length>0)for(let H=0,ot=k.length;H<ot;H++){const ct=k[H];Ot(I,E,x,ct)}Tt&&dt.render(x);for(let H=0,ot=k.length;H<ot;H++){const ct=k[H];j(m,x,ct,ct.viewport)}}else E.length>0&&Ot(I,E,x,y),Tt&&dt.render(x),j(m,x,y);B!==null&&(A.updateMultisampleRenderTarget(B),A.updateRenderTargetMipmap(B)),x.isScene===!0&&x.onAfterRender(S,x,y),Rt.resetDefaultState(),M=-1,C=null,T.pop(),T.length>0?(p=T[T.length-1],ht===!0&&U.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ji(x,y,_,I){if(x.visible===!1)return;if(x.layers.test(y.layers)){if(x.isGroup)_=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(y);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||mt.intersectsSprite(x)){I&&le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Jt);const H=W.update(x),ot=x.material;ot.visible&&m.push(x,H,ot,_,le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||mt.intersectsObject(x))){const H=W.update(x),ot=x.material;if(I&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),le.copy(x.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),le.copy(H.boundingSphere.center)),le.applyMatrix4(x.matrixWorld).applyMatrix4(Jt)),Array.isArray(ot)){const ct=H.groups;for(let xt=0,At=ct.length;xt<At;xt++){const wt=ct[xt],me=ot[wt.materialIndex];me&&me.visible&&m.push(x,H,me,_,le.z,wt)}}else ot.visible&&m.push(x,H,ot,_,le.z,null)}}const k=x.children;for(let H=0,ot=k.length;H<ot;H++)Ji(k[H],y,_,I)}function j(x,y,_,I){const E=x.opaque,k=x.transmissive,H=x.transparent;p.setupLightsView(_),ht===!0&&U.setGlobalState(S.clippingPlanes,_),I&&Wt.viewport(N.copy(I)),E.length>0&&Zt(E,y,_),k.length>0&&Zt(k,y,_),H.length>0&&Zt(H,y,_),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Ot(x,y,_,I){if((_.isScene===!0?_.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[I.id]===void 0&&(p.state.transmissionRenderTarget[I.id]=new Ti(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Ui:Is,minFilter:xr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const k=p.state.transmissionRenderTarget[I.id],H=I.viewport||N;k.setSize(H.z,H.w);const ot=S.getRenderTarget();S.setRenderTarget(k),S.getClearColor(pt),Mt=S.getClearAlpha(),Mt<1&&S.setClearColor(16777215,.5),S.clear(),Tt&&dt.render(_);const ct=S.toneMapping;S.toneMapping=Ls;const xt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),p.setupLightsView(I),ht===!0&&U.setGlobalState(S.clippingPlanes,I),Zt(x,_,I),A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k),It.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let wt=0,me=y.length;wt<me;wt++){const ge=y[wt],Nt=ge.object,Ht=ge.geometry,Gt=ge.material,Xt=ge.group;if(Gt.side===Ge&&Nt.layers.test(I.layers)){const Me=Gt.side;Gt.side=Gn,Gt.needsUpdate=!0,Ut(Nt,_,I,Ht,Gt,Xt),Gt.side=Me,Gt.needsUpdate=!0,At=!0}}At===!0&&(A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k))}S.setRenderTarget(ot),S.setClearColor(pt,Mt),xt!==void 0&&(I.viewport=xt),S.toneMapping=ct}function Zt(x,y,_){const I=y.isScene===!0?y.overrideMaterial:null;for(let E=0,k=x.length;E<k;E++){const H=x[E],ot=H.object,ct=H.geometry,xt=I===null?H.material:I,At=H.group;ot.layers.test(_.layers)&&Ut(ot,y,_,ct,xt,At)}}function Ut(x,y,_,I,E,k){x.onBeforeRender(S,y,_,I,E,k),x.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),E.onBeforeRender(S,y,_,I,x,k),E.transparent===!0&&E.side===Ge&&E.forceSinglePass===!1?(E.side=Gn,E.needsUpdate=!0,S.renderBufferDirect(_,y,I,E,x,k),E.side=hs,E.needsUpdate=!0,S.renderBufferDirect(_,y,I,E,x,k),E.side=Ge):S.renderBufferDirect(_,y,I,E,x,k),x.onAfterRender(S,y,_,I,E,k)}function Ft(x,y,_){y.isScene!==!0&&(y=oe);const I=at.get(x),E=p.state.lights,k=p.state.shadowsArray,H=E.state.version,ot=rt.getParameters(x,E.state,k,y,_),ct=rt.getProgramCacheKey(ot);let xt=I.programs;I.environment=x.isMeshStandardMaterial?y.environment:null,I.fog=y.fog,I.envMap=(x.isMeshStandardMaterial?G:w).get(x.envMap||I.environment),I.envMapRotation=I.environment!==null&&x.envMap===null?y.environmentRotation:x.envMapRotation,xt===void 0&&(x.addEventListener("dispose",Pt),xt=new Map,I.programs=xt);let At=xt.get(ct);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===H)return ve(x,ot),At}else ot.uniforms=rt.getUniforms(x),x.onBeforeCompile(ot,S),At=rt.acquireProgram(ot,ct),xt.set(ct,At),I.uniforms=ot.uniforms;const wt=I.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=U.uniform),ve(x,ot),I.needsLights=L(x),I.lightsStateVersion=H,I.needsLights&&(wt.ambientLightColor.value=E.state.ambient,wt.lightProbe.value=E.state.probe,wt.directionalLights.value=E.state.directional,wt.directionalLightShadows.value=E.state.directionalShadow,wt.spotLights.value=E.state.spot,wt.spotLightShadows.value=E.state.spotShadow,wt.rectAreaLights.value=E.state.rectArea,wt.ltc_1.value=E.state.rectAreaLTC1,wt.ltc_2.value=E.state.rectAreaLTC2,wt.pointLights.value=E.state.point,wt.pointLightShadows.value=E.state.pointShadow,wt.hemisphereLights.value=E.state.hemi,wt.directionalShadowMap.value=E.state.directionalShadowMap,wt.directionalShadowMatrix.value=E.state.directionalShadowMatrix,wt.spotShadowMap.value=E.state.spotShadowMap,wt.spotLightMatrix.value=E.state.spotLightMatrix,wt.spotLightMap.value=E.state.spotLightMap,wt.pointShadowMap.value=E.state.pointShadowMap,wt.pointShadowMatrix.value=E.state.pointShadowMatrix),I.currentProgram=At,I.uniformsList=null,At}function kt(x){if(x.uniformsList===null){const y=x.currentProgram.getUniforms();x.uniformsList=bl.seqWithValue(y.seq,x.uniforms)}return x.uniformsList}function ve(x,y){const _=at.get(x);_.outputColorSpace=y.outputColorSpace,_.batching=y.batching,_.batchingColor=y.batchingColor,_.instancing=y.instancing,_.instancingColor=y.instancingColor,_.instancingMorph=y.instancingMorph,_.skinning=y.skinning,_.morphTargets=y.morphTargets,_.morphNormals=y.morphNormals,_.morphColors=y.morphColors,_.morphTargetsCount=y.morphTargetsCount,_.numClippingPlanes=y.numClippingPlanes,_.numIntersection=y.numClipIntersection,_.vertexAlphas=y.vertexAlphas,_.vertexTangents=y.vertexTangents,_.toneMapping=y.toneMapping}function _e(x,y,_,I,E){y.isScene!==!0&&(y=oe),A.resetTextureUnits();const k=y.fog,H=I.isMeshStandardMaterial?y.environment:null,ot=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ro,ct=(I.isMeshStandardMaterial?G:w).get(I.envMap||H),xt=I.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,At=!!_.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),wt=!!_.morphAttributes.position,me=!!_.morphAttributes.normal,ge=!!_.morphAttributes.color;let Nt=Ls;I.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Nt=S.toneMapping);const Ht=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,Xt=at.get(I),Me=p.state.lights;if(ht===!0&&(Kt===!0||x!==C)){const yn=x===C&&I.id===M;U.setState(I,x,yn)}let re=!1;I.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Me.state.version||Xt.outputColorSpace!==ot||E.isBatchedMesh&&Xt.batching===!1||!E.isBatchedMesh&&Xt.batching===!0||E.isBatchedMesh&&Xt.batchingColor===!0&&E.colorTexture===null||E.isBatchedMesh&&Xt.batchingColor===!1&&E.colorTexture!==null||E.isInstancedMesh&&Xt.instancing===!1||!E.isInstancedMesh&&Xt.instancing===!0||E.isSkinnedMesh&&Xt.skinning===!1||!E.isSkinnedMesh&&Xt.skinning===!0||E.isInstancedMesh&&Xt.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Xt.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Xt.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Xt.instancingMorph===!1&&E.morphTexture!==null||Xt.envMap!==ct||I.fog===!0&&Xt.fog!==k||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==U.numPlanes||Xt.numIntersection!==U.numIntersection)||Xt.vertexAlphas!==xt||Xt.vertexTangents!==At||Xt.morphTargets!==wt||Xt.morphNormals!==me||Xt.morphColors!==ge||Xt.toneMapping!==Nt||Xt.morphTargetsCount!==Gt)&&(re=!0):(re=!0,Xt.__version=I.version);let we=Xt.currentProgram;re===!0&&(we=Ft(I,y,E));let fe=!1,pe=!1,De=!1;const Ce=we.getUniforms(),en=Xt.uniforms;if(Wt.useProgram(we.program)&&(fe=!0,pe=!0,De=!0),I.id!==M&&(M=I.id,pe=!0),fe||C!==x){Wt.buffers.depth.getReversed()?(Bt.copy(x.projectionMatrix),Rm(Bt),Pm(Bt),Ce.setValue(V,"projectionMatrix",Bt)):Ce.setValue(V,"projectionMatrix",x.projectionMatrix),Ce.setValue(V,"viewMatrix",x.matrixWorldInverse);const Ln=Ce.map.cameraPosition;Ln!==void 0&&Ln.setValue(V,xe.setFromMatrixPosition(x.matrixWorld)),te.logarithmicDepthBuffer&&Ce.setValue(V,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ce.setValue(V,"isOrthographic",x.isOrthographicCamera===!0),C!==x&&(C=x,pe=!0,De=!0)}if(E.isSkinnedMesh){Ce.setOptional(V,E,"bindMatrix"),Ce.setOptional(V,E,"bindMatrixInverse");const yn=E.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ce.setValue(V,"boneTexture",yn.boneTexture,A))}E.isBatchedMesh&&(Ce.setOptional(V,E,"batchingTexture"),Ce.setValue(V,"batchingTexture",E._matricesTexture,A),Ce.setOptional(V,E,"batchingIdTexture"),Ce.setValue(V,"batchingIdTexture",E._indirectTexture,A),Ce.setOptional(V,E,"batchingColorTexture"),E._colorsTexture!==null&&Ce.setValue(V,"batchingColorTexture",E._colorsTexture,A));const Xn=_.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&yt.update(E,_,we),(pe||Xt.receiveShadow!==E.receiveShadow)&&(Xt.receiveShadow=E.receiveShadow,Ce.setValue(V,"receiveShadow",E.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(en.envMap.value=ct,en.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&y.environment!==null&&(en.envMapIntensity.value=y.environmentIntensity),pe&&(Ce.setValue(V,"toneMappingExposure",S.toneMappingExposure),Xt.needsLights&&qt(en,De),k&&I.fog===!0&&it.refreshFogUniforms(en,k),it.refreshMaterialUniforms(en,I,nt,gt,p.state.transmissionRenderTarget[x.id]),bl.upload(V,kt(Xt),en,A)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(bl.upload(V,kt(Xt),en,A),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ce.setValue(V,"center",E.center),Ce.setValue(V,"modelViewMatrix",E.modelViewMatrix),Ce.setValue(V,"normalMatrix",E.normalMatrix),Ce.setValue(V,"modelMatrix",E.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const yn=I.uniformsGroups;for(let Ln=0,Yt=yn.length;Ln<Yt;Ln++){const ae=yn[Ln];D.update(ae,we),D.bind(ae,we)}}return we}function qt(x,y){x.ambientLightColor.needsUpdate=y,x.lightProbe.needsUpdate=y,x.directionalLights.needsUpdate=y,x.directionalLightShadows.needsUpdate=y,x.pointLights.needsUpdate=y,x.pointLightShadows.needsUpdate=y,x.spotLights.needsUpdate=y,x.spotLightShadows.needsUpdate=y,x.rectAreaLights.needsUpdate=y,x.hemisphereLights.needsUpdate=y}function L(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(x,y,_){at.get(x.texture).__webglTexture=y,at.get(x.depthTexture).__webglTexture=_;const I=at.get(x);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=_===void 0,I.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,y){const _=at.get(x);_.__webglFramebuffer=y,_.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(x,y=0,_=0){B=x,O=y,R=_;let I=!0,E=null,k=!1,H=!1;if(x){const ct=at.get(x);if(ct.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(V.FRAMEBUFFER,null),I=!1;else if(ct.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(ct.__hasExternalTextures)A.rebindTextures(x,at.get(x.texture).__webglTexture,at.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(ct.__boundDepthTexture!==wt){if(wt!==null&&at.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const xt=x.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(H=!0);const At=at.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(At[y])?E=At[y][_]:E=At[y],k=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?E=at.get(x).__webglMultisampledFramebuffer:Array.isArray(At)?E=At[_]:E=At,N.copy(x.viewport),$.copy(x.scissor),et=x.scissorTest}else N.copy(Qt).multiplyScalar(nt).floor(),$.copy(se).multiplyScalar(nt).floor(),et=Ee;if(Wt.bindFramebuffer(V.FRAMEBUFFER,E)&&I&&Wt.drawBuffers(x,E),Wt.viewport(N),Wt.scissor($),Wt.setScissorTest(et),k){const ct=at.get(x.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+y,ct.__webglTexture,_)}else if(H){const ct=at.get(x.texture),xt=y||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,ct.__webglTexture,_||0,xt)}M=-1},this.readRenderTargetPixels=function(x,y,_,I,E,k,H){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=at.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&H!==void 0&&(ot=ot[H]),ot){Wt.bindFramebuffer(V.FRAMEBUFFER,ot);try{const ct=x.texture,xt=ct.format,At=ct.type;if(!te.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=x.width-I&&_>=0&&_<=x.height-E&&V.readPixels(y,_,I,E,St.convert(xt),St.convert(At),k)}finally{const ct=B!==null?at.get(B).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(x,y,_,I,E,k,H){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ot=at.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&H!==void 0&&(ot=ot[H]),ot){const ct=x.texture,xt=ct.format,At=ct.type;if(!te.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(y>=0&&y<=x.width-I&&_>=0&&_<=x.height-E){Wt.bindFramebuffer(V.FRAMEBUFFER,ot);const wt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,wt),V.bufferData(V.PIXEL_PACK_BUFFER,k.byteLength,V.STREAM_READ),V.readPixels(y,_,I,E,St.convert(xt),St.convert(At),0);const me=B!==null?at.get(B).__webglFramebuffer:null;Wt.bindFramebuffer(V.FRAMEBUFFER,me);const ge=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Cm(V,ge,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,wt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,k),V.deleteBuffer(wt),V.deleteSync(ge),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,y=null,_=0){x.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),y=arguments[0]||null,x=arguments[1]);const I=Math.pow(2,-_),E=Math.floor(x.image.width*I),k=Math.floor(x.image.height*I),H=y!==null?y.x:0,ot=y!==null?y.y:0;A.setTexture2D(x,0),V.copyTexSubImage2D(V.TEXTURE_2D,_,0,0,H,ot,E,k),Wt.unbindTexture()},this.copyTextureToTexture=function(x,y,_=null,I=null,E=0){x.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,x=arguments[1],y=arguments[2],E=arguments[3]||0,_=null);let k,H,ot,ct,xt,At,wt,me,ge;const Nt=x.isCompressedTexture?x.mipmaps[E]:x.image;_!==null?(k=_.max.x-_.min.x,H=_.max.y-_.min.y,ot=_.isBox3?_.max.z-_.min.z:1,ct=_.min.x,xt=_.min.y,At=_.isBox3?_.min.z:0):(k=Nt.width,H=Nt.height,ot=Nt.depth||1,ct=0,xt=0,At=0),I!==null?(wt=I.x,me=I.y,ge=I.z):(wt=0,me=0,ge=0);const Ht=St.convert(y.format),Gt=St.convert(y.type);let Xt;y.isData3DTexture?(A.setTexture3D(y,0),Xt=V.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(A.setTexture2DArray(y,0),Xt=V.TEXTURE_2D_ARRAY):(A.setTexture2D(y,0),Xt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,y.unpackAlignment);const Me=V.getParameter(V.UNPACK_ROW_LENGTH),re=V.getParameter(V.UNPACK_IMAGE_HEIGHT),we=V.getParameter(V.UNPACK_SKIP_PIXELS),fe=V.getParameter(V.UNPACK_SKIP_ROWS),pe=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ct),V.pixelStorei(V.UNPACK_SKIP_ROWS,xt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,At);const De=x.isDataArrayTexture||x.isData3DTexture,Ce=y.isDataArrayTexture||y.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const en=at.get(x),Xn=at.get(y),yn=at.get(en.__renderTarget),Ln=at.get(Xn.__renderTarget);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,yn.__webglFramebuffer),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Yt=0;Yt<ot;Yt++)De&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.get(x).__webglTexture,E,At+Yt),x.isDepthTexture?(Ce&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.get(y).__webglTexture,E,ge+Yt),V.blitFramebuffer(ct,xt,k,H,wt,me,k,H,V.DEPTH_BUFFER_BIT,V.NEAREST)):Ce?V.copyTexSubImage3D(Xt,E,wt,me,ge+Yt,ct,xt,k,H):V.copyTexSubImage2D(Xt,E,wt,me,ge+Yt,ct,xt,k,H);Wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ce?x.isDataTexture||x.isData3DTexture?V.texSubImage3D(Xt,E,wt,me,ge,k,H,ot,Ht,Gt,Nt.data):y.isCompressedArrayTexture?V.compressedTexSubImage3D(Xt,E,wt,me,ge,k,H,ot,Ht,Nt.data):V.texSubImage3D(Xt,E,wt,me,ge,k,H,ot,Ht,Gt,Nt):x.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,E,wt,me,k,H,Ht,Gt,Nt.data):x.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,E,wt,me,Nt.width,Nt.height,Ht,Nt.data):V.texSubImage2D(V.TEXTURE_2D,E,wt,me,k,H,Ht,Gt,Nt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Me),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,re),V.pixelStorei(V.UNPACK_SKIP_PIXELS,we),V.pixelStorei(V.UNPACK_SKIP_ROWS,fe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pe),E===0&&y.generateMipmaps&&V.generateMipmap(Xt),Wt.unbindTexture()},this.copyTextureToTexture3D=function(x,y,_=null,I=null,E=0){return x.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_=arguments[0]||null,I=arguments[1]||null,x=arguments[2],y=arguments[3],E=arguments[4]||0),Zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,y,_,I,E)},this.initRenderTarget=function(x){at.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),Wt.unbindTexture()},this.resetState=function(){O=0,R=0,B=null,Wt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=He._getDrawingBufferColorSpace(t),e.unpackColorSpace=He._getUnpackColorSpace()}}class bu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new bu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ca extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class z_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new P;class Nl{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyMatrix4(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyNormalMatrix(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.transformDirection(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),n=Qe(n,this.array),s=Qe(s,this.array),o=Qe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Nl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class aa extends Ar{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vr;const ko=new P,Wr=new P,Xr=new P,qr=new Dt,Ho=new Dt,Ad=new Ie,Qa=new P,Go=new P,tl=new P,Of=new Dt,Nc=new Dt,Bf=new Dt;class Sl extends ln{constructor(t=new aa){if(super(),this.isSprite=!0,this.type="Sprite",Vr===void 0){Vr=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new z_(e,5);Vr.setIndex([0,1,2,0,2,3]),Vr.setAttribute("position",new Nl(n,3,0,!1)),Vr.setAttribute("uv",new Nl(n,2,3,!1))}this.geometry=Vr,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wr.setFromMatrixScale(this.matrixWorld),Ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wr.multiplyScalar(-Xr.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const a=this.center;el(Qa.set(-.5,-.5,0),Xr,a,Wr,s,o),el(Go.set(.5,-.5,0),Xr,a,Wr,s,o),el(tl.set(.5,.5,0),Xr,a,Wr,s,o),Of.set(0,0),Nc.set(1,0),Bf.set(1,1);let l=t.ray.intersectTriangle(Qa,Go,tl,!1,ko);if(l===null&&(el(Go.set(-.5,.5,0),Xr,a,Wr,s,o),Nc.set(0,1),l=t.ray.intersectTriangle(Qa,tl,Go,!1,ko),l===null))return;const c=t.ray.origin.distanceTo(ko);c<t.near||c>t.far||e.push({distance:c,point:ko.clone(),uv:Di.getInterpolation(ko,Qa,Go,tl,Of,Nc,Bf,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function el(i,t,e,n,s,o){qr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ho.x=o*qr.x-s*qr.y,Ho.y=s*qr.x+o*qr.y):Ho.copy(qr),i.copy(t),i.x+=Ho.x,i.y+=Ho.y,i.applyMatrix4(Ad)}class Su extends Jn{constructor(t=null,e=1,n=1,s,o,a,l,c,h=ri,r=ri,u,f){super(null,a,l,c,h,r,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os extends Pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yr=new Ie,kf=new Ie,nl=[],Hf=new Er,O_=new Ie,Vo=new ue,Wo=new Lo;class qh extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yr),Hf.copy(t.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Hf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yr),Wo.copy(t.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Wo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=t*o+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),t.ray.intersectsSphere(Wo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Yr),kf.multiplyMatrices(n,Yr),Vo.matrixWorld=kf,Vo.raycast(t,nl);for(let a=0,l=nl.length;a<l;a++){const c=nl[a];c.instanceId=o,c.object=this,e.push(c)}nl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Su(new Float32Array(s*this.count),s,this.count,pu,rs));const o=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;o[c]=l,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cd extends Ar{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gf=new Ie,Yh=new ud,il=new Lo,sl=new P;class B_ extends ln{constructor(t=new Ke,e=new Cd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),il.radius+=o,t.ray.intersectsSphere(il)===!1)return;Gf.copy(s).invert(),Yh.copy(t.ray).applyMatrix4(Gf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,v=d;g<v;g++){const m=h.getX(g);sl.fromBufferAttribute(u,m),Vf(sl,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,v=d;g<v;g++)sl.fromBufferAttribute(u,g),Vf(sl,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Vf(i,t,e,n,s,o,a){const l=Yh.distanceSqToPoint(i);if(l<e){const c=new P;Yh.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Jl extends Jn{constructor(t,e,n,s,o,a,l,c,h){super(t,e,n,s,o,a,l,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let l=0,c=o-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(o-1);const r=n[s],f=n[s+1]-r,d=(a-r)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),l=this.getPoint(o),c=e||(a.isVector2?new Dt:new P);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],o=[],a=[],l=new P,c=new Ie;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,a[0]=new P;let h=Number.MAX_VALUE;const r=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);r<=h&&(h=r,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],l),a[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),a[d]=a[d-1].clone(),l.crossVectors(s[d-1],s[d]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(Un(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(l,g))}a[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Un(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(l.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wu extends fs{constructor(t=0,e=0,n=1,s=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new Dt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const l=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const r=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*r-d*u+this.aX,h=f*u+d*r+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class k_ extends wu{constructor(t,e,n,s,o,a){super(t,e,n,n,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Tu(){let i=0,t=0,e=0,n=0;function s(o,a,l,c){i=o,t=l,e=-3*o+3*a-2*l-c,n=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,h){s(a,l,h*(l-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,h,r,u){let f=(a-o)/h-(l-o)/(h+r)+(l-a)/r,d=(l-a)/r-(c-a)/(r+u)+(c-l)/u;f*=r,d*=r,s(a,l,f,d)},calc:function(o){const a=o*o,l=a*o;return i+t*o+e*a+n*l}}}const rl=new P,zc=new Tu,Oc=new Tu,Bc=new Tu;class wl extends fs{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let h,r;this.closed||l>0?h=s[(l-1)%o]:(rl.subVectors(s[0],s[1]).add(s[0]),h=rl);const u=s[l%o],f=s[(l+1)%o];if(this.closed||l+2<o?r=s[(l+2)%o]:(rl.subVectors(s[o-1],s[o-2]).add(s[o-1]),r=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(r),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),zc.initNonuniformCatmullRom(h.x,u.x,f.x,r.x,g,v,m),Oc.initNonuniformCatmullRom(h.y,u.y,f.y,r.y,g,v,m),Bc.initNonuniformCatmullRom(h.z,u.z,f.z,r.z,g,v,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(h.x,u.x,f.x,r.x,this.tension),Oc.initCatmullRom(h.y,u.y,f.y,r.y,this.tension),Bc.initCatmullRom(h.z,u.z,f.z,r.z,this.tension));return n.set(zc.calc(c),Oc.calc(c),Bc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wf(i,t,e,n,s){const o=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+o+a)*c+(-3*e+3*n-2*o-a)*l+o*i+e}function H_(i,t){const e=1-i;return e*e*t}function G_(i,t){return 2*(1-i)*i*t}function V_(i,t){return i*i*t}function la(i,t,e,n){return H_(i,t)+G_(i,e)+V_(i,n)}function W_(i,t){const e=1-i;return e*e*e*t}function X_(i,t){const e=1-i;return 3*e*e*i*t}function q_(i,t){return 3*(1-i)*i*i*t}function Y_(i,t){return i*i*i*t}function ca(i,t,e,n,s){return W_(i,t)+X_(i,e)+q_(i,n)+Y_(i,s)}class Rd extends fs{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){const n=e,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return n.set(ca(t,s.x,o.x,a.x,l.x),ca(t,s.y,o.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $_ extends fs{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return n.set(ca(t,s.x,o.x,a.x,l.x),ca(t,s.y,o.y,a.y,l.y),ca(t,s.z,o.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pd extends fs{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends fs{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ld extends fs{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(la(t,s.x,o.x,a.x),la(t,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends fs{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,a=this.v2;return n.set(la(t,s.x,o.x,a.x),la(t,s.y,o.y,a.y),la(t,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Id extends fs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,s=this.points,o=(s.length-1)*t,a=Math.floor(o),l=o-a,c=s[a===0?a:a-1],h=s[a],r=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Wf(l,c.x,h.x,r.x,u.x),Wf(l,c.y,h.y,r.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:k_,CatmullRomCurve3:wl,CubicBezierCurve:Rd,CubicBezierCurve3:$_,EllipseCurve:wu,LineCurve:Pd,LineCurve3:K_,QuadraticBezierCurve:Ld,QuadraticBezierCurve3:Dd,SplineCurve:Id});class j_ extends fs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const a=s[o]-n,l=this.curves[o],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){const r=c[h];n&&n.equals(r)||(e.push(r),n=r)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new zl[s.type]().fromJSON(s))}return this}}class Xf extends j_{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pd(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Ld(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,a){const l=new Rd(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(o,a));return this.curves.push(l),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Id(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,o,a),this}absarc(t,e,n,s,o,a){return this.absellipse(t,e,n,n,s,o,a),this}ellipse(t,e,n,s,o,a,l,c){const h=this.currentPoint.x,r=this.currentPoint.y;return this.absellipse(t+h,e+r,n,s,o,a,l,c),this}absellipse(t,e,n,s,o,a,l,c){const h=new wu(t,e,n,s,o,a,l,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const r=h.getPoint(1);return this.currentPoint.copy(r),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Ke{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Un(s,0,Math.PI*2);const o=[],a=[],l=[],c=[],h=[],r=1/e,u=new P,f=new Dt,d=new P,g=new P,v=new P;let m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){const T=n+b*r*s,S=Math.sin(T),F=Math.cos(T);for(let O=0;O<=t.length-1;O++){u.x=t[O].x*S,u.y=t[O].y,u.z=t[O].x*F,a.push(u.x,u.y,u.z),f.x=b/e,f.y=O/(t.length-1),l.push(f.x,f.y);const R=c[3*O+0]*S,B=c[3*O+1],M=c[3*O+0]*F;h.push(R,B,M)}}for(let b=0;b<e;b++)for(let T=0;T<t.length-1;T++){const S=T+b*t.length,F=S,O=S+t.length,R=S+t.length+1,B=S+1;o.push(F,O,B),o.push(R,B,O)}this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(l,2)),this.setAttribute("normal",new Se(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.points,t.segments,t.phiStart,t.phiLength)}}class as extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],a=[],l=[],c=[],h=new P,r=new Dt;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),l.push(0,0,1),r.x=(a[f]/t+1)/2,r.y=(a[f+1]/t+1)/2,c.push(r.x,r.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tn extends Ke{constructor(t=1,e=1,n=1,s=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};const h=this;s=Math.floor(s),o=Math.floor(o);const r=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;b(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(r),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function b(){const S=new P,F=new P;let O=0;const R=(e-t)/n;for(let B=0;B<=o;B++){const M=[],C=B/o,N=C*(e-t)+t;for(let $=0;$<=s;$++){const et=$/s,pt=et*c+l,Mt=Math.sin(pt),lt=Math.cos(pt);F.x=N*Mt,F.y=-C*n+m,F.z=N*lt,u.push(F.x,F.y,F.z),S.set(Mt,R,lt).normalize(),f.push(S.x,S.y,S.z),d.push(et,1-C),M.push(g++)}v.push(M)}for(let B=0;B<s;B++)for(let M=0;M<o;M++){const C=v[M][B],N=v[M+1][B],$=v[M+1][B+1],et=v[M][B+1];(t>0||M!==0)&&(r.push(C,N,et),O+=3),(e>0||M!==o-1)&&(r.push(N,$,et),O+=3)}h.addGroup(p,O,0),p+=O}function T(S){const F=g,O=new Dt,R=new P;let B=0;const M=S===!0?t:e,C=S===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),g++;const N=g;for(let $=0;$<=s;$++){const pt=$/s*c+l,Mt=Math.cos(pt),lt=Math.sin(pt);R.x=M*lt,R.y=m*C,R.z=M*Mt,u.push(R.x,R.y,R.z),f.push(0,C,0),O.x=Mt*.5+.5,O.y=lt*.5*C+.5,d.push(O.x,O.y),g++}for(let $=0;$<s;$++){const et=F+$,pt=N+$;S===!0?r.push(pt,pt+1,et):r.push(pt+1,pt,et),B+=3}h.addGroup(p,B,S===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vs extends Xf{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Xf().fromJSON(s))}return this}}const Z_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Ud(i,0,s,e,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,r,u,f,d;if(n&&(o=n2(i,t,o,e)),i.length>80*e){l=h=i[0],c=r=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<l&&(l=u),f<c&&(c=f),u>h&&(h=u),f>r&&(r=f);d=Math.max(h-l,r-c),d=d!==0?32767/d:0}return Ma(o,a,e,l,c,d,0),a}};function Ud(i,t,e,n,s){let o,a;if(s===d2(i,t,e,n)>0)for(o=t;o<e;o+=n)a=qf(o,i[o],i[o+1],a);else for(o=e-n;o>=t;o-=n)a=qf(o,i[o],i[o+1],a);return a&&Ql(a,a.next)&&(Sa(a),a=a.next),a}function wr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ql(e,e.next)||mn(e.prev,e,e.next)===0)){if(Sa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ma(i,t,e,n,s,o,a){if(!i)return;!a&&o&&a2(i,n,s,o);let l=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,o?Q_(i,n,s,o):J_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Sa(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=t2(wr(i),t,e),Ma(i,t,e,n,s,o,2)):a===2&&e2(i,t,e,n,s,o):Ma(wr(i),t,e,n,s,o,1);break}}}function J_(i){const t=i.prev,e=i,n=i.next;if(mn(t,e,n)>=0)return!1;const s=t.x,o=e.x,a=n.x,l=t.y,c=e.y,h=n.y,r=s<o?s<a?s:a:o<a?o:a,u=l<c?l<h?l:h:c<h?c:h,f=s>o?s>a?s:a:o>a?o:a,d=l>c?l>h?l:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=r&&g.x<=f&&g.y>=u&&g.y<=d&&Zr(s,l,o,c,a,h,g.x,g.y)&&mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q_(i,t,e,n){const s=i.prev,o=i,a=i.next;if(mn(s,o,a)>=0)return!1;const l=s.x,c=o.x,h=a.x,r=s.y,u=o.y,f=a.y,d=l<c?l<h?l:h:c<h?c:h,g=r<u?r<f?r:f:u<f?u:f,v=l>c?l>h?l:h:c>h?c:h,m=r>u?r>f?r:f:u>f?u:f,p=$h(d,g,t,e,n),b=$h(v,m,t,e,n);let T=i.prevZ,S=i.nextZ;for(;T&&T.z>=p&&S&&S.z<=b;){if(T.x>=d&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Zr(l,r,c,u,h,f,T.x,T.y)&&mn(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Zr(l,r,c,u,h,f,S.x,S.y)&&mn(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=v&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&Zr(l,r,c,u,h,f,T.x,T.y)&&mn(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Zr(l,r,c,u,h,f,S.x,S.y)&&mn(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function t2(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Ql(s,o)&&Fd(s,n,n.next,o)&&ba(s,o)&&ba(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Sa(n),Sa(n.next),n=i=o),n=n.next}while(n!==i);return wr(n)}function e2(i,t,e,n,s,o){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&h2(a,l)){let c=Nd(a,l);a=wr(a,a.next),c=wr(c,c.next),Ma(a,t,e,n,s,o,0),Ma(c,t,e,n,s,o,0);return}l=l.next}a=a.next}while(a!==i)}function n2(i,t,e,n){const s=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;o++)l=t[o]*n,c=o<a-1?t[o+1]*n:i.length,h=Ud(i,l,c,n,!1),h===h.next&&(h.steiner=!0),s.push(c2(h));for(s.sort(i2),o=0;o<s.length;o++)e=s2(s[o],e);return e}function i2(i,t){return i.x-t.x}function s2(i,t){const e=r2(i,t);if(!e)return t;const n=Nd(e,i);return wr(n,n.next),wr(e,e.next)}function r2(i,t){let e=t,n=-1/0,s;const o=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const l=s,c=s.x,h=s.y;let r=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Zr(a<h?o:n,a,c,h,a<h?n:o,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(o-e.x),ba(e,i)&&(u<r||u===r&&(e.x>s.x||e.x===s.x&&o2(s,e)))&&(s=e,r=u)),e=e.next;while(e!==l);return s}function o2(i,t){return mn(i.prev,i,t.prev)<0&&mn(t.next,i,i.next)<0}function a2(i,t,e,n){let s=i;do s.z===0&&(s.z=$h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,l2(s)}function l2(i){let t,e,n,s,o,a,l,c,h=1;do{for(e=i,i=null,o=null,a=0;e;){for(a++,n=e,l=0,t=0;t<h&&(l++,n=n.nextZ,!!n);t++);for(c=h;l>0||c>0&&n;)l!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,l--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,h*=2}while(a>1);return i}function $h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function c2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zr(i,t,e,n,s,o,a,l){return(s-a)*(t-l)>=(i-a)*(o-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(o-l)>=(s-a)*(n-l)}function h2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!u2(i,t)&&(ba(i,t)&&ba(t,i)&&f2(i,t)&&(mn(i.prev,i,t.prev)||mn(i,t.prev,t))||Ql(i,t)&&mn(i.prev,i,i.next)>0&&mn(t.prev,t,t.next)>0)}function mn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ql(i,t){return i.x===t.x&&i.y===t.y}function Fd(i,t,e,n){const s=al(mn(i,t,e)),o=al(mn(i,t,n)),a=al(mn(e,n,i)),l=al(mn(e,n,t));return!!(s!==o&&a!==l||s===0&&ol(i,e,t)||o===0&&ol(i,n,t)||a===0&&ol(e,i,n)||l===0&&ol(e,t,n))}function ol(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function al(i){return i>0?1:i<0?-1:0}function u2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ba(i,t){return mn(i.prev,i,i.next)<0?mn(i,t,i.next)>=0&&mn(i,i.prev,t)>=0:mn(i,t,i.prev)<0||mn(i,i.next,t)<0}function f2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nd(i,t){const e=new Kh(i.i,i.x,i.y),n=new Kh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function qf(i,t,e,n){const s=new Kh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d2(i,t,e,n){let s=0;for(let o=t,a=e-n;o<e;o+=n)s+=(i[a]-i[o])*(i[o+1]+i[a+1]),a=o;return s}class Ks{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Yf(t),$f(n,t);let a=t.length;e.forEach(Yf);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,$f(n,e[c]);const l=Z_.triangulate(n,s);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function Yf(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $f(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ha extends Ke{constructor(t=new Vs([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];a(h)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(o,2)),this.computeVertexNormals();function a(l){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,r=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:p2;let T,S=!1,F,O,R,B;p&&(T=p.getSpacedPoints(r),S=!0,f=!1,F=p.computeFrenetFrames(r,!1),O=new P,R=new P,B=new P),f||(m=0,d=0,g=0,v=0);const M=l.extractPoints(h);let C=M.shape;const N=M.holes;if(!Ks.isClockWise(C)){C=C.reverse();for(let Tt=0,zt=N.length;Tt<zt;Tt++){const V=N[Tt];Ks.isClockWise(V)&&(N[Tt]=V.reverse())}}const et=Ks.triangulateShape(C,N),pt=C;for(let Tt=0,zt=N.length;Tt<zt;Tt++){const V=N[Tt];C=C.concat(V)}function Mt(Tt,zt,V){return zt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Tt.clone().addScaledVector(zt,V)}const lt=C.length,gt=et.length;function nt(Tt,zt,V){let jt,It,te;const Wt=Tt.x-zt.x,tt=Tt.y-zt.y,at=V.x-Tt.x,A=V.y-Tt.y,w=Wt*Wt+tt*tt,G=Wt*A-tt*at;if(Math.abs(G)>Number.EPSILON){const q=Math.sqrt(w),K=Math.sqrt(at*at+A*A),W=zt.x-tt/q,rt=zt.y+Wt/q,it=V.x-A/K,J=V.y+at/K,ut=((it-W)*A-(J-rt)*at)/(Wt*A-tt*at);jt=W+Wt*ut-Tt.x,It=rt+tt*ut-Tt.y;const U=jt*jt+It*It;if(U<=2)return new Dt(jt,It);te=Math.sqrt(U/2)}else{let q=!1;Wt>Number.EPSILON?at>Number.EPSILON&&(q=!0):Wt<-Number.EPSILON?at<-Number.EPSILON&&(q=!0):Math.sign(tt)===Math.sign(A)&&(q=!0),q?(jt=-tt,It=Wt,te=Math.sqrt(w)):(jt=Wt,It=tt,te=Math.sqrt(w/2))}return new Dt(jt/te,It/te)}const Ct=[];for(let Tt=0,zt=pt.length,V=zt-1,jt=Tt+1;Tt<zt;Tt++,V++,jt++)V===zt&&(V=0),jt===zt&&(jt=0),Ct[Tt]=nt(pt[Tt],pt[V],pt[jt]);const $t=[];let Qt,se=Ct.concat();for(let Tt=0,zt=N.length;Tt<zt;Tt++){const V=N[Tt];Qt=[];for(let jt=0,It=V.length,te=It-1,Wt=jt+1;jt<It;jt++,te++,Wt++)te===It&&(te=0),Wt===It&&(Wt=0),Qt[jt]=nt(V[jt],V[te],V[Wt]);$t.push(Qt),se=se.concat(Qt)}for(let Tt=0;Tt<m;Tt++){const zt=Tt/m,V=d*Math.cos(zt*Math.PI/2),jt=g*Math.sin(zt*Math.PI/2)+v;for(let It=0,te=pt.length;It<te;It++){const Wt=Mt(pt[It],Ct[It],jt);Bt(Wt.x,Wt.y,-V)}for(let It=0,te=N.length;It<te;It++){const Wt=N[It];Qt=$t[It];for(let tt=0,at=Wt.length;tt<at;tt++){const A=Mt(Wt[tt],Qt[tt],jt);Bt(A.x,A.y,-V)}}}const Ee=g+v;for(let Tt=0;Tt<lt;Tt++){const zt=f?Mt(C[Tt],se[Tt],Ee):C[Tt];S?(R.copy(F.normals[0]).multiplyScalar(zt.x),O.copy(F.binormals[0]).multiplyScalar(zt.y),B.copy(T[0]).add(R).add(O),Bt(B.x,B.y,B.z)):Bt(zt.x,zt.y,0)}for(let Tt=1;Tt<=r;Tt++)for(let zt=0;zt<lt;zt++){const V=f?Mt(C[zt],se[zt],Ee):C[zt];S?(R.copy(F.normals[Tt]).multiplyScalar(V.x),O.copy(F.binormals[Tt]).multiplyScalar(V.y),B.copy(T[Tt]).add(R).add(O),Bt(B.x,B.y,B.z)):Bt(V.x,V.y,u/r*Tt)}for(let Tt=m-1;Tt>=0;Tt--){const zt=Tt/m,V=d*Math.cos(zt*Math.PI/2),jt=g*Math.sin(zt*Math.PI/2)+v;for(let It=0,te=pt.length;It<te;It++){const Wt=Mt(pt[It],Ct[It],jt);Bt(Wt.x,Wt.y,u+V)}for(let It=0,te=N.length;It<te;It++){const Wt=N[It];Qt=$t[It];for(let tt=0,at=Wt.length;tt<at;tt++){const A=Mt(Wt[tt],Qt[tt],jt);S?Bt(A.x,A.y+T[r-1].y,T[r-1].x+V):Bt(A.x,A.y,u+V)}}}mt(),ht();function mt(){const Tt=s.length/3;if(f){let zt=0,V=lt*zt;for(let jt=0;jt<gt;jt++){const It=et[jt];Jt(It[2]+V,It[1]+V,It[0]+V)}zt=r+m*2,V=lt*zt;for(let jt=0;jt<gt;jt++){const It=et[jt];Jt(It[0]+V,It[1]+V,It[2]+V)}}else{for(let zt=0;zt<gt;zt++){const V=et[zt];Jt(V[2],V[1],V[0])}for(let zt=0;zt<gt;zt++){const V=et[zt];Jt(V[0]+lt*r,V[1]+lt*r,V[2]+lt*r)}}n.addGroup(Tt,s.length/3-Tt,0)}function ht(){const Tt=s.length/3;let zt=0;Kt(pt,zt),zt+=pt.length;for(let V=0,jt=N.length;V<jt;V++){const It=N[V];Kt(It,zt),zt+=It.length}n.addGroup(Tt,s.length/3-Tt,1)}function Kt(Tt,zt){let V=Tt.length;for(;--V>=0;){const jt=V;let It=V-1;It<0&&(It=Tt.length-1);for(let te=0,Wt=r+m*2;te<Wt;te++){const tt=lt*te,at=lt*(te+1),A=zt+jt+tt,w=zt+It+tt,G=zt+It+at,q=zt+jt+at;xe(A,w,G,q)}}}function Bt(Tt,zt,V){c.push(Tt),c.push(zt),c.push(V)}function Jt(Tt,zt,V){le(Tt),le(zt),le(V);const jt=s.length/3,It=b.generateTopUV(n,s,jt-3,jt-2,jt-1);oe(It[0]),oe(It[1]),oe(It[2])}function xe(Tt,zt,V,jt){le(Tt),le(zt),le(jt),le(zt),le(V),le(jt);const It=s.length/3,te=b.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);oe(te[0]),oe(te[1]),oe(te[3]),oe(te[1]),oe(te[2]),oe(te[3])}function le(Tt){s.push(c[Tt*3+0]),s.push(c[Tt*3+1]),s.push(c[Tt*3+2])}function oe(Tt){o.push(Tt.x),o.push(Tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return m2(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const l=e[t.shapes[o]];n.push(l)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zl[s.type]().fromJSON(s)),new ha(n,t.options)}}const p2={generateTopUV:function(i,t,e,n,s){const o=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],r=t[s*3+1];return[new Dt(o,a),new Dt(l,c),new Dt(h,r)]},generateSideWallUV:function(i,t,e,n,s,o){const a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],r=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(l-r)<Math.abs(a-h)?[new Dt(a,1-c),new Dt(h,1-u),new Dt(f,1-g),new Dt(v,1-p)]:[new Dt(l,1-c),new Dt(r,1-u),new Dt(d,1-g),new Dt(m,1-p)]}};function m2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Io extends Ke{constructor(t=.5,e=1,n=32,s=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const l=[],c=[],h=[],r=[];let u=t;const f=(e-t)/s,d=new P,g=new Dt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=o+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,r.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const b=p+m,T=b,S=b+n+1,F=b+n+2,O=b+1;l.push(T,S,O),l.push(S,F,O)}}this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(r,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ua extends Ke{constructor(t=new Vs([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],a=[];let l=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let r=0;r<t.length;r++)h(t[r]),this.addGroup(l,c,r),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(a,2));function h(r){const u=s.length/3,f=r.extractPoints(e);let d=f.shape;const g=f.holes;Ks.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const b=g[m];Ks.isClockWise(b)===!0&&(g[m]=b.reverse())}const v=Ks.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){const b=d[m];s.push(b.x,b.y,0),o.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=v.length;m<p;m++){const b=v[m],T=b[0]+u,S=b[1]+u,F=b[2]+u;n.push(T,S,F),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return g2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}return new ua(n,t.curveSegments)}}function g2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Mo extends Ke{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let h=0;const r=[],u=new P,f=new P,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const b=[],T=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let F=0;F<=e;F++){const O=F/e;u.x=-t*Math.cos(s+O*o)*Math.sin(a+T*l),u.y=t*Math.cos(a+T*l),u.z=t*Math.sin(s+O*o)*Math.sin(a+T*l),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(O+S,1-T),b.push(h++)}r.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const T=r[p][b+1],S=r[p][b],F=r[p+1][b],O=r[p+1][b+1];(p!==0||a>0)&&d.push(T,S,O),(p!==n-1||c<Math.PI)&&d.push(S,F,O)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ts extends Ke{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],h=[],r=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*o,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),l.push(u.x,u.y,u.z),r.x=t*Math.cos(v),r.y=t*Math.sin(v),f.subVectors(u,r).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jr extends Ke{constructor(t=new Dd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new P,c=new P,h=new Dt;let r=new P;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function v(){for(let T=0;T<e;T++)m(T);m(o===!1?e:0),b(),p()}function m(T){r=t.getPointAt(T/e,r);const S=a.normals[T],F=a.binormals[T];for(let O=0;O<=s;O++){const R=O/s*Math.PI*2,B=Math.sin(R),M=-Math.cos(R);c.x=M*S.x+B*F.x,c.y=M*S.y+B*F.y,c.z=M*S.z+B*F.z,c.normalize(),f.push(c.x,c.y,c.z),l.x=r.x+n*c.x,l.y=r.y+n*c.y,l.z=r.z+n*c.z,u.push(l.x,l.y,l.z)}}function p(){for(let T=1;T<=e;T++)for(let S=1;S<=s;S++){const F=(s+1)*(T-1)+(S-1),O=(s+1)*T+(S-1),R=(s+1)*T+S,B=(s+1)*(T-1)+S;g.push(F,O,B),g.push(O,R,B)}}function b(){for(let T=0;T<=e;T++)for(let S=0;S<=s;S++)h.x=T/e,h.y=S/s,d.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jr(new zl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class cn extends Ar{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ai extends cn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Un(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tc extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class v2 extends tc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kc=new Ie,Kf=new P,jf=new P;class Eu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _u,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kf),jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jf),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x2 extends Eu{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=_o*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class zd extends tc{constructor(t,e,n=0,s=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.distance=n,this.angle=s,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new x2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Zf=new Ie,Xo=new P,Hc=new P;class _2 extends Eu{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Xo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xo),Hc.copy(n.position),Hc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hc),n.updateMatrixWorld(),s.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Zf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zf)}}class Jf extends tc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class y2 extends Eu{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M2 extends tc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new y2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Od extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class b2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);class ec extends ue{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Zn;const n=this,s=e.color!==void 0?new Lt(e.color):new Lt(8355711),o=e.textureWidth||512,a=e.textureHeight||512,l=e.clipBias||0,c=e.shader||ec.ReflectorShader,h=e.multisample!==void 0?e.multisample:4,r=new Gs,u=new P,f=new P,d=new P,g=new Ie,v=new P(0,0,-1),m=new Xe,p=new P,b=new P,T=new Xe,S=new Ie,F=this.camera,O=new Ti(o,a,{samples:h,type:Ui}),R=new Ve({name:c.name!==void 0?c.name:"unspecified",uniforms:ji.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=O.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=S,this.material=R,this.onBeforeRender=function(B,M,C){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(C.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),g.extractRotation(C.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(d),b.subVectors(f,v),b.reflect(u).negate(),b.add(f),F.position.copy(p),F.up.set(0,1,0),F.up.applyMatrix4(g),F.up.reflect(u),F.lookAt(b),F.far=C.far,F.updateMatrixWorld(),F.projectionMatrix.copy(C.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(F.projectionMatrix),S.multiply(F.matrixWorldInverse),S.multiply(n.matrixWorld),r.setFromNormalAndCoplanarPoint(u,f),r.applyMatrix4(F.matrixWorldInverse),m.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const N=F.projectionMatrix;T.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],T.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],T.z=-1,T.w=(1+N.elements[10])/N.elements[14],m.multiplyScalar(2/m.dot(T)),N.elements[2]=m.x,N.elements[6]=m.y,N.elements[10]=m.z+1-l,N.elements[14]=m.w,n.visible=!1;const $=B.getRenderTarget(),et=B.xr.enabled,pt=B.shadowMap.autoUpdate;B.xr.enabled=!1,B.shadowMap.autoUpdate=!1,B.setRenderTarget(O),B.state.buffers.depth.setMask(!0),B.autoClear===!1&&B.clear(),B.render(M,F),B.xr.enabled=et,B.shadowMap.autoUpdate=pt,B.setRenderTarget($);const Mt=C.viewport;Mt!==void 0&&B.state.viewport(Mt),n.visible=!0},this.getRenderTarget=function(){return O},this.dispose=function(){O.dispose(),n.material.dispose()}}}ec.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Tl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},a={},l=i[0].morphTargetsRelative,c=new Ke;let h=0;for(let r=0;r<i.length;++r){const u=i[r];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,r),h+=d}}if(e){let r=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+r);r+=i[f].attributes.position.count}c.setIndex(u)}for(const r in o){const u=t0(o[r]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" attribute."),null;c.setAttribute(r,u)}for(const r in a){const u=a[r][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[r]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[r].length;++v)d.push(a[r][v][f]);const g=t0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" morphAttribute."),null;c.morphAttributes[r].push(g)}}return c}function t0(i){let t,e,n,s=-1,o=0;for(let h=0;h<i.length;++h){const r=i[h];if(t===void 0&&(t=r.array.constructor),t!==r.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=r.itemSize),e!==r.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=r.normalized),n!==r.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=r.gpuType),s!==r.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=r.count*e}const a=new t(o),l=new Pn(a,e,n);let c=0;for(let h=0;h<i.length;++h){const r=i[h];if(r.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=r.count;f<d;f++)for(let g=0;g<e;g++){const v=r.getComponent(f,g);l.setComponent(f+u,g,v)}}else a.set(r.array,c);c+=r.count*e}return s!==void 0&&(l.gpuType=s),l}function S2(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count;let a=0;const l=Object.keys(i.attributes),c={},h={},r=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,T=l.length;b<T;b++){const S=l[b],F=i.attributes[S];c[S]=new F.constructor(new F.array.constructor(F.count*F.itemSize),F.itemSize,F.normalized);const O=i.morphAttributes[S];O&&(h[S]||(h[S]=[]),O.forEach((R,B)=>{const M=new R.array.constructor(R.count*R.itemSize);h[S][B]=new R.constructor(M,R.itemSize,R.normalized)}))}const d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let b=0;b<o;b++){const T=n?n.getX(b):b;let S="";for(let F=0,O=l.length;F<O;F++){const R=l[F],B=i.getAttribute(R),M=B.itemSize;for(let C=0;C<M;C++)S+=`${~~(B[u[C]](T)*v+m)},`}if(S in e)r.push(e[S]);else{for(let F=0,O=l.length;F<O;F++){const R=l[F],B=i.getAttribute(R),M=i.morphAttributes[R],C=B.itemSize,N=c[R],$=h[R];for(let et=0;et<C;et++){const pt=u[et],Mt=f[et];if(N[Mt](a,B[pt](T)),M)for(let lt=0,gt=M.length;lt<gt;lt++)$[lt][Mt](a,M[lt][pt](T))}}e[S]=a,r.push(a),a++}}const p=i.clone();for(const b in i.attributes){const T=c[b];if(p.setAttribute(b,new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)),b in h)for(let S=0;S<h[b].length;S++){const F=h[b][S];p.morphAttributes[b][S]=new F.constructor(F.array.slice(0,a*F.itemSize),F.itemSize,F.normalized)}}return p.setIndex(r),p}function w2(i,t=Math.PI/3){const e=Math.cos(t),n=(1+1e-10)*100,s=[new P,new P,new P],o=new P,a=new P,l=new P,c=new P;function h(v){const m=~~(v.x*n),p=~~(v.y*n),b=~~(v.z*n);return`${m},${p},${b}`}const r=i.index?i.toNonIndexed():i,u=r.attributes.position,f={};for(let v=0,m=u.count/3;v<m;v++){const p=3*v,b=s[0].fromBufferAttribute(u,p+0),T=s[1].fromBufferAttribute(u,p+1),S=s[2].fromBufferAttribute(u,p+2);o.subVectors(S,T),a.subVectors(b,T);const F=new P().crossVectors(o,a).normalize();for(let O=0;O<3;O++){const R=s[O],B=h(R);B in f||(f[B]=[]),f[B].push(F)}}const d=new Float32Array(u.count*3),g=new Pn(d,3,!1);for(let v=0,m=u.count/3;v<m;v++){const p=3*v,b=s[0].fromBufferAttribute(u,p+0),T=s[1].fromBufferAttribute(u,p+1),S=s[2].fromBufferAttribute(u,p+2);o.subVectors(S,T),a.subVectors(b,T),l.crossVectors(o,a).normalize();for(let F=0;F<3;F++){const O=s[F],R=h(O),B=f[R];c.set(0,0,0);for(let M=0,C=B.length;M<C;M++){const N=B[M];l.dot(N)>e&&c.add(N)}c.normalize(),g.setXYZ(p+F,c.x,c.y,c.z)}}return r.setAttribute("normal",g),r}const Fi=59/136,rn=i=>i*Fi,oo=i=>i/Fi,pn=9.81,wa=2.23694,Bd=[{id:"intro",b0:0,b1:16},{id:"launch",b0:16,b1:48},{id:"reveal",b0:48,b1:56},{id:"flip",b0:56,b1:88},{id:"build",b0:88,b1:96},{id:"mega",b0:96,b1:128},{id:"outro",b0:128,b1:136}];function kd(i){const t=oo(i);for(const e of Bd)if(t<e.b1)return e.id;return"outro"}const be=(i,t,e)=>Math.max(t,Math.min(e,i)),un=i=>(i=be(i,0,1),i*i*(3-2*i)),li=(i,t)=>1-Math.exp(-i*t);function Ol(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function T2(i){const t=Math.floor(i),e=i-t,n=e*e*(3-2*e);return Ol(t)*(1-n)+Ol(t+1)*n}const Ms=i=>T2(i)*2-1,bn=Math.PI*2,ls=7.5,Ta=16,nc=.81,Hd=60/wa/nc,E2=Hd*(60/wa);function A2(i,t){return Math.min(Hd*t,E2*t/Math.max(.5,i))}function e0(i,t,e){const n=2.6*(t-i);return n>=0?Math.min(n,A2(i,e)):Math.max(n,-9.3195)}const us=2,$i=10,Gd=27.5,Au=1.3,Vd=.3,Wd=2;function Xd(i,t,e,n,s){t=Math.max(.05,t);const o=-Wd;if(e>=o)return i.burn?be(s*.95/n,0,1):0;const a=((e*e-o*o)/(2*t)+s)/n;return!i.burn&&a<.86?0:(i.burn=!0,be(a,0,1))}const C2=i=>us*i*i,jh=i=>2*us*i/$i;function qd(i,t){const e=C2(t),n=jh(t);return Math.sqrt(Math.max(1,i*i-2*pn*e))/Math.sqrt(1+n*n)}function R2(i){let t=0,e=0;const n=1/480;for(;t<$i&&e<3;)t+=qd(i,t/$i)*n,e+=n;return e}function P2(i){let t=us,e=i,n=0;const s={burn:!1},o=1/480;for(;n<8;){const a=e<0&&n-Vd>Au*.7?Xd(s,t,e,1.8*pn,pn):0;if(e+=(a*1.8*pn-pn)*o,t+=e*o,n+=o,t<=0&&e<0)break}return n}const ts=10,El=10,Qr=6,to=115*Math.PI/180,Bl=60,Qo=ts*Math.PI/2,Yd=Qr*(to-Math.PI/2),Al=Qo+El+Yd,Cl=ts;function bo(i,t={}){if(i<=0)return t.a=i,t.y=0,t.th=0,t.k=0,t;if(i<Qo){const n=i/ts;return t.a=ts*Math.sin(n),t.y=ts*(1-Math.cos(n)),t.th=n,t.k=1/ts,t}if(i<Qo+El)return t.a=ts,t.y=ts+(i-Qo),t.th=Math.PI/2,t.k=0,t;const e=Math.PI/2+Math.min(i-Qo-El,Yd)/Qr;return t.a=ts+Qr*(Math.sin(e)-1),t.y=ts+El-Qr*Math.cos(e),t.th=e,t.k=1/Qr,t}const fa={},$d=bo(Al).y,n0=8.4,Zh=Math.sqrt(n0*n0+2*pn*$d),eo=1,Kd=3*pn,jd=.22,da=.9,Zd=5.2,Cu=.45,ll=.42,L2=1.6*pn,Jh=-7.5,D2=.35,Ea=5,Aa=14,Ru=96.5,Rl=2*pn,i0=8.5,Gc=36,ta=26,s0=1.7*Rl,I2=.8,Vc=2.9,r0=.55;function o0(i,t){if(t<=i[0][0])return i[0][1];for(let e=1;e<i.length;e++)if(t<=i[e][0]){const[n,s]=i[e-1],[o,a]=i[e];return s+(a-s)*(t-n)/Math.max(1e-6,o-n)}return i[i.length-1][1]}const U2=[[Ta,48],[18,48],[20.6,36],[22.4,33],[24.6,25.9],[Gd,25.9],[35.4,23],[37,27],[39,36],[42,47],[46,56],[48,58],[50.5,52],[54.5,30],[56.6,Zh],[Bl+2,Zh]],a0=.25;function Jd(i,t,e,n,s,o=eo){const a=n*Math.sin(to),l=-n*Math.cos(to),c=n/Qr;return{x:o,y:e,z:t,vx:0,vy:a,vz:l,ph:to,w:c,r:0,wr:0,alpha:0,alphaR:0,thr:0,gas:1,tau:0,ph0:to,w0:c,Ta:a/pn,burn:!1,landed:!1,zT:s,xT:ls,ax:0,az:0,side:0,impact:0,upright:!1}}function F2(i,t){const e=da;if(t>=e)return[bn,0];const n=t/e,s=n*n,o=s*n,a=2*o-3*s+1,l=o-2*s+n,c=-2*o+3*s,h=(6*s-6*n)/e,r=(3*s-4*n+1)/e,u=(-6*s+6*n)/e;return[a*i.ph0+l*e*i.w0+c*bn,h*i.ph0+r*e*i.w0+u*bn]}function Qd(i,t,e){i.tau+=t;const n=i.thr*Kd;let s=0,o=0;i.tau>da*.7&&(s=.75*(i.xT-i.x)-1.5*i.vx,o=-3.5*(i.vz-Jh));const a=Math.max(3,n);let[l,c]=F2(i,i.tau),h=0;if(i.tau>da*.7){const d=(i.sb?1:.2)*un((i.y-.5)/1.8);l+=d*be(o/a,-ll,ll),h=-d*be(s/a,-ll*.5,ll*.5),i.y<1.6&&(l+=.035*un((1.6-i.y)/1.2))}i.alpha=be(160*(l-i.ph)+25*(c-i.w),-45,45),i.w+=i.alpha*t,i.ph+=i.w*t,i.alphaR=be(30*(h-i.r)-11*i.wr,-8,8),i.wr+=i.alphaR*t,i.r+=i.wr*t;const r=i.gas>0?be(e,0,1):0;i.thr+=(r-i.thr)*Math.min(1,t*14),i.gas=Math.max(0,i.gas-i.thr*jd*t);let u=i.tau<Cu?Zd*un(i.tau/.06):0;i.tau>da*.7&&(u+=be(s- -n*Math.sin(i.r),-.8,.8)),i.side=u;const f=Math.cos(i.r);return i.ax=-n*Math.sin(i.r)+u,i.az=n*f*Math.sin(i.ph),i.vx+=i.ax*t,i.vy+=(n*f*Math.cos(i.ph)-pn)*t,i.vz+=i.az*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,!i.upright&&Math.abs(i.ph-bn)<.12&&(i.upright=!0),i.y<=0&&i.vy<0&&(i.impact=-i.vy,i.y=0,i.landed=!0),i}function tp(i){const t=Math.abs(i.ph-bn);if(t>.5&&!i.burn)return t<1&&Math.sin(i.ph)<0&&i.vz>Jh?be(.35+.2*(i.vz-Jh),0,1):0;i.burn=!0;const e=Math.max(.25,i.y),n=Wd,s=i.vy<-n?(i.vy*i.vy-n*n)/(2*e):0;s>.8*L2&&(i.sb=!0);const o=Math.max(.8,Math.cos(i.ph-bn)*Math.cos(i.r));return i.sb?be((pn+s)/(Kd*o),.05,1):0}const bi=1/240,N2=140,So=Math.ceil(N2/bi)+2,ao=new Float64Array(So),Pl=new Float64Array(So),Vt={R:Cl,lipAngle:to,vIn:Zh,deckX:eo},Ue={s0:0,s1:0,vA:0,tLip:0,vx:0,vy:0,uLip:0,tLand:0,done:!1};let Rs=0,yr=0;{const i=rn(Ta),t=rn(Gd),e=rn(Bl);let n=0,s=0,o=1,a="drive",l=1,c=0;for(;o<So;o++){const p=(o-.5)*bi;if(a==="drive"&&(p<i?s=0:!Ue.done&&p>t-1.5&&p+R2(s)>=t?(a="kick",Ue.s0=n,Ue.vA=s):Ue.done&&p>=e?(a="climb",Vt.s0=n,Vt.tIn=p,Vt.vIn=s):s+=e0(s,o0(U2,oo(p+a0)),l)*bi),a==="kick"){const b=(n-Ue.s0)/$i;if(s=qd(Ue.vA,Math.min(1,b)),n-Ue.s0>=$i){Ue.s1=Ue.s0+$i,Ue.tLip=p,Ue.uLip=Math.sqrt(Ue.vA*Ue.vA-2*pn*us);const T=1/Math.sqrt(1+jh(1)**2);Ue.vx=Ue.uLip*T,Ue.vy=Ue.vx*jh(1),c=p+P2(Ue.vy),a="air",s=Ue.vx}}if(a==="air"&&(s=Ue.vx,p>=c&&(a="drive",Ue.done=!0,Ue.tLand=p,l=.85)),a==="climb"&&(s=Math.sqrt(Math.max(4,Vt.vIn*Vt.vIn-2*pn*bo(n-Vt.s0,fa).y))),n+=s*bi,ao[o]=n,Pl[o]=s,a==="climb"&&n>=Vt.s0+Al){Vt.tLip=o*bi,Vt.vLip=s;break}}Vt.sLip=Vt.s0+Al,Vt.height=$d,Vt.zLip=-Vt.s0-bo(Al).a,Vt.xLand=ls,Rs=Vt.tLip+.12,yr=Rs+2*Fi;const h=Jd(Vt.sLip,Vt.zLip,Vt.height,Vt.vLip,null);let r=Vt.tLip,u=0,f=r,d=0,g=0;for(;!h.landed&&r<120;){const p=ep(r);Qd(h,bi*p,tp(h)),h.y>u&&(u=h.y,f=r),h.upright&&!Vt.tUpright&&(Vt.tUpright=r),h.sb&&!Vt.tBurn&&(Vt.tBurn=r),h.tau>da&&(d=Math.max(d,Math.abs(h.r))),h.tau>Cu&&(g+=Math.abs(h.side)*bi*p),r+=bi,o++,ao[o]=Vt.sLip,Pl[o]=0}Vt.tLand=r,Vt.apexY=u,Vt.tApex=f,Vt.impactNominal=h.impact,Vt.zLand=h.z,Vt.xTouch=h.x,Vt.maxTilt=d,Vt.sideTrim=g,Vt.gasLeft=h.gas,Vt.vzTouch=h.vz,Vt.vxTouch=h.vx;const v=oo(r),m=[[v,46],[v+2.2,46],[v+4,40],[Math.max(v+5,84),50],[88,52],[92,44],[95,Gc],[Ru,Gc],[126,Gc],[129,30],[132,26],[134,22],[136,6],[137.6,0],[400,0]];for(n=Vt.sLip,s=Math.max(0,-h.vz),o=o+1;o<So;o++){const p=(o-.5)*bi;s=Math.max(0,s+e0(s,o0(m,oo(p+a0)),.68)*bi),n+=s*bi,ao[o]=n,Pl[o]=s}}function ep(i){if(i<=Rs-.12||i>=yr+.12)return 1;const t=un((i-(Rs-.12))/.24),e=1-un((i-(yr-.12))/.24);return 1-(1-D2)*Math.min(t,e)}function Pi(i){if(i<=0)return 0;const t=i/bi,e=Math.min(So-2,Math.floor(t)),n=t-e;return ao[e]+(ao[e+1]-ao[e])*n}function l0(i){const t=be(Math.round(i/bi),0,So-1);return Pl[t]}const is=i=>Pi(rn(i)),wo={semi:{length:7.1,width:2.6,height:3.85},cybertruck:{length:5.68,width:2.2,height:1.79},models:{length:4.97,width:1.96,height:1.44},model3:{length:4.72,width:1.85,height:1.44},modelx:{length:5.06,width:2,height:1.68},modely:{length:4.75,width:1.92,height:1.62}},c0=["models","cybertruck","semi","model3","modely","modelx"],z2=Ue.s1,Wc=is(Ru);function np(i,t,e=1.1){const n=c0.map(l=>wo[l].width),s=n.reduce((l,c)=>l+c,0)+e*(n.length-1);let o=i-s/2;const a=[];return c0.forEach((l,c)=>{const h=n[c];a.push({kind:l,s:o+h/2,x:t,yaw:Math.PI/2*(c%2?1:-1),...wo[l]}),o+=h+e}),{vehicles:a,s0:i-s/2,s1:i+s/2}}const ip=z2+Ue.vx*(Ue.vy/pn),cl=np(ip,0),ze={beat:Fi,lateral:ls,hangar:{s:0},startLine:{s:0},dragStrip:{s0:0,s1:150,tick:1,tickMajor:5},ramp:{s0:Ue.s0,s1:Ue.s1,height:us,vApproach:Ue.vA,vLip:Ue.uLip},fleet:{s0:cl.s0,s1:cl.s1,sCenter:ip,count:cl.vehicles.length,lineup:cl.vehicles},landing:{s:Pi(Ue.tLand)},shiftBeats:[20,24,38,42,46],reveal:{s0:is(48),s1:is(56)},checkpoint:{s:is(48)},flip:Vt,boostArm:{s0:is(88),s1:is(96)},mega:{s0:Wc-Aa,s1:Wc,height:Ea},flight:{s0:Wc,s1:is(128),floor:0,ceiling:ta},fleetRows:[],rings:[],pylons:[],finish:{s:is(134),beat:134}};{["cybertruck","semi","models","modelx","semi","model3","cybertruck","modely","semi","modelx"].forEach((e,n)=>{const s=102+n*2,o=is(s),a=wo[e],l=Math.max(2,Math.floor(19/(a.length+.5))),c=l*a.length+(l-1)*.5,h=[];for(let r=0;r<l;r++)h.push({kind:e,s:o,x:ls-c/2+a.length/2+r*(a.length+.5),yaw:(r%2?1:-1)*Math.PI/2,...a});ze.fleetRows.push({s:o,depth:a.width,top:a.height,beat:s,kind:e,vehicles:h,finale:!1})});const t=np(is(123.5),ls,.9);ze.fleetRows.push({s:(t.s0+t.s1)/2,depth:t.s1-t.s0,top:wo.semi.height,beat:123.5,kind:"fleet",vehicles:t.vehicles,finale:!0})}ze.flight.landStart=ze.fleetRows[ze.fleetRows.length-1].s+ze.fleetRows[ze.fleetRows.length-1].depth/2+4;const vi={go:rn(Ta),zero60:rn(Ta)+nc,fleetLip:Ue.tLip,fleetApex:Ue.tLip+Ue.vy/pn,fleetLand:Ue.tLand,reveal:rn(48),flipClimb:Vt.tIn,flipLip:Vt.tLip,flipApex:Vt.tApex,bullet:[Rs,yr],flipUpright:Vt.tUpright,flipLand:Vt.tLand,megaLip:rn(Ru),finale:rn(123.5),finish:rn(134)};function qs(i){const t=ze.ramp;if(i>t.s0&&i<=t.s1){const n=(i-t.s0)/$i;return us*n*n}const e=ze.mega;if(i>e.s0&&i<=e.s1){const n=(i-e.s0)/Aa;return Ea*n*n}return 0}function h0(i){const t=ze.ramp,e=ze.mega;return i>t.s0&&i<=t.s1?2*us*(i-t.s0)/($i*$i):i>e.s0&&i<=e.s1?2*Ea*(i-e.s0)/(Aa*Aa):0}function lo(i,t=null){const e=t||{pos:new P,fwd:new P,up:new P,inLoop:!1,theta:0};if(e.onFlip=!1,e.inLoop=!1,e.theta=0,i<Vt.s0){const n=h0(i);e.pos.set(0,qs(i),-i),e.fwd.set(0,n,-1).normalize(),e.up.set(0,1,n).normalize()}else if(i<Vt.sLip){const n=bo(i-Vt.s0,fa),s=n.th;e.pos.set(0,n.y,-Vt.s0-n.a),e.fwd.set(0,Math.sin(s),-Math.cos(s)),e.up.set(0,Math.cos(s),Math.sin(s)),e.onFlip=!0,e.inLoop=!0,e.theta=s}else{const n=h0(i);e.pos.set(ls,qs(i),Vt.zLand-(i-Vt.sLip)),e.fwd.set(0,n,-1).normalize(),e.up.set(0,1,n).normalize()}return e}const Wn={launchPerfect:.07,launchGood:.18,shiftPerfect:.055,shiftGreen:.11,beatOn:.09,cuePerfect:.12,cueGood:.32},hl=rn(Ta),u0=Ue.tLip+Vd;function f0(){return{t:0,beat:0,section:"intro",mode:"drive",s:0,v:0,vNom:0,mph:0,y:0,vy:0,airborne:!1,airTime:0,xOff:0,zOff:0,pos:new P,quat:new Qn,up:new P(0,1,0),fwd:new P(0,0,-1),pitch:0,roll:0,inLoop:!1,loopTheta:0,upsideDown:!1,holding:!1,rev:0,launched:!1,launchT:0,launch:null,gear:1,shift:{nextT:0,light:0,green:!1,perfect:!1,active:!1,gear:1},perf:1,boost:0,boostV:0,thrust:0,thrustArm:0,flap:0,lastFlapT:-9,score:0,combo:0,maxCombo:0,rings:0,ringsTotal:0,perfectShifts:0,hits:0,lapTime:0,finished:!1,finishT:0,results:null,timeScale:1,shiftT:-9,shiftPerfect:!1,landT:-9,flapT:-9,cam:{shot:"",cut:!1,fov:60,shake:0,roll:0,punch:0},flash:0,aberration:0,landImpact:0,popups:[],events:[],rcs:{down:0,left:0,right:0,pitch:0},cue:null,zero60:{show:!1,t:0,frozen:!1,final:nc},puffs:[],flips:0,fleetFlipped:0,gas:1,kickflip:null,flipAir:null,climbV:0,climbHits:0,megaFlip:null,megaLanding:!1,landGrade:"",flipGrade:"",susp:{z:0,zv:0,p:0,pv:0,r:0,rv:0,aLong:0,load:1,wheels:[0,0,0,0],bottom:0},att:{p:0,w:0,r:0,wr:0},slip:0}}const O2=[[.865,-1.36],[-.865,-1.36],[.865,1.32],[-.865,1.32]],ni={travel:.13,ext:.07,wz:10.5,zz:.3,wp:11.5,zp:.36,wr:13,zr:.4},B2=Math.atan(2*us/$i),d0=.3,p0=.5;function sp(i,t){if(i<0||i>t)return[0,0];const e=un(i/.05)*un((t-i)/.05);return i<t/2?[(i<d0?1:p0)*e,0]:[0,(i>t-d0?1:p0)*e]}const ur=680,Xc=(()=>{const i=Au,t=i/ur,e=new Float64Array(ur+1);let n=0,s=0;for(let a=1;a<=ur;a++){const[l,c]=sp((a-.5)*t,i);n+=(l-c)*t,s+=n*t,e[a]=s}const o=bn/e[ur];for(let a=0;a<=ur;a++)e[a]*=o;return e})();function k2(i,t){if(i<=0)return 0;if(i>=t)return bn;const e=i/t*ur,n=Math.min(ur-1,Math.floor(e)),s=e-n;return Xc[n]+(Xc[n+1]-Xc[n])*s}const Ci={dx:3.2,dz:-6.4,h:.6},ks=(()=>{const i=Math.hypot(Ci.dx,Ci.dz);return[Ci.dx/i,Ci.dz/i]})(),ul=(i,t,e)=>{const n=Math.min(i,t);return n-e*Math.log(Math.exp((n-i)/e)+Math.exp((n-t)/e))};function Qh(i={}){const{camera:t=null,car:e=null,world:n=null,fx:s=null,hud:o=null,audio:a=null}=i;let l=!!i.autoplay;const c=new Set,h={state:f0(),muted:!1};let r=h.state;const u=e&&(e.isObject3D?e:e.root||e.group||e.object3d||e.mesh||e.object||null);let f=0,d=0,g,v,m,p,b,T;function S(){f=0,d=0,g={pressed:!1,shiftDone:-1,beatDone:-1,lastFlap:-1,kick:!1},v={shot:"",pos:new P(0,1.4,7),look:new P(0,.6,0),up:new P(0,1,0),fov:50,shake:0,punch:0,carYs:0,initialized:!1,shotT0:0,off:new P,lookOff:new P,rel:!0,fix:null},m=-1,p=0,b=0,T={}}S();function F(L,x,y={}){const _={type:L,text:x,t:r.t,beat:r.beat,...y};r.events.push(_),r.events.length>64&&r.events.shift(),x&&L!=="flap"&&r.popups.push({text:x,t0:r.t,kind:L,style:y.style||L,sub:y.sub});for(const I of c)try{I(_)}catch(E){console.warn("[gameplay] listener",E)}return h.muted||R(_),_}const O={launch:L=>({name:"launch",grade:L.rating}),shift:L=>({name:"shift",grade:L.perfect?"PERFECT":"GOOD",points:L.perfect?400:200,gear:L.gear}),miss:()=>({name:"shift",grade:"LATE"}),combo:()=>({name:"combo",n:r.combo}),air:()=>({name:"jump"}),land:L=>[{name:"land"},{name:"airtime",secs:L.airTime}],touchdown:()=>({name:"land"}),softland:()=>({name:"land"}),hardland:()=>({name:"land"}),hit:()=>({name:"pylon"}),scrape:()=>({name:"land"}),flap:()=>({name:"thrust"}),kickflip:()=>({name:"thrust"}),thrusters:()=>({name:"thrust"}),fleetflip:()=>({name:"ring",combo:r.combo}),rowclear:()=>({name:"ring",combo:1}),climbbeat:()=>({name:"ring",combo:r.combo}),checkpoint:()=>({name:"checkpoint"}),finish:L=>[{name:"finish",results:L.results},{name:"record"}],megaflip:()=>({name:"whoosh"}),inverted:()=>({name:"whoosh"})};function R(L){const x=O[L.type];let y=x?x(L):null;y&&!Array.isArray(y)&&(y=[y]);try{o&&typeof o.onGameplayEvent=="function"&&o.onGameplayEvent(L)}catch(_){console.warn("[gameplay] hud hook",_)}if(y)for(const _ of y){const I={..._,t:L.t,beat:L.beat,source:"gameplay"};if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof CustomEvent=="function")try{window.dispatchEvent(new CustomEvent("rr:event",{detail:I}))}catch(E){console.warn("[gameplay] rr:event",E)}}if(s)try{L.type==="land"||L.type==="touchdown"||L.type==="hardland"?s.land&&s.land(r.pos.clone(),be(r.landImpact+.3,.3,1)):L.type==="hit"?s.hit&&s.hit(r.pos.clone(),1):L.type==="scrape"?s.sparks&&s.sparks(r.pos.clone(),.6,new P(0,1,1)):(L.type==="shift"&&L.perfect||L.type==="megaflip")&&s.boost&&s.boost(L.type==="shift"?.6:1)}catch(_){console.warn("[gameplay] fx hook",_)}if(e)try{(L.type==="flap"||L.type==="kickflip")&&e.thrustPulse&&e.thrustPulse(1),(L.type==="land"||L.type==="touchdown"||L.type==="softland"||L.type==="hardland")&&e.land&&e.land(be(r.landImpact+.3,.3,1.6))}catch(_){console.warn("[gameplay] car hook",_)}}function B({shake:L=0,flash:x=0,punch:y=0,aberr:_=0}={}){if(v.shake=Math.max(v.shake,L),v.punch=Math.max(v.punch,y),r.flash=Math.max(r.flash,x),r.aberration=Math.max(r.aberration,_),!h.muted&&s)try{x>=.3&&s.flash&&s.flash(x*.6)}catch{}}function M(L){r.score+=Math.round(L*(1+Math.min(r.combo,20)*.1))}function C(){r.combo++,r.maxCombo=Math.max(r.maxCombo,r.combo),r.combo>1&&r.combo%5===0&&F("combo",`x${r.combo} COMBO`)}function N(){r.combo=0}function $(L){return Ol(b*1.618+L*7.77+.5)}function et(L,x,y,_,I,E,k,H,ot,ct=.55){b++,r.puffs.push({t0:r.t,x:L,y:x,z:y,vx:_,vy:I,vz:E,r0:k,r1:H,life:ot,a:ct,seed:Ol(b*3.1)}),r.puffs.length>1800&&r.puffs.splice(0,r.puffs.length-1800)}function pt(L,x,y,_){for(T[L]=(T[L]||0)+x*y;T[L]>=1;)T[L]-=1,_()}const Mt=new P;function lt(L,x,y=1,_=.6){pt("tire",x,L,()=>{const I=$(1)<.5?-1:1;Mt.set(I*(.7+$(7)*.3),.25,1.25+$(8)*.4).applyQuaternion(r.quat).add(r.pos);const E=I*(.4+$(2)*7.5);et(Mt.x,.2,Mt.z,E,.25+$(3)*1.1,1+$(4)*4.5,.9*y,(3+$(5)*2.8)*y,2.8+$(6)*1.8,_)})}function gt(L,x,y,_,I=1,E=0,k=1,H=.5){for(let ot=0;ot<L;ot++){const ct=$(ot)*bn,xt=(4+$(ot+9)*9)*_;let At=Math.cos(ct),wt=Math.sin(ct);-(At*E+wt*k)>1-H||et(x+At*1.2,.1,y+wt*1.2,At*xt,.15+$(ot+3)*.5,wt*xt,.6*I,(1.4+xt*.32+$(ot+5))*I,3.2+$(ot+7)*2,.6)}}function nt(L,x,y,_,I,E=""){if(_>13||I<.15)return;const k=_<4,H=I*(1-_/13)*(k?3:1);pt("wash",95*H,L,()=>{const ot=$(1)*bn,ct=4+$(2)*7;let xt=Math.cos(ot),At=Math.sin(ot);if(E==="flip"&&xt*ks[0]+At*ks[1]>.55)return;const wt=k?3+$(4)*1.2+ct*.12:1.4+ct*.32+$(4);et(x+xt*1.4,.1,y+At*1.4,xt*ct,.2+$(3)*(k?1.1:.6),At*ct,k?1:.7,wt,2.8+$(5)*2,.55)})}h.press=()=>{l||f++},h.release=()=>{l||d++},h.setAutoplay=L=>{l=!!L},Object.defineProperty(h,"autoplay",{get:()=>l}),h.on=L=>(c.add(L),()=>c.delete(L)),h.bindInput=(L=window)=>{const x=_=>{if(_.type==="keydown"){if(_.code!=="Space"||_.repeat)return;_.preventDefault()}h.press()},y=_=>{_.type==="keyup"&&_.code!=="Space"||h.release()};return L.addEventListener("pointerdown",x),L.addEventListener("pointerup",y),L.addEventListener("pointercancel",y),window.addEventListener("keydown",x),window.addEventListener("keyup",y),()=>{L.removeEventListener("pointerdown",x),L.removeEventListener("pointerup",y),L.removeEventListener("pointercancel",y),window.removeEventListener("keydown",x),window.removeEventListener("keyup",y)}};function Ct(){r.holding=!0;const L=r.section;L==="intro"||!r.launched&&L==="launch"||Ee()}function $t(){const L=r.holding;r.holding=!1,!r.launched&&L&&Qt()}function Qt(){if(r.launched)return;const L=r.t-hl;let x;L<-Wn.launchGood?x="EARLY":Math.abs(L)<=Wn.launchPerfect?x="PERFECT":Math.abs(L)<=Wn.launchGood?x="GOOD":x="LATE",r.launch=x,r.launchT=Math.max(r.t,hl),r.launched=!0,r.perf={PERFECT:1,GOOD:.985,LATE:.97,EARLY:.965}[x],r.zero60.final=+(nc*{PERFECT:1,GOOD:1.06,LATE:1.16,EARLY:1.22}[x]).toFixed(2),x==="PERFECT"?(M(1e3),C(),r.boostAmp=0,r.boost=Math.min(1,r.boost+.3)):x==="GOOD"&&(M(500),C()),F("launch",`${x} LAUNCH`,{rating:x,err:L,style:x==="PERFECT"?"perfect":"normal"}),B({shake:.9,flash:.08,aberr:.6})}function se(L,x,y,_,I){r.cue={text:L,kind:x,t0:y,t1:_,tHit:I,k:0,active:!0,done:!1,grade:""}}function Ee(){const L=r.section,x=r.t;if(r.flap=1,r.lastFlapT=x,r.cue&&r.cue.active&&!r.cue.done&&r.cue.kind==="tap"&&r.mode!=="fly"&&x>=r.cue.t0&&x<=r.cue.t1){const y=Math.abs(x-r.cue.tHit),_=y<=Wn.cuePerfect?"PERFECT":y<=Wn.cueGood?"GOOD":"LATE";r.cue.done=!0,r.cue.grade=_,r.kickflip={t0:x,dur:Au},M(_==="PERFECT"?1200:_==="GOOD"?700:300),C(),F("kickflip",`${_} KICKFLIP`,{grade:_,style:_==="PERFECT"?"perfect":"normal"}),B({punch:6,aberr:.4});return}if(L==="launch"&&r.launched&&r.mode==="drive"){const y=ht(x);if(y&&Math.abs(x-y.t)<=Wn.shiftGreen&&!y.used){mt[y.idx]=!0;const _=Math.abs(x-y.t)<=Wn.shiftPerfect;r.gear++,r.boostAmp=_?3.2:1.6,r.boostT0=x,r.perf=be(r.perf+(_?.01:.005),.9,1.05),r.boost=Math.min(1,r.boost+(_?.18:.1)),_&&r.perfectShifts++,M(_?400:200),C(),r.shiftT=x,r.shiftPerfect=_,F("shift",_?"PERFECT SHIFT":"GOOD SHIFT",{gear:r.gear,perfect:_,style:_?"perfect":"normal"}),B({shake:_?.75:.45,aberr:_?1:.4})}else r.airborne||(r.perf=be(r.perf-.01,.9,1.05),F("miss","EARLY SHIFT",{style:"bad"}));return}if((L==="flip"||L==="reveal")&&(r.mode==="drive"||r.mode==="climb")&&r.beat<Bl+3&&!(r.beat>70)){const y=Math.round(r.beat);Math.abs(r.t-rn(y))<=Wn.beatOn&&y!==m?(m=y,r.climbHits++,M(150),C(),B({punch:3}),F("climbbeat","",{beatN:y})):L==="flip"&&(N(),r.perf=be(r.perf-.01,.9,1.05),F("offbeat","OFF BEAT",{style:"bad"}));return}if(L==="build"){const y=Math.round(r.beat);Math.abs(r.t-rn(y))<=Wn.beatOn&&y!==m&&(m=y,r.thrustArm=Math.min(1,r.thrustArm+.1),M(100),C(),B({punch:3}));return}if(r.mode==="fly"&&!r.megaLanding){if(x-r.flapT<.06)return;r.flapT=x,r.vy=i0,(!r.megaFlip||x-r.megaFlip.t0>=r.megaFlip.dur)&&(r.megaFlip={t0:x,dur:I2}),r.gas=Math.max(0,r.gas-.04),F("flap","",{}),B({punch:2.5})}}const mt=[];function ht(L){for(let x=0;x<ze.shiftBeats.length;x++){const y=rn(ze.shiftBeats[x]);if(L<=y+Wn.shiftGreen)return{idx:x,t:y,used:!!mt[x]}}return null}function Kt(){const L=r.t,x=r.beat,y=r.section;if(y==="intro"||!r.launched&&y==="launch"){!g.pressed&&x>=8&&(g.pressed=!0,Ct()),g.pressed&&!r.launched&&L>=hl-.004&&$t();return}if(r.cue&&r.cue.kind==="tap"&&r.cue.active&&!r.cue.done&&r.mode!=="fly"&&L>=r.cue.tHit-.004){Ct(),r.holding=!1;return}if(y==="launch"&&r.mode==="drive"){for(let _=0;_<ze.shiftBeats.length;_++){const I=rn(ze.shiftBeats[_]);if(_>g.shiftDone&&L>=I-.004&&L<=I+Wn.shiftPerfect){g.shiftDone=_,Ct(),r.holding=!1;return}}return}if((y==="flip"||y==="build")&&(r.mode==="drive"||r.mode==="climb")&&(y==="build"||r.beat<Bl+3)){const _=Math.round(x);_>g.beatDone&&Math.abs(L-rn(_))<=.012&&(g.beatDone=_,Ct(),r.holding=!1);return}if(r.mode==="fly"&&!r.megaLanding){const _=Math.floor(x*2+1e-6)/2,I=rn(_),E=r.y<.7&&r.vy<0&&L-r.flapT>.12;if(!(_>g.lastFlap&&L-I<.02)&&!E)return;g.lastFlap=Math.max(g.lastFlap,_),(E||Tt(L,_))&&(Ct(),r.holding=!1)}}const Bt=1/120,Jt=ze.fleetRows;function xe(L){for(const x of Jt)if(x.s+x.depth/2+2>L)return x.top+Vc;return 2}function le(L,x,y,_,I){const E=r.s-Pi(r.t);let k=y,H=0,ot=!0,ct=E+Pi(y);for(;k<_-1e-9;){const xt=Math.min(Bt,_-k);ot&&I&&(x=i0),ot=!1,x-=Rl*xt,L+=x*xt,k+=xt,L<0&&(L=0,x=6,H+=600),L>ta&&(L=ta,x=Math.min(x,-1),H+=200);const At=E+Pi(k);for(const wt of Jt){const me=wt.depth/2+2.2;if(Math.abs(At-wt.s)<=me&&L<wt.top+Vc-.9&&(H+=1500*xt*60),ct<wt.s&&At>=wt.s){const ge=L-(wt.top+Vc);H+=ge*ge*1.2}}ct=At}return{y:L,vy:x,cost:H}}function oe(L,x,y,_,I){const E=rn(_+.5);let k=1/0,H=!1;for(const ot of[!1,!0]){const ct=le(L,x,y,E,ot);let xt=ct.cost+(ot?.05+(Math.abs(_-Math.round(_))>.01?.3:0):0);xt>=k||(I>1?xt+=oe(ct.y,ct.vy,E,_+.5,I-1).cost:xt+=Math.abs(ct.y-xe(r.s+(Pi(E)-Pi(r.t))))*.4+Math.abs(ct.vy)*.02,xt<k&&(k=xt,H=ot))}return{cost:k,flap:H}}function Tt(L,x){return oe(r.y,r.vy,L,x,6).flap}const zt={burn:!1};function V(L,x,y,_){zt.burn=!!r._burn;const I=Xd(zt,L,x,y,_);return r._burn=zt.burn,I}const jt={pos:new P,fwd:new P,up:new P,inLoop:!1,theta:0};new Ie,new P,new P,new P;const It=new Qn,te=new Qn,Wt=new P(1,0,0),tt=new P(0,0,1),at=new P,A=new P,w=new Qn;function G(L){return L<3.2?"SOFT":L<6.5?"GOOD":"HARD"}function q(L,x,y=null){r.airborne=!1,r.landT=r.t,r.landImpact=be(L/12,.15,1);{const E=r.susp;E.zv=-be(L,0,10),y&&(E.p=be(y.p||0,-.1,.1),E.pv=be((y.w||0)-L*Math.sin(y.p||0)*1.4,-3,3),E.r=be(y.r||0,-.07,.07),E.rv=be(y.wr||0,-2,2))}const _=G(L);if(r.landGrade=_,_==="HARD"){if(N(),r.perf=be(r.perf-.03,.9,1.05),r.hits++,!h.muted&&s&&s.sparks)try{s.sparks(r.pos.clone(),1,new P(0,.6,1))}catch{}F("hardland","HARD LANDING",{impact:L,where:x,style:"bad"}),B({shake:1.3,flash:.2,aberr:1})}else M(_==="SOFT"?2e3:1e3),C(),F("softland",_==="SOFT"?"SOFT LANDING":"CLEAN LANDING",{impact:L,where:x,style:"perfect"}),B({shake:.5,flash:.12,aberr:.3});if(x==="fleet"?gt(52,r.pos.x,r.pos.z,.75,1.15,ks[0],ks[1],.75):gt(80,r.pos.x,r.pos.z,.75,1.2,ks[0],ks[1],.8),x!=="fleet"){const E=x==="flip"?1:.8;for(let k=0;k<70;k++){const H=$(k+120)*bn,ot=(.8+Math.pow($(k+121),.7)*5.2)*E,ct=Math.cos(H),xt=Math.sin(H);if(ct*ks[0]+xt*ks[1]>.8&&ot>2.2)continue;const At=.3+$(k+122)*1.6;et(r.pos.x+ct*ot,At,r.pos.z+xt*ot,ct*(1.5+$(k+123)*2.5),.35+$(k+124)*.8,xt*(1.5+$(k+123)*2.5)+1.2,1.6*E,(3+$(k+125)*2.2)*E,4.2+$(k+126)*2.6,.5)}}const I=x==="fleet"?18:26;for(let E=0;E<I;E++){const k=($(E+40)-.5)*3,H=Math.sin(k)-.35,ot=Math.cos(k),ct=2.5+$(E+45)*3.5;et(r.pos.x+H*ct,.2+$(E+46)*.8,r.pos.z+ot*ct,H*2,.6+$(E+42)*1,ot*2.5,1.4,3.8+$(E+43)*2.4,4.5+$(E+44)*2.5,.5)}}function K(L,x){r.t=x,r.beat=oo(x);const y=kd(x);for(y!==r.section&&(r.section,r.section=y,yt(y)),l&&Kt();f>0;)f--,Ct();for(;d>0;)d--,$t();const _=ep(x);if(_!==r.timeScale&&!h.muted&&s&&s.setTimeScale)try{s.setTimeScale(_)}catch{}r.timeScale=_;const I=L*_;r.launched?r.rev+=(.35+.5*be(r.v/60,0,1)-r.rev)*li(3,L):(r.rev+=((r.holding?1:.08)-r.rev)*li(r.holding?3.2:4,L),r.holding&&(r.rev+=.03*Math.sin(x*61)),x>hl+.45&&(r.holding=!1,Qt()));for(const[E,k]of[[10,"3"],[12,"2"],[14,"1"],[16,"GO"]]){const H=rn(E);x>=H&&x-L<H&&F("countdown",k,{n:k,style:"countdown"})}if(y==="launch"&&r.launched&&r.mode==="drive"){const E=ht(x);if(E){const k=E.idx>0?rn(ze.shiftBeats[E.idx-1]):r.launchT;r.shift.nextT=E.t,r.shift.light=be((x-k)/(E.t-k),0,1),r.shift.green=Math.abs(x-E.t)<=Wn.shiftGreen,r.shift.perfect=Math.abs(x-E.t)<=Wn.shiftPerfect,r.shift.active=!mt[E.idx],!mt[E.idx]&&x>E.t+Wn.shiftGreen-L&&x<=E.t+Wn.shiftGreen&&(mt[E.idx]=!0,r.perf=be(r.perf-.01,.9,1.05),N(),F("miss","MISSED SHIFT",{style:"bad"}))}else r.shift.active=!1,r.shift.green=!1,r.shift.light=0;r.shift.gear=r.gear}else r.shift.active=!1,r.shift.green=!1;r.vNom=l0(x);{const E=x-(r.boostT0??-99);r.boostV=E<0||E>8?0:(r.boostAmp||0)*un(E/.45)*Math.exp(-Math.max(0,E-.45)/.8)}if(r.rcs.down*=Math.exp(-L*10),r.rcs.left*=Math.exp(-L*10),r.rcs.right*=Math.exp(-L*10),r.rcs.pitch*=Math.exp(-L*10),r.mode==="drive"?J(L,x):r.mode==="jump"?ut(L,x):r.mode==="climb"?U(L):r.mode==="flipAir"?Y(L,I,x):r.mode==="fly"&&dt(L,x),r.mph=Math.round((r.launched?Math.hypot(r.v,(r.mode==="flipAir",0)):0)*wa*(r.mode==="drive"?r.perf:1)),r.mode==="flipAir"&&r.flipAir&&(r.mph=Math.round(Math.hypot(r.flipAir.vx,r.flipAir.vy,r.flipAir.vz)*wa)),r.landImpact*=Math.exp(-L*5),r.lapTime=r.launched?r.finished?r.finishT-r.launchT:x-r.launchT:0,r.launched){const E=x-r.launchT;r.zero60.show=E>=0&&r.beat<23,r.zero60.t=Math.min(E,r.zero60.final),!r.zero60.frozen&&E>=r.zero60.final&&(r.zero60.frozen=!0,r.launch!=="EARLY"&&F("moment3",`#3 0-60 IN ${r.zero60.final.toFixed(2)}s`,{style:"moment",sub:"TESLA ROADSTER"}))}if(r.launched&&r.launch!=="EARLY"&&x-r.launchT>=r.zero60.final-.006&&x-r.launchT<r.zero60.final+1.2&&r.mode==="drive"&&(r.mph=Math.max(r.mph,60)),!r.launched&&r.holding&&r.beat>12&&lt(L,30+40*un((r.beat-12)/3.5),.85,.6),r.launched&&x-r.launchT<1.8){const E=(x-r.launchT)/1.8;lt(L,1100*(1-E)*(1-E)+80,1.45+.6*(1-E),.92)}if(r.slip=r.launched?17*Math.pow(be(1-(x-r.launchT)/.95,0,1),1.4):0,r.cue){const E=r.cue;E.k=be((x-E.t0)/Math.max(.001,E.tHit-E.t0),0,1),E.active=x>=E.t0&&x<=E.t1&&!(E.kind==="tap"&&E.done&&x>(E.doneT??(E.doneT=x))+.5),x>E.t1+.6&&(r.cue=null)}for(!r.cue&&x>=Ue.tLip-1.2*Fi&&x<Ue.tLip&&!r._kickCue&&(r._kickCue=!0,se("TAP: THRUSTERS","tap",Ue.tLip-1.2*Fi,u0+Wn.cueGood+.3,u0)),y==="build"&&(r.thrustArm=Math.max(r.thrustArm,un((r.beat-88)/8)),r.gas=Math.max(r.gas,r.thrustArm)),y==="build"&&r.beat>=94&&!r._ready&&(r._ready=!0,F("boostready","MEGA FLIP READY",{style:"big",sub:"TAP: THRUSTERS"})),r.flap*=Math.exp(-L*7),r.thrust=r.mode==="fly"?be(.25+r.flap*.9,0,1):y==="build"?r.thrustArm*.3:0,r.boost=y==="build"?Math.max(r.boost,r.thrustArm):r.boost,(r.mode==="flipAir"||r.mode==="fly")&&(r.boost=r.gas),!r.finished&&r.s>=ze.finish.s&&r.mode==="drive"&&r.s>Vt.sLip&&(r.finished=!0,r.finishT=x,r.results={time:r.finishT-r.launchT,score:r.score,maxCombo:r.maxCombo,rings:r.fleetFlipped,ringsTotal:W(),launch:r.launch,zero60:r.zero60.final,perfectShifts:r.perfectShifts,flips:r.flips,fleetFlipped:r.fleetFlipped,newRecord:!0},F("finish","FINISH",{results:r.results,style:"big"}),B({flash:.7,shake:.5,punch:6})),_t(L),rt(L),r.flash*=Math.exp(-L*5),r.aberration*=Math.exp(-L*4);r.popups.length&&r.t-r.popups[0].t0>2.5;)r.popups.shift();if(r.puffs.length&&!(b&31)){const E=r.t;r.puffs=r.puffs.filter(k=>E-k.t0<k.life)}}function W(){let L=0;for(const x of Jt)L+=x.vehicles.length;return L}function rt(L){const x=r.susp,y=!r.airborne&&r.mode!=="flipAir"&&r.mode!=="fly"&&r.mode!=="jump",_=r._vSusp??r.v;r._vSusp=r.v;let I=y&&r.mode==="drive"&&L>0?be((r.v-_)/L,-40,40):0;x.aLong+=(I-x.aLong)*li(25,L);let E=0,k=0,H=0,ot=1;if(y&&(k=be(x.aLong*.00125,-.035,.045),E=-Math.abs(x.aLong)*5e-4,r.mode==="climb"&&(ot=Math.max(0,r.v*r.v*bo(r.s-Vt.s0,fa).k/pn+Math.cos(r.loopTheta||0)),E-=be((ot-1)*.024,0,.11)),!r.launched&&r.holding&&(k+=.008+.005*Math.sin(r.t*29)*r.rev,E-=.01*r.rev,H=.006*r.rev),r.launched&&r.v>1)){const wt=r.t*(2+r.v*.35);E+=.004*Ms(wt)*Math.min(1,r.v/30),k+=.0015*Ms(wt*.7+9)}x.load=ot;const ct=y?1:.6;x.zv+=(-(ni.wz*ni.wz*ct)*(x.z-E)-2*ni.zz*ni.wz*x.zv)*L,x.z+=x.zv*L,x.pv+=(-(ni.wp*ni.wp*ct)*(x.p-k)-2*ni.zp*ni.wp*x.pv)*L,x.p+=x.pv*L,x.rv+=(-(ni.wr*ni.wr*ct)*(x.r-H)-2*ni.zr*ni.wr*x.rv)*L,x.r+=x.rv*L,x.p=be(x.p,-.11,.11),x.r=be(x.r,-.08,.08),x.bottom*=Math.exp(-L*6);let xt=1/0,At=-1/0;for(let wt=0;wt<4;wt++){const[me,ge]=O2[wt],Nt=x.z-ge*x.p+me*x.r;x.wheels[wt]=y?be(-Nt,-.07,ni.travel):0,xt=Math.min(xt,Nt),At=Math.max(At,Nt)}if(y&&xt<-.13){const wt=-.13-xt;x.z+=wt,x.zv<0&&(x.zv<-2.5&&(x.bottom=Math.max(x.bottom,be(-x.zv/6,0,1))),x.zv*=-.2)}At>ni.ext&&(x.z-=At-ni.ext)}function it(L,x){const y=Pi(x),_=l0(x)+r.boostV,I=2*(y+r.boostV*.12-r.s);return Math.max(0,_+be(I,-12,12))}function J(L,x){r.launched?r.v=it(L,x):r.v=0;const y=r.s;if(r.s+=r.v*L,r.xOff*=Math.exp(-L*1.4),r.zOff*=Math.exp(-L*1.4),y<ze.ramp.s1&&r.s>=ze.ramp.s1){r.mode="jump",r.airborne=!0,r.airTime=0,r._burn=!1,r.y=us,r.vy=r.v*(2*us/$i),r.att.p=B2+r.susp.p,r.att.w=-.16,r.att.r=0,r.att.wr=0,F("moment1","#1 JUMPING THE ENTIRE FLEET",{style:"moment",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y"}),F("air","",{}),B({punch:9,shake:.25});return}if(y<Vt.s0&&r.s>=Vt.s0){r.mode="climb",r.climbV=Vt.vIn*(.985+.015*be(r.climbHits/4,0,1)),se("HOLD: THRUSTERS","hold",Math.max(yr-.2,Vt.tUpright-.6),Vt.tLand+1.5,Vt.tUpright),r.cue.active=!1;return}if(y<ze.mega.s1&&r.s>=ze.mega.s1&&r.s>Vt.sLip){r.mode="fly",r.airborne=!0,r.airTime=0,r.y=Ea,r.vy=r.v*(2*Ea/Aa),r.megaLanding=!1,r._burn=!1,r.megaFlip={t0:x,dur:1.5,mega:!0},r.flips++,r.gas=1,F("megaflip","MEGA FLIP",{style:"big",sub:"TAP: THRUSTERS"}),se("TAP: THRUSTERS","tap",x+.6,rn(106),rn(102)),B({punch:12,shake:.6,flash:.3,aberr:.5});return}r.y=qs(r.s),r.vy=0,r.airborne=!1}function ut(L,x){r.v=it(L,x),r.s+=r.v*L;const y=r.vy;let _=0;r.kickflip&&r.vy<0&&x-r.kickflip.t0>r.kickflip.dur*.7&&(_=V(r.y-qs(r.s),r.vy,1.8*pn,pn)),r.rcs.down=Math.max(r.rcs.down,_),r.vy+=(_*1.8*pn-pn)*L,r.y+=r.vy*L,r.airTime+=L;const I=r.att;if(r.kickflip){const H=r.kickflip.dur,ot=x-r.kickflip.t0,ct=k2(ot,H);I.wr=L>0?(ct-I.r)/L:0,I.r=ct;const[xt,At]=sp(ot,H);r.rcs.right=Math.max(r.rcs.right,xt),r.rcs.left=Math.max(r.rcs.left,At)}let E=0;if(r.kickflip&&x-r.kickflip.t0>r.kickflip.dur*.45){const H=.035*un((2.2-(r.y-qs(r.s)))/1.6);E=be(-10*(I.p-H)-6*I.w,-4.5,4.5),r.rcs.pitch=be(E/4.5,-1,1)}I.w+=E*L,I.p+=I.w*L,y>0&&r.vy<=0&&!r._fleetDone&&(r._fleetDone=!0,M(1500),C(),F("fleet","FLEET CLEARED",{style:"big",sub:"+1,500"}));const k=qs(r.s);if(r.y<=k&&r.vy<0){const H=-r.vy;r.y=k,r.vy=0,r.mode="drive",r.kickflip&&(r.flips++,r.kickflip=null);const ot=I.r-bn*Math.round(I.r/bn);q(H,"fleet",{p:I.p,w:I.w,r:ot,wr:I.wr}),r.pitch=0,r.roll=0,I.p=0,I.w=0,I.r=0,I.wr=0,F("land",`${r.airTime.toFixed(2)}s AIR`,{airTime:r.airTime,style:"normal"})}}function U(L,x){const y=bo(r.s-Vt.s0,fa).th;if(r.v=Math.sqrt(Math.max(4,r.climbV*r.climbV-2*pn*fa.y)),r.s+=r.v*L,r.y=0,r.vy=0,r.airborne=!1,y>Math.PI/2&&!r._invDone&&(r._invDone=!0,F("moment2","#2 THE MIDAIR FLIP",{style:"moment",sub:"PAST VERTICAL"}),B({punch:6,aberr:.3})),r.s>=Vt.sLip){const _=Jd(Vt.sLip,Vt.zLip,Vt.height,r.v,Vt.zLand);r.flipAir=_,r.mode="flipAir",r.airborne=!0,r.airTime=0,r._burn=!1,r.gas=1,F("inverted","INVERTED",{style:"big"}),B({punch:8,shake:.4})}}function Y(L,x,y){const _=r.flipAir;let I;if(l?I=tp(_):I=r.holding?1:0,Qd(_,x,I),r.airTime+=x,r.v=Math.hypot(_.vx,_.vz),r.y=_.y,r.vy=_.vy,r.gas=_.gas,r.rcs.down=Math.max(r.rcs.down,_.thr),r.rcs.pitch=be(_.alpha/9,-1,1),_.tau<Cu&&_.side>.05?r.rcs.left=Math.max(r.rcs.left,Math.min(1,_.side/Zd)):_.side>.15?r.rcs.left=Math.max(r.rcs.left,Math.min(.5,_.side/1.6)):_.side<-.15&&(r.rcs.right=Math.max(r.rcs.right,Math.min(.5,-_.side/1.6))),y>=Rs&&!r._bulletDone&&(r._bulletDone=!0,F("bullet","",{})),_.upright&&!r._uprightDone&&(r._uprightDone=!0,r.flips++,M(2500),C(),F("upright","UPRIGHT",{style:"big",sub:"+2,500"})),_.thr>.3&&!r._thrDone&&(r._thrDone=!0,F("thrusters","THRUSTERS",{style:"normal"})),nt(L,_.x,_.z,_.y,_.thr,"flip"),_.landed){r.mode="drive";const E=Vt.zLand-_.z;r.s=Vt.sLip+Math.max(.001,E),r.zOff=E<.001?E*-1:0,r.xOff=_.x-ls,r.v=Math.max(0,-_.vz),r.y=0,r.vy=0,r.pitch-=bn*Math.round(r.pitch/bn);const k=Math.abs(_.ph-bn)<.5;q(k?_.impact:Math.max(_.impact,7),"flip",{p:_.ph-bn,w:_.w,r:_.r,wr:_.wr}),r.pitch=0,r.flipGrade=r.landGrade,r.flipAir=null,r.cue&&r.cue.kind==="hold"&&(r.cue.done=!0,r.cue.grade=r.landGrade,r.cue.t1=Math.min(r.cue.t1,y+.4))}}function dt(L,x){r.v=it(L,x);const y=r.s;r.s+=r.v*L,r.airTime+=L,!r.megaLanding&&r.s>=ze.flight.landStart&&(r.megaLanding=!0,r._burn=!1,se("HOLD: THRUSTERS","hold",x,x+3,x+.3),F("thrusters","HOLD: THRUSTERS",{style:"normal"}));let _=0;if(r.megaLanding&&(_=l?V(r.y,r.vy,s0,Rl):r.holding&&r.gas>0?1:0,r.gas=Math.max(0,r.gas-_*jd*L),r.rcs.down=Math.max(r.rcs.down,_),nt(L,r.pos.x,r.pos.z,r.y,_)),r.vy+=(_*s0-Rl)*L,r.vy=Math.max(r.vy,-30),r.y+=r.vy*L,r.y>ta&&(r.y=ta,r.vy=Math.min(r.vy,-1)),r.megaFlip){const I=(x-r.megaFlip.t0)/r.megaFlip.dur;r.rcs.pitch=I<.3?1:I>.7&&I<1?-1:r.rcs.pitch,I>=1&&(r.megaFlip.mega||r.flips++,r.megaFlip=null)}for(let I=p;I<Jt.length;I++){const E=Jt[I],k=E.depth/2+2.1;if(r.s<E.s-k)break;if(Math.abs(r.s-E.s)<=k&&r.y<E.top+.05&&!E._hit&&(E._hit=!0,r.y=E.top+.3,r.vy=7,r.hits++,N(),F("hit","ROOF CLIP",{style:"bad",row:I}),B({shake:1.2,flash:.2,aberr:1}),!h.muted&&s&&s.sparks))try{s.sparks(r.pos.clone(),.9,new P(0,1,0))}catch{}if(y<E.s+k&&r.s>=E.s+k&&(p=I+1,!E._hit)){const H=r.megaFlip||r.t-(r._lastFlipEnd||-9)<.25,ot=E.vehicles.length;H?(r.fleetFlipped+=ot,M(400*ot),C(),F("fleetflip",E.finale?"THE ENTIRE FLEET":`FLEET FLIP x${ot}`,{style:E.finale?"big":"normal",n:ot,row:I,sub:`+${400*ot}`})):(M(150*ot),C(),F("rowclear","CLEAR",{n:ot,row:I})),B({punch:3})}}if(r.megaFlip==null&&r._wasFlip&&(r._lastFlipEnd=r.t),r._wasFlip=!!r.megaFlip,r.y<=0&&r.vy<0)if(r.megaLanding){const I=-r.vy;r.y=0,r.vy=0,r.mode="drive",r.megaFlip=null,r.pitch-=bn*Math.round(r.pitch/bn),q(I,"mega",{p:r.pitch,w:0,r:0,wr:0}),r.pitch=0,r.cue&&r.cue.kind==="hold"&&(r.cue.done=!0,r.cue.grade=r.landGrade,r.cue.t1=Math.min(r.cue.t1,x+.4))}else r.y=0,r.vy=6,x-(r._scrapeT||-9)>.3&&(r._scrapeT=x,N(),F("scrape","SCRAPE",{style:"bad"}),B({shake:.6,aberr:.4}));r.beat>124&&!r._finaleDone&&(r._finaleDone=!0,F("finale","",{}))}function yt(L){L==="reveal"&&F("checkpoint","THE MIDAIR FLIP",{style:"big",sub:"NEXT: #2"})}function Q(L){return L<Vt.s0?eo*un((L-(Vt.s0-90))/70):0}function _t(L){if(lo(r.s,jt),r.mode==="flipAir"&&r.flipAir){const k=r.flipAir;r.pos.set(k.x,k.y,k.z),r.pitch=k.ph,r.roll=k.r,It.setFromAxisAngle(Wt,r.pitch),te.setFromAxisAngle(tt,k.r),r.quat.copy(It).multiply(te),r.fwd.set(0,0,-1).applyQuaternion(r.quat),r.up.set(0,1,0).applyQuaternion(r.quat),r.inLoop=!1,r.upsideDown=Math.cos(k.ph)<-.3;return}if(r.mode==="climb"||jt.onFlip){r.pos.copy(jt.pos),r.pos.x+=eo,r.fwd.copy(jt.fwd),r.up.copy(jt.up),r.pitch=jt.theta,r.roll=0,It.setFromAxisAngle(Wt,r.pitch),r.quat.copy(It),r.inLoop=!0,r.loopTheta=jt.theta,r.upsideDown=jt.theta>Math.PI*.6;return}r.inLoop=!1,r.upsideDown=!1,r.fwd.copy(jt.fwd),r.up.copy(jt.up),r.pos.copy(jt.pos),r.pos.y=r.y,r.pos.x+=r.xOff+Q(r.s),r.pos.z+=r.zOff;let x=0,y=0,_=li(14,L);r.mode==="jump"?(x=r.att.p,_=1):r.mode==="fly"?(x=Math.atan2(r.vy,Math.max(1,r.v))*.5,_=li(8,L)):x=Math.atan2(jt.fwd.y,-jt.fwd.z),r.pitch+=(x-r.pitch)*_,r.roll+=(y-r.roll)*li(5,L);let I=r.pitch,E=r.roll;if(r.mode==="jump"&&(E=r.att.r),r.mode==="fly"&&r.megaFlip&&(I+=bn*un((r.t-r.megaFlip.t0)/r.megaFlip.dur)),It.setFromAxisAngle(Wt,I),te.setFromAxisAngle(tt,E),r.quat.copy(It).multiply(te),r.upsideDown=Math.cos(I)*Math.cos(E)<-.3,r.mode==="jump"||r.mode==="fly"){at.set(0,r0,0).applyQuaternion(r.quat);const k=(r.mode==="jump",w.setFromAxisAngle(Wt,r.pitch));A.set(0,r0,0).applyQuaternion(k),r.pos.add(A).sub(at)}}const St={intro:"intro",launch:"drop1",reveal:"break",flip:"loop",build:"build",mega:"flight",outro:"outro"};h.carInput=()=>({speed:r.mode==="flipAir"?0:r.v+r.slip,rev:r.rev,throttle:r.launched?be(.5+r.boostV/10,0,1):r.rev,boost:be(r.boostV/9,0,1),brake:r.finished?1:0,flying:r.mode==="flipAir"||r.mode==="fly",airborne:r.airborne,grounded:!r.airborne,armed:Math.max(r.thrustArm,r.mode==="flipAir"||r.mode==="fly"||r.mode==="jump"?1:0),thrust:r.thrust,lights:1,rcs:r.rcs,jetsDown:r.rcs.down,jetsLeft:r.rcs.left,jetsRight:r.rcs.right,jetsPitch:r.rcs.pitch,mode:r.mode}),h.fxInput=()=>({t:r.t,speed01:be(r.v/60,0,1),boost01:Math.max(r.boost,be(r.boostV/9,0,1)),thrust:r.thrust,car:u,section:St[r.section]||r.section,timeScale:r.timeScale,smoke:r.puffs,rcs:r.rcs}),h.hudState=()=>({t:r.t,speed:r.mph,score:r.score,combo:r.combo,maxCombo:r.maxCombo,boost:r.mode==="flipAir"||r.mode==="fly"?r.gas:Math.max(r.boost,r.thrustArm),rev:r.rev,revTarget:[.85,1],shift:{phase:r.shift.light,window:r.shift.green,perfect:r.shift.perfect,active:r.shift.active},gear:r.gear,launch:r.launch||void 0,shifts:r.perfectShifts,shiftsTotal:ze.shiftBeats.length,rings:r.fleetFlipped,ringsTotal:W(),finished:r.finished,phase:St[r.section]||r.section,lapTime:r.lapTime,upsideDown:r.upsideDown,results:r.results,holding:r.holding,section:r.section,mode:r.mode,cue:r.cue,zero60:r.zero60,flips:r.flips,fleetFlipped:r.fleetFlipped,gas:r.gas,timeScale:r.timeScale,carScreen:r.cam.car||null});function Rt(){const L=e&&e.body;if(!L||!L.isObject3D)return;const x=r.susp;L.position.y+=x.z,L.rotation.x+=x.p,L.rotation.z+=x.r}function D(L){if(u&&(u.position.copy(r.pos),u.quaternion.copy(r.quat)),!!e){if(i.driveCar&&typeof e.update=="function"){try{e.update(L,h.carInput())}catch(x){console.warn("[gameplay] car.update",x)}Rt();return}try{typeof e.setState=="function"&&e.setState(r),typeof e.setSpeed=="function"&&e.setSpeed(r.v),typeof e.setThrusters=="function"&&e.setThrusters(r.thrust)}catch(x){console.warn("[gameplay] car hook",x)}Rt()}}const z=new P,X=new P,st=new P(0,1,0),vt={pos:new P,fwd:new P,up:new P,inLoop:!1,theta:0},bt=new Ie,Pt=new P;function Z(L,x,y,_,I,E){Pt.copy(x).sub(L);const k=Math.hypot(Pt.x,Pt.z)||1e-6,H=Math.tan(I*Math.PI/360),ot=H*(t?t.aspect:1),ct=Math.atan2(Pt.x,-Pt.z)-Math.atan(y*ot),xt=Math.atan2(Pt.y,k)-Math.atan(_*H);return E.set(L.x+Math.sin(ct)*Math.cos(xt)*20,L.y+Math.sin(xt)*20,L.z-Math.cos(ct)*Math.cos(xt)*20),E}const ne=new P,ye=new P,Fe=new P,qe=new P;function gn(L,x,y,_,I,E){Fe.copy(x).sub(L).normalize(),qe.copy(y).addScaledVector(Fe,-y.dot(Fe)),qe.lengthSq()<1e-8&&qe.set(0,0,-1),qe.normalize();const k=Math.atan(-_*Math.tan(I*Math.PI/360));return E.copy(L).addScaledVector(Fe,Math.cos(k)*20).addScaledVector(qe,Math.sin(k)*20),E}function oi(){const L=be((t.aspect-.5625)/1.2153,0,1),x=(y,_)=>y+(_-y)*L;return{D:x(7.2,4.8),H:x(1.3,.9),fov:x(58,60),ndcY:x(-.24,-.16),k:L}}const ai=new P,Ji=new P,j=new P,Ot=new P,Zt=.6,Ut=(L,x,y)=>L<0||L>6?0:L<x?un(L/x):Math.exp(-(L-x)/y),Ft=new P(0,1,0);function kt(){const L=r.beat,x=r.flipAir;if(L<8)return"intro";if(L<16)return"countdown";if(r.finished||r.section==="outro")return r.t-r.landT<1.9&&r.landT>rn(124)&&!r.finished?"megaLand":"finish";if(r.section==="launch")return r.t>=vi.fleetLip-.62&&r.t<vi.fleetApex+.42?"fleetJump":r.t>=vi.fleetApex+.42&&r.t<vi.fleetLand+1.6?"landHero":r.launched&&r.t-r.launchT<.4?"launchFront":r.t<vi.zero60+.15?"launchTop":L<19.8?"launchSide":L>=24.2&&r.s<ze.ramp.s1?"fleetWide":r.t-r.landT<.7&&r.landT>rn(30)?"landHero":"chase";if(r.section==="reveal")return"flipReveal";if(r.section==="flip")return r.mode==="climb"?"flipClimb":r.mode==="flipAir"?r.t<Rs-.05?"flipClimb":r.t<yr?"flipOrbit":x&&x.y<4.5&&x.vy<0?"flipHero":"flipDescent":r.s>Vt.sLip&&r.s<Vt.sLip+60&&r.t-r.landT<1.9?"flipHero":r.s<Vt.s0&&L<58?"flipReveal":r.s<Vt.s0&&L>=59?r.s>Vt.s0-30?"flipClimb":"flipSide":"chase";if(r.section==="mega"){if(r.mode==="fly")return L<99.5?"megaLaunch":r.megaLanding?"megaLand":L>=121.6?"megaWide":"megaChase";if(r.t-r.landT<1.9&&r.landT>rn(120))return"megaLand"}return"chase"}const ve={default:1,launchFront:0,flipSide:1,fleetSide:.5,landHero:0,flipReveal:1.6,climbChase:.8,flipLip:0,flipOrbit:0,flipDescent:0,flipClimb:0,flipHero:0,megaLand:0,megaLaunch:.5,megaChase:.6,megaWide:0,finish:1.6,countdown:1,launchTop:0,launchSide:0,fleetWide:1.2,fleetJump:0};function _e(L){if(!t)return;const x=kt(),y=x!==v.shot;if(y){if(v.initialized){const ae=v.shot==="landHero"||v.shot==="flipHero"||v.shot==="launchFront"?0:(ve[x]??ve.default)*Fi;if(ae>0){const he=new P(0,0,-1).applyQuaternion(t.quaternion),nn=Math.max(4,t.position.distanceTo(r.pos));v.blend={t0:r.t,dur:ae,off:t.position.clone().sub(r.pos),lookOff:t.position.clone().addScaledVector(he,nn).sub(r.pos),up:new P(0,1,0).applyQuaternion(t.quaternion),fov:t.fov}}else v.blend=null}v.shot=x,v.shotT0=r.t,v.fix=r.pos.clone(),v.fj=null,v.hz=null}r.t-v.shotT0;const _=r.pos,I=be(r.v/60,0,1.2),E=r.beat,k=oi(),H=t.aspect<1,ot=r.launched?r.t-r.launchT:-1,ct=Ut(ot,.12,.42),xt=r.t-r.shiftT,At=Ut(xt,.06,.32)*(r.shiftPerfect?1:.6),wt=Ut(r.t-r.landT,.035,.1),me=Ut(r.t-r.flapT,.04,.2),ge=ct*1.6+At*.7;let Nt=k.fov,Ht=10,Gt=14,Xt=!0,Me=!0;v.carYs+=(r.y-v.carYs)*li(r.mode==="fly"?4.5:12,L);const re=be(r.boostV/9,0,1);let we=ct*6+At*4,fe=r.launched&&!r.airborne&&!r.finished&&!r.inLoop;const pe=k.ndcY;switch(r.flipAir,x){case"intro":{const Yt=un(E/8),ae=.28+2.3*Yt,he=H?12.2-.8*Yt:8-.5*Yt;z.set(_.x+Math.sin(ae)*he,1.05+.25*Math.sin(Yt*Math.PI),_.z+Math.cos(ae)*he),Nt=H?46:40,gn(z,ne.set(_.x,Zt,_.z),Ft,H?-.1:-.04,Nt,X),Ht=30,Gt=30,Me=!1;break}case"countdown":{const Yt=un((E-8)/7.5),ae=2.58+(bn-2.58)*Yt,he=H?11.4:7.5,nn=he+(k.D-he)*Yt,ie=1.05+(k.H+Zt-1.05)*Yt;z.set(_.x+Math.sin(ae)*nn,ie,_.z+Math.cos(ae)*nn),Nt=(H?46:40)+(k.fov-(H?46:40))*Yt,z.y+=r.rev*.012*Math.sin(r.t*53),gn(z,ne.set(_.x,Zt,_.z),Ft,(H?-.1:-.04)+(k.ndcY-(H?-.1:-.04))*Yt,Nt,X),Ht=30,Gt=30,Me=!1;break}case"launchTop":{z.set(.02,H?8:6.9,_.z-1.2),X.set(0,0,z.z-.01),st.set(0,0,-1),Xt=!1,Nt=H?82:62,Ht=60,Gt=60,Me=!0,fe=!1;break}case"launchFront":{z.set(v.fix.x+3,.5,v.fix.z-7),Z(z,ne.set(_.x,.6,_.z),H?0:-.15,-.1,Nt,X),Nt=H?58:44,Ht=60,Gt=40,Me=!1,fe=!1;break}case"launchSide":{H?z.set(_.x+15,2.3,_.z+2.5):z.set(_.x+8.6,.85,_.z+3.5),Z(z,ne.set(_.x,.55,_.z-.3),H?.34:.42,-.02,Nt,X),Nt=H?60:50,Ht=14,Gt=18;break}case"fleetWide":{const Yt=-ze.fleet.sCenter;z.set(H?34:27,7,Yt+24),ne.set(0,2.2,Yt*.65+_.z*.35),Z(z,ne,0,H?.05:0,Nt,X),Nt=H?56:44,Ht=3,Gt=5,Me=!1,fe=!1;break}case"fleetJump":{const Yt=-ze.fleet.s0,ae=-(ze.fleet.lineup.find(La=>La.kind==="semi")||{s:ze.fleet.sCenter}).s,he=-ze.ramp.s1-3.5;z.set(H?3.2:3.4,1.15,-ul(-he,-(_.z+7.5),1.5));const nn=_.z-z.z,ie=_.x-z.x,wn=Math.max(2,Math.hypot(ie,nn)),Mn=Math.atan2(_.y+.9-z.y,wn),Te=Math.atan2(-z.y,Math.max(3,z.z-Yt)),_i=H?.42:.5,ds=.56,ps=Math.max(.12,Mn-Te);let Oi=.4;for(let La=0;La<24;La++)Oi*=ps/(Math.atan(_i*Oi)+Math.atan(ds*Oi));const Tn=Math.max(6,z.z-ae),ms=Math.tan(Math.atan(4.7/Tn))/t.aspect;Oi=be(Math.max(Oi,ms),Math.tan(24*Math.PI/360),Math.tan(72*Math.PI/360));const Bi=Te+Math.atan(ds*Oi),Fo=Math.atan2(.15-z.x,-(ae-z.z));X.set(z.x+Math.sin(Fo)*Math.cos(Bi)*20,z.y+Math.sin(Bi)*20,z.z-Math.cos(Fo)*Math.cos(Bi)*20),Nt=2*Math.atan(Oi)*180/Math.PI,Ht=40,Gt=40,Me=!1,fe=!1;break}case"fleetSide":{const Yt=-ze.fleet.sCenter,ae=un((Yt-_.z)/24);z.set((H?12.5:11)+3*ae,1.3,Yt+4+(_.z-Yt)*(.45+.4*ae)),ne.set(_.x,Math.max(1.6,_.y-.9-Math.max(0,4-_.y)*.25),_.z*(.85+.12*ae)+Yt*(.15-.12*ae)),Z(z,ne,0,0,Nt,X),Nt=H?64:50,Ht=6,Gt=10,Me=!1,fe=!1;break}case"landHero":{v.hz||(v.hz={z:r.mode==="jump"?-Pi(vi.fleetLand):_.z,x:r.mode==="jump"?0:_.x}),z.set(v.hz.x+Ci.dx,Ci.h,ul(v.hz.z+Ci.dz,_.z+Ci.dz,1)),Z(z,ne.set(_.x,Math.max(.6,_.y+.45),_.z),H?0:-.1,-.12,Nt,X),Nt=H?60:44,Ht=40,Gt=24,Me=!1;break}case"flipReveal":{const Yt=-Vt.s0-Cl*.5,ae=un((E-48)/12);z.set((H?46:38)-10*ae,8+3*ae,-Vt.s0+(H?40:32)-10*ae),ne.set(2,Vt.height*.5,Yt+(_.z-Yt)*.12*(1-ae)),Z(z,ne,0,0,Nt,X),Nt=H?52:40,Ht=4,Gt=4,Me=!1,fe=!1;break}case"climbChase":{lo(Math.max(Vt.s0-30,r.s-8.5),vt),z.copy(vt.pos).addScaledVector(vt.up,1.9+Zt),vt.pos.z>-Vt.s0?z.x=_.x:z.x+=eo,st.copy(vt.up).add(r.up).normalize(),Xt=!1,ne.copy(_).addScaledVector(r.up,Zt),gn(z,ne,st,-.12,Nt+4,X),Nt+=4,Ht=26,Gt=30,fe=!1;break}case"flipLip":{z.set(Vt.xLand*.75+4,Vt.height+3.5,Vt.zLip+9),Z(z,ne.set(_.x,_.y,_.z),0,0,Nt,X),Nt=H?60:48,Ht=3,Gt=14,Me=!1,fe=!1;break}case"flipOrbit":{const Yt=be((r.t-Rs+.05)/(yr-Rs+.05),0,1),ae=un(Yt);Nt=H?54:40;const he=Math.tan(Nt*Math.PI/360),nn=H?5.6/(2*he*t.aspect):4.9/he,ie=-.55+1.75*ae;z.set(_.x+Math.cos(ie)*nn,_.y+.35-2.4*Math.sin(Math.PI*.5*(.4+ae)),_.z+Math.sin(ie)*nn),Z(z,ne.set(_.x,_.y+.4,_.z),0,H?-.05:0,Nt,X),Ht=60,Gt=60,Me=!0,fe=!1;break}case"flipDescent":{const Yt=Vt.xTouch??Vt.xLand,ae=Vt.zLand;z.set(Yt+(H?15:13),2.2,ae-6.5);const he=_.x-z.x,nn=_.z-z.z,ie=Math.max(3,Math.hypot(he,nn));z.y=be(_.y*.5,2.2,10.5);const wn=Math.atan2(_.y+1.2-z.y,ie),Mn=Math.max(0,_.y-6.5),Te=_.y>6.5?ie:Math.max(3,Math.hypot(Yt-z.x,ae-z.z)-2.5),_i=Math.atan2(Mn-z.y,Te),ds=H?.42:.52,ps=.5,Oi=Math.max(.15,wn-_i);let Tn=.5;for(let Fo=0;Fo<24;Fo++)Tn*=Oi/(Math.atan(ds*Tn)+Math.atan(ps*Tn));Tn=be(Tn,Math.tan(26*Math.PI/360),Math.tan(76*Math.PI/360));const ms=_i+Math.atan(ps*Tn),Bi=Math.atan2(_.x*.6+Yt*.4-z.x,-(_.z*.6+ae*.4-z.z));X.set(z.x+Math.sin(Bi)*Math.cos(ms)*20,z.y+Math.sin(ms)*20,z.z-Math.cos(Bi)*Math.cos(ms)*20),Nt=2*Math.atan(Tn)*180/Math.PI,Ht=30,Gt=20,Me=!1,fe=!1;break}case"flipClimb":{z.set(eo+4.2,.9,-Vt.s0+(H?7:5.5)),ne.set(.6,Vt.height*.62,-Vt.s0-Cl*.62),ne.lerp(ye.set(_.x,_.y+.6,_.z),.25),Z(z,ne,H?0:.1,0,Nt,X),Nt=H?74:60,Ht=30,Gt=6,Me=!1,fe=!1;break}case"flipSide":{const Yt=-Vt.s0-Cl*.62,ae=H?38:31;z.set(Vt.xLand+ae,7.5,Yt+2);const he=r.mode==="drive"?.08:.12;ne.set(_.x*he+2*(1-he),Math.max(1.5,_.y)*he+Vt.height*.55*(1-he),_.z*he+Yt*(1-he)),Z(z,ne,0,0,Nt,X),Nt=H?54:42,Ht=3,Gt=8,Me=!1,fe=!1;break}case"flipHero":{const Yt=Vt.xTouch??Vt.xLand;z.set(Yt+Ci.dx,Ci.h,ul(Vt.zLand+Ci.dz,_.z+Ci.dz,1)),Nt=H?60:44,Z(z,ne.set(_.x,Math.max(.6,_.y+.45),_.z),H?0:-.1,-.1,Nt,X),Ht=40,Gt=16,Me=!1;break}case"megaLaunch":{z.set(_.x+(H?18:15),3+v.carYs*.55,_.z-4),Z(z,ne.set(_.x,v.carYs+.5,_.z),0,0,Nt,X),Nt=H?60:48,Ht=8,Gt=16,fe=!1;break}case"megaChase":{z.set(ls+(H?25:21),v.carYs+.6,_.z-(H?2.5:4)),Z(z,ne.set(_.x,v.carYs*.6+.4,_.z-(H?2:4)),H?0:-.1,.12,Nt,X),Nt=H?50:40,we+=me*2,Ht=9,Gt=14,fe=!1;break}case"megaWide":{const Yt=Jt[Jt.length-1],ae=Yt.vehicles.find(nn=>nn.kind==="semi")||Yt.vehicles[Math.floor(Yt.vehicles.length/2)],he=Vt.zLand-(ae.s-Vt.sLip);z.set(ls+(H?22:20),2.6,he+1),Z(z,ne.set(ls,5.2,he),0,H?-.12:-.15,Nt,X),Nt=H?54:40,Ht=3,Gt=5,Me=!1,fe=!1;break}case"megaLand":{v.hz||(v.hz={z:_.z-16,x:_.x}),z.set(v.hz.x+4.2,.7,ul(v.hz.z,_.z-8.5,1)),Z(z,ne.set(_.x,Math.max(.6,_.y*.75+.5),_.z),H?0:-.1,-.1,Nt,X),Nt=H?62:46,Ht=40,Gt=20,Me=!1;break}case"finish":{const Yt=un((E-128)/8),ae=.15+.6*Yt+.25*(1-Math.exp(-Math.max(0,E-136)/14)),he=k.D+((H?9:7.6)-k.D)*Yt,nn=v.carYs;z.set(_.x-Math.sin(ae)*he,nn+k.H+Zt-(k.H-.75)*Yt,_.z+Math.cos(ae)*he),Nt=k.fov+((H?60:46)-k.fov)*Yt;const ie=pe+((H?-.6:-.5)-pe)*un((E-134.5)/3);gn(z,ne.set(_.x,_.y+Zt,_.z),Ft,ie,Nt,X),Ht=10,Gt=16;break}case"chase":default:{let Yt=k.D+ge,ae=k.H;if(r.section==="build"){const nn=un((E-88)/8);Yt*=1+.28*nn,ae+=1.1*nn}const he=r.airborne?v.carYs:_.y;z.set(_.x-r.xOff*.45,he+ae+Zt,_.z+Yt),ne.set(_.x-r.xOff*.3,he+Zt,_.z),st.set(0,1,0),z.y-=wt*.25,gn(z,ne,st,pe,Nt+I*6,X),Ht=12,Gt=18;break}}Xt&&st.set(0,1,0),y||!v.initialized||Me!==v.rel?(v.rel=Me,v.off.copy(z).sub(_),v.lookOff.copy(X).sub(_),v.pos.copy(z),v.look.copy(X),v.up.copy(st),v.initialized=!0):Me?(v.off.lerp(z.sub(_),li(Ht,L)),v.lookOff.lerp(X.sub(_),li(Gt,L)),v.pos.copy(_).add(v.off),v.look.copy(_).add(v.lookOff),v.up.lerp(st,li(Xt?6:30,L)).normalize()):(v.pos.lerp(z,li(Ht,L)),v.look.lerp(X,li(Gt,L)),v.up.lerp(st,li(Xt?6:30,L)).normalize()),x!=="climbChase"&&(v.pos.y=Math.max(v.pos.y,.35)),v.shake*=Math.exp(-L*4.5),v.punch*=Math.exp(-L*3.2);const De=fe?.015+I*.04:0,Ce=v.shake*.2,en=r.t*23;if(t.position.copy(v.pos),t.position.x+=Ms(en)*Ce+Ms(r.t*7.3+5)*De*.6,t.position.y+=Ms(en+17.3)*Ce*.8+Ms(r.t*9.1+11)*De+Ms(r.t*37+2)*De*.35,r.shiftPerfect&&xt>=0&&xt<2/60){const Yt=xt<.016666666666666666?1:-.6;t.position.y+=.09*Yt,t.position.x+=.05*Yt}t.up.copy(v.up),bt.lookAt(t.position,v.look,t.up),t.quaternion.setFromRotationMatrix(bt);const Xn=Ms(en*.5+40)*v.shake*.03+Ms(r.t*3.1+21)*De*.08+At*.02*(r.gear%2?1:-1);Xn&&t.rotateZ(Xn),x==="megaChase"&&t.rotateZ(be(r.vy/24,-1,1)*.03);const yn=x==="chase"?I*6:I*2,Ln=Nt+yn+v.punch*.6+(x==="chase"?12*re:0);if(v.fov=y||!v.fovInit?Ln:v.fov+(Ln-v.fov)*li(9,L),v.fovInit=!0,t.fov=v.fov+we,v.blend){const Yt=v.blend,ae=(r.t-Yt.t0)/Yt.dur;if(ae>=1||ae<0)v.blend=null;else{const he=un(ae);ai.copy(_).add(Yt.off),t.position.lerpVectors(ai,t.position,he),t.position.y<.35&&x!=="climbChase"&&(t.position.y=.35),Ji.copy(_).add(Yt.lookOff).lerp(v.look,he),j.copy(Yt.up).lerp(v.up,he),j.lengthSq()<1e-4&&j.copy(v.up),t.up.copy(j.normalize()),bt.lookAt(t.position,Ji,t.up),t.quaternion.setFromRotationMatrix(bt),t.fov=Yt.fov+(t.fov-Yt.fov)*he}}t.updateProjectionMatrix(),r.cam.shot=x,r.cam.cut=y,r.cam.fov=t.fov,r.cam.shake=v.shake,r.cam.punch=v.punch+we,r.cam.roll=Math.atan2(v.up.x,v.up.y);{t.updateMatrixWorld(),Ot.copy(r.pos).addScaledVector(r.up,.55).project(t);const ae=2.4/(Math.max(.5,t.position.distanceTo(r.pos))*Math.tan(t.fov*Math.PI/360));r.cam.car={x:Ot.x,y:Ot.y,r:Math.min(2,ae),on:Ot.z<1&&Math.abs(Ot.x)<1.3&&Math.abs(Ot.y)<1.3}}if(!h.muted&&s)try{s.setSpeed&&s.setSpeed(I)}catch{}}let qt=0;return h.reset=()=>{h.state=r=f0(),mt.length=0;for(const L of Jt)delete L._hit;if(S(),qt=0,_t(1/60),e&&typeof e.reset=="function")try{e.reset()}catch{}},h.update=(L,x)=>{L>0||(L=1/60),x===void 0&&(x=qt+L);const y=x-qt;if(y<=0)return _e(1/600),D(1/600),r;const _=Math.min(240,Math.max(1,Math.ceil(y/(1/120)))),I=y/_;for(let E=1;E<=_;E++)K(I,qt+I*E),_e(I);qt=x,D(y);try{n&&typeof n.setGameplayState=="function"&&n.setGameplayState(r)}catch(E){console.warn("[gameplay] world hook",E)}return r},h.seekTo=(L,x=1/60)=>{const y=h.muted;h.reset();for(let _=x;_<L+1e-9;_+=x)h.muted=y||_<L-1.5,h.update(x,Math.min(_,L));return qt<L&&h.update(L-qt,L),h.muted=y,r},h.trackFrame=lo,h.COURSE=ze,h.MOMENTS=vi,h.reset(),h}const H2=Object.freeze(Object.defineProperty({__proto__:null,BEAT:Fi,COURSE:ze,FLEET_DIMS:wo,G:pn,MOMENTS:vi,MPH:wa,SECTIONS:Bd,WINDOWS:Wn,beatToTime:rn,createGameplay:Qh,default:Qh,groundY:qs,sNom:Pi,sectionAt:kd,timeToBeat:oo,trackFrame:lo},Symbol.toStringTag,{value:"Module"})),G2=["semi","cybertruck","models","model3","modelx","modely"],Si=0,kl=1,mi=2,Dn=3,V2=4,m0=5,Es=6,gi=7,W2=8,X2=9,_r=10,Ll=11,fl=12,Pu=13,g0=14,fr=15,ea=16,q2=[[8421504,.3,.45,1,1],[263431,.08,0,0,.55],[723724,.3,.1,.6,.8],[1118740,.85,0,0,.35],[723724,.95,0,0,.12],[986897,.9,0,0,.18],[13817305,.26,.7,0,1],[3422012,.34,.75,.4,1],[7829371,.45,1,0,1],[11736091,.32,.1,.8,1],[15264492,.1,1,0,1],[12567238,.42,.85,0,1],[1118999,.08,.3,1,1],[460552,.95,0,0,.1],[14474456,.5,0,.3,1],[131587,.95,0,0,.05]],Y2=i=>(i+.5)/ea,lr={pearl:[15330023,.04,.3],black:[723982,.35,.3],deepblue:[2376830,.5,.28],red:[11014686,.3,.28],stealth:[4869459,.45,.3],quicksilver:[10725292,.6,.28],white:[15659250,.02,.32],gold:[11771772,.55,.3],graphite:[2369066,.45,.32]},rp={semi:["white"],cybertruck:["pearl"],models:["red","deepblue","pearl","quicksilver"],model3:["deepblue","pearl","red","stealth"],modelx:["pearl","quicksilver","deepblue"],modely:["quicksilver","gold","pearl","red","deepblue"]},v0={},To={model3:{L:4.72,W:1.85,H:1.44,R:.34,axles:[-1.43,1.44],tyreW:.235,rimRatio:.7,top:[[0,.47],[.025,.55],[.07,.615],[.14,.665],[.26,.715],[.45,.755],[.7,.795],[.93,.83],[1.2,.872],[1.32,.89],[1.5,1.03],[1.75,1.23],[2,1.375],[2.25,1.432],[2.5,1.44],[2.8,1.42],[3.1,1.33],[3.4,1.19],[3.62,1.085],[3.75,1.05],[4.1,1.03],[4.42,1.02],[4.56,1.005],[4.64,.95],[4.69,.85],[4.72,.64]],belt:[[0,.47],[.025,.545],[.07,.6],[.14,.64],[.3,.69],[.6,.745],[.93,.8],[1.3,.85],[2,.9],[3,.94],[3.6,.958],[4.2,.965],[4.56,.955],[4.64,.91],[4.69,.82],[4.72,.63]],rock:[[0,.29],[.06,.24],[.25,.18],[.6,.16],[1.4,.145],[3.4,.145],[4,.165],[4.5,.24],[4.72,.38]],nose:[.56,.8],tail:[.74,.55],n:3.5,lean:.45,tuckB:.07,tuckT:.075,bulge:.05,tm:.5,shoulderExp:1.7,glassTop:[[1.32,3.62]],glassSide:[[1.48,3.36]],pillars:[[2.3,2.4]],gaps:[[1.47,"b"],[2.35,"b"],[3.37,"b"],[1.3,"t"],[3.72,"t"]],zones:[[4.69,4.72,"KB",mi]],band:Si,beltCell:mi,mirrorD:1.56,plateY:.5,intake:[.36,.05],lamps:[{e:"front",head:!0,x:[.44,.86],y0:[.676,.652],y1:[.686,.668],lens:.014},{e:"rear",x:[.5,.9],y0:[.902,.905],y1:[.92,.926],lens:.02},{e:"rear",x:[.62,.9],y0:[.848,.842],y1:[.862,.858]},{e:"rear",x:[.86,.9],y0:[.846,.846],y1:[.92,.922]}],wheel:{n:5,sw:.05,cell:gi,cover:!0,accent:Es,caliper:gi}},models:{L:4.97,W:1.96,H:1.44,R:.36,axles:[-1.5,1.46],tyreW:.245,rimRatio:.7,top:[[0,.49],[.025,.57],[.08,.635],[.16,.68],[.3,.725],[.55,.77],[.8,.805],[.985,.83],[1.2,.862],[1.45,.885],[1.65,1.02],[1.95,1.25],[2.3,1.405],[2.65,1.44],[3,1.428],[3.35,1.365],[3.7,1.24],[4.02,1.1],[4.32,1],[4.7,.965],[4.86,.955],[4.93,.87],[4.97,.64]],belt:[[0,.49],[.025,.565],[.08,.62],[.16,.655],[.35,.705],[.65,.76],[.985,.81],[1.45,.855],[2.2,.9],[3.2,.93],[4,.95],[4.6,.95],[4.86,.94],[4.93,.86],[4.97,.63]],rock:[[0,.3],[.06,.25],[.25,.2],[.6,.17],[1.5,.15],[3.6,.15],[4.2,.175],[4.75,.25],[4.97,.4]],nose:[.56,.85],tail:[.76,.6],n:3.4,lean:.48,tuckB:.07,tuckT:.065,bulge:.042,tm:.52,shoulderExp:1.8,glassTop:[[1.45,4.3]],glassSide:[[1.62,3.82]],pillars:[[2.52,2.62],[3.5,3.58]],gaps:[[1.62,"b"],[2.57,"b"],[3.57,"b"],[1.43,"t"],[4.32,"t"]],zones:[[4.93,4.97,"KB",mi]],band:Si,beltCell:_r,mirrorD:1.72,plateY:.51,intake:[.38,.05],lamps:[{e:"front",head:!0,x:[.44,.88],y0:[.685,.65],y1:[.705,.708],lens:.015},{e:"rear",x:[.42,.92],y0:[.86,.83],y1:[.905,.915],lens:.012}],wheel:{n:5,pair:.17,sw:.036,cell:Es,accent:gi,caliper:X2}},modelx:{L:5.06,W:2,H:1.68,R:.38,axles:[-1.5,1.5],tyreW:.265,rimRatio:.66,top:[[0,.53],[.025,.62],[.08,.69],[.18,.75],[.35,.805],[.6,.86],[.85,.915],[1.05,.953],[1.15,.97],[1.4,1.18],[1.7,1.42],[2,1.58],[2.4,1.665],[2.9,1.68],[3.4,1.675],[3.85,1.635],[4.25,1.52],[4.6,1.34],[4.84,1.21],[4.95,1.15],[5,1.1],[5.04,.92],[5.06,.68]],belt:[[0,.53],[.025,.615],[.08,.675],[.18,.725],[.4,.785],[.75,.86],[1.15,.94],[2,1.01],[3.2,1.05],[4.2,1.065],[4.8,1.06],[4.97,1.03],[5.03,.9],[5.06,.67]],rock:[[0,.35],[.06,.3],[.3,.24],[.7,.22],[1.6,.21],[3.5,.21],[4.4,.235],[4.85,.31],[5.06,.44]],nose:[.58,.85],tail:[.76,.55],n:3.6,lean:.4,tuckB:.07,tuckT:.065,bulge:.042,tm:.5,shoulderExp:1.8,glassTop:[[1.15,2.8],[4.25,4.86]],glassSide:[[1.32,4.18]],pillars:[[2.25,2.33],[3.55,3.63]],gaps:[[1.33,"b"],[2.29,"b"],[3.59,"bt"],[1.13,"t"],[2.82,"t"],[4.22,"t"]],falcon:[2.82,4.22,.19],zones:[[5.02,5.06,"KB",mi]],band:Si,beltCell:_r,mirrorD:1.45,plateY:.55,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[.48,.9],y0:[.725,.7],y1:[.748,.755],lens:.016},{e:"rear",x:[.45,.94],y0:[.94,.925],y1:[.98,.99],lens:.012}],wheel:{n:6,pair:.12,sw:.028,cell:Es,caliper:gi}},modely:{L:4.75,W:1.92,H:1.62,R:.37,axles:[-1.45,1.44],tyreW:.255,rimRatio:.68,top:[[0,.51],[.025,.6],[.07,.665],[.15,.715],[.3,.76],[.55,.805],[.75,.835],[.925,.862],[1.2,.905],[1.3,.92],[1.5,1.08],[1.8,1.33],[2.1,1.53],[2.4,1.605],[2.7,1.62],[3,1.6],[3.35,1.53],[3.75,1.41],[4.1,1.27],[4.4,1.16],[4.55,1.1],[4.65,1.02],[4.71,.88],[4.75,.66]],belt:[[0,.51],[.025,.595],[.07,.65],[.15,.69],[.35,.74],[.65,.79],[.925,.835],[1.3,.9],[2.2,.96],[3.3,1],[4.2,1.03],[4.55,1.03],[4.65,.98],[4.71,.85],[4.75,.65]],rock:[[0,.34],[.06,.28],[.3,.225],[.6,.21],[1.4,.2],[3.3,.2],[4,.22],[4.5,.29],[4.75,.42]],nose:[.5,.92],tail:[.64,.64],n:3.2,lean:.5,tuckB:.08,tuckT:.085,bulge:.052,tm:.46,shoulderExp:1.6,glassTop:[[1.3,4.3]],glassSide:[[1.46,3.74]],pillars:[[2.32,2.42]],aftCell:Si,gaps:[[1.45,"b"],[2.37,"b"],[3.75,"b"],[1.28,"t"],[4.32,"t"]],zones:[[4.71,4.75,"KB",mi]],band:Si,beltCell:mi,mirrorD:1.52,plateY:.535,intake:[.4,.05],lamps:[{e:"front",head:!0,x:[0,.88],y0:[.716,.706],y1:[.735,.728],lens:.01},{e:"front",head:!0,x:[.55,.84],y0:[.64,.635],y1:[.656,.67],lens:.012},{e:"rear",x:[0,.9],y0:[.962,.955],y1:[.973,.968],lens:.008},{e:"rear",x:[.55,.9],y0:[.9,.885],y1:[.935,.94],lens:.012}],wheel:{n:5,pair:.2,sw:.034,cell:gi,accent:Es,caliper:gi}},cybertruck:{L:5.68,W:2.2,H:1.79,R:.44,axles:[-1.84,1.84],tyreW:.305,rimRatio:.58,linear:!0,flat:!0,ct:!0,top:[[0,1.12],[.03,1.13],[2.75,1.79],[5.64,1.21],[5.68,1.2]],belt:[[0,1.12],[5.68,1.12]],rock:[[0,.64],[.24,.48],[5.42,.48],[5.68,.64]],nose:[.9,.22],tail:[.95,.12],tumble:.9,tuckB:.07,tuckT:0,shoulder:.012,bulge:0,inset:.05,arch:{top:1,a0:.37,a1:.66},glassTop:[[1.45,3.72]],glassSide:[[1.6,3.58]],pillars:[[2.62,2.72]],pillarCell:Ll,gaps:[[1.6,"b"],[2.67,"b"],[3.6,"b"],[1.42,"t"],[.1,"t"]],zones:[[3.82,5.6,"R",Dn]],band:Dn,bandH:.09,body:Ll,beltCell:Ll,mirrorD:1.62,plateY:.8,lamps:[{e:"front",cap:!0,head:!0,y0:1.068,y1:1.118,inset:0,gain:2.4},{e:"rear",cap:!0,y0:1.14,y1:1.19,inset:0,gain:1.5}],wheel:{n:6,sw:.05,cell:Es,cover:!0,caliper:gi}},semi:{L:7.1,W:2.6,H:3.85,R:.52,axles:[-2.4,1.7,3],tyreW:.32,dualW:.6,rimRatio:.56,cabL:4.1,top:[[0,.45],[.02,.68],[.05,.9],[.1,1.08],[.2,1.3],[.33,1.5],[.5,1.66],[.8,2.04],[1.1,2.44],[1.38,2.86],[1.7,3.22],[2.2,3.58],[2.8,3.77],[3.4,3.84],[4.1,3.85]],belt:[[0,.45],[.02,.68],[.05,.9],[.1,1.08],[.2,1.3],[.33,1.5],[.5,1.66],[.75,1.7],[1.05,1.76],[1.5,1.82],[2.5,1.86],[4.1,1.9]],rock:[[0,.42],[.3,.4],[4.1,.42]],winTop:[[0,9],[1.3,9],[1.52,2.82],[2.52,2.72],[4.1,2.72]],nose:[.86,.62],tail:[1,.01],n:5,lean:.08,tuckB:.05,tuckT:.03,shoulder:.004,bulge:0,inset:.03,taper:[1.1,.06],glassTop:[[.5,1.38]],glassSide:[[.5,2.52]],pillars:[],pillarCell:mi,gaps:[[1.74,"b"],[2.54,"b"]],zones:[[0,.03,"KBS",Dn]],band:Dn,bandH:.36,bandAbs:!0,beltCell:mi,mirrorD:.75,plateY:.53,archPad:.025,lamps:[{e:"front",head:!0,x:[0,.93],y0:[1,1],y1:[1.052,1.05],lens:.035,gain:1.9}],wheel:{semi:!0,caliper:gi}}};for(const i of G2){const t=To[i];t.L,t.W,t.H,t.R,t.axles.slice(),lr[rp[i][0]][0]}const dr=(i,t,e)=>Math.max(t,Math.min(e,i)),Rn=(i,t,e)=>i+(t-i)*e,x0=i=>Math.sqrt(1-(1-i)*(1-i));function dl(i,t){const e=i.length,n=i.map(l=>l[0]),s=i.map(l=>l[1]),o=[],a=new Array(e).fill(0);for(let l=0;l<e-1;l++)o[l]=(s[l+1]-s[l])/(n[l+1]-n[l]);if(!t&&e>2){a[0]=o[0],a[e-1]=o[e-2];for(let l=1;l<e-1;l++)a[l]=o[l-1]*o[l]<=0?0:(o[l-1]+o[l])/2;for(let l=0;l<e-1;l++){if(o[l]===0){a[l]=a[l+1]=0;continue}const c=a[l]/o[l],h=a[l+1]/o[l],r=c*c+h*h;if(r>9){const u=3/Math.sqrt(r);a[l]=u*c*o[l],a[l+1]=u*h*o[l]}}}return l=>{if(l<=n[0])return s[0];if(l>=n[e-1])return s[e-1];let c=0;for(;c<e-2&&l>n[c+1];)c++;const h=n[c+1]-n[c],r=(l-n[c])/h;if(t||e<=2)return Rn(s[c],s[c+1],r);const u=r*r,f=u*r;return(2*f-3*u+1)*s[c]+(f-2*u+r)*h*a[c]+(-2*f+3*u)*s[c+1]+(f-u)*h*a[c+1]}}const qc=(i,t)=>{for(const e of i)if(t>=e[0]&&t<=e[1])return!0;return!1},co=new P,Hl=new P,Gl=new P,es=new P;class Eo{constructor(t=!1){this.p=[],this.n=[],this.uv=[],this.c=t?[]:null}vert(t,e,n,s){this.p.push(t[0],t[1],t[2]),this.n.push(e[0],e[1],e[2]),this.c?this.c.push(s[0],s[1],s[2]):this.uv.push(Y2(n),.5)}tri(t,e,n,s,o,a){if(co.fromArray(t),Hl.fromArray(e).sub(co),Gl.fromArray(n).sub(co),es.crossVectors(Hl,Gl),es.lengthSq()<1e-14)return;if(o&&es.dot(op.fromArray(o))<0){const c=e;e=n,n=c,es.negate()}es.normalize();const l=[es.x,es.y,es.z];this.vert(t,l,s,a),this.vert(e,l,s,a),this.vert(n,l,s,a)}quad(t,e,n,s,o,a,l){this.tri(t,e,n,o,a,l),this.tri(t,n,s,o,a,l)}addGeo(t,e,n,s){const o=t.index?t.toNonIndexed():t;n&&o.applyMatrix4(n);const a=o.attributes.position,l=o.attributes.normal;for(let c=0;c<a.count;c++)this.vert([a.getX(c),a.getY(c),a.getZ(c)],[l.getX(c),l.getY(c),l.getZ(c)],e,s);t.dispose(),o!==t&&o.dispose()}box(t,e,n,s,o,a,l,c=0,h=0,r=0,u){this.addGeo(new Be(t,e,n),l,Cn(s,o,a,c,h,r),u)}mirroredX(){const t=new Eo(!!this.c);for(let e=0;e<this.p.length/9;e++)for(const n of[0,2,1]){const s=e*3+n;t.p.push(-this.p[s*3],this.p[s*3+1],this.p[s*3+2]),t.n.push(-this.n[s*3],this.n[s*3+1],this.n[s*3+2]),this.c?t.c.push(this.c[s*3],this.c[s*3+1],this.c[s*3+2]):t.uv.push(this.uv[s*2],this.uv[s*2+1])}return t}append(t){return this.p.push(...t.p),this.n.push(...t.n),this.c?this.c.push(...t.c):this.uv.push(...t.uv),this}build(){const t=new Ke;return t.setAttribute("position",new Se(this.p,3)),t.setAttribute("normal",new Se(this.n,3)),this.c?t.setAttribute("color",new Se(this.c,3)):t.setAttribute("uv",new Se(this.uv,2)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const op=new P;new Ie;const $2=new Qn,K2=new xi;new P(1,1,1);const j2=new P;function Cn(i,t,e,n=0,s=0,o=0,a=1,l=1,c=1){return new Ie().compose(j2.set(i,t,e),$2.setFromEuler(K2.set(n,s,o)),new P(a,l,c))}const Vl=5,pi=6,ap=3,Wl=4,pa=5+Vl,Ra=pa+pi,ic=Ra+1,Uo=[];Uo.push("U","L","K","B");for(let i=0;i<Vl;i++)Uo.push("S");Uo.push("E");for(let i=0;i<pi;i++)Uo.push(i<pi/2?"G":"R");function Z2(i){const t=To[i],e=dl(t.top,t.linear),n=dl(t.belt,t.linear),s=dl(t.rock,t.linear),o=t.L,a=t.W/2,l=t.axles.map(R=>R+o/2),c=t.tyreW,h=t.R+(t.archPad??.035),r=t.R+.01,u=t.winTop?dl(t.winTop,!0):null,f=R=>{let B=-1/0;return l.forEach((M,C)=>{if(i==="semi"&&C>0)return;const N=Math.abs(R-M);t.arch?N<t.arch.a0?B=Math.max(B,t.arch.top):N<t.arch.a1&&(B=Math.max(B,t.arch.top-(N-t.arch.a0)/(t.arch.a1-t.arch.a0)*(t.arch.top-s(R)))):N<h&&(B=Math.max(B,r+Math.sqrt(h*h-N*N)))}),B},d=t.cabL??o,g=R=>{const B=Rn(t.nose[0],1,x0(dr(R/t.nose[1],0,1))),M=Rn(t.tail[0],1,x0(dr((d-R)/t.tail[1],0,1)));return Math.min(B,M)},v=R=>{let B=0;for(const M of l){const C=Math.abs(R-M)/(h+(t.bulgeLen??.42));C<1&&(B=Math.max(B,Math.pow(1-C*C,1.5)))}return B*(t.bulge||0)},m=R=>R<.15?Rn(.55,1,R/.15):R<.62?1:Rn(1,.15,(R-.62)/.38),p=a-c-.07-(t.inset||0);function b(R){const B=v(R),M=(t.bulge||0)*.5,C=(a-M)*g(R),N=e(R),$=Math.min(n(R),N),et=s(R),pt=Math.min(et+.025,$-.1);let Mt=Math.max(et,f(R));Mt=Math.min(Mt,$-.06);const lt=Math.min(p,C-.08),gt=Math.max(0,N-$),nt=t.bandAbs?Math.min(Math.max(Mt+.04,et+t.bandH),$-.035):Math.min(Mt+(t.bandH||.06),$-.035),Ct=t.tuckB,$t=t.tuckT,Qt=.42,se=[[0,pt],[lt,pt],[lt,Math.max(pt,Mt)],[C-Ct+B*.5,Mt],[C-Ct*(t.ct?.88:.55)+B*.55,nt]];for(let mt=1;mt<=Vl;mt++){const ht=mt/Vl,Kt=Rn(nt,$-(t.ct?0:.012),ht);let Bt;if(t.ct)Bt=Rn(C-Ct*.88,C,ht);else{const Jt=t.tm??Qt;Bt=ht<Jt?C-Ct*.55*Math.pow(1-ht/Jt,2):C-$t*Math.pow((ht-Jt)/(1-Jt),t.shoulderExp??2),Bt+=B*m(ht)}se.push([Bt,Kt])}const Ee=C-$t-(t.shoulder??.018)+B*.1;if(se.push([Ee,$]),t.ct){const mt=Math.max(Ee-t.tumble*gt,.2);for(let ht=1;ht<=pi/2;ht++){const Kt=ht/(pi/2);se.push([Rn(Ee,mt,Kt),Rn($,N,Kt)])}for(let ht=1;ht<=pi/2;ht++){const Kt=ht/(pi/2);se.push([Rn(mt,0,Kt),N])}}else{const mt=2/t.n;let ht=Math.PI/4;if(u&&gt>1e-4){const Kt=dr((Math.min(u(R),$+.97*gt)-$)/gt,0,1);ht=dr(Math.asin(Math.pow(Kt,t.n/2)),.06,Math.PI/2-.06)}for(let Kt=1;Kt<=pi;Kt++){const Bt=Kt<=pi/2?Kt/(pi/2)*ht:ht+(Kt-pi/2)/(pi/2)*(Math.PI/2-ht),Jt=Math.pow(Math.cos(Bt),mt),xe=Math.pow(Math.sin(Bt),mt);se.push([Math.max(0,(Ee-t.lean*gt*xe)*Jt),$+gt*xe])}se[Ra][0]=0}if(t.taper){const mt=t.taper[0],ht=t.H;for(const Kt of se)Kt[0]*=1-t.taper[1]*dr((Kt[1]-mt)/(ht-mt),0,1)}return se}const T=[],S=i==="semi"?.1:.085;for(let R=0;R<=d+1e-6;R+=S)T.push(R);for(let R=0;R<=.24;R+=.03)T.push(R),T.push(d-R);T.push(d),l.forEach((R,B)=>{if(!(i==="semi"&&B>0))if(t.arch)for(const M of[0,t.arch.a0,t.arch.a1,(t.arch.a0+t.arch.a1)/2,t.arch.a0*.5])T.push(R-M,R+M);else{for(let M=0;M<=16;M++){const C=h*Math.cos(M/16*Math.PI);T.push(R+C)}T.push(R-h-.004,R+h+.004)}});for(const R of[...t.top,...t.belt,...t.rock])T.push(R[0]);for(const R of[...t.glassTop,...t.glassSide,...t.pillars])T.push(R[0],R[1]);for(const R of t.zones)T.push(R[0],R[1]);for(const R of t.gaps)T.push(R[0]-.006,R[0]+.006);const O=[...new Set(T.filter(R=>R>=0&&R<=d).map(R=>Math.round(R*2e3)/2e3))].sort((R,B)=>R-B).map(R=>({d:R,z:R-o/2,pts:b(R)}));return{s:t,L:o,hw:a,rings:O,dAx:l,top:e,belt:n,rock:s,cabL:d}}function _0(i,t,e){const n=Uo[t];if(n==="U"||n==="L")return Pu;for(const c of i.zones)if(e>=c[0]&&e<=c[1]&&c[2].includes(n))return c[4];for(const c of i.gaps)if(Math.abs(e-c[0])<.0062&&(c[1].includes("b")&&"KBSE".includes(n)||c[1].includes("t")&&"GR".includes(n)))return fr;const s=i.body??Si,o=qc(i.glassTop,e),a=qc(i.glassSide,e),l=qc(i.pillars,e);return n==="G"?a&&!l?kl:o&&!a&&i.aftCell!=null&&e>i.glassSide[i.glassSide.length-1][1]?i.aftCell:o||a&&l?i.pillarCell??mi:s:n==="R"?o?kl:s:n==="E"?a||o?i.beltCell??mi:s:n==="K"||n==="B"?i.band??s:s}const hn=2*ic-2,tu=i=>i<=Ra?i:hn-i;function J2(i,t){const e=tu(t),n=i.pts[e];return[t<=Ra?n[0]:-n[0],n[1],i.z]}const Q2={U:0,L:1,K:2,B:3,S:4,E:4,G:5,R:5};function ty(i){const{s:t,rings:e}=i,n=e.length,s=new Float32Array(n*hn*3);for(let b=0;b<n;b++)for(let T=0;T<hn;T++)s.set(J2(e[b],T),(b*hn+T)*3);const o=(b,T)=>[s[(b*hn+T)*3],s[(b*hn+T)*3+1],s[(b*hn+T)*3+2]],a=b=>Math.min(tu(b),tu((b+1)%hn)),l=(n-1)*hn,c=new Float32Array(l*3),h=new Int8Array(hn);for(let b=0;b<hn;b++)h[b]=Q2[Uo[a(b)]]??4;const r=new P,u=new P,f=new P;for(let b=0;b<n-1;b++)for(let T=0;T<hn;T++){const S=(T+1)%hn;r.fromArray(o(b+1,S)).sub(f.fromArray(o(b,T))),u.fromArray(o(b,S)).sub(f.fromArray(o(b+1,T))),r.cross(u),c.set([r.x,r.y,r.z],(b*hn+T)*3)}{const b=Math.floor(n/2),T=Wl+3;r.fromArray(o(b,T)),u.fromArray(o(b,(T+1)%hn)).sub(r),f.fromArray(o(b+1,(T+1)%hn)).sub(r);const S=new P().crossVectors(u,f),F=new P().fromArray(c,(b*hn+T)*3);if(S.dot(F)<0)for(let O=0;O<c.length;O++)c[O]=-c[O]}const d=Math.cos(ui.degToRad(t.crease??40)),g=new P,v=new P,m=new P,p=new Eo;for(let b=0;b<n-1;b++){const T=(e[b].d+e[b+1].d)/2;for(let S=0;S<hn;S++){const F=(S+1)%hn,O=_0(t,a(S),T);g.fromArray(c,(b*hn+S)*3);const R=g.length();if(R<1e-10)continue;g.divideScalar(R);const B=($,et)=>{if(t.flat)return[g.x,g.y,g.z];m.set(0,0,0);for(const pt of[$-1,$])if(!(pt<0||pt>n-2))for(const Mt of[(et-1+hn)%hn,et]){if(h[Mt]!==h[S])continue;v.fromArray(c,(pt*hn+Mt)*3);const lt=v.length();lt<1e-10||v.dot(g)/lt<d||m.add(v)}return m.lengthSq()<1e-14&&m.copy(g),m.normalize(),[m.x,m.y,m.z]},M=[[b,S],[b,F],[b+1,F],[b+1,S]],C=M.map($=>B($[0],$[1])),N=M.map($=>o($[0],$[1]));for(const $ of[[0,1,2],[0,2,3]])if(r.fromArray(N[$[0]]),u.fromArray(N[$[1]]).sub(r),f.fromArray(N[$[2]]).sub(r),!(u.cross(f).lengthSq()<1e-14))for(const et of $)p.vert(N[et],C[et],O)}}for(const[b,T]of[[e[0],[0,0,-1]],[e[n-1],[0,0,1]]])for(let S=0;S<ic-1;S++){const F=b.pts[S],O=b.pts[S+1];if(Math.abs(O[1]-F[1])<1e-5&&Math.abs(O[0]-F[0])<1e-5)continue;const R=_0(t,S,b.d);p.quad([-F[0],F[1],b.z],[F[0],F[1],b.z],[O[0],O[1],b.z],[-O[0],O[1],b.z],R===Pu?Dn:R,T)}return p}function eu(i,t){let e=-1/0;for(let n=ap;n<ic-1;n++){const s=i.pts[n],o=i.pts[n+1],a=Math.min(s[0],o[0]),l=Math.max(s[0],o[0]);if(t<a-1e-6||t>l+1e-6)continue;const c=l-a<1e-6?1:(t-s[0])/(o[0]-s[0]);e=Math.max(e,Rn(s[1],o[1],dr(c,0,1)))}return e}function Ys(i,t,e,n){const s=i.rings,o=s.length;let a=null;for(let l=0;l<o;l++){const c=s[n?o-1-l:l],h=eu(c,t);if(h>=e){if(!a||a.h===-1/0)return[t,e,c.z];const r=(e-a.h)/(h-a.h);return[t,e,Rn(a.r.z,c.z,r)]}a={r:c,h}}return null}function y0(i,t,e,n){const o=Ys(i,t+.01,e,n),a=Ys(i,Math.max(0,t-.01),e,n),l=Ys(i,t,e+.01,n),c=Ys(i,t,e-.01,n);if(!o||!a||!l||!c)return[0,0,n?1:-1];const h=new P(o[0]-a[0],o[1]-a[1],o[2]-a[2]),r=new P(l[0]-c[0],l[1]-c[1],l[2]-c[2]),u=h.cross(r).normalize();return u.z*(n?1:-1)<0&&u.negate(),[u.x,u.y,u.z]}function ma(i,t){for(let e=ap;e<ic-1;e++){const n=i.pts[e],s=i.pts[e+1];if((t-n[1])*(t-s[1])<=0&&Math.abs(s[1]-n[1])>1e-6)return Rn(n[0],s[0],(t-n[1])/(s[1]-n[1]))}return i.pts[Wl+2][0]}function nu(i,t,e,n,s,o=0){const a=e.e==="rear",l=14,c=[];for(let r=0;r<=l;r++){const u=r/l,f=Rn(e.x[0],e.x[1],u)*t.hw,d=Rn(e.y0[0],e.y0[1],u)-o,g=Rn(e.y1[0],e.y1[1],u)+o,v=Ys(t,f,d,a),m=Ys(t,f,g,a);if(!v||!m)continue;const p=y0(t,f,d,a),b=y0(t,f,g,a);c.push([v.map((T,S)=>T+p[S]*s),m.map((T,S)=>T+b[S]*s),p])}const h=Array.isArray(n);for(let r=0;r<c.length-1;r++){const[u,f,d]=c[r],[g,v]=c[r+1];for(const m of[1,-1]){if(m<0&&e.x[0]<=.001&&r<0)continue;const p=T=>[T[0]*m,T[1],T[2]],b=[d[0]*m,d[1],d[2]];h?i.quad(p(u),p(g),p(v),p(f),0,b,n):i.quad(p(u),p(g),p(v),p(f),n,b)}}}function ey(i,t,e){const{s:n,L:s,hw:o,rings:a}=t,l=a[0],c=a[a.length-1];for(const h of n.lamps)if(!h.skip)if(h.cap){const r=h.e==="rear"?c:l,u=h.e==="rear"?1:-1,f=h.x?h.x[1]:ma(r,(h.y0+h.y1)/2)-(h.inset||0),d=h.x?h.x[0]:-f,g=h.y1-h.y0+.03;if(h.x)for(const v of[1,-1])i.box(f-d+.04,g,.012,v*(d+f)/2,(h.y0+h.y1)/2,r.z+u*.004,fl);else i.box(2*f+.02,g,.012,0,(h.y0+h.y1)/2,r.z+u*.004,fl)}else h.lens&&nu(i,t,h,fl,.003,h.lens);if(e!=="semi"){const h=n.mirrorD,r=a.reduce((d,g)=>Math.abs(g.d-h)<Math.abs(d.d-h)?g:d),u=Math.min(t.belt(h),t.top(h)),f=r.pts[pa][0];for(const d of[1,-1]){const g=e==="cybertruck"?n.body:Si;i.addGeo(new Mo(1,12,8),g,Cn(d*(f+.12),u+.09,r.z+.06,0,0,0,.06,.048,.1)),i.box(.12,.03,.06,d*(f+.05),u+.07,r.z+.06,mi),i.addGeo(new as(1,12),kl,Cn(d*(f+.12),u+.09,r.z+.155,0,0,0,.052,.04,1))}}else{const h=n.mirrorD-s/2;for(const r of[1,-1])i.box(.34,.05,.06,r*(o+.12),2.35,h,Dn),i.box(.09,.42,.2,r*(o+.3),2.3,h+.02,Dn),i.box(.03,.35,.16,r*(o+.3),2.3,h+.13,kl),i.box(.05,.55,.035,r*(o-.02),1.55,h+1,_r)}if(e!=="semi"?i.box(.31,.155,.012,0,n.plateY,c.z+.007,g0):i.box(.31,.155,.012,0,n.plateY,l.z-.007,g0),e==="models"||e==="model3"||e==="modelx"||e==="modely"){const h=Ys(t,0,t.top(.12)-.015,!1);h&&i.box(.07,.035,.01,0,h[1],h[2]-.002,_r,-.6);const r=l.z,u=n.intake[0],f=ma(l,u)-.06;i.box(2*f,n.intake[1],.02,0,u,r-.004,fl)}if(n.falcon){const[h,r,u]=n.falcon;for(const f of[1,-1]){let d=null;for(const g of a){if(g.d<h||g.d>r)continue;const v=eu(g,u)+.002;d&&i.quad([f*(u-.006),d.y,d.z],[f*(u+.006),d.y,d.z],[f*(u+.006),v,g.z],[f*(u-.006),v,g.z],fr,[0,1,0]),d={y:v,z:g.z}}}}if(e==="cybertruck"){for(let u=3.85;u<5.58;u+=.14){const f=t.top(u),d=a.reduce((g,v)=>Math.abs(v.d-u)<Math.abs(g.d-u)?v:g);i.box(d.pts[pa+pi/2][0]*2-.04,.006,.012,0,f+.004,u-s/2,fr,Math.atan2(t.top(u+.01)-t.top(u-.01),.02)*-1)}for(const u of[1,-1]){let f=null;for(const d of a){if(d.d<3.82||d.d>5.62)continue;const g=d.pts[pa+pi/2][0],v=d.pts[Ra][1]+.012,m=[[u*(g-.05),v,d.z],[u*(g+.004),v,d.z]];f&&i.quad(f[0],f[1],m[1],m[0],Ll,[0,1,0]),f=m}f=null;for(const d of a){if(d.d<.1||d.d>1.42)continue;const g=eu(d,.8)+.002,v=[[u*.794,g,d.z],[u*.806,g,d.z]];f&&i.quad(f[0],f[1],v[1],v[0],fr,[0,1,0]),f=v}}i.box(2.06,.1,.12,0,.6,l.z+.02,Dn),i.box(1.9,.08,.12,0,.58,c.z-.02,Dn)}if(e==="semi"){const h=t.cabL-s/2;nu(i,t,{e:"front",x:[0,.985],y0:[.43,.43],y1:[.64,.64]},Dn,.004);const r=s/2-h+.3;for(const f of[1,-1])i.addGeo(new tn(1.0824,1.0824,r,8,1,!1,Math.PI/8),Dn,Cn(f*.47,.98,(h-.3+s/2)/2,Math.PI/2,0,0,.11,1,.16));for(const f of[h+.4,2.35,3.4])i.box(.8,.12,.1,0,.96,f,Dn);i.addGeo(new tn(.62,.62,.09,28),mi,Cn(0,1.24,2.35)),i.box(.18,.1,.55,0,1.3,2.65,fr),i.box(1,.12,.9,0,1.15,2.35,Dn);for(const f of[n.axles[1],n.axles[2]])i.addGeo(new tn(.13,.13,1.9,12),Dn,Cn(0,n.R,f,0,0,Math.PI/2)),i.addGeo(new Mo(.24,12,8),Dn,Cn(0,n.R,f,0,0,0,1.2,.9,1));for(const f of[1,-1]){const d=f*(o-n.dualW/2-.02);for(const g of[n.axles[1],n.axles[2]])ny(i,d,n.R,g,n.R+.1,(n.dualW+.1)/2,.35,2.55,Dn);i.box(n.dualW+.1,.5,.025,d,.62,n.axles[2]+n.R+.16,Dn),i.addGeo(new tn(.2,.2,.9,16),_r,Cn(f*.82,.78,h+.42,Math.PI/2,0,0)),i.addGeo(new tn(.15,.15,.7,14),_r,Cn(f*.86,.74,h+1.3,Math.PI/2,0,0))}i.box(2.3,.14,.14,0,.72,s/2-.08,Dn);const u=a[a.length-1];for(const f of[1,-1]){const d=[];for(let p=1.2;p<3.66;p+=.123)d.push(p);const g=5,v=.62,m=(p,b)=>[f*(ma(u,p)-.012-.17*b*b),p,h-.03+b*v];for(let p=0;p<d.length-1;p++)for(let b=0;b<g;b++){const T=m(d[p],b/g),S=m(d[p],(b+1)/g),F=m(d[p+1],(b+1)/g),O=m(d[p+1],b/g),R=B=>{const M=Math.hypot(v,.34*B);return[f*v/M,0,.34*B/M]};M0(i,[T,S,F,O],[R(b/g),R((b+1)/g),R((b+1)/g),R(b/g)],Si),M0(i,[T,S,F,O],[b/g,(b+1)/g,(b+1)/g,b/g].map(B=>R(B).map(M=>-M)),mi)}i.box(.04,.72,.66,f*(o-.08),.84,h+.33,Si),i.box(.05,.14,.66,f*(o-.085),.41,h+.33,Dn),i.box(.03,.2,.62,f*(o-.012-.03),.64,-s/2+2.14,Si),i.box(.032,.025,.6,f*(o-.012-.028),.53,-s/2+2.14,fr)}}}function M0(i,t,e,n){co.fromArray(t[0]),Hl.fromArray(t[1]).sub(co),Gl.fromArray(t[2]).sub(co),es.crossVectors(Hl,Gl);const s=[0,0,0];for(const a of e)for(let l=0;l<3;l++)s[l]+=a[l];const o=es.dot(op.fromArray(s))>=0?[[0,1,2],[0,2,3]]:[[0,2,1],[0,3,2]];for(const a of o)for(const l of a)i.vert(t[l],e[l],n)}function ny(i,t,e,n,s,o,a,l,c){for(let r=0;r<12;r++){const u=Rn(a,l,r/12),f=Rn(a,l,(r+1)/12),d=(u+f)/2,g=(S,F)=>[t+S,e+s*Math.sin(F),n+s*Math.cos(F)],v=g(-o,u),m=g(o,u),p=g(o,f),b=g(-o,f),T=[0,Math.sin(d),Math.cos(d)];i.quad(v,m,p,b,c,T),i.quad(v,m,p,b,c,[0,-T[1],-T[2]])}}function b0(i,t,e){const{s:n,rings:s,L:o,hw:a}=i,l=new Eo(!0),c=[1,.98,.95],h=[1,.04,.05],r=[1,.42,.04],u=s[0],f=s[s.length-1];for(const d of n.lamps){if(d.skip||d.e==="rear"!==e)continue;const g=d.gain??1,v=(e?h:c).map(m=>m*g);if(d.cap){const m=e?f:u,p=e?1:-1;if(d.x)for(const b of[1,-1])l.box(d.x[1]-d.x[0],d.y1-d.y0,.012,b*(d.x[0]+d.x[1])/2,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,v);else{const b=ma(m,(d.y0+d.y1)/2)-(d.inset||0);l.box(2*b,d.y1-d.y0,.012,0,(d.y0+d.y1)/2,m.z+p*.012,0,0,0,0,v)}}else nu(l,i,d,v,.007)}if(t==="semi")if(e){for(const d of[1,-1])l.box(.3,.09,.03,d*.85,.72,o/2-0,0,0,0,0,h);for(const d of[1,-1])l.box(.06,.06,.02,d*(a-.15),3.72,i.cabL-o/2+.015,0,0,0,0,h)}else{for(const d of[-.78,-.2,-.07,.07,.2,.78]){const g=Ys(i,Math.abs(d),2.98,!1);g&&l.box(.075,.035,.05,d,2.98,g[2]+.005,0,0,0,0,r)}for(const d of[1,-1])l.box(.03,.06,.12,d*(a-.02),3.6,-o/2+1.7,0,0,0,0,r)}if(!e&&t!=="semi"&&t!=="cybertruck"){const d=t==="models"?1.35:1.2,g=s.reduce((v,m)=>Math.abs(m.d-d)<Math.abs(v.d-d)?m:v);for(const v of[1,-1])l.box(.006,.02,.06,v*(g.pts[Wl+3][0]+.003),g.pts[Wl+3][1],g.z,0,0,0,0,r)}if(e&&t==="cybertruck"){for(const d of[1,-1])l.box(.02,.04,.4,d*(f.pts[pa-1][0]+.004),1.165,f.z-.2,0,0,0,0,h);l.box(2*ma(f,1.16)-.06,.008,.05,0,1.214,f.z-.03,0,0,0,0,h.map(d=>d*1.3))}return l}function pl(i,t,e,n,s){const o=new ro(t.map(a=>new Dt(a[0],a[1])),n);i.addGeo(o,e,Cn(s,0,0,0,0,-Math.PI/2))}function Yc(i,t,e,n,s){const o=n/2,a=28;pl(i,[[t-.006,-o+.03],[t,-o+.055],[t,o-.055],[t-.006,o-.03]],V2,a,s),pl(i,[[e-.005,-o+.02],[e+.02,-o+.002],[Rn(e,t,.55),-o-.004],[t-.03,-o+.008],[t-.006,-o+.03]],m0,a,s),pl(i,[[t-.006,o-.03],[t-.03,o-.008],[Rn(e,t,.55),o+.004],[e+.02,o-.002],[e-.005,o-.02]],m0,a,s);for(const l of[-.22,.22])pl(i,[[t+.0015,l*n-.006],[t+.0015,l*n+.006]],fr,a,s)}function iy(i){const t=To[i],e=t.wheel,n=t.R,s=n*t.rimRatio,o=new Eo,a=new Eo,l=(c,h,r)=>{const u=h/2,f=u-.028;if(r?(Yc(c,n,s,h/2-.015,h/4+.0075),Yc(c,n,s,h/2-.015,-h/4-.0075)):Yc(c,n,s,h,0),c.addGeo(new as(s*.99,28),gi,Cn(-u*.5,0,0,0,Math.PI/2,0)),c.addGeo(new Io(s*.9,s*1,32),e.semi?Es:e.cover?gi:Es,Cn(f+.004,0,0,0,Math.PI/2,0)),e.semi){c.addGeo(new tn(s*.9,s*.9,.02,28),Es,Cn(f-.05,0,0,0,0,Math.PI/2)),c.addGeo(new tn(s*.3,s*.36,.16,18),Es,Cn(f+0,0,0,0,0,Math.PI/2)),c.addGeo(new tn(s*.17,s*.17,.04,14),gi,Cn(f+.08,0,0,0,0,Math.PI/2));for(let b=0;b<10;b++){const T=b/10*Math.PI*2;c.box(.03,.026,.026,f-.025,Math.cos(T)*s*.45,Math.sin(T)*s*.45,_r)}for(let b=0;b<8;b++){const T=(b+.5)/8*Math.PI*2;c.addGeo(new as(s*.11,10),Pu,Cn(f-.038,Math.cos(T)*s*.7,Math.sin(T)*s*.7,0,Math.PI/2,0))}return}c.addGeo(new tn(s*.78,s*.78,.028,26),W2,Cn(f-.1,0,0,0,0,Math.PI/2));const d=.7;c.box(.07,s*.4,s*.24,f-.075,Math.cos(d)*s*.66,Math.sin(d)*s*.66,e.caliper??gi,-d),e.cover&&c.addGeo(new as(s*.88,30),gi,Cn(f-.016,0,0,0,Math.PI/2,0));const g=e.n,v=e.pair||0,m=s*.74,p=s*.2+m/2;for(let b=0;b<g;b++)for(const T of v?[-v,v]:[0]){const S=b/g*Math.PI*2+T;c.box(.03,m,e.sw,f-.01,Math.cos(S)*p,Math.sin(S)*p,e.cell,S),e.accent&&c.box(.032,m*.85,.008,f-.008,Math.cos(S)*(p+m*.05),Math.sin(S)*(p+m*.05),e.accent,S)}c.addGeo(new tn(s*.22,s*.24,.05,20),e.cover?gi:e.cell,Cn(f-.005,0,0,0,0,Math.PI/2)),c.addGeo(new tn(s*.12,s*.12,.01,16),mi,Cn(f+.022,0,0,0,0,Math.PI/2))};return l(o,t.tyreW,!1),i==="semi"&&l(a,t.dualW,!0),{front:o,drive:i==="semi"?a:o,R:n}}const sy=new Map,Lu=new Map,ry=new Map;function Pa(i,t,e){let n=i.get(t);return n||(n=e(),i.set(t,n)),n}function oy(i,t,e,n){const s=i+":"+t+":"+e+":"+n;return Pa(ry,s,()=>{const o=new Uint8Array(ea*4),a=new Uint8Array(ea*4);for(let c=0;c<ea;c++){const[h,r,u,f,d]=q2[c],g=c===Si?i:h;o[c*4]=g>>16&255,o[c*4+1]=g>>8&255,o[c*4+2]=g&255,o[c*4+3]=255;const v=c===Si?e:r,m=c===Si?t:u;a[c*4]=Math.round(f*255),a[c*4+1]=Math.round(v*255),a[c*4+2]=Math.round(m*255),a[c*4+3]=Math.round((d??1)*255)}const l=(c,h)=>{const r=new Su(c,ea,1,wi);return r.magFilter=ri,r.minFilter=ri,r.generateMipmaps=!1,h&&(r.colorSpace=xn),r.needsUpdate=!0,r};return{map:l(o,!0),orm:l(a,!1)}})}function ay(i){const t=new Lt(i),e={};return t.getHSL(e,xn),e.l>.72?[.03,.32]:e.l>.4&&e.s>.12?[.55,.3]:[.4,.3]}function ly(i){return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
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
      #endif`)},i.customProgramCacheKey=()=>"fleet-stadium-v6",i}function cy(i,t,e){let n,s,o;if(i==="semi"&&(t==null||typeof t!="string")){n=t!=null?new Lt(t).getHex(xn):lr.white[0];const l=new Lt(n),c={};l.getHSL(c,xn),c.l>.6&&(n=lr.white[0]),s=lr.white[1],o=lr.white[2]}else typeof t=="string"&&lr[t]?[n,s,o]=lr[t]:(n=new Lt(t).getHex(xn),[s,o]=ay(n));const a=i==="cybertruck"?"ss":n+":"+s+":"+o;return Pa(Lu,"body:"+a+":"+(e?e.uuid:""),()=>{const l=oy(n,s,o,i==="cybertruck");return ly(new Ai({map:l.map,roughnessMap:l.orm,metalnessMap:l.orm,clearcoatMap:l.orm,specularIntensityMap:l.orm,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.09,specularIntensity:1,envMap:e||null,envMapIntensity:1.35}))})}function S0(i,t){const e=dr(t,0,1);return Pa(Lu,"lamp:"+i+":"+e,()=>new ke({vertexColors:!0,color:new Lt(2.8*e+.08,2.8*e+.08,2.8*e+.08)}))}let qo=null;function hy(){return Pa(Lu,"shadow",()=>{const e=new Uint8Array(32768);for(let n=0;n<128;n++)for(let s=0;s<64;s++){const o=Math.abs((s+.5)/64*2-1),a=Math.abs((n+.5)/128*2-1),l=Math.max(0,o-.62)/.38,c=Math.max(0,a-.8)/.2,h=Math.min(1,Math.sqrt(l*l+c*c)),r=Math.pow(1-h,1.6)*.82;e.set([0,0,0,Math.round(r*255)],(n*64+s)*4)}return qo=new Su(e,64,128,wi),qo.magFilter=Ii,qo.minFilter=Ii,qo.needsUpdate=!0,new ke({map:qo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})})}function uy(i){return Pa(sy,i,()=>{const t=Z2(i),e=ty(t);ey(e,t,i);const n=iy(i);return{P:t,body:e.build(),head:b0(t,i,!1).build(),tail:b0(t,i,!0).build(),wheelR:n.front.build(),wheelL:n.front.mirroredX().build(),driveR:n.drive.build(),driveL:n.drive.mirroredX().build(),shadow:new an(To[i].W+.5,To[i].L+.7).rotateX(-Math.PI/2)}})}function w0(i,t={}){const e=To[i];if(!e)throw new Error(`createTeslaVehicle: unknown kind '${i}'`);const n=uy(i);let s=t.color;if(s==null){const v=rp[i],m=v0[i]=(v0[i]||0)+1;s=v[(m-1)%v.length]}const o=cy(i,s,t.envMap),a=new Je;a.name=`tesla-${i}`;const l=new ue(n.body,o);l.name="body",a.add(l);const c=[],h=i==="semi"?["f","m","r"]:["f","r"];[...e.axles].sort((v,m)=>v-m).forEach((v,m)=>{const p=i==="semi"&&m>0,b=p?e.dualW:e.tyreW;for(const[T,S]of[["l",-1],["r",1]]){const F=new Je;F.name=`wheel_${h[m]}${T}`,F.position.set(S*(e.W/2-b/2-.02-(e.inset||0)),e.R,v);const O=p?S>0?n.driveR:n.driveL:S>0?n.wheelR:n.wheelL,R=new ue(O,o);R.name="wheel",F.add(R),a.add(F),c.push(F)}});const u=t.lights??1,f=new ue(n.head,S0("h",u));f.name="headlight",a.add(f);const d=new ue(n.tail,S0("t",u));d.name="taillight",a.add(d);const g=new ue(n.shadow,hy());return g.name="shadow",g.position.y=.015,g.renderOrder=1,a.add(g),a.userData={kind:i,length:e.L,width:e.W,height:e.H,wheelRadius:e.R,wheels:c,lights:{head:[f],tail:[d]}},a}const lp=59/136,Wi=i=>i*lp,Kr=(i,t,e)=>Math.max(t,Math.min(e,i)),ns=(i,t,e)=>{const n=Kr((e-i)/(t-i),0,1);return n*n*(3-2*n)};function sr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const on=ze,cp=Pi,fy=i=>cp(Wi(i)),Oe=on.lateral,fi=on.flip,T0=qs;function ga(i){return lo(i,{pos:new P,fwd:new P,up:new P,inLoop:!1,theta:0})}const Ye=i=>ga(i).pos.z,Et={hangarBack:-40,door:26,roadStart:24,ramp:on.ramp,fleet:on.fleet,landingS:on.landing?on.landing.s:on.fleet.s1+22,gate:on.checkpoint.s,flip0:fi.s0,flipLip:fi.sLip,boost0:on.boostArm.s0,boost1:on.boostArm.s1,flight0:on.flight.s0,flight1:on.flight.s1,takeoff:on.mega.s0,megaLip:on.mega.s1,landStrip:fy(125),finish:on.finish.s,end:on.finish.s+700};Et.cityEnd=Et.boost0+60;const na=3.1;function ia(i){return i<Et.flip0?9-(9-na)*ns(Et.flip0-110,Et.flip0-20,i):i<Et.flipLip?na:na+(9-na)*ns(Et.flipLip+30,Et.flipLip+110,i)}const In={uBeat:{value:0},uTime:{value:0},uFlight:{value:0}},$c=.0026,Yo=new Lt(853536),dy=new Lt(1902630),Ao=`
float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
float aaLine(float x, float w){ float fw = max(fwidth(x), 1e-4); return 1.0 - smoothstep(w, w + fw*1.5, abs(x)); }
`;function ml(i){const t=ji.merge([ee.fog,{uChase:{value:i.chase??1},uPulse:{value:i.pulse??.35}}]);return t.uBeat=In.uBeat,t.uTime=In.uTime,new Ve({uniforms:t,vertexShader:`
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
      }`,fog:!0,side:i.side??hs})}function E0(i){const t=ji.merge([ee.fog,{uOpaque:{value:i?1:0},uBoost:{value:new Dt(Et.boost0,Et.takeoff)},uLines:{value:new Xe(Et.door+3,Et.finish,Et.ramp.s0,Et.ramp.s1)},uTun:{value:new Dt(-1e9,-1e9)}}]);return t.uBeat=In.uBeat,t.uTime=In.uTime,new Ve({uniforms:t,vertexShader:`
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
      ${Ao}
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
      }`,fog:!0,transparent:!i,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:i?Ge:hs})}function py(){const i=ji.merge([ee.fog,{}]);return i.uBeat=In.uBeat,new Ve({uniforms:i,vertexShader:`
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
      ${Ao}
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
      }`,fog:!0})}function $r(i,t=.35){const e={uColor:{value:new Lt().copy(i)},uStrength:{value:t},uBeat:In.uBeat};return new Ve({uniforms:e,vertexShader:`
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
      }`,transparent:!0,blending:dn,depthWrite:!1,side:Ge})}function Kc(i,{accent:t=[.15,.7,1.6],cell:e=[2.4,1.2],lit:n=.05,seamGlow:s=.06,key:o="a"}={}){return i.onBeforeCompile=a=>{a.uniforms.uPAccent={value:new P(t[0],t[1],t[2])},a.uniforms.uPCell={value:new Dt(e[0],e[1])},a.uniforms.uPLit={value:n},a.uniforms.uPSeam={value:s},a.uniforms.uBeat=In.uBeat,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += uPAccent * (pSlot * (0.7 + 0.6*exp(-fract(uBeat)*4.0)) + pSeam * uPSeam);`)},i.customProgramCacheKey=()=>"panel-"+o,i}const Du=new Be(1,1,1);(()=>{const i=new Be(1,1,1,1,1,1),t=i.attributes.position;for(let e=0;e<t.count;e++)t.getY(e)>0&&t.setX(e,t.getX(e)*.62-.08);return i.computeVertexNormals(),i})();const Ri=new Ie,Xl=new Qn,A0=new xi,sc=new P,Iu=new P;class Pe{constructor(){this.geos=[]}add(t,e,n=[1,1,1],s=0,o=-1e3){let a=t.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);if(a.attributes.uv||a.setAttribute("uv",new Se(new Float32Array(a.attributes.position.count*2),2)),!a.index){const u=a.attributes.position.count,f=new Array(u);for(let d=0;d<u;d++)f[d]=d;a.setIndex(f)}e&&a.applyMatrix4(e);const l=a.attributes.position.count,c=new Float32Array(l*3),h=new Float32Array(l),r=new Float32Array(l);for(let u=0;u<l;u++)c[u*3]=n[0],c[u*3+1]=n[1],c[u*3+2]=n[2],h[u]=s,r[u]=o;return a.setAttribute("color",new Pn(c,3)),a.setAttribute("aS",new Pn(h,1)),a.setAttribute("aOn",new Pn(r,1)),this.geos.push(a),this}box(t,e,n,s,o,a,l,c=-a,h=-1e3,r=0,u=0,f=0){return A0.set(r,u,f),Xl.setFromEuler(A0),Ri.compose(sc.set(s,o,a),Xl,Iu.set(t,e,n)),this.add(Du,Ri,l,c,h)}mesh(t){if(!this.geos.length)return null;const e=Tl(this.geos,!1);for(const s of this.geos)s.dispose();return this.geos=[],new ue(e,t)}}function ci(i,t,{color:e=[1,1,1],on:n=-1e3,hw:s=!1}={}){const o=[],a=[],l=[],c=[],h=[],r=[];let u=0;for(const g of i){const v=ga(g),m=new P().crossVectors(v.fwd,v.up).normalize(),p=t(g);u=p.length;const b=ia(g);for(let T=0;T<p.length;T++){const[S,F]=p[T],O=v.pos.clone().addScaledVector(m,S).addScaledVector(v.up,F);o.push(O.x,O.y,O.z),a.push(T/(p.length-1),g),l.push(e[0],e[1],e[2]),c.push(g),h.push(n),r.push(b)}}const f=[];for(let g=0;g<i.length-1;g++)for(let v=0;v<u-1;v++){const m=g*u+v,p=m+1,b=m+u,T=b+1;f.push(m,p,b,p,T,b)}const d=new Ke;return d.setAttribute("position",new Se(o,3)),d.setAttribute("uv",new Se(a,2)),d.setAttribute("color",new Se(l,3)),d.setAttribute("aS",new Se(c,1)),d.setAttribute("aOn",new Se(h,1)),s&&d.setAttribute("aHW",new Se(r,1)),d.setIndex(f),d.computeVertexNormals(),d}function jc(i,t,e){const n=[];for(let s=i;s<t;s+=e)n.push(s);return n.push(t),n}function C0(i,t){const e=[];let n=i;for(;n<t;){e.push(n);const s=n>Et.flip0-1&&n<Et.flipLip+1||n>Et.ramp.s0-1&&n<Et.ramp.s1+1||n>Et.takeoff-1&&n<Et.megaLip+1,o=n>Et.flip0-170&&n<Et.flipLip+170;n+=s?1.2:o?6:24}return e.push(t),e}const ft={cyan:[.15,1,1.7],cyanW:[.7,1.6,2],mag:[1.9,.12,1],org:[2.4,.75,.08],red:[2.4,.08,.12],wht:[1.8,1.8,2],warm:[2,1.4,.8],vio:[.8,.25,2.2],blue:[.2,.5,2.4],green:[.2,2.2,.6],amber:[2.4,1.1,.1],metal:[.13,.12,.17],metalD:[.05,.05,.07],metalL:[.2,.19,.24],conc:[.06,.055,.075]},R0=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],Xi=(i,t)=>[i[0]*t,i[1]*t,i[2]*t];function Vn(i,t,e,n,s,o,a,l,c,h,r,u=0,f=-Math.PI/2){const d=e*Math.cos(Math.PI/t),g=2*e*Math.sin(Math.PI/t);for(let v=0;v<t;v++){const m=f+v*Math.PI*2/t,p=Math.cos(m)*d,b=Math.sin(m)*d,T=o+p*Math.cos(u),S=l-p*Math.sin(u);i.box(g+n*.8,n,s,T,a+b,S,c,h,r,0,u,m+Math.PI/2)}}function my(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=1024,i.height=1024;const t=i.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,1024,1024),[["VOLT","#2ef"],["HYPER","#f3c"],["RUSH","#fa2"],["MACH 1","#8af"],["NEON","#f45"],["ROADSTER RUSH","#fff"],["ZERO-G","#2fc"],["FINISH","#fff"]].forEach(([s,o],a)=>{const l=a*128,c=t.createLinearGradient(0,l,1024,l+128);c.addColorStop(0,"rgba(255,255,255,0.05)"),c.addColorStop(1,"rgba(255,255,255,0.0)"),t.fillStyle=c,t.fillRect(6,l+6,1012,116),t.strokeStyle=o,t.lineWidth=6,t.strokeRect(10,l+10,1004,108),t.font=`italic 900 ${s.length>8?70:88}px Arial Black, Arial, sans-serif`,t.textAlign="center",t.textBaseline="middle",t.shadowColor=o,t.shadowBlur=18,t.fillStyle=o,t.fillText(s,512,l+66),t.shadowBlur=0,t.fillStyle="#fff",t.globalAlpha=.85,t.fillText(s,512,l+66),t.globalAlpha=1,t.fillStyle=o;for(let h=0;h<5;h++)t.fillRect(40+h*22,l+30,10,68)});const n=new Jl(i);return n.colorSpace=xn,n.anisotropy=4,n}function Zc(i,t,e,n,s=2.2){const o=new an(e,n),a=o.attributes.uv;for(let c=0;c<a.count;c++)a.setY(c,(7-t+a.getY(c))/8);const l=new ke({map:i,color:new Lt(s,s,s),side:Ge,fog:!0});return new ue(o,l)}function gy(i){if(!i||!i.isWebGLRenderer)return null;try{const t=new Ca;t.add(new ue(new Be(40,20,40),new ke({color:459790,side:Gn})));const e=(o,a,l,c,h,r,u,f=0,d=0)=>{const g=new ue(new an(o,a),new ke({color:new Lt(r).multiplyScalar(u),side:Ge}));g.position.set(l,c,h),g.rotation.set(d,f,0),t.add(g)};for(let o=-2;o<=2;o++)e(1.2,30,o*4,9.8,0,16777215,3,0,Math.PI/2);e(30,1.2,-19.8,3,0,16722600,5,Math.PI/2),e(30,1.2,19.8,3,0,2287359,5,-Math.PI/2),e(30,4,0,4,-19.8,13161727,1.4),e(30,1,0,1,-19.8,16726666,2),e(30,2,0,6,19.8,6962431,2,Math.PI),e(40,40,0,-9.9,0,656916,1,0,-Math.PI/2);const n=new Sr(i),s=n.fromScene(t,.03);return n.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] env failed",t),null}}function vy(i){if(!i||!i.isWebGLRenderer)return null;try{const t=new Ca;t.add(new ue(new Be(40,20,40),new ke({color:394759,side:Gn})));const e=(o,a,l,c,h,r,u,f=0,d=0)=>{const g=new ue(new an(o,a),new ke({color:new Lt(r).multiplyScalar(u),side:Ge}));g.position.set(l,c,h),g.rotation.set(d,f,0),t.add(g)};e(26,8,0,9.8,0,16777215,2.2,0,Math.PI/2);for(const o of[-9,0,9])e(3,3,-19.8,12,o,16054015,6,Math.PI/2);for(const o of[-12,12])e(2,6,19.8,5,o,16777215,3.5,-Math.PI/2);e(40,.5,19.8,.4,0,16715808,2.5,-Math.PI/2),e(40,6,0,3,-19.8,10133674,.35),e(40,6,0,3,19.8,10133674,.35,Math.PI),e(40,40,0,-9.9,0,1052690,1,0,-Math.PI/2);const n=new Sr(i),s=n.fromScene(t,.04);return n.dispose(),t.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose()}),s.texture}catch(t){return console.warn("[world] stage env failed",t),null}}function xy(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,255,255,0.75)"),e.addColorStop(.35,"rgba(255,255,255,0.18)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Jl(i);return n.colorSpace=xn,n}const Jc=new P,_y=new P(0,0,1),P0=new Qn,ql=new Ie,yy=new P;function Bn(i,t,e,n,s,o=0){Jc.subVectors(e,t);const a=Jc.length();a<.02||(P0.setFromUnitVectors(_y,Jc.multiplyScalar(1/a)),ql.compose(yy.addVectors(t,e).multiplyScalar(.5),P0,sc.set(n,n,a)),i.add(Du,ql,s,o))}function rr(i,t,e,n,s,o,a,l,c,h=0){Ri.compose(sc.set(o,a,l),Xl.identity(),Iu.set(e,n,s)),ql.multiplyMatrices(t,Ri),i.add(Du,ql,c,h)}function gl(i,t,{x:e,y:n,z:s,cols:o=4,rows:a=3,yaw:l=0,pitch:c=.25,pitchLamp:h=0,size:r=.62,gap:u=.16,s:f=0,mast:d=0}){const g=new Ie().compose(new P(e,n,s),new Qn().setFromEuler(new xi(c,l,0,"YXZ")),new P(1,1,1)),v=o*(r+u)+u,m=a*(r+u)+u;rr(i,g,v+.2,.14,.14,0,m/2+.05,-.25,ft.metalL),rr(i,g,v+.2,.14,.14,0,-m/2-.05,-.25,ft.metalL);for(const p of[-1,1])rr(i,g,.14,m+.2,.14,p*(v/2+.05),0,-.25,ft.metalL);rr(i,g,v,m,.08,0,0,-.4,ft.metalD);for(let p=0;p<a;p++)for(let b=0;b<o;b++){const T=-v/2+u+r/2+b*(r+u),S=-m/2+u+r/2+p*(r+u);rr(i,g,r,r,.36,T,S,-.12,ft.metalD),rr(t,g,r*.82,r*.82,.04,T,S,.075,[3.2,3.1,2.9],f),rr(i,g,r*1.02,.05,.22,T,S+r*.5,.12,ft.metal)}if(d>0){const p=e-Math.sin(l)*.6,b=s-Math.cos(l)*.6;for(const T of[-.35,.35])for(const S of[-.35,.35])i.box(.12,n,.12,p+T,n/2,b+S,ft.metalL);for(let T=.8,S=0;T<n-.5;T+=1.4,S++)i.box(.8,.07,.07,p,T,b-.35,ft.metal),i.box(.8,.07,.07,p,T,b+.35,ft.metal),i.box(.07,.07,.8,p-.35,T,b,ft.metal),i.box(.07,.07,.8,p+.35,T,b,ft.metal),Bn(i,new P(p-.35,T,b+.36),new P(p+.35,T+1.4,b+.36),.05,ft.metal);i.box(1.6,.3,1.6,p,.15,b,ft.metalD)}return new P(0,0,.3).applyMatrix4(g)}function Qc(i,t,{axis:e="z",at:n,a0:s,a1:o,face:a=1,h:l=.16,y:c=0,pitch:h=.12,col:r=[3,.05,.08],s:u=0}){const f=Math.abs(o-s),d=(s+o)/2;e==="z"?i.box(.22,l,f,n,c+l/2,d,ft.metalD,u):i.box(f,l,.22,d,c+l/2,n,ft.metalD,u);const g=Math.min(s,o);for(let v=0;g+v*h<g+f;v++){const m=g+(v+.5)*h;e==="z"?t.box(.03,.05,.06,n+a*.115,c+l*.55,m,r,u):t.box(.06,.05,.03,m,c+l*.55,n+a*.115,r,u)}e==="z"?t.box(.5,.004,f,n+a*.45,.012,d,Xi(r,.09),u):t.box(f,.004,.5,d,.012,n+a*.45,Xi(r,.09),u)}function My(i,t){const e=new cn({color:8027522,roughness:.9,metalness:0,side:Ge,envMapIntensity:.35});return e.onBeforeCompile=n=>{n.uniforms.uHW={value:i},n.uniforms.uS0={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDk; varying vec2 vDk;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDk = aDk;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vDk; uniform float uHW, uS0; vec3 dkEm = vec3(0.0); float dkPaint = 0.0;
        ${Ao}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float m = (vDk.x - 0.5) * 2.0 * uHW; float s = vDk.y - uS0;
          float n = vnoise(vec2(m*1.1, s*1.1))*0.45 + vnoise(vec2(m*4.3, s*4.3))*0.3 + vnoise(vec2(m*17.0, s*17.0))*0.25;
          float blot = smoothstep(0.4, 0.8, vnoise(vec2(m*0.32 + 3.0, s*0.2)));
          vec3 c = diffuseColor.rgb * (0.78 + 0.34*n) * (1.0 - 0.14*blot);
          float broom = vnoise(vec2(m*0.6, s*90.0)); c *= 0.95 + 0.08*broom;
          float jt = aaLine(fract(s/3.4)*3.4 - 1.7, 0.012); c *= 1.0 - 0.4*jt;
          float trk = exp(-pow((abs(m) - 0.82)/0.3, 2.0)) * (0.3 + 0.25*vnoise(vec2(s*0.6, m*3.0)));
          c *= 1.0 - trk * (1.0 - 0.6*smoothstep(8.0, 30.0, s));
          // the real deck: ONE white centre line (0.12 m), a thin white line outside each red LED edge strip
          float wear = 0.82 + 0.18*vnoise(vec2(m*9.0, s*2.3));
          dkPaint = max(aaLine(m, 0.06), aaLine(abs(m) - (uHW - 0.06), 0.035)) * wear;
          c = mix(c, vec3(0.62, 0.62, 0.63), dkPaint * 0.9);
          float led = aaLine(abs(m) - (uHW - 0.24), 0.07);
          c = mix(c, vec3(0.05, 0.02, 0.02), led);
          diffuseColor.rgb = c;
          float ledDot = 0.7 + 0.3*smoothstep(0.25, 0.4, abs(fract(s/0.14) - 0.5));
          dkEm = vec3(2.6, 0.03, 0.05) * led * ledDot;
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.8, dkPaint);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += dkEm;`)},e.customProgramCacheKey=()=>"concrete-deck",e}function by(i,t,e){const n=ji.merge([ee.fog,{uOn:{value:0},uHW:{value:i},uS60:{value:t},uEnd:{value:e}}]);return n.uBeat=In.uBeat,new Ve({uniforms:n,vertexShader:`
      varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_vertex>
      void main(){ vUv = uv; vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz;
        vec4 mvPosition = viewMatrix*wp; gl_Position = projectionMatrix*mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uOn, uHW, uS60, uEnd, uBeat; varying vec2 vUv; varying vec3 vWP;
      #include <fog_pars_fragment>
      ${Ao}
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
      }`,fog:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8})}const L0=["models","model3","cybertruck","semi","modelx","modely"],Sy={models:1053206,model3:3027256,modelx:1779522,modely:12035717,semi:15659250},D0=2.45,wy=.5,Ty=wo||{};function Ey(i={}){const t=i.scene||(i.isScene?i:null),e=i.renderer||null;let n=i.camera||null;const s=new Je;s.name="world";const o=sr(1337),a=[],l=[],c=tt=>Math.abs(tt)>1e8?-tt:Ye(tt),h=(tt,at,A)=>{const w=new Je;return w.name=tt,s.add(w),l.push({g:w,zHi:c(at),zLo:c(A)}),w},r={neon:ml({}),neonD:ml({side:Ge}),neonSoft:ml({chase:0,pulse:.15}),metal:Kc(new cn({vertexColors:!0,metalness:.85,roughness:.38,envMapIntensity:.7}),{key:"m"}),metalD:Kc(new cn({vertexColors:!0,metalness:.85,roughness:.32,envMapIntensity:1.3,side:Ge}),{accent:[1.6,.15,.9],cell:[3.2,1.6],lit:.04,key:"md"}),matte:Kc(new cn({vertexColors:!0,metalness:.3,roughness:.7}),{accent:[2,.7,.15],cell:[4,2],lit:.03,seamGlow:0,key:"mt"}),paint:new Ai({vertexColors:!0,metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.6}),glass:new cn({color:329226,metalness:1,roughness:.06,envMapIntensity:1.8}),deck:new Ai({vertexColors:!0,metalness:.65,roughness:.24,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5}),roadF:E0(!1),roadO:E0(!0),bld:py()};a.push(...Object.values(r));const u=my(),f={lineup:[],rows:[]},d=[],g=[],v=[];let m=null;const p=vy(e);p&&a.push(p);const b={mat:null,beams:[],s60:10.9};r.steel=new cn({vertexColors:!0,metalness:.75,roughness:.42,envMapIntensity:.9}),r.lamp=ml({chase:0,pulse:0,side:Ge}),a.push(r.steel,r.lamp);const T=xy(),S=new Map;function F(tt,at,A,w=16052991,G=1){if(!T)return null;const q=w+":"+G;let K=S.get(q);K||(K=new aa({map:T,color:new Lt(w).multiplyScalar(G),blending:dn,transparent:!0,depthWrite:!1,fog:!0}),S.set(q,K),a.push(K));const W=new Sl(K);return W.position.copy(at),W.scale.set(A,A,1),tt.add(W),W}t&&(t.background=Yo.clone(),t.fog=new bu(Yo.clone(),$c));const O=gy(e);t&&O&&!t.environment&&(t.environment=O);const R={uFlight:In.uFlight,uTime:In.uTime,uBeat:In.uBeat,uFog:{value:Yo.clone()},uSunDir:{value:new P(0,.1,-1).normalize()}},B=new ue(new Mo(10,48,24),new Ve({uniforms:R,depthWrite:!1,depthTest:!0,side:Gn,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      uniform float uFlight, uTime, uBeat; uniform vec3 uFog; uniform vec3 uSunDir; varying vec3 vDir;
      ${Ao}
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
      }`}));B.frustumCulled=!1,B.renderOrder=-1e3,B.name="sky",s.add(B);const M=new v2(8019199,1181724,.3);s.add(M);const C=new M2(11570431,.35);C.position.set(-30,60,20),s.add(C);const N=new zd(16777215,300,40,.55,.6,1.6);N.position.set(0,12,1),N.target.position.set(0,0,0),s.add(N,N.target);const $=Ye(Et.end)-900,et=400,pt=et-$,Mt={name:"WetGround",uniforms:{color:{value:new Lt(16777215)},tDiffuse:{value:null},textureMatrix:{value:null},fogColor:{value:Yo.clone()},fogDensity:{value:$c},uBeat:In.uBeat,uTime:In.uTime,uRegions:{value:new Xe(Et.hangarBack,Et.door,Ye(Et.boost1-40),Ye(Et.end))},uLat:{value:Oe}},vertexShader:`
      uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW; varying float vDepth;
      void main(){ vUv = textureMatrix * vec4(position,1.0); vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz;
        vec4 mv = viewMatrix * wp; vDepth = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform vec3 color; uniform sampler2D tDiffuse; uniform vec3 fogColor; uniform float fogDensity;
      uniform float uBeat, uTime, uLat; uniform vec4 uRegions;
      varying vec4 vUv; varying vec3 vW; varying float vDepth;
      ${Ao}
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
      }`};let lt=null;try{const tt=e&&e.getSize?e.getSize(new Dt):new Dt(540,960),at=e&&e.getPixelRatio?e.getPixelRatio():1;lt=new ec(new an(2400,pt),{textureWidth:Math.max(256,Math.round(tt.x*at*.5)),textureHeight:Math.max(256,Math.round(tt.y*at*.5)),clipBias:.003,shader:Mt,multisample:0}),lt.rotation.x=-Math.PI/2,lt.position.set(0,0,(et+$)/2),lt.name="wetGround",s.add(lt)}catch(tt){console.warn("[world] reflector failed, using plain ground",tt);const at=new ue(new an(2400,pt),new cn({color:328713,metalness:.9,roughness:.25}));at.rotation.x=-Math.PI/2,at.position.set(0,0,(et+$)/2),s.add(at)}{const tt=h("road",-1e9,1e9),at=[[Et.roadStart,Et.flip0+.01],[Et.flipLip,Et.takeoff],[Et.landStrip,Et.end]];for(const[A,w]of at){const G=ci(C0(A,w),K=>{const W=ia(K);return[[-W,.03],[W,.03]]},{hw:!0}),q=new ue(G,r.roadF);q.renderOrder=2,tt.add(q)}}{const tt=h("walls",-1e9,1e9),at=new Pe,A=new Pe;[[Et.door,Et.ramp.s0-34],[Et.landingS+26,Et.flip0-2],[Et.flipLip+84,Et.takeoff-2],[Et.landStrip+20,Et.end]].forEach(([G,q],K)=>{const W=C0(G,q),rt=.95;for(const it of[-1,1]){at.add(ci(W,ut=>{const U=ia(ut)+.35;return[[it*U,0],[it*U,rt],[it*(U+.4),rt],[it*(U+.4),0]]}),null,ft.metal);const J=it<0?ft.cyan:ft.mag;A.add(ci(W,ut=>{const U=ia(ut)+.3;return[[it*U,rt+.02],[it*(U+.5),rt+.02]]}),null,J),A.add(ci(W,ut=>{const U=ia(ut)+.33;return[[it*U,rt*.45],[it*U,rt*.55]]}),null,Xi(J,.6))}}),tt.add(at.mesh(r.metalD)),tt.add(A.mesh(r.neonD))}const gt={strips:[],door:[],tree:[]};{const tt=h("hangar",Et.hangarBack-20,Et.door+60),at=new Pe,A=new Pe,w=new Pe,G=18,q=13,K=-Et.hangarBack,W=-Et.door;at.box(.8,q,K-W,-G,q/2,(K+W)/2,ft.metalD),at.box(.8,q,K-W,G,q/2,(K+W)/2,ft.metalD),at.box(G*2,.8,K-W,0,q,(K+W)/2,ft.metalD),at.box(G*2,q,.8,0,q/2,K,ft.metalD),at.box(5,q,1.2,-G+2.5,q/2,W,ft.metal),at.box(5,q,1.2,G-2.5,q/2,W,ft.metal),at.box(G*2,q-10.5,1.2,0,10.5+(q-10.5)/2,W,ft.metal);let rt=0;for(let U=K-4;U>W+2;U-=6,rt++){for(const Y of[-1,1])at.box(1,q-3,1.4,Y*(G-.9),(q-3)/2,U,ft.metal),at.box(1,4.6,1.4,Y*(G-2.3),q-1.6,U,ft.metal,-U,-1e3,0,0,Y*Math.PI/4),A.box(.12,q-4,.14,Y*(G-1.45),(q-4)/2+.3,U,ft.cyanW,-U,1+rt*.5),A.box(.12,3.6,.14,Y*(G-2.75),q-2.1,U,ft.cyanW,-U,1+rt*.5,0,0,Y*Math.PI/4);at.box(G*2-6,1,1.4,0,q-.5,U,ft.metal);for(const Y of[-1,1]){at.box(.3,9,4.4,Y*(G-.55),5,U-3,[.02,.02,.026]);{for(const dt of[-.9,.9])A.box(.08,6.4,.16,Y*(G-.72),4.8,U-3+dt,rt%2?[.6,.9,2]:[.25,1.1,2],-U,1+rt*.5);at.box(.1,6.8,1.5,Y*(G-.62),4.8,U-3,[.012,.012,.018]);for(let dt=0;dt<4;dt++)A.box(.08,.06,1.3,Y*(G-.72),1.3+dt*.25,U-3+(dt%2?1.4:-1.4),dt%2?ft.cyan:ft.mag,-U,3+rt*.5);for(let dt=0;dt<7;dt++)at.box(.1,.05,1.3,Y*(G-.66),1.9+dt*.95,U-3,ft.metalD)}A.box(.1,.18,3.6,Y*(G-.75),1.4,U-3,ft.mag,-U,8),A.box(.1,.18,3.6,Y*(G-.75),8.2,U-3,ft.mag,-U,8)}}{const U=q-2,Y=K-W;for(const Rt of[-10.5,-4,4,10.5]){at.box(.3,.3,Y-2,Rt,U,(K+W)/2,ft.metalL),at.box(.3,.3,Y-2,Rt,U+1.4,(K+W)/2,ft.metalL);for(let D=K-2;D>W+2;D-=2.4)at.box(.12,1.65,.12,Rt,U+.7,D-.6,ft.metal,-D,-1e3,Math.round(D)%2?.7:-.7,0,0)}for(let Rt=K-2;Rt>W+2;Rt-=6)at.box(22,.22,.22,0,U,Rt,ft.metalL);const dt=8,yt=new Pe,Q=new Pe;Vn(yt,dt,6.8,.45,.6,0,0,0,ft.metal,0),Vn(Q,dt,6.45,.08,.1,0,0,-.32,ft.cyanW,0,2),Vn(Q,dt,7.15,.06,.1,0,0,-.32,ft.mag,0,4);const _t=yt.mesh(r.metal),St=Q.mesh(r.neon);for(const Rt of[_t,St])Rt.rotation.x=-Math.PI/2,Rt.position.set(0,8.6,0),tt.add(Rt);for(let Rt=0;Rt<8;Rt++){const D=Rt/8*Math.PI*2+Math.PI/8;at.box(.06,q-8.6,.06,Math.cos(D)*6.6,(q+8.6)/2,Math.sin(D)*6.6,ft.metalL)}for(let Rt=0;Rt<8;Rt++){const D=Rt/8*Math.PI*2+Math.PI/8,z=Math.cos(D)*12.5,X=Math.sin(D)*12.5;Math.abs(z)<6||(A.box(.12,5.5,.12,z,2.9,X,Rt%2?ft.cyanW:ft.mag,0,6+Rt),at.box(.6,.3,.6,z,.15,X,ft.metalL))}}tt.add(at.mesh(r.metal));const it=new Be(G*2-7,.16,.6);for(let U=0;U<15;U++){const Y=K-2-U*((K-W-4)/14),dt=new ke({color:0,fog:!0}),yt=new ue(it,dt);yt.position.set(0,q-1.2,Y),tt.add(yt),gt.strips.push({m:yt,mat:dt,on:[0,2,4,6][Math.min(3,Math.floor(U*4/15))]})}{const U=new tn(5.6,5.8,.14,96,1,!0);w.add(U,Ri.makeTranslation(0,.07,0),[.03,.03,.04]);const Y=new Io(4.9,5.6,96,1);Y.rotateX(-Math.PI/2),w.add(Y,Ri.makeTranslation(0,.14,0),[.05,.05,.065]);for(let dt=0;dt<48;dt++){const yt=dt/48*Math.PI*2;w.box(.06,.03,.7,Math.cos(yt)*5.25,.16,Math.sin(yt)*5.25,ft.metalL,0,-1e3,0,-yt+Math.PI/2,0)}}tt.add(w.mesh(r.metal));{const U=new ue(new an(14,14),new Ve({uniforms:{uBeat:In.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
          void main(){ float r = length(vUv - 0.5)*2.0;
            float ring = exp(-pow((r - 0.62)*14.0, 2.0)) * 0.35 + exp(-pow((r - 0.42)*30.0, 2.0)) * 0.18;
            float a = exp(-r*r*3.0)*0.045 + ring * (0.7 + 0.5*exp(-fract(uBeat)*4.0));
            gl_FragColor = vec4(vec3(0.15,0.7,1.6)*a, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,transparent:!0,blending:dn,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.y=.02,U.renderOrder=3,tt.add(U),a.push(U.material)}const J=new Pe;J.add(new Ts(5.3,.06,6,96),Ri.makeRotationX(Math.PI/2).setPosition(0,.15,0),ft.cyanW,0,0),J.add(new Ts(3.6,.035,6,96),Ri.makeRotationX(Math.PI/2).setPosition(0,.15,0),ft.cyan,0,2);for(let U=0;U<24;U++){const Y=U/24*Math.PI*2;J.box(.5,.04,.08,Math.cos(Y)*4.5,.15,Math.sin(Y)*4.5,ft.cyan,0,4+U*.1,0,-Y,0)}for(const U of[-1,1])for(let Y=0;Y<9;Y++)J.box(.14,.05,1.6,U*7.5,.05,-6-Y*3.2,ft.wht,6+Y*3.2,6+Y*.5);tt.add(J.mesh(r.neonSoft));{const U=new Pe,Y=new Pe;Vn(U,12,6.4,.5,.5,0,0,0,ft.metal,0);const dt=U.mesh(r.metal);dt.rotation.x=Math.PI/2,dt.position.y=8.2,tt.add(dt),Vn(Y,12,6.05,.1,.12,0,0,0,ft.wht,0,0),Vn(Y,12,6.75,.08,.12,0,0,0,ft.mag,0,4);for(let _t=0;_t<12;_t++){const St=(_t+.5)/12*Math.PI*2;Y.box(.42,.42,.2,Math.cos(St)*6.4,Math.sin(St)*6.4,.38,ft.wht,0,_t*.5)}const yt=Y.mesh(r.neonSoft);yt.rotation.x=Math.PI/2,yt.position.y=8.2,tt.add(yt);const Q=new Pe;for(const _t of[-1,1])Q.box(.12,4.9,.12,_t*6.4,10.65,0,ft.metalL);tt.add(Q.mesh(r.metal))}for(let U=0;U<6;U++)A.box(26-U*3,.12,.1,0,2+U*1.6,K-.5,U%2?ft.mag:ft.cyan,-K,2+U);for(const U of[-1,1])A.box(.25,8,.1,U*4.5,6.5,K-.5,ft.org,-K,9,0,0,U*.5);if(tt.add(A.mesh(r.neonD)),u)for(const[U,Y]of[[-1,2],[1,5]]){const dt=Zc(u,Y,8,1,1.6);dt.position.set(U*(G-.7),10,6),dt.rotation.y=-U*Math.PI/2,tt.add(dt)}for(const U of[-1,1]){const Y=new Je,dt=new Pe,yt=new Pe;dt.box(13,10.5,.7,0,5.25,0,ft.metal);for(let Q=0;Q<5;Q++)dt.box(12.6,.12,.8,0,1+Q*2.1,0,ft.metalL);yt.box(.16,10.2,.8,-U*6.4,5.2,0,ft.red,0,0);for(let Q=0;Q<4;Q++)yt.box(1.6,.18,.8,-U*(4.5-Q*1.2),5.2+(Q%2?1:-1)*0+Q*0,0,ft.org,0,0,0,0,U*.6);Y.add(dt.mesh(r.metal)),Y.add(yt.mesh(r.neonSoft)),Y.position.set(U*6.5,0,W-.1),tt.add(Y),gt.door.push({g:Y,sd:U})}const ut=new Mo(.2,16,10);for(const U of[-1,1]){const Y=new Pe;Y.box(.18,4.2,.18,U*9.5,2.1,-14,ft.metalL),Y.box(1.2,3.2,.3,U*9.5,3,-14,ft.metalD),tt.add(Y.mesh(r.metal));const dt=[["pre",4.2,ft.wht],["a1",3.6,ft.amber],["a2",3,ft.amber],["a3",2.4,ft.amber],["go",1.8,ft.green]];for(const[yt,Q,_t]of dt)for(const St of[-.3,.3]){const Rt=new ke({color:0}),D=new ue(ut,Rt);D.position.set(U*9.5+St,Q,-13.82),tt.add(D),gt.tree.push({mat:Rt,id:yt,col:new Lt(_t[0],_t[1],_t[2])})}}}{const tt=h("strip",Et.door-50,Et.flip0+60),at=new Pe,A=new Pe,w=Et.ramp.s0-50,G=Et.landingS+30;let q=0;for(let W=60;W<Et.flip0-190;W+=42,q++){if(W>w&&W<G)continue;const rt=-W,it=11.5,J=10.5,ut=q%3===0;for(const Y of[-1,1])at.box(1.1,J,1.1,Y*it,J/2,rt,ft.metal),at.box(1.6,.6,1.6,Y*it,.3,rt,ft.metalD),A.box(.12,J-1,.12,Y*(it-.62),J/2,rt+.4,ft.cyan,W);at.box(it*2+1,1.2,1.4,0,J,rt,ft.metal);const U=ut?ft.org:ft.mag;for(let Y=-4;Y<=4;Y++)A.box(1.6,.12,.9,Y*2.4,J-.66,rt,U,W);A.box(it*2,.12,.12,0,J+.66,rt+.72,ft.cyanW,W),ut&&Vn(A,6,15.5,.35,.35,0,13.4,rt,ft.vio,W,-1e3)}for(let W=40;W<Et.flip0-150;W+=26)if(!(W>Et.ramp.s0-40&&W<Et.landingS+26))for(const rt of[-1,1]){const it=rt*10.6;at.box(.22,7.5,.22,it,3.75,-W,ft.metalL),at.box(2.4,.18,.4,it-rt*1.1,7.5,-W,ft.metalL),A.box(1.8,.08,.3,it-rt*1.2,7.38,-W,ft.warm,W)}let K=0;for(let W=140;W<Et.flip0-160;W+=115,K++){if(W>Et.ramp.s0-60&&W<Et.landingS+40)continue;const rt=K%2?1:-1,it=rt*24,J=-W;if(at.box(.6,14,.6,it-5,7,J,ft.metalD),at.box(.6,14,.6,it+5,7,J,ft.metalD),u){const ut=Zc(u,[0,1,2,3,4,6][K%6],16,4,2.4);ut.position.set(it,16,J),ut.rotation.y=rt*.35,tt.add(ut)}A.box(16.6,.15,.2,it,13.9,J,ft.wht,W),A.box(16.6,.15,.2,it,18.1,J,ft.wht,W)}{const rt=Math.min(on.dragStrip.s1+40,Et.ramp.s0-30),it=4.3,J=vi&&isFinite(vi.zero60)?cp(vi.zero60):10.9,ut=by(it,J,rt);a.push(ut),b.mat=ut;const U=ci(jc(-3,rt,2),()=>[[-it,.045],[it,.045]]),Y=new ue(U,ut);Y.renderOrder=3,tt.add(Y);const dt=new Pe;for(const yt of[0,J])for(const Q of[-1,1])dt.box(.16,.9,.16,Q*3.75,.45,-yt,ft.metalD),dt.box(.24,.22,.2,Q*3.75,.85,-yt,ft.metalD),dt.box(.5,.06,.5,Q*3.75,.03,-yt,ft.metalL);tt.add(dt.mesh(r.metal));for(const[yt,Q]of[[0,0],[J,1]]){const _t=new ke({color:0,transparent:!0,blending:dn,depthWrite:!1,fog:!0});a.push(_t);const St=new ue(new Be(7.3,.025,.025),_t);St.position.set(0,.85,-yt),tt.add(St);for(const Rt of[-1,1]){const D=new ue(new Be(.03,.08,.08),_t);D.position.set(Rt*3.63,.85,-yt),tt.add(D)}b.beams.push({mat:_t,k:Q})}b.s60=J;{const yt=new Pe,Q=new Pe,_t=-Math.max(J+9,60),St=5.3,Rt=4.6,D=5.3,z=.7,X=[.07,.07,.08],st=[.12,.12,.13],vt=(bt,Pt,Z)=>new P(bt,Pt,Z);for(const bt of[-1,1]){const Pt=bt*St;for(const Z of[-.35,.35])for(const ne of[-z/2,z/2])yt.box(.1,D,.1,Pt+Z,D/2,_t+ne,st);for(let Z=.6,ne=0;Z<D;Z+=.9,ne++)yt.box(.8,.06,.06,Pt,Z,_t-z/2,X),yt.box(.8,.06,.06,Pt,Z,_t+z/2,X),yt.box(.06,.06,z,Pt-.35,Z,_t,X),yt.box(.06,.06,z,Pt+.35,Z,_t,X),Bn(yt,vt(Pt-.35,Z,_t+z/2),vt(Pt+.35,Math.min(D,Z+.9),_t+z/2),.045,X),Bn(yt,vt(Pt+.35,Z,_t-z/2),vt(Pt-.35,Math.min(D,Z+.9),_t-z/2),.045,X);yt.box(1.3,.16,1.3,Pt,.08,_t,ft.metalD);for(let Z=.5;Z<D-.2;Z+=.55)Q.box(.05,.05,.05,Pt-bt*.42,Z,_t+z/2+.03,[3,.05,.08],J)}for(const bt of[Rt,D])for(const Pt of[-z/2,z/2])yt.box(St*2+.8,.1,.1,0,bt,_t+Pt,st);for(let bt=-St+.4,Pt=0;bt<St-.4;bt+=.7,Pt++){for(const Z of[-z/2,z/2])Bn(yt,vt(bt,Pt%2?Rt:D,_t+Z),vt(bt+.7,Pt%2?D:Rt,_t+Z),.045,X);yt.box(.05,.05,z,bt,Rt,_t,X),yt.box(.05,.05,z,bt,D,_t,X)}for(const bt of[-3.2,-1.1,1.1,3.2])yt.box(.42,.34,.36,bt,Rt-.3,_t+.2,ft.metalD),Q.box(.32,.24,.03,bt,Rt-.32,_t+.39,[2.6,2.55,2.4],J);Q.box(St*2-1.2,.05,.05,0,Rt-.06,_t+z/2+.04,[3,.05,.08],J),yt.box(St*2-.4,2.7,.22,0,D+1.45,_t,[.02,.02,.024]),Q.box(St*2-.8,2.35,.02,0,D+1.45,_t+.125,[.035,.045,.075],J);for(const bt of[D+.12,D+2.78])yt.box(St*2-.3,.08,.26,0,bt,_t,st);for(let bt=-St+.6;bt<St-.5;bt+=.9)Q.box(.05,.05,.03,bt,D+2.86,_t+.14,[3,.05,.08],J);for(const bt of[-1,1])Q.box(.06,2.3,.03,bt*(St-.38),D+1.45,_t+.14,[1.2,1.2,1.25],J);tt.add(yt.mesh(r.steel)),tt.add(Q.mesh(r.lamp))}}nt(tt,Et.ramp.s0,Et.ramp.s1,Et.ramp.height,0,W=>-W),tt.add(at.mesh(r.metal)),tt.add(A.mesh(r.neon)),Qt(tt)}function nt(tt,at,A,w,G,q,K=1.6){const W=new Pe,rt=new Pe,it=new Pe,J=jc(at,A,.5),ut=Q=>T0(Q)+.02,U=[3,.05,.08],Y=ci(J,Q=>{const _t=ut(Q);return[[-K,0],[-K,_t],[K,_t],[K,0]]}),dt=Y.attributes.position;for(let Q=0;Q<dt.count;Q++){const _t=Y.attributes.uv.getY(Q),St=Q%4;dt.setY(Q,St===0||St===3?0:ut(_t))}Y.computeVertexNormals(),W.add(Y,null,[.035,.036,.042]),W.box(K*2,w,.3,G,w/2,q(A)-.12,[.03,.03,.036]);const yt=Q=>Math.atan2(2*w*(Q-at)/(A-at)**2,1);for(let Q=at+1.2;Q<A-.3;Q+=1.2)rt.box(K*2-.1,.012,.05,G,ut(Q)+.006,q(Q),[.11,.11,.12],Q,-1e3,yt(Q),0,0);for(const Q of[-1,1]){rt.add(ci(J,Rt=>[[Q*(K-.08),0],[Q*(K-.08),.06],[Q*(K+.06),.06],[Q*(K+.06),0]]),null,[.09,.09,.1]),it.add(ci(J,()=>[[Q*(K-.02),.075],[Q*(K+.04),.075]]),null,U);const _t=G+Q*(K+.07);let St=null;for(let Rt=at+2;Rt<=A+.01;Rt+=1.5){const D=ut(Math.min(Rt,A));D<.12||(rt.box(.1,D,.12,_t,D/2,q(Rt),[.08,.08,.09]),St&&Bn(rt,new P(_t,.05,q(St.s)),new P(_t,D-.05,q(Rt)),.05,[.07,.07,.08]),St={s:Rt,h:D})}it.add(ci(J.filter(Rt=>ut(Rt)>.35),Rt=>[[Q*(K+.13),-ut(Rt)*.5+.03],[Q*(K+.13),-ut(Rt)*.5-.03]]),null,Xi(U,.8)),it.add(ci(J,Rt=>[[Q*(K+.4),.02-ut(Rt)+.02],[Q*(K+.9),.02-ut(Rt)+.02]]),null,Xi(U,.07)),rt.box(.16,w+.04,.16,G+Q*(K-.05),(w+.04)/2,q(A)-.1,[.1,.1,.11])}rt.box(K*2+.12,.08,.14,G,w+.03,q(A)-.05,[.14,.14,.15]),it.box(K*2-.2,.05,.04,G,w-.12,q(A)-.29,U,A),tt.add(W.mesh(r.deck)),tt.add(rt.mesh(r.steel)),tt.add(it.mesh(r.lamp))}function Ct(tt,at,A,w,{rail2:G=!0,showLights:q=!0,extent:K=null}={}){const W=new Pe,rt=new Pe,it=L0.filter(z=>at.some(X=>X.kind===z)).concat(at.map(z=>z.kind).filter(z=>!L0.includes(z))),J=z=>at.find(X=>X.kind===z)||Ty[z],ut=Math.max(0,it.indexOf("semi")),U=[];{let z=0;it.forEach(st=>{const vt=J(st).width;U.push(z+vt/2),z+=vt+wy});const X=A-U[ut];for(let st=0;st<U.length;st++)U[st]+=X}let Y=U[0]-J(it[0]).width/2,dt=U[U.length-1]+J(it[it.length-1]).width/2;if(K){const z=Math.max(K[0]-Y,Math.min(0,K[1]-dt));for(let X=0;X<U.length;X++)U[X]+=z;Y+=z,dt+=z}const yt=Ye(Y-1),Q=Ye(dt+1),_t=Ye(A),St=w+D0,Rt=[],D=[];it.forEach((z,X)=>{const st=J(z),vt=w0(z,{color:Sy[z],envMap:p||void 0}),bt=vt.userData&&vt.userData.length||st.length,Pt=St-bt/2+(z==="semi"?-.25:0);vt.position.set(Pt,0,Ye(U[X])),vt.rotation.y=-Math.PI/2,vt.userData.stageS=U[X],tt.add(vt),Rt.push(vt),D.push([Pt,Ye(U[X]),st.width+.8,bt+.8])});{const z=[4.2,.06,.1],X=yt+5,st=Q-5,vt=X-st,bt=(X+st)/2,Pt=St+.95;W.box(.22,.15,vt,Pt,.075,bt,[.02,.02,.025]),rt.box(.03,.13,vt,Pt+.115,.078,bt,Xi(z,1.3),Y),rt.box(.2,.012,vt,Pt,.155,bt,Xi(z,.7),Y),rt.box(2.2,.004,vt,Pt+1.25,.008,bt,Xi(z,.1),Y),rt.box(1.1,.004,vt,Pt-.7,.008,bt,Xi(z,.05),Y),G&&Qc(W,rt,{axis:"z",at:w-5.6,a0:yt+22,a1:Q-16,face:1,h:.12,s:Y})}{const z=$r(new Lt(.95,.97,1.05),.075);a.push(z);const X=[[w-19,_t+10,19,.62],[w-19,_t-10,19,.62],[w-16,_t,23,.8]];for(const[st,vt,bt,Pt]of X){const Z=Math.atan2(St-1.5-st,_t-vt)*.35+Math.PI/2*.65,ne=gl(W,rt,{x:st,y:bt,z:vt,cols:4,rows:2,yaw:Z,pitch:Pt,s:Y,mast:1});F(tt,ne,5.5,16054271,.9),F(tt,ne,18,11062527,.1);const ye=new P(w+.2,0,vt*.6+_t*.4),Fe=new P().subVectors(ye,ne),qe=Fe.length();Fe.normalize();const gn=new ue(new tn(.9,6.5,qe,24,1,!0).translate(0,-qe/2,0),z);gn.position.copy(ne),gn.quaternion.setFromUnitVectors(new P(0,-1,0),Fe),tt.add(gn)}if(q)for(let st=0;st<9;st++){const vt=yt+3.5+st*1.3,bt=w-4.6;W.box(.06,1,.06,bt,.5,vt,ft.metalL),W.box(.5,.05,.5,bt,.03,vt,ft.metalD);const Pt=gl(W,rt,{x:bt,y:1.2,z:vt,cols:1,rows:1,size:.34,yaw:Math.PI/2,pitch:-.08,s:Y});F(tt,Pt,1.6,16777215,.8)}}for(const z of[W.mesh(r.steel),rt.mesh(r.lamp)])z&&tt.add(z);{const z=$t(),X=new an(1,1);X.rotateX(-Math.PI/2);for(const[st,vt,bt,Pt]of D){const Z=new ue(X,z);Z.position.set(st,.12,vt),Z.scale.set(Pt+2.5,1,bt+2.5),Z.renderOrder=3,tt.add(Z)}}return g.push({z:_t,x:w}),{vehicles:Rt,s0:Y,s1:dt}}function $t(){return m||(m=new Ve({uniforms:{uBeat:In.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q);
          float a = exp(-r*r*2.2)*0.08 + exp(-pow((r-0.86)*9.0,2.0))*0.025;
          gl_FragColor = vec4(vec3(1.0,0.96,1.05)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:dn,depthWrite:!1}),a.push(m),m)}function Qt(tt){const at=Ct(tt,on.fleet.lineup,on.fleet.sCenter,0);f.lineup.push(...at.vehicles);for(const[A,w,G,q]of[[9,5.5,16774386,420],[-6,13,15660287,700]]){const K=new Jf(G,q,45,1.6);K.position.set(A,w,-on.fleet.sCenter),s.add(K),d.push({l:K,k:q}),v.push({l:K,dx:A})}}{const A=Ye(Et.end+200),w=Ye(Et.flip0),G=170,q=Ye(Et.fleet.sCenter),K=sr(4711);for(let W=220;W>A;W-=420){const rt=[],it=[{x0:44,x1:70,h0:16,h1:70,tall:.18,d0:12,d1:26},{x0:80,x1:170,h0:40,h1:170,tall:.25,d0:18,d1:34},{x0:190,x1:420,h0:70,h1:300,tall:.3,d0:24,d1:50},{x0:450,x1:800,h0:90,h1:380,tall:.3,d0:30,d1:70}],J=W<Ye(Et.cityEnd);for(const dt of[-1,1])for(const[yt,Q]of it.entries()){if(J&&yt===0)continue;let _t=W;for(;_t>W-420;){const St=Q.d0+o()*(Q.d1-Q.d0),Rt=3+o()*10*(yt+1),D=_t-St/2;_t-=St+Rt;const z=Math.abs(D-w)<G;let X=dt*(Q.x0+o()*(Q.x1-Q.x0));z&&dt>0&&X<110&&(X=110+o()*60);const st=Math.abs(D-q)<170&&dt<0;if(st&&X>-260&&(X=-(260+K()*120)),D>-Et.hangarBack+30&&Math.abs(X)<60)continue;let vt=Q.h0+Math.pow(o(),1.6)*(Q.h1-Q.h0);o()<Q.tall&&(vt*=1.5);const bt=Q.d0+o()*(Q.d1-Q.d0),Pt=Math.floor(o()*4),Z=.25+o()*.45,ne=Math.floor(o()*4),ye=st?Math.min(vt,16+vt*.1):vt;if(rt.push([X,D,bt,ye,St,o(),Pt,Z,ne]),vt>80&&o()<.7){const Fe=.55+o()*.25,qe=[X,D,bt*Fe,vt*(.22+o()*.3),St*Fe,o(),Pt,Z,(ne+1)%4,vt];st||rt.push(qe)}}}const ut=new qh(new Be(1,1,1).translate(0,.5,0),r.bld,rt.length),U=new Float32Array(rt.length*4);rt.forEach(([dt,yt,Q,_t,St,Rt,D,z,X,st=0],vt)=>{Ri.compose(sc.set(dt,st,yt),Xl.identity(),Iu.set(Q,_t,St)),ut.setMatrixAt(vt,Ri),U.set([Rt,D,z,X],vt*4)}),ut.geometry.setAttribute("aB",new os(U,4)),ut.computeBoundingSphere(),h("city",-W-300,-W+420+300).add(ut)}}const se=[];{const tt=h("highways",-1e9,1e9),at=180,A=Ye(Et.cityEnd)+50,w=at-A,G=Ye(Et.flip0),q=new Pe,K=new Pe;for(const St of[-1,1]){const Rt=St*64,D=15,z=Ye(Et.fleet.sCenter),X=St>0?[[at,G+160],[G-160,A]]:[[at,z+140],[z-140,A]];for(const[st,vt]of X){const bt=st-vt,Pt=(st+vt)/2;q.box(12,1,bt,Rt,D,Pt,ft.conc,-Pt),q.box(.4,1,bt,Rt-6,D+.9,Pt,ft.conc,-Pt),q.box(.4,1,bt,Rt+6,D+.9,Pt,ft.conc,-Pt),K.box(.12,.12,bt,Rt-6,D+1.45,Pt,ft.org,-Pt),K.box(.12,.12,bt,Rt+6,D+1.45,Pt,ft.org,-Pt),K.box(.1,.1,bt,Rt-6.1,D-.55,Pt,ft.vio,-Pt),K.box(.1,.1,bt,Rt+6.1,D-.55,Pt,ft.vio,-Pt);for(let Z=st-20;Z>vt;Z-=48)q.box(2.2,D,2.2,Rt,D/2,Z,ft.conc),K.box(2.3,.15,2.3,Rt,4,Z,ft.vio,-Z)}}tt.add(q.mesh(r.matte)),tt.add(K.mesh(r.neonSoft));const W=150,rt=new Be(1.9,.35,1.2),it=new ke({color:16777215,fog:!0}),J=new qh(rt,it,W*4),ut=new Lt(2.2,1.9,1.5),U=new Lt(2.6,.1,.12);let Y=0;for(const St of[-1,1])for(const Rt of[-1,1]){const D=sr(St*7+Rt*3+20);for(let z=0;z<W;z++,Y++)se.push({i:Y,x:St*64+Rt*2.6,y:16,z0:D()*w,v:26+D()*14,dir:Rt,zA:at,len:w,skip:St>0,gap:St>0?[G-160,G+160]:[Ye(Et.fleet.sCenter)-140,Ye(Et.fleet.sCenter)+140]}),J.setColorAt(Y,Rt>0?ut:U)}J.frustumCulled=!1,tt.add(J),se.mesh=J;const dt=$r(new Lt(.6,.7,1.4),.1);a.push(dt);const yt=$r(new Lt(1.4,.3,1),.1);a.push(yt);const Q=new tn(.6,9,520,20,1,!0).translate(0,260,0);se.beams=[];const _t=sr(99);for(let St=0;St<12;St++){const Rt=120+St*(Et.cityEnd-200)/12,D=St%2?1:-1,z=new ue(Q,St%3?dt:yt);z.position.set(D*(110+_t()*160),0,Ye(Rt)),z.userData.ph=_t()*6.28,z.userData.sd=D,z.frustumCulled=!1,tt.add(z),se.beams.push(z)}}const Ee={lasers:[]},mt=new Je;mt.name="flipRamp";{const tt=h("flip",Et.flip0-420,Et.flipLip+300);tt.add(mt);const at=new Pe,A=new Pe;let w=0;for(let D=Et.flip0-330;D<Et.flip0-110;D+=45,w++){const z=-D;Vn(at,6,14,.9,.9,0,12.1,z,ft.metal,D,-1e3,0,-Math.PI/2),Vn(A,6,13.2,.16,.2,0,12.1,z+.5,w%2?ft.mag:ft.vio,D,-1e3,0,-Math.PI/2),Vn(A,6,14.8,.1,.2,0,12.1,z+.5,ft.cyan,D,-1e3,0,-Math.PI/2)}const G=na,q=jc(Et.flip0-.5,Et.flipLip-.002,.25),K=new Pe,W=new Pe,rt=My(G,Et.flip0),it=new cn({color:3816513,roughness:.8,metalness:.2,side:Ge});a.push(rt,it);{const D=ci(q,()=>[[-G,.03],[G,.03]]);D.setAttribute("aDk",D.attributes.uv.clone()),mt.add(new ue(D,rt)),mt.add(new ue(ci(q,()=>[[G,0],[G,-.42],[-G,-.42],[-G,0]]),it))}for(const D of[-1,1])K.add(ci(q,()=>[[D*G,0],[D*G,.1],[D*(G+.1),.1],[D*(G+.1),-.5],[D*(G-.2),-.5]]),null,[.09,.09,.1]),W.add(ci(q,()=>[[D*(G+.115),.02],[D*(G+.115),-.09]]),null,[2.6,.04,.07]);const J=22,ut=Et.flip0+Math.min(2.3,(Et.flipLip-Et.flip0)*.08),U=Et.flipLip-.04,Y=[];for(let D=0;D<=J;D++){const z=ga(ut+(U-ut)*D/J),X=Math.atan2(z.fwd.y,-z.fwd.z),st=.7+(1.9+.04*Math.max(0,fi.height-18))*ns(0,1,X);Y.push({th:X,pin:z.pos.clone().addScaledVector(z.up,-.45),pout:z.pos.clone().addScaledVector(z.up,-.45-st)})}const dt=[.1,.1,.115],yt=[.16,.16,.18],Q=(D,z)=>new P(z,D.y,D.z);for(const D of[-1,1]){const z=D*(G-.25);for(let X=0;X<Y.length;X++){const st=Y[X];if(Bn(K,Q(st.pin,z),Q(st.pout,z),.14,dt),X+1<Y.length){const vt=Y[X+1];Bn(K,Q(st.pout,z),Q(vt.pout,z),.26,yt),Bn(K,Q(st.pin,z),Q(vt.pin,z),.16,dt),Bn(K,X%2?Q(st.pin,z):Q(st.pout,z),X%2?Q(vt.pout,z):Q(vt.pin,z),.1,dt)}}}for(let D=0;D<Y.length;D++){const z=Y[D];if(Bn(K,Q(z.pout,-2.85),Q(z.pout,G-.25),.14,dt),D%2===0&&D+2<Y.length){const X=Y[D+2];Bn(K,Q(z.pout,-2.85),Q(X.pout,G-.25),.08,dt),Bn(K,Q(z.pout,G-.25),Q(X.pout,-2.85),.08,dt)}}const _t=Y.filter((D,z)=>z%2===0&&D.pout.y>1.5&&D.th>.55);for(const D of[-1,1]){const z=D*(G-.25);_t.forEach((vt,bt)=>{Bn(K,Q(vt.pout,z),new P(z,0,vt.pout.z),.22,yt),K.box(.7,.2,.7,z,.1,vt.pout.z,ft.metalD);const Pt=_t[bt+1];if(!Pt)return;const Z=Math.min(vt.pout.y,Pt.pout.y);for(let ne=2.5,ye=0;ne<Z-.5;ne+=3,ye++){Bn(K,new P(z,ne,vt.pout.z),new P(z,ne,Pt.pout.z),.1,dt);const Fe=Math.min(Z,ne+3);Bn(K,new P(z,ye%2?ne:Fe,vt.pout.z),new P(z,ye%2?Fe:ne,Pt.pout.z),.07,dt)}});const X=Y[Y.length-1],st=Y[Math.round(J*.72)];Bn(K,Q(X.pout,z),new P(z,0,X.pout.z-7.5),.24,yt),Bn(K,Q(st.pout,z),new P(z,0,st.pout.z-6),.2,yt),K.box(.8,.2,.8,z,.1,X.pout.z-7.5,ft.metalD),K.box(.8,.2,.8,z,.1,st.pout.z-6,ft.metalD)}for(const D of _t)for(let z=2.5;z<D.pout.y-.5;z+=6)Bn(K,new P(-2.85,z,D.pout.z),new P(G-.25,z,D.pout.z),.1,dt);{const D=ga(Et.flipLip-.05);for(const z of[-1,1])W.box(.3,.3,.3,z*(G+.2),D.pos.y-.6,D.pos.z-2.2,ft.red,Et.flip0)}{const D=-Et.flip0-fi.R*.6;for(const[z,X,st]of[[-22,D+18,22],[-26,D-14,26],[-6,D+46,14]]){const vt=gl(K,W,{x:z,y:st,z:X,cols:4,rows:3,yaw:Math.atan2(-z,D-X),pitch:.5,s:Et.flip0,mast:1});F(tt,vt,10,15922943,1),F(tt,vt,30,10471679,.16)}}const St=fi.zLand,Rt=fi.xLand;{const D=[3.6,.05,.09],z=Rt-4.4,X=St+16,st=Math.min(St-16,-Et.flip0+2);K.box(.2,.13,X-st,z,.065,(X+st)/2,[.02,.02,.025]),W.box(.03,.06,X-st,z+.105,.075,(X+st)/2,D,Et.flip0),W.box(1.4,.004,X-st,z+.85,.008,(X+st)/2,Xi(D,.06),Et.flip0),A.box(.09,.012,46,Rt-1.6,.03,St-4,[.32,.32,.34],Et.flipLip);const vt=$r(new Lt(.95,.97,1.05),.06);a.push(vt);const bt=Rt+9,Pt=St+30,Z=17,ne=-Et.flip0-(fi.zLip!==void 0?(-fi.zLip-Et.flip0)*.5:5),ye=gl(K,W,{x:bt,y:Z,z:Pt,cols:4,rows:2,yaw:Math.atan2(0-bt,ne-Pt),pitch:.38,s:Et.flip0,mast:1});F(tt,ye,6,16054271,.9),F(tt,ye,20,11062527,.1);const Fe=new P(1.5,fi.height*.35,ne),qe=new P().subVectors(Fe,ye),gn=qe.length();qe.normalize();const oi=new ue(new tn(.9,7.5,gn,24,1,!0).translate(0,-gn/2,0),vt);oi.position.copy(ye),oi.quaternion.setFromUnitVectors(new P(0,-1,0),qe),tt.add(oi)}tt.add(K.mesh(r.steel)),tt.add(W.mesh(r.lamp)),tt.add(at.mesh(r.metalD)),tt.add(A.mesh(r.neonD));for(const[D,z,X,st]of[[18,26,-Et.flip0-2,380],[-16,22,-Et.flip0+10,260],[Rt+6,14,St+10,450]]){const vt=new Jf(15922431,st,70,1.5);vt.position.set(D,z,X),s.add(vt),d.push({l:vt,k:st})}}{const tt=h("boost",Et.boost0-200,Et.takeoff+300),at=new Pe,A=new Pe;let w=0;for(let q=Et.boost0-30;q<Et.takeoff;q+=16,w++){const K=Ye(q),W=(q-Et.boost0)/(Et.takeoff-Et.boost0),rt=88+Kr(W,0,1)*8,it=4+Kr(W,0,1)*10;for(const J of[-1,1]){if(J>0&&q>Et.takeoff-150)continue;const ut=Oe+J*12;at.box(1.2,it,1.2,ut,it/2,K,ft.metal),A.box(.16,it-.5,.16,ut-J*.65,it/2,K,R0(ft.blue,ft.cyanW,Kr(W,0,1)),q,rt),A.box(1.4,.2,1.4,ut,it+.1,K,ft.cyanW,q,rt)}w%2===0&&Vn(A,8,11.5,.14,.2,Oe,9.6,K,R0(ft.blue,ft.org,Kr(W,0,1)),q,rt)}const G=Ye(Et.takeoff);for(let q=0;q<8;q++)A.box(19,.05,.2,Oe,.06,G+2+q*2.2,ft.org,Et.takeoff,90+q*.5);tt.add(at.mesh(r.metal)),tt.add(A.mesh(r.neon)),nt(tt,on.mega.s0,on.mega.s1,on.mega.height,Oe,Ye,2)}const ht=[],Kt=[];{const tt=h("flight",Et.boost1-400,Et.finish+400),at=new Pe,A=new Pe,w=new Pe,G=new Pe,q=new Ve({uniforms:{uBeat:In.uBeat},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uBeat; varying vec2 vUv;
        void main(){ vec2 q = (vUv - 0.5)*2.0; float r = length(q*vec2(1.0,0.8));
          float a = exp(-r*r*2.4)*0.2 + exp(-pow((r-0.86)*9.0,2.0))*0.08*(0.6+0.4*exp(-fract(uBeat)*4.0));
          gl_FragColor = vec4(vec3(1.0,0.92,1.2)*a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,blending:dn,depthWrite:!1});a.push(q);const K=new an(1,1);K.rotateX(-Math.PI/2);for(const rt of on.fleetRows){if(rt.finale){const U=Ct(tt,rt.vehicles,rt.s,Oe,{extent:[rt.s-rt.depth/2,rt.s+rt.depth/2]});f.rows.push({row:rt,vehicles:U.vehicles});continue}const it=[];for(const U of rt.vehicles){const Y=w0(U.kind,p?{envMap:p}:{});Y.position.set(U.x,0,Ye(U.s)),Y.rotation.y=U.yaw,tt.add(Y),it.push(Y)}const J=Ye(rt.s),ut=new ue(K,q);ut.position.set(Oe,.08,J),ut.scale.set(24,1,rt.depth+6),ut.renderOrder=3,tt.add(ut),Qc(w,G,{axis:"x",at:J+rt.depth/2+.9,a0:Oe-10.2,a1:Oe+10.2,face:1,s:rt.s}),Qc(w,G,{axis:"x",at:J-rt.depth/2-.9,a0:Oe-10.2,a1:Oe+10.2,face:-1,h:.1,s:rt.s});for(const U of[-1,1])at.box(.4,4.5,.4,Oe+U*11.5,2.25,J,ft.metal,rt.s),A.box(.1,4.2,.1,Oe+U*11.2,2.25,J+.25,rt.finale?ft.org:ft.cyan,rt.s),A.box(.6,.5,.6,Oe+U*11.5,4.7,J,ft.wht,rt.s);f.rows.push({row:rt,vehicles:it})}tt.add(at.mesh(r.metal)),tt.add(A.mesh(r.neon)),tt.add(w.mesh(r.steel)),tt.add(G.mesh(r.lamp));const W=sr(4242);for(let rt=Et.boost1-100;rt<Et.finish+300;rt+=34+W()*30){const it=Ye(rt);for(const J of[-1,1]){if(W()<.25)continue;const ut=J<0?Oe-(26+W()*120):Oe+(75+W()*160),U=18+W()*70,Y=2.5+W()*5;at.box(Y,U,Y,ut,U/2,it,ft.metalD),at.box(Y*1.6,3,Y*1.6,ut,1.5,it,ft.metal);const dt=[ft.cyan,ft.mag,ft.org,ft.vio][Math.floor(W()*4)];for(const _t of[-1,1])A.box(.14,U,.14,ut+_t*Y/2,U/2,it+Y/2,dt,rt);A.box(Y+.2,.2,Y+.2,ut,U,it,dt,rt);const yt=Math.floor(U/14);for(let _t=1;_t<=yt;_t++)A.box(Y+.1,.12,Y+.1,ut,_t*14-2,it,Xi(dt,.7),rt);if(W()<.55){const _t=6+W()*14,St=Y*.6;at.box(St,_t,St,ut,U+_t/2,it,ft.metalD),A.box(St+.15,.18,St+.15,ut,U+_t,it,dt,rt),at.box(.25,10,.25,ut,U+_t+5,it,ft.metalL),A.box(.6,.6,.6,ut,U+_t+10.2,it,ft.red,rt)}else for(const _t of[-1,1])A.box(.1,U*.8,.1,ut+_t*Y*.2,U*.4,it+Y/2+.05,ft.wht,rt)}}tt.add(at.mesh(r.metal)),tt.add(A.mesh(r.neon));{const rt=new Pe,it=new Pe;let J=0;for(let U=Et.flight0+140;U<Et.finish+200;U+=230,J++){const Y=Ye(U),dt=[ft.mag,ft.cyan,ft.org][J%3];Vn(rt,6,52,2.2,2.6,Oe,8,Y,ft.metal,U,-1e3,0,-Math.PI/2),Vn(it,6,50.4,.3,.3,Oe,8,Y+1.4,dt,U,-1e3,0,-Math.PI/2),Vn(it,6,53.6,.18,.3,Oe,8,Y+1.4,ft.wht,U,-1e3,0,-Math.PI/2);for(let yt=0;yt<12;yt++){const Q=yt/12*Math.PI*2;it.box(1.2,1.2,.4,Oe+Math.cos(Q)*52,8+Math.sin(Q)*52,Y+1.5,ft.wht,U,96+yt*.25)}}const ut=sr(777);for(let U=Et.flight0+60;U<Et.finish+100;U+=55+ut()*40){const Y=ut()<.5?-1:1,dt=Oe+Y*(28+ut()*40),yt=16+ut()*26,Q=Ye(U),_t=10+ut()*10,St=7+ut()*6,Rt=[ft.cyan,ft.mag,ft.vio,ft.org][Math.floor(ut()*4)];if(rt.box(_t,1.2,St,dt,yt,Q,ft.metal,U),rt.box(_t*.6,1.6,St*.6,dt,yt-1.3,Q,ft.metalD,U),it.box(_t+.2,.14,.14,dt,yt+.62,Q+St/2,Rt,U),it.box(_t+.2,.14,.14,dt,yt+.62,Q-St/2,Rt,U),it.box(.14,.14,St,dt-_t/2,yt+.62,Q,Rt,U),it.box(.14,.14,St,dt+_t/2,yt+.62,Q,Rt,U),it.box(_t*.5,.08,St*.5,dt,yt-2.12,Q,ft.cyanW,U),ut()<.6){const D=4+ut()*8;rt.box(1.4,D,1.4,dt,yt+.6+D/2,Q,ft.metalD,U),it.box(1.6,.16,1.6,dt,yt+.6+D,Q,Rt,U),it.box(.4,.4,.4,dt,yt+1.2+D,Q,ft.red,U)}}tt.add(rt.mesh(r.metal)),tt.add(it.mesh(r.neon))}}const Bt={};{const tt=h("finish",Et.landStrip-300,Et.end+400),at=new Pe,A=new Pe;for(let U=Et.landStrip;U<Et.finish;U+=6){const Y=Ye(U);for(const dt of[-1,1])A.box(.6,.06,1.6,Oe+dt*6.5,.06,Y,ft.wht,U)}const w=Ye(Et.finish),G=11;for(const U of[-1,1]){const Y=Oe+U*G;at.box(1.6,16,1.6,Y,8,w,ft.metal);for(let dt=0;dt<8;dt++)A.box(1.7,.6,1.7,Y,1+dt*1.9,w,dt%2?ft.wht:[.05,.05,.06],Et.finish);A.box(.14,16,.14,Y-U*.85,8,w+.85,ft.cyan,Et.finish)}at.box(2*G+2,3.4,1.2,Oe,15.5,w,ft.metal);for(let U=0;U<24;U++)for(let Y=0;Y<2;Y++)(U+Y)%2===0&&A.box(.92,.5,.1,Oe-G+.5+U*.92,18-Y*.5-0+0,w+.62,ft.wht,Et.finish);for(const[U,Y,dt]of[[-6,19,ft.mag],[-16,23,ft.cyan],[-28,27,ft.vio]])Vn(at,6,Y,1,1,Oe,10.5,w+U,ft.metal,Et.finish,-1e3,0,-Math.PI/2),Vn(A,6,Y-.7,.18,.2,Oe,10.5,w+U+.55,dt,Et.finish,126,0,-Math.PI/2),Vn(A,6,Y+.7,.1,.2,Oe,10.5,w+U+.55,ft.wht,Et.finish,127,0,-Math.PI/2);if(A.box(2*G+2,.15,.15,Oe,13.7,w+.62,ft.mag,Et.finish),A.box(2*G+2,.15,.15,Oe,17.3,w+.62,ft.mag,Et.finish),u)for(const U of[1,-1]){const Y=Zc(u,7,13,3,2.6);Y.position.set(Oe,15.5,w+U*.62),U<0&&(Y.rotation.y=Math.PI),tt.add(Y)}const q=[],K=[],W=sr(77);for(const U of[-1,1]){for(let Y=0;Y<6;Y++){const dt=Oe+U*(16+Y*2.4),yt=.6+Y*1.3;at.box(2.4,yt*2,150,dt,yt,w+20,ft.conc),A.box(.1,.08,150,dt-U*1.2,yt*2+.02,w+20,Y%2?ft.cyan:ft.mag,Et.finish);for(let Q=0;Q<120;Q++){q.push(dt+(W()-.5)*1.6,yt*2+.5+W()*.3,w+20+(W()-.5)*148);const _t=[[2,2,2.2],[2.2,.3,1.4],[.3,1.6,2.2],[2.4,1.3,.3]][Math.floor(W()*4)];K.push(..._t)}}at.box(1,14,150,Oe+U*31,7,w+20,ft.metalD)}const rt=new Ke;rt.setAttribute("position",new Se(q,3)),rt.setAttribute("color",new Se(K,3));const it=new B_(rt,new Cd({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!0}));tt.add(it),tt.add(at.mesh(r.matte)),tt.add(A.mesh(r.neon));const J=$r(new Lt(.4,1,2),.075);a.push(J);const ut=$r(new Lt(2,.35,1.3),.075);a.push(ut),Bt.beams=[];for(let U=0;U<8;U++){const Y=new ue(new tn(.3,2.6,300,16,1,!0).translate(0,150,0),(U>>1)%2?ut:J);Y.position.set(Oe+(U%2?1:-1)*(24+(U>>1)*5),0,w+10-(U>>1)*22),Y.userData.k=U,Y.frustumCulled=!1,tt.add(Y),Bt.beams.push(Y)}}t&&t.add(s);let Jt=null;const xe=Yo.clone(),le=dy.clone(),oe=new Lt;let Tt=0;function zt(tt,at,A){let w,G=null;tt&&typeof tt=="object"?(G=tt,w=tt.t):typeof tt=="number"&&at&&typeof at=="object"?(G=at,w=at.t??(Jt&&Jt.t)??tt):typeof tt=="number"&&typeof at=="number"?(w=tt<=.1&&at>tt?at:tt,G=A||null):typeof tt=="number"&&(w=tt),(w==null||!isFinite(w))&&(w=Jt&&isFinite(Jt.t)?Jt.t:Tt),Tt=w;const q=w/lp;In.uBeat.value=q,In.uTime.value=w;const K=ns(86,101,q)*(1-ns(140,150,q));if(In.uFlight.value=K,oe.copy(xe).lerp(le,K),t&&(t.fog&&t.fog.color&&t.fog.color.copy(oe),t.background&&t.background.isColor&&t.background.copy(oe)),R.uFog.value.copy(oe),lt&&lt.material&&lt.material.uniforms){const J=lt.material.uniforms;J.fogColor.value.copy(oe),t&&t.fog&&(J.fogDensity.value=t.fog.density??$c)}for(const J of gt.strips){const ut=q-J.on,U=ut<0?0:1+3*Math.exp(-ut*4);J.mat.color.setRGB(2.4*U,2.4*U,2.7*U)}const W=ns(Wi(14.5),Wi(16.2),w);for(const J of gt.door)J.g.position.x=J.sd*(6.5+W*13.5);for(const J of gt.tree){let ut=0;J.id==="pre"?ut=q>=6&&q<16?1:0:J.id==="a1"?ut=q>=10&&q<16?1:0:J.id==="a2"?ut=q>=12&&q<16?1:0:J.id==="a3"?ut=q>=14&&q<16?1:0:J.id==="go"&&(ut=q>=16&&q<24?1+2*Math.exp(-(q-16)*2):0),J.mat.color.copy(J.col).multiplyScalar(ut*1.4),ut||J.mat.color.setRGB(.02,.02,.03)}N.intensity=300*(1-ns(Wi(17),Wi(22),w))*ns(0,Wi(2),w+Wi(1)),b.mat&&(b.mat.uniforms.uOn.value=ns(Wi(12),Wi(15.5),w));{const J=Wi(16),ut=vi&&isFinite(vi.zero60)?vi.zero60:J+.81;for(const U of b.beams){const Y=U.k?ut:J,dt=w-Y,yt=(w>Wi(12)?.35:0)+(dt>=0?3.5*Math.exp(-dt*2.5):0);U.mat.color.setRGB(2.4*yt,.06*yt,.08*yt)}}if(se.mesh){const J=se.mesh;for(const ut of se){let U=ut.zA-((ut.z0+ut.dir*-ut.v*w)%ut.len+ut.len)%ut.len;const Y=ut.gap&&U>ut.gap[0]&&U<ut.gap[1];Ri.makeTranslation(ut.x,Y?-200:ut.y,U),J.setMatrixAt(ut.i,Ri)}J.instanceMatrix.needsUpdate=!0;for(const ut of se.beams){const U=ut.userData.ph;ut.rotation.set(.35*Math.sin(w*.4+U),0,ut.userData.sd*(.25+.25*Math.sin(w*.33+U*1.7)))}}for(const J of Ee.lasers)J.m.rotation.z=Math.sin(w*2.2+J.k*1.1)*.5+(J.k%2?.35:-.35);if(Ee.loopLasers)for(const J of Ee.loopLasers){const ut=J.userData.k;J.rotation.set(Math.sin(w*.9+ut)*.5,0,(ut<5?-1:1)*(.25+.3*Math.sin(w*.7+ut*.8)))}const rt=n||G&&G.camera||null;if(Bt.beams)for(const J of Bt.beams){const ut=J.userData.k;J.rotation.set(Math.sin(w*.8+ut)*.35,0,Math.sin(w*.6+ut*1.3)*.4)}let it=null;if(rt&&rt.position?it=rt.position.z:Jt&&Jt.pos&&(it=Jt.pos.z),it!=null&&g.length&&v.length){let J=g[0];for(const ut of g)Math.abs(ut.z-it)<Math.abs(J.z-it)&&(J=ut);for(const ut of v)ut.l.position.x=J.x+ut.dx,ut.l.position.z=J.z}for(const J of d)J.l.intensity=it==null?J.k:J.k*(1-ns(60,140,Math.abs(J.l.position.z-it)));if(it!=null)for(const J of l)J.g.visible=J.zLo<=it+500&&J.zHi>=it-2600}const V=new P,jt=(tt,at,A,w,G)=>{const q=A<1,K=tt.z,W=tt.x,rt=Kr(at.z,K-40,K+30),it=K+(rt-K)*(q?G[0]:G[1]);return w.pos.set(W+D0+(q?26:25),3.2,it+2),w.look.set(W,q?7.2:6,it-.5),w.fov=q?58:42,w},It=()=>({pos:new P,look:new P,fov:50}),te={fleetJump(tt,at=9/16,A=It()){return jt(g[0]||{z:Ye(Et.fleet.sCenter),x:0},tt,at,A,[.6,.35])},finale(tt,at=9/16,A=It()){return jt(g[g.length-1]||{z:Ye(Et.finish),x:Oe},tt,at,A,[.6,.35])},flipDescent(tt,at=9/16,A=It()){const w=at<1,G=-Et.flip0-fi.R,q=fi.zLand;return A.pos.set(fi.xLand+(w?9:14),4.5,q+(w?34:26)),V.set(fi.xLand*.45,Math.max(6,Math.min(tt.y,fi.height)*.7+2),G*.35+tt.z*.65),A.look.copy(V),A.fov=w?62:46,A}};if(e&&t&&e.compile)try{const tt=new Zn(60,1,.1,6e3);e.compile(t,n||tt)}catch{}const Wt={group:s,envMap:O,course:on,layout:Et,rings:ht,pylons:Kt,reflector:lt,fleet:f,flipRamp:mt,shots:te,update:zt,setGameplayState(tt){Jt=tt},setCamera(tt){n=tt},trackFrame:ga,groundY:T0,dispose(){t&&t.remove(s),s.traverse(tt=>{tt.geometry&&tt.geometry.dispose()});for(const tt of a)tt.dispose&&tt.dispose();lt&&lt.dispose&&lt.dispose()}};return zt(0),Wt}const $e=P,si=-2.26,di=2.22,pr=-1.36,mr=1.32,Qi=.375,js=.405,I0=.865,U0=.8,gr=.112;function fn(i,t){if(t<=i[0][0])return i[0][1];const e=i.length;if(t>=i[e-1][0])return i[e-1][1];let n=1;for(;n<e-1&&t>i[n][0];)n++;const s=i[n-1][0],o=i[n][0],a=i[n-1][1],l=i[n][1],c=o-s,h=(p,b)=>(i[b][1]-i[p][1])/(i[b][0]-i[p][0]),r=h(n-1,n),u=p=>{if(p<=0)return h(0,1);if(p>=e-1)return h(e-2,e-1);const b=h(p-1,p),T=h(p,p+1);return b*T<=0?0:2*b*T/(b+T)};let f=u(n-1),d=u(n);r===0&&(f=0,d=0);const g=(t-s)/c,v=g*g,m=v*g;return(2*m-3*v+1)*a+(m-2*v+g)*c*f+(-2*m+3*v)*l+(m-v)*c*d}function Uu(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}const Hn={floorY:[[-2.26,.175],[-1.98,.118],[-1.7,gr],[1.75,gr],[2.22,.2]],floorX:[[-2.26,.56],[-1.9,.72],[0,.8],[2.22,.8]],rockY:[[-2.26,.23],[-1.95,.2],[2,.2],[2.22,.25]],rockX:[[-2.26,.68],[-1.9,.86],[-.8,.93],[.6,.95],[1.6,.98],[2.22,.93]],beltY:[[-2.26,.425],[-1.9,.52],[-1.3,.575],[-.6,.56],[.6,.58],[1.4,.64],[2.22,.665]],beltX:[[-2.26,.79],[-1.9,.95],[-1.36,.99],[-.4,.965],[.5,.985],[1.32,1.04],[2,1.01],[2.22,.97]],shY:[[-2.26,.449],[-1.95,.6],[-1.6,.74],[-1.36,.808],[-1.05,.79],[-.4,.74],[.4,.755],[1,.82],[1.32,.848],[1.8,.846],[2.22,.826]],shX:[[-2.26,.72],[-1.9,.88],[-1.36,.935],[-.5,.905],[.5,.925],[1.32,.985],[2,.96],[2.22,.925]],finX:[[-2.26,.5],[-1.9,.56],[-1.36,.62],[-.8,.63],[0,.66],[1.32,.67],[2.22,.63]],hoodY:[[-2.26,.445],[-1.6,.556],[-1,.66],[-.6,.7],[.4,.722],[1.2,.78],[1.7,.8],[2.22,.805]]},Ay=i=>fn(Hn.shY,i)+.006,hp=i=>.12*Math.pow(Math.min(1,Math.abs(i)/.74),1.25),Cy=[.24,.22,.17,.15,.12,.035,0,0,0,0],Ry=i=>1-Uu(si,si+.5,i),F0=i=>si+hp(i);function Py(i){for(const t of[pr,mr]){const e=i-t;if(Math.abs(e)<js)return Qi+Math.sqrt(js*js-e*e)}return null}const iu=6;function va(i){const t=fn(Hn.floorY,i),e=fn(Hn.floorX,i),n=fn(Hn.rockY,i),s=fn(Hn.rockX,i);let o=fn(Hn.beltY,i);const a=fn(Hn.beltX,i);let l=fn(Hn.shY,i);const c=fn(Hn.shX,i);let h=Ay(i);const r=fn(Hn.finX,i),u=fn(Hn.hoodY,i),f=Uu(si,si+.6,i),d=[[0,t],[e,t]],g=Py(i);if(g!==null)o=Math.max(o,g+.004),l=Math.max(l,o+.012),h=Math.max(h,l+.004),d.push([.62,n],[.62,g],[a,g],[a,o]);else{const v=m=>[s+(a-s)*m,n+(o-n)*m];d.push([s,n],v(.12),v(.2),[a,o])}return d.push([c,l],[r,h],[r-.1,u+.004+.012*f],[0,u]),d}const Ly=[0,0,0,1,1,1,1,1,1],Dy=(i,t,e)=>e+(Cy[i]+hp(t))*Ry(e);function Iy(){const i=[];for(let t=si;t<=di+1e-6;t+=.05)i.push(t);for(let t=si;t<si+.5;t+=.025)i.push(t);for(const t of[pr,mr]){for(let e=-1;e<=1.0001;e+=1/12)i.push(t+Math.sin(e*Math.PI/2)*js*.999);i.push(t-js-.006,t+js+.006)}return i.push(di),i.sort((t,e)=>t-e),i.filter((t,e)=>e===0||t-i[e-1]>.004).filter(t=>t>=si&&t<=di)}function Uy(){const t=Iy().map(h=>va(h).map(([r,u],f)=>[r,u,Dy(f,r,h)])),e=t[0].length,n=[[],[]],s=(h,r,u,f)=>{const d=u[0]-r[0],g=u[1]-r[1],v=u[2]-r[2],m=f[0]-r[0],p=f[1]-r[1],b=f[2]-r[2],T=g*b-v*p,S=v*m-d*b,F=d*p-g*m;T*T+S*S+F*F<1e-12||n[h].push(...r,...u,...f)};for(let h=0;h<t.length-1;h++){const r=t[h],u=t[h+1];for(let f=0;f<e-1;f++){const d=Ly[f],g=r[f],v=r[f+1],m=u[f+1],p=u[f],b=[-g[0],g[1],g[2]],T=[-v[0],v[1],v[2]],S=[-m[0],m[1],m[2]],F=[-p[0],p[1],p[2]];s(d,g,v,m),s(d,g,m,p),s(d,b,S,T),s(d,b,F,S)}}const o=t[0],a=t[t.length-1],l=[0,(o[0][1]+o[e-1][1])/2,(o[0][2]+o[e-1][2])/2],c=[0,(a[0][1]+a[e-1][1])/2,di];for(let h=0;h<e-1;h++){const r=o[h],u=o[h+1];s(0,l,u,r),s(0,l,[-r[0],r[1],r[2]],[-u[0],u[1],u[2]]);const f=a[h],d=a[h+1];s(0,c,f,d),s(0,c,[-d[0],d[1],d[2]],[-f[0],f[1],f[2]])}return n.map(h=>{let r=new Ke;return r.setAttribute("position",new Se(h,3)),r=S2(r,1e-5),r=w2(r,ui.degToRad(24)),r})}function Mr(i,t){t=Math.abs(t);const e=va(i).slice(iu);if(t>=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){const s=e[n-1],o=e[n];if(t>=o[0])return o[1]+(s[1]-o[1])*((t-o[0])/Math.max(1e-5,s[0]-o[0]))}return e[e.length-1][1]}const Fy=-1,N0=1.55,up=[[-1,.71],[-.6,.93],[-.2,1.09],[.2,1.13],[.65,1.08],[1.1,.96],[1.55,.83]],Fu=[[-1,.5],[-.75,.64],[-.3,.69],[.3,.67],[.9,.55],[1.3,.42],[1.55,.3]],Yl=[.5,.62];function Ny(i,t){const e=fn(Fu,t),n=Mr(t,e)-.004,s=Mr(t,0)+.01,o=Math.max(s,fn(up,t)),a=Math.min(1,Math.abs(i)/e),l=Math.acos(Math.pow(a,1/Yl[0]));return n+(o-n)*Math.pow(Math.sin(l),Yl[1])}const $n=9;function zy(){const i=[];for(let h=Fy;h<=N0;h+=.04)i.push(h);i.push(N0);const t=i.map(h=>{const r=fn(Fu,h),u=Mr(h,r)-.004,f=Mr(h,0)+.01,d=Math.max(f,fn(up,h)),g=[];for(let v=0;v<$n;v++){const m=v/($n-1),p=m*Math.PI/2,b=r*Math.pow(Math.cos(p),Yl[0]),T=u+(d-u)*Math.pow(Math.sin(p),Yl[1]);g.push([v===$n-1?0:b,T,h])}return g}),e=[],n=[],s=t.length;for(const h of[1,-1])for(let r=0;r<s;r++)for(let u=0;u<$n;u++){const f=t[r][u];e.push(f[0]*h,f[1],f[2])}const o=(h,r,u)=>h*s*$n+r*$n+u;for(let h=0;h<s-1;h++)for(let r=0;r<$n-1;r++){const u=o(0,h,r),f=o(0,h,r+1),d=o(0,h+1,r+1),g=o(0,h+1,r);n.push(u,f,d,u,d,g);const v=o(1,h,r),m=o(1,h,r+1),p=o(1,h+1,r+1),b=o(1,h+1,r);n.push(v,p,m,v,b,p)}{const h=t[s-1],r=e.length/3;e.push(0,h[0][1],h[0][2]);for(const u of[1,-1])for(let f=0;f<$n;f++)e.push(h[f][0]*u,h[f][1],h[f][2]);for(let u=0;u<$n-1;u++)n.push(r,r+1+u,r+2+u),n.push(r,r+1+$n+u+1,r+1+$n+u)}const a=new Ke;a.setAttribute("position",new Se(e,3)),a.setIndex(n),a.computeVertexNormals();const l=a.attributes.normal;for(let h=0;h<s;h++){const r=o(0,h,$n-1),u=o(1,h,$n-1),f=(l.getY(r)+l.getY(u))/2,d=(l.getZ(r)+l.getZ(u))/2,g=Math.hypot(f,d)||1;l.setXYZ(r,0,f/g,d/g),l.setXYZ(u,0,f/g,d/g)}const c=t.map(h=>[h[0],h[Math.round($n*.35)],h[$n-3],h[$n-1]]);return{geo:a,secs:c}}function Xs(i,t,e){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Jl(n);return s.colorSpace=xn,s.anisotropy=4,s}const Oy=()=>Xs(256,112,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#f2f3f4"),n.addColorStop(1,"#c9ccd0"),i.fillStyle=n,i.fillRect(0,0,t,e),i.strokeStyle="#3a3e44",i.lineWidth=5,i.strokeRect(6,6,t-12,e-12),i.fillStyle="#4a4f57",i.font="700 64px Arial Narrow, Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("RDSTR",t/2,e/2+4)}),th=i=>Xs(128,128,(t,e,n)=>{const s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);for(const[o,a]of i)s.addColorStop(o,a);t.fillStyle=s,t.fillRect(0,0,e,n)}),By=()=>Xs(128,128,(i,t,e)=>{const n=i.createRadialGradient(t/2,e/2,t*.08,t/2,e/2,t/2);n.addColorStop(0,"rgba(40,42,46,0.7)"),n.addColorStop(.55,"rgba(70,74,80,0.35)"),n.addColorStop(.9,"rgba(60,64,70,0.4)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)});function ky(i){const t=new Ca;t.background=new Lt(263176);const e=new ue(new Be(60,30,60),new ke({color:460556,side:Gn}));e.position.y=10,t.add(e);const n=(l,c,h,r,u,f,d,g=0)=>{const v=new ue(new Be(c,h,r),new ke({color:l}));v.position.set(u,f,d),v.rotation.y=g,t.add(v)};n(new Lt(2.2,2.2,2.4),1.2,.2,40,-4,14,0),n(new Lt(2.2,2.2,2.4),1.2,.2,40,4,14,0),n(new Lt(3.5,.3,2.6),.4,1.2,50,-29,2,0),n(new Lt(.2,2.4,3.6),.4,1.2,50,29,2,0),n(new Lt(3.5,1.2,.2),50,.8,.4,0,.6,-29),n(new Lt(1.6,1.5,1.7),50,.5,.4,0,3,29),n(new Lt(.2,1.2,2),50,.4,.4,0,.4,29),n(new Lt(1.8,1.8,2),50,.15,.4,0,6,-29);const s=new ue(new an(60,60),new ke({color:723730}));s.rotation.x=-Math.PI/2,s.position.y=-4,t.add(s);const o=new Sr(i),a=o.fromScene(t,.035);return o.dispose(),t.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()}),a.texture}const Hy=`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }`,Gy=`uniform float uLevel; uniform float uTime; uniform float uSeed; uniform vec3 uColor; uniform vec3 uCore; uniform vec3 uSmoke;
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
}`,Vy="attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Wy="uniform vec3 uColor; uniform float uOpacity; varying float vA; void main(){ gl_FragColor=vec4(uColor*vA*uOpacity,1.0); }";class z0{constructor(t,e,n=56){this.n=n,this.w=e,this.pts=[],this.ups=[];const s=n*4;this.pos=new Float32Array(s*3),this.alpha=new Float32Array(s);const o=[];for(let l=0;l<n-1;l++)for(const c of[0,2]){const h=l*4+c,r=h+1,u=h+4,f=h+5;o.push(h,r,f,h,f,u)}const a=new Ke;a.setAttribute("position",new Pn(this.pos,3).setUsage(xo)),a.setAttribute("aA",new Pn(this.alpha,1).setUsage(xo)),a.setIndex(o),this.mat=new Ve({vertexShader:Vy,fragmentShader:Wy,transparent:!0,depthWrite:!1,blending:dn,side:Ge,toneMapped:!1,uniforms:{uColor:{value:t},uOpacity:{value:0}}}),this.mesh=new ue(a,this.mat),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this.mesh.renderOrder=5,this.mesh.name="roadster-trail"}reset(){this.pts.length=0,this.ups.length=0}push(t,e,n,s=.12){const o=this.pts[0];o&&o.distanceToSquared(t)<s*s?(o.copy(t),this.ups[0][0].copy(e),this.ups[0][1].copy(n)):(this.pts.unshift(t.clone()),this.ups.unshift([e.clone(),n.clone()]),this.pts.length>this.n&&(this.pts.pop(),this.ups.pop())),this.write()}write(){const t=this.n,e=this.pos,n=this.alpha,s=this.pts.length;for(let a=0;a<t;a++){const l=Math.min(a,Math.max(0,s-1)),c=this.pts[l],h=a/(t-1),r=this.w*(1-h*.6),u=s>1&&a<s?Math.pow(1-h,1.6):0,f=a*4;if(!c){for(let v=0;v<4;v++)e.set([0,-999,0],(f+v)*3),n[f+v]=0;continue}const[d,g]=this.ups[l];e.set([c.x+d.x*r,c.y+d.y*r,c.z+d.z*r],f*3),e.set([c.x-d.x*r,c.y-d.y*r,c.z-d.z*r],(f+1)*3),e.set([c.x+g.x*r,c.y+g.y*r,c.z+g.z*r],(f+2)*3),e.set([c.x-g.x*r,c.y-g.y*r,c.z-g.z*r],(f+3)*3);for(let v=0;v<4;v++)n[f+v]=u}const o=this.mesh.geometry;o.attributes.position.needsUpdate=!0,o.attributes.aA.needsUpdate=!0}}function Xy(i={}){const t=new Je;t.name="roadster";const e=new Je;t.add(e),i.forward==="+z"&&(e.rotation.y=Math.PI);const n=new Je;e.add(n);const s=new Je;n.add(s);const o=new Ai({color:13225169,metalness:.7,roughness:.2,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.1,sheen:0}),a={value:1};function l(y,_=1,I=new Lt(1,1,1),E=0,k=0,H=0){y.onBeforeCompile=ot=>{ot.uniforms.uStudio=a,ot.uniforms.uStudioK={value:_},ot.uniforms.uStudioTint={value:I},ot.uniforms.uDesat={value:E},ot.uniforms.uCapK={value:k},ot.uniforms.uSkyCut={value:H},ot.fragmentShader=`uniform float uStudio; uniform float uStudioK; uniform vec3 uStudioTint; uniform float uDesat; uniform float uCapK; uniform float uSkyCut;
`+ot.fragmentShader.replace("#include <opaque_fragment>",`
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
      #include <opaque_fragment>`)},y.customProgramCacheKey=()=>"studio"+_+"_"+E+"_"+k+"_"+H}l(o,1,new Lt(1,1,1),.62,.5);const c=new Ai({color:789776,metalness:.35,roughness:.42,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:.9}),h=new cn({color:526603,metalness:.35,roughness:.62,envMapIntensity:.4}),r=new cn({color:1447964,metalness:.5,roughness:.55,envMapIntensity:.8}),u=new Ai({color:2303532,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.1}),f=new Ai({color:329483,metalness:.6,roughness:.14,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35,side:Ge}),d=new cn({color:13225686,metalness:1,roughness:.16,envMapIntensity:1.4}),g=new cn({color:1315862,metalness:0,roughness:.86,envMapIntensity:.45}),v=new cn({color:658189,metalness:.5,roughness:.6,envMapIntensity:.6,side:Ge}),m=new cn({color:9080210,metalness:.9,roughness:.38,envMapIntensity:1}),p=new Ai({color:10096664,metalness:.2,roughness:.35,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.9}),b=new Ai({color:11844290,metalness:.95,roughness:.18,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.35}),T=new Ai({color:3817029,metalness:.85,roughness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.2}),S=new Lt(2.1,0,.06),F=new Lt(.5,0,.02),O=new ke({color:S.clone(),toneMapped:!1}),R=new ke({color:F.clone(),toneMapped:!1}),B=new Lt(3.2,.55,.5),M=new Lt(.55,0,.03),C=new ke({color:B.clone(),toneMapped:!1}),N=new ke({color:M.clone(),transparent:!0,blending:dn,depthWrite:!1,toneMapped:!1,side:Ge}),$=new ke({color:new Lt(.12,.125,.14),transparent:!0,blending:dn,depthWrite:!1,toneMapped:!1}),et=new cn({color:11039802,metalness:1,roughness:.28,envMapIntensity:1.1,emissive:new Lt(.09,.05,.015)}),pt=new cn({color:13936974,metalness:1,roughness:.22,envMapIntensity:1.4,emissive:new Lt(.16,.09,.02)}),Mt=()=>Xs(64,64,(y,_,I)=>{const E=y.createRadialGradient(_/2,I*.9,2,_/2,I*.7,_*.6);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=E,y.fillRect(0,0,_,I)}),lt=new Lt(2.3,2.4,2.7),gt=new ke({color:lt.clone(),toneMapped:!1}),nt=new Lt(.025,.1,.18),Ct=new ke({color:nt.clone(),toneMapped:!1}),$t=new ke({color:new Lt(2.4,.9,.1),toneMapped:!1}),Qt=new ke({color:new Lt(.02,.03,.05),toneMapped:!1}),se=Oy(),Ee=new cn({map:se,emissiveMap:se,emissive:new Lt(.32,.32,.33),metalness:.1,roughness:.4}),mt=[h,et,o,c,r,u,f,d,g,v,b,T,m,p,Ee,pt];l(pt,.5,new Lt(1,.8,.45)),l(c,.32),l(u,.4),l(f,.22,new Lt(.8,.9,1.15),.2,2.5,.85),l(d,.9),l(v,.08),l(b,.7),l(T,.35),l(m,.5),l(g,.12);const ht=(y,_,I,E=0,k=0,H=0)=>{const ot=new ue(_,I);return ot.position.set(E,k,H),y.add(ot),ot},[Kt,Bt]=Uy(),Jt=ht(s,Bt,o);Jt.name="roadster-paint",ht(s,Kt,c);const xe=zy();ht(s,xe.geo,f);{const y=xe.secs.map(xt=>new $e(xt[0][0]+.004,xt[0][1]+.004,xt[0][2]));for(const xt of[1,-1]){const At=new wl(y.map(wt=>new $e(wt.x*xt,wt.y,wt.z)));ht(s,new Jr(At,40,.008,5,!1),d)}const _=[],I=[],E=30,k=8,H=-.42,ot=1.32;for(let xt=0;xt<=E;xt++){const At=xt/E,wt=H+(ot-H)*At,me=Math.min(fn(Fu,wt)*.62,.42)*(1-.25*Uu(.7,1,At));for(let ge=0;ge<=k;ge++){const Nt=-me+2*me*(ge/k);_.push(Nt,Ny(Nt,wt)+.006,wt)}if(xt<E)for(let ge=0;ge<k;ge++){const Nt=xt*(k+1)+ge,Ht=Nt+k+1;I.push(Nt,Ht,Nt+1,Nt+1,Ht,Ht+1)}}const ct=new Ke;ct.setAttribute("position",new Se(_,3)),ct.setIndex(I),ct.computeVertexNormals(),ht(s,ct,o).name="roof-panel"}const le=new Je;s.add(le);{const _=va(si).slice(iu),I=ct=>{ct=Math.abs(ct);for(let xt=1;xt<_.length;xt++){const At=_[xt-1],wt=_[xt];if(ct>=wt[0])return wt[1]+(At[1]-wt[1])*((ct-wt[0])/Math.max(1e-5,At[0]-wt[0]))}return _[_.length-1][1]},E=_[0][0]-.01,k=new ke({color:new Lt(.22,.24,.28),transparent:!0,blending:dn,depthWrite:!1,toneMapped:!1});le.userData.glowM=k,le.userData.glowBase=k.color.clone();const H=[];for(let ct=0;ct<=24;ct++){const xt=-E+2*E*(ct/24);H.push(new $e(xt,I(xt)-.004,F0(xt)-.007))}const ot=new wl(H,!1,"centripetal");ht(le,new Jr(ot,64,.0085,6,!1),gt).name="front-lightbar",ht(le,new Jr(ot,48,.022,8,!1),k).renderOrder=4;for(const ct of[1,-1]){const xt=si+.34,At=new $e(E*ct,I(E)-.002,F0(E)-.004),me=new $e((fn(Hn.shX,xt)-.02)*ct,fn(Hn.shY,xt)+.004,xt).clone().sub(At),ge=me.length(),Nt=new Vs;Nt.moveTo(0,-.012),Nt.lineTo(ge,-.004),Nt.lineTo(ge,.004),Nt.lineTo(0,.014),Nt.closePath();const Ht=new ua(Nt),Gt=new ue(Ht,gt),Xt=me.clone().normalize(),Me=new $e(.35*ct,1,-.25).normalize(),re=Me.clone().cross(Xt).normalize(),we=Xt.clone().cross(re).normalize();Gt.matrix.makeBasis(Xt,re,we).setPosition(At.clone().addScaledVector(Me,.004)),Gt.matrixAutoUpdate=!1,Gt.material.side=Ge,le.add(Gt);const fe=new ue(new ua((()=>{const De=new Vs;return De.moveTo(-.02,-.03),De.lineTo(ge+.02,-.014),De.lineTo(ge+.02,.014),De.lineTo(-.02,.035),De.closePath(),De})()),k);fe.matrix.copy(Gt.matrix),fe.matrixAutoUpdate=!1,fe.renderOrder=4,le.add(fe);const pe=ht(s,new Be(.01,.022,.085),$t,(fn(Hn.beltX,-.86)+.003)*ct,fn(Hn.beltY,-.86)+.07,-.86);pe.rotation.y=.05*ct}ht(le,new Be(1,.05,.02),r,0,.24,si+.2)}{const y=new ke({color:328966});for(const _ of[1,-1]){for(const[k,H]of[[.62,-.08],[-.88,.04]]){const ot=va(k),ct=new $e((ot[2][0]+.004)*_,ot[2][1]+.02,k-H*.5),xt=new $e((ot[5][0]+.004)*_,ot[5][1],k),At=new $e((ot[6][0]+.002)*_,ot[6][1]+.002,k+H*.3);ht(s,new Jr(new wl([ct,xt,At]),8,.0045,4,!1),y)}const I=new Vs;I.moveTo(0,0),I.lineTo(.26,0),I.lineTo(.31,.075),I.lineTo(.08,.05),I.closePath();const E=ht(s,new ua(I),r,(fn(Hn.beltX,.75)+.004)*_,.42,.86);E.rotation.y=_>0?Math.PI/2:-Math.PI/2,E.scale.x=_>0?1:-1,E.rotation.order="YXZ"}}const oe=new Je;s.add(oe);const Tt={nozzles:[]};{const y=va(di),I=y[iu+3][1]-.055,E=y[5][0]-.03,k=di+.004,H=ht(oe,new Be(2*E,.02,.008),O,0,I,k);H.name="roadster-lightbar",ht(oe,new Be(2*E-.02,.007,.008),C,0,I,k+.003);const ot=Xs(16,128,(re,we,fe)=>{const pe=re.createLinearGradient(0,0,0,fe);pe.addColorStop(0,"rgba(255,255,255,0)"),pe.addColorStop(.5,"rgba(255,255,255,1)"),pe.addColorStop(1,"rgba(255,255,255,0)"),re.fillStyle=pe,re.fillRect(0,0,we,fe)});N.map=ot;const ct=ht(oe,new an(2*E+.16,.2),N,0,I,k+.02);ct.renderOrder=4;for(const re of[1,-1]){const we=ht(oe,new Be(.012,.02,.09),O,(y[5][0]+.003)*re,I,di-.04);we.rotation.y=.04*re}ht(oe,new Be(E*1.7,.006,.01),R,0,I-.21,k),Tt.tailLeft=new ln,Tt.tailLeft.position.set(-E+.02,I,k+.03),Tt.tailRight=new ln,Tt.tailRight.position.set(E-.02,I,k+.03),oe.add(Tt.tailLeft,Tt.tailRight);const xt=ht(oe,new Be(.16,.012,.02),gt,0,.7,k+.008);xt.name="plate-lamp";const At=ht(oe,new an(1,.2),$,0,.62,k+.01);At.renderOrder=3,$.map=Mt();const wt=new Vs;wt.moveTo(-.74,0),wt.lineTo(.74,0),wt.lineTo(.82,.24),wt.lineTo(.78,.3),wt.lineTo(-.78,.3),wt.lineTo(-.82,.24),wt.closePath();const me=ht(oe,new ha(wt,{depth:.03,bevelEnabled:!1}),h,0,.2,di-.025);me.name="diffuser-face";const ge=ht(oe,new Be(1.5,.02,.62),u,0,.2,di-.3);ge.rotation.x=-.28;for(let re=-2;re<=2;re++){const we=ht(oe,new Be(.018,.12,.5),u,re*.26,.2,di-.22);we.rotation.x=-.28}const Nt=new Je;Nt.position.set(0,.555,k+.006),oe.add(Nt);const Ht=ht(Nt,new an(.3,.13),Ee,0,.065,.004);Ht.name="plate",ht(Nt,new Be(.36,.15,.008),r,0,.065,-.001),oe.userData.plateHinge=Nt;const Gt=new cn({color:5922406,metalness:1,roughness:.22,envMapIntensity:1.1});mt.push(Gt),l(Gt,.5);const Xt=new cn({color:328966,metalness:.6,roughness:.5,side:Ge});mt.push(Xt),[[-.39,.4,!1],[-.13,.4,!1],[.13,.4,!1],[.39,.4,!1],[0,.62,!0]].forEach(([re,we,fe])=>{const pe=new Je;pe.position.set(re,we,fe?di-.01:k+.012),oe.add(pe);const De=fe?.05:.058;ht(pe,new Ts(De,fe?.008:.0095,8,36),Gt),ht(pe,new Ts(De*.86,.004,6,32),r,0,0,-.012);const Ce=ht(pe,new tn(De*.95,De*.8,.12,24,1,!0),Xt,0,0,-.06);Ce.rotation.x=Math.PI/2,ht(pe,new as(De*.8,24),Qt,0,0,-.11),pe.userData.main=fe,pe.userData.dir=new $e(0,-.06,1),Tt.nozzles.push(pe)});{const re=new ue(new an(1.12,.15),h);re.position.set(0,.4,k+.001),oe.add(re)}}{const ot=Ht=>.4*(.2969*Math.sqrt(Ht)-.126*Ht-.3516*Ht*Ht+.2843*Ht**3-.1036*Ht**4),ct=Ht=>-.03*Math.sin(Ht*Math.PI)+.04*Ht*Ht,xt=[];for(let Ht=0;Ht<=14;Ht++){const Gt=.5*(1-Math.cos(Ht/14*Math.PI));xt.push([Gt,ct(Gt)+ot(Gt)])}for(let Ht=13;Ht>=1;Ht--){const Gt=xt[Ht][0];xt.push([Gt,ct(Gt)-ot(Gt)])}const At=xt.length,wt=[],me=[];for(let Ht=0;Ht<=24;Ht++){const Gt=Ht/24*2-1;for(let Xt=0;Xt<At;Xt++){const[Me,re]=xt[Xt];wt.push(Gt*1.96/2,re*.3,-.3/2+Me*.3)}}for(let Ht=0;Ht<24;Ht++)for(let Gt=0;Gt<At;Gt++){const Xt=Ht*At+Gt,Me=Ht*At+(Gt+1)%At,re=Xt+At,we=Me+At;me.push(Xt,re,Me,Me,re,we)}const ge=new Ke;ge.setAttribute("position",new Se(wt,3)),ge.setIndex(me),ge.computeVertexNormals();const Nt=ht(s,ge,o,0,1.02,2.12);Nt.name="wing",ht(s,new Be(1.96*.97,.007,.008),O,0,1.02+ct(1)*.3+.002,2.12+.3/2+.003).name="wing-light";for(const Ht of[1,-1]){const Gt=new Vs;Gt.moveTo(-.3*.5,.025),Gt.lineTo(.3*.52,.03),Gt.lineTo(.3*.42,-.035),Gt.lineTo(-.3*.3,-.025),Gt.closePath();const Xt=new ha(Gt,{depth:.012,bevelEnabled:!1});Xt.translate(0,0,-.006),Xt.rotateY(-Math.PI/2),ht(s,Xt,u,Ht*(1.96/2+.003),1.02,2.12);const Me=.8*Ht,re=1.86,we=Mr(re,.8),fe=new $e(Me,we-.01,re),pe=new $e(Me,1.02-.012,2.12+.02),De=pe.clone().sub(fe),Ce=De.length(),en=ht(s,new Be(.018,Ce,.08),u,(fe.x+pe.x)/2,(fe.y+pe.y)/2,(fe.z+pe.z)/2);en.rotation.x=Math.atan2(De.z,De.y),ht(s,new Be(.03,.012,.14),u,Me,we-.004,re)}}const zt=[],V=By(),jt=new Ai({color:1579035,metalness:0,roughness:.62,sheen:.4,sheenRoughness:.6,sheenColor:new Lt(.25,.26,.3),envMapIntensity:.5}),It=new cn({color:13817564,metalness:1,roughness:.25,envMapIntensity:1.35}),te=new cn({color:2764083,metalness:.85,roughness:.36,envMapIntensity:1,alphaTest:.5,side:Ge}),Wt=new Ai({color:14870251,metalness:.35,roughness:.32,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:1,emissive:new Lt(.08,.085,.095)});mt.push(jt,It,te,Wt),l(Wt,.45),l(jt,.1),l(It,.75),l(te,.3),te.alphaMap=Xs(256,256,(y,_,I)=>{y.fillStyle="#fff",y.fillRect(0,0,_,I),y.fillStyle="#000";const E=_/2,k=I/2,H=_/2;for(let ot=0;ot<6;ot++){const ct=ot/6*Math.PI*2+Math.PI/6-.3,xt=ct+.6;y.beginPath();for(let At=0;At<=8;At++){const wt=ct+(xt-ct)*At/8;y.lineTo(E+Math.sin(wt)*H*.86,k-Math.cos(wt)*H*.86)}for(let At=8;At>=0;At--){const wt=ct+.12+(xt-ct-.24)*At/8;y.lineTo(E+Math.sin(wt)*H*.42,k-Math.cos(wt)*H*.42)}y.closePath(),y.fill()}}),te.alphaMap&&(te.alphaMap.colorSpace=ws),m.map=Xs(256,256,(y,_,I)=>{const E=_/2,k=I/2;y.fillStyle="#9a9da2",y.fillRect(0,0,_,I),y.strokeStyle="#2a2c30",y.lineWidth=4;for(let H=0;H<36;H++){const ot=H/36*Math.PI*2;y.beginPath();for(let ct=0;ct<=6;ct++){const xt=.6+.3*ct/6,At=ot+.25*ct/6;y.lineTo(E+Math.cos(At)*xt*_/2,k+Math.sin(At)*xt*I/2)}y.stroke()}y.fillStyle="#1a1b1e",y.beginPath(),y.arc(E,k,_*.27,0,Math.PI*2),y.fill()});function tt(y){const _=y?.29:.33,I=Qi,E=.272,k=new Je,H=new Je;k.add(H);{const we=_/2,fe=.032,pe=[];pe.push([E-.004,we-.022],[E+.012,we-.004],[E+.04,we+.004],[I-.06,we+.006],[I-fe-.006,we+.002]);for(let Yt=0;Yt<=5;Yt++){const ae=Yt/5*Math.PI/2;pe.push([I-fe+Math.sin(ae)*fe,we-fe+Math.cos(ae)*fe+.002*Math.cos(ae)])}const De=pe.map(([Yt,ae])=>new Dt(Yt,ae)).reverse(),Ce=pe.map(([Yt,ae])=>new Dt(Yt,-ae)),en=new ro(De,48);en.rotateZ(-Math.PI/2);const Xn=new ro(Ce,48);Xn.rotateZ(-Math.PI/2),ht(H,Tl([en,Xn]),jt);const yn=[];for(let Yt=0;Yt<=6;Yt++)yn.push(new Dt(I+.002*Math.sin(Math.PI*Yt/6),-(we-fe)+2*(we-fe)*(Yt/6)));const Ln=new ro(yn,48);Ln.rotateZ(-Math.PI/2),ht(H,Ln,g)}const ot=new tn(E,E,_-.04,32,1,!0);ot.rotateZ(Math.PI/2),ht(H,ot,r);const ct=new Ts(E,.009,6,48);ct.rotateY(Math.PI/2),ht(H,ct,It,_/2-.022,0,0);const xt=new Ts(E-.014,.004,5,64);xt.rotateY(Math.PI/2),ht(H,xt,Ct,_/2-.028,0,0);const At=new Io(.075,E-.004,40);At.rotateY(Math.PI/2),ht(H,At,v,-_/2+.04,0,0);const wt=new as(E-.006,48);wt.rotateY(Math.PI/2),ht(H,wt,Wt,_/2-.05,0,0);{const fe=E-.004,pe=new Vs;pe.moveTo(.06,-.024),pe.lineTo((.06+fe)/2,-.013),pe.lineTo(fe,-.01),pe.lineTo(fe+.003,0),pe.lineTo(fe,.01),pe.lineTo((.06+fe)/2,.013),pe.lineTo(.06,.024),pe.closePath();const De=new ha(pe,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:1,steps:1,curveSegments:4}),Ce=De.attributes.position;for(let he=0;he<Ce.count;he++){const nn=Ce.getX(he),ie=Ce.getY(he),wn=Ce.getZ(he),Mn=ui.clamp((nn-.06)/(fe-.06),0,1),Te=.62*Mn*Mn,_i=nn*Math.cos(Te)-ie*Math.sin(Te),ds=nn*Math.sin(Te)+ie*Math.cos(Te),ps=wn-.02-.012*Mn+.006*Math.sin(Math.PI*Mn)*(ie>0?1:-.4);Ce.setXYZ(he,ps,_i,ds)}De.computeVertexNormals();const en=(he,nn)=>{const ie=he.groups[nn],wn=new Ke;for(const Mn of["position","normal","uv"]){const Te=he.attributes[Mn];Te&&wn.setAttribute(Mn,new Pn(Te.array.slice(ie.start*Te.itemSize,(ie.start+ie.count)*Te.itemSize),Te.itemSize))}return wn},Xn=en(De,0),yn=en(De,1),Ln=[],Yt=[];for(let he=0;he<6;he++)Ln.push(Xn.clone().rotateX(he/6*Math.PI*2)),Yt.push(yn.clone().rotateX(he/6*Math.PI*2));const ae=new Je;H.add(ae),ae.position.x=_/2-.012,ae.add(new ue(Tl(Ln),T)),ae.add(new ue(Tl(Yt),h))}const me=new tn(.06,.075,.05,6);me.rotateZ(Math.PI/2),ht(H,me,T,_/2-.045,0,0);const ge=new tn(.034,.034,.012,20);ge.rotateZ(Math.PI/2),ht(H,ge,d,_/2-.016,0,0);const Nt=new ke({map:V,transparent:!0,opacity:0,depthWrite:!1}),Ht=new as(E,32);Ht.rotateY(Math.PI/2);const Gt=ht(k,Ht,Nt,_/2-.004,0,0);Gt.visible=!1;const Xt=new tn(.24,.24,.032,48,1,!1);Xt.rotateZ(Math.PI/2),ht(H,Xt,m,.01,0,0);const Me=new tn(.1,.1,.05,24);Me.rotateZ(Math.PI/2),ht(H,Me,r,.04,0,0);const re=ht(k,new Be(.075,.2,.1),p,.045,0,0);return re.position.set(.045,Math.cos(y?.9:2.2)*.2,Math.sin(y?.9:2.2)*.2),re.rotation.x=(y?.9:2.2)+Math.PI/2,{steer:k,spin:H,blur:Gt,bm:Nt,front:y}}for(const[y,_,I]of[[U0,pr,!0],[-U0,pr,!0],[I0+.01,mr,!1],[-I0-.01,mr,!1]]){const E=tt(I),k=new Je;k.position.set(y,Qi,_),y<0&&(k.scale.x=-1),k.add(E.steer),n.add(k),E.mount=k,E.baseY=Qi,E.side=Math.sign(y);{const H=r;for(const[ct,xt]of[[.09,.5],[-.1,.56]])for(const At of[-.13,.13]){const wt=ht(k,new tn(.014,.014,xt,6),H,-.12-xt/2*.95,ct,At*.6);wt.rotation.z=Math.PI/2,wt.rotation.y=-At*.9}const ot=ht(k,new tn(.035,.035,.34,8),d,-.3,.12,0);ot.rotation.z=.9}zt.push(E)}Tt.wheels=zt.map(y=>{const _=new ln;return _.position.set(0,-Qi,0),_.name="tyre-contact",_.userData.front=y.front,_.userData.dir=new $e(0,.3,1),y.mount.add(_),_});{const y=new an(1.3,3.7);y.rotateX(Math.PI/2),ht(s,y,h,0,gr+.004,.05).name="floor";const _=ht(s,new Be(.34,.05,2.6),u,0,gr+.03,-.1);_.name="floor-tunnel";for(const H of[1,-1])ht(s,new Be(.05,.035,2.1),r,.5*H,gr+.02,-.05);for(let H=-2;H<=2;H++){const ot=ht(s,new Be(.02,.09,.85),u,H*.22,.17,1.62);ot.rotation.x=-.2}const I=ht(s,new Be(1,.02,.4),u,0,gr+.012,-1.8);I.rotation.x=.06;const E=new tn(js-.012,js-.012,.3,24,1,!0,0,Math.PI);E.rotateZ(Math.PI/2);const k=new cn({color:328966,metalness:.2,roughness:.85,side:Ge});for(const H of[pr,mr])for(const ot of[1,-1]){const ct=ht(s,E,k,.8*ot,Qi,H);ct.rotation.x=0,ct.name="wheel-liner"}}const at=Xs(128,256,(y,_,I)=>{const E=y.createRadialGradient(_/2,I/2,4,_/2,I/2,_/2);E.addColorStop(0,"rgba(0,0,0,0.85)"),E.addColorStop(.6,"rgba(0,0,0,0.55)"),E.addColorStop(1,"rgba(0,0,0,0)"),y.save(),y.scale(1,I/_),y.fillStyle=E,y.fillRect(0,0,_,_),y.restore()}),A=new ke({map:at,transparent:!0,depthWrite:!1,opacity:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),w=ht(n,new an(2.5,5.2),A,0,.012,0);w.rotation.x=-Math.PI/2,w.renderOrder=-1;const G=th([[0,"rgba(255,255,255,1)"],[.4,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),q=ht(n,new an(2,4.4),new ke({map:G,color:new Lt(.05,.35,.55),transparent:!0,blending:dn,depthWrite:!1,toneMapped:!1}),0,.02,.05);q.rotation.x=-Math.PI/2;const K=(y,_,I,E)=>new Ve({vertexShader:Hy,fragmentShader:Gy,transparent:!0,depthWrite:!1,side:Ge,blending:dn,toneMapped:!1,uniforms:{uLevel:{value:0},uTime:{value:0},uSeed:{value:y},uColor:{value:_},uCore:{value:I},uSmoke:{value:E}}}),W=new Lt(.38,.72,1).multiplyScalar(.38),rt=new Lt(.75,.92,1.1).multiplyScalar(.55),it=new Lt(.62,.68,.76).multiplyScalar(.22),J=new Lt(.35,.6,.9).multiplyScalar(.07),ut=new Lt(.7,.74,.8).multiplyScalar(.1),U=(y,_,I=20,E=16)=>{const k=new tn(y,_,1,I,E,!0);return k.translate(0,-.5,0),k.rotateX(-Math.PI/2),k},Y=th([[0,"rgba(255,255,255,1)"],[.3,"rgba(200,235,255,0.55)"],[1,"rgba(120,190,255,0)"]]),dt=th([[0,"rgba(255,255,255,0.75)"],[.4,"rgba(225,232,240,0.35)"],[1,"rgba(200,210,225,0)"]]),yt=[];{const y=U(.042,.2,18,18),_=U(.07,.42,14,10);for(const I of Tt.nozzles){const E=I.userData.main,k=K(I.position.x*3.1,W,rt,it),H=new Je;I.add(H),H.rotation.x=.06,H.userData.main=E;const ot=new ue(y,k);ot.frustumCulled=!1,ot.renderOrder=6,H.add(ot);const ct=K(I.position.x*5.3+1,J,J,ut),xt=new ue(_,ct);xt.frustumCulled=!1,xt.renderOrder=6,H.add(xt);const At=new Sl(new aa({map:Y,color:new Lt(.5,.8,1),blending:dn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));At.scale.setScalar(E?.14:.11),At.position.z=.02,I.add(At),ot.visible=xt.visible=!1,yt.push({nz:I,mat:k,coreMat:ct,plume:ot,core:xt,spr:At,main:E,pivot:H})}}const Q=[];Tt.rcs={down:[],left:[],right:[],pitchUp:[],pitchDown:[]};{const y=U(.05,.24,18,20),_=U(.08,.6,14,12),I=new $e(0,0,1),E=new tn(.034,.024,.05,16,1,!0);E.rotateX(Math.PI/2);const k=new Ts(.034,.005,6,20),H=new as(.026,16),ot=new cn({color:394759,metalness:.6,roughness:.45,side:Ge});mt.push(ot);let ct=0;const xt=(At,wt,me,ge,Nt)=>{const Ht=new Je;Ht.position.set(wt,me,ge),s.add(Ht),Ht.quaternion.setFromUnitVectors(I,Nt.clone().normalize()),Ht.userData.dir=new $e(0,0,1),ct+=.37;const Gt=K(ct,W,rt,it),Xt=new ue(y,Gt);Xt.frustumCulled=!1,Xt.renderOrder=6,Ht.add(Xt);const Me=K(ct+1.1,J,J,ut),re=new ue(_,Me);re.renderOrder=6,re.frustumCulled=!1,Ht.add(re);const we=new Sl(new aa({map:Y,color:new Lt(.55,.82,1),blending:dn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));we.scale.setScalar(.12),we.position.z=.03,we.renderOrder=6,Ht.add(we);const fe=we.material,pe=new Sl(new aa({map:dt,color:new Lt(.32,.34,.37),blending:dn,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}));if(pe.renderOrder=6,Ht.add(pe),Xt.visible=we.visible=re.visible=pe.visible=!1,At==="left"||At==="right"){const De=new ue(E,ot);De.position.z=-.02,Ht.add(De);const Ce=new ue(k,d);Ht.add(Ce);const en=new ue(H,Qt);en.position.z=-.03,Ht.add(en)}Tt.rcs[At].push(Ht),Q.push({key:At,nz:Ht,mat:Gt,coreMat:fe,plume:Xt,core:we,haze:re,hazeMat:Me,puff:pe,lvl:0})};for(const At of[pr-.05,mr+.1])for(const wt of[-.72,.72])xt("down",wt,gr+.005,At,new $e(0,-1,0));for(const[At,wt]of[[-1.78,fn(Hn.beltY,-1.78)-.07],[1.86,.56]]){const me=fn(Hn.beltX,At)-.03;xt("left",-me,wt,At,new $e(-1,.05,0)),xt("right",me,wt,At,new $e(1,.05,0))}xt("pitchUp",0,.22,si+.35,new $e(0,-1,0)),xt("pitchUp",0,Mr(di-.1,0)+.004,di-.1,new $e(0,1,0)),xt("pitchDown",0,Mr(si+.5,0)+.004,si+.5,new $e(0,1,0)),xt("pitchDown",0,.25,di-.2,new $e(0,-1,0))}let _t=null;i.headlight!==!1&&(_t=new zd(15134463,40,45,.48,.65,1.4),_t.position.set(0,.5,-2.1),_t.target.position.set(0,0,-16),s.add(_t,_t.target)),Tt.camTarget=new ln,Tt.camTarget.position.set(0,.7,0),s.add(Tt.camTarget);const St=new Je;St.name="roadster-trails";const Rt=new z0(new Lt(1.5,0,.06),.022),D=new z0(new Lt(1.5,0,.06),.022);i.trails!==!1&&St.add(Rt.mesh,D.mesh);let z=i.renderer||null,X=null,st=i.envMap||null,vt=null;Jt.onBeforeRender=(y,_)=>{z=y,X=_};let bt=null;function Pt(){const y=X&&X.environment;let _=null;if(bt)_=bt;else if(!y){if(!st&&z)try{st=ky(z)}catch{st=null}_=st}if(_!==vt){for(const I of mt)I.envMap=_,I.needsUpdate=!0;vt=_}}const Z={time:0,spinAngle:0,steer:0,pitch:0,pitchV:0,roll:0,rollV:0,heave:0,heaveV:0,lastPos:null,lastVel:new $e,vel:new $e,speed:0,flyBlend:0,armed:0,jet:0,pulse:0,lights:1,plate:0,brake:0,trailFade:0,wasFlying:!1,boost:0},ne=new $e,ye=new Qn,Fe=new $e,qe=new $e,gn=new $e,oi=new $e;function ai(y){let _=y;for(;_.parent;)_=_.parent;return _!==y?_:null}function Ji(){Rt.reset(),D.reset(),Rt.write(),D.write(),Z.lastPos=null,Z.pitch=Z.pitchV=Z.roll=Z.rollV=Z.heave=Z.heaveV=0,Z.pulse=0,Z.rollRate=0,Z.prevQ=null,Z.visAngle=Z.visAngle||0,Z.time=0,Z.spinAngle=0,Z.jet=0,Z.trailFade=0,Z.flyBlend=0,Z.wasFlying=!1,Z.speed=0,Z.vel.set(0,0,0),Z.lastVel.set(0,0,0),Ut=null}const j={};let Ot=!0,Zt=!1,Ut=null;function Ft(y=1/60,_){Ot=!0,Zt=!1,ve(y,_?Object.assign({},j,_):j)}function kt(y){if(y){if(Number.isFinite(y.v)&&(j.speed=y.v),typeof y.rev=="number"&&(j.rev=y.rev),typeof y.boostV=="number"&&(j.boost=ui.clamp(y.boostV/9,0,1)),typeof y.thrustArm=="number"&&(j.armed=y.thrustArm),typeof y.thrust=="number"&&(j.thrust=y.thrust),typeof y.airborne=="boolean"&&(j.airborne=y.airborne),typeof y.section=="string"&&(j.flying=y.mode?y.mode==="flipAir"||y.mode==="fly":y.section==="flight"||y.section==="outro"&&!!y.airborne),y.rcs&&(j.rcs=y.rcs),typeof y.finished=="boolean"&&(j.brake=y.finished?1:0),Ot||(Zt=!0),Ot=!1,Zt){const _=Number.isFinite(y.t)?y.t:null,I=_!==null&&Ut!==null&&_>Ut?_-Ut:1/60;ve(I,j)}Ut=Number.isFinite(y.t)?y.t:null}}function ve(y,_){if(y=Math.min(Math.max(y||0,0),.1),y===0)return;Z.time+=y,Pt(),t.updateWorldMatrix(!0,!1),t.matrixWorld.decompose(ne,ye,gn),Fe.set(0,0,i.forward==="+z"?1:-1).applyQuaternion(ye),qe.set(0,1,0).applyQuaternion(ye);let I=!1;Z.lastPos&&(oi.subVectors(ne,Z.lastPos),oi.length()>Math.max(8,200*y)?I=!0:Z.vel.copy(oi).divideScalar(y)),Z.lastPos||(Z.lastPos=new $e),Z.lastPos.copy(ne),I&&(Ji(),Z.lastPos=ne.clone(),Z.vel.set(0,0,0)),Z.prevQ||(Z.prevQ=ye.clone());{const ie=ye.clone().multiply(Z.prevQ.clone().invert());ie.w<0&&(ie.x=-ie.x,ie.y=-ie.y,ie.z=-ie.z,ie.w=-ie.w);const wn=2*Math.acos(Math.min(1,ie.w)),Mn=Math.sqrt(Math.max(1e-9,1-ie.w*ie.w)),Te=I?0:wn/y*((ie.x*Fe.x+ie.y*Fe.y+ie.z*Fe.z)/Mn);Z.rollRate=(Z.rollRate||0)+((Number.isFinite(Te)?Te:0)-(Z.rollRate||0))*Math.min(1,y*12),Z.prevQ.copy(ye)}const E=Z.vel.dot(Fe),k=Number.isFinite(_.speed)?_.speed:E;let H=Number.isFinite(_.accel)?_.accel:(k-Z.speed)/y;H=ui.clamp(H,-40,40),Z.speed=k;const ot=!!(_.airborne??_.flying??_.grounded===!1),ct=!!(_.flying??!1),xt=ui.clamp(typeof _.rev=="number"?_.rev:0,0,1),At=typeof _.armed=="number"?_.armed:_.armed?1:0,wt=ui.clamp(_.steer||0,-1,1),me=typeof _.lights=="number"?_.lights:Z.lights;Z.lights+=(me-Z.lights)*Math.min(1,y*12);const ge=typeof _.boost=="number"?_.boost:_.boost?1:0;Z.boost+=(ge-Z.boost)*Math.min(1,y*6);const Nt=typeof _.brake=="number"?_.brake:_.brake?1:0;Z.brake+=(Nt-Z.brake)*Math.min(1,y*15);const Ht=ot?k*Math.max(0,1-Z.flyBlend):k;Z.spinAngle-=Ht/Qi*y,Z.steer+=(wt*.32-Z.steer)*Math.min(1,y*10);const Gt=Math.abs(Ht/Qi),Xt=ui.clamp((Gt-25)/60,0,.32),Me=Ht/Qi,re=13;Z.visAngle=(Z.visAngle||0)-Math.sign(Me)*Math.min(Math.abs(Me),re+Math.max(0,Math.abs(Me)-re)*.04)*y;for(const ie of zt)ie.spin.rotation.x=Z.visAngle,ie.steer.rotation.y=ie.front?Z.steer*ie.side:0,ie.bm.opacity=Xt,ie.blur.visible=Xt>.01;Z.flyBlend+=((ot?1:0)-Z.flyBlend)*Math.min(1,y*5),Z.wasFlying&&!ot&&qt(.8),Z.wasFlying=ot;const we=Z.vel.dot(qe),fe=Z.lastVel.dot(qe);!ot&&fe<-4&&we-fe>3&&qt(Math.min(2,(we-fe)/6)),Z.lastVel.copy(Z.vel);const pe=ot?.02:ui.clamp(H*.0028+xt*.018,-.05,.06),De=ot?0:ui.clamp(-wt*Math.min(1,Math.abs(k)/30)*.045,-.06,.06),Ce=ot?0:(Math.sin(Z.time*23)*.6+Math.sin(Z.time*37+1.3)*.4)*(Math.min(1,Math.abs(k)/40)*.003+xt*.0035),en=140,Xn=16;Z.pitchV+=((pe-Z.pitch)*en-Z.pitchV*Xn)*y,Z.pitch+=Z.pitchV*y,Z.rollV+=((De-Z.roll)*en-Z.rollV*Xn)*y,Z.roll+=Z.rollV*y,Z.heaveV+=((Ce-Z.heave)*220-Z.heaveV*18)*y,Z.heave+=Z.heaveV*y,Z.heave<-.1&&(Z.heave=-.1,Z.heaveV=Math.max(0,Z.heaveV)),s.rotation.x=Z.pitch,s.rotation.z=Z.roll,s.position.y=Z.heave;const yn=Z.flyBlend*.06;for(const ie of zt)ie.mount.position.y=ie.baseY-yn;Z.armed+=(At-Z.armed)*Math.min(1,y*4);const Ln=typeof _.thrust=="number"?_.thrust:_.thrust?1:0;Z.pulse=Math.max(0,Z.pulse-y*2.6);const Yt=Math.min(1.6,Math.max(Ln,Z.pulse*1.3)+Z.armed*.12+(ct?.18:0));Z.jet+=(Yt-Z.jet)*Math.min(1,y*20),Z.plate+=((Z.armed>.3||ct?1:0)-Z.plate)*Math.min(1,y*6),oe.userData.plateHinge.rotation.x=Z.plate*1.45;const ae=Math.min(1,Z.armed*.5+Z.jet);Qt.color.setRGB(.02+ae*.5,.03+ae*1.2,.05+ae*2.6);for(const ie of yt){const wn=Z.jet*(ie.main?Z.plate:1);ie.pivot.rotation.x=.06+(ct?Z.flyBlend:0)*(ie.main?.75:.45),ie.nz.userData.dir.set(0,-Math.sin(ie.pivot.rotation.x),Math.cos(ie.pivot.rotation.x));const Mn=wn>.02;ie.plume.visible=ie.core.visible=Mn,ie.mat.uniforms.uLevel.value=Math.min(1.3,wn),ie.coreMat.uniforms.uLevel.value=Math.min(1.3,wn),ie.mat.uniforms.uTime.value=ie.coreMat.uniforms.uTime.value=Z.time;const Te=.5+1.9*Math.min(1.3,wn)+(ie.main?.3:0);ie.plume.scale.set(1,1,Te),ie.core.scale.set(1,1,Te*1.1),ie.spr.material.opacity=Math.min(.8,ae*.6)*(ie.main?Z.plate:1),ie.spr.visible=ie.spr.material.opacity>.01}{const ie=_.rcs||{},wn=typeof ie.pitch=="number"?ie.pitch:_.jetsPitch||0,Mn={down:ie.down??_.jetsDown??0,left:ie.left??_.jetsLeft??0,right:ie.right??_.jetsRight??0,pitchUp:Math.max(0,wn),pitchDown:Math.max(0,-wn)};if(ot&&Math.abs(Z.rollRate)>1.2){const Te=ui.clamp((Math.abs(Z.rollRate)-1.2)/2.5,0,1)*.95,_i=Z.rollRate>0?"right":"left";Mn[_i]=Math.max(+Mn[_i]||0,Te)}for(const Te of Q){const _i=ui.clamp(+Mn[Te.key]||0,0,1.3);Te.lvl+=(_i-Te.lvl)*Math.min(1,y*22);const ds=Te.lvl>.03;if(Te.plume.visible=Te.core.visible=Te.haze.visible=Te.puff.visible=ds,!ds)continue;const ps=Te.key==="down",Oi=Te.key==="left"||Te.key==="right",Tn=Math.min(1.2,Te.lvl),ms=ps?1.2+2.8*Tn:Oi?.8+1.7*Tn:.5+1*Tn,Bi=.85+.25*Tn;Te.plume.scale.set(Bi,Bi,ms),Te.haze.scale.set(Bi,Bi,ms*1.08),Te.mat.uniforms.uLevel.value=Math.min(1.25,Tn*1.1),Te.hazeMat.uniforms.uLevel.value=Math.min(1,Tn),Te.coreMat.opacity=Math.min(.9,.35+Tn*.5),Te.core.scale.setScalar(.1+.05*Tn),Te.mat.uniforms.uTime.value=Te.hazeMat.uniforms.uTime.value=Z.time,Te.puff.position.z=ms*1.02,Te.puff.scale.setScalar((.55+.35*Tn)*(.92+.08*Math.sin(Z.time*37+Te.nz.position.x*9))),Te.puff.material.opacity=Math.min(.5,Tn*(ps?.4:.25))}}const he=Z.lights,nn=1+Z.brake*.8+Z.boost*.3;if(O.color.copy(S).multiplyScalar(he*nn),R.color.copy(F).multiplyScalar(he*(1+Z.brake)),C.color.copy(B).multiplyScalar(he*nn),N.color.copy(M).multiplyScalar(he*nn),$.opacity=he,a.value=.25+.75*he,gt.color.copy(lt).multiplyScalar(he),le.userData.glowM&&le.userData.glowM.color.copy(le.userData.glowBase).multiplyScalar(he),Ct.color.copy(nt).multiplyScalar(he*(.7+.6*Z.boost+.6*Z.armed)),_t&&(_t.intensity=40*he),A.opacity=.9*(1-Z.flyBlend),q.material.opacity=he*(1-Z.flyBlend*.7),i.trails!==!1){if(!St.parent){const ie=ai(t);ie&&ie.add(St)}if(St.parent){const ie=ui.clamp((Math.abs(k)-6)/20,0,1)*he;Z.trailFade+=(ie-Z.trailFade)*Math.min(1,y*4),Rt.mat.uniforms.uOpacity.value=D.mat.uniforms.uOpacity.value=Z.trailFade*(1+Z.boost*.6),gn.set(1,0,0).applyQuaternion(ye);const wn=St.parent.matrixWorld.clone().invert();for(const[Mn,Te]of[[Rt,Tt.tailLeft],[D,Tt.tailRight]]){Te.updateWorldMatrix(!0,!1);const _i=new $e().setFromMatrixPosition(Te.matrixWorld).applyMatrix4(wn);Mn.push(_i,qe,gn)}}}}function _e(y=1){Z.pulse=Math.min(1.5,Z.pulse+y)}function qt(y=1){Z.heaveV-=1.35*Math.min(1.6,y),Z.pitchV-=.45*y}function L(y){Z.lights=ui.clamp(y,0,1)}const x={object:t,group:t,root:t,mesh:t,body:s,chassis:n,wheels:zt,anchors:Tt,trails:St,dims:{length:4.5,width:2.04,height:1.14,wheelRadius:Qi,wheelBase:mr-pr},materials:{paint:o,trim:c,glass:f,carbon:u,tailM:O,headM:gt,ringM:Ct},update:Ft,thrustPulse:_e,land:qt,reset:Ji,setLights:L,setState:kt,setSpeed(y){Number.isFinite(y)&&(j.speed=y)},setThrusters(y){j.thrust=+y||0},setBoost(y){j.boost=+y||0},setRev(y){j.rev=+y||0},setBrake(y){j.brake=+y||0},setEnvMap(y){y!==bt&&(bt=y||null,Pt())},get speed(){return Z.speed},dispose(){t.traverse(y=>{y.geometry&&y.geometry.dispose()}),St.traverse(y=>{y.geometry&&y.geometry.dispose()}),St.parent&&St.parent.remove(St)}};return t.userData.car=x,t.userData.thrusters=Tt.nozzles,x}const fp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qy=new yu(-1,1,1,-1,0,1);class Yy extends Ke{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}const $y=new Yy;class rc{constructor(t){this._mesh=new ue($y,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ky extends Cr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ji.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new rc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class O0 extends Cr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class jy extends Cr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Zy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new Ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ky(fp),this.copyPass.material.blending=Ps,this.clock=new b2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}O0!==void 0&&(a instanceof O0?n=!0:a instanceof jy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jy extends Cr{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Qy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Co extends Cr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Dt(t.x,t.y):new Dt(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ti(o,a,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ti(o,a,{type:Ui});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ti(o,a,{type:Ui});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const l=Qy;this.highPassUniforms=ji.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Dt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const r=fp;this.copyUniforms=ji.clone(r.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new rc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Dt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=Co.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Co.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Dt(.5,.5)},direction:{value:new Dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Co.BlurDirectionX=new Dt(1,0);Co.BlurDirectionY=new Dt(0,1);const Ws=59/136,tM=58.13,eM=[["intro",0,16],["drop1",16,48],["break",48,56],["loop",56,88],["build",88,96],["flight",96,128],["outro",128,136]];function nM(i){const t=i/Ws;for(const e of eM)if(t<e[2])return e[0];return"outro"}const Hs=i=>Math.min(1,Math.max(0,i)),xa=(i,t,e)=>{const n=Hs((e-i)/(t-i));return n*n*(3-2*n)};function iM(i){const t=i/Ws;return t<16?0:t<48?.35+.6*xa(16,40,t):t<56?.55:t<88?.85:t<96?.7:t<128?.9:.9*(1-xa(128,134.5,t))}function B0(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const eh={uniforms:{tDiffuse:{value:null},uRes:{value:new Dt(1,1)},uTime:{value:0},uSpeed:{value:0},uCA:{value:0},uExposure:{value:1},uVignette:{value:.55},uGrain:{value:.045},uFlash:{value:0},uFlashColor:{value:new Lt(1,1,1)},uSat:{value:1.12},uContrast:{value:1.08},uShadowTint:{value:new Lt(.012,.006,.03)},uCenter:{value:new Dt(.5,.56)},uCar:{value:new Dt(.5,.4)}},vertexShader:`
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
  `};class sM extends Cr{constructor(){super(),this.uniforms=ji.clone(eh.uniforms),this.material=new Ve({uniforms:this.uniforms,vertexShader:eh.vertexShader,fragmentShader:eh.fragmentShader,depthTest:!1,depthWrite:!1}),this.fsQuad=new rc(this.material)}setSize(t,e){this.uniforms.uRes.value.set(t,e)}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rM extends Cr{constructor(){super(),this.uniforms={tDiffuse:{value:null},uMax:{value:24}},this.material=new Ve({uniforms:this.uniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
          c.rgb = max(c.rgb, vec3(0.0));
          float m = max(c.r, max(c.g, c.b));
          if (m > uMax) c.rgb *= uMax / m;
          gl_FragColor = c;
        }
      `,depthTest:!1,depthWrite:!1}),this.fsQuad=new rc(this.material)}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,t.setRenderTarget(this.renderToScreen?null:e),this.fsQuad.render(t)}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const kn=2400;function oM(){const i=new Od;i.setAttribute("position",new Se([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),i.setIndex([0,1,2,0,2,3]);const t=new os(new Float32Array(kn*3),3),e=new os(new Float32Array(kn*3),3),n=new os(new Float32Array(kn*4),4),s=new os(new Float32Array(kn*2),2);for(const c of[t,e,n,s])c.setUsage(xo);i.setAttribute("iPos",t),i.setAttribute("iVel",e),i.setAttribute("iCol",n),i.setAttribute("iSz",s),i.instanceCount=0;const o=new Ve({uniforms:{uResY:{value:1920},uAspect:{value:.5625},uMinPx:{value:1.6}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,blending:dn}),a=new ue(i,o);a.frustumCulled=!1,a.renderOrder=10,a.name="fx.particles";const l={n:0,pos:new Float32Array(kn*3),vel:new Float32Array(kn*3),col0:new Float32Array(kn*3),col1:new Float32Array(kn*3),life:new Float32Array(kn),age:new Float32Array(kn),size0:new Float32Array(kn),size1:new Float32Array(kn),stretch:new Float32Array(kn),grav:new Float32Array(kn),drag:new Float32Array(kn),floor:new Float32Array(kn)};return{mesh:a,mat:o,quad:i,iPos:t,iVel:e,iCol:n,iSz:s,P:l}}const _a=90;function aM(i){const t=new an(1,1,1,1);t.translate(0,.5,0),t.rotateX(-Math.PI/2);const e=new Ve({uniforms:{uAlpha:{value:0}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!0,side:Ge,blending:dn}),n=new qh(t,e,_a);n.instanceMatrix.setUsage(xo),n.frustumCulled=!1,n.renderOrder=9,n.name="fx.streaks";const s=new Float32Array(_a*3),o=[[.5,1.7,2.6],[2.2,.5,1.9],[2.2,2.3,2.6],[2.4,1.1,.35]],a=[];for(let c=0;c<_a;c++){const h=o[c%7===0?3:c%3];s.set(h,c*3),a.push({th:i()*Math.PI*2,r:3.4+i()*6,z:-i()*60,v:.7+i()*.6,w:.006+i()*.009})}t.setAttribute("aCol",new os(s,3));const l=new Je;return l.name="fx.streakRig",l.add(n),{group:l,mesh:n,mat:e,S:a}}const dp=10;function lM(){const i=new Io(.9,1,128,1),t=[],e=new Je;e.name="fx.rings";for(let n=0;n<dp;n++){const s=new Ve({uniforms:{uCol:{value:new Lt},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uCol; uniform float uA; varying vec2 vUv;
        void main(){ float r = length(vUv - 0.5) * 2.0; float e = 1.0 - abs((r - 0.95) / 0.05);
          e = clamp(e, 0.0, 1.0); gl_FragColor = vec4(uCol * e * uA, e * uA); }
      `,transparent:!0,depthWrite:!1,side:Ge,blending:dn}),o=new ue(i,s);o.visible=!1,o.frustumCulled=!1,o.renderOrder=8,e.add(o),t.push({m:o,age:0,life:0,r0:1})}return{group:e,list:t,next:0}}const su=2e3;function cM(){const i=new an(1,1),t=new Od;t.index=i.index,t.attributes.position=i.attributes.position,t.attributes.uv=i.attributes.uv;const e=new os(new Float32Array(su*3),3);e.setUsage(xo);const n=new os(new Float32Array(su*4),4);n.setUsage(xo),t.setAttribute("iPos",e),t.setAttribute("iPar",n),t.instanceCount=0;const s=ji.merge([ee.fog,{uCol:{value:new Lt(.62,.64,.7)}}]),o=new Ve({uniforms:s,fog:!0,transparent:!0,depthWrite:!1,vertexShader:`
      attribute vec3 iPos; attribute vec4 iPar;
      varying vec2 vUv; varying float vA; varying float vSeed; varying float vH;
      #include <fog_pars_vertex>
      void main(){
        vUv = uv; vA = iPar.y; vSeed = iPar.w;
        vec3 R = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 U = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        float c = cos(iPar.z), s = sin(iPar.z);
        vec2 q = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * iPar.x;
        vec3 wp = iPos + R * q.x + U * q.y;
        vH = wp.y;
        vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uCol; varying vec2 vUv; varying float vA; varying float vSeed; varying float vH;
      #include <fog_pars_fragment>
      float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv - 0.5; float r = length(p) * 2.0;
        float n = vn(vUv * 3.5 + vSeed * 17.0) * 0.6 + vn(vUv * 7.0 - vSeed * 9.0) * 0.4;
        float a = (1.0 - smoothstep(0.25, 1.0, r + (n - 0.5) * 0.55)) * vA;
        if (a < 0.004) discard;
        vec3 col = uCol * (0.75 + 0.45 * n) * (0.8 + 0.25 * clamp(vH * 0.15, 0.0, 1.0));
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),a=new ue(t,o);return a.frustumCulled=!1,a.renderOrder=5,a.name="fx.smoke",{mesh:a,geo:t,mat:o,iPos:e,iPar:n}}function hM(i,t,e){let n=0;if(t&&t.length&&e!=null){const s=i.iPos.array,o=i.iPar.array;for(let a=0;a<t.length&&n<su;a++){const l=t[a],c=e-l.t0;if(c<0||c>=l.life)continue;const h=1-Math.exp(-1.7*c),r=h/1.7,u=l.r0+(l.r1-l.r0)*(1-Math.exp(-1.25*c));let f=l.y+l.vy*r+.28*c;f=Math.max(f,u*.32),s[n*3]=l.x+l.vx*r,s[n*3+1]=f,s[n*3+2]=l.z+l.vz*r;const d=Math.min(1,c/.12)*Math.pow(1-c/l.life,1.4);o[n*4]=u,o[n*4+1]=(l.a??.55)*d,o[n*4+2]=l.seed*6.283+c*(l.seed-.5)*.6,o[n*4+3]=l.seed,n++}}i.geo.instanceCount=n,i.mesh.visible=n>0,i.iPos.needsUpdate=!0,i.iPar.needsUpdate=!0}function uM(i,t,e){const n=i&&i.isWebGLRenderer?{renderer:i,scene:t,camera:e}:i||{},s=n.renderer;let o=n.scene,a=n.camera;if(!s)throw new Error("createFX: renderer required");const l={exposure:1,bloomStrength:.9,bloomRadius:0,bloomThreshold:1,bloomKnee:.5,bloomLimit:.9,vignette:.5,grain:.04,saturation:1.12,contrast:1.07,caBase:0,speedBlur:1,streaks:1,fovPunchDeg:9,shakeAmp:.22,ownCamera:n.ownCamera===!0,autoTimeline:n.autoTimeline!==!1};let c=B0(1337);const h=new Dt;s.getSize(h);const r=s.getPixelRatio(),u=new Ti(Math.max(1,h.x*r),Math.max(1,h.y*r),{type:Ui,samples:Math.min(4,s.capabilities.maxSamples||0)});u.texture.name="fx.rt";const f=new Zy(s,u);f.setPixelRatio(r),f.setSize(Math.max(1,h.x),Math.max(1,h.y));const d=new Jy(o,a);f.addPass(d);const g=new rM;f.addPass(g);const v=new Co(new Dt(h.x*r,h.y*r),l.bloomStrength,l.bloomRadius,l.bloomThreshold);v.highPassUniforms.smoothWidth.value=l.bloomKnee;try{const j=v.compositeMaterial.uniforms.bloomFactors;j&&Array.isArray(j.value)&&(j.value=[1,.9,.62,.36,.2])}catch{}try{if(v.copyUniforms&&v.blendMaterial){v.copyUniforms.uLimit={value:l.bloomLimit};const j=v.blendMaterial;v.blendMaterial=new Ve({uniforms:v.copyUniforms,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
          uniform sampler2D tDiffuse; uniform float opacity; uniform float uLimit; varying vec2 vUv;
          void main() {
            vec3 b = max(texture2D(tDiffuse, vUv).rgb, vec3(0.0));
            float m = max(b.r, max(b.g, b.b));
            b *= 1.0 / (1.0 + m / uLimit);
            gl_FragColor = vec4(b * opacity, 1.0);
          }
        `,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),j.dispose()}}catch{}f.addPass(v);const m=new sM;m.setSize(h.x*r,h.y*r),f.addPass(m);let p=h.x,b=h.y,T=r;const S=oM(),F=aM(c),O=lM(),R=new Je;R.name="fx.root";const B=cM();R.add(S.mesh,F.group,O.group,B.mesh),o&&o.add(R);const M={ca:0,shake:0,fov:0,fovV:0,flash:0,flashColor:new Lt(1,1,1),bloomKick:0,streakKick:0,simT:0,lastT:null,speed:0,boost:0,explicit:{},autoDone:{},lastBeat:-1,gpFlash:0,gpCA:0,timeScale:1,extSpeed:null},C=new P,N=new P,$=new P,et=new Qn,pt=new Ie,Mt=new P(1,1,1),lt=new xi;let gt={};function nt(){try{return typeof window<"u"&&window.__game||null}catch{return null}}let Ct=()=>null;function $t(j){const Ot=Ct();return Ot?Ot.getWorldPosition(j):a?(a.getWorldDirection($),j.copy(a.position).addScaledVector($,6).setY(0)):j.set(0,0,0)}function Qt(j,Ot,Zt,Ut,Ft,kt,ve,_e,qt,L,x,y,_,I,E){const k=S.P;let H;k.n<kn?H=k.n++:H=Math.floor(c()*kn),k.pos[H*3]=j,k.pos[H*3+1]=Ot,k.pos[H*3+2]=Zt,k.vel[H*3]=Ut,k.vel[H*3+1]=Ft,k.vel[H*3+2]=kt,k.life[H]=ve,k.age[H]=0,k.size0[H]=_e,k.size1[H]=qt,k.col0[H*3]=L[0],k.col0[H*3+1]=L[1],k.col0[H*3+2]=L[2],k.col1[H*3]=x[0],k.col1[H*3+1]=x[1],k.col1[H*3+2]=x[2],k.stretch[H]=y,k.grav[H]=_,k.drag[H]=I,k.floor[H]=E===void 0?-1e9:E}const se=[7,4.4,2],Ee=[2.6,.55,.08];function mt(j,Ot=1,Zt,Ut=se,Ft=Ee){const kt=j||$t(N),ve=Math.round(70*Ot),_e=(Zt?Zt.x*8:0)+oe.x*.3,qt=Zt?Zt.y*8:0,L=(Zt?Zt.z*8:0)+oe.z*.3;for(let x=0;x<ve;x++){const y=c()*Math.PI*2,_=(4+c()*11)*(.6+.4*Ot),I=.3+c()*.9;Qt(kt.x+(c()-.5)*1.6,kt.y+.05,kt.z+(c()-.5)*2,Math.cos(y)*_+_e,I*_*.7+qt,Math.sin(y)*_+L,.25+c()*.5,.045+c()*.035,.012,Ut,Ft,.035,-22,1.6,kt.y)}for(let x=0;x<Math.round(8*Ot);x++)Qt(kt.x+(c()-.5)*1.2,kt.y+.1,kt.z+(c()-.5)*1.2,(c()-.5)*3+_e,1+c()*2,(c()-.5)*3+L,.4+c()*.3,.18,.02,[5,2.5,.8],[1.2,.2,.05],0,-4,2.5,kt.y)}const ht=[1.2,2.4,4.4],Kt=[.15,.55,2],Bt=[.3,1.15,3.2],Jt=[.02,.1,.55],xe=[.08,.22,.6],le=[0,.02,.12],oe=new P,Tt=new P;let zt=!1;function V(j,Ot,Zt=1,Ut){if(!j)return;const Ft=Ot||$.set(0,0,1),kt=Ut||oe,ve=Math.max(1,Math.round(5*Zt));for(let _e=0;_e<ve;_e++){const qt=16+c()*10,L=.5+1.2*c(),x=c()*.016;Qt(j.x+Ft.x*qt*x,j.y+Ft.y*qt*x,j.z+Ft.z*qt*x,kt.x+Ft.x*qt+(c()-.5)*L,kt.y+Ft.y*qt+(c()-.5)*L,kt.z+Ft.z*qt+(c()-.5)*L,.12+c()*.14,.022+.018*Zt,.075,Bt,Jt,.045,0,3)}c()<.6&&Qt(j.x,j.y,j.z,kt.x+Ft.x*7,kt.y+Ft.y*7,kt.z+Ft.z*7,.18,.05+.04*Zt,.26,xe,le,.02,0,2.5),Qt(j.x,j.y,j.z,kt.x+Ft.x*9,kt.y+Ft.y*9,kt.z+Ft.z*9,.04,.028*Zt+.012,.02,ht,Kt,.03,0,0)}function jt(j,Ot,Zt,Ut=4){const Ft=O.list[O.next];O.next=(O.next+1)%dp;const kt=j||$t(N);Ft.m.position.copy(kt),Ot?Ft.m.quaternion.copy(Ot):a&&Ft.m.quaternion.copy(a.quaternion);const ve=Zt?new Lt(Zt):new Lt(.3,2.4,3.2);Ft.m.material.uniforms.uCol.value.copy(ve).multiplyScalar(ve.r+ve.g+ve.b<3.2?2.5:1),Ft.m.visible=!0,Ft.age=0,Ft.life=.55,Ft.r0=Ut;const _e=Ft.m.material.uniforms.uCol.value,qt=[_e.r*1.4,_e.g*1.4,_e.b*1.4],L=[_e.r*.2,_e.g*.2,_e.b*.2];et.copy(Ft.m.quaternion);for(let x=0;x<48;x++){const y=x/48*Math.PI*2+c()*.1;$.set(Math.cos(y),Math.sin(y),0).applyQuaternion(et);const _=3+c()*4;Qt(kt.x+$.x*Ut,kt.y+$.y*Ut,kt.z+$.z*Ut,$.x*_,$.y*_,$.z*_,.4+c()*.3,.06,.01,qt,L,.05,0,2.2)}M.bloomKick=Math.max(M.bloomKick,.35)}function It(j=1){M.ca=Math.min(1.5,M.ca+.8*j),M.shake=Math.min(1.5,M.shake+.6*j)}function te(j=1){M.shake=Math.min(1.5,M.shake+j),M.ca=Math.min(1.5,Math.max(M.ca,.25*j))}function Wt(j=1){M.ca=Math.min(1.5,Math.max(M.ca,j))}function tt(j){M.extSpeed=j==null?null:Hs(+j||0)}function at(j){M.timeScale=+j||1}function A(j=1){M.fovV+=l.fovPunchDeg*14*j}function w(j=1,Ot){M.flash=Math.max(M.flash,j),M.flashColor.set(Ot===void 0?16777215:Ot)}function G(j=1){M.bloomKick=Math.max(M.bloomKick,.22*j)}function q(j=1){A(j),M.ca=Math.min(1.5,M.ca+.35*j),M.streakKick=Math.max(M.streakKick,.6*j),M.bloomKick=Math.max(M.bloomKick,.3*j)}function K(j,Ot=1){mt(j,Ot),It(.55*Ot),w(.08*Ot,16766880)}function W(j,Ot=1){mt(j,.8*Ot,null,[6,1.2,4.5],[1.5,.05,1.2]),It(1.2*Ot),w(.12*Ot,16727240)}function rt(j=1){M.explicit.finish=!0,w(j,16777215),M.bloomKick=Math.max(M.bloomKick,1.2),M.ca=Math.min(1.5,M.ca+.6),A(.6);const Ot=$t(C);Ot.y+=.6,jt(Ot,a?a.quaternion:null,16777215,2.5),jt(Ot,a?a.quaternion:null,16727240,4),mt(Ot,.9,null,[6,6,7],[1.6,.2,1.4])}function it(){S.P.n=0,S.quad.instanceCount=0,zt=!1,oe.set(0,0,0),M.ca=M.shake=M.fov=M.fovV=M.flash=M.bloomKick=M.streakKick=0,M.autoDone={},M.lastBeat=-1,M.simT=0;for(const j of O.list)j.m.visible=!1,j.age=j.life=0;c=B0(1337)}function J(j,Ot){if(!l.autoTimeline||j==null)return;const Zt=(Ut,Ft,kt)=>{!M.autoDone[Ut]&&j>=Ft&&j-Ft<.5+Ot?(M.autoDone[Ut]=!0,M.explicit[Ut]||kt()):j>=Ft+.5+Ot&&(M.autoDone[Ut]=!0)};Zt("launch",16*Ws,()=>{q(1),It(.4),mt(null,.6,$.set(0,0,0))}),Zt("checkpoint",48*Ws,()=>{jt(null,null,4253951,5),w(.15,8450303)}),Zt("liftoff",96*Ws,()=>{q(1.1)}),Zt("touchdown",128*Ws+1,()=>{K(null,.8)}),Zt("finish",tM,()=>rt(.9)),Z(j)}function ut(j){const Ot=[j&&j.gp,j&&j.gameplay,j&&j.S],Zt=nt();Zt&&Ot.push(Zt.gp,Zt.gameplay,Zt.state);for(const Ut of Ot){if(!Ut)continue;const Ft=Ut.state&&typeof Ut.state=="object"&&"t"in Ut.state?Ut.state:Ut;if(Ft&&typeof Ft=="object"&&typeof Ft.t=="number"&&Array.isArray(Ft.events))return Ft}return j&&typeof j.t=="number"&&Array.isArray(j.events)?j:null}function U(j){if(!j)return null;if(j.isObject3D)return j;for(const Ot of["object","root","group","object3d","mesh"])if(j[Ot]&&j[Ot].isObject3D)return j[Ot];return null}Ct=function(){const j=nt();return U(gt.car)||U(j&&j.car)||null};function Y(j){const Ot=nt(),Zt=(gt.car&&!gt.car.isObject3D?gt.car:null)||j&&j.userData&&j.userData.car||(Ot&&Ot.car&&!Ot.car.isObject3D?Ot.car:null);return Zt&&Zt.anchors&&Array.isArray(Zt.anchors.nozzles)?Zt.anchors.nozzles:j&&j.userData&&Array.isArray(j.userData.thrusters)?j.userData.thrusters:null}let dt=new WeakSet,yt=null;const Q=new P,_t=new Qn,St=new P(0,0,1);function Rt(j,Ot,Zt){return j&&j.pos&&j.pos.isVector3?(Zt.copy(j.pos),Ot>0&&j.fwd&&j.fwd.isVector3&&Zt.addScaledVector(j.fwd,-(j.v||0)*Ot),Zt):$t(Zt)}function D(j,Ot,Zt){const Ut=j.type,Ft=Rt(Ot,Zt,Q),kt=Ot&&typeof Ot.landImpact=="number"?Ot.landImpact:.6;switch(Ut){case"launch":{const ve=j.rating==="PERFECT";j.rating!=="EARLY"&&($.set(0,0,0),mt(Ft,ve?.9:.5,null),M.streakKick=Math.max(M.streakKick,ve?.9:.5),M.bloomKick=Math.max(M.bloomKick,.5),M.ca=Math.min(1.5,M.ca+.45));break}case"shift":j.perfect&&(M.streakKick=Math.max(M.streakKick,.45),M.bloomKick=Math.max(M.bloomKick,.3),M.ca+=.15);break;case"land":case"landing":mt(Ft,.5+.4*kt);break;case"touchdown":mt(Ft,.3+.2*kt);break;case"scrape":mt(Ft,.45,null,[5,3.2,1.6],[1.6,.3,.06]);break;case"hit":case"bounce":case"pylon":mt(N.copy(Ft).add($.set(0,.5,0)),.7,null,[6,1.4,4.5],[1.4,.05,1.1]),M.flashColor.set(16734930);break;case"ring":{Ot&&Ot.fwd&&Ot.fwd.isVector3?_t.setFromUnitVectors(St,Ot.fwd):a&&_t.copy(a.quaternion);const ve=j.text==="BULLSEYE";jt(Ft,_t,ve?16757818:3203327,3.2);break}case"checkpoint":{Ot&&Ot.fwd&&Ot.fwd.isVector3?_t.setFromUnitVectors(St,Ot.fwd):a&&_t.copy(a.quaternion),jt(Ft,_t,4253951,5.5),M.bloomKick=Math.max(M.bloomKick,.3);break}case"flies":case"boost":M.streakKick=Math.max(M.streakKick,1),M.bloomKick=Math.max(M.bloomKick,.35);break;case"boostready":M.bloomKick=Math.max(M.bloomKick,.5);break;case"loop":case"upside":M.streakKick=Math.max(M.streakKick,.5);break;case"fleet":M.bloomKick=Math.max(M.bloomKick,.4);break;case"finish":M.explicit.finish=!0,rt(.95);break}}function z(j,Ot,Zt){const Ut=[];if(!j||!Array.isArray(j.events))return Ut;for(const Ft of j.events)!Ft||typeof Ft!="object"||dt.has(Ft)||(dt.add(Ft),!(typeof Ft.t=="number"&&Ot-Ft.t>Zt)&&Ut.push(Ft));return Ut.sort((Ft,kt)=>(Ft.t||0)-(kt.t||0)),Ut}function X(j,Ot,Zt,Ut,Ft){if(M.ca*=Math.exp(-j*5.5),M.shake*=Math.exp(-j*7),M.flash*=Math.exp(-j*(M.flash>.5?3.4:5)),M.bloomKick*=Math.exp(-j*6),M.streakKick*=Math.exp(-j*2.5),M.fovV+=(-M.fov*120-M.fovV*16)*j,M.fov+=M.fovV*j,M.simT+=j,Ot>.01&&Zt)for(const qt of Zt){if(!qt||!qt.isObject3D)continue;qt.getWorldPosition(N),Ft!=null&&Ut&&Ut.t>Ft&&N.addScaledVector(oe,-(Ut.t-Ft)),qt.getWorldQuaternion(et);const L=qt.userData&&qt.userData.dir&&qt.userData.dir.isVector3?$.copy(qt.userData.dir):$.set(0,-.5,1);L.applyQuaternion(et).normalize(),V(N,L,Ot*(qt.userData&&qt.userData.main?1:.6))}const kt=S.P;let ve=0;for(let qt=0;qt<kt.n;qt++){const L=kt.age[qt]+j;if(L>=kt.life[qt])continue;const x=qt*3,y=Math.exp(-kt.drag[qt]*j);let _=kt.vel[x]*y,I=kt.vel[x+1]*y+kt.grav[qt]*j,E=kt.vel[x+2]*y,k=kt.pos[x]+_*j,H=kt.pos[x+1]+I*j,ot=kt.pos[x+2]+E*j;H<kt.floor[qt]&&(H=kt.floor[qt],I=-I*.35,_*=.7,E*=.7);const ct=ve*3;kt.pos[ct]=k,kt.pos[ct+1]=H,kt.pos[ct+2]=ot,kt.vel[ct]=_,kt.vel[ct+1]=I,kt.vel[ct+2]=E,ve!==qt&&(kt.col0[ct]=kt.col0[x],kt.col0[ct+1]=kt.col0[x+1],kt.col0[ct+2]=kt.col0[x+2],kt.col1[ct]=kt.col1[x],kt.col1[ct+1]=kt.col1[x+1],kt.col1[ct+2]=kt.col1[x+2],kt.life[ve]=kt.life[qt],kt.size0[ve]=kt.size0[qt],kt.size1[ve]=kt.size1[qt],kt.stretch[ve]=kt.stretch[qt],kt.grav[ve]=kt.grav[qt],kt.drag[ve]=kt.drag[qt],kt.floor[ve]=kt.floor[qt]),kt.age[ve]=L,ve++}kt.n=ve;for(const qt of O.list){if(!qt.m.visible)continue;qt.age+=j;const L=qt.age/qt.life;if(L>=1){qt.m.visible=!1;continue}qt.m.scale.setScalar(qt.r0*(1+1.4*(1-(1-L)*(1-L)))),qt.m.material.uniforms.uA.value=(1-L)*(1-L)}const _e=40+140*M.speed+80*M.streakKick;for(let qt=0;qt<_a;qt++){const L=F.S[qt];L.z+=_e*L.v*j,L.z>2&&(L.z-=62,L.th=c()*Math.PI*2,L.r=3.4+c()*6)}}function st(){const j=S.P,Ot=j.n,Zt=S.iPos.array,Ut=S.iVel.array,Ft=S.iCol.array,kt=S.iSz.array;for(let _e=0;_e<Ot;_e++){const qt=j.age[_e]/j.life[_e],L=_e*3,x=_e*4,y=_e*2;Zt[L]=j.pos[L],Zt[L+1]=j.pos[L+1],Zt[L+2]=j.pos[L+2],Ut[L]=j.vel[L],Ut[L+1]=j.vel[L+1],Ut[L+2]=j.vel[L+2];const _=Math.min(1,qt*1.6);Ft[x]=j.col0[L]+(j.col1[L]-j.col0[L])*_,Ft[x+1]=j.col0[L+1]+(j.col1[L+1]-j.col0[L+1])*_,Ft[x+2]=j.col0[L+2]+(j.col1[L+2]-j.col0[L+2])*_,Ft[x+3]=(1-qt)*(1-qt)*Math.min(1,j.age[_e]*40+.3),kt[y]=j.size0[_e]+(j.size1[_e]-j.size0[_e])*qt,kt[y+1]=j.stretch[_e]}S.quad.instanceCount=Ot;for(const _e of[S.iPos,S.iVel,S.iCol,S.iSz])_e.needsUpdate=!0,_e.clearUpdateRanges&&_e.clearUpdateRanges(),_e.addUpdateRange&&_e.addUpdateRange(0,Math.max(1,Ot*_e.itemSize));const ve=Hs(xa(.25,.9,M.speed)*l.streaks+M.streakKick);if(F.mat.uniforms.uAlpha.value=ve*.7,F.mesh.visible=ve>.01,F.mesh.visible){const _e=1.2+6*M.speed+5*M.streakKick;for(let qt=0;qt<_a;qt++){const L=F.S[qt];N.set(Math.cos(L.th)*L.r,Math.sin(L.th)*L.r*.8,L.z),lt.set(0,0,L.th+Math.PI/2),et.setFromEuler(lt),Mt.set(L.w*(1+.3*M.speed),1,_e*L.v),pt.compose(N,et,Mt),F.mesh.setMatrixAt(qt,pt)}F.mesh.instanceMatrix.needsUpdate=!0}}const vt=1.2;let bt=!1;function Pt(j=1/60,Ot){bt=!0,j=Math.min(Math.max(+j||0,0),.1),gt=Ot||{};const Zt=nt(),Ut=ut(gt);let Ft=typeof gt.t=="number"?gt.t:Ut?Ut.t:null;if(Ft==null&&Zt)try{Ft=typeof Zt.time=="function"?Zt.time():typeof Zt.t=="number"?Zt.t:null}catch{Ft=null}let kt=!1;Ft!=null&&M.lastT!=null&&(Ft<M.lastT-1e-4||Ft-M.lastT>Math.max(.25,j*4))&&(kt=!0),Ut&&yt&&Ut!==yt&&(kt=!0),kt&&(it(),dt=new WeakSet),M.lastT,Ft!=null&&(M.lastT=Ft),yt=Ut;let ve=gt.speed01;ve==null&&gt.speed!=null&&(ve=gt.speed/250),ve==null&&M.extSpeed!=null&&(ve=M.extSpeed),ve==null&&Ut&&typeof Ut.mph=="number"&&(ve=Ut.mph/260),ve==null&&Zt&&typeof Zt.speed01=="number"&&(ve=Zt.speed01),ve==null&&Ft!=null&&(ve=iM(Ft)),ve==null&&(ve=0);let _e=gt.boost01;if(_e==null&&Ut&&typeof Ut.boost=="number"&&(_e=Hs(Ut.boost)),_e==null&&Ft!=null){const _=Ft/Ws;_e=_>=88&&_<96?xa(88,96,_):_>=96&&_<128?.6:0}const qt=Ct();gt.carVel&&gt.carVel.isVector3?oe.copy(gt.carVel):Ut&&Ut.fwd&&Ut.fwd.isVector3&&typeof Ut.v=="number"?oe.copy(Ut.fwd).multiplyScalar(Ut.v).y+=Ut.vy||0:qt&&j>0&&!kt&&(qt.getWorldPosition(N),zt&&($.subVectors(N,Tt).divideScalar(j),$.length()<400?oe.lerp($,.5):oe.set(0,0,0)),Tt.copy(N),zt=!0);const L=Y(qt);let x=gt.thrust!=null?+gt.thrust:Ut&&typeof Ut.thrust=="number"?Ut.thrust:0;Ut&&typeof Ut.flap=="number"&&(x=Math.max(x,Hs(Ut.flap)));const y=!!Ut;if(l._gp=y,kt&&Ft!=null){const _=z(Ut,Ft,vt),I=Math.max(0,Ft-vt),E=1/60;M.speed=Hs(ve),M.boost=_e||0;let k=0;for(let H=I;H<Ft-1e-6;H+=E){for(;k<_.length&&(_[k].t??Ft)<=H+E;)D(_[k],Ut,Math.max(0,Ft-(_[k].t??Ft))),k++;y?Z(H):J(H,E),X(E,Ft-H<.35?x:0,L,Ut,H)}for(;k<_.length;k++)D(_[k],Ut,0)}else{if(M.speed+=(Hs(ve)-M.speed)*Math.min(1,j*6),M.boost+=((_e||0)-M.boost)*Math.min(1,j*4),y){for(const _ of z(Ut,Ft??0,vt))D(_,Ut,0);Z(Ft)}else J(Ft,j);X(j,x,L,null,null)}Ut?(typeof Ut.flash=="number"?M.gpFlash=Ut.flash:M.gpFlash=0,typeof Ut.aberration=="number"?M.gpCA=Ut.aberration:M.gpCA=0,M.timeScale=typeof Ut.timeScale=="number"?Ut.timeScale:M.timeScale):(M.gpFlash=0,M.gpCA=0),st();{const _=gt.smoke||Ut&&Ut.puffs||null;hM(B,_,Ft??(Ut?Ut.t:null));const I=gt.rcs||Ut&&Ut.rcs||null,E=qt&&qt.userData&&qt.userData.car,k=E&&E.anchors&&E.anchors.rcs;if(I&&k&&j>0)for(const[H,ot]of Object.entries(k)){const ct=H==="pitchUp"?Math.max(0,I.pitch||0):H==="pitchDown"?Math.max(0,-(I.pitch||0)):I[H]||0;if(!(ct<.05||!Array.isArray(ot)))for(const xt of ot){xt.getWorldPosition(N),xt.getWorldQuaternion(et);const At=$.copy(xt.userData.dir||St).applyQuaternion(et).normalize();V(N,At,ct*.8)}}}}function Z(j){if(j==null)return;const Ot=Math.floor(j/Ws+1e-4);if(Ot!==M.lastBeat){const Zt=nM(j);M.lastBeat>=0&&(Zt==="drop1"||Zt==="loop"||Zt==="flight")&&G(Ot%4===0?1:.55),Zt==="intro"&&Ot>=10&&Ot%2===0&&Ot<16&&G(.6),M.lastBeat=Ot}}const ne=new P;function ye(){s.getSize(h);const j=s.getPixelRatio();(h.x!==p||h.y!==b||j!==T)&&(p=h.x,b=h.y,T=j,f.setPixelRatio(j),f.setSize(Math.max(1,h.x),Math.max(1,h.y))),m.uniforms.uRes.value.set(h.x*j,h.y*j),S.mat.uniforms.uResY.value=h.y*j,S.mat.uniforms.uAspect.value=h.x/Math.max(1,h.y)}function Fe(j,Ot){if(j&&j.isScene&&j!==o&&gn(j),Ot&&Ot.isCamera&&(a=Ot),!o||!a)return;bt||Pt(1/60,gt),bt=!1,R.parent!==o&&o.add(R),d.scene=o,d.camera=a,ye(),a.updateMatrixWorld(),F.group.position.setFromMatrixPosition(a.matrixWorld),F.group.quaternion.setFromRotationMatrix(pt.extractRotation(a.matrixWorld));const Zt=h.y>h.x,Ut=m.uniforms;Ut.uTime.value=M.simT,Ut.uSpeed.value=xa(.2,1,M.speed)*l.speedBlur*(.75+.5*M.streakKick),Ut.uCA.value=Math.min(1.5,Math.max(M.ca,M.gpCA*.9)+l.caBase+M.speed*.12),Ut.uExposure.value=l.exposure*(1+.12*M.boost);const Ft=Hs((1-(M.timeScale||1))/.4);Ut.uVignette.value=l.vignette+.12*Ft,M.slow=Ft,Ut.uGrain.value=l.grain,Ut.uSat.value=l.saturation*(1-.12*Ft),Ut.uContrast.value=l.contrast,Ut.uFlash.value=Math.min(1,Math.max(M.flash,M.gpFlash*.8)),Ut.uFlashColor.value.copy(M.flashColor),Ut.uCenter.value.set(.5,Zt?.52:.5);{const qt=Ct();qt&&qt.getWorldPosition&&(qt.getWorldPosition(N),N.y+=.6,N.project(a),N.z<1?Ut.uCar.value.set(N.x*.5+.5,N.y*.5+.5):Ut.uCar.value.set(-5,-5))}v.strength=l.bloomStrength*(1+M.bloomKick+.25*M.boost),v.radius=l.bloomRadius,v.threshold=l.bloomThreshold,v.highPassUniforms.smoothWidth.value=l.bloomKnee,v.copyUniforms&&v.copyUniforms.uLimit&&(v.copyUniforms.uLimit.value=l.bloomLimit*(1+.6*M.bloomKick));const kt=a.isPerspectiveCamera,ve=kt?a.fov:0;ne.copy(a.position);const _e=l.ownCamera;if(_e&&kt&&Math.abs(M.fov)>.001&&(a.fov=ve+M.fov,a.updateProjectionMatrix()),_e&&M.shake>.001){const qt=M.shake*M.shake*l.shakeAmp,L=M.simT*47;N.set(Math.sin(L*1.13)+Math.sin(L*2.71)*.5,Math.cos(L*1.37)+Math.sin(L*3.1)*.5,0).multiplyScalar(qt),N.applyQuaternion(a.quaternion),a.position.add(N),a.updateMatrixWorld()}try{f.render()}finally{kt&&a.fov!==ve&&(a.fov=ve,a.updateProjectionMatrix()),a.position.equals(ne)||(a.position.copy(ne),a.updateMatrixWorld())}}function qe(j,Ot){f.setPixelRatio(s.getPixelRatio()),f.setSize(Math.max(1,j),Math.max(1,Ot)),p=j,b=Ot,T=s.getPixelRatio()}function gn(j){R.parent&&R.parent.remove(R),o=j,j&&j.add(R)}function oi(j){a=j}function ai(){R.parent&&R.parent.remove(R),f.dispose&&f.dispose(),v.dispose(),m.dispose(),g.dispose(),S.quad.dispose(),S.mat.dispose(),B.geo.dispose(),B.mat.dispose(),F.mesh.geometry.dispose(),F.mat.dispose()}return{update:Pt,render:Fe,setSize:qe,setScene:gn,setCamera:oi,reset:it,dispose:ai,impact:It,shake:te,aberration:Wt,setSpeed:tt,setTimeScale:at,fovPunch:A,flash:w,sparks:(j,Ot,Zt)=>mt(j,Ot,Zt),land:K,hit:W,ringPass:jt,boost:q,thruster:V,finish:rt,beat:G,params:l,composer:f,bloom:v,finalPass:m,get state(){return M},markExplicit(j){M.explicit[j]=!0}}}const fM="modulepreload",dM=function(i){return"/"+i},k0={},pM=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=dM(c),c in k0)return;k0[c]=!0;const h=c.endsWith(".css"),r=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${r}`))return;const u=document.createElement("link");if(u.rel=h?"stylesheet":fM,h||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),h)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},ti=59/136,H0=16*ti,pp=134*ti,G0=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),V0=G0.has("capture")||G0.get("mute")==="1",Ze=i=>440*Math.pow(2,(i-69)/12),mM=[0,2,4,7,9],nh=(i,t)=>i+12*Math.floor(t/5)+mM[(t%5+5)%5];class oc{constructor(){if(this.ctx=null,this.buffer=null,this.src=null,this.playing=!1,this.muted=!1,this._startCtxT=0,this._offset=0,this._perfStart=0,this._loading=null,this._lastTick=-1,this._lastTickAt=0,this._cues=yM(),this._cueIdx=0,this._noise=null,this._engine=null,this._hiss=null,this._lastThrust=-9,this._lastVoice={},this._wind=null,this._rpm=0,typeof window<"u"){const t=()=>this.unlock();for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});window.addEventListener("rr:event",e=>{const n=e.detail||{};n.name&&this.event(n.name,n)})}}get lastTickAt(){return this._lastTickAt}_ensureCtx(){if(this.ctx||V0)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t({latencyHint:"interactive"});this.ctx=e,this.master=e.createGain(),this.master.gain.value=this.muted?0:.9,this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=8,this.comp.ratio.value=4,this.comp.attack.value=.003,this.comp.release.value=.18,this.comp.connect(this.master),this.master.connect(e.destination),this.musicGain=e.createGain(),this.musicGain.gain.value=.82,this.musicGain.connect(this.comp),this.sfxGain=e.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.comp),this.verb=e.createConvolver(),this.verb.buffer=_M(e,1.6,2.6),this.verbGain=e.createGain(),this.verbGain.gain.value=.28,this.verb.connect(this.verbGain),this.verbGain.connect(this.comp),this._noise=xM(e,2)}catch{this.ctx=null}return this.ctx}unlock(){const t=this._ensureCtx();t&&t.state==="suspended"&&t.resume().catch(()=>{}),!this.buffer&&!this._loading&&this.load()}load(t="/audio/music.mp3"){return this._loading?this._loading:(this._loading=(async()=>{const e=this._ensureCtx();if(!e)return null;try{const s=await(await fetch(t)).arrayBuffer();this.buffer=await new Promise((o,a)=>e.decodeAudioData(s,o,a))}catch{this.buffer=null}return this.buffer})(),this._loading)}play(t=0){this.stop(),this._offset=Math.max(0,t),this._perfStart=performance.now()/1e3-this._offset,this.playing=!0,this._resetCues(this._offset);const e=this._ensureCtx();if(!e||!this.buffer)return;e.state==="suspended"&&e.resume().catch(()=>{});const n=e.createBufferSource();n.buffer=this.buffer,n.connect(this.musicGain),this._startCtxT=e.currentTime+.02,n.start(this._startCtxT,this._offset),n.onended=()=>{this.src===n&&(this.playing=!1)},this.src=n}stop(){if(this.src){try{this.src.stop()}catch{}try{this.src.disconnect()}catch{}}this.src=null,this.playing=!1,this._setEngine(0,0),this._setHiss(0),this._setWind(0)}time(){return this.playing?this.src&&this.ctx?Math.max(0,this.ctx.currentTime-this._startCtxT+this._offset):performance.now()/1e3-this._perfStart:this._offset}setMuted(t){this.muted=!!t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.02)}_live(){return!V0&&this.ctx&&this.ctx.state==="running"&&!this.muted}_resetCues(t){this._cueIdx=this._cues.findIndex(e=>e.t>=t-1e-4),this._cueIdx<0&&(this._cueIdx=this._cues.length)}tick(t,e={}){if(this._lastTickAt=performance.now(),!(t>=0)||((t<this._lastTick-.25||t>this._lastTick+1)&&this._resetCues(t),this._lastTick=t,!this._live()))return;for(this._combo=jn(e.combo,this._combo||0);this._cueIdx<this._cues.length&&this._cues[this._cueIdx].t<=t;){const m=this._cues[this._cueIdx++];!this._gpDriven&&t-m.t<.15&&this._play(m.name,m.opts)}const n=jn(e.mph,jn(e.speed,0)),s=jn(e.rev,0),o=t<H0,a=t>pp+1.5;let l=0,c=0;const h=e.shift&&typeof e.shift=="object"?e.shift:null,r=h?jn(h.phase,jn(h.light,-1)):-1,u=!o&&t<48*ti&&r>=0&&(e.section?e.section==="launch":!0)&&!e.airborne;if(o)l=s>.02?.1+.25*s:0,c=s*.95;else if(!a)if(l=.07+.1*Math.min(1,n/250),u){const m=.18+.82*Math.pow(gM(r),.85);this._rpm=m<this._rpm-.25?m:this._rpm+(m-this._rpm)*.35,c=.22+.55*this._rpm+.35*Math.min(1,n/260),l+=.05*this._rpm}else this._rpm=0,c=Math.min(1.2,n/260);this._setEngine(l,c),this._setWind(a?0:Math.pow(Math.min(1,n/260),2)*(t>H0?1:0));const f=e.mode?e.mode==="flipAir"||e.mode==="fly"||e.mode==="jump":e.section?e.section==="flight"||e.section==="outro"&&!!e.airborne:!!e.flying||t>96*ti&&t<128*ti&&e.flying!==!1,d=jn(e.lastThrustT,-9),g=jn(e.flap,Math.max(0,1-(t-d)/.35)),v=e.rcs?Math.max(e.rcs.down||0,e.rcs.left||0,e.rcs.right||0):0;this._setHiss(f?.035+.22*Math.max(g,v):0)}_setEngine(t,e){const n=this.ctx;if(!n)return;if(!this._engine){if(t<=0)return;const l=n.createGain();l.gain.value=0;const c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=2400,c.Q.value=3;const h=n.createOscillator();h.type="sawtooth";const r=n.createOscillator();r.type="square";const u=n.createOscillator();u.type="sine";const f=n.createOscillator();f.type="sawtooth",f.detune.value=9;const d=n.createGain();d.gain.value=.25;const g=n.createGain();g.gain.value=.9;const v=n.createGain();v.gain.value=.55;const m=n.createOscillator();m.type="sine";const p=n.createGain();p.gain.value=0,m.connect(p),p.connect(this.sfxGain);const b=n.createOscillator();b.frequency.value=23;const T=n.createGain();T.gain.value=6,b.connect(T),T.connect(h.detune),T.connect(f.detune),h.connect(c),f.connect(v),v.connect(c),r.connect(d),d.connect(c),u.connect(g),g.connect(l),c.connect(l),l.connect(this.sfxGain);for(const S of[h,r,u,f,m,b])S.start();this._engine={g:l,lp:c,o1:h,o2:r,o3:u,o4:f,o5:m,g5:p}}const s=this._engine,o=n.currentTime,a=Ze(50)*Math.pow(2,e*2.6);s.o1.frequency.setTargetAtTime(a,o,.05),s.o4.frequency.setTargetAtTime(a*.5,o,.05),s.o2.frequency.setTargetAtTime(a*1.5,o,.05),s.o3.frequency.setTargetAtTime(a/3,o,.05),s.lp.frequency.setTargetAtTime(900+4200*e,o,.06),s.g.gain.setTargetAtTime(t*.55,o,.06),s.o5.frequency.setTargetAtTime(Math.min(9e3,a*6),o,.04),s.g5.gain.setTargetAtTime(t>0?Math.min(.05,.012+.04*e)*(t/.2):0,o,.06)}duck(t=3,e=.06,n=.4){if(!this._live()||!this.musicGain)return;const s=this.musicGain.gain,o=this.ctx.currentTime,a=.82,l=a*Math.pow(10,-t/20);try{s.cancelScheduledValues(o),s.setValueAtTime(s.value,o),s.linearRampToValueAtTime(l,o+.012),s.setValueAtTime(l,o+.012+e),s.linearRampToValueAtTime(a,o+.012+e+n)}catch{}}_setWind(t){const e=this.ctx;if(!e)return;if(!this._wind){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=600,o.Q.value=.4;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._wind={g:a,lp:o}}const n=e.currentTime;this._wind.g.gain.setTargetAtTime(.09*t,n,.12),this._wind.lp.frequency.setTargetAtTime(500+2200*t,n,.12)}_setHiss(t){const e=this.ctx;if(!e)return;if(!this._hiss){if(t<=0)return;const s=e.createBufferSource();s.buffer=this._noise,s.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=3200,o.Q.value=.7;const a=e.createGain();a.gain.value=0,s.connect(o),o.connect(a),a.connect(this.sfxGain),s.start(),this._hiss={g:a,bp:o}}const n=e.currentTime;this._hiss.g.gain.setTargetAtTime(t,n,.04),this._hiss.bp.frequency.setTargetAtTime(2200+5e3*t,n,.05)}event(t,e={}){const n=String(t).toLowerCase(),s={shift:()=>this.sfx(e.grade&&String(e.grade).toUpperCase()!=="PERFECT"?"shift":"perfect"),perfectshift:()=>this.sfx("perfect"),ring:()=>this.sfx("ring",{combo:jn(e.combo,1)}),pylon:()=>this.sfx("bounce"),hit:()=>this.sfx("bounce"),bounce:()=>this.sfx("bounce"),land:()=>this.sfx("land"),landing:()=>this.sfx("land"),thrust:()=>this.sfx("thrust"),flap:()=>this.sfx("thrust"),tap:()=>{},jump:()=>this.sfx("jump"),ramp:()=>this.sfx("jump"),launch:()=>this.sfx("launch",{grade:e.grade}),record:()=>this.sfx("record"),combo:()=>this.sfx("ring",{combo:jn(e.n??e.combo,5)+2}),checkpoint:()=>this.sfx("checkpoint"),whoosh:()=>this.sfx("whoosh"),finish:()=>this.sfx("finish")};s[n]?s[n]():this.sfx(n,e)}sfx(t,e={}){e&&typeof e=="object"&&e.type===t&&W0[t]!==void 0&&(this._gpDriven=!0);const n=W0[t];let s=t,o=e||{};if(typeof n=="function")[s,o]=n(o,this);else{if(n===null)return;n&&(s=n)}this._play(s,o)}_play(t,e={}){if(!this._live()||!t)return;const n=Ss[t];if(!n)return;const s=this.ctx.currentTime,o=vM[t];if(o){if(s-(this._lastVoice[t]??-99)<o)return;this._lastVoice[t]=s}try{n(this,s+.005,e)}catch{}}}function jn(i,t){return typeof i=="number"&&isFinite(i)?i:t}const gM=i=>Math.min(1,Math.max(0,i)),vM={checkpoint:1.6,finish:2.5,go:.6,count:.5,liftoff:1.2,loop:1.2,boost:1.5,fleet:1,record:2,launch:.6,land:.12,whoosh:.25};function xM(i,t){const e=i.createBuffer(1,Math.floor(i.sampleRate*t),i.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return e}function _M(i,t,e){const n=Math.floor(i.sampleRate*t),s=i.createBuffer(2,n,i.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let l=0;l<n;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/n,e)}return s}function Nu(i,t,e,n,s,o="exp"){i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(n,t+e),o==="exp"?i.gain.exponentialRampToValueAtTime(1e-4,t+e+s):i.gain.linearRampToValueAtTime(0,t+e+s)}function An(i,t,{type:e="sine",f:n=440,f2:s=null,dur:o=.2,a=.004,peak:l=.3,verb:c=0,dest:h=null,detune:r=0}){const u=i.ctx,f=u.createOscillator(),d=u.createGain();if(f.type=e,f.frequency.setValueAtTime(n,t),f.detune.value=r,s&&f.frequency.exponentialRampToValueAtTime(s,t+a+o),Nu(d,t,a,l,o),f.connect(d),d.connect(h||i.sfxGain),c){const g=u.createGain();g.gain.value=c,d.connect(g),g.connect(i.verb)}return f.start(t),f.stop(t+a+o+.05),f}function Kn(i,t,{type:e="bandpass",f:n=1e3,f2:s=null,q:o=1,dur:a=.3,a:l=.01,peak:c=.3,verb:h=0}){const r=i.ctx,u=r.createBufferSource(),f=r.createBiquadFilter(),d=r.createGain();if(u.buffer=i._noise,f.type=e,f.frequency.setValueAtTime(n,t),f.Q.value=o,s&&f.frequency.exponentialRampToValueAtTime(s,t+l+a),Nu(d,t,l,c,a),u.connect(f),f.connect(d),d.connect(i.sfxGain),h){const g=r.createGain();g.gain.value=h,d.connect(g),g.connect(i.verb)}u.start(t,Math.random()),u.stop(t+l+a+.05)}function hi(i,t,e,n=.22,s=.9){const o=i.ctx,a=Ze(e),l=o.createOscillator(),c=o.createOscillator(),h=o.createGain(),r=o.createGain();l.frequency.value=a,c.frequency.value=a*3.5,h.gain.setValueAtTime(a*2.2,t),h.gain.exponentialRampToValueAtTime(a*.05,t+s),c.connect(h),h.connect(l.frequency),l.connect(r),Nu(r,t,.002,n,s),r.connect(i.sfxGain);const u=o.createGain();u.gain.value=.6,r.connect(u),u.connect(i.verb),l.start(t),c.start(t),l.stop(t+s+.1),c.stop(t+s+.1)}function $o(i,t,e=120,n=.7,s=.35){An(i,t,{type:"sine",f:e,f2:38,dur:s,a:.002,peak:n})}function Ko(i,t,{sub:e=1,crack:n=1,tail:s=.5,f:o=110,dur:a=.5,db:l=3}={}){An(i,t,{type:"sine",f:o,f2:32,dur:a,a:.001,peak:.9*e}),An(i,t,{type:"triangle",f:o*2,f2:o*.6,dur:a*.4,a:.001,peak:.3*e}),Kn(i,t,{type:"bandpass",f:1800,f2:700,q:1.4,dur:.07,a:5e-4,peak:.55*n}),Kn(i,t,{type:"highpass",f:6e3,q:.5,dur:.035,a:5e-4,peak:.25*n}),Kn(i,t,{type:"lowpass",f:2600,f2:180,q:.8,dur:a*.8,a:.002,peak:.35,verb:s}),l&&i.duck(l,.05,.35+a*.6)}const Ss={ui:(i,t)=>{An(i,t,{type:"triangle",f:Ze(86),dur:.06,peak:.12})},count:(i,t)=>{An(i,t,{type:"square",f:Ze(74),dur:.16,peak:.12,verb:.3}),An(i,t,{type:"sine",f:Ze(62),dur:.22,peak:.25})},go:(i,t)=>{for(const e of[74,81,86])An(i,t,{type:"sawtooth",f:Ze(e),dur:.5,peak:.07,verb:.4});An(i,t,{type:"sine",f:Ze(86),dur:.6,peak:.18,verb:.4}),$o(i,t,150,.6,.3)},launch:(i,t,e={})=>{const n=String(e.grade||"PERFECT").toUpperCase();Ko(i,t,{f:110,dur:.6,crack:.8,tail:.4,db:3}),Kn(i,t,{type:"lowpass",f:6e3,f2:300,q:.5,dur:.9,a:.005,peak:n==="LATE"?.18:.35}),An(i,t,{type:"sawtooth",f:Ze(50),f2:Ze(86),dur:.9,a:.01,peak:.1}),n==="PERFECT"&&(hi(i,t+.05,86,.16,.8),hi(i,t+.12,93,.12,.9))},rev:(i,t,e={})=>{const n=jn(e.level,.6);An(i,t,{type:"sawtooth",f:Ze(50),f2:Ze(50+24*n),dur:.4,a:.02,peak:.12})},shift:(i,t)=>{Kn(i,t,{type:"highpass",f:2500,q:.7,dur:.05,a:.001,peak:.35}),An(i,t,{type:"square",f:Ze(62),f2:Ze(50),dur:.12,peak:.12}),$o(i,t,90,.4,.18)},perfect:(i,t)=>{Ss.shift(i,t),An(i,t+.01,{type:"sawtooth",f:Ze(57),f2:Ze(81),dur:.22,a:.005,peak:.08}),hi(i,t+.03,81,.15,.6),Kn(i,t,{type:"bandpass",f:800,f2:6e3,q:1.2,dur:.35,a:.02,peak:.14})},good:(i,t)=>Ss.shift(i,t),late:(i,t)=>{Ss.shift(i,t),An(i,t,{type:"square",f:Ze(55),f2:Ze(43),dur:.2,peak:.08})},whoosh:(i,t,e={})=>{const n=jn(e.dur,.7);Kn(i,t,{type:"bandpass",f:300,f2:5e3,q:1.6,dur:n*.6,a:n*.4,peak:.3,verb:.2})},jump:(i,t)=>{Kn(i,t,{type:"bandpass",f:500,f2:4e3,q:1,dur:.6,a:.05,peak:.25}),An(i,t,{type:"sine",f:Ze(43),f2:Ze(67),dur:.5,a:.01,peak:.25})},land:(i,t)=>{Ko(i,t,{f:120,dur:.5,tail:.45,db:3}),An(i,t+.03,{type:"square",f:Ze(43),f2:Ze(36),dur:.09,peak:.07}),Kn(i,t+.02,{type:"bandpass",f:3200,f2:2400,q:6,dur:.18,a:.004,peak:.12})},thrust:(i,t)=>{Kn(i,t,{type:"highpass",f:5e3,q:.7,dur:.02,a:5e-4,peak:.3}),Kn(i,t,{type:"bandpass",f:7e3,f2:1800,q:.9,dur:.32,a:.004,peak:.42}),Kn(i,t+.01,{type:"lowpass",f:900,f2:200,q:.7,dur:.25,a:.01,peak:.25}),$o(i,t,70,.4,.22)},ring:(i,t,e={})=>{const n=Math.max(1,Math.min(20,jn(e.combo,1))),s=nh(74,n-1);hi(i,t,Math.min(s,98),.2,.9),An(i,t,{type:"triangle",f:Ze(Math.min(s,98)+12),dur:.15,peak:.06})},bounce:(i,t)=>{Ko(i,t,{f:80,dur:.35,crack:1.1,tail:.3,db:3}),Kn(i,t,{type:"bandpass",f:1200,q:3,dur:.25,a:.001,peak:.35}),An(i,t,{type:"square",f:Ze(50),f2:Ze(38),dur:.3,peak:.12})},checkpoint:(i,t)=>{hi(i,t,79,.16,1),hi(i,t+.11,86,.14,1.1),Ss.whoosh(i,t,{dur:.9})},loop:(i,t)=>{Ss.whoosh(i,t,{dur:1.1}),An(i,t,{type:"sawtooth",f:Ze(38),f2:Ze(62),dur:1.2,a:.2,peak:.07})},boost:(i,t)=>{const e=6*ti;An(i,t,{type:"sawtooth",f:Ze(38),f2:Ze(74),dur:e-.3,a:.3,peak:.06}),Kn(i,t,{type:"bandpass",f:300,f2:8e3,q:2,dur:e-.6,a:.6,peak:.14});for(let n=0;n<6;n++)An(i,t+n*ti,{type:"triangle",f:Ze(nh(62,n)),dur:.09,peak:.08});hi(i,t+e,86,.16,.9),hi(i,t+e+.06,93,.12,1)},liftoff:(i,t)=>{Ss.thrust(i,t),Ss.thrust(i,t+.08),Ko(i,t,{f:60,dur:.8,crack:.4,tail:.6,db:4}),hi(i,t,74,.12,1.2)},finish:(i,t)=>{Ko(i,t,{f:90,dur:1,crack:1.2,tail:.9,db:5}),$o(i,t,160,.6,.6),Kn(i,t,{type:"highpass",f:3e3,q:.5,dur:1.4,a:.005,peak:.25,verb:.5}),[74,79,83,86,91].forEach((e,n)=>hi(i,t+n*.06,e,.13,1.4))},fleet:(i,t)=>{i.duck(2.5,.1,.5),Ss.whoosh(i,t,{dur:.6}),hi(i,t+.02,79,.15,.9),hi(i,t+.09,86,.13,1)},scrape:(i,t)=>{Kn(i,t,{type:"highpass",f:3500,q:.6,dur:.18,a:.002,peak:.25}),$o(i,t,70,.4,.18)},combo:(i,t,e={})=>{const n=Math.max(5,jn(e.combo,5));[0,2,4].forEach((s,o)=>hi(i,t+o*.055,Math.min(98,nh(74,Math.floor(n/5)+s)),.14,.8))},record:(i,t)=>{[86,88,91,93,98].forEach((e,n)=>hi(i,t+n*.07,e,.12,.9))}},W0={countdown:i=>[String(i.n??i.text??"").toUpperCase()==="GO"?"go":"count",i],launch:i=>["launch",{grade:i.rating||i.grade}],zero60:null,shift:i=>[i.perfect===!1?"shift":"perfect",i],miss:"late",offbeat:"late",flap:"thrust",air:"jump",fleet:"fleet",land:"land",touchdown:"land",loop:"loop",upside:"whoosh",boostready:"boost",flies:"liftoff",checkpoint:"checkpoint",ring:(i,t)=>["ring",{combo:jn(i.combo,t._combo||1)}],ringmiss:"late",scrape:"scrape",hit:"bounce",combo:(i,t)=>["combo",{combo:jn(i.combo,t._combo||5)}],finish:"finish",replay:"ui",beat:null};function yM(){const i=e=>e*ti,t=[];return t.push({t:i(10),name:"count"},{t:i(12),name:"count"},{t:i(14),name:"count"},{t:i(16),name:"go"}),t.push({t:i(48),name:"checkpoint"},{t:i(56),name:"loop"},{t:i(88),name:"boost"},{t:i(96),name:"liftoff"},{t:pp,name:"finish"}),t.sort((e,n)=>e.t-n.t)}const Sn=typeof window<"u"&&window.__rrAudio||new oc;typeof window<"u"&&(window.__rrAudio=Sn);oc.prototype.init=function(){return this.load()};oc.prototype.getTime=function(){return this.time()};Object.defineProperty(oc.prototype,"currentTime",{get(){return this.time()}});const qi=i=>i*ti,As=qi(16),$s=qi(134),mp=1.15*ti,MM=$s+mp,$l=(()=>{try{return new URLSearchParams(location.search)}catch{return new URLSearchParams}})(),ih=$l.has("capture"),bM=$l.get("autoplay")==="1",X0=[[0,"INTRO","HANGAR"],[16,"#3 · #1","LAUNCH + FLEET"],[48,"REVEAL","THE FLIP RAMP"],[56,"#2","THE MIDAIR FLIP"],[88,"BUILD","MEGA FLIP"],[96,"MEGA FLIP","FLEET FLIP"],[128,"OUTRO","FINISH"]],SM=i=>{let t=X0[0];for(const e of X0)i>=e[0]&&(t=e);return t},Dl=[20,24,28,32,36,40,44],wM=[{b:17.9,text:"#3 0-60 IN 0.81s",sub:"TESLA ROADSTER",tone:"cyan",size:"xl",dur:5},{b:27.5,text:"#1 JUMPING THE ENTIRE FLEET",sub:"SEMI · CYBERTRUCK · S · 3 · X · Y",tone:"magenta",size:"l",wrap:!0,dur:5},{b:48,text:"THE MIDAIR FLIP",sub:"NEXT: #2",tone:"green",size:"l",dur:6},{b:61.9,text:"#2 THE MIDAIR FLIP",sub:"PAST VERTICAL",tone:"orange",size:"xl",dur:5},{b:88,text:"MEGA FLIP READY",sub:"TAP: THRUSTERS",tone:"orange",size:"l",dur:6},{b:96.5,text:"MEGA FLIP",sub:"TAP: THRUSTERS",tone:"cyan",size:"xl",dur:5},{b:134,text:"FINISH",tone:"white",size:"xl",dur:8}],TM={countdown:{skip:!0},launch:{skip:!0},replay:{skip:!0},finish:{tone:"white",size:"xl",pri:9,dur:2.4,slam:!0,subFn:(i,t,e)=>sa(e._lap||0)},zero60:{tone:"cyan",size:"xl",pri:3,delay:2*ti,dur:2.4-2*ti,text:"0-60 MPH",sub:"UNDER 1 SECOND"},shift:{chip:!0,tone:"green",dur:1.3,subFn:i=>i.style==="perfect"?"+400":"+200"},miss:{chip:!0,tone:"orange",dur:1.2},offbeat:{chip:!0,tone:"orange",dur:.9},air:{tone:"cyan",size:"l",pri:3,dur:1.3},fleet:{tone:"magenta",size:"xl",pri:3,dur:2.3,sub:"+1,500"},land:{chip:!0,tone:"cyan",dur:1.6},touchdown:{tone:"cyan",size:"l",pri:3,dur:1.5},checkpoint:{tone:"green",size:"l",pri:3,dur:2.3,subFn:i=>i.sub||"NEXT: #2"},loop:{tone:"orange",size:"xl",pri:3,dur:2.3,sub:"TAP ON THE BEAT"},upside:{tone:"magenta",size:"xl",pri:3,dur:2.2,flip:!0},boostready:{tone:"orange",size:"l",pri:3,dur:2.3,sub:"TAP: THRUSTERS"},flies:{tone:"cyan",size:"xl",pri:3,dur:2.3,sub:"TAP TO THRUST"},ring:{chip:!0,tone:"magenta",dur:1,sub:"+500"},ringmiss:{chip:!0,tone:"orange",dur:.9},combo:{skip:!0},moment3:{tone:"cyan",size:"xl",pri:4,dur:2.4,subFn:i=>i.sub||"TESLA ROADSTER"},moment1:{tone:"magenta",size:"l",wrap:!0,pri:4,dur:2.4,subFn:i=>i.sub||""},moment2:{tone:"orange",size:"xl",pri:4,dur:2.4,subFn:i=>i.sub||""},kickflip:{chip:!0,tone:"green",dur:1.5,sub:"THRUSTERS"},softland:{chip:!0,tone:"green",dur:1.6,subFn:i=>i.text==="SOFT LANDING"?"+2,000":"+1,000"},hardland:{chip:!0,tone:"orange",dur:1.6,sub:"COMBO LOST"},inverted:{tone:"magenta",size:"l",pri:2,dur:1.4,flip:!0},upright:{chip:!0,tone:"cyan",dur:1.4,sub:"+2,500"},thrusters:{chip:!0,tone:"cyan",dur:1.2},megaflip:{tone:"cyan",size:"xl",pri:3,dur:2,sub:"TAP: THRUSTERS"},fleetflip:{chip:!0,tone:"magenta",dur:1.3,subFn:i=>i.sub||""},rowclear:{chip:!0,tone:"cyan",dur:1},climbbeat:{skip:!0},bullet:{skip:!0},finale:{skip:!0},air:{skip:!0},scrape:{chip:!0,tone:"orange",dur:.9},hit:{chip:!0,tone:"orange",dur:1.1,sub:"COMBO LOST"}},q0={intro:["INTRO","HANGAR"],launch:["#3 · #1","LAUNCH + FLEET"],reveal:["REVEAL","THE FLIP RAMP"],flip:["#2","THE MIDAIR FLIP"],build:["BUILD","MEGA FLIP"],mega:["MEGA FLIP","FLEET FLIP"],outro:["OUTRO","FINISH"],tunnel:["BREAK","CHECKPOINT"],loop:["DROP 2","THE LOOP"],flight:["DROP 3","FLIGHT"]};function EM(i){const t=i/ti;let e=0;if(i>=As){const h=i-As;e=238*(1-Math.exp(-h/1.6))+10*Math.min(1,h/12);for(const r of Dl){const u=i-qi(r);u>0&&u<.5&&(e+=6*Math.sin(u/.5*Math.PI))}t>=48&&t<56&&(e=e*.82),t>=56&&t<88&&(e+=8*Math.sin((t-56)/32*Math.PI)-18*Math.exp(-(((t-74)/4)**2))),t>=88&&t<96&&(e+=14*(t-88)/8),t>=96&&t<128&&(e+=22+4*Math.sin(t*Math.PI/2)),t>=128&&(e+=22-16*Math.min(1,(t-128)/8)),i>$s&&(e*=Math.max(0,1-(i-$s)/2.5))}let n=0,s=0,o=0,a=0;i>=As&&(n+=1e3);for(const h of Dl)t>=h&&(n+=500,a++);t>=31.5&&(n+=2e3),t>=48&&(n+=1e3),t>=56&&(n+=100*Math.floor(Math.min(88,t)-56)),t>=74&&(n+=1500);for(let h=0;h<15;h++){const r=98+2*h;t>=r&&(o++,s=h+1,n+=250*s)}t>=128&&t<134?s=o:t<98&&(s=0),i>=As&&(n+=Math.floor(Math.min(i,$s)-As)*120);let l=0;t>=16&&t<48?l=Math.min(.6,.12+.07*a):t>=48&&t<88?l=.6-.15*Math.min(1,Math.max(0,(t-56)/32)):t>=88&&t<96?l=.45+.55*(t-88)/8:t>=96&&t<128?l=1-.55*(t-96)/32:t>=128&&(l=.45);let c=0;return t>=9&&t<16&&(c=Math.min(.86,.18+.68*(t-9)/5)+.02*Math.sin(t*9)),{speed:e,score:n,combo:s,maxCombo:Math.max(o,s),boost:l,rev:c,revTarget:[.78,.94],launch:"PERFECT",shifts:a,shiftsTotal:Dl.length,rings:o,ringsTotal:15}}const Ae=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),de=i=>typeof i=="number"&&isFinite(i)?i:void 0,or=i=>1-Math.pow(1-Ae(i),3),Vi=i=>{i=Ae(i);const t=1.9;return 1+(t+1)*Math.pow(i-1,3)+t*Math.pow(i-1,2)};function sa(i){i=Math.max(0,i);const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const sh=i=>Math.round(i).toLocaleString("en-US"),je=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n};function We(i,t){i.__t!==t&&(i.__t=t,i.textContent=t)}function ce(i,t,e){const n="__s_"+t;i[n]!==e&&(i[n]=e,i.style.setProperty(t,e))}function Ne(i,t,e){const n="__c_"+t;i[n]!==e&&(i[n]=e,i.classList.toggle(t,e))}function jo(i,t,e,n,s){const o=r=>{const u=(r-90)*Math.PI/180;return[i+e*Math.cos(u),t+e*Math.sin(u)]},[a,l]=o(n),[c,h]=o(s);return`M${a.toFixed(2)} ${l.toFixed(2)} A${e} ${e} 0 ${s-n>180?1:0} 1 ${c.toFixed(2)} ${h.toFixed(2)}`}function AM(i,t,e,n,s,o,a,l){let c="";for(let h=0;h<=a;h++){const r=s+(o-s)*h/a,u=(r-90)*Math.PI/180,f=h%l===0,d=f?e-4:e;c+=`<line x1="${(i+d*Math.cos(u)).toFixed(1)}" y1="${(t+d*Math.sin(u)).toFixed(1)}" x2="${(i+n*Math.cos(u)).toFixed(1)}" y2="${(t+n*Math.sin(u)).toFixed(1)}" class="${f?"tk tk-big":"tk"}"/>`}return c}class CM{constructor(){this.mesh=null,this.key="",this.failed=!1}_build(){const t=window.__game,e=t&&t.carApi,n=t&&t.car,s=e&&e.anchors&&e.anchors.tailLeft&&e.anchors.tailLeft.parent||(n&&n.isObject3D?n:null);if(!s)return!1;const o=document.createElement("canvas");o.width=512,o.height=144,this.ctx=o.getContext("2d"),this.tex=new Jl(o),this.tex.colorSpace=xn,this.tex.anisotropy=4;const a=new ke({map:this.tex,transparent:!0,depthWrite:!1,blending:dn,toneMapped:!1,side:Ge});a.color.setScalar(1.7),this.mesh=new ue(new an(.86,.242),a),this.mesh.name="hud-deck-panel",this.mesh.renderOrder=20,this.mesh.frustumCulled=!1;const l=s!==n;return this.mesh.position.set(0,1,1.9),this.mesh.rotation.x=-.62,s.add(this.mesh),!0}update(t,e,n,s,o){if(this.failed)return;if(!this.mesh)try{if(!t||!this._build())return}catch{this.failed=!0;return}if(this.mesh.visible=t,!t)return;const a=e+"|"+n+"|"+(s>.5?1:0)+"|"+(o?1:0);if(a===this.key)return;this.key=a;const l=this.ctx,c=512,h=144;l.clearRect(0,0,c,h);const r=l.createLinearGradient(0,0,0,h);r.addColorStop(0,"rgba(20,90,140,0.30)"),r.addColorStop(1,"rgba(10,30,70,0.10)"),l.fillStyle=r,l.beginPath(),l.moveTo(26,6),l.lineTo(c-6,6),l.lineTo(c-26,h-6),l.lineTo(6,h-6),l.closePath(),l.fill(),l.strokeStyle=`rgba(63,243,255,${.55+.45*s})`,l.lineWidth=3,l.stroke(),l.fillStyle="rgba(255,58,210,0.9)",l.fillRect(30,6,120,4),l.fillRect(c-150,h-10,120,4);const u='"DIN Condensed","Bahnschrift","Barlow Condensed","Roboto Condensed","Arial Narrow",Impact,sans-serif';l.textBaseline="alphabetic",l.shadowColor="rgba(63,243,255,0.95)",l.shadowBlur=14,l.fillStyle="rgba(190,240,255,0.85)",l.font=`700 22px ${u}`,l.fillText("L A P",40,46),l.fillStyle="#ffffff",l.font=`italic 700 92px ${u}`,l.fillText(e,36,126),n>=2&&(l.textAlign="right",l.shadowColor="rgba(255,58,210,0.95)",l.fillStyle="rgba(255,198,243,0.9)",l.font=`700 22px ${u}`,l.fillText("C O M B O",c-40,46),l.fillStyle=o?"#ffe7fb":"#ff7be6",l.font=`italic 700 80px ${u}`,l.fillText("×"+n,c-40,124),l.textAlign="left"),l.shadowBlur=0,this.tex.needsUpdate=!0}}class zu{constructor(){ku(this,"_loop",()=>{requestAnimationFrame(this._loop),this._wrapSeek(),!(this._previewMode||performance.now()-this.lastExternal<250)&&this._poll()});this.mounted=!1,this.events=[],this.replayFns=[],this.lastExternal=0,this.t=0,this.state={},this.prevCombo=0,this.prevT=-1,this.best=null,this.recordSaved=!1,this.deck=new CM}mount(t){if(this.mounted||typeof document>"u")return this;t=t||document.getElementById("hud"),t||(t=je("div"),t.id="hud",document.body.appendChild(t)),this.root=t,t.innerHTML="",Ne(t,"rr-hud",!0),bM&&(t.dataset.autoplay="1"),t.append(je("div","rr-scrim rr-scrim-top"),je("div","rr-scrim rr-scrim-bot"),je("div","rr-scan")),this.frame=je("div","rr-frame");for(const u of["tl","tr","bl","br"])this.frame.append(je("i","rr-br rr-br-"+u));t.append(this.frame);const e=je("div","rr-top");this.scoreBox=je("div","rr-score",`
      <div class="rr-lbl">SCORE</div>
      <div class="rr-score-v">${'<i class="rr-d"></i>'.repeat(7)}</div>
      <div class="rr-combo"><b class="rr-combo-x">x0</b><span class="rr-combo-l">COMBO</span><i class="rr-combo-bar"><i></i></i></div>
      <div class="rr-combo-pop"><b></b><span></span></div>`),this.timeBox=je("div","rr-time",`
      <div class="rr-lbl">LAP <span class="rr-sec"></span></div>
      <div class="rr-time-v">0:00.00</div>
      <div class="rr-split"></div>`),this.center=je("div","rr-center",`
      <div class="rr-chip"><i class="rr-chip-dot"></i><span class="rr-chip-a"></span><span class="rr-chip-b"></span></div>`),e.append(this.scoreBox,this.center,this.timeBox),t.append(e);const n=200,s=100,o=-135,a=135,l=(u,f)=>`
      <svg viewBox="0 0 ${n} ${n}" class="rr-pod-svg">
        <defs>
          <linearGradient id="g-${u}" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" class="st0"/><stop offset="1" class="st1"/>
          </linearGradient>
        </defs>
        <circle cx="${s}" cy="${s}" r="92" class="pod-bg"/>
        <path d="${jo(s,s,84,o,a)}" class="pod-track"/>
        <g class="pod-ticks">${AM(s,s,72,78,o,a,24,4)}</g>
        <path d="${jo(s,s,84,o,a)}" class="pod-fill ${f}" pathLength="100" stroke="url(#g-${u})"/>
        <path d="${jo(s,s,84,o,a)}" class="pod-glow ${f}" pathLength="100" stroke="url(#g-${u})"/>
        <path d="${jo(s,s,92,o,a)}" class="pod-zone" pathLength="100"/>
        <path d="${jo(s,s,63,o+8,a-8)}" class="pod-inner" pathLength="100"/>
        <line x1="${s}" y1="${s}" x2="${s}" y2="${s-92}" class="pod-needle"/>
      </svg>`;this.speedPod=je("div","rr-pod rr-pod-speed",l("spd","f-speed")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">MPH</div></div>
      <div class="rr-pod-tag">VELOCITY</div>`),this.boostPod=je("div","rr-pod rr-pod-boost",l("bst","f-boost")+`
      <div class="rr-pod-read"><div class="rr-pod-v">0</div><div class="rr-pod-u">BOOST</div></div>
      <div class="rr-pod-tag">COLD-GAS</div>`),t.append(this.boostPod,this.speedPod),this.shiftEl=je("div","rr-shift",`
      <div class="rr-shift-leds">${"<i></i>".repeat(10)}</div>
      <div class="rr-shift-row"><span class="rr-shift-g"><small>GEAR</small><b>1</b></span><span class="rr-shift-l">SHIFT</span></div>`),t.append(this.shiftEl);const c=(u,f)=>u.querySelector(f);this.sp={fill:c(this.speedPod,".pod-fill"),glow:c(this.speedPod,".pod-glow"),v:c(this.speedPod,".rr-pod-v"),needle:c(this.speedPod,".pod-needle"),zone:c(this.speedPod,".pod-zone"),inner:c(this.speedPod,".pod-inner")},this.bp={fill:c(this.boostPod,".pod-fill"),glow:c(this.boostPod,".pod-glow"),v:c(this.boostPod,".rr-pod-v"),u:c(this.boostPod,".rr-pod-u"),tag:c(this.boostPod,".rr-pod-tag"),needle:c(this.boostPod,".pod-needle"),zone:c(this.boostPod,".pod-zone"),inner:c(this.boostPod,".pod-inner")},this.popLayer=je("div","rr-pops"),t.append(this.popLayer),this.popPool=[];for(let u=0;u<4;u++){const f=je("div","rr-pop",'<div class="rr-pop-bar rr-pop-bar-a"></div><div class="rr-pop-txt"><span class="rr-pop-c rr-pop-m"></span><span class="rr-pop-c rr-pop-y"></span><span class="rr-pop-main"></span></div><div class="rr-pop-sub"></div><div class="rr-pop-bar rr-pop-bar-b"></div>');f.style.display="none",this.popLayer.append(f),this.popPool.push(f)}this.chips=je("div","rr-chips"),t.append(this.chips),this.chipPool=[];for(let u=0;u<3;u++){const f=je("div","rr-tag");f.style.display="none",this.chips.append(f),this.chipPool.push(f)}this.title=je("div","rr-title",`
      <div class="rr-title-kicker">A ROADSTER DEMO RUN</div>
      <div class="rr-wordmark"><span class="rr-wm-a">ROADSTER</span><span class="rr-wm-b">RUSH</span></div>
      <div class="rr-title-rule"><i></i></div>`),this.titleScrim=je("div","rr-title-scrim"),this.start=je("div","rr-start",`
      <div class="rr-press">PRESS START</div>
      <div class="rr-title-hint"><b>HOLD</b> TO REV &nbsp;·&nbsp; <b>RELEASE</b> ON GO</div>`),this.specs=je("div","rr-specs",`
      <div class="rr-spec"><span class="rr-lbl">0–60 MPH</span><b>&lt;1.0<small>S</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">TOP SPEED</span><b>250+<small>MPH</small></b></div>
      <div class="rr-spec"><span class="rr-lbl">THRUSTERS</span><b>COLD<small>GAS</small></b></div>`),this.specCells=[...this.specs.children],this.count=je("div","rr-count",`
      <i class="rr-count-wave"></i>
      <svg viewBox="0 0 200 200" class="rr-count-ring"><circle cx="100" cy="100" r="86" class="cr-bg"/><circle cx="100" cy="100" r="86" class="cr-fg" pathLength="100"/></svg>
      <div class="rr-count-n">3</div>
      <div class="rr-tree"><i></i><i></i><i></i></div>
      <div class="rr-count-l">HOLD TO REV</div>`),t.append(this.titleScrim,this.title,this.start,this.specs,this.count),this.countN=this.count.querySelector(".rr-count-n"),this.countL=this.count.querySelector(".rr-count-l"),this.countRing=this.count.querySelector(".cr-fg"),this.countWave=this.count.querySelector(".rr-count-wave"),this.treeLights=[...this.count.querySelectorAll(".rr-tree i")],this.results=je("div","rr-results",`
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
        <div class="rr-card-foot"><span class="rr-wm-a">ROADSTER</span><span class="rr-replay">TAP TO REPLAY</span></div>
      </div>`),t.append(this.results);const h=u=>this.results.querySelector(u);this.rr={card:h(".rr-card"),time:h(".rr-r-time"),score:h(".rr-r-score"),best:h(".rr-r-best"),launch:h(".rr-r-launch"),shifts:h(".rr-r-shifts"),rings:h(".rr-r-rings"),combo:h(".rr-r-combo"),record:h(".rr-record"),replay:h(".rr-replay"),title:h(".rr-card-title"),flag:h(".rr-card-flag"),rank:h(".rr-r-rank"),rankBox:h(".rr-rank"),cells:[...this.results.querySelectorAll(".rr-card-grid > div, .rr-card-time, .rr-card-foot")]},this.cue=je("div","rr-cue",'<div class="rr-cue-row"><b class="rr-cue-k">TAP</b><span class="rr-cue-t">THRUSTERS</span></div><i class="rr-cue-bar"><i></i></i>'),this.cueK=this.cue.querySelector(".rr-cue-k"),this.cueT=this.cue.querySelector(".rr-cue-t"),this.cueBar=this.cue.querySelector(".rr-cue-bar > i"),this.z60=je("div","rr-z60",'<span class="rr-lbl">0-60 MPH</span><b class="rr-z60-v">0.00</b><small>S</small>'),this.z60V=this.z60.querySelector(".rr-z60-v"),t.append(this.cue,this.z60),this.flash=je("div","rr-beatflash"),t.append(this.flash),this.launchLbl=je("div","rr-launch-lbl"),t.append(this.launchLbl),this.whiteFlash=je("div","rr-whiteflash"),t.append(this.whiteFlash),this.scoreDigits=[...this.scoreBox.querySelectorAll(".rr-d")],this.comboPop=this.scoreBox.querySelector(".rr-combo-pop"),this.comboPopN=this.comboPop.querySelector("b"),this.comboPopL=this.comboPop.querySelector("span"),this.comboEl=this.scoreBox.querySelector(".rr-combo"),this.comboX=this.scoreBox.querySelector(".rr-combo-x"),this.comboBar=this.scoreBox.querySelector(".rr-combo-bar > i"),this.timeV=this.timeBox.querySelector(".rr-time-v"),this.splitEl=this.timeBox.querySelector(".rr-split"),this.secEl=this.timeBox.querySelector(".rr-sec"),this.chipA=this.center.querySelector(".rr-chip-a"),this.chipB=this.center.querySelector(".rr-chip-b"),this.chipEl=this.center.querySelector(".rr-chip"),this.leds=[...this.shiftEl.querySelectorAll(".rr-shift-leds i")],this.shiftL=this.shiftEl.querySelector(".rr-shift-l"),this.shiftG=this.shiftEl.querySelector(".rr-shift-g b");const r=()=>{if(!this._resultsVisible||this.t<this._resultsAt+.8)return;for(const d of this.replayFns)try{d()}catch{}if(this.replayFns.length)return;window.dispatchEvent(new CustomEvent("rr:replay"));const u=window.__game,f=u&&(u.restart||u.replay||u.reset);if(f)try{f.call(u)}catch{}};window.addEventListener("pointerdown",r,{passive:!0}),window.addEventListener("keydown",u=>{(u.code==="Space"||u.code==="Enter")&&r()}),window.addEventListener("rr:event",u=>{const f=u.detail||{};f.name&&this.event(f.name,f)});try{const u=localStorage.getItem("rr.best");this.best=u?+u:null}catch{this.best=null}return this.mounted=!0,this.render(0,{}),requestAnimationFrame(this._loop),this}onReplay(t){typeof t=="function"&&this.replayFns.push(t)}bindGameplay(t){return this._gp=t,this}onGameplayEvent(t){if(!t||!t.type)return;this._sawEvent=!0,t.type==="launch"&&t.rating&&(this._launchGrade=t.rating);const e={fleet:"fleet",upside:"whoosh",ringmiss:"late",offbeat:"late"};if(e[t.type]&&Sn.playing&&Math.abs((de(t.t)??0)-Sn.time())<.3)try{Sn._play(e[t.type],{dur:1.2})}catch{}t.text&&(this.gpEvents=(this.gpEvents||[]).filter(n=>de(t.t)===void 0||n.t0<=t.t),this.gpEvents.push({text:t.text,t0:de(t.t)??this.t,kind:t.type,style:t.style}),this.gpEvents.length>16&&this.gpEvents.shift())}update(t,e){typeof t=="object"&&t&&(e=t,t=de(e.t??e.time)),this.lastExternal=performance.now(),this.render(de(t)??this.t,e||{})}popup(t,e={}){const n=de(e.t)??this.t;this.events.push({t:n,text:String(t),sub:e.sub||"",tone:e.tone||"cyan",size:e.size||"l",dur:de(e.dur)??3.5,key:e.key}),this.events.length>24&&this.events.splice(0,this.events.length-24)}chip(t,e={}){const n=de(e.t)??this.t;this.events.push({t:n,text:t,sub:e.sub||"",tone:e.tone||"green",chip:!0,dur:de(e.dur)??2.4,key:e.key})}event(t,e={}){const n=String(t).toLowerCase(),s=de(e.t)??this.t;this._sawEvent=!0;const o=this.events.length;this._event(n,e,s);for(let a=o;a<this.events.length;a++)this.events[a].fromEvent=!0}_event(t,e,n){if(t==="shift"){const s=String(e.grade||"PERFECT").toUpperCase();this.chip(s==="PERFECT"?"PERFECT SHIFT":s==="GOOD"?"GOOD SHIFT":"LATE SHIFT",{t:n,tone:s==="PERFECT"?"green":s==="GOOD"?"cyan":"orange",sub:e.points?"+"+e.points:""})}else t==="launch"?this._launchGrade=String(e.grade||"PERFECT").toUpperCase():t==="combo"?+(e.n??e.combo):t==="pylon"||t==="hit"?this.chip("COMBO LOST",{t:n,tone:"orange"}):t==="airtime"?this.popup("AIR TIME",{t:n,tone:"cyan",size:"l",dur:2.6,sub:e.secs?e.secs.toFixed(2)+" s":""}):t==="record"&&(this._record=!0)}_readGame(){const t=window.__game||{};if(!window.__game&&!this._gp)return null;let e;try{e=de(t.time)??de(t.t)??de(t.musicTime)??(typeof t.getTime=="function"?de(t.getTime()):void 0)??de(t.clock&&(t.clock.t??t.clock.time))??de(t.state&&(t.state.t??t.state.time))}catch{}let n;try{n=this._gp&&this._gp.state||typeof t.hudState=="function"&&t.hudState()||t.gp&&t.gp.state||t.gameplay&&t.gameplay.state||typeof t.getState=="function"&&t.getState()||t.state&&typeof t.state=="object"&&t.state||{},e===void 0&&de(n.t)!==void 0&&(e=n.t)}catch{n={}}return{t:e,s:n}}_poll(t){const e=this._readGame();if(!e&&t===void 0&&!Sn.playing)return;let n=de(t)??(e&&e.t);n===void 0&&Sn.playing&&(n=Sn.time()),n===void 0&&(n=this._seekT??0);const s=e&&e.s||{};if(this.render(n,s),performance.now()-Sn.lastTickAt>250)try{Sn.tick(n,this._merged||s)}catch{}}_wrapSeek(){const t=window.__game;if(!t||typeof t.seek!="function"||t.seek.__hudWrapped)return;const e=t.seek,n=this,s=function(o){return n._seekT=+o,Promise.resolve(e.apply(this,arguments)).then(a=>(performance.now()-n.lastExternal>250&&n._poll(+o),a))};s.__hudWrapped=!0;try{t.seek=s}catch{}}render(t,e={}){if(!this.mounted)return;t<this.prevT-.5&&(this.events=this.events.filter(nt=>nt.t<=t),this._record=!1,this.recordSaved=!1),this.prevT=t,this.t=t;const n=EM(t),s={};for(const nt in n)s[nt]=n[nt];for(const nt in e)e[nt]!==void 0&&e[nt]!==null&&(s[nt]=e[nt]);if(!Array.isArray(e.popups)){let nt=null;try{const Ct=window.__game;nt=this._gp&&this._gp.state||Ct&&(Ct.gameplay&&Ct.gameplay.state||Ct.gp&&Ct.gp.state)||null}catch{}if(nt&&Array.isArray(nt.popups)){e={section:nt.section,launched:nt.launched,launchT:nt.launchT,finishT:nt.finishT,airborne:nt.airborne,results:nt.results,mph:nt.mph,launch:nt.launch,finished:nt.finished,...e,popups:nt.popups};for(const Ct in e)e[Ct]!==void 0&&e[Ct]!==null&&(s[Ct]=e[Ct])}}const o=Array.isArray(e.popups)||de(e.mph)!==void 0;o&&(e.shift&&typeof e.shift=="object"&&(s.shift={phase:de(e.shift.light)??de(e.shift.phase),window:!!(e.shift.green??e.shift.window),active:e.shift.active!==!1}),de(e.perfectShifts)!==void 0&&(s.shifts=e.perfectShifts),e.results&&typeof e.results=="object"&&(s.results=e.results),e.launched||(s.launchT=void 0),s._gpLaunch=e.launch||null),this._gpState=o;const a=de(e.mph)??de(e.speed)??de(e.speedMph)??n.speed;s.speed=a,s.boost=de(e.boost)??de(e.boostMeter)??n.boost,s.rev=de(e.rev)??de(e.revLevel)??n.rev,this._merged=s;const l=t/ti,c=l-Math.floor(l),h=Math.pow(1-c,3);this.root.style.setProperty("--pulse",h.toFixed(3));let r=0,u=0;try{const nt=window.__game,Ct=this._gp&&this._gp.state&&this._gp.state.cam||nt&&nt.gp&&nt.gp.state&&nt.gp.state.cam;Ct&&(r=de(Ct.shake)??0,u=de(Ct.punch)??0)}catch{}const f=Ae(r*.9+u*.012);ce(this.root,"--shx",(Math.sin(t*73.1)*f*7).toFixed(2)+"px"),ce(this.root,"--shy",(Math.cos(t*57.7)*f*5).toFixed(2)+"px"),ce(this.root,"--ab",(.6+f*5).toFixed(2));const d=o?e.finished?(de(e.finishT)??t)+mp:1/0:MM;this._resultsAt=d;const g=o?e.finished?de(e.finishT)??t:1/0:$s;this._finishing=t>=g,Ne(this.root,"is-finish",this._finishing);const v=t-g;ce(this.whiteFlash,"opacity",(this._finishing?.75*Math.pow(Ae(1-v/.34),2):0).toFixed(3));const m=t<As,p=t>=d,b=l<9.6;Ne(this.root,"is-intro",m),Ne(this.root,"is-title",b),Ne(this.root,"is-results",p),Ne(this.root,"is-flight",l>=96&&l<128);const T=typeof s.section=="string"&&q0[s.section]?[0,...q0[s.section]]:SM(l);We(this.chipA,T[1]),We(this.chipB,T[2]),We(this.secEl,"");const S=o?e.launched?de(e.launchT)??As:void 0:As,F=o?e.finished?de(e.finishT)??t:t:Math.min(t,$s),O=S===void 0?0:Math.max(0,F-S);this._lap=O,this._finishT=o?e.finished?de(e.finishT)??t:void 0:t>=$s?$s:void 0,We(this.timeV,sa(O));const R=l>=48&&l<60;Ne(this.splitEl,"on",R),We(this.splitEl,R?"CP1  "+sa(qi(48)-(S??As)):"");const B=Math.max(0,Math.floor(de(s.score)??0)),M=String(Math.min(B,9999999)).padStart(7,"0"),C=Math.min(6,M.length-String(B).length);this.scoreDigits.forEach((nt,Ct)=>{We(nt,M[Ct]),Ne(nt,"ghost",Ct<C)});const N=Math.floor(de(s.combo)??0);Ne(this.comboEl,"on",N>=2),We(this.comboX,"x"+N),ce(this.comboBar,"width",(Ae(N%5/5+(N%5===0&&N>0?1:0))*100).toFixed(0)+"%"),!o&&N>this.prevCombo&&N>=10&&N%10===0&&!this._sawEvent&&this.events.push({t:this._comboT(N,t),text:`x${N} COMBO`,lane:"combo",dur:1.5}),this.prevCombo=N;const $=l>=16&&l<47.5&&(!o||s.section==="launch"&&!!e.launched&&!e.airborne);if(Ne(this.shiftEl,"on",$),$){let nt=de(s.shift&&s.shift.phase);nt===void 0&&(nt=(l-16)%4/4);const Ct=s.shift&&typeof s.shift.window=="boolean"?s.shift.window:nt>.82,$t=Ct?this.leds.length:Math.floor(Ae(nt/.9)*this.leds.length+.001);this.leds.forEach((se,Ee)=>{Ne(se,"on",Ee<$t),Ne(se,"win",Ct)}),Ne(this.shiftEl,"win",Ct),We(this.shiftL,Ct?"SHIFT!":$t>=7?"READY":"SHIFT");const Qt=Math.max(1,Math.floor(de(s.gear)??1+(de(s.shifts)??0)));We(this.shiftG,String(Qt)),ce(this.shiftEl,"--kick",(nt<.12&&l>17?1-nt/.12:0).toFixed(3))}const et=Ae(a/300);ce(this.sp.fill,"stroke-dasharray",`${(et*100).toFixed(2)} 100`),ce(this.sp.glow,"stroke-dasharray",`${(et*100).toFixed(2)} 100`),ce(this.sp.needle,"transform",`rotate(${(-135+270*et).toFixed(2)}deg)`),We(this.sp.v,String(Math.round(a))),Ne(this.speedPod,"redline",a>255),ce(this.sp.zone,"stroke-dasharray","0 100"),ce(this.sp.inner,"stroke-dasharray",`${(Ae(l%4/4)*100).toFixed(1)} 100`);const pt=l>=8&&l<16.5,Mt=l>=88&&l<96;let lt=Ae(pt?s.rev:s.boost);if(Mt){const nt=Math.floor(l-88),Ct=l-88-nt;lt=Math.max(lt*.25,Ae((nt+or(Ae(Ct/.22)))/6.5))}else l>=96&&l<97&&(lt=Math.max(lt,1-Ae(l-96.5)));Ne(this.boostPod,"charging",Mt),ce(this.boostPod,"--kick",(Mt?h:0).toFixed(3)),Ne(this.boostPod,"rev",pt),ce(this.bp.fill,"stroke-dasharray",`${(lt*100).toFixed(2)} 100`),ce(this.bp.glow,"stroke-dasharray",`${(lt*100).toFixed(2)} 100`),ce(this.bp.needle,"transform",`rotate(${(-135+270*lt).toFixed(2)}deg)`),We(this.bp.v,String(Math.round(lt*100))),We(this.bp.u,pt?"REV":"BOOST"),We(this.bp.tag,pt?"LAUNCH":Mt?lt>=.999?"READY":"ARMING":"COLD-GAS");const gt=Array.isArray(e.revTarget)?e.revTarget:this._gpState?[.86,1]:[.78,.94];pt?(ce(this.bp.zone,"stroke-dasharray",`0 ${(gt[0]*100).toFixed(1)} ${((gt[1]-gt[0])*100).toFixed(1)} 100`),Ne(this.boostPod,"inzone",lt>=gt[0]&&lt<=gt[1])):(ce(this.bp.zone,"stroke-dasharray","0 100"),Ne(this.boostPod,"inzone",!1)),Ne(this.boostPod,"full",!pt&&lt>.97),ce(this.bp.inner,"stroke-dasharray",`${(l>=88&&l<96?(l-88)/8*100:0).toFixed(1)} 100`),Ne(this.root,"hide-pods",b||p||this._finishing);try{this.deck.update(!1,sa(O),N,h,N>=10)}catch{}this._renderTitle(t,l,c),this._renderCount(t,l,c,s),this._renderCue(t,e),this._renderPops(t,l,s),this._renderResults(t,s),ce(this.flash,"opacity",(m||p?0:h*(l>=16?.1:0)).toFixed(3))}_renderCue(t,e){const n=e&&e.cue,s=!!(n&&n.active&&!this._finishing);if(Ne(this.cue,"on",s),s){const l=String(n.text||"").split(":");We(this.cueK,n.done&&n.grade?String(n.grade):l.length>1?l[0].trim():""),We(this.cueT,n.done&&n.grade?n.kind==="hold"?"LANDING":"KICKFLIP":l.length>1?l.slice(1).join(":").trim():n.text);const c=!n.done&&Math.abs(t-(de(n.tHit)??t))<.14;Ne(this.cue,"hot",c||n.kind==="hold"&&!!e.holding&&!n.done),Ne(this.cue,"done",!!n.done),Ne(this.cue,"hold",n.kind==="hold"),ce(this.cueBar,"width",(Ae(de(n.k)??0)*100).toFixed(1)+"%")}const o=e&&e.zero60,a=!!(o&&o.show)&&!this._finishing;Ne(this.z60,"on",a),a&&(We(this.z60V,(de(o.t)??0).toFixed(2)),Ne(this.z60,"frozen",!!o.frozen))}_comboT(t,e){if(!this._sawEvent){const n=96+2*t;if(Math.abs(qi(n)-e)<3)return qi(n)}return e}_renderTitle(t,e,n){const s=e<9.6,o=Ae((e-8.8)/.8);ce(this.specs,"display",s?"":"none");const a=or(Ae(t/.6));if(ce(this.title,"opacity",s?(a*(1-o)).toFixed(3):"0"),ce(this.title,"display",s?"":"none"),ce(this.start,"display",s?"":"none"),ce(this.titleScrim,"display",s?"":"none"),ce(this.start,"opacity",s?(a*(1-o)).toFixed(3):"0"),ce(this.titleScrim,"opacity",s?(1-o).toFixed(3):"0"),!s)return;ce(this.title,"transform",`translate(-50%, -50%) scale(${(.96+.04*a+.08*o).toFixed(3)})`);const l=this.start.querySelector(".rr-press");Ne(l,"lit",e<2?!0:n<.5),ce(this.title,"--wipe",(Ae(t/.5)*115).toFixed(1)+"%"),Ne(this.title,"wiped",t>=.5),this.specCells.forEach((c,h)=>{const r=Vi(Ae((e-1-h*.5)/.9));ce(c,"opacity",(Ae((e-1-h*.5)/.4)*(1-o)).toFixed(3)),ce(c,"transform",`translateY(${((1-r)*30).toFixed(1)}px)`)})}_renderCount(t,e,n,s){let o=!1,a="",l="",c=0,h=1,r=1,u=!1;if(e>=10&&e<16){const m=Math.floor((e-10)/2),p=(e-10-m*2)/2;o=!0,a=String(3-m),l="HOLD TO REV",c=1-p,h=1.35-.35*Vi(p*4),r=1-.35*Ae((p-.7)/.3)}else if(e>=16&&e<17.4){const m=e-16;o=!0,u=!0,a="GO",c=0,l="";const p=Ae((m-1)/.4);h=1.5-.5*Vi(m*2.2)+.9*p*p,r=1-p}const d=e>=16&&e<18?this._gpState?s._gpLaunch:this._launchGrade||s.launch||"PERFECT":null;if(!d)ce(this.launchLbl,"display","none");else{const m=String(d).toUpperCase();ce(this.launchLbl,"display",""),We(this.launchLbl,m+" LAUNCH");const p="rr-launch-lbl g-"+m.toLowerCase();this.launchLbl.__cn!==p&&(this.launchLbl.__cn=p,this.launchLbl.className=p);const b=Vi(Ae((e-16)/.35));ce(this.launchLbl,"transform",`translate(-50%, 0) scale(${(1.4-.4*b).toFixed(3)}) skewX(-10deg)`),ce(this.launchLbl,"opacity",Ae((e-16)/.08).toFixed(3))}if(ce(this.count,"display",o?"":"none"),!o)return;Ne(this.count,"go",u);const g=u?3:Math.floor((e-10)/2)+1;this.treeLights.forEach((m,p)=>{Ne(m,"on",p<g),Ne(m,"g",u)});const v=u?(e-16)/1.6:(e-10)%2/1.2;ce(this.countWave,"transform",`scale(${(.8+1.1*or(v)).toFixed(3)})`),ce(this.countWave,"opacity",(Ae(1-v)*(u?1:.7)).toFixed(3)),ce(this.count,"--hit",Math.pow(1-Ae(u?(e-16)/.5:(e-10)%2/.5),2).toFixed(3)),We(this.countN,a),We(this.countL,l),ce(this.countRing,"stroke-dasharray",`${(c*100).toFixed(2)} 100`),ce(this.count,"transform",`translate(-50%, -50%) scale(${h.toFixed(3)})`),ce(this.count,"opacity",r.toFixed(3))}_activeCallouts(t,e){const n=[],s=Array.isArray(e.popups)?e.popups:this.gpEvents&&this.gpEvents.length?this.gpEvents:null;if(s){for(const o of s){const a=TM[o.kind]||(o.style==="bad"?{chip:!0,tone:"orange",dur:1}:o.style==="big"?{tone:"cyan",size:"l",pri:2,dur:2}:{chip:!0,tone:"cyan",dur:1.2});if(a.skip||!o.text)continue;if(a.lane==="combo"){const h=+(String(o.text).match(/\d+/)||[0])[0];if(!(h>=10&&h%10===0))continue}const l=(de(o.t0)??0)+(a.delay||0),c=Math.min(2.4-(a.delay||0),a.dur||1.5);t<l||t>=l+c||n.push({chip:!!a.chip,lane:a.lane,pri:a.pri??1,slam:!!a.slam,t:l,dur:c,text:a.text||o.text,sub:a.subFn?a.subFn(o,e,this):a.sub||"",tone:a.tone||"cyan",size:a.size||"l",flip:!!a.flip,wrap:!!a.wrap})}for(const o of this.events)!o.fromEvent&&t>=o.t&&t<o.t+o.dur&&n.push(o);return n}for(const o of wM){const a=qi(o.b),l=qi(o.dur);t>=a&&t<a+l&&n.push({...o,pri:o.text==="FINISH"?9:3,slam:o.text==="FINISH",t:a,dur:l,sub:o.subFn?o.subFn():o.sub||""})}if(!this._sawEvent)for(const o of Dl){const a=qi(o);t>=a&&t<a+qi(3)&&n.push({chip:!0,t:a,dur:qi(3),text:"PERFECT SHIFT",sub:"+500",tone:"green"})}for(const o of this.events)t>=o.t&&t<o.t+o.dur&&n.push(o);return n}_popDodge(t,e,n){if(!e||!e.on||!Number.isFinite(e.y))return this._popSlot=null,[0,1];const s=this.root&&this.root.clientHeight||window.innerHeight||1,o=this.popLayer.offsetTop/s,a=(t.offsetHeight||0)/s/2+.015,l=(1-e.y)/2,c=Math.max(.03,(e.r||0)*.5*.75),h=d=>Math.abs(d-l)<a+c,r=[o,.155,.62];let u=this._popSlot&&this._popSlot.key===n?this._popSlot.y:o,f=1;if(h(u)){const d=r.filter(g=>!h(g));d.length?u=d.sort((g,v)=>Math.abs(g-o)-Math.abs(v-o))[0]:(u=r.sort((g,v)=>Math.abs(v-l)-Math.abs(g-l))[0],f=.25)}return this._popSlot={key:n,y:u},[(u-o)*s,f]}_renderPops(t,e,n){const s=this._activeCallouts(t,n),a=s.filter(r=>!r.chip&&!r.lane).sort((r,u)=>(u.pri??1)-(r.pri??1)||u.t-r.t)[0],l=s.filter(r=>r.lane==="combo").sort((r,u)=>u.t-r.t)[0],c=this._finishing?[]:s.filter(r=>r.chip).sort((r,u)=>u.t-r.t).slice(0,this.chipPool.length);this.popPool.forEach((r,u)=>{u>0&&ce(r,"display","none")});const h=this.popPool[0];if(this._popKey=a?a.text+"@"+a.t.toFixed(3):"",!a||t>=this._resultsAt)ce(h,"display","none");else{ce(h,"display","");const r=t-a.t,u=r/a.dur,f=Ae(r/(a.slam?.1:.16)),d=a.slam?0:Ae(a.dur-r<.12?1-(a.dur-r)/.12:0),g=(a.slam?2.6-1.6*Vi(f):1.7-.7*Vi(f))*(1-.35*d),v=Ae(r/.04)*(1-d),m=f<1?(1-f)*(a.slam?14:6)*Math.sin(r*90):0,p=`rr-pop tone-${a.tone} size-${a.size}${a.wrap?" wrap":""}${a.flip?" flip":""}${a.slam?" slam":""}${a.sub?" has-sub":""}`;h.__cn!==p&&(h.__cn=p,h.className=p);const b=String(a.text).replace(/^x(\d)/i,"×$1").replace(/\bx(\d+)\b/g,"×$1");for(const F of h.querySelectorAll(".rr-pop-c, .rr-pop-main"))We(F,b);We(h.querySelector(".rr-pop-sub"),a.sub||"");const[T,S]=this._popDodge(h,n.carScreen,this._popKey);ce(h,"transform",`translate(-50%, -50%) translate(${m.toFixed(1)}px, ${T.toFixed(1)}px) scale(${g.toFixed(3)})${a.flip?` rotate(${(180*(1-Vi(Ae((r-.08)/.4)))).toFixed(1)}deg)`:""}`),ce(h,"opacity",(v*S).toFixed(3)),ce(h,"--split",((1-f)*10+1.5+2*Math.pow(1-Ae(e%1),4)*(u<.9?1:0)).toFixed(2)+"px"),ce(h,"--bar",(or(Ae(r/.35))*100).toFixed(1)+"%")}if(!l||this._finishing)Ne(this.comboPop,"on",!1);else{const r=t-l.t,u=r/l.dur,f=(String(l.text).match(/\d+/)||["0"])[0];We(this.comboPopN,"×"+f),We(this.comboPopL,"COMBO"),Ne(this.comboPop,"on",!0);const d=Vi(Ae(r/.2)),g=Ae((u-.8)/.2);ce(this.comboPop,"opacity",((1-g)*Ae(r/.04)).toFixed(3)),ce(this.comboPop,"transform",`translateX(${((1-d)*-30).toFixed(1)}px) scale(${(1.25-.25*d).toFixed(3)})`)}this.chipPool.forEach((r,u)=>{const f=c[u];if(!f){ce(r,"display","none");return}ce(r,"display","");const d=t-f.t,g=d/f.dur,v=Vi(Ae(d/.18)),m=Ae((g-.75)/.25),p=`rr-tag tone-${f.tone}`,b=`<b>${String(f.text).replace(/\bx(\d+)/g,"×$1")}</b>${f.sub?`<span>${f.sub}</span>`:""}`;r.__cn!==p&&(r.__cn=p,r.className=p),r.__h!==b&&(r.__h=b,r.innerHTML=b),ce(r,"transform",`translateX(${((1-v)*-40).toFixed(1)}px) translateY(${(u*115-m*40).toFixed(0)}%)`),ce(r,"opacity",((1-m)*Ae(d/.05)).toFixed(3))})}_renderResults(t,e){const n=t>=this._resultsAt;if(this._resultsVisible=n,ce(this.results,"display",n?"":"none"),!n)return;const s=t-this._resultsAt,o=e.results||{},a=Vi(Ae(s/.3));ce(this.results,"opacity",Ae(s/.12).toFixed(3)),ce(this.rr.card,"transform",`translateY(${((1-a)*60).toFixed(1)}px) scale(${(.9+.1*a).toFixed(3)})`);const l=Math.floor(de(o.score)??de(e.score)??0),c=Math.floor(l*or(Ae(s/.32)));We(this.rr.time,sa(de(o.time)??this._lap)),We(this.rr.score,sh(c));const h=(o.launch||this._launchGrade||e.launch||"PERFECT").toString().toUpperCase();We(this.rr.launch,de(o.zero60)!==void 0?`${h} · ${de(o.zero60).toFixed(2)}S`:h),We(this.rr.shifts,`${o.flips??e.flips??"—"}`),We(this.rr.rings,de(o.fleetFlipped)!==void 0?`${o.fleetFlipped} VEHICLES`:`${o.rings??e.rings??"—"}/${o.ringsTotal??e.ringsTotal??15}`),We(this.rr.combo,"×"+(o.maxCombo??e.maxCombo??e.combo??0));const r={PERFECT:1,GOOD:.65,LATE:.3}[h]??.5,u=de(o.flips)!==void 0?de(o.flips)/13:(de(o.perfectShifts)??de(e.shifts)??0)/Math.max(1,de(e.shiftsTotal)??7),f=(de(o.rings)??de(e.rings)??0)/Math.max(1,de(o.ringsTotal)??de(e.ringsTotal)??15),d=(r+Ae(u)+Ae(f))/3,g=d>=.9?"S":d>=.75?"A":d>=.55?"B":"C";We(this.rr.rank,g),Ne(this.rr.rankBox,"rank-s",g==="S");const v=Ae((s-.1)/.18);ce(this.rr.rankBox,"opacity",v.toFixed(3)),ce(this.rr.rankBox,"transform",`scale(${(2.2-1.2*Vi(v)).toFixed(3)}) rotate(${((1-v)*-12).toFixed(1)}deg)`),this.rr.cells.forEach((b,T)=>{const S=Ae((s-.04-T*.02)/.12);ce(b,"opacity",S.toFixed(3)),ce(b,"transform",`translateX(${((1-or(S))*-18).toFixed(1)}px)`)}),ce(this.rr.card,"--sweep",(-30+170*or(Ae((s-.04)/.24))).toFixed(1)+"%");let m=this._record||de(e.best)===void 0&&(this.best===null||l>this.best);ih&&(m=!0);const p=ih?l:Math.max(l,de(e.best)??this.best??0);if(We(this.rr.best,sh(m?c:p)),!ih&&!this.recordSaved&&s>.6&&(this.recordSaved=!0,m)){try{localStorage.setItem("rr.best",String(l))}catch{}try{Sn.sfx("record")}catch{}}Ne(this.rr.record,"on",m&&s>.2),We(this.rr.flag,""),Ne(this.rr.replay,"lit",s>.8?t/ti%1<.6:!0),ce(this.rr.record,"transform",`scale(${(1+.08*Math.pow(1-t/ti%1,3)).toFixed(3)}) rotate(-4deg)`)}preview(){this.mount();const t=$l.get("bg");if(t){const s=je("img","rr-preview-bg");s.src=t,Object.assign(s.style,{position:"fixed",inset:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"0"}),document.body.prepend(s)}else document.body.style.background="radial-gradient(120% 70% at 50% 30%, #2a0f4a 0%, #0a0618 55%, #02010a 100%)";let e=null;const n=$l.get("gp")==="1"?pM(()=>Promise.resolve().then(()=>H2),void 0).then(s=>{e=s.createGameplay({autoplay:!0}),e.muted=!0}).catch(()=>{e=null}):Promise.resolve();window.__hudPreview={ready:n,seek:async s=>{await n,e&&e.seekTo?(e.seekTo(s,1/60),this.update(s,e.state)):this.update(s,{})}},this._previewMode=!0}}const Tr=typeof window<"u"&&window.__rrHud||new zu;if(typeof window<"u"){window.__rrHud=Tr;const i=()=>Tr.mount();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i,{once:!0}):i()}zu.prototype.setState=function(i,t){return this.update(i,t)};zu.prototype.frame=function(i,t){return this.update(i,t)};const gp=new URLSearchParams(location.search),Ou=gp.has("capture"),RM=gp.get("autoplay")==="1",PM=136*Fi,vp=134*Fi,ru=PM+20,LM=3.9,Il=1/60,DM=document.getElementById("app")||document.body,zn=new N_({antialias:!1,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:Ou});zn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));zn.setSize(window.innerWidth,window.innerHeight);zn.toneMapping=Ls;zn.outputColorSpace=xn;zn.shadowMap.enabled=!1;zn.info.autoReset=!1;zn.domElement.id="gl";DM.appendChild(zn.domElement);const Ki=new Ca,Ni=new Zn(50,window.innerWidth/window.innerHeight,.1,6e3);Ni.position.set(0,1.4,7);const zi=Ey({scene:Ki,renderer:zn,camera:Ni});if(!Ki.environment){const i=new Sr(zn),t=new Ca;t.background=new Lt(1182244),Ki.environment=i.fromScene(t,.04).texture,i.dispose()}const xp={};function IM(){const i=(c,h=1.2,r=0)=>{const u=lo(Pi(c*Fi)).pos;return[u.x+r,u.y+h,u.z,c]},t={intro:[0,1.2,0,12],launch:i(36),reveal:i(52),flip:[ze.flip.xLand,8,ze.flip.zLand,70],build:i(92),mega:i(110,8),outro:i(133)},e=new Je,n=(c,h,r,u,f,d,g,v,m)=>{const p=new ue(new an(c,h),new ke({color:new Lt(r).multiplyScalar(u),side:Ge,fog:!1}));return p.position.set(f,d,g),p.rotation.set(v,m,0),e.add(p),p};n(16,60,16777215,1.5,0,16,0,Math.PI/2,0),n(60,1.6,16722600,2.2,-22,2.2,0,0,Math.PI/2),n(60,1.6,2287359,2.2,22,2.2,0,0,-Math.PI/2),n(40,.6,14542591,2,0,.9,26,0,0);const s=new yd(256,{type:Ui,generateMipmaps:!1}),o=new xd(.3,4e3,s),a=new Sr(zn),l=Ni.position.clone();Ki.add(e,o);try{for(const[c,[h,r,u,f]]of Object.entries(t))Ni.position.set(h,r,u),zi.update(f*Fi,1/60),e.position.set(h,r,u),o.position.set(h,r,u),o.update(zn,Ki),xp[c]=a.fromCubemap(s.texture).texture}catch(c){console.warn("[main] probes",c)}Ki.remove(e,o),e.traverse(c=>{c.geometry&&c.geometry.dispose(),c.material&&c.material.dispose()}),s.dispose(),a.dispose(),Ni.position.copy(l),zi.update(0,1/60)}IM();const Zs=Xy({renderer:zn,envMap:zi.envMap||Ki.environment});Ki.add(Zs.object);const Zi=uM({renderer:zn,scene:Ki,camera:Ni}),_n=Qh({camera:Ni,car:Zs,world:zi,fx:Zi,hud:Tr,audio:Sn,autoplay:RM,driveCar:!0});zi.setCamera&&zi.setCamera(Ni);let Li="attract",vn=0,ou=performance.now()/1e3,au=performance.now();const ho=[];function ac(){_n.reset(),Zi.reset&&Zi.reset(),Zs.reset&&Zs.reset(),vn=0}function lu(i,t){_n.update(t,i),vn=i,zi.update(vn,t),Zi.update(t,{..._n.fxInput(),gp:_n})}function Bu(){Zs.setEnvMap&&Zs.setEnvMap(xp[_n.state.section]||null);const i=_n.hudState();Tr.update(vn,i),zn.info.reset(),Zi.render()}function uo(){ac(),Li="run",Sn.unlock();const i=()=>Sn.play(0);Sn.buffer?i():Sn.load().then(i,i)}function Y0(i){i&&i.type==="keydown"&&i.code!=="Space"&&i.code!=="Enter"||(Li==="attract"||Li==="done"&&vn>vp+1.2)&&uo()}Ou||(window.addEventListener("pointerdown",Y0,{capture:!0}),window.addEventListener("keydown",Y0,{capture:!0}),_n.bindInput(window));Tr.onReplay(()=>uo());function _p(i){requestAnimationFrame(_p);const t=Math.min(.1,Math.max(0,(i-au)/1e3));if(au=i,t>0&&(ho.push(t),ho.length>60&&ho.shift()),!(cu||Li==="seek")){if(Li==="attract"){let e=i/1e3-ou;e>LM&&(ou=i/1e3,ac(),e=0);const n=Math.max(1e-4,e-vn);e>vn?lu(e,n):(zi.update(vn,t),Zi.update(t,{..._n.fxInput(),gp:_n}))}else if(Li==="run"||Li==="done"){let e=Sn.playing?Sn.time():vn+t;if(e>=ru&&(e=ru),e>vn){const s=e-vn;s>.25?(_n.seekTo(e,Il),vn=e,zi.update(vn,s),Zi.update(s,{..._n.fxInput(),gp:_n})):lu(e,s)}else zi.update(vn,t);vn>=vp&&Li==="run"&&(Li="done");const n=_n.state;try{Sn.tick(vn,{..._n.hudState(),mph:n.mph,section:n.section,mode:n.mode,rcs:n.rcs,airborne:n.airborne,flap:n.flap,lastThrustT:n.lastFlapT})}catch{}}Bu()}}function UM(){const i=window.innerWidth,t=window.innerHeight;zn.setSize(i,t),Ni.aspect=i/t,Ni.updateProjectionMatrix(),Zi.setSize&&Zi.setSize(i,t)}window.addEventListener("resize",UM);let cu=!1;function yp(i){const t=Math.max(0,Math.min(ru,+i||0));cu=!0,Li="seek";try{Sn.stop(),ac(),_n.seekTo(t,Il),vn=t,zi.update(vn,Il),Zi.update(Il,{..._n.fxInput(),gp:_n}),Bu()}finally{cu=!1}return new Promise(e=>requestAnimationFrame(()=>e(vn)))}const Mp={ready:!1,version:1,get t(){return vn},time:()=>vn,get mode(){return Li},seek:yp,start(){return uo(),!0},restart(){uo()},replay(){uo()},stats(){const i=zn.info.render,t=ho.length?ho.reduce((e,n)=>e+n,0)/ho.length:0;return{fps:t>0?Math.round(10/t)/10:0,drawCalls:i.calls,triangles:i.triangles,t:vn,mode:Li}},hudState:()=>_n.hudState(),get state(){return _n.state},get speed01(){return Math.min(1,(_n.state.v||0)/72)},scene:Ki,camera:Ni,renderer:zn,world:zi,car:Zs.object,carApi:Zs,fx:Zi,gp:_n,gameplay:_n,hud:Tr,audio:Sn};yp.__hudWrapped=!0;window.__game=Mp;ac();lu(.001,.001);try{zn.compile(Ki,Ni)}catch{}Bu();Ou||Sn.load();requestAnimationFrame(i=>{au=i,ou=i/1e3,Mp.ready=!0,requestAnimationFrame(_p)});new URLSearchParams(location.search).has("hudpreview")&&Tr.preview();
