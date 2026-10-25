var _h="160";var Fp=1,Sc=2,qi=3,En=0,Ht=1,jo=2;var Tc=2;var Gn=100;var bh=204,Mh=205;var Hp=0,Hf=1,zf=2,Sn=0,Gf=1,Vf=2,Wf=3,Ec=4,jf=5,$f=6,td="attached",Xf="detached",zp=300,Fs=301,Hs=302,wh=303,Sh=304,$o=306,zr=1e3,Ji=1001,Th=1002,Wt=1003,id=1004;var Dl=1005;var Ti=1006,Yf=1007;var uo=1008;var jn=1009;var Rc=1012,Gp=1013,Mn=1014,Ki=1015,Gr=1016,Vp=1017,Wp=1018,$n=1020;var Ri=1023;var Xn=1026,zs=1027;var jp=1029;var $p=1031,Xp=1033,Ol=33776,Ul=33777,Bl=33778,Fl=33779,nd=35840,sd=35841,rd=35842,ad=35843,Yp=36196,od=37492,ld=37496,hd=37808,cd=37809,ud=37810,dd=37811,pd=37812,fd=37813,md=37814,gd=37815,vd=37816,yd=37817,xd=37818,_d=37819,bd=37820,Md=37821,Hl=36492,wd=36494,Sd=36495;var Td=36284,Ed=36285,Rd=36286;var po=2300,fo=2301,zl=2302,Ad=2400,Cd=2401,Ld=2402;var qp=3e3,Yn=3001;var Oi="",at="srgb",Zi="srgb-linear",Ac="display-p3",Xo="display-p3-linear",mo="linear",rt="srgb",go="rec709",vo="p3";var fs=7680;var Eh=35044;var Pd="300 es",Rh=1035,Gs=2e3,yo=2001,Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,Os=Math.PI/180,Vs=180/Math.PI;function Ai(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Bt[255&s]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[255&e]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[63&t|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[255&i]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Ah(s,e){return(s%e+e)%e}function Dr(s,e,t){return(1-t)*s+t*e}function Ch(s){return(s&s-1)==0&&s!==0}function xo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var Jp={DEG2RAD:Os,RAD2DEG:Vs,generateUUID:Ai,clamp:Rt,euclideanModulo:Ah,mapLinear:function(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:Dr,damp:function(s,e,t,i){return Dr(s,e,1-Math.exp(-t*i))},pingpong:function(s,e=1){return e-Math.abs(Ah(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(kd=s);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*Os},radToDeg:function(s){return s*Vs},isPowerOfTwo:Ch,ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:xo,setQuaternionFromProperEuler:function(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*m,l*p,o*h);break;case"YXY":s.set(l*p,o*c,l*m,o*h);break;case"ZYZ":s.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:et,denormalize:Ui},he=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class s{constructor(e,t,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h)}set(e,t,i,n,r,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],m=i[8],v=n[0],f=n[3],x=n[6],y=n[1],g=n[4],_=n[7],w=n[2],M=n[5],T=n[8];return r[0]=a*v+o*y+l*w,r[3]=a*f+o*g+l*M,r[6]=a*x+o*_+l*T,r[1]=h*v+c*y+u*w,r[4]=h*f+c*g+u*M,r[7]=h*x+c*_+u*T,r[2]=d*v+p*y+m*w,r[5]=d*f+p*g+m*M,r[8]=d*x+p*_+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,p=h*r-a*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(n*h-c*i)*v,e[2]=(o*i-n*a)*v,e[3]=d*v,e[4]=(c*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=p*v,e[7]=(i*l-h*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new Be;function Kp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qf(){let s=_o("canvas");return s.style.display="block",s}var Id={};function Or(s){s in Id||(Id[s]=!0,console.warn(s))}var Nd=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dd=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Zi]:{transfer:mo,primaries:go,toReference:s=>s,fromReference:s=>s},[at]:{transfer:rt,primaries:go,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Xo]:{transfer:mo,primaries:vo,toReference:s=>s.applyMatrix3(Dd),fromReference:s=>s.applyMatrix3(Nd)},[Ac]:{transfer:rt,primaries:vo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Dd),fromReference:s=>s.applyMatrix3(Nd).convertLinearToSRGB()}},Jf=new Set([Zi,Xo]),tt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=Ca[e].toReference;return(0,Ca[t].fromReference)(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ca[s].primaries},getTransfer:function(s){return s===Oi?mo:Ca[s].transfer}};function Us(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Vl(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var ms,bo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=_o("canvas")),ms.width=e.width,ms.height=e.height;let i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*Us(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Us(t[i]/255)):t[i]=Us(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,Mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Wl(n[a].image)):r.push(Wl(n[a]))}else r=Wl(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Wl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zf=0,ti=class s extends Rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,h=s.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ai(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Yn?at:Oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Yn:qp}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yn?at:Oi}};ti.DEFAULT_IMAGE=null,ti.DEFAULT_MAPPING=zp,ti.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],m=l[9],v=l[2],f=l[6],x=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(h+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(h+1)/2,_=(p+1)/2,w=(x+1)/2,M=(c+d)/4,T=(u+v)/4,P=(m+f)/4;return g>_&&g>w?g<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(g),n=M/i,r=T/i):_>w?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=M/n,r=P/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=T/r,n=P/r),this.set(i,n,r,t),this}let y=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(f-m)/y,this.y=(u-v)/y,this.z=(d-c)/y,this.w=Math.acos((h+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lh=class extends Rn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yn?at:Oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends Lh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wo=class extends ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ph=class extends ti{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||l!==d||h!==p||c!==m){let f=1-o,x=l*d+h*p+c*m+u*v,y=x>=0?1:-1,g=1-x*x;if(g>Number.EPSILON){let w=Math.sqrt(g),M=Math.atan2(w,x*y);f=Math.sin(f*M)/w,o=Math.sin(o*M)/w}let _=o*y;if(l=l*f+d*_,h=h*f+p*_,c=c*f+m*_,u=u*f+v*_,f===1-o){let w=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=w,h*=w,c*=w,u*=w}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+c*u+l*p-h*d,e[t+1]=l*m+c*d+h*u-o*p,e[t+2]=h*m+c*p+o*d-l*u,e[t+3]=c*m-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"YZX":this._x=d*c*u+h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u-d*p*m;break;case"XZY":this._x=d*c*u-h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new b,Od=new oi,li=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Pa.subVectors(this.max,Sr),gs.subVectors(e.a,Sr),vs.subVectors(e.b,Sr),ys.subVectors(e.c,Sr),vn.subVectors(vs,gs),yn.subVectors(ys,vs),Un.subVectors(gs,ys);let t=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,vn.z,0,-vn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!!$l(t,gs,vs,ys,Pa)&&(t=[1,0,0,0,1,0,0,0,1],!!$l(t,gs,vs,ys,Pa)&&(ka.crossVectors(vn,yn),t=[ka.x,ka.y,ka.z],$l(t,gs,vs,ys,Pa)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Mi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wi=[new b,new b,new b,new b,new b,new b,new b,new b],Mi=new b,La=new li,gs=new b,vs=new b,ys=new b,vn=new b,yn=new b,Un=new b,Sr=new b,Pa=new b,ka=new b,Bn=new b;function $l(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);let o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),l=e.dot(Bn),h=t.dot(Bn),c=i.dot(Bn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Qf=new li,Tr=new b,Xl=new b,hi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Tr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Xl)),this.expandByPoint(Tr.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new b,Yl=new b,Ia=new b,xn=new b,ql=new b,Na=new b,Jl=new b,qn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Yl.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Yl);let r=.5*e.distanceTo(t),a=-this.direction.dot(Ia),o=xn.dot(this.direction),l=-xn.dot(Ia),h=xn.lengthSq(),c=Math.abs(1-a*a),u,d,p,m;if(c>0)if(u=a*l-o,d=a*o-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let v=1/c;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Yl).addScaledVector(Ia,d),p}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let i=ji.dot(this.direction),n=ji.dot(ji)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,i,n,r){ql.subVectors(t,e),Na.subVectors(i,e),Jl.crossVectors(ql,Na);let a,o=this.direction.dot(Jl);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}xn.subVectors(this.origin,e);let l=a*this.direction.dot(Na.crossVectors(xn,Na));if(l<0)return null;let h=a*this.direction.dot(ql.cross(xn));if(h<0||l+h>o)return null;let c=-a*xn.dot(Jl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class s{constructor(e,t,i,n,r,a,o,l,h,c,u,d,p,m,v,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,v,f)}set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,v,f){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=n,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=h,x[6]=c,x[10]=u,x[14]=d,x[3]=p,x[7]=m,x[11]=v,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*c,p=a*u,m=o*c,v=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+m*h,t[5]=d-v*h,t[9]=-o*l,t[2]=v-d*h,t[6]=m+p*h,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,m=h*c,v=h*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,m=h*c,v=h*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*c,t[9]=v-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,p=a*u,m=o*c,v=o*u;t[0]=l*c,t[4]=m*h-p,t[8]=d*h+v,t[1]=l*u,t[5]=v*h+d,t[9]=p*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*h,m=o*l,v=o*h;t[0]=l*c,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*h,m=o*l,v=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+v,t[5]=a*c,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,i){let n=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),_n.crossVectors(i,Qt),_n.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),_n.crossVectors(i,Qt)),_n.normalize(),Da.crossVectors(Qt,_n),n[0]=_n.x,n[4]=Da.x,n[8]=Qt.x,n[1]=_n.y,n[5]=Da.y,n[9]=Qt.y,n[2]=_n.z,n[6]=Da.z,n[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],m=i[2],v=i[6],f=i[10],x=i[14],y=i[3],g=i[7],_=i[11],w=i[15],M=n[0],T=n[4],P=n[8],L=n[12],I=n[1],H=n[5],A=n[9],U=n[13],O=n[2],J=n[6],re=n[10],q=n[14],W=n[3],ee=n[7],F=n[11],K=n[15];return r[0]=a*M+o*I+l*O+h*W,r[4]=a*T+o*H+l*J+h*ee,r[8]=a*P+o*A+l*re+h*F,r[12]=a*L+o*U+l*q+h*K,r[1]=c*M+u*I+d*O+p*W,r[5]=c*T+u*H+d*J+p*ee,r[9]=c*P+u*A+d*re+p*F,r[13]=c*L+u*U+d*q+p*K,r[2]=m*M+v*I+f*O+x*W,r[6]=m*T+v*H+f*J+x*ee,r[10]=m*P+v*A+f*re+x*F,r[14]=m*L+v*U+f*q+x*K,r[3]=y*M+g*I+_*O+w*W,r[7]=y*T+g*H+_*J+w*ee,r[11]=y*P+g*A+_*re+w*F,r[15]=y*L+g*U+_*q+w*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-n*h*u-r*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+r*a*d-n*a*p+n*h*c-r*l*c)+e[11]*(+t*h*u-t*o*p-r*a*u+i*a*p+r*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],f=e[14],x=e[15],y=u*f*h-v*d*h+v*l*p-o*f*p-u*l*x+o*d*x,g=m*d*h-c*f*h-m*l*p+a*f*p+c*l*x-a*d*x,_=c*v*h-m*u*h+m*o*p-a*v*p-c*o*x+a*u*x,w=m*u*l-c*v*l-m*o*d+a*v*d+c*o*f-a*u*f,M=t*y+i*g+n*_+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=y*T,e[1]=(v*d*r-u*f*r-v*n*p+i*f*p+u*n*x-i*d*x)*T,e[2]=(o*f*r-v*l*r+v*n*h-i*f*h-o*n*x+i*l*x)*T,e[3]=(u*l*r-o*d*r-u*n*h+i*d*h+o*n*p-i*l*p)*T,e[4]=g*T,e[5]=(c*f*r-m*d*r+m*n*p-t*f*p-c*n*x+t*d*x)*T,e[6]=(m*l*r-a*f*r-m*n*h+t*f*h+a*n*x-t*l*x)*T,e[7]=(a*d*r-c*l*r+c*n*h-t*d*h-a*n*p+t*l*p)*T,e[8]=_*T,e[9]=(m*u*r-c*v*r-m*i*p+t*v*p+c*i*x-t*u*x)*T,e[10]=(a*v*r-m*o*r+m*i*h-t*v*h-a*i*x+t*o*x)*T,e[11]=(c*o*r-a*u*r-c*i*h+t*u*h+a*i*p-t*o*p)*T,e[12]=w*T,e[13]=(c*v*n-m*u*n+m*i*d-t*v*d-c*i*f+t*u*f)*T,e[14]=(m*o*n-a*v*n-m*i*l+t*v*l+a*i*f-t*o*f)*T,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,p=r*c,m=r*u,v=a*c,f=a*u,x=o*u,y=l*h,g=l*c,_=l*u,w=i.x,M=i.y,T=i.z;return n[0]=(1-(v+x))*w,n[1]=(p+_)*w,n[2]=(m-g)*w,n[3]=0,n[4]=(p-_)*M,n[5]=(1-(d+x))*M,n[6]=(f+y)*M,n[7]=0,n[8]=(m+g)*T,n[9]=(f-y)*T,n[10]=(1-(d+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=xs.set(n[0],n[1],n[2]).length(),a=xs.set(n[4],n[5],n[6]).length(),o=xs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],wi.copy(this);let l=1/r,h=1/a,c=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=c,wi.elements[9]*=c,wi.elements[10]*=c,t.setFromRotationMatrix(wi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,h=2*r/(t-e),c=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,m;if(o===Gs)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else{if(o!==yo)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),m=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),u=1/(a-r),d=(t+e)*h,p=(i+n)*c,m,v;if(o===Gs)m=(a+r)*u,v=-2*u;else{if(o!==yo)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=r*u,v=-1*u}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xs=new b,wi=new Ae,em=new b(0,0,0),tm=new b(1,1,1),_n=new b,Da=new b,Qt=new b,Ud=new Ae,Bd=new oi,So=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};So.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},im=0,Fd=new b,_s=new oi,$i=new Ae,Oa=new b,Er=new b,nm=new b,sm=new oi,Hd=new b(1,0,0),zd=new b(0,1,0),Gd=new b(0,0,1),rm={type:"added"},am={type:"removed"},St=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new b,t=new So,i=new oi,n=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Be}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oa.copy(e):Oa.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Er,Oa,this.up):$i.lookAt(Oa,Er,this.up),this.quaternion.setFromRotationMatrix($i),n&&($i.extractRotation(n.matrixWorld),_s.setFromRotationMatrix($i),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(am)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];r.matrixWorldAutoUpdate!==!0&&e!==!0||r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};St.DEFAULT_UP=new b(0,1,0),St.DEFAULT_MATRIX_AUTO_UPDATE=!0,St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Si=new b,Xi=new b,Kl=new b,Yi=new b,bs=new b,Ms=new b,Vd=new b,Zl=new b,Ql=new b,eh=new b,Ua=!1,wn=class s{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Si.subVectors(e,t),n.cross(Si);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Si.subVectors(n,t),Xi.subVectors(i,t),Kl.subVectors(e,t);let a=Si.dot(Si),o=Si.dot(Xi),l=Si.dot(Kl),h=Xi.dot(Xi),c=Xi.dot(Kl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,m=(a*c-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Yi)!==null&&Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getUV(e,t,i,n,r,a,o,l){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,t,i,n,r,a,o,l)}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(a,Yi.y),l.addScaledVector(o,Yi.z),l)}static isFrontFacing(e,t,i,n){return Si.subVectors(i,t),Xi.subVectors(e,t),Si.cross(Xi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),.5*Si.cross(Xi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;bs.subVectors(n,i),Ms.subVectors(r,i),Zl.subVectors(e,i);let l=bs.dot(Zl),h=Ms.dot(Zl);if(l<=0&&h<=0)return t.copy(i);Ql.subVectors(e,n);let c=bs.dot(Ql),u=Ms.dot(Ql);if(c>=0&&u<=c)return t.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(bs,a);eh.subVectors(e,r);let p=bs.dot(eh),m=Ms.dot(eh);if(m>=0&&p<=m)return t.copy(r);let v=p*h-l*m;if(v<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(i).addScaledVector(Ms,o);let f=c*m-p*u;if(f<=0&&u-c>=0&&p-m>=0)return Vd.subVectors(r,n),o=(u-c)/(u-c+(p-m)),t.copy(n).addScaledVector(Vd,o);let x=1/(f+v+d);return a=v*x,o=d*x,t.copy(i).addScaledVector(bs,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function th(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Ee=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=tt.workingColorSpace){if(e=Ah(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=th(a,r,e+1/3),this.g=th(a,r,e),this.b=th(a,r,e-1/3)}return tt.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Vl(e.r),this.g=Vl(e.g),this.b=Vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return tt.fromWorkingColorSpace(Ft.copy(this),e),65536*Math.round(Rt(255*Ft.r,0,255))+256*Math.round(Rt(255*Ft.g,0,255))+Math.round(Rt(255*Ft.b,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ft.copy(this),t);let i=Ft.r,n=Ft.g,r=Ft.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=at){tt.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,i=Ft.g,n=Ft.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Ba);let i=Dr(bn.h,Ba.h,t),n=Dr(bn.s,Ba.s,t),r=Dr(bn.l,Ba.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ee;Ee.NAMES=Zp;var om=0,en=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=1,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Mh,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Mh&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dt=class extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ry=lm();function lm(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[l]=h|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var Mt=new b,Fa=new he,gt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}};var Ws=class extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var To=class extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pe=class extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var hm=0,ai=new Ae,ih=new St,ws=new b,ei=new li,Rr=new li,kt=new b,nt=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kp(e)?To:Ws)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(ei.min,Rr.min),ei.expandByPoint(kt),kt.addVectors(ei.max,Rr.max),ei.expandByPoint(kt)):(ei.expandByPoint(Rr.min),ei.expandByPoint(Rr.max))}ei.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)kt.fromBufferAttribute(o,h),l&&(ws.fromBufferAttribute(e,h),kt.add(ws)),n=Math.max(n,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let I=0;I<o;I++)h[I]=new b,c[I]=new b;let u=new b,d=new b,p=new b,m=new he,v=new he,f=new he,x=new b,y=new b;function g(I,H,A){u.fromArray(n,3*I),d.fromArray(n,3*H),p.fromArray(n,3*A),m.fromArray(a,2*I),v.fromArray(a,2*H),f.fromArray(a,2*A),d.sub(u),p.sub(u),v.sub(m),f.sub(m);let U=1/(v.x*f.y-f.x*v.y);isFinite(U)&&(x.copy(d).multiplyScalar(f.y).addScaledVector(p,-v.y).multiplyScalar(U),y.copy(p).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(U),h[I].add(x),h[H].add(x),h[A].add(x),c[I].add(y),c[H].add(y),c[A].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let I=0,H=_.length;I<H;++I){let A=_[I],U=A.start;for(let O=U,J=U+A.count;O<J;O+=3)g(i[O+0],i[O+1],i[O+2])}let w=new b,M=new b,T=new b,P=new b;function L(I){T.fromArray(r,3*I),P.copy(T);let H=h[I];w.copy(H),w.sub(T.multiplyScalar(T.dot(H))).normalize(),M.crossVectors(P,H);let A=M.dot(c[I])<0?-1:1;l[4*I]=w.x,l[4*I+1]=w.y,l[4*I+2]=w.z,l[4*I+3]=A}for(let I=0,H=_.length;I<H;++I){let A=_[I],U=A.start;for(let O=U,J=U+A.count;O<J;O+=3)L(i[O+0]),L(i[O+1]),L(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new b,r=new b,a=new b,o=new b,l=new b,h=new b,c=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,f),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,m=0;for(let v=0,f=l.length;v<f;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*c;for(let x=0;x<c;x++)d[m++]=h[p++]}return new gt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wd=new Ae,Fn=new qn,Ha=new hi,jd=new b,Ss=new b,Ts=new b,Es=new b,nh=new b,za=new b,Ga=new he,Va=new he,Wa=new he,$d=new b,Xd=new b,Yd=new b,ja=new b,$a=new b,pe=class extends St{constructor(e=new nt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){za.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(nh.fromBufferAttribute(u,e),a?za.addScaledVector(nh,c):za.addScaledVector(nh.sub(t),c))}t.add(za)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),Ha.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Ha,jd)===null||Fn.origin.distanceToSquared(jd)>(e.far-e.near)**2))return;Wd.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Wd),i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Fn)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],x=a[f.materialIndex];for(let y=Math.max(f.start,p.start),g=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));y<g;y+=3)n=Xa(this,x,e,i,h,c,u,o.getX(y),o.getX(y+1),o.getX(y+2)),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)n=Xa(this,a,e,i,h,c,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],x=a[f.materialIndex];for(let y=Math.max(f.start,p.start),g=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));y<g;y+=3)n=Xa(this,x,e,i,h,c,u,y,y+1,y+2),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);m<v;m+=3)n=Xa(this,a,e,i,h,c,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function Xa(s,e,t,i,n,r,a,o,l,h){s.getVertexPosition(o,Ss),s.getVertexPosition(l,Ts),s.getVertexPosition(h,Es);let c=function(u,d,p,m,v,f,x,y){let g;if(g=d.side===Ht?m.intersectTriangle(x,f,v,!0,y):m.intersectTriangle(v,f,x,d.side===En,y),g===null)return null;$a.copy(y),$a.applyMatrix4(u.matrixWorld);let _=p.ray.origin.distanceTo($a);return _<p.near||_>p.far?null:{distance:_,point:$a.clone(),object:u}}(s,e,t,i,Ss,Ts,Es,ja);if(c){n&&(Ga.fromBufferAttribute(n,o),Va.fromBufferAttribute(n,l),Wa.fromBufferAttribute(n,h),c.uv=wn.getInterpolation(ja,Ss,Ts,Es,Ga,Va,Wa,new he)),r&&(Ga.fromBufferAttribute(r,o),Va.fromBufferAttribute(r,l),Wa.fromBufferAttribute(r,h),c.uv1=wn.getInterpolation(ja,Ss,Ts,Es,Ga,Va,Wa,new he),c.uv2=c.uv1),a&&($d.fromBufferAttribute(a,o),Xd.fromBufferAttribute(a,l),Yd.fromBufferAttribute(a,h),c.normal=wn.getInterpolation(ja,Ss,Ts,Es,$d,Xd,Yd,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new b,materialIndex:0};wn.getNormal(Ss,Ts,Es,u.normal),c.face=u}return c}var lt=class s extends nt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,p=0;function m(v,f,x,y,g,_,w,M,T,P,L){let I=_/T,H=w/P,A=_/2,U=w/2,O=M/2,J=T+1,re=P+1,q=0,W=0,ee=new b;for(let F=0;F<re;F++){let K=F*H-U;for(let me=0;me<J;me++){let R=me*I-A;ee[v]=R*y,ee[f]=K*g,ee[x]=O,h.push(ee.x,ee.y,ee.z),ee[v]=0,ee[f]=0,ee[x]=M>0?1:-1,c.push(ee.x,ee.y,ee.z),u.push(me/T),u.push(1-F/P),q+=1}}for(let F=0;F<P;F++)for(let K=0;K<T;K++){let me=d+K+J*F,R=d+K+J*(F+1),E=d+(K+1)+J*(F+1),B=d+(K+1)+J*F;l.push(me,R,B),l.push(R,E,B),W+=6}o.addGroup(p,W,L),p+=W,d+=q}m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vt(s){let e={};for(let t=0;t<s.length;t++){let i=js(s[t]);for(let n in i)e[n]=i[n]}return e}function Qp(s){return s.getRenderTarget()===null?s.outputColorSpace:tt.workingColorSpace}var cm={clone:js,merge:Vt},tn=class extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Wr=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Gs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wt=class extends Wr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Vs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Os*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Vs*Math.atan(Math.tan(.5*Os*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Os*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=-90,kh=class extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new wt(Rs,1,e,t);n.layers=this.layers,this.add(n);let r=new wt(Rs,1,e,t);r.layers=this.layers,this.add(r);let a=new wt(Rs,1,e,t);a.layers=this.layers,this.add(a);let o=new wt(Rs,1,e,t);o.layers=this.layers,this.add(o);let l=new wt(Rs,1,e,t);l.layers=this.layers,this.add(l);let h=new wt(Rs,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===Gs)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==yo)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Eo=class extends ti{constructor(e,t,i,n,r,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:Fs,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ih=class extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yn?at:Oi),this.texture=new Eo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new lt(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:0});r.uniforms.tEquirect.value=t;let a=new pe(n,r),o=t.minFilter;return t.minFilter===uo&&(t.minFilter=Ti),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},sh=new b,um=new b,dm=new Be,Ei=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=sh.subVectors(i,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(sh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dm.getNormalMatrix(e),n=this.coplanarPoint(sh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new hi,Ya=new b,$s=class{constructor(e=new Ei,t=new Ei,i=new Ei,n=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],p=n[8],m=n[9],v=n[10],f=n[11],x=n[12],y=n[13],g=n[14],_=n[15];if(i[0].setComponents(l-r,d-h,f-p,_-x).normalize(),i[1].setComponents(l+r,d+h,f+p,_+x).normalize(),i[2].setComponents(l+a,d+c,f+m,_+y).normalize(),i[3].setComponents(l-a,d-c,f-m,_-y).normalize(),i[4].setComponents(l-o,d-u,f-v,_-g).normalize(),t===Gs)i[5].setComponents(l+o,d+u,f+v,_+g).normalize();else{if(t!==yo)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,v,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ya.x=n.normal.x>0?e.max.x:e.min.x,Ya.y=n.normal.y>0?e.max.y:e.min.y,Ya.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function e0(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pm(s,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=i.get(n);r&&(s.deleteBuffer(r.buffer),i.delete(n))},update:function(n,r){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=s.createBuffer(),p;if(s.bindBuffer(l,d),s.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=s.HALF_FLOAT}else p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);p=s.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}(n,r));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,h){let c=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(h,o),u.count===-1&&d.length===0&&s.bufferSubData(h,0,c),d.length!==0){for(let p=0,m=d.length;p<m;p++){let v=d[p];t?s.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count):s.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c.subarray(v.start,v.start+v.count))}l.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,n,r),a.version=n.version}}}}var ci=class s extends nt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],m=[],v=[],f=[];for(let x=0;x<c;x++){let y=x*d-a;for(let g=0;g<h;g++){let _=g*u-r;m.push(_,-y,0),v.push(0,0,1),f.push(g/o),f.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<o;y++){let g=y+h*x,_=y+h*(x+1),w=y+1+h*(x+1),M=y+1+h*x;p.push(g,_,M),p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},ue={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Di={basic:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Vt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Vt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Vt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Vt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Vt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Vt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Vt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Vt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Vt([ue.common,ue.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Vt([ue.lights,ue.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Di.physical={uniforms:Vt([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var qa={r:0,b:0,g:0};function fm(s,e,t,i,n,r,a){let o=new Ee(0),l,h,c=r===!0?0:1,u=null,d=0,p=null;function m(v,f){v.getRGB(qa,Qp(s)),i.buffers.color.setClear(qa.r,qa.g,qa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(v,f=1){o.set(v),c=f,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(o,c)},render:function(v,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?m(o,c):y&&y.isColor&&(m(y,1),x=!0);let g=s.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===$o)?(h===void 0&&(h=new pe(new lt(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:js(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=tt.getTransfer(y.colorSpace)!==rt,u===y&&d===y.version&&p===s.toneMapping||(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new pe(new ci(2,2),new tn({name:"BackgroundMaterial",uniforms:js(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}}}function mm(s,e,t,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),h=l,c=!1;function u(w){return i.isWebGL2?s.bindVertexArray(w):r.bindVertexArrayOES(w)}function d(w){return i.isWebGL2?s.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function p(w){let M=[],T=[],P=[];for(let L=0;L<n;L++)M[L]=0,T[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:T,attributeDivisors:P,object:w,attributes:{},index:null}}function m(){let w=h.newAttributes;for(let M=0,T=w.length;M<T;M++)w[M]=0}function v(w){f(w,0)}function f(w,M){let T=h.newAttributes,P=h.enabledAttributes,L=h.attributeDivisors;T[w]=1,P[w]===0&&(s.enableVertexAttribArray(w),P[w]=1),L[w]!==M&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,M),L[w]=M)}function x(){let w=h.newAttributes,M=h.enabledAttributes;for(let T=0,P=M.length;T<P;T++)M[T]!==w[T]&&(s.disableVertexAttribArray(T),M[T]=0)}function y(w,M,T,P,L,I,H){H===!0?s.vertexAttribIPointer(w,M,T,L,I):s.vertexAttribPointer(w,M,T,P,L,I)}function g(){_(),c=!0,h!==l&&(h=l,u(h.object))}function _(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(w,M,T,P,L){let I=!1;if(a){let H=function(A,U,O){let J=O.wireframe===!0,re=o[A.id];re===void 0&&(re={},o[A.id]=re);let q=re[U.id];q===void 0&&(q={},re[U.id]=q);let W=q[J];return W===void 0&&(W=p(i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),q[J]=W),W}(P,T,M);h!==H&&(h=H,u(h.object)),I=function(A,U,O,J){let re=h.attributes,q=U.attributes,W=0,ee=O.getAttributes();for(let F in ee)if(ee[F].location>=0){let K=re[F],me=q[F];if(me===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),K===void 0||K.attribute!==me||me&&K.data!==me.data)return!0;W++}return h.attributesNum!==W||h.index!==J}(w,P,T,L),I&&function(A,U,O,J){let re={},q=U.attributes,W=0,ee=O.getAttributes();for(let F in ee)if(ee[F].location>=0){let K=q[F];K===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(K=A.instanceColor));let me={};me.attribute=K,K&&K.data&&(me.data=K.data),re[F]=me,W++}h.attributes=re,h.attributesNum=W,h.index=J}(w,P,T,L)}else{let H=M.wireframe===!0;h.geometry===P.id&&h.program===T.id&&h.wireframe===H||(h.geometry=P.id,h.program=T.id,h.wireframe=H,I=!0)}L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,function(H,A,U,O){if(i.isWebGL2===!1&&(H.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let J=O.attributes,re=U.getAttributes(),q=A.defaultAttributeValues;for(let W in re){let ee=re[W];if(ee.location>=0){let F=J[W];if(F===void 0&&(W==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),W==="instanceColor"&&H.instanceColor&&(F=H.instanceColor)),F!==void 0){let K=F.normalized,me=F.itemSize,R=t.get(F);if(R===void 0)continue;let E=R.buffer,B=R.type,Z=R.bytesPerElement,k=i.isWebGL2===!0&&(B===s.INT||B===s.UNSIGNED_INT||F.gpuType===Gp);if(F.isInterleavedBufferAttribute){let Y=F.data,N=Y.stride,D=F.offset;if(Y.isInstancedInterleavedBuffer){for(let z=0;z<ee.locationSize;z++)f(ee.location+z,Y.meshPerAttribute);H.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let z=0;z<ee.locationSize;z++)v(ee.location+z);s.bindBuffer(s.ARRAY_BUFFER,E);for(let z=0;z<ee.locationSize;z++)y(ee.location+z,me/ee.locationSize,B,K,N*Z,(D+me/ee.locationSize*z)*Z,k)}else{if(F.isInstancedBufferAttribute){for(let Y=0;Y<ee.locationSize;Y++)f(ee.location+Y,F.meshPerAttribute);H.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Y=0;Y<ee.locationSize;Y++)v(ee.location+Y);s.bindBuffer(s.ARRAY_BUFFER,E);for(let Y=0;Y<ee.locationSize;Y++)y(ee.location+Y,me/ee.locationSize,B,K,me*Z,me/ee.locationSize*Y*Z,k)}}else if(q!==void 0){let K=q[W];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ee.location,K);break;case 3:s.vertexAttrib3fv(ee.location,K);break;case 4:s.vertexAttrib4fv(ee.location,K);break;default:s.vertexAttrib1fv(ee.location,K)}}}}x()}(w,M,T,P),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:g,resetDefaultState:_,dispose:function(){g();for(let w in o){let M=o[w];for(let T in M){let P=M[T];for(let L in P)d(P[L].object),delete P[L];delete M[T]}delete o[w]}},releaseStatesOfGeometry:function(w){if(o[w.id]===void 0)return;let M=o[w.id];for(let T in M){let P=M[T];for(let L in P)d(P[L].object),delete P[L];delete M[T]}delete o[w.id]},releaseStatesOfProgram:function(w){for(let M in o){let T=o[M];if(T[w.id]===void 0)continue;let P=T[w.id];for(let L in P)d(P[L].object),delete P[L];delete T[w.id]}},initAttributes:m,enableAttribute:v,disableUnusedAttributes:x}}function gm(s,e,t,i){let n=i.isWebGL2,r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=s,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,a,o,l),t.update(o,r,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{h.multiDrawArraysWEBGL(r,a,0,o,0,l);let c=0;for(let u=0;u<l;u++)c+=o[u];t.update(c,r,1)}}}function vm(s,e,t){let i;function n(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,g=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:g,floatVertexTextures:y&&g,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}function ym(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Ei,o=new Be,l={value:null,needsUpdate:!1};function h(c,u,d,p){let m=c!==null?c.length:0,v=null;if(m!==0){if(v=l.value,p!==!0||v===null){let f=d+4*m,x=u.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<f)&&(v=new Float32Array(f));for(let y=0,g=d;y!==m;++y,g+=4)a.copy(c[y]).applyMatrix4(x,o),a.normal.toArray(v,g),v[g+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let d=c.length!==0||u||i!==0||n;return n=u,i=c.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,d){let p=c.clippingPlanes,m=c.clipIntersection,v=c.clipShadows,f=s.get(c);if(!n||p===null||p.length===0||r&&!v)r?h(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let x=r?0:i,y=4*x,g=f.clippingState||null;l.value=g,g=h(p,u,y,d);for(let _=0;_!==y;++_)g[_]=t[_];f.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function xm(s){let e=new WeakMap;function t(n,r){return r===wh?n.mapping=Fs:r===Sh&&(n.mapping=Hs),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===wh||r===Sh){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ih(a.height/2);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Ro=class extends Wr{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qd=[.125,.215,.35,.446,.526,.582],Ar=20,rh=new Ro,Jd=new Ee,ah=null,oh=0,lh=0,zn=(1+Math.sqrt(5))/2,As=1/zn,Kd=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,zn,As),new b(0,zn,-As),new b(As,0,zn),new b(-As,0,zn),new b(zn,As,0),new b(-zn,As,0)],Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,oh,lh),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Gr,format:Ri,colorSpace:Zi,depthBuffer:!1},n=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],h=[],c=a,u=a-4+1+qd.length;for(let d=0;d<u;d++){let p=Math.pow(2,c);l.push(p);let m=1/p;d>a-4?m=qd[d-a+4-1]:d===0&&(m=0),h.push(m);let v=1/(p-2),f=-v,x=1+v,y=[f,f,x,f,x,x,f,f,x,x,f,x],g=6,_=6,w=3,M=2,T=1,P=new Float32Array(w*_*g),L=new Float32Array(M*_*g),I=new Float32Array(T*_*g);for(let A=0;A<g;A++){let U=A%3*2/3-1,O=A>2?0:-1,J=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];P.set(J,w*_*A),L.set(y,M*_*A);let re=[A,A,A,A,A,A];I.set(re,T*_*A)}let H=new nt;H.setAttribute("position",new gt(P,w)),H.setAttribute("uv",new gt(L,M)),H.setAttribute("faceIndex",new gt(I,T)),o.push(H),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(r)),this._blurMaterial=function(a,o,l){let h=new Float32Array(Ar),c=new b(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return n}_compileMaterial(e){let t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,rh)}_sceneToCubeUV(e,t,i,n){let r=new wt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Jd),l.toneMapping=Sn,l.autoClear=!1;let u=new Dt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),d=new pe(new lt,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Jd),p=!0);for(let v=0;v<6;v++){let f=v%3;f===0?(r.up.set(0,a[v],0),r.lookAt(o[v],0,0)):f===1?(r.up.set(0,0,a[v]),r.lookAt(0,o[v],0)):(r.up.set(0,a[v],0),r.lookAt(0,0,o[v]));let x=this._cubeSize;Ja(n,f*x,v>2?x:0,x,x),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Fs||e.mapping===Hs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;Ja(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,rh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Kd[(n-1)%Kd.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new pe(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,v=isFinite(r)?1+Math.floor(3*m):Ar;v>Ar&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],x=0;for(let _=0;_<Ar;++_){let w=_/m,M=Math.exp(-w*w/2);f.push(M),_===0?x+=M:_<v&&(x+=2*M)}for(let _=0;_<f.length;_++)f[_]=f[_]/x;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=p,u.mipInt.value=y-i;let g=this._sizeLods[n];Ja(t,3*g*(n>y-4?n-y+4:0),4*(this._cubeSize-g),3*g,2*g),l.setRenderTarget(t),l.render(c,rh)}};function Zd(s,e,t){let i=new Qi(s,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Qd(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ep(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function _m(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===wh||r===Sh,o=r===Fs||r===Hs;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Xs(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0,u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(l)){t===null&&(t=new Xs(s));let h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function bm(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Mm(s,e,t,i){let n={},r=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let u in h.attributes)e.remove(h.attributes[u]);for(let u in h.morphAttributes){let d=h.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}h.removeEventListener("dispose",a),delete n[h.id];let c=r.get(h);c&&(e.remove(c),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,u=l.attributes.position,d=0;if(c!==null){let v=c.array;d=c.version;for(let f=0,x=v.length;f<x;f+=3){let y=v[f+0],g=v[f+1],_=v[f+2];h.push(y,g,g,_,_,y)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let f=0,x=v.length/3-1;f<x;f+=3){let y=f+0,g=f+1,_=f+2;h.push(y,g,g,_,_,y)}}}let p=new(Kp(h)?To:Ws)(h,1);p.version=d;let m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)e.update(h[u],s.ARRAY_BUFFER);let c=l.morphAttributes;for(let u in c){let d=c[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=r.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return r.get(l)}}}function wm(s,e,t,i){let n=i.isWebGL2,r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){s.drawElements(r,h,a,l*o),t.update(h,r,1)},this.renderInstances=function(l,h,c){if(c===0)return;let u,d;if(n)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,h,a,l*o,c),t.update(h,r,c)},this.renderMultiDraw=function(l,h,c){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<c;d++)this.render(l[d]/o,h[d]);else{u.multiDrawElementsWEBGL(r,h,0,a,l,0,c);let d=0;for(let p=0;p<c;p++)d+=h[p];t.update(d,r,1)}}}function Sm(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Tm(s,e){return s[0]-e[0]}function Em(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Rm(s,e,t){let i={},n=new Float32Array(8),r=new WeakMap,a=new st,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,m=r.get(h);if(m===void 0||m.count!==p){let U=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,g=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],T=0;x===!0&&(T=1),y===!0&&(T=2),g===!0&&(T=3);let P=h.attributes.position.count*T,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let I=new Float32Array(P*L*4*p),H=new wo(I,P,L,p);H.type=Ki,H.needsUpdate=!0;let A=4*T;for(let O=0;O<p;O++){let J=_[O],re=w[O],q=M[O],W=P*L*4*O;for(let ee=0;ee<J.count;ee++){let F=ee*A;x===!0&&(a.fromBufferAttribute(J,ee),I[W+F+0]=a.x,I[W+F+1]=a.y,I[W+F+2]=a.z,I[W+F+3]=0),y===!0&&(a.fromBufferAttribute(re,ee),I[W+F+4]=a.x,I[W+F+5]=a.y,I[W+F+6]=a.z,I[W+F+7]=0),g===!0&&(a.fromBufferAttribute(q,ee),I[W+F+8]=a.x,I[W+F+9]=a.y,I[W+F+10]=a.z,I[W+F+11]=q.itemSize===4?a.w:1)}}m={count:p,texture:H,size:new he(P,L)},r.set(h,m),h.addEventListener("dispose",U)}let v=0;for(let x=0;x<u.length;x++)v+=u[x];let f=h.morphTargetsRelative?1:1-v;c.getUniforms().setValue(s,"morphTargetBaseInfluence",f),c.getUniforms().setValue(s,"morphTargetInfluences",u),c.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=i[h.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];i[h.id]=p}for(let y=0;y<d;y++){let g=p[y];g[0]=y,g[1]=u[y]}p.sort(Em);for(let y=0;y<8;y++)y<d&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Tm);let m=h.morphAttributes.position,v=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let g=o[y],_=g[0],w=g[1];_!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+y)!==m[_]&&h.setAttribute("morphTarget"+y,m[_]),v&&h.getAttribute("morphNormal"+y)!==v[_]&&h.setAttribute("morphNormal"+y,v[_]),n[y]=w,f+=w):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),v&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}let x=h.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",n)}}}}function Am(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var Ao=class extends ti{constructor(e,t,i,n,r,a,o,l,h,c){if((c=c!==void 0?c:Xn)!==Xn&&c!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xn&&(i=Mn),i===void 0&&c===zs&&(i=$n),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},t0=new ti,i0=new Ao(1,1);i0.compareFunction=515;var n0=new wo,s0=new Ph,r0=new Eo,tp=[],ip=[],np=new Float32Array(16),sp=new Float32Array(9),rp=new Float32Array(4);function ir(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=tp[n];if(r===void 0&&(r=new Float32Array(n),tp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function At(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Yo(s,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Cm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Lm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function Pm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function km(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function Im(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;rp.set(i),s.uniformMatrix2fv(this.addr,!1,rp),Ct(t,i)}}function Nm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;sp.set(i),s.uniformMatrix3fv(this.addr,!1,sp),Ct(t,i)}}function Dm(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,i))return;np.set(i),s.uniformMatrix4fv(this.addr,!1,np),Ct(t,i)}}function Om(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Um(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function Bm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function Fm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function Hm(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function Gm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function Vm(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function Wm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?i0:t0;t.setTexture2D(e||r,n)}function jm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||s0,n)}function $m(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||r0,n)}function Xm(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||n0,n)}function Ym(s,e){s.uniform1fv(this.addr,e)}function qm(s,e){let t=ir(e,this.size,2);s.uniform2fv(this.addr,t)}function Jm(s,e){let t=ir(e,this.size,3);s.uniform3fv(this.addr,t)}function Km(s,e){let t=ir(e,this.size,4);s.uniform4fv(this.addr,t)}function Zm(s,e){let t=ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qm(s,e){let t=ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eg(s,e){let t=ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tg(s,e){s.uniform1iv(this.addr,e)}function ig(s,e){s.uniform2iv(this.addr,e)}function ng(s,e){s.uniform3iv(this.addr,e)}function sg(s,e){s.uniform4iv(this.addr,e)}function rg(s,e){s.uniform1uiv(this.addr,e)}function ag(s,e){s.uniform2uiv(this.addr,e)}function og(s,e){s.uniform3uiv(this.addr,e)}function lg(s,e){s.uniform4uiv(this.addr,e)}function hg(s,e,t){let i=this.cache,n=e.length,r=Yo(t,n);At(i,r)||(s.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||t0,r[a])}function cg(s,e,t){let i=this.cache,n=e.length,r=Yo(t,n);At(i,r)||(s.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||s0,r[a])}function ug(s,e,t){let i=this.cache,n=e.length,r=Yo(t,n);At(i,r)||(s.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||r0,r[a])}function dg(s,e,t){let i=this.cache,n=e.length,r=Yo(t,n);At(i,r)||(s.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||n0,r[a])}var Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return km;case 35674:return Im;case 35675:return Nm;case 35676:return Dm;case 5124:case 35670:return Om;case 35667:case 35671:return Um;case 35668:case 35672:return Bm;case 35669:case 35673:return Fm;case 5125:return Hm;case 36294:return zm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Xm}}(t.type)}},Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Ym;case 35664:return qm;case 35665:return Jm;case 35666:return Km;case 35674:return Zm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},hh=/(\w+)(\])?(\[|\.)?/g;function ap(s,e){s.seq.push(e),s.map[e.id]=e}function pg(s,e,t){let i=s.name,n=i.length;for(hh.lastIndex=0;;){let r=hh.exec(i),a=hh.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){ap(t,h===void 0?new Nh(o,s,e):new Dh(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new Oh(o),ap(t,c)),t=c}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);pg(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function op(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var fg=37297,mg=0;function lp(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){let m=p+1;c.push(`${m===l?">":" "} ${m}: ${h[p]}`)}return c.join(`
`)}(s.getShaderSource(e),a)}return n}function gg(s,e){let t=function(i){let n=tt.getPrimaries(tt.workingColorSpace),r=tt.getPrimaries(i),a;switch(n===r?a="":n===vo&&r===go?a="LinearDisplayP3ToLinearSRGB":n===go&&r===vo&&(a="LinearSRGBToLinearDisplayP3"),i){case Zi:case Xo:return[a,"LinearTransferOETF"];case at:case Ac:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vg(s,e){let t;switch(e){case Gf:t="Linear";break;case Vf:t="Reinhard";break;case Wf:t="OptimizedCineon";break;case Ec:t="ACESFilmic";break;case $f:t="AgX";break;case jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cs(s){return s!==""}function hp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(s){return s.replace(yg,_g)}var xg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _g(s,e){let t=Ne[e];if(t===void 0){let i=xg.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Uh(t)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(s){return s.replace(bg,Mg)}function Mg(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function dp(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wg(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(A){let U="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===Fp?U="SHADOWMAP_TYPE_PCF":A.shadowMapType===Sc?U="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===qi&&(U="SHADOWMAP_TYPE_VSM"),U}(t),h=function(A){let U="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case Fs:case Hs:U="ENVMAP_TYPE_CUBE";break;case $o:U="ENVMAP_TYPE_CUBE_UV"}return U}(t),c=function(A){let U="ENVMAP_MODE_REFLECTION";return A.envMap&&A.envMapMode===Hs&&(U="ENVMAP_MODE_REFRACTION"),U}(t),u=function(A){let U="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case Hp:U="ENVMAP_BLENDING_MULTIPLY";break;case Hf:U="ENVMAP_BLENDING_MIX";break;case zf:U="ENVMAP_BLENDING_ADD"}return U}(t),d=function(A){let U=A.envMapCubeUVHeight;if(U===null)return null;let O=Math.log2(U)-2,J=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,O),112)),texelHeight:J,maxMip:O}}(t),p=t.isWebGL2?"":function(A){return[A.extensionDerivatives||A.envMapCubeUVHeight||A.bumpMap||A.normalMapTangentSpace||A.clearcoatNormalMap||A.flatShading||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}(t),m=function(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}(t),v=function(A){let U=[];for(let O in A){let J=A[O];J!==!1&&U.push("#define "+O+" "+J)}return U.join(`
`)}(r),f=n.createProgram(),x,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),x.length>0&&(x+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),y.length>0&&(y+=`
`)):(x=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),y=[p,dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Sn?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Uh(a),a=hp(a,t),a=cp(a,t),o=Uh(o),o=hp(o,t),o=cp(o,t),a=up(a),o=up(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=g+x+a,w=g+y+o,M=op(n,n.VERTEX_SHADER,_),T=op(n,n.FRAGMENT_SHADER,w);function P(A){if(s.debug.checkShaderErrors){let U=n.getProgramInfoLog(f).trim(),O=n.getShaderInfoLog(M).trim(),J=n.getShaderInfoLog(T).trim(),re=!0,q=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,f,M,T);else{let W=lp(n,M,"vertex"),ee=lp(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+W+`
`+ee)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):O!==""&&J!==""||(q=!1);q&&(A.diagnostics={runnable:re,programLog:U,vertexShader:{log:O,prefix:x},fragmentShader:{log:J,prefix:y}})}n.deleteShader(M),n.deleteShader(T),L=new Bs(n,f),I=function(U,O){let J={},re=U.getProgramParameter(O,U.ACTIVE_ATTRIBUTES);for(let q=0;q<re;q++){let W=U.getActiveAttrib(O,q),ee=W.name,F=1;W.type===U.FLOAT_MAT2&&(F=2),W.type===U.FLOAT_MAT3&&(F=3),W.type===U.FLOAT_MAT4&&(F=4),J[ee]={type:W.type,location:U.getAttribLocation(O,ee),locationSize:F}}return J}(n,f)}let L,I;n.attachShader(f,M),n.attachShader(f,T),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),this.getUniforms=function(){return L===void 0&&P(this),L},this.getAttributes=function(){return I===void 0&&P(this),I};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=n.getProgramParameter(f,fg)),H},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mg++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=T,this}var Sg=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fh(e),t.set(e,i)),i}},Fh=class{constructor(e){this.id=Sg++,this.code=e,this.usedTimes=0}};function Tg(s,e,t,i,n,r,a){let o=new Vr,l=new Bh,h=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,x,y,g,_){let w=g.fog,M=_.geometry,T=f.isMeshStandardMaterial?g.environment:null,P=(f.isMeshStandardMaterial?t:e).get(f.envMap||T),L=P&&P.mapping===$o?P.image.height:null,I=m[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let H=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,A=H!==void 0?H.length:0,U,O,J,re,q=0;if(M.morphAttributes.position!==void 0&&(q=1),M.morphAttributes.normal!==void 0&&(q=2),M.morphAttributes.color!==void 0&&(q=3),I){let Ot=Di[I];U=Ot.vertexShader,O=Ot.fragmentShader}else U=f.vertexShader,O=f.fragmentShader,l.update(f),J=l.getVertexShaderID(f),re=l.getFragmentShaderID(f);let W=s.getRenderTarget(),ee=_.isInstancedMesh===!0,F=_.isBatchedMesh===!0,K=!!f.map,me=!!f.matcap,R=!!P,E=!!f.aoMap,B=!!f.lightMap,Z=!!f.bumpMap,k=!!f.normalMap,Y=!!f.displacementMap,N=!!f.emissiveMap,D=!!f.metalnessMap,z=!!f.roughnessMap,ne=f.anisotropy>0,te=f.clearcoat>0,S=f.iridescence>0,ae=f.sheen>0,G=f.transmission>0,V=ne&&!!f.anisotropyMap,oe=te&&!!f.clearcoatMap,ge=te&&!!f.clearcoatNormalMap,xe=te&&!!f.clearcoatRoughnessMap,we=S&&!!f.iridescenceMap,Ie=S&&!!f.iridescenceThicknessMap,Se=ae&&!!f.sheenColorMap,Te=ae&&!!f.sheenRoughnessMap,Oe=!!f.specularMap,Pt=!!f.specularColorMap,Re=!!f.specularIntensityMap,je=G&&!!f.transmissionMap,He=G&&!!f.thicknessMap,wa=!!f.gradientMap,ds=!!f.alphaMap,Sa=f.alphaTest>0,ni=!!f.alphaHash,Zt=!!f.extensions,ps=!!M.attributes.uv1,$=!!M.attributes.uv2,Ta=!!M.attributes.uv3,br=Sn;return f.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(br=s.toneMapping)),{isWebGL2:c,shaderID:I,shaderType:f.type,shaderName:f.name,vertexShader:U,fragmentShader:O,defines:f.defines,customVertexShaderID:J,customFragmentShaderID:re,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:F,instancing:ee,instancingColor:ee&&_.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Zi,map:K,matcap:me,envMap:R,envMapMode:R&&P.mapping,envMapCubeUVHeight:L,aoMap:E,lightMap:B,bumpMap:Z,normalMap:k,displacementMap:d&&Y,emissiveMap:N,normalMapObjectSpace:k&&f.normalMapType===1,normalMapTangentSpace:k&&f.normalMapType===0,metalnessMap:D,roughnessMap:z,anisotropy:ne,anisotropyMap:V,clearcoat:te,clearcoatMap:oe,clearcoatNormalMap:ge,clearcoatRoughnessMap:xe,iridescence:S,iridescenceMap:we,iridescenceThicknessMap:Ie,sheen:ae,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:Oe,specularColorMap:Pt,specularIntensityMap:Re,transmission:G,transmissionMap:je,thicknessMap:He,gradientMap:wa,opaque:f.transparent===!1&&f.blending===1,alphaMap:ds,alphaTest:Sa,alphaHash:ni,combine:f.combine,mapUv:K&&v(f.map.channel),aoMapUv:E&&v(f.aoMap.channel),lightMapUv:B&&v(f.lightMap.channel),bumpMapUv:Z&&v(f.bumpMap.channel),normalMapUv:k&&v(f.normalMap.channel),displacementMapUv:Y&&v(f.displacementMap.channel),emissiveMapUv:N&&v(f.emissiveMap.channel),metalnessMapUv:D&&v(f.metalnessMap.channel),roughnessMapUv:z&&v(f.roughnessMap.channel),anisotropyMapUv:V&&v(f.anisotropyMap.channel),clearcoatMapUv:oe&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(f.sheenRoughnessMap.channel),specularMapUv:Oe&&v(f.specularMap.channel),specularColorMapUv:Pt&&v(f.specularColorMap.channel),specularIntensityMapUv:Re&&v(f.specularIntensityMap.channel),transmissionMapUv:je&&v(f.transmissionMap.channel),thicknessMapUv:He&&v(f.thicknessMap.channel),alphaMapUv:ds&&v(f.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(k||ne),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:ps,vertexUv2s:$,vertexUv3s:Ta,pointsUvs:_.isPoints===!0&&!!M.attributes.uv&&(K||ds),fog:!!w,useFog:f.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:_.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:q,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&y.length>0,shadowMapType:s.shadowMap.type,toneMapping:br,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&f.map.isVideoTexture===!0&&tt.getTransfer(f.map.colorSpace)===rt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Ht,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Zt&&f.extensions.derivatives===!0,extensionFragDepth:Zt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Zt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Zt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Zt&&f.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let y in f.defines)x.push(y),x.push(f.defines[y]);return f.isRawShaderMaterial===!1&&(function(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}(x,f),function(y,g){o.disableAll(),g.isWebGL2&&o.enable(0),g.supportsVertexTextures&&o.enable(1),g.instancing&&o.enable(2),g.instancingColor&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),y.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.skinning&&o.enable(4),g.morphTargets&&o.enable(5),g.morphNormals&&o.enable(6),g.morphColors&&o.enable(7),g.premultipliedAlpha&&o.enable(8),g.shadowMapEnabled&&o.enable(9),g.useLegacyLights&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),y.push(o.mask)}(x,f),x.push(s.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){let x=m[f.type],y;if(x){let g=Di[x];y=cm.clone(g.uniforms)}else y=f.uniforms;return y},acquireProgram:function(f,x){let y;for(let g=0,_=h.length;g<_;g++){let w=h[g];if(w.cacheKey===x){y=w,++y.usedTimes;break}}return y===void 0&&(y=new wg(s,x,f,r),h.push(y)),y},releaseProgram:function(f){if(--f.usedTimes==0){let x=h.indexOf(f);h[x]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function Eg(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function Rg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fp(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,h,c,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Rg),i.length>1&&i.sort(o||pp),n.length>1&&n.sort(o||pp)}}}function Ag(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new fp,s.set(e,[n])):t>=i.length?(n=new fp,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function Cg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ee};break;case"SpotLight":t={position:new b,direction:new b,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new b,halfWidth:new b,halfHeight:new b}}return s[e.id]=t,t}}}var Lg=0;function Pg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kg(s,e){let t=new Cg,i=function(){let l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);let r=new b,a=new Ae,o=new Ae;return{setup:function(l,h){let c=0,u=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let p=0,m=0,v=0,f=0,x=0,y=0,g=0,_=0,w=0,M=0,T=0;l.sort(Pg);let P=h===!0?Math.PI:1;for(let I=0,H=l.length;I<H;I++){let A=l[I],U=A.color,O=A.intensity,J=A.distance,re=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=U.r*O*P,u+=U.g*O*P,d+=U.b*O*P;else if(A.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(A.sh.coefficients[q],O);T++}else if(A.isDirectionalLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*P),A.castShadow){let W=A.shadow,ee=i.get(A);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=A.shadow.matrix,y++}n.directional[p]=q,p++}else if(A.isSpotLight){let q=t.get(A);q.position.setFromMatrixPosition(A.matrixWorld),q.color.copy(U).multiplyScalar(O*P),q.distance=J,q.coneCos=Math.cos(A.angle),q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),q.decay=A.decay,n.spot[v]=q;let W=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,W.updateMatrices(A),A.castShadow&&M++),n.spotLightMatrix[v]=W.matrix,A.castShadow){let ee=i.get(A);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=re,_++}v++}else if(A.isRectAreaLight){let q=t.get(A);q.color.copy(U).multiplyScalar(O),q.halfWidth.set(.5*A.width,0,0),q.halfHeight.set(0,.5*A.height,0),n.rectArea[f]=q,f++}else if(A.isPointLight){let q=t.get(A);if(q.color.copy(A.color).multiplyScalar(A.intensity*P),q.distance=A.distance,q.decay=A.decay,A.castShadow){let W=A.shadow,ee=i.get(A);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[m]=ee,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=A.shadow.matrix,g++}n.point[m]=q,m++}else if(A.isHemisphereLight){let q=t.get(A);q.skyColor.copy(A.color).multiplyScalar(O*P),q.groundColor.copy(A.groundColor).multiplyScalar(O*P),n.hemi[x]=q,x++}}f>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;L.directionalLength===p&&L.pointLength===m&&L.spotLength===v&&L.rectAreaLength===f&&L.hemiLength===x&&L.numDirectionalShadows===y&&L.numPointShadows===g&&L.numSpotShadows===_&&L.numSpotMaps===w&&L.numLightProbes===T||(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=f,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=g,L.numSpotShadows=_,L.numSpotMaps=w,L.numLightProbes=T,n.version=Lg++)},setupView:function(l,h){let c=0,u=0,d=0,p=0,m=0,v=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){let y=l[f];if(y.isDirectionalLight){let g=n.directional[c];g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(v),c++}else if(y.isSpotLight){let g=n.spot[d];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(v),g.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(v),d++}else if(y.isRectAreaLight){let g=n.rectArea[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(v),o.identity(),a.copy(y.matrixWorld),a.premultiply(v),o.extractRotation(a),g.halfWidth.set(.5*y.width,0,0),g.halfHeight.set(0,.5*y.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let g=n.point[u];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(v),u++}else if(y.isHemisphereLight){let g=n.hemi[m];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(v),m++}}},state:n}}function mp(s,e){let t=new kg(s,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(r){t.setup(i,r)},setupLightsView:function(r){t.setupView(i,r)},pushLight:function(r){i.push(r)},pushShadow:function(r){n.push(r)}}}function Ig(s,e){let t=new WeakMap;return{get:function(i,n=0){let r=t.get(i),a;return r===void 0?(a=new mp(s,e),t.set(i,[a])):n>=r.length?(a=new mp(s,e),r.push(a)):a=r[n],a},dispose:function(){t=new WeakMap}}}var Hh=class extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zh=class extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ng(s,e,t){let i=new $s,n=new he,r=new he,a=new st,o=new Hh({depthPacking:3201}),l=new zh,h={},c=t.maxTextureSize,u={[En]:Ht,[Ht]:En,2:2},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new nt;m.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pe(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let x=this.type;function y(M,T){let P=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qi(n.x,n.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(T,null,P,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(T,null,P,p,v,null)}function g(M,T,P,L){let I=null,H=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(H!==void 0)I=H;else if(I=P.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let A=I.uuid,U=T.uuid,O=h[A];O===void 0&&(O={},h[A]=O);let J=O[U];J===void 0&&(J=I.clone(),O[U]=J,T.addEventListener("dispose",w)),I=J}return I.visible=T.visible,I.wireframe=T.wireframe,I.side=L===qi?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(s.properties.get(I).light=P),I}function _(M,T,P,L,I){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===qi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);let A=e.update(M),U=M.material;if(Array.isArray(U)){let O=A.groups;for(let J=0,re=O.length;J<re;J++){let q=O[J],W=U[q.materialIndex];if(W&&W.visible){let ee=g(M,W,L,I);M.onBeforeShadow(s,M,T,P,A,ee,q),s.renderBufferDirect(P,null,A,ee,M,q),M.onAfterShadow(s,M,T,P,A,ee,q)}}}else if(U.visible){let O=g(M,U,L,I);M.onBeforeShadow(s,M,T,P,A,O,null),s.renderBufferDirect(P,null,A,O,M,null),M.onAfterShadow(s,M,T,P,A,O,null)}}let H=M.children;for(let A=0,U=H.length;A<U;A++)_(H[A],T,P,L,I)}function w(M){M.target.removeEventListener("dispose",w);for(let T in h){let P=h[T],L=M.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}this.render=function(M,T,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let L=s.getRenderTarget(),I=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),A=s.state;A.setBlending(0),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let U=x!==qi&&this.type===qi,O=x===qi&&this.type!==qi;for(let J=0,re=M.length;J<re;J++){let q=M[J],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let ee=W.getFrameExtents();if(n.multiply(ee),r.copy(W.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/ee.x),n.x=r.x*ee.x,W.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/ee.y),n.y=r.y*ee.y,W.mapSize.y=r.y)),W.map===null||U===!0||O===!0){let K=this.type!==qi?{minFilter:Wt,magFilter:Wt}:{};W.map!==null&&W.map.dispose(),W.map=new Qi(n.x,n.y,K),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let F=W.getViewportCount();for(let K=0;K<F;K++){let me=W.getViewport(K);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),A.viewport(a),W.updateMatrices(q,K),i=W.getFrustum(),_(T,P,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&y(W,P),W.needsUpdate=!1}x=this.type,f.needsUpdate=!1,s.setRenderTarget(L,I,H)}}function Dg(s,e,t){let i=t.isWebGL2,n=new function(){let S=!1,ae=new st,G=null,V=new st(0,0,0,0);return{setMask:function(oe){G===oe||S||(s.colorMask(oe,oe,oe,oe),G=oe)},setLocked:function(oe){S=oe},setClear:function(oe,ge,xe,we,Ie){Ie===!0&&(oe*=we,ge*=we,xe*=we),ae.set(oe,ge,xe,we),V.equals(ae)===!1&&(s.clearColor(oe,ge,xe,we),V.copy(ae))},reset:function(){S=!1,G=null,V.set(-1,0,0,0)}}},r=new function(){let S=!1,ae=null,G=null,V=null;return{setTest:function(oe){oe?Z(s.DEPTH_TEST):k(s.DEPTH_TEST)},setMask:function(oe){ae===oe||S||(s.depthMask(oe),ae=oe)},setFunc:function(oe){if(G!==oe){switch(oe){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}G=oe}},setLocked:function(oe){S=oe},setClear:function(oe){V!==oe&&(s.clearDepth(oe),V=oe)},reset:function(){S=!1,ae=null,G=null,V=null}}},a=new function(){let S=!1,ae=null,G=null,V=null,oe=null,ge=null,xe=null,we=null,Ie=null;return{setTest:function(Se){S||(Se?Z(s.STENCIL_TEST):k(s.STENCIL_TEST))},setMask:function(Se){ae===Se||S||(s.stencilMask(Se),ae=Se)},setFunc:function(Se,Te,Oe){G===Se&&V===Te&&oe===Oe||(s.stencilFunc(Se,Te,Oe),G=Se,V=Te,oe=Oe)},setOp:function(Se,Te,Oe){ge===Se&&xe===Te&&we===Oe||(s.stencilOp(Se,Te,Oe),ge=Se,xe=Te,we=Oe)},setLocked:function(Se){S=Se},setClear:function(Se){Ie!==Se&&(s.clearStencil(Se),Ie=Se)},reset:function(){S=!1,ae=null,G=null,V=null,oe=null,ge=null,xe=null,we=null,Ie=null}}},o=new WeakMap,l=new WeakMap,h={},c={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,x=null,y=null,g=null,_=null,w=null,M=new Ee(0,0,0),T=0,P=!1,L=null,I=null,H=null,A=null,U=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,re=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=re>=2);let W=null,ee={},F=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),me=new st().fromArray(F),R=new st().fromArray(K);function E(S,ae,G,V){let oe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(S,ge),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<G;xe++)!i||S!==s.TEXTURE_3D&&S!==s.TEXTURE_2D_ARRAY?s.texImage2D(ae+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage3D(ae,0,s.RGBA,1,1,V,0,s.RGBA,s.UNSIGNED_BYTE,oe);return ge}let B={};function Z(S){h[S]!==!0&&(s.enable(S),h[S]=!0)}function k(S){h[S]!==!1&&(s.disable(S),h[S]=!1)}B[s.TEXTURE_2D]=E(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=E(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[s.TEXTURE_2D_ARRAY]=E(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=E(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),r.setFunc(3),z(!1),ne(1),Z(s.CULL_FACE),D(0);let Y={[Gn]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)Y[103]=s.MIN,Y[104]=s.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(Y[103]=S.MIN_EXT,Y[104]=S.MAX_EXT)}let N={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[bh]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[Mh]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function D(S,ae,G,V,oe,ge,xe,we,Ie,Se){if(S!==0){if(m===!1&&(Z(s.BLEND),m=!0),S===5)oe=oe||ae,ge=ge||G,xe=xe||V,ae===f&&oe===g||(s.blendEquationSeparate(Y[ae],Y[oe]),f=ae,g=oe),G===x&&V===y&&ge===_&&xe===w||(s.blendFuncSeparate(N[G],N[V],N[ge],N[xe]),x=G,y=V,_=ge,w=xe),we.equals(M)!==!1&&Ie===T||(s.blendColor(we.r,we.g,we.b,Ie),M.copy(we),T=Ie),v=S,P=!1;else if(S!==v||Se!==P){if(f===Gn&&g===Gn||(s.blendEquation(s.FUNC_ADD),f=Gn,g=Gn),Se)switch(S){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}x=null,y=null,_=null,w=null,M.set(0,0,0),T=0,v=S,P=Se}}else m===!0&&(k(s.BLEND),m=!1)}function z(S){L!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),L=S)}function ne(S){S!==0?(Z(s.CULL_FACE),S!==I&&(S===1?s.cullFace(s.BACK):S===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):k(s.CULL_FACE),I=S}function te(S,ae,G){S?(Z(s.POLYGON_OFFSET_FILL),A===ae&&U===G||(s.polygonOffset(ae,G),A=ae,U=G)):k(s.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:a},enable:Z,disable:k,bindFramebuffer:function(S,ae){return c[S]!==ae&&(s.bindFramebuffer(S,ae),c[S]=ae,i&&(S===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=ae),S===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=ae)),!0)},drawBuffers:function(S,ae){let G=d,V=!1;if(S)if(G=u.get(ae),G===void 0&&(G=[],u.set(ae,G)),S.isWebGLMultipleRenderTargets){let oe=S.texture;if(G.length!==oe.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,xe=oe.length;ge<xe;ge++)G[ge]=s.COLOR_ATTACHMENT0+ge;G.length=oe.length,V=!0}}else G[0]!==s.COLOR_ATTACHMENT0&&(G[0]=s.COLOR_ATTACHMENT0,V=!0);else G[0]!==s.BACK&&(G[0]=s.BACK,V=!0);V&&(t.isWebGL2?s.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))},useProgram:function(S){return p!==S&&(s.useProgram(S),p=S,!0)},setBlending:D,setMaterial:function(S,ae){S.side===2?k(s.CULL_FACE):Z(s.CULL_FACE);let G=S.side===Ht;ae&&(G=!G),z(G),S.blending===1&&S.transparent===!1?D(0):D(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),n.setMask(S.colorWrite);let V=S.stencilWrite;a.setTest(V),V&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),te(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):k(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:z,setCullFace:ne,setLineWidth:function(S){S!==H&&(J&&s.lineWidth(S),H=S)},setPolygonOffset:te,setScissorTest:function(S){S?Z(s.SCISSOR_TEST):k(s.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=s.TEXTURE0+O-1),W!==S&&(s.activeTexture(S),W=S)},bindTexture:function(S,ae,G){G===void 0&&(G=W===null?s.TEXTURE0+O-1:W);let V=ee[G];V===void 0&&(V={type:void 0,texture:void 0},ee[G]=V),V.type===S&&V.texture===ae||(W!==G&&(s.activeTexture(G),W=G),s.bindTexture(S,ae||B[S]),V.type=S,V.texture=ae)},unbindTexture:function(){let S=ee[W];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,ae){let G=l.get(ae);G===void 0&&(G=new WeakMap,l.set(ae,G));let V=G.get(S);V===void 0&&(V=s.getUniformBlockIndex(ae,S.name),G.set(S,V))},uniformBlockBinding:function(S,ae){let G=l.get(ae).get(S);o.get(ae)!==G&&(s.uniformBlockBinding(ae,G,S.__bindingPointIndex),o.set(ae,G))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){me.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),me.copy(S))},viewport:function(S){R.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),R.copy(S))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},W=null,ee={},c={},u=new WeakMap,d=[],p=null,m=!1,v=null,f=null,x=null,y=null,g=null,_=null,w=null,M=new Ee(0,0,0),T=0,P=!1,L=null,I=null,H=null,A=null,U=null,me.set(0,0,s.canvas.width,s.canvas.height),R.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}}}function Og(s,e,t,i,n,r,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):_o("canvas")}function v(R,E,B,Z){let k=1;if((R.width>Z||R.height>Z)&&(k=Z/Math.max(R.width,R.height)),k<1||E===!0){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let Y=E?xo:Math.floor,N=Y(k*R.width),D=Y(k*R.height);u===void 0&&(u=m(N,D));let z=B?m(N,D):u;return z.width=N,z.height=D,z.getContext("2d").drawImage(R,0,0,N,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+N+"x"+D+")."),z}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R}return R}function f(R){return Ch(R.width)&&Ch(R.height)}function x(R,E){return R.generateMipmaps&&E&&R.minFilter!==Wt&&R.minFilter!==Ti}function y(R){s.generateMipmap(R)}function g(R,E,B,Z,k=!1){if(o===!1)return E;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),E===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),E===s.RGBA){let N=k?mo:tt.getTransfer(Z);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=N===rt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return Y!==s.R16F&&Y!==s.R32F&&Y!==s.RG16F&&Y!==s.RG32F&&Y!==s.RGBA16F&&Y!==s.RGBA32F||e.get("EXT_color_buffer_float"),Y}function _(R,E,B){return x(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==Ti?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===Wt||R===id||R===Dl?s.NEAREST:s.LINEAR}function M(R){let E=R.target;E.removeEventListener("dispose",M),function(B){let Z=i.get(B);if(Z.__webglInit===void 0)return;let k=B.source,Y=d.get(k);if(Y){let N=Y[Z.__cacheKey];N.usedTimes--,N.usedTimes===0&&P(B),Object.keys(Y).length===0&&d.delete(k)}i.remove(B)}(E),E.isVideoTexture&&c.delete(E)}function T(R){let E=R.target;E.removeEventListener("dispose",T),function(B){let Z=B.texture,k=i.get(B),Y=i.get(Z);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(k.__webglFramebuffer[N]))for(let D=0;D<k.__webglFramebuffer[N].length;D++)s.deleteFramebuffer(k.__webglFramebuffer[N][D]);else s.deleteFramebuffer(k.__webglFramebuffer[N]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[N])}else{if(Array.isArray(k.__webglFramebuffer))for(let N=0;N<k.__webglFramebuffer.length;N++)s.deleteFramebuffer(k.__webglFramebuffer[N]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let N=0;N<k.__webglColorRenderbuffer.length;N++)k.__webglColorRenderbuffer[N]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[N]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let N=0,D=Z.length;N<D;N++){let z=i.get(Z[N]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(Z[N])}i.remove(Z),i.remove(B)}(E)}function P(R){let E=i.get(R);s.deleteTexture(E.__webglTexture);let B=R.source;delete d.get(B)[E.__cacheKey],a.memory.textures--}let L=0;function I(R,E){let B=i.get(R);if(R.isVideoTexture&&function(Z){let k=a.render.frame;c.get(Z)!==k&&(c.set(Z,k),Z.update())}(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void re(B,R,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}let H={[zr]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[Th]:s.MIRRORED_REPEAT},A={[Wt]:s.NEAREST,[id]:s.NEAREST_MIPMAP_NEAREST,[Dl]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[Yf]:s.LINEAR_MIPMAP_NEAREST,[uo]:s.LINEAR_MIPMAP_LINEAR},U={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function O(R,E,B){if(B?(s.texParameteri(R,s.TEXTURE_WRAP_S,H[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,H[E.wrapT]),R!==s.TEXTURE_3D&&R!==s.TEXTURE_2D_ARRAY||s.texParameteri(R,s.TEXTURE_WRAP_R,H[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A[E.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),R!==s.TEXTURE_3D&&R!==s.TEXTURE_2D_ARRAY||s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),E.wrapS===Ji&&E.wrapT===Ji||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,w(E.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==Ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Z=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Wt||E.minFilter!==Dl&&E.minFilter!==uo||E.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",M));let Z=E.source,k=d.get(Z);k===void 0&&(k={},d.set(Z,k));let Y=function(N){let D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.wrapR||0),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.colorSpace),D.join()}(E);if(Y!==R.__cacheKey){k[Y]===void 0&&(k[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),k[Y].usedTimes++;let N=k[R.__cacheKey];N!==void 0&&(k[R.__cacheKey].usedTimes--,N.usedTimes===0&&P(E)),R.__cacheKey=Y,R.__webglTexture=k[Y].texture}return B}function re(R,E,B){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);let k=J(R,E),Y=E.source;t.bindTexture(Z,R.__webglTexture,s.TEXTURE0+B);let N=i.get(Y);if(Y.version!==N.__version||k===!0){t.activeTexture(s.TEXTURE0+B);let D=tt.getPrimaries(tt.workingColorSpace),z=E.colorSpace===Oi?null:tt.getPrimaries(E.colorSpace),ne=E.colorSpace===Oi||D===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=function(Te){return!o&&(Te.wrapS!==Ji||Te.wrapT!==Ji||Te.minFilter!==Wt&&Te.minFilter!==Ti)}(E)&&f(E.image)===!1,S=v(E.image,te,!1,n.maxTextureSize);S=me(E,S);let ae=f(S)||o,G=r.convert(E.format,E.colorSpace),V,oe=r.convert(E.type),ge=g(E.internalFormat,G,oe,E.colorSpace,E.isVideoTexture);O(Z,E,ae);let xe=E.mipmaps,we=o&&E.isVideoTexture!==!0&&ge!==Yp,Ie=N.__version===void 0||k===!0,Se=_(E,S,ae);if(E.isDepthTexture)ge=s.DEPTH_COMPONENT,o?ge=E.type===Ki?s.DEPTH_COMPONENT32F:E.type===Mn?s.DEPTH_COMPONENT24:E.type===$n?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xn&&ge===s.DEPTH_COMPONENT&&E.type!==Rc&&E.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Mn,oe=r.convert(E.type)),E.format===zs&&ge===s.DEPTH_COMPONENT&&(ge=s.DEPTH_STENCIL,E.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=$n,oe=r.convert(E.type))),Ie&&(we?t.texStorage2D(s.TEXTURE_2D,1,ge,S.width,S.height):t.texImage2D(s.TEXTURE_2D,0,ge,S.width,S.height,0,G,oe,null));else if(E.isDataTexture)if(xe.length>0&&ae){we&&Ie&&t.texStorage2D(s.TEXTURE_2D,Se,ge,xe[0].width,xe[0].height);for(let Te=0,Oe=xe.length;Te<Oe;Te++)V=xe[Te],we?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,V.width,V.height,G,oe,V.data):t.texImage2D(s.TEXTURE_2D,Te,ge,V.width,V.height,0,G,oe,V.data);E.generateMipmaps=!1}else we?(Ie&&t.texStorage2D(s.TEXTURE_2D,Se,ge,S.width,S.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,G,oe,S.data)):t.texImage2D(s.TEXTURE_2D,0,ge,S.width,S.height,0,G,oe,S.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,ge,xe[0].width,xe[0].height,S.depth);for(let Te=0,Oe=xe.length;Te<Oe;Te++)V=xe[Te],E.format!==Ri?G!==null?we?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,V.width,V.height,S.depth,G,V.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,ge,V.width,V.height,S.depth,0,V.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,V.width,V.height,S.depth,G,oe,V.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,ge,V.width,V.height,S.depth,0,G,oe,V.data)}else{we&&Ie&&t.texStorage2D(s.TEXTURE_2D,Se,ge,xe[0].width,xe[0].height);for(let Te=0,Oe=xe.length;Te<Oe;Te++)V=xe[Te],E.format!==Ri?G!==null?we?t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,V.width,V.height,G,V.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,ge,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,V.width,V.height,G,oe,V.data):t.texImage2D(s.TEXTURE_2D,Te,ge,V.width,V.height,0,G,oe,V.data)}else if(E.isDataArrayTexture)we?(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,ge,S.width,S.height,S.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,G,oe,S.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,S.width,S.height,S.depth,0,G,oe,S.data);else if(E.isData3DTexture)we?(Ie&&t.texStorage3D(s.TEXTURE_3D,Se,ge,S.width,S.height,S.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,G,oe,S.data)):t.texImage3D(s.TEXTURE_3D,0,ge,S.width,S.height,S.depth,0,G,oe,S.data);else if(E.isFramebufferTexture){if(Ie)if(we)t.texStorage2D(s.TEXTURE_2D,Se,ge,S.width,S.height);else{let Te=S.width,Oe=S.height;for(let Pt=0;Pt<Se;Pt++)t.texImage2D(s.TEXTURE_2D,Pt,ge,Te,Oe,0,G,oe,null),Te>>=1,Oe>>=1}}else if(xe.length>0&&ae){we&&Ie&&t.texStorage2D(s.TEXTURE_2D,Se,ge,xe[0].width,xe[0].height);for(let Te=0,Oe=xe.length;Te<Oe;Te++)V=xe[Te],we?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,G,oe,V):t.texImage2D(s.TEXTURE_2D,Te,ge,G,oe,V);E.generateMipmaps=!1}else we?(Ie&&t.texStorage2D(s.TEXTURE_2D,Se,ge,S.width,S.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,G,oe,S)):t.texImage2D(s.TEXTURE_2D,0,ge,G,oe,S);x(E,ae)&&y(Z),N.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function q(R,E,B,Z,k,Y){let N=r.convert(B.format,B.colorSpace),D=r.convert(B.type),z=g(B.internalFormat,N,D,B.colorSpace);if(!i.get(E).__hasExternalTextures){let ne=Math.max(1,E.width>>Y),te=Math.max(1,E.height>>Y);k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?t.texImage3D(k,Y,z,ne,te,E.depth,0,N,D,null):t.texImage2D(k,Y,z,ne,te,0,N,D,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),K(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,k,i.get(B).__webglTexture,0,F(E)):(k===s.TEXTURE_2D||k>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,k,i.get(B).__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function W(R,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let Z=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||K(E)){let k=E.depthTexture;k&&k.isDepthTexture&&(k.type===Ki?Z=s.DEPTH_COMPONENT32F:k.type===Mn&&(Z=s.DEPTH_COMPONENT24));let Y=F(E);K(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,Z,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,Z,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){let Z=F(E);B&&K(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let Z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let k=0;k<Z.length;k++){let Y=Z[k],N=r.convert(Y.format,Y.colorSpace),D=r.convert(Y.type),z=g(Y.internalFormat,N,D,Y.colorSpace),ne=F(E);B&&K(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,z,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,z,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(R){let E=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,Z),!k.depthTexture||!k.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(k.depthTexture).__webglTexture&&k.depthTexture.image.width===k.width&&k.depthTexture.image.height===k.height||(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),I(k.depthTexture,0);let Y=i.get(k.depthTexture).__webglTexture,N=F(k);if(k.depthTexture.format===Xn)K(k)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else{if(k.depthTexture.format!==zs)throw new Error("Unknown depthTexture format");K(k)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0)}})(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=s.createRenderbuffer(),W(E.__webglDepthbuffer[Z],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),W(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function F(R){return Math.min(n.maxSamples,R.samples)}function K(R){let E=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(R,E){let B=R.colorSpace,Z=R.format,k=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Rh||B!==Zi&&B!==Oi&&(tt.getTransfer(B)===rt?o===!1?e.has("EXT_sRGB")===!0&&Z===Ri?(R.format=Rh,R.minFilter=Ti,R.generateMipmaps=!1):E=bo.sRGBToLinear(E):Z===Ri&&k===jn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=function(){let R=L;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),L+=1,R},this.resetTextureUnits=function(){L=0},this.setTexture2D=I,this.setTexture2DArray=function(R,E){let B=i.get(R);R.version>0&&B.__version!==R.version?re(B,R,E):t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)},this.setTexture3D=function(R,E){let B=i.get(R);R.version>0&&B.__version!==R.version?re(B,R,E):t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)},this.setTextureCube=function(R,E){let B=i.get(R);R.version>0&&B.__version!==R.version?function(Z,k,Y){if(k.image.length!==6)return;let N=J(Z,k),D=k.source;t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+Y);let z=i.get(D);if(D.version!==z.__version||N===!0){t.activeTexture(s.TEXTURE0+Y);let ne=tt.getPrimaries(tt.workingColorSpace),te=k.colorSpace===Oi?null:tt.getPrimaries(k.colorSpace),S=k.colorSpace===Oi||ne===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,k.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,k.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ae=k.isCompressedTexture||k.image[0].isCompressedTexture,G=k.image[0]&&k.image[0].isDataTexture,V=[];for(let Re=0;Re<6;Re++)V[Re]=ae||G?G?k.image[Re].image:k.image[Re]:v(k.image[Re],!1,!0,n.maxCubemapSize),V[Re]=me(k,V[Re]);let oe=V[0],ge=f(oe)||o,xe=r.convert(k.format,k.colorSpace),we=r.convert(k.type),Ie=g(k.internalFormat,xe,we,k.colorSpace),Se=o&&k.isVideoTexture!==!0,Te=z.__version===void 0||N===!0,Oe,Pt=_(k,oe,ge);if(O(s.TEXTURE_CUBE_MAP,k,ge),ae){Se&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Ie,oe.width,oe.height);for(let Re=0;Re<6;Re++){Oe=V[Re].mipmaps;for(let je=0;je<Oe.length;je++){let He=Oe[je];k.format!==Ri?xe!==null?Se?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je,0,0,He.width,He.height,xe,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je,Ie,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je,0,0,He.width,He.height,xe,we,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je,Ie,He.width,He.height,0,xe,we,He.data)}}}else{Oe=k.mipmaps,Se&&Te&&(Oe.length>0&&Pt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Ie,V[0].width,V[0].height));for(let Re=0;Re<6;Re++)if(G){Se?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,V[Re].width,V[Re].height,xe,we,V[Re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,V[Re].width,V[Re].height,0,xe,we,V[Re].data);for(let je=0;je<Oe.length;je++){let He=Oe[je].image[Re].image;Se?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je+1,0,0,He.width,He.height,xe,we,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je+1,Ie,He.width,He.height,0,xe,we,He.data)}}else{Se?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,xe,we,V[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,xe,we,V[Re]);for(let je=0;je<Oe.length;je++){let He=Oe[je];Se?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je+1,0,0,xe,we,He.image[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,je+1,Ie,xe,we,He.image[Re])}}}x(k,ge)&&y(s.TEXTURE_CUBE_MAP),z.__version=D.version,k.onUpdate&&k.onUpdate(k)}Z.__version=k.version}(B,R,E):t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)},this.rebindTextures=function(R,E,B){let Z=i.get(R);E!==void 0&&q(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ee(R)},this.setupRenderTarget=function(R){let E=R.texture,B=i.get(R),Z=i.get(E);R.addEventListener("dispose",T),R.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,a.memory.textures++);let k=R.isWebGLCubeRenderTarget===!0,Y=R.isWebGLMultipleRenderTargets===!0,N=f(R)||o;if(k){B.__webglFramebuffer=[];for(let D=0;D<6;D++)if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[D]=[];for(let z=0;z<E.mipmaps.length;z++)B.__webglFramebuffer[D][z]=s.createFramebuffer()}else B.__webglFramebuffer[D]=s.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let D=0;D<E.mipmaps.length;D++)B.__webglFramebuffer[D]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Y)if(n.drawBuffers){let D=R.texture;for(let z=0,ne=D.length;z<ne;z++){let te=i.get(D[z]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&K(R)===!1){let D=Y?E:[E];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let z=0;z<D.length;z++){let ne=D[z];B.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[z]);let te=r.convert(ne.format,ne.colorSpace),S=r.convert(ne.type),ae=g(ne.internalFormat,te,S,ne.colorSpace,R.isXRRenderTarget===!0),G=F(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,G,ae,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,B.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),W(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(k){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),O(s.TEXTURE_CUBE_MAP,E,N);for(let D=0;D<6;D++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)q(B.__webglFramebuffer[D][z],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+D,z);else q(B.__webglFramebuffer[D],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);x(E,N)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){let D=R.texture;for(let z=0,ne=D.length;z<ne;z++){let te=D[z],S=i.get(te);t.bindTexture(s.TEXTURE_2D,S.__webglTexture),O(s.TEXTURE_2D,te,N),q(B.__webglFramebuffer,R,te,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,0),x(te,N)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let D=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?D=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,Z.__webglTexture),O(D,E,N),o&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)q(B.__webglFramebuffer[z],R,E,s.COLOR_ATTACHMENT0,D,z);else q(B.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,D,0);x(E,N)&&y(D),t.unbindTexture()}R.depthBuffer&&ee(R)},this.updateRenderTargetMipmap=function(R){let E=f(R)||o,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Z=0,k=B.length;Z<k;Z++){let Y=B[Z];if(x(Y,E)){let N=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,D=i.get(Y).__webglTexture;t.bindTexture(N,D),y(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(o&&R.samples>0&&K(R)===!1){let E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,Z=R.height,k=s.COLOR_BUFFER_BIT,Y=[],N=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,D=i.get(R),z=R.isWebGLMultipleRenderTargets===!0;if(z)for(let ne=0;ne<E.length;ne++)t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){Y.push(s.COLOR_ATTACHMENT0+ne),R.depthBuffer&&Y.push(N);let te=D.__ignoreDepthValues!==void 0&&D.__ignoreDepthValues;if(te===!1&&(R.depthBuffer&&(k|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(k|=s.STENCIL_BUFFER_BIT)),z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,D.__webglColorRenderbuffer[ne]),te===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[N]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])),z){let S=i.get(E[ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,S,0)}s.blitFramebuffer(0,0,B,Z,0,0,B,Z,k,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let ne=0;ne<E.length;ne++){t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);let te=i.get(E[ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,D.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=q,this.useMultisampledRTT=K}function Ug(s,e,t){let i=t.isWebGL2;return{convert:function(n,r=""){let a,o=tt.getTransfer(r);if(n===jn)return s.UNSIGNED_BYTE;if(n===Vp)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wp)return s.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return s.BYTE;if(n===1011)return s.SHORT;if(n===Rc)return s.UNSIGNED_SHORT;if(n===Gp)return s.INT;if(n===Mn)return s.UNSIGNED_INT;if(n===Ki)return s.FLOAT;if(n===Gr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return s.ALPHA;if(n===Ri)return s.RGBA;if(n===1024)return s.LUMINANCE;if(n===1025)return s.LUMINANCE_ALPHA;if(n===Xn)return s.DEPTH_COMPONENT;if(n===zs)return s.DEPTH_STENCIL;if(n===Rh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return s.RED;if(n===jp)return s.RED_INTEGER;if(n===1030)return s.RG;if(n===$p)return s.RG_INTEGER;if(n===Xp)return s.RGBA_INTEGER;if(n===Ol||n===Ul||n===Bl||n===Fl)if(o===rt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===nd||n===sd||n===rd||n===ad){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===nd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Yp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===od||n===ld){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===od)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ld)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===hd||n===cd||n===ud||n===dd||n===pd||n===fd||n===md||n===gd||n===vd||n===yd||n===xd||n===_d||n===bd||n===Md){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===hd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ud)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===md)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_d)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bd)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Md)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Hl||n===wd||n===Sd){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===Hl)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Td||n===Ed||n===Rd){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===Hl)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ed)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===$n?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}}}var Gh=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,i),x=this._getHandJoint(h,v);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=f.radius),x.visible=f!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;h.inputState.pinching&&d>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vh=class extends Rn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,m=null,v=t.getContextAttributes(),f=null,x=null,y=[],g=[],_=new he,w=null,M=new wt;M.layers.enable(1),M.viewport=new st;let T=new wt;T.layers.enable(2),T.viewport=new st;let P=[M,T],L=new Gh;L.layers.enable(1),L.layers.enable(2);let I=null,H=null;function A(F){let K=g.indexOf(F.inputSource);if(K===-1)return;let me=y[K];me!==void 0&&(me.update(F.inputSource,F.frame,h||a),me.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",O);for(let F=0;F<y.length;F++){let K=g[F];K!==null&&(g[F]=null,y[F].disconnect(K))}I=null,H=null,e.setRenderTarget(f),p=null,d=null,u=null,n=null,x=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}function O(F){for(let K=0;K<F.removed.length;K++){let me=F.removed[K],R=g.indexOf(me);R>=0&&(g[R]=null,y[R].disconnect(me))}for(let K=0;K<F.added.length;K++){let me=F.added[K],R=g.indexOf(me);if(R===-1){for(let B=0;B<y.length;B++){if(B>=g.length){g.push(me),R=B;break}if(g[B]===null){g[B]=me,R=B;break}}if(R===-1)break}let E=y[R];E&&E.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=y[F];return K===void 0&&(K=new Ur,y[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=y[F];return K===void 0&&(K=new Ur,y[F]=K),K.getGripSpace()},this.getHand=function(F){let K=y[F];return K===void 0&&(K=new Ur,y[F]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(F){h=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",U),n.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:n.renderState.layers!==void 0||v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,me=null,R=null;v.depth&&(R=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?zs:Xn,me=v.stencil?$n:Mn);let E={colorFormat:t.RGBA8,depthFormat:R,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(E),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qi(d.textureWidth,d.textureHeight,{format:Ri,type:jn,depthTexture:new Ao(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let J=new b,re=new b;function q(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;L.near=T.near=M.near=F.near,L.far=T.far=M.far=F.far,I===L.near&&H===L.far||(n.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,H=L.far);let K=F.parent,me=L.cameras;q(L,K);for(let R=0;R<me.length;R++)q(me[R],K);me.length===2?function(R,E,B){J.setFromMatrixPosition(E.matrixWorld),re.setFromMatrixPosition(B.matrixWorld);let Z=J.distanceTo(re),k=E.projectionMatrix.elements,Y=B.projectionMatrix.elements,N=k[14]/(k[10]-1),D=k[14]/(k[10]+1),z=(k[9]+1)/k[5],ne=(k[9]-1)/k[5],te=(k[8]-1)/k[0],S=(Y[8]+1)/Y[0],ae=N*te,G=N*S,V=Z/(-te+S),oe=V*-te;E.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(oe),R.translateZ(V),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();let ge=N+V,xe=D+V,we=ae-oe,Ie=G+(Z-oe),Se=z*D/xe*ge,Te=ne*D/xe*ge;R.projectionMatrix.makePerspective(we,Ie,Se,Te,ge,xe),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}(L,M,T):L.projectionMatrix.copy(M.projectionMatrix),function(R,E,B){B===null?R.matrix.copy(E.matrixWorld):(R.matrix.copy(B.matrixWorld),R.matrix.invert(),R.matrix.multiply(E.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(E.projectionMatrix),R.projectionMatrixInverse.copy(E.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=2*Vs*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}(F,L,K)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let W=null,ee=new e0;ee.setAnimationLoop(function(F,K){if(c=K.getViewerPose(h||a),m=K,c!==null){let me=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let R=!1;me.length!==L.cameras.length&&(L.cameras.length=0,R=!0);for(let E=0;E<me.length;E++){let B=me[E],Z=null;if(p!==null)Z=p.getViewport(B);else{let Y=u.getViewSubImage(d,B);Z=Y.viewport,E===0&&(e.setRenderTargetTextures(x,Y.colorTexture,d.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(x))}let k=P[E];k===void 0&&(k=new wt,k.layers.enable(E),k.viewport=new st,P[E]=k),k.matrix.fromArray(B.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(B.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Z.x,Z.y,Z.width,Z.height),E===0&&(L.matrix.copy(k.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),R===!0&&L.cameras.push(k)}}for(let me=0;me<y.length;me++){let R=g[me],E=y[me];R!==null&&E!==void 0&&E.update(R,K,h||a)}W&&W(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}),this.setAnimationLoop=function(F){W=F},this.dispose=function(){}}};function Fg(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===Ht&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===Ht&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap){n.lightMap.value=r.lightMap;let o=s._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=r.lightMapIntensity*o,t(r.lightMap,n.lightMapTransform)}r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,Qp(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}(n,r)):r.isMeshStandardMaterial?(i(n,r),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(n,r),r.isMeshPhysicalMaterial&&function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ht&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),function(h,c){let u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far}(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}(n,r),r.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r,a,o):r.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Hg(s,e,t,i){let n={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let v=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let x=m[f];if(typeof v=="number"||typeof v=="boolean"){if(x!==v)return m[f]=v,!0}else if(x.equals(v)===!1)return x.copy(v),!0}return!1}function h(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[d.id]),delete n[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&(function(f){let x=f.uniforms,y=0,g=16;for(let w=0,M=x.length;w<M;w++){let T=Array.isArray(x[w])?x[w]:[x[w]];for(let P=0,L=T.length;P<L;P++){let I=T[P],H=Array.isArray(I.value)?I.value:[I.value];for(let A=0,U=H.length;A<U;A++){let O=h(H[A]),J=y%g;J!==0&&g-J<O.boundary&&(y+=g-J),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=O.storage}}}let _=y%g;_>0&&(y+=g-_),f.__size=y,f.__cache={}}(u),p=function(f){let x=function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=x;let y=s.createBuffer(),g=f.__size,_=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,g,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}(u),n[u.id]=p,u.addEventListener("dispose",c));let m=d.program;i.updateUBOMapping(u,m);let v=e.render.frame;r[u.id]!==v&&(function(f){let x=n[f.id],y=f.uniforms,g=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let _=0,w=y.length;_<w;_++){let M=Array.isArray(y[_])?y[_]:[y[_]];for(let T=0,P=M.length;T<P;T++){let L=M[T];if(l(L,_,T,g)===!0){let I=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],A=0;for(let U=0;U<H.length;U++){let O=H[U],J=h(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,I+A,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,A),A+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(u),r[u.id]=v)},dispose:function(){for(let u in n)s.deleteBuffer(n[u]);a=[],n={},r={}}}}var jr=class{constructor(e={}){let{canvas:t=qf(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),v=null,f=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;let g=this,_=!1,w=0,M=0,T=null,P=-1,L=null,I=new st,H=new st,A=null,U=new Ee(0),O=0,J=t.width,re=t.height,q=1,W=null,ee=null,F=new st(0,0,J,re),K=new st(0,0,J,re),me=!1,R=new $s,E=!1,B=!1,Z=null,k=new Ae,Y=new he,N=new b,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return T===null?q:1}let ne,te,S,ae,G,V,oe,ge,xe,we,Ie,Se,Te,Oe,Pt,Re,je,He,wa,ds,Sa,ni,Zt,ps,$=i;function Ta(C,j){for(let Q=0;Q<C.length;Q++){let le=C[Q],ie=t.getContext(le,j);if(ie!==null)return ie}return null}try{let C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_h}`),t.addEventListener("webglcontextlost",Fu,!1),t.addEventListener("webglcontextrestored",Hu,!1),t.addEventListener("webglcontextcreationerror",zu,!1),$===null){let j=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&j.shift(),$=Ta(j,C),$===null)throw Ta(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function br(){ne=new bm($),te=new vm($,ne,e),ne.init(te),ni=new Ug($,ne,te),S=new Dg($,ne,te),ae=new Sm($),G=new Eg,V=new Og($,ne,S,G,te,ni,ae),oe=new xm(g),ge=new _m(g),xe=new pm($,te),Zt=new mm($,ne,xe,te),we=new Mm($,xe,ae,Zt),Ie=new Am($,we,xe,ae),wa=new Rm($,te,V),Re=new ym(G),Se=new Tg(g,oe,ge,ne,te,Zt,Re),Te=new Fg(g,G),Oe=new Ag,Pt=new Ig(ne,te),He=new fm(g,oe,ge,S,Ie,d,l),je=new Ng(g,Ie,te),ps=new Hg($,ae,te,S),ds=new gm($,ne,ae,te),Sa=new wm($,ne,ae,te),ae.programs=Se.programs,g.capabilities=te,g.extensions=ne,g.properties=G,g.renderLists=Oe,g.shadowMap=je,g.state=S,g.info=ae}br();let Ot=new Vh(g,$);function Fu(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Hu(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let C=ae.autoReset,j=je.enabled,Q=je.autoUpdate,le=je.needsUpdate,ie=je.type;br(),ae.autoReset=C,je.enabled=j,je.autoUpdate=Q,je.needsUpdate=le,je.type=ie}function zu(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gu(C){let j=C.target;j.removeEventListener("dispose",Gu),function(Q){(function(le){let ie=G.get(le).programs;ie!==void 0&&(ie.forEach(function(ve){Se.releaseProgram(ve)}),le.isShaderMaterial&&Se.releaseShaderCache(le))})(Q),G.remove(Q)}(j)}function Vu(C,j,Q){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=Ht,C.needsUpdate=!0,Ra(C,j,Q),C.side=En,C.needsUpdate=!0,Ra(C,j,Q),C.side=2):Ra(C,j,Q)}this.xr=Ot,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(J,re,!1))},this.getSize=function(C){return C.set(J,re)},this.setSize=function(C,j,Q=!0){Ot.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=C,re=j,t.width=Math.floor(C*q),t.height=Math.floor(j*q),Q===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j))},this.getDrawingBufferSize=function(C){return C.set(J*q,re*q).floor()},this.setDrawingBufferSize=function(C,j,Q){J=C,re=j,q=Q,t.width=Math.floor(C*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,j,Q,le){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,j,Q,le),S.viewport(I.copy(F).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,j,Q,le){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,j,Q,le),S.scissor(H.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){S.setScissorTest(me=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){ee=C},this.getClearColor=function(C){return C.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(C=!0,j=!0,Q=!0){let le=0;if(C){let ie=!1;if(T!==null){let ve=T.texture.format;ie=ve===Xp||ve===$p||ve===jp}if(ie){let ve=T.texture.type,Le=ve===jn||ve===Mn||ve===Rc||ve===$n||ve===Vp||ve===Wp,ke=He.getClearColor(),Ue=He.getClearAlpha(),Fe=ke.r,ze=ke.g,Ge=ke.b;Le?(p[0]=Fe,p[1]=ze,p[2]=Ge,p[3]=Ue,$.clearBufferuiv($.COLOR,0,p)):(m[0]=Fe,m[1]=ze,m[2]=Ge,m[3]=Ue,$.clearBufferiv($.COLOR,0,m))}else le|=$.COLOR_BUFFER_BIT}j&&(le|=$.DEPTH_BUFFER_BIT),Q&&(le|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fu,!1),t.removeEventListener("webglcontextrestored",Hu,!1),t.removeEventListener("webglcontextcreationerror",zu,!1),Oe.dispose(),Pt.dispose(),G.dispose(),oe.dispose(),ge.dispose(),Ie.dispose(),Zt.dispose(),ps.dispose(),Se.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Wu),Ot.removeEventListener("sessionend",ju),Z&&(Z.dispose(),Z=null),In.stop()},this.renderBufferDirect=function(C,j,Q,le,ie,ve){j===null&&(j=D);let Le=ie.isMesh&&ie.matrixWorld.determinant()<0,ke=function(Et,si,Jt,Ve,$e){si.isScene!==!0&&(si=D),V.resetTextureUnits();let Mr=si.fog,Pl=Ve.isMeshStandardMaterial?si.environment:null,Pf=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zi,Aa=(Ve.isMeshStandardMaterial?ge:oe).get(Ve.envMap||Pl),kf=Ve.vertexColors===!0&&!!Jt.attributes.color&&Jt.attributes.color.itemSize===4,If=!!Jt.attributes.tangent&&(!!Ve.normalMap||Ve.anisotropy>0),Nf=!!Jt.morphAttributes.position,Df=!!Jt.morphAttributes.normal,Of=!!Jt.morphAttributes.color,Ku=Sn;Ve.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Ku=g.toneMapping));let Zu=Jt.morphAttributes.position||Jt.morphAttributes.normal||Jt.morphAttributes.color,Uf=Zu!==void 0?Zu.length:0,qe=G.get(Ve),Bf=f.state.lights;if(E===!0&&(B===!0||Et!==L)){let ri=Et===L&&Ve.id===P;Re.setState(Ve,Et,ri)}let _i=!1;Ve.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==Bf.state.version||qe.outputColorSpace!==Pf||$e.isBatchedMesh&&qe.batching===!1?_i=!0:$e.isBatchedMesh||qe.batching!==!0?$e.isInstancedMesh&&qe.instancing===!1?_i=!0:$e.isInstancedMesh||qe.instancing!==!0?$e.isSkinnedMesh&&qe.skinning===!1?_i=!0:$e.isSkinnedMesh||qe.skinning!==!0?$e.isInstancedMesh&&qe.instancingColor===!0&&$e.instanceColor===null||$e.isInstancedMesh&&qe.instancingColor===!1&&$e.instanceColor!==null||qe.envMap!==Aa||Ve.fog===!0&&qe.fog!==Mr?_i=!0:qe.numClippingPlanes===void 0||qe.numClippingPlanes===Re.numPlanes&&qe.numIntersection===Re.numIntersection?(qe.vertexAlphas!==kf||qe.vertexTangents!==If||qe.morphTargets!==Nf||qe.morphNormals!==Df||qe.morphColors!==Of||qe.toneMapping!==Ku||te.isWebGL2===!0&&qe.morphTargetsCount!==Uf)&&(_i=!0):_i=!0:_i=!0:_i=!0:_i=!0:(_i=!0,qe.__version=Ve.version);let Dn=qe.currentProgram;_i===!0&&(Dn=Ra(Ve,si,$e));let Qu=!1,wr=!1,kl=!1,Ut=Dn.getUniforms(),On=qe.uniforms;if(S.useProgram(Dn.program)&&(Qu=!0,wr=!0,kl=!0),Ve.id!==P&&(P=Ve.id,wr=!0),Qu||L!==Et){Ut.setValue($,"projectionMatrix",Et.projectionMatrix),Ut.setValue($,"viewMatrix",Et.matrixWorldInverse);let ri=Ut.map.cameraPosition;ri!==void 0&&ri.setValue($,N.setFromMatrixPosition(Et.matrixWorld)),te.logarithmicDepthBuffer&&Ut.setValue($,"logDepthBufFC",2/(Math.log(Et.far+1)/Math.LN2)),(Ve.isMeshPhongMaterial||Ve.isMeshToonMaterial||Ve.isMeshLambertMaterial||Ve.isMeshBasicMaterial||Ve.isMeshStandardMaterial||Ve.isShaderMaterial)&&Ut.setValue($,"isOrthographic",Et.isOrthographicCamera===!0),L!==Et&&(L=Et,wr=!0,kl=!0)}if($e.isSkinnedMesh){Ut.setOptional($,$e,"bindMatrix"),Ut.setOptional($,$e,"bindMatrixInverse");let ri=$e.skeleton;ri&&(te.floatVertexTextures?(ri.boneTexture===null&&ri.computeBoneTexture(),Ut.setValue($,"boneTexture",ri.boneTexture,V)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$e.isBatchedMesh&&(Ut.setOptional($,$e,"batchingTexture"),Ut.setValue($,"batchingTexture",$e._matricesTexture,V));let Il=Jt.morphAttributes;(Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&te.isWebGL2===!0)&&wa.update($e,Jt,Dn),(wr||qe.receiveShadow!==$e.receiveShadow)&&(qe.receiveShadow=$e.receiveShadow,Ut.setValue($,"receiveShadow",$e.receiveShadow)),Ve.isMeshGouraudMaterial&&Ve.envMap!==null&&(On.envMap.value=Aa,On.flipEnvMap.value=Aa.isCubeTexture&&Aa.isRenderTargetTexture===!1?-1:1),wr&&(Ut.setValue($,"toneMappingExposure",g.toneMappingExposure),qe.needsLights&&(bi=kl,(Ni=On).ambientLightColor.needsUpdate=bi,Ni.lightProbe.needsUpdate=bi,Ni.directionalLights.needsUpdate=bi,Ni.directionalLightShadows.needsUpdate=bi,Ni.pointLights.needsUpdate=bi,Ni.pointLightShadows.needsUpdate=bi,Ni.spotLights.needsUpdate=bi,Ni.spotLightShadows.needsUpdate=bi,Ni.rectAreaLights.needsUpdate=bi,Ni.hemisphereLights.needsUpdate=bi),Mr&&Ve.fog===!0&&Te.refreshFogUniforms(On,Mr),Te.refreshMaterialUniforms(On,Ve,q,re,Z),Bs.upload($,qu(qe),On,V));var Ni,bi;if(Ve.isShaderMaterial&&Ve.uniformsNeedUpdate===!0&&(Bs.upload($,qu(qe),On,V),Ve.uniformsNeedUpdate=!1),Ve.isSpriteMaterial&&Ut.setValue($,"center",$e.center),Ut.setValue($,"modelViewMatrix",$e.modelViewMatrix),Ut.setValue($,"normalMatrix",$e.normalMatrix),Ut.setValue($,"modelMatrix",$e.matrixWorld),Ve.isShaderMaterial||Ve.isRawShaderMaterial){let ri=Ve.uniformsGroups;for(let Nl=0,Ff=ri.length;Nl<Ff;Nl++)if(te.isWebGL2){let ed=ri[Nl];ps.update(ed,Dn),ps.bind(ed,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}(C,j,Q,le,ie);S.setMaterial(le,Le);let Ue=Q.index,Fe=1;if(le.wireframe===!0){if(Ue=we.getWireframeAttribute(Q),Ue===void 0)return;Fe=2}let ze=Q.drawRange,Ge=Q.attributes.position,ut=ze.start*Fe,xi=(ze.start+ze.count)*Fe;ve!==null&&(ut=Math.max(ut,ve.start*Fe),xi=Math.min(xi,(ve.start+ve.count)*Fe)),Ue!==null?(ut=Math.max(ut,0),xi=Math.min(xi,Ue.count)):Ge!=null&&(ut=Math.max(ut,0),xi=Math.min(xi,Ge.count));let Vi=xi-ut;if(Vi<0||Vi===1/0)return;let Nn;Zt.setup(ie,le,ke,Q,Ue);let dt=ds;if(Ue!==null&&(Nn=xe.get(Ue),dt=Sa,dt.setIndex(Nn)),ie.isMesh)le.wireframe===!0?(S.setLineWidth(le.wireframeLinewidth*z()),dt.setMode($.LINES)):dt.setMode($.TRIANGLES);else if(ie.isLine){let Et=le.linewidth;Et===void 0&&(Et=1),S.setLineWidth(Et*z()),ie.isLineSegments?dt.setMode($.LINES):ie.isLineLoop?dt.setMode($.LINE_LOOP):dt.setMode($.LINE_STRIP)}else ie.isPoints?dt.setMode($.POINTS):ie.isSprite&&dt.setMode($.TRIANGLES);if(ie.isBatchedMesh)dt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)dt.renderInstances(ut,Vi,ie.count);else if(Q.isInstancedBufferGeometry){let Et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,si=Math.min(Q.instanceCount,Et);dt.renderInstances(ut,Vi,si)}else dt.render(ut,Vi)},this.compile=function(C,j,Q=null){Q===null&&(Q=C),f=Pt.get(Q),f.init(),y.push(f),Q.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),C!==Q&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(j.layers)&&(f.pushLight(ie),ie.castShadow&&f.pushShadow(ie))}),f.setupLights(g._useLegacyLights);let le=new Set;return C.traverse(function(ie){let ve=ie.material;if(ve)if(Array.isArray(ve))for(let Le=0;Le<ve.length;Le++){let ke=ve[Le];Vu(ke,Q,ie),le.add(ke)}else Vu(ve,Q,ie),le.add(ve)}),y.pop(),f=null,le},this.compileAsync=function(C,j,Q=null){let le=this.compile(C,j,Q);return new Promise(ie=>{function ve(){le.forEach(function(Le){G.get(Le).currentProgram.isReady()&&le.delete(Le)}),le.size!==0?setTimeout(ve,10):ie(C)}ne.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ll=null;function Wu(){In.stop()}function ju(){In.start()}let In=new e0;function $u(C,j,Q,le){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||R.intersectsSprite(C)){le&&N.setFromMatrixPosition(C.matrixWorld).applyMatrix4(k);let ve=Ie.update(C),Le=C.material;Le.visible&&v.push(C,ve,Le,Q,N.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||R.intersectsObject(C))){let ve=Ie.update(C),Le=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),N.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),N.copy(ve.boundingSphere.center)),N.applyMatrix4(C.matrixWorld).applyMatrix4(k)),Array.isArray(Le)){let ke=ve.groups;for(let Ue=0,Fe=ke.length;Ue<Fe;Ue++){let ze=ke[Ue],Ge=Le[ze.materialIndex];Ge&&Ge.visible&&v.push(C,ve,Ge,Q,N.z,ze)}}else Le.visible&&v.push(C,ve,Le,Q,N.z,null)}}let ie=C.children;for(let ve=0,Le=ie.length;ve<Le;ve++)$u(ie[ve],j,Q,le)}function Xu(C,j,Q,le){let ie=C.opaque,ve=C.transmissive,Le=C.transparent;f.setupLightsView(Q),E===!0&&Re.setGlobalState(g.clippingPlanes,Q),ve.length>0&&function(ke,Ue,Fe,ze){if((Fe.isScene===!0?Fe.overrideMaterial:null)!==null)return;let ut=te.isWebGL2;Z===null&&(Z=new Qi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Gr:jn,minFilter:uo,samples:ut?4:0})),g.getDrawingBufferSize(Y),ut?Z.setSize(Y.x,Y.y):Z.setSize(xo(Y.x),xo(Y.y));let xi=g.getRenderTarget();g.setRenderTarget(Z),g.getClearColor(U),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();let Vi=g.toneMapping;g.toneMapping=Sn,Ea(ke,Fe,ze),V.updateMultisampleRenderTarget(Z),V.updateRenderTargetMipmap(Z);let Nn=!1;for(let dt=0,Et=Ue.length;dt<Et;dt++){let si=Ue[dt],Jt=si.object,Ve=si.geometry,$e=si.material,Mr=si.group;if($e.side===2&&Jt.layers.test(ze.layers)){let Pl=$e.side;$e.side=Ht,$e.needsUpdate=!0,Yu(Jt,Fe,ze,Ve,$e,Mr),$e.side=Pl,$e.needsUpdate=!0,Nn=!0}}Nn===!0&&(V.updateMultisampleRenderTarget(Z),V.updateRenderTargetMipmap(Z)),g.setRenderTarget(xi),g.setClearColor(U,O),g.toneMapping=Vi}(ie,ve,j,Q),le&&S.viewport(I.copy(le)),ie.length>0&&Ea(ie,j,Q),ve.length>0&&Ea(ve,j,Q),Le.length>0&&Ea(Le,j,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ea(C,j,Q){let le=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,ve=C.length;ie<ve;ie++){let Le=C[ie],ke=Le.object,Ue=Le.geometry,Fe=le===null?Le.material:le,ze=Le.group;ke.layers.test(Q.layers)&&Yu(ke,j,Q,Ue,Fe,ze)}}function Yu(C,j,Q,le,ie,ve){C.onBeforeRender(g,j,Q,le,ie,ve),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(g,j,Q,le,C,ve),ie.transparent===!0&&ie.side===2&&ie.forceSinglePass===!1?(ie.side=Ht,ie.needsUpdate=!0,g.renderBufferDirect(Q,j,le,ie,C,ve),ie.side=En,ie.needsUpdate=!0,g.renderBufferDirect(Q,j,le,ie,C,ve),ie.side=2):g.renderBufferDirect(Q,j,le,ie,C,ve),C.onAfterRender(g,j,Q,le,ie,ve)}function Ra(C,j,Q){j.isScene!==!0&&(j=D);let le=G.get(C),ie=f.state.lights,ve=f.state.shadowsArray,Le=ie.state.version,ke=Se.getParameters(C,ie.state,ve,j,Q),Ue=Se.getProgramCacheKey(ke),Fe=le.programs;le.environment=C.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(C.isMeshStandardMaterial?ge:oe).get(C.envMap||le.environment),Fe===void 0&&(C.addEventListener("dispose",Gu),Fe=new Map,le.programs=Fe);let ze=Fe.get(Ue);if(ze!==void 0){if(le.currentProgram===ze&&le.lightsStateVersion===Le)return Ju(C,ke),ze}else ke.uniforms=Se.getUniforms(C),C.onBuild(Q,ke,g),C.onBeforeCompile(ke,g),ze=Se.acquireProgram(ke,Ue),Fe.set(Ue,ze),le.uniforms=ke.uniforms;let Ge=le.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Ge.clippingPlanes=Re.uniform),Ju(C,ke),le.needsLights=function(ut){return ut.isMeshLambertMaterial||ut.isMeshToonMaterial||ut.isMeshPhongMaterial||ut.isMeshStandardMaterial||ut.isShadowMaterial||ut.isShaderMaterial&&ut.lights===!0}(C),le.lightsStateVersion=Le,le.needsLights&&(Ge.ambientLightColor.value=ie.state.ambient,Ge.lightProbe.value=ie.state.probe,Ge.directionalLights.value=ie.state.directional,Ge.directionalLightShadows.value=ie.state.directionalShadow,Ge.spotLights.value=ie.state.spot,Ge.spotLightShadows.value=ie.state.spotShadow,Ge.rectAreaLights.value=ie.state.rectArea,Ge.ltc_1.value=ie.state.rectAreaLTC1,Ge.ltc_2.value=ie.state.rectAreaLTC2,Ge.pointLights.value=ie.state.point,Ge.pointLightShadows.value=ie.state.pointShadow,Ge.hemisphereLights.value=ie.state.hemi,Ge.directionalShadowMap.value=ie.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ge.spotShadowMap.value=ie.state.spotShadowMap,Ge.spotLightMatrix.value=ie.state.spotLightMatrix,Ge.spotLightMap.value=ie.state.spotLightMap,Ge.pointShadowMap.value=ie.state.pointShadowMap,Ge.pointShadowMatrix.value=ie.state.pointShadowMatrix),le.currentProgram=ze,le.uniformsList=null,ze}function qu(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=Bs.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ju(C,j){let Q=G.get(C);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}In.setAnimationLoop(function(C){Ll&&Ll(C)}),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(C){Ll=C,Ot.setAnimationLoop(C),C===null?In.stop():In.start()},Ot.addEventListener("sessionstart",Wu),Ot.addEventListener("sessionend",ju),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(j),j=Ot.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,j,T),f=Pt.get(C,y.length),f.init(),y.push(f),k.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),R.setFromProjectionMatrix(k),B=this.localClippingEnabled,E=Re.init(this.clippingPlanes,B),v=Oe.get(C,x.length),v.init(),x.push(v),$u(C,j,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(W,ee),this.info.render.frame++,E===!0&&Re.beginShadows();let Q=f.state.shadowsArray;if(je.render(Q,C,j),E===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(v,C),f.setupLights(g._useLegacyLights),j.isArrayCamera){let le=j.cameras;for(let ie=0,ve=le.length;ie<ve;ie++){let Le=le[ie];Xu(v,C,Le,Le.viewport)}}else Xu(v,C,j);T!==null&&(V.updateMultisampleRenderTarget(T),V.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(g,C,j),Zt.resetDefaultState(),P=-1,L=null,y.pop(),f=y.length>0?y[y.length-1]:null,x.pop(),v=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,j,Q){G.get(C.texture).__webglTexture=j,G.get(C.depthTexture).__webglTexture=Q;let le=G.get(C);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=Q===void 0,le.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let Q=G.get(C);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,Q=0){T=C,w=j,M=Q;let le=!0,ie=null,ve=!1,Le=!1;if(C){let ke=G.get(C);ke.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer($.FRAMEBUFFER,null),le=!1):ke.__webglFramebuffer===void 0?V.setupRenderTarget(C):ke.__hasExternalTextures&&V.rebindTextures(C,G.get(C.texture).__webglTexture,G.get(C.depthTexture).__webglTexture);let Ue=C.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);let Fe=G.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=Array.isArray(Fe[j])?Fe[j][Q]:Fe[j],ve=!0):ie=te.isWebGL2&&C.samples>0&&V.useMultisampledRTT(C)===!1?G.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?Fe[Q]:Fe,I.copy(C.viewport),H.copy(C.scissor),A=C.scissorTest}else I.copy(F).multiplyScalar(q).floor(),H.copy(K).multiplyScalar(q).floor(),A=me;if(S.bindFramebuffer($.FRAMEBUFFER,ie)&&te.drawBuffers&&le&&S.drawBuffers(C,ie),S.viewport(I),S.scissor(H),S.setScissorTest(A),ve){let ke=G.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,Q)}else if(Le){let ke=G.get(C.texture),Ue=j||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,ke.__webglTexture,Q||0,Ue)}P=-1},this.readRenderTargetPixels=function(C,j,Q,le,ie,ve,Le){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=G.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){S.bindFramebuffer($.FRAMEBUFFER,ke);try{let Ue=C.texture,Fe=Ue.format,ze=Ue.type;if(Fe!==Ri&&ni.convert(Fe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ge=ze===Gr&&(ne.has("EXT_color_buffer_half_float")||te.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(ze===jn||ni.convert(ze)===$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)||ze===Ki&&(te.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||Ge))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=C.width-le&&Q>=0&&Q<=C.height-ie&&$.readPixels(j,Q,le,ie,ni.convert(Fe),ni.convert(ze),ve)}finally{let Ue=T!==null?G.get(T).__webglFramebuffer:null;S.bindFramebuffer($.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(C,j,Q=0){let le=Math.pow(2,-Q),ie=Math.floor(j.image.width*le),ve=Math.floor(j.image.height*le);V.setTexture2D(j,0),$.copyTexSubImage2D($.TEXTURE_2D,Q,0,0,C.x,C.y,ie,ve),S.unbindTexture()},this.copyTextureToTexture=function(C,j,Q,le=0){let ie=j.image.width,ve=j.image.height,Le=ni.convert(Q.format),ke=ni.convert(Q.type);V.setTexture2D(Q,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Q.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?$.texSubImage2D($.TEXTURE_2D,le,C.x,C.y,ie,ve,Le,ke,j.image.data):j.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,le,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Le,j.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,le,C.x,C.y,Le,ke,j.image),le===0&&Q.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(C,j,Q,le,ie=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ve=C.max.x-C.min.x+1,Le=C.max.y-C.min.y+1,ke=C.max.z-C.min.z+1,Ue=ni.convert(le.format),Fe=ni.convert(le.type),ze;if(le.isData3DTexture)V.setTexture3D(le,0),ze=$.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");V.setTexture2DArray(le,0),ze=$.TEXTURE_2D_ARRAY}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,le.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,le.unpackAlignment);let Ge=$.getParameter($.UNPACK_ROW_LENGTH),ut=$.getParameter($.UNPACK_IMAGE_HEIGHT),xi=$.getParameter($.UNPACK_SKIP_PIXELS),Vi=$.getParameter($.UNPACK_SKIP_ROWS),Nn=$.getParameter($.UNPACK_SKIP_IMAGES),dt=Q.isCompressedTexture?Q.mipmaps[ie]:Q.image;$.pixelStorei($.UNPACK_ROW_LENGTH,dt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,dt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,C.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,C.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?$.texSubImage3D(ze,ie,j.x,j.y,j.z,ve,Le,ke,Ue,Fe,dt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(ze,ie,j.x,j.y,j.z,ve,Le,ke,Ue,dt.data)):$.texSubImage3D(ze,ie,j.x,j.y,j.z,ve,Le,ke,Ue,Fe,dt),$.pixelStorei($.UNPACK_ROW_LENGTH,Ge),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,ut),$.pixelStorei($.UNPACK_SKIP_PIXELS,xi),$.pixelStorei($.UNPACK_SKIP_ROWS,Vi),$.pixelStorei($.UNPACK_SKIP_IMAGES,Nn),ie===0&&le.generateMipmaps&&$.generateMipmap(ze),S.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?V.setTextureCube(C,0):C.isData3DTexture?V.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?V.setTexture2DArray(C,0):V.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){w=0,M=0,T=null,S.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ac?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Yn:qp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yn?at:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Wh=class extends jr{};Wh.prototype.isWebGL1Renderer=!0;var Co=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ys=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},nn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},jh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new b,Lo=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jn=class extends en{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ls,Cr=new b,Ps=new b,ks=new b,Is=new he,Lr=new he,a0=new Ae,Ka=new b,Pr=new b,Za=new b,gp=new he,ch=new he,vp=new he,qs=class extends St{constructor(e=new Jn){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jh(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Lo(i,3,0,!1)),Ls.setAttribute("uv",new Lo(i,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),a0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-ks.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Qa(Ka.set(-.5,-.5,0),ks,a,Ps,n,r),Qa(Pr.set(.5,-.5,0),ks,a,Ps,n,r),Qa(Za.set(.5,.5,0),ks,a,Ps,n,r),gp.set(0,0),ch.set(1,0),vp.set(1,1);let o=e.ray.intersectTriangle(Ka,Pr,Za,!1,Cr);if(o===null&&(Qa(Pr.set(-.5,.5,0),ks,a,Ps,n,r),ch.set(0,1),o=e.ray.intersectTriangle(Ka,Za,Pr,!1,Cr),o===null))return;let l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:wn.getInterpolation(Cr,Ka,Pr,Za,gp,ch,vp,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qa(s,e,t,i,n,r){Is.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Lr.x=r*Is.x-n*Is.y,Lr.y=n*Is.x+r*Is.y):Lr.copy(Is),s.copy(e),s.x+=Lr.x,s.y+=Lr.y,s.applyMatrix4(a0)}var Ay=new b,Cy=new b;var yp=new b,xp=new st,_p=new st,zg=new b,bp=new Ae,eo=new b,uh=new hi,Mp=new Ae,dh=new qn,Js=class extends pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=td,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uh.copy(this.boundingSphere),uh.applyMatrix4(n),e.ray.intersectsSphere(uh)!==!1&&(Mp.copy(n).invert(),dh.copy(e.ray).applyMatrix4(Mp),this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;xp.fromBufferAttribute(n.attributes.skinIndex,e),_p.fromBufferAttribute(n.attributes.skinWeight,e),yp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=_p.getComponent(r);if(a!==0){let o=xp.getComponent(r);bp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(zg.copy(yp).applyMatrix4(bp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},$r=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},$h=class extends ti{constructor(e=null,t=1,i=1,n,r,a,o,l,h=1003,c=1003,u,d){super(null,a,o,l,h,c,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wp=new Ae,Gg=new Ae,Po=class s{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Gg;wp.multiplyMatrices(o,t[r]),wp.toArray(i,16*r)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new $h(t,e,e,Ri,Ki);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $r),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},ko=class extends gt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ns=new Ae,Sp=new Ae,to=[],Tp=new li,Vg=new Ae,kr=new pe,Ir=new hi,Xr=class extends pe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Vg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Tp.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ns),Ir.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ns),Sp.multiplyMatrices(i,Ns),kr.matrixWorld=Sp,kr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){let l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let r=i[this.index];n.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}};var Ly=new Ae,Py=new Ae,ky=new Ae,Iy=new Ae,Ny=new $s,Dy=new li,Oy=new hi,Uy=new b,By=new Xh,Fy=new pe;var Hy=new b,zy=new b,Gy=new Ae,Vy=new qn,Wy=new hi;var jy=new b,$y=new b;var Yr=class extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ep=new Ae,Yh=new qn,io=new hi,no=new b,Io=class extends St{constructor(e=new nt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(n),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Ep.copy(n).invert(),Yh.copy(e.ray).applyMatrix4(Ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++){let p=h.getX(u);no.fromBufferAttribute(c,p),Rp(no,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++)no.fromBufferAttribute(c,u),Rp(no,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Rp(s,e,t,i,n,r,a){let o=Yh.distanceSqToPoint(s);if(o<t){let l=new b;Yh.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var sn=class extends ti{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,h=r-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(r-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new he:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],r=[],a=[],o=new b,l=new Ae;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new b)}r[0]=new b,a[0]=new b;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Rt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qr=class extends ui{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new he,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qh=class extends qr{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var so=new b,ph=new Lc,fh=new Lc,mh=new Lc,Jh=class extends ui{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=n[(h-1)%r]:(so.subVectors(n[0],n[1]).add(n[0]),o=so);let u=n[h%r],d=n[(h+1)%r];if(this.closed||h+2<r?l=n[(h+2)%r]:(so.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=so),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),ph.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,v,f),fh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,v,f),mh.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,v,f)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),fh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),mh.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(ph.calc(c),fh.calc(c),mh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ap(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function Br(s,e,t,i){return function(n,r){let a=1-n;return a*a*r}(s,e)+function(n,r){return 2*(1-n)*n*r}(s,t)+function(n,r){return n*n*r}(s,i)}function Fr(s,e,t,i,n){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,i)+function(r,a){return r*r*r*a}(s,n)}var No=class extends ui{constructor(e=new he,t=new he,i=new he,n=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new he){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fr(e,n.x,r.x,a.x,o.x),Fr(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kh=class extends ui{constructor(e=new b,t=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Fr(e,n.x,r.x,a.x,o.x),Fr(e,n.y,r.y,a.y,o.y),Fr(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends ui{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zh=class extends ui{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends ui{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,n.x,r.x,a.x),Br(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends ui{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,n.x,r.x,a.x),Br(e,n.y,r.y,a.y),Br(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Ap(o,l.x,h.x,c.x,u.x),Ap(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new he().fromArray(n))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:qh,CatmullRomCurve3:Jh,CubicBezierCurve:No,CubicBezierCurve3:Kh,EllipseCurve:qr,LineCurve:Do,LineCurve3:Zh,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Uo,SplineCurve:Bo}),Qh=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Fo[n.type]().fromJSON(n))}return this}},Jr=class extends Qh{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Do(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Oo(this.currentPoint.clone(),new he(e,t),new he(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new No(this.currentPoint.clone(),new he(e,t),new he(i,n),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Bo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let h=new qr(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ho=class s extends nt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Rt(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],h=[],c=1/t,u=new b,d=new he,p=new b,m=new b,v=new b,f=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:f=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,p.x=1*x,p.y=-f,p.z=0*x,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:f=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,p.x=1*x,p.y=-f,p.z=0*x,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let y=0;y<=t;y++){let g=i+y*c*n,_=Math.sin(g),w=Math.cos(g);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*_,u.y=e[M].y,u.z=e[M].x*w,a.push(u.x,u.y,u.z),d.x=y/t,d.y=M/(e.length-1),o.push(d.x,d.y);let T=l[3*M+0]*_,P=l[3*M+1],L=l[3*M+0]*w;h.push(T,P,L)}}for(let y=0;y<t;y++)for(let g=0;g<e.length-1;g++){let _=g+y*e.length,w=_,M=_+e.length,T=_+e.length+1,P=_+1;r.push(w,M,P),r.push(T,P,M)}this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},di=class s extends Ho{constructor(e=1,t=1,i=4,n=8){let r=new Jr;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Kn=class s extends nt{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new b,c=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_t=class s extends nt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],u=[],d=[],p=[],m=0,v=[],f=i/2,x=0;function y(g){let _=m,w=new he,M=new b,T=0,P=g===!0?e:t,L=g===!0?1:-1;for(let H=1;H<=n;H++)u.push(0,f*L,0),d.push(0,L,0),p.push(.5,.5),m++;let I=m;for(let H=0;H<=n;H++){let A=H/n*l+o,U=Math.cos(A),O=Math.sin(A);M.x=P*O,M.y=f*L,M.z=P*U,u.push(M.x,M.y,M.z),d.push(0,L,0),w.x=.5*U+.5,w.y=.5*O*L+.5,p.push(w.x,w.y),m++}for(let H=0;H<n;H++){let A=_+H,U=I+H;g===!0?c.push(U,U+1,A):c.push(U+1,U,A),T+=3}h.addGroup(x,T,g===!0?1:2),x+=T}(function(){let g=new b,_=new b,w=0,M=(t-e)/i;for(let T=0;T<=r;T++){let P=[],L=T/r,I=L*(t-e)+e;for(let H=0;H<=n;H++){let A=H/n,U=A*l+o,O=Math.sin(U),J=Math.cos(U);_.x=I*O,_.y=-L*i+f,_.z=I*J,u.push(_.x,_.y,_.z),g.set(O,M,J).normalize(),d.push(g.x,g.y,g.z),p.push(A,1-L),P.push(m++)}v.push(P)}for(let T=0;T<n;T++)for(let P=0;P<r;P++){let L=v[P][T],I=v[P+1][T],H=v[P+1][T+1],A=v[P][T+1];c.push(L,I,A),c.push(I,H,A),w+=6}h.addGroup(x,w,0),x+=w})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ks=class s extends _t{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zn=class s extends nt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(d,p,m,v){let f=v+1,x=[];for(let y=0;y<=f;y++){x[y]=[];let g=d.clone().lerp(m,y/f),_=p.clone().lerp(m,y/f),w=f-y;for(let M=0;M<=w;M++)x[y][M]=M===0&&y===f?g:g.clone().lerp(_,M/w)}for(let y=0;y<f;y++)for(let g=0;g<2*(f-y)-1;g++){let _=Math.floor(g/2);g%2==0?(l(x[y][_+1]),l(x[y+1][_]),l(x[y][_])):(l(x[y][_+1]),l(x[y+1][_+1]),l(x[y+1][_]))}}function l(d){r.push(d.x,d.y,d.z)}function h(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function c(d,p,m,v){v<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=v/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,m=new b,v=new b;for(let f=0;f<t.length;f+=3)h(t[f+0],p),h(t[f+1],m),h(t[f+2],v),o(p,m,v,d)})(n),function(d){let p=new b;for(let m=0;m<r.length;m+=3)p.x=r[m+0],p.y=r[m+1],p.z=r[m+2],p.normalize().multiplyScalar(d),r[m+0]=p.x,r[m+1]=p.y,r[m+2]=p.z}(i),function(){let d=new b;for(let m=0;m<r.length;m+=3){d.x=r[m+0],d.y=r[m+1],d.z=r[m+2];let v=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-f)}var p;(function(){let m=new b,v=new b,f=new b,x=new b,y=new he,g=new he,_=new he;for(let w=0,M=0;w<r.length;w+=9,M+=6){m.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),f.set(r[w+6],r[w+7],r[w+8]),y.set(a[M+0],a[M+1]),g.set(a[M+2],a[M+3]),_.set(a[M+4],a[M+5]),x.copy(m).add(v).add(f).divideScalar(3);let T=u(x);c(y,M+0,m,T),c(g,M+2,v,T),c(_,M+4,f,T)}})(),function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],f=a[m+2],x=a[m+4],y=Math.max(v,f,x),g=Math.min(v,f,x);y>.9&&g<.1&&(v<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),x<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},ec=class s extends Zn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ro=new b,ao=new b,gh=new b,oo=new wn,tc=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Os*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);let{a:v,b:f,c:x}=oo;if(v.fromBufferAttribute(o,h[0]),f.fromBufferAttribute(o,h[1]),x.fromBufferAttribute(o,h[2]),oo.getNormal(gh),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let g=(y+1)%3,_=u[y],w=u[g],M=oo[c[y]],T=oo[c[g]],P=`${_}_${w}`,L=`${w}_${_}`;L in d&&d[L]?(gh.dot(d[L].normal)<=r&&(p.push(M.x,M.y,M.z),p.push(T.x,T.y,T.z)),d[L]=null):P in d||(d[P]={index0:h[y],index1:h[g],normal:gh.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:f}=d[m];ro.fromBufferAttribute(o,v),ao.fromBufferAttribute(o,f),p.push(ro.x,ro.y,ro.z),p.push(ao.x,ao.y,ao.z)}this.setAttribute("position",new Pe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Zs=class extends Jr{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Jr().fromJSON(n))}return this}},Wg=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=Cp(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,p;if(i&&(r=function(m,v,f,x){let y=[],g,_,w,M,T;for(g=0,_=v.length;g<_;g++)w=v[g]*x,M=g<_-1?v[g+1]*x:m.length,T=Cp(m,w,M,x,!1),T===T.next&&(T.steiner=!0),y.push(Zg(T));for(y.sort(qg),g=0;g<y.length;g++)f=Jg(y[g],f);return f}(s,e,r,t)),s.length>80*t){o=h=s[0],l=c=s[1];for(let m=t;m<n;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Kr(r,a,t,o,l,p,0),a};function Cp(s,e,t,i,n){let r,a;if(n===function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Lp(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Lp(r,s[r],s[r+1],a);return a&&qo(a,a.next)&&(Qr(a),a=a.next),a}function Qn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!qo(i,i.next)&&pt(i.prev,i,i.next)!==0)i=i.next;else{if(Qr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Kr(s,e,t,i,n,r,a){if(!s)return;!a&&r&&function(c,u,d,p){let m=c;do m.z===0&&(m.z=ic(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,function(v){let f,x,y,g,_,w,M,T,P=1;do{for(x=v,v=null,_=null,w=0;x;){for(w++,y=x,M=0,f=0;f<P&&(M++,y=y.nextZ,y);f++);for(T=P;M>0||T>0&&y;)M!==0&&(T===0||!y||x.z<=y.z)?(g=x,x=x.nextZ,M--):(g=y,y=y.nextZ,T--),_?_.nextZ=g:v=g,g.prevZ=_,_=g;x=y}_.nextZ=null,P*=2}while(w>1)}(m)}(s,i,n,r);let o,l,h=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?$g(s,i,n,r):jg(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Qr(s),s=l.next,h=l.next;else if((s=l)===h){a?a===1?Kr(s=Xg(Qn(s),e,t),e,t,i,n,r,2):a===2&&Yg(s,e,t,i,n,r):Kr(Qn(s),e,t,i,n,r,1);break}}function jg(s){let e=s.prev,t=s,i=s.next;if(pt(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>h?o:h:l>h?l:h,m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=p&&Ds(n,o,r,l,a,h,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $g(s,e,t,i){let n=s.prev,r=s,a=s.next;if(pt(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,u=r.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,v=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,x=ic(p,m,e,t,i),y=ic(v,f,e,t,i),g=s.prevZ,_=s.nextZ;for(;g&&g.z>=x&&_&&_.z<=y;){if(g.x>=p&&g.x<=v&&g.y>=m&&g.y<=f&&g!==n&&g!==a&&Ds(o,c,l,u,h,d,g.x,g.y)&&pt(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==n&&_!==a&&Ds(o,c,l,u,h,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=x;){if(g.x>=p&&g.x<=v&&g.y>=m&&g.y<=f&&g!==n&&g!==a&&Ds(o,c,l,u,h,d,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=f&&_!==n&&_!==a&&Ds(o,c,l,u,h,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xg(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!qo(n,r)&&o0(n,i,i.next,r)&&Zr(n,r)&&Zr(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Qr(i),Qr(i.next),i=s=r),i=i.next}while(i!==s);return Qn(i)}function Yg(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qg(a,o)){let l=l0(a,o);return a=Qn(a,a.next),l=Qn(l,l.next),Kr(a,e,t,i,n,r,0),void Kr(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function qg(s,e){return s.x-e.x}function Jg(s,e){let t=function(n,r){let a,o=r,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=h&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===h))return a}o=o.next}while(o!==r);if(!a)return null;let u=a,d=a.x,p=a.y,m,v=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&Ds(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(m=Math.abs(c-o.y)/(h-o.x),Zr(o,n)&&(m<v||m===v&&(o.x>a.x||o.x===a.x&&Kg(a,o)))&&(a=o,v=m)),o=o.next;while(o!==u);return a}(s,e);if(!t)return e;let i=l0(t,s);return Qn(i,i.next),Qn(t,t.next)}function Kg(s,e){return pt(s.prev,s,e.prev)<0&&pt(e.next,s,s.next)<0}function ic(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ds(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Qg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&o0(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(s,e)&&(Zr(s,e)&&Zr(e,s)&&function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(s,e)&&(pt(s.prev,s,e.prev)||pt(s,e.prev,e))||qo(s,e)&&pt(s.prev,s,s.next)>0&&pt(e.prev,e,e.next)>0)}function pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function qo(s,e){return s.x===e.x&&s.y===e.y}function o0(s,e,t,i){let n=ho(pt(s,e,t)),r=ho(pt(s,e,i)),a=ho(pt(t,i,s)),o=ho(pt(t,i,e));return n!==r&&a!==o||!(n!==0||!lo(s,t,e))||!(r!==0||!lo(s,i,e))||!(a!==0||!lo(t,s,i))||!(o!==0||!lo(t,e,i))}function lo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ho(s){return s>0?1:s<0?-1:0}function Zr(s,e){return pt(s.prev,s,s.next)<0?pt(s,e,s.next)>=0&&pt(s,s.prev,e)>=0:pt(s,e,s.prev)<0||pt(s,s.next,e)<0}function l0(s,e){let t=new nc(s.i,s.x,s.y),i=new nc(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lp(s,e,t,i){let n=new nc(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function nc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Tn=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Pp(e),kp(i,e);let a=e.length;t.forEach(Pp);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,kp(i,t[l]);let o=Wg(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Pp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function kp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ea=class s extends nt{constructor(e=new Zs([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:e1,g,_,w,M,T,P=!1;x&&(g=x.getSpacedPoints(c),P=!0,d=!1,_=x.computeFrenetFrames(c,!1),w=new b,M=new b,T=new b),d||(f=0,p=0,m=0,v=0);let L=o.extractPoints(h),I=L.shape,H=L.holes;if(!Tn.isClockWise(I)){I=I.reverse();for(let N=0,D=H.length;N<D;N++){let z=H[N];Tn.isClockWise(z)&&(H[N]=z.reverse())}}let A=Tn.triangulateShape(I,H),U=I;for(let N=0,D=H.length;N<D;N++){let z=H[N];I=I.concat(z)}function O(N,D,z){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(D,z)}let J=I.length,re=A.length;function q(N,D,z){let ne,te,S,ae=N.x-D.x,G=N.y-D.y,V=z.x-N.x,oe=z.y-N.y,ge=ae*ae+G*G,xe=ae*oe-G*V;if(Math.abs(xe)>Number.EPSILON){let we=Math.sqrt(ge),Ie=Math.sqrt(V*V+oe*oe),Se=D.x-G/we,Te=D.y+ae/we,Oe=((z.x-oe/Ie-Se)*oe-(z.y+V/Ie-Te)*V)/(ae*oe-G*V);ne=Se+ae*Oe-N.x,te=Te+G*Oe-N.y;let Pt=ne*ne+te*te;if(Pt<=2)return new he(ne,te);S=Math.sqrt(Pt/2)}else{let we=!1;ae>Number.EPSILON?V>Number.EPSILON&&(we=!0):ae<-Number.EPSILON?V<-Number.EPSILON&&(we=!0):Math.sign(G)===Math.sign(oe)&&(we=!0),we?(ne=-G,te=ae,S=Math.sqrt(ge)):(ne=ae,te=G,S=Math.sqrt(ge/2))}return new he(ne/S,te/S)}let W=[];for(let N=0,D=U.length,z=D-1,ne=N+1;N<D;N++,z++,ne++)z===D&&(z=0),ne===D&&(ne=0),W[N]=q(U[N],U[z],U[ne]);let ee=[],F,K=W.concat();for(let N=0,D=H.length;N<D;N++){let z=H[N];F=[];for(let ne=0,te=z.length,S=te-1,ae=ne+1;ne<te;ne++,S++,ae++)S===te&&(S=0),ae===te&&(ae=0),F[ne]=q(z[ne],z[S],z[ae]);ee.push(F),K=K.concat(F)}for(let N=0;N<f;N++){let D=N/f,z=p*Math.cos(D*Math.PI/2),ne=m*Math.sin(D*Math.PI/2)+v;for(let te=0,S=U.length;te<S;te++){let ae=O(U[te],W[te],ne);E(ae.x,ae.y,-z)}for(let te=0,S=H.length;te<S;te++){let ae=H[te];F=ee[te];for(let G=0,V=ae.length;G<V;G++){let oe=O(ae[G],F[G],ne);E(oe.x,oe.y,-z)}}}let me=m+v;for(let N=0;N<J;N++){let D=d?O(I[N],K[N],me):I[N];P?(M.copy(_.normals[0]).multiplyScalar(D.x),w.copy(_.binormals[0]).multiplyScalar(D.y),T.copy(g[0]).add(M).add(w),E(T.x,T.y,T.z)):E(D.x,D.y,0)}for(let N=1;N<=c;N++)for(let D=0;D<J;D++){let z=d?O(I[D],K[D],me):I[D];P?(M.copy(_.normals[N]).multiplyScalar(z.x),w.copy(_.binormals[N]).multiplyScalar(z.y),T.copy(g[N]).add(M).add(w),E(T.x,T.y,T.z)):E(z.x,z.y,u/c*N)}for(let N=f-1;N>=0;N--){let D=N/f,z=p*Math.cos(D*Math.PI/2),ne=m*Math.sin(D*Math.PI/2)+v;for(let te=0,S=U.length;te<S;te++){let ae=O(U[te],W[te],ne);E(ae.x,ae.y,u+z)}for(let te=0,S=H.length;te<S;te++){let ae=H[te];F=ee[te];for(let G=0,V=ae.length;G<V;G++){let oe=O(ae[G],F[G],ne);P?E(oe.x,oe.y+g[c-1].y,g[c-1].x+z):E(oe.x,oe.y,u+z)}}}function R(N,D){let z=N.length;for(;--z>=0;){let ne=z,te=z-1;te<0&&(te=N.length-1);for(let S=0,ae=c+2*f;S<ae;S++){let G=J*S,V=J*(S+1);Z(D+ne+G,D+te+G,D+te+V,D+ne+V)}}}function E(N,D,z){l.push(N),l.push(D),l.push(z)}function B(N,D,z){k(N),k(D),k(z);let ne=n.length/3,te=y.generateTopUV(i,n,ne-3,ne-2,ne-1);Y(te[0]),Y(te[1]),Y(te[2])}function Z(N,D,z,ne){k(N),k(D),k(ne),k(D),k(z),k(ne);let te=n.length/3,S=y.generateSideWallUV(i,n,te-6,te-3,te-2,te-1);Y(S[0]),Y(S[1]),Y(S[3]),Y(S[1]),Y(S[2]),Y(S[3])}function k(N){n.push(l[3*N+0]),n.push(l[3*N+1]),n.push(l[3*N+2])}function Y(N){r.push(N.x),r.push(N.y)}(function(){let N=n.length/3;if(d){let D=0,z=J*D;for(let ne=0;ne<re;ne++){let te=A[ne];B(te[2]+z,te[1]+z,te[0]+z)}D=c+2*f,z=J*D;for(let ne=0;ne<re;ne++){let te=A[ne];B(te[0]+z,te[1]+z,te[2]+z)}}else{for(let D=0;D<re;D++){let z=A[D];B(z[2],z[1],z[0])}for(let D=0;D<re;D++){let z=A[D];B(z[0]+J*c,z[1]+J*c,z[2]+J*c)}}i.addGroup(N,n.length/3-N,0)})(),function(){let N=n.length/3,D=0;R(U,D),D+=U.length;for(let z=0,ne=H.length;z<ne;z++){let te=H[z];R(te,D),D+=te.length}i.addGroup(N,n.length/3-N,1)}()}this.setAttribute("position",new Pe(n,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Fo[n.type]().fromJSON(n)),new s(i,e.options)}},e1={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new he(r,a),new he(o,l),new he(h,c)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],m=e[3*n+2],v=e[3*r],f=e[3*r+1],x=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new he(a,1-l),new he(h,1-u),new he(d,1-m),new he(v,1-x)]:[new he(o,1-l),new he(c,1-u),new he(p,1-m),new he(f,1-x)]}},sc=class s extends Zn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},rc=class s extends Zn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ta=class s extends nt{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new b,m=new he;for(let v=0;v<=n;v++){for(let f=0;f<=i;f++){let x=r+f/i*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),h.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,c.push(m.x,m.y)}u+=d}for(let v=0;v<n;v++){let f=v*(i+1);for(let x=0;x<i;x++){let y=x+f,g=y,_=y+i+1,w=y+i+2,M=y+1;o.push(g,_,M),o.push(_,w,M)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ac=class s extends nt{constructor(e=new Zs([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let u=n.length/3,d=c.extractPoints(t),p=d.shape,m=d.holes;Tn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=m.length;f<x;f++){let y=m[f];Tn.isClockWise(y)===!0&&(m[f]=y.reverse())}let v=Tn.triangulateShape(p,m);for(let f=0,x=m.length;f<x;f++){let y=m[f];p=p.concat(y)}for(let f=0,x=p.length;f<x;f++){let y=p[f];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let f=0,x=v.length;f<x;f++){let y=v[f],g=y[0]+u,_=y[1]+u,w=y[2]+u;i.push(g,_,w),l+=3}}this.setIndex(i),this.setAttribute("position",new Pe(n,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},vt=class s extends nt{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new b,d=new b,p=[],m=[],v=[],f=[];for(let x=0;x<=i;x++){let y=[],g=x/i,_=0;x===0&&a===0?_=.5/t:x===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let M=w/t;u.x=-e*Math.cos(n+M*r)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(n+M*r)*Math.sin(a+g*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(M+_,1-g),y.push(h++)}c.push(y)}for(let x=0;x<i;x++)for(let y=0;y<t;y++){let g=c[x][y+1],_=c[x][y],w=c[x+1][y],M=c[x+1][y+1];(x!==0||a>0)&&p.push(g,_,M),(x!==i-1||l<Math.PI)&&p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new Pe(m,3)),this.setAttribute("normal",new Pe(v,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},oc=class s extends Zn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},pi=class s extends nt{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new b,u=new b,d=new b;for(let p=0;p<=i;p++)for(let m=0;m<=n;m++){let v=m/n*r,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(v),u.y=(e+t*Math.cos(f))*Math.sin(v),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let v=(n+1)*p+m-1,f=(n+1)*(p-1)+m-1,x=(n+1)*(p-1)+m,y=(n+1)*p+m;a.push(v,f,y),a.push(f,x,y)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},lc=class s extends nt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],u=new b,d=new b,p=new b,m=new b,v=new b,f=new b,x=new b;for(let g=0;g<=i;++g){let _=g/i*r*Math.PI*2;y(_,r,a,e,p),y(_+.01,r,a,e,m),f.subVectors(m,p),x.addVectors(m,p),v.crossVectors(f,x),x.crossVectors(v,f),v.normalize(),x.normalize();for(let w=0;w<=n;++w){let M=w/n*Math.PI*2,T=-t*Math.cos(M),P=t*Math.sin(M);u.x=p.x+(T*x.x+P*v.x),u.y=p.y+(T*x.y+P*v.y),u.z=p.z+(T*x.z+P*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(g/i),c.push(w/n)}}for(let g=1;g<=i;g++)for(let _=1;_<=n;_++){let w=(n+1)*(g-1)+(_-1),M=(n+1)*g+(_-1),T=(n+1)*g+_,P=(n+1)*(g-1)+_;o.push(w,M,P),o.push(M,T,P)}function y(g,_,w,M,T){let P=Math.cos(g),L=Math.sin(g),I=w/_*g,H=Math.cos(I);T.x=M*(2+H)*.5*P,T.y=M*(2+H)*L*.5,T.z=M*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},hc=class s extends nt{constructor(e=new Uo(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,h=new he,c=new b,u=[],d=[],p=[],m=[];function v(f){c=e.getPointAt(f/t,c);let x=a.normals[f],y=a.binormals[f];for(let g=0;g<=n;g++){let _=g/n*Math.PI*2,w=Math.sin(_),M=-Math.cos(_);l.x=M*x.x+w*y.x,l.y=M*x.y+w*y.y,l.z=M*x.z+w*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(r===!1?t:0),function(){for(let f=0;f<=t;f++)for(let x=0;x<=n;x++)h.x=f/t,h.y=x/n,p.push(h.x,h.y)}(),function(){for(let f=1;f<=t;f++)for(let x=1;x<=n;x++){let y=(n+1)*(f-1)+(x-1),g=(n+1)*f+(x-1),_=(n+1)*f+x,w=(n+1)*(f-1)+x;m.push(y,g,w),m.push(g,_,w)}}()})(),this.setIndex(m),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},cc=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,r=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let u=l[h],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),x=o.getX(p+(v+1)%3);n.fromBufferAttribute(a,f),r.fromBufferAttribute(a,x),Ip(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),r.fromBufferAttribute(a,u),Ip(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ip(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Xy=Object.freeze({__proto__:null,BoxGeometry:lt,CapsuleGeometry:di,CircleGeometry:Kn,ConeGeometry:Ks,CylinderGeometry:_t,DodecahedronGeometry:ec,EdgesGeometry:tc,ExtrudeGeometry:ea,IcosahedronGeometry:sc,LatheGeometry:Ho,OctahedronGeometry:rc,PlaneGeometry:ci,PolyhedronGeometry:Zn,RingGeometry:ta,ShapeGeometry:ac,SphereGeometry:vt,TetrahedronGeometry:oc,TorusGeometry:pi,TorusKnotGeometry:lc,TubeGeometry:hc,WireframeGeometry:cc});var ht=class extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function co(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function t1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Qs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=r)break t;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uc=class extends Qs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ad,endingEnd:Ad}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cd:r=e,o=2*t-i;break;case Ld:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cd:a=e,l=2*i-t;break;case Ld:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),v=m*m,f=v*m,x=-d*f+2*d*v-d*m,y=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*m+1,g=(-1-p)*f+(1.5+p)*v+.5*m,_=p*f-p*v;for(let w=0;w!==o;++w)r[w]=x*a[c+w]+y*a[h+w]+g*a[l+w]+_*a[u+w];return r}},dc=class extends Qs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}},pc=class extends Qs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Ci=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case zl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&t1(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===zl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let m=t[c+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ci.prototype.TimeBufferType=Float32Array,Ci.prototype.ValueBufferType=Float32Array,Ci.prototype.DefaultInterpolation=fo;var Vn=class extends Ci{};Vn.prototype.ValueTypeName="bool",Vn.prototype.ValueBufferType=Array,Vn.prototype.DefaultInterpolation=po,Vn.prototype.InterpolantFactoryMethodLinear=void 0,Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Ci{};fc.prototype.ValueTypeName="color";var mc=class extends Ci{};mc.prototype.ValueTypeName="number";var gc=class extends Qs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)oi.slerpFlat(r,0,a,h-o,a,h,l);return r}},Hr=class extends Ci{InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}};Hr.prototype.ValueTypeName="quaternion",Hr.prototype.DefaultInterpolation=fo,Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ci{};Wn.prototype.ValueTypeName="string",Wn.prototype.ValueBufferType=Array,Wn.prototype.DefaultInterpolation=po,Wn.prototype.InterpolantFactoryMethodLinear=void 0,Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Ci{};vc.prototype.ValueTypeName="vector";var yc=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let p=h[u],m=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}},i1=new yc,xc=class{constructor(e){this.manager=e!==void 0?e:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},es=class extends er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vh=new Ae,Np=new b,Dp=new b,ia=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),t.position.copy(Np),Dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dp),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_c=class extends ia{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*Vs*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;i===t.fov&&n===t.aspect&&r===t.far||(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},tr=class extends er{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Op=new Ae,Nr=new b,yh=new b,bc=class extends ia{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Nr),yh.copy(i.position),yh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yh),i.updateMatrixWorld(),n.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Op)}},ts=class extends er{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new bc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mc=class extends ia{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Mc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yy=new Ae,qy=new Ae,Jy=new Ae;var Vo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Up(){return(typeof performance>"u"?Date:performance).now()}var Ky=new b,Zy=new oi,Qy=new b,ex=new b;var tx=new b,ix=new oi,nx=new b,sx=new b;var Pc="\\[\\]\\.:\\/",n1=new RegExp("["+Pc+"]","g"),xh="[^"+Pc+"]",s1="[^"+Pc.replace("\\.","")+"]",r1=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",xh)+/(WCOD+)?/.source.replace("WCOD",s1)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh)+"$"),a1=["material","materials","bones","map"],ot=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(e){let t=r1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);a1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(s,e,t){let i=t||ot.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rx=new Float32Array(1);var Wo=class{constructor(e,t,i=0,n=1/0){this.ray=new qn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return wc(e,this,i,t),i.sort(Bp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)wc(e[n],this,i,t);return i.sort(Bp),i}};function Bp(s,e){return s.distance-e.distance}function wc(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){let n=s.children;for(let r=0,a=n.length;r<a;r++)wc(n[r],e,t,!0)}}var ax=new he;var ox=new b,lx=new b;var hx=new b;var cx=new b,ux=new Ae,dx=new Ae;var px=new b,fx=new Ee,mx=new Ee;var gx=new b,vx=new b,yx=new b;var xx=new b,_x=new Wr;var bx=new li;var Mx=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);var h0=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),sa=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Nc=[{name:"Lean",girth:.93,muscle:.85,fat:.15},{name:"Athletic",girth:1,muscle:1,fat:.25},{name:"Muscular",girth:1.07,muscle:1.3,fat:.2},{name:"Stocky",girth:1.12,muscle:1.05,fat:.65}],Dc=[{name:"Soft",show:0,belly:1},{name:"Toned",show:.45,belly:.55},{name:"Defined",show:.8,belly:.3},{name:"Shredded",show:1,belly:.1}];function p0(s,e,t){let i=Math.max(t-Math.abs(s-e),0)/t;return Math.min(s,e)-i*i*t*.25}function o1(s,e){let t=Nc[e.body??1],i=Dc[e.abs??1],n=s*t.girth,r=t.muscle,a=t.fat*(.4+i.belly),o=[],l=(c,u,d,p=.05,m)=>o.push({t:"e",bone:c,c:new b(...u),r:new b(...d),k:p,tag:m}),h=(c,u,d,p,m,v=.05,f)=>o.push({t:"c",bone:c,a:new b(...u),b:new b(...d),ra:p,rb:m,k:v,tag:f});l("hips",[0,0,0],[.155*n,.105,.1*(1+a*.15)],.06),l("spine",[0,.09,.008+a*.02],[.13*n*(1+a*.08),.13,.09*(1+a*.3)],.07),l("chest",[0,.12,0],[.16*n,.155,.1],.07),l("chest",[0,.25,-.025],[.105*n*r,.055,.055],.06);for(let c of[-1,1])l("chest",[c*.068*n,.165,.058],[.072*n*r,.052*r,.038*r],.03),l("chest",[c*.12*n,.07,-.015],[.05*n*r,.12,.055],.05),l("hips",[c*.058*n,-.045,-.055],[.07*n,.078,.062*(1+a*.2)],.04),i.show>0&&l("spine",[c*.1*n,.06,.04],[.035,.075,.03*i.show],.02);if(i.show>0){let c=.012+.016*i.show;for(let u of[-1,1])for(let[d,p]of[-.01,.055,.12].entries())l("spine",[u*.03,p,.083+a*.012],[.028,.026+(d===0?.008:0),c],.012+.012*(1-i.show))}h("neck",[0,-.02,0],[0,.1,.012],.052*n*(.95+r*.05),.047*n,.04),l("neck",[0,-.005,-.03],[.06*n*r,.04,.035],.04);for(let c of[-1,1]){let u=c>0?"shL":"shR",d=c>0?"elL":"elR",p=c>0?"hipL":"hipR",m=c>0?"knL":"knR";l(u,[0,-.02,0],[.07*n*r,.075,.068*n*r],.05,"arm"),h(u,[0,-.03,0],[0,-.26,0],.052*n,.043*n,.04,"arm"),l(u,[0,-.135,.022],[.04*n*r,.072,.04*n*r],.03,"arm"),l(u,[0,-.12,-.024],[.04*n*r,.085,.036*n*r],.03,"arm"),h(d,[0,0,0],[0,-.215,0],.045*n,.031*n,.035,"forearm"),l(d,[0,-.06,.01],[.044*n*r,.072,.04*n],.03,"forearm"),e.hands&&l(d,[0,-.265,.005],[.034,.05,.024],.03,"hand"),h(p,[0,-.02,0],[0,-.4,0],.088*n,.054*n,.05,"leg"),l(p,[c*.008,-.17,.028],[.068*n*r,.15,.062*n*r],.04,"leg"),l(p,[-c*.03,-.12,.01],[.04*n,.12,.045*n],.04,"leg"),l(p,[0,-.2,-.03],[.058*n,.14,.05*n*r],.04,"leg"),h(m,[0,0,0],[0,-.405,0],.05*n,.03*n,.035,"shin"),l(m,[0,-.12,-.034],[.046*n*r,.095,.045*n*r],.035,"shin"),e.feet&&l(m,[0,-.455,.045],[.038,.03,.105],.03,"foot")}return o}function l1(s,e){let t=new Ae;return s.map(i=>{let n=e[i.bone],r=t.copy(n.matrixWorld).invert().clone(),a,o;if(i.t==="e")a=i.c.clone().applyMatrix4(n.matrixWorld),o=Math.max(i.r.x,i.r.y,i.r.z);else{let l=i.a.clone().applyMatrix4(n.matrixWorld),h=i.b.clone().applyMatrix4(n.matrixWorld);a=l.clone().add(h).multiplyScalar(.5),o=l.distanceTo(h)/2+Math.max(i.ra,i.rb)}return{...i,inv:r.elements,center:a,bound:o+i.k+.02}})}var c0=new b;function Ko(s,e,t,i){let n=s.inv,r=n[0]*e+n[4]*t+n[8]*i+n[12],a=n[1]*e+n[5]*t+n[9]*i+n[13],o=n[2]*e+n[6]*t+n[10]*i+n[14];if(s.t==="e"){let w=(r-s.c.x)/s.r.x,M=(a-s.c.y)/s.r.y,T=(o-s.c.z)/s.r.z,P=Math.sqrt(w*w+M*M+T*T),L=Math.sqrt((w/s.r.x)**2+(M/s.r.y)**2+(T/s.r.z)**2);return L>1e-6?P*(P-1)/L:-Math.min(s.r.x,s.r.y,s.r.z)}let l=s.a.x,h=s.a.y,c=s.a.z,u=s.b.x-l,d=s.b.y-h,p=s.b.z-c,m=r-l,v=a-h,f=o-c,x=Math.max(0,Math.min(1,(m*u+v*d+f*p)/(u*u+d*d+p*p))),y=m-u*x,g=v-d*x,_=f-p*x;return Math.sqrt(y*y+g*g+_*_)-(s.ra+(s.rb-s.ra)*x)}function u0(s,e,t,i){let n=1e9;for(let r of s){let a=e-r.center.x,o=t-r.center.y,l=i-r.center.z;a*a+o*o+l*l>r.bound*r.bound&&n<.5||(n=p0(n,Ko(r,e,t,i),r.k))}return n}function Ic(s,e,t,i){let n=Math.ceil((t.x-e.x)/i)+1,r=Math.ceil((t.y-e.y)/i)+1,a=Math.ceil((t.z-e.z)/i)+1,o=new Float32Array(n*r*a),l=(g,_,w)=>g+n*(_+r*w);for(let g=0;g<a;g++)for(let _=0;_<r;_++)for(let w=0;w<n;w++)o[l(w,_,g)]=s(e.x+w*i,e.y+_*i,e.z+g*i);let h=[],c=[],u=new Map,d=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],p=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],m=new Float32Array(8),v=new Int32Array(12);for(let g=0;g<a-1;g++)for(let _=0;_<r-1;_++)for(let w=0;w<n-1;w++){let M=0;for(let L=0;L<8;L++)m[L]=o[l(w+d[L][0],_+d[L][1],g+d[L][2])],m[L]<0&&(M|=1<<L);let T=h0[M];if(!T)continue;for(let L=0;L<12;L++){if(!(T&1<<L))continue;let[I,H]=p[L],A=l(w+d[I][0],_+d[I][1],g+d[I][2]),U=l(w+d[H][0],_+d[H][1],g+d[H][2]),O=A<U?A*4+(U-A===1?0:U-A===n?1:2):U*4+(A-U===1?0:A-U===n?1:2),J=u.get(O);if(J===void 0){let re=m[I]/(m[I]-m[H]);J=h.length/3,h.push(e.x+(w+d[I][0]+(d[H][0]-d[I][0])*re)*i,e.y+(_+d[I][1]+(d[H][1]-d[I][1])*re)*i,e.z+(g+d[I][2]+(d[H][2]-d[I][2])*re)*i),u.set(O,J)}v[L]=J}let P=M<<4;for(let L=0;sa[P+L]!==-1;L+=3)c.push(v[sa[P+L]],v[sa[P+L+2]],v[sa[P+L+1]])}let f=new Float32Array(h.length),x=i*.5;for(let g=0;g<h.length;g+=3){let _=h[g],w=h[g+1],M=h[g+2],T=s(_+x,w,M)-s(_-x,w,M),P=s(_,w+x,M)-s(_,w-x,M),L=s(_,w,M+x)-s(_,w,M-x),I=Math.hypot(T,P,L)||1;f[g]=T/I,f[g+1]=P/I,f[g+2]=L/I}let y=new nt;return y.setAttribute("position",new Pe(h,3)),y.setAttribute("normal",new gt(f,3)),y.setIndex(c),y}function d0(s,e,t){let i=s.attributes.position.count,n=s.attributes.position.array,r=new Uint16Array(i*4),a=new Float32Array(i*4),o=new Map;for(let l=0;l<i;l++){let h=n[l*3],c=n[l*3+1],u=n[l*3+2];o.clear();for(let m of e){let v=h-m.center.x,f=c-m.center.y,x=u-m.center.z;if(v*v+f*f+x*x>(m.bound+.05)**2)continue;let y=Math.max(0,Ko(m,h,c,u)),g=Math.exp(-y/.014),_=t[m.bone];o.set(_,(o.get(_)||0)+g)}let d=[...o.entries()].sort((m,v)=>v[1]-m[1]).slice(0,4),p=d.reduce((m,v)=>m+v[1],0)||1;d.forEach(([m,v],f)=>{r[l*4+f]=m,a[l*4+f]=v/p}),d.length||(a[l*4]=1)}s.setAttribute("skinIndex",new Ws(r,4)),s.setAttribute("skinWeight",new Pe(a,4))}var kc=new Map;function f0(s,e,t,i,n={}){let r=[t.toFixed(3),i,n.body??1,n.abs??1,n.step||0].join("|");if(kc.has(r))return kc.get(r);let a=i!=="fighter",o=l1(o1(t,{...n,feet:!a,hands:a}),s),l=Object.fromEntries(e.map((y,g)=>[y,g])),h=n.step||(a?.02:.015),c=new b(-.62,-.06,-.3),u=new b(.62,1.82,.3),d={};d.skin=Ic((y,g,_)=>u0(o,y,g,_),c,u,h),d0(d.skin,o,l);let p=s.hipL.getWorldPosition(c0).y,m=s.knL.getWorldPosition(c0).y,v=y=>o.filter(y),f=(y,g,_,w)=>{let M=Ic((T,P,L)=>Math.max(u0(y,T,P,L)-g,_-P,P-w),c,u,h);return d0(M,o,l),M},x=new Set(["hips","spine","chest"]);return a?(d.shirt=f(v(y=>x.has(y.bone)||y.tag==="arm"||y.bone==="neck"&&y.t==="c"),.012,p+.02,2),d.pants=f(v(y=>y.bone==="hips"||y.bone==="spine"||y.tag==="leg"||y.tag==="shin"),.013,.1,p+.12)):d.shorts=f(v(y=>y.bone==="hips"||y.bone==="spine"||y.tag==="leg"),.016,m+(p-m)*.42,p+.14),kc.set(r,d),d}var Oc={shL:[0,0,.55],shR:[0,0,-.55],hipL:[0,0,.07],hipR:[0,0,-.07]};function h1(){let s=[],e=[],t=(n,r,a,o)=>n.push({t:"e",c:new b(...r),r:new b(...a),k:o,inv:new Ae().elements,center:new b(...r),bound:9}),i=(n,r,a,o,l,h)=>n.push({t:"c",a:new b(...r),b:new b(...a),ra:o,rb:l,k:h,inv:new Ae().elements,center:new b(...r),bound:9});t(s,[0,.025,-.005],[.09,.105,.1],.03),t(s,[0,-.005,.03],[.074,.085,.075],.03),t(s,[0,-.05,.03],[.068,.05,.07],.025),t(s,[0,-.083,.068],[.026,.02,.022],.015),t(s,[0,.052,.076],[.07,.017,.025],.015),i(s,[0,.04,.093],[0,-.004,.107],.009,.011,.01),t(s,[0,-.008,.106],[.016,.014,.014],.008),t(s,[0,-.035,.094],[.024,.008,.012],.006),t(s,[0,-.047,.092],[.021,.009,.012],.006);for(let n of[-1,1])t(s,[n*.05,0,.068],[.028,.02,.024],.015),t(s,[n*.012,-.012,.099],[.009,.008,.009],.006),t(s,[n*.091,.01,-.008],[.012,.03,.022],.008),t(e,[n*.034,.03,.095],[.021,.015,.014],.01);return{add:s,sub:e}}var Jo=null;function m0(){if(Jo)return Jo;let{add:s,sub:e}=h1();return Jo=Ic((i,n,r)=>{let a=1e9;for(let o of s)a=p0(a,Ko(o,i,n,r),o.k);for(let o of e){let l=-Ko(o,i,n,r),h=o.k,c=Math.max(h-Math.abs(a-l),0)/h;a=Math.max(a,l)+c*c*h*.25}return a},new b(-.12,-.12,-.13),new b(.12,.15,.14),.005),Jo}var Zo=["None","Tribal","Script","Roses","Dragon","Skull","Wings","Stars"],An=[{key:"tChest",name:"Chest"},{key:"tBack",name:"Back"},{key:"tArmL",name:"Left arm"},{key:"tArmR",name:"Right arm"},{key:"tLegs",name:"Leg"}],rn="rgba(22, 28, 44, 0.88)";function c1(s,e){s.fillStyle=rn;let t=(i,n)=>{for(let r=0;r<(e?6:4);r++){let a=r/(e?6:4)*512+(e?0:40);s.beginPath(),s.moveTo(a,i+n*.5),s.bezierCurveTo(a+40,i-n*.2,a+70,i+n*.2,a+120,i),s.bezierCurveTo(a+90,i+n*.45,a+60,i+n*.7,a+110,i+n),s.bezierCurveTo(a+50,i+n*.8,a+20,i+n*.75,a,i+n*.5),s.fill()}};e?(t(60,120),s.fillRect(0,196,512,14),t(250,90)):t(140,230)}function u1(s,e,t){s.fillStyle=rn,s.textAlign="center",s.textBaseline="middle";let i=String(t||"Warrior");e?(s.save(),s.translate(256,256),s.rotate(-Math.PI/2),s.font="italic bold 92px Georgia, serif",s.fillText(i,0,0,470),s.restore()):(s.font="italic bold 96px Georgia, serif",s.fillText(i,256,230,470),s.lineWidth=6,s.strokeStyle=rn,s.beginPath(),s.moveTo(90,300),s.quadraticCurveTo(256,340,422,300),s.stroke())}function nr(s,e,t,i){s.fillStyle="rgba(170, 20, 40, 0.85)",s.beginPath(),s.arc(e,t,i,0,Math.PI*2),s.fill(),s.strokeStyle=rn,s.lineWidth=i*.12,s.beginPath();for(let n=0;n<Math.PI*6;n+=.2){let r=n/(Math.PI*6)*i*.9;s.lineTo(e+Math.cos(n)*r,t+Math.sin(n)*r)}s.stroke(),s.fillStyle="rgba(30, 110, 50, 0.85)";for(let n of[-1,1])s.beginPath(),s.ellipse(e+n*i*1.2,t+i*.6,i*.6,i*.25,n*.6,0,Math.PI*2),s.fill()}function d1(s,e){e?(nr(s,130,120,55),nr(s,360,210,65),nr(s,200,340,50)):(nr(s,256,230,85),nr(s,140,300,50),nr(s,372,300,50))}function p1(s,e){s.fillStyle=rn;let t=[];for(let r=0;r<=1;r+=.02){let a=e?256+Math.sin(r*Math.PI*3)*170:60+r*390,o=e?30+r*430:256+Math.sin(r*Math.PI*2.5)*110;t.push([a,o,34*(1-r*.7)])}for(let[r,a,o]of t)s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.fill();s.fillStyle="rgba(200, 40, 30, 0.8)";for(let r=0;r<t.length;r+=3){let[a,o,l]=t[r];s.beginPath(),s.moveTo(a,o-l),s.lineTo(a+l*.6,o-l*1.8),s.lineTo(a-l*.4,o-l*.9),s.fill()}let[i,n]=t[0];s.fillStyle=rn,s.beginPath(),s.moveTo(i-70,n),s.lineTo(i+30,n-40),s.lineTo(i+50,n+30),s.closePath(),s.fill()}function f1(s,e){let i=e?230:240,n=e?120:130;s.fillStyle=rn,s.beginPath(),s.arc(256,i,n,Math.PI,0),s.lineTo(256+n*.75,i+n*.6),s.lineTo(256-n*.75,i+n*.6),s.closePath(),s.fill(),s.fillRect(256-n*.5,i+n*.55,n,n*.4),s.globalCompositeOperation="destination-out";for(let r of[-1,1])s.beginPath(),s.ellipse(256+r*n*.38,i+n*.05,n*.25,n*.3,0,0,Math.PI*2),s.fill();s.beginPath(),s.moveTo(256,i+n*.3),s.lineTo(256-n*.1,i+n*.5),s.lineTo(256+n*.1,i+n*.5),s.fill();for(let r=-2;r<=2;r++)s.fillRect(256+r*n*.18-4,i+n*.65,8,n*.28);s.globalCompositeOperation="source-over"}function m1(s,e){s.fillStyle=rn;let t=i=>{for(let n=0;n<7;n++){s.beginPath();let r=200-n*18,a=150+n*30;s.ellipse(256+i*(40+r/2),a,r/2,16,i*(.25-n*.06),0,Math.PI*2),s.fill()}};e?(s.save(),s.scale(.9,1.3),t(1),s.restore()):(t(-1),t(1),s.beginPath(),s.arc(256,160,26,0,Math.PI*2),s.fill())}function Uc(s,e,t,i){s.beginPath();for(let n=0;n<10;n++){let r=n/10*Math.PI*2-Math.PI/2,a=n%2?i*.42:i;s.lineTo(e+Math.cos(r)*a,t+Math.sin(r)*a)}s.closePath(),s.fill()}function g1(s,e){s.fillStyle=rn,e?[[130,100,50],[360,180,40],[230,300,55],[400,400,35],[90,420,30]].forEach(([t,i,n])=>Uc(s,t,i,n)):(Uc(s,150,230,70),Uc(s,362,230,70))}var v1={Tribal:c1,Script:u1,Roses:d1,Dragon:p1,Skull:f1,Wings:m1,Stars:g1},Bc=new Map;function y1(s,e,t){let i=s+e+(s==="Script"?t:"");if(Bc.has(i))return Bc.get(i);let n=document.createElement("canvas");n.width=n.height=512;let r=n.getContext("2d");v1[s](r,e,t);let a=new sn(n);return a.colorSpace=at,a.anisotropy=4,Bc.set(i,a),a}var Fc=new Map;function x1(s,e,t,i){let n=i+e;if(Fc.has(n))return Fc.get(n);let r=s.attributes.position,a=s.attributes.normal,o=s.attributes.skinIndex,l=s.attributes.skinWeight,h=s.index.array,c=r.count,u=new Float32Array(c*2),d=new Uint8Array(c),p=new b,m=new b,v=A=>{let U=0,O=-1;for(let J=0;J<4;J++)l.getComponent(A,J)>O&&(O=l.getComponent(A,J),U=o.getComponent(A,J));return U},f={tArmL:[5,6],tArmR:[7,8],tLegs:[9,10]}[e],[x,y]=f?t.axes[e]:[],g=f?y.clone().sub(x):null,_=g?g.length():1;g&&g.normalize();let w=g?new b().crossVectors(g,new b(0,0,1)).normalize():null,M=g?new b().crossVectors(g,w):null,T=t.width,P=t.chestY;for(let A=0;A<c;A++){p.fromBufferAttribute(r,A),m.fromBufferAttribute(a,A);let U=v(A);if(e==="tChest"||e==="tBack"){let O=e==="tChest";if(U>2||(O?m.z<.25:m.z>-.25))continue;let J=((O?p.x:-p.x)+.2*T)/(.4*T),re=(P+.32-p.y)/.44;if(J<0||J>1||re<0||re>1)continue;u[A*2]=J,u[A*2+1]=1-re,d[A]=1}else{if(U!==f[0]&&U!==f[1])continue;let O=p.clone().sub(x),J=O.dot(g)/_;if(J<.08||J>.98)continue;let re=Math.atan2(O.dot(M),O.dot(w));u[A*2]=re/(Math.PI*2)+.5,u[A*2+1]=1-J,d[A]=1}}let L=[];for(let A=0;A<h.length;A+=3){let U=h[A],O=h[A+1],J=h[A+2];if(!d[U]||!d[O]||!d[J])continue;let re=[u[U*2],u[O*2],u[J*2]];Math.max(...re)-Math.min(...re)>.5||L.push(U,O,J)}let I=new nt,H=new Float32Array(c*3);for(let A=0;A<c;A++)H[A*3]=r.getX(A)+a.getX(A)*.0012,H[A*3+1]=r.getY(A)+a.getY(A)*.0012,H[A*3+2]=r.getZ(A)+a.getZ(A)*.0012;return I.setAttribute("position",new gt(H,3)),I.setAttribute("normal",a),I.setAttribute("uv",new gt(u,2)),I.setAttribute("skinIndex",o),I.setAttribute("skinWeight",l),I.setIndex(L),Fc.set(n,I),I}function g0({root:s,skeleton:e,skinGeo:t,frame:i,look:n,text:r,cacheKey:a,envMap:o}){let l=[];for(let h of An){let c=Zo[n[h.key]||0];if(!c||c==="None")continue;let u=x1(t,h.key,i,a);if(!u.index.count)continue;let d=h.key!=="tChest"&&h.key!=="tBack",p=new Js(u,new ht({map:y1(c,d,r),transparent:!0,depthWrite:!1,roughness:.5,envMap:o,envMapIntensity:.3,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));p.frustumCulled=!1,p.receiveShadow=!0,s.add(p),p.bind(e),l.push(p)}return l}var zt={skin:["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],hair:["Bald","Buzz","Short","Mohawk","Man bun","Long","Afro","Braids","Dreadlocks"],hairColor:["#15120f","#3b2416","#6e4524","#c9a25a","#9c3a1a","#9b9b9b"],beard:["None","Stubble","Goatee","Full"],shorts:["#c8102e","#1d4ed8","#151515","#f2f2f2","#15803d","#e8a91c","#7c3aed","#f97316"],body:Nc.map(s=>s.name),abs:Dc.map(s=>s.name),...Object.fromEntries(An.map(s=>[s.key,Zo]))};var R0=["Red","Blue","Black","White","Green","Gold","Purple","Orange"],A0=["skin","hair","hairColor","beard","shorts","body","abs",...An.map(s=>s.key)],_1={body:1,abs:1};function an(s){let e=String(s||"").split(",").map(Number),t={};return A0.forEach((i,n)=>{let r=zt[i].length;t[i]=Number.isInteger(e[n])?(e[n]%r+r)%r:_1[i]??0}),t}function $c(s){return A0.map(e=>s[e]).join(",")}function Ln(s){let e=2166136261;for(let n of String(s))e=Math.imul(e^n.charCodeAt(0),16777619);let t=()=>(e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,(e>>>0)/4294967296),i=n=>Math.floor(t()*zt[n].length);return{skin:i("skin"),hair:i("hair"),hairColor:Math.floor(t()*5),beard:i("beard"),shorts:i("shorts"),body:i("body"),abs:i("abs"),...Object.fromEntries(An.map(n=>[n.key,t()<.3?1+Math.floor(t()*(Zo.length-1)):0]))}}function Xc(){return Ln(Math.random().toString(36))}var C0=["hips","spine","chest","neck","shL","elL","shR","elR","hipL","knL","hipR","knR"];function X(s,e={}){let t={hipsPos:[0,0,0]};for(let i of C0)t[i]=[0,0,0];for(let i of[s,e])if(i)for(let n in i)t[n]=i[n].slice();return t}function aa(s){let e={};for(let t in s){let i=s[t],n=t.endsWith("L")?t.slice(0,-1)+"R":t.endsWith("R")?t.slice(0,-1)+"L":t;e[n]=t==="hipsPos"?[-i[0],i[1],i[2]]:[i[0],-i[1],-i[2]]}return e}var Yc=X(null,{hipsPos:[0,-.07,0],hips:[0,-.45,0],spine:[.08,.15,0],chest:[.06,.18,0],neck:[.12,.1,0],shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0],hipL:[-.32,.45,.1],knL:[.42,0,0],hipR:[.22,.35,-.12],knR:[.36,0,0]}),Xe={stance:Yc,relaxed:X(null,{hipsPos:[0,-.01,0],neck:[.05,0,0],chest:[.02,0,0],shL:[.05,0,.14],elL:[-.35,0,0],shR:[.05,0,-.14],elR:[-.35,0,0],hipL:[0,0,.06],knL:[.04,0,0],hipR:[0,0,-.06],knR:[.04,0,0]}),dejected:X(null,{hipsPos:[0,-.02,0],spine:[.15,0,0],neck:[.55,0,0],shL:[.1,0,.08],elL:[-.25,0,0],shR:[-.6,0,-.1],elR:[-2.1,0,0],hipL:[0,0,.05],knL:[.05,0,0],hipR:[0,0,-.05],knR:[.05,0,0]}),victory:X(null,{hipsPos:[0,0,0],chest:[-.15,0,0],neck:[-.35,0,0],shL:[-2.75,0,.45],elL:[-.25,0,0],shR:[-2.75,0,-.45],elR:[-.25,0,0],hipL:[0,0,.12],hipR:[0,0,-.12]}),top:X(null,{hipsPos:[0,-.46,0],spine:[.55,0,0],chest:[.3,0,0],neck:[-.35,0,0],shL:[-1.2,0,.35],elL:[-.7,0,0],shR:[-1.2,0,-.35],elR:[-.7,0,0],hipL:[-.1,0,.3],knL:[1.75,0,0],hipR:[-.1,0,-.3],knR:[1.75,0,0]}),bottom:X(null,{hipsPos:[0,-.8,0],hips:[-1.42,0,0],spine:[-.05,0,0],neck:[.55,0,0],shL:[-1.5,0,.3],elL:[-.9,0,0],shR:[-1.5,0,-.3],elR:[-.9,0,0],hipL:[-1.15,0,.5],knL:[1.45,0,0],hipR:[-1.15,0,-.5],knR:[1.45,0,0]}),down:X(null,{hipsPos:[0,-.84,0],hips:[-1.52,.1,0],neck:[.1,.5,0],shL:[-.4,0,1.25],elL:[-.4,0,0],shR:[-.3,0,-1.1],elR:[-.9,0,0],hipL:[-.15,0,.18],knL:[.25,0,0],hipR:[-.45,0,-.1],knR:[.9,0,0]}),sitting:X(null,{hipsPos:[0,-.78,0],hips:[-.35,0,0],spine:[.25,0,0],neck:[.3,0,0],shL:[.6,0,.35],elL:[-.2,0,0],shR:[.6,0,-.35],elR:[-.2,0,0],hipL:[-1,0,.2],knL:[1.6,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0]}),ref:X(null,{hipsPos:[0,-.02,0],neck:[.05,0,0],shL:[-.15,0,.12],elL:[-1.3,0,0],shR:[-.15,0,-.12],elR:[-1.3,0,0],hipL:[0,0,.08],knL:[.08,0,0],hipR:[0,0,-.08],knR:[.08,0,0]})};Xe.refRaise=X(Xe.ref,{shR:[-2.75,0,-.45],elR:[-.2,0,0],neck:[-.1,0,0]});var Me=Yc,v0=X(Me,{shL:[-1.6,.05,.02],elL:[-.05,0,0],chest:[.08,-.12,0],spine:[.12,.05,0]}),Wc=X(Me,{shR:[-1.62,-.1,.05],elR:[-.05,0,0],chest:[.12,.55,0],spine:[.15,.35,0],hipR:[.3,.6,-.1],hipsPos:[0,-.09,.06]}),b1=X(Me,{shL:[-.25,0,1.45],elL:[-1.55,0,0],chest:[.1,-.45,-.05],spine:[.1,-.2,0]}),y0=X(Me,{chest:[.1,.35,0],shL:[-.5,0,.9],elL:[-1.6,0,0]}),M1=X(Me,{hipsPos:[0,-.14,0],shR:[.25,0,-.15],elR:[-1.5,0,0],chest:[.25,.3,0]}),w1=X(Me,{hipsPos:[0,-.04,.04],shR:[-1.15,0,-.05],elR:[-1.85,0,0],chest:[-.12,.45,0]}),S1=X(Me,{shR:[-1.6,0,-.9],elR:[-1.2,0,0],chest:[0,-.2,.15]}),T1=X(Me,{shR:[-2.05,.2,-.25],elR:[-.35,0,0],chest:[.4,.6,-.1],spine:[.25,.3,0],hipsPos:[0,-.12,.1]}),Hc=X(Me,{hips:[0,.2,0],hipR:[-.4,.3,-.5],knR:[1.4,0,0],shR:[.4,0,-.5],elR:[-.6,0,0]}),tl=X(Me,{hipsPos:[0,-.04,0],hips:[0,.75,-.15],spine:[0,0,.25],chest:[.05,-.3,.12],hipL:[0,.4,.06],knL:[.12,0,0],hipR:[-.2,.85,-1.35],knR:[.15,0,0],shR:[.6,0,-.55],elR:[-.4,0,0],shL:[-.9,0,.3],elL:[-2,0,0]}),il=X(tl,{hips:[0,.75,-.35],spine:[0,0,.45],hipR:[-.2,.85,-1.95],knR:[.05,0,0]}),E1=X(Me,{hipsPos:[0,-.1,0],hips:[0,.55,0],chest:[.1,-.25,.05],hipR:[-.3,.9,-.75],knR:[.25,0,0],shR:[.5,0,-.4],elR:[-.6,0,0]}),L0=X(Me,{hipsPos:[0,0,.12],hips:[0,-.1,0],spine:[-.15,0,0],neck:[.3,0,0],shL:[-1.55,0,-.15],elL:[-1.15,0,0],shR:[-1.55,0,.15],elR:[-1.15,0,0],hipR:[-1.75,0,0],knR:[1.9,0,0],hipL:[0,0,.06],knL:[.08,0,0]}),R1=X(L0,{hipsPos:[0,.38,.25],hipL:[.5,0,.1],knL:[1.4,0,0],shL:[-.4,0,.6],elL:[-1.2,0,0]}),A1=X(Me,{hipsPos:[0,-.15,0],spine:[.2,0,-.35],chest:[.15,0,-.2],neck:[.15,0,-.2]}),ar=X(null,{hipsPos:[0,-.42,.25],hips:[.25,0,0],spine:[.75,0,0],chest:[.25,0,0],neck:[-.7,0,0],shL:[-1.35,0,.25],elL:[-.55,0,0],shR:[-1.35,0,-.25],elR:[-.55,0,0],hipL:[-1.15,0,.12],knL:[1.65,0,0],hipR:[.35,0,-.1],knR:[1.6,0,0]}),C1=X(null,{hipsPos:[0,-.55,-.15],hips:[.95,0,0],spine:[.2,0,0],neck:[-.6,0,0],shL:[-1.7,0,.3],elL:[-.4,0,0],shR:[-1.7,0,-.3],elR:[-.4,0,0],hipL:[.35,0,.3],knL:[.25,0,0],hipR:[.35,0,-.3],knR:[.25,0,0]}),Li=X(Me,{shL:[-1.7,0,-.2],elL:[-1.3,0,0],shR:[-1.7,0,.2],elR:[-1.3,0,0],spine:[.35,0,0],neck:[.25,0,0],hipsPos:[0,-.1,.1]}),L1=X(Me,{shL:[-1.45,0,0],elL:[-.15,0,0],shR:[-1.45,0,0],elR:[-.15,0,0],chest:[.1,0,0]}),P1=Xe.top,P0=Xe.bottom,zc=s=>X(s,{shL:[-.6,0,1],elL:[-.3,0,0]}),Gc=s=>X(s,{shL:[-.2,0,1.25],elL:[-.1,0,0]}),k1=X(P0,{shL:[-1.2,0,-.2],elL:[-2.1,0,0],shR:[-1.2,0,.2],elR:[-2.1,0,0],neck:[.3,0,0]});function x0(s,e){return e?aa(s):s}function Qe(s,e){let t=X(s);for(let i in e)for(let n=0;n<3;n++)t[i][n]+=e[i][n];return t}var I1=-.45-Math.PI*2,N1={shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0]},yt=(s,e={})=>X(Me,{spine:[.1,0,0],chest:[.05,0,0],...N1,hips:[0,s,0],...e}),oa=X(Me,{hips:[0,I1,0]}),D1=s=>[[yt(-1.7,{neck:[.1,1.2,0],hipsPos:[0,-.06,0]}),.08,24],[yt(-2.7,{spine:[.35,0,0],neck:[0,1.1,0],hipR:[-1.3,0,0],knR:[2,0,0],hipL:[-.1,0,0],knL:[.3,0,0]}),.08,26],[yt(-Math.PI,{spine:[s?.85:.55,0,0],chest:[.2,0,0],neck:[s?-.9:-.5,0,0],hipR:[s?1.85:1.4,0,0],knR:[.04,0,0],hipL:[-.15,0,0],knL:[.25,0,0]}),.22,30,s?"head":"body"],[yt(-4.4,{hipR:[-.9,0,0],knR:[1.8,0,0]}),.1,18],[yt(-5.6),.07,18],[oa,.08,16]],O1=[[yt(-1.7,{neck:[.1,1.2,0]}),.08,24],[yt(-3.1,{hips:[0,-3.1,.25],hipR:[.1,0,-1],knR:[.7,0,0],neck:[0,1,0]}),.08,24],[yt(-4.5,{hips:[0,-4.5,.5],spine:[0,0,.2],hipR:[-.1,0,-1.85],knR:[.04,0,0],hipL:[0,0,.1],knL:[.25,0,0]}),.14,28,"hook"],[yt(-5.5,{hipR:[.1,0,-.6],knR:[.6,0,0]}),.09,18],[oa,.1,16]],U1=s=>{let e=s?{hipsPos:[0,.3,.1],hipL:[-1,0,0],knL:[1.6,0,0],hipR:[-.6,0,0],knR:[1.4,0,0]}:{};return[[yt(-1.8,{neck:[.1,1.2,0],hipsPos:[0,s?-.18:-.05,0]}),.08,24],[yt(-3.2,{...e,neck:[0,1,0],shR:[-.6,0,-.9],elR:[-1.2,0,0]}),.07,26],[yt(-4.6,{...e,shR:[-.1,0,-1.55],elR:[-.1,0,0],chest:[0,-.2,0]}),.16,30,"hook"],[yt(-5.7),.08,18],[oa,.08,16]]},B1=[[yt(-1.8,{neck:[.1,1.2,0]}),.08,24],[yt(-3.3,{neck:[0,1,0],shR:[-.2,0,-1.2],elR:[-2.4,0,0]}),.07,26],[yt(-4.3,{shR:[-.15,.4,-1.5],elR:[-2.55,0,0],chest:[.1,-.25,0]}),.16,30,"hook"],[yt(-5.6),.08,18],[oa,.08,16]],F1=[[yt(-1.6,{hipsPos:[0,-.15,0],knL:[.7,0,0],knR:[.7,0,0]}),.08,22],[yt(-3,{hipsPos:[0,.3,.1],hipL:[-1.3,0,.1],knL:[1.9,0,0],hipR:[-.3,0,0],knR:[1,0,0]}),.08,24],[yt(-4.5,{hipsPos:[0,.42,.15],hipL:[-1,0,.1],knL:[1.9,0,0],hipR:[-1.2,0,-.9],knR:[.5,0,0]}),.08,24],[yt(-5.9,{hipsPos:[0,.38,.2],spine:[-.15,0,.2],hipL:[-.6,0,.1],knL:[1.8,0,0],hipR:[-2.1,0,-.55],knR:[.04,0,0]}),.14,28,"hook"],[yt(-6.5,{hipsPos:[0,.05,0],hipR:[-.6,0,0],knR:[.8,0,0]}),.1,18],[oa,.08,16]],Qo=(s,e={})=>X(null,{hips:[0,-1.57,s],...e}),H1=[[X(Me,{hips:[0,-1.4,0],hipsPos:[0,-.12,0],shL:[-2.9,0,.2],shR:[-2.9,0,-.2],elL:[-.1,0,0],elR:[-.1,0,0]}),.1,18],[Qo(-1.5,{hipsPos:[0,-.05,0],shL:[0,0,2.9],shR:[0,0,-2.9],hipL:[0,0,.6],hipR:[0,0,-.9]}),.1,22],[Qo(-3.1,{hipsPos:[0,.05,0],shL:[0,0,2.95],shR:[0,0,-2.95],hipL:[0,0,1],hipR:[0,0,-1]}),.1,22],[Qo(-4.3,{hipsPos:[0,.05,0],shL:[0,0,2.2],shR:[0,0,-2.6],hipL:[0,0,1.25],knL:[.04,0,0],hipR:[0,0,-.5]}),.16,28,"head"],[Qo(-5.6,{hipsPos:[0,-.15,0],hipL:[0,0,.5],knL:[.6,0,0],shL:[-1,0,.6],shR:[-1,0,-.6]}),.1,18],[X(Me,{hips:[0,-.45,-Math.PI*2]}),.1,16]],el=(s,e={})=>X(null,{hips:[s,-.2,0],...e}),z1=[[X(Me,{hipsPos:[0,-.2,0],spine:[.4,0,0],knL:[.8,0,0],knR:[.8,0,0]}),.1,18],[el(1.5,{hipsPos:[0,-.3,.1],shL:[-2.8,0,.3],shR:[-2.8,0,-.3],hipL:[.3,0,0],hipR:[.3,0,0]}),.1,22],[el(3,{hipsPos:[0,-.2,.2],shL:[-2.9,0,.3],shR:[-2.9,0,-.3],hipL:[-.3,0,.2],hipR:[.1,0,-.2]}),.1,22],[el(4.3,{hipsPos:[0,-.05,.3],hipR:[-.5,0,-.1],knR:[.04,0,0],hipL:[-1.4,0,.1],knL:[1.6,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.16,28,"head"],[el(5.6,{hipsPos:[0,-.2,.2],hipL:[-.4,0,0],knL:[.8,0,0],hipR:[-.6,0,0],knR:[.9,0,0]}),.1,18],[X(Me,{hips:[Math.PI*2,-.45,0]}),.1,16]],G1=[[X(Me,{hipsPos:[0,-.1,0],hipR:[-1.2,.2,0],knR:[1.5,0,0],shR:[.2,0,-.3],elR:[-1.4,0,0]}),.12,20],[X(Wc,{hipsPos:[0,.22,.2],spine:[.35,.35,0],chest:[.15,.5,0],hipR:[.8,.3,-.1],knR:[.7,0,0],hipL:[-.4,0,.1],knL:[.9,0,0]}),.2,26,"head"]],_0=s=>[[X(Me,{hips:[0,-.1,0],spine:[-.05,0,0],chest:[0,0,0],hipR:[-1.7,0,0],knR:[2,0,0]}),.1,22],[X(Me,{hips:[s?-.3:-.12,-.05,0],spine:[s?-.15:0,0,0],chest:[0,0,0],hipR:[s?-2.25:-1.55,0,0],knR:[.03,0,0],hipL:[.15,0,.05],knL:[.15,0,0]}),.2,28,s?"head":"body"]],V1=[[X(Me,{hipL:[-1.6,0,0],knL:[1.9,0,0],hipsPos:[0,-.05,0]}),.1,22],[X(Me,{hips:[-.12,-.35,0],hipL:[-1.55,0,0],knL:[.03,0,0],hipR:[.2,.35,-.1],knR:[.1,0,0]}),.2,28,"body"]],W1=[[X(Me,{hipL:[-.9,0,.1],knL:[1.3,0,0]}),.09,22],[X(Me,{hips:[-.1,-.2,0],hipL:[-.75,-.6,.1],knL:[.04,0,0],spine:[0,0,0]}),.18,28,"leg"]],j1=[[X(Me,{hips:[-.3,-.2,0],spine:[-.15,0,0],hipR:[-2.85,0,-.35],knR:[.1,0,0],hipL:[.15,0,0],knL:[.1,0,0]}),.2,14],[X(Me,{hips:[.15,-.2,0],spine:[.35,0,0],hipR:[-1.1,0,0],knR:[.04,0,0]}),.18,26,"head"]],$1=[[X(Me,{hips:[0,-.9,-.35],hipL:[-1.3,0,.5],knL:[1.7,0,0],spine:[0,0,-.2]}),.1,22],[X(Me,{hips:[0,-1.1,-.45],hipL:[-1,0,1.75],knL:[.04,0,0],spine:[0,0,-.25]}),.08,26],[X(Me,{hips:[0,-.8,-.45],hipL:[-1.5,0,1.55],knL:[1.3,0,0],spine:[0,0,-.25]}),.16,26,"hook"]],X1=[[X(Me,{hips:[0,.35,0],hipR:[-.5,.6,-.45],knR:[1.3,0,0]}),.12,20],[X(tl,{hips:[0,.95,-.55],hipR:[-.55,.85,-2.1],knR:[1.1,0,0]}),.08,22],[X(il,{hips:[0,.9,-.55],hipR:[-.45,.85,-2.25],knR:[.04,0,0]}),.22,30,"hook"]],b0=X(aa(Me),{hipsPos:[0,-.04,0]}),M0=s=>[[s?X(b0,{hipsPos:[0,-.2,0],knL:[.9,0,0],knR:[.9,0,0]}):b0,.1,22],[s?X(aa(il),{hipsPos:[0,.35,.1],hipR:[-1.2,0,0],knR:[1.8,0,0]}):aa(tl),.24,24,s?"hook":"body"]],Y1=[[X(Me,{hipsPos:[0,.2,.1],hipL:[-1.4,0,0],knL:[1.6,0,0],shL:[-.6,0,.5],elL:[-1,0,0]}),.14,18],[X(il,{hipsPos:[0,.5,.2],hipL:[.5,0,.1],knL:[1.2,0,0]}),.24,26,"hook"]];function nl(s,e=1,t=!1,i=null){let n=String(s||"").toLowerCase();if(t)return q1(n,e,i||Xe.top);let r=[v0,.14,26,"head"],a=[Wc,.18,26,"head"],o=[b1,.18,24,"hook"],l=[Me,.06,26];if(n.includes("spinning back kick"))return{frames:D1(!n.includes("body")),fwd:.25};if(n.includes("spinning heel kick"))return{frames:O1,fwd:.15};if(n.includes("spinning back elbow"))return{frames:B1,fwd:.3};if(n.includes("spinning back fist")||n.includes("spinning"))return{frames:U1(n.includes("jumping")),fwd:n.includes("jumping")?.45:.2};if(n.includes("tornado"))return{frames:F1,fwd:.3,lungeFor:.5};if(n.includes("cartwheel"))return{frames:H1,fwd:.55,lungeFor:.7};if(n.includes("rolling thunder"))return{frames:z1,fwd:.6,lungeFor:.7};if(n.includes("superman"))return{frames:G1,fwd:.6,lungeFor:.4};if(n.includes("front kick to the face"))return{frames:_0(!0),fwd:.1};if(n.includes("front kick"))return{frames:_0(!1),fwd:.1};if(n.includes("teep"))return{frames:V1,fwd:.05};if(n.includes("oblique"))return{frames:W1,fwd:.05};if(n.includes("axe kick"))return{frames:j1,fwd:.1};if(n.includes("hook kick"))return{frames:$1,fwd:.1};if(n.includes("question mark"))return{frames:X1,fwd:.1};if(n.includes("showtime"))return{frames:Y1,fwd:.5,lungeFor:.45};if(n.includes("jumping switch kick"))return{frames:M0(!0),fwd:.35,lungeFor:.4};if(n.includes("switch kick"))return{frames:M0(!1),fwd:.1};if(n.includes("head kick"))return{frames:[[Hc,.12,16],[il,.3,20,"hook"]],fwd:.1};if(n.includes("body kick"))return{frames:[[Hc,.12,16],[tl,.3,20,"body"]],fwd:.1};if(n.includes("leg kick")||n.includes("calf kick"))return{frames:[[Hc,.1,16],[E1,.26,20,"leg"]]};if(n.includes("flying knee"))return{frames:[[X(Me,{hipsPos:[0,-.2,0]}),.15,16],[R1,.35,16,"head"]],fwd:.55};if(n.includes("knee"))return{frames:[[Li,.2,14],[L0,.24,20,"body"]],fwd:.35};if(n.includes("uppercut"))return{frames:[[M1,.14,18],[w1,.22,24,"head"]],fwd:.15};if(n.includes("overhand")||n.includes("right hand"))return{frames:[[S1,.16,16],[T1,.24,24,"head"]],fwd:.3};if(n.includes("1-2"))return{frames:[r,l,a,l,[y0,.08,20],o],fwd:.2};if(n.includes("hook"))return{frames:[[y0,.12,18],o],fwd:.15};if(n.includes("straight left"))return{frames:[[aa(Wc),.2,24,"head"]],fwd:.25};if(n.includes("jab")&&!n.includes("cross")&&e<2)return{frames:[[v0,.16,28,"head"]],fwd:.15};let h=[r,l,a];for(let c=2;c<Math.min(e,5);c++)h.push(l,c%2?o:a);return{frames:h,fwd:.25}}function q1(s,e,t){let i=t===Xe.sideTop,n=t===Xe.backTop,r,a;if(n)r=Qe(t,{chest:[0,-.3,0]}),Object.assign(r,X(r,{shR:[-1,0,-1.3],elR:[-1.5,0,0]})),a=Qe(t,{chest:[.1,.35,0]}),Object.assign(a,X(a,{shR:[-1.6,0,-.15],elR:[-.3,0,0]}));else{if(i||s.includes("elbow"))return r=X(Qe(t,{spine:[-.25,0,0]}),{shR:[-2.9,0,-.5],elR:[-2.6,0,0]}),a=X(Qe(t,{spine:[.25,0,0],chest:[.15,.3,0]}),{shR:[-1.3,0,-.3],elR:[-2.6,0,0]}),{frames:[[r,.2,14],[a,.16,26,"ground"]]};r=X(Qe(t,{spine:[-.35,0,0]}),{shR:[-2.6,0,-.3],elR:[-1.6,0,0]}),a=X(Qe(t,{spine:[.3,0,0],chest:[.15,.25,0]}),{shR:[-1.05,0,-.1],elR:[-.1,0,0]})}let o=[];for(let l=0;l<Math.min(Math.max(e,1),4);l++){let h=l%2===1;o.push([x0(r,h),.13,18],[x0(a,h),.12,28,"ground"])}return{frames:o}}function J1(s,e=1){let t=e;switch(s){case"body":return{chest:[.45*t,0,0],spine:[.25*t,0,0],neck:[.2*t,0,0],hipsPos:[0,-.05*t,-.08*t]};case"leg":return{knL:[.6*t,0,0],hipL:[.2*t,0,0],hipsPos:[0,-.07*t,0]};case"ground":return{neck:[0,.7*t,0],chest:[0,.2*t,0]};case"hook":return{neck:[-.15*t,.75*t,.25*t],chest:[-.1*t,.25*t,0],hipsPos:[0,0,-.05*t]};default:return{neck:[-.6*t,.15*t,0],chest:[-.28*t,0,0],spine:[-.12*t,0,0],hipsPos:[0,0,-.1*t]}}}Object.assign(Xe,{halfTop:X(P1,{hipsPos:[0,-.5,.05],spine:[.85,.2,0],chest:[.25,0,0],neck:[-.4,0,0],shL:[-1.4,0,.5],elL:[-.9,0,0],shR:[-1,0,-.6],elR:[-1.3,0,0],hipL:[-.3,0,.35],knL:[1.8,0,0],hipR:[.1,0,-.25],knR:[1.5,0,0]}),halfBottom:X(P0,{hips:[-1.42,.35,.15],shL:[-1.7,0,.4],elL:[-1.6,0,0],shR:[-1.2,0,-.2],elR:[-2,0,0],hipL:[-.9,0,.35],knL:[1.7,0,0],hipR:[-.5,0,-.2],knR:[1.5,0,0]}),mountTop:X(null,{hipsPos:[0,-.52,0],spine:[.15,0,0],chest:[.05,0,0],neck:[.15,0,0],shL:[-.9,0,.35],elL:[-1.2,0,0],shR:[-.9,0,-.35],elR:[-1.2,0,0],hipL:[-.4,0,.62],knL:[1.7,0,0],hipR:[-.4,0,-.62],knR:[1.7,0,0]}),mountBottom:X(null,{hipsPos:[0,-.83,0],hips:[-1.52,0,0],neck:[.45,0,0],shL:[-1.8,0,.25],elL:[-1.9,0,0],shR:[-1.8,0,-.25],elR:[-1.9,0,0],hipL:[-.7,0,.25],knL:[1.4,0,0],hipR:[-.7,0,-.25],knR:[1.4,0,0]}),sideTop:X(null,{hipsPos:[0,-.5,0],spine:[1.15,0,0],chest:[.3,0,0],neck:[-.6,0,0],shL:[-1,0,-.5],elL:[-1,0,0],shR:[-1.2,0,.4],elR:[-1.4,0,0],hipL:[-.1,0,.35],knL:[1.75,0,0],hipR:[.25,0,-.25],knR:[1.5,0,0]}),sideBottom:X(null,{hipsPos:[0,-.83,0],hips:[-1.5,.2,0],neck:[.4,.4,0],shL:[-1.9,0,-.2],elL:[-2.2,0,0],shR:[-1.6,0,-.3],elR:[-1.8,0,0],hipL:[-.9,0,.2],knL:[1.6,0,0],hipR:[-.5,0,-.2],knR:[1.2,0,0]}),backTop:X(null,{hipsPos:[0,-.75,0],hips:[-.55,0,0],spine:[.4,0,0],chest:[.2,0,0],neck:[.1,0,0],shL:[-1.5,0,-.35],elL:[-1.7,0,0],shR:[-1.5,0,.35],elR:[-1.7,0,0],hipL:[-1,0,.6],knL:[1.2,0,0],hipR:[-1,0,-.6],knR:[1.2,0,0]}),backBottom:X(null,{hipsPos:[0,-.78,0],hips:[-.3,0,0],spine:[.15,0,0],neck:[.1,0,0],shL:[-1.9,0,-.3],elL:[-1.9,0,0],shR:[-1.9,0,.3],elR:[-1.9,0,0],hipL:[-1.2,0,.15],knL:[1,0,0],hipR:[-1.2,0,-.15],knR:[1,0,0]}),headlockTop:X(null,{hipsPos:[0,-.32,0],hips:[.3,0,0],spine:[.55,0,0],chest:[.2,0,0],neck:[-.5,0,0],shL:[-1,0,-.45],elL:[-1.7,0,0],shR:[-1,0,.45],elR:[-1.7,0,0],hipL:[-1.3,0,.25],knL:[1.75,0,0],hipR:[.4,0,-.2],knR:[1.65,0,0]}),headlockBottom:X(null,{hipsPos:[0,-.5,0],hips:[.2,0,0],spine:[1.05,0,0],chest:[.25,0,0],neck:[-.2,0,0],shL:[-1.1,0,.2],elL:[-1.2,0,0],shR:[-1.1,0,-.2],elR:[-1.2,0,0],hipL:[-.25,0,.15],knL:[1.75,0,0],hipR:[-.25,0,-.15],knR:[1.75,0,0]}),legsTop:X(null,{hipsPos:[0,-.78,0],hips:[-.45,0,0],spine:[.2,0,0],neck:[.2,0,0],shL:[.5,0,.4],elL:[-.3,0,0],shR:[.5,0,-.4],elR:[-.3,0,0],hipL:[-.9,0,.4],knL:[1.7,0,0],hipR:[-1.15,0,-.05],knR:[.05,0,0]}),legsBottom:X(null,{hipsPos:[0,-.8,0],hips:[-1.35,.3,0],neck:[.5,0,0],shL:[-1.2,0,-.4],elL:[-2,0,0],shR:[-1.2,0,.4],elR:[-2,0,0],hipL:[-1.3,0,.6],knL:[1.2,0,0],hipR:[-.9,0,-.2],knR:[1.5,0,0]}),armbarTop:X(null,{hipsPos:[0,-.82,0],hips:[-1.45,0,0],neck:[.5,0,0],shL:[-1.3,0,-.3],elL:[-1.3,0,0],shR:[-1.3,0,.3],elR:[-1.3,0,0],hipL:[-.75,0,.25],knL:[.35,0,0],hipR:[-.75,0,-.25],knR:[.35,0,0]})});Xe.armbarBottom=X(Xe.mountBottom,{shL:[-1.6,0,.5],elL:[-.05,0,0],shR:[-1.6,0,-.4],elR:[-1.2,0,0],hipL:[-.2,0,.2],knL:[.4,0,0]});var qc={guard:["top","bottom"],half:["halfTop","halfBottom"],side:["sideTop","sideBottom"],mount:["mountTop","mountBottom"],back:["backTop","backBottom"],headlock:["headlockTop","headlockBottom"],legs:["legsTop","legsBottom"],armbar:["armbarTop","armbarBottom"]};function ii(s,e,t,i,n){return Xe[s+"Att"]=e,Xe[s+"Def"]=i,{att:[[e,.3,8],[t,.35,6],[e,.25,8],[t,.45,6]],def:[[i,.3,9],[n,.3,9],[i,.3,9],[n,.35,9]],attHold:s+"Att",defHold:s+"Def"}}var ft=(s,e)=>X(Xe[s],e),jt={rnc:(()=>{let s=ft("backTop",{shR:[-1.5,0,.75],elR:[-2.2,0,0],shL:[-1.7,0,-.45],elL:[-2.4,0,0],neck:[.3,-.4,0]}),e=ft("backBottom",{shL:[-2.4,0,-.6],elL:[-1.6,0,0],shR:[-2.4,0,.6],elR:[-1.6,0,0],neck:[-.4,0,0]});return{layout:"back",...ii("rnc",s,Qe(s,{hips:[-.2,0,0],spine:[-.2,0,0]}),e,Qe(e,{neck:[-.2,0,0],hipL:[.5,0,0],knL:[-.6,0,0]}))}})(),armTriangle:(()=>{let s=ft("sideTop",{spine:[1.35,0,0],neck:[.4,0,0],shL:[-1.3,0,-.7],elL:[-2.1,0,0],shR:[-1.3,0,.7],elR:[-2.1,0,0]}),e=ft("sideBottom",{shL:[-2.9,0,-.6],elL:[-.4,0,0],shR:[-1.5,0,-.3],elR:[-1.2,0,0],neck:[.3,.6,0]});return{layout:"side",...ii("armTri",s,Qe(s,{hipsPos:[0,-.05,0],hipL:[-.4,0,0],hipR:[-.3,0,0]}),e,Qe(e,{hipL:[.4,0,0],neck:[-.2,0,0]}))}})(),kimuraTop:(()=>{let s=ft("sideTop",{spine:[.8,0,0],shL:[-1,0,-.2],elL:[-1.6,0,0],shR:[-1,0,.4],elR:[-1.6,0,0]}),e=ft("sideBottom",{shL:[-.6,0,1.3],elL:[-1.8,0,0]});return{layout:"side",...ii("kimT",s,Qe(s,{chest:[0,.4,0],spine:[-.2,0,0]}),e,X(e,{shL:[.3,0,1.4],hips:[-1.5,-.3,0]}))}})(),americana:(()=>{let s=ft("sideTop",{spine:[1.1,0,0],shL:[-1.4,0,-.2],elL:[-.6,0,0],shR:[-1.4,0,.3],elR:[-.8,0,0]}),e=ft("sideBottom",{shL:[-.2,0,1.5],elL:[-1.6,0,0]});return{layout:"side",...ii("amer",s,Qe(s,{spine:[.15,0,0],chest:[0,.25,0]}),e,X(e,{shL:[0,0,1.75]}))}})(),darce:(()=>{let s=ft("headlockTop",{hips:[.3,.5,0],spine:[1,0,0],shL:[-1.2,0,-.6],elL:[-2,0,0],shR:[-1.2,0,.6],elR:[-2,0,0]}),e=ft("headlockBottom",{shL:[-2.6,0,-.4],elL:[-.8,0,0],neck:[.2,.4,0]});return{layout:"headlock",...ii("darce",s,Qe(s,{chest:[-.2,.4,0],hipsPos:[0,-.1,0]}),e,Qe(e,{spine:[.2,0,0]}))}})(),guillotineTop:(()=>{let s=ft("headlockTop",{hipsPos:[0,-.15,0],spine:[.5,0,0],shL:[-1,0,-.6],elL:[-2.1,0,0],shR:[-1,0,.6],elR:[-2.1,0,0]}),e=ft("headlockBottom",{spine:[.8,0,0],neck:[-.2,0,0],shL:[-1.6,0,-.4],elL:[-1.6,0,0],shR:[-1.6,0,.4],elR:[-1.6,0,0]});return{layout:"headlock",...ii("guilT",s,Qe(s,{hips:[-.35,0,0],spine:[-.3,0,0],hipsPos:[0,.08,0]}),e,Qe(e,{spine:[-.2,0,0],hipsPos:[0,.08,0]}))}})(),armbarTop:(()=>{let s=Xe.armbarTop,e=Xe.armbarBottom;return{layout:"armbar",...ii("abT",s,Qe(s,{hips:[-.15,0,0],hipsPos:[0,.05,0],neck:[.2,0,0]}),e,Qe(e,{hips:[0,.2,0],knR:[.5,0,0]}))}})(),triangle:(()=>{let s=ft("bottom",{hips:[-1.35,0,0],hipL:[-1.85,0,.35],knL:[1.75,0,0],hipR:[-1.6,0,-.3],knR:[1.3,0,0],shL:[-1.9,0,-.1],elL:[-1.2,0,0],shR:[-1.9,0,.1],elR:[-1.2,0,0]}),e=ft("top",{hipsPos:[0,-.42,0],spine:[.95,0,0],chest:[.3,0,0],neck:[.5,0,0],shL:[-.6,0,.3],elL:[-1.2,0,0],shR:[-1.3,0,-.4],elR:[-.2,0,0]});return{layout:"guard",...ii("tri",s,Qe(s,{hipL:[-.2,0,0],knL:[.15,0,0],hips:[.15,0,0]}),e,Qe(e,{spine:[-.25,0,0],neck:[-.2,0,0]}))}})(),armbarBottom:(()=>{let s=ft("bottom",{hips:[-1.4,.6,0],hipL:[-2.2,0,.35],knL:[.6,0,0],hipR:[-1.3,0,-.5],knR:[1.6,0,0],shL:[-1.6,0,.2],elL:[-.8,0,0],shR:[-1.6,0,-.2],elR:[-.8,0,0]}),e=ft("top",{spine:[.5,0,0],neck:[.3,0,0],shR:[-1.4,0,0],elR:[0,0,0]});return{layout:"guard",...ii("abB",s,Qe(s,{hips:[-.15,0,0],hipsPos:[0,.08,0]}),e,Qe(e,{spine:[.4,0,0]}))}})(),guillotineBottom:(()=>{let s=ft("bottom",{hips:[-1.2,0,0],spine:[.3,0,0],neck:[.4,0,0],shL:[-1.4,0,-.6],elL:[-2.1,0,0],shR:[-1.4,0,.6],elR:[-2.1,0,0],hipL:[-1.2,0,.5],knL:[1.5,0,0],hipR:[-1.2,0,-.5],knR:[1.5,0,0]}),e=ft("top",{hipsPos:[0,-.48,0],spine:[1.1,0,0],chest:[.35,0,0],neck:[.5,0,0],shL:[-1.2,0,.1],elL:[-1.6,0,0],shR:[-1.2,0,-.1],elR:[-1.6,0,0]});return{layout:"guard",...ii("guilB",s,Qe(s,{hips:[-.25,0,0],spine:[-.4,0,0]}),e,Qe(e,{spine:[.15,0,0]}))}})(),kimuraBottom:(()=>{let s=ft("bottom",{hips:[-.8,.5,0],spine:[.3,0,0],shL:[-1.1,0,-.3],elL:[-1.7,0,0],shR:[-1.3,0,.4],elR:[-1.6,0,0]}),e=ft("top",{spine:[.8,0,0],hips:[0,0,.2],shR:[.6,0,-.9],elR:[-1.6,0,0]});return{layout:"guard",...ii("kimB",s,Qe(s,{hips:[-.4,.3,0]}),e,X(e,{shR:[.9,0,-1.1]}))}})(),omoplata:(()=>{let s=ft("bottom",{hips:[-.6,1,0],hipL:[-1.5,0,.8],knL:[1.7,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0],shL:[-1,0,-.4],elL:[-.6,0,0],shR:[-1,0,.3],elR:[-.6,0,0]}),e=ft("top",{hipsPos:[0,-.55,0],spine:[1.45,0,0],chest:[.2,0,0],neck:[.1,0,0],shR:[.9,0,-.5],elR:[-1.2,0,0],shL:[-1.4,0,.4],elL:[-.2,0,0]});return{layout:"guard",...ii("omo",s,Qe(s,{spine:[.5,0,0]}),e,X(e,{shR:[1.3,0,-.6]}))}})(),heelHook:(()=>{let s=Xe.legsBottom,e=ft("legsTop",{hips:[-.7,0,0],shL:[-.3,0,.9],elL:[-.4,0,0]});return{layout:"legs",...ii("hh",s,Qe(s,{hips:[0,-.6,0]}),e,Qe(e,{hips:[-.3,0,0],shR:[-1.8,0,0]}))}})()};function k0(s,e){let t=String(s||"").toLowerCase();return t.includes("rear-naked")?jt.rnc:t.includes("arm-triangle")?jt.armTriangle:t.includes("d'arce")||t.includes("darce")?jt.darce:t.includes("americana")?jt.americana:t.includes("heel hook")?jt.heelHook:t.includes("omoplata")?jt.omoplata:t.includes("triangle")?jt.triangle:t.includes("armbar")?e?jt.armbarBottom:jt.armbarTop:t.includes("guillotine")?e?jt.guillotineBottom:jt.guillotineTop:t.includes("kimura")?e?jt.kimuraBottom:jt.kimuraTop:e?jt.triangle:jt.rnc}var sr=X(null,{hipsPos:[0,-.45,-.1],hips:[-.9,0,0],neck:[.5,0,0],shL:[-1.6,0,.7],elL:[-.4,0,0],shR:[-1.6,0,-.7],elR:[-.4,0,0],hipL:[-.9,0,.1],knL:[.6,0,0],hipR:[-.7,0,-.1],knR:[.5,0,0]}),Vc=X(Me,{hips:[0,0,0],hipsPos:[0,.03,0],spine:[-.3,0,0],chest:[-.2,0,0],neck:[.35,0,0],shL:[-1.4,0,.7],elL:[-.5,0,0],shR:[-1.4,0,-.7],elR:[-.5,0,0],hipL:[0,0,.04],knL:[.05,0,0],hipR:[0,0,-.04],knR:[.05,0,0]}),w0=X(ar,{hipsPos:[0,-.3,.2],spine:[.85,0,0],neck:[-.6,0,0],shL:[-.9,0,-.35],elL:[-1.2,0,0],shR:[-.9,0,.35],elR:[-1.2,0,0],hipL:[-1,0,.1],knL:[1.3,0,0],hipR:[.7,0,-.1],knR:[.4,0,0]}),rr=X(Li,{hips:[0,0,0],shL:[-1.25,0,-.65],elL:[-1.5,0,0],shR:[-1.25,0,.65],elR:[-1.5,0,0],spine:[.25,0,0],neck:[.1,.6,0]}),S0=X(Li,{hips:[0,0,0],spine:[-.15,0,0],neck:[.3,-.5,0],shL:[-1.5,0,.5],elL:[-1.3,0,0],shR:[-1.5,0,-.5],elR:[-1.3,0,0]}),is=(s,e,t,i={})=>X(null,{hipsPos:[0,s,e],hips:[t,0,0],neck:[.3,0,0],shL:[-1.2,0,.6],elL:[-.6,0,0],shR:[-1.2,0,-.6],elR:[-.6,0,0],hipL:[-.5,0,.15],knL:[.9,0,0],hipR:[-.2,0,-.15],knR:[.5,0,0],...i}),Cn={"double-leg":{att:[[X(Me,{hipsPos:[0,-.22,0]}),.1,18],[ar,.3,14],[w0,.4,10]],def:[[Me,.32,9],[Vc,.3,12],[sr,.3,9]],mat:.85,fwd:.6,dFwd:.1},"reactive takedown":{att:[[ar,.25,18],[w0,.35,12]],def:[[X(Me,{hips:[0,.4,0],hipR:[-.6,.6,-.6],knR:[1,0,0]}),.22,14],[Vc,.25,12],[sr,.3,9]],mat:.7,fwd:.65,dFwd:.05},"single-leg":{att:[[ar,.3,14],[X(Me,{hips:[0,.3,0],hipsPos:[0,-.2,0],spine:[.55,0,0],neck:[-.3,0,0],shL:[-.9,0,-.5],elL:[-1.4,0,0],shR:[-.9,0,.2],elR:[-1.4,0,0]}),.7,9]],def:[[Me,.28,9],[X(Me,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.06,0],spine:[-.15,0,0],shL:[-.4,0,1.2],shR:[-.4,0,-1.2]}),.18,14],[X(Me,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.55,0,0],hipsPos:[0,-.04,0],spine:[-.1,0,0],shL:[-.6,0,1],shR:[-.6,0,-1]}),.16,14],[X(Me,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.08,0],spine:[-.2,0,0],shL:[-.4,0,1.3],shR:[-.4,0,-1.3]}),.16,14],[sr,.3,9]],mat:1.1,fwd:.55,dFwd:.1},"body lock":{att:[[Li,.25,12],[rr,.4,10],[X(rr,{hipR:[-.5,.3,.45],knR:[.1,0,0],spine:[.5,0,0]}),.3,12]],def:[[Li,.3,12],[S0,.35,10],[sr,.3,9]],mat:.95,fwd:.35,dFwd:.3},trip:{att:[[Li,.3,12],[X(rr,{hipR:[-.6,.4,.5],knR:[.1,0,0],spine:[.4,.3,0]}),.35,12]],def:[[Li,.3,12],[X(S0,{hipL:[-.6,0,.3],knL:[.1,0,0]}),.25,12],[sr,.3,9]],mat:.8,fwd:.35,dFwd:.3},"ankle pick":{att:[[X(Me,{hipsPos:[0,-.3,0],spine:[.7,0,0],neck:[-.5,0,0],shL:[-.7,0,.1],elL:[-.2,0,0],shR:[-1.5,0,-.2],elR:[-.6,0,0],knL:[1,0,0],knR:[.9,0,0]}),.35,14],[X(Me,{hipsPos:[0,-.25,0],spine:[.35,0,0],shL:[.3,0,.2],elL:[-.3,0,0],shR:[-1.6,0,-.1],elR:[-.1,0,0]}),.3,12]],def:[[Me,.3,9],[X(Me,{hips:[0,0,0],hipL:[-.9,0,0],knL:[.1,0,0],spine:[-.4,0,0],neck:[.3,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.22,14],[sr,.3,9]],mat:.8,fwd:.45,dFwd:.15},suplex:{att:[[Li,.25,12],[X(rr,{hipsPos:[0,-.18,0],knL:[.8,0,0],knR:[.8,0,0]}),.25,12],[X(rr,{hipsPos:[0,-.05,0],hips:[-.5,0,0],spine:[-.35,0,0],neck:[-.4,0,0],shL:[-2.3,0,-.4],shR:[-2.3,0,.4]}),.25,12],[X(rr,{hipsPos:[0,-.4,-.1],hips:[-1.2,0,0],spine:[-.4,0,0],neck:[-.5,0,0],shL:[-2.8,0,-.3],shR:[-2.8,0,.3]}),.25,12]],def:[[Li,.28,12],[is(.12,.1,.1),.22,12],[is(.55,.45,.9),.22,12],[is(.2,.95,2.2,{neck:[.6,0,0]}),.22,12]],mat:.95,fwd:.35,dFwd:.35,big:!0},slam:{att:[[X(ar,{hipsPos:[0,-.3,.1]}),.25,14],[X(Me,{hips:[0,0,0],hipsPos:[0,0,0],spine:[-.1,0,0],neck:[-.2,0,0],shL:[-2.4,0,.3],elL:[-1,0,0],shR:[-2.4,0,-.3],elR:[-1,0,0],hipL:[0,0,.1],knL:[.1,0,0],hipR:[0,0,-.1],knR:[.1,0,0]}),.4,8],[X(Me,{hips:[0,0,0],hipsPos:[0,-.35,.1],spine:[.95,0,0],shL:[-1.4,0,.2],elL:[-.4,0,0],shR:[-1.4,0,-.2],elR:[-.4,0,0],knL:[1.1,0,0],knR:[1.1,0,0]}),.25,18]],def:[[Vc,.25,12],[is(.6,.35,-1.35,{hipL:[-.7,0,.2],knL:[1.2,0,0],hipR:[-.3,0,-.2],knR:[.6,0,0],shL:[-2,0,.8],shR:[-2,0,-.8]}),.4,7],[is(-.6,.35,-1.5),.25,22]],mat:.85,fwd:.55,dFwd:.15,big:!0},"judo throw":{att:[[X(Li,{hips:[0,-1.6,0],neck:[0,1,0]}),.2,14],[X(Me,{hips:[0,-2.9,0],hipsPos:[0,-.18,0],spine:[.35,0,0],neck:[0,.9,0],shL:[-1.4,0,.3],elL:[-.8,0,0],shR:[-1,0,-.5],elR:[-1.4,0,0],knL:[.6,0,0],knR:[.6,0,0]}),.25,14],[X(Me,{hips:[0,-3,0],hipsPos:[0,-.25,0],spine:[1.1,0,0],chest:[.3,0,0],shL:[-.6,0,.6],shR:[-.8,0,-.6],knL:[.7,0,0],knR:[.4,0,0]}),.3,12]],def:[[Li,.3,12],[is(.35,.35,.4,{hips:[.4,0,1.2]}),.25,12],[is(.1,.7,.2,{hips:[.2,0,2.6]}),.22,12]],mat:.85,fwd:.3,dFwd:.35,big:!0}};Cn.shoot=Cn["double-leg"];function I0(s,e=""){let t=String(s||"").toLowerCase();if(Cn[t])return Cn[t];let i=String(e).toLowerCase();for(let n of Object.keys(Cn))if(i.includes(n.split(" ")[0]))return Cn[n];return i.includes("slams")?Cn.slam:Cn["double-leg"]}function Jc(s){let e=Xe[s]||Xe.top;return[[Qe(e,{spine:[.15,.2,0],shL:[-.25,0,.2],shR:[.2,0,-.1],hipL:[.1,0,.1]}),.45,6]]}var Xt={slip:[[A1,.25,22]],shoot:[[X(Me,{hipsPos:[0,-.22,0]}),.1,18],[ar,.45,12]],sprawl:[[C1,.55,14]],touch:[[L1,.5,8]],refuse:[[X(Me,{shR:[-1.1,0,-.5],elR:[-.4,0,0],neck:[.05,.35,0],chest:[0,-.15,0]}),.3,12],[X(Me,{shR:[-1,0,.3],elR:[-.3,0,0],neck:[.05,-.35,0],chest:[0,.15,0]}),.25,12],[X(Me,{neck:[.1,.3,0]}),.25,10],[X(Me,{neck:[.1,-.3,0]}),.25,10]],block:[[k1,.4,14]],getUp:[[Xe.sitting,.5,6],[X(Me,{hipsPos:[0,-.35,0],spine:[.6,0,0],knL:[1.2,0,0],knR:[1.2,0,0]}),.4,6]],rocked:[[X(Me,{hipsPos:[0,-.16,-.05],knL:[.85,0,0],knR:[.75,0,0],spine:[.1,0,.25],neck:[.25,.3,.3],shL:[-.3,0,.5],shR:[-.3,0,-.5]}),.55,7],[X(Me,{hipsPos:[0,-.12,0],spine:[.1,0,-.2],neck:[.3,-.2,-.2]}),.45,6]],celebrate:[[Xe.victory,.35,8],[X(Xe.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10],[Xe.victory,.35,8],[X(Xe.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10]],waveOff:[[X(Xe.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.3,10],[X(Xe.ref,{shL:[-1.55,0,.1],elL:[-.1,0,0],shR:[-1.55,0,-.1],elR:[-.1,0,0]}),.3,10],[X(Xe.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.4,10]],tap:s=>{let e=Xe[s]||Xe.bottom;return[[zc(e),.16,22],[Gc(e),.16,22],[zc(e),.16,22],[Gc(e),.16,22],[zc(e),.16,22],[Gc(e),.2,22]]}},jc={};function $t(s,e){return jc[s]||(jc[s]=e())}var sl=null;function N0(s){sl=s}function bt(s,e={}){return new ht({color:s,roughness:.62,metalness:.02,envMap:sl,envMapIntensity:.35,...e})}function ra(s){let e=s.clone();return e.setAttribute("color",new Pe(new Float32Array(s.attributes.position.count*3).fill(1),3)),e}var or=[.48,.24,.36],ns=[.86,.38,.36],T0=[.36,.2,.32],K1=[[.02,.07,.09,.032,.22,ns],[-.034,.022,.09,.028,.28,T0],[0,.005,.11,.018,.33,ns],[-.052,-.005,.08,.032,.4,or],[.034,.022,.09,.028,.55,T0],[.045,-.055,.07,.034,.6,or],[.052,-.005,.08,.032,.7,or],[0,-.045,.1,.02,.5,ns]],Z1=(s,e)=>[[.12*s,e+.06,.06,.08,.15,ns,"body"],[-.11*s,e-.06,.07,.07,.35,or,"body"],[-.12*s,e+.06,.06,.08,.5,ns,"body"],[.14*s,.68,.02,.09,.12,ns,"leg"],[.1*s,.42,-.02,.07,.4,or,"leg"],[.12*s,.72,.05,.07,.6,or,"leg"],[-.14*s,.68,.02,.08,.55,ns,"leg"]];function E0(s,e,t,i){let n=s.attributes.position.array,r=s.attributes.color,a=r.array,o=[1,1,1];for(let l=0,h=n.length/3;l<h;l++){let c=n[l*3],u=n[l*3+1],d=n[l*3+2];i&&i(c,u,d,o);let p=o[0],m=o[1],v=o[2];for(let[f,x,y,g,_,w,M]of e){let T=t(M);if(T<=_)continue;let P=((c-f)**2+(u-x)**2+(d-y)**2)/(g*g);if(P>=1)continue;let L=Math.min(.85,(T-_)/(1-_)*2.2)*(1-P)*(1-P);p+=(w[0]-p)*L,m+=(w[1]-m)*L,v+=(w[2]-v)*L}a[l*3]=p,a[l*3+1]=m,a[l*3+2]=v}r.needsUpdate=!0}function Q1(s){return new zo({color:s,roughness:.5,metalness:0,envMap:sl,envMapIntensity:.4,sheen:.5,sheenRoughness:.6,sheenColor:new Ee("#ff9c84"),clearcoat:.12,clearcoatRoughness:.55})}function Ze(s,e,t,i=0,n=0,r=0){let a=new pe(s,e);return a.position.set(i,n,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}var fi=class{constructor(e={}){let t=typeof e.look=="string"?an(e.look):e.look||Ln(e.name||"x");this.look=t;let i=e.weightClass??3,n={Wrestler:.05,"Jiu-Jitsu":.01,Striker:-.03}[e.style]||0,r=e.ref||e.casual,a=e.ref?.98:.9+i*.035+n,o=e.ref?1:.95+i*.016;this.width=a;let l=Q1(zt.skin[t.skin]);this.skinM=l,this.skinBase=l.color.clone();let h=bt(zt.hairColor[t.hairColor],{roughness:.9}),c=bt(r?e.pants||"#3c3f46":zt.shorts[t.shorts],{roughness:.75}),u=bt("#161616",{roughness:.42}),d=bt(e.glove||"#c8102e",{roughness:.5}),p=bt(e.shirt||"#17181c",{roughness:.8}),m=bt("#120d0b",{roughness:.4}),v=new it;this.root=v;let f=(re,q,W,ee)=>{let F=new $r;return F.position.set(q,W,ee),re.add(F),F},x=f(v,0,.95,0);this.hipsHome=.95;let y=f(x,0,.08,0),g=f(y,0,.18,0),_=f(g,0,.29,0),w=f(_,0,.12,.01),M={},T={};for(let re of["L","R"]){let q=re==="L"?1:-1,W=f(g,q*.19*a,.2,-.01);M["sh"+re]=W,M["el"+re]=f(W,0,-.27,0),M["hand"+re]=M["el"+re];let ee=f(x,q*.085*a,-.06,0);T["hip"+re]=ee,T["kn"+re]=f(ee,0,-.42,0)}this.j={hips:x,spine:y,chest:g,neck:_,...M,...T};let P=["hips","spine","chest","neck","head","shL","elL","shR","elR","hipL","knL","hipR","knR"],L={...this.j,head:w};for(let[re,q]of Object.entries(Oc))L[re].rotation.set(...q);v.updateMatrixWorld(!0);let I=e.ref?"ref":e.casual?"casual":"fighter",H=f0(L,P,a,I,{body:t.body,abs:t.abs,step:e.detail==="low"?.022:void 0}),A=new Po(P.map(re=>L[re])),U=(re,q)=>{let W=new Js(re,q);return W.castShadow=W.receiveShadow=!0,W.frustumCulled=!1,v.add(W),W.bind(A),W};l.vertexColors=!0,this.bodyMesh=U(ra(H.skin),l),H.shorts&&(c.side=jo,U(H.shorts,c)),H.shirt&&U(H.shirt,p),H.pants&&U(H.pants,c);let O=(re,q=0)=>re.localToWorld(new b(0,q,0));this.tattoos=g0({root:v,skeleton:A,skinGeo:H.skin,look:t,text:e.tattooText,envMap:sl,cacheKey:[a.toFixed(3),I,t.body,t.abs,e.detail||""].join("|"),frame:{width:a,chestY:O(g).y,axes:{tArmL:[O(M.shL),O(M.elL,-.24)],tArmR:[O(M.shR),O(M.elR,-.24)],tLegs:[O(T.hipL),O(T.knL,-.4)]}}});for(let re of Object.keys(Oc))L[re].rotation.set(0,0,0);v.scale.setScalar(o);let J=new pe(ra(m0()),l);this.faceMesh=J,this.bruiseBase={width:a,chestY:g.getWorldPosition(new b).y},J.castShadow=J.receiveShadow=!0,w.add(J),this.head=w,this.buildHead(w,l,h,m,t,e.ref);for(let re of["L","R"]){let q=M["el"+re];if(!r){Ze($t("glove",()=>new vt(.058,16,12)),u,q,0,-.27,.008).scale.set(.95,1.12,1.15);let ee=Ze($t("knuckle",()=>new di(.03,.05,4,10)),u,q,0,-.3,.035);ee.rotation.z=Math.PI/2;let F=Ze($t("band",()=>new _t(.046,.046,.05,14)),d,q,0,-.205,0);F.scale.z=1.05;let K=Ze($t("thumb",()=>ra(new di(.014,.035,4,8))),l,q,(re==="L"?-1:1)*.035,-.255,.035);K.rotation.x=.6}}for(let re of["L","R"]){if(!r)continue;let q=new lt(.085,.06,.22);q.translate(0,-.03,.05);let W=Ze(q,e.ref?m:bt(e.shoes||"#e8e8e8",{roughness:.7}),T["kn"+re],0,-.43,0);W.scale.x=a}this.cur=X(Xe[e.ref?"ref":e.casual?"relaxed":"stance"]),this.base=e.ref?"ref":e.casual?"relaxed":"stance",this.queue=null,this.offsets=[],this.time=Math.random()*10,this.walk=0,this.speed=0,this.lastPos=new b,r||this.buildBelt(a),this.setDamage(0,0,0),this.applyPose(this.cur)}buildBelt(e){let t=bt("#e8b93a",{roughness:.25,metalness:.85}),i=bt("#141414",{roughness:.6}),n=bt("#c8102e",{roughness:.2,metalness:.3}),r=(u,d,p,m,v)=>{let f=new it;f.position.set(d,p,m),u.add(f);let x=Ze($t(v?"beltPlate":"beltSide",()=>new _t(v?.085:.045,v?.085:.045,.018,v?20:12)),t,f);if(x.rotation.x=Math.PI/2,x.scale.set(1,1,v?.78:1),v){let y=Ze($t("beltGem",()=>new _t(.03,.03,.022,14)),n,f,0,0,.004);y.rotation.x=Math.PI/2,Ze($t("beltRim",()=>new pi(.075,.008,6,24)),t,f,0,0,.011).scale.set(1,.78,1)}return f},a=new it;a.position.y=.035,this.j.hips.add(a);let o=new _t(.172*e,.172*e,.075,24,1,!0);Ze(o,i,a).scale.z=.76,r(a,0,0,.172*e*.76+.006,!0);for(let u of[-1,1]){let d=r(a,u*.13*e,0,.09,!1);d.rotation.y=u*.85}let l=new it;l.position.set(0,.1,0),l.rotation.z=.55,this.j.chest.add(l);let h=new pi(.26,.024,6,30);h.scale(.66,1,1.6),Ze(h,i,l).rotation.y=Math.PI/2;let c=r(this.j.chest,-.02,.1,.125*e+.01,!0);c.rotation.z=.55,l.userData.plate=c,a.visible=l.visible=c.visible=!1,this.belt={waist:a,sash:l}}setDamage(e,t=this.bodyDamage||0,i=this.legDamage||0){if(e=Math.max(0,Math.min(1,e)),Math.abs(e-(this.damage||0))+Math.abs(t-(this.bodyDamage||0))+Math.abs(i-(this.legDamage||0))<.01&&this.wounds)return;if(this.damage=e,this.bodyDamage=t,this.legDamage=i,this.faceMesh){E0(this.faceMesh.geometry,K1,()=>e,(l,h,c,u)=>{let d=this.beardShade(l,h,c);if(!d)return u[0]=u[1]=u[2]=1;let p=this.beardColor,m=this.skinBase;u[0]=1+(Math.min(1,p.r/Math.max(.05,m.r))-1)*d,u[1]=1+(Math.min(1,p.g/Math.max(.05,m.g))-1)*d,u[2]=1+(Math.min(1,p.b/Math.max(.05,m.b))-1)*d});let o={body:t,leg:i};E0(this.bodyMesh.geometry,Z1(this.bruiseBase.width,this.bruiseBase.chestY),l=>o[l])}this.wounds||this.buildWounds();let r=this.wounds,a=(o,l)=>(o.visible=e>=l,o.visible);a(r.forehead,.22),a(r.foreheadDrip,.32),a(r.noseBlood,.3)&&(r.noseBlood.scale.y=.6+e),a(r.browCut,.42),a(r.cheekDrip,.48)&&(r.cheekDrip.scale.y=.5+e*.9),a(r.mouth,.55),a(r.browCut2,.72),a(r.swell,.35)&&r.swell.scale.set(.9+e*.4,.55+(e-.35)*.9,.45+e*.3);for(let[o,l]of r.chest.entries())a(l,.55+o*.1)&&(l.scale.y=.6+e);this.skinM&&(this.skinM.color.copy(this.skinBase).lerp(new Ee("#b5534a"),e*.1),this.skinM.roughness=.55-e*.12)}buildWounds(){let e=bt("#b3120f",{roughness:.22,metalness:.05,emissive:"#4a0000"}),t=bt("#d4201a",{roughness:.18,metalness:.05,emissive:"#5a0000"}),i=this.head,n=this.j.chest,r=(a,o,l,h,c,u,d,p=e,m=0)=>{let v=new _t(o/2,o/5,l,6,1);v.scale(1,1,h/o),v.translate(0,-l/2,0);let f=new pe(v,p);return f.position.set(c,u,d),f.rotation.z=m,f.visible=!1,a.add(f),f};this.wounds={forehead:r(i,.034,.006,.006,.015,.082,.088,t,.25),foreheadDrip:r(i,.006,.05,.005,.022,.08,.091),browCut:r(i,.026,.007,.006,.036,.06,.09,t,-.3),cheekDrip:r(i,.007,.07,.005,.045,.055,.084),browCut2:r(i,.024,.006,.006,-.034,.06,.09,t,.3),noseBlood:r(i,.007,.022,.004,.004,-.019,.108),mouth:r(i,.006,.03,.004,.012,-.048,.1),swell:(()=>{let a=new pe(ra(new vt(.016,14,10)),this.skinM),o=a.geometry.attributes.color.array;for(let l=0;l<o.length;l+=3)[o[l],o[l+1],o[l+2]]=[.72,.48,.6];return a.position.set(-.034,.036,.088),a.visible=!1,i.add(a),a})(),chest:[r(n,.006,.12,.003,.02,.27,.118),r(n,.005,.09,.003,-.03,.26,.115),r(n,.006,.15,.003,.06,.22,.104)]}}setInjured(e){if(e&&!this.bandage){let t=bt("#f4f1ea",{roughness:.9}),i=new it,n=new pe(new pi(.098,.016,6,24),t);n.rotation.x=Math.PI/2-.15,n.position.y=.06,n.scale.set(.95,1.05,1),i.add(n);let r=new pe(new lt(.05,.012,.01),t);r.position.set(0,.01,.105),i.add(r),this.head.add(i),this.bandage=i}this.bandage&&(this.bandage.visible=!!e),this.injured=!!e}setBelt(e){this.belt&&(this.belt.waist.visible=e==="waist",this.belt.sash.visible=this.belt.sash.userData.plate.visible=e==="shoulder")}buildHead(e,t,i,n,r,a){let o=bt("#f1ece4",{roughness:.25}),l=bt(["#3b2416","#2a1a10","#4a6b3a","#3a5a7a"][(r.skin+r.hair)%4],{roughness:.2}),h=bt("#050505",{roughness:.1}),c=bt(zt.hairColor[r.hairColor],{roughness:.9}),u=bt(new Ee(zt.skin[r.skin]).multiplyScalar(.72).getStyle(),{roughness:.45});for(let v of[-1,1]){Ze($t("eyeWhite",()=>new vt(.0118,14,10)),o,e,v*.034,.029,.083),Ze($t("iris",()=>new vt(.0062,12,8)),l,e,v*.034,.029,.0905).scale.z=.45,Ze($t("pupil",()=>new vt(.0032,8,6)),h,e,v*.034,.029,.0935).scale.z=.4;let f=Ze($t("lid",()=>ra(new vt(.0128,14,8,0,Math.PI*2,0,Math.PI*.42))),t,e,v*.034,.0305,.083);f.rotation.x=.35;let x=Ze($t("brow",()=>new di(.0045,.03,3,6)),c,e,v*.035,.056,.0985);x.rotation.z=Math.PI/2-v*.12}let d=Ze($t("lips",()=>new di(.006,.03,3,8)),u,e,0,-.041,.1);if(d.rotation.z=Math.PI/2,a){Ze(new vt(.104,18,12,0,Math.PI*2,0,Math.PI*.45),bt("#8d8d8d",{roughness:.9}),e,0,.03,-.004).scale.set(.95,1.12,1.05);return}let p=zt.hair[r.hair],m=v=>new vt(.105,18,12,0,Math.PI*2,0,Math.PI*v);if(p==="Buzz"||p==="Short"||p==="Man bun"||p==="Long"){let v=Ze(m(p==="Buzz"?.42:.48),i,e,0,.03,-.006);v.scale.set(p==="Buzz"?.94:.99,p==="Buzz"?1.12:1.2,p==="Buzz"?1.05:1.1),v.rotation.x=-.25}if(p==="Short"){let v=Ze(new lt(.15,.03,.05),i,e,0,.1,.06);v.rotation.x=-.4}if(p==="Mohawk"){let v=Ze(new lt(.04,.07,.2),i,e,0,.1,-.015);v.rotation.x=-.2,Ze(m(.4),bt(zt.hairColor[r.hairColor],{transparent:!0,opacity:.4,roughness:1}),e,0,.03,-.006).scale.set(.95,1.12,1.05)}if(p==="Man bun"&&Ze(new vt(.04,10,8),i,e,0,.1,-.1),p==="Long"){let v=Ze(new _t(.085,.06,.2,12,1,!1,Math.PI*.5,Math.PI),i,e,0,-.04,-.03);v.rotation.x=.1}if(p==="Afro"&&Ze(new vt(.13,20,16),i,e,0,.09,-.035).scale.set(1.12,.95,1),p==="Braids"){let v=Ze(m(.5),bt(zt.hairColor[r.hairColor],{transparent:!0,opacity:.35,roughness:1}),e,0,.03,-.006);v.scale.set(.94,1.13,1.04),v.rotation.x=-.3;let f=x=>new pi(x,.0125,6,28,Math.PI*1.05);for(let x of[-.066,-.044,-.022,0,.022,.044,.066]){let y=new it;y.position.set(x,.02,0),y.scale.set(1,1.12,1.02),y.rotation.x=-.45,e.add(y);let g=Ze(f(.1*Math.sqrt(Math.max(.2,1-(x/.095)**2))+.004),i,y);g.rotation.y=-Math.PI/2}}if(p==="Dreadlocks"){let v=Ze(m(.5),i,e,0,.03,-.006);v.scale.set(.99,1.2,1.1),v.rotation.x=-.25;let f=g=>$t("loc"+g,()=>{let _=new _t(.0125,.011,g,6,1);return _.translate(0,-g/2,0),_}),x=$t("loctip",()=>new vt(.0115,6,5)),y=(g,_,w,M,T)=>{let P=new it;P.position.set(Math.sin(g)*w*.95,_,Math.cos(g)*w*1.05-.006),P.rotation.y=g,e.add(P);let L=Ze(f(M),i,P);L.rotation.x=-T,Ze(x,i,L,0,-M,0)};for(let g=0;g<20;g++){let _=.95+g/19*(Math.PI*2-1.9),w=Math.abs(Math.cos(_))*(Math.cos(_)<0?1:0);y(_,.06,.098,w>.5?.24:.2,.22)}for(let g=0;g<14;g++){let _=.7+g/13*(Math.PI*2-1.4);y(_,.105,.08,.2,.42)}for(let g of[-.45,-.15,.2,.5])y(g,.115,.075,.085,.75)}this.beardType=zt.beard[r.beard],this.beardColor=new Ee(zt.hairColor[r.hairColor])}beardShade(e,t,i){let n=this.beardType;if(!n||n==="None"||i<-.01)return 0;let r=(c,u,d)=>Math.max(0,Math.min(1,(c-u)/(d-u))),a=r(.03-Math.abs(e),0,.006)*r(t,-.056,-.05)*r(-t,.028,.034),o=r(.036-Math.abs(e),0,.01)*r(t,-.034,-.028)*r(-t,.012,.018),l=r(.036-Math.abs(e),0,.012)*r(-t,.048,.06),h=r(-t,.008,.04)*r(i,-.01,.03)*(1-a);return a>.9?0:n==="Goatee"?Math.max(o,l)*.85:n==="Stubble"?Math.max(o*.6,h*.5):Math.max(o,h)*.9}setBase(e){this.base=e}play(e,t){!e||!e.length||(this.queue={frames:e,i:0,t:0},t&&(this.base=t))}get busy(){return!!this.queue}hit(e,t=1){this.offsets.push({o:J1(e,t),t:0,dur:.38+.2*t})}stopActions(){this.queue=null}snap(){this.queue=null,this.offsets=[],this.cur=X(Xe[this.base]),this.applyPose(this.cur)}worldPoint(e){let t=new b,i=e==="head"?this.head:this.j[e]||this.j.chest;return(e==="handL"||e==="handR")&&t.set(0,-.27,0),i.localToWorld(t),t}update(e){this.time+=e;let t,i=9;if(this.queue){let l=this.queue;for(l.t+=e;l.i<l.frames.length&&l.t>l.frames[l.i][1];)l.t-=l.frames[l.i][1],l.i++;l.i>=l.frames.length?this.queue=null:(t=X(l.frames[l.i][0]),i=l.frames[l.i][2])}t||(t=this.idlePose());for(let l=0;l<3;l++){let h=t.hips[l]-this.cur.hips[l];Math.abs(h)>Math.PI&&(this.cur.hips[l]+=Math.PI*2*Math.round(h/(Math.PI*2)))}this.offsets=this.offsets.filter(l=>(l.t+=e)<l.dur);for(let l of this.offsets){let h=Math.sin(Math.min(1,l.t/l.dur)*Math.PI)*(l.t<.08?1.4:1);for(let c in l.o)for(let u=0;u<3;u++)t[c][u]+=l.o[c][u]*h}let n=this.root.position,r=this.lastPos.distanceTo(n);this.lastPos.copy(n);let a=e>0?r/e:0;if(this.speed+=(a-this.speed)*Math.min(1,e*8),this.speed>.15&&(this.base==="stance"||this.base==="relaxed"||this.base==="ref"||this.base==="dejected")&&!this.queue){this.walk+=r*9;let l=Math.min(1,this.speed/1.2)*.42;t.hipL[0]+=Math.sin(this.walk)*l,t.knL[0]+=Math.max(0,Math.cos(this.walk))*l*1.2,t.hipR[0]-=Math.sin(this.walk)*l,t.knR[0]+=Math.max(0,-Math.cos(this.walk))*l*1.2,t.hipsPos[1]+=Math.abs(Math.cos(this.walk))*.02,this.injured&&(t.hips[2]+=Math.max(0,Math.sin(this.walk))*.12,t.spine[0]+=.12)}let o=1-Math.exp(-e*i);for(let l in t)for(let h=0;h<3;h++)this.cur[l][h]+=(t[l][h]-this.cur[l][h])*o;this.applyPose(this.cur)}idlePose(){let e=X(Xe[this.base]||Yc),t=this.time;if(this.base==="stance"){let i=Math.sin(t*5.2);e.hipsPos[1]+=i*.018,e.knL[0]+=i*.05,e.knR[0]+=i*.05,e.shL[0]+=Math.sin(t*2.6)*.06,e.shR[0]+=Math.sin(t*2.6+1.3)*.05,e.chest[1]+=Math.sin(t*1.3)*.06,e.neck[1]+=Math.sin(t*.9)*.05}else if(/top$|bottom$|Att$|Def$/i.test(this.base)){let i=Math.sin(t*2.2);e.spine[0]+=i*.04,e.shL[0]+=Math.sin(t*1.7)*.08,e.shR[0]+=Math.sin(t*1.9+1)*.08,e.hipL[2]+=Math.sin(t*1.3)*.05}else this.base==="victory"?(e.shL[2]+=Math.sin(t*4)*.12,e.shR[2]-=Math.sin(t*4)*.12):this.base==="relaxed"||this.base==="ref"||this.base==="dejected"?(e.chest[0]+=Math.sin(t*1.6)*.02,e.hipsPos[1]+=Math.sin(t*1.6)*.004):this.base==="down"&&(e.neck[1]+=Math.sin(t*.7)*.08);return e}applyPose(e){let t=this.j;t.hips.position.set(e.hipsPos[0],this.hipsHome+e.hipsPos[1],e.hipsPos[2]);for(let i of C0)t[i].rotation.set(e[i][0],e[i][1],e[i][2])}dispose(){let e=new Set(Object.values(jc));this.root.traverse(t=>{t.isMesh&&(e.has(t.geometry)||t.geometry.dispose(),t.material.dispose())}),this.root.removeFromParent()}};var U0="cc3d_sound",de=null,rs,ua,ln,rl,ol,mi=!0,Qc=.8;try{let s=JSON.parse(localStorage.getItem(U0)||"{}");s.on===!1&&(mi=!1),typeof s.music=="number"&&(Qc=s.music)}catch{}var la={name:null,intensity:1},ct=null,ev=null,Bi=null,Pn=s=>440*Math.pow(2,(s-69)/12);function tv(){try{localStorage.setItem(U0,JSON.stringify({on:mi,music:Qc}))}catch{}}function iv(){if(de)return;let s=window.AudioContext||window.webkitAudioContext;if(!s)return;de=new s;let e=de.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,rs=de.createGain(),rs.gain.value=mi?1:0,rs.connect(e).connect(de.destination),ua=de.createGain(),ua.gain.value=.34*Qc,ua.connect(rs),ln=de.createGain(),ln.gain.value=.9,ln.connect(rs),rl=de.createGain(),rl.gain.value=.5,rl.connect(rs),ol=de.createBuffer(1,de.sampleRate*2,de.sampleRate);let t=ol.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;ev=setInterval(uv,25)}function nv(){iv(),de&&(de.state==="suspended"&&de.resume(),la.name&&(!ct||ct.name!==la.name)&&z0(la.name,la.intensity))}["pointerdown","keydown","touchstart"].forEach(s=>window.addEventListener(s,nv,{passive:!0}));function eu(){return mi}function B0(){return mi=!mi,tv(),de&&rs.gain.setTargetAtTime(mi?1:0,de.currentTime,.05),!mi&&"speechSynthesis"in window&&speechSynthesis.cancel(),mi}function gi(s,e,t,i,n){s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(2e-4,t),e+i),s.gain.exponentialRampToValueAtTime(1e-4,e+i+n)}function lr(s,e,t){let i=de.createBufferSource();return i.buffer=ol,i.connect(t),i.start(s,Math.random()*1.5,e+.05),i}function vi(s,e,t,i,n){let r=de.createOscillator();return r.type=s,r.frequency.setValueAtTime(e,t),r.connect(n),r.start(t),r.stop(t+i+.05),r}function Kc(s,e,t){let i=de.createGain();i.connect(t),gi(i,s,e,.002,.32),vi("sine",150,s,.4,i).frequency.exponentialRampToValueAtTime(42,s+.12)}function F0(s,e,t){let i=de.createGain(),n=de.createBiquadFilter();n.type="highpass",n.frequency.value=1400,n.connect(i).connect(t),gi(i,s,e*.8,.002,.17),lr(s,.2,n);let r=de.createGain();r.connect(t),gi(r,s,e*.5,.002,.09),vi("triangle",190,s,.12,r)}function Zc(s,e,t,i=!1){let n=de.createGain(),r=de.createBiquadFilter();r.type="highpass",r.frequency.value=7500,r.connect(n).connect(t),gi(n,s,e,.001,i?.22:.035),lr(s,i?.3:.06,r)}function sv(s,e,t){let i=de.createGain(),n=de.createBiquadFilter();n.type="highpass",n.frequency.value=4e3,n.connect(i).connect(t),gi(i,s,e,.002,1.4),lr(s,1.5,n)}function ha(s,e,t,i,n,r){let a=de.createGain(),o=de.createBiquadFilter();o.type="lowpass",o.Q.value=r?6:2,o.frequency.setValueAtTime(r?1600:900,s),o.frequency.exponentialRampToValueAtTime(r?260:220,s+t),o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+.008),a.gain.setValueAtTime(i,s+t*.7),a.gain.exponentialRampToValueAtTime(1e-4,s+t),vi(r?"sawtooth":"triangle",Pn(e),s,t,o),r&&vi("square",Pn(e-12),s,t,o)}function H0(s,e,t,i,n,r=900){let a=de.createGain(),o=de.createBiquadFilter();o.type="lowpass",o.frequency.value=r,o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+Math.min(.4,t*.3)),a.gain.setValueAtTime(i,s+t*.75),a.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let l of e)for(let h of[-7,7]){let c=vi("sawtooth",Pn(l),s,t,o);c.detune.value=h}}function D0(s,e,t,i,n,r="triangle"){let a=de.createGain();a.connect(n),gi(a,s,i,.004,t),vi(r,Pn(e),s,t,a);let o=de.createGain();o.connect(n),gi(o,s,i*.3,.002,t*.4),vi("sine",Pn(e+12),s,t*.5,o)}var ss=null;function rv(){if(ss)return ss;ss=de.createWaveShaper();let s=new Float32Array(1024);for(let t=0;t<s.length;t++){let i=t/s.length*2-1;s[t]=Math.tanh(i*4)}ss.curve=s;let e=de.createGain();return e.gain.value=.35,ss.connect(e).connect(ua),ss._post=e,ss}function av(s,e,t,i){let n=de.createGain(),r=de.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,n.connect(r).connect(rv()),n.gain.setValueAtTime(1e-4,s),n.gain.exponentialRampToValueAtTime(i,s+.005),n.gain.exponentialRampToValueAtTime(i*.5,s+t*.6),n.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let a of[e,e+7,e+12])vi("sawtooth",Pn(a),s,t,n)}function ov(s,e,t,i,n){let r=de.createGain(),a=de.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,a.connect(r).connect(n),r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(i,s+.02),r.gain.setValueAtTime(i,s+t*.8),r.gain.exponentialRampToValueAtTime(1e-4,s+t);let o=vi("square",Pn(e),s,t,a),l=de.createOscillator(),h=de.createGain();l.frequency.value=5.5,h.gain.value=9,l.connect(h).connect(o.detune),l.start(s+.12),l.stop(s+t+.05)}var lv={bpm:86,swing:.14,chords:[[45,57,60,64,67],[41,57,60,64,65],[48,55,59,64,67],[43,55,59,62,67],[38,57,60,62,65],[45,55,60,64,67],[41,57,60,65,69],[40,56,59,62,64]],melody:[[76,null,null,74,null,null,72,null,69,null,null,null,72,null,74,null],[72,null,null,null,69,null,67,null,null,null,69,null,null,null,null,null],[76,null,79,null,76,null,74,null,72,null,null,74,null,72,null,null],[71,null,null,null,74,null,null,null,67,null,null,null,null,null,null,null],[74,null,null,72,null,69,null,null,72,null,74,null,77,null,76,null],[76,null,null,null,72,null,69,null,null,null,72,null,74,null,null,null],[77,null,76,null,72,null,69,null,72,null,null,null,69,null,67,null],[68,null,null,null,71,null,null,null,74,null,76,null,null,null,null,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4;([0,7,10].includes(r)||r===15&&n%2)&&Kc(e,.75,i),(r===4||r===12)&&F0(e,.45,i),r%2===0&&Zc(e,r%4===2?.16:.1,i),r===14&&n%4===3&&Zc(e,.12,i,!0),r===0&&ha(e,a[0],o*5,.42,i),r===6&&ha(e,a[0]+12,o*2,.3,i),r===10&&ha(e,a[0]+7,o*3.5,.34,i),r===14&&ha(e,a[0]+(n%2?10:2),o*2,.25,i),r===0&&H0(e,a.slice(1),o*16,.045,i,1100),(r===0||r===7)&&a.slice(1,4).forEach((h,c)=>D0(e+c*.012,h,.5,.06,i,"sine"));let l=this.melody[n][r];l&&Math.floor(s/128)%2===1&&D0(e,l,.45,.09,i)}},hv={bpm:148,swing:0,chords:[38,34,36,33,38,34,41,40],riff:[[74,null,77,null,76,null,74,null,72,null,74,null,69,null,null,null],[70,null,null,74,null,null,77,null,76,null,74,null,72,null,74,null],[72,null,76,null,79,null,77,null,76,null,74,null,72,null,null,null],[73,null,null,null,76,null,null,null,79,null,81,null,79,null,76,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4,l=t>=.8;if(l?(([0,6,8,11].includes(r)||r===14&&n%2)&&Kc(e,.9,i),(r===4||r===12)&&F0(e,.6,i),n%4===0&&r===0&&sv(e,.22,i)):t>=.5&&r===0&&Kc(e,.6,i),t>=.5&&Zc(e,r%2?.07:.13,i,r===14),r%2===0&&ha(e,a+(r===6||r===14?12:0),o*1.8,t>=.5?.3:.2,i,!0),t>=.5&&[0,3,6].includes(r)&&av(e,a+12,o*(r===6?6:2.6),l?.22:.12),t<.5&&r===0&&H0(e,[a+24,a+27,a+31],o*16,.04,i,700),t>=1.1){let h=this.riff[n%4][r];h&&ov(e,h,o*1.9,.06,i)}}},cv={camp:lv,fight:hv};function z0(s,e){if(!de)return;let t=de.currentTime;if(ct){ct.gain.gain.setTargetAtTime(1e-4,t,.35);let n=ct.gain;setTimeout(()=>n.disconnect(),2500)}if(ct=null,!s)return;let i=de.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(1,t+1.2),i.connect(ua),ct={name:s,track:cv[s],gain:i,step:0,next:t+.1,intensity:e}}function uv(){if(!de||!ct||de.state!=="running")return;let s=ct.track,e=60/s.bpm/4;for(ct.next<de.currentTime-.2&&(ct.next=de.currentTime+.05);ct.next<de.currentTime+.12;){let t=ct.step%2?s.swing*e:0;s.play(ct.step,ct.next+t,ct.intensity,ct.gain),ct.step++,ct.next+=e}}function as(s,e=1){if(la={name:s,intensity:e},!!de){if(ct&&ct.name===s){ct.intensity=e;return}z0(s,e)}}function tu(s){if(de){if(s&&!Bi){let e=de.createGain();e.gain.value=1e-4;let t=de.createBiquadFilter();t.type="bandpass",t.frequency.value=650,t.Q.value=.5;let i=de.createBiquadFilter();i.type="bandpass",i.frequency.value=1700,i.Q.value=1.2;let n=de.createGain();n.gain.value=.35;let r=de.createOscillator(),a=de.createGain();r.frequency.value=.23,a.gain.value=.18,r.connect(a).connect(n.gain),r.start();let o=de.createBufferSource();o.buffer=ol,o.loop=!0,o.connect(t).connect(e),o.connect(i).connect(n).connect(e),e.connect(rl),o.start(),e.gain.setTargetAtTime(.16,de.currentTime,.8),Bi={g:e,src:o,lfo:r,base:.16}}else if(!s&&Bi){let e=Bi;Bi=null,e.g.gain.setTargetAtTime(1e-4,de.currentTime,.4),setTimeout(()=>{e.src.stop(),e.lfo.stop(),e.g.disconnect()},2e3)}}}function It(s=.5){if(!de||!Bi)return;let e=de.currentTime,t=Bi.g.gain;t.cancelScheduledValues(e),t.setValueAtTime(Math.max(Bi.base,t.value),e),t.linearRampToValueAtTime(Bi.base+.55*s,e+.25),t.setTargetAtTime(Bi.base,e+.6+s,.9)}function Pi(s,e=1){if(!de||!mi)return;let t=de.currentTime+.005,i=Math.min(1.4,.45+e*.6),n=(a,o,l,h)=>{let c=de.createGain();c.connect(ln),gi(c,t,h,.002,l),vi("sine",a,t,l,c).frequency.exponentialRampToValueAtTime(o,t+l*.8)},r=(a,o,l,h,c=.8)=>{let u=de.createGain(),d=de.createBiquadFilter();return d.type=a,d.frequency.value=o,d.Q.value=c,d.connect(u).connect(ln),gi(u,t,h,.001,l),lr(t,l+.05,d),d};switch(s){case"punch":n(140,55,.14,.7*i),r("lowpass",2200,.07,.55*i);break;case"kick":r("highpass",900,.06,.6*i),n(110,45,.2,.8*i);break;case"body":n(90,40,.22,.85*i),r("lowpass",900,.1,.5*i);break;case"ground":n(100,45,.12,.55*i),r("lowpass",1200,.06,.35*i);break;case"whoosh":{r("bandpass",500,.2,.18,1.5).frequency.exponentialRampToValueAtTime(2200,t+.16);break}case"slam":n(80,30,.45,1),r("lowpass",500,.3,.7);break;case"tap":for(let a=0;a<3;a++){let o=de.createGain(),l=de.createBiquadFilter();l.type="bandpass",l.frequency.value=1500,l.connect(o).connect(ln),gi(o,t+a*.32,.4,.001,.05),lr(t+a*.32,.08,l)}break;case"bell":case"bell3":{let a=s==="bell3"?3:1;for(let o=0;o<a;o++){let l=t+o*.34;for(let[h,c]of[[1,.35],[2.76,.14],[5.4,.07],[8.9,.03]]){let u=de.createGain();u.connect(ln),gi(u,l,c,.002,1.8/Math.sqrt(h)),vi("sine",1180*h,l,2,u)}}break}case"ko":n(70,25,.8,1.2),r("lowpass",400,.6,.8);break}}function hl(s){if(!de||!mi)return;let e=de.currentTime+.05,t=s==="W"?[60,64,67,72,76]:s==="L"?[57,53,50,45]:[57,60,64];if(t.forEach((i,n)=>{let r=de.createGain(),a=de.createBiquadFilter();a.type="lowpass",a.frequency.value=s==="W"?3200:1200,a.connect(r).connect(ln);let o=e+n*(s==="W"?.11:.22),l=s==="W"&&n===t.length-1?2.2:.8;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.09,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+l);for(let h of[-8,0,8]){let c=vi("sawtooth",Pn(i),o,l,a);c.detune.value=h}}),s==="W"){let i=de.createBiquadFilter();i.type="highpass",i.frequency.value=4e3;let n=de.createGain();i.connect(n).connect(ln),gi(n,e+.44,.25,.002,1.6),lr(e+.44,1.7,i)}}var O0={calm:{rate:.92,pitch:.62,volume:.85},build:{rate:.82,pitch:.72,volume:.95},hype:{rate:.74,pitch:.95,volume:1},shout:{rate:.68,pitch:1.1,volume:1},tense:{rate:.78,pitch:.55,volume:.9},call:{rate:1.12,pitch:1.15,volume:1}},ll=[],on=null,ca=null;function G0(s){ca=s}function dv(s){let t=speechSynthesis.getVoices().filter(i=>/^en/i.test(i.lang));return s==="call"?t.find(i=>/GB|AU/i.test(i.lang))||t[1]||t[0]:t.find(i=>/en[-_](US)/i.test(i.lang)&&/male|david|daniel|alex|fred|guy/i.test(i.name))||t.find(i=>/en[-_]US/i.test(i.lang))||t[0]}function al(){on=null;let s=ll.shift();if(!s){ca&&ca(null);return}let e=()=>{if(ca&&ca(s.t,s.mood),s.roar&&It(s.roar),!mi||!("speechSynthesis"in window)){on=setTimeout(al,600+s.t.length*55);return}try{let t=new SpeechSynthesisUtterance(s.t);Object.assign(t,O0[s.mood]||O0.calm);let i=dv(s.mood==="call"?"call":"announcer");i&&(t.voice=i);let n=!1,r=()=>{n||(n=!0,al())};t.onend=r,t.onerror=r,on=setTimeout(r,1500+s.t.length*110),speechSynthesis.speak(t)}catch{on=setTimeout(al,800)}};s.gap?on=setTimeout(e,s.gap):e()}function Fi(s,e=!1){if(!e){ll=[],clearTimeout(on),on=null;try{"speechSynthesis"in window&&speechSynthesis.cancel()}catch{}}ll.push(...s),!on&&!(e&&"speechSynthesis"in window&&speechSynthesis.speaking)&&al()}function pv(){return ll.length>0||!!on||"speechSynthesis"in window&&speechSynthesis.speaking}function V0(s){pv()||Fi([{t:s,mood:"call"}])}function iu(s=1.2){if(!de||!ct)return;let e=ct.gain.gain,t=de.currentTime;e.cancelScheduledValues(t),e.setTargetAtTime(.35,t,.05),e.setTargetAtTime(1,t+s,.4)}var fa=Math.PI*2,da=(s,e)=>1-Math.exp(-s*e),nu=(s,e,t)=>{let i=((e-s+Math.PI)%fa+fa)%fa-Math.PI;return s+i*t},j0={};function Nt(s,e={}){let t=s+JSON.stringify(e);return j0[t]||(j0[t]=new ht({color:s,roughness:.75,...e}))}function Ce(s,e,t,i,n){let r=new pe(new lt(s,e,t),typeof i=="string"?Nt(i,n):i);return r.castShadow=r.receiveShadow=!0,r}function ye(s,e,t,i,n){return s.position.set(e,t,i),n&&n.add(s),s}function Hi(s,e,t,i,n=12,r){let a=new pe(new _t(s,e,t,n),typeof i=="string"?Nt(i,r):i);return a.castShadow=a.receiveShadow=!0,a}function kn(s,e,t){let i=new pe(new vt(s,14,10),typeof e=="string"?Nt(e,t):e);return i.castShadow=!0,i}function q0(s,{w:e=512,h:t=128,bg:i="#111",fg:n="#fff",font:r="bold 72px Arial",border:a=null}={}){let o=document.createElement("canvas");o.width=e,o.height=t;let l=o.getContext("2d");l.fillStyle=i,l.fillRect(0,0,e,t),a&&(l.strokeStyle=a,l.lineWidth=10,l.strokeRect(5,5,e-10,t-10)),l.fillStyle=n,l.font=r,l.textAlign="center",l.textBaseline="middle",l.fillText(s,e/2,t/2+4);let h=new sn(o);return h.colorSpace=at,h.anisotropy=4,h}function ru(s,e,t,i){return new pe(new ci(e,t),new Dt({map:q0(s,i),toneMapped:!1}))}function su(s,e="#ffffff"){let t=q0(s,{w:512,h:128,bg:"rgba(10,12,16,0.78)",fg:e,font:"bold 60px Arial",border:e}),i=new qs(new Jn({map:t,depthWrite:!1,toneMapped:!1}));return i.scale.set(5,1.25,1),i}function fv(s,e,t="#ffe9a8",i="#2a3340",n="#d9d4c7"){let r=document.createElement("canvas");r.width=s*32,r.height=e*40;let a=r.getContext("2d");a.fillStyle=n,a.fillRect(0,0,r.width,r.height);for(let l=0;l<s;l++)for(let h=0;h<e;h++)a.fillStyle=Math.random()<.3?t:i,a.fillRect(l*32+6,h*40+8,20,26);let o=new sn(r);return o.colorSpace=at,o}function pa(s,e,t,i){let n=new Zs;n.moveTo(-s/2,0),n.lineTo(s/2,0),n.lineTo(0,e),n.closePath();let r=new ea(n,{depth:t,bevelEnabled:!1});r.translate(0,0,-t/2);let a=new pe(r,Nt(i));return a.castShadow=a.receiveShadow=!0,a}function au(s="round"){let e=new it;if(s==="palm"){let i=Hi(.14,.22,5,"#8a6a43",8);i.position.y=2.5,i.rotation.z=.08,e.add(i);for(let n=0;n<7;n++){let r=Ce(2.6,.06,.5,"#2f8f46");r.geometry.translate(1.3,0,0),r.position.set(.2,5,0),r.rotation.set(0,n/7*fa,-.35),e.add(r)}return e}ye(Hi(.18,.26,2,"#6b4a2b",8),0,1,0,e);let t=kn(1.4+Math.random()*.5,s==="dark"?"#2d6a3a":"#3f8f4a");return t.position.y=3,t.scale.y=1.15,e.add(t),e}function mv(){let s=new it;return ye(Hi(.07,.09,4.2,"#2a2d33",8),0,2.1,0,s),ye(Ce(.9,.08,.12,"#2a2d33"),.4,4.15,0,s),ye(new pe(new vt(.16,10,8),new Dt({color:"#fff3c4"})),.8,4.05,0,s),s}var $0={hatch:{L:3.8,W:1.7,H:.75,cab:[2.2,.62,-.25],wheel:.33},pickup:{L:5.3,W:1.95,H:.95,cab:[1.9,.78,.55],wheel:.42,bed:!0},sedan:{L:4.7,W:1.85,H:.7,cab:[2.4,.6,-.1],wheel:.35},muscle:{L:4.9,W:1.95,H:.72,cab:[2,.55,-.35],wheel:.38,stripes:!0,scoop:!0},suv:{L:4.9,W:2,H:1,cab:[3.2,.8,-.2],wheel:.42},super:{L:4.5,W:2,H:.55,cab:[1.9,.5,-.1],wheel:.36,wedge:!0},hyper:{L:4.7,W:2.05,H:.5,cab:[1.7,.48,-.05],wheel:.37,wedge:!0,wing:!0}};function cl(s,e){let t=$0[s]||$0.sedan,i=new it,n=Nt(e,{roughness:.25,metalness:.55}),r=Nt("#1b2430",{roughness:.1,metalness:.6}),a=Nt("#121212",{roughness:.8}),o=t.wheel+.12,l=Ce(t.W,t.H,t.L,n);if(l.position.y=o+t.H/2,i.add(l),t.wedge){let g=Ce(t.W*.98,t.H*.5,t.L*.32,n);g.position.set(0,o+t.H*.95,t.L*.3),g.rotation.x=.18,i.add(g)}let[h,c,u]=t.cab,d=Ce(t.W*.86,c,h,r);d.position.set(0,o+t.H+c/2,u),i.add(d);let p=Ce(t.W*.8,.06,h*.85,n);if(p.position.set(0,o+t.H+c+.02,u),i.add(p),t.bed){for(let g of[-1,1])ye(Ce(.08,.45,t.L*.4,n),g*(t.W/2-.04),o+t.H+.22,-t.L*.27,i);ye(Ce(t.W,.45,.08,n),0,o+t.H+.22,-t.L*.47,i)}if(t.stripes)for(let g of[-.18,.18])ye(Ce(.18,.02,t.L*1.001,"#f2f2f2"),g,o+t.H+.005,0,i);if(t.scoop&&ye(Ce(.6,.14,.8,a),0,o+t.H+.07,t.L*.25,i),t.wing){ye(Ce(t.W*.95,.06,.4,a),0,o+t.H+.45,-t.L*.45,i);for(let g of[-.6,.6])ye(Ce(.06,.4,.1,a),g,o+t.H+.22,-t.L*.44,i)}let m=new _t(t.wheel,t.wheel,.28,18);m.rotateZ(Math.PI/2);let v=new _t(t.wheel*.6,t.wheel*.6,.3,12);v.rotateZ(Math.PI/2);let f=[];for(let g of[-1,1])for(let _ of[-1,1]){let w=new it;w.position.set(g*(t.W/2-.08),t.wheel,_*t.L*.33);let M=new pe(m,a);M.castShadow=!0,w.add(M,new pe(v,Nt("#c9ccd1",{metalness:.9,roughness:.3}))),i.add(w),f.push(w)}let x=new Dt({color:"#fff7d6"}),y=new Dt({color:"#d01818"});for(let g of[-1,1])ye(new pe(new lt(.35,.12,.04),x),g*(t.W/2-.3),o+t.H*.7,t.L/2+.01,i),ye(new pe(new lt(.35,.1,.04),y),g*(t.W/2-.3),o+t.H*.75,-t.L/2-.01,i);return i.userData.wheels=f,i.userData.radius=t.wheel,i}function X0(s){let e=new it;if(s==="parrot"){let d=kn(.14,"#27a845");d.scale.set(.8,1,1.3),e.add(d),ye(kn(.09,"#d62828"),0,.1,.13,e);let p=new pe(new Ks(.03,.08,6),Nt("#f4b942"));p.rotation.x=Math.PI/2,ye(p,0,.09,.24,e);let m=Ce(.08,.02,.3,"#1d4ed8");ye(m,0,-.03,-.25,e);let v=[];for(let x of[-1,1]){let y=Ce(.3,.02,.16,"#1f8f3a");y.geometry.translate(x*.15,0,0),ye(y,x*.06,.03,0,e),v.push(y)}let f=Math.random()*10;return{root:e,fly:!0,step(x){f+=x,v[0].rotation.z=Math.sin(f*22)*.7,v[1].rotation.z=-Math.sin(f*22)*.7}}}let t={dog:{s:1,fur:"#8a5a2b",belly:"#c99b67",ear:"drop"},cat:{s:.6,fur:"#d8893a",belly:"#f2d1a8",ear:"point"},tiger:{s:2,fur:"#e0781e",belly:"#f4ead8",ear:"round",stripes:!0}}[s]||{s:1,fur:"#8a5a2b",belly:"#c99b67",ear:"drop"},i=new it;i.scale.setScalar(t.s),e.add(i);let n=Nt(t.fur),r=new pe(new di(.13,.36,6,12),n);r.rotation.x=Math.PI/2,r.position.y=.38,r.castShadow=!0,i.add(r);let a=new it;a.position.set(0,.52,.27),i.add(a);let o=kn(.12,t.fur);a.add(o);let l=Ce(.1,.08,.12,t.belly);ye(l,0,-.03,.11,a),ye(kn(.022,"#111"),0,0,.18,a);for(let d of[-1,1])if(ye(kn(.018,"#111"),d*.05,.04,.1,a),t.ear==="point"){let p=new pe(new Ks(.04,.09,4),n);ye(p,d*.07,.12,0,a)}else if(t.ear==="round")ye(kn(.04,t.fur),d*.08,.1,-.01,a);else{let p=Ce(.04,.12,.07,"#5c3a1b");ye(p,d*.11,.02,0,a).rotation.z=d*.3}if(t.stripes)for(let d=0;d<5;d++){let p=new pe(new pi(.135,.015,4,16,Math.PI),Nt("#1a1209"));p.rotation.set(0,Math.PI/2,0),ye(p,0,.38,-.18+d*.09,i)}let h=Ce(.03,.03,.26,t.fur);h.geometry.translate(0,0,-.13),ye(h,0,.45,-.28,i),h.rotation.x=s==="cat"?-1:-.5;let c=[];for(let d of[-1,1])for(let p of[-1,1]){let m=new it;m.position.set(d*.08,.32,p*.17);let v=Ce(.06,.32,.06,t.fur);v.position.y=-.16,m.add(v),i.add(m),c.push({leg:m,ph:d===p?0:Math.PI})}let u=Math.random()*10;return{root:e,fly:!1,step(d,p){u+=d*(4+p*3);let m=Math.min(.7,p*.35);for(let v of c)v.leg.rotation.x=Math.sin(u+v.ph)*m;h.rotation.y=Math.sin(u*1.5)*.4,a.rotation.y=Math.sin(u*.3)*.15}}}function gv(s){let e=new it,t=(r,a,o=2.2)=>ye(Ce(1.1,o,.12,"#5a3a22"),r,o/2,a,e);if(s===0){let r=Ce(13,13,10,new ht({map:fv(10,9),roughness:.8}));r.position.y=6.5,e.add(r);for(let o=2.5;o<13;o+=3.2)ye(Ce(13.2,.15,1,"#9aa0a8"),0,o,5.4,e);t(0,5.07);let a=ru("APARTMENTS",4,.8,{bg:"#20252c",fg:"#e7e2d6"});return ye(a,0,3,5.08,e),e}if(s===1){ye(Ce(8,3.4,7,"#e8dcc3"),0,1.7,0,e),ye(pa(9,2.4,7.6,"#8b3a2b"),0,3.4,0,e),t(0,3.56);for(let r of[-2.6,2.6])ye(Ce(1.4,1.1,.1,"#7fb3d5",{roughness:.1}),r,1.8,3.56,e);for(let r=-6;r<=6;r+=1)Math.abs(r)>1.5&&ye(Ce(.12,.9,.12,"#f4f4f4"),r,.45,7.5,e);return ye(Ce(12.2,.1,.1,"#f4f4f4"),0,.8,7.5,e),e}if(s===2){ye(Ce(11,6.2,8,"#d9e1e8"),0,3.1,0,e),ye(pa(12,3,8.6,"#3d4a5c"),0,6.2,0,e),ye(Ce(5,3.2,6,"#c7cfd8"),8,1.6,1,e),ye(Ce(4.2,2.6,.1,"#ffffff"),8,1.3,4.02,e),ye(Ce(11.4,.25,2.2,"#b8a48a"),0,.12,5.1,e);for(let r of[-5,-1.5,1.5,5])ye(Hi(.12,.12,3,"#ffffff"),r,1.6,5.9,e);ye(Ce(11.6,.2,2.6,"#ffffff"),0,3.15,5.1,e),t(0,4.06);for(let r of[-3.5,3.5])for(let a of[1.6,4.4])ye(Ce(1.6,1.2,.1,"#7fb3d5",{roughness:.1}),r,a,4.06,e);return ye(Ce(1.6,1.2,.1,"#7fb3d5",{roughness:.1}),0,4.4,4.06,e),e}let i=Nt("#9ccbe6",{roughness:.05,metalness:.3,transparent:!0,opacity:.75}),n=(r,a,o,l)=>{ye(Ce(r+.8,.3,a+.8,"#e9e4da"),o,.15,l,e);let h=new pe(new lt(r,.05,a),Nt("#2ab0e0",{roughness:.05,metalness:.2}));ye(h,o,.31,l,e)};if(s===3){ye(Ce(14,3.6,9,"#f5f5f2"),0,1.8,-1,e),ye(Ce(10,3.4,8,"#f5f5f2"),-2,5.3,-1.5,e),ye(Ce(14.6,.3,9.6,"#2b2b2b"),0,3.65,-1,e),ye(Ce(10.6,.3,8.6,"#2b2b2b"),-2,7.1,-1.5,e);let r=new pe(new lt(12,3.2,.1),i);ye(r,0,1.8,3.52,e),ye(new pe(new lt(8,3,.1),i),-2,5.3,2.52,e),n(8,3.6,3,7);for(let a of[-8,9])ye(au("palm"),a,0,6,e);return t(-5.5,3.6),e}ye(Ce(18,7,11,"#f2ead9"),0,3.5,-2,e);for(let r of[-12.5,12.5])ye(Ce(7,5.5,9,"#eee4d0"),r,2.75,-1,e);ye(pa(19,3.2,11.6,"#5b4636"),0,7,-2,e);for(let r of[-12.5,12.5])ye(pa(7.6,2.4,9.6,"#5b4636"),r,5.5,-1,e);for(let r of[-5,-2.5,0,2.5,5])ye(Hi(.3,.35,6.4,"#ffffff",14),r,3.2,4.6,e);ye(Ce(12,.5,2.6,"#ffffff"),0,6.6,4.6,e),ye(pa(12.4,1.6,2.8,"#ffffff"),0,6.85,4.6,e),ye(Ce(12,.4,3.2,"#e0d6c2"),0,.2,4.8,e);for(let r of[-6.5,-3.5,3.5,6.5])for(let a of[1.8,4.8])ye(Ce(1.4,1.8,.1,"#7fb3d5",{roughness:.1}),r,a,3.56,e);t(0,3.56,3),n(10,4,-9,9),ye(Hi(1.8,2,.6,"#e9e4da",20),9,.3,9,e),ye(new pe(new _t(1.6,1.6,.05,20),Nt("#2ab0e0",{roughness:.05})),9,.58,9,e),ye(Hi(.2,.3,1.6,"#e9e4da"),9,1.1,9,e),ye(kn(.35,"#e9e4da"),9,2,9,e);for(let r of[-16,-14,15,17])ye(au("palm"),r,0,9,e);for(let r of[-3,3])ye(Ce(.6,2.6,.6,"#e0d6c2"),r,1.3,13.5,e);return e}var Y0=[{id:"home",name:"Home",icon:"\u{1F3E0}",color:"#f4b942",door:[-38,-9]},{id:"club",name:"Nightclub",icon:"\u{1FAA9}",color:"#c084fc",door:[-12,-9]},{id:"ink",name:"Ink Studio",icon:"\u{1F58B}\uFE0F",color:"#94a3b8",door:[-1.5,-9]},{id:"cafe",name:"Caf\xE9",icon:"\u2615",color:"#fca5a5",door:[8,-9]},{id:"gym",name:"Gym",icon:"\u{1F94A}",color:"#f87171",door:[28,-9]},{id:"cars",name:"Car Dealer",icon:"\u{1F697}",color:"#60a5fa",door:[-34,9]},{id:"realty",name:"Realtor",icon:"\u{1F3E1}",color:"#34d399",door:[-12,9]},{id:"pets",name:"Pet Shop",icon:"\u{1F43E}",color:"#fbbf24",door:[8,9]},{id:"arena",name:"GFC Arena",icon:"\u{1F3C6}",color:"#f4b942",door:[30,9]}],ul=class{constructor(){let e=this.scene=new nn;e.background=new Ee("#9fc9ef"),e.fog=new Ys("#b8d6f0",45,110),this.camera=new wt(55,1,.1,300),e.add(new es("#dff0ff","#5a6b43",1.1));let t=this.sun=new Go("#fff4dc",2.4);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let i=t.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=120,t.shadow.bias=-5e-4,e.add(t,t.target),this.solids=[],this.buildTown(),this.player=null,this.pos=new b(-38,0,-5),this.heading=Math.PI,this.moveTarget=null,this.keys=new Set,this.driving=null,this.speedNow=0,this.camYaw=0,this.camPitch=.42,this.active=!1,this.near=null,this.onNear=null,this.onEnter=null,this.key="",this.pets=[],this.home=null,this.family=[],this.garage=[],addEventListener("keydown",n=>{if(!this.active||/INPUT|TEXTAREA|SELECT/.test(n.target&&n.target.tagName||""))return;let r=n.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"].includes(r)&&(this.keys.add(r),this.moveTarget=null,n.preventDefault()),(r==="e"||r==="enter")&&this.near&&this.onEnter&&this.onEnter(this.near.id)}),addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear())}solid(e,t,i,n){this.solids.push([Math.min(e,i),Math.min(t,n),Math.max(e,i),Math.max(t,n)])}buildTown(){let e=this.scene,t=new pe(new ci(260,260),Nt("#6fa452",{roughness:1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t),this.ground=t;let i=(v,f,x,y)=>{let g=new pe(new ci(v,f),Nt("#3a3d42",{roughness:.95}));g.rotation.x=-Math.PI/2,g.position.set(x,.01,y),g.receiveShadow=!0,e.add(g)};i(130,10,0,0),i(10,90,-54,0),i(10,90,54,0);for(let v of[-6.2,6.2]){let f=Ce(130,.15,2.4,"#c9c6bd");f.position.set(0,.075,v),e.add(f)}for(let v=-60;v<60;v+=6){let f=new pe(new ci(2.8,.18),new Dt({color:"#f2e7b6"}));f.rotation.x=-Math.PI/2,f.position.set(v,.02,0),e.add(f)}for(let v=-60;v<=60;v+=12)for(let f of[-7,7]){let x=mv();x.position.set(v,0,f),x.rotation.y=f<0?-Math.PI/2:Math.PI/2,e.add(x)}let n=v=>Y0.find(f=>f.id===v),r=(v,f,x,y,g,_,w,M,T,P)=>{let L=new it;L.position.set(g,0,_);let I=_<0?1:-1,H=Ce(f,x,y,w);H.position.y=x/2,L.add(H);let A=ru(M,Math.min(f-1,9),1.4,{bg:T,fg:"#fff",font:"bold 64px Arial"});A.position.set(0,x-1.1,I*(y/2+.06)),I<0&&(A.rotation.y=Math.PI),L.add(A);let U=Ce(1.6,2.5,.15,"#2b2b2b");U.position.set(0,1.25,I*(y/2+.02)),L.add(U);for(let J of[-f/2+2,f/2-2]){let re=Ce(2.2,1.8,.1,"#9ccbe6",{roughness:.1,metalness:.3});re.position.set(J,1.6,I*(y/2+.03)),L.add(re)}P&&P(L,I),e.add(L),this.solid(g-f/2,_-y/2,g+f/2,_+y/2);let O=su(n(v).icon+" "+n(v).name,n(v).color);return O.position.set(g,x+2.2,_),e.add(O),L};r("club",12,6,10,-12,-15,"#2a1f3d","NIGHTCLUB","#7c3aed",(v,f)=>{for(let x=0;x<6;x++){let y=new pe(new lt(11.5,.1,.1),new Dt({color:x%2?"#f0abfc":"#22d3ee"}));y.position.set(0,.6+x*.9,f*5.06),v.add(y)}}),r("cafe",10,4.5,9,8,-14.5,"#f1e3cf","CAF\xC9 & DINING","#9a3412",(v,f)=>{let x=Ce(9.6,.15,2.2,"#c2410c");x.position.set(0,3.1,f*5.4),x.rotation.x=f*.25,v.add(x);for(let y of[-3,3]){let g=new it;ye(Hi(.6,.6,.06,"#ffffff",16),0,.85,0,g),ye(Hi(.05,.05,.85,"#333"),0,.42,0,g),g.position.set(y,0,f*6.4),v.add(g)}}),r("gym",16,7,12,28,-16,"#30343b","IRON GYM","#b91c1c"),r("ink",7,4.2,8,-1.5,-14,"#1f2329","INK STUDIO","#334155"),r("cars",18,6,12,-34,16,"#dbe7f3","LUXURY MOTORS","#1d4ed8",v=>{[["super","#f97316"],["suv","#111111"],["muscle","#1d4ed8"]].forEach(([f,x],y)=>{let g=cl(f,x);g.position.set(-5+y*5,0,-8),g.position.z=-6,g.position.set(-5+y*5,0,-9),g.rotation.y=.5,v.add(g)})}),r("realty",10,5,9,-12,15,"#e6efe9","PRIME REALTY","#047857"),r("pets",10,4.5,9,8,14.5,"#fff3d6","PAWS PET SHOP","#d97706",(v,f)=>{let x=X0("dog");x.root.position.set(-3,0,f*5.4),v.add(x.root),this.shopPet=x});let a=new it;a.position.set(30,0,22);let o=Hi(11,11,6,"#1f2937",32);o.position.y=3,a.add(o);let l=new pe(new vt(11,32,12,0,fa,0,Math.PI/2),Nt("#cbd5e1",{metalness:.4,roughness:.35}));l.position.y=6,l.scale.y=.45,l.castShadow=!0,a.add(l);let h=ru("GFC ARENA",10,2,{bg:"#111",fg:"#f4b942",font:"bold 80px Arial",border:"#d62828"});h.position.set(0,4.4,-11.05),h.rotation.y=Math.PI,a.add(h),ye(Ce(3,3,.4,"#111"),0,1.5,-10.9,a),this.scene.add(a),this.solid(19,11,41,33);let c=su("\u{1F3C6} GFC Arena","#f4b942");c.position.set(30,13,22),e.add(c);let u=[];for(let v=-64;v<=64;v+=9)u.push([v,-40],[v,40]);for(let v=-32;v<=32;v+=9)u.push([-66,v],[66,v]);u.push([18,-16],[-24,18],[0,18],[18,18],[-22,-30],[40,-30],[-2,30],[42,36]);for(let[v,f]of u){let x=au(Math.random()<.5?"round":"dark");x.position.set(v+(Math.random()-.5)*2,0,f+(Math.random()-.5)*2),e.add(x)}this.homeLot=new it,this.homeLot.position.set(-38,0,-25),e.add(this.homeLot);let d=new pe(new ci(22,9),Nt("#b9b3a6",{roughness:.95}));d.rotation.x=-Math.PI/2,d.position.set(-38,.02,-12.5),d.receiveShadow=!0,e.add(d);let p=su("\u{1F3E0} Home","#f4b942");p.position.set(-38,15,-25),e.add(p),this.homeLabel=p,this.walkers=[];let m=["#e11d48","#2563eb","#16a34a","#f59e0b","#6b7280","#111827","#f5f5f5","#7c3aed"];for(let v=0;v<8;v++){let f=new fi({casual:!0,look:{...Ln("walker"+v),body:1,abs:1},shirt:m[v],pants:v%2?"#1f2937":"#3b5b8a",weightClass:2,detail:"low"}),x=v%2?1:-1,y={f,x:-55+Math.random()*110,z:x*6.6,dir:x,v:1.1+Math.random()*.6};f.root.position.set(y.x,0,y.z),e.add(f.root),this.walkers.push(y)}this.traffic=[],[["sedan","#9ca3af"],["pickup","#b45309"],["hatch","#0ea5e9"],["suv","#111827"]].forEach(([v,f],x)=>{let y=cl(v,f),g=x%2?1:-1,_={car:y,x:-60+x*30,z:g*2.4,dir:g,v:8+x*1.5};y.rotation.y=g>0?Math.PI/2:-Math.PI/2,e.add(y),this.traffic.push(_)})}setLife(e){let t=e.life;this.injured=!!e.injured,this.player&&this.player.setInjured(this.injured);let i=JSON.stringify([e.look,e.weightClass,t.house,t.cars,t.driving,t.pets.map(h=>h.kind+h.name),t.partner&&[t.partner.look,t.partner.stage],t.kids.map(h=>h.look+h.age)]);if(i===this.key)return;this.key=i;let n=this.scene;if((!this.player||this.playerLook!==e.look)&&(this.player&&this.player.dispose(),this.player=new fi({casual:!0,look:an(e.look),weightClass:e.weightClass,style:e.style,shirt:"#111111",pants:"#2b3a55",tattooText:e.ink}),this.playerLook=e.look,this.player.setInjured(this.injured),n.add(this.player.root)),this.homeTier!==t.house){this.home&&this.homeLot.remove(this.home),this.home=gv(t.house),this.homeLot.add(this.home),this.homeTier=t.house,this.solids=this.solids.filter(u=>!u.home);let h=[[6.5,5],[4,3.5],[8,4],[7.5,5.5],[16,6.5]][t.house],c=[-38-h[0],-25-h[1]-1,-38+h[0],-25+h[1]];c.home=!0,this.solids.push(c),this.homeLabel.position.y=[15,8,11,10,12][t.house]}for(let h of this.garage)n.remove(h);this.garage=[];let r=e.carCatalog||[];t.cars.forEach((h,c)=>{let u=r.find(p=>p.id===h)||{color:"#888"},d=cl(h,u.color);d.position.set(-48+c*2.7,0,-12.5),d.rotation.y=Math.PI*.98,d.userData.id=h,n.add(d),this.garage.push(d)});for(let h of this.pets)n.remove(h.root);this.pets=t.pets.map((h,c)=>{let u=X0(h.kind);return u.root.position.copy(this.pos).add(new b(1+c,0,1)),u.slot=c,n.add(u.root),u});for(let h of this.family)h.dispose();this.family=[];let a=["#e11d48","#2563eb","#16a34a","#f59e0b","#a855f7","#0ea5e9","#f97316","#ec4899"],o=-25+[5.6,4.2,6.2,4.4,6.3][t.house],l=t.house===4?-35.5:-30.5;if(t.partner){let h=an(t.partner.look),c=new fi({casual:!0,look:h,shirt:a[h.shorts],pants:"#1f2937",weightClass:1,detail:"low"});c.root.position.set(l,0,o+2.4),c.root.rotation.y=-.5,n.add(c.root),this.family.push(c)}t.kids.forEach((h,c)=>{let u=an(h.look),d=new fi({casual:!0,look:{...u,beard:0,body:0,abs:0},shirt:a[(u.shorts+c+2)%8],pants:"#334155",weightClass:0,detail:"low"}),p=Math.min(.85,.42+h.age*.035);d.root.scale.multiplyScalar(p),d.root.position.set(l+1.4+c*1,0,o+3.2+c%2*.6),d.root.rotation.y=-.4,n.add(d.root),this.family.push(d)}),this.driving&&this.driving.userData.id!==t.driving&&this.stopDriving(),this.carCatalog=r,this.drivingId=t.driving}canDrive(){return!!this.drivingId}isDriving(){return!!this.driving}toggleDrive(){if(this.driving)return this.stopDriving();if(!this.drivingId)return!1;let e=(this.carCatalog||[]).find(t=>t.id===this.drivingId)||{color:"#888"};return this.driving=cl(this.drivingId,e.color),this.driving.userData.id=this.drivingId,this.scene.add(this.driving),this.player.root.visible=!1,this.speedNow=0,!0}stopDriving(){return this.driving&&(this.scene.remove(this.driving),this.driving=null,this.player.root.visible=!0,this.pos.x+=Math.cos(this.heading)*1.6,this.pos.z-=Math.sin(this.heading)*1.6,this.pos.copy(this.free(this.pos.x,this.pos.z,this.pos))),!1}goHome(){this.pos.set(-38,0,-6),this.heading=Math.PI,this.camYaw=0,this.moveTarget=null,this.driving&&this.stopDriving()}blocked(e,t,i){if(Math.abs(e)>64||Math.abs(t)>40)return!0;for(let n of this.solids)if(e>n[0]-i&&e<n[2]+i&&t>n[1]-i&&t<n[3]+i)return!0;return!1}free(e,t,i){return this.blocked(e,t,.4)?i.clone():new b(e,0,t)}pointer(e,t,i){if(e==="down")this.drag={x:t.clientX,y:t.clientY,moved:0},i.setPointerCapture(t.pointerId);else if(e==="move"&&this.drag){let n=t.clientX-this.drag.x,r=t.clientY-this.drag.y;this.drag.moved+=Math.abs(n)+Math.abs(r),this.camYaw-=n*.008,this.camPitch=Math.max(.12,Math.min(1.2,this.camPitch+r*.004)),this.drag.x=t.clientX,this.drag.y=t.clientY}else if(e==="up"&&this.drag){if(this.drag.moved<8){let n=i.getBoundingClientRect(),r=new he((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),a=new Wo;a.setFromCamera(r,this.camera);let o=a.ray.intersectPlane(new Ei(new b(0,1,0),0),new b);o&&(this.moveTarget=o)}this.drag=null}}update(e){if(!this.player)return;let t=this.pos,i=this.keys,n=0,r=0;(i.has("w")||i.has("arrowup"))&&(r-=1),(i.has("s")||i.has("arrowdown"))&&(r+=1),(i.has("a")||i.has("arrowleft"))&&(n-=1),(i.has("d")||i.has("arrowright"))&&(n+=1);let a=null;if(n||r){let x=Math.sin(this.camYaw),y=Math.cos(this.camYaw);a=new b(n*y+r*x,0,-n*x+r*y).normalize()}else if(this.moveTarget){let x=this.moveTarget.clone().sub(t).setY(0);x.length()<(this.driving?1.5:.4)?this.moveTarget=null:a=x.normalize()}let o=this.driving?16:(i.has("shift")?7:4.2)*(this.injured?.55:1),l=a?o:0;if(this.speedNow+=(l-this.speedNow)*da(this.driving?2.2:10,e),a){let x=Math.atan2(a.x,a.z);this.heading=nu(this.heading,x,da(this.driving?3.5:12,e))}if(this.speedNow>.01){let x=this.speedNow*e,y=Math.sin(this.heading)*x,g=Math.cos(this.heading)*x,_=this.driving?1.3:.4;this.blocked(t.x+y,t.z,_)?this.driving&&(this.speedNow*=.5):t.x+=y,this.blocked(t.x,t.z+g,_)?this.driving&&(this.speedNow*=.5):t.z+=g}if(this.driving){this.driving.position.copy(t),this.driving.rotation.y=this.heading;for(let x of this.driving.userData.wheels)x.children.forEach(y=>y.rotation.x+=this.speedNow*e/this.driving.userData.radius)}this.player.root.position.copy(t),this.player.root.rotation.y=this.heading,this.player.update(e),this.pets.forEach((x,y)=>{let g=y%2?1:-1,_=1.4+Math.floor(y/2)*1.1,w=t.x-Math.sin(this.heading)*_+Math.cos(this.heading)*g*.9,M=t.z-Math.cos(this.heading)*_-Math.sin(this.heading)*g*.9,T=x.root,P=new b(w-T.position.x,0,M-T.position.z),L=P.length(),I=Math.min(L*2.5,this.driving?18:8);L>.05&&(T.position.addScaledVector(P.normalize(),I*e),T.rotation.y=nu(T.rotation.y,Math.atan2(P.x,P.z),da(8,e))),T.position.y=x.fly?1.9+Math.sin(performance.now()/300+y)*.15:0,x.step(e,L>.3?I:0)}),this.shopPet&&this.shopPet.step(e,0);for(let x of this.family)x.update(e);for(let x of this.walkers)x.x+=x.dir*x.v*e,x.x>62&&(x.x=-62),x.x<-62&&(x.x=62),x.f.root.position.set(x.x,0,x.z),x.f.root.rotation.y=x.dir>0?Math.PI/2:-Math.PI/2,x.f.update(e);for(let x of this.traffic){x.x+=x.dir*x.v*e,x.x>66&&(x.x=-66),x.x<-66&&(x.x=66),x.car.position.set(x.x,0,x.z);for(let y of x.car.userData.wheels)y.children.forEach(g=>g.rotation.x+=x.v*e/x.car.userData.radius)}let h=null,c=3.6;for(let x of Y0){let y=Math.hypot(t.x-x.door[0],t.z-x.door[1]);y<c&&(c=y,h=x)}h!==this.near&&(this.near=h,this.onNear&&this.onNear(h)),this.sun.position.set(t.x+25,40,t.z+18),this.sun.target.position.copy(t),this.driving&&this.speedNow>2&&!this.drag&&(this.camYaw=nu(this.camYaw,this.heading+Math.PI,da(2.5,e)));let u=this.driving?11:7.5,d=this.camera,p=new b(t.x,this.driving?1.2:1.5,t.z),m=p.x+Math.sin(this.camYaw)*Math.cos(this.camPitch)*u,v=p.z+Math.cos(this.camYaw)*Math.cos(this.camPitch)*u,f=p.y+Math.sin(this.camPitch)*u;d.position.lerp(new b(m,f,v),this.snapCam?1:da(8,e)),this.snapCam=!1,d.lookAt(p)}enter(){this.snapCam=!0}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}};var dl=class extends nn{constructor(e=null){super();let t=new lt;t.deleteAttribute("uv");let i=new ht({side:Ht}),n=new ht,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new ts(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new pe(t,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new pe(t,n);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let h=new pe(t,n);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let c=new pe(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let u=new pe(t,n);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new pe(t,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new pe(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let m=new pe(t,hr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);let v=new pe(t,hr(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let f=new pe(t,hr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let x=new pe(t,hr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let y=new pe(t,hr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let g=new pe(t,hr(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function hr(s){let e=new Dt;return e.color.setScalar(s),e}var lu=s=>s.replace(/^GFC /i,"G F C ").replace(/ GFC /i," G F C "),ou=s=>String(s.realName||s.name).split(" ")[0],Yt=s=>{let e=String(s.realName||s.name).split(" ");return e[e.length-1]};function vv(s){let[e,t,i]=String(s||"0-0-0").split("-").map(Number);return`${e} win${e===1?"":"s"}, ${t} loss${t===1?"":"es"}${i?`, and ${i} draw${i===1?"":"s"}`:""}`}function yv(s,e,t,i){let n=[{t:`Fighting out of the ${e} corner...`,mood:"build",gap:600},{t:`Hailing from ${s.country||"parts unknown"}... with a professional record of ${vv(s.record)}...`,mood:"build"}];return t&&i&&n.push({t:`The reigning... the defending... ${lu(i.label)} of the world!`,mood:"hype",roar:.7}),s.nickname&&n.push({t:`${ou(s)}... "${s.nickname}"...`,mood:"hype",roar:.5}),n.push({t:`${s.nickname?Yt(s):s.realName||s.name}!!!`,mood:"shout",roar:1}),n}function J0(s){let e=s.belt,t=[{t:"Ladies and gentlemen!",mood:"build",roar:.35}];e?t.push({t:`This contest is scheduled for five rounds... and it is for the ${lu(e.label)} of the world!`,mood:"build",roar:.5}):s.rounds===5?t.push({t:"This... is the main event of the evening! Five rounds!",mood:"build",roar:.5}):t.push({t:"This contest is scheduled for three rounds!",mood:"build"}),t.push({t:"It's...",mood:"tense",gap:400},{t:"TIME!!!",mood:"shout",gap:300,roar:1});let i=e&&e.champ==="p",n=e&&e.champ==="o",r=i?[["o","blue"],["p","red"]]:n?[["p","red"],["o","blue"]]:[["o","blue"],["p","red"]];for(let[a,o]of r)t.push(...yv(a==="p"?s.player:s.opponent,o,e&&e.champ===a,e));return t}function K0(s,e){let t=["one","two","three","four","five"][s-1]||s;return s===e.rounds&&e.rounds>1?[{t:"This is it! The FINAL round!",mood:"shout",roar:.9}]:[{t:`Round ${t}!`,mood:"hype",roar:.5}]}function pl(s,e){let t=e==="p"?s.player:e==="o"?s.opponent:null,i=s.belt,n=[{t:"Ladies and gentlemen...",mood:"tense",gap:400}],r=String(s.method||"");if(s.methodType==="DEC"||!t){if(n.push({t:`After ${s.endRound||s.rounds} rounds... we go to the judges' scorecards!`,mood:"build",roar:.4}),(s.cards||[]).forEach((o,l)=>{let[h,c]=o.split("-").map(Number),u=Math.max(h,c),d=Math.min(h,c);n.push({t:`${["Judge one","Judge two","And judge three"][l]} scores the contest... ${u} to ${d}...`,mood:"tense",gap:250})}),!t)return n.push({t:"This contest... is declared... a DRAW!",mood:"shout",gap:500,roar:.8}),i&&n.push({t:"And the champion keeps the belt!",mood:"hype"}),n;let a=/split/i.test(r)?"split decision":/majority/i.test(r)?"majority decision":"unanimous decision";n.push({t:`For the winner... by ${a}...`,mood:"tense",gap:600})}else{let a=s.endTime?`${s.endTime.replace(":"," ")} of round ${s.endRound}`:`round ${s.endRound}`;n.push({t:`The referee calls a stop to this contest at ${a}...`,mood:"build"});let o=s.methodType==="SUB"?"submission":/TKO/i.test(r)?"technical knockout":"knockout";n.push({t:`Declaring the winner... by ${o}...`,mood:"tense",gap:400})}if(i){let a=e===i.champ;n.push({t:a?"AND STILL...":"AND NEW...",mood:"shout",gap:700,roar:.8}),n.push({t:`${lu(i.label)}... ${t.nickname?`${ou(t)} "${t.nickname}" ${Yt(t)}`:t.realName||t.name}!!!`,mood:"shout",roar:1})}else n.push({t:`${t.nickname?`${ou(t)}... "${t.nickname}"... ${Yt(t)}`:t.realName||t.name}!!!`,mood:"shout",gap:600,roar:1});return n}function Z0(s,e){let t=s.side==="p"?e.player:s.side==="o"?e.opponent:null,i=s.side==="p"?e.opponent:e.player,n=String(s.move||"").toLowerCase(),r=/spinning|cartwheel|rolling|tornado|superman|showtime|question|axe|flying|jumping|hook kick/.test(n);return s.type==="info"&&s.touch==="o"?`${Yt(e.player)} refuses to touch gloves! Listen to that crowd!`:s.type==="info"&&s.touch==="p"?`${Yt(e.opponent)} leaves ${Yt(e.player)} hanging! There's bad blood here!`:t?s.type==="kd"?`DOWN GOES ${Yt(i).toUpperCase()}! WHAT A SHOT!`:s.type==="big"?r?`OHHH! A ${n.toUpperCase()}! ${Yt(i)} is HURT!`:`${Yt(i)} is HURT! ${Yt(t)} smells blood!`:s.type==="strike"&&r?`Did you SEE that?! A ${n}!`:s.type==="td"&&/slam|suplex|judo/.test(n)?`WHAT A ${n.includes("slam")?"SLAM":n.includes("suplex")?"SUPLEX":"THROW"}! The crowd is on its feet!`:s.type==="subatt"?`${Yt(t)} has it locked in! ${Yt(i)} is in serious trouble!`:s.type==="ground"&&s.p==="back"?`${Yt(t)} takes the back! Here comes the choke!`:s.type==="ground"&&s.p==="mount"?`Full mount! ${Yt(i)} has to get out of there!`:null:null}function hu(s,e,t){return t?"The doctor has seen enough! This fight is OVER!":s.methodType==="SUB"?"TAP! TAP! He taps! It's all over!".replace("He taps",`${Yt(e==="p"?s.opponent:s.player)} taps`):s.methodType==="DEC"||!e?null:"IT'S ALL OVER!!! WHAT A FINISH!"}var Tt=4.4,ur="#d62828",dr="#2f6fed",Kt=Math.PI*2;function cu(s,e,t){let i=(e-s)%Kt;return i>Math.PI&&(i-=Kt),i<-Math.PI&&(i+=Kt),s+i*t}var os=(s,e)=>1-Math.exp(-s*e),cr=(s,e)=>Math.atan2(e.x-s.x,e.z-s.z);function ml(s,e,t){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let n=new sn(i);return n.colorSpace=at,n.anisotropy=4,n}var fl=null;function ef(){return fl||(fl=ml(64,64,(s,e)=>{let t=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,240,200,.85)"),t.addColorStop(1,"rgba(255,200,120,0)"),s.fillStyle=t,s.fillRect(0,0,e,e)}),fl)}function tf(){let s;try{s=new jr({antialias:!0,powerPreference:"high-performance"})}catch(f){return console.warn("WebGL unavailable, 3D disabled",f),null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=Sc,s.outputColorSpace=at,s.toneMapping=Ec,s.toneMappingExposure=1.05;let e=s.domElement;try{let f=new Xs(s);N0(f.fromScene(new dl,.04).texture)}catch(f){console.warn("No reflection map",f)}e.className="stage3d";let t=new uu,i=new du,n=new ul,r=null,a=null,o=new Vo,l=()=>{if(!a)return;let f=Math.max(1,a.clientWidth),x=Math.max(1,a.clientHeight);s.setSize(f,x,!1),e.style.width="100%",e.style.height="100%",r.camera.aspect=f/x,r.camera.updateProjectionMatrix()},h=new ResizeObserver(l),c=null,u=f=>x=>r&&r.pointer?(r.pointer(f,x,e),!0):!1,d=u("down"),p=u("move"),m=u("up");e.addEventListener("pointerdown",f=>{d(f)||(c={x:f.clientX},e.setPointerCapture(f.pointerId))}),e.addEventListener("pointermove",f=>{p(f)||!c||!r||(r.userYaw=(r.userYaw||0)-(f.clientX-c.x)*.008,c.x=f.clientX)}),e.addEventListener("pointerup",f=>{m(f)||(c=null)}),e.addEventListener("pointercancel",()=>{c=null});function v(f,x){let y=x==="arena"?i:x==="world"?n:t;n.active=y===n,!(a===f&&r===y)&&(y===n&&n.enter(),a&&h.unobserve(a),a=f,r=y,f.appendChild(e),h.observe(f),l())}return s.setAnimationLoop(()=>{let f=Math.min(o.getDelta(),.1);!r||!a||!a.isConnected||a.offsetParent===null||document.hidden||(r.update(f),s.render(r.scene,r.camera))}),{preview:t,arena:i,world:n,show:v}}var uu=class{constructor(){let e=this.scene=new nn;e.background=new Ee("#0f1116"),e.fog=new Ys("#0f1116",7,14),this.camera=new wt(32,1,.1,50),e.add(new es("#cfd8ff","#1a1410",.9));let t=new tr("#fff3e2",60,12,.55,.6,1.6);t.position.set(1.5,5.5,3),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),e.add(t,t.target);let i=new ts(ur,9,8,1.5);i.position.set(-2.5,1.8,-1.5);let n=new ts(dr,9,8,1.5);n.position.set(2.5,1.8,-1.5),e.add(i,n);let r=new pe(new Kn(2.2,48),new ht({roughness:.9,map:ml(256,256,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"#3a3e48"),l.addColorStop(.8,"#1c1f26"),l.addColorStop(1,"#0f1116"),a.fillStyle=l,a.fillRect(0,0,o,o),a.strokeStyle="rgba(229,56,59,.7)",a.lineWidth=4,a.beginPath(),a.arc(o/2,o/2,o*.44,0,Kt),a.stroke()})}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.fighters=[],this.key="",this.userYaw=0,this.t=0,this.nextMove=2}setFighters(e){let t=JSON.stringify(e);if(t===this.key)return;this.key=t,this.fighters.forEach(n=>n.dispose());let i=e.map(n=>n.look?an(n.look):Ln(n.name||"x"));i.length===2&&i[0].shorts===i[1].shorts&&(i[1].shorts=(i[1].shorts+3)%8),this.fighters=e.map((n,r)=>{let a=new fi({look:i[r],weightClass:n.weightClass,style:n.style,glove:r?dr:ur,tattooText:n.ink});return a.setBelt(n.belt||null),a.setInjured(!!n.injured),this.scene.add(a.root),a}),this.fighters.length===2&&(this.fighters[0].root.position.set(-.62,0,0),this.fighters[0].root.rotation.y=Math.PI/2,this.fighters[1].root.position.set(.62,0,0),this.fighters[1].root.rotation.y=-Math.PI/2),this.fighters.forEach(n=>n.lastPos.copy(n.root.position))}update(e){this.t+=e;let t=this.fighters.length===2;if(!t&&this.fighters[0]){let o=this.fighters[0];if(o.root.rotation.y=Math.sin(this.t*.35)*.7+.35+this.userYaw,this.nextMove-=e,this.nextMove<=0&&!o.busy){let l=["jab","jab-cross","left hook","uppercut","body kick","1-2-hook combination","leg kick","head kick","knee up the middle"];o.play(nl(l[Math.floor(Math.random()*l.length)],1+Math.floor(Math.random()*3)).frames,"stance"),this.nextMove=1.4+Math.random()*2}}this.fighters.forEach(o=>o.update(e));let i=t?this.userYaw*.6+Math.sin(this.t*.2)*.25:0,n=Math.tan(Jp.degToRad(this.camera.fov/2)),r=n*this.camera.aspect,a=Math.max(t?4.3:3.7,(t?1.45:.75)/r,1.2/n);this.camera.position.set(Math.sin(i)*a,t?1.35:1.2,Math.cos(i)*a),this.camera.lookAt(0,.98,0)}};function xv(s){let e=new pe(new _t(Tt+.5,Tt+.62,.9,8,1),new ht({color:"#121318",roughness:.8}));e.rotation.y=Math.PI/8,e.position.y=-.465,e.receiveShadow=!0,s.add(e);let t=ml(1024,1024,(u,d)=>{u.fillStyle="#bdb8ad",u.fillRect(0,0,d,d);for(let m=0;m<1800;m++)u.fillStyle=`rgba(90,80,60,${Math.random()*.05})`,u.fillRect(Math.random()*d,Math.random()*d,2+Math.random()*20,2+Math.random()*20);let p=d/2;u.strokeStyle="rgba(20,20,24,.18)",u.lineWidth=6,u.beginPath(),u.arc(p,p,d*.17,0,Kt),u.stroke(),u.fillStyle="#c8102e",u.beginPath(),u.arc(p,p,d*.15,0,Kt),u.fill(),u.fillStyle="#fff",u.font=`italic 900 ${d*.1}px system-ui, sans-serif`,u.textAlign="center",u.textBaseline="middle",u.fillText("GFC",p,p+d*.005),u.fillStyle="rgba(20,20,24,.55)",u.font=`800 ${d*.035}px system-ui, sans-serif`;for(let[m,v]of[[0,"CAGE CAREER"],[Math.PI,"CAGE CAREER"],[Math.PI/2,"FIGHT NIGHT"],[-Math.PI/2,"FIGHT NIGHT"]])u.save(),u.translate(p,p),u.rotate(m),u.fillText(v,0,d*.33),u.restore()}),i=new pe(new Kn(Tt+.02,8),new ht({map:t,roughness:.85}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/8,i.receiveShadow=!0,s.add(i);let n=ml(64,64,(u,d)=>{u.clearRect(0,0,d,d),u.strokeStyle="rgba(25,25,28,.95)",u.lineWidth=4,u.beginPath(),u.moveTo(0,0),u.lineTo(d,d),u.moveTo(d,0),u.lineTo(0,d),u.stroke()});n.wrapS=n.wrapT=zr;let r=2*Tt*Math.sin(Math.PI/8),a=1.75;n.repeat.set(r/.09,a/.09);let o=new ht({map:n,transparent:!0,alphaTest:.25,side:jo,roughness:.5,metalness:.4,depthWrite:!1}),l=new ht({color:"#0b0b0d",roughness:.55}),h=[],c=[];for(let u=0;u<8;u++){let d=u/8*Kt+Math.PI/8,p=(u+1)/8*Kt+Math.PI/8,m=new b(Math.sin(d)*Tt,0,Math.cos(d)*Tt),v=new b(Math.sin(p)*Tt,0,Math.cos(p)*Tt),f=m.clone().add(v).multiplyScalar(.5),x=new pe(new ci(r,a),o);x.position.set(f.x,a/2+.12,f.z),x.lookAt(0,a/2+.12,0),s.add(x),c.push(x);let y=new pe(new _t(.06,.06,r,10),l);y.position.set(f.x,a+.14,f.z),y.quaternion.setFromUnitVectors(new b(0,1,0),v.clone().sub(m).normalize()),s.add(y);let g=new pe(new lt(r,.18,.14),l);g.position.set(f.x,.09,f.z),g.lookAt(0,.09,0),g.castShadow=!0,s.add(g),h.push(m)}return h.forEach((u,d)=>{let p=d===1?ur:d===5?dr:"#0b0b0d",m=new pe(new _t(.11,.11,a+.3,12),new ht({color:p,roughness:.5}));m.position.set(u.x,(a+.3)/2,u.z),m.castShadow=!0,s.add(m)}),{red:h[1],blue:h[5],panels:c}}function _v(s){let e=[];for(let g=0;g<10;g++){let _=Tt+2.6+g*.85,w=-.9+g*.42,M=Math.floor(Kt*_/.62);for(let T=0;T<M;T++){if(Math.random()<.08)continue;let P=T/M*Kt+g*.2;e.push({x:Math.sin(P)*_,y:w,z:Math.cos(P)*_,a:P,phase:Math.random()*Kt,s:.9+Math.random()*.25})}}let t=new di(.2,.36,3,8),i=new vt(.12,8,6),n=new Xr(t,new ht({roughness:.9}),e.length),r=new Xr(i,new ht({roughness:.8}),e.length),a=["#2b2f3a","#3d1f1f","#1f2a3d","#3a3a3a","#4a3b26","#5a1e1e","#1e3a2a","#6b6b6b","#151515","#7a2f2f"],o=["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],l=new Ee;e.forEach((g,_)=>{n.setColorAt(_,l.set(a[_%a.length]).multiplyScalar(.55+Math.random()*.5)),r.setColorAt(_,l.set(o[_*7%o.length]).multiplyScalar(.6))}),s.add(n,r);let h=60,c=new Float32Array(h*3),u=new Float32Array(h*3);for(let g=0;g<h;g++){let _=e[Math.floor(Math.random()*e.length)];c.set([_.x,_.y+.9,_.z],g*3)}let d=new nt;d.setAttribute("position",new gt(c,3)),d.setAttribute("color",new gt(u,3));let p=new Io(d,new Yr({size:.5,map:ef(),vertexColors:!0,transparent:!0,blending:Tc,depthWrite:!1}));s.add(p);let m=new Ae,v=new oi,f=new b(0,1,0),x=new b,y=new b;return{update(g,_){e.forEach((w,M)=>{let T=Math.max(0,Math.sin(g*(6+M%5)+w.phase))*.16*_;v.setFromAxisAngle(f,w.a+Math.PI),y.setScalar(w.s),m.compose(x.set(w.x,w.y+.38*w.s+T,w.z),v,y),n.setMatrixAt(M,m),m.compose(x.set(w.x,w.y+.82*w.s+T,w.z),v,y),r.setMatrixAt(M,m)}),n.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0;for(let w=0;w<h;w++){let M=Math.random()<.004+_*.025?1:0;u[w*3]=u[w*3+1]=u[w*3+2]=M}d.attributes.color.needsUpdate=!0}}}var ma=class{constructor(e,t){this.tag=e,this.f=t,this.pos=new b,this.target=new b,this.yaw=0,this.fixedYaw=null,this.rate=4,this.lunge=0,this.lungeTarget=0,this.lungeUntil=0,this.ring=null,this.dmg=0,this.bdmg=0,this.ldmg=0}hurt(e,t=this.bdmg,i=this.ldmg){this.dmg=Math.min(1,Math.max(0,e)),this.bdmg=Math.min(1,Math.max(0,t)),this.ldmg=Math.min(1,Math.max(0,i)),this.f.setDamage(this.dmg,this.bdmg,this.ldmg)}},Q0={guard:{a:.46,c:0,yaw:Math.PI},half:{a:.4,c:.06,yaw:Math.PI},mount:{a:-.3,c:0,yaw:Math.PI},side:{a:-.3,c:.5,yaw:-Math.PI/2},back:{a:-.3,c:0,yaw:0},headlock:{a:.85,c:0,yaw:Math.PI},legs:{a:.85,c:0,yaw:Math.PI},armbar:{a:-.3,c:.5,yaw:-Math.PI/2}},bv={strike:1e3,miss:800,big:1500,kd:2100,td:1500,stuff:1300,sweep:1400,ground:900,gnp:1e3,subatt:1800,info:1100,round:2e3,finish:3800},du=class{constructor(){let e=this.scene=new nn;e.background=new Ee("#07080b"),e.fog=new Co("#07080b",.035),this.camera=new wt(42,1,.1,80),e.add(new es("#9fb0d6","#2a2018",.55));let t=new tr("#fff6e8",95,22,.6,.6,1.1);t.position.set(0,10,.5),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.bias=-.002,t.shadow.normalBias=.03,t.shadow.camera.near=4,t.shadow.camera.far=14,e.add(t,t.target);for(let[c,u,d]of[[-6,-4,ur],[6,4,dr]]){let p=new tr(d,40,16,.5,.8,1.2);p.position.set(c,5,u),e.add(p,p.target)}let i=new pe(new pi(5.2,.08,6,8),new ht({color:"#222",metalness:.6,roughness:.4}));i.rotation.x=Math.PI/2,i.position.y=7.4,e.add(i);let n=new Dt({color:"#fff7df"});for(let c=0;c<16;c++){let u=c/16*Kt,d=new pe(new lt(.28,.16,.28),n);d.position.set(Math.sin(u)*5.2,7.25,Math.cos(u)*5.2),e.add(d)}let r=xv(e);this.panels=r.panels,this.cornerSpot={p:r.red.clone().multiplyScalar(.8),o:r.blue.clone().multiplyScalar(.8)},this.crowd=_v(e),this.sparks=[];for(let c=0;c<24;c++){let u=new qs(new Jn({map:ef(),blending:Tc,depthWrite:!1,transparent:!0,opacity:0}));u.visible=!1,e.add(u),this.sparks.push({s:u,t:1,dur:.2,v:new b,size:.3})}let a=new ht({color:"#b3120f",roughness:.25,emissive:"#4a0000"}),o=new vt(.018,6,5);this.drops=[];for(let c=0;c<48;c++){let u=new pe(o,a);u.visible=!1,e.add(u),this.drops.push({m:u,v:new b,live:!1})}let l=new Dt({color:"#7a0a0a",transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),h=new Kn(1,14);h.rotateX(-Math.PI/2),this.stains=[];for(let c=0;c<70;c++){let u=new pe(h,l);u.visible=!1,e.add(u),this.stains.push(u)}this.stainNext=0,this.P=this.O=this.ref=null,this.key="",this.t=0,this.timers=[],this.slowUntil=0,this.real=0,this.excite=.25,this.userYaw=0,this.speed=1,this.mode="intro",this.C=new b,this.theta=0,this.G=new b,this.gDir=new b(1,0,0),this.cam={yaw:.3,dist:5,h:1.7,focus:new b(0,1,0),close:null,shake:0}}load(e,t){let i=t.playerLook?an(t.playerLook):Ln(e.player.realName||e.player.name),n=e.opponent.look?an(e.opponent.look):Ln(e.opponent.realName||e.opponent.name);n.shorts===i.shorts&&(n.shorts=(n.shorts+3)%8);let r=JSON.stringify([e.player.name,e.opponent.name,i,n,t.weightClass]);if(r!==this.key){this.key=r;for(let o of[this.P,this.O])o&&(o.f.dispose(),o.ring.removeFromParent());this.ref&&this.ref.f.dispose();let a=o=>o.nickname||String(o.realName||o.name).split(" ").pop();this.P=new ma("p",new fi({look:i,weightClass:t.weightClass,style:e.player.style,glove:ur,tattooText:a(e.player)})),this.O=new ma("o",new fi({look:n,weightClass:t.weightClass,style:e.opponent.style,glove:dr,tattooText:a(e.opponent)})),this.ref=new ma("r",new fi({ref:!0,look:{skin:1,hair:0,hairColor:5,beard:0,shorts:2}})),this.ref.f.setBase("ref");for(let o of[this.P,this.O]){let l=new pe(new ta(.42,.5,32),new Dt({color:o.tag==="p"?ur:dr,transparent:!0,opacity:.55,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.012,this.scene.add(l),o.ring=l}for(let o of[this.P,this.O,this.ref])this.scene.add(o.f.root)}this.restore(e)}stain(e,t,i){let n=this.stains[this.stainNext++%this.stains.length];n.visible=!0,n.position.set(e,.016,t),n.scale.set(i*(.7+Math.random()*.6),1,i*(.7+Math.random()*.6)),n.rotation.y=Math.random()*Kt}bloodSpray(e,t,i){let n=e.f.worldPoint("head"),r=e.pos.clone().sub(t.pos).setY(0).normalize(),a=Math.round(4+i*5);for(let o=0;o<a;o++){let l=this.drops.find(h=>!h.live);if(!l)break;l.live=!0,l.m.visible=!0,l.m.position.copy(n),l.m.scale.setScalar(.6+Math.random()*1.2),l.v.copy(r).multiplyScalar(1+Math.random()*2.5*i).add(new b((Math.random()-.5)*1.6,.5+Math.random()*1.8,(Math.random()-.5)*1.6))}}restore(e){this.timers=[],this.slowUntil=0,this.cam.shake=0,this.mode=e.round===0?"intro":"stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.lastInfo="",this.lastG="",this.refIn=!1,this.ended=this.decision=null,this.ref.f.setBase("ref"),this.C.set(0,0,0),this.theta=0,this.cam.close=null,this.userYaw=0;for(let n of[this.P,this.O])n.fixedYaw=null,n.f.setBase(e.round===0?"relaxed":"stance"),n.f.setBelt(e.round===0&&e.belt&&e.belt.champ===n.tag?"shoulder":null);e.round===0&&(this.P.pos.copy(this.cornerSpot.p).multiplyScalar(.5),this.O.pos.copy(this.cornerSpot.o).multiplyScalar(.5));for(let n of this.stains)n.visible=!1;for(let n of this.drops)n.live=!1,n.m.visible=!1;let t=n=>e.round===0?0:Math.min(1,(100-n.health)/90+e.round*.05);this.P.hurt(t(e.player),t(e.player)*.7,t(e.player)*.6),this.O.hurt(t(e.opponent),t(e.opponent)*.7,t(e.opponent)*.6);let i=Math.round((this.P.dmg+this.O.dmg)*14);for(let n=0;n<i;n++){let r=Math.random()*Kt,a=Math.random()*Tt*.6;this.stain(Math.cos(r)*a,Math.sin(r)*a,.04+Math.random()*.14)}for(let n of e.logs.flat())this.handle(n,e,!0);this.layout(0);for(let n of[this.P,this.O,this.ref])n.pos.copy(n.target),n.yaw=n.fixedYaw??(n===this.ref?cr(n.pos,this.C):cr(n.pos,this.other(n).pos)),n.lunge=n.lungeTarget=0,n.f.snap(),this.place(n,0),n.f.lastPos.copy(n.f.root.position);this.snapCamera()}setSpeed(e){this.speed=e}other(e){return e===this.P?this.O:this.P}side(e){return e==="p"?this.P:e==="o"?this.O:null}flush(){let e=this.timers.sort((t,i)=>t.at-i.at);this.timers=[],e.forEach(t=>t.fn())}later(e,t,i){i?t():this.timers.push({at:this.t+e,fn:t})}play(e,t){return this.handle(e,t,!1)}handle(e,t,i){this.flush();let n=this.side(e.side),r=n?this.other(n):null,a=e.g!==void 0?e.g:this.inferG(e),o=(h,c,u)=>{u&&h.f.setBase(u),i||h.f.play(c,u)},l=bv[e.type]||1e3;switch(e.type){case"info":if(e.side==="n"){this.mode="stand",this.top=this.down=null,this.refIn=!1,this.C.set(0,0,0);let h=Number((e.text.match(/Round (\d+)/)||[])[1])||t.round,c=e.touch!==void 0?e.touch:h===1?"both":null;for(let u of[this.P,this.O])u.fixedYaw=null,u.f.setBelt(null),c==="both"||c==="p"&&u===this.P||c==="o"&&u===this.O?o(u,Xt.touch,"stance"):c?o(u,Xt.refuse,"stance"):o(u,[[Xe.stance,.3,8]],"stance");if(!i){Pi("bell"),It(.5),this.excite=.7;let u=Number((e.text.match(/Round (\d+)/)||[])[1])||t.round;Fi(K0(u,t),u===1)}l=2300}else l=this.info(e,n,r,o,i);break;case"strike":case"miss":case"big":case"kd":{this.mode!=="stand"&&this.standUp(i,o);let h=e.type==="big"||e.type==="kd",c=nl(e.move,e.n||1,!1);if(o(n,c.frames,"stance"),i){e.type==="kd"&&this.knockDown(r,!0);break}n.lungeTarget=c.fwd||.15,n.lungeUntil=this.t+(c.lungeFor||.35);let u=0,d=!0,p=0;for(let m of c.frames){if(m[3]){let v=u+Math.min(m[1],.09);if(e.type==="miss")d&&this.later(Math.max(0,v-.12),()=>{r.f.play(Xt.slip,"stance"),Pi("whoosh")});else{let f=p===(e.n||1)-1||m===c.frames[c.frames.length-1],x=h&&f?1.8:.6+Math.min(4,e.n||1)*.1;this.later(v,()=>this.impact(n,r,m[3],x)),p++}d=!1}u+=m[1]}e.type==="big"&&(this.later(u,()=>r.f.play(Xt.rocked,"stance")),this.closeUp(r,1.8),It(.8),iu(1.2),this.excite=1),e.type==="kd"&&(this.later(u,()=>this.knockDown(r,!1)),this.closeUp(r,2.2),iu(2)),l=Math.max(l,u*1e3+(e.type==="miss"?450:600)),e.type==="kd"&&(l+=900),e.type==="big"&&(l+=600);break}case"td":{if(i){this.goGround(a||n.tag,!0,e.p);break}this.mode!=="stand"&&this.standUp(!0,o);let h=I0(e.move,e.text);n.f.play(h.att,null),r.f.play(h.def,null),n.lungeTarget=h.fwd,r.lungeTarget=h.dFwd,n.lungeUntil=r.lungeUntil=this.t+h.mat,h.big&&this.closeUp(r,h.mat+.6,!0),this.later(h.mat,()=>{this.goGround(a||n.tag,!1,e.p),Pi("slam",h.big?1.6:1),It(h.big?1:.6),this.cam.shake=h.big?.24:.12,this.excite=h.big?1:.8}),l=Math.max(l,h.mat*1e3+700);break}case"stuff":{let h=r;i||(h.f.play(Xt.shoot,"stance"),h.lungeTarget=.4,h.lungeUntil=this.t+.45,this.later(.18,()=>{n.f.play(Xt.sprawl,"stance"),Pi("body",.5)}),It(.3));break}case"sweep":i||(Pi("slam"),It(.7),this.excite=.8),this.goGround(a||n.tag,i,e.p);break;case"ground":{if(this.mode!=="ground"?this.goGround(a||n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,i),!i){let h=this.side(this.top),c=this.other(h);h.f.play(Jc(h.f.base),h.f.base),c.f.play(Jc(c.f.base),c.f.base),e.p&&/back|mount/.test(e.p)&&It(.5)}break}case"gnp":{this.mode!=="ground"||this.top!==n.tag?this.goGround(n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,!0);let h=nl(e.move,e.n||1,!0,Xe[n.f.base]);if(o(n,h.frames,n.f.base),i)break;(/^(top|bottom|half)/i.test(r.f.base)||r.f.base==="mountBottom")&&r.f.play(Xt.block,r.f.base);let c=0;for(let u of h.frames)u[3]&&this.later(c+.06,()=>this.impact(n,r,"ground",.8+(e.n||1)*.1)),c+=u[1];l=Math.max(l,c*1e3+450);break}case"subatt":{let h=a||this.top||r.tag;(this.mode!=="ground"||this.top!==h)&&this.goGround(h,!0,e.p);let c=this.top!==n.tag,u=k0(e.move,c);this.setGroundPos(u.layout,i),this.holding=!0,n.f.setBase(u.attHold),r.f.setBase(u.defHold),i||(n.f.play(u.att,u.attHold),r.f.play(u.def,u.defHold),this.closeUp(this.side(this.top)===n?r:n,2.2,!0),It(.7),this.excite=.9),l=2200;break}case"round":this.mode="corners",this.top=this.down=null;for(let h of[this.P,this.O])h.fixedYaw=null,h.f.setBase("relaxed"),i||h.f.stopActions();i||(Pi("bell3"),It(.45),this.excite=.45);break;case"finish":l=this.finish(e,t,i,o);break}if(!i){let h=Z0(e,t);h&&V0(h)}return e.type!=="finish"&&e.type!=="round"&&!(e.type==="info"&&e.side==="n")&&(a===""&&this.mode==="ground"?this.standUp(i,o):a&&(this.mode!=="ground"||this.top!==a)&&e.type!=="td"?this.goGround(a,i,e.p):a&&this.mode==="ground"&&e.type!=="subatt"&&(this.holding||e.p&&e.p!==this.gpos)&&this.setGroundPos(e.p||this.gpos,i)),this.lastG=a,l}inferG(e){let t=this.lastG??"";return e.type==="td"||e.type==="sweep"?e.side:e.type==="info"&&/feet|get back up|scrambles/i.test(e.text)||e.type==="round"||e.type==="info"&&e.side==="n"?"":t}info(e,t,i,n,r){let a=e.text||"";return this.lastInfo=a,/survives/i.test(a)?(this.down=null,this.refIn=!1,this.mode="stand",n(t,Xt.getUp,"stance"),r||It(.6),1500):/referee jumps in/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(Xt.waveOff,"ref"),It(1),this.excite=1),1300):/doctor/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(Xt.waveOff,"ref"),It(.6)),1700):/escapes/i.test(a)?(r||(t.f.stopActions(),i.f.stopActions(),It(.4)),1e3):1100}impact(e,t,i,n){t.f.hit(i,Math.min(1.6,n));let r=i!=="body"&&i!=="leg";t.hurt(t.dmg+(r?.016:.003)*n,t.bdmg+(i==="body"?.045:0)*n,t.ldmg+(i==="leg"?.05:0)*n),r&&(n>1.1||t.dmg>.3&&Math.random()<.35+t.dmg*.4)&&this.bloodSpray(t,e,n),t.lungeTarget=-.1*n,t.lungeUntil=this.t+.18;let a=i==="body"?"chest":i==="leg"?"knL":"head",o=t.f.worldPoint(a);this.spark(o,n),Pi(i==="leg"?"kick":i==="body"?"body":i==="ground"?"ground":"punch",n),n>1.2?(this.cam.shake=Math.max(this.cam.shake,.06*n),It(.6)):Math.random()<.3&&It(.2),this.excite=Math.min(1,this.excite+.08*n)}knockDown(e,t){this.mode="down",this.down=e.tag,e.f.setBase("down"),!t&&(e.hurt(e.dmg+.12),this.bloodSpray(e,this.other(e),2.2),e.f.stopActions(),this.slowUntil=this.real+.8,Pi("ko"),It(1),this.excite=1,this.cam.shake=.15)}goGround(e,t,i){let n=this.side(e),r=this.other(n);this.mode!=="ground"?(this.G.copy(r.pos),this.G.length()>Tt*.55&&this.G.setLength(Tt*.55),this.gDir.copy(n.pos).sub(r.pos).setY(0),this.gDir.lengthSq()<1e-4&&this.gDir.set(1,0,0),this.gDir.normalize()):this.top!==e&&this.gDir.negate(),this.mode="ground",this.top=e,this.down=null,t||(n.f.stopActions(),r.f.stopActions()),this.setGroundPos(i||"guard",t)}setGroundPos(e,t){qc[e]||(e="guard"),this.gpos=e,this.holding=!1;let i=this.side(this.top),n=this.other(i),[r,a]=qc[e];i.f.setBase(r),n.f.setBase(a)}standUp(e,t){let n=this.mode==="ground"&&this.top?this.other(this.side(this.top)).tag:this.down;this.mode="stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.C.copy(this.P.pos).add(this.O.pos).multiplyScalar(.5).setY(0),this.theta=Math.atan2(this.O.pos.z-this.P.pos.z,this.O.pos.x-this.P.pos.x);for(let r of[this.P,this.O])r.tag===n?t(r,Xt.getUp,"stance"):(r.f.setBase("stance"),e||r.f.stopActions())}finish(e,t,i,n){let r=t.winner==="player"?this.P:t.winner==="opponent"?this.O:null,a=r?this.other(r):null,o=t.methodType,l=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",h=/doctor/i.test(this.lastInfo||"");if(i||(as(null),It(1),this.excite=1,setTimeout(()=>hl(l),900)),o==="DEC"||!r){let c=()=>{this.mode="ended",this.decision={W:r,L:a};for(let d of[this.P,this.O])d.f.setBase(r?d===r?"victory":"dejected":"relaxed");let u=r||t.belt&&this.side(t.belt.champ);t.belt&&u&&u.f.setBelt("waist"),r&&this.ref.f.setBase("refRaise")};return i?c():(Pi("bell3"),Fi(pl(t,r?r.tag:null)),this.later(1.2,c)),4200}if(o==="SUB"){if(!i){let c=a.f.base;a.f.play(Xt.tap(c),c),Pi("tap"),Fi([{t:hu(t,r.tag,!1),mood:"call",roar:1}]),Fi(pl(t,r.tag),!0),this.closeUp(a,2,!0)}return this.later(1.3,()=>{i||this.ref.f.play(Xt.waveOff,"ref"),this.refIn=!0},i),this.later(2,()=>this.endPoses(r,a,"sitting",i,t),i),4600}return!h&&this.down!==a.tag&&(i?this.knockDown(a,!0):this.later(.15,()=>this.knockDown(a,!1))),i||(Fi([{t:hu(t,r.tag,h),mood:"call",roar:1}]),Fi(pl(t,r.tag),!0),h||this.closeUp(a,1.8),this.refIn=!0),this.later(1.6,()=>this.endPoses(r,a,h?"dejected":"down",i,t),i),4400}endPoses(e,t,i,n,r){this.mode="ended",this.decision=null;let a=e.pos.clone().sub(t.pos).setY(0);a.lengthSq()<1e-4&&a.set(1,0,0);let o=t.pos.clone().addScaledVector(a.normalize(),2.2);o.length()>Tt*.62&&o.setLength(Tt*.62),this.ended={W:e,L:t,spot:o,lPos:t.pos.clone(),lYaw:t.yaw},t.f.setBase(i),e.f.setBase("victory"),n||e.f.play(Xt.celebrate,"victory"),r&&r.belt&&e.f.setBelt("waist")}layout(e){let t=this.P,i=this.O,n=this.ref,r=this.t;for(let a of[t,i])a.fixedYaw=null;switch(this.mode){case"intro":case"stand":{if(this.mode==="stand"){this.theta+=e*.16;let l=new b(Math.sin(r*.11)*1,0,Math.cos(r*.083)*.8);this.C.lerp(l,os(.3,e))}this.C.length()>Tt*.5&&this.C.setLength(Tt*.5);let a=new b(Math.cos(this.theta),0,Math.sin(this.theta)),o=this.mode==="intro"?1.05:1.3;t.target.copy(this.C).addScaledVector(a,-o/2),i.target.copy(this.C).addScaledVector(a,o/2),n.target.copy(this.C).addScaledVector(this.farSide(),this.refIn?.6:this.mode==="intro"?.9:2);break}case"ground":{let a=this.side(this.top),o=this.other(a),l=Q0[this.gpos]||Q0.guard,h=new b(this.gDir.z,0,-this.gDir.x);o.target.copy(this.G),a.target.copy(this.G).addScaledVector(this.gDir,l.a).addScaledVector(h,l.c),o.fixedYaw=Math.atan2(this.gDir.x,this.gDir.z),a.fixedYaw=o.fixedYaw+l.yaw,n.target.copy(this.G).addScaledVector(this.farSide(),this.refIn?.9:1.8).addScaledVector(this.gDir,.2);break}case"down":{let a=this.side(this.down),o=this.other(a);a.target.copy(a.pos);let l=o.pos.clone().sub(a.pos).setY(0);l.lengthSq()<1e-4&&l.set(1,0,0),l.normalize(),o.target.copy(a.pos).addScaledVector(l,1.15),a.fixedYaw=Math.atan2(l.x,l.z),n.target.copy(a.pos).addScaledVector(this.farSide(),this.refIn?.8:1.6).addScaledVector(l,.5);break}case"corners":t.target.copy(this.cornerSpot.p),i.target.copy(this.cornerSpot.o),t.fixedYaw=cr(t.target,new b),i.fixedYaw=cr(i.target,new b),n.target.set(0,0,0).add(new b(this.cornerSpot.p.z,0,-this.cornerSpot.p.x).setLength(1.2));break;case"ended":{if(this.decision){let a=new b(0,0,0),o=new b(Math.sin(this.cam.yaw),0,Math.cos(this.cam.yaw)),l=new b(o.z,0,-o.x),h=Math.atan2(o.x,o.z);n.target.copy(a);let{W:c,L:u}=this.decision;(c||t).target.copy(a).addScaledVector(l,-.55),(u||i).target.copy(a).addScaledVector(l,.55),t.fixedYaw=i.fixedYaw=n.fixedYaw=h}else if(this.ended){let{W:a,L:o,spot:l,lPos:h,lYaw:c}=this.ended;o.target.copy(h),o.fixedYaw=c,a.target.copy(l),a.fixedYaw=Math.atan2(this.camera.position.x-l.x,this.camera.position.z-l.z),n.target.copy(h).addScaledVector(this.farSide(),.9)}break}}(this.mode!=="ended"||!this.decision)&&(n.fixedYaw=null)}farSide(){return new b(-Math.sin(this.cam.yaw),0,-Math.cos(this.cam.yaw))}place(e,t){e.pos.lerp(e.target,os(e.rate,t));let i=e.fixedYaw??(e===this.ref?cr(e.pos,this.focusPoint()):cr(e.pos,this.other(e).pos));e.yaw=cu(e.yaw,i,os(8,t)),this.t>e.lungeUntil&&(e.lungeTarget=0),e.lunge+=(e.lungeTarget-e.lunge)*os(14,t);let n=e.f.root;n.position.set(e.pos.x+Math.sin(e.yaw)*e.lunge,0,e.pos.z+Math.cos(e.yaw)*e.lunge),n.rotation.y=e.yaw,e.ring&&e.ring.position.set(n.position.x,.012,n.position.z)}focusPoint(){return this.P.pos.clone().add(this.O.pos).multiplyScalar(.5)}spark(e,t){let i=t>1.2?6:2;for(let n=0;n<i;n++){let r=this.sparks.find(a=>a.t>=a.dur);if(!r)return;r.t=0,r.dur=n===0?.18:.45,r.size=n===0?.35+t*.2:.06,r.s.position.copy(e),r.v.set((Math.random()-.5)*2.5,Math.random()*2,(Math.random()-.5)*2.5),n===0&&r.v.set(0,0,0),r.s.visible=!0}}closeUp(e,t,i=!1){e&&(this.cam.close={s:e,until:this.real+t,low:i,fresh:!0})}snapCamera(){this.updateCamera(0,!0)}updateCamera(e,t=!1){let i=this.cam,n=this.P.pos,r=this.O.pos,a=r.clone().sub(n),o=Math.atan2(a.x,a.z)+Math.PI/2;Math.abs(cu(i.yaw,o,1)-i.yaw)>Math.PI/2&&(o+=Math.PI);let l,h,c,u=o+Math.sin(this.real*.07)*.5+this.userYaw,d=1.4;if(i.close&&this.real>i.close.until&&(i.close=null,t=!0),i.close)l=i.close.s.f.worldPoint(i.close.low?"chest":"head"),h=i.close.low?2.6:2.3,c=i.close.low?.9:.25,u=o+.65+this.userYaw,i.close.fresh&&(i.close.fresh=!1,t=!0),d=3;else{l=n.clone().add(r).multiplyScalar(.5);let x=this.mode;x==="ended"&&this.ended&&(l=this.ended.W.pos.clone().lerp(this.ended.L.pos,.35)),x==="ended"&&this.decision&&(l=new b),l.y=x==="ground"||x==="down"?.55:1.05,h={stand:4.7,intro:3.9,ground:3.9,down:4.1,corners:6.4,ended:4.4}[x]||4.7,c={corners:4.4,ground:1.1,down:1}[x]??.7,x==="corners"&&(l.set(0,.9,0),this.camera.aspect<1.1&&(u=Math.atan2(this.cornerSpot.p.x,this.cornerSpot.p.z)+.15+this.userYaw,h=8,c=5.5))}let p=t?1:os(d,e);i.yaw=cu(i.yaw,u,p),i.dist+=(h-i.dist)*p,i.h+=(c-i.h)*p,i.focus.lerp(l,t?1:os(d*1.5,e));let m=this.camera;m.position.set(i.focus.x+Math.sin(i.yaw)*i.dist,i.focus.y+i.h,i.focus.z+Math.cos(i.yaw)*i.dist);let v=Math.hypot(m.position.x,m.position.z),f=this.mode==="corners"&&!i.close?Tt+4:Tt-.45;v>f&&(m.position.x*=f/v,m.position.z*=f/v,m.position.y+=(v-f)*.35);for(let x of this.panels)x.visible=x.position.distanceTo(m.position)>1.6||v<Tt-1.6;i.shake>.001&&(m.position.x+=(Math.random()-.5)*i.shake,m.position.y+=(Math.random()-.5)*i.shake,i.shake*=Math.exp(-e*6)),m.lookAt(i.focus)}update(e){if(!this.P)return;this.real+=e;let t=this.real<this.slowUntil?.3:1,i=e*t*this.speed;this.t+=i;let n=this.timers.filter(r=>r.at<=this.t);this.timers=this.timers.filter(r=>r.at>this.t),n.forEach(r=>r.fn()),this.layout(i);for(let r of[this.P,this.O,this.ref])r.rate=this.mode==="ground"?7:4,this.place(r,i),r.f.update(i);this.excite+=(.25-this.excite)*os(.35,e),this.crowd.update(this.real,this.excite);for(let r of this.drops)r.live&&(r.v.y-=9.8*i,r.m.position.addScaledVector(r.v,i),r.m.position.y<=.02&&(r.live=!1,r.m.visible=!1,Math.hypot(r.m.position.x,r.m.position.z)<Tt-.3&&this.stain(r.m.position.x,r.m.position.z,.03+Math.random()*.07)));for(let r of this.sparks){if(r.t>=r.dur)continue;r.t+=i;let a=Math.min(1,r.t/r.dur);r.s.position.addScaledVector(r.v,i),r.v.y-=6*i,r.s.scale.setScalar(r.size*(r.size>.1?.4+a:1)),r.s.material.opacity=1-a,a>=1&&(r.s.visible=!1)}this.updateCamera(e)}};var ce=class extends Error{},fe=()=>Math.random(),De=s=>Math.floor(Math.random()*s),Mu=()=>Math.random()<.5;function hs(){let s=0;for(;s===0;)s=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*Math.random())}var Ye=s=>s[De(s.length)],mt=(s,e,t)=>Math.max(e,Math.min(t,s)),ga=s=>Math.round(s).toLocaleString("en-US");function Mv(s){for(let e=s.length-1;e>0;e--){let t=De(e+1);[s[e],s[t]]=[s[t],s[e]]}return s}function _l(){let s="";for(let e=0;e<32;e++)s+=De(16).toString(16);return s}var qt=["striking","power","speed","wrestling","grappling","cardio","chin"],pf=["Striker","Wrestler","Jiu-Jitsu","Balanced"],wv=["Marcus","Diego","Ivan","Kenji","Tariq","Lucas","Mateo","Andre","Sergei","Malik","Rafael","Connor","Jamal","Tomasz","Kai","Darius","Elijah","Bruno","Nikolai","Omar","Viktor","Hiroshi","Leon","Caleb","Arman","Zane","Felipe","Yusuf","Dmitri","Jae-won","Mason","Tyrell","Santiago","Emeka","Rustam","Liam","Paulo","Gabe","Anton","Quinn"],Sv=["Silva","Petrov","Okafor","Tanaka","Reyes","Kowalski","Brennan","Haddad","Volkov","Santos","Mendes","Novak","Adeyemi","Kim","Duarte","Morales","Ivanov","Walsh","Nakamura","Costa","Abdullaev","Fischer","Okoye","Lindqvist","Moreau","Gutierrez","Tsarukyan","Barros","Hughes","Nguyen","Castillo","Yamamoto","Kruger","Dvorak","Ferreira","O'Rourke","Bakr","Salazar","Jensen","Popescu"],Tv=["The Hammer","Iceman","The Machine","Bulldozer","The Python","Lights Out","Storm","The Reaper","Mad Dog","The Surgeon","Thunder","The Wolf","Cyclone","The Anaconda","Dynamite","Ghost","The Butcher","Smooth","The Natural","Venom","Tank","Kid Danger","The Professor","Wildfire"],wu=["USA","Brazil","Russia","Mexico","Ireland","Japan","Nigeria","Poland","Australia","Canada","Georgia","Sweden","England","South Korea","France","Kazakhstan","Netherlands","Cuba","Vietnam","Philippines"],xt=class s{constructor(e,t,i,n,r){this.id=_l().slice(0,12),this.name=e,this.nickname=t||"",this.style=i,this.country=n,this.age=r,this.stats={};for(let a of qt)this.stats[a]=40;this.wins=this.losses=this.draws=this.koWins=this.subWins=this.decWins=0,this.streak=0,this.player=!1,this.look=null}get(e){return this.stats[e]??0}set(e,t){this.stats[e]=mt(t,1,99)}add(e,t){this.set(e,this.get(e)+t)}overall(){let e=0;for(let t of qt)e+=this.get(t);return Math.round(e/qt.length)}record(){return`${this.wins}-${this.losses}-${this.draws}`}lastName(){return this.name.slice(this.name.lastIndexOf(" ")+1)}displayName(){if(!this.nickname.trim())return this.name;let e=this.name.lastIndexOf(" ");return e<0?`${this.name} "${this.nickname}"`:`${this.name.slice(0,e)} "${this.nickname}" ${this.name.slice(e+1)}`}recordResult(e,t){e==="W"?(this.wins++,this.streak=this.streak>0?this.streak+1:1,t==="KO"?this.koWins++:t==="SUB"?this.subWins++:this.decWins++):e==="L"?(this.losses++,this.streak=this.streak<0?this.streak-1:-1):(this.draws++,this.streak=0)}static bias(e,t){let i={Striker:{striking:12,power:8,speed:6,wrestling:-8,grappling:-10},Wrestler:{wrestling:14,cardio:7,grappling:3,power:2,striking:-6,speed:-3},"Jiu-Jitsu":{grappling:16,wrestling:3,cardio:3,striking:-8,power:-6}}[e];return i&&i[t]||0}static weightAdj(e,t){let i=e-3.5;return t==="power"?i*1.6:t==="speed"?-i*1.6:t==="chin"?i*.6:0}static generate(e,t){let i=Ye(pf),n=Ye(wv)+" "+Ye(Sv),r=fe()<.6?Ye(Tv):"",a=new s(n,r,i,Ye(wu),22+De(13));for(let o of qt)a.set(o,e+s.bias(i,o)+s.weightAdj(t,o)+hs()*4);return a.wins=Math.max(0,Math.trunc((e-30)/3.5)+De(4)),a.losses=De(2+Math.floor(a.wins/4)),a.draws=fe()<.15?1:0,a.koWins=Math.floor(De(a.wins+1)/2),a.subWins=Math.floor(De(a.wins-a.koWins+1)/2),a.decWins=a.wins-a.koWins-a.subWins,a.streak=De(4),a}toJson(){return{name:this.name,nickname:this.nickname,displayName:this.displayName(),style:this.style,country:this.country,age:this.age,record:this.record(),overall:this.overall(),koWins:this.koWins,subWins:this.subWins,decWins:this.decWins,streak:this.streak,stats:{...this.stats},look:this.look}}};xt.tag="Fighter";function Ev(s,e){let t=qt.map(n=>Math.round(e+xt.bias(s.style,n)*.5)),i=e*qt.length-t.reduce((n,r)=>n+r,0);for(let n=0;i!==0;n=(n+1)%t.length){let r=Math.sign(i);t[n]+=r,i-=r}qt.forEach((n,r)=>s.set(n,t[r]))}function pu(s){return["Champion","Champion","Champ-champ","Triple champ","Quadruple champ"][s]||s+"-belt champion"}var ff=["head","striking","wrestling","bjj","snc","physio","manager"],Rv=[0,100,250,600,1500,3500],Av=["Greg","Rafa","Mike","Duke","Javier","Firas","Trevor","Eddie","Mark","Henri","Ray","Sam","Bas","Andre","Lou","Teo","Frankie","Coach Kim","Pat","Oleg"],Cv=["Jacobsen","Cordova","Winkler","Rourke","Mendez","Haddadi","Whitlock","Bravo","Delgado","Dunmore","Lombardi","Kearney","Tatum","Mirkovic","Sauer","Ben\xEDtez","Reed","Holmberg","Okafor","Varga"],Lv={head:"Head Coach",striking:"Striking Coach",wrestling:"Wrestling Coach",bjj:"BJJ Coach",snc:"Strength & Conditioning",physio:"Physio",manager:"Manager"},dn=class s{constructor(e,t,i){this.role=e,this.name=t,this.stars=i}salary(){return Rv[this.stars]}signingFee(){return this.salary()*4}fameRequired(){return(this.stars-1)*12}static title(e){return Lv[e]||e}static perk(e,t){switch(e){case"head":return`+${3*t}% all training, +${2*t} stamina between rounds`+(t>=3?", scouts the opponent's game plan":"");case"striking":return`+${10*t}% striking, power & speed training`;case"wrestling":return`+${10*t}% wrestling training`;case"bjj":return`+${10*t}% grappling training`;case"snc":return`+${10*t}% cardio & chin training, -${t} energy per session`;case"physio":return`-${15*t}% injury risk, faster healing, +${3*t} energy on rest weeks`;case"manager":return`+${5*t}% purses, extra fame from media & trash talk`;default:return""}}static generate(){let e=Ye(ff),t=fe(),i=t<.3?1:t<.6?2:t<.82?3:t<.94?4:5;return new s(e,Ye(Av)+" "+Ye(Cv),i)}toJson(){return{role:this.role,title:s.title(this.role),name:this.name,stars:this.stars,salary:this.salary(),fee:this.signingFee(),fameRequired:this.fameRequired(),perk:s.perk(this.role,this.stars)}}};dn.tag="Staff";var hn={RESPECT:["{o} is a tough fighter and I respect the grind. But respect ends when the cage door closes.","Nothing but respect for {o}. May the best fighter win.","{o} has earned this. I'm just going to be better on the night.","I've studied {o} for years. Great fighter. That's why beating them will mean something."],TRASH:["{o} fights like they learned MMA from a video game. I'm going to expose that.","I watched {o}'s highlight reel. Didn't take long.","Tell {o} to enjoy the walkout. It's the best part of the night for them.","{o}'s chin has been writing checks the rest of that body can't cash.","I'm going to put {o} on a poster \u2014 the 'before' picture.","{o} has a great ground game. That's where they'll be looking at the lights from."],PERSONAL:["{o} is a fraud, the whole gym knows it, and I'm going to prove it in front of everyone.","When I'm done, {o} will be teaching seminars on how to lose.","{o}'s coach should be charged with negligence for letting them take this fight.","I don't just want to beat {o}. I want {o} to retire."],REPLY_RESPECT:["Respect to {m}. It's going to be a great fight.","{m} is the real deal. I'm ready for war.","Class act, that {m}. Still putting them down, though."],REPLY_CALM:["{m} talks a lot for someone who hasn't fought anybody.","I'll let my hands do the talking on fight night.","Keep my name in your mouth, {m}. It's the closest you'll get to a win.","Words don't win fights. See you in the cage."],REPLY_ANGRY:["Say that to my face, {m}. Oh wait \u2014 you will. And then you'll be asleep.","This is personal now. {m} is leaving on a stretcher.","I'm going to make {m} regret every single word.","I've never wanted to hurt someone this badly. {m} just made my whole camp easy."],CALLOUTS:["{o} is hiding from me. Everyone knows I'm the better fighter.","Still waiting on {o} to sign the contract. Scared?","{o} got lucky last time and the whole world knows it.","I'll fight {o} anywhere, any time. Their team keeps saying no."]},gl=(s,e,t)=>s.replaceAll("{o}",e).replaceAll("{m}",t),fu=300,Tu={BALANCED:[1,1],STRIKE:[1.2,1],WRESTLE:[1.1,1.3],SUBMIT:[1,1.15],COUNTER:[.6,.65],ALLOUT:[1.6,1.9]},nf=s=>Tu[s][0],Pv=s=>Tu[s][1],sf=["jab-cross","stiff jab","overhand right","left hook","body kick","leg kick","uppercut","spinning back fist","knee up the middle","1-2-hook combination","straight left","calf kick","teep to the body","oblique kick","switch kick to the body","spinning back kick to the body","superman punch","front kick"],kv=["crushing overhand right","perfectly timed left hook","head kick","flying knee","short uppercut","counter right hand"],mu=["spinning back kick","spinning heel kick","spinning back elbow","superman punch","front kick to the face","question mark kick","cartwheel kick","tornado kick","rolling thunder kick","Showtime kick","axe kick","hook kick","jumping switch kick","jumping spinning back fist","flying knee","spinning back fist"],Iv=[["shoots a double-leg","double-leg"],["hits a single-leg","single-leg"],["secures a body lock","body lock"],["times a reactive takedown","reactive takedown"],["trips from the clinch","trip"],["hits a huge suplex","suplex"],["picks up and SLAMS","slam"],["launches a judo hip toss on","judo throw"],["snatches an ankle pick on","ankle pick"]],Su={"rear-naked choke":"back","arm-triangle choke":"side",kimura:"side","D'Arce choke":"headlock",armbar:"mount","guillotine choke":"headlock",americana:"side"},Nv=Object.keys(Su),Dv=["triangle choke","armbar","guillotine choke","kimura","heel hook","omoplata"],gu=["guard","half","side","mount","back"],rf={half:" passes into half guard.",side:" passes to side control.",mount:" climbs to full mount!",back:" takes the back!",headlock:" snaps down into a front headlock."},pr=s=>("aeiou".includes(s[0].toLowerCase())?"an ":"a ")+s,vl=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0"),gr=class{constructor(e,t){this.f=e,this.tag=t,this.damage=0,this.stamina=100,this.bonus=0,this.plan="BALANCED",this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0,this.totSig=this.totTd=this.totKd=0}s(e){return Math.min(99,this.f.get(e)+this.bonus)}sf(){return .45+this.stamina/180}n(){return this.f.lastName()}newRound(){this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0}toJson(){return{name:this.f.displayName(),record:this.f.record(),overall:this.f.overall(),style:this.f.style,look:this.f.look,realName:this.f.name,nickname:this.f.nickname,country:this.f.country,health:Math.max(0,100-this.damage),stamina:Math.max(0,this.stamina),sig:this.totSig,td:this.totTd,kd:this.totKd,plan:this.plan}}};gr.tag="Corner";var _a=class{constructor(e,t,i,n,r,a){this.p=new gr(e,"p"),this.o=new gr(t,"o"),this.o.bonus=r,this.rounds=i,this.title=n,this.coachStars=a,this.round=0,this.finished=!1,this.winner=this.methodType=this.method=this.endTime=null,this.endRound=0,this.judges=[[0,0],[0,0],[0,0]],this.logs=[],this.current=null,this.ground=!1,this.topTag=null,this.pos=null,this.clock=0,this.oppNext=this.aiPlan(1)}get top(){return this.topTag==="p"?this.p:this.topTag==="o"?this.o:null}set top(e){this.topTag=e?e.tag:null}playerDamage(){return this.p.damage}simulateRound(e,t=!0){if(this.finished)throw new ce("The fight is over.");this.round++;let i="Round "+this.round+" \u2014 touch gloves and let's go!",n=this.round===this.rounds&&this.rounds>1?"both":null;if(this.round===1){let r=fe()<.12+(this.o.bonus>0?.4:0),a=this.p.n(),o=this.o.n();t?r?(n="p",this.p.stamina=Math.min(100,this.p.stamina+3),i="Round 1 \u2014 "+o+" leaves "+a+" hanging! No glove touch. This is personal."):(n="both",i="Round 1 \u2014 they touch gloves, a sign of respect, and we're underway!"):(n="o",this.o.bonus+=1,i="Round 1 \u2014 "+a+" refuses to touch gloves! The crowd boos and "+o+" looks furious."),this.touch=n}for(this.p.plan=e,this.o.plan=this.oppNext,this.p.newRound(),this.o.newRound(),this.ground=!1,this.top=null,this.pos=null,this.clock=0,this.current=[],this.logs.push(this.current),this.ev("info",null,i),n&&(this.current[this.current.length-1].touch=n);!this.finished;){let r=10+De(16);if(this.clock+r>=fu){this.ground&&(this.top.control+=fu-this.clock),this.clock=fu;break}this.clock+=r,this.ground?(this.top.control+=r,this.groundExchange()):this.standExchange()}this.finished||this.closeRound()}aiPlan(e){let t={Striker:"STRIKE",Wrestler:"WRESTLE","Jiu-Jitsu":"SUBMIT"}[this.o.f.style]||"BALANCED",i=fe();return e===this.rounds&&this.rounds>1&&this.cardLead()>0&&i<.6?"ALLOUT":this.o.damage>60&&i<.4?this.o.f.style==="Striker"?"COUNTER":"WRESTLE":i<.2?"BALANCED":t}cardLead(){let e=0;for(let t of this.judges)e+=t[0]-t[1];return e}other(e){return e===this.p?this.o:this.p}drain(e){return 3.5*(1.6-e.s("cardio")/100)*Pv(e.plan)}standExchange(){let e=this.p,t=this.o,i=nf(e.plan)*(e.s("speed")+50)*e.sf(),n=nf(t.plan)*(t.s("speed")+50)*t.sf(),r=fe()*(i+n)<i?e:t,a=this.other(r),o={STRIKE:.08,WRESTLE:.55,SUBMIT:.45,COUNTER:.15,ALLOUT:.05}[r.plan]??mt(.22+(r.s("wrestling")-a.s("wrestling")-(r.s("striking")-a.s("striking")))/150,.05,.6);if(fe()<o?this.takedown(r,a):this.strike(r,a,!1),!this.finished&&!this.ground){let l=a.plan==="COUNTER"?.5:.2;fe()<l&&this.strike(a,r,!0)}}strike(e,t,i){let n=2+De(4)+(e.plan==="ALLOUT"?2:0),r=.38+(e.s("striking")-t.s("striking"))*.004+(e.s("speed")-t.s("speed"))*.002;r=r*e.sf()+(i?.06:0)-(t.plan==="COUNTER"?.05:0)+t.damage/500,r=mt(r,.1,.75);let a=0,o=0,l=!1;for(let c=0;c<n;c++)fe()<r&&(a++,o+=(.6+e.s("power")/60)*(.5+fe())*(e.plan==="ALLOUT"?1.25:1),!l&&fe()<.012+e.s("power")/3e3&&(l=!0));e.stamina=Math.max(0,e.stamina-this.drain(e));let h=.05+Math.max(0,e.s("striking")+e.s("speed")-110)/300;if(a===0){if(fe()<.35){let c=fe()<h*2?Ye(mu):Ye(sf);this.ev("miss",e,e.n()+" throws "+pr(c)+" but "+t.n()+" slips it.",c,0)}return}if(e.sig+=a,e.totSig+=a,l){o+=6+e.s("power")/8,this.hit(e,t,o);let c=fe()<.25+h?Ye(mu):Ye(kv),u=e.s("power")/100*.55*(1.25-t.s("chin")/100)+t.damage/250;if(fe()<u){e.kd++,e.totKd++,this.ev("kd",e,"DOWN GOES "+t.n().toUpperCase()+"! A "+c+" from "+e.n()+" puts "+t.n()+" on the canvas!",c,a);let d=.2+t.damage/180-t.s("chin")/400+(e.plan==="ALLOUT"?.1:0);if(fe()<d){Mu()?this.finish(e,"KO","KO ("+c+")"):this.finish(e,"KO","TKO (punches)");return}t.damage+=4,this.ev("info",t,t.n()+" survives the follow-up and makes it back to the feet!")}else this.ev("big",e,e.n()+" lands "+pr(c)+"! "+t.n()+" is rocked.",c,a)}else{this.hit(e,t,o);let c=fe()<h?Ye(mu):Ye(sf),u;i?u=e.n()+" fires back with "+pr(c)+".":a>=4?u=e.n()+" unloads a flurry \u2014 "+a+" strikes land on "+t.n()+".":a>=2?u=e.n()+" connects with "+pr(c)+".":u=e.n()+" lands "+pr(c)+".",this.ev("strike",e,u,c,a)}this.checkStoppage(e,t,"punches")}takedown(e,t){let i=.32+(e.s("wrestling")-t.s("wrestling"))*.008;if(i=mt(i*e.sf()+(t.stamina<35?.1:0),.05,.85),e.stamina=Math.max(0,e.stamina-this.drain(e)*1.4),fe()<i){e.td++,e.totTd++;let[n,r]=Ye(Iv);this.ground=!0,this.top=e;let a=fe(),o=r==="slam"||r==="suplex"||r==="judo throw"?.35:0;this.pos=a<.08+o/3?"mount":a<.2+o?"side":a<.42+o?"half":"guard";let l=/SLAMS|on$/.test(n)?e.n()+" "+n+" "+t.n()+"!":e.n()+" "+n+" and takes "+t.n()+" down.";this.ev("td",e,l,r,0)}else this.ev("stuff",t,t.n()+" stuffs a takedown attempt from "+e.n()+".")}groundExchange(){let e=this.top,t=this.other(e),i=(t.plan==="SUBMIT"?.45:.3)+(t.s("grappling")>e.s("grappling")+10?.1:0);if(fe()<i)if((t.plan==="SUBMIT"||t.s("grappling")>65&&fe()<.35)&&fe()<.5)this.submission(t,e,!0);else{let r=.28+(t.s("wrestling")-e.s("wrestling"))*.006+(t.s("grappling")-e.s("grappling"))*.003;r=mt(r*t.sf(),.05,.7),fe()<r?t.s("grappling")>e.s("grappling")&&fe()<.3?(this.top=t,this.pos=fe()<.3?"mount":"guard",this.ev("sweep",t,t.n()+" hits a slick sweep and ends up "+(this.pos==="mount"?"in full mount!":"on top!"))):this.position()>=2&&fe()<.5?(this.pos="guard",this.ev("ground",t,t.n()+" shrimps out and recovers guard.")):(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" scrambles back to the feet.")):fe()<.4&&this.ev("ground",e,e.n()+" keeps "+t.n()+" pinned against the fence.")}else{let n=(e.plan==="SUBMIT"||e.s("grappling")>70&&fe()<.25)&&fe()<.6,r=.18+(e.s("grappling")-t.s("grappling"))*.006;n?this.submission(e,t,!1):this.position()<4&&fe()<mt(r,.05,.45)?this.advance(e):this.groundAndPound(e,t)}e.stamina=Math.max(0,e.stamina-this.drain(e)*.8),t.stamina=Math.max(0,t.stamina-this.drain(t)*1.1)}position(){return Math.max(0,gu.indexOf(this.pos||"guard"))}advance(e){let t=this.position(),i=t>=1&&t<3&&fe()<.2?"back":gu[t+1];this.pos=i,this.ev("ground",e,e.n()+rf[i])}groundAndPound(e,t){let i=2+De(4),n=.45+(e.s("wrestling")+e.s("grappling")-t.s("wrestling")-t.s("grappling"))*.002;n=mt(n*e.sf(),.2,.75);let r=0,a=0;for(let l=0;l<i;l++)fe()<n&&(r++,a+=(.4+e.s("power")/80)*(.5+fe())*[1,1.05,1.1,1.3,1.2][this.position()]);if(r===0){fe()<.5&&this.ev("ground",t,e.n()+" postures up but "+t.n()+" ties up the arms.");return}e.sig+=r,e.totSig+=r,this.hit(e,t,a);let o={mount:" from full mount",back:" from back control",side:" from side control"}[this.pos]||"";r>=3?this.ev("gnp",e,e.n()+" rains down ground and pound"+o+" \u2014 "+r+" shots land!","punches",r):this.ev("gnp",e,e.n()+" lands "+(r===1?"a short elbow":"short punches")+" from top.",r===1?"elbow":"punches",r),this.checkStoppage(e,t,"ground and pound")}submission(e,t,i){e.subAtt++;let n=Ye(i?Dv:Nv);!i&&Su[n]!==this.pos&&(this.pos=Su[n],this.ev("ground",e,e.n()+(rf[this.pos]||" moves to "+this.pos+"."))),i&&(this.pos=n==="heel hook"?"legs":"guard");let r=.07+(e.s("grappling")-t.s("grappling"))*.006+t.damage/400+(t.stamina<35?.07:0);if(i&&(r*=.7),r=mt(r*e.sf(),.01,.55),e.stamina=Math.max(0,e.stamina-3),this.ev("subatt",e,e.n()+" locks up "+pr(n)+(i?" from the bottom!":"!"),n,0),fe()<r){this.finish(e,"SUB","Submission ("+n+")");return}this.ev("info",t,t.n()+" defends and escapes the "+n+"."),this.pos==="legs"||this.pos==="headlock"?this.pos="guard":!i&&fe()<.5&&(this.pos=gu[Math.max(0,this.position()-2)]),!i&&fe()<.25&&(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" uses the scramble to get back up."))}hit(e,t,i){t.damage+=i,e.dealt+=i}checkStoppage(e,t,i){this.finished||(t.damage>=100||t.damage>85&&fe()<.2)&&(this.ev("info",e,"The referee jumps in to save "+t.n()+"!"),this.finish(e,"KO","TKO ("+i+")"))}score(e){return e.sig+e.dealt*.6+e.td*3+e.control/25+e.kd*10+e.subAtt*2}closeRound(){let e=this.p,t=this.o,i=this.score(e),n=this.score(t);for(let r of this.judges){let a=i*(1+hs()*.12)+hs()*1.5,o=n*(1+hs()*.12)+hs()*1.5,l=a-o,h=10,c=10;l>=.6?c=e.kd-t.kd>=2||a>o*3&&l>30?8:9:l<=-.6&&(h=t.kd-e.kd>=2||o>a*3&&-l>30?8:9),r[0]+=h,r[1]+=c}this.ev("round",null,"End of round "+this.round+". Sig. strikes "+e.sig+"\u2013"+t.sig+", takedowns "+e.td+"\u2013"+t.td+", control "+vl(e.control)+"\u2013"+vl(t.control)+".");for(let r of[e,t])r.stamina=Math.min(100,r.stamina+18+r.s("cardio")/5+(r===e?this.coachStars*2:0)),r.damage=Math.max(0,r.damage-4);for(let r of[e,t])if(r.damage>85&&fe()<.15){this.ev("info",r,"The cageside doctor takes a look at "+r.n()+" and waves it off!"),this.finish(this.other(r),"KO","TKO (doctor stoppage)");return}this.round===this.rounds?this.decision():this.oppNext=this.aiPlan(this.round+1)}decision(){let e=0,t=0;for(let r of this.judges)r[0]>r[1]?e++:r[1]>r[0]&&t++;this.finished=!0,this.methodType="DEC",this.endRound=this.rounds,this.endTime="5:00",e>=2?(this.winner="player",this.method=e===3?"Unanimous Decision":t===1?"Split Decision":"Majority Decision"):t>=2?(this.winner="opponent",this.method=t===3?"Unanimous Decision":e===1?"Split Decision":"Majority Decision"):(this.winner="draw",this.method=e===0&&t===0?"Unanimous Draw":e===1&&t===1?"Split Draw":"Majority Draw");let i=this.winner==="player"?this.p:this.winner==="opponent"?this.o:null,n=i?"Winner by "+this.method+": "+i.f.displayName()+"!":"This one is a draw!";this.ev("finish",i,"The judges score it "+this.cards().join(", ")+". "+n)}finish(e,t,i){this.finished=!0,this.winner=e===this.p?"player":"opponent",this.methodType=t,this.method=i,this.endRound=this.round,this.endTime=vl(this.clock),this.ev("finish",e,"IT'S ALL OVER! "+e.f.displayName()+" wins by "+i+" at "+this.endTime+" of round "+this.round+"!")}cards(){return this.judges.map(e=>e[0]+"-"+e[1])}ev(e,t,i,n=null,r=0){let a={t:vl(this.clock),type:e,side:t?t.tag:"n",text:i,g:this.ground&&this.topTag?this.topTag:""};this.ground&&this.topTag&&(a.p=this.pos||"guard"),a.hp=[Math.max(0,Math.round(100-this.p.damage)),Math.max(0,Math.round(100-this.o.damage))],a.st=[Math.max(0,Math.round(this.p.stamina)),Math.max(0,Math.round(this.o.stamina))],a.sg=[this.p.totSig,this.o.totSig],n!=null&&(a.move=n),r>0&&(a.n=r),this.current.push(a)}toJson(){return{round:this.round,rounds:this.rounds,title:this.title,finished:this.finished,winner:this.winner,methodType:this.methodType,method:this.method,endRound:this.endRound,endTime:this.endTime,player:this.p.toJson(),opponent:this.o.toJson(),logs:this.logs,belt:this.belt||null,cards:this.finished?this.cards():null,scout:this.coachStars>=3&&!this.finished?this.oppNext:null,oppFiredUp:this.o.bonus>0}}};_a.tag="Fight";var Lt=["Flyweight","Bantamweight","Featherweight","Lightweight","Welterweight","Middleweight","Light Heavyweight","Heavyweight"],cn=["Garage Gym","Local MMA Club","Regional Fight Team","Elite Camp","World-Class Academy"],af=[0,3e3,15e3,5e4,15e4],vu=[1,1.25,1.5,1.8,2.1],of=[50,150,400,1e3,2500],yu=3,lf=52,ls=16,hf=26,Ov=60,Uv=20,va=78,ya=66,pn=class{constructor(e,t,i,n,r,a,o){this.opp=e,this.weeks=t,this.purse=i,this.winBonus=n,this.rounds=r,this.title=a,this.contender=o,this.talkLevel=0,this.oppBonus=0,this.kind=a?"title":null}};pn.tag="Offer";var zi=[{id:"apartment",name:"Rented apartment",price:0,upkeep:150,joy:0},{id:"starter",name:"Starter home",price:25e4,upkeep:450,joy:6},{id:"family",name:"Family house",price:9e5,upkeep:1200,joy:12},{id:"villa",name:"Luxury villa with pool",price:45e5,upkeep:4500,joy:20},{id:"mansion",name:"Hillside mega-mansion",price:15e6,upkeep:12e3,joy:28}],xa=[{id:"hatch",name:"Used hatchback",price:8e3,joy:2,fame:0,color:"#8d99a6"},{id:"pickup",name:"Pickup truck",price:45e3,joy:4,fame:0,color:"#2b4c7e"},{id:"sedan",name:"Sports sedan",price:7e4,joy:5,fame:1,color:"#1d1d1f"},{id:"muscle",name:"Muscle car",price:95e3,joy:7,fame:2,color:"#c8102e"},{id:"suv",name:"Luxury SUV",price:16e4,joy:7,fame:2,color:"#eeeeee"},{id:"super",name:"Italian supercar",price:38e4,joy:12,fame:4,color:"#f4b942"},{id:"hyper",name:"Hypercar",price:28e5,joy:16,fame:6,color:"#7c3aed"}],yl=[{id:"dog",name:"Dog",price:1500,upkeep:40,joy:8},{id:"cat",name:"Cat",price:800,upkeep:25,joy:6},{id:"parrot",name:"Parrot",price:2500,upkeep:20,joy:5},{id:"tiger",name:"Tiger",price:25e4,upkeep:2500,joy:10}],fr=[{name:"Frugal",cost:100,joy:-4},{name:"Comfortable",cost:600,joy:2},{name:"Lavish",cost:4e3,joy:8},{name:"Baller",cost:25e3,joy:14}],Bv=["Linh","Sofia","Mia","Chloe","Ava","Hana","Lucia","Maya","Isabella","Emma","Yuki","Amara","Daniel","Lucas","Mateo","Noah","Kai","Leo","Ethan","Minh Anh","Thao","Bao","Camila","Zara"],Fv=["Max","Luna","Leo","Mila","Kai","Nova","An","Bella","Rocky","Aria","Tony","Zoe","Bao","Lily"],Hv=["nurse","photographer","lawyer","chef","model","teacher","architect","personal trainer","DJ","doctor","designer","pilot"],cf={dog:["Rocky","Bruno","Kimbo","Tyson","Luna","Bella","Max","Ali"],cat:["Mochi","Kitty","Simba","Nala","Tofu"],parrot:["Kiwi","Rio","Mango","Pickles"],tiger:["Rajah","Shere Khan","Stripes","Saber"]},zv=["Dinner by the river","A night at the movies","Rooftop cocktails","Sunset on a yacht","A private chef dinner","A weekend in Paris"],Gv={training:["Another day, another 2-a-day \u{1F4AA}","Camp is going crazy right now \u{1F525}","Sharpening the tools \u2694\uFE0F","5am roadwork. Who's up? \u{1F3C3}","Nobody's outworking me."]},Vv=["mmafan","cagefreak","kofactory","subhunter","fightnerd","gfcdaily","octagonking","bjjlife","hypeman"],uf={training:["Champ mentality \u{1F525}","Can't wait for the next fight!","Built different \u{1F4AA}","Bro is locked in","Future champ!"],flex:["Sheeeesh \u{1F911}","Money fights!","Teach me your ways","That's a dream ride","W lifestyle"],family:["So wholesome \u2764\uFE0F","Family first \u{1F64F}","Goals!!","Beautiful family","The real champion"],callout:["OH IT'S ON \u{1F37F}","Bad blood!","Sign it!! \u{1F525}","He's scared lol","Make it happen GFC!"]},mr=s=>"$"+Math.round(s).toLocaleString("en-US");function df(){return[De(6),De(9),De(6),0,De(8)].join(",")}var xu=(s,e)=>{s.includes(e)||s.push(e)},xl=(s,e)=>{let t=s.indexOf(e);t>=0&&s.splice(t,1)},ba=class{constructor(e,t,i,n,r){if(e===void 0)return;this.weightClass=i,this.me=new xt(e,t,n,r,21),this.me.player=!0;for(let o of qt)this.me.set(o,38+xt.bias(n,o)+xt.weightAdj(i,o)+hs()*3);this.week=1,this.energy=100,this.fame=this.injuryWeeks=this.gym=this.offersAge=0,this.money=1500,this.earnings=0,this.gfc=this.retired=this.inducted=!1,this.regionalWins=this.titleDefenses=this.titlesWon=0,this.peakOverall=this.me.overall(),this.lastDivisionChange=-999,this.lastTalkWeek=-1,this.divisionsWon=[],this.divisionsFought=[Lt[i]],this.rankings=[],this.offers=[],this.scheduled=null,this.fight=null,this.news=[],this.history=[],this.lastResult=this.lastTalk=null,this.team={},this.market=[],this.marketAge=0,this.rival=null,this.rivalHeat=this.rivalWins=this.rivalLosses=this.weeksWithoutRival=0,this.lastRivalFight=-999,this.rivalries=[],this.migrate(),this.buildDivision(),this.log(this.me.name+" turns pro out of a "+cn[0]+". The journey begins.");let a=xt.generate(this.me.overall()+1,i);a.age=21+De(2),a.wins=a.losses=a.draws=a.koWins=a.subWins=a.decWins=a.streak=0,this.setRival(a,30,"came up in the same amateur scene and has been telling everyone you're overrated"),this.refreshMarket(),this.generateOffers()}buildDivision(){this.rankings=[];for(let e=0;e<ls;e++)this.rankings.push(xt.generate(88-e*1.2,this.weightClass));this.interim=null,this.champOut=this.champOutStart=0,this.nextInLine=!1,this.recordChamp(this.rankings[0],"Reigning champion")}life(){return this.lifeState}lifeReady(e){let t=this.lifeState;if(this.retired)throw new ce("Your career is over.");if(this.fight)throw new ce("Not now \u2014 you're in the middle of a fight.");if(t.done[e]===this.week)throw new ce("You already did that this week.")}spend(e,t){if(this.money<e)throw new ce("You can't afford "+t+" ("+mr(e)+").");this.money-=e}lifeJoy(e){let t=this.lifeState;t.happiness=mt(t.happiness+e,0,100)}moodMult(){return .85+(this.lifeState?this.lifeState.happiness:50)*.003}happinessTarget(){let e=this.lifeState,t=42+zi[e.house].joy+fr[e.lifestyle].joy;e.cars.map(n=>xa.find(r=>r.id===n)).filter(Boolean).sort((n,r)=>r.joy-n.joy).forEach((n,r)=>t+=r===0?n.joy:Math.min(3,n.joy/3));for(let n of e.pets)t+=(yl.find(r=>r.id===n.kind)||{joy:0}).joy;return e.partner&&(t+=e.partner.affection/6+(e.partner.stage==="married"?4:0)),t+=Math.min(4,e.kids.length)*5,this.money<0&&(t-=25),this.injuryWeeks>0&&(t-=6),this.me.streak>=2&&(t+=4),this.me.streak<=-2&&(t-=6),mt(t,0,100)}lifeWeek(){let e=this.lifeState,t=zi[e.house].upkeep+fr[e.lifestyle].cost+e.pets.reduce((r,a)=>r+((yl.find(o=>o.id===a.kind)||{}).upkeep||0),0)+e.kids.length*300;this.money-=t;let i=Math.round(e.followers/1e3)*20;this.money+=i,this.earnings+=i,e.lastBills=t,e.lastSponsor=i,e.followers=Math.max(0,Math.round(e.followers+this.fame*this.fame*.6+De(40)+(this.gfc?150:10)-e.followers*.002)),e.followers>=1e6&&!e.milestone1m&&(e.milestone1m=!0,this.log("1 MILLION followers! Brands are lining up.")),e.happiness=Math.round(e.happiness+(this.happinessTarget()-e.happiness)*.25);let n=e.partner;if(n&&(n.affection=mt(n.affection-(e.done.family===this.week-1||e.done.date===this.week-1?0:2)+(e.house>=2?.5:0),0,100),n.affection<=0?this.breakUp(n.stage==="married"?"files for divorce":"breaks up with you"):n.affection<=15&&n.warned!==this.week&&fe()<.3&&(n.warned=this.week,this.log(n.name+" feels neglected. Spend some time together."))),n&&n.stage==="married"&&e.tryingForKids&&fe()<.06&&e.kids.length<6){let r={name:Ye(Fv),born:this.week,look:df()};e.kids.push(r),this.lifeJoy(15),this.log("Congratulations! "+r.name+" is born. Welcome to the family!"),this.post("family","Welcome to the world, "+r.name+" \u2764\uFE0F Best win of my life.",3)}}breakUp(e){let t=this.lifeState,i=t.partner;if(i){if(i.stage==="married"){let n=Math.max(0,Math.round(this.money*.3));this.money-=n,this.log(i.name+" "+e+". The divorce costs "+mr(n)+".")}else this.log(i.name+" "+e+".");t.exes.push(i.name),t.partner=null,t.tryingForKids=!1,this.lifeJoy(-20)}}post(e,t,i=1){let n=this.lifeState,r=(n.followers*(.02+fe()*.05)+this.fame*120+50)*i,a=Math.round(r),o=Math.round(r*(.1+fe()*.25));n.followers+=o;let l=[];for(let h=0;h<3;h++)l.push({user:Ye(Vv)+De(99),text:Ye(uf[e]||uf.training)});for(n.feed.unshift({week:this.week,date:this.dateLabel(),kind:e,text:t,likes:a,gained:o,comments:l});n.feed.length>30;)n.feed.pop();return o}lifeAction(e,t={}){let i=this.lifeState,n=this.me;switch(e){case"post":{this.lifeReady("post");let r=String(t.kind||"training"),a,o=1;if(r==="training")a=Ye(Gv.training);else if(r==="flex"){let h=i.cars.map(c=>xa.find(u=>u.id===c)).filter(Boolean).sort((c,u)=>u.price-c.price)[0];if(!h&&i.house===0)throw new ce("Nothing to flex yet. Buy a car or a house first.");a=h?"New whip. "+h.name+" \u{1F3CE}\uFE0F Hard work pays.":"Home sweet "+zi[i.house].name.toLowerCase()+" \u{1F3E0}",o=1.5+(h?h.fame/3:0)+i.house*.3,this.fame=mt(this.fame+1,0,100)}else if(r==="family"){if(!i.partner&&!i.kids.length&&!i.pets.length)throw new ce("No family pics yet \u2014 get a partner, a kid or a pet.");a=i.kids.length?"Family day with my little champ "+Ye(i.kids).name+" \u{1F476}":i.partner?"Date night with "+i.partner.name+" \u2764\uFE0F":"Me and "+i.pets[0].name+" \u{1F43E}",o=1.3,this.lifeJoy(3)}else if(r==="callout"){let h=this.scheduled?this.scheduled.opp:this.rival||(this.gfc?this.rankings[0]:null);if(!h)throw new ce("Nobody to call out.");a="@"+h.lastName().toLowerCase()+" you're next. Sign the contract. \u{1F94A}",o=2,this.fame=mt(this.fame+2,0,100),h===this.rival&&(this.rivalHeat=Math.min(100,this.rivalHeat+8)),this.scheduled&&h===this.scheduled.opp&&(this.scheduled.oppBonus=Math.min(6,(this.scheduled.oppBonus||0)+1))}else throw new ce("Unknown post.");return i.done.post=this.week,"Posted! +"+this.post(r,a,o).toLocaleString("en-US")+" followers."}case"buy":{let r=t.kind,a=t.id;if(r==="house"){let o=zi.findIndex(c=>c.id===a);if(o<0)throw new ce("Unknown house.");if(o===i.house)throw new ce("You already live there.");let l=Math.round(zi[i.house].price*.85),h=zi[o].price-l;return h>0?this.spend(h,"the "+zi[o].name.toLowerCase()):this.money-=h,i.house=o,this.lifeJoy(o>0?10:-5),this.log("Moves into a "+zi[o].name.toLowerCase()+"."),"Welcome home! You moved into the "+zi[o].name.toLowerCase()+(l?" (old place sold for "+mr(l)+")":"")+"."}if(r==="car"){let o=xa.find(l=>l.id===a);if(!o)throw new ce("Unknown car.");if(i.cars.includes(a))throw new ce("You already own one.");if(i.cars.length>=6)throw new ce("Your garage is full. Sell a car first.");return this.spend(o.price,"the "+o.name),i.cars.push(a),i.driving=a,this.fame=mt(this.fame+o.fame,0,100),this.lifeJoy(o.joy),this.log("Buys a "+o.name+"."),"The keys to your "+o.name+" are yours!"}if(r==="pet"){let o=yl.find(h=>h.id===a);if(!o)throw new ce("Unknown pet.");if(i.pets.length>=4)throw new ce("Four pets is plenty.");this.spend(o.price,"a "+o.name.toLowerCase());let l=Ye(cf[o.id]||cf.dog);return i.pets.push({kind:o.id,name:l,since:this.week}),this.lifeJoy(o.joy),this.log("Adopts a "+o.name.toLowerCase()+" named "+l+"."),"Meet "+l+", your new "+o.name.toLowerCase()+"!"}throw new ce("Unknown purchase.")}case"sell":{if(t.kind==="car"){let r=i.cars.indexOf(t.id),a=xa.find(l=>l.id===t.id);if(r<0||!a)throw new ce("You don't own that car.");i.cars.splice(r,1),i.driving===t.id&&(i.driving=i.cars[0]||null);let o=Math.round(a.price*.6);return this.money+=o,"Sold the "+a.name+" for "+mr(o)+"."}throw new ce("You can only sell cars here.")}case"drive":{if(t.id&&!i.cars.includes(t.id))throw new ce("You don't own that car.");return i.driving=t.id||null,null}case"tattoo":{let r=["tChest","tBack","tArmL","tArmR","tLegs"].indexOf(t.region),a=Math.trunc(Number(t.design));if(r<0||!(a>=0&&a<=7))throw new ce("Pick a spot and a design.");let o=String(n.look||"1,2,0,0,0").split(",");for(;o.length<12;)o.push(o.length===5||o.length===6?"1":"0");if(Number(o[7+r])===a)throw new ce("You already have that one there.");let l=a===0?2500:1500+this.fame*40;return this.spend(l,a===0?"laser removal":"the tattoo"),o[7+r]=String(a),n.look=o.join(","),a&&this.lifeJoy(3),a===0?"Tattoo removed with a laser. Ouch.":"Fresh ink! \u{1F58B}\uFE0F Looking good."}case"lifestyle":{let r=Math.trunc(Number(t.level));if(!(r>=0&&r<fr.length))throw new ce("Unknown lifestyle.");return i.lifestyle=r,"Lifestyle: "+fr[r].name+" ("+mr(fr[r].cost)+"/week)."}case"meet":{if(this.lifeReady("meet"),i.partner&&i.partner.stage==="married")throw new ce("You're married!");i.done.meet=this.week;let r=.35+this.fame/250+i.house*.04+(i.lifestyle>=2?.1:0);return fe()>r?"You chat with a few people, but nobody clicks this time.":(i.candidate={name:Ye(Bv),age:n.age-3+De(7),look:df(),job:Ye(Hv),week:this.week},"You hit it off with "+i.candidate.name+", a "+i.candidate.age+"-year-old "+i.candidate.job+"!")}case"ask":{let r=i.candidate;if(!r||r.week!==this.week)throw new ce("Meet someone first.");return i.candidate=null,i.partner?(this.log("Caught flirting! "+i.partner.name+" finds out."),i.partner.affection=Math.max(0,i.partner.affection-35),i.partner.affection<=0&&this.breakUp("leaves you"),"That was a bad idea. "+(i.partner?i.partner.name+" is furious.":"You're single again.")):(i.partner={name:r.name,age:r.age,look:r.look,job:r.job,stage:"dating",affection:35,since:this.week},this.lifeJoy(8),this.log("Starts dating "+r.name+"."),"You're dating "+r.name+"! \u2764\uFE0F")}case"date":{this.lifeReady("date");let r=i.partner;if(!r)throw new ce("You're single. Meet someone at the caf\xE9 or the club.");let a=[80,400,2500,15e3][i.lifestyle];this.spend(a,"a date"),i.done.date=this.week;let o=8+De(8)+i.lifestyle*2;return r.affection=mt(r.affection+o,0,100),this.lifeJoy(5),Ye(zv)+" \u2764\uFE0F (+"+o+" affection)"}case"gift":{this.lifeReady("gift");let r=i.partner;if(!r)throw new ce("No one to give a gift to.");let a=Math.max(500,Math.round(this.money*.02));return this.spend(a,"a gift"),i.done.gift=this.week,r.affection=mt(r.affection+10,0,100),"You surprise "+r.name+" with a gift worth "+mr(a)+". \u{1F381}"}case"propose":{let r=i.partner;if(!r||r.stage!=="dating")throw new ce("You need to be dating someone.");this.lifeReady("propose"),i.done.propose=this.week;let a=Math.max(5e3,Math.round(this.money*.05));return this.spend(a,"a ring"),fe()<(r.affection-30)/50?(r.stage="engaged",this.lifeJoy(15),this.log("Engaged to "+r.name+"! \u{1F48D}"),this.post("family",r.name+" said YES \u{1F48D} Forever starts now.",2.5),r.name+" said YES! \u{1F48D}"):(r.affection=Math.max(0,r.affection-10),r.name+" says it's too soon. (Build more affection first.)")}case"wedding":{let r=i.partner;if(!r||r.stage!=="engaged")throw new ce("Get engaged first.");let a=[2e4,6e4,25e4,15e5][i.lifestyle];return this.spend(a,"the wedding"),r.stage="married",r.affection=mt(r.affection+20,0,100),this.lifeJoy(20),this.fame=mt(this.fame+3,0,100),this.log("Marries "+r.name+"! \u{1F492}"),this.post("family","Just married \u{1F492} Partners for life.",3),"You married "+r.name+"! \u{1F492}"}case"kids":{let r=i.partner;if(!r||r.stage!=="married")throw new ce("Get married first.");return i.tryingForKids=!i.tryingForKids,i.tryingForKids?"You and "+r.name+" are trying for a baby. \u{1F476}":"Not right now."}case"family":{if(this.lifeReady("family"),!i.partner&&!i.kids.length&&!i.pets.length)throw new ce("There's nobody at home yet.");return i.done.family=this.week,i.partner&&(i.partner.affection=mt(i.partner.affection+8,0,100)),this.lifeJoy(6+i.kids.length*2+i.pets.length),this.energy=Math.min(100,this.energy+10),"Quality time at home. You feel recharged. (+10 energy)"}case"party":return this.lifeReady("party"),i.done.party=this.week,this.spend([200,1e3,8e3,4e4][i.lifestyle],"the bottle service"),this.lifeJoy(8),this.energy=Math.max(0,this.energy-20),this.fame=mt(this.fame+1,0,100),fe()<.12?(this.fame=mt(this.fame-4,0,100),i.followers=Math.round(i.followers*.97),i.partner&&(i.partner.affection=Math.max(0,i.partner.affection-15)),this.log("Scandal! Blurry club photos of "+n.lastName()+" go viral."),"Big night\u2026 but the photos leaked. Scandal! (\u2212fame"+(i.partner?", "+i.partner.name+" is upset":"")+")"):"What a night! VIP section, the whole city knows your name. (\u221220 energy)";default:throw new ce("Unknown life action.")}}lifeJson(){let e=this.lifeState;return{happiness:e.happiness,target:Math.round(this.happinessTarget()),followers:e.followers,moodMult:+this.moodMult().toFixed(2),house:e.house,cars:[...e.cars],driving:e.driving,pets:e.pets.map(t=>({...t})),partner:e.partner?{...e.partner}:null,candidate:e.candidate&&e.candidate.week===this.week?{...e.candidate}:null,kids:e.kids.map(t=>({...t,age:Math.floor((this.week-t.born)/52)})),tryingForKids:e.tryingForKids,lifestyle:e.lifestyle,feed:e.feed.slice(0,15),done:Object.fromEntries(Object.entries(e.done).map(([t,i])=>[t,i===this.week])),lastBills:e.lastBills||0,lastSponsor:e.lastSponsor||0,sponsorRate:Math.round(e.followers/1e3)*20,catalog:{houses:zi,cars:xa,pets:yl,lifestyles:fr},weddingCost:[2e4,6e4,25e4,15e5][e.lifestyle],dateCost:[80,400,2500,15e3][e.lifestyle]}}migrate(){this.lifeState||(this.lifeState={happiness:60,followers:200+(this.fame||0)*(this.fame||0)*20,house:0,cars:[],driving:null,pets:[],partner:null,candidate:null,kids:[],tryingForKids:!1,lifestyle:1,feed:[],done:{},exes:[]}),this.heldBelts||(this.heldBelts={}),this.lineage||(this.lineage={}),this.interim===void 0&&(this.interim=null),this.champOut===void 0&&(this.champOut=this.champOutStart=0),this.nextInLine===void 0&&(this.nextInLine=!1),this.lastTitleWeek||(this.lastTitleWeek=this.week||1)}division(){return Lt[this.weightClass]}recordChamp(e,t,i=!1){var r,a;let n=(r=this.lineage)[a=this.division()]||(r[a]=[]);for(n.push({name:e.displayName(),player:e===this.me,date:this.dateLabel(),how:t,interim:i,defenses:0});n.length>40;)n.shift()}addDefense(e=!1){let t=this.lineage[this.division()]||[];for(let i=t.length-1;i>=0;i--)if(!!t[i].interim===e){t[i].defenses++;return}}champOutNow(){return this.champOut>this.week&&!this.isChamp()}npcBout(e,t){let i=1/(1+Math.exp((t.overall()-e.overall())/5)),n=fe()<i?e:t,r=n===e?t:e,a=fe(),o=a<.4?"KO":a<.6?"SUB":"DEC";return n.recordResult("W",o),r.recordResult("L",o),{w:n,l:r,how:o==="KO"?"KO/TKO":o==="SUB"?"submission":"decision"}}moveTo(e,t){let i=this.rankings;xl(i,e),i.splice(Math.min(t,i.length),0,e),this.trim()}beltWeek(){let e=this.rankings,t=this.me;if(!this.gfc||e.length<4)return;for(let n of Object.keys(this.heldBelts)){let r=this.week-this.heldBelts[n].since;r===ya&&this.log("Your "+n+" belt hasn't been defended in "+r+" weeks. Defend it soon or it will be stripped."),r>=va&&(delete this.heldBelts[n],this.log("STRIPPED! The GFC takes your "+n+" belt after a year and a half without a defense."))}this.interim&&this.interim!==t&&!e.includes(this.interim)&&(this.interim=null);let i=n=>this.scheduled&&this.scheduled.opp===n;if(this.isChamp()){let n=this.week-this.lastTitleWeek;if(this.scheduled&&this.scheduled.title)return;if(n>=va)return this.strip();if(n===ya&&this.log("The GFC wants a title defense soon \u2014 go a year and a half without one and you'll be stripped."),!this.interim&&(this.injuryWeeks>=8||n>=30)){let a=e[1],o=e[2];if(i(a)||i(o))return;let{w:l,l:h,how:c}=this.npcBout(a,o);this.interim=l,this.moveTo(l,1),this.recordChamp(l,"Won the interim title vs "+h.lastName()+" by "+c,!0),this.log("INTERIM TITLE: "+l.displayName()+" def. "+h.lastName()+" by "+c+" while you were out. Next: unify the belts."),this.scheduled||this.generateOffers()}return}if(this.champOut){if(this.week>=this.champOut){if(this.interim===t||!this.interim)this.champOut=this.champOutStart=0,this.interim===t&&!this.scheduled&&this.generateOffers();else if(this.week>=this.champOut+4&&!i(e[0])&&!i(this.interim)){let n=e[0],r=this.interim,{w:a,l:o,how:l}=this.npcBout(n,r);this.interim=null,this.champOut=this.champOutStart=0,a===r?(this.moveTo(r,0),this.recordChamp(r,"Unified the belts vs "+o.lastName()+" by "+l),this.log("UNIFIED! Interim champ "+r.displayName()+" def. "+n.lastName()+" by "+l+" to become undisputed champion.")):(this.addDefense(),this.log("Champion "+n.displayName()+" returns and unifies the belts, beating "+r.lastName()+" by "+l+"."))}}else if(!this.interim&&this.week>=this.champOutStart+6&&!(this.scheduled&&this.scheduled.kind==="interim")){let n=e.slice(1).filter(l=>l!==t&&!i(l)).slice(0,2);if(n.length<2)return;let{w:r,l:a,how:o}=this.npcBout(n[0],n[1]);this.interim=r,this.moveTo(r,1),this.recordChamp(r,"Won the interim title vs "+a.lastName()+" by "+o,!0),this.log("INTERIM TITLE: "+r.displayName()+" def. "+a.lastName()+" by "+o+" for the interim "+this.division()+" belt.")}}else fe()<.008&&!i(e[0])&&(this.champOutStart=this.week,this.champOut=this.week+18+De(14),this.log("Champion "+e[0].displayName()+" is injured and out for months. The GFC will crown an interim champion."),this.scheduled||this.generateOffers())}strip(){let e=this.rankings,t=this.me;xl(e,t);let i,n;if(this.interim&&this.interim!==t&&e.includes(this.interim))i=this.interim,n="Promoted from interim champion";else{let r=this.npcBout(e[0],e[1]);i=r.w,n="Won the vacant title vs "+r.l.lastName()+" by "+r.how}this.interim=null,this.moveTo(i,0),e.splice(1,0,t),this.trim(),this.recordChamp(i,n),this.log("STRIPPED! The GFC takes the "+this.division()+" belt for inactivity. "+i.displayName()+" is the new champion."),this.scheduled||this.generateOffers()}act(e,t){this.requireActive();let i=this.me,n;switch(e||""){case"train":{if(!qt.includes(t))throw new ce("Unknown stat.");if(this.injuryWeeks>0)throw new ce("You're injured \u2014 rest up first.");if(this.energy<this.trainCost())throw new ce("Too exhausted to train. Take a rest week.");let r=i.get(t);i.add(t,this.trainGain(t)*(t==="chin"?.5:1));let a=this.energy<35&&fe()<.06*this.injuryRisk();this.energy-=this.trainCost(),n=`Trained ${t}: +${(i.get(t)-r).toFixed(1)}`,a&&(n+=this.injure(1+De(3),"overtraining"));break}case"spar":if(this.injuryWeeks>0)throw new ce("You're injured \u2014 rest up first.");if(this.energy<30)throw new ce("Too exhausted to spar. Take a rest week.");for(let r of["striking","wrestling","grappling","speed"])i.add(r,this.trainGain(r)*.45);i.add("chin",-.15),this.energy-=30,n="Hard sparring \u2014 gains in striking, wrestling, grappling and speed.",fe()<.08*this.injuryRisk()&&(n+=this.injure(1+De(3),"sparring"));break;case"rest":this.energy=Math.min(100,this.energy+35+3*this.stars("physio")),this.injuryWeeks>0&&this.injuryWeeks--,n="Rest week. Energy recovered.";break;case"media":{if(this.energy<10)throw new ce("Too exhausted even for interviews.");let r=1+De(this.gfc?5:3)+Math.floor(this.stars("manager")/2),a=this.gfc?1500+this.fame*50:100;this.fame=Math.min(100,this.fame+r),this.money+=a,this.energy-=10,n="Media week: +"+r+" fame, +$"+ga(a)+".";break}case"work":{if(this.energy<15)throw new ce("Too exhausted to teach classes.");let r=this.gfc?2e3+this.fame*60:450;this.money+=r,this.energy-=15,n=(this.gfc?"Ran a seminar":"Taught classes at the gym")+": +$"+ga(r)+".";break}default:throw new ce("Unknown action.")}return this.advanceWeek(),n}trainCost(){return 22-this.stars("snc")}trainGain(e){let t=this.me.get(e);return 4*vu[this.gym]*this.staffMult(e)*this.ageFactor()*this.moodMult()*Math.pow(Math.max(.01,1-t/97.5),1.6)*(.4+this.energy/166)*(.7+fe()*.6)}staffMult(e){let t=["striking","power","speed"].includes(e)?"striking":e==="wrestling"?"wrestling":e==="grappling"?"bjj":"snc";return 1+.03*this.stars("head")+.1*this.stars(t)}ageFactor(){let e=this.me.age;return e<=24?1.15:e<=28?1:e<=31?.8:e<=34?.55:.35}injuryRisk(){return 1-.15*this.stars("physio")}injure(e,t){e=Math.max(1,e-Math.floor(this.stars("physio")/2)),this.injuryWeeks=Math.max(this.injuryWeeks,e);let i=e+" week"+(e===1?"":"s");return this.log("Injured ("+t+"): out "+i+".")," Ouch \u2014 injured for "+i+"."}upgradeGym(){if(this.retired)throw new ce("Your career is over.");if(this.gym>=cn.length-1)throw new ce("You're already at the best gym in the world.");let e=af[this.gym+1];if(this.money<e)throw new ce("You need $"+ga(e)+" to move to "+cn[this.gym+1]+".");return this.money-=e,this.gym++,this.log("Moved training camp to "+cn[this.gym]+"."),"Welcome to "+cn[this.gym]+"! Training is now "+Math.round(vu[this.gym]*100)+"% effective."}accept(e){if(this.requireActive(),this.scheduled)throw new ce("You already have a fight booked.");if(!(e>=0&&e<this.offers.length))throw new ce("That offer is no longer available.");let t=this.offers[e];if(this.injuryWeeks>=t.weeks)throw new ce("You won't be healed in time for that fight.");return this.scheduled=t,this.offers=[],this.log("Booked: "+(t.title?"TITLE FIGHT ":t.opp===this.rival?"GRUDGE MATCH ":"")+"vs "+t.opp.displayName()+" in "+t.weeks+" weeks."),"Fight booked! Get to work \u2014 fight night is in "+t.weeks+" weeks."}retire(){if(this.retired)throw new ce("You're already retired.");if(this.fight)throw new ce("Finish your fight first.");return this.endCareer(this.me.displayName()+" announces retirement at "+this.me.age+" with a record of "+this.me.record()+"."),"You hang up the gloves. Legacy: "+this.legacyTier()+"."}endCareer(e){this.retired=!0,this.scheduled=null,this.offers=[],this.rival&&this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log(e)}requireActive(){if(this.retired)throw new ce("Your career is over.");if(this.fight)throw new ce("Finish your fight first.");if(this.fightNight())throw new ce("It's fight night! Head to the cage.")}fightNight(){return!!this.scheduled&&this.scheduled.weeks<=0}stars(e){let t=this.team[e];return t?t.stars:0}refreshMarket(){this.market=[],this.marketAge=0;for(let e=0;e<6;e++)this.market.push(dn.generate())}hire(e){if(this.retired)throw new ce("Your career is over.");if(!(e>=0&&e<this.market.length))throw new ce("That person already signed elsewhere.");let t=this.market[e];if(this.fame<t.fameRequired())throw new ce(t.name+" only works with fighters with "+t.fameRequired()+"+ fame.");if(this.money<t.signingFee())throw new ce("You need $"+ga(t.signingFee())+" to sign "+t.name+".");this.money-=t.signingFee(),this.market.splice(e,1);let i=this.team[t.role];return this.team[t.role]=t,this.log("Signed "+t.name+" ("+t.stars+"\u2605 "+dn.title(t.role)+")"+(i?", replacing "+i.name:"")+"."),t.name+" joins the team as "+dn.title(t.role)+"!"}fire(e){if(this.retired)throw new ce("Your career is over.");let t=this.team[e||""];if(!t)throw new ce("Nobody in that role.");return delete this.team[e],this.log("Parted ways with "+dn.title(t.role)+" "+t.name+"."),t.name+" has left the team."}teamSalary(){let e=0;for(let t of Object.values(this.team))e+=t.salary();return e}setRival(e,t,i){this.rival=e,this.rivalHeat=t,this.rivalWins=this.rivalLosses=0,this.weeksWithoutRival=0,this.log("RIVALRY: "+e.displayName()+" "+i+".")}rivalSummary(){let e=this.rival.displayName(),t=this.rivalWins+"-"+this.rivalLosses;return this.rivalWins>this.rivalLosses?"Beat "+e+" "+t:this.rivalLosses>this.rivalWins?"Lost to "+e+" "+t:"Even with "+e+" "+t}pinOthers(){if(this.meOverall)for(let n of qt)this.me.set(n,this.meOverall);let e=this.npcOverall;if(!e)return;let t=new Set,i=n=>{if(!(!n||typeof n!="object"||t.has(n))){if(t.add(n),n instanceof xt){n!==this.me&&Ev(n,e);return}for(let r of Object.keys(n))i(n[r])}};i(this)}rivalWeek(){let e=this.me;if(!this.rival){if(++this.weeksWithoutRival>=40&&!this.retired){let i=this.rankings.indexOf(e),n;if(this.gfc&&i>0?n=this.rankings[Math.max(1,Math.min(this.rankings.length-1,i+(Mu()?1:-1)))]:n=xt.generate(e.overall()+1,this.weightClass),n===e)return;this.setRival(n,35,"calls you out in a viral interview")}return}let t=this.rival;if(this.week%4===0){let i=e.overall()+1-t.overall();for(let n of qt)t.add(n,i*.25+hs()*.4)}if(!this.rankings.includes(t)&&fe()<.12&&(!this.scheduled||this.scheduled.opp!==t)){let i=fe()<.65,n=fe();t.recordResult(i?"W":"L",n<.4?"KO":n<.6?"SUB":"DEC"),i&&fe()<.5&&this.log("Your rival "+t.lastName()+" wins again ("+t.record()+") and says you're next.")}this.rivalHeat=Math.max(0,this.rivalHeat-1),this.rivalHeat>=50&&fe()<.08&&(this.log(t.lastName()+': "'+gl(Ye(hn.CALLOUTS),e.lastName(),t.lastName())+'"'),this.rivalHeat=Math.min(100,this.rivalHeat+3))}rivalFought(e,t){if(this.lastRivalFight=this.week,e?(this.rivalWins++,this.rivalHeat=15):t&&(this.rivalLosses++,this.rivalHeat=45),Math.abs(this.rivalWins-this.rivalLosses)>=2||this.rivalWins+this.rivalLosses>=5){let i=this.rivalSummary();this.rivalries.push(i),this.log("Rivalry settled: "+i+"."),this.rival=null}}talk(e,t){if(this.retired)throw new ce("Your career is over.");if(this.fight)throw new ce("Finish your fight first.");if(this.lastTalkWeek===this.week)throw new ce("You've already said your piece this week.");let i;if(e==="rival"){if(!this.rival)throw new ce("You don't have a rival right now.");i=this.rival}else{if(!this.scheduled)throw new ce("You don't have a fight booked.");i=this.scheduled.opp}let n=!!this.scheduled&&this.scheduled.opp===i,r=i===this.rival,a=this.me.lastName(),o=i.lastName(),l=this.stars("manager"),h=[],c,u,d;switch(t||""){case"respect":c=Ye(hn.RESPECT),u=Ye(fe()<.7?hn.REPLY_RESPECT:hn.REPLY_CALM),d=1,r&&(this.rivalHeat=Math.max(0,this.rivalHeat-5),h.push("Rivalry heat -5"));break;case"trash":c=Ye(hn.TRASH),u=Ye(Mu()?hn.REPLY_CALM:hn.REPLY_ANGRY),d=2+De(3)+Math.floor(l/2),r&&(this.rivalHeat=Math.min(100,this.rivalHeat+12),h.push("Rivalry heat +12")),n&&this.hype(1,.08,h);break;case"personal":if(c=Ye(hn.PERSONAL),u=Ye(hn.REPLY_ANGRY),fe()<.2){let p=Math.max(200,Math.trunc(this.money/20));this.money-=p,d=-3,h.push("The commission fines you $"+ga(p)+" for conduct")}else d=4+De(5)+l;r&&(this.rivalHeat=Math.min(100,this.rivalHeat+25),h.push("Rivalry heat +25")),n&&this.hype(2,.15,h);break;default:throw new ce("Pick a tone.")}return this.fame=mt(this.fame+d,0,100),h.unshift("Fame "+(d>=0?"+":"")+d),this.lastTalkWeek=this.week,this.lastTalk={you:gl(c,o,a),them:gl(u,o,a),target:i.displayName(),effects:h},this.log("Mic work vs "+o+': "'+gl(c,o,a)+'"'),null}hype(e,t,i){let n=this.scheduled;n.talkLevel=Math.max(n.talkLevel,e),n.purse=Math.round(n.purse*(1+t)),n.winBonus=Math.round(n.winBonus*(1+t)),n.oppBonus=Math.min(4.5,n.oppBonus+1.5*e),i.push("Purse +"+Math.round(t*100)+"% from the hype"),i.push("Opponent is fired up (+"+n.oppBonus+" to all stats on fight night)")}changeDivision(e){if(this.retired)throw new ce("Your career is over.");if(this.fight||this.scheduled)throw new ce("You can't change divisions with a fight booked.");if(!(e>=0&&e<Lt.length)||Math.abs(e-this.weightClass)!==1)throw new ce("You can only move one division at a time.");let t=this.lastDivisionChange+hf-this.week;if(t>0)throw new ce("Your body needs time to adjust. Try again in "+t+" weeks.");let i=this.me,n=this.weightClass,r=this.gfc?this.rankings.indexOf(i):-1;this.gfc&&r===0&&(this.heldBelts[Lt[n]]={since:this.lastTitleWeek});for(let l of qt)i.add(l,xt.weightAdj(e,l)-xt.weightAdj(n,l));e<n&&i.add("cardio",-2),this.weightClass=e,this.lastDivisionChange=this.week,xu(this.divisionsFought,Lt[e]),this.buildDivision();let a;this.offers=[],this.offersAge=0;let o=this.heldBelts[Lt[e]];if(this.gfc&&o)delete this.heldBelts[Lt[e]],this.moveTo(i,0),this.lastTitleWeek=o.since,this.recordChamp(i,"Returned as the reigning champion"),this.generateOffers(),a="You're back \u2014 and still the "+Lt[e]+" champion.";else if(this.gfc&&r===0){this.log("Keeps the "+Lt[n]+" belt and moves to "+Lt[e]+" to chase a second one!"),this.offers.push(this.titleOffer(this.rankings[0]));let l=Object.keys(this.heldBelts).length+1;a="Champion vs champion! Win the "+Lt[e]+" superfight and you're a "+pu(l).toLowerCase()+". You keep your "+Object.keys(this.heldBelts).join(", ")+" belt"+(l>2?"s":"")+"."}else this.gfc&&r>0&&r<=5&&(this.rankings.splice(10,0,i),this.trim()),this.generateOffers(),a=this.gfc&&this.rankings.includes(i)?"Your reputation earns you the #"+this.rankings.indexOf(i)+" spot.":"You start unranked in the new division.";if(this.rival&&this.rankings.indexOf(this.rival)<0&&this.gfc){for(let l of qt)this.rival.add(l,xt.weightAdj(e,l)-xt.weightAdj(n,l));this.rankings.splice(Math.min(13,this.rankings.length),0,this.rival),this.trim()}return this.log("Moves "+(e>n?"up":"down")+" to "+Lt[e]+"."),"Welcome to "+Lt[e]+"! "+(e<n?"The weight cut costs some cardio. ":"More power, a little less speed. ")+a}startFight(){if(this.fight)return null;if(!this.fightNight())throw new ce("There's no fight tonight.");let e=this.scheduled;if(this.pinOthers(),this.fight=new _a(this.me,e.opp,e.rounds,e.title,this.npcOverall?0:e.oppBonus,this.stars("head")),e.title){let t=e.kind||"title",i=n=>this.rankings[0]===n||t==="interim"&&this.interim===n;this.fight.belt={kind:t,label:(t==="interim"?"interim ":t==="unify"?"undisputed ":"")+"GFC "+this.division()+" championship",champ:i(this.me)?"p":i(e.opp)?"o":null}}return null}fightRound(e,t=!0){if(!this.fight||this.fight.finished)throw new ce("No fight in progress.");if(!Tu[e])throw new ce("Pick a game plan.");this.fight.simulateRound(e,t),this.fight.finished&&this.resolveFight()}closeFight(){this.fight&&this.fight.finished&&(this.fight=null)}resolveFight(){let e=this.scheduled,t=this.fight,i=e.opp,n=this.me,r=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",a=r==="W",o=r==="L",l=t.methodType!=="DEC",h=i===this.rival,c=this.gfc?this.rankings.indexOf(i):-1,u=this.isChamp();n.recordResult(r,t.methodType),i.recordResult(a?"L":o?"W":"D",t.methodType);let d=e.purse+(a?e.winBonus:0),p=a&&l&&this.gfc;p&&(d+=5e4),this.money+=d,this.earnings+=d;let m=this.fame;a?this.fame+=(this.gfc?5:2)+(l?3:0)+(e.title?12:0)+(c>0?Math.floor((ls-c)/3):0)+(h?5:0):o?this.fame-=t.methodType==="KO"?5:3:this.fame+=1;let v="";e.talkLevel>0&&a?(this.fame+=2*e.talkLevel,v="You backed up the trash talk!"):e.talkLevel>0&&o&&(this.fame-=2*e.talkLevel,v="You ate your words."),t.touch==="o"&&(this.fame+=a?2:o?-2:0,v=(v+(a?" You refused the glove touch and backed it up.":o?" Refusing the glove touch didn't age well.":"")).trim()),this.fame=mt(this.fame,0,100);let f="";o&&t.methodType==="KO"?(n.add("chin",-1.5),f=this.injure(4+De(5),"knockout loss")):t.playerDamage()>60&&(f=this.injure(1+De(3),"fight damage")),this.energy=30;for(let _=0;_<2;_++){let w=Ye(qt);n.add(w,(.5+fe())*Math.max(0,1-n.get(w)/95)*2)}let x="";e.contender?a?(this.gfc=!0,x="The GFC president hands you a contract. Welcome to the big show!",this.log("SIGNED with the GFC after a win on the Contender Series!"),this.rival&&!this.rankings.includes(this.rival)&&(this.rankings.splice(Math.min(14,this.rankings.length),0,this.rival),this.trim(),this.log("Your rival "+this.rival.displayName()+" is already in the GFC, ranked #"+this.rankings.indexOf(this.rival)+". The rivalry goes big time."))):(this.regionalWins=0,x="No contract this time. Rebuild on the regional circuit."):this.gfc?x=this.updateRankings(a,o,i,e.title,u,e.kind):a&&this.regionalWins++;let y="";h?(y=a?"You beat your rival!":o?"Your rival gets the better of you.":"The rivalry goes on.",this.rivalFought(a,o)):o&&l&&!this.rival&&this.weeksWithoutRival>=12&&(this.setRival(i,50,"wants the world to know who's better after beating you"),this.rivalLosses=1,y=i.lastName()+" is your new nemesis.");let g=a?"def.":o?"lost to":"drew with";this.log(n.lastName()+" "+g+" "+i.displayName()+" \u2014 "+t.method+(l?" (R"+t.endRound+" "+t.endTime+")":"")+"."),this.history.unshift({date:this.dateLabel(),result:r,opponent:i.displayName(),method:t.method,round:t.endRound,time:t.endTime,event:(e.contender?"Contender Series":e.kind==="interim"?"GFC Interim Title Fight":e.kind==="unify"?"GFC Title Unification":e.title?"GFC Title Fight":e.kind==="eliminator"?"GFC Title Eliminator":e.kind==="main"?"GFC Main Event":this.gfc?"GFC":"Iron Cage Regional")+(h?" \xB7 Grudge":"")+" \xB7 "+Lt[this.weightClass]}),this.lastResult={result:r,method:t.method,pay:d,perfBonus:p,fameDelta:this.fame-m,careerNote:[x,y,v].join(" ").trim(),injuryNote:f.trim(),record:n.record()},this.scheduled=null,this.offersAge=this.gfc?-4:-2,this.advanceWeek()}isChamp(){return this.gfc&&this.rankings.length>0&&this.rankings[0]===this.me}updateRankings(e,t,i,n,r,a){let o=this.me,l=this.rankings,h=Lt[this.weightClass];if(a=n?a||"title":a,n&&(this.nextInLine=!1),a==="eliminator"&&(this.nextInLine=e,e&&this.log("Wins the title eliminator \u2014 next in line for a shot at the belt!")),a==="interim"){if(e){let c=this.interim===o;return this.interim=o,this.moveTo(o,1),c?(this.addDefense(!0),"And STILL interim champion! Unify the belts when the champ returns."):(this.recordChamp(o,"Won the interim title vs "+i.lastName(),!0),this.log("AND NEW! "+o.displayName()+" is the GFC interim "+h+" champion!"),"AND NEW GFC INTERIM "+h.toUpperCase()+" CHAMPION! Next: unify the belts.")}if(t){this.interim=i,this.moveTo(i,1),this.dropDown(o,1),this.recordChamp(i,"Won the interim title vs "+o.lastName(),!0);let c=l.indexOf(o);return i.lastName()+" takes the interim belt."+(c>0?" You drop to #"+c+".":"")}return"A draw \u2014 no interim champion crowned."}if(a==="unify"){if(this.interim=null,this.champOut=this.champOutStart=0,r)return e?(this.titleDefenses++,this.lastTitleWeek=this.week,this.addDefense(),this.log("UNDISPUTED! "+o.displayName()+" unifies the "+h+" belts."),"And STILL \u2014 and UNDISPUTED! Title defense #"+this.titleDefenses+"."):t?(this.moveTo(i,0),this.dropDown(o,1),this.recordChamp(i,"Unified the belts vs "+o.lastName()),this.log(i.displayName()+" unifies the belts and takes your title."),"The interim champion takes your belt."):(this.lastTitleWeek=this.week,"A draw \u2014 the champion keeps the belt.");if(e)return this.titlesWon++,xu(this.divisionsWon,h),this.moveTo(o,0),this.lastTitleWeek=this.week,this.recordChamp(o,"Unified the belts vs "+i.lastName()),this.log("AND NEW! "+o.displayName()+" is the UNDISPUTED GFC "+h+" Champion!"),"AND NEW UNDISPUTED GFC "+h.toUpperCase()+" CHAMPION!";this.addDefense(),this.dropDown(o,1);let c=l.indexOf(o);return t?"The champion unifies the belts."+(c>0?" You drop to #"+c+".":""):"A draw \u2014 the champion keeps the belt."}if(e){if(n){if(this.lastTitleWeek=this.week,r)return this.titleDefenses++,this.addDefense(),this.log("Successful title defense #"+this.titleDefenses+"!"),"And STILL champion! Title defense #"+this.titleDefenses+".";this.titlesWon++,xu(this.divisionsWon,h),this.moveTo(o,0),this.interim===o&&(this.interim=null),this.recordChamp(o,"Beat "+i.lastName()),this.log("AND NEW! "+o.displayName()+" is the GFC "+h+" Champion!");let u=Object.keys(this.heldBelts),d=pu(u.length+1);return u.length&&this.log(d.toUpperCase()+"! "+o.displayName()+" holds the "+[h,...u].join(", ")+" belts at the same time!"),this.divisionsWon.length>=2&&this.log("History made: a "+this.divisionsWon.length+"-division GFC champion!"),u.length?"AND NEW \u2014 "+d.toUpperCase()+"! GFC "+[h,...u].join(" & ").toUpperCase()+" CHAMPION!":"AND NEW GFC "+h.toUpperCase()+" CHAMPION!"}l.includes(i)?this.placeAbove(o,i):!l.includes(o)&&o.streak>=2&&(l.splice(Math.min(ls-1,l.length),0,o),this.trim());let c=this.rankings.indexOf(o);return c>0?"You're now ranked #"+c+" in the division.":"Still unranked \u2014 keep stacking wins."}if(t){if(n&&r)return this.placeAbove(i,o),this.recordChamp(i,"Beat "+o.lastName()),this.log(i.displayName()+" takes the belt."),"You lost the belt.";n&&this.addDefense(),l.includes(o)&&(this.placeAbove(i,o),this.dropDown(o,n?1:2));let c=this.rankings.indexOf(o);return c>0?"You drop to #"+c+".":"You're outside the rankings."}return n&&r&&(this.lastTitleWeek=this.week),n?"A draw \u2014 the champion keeps the belt.":"A draw doesn't move the needle."}placeAbove(e,t){let i=this.rankings,n=i.indexOf(t);if(n<0)return;let r=i.indexOf(e);r>=0&&r<n||(r>=0&&i.splice(r,1),i.splice(n,0,e),this.trim())}dropDown(e,t){let i=this.rankings,n=i.indexOf(e);n<0||(i.splice(n,1),n+t<ls&&i.splice(Math.min(n+t,i.length),0,e),this.refill())}trim(){for(;this.rankings.length>ls;)this.rankings.pop()}refill(){for(;this.rankings.length<ls;){let e=xt.generate(70+De(6),this.weightClass);e.age=23+De(4),this.rankings.push(e)}}advanceWeek(){this.week++,this.energy=Math.min(100,this.energy+15),this.money-=of[this.gym]+this.teamSalary();let e=Object.values(this.team);if(this.money<0&&e.length&&fe()<.5){let t=e.reduce((i,n)=>n.salary()>i.salary()?n:i);delete this.team[t.role],this.log(t.name+" quit \u2014 paychecks stopped clearing.")}this.injuryWeeks>0&&this.injuryWeeks--,this.peakOverall=Math.max(this.peakOverall,this.me.overall()),(this.week-1)%52===0&&this.newYear(),!this.retired&&(this.npcWeek(),this.beltWeek(),this.lifeWeek(),this.rivalWeek(),++this.marketAge>=8&&this.refreshMarket(),this.scheduled?(this.scheduled.weeks--,this.scheduled.weeks<=0&&this.injuryWeeks>0&&(this.log("Withdrew from the fight vs "+this.scheduled.opp.displayName()+" due to injury."),this.fame=Math.max(0,this.fame-3),this.scheduled=null,this.generateOffers())):(this.offersAge++,this.offersAge>=0&&(this.offers.length===0||this.offersAge>=4)&&this.generateOffers()))}newYear(){let e=this.me;if(e.age++,this.log("Happy birthday! "+e.name+" turns "+e.age+"."),e.age>=31){let t=(e.age-30)*.9;e.add("speed",-(t+fe())),e.add("cardio",-(t*.8+fe())),e.add("power",-(t*.5+fe()*.5)),e.add("chin",-(t*.6+fe()*.5));for(let i of["striking","wrestling","grappling"])e.add(i,-t*.3*fe());this.log("Father Time is undefeated \u2014 your physical attributes are declining.")}for(let t of[...this.rankings])if(!(t===e||t===this.rival)){t.age++;for(let i of qt)t.age<=27?t.add(i,fe()*2.5):t.age>=32&&t.add(i,-fe()*1.5);t.age>=37&&fe()<.5&&(!this.scheduled||this.scheduled.opp!==t)&&(xl(this.rankings,t),this.gfc&&this.log(t.displayName()+" ("+t.record()+") retires from the GFC."))}this.rival&&(this.rival.age++,this.rival.age>=38&&fe()<.5&&(!this.scheduled||this.scheduled.opp!==this.rival)&&(this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log("Your rival "+this.rival.displayName()+" retires. The rivalry is over."),xl(this.rankings,this.rival),this.rival=null)),this.refill(),e.age>=40&&!this.retired&&this.endCareer("At 40, "+e.name+" is forced to retire. Legacy: "+this.legacyTier()+".")}npcWeek(){let e=this.rankings;if(fe()>.35||e.length<4)return;let t=De(e.length-1),i=Math.min(e.length-1,t+1+De(3)),n=e[t],r=e[i];if(n===this.me||r===this.me||this.interim===n||this.interim===r||t===0&&this.champOut||this.scheduled&&(n===this.scheduled.opp||r===this.scheduled.opp))return;let a=1/(1+Math.exp((r.overall()-n.overall())/5)),o=fe()<a?n:r,l=o===n?r:n,h=fe(),c=h<.4?"KO":h<.6?"SUB":"DEC";if(o.recordResult("W",c),l.recordResult("L",c),o===r&&this.placeAbove(r,n),t===0&&this.gfc&&(o===n?this.addDefense():this.recordChamp(r,"Beat "+n.lastName()+" by "+(c==="KO"?"KO/TKO":c==="SUB"?"submission":"decision"))),this.gfc){let u=c==="KO"?"KO/TKO":c==="SUB"?"submission":"decision",d=o===this.rival?"Your rival ":l===this.rival?"Your rival loses! ":"";t===0?this.log(o===n?"Champion "+n.displayName()+" defends the belt vs "+r.lastName()+" by "+u+".":"UPSET! "+r.displayName()+" dethrones "+n.lastName()+" by "+u+" to become champion!"):this.log("GFC: "+d+o.displayName()+" def. "+l.displayName()+" by "+u+".")}}generateOffers(){if(this.offers=[],this.offersAge=0,this.retired)return;let e=this.me,t=this.rankings,i=this.offers,n=e.overall();if(this.gfc){let a=t.indexOf(e),o=this.interim&&this.interim!==e&&t.includes(this.interim)?this.interim:null;if(a===0)if(o)i.push(this.titleOffer(o,"unify"));else for(let l=1;l<=3&&l<t.length;l++)i.push(this.titleOffer(t[l]));else{if(this.interim===e)if(!this.champOutNow())i.push(this.titleOffer(t[0],"unify"));else{let l=t.find((h,c)=>c>0&&h!==e);l&&i.push(this.titleOffer(l,"interim"))}else this.champOutNow()&&!o&&(a===1||a===2)?i.push(this.titleOffer(t.find((l,h)=>h>0&&h<=3&&l!==e),"interim")):this.titleShotEligible()&&!this.champOutNow()&&!o&&i.push(this.titleOffer(t[0]));if(a>0&&this.interim!==e){let l=[];for(let h=Math.max(1,a-3);h<=Math.min(t.length-1,a+3);h++)h!==a&&t[h]!==o&&l.push(h);if(Mv(l),a>=2&&a<=5&&!this.nextInLine&&!this.titleShotEligible()){let h=l.findIndex(c=>c>=1&&c<=5);h>=0&&i.push(this.gfcOffer(t[l.splice(h,1)[0]],"eliminator"))}for(let h=0;i.length<3&&h<l.length;h++)i.push(this.gfcOffer(t[l[h]]))}else for((e.streak>=1||this.fame>=40)&&i.push(this.gfcOffer(t[Math.min(t.length-1,12+De(4))]));i.length<3;)i.push(this.gfcOffer(xt.generate(62+De(6),this.weightClass)))}}else{for(let a of[-6,0,6]){let o=Math.max(26,Math.min(72,n+a+De(5)-2)),l=this.managed(Math.round((300+o*10+this.fame*20+Math.max(0,a)*40)/50)*50);i.push(new pn(xt.generate(o,this.weightClass),3+De(4),l,l,3,!1,!1))}if(this.contenderEligible()){let a=this.managed(5e3);i.unshift(new pn(xt.generate(Math.max(57,n-1),this.weightClass),4,a,a,3,!1,!0))}}let r=this.rival;if(r&&this.rivalHeat>=Ov&&this.week-this.lastRivalFight>=Uv&&!i.some(a=>a.opp===r)){let a;if(this.gfc){let o=t.indexOf(r),l=t.indexOf(e);l===0?a=o>0?this.titleOffer(r):null:o===0?a=l>0&&l<=5?this.titleOffer(r):null:a=this.gfcOffer(r)}else{let o=this.managed(800+this.fame*30);a=new pn(r,4+De(3),o,o,3,!1,!1)}a&&(a.title||(a.purse=Math.round(a.purse*1.5),a.winBonus=Math.round(a.winBonus*1.5)),i.unshift(a))}}managed(e){return Math.round(e*(1+.05*this.stars("manager")))}gfcOffer(e,t=null){let i=this.rankings.indexOf(e),n=this.rankings.indexOf(this.me),r=this.managed(12e3+this.fame*400+(i>0?(ls-i)*3e3:0));!t&&i>0&&i<=5&&n>0&&n<=10&&(t="main"),t==="eliminator"&&(r=Math.round(r*1.5));let a=new pn(e,6+De(5),r,r,t==="main"?5:3,!1,!1);return a.kind=t,a}titleOffer(e,t="title"){let i=this.managed((t==="interim"?7e4:1e5)+this.fame*1500+this.titleDefenses*25e3),n=new pn(e,8+De(5),i,Math.trunc(i/2),5,!0,!1);return n.kind=t,n}titleShotEligible(){let e=this.rankings.indexOf(this.me);return this.gfc&&e>0&&(e===1||this.nextInLine||e<=3&&this.me.streak>=2||e<=5&&this.me.streak>=3)}contenderEligible(){return!this.gfc&&this.regionalWins>=yu&&this.me.overall()>=lf}legacyScore(){let e=this.me;return e.wins*2+e.koWins+e.subWins+this.titlesWon*30+this.titleDefenses*15+Math.floor(this.fame/2)-e.losses*2+(this.divisionsWon.length>=2?60:0)}legacyTier(){let e=this.legacyScore();return e>=300?"All-Time Great":e>=200?"Hall of Famer":e>=120?"Fan Favorite":e>=60?"Journeyman":"Never Made It"}hallOfFameEntry(){let e=this.me;return{name:e.displayName(),style:e.style,country:e.country,divisions:[...this.divisionsFought],record:e.record(),koWins:e.koWins,subWins:e.subWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],peakOverall:this.peakOverall,earnings:this.earnings,retiredAge:e.age,years:Math.floor((this.week-1)/52)+1,rivalries:[...this.rivalries],legacyScore:this.legacyScore(),legacy:this.legacyTier(),inducted:this.legacyScore()>=200}}dateLabel(){return"Y"+(Math.floor((this.week-1)/52)+1)+" W"+((this.week-1)%52+1)}log(e){for(this.news.unshift(this.dateLabel()+" \u2014 "+e);this.news.length>40;)this.news.pop()}goal(){if(this.retired)return"Retired. Legacy: "+this.legacyTier()+".";if(!this.gfc)return this.contenderEligible()?"You've earned a Contender Series invite! Win it to sign with the GFC.":"Earn a Contender Series invite: "+Math.min(this.regionalWins,yu)+"/"+yu+" regional wins and overall "+this.me.overall()+"/"+lf+".";let e=this.rankings.indexOf(this.me),t=this.titleDefenses;if(e===0){let i=this.week-this.lastTitleWeek;if(i>=ya)return"Defend the belt within "+(va-i)+" weeks or the GFC will strip you!";if(this.interim&&this.interim!==this.me)return"There's an interim champion. Unify the belts and prove who's the real champ.";let n=Object.entries(this.heldBelts).find(([,o])=>this.week-o.since>=ya);if(n)return"Your "+n[0]+" belt will be stripped in "+(va-(this.week-n[1].since))+" weeks \u2014 go back and defend it!";let r=Object.keys(this.heldBelts).length+1,a=r>1;return(a?pu(r)+" \u2014 "+r+" belts! ":"You're the champion! ")+"Defend the belt"+(this.divisionsWon.length<2&&!a?" \u2014 or move divisions and chase a second one.":".")+" ("+t+" defense"+(t===1?"":"s")+")"}return this.interim===this.me?this.champOutNow()?"You're the interim champion. Defend it until the champ is healthy, then unify.":"The champion is back. Unify the belts!":this.champOutNow()&&(e===1||e===2)?"The champion is injured \u2014 you're in line for the interim title fight!":this.nextInLine?"You won the eliminator \u2014 the next title shot is yours.":e<0?"Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.":this.titleShotEligible()?"A title shot is on the table \u2014 take it!":e<=5?"You're #"+e+". Win a title eliminator, reach #1, or go on a win streak for a title shot.":"You're #"+e+". Climb into the top 3 for a shot at the belt."}offerJson(e,t){return{index:t,opponent:e.opp.toJson(),oppRank:this.gfc?this.rankings.indexOf(e.opp):-1,weeks:e.weeks,purse:e.purse,winBonus:e.winBonus,rounds:e.rounds,title:e.title,contender:e.contender,kind:e.kind||null,grudge:e.opp===this.rival,oppBonus:e.oppBonus}}toJson(){let e=this.gym,t={};for(let n of ff){let r=this.team[n];t[n]={...r?r.toJson():{},role:n,title:dn.title(n)}}let i=null;return this.rival&&(i={...this.rival.toJson(),heat:this.rivalHeat,h2hWins:this.rivalWins,h2hLosses:this.rivalLosses,rank:this.gfc?this.rankings.indexOf(this.rival):-1}),{fighter:this.me.toJson(),weightClass:Lt[this.weightClass],weightClassIndex:this.weightClass,divisionCooldown:Math.max(0,this.lastDivisionChange+hf-this.week),year:Math.floor((this.week-1)/52)+1,week:(this.week-1)%52+1,money:this.money,earnings:this.earnings,fame:this.fame,energy:this.energy,trainCost:this.trainCost(),injuryWeeks:this.injuryWeeks,peakOverall:this.peakOverall,gym:{level:e,name:cn[e],mult:vu[e],fee:of[e],nextName:e+1<cn.length?cn[e+1]:null,nextCost:e+1<cn.length?af[e+1]:null},team:t,teamSalary:this.teamSalary(),market:this.market.map((n,r)=>{let a=this.team[n.role];return{...n.toJson(),index:r,current:a?a.name+" ("+a.stars+"\u2605)":null}}),marketRefresh:8-this.marketAge,rival:i,rivalries:this.rivalries,canTalk:this.lastTalkWeek!==this.week&&!this.retired&&!this.fight,lastTalk:this.lastTalk,gfc:this.gfc,org:this.gfc?"GFC":"Iron Cage Regional",rank:this.gfc?this.rankings.indexOf(this.me):-1,regionalWins:this.regionalWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],retired:this.retired,legacy:this.legacyTier(),legacyScore:this.legacyScore(),goal:this.goal(),offers:this.offers.map((n,r)=>this.offerJson(n,r)),scheduled:this.scheduled?this.offerJson(this.scheduled,-1):null,fightNight:this.fightNight(),rankings:this.rankings.map((n,r)=>({rank:r,name:n.displayName(),record:n.record(),overall:n.overall(),style:n.style,player:n===this.me,rival:n===this.rival,interim:n===this.interim})),belt:this.gfc?{division:this.division(),champion:this.rankings[0]?this.rankings[0].displayName():null,interim:this.interim?this.interim.displayName():null,interimIsMe:this.interim===this.me,champInjured:this.champOutNow()?this.champOut-this.week:0,idle:this.isChamp()?this.week-this.lastTitleWeek:null,stripWeeks:va,stripWarn:ya,held:Object.keys(this.heldBelts),heldIdle:Object.values(this.heldBelts).map(n=>this.week-n.since),nextInLine:this.nextInLine,lineage:(this.lineage[this.division()]||[]).slice(-15).reverse()}:null,news:this.news,history:this.history,fight:this.fight?this.fight.toJson():null,lastResult:this.lastResult,life:this.lifeJson()}}};ba.tag="Career";var mf={Career:ba,Offer:pn,Staff:dn,Fight:_a,Corner:gr};function _u(s){let e={},t=n=>{if(n instanceof xt)return e[n.id]||(e[n.id]={...n,stats:{...n.stats}}),{$f:n.id};if(Array.isArray(n))return n.map(t);if(n&&typeof n=="object"){let r={},a=n.constructor&&n.constructor.tag;a&&mf[a]&&(r.$c=a);for(let o of Object.keys(n))o!=="current"&&(r[o]=t(n[o]));return r}return n},i=t(s);return JSON.stringify({v:1,pool:e,data:i})}function bu(s){let{pool:e,data:t}=JSON.parse(s),i={};for(let a of Object.keys(e))i[a]=Object.assign(Object.create(xt.prototype),e[a]);let n=a=>{if(Array.isArray(a))return a.map(n);if(a&&typeof a=="object"){if(a.$f)return i[a.$f];let o=a.$c?mf[a.$c]:null,l=o?Object.create(o.prototype):{};for(let h of Object.keys(a))h!=="$c"&&(l[h]=n(a[h]));return l}return a},r=n(t);return r.fight&&r.fight.logs.length&&(r.fight.current=r.fight.logs[r.fight.logs.length-1]),r}var un=5,Wv=/^\d(,\d){4,11}$/,bl=class{constructor(e){this.store=e,this.profile={slots:[],active:null,claimed:[]},this.careers=new Map,this.hof=[]}async load(){let e=await this.store.getProfile();e&&Array.isArray(e.slots)&&(this.profile={slots:e.slots.slice(0,un),active:e.active??null,claimed:Array.isArray(e.claimed)?e.claimed:[]});for(let t of this.profile.slots)try{let i=await this.store.getCareer(t);i&&this.careers.set(t,bu(i))}catch(i){console.warn("Save unreadable",t,i)}this.profile.slots=this.profile.slots.filter(t=>this.careers.has(t)),this.careers.has(this.profile.active)||(this.profile.active=null),this.hof=await this.store.getHallOfFame(),await this.claimGifts()}async claimGifts(){if(!this.store.getGifts)return;let e=!1;for(let t of await this.store.getGifts())if(!(this.profile.claimed.includes(t.id)||this.profile.slots.length>=un))try{let i=bu(t.save),n=_l();this.careers.set(n,i),this.profile.slots.push(n),this.profile.active=n,this.profile.claimed.push(t.id),this.giftMessage="A new fighter is ready: "+i.me.displayName()+".",e=!0}catch(i){console.warn("Gift unreadable",t.id,i)}e&&this.saveAll()}profileDoc(){return{slots:[...this.profile.slots],active:this.profile.active,claimed:[...this.profile.claimed]}}active(){return this.profile.active&&this.careers.get(this.profile.active)||null}need(e){if(!e)throw new ce("Create a fighter first.");return e}call(e,t={}){let i=this.profile,n=this.active();n&&n.migrate();let r=null,a=l=>l==null||l===""||isNaN(Number(l))?-1:Math.trunc(Number(l)),o=!1;switch(e){case"state":break;case"new":{if(i.slots.length>=un)throw new ce(`All ${un} save slots are full. Delete a save first.`);let l=this.newCareer(t),h=_l();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0;break}case"action":r=this.need(n).act(t.type,t.stat);break;case"accept":r=this.need(n).accept(a(t.index));break;case"upgrade":r=this.need(n).upgradeGym();break;case"fight/start":r=this.need(n).startFight();break;case"fight/round":this.need(n).fightRound(t.plan,t.touch!==!1&&t.touch!=="false");break;case"fight/close":this.need(n).closeFight();break;case"retire":r=this.need(n).retire();break;case"talk":r=this.need(n).talk(t.target,t.tone);break;case"staff/hire":r=this.need(n).hire(a(t.index));break;case"staff/fire":r=this.need(n).fire(t.role);break;case"division":r=this.need(n).changeDivision(a(t.weightClass));break;case"life":r=this.need(n).lifeAction(t.type,t);break;case"save/blank":if(i.slots.length>=un)throw new ce(`All ${un} save slots are full. Delete a save first.`);i.active=null,o=!0;break;case"save/switch":{let l=this.slot(a(t.slot));i.active=l,o=!0,r="Loaded "+this.careers.get(l).me.displayName()+".";break}case"save/import":{if(i.slots.length>=un)throw new ce(`All ${un} save slots are full. Delete a save first.`);let l;try{if(l=bu(String(t.text||"")),!l||!(l.me instanceof xt))throw new Error("no fighter")}catch{throw new ce("That save code or file isn't a Cage Career 3D career.")}let h=_l();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0,r="Loaded "+l.me.displayName()+".";break}case"save/delete":{let l=this.slot(a(t.slot)),h=this.careers.get(l);i.slots=i.slots.filter(c=>c!==l),i.active===l&&(i.active=null),this.careers.delete(l),this.store.deleteCareer(l),o=!0,r=h?"Deleted "+h.me.displayName()+".":"Save deleted.";break}default:throw new ce("Unknown action: "+e)}return n=this.active(),n&&(n.migrate(),n.pinOthers()),this.induct(n),e!=="state"&&(n&&this.store.setCareer(i.active,_u(n)),o&&this.store.setProfile(this.profileDoc())),this.state(n,r)}saveAll(){this.store.setProfile(this.profileDoc());for(let[e,t]of this.careers)this.store.setCareer(e,_u(t))}exportSave(e){return _u(this.careers.get(this.slot(e)))}slot(e){if(e<0||e>=this.profile.slots.length)throw new ce("That save slot doesn't exist.");return this.profile.slots[e]}newCareer(e){let t=String(e.name||"").trim().replace(/\s+/g," ");if(!t||t.length>30)throw new ce("Enter a name (1-30 characters).");let i=String(e.nickname||"").trim();if(i.length>24)throw new ce("Nickname is too long.");let n=Number(e.weightClass);if(!(Number.isInteger(n)&&n>=0&&n<Lt.length))throw new ce("Pick a weight class.");if(!pf.includes(e.style))throw new ce("Pick a fighting style.");let r=wu.includes(e.country)?e.country:"USA",a=new ba(t,i,n,e.style,r);return Wv.test(e.look||"")&&(a.me.look=e.look),a}induct(e){if(!e||!e.retired||e.inducted)return;e.inducted=!0;let t={...e.hallOfFameEntry(),owner:this.profile.active};this.hof.push({...t,mine:!0}),this.store.addHallOfFame(t)}state(e,t){let i={exists:!!e};return e&&Object.assign(i,e.toJson()),i.weightClasses=Lt,i.countries=wu,i.saves=this.profile.slots.map((n,r)=>{let a=this.careers.get(n);return{slot:r,active:n===this.profile.active,name:a.me.displayName(),weightClass:Lt[a.weightClass],style:a.me.style,record:a.me.record(),overall:a.me.overall(),age:a.me.age,retired:a.retired}}),i.maxSaves=un,i.hallOfFame=[...this.hof].sort((n,r)=>r.legacyScore-n.legacyScore),i.storage=this.store.kind,i.message=t||this.giftMessage||null,this.giftMessage=null,i}};var vf="cc3d_localOnly";async function yf(){try{if(localStorage.getItem(vf))return Eu()}catch{}try{if(window.claude&&typeof window.claude.use=="function"){let[s,e]=await Promise.all([window.claude.use("db"),window.claude.use("user")]),t=s&&e?await e.id():null,i=e?await e.can("data.write"):null;if(s&&t&&i!==!1)return jv($v(s,t))}}catch(s){console.warn("Account storage unavailable, using this browser",s)}return Eu()}function jv(s){let e=s,t={get kind(){return e.kind},onDowngrade:null},i=()=>{if(e.kind!=="device"){e=Eu();try{localStorage.setItem(vf,"1")}catch{}t.onDowngrade&&t.onDowngrade()}};s.refused=i;for(let n of["getProfile","setProfile","getCareer","setCareer","deleteCareer","getHallOfFame","addHallOfFame"])t[n]=(...r)=>e[n](...r);return t.getGifts=()=>e.getGifts?e.getGifts():Promise.resolve([]),t}function gf(s,e){let t=new Map;return(i,n)=>{let r=t.get(i);r||t.set(i,r={running:!1,next:void 0,has:!1}),r.next=n,r.has=!0,!r.running&&(r.running=!0,(async()=>{for(;r.has;){let a=r.next;r.has=!1;try{await s(i,a)}catch{try{await new Promise(l=>setTimeout(l,600+Math.random()*600)),await s(i,a)}catch(l){e(l)}}}r.running=!1})())}}var Ru=s=>console.error("Save failed",s);function xf(s){Ru=s}function $v(s,e){let t=s.collection("data/users/"+e),i=s.doc("hof/"+e),n=[],r=h=>{h&&(h.code==="invalid_argument"||h.code==="not_granted"||h.code==="revoked")&&l.refused?l.refused():Ru(h)},a=gf(async(h,c)=>{c===null?await t.doc(h).delete():await t.doc(h).set(c)},r),o=gf(async(h,c)=>i.set({entries:c}),r),l={kind:"account",async getProfile(){let h=await t.doc("profile").get();return h.exists?h.data():null},setProfile(h){a("profile",h)},async getCareer(h){let c=await t.doc("c_"+h).get();return c.exists?c.data().save:null},setCareer(h,c){a("c_"+h,{save:c,updated:Date.now()})},deleteCareer(h){a("c_"+h,null)},async getHallOfFame(){let h=[];try{let c=await s.collection("hof").get();for(let u of c.docs){let d=u.data()&&u.data().entries||[];u.id===e&&(n=d.slice());for(let p of d)h.push({...p,mine:u.id===e})}}catch(c){console.warn("Hall of Fame unavailable",c)}return h},addHallOfFame(h){n.push(h),o("hof",n.slice())},async getGifts(){try{return(await s.collection("gifts").get()).docs.filter(c=>c.data()&&c.data().save).map(c=>({id:c.id,save:c.data().save}))}catch{return[]}}};return l}function Eu(){let s="cc3d_",e=i=>{try{return localStorage.getItem(s+i)}catch{return null}},t=(i,n)=>{try{n===null?localStorage.removeItem(s+i):localStorage.setItem(s+i,n)}catch(r){Ru(r)}};return{kind:"device",async getProfile(){try{return JSON.parse(e("profile")||"null")}catch{return null}},setProfile(i){t("profile",JSON.stringify(i))},async getCareer(i){return e("c_"+i)},setCareer(i,n){t("c_"+i,n)},deleteCareer(i){t("c_"+i,null)},async getHallOfFame(){try{return JSON.parse(e("hof")||"[]").map(i=>({...i,mine:!0}))}catch{return[]}},addHallOfFame(i){let n=[];try{n=JSON.parse(e("hof")||"[]")}catch{}n.push(i),t("hof",JSON.stringify(n))}}}var us={striking:"Striking",power:"Power",speed:"Speed",wrestling:"Wrestling",grappling:"Grappling",cardio:"Cardio",chin:"Chin"},Sf=[{id:"BALANCED",name:"Balanced",desc:"Mix strikes and takedowns"},{id:"STRIKE",name:"Strike",desc:"Keep it standing, throw volume"},{id:"WRESTLE",name:"Wrestle",desc:"Takedowns and top control"},{id:"SUBMIT",name:"Hunt Subs",desc:"Drag it down, chase the tap"},{id:"COUNTER",name:"Counter",desc:"Patient, saves energy"},{id:"ALLOUT",name:"All Out",desc:"Swing big, burns the tank"}],_e=s=>document.getElementById(s),be=null,Au=!1,Ml=0,cs=!1,Ma=!1,Tl=!0,Cu=null,Ke=null,Xv=Object.fromEntries(Sf.map(s=>[s.id,s.name])),We=null;try{We=tf()}catch(s){console.warn("3D disabled:",s)}var vr=Xc(),gn=1;try{gn=Number(localStorage.getItem("cc3d_speed"))||1}catch{}We&&We.arena.setSpeed(gn);G0((s,e)=>{let t=_e("announcerLine");if(t){if(!s){t.className="announcer-line";return}t.textContent=(e==="call"?"\u{1F399} ":"\u{1F3A4} ")+s,t.className="announcer-line show "+(e||"")}});We&&(We.world.onNear=()=>Bu(),We.world.onEnter=s=>fn("place",{place:s}));function se(s){return String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Je(s){let e=Math.round(s);return(e<0?"-$":"$")+Math.abs(e).toLocaleString()}function Yv(s){return s>0&&be&&be.belt&&be.belt.interimIsMe?"Interim champion":s===0?"Champion":s>0?"#"+s:"Unranked"}function xr(s,e,t=""){let i=Math.max(0,Math.min(100,s));return`<div class="bar ${t}"><i style="width:${i}%;${e?"background:"+e:""}"></i></div>`}function qv(s){return s>=80?"var(--gold)":s>=65?"var(--green)":s>=45?"var(--blue)":"#6b7385"}function Tf(s){return s>60?"var(--green)":s>30?"var(--orange)":"var(--red)"}var _f;function yi(s,e=!1){let t=_e("toast");t.textContent=s,t.className="toast show"+(e?" err":""),clearTimeout(_f),_f=setTimeout(()=>t.className="toast",2600)}var yr=null;async function mn(s,e={}){if(Au||!yr)return null;Au=!0;try{let t=yr.call(s,e);return be=t,t.message&&yi(t.message),t}catch(t){return t instanceof ce?yi(t.message,!0):(console.error(t),yi("Something went wrong. Your last save is safe.",!0)),null}finally{Au=!1}}function wl(s,e){return new Promise(t=>{let i=_e("askBox");_e("askText").textContent=s,_e("askYes").textContent=e,i.classList.remove("hidden");let n=r=>{i.classList.add("hidden"),_e("askYes").onclick=_e("askNo").onclick=null,t(r)};_e("askYes").onclick=()=>n(!0),_e("askNo").onclick=()=>n(!1)})}async function ki(s,e){await mn(s,e)&&Ii()}var Lu="CC3D1.";async function Ef(s,e){let t=new Blob([s]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Uint8Array(await new Response(t).arrayBuffer())}async function Jv(s){let e=await Ef(new TextEncoder().encode(s)),t="";for(let i=0;i<e.length;i+=32768)t+=String.fromCharCode(...e.subarray(i,i+32768));return Lu+btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Kv(s){let e=String(s||"").trim();if(e.startsWith("{"))return e;let t=e.indexOf(Lu);if(t<0)throw new Error("not a save code");let i=e.slice(t+Lu.length).replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/"),n=atob(i+"=".repeat((4-i.length%4)%4)),r=Uint8Array.from(n,a=>a.charCodeAt(0));return new TextDecoder().decode(await Ef(r,!0))}async function Du(s){let e;try{e=await Kv(s)}catch{yi("That save code or file isn't a Cage Career 3D career.",!0);return}await mn("save/import",{text:e})&&(Ke=null,Nu(),Ii())}async function Zv(s,e){let t=null;try{window.claude&&typeof window.claude.use=="function"&&(t=await window.claude.use("downloads"))}catch{}if(t){try{await t.save({filename:s,data:e})}catch(r){r&&r.code!=="declined"&&yi("Couldn't save the file here. Copy the save code instead.",!0)}return}let i=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=i,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(i),5e3)}async function Qv(s){try{await navigator.clipboard.writeText(s),yi("Save code copied.")}catch{let e=_e("exportCode");e&&(e.focus(),e.select()),yi("Select the code and copy it.")}}function Ii(){if(be){if(_e("lifeBtn").classList.toggle("hidden",!be.exists),!be.exists){_e("create").classList.remove("hidden"),_e("dash").classList.add("hidden"),_e("topstats").innerHTML="",_e("fightScreen").classList.add("hidden"),_e("createSaves").innerHTML=`<p class="btn-row">${be.saves.length?`<button class="btn small" data-saves>\u2190 Back to your ${be.saves.length} saved fighter${be.saves.length===1?"":"s"}</button>`:""}
      <button class="btn small" data-importopen>\u{1F4C2} Load a saved career</button></p>`,iy(),ku(),_r(),bf();return}_e("create").classList.add("hidden"),_e("dash").classList.remove("hidden"),ny(),_e("goal").textContent=be.goal,sy(),oy(),ly(),py(),fy(),hy(),cy(),uy(),dy(),by(),_r(),vy(),bf()}}function bf(){Pu();let s=!_e("fightScreen").classList.contains("hidden");We&&(s?We.show(_e("arenaStage"),"arena"):Uu()&&be.exists?(We.show(_e("worldStage"),"world"),We.world.setLife({look:be.fighter.look,weightClass:be.weightClassIndex,style:be.fighter.style,life:be.life,ink:be.fighter.nickname||be.fighter.name.split(" ").pop(),carCatalog:be.life.catalog.cars,injured:be.injuryWeeks>0})):be.exists?(We.show(_e("dashStage"),"preview"),We.preview.setFighters(ey())):(We.show(_e("createStage"),"preview"),Rl())),be.exists&&ty(),El()}function El(){let s=be&&be.fight;if(!(s&&!_e("fightScreen").classList.contains("hidden"))){tu(!1),as("camp");return}if(tu(!0),s.finished&&!cs)return as(null);if(s.finished)return;let t=s.round+(cs?0:1)===s.rounds&&s.rounds>1;as("fight",cs?t?1.2:1:s.round===0?.6:.35)}function Pu(){document.querySelectorAll("[data-sound]").forEach(s=>{s.textContent=eu()?"\u{1F50A}":"\u{1F507}",s.title=eu()?"Sound on":"Sound off"}),_e("speedBtn").textContent=gn+"\xD7"}function ey(){let s=be,e=s.rank===0||s.belt&&(s.belt.interimIsMe||s.belt.held.length>0),t={look:s.fighter.look,name:s.fighter.name,weightClass:s.weightClassIndex,style:s.fighter.style,belt:e&&!s.retired?"waist":null,injured:s.injuryWeeks>0,ink:s.fighter.nickname||s.fighter.name.split(" ").pop()},i=s.scheduled&&!s.retired?s.scheduled:null,n=i?i.opponent:null;return n?[t,{look:n.look,name:n.name,weightClass:s.weightClassIndex,style:n.style,belt:i.oppRank===0?"shoulder":null}]:[t]}function ty(){let s=be,e=s.scheduled&&!s.retired?s.scheduled.opponent:null;_e("showcaseCap").innerHTML=e?`<span class="red">${se(s.fighter.displayName)}</span><span class="vs">VS</span><span class="blue">${se(e.displayName)}</span>`:`<span class="red">${se(s.fighter.displayName)}</span><span class="muted">${se(s.fighter.style)} \xB7 ${se(s.weightClass)} \xB7 drag to spin</span>`}function ku(){let s=_e("lookPickers"),e=(t,i,n)=>`
    <div class="look-row"><span>${i}</span><div class="chips">
      ${zt[t].map((r,a)=>n==="swatch"?`<button type="button" class="swatch ${vr[t]===a?"on":""}" style="background:${r}" data-look="${t}:${a}" title="${t==="shorts"?R0[a]:""}" aria-label="${i} ${a+1}"></button>`:`<button type="button" class="btn chip ${vr[t]===a?"on":""}" data-look="${t}:${a}">${se(r)}</button>`).join("")}
    </div></div>`;s.innerHTML=e("skin","Skin tone","swatch")+e("hair","Hair","chip")+e("hairColor","Hair color","swatch")+e("beard","Facial hair","chip")+e("shorts","Fight shorts","swatch")+e("body","Body type","chip")+e("abs","Abs","chip")+'<div class="label" style="margin-top:8px">Tattoos</div>'+An.map(t=>e(t.key,t.name,"chip")).join(""),_e("lookInput").value=$c(vr)}function Rl(){if(!We)return;let e=(_e("createForm").querySelector("input[name=style]:checked")||{}).value||"Striker";We.preview.setFighters([{look:$c(vr),weightClass:Number(_e("wcSelect").value||3),style:e}])}function iy(){let s=_e("wcSelect");s.options.length||(s.innerHTML=be.weightClasses.map((e,t)=>`<option value="${t}" ${t===3?"selected":""}>${se(e)}</option>`).join(""),_e("countrySelect").innerHTML=be.countries.map(e=>`<option>${se(e)}</option>`).join(""))}function ny(){let s=be;_e("topstats").innerHTML=`
    <span>Year <b>${s.year}</b> \xB7 Week <b>${s.week}</b></span>
    <span>Age <b>${s.fighter.age}</b></span>
    <span class="${s.money<0?"neg":""}">Cash <b>${Je(s.money)}</b></span>
    <span>Fame <b>${s.fame}</b></span>`}function sy(){let s=be.fighter,e=be,t=[],i=e.belt?(e.rank===0?1:0)+e.belt.held.length:0;if(i>1&&t.push(`<span class="badge gold">\u{1F3C6} ${["","","CHAMP-CHAMP","TRIPLE CHAMP","QUADRUPLE CHAMP"][i]||i+"-BELT CHAMP"}</span>`),e.rank===0?t.push(`<span class="badge gold">\u{1F3C6} GFC ${se(e.weightClass).toUpperCase()} CHAMPION</span>`):e.belt&&e.belt.interimIsMe?t.push('<span class="badge gold">INTERIM CHAMPION</span>'):e.rank>0&&t.push(`<span class="badge red">GFC #${e.rank}</span>`),e.belt)for(let n of e.belt.held)t.push(`<span class="badge gold">\u{1F3C6} ${se(n)} champion</span>`);t.push(`<span class="badge">${se(e.org)}</span>`),s.streak>=2&&t.push(`<span class="badge green">${s.streak}-fight win streak</span>`),s.streak<=-2&&t.push(`<span class="badge red">${-s.streak}-fight skid</span>`),e.injuryWeeks>0&&t.push(`<span class="badge red">Injured ${e.injuryWeeks}w</span>`),e.titlesWon&&t.push(`<span class="badge gold">${e.titlesWon}\xD7 champ</span>`),_e("fighterCard").innerHTML=`
    <div class="fighter-top">
      <div>
        <div class="fighter-name">${se(s.displayName)}</div>
        <div class="fighter-meta">${se(s.style)} \xB7 ${se(e.weightClass)} \xB7 ${se(s.country)} \xB7 Age ${s.age}</div>
      </div>
      <div class="ovr"><b>${s.overall}</b><span>OVR</span></div>
    </div>
    <div class="record">${s.record} <small>${s.koWins} KO \xB7 ${s.subWins} SUB \xB7 ${s.decWins} DEC</small></div>
    <div class="badges">${t.join("")}</div>
    ${Object.entries(s.stats).map(([n,r])=>`
      <div class="stat"><span>${us[n]}</span>${xr(r,qv(r))}<b>${Math.floor(r)}</b></div>`).join("")}`}function ry(s){let e=s.overall-be.fighter.overall;return e<=-4?'<span class="diff easy">Favorite</span>':e>=4?'<span class="diff hard">Underdog</span>':'<span class="diff even">Even</span>'}function Mf(s,e){let t=s.opponent,i={interim:"\u{1F3C6} INTERIM TITLE FIGHT \xB7 5 rounds",unify:"\u{1F3C6} TITLE UNIFICATION \xB7 5 rounds",title:"\u{1F3C6} TITLE FIGHT \xB7 5 rounds",eliminator:"\u{1F3AF} TITLE ELIMINATOR \xB7 winner gets the next shot",main:"\u2605 MAIN EVENT \xB7 5 rounds"},n=(s.grudge?"\u2694 GRUDGE MATCH \xB7 ":"")+(s.title?i[s.kind]||i.title:i[s.kind]||(s.contender?"\u2B50 CONTENDER SERIES":`${s.rounds} rounds`)),r=be.belt&&be.belt.interim&&!be.belt.interimIsMe&&s.opponent.displayName===be.belt.interim,a=s.oppRank===0?"Champion":r?"Interim champion":s.oppRank>0?`#${s.oppRank}`:"";return`
    <div class="offer ${s.title?"title":""} ${s.contender||s.grudge?"contender":""}">
      <div class="offer-top">
        <div>
          <div class="offer-meta">${n}${a?" \xB7 "+a:""}</div>
          <div class="offer-name">${se(t.displayName)}</div>
          <div class="offer-meta">${t.record} \xB7 ${se(t.style)} \xB7 ${se(t.country)} \xB7 Age ${t.age} \xB7 OVR <b>${t.overall}</b></div>
        </div>
        ${ry(t)}
      </div>
      <div class="offer-money">Purse <b>${Je(s.purse)}</b> + <b>${Je(s.winBonus)}</b> to win \xB7 in ${s.weeks} week${s.weeks===1?"":"s"}</div>
      ${e?`<button class="btn ${s.title?"gold":"primary"} small" data-accept="${s.index}">Accept fight</button>`:""}
    </div>`}function ay(s){let e=be.fighter;return Object.keys(us).map(t=>{let i=Math.floor(e.stats[t]),n=Math.floor(s.stats[t]);return`<div class="stat" style="grid-template-columns:34px 1fr 34px">
      <b style="text-align:left;color:${i>=n?"var(--text)":"var(--muted)"}">${i}</b>
      <span style="text-align:center;font-size:12px;color:var(--muted)">${us[t]}</span>
      <b style="color:${n>=i?"var(--text)":"var(--muted)"}">${n}</b></div>`}).join("")}function oy(){let s=be,e=_e("fightCard");if(s.retired){e.innerHTML=`
      <h2>Career over</h2>
      <div class="fight-night">
        <h3>${se(s.legacy)}</h3>
        <p>${se(s.fighter.displayName)} retired at ${s.fighter.age} with a record of <b>${s.fighter.record}</b>.</p>
        <p class="muted">${s.titlesWon} title${s.titlesWon===1?"":"s"} won \xB7 ${s.titleDefenses} defenses \xB7 ${Je(s.earnings)} career earnings \xB7 legacy score ${s.legacyScore}</p>
      </div>
      <div class="btn-row"><button class="btn primary big" data-newsave>Start a new career</button><button class="btn big" data-saves>\u{1F4BE} Saves</button></div>`;return}if(s.fightNight){let t=s.scheduled;e.innerHTML=`
      <h2>Next fight</h2>
      <div class="fight-night">
        <h3>FIGHT NIGHT</h3>
        <p>${t.title?t.kind==="interim"?"\u{1F3C6} For the interim GFC title \u2014 ":t.kind==="unify"?"\u{1F3C6} To unify the GFC belts \u2014 ":"\u{1F3C6} For the GFC title \u2014 ":t.kind==="eliminator"?"\u{1F3AF} Title eliminator \u2014 ":t.kind==="main"?"\u2605 Main event \u2014 ":""}vs <b>${se(t.opponent.displayName)}</b></p>
      </div>
      <button class="btn primary big" data-startfight>Walk out to the cage</button>`;return}if(s.scheduled){let t=s.scheduled;e.innerHTML=`
      <h2>Fight camp</h2>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
        <div class="countdown">${t.weeks}</div>
        <div class="muted">week${t.weeks===1?"":"s"} until fight night.<br>Train hard \u2014 every session counts.</div>
      </div>
      ${Mf(t,!1)}
      ${t.oppBonus>0?`<p class="badge red" style="display:inline-block">Opponent fired up: +${t.oppBonus} to all stats</p>`:""}
      <button class="btn small" data-talk="opponent" ${s.canTalk?"":"disabled"}>\u{1F3A4} Talk to the press${s.canTalk?"":" (done this week)"}</button>
      <div class="label">Tale of the tape <span style="float:right">You \xB7 Them</span></div>
      ${ay(t.opponent)}`;return}e.innerHTML=`
    <h2>Fight offers</h2>
    ${s.offers.length?s.offers.map(t=>Mf(t,!0)).join(""):'<p class="muted">No offers right now. Keep training \u2014 your manager is working the phones.</p>'}
    <p class="muted" style="font-size:12px;margin:6px 0 0">Offers refresh every few weeks.</p>`}function ly(){let s=be,e=s.retired||s.fightNight||!!s.fight,t=s.injuryWeeks>0;_e("actionsCard").innerHTML=`
    <h2>This week</h2>
    <div class="energy-row">
      <div class="lbl"><span>Energy</span><b>${s.energy}/100</b></div>
      ${xr(s.energy,s.energy>50?"var(--green)":s.energy>25?"var(--orange)":"var(--red)","lg")}
    </div>
    ${t?`<p class="badge red" style="display:inline-block">Injured: ${s.injuryWeeks} week(s) \u2014 no training or sparring</p>`:""}
    <div class="label" style="margin-top:4px">Train <span class="muted">(\u2212${s.trainCost} energy, ${s.gym.name} \xD7${s.gym.mult})</span></div>
    <div class="train-grid">
      ${Object.keys(us).map(i=>`
        <button class="btn small" data-train="${i}" ${e||t||s.energy<s.trainCost?"disabled":""}>${us[i]}</button>`).join("")}
    </div>
    <div class="act-grid">
      <button class="btn" data-action="spar" ${e||t||s.energy<30?"disabled":""}>Spar<span class="sub">Gains across the board \xB7 \u221230</span></button>
      <button class="btn" data-action="rest" ${e?"disabled":""}>Rest<span class="sub">Recover energy \xB7 +50</span></button>
      <button class="btn" data-action="media" ${e||s.energy<10?"disabled":""}>Media<span class="sub">Build fame \xB7 \u221210</span></button>
      <button class="btn" data-action="work" ${e||s.energy<15?"disabled":""}>${s.gfc?"Seminar":"Teach classes"}<span class="sub">Earn cash \xB7 \u221215</span></button>
    </div>
    <p class="muted" style="font-size:12px;margin:10px 0 0">Each action takes one week. Weekly costs: ${Je(s.gym.fee+s.teamSalary)} (gym ${Je(s.gym.fee)} + team ${Je(s.teamSalary)}).</p>`}function hy(){let s=be,e=s.gym;_e("statusCard").innerHTML=`
    <h2>Career</h2>
    <div class="kv">
      <span>Promotion</span><b>${se(s.org)}</b>
      <span>Ranking</span><b>${s.gfc?Yv(s.rank):"\u2014"}</b>
      ${s.gfc?"":`<span>Regional wins (since tryout)</span><b>${s.regionalWins}</b>`}
      <span>Cash</span><b style="color:${s.money<0?"var(--red)":"var(--green)"}">${Je(s.money)}</b>
      <span>Career earnings</span><b>${Je(s.earnings)}</b>
      <span>Division</span><b>${se(s.weightClass)}</b>
      <span>Title defenses</span><b>${s.titleDefenses}</b>
      ${s.divisionsWon.length?`<span>Belts won</span><b>${s.divisionsWon.map(se).join(", ")}</b>`:""}
      <span>Peak overall</span><b>${s.peakOverall}</b>
      <span>Fame</span><b>${s.fame}/100</b>
    </div>
    ${xr(s.fame,"var(--gold)")}
    <div class="gym-box">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <div><b>${se(e.name)}</b><div class="muted" style="font-size:12px">Training \xD7${e.mult} \xB7 ${Je(e.fee)}/wk</div></div>
        ${e.nextName?`<button class="btn small" data-upgrade ${s.money<e.nextCost||s.retired?"disabled":""}>Move up<span class="sub">${se(e.nextName)} \xB7 ${Je(e.nextCost)}</span></button>`:'<span class="badge gold">Best gym</span>'}
      </div>
    </div>
    <div class="footer-btns">
      ${s.retired?"":`<button class="btn ghost small" data-division ${s.scheduled||s.fight?"disabled":""}>Change division${s.divisionCooldown?` (${s.divisionCooldown}w)`:""}</button>`}
      ${s.retired?"":'<button class="btn ghost small" data-retire>Retire</button>'}
      <button class="btn ghost small" data-saves>\u{1F4BE} Saves / new career</button>
    </div>`}function cy(){let s=be,e=s.belt,t=e?`
    <div class="belt-box">
      <div class="belt-title">\u{1F3C6} GFC ${se(e.division)} Championship</div>
      <div class="kv">
        <span>Champion</span><b>${se(e.champion||"Vacant")}${s.rank===0?" (you)":""}</b>
        ${e.interim?`<span>Interim champion</span><b>${se(e.interim)}${e.interimIsMe?" (you)":""}</b>`:""}
        ${e.champInjured?`<span>Status</span><b style="color:var(--orange)">Champion injured \xB7 ${e.champInjured}w</b>`:""}
        ${e.idle!==null?`<span>Last title fight</span><b style="color:${e.idle>=e.stripWarn?"var(--red)":"var(--text)"}">${e.idle} weeks ago${e.idle>=e.stripWarn?` \u2014 stripped in ${e.stripWeeks-e.idle}w`:""}</b>`:""}
        ${e.held.map((i,n)=>`<span>${se(i)} belt</span><b style="color:${e.heldIdle[n]>=e.stripWarn?"var(--red)":"var(--gold)"}">Yours \xB7 stripped in ${e.stripWeeks-e.heldIdle[n]}w unless defended</b>`).join("")}
        ${e.nextInLine?`<span>Title shot</span><b style="color:var(--gold)">You're next in line</b>`:""}
      </div>
      ${e.lineage.length?`<details><summary>Belt lineage</summary><ol class="lineage">${e.lineage.map(i=>`
        <li class="${i.player?"me":""}"><b>${se(i.name)}</b>${i.interim?' <span class="badge">interim</span>':""}
          <div class="muted">${se(i.how)} \xB7 ${se(i.date)}${i.defenses?` \xB7 ${i.defenses} defense${i.defenses===1?"":"s"}`:""}</div></li>`).join("")}</ol></details>`:""}
    </div>`:"";_e("rankCard").innerHTML=`
    <h2>GFC ${se(s.weightClass)} rankings</h2>
    ${s.gfc?"":`<p class="muted" style="font-size:13px">You're not in the GFC yet. These are the fighters you're chasing.</p>`}
    ${t}
    <ul class="ranks scroll">
      ${s.rankings.map(i=>`
        <li class="${i.player?"me":""} ${i.rank===0||i.interim?"champ":""} ${i.rival?"rivalrow":""}">
          <span class="rk">${i.rank===0?"C":i.interim?"IC":i.rank}</span>
          <span>${se(i.name)} <span class="muted">${i.record}</span></span>
          <span class="muted">${i.overall}</span>
        </li>`).join("")}
    </ul>`}function uy(){let s=be.history;_e("historyCard").innerHTML=`
    <h2>Fight record</h2>
    ${s.length?`<div class="scroll"><table class="hist">${s.map(e=>`
      <tr>
        <td><span class="res ${e.result}">${e.result}</span></td>
        <td>${se(e.opponent)}<div class="muted" style="font-size:12px">${se(e.event)} \xB7 ${se(e.date)}</div></td>
        <td style="text-align:right">${se(e.method)}<div class="muted" style="font-size:12px">R${e.round} ${se(e.time)}</div></td>
      </tr>`).join("")}</table></div>`:'<p class="muted">No pro fights yet.</p>'}`}function dy(){_e("newsCard").innerHTML=`
    <h2>News</h2>
    <ul class="news scroll">${be.news.map(s=>`<li>${se(s)}</li>`).join("")}</ul>`}function Rf(s){return`<span class="stars">${"\u2605".repeat(s)}<span class="off">${"\u2605".repeat(5-s)}</span></span>`}function py(){let s=be,e=s.rival,t=_e("rivalCard");if(!e){t.innerHTML=`
      <h2>Rival</h2>
      <p class="muted">No active rivalry. Someone will step up soon \u2014 or beat you and make it personal.</p>
      ${s.rivalries.length?`<div class="label">Past rivalries</div><ul class="news">${s.rivalries.map(n=>`<li>${se(n)}</li>`).join("")}</ul>`:""}`;return}let i=e.heat>=75?"Boiling":e.heat>=40?"Heated":e.heat>=20?"Simmering":"Cold";t.innerHTML=`
    <h2>\u2694 Rival</h2>
    <div class="fighter-top">
      <div>
        <div class="fighter-name" style="font-size:17px">${se(e.displayName)}</div>
        <div class="fighter-meta">${e.record} \xB7 ${se(e.style)} \xB7 ${se(e.country)} \xB7 Age ${e.age}${e.rank===0?" \xB7 Champion":e.rank>0?" \xB7 #"+e.rank:""}</div>
      </div>
      <div class="ovr"><b>${e.overall}</b><span>OVR</span></div>
    </div>
    <div class="h2h"><b>${e.h2hWins}-${e.h2hLosses}</b><span class="muted">head to head (first to lead by 2 settles it)</span></div>
    <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>Heat</span><b>${i} \xB7 ${e.heat}</b></div>
    <div class="heat"><i style="width:${e.heat}%"></i></div>
    <p class="muted" style="font-size:12px">At 60+ heat a grudge match (1.5\xD7 purse) shows up in your offers.</p>
    <div class="btn-row">
      <button class="btn small" data-talk="rival" ${s.canTalk&&!s.retired?"":"disabled"}>\u{1F3A4} Call them out${s.canTalk?"":" (done this week)"}</button>
    </div>`}function fy(){let s=be,e=Object.values(s.team),t=e.filter(i=>i.name).length;_e("teamCard").innerHTML=`
    <h2>Team \xB7 ${t}/${e.length}</h2>
    ${e.map(i=>`
      <div class="staff-row">
        <div>
          <div class="role">${se(i.title)}</div>
          ${i.name?`<b>${se(i.name)}</b> ${Rf(i.stars)}<div class="perk">${se(i.perk)} \xB7 ${Je(i.salary)}/wk</div>`:'<span class="muted">Vacant</span>'}
        </div>
        ${i.name&&!s.retired?`<button class="btn small ghost" data-fire="${i.role}">Release</button>`:""}
      </div>`).join("")}
    <div class="btn-row"><button class="btn primary small" data-market ${s.retired?"disabled":""}>Hire staff (${s.market.length} available)</button></div>`}function fn(s,e={}){Ke={kind:s,...e},_r()}function Ou(){Ke=null,_r()}function _r(){let s=_e("modal");if(!Ke){s.classList.add("hidden");return}s.classList.remove("hidden");let e=_e("modalBody"),t=be;if(Ke.kind==="saves"){let i=t.saves.length>=t.maxSaves;e.innerHTML=`
      <h1>\u{1F4BE} Saved fighters</h1>
      <p class="muted">Up to ${t.maxSaves} fighters. Every action saves automatically, so you can switch any time.
        ${t.storage==="account"?"Saves are kept with your claude.ai account, so they're on every device you sign in on.":"Saves are kept in this browser on this device."}</p>
      ${t.saves.length?t.saves.map(n=>`
        <div class="hof-entry ${n.active?"active":""}">
          <div class="top">
            <div><b>${n.missing?"Missing save":se(n.name)}</b>
              ${n.missing?"":`<div class="muted" style="font-size:12px">${se(n.weightClass)} \xB7 ${se(n.style)} \xB7 ${se(n.record)} \xB7 ${n.overall} OVR \xB7 age ${n.age}</div>`}</div>
            <span>${n.active?'<span class="badge red">PLAYING</span>':""}${n.retired?' <span class="badge gold">RETIRED</span>':""}</span>
          </div>
          <div class="btn-row">
            ${n.active||n.missing?"":`<button class="btn small primary" data-slot="${n.slot}">Play</button>`}
            ${n.missing?"":`<button class="btn small" data-export="${n.slot}">Export</button>`}
            <button class="btn small ghost" data-delslot="${n.slot}" data-name="${se(n.name||"this save")}">Delete</button>
          </div>
        </div>`).join(""):'<p class="muted">No saved fighters yet.</p>'}
      <div class="btn-row">
        <button class="btn primary" data-newsave ${i?"disabled":""}>+ New fighter${i?" (slots full)":""}</button>
        <button class="btn" data-importopen ${i?"disabled":""}>\u{1F4C2} Load a career</button>
      </div>`}else if(Ke.kind==="import")e.innerHTML=`
      <h1>\u{1F4C2} Load a career</h1>
      <p class="muted">Bring in a fighter exported from Cage Career 3D, from this device or any other. It goes into a free save slot and starts playing.</p>
      <div class="btn-row"><label class="btn primary">Choose save file<input type="file" id="importFile" accept=".json,application/json,text/plain" hidden></label></div>
      <p class="muted" style="margin-top:14px">\u2026or paste a save code:</p>
      <textarea id="importCode" rows="5" spellcheck="false" placeholder="CC3D1.\u2026" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px"></textarea>
      <div class="btn-row"><button class="btn primary" data-importcode>Load code</button><button class="btn ghost" data-saves>\u2190 Back</button></div>`,_e("importFile").addEventListener("change",async i=>{let n=i.target.files&&i.target.files[0];n&&Du(await n.text())});else if(Ke.kind==="export")e.innerHTML=`
      <h1>\u2B06\uFE0F Export ${se(Ke.name)}</h1>
      <p class="muted">Use this to move the fighter to another device or browser, or to share them. Open \u{1F4BE} Saves \u2192 \u{1F4C2} Load a career there.</p>
      <div class="btn-row"><button class="btn primary" data-savefile>Save as file</button><button class="btn" data-copycode ${Ke.code?"":"disabled"}>Copy save code</button></div>
      <textarea id="exportCode" rows="5" readonly spellcheck="false" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px;margin-top:10px">${se(Ke.code||"Preparing code\u2026")}</textarea>
      <div class="btn-row"><button class="btn ghost" data-saves>\u2190 Back</button></div>`;else if(Ke.kind==="market")e.innerHTML=`
      <h1>Staff market</h1>
      <p class="muted">Cash ${Je(t.money)} \xB7 Fame ${t.fame} \xB7 New candidates in ${t.marketRefresh} week(s). Signing fee is 4 weeks' salary.</p>
      ${t.market.length?t.market.map(i=>{let n=t.fame>=i.fameRequired,r=t.money>=i.fee;return`
        <div class="candidate">
          <div class="top">
            <div><div class="role muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${se(i.title)}</div><b>${se(i.name)}</b> ${Rf(i.stars)}</div>
            <button class="btn small ${n&&r?"primary":""}" data-hire="${i.index}" ${n&&r?"":"disabled"}>Sign \xB7 ${Je(i.fee)}</button>
          </div>
          <div class="muted" style="font-size:13px;margin-top:4px">${se(i.perk)}</div>
          <div class="muted" style="font-size:12px;margin-top:4px">${Je(i.salary)}/week
            ${i.fameRequired?` \xB7 <span style="color:${n?"var(--green)":"var(--red)"}">needs ${i.fameRequired} fame</span>`:""}
            ${i.current?` \xB7 replaces ${se(i.current)}`:""}</div>
        </div>`}).join(""):`<p class="muted">Nobody's available right now. Check back in a few weeks.</p>`}`;else if(Ke.kind==="talk"){let i=Ke.target==="rival"?t.rival:t.scheduled&&t.scheduled.opponent;if(!i)return Ou();e.innerHTML=`
      <h1>\u{1F3A4} Press conference</h1>
      <p class="muted">The cameras are on. What do you say about <b style="color:var(--text)">${se(i.displayName)}</b>?</p>
      <div class="tones">
        <button class="btn" data-tone="respect">Respectful<span class="sub">+1 fame, cools the rivalry</span></button>
        <button class="btn" data-tone="trash">Trash talk<span class="sub">Fame & hype, opponent gets motivated</span></button>
        <button class="btn primary" data-tone="personal">Get personal<span class="sub">Big hype, big risk</span></button>
      </div>
      <p class="muted" style="font-size:12px;margin-top:12px">Hyping a booked fight raises the purse, but a fired-up opponent fights harder. Win and you backed it up; lose and you'll eat your words.</p>`}else if(Ke.kind==="talkResult"){let i=t.lastTalk;e.innerHTML=`
      <h1>\u{1F3A4} Headlines</h1>
      <div class="quote"><span class="who">${se(t.fighter.displayName)}</span>"${se(i.you)}"</div>
      <div class="quote them"><span class="who">${se(i.target)}</span>"${se(i.them)}"</div>
      <ul class="news">${i.effects.map(n=>`<li>${se(n)}</li>`).join("")}</ul>
      <button class="btn primary big" data-closemodal style="margin-top:12px">Done</button>`}else if(Ke.kind==="division"){let i=t.weightClassIndex,n=[i-1,i+1].filter(r=>r>=0&&r<t.weightClasses.length);e.innerHTML=`
      <h1>Change division</h1>
      <p class="muted">Champions keep their belt when they change division, so you can hold several at once, but each belt must be defended within a year and a half or it's stripped. You fight at <b style="color:var(--text)">${se(t.weightClass)}</b>. Moving up adds power and chin but costs speed; cutting down adds speed, costs power, and the weight cut drains cardio. You start over in the new division's rankings${t.rank===0?" \u2014 but as a champion, you get an immediate superfight for the other belt":t.rank>0&&t.rank<=5?" \u2014 your reputation lands you at #10":""}.</p>
      ${t.divisionCooldown?`<p class="badge red" style="display:inline-block">Your body needs ${t.divisionCooldown} more weeks before another move.</p>`:""}
      <div class="btn-row">${n.map(r=>`<button class="btn ${r>i,""}" data-movediv="${r}" ${t.divisionCooldown?"disabled":""}>${r>i?"\u25B2 Move up to":"\u25BC Cut down to"} ${se(t.weightClasses[r])}</button>`).join("")}</div>`}else if(Ke.kind==="place")yy(e);else if(Ke.kind==="phone")xy(e);else if(Ke.kind==="hof"){let i=t.hallOfFame||[];e.innerHTML=`
      <h1>\u{1F3DB} Hall of Fame</h1>
      <p class="muted">Every career finished by every player. A legacy score of 200+ (Hall of Famer or All-Time Great) earns induction.</p>
      ${i.length?i.map((n,r)=>`
        <div class="hof-entry ${n.inducted?"inducted":""}">
          <div class="top">
            <div><b>${r+1}. ${se(n.name)}</b>${n.mine?' <span class="badge red">YOU</span>':""}<div class="muted" style="font-size:12px">${se(n.style)} \xB7 ${se(n.country)} \xB7 ${n.divisions.map(se).join(" / ")}</div></div>
            <span class="badge ${n.inducted?"gold":""}">${n.inducted?"INDUCTED \xB7 ":""}${se(n.legacy)}</span>
          </div>
          <div class="kv" style="margin-top:8px;font-size:13px">
            <span>Record</span><b>${n.record} (${n.koWins} KO, ${n.subWins} SUB)</b>
            <span>Titles \xB7 defenses</span><b>${n.titlesWon} \xB7 ${n.titleDefenses}</b>
            ${n.divisionsWon.length?`<span>Belts</span><b>${n.divisionsWon.map(se).join(", ")}${n.divisionsWon.length>=2?" \u{1F451}":""}</b>`:""}
            <span>Peak overall</span><b>${n.peakOverall}</b>
            <span>Career</span><b>${n.years} yrs \xB7 retired at ${n.retiredAge}</b>
            <span>Earnings</span><b>${Je(n.earnings)}</b>
            <span>Legacy score</span><b>${n.legacyScore}</b>
          </div>
          ${n.rivalries.length?`<div class="muted" style="font-size:12px;margin-top:6px">Rivalries: ${n.rivalries.map(se).join(" \xB7 ")}</div>`:""}
        </div>`).join(""):'<p class="muted">No retired careers yet. Be the first legend.</p>'}`}}function Uu(){return!_e("worldScreen").classList.contains("hidden")}function my(){!be||!be.exists||(_e("worldScreen").classList.remove("hidden"),We&&We.world.goHome(),Ii())}function gy(){_e("worldScreen").classList.add("hidden"),We&&We.world.isDriving()&&We.world.toggleDrive(),Ii()}function Sl(s){return s>=1e6?(s/1e6).toFixed(s>=1e7?0:1)+"M":s>=1e3?(s/1e3).toFixed(s>=1e4?0:1)+"K":String(s)}function Af(s){return s>=80?"\u{1F601}":s>=60?"\u{1F642}":s>=40?"\u{1F610}":s>=20?"\u{1F615}":"\u{1F61E}"}function vy(){if(!Uu()||!be||!be.life)return;let s=be,e=s.life;_e("worldHud").innerHTML=`
    <div class="hud-stats">
      <span title="Cash">\u{1F4B5} <b style="color:${s.money<0?"var(--red)":"var(--green)"}">${Je(s.money)}</b></span>
      <span title="Happiness: training \xD7${e.moodMult}">${Af(e.happiness)} <b>${e.happiness}</b></span>
      <span title="Followers">\u{1F4F1} <b>${Sl(e.followers)}</b></span>
      <span title="Energy">\u26A1 <b>${s.energy}</b></span>
      <span class="muted">Y${s.year} W${s.week}</span>
      ${s.injuryWeeks?`<span class="badge red">Injured ${s.injuryWeeks}w</span>`:""}
    </div>
    <div class="hud-btns">
      <button class="btn small" data-phone>\u{1F4F1} Phone</button>
      <button class="btn small primary" data-closeworld>\u{1F94A} Career</button>
    </div>`,Bu()}function Bu(){if(!Uu()||!be)return;let s=We?We.world.near:null,e=be.life,t=e.driving&&e.catalog.cars.find(n=>n.id===e.driving),i=We&&We.world.isDriving();_e("worldBottom").innerHTML=`
    ${s?`<button class="btn gold big" data-enter="${s.id}">${s.icon} Enter ${se(s.name)} <span class="sub">E</span></button>`:""}
    ${t?`<button class="btn" data-drive>${i?"\u{1F6B6} Get out":"\u{1F697} Drive "+se(t.name)}</button>`:""}`}function Gi(s,e,t="",i=""){let n=be.life.done[s];return`<button class="btn ${i}" data-life="${s}" ${t} ${n?"disabled":""}>${e}${n?' <span class="sub">done this week</span>':""}</button>`}function yy(s){let e=be,t=e.life,i=t.catalog,n=Ke.place,r=t.partner,a=r?`<p>\u2764\uFE0F <b>${se(r.name)}</b> \xB7 ${se(r.job)} \xB7 ${r.stage==="married"?"married":r.stage==="engaged"?"engaged \u{1F48D}":"dating"}</p>
      ${xr(r.affection,r.affection>50?"var(--red)":"var(--orange)")}<p class="muted" style="font-size:12px">Affection ${Math.round(r.affection)}/100</p>`:"",o=()=>`
    ${Gi("meet","\u{1F44B} Meet someone new")}
    ${t.candidate?`<div class="offer contender"><b>${se(t.candidate.name)}</b>, ${t.candidate.age} \xB7 ${se(t.candidate.job)}
      <div class="btn-row"><button class="btn primary small" data-life="ask">\u2764\uFE0F Ask them out</button></div>
      ${r?`<p class="muted" style="font-size:12px">Careful \u2014 you're already with ${se(r.name)}.</p>`:""}</div>`:""}`,l=(h,c,u)=>`<h1>${h} ${c}</h1>${u?`<p class="muted">${u}</p>`:""}`;if(n==="home"){let h=i.houses[t.house];s.innerHTML=`
      ${l("\u{1F3E0}",se(h.name),`Upkeep ${Je(h.upkeep)}/week \xB7 Happiness ${Af(t.happiness)} ${t.happiness} (heading to ${t.target}) \xB7 training \xD7${t.moodMult}`)}
      ${a}
      ${t.kids.length?`<p>\u{1F476} ${t.kids.map(c=>`<b>${se(c.name)}</b> (${c.age})`).join(", ")}</p>`:""}
      ${t.pets.length?`<p>\u{1F43E} ${t.pets.map(c=>`<b>${se(c.name)}</b> the ${c.kind}`).join(", ")}</p>`:""}
      <div class="btn-row">
        ${Gi("family","\u{1F468}\u200D\u{1F469}\u200D\u{1F467} Family time")}
        <button class="btn" data-action="rest" ${e.fightNight?"disabled":""}>\u{1F634} Rest at home <span class="sub">ends the week</span></button>
        ${r&&r.stage==="married"?`<button class="btn" data-life="kids">${t.tryingForKids?"\u23F8 Stop trying for a baby":"\u{1F476} Try for a baby"}</button>`:""}
      </div>
      <div class="label">Lifestyle <span class="muted">(weekly spending \u2014 bigger means happier and more famous)</span></div>
      <div class="btn-row">${i.lifestyles.map((c,u)=>`<button class="btn small ${u===t.lifestyle?"gold":""}" data-life="lifestyle" data-level="${u}">${se(c.name)}<span class="sub">${Je(c.cost)}/wk</span></button>`).join("")}</div>
      <p class="muted" style="font-size:12px">Last week: bills ${Je(t.lastBills)} \xB7 sponsors paid ${Je(t.lastSponsor)}.</p>`}else if(n==="club")s.innerHTML=`
      ${l("\u{1FAA9}","Nightclub","Bottle service, flashing lights, and the city's most eligible singles. Partying lifts your mood \u2014 but cameras are everywhere.")}
      <div class="btn-row">${Gi("party","\u{1F37E} Party in the VIP section","","primary")}</div>
      ${o()}`;else if(n==="cafe")s.innerHTML=`
      ${l("\u2615","Caf\xE9 & Dining","Quiet tables, good coffee, and a candlelit restaurant upstairs.")}
      ${a}
      <div class="btn-row">
        ${r?Gi("date",`\u{1F377} Take ${se(r.name)} on a date <span class="sub">${Je(t.dateCost)}</span>`,"","primary"):""}
        ${r?Gi("gift","\u{1F381} Buy a gift"):""}
        ${r&&r.stage==="dating"?Gi("propose","\u{1F48D} Propose"):""}
        ${r&&r.stage==="engaged"?`<button class="btn gold" data-life="wedding">\u{1F492} Have the wedding <span class="sub">${Je(t.weddingCost)}</span></button>`:""}
      </div>
      ${!r||r.stage!=="married"?o():""}`;else if(n==="gym"){let h=e.injuryWeeks>0,c=!!e.fightNight;s.innerHTML=`
      ${l("\u{1F94A}","Iron Gym",`Energy ${e.energy}/100 \xB7 each session ends the week \xB7 happiness bonus \xD7${t.moodMult}`)}
      <div class="train-grid">${Object.keys(us).map(u=>`<button class="btn small" data-train="${u}" ${c||h||e.energy<e.trainCost?"disabled":""}>${us[u]}</button>`).join("")}</div>
      <div class="btn-row"><button class="btn" data-action="spar" ${c||h||e.energy<30?"disabled":""}>Spar</button></div>
      ${h?'<p class="badge red" style="display:inline-block">Injured \u2014 rest up at home first</p>':""}`}else if(n==="ink"){let h=(be.fighter.look||"").split(",").map(Number);s.innerHTML=`
      ${l("\u{1F58B}\uFE0F","Ink Studio","Pick a spot, pick a design. A new piece costs "+Je(1500+e.fame*40)+"; laser removal $2,500.")}
      ${An.map((c,u)=>`<div class="label">${se(c.name)}</div><div class="btn-row">${zt[c.key].map((d,p)=>`<button class="btn small ${(h[7+u]||0)===p?"gold":""}" data-life="tattoo" data-region="${c.key}" data-design="${p}">${se(d)}</button>`).join("")}</div>`).join("")}`}else if(n==="arena"){let h=e.scheduled;s.innerHTML=`
      ${l("\u{1F3C6}","GFC Arena",h?`Next fight: vs ${se(h.opponent.displayName)} in ${h.weeks} week(s)`:`${e.offers.length} fight offer(s) waiting`)}
      ${e.fightNight?'<button class="btn primary big" data-startfight>Walk out to the cage</button>':'<button class="btn primary" data-closeworld>See fight offers & schedule</button>'}`}else if(n==="cars")s.innerHTML=`
      ${l("\u{1F697}","Luxury Motors","Pick your ride. Cars lift your mood and your fame; sell them back for 60%.")}
      ${i.cars.map(h=>{let c=t.cars.includes(h.id);return`<div class="shop-row"><span class="swatch" style="background:${h.color}"></span>
          <div><b>${se(h.name)}</b><div class="muted" style="font-size:12px">${Je(h.price)} \xB7 +${h.joy} happiness${h.fame?` \xB7 +${h.fame} fame`:""}</div></div>
          ${c?`<span class="btn-row"><button class="btn small ${t.driving===h.id?"gold":""}" data-life="drive" data-id="${h.id}">${t.driving===h.id?"Driving":"Drive"}</button><button class="btn small ghost" data-life="sell" data-kind="car" data-id="${h.id}">Sell</button></span>`:`<button class="btn small primary" data-life="buy" data-kind="car" data-id="${h.id}" ${e.money<h.price?"disabled":""}>Buy</button>`}</div>`}).join("")}`;else if(n==="realty"){let h=Math.round(i.houses[t.house].price*.85);s.innerHTML=`
      ${l("\u{1F3E1}","Prime Realty",`Your current home trades in for ${Je(h)}.`)}
      ${i.houses.map((c,u)=>`<div class="shop-row"><span class="swatch">${["\u{1F3E2}","\u{1F3E0}","\u{1F3E1}","\u{1F3D6}\uFE0F","\u{1F3F0}"][u]}</span>
        <div><b>${se(c.name)}</b><div class="muted" style="font-size:12px">${c.price?Je(c.price):"Rent"} \xB7 upkeep ${Je(c.upkeep)}/wk \xB7 +${c.joy} happiness</div></div>
        ${u===t.house?'<span class="badge gold">Home</span>':`<button class="btn small primary" data-life="buy" data-kind="house" data-id="${c.id}" ${e.money+h<c.price?"disabled":""}>Move in</button>`}</div>`).join("")}`}else n==="pets"&&(s.innerHTML=`
      ${l("\u{1F43E}","Paws Pet Shop","A loyal companion follows you everywhere in town.")}
      ${i.pets.map(h=>`<div class="shop-row"><span class="swatch">${{dog:"\u{1F415}",cat:"\u{1F408}",parrot:"\u{1F99C}",tiger:"\u{1F405}"}[h.id]}</span>
        <div><b>${se(h.name)}</b><div class="muted" style="font-size:12px">${Je(h.price)} \xB7 ${Je(h.upkeep)}/wk \xB7 +${h.joy} happiness</div></div>
        <button class="btn small primary" data-life="buy" data-kind="pet" data-id="${h.id}" ${e.money<h.price?"disabled":""}>Adopt</button></div>`).join("")}`)}function xy(s){let e=be.life;s.innerHTML=`
    <div class="phone">
      <div class="phone-head"><b>@${se(be.fighter.name.toLowerCase().replace(/[^a-z0-9]+/g,""))}</b>
        <span>${Sl(e.followers)} followers \xB7 sponsors ${Je(e.sponsorRate)}/wk</span></div>
      <div class="label">Post <span class="muted">(once a week)</span></div>
      <div class="btn-row">
        ${Gi("post","\u{1F4AA} Training clip",'data-kind="training"',"small")}
        ${Gi("post","\u{1F3CE}\uFE0F Flex",'data-kind="flex"',"small")}
        ${Gi("post","\u2764\uFE0F Family pic",'data-kind="family"',"small")}
        ${Gi("post","\u{1F3A4} Call someone out",'data-kind="callout"',"small")}
      </div>
      <div class="feed">${e.feed.length?e.feed.map(t=>`
        <div class="post">
          <div class="muted" style="font-size:12px">${se(t.date)}</div>
          <div>${se(t.text)}</div>
          <div class="muted" style="font-size:12px">\u2764\uFE0F ${Sl(t.likes)} \xB7 +${Sl(t.gained)} followers</div>
          ${t.comments.map(i=>`<div class="comment"><b>@${se(i.user)}</b> ${se(i.text)}</div>`).join("")}
        </div>`).join(""):'<p class="muted">No posts yet. Your fans are waiting.</p>'}</div>
    </div>`}function _y(s){return s.logs.flat()}function by(){let s=be.fight,e=_e("fightScreen");if(!s){e.classList.add("hidden"),Ml=0,Cu=null;return}let t=e.classList.contains("hidden");e.classList.remove("hidden");let i=_y(s);if(t){wy(s),s.round===0&&Fi(J0(s)),Iu(null),_e("fightLog").innerHTML=s.round===0?My(s):"",i.forEach(n=>_e("fightLog").appendChild(Cf(n,!1))),Ml=i.length,Cu=s,Lf(s),Cl(s),Al();return}Sy(i.slice(Ml),s)}function My(s){return`<div class="ev info n">Tale of the tape</div>
    <div style="max-width:420px;margin:0 auto 8px">
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <b style="text-align:center;color:#ff6b6e">${s.player.overall} OVR</b><span class="muted">vs</span><b style="text-align:center;color:#75a8ff">${s.opponent.overall} OVR</b>
      </div>
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <span>${se(s.player.style)}</span><span class="muted">style</span><span>${se(s.opponent.style)}</span>
      </div>
    </div>
    <div class="ev round">${s.belt?`This one is for the ${se(s.belt.label)}. Five rounds.`:s.title?"This one is for the GFC championship. Five rounds.":`${s.rounds} rounds.`} Pick your game plan.</div>`}function Cf(s,e){let t=document.createElement("div");return t.className=`ev ${s.type} ${s.side}`,e||(t.style.animation="none"),t.innerHTML=(s.type==="round"||s.type==="info"&&s.side==="n"?"":`<span class="t">${s.t}</span>`)+se(s.text),t}function Al(){let s=_e("fightLog");s.scrollTop=s.scrollHeight}function wy(s){We&&(We.show(_e("arenaStage"),"arena"),We.arena.load(s,{playerLook:be.fighter.look,weightClass:be.weightClassIndex}))}var wf;function Iu(s){let e=_e("fightCaption");if(clearTimeout(wf),!s){e.className="caption";return}e.textContent=s.text,e.className=`caption show ${s.side} ${s.type}`,wf=setTimeout(()=>e.classList.remove("show"),s.type==="finish"?8e3:3200)}async function Sy(s,e){cs=!0,Ma=!1,Cl(e),El();let t=!1;for(let i of s)if(_e("fightLog").appendChild(Cf(i,!Ma)),Ml++,Al(),!Ma){Iu(i),i.type==="finish"&&(t=!0);let n=i.type==="kd"||i.type==="finish"?1100:i.type==="big"||i.type==="subatt"?750:420;We&&(n=We.arena.play(i,e)),Ty(i),await new Promise(r=>setTimeout(r,n/gn))}if(Ma&&We){We.arena.restore(e);let i=s[s.length-1];if(i&&Iu(i),e.finished&&!t){let n=(be.lastResult||{}).result;as(null),hl(n)}}cs=!1,El(),Cu=e,Lf(e),Cl(e),Al()}function Ty(s){s.hp&&["p","o"].forEach((e,t)=>{let i=document.querySelector(`#fightHead .corner.${e}`);if(!i)return;let[n,r]=i.querySelectorAll(".bar > i");n&&(n.style.width=s.hp[t]+"%",n.style.background=Tf(s.hp[t])),r&&(r.style.width=s.st[t]+"%");let a=i.querySelector(".sig");a&&s.sg&&(a.textContent=s.sg[t])})}function Lf(s){let e=(t,i)=>`
    <div class="corner ${i}">
      <div class="cn">${se(t.name)}</div>
      <div class="cm">${t.record} \xB7 Sig <span class="sig">${t.sig}</span> \xB7 TD ${t.td}${t.kd?" \xB7 KD "+t.kd:""}</div>
      <div class="bl">HEALTH</div>${xr(t.health,Tf(t.health),"lg")}
      <div class="bl">STAMINA</div>${xr(t.stamina,"var(--gold)")}
    </div>`;_e("fightHead").innerHTML=`
    ${e(s.player,"p")}
    <div class="round-box">
      <div class="rl">ROUND</div>
      <div class="rn">${Math.max(1,s.round)}/${s.rounds}</div>
      ${s.title?'<div class="belt">TITLE</div>':""}
    </div>
    ${e(s.opponent,"o")}`}function Cl(s){let e=_e("fightControls");if(cs){e.innerHTML='<button class="btn big" data-skip>Skip \u25B6\u25B6</button>';return}if(!s.finished){e.innerHTML=`
      <div class="prompt">${s.round===0?"Choose your game plan for round 1":`Corner advice between rounds \u2014 game plan for round ${s.round+1}?`}
        ${s.scout?`<br><span class="scout">\u{1F9E0} Coach: "They're going to ${se(Xv[s.scout])} this round."</span>`:""}
        ${s.oppFiredUp&&s.round===0?'<br><span style="color:#ff6b6e">Your opponent is fired up after the trash talk.</span>':""}</div>
      ${s.round===0?`<div class="touch-row"><span>Before the bell:</span>
        <button class="btn small ${Tl?"gold":""}" data-touch="1">\u{1F91C}\u{1F91B} Touch gloves</button>
        <button class="btn small ${Tl?"":"primary"}" data-touch="0">\u{1F645} Refuse</button></div>`:""}
      <div class="plans">
        ${Sf.map(n=>`<button class="btn" data-plan="${n.id}">${n.name}<span class="sub">${n.desc}</span></button>`).join("")}
      </div>`;return}let t=be.lastResult||{},i={W:"VICTORY",L:"DEFEAT",D:"DRAW"}[t.result]||"";e.innerHTML=`
    <div class="result-banner">
      <div class="rw ${t.result}">${i}</div>
      <div class="rd"><b>${se(s.method)}</b> \xB7 R${s.endRound} ${se(s.endTime)}${s.cards?" \xB7 "+s.cards.join(", "):""}</div>
      <div class="rd">Paid <b>${Je(t.pay||0)}</b>${t.perfBonus?" (incl. $50,000 bonus)":""} \xB7 Fame ${t.fameDelta>=0?"+":""}${t.fameDelta} \xB7 Record <b>${se(t.record)}</b></div>
      ${t.careerNote?`<div class="rd" style="margin-top:4px;color:var(--gold)"><b style="color:inherit">${se(t.careerNote)}</b></div>`:""}
      ${t.injuryNote?`<div class="rd" style="color:var(--red)">${se(t.injuryNote)}</div>`:""}
    </div>
    <button class="btn primary big" data-closefight>Continue</button>`}document.addEventListener("click",async s=>{let e=s.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if(t.train)return ki("action",{type:"train",stat:t.train});if(t.action)return ki("action",{type:t.action});if(t.accept!==void 0)return ki("accept",{index:t.accept});if(t.upgrade!==void 0)return ki("upgrade");if(t.startfight!==void 0)return ki("fight/start");if(t.plan){if(cs)return;await mn("fight/round",{plan:t.plan,touch:Tl})&&Ii();return}if(t.skip!==void 0){Ma=!0;return}if(t.sound!==void 0){B0(),Pu(),El();return}if(t.speed!==void 0){gn=gn===1?2:gn===2?.5:1;try{localStorage.setItem("cc3d_speed",String(gn))}catch{}We&&We.arena.setSpeed(gn),Pu();return}if(t.togglelog!==void 0){_e("fightPanel").classList.toggle("log-open"),Al();return}if(t.look){let[i,n]=t.look.split(":");vr[i]=Number(n),ku(),Rl();return}if(t.randomlook!==void 0){vr=Xc(),ku(),Rl();return}if(t.closefight!==void 0)return ki("fight/close");if(t.hof!==void 0)return fn("hof");if(t.saves!==void 0)return fn("saves");if(t.newsave!==void 0){await mn("save/blank")&&(Ke=null,Ii());return}if(t.slot!==void 0){await mn("save/switch",{slot:t.slot})&&(Ke=null,Nu(),Ii());return}if(t.importopen!==void 0)return fn("import");if(t.importcode!==void 0){let i=_e("importCode").value;return i.trim()?Du(i):yi("Paste a save code first.",!0)}if(t.export!==void 0){let i;try{i=yr.exportSave(Number(t.export))}catch{return yi("Couldn't read that save.",!0)}let n=be.saves[Number(t.export)];Ke={kind:"export",text:i,name:n?n.name:"fighter",code:null},_r();let r=Ke;try{r.code=await Jv(i)}catch{r.code=null}Ke===r&&_r();return}if(t.savefile!==void 0){let i=String(Ke.name||"fighter").replace(/[^\w\- ]+/g,"").trim()||"fighter";return Zv(i+" - Cage Career 3D.json",Ke.text)}if(t.copycode!==void 0)return Qv(Ke.code);if(t.delslot!==void 0){await wl(`Delete ${t.name}? This can't be undone.`,"Delete")&&await mn("save/delete",{slot:t.delslot})&&(Nu(),Ii());return}if(t.closemodal!==void 0)return Ou();if(t.touch!==void 0)return Tl=t.touch==="1",Cl(be.fight);if(t.world!==void 0)return my();if(t.closeworld!==void 0)return Ke=null,gy();if(t.enter)return fn("place",{place:t.enter});if(t.phone!==void 0)return fn("phone");if(t.drive!==void 0)return We&&We.world.toggleDrive(),Bu();if(t.life){let i={type:t.life};for(let n of["kind","id","level","region","design"])t[n]!==void 0&&(i[n]=t[n]);await mn("life",i)&&Ii();return}if(t.market!==void 0)return fn("market");if(t.hire!==void 0)return ki("staff/hire",{index:t.hire});if(t.fire!==void 0){await wl("Release this team member?","Release")&&ki("staff/fire",{role:t.fire});return}if(t.talk)return fn("talk",{target:t.talk});if(t.tone){await mn("talk",{target:Ke.target,tone:t.tone})&&(Ke={kind:"talkResult"},Ii());return}if(t.division!==void 0)return fn("division");if(t.movediv!==void 0){await mn("division",{weightClass:t.movediv})&&(Ke=null,Ii());return}if(t.retire!==void 0){await wl("Retire now? Your career will end and your legacy will be locked in.","Retire")&&ki("retire");return}});function Nu(){_e("fightScreen").classList.add("hidden")}_e("modal").addEventListener("click",s=>{s.target.id==="modal"&&Ou()});_e("createForm").addEventListener("change",Rl);_e("createForm").addEventListener("submit",s=>{s.preventDefault(),ki("new",Object.fromEntries(new FormData(s.target)))});(async()=>{xf(()=>yi("Couldn't save your latest progress. Check your connection.",!0));let s=await yf();yr=new bl(s),"onDowngrade"in s&&(s.onDowngrade=()=>yr.saveAll());try{await yr.load()}catch(e){console.error(e),yi("Couldn't load your saves. Try reloading the page.",!0)}_e("boot").classList.add("hidden"),ki("state"),Ey()})();async function Ey(){let s=null;try{s=new URLSearchParams(location.search).get("career")}catch{}if(!s||!/^[a-z0-9-]+$/.test(s))return;try{history.replaceState(null,"",location.pathname)}catch{}let e;try{let i=await fetch("saves/"+s+".json",{cache:"no-store"});if(!i.ok)throw new Error(i.status);e=await i.text()}catch{yi("Couldn't find that career.",!0);return}let t=s.split("-").map(i=>i[0].toUpperCase()+i.slice(1)).join(" ");await wl(`Load ${t} into a save slot and start playing?`,"Load")&&Du(e)}
