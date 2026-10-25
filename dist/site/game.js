var $l="160";var Yd=1,qh=2,$i=3,xn=0,Xt=1,qd=2;var Jh=2;var On=100;var Xl=204,Yl=205;var Jd=0,P0=1,k0=2,yn=0,I0=1,N0=2,U0=3,Kh=4,D0=5,O0=6;var Kd=300,Us=301,Ds=302,ql=303,Jl=304,Lo=306,Lr=1e3,Xi=1001,Kl=1002,Gt=1003,vu=1004;var hl=1005;var bi=1006,F0=1007;var Ja=1008;var Hn=1009;var Zh=1012,Zd=1013,mn=1014,gn=1015,Pr=1016,Qd=1017,ep=1018,zn=1020;var ki=1023;var Gn=1026,Os=1027;var tp=1029;var ip=1031,np=1033,cl=33776,ul=33777,dl=33778,pl=33779,yu=35840,_u=35841,xu=35842,bu=35843,sp=36196,Mu=37492,wu=37496,Su=37808,Tu=37809,Eu=37810,Ru=37811,Au=37812,Cu=37813,Lu=37814,Pu=37815,ku=37816,Iu=37817,Nu=37818,Uu=37819,Du=37820,Ou=37821,fl=36492,Fu=36494,Bu=36495;var Hu=36284,zu=36285,Gu=36286;var Ka=2300,Za=2301,ml=2302,Vu=2400,Wu=2401,ju=2402;var rp=3e3,Vn=3001;var Ii="",pt="srgb",Yi="srgb-linear",Qh="display-p3",Po="display-p3-linear",Qa="linear",at="srgb",eo="rec709",to="p3";var cs=7680;var Zl=35044;var $u="300 es",Ql=1035,Fs=2e3,io=2001,bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=1234567,ks=Math.PI/180,Bs=180/Math.PI;function Ui(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ft[255&s]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[255&e]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[63&t|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[255&i]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function eh(s,e){return(s%e+e)%e}function Sr(s,e,t){return(1-t)*s+t*e}function th(s){return(s&s-1)==0&&s!==0}function no(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var ap={DEG2RAD:ks,RAD2DEG:Bs,generateUUID:Ui,clamp:kt,euclideanModulo:eh,mapLinear:function(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:Sr,damp:function(s,e,t,i){return Sr(s,e,1-Math.exp(-t*i))},pingpong:function(s,e=1){return e-Math.abs(eh(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Xu=s);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*ks},radToDeg:function(s){return s*Bs},isPowerOfTwo:th,ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:no,setQuaternionFromProperEuler:function(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*m,l*p,o*h);break;case"YXY":s.set(l*p,o*c,l*m,o*h);break;case"ZYZ":s.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:it,denormalize:Ni},le=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class s{constructor(e,t,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h)}set(e,t,i,n,r,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],m=i[8],g=n[0],f=n[3],y=n[6],v=n[1],_=n[4],x=n[7],R=n[2],w=n[5],E=n[8];return r[0]=a*g+o*v+l*R,r[3]=a*f+o*_+l*w,r[6]=a*y+o*x+l*E,r[1]=h*g+c*v+u*R,r[4]=h*f+c*_+u*w,r[7]=h*y+c*x+u*E,r[2]=d*g+p*v+m*R,r[5]=d*f+p*_+m*w,r[8]=d*y+p*x+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,p=h*r-a*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=u*g,e[1]=(n*h-c*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(c*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=p*g,e[7]=(i*l-h*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gl=new Be;function op(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function so(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B0(){let s=so("canvas");return s.style.display="block",s}var Yu={};function Tr(s){s in Yu||(Yu[s]=!0,console.warn(s))}var qu=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ju=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[Yi]:{transfer:Qa,primaries:eo,toReference:s=>s,fromReference:s=>s},[pt]:{transfer:at,primaries:eo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Po]:{transfer:Qa,primaries:to,toReference:s=>s.applyMatrix3(Ju),fromReference:s=>s.applyMatrix3(qu)},[Qh]:{transfer:at,primaries:to,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ju),fromReference:s=>s.applyMatrix3(qu).convertLinearToSRGB()}},H0=new Set([Yi,Po]),nt={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!H0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=ma[e].toReference;return(0,ma[t].fromReference)(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ma[s].primaries},getTransfer:function(s){return s===Ii?Qa:ma[s].transfer}};function Is(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function vl(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var us,ro=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=so("canvas")),us.width=e.width,us.height=e.height;let i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*Is(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Is(t[i]/255)):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z0=0,ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(yl(n[a].image)):r.push(yl(n[a]))}else r=yl(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function yl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ro.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,ai=class s extends bn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,h=s.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ui(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Vn?pt:Ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?Vn:rp}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?pt:Ii}};ai.DEFAULT_IMAGE=null,ai.DEFAULT_MAPPING=Kd,ai.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],m=l[9],g=l[2],f=l[6],y=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+f)<.1&&Math.abs(h+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,x=(p+1)/2,R=(y+1)/2,w=(c+d)/4,E=(u+g)/4,k=(m+f)/4;return _>x&&_>R?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=w/i,r=E/i):x>R?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=w/n,r=k/n):R<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(R),i=E/r,n=k/r),this.set(i,n,r,t),this}let v=Math.sqrt((f-m)*(f-m)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(u-g)/v,this.z=(d-c)/v,this.w=Math.acos((h+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends bn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vn?pt:Ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ai(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qi=class extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},oo=class extends ai{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nh=class extends ai{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],m=r[a+2],g=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=g);if(u!==g||l!==d||h!==p||c!==m){let f=1-o,y=l*d+h*p+c*m+u*g,v=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let R=Math.sqrt(_),w=Math.atan2(R,y*v);f=Math.sin(f*w)/R,o=Math.sin(o*w)/R}let x=o*v;if(l=l*f+d*x,h=h*f+p*x,c=c*f+m*x,u=u*f+g*x,f===1-o){let R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+c*u+l*p-h*d,e[t+1]=l*m+c*d+h*u-o*p,e[t+2]=h*m+c*p+o*d-l*u,e[t+3]=c*m-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"YZX":this._x=d*c*u+h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u-d*p*m;break;case"XZY":this._x=d*c*u-h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new b,Ku=new oi,Si=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),va.subVectors(this.max,pr),ds.subVectors(e.a,pr),ps.subVectors(e.b,pr),fs.subVectors(e.c,pr),cn.subVectors(ps,ds),un.subVectors(fs,ps),kn.subVectors(ds,fs);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-kn.z,kn.y,cn.z,0,-cn.x,un.z,0,-un.x,kn.z,0,-kn.x,-cn.y,cn.x,0,-un.y,un.x,0,-kn.y,kn.x,0];return!!xl(t,ds,ps,fs,va)&&(t=[1,0,0,0,1,0,0,0,1],!!xl(t,ds,ps,fs,va)&&(ya.crossVectors(cn,un),t=[ya.x,ya.y,ya.z],xl(t,ds,ps,fs,va)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(yi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new b,new b,new b,new b,new b,new b,new b,new b],yi=new b,ga=new Si,ds=new b,ps=new b,fs=new b,cn=new b,un=new b,kn=new b,pr=new b,va=new b,ya=new b,In=new b;function xl(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);let o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=e.dot(In),h=t.dot(In),c=i.dot(In);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var V0=new Si,fr=new b,bl=new b,Ti=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(fr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(bl)),this.expandByPoint(fr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new b,Ml=new b,_a=new b,dn=new b,wl=new b,xa=new b,Sl=new b,Wn=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ml.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Ml);let r=.5*e.distanceTo(t),a=-this.direction.dot(_a),o=dn.dot(this.direction),l=-dn.dot(_a),h=dn.lengthSq(),c=Math.abs(1-a*a),u,d,p,m;if(c>0)if(u=a*l-o,d=a*o-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let g=1/c;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ml).addScaledVector(_a,d),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),n=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,n,r){wl.subVectors(t,e),xa.subVectors(i,e),Sl.crossVectors(wl,xa);let a,o=this.direction.dot(Sl);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}dn.subVectors(this.origin,e);let l=a*this.direction.dot(xa.crossVectors(dn,xa));if(l<0)return null;let h=a*this.direction.dot(wl.cross(dn));if(h<0||l+h>o)return null;let c=-a*dn.dot(Sl);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class s{constructor(e,t,i,n,r,a,o,l,h,c,u,d,p,m,g,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,g,f)}set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,g,f){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=h,y[6]=c,y[10]=u,y[14]=d,y[3]=p,y[7]=m,y[11]=g,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*c,p=a*u,m=o*c,g=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+m*h,t[5]=d-g*h,t[9]=-o*l,t[2]=g-d*h,t[6]=m+p*h,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,m=h*c,g=h*u;t[0]=d+g*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-m,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,m=h*c,g=h*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*c,t[9]=g-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,p=a*u,m=o*c,g=o*u;t[0]=l*c,t[4]=m*h-p,t[8]=d*h+g,t[1]=l*u,t[5]=g*h+d,t[9]=p*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*h,m=o*l,g=o*h;t[0]=l*c,t[4]=g-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+m,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*h,m=o*l,g=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+g,t[5]=a*c,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*c,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,j0)}lookAt(e,t,i){let n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),pn.crossVectors(i,Zt),pn.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),pn.crossVectors(i,Zt)),pn.normalize(),ba.crossVectors(Zt,pn),n[0]=pn.x,n[4]=ba.x,n[8]=Zt.x,n[1]=pn.y,n[5]=ba.y,n[9]=Zt.y,n[2]=pn.z,n[6]=ba.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],m=i[2],g=i[6],f=i[10],y=i[14],v=i[3],_=i[7],x=i[11],R=i[15],w=n[0],E=n[4],k=n[8],P=n[12],U=n[1],$=n[5],C=n[9],z=n[13],O=n[2],ne=n[6],ue=n[10],ee=n[14],Y=n[3],ie=n[7],B=n[11],K=n[15];return r[0]=a*w+o*U+l*O+h*Y,r[4]=a*E+o*$+l*ne+h*ie,r[8]=a*k+o*C+l*ue+h*B,r[12]=a*P+o*z+l*ee+h*K,r[1]=c*w+u*U+d*O+p*Y,r[5]=c*E+u*$+d*ne+p*ie,r[9]=c*k+u*C+d*ue+p*B,r[13]=c*P+u*z+d*ee+p*K,r[2]=m*w+g*U+f*O+y*Y,r[6]=m*E+g*$+f*ne+y*ie,r[10]=m*k+g*C+f*ue+y*B,r[14]=m*P+g*z+f*ee+y*K,r[3]=v*w+_*U+x*O+R*Y,r[7]=v*E+_*$+x*ne+R*ie,r[11]=v*k+_*C+x*ue+R*B,r[15]=v*P+_*z+x*ee+R*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-n*h*u-r*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+r*a*d-n*a*p+n*h*c-r*l*c)+e[11]*(+t*h*u-t*o*p-r*a*u+i*a*p+r*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],g=e[13],f=e[14],y=e[15],v=u*f*h-g*d*h+g*l*p-o*f*p-u*l*y+o*d*y,_=m*d*h-c*f*h-m*l*p+a*f*p+c*l*y-a*d*y,x=c*g*h-m*u*h+m*o*p-a*g*p-c*o*y+a*u*y,R=m*u*l-c*g*l-m*o*d+a*g*d+c*o*f-a*u*f,w=t*v+i*_+n*x+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=v*E,e[1]=(g*d*r-u*f*r-g*n*p+i*f*p+u*n*y-i*d*y)*E,e[2]=(o*f*r-g*l*r+g*n*h-i*f*h-o*n*y+i*l*y)*E,e[3]=(u*l*r-o*d*r-u*n*h+i*d*h+o*n*p-i*l*p)*E,e[4]=_*E,e[5]=(c*f*r-m*d*r+m*n*p-t*f*p-c*n*y+t*d*y)*E,e[6]=(m*l*r-a*f*r-m*n*h+t*f*h+a*n*y-t*l*y)*E,e[7]=(a*d*r-c*l*r+c*n*h-t*d*h-a*n*p+t*l*p)*E,e[8]=x*E,e[9]=(m*u*r-c*g*r-m*i*p+t*g*p+c*i*y-t*u*y)*E,e[10]=(a*g*r-m*o*r+m*i*h-t*g*h-a*i*y+t*o*y)*E,e[11]=(c*o*r-a*u*r-c*i*h+t*u*h+a*i*p-t*o*p)*E,e[12]=R*E,e[13]=(c*g*n-m*u*n+m*i*d-t*g*d-c*i*f+t*u*f)*E,e[14]=(m*o*n-a*g*n-m*i*l+t*g*l+a*i*f-t*o*f)*E,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*E,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,p=r*c,m=r*u,g=a*c,f=a*u,y=o*u,v=l*h,_=l*c,x=l*u,R=i.x,w=i.y,E=i.z;return n[0]=(1-(g+y))*R,n[1]=(p+x)*R,n[2]=(m-_)*R,n[3]=0,n[4]=(p-x)*w,n[5]=(1-(d+y))*w,n[6]=(f+v)*w,n[7]=0,n[8]=(m+_)*E,n[9]=(f-v)*E,n[10]=(1-(d+g))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=ms.set(n[0],n[1],n[2]).length(),a=ms.set(n[4],n[5],n[6]).length(),o=ms.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],_i.copy(this);let l=1/r,h=1/a,c=1/o;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=c,_i.elements[9]*=c,_i.elements[10]*=c,t.setFromRotationMatrix(_i),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,h=2*r/(t-e),c=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,m;if(o===Fs)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else{if(o!==io)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),m=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),u=1/(a-r),d=(t+e)*h,p=(i+n)*c,m,g;if(o===Fs)m=(a+r)*u,g=-2*u;else{if(o!==io)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=r*u,g=-1*u}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ms=new b,_i=new Ne,W0=new b(0,0,0),j0=new b(1,1,1),pn=new b,ba=new b,Zt=new b,Zu=new Ne,Qu=new oi,lo=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lo.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},$0=0,ed=new b,gs=new oi,Vi=new Ne,Ma=new b,mr=new b,X0=new b,Y0=new oi,td=new b(1,0,0),id=new b(0,1,0),nd=new b(0,0,1),q0={type:"added"},J0={type:"removed"},St=class s extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new b,t=new lo,i=new oi,n=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Be}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(mr,Ma,this.up):Vi.lookAt(Ma,mr,this.up),this.quaternion.setFromRotationMatrix(Vi),n&&(Vi.extractRotation(n.matrixWorld),gs.setFromRotationMatrix(Vi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(q0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];r.matrixWorldAutoUpdate!==!0&&e!==!0||r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};St.DEFAULT_UP=new b(0,1,0),St.DEFAULT_MATRIX_AUTO_UPDATE=!0,St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new b,Wi=new b,Tl=new b,ji=new b,vs=new b,ys=new b,sd=new b,El=new b,Rl=new b,Al=new b,wa=!1,vn=class s{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xi.subVectors(e,t),n.cross(xi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){xi.subVectors(n,t),Wi.subVectors(i,t),Tl.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(Wi),l=xi.dot(Tl),h=Wi.dot(Wi),c=Wi.dot(Tl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,m=(a*c-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ji)!==null&&ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,i,n,r,a,o,l){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),this.getInterpolation(e,t,i,n,r,a,o,l)}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static isFrontFacing(e,t,i,n){return xi.subVectors(i,t),Wi.subVectors(e,t),xi.cross(Wi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),.5*xi.cross(Wi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wa=!0),s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;vs.subVectors(n,i),ys.subVectors(r,i),El.subVectors(e,i);let l=vs.dot(El),h=ys.dot(El);if(l<=0&&h<=0)return t.copy(i);Rl.subVectors(e,n);let c=vs.dot(Rl),u=ys.dot(Rl);if(c>=0&&u<=c)return t.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(vs,a);Al.subVectors(e,r);let p=vs.dot(Al),m=ys.dot(Al);if(m>=0&&p<=m)return t.copy(r);let g=p*h-l*m;if(g<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(i).addScaledVector(ys,o);let f=c*m-p*u;if(f<=0&&u-c>=0&&p-m>=0)return sd.subVectors(r,n),o=(u-c)/(u-c+(p-m)),t.copy(n).addScaledVector(sd,o);let y=1/(f+g+d);return a=g*y,o=d*y,t.copy(i).addScaledVector(vs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Cl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=eh(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return nt.toWorkingColorSpace(this,n),this}setStyle(e,t=pt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return nt.fromWorkingColorSpace(Bt.copy(this),e),65536*Math.round(kt(255*Bt.r,0,255))+256*Math.round(kt(255*Bt.g,0,255))+Math.round(kt(255*Bt.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Bt.copy(this),t);let i=Bt.r,n=Bt.g,r=Bt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=pt){nt.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,n=Bt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Sa);let i=Sr(fn.h,Sa.h,t),n=Sr(fn.s,Sa.s,t),r=Sr(fn.l,Sa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ce;Ce.NAMES=lp;var K0=0,Ji=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=1,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=Yl,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xl&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qv=Z0();function Z0(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[l]=h|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var xt=new b,Ta=new le,Nt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}};var ho=class extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var co=class extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Q0=0,ri=new Ne,Ll=new St,_s=new b,Qt=new Si,gr=new Si,Pt=new b,lt=class s extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?co:ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Qt.min,gr.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,gr.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(gr.min),Qt.expandByPoint(gr.max))}Qt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Pt.fromBufferAttribute(o,h),l&&(_s.fromBufferAttribute(e,h),Pt.add(_s)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let U=0;U<o;U++)h[U]=new b,c[U]=new b;let u=new b,d=new b,p=new b,m=new le,g=new le,f=new le,y=new b,v=new b;function _(U,$,C){u.fromArray(n,3*U),d.fromArray(n,3*$),p.fromArray(n,3*C),m.fromArray(a,2*U),g.fromArray(a,2*$),f.fromArray(a,2*C),d.sub(u),p.sub(u),g.sub(m),f.sub(m);let z=1/(g.x*f.y-f.x*g.y);isFinite(z)&&(y.copy(d).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar(z),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-f.x).multiplyScalar(z),h[U].add(y),h[$].add(y),h[C].add(y),c[U].add(v),c[$].add(v),c[C].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let U=0,$=x.length;U<$;++U){let C=x[U],z=C.start;for(let O=z,ne=z+C.count;O<ne;O+=3)_(i[O+0],i[O+1],i[O+2])}let R=new b,w=new b,E=new b,k=new b;function P(U){E.fromArray(r,3*U),k.copy(E);let $=h[U];R.copy($),R.sub(E.multiplyScalar(E.dot($))).normalize(),w.crossVectors(k,$);let C=w.dot(c[U])<0?-1:1;l[4*U]=R.x,l[4*U+1]=R.y,l[4*U+2]=R.z,l[4*U+3]=C}for(let U=0,$=x.length;U<$;++U){let C=x[U],z=C.start;for(let O=z,ne=z+C.count;O<ne;O+=3)P(i[O+0]),P(i[O+1]),P(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new b,r=new b,a=new b,o=new b,l=new b,h=new b,c=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),g=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,f),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,f),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,m=0;for(let g=0,f=l.length;g<f;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*c;for(let y=0;y<c;y++)d[m++]=h[p++]}return new Nt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new Ne,Nn=new Wn,Ea=new Ti,ad=new b,xs=new b,bs=new b,Ms=new b,Pl=new b,Ra=new b,Aa=new le,Ca=new le,La=new le,od=new b,ld=new b,hd=new b,Pa=new b,ka=new b,Te=class extends St{constructor(e=new lt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(Pl.fromBufferAttribute(u,e),a?Ra.addScaledVector(Pl,c):Ra.addScaledVector(Pl.sub(t),c))}t.add(Ra)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),Ea.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Ea,ad)===null||Nn.origin.distanceToSquared(ad)>(e.far-e.near)**2))return;rd.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(rd),i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Nn)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){let f=d[m],y=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)n=Ia(this,y,e,i,h,c,u,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);m<g;m+=3)n=Ia(this,a,e,i,h,c,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){let f=d[m],y=a[f.materialIndex];for(let v=Math.max(f.start,p.start),_=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));v<_;v+=3)n=Ia(this,y,e,i,h,c,u,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);m<g;m+=3)n=Ia(this,a,e,i,h,c,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function Ia(s,e,t,i,n,r,a,o,l,h){s.getVertexPosition(o,xs),s.getVertexPosition(l,bs),s.getVertexPosition(h,Ms);let c=function(u,d,p,m,g,f,y,v){let _;if(_=d.side===Xt?m.intersectTriangle(y,f,g,!0,v):m.intersectTriangle(g,f,y,d.side===xn,v),_===null)return null;ka.copy(v),ka.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(ka);return x<p.near||x>p.far?null:{distance:x,point:ka.clone(),object:u}}(s,e,t,i,xs,bs,Ms,Pa);if(c){n&&(Aa.fromBufferAttribute(n,o),Ca.fromBufferAttribute(n,l),La.fromBufferAttribute(n,h),c.uv=vn.getInterpolation(Pa,xs,bs,Ms,Aa,Ca,La,new le)),r&&(Aa.fromBufferAttribute(r,o),Ca.fromBufferAttribute(r,l),La.fromBufferAttribute(r,h),c.uv1=vn.getInterpolation(Pa,xs,bs,Ms,Aa,Ca,La,new le),c.uv2=c.uv1),a&&(od.fromBufferAttribute(a,o),ld.fromBufferAttribute(a,l),hd.fromBufferAttribute(a,h),c.normal=vn.getInterpolation(Pa,xs,bs,Ms,od,ld,hd,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new b,materialIndex:0};vn.getNormal(xs,bs,Ms,u.normal),c.face=u}return c}var ht=class s extends lt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,p=0;function m(g,f,y,v,_,x,R,w,E,k,P){let U=x/E,$=R/k,C=x/2,z=R/2,O=w/2,ne=E+1,ue=k+1,ee=0,Y=0,ie=new b;for(let B=0;B<ue;B++){let K=B*$-z;for(let pe=0;pe<ne;pe++){let T=pe*U-C;ie[g]=T*v,ie[f]=K*_,ie[y]=O,h.push(ie.x,ie.y,ie.z),ie[g]=0,ie[f]=0,ie[y]=w>0?1:-1,c.push(ie.x,ie.y,ie.z),u.push(pe/E),u.push(1-B/k),ee+=1}}for(let B=0;B<k;B++)for(let K=0;K<E;K++){let pe=d+K+ne*B,T=d+K+ne*(B+1),S=d+(K+1)+ne*(B+1),D=d+(K+1)+ne*B;l.push(pe,T,D),l.push(T,S,D),Y+=6}o.addGroup(p,Y,P),p+=Y,d+=ee}m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ke(h,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function zt(s){let e={};for(let t=0;t<s.length;t++){let i=Hs(s[t]);for(let n in i)e[n]=i[n]}return e}function hp(s){return s.getRenderTarget()===null?s.outputColorSpace:nt.workingColorSpace}var ef={clone:Hs,merge:zt},Ki=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ir=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Fs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bt=class extends Ir{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Bs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ks*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Bs*Math.atan(Math.tan(.5*ks*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ks*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,sh=class extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new bt(ws,1,e,t);n.layers=this.layers,this.add(n);let r=new bt(ws,1,e,t);r.layers=this.layers,this.add(r);let a=new bt(ws,1,e,t);a.layers=this.layers,this.add(a);let o=new bt(ws,1,e,t);o.layers=this.layers,this.add(o);let l=new bt(ws,1,e,t);l.layers=this.layers,this.add(l);let h=new bt(ws,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===Fs)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==io)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},uo=class extends ai{constructor(e,t,i,n,r,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:Us,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rh=class extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?pt:Ii),this.texture=new uo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ht(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:0});r.uniforms.tEquirect.value=t;let a=new Te(n,r),o=t.minFilter;return t.minFilter===Ja&&(t.minFilter=bi),new sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},kl=new b,tf=new b,nf=new Be,Mi=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=kl.subVectors(i,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(kl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||nf.getNormalMatrix(e),n=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Un=new Ti,Na=new b,zs=class{constructor(e=new Mi,t=new Mi,i=new Mi,n=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],p=n[8],m=n[9],g=n[10],f=n[11],y=n[12],v=n[13],_=n[14],x=n[15];if(i[0].setComponents(l-r,d-h,f-p,x-y).normalize(),i[1].setComponents(l+r,d+h,f+p,x+y).normalize(),i[2].setComponents(l+a,d+c,f+m,x+v).normalize(),i[3].setComponents(l-a,d-c,f-m,x-v).normalize(),i[4].setComponents(l-o,d-u,f-g,x-_).normalize(),t===Fs)i[5].setComponents(l+o,d+u,f+g,x+_).normalize();else{if(t!==io)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Na.x=n.normal.x>0?e.max.x:e.min.x,Na.y=n.normal.y>0?e.max.y:e.min.y,Na.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cp(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sf(s,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=i.get(n);r&&(s.deleteBuffer(r.buffer),i.delete(n))},update:function(n,r){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=s.createBuffer(),p;if(s.bindBuffer(l,d),s.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=s.HALF_FLOAT}else p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);p=s.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}(n,r));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,h){let c=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(h,o),u.count===-1&&d.length===0&&s.bufferSubData(h,0,c),d.length!==0){for(let p=0,m=d.length;p<m;p++){let g=d[p];t?s.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count):s.bufferSubData(h,g.start*c.BYTES_PER_ELEMENT,c.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,n,r),a.version=n.version}}}}var li=class s extends lt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],m=[],g=[],f=[];for(let y=0;y<c;y++){let v=y*d-a;for(let _=0;_<h;_++){let x=_*u-r;m.push(x,-v,0),g.push(0,0,1),f.push(_/o),f.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let _=v+h*y,x=v+h*(y+1),R=v+1+h*(y+1),w=v+1+h*y;p.push(_,x,w),p.push(x,R,w)}this.setIndex(p),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ce={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Pi={basic:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:zt([ce.common,ce.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:zt([ce.lights,ce.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Pi.physical={uniforms:zt([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Ua={r:0,b:0,g:0};function rf(s,e,t,i,n,r,a){let o=new Ce(0),l,h,c=r===!0?0:1,u=null,d=0,p=null;function m(g,f){g.getRGB(Ua,hp(s)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),c=f,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,m(o,c)},render:function(g,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?m(o,c):v&&v.isColor&&(m(v,1),y=!0);let _=s.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Lo)?(h===void 0&&(h=new Te(new ht(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Hs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=nt.getTransfer(v.colorSpace)!==at,u===v&&d===v.version&&p===s.toneMapping||(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Te(new li(2,2),new Ki({name:"BackgroundMaterial",uniforms:Hs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function af(s,e,t,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),h=l,c=!1;function u(R){return i.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function d(R){return i.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R){let w=[],E=[],k=[];for(let P=0;P<n;P++)w[P]=0,E[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:E,attributeDivisors:k,object:R,attributes:{},index:null}}function m(){let R=h.newAttributes;for(let w=0,E=R.length;w<E;w++)R[w]=0}function g(R){f(R,0)}function f(R,w){let E=h.newAttributes,k=h.enabledAttributes,P=h.attributeDivisors;E[R]=1,k[R]===0&&(s.enableVertexAttribArray(R),k[R]=1),P[R]!==w&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,w),P[R]=w)}function y(){let R=h.newAttributes,w=h.enabledAttributes;for(let E=0,k=w.length;E<k;E++)w[E]!==R[E]&&(s.disableVertexAttribArray(E),w[E]=0)}function v(R,w,E,k,P,U,$){$===!0?s.vertexAttribIPointer(R,w,E,P,U):s.vertexAttribPointer(R,w,E,k,P,U)}function _(){x(),c=!0,h!==l&&(h=l,u(h.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(R,w,E,k,P){let U=!1;if(a){let $=function(C,z,O){let ne=O.wireframe===!0,ue=o[C.id];ue===void 0&&(ue={},o[C.id]=ue);let ee=ue[z.id];ee===void 0&&(ee={},ue[z.id]=ee);let Y=ee[ne];return Y===void 0&&(Y=p(i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),ee[ne]=Y),Y}(k,E,w);h!==$&&(h=$,u(h.object)),U=function(C,z,O,ne){let ue=h.attributes,ee=z.attributes,Y=0,ie=O.getAttributes();for(let B in ie)if(ie[B].location>=0){let K=ue[B],pe=ee[B];if(pe===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;Y++}return h.attributesNum!==Y||h.index!==ne}(R,k,E,P),U&&function(C,z,O,ne){let ue={},ee=z.attributes,Y=0,ie=O.getAttributes();for(let B in ie)if(ie[B].location>=0){let K=ee[B];K===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));let pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),ue[B]=pe,Y++}h.attributes=ue,h.attributesNum=Y,h.index=ne}(R,k,E,P)}else{let $=w.wireframe===!0;h.geometry===k.id&&h.program===E.id&&h.wireframe===$||(h.geometry=k.id,h.program=E.id,h.wireframe=$,U=!0)}P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(U||c)&&(c=!1,function($,C,z,O){if(i.isWebGL2===!1&&($.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let ne=O.attributes,ue=z.getAttributes(),ee=C.defaultAttributeValues;for(let Y in ue){let ie=ue[Y];if(ie.location>=0){let B=ne[Y];if(B===void 0&&(Y==="instanceMatrix"&&$.instanceMatrix&&(B=$.instanceMatrix),Y==="instanceColor"&&$.instanceColor&&(B=$.instanceColor)),B!==void 0){let K=B.normalized,pe=B.itemSize,T=t.get(B);if(T===void 0)continue;let S=T.buffer,D=T.type,q=T.bytesPerElement,L=i.isWebGL2===!0&&(D===s.INT||D===s.UNSIGNED_INT||B.gpuType===Zd);if(B.isInterleavedBufferAttribute){let j=B.data,I=j.stride,N=B.offset;if(j.isInstancedInterleavedBuffer){for(let F=0;F<ie.locationSize;F++)f(ie.location+F,j.meshPerAttribute);$.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let F=0;F<ie.locationSize;F++)g(ie.location+F);s.bindBuffer(s.ARRAY_BUFFER,S);for(let F=0;F<ie.locationSize;F++)v(ie.location+F,pe/ie.locationSize,D,K,I*q,(N+pe/ie.locationSize*F)*q,L)}else{if(B.isInstancedBufferAttribute){for(let j=0;j<ie.locationSize;j++)f(ie.location+j,B.meshPerAttribute);$.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let j=0;j<ie.locationSize;j++)g(ie.location+j);s.bindBuffer(s.ARRAY_BUFFER,S);for(let j=0;j<ie.locationSize;j++)v(ie.location+j,pe/ie.locationSize,D,K,pe*q,pe/ie.locationSize*j*q,L)}}else if(ee!==void 0){let K=ee[Y];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ie.location,K);break;case 3:s.vertexAttrib3fv(ie.location,K);break;case 4:s.vertexAttrib4fv(ie.location,K);break;default:s.vertexAttrib1fv(ie.location,K)}}}}y()}(R,w,E,k),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:_,resetDefaultState:x,dispose:function(){_();for(let R in o){let w=o[R];for(let E in w){let k=w[E];for(let P in k)d(k[P].object),delete k[P];delete w[E]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let w=o[R.id];for(let E in w){let k=w[E];for(let P in k)d(k[P].object),delete k[P];delete w[E]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let w in o){let E=o[w];if(E[R.id]===void 0)continue;let k=E[R.id];for(let P in k)d(k[P].object),delete k[P];delete E[R.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:y}}function of(s,e,t,i){let n=i.isWebGL2,r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=s,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,a,o,l),t.update(o,r,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{h.multiDrawArraysWEBGL(r,a,0,o,0,l);let c=0;for(let u=0;u<l;u++)c+=o[u];t.update(c,r,1)}}}function lf(s,e,t){let i;function n(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,_=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:v&&_,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}function hf(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Mi,o=new Be,l={value:null,needsUpdate:!1};function h(c,u,d,p){let m=c!==null?c.length:0,g=null;if(m!==0){if(g=l.value,p!==!0||g===null){let f=d+4*m,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,_=d;v!==m;++v,_+=4)a.copy(c[v]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let d=c.length!==0||u||i!==0||n;return n=u,i=c.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,d){let p=c.clippingPlanes,m=c.clipIntersection,g=c.clipShadows,f=s.get(c);if(!n||p===null||p.length===0||r&&!g)r?h(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let y=r?0:i,v=4*y,_=f.clippingState||null;l.value=_,_=h(p,u,v,d);for(let x=0;x!==v;++x)_[x]=t[x];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}}}function cf(s){let e=new WeakMap;function t(n,r){return r===ql?n.mapping=Us:r===Jl&&(n.mapping=Ds),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===ql||r===Jl){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new rh(a.height/2);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var po=class extends Ir{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cd=[.125,.215,.35,.446,.526,.582],vr=20,Il=new po,ud=new Ce,Nl=null,Ul=0,Dl=0,Dn=(1+Math.sqrt(5))/2,Ss=1/Dn,dd=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Dn,Ss),new b(0,Dn,-Ss),new b(Ss,0,Dn),new b(-Ss,0,Dn),new b(Dn,Ss,0),new b(-Dn,Ss,0)],fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Ul,Dl),e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Pr,format:ki,colorSpace:Yi,depthBuffer:!1},n=pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],h=[],c=a,u=a-4+1+cd.length;for(let d=0;d<u;d++){let p=Math.pow(2,c);l.push(p);let m=1/p;d>a-4?m=cd[d-a+4-1]:d===0&&(m=0),h.push(m);let g=1/(p-2),f=-g,y=1+g,v=[f,f,y,f,y,y,f,f,y,y,f,y],_=6,x=6,R=3,w=2,E=1,k=new Float32Array(R*x*_),P=new Float32Array(w*x*_),U=new Float32Array(E*x*_);for(let C=0;C<_;C++){let z=C%3*2/3-1,O=C>2?0:-1,ne=[z,O,0,z+2/3,O,0,z+2/3,O+1,0,z,O,0,z+2/3,O+1,0,z,O+1,0];k.set(ne,R*x*C),P.set(v,w*x*C);let ue=[C,C,C,C,C,C];U.set(ue,E*x*C)}let $=new lt;$.setAttribute("position",new Nt(k,R)),$.setAttribute("uv",new Nt(P,w)),$.setAttribute("faceIndex",new Nt(U,E)),o.push($),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(r)),this._blurMaterial=function(a,o,l){let h=new Float32Array(vr),c=new b(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:ec(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return n}_compileMaterial(e){let t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,i,n){let r=new bt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(ud),l.toneMapping=yn,l.autoClear=!1;let u=new Vt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),d=new Te(new ht,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(ud),p=!0);for(let g=0;g<6;g++){let f=g%3;f===0?(r.up.set(0,a[g],0),r.lookAt(o[g],0,0)):f===1?(r.up.set(0,0,a[g]),r.lookAt(0,o[g],0)):(r.up.set(0,a[g],0),r.lookAt(0,0,o[g]));let y=this._cubeSize;Da(n,f*y,g>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Us||e.mapping===Ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;Da(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Il)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=dd[(n-1)%dd.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Te(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,g=isFinite(r)?1+Math.floor(3*m):vr;g>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let f=[],y=0;for(let x=0;x<vr;++x){let R=x/m,w=Math.exp(-R*R/2);f.push(w),x===0?y+=w:x<g&&(y+=2*w)}for(let x=0;x<f.length;x++)f[x]=f[x]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;let _=this._sizeLods[n];Da(t,3*_*(n>v-4?n-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(c,Il)}};function pd(s,e,t){let i=new qi(s,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function fd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function md(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function uf(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===ql||r===Jl,o=r===Us||r===Ds;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new fo(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0,u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(l)){t===null&&(t=new fo(s));let h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function df(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function pf(s,e,t,i){let n={},r=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let u in h.attributes)e.remove(h.attributes[u]);for(let u in h.morphAttributes){let d=h.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}h.removeEventListener("dispose",a),delete n[h.id];let c=r.get(h);c&&(e.remove(c),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,u=l.attributes.position,d=0;if(c!==null){let g=c.array;d=c.version;for(let f=0,y=g.length;f<y;f+=3){let v=g[f+0],_=g[f+1],x=g[f+2];h.push(v,_,_,x,x,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let f=0,y=g.length/3-1;f<y;f+=3){let v=f+0,_=f+1,x=f+2;h.push(v,_,_,x,x,v)}}}let p=new(op(h)?co:ho)(h,1);p.version=d;let m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)e.update(h[u],s.ARRAY_BUFFER);let c=l.morphAttributes;for(let u in c){let d=c[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=r.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return r.get(l)}}}function ff(s,e,t,i){let n=i.isWebGL2,r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){s.drawElements(r,h,a,l*o),t.update(h,r,1)},this.renderInstances=function(l,h,c){if(c===0)return;let u,d;if(n)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,h,a,l*o,c),t.update(h,r,c)},this.renderMultiDraw=function(l,h,c){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<c;d++)this.render(l[d]/o,h[d]);else{u.multiDrawElementsWEBGL(r,h,0,a,l,0,c);let d=0;for(let p=0;p<c;p++)d+=h[p];t.update(d,r,1)}}}function mf(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function gf(s,e){return s[0]-e[0]}function vf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function yf(s,e,t){let i={},n=new Float32Array(8),r=new WeakMap,a=new st,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,m=r.get(h);if(m===void 0||m.count!==p){let z=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",z)};m!==void 0&&m.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],E=0;y===!0&&(E=1),v===!0&&(E=2),_===!0&&(E=3);let k=h.attributes.position.count*E,P=1;k>e.maxTextureSize&&(P=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let U=new Float32Array(k*P*4*p),$=new oo(U,k,P,p);$.type=gn,$.needsUpdate=!0;let C=4*E;for(let O=0;O<p;O++){let ne=x[O],ue=R[O],ee=w[O],Y=k*P*4*O;for(let ie=0;ie<ne.count;ie++){let B=ie*C;y===!0&&(a.fromBufferAttribute(ne,ie),U[Y+B+0]=a.x,U[Y+B+1]=a.y,U[Y+B+2]=a.z,U[Y+B+3]=0),v===!0&&(a.fromBufferAttribute(ue,ie),U[Y+B+4]=a.x,U[Y+B+5]=a.y,U[Y+B+6]=a.z,U[Y+B+7]=0),_===!0&&(a.fromBufferAttribute(ee,ie),U[Y+B+8]=a.x,U[Y+B+9]=a.y,U[Y+B+10]=a.z,U[Y+B+11]=ee.itemSize===4?a.w:1)}}m={count:p,texture:$,size:new le(k,P)},r.set(h,m),h.addEventListener("dispose",z)}let g=0;for(let y=0;y<u.length;y++)g+=u[y];let f=h.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",f),c.getUniforms().setValue(s,"morphTargetInfluences",u),c.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=i[h.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];i[h.id]=p}for(let v=0;v<d;v++){let _=p[v];_[0]=v,_[1]=u[v]}p.sort(vf);for(let v=0;v<8;v++)v<d&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(gf);let m=h.morphAttributes.position,g=h.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let _=o[v],x=_[0],R=_[1];x!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+v)!==m[x]&&h.setAttribute("morphTarget"+v,m[x]),g&&h.getAttribute("morphNormal"+v)!==g[x]&&h.setAttribute("morphNormal"+v,g[x]),n[v]=R,f+=R):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}let y=h.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",n)}}}}function _f(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var mo=class extends ai{constructor(e,t,i,n,r,a,o,l,h,c){if((c=c!==void 0?c:Gn)!==Gn&&c!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Gn&&(i=mn),i===void 0&&c===Os&&(i=zn),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},up=new ai,dp=new mo(1,1);dp.compareFunction=515;var pp=new oo,fp=new nh,mp=new uo,gd=[],vd=[],yd=new Float32Array(16),_d=new Float32Array(9),xd=new Float32Array(4);function Ys(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=gd[n];if(r===void 0&&(r=new Float32Array(n),gd[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Et(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ko(s,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function xf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),Et(t,e)}}function Mf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),Et(t,e)}}function wf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),Et(t,e)}}function Sf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;xd.set(i),s.uniformMatrix2fv(this.addr,!1,xd),Et(t,i)}}function Tf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;_d.set(i),s.uniformMatrix3fv(this.addr,!1,_d),Et(t,i)}}function Ef(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;yd.set(i),s.uniformMatrix4fv(this.addr,!1,yd),Et(t,i)}}function Rf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Af(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),Et(t,e)}}function Cf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),Et(t,e)}}function Lf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),Et(t,e)}}function Pf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),Et(t,e)}}function If(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),Et(t,e)}}function Nf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),Et(t,e)}}function Uf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?dp:up;t.setTexture2D(e||r,n)}function Df(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||fp,n)}function Of(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||mp,n)}function Ff(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||pp,n)}function Bf(s,e){s.uniform1fv(this.addr,e)}function Hf(s,e){let t=Ys(e,this.size,2);s.uniform2fv(this.addr,t)}function zf(s,e){let t=Ys(e,this.size,3);s.uniform3fv(this.addr,t)}function Gf(s,e){let t=Ys(e,this.size,4);s.uniform4fv(this.addr,t)}function Vf(s,e){let t=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wf(s,e){let t=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jf(s,e){let t=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $f(s,e){s.uniform1iv(this.addr,e)}function Xf(s,e){s.uniform2iv(this.addr,e)}function Yf(s,e){s.uniform3iv(this.addr,e)}function qf(s,e){s.uniform4iv(this.addr,e)}function Jf(s,e){s.uniform1uiv(this.addr,e)}function Kf(s,e){s.uniform2uiv(this.addr,e)}function Zf(s,e){s.uniform3uiv(this.addr,e)}function Qf(s,e){s.uniform4uiv(this.addr,e)}function em(s,e,t){let i=this.cache,n=e.length,r=ko(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||up,r[a])}function tm(s,e,t){let i=this.cache,n=e.length,r=ko(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||fp,r[a])}function im(s,e,t){let i=this.cache,n=e.length,r=ko(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||mp,r[a])}function nm(s,e,t){let i=this.cache,n=e.length,r=ko(t,n);Tt(i,r)||(s.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||pp,r[a])}var ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return xf;case 35664:return bf;case 35665:return Mf;case 35666:return wf;case 35674:return Sf;case 35675:return Tf;case 35676:return Ef;case 5124:case 35670:return Rf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Lf;case 5125:return Pf;case 36294:return kf;case 36295:return If;case 36296:return Nf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}(t.type)}},oh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Bf;case 35664:return Hf;case 35665:return zf;case 35666:return Gf;case 35674:return Vf;case 35675:return Wf;case 35676:return jf;case 5124:case 35670:return $f;case 35667:case 35671:return Xf;case 35668:case 35672:return Yf;case 35669:case 35673:return qf;case 5125:return Jf;case 36294:return Kf;case 36295:return Zf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return nm}}(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function bd(s,e){s.seq.push(e),s.map[e.id]=e}function sm(s,e,t){let i=s.name,n=i.length;for(Ol.lastIndex=0;;){let r=Ol.exec(i),a=Ol.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){bd(t,h===void 0?new ah(o,s,e):new oh(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new lh(o),bd(t,c)),t=c}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);sm(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Md(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var rm=37297,am=0;function wd(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){let m=p+1;c.push(`${m===l?">":" "} ${m}: ${h[p]}`)}return c.join(`
`)}(s.getShaderSource(e),a)}return n}function om(s,e){let t=function(i){let n=nt.getPrimaries(nt.workingColorSpace),r=nt.getPrimaries(i),a;switch(n===r?a="":n===to&&r===eo?a="LinearDisplayP3ToLinearSRGB":n===eo&&r===to&&(a="LinearSRGBToLinearDisplayP3"),i){case Yi:case Po:return[a,"LinearTransferOETF"];case pt:case Qh:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lm(s,e){let t;switch(e){case I0:t="Linear";break;case N0:t="Reinhard";break;case U0:t="OptimizedCineon";break;case Kh:t="ACESFilmic";break;case O0:t="AgX";break;case D0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ts(s){return s!==""}function Sd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(hm,um)}var cm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function um(s,e){let t=Ue[e];if(t===void 0){let i=cm.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return hh(t)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(s){return s.replace(dm,pm)}function pm(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Rd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fm(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(C){let z="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Yd?z="SHADOWMAP_TYPE_PCF":C.shadowMapType===qh?z="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===$i&&(z="SHADOWMAP_TYPE_VSM"),z}(t),h=function(C){let z="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case Us:case Ds:z="ENVMAP_TYPE_CUBE";break;case Lo:z="ENVMAP_TYPE_CUBE_UV"}return z}(t),c=function(C){let z="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===Ds&&(z="ENVMAP_MODE_REFRACTION"),z}(t),u=function(C){let z="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Jd:z="ENVMAP_BLENDING_MULTIPLY";break;case P0:z="ENVMAP_BLENDING_MIX";break;case k0:z="ENVMAP_BLENDING_ADD"}return z}(t),d=function(C){let z=C.envMapCubeUVHeight;if(z===null)return null;let O=Math.log2(z)-2,ne=1/z;return{texelWidth:1/(3*Math.max(Math.pow(2,O),112)),texelHeight:ne,maxMip:O}}(t),p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}(t),m=function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ts).join(`
`)}(t),g=function(C){let z=[];for(let O in C){let ne=C[O];ne!==!1&&z.push("#define "+O+" "+ne)}return z.join(`
`)}(r),f=n.createProgram(),y,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),y.length>0&&(y+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ts).join(`
`),v.length>0&&(v+=`
`)):(y=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),v=[p,Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==yn?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),a=hh(a),a=Sd(a,t),a=Td(a,t),o=hh(o),o=Sd(o,t),o=Td(o,t),a=Ed(a),o=Ed(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=_+y+a,R=_+v+o,w=Md(n,n.VERTEX_SHADER,x),E=Md(n,n.FRAGMENT_SHADER,R);function k(C){if(s.debug.checkShaderErrors){let z=n.getProgramInfoLog(f).trim(),O=n.getShaderInfoLog(w).trim(),ne=n.getShaderInfoLog(E).trim(),ue=!0,ee=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,f,w,E);else{let Y=wd(n,w,"vertex"),ie=wd(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+Y+`
`+ie)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):O!==""&&ne!==""||(ee=!1);ee&&(C.diagnostics={runnable:ue,programLog:z,vertexShader:{log:O,prefix:y},fragmentShader:{log:ne,prefix:v}})}n.deleteShader(w),n.deleteShader(E),P=new Ns(n,f),U=function(z,O){let ne={},ue=z.getProgramParameter(O,z.ACTIVE_ATTRIBUTES);for(let ee=0;ee<ue;ee++){let Y=z.getActiveAttrib(O,ee),ie=Y.name,B=1;Y.type===z.FLOAT_MAT2&&(B=2),Y.type===z.FLOAT_MAT3&&(B=3),Y.type===z.FLOAT_MAT4&&(B=4),ne[ie]={type:Y.type,location:z.getAttribLocation(O,ie),locationSize:B}}return ne}(n,f)}let P,U;n.attachShader(f,w),n.attachShader(f,E),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),this.getUniforms=function(){return P===void 0&&k(this),P},this.getAttributes=function(){return U===void 0&&k(this),U};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=n.getProgramParameter(f,rm)),$},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=E,this}var mm=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new uh(e),t.set(e,i)),i}},uh=class{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}};function gm(s,e,t,i,n,r,a){let o=new kr,l=new ch,h=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,y,v,_,x){let R=_.fog,w=x.geometry,E=f.isMeshStandardMaterial?_.environment:null,k=(f.isMeshStandardMaterial?t:e).get(f.envMap||E),P=k&&k.mapping===Lo?k.image.height:null,U=m[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let $=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,C=$!==void 0?$.length:0,z,O,ne,ue,ee=0;if(w.morphAttributes.position!==void 0&&(ee=1),w.morphAttributes.normal!==void 0&&(ee=2),w.morphAttributes.color!==void 0&&(ee=3),U){let Dt=Pi[U];z=Dt.vertexShader,O=Dt.fragmentShader}else z=f.vertexShader,O=f.fragmentShader,l.update(f),ne=l.getVertexShaderID(f),ue=l.getFragmentShaderID(f);let Y=s.getRenderTarget(),ie=x.isInstancedMesh===!0,B=x.isBatchedMesh===!0,K=!!f.map,pe=!!f.matcap,T=!!k,S=!!f.aoMap,D=!!f.lightMap,q=!!f.bumpMap,L=!!f.normalMap,j=!!f.displacementMap,I=!!f.emissiveMap,N=!!f.metalnessMap,F=!!f.roughnessMap,te=f.anisotropy>0,Z=f.clearcoat>0,M=f.iridescence>0,se=f.sheen>0,H=f.transmission>0,G=te&&!!f.anisotropyMap,ae=Z&&!!f.clearcoatMap,fe=Z&&!!f.clearcoatNormalMap,ye=Z&&!!f.clearcoatRoughnessMap,xe=M&&!!f.iridescenceMap,Pe=M&&!!f.iridescenceThicknessMap,be=se&&!!f.sheenColorMap,Se=se&&!!f.sheenRoughnessMap,Oe=!!f.specularMap,Lt=!!f.specularColorMap,Ee=!!f.specularIntensityMap,$e=H&&!!f.transmissionMap,ze=H&&!!f.thicknessMap,ha=!!f.gradientMap,ls=!!f.alphaMap,ca=f.alphaTest>0,ii=!!f.alphaHash,Kt=!!f.extensions,hs=!!w.attributes.uv1,W=!!w.attributes.uv2,ua=!!w.attributes.uv3,cr=yn;return f.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(cr=s.toneMapping)),{isWebGL2:c,shaderID:U,shaderType:f.type,shaderName:f.name,vertexShader:z,fragmentShader:O,defines:f.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:B,instancing:ie,instancingColor:ie&&x.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Yi,map:K,matcap:pe,envMap:T,envMapMode:T&&k.mapping,envMapCubeUVHeight:P,aoMap:S,lightMap:D,bumpMap:q,normalMap:L,displacementMap:d&&j,emissiveMap:I,normalMapObjectSpace:L&&f.normalMapType===1,normalMapTangentSpace:L&&f.normalMapType===0,metalnessMap:N,roughnessMap:F,anisotropy:te,anisotropyMap:G,clearcoat:Z,clearcoatMap:ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:Pe,sheen:se,sheenColorMap:be,sheenRoughnessMap:Se,specularMap:Oe,specularColorMap:Lt,specularIntensityMap:Ee,transmission:H,transmissionMap:$e,thicknessMap:ze,gradientMap:ha,opaque:f.transparent===!1&&f.blending===1,alphaMap:ls,alphaTest:ca,alphaHash:ii,combine:f.combine,mapUv:K&&g(f.map.channel),aoMapUv:S&&g(f.aoMap.channel),lightMapUv:D&&g(f.lightMap.channel),bumpMapUv:q&&g(f.bumpMap.channel),normalMapUv:L&&g(f.normalMap.channel),displacementMapUv:j&&g(f.displacementMap.channel),emissiveMapUv:I&&g(f.emissiveMap.channel),metalnessMapUv:N&&g(f.metalnessMap.channel),roughnessMapUv:F&&g(f.roughnessMap.channel),anisotropyMapUv:G&&g(f.anisotropyMap.channel),clearcoatMapUv:ae&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(f.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(f.sheenRoughnessMap.channel),specularMapUv:Oe&&g(f.specularMap.channel),specularColorMapUv:Lt&&g(f.specularColorMap.channel),specularIntensityMapUv:Ee&&g(f.specularIntensityMap.channel),transmissionMapUv:$e&&g(f.transmissionMap.channel),thicknessMapUv:ze&&g(f.thicknessMap.channel),alphaMapUv:ls&&g(f.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(L||te),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:hs,vertexUv2s:W,vertexUv3s:ua,pointsUvs:x.isPoints===!0&&!!w.attributes.uv&&(K||ls),fog:!!R,useFog:f.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:x.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&v.length>0,shadowMapType:s.shadowMap.type,toneMapping:cr,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&f.map.isVideoTexture===!0&&nt.getTransfer(f.map.colorSpace)===at,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Xt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Kt&&f.extensions.derivatives===!0,extensionFragDepth:Kt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Kt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Kt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Kt&&f.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let v in f.defines)y.push(v),y.push(f.defines[v]);return f.isRawShaderMaterial===!1&&(function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}(y,f),function(v,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(y,f),y.push(s.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()},getUniforms:function(f){let y=m[f.type],v;if(y){let _=Pi[y];v=ef.clone(_.uniforms)}else v=f.uniforms;return v},acquireProgram:function(f,y){let v;for(let _=0,x=h.length;_<x;_++){let R=h[_];if(R.cacheKey===y){v=R,++v.usedTimes;break}}return v===void 0&&(v=new fm(s,y,f,r),h.push(v)),v},releaseProgram:function(f){if(--f.usedTimes==0){let y=h.indexOf(f);h[y]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function vm(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ad(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cd(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,h,c,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||ym),i.length>1&&i.sort(o||Ad),n.length>1&&n.sort(o||Ad)}}}function _m(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new Cd,s.set(e,[n])):t>=i.length?(n=new Cd,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function xm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ce};break;case"SpotLight":t={position:new b,direction:new b,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new b,halfWidth:new b,halfHeight:new b}}return s[e.id]=t,t}}}var bm=0;function Mm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function wm(s,e){let t=new xm,i=function(){let l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);let r=new b,a=new Ne,o=new Ne;return{setup:function(l,h){let c=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,m=0,g=0,f=0,y=0,v=0,_=0,x=0,R=0,w=0,E=0;l.sort(Mm);let k=h===!0?Math.PI:1;for(let U=0,$=l.length;U<$;U++){let C=l[U],z=C.color,O=C.intensity,ne=C.distance,ue=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=z.r*O*k,u+=z.g*O*k,d+=z.b*O*k;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(C.sh.coefficients[ee],O);E++}else if(C.isDirectionalLight){let ee=t.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity*k),C.castShadow){let Y=C.shadow,ie=i.get(C);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=ue,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=ee,p++}else if(C.isSpotLight){let ee=t.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(z).multiplyScalar(O*k),ee.distance=ne,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,n.spot[g]=ee;let Y=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,Y.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,C.castShadow){let ie=i.get(C);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,n.spotShadow[g]=ie,n.spotShadowMap[g]=ue,x++}g++}else if(C.isRectAreaLight){let ee=t.get(C);ee.color.copy(z).multiplyScalar(O),ee.halfWidth.set(.5*C.width,0,0),ee.halfHeight.set(0,.5*C.height,0),n.rectArea[f]=ee,f++}else if(C.isPointLight){let ee=t.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity*k),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){let Y=C.shadow,ie=i.get(C);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,ie.shadowCameraNear=Y.camera.near,ie.shadowCameraFar=Y.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=ue,n.pointShadowMatrix[m]=C.shadow.matrix,_++}n.point[m]=ee,m++}else if(C.isHemisphereLight){let ee=t.get(C);ee.skyColor.copy(C.color).multiplyScalar(O*k),ee.groundColor.copy(C.groundColor).multiplyScalar(O*k),n.hemi[y]=ee,y++}}f>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;P.directionalLength===p&&P.pointLength===m&&P.spotLength===g&&P.rectAreaLength===f&&P.hemiLength===y&&P.numDirectionalShadows===v&&P.numPointShadows===_&&P.numSpotShadows===x&&P.numSpotMaps===R&&P.numLightProbes===E||(n.directional.length=p,n.spot.length=g,n.rectArea.length=f,n.point.length=m,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.directionalLength=p,P.pointLength=m,P.spotLength=g,P.rectAreaLength=f,P.hemiLength=y,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=E,n.version=bm++)},setupView:function(l,h){let c=0,u=0,d=0,p=0,m=0,g=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let v=l[f];if(v.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),c++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),_.halfWidth.set(.5*v.width,0,0),_.halfHeight.set(0,.5*v.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),m++}}},state:n}}function Ld(s,e){let t=new wm(s,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(r){t.setup(i,r)},setupLightsView:function(r){t.setupView(i,r)},pushLight:function(r){i.push(r)},pushShadow:function(r){n.push(r)}}}function Sm(s,e){let t=new WeakMap;return{get:function(i,n=0){let r=t.get(i),a;return r===void 0?(a=new Ld(s,e),t.set(i,[a])):n>=r.length?(a=new Ld(s,e),r.push(a)):a=r[n],a},dispose:function(){t=new WeakMap}}}var dh=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ph=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tm(s,e,t){let i=new zs,n=new le,r=new le,a=new st,o=new dh({depthPacking:3201}),l=new ph,h={},c=t.maxTextureSize,u={[xn]:Xt,[Xt]:xn,2:2},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new lt;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Te(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let y=this.type;function v(w,E){let k=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(n.x,n.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,k,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,k,p,g,null)}function _(w,E,k,P){let U=null,$=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0)U=$;else if(U=k.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let C=U.uuid,z=E.uuid,O=h[C];O===void 0&&(O={},h[C]=O);let ne=O[z];ne===void 0&&(ne=U.clone(),O[z]=ne,E.addEventListener("dispose",R)),U=ne}return U.visible=E.visible,U.wireframe=E.wireframe,U.side=P===$i?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:u[E.side],U.alphaMap=E.alphaMap,U.alphaTest=E.alphaTest,U.map=E.map,U.clipShadows=E.clipShadows,U.clippingPlanes=E.clippingPlanes,U.clipIntersection=E.clipIntersection,U.displacementMap=E.displacementMap,U.displacementScale=E.displacementScale,U.displacementBias=E.displacementBias,U.wireframeLinewidth=E.wireframeLinewidth,U.linewidth=E.linewidth,k.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(s.properties.get(U).light=k),U}function x(w,E,k,P,U){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===$i)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);let C=e.update(w),z=w.material;if(Array.isArray(z)){let O=C.groups;for(let ne=0,ue=O.length;ne<ue;ne++){let ee=O[ne],Y=z[ee.materialIndex];if(Y&&Y.visible){let ie=_(w,Y,P,U);w.onBeforeShadow(s,w,E,k,C,ie,ee),s.renderBufferDirect(k,null,C,ie,w,ee),w.onAfterShadow(s,w,E,k,C,ie,ee)}}}else if(z.visible){let O=_(w,z,P,U);w.onBeforeShadow(s,w,E,k,C,O,null),s.renderBufferDirect(k,null,C,O,w,null),w.onAfterShadow(s,w,E,k,C,O,null)}}let $=w.children;for(let C=0,z=$.length;C<z;C++)x($[C],E,k,P,U)}function R(w){w.target.removeEventListener("dispose",R);for(let E in h){let k=h[E],P=w.target.uuid;P in k&&(k[P].dispose(),delete k[P])}}this.render=function(w,E,k){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;let P=s.getRenderTarget(),U=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),C=s.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let z=y!==$i&&this.type===$i,O=y===$i&&this.type!==$i;for(let ne=0,ue=w.length;ne<ue;ne++){let ee=w[ne],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let ie=Y.getFrameExtents();if(n.multiply(ie),r.copy(Y.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/ie.x),n.x=r.x*ie.x,Y.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/ie.y),n.y=r.y*ie.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||O===!0){let K=this.type!==$i?{minFilter:Gt,magFilter:Gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new qi(n.x,n.y,K),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let B=Y.getViewportCount();for(let K=0;K<B;K++){let pe=Y.getViewport(K);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),C.viewport(a),Y.updateMatrices(ee,K),i=Y.getFrustum(),x(E,k,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===$i&&v(Y,k),Y.needsUpdate=!1}y=this.type,f.needsUpdate=!1,s.setRenderTarget(P,U,$)}}function Em(s,e,t){let i=t.isWebGL2,n=new function(){let M=!1,se=new st,H=null,G=new st(0,0,0,0);return{setMask:function(ae){H===ae||M||(s.colorMask(ae,ae,ae,ae),H=ae)},setLocked:function(ae){M=ae},setClear:function(ae,fe,ye,xe,Pe){Pe===!0&&(ae*=xe,fe*=xe,ye*=xe),se.set(ae,fe,ye,xe),G.equals(se)===!1&&(s.clearColor(ae,fe,ye,xe),G.copy(se))},reset:function(){M=!1,H=null,G.set(-1,0,0,0)}}},r=new function(){let M=!1,se=null,H=null,G=null;return{setTest:function(ae){ae?q(s.DEPTH_TEST):L(s.DEPTH_TEST)},setMask:function(ae){se===ae||M||(s.depthMask(ae),se=ae)},setFunc:function(ae){if(H!==ae){switch(ae){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}H=ae}},setLocked:function(ae){M=ae},setClear:function(ae){G!==ae&&(s.clearDepth(ae),G=ae)},reset:function(){M=!1,se=null,H=null,G=null}}},a=new function(){let M=!1,se=null,H=null,G=null,ae=null,fe=null,ye=null,xe=null,Pe=null;return{setTest:function(be){M||(be?q(s.STENCIL_TEST):L(s.STENCIL_TEST))},setMask:function(be){se===be||M||(s.stencilMask(be),se=be)},setFunc:function(be,Se,Oe){H===be&&G===Se&&ae===Oe||(s.stencilFunc(be,Se,Oe),H=be,G=Se,ae=Oe)},setOp:function(be,Se,Oe){fe===be&&ye===Se&&xe===Oe||(s.stencilOp(be,Se,Oe),fe=be,ye=Se,xe=Oe)},setLocked:function(be){M=be},setClear:function(be){Pe!==be&&(s.clearStencil(be),Pe=be)},reset:function(){M=!1,se=null,H=null,G=null,ae=null,fe=null,ye=null,xe=null,Pe=null}}},o=new WeakMap,l=new WeakMap,h={},c={},u=new WeakMap,d=[],p=null,m=!1,g=null,f=null,y=null,v=null,_=null,x=null,R=null,w=new Ce(0,0,0),E=0,k=!1,P=null,U=null,$=null,C=null,z=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,ue=0,ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ne=ue>=1):ee.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ne=ue>=2);let Y=null,ie={},B=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),pe=new st().fromArray(B),T=new st().fromArray(K);function S(M,se,H,G){let ae=new Uint8Array(4),fe=s.createTexture();s.bindTexture(M,fe),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<H;ye++)!i||M!==s.TEXTURE_3D&&M!==s.TEXTURE_2D_ARRAY?s.texImage2D(se+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage3D(se,0,s.RGBA,1,1,G,0,s.RGBA,s.UNSIGNED_BYTE,ae);return fe}let D={};function q(M){h[M]!==!0&&(s.enable(M),h[M]=!0)}function L(M){h[M]!==!1&&(s.disable(M),h[M]=!1)}D[s.TEXTURE_2D]=S(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=S(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(D[s.TEXTURE_2D_ARRAY]=S(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=S(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),q(s.DEPTH_TEST),r.setFunc(3),F(!1),te(1),q(s.CULL_FACE),N(0);let j={[On]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)j[103]=s.MIN,j[104]=s.MAX;else{let M=e.get("EXT_blend_minmax");M!==null&&(j[103]=M.MIN_EXT,j[104]=M.MAX_EXT)}let I={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[Xl]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[Yl]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function N(M,se,H,G,ae,fe,ye,xe,Pe,be){if(M!==0){if(m===!1&&(q(s.BLEND),m=!0),M===5)ae=ae||se,fe=fe||H,ye=ye||G,se===f&&ae===_||(s.blendEquationSeparate(j[se],j[ae]),f=se,_=ae),H===y&&G===v&&fe===x&&ye===R||(s.blendFuncSeparate(I[H],I[G],I[fe],I[ye]),y=H,v=G,x=fe,R=ye),xe.equals(w)!==!1&&Pe===E||(s.blendColor(xe.r,xe.g,xe.b,Pe),w.copy(xe),E=Pe),g=M,k=!1;else if(M!==g||be!==k){if(f===On&&_===On||(s.blendEquation(s.FUNC_ADD),f=On,_=On),be)switch(M){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}y=null,v=null,x=null,R=null,w.set(0,0,0),E=0,g=M,k=be}}else m===!0&&(L(s.BLEND),m=!1)}function F(M){P!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),P=M)}function te(M){M!==0?(q(s.CULL_FACE),M!==U&&(M===1?s.cullFace(s.BACK):M===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):L(s.CULL_FACE),U=M}function Z(M,se,H){M?(q(s.POLYGON_OFFSET_FILL),C===se&&z===H||(s.polygonOffset(se,H),C=se,z=H)):L(s.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:a},enable:q,disable:L,bindFramebuffer:function(M,se){return c[M]!==se&&(s.bindFramebuffer(M,se),c[M]=se,i&&(M===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=se),M===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(M,se){let H=d,G=!1;if(M)if(H=u.get(se),H===void 0&&(H=[],u.set(se,H)),M.isWebGLMultipleRenderTargets){let ae=M.texture;if(H.length!==ae.length||H[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ye=ae.length;fe<ye;fe++)H[fe]=s.COLOR_ATTACHMENT0+fe;H.length=ae.length,G=!0}}else H[0]!==s.COLOR_ATTACHMENT0&&(H[0]=s.COLOR_ATTACHMENT0,G=!0);else H[0]!==s.BACK&&(H[0]=s.BACK,G=!0);G&&(t.isWebGL2?s.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))},useProgram:function(M){return p!==M&&(s.useProgram(M),p=M,!0)},setBlending:N,setMaterial:function(M,se){M.side===2?L(s.CULL_FACE):q(s.CULL_FACE);let H=M.side===Xt;se&&(H=!H),F(H),M.blending===1&&M.transparent===!1?N(0):N(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),n.setMask(M.colorWrite);let G=M.stencilWrite;a.setTest(G),G&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Z(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):L(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:te,setLineWidth:function(M){M!==$&&(ne&&s.lineWidth(M),$=M)},setPolygonOffset:Z,setScissorTest:function(M){M?q(s.SCISSOR_TEST):L(s.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=s.TEXTURE0+O-1),Y!==M&&(s.activeTexture(M),Y=M)},bindTexture:function(M,se,H){H===void 0&&(H=Y===null?s.TEXTURE0+O-1:Y);let G=ie[H];G===void 0&&(G={type:void 0,texture:void 0},ie[H]=G),G.type===M&&G.texture===se||(Y!==H&&(s.activeTexture(H),Y=H),s.bindTexture(M,se||D[M]),G.type=M,G.texture=se)},unbindTexture:function(){let M=ie[Y];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,se){let H=l.get(se);H===void 0&&(H=new WeakMap,l.set(se,H));let G=H.get(M);G===void 0&&(G=s.getUniformBlockIndex(se,M.name),H.set(M,G))},uniformBlockBinding:function(M,se){let H=l.get(se).get(M);o.get(se)!==H&&(s.uniformBlockBinding(se,H,M.__bindingPointIndex),o.set(se,H))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){pe.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),pe.copy(M))},viewport:function(M){T.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),T.copy(M))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,ie={},c={},u=new WeakMap,d=[],p=null,m=!1,g=null,f=null,y=null,v=null,_=null,x=null,R=null,w=new Ce(0,0,0),E=0,k=!1,P=null,U=null,$=null,C=null,z=null,pe.set(0,0,s.canvas.width,s.canvas.height),T.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}}}function Rm(s,e,t,i,n,r,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return p?new OffscreenCanvas(T,S):so("canvas")}function g(T,S,D,q){let L=1;if((T.width>q||T.height>q)&&(L=q/Math.max(T.width,T.height)),L<1||S===!0){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let j=S?no:Math.floor,I=j(L*T.width),N=j(L*T.height);u===void 0&&(u=m(I,N));let F=D?m(I,N):u;return F.width=I,F.height=N,F.getContext("2d").drawImage(T,0,0,I,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+I+"x"+N+")."),F}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T}return T}function f(T){return th(T.width)&&th(T.height)}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==Gt&&T.minFilter!==bi}function v(T){s.generateMipmap(T)}function _(T,S,D,q,L=!1){if(o===!1)return S;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=S;if(S===s.RED&&(D===s.FLOAT&&(j=s.R32F),D===s.HALF_FLOAT&&(j=s.R16F),D===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.R8UI),D===s.UNSIGNED_SHORT&&(j=s.R16UI),D===s.UNSIGNED_INT&&(j=s.R32UI),D===s.BYTE&&(j=s.R8I),D===s.SHORT&&(j=s.R16I),D===s.INT&&(j=s.R32I)),S===s.RG&&(D===s.FLOAT&&(j=s.RG32F),D===s.HALF_FLOAT&&(j=s.RG16F),D===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RGBA){let I=L?Qa:nt.getTransfer(q);D===s.FLOAT&&(j=s.RGBA32F),D===s.HALF_FLOAT&&(j=s.RGBA16F),D===s.UNSIGNED_BYTE&&(j=I===at?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return j!==s.R16F&&j!==s.R32F&&j!==s.RG16F&&j!==s.RG32F&&j!==s.RGBA16F&&j!==s.RGBA32F||e.get("EXT_color_buffer_float"),j}function x(T,S,D){return y(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){return T===Gt||T===vu||T===hl?s.NEAREST:s.LINEAR}function w(T){let S=T.target;S.removeEventListener("dispose",w),function(D){let q=i.get(D);if(q.__webglInit===void 0)return;let L=D.source,j=d.get(L);if(j){let I=j[q.__cacheKey];I.usedTimes--,I.usedTimes===0&&k(D),Object.keys(j).length===0&&d.delete(L)}i.remove(D)}(S),S.isVideoTexture&&c.delete(S)}function E(T){let S=T.target;S.removeEventListener("dispose",E),function(D){let q=D.texture,L=i.get(D),j=i.get(q);if(j.__webglTexture!==void 0&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(L.__webglFramebuffer[I]))for(let N=0;N<L.__webglFramebuffer[I].length;N++)s.deleteFramebuffer(L.__webglFramebuffer[I][N]);else s.deleteFramebuffer(L.__webglFramebuffer[I]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[I])}else{if(Array.isArray(L.__webglFramebuffer))for(let I=0;I<L.__webglFramebuffer.length;I++)s.deleteFramebuffer(L.__webglFramebuffer[I]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let I=0;I<L.__webglColorRenderbuffer.length;I++)L.__webglColorRenderbuffer[I]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[I]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let I=0,N=q.length;I<N;I++){let F=i.get(q[I]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(q[I])}i.remove(q),i.remove(D)}(S)}function k(T){let S=i.get(T);s.deleteTexture(S.__webglTexture);let D=T.source;delete d.get(D)[S.__cacheKey],a.memory.textures--}let P=0;function U(T,S){let D=i.get(T);if(T.isVideoTexture&&function(q){let L=a.render.frame;c.get(q)!==L&&(c.set(q,L),q.update())}(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){let q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(q.complete!==!1)return void ue(D,T,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+S)}let $={[Lr]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Kl]:s.MIRRORED_REPEAT},C={[Gt]:s.NEAREST,[vu]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[F0]:s.LINEAR_MIPMAP_NEAREST,[Ja]:s.LINEAR_MIPMAP_LINEAR},z={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function O(T,S,D){if(D?(s.texParameteri(T,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,$[S.wrapT]),T!==s.TEXTURE_3D&&T!==s.TEXTURE_2D_ARRAY||s.texParameteri(T,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,C[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,C[S.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),T!==s.TEXTURE_3D&&T!==s.TEXTURE_2D_ARRAY||s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),S.wrapS===Xi&&S.wrapT===Xi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,R(S.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==hl&&S.minFilter!==Ja||S.type===gn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(s.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ne(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",w));let q=S.source,L=d.get(q);L===void 0&&(L={},d.set(q,L));let j=function(I){let N=[];return N.push(I.wrapS),N.push(I.wrapT),N.push(I.wrapR||0),N.push(I.magFilter),N.push(I.minFilter),N.push(I.anisotropy),N.push(I.internalFormat),N.push(I.format),N.push(I.type),N.push(I.generateMipmaps),N.push(I.premultiplyAlpha),N.push(I.flipY),N.push(I.unpackAlignment),N.push(I.colorSpace),N.join()}(S);if(j!==T.__cacheKey){L[j]===void 0&&(L[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),L[j].usedTimes++;let I=L[T.__cacheKey];I!==void 0&&(L[T.__cacheKey].usedTimes--,I.usedTimes===0&&k(S)),T.__cacheKey=j,T.__webglTexture=L[j].texture}return D}function ue(T,S,D){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);let L=ne(T,S),j=S.source;t.bindTexture(q,T.__webglTexture,s.TEXTURE0+D);let I=i.get(j);if(j.version!==I.__version||L===!0){t.activeTexture(s.TEXTURE0+D);let N=nt.getPrimaries(nt.workingColorSpace),F=S.colorSpace===Ii?null:nt.getPrimaries(S.colorSpace),te=S.colorSpace===Ii||N===F?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Z=function(Se){return!o&&(Se.wrapS!==Xi||Se.wrapT!==Xi||Se.minFilter!==Gt&&Se.minFilter!==bi)}(S)&&f(S.image)===!1,M=g(S.image,Z,!1,n.maxTextureSize);M=pe(S,M);let se=f(M)||o,H=r.convert(S.format,S.colorSpace),G,ae=r.convert(S.type),fe=_(S.internalFormat,H,ae,S.colorSpace,S.isVideoTexture);O(q,S,se);let ye=S.mipmaps,xe=o&&S.isVideoTexture!==!0&&fe!==sp,Pe=I.__version===void 0||L===!0,be=x(S,M,se);if(S.isDepthTexture)fe=s.DEPTH_COMPONENT,o?fe=S.type===gn?s.DEPTH_COMPONENT32F:S.type===mn?s.DEPTH_COMPONENT24:S.type===zn?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:S.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Gn&&fe===s.DEPTH_COMPONENT&&S.type!==Zh&&S.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=mn,ae=r.convert(S.type)),S.format===Os&&fe===s.DEPTH_COMPONENT&&(fe=s.DEPTH_STENCIL,S.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=zn,ae=r.convert(S.type))),Pe&&(xe?t.texStorage2D(s.TEXTURE_2D,1,fe,M.width,M.height):t.texImage2D(s.TEXTURE_2D,0,fe,M.width,M.height,0,H,ae,null));else if(S.isDataTexture)if(ye.length>0&&se){xe&&Pe&&t.texStorage2D(s.TEXTURE_2D,be,fe,ye[0].width,ye[0].height);for(let Se=0,Oe=ye.length;Se<Oe;Se++)G=ye[Se],xe?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,G.width,G.height,H,ae,G.data):t.texImage2D(s.TEXTURE_2D,Se,fe,G.width,G.height,0,H,ae,G.data);S.generateMipmaps=!1}else xe?(Pe&&t.texStorage2D(s.TEXTURE_2D,be,fe,M.width,M.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,H,ae,M.data)):t.texImage2D(s.TEXTURE_2D,0,fe,M.width,M.height,0,H,ae,M.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,fe,ye[0].width,ye[0].height,M.depth);for(let Se=0,Oe=ye.length;Se<Oe;Se++)G=ye[Se],S.format!==ki?H!==null?xe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,G.width,G.height,M.depth,H,G.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,fe,G.width,G.height,M.depth,0,G.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,G.width,G.height,M.depth,H,ae,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,fe,G.width,G.height,M.depth,0,H,ae,G.data)}else{xe&&Pe&&t.texStorage2D(s.TEXTURE_2D,be,fe,ye[0].width,ye[0].height);for(let Se=0,Oe=ye.length;Se<Oe;Se++)G=ye[Se],S.format!==ki?H!==null?xe?t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,G.width,G.height,H,G.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,fe,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,G.width,G.height,H,ae,G.data):t.texImage2D(s.TEXTURE_2D,Se,fe,G.width,G.height,0,H,ae,G.data)}else if(S.isDataArrayTexture)xe?(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,fe,M.width,M.height,M.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,H,ae,M.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,M.width,M.height,M.depth,0,H,ae,M.data);else if(S.isData3DTexture)xe?(Pe&&t.texStorage3D(s.TEXTURE_3D,be,fe,M.width,M.height,M.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,H,ae,M.data)):t.texImage3D(s.TEXTURE_3D,0,fe,M.width,M.height,M.depth,0,H,ae,M.data);else if(S.isFramebufferTexture){if(Pe)if(xe)t.texStorage2D(s.TEXTURE_2D,be,fe,M.width,M.height);else{let Se=M.width,Oe=M.height;for(let Lt=0;Lt<be;Lt++)t.texImage2D(s.TEXTURE_2D,Lt,fe,Se,Oe,0,H,ae,null),Se>>=1,Oe>>=1}}else if(ye.length>0&&se){xe&&Pe&&t.texStorage2D(s.TEXTURE_2D,be,fe,ye[0].width,ye[0].height);for(let Se=0,Oe=ye.length;Se<Oe;Se++)G=ye[Se],xe?t.texSubImage2D(s.TEXTURE_2D,Se,0,0,H,ae,G):t.texImage2D(s.TEXTURE_2D,Se,fe,H,ae,G);S.generateMipmaps=!1}else xe?(Pe&&t.texStorage2D(s.TEXTURE_2D,be,fe,M.width,M.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,H,ae,M)):t.texImage2D(s.TEXTURE_2D,0,fe,H,ae,M);y(S,se)&&v(q),I.__version=j.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ee(T,S,D,q,L,j){let I=r.convert(D.format,D.colorSpace),N=r.convert(D.type),F=_(D.internalFormat,I,N,D.colorSpace);if(!i.get(S).__hasExternalTextures){let te=Math.max(1,S.width>>j),Z=Math.max(1,S.height>>j);L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?t.texImage3D(L,j,F,te,Z,S.depth,0,I,N,null):t.texImage2D(L,j,F,te,Z,0,I,N,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),K(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,L,i.get(D).__webglTexture,0,B(S)):(L===s.TEXTURE_2D||L>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,L,i.get(D).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(T,S,D){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(D||K(S)){let L=S.depthTexture;L&&L.isDepthTexture&&(L.type===gn?q=s.DEPTH_COMPONENT32F:L.type===mn&&(q=s.DEPTH_COMPONENT24));let j=B(S);K(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,q,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,q,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){let q=B(S);D&&K(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):K(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let L=0;L<q.length;L++){let j=q[L],I=r.convert(j.format,j.colorSpace),N=r.convert(j.type),F=_(j.internalFormat,I,N,j.colorSpace),te=B(S);D&&K(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,F,S.width,S.height):K(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,F,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,F,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(T){let S=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(q,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,q),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);let j=i.get(L.depthTexture).__webglTexture,I=B(L);if(L.depthTexture.format===Gn)K(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else{if(L.depthTexture.format!==Os)throw new Error("Unknown depthTexture format");K(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0)}})(S.__webglFramebuffer,T)}else if(D){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=s.createRenderbuffer(),Y(S.__webglDepthbuffer[q],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Y(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function B(T){return Math.min(n.maxSamples,T.samples)}function K(T){let S=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(T,S){let D=T.colorSpace,q=T.format,L=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ql||D!==Yi&&D!==Ii&&(nt.getTransfer(D)===at?o===!1?e.has("EXT_sRGB")===!0&&q===ki?(T.format=Ql,T.minFilter=bi,T.generateMipmaps=!1):S=ro.sRGBToLinear(S):q===ki&&L===Hn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),S}this.allocateTextureUnit=function(){let T=P;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),P+=1,T},this.resetTextureUnits=function(){P=0},this.setTexture2D=U,this.setTexture2DArray=function(T,S){let D=i.get(T);T.version>0&&D.__version!==T.version?ue(D,T,S):t.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+S)},this.setTexture3D=function(T,S){let D=i.get(T);T.version>0&&D.__version!==T.version?ue(D,T,S):t.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+S)},this.setTextureCube=function(T,S){let D=i.get(T);T.version>0&&D.__version!==T.version?function(q,L,j){if(L.image.length!==6)return;let I=ne(q,L),N=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+j);let F=i.get(N);if(N.version!==F.__version||I===!0){t.activeTexture(s.TEXTURE0+j);let te=nt.getPrimaries(nt.workingColorSpace),Z=L.colorSpace===Ii?null:nt.getPrimaries(L.colorSpace),M=L.colorSpace===Ii||te===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let se=L.isCompressedTexture||L.image[0].isCompressedTexture,H=L.image[0]&&L.image[0].isDataTexture,G=[];for(let Ee=0;Ee<6;Ee++)G[Ee]=se||H?H?L.image[Ee].image:L.image[Ee]:g(L.image[Ee],!1,!0,n.maxCubemapSize),G[Ee]=pe(L,G[Ee]);let ae=G[0],fe=f(ae)||o,ye=r.convert(L.format,L.colorSpace),xe=r.convert(L.type),Pe=_(L.internalFormat,ye,xe,L.colorSpace),be=o&&L.isVideoTexture!==!0,Se=F.__version===void 0||I===!0,Oe,Lt=x(L,ae,fe);if(O(s.TEXTURE_CUBE_MAP,L,fe),se){be&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Pe,ae.width,ae.height);for(let Ee=0;Ee<6;Ee++){Oe=G[Ee].mipmaps;for(let $e=0;$e<Oe.length;$e++){let ze=Oe[$e];L.format!==ki?ye!==null?be?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,0,0,ze.width,ze.height,ye,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,Pe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,0,0,ze.width,ze.height,ye,xe,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e,Pe,ze.width,ze.height,0,ye,xe,ze.data)}}}else{Oe=L.mipmaps,be&&Se&&(Oe.length>0&&Lt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,Pe,G[0].width,G[0].height));for(let Ee=0;Ee<6;Ee++)if(H){be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,G[Ee].width,G[Ee].height,ye,xe,G[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Pe,G[Ee].width,G[Ee].height,0,ye,xe,G[Ee].data);for(let $e=0;$e<Oe.length;$e++){let ze=Oe[$e].image[Ee].image;be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,0,0,ze.width,ze.height,ye,xe,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,Pe,ze.width,ze.height,0,ye,xe,ze.data)}}else{be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ye,xe,G[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Pe,ye,xe,G[Ee]);for(let $e=0;$e<Oe.length;$e++){let ze=Oe[$e];be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,0,0,ye,xe,ze.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,$e+1,Pe,ye,xe,ze.image[Ee])}}}y(L,fe)&&v(s.TEXTURE_CUBE_MAP),F.__version=N.version,L.onUpdate&&L.onUpdate(L)}q.__version=L.version}(D,T,S):t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+S)},this.rebindTextures=function(T,S,D){let q=i.get(T);S!==void 0&&ee(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&ie(T)},this.setupRenderTarget=function(T){let S=T.texture,D=i.get(T),q=i.get(S);T.addEventListener("dispose",E),T.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++);let L=T.isWebGLCubeRenderTarget===!0,j=T.isWebGLMultipleRenderTargets===!0,I=f(T)||o;if(L){D.__webglFramebuffer=[];for(let N=0;N<6;N++)if(o&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[N]=[];for(let F=0;F<S.mipmaps.length;F++)D.__webglFramebuffer[N][F]=s.createFramebuffer()}else D.__webglFramebuffer[N]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let N=0;N<S.mipmaps.length;N++)D.__webglFramebuffer[N]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(j)if(n.drawBuffers){let N=T.texture;for(let F=0,te=N.length;F<te;F++){let Z=i.get(N[F]);Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&K(T)===!1){let N=j?S:[S];D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let F=0;F<N.length;F++){let te=N[F];D.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[F]);let Z=r.convert(te.format,te.colorSpace),M=r.convert(te.type),se=_(te.internalFormat,Z,M,te.colorSpace,T.isXRRenderTarget===!0),H=B(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,H,se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,D.__webglColorRenderbuffer[F])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(L){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),O(s.TEXTURE_CUBE_MAP,S,I);for(let N=0;N<6;N++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)ee(D.__webglFramebuffer[N][F],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,F);else ee(D.__webglFramebuffer[N],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);y(S,I)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let N=T.texture;for(let F=0,te=N.length;F<te;F++){let Z=N[F],M=i.get(Z);t.bindTexture(s.TEXTURE_2D,M.__webglTexture),O(s.TEXTURE_2D,Z,I),ee(D.__webglFramebuffer,T,Z,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,0),y(Z,I)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let N=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?N=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,q.__webglTexture),O(N,S,I),o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)ee(D.__webglFramebuffer[F],T,S,s.COLOR_ATTACHMENT0,N,F);else ee(D.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,N,0);y(S,I)&&v(N),t.unbindTexture()}T.depthBuffer&&ie(T)},this.updateRenderTargetMipmap=function(T){let S=f(T)||o,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let q=0,L=D.length;q<L;q++){let j=D[q];if(y(j,S)){let I=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,N=i.get(j).__webglTexture;t.bindTexture(I,N),v(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(o&&T.samples>0&&K(T)===!1){let S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,q=T.height,L=s.COLOR_BUFFER_BIT,j=[],I=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,N=i.get(T),F=T.isWebGLMultipleRenderTargets===!0;if(F)for(let te=0;te<S.length;te++)t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let te=0;te<S.length;te++){j.push(s.COLOR_ATTACHMENT0+te),T.depthBuffer&&j.push(I);let Z=N.__ignoreDepthValues!==void 0&&N.__ignoreDepthValues;if(Z===!1&&(T.depthBuffer&&(L|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(L|=s.STENCIL_BUFFER_BIT)),F&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,N.__webglColorRenderbuffer[te]),Z===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[I]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])),F){let M=i.get(S[te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,M,0)}s.blitFramebuffer(0,0,D,q,0,0,D,q,L,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),F)for(let te=0;te<S.length;te++){t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,N.__webglColorRenderbuffer[te]);let Z=i.get(S[te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,N.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,Z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=K}function Am(s,e,t){let i=t.isWebGL2;return{convert:function(n,r=""){let a,o=nt.getTransfer(r);if(n===Hn)return s.UNSIGNED_BYTE;if(n===Qd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ep)return s.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return s.BYTE;if(n===1011)return s.SHORT;if(n===Zh)return s.UNSIGNED_SHORT;if(n===Zd)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===gn)return s.FLOAT;if(n===Pr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return s.ALPHA;if(n===ki)return s.RGBA;if(n===1024)return s.LUMINANCE;if(n===1025)return s.LUMINANCE_ALPHA;if(n===Gn)return s.DEPTH_COMPONENT;if(n===Os)return s.DEPTH_STENCIL;if(n===Ql)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return s.RED;if(n===tp)return s.RED_INTEGER;if(n===1030)return s.RG;if(n===ip)return s.RG_INTEGER;if(n===np)return s.RGBA_INTEGER;if(n===cl||n===ul||n===dl||n===pl)if(o===at){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===cl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===cl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===yu||n===_u||n===xu||n===bu){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===sp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Mu||n===wu){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===Mu)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===wu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Su||n===Tu||n===Eu||n===Ru||n===Au||n===Cu||n===Lu||n===Pu||n===ku||n===Iu||n===Nu||n===Uu||n===Du||n===Ou){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===Su)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ru)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Au)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ku)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Iu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uu)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Du)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===fl||n===Fu||n===Bu){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===fl)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Hu||n===zu||n===Gu){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===fl)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===zn?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}}}var fh=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},et=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cm={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),y=this._getHandJoint(h,g);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=f.radius),y.visible=f!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;h.inputState.pinching&&d>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},mh=class extends bn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,m=null,g=t.getContextAttributes(),f=null,y=null,v=[],_=[],x=new le,R=null,w=new bt;w.layers.enable(1),w.viewport=new st;let E=new bt;E.layers.enable(2),E.viewport=new st;let k=[w,E],P=new fh;P.layers.enable(1),P.layers.enable(2);let U=null,$=null;function C(B){let K=_.indexOf(B.inputSource);if(K===-1)return;let pe=v[K];pe!==void 0&&(pe.update(B.inputSource,B.frame,h||a),pe.dispatchEvent({type:B.type,data:B.inputSource}))}function z(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",O);for(let B=0;B<v.length;B++){let K=_[B];K!==null&&(_[B]=null,v[B].disconnect(K))}U=null,$=null,e.setRenderTarget(f),p=null,d=null,u=null,n=null,y=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}function O(B){for(let K=0;K<B.removed.length;K++){let pe=B.removed[K],T=_.indexOf(pe);T>=0&&(_[T]=null,v[T].disconnect(pe))}for(let K=0;K<B.added.length;K++){let pe=B.added[K],T=_.indexOf(pe);if(T===-1){for(let D=0;D<v.length;D++){if(D>=_.length){_.push(pe),T=D;break}if(_[D]===null){_[D]=pe,T=D;break}}if(T===-1)break}let S=v[T];S&&S.connect(pe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new Er,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new Er,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new Er,v[B]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",z),n.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:n.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new qi(p.framebufferWidth,p.framebufferHeight,{format:ki,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,pe=null,T=null;g.depth&&(T=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Os:Gn,pe=g.stencil?zn:mn);let S={colorFormat:t.RGBA8,depthFormat:T,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(S),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qi(d.textureWidth,d.textureHeight,{format:ki,type:Hn,depthTexture:new mo(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let ne=new b,ue=new b;function ee(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;P.near=E.near=w.near=B.near,P.far=E.far=w.far=B.far,U===P.near&&$===P.far||(n.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,$=P.far);let K=B.parent,pe=P.cameras;ee(P,K);for(let T=0;T<pe.length;T++)ee(pe[T],K);pe.length===2?function(T,S,D){ne.setFromMatrixPosition(S.matrixWorld),ue.setFromMatrixPosition(D.matrixWorld);let q=ne.distanceTo(ue),L=S.projectionMatrix.elements,j=D.projectionMatrix.elements,I=L[14]/(L[10]-1),N=L[14]/(L[10]+1),F=(L[9]+1)/L[5],te=(L[9]-1)/L[5],Z=(L[8]-1)/L[0],M=(j[8]+1)/j[0],se=I*Z,H=I*M,G=q/(-Z+M),ae=G*-Z;S.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ae),T.translateZ(G),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let fe=I+G,ye=N+G,xe=se-ae,Pe=H+(q-ae),be=F*N/ye*fe,Se=te*N/ye*fe;T.projectionMatrix.makePerspective(xe,Pe,be,Se,fe,ye),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}(P,w,E):P.projectionMatrix.copy(w.projectionMatrix),function(T,S,D){D===null?T.matrix.copy(S.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(S.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*Bs*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}(B,P,K)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let Y=null,ie=new cp;ie.setAnimationLoop(function(B,K){if(c=K.getViewerPose(h||a),m=K,c!==null){let pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let T=!1;pe.length!==P.cameras.length&&(P.cameras.length=0,T=!0);for(let S=0;S<pe.length;S++){let D=pe[S],q=null;if(p!==null)q=p.getViewport(D);else{let j=u.getViewSubImage(d,D);q=j.viewport,S===0&&(e.setRenderTargetTextures(y,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(y))}let L=k[S];L===void 0&&(L=new bt,L.layers.enable(S),L.viewport=new st,k[S]=L),L.matrix.fromArray(D.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(D.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(q.x,q.y,q.width,q.height),S===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),T===!0&&P.cameras.push(L)}}for(let pe=0;pe<v.length;pe++){let T=_[pe],S=v[pe];T!==null&&S!==void 0&&S.update(T,K,h||a)}Y&&Y(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}};function Lm(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===Xt&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===Xt&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap){n.lightMap.value=r.lightMap;let o=s._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=r.lightMapIntensity*o,t(r.lightMap,n.lightMapTransform)}r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,hp(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}(n,r)):r.isMeshStandardMaterial?(i(n,r),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(n,r),r.isMeshPhysicalMaterial&&function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Xt&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),function(h,c){let u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far}(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}(n,r),r.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r,a,o):r.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Pm(s,e,t,i){let n={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let g=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=m[f];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return m[f]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function h(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[d.id]),delete n[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&(function(f){let y=f.uniforms,v=0,_=16;for(let R=0,w=y.length;R<w;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let k=0,P=E.length;k<P;k++){let U=E[k],$=Array.isArray(U.value)?U.value:[U.value];for(let C=0,z=$.length;C<z;C++){let O=h($[C]),ne=v%_;ne!==0&&_-ne<O.boundary&&(v+=_-ne),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=O.storage}}}let x=v%_;x>0&&(v+=_-x),f.__size=v,f.__cache={}}(u),p=function(f){let y=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=y;let v=s.createBuffer(),_=f.__size,x=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,_,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}(u),n[u.id]=p,u.addEventListener("dispose",c));let m=d.program;i.updateUBOMapping(u,m);let g=e.render.frame;r[u.id]!==g&&(function(f){let y=n[f.id],v=f.uniforms,_=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let x=0,R=v.length;x<R;x++){let w=Array.isArray(v[x])?v[x]:[v[x]];for(let E=0,k=w.length;E<k;E++){let P=w[E];if(l(P,x,E,_)===!0){let U=P.__offset,$=Array.isArray(P.value)?P.value:[P.value],C=0;for(let z=0;z<$.length;z++){let O=$[z],ne=h(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,U+C,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,C),C+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(u),r[u.id]=g)},dispose:function(){for(let u in n)s.deleteBuffer(n[u]);a=[],n={},r={}}}}var Nr=class{constructor(e={}){let{canvas:t=B0(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),g=null,f=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;let _=this,x=!1,R=0,w=0,E=null,k=-1,P=null,U=new st,$=new st,C=null,z=new Ce(0),O=0,ne=t.width,ue=t.height,ee=1,Y=null,ie=null,B=new st(0,0,ne,ue),K=new st(0,0,ne,ue),pe=!1,T=new zs,S=!1,D=!1,q=null,L=new Ne,j=new le,I=new b,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return E===null?ee:1}let te,Z,M,se,H,G,ae,fe,ye,xe,Pe,be,Se,Oe,Lt,Ee,$e,ze,ha,ls,ca,ii,Kt,hs,W=i;function ua(A,V){for(let J=0;J<A.length;J++){let oe=A[J],Q=t.getContext(oe,V);if(Q!==null)return Q}return null}try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$l}`),t.addEventListener("webglcontextlost",tu,!1),t.addEventListener("webglcontextrestored",iu,!1),t.addEventListener("webglcontextcreationerror",nu,!1),W===null){let V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),W=ua(V,A),W===null)throw ua(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function cr(){te=new df(W),Z=new lf(W,te,e),te.init(Z),ii=new Am(W,te,Z),M=new Em(W,te,Z),se=new mf(W),H=new vm,G=new Rm(W,te,M,H,Z,ii,se),ae=new cf(_),fe=new uf(_),ye=new sf(W,Z),Kt=new af(W,te,ye,Z),xe=new pf(W,ye,se,Kt),Pe=new _f(W,xe,ye,se),ha=new yf(W,Z,G),Ee=new hf(H),be=new gm(_,ae,fe,te,Z,Kt,Ee),Se=new Lm(_,H),Oe=new _m,Lt=new Sm(te,Z),ze=new rf(_,ae,fe,M,Pe,d,l),$e=new Tm(_,Pe,Z),hs=new Pm(W,se,Z,M),ls=new of(W,te,se,Z),ca=new ff(W,te,se,Z),se.programs=be.programs,_.capabilities=Z,_.extensions=te,_.properties=H,_.renderLists=Oe,_.shadowMap=$e,_.state=M,_.info=se}cr();let Dt=new mh(_,W);function tu(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function iu(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let A=se.autoReset,V=$e.enabled,J=$e.autoUpdate,oe=$e.needsUpdate,Q=$e.type;cr(),se.autoReset=A,$e.enabled=V,$e.autoUpdate=J,$e.needsUpdate=oe,$e.type=Q}function nu(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function su(A){let V=A.target;V.removeEventListener("dispose",su),function(J){(function(oe){let Q=H.get(oe).programs;Q!==void 0&&(Q.forEach(function(me){be.releaseProgram(me)}),oe.isShaderMaterial&&be.releaseShaderCache(oe))})(J),H.remove(J)}(V)}function ru(A,V,J){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,pa(A,V,J),A.side=xn,A.needsUpdate=!0,pa(A,V,J),A.side=2):pa(A,V,J)}this.xr=Dt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(ne,ue,!1))},this.getSize=function(A){return A.set(ne,ue)},this.setSize=function(A,V,J=!0){Dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ne=A,ue=V,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),J===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V))},this.getDrawingBufferSize=function(A){return A.set(ne*ee,ue*ee).floor()},this.setDrawingBufferSize=function(A,V,J){ne=A,ue=V,ee=J,t.width=Math.floor(A*J),t.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,V,J,oe){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,V,J,oe),M.viewport(U.copy(B).multiplyScalar(ee).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,V,J,oe){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,J,oe),M.scissor($.copy(K).multiplyScalar(ee).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){M.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,V=!0,J=!0){let oe=0;if(A){let Q=!1;if(E!==null){let me=E.texture.format;Q=me===np||me===ip||me===tp}if(Q){let me=E.texture.type,Ae=me===Hn||me===mn||me===Zh||me===zn||me===Qd||me===ep,Le=ze.getClearColor(),Fe=ze.getClearAlpha(),He=Le.r,Ge=Le.g,Ve=Le.b;Ae?(p[0]=He,p[1]=Ge,p[2]=Ve,p[3]=Fe,W.clearBufferuiv(W.COLOR,0,p)):(m[0]=He,m[1]=Ge,m[2]=Ve,m[3]=Fe,W.clearBufferiv(W.COLOR,0,m))}else oe|=W.COLOR_BUFFER_BIT}V&&(oe|=W.DEPTH_BUFFER_BIT),J&&(oe|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tu,!1),t.removeEventListener("webglcontextrestored",iu,!1),t.removeEventListener("webglcontextcreationerror",nu,!1),Oe.dispose(),Lt.dispose(),H.dispose(),ae.dispose(),fe.dispose(),Pe.dispose(),Kt.dispose(),hs.dispose(),be.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",au),Dt.removeEventListener("sessionend",ou),q&&(q.dispose(),q=null),An.stop()},this.renderBufferDirect=function(A,V,J,oe,Q,me){V===null&&(V=N);let Ae=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=function(wt,ni,$t,We,Xe){ni.isScene!==!0&&(ni=N),G.resetTextureUnits();let ur=ni.fog,rl=We.isMeshStandardMaterial?ni.environment:null,M0=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yi,fa=(We.isMeshStandardMaterial?fe:ae).get(We.envMap||rl),w0=We.vertexColors===!0&&!!$t.attributes.color&&$t.attributes.color.itemSize===4,S0=!!$t.attributes.tangent&&(!!We.normalMap||We.anisotropy>0),T0=!!$t.morphAttributes.position,E0=!!$t.morphAttributes.normal,R0=!!$t.morphAttributes.color,pu=yn;We.toneMapped&&(E!==null&&E.isXRRenderTarget!==!0||(pu=_.toneMapping));let fu=$t.morphAttributes.position||$t.morphAttributes.normal||$t.morphAttributes.color,A0=fu!==void 0?fu.length:0,Je=H.get(We),C0=f.state.lights;if(S===!0&&(D===!0||wt!==P)){let si=wt===P&&We.id===k;Ee.setState(We,wt,si)}let gi=!1;We.version===Je.__version?Je.needsLights&&Je.lightsStateVersion!==C0.state.version||Je.outputColorSpace!==M0||Xe.isBatchedMesh&&Je.batching===!1?gi=!0:Xe.isBatchedMesh||Je.batching!==!0?Xe.isInstancedMesh&&Je.instancing===!1?gi=!0:Xe.isInstancedMesh||Je.instancing!==!0?Xe.isSkinnedMesh&&Je.skinning===!1?gi=!0:Xe.isSkinnedMesh||Je.skinning!==!0?Xe.isInstancedMesh&&Je.instancingColor===!0&&Xe.instanceColor===null||Xe.isInstancedMesh&&Je.instancingColor===!1&&Xe.instanceColor!==null||Je.envMap!==fa||We.fog===!0&&Je.fog!==ur?gi=!0:Je.numClippingPlanes===void 0||Je.numClippingPlanes===Ee.numPlanes&&Je.numIntersection===Ee.numIntersection?(Je.vertexAlphas!==w0||Je.vertexTangents!==S0||Je.morphTargets!==T0||Je.morphNormals!==E0||Je.morphColors!==R0||Je.toneMapping!==pu||Z.isWebGL2===!0&&Je.morphTargetsCount!==A0)&&(gi=!0):gi=!0:gi=!0:gi=!0:gi=!0:(gi=!0,Je.__version=We.version);let Ln=Je.currentProgram;gi===!0&&(Ln=pa(We,ni,Xe));let mu=!1,dr=!1,al=!1,Ot=Ln.getUniforms(),Pn=Je.uniforms;if(M.useProgram(Ln.program)&&(mu=!0,dr=!0,al=!0),We.id!==k&&(k=We.id,dr=!0),mu||P!==wt){Ot.setValue(W,"projectionMatrix",wt.projectionMatrix),Ot.setValue(W,"viewMatrix",wt.matrixWorldInverse);let si=Ot.map.cameraPosition;si!==void 0&&si.setValue(W,I.setFromMatrixPosition(wt.matrixWorld)),Z.logarithmicDepthBuffer&&Ot.setValue(W,"logDepthBufFC",2/(Math.log(wt.far+1)/Math.LN2)),(We.isMeshPhongMaterial||We.isMeshToonMaterial||We.isMeshLambertMaterial||We.isMeshBasicMaterial||We.isMeshStandardMaterial||We.isShaderMaterial)&&Ot.setValue(W,"isOrthographic",wt.isOrthographicCamera===!0),P!==wt&&(P=wt,dr=!0,al=!0)}if(Xe.isSkinnedMesh){Ot.setOptional(W,Xe,"bindMatrix"),Ot.setOptional(W,Xe,"bindMatrixInverse");let si=Xe.skeleton;si&&(Z.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),Ot.setValue(W,"boneTexture",si.boneTexture,G)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Xe.isBatchedMesh&&(Ot.setOptional(W,Xe,"batchingTexture"),Ot.setValue(W,"batchingTexture",Xe._matricesTexture,G));let ol=$t.morphAttributes;(ol.position!==void 0||ol.normal!==void 0||ol.color!==void 0&&Z.isWebGL2===!0)&&ha.update(Xe,$t,Ln),(dr||Je.receiveShadow!==Xe.receiveShadow)&&(Je.receiveShadow=Xe.receiveShadow,Ot.setValue(W,"receiveShadow",Xe.receiveShadow)),We.isMeshGouraudMaterial&&We.envMap!==null&&(Pn.envMap.value=fa,Pn.flipEnvMap.value=fa.isCubeTexture&&fa.isRenderTargetTexture===!1?-1:1),dr&&(Ot.setValue(W,"toneMappingExposure",_.toneMappingExposure),Je.needsLights&&(vi=al,(Li=Pn).ambientLightColor.needsUpdate=vi,Li.lightProbe.needsUpdate=vi,Li.directionalLights.needsUpdate=vi,Li.directionalLightShadows.needsUpdate=vi,Li.pointLights.needsUpdate=vi,Li.pointLightShadows.needsUpdate=vi,Li.spotLights.needsUpdate=vi,Li.spotLightShadows.needsUpdate=vi,Li.rectAreaLights.needsUpdate=vi,Li.hemisphereLights.needsUpdate=vi),ur&&We.fog===!0&&Se.refreshFogUniforms(Pn,ur),Se.refreshMaterialUniforms(Pn,We,ee,ue,q),Ns.upload(W,uu(Je),Pn,G));var Li,vi;if(We.isShaderMaterial&&We.uniformsNeedUpdate===!0&&(Ns.upload(W,uu(Je),Pn,G),We.uniformsNeedUpdate=!1),We.isSpriteMaterial&&Ot.setValue(W,"center",Xe.center),Ot.setValue(W,"modelViewMatrix",Xe.modelViewMatrix),Ot.setValue(W,"normalMatrix",Xe.normalMatrix),Ot.setValue(W,"modelMatrix",Xe.matrixWorld),We.isShaderMaterial||We.isRawShaderMaterial){let si=We.uniformsGroups;for(let ll=0,L0=si.length;ll<L0;ll++)if(Z.isWebGL2){let gu=si[ll];hs.update(gu,Ln),hs.bind(gu,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}(A,V,J,oe,Q);M.setMaterial(oe,Ae);let Fe=J.index,He=1;if(oe.wireframe===!0){if(Fe=xe.getWireframeAttribute(J),Fe===void 0)return;He=2}let Ge=J.drawRange,Ve=J.attributes.position,ut=Ge.start*He,mi=(Ge.start+Ge.count)*He;me!==null&&(ut=Math.max(ut,me.start*He),mi=Math.min(mi,(me.start+me.count)*He)),Fe!==null?(ut=Math.max(ut,0),mi=Math.min(mi,Fe.count)):Ve!=null&&(ut=Math.max(ut,0),mi=Math.min(mi,Ve.count));let Hi=mi-ut;if(Hi<0||Hi===1/0)return;let Cn;Kt.setup(Q,oe,Le,J,Fe);let dt=ls;if(Fe!==null&&(Cn=ye.get(Fe),dt=ca,dt.setIndex(Cn)),Q.isMesh)oe.wireframe===!0?(M.setLineWidth(oe.wireframeLinewidth*F()),dt.setMode(W.LINES)):dt.setMode(W.TRIANGLES);else if(Q.isLine){let wt=oe.linewidth;wt===void 0&&(wt=1),M.setLineWidth(wt*F()),Q.isLineSegments?dt.setMode(W.LINES):Q.isLineLoop?dt.setMode(W.LINE_LOOP):dt.setMode(W.LINE_STRIP)}else Q.isPoints?dt.setMode(W.POINTS):Q.isSprite&&dt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)dt.renderInstances(ut,Hi,Q.count);else if(J.isInstancedBufferGeometry){let wt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ni=Math.min(J.instanceCount,wt);dt.renderInstances(ut,Hi,ni)}else dt.render(ut,Hi)},this.compile=function(A,V,J=null){J===null&&(J=A),f=Lt.get(J),f.init(),v.push(f),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),A!==J&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),f.setupLights(_._useLegacyLights);let oe=new Set;return A.traverse(function(Q){let me=Q.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){let Le=me[Ae];ru(Le,J,Q),oe.add(Le)}else ru(me,J,Q),oe.add(me)}),v.pop(),f=null,oe},this.compileAsync=function(A,V,J=null){let oe=this.compile(A,V,J);return new Promise(Q=>{function me(){oe.forEach(function(Ae){H.get(Ae).currentProgram.isReady()&&oe.delete(Ae)}),oe.size!==0?setTimeout(me,10):Q(A)}te.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let sl=null;function au(){An.stop()}function ou(){An.start()}let An=new cp;function lu(A,V,J,oe){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||T.intersectsSprite(A)){oe&&I.setFromMatrixPosition(A.matrixWorld).applyMatrix4(L);let me=Pe.update(A),Ae=A.material;Ae.visible&&g.push(A,me,Ae,J,I.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||T.intersectsObject(A))){let me=Pe.update(A),Ae=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),I.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),I.copy(me.boundingSphere.center)),I.applyMatrix4(A.matrixWorld).applyMatrix4(L)),Array.isArray(Ae)){let Le=me.groups;for(let Fe=0,He=Le.length;Fe<He;Fe++){let Ge=Le[Fe],Ve=Ae[Ge.materialIndex];Ve&&Ve.visible&&g.push(A,me,Ve,J,I.z,Ge)}}else Ae.visible&&g.push(A,me,Ae,J,I.z,null)}}let Q=A.children;for(let me=0,Ae=Q.length;me<Ae;me++)lu(Q[me],V,J,oe)}function hu(A,V,J,oe){let Q=A.opaque,me=A.transmissive,Ae=A.transparent;f.setupLightsView(J),S===!0&&Ee.setGlobalState(_.clippingPlanes,J),me.length>0&&function(Le,Fe,He,Ge){if((He.isScene===!0?He.overrideMaterial:null)!==null)return;let ut=Z.isWebGL2;q===null&&(q=new qi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Pr:Hn,minFilter:Ja,samples:ut?4:0})),_.getDrawingBufferSize(j),ut?q.setSize(j.x,j.y):q.setSize(no(j.x),no(j.y));let mi=_.getRenderTarget();_.setRenderTarget(q),_.getClearColor(z),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear();let Hi=_.toneMapping;_.toneMapping=yn,da(Le,He,Ge),G.updateMultisampleRenderTarget(q),G.updateRenderTargetMipmap(q);let Cn=!1;for(let dt=0,wt=Fe.length;dt<wt;dt++){let ni=Fe[dt],$t=ni.object,We=ni.geometry,Xe=ni.material,ur=ni.group;if(Xe.side===2&&$t.layers.test(Ge.layers)){let rl=Xe.side;Xe.side=Xt,Xe.needsUpdate=!0,cu($t,He,Ge,We,Xe,ur),Xe.side=rl,Xe.needsUpdate=!0,Cn=!0}}Cn===!0&&(G.updateMultisampleRenderTarget(q),G.updateRenderTargetMipmap(q)),_.setRenderTarget(mi),_.setClearColor(z,O),_.toneMapping=Hi}(Q,me,V,J),oe&&M.viewport(U.copy(oe)),Q.length>0&&da(Q,V,J),me.length>0&&da(me,V,J),Ae.length>0&&da(Ae,V,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function da(A,V,J){let oe=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,me=A.length;Q<me;Q++){let Ae=A[Q],Le=Ae.object,Fe=Ae.geometry,He=oe===null?Ae.material:oe,Ge=Ae.group;Le.layers.test(J.layers)&&cu(Le,V,J,Fe,He,Ge)}}function cu(A,V,J,oe,Q,me){A.onBeforeRender(_,V,J,oe,Q,me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(_,V,J,oe,A,me),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=Xt,Q.needsUpdate=!0,_.renderBufferDirect(J,V,oe,Q,A,me),Q.side=xn,Q.needsUpdate=!0,_.renderBufferDirect(J,V,oe,Q,A,me),Q.side=2):_.renderBufferDirect(J,V,oe,Q,A,me),A.onAfterRender(_,V,J,oe,Q,me)}function pa(A,V,J){V.isScene!==!0&&(V=N);let oe=H.get(A),Q=f.state.lights,me=f.state.shadowsArray,Ae=Q.state.version,Le=be.getParameters(A,Q.state,me,V,J),Fe=be.getProgramCacheKey(Le),He=oe.programs;oe.environment=A.isMeshStandardMaterial?V.environment:null,oe.fog=V.fog,oe.envMap=(A.isMeshStandardMaterial?fe:ae).get(A.envMap||oe.environment),He===void 0&&(A.addEventListener("dispose",su),He=new Map,oe.programs=He);let Ge=He.get(Fe);if(Ge!==void 0){if(oe.currentProgram===Ge&&oe.lightsStateVersion===Ae)return du(A,Le),Ge}else Le.uniforms=be.getUniforms(A),A.onBuild(J,Le,_),A.onBeforeCompile(Le,_),Ge=be.acquireProgram(Le,Fe),He.set(Fe,Ge),oe.uniforms=Le.uniforms;let Ve=oe.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ve.clippingPlanes=Ee.uniform),du(A,Le),oe.needsLights=function(ut){return ut.isMeshLambertMaterial||ut.isMeshToonMaterial||ut.isMeshPhongMaterial||ut.isMeshStandardMaterial||ut.isShadowMaterial||ut.isShaderMaterial&&ut.lights===!0}(A),oe.lightsStateVersion=Ae,oe.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMap.value=Q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotShadowMap.value=Q.state.spotShadowMap,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMap.value=Q.state.pointShadowMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=Ge,oe.uniformsList=null,Ge}function uu(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Ns.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function du(A,V){let J=H.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}An.setAnimationLoop(function(A){sl&&sl(A)}),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(A){sl=A,Dt.setAnimationLoop(A),A===null?An.stop():An.start()},Dt.addEventListener("sessionstart",au),Dt.addEventListener("sessionend",ou),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(V),V=Dt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,E),f=Lt.get(A,v.length),f.init(),v.push(f),L.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),T.setFromProjectionMatrix(L),D=this.localClippingEnabled,S=Ee.init(this.clippingPlanes,D),g=Oe.get(A,y.length),g.init(),y.push(g),lu(A,V,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,ie),this.info.render.frame++,S===!0&&Ee.beginShadows();let J=f.state.shadowsArray;if($e.render(J,A,V),S===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(g,A),f.setupLights(_._useLegacyLights),V.isArrayCamera){let oe=V.cameras;for(let Q=0,me=oe.length;Q<me;Q++){let Ae=oe[Q];hu(g,A,Ae,Ae.viewport)}}else hu(g,A,V);E!==null&&(G.updateMultisampleRenderTarget(E),G.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,V),Kt.resetDefaultState(),k=-1,P=null,v.pop(),f=v.length>0?v[v.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,V,J){H.get(A.texture).__webglTexture=V,H.get(A.depthTexture).__webglTexture=J;let oe=H.get(A);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=J===void 0,oe.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){let J=H.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){E=A,R=V,w=J;let oe=!0,Q=null,me=!1,Ae=!1;if(A){let Le=H.get(A);Le.__useDefaultFramebuffer!==void 0?(M.bindFramebuffer(W.FRAMEBUFFER,null),oe=!1):Le.__webglFramebuffer===void 0?G.setupRenderTarget(A):Le.__hasExternalTextures&&G.rebindTextures(A,H.get(A.texture).__webglTexture,H.get(A.depthTexture).__webglTexture);let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ae=!0);let He=H.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=Array.isArray(He[V])?He[V][J]:He[V],me=!0):Q=Z.isWebGL2&&A.samples>0&&G.useMultisampledRTT(A)===!1?H.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?He[J]:He,U.copy(A.viewport),$.copy(A.scissor),C=A.scissorTest}else U.copy(B).multiplyScalar(ee).floor(),$.copy(K).multiplyScalar(ee).floor(),C=pe;if(M.bindFramebuffer(W.FRAMEBUFFER,Q)&&Z.drawBuffers&&oe&&M.drawBuffers(A,Q),M.viewport(U),M.scissor($),M.setScissorTest(C),me){let Le=H.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,J)}else if(Ae){let Le=H.get(A.texture),Fe=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Le.__webglTexture,J||0,Fe)}k=-1},this.readRenderTargetPixels=function(A,V,J,oe,Q,me,Ae){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=H.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){M.bindFramebuffer(W.FRAMEBUFFER,Le);try{let Fe=A.texture,He=Fe.format,Ge=Fe.type;if(He!==ki&&ii.convert(He)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ve=Ge===Pr&&(te.has("EXT_color_buffer_half_float")||Z.isWebGL2&&te.has("EXT_color_buffer_float"));if(!(Ge===Hn||ii.convert(Ge)===W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)||Ge===gn&&(Z.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float"))||Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=A.width-oe&&J>=0&&J<=A.height-Q&&W.readPixels(V,J,oe,Q,ii.convert(He),ii.convert(Ge),me)}finally{let Fe=E!==null?H.get(E).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(A,V,J=0){let oe=Math.pow(2,-J),Q=Math.floor(V.image.width*oe),me=Math.floor(V.image.height*oe);G.setTexture2D(V,0),W.copyTexSubImage2D(W.TEXTURE_2D,J,0,0,A.x,A.y,Q,me),M.unbindTexture()},this.copyTextureToTexture=function(A,V,J,oe=0){let Q=V.image.width,me=V.image.height,Ae=ii.convert(J.format),Le=ii.convert(J.type);G.setTexture2D(J,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,oe,A.x,A.y,Q,me,Ae,Le,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,oe,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,oe,A.x,A.y,Ae,Le,V.image),oe===0&&J.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),M.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J,oe,Q=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let me=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Fe=ii.convert(oe.format),He=ii.convert(oe.type),Ge;if(oe.isData3DTexture)G.setTexture3D(oe,0),Ge=W.TEXTURE_3D;else{if(!oe.isDataArrayTexture&&!oe.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");G.setTexture2DArray(oe,0),Ge=W.TEXTURE_2D_ARRAY}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,oe.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,oe.unpackAlignment);let Ve=W.getParameter(W.UNPACK_ROW_LENGTH),ut=W.getParameter(W.UNPACK_IMAGE_HEIGHT),mi=W.getParameter(W.UNPACK_SKIP_PIXELS),Hi=W.getParameter(W.UNPACK_SKIP_ROWS),Cn=W.getParameter(W.UNPACK_SKIP_IMAGES),dt=J.isCompressedTexture?J.mipmaps[Q]:J.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,dt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,dt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,A.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,A.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?W.texSubImage3D(Ge,Q,V.x,V.y,V.z,me,Ae,Le,Fe,He,dt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ge,Q,V.x,V.y,V.z,me,Ae,Le,Fe,dt.data)):W.texSubImage3D(Ge,Q,V.x,V.y,V.z,me,Ae,Le,Fe,He,dt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ve),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ut),W.pixelStorei(W.UNPACK_SKIP_PIXELS,mi),W.pixelStorei(W.UNPACK_SKIP_ROWS,Hi),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Cn),Q===0&&oe.generateMipmaps&&W.generateMipmap(Ge),M.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){R=0,w=0,E=null,M.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Qh?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?Vn:rp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?pt:Yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},gh=class extends Nr{};gh.prototype.isWebGL1Renderer=!0;var go=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Gs=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jn=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},vh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ht=new b,vo=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$n=class extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,yr=new b,Rs=new b,As=new b,Cs=new le,_r=new le,gp=new Ne,Oa=new b,xr=new b,Fa=new b,Pd=new le,Fl=new le,kd=new le,Vs=class extends St{constructor(e=new $n){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vh(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new vo(i,3,0,!1)),Es.setAttribute("uv",new vo(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-As.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Ba(Oa.set(-.5,-.5,0),As,a,Rs,n,r),Ba(xr.set(.5,-.5,0),As,a,Rs,n,r),Ba(Fa.set(.5,.5,0),As,a,Rs,n,r),Pd.set(0,0),Fl.set(1,0),kd.set(1,1);let o=e.ray.intersectTriangle(Oa,xr,Fa,!1,yr);if(o===null&&(Ba(xr.set(-.5,.5,0),As,a,Rs,n,r),Fl.set(0,1),o=e.ray.intersectTriangle(Oa,Fa,xr,!1,yr),o===null))return;let l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:vn.getInterpolation(yr,Oa,xr,Fa,Pd,Fl,kd,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ba(s,e,t,i,n,r){Cs.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(_r.x=r*Cs.x-n*Cs.y,_r.y=n*Cs.x+r*Cs.y):_r.copy(Cs),s.copy(e),s.x+=_r.x,s.y+=_r.y,s.applyMatrix4(gp)}var Jv=new b,Kv=new b;var Zv=new b,Qv=new st,ey=new st,ty=new b,iy=new Ne,ny=new b,sy=new Ti,ry=new Ne,ay=new Wn;var oy=new Ne,ly=new Ne;var yo=class extends Nt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new Ne,Id=new Ne,Ha=[],Nd=new Si,km=new Ne,br=new Te,Mr=new Ti,Ur=class extends Te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,km)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Nd.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Nd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Mr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ls),Id.multiplyMatrices(i,Ls),br.matrixWorld=Id,br.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){let l=Ha[a];l.instanceId=r,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var yh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let r=i[this.index];n.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}};var hy=new Ne,cy=new Ne,uy=new Ne,dy=new Ne,py=new zs,fy=new Si,my=new Ti,gy=new b,vy=new yh,yy=new Te;var _y=new b,xy=new b,by=new Ne,My=new Wn,wy=new Ti;var Sy=new b,Ty=new b;var Dr=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Ne,_h=new Wn,za=new Ti,Ga=new b,_o=class extends St{constructor(e=new lt,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(n),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Ud.copy(n).invert(),_h.copy(e.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++){let p=h.getX(u);Ga.fromBufferAttribute(c,p),Dd(Ga,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++)Ga.fromBufferAttribute(c,u),Dd(Ga,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Dd(s,e,t,i,n,r,a){let o=_h.distanceSqToPoint(s);if(o<t){let l=new b;_h.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Xn=class extends ai{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,h=r-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(r-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new le:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],r=[],a=[],o=new b,l=new Ne;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new b)}r[0]=new b,a[0]=new b;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(kt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends hi{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new le,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xh=class extends Or{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var Va=new b,Bl=new tc,Hl=new tc,zl=new tc,bh=class extends hi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=n[(h-1)%r]:(Va.subVectors(n[0],n[1]).add(n[0]),o=Va);let u=n[h%r],d=n[(h+1)%r];if(this.closed||h+2<r?l=n[(h+2)%r]:(Va.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=Va),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),m<1e-4&&(m=g),f<1e-4&&(f=g),Bl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,g,f),Hl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,g,f),zl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,g,f)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Hl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),zl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Bl.calc(c),Hl.calc(c),zl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Od(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function Rr(s,e,t,i){return function(n,r){let a=1-n;return a*a*r}(s,e)+function(n,r){return 2*(1-n)*n*r}(s,t)+function(n,r){return n*n*r}(s,i)}function Ar(s,e,t,i,n){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,i)+function(r,a){return r*r*r*a}(s,n)}var xo=class extends hi{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ar(e,n.x,r.x,a.x,o.x),Ar(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends hi{constructor(e=new b,t=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ar(e,n.x,r.x,a.x,o.x),Ar(e,n.y,r.y,a.y,o.y),Ar(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bo=class extends hi{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wh=class extends hi{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends hi{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Rr(e,n.x,r.x,a.x),Rr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends hi{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Rr(e,n.x,r.x,a.x),Rr(e,n.y,r.y,a.y),Rr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Od(o,l.x,h.x,c.x,u.x),Od(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new le().fromArray(n))}return this}},To=Object.freeze({__proto__:null,ArcCurve:xh,CatmullRomCurve3:bh,CubicBezierCurve:xo,CubicBezierCurve3:Mh,EllipseCurve:Or,LineCurve:bo,LineCurve3:wh,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:wo,SplineCurve:So}),Sh=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new To[n.type]().fromJSON(n))}return this}},Fr=class extends Sh{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new bo(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Mo(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new xo(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new So(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let h=new Or(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eo=class s extends lt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=kt(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],h=[],c=1/t,u=new b,d=new le,p=new b,m=new b,g=new b,f=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:f=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-f,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-f,p.z=0*y,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(m)}for(let v=0;v<=t;v++){let _=i+v*c*n,x=Math.sin(_),R=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*R,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let E=l[3*w+0]*x,k=l[3*w+1],P=l[3*w+0]*R;h.push(E,k,P)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let x=_+v*e.length,R=x,w=x+e.length,E=x+e.length+1,k=x+1;r.push(R,w,k),r.push(E,k,w)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Yn=class s extends Eo{constructor(e=1,t=1,i=4,n=8){let r=new Fr;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},qn=class s extends lt{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new b,c=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class s extends lt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],u=[],d=[],p=[],m=0,g=[],f=i/2,y=0;function v(_){let x=m,R=new le,w=new b,E=0,k=_===!0?e:t,P=_===!0?1:-1;for(let $=1;$<=n;$++)u.push(0,f*P,0),d.push(0,P,0),p.push(.5,.5),m++;let U=m;for(let $=0;$<=n;$++){let C=$/n*l+o,z=Math.cos(C),O=Math.sin(C);w.x=k*O,w.y=f*P,w.z=k*z,u.push(w.x,w.y,w.z),d.push(0,P,0),R.x=.5*z+.5,R.y=.5*O*P+.5,p.push(R.x,R.y),m++}for(let $=0;$<n;$++){let C=x+$,z=U+$;_===!0?c.push(z,z+1,C):c.push(z+1,z,C),E+=3}h.addGroup(y,E,_===!0?1:2),y+=E}(function(){let _=new b,x=new b,R=0,w=(t-e)/i;for(let E=0;E<=r;E++){let k=[],P=E/r,U=P*(t-e)+e;for(let $=0;$<=n;$++){let C=$/n,z=C*l+o,O=Math.sin(z),ne=Math.cos(z);x.x=U*O,x.y=-P*i+f,x.z=U*ne,u.push(x.x,x.y,x.z),_.set(O,w,ne).normalize(),d.push(_.x,_.y,_.z),p.push(C,1-P),k.push(m++)}g.push(k)}for(let E=0;E<n;E++)for(let k=0;k<r;k++){let P=g[k][E],U=g[k+1][E],$=g[k+1][E+1],C=g[k][E+1];c.push(P,U,C),c.push(U,$,C),R+=6}h.addGroup(y,R,0),y+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mn=class s extends rt{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jn=class s extends lt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(d,p,m,g){let f=g+1,y=[];for(let v=0;v<=f;v++){y[v]=[];let _=d.clone().lerp(m,v/f),x=p.clone().lerp(m,v/f),R=f-v;for(let w=0;w<=R;w++)y[v][w]=w===0&&v===f?_:_.clone().lerp(x,w/R)}for(let v=0;v<f;v++)for(let _=0;_<2*(f-v)-1;_++){let x=Math.floor(_/2);_%2==0?(l(y[v][x+1]),l(y[v+1][x]),l(y[v][x])):(l(y[v][x+1]),l(y[v+1][x+1]),l(y[v+1][x]))}}function l(d){r.push(d.x,d.y,d.z)}function h(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function c(d,p,m,g){g<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,m=new b,g=new b;for(let f=0;f<t.length;f+=3)h(t[f+0],p),h(t[f+1],m),h(t[f+2],g),o(p,m,g,d)})(n),function(d){let p=new b;for(let m=0;m<r.length;m+=3)p.x=r[m+0],p.y=r[m+1],p.z=r[m+2],p.normalize().multiplyScalar(d),r[m+0]=p.x,r[m+1]=p.y,r[m+2]=p.z}(i),function(){let d=new b;for(let m=0;m<r.length;m+=3){d.x=r[m+0],d.y=r[m+1],d.z=r[m+2];let g=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-f)}var p;(function(){let m=new b,g=new b,f=new b,y=new b,v=new le,_=new le,x=new le;for(let R=0,w=0;R<r.length;R+=9,w+=6){m.set(r[R+0],r[R+1],r[R+2]),g.set(r[R+3],r[R+4],r[R+5]),f.set(r[R+6],r[R+7],r[R+8]),v.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),x.set(a[w+4],a[w+5]),y.copy(m).add(g).add(f).divideScalar(3);let E=u(y);c(v,w+0,m,E),c(_,w+2,g,E),c(x,w+4,f,E)}})(),function(){for(let m=0;m<a.length;m+=6){let g=a[m+0],f=a[m+2],y=a[m+4],v=Math.max(g,f,y),_=Math.min(g,f,y);v>.9&&_<.1&&(g<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),y<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Th=class s extends Jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Wa=new b,ja=new b,Gl=new b,$a=new vn,Eh=class extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(ks*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);let{a:g,b:f,c:y}=$a;if(g.fromBufferAttribute(o,h[0]),f.fromBufferAttribute(o,h[1]),y.fromBufferAttribute(o,h[2]),$a.getNormal(Gl),u[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let _=(v+1)%3,x=u[v],R=u[_],w=$a[c[v]],E=$a[c[_]],k=`${x}_${R}`,P=`${R}_${x}`;P in d&&d[P]?(Gl.dot(d[P].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(E.x,E.y,E.z)),d[P]=null):k in d||(d[k]={index0:h[v],index1:h[_],normal:Gl.clone()})}}for(let m in d)if(d[m]){let{index0:g,index1:f}=d[m];Wa.fromBufferAttribute(o,g),ja.fromBufferAttribute(o,f),p.push(Wa.x,Wa.y,Wa.z),p.push(ja.x,ja.y,ja.z)}this.setAttribute("position",new ke(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ws=class extends Fr{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Fr().fromJSON(n))}return this}},Im=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=Fd(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,p;if(i&&(r=function(m,g,f,y){let v=[],_,x,R,w,E;for(_=0,x=g.length;_<x;_++)R=g[_]*y,w=_<x-1?g[_+1]*y:m.length,E=Fd(m,R,w,y,!1),E===E.next&&(E.steiner=!0),v.push(zm(E));for(v.sort(Fm),_=0;_<v.length;_++)f=Bm(v[_],f);return f}(s,e,r,t)),s.length>80*t){o=h=s[0],l=c=s[1];for(let m=t;m<n;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Br(r,a,t,o,l,p,0),a};function Fd(s,e,t,i,n){let r,a;if(n===function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Bd(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Bd(r,s[r],s[r+1],a);return a&&Io(a,a.next)&&(zr(a),a=a.next),a}function Kn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!Io(i,i.next)&&ft(i.prev,i,i.next)!==0)i=i.next;else{if(zr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Br(s,e,t,i,n,r,a){if(!s)return;!a&&r&&function(c,u,d,p){let m=c;do m.z===0&&(m.z=Rh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,function(g){let f,y,v,_,x,R,w,E,k=1;do{for(y=g,g=null,x=null,R=0;y;){for(R++,v=y,w=0,f=0;f<k&&(w++,v=v.nextZ,v);f++);for(E=k;w>0||E>0&&v;)w!==0&&(E===0||!v||y.z<=v.z)?(_=y,y=y.nextZ,w--):(_=v,v=v.nextZ,E--),x?x.nextZ=_:g=_,_.prevZ=x,x=_;y=v}x.nextZ=null,k*=2}while(R>1)}(m)}(s,i,n,r);let o,l,h=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?Um(s,i,n,r):Nm(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),zr(s),s=l.next,h=l.next;else if((s=l)===h){a?a===1?Br(s=Dm(Kn(s),e,t),e,t,i,n,r,2):a===2&&Om(s,e,t,i,n,r):Br(Kn(s),e,t,i,n,r,1);break}}function Nm(s){let e=s.prev,t=s,i=s.next;if(ft(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>h?o:h:l>h?l:h,m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=p&&Ps(n,o,r,l,a,h,m.x,m.y)&&ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Um(s,e,t,i){let n=s.prev,r=s,a=s.next;if(ft(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,u=r.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,g=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,y=Rh(p,m,e,t,i),v=Rh(g,f,e,t,i),_=s.prevZ,x=s.nextZ;for(;_&&_.z>=y&&x&&x.z<=v;){if(_.x>=p&&_.x<=g&&_.y>=m&&_.y<=f&&_!==n&&_!==a&&Ps(o,c,l,u,h,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=g&&x.y>=m&&x.y<=f&&x!==n&&x!==a&&Ps(o,c,l,u,h,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=g&&_.y>=m&&_.y<=f&&_!==n&&_!==a&&Ps(o,c,l,u,h,d,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=f&&x!==n&&x!==a&&Ps(o,c,l,u,h,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dm(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!Io(n,r)&&vp(n,i,i.next,r)&&Hr(n,r)&&Hr(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),zr(i),zr(i.next),i=s=r),i=i.next}while(i!==s);return Kn(i)}function Om(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gm(a,o)){let l=yp(a,o);return a=Kn(a,a.next),l=Kn(l,l.next),Br(a,e,t,i,n,r,0),void Br(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function Fm(s,e){return s.x-e.x}function Bm(s,e){let t=function(n,r){let a,o=r,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=h&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===h))return a}o=o.next}while(o!==r);if(!a)return null;let u=a,d=a.x,p=a.y,m,g=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&Ps(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(m=Math.abs(c-o.y)/(h-o.x),Hr(o,n)&&(m<g||m===g&&(o.x>a.x||o.x===a.x&&Hm(a,o)))&&(a=o,g=m)),o=o.next;while(o!==u);return a}(s,e);if(!t)return e;let i=yp(t,s);return Kn(i,i.next),Kn(t,t.next)}function Hm(s,e){return ft(s.prev,s,e.prev)<0&&ft(e.next,s,s.next)<0}function Rh(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function zm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ps(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Gm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&vp(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(s,e)&&(Hr(s,e)&&Hr(e,s)&&function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(s,e)&&(ft(s.prev,s,e.prev)||ft(s,e.prev,e))||Io(s,e)&&ft(s.prev,s,s.next)>0&&ft(e.prev,e,e.next)>0)}function ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Io(s,e){return s.x===e.x&&s.y===e.y}function vp(s,e,t,i){let n=Ya(ft(s,e,t)),r=Ya(ft(s,e,i)),a=Ya(ft(t,i,s)),o=Ya(ft(t,i,e));return n!==r&&a!==o||!(n!==0||!Xa(s,t,e))||!(r!==0||!Xa(s,i,e))||!(a!==0||!Xa(t,s,i))||!(o!==0||!Xa(t,e,i))}function Xa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ya(s){return s>0?1:s<0?-1:0}function Hr(s,e){return ft(s.prev,s,s.next)<0?ft(s,e,s.next)>=0&&ft(s,s.prev,e)>=0:ft(s,e,s.prev)<0||ft(s,s.next,e)<0}function yp(s,e){let t=new Ah(s.i,s.x,s.y),i=new Ah(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bd(s,e,t,i){let n=new Ah(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ah(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var _n=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Hd(e),zd(i,e);let a=e.length;t.forEach(Hd);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,zd(i,t[l]);let o=Im(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function zd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Gr=class s extends lt{constructor(e=new Ws([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Vm,_,x,R,w,E,k=!1;y&&(_=y.getSpacedPoints(c),k=!0,d=!1,x=y.computeFrenetFrames(c,!1),R=new b,w=new b,E=new b),d||(f=0,p=0,m=0,g=0);let P=o.extractPoints(h),U=P.shape,$=P.holes;if(!_n.isClockWise(U)){U=U.reverse();for(let I=0,N=$.length;I<N;I++){let F=$[I];_n.isClockWise(F)&&($[I]=F.reverse())}}let C=_n.triangulateShape(U,$),z=U;for(let I=0,N=$.length;I<N;I++){let F=$[I];U=U.concat(F)}function O(I,N,F){return N||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(N,F)}let ne=U.length,ue=C.length;function ee(I,N,F){let te,Z,M,se=I.x-N.x,H=I.y-N.y,G=F.x-I.x,ae=F.y-I.y,fe=se*se+H*H,ye=se*ae-H*G;if(Math.abs(ye)>Number.EPSILON){let xe=Math.sqrt(fe),Pe=Math.sqrt(G*G+ae*ae),be=N.x-H/xe,Se=N.y+se/xe,Oe=((F.x-ae/Pe-be)*ae-(F.y+G/Pe-Se)*G)/(se*ae-H*G);te=be+se*Oe-I.x,Z=Se+H*Oe-I.y;let Lt=te*te+Z*Z;if(Lt<=2)return new le(te,Z);M=Math.sqrt(Lt/2)}else{let xe=!1;se>Number.EPSILON?G>Number.EPSILON&&(xe=!0):se<-Number.EPSILON?G<-Number.EPSILON&&(xe=!0):Math.sign(H)===Math.sign(ae)&&(xe=!0),xe?(te=-H,Z=se,M=Math.sqrt(fe)):(te=se,Z=H,M=Math.sqrt(fe/2))}return new le(te/M,Z/M)}let Y=[];for(let I=0,N=z.length,F=N-1,te=I+1;I<N;I++,F++,te++)F===N&&(F=0),te===N&&(te=0),Y[I]=ee(z[I],z[F],z[te]);let ie=[],B,K=Y.concat();for(let I=0,N=$.length;I<N;I++){let F=$[I];B=[];for(let te=0,Z=F.length,M=Z-1,se=te+1;te<Z;te++,M++,se++)M===Z&&(M=0),se===Z&&(se=0),B[te]=ee(F[te],F[M],F[se]);ie.push(B),K=K.concat(B)}for(let I=0;I<f;I++){let N=I/f,F=p*Math.cos(N*Math.PI/2),te=m*Math.sin(N*Math.PI/2)+g;for(let Z=0,M=z.length;Z<M;Z++){let se=O(z[Z],Y[Z],te);S(se.x,se.y,-F)}for(let Z=0,M=$.length;Z<M;Z++){let se=$[Z];B=ie[Z];for(let H=0,G=se.length;H<G;H++){let ae=O(se[H],B[H],te);S(ae.x,ae.y,-F)}}}let pe=m+g;for(let I=0;I<ne;I++){let N=d?O(U[I],K[I],pe):U[I];k?(w.copy(x.normals[0]).multiplyScalar(N.x),R.copy(x.binormals[0]).multiplyScalar(N.y),E.copy(_[0]).add(w).add(R),S(E.x,E.y,E.z)):S(N.x,N.y,0)}for(let I=1;I<=c;I++)for(let N=0;N<ne;N++){let F=d?O(U[N],K[N],pe):U[N];k?(w.copy(x.normals[I]).multiplyScalar(F.x),R.copy(x.binormals[I]).multiplyScalar(F.y),E.copy(_[I]).add(w).add(R),S(E.x,E.y,E.z)):S(F.x,F.y,u/c*I)}for(let I=f-1;I>=0;I--){let N=I/f,F=p*Math.cos(N*Math.PI/2),te=m*Math.sin(N*Math.PI/2)+g;for(let Z=0,M=z.length;Z<M;Z++){let se=O(z[Z],Y[Z],te);S(se.x,se.y,u+F)}for(let Z=0,M=$.length;Z<M;Z++){let se=$[Z];B=ie[Z];for(let H=0,G=se.length;H<G;H++){let ae=O(se[H],B[H],te);k?S(ae.x,ae.y+_[c-1].y,_[c-1].x+F):S(ae.x,ae.y,u+F)}}}function T(I,N){let F=I.length;for(;--F>=0;){let te=F,Z=F-1;Z<0&&(Z=I.length-1);for(let M=0,se=c+2*f;M<se;M++){let H=ne*M,G=ne*(M+1);q(N+te+H,N+Z+H,N+Z+G,N+te+G)}}}function S(I,N,F){l.push(I),l.push(N),l.push(F)}function D(I,N,F){L(I),L(N),L(F);let te=n.length/3,Z=v.generateTopUV(i,n,te-3,te-2,te-1);j(Z[0]),j(Z[1]),j(Z[2])}function q(I,N,F,te){L(I),L(N),L(te),L(N),L(F),L(te);let Z=n.length/3,M=v.generateSideWallUV(i,n,Z-6,Z-3,Z-2,Z-1);j(M[0]),j(M[1]),j(M[3]),j(M[1]),j(M[2]),j(M[3])}function L(I){n.push(l[3*I+0]),n.push(l[3*I+1]),n.push(l[3*I+2])}function j(I){r.push(I.x),r.push(I.y)}(function(){let I=n.length/3;if(d){let N=0,F=ne*N;for(let te=0;te<ue;te++){let Z=C[te];D(Z[2]+F,Z[1]+F,Z[0]+F)}N=c+2*f,F=ne*N;for(let te=0;te<ue;te++){let Z=C[te];D(Z[0]+F,Z[1]+F,Z[2]+F)}}else{for(let N=0;N<ue;N++){let F=C[N];D(F[2],F[1],F[0])}for(let N=0;N<ue;N++){let F=C[N];D(F[0]+ne*c,F[1]+ne*c,F[2]+ne*c)}}i.addGroup(I,n.length/3-I,0)})(),function(){let I=n.length/3,N=0;T(z,N),N+=z.length;for(let F=0,te=$.length;F<te;F++){let Z=$[F];T(Z,N),N+=Z.length}i.addGroup(I,n.length/3-I,1)}()}this.setAttribute("position",new ke(n,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new To[n.type]().fromJSON(n)),new s(i,e.options)}},Vm={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new le(r,a),new le(o,l),new le(h,c)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],m=e[3*n+2],g=e[3*r],f=e[3*r+1],y=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new le(a,1-l),new le(h,1-u),new le(d,1-m),new le(g,1-y)]:[new le(o,1-l),new le(c,1-u),new le(p,1-m),new le(f,1-y)]}},Ch=class s extends Jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Lh=class s extends Jn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Vr=class s extends lt{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new b,m=new le;for(let g=0;g<=n;g++){for(let f=0;f<=i;f++){let y=r+f/i*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),h.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,c.push(m.x,m.y)}u+=d}for(let g=0;g<n;g++){let f=g*(i+1);for(let y=0;y<i;y++){let v=y+f,_=v,x=v+i+1,R=v+i+2,w=v+1;o.push(_,x,w),o.push(x,R,w)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ph=class s extends lt{constructor(e=new Ws([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let u=n.length/3,d=c.extractPoints(t),p=d.shape,m=d.holes;_n.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,y=m.length;f<y;f++){let v=m[f];_n.isClockWise(v)===!0&&(m[f]=v.reverse())}let g=_n.triangulateShape(p,m);for(let f=0,y=m.length;f<y;f++){let v=m[f];p=p.concat(v)}for(let f=0,y=p.length;f<y;f++){let v=p[f];n.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let f=0,y=g.length;f<y;f++){let v=g[f],_=v[0]+u,x=v[1]+u,R=v[2]+u;i.push(_,x,R),l+=3}}this.setIndex(i),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},Ke=class s extends lt{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new b,d=new b,p=[],m=[],g=[],f=[];for(let y=0;y<=i;y++){let v=[],_=y/i,x=0;y===0&&a===0?x=.5/t:y===i&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let w=R/t;u.x=-e*Math.cos(n+w*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(n+w*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),f.push(w+x,1-_),v.push(h++)}c.push(v)}for(let y=0;y<i;y++)for(let v=0;v<t;v++){let _=c[y][v+1],x=c[y][v],R=c[y+1][v],w=c[y+1][v+1];(y!==0||a>0)&&p.push(_,x,w),(y!==i-1||l<Math.PI)&&p.push(x,R,w)}this.setIndex(p),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(g,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},kh=class s extends Jn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ei=class s extends lt{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new b,u=new b,d=new b;for(let p=0;p<=i;p++)for(let m=0;m<=n;m++){let g=m/n*r,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(g),u.y=(e+t*Math.cos(f))*Math.sin(g),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),c.x=e*Math.cos(g),c.y=e*Math.sin(g),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let g=(n+1)*p+m-1,f=(n+1)*(p-1)+m-1,y=(n+1)*(p-1)+m,v=(n+1)*p+m;a.push(g,f,v),a.push(f,y,v)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ih=class s extends lt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],u=new b,d=new b,p=new b,m=new b,g=new b,f=new b,y=new b;for(let _=0;_<=i;++_){let x=_/i*r*Math.PI*2;v(x,r,a,e,p),v(x+.01,r,a,e,m),f.subVectors(m,p),y.addVectors(m,p),g.crossVectors(f,y),y.crossVectors(g,f),g.normalize(),y.normalize();for(let R=0;R<=n;++R){let w=R/n*Math.PI*2,E=-t*Math.cos(w),k=t*Math.sin(w);u.x=p.x+(E*y.x+k*g.x),u.y=p.y+(E*y.y+k*g.y),u.z=p.z+(E*y.z+k*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(_/i),c.push(R/n)}}for(let _=1;_<=i;_++)for(let x=1;x<=n;x++){let R=(n+1)*(_-1)+(x-1),w=(n+1)*_+(x-1),E=(n+1)*_+x,k=(n+1)*(_-1)+x;o.push(R,w,k),o.push(w,E,k)}function v(_,x,R,w,E){let k=Math.cos(_),P=Math.sin(_),U=R/x*_,$=Math.cos(U);E.x=w*(2+$)*.5*k,E.y=w*(2+$)*P*.5,E.z=w*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Nh=class s extends lt{constructor(e=new wo(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,h=new le,c=new b,u=[],d=[],p=[],m=[];function g(f){c=e.getPointAt(f/t,c);let y=a.normals[f],v=a.binormals[f];for(let _=0;_<=n;_++){let x=_/n*Math.PI*2,R=Math.sin(x),w=-Math.cos(x);l.x=w*y.x+R*v.x,l.y=w*y.y+R*v.y,l.z=w*y.z+R*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)g(f);g(r===!1?t:0),function(){for(let f=0;f<=t;f++)for(let y=0;y<=n;y++)h.x=f/t,h.y=y/n,p.push(h.x,h.y)}(),function(){for(let f=1;f<=t;f++)for(let y=1;y<=n;y++){let v=(n+1)*(f-1)+(y-1),_=(n+1)*f+(y-1),x=(n+1)*f+y,R=(n+1)*(f-1)+y;m.push(v,_,R),m.push(_,x,R)}}()})(),this.setIndex(m),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new To[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Uh=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,r=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let u=l[h],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let g=0;g<3;g++){let f=o.getX(p+g),y=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,f),r.fromBufferAttribute(a,y),Gd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),r.fromBufferAttribute(a,u),Gd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Gd(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Ey=Object.freeze({__proto__:null,BoxGeometry:ht,CapsuleGeometry:Yn,CircleGeometry:qn,ConeGeometry:Mn,CylinderGeometry:rt,DodecahedronGeometry:Th,EdgesGeometry:Eh,ExtrudeGeometry:Gr,IcosahedronGeometry:Ch,LatheGeometry:Eo,OctahedronGeometry:Lh,PlaneGeometry:li,PolyhedronGeometry:Jn,RingGeometry:Vr,ShapeGeometry:Ph,SphereGeometry:Ke,TetrahedronGeometry:kh,TorusGeometry:ei,TorusKnotGeometry:Ih,TubeGeometry:Nh,WireframeGeometry:Uh});var Rt=class extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Wm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var js=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=r)break t;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dh=class extends js{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wu:r=e,o=2*t-i;break;case ju:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wu:a=e,l=2*i-t;break;case ju:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),g=m*m,f=g*m,y=-d*f+2*d*g-d*m,v=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-p)*f+(1.5+p)*g+.5*m,x=p*f-p*g;for(let R=0;R!==o;++R)r[R]=y*a[c+R]+v*a[h+R]+_*a[l+R]+x*a[u+R];return r}},Oh=class extends js{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}},Fh=class extends js{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qa(t,this.TimeBufferType),this.values=qa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qa(e.times,Array),values:qa(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Wm(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ml,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let m=t[c+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};wi.prototype.TimeBufferType=Float32Array,wi.prototype.ValueBufferType=Float32Array,wi.prototype.DefaultInterpolation=Za;var Fn=class extends wi{};Fn.prototype.ValueTypeName="bool",Fn.prototype.ValueBufferType=Array,Fn.prototype.DefaultInterpolation=Ka,Fn.prototype.InterpolantFactoryMethodLinear=void 0,Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Bh=class extends wi{};Bh.prototype.ValueTypeName="color";var Hh=class extends wi{};Hh.prototype.ValueTypeName="number";var zh=class extends js{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)oi.slerpFlat(r,0,a,h-o,a,h,l);return r}},Cr=class extends wi{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}};Cr.prototype.ValueTypeName="quaternion",Cr.prototype.DefaultInterpolation=Za,Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends wi{};Bn.prototype.ValueTypeName="string",Bn.prototype.ValueBufferType=Array,Bn.prototype.DefaultInterpolation=Ka,Bn.prototype.InterpolantFactoryMethodLinear=void 0,Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends wi{};Gh.prototype.ValueTypeName="vector";var Vh=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let p=h[u],m=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}},jm=new Vh,Wh=class{constructor(e){this.manager=e!==void 0?e:jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wh.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Zn=class extends $s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vl=new Ne,Vd=new b,Wd=new b,Wr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends Wr{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*Bs*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;i===t.fov&&n===t.aspect&&r===t.far||(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xs=class extends $s{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jd=new Ne,wr=new b,Wl=new b,$h=class extends Wr{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(wr),Wl.copy(i.position),Wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wl),i.updateMatrixWorld(),n.makeTranslation(-wr.x,-wr.y,-wr.z),jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}},jr=class extends $s{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $h}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xh=class extends Wr{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ry=new Ne,Ay=new Ne,Cy=new Ne;var Ao=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=$d();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function $d(){return(typeof performance>"u"?Date:performance).now()}var Ly=new b,Py=new oi,ky=new b,Iy=new b;var Ny=new b,Uy=new oi,Dy=new b,Oy=new b;var ic="\\[\\]\\.:\\/",$m=new RegExp("["+ic+"]","g"),jl="[^"+ic+"]",Xm="[^"+ic.replace("\\.","")+"]",Ym=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",jl)+/(WCOD+)?/.source.replace("WCOD",Xm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl)+"$"),qm=["material","materials","bones","map"],ot=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($m,"")}static parseTrackName(e){let t=Ym.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);qm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(s,e,t){let i=t||ot.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fy=new Float32Array(1);var Co=class{constructor(e,t,i=0,n=1/0){this.ray=new Wn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Yh(e,this,i,t),i.sort(Xd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Yh(e[n],this,i,t);return i.sort(Xd),i}};function Xd(s,e){return s.distance-e.distance}function Yh(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){let n=s.children;for(let r=0,a=n.length;r<a;r++)Yh(n[r],e,t,!0)}}var By=new le;var Hy=new b,zy=new b;var Gy=new b;var Vy=new b,Wy=new Ne,jy=new Ne;var $y=new b,Xy=new Ce,Yy=new Ce;var qy=new b,Jy=new b,Ky=new b;var Zy=new b,Qy=new Ir;var e1=new Si;var t1=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var Yt={skin:["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],hair:["Bald","Buzz","Short","Mohawk","Man bun","Long","Afro","Braids","Dreadlocks"],hairColor:["#15120f","#3b2416","#6e4524","#c9a25a","#9c3a1a","#9b9b9b"],beard:["None","Stubble","Goatee","Full"],shorts:["#c8102e","#1d4ed8","#151515","#f2f2f2","#15803d","#e8a91c","#7c3aed","#f97316"]},Rp=["Red","Blue","Black","White","Green","Gold","Purple","Orange"],Ap=["skin","hair","hairColor","beard","shorts"];function Qi(s){let e=String(s||"").split(",").map(Number),t={};return Ap.forEach((i,n)=>{let r=Yt[i].length;t[i]=Number.isInteger(e[n])?(e[n]%r+r)%r:0}),t}function cc(s){return Ap.map(e=>s[e]).join(",")}function Sn(s){let e=2166136261;for(let n of String(s))e=Math.imul(e^n.charCodeAt(0),16777619);let t=()=>(e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,(e>>>0)/4294967296),i=n=>Math.floor(t()*Yt[n].length);return{skin:i("skin"),hair:i("hair"),hairColor:Math.floor(t()*5),beard:i("beard"),shorts:i("shorts")}}function uc(){return Sn(Math.random().toString(36))}var Cp=["hips","spine","chest","neck","shL","elL","shR","elR","hipL","knL","hipR","knR"];function X(s,e={}){let t={hipsPos:[0,0,0]};for(let i of Cp)t[i]=[0,0,0];for(let i of[s,e])if(i)for(let n in i)t[n]=i[n].slice();return t}function Xr(s){let e={};for(let t in s){let i=s[t],n=t.endsWith("L")?t.slice(0,-1)+"R":t.endsWith("R")?t.slice(0,-1)+"L":t;e[n]=t==="hipsPos"?[-i[0],i[1],i[2]]:[i[0],-i[1],-i[2]]}return e}var dc=X(null,{hipsPos:[0,-.07,0],hips:[0,-.45,0],spine:[.08,.15,0],chest:[.06,.18,0],neck:[.12,.1,0],shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0],hipL:[-.32,.45,.1],knL:[.42,0,0],hipR:[.22,.35,-.12],knR:[.36,0,0]}),Ye={stance:dc,relaxed:X(null,{hipsPos:[0,-.01,0],neck:[.05,0,0],chest:[.02,0,0],shL:[.05,0,.14],elL:[-.35,0,0],shR:[.05,0,-.14],elR:[-.35,0,0],hipL:[0,0,.06],knL:[.04,0,0],hipR:[0,0,-.06],knR:[.04,0,0]}),dejected:X(null,{hipsPos:[0,-.02,0],spine:[.15,0,0],neck:[.55,0,0],shL:[.1,0,.08],elL:[-.25,0,0],shR:[-.6,0,-.1],elR:[-2.1,0,0],hipL:[0,0,.05],knL:[.05,0,0],hipR:[0,0,-.05],knR:[.05,0,0]}),victory:X(null,{hipsPos:[0,0,0],chest:[-.15,0,0],neck:[-.35,0,0],shL:[-2.75,0,.45],elL:[-.25,0,0],shR:[-2.75,0,-.45],elR:[-.25,0,0],hipL:[0,0,.12],hipR:[0,0,-.12]}),top:X(null,{hipsPos:[0,-.46,0],spine:[.55,0,0],chest:[.3,0,0],neck:[-.35,0,0],shL:[-1.2,0,.35],elL:[-.7,0,0],shR:[-1.2,0,-.35],elR:[-.7,0,0],hipL:[-.1,0,.3],knL:[1.75,0,0],hipR:[-.1,0,-.3],knR:[1.75,0,0]}),bottom:X(null,{hipsPos:[0,-.8,0],hips:[-1.42,0,0],spine:[-.05,0,0],neck:[.55,0,0],shL:[-1.5,0,.3],elL:[-.9,0,0],shR:[-1.5,0,-.3],elR:[-.9,0,0],hipL:[-1.15,0,.5],knL:[1.45,0,0],hipR:[-1.15,0,-.5],knR:[1.45,0,0]}),down:X(null,{hipsPos:[0,-.84,0],hips:[-1.52,.1,0],neck:[.1,.5,0],shL:[-.4,0,1.25],elL:[-.4,0,0],shR:[-.3,0,-1.1],elR:[-.9,0,0],hipL:[-.15,0,.18],knL:[.25,0,0],hipR:[-.45,0,-.1],knR:[.9,0,0]}),sitting:X(null,{hipsPos:[0,-.78,0],hips:[-.35,0,0],spine:[.25,0,0],neck:[.3,0,0],shL:[.6,0,.35],elL:[-.2,0,0],shR:[.6,0,-.35],elR:[-.2,0,0],hipL:[-1,0,.2],knL:[1.6,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0]}),ref:X(null,{hipsPos:[0,-.02,0],neck:[.05,0,0],shL:[-.15,0,.12],elL:[-1.3,0,0],shR:[-.15,0,-.12],elR:[-1.3,0,0],hipL:[0,0,.08],knL:[.08,0,0],hipR:[0,0,-.08],knR:[.08,0,0]})};Ye.refRaise=X(Ye.ref,{shR:[-2.75,0,-.45],elR:[-.2,0,0],neck:[-.1,0,0]});var we=dc,_p=X(we,{shL:[-1.6,.05,.02],elL:[-.05,0,0],chest:[.08,-.12,0],spine:[.12,.05,0]}),lc=X(we,{shR:[-1.62,-.1,.05],elR:[-.05,0,0],chest:[.12,.55,0],spine:[.15,.35,0],hipR:[.3,.6,-.1],hipsPos:[0,-.09,.06]}),Jm=X(we,{shL:[-.25,0,1.45],elL:[-1.55,0,0],chest:[.1,-.45,-.05],spine:[.1,-.2,0]}),xp=X(we,{chest:[.1,.35,0],shL:[-.5,0,.9],elL:[-1.6,0,0]}),Km=X(we,{hipsPos:[0,-.14,0],shR:[.25,0,-.15],elR:[-1.5,0,0],chest:[.25,.3,0]}),Zm=X(we,{hipsPos:[0,-.04,.04],shR:[-1.15,0,-.05],elR:[-1.85,0,0],chest:[-.12,.45,0]}),Qm=X(we,{shR:[-1.6,0,-.9],elR:[-1.2,0,0],chest:[0,-.2,.15]}),eg=X(we,{shR:[-2.05,.2,-.25],elR:[-.35,0,0],chest:[.4,.6,-.1],spine:[.25,.3,0],hipsPos:[0,-.12,.1]}),sc=X(we,{hips:[0,.2,0],hipR:[-.4,.3,-.5],knR:[1.4,0,0],shR:[.4,0,-.5],elR:[-.6,0,0]}),Do=X(we,{hipsPos:[0,-.04,0],hips:[0,.75,-.15],spine:[0,0,.25],chest:[.05,-.3,.12],hipL:[0,.4,.06],knL:[.12,0,0],hipR:[-.2,.85,-1.35],knR:[.15,0,0],shR:[.6,0,-.55],elR:[-.4,0,0],shL:[-.9,0,.3],elL:[-2,0,0]}),Oo=X(Do,{hips:[0,.75,-.35],spine:[0,0,.45],hipR:[-.2,.85,-1.95],knR:[.05,0,0]}),tg=X(we,{hipsPos:[0,-.1,0],hips:[0,.55,0],chest:[.1,-.25,.05],hipR:[-.3,.9,-.75],knR:[.25,0,0],shR:[.5,0,-.4],elR:[-.6,0,0]}),Lp=X(we,{hipsPos:[0,0,.12],hips:[0,-.1,0],spine:[-.15,0,0],neck:[.3,0,0],shL:[-1.55,0,-.15],elL:[-1.15,0,0],shR:[-1.55,0,.15],elR:[-1.15,0,0],hipR:[-1.75,0,0],knR:[1.9,0,0],hipL:[0,0,.06],knL:[.08,0,0]}),ig=X(Lp,{hipsPos:[0,.38,.25],hipL:[.5,0,.1],knL:[1.4,0,0],shL:[-.4,0,.6],elL:[-1.2,0,0]}),ng=X(we,{hipsPos:[0,-.15,0],spine:[.2,0,-.35],chest:[.15,0,-.2],neck:[.15,0,-.2]}),Ks=X(null,{hipsPos:[0,-.42,.25],hips:[.25,0,0],spine:[.75,0,0],chest:[.25,0,0],neck:[-.7,0,0],shL:[-1.35,0,.25],elL:[-.55,0,0],shR:[-1.35,0,-.25],elR:[-.55,0,0],hipL:[-1.15,0,.12],knL:[1.65,0,0],hipR:[.35,0,-.1],knR:[1.6,0,0]}),sg=X(null,{hipsPos:[0,-.55,-.15],hips:[.95,0,0],spine:[.2,0,0],neck:[-.6,0,0],shL:[-1.7,0,.3],elL:[-.4,0,0],shR:[-1.7,0,-.3],elR:[-.4,0,0],hipL:[.35,0,.3],knL:[.25,0,0],hipR:[.35,0,-.3],knR:[.25,0,0]}),Ei=X(we,{shL:[-1.7,0,-.2],elL:[-1.3,0,0],shR:[-1.7,0,.2],elR:[-1.3,0,0],spine:[.35,0,0],neck:[.25,0,0],hipsPos:[0,-.1,.1]}),rg=X(we,{shL:[-1.45,0,0],elL:[-.15,0,0],shR:[-1.45,0,0],elR:[-.15,0,0],chest:[.1,0,0]}),ag=Ye.top,Pp=Ye.bottom,rc=s=>X(s,{shL:[-.6,0,1],elL:[-.3,0,0]}),ac=s=>X(s,{shL:[-.2,0,1.25],elL:[-.1,0,0]}),og=X(Pp,{shL:[-1.2,0,-.2],elL:[-2.1,0,0],shR:[-1.2,0,.2],elR:[-2.1,0,0],neck:[.3,0,0]});function bp(s,e){return e?Xr(s):s}function tt(s,e){let t=X(s);for(let i in e)for(let n=0;n<3;n++)t[i][n]+=e[i][n];return t}var lg=-.45-Math.PI*2,hg={shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0]},vt=(s,e={})=>X(we,{spine:[.1,0,0],chest:[.05,0,0],...hg,hips:[0,s,0],...e}),Yr=X(we,{hips:[0,lg,0]}),cg=s=>[[vt(-1.7,{neck:[.1,1.2,0],hipsPos:[0,-.06,0]}),.08,24],[vt(-2.7,{spine:[.35,0,0],neck:[0,1.1,0],hipR:[-1.3,0,0],knR:[2,0,0],hipL:[-.1,0,0],knL:[.3,0,0]}),.08,26],[vt(-Math.PI,{spine:[s?.85:.55,0,0],chest:[.2,0,0],neck:[s?-.9:-.5,0,0],hipR:[s?1.85:1.4,0,0],knR:[.04,0,0],hipL:[-.15,0,0],knL:[.25,0,0]}),.22,30,s?"head":"body"],[vt(-4.4,{hipR:[-.9,0,0],knR:[1.8,0,0]}),.1,18],[vt(-5.6),.07,18],[Yr,.08,16]],ug=[[vt(-1.7,{neck:[.1,1.2,0]}),.08,24],[vt(-3.1,{hips:[0,-3.1,.25],hipR:[.1,0,-1],knR:[.7,0,0],neck:[0,1,0]}),.08,24],[vt(-4.5,{hips:[0,-4.5,.5],spine:[0,0,.2],hipR:[-.1,0,-1.85],knR:[.04,0,0],hipL:[0,0,.1],knL:[.25,0,0]}),.14,28,"hook"],[vt(-5.5,{hipR:[.1,0,-.6],knR:[.6,0,0]}),.09,18],[Yr,.1,16]],dg=s=>{let e=s?{hipsPos:[0,.3,.1],hipL:[-1,0,0],knL:[1.6,0,0],hipR:[-.6,0,0],knR:[1.4,0,0]}:{};return[[vt(-1.8,{neck:[.1,1.2,0],hipsPos:[0,s?-.18:-.05,0]}),.08,24],[vt(-3.2,{...e,neck:[0,1,0],shR:[-.6,0,-.9],elR:[-1.2,0,0]}),.07,26],[vt(-4.6,{...e,shR:[-.1,0,-1.55],elR:[-.1,0,0],chest:[0,-.2,0]}),.16,30,"hook"],[vt(-5.7),.08,18],[Yr,.08,16]]},pg=[[vt(-1.8,{neck:[.1,1.2,0]}),.08,24],[vt(-3.3,{neck:[0,1,0],shR:[-.2,0,-1.2],elR:[-2.4,0,0]}),.07,26],[vt(-4.3,{shR:[-.15,.4,-1.5],elR:[-2.55,0,0],chest:[.1,-.25,0]}),.16,30,"hook"],[vt(-5.6),.08,18],[Yr,.08,16]],fg=[[vt(-1.6,{hipsPos:[0,-.15,0],knL:[.7,0,0],knR:[.7,0,0]}),.08,22],[vt(-3,{hipsPos:[0,.3,.1],hipL:[-1.3,0,.1],knL:[1.9,0,0],hipR:[-.3,0,0],knR:[1,0,0]}),.08,24],[vt(-4.5,{hipsPos:[0,.42,.15],hipL:[-1,0,.1],knL:[1.9,0,0],hipR:[-1.2,0,-.9],knR:[.5,0,0]}),.08,24],[vt(-5.9,{hipsPos:[0,.38,.2],spine:[-.15,0,.2],hipL:[-.6,0,.1],knL:[1.8,0,0],hipR:[-2.1,0,-.55],knR:[.04,0,0]}),.14,28,"hook"],[vt(-6.5,{hipsPos:[0,.05,0],hipR:[-.6,0,0],knR:[.8,0,0]}),.1,18],[Yr,.08,16]],No=(s,e={})=>X(null,{hips:[0,-1.57,s],...e}),mg=[[X(we,{hips:[0,-1.4,0],hipsPos:[0,-.12,0],shL:[-2.9,0,.2],shR:[-2.9,0,-.2],elL:[-.1,0,0],elR:[-.1,0,0]}),.1,18],[No(-1.5,{hipsPos:[0,-.05,0],shL:[0,0,2.9],shR:[0,0,-2.9],hipL:[0,0,.6],hipR:[0,0,-.9]}),.1,22],[No(-3.1,{hipsPos:[0,.05,0],shL:[0,0,2.95],shR:[0,0,-2.95],hipL:[0,0,1],hipR:[0,0,-1]}),.1,22],[No(-4.3,{hipsPos:[0,.05,0],shL:[0,0,2.2],shR:[0,0,-2.6],hipL:[0,0,1.25],knL:[.04,0,0],hipR:[0,0,-.5]}),.16,28,"head"],[No(-5.6,{hipsPos:[0,-.15,0],hipL:[0,0,.5],knL:[.6,0,0],shL:[-1,0,.6],shR:[-1,0,-.6]}),.1,18],[X(we,{hips:[0,-.45,-Math.PI*2]}),.1,16]],Uo=(s,e={})=>X(null,{hips:[s,-.2,0],...e}),gg=[[X(we,{hipsPos:[0,-.2,0],spine:[.4,0,0],knL:[.8,0,0],knR:[.8,0,0]}),.1,18],[Uo(1.5,{hipsPos:[0,-.3,.1],shL:[-2.8,0,.3],shR:[-2.8,0,-.3],hipL:[.3,0,0],hipR:[.3,0,0]}),.1,22],[Uo(3,{hipsPos:[0,-.2,.2],shL:[-2.9,0,.3],shR:[-2.9,0,-.3],hipL:[-.3,0,.2],hipR:[.1,0,-.2]}),.1,22],[Uo(4.3,{hipsPos:[0,-.05,.3],hipR:[-.5,0,-.1],knR:[.04,0,0],hipL:[-1.4,0,.1],knL:[1.6,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.16,28,"head"],[Uo(5.6,{hipsPos:[0,-.2,.2],hipL:[-.4,0,0],knL:[.8,0,0],hipR:[-.6,0,0],knR:[.9,0,0]}),.1,18],[X(we,{hips:[Math.PI*2,-.45,0]}),.1,16]],vg=[[X(we,{hipsPos:[0,-.1,0],hipR:[-1.2,.2,0],knR:[1.5,0,0],shR:[.2,0,-.3],elR:[-1.4,0,0]}),.12,20],[X(lc,{hipsPos:[0,.22,.2],spine:[.35,.35,0],chest:[.15,.5,0],hipR:[.8,.3,-.1],knR:[.7,0,0],hipL:[-.4,0,.1],knL:[.9,0,0]}),.2,26,"head"]],Mp=s=>[[X(we,{hips:[0,-.1,0],spine:[-.05,0,0],chest:[0,0,0],hipR:[-1.7,0,0],knR:[2,0,0]}),.1,22],[X(we,{hips:[s?-.3:-.12,-.05,0],spine:[s?-.15:0,0,0],chest:[0,0,0],hipR:[s?-2.25:-1.55,0,0],knR:[.03,0,0],hipL:[.15,0,.05],knL:[.15,0,0]}),.2,28,s?"head":"body"]],yg=[[X(we,{hipL:[-1.6,0,0],knL:[1.9,0,0],hipsPos:[0,-.05,0]}),.1,22],[X(we,{hips:[-.12,-.35,0],hipL:[-1.55,0,0],knL:[.03,0,0],hipR:[.2,.35,-.1],knR:[.1,0,0]}),.2,28,"body"]],_g=[[X(we,{hipL:[-.9,0,.1],knL:[1.3,0,0]}),.09,22],[X(we,{hips:[-.1,-.2,0],hipL:[-.75,-.6,.1],knL:[.04,0,0],spine:[0,0,0]}),.18,28,"leg"]],xg=[[X(we,{hips:[-.3,-.2,0],spine:[-.15,0,0],hipR:[-2.85,0,-.35],knR:[.1,0,0],hipL:[.15,0,0],knL:[.1,0,0]}),.2,14],[X(we,{hips:[.15,-.2,0],spine:[.35,0,0],hipR:[-1.1,0,0],knR:[.04,0,0]}),.18,26,"head"]],bg=[[X(we,{hips:[0,-.9,-.35],hipL:[-1.3,0,.5],knL:[1.7,0,0],spine:[0,0,-.2]}),.1,22],[X(we,{hips:[0,-1.1,-.45],hipL:[-1,0,1.75],knL:[.04,0,0],spine:[0,0,-.25]}),.08,26],[X(we,{hips:[0,-.8,-.45],hipL:[-1.5,0,1.55],knL:[1.3,0,0],spine:[0,0,-.25]}),.16,26,"hook"]],Mg=[[X(we,{hips:[0,.35,0],hipR:[-.5,.6,-.45],knR:[1.3,0,0]}),.12,20],[X(Do,{hips:[0,.95,-.55],hipR:[-.55,.85,-2.1],knR:[1.1,0,0]}),.08,22],[X(Oo,{hips:[0,.9,-.55],hipR:[-.45,.85,-2.25],knR:[.04,0,0]}),.22,30,"hook"]],wp=X(Xr(we),{hipsPos:[0,-.04,0]}),Sp=s=>[[s?X(wp,{hipsPos:[0,-.2,0],knL:[.9,0,0],knR:[.9,0,0]}):wp,.1,22],[s?X(Xr(Oo),{hipsPos:[0,.35,.1],hipR:[-1.2,0,0],knR:[1.8,0,0]}):Xr(Do),.24,24,s?"hook":"body"]],wg=[[X(we,{hipsPos:[0,.2,.1],hipL:[-1.4,0,0],knL:[1.6,0,0],shL:[-.6,0,.5],elL:[-1,0,0]}),.14,18],[X(Oo,{hipsPos:[0,.5,.2],hipL:[.5,0,.1],knL:[1.2,0,0]}),.24,26,"hook"]];function Fo(s,e=1,t=!1,i=null){let n=String(s||"").toLowerCase();if(t)return Sg(n,e,i||Ye.top);let r=[_p,.14,26,"head"],a=[lc,.18,26,"head"],o=[Jm,.18,24,"hook"],l=[we,.06,26];if(n.includes("spinning back kick"))return{frames:cg(!n.includes("body")),fwd:.25};if(n.includes("spinning heel kick"))return{frames:ug,fwd:.15};if(n.includes("spinning back elbow"))return{frames:pg,fwd:.3};if(n.includes("spinning back fist")||n.includes("spinning"))return{frames:dg(n.includes("jumping")),fwd:n.includes("jumping")?.45:.2};if(n.includes("tornado"))return{frames:fg,fwd:.3,lungeFor:.5};if(n.includes("cartwheel"))return{frames:mg,fwd:.55,lungeFor:.7};if(n.includes("rolling thunder"))return{frames:gg,fwd:.6,lungeFor:.7};if(n.includes("superman"))return{frames:vg,fwd:.6,lungeFor:.4};if(n.includes("front kick to the face"))return{frames:Mp(!0),fwd:.1};if(n.includes("front kick"))return{frames:Mp(!1),fwd:.1};if(n.includes("teep"))return{frames:yg,fwd:.05};if(n.includes("oblique"))return{frames:_g,fwd:.05};if(n.includes("axe kick"))return{frames:xg,fwd:.1};if(n.includes("hook kick"))return{frames:bg,fwd:.1};if(n.includes("question mark"))return{frames:Mg,fwd:.1};if(n.includes("showtime"))return{frames:wg,fwd:.5,lungeFor:.45};if(n.includes("jumping switch kick"))return{frames:Sp(!0),fwd:.35,lungeFor:.4};if(n.includes("switch kick"))return{frames:Sp(!1),fwd:.1};if(n.includes("head kick"))return{frames:[[sc,.12,16],[Oo,.3,20,"hook"]],fwd:.1};if(n.includes("body kick"))return{frames:[[sc,.12,16],[Do,.3,20,"body"]],fwd:.1};if(n.includes("leg kick")||n.includes("calf kick"))return{frames:[[sc,.1,16],[tg,.26,20,"leg"]]};if(n.includes("flying knee"))return{frames:[[X(we,{hipsPos:[0,-.2,0]}),.15,16],[ig,.35,16,"head"]],fwd:.55};if(n.includes("knee"))return{frames:[[Ei,.2,14],[Lp,.24,20,"body"]],fwd:.35};if(n.includes("uppercut"))return{frames:[[Km,.14,18],[Zm,.22,24,"head"]],fwd:.15};if(n.includes("overhand")||n.includes("right hand"))return{frames:[[Qm,.16,16],[eg,.24,24,"head"]],fwd:.3};if(n.includes("1-2"))return{frames:[r,l,a,l,[xp,.08,20],o],fwd:.2};if(n.includes("hook"))return{frames:[[xp,.12,18],o],fwd:.15};if(n.includes("straight left"))return{frames:[[Xr(lc),.2,24,"head"]],fwd:.25};if(n.includes("jab")&&!n.includes("cross")&&e<2)return{frames:[[_p,.16,28,"head"]],fwd:.15};let h=[r,l,a];for(let c=2;c<Math.min(e,5);c++)h.push(l,c%2?o:a);return{frames:h,fwd:.25}}function Sg(s,e,t){let i=t===Ye.sideTop,n=t===Ye.backTop,r,a;if(n)r=tt(t,{chest:[0,-.3,0]}),Object.assign(r,X(r,{shR:[-1,0,-1.3],elR:[-1.5,0,0]})),a=tt(t,{chest:[.1,.35,0]}),Object.assign(a,X(a,{shR:[-1.6,0,-.15],elR:[-.3,0,0]}));else{if(i||s.includes("elbow"))return r=X(tt(t,{spine:[-.25,0,0]}),{shR:[-2.9,0,-.5],elR:[-2.6,0,0]}),a=X(tt(t,{spine:[.25,0,0],chest:[.15,.3,0]}),{shR:[-1.3,0,-.3],elR:[-2.6,0,0]}),{frames:[[r,.2,14],[a,.16,26,"ground"]]};r=X(tt(t,{spine:[-.35,0,0]}),{shR:[-2.6,0,-.3],elR:[-1.6,0,0]}),a=X(tt(t,{spine:[.3,0,0],chest:[.15,.25,0]}),{shR:[-1.05,0,-.1],elR:[-.1,0,0]})}let o=[];for(let l=0;l<Math.min(Math.max(e,1),4);l++){let h=l%2===1;o.push([bp(r,h),.13,18],[bp(a,h),.12,28,"ground"])}return{frames:o}}function Tg(s,e=1){let t=e;switch(s){case"body":return{chest:[.45*t,0,0],spine:[.25*t,0,0],neck:[.2*t,0,0],hipsPos:[0,-.05*t,-.08*t]};case"leg":return{knL:[.6*t,0,0],hipL:[.2*t,0,0],hipsPos:[0,-.07*t,0]};case"ground":return{neck:[0,.7*t,0],chest:[0,.2*t,0]};case"hook":return{neck:[-.15*t,.75*t,.25*t],chest:[-.1*t,.25*t,0],hipsPos:[0,0,-.05*t]};default:return{neck:[-.6*t,.15*t,0],chest:[-.28*t,0,0],spine:[-.12*t,0,0],hipsPos:[0,0,-.1*t]}}}Object.assign(Ye,{halfTop:X(ag,{hipsPos:[0,-.5,.05],spine:[.85,.2,0],chest:[.25,0,0],neck:[-.4,0,0],shL:[-1.4,0,.5],elL:[-.9,0,0],shR:[-1,0,-.6],elR:[-1.3,0,0],hipL:[-.3,0,.35],knL:[1.8,0,0],hipR:[.1,0,-.25],knR:[1.5,0,0]}),halfBottom:X(Pp,{hips:[-1.42,.35,.15],shL:[-1.7,0,.4],elL:[-1.6,0,0],shR:[-1.2,0,-.2],elR:[-2,0,0],hipL:[-.9,0,.35],knL:[1.7,0,0],hipR:[-.5,0,-.2],knR:[1.5,0,0]}),mountTop:X(null,{hipsPos:[0,-.52,0],spine:[.15,0,0],chest:[.05,0,0],neck:[.15,0,0],shL:[-.9,0,.35],elL:[-1.2,0,0],shR:[-.9,0,-.35],elR:[-1.2,0,0],hipL:[-.4,0,.62],knL:[1.7,0,0],hipR:[-.4,0,-.62],knR:[1.7,0,0]}),mountBottom:X(null,{hipsPos:[0,-.83,0],hips:[-1.52,0,0],neck:[.45,0,0],shL:[-1.8,0,.25],elL:[-1.9,0,0],shR:[-1.8,0,-.25],elR:[-1.9,0,0],hipL:[-.7,0,.25],knL:[1.4,0,0],hipR:[-.7,0,-.25],knR:[1.4,0,0]}),sideTop:X(null,{hipsPos:[0,-.5,0],spine:[1.15,0,0],chest:[.3,0,0],neck:[-.6,0,0],shL:[-1,0,-.5],elL:[-1,0,0],shR:[-1.2,0,.4],elR:[-1.4,0,0],hipL:[-.1,0,.35],knL:[1.75,0,0],hipR:[.25,0,-.25],knR:[1.5,0,0]}),sideBottom:X(null,{hipsPos:[0,-.83,0],hips:[-1.5,.2,0],neck:[.4,.4,0],shL:[-1.9,0,-.2],elL:[-2.2,0,0],shR:[-1.6,0,-.3],elR:[-1.8,0,0],hipL:[-.9,0,.2],knL:[1.6,0,0],hipR:[-.5,0,-.2],knR:[1.2,0,0]}),backTop:X(null,{hipsPos:[0,-.75,0],hips:[-.55,0,0],spine:[.4,0,0],chest:[.2,0,0],neck:[.1,0,0],shL:[-1.5,0,-.35],elL:[-1.7,0,0],shR:[-1.5,0,.35],elR:[-1.7,0,0],hipL:[-1,0,.6],knL:[1.2,0,0],hipR:[-1,0,-.6],knR:[1.2,0,0]}),backBottom:X(null,{hipsPos:[0,-.78,0],hips:[-.3,0,0],spine:[.15,0,0],neck:[.1,0,0],shL:[-1.9,0,-.3],elL:[-1.9,0,0],shR:[-1.9,0,.3],elR:[-1.9,0,0],hipL:[-1.2,0,.15],knL:[1,0,0],hipR:[-1.2,0,-.15],knR:[1,0,0]}),headlockTop:X(null,{hipsPos:[0,-.32,0],hips:[.3,0,0],spine:[.55,0,0],chest:[.2,0,0],neck:[-.5,0,0],shL:[-1,0,-.45],elL:[-1.7,0,0],shR:[-1,0,.45],elR:[-1.7,0,0],hipL:[-1.3,0,.25],knL:[1.75,0,0],hipR:[.4,0,-.2],knR:[1.65,0,0]}),headlockBottom:X(null,{hipsPos:[0,-.5,0],hips:[.2,0,0],spine:[1.05,0,0],chest:[.25,0,0],neck:[-.2,0,0],shL:[-1.1,0,.2],elL:[-1.2,0,0],shR:[-1.1,0,-.2],elR:[-1.2,0,0],hipL:[-.25,0,.15],knL:[1.75,0,0],hipR:[-.25,0,-.15],knR:[1.75,0,0]}),legsTop:X(null,{hipsPos:[0,-.78,0],hips:[-.45,0,0],spine:[.2,0,0],neck:[.2,0,0],shL:[.5,0,.4],elL:[-.3,0,0],shR:[.5,0,-.4],elR:[-.3,0,0],hipL:[-.9,0,.4],knL:[1.7,0,0],hipR:[-1.15,0,-.05],knR:[.05,0,0]}),legsBottom:X(null,{hipsPos:[0,-.8,0],hips:[-1.35,.3,0],neck:[.5,0,0],shL:[-1.2,0,-.4],elL:[-2,0,0],shR:[-1.2,0,.4],elR:[-2,0,0],hipL:[-1.3,0,.6],knL:[1.2,0,0],hipR:[-.9,0,-.2],knR:[1.5,0,0]}),armbarTop:X(null,{hipsPos:[0,-.82,0],hips:[-1.45,0,0],neck:[.5,0,0],shL:[-1.3,0,-.3],elL:[-1.3,0,0],shR:[-1.3,0,.3],elR:[-1.3,0,0],hipL:[-.75,0,.25],knL:[.35,0,0],hipR:[-.75,0,-.25],knR:[.35,0,0]})});Ye.armbarBottom=X(Ye.mountBottom,{shL:[-1.6,0,.5],elL:[-.05,0,0],shR:[-1.6,0,-.4],elR:[-1.2,0,0],hipL:[-.2,0,.2],knL:[.4,0,0]});var pc={guard:["top","bottom"],half:["halfTop","halfBottom"],side:["sideTop","sideBottom"],mount:["mountTop","mountBottom"],back:["backTop","backBottom"],headlock:["headlockTop","headlockBottom"],legs:["legsTop","legsBottom"],armbar:["armbarTop","armbarBottom"]};function ti(s,e,t,i,n){return Ye[s+"Att"]=e,Ye[s+"Def"]=i,{att:[[e,.3,8],[t,.35,6],[e,.25,8],[t,.45,6]],def:[[i,.3,9],[n,.3,9],[i,.3,9],[n,.35,9]],attHold:s+"Att",defHold:s+"Def"}}var mt=(s,e)=>X(Ye[s],e),Wt={rnc:(()=>{let s=mt("backTop",{shR:[-1.5,0,.75],elR:[-2.2,0,0],shL:[-1.7,0,-.45],elL:[-2.4,0,0],neck:[.3,-.4,0]}),e=mt("backBottom",{shL:[-2.4,0,-.6],elL:[-1.6,0,0],shR:[-2.4,0,.6],elR:[-1.6,0,0],neck:[-.4,0,0]});return{layout:"back",...ti("rnc",s,tt(s,{hips:[-.2,0,0],spine:[-.2,0,0]}),e,tt(e,{neck:[-.2,0,0],hipL:[.5,0,0],knL:[-.6,0,0]}))}})(),armTriangle:(()=>{let s=mt("sideTop",{spine:[1.35,0,0],neck:[.4,0,0],shL:[-1.3,0,-.7],elL:[-2.1,0,0],shR:[-1.3,0,.7],elR:[-2.1,0,0]}),e=mt("sideBottom",{shL:[-2.9,0,-.6],elL:[-.4,0,0],shR:[-1.5,0,-.3],elR:[-1.2,0,0],neck:[.3,.6,0]});return{layout:"side",...ti("armTri",s,tt(s,{hipsPos:[0,-.05,0],hipL:[-.4,0,0],hipR:[-.3,0,0]}),e,tt(e,{hipL:[.4,0,0],neck:[-.2,0,0]}))}})(),kimuraTop:(()=>{let s=mt("sideTop",{spine:[.8,0,0],shL:[-1,0,-.2],elL:[-1.6,0,0],shR:[-1,0,.4],elR:[-1.6,0,0]}),e=mt("sideBottom",{shL:[-.6,0,1.3],elL:[-1.8,0,0]});return{layout:"side",...ti("kimT",s,tt(s,{chest:[0,.4,0],spine:[-.2,0,0]}),e,X(e,{shL:[.3,0,1.4],hips:[-1.5,-.3,0]}))}})(),americana:(()=>{let s=mt("sideTop",{spine:[1.1,0,0],shL:[-1.4,0,-.2],elL:[-.6,0,0],shR:[-1.4,0,.3],elR:[-.8,0,0]}),e=mt("sideBottom",{shL:[-.2,0,1.5],elL:[-1.6,0,0]});return{layout:"side",...ti("amer",s,tt(s,{spine:[.15,0,0],chest:[0,.25,0]}),e,X(e,{shL:[0,0,1.75]}))}})(),darce:(()=>{let s=mt("headlockTop",{hips:[.3,.5,0],spine:[1,0,0],shL:[-1.2,0,-.6],elL:[-2,0,0],shR:[-1.2,0,.6],elR:[-2,0,0]}),e=mt("headlockBottom",{shL:[-2.6,0,-.4],elL:[-.8,0,0],neck:[.2,.4,0]});return{layout:"headlock",...ti("darce",s,tt(s,{chest:[-.2,.4,0],hipsPos:[0,-.1,0]}),e,tt(e,{spine:[.2,0,0]}))}})(),guillotineTop:(()=>{let s=mt("headlockTop",{hipsPos:[0,-.15,0],spine:[.5,0,0],shL:[-1,0,-.6],elL:[-2.1,0,0],shR:[-1,0,.6],elR:[-2.1,0,0]}),e=mt("headlockBottom",{spine:[.8,0,0],neck:[-.2,0,0],shL:[-1.6,0,-.4],elL:[-1.6,0,0],shR:[-1.6,0,.4],elR:[-1.6,0,0]});return{layout:"headlock",...ti("guilT",s,tt(s,{hips:[-.35,0,0],spine:[-.3,0,0],hipsPos:[0,.08,0]}),e,tt(e,{spine:[-.2,0,0],hipsPos:[0,.08,0]}))}})(),armbarTop:(()=>{let s=Ye.armbarTop,e=Ye.armbarBottom;return{layout:"armbar",...ti("abT",s,tt(s,{hips:[-.15,0,0],hipsPos:[0,.05,0],neck:[.2,0,0]}),e,tt(e,{hips:[0,.2,0],knR:[.5,0,0]}))}})(),triangle:(()=>{let s=mt("bottom",{hips:[-1.35,0,0],hipL:[-1.85,0,.35],knL:[1.75,0,0],hipR:[-1.6,0,-.3],knR:[1.3,0,0],shL:[-1.9,0,-.1],elL:[-1.2,0,0],shR:[-1.9,0,.1],elR:[-1.2,0,0]}),e=mt("top",{hipsPos:[0,-.42,0],spine:[.95,0,0],chest:[.3,0,0],neck:[.5,0,0],shL:[-.6,0,.3],elL:[-1.2,0,0],shR:[-1.3,0,-.4],elR:[-.2,0,0]});return{layout:"guard",...ti("tri",s,tt(s,{hipL:[-.2,0,0],knL:[.15,0,0],hips:[.15,0,0]}),e,tt(e,{spine:[-.25,0,0],neck:[-.2,0,0]}))}})(),armbarBottom:(()=>{let s=mt("bottom",{hips:[-1.4,.6,0],hipL:[-2.2,0,.35],knL:[.6,0,0],hipR:[-1.3,0,-.5],knR:[1.6,0,0],shL:[-1.6,0,.2],elL:[-.8,0,0],shR:[-1.6,0,-.2],elR:[-.8,0,0]}),e=mt("top",{spine:[.5,0,0],neck:[.3,0,0],shR:[-1.4,0,0],elR:[0,0,0]});return{layout:"guard",...ti("abB",s,tt(s,{hips:[-.15,0,0],hipsPos:[0,.08,0]}),e,tt(e,{spine:[.4,0,0]}))}})(),guillotineBottom:(()=>{let s=mt("bottom",{hips:[-1.2,0,0],spine:[.3,0,0],neck:[.4,0,0],shL:[-1.4,0,-.6],elL:[-2.1,0,0],shR:[-1.4,0,.6],elR:[-2.1,0,0],hipL:[-1.2,0,.5],knL:[1.5,0,0],hipR:[-1.2,0,-.5],knR:[1.5,0,0]}),e=mt("top",{hipsPos:[0,-.48,0],spine:[1.1,0,0],chest:[.35,0,0],neck:[.5,0,0],shL:[-1.2,0,.1],elL:[-1.6,0,0],shR:[-1.2,0,-.1],elR:[-1.6,0,0]});return{layout:"guard",...ti("guilB",s,tt(s,{hips:[-.25,0,0],spine:[-.4,0,0]}),e,tt(e,{spine:[.15,0,0]}))}})(),kimuraBottom:(()=>{let s=mt("bottom",{hips:[-.8,.5,0],spine:[.3,0,0],shL:[-1.1,0,-.3],elL:[-1.7,0,0],shR:[-1.3,0,.4],elR:[-1.6,0,0]}),e=mt("top",{spine:[.8,0,0],hips:[0,0,.2],shR:[.6,0,-.9],elR:[-1.6,0,0]});return{layout:"guard",...ti("kimB",s,tt(s,{hips:[-.4,.3,0]}),e,X(e,{shR:[.9,0,-1.1]}))}})(),omoplata:(()=>{let s=mt("bottom",{hips:[-.6,1,0],hipL:[-1.5,0,.8],knL:[1.7,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0],shL:[-1,0,-.4],elL:[-.6,0,0],shR:[-1,0,.3],elR:[-.6,0,0]}),e=mt("top",{hipsPos:[0,-.55,0],spine:[1.45,0,0],chest:[.2,0,0],neck:[.1,0,0],shR:[.9,0,-.5],elR:[-1.2,0,0],shL:[-1.4,0,.4],elL:[-.2,0,0]});return{layout:"guard",...ti("omo",s,tt(s,{spine:[.5,0,0]}),e,X(e,{shR:[1.3,0,-.6]}))}})(),heelHook:(()=>{let s=Ye.legsBottom,e=mt("legsTop",{hips:[-.7,0,0],shL:[-.3,0,.9],elL:[-.4,0,0]});return{layout:"legs",...ti("hh",s,tt(s,{hips:[0,-.6,0]}),e,tt(e,{hips:[-.3,0,0],shR:[-1.8,0,0]}))}})()};function kp(s,e){let t=String(s||"").toLowerCase();return t.includes("rear-naked")?Wt.rnc:t.includes("arm-triangle")?Wt.armTriangle:t.includes("d'arce")||t.includes("darce")?Wt.darce:t.includes("americana")?Wt.americana:t.includes("heel hook")?Wt.heelHook:t.includes("omoplata")?Wt.omoplata:t.includes("triangle")?Wt.triangle:t.includes("armbar")?e?Wt.armbarBottom:Wt.armbarTop:t.includes("guillotine")?e?Wt.guillotineBottom:Wt.guillotineTop:t.includes("kimura")?e?Wt.kimuraBottom:Wt.kimuraTop:e?Wt.triangle:Wt.rnc}var qs=X(null,{hipsPos:[0,-.45,-.1],hips:[-.9,0,0],neck:[.5,0,0],shL:[-1.6,0,.7],elL:[-.4,0,0],shR:[-1.6,0,-.7],elR:[-.4,0,0],hipL:[-.9,0,.1],knL:[.6,0,0],hipR:[-.7,0,-.1],knR:[.5,0,0]}),oc=X(we,{hips:[0,0,0],hipsPos:[0,.03,0],spine:[-.3,0,0],chest:[-.2,0,0],neck:[.35,0,0],shL:[-1.4,0,.7],elL:[-.5,0,0],shR:[-1.4,0,-.7],elR:[-.5,0,0],hipL:[0,0,.04],knL:[.05,0,0],hipR:[0,0,-.04],knR:[.05,0,0]}),Tp=X(Ks,{hipsPos:[0,-.3,.2],spine:[.85,0,0],neck:[-.6,0,0],shL:[-.9,0,-.35],elL:[-1.2,0,0],shR:[-.9,0,.35],elR:[-1.2,0,0],hipL:[-1,0,.1],knL:[1.3,0,0],hipR:[.7,0,-.1],knR:[.4,0,0]}),Js=X(Ei,{hips:[0,0,0],shL:[-1.25,0,-.65],elL:[-1.5,0,0],shR:[-1.25,0,.65],elR:[-1.5,0,0],spine:[.25,0,0],neck:[.1,.6,0]}),Ep=X(Ei,{hips:[0,0,0],spine:[-.15,0,0],neck:[.3,-.5,0],shL:[-1.5,0,.5],elL:[-1.3,0,0],shR:[-1.5,0,-.5],elR:[-1.3,0,0]}),Qn=(s,e,t,i={})=>X(null,{hipsPos:[0,s,e],hips:[t,0,0],neck:[.3,0,0],shL:[-1.2,0,.6],elL:[-.6,0,0],shR:[-1.2,0,-.6],elR:[-.6,0,0],hipL:[-.5,0,.15],knL:[.9,0,0],hipR:[-.2,0,-.15],knR:[.5,0,0],...i}),wn={"double-leg":{att:[[X(we,{hipsPos:[0,-.22,0]}),.1,18],[Ks,.3,14],[Tp,.4,10]],def:[[we,.32,9],[oc,.3,12],[qs,.3,9]],mat:.85,fwd:.6,dFwd:.1},"reactive takedown":{att:[[Ks,.25,18],[Tp,.35,12]],def:[[X(we,{hips:[0,.4,0],hipR:[-.6,.6,-.6],knR:[1,0,0]}),.22,14],[oc,.25,12],[qs,.3,9]],mat:.7,fwd:.65,dFwd:.05},"single-leg":{att:[[Ks,.3,14],[X(we,{hips:[0,.3,0],hipsPos:[0,-.2,0],spine:[.55,0,0],neck:[-.3,0,0],shL:[-.9,0,-.5],elL:[-1.4,0,0],shR:[-.9,0,.2],elR:[-1.4,0,0]}),.7,9]],def:[[we,.28,9],[X(we,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.06,0],spine:[-.15,0,0],shL:[-.4,0,1.2],shR:[-.4,0,-1.2]}),.18,14],[X(we,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.55,0,0],hipsPos:[0,-.04,0],spine:[-.1,0,0],shL:[-.6,0,1],shR:[-.6,0,-1]}),.16,14],[X(we,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.08,0],spine:[-.2,0,0],shL:[-.4,0,1.3],shR:[-.4,0,-1.3]}),.16,14],[qs,.3,9]],mat:1.1,fwd:.55,dFwd:.1},"body lock":{att:[[Ei,.25,12],[Js,.4,10],[X(Js,{hipR:[-.5,.3,.45],knR:[.1,0,0],spine:[.5,0,0]}),.3,12]],def:[[Ei,.3,12],[Ep,.35,10],[qs,.3,9]],mat:.95,fwd:.35,dFwd:.3},trip:{att:[[Ei,.3,12],[X(Js,{hipR:[-.6,.4,.5],knR:[.1,0,0],spine:[.4,.3,0]}),.35,12]],def:[[Ei,.3,12],[X(Ep,{hipL:[-.6,0,.3],knL:[.1,0,0]}),.25,12],[qs,.3,9]],mat:.8,fwd:.35,dFwd:.3},"ankle pick":{att:[[X(we,{hipsPos:[0,-.3,0],spine:[.7,0,0],neck:[-.5,0,0],shL:[-.7,0,.1],elL:[-.2,0,0],shR:[-1.5,0,-.2],elR:[-.6,0,0],knL:[1,0,0],knR:[.9,0,0]}),.35,14],[X(we,{hipsPos:[0,-.25,0],spine:[.35,0,0],shL:[.3,0,.2],elL:[-.3,0,0],shR:[-1.6,0,-.1],elR:[-.1,0,0]}),.3,12]],def:[[we,.3,9],[X(we,{hips:[0,0,0],hipL:[-.9,0,0],knL:[.1,0,0],spine:[-.4,0,0],neck:[.3,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.22,14],[qs,.3,9]],mat:.8,fwd:.45,dFwd:.15},suplex:{att:[[Ei,.25,12],[X(Js,{hipsPos:[0,-.18,0],knL:[.8,0,0],knR:[.8,0,0]}),.25,12],[X(Js,{hipsPos:[0,-.05,0],hips:[-.5,0,0],spine:[-.35,0,0],neck:[-.4,0,0],shL:[-2.3,0,-.4],shR:[-2.3,0,.4]}),.25,12],[X(Js,{hipsPos:[0,-.4,-.1],hips:[-1.2,0,0],spine:[-.4,0,0],neck:[-.5,0,0],shL:[-2.8,0,-.3],shR:[-2.8,0,.3]}),.25,12]],def:[[Ei,.28,12],[Qn(.12,.1,.1),.22,12],[Qn(.55,.45,.9),.22,12],[Qn(.2,.95,2.2,{neck:[.6,0,0]}),.22,12]],mat:.95,fwd:.35,dFwd:.35,big:!0},slam:{att:[[X(Ks,{hipsPos:[0,-.3,.1]}),.25,14],[X(we,{hips:[0,0,0],hipsPos:[0,0,0],spine:[-.1,0,0],neck:[-.2,0,0],shL:[-2.4,0,.3],elL:[-1,0,0],shR:[-2.4,0,-.3],elR:[-1,0,0],hipL:[0,0,.1],knL:[.1,0,0],hipR:[0,0,-.1],knR:[.1,0,0]}),.4,8],[X(we,{hips:[0,0,0],hipsPos:[0,-.35,.1],spine:[.95,0,0],shL:[-1.4,0,.2],elL:[-.4,0,0],shR:[-1.4,0,-.2],elR:[-.4,0,0],knL:[1.1,0,0],knR:[1.1,0,0]}),.25,18]],def:[[oc,.25,12],[Qn(.6,.35,-1.35,{hipL:[-.7,0,.2],knL:[1.2,0,0],hipR:[-.3,0,-.2],knR:[.6,0,0],shL:[-2,0,.8],shR:[-2,0,-.8]}),.4,7],[Qn(-.6,.35,-1.5),.25,22]],mat:.85,fwd:.55,dFwd:.15,big:!0},"judo throw":{att:[[X(Ei,{hips:[0,-1.6,0],neck:[0,1,0]}),.2,14],[X(we,{hips:[0,-2.9,0],hipsPos:[0,-.18,0],spine:[.35,0,0],neck:[0,.9,0],shL:[-1.4,0,.3],elL:[-.8,0,0],shR:[-1,0,-.5],elR:[-1.4,0,0],knL:[.6,0,0],knR:[.6,0,0]}),.25,14],[X(we,{hips:[0,-3,0],hipsPos:[0,-.25,0],spine:[1.1,0,0],chest:[.3,0,0],shL:[-.6,0,.6],shR:[-.8,0,-.6],knL:[.7,0,0],knR:[.4,0,0]}),.3,12]],def:[[Ei,.3,12],[Qn(.35,.35,.4,{hips:[.4,0,1.2]}),.25,12],[Qn(.1,.7,.2,{hips:[.2,0,2.6]}),.22,12]],mat:.85,fwd:.3,dFwd:.35,big:!0}};wn.shoot=wn["double-leg"];function Ip(s,e=""){let t=String(s||"").toLowerCase();if(wn[t])return wn[t];let i=String(e).toLowerCase();for(let n of Object.keys(wn))if(i.includes(n.split(" ")[0]))return wn[n];return i.includes("slams")?wn.slam:wn["double-leg"]}function fc(s){let e=Ye[s]||Ye.top;return[[tt(e,{spine:[.15,.2,0],shL:[-.25,0,.2],shR:[.2,0,-.1],hipL:[.1,0,.1]}),.45,6]]}var qt={slip:[[ng,.25,22]],shoot:[[X(we,{hipsPos:[0,-.22,0]}),.1,18],[Ks,.45,12]],sprawl:[[sg,.55,14]],touch:[[rg,.5,8]],block:[[og,.4,14]],getUp:[[Ye.sitting,.5,6],[X(we,{hipsPos:[0,-.35,0],spine:[.6,0,0],knL:[1.2,0,0],knR:[1.2,0,0]}),.4,6]],rocked:[[X(we,{hipsPos:[0,-.16,-.05],knL:[.85,0,0],knR:[.75,0,0],spine:[.1,0,.25],neck:[.25,.3,.3],shL:[-.3,0,.5],shR:[-.3,0,-.5]}),.55,7],[X(we,{hipsPos:[0,-.12,0],spine:[.1,0,-.2],neck:[.3,-.2,-.2]}),.45,6]],celebrate:[[Ye.victory,.35,8],[X(Ye.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10],[Ye.victory,.35,8],[X(Ye.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10]],waveOff:[[X(Ye.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.3,10],[X(Ye.ref,{shL:[-1.55,0,.1],elL:[-.1,0,0],shR:[-1.55,0,-.1],elR:[-.1,0,0]}),.3,10],[X(Ye.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.4,10]],tap:s=>{let e=Ye[s]||Ye.bottom;return[[rc(e),.16,22],[ac(e),.16,22],[rc(e),.16,22],[ac(e),.16,22],[rc(e),.16,22],[ac(e),.2,22]]}},hc={};function At(s,e){return hc[s]||(hc[s]=e())}function _t(s,e={}){return new Rt({color:s,roughness:.62,metalness:.02,...e})}function Ie(s,e,t,i=0,n=0,r=0){let a=new Te(s,e);return a.position.set(i,n,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}function $r(s,e,t,i,n){let r=new rt(e,t,i,10,1);r.translate(0,-i/2,0);let a=Ie(r,n,s),o=At("cap"+t.toFixed(3),()=>new Ke(t,10,8));return Ie(o,n,s,0,-i,0),a}function Zi(s,e,t,i){let n=new et;return n.position.set(e,t,i),s.add(n),n}var ci=class{constructor(e={}){let t=typeof e.look=="string"?Qi(e.look):e.look||Sn(e.name||"x");this.look=t;let i=e.weightClass??3,n={Wrestler:.05,"Jiu-Jitsu":.01,Striker:-.03}[e.style]||0,r=e.ref||e.casual,a=e.ref?.98:.9+i*.035+n,o=e.ref?1:.95+i*.016;this.width=a;let l=_t(Yt.skin[t.skin],{roughness:.55});this.skinM=l,this.skinBase=l.color.clone();let h=_t(Yt.hairColor[t.hairColor],{roughness:.9}),c=_t(r?e.pants||"#3c3f46":Yt.shorts[t.shorts],{roughness:.75}),u=_t(r?"#2a2c31":t.shorts===3?"#151515":"#f2f2f2",{roughness:.7}),d=_t("#161616",{roughness:.42}),p=_t(e.glove||"#c8102e",{roughness:.5}),m=_t(e.shirt||"#17181c",{roughness:.8}),g=_t("#120d0b",{roughness:.4}),f=r?m:l,y=(e.ref,l),v=new et;v.scale.setScalar(o),this.root=v;let _=Zi(v,0,.95,0);this.hipsHome=.95,Ie(new rt(.15*a,.165*a,.2,14),c,_,0,-.02,0).scale.z=.72,Ie(new rt(.152*a,.152*a,.035,14),r?_t("#111"):u,_,0,.085,0).scale.z=.72;let x=Zi(_,0,.08,0);Ie(new Ke(.14,16,12),f,x,0,.1,0).scale.set(1*a,1.15,.7);let w=Zi(x,0,.18,0);if(Ie(new Ke(.17,18,14),f,w,0,.1,0).scale.set(1.12*a,1.05,.68),r)Ie(new ei(.06,.015,6,14),m,w,0,.27,0).rotation.x=Math.PI/2;else{for(let z of[-1,1])Ie(At("pec",()=>new Ke(.09,12,10)),l,w,z*.075*a,.15,.06).scale.set(1.15*a,.75,.55);Ie(At("traps",()=>new Ke(.12,12,10)),l,w,0,.23,-.02).scale.set(1.25*a,.5,.6)}let k=Zi(w,0,.29,0);Ie(At("neck"+a.toFixed(2),()=>new rt(.05*a,.058*a,.09,10)),l,k,0,.03,0);let P=Zi(k,0,.12,.01);this.head=P,this.buildHead(P,l,h,g,t,e.ref);let U={};for(let C of["L","R"]){let O=Zi(w,(C==="L"?1:-1)*.19*a,.2,-.01);if(Ie(At("delt"+a.toFixed(2),()=>new Ke(.07*a,12,10)),r?m:l,O,0,-.01,0),r){let ue=new rt(.058,.052,.14,10);ue.translate(0,-.07,0),Ie(ue,m,O)}$r(O,.06*a,.047*a,.27,y);let ne=Zi(O,0,-.27,0);if($r(ne,.047*a,.037*a,.23,y),r)Ie(At("fist",()=>new Ke(.045,10,8)),l,ne,0,-.26,0);else{Ie(At("glove",()=>new Ke(.062,14,10)),d,ne,0,-.27,.005).scale.set(.95,1.15,1.1);let ee=Ie(At("band",()=>new rt(.047,.047,.045,12)),p,ne,0,-.2,0);ee.scale.z=1.05}U["sh"+C]=O,U["el"+C]=ne,U["hand"+C]=ne}let $={};for(let C of["L","R"]){let O=Zi(_,(C==="L"?1:-1)*.085*a,-.06,0),ne=new rt(.088*a,.08*a,.2,12);ne.translate(0,-.08,0),Ie(ne,c,O),r?$r(O,.075*a,.055,.42,c):$r(O,.085*a,.058*a,.42,l);let ue=Zi(O,0,-.42,0);$r(ue,r?.055:.058*a,.04,.42,r?c:l);let ee=new ht(.075,.05,.2);ee.translate(0,-.025,.05);let Y=Ie(ee,r?g:l,ue,0,-.44,0);Y.scale.x=a,$["hip"+C]=O,$["kn"+C]=ue}this.j={hips:_,spine:x,chest:w,neck:k,...U,...$},this.cur=X(Ye[e.ref?"ref":e.casual?"relaxed":"stance"]),this.base=e.ref?"ref":e.casual?"relaxed":"stance",this.queue=null,this.offsets=[],this.time=Math.random()*10,this.walk=0,this.speed=0,this.lastPos=new b,r||this.buildBelt(a),this.applyPose(this.cur)}buildBelt(e){let t=_t("#e8b93a",{roughness:.25,metalness:.85}),i=_t("#141414",{roughness:.6}),n=_t("#c8102e",{roughness:.2,metalness:.3}),r=(u,d,p,m,g)=>{let f=new et;f.position.set(d,p,m),u.add(f);let y=Ie(At(g?"beltPlate":"beltSide",()=>new rt(g?.085:.045,g?.085:.045,.018,g?20:12)),t,f);if(y.rotation.x=Math.PI/2,y.scale.set(1,1,g?.78:1),g){let v=Ie(At("beltGem",()=>new rt(.03,.03,.022,14)),n,f,0,0,.004);v.rotation.x=Math.PI/2,Ie(At("beltRim",()=>new ei(.075,.008,6,24)),t,f,0,0,.011).scale.set(1,.78,1)}return f},a=new et;a.position.y=.035,this.j.hips.add(a);let o=new rt(.172*e,.172*e,.075,24,1,!0);Ie(o,i,a).scale.z=.76,r(a,0,0,.172*e*.76+.006,!0);for(let u of[-1,1]){let d=r(a,u*.13*e,0,.09,!1);d.rotation.y=u*.85}let l=new et;l.position.set(0,.1,0),l.rotation.z=.55,this.j.chest.add(l);let h=new ei(.26,.024,6,30);h.scale(.66,1,1.6),Ie(h,i,l).rotation.y=Math.PI/2;let c=r(this.j.chest,-.02,.1,.125*e+.01,!0);c.rotation.z=.55,l.userData.plate=c,a.visible=l.visible=c.visible=!1,this.belt={waist:a,sash:l}}setDamage(e){if(e=Math.max(0,Math.min(1,e)),Math.abs(e-(this.damage||0))<.01&&this.wounds)return;this.damage=e,this.wounds||this.buildWounds();let t=this.wounds,i=(n,r)=>(n.visible=e>=r,n.visible);i(t.forehead,.22),i(t.foreheadDrip,.32),i(t.noseBlood,.3)&&(t.noseBlood.scale.y=.6+e),i(t.browCut,.42),i(t.cheekDrip,.48)&&(t.cheekDrip.scale.y=.5+e*.9),i(t.mouth,.55),i(t.browCut2,.72),i(t.swell,.35)&&t.swell.scale.setScalar(.6+(e-.35)*1.6),i(t.bruise,.45)&&(t.bruise.material.opacity=.25+e*.45);for(let[n,r]of t.chest.entries())i(r,.55+n*.1)&&(r.scale.y=.6+e);this.skinM&&(this.skinM.color.copy(this.skinBase).lerp(new Ce("#b5534a"),e*.1),this.skinM.roughness=.55-e*.12)}buildWounds(){let e=_t("#b3120f",{roughness:.22,metalness:.05,emissive:"#4a0000"}),t=_t("#d4201a",{roughness:.18,metalness:.05,emissive:"#5a0000"}),i=this.head,n=this.j.chest,r=(a,o,l,h,c,u,d,p=e,m=0)=>{let g=new ht(o,l,h);g.translate(0,-l/2,0);let f=new Te(g,p);return f.position.set(c,u,d),f.rotation.z=m,f.visible=!1,a.add(f),f};this.wounds={forehead:r(i,.034,.006,.006,.015,.082,.088,t,.25),foreheadDrip:r(i,.006,.05,.005,.022,.08,.091),browCut:r(i,.026,.007,.006,.036,.06,.09,t,-.3),cheekDrip:r(i,.007,.07,.005,.045,.055,.084),browCut2:r(i,.024,.006,.006,-.034,.06,.09,t,.3),noseBlood:r(i,.012,.035,.006,0,-.01,.1),mouth:r(i,.03,.025,.006,.006,-.04,.094),swell:(()=>{let a=new Te(new Ke(.024,10,8),_t("#8a4a5a",{roughness:.4}));return a.position.set(-.036,.035,.078),a.scale.set(1,.8,.7),a.visible=!1,i.add(a),a})(),bruise:(()=>{let a=new Te(new Ke(.03,10,8),new Rt({color:"#5a2b45",transparent:!0,opacity:.4,roughness:.5}));return a.position.set(.05,0,.07),a.scale.set(1,.8,.4),a.visible=!1,i.add(a),a})(),chest:[r(n,.007,.12,.004,.02,.27,.118),r(n,.006,.09,.004,-.03,.26,.115),r(n,.008,.15,.004,.06,.22,.104)]}}setInjured(e){if(e&&!this.bandage){let t=_t("#f4f1ea",{roughness:.9}),i=new et,n=new Te(new ei(.098,.016,6,24),t);n.rotation.x=Math.PI/2-.15,n.position.y=.06,n.scale.set(.95,1.05,1),i.add(n);let r=new Te(new ht(.05,.012,.01),t);r.position.set(0,.01,.105),i.add(r),this.head.add(i),this.bandage=i}this.bandage&&(this.bandage.visible=!!e),this.injured=!!e}setBelt(e){this.belt&&(this.belt.waist.visible=e==="waist",this.belt.sash.visible=this.belt.sash.userData.plate.visible=e==="shoulder")}buildHead(e,t,i,n,r,a){Ie(At("skull",()=>new Ke(.1,20,16)),t,e,0,.02,0).scale.set(.92,1.12,1.02),Ie(At("jaw",()=>new Ke(.075,14,10)),t,e,0,-.045,.03).scale.set(1,.8,1);let h=Ie(At("nose",()=>new Mn(.018,.045,6)),t,e,0,0,.1);h.rotation.x=Math.PI/2;for(let p of[-1,1]){Ie(At("eye",()=>new Ke(.011,8,6)),n,e,p*.034,.03,.085);let m=Ie(At("brow",()=>new ht(.036,.009,.012)),_t(Yt.hairColor[r.hairColor]),e,p*.035,.052,.088);m.rotation.z=-p*.12,Ie(At("ear",()=>new Ke(.022,8,6)),t,e,p*.092,.01,-.005).scale.set(.5,1,.8)}if(a){Ie(new Ke(.104,18,12,0,Math.PI*2,0,Math.PI*.45),_t("#8d8d8d",{roughness:.9}),e,0,.03,-.004).scale.set(.95,1.12,1.05);return}let c=Yt.hair[r.hair],u=p=>new Ke(.105,18,12,0,Math.PI*2,0,Math.PI*p);if(c==="Buzz"||c==="Short"||c==="Man bun"||c==="Long"){let p=Ie(u(c==="Buzz"?.42:.48),i,e,0,.03,-.006);p.scale.set(c==="Buzz"?.94:.99,c==="Buzz"?1.12:1.2,c==="Buzz"?1.05:1.1),p.rotation.x=-.25}if(c==="Short"){let p=Ie(new ht(.15,.03,.05),i,e,0,.1,.06);p.rotation.x=-.4}if(c==="Mohawk"){let p=Ie(new ht(.04,.07,.2),i,e,0,.1,-.015);p.rotation.x=-.2,Ie(u(.4),_t(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.4,roughness:1}),e,0,.03,-.006).scale.set(.95,1.12,1.05)}if(c==="Man bun"&&Ie(new Ke(.04,10,8),i,e,0,.1,-.1),c==="Long"){let p=Ie(new rt(.085,.06,.2,12,1,!1,Math.PI*.5,Math.PI),i,e,0,-.04,-.03);p.rotation.x=.1}if(c==="Afro"&&Ie(new Ke(.13,20,16),i,e,0,.09,-.035).scale.set(1.12,.95,1),c==="Braids"){let p=Ie(u(.5),_t(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.35,roughness:1}),e,0,.03,-.006);p.scale.set(.94,1.13,1.04),p.rotation.x=-.3;let m=g=>new ei(g,.0125,6,28,Math.PI*1.05);for(let g of[-.066,-.044,-.022,0,.022,.044,.066]){let f=new et;f.position.set(g,.02,0),f.scale.set(1,1.12,1.02),f.rotation.x=-.45,e.add(f);let y=Ie(m(.1*Math.sqrt(Math.max(.2,1-(g/.095)**2))+.004),i,f);y.rotation.y=-Math.PI/2}}if(c==="Dreadlocks"){let p=Ie(u(.5),i,e,0,.03,-.006);p.scale.set(.99,1.2,1.1),p.rotation.x=-.25;let m=y=>At("loc"+y,()=>{let v=new rt(.0125,.011,y,6,1);return v.translate(0,-y/2,0),v}),g=At("loctip",()=>new Ke(.0115,6,5)),f=(y,v,_,x,R)=>{let w=new et;w.position.set(Math.sin(y)*_*.95,v,Math.cos(y)*_*1.05-.006),w.rotation.y=y,e.add(w);let E=Ie(m(x),i,w);E.rotation.x=-R,Ie(g,i,E,0,-x,0)};for(let y=0;y<20;y++){let v=.95+y/19*(Math.PI*2-1.9),_=Math.abs(Math.cos(v))*(Math.cos(v)<0?1:0);f(v,.06,.098,_>.5?.24:.2,.22)}for(let y=0;y<14;y++){let v=.7+y/13*(Math.PI*2-1.4);f(v,.105,.08,.2,.42)}for(let y of[-.45,-.15,.2,.5])f(y,.115,.075,.085,.75)}let d=Yt.beard[r.beard];if(d!=="None"){let p=d==="Stubble"?_t(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.45,roughness:1}):i;d==="Goatee"?Ie(new Ke(.03,10,8),p,e,0,-.085,.075).scale.set(1,1.2,.7):Ie(new Ke(.079,14,10,0,Math.PI*2,Math.PI*.45,Math.PI*.55),p,e,0,-.035,.032).scale.set(1.04,d==="Full"?1.1:.95,1.03)}}setBase(e){this.base=e}play(e,t){!e||!e.length||(this.queue={frames:e,i:0,t:0},t&&(this.base=t))}get busy(){return!!this.queue}hit(e,t=1){this.offsets.push({o:Tg(e,t),t:0,dur:.38+.2*t})}stopActions(){this.queue=null}snap(){this.queue=null,this.offsets=[],this.cur=X(Ye[this.base]),this.applyPose(this.cur)}worldPoint(e){let t=new b,i=e==="head"?this.head:this.j[e]||this.j.chest;return(e==="handL"||e==="handR")&&t.set(0,-.27,0),i.localToWorld(t),t}update(e){this.time+=e;let t,i=9;if(this.queue){let l=this.queue;for(l.t+=e;l.i<l.frames.length&&l.t>l.frames[l.i][1];)l.t-=l.frames[l.i][1],l.i++;l.i>=l.frames.length?this.queue=null:(t=X(l.frames[l.i][0]),i=l.frames[l.i][2])}t||(t=this.idlePose());for(let l=0;l<3;l++){let h=t.hips[l]-this.cur.hips[l];Math.abs(h)>Math.PI&&(this.cur.hips[l]+=Math.PI*2*Math.round(h/(Math.PI*2)))}this.offsets=this.offsets.filter(l=>(l.t+=e)<l.dur);for(let l of this.offsets){let h=Math.sin(Math.min(1,l.t/l.dur)*Math.PI)*(l.t<.08?1.4:1);for(let c in l.o)for(let u=0;u<3;u++)t[c][u]+=l.o[c][u]*h}let n=this.root.position,r=this.lastPos.distanceTo(n);this.lastPos.copy(n);let a=e>0?r/e:0;if(this.speed+=(a-this.speed)*Math.min(1,e*8),this.speed>.15&&(this.base==="stance"||this.base==="relaxed"||this.base==="ref"||this.base==="dejected")&&!this.queue){this.walk+=r*9;let l=Math.min(1,this.speed/1.2)*.42;t.hipL[0]+=Math.sin(this.walk)*l,t.knL[0]+=Math.max(0,Math.cos(this.walk))*l*1.2,t.hipR[0]-=Math.sin(this.walk)*l,t.knR[0]+=Math.max(0,-Math.cos(this.walk))*l*1.2,t.hipsPos[1]+=Math.abs(Math.cos(this.walk))*.02,this.injured&&(t.hips[2]+=Math.max(0,Math.sin(this.walk))*.12,t.spine[0]+=.12)}let o=1-Math.exp(-e*i);for(let l in t)for(let h=0;h<3;h++)this.cur[l][h]+=(t[l][h]-this.cur[l][h])*o;this.applyPose(this.cur)}idlePose(){let e=X(Ye[this.base]||dc),t=this.time;if(this.base==="stance"){let i=Math.sin(t*5.2);e.hipsPos[1]+=i*.018,e.knL[0]+=i*.05,e.knR[0]+=i*.05,e.shL[0]+=Math.sin(t*2.6)*.06,e.shR[0]+=Math.sin(t*2.6+1.3)*.05,e.chest[1]+=Math.sin(t*1.3)*.06,e.neck[1]+=Math.sin(t*.9)*.05}else if(/top$|bottom$|Att$|Def$/i.test(this.base)){let i=Math.sin(t*2.2);e.spine[0]+=i*.04,e.shL[0]+=Math.sin(t*1.7)*.08,e.shR[0]+=Math.sin(t*1.9+1)*.08,e.hipL[2]+=Math.sin(t*1.3)*.05}else this.base==="victory"?(e.shL[2]+=Math.sin(t*4)*.12,e.shR[2]-=Math.sin(t*4)*.12):this.base==="relaxed"||this.base==="ref"||this.base==="dejected"?(e.chest[0]+=Math.sin(t*1.6)*.02,e.hipsPos[1]+=Math.sin(t*1.6)*.004):this.base==="down"&&(e.neck[1]+=Math.sin(t*.7)*.08);return e}applyPose(e){let t=this.j;t.hips.position.set(e.hipsPos[0],this.hipsHome+e.hipsPos[1],e.hipsPos[2]);for(let i of Cp)t[i].rotation.set(e[i][0],e[i][1],e[i][2])}dispose(){let e=new Set(Object.values(hc));this.root.traverse(t=>{t.isMesh&&(e.has(t.geometry)||t.geometry.dispose(),t.material.dispose())}),this.root.removeFromParent()}};var Up="cc3d_sound",de=null,ts,Kr,en,Bo,Ho,ui=!0,vc=.8;try{let s=JSON.parse(localStorage.getItem(Up)||"{}");s.on===!1&&(ui=!1),typeof s.music=="number"&&(vc=s.music)}catch{}var qr={name:null,intensity:1},ct=null,Eg=null,Di=null,Tn=s=>440*Math.pow(2,(s-69)/12);function Rg(){try{localStorage.setItem(Up,JSON.stringify({on:ui,music:vc}))}catch{}}function Ag(){if(de)return;let s=window.AudioContext||window.webkitAudioContext;if(!s)return;de=new s;let e=de.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,ts=de.createGain(),ts.gain.value=ui?1:0,ts.connect(e).connect(de.destination),Kr=de.createGain(),Kr.gain.value=.34*vc,Kr.connect(ts),en=de.createGain(),en.gain.value=.9,en.connect(ts),Bo=de.createGain(),Bo.gain.value=.5,Bo.connect(ts),Ho=de.createBuffer(1,de.sampleRate*2,de.sampleRate);let t=Ho.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;Eg=setInterval(Og,25)}function Cg(){Ag(),de&&(de.state==="suspended"&&de.resume(),qr.name&&(!ct||ct.name!==qr.name)&&Bp(qr.name,qr.intensity))}["pointerdown","keydown","touchstart"].forEach(s=>window.addEventListener(s,Cg,{passive:!0}));function yc(){return ui}function Dp(){return ui=!ui,Rg(),de&&ts.gain.setTargetAtTime(ui?1:0,de.currentTime,.05),!ui&&"speechSynthesis"in window&&speechSynthesis.cancel(),ui}function di(s,e,t,i,n){s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(2e-4,t),e+i),s.gain.exponentialRampToValueAtTime(1e-4,e+i+n)}function Zs(s,e,t){let i=de.createBufferSource();return i.buffer=Ho,i.connect(t),i.start(s,Math.random()*1.5,e+.05),i}function pi(s,e,t,i,n){let r=de.createOscillator();return r.type=s,r.frequency.setValueAtTime(e,t),r.connect(n),r.start(t),r.stop(t+i+.05),r}function mc(s,e,t){let i=de.createGain();i.connect(t),di(i,s,e,.002,.32),pi("sine",150,s,.4,i).frequency.exponentialRampToValueAtTime(42,s+.12)}function Op(s,e,t){let i=de.createGain(),n=de.createBiquadFilter();n.type="highpass",n.frequency.value=1400,n.connect(i).connect(t),di(i,s,e*.8,.002,.17),Zs(s,.2,n);let r=de.createGain();r.connect(t),di(r,s,e*.5,.002,.09),pi("triangle",190,s,.12,r)}function gc(s,e,t,i=!1){let n=de.createGain(),r=de.createBiquadFilter();r.type="highpass",r.frequency.value=7500,r.connect(n).connect(t),di(n,s,e,.001,i?.22:.035),Zs(s,i?.3:.06,r)}function Lg(s,e,t){let i=de.createGain(),n=de.createBiquadFilter();n.type="highpass",n.frequency.value=4e3,n.connect(i).connect(t),di(i,s,e,.002,1.4),Zs(s,1.5,n)}function Jr(s,e,t,i,n,r){let a=de.createGain(),o=de.createBiquadFilter();o.type="lowpass",o.Q.value=r?6:2,o.frequency.setValueAtTime(r?1600:900,s),o.frequency.exponentialRampToValueAtTime(r?260:220,s+t),o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+.008),a.gain.setValueAtTime(i,s+t*.7),a.gain.exponentialRampToValueAtTime(1e-4,s+t),pi(r?"sawtooth":"triangle",Tn(e),s,t,o),r&&pi("square",Tn(e-12),s,t,o)}function Fp(s,e,t,i,n,r=900){let a=de.createGain(),o=de.createBiquadFilter();o.type="lowpass",o.frequency.value=r,o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+Math.min(.4,t*.3)),a.gain.setValueAtTime(i,s+t*.75),a.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let l of e)for(let h of[-7,7]){let c=pi("sawtooth",Tn(l),s,t,o);c.detune.value=h}}function Np(s,e,t,i,n,r="triangle"){let a=de.createGain();a.connect(n),di(a,s,i,.004,t),pi(r,Tn(e),s,t,a);let o=de.createGain();o.connect(n),di(o,s,i*.3,.002,t*.4),pi("sine",Tn(e+12),s,t*.5,o)}var es=null;function Pg(){if(es)return es;es=de.createWaveShaper();let s=new Float32Array(1024);for(let t=0;t<s.length;t++){let i=t/s.length*2-1;s[t]=Math.tanh(i*4)}es.curve=s;let e=de.createGain();return e.gain.value=.35,es.connect(e).connect(Kr),es._post=e,es}function kg(s,e,t,i){let n=de.createGain(),r=de.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,n.connect(r).connect(Pg()),n.gain.setValueAtTime(1e-4,s),n.gain.exponentialRampToValueAtTime(i,s+.005),n.gain.exponentialRampToValueAtTime(i*.5,s+t*.6),n.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let a of[e,e+7,e+12])pi("sawtooth",Tn(a),s,t,n)}function Ig(s,e,t,i,n){let r=de.createGain(),a=de.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,a.connect(r).connect(n),r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(i,s+.02),r.gain.setValueAtTime(i,s+t*.8),r.gain.exponentialRampToValueAtTime(1e-4,s+t);let o=pi("square",Tn(e),s,t,a),l=de.createOscillator(),h=de.createGain();l.frequency.value=5.5,h.gain.value=9,l.connect(h).connect(o.detune),l.start(s+.12),l.stop(s+t+.05)}var Ng={bpm:86,swing:.14,chords:[[45,57,60,64,67],[41,57,60,64,65],[48,55,59,64,67],[43,55,59,62,67],[38,57,60,62,65],[45,55,60,64,67],[41,57,60,65,69],[40,56,59,62,64]],melody:[[76,null,null,74,null,null,72,null,69,null,null,null,72,null,74,null],[72,null,null,null,69,null,67,null,null,null,69,null,null,null,null,null],[76,null,79,null,76,null,74,null,72,null,null,74,null,72,null,null],[71,null,null,null,74,null,null,null,67,null,null,null,null,null,null,null],[74,null,null,72,null,69,null,null,72,null,74,null,77,null,76,null],[76,null,null,null,72,null,69,null,null,null,72,null,74,null,null,null],[77,null,76,null,72,null,69,null,72,null,null,null,69,null,67,null],[68,null,null,null,71,null,null,null,74,null,76,null,null,null,null,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4;([0,7,10].includes(r)||r===15&&n%2)&&mc(e,.75,i),(r===4||r===12)&&Op(e,.45,i),r%2===0&&gc(e,r%4===2?.16:.1,i),r===14&&n%4===3&&gc(e,.12,i,!0),r===0&&Jr(e,a[0],o*5,.42,i),r===6&&Jr(e,a[0]+12,o*2,.3,i),r===10&&Jr(e,a[0]+7,o*3.5,.34,i),r===14&&Jr(e,a[0]+(n%2?10:2),o*2,.25,i),r===0&&Fp(e,a.slice(1),o*16,.045,i,1100),(r===0||r===7)&&a.slice(1,4).forEach((h,c)=>Np(e+c*.012,h,.5,.06,i,"sine"));let l=this.melody[n][r];l&&Math.floor(s/128)%2===1&&Np(e,l,.45,.09,i)}},Ug={bpm:148,swing:0,chords:[38,34,36,33,38,34,41,40],riff:[[74,null,77,null,76,null,74,null,72,null,74,null,69,null,null,null],[70,null,null,74,null,null,77,null,76,null,74,null,72,null,74,null],[72,null,76,null,79,null,77,null,76,null,74,null,72,null,null,null],[73,null,null,null,76,null,null,null,79,null,81,null,79,null,76,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4,l=t>=.8;if(l?(([0,6,8,11].includes(r)||r===14&&n%2)&&mc(e,.9,i),(r===4||r===12)&&Op(e,.6,i),n%4===0&&r===0&&Lg(e,.22,i)):t>=.5&&r===0&&mc(e,.6,i),t>=.5&&gc(e,r%2?.07:.13,i,r===14),r%2===0&&Jr(e,a+(r===6||r===14?12:0),o*1.8,t>=.5?.3:.2,i,!0),t>=.5&&[0,3,6].includes(r)&&kg(e,a+12,o*(r===6?6:2.6),l?.22:.12),t<.5&&r===0&&Fp(e,[a+24,a+27,a+31],o*16,.04,i,700),t>=1.1){let h=this.riff[n%4][r];h&&Ig(e,h,o*1.9,.06,i)}}},Dg={camp:Ng,fight:Ug};function Bp(s,e){if(!de)return;let t=de.currentTime;if(ct){ct.gain.gain.setTargetAtTime(1e-4,t,.35);let n=ct.gain;setTimeout(()=>n.disconnect(),2500)}if(ct=null,!s)return;let i=de.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(1,t+1.2),i.connect(Kr),ct={name:s,track:Dg[s],gain:i,step:0,next:t+.1,intensity:e}}function Og(){if(!de||!ct||de.state!=="running")return;let s=ct.track,e=60/s.bpm/4;for(ct.next<de.currentTime-.2&&(ct.next=de.currentTime+.05);ct.next<de.currentTime+.12;){let t=ct.step%2?s.swing*e:0;s.play(ct.step,ct.next+t,ct.intensity,ct.gain),ct.step++,ct.next+=e}}function is(s,e=1){if(qr={name:s,intensity:e},!!de){if(ct&&ct.name===s){ct.intensity=e;return}Bp(s,e)}}function _c(s){if(de){if(s&&!Di){let e=de.createGain();e.gain.value=1e-4;let t=de.createBiquadFilter();t.type="bandpass",t.frequency.value=650,t.Q.value=.5;let i=de.createBiquadFilter();i.type="bandpass",i.frequency.value=1700,i.Q.value=1.2;let n=de.createGain();n.gain.value=.35;let r=de.createOscillator(),a=de.createGain();r.frequency.value=.23,a.gain.value=.18,r.connect(a).connect(n.gain),r.start();let o=de.createBufferSource();o.buffer=Ho,o.loop=!0,o.connect(t).connect(e),o.connect(i).connect(n).connect(e),e.connect(Bo),o.start(),e.gain.setTargetAtTime(.16,de.currentTime,.8),Di={g:e,src:o,lfo:r,base:.16}}else if(!s&&Di){let e=Di;Di=null,e.g.gain.setTargetAtTime(1e-4,de.currentTime,.4),setTimeout(()=>{e.src.stop(),e.lfo.stop(),e.g.disconnect()},2e3)}}}function Ut(s=.5){if(!de||!Di)return;let e=de.currentTime,t=Di.g.gain;t.cancelScheduledValues(e),t.setValueAtTime(Math.max(Di.base,t.value),e),t.linearRampToValueAtTime(Di.base+.55*s,e+.25),t.setTargetAtTime(Di.base,e+.6+s,.9)}function Ri(s,e=1){if(!de||!ui)return;let t=de.currentTime+.005,i=Math.min(1.4,.45+e*.6),n=(a,o,l,h)=>{let c=de.createGain();c.connect(en),di(c,t,h,.002,l),pi("sine",a,t,l,c).frequency.exponentialRampToValueAtTime(o,t+l*.8)},r=(a,o,l,h,c=.8)=>{let u=de.createGain(),d=de.createBiquadFilter();return d.type=a,d.frequency.value=o,d.Q.value=c,d.connect(u).connect(en),di(u,t,h,.001,l),Zs(t,l+.05,d),d};switch(s){case"punch":n(140,55,.14,.7*i),r("lowpass",2200,.07,.55*i);break;case"kick":r("highpass",900,.06,.6*i),n(110,45,.2,.8*i);break;case"body":n(90,40,.22,.85*i),r("lowpass",900,.1,.5*i);break;case"ground":n(100,45,.12,.55*i),r("lowpass",1200,.06,.35*i);break;case"whoosh":{r("bandpass",500,.2,.18,1.5).frequency.exponentialRampToValueAtTime(2200,t+.16);break}case"slam":n(80,30,.45,1),r("lowpass",500,.3,.7);break;case"tap":for(let a=0;a<3;a++){let o=de.createGain(),l=de.createBiquadFilter();l.type="bandpass",l.frequency.value=1500,l.connect(o).connect(en),di(o,t+a*.32,.4,.001,.05),Zs(t+a*.32,.08,l)}break;case"bell":case"bell3":{let a=s==="bell3"?3:1;for(let o=0;o<a;o++){let l=t+o*.34;for(let[h,c]of[[1,.35],[2.76,.14],[5.4,.07],[8.9,.03]]){let u=de.createGain();u.connect(en),di(u,l,c,.002,1.8/Math.sqrt(h)),pi("sine",1180*h,l,2,u)}}break}case"ko":n(70,25,.8,1.2),r("lowpass",400,.6,.8);break}}function zo(s){if(!de||!ui)return;let e=de.currentTime+.05,t=s==="W"?[60,64,67,72,76]:s==="L"?[57,53,50,45]:[57,60,64];if(t.forEach((i,n)=>{let r=de.createGain(),a=de.createBiquadFilter();a.type="lowpass",a.frequency.value=s==="W"?3200:1200,a.connect(r).connect(en);let o=e+n*(s==="W"?.11:.22),l=s==="W"&&n===t.length-1?2.2:.8;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.09,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+l);for(let h of[-8,0,8]){let c=pi("sawtooth",Tn(i),o,l,a);c.detune.value=h}}),s==="W"){let i=de.createBiquadFilter();i.type="highpass",i.frequency.value=4e3;let n=de.createGain();i.connect(n).connect(en),di(n,e+.44,.25,.002,1.6),Zs(e+.44,1.7,i)}}function En(s){if(!(!ui||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(s);e.rate=.92,e.pitch=.6,e.volume=.9;let t=speechSynthesis.getVoices().find(i=>/en[-_](US|GB)/i.test(i.lang)&&/male|david|daniel|alex|fred/i.test(i.name))||speechSynthesis.getVoices().find(i=>/^en/i.test(i.lang));t&&(e.voice=t),speechSynthesis.speak(e)}catch{}}function xc(s=1.2){if(!de||!ct)return;let e=ct.gain.gain,t=de.currentTime;e.cancelScheduledValues(t),e.setTargetAtTime(.35,t,.05),e.setTargetAtTime(1,t+s,.4)}var ea=Math.PI*2,Zr=(s,e)=>1-Math.exp(-s*e),bc=(s,e,t)=>{let i=((e-s+Math.PI)%ea+ea)%ea-Math.PI;return s+i*t},zp={};function It(s,e={}){let t=s+JSON.stringify(e);return zp[t]||(zp[t]=new Rt({color:s,roughness:.75,...e}))}function Re(s,e,t,i,n){let r=new Te(new ht(s,e,t),typeof i=="string"?It(i,n):i);return r.castShadow=r.receiveShadow=!0,r}function ve(s,e,t,i,n){return s.position.set(e,t,i),n&&n.add(s),s}function Oi(s,e,t,i,n=12,r){let a=new Te(new rt(s,e,t,n),typeof i=="string"?It(i,r):i);return a.castShadow=a.receiveShadow=!0,a}function Rn(s,e,t){let i=new Te(new Ke(s,14,10),typeof e=="string"?It(e,t):e);return i.castShadow=!0,i}function jp(s,{w:e=512,h:t=128,bg:i="#111",fg:n="#fff",font:r="bold 72px Arial",border:a=null}={}){let o=document.createElement("canvas");o.width=e,o.height=t;let l=o.getContext("2d");l.fillStyle=i,l.fillRect(0,0,e,t),a&&(l.strokeStyle=a,l.lineWidth=10,l.strokeRect(5,5,e-10,t-10)),l.fillStyle=n,l.font=r,l.textAlign="center",l.textBaseline="middle",l.fillText(s,e/2,t/2+4);let h=new Xn(o);return h.colorSpace=pt,h.anisotropy=4,h}function wc(s,e,t,i){return new Te(new li(e,t),new Vt({map:jp(s,i),toneMapped:!1}))}function Mc(s,e="#ffffff"){let t=jp(s,{w:512,h:128,bg:"rgba(10,12,16,0.78)",fg:e,font:"bold 60px Arial",border:e}),i=new Vs(new $n({map:t,depthWrite:!1,toneMapped:!1}));return i.scale.set(5,1.25,1),i}function Fg(s,e,t="#ffe9a8",i="#2a3340",n="#d9d4c7"){let r=document.createElement("canvas");r.width=s*32,r.height=e*40;let a=r.getContext("2d");a.fillStyle=n,a.fillRect(0,0,r.width,r.height);for(let l=0;l<s;l++)for(let h=0;h<e;h++)a.fillStyle=Math.random()<.3?t:i,a.fillRect(l*32+6,h*40+8,20,26);let o=new Xn(r);return o.colorSpace=pt,o}function Qr(s,e,t,i){let n=new Ws;n.moveTo(-s/2,0),n.lineTo(s/2,0),n.lineTo(0,e),n.closePath();let r=new Gr(n,{depth:t,bevelEnabled:!1});r.translate(0,0,-t/2);let a=new Te(r,It(i));return a.castShadow=a.receiveShadow=!0,a}function Sc(s="round"){let e=new et;if(s==="palm"){let i=Oi(.14,.22,5,"#8a6a43",8);i.position.y=2.5,i.rotation.z=.08,e.add(i);for(let n=0;n<7;n++){let r=Re(2.6,.06,.5,"#2f8f46");r.geometry.translate(1.3,0,0),r.position.set(.2,5,0),r.rotation.set(0,n/7*ea,-.35),e.add(r)}return e}ve(Oi(.18,.26,2,"#6b4a2b",8),0,1,0,e);let t=Rn(1.4+Math.random()*.5,s==="dark"?"#2d6a3a":"#3f8f4a");return t.position.y=3,t.scale.y=1.15,e.add(t),e}function Bg(){let s=new et;return ve(Oi(.07,.09,4.2,"#2a2d33",8),0,2.1,0,s),ve(Re(.9,.08,.12,"#2a2d33"),.4,4.15,0,s),ve(new Te(new Ke(.16,10,8),new Vt({color:"#fff3c4"})),.8,4.05,0,s),s}var Gp={hatch:{L:3.8,W:1.7,H:.75,cab:[2.2,.62,-.25],wheel:.33},pickup:{L:5.3,W:1.95,H:.95,cab:[1.9,.78,.55],wheel:.42,bed:!0},sedan:{L:4.7,W:1.85,H:.7,cab:[2.4,.6,-.1],wheel:.35},muscle:{L:4.9,W:1.95,H:.72,cab:[2,.55,-.35],wheel:.38,stripes:!0,scoop:!0},suv:{L:4.9,W:2,H:1,cab:[3.2,.8,-.2],wheel:.42},super:{L:4.5,W:2,H:.55,cab:[1.9,.5,-.1],wheel:.36,wedge:!0},hyper:{L:4.7,W:2.05,H:.5,cab:[1.7,.48,-.05],wheel:.37,wedge:!0,wing:!0}};function Go(s,e){let t=Gp[s]||Gp.sedan,i=new et,n=It(e,{roughness:.25,metalness:.55}),r=It("#1b2430",{roughness:.1,metalness:.6}),a=It("#121212",{roughness:.8}),o=t.wheel+.12,l=Re(t.W,t.H,t.L,n);if(l.position.y=o+t.H/2,i.add(l),t.wedge){let _=Re(t.W*.98,t.H*.5,t.L*.32,n);_.position.set(0,o+t.H*.95,t.L*.3),_.rotation.x=.18,i.add(_)}let[h,c,u]=t.cab,d=Re(t.W*.86,c,h,r);d.position.set(0,o+t.H+c/2,u),i.add(d);let p=Re(t.W*.8,.06,h*.85,n);if(p.position.set(0,o+t.H+c+.02,u),i.add(p),t.bed){for(let _ of[-1,1])ve(Re(.08,.45,t.L*.4,n),_*(t.W/2-.04),o+t.H+.22,-t.L*.27,i);ve(Re(t.W,.45,.08,n),0,o+t.H+.22,-t.L*.47,i)}if(t.stripes)for(let _ of[-.18,.18])ve(Re(.18,.02,t.L*1.001,"#f2f2f2"),_,o+t.H+.005,0,i);if(t.scoop&&ve(Re(.6,.14,.8,a),0,o+t.H+.07,t.L*.25,i),t.wing){ve(Re(t.W*.95,.06,.4,a),0,o+t.H+.45,-t.L*.45,i);for(let _ of[-.6,.6])ve(Re(.06,.4,.1,a),_,o+t.H+.22,-t.L*.44,i)}let m=new rt(t.wheel,t.wheel,.28,18);m.rotateZ(Math.PI/2);let g=new rt(t.wheel*.6,t.wheel*.6,.3,12);g.rotateZ(Math.PI/2);let f=[];for(let _ of[-1,1])for(let x of[-1,1]){let R=new et;R.position.set(_*(t.W/2-.08),t.wheel,x*t.L*.33);let w=new Te(m,a);w.castShadow=!0,R.add(w,new Te(g,It("#c9ccd1",{metalness:.9,roughness:.3}))),i.add(R),f.push(R)}let y=new Vt({color:"#fff7d6"}),v=new Vt({color:"#d01818"});for(let _ of[-1,1])ve(new Te(new ht(.35,.12,.04),y),_*(t.W/2-.3),o+t.H*.7,t.L/2+.01,i),ve(new Te(new ht(.35,.1,.04),v),_*(t.W/2-.3),o+t.H*.75,-t.L/2-.01,i);return i.userData.wheels=f,i.userData.radius=t.wheel,i}function Vp(s){let e=new et;if(s==="parrot"){let d=Rn(.14,"#27a845");d.scale.set(.8,1,1.3),e.add(d),ve(Rn(.09,"#d62828"),0,.1,.13,e);let p=new Te(new Mn(.03,.08,6),It("#f4b942"));p.rotation.x=Math.PI/2,ve(p,0,.09,.24,e);let m=Re(.08,.02,.3,"#1d4ed8");ve(m,0,-.03,-.25,e);let g=[];for(let y of[-1,1]){let v=Re(.3,.02,.16,"#1f8f3a");v.geometry.translate(y*.15,0,0),ve(v,y*.06,.03,0,e),g.push(v)}let f=Math.random()*10;return{root:e,fly:!0,step(y){f+=y,g[0].rotation.z=Math.sin(f*22)*.7,g[1].rotation.z=-Math.sin(f*22)*.7}}}let t={dog:{s:1,fur:"#8a5a2b",belly:"#c99b67",ear:"drop"},cat:{s:.6,fur:"#d8893a",belly:"#f2d1a8",ear:"point"},tiger:{s:2,fur:"#e0781e",belly:"#f4ead8",ear:"round",stripes:!0}}[s]||{s:1,fur:"#8a5a2b",belly:"#c99b67",ear:"drop"},i=new et;i.scale.setScalar(t.s),e.add(i);let n=It(t.fur),r=new Te(new Yn(.13,.36,6,12),n);r.rotation.x=Math.PI/2,r.position.y=.38,r.castShadow=!0,i.add(r);let a=new et;a.position.set(0,.52,.27),i.add(a);let o=Rn(.12,t.fur);a.add(o);let l=Re(.1,.08,.12,t.belly);ve(l,0,-.03,.11,a),ve(Rn(.022,"#111"),0,0,.18,a);for(let d of[-1,1])if(ve(Rn(.018,"#111"),d*.05,.04,.1,a),t.ear==="point"){let p=new Te(new Mn(.04,.09,4),n);ve(p,d*.07,.12,0,a)}else if(t.ear==="round")ve(Rn(.04,t.fur),d*.08,.1,-.01,a);else{let p=Re(.04,.12,.07,"#5c3a1b");ve(p,d*.11,.02,0,a).rotation.z=d*.3}if(t.stripes)for(let d=0;d<5;d++){let p=new Te(new ei(.135,.015,4,16,Math.PI),It("#1a1209"));p.rotation.set(0,Math.PI/2,0),ve(p,0,.38,-.18+d*.09,i)}let h=Re(.03,.03,.26,t.fur);h.geometry.translate(0,0,-.13),ve(h,0,.45,-.28,i),h.rotation.x=s==="cat"?-1:-.5;let c=[];for(let d of[-1,1])for(let p of[-1,1]){let m=new et;m.position.set(d*.08,.32,p*.17);let g=Re(.06,.32,.06,t.fur);g.position.y=-.16,m.add(g),i.add(m),c.push({leg:m,ph:d===p?0:Math.PI})}let u=Math.random()*10;return{root:e,fly:!1,step(d,p){u+=d*(4+p*3);let m=Math.min(.7,p*.35);for(let g of c)g.leg.rotation.x=Math.sin(u+g.ph)*m;h.rotation.y=Math.sin(u*1.5)*.4,a.rotation.y=Math.sin(u*.3)*.15}}}function Hg(s){let e=new et,t=(r,a,o=2.2)=>ve(Re(1.1,o,.12,"#5a3a22"),r,o/2,a,e);if(s===0){let r=Re(13,13,10,new Rt({map:Fg(10,9),roughness:.8}));r.position.y=6.5,e.add(r);for(let o=2.5;o<13;o+=3.2)ve(Re(13.2,.15,1,"#9aa0a8"),0,o,5.4,e);t(0,5.07);let a=wc("APARTMENTS",4,.8,{bg:"#20252c",fg:"#e7e2d6"});return ve(a,0,3,5.08,e),e}if(s===1){ve(Re(8,3.4,7,"#e8dcc3"),0,1.7,0,e),ve(Qr(9,2.4,7.6,"#8b3a2b"),0,3.4,0,e),t(0,3.56);for(let r of[-2.6,2.6])ve(Re(1.4,1.1,.1,"#7fb3d5",{roughness:.1}),r,1.8,3.56,e);for(let r=-6;r<=6;r+=1)Math.abs(r)>1.5&&ve(Re(.12,.9,.12,"#f4f4f4"),r,.45,7.5,e);return ve(Re(12.2,.1,.1,"#f4f4f4"),0,.8,7.5,e),e}if(s===2){ve(Re(11,6.2,8,"#d9e1e8"),0,3.1,0,e),ve(Qr(12,3,8.6,"#3d4a5c"),0,6.2,0,e),ve(Re(5,3.2,6,"#c7cfd8"),8,1.6,1,e),ve(Re(4.2,2.6,.1,"#ffffff"),8,1.3,4.02,e),ve(Re(11.4,.25,2.2,"#b8a48a"),0,.12,5.1,e);for(let r of[-5,-1.5,1.5,5])ve(Oi(.12,.12,3,"#ffffff"),r,1.6,5.9,e);ve(Re(11.6,.2,2.6,"#ffffff"),0,3.15,5.1,e),t(0,4.06);for(let r of[-3.5,3.5])for(let a of[1.6,4.4])ve(Re(1.6,1.2,.1,"#7fb3d5",{roughness:.1}),r,a,4.06,e);return ve(Re(1.6,1.2,.1,"#7fb3d5",{roughness:.1}),0,4.4,4.06,e),e}let i=It("#9ccbe6",{roughness:.05,metalness:.3,transparent:!0,opacity:.75}),n=(r,a,o,l)=>{ve(Re(r+.8,.3,a+.8,"#e9e4da"),o,.15,l,e);let h=new Te(new ht(r,.05,a),It("#2ab0e0",{roughness:.05,metalness:.2}));ve(h,o,.31,l,e)};if(s===3){ve(Re(14,3.6,9,"#f5f5f2"),0,1.8,-1,e),ve(Re(10,3.4,8,"#f5f5f2"),-2,5.3,-1.5,e),ve(Re(14.6,.3,9.6,"#2b2b2b"),0,3.65,-1,e),ve(Re(10.6,.3,8.6,"#2b2b2b"),-2,7.1,-1.5,e);let r=new Te(new ht(12,3.2,.1),i);ve(r,0,1.8,3.52,e),ve(new Te(new ht(8,3,.1),i),-2,5.3,2.52,e),n(8,3.6,3,7);for(let a of[-8,9])ve(Sc("palm"),a,0,6,e);return t(-5.5,3.6),e}ve(Re(18,7,11,"#f2ead9"),0,3.5,-2,e);for(let r of[-12.5,12.5])ve(Re(7,5.5,9,"#eee4d0"),r,2.75,-1,e);ve(Qr(19,3.2,11.6,"#5b4636"),0,7,-2,e);for(let r of[-12.5,12.5])ve(Qr(7.6,2.4,9.6,"#5b4636"),r,5.5,-1,e);for(let r of[-5,-2.5,0,2.5,5])ve(Oi(.3,.35,6.4,"#ffffff",14),r,3.2,4.6,e);ve(Re(12,.5,2.6,"#ffffff"),0,6.6,4.6,e),ve(Qr(12.4,1.6,2.8,"#ffffff"),0,6.85,4.6,e),ve(Re(12,.4,3.2,"#e0d6c2"),0,.2,4.8,e);for(let r of[-6.5,-3.5,3.5,6.5])for(let a of[1.8,4.8])ve(Re(1.4,1.8,.1,"#7fb3d5",{roughness:.1}),r,a,3.56,e);t(0,3.56,3),n(10,4,-9,9),ve(Oi(1.8,2,.6,"#e9e4da",20),9,.3,9,e),ve(new Te(new rt(1.6,1.6,.05,20),It("#2ab0e0",{roughness:.05})),9,.58,9,e),ve(Oi(.2,.3,1.6,"#e9e4da"),9,1.1,9,e),ve(Rn(.35,"#e9e4da"),9,2,9,e);for(let r of[-16,-14,15,17])ve(Sc("palm"),r,0,9,e);for(let r of[-3,3])ve(Re(.6,2.6,.6,"#e0d6c2"),r,1.3,13.5,e);return e}var Wp=[{id:"home",name:"Home",icon:"\u{1F3E0}",color:"#f4b942",door:[-38,-9]},{id:"club",name:"Nightclub",icon:"\u{1FAA9}",color:"#c084fc",door:[-12,-9]},{id:"cafe",name:"Caf\xE9",icon:"\u2615",color:"#fca5a5",door:[8,-9]},{id:"gym",name:"Gym",icon:"\u{1F94A}",color:"#f87171",door:[28,-9]},{id:"cars",name:"Car Dealer",icon:"\u{1F697}",color:"#60a5fa",door:[-34,9]},{id:"realty",name:"Realtor",icon:"\u{1F3E1}",color:"#34d399",door:[-12,9]},{id:"pets",name:"Pet Shop",icon:"\u{1F43E}",color:"#fbbf24",door:[8,9]},{id:"arena",name:"GFC Arena",icon:"\u{1F3C6}",color:"#f4b942",door:[30,9]}],Vo=class{constructor(){let e=this.scene=new jn;e.background=new Ce("#9fc9ef"),e.fog=new Gs("#b8d6f0",45,110),this.camera=new bt(55,1,.1,300),e.add(new Zn("#dff0ff","#5a6b43",1.1));let t=this.sun=new Ro("#fff4dc",2.4);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let i=t.shadow.camera;i.left=i.bottom=-30,i.right=i.top=30,i.near=1,i.far=120,t.shadow.bias=-5e-4,e.add(t,t.target),this.solids=[],this.buildTown(),this.player=null,this.pos=new b(-38,0,-5),this.heading=Math.PI,this.moveTarget=null,this.keys=new Set,this.driving=null,this.speedNow=0,this.camYaw=0,this.camPitch=.42,this.active=!1,this.near=null,this.onNear=null,this.onEnter=null,this.key="",this.pets=[],this.home=null,this.family=[],this.garage=[],addEventListener("keydown",n=>{if(!this.active||/INPUT|TEXTAREA|SELECT/.test(n.target&&n.target.tagName||""))return;let r=n.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","shift"].includes(r)&&(this.keys.add(r),this.moveTarget=null,n.preventDefault()),(r==="e"||r==="enter")&&this.near&&this.onEnter&&this.onEnter(this.near.id)}),addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear())}solid(e,t,i,n){this.solids.push([Math.min(e,i),Math.min(t,n),Math.max(e,i),Math.max(t,n)])}buildTown(){let e=this.scene,t=new Te(new li(260,260),It("#6fa452",{roughness:1}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t),this.ground=t;let i=(g,f,y,v)=>{let _=new Te(new li(g,f),It("#3a3d42",{roughness:.95}));_.rotation.x=-Math.PI/2,_.position.set(y,.01,v),_.receiveShadow=!0,e.add(_)};i(130,10,0,0),i(10,90,-54,0),i(10,90,54,0);for(let g of[-6.2,6.2]){let f=Re(130,.15,2.4,"#c9c6bd");f.position.set(0,.075,g),e.add(f)}for(let g=-60;g<60;g+=6){let f=new Te(new li(2.8,.18),new Vt({color:"#f2e7b6"}));f.rotation.x=-Math.PI/2,f.position.set(g,.02,0),e.add(f)}for(let g=-60;g<=60;g+=12)for(let f of[-7,7]){let y=Bg();y.position.set(g,0,f),y.rotation.y=f<0?-Math.PI/2:Math.PI/2,e.add(y)}let n=g=>Wp.find(f=>f.id===g),r=(g,f,y,v,_,x,R,w,E,k)=>{let P=new et;P.position.set(_,0,x);let U=x<0?1:-1,$=Re(f,y,v,R);$.position.y=y/2,P.add($);let C=wc(w,Math.min(f-1,9),1.4,{bg:E,fg:"#fff",font:"bold 64px Arial"});C.position.set(0,y-1.1,U*(v/2+.06)),U<0&&(C.rotation.y=Math.PI),P.add(C);let z=Re(1.6,2.5,.15,"#2b2b2b");z.position.set(0,1.25,U*(v/2+.02)),P.add(z);for(let ne of[-f/2+2,f/2-2]){let ue=Re(2.2,1.8,.1,"#9ccbe6",{roughness:.1,metalness:.3});ue.position.set(ne,1.6,U*(v/2+.03)),P.add(ue)}k&&k(P,U),e.add(P),this.solid(_-f/2,x-v/2,_+f/2,x+v/2);let O=Mc(n(g).icon+" "+n(g).name,n(g).color);return O.position.set(_,y+2.2,x),e.add(O),P};r("club",12,6,10,-12,-15,"#2a1f3d","NIGHTCLUB","#7c3aed",(g,f)=>{for(let y=0;y<6;y++){let v=new Te(new ht(11.5,.1,.1),new Vt({color:y%2?"#f0abfc":"#22d3ee"}));v.position.set(0,.6+y*.9,f*5.06),g.add(v)}}),r("cafe",10,4.5,9,8,-14.5,"#f1e3cf","CAF\xC9 & DINING","#9a3412",(g,f)=>{let y=Re(9.6,.15,2.2,"#c2410c");y.position.set(0,3.1,f*5.4),y.rotation.x=f*.25,g.add(y);for(let v of[-3,3]){let _=new et;ve(Oi(.6,.6,.06,"#ffffff",16),0,.85,0,_),ve(Oi(.05,.05,.85,"#333"),0,.42,0,_),_.position.set(v,0,f*6.4),g.add(_)}}),r("gym",16,7,12,28,-16,"#30343b","IRON GYM","#b91c1c"),r("cars",18,6,12,-34,16,"#dbe7f3","LUXURY MOTORS","#1d4ed8",g=>{[["super","#f97316"],["suv","#111111"],["muscle","#1d4ed8"]].forEach(([f,y],v)=>{let _=Go(f,y);_.position.set(-5+v*5,0,-8),_.position.z=-6,_.position.set(-5+v*5,0,-9),_.rotation.y=.5,g.add(_)})}),r("realty",10,5,9,-12,15,"#e6efe9","PRIME REALTY","#047857"),r("pets",10,4.5,9,8,14.5,"#fff3d6","PAWS PET SHOP","#d97706",(g,f)=>{let y=Vp("dog");y.root.position.set(-3,0,f*5.4),g.add(y.root),this.shopPet=y});let a=new et;a.position.set(30,0,22);let o=Oi(11,11,6,"#1f2937",32);o.position.y=3,a.add(o);let l=new Te(new Ke(11,32,12,0,ea,0,Math.PI/2),It("#cbd5e1",{metalness:.4,roughness:.35}));l.position.y=6,l.scale.y=.45,l.castShadow=!0,a.add(l);let h=wc("GFC ARENA",10,2,{bg:"#111",fg:"#f4b942",font:"bold 80px Arial",border:"#d62828"});h.position.set(0,4.4,-11.05),h.rotation.y=Math.PI,a.add(h),ve(Re(3,3,.4,"#111"),0,1.5,-10.9,a),this.scene.add(a),this.solid(19,11,41,33);let c=Mc("\u{1F3C6} GFC Arena","#f4b942");c.position.set(30,13,22),e.add(c);let u=[];for(let g=-64;g<=64;g+=9)u.push([g,-40],[g,40]);for(let g=-32;g<=32;g+=9)u.push([-66,g],[66,g]);u.push([-2,-16],[18,-16],[-24,18],[0,18],[18,18],[-22,-30],[40,-30],[-2,30],[42,36]);for(let[g,f]of u){let y=Sc(Math.random()<.5?"round":"dark");y.position.set(g+(Math.random()-.5)*2,0,f+(Math.random()-.5)*2),e.add(y)}this.homeLot=new et,this.homeLot.position.set(-38,0,-25),e.add(this.homeLot);let d=new Te(new li(22,9),It("#b9b3a6",{roughness:.95}));d.rotation.x=-Math.PI/2,d.position.set(-38,.02,-12.5),d.receiveShadow=!0,e.add(d);let p=Mc("\u{1F3E0} Home","#f4b942");p.position.set(-38,15,-25),e.add(p),this.homeLabel=p,this.walkers=[];let m=["#e11d48","#2563eb","#16a34a","#f59e0b","#6b7280","#111827","#f5f5f5","#7c3aed"];for(let g=0;g<8;g++){let f=new ci({casual:!0,look:Sn("walker"+g),shirt:m[g],pants:g%2?"#1f2937":"#3b5b8a",weightClass:2+g%4}),y=g%2?1:-1,v={f,x:-55+Math.random()*110,z:y*6.6,dir:y,v:1.1+Math.random()*.6};f.root.position.set(v.x,0,v.z),e.add(f.root),this.walkers.push(v)}this.traffic=[],[["sedan","#9ca3af"],["pickup","#b45309"],["hatch","#0ea5e9"],["suv","#111827"]].forEach(([g,f],y)=>{let v=Go(g,f),_=y%2?1:-1,x={car:v,x:-60+y*30,z:_*2.4,dir:_,v:8+y*1.5};v.rotation.y=_>0?Math.PI/2:-Math.PI/2,e.add(v),this.traffic.push(x)})}setLife(e){let t=e.life;this.injured=!!e.injured,this.player&&this.player.setInjured(this.injured);let i=JSON.stringify([e.look,e.weightClass,t.house,t.cars,t.driving,t.pets.map(h=>h.kind+h.name),t.partner&&[t.partner.look,t.partner.stage],t.kids.map(h=>h.look+h.age)]);if(i===this.key)return;this.key=i;let n=this.scene;if((!this.player||this.playerLook!==e.look)&&(this.player&&this.player.dispose(),this.player=new ci({casual:!0,look:Qi(e.look),weightClass:e.weightClass,style:e.style,shirt:"#111111",pants:"#2b3a55"}),this.playerLook=e.look,this.player.setInjured(this.injured),n.add(this.player.root)),this.homeTier!==t.house){this.home&&this.homeLot.remove(this.home),this.home=Hg(t.house),this.homeLot.add(this.home),this.homeTier=t.house,this.solids=this.solids.filter(u=>!u.home);let h=[[6.5,5],[4,3.5],[8,4],[7.5,5.5],[16,6.5]][t.house],c=[-38-h[0],-25-h[1]-1,-38+h[0],-25+h[1]];c.home=!0,this.solids.push(c),this.homeLabel.position.y=[15,8,11,10,12][t.house]}for(let h of this.garage)n.remove(h);this.garage=[];let r=e.carCatalog||[];t.cars.forEach((h,c)=>{let u=r.find(p=>p.id===h)||{color:"#888"},d=Go(h,u.color);d.position.set(-48+c*2.7,0,-12.5),d.rotation.y=Math.PI*.98,d.userData.id=h,n.add(d),this.garage.push(d)});for(let h of this.pets)n.remove(h.root);this.pets=t.pets.map((h,c)=>{let u=Vp(h.kind);return u.root.position.copy(this.pos).add(new b(1+c,0,1)),u.slot=c,n.add(u.root),u});for(let h of this.family)h.dispose();this.family=[];let a=["#e11d48","#2563eb","#16a34a","#f59e0b","#a855f7","#0ea5e9","#f97316","#ec4899"],o=-25+[5.6,4.2,6.2,4.4,6.3][t.house],l=t.house===4?-35.5:-30.5;if(t.partner){let h=Qi(t.partner.look),c=new ci({casual:!0,look:h,shirt:a[h.shorts],pants:"#1f2937",weightClass:1});c.root.position.set(l,0,o+2.4),c.root.rotation.y=-.5,n.add(c.root),this.family.push(c)}t.kids.forEach((h,c)=>{let u=Qi(h.look),d=new ci({casual:!0,look:{...u,beard:0},shirt:a[(u.shorts+c+2)%8],pants:"#334155",weightClass:0}),p=Math.min(.85,.42+h.age*.035);d.root.scale.multiplyScalar(p),d.root.position.set(l+1.4+c*1,0,o+3.2+c%2*.6),d.root.rotation.y=-.4,n.add(d.root),this.family.push(d)}),this.driving&&this.driving.userData.id!==t.driving&&this.stopDriving(),this.carCatalog=r,this.drivingId=t.driving}canDrive(){return!!this.drivingId}isDriving(){return!!this.driving}toggleDrive(){if(this.driving)return this.stopDriving();if(!this.drivingId)return!1;let e=(this.carCatalog||[]).find(t=>t.id===this.drivingId)||{color:"#888"};return this.driving=Go(this.drivingId,e.color),this.driving.userData.id=this.drivingId,this.scene.add(this.driving),this.player.root.visible=!1,this.speedNow=0,!0}stopDriving(){return this.driving&&(this.scene.remove(this.driving),this.driving=null,this.player.root.visible=!0,this.pos.x+=Math.cos(this.heading)*1.6,this.pos.z-=Math.sin(this.heading)*1.6,this.pos.copy(this.free(this.pos.x,this.pos.z,this.pos))),!1}goHome(){this.pos.set(-38,0,-6),this.heading=Math.PI,this.camYaw=0,this.moveTarget=null,this.driving&&this.stopDriving()}blocked(e,t,i){if(Math.abs(e)>64||Math.abs(t)>40)return!0;for(let n of this.solids)if(e>n[0]-i&&e<n[2]+i&&t>n[1]-i&&t<n[3]+i)return!0;return!1}free(e,t,i){return this.blocked(e,t,.4)?i.clone():new b(e,0,t)}pointer(e,t,i){if(e==="down")this.drag={x:t.clientX,y:t.clientY,moved:0},i.setPointerCapture(t.pointerId);else if(e==="move"&&this.drag){let n=t.clientX-this.drag.x,r=t.clientY-this.drag.y;this.drag.moved+=Math.abs(n)+Math.abs(r),this.camYaw-=n*.008,this.camPitch=Math.max(.12,Math.min(1.2,this.camPitch+r*.004)),this.drag.x=t.clientX,this.drag.y=t.clientY}else if(e==="up"&&this.drag){if(this.drag.moved<8){let n=i.getBoundingClientRect(),r=new le((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),a=new Co;a.setFromCamera(r,this.camera);let o=a.ray.intersectPlane(new Mi(new b(0,1,0),0),new b);o&&(this.moveTarget=o)}this.drag=null}}update(e){if(!this.player)return;let t=this.pos,i=this.keys,n=0,r=0;(i.has("w")||i.has("arrowup"))&&(r-=1),(i.has("s")||i.has("arrowdown"))&&(r+=1),(i.has("a")||i.has("arrowleft"))&&(n-=1),(i.has("d")||i.has("arrowright"))&&(n+=1);let a=null;if(n||r){let y=Math.sin(this.camYaw),v=Math.cos(this.camYaw);a=new b(n*v+r*y,0,-n*y+r*v).normalize()}else if(this.moveTarget){let y=this.moveTarget.clone().sub(t).setY(0);y.length()<(this.driving?1.5:.4)?this.moveTarget=null:a=y.normalize()}let o=this.driving?16:(i.has("shift")?7:4.2)*(this.injured?.55:1),l=a?o:0;if(this.speedNow+=(l-this.speedNow)*Zr(this.driving?2.2:10,e),a){let y=Math.atan2(a.x,a.z);this.heading=bc(this.heading,y,Zr(this.driving?3.5:12,e))}if(this.speedNow>.01){let y=this.speedNow*e,v=Math.sin(this.heading)*y,_=Math.cos(this.heading)*y,x=this.driving?1.3:.4;this.blocked(t.x+v,t.z,x)?this.driving&&(this.speedNow*=.5):t.x+=v,this.blocked(t.x,t.z+_,x)?this.driving&&(this.speedNow*=.5):t.z+=_}if(this.driving){this.driving.position.copy(t),this.driving.rotation.y=this.heading;for(let y of this.driving.userData.wheels)y.children.forEach(v=>v.rotation.x+=this.speedNow*e/this.driving.userData.radius)}this.player.root.position.copy(t),this.player.root.rotation.y=this.heading,this.player.update(e),this.pets.forEach((y,v)=>{let _=v%2?1:-1,x=1.4+Math.floor(v/2)*1.1,R=t.x-Math.sin(this.heading)*x+Math.cos(this.heading)*_*.9,w=t.z-Math.cos(this.heading)*x-Math.sin(this.heading)*_*.9,E=y.root,k=new b(R-E.position.x,0,w-E.position.z),P=k.length(),U=Math.min(P*2.5,this.driving?18:8);P>.05&&(E.position.addScaledVector(k.normalize(),U*e),E.rotation.y=bc(E.rotation.y,Math.atan2(k.x,k.z),Zr(8,e))),E.position.y=y.fly?1.9+Math.sin(performance.now()/300+v)*.15:0,y.step(e,P>.3?U:0)}),this.shopPet&&this.shopPet.step(e,0);for(let y of this.family)y.update(e);for(let y of this.walkers)y.x+=y.dir*y.v*e,y.x>62&&(y.x=-62),y.x<-62&&(y.x=62),y.f.root.position.set(y.x,0,y.z),y.f.root.rotation.y=y.dir>0?Math.PI/2:-Math.PI/2,y.f.update(e);for(let y of this.traffic){y.x+=y.dir*y.v*e,y.x>66&&(y.x=-66),y.x<-66&&(y.x=66),y.car.position.set(y.x,0,y.z);for(let v of y.car.userData.wheels)v.children.forEach(_=>_.rotation.x+=y.v*e/y.car.userData.radius)}let h=null,c=3.6;for(let y of Wp){let v=Math.hypot(t.x-y.door[0],t.z-y.door[1]);v<c&&(c=v,h=y)}h!==this.near&&(this.near=h,this.onNear&&this.onNear(h)),this.sun.position.set(t.x+25,40,t.z+18),this.sun.target.position.copy(t),this.driving&&this.speedNow>2&&!this.drag&&(this.camYaw=bc(this.camYaw,this.heading+Math.PI,Zr(2.5,e)));let u=this.driving?11:7.5,d=this.camera,p=new b(t.x,this.driving?1.2:1.5,t.z),m=p.x+Math.sin(this.camYaw)*Math.cos(this.camPitch)*u,g=p.z+Math.cos(this.camYaw)*Math.cos(this.camPitch)*u,f=p.y+Math.sin(this.camPitch)*u;d.position.lerp(new b(m,f,g),this.snapCam?1:Zr(8,e)),this.snapCam=!1,d.lookAt(p)}enter(){this.snapCam=!0}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}};var Mt=4.4,er="#d62828",tr="#2f6fed",Jt=Math.PI*2;function Tc(s,e,t){let i=(e-s)%Jt;return i>Math.PI&&(i-=Jt),i<-Math.PI&&(i+=Jt),s+i*t}var ns=(s,e)=>1-Math.exp(-s*e),Qs=(s,e)=>Math.atan2(e.x-s.x,e.z-s.z);function jo(s,e,t){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let n=new Xn(i);return n.colorSpace=pt,n.anisotropy=4,n}var Wo=null;function Xp(){return Wo||(Wo=jo(64,64,(s,e)=>{let t=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,240,200,.85)"),t.addColorStop(1,"rgba(255,200,120,0)"),s.fillStyle=t,s.fillRect(0,0,e,e)}),Wo)}function Yp(){let s;try{s=new Nr({antialias:!0,powerPreference:"high-performance"})}catch(f){return console.warn("WebGL unavailable, 3D disabled",f),null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=qh,s.outputColorSpace=pt,s.toneMapping=Kh,s.toneMappingExposure=1.05;let e=s.domElement;e.className="stage3d";let t=new Ec,i=new Rc,n=new Vo,r=null,a=null,o=new Ao,l=()=>{if(!a)return;let f=Math.max(1,a.clientWidth),y=Math.max(1,a.clientHeight);s.setSize(f,y,!1),e.style.width="100%",e.style.height="100%",r.camera.aspect=f/y,r.camera.updateProjectionMatrix()},h=new ResizeObserver(l),c=null,u=f=>y=>r&&r.pointer?(r.pointer(f,y,e),!0):!1,d=u("down"),p=u("move"),m=u("up");e.addEventListener("pointerdown",f=>{d(f)||(c={x:f.clientX},e.setPointerCapture(f.pointerId))}),e.addEventListener("pointermove",f=>{p(f)||!c||!r||(r.userYaw=(r.userYaw||0)-(f.clientX-c.x)*.008,c.x=f.clientX)}),e.addEventListener("pointerup",f=>{m(f)||(c=null)}),e.addEventListener("pointercancel",()=>{c=null});function g(f,y){let v=y==="arena"?i:y==="world"?n:t;n.active=v===n,!(a===f&&r===v)&&(v===n&&n.enter(),a&&h.unobserve(a),a=f,r=v,f.appendChild(e),h.observe(f),l())}return s.setAnimationLoop(()=>{let f=Math.min(o.getDelta(),.1);!r||!a||!a.isConnected||a.offsetParent===null||document.hidden||(r.update(f),s.render(r.scene,r.camera))}),{preview:t,arena:i,world:n,show:g}}var Ec=class{constructor(){let e=this.scene=new jn;e.background=new Ce("#0f1116"),e.fog=new Gs("#0f1116",7,14),this.camera=new bt(32,1,.1,50),e.add(new Zn("#cfd8ff","#1a1410",.9));let t=new Xs("#fff3e2",60,12,.55,.6,1.6);t.position.set(1.5,5.5,3),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),e.add(t,t.target);let i=new jr(er,9,8,1.5);i.position.set(-2.5,1.8,-1.5);let n=new jr(tr,9,8,1.5);n.position.set(2.5,1.8,-1.5),e.add(i,n);let r=new Te(new qn(2.2,48),new Rt({roughness:.9,map:jo(256,256,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"#3a3e48"),l.addColorStop(.8,"#1c1f26"),l.addColorStop(1,"#0f1116"),a.fillStyle=l,a.fillRect(0,0,o,o),a.strokeStyle="rgba(229,56,59,.7)",a.lineWidth=4,a.beginPath(),a.arc(o/2,o/2,o*.44,0,Jt),a.stroke()})}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.fighters=[],this.key="",this.userYaw=0,this.t=0,this.nextMove=2}setFighters(e){let t=JSON.stringify(e);if(t===this.key)return;this.key=t,this.fighters.forEach(n=>n.dispose());let i=e.map(n=>n.look?Qi(n.look):Sn(n.name||"x"));i.length===2&&i[0].shorts===i[1].shorts&&(i[1].shorts=(i[1].shorts+3)%8),this.fighters=e.map((n,r)=>{let a=new ci({look:i[r],weightClass:n.weightClass,style:n.style,glove:r?tr:er});return a.setBelt(n.belt||null),a.setInjured(!!n.injured),this.scene.add(a.root),a}),this.fighters.length===2&&(this.fighters[0].root.position.set(-.62,0,0),this.fighters[0].root.rotation.y=Math.PI/2,this.fighters[1].root.position.set(.62,0,0),this.fighters[1].root.rotation.y=-Math.PI/2),this.fighters.forEach(n=>n.lastPos.copy(n.root.position))}update(e){this.t+=e;let t=this.fighters.length===2;if(!t&&this.fighters[0]){let o=this.fighters[0];if(o.root.rotation.y=Math.sin(this.t*.35)*.7+.35+this.userYaw,this.nextMove-=e,this.nextMove<=0&&!o.busy){let l=["jab","jab-cross","left hook","uppercut","body kick","1-2-hook combination","leg kick","head kick","knee up the middle"];o.play(Fo(l[Math.floor(Math.random()*l.length)],1+Math.floor(Math.random()*3)).frames,"stance"),this.nextMove=1.4+Math.random()*2}}this.fighters.forEach(o=>o.update(e));let i=t?this.userYaw*.6+Math.sin(this.t*.2)*.25:0,n=Math.tan(ap.degToRad(this.camera.fov/2)),r=n*this.camera.aspect,a=Math.max(t?4.3:3.7,(t?1.45:.75)/r,1.2/n);this.camera.position.set(Math.sin(i)*a,t?1.35:1.2,Math.cos(i)*a),this.camera.lookAt(0,.98,0)}};function zg(s){let e=new Te(new rt(Mt+.5,Mt+.62,.9,8,1),new Rt({color:"#121318",roughness:.8}));e.rotation.y=Math.PI/8,e.position.y=-.465,e.receiveShadow=!0,s.add(e);let t=jo(1024,1024,(u,d)=>{u.fillStyle="#bdb8ad",u.fillRect(0,0,d,d);for(let m=0;m<1800;m++)u.fillStyle=`rgba(90,80,60,${Math.random()*.05})`,u.fillRect(Math.random()*d,Math.random()*d,2+Math.random()*20,2+Math.random()*20);let p=d/2;u.strokeStyle="rgba(20,20,24,.18)",u.lineWidth=6,u.beginPath(),u.arc(p,p,d*.17,0,Jt),u.stroke(),u.fillStyle="#c8102e",u.beginPath(),u.arc(p,p,d*.15,0,Jt),u.fill(),u.fillStyle="#fff",u.font=`italic 900 ${d*.1}px system-ui, sans-serif`,u.textAlign="center",u.textBaseline="middle",u.fillText("GFC",p,p+d*.005),u.fillStyle="rgba(20,20,24,.55)",u.font=`800 ${d*.035}px system-ui, sans-serif`;for(let[m,g]of[[0,"CAGE CAREER"],[Math.PI,"CAGE CAREER"],[Math.PI/2,"FIGHT NIGHT"],[-Math.PI/2,"FIGHT NIGHT"]])u.save(),u.translate(p,p),u.rotate(m),u.fillText(g,0,d*.33),u.restore()}),i=new Te(new qn(Mt+.02,8),new Rt({map:t,roughness:.85}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/8,i.receiveShadow=!0,s.add(i);let n=jo(64,64,(u,d)=>{u.clearRect(0,0,d,d),u.strokeStyle="rgba(25,25,28,.95)",u.lineWidth=4,u.beginPath(),u.moveTo(0,0),u.lineTo(d,d),u.moveTo(d,0),u.lineTo(0,d),u.stroke()});n.wrapS=n.wrapT=Lr;let r=2*Mt*Math.sin(Math.PI/8),a=1.75;n.repeat.set(r/.09,a/.09);let o=new Rt({map:n,transparent:!0,alphaTest:.25,side:qd,roughness:.5,metalness:.4,depthWrite:!1}),l=new Rt({color:"#0b0b0d",roughness:.55}),h=[],c=[];for(let u=0;u<8;u++){let d=u/8*Jt+Math.PI/8,p=(u+1)/8*Jt+Math.PI/8,m=new b(Math.sin(d)*Mt,0,Math.cos(d)*Mt),g=new b(Math.sin(p)*Mt,0,Math.cos(p)*Mt),f=m.clone().add(g).multiplyScalar(.5),y=new Te(new li(r,a),o);y.position.set(f.x,a/2+.12,f.z),y.lookAt(0,a/2+.12,0),s.add(y),c.push(y);let v=new Te(new rt(.06,.06,r,10),l);v.position.set(f.x,a+.14,f.z),v.quaternion.setFromUnitVectors(new b(0,1,0),g.clone().sub(m).normalize()),s.add(v);let _=new Te(new ht(r,.18,.14),l);_.position.set(f.x,.09,f.z),_.lookAt(0,.09,0),_.castShadow=!0,s.add(_),h.push(m)}return h.forEach((u,d)=>{let p=d===1?er:d===5?tr:"#0b0b0d",m=new Te(new rt(.11,.11,a+.3,12),new Rt({color:p,roughness:.5}));m.position.set(u.x,(a+.3)/2,u.z),m.castShadow=!0,s.add(m)}),{red:h[1],blue:h[5],panels:c}}function Gg(s){let e=[];for(let _=0;_<10;_++){let x=Mt+2.6+_*.85,R=-.9+_*.42,w=Math.floor(Jt*x/.62);for(let E=0;E<w;E++){if(Math.random()<.08)continue;let k=E/w*Jt+_*.2;e.push({x:Math.sin(k)*x,y:R,z:Math.cos(k)*x,a:k,phase:Math.random()*Jt,s:.9+Math.random()*.25})}}let t=new Yn(.2,.36,3,8),i=new Ke(.12,8,6),n=new Ur(t,new Rt({roughness:.9}),e.length),r=new Ur(i,new Rt({roughness:.8}),e.length),a=["#2b2f3a","#3d1f1f","#1f2a3d","#3a3a3a","#4a3b26","#5a1e1e","#1e3a2a","#6b6b6b","#151515","#7a2f2f"],o=["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],l=new Ce;e.forEach((_,x)=>{n.setColorAt(x,l.set(a[x%a.length]).multiplyScalar(.55+Math.random()*.5)),r.setColorAt(x,l.set(o[x*7%o.length]).multiplyScalar(.6))}),s.add(n,r);let h=60,c=new Float32Array(h*3),u=new Float32Array(h*3);for(let _=0;_<h;_++){let x=e[Math.floor(Math.random()*e.length)];c.set([x.x,x.y+.9,x.z],_*3)}let d=new lt;d.setAttribute("position",new Nt(c,3)),d.setAttribute("color",new Nt(u,3));let p=new _o(d,new Dr({size:.5,map:Xp(),vertexColors:!0,transparent:!0,blending:Jh,depthWrite:!1}));s.add(p);let m=new Ne,g=new oi,f=new b(0,1,0),y=new b,v=new b;return{update(_,x){e.forEach((R,w)=>{let E=Math.max(0,Math.sin(_*(6+w%5)+R.phase))*.16*x;g.setFromAxisAngle(f,R.a+Math.PI),v.setScalar(R.s),m.compose(y.set(R.x,R.y+.38*R.s+E,R.z),g,v),n.setMatrixAt(w,m),m.compose(y.set(R.x,R.y+.82*R.s+E,R.z),g,v),r.setMatrixAt(w,m)}),n.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0;for(let R=0;R<h;R++){let w=Math.random()<.004+x*.025?1:0;u[R*3]=u[R*3+1]=u[R*3+2]=w}d.attributes.color.needsUpdate=!0}}}var ta=class{constructor(e,t){this.tag=e,this.f=t,this.pos=new b,this.target=new b,this.yaw=0,this.fixedYaw=null,this.rate=4,this.lunge=0,this.lungeTarget=0,this.lungeUntil=0,this.ring=null,this.dmg=0}hurt(e){this.dmg=Math.min(1,Math.max(0,e)),this.f.setDamage(this.dmg)}},$p={guard:{a:.46,c:0,yaw:Math.PI},half:{a:.4,c:.06,yaw:Math.PI},mount:{a:-.3,c:0,yaw:Math.PI},side:{a:-.3,c:.5,yaw:-Math.PI/2},back:{a:-.3,c:0,yaw:0},headlock:{a:.85,c:0,yaw:Math.PI},legs:{a:.85,c:0,yaw:Math.PI},armbar:{a:-.3,c:.5,yaw:-Math.PI/2}},Vg={strike:1e3,miss:800,big:1500,kd:2100,td:1500,stuff:1300,sweep:1400,ground:900,gnp:1e3,subatt:1800,info:1100,round:2e3,finish:3800},Rc=class{constructor(){let e=this.scene=new jn;e.background=new Ce("#07080b"),e.fog=new go("#07080b",.035),this.camera=new bt(42,1,.1,80),e.add(new Zn("#9fb0d6","#2a2018",.55));let t=new Xs("#fff6e8",95,22,.6,.6,1.1);t.position.set(0,10,.5),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.bias=-.002,t.shadow.normalBias=.03,t.shadow.camera.near=4,t.shadow.camera.far=14,e.add(t,t.target);for(let[c,u,d]of[[-6,-4,er],[6,4,tr]]){let p=new Xs(d,40,16,.5,.8,1.2);p.position.set(c,5,u),e.add(p,p.target)}let i=new Te(new ei(5.2,.08,6,8),new Rt({color:"#222",metalness:.6,roughness:.4}));i.rotation.x=Math.PI/2,i.position.y=7.4,e.add(i);let n=new Vt({color:"#fff7df"});for(let c=0;c<16;c++){let u=c/16*Jt,d=new Te(new ht(.28,.16,.28),n);d.position.set(Math.sin(u)*5.2,7.25,Math.cos(u)*5.2),e.add(d)}let r=zg(e);this.panels=r.panels,this.cornerSpot={p:r.red.clone().multiplyScalar(.8),o:r.blue.clone().multiplyScalar(.8)},this.crowd=Gg(e),this.sparks=[];for(let c=0;c<24;c++){let u=new Vs(new $n({map:Xp(),blending:Jh,depthWrite:!1,transparent:!0,opacity:0}));u.visible=!1,e.add(u),this.sparks.push({s:u,t:1,dur:.2,v:new b,size:.3})}let a=new Rt({color:"#b3120f",roughness:.25,emissive:"#4a0000"}),o=new Ke(.018,6,5);this.drops=[];for(let c=0;c<48;c++){let u=new Te(o,a);u.visible=!1,e.add(u),this.drops.push({m:u,v:new b,live:!1})}let l=new Vt({color:"#7a0a0a",transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),h=new qn(1,14);h.rotateX(-Math.PI/2),this.stains=[];for(let c=0;c<70;c++){let u=new Te(h,l);u.visible=!1,e.add(u),this.stains.push(u)}this.stainNext=0,this.P=this.O=this.ref=null,this.key="",this.t=0,this.timers=[],this.slowUntil=0,this.real=0,this.excite=.25,this.userYaw=0,this.speed=1,this.mode="intro",this.C=new b,this.theta=0,this.G=new b,this.gDir=new b(1,0,0),this.cam={yaw:.3,dist:5,h:1.7,focus:new b(0,1,0),close:null,shake:0}}load(e,t){let i=t.playerLook?Qi(t.playerLook):Sn(e.player.realName||e.player.name),n=e.opponent.look?Qi(e.opponent.look):Sn(e.opponent.realName||e.opponent.name);n.shorts===i.shorts&&(n.shorts=(n.shorts+3)%8);let r=JSON.stringify([e.player.name,e.opponent.name,i,n,t.weightClass]);if(r!==this.key){this.key=r;for(let a of[this.P,this.O])a&&(a.f.dispose(),a.ring.removeFromParent());this.ref&&this.ref.f.dispose(),this.P=new ta("p",new ci({look:i,weightClass:t.weightClass,style:e.player.style,glove:er})),this.O=new ta("o",new ci({look:n,weightClass:t.weightClass,style:e.opponent.style,glove:tr})),this.ref=new ta("r",new ci({ref:!0,look:{skin:1,hair:0,hairColor:5,beard:0,shorts:2}})),this.ref.f.setBase("ref");for(let a of[this.P,this.O]){let o=new Te(new Vr(.42,.5,32),new Vt({color:a.tag==="p"?er:tr,transparent:!0,opacity:.55,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.012,this.scene.add(o),a.ring=o}for(let a of[this.P,this.O,this.ref])this.scene.add(a.f.root)}this.restore(e)}stain(e,t,i){let n=this.stains[this.stainNext++%this.stains.length];n.visible=!0,n.position.set(e,.016,t),n.scale.set(i*(.7+Math.random()*.6),1,i*(.7+Math.random()*.6)),n.rotation.y=Math.random()*Jt}bloodSpray(e,t,i){let n=e.f.worldPoint("head"),r=e.pos.clone().sub(t.pos).setY(0).normalize(),a=Math.round(4+i*5);for(let o=0;o<a;o++){let l=this.drops.find(h=>!h.live);if(!l)break;l.live=!0,l.m.visible=!0,l.m.position.copy(n),l.m.scale.setScalar(.6+Math.random()*1.2),l.v.copy(r).multiplyScalar(1+Math.random()*2.5*i).add(new b((Math.random()-.5)*1.6,.5+Math.random()*1.8,(Math.random()-.5)*1.6))}}restore(e){this.timers=[],this.slowUntil=0,this.cam.shake=0,this.mode=e.round===0?"intro":"stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.lastInfo="",this.lastG="",this.refIn=!1,this.ended=this.decision=null,this.ref.f.setBase("ref"),this.C.set(0,0,0),this.theta=0,this.cam.close=null,this.userYaw=0;for(let n of[this.P,this.O])n.fixedYaw=null,n.f.setBase(e.round===0?"relaxed":"stance"),n.f.setBelt(e.round===0&&e.belt&&e.belt.champ===n.tag?"shoulder":null);e.round===0&&(this.P.pos.copy(this.cornerSpot.p).multiplyScalar(.5),this.O.pos.copy(this.cornerSpot.o).multiplyScalar(.5));for(let n of this.stains)n.visible=!1;for(let n of this.drops)n.live=!1,n.m.visible=!1;let t=n=>e.round===0?0:Math.min(1,(100-n.health)/90+e.round*.05);this.P.hurt(t(e.player)),this.O.hurt(t(e.opponent));let i=Math.round((this.P.dmg+this.O.dmg)*14);for(let n=0;n<i;n++){let r=Math.random()*Jt,a=Math.random()*Mt*.6;this.stain(Math.cos(r)*a,Math.sin(r)*a,.04+Math.random()*.14)}for(let n of e.logs.flat())this.handle(n,e,!0);this.layout(0);for(let n of[this.P,this.O,this.ref])n.pos.copy(n.target),n.yaw=n.fixedYaw??(n===this.ref?Qs(n.pos,this.C):Qs(n.pos,this.other(n).pos)),n.lunge=n.lungeTarget=0,n.f.snap(),this.place(n,0),n.f.lastPos.copy(n.f.root.position);this.snapCamera()}setSpeed(e){this.speed=e}other(e){return e===this.P?this.O:this.P}side(e){return e==="p"?this.P:e==="o"?this.O:null}flush(){let e=this.timers.sort((t,i)=>t.at-i.at);this.timers=[],e.forEach(t=>t.fn())}later(e,t,i){i?t():this.timers.push({at:this.t+e,fn:t})}play(e,t){return this.handle(e,t,!1)}handle(e,t,i){this.flush();let n=this.side(e.side),r=n?this.other(n):null,a=e.g!==void 0?e.g:this.inferG(e),o=(h,c,u)=>{u&&h.f.setBase(u),i||h.f.play(c,u)},l=Vg[e.type]||1e3;switch(e.type){case"info":if(e.side==="n"){this.mode="stand",this.top=this.down=null,this.refIn=!1,this.C.set(0,0,0);for(let h of[this.P,this.O])h.fixedYaw=null,h.f.setBelt(null),o(h,qt.touch,"stance");if(!i){Ri("bell"),Ut(.5),this.excite=.7;let h=Number((e.text.match(/Round (\d+)/)||[])[1])||t.round,c=h===t.rounds&&t.rounds>1?"Final round!":`Round ${["one","two","three","four","five"][h-1]||h}!`;En(h===1&&t.belt?`This contest is scheduled for five rounds, and it is for the ${t.belt.label} of the world! ${c}`:c)}l=2300}else l=this.info(e,n,r,o,i);break;case"strike":case"miss":case"big":case"kd":{this.mode!=="stand"&&this.standUp(i,o);let h=e.type==="big"||e.type==="kd",c=Fo(e.move,e.n||1,!1);if(o(n,c.frames,"stance"),i){e.type==="kd"&&this.knockDown(r,!0);break}n.lungeTarget=c.fwd||.15,n.lungeUntil=this.t+(c.lungeFor||.35);let u=0,d=!0,p=0;for(let m of c.frames){if(m[3]){let g=u+Math.min(m[1],.09);if(e.type==="miss")d&&this.later(Math.max(0,g-.12),()=>{r.f.play(qt.slip,"stance"),Ri("whoosh")});else{let f=p===(e.n||1)-1||m===c.frames[c.frames.length-1],y=h&&f?1.8:.6+Math.min(4,e.n||1)*.1;this.later(g,()=>this.impact(n,r,m[3],y)),p++}d=!1}u+=m[1]}e.type==="big"&&(this.later(u,()=>r.f.play(qt.rocked,"stance")),this.closeUp(r,1.8),Ut(.8),xc(1.2),this.excite=1),e.type==="kd"&&(this.later(u,()=>this.knockDown(r,!1)),this.closeUp(r,2.2),xc(2)),l=Math.max(l,u*1e3+(e.type==="miss"?450:600)),e.type==="kd"&&(l+=900),e.type==="big"&&(l+=600);break}case"td":{if(i){this.goGround(a||n.tag,!0,e.p);break}this.mode!=="stand"&&this.standUp(!0,o);let h=Ip(e.move,e.text);n.f.play(h.att,null),r.f.play(h.def,null),n.lungeTarget=h.fwd,r.lungeTarget=h.dFwd,n.lungeUntil=r.lungeUntil=this.t+h.mat,h.big&&this.closeUp(r,h.mat+.6,!0),this.later(h.mat,()=>{this.goGround(a||n.tag,!1,e.p),Ri("slam",h.big?1.6:1),Ut(h.big?1:.6),this.cam.shake=h.big?.24:.12,this.excite=h.big?1:.8}),l=Math.max(l,h.mat*1e3+700);break}case"stuff":{let h=r;i||(h.f.play(qt.shoot,"stance"),h.lungeTarget=.4,h.lungeUntil=this.t+.45,this.later(.18,()=>{n.f.play(qt.sprawl,"stance"),Ri("body",.5)}),Ut(.3));break}case"sweep":i||(Ri("slam"),Ut(.7),this.excite=.8),this.goGround(a||n.tag,i,e.p);break;case"ground":{if(this.mode!=="ground"?this.goGround(a||n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,i),!i){let h=this.side(this.top),c=this.other(h);h.f.play(fc(h.f.base),h.f.base),c.f.play(fc(c.f.base),c.f.base),e.p&&/back|mount/.test(e.p)&&Ut(.5)}break}case"gnp":{this.mode!=="ground"||this.top!==n.tag?this.goGround(n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,!0);let h=Fo(e.move,e.n||1,!0,Ye[n.f.base]);if(o(n,h.frames,n.f.base),i)break;(/^(top|bottom|half)/i.test(r.f.base)||r.f.base==="mountBottom")&&r.f.play(qt.block,r.f.base);let c=0;for(let u of h.frames)u[3]&&this.later(c+.06,()=>this.impact(n,r,"ground",.8+(e.n||1)*.1)),c+=u[1];l=Math.max(l,c*1e3+450);break}case"subatt":{let h=a||this.top||r.tag;(this.mode!=="ground"||this.top!==h)&&this.goGround(h,!0,e.p);let c=this.top!==n.tag,u=kp(e.move,c);this.setGroundPos(u.layout,i),this.holding=!0,n.f.setBase(u.attHold),r.f.setBase(u.defHold),i||(n.f.play(u.att,u.attHold),r.f.play(u.def,u.defHold),this.closeUp(this.side(this.top)===n?r:n,2.2,!0),Ut(.7),this.excite=.9),l=2200;break}case"round":this.mode="corners",this.top=this.down=null;for(let h of[this.P,this.O])h.fixedYaw=null,h.f.setBase("relaxed"),i||h.f.stopActions();i||(Ri("bell3"),Ut(.45),this.excite=.45);break;case"finish":l=this.finish(e,t,i,o);break}return e.type!=="finish"&&e.type!=="round"&&!(e.type==="info"&&e.side==="n")&&(a===""&&this.mode==="ground"?this.standUp(i,o):a&&(this.mode!=="ground"||this.top!==a)&&e.type!=="td"?this.goGround(a,i,e.p):a&&this.mode==="ground"&&e.type!=="subatt"&&(this.holding||e.p&&e.p!==this.gpos)&&this.setGroundPos(e.p||this.gpos,i)),this.lastG=a,l}inferG(e){let t=this.lastG??"";return e.type==="td"||e.type==="sweep"?e.side:e.type==="info"&&/feet|get back up|scrambles/i.test(e.text)||e.type==="round"||e.type==="info"&&e.side==="n"?"":t}info(e,t,i,n,r){let a=e.text||"";return this.lastInfo=a,/survives/i.test(a)?(this.down=null,this.refIn=!1,this.mode="stand",n(t,qt.getUp,"stance"),r||Ut(.6),1500):/referee jumps in/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(qt.waveOff,"ref"),Ut(1),this.excite=1),1300):/doctor/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(qt.waveOff,"ref"),Ut(.6)),1700):/escapes/i.test(a)?(r||(t.f.stopActions(),i.f.stopActions(),Ut(.4)),1e3):1100}impact(e,t,i,n){t.f.hit(i,Math.min(1.6,n));let r=i!=="body"&&i!=="leg";t.hurt(t.dmg+(r?.014:.005)*n),r&&(n>1.1||t.dmg>.3&&Math.random()<.35+t.dmg*.4)&&this.bloodSpray(t,e,n),t.lungeTarget=-.1*n,t.lungeUntil=this.t+.18;let a=i==="body"?"chest":i==="leg"?"knL":"head",o=t.f.worldPoint(a);this.spark(o,n),Ri(i==="leg"?"kick":i==="body"?"body":i==="ground"?"ground":"punch",n),n>1.2?(this.cam.shake=Math.max(this.cam.shake,.06*n),Ut(.6)):Math.random()<.3&&Ut(.2),this.excite=Math.min(1,this.excite+.08*n)}knockDown(e,t){this.mode="down",this.down=e.tag,e.f.setBase("down"),!t&&(e.hurt(e.dmg+.12),this.bloodSpray(e,this.other(e),2.2),e.f.stopActions(),this.slowUntil=this.real+.8,Ri("ko"),Ut(1),this.excite=1,this.cam.shake=.15)}goGround(e,t,i){let n=this.side(e),r=this.other(n);this.mode!=="ground"?(this.G.copy(r.pos),this.G.length()>Mt*.55&&this.G.setLength(Mt*.55),this.gDir.copy(n.pos).sub(r.pos).setY(0),this.gDir.lengthSq()<1e-4&&this.gDir.set(1,0,0),this.gDir.normalize()):this.top!==e&&this.gDir.negate(),this.mode="ground",this.top=e,this.down=null,t||(n.f.stopActions(),r.f.stopActions()),this.setGroundPos(i||"guard",t)}setGroundPos(e,t){pc[e]||(e="guard"),this.gpos=e,this.holding=!1;let i=this.side(this.top),n=this.other(i),[r,a]=pc[e];i.f.setBase(r),n.f.setBase(a)}standUp(e,t){let n=this.mode==="ground"&&this.top?this.other(this.side(this.top)).tag:this.down;this.mode="stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.C.copy(this.P.pos).add(this.O.pos).multiplyScalar(.5).setY(0),this.theta=Math.atan2(this.O.pos.z-this.P.pos.z,this.O.pos.x-this.P.pos.x);for(let r of[this.P,this.O])r.tag===n?t(r,qt.getUp,"stance"):(r.f.setBase("stance"),e||r.f.stopActions())}finish(e,t,i,n){let r=t.winner==="player"?this.P:t.winner==="opponent"?this.O:null,a=r?this.other(r):null,o=t.methodType,l=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",h=/doctor/i.test(this.lastInfo||"");if(i||(is(null),Ut(1),this.excite=1,setTimeout(()=>zo(l),900)),o==="DEC"||!r){let c=()=>{this.mode="ended",this.decision={W:r,L:a};for(let d of[this.P,this.O])d.f.setBase(r?d===r?"victory":"dejected":"relaxed");let u=r||t.belt&&this.side(t.belt.champ);t.belt&&u&&u.f.setBelt("waist"),r&&this.ref.f.setBase("refRaise")};return i?c():(Ri("bell3"),En(r?`Your winner, by ${t.method.toLowerCase()}... ${t.belt?(r.tag===t.belt.champ?"and STILL":"and NEW")+" ":""}${r.tag==="p"?t.player.name:t.opponent.name}!`:"This one is a draw!"),this.later(1.2,c)),4200}if(o==="SUB"){if(!i){let c=a.f.base;a.f.play(qt.tap(c),c),Ri("tap"),En("Tap! Tap! It's all over!"),this.closeUp(a,2,!0)}return this.later(1.3,()=>{i||this.ref.f.play(qt.waveOff,"ref"),this.refIn=!0},i),this.later(2,()=>this.endPoses(r,a,"sitting",i,t),i),4600}return!h&&this.down!==a.tag&&(i?this.knockDown(a,!0):this.later(.15,()=>this.knockDown(a,!1))),i||(En(h?"The doctor has stopped the fight!":"It's all over!"),h||this.closeUp(a,1.8),this.refIn=!0),this.later(1.6,()=>this.endPoses(r,a,h?"dejected":"down",i,t),i),4400}endPoses(e,t,i,n,r){this.mode="ended",this.decision=null;let a=e.pos.clone().sub(t.pos).setY(0);a.lengthSq()<1e-4&&a.set(1,0,0);let o=t.pos.clone().addScaledVector(a.normalize(),2.2);o.length()>Mt*.62&&o.setLength(Mt*.62),this.ended={W:e,L:t,spot:o,lPos:t.pos.clone(),lYaw:t.yaw},t.f.setBase(i),e.f.setBase("victory"),n||e.f.play(qt.celebrate,"victory"),r&&r.belt&&(e.f.setBelt("waist"),n||En(`${e.tag===r.belt.champ?"And STILL":"And NEW"}, ${r.belt.label.replace(/^GFC /,"G F C ")}... ${e.tag==="p"?r.player.name:r.opponent.name}!`))}layout(e){let t=this.P,i=this.O,n=this.ref,r=this.t;for(let a of[t,i])a.fixedYaw=null;switch(this.mode){case"intro":case"stand":{if(this.mode==="stand"){this.theta+=e*.16;let l=new b(Math.sin(r*.11)*1,0,Math.cos(r*.083)*.8);this.C.lerp(l,ns(.3,e))}this.C.length()>Mt*.5&&this.C.setLength(Mt*.5);let a=new b(Math.cos(this.theta),0,Math.sin(this.theta)),o=this.mode==="intro"?1.05:1.3;t.target.copy(this.C).addScaledVector(a,-o/2),i.target.copy(this.C).addScaledVector(a,o/2),n.target.copy(this.C).addScaledVector(this.farSide(),this.refIn?.6:this.mode==="intro"?.9:2);break}case"ground":{let a=this.side(this.top),o=this.other(a),l=$p[this.gpos]||$p.guard,h=new b(this.gDir.z,0,-this.gDir.x);o.target.copy(this.G),a.target.copy(this.G).addScaledVector(this.gDir,l.a).addScaledVector(h,l.c),o.fixedYaw=Math.atan2(this.gDir.x,this.gDir.z),a.fixedYaw=o.fixedYaw+l.yaw,n.target.copy(this.G).addScaledVector(this.farSide(),this.refIn?.9:1.8).addScaledVector(this.gDir,.2);break}case"down":{let a=this.side(this.down),o=this.other(a);a.target.copy(a.pos);let l=o.pos.clone().sub(a.pos).setY(0);l.lengthSq()<1e-4&&l.set(1,0,0),l.normalize(),o.target.copy(a.pos).addScaledVector(l,1.15),a.fixedYaw=Math.atan2(l.x,l.z),n.target.copy(a.pos).addScaledVector(this.farSide(),this.refIn?.8:1.6).addScaledVector(l,.5);break}case"corners":t.target.copy(this.cornerSpot.p),i.target.copy(this.cornerSpot.o),t.fixedYaw=Qs(t.target,new b),i.fixedYaw=Qs(i.target,new b),n.target.set(0,0,0).add(new b(this.cornerSpot.p.z,0,-this.cornerSpot.p.x).setLength(1.2));break;case"ended":{if(this.decision){let a=new b(0,0,0),o=new b(Math.sin(this.cam.yaw),0,Math.cos(this.cam.yaw)),l=new b(o.z,0,-o.x),h=Math.atan2(o.x,o.z);n.target.copy(a);let{W:c,L:u}=this.decision;(c||t).target.copy(a).addScaledVector(l,-.55),(u||i).target.copy(a).addScaledVector(l,.55),t.fixedYaw=i.fixedYaw=n.fixedYaw=h}else if(this.ended){let{W:a,L:o,spot:l,lPos:h,lYaw:c}=this.ended;o.target.copy(h),o.fixedYaw=c,a.target.copy(l),a.fixedYaw=Math.atan2(this.camera.position.x-l.x,this.camera.position.z-l.z),n.target.copy(h).addScaledVector(this.farSide(),.9)}break}}(this.mode!=="ended"||!this.decision)&&(n.fixedYaw=null)}farSide(){return new b(-Math.sin(this.cam.yaw),0,-Math.cos(this.cam.yaw))}place(e,t){e.pos.lerp(e.target,ns(e.rate,t));let i=e.fixedYaw??(e===this.ref?Qs(e.pos,this.focusPoint()):Qs(e.pos,this.other(e).pos));e.yaw=Tc(e.yaw,i,ns(8,t)),this.t>e.lungeUntil&&(e.lungeTarget=0),e.lunge+=(e.lungeTarget-e.lunge)*ns(14,t);let n=e.f.root;n.position.set(e.pos.x+Math.sin(e.yaw)*e.lunge,0,e.pos.z+Math.cos(e.yaw)*e.lunge),n.rotation.y=e.yaw,e.ring&&e.ring.position.set(n.position.x,.012,n.position.z)}focusPoint(){return this.P.pos.clone().add(this.O.pos).multiplyScalar(.5)}spark(e,t){let i=t>1.2?6:2;for(let n=0;n<i;n++){let r=this.sparks.find(a=>a.t>=a.dur);if(!r)return;r.t=0,r.dur=n===0?.18:.45,r.size=n===0?.35+t*.2:.06,r.s.position.copy(e),r.v.set((Math.random()-.5)*2.5,Math.random()*2,(Math.random()-.5)*2.5),n===0&&r.v.set(0,0,0),r.s.visible=!0}}closeUp(e,t,i=!1){e&&(this.cam.close={s:e,until:this.real+t,low:i,fresh:!0})}snapCamera(){this.updateCamera(0,!0)}updateCamera(e,t=!1){let i=this.cam,n=this.P.pos,r=this.O.pos,a=r.clone().sub(n),o=Math.atan2(a.x,a.z)+Math.PI/2;Math.abs(Tc(i.yaw,o,1)-i.yaw)>Math.PI/2&&(o+=Math.PI);let l,h,c,u=o+Math.sin(this.real*.07)*.5+this.userYaw,d=1.4;if(i.close&&this.real>i.close.until&&(i.close=null,t=!0),i.close)l=i.close.s.f.worldPoint(i.close.low?"chest":"head"),h=i.close.low?2.6:2.3,c=i.close.low?.9:.25,u=o+.65+this.userYaw,i.close.fresh&&(i.close.fresh=!1,t=!0),d=3;else{l=n.clone().add(r).multiplyScalar(.5);let y=this.mode;y==="ended"&&this.ended&&(l=this.ended.W.pos.clone().lerp(this.ended.L.pos,.35)),y==="ended"&&this.decision&&(l=new b),l.y=y==="ground"||y==="down"?.55:1.05,h={stand:4.7,intro:3.9,ground:3.9,down:4.1,corners:6.4,ended:4.4}[y]||4.7,c={corners:4.4,ground:1.1,down:1}[y]??.7,y==="corners"&&(l.set(0,.9,0),this.camera.aspect<1.1&&(u=Math.atan2(this.cornerSpot.p.x,this.cornerSpot.p.z)+.15+this.userYaw,h=8,c=5.5))}let p=t?1:ns(d,e);i.yaw=Tc(i.yaw,u,p),i.dist+=(h-i.dist)*p,i.h+=(c-i.h)*p,i.focus.lerp(l,t?1:ns(d*1.5,e));let m=this.camera;m.position.set(i.focus.x+Math.sin(i.yaw)*i.dist,i.focus.y+i.h,i.focus.z+Math.cos(i.yaw)*i.dist);let g=Math.hypot(m.position.x,m.position.z),f=this.mode==="corners"&&!i.close?Mt+4:Mt-.45;g>f&&(m.position.x*=f/g,m.position.z*=f/g,m.position.y+=(g-f)*.35);for(let y of this.panels)y.visible=y.position.distanceTo(m.position)>1.6||g<Mt-1.6;i.shake>.001&&(m.position.x+=(Math.random()-.5)*i.shake,m.position.y+=(Math.random()-.5)*i.shake,i.shake*=Math.exp(-e*6)),m.lookAt(i.focus)}update(e){if(!this.P)return;this.real+=e;let t=this.real<this.slowUntil?.3:1,i=e*t*this.speed;this.t+=i;let n=this.timers.filter(r=>r.at<=this.t);this.timers=this.timers.filter(r=>r.at>this.t),n.forEach(r=>r.fn()),this.layout(i);for(let r of[this.P,this.O,this.ref])r.rate=this.mode==="ground"?7:4,this.place(r,i),r.f.update(i);this.excite+=(.25-this.excite)*ns(.35,e),this.crowd.update(this.real,this.excite);for(let r of this.drops)r.live&&(r.v.y-=9.8*i,r.m.position.addScaledVector(r.v,i),r.m.position.y<=.02&&(r.live=!1,r.m.visible=!1,Math.hypot(r.m.position.x,r.m.position.z)<Mt-.3&&this.stain(r.m.position.x,r.m.position.z,.03+Math.random()*.07)));for(let r of this.sparks){if(r.t>=r.dur)continue;r.t+=i;let a=Math.min(1,r.t/r.dur);r.s.position.addScaledVector(r.v,i),r.v.y-=6*i,r.s.scale.setScalar(r.size*(r.size>.1?.4+a:1)),r.s.material.opacity=1-a,a>=1&&(r.s.visible=!1)}this.updateCamera(e)}};var he=class extends Error{},ge=()=>Math.random(),De=s=>Math.floor(Math.random()*s),Oc=()=>Math.random()<.5;function rs(){let s=0;for(;s===0;)s=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*Math.random())}var qe=s=>s[De(s.length)],gt=(s,e,t)=>Math.max(e,Math.min(t,s)),ia=s=>Math.round(s).toLocaleString("en-US");function Wg(s){for(let e=s.length-1;e>0;e--){let t=De(e+1);[s[e],s[t]]=[s[t],s[e]]}return s}function Jo(){let s="";for(let e=0;e<32;e++)s+=De(16).toString(16);return s}var jt=["striking","power","speed","wrestling","grappling","cardio","chin"],r0=["Striker","Wrestler","Jiu-Jitsu","Balanced"],jg=["Marcus","Diego","Ivan","Kenji","Tariq","Lucas","Mateo","Andre","Sergei","Malik","Rafael","Connor","Jamal","Tomasz","Kai","Darius","Elijah","Bruno","Nikolai","Omar","Viktor","Hiroshi","Leon","Caleb","Arman","Zane","Felipe","Yusuf","Dmitri","Jae-won","Mason","Tyrell","Santiago","Emeka","Rustam","Liam","Paulo","Gabe","Anton","Quinn"],$g=["Silva","Petrov","Okafor","Tanaka","Reyes","Kowalski","Brennan","Haddad","Volkov","Santos","Mendes","Novak","Adeyemi","Kim","Duarte","Morales","Ivanov","Walsh","Nakamura","Costa","Abdullaev","Fischer","Okoye","Lindqvist","Moreau","Gutierrez","Tsarukyan","Barros","Hughes","Nguyen","Castillo","Yamamoto","Kruger","Dvorak","Ferreira","O'Rourke","Bakr","Salazar","Jensen","Popescu"],Xg=["The Hammer","Iceman","The Machine","Bulldozer","The Python","Lights Out","Storm","The Reaper","Mad Dog","The Surgeon","Thunder","The Wolf","Cyclone","The Anaconda","Dynamite","Ghost","The Butcher","Smooth","The Natural","Venom","Tank","Kid Danger","The Professor","Wildfire"],Fc=["USA","Brazil","Russia","Mexico","Ireland","Japan","Nigeria","Poland","Australia","Canada","Georgia","Sweden","England","South Korea","France","Kazakhstan","Netherlands","Cuba","Vietnam","Philippines"],yt=class s{constructor(e,t,i,n,r){this.id=Jo().slice(0,12),this.name=e,this.nickname=t||"",this.style=i,this.country=n,this.age=r,this.stats={};for(let a of jt)this.stats[a]=40;this.wins=this.losses=this.draws=this.koWins=this.subWins=this.decWins=0,this.streak=0,this.player=!1,this.look=null}get(e){return this.stats[e]??0}set(e,t){this.stats[e]=gt(t,1,99)}add(e,t){this.set(e,this.get(e)+t)}overall(){let e=0;for(let t of jt)e+=this.get(t);return Math.round(e/jt.length)}record(){return`${this.wins}-${this.losses}-${this.draws}`}lastName(){return this.name.slice(this.name.lastIndexOf(" ")+1)}displayName(){if(!this.nickname.trim())return this.name;let e=this.name.lastIndexOf(" ");return e<0?`${this.name} "${this.nickname}"`:`${this.name.slice(0,e)} "${this.nickname}" ${this.name.slice(e+1)}`}recordResult(e,t){e==="W"?(this.wins++,this.streak=this.streak>0?this.streak+1:1,t==="KO"?this.koWins++:t==="SUB"?this.subWins++:this.decWins++):e==="L"?(this.losses++,this.streak=this.streak<0?this.streak-1:-1):(this.draws++,this.streak=0)}static bias(e,t){let i={Striker:{striking:12,power:8,speed:6,wrestling:-8,grappling:-10},Wrestler:{wrestling:14,cardio:7,grappling:3,power:2,striking:-6,speed:-3},"Jiu-Jitsu":{grappling:16,wrestling:3,cardio:3,striking:-8,power:-6}}[e];return i&&i[t]||0}static weightAdj(e,t){let i=e-3.5;return t==="power"?i*1.6:t==="speed"?-i*1.6:t==="chin"?i*.6:0}static generate(e,t){let i=qe(r0),n=qe(jg)+" "+qe($g),r=ge()<.6?qe(Xg):"",a=new s(n,r,i,qe(Fc),22+De(13));for(let o of jt)a.set(o,e+s.bias(i,o)+s.weightAdj(t,o)+rs()*4);return a.wins=Math.max(0,Math.trunc((e-30)/3.5)+De(4)),a.losses=De(2+Math.floor(a.wins/4)),a.draws=ge()<.15?1:0,a.koWins=Math.floor(De(a.wins+1)/2),a.subWins=Math.floor(De(a.wins-a.koWins+1)/2),a.decWins=a.wins-a.koWins-a.subWins,a.streak=De(4),a}toJson(){return{name:this.name,nickname:this.nickname,displayName:this.displayName(),style:this.style,country:this.country,age:this.age,record:this.record(),overall:this.overall(),koWins:this.koWins,subWins:this.subWins,decWins:this.decWins,streak:this.streak,stats:{...this.stats},look:this.look}}};yt.tag="Fighter";function Yg(s,e){let t=jt.map(n=>Math.round(e+yt.bias(s.style,n)*.5)),i=e*jt.length-t.reduce((n,r)=>n+r,0);for(let n=0;i!==0;n=(n+1)%t.length){let r=Math.sign(i);t[n]+=r,i-=r}jt.forEach((n,r)=>s.set(n,t[r]))}function Ac(s){return["Champion","Champion","Champ-champ","Triple champ","Quadruple champ"][s]||s+"-belt champion"}var a0=["head","striking","wrestling","bjj","snc","physio","manager"],qg=[0,100,250,600,1500,3500],Jg=["Greg","Rafa","Mike","Duke","Javier","Firas","Trevor","Eddie","Mark","Henri","Ray","Sam","Bas","Andre","Lou","Teo","Frankie","Coach Kim","Pat","Oleg"],Kg=["Jacobsen","Cordova","Winkler","Rourke","Mendez","Haddadi","Whitlock","Bravo","Delgado","Dunmore","Lombardi","Kearney","Tatum","Mirkovic","Sauer","Ben\xEDtez","Reed","Holmberg","Okafor","Varga"],Zg={head:"Head Coach",striking:"Striking Coach",wrestling:"Wrestling Coach",bjj:"BJJ Coach",snc:"Strength & Conditioning",physio:"Physio",manager:"Manager"},rn=class s{constructor(e,t,i){this.role=e,this.name=t,this.stars=i}salary(){return qg[this.stars]}signingFee(){return this.salary()*4}fameRequired(){return(this.stars-1)*12}static title(e){return Zg[e]||e}static perk(e,t){switch(e){case"head":return`+${3*t}% all training, +${2*t} stamina between rounds`+(t>=3?", scouts the opponent's game plan":"");case"striking":return`+${10*t}% striking, power & speed training`;case"wrestling":return`+${10*t}% wrestling training`;case"bjj":return`+${10*t}% grappling training`;case"snc":return`+${10*t}% cardio & chin training, -${t} energy per session`;case"physio":return`-${15*t}% injury risk, faster healing, +${3*t} energy on rest weeks`;case"manager":return`+${5*t}% purses, extra fame from media & trash talk`;default:return""}}static generate(){let e=qe(a0),t=ge(),i=t<.3?1:t<.6?2:t<.82?3:t<.94?4:5;return new s(e,qe(Jg)+" "+qe(Kg),i)}toJson(){return{role:this.role,title:s.title(this.role),name:this.name,stars:this.stars,salary:this.salary(),fee:this.signingFee(),fameRequired:this.fameRequired(),perk:s.perk(this.role,this.stars)}}};rn.tag="Staff";var tn={RESPECT:["{o} is a tough fighter and I respect the grind. But respect ends when the cage door closes.","Nothing but respect for {o}. May the best fighter win.","{o} has earned this. I'm just going to be better on the night.","I've studied {o} for years. Great fighter. That's why beating them will mean something."],TRASH:["{o} fights like they learned MMA from a video game. I'm going to expose that.","I watched {o}'s highlight reel. Didn't take long.","Tell {o} to enjoy the walkout. It's the best part of the night for them.","{o}'s chin has been writing checks the rest of that body can't cash.","I'm going to put {o} on a poster \u2014 the 'before' picture.","{o} has a great ground game. That's where they'll be looking at the lights from."],PERSONAL:["{o} is a fraud, the whole gym knows it, and I'm going to prove it in front of everyone.","When I'm done, {o} will be teaching seminars on how to lose.","{o}'s coach should be charged with negligence for letting them take this fight.","I don't just want to beat {o}. I want {o} to retire."],REPLY_RESPECT:["Respect to {m}. It's going to be a great fight.","{m} is the real deal. I'm ready for war.","Class act, that {m}. Still putting them down, though."],REPLY_CALM:["{m} talks a lot for someone who hasn't fought anybody.","I'll let my hands do the talking on fight night.","Keep my name in your mouth, {m}. It's the closest you'll get to a win.","Words don't win fights. See you in the cage."],REPLY_ANGRY:["Say that to my face, {m}. Oh wait \u2014 you will. And then you'll be asleep.","This is personal now. {m} is leaving on a stretcher.","I'm going to make {m} regret every single word.","I've never wanted to hurt someone this badly. {m} just made my whole camp easy."],CALLOUTS:["{o} is hiding from me. Everyone knows I'm the better fighter.","Still waiting on {o} to sign the contract. Scared?","{o} got lucky last time and the whole world knows it.","I'll fight {o} anywhere, any time. Their team keeps saying no."]},$o=(s,e,t)=>s.replaceAll("{o}",e).replaceAll("{m}",t),Cc=300,Hc={BALANCED:[1,1],STRIKE:[1.2,1],WRESTLE:[1.1,1.3],SUBMIT:[1,1.15],COUNTER:[.6,.65],ALLOUT:[1.6,1.9]},qp=s=>Hc[s][0],Qg=s=>Hc[s][1],Jp=["jab-cross","stiff jab","overhand right","left hook","body kick","leg kick","uppercut","spinning back fist","knee up the middle","1-2-hook combination","straight left","calf kick","teep to the body","oblique kick","switch kick to the body","spinning back kick to the body","superman punch","front kick"],ev=["crushing overhand right","perfectly timed left hook","head kick","flying knee","short uppercut","counter right hand"],Lc=["spinning back kick","spinning heel kick","spinning back elbow","superman punch","front kick to the face","question mark kick","cartwheel kick","tornado kick","rolling thunder kick","Showtime kick","axe kick","hook kick","jumping switch kick","jumping spinning back fist","flying knee","spinning back fist"],tv=[["shoots a double-leg","double-leg"],["hits a single-leg","single-leg"],["secures a body lock","body lock"],["times a reactive takedown","reactive takedown"],["trips from the clinch","trip"],["hits a huge suplex","suplex"],["picks up and SLAMS","slam"],["launches a judo hip toss on","judo throw"],["snatches an ankle pick on","ankle pick"]],Bc={"rear-naked choke":"back","arm-triangle choke":"side",kimura:"side","D'Arce choke":"headlock",armbar:"mount","guillotine choke":"headlock",americana:"side"},iv=Object.keys(Bc),nv=["triangle choke","armbar","guillotine choke","kimura","heel hook","omoplata"],Pc=["guard","half","side","mount","back"],Kp={half:" passes into half guard.",side:" passes to side control.",mount:" climbs to full mount!",back:" takes the back!",headlock:" snaps down into a front headlock."},ir=s=>("aeiou".includes(s[0].toLowerCase())?"an ":"a ")+s,Xo=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0"),rr=class{constructor(e,t){this.f=e,this.tag=t,this.damage=0,this.stamina=100,this.bonus=0,this.plan="BALANCED",this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0,this.totSig=this.totTd=this.totKd=0}s(e){return Math.min(99,this.f.get(e)+this.bonus)}sf(){return .45+this.stamina/180}n(){return this.f.lastName()}newRound(){this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0}toJson(){return{name:this.f.displayName(),record:this.f.record(),overall:this.f.overall(),style:this.f.style,look:this.f.look,realName:this.f.name,health:Math.max(0,100-this.damage),stamina:Math.max(0,this.stamina),sig:this.totSig,td:this.totTd,kd:this.totKd,plan:this.plan}}};rr.tag="Corner";var aa=class{constructor(e,t,i,n,r,a){this.p=new rr(e,"p"),this.o=new rr(t,"o"),this.o.bonus=r,this.rounds=i,this.title=n,this.coachStars=a,this.round=0,this.finished=!1,this.winner=this.methodType=this.method=this.endTime=null,this.endRound=0,this.judges=[[0,0],[0,0],[0,0]],this.logs=[],this.current=null,this.ground=!1,this.topTag=null,this.pos=null,this.clock=0,this.oppNext=this.aiPlan(1)}get top(){return this.topTag==="p"?this.p:this.topTag==="o"?this.o:null}set top(e){this.topTag=e?e.tag:null}playerDamage(){return this.p.damage}simulateRound(e){if(this.finished)throw new he("The fight is over.");for(this.round++,this.p.plan=e,this.o.plan=this.oppNext,this.p.newRound(),this.o.newRound(),this.ground=!1,this.top=null,this.pos=null,this.clock=0,this.current=[],this.logs.push(this.current),this.ev("info",null,"Round "+this.round+" \u2014 touch gloves and let's go!");!this.finished;){let t=10+De(16);if(this.clock+t>=Cc){this.ground&&(this.top.control+=Cc-this.clock),this.clock=Cc;break}this.clock+=t,this.ground?(this.top.control+=t,this.groundExchange()):this.standExchange()}this.finished||this.closeRound()}aiPlan(e){let t={Striker:"STRIKE",Wrestler:"WRESTLE","Jiu-Jitsu":"SUBMIT"}[this.o.f.style]||"BALANCED",i=ge();return e===this.rounds&&this.rounds>1&&this.cardLead()>0&&i<.6?"ALLOUT":this.o.damage>60&&i<.4?this.o.f.style==="Striker"?"COUNTER":"WRESTLE":i<.2?"BALANCED":t}cardLead(){let e=0;for(let t of this.judges)e+=t[0]-t[1];return e}other(e){return e===this.p?this.o:this.p}drain(e){return 3.5*(1.6-e.s("cardio")/100)*Qg(e.plan)}standExchange(){let e=this.p,t=this.o,i=qp(e.plan)*(e.s("speed")+50)*e.sf(),n=qp(t.plan)*(t.s("speed")+50)*t.sf(),r=ge()*(i+n)<i?e:t,a=this.other(r),o={STRIKE:.08,WRESTLE:.55,SUBMIT:.45,COUNTER:.15,ALLOUT:.05}[r.plan]??gt(.22+(r.s("wrestling")-a.s("wrestling")-(r.s("striking")-a.s("striking")))/150,.05,.6);if(ge()<o?this.takedown(r,a):this.strike(r,a,!1),!this.finished&&!this.ground){let l=a.plan==="COUNTER"?.5:.2;ge()<l&&this.strike(a,r,!0)}}strike(e,t,i){let n=2+De(4)+(e.plan==="ALLOUT"?2:0),r=.38+(e.s("striking")-t.s("striking"))*.004+(e.s("speed")-t.s("speed"))*.002;r=r*e.sf()+(i?.06:0)-(t.plan==="COUNTER"?.05:0)+t.damage/500,r=gt(r,.1,.75);let a=0,o=0,l=!1;for(let c=0;c<n;c++)ge()<r&&(a++,o+=(.6+e.s("power")/60)*(.5+ge())*(e.plan==="ALLOUT"?1.25:1),!l&&ge()<.012+e.s("power")/3e3&&(l=!0));e.stamina=Math.max(0,e.stamina-this.drain(e));let h=.05+Math.max(0,e.s("striking")+e.s("speed")-110)/300;if(a===0){if(ge()<.35){let c=ge()<h*2?qe(Lc):qe(Jp);this.ev("miss",e,e.n()+" throws "+ir(c)+" but "+t.n()+" slips it.",c,0)}return}if(e.sig+=a,e.totSig+=a,l){o+=6+e.s("power")/8,this.hit(e,t,o);let c=ge()<.25+h?qe(Lc):qe(ev),u=e.s("power")/100*.55*(1.25-t.s("chin")/100)+t.damage/250;if(ge()<u){e.kd++,e.totKd++,this.ev("kd",e,"DOWN GOES "+t.n().toUpperCase()+"! A "+c+" from "+e.n()+" puts "+t.n()+" on the canvas!",c,a);let d=.2+t.damage/180-t.s("chin")/400+(e.plan==="ALLOUT"?.1:0);if(ge()<d){Oc()?this.finish(e,"KO","KO ("+c+")"):this.finish(e,"KO","TKO (punches)");return}t.damage+=4,this.ev("info",t,t.n()+" survives the follow-up and makes it back to the feet!")}else this.ev("big",e,e.n()+" lands "+ir(c)+"! "+t.n()+" is rocked.",c,a)}else{this.hit(e,t,o);let c=ge()<h?qe(Lc):qe(Jp),u;i?u=e.n()+" fires back with "+ir(c)+".":a>=4?u=e.n()+" unloads a flurry \u2014 "+a+" strikes land on "+t.n()+".":a>=2?u=e.n()+" connects with "+ir(c)+".":u=e.n()+" lands "+ir(c)+".",this.ev("strike",e,u,c,a)}this.checkStoppage(e,t,"punches")}takedown(e,t){let i=.32+(e.s("wrestling")-t.s("wrestling"))*.008;if(i=gt(i*e.sf()+(t.stamina<35?.1:0),.05,.85),e.stamina=Math.max(0,e.stamina-this.drain(e)*1.4),ge()<i){e.td++,e.totTd++;let[n,r]=qe(tv);this.ground=!0,this.top=e;let a=ge(),o=r==="slam"||r==="suplex"||r==="judo throw"?.35:0;this.pos=a<.08+o/3?"mount":a<.2+o?"side":a<.42+o?"half":"guard";let l=/SLAMS|on$/.test(n)?e.n()+" "+n+" "+t.n()+"!":e.n()+" "+n+" and takes "+t.n()+" down.";this.ev("td",e,l,r,0)}else this.ev("stuff",t,t.n()+" stuffs a takedown attempt from "+e.n()+".")}groundExchange(){let e=this.top,t=this.other(e),i=(t.plan==="SUBMIT"?.45:.3)+(t.s("grappling")>e.s("grappling")+10?.1:0);if(ge()<i)if((t.plan==="SUBMIT"||t.s("grappling")>65&&ge()<.35)&&ge()<.5)this.submission(t,e,!0);else{let r=.28+(t.s("wrestling")-e.s("wrestling"))*.006+(t.s("grappling")-e.s("grappling"))*.003;r=gt(r*t.sf(),.05,.7),ge()<r?t.s("grappling")>e.s("grappling")&&ge()<.3?(this.top=t,this.pos=ge()<.3?"mount":"guard",this.ev("sweep",t,t.n()+" hits a slick sweep and ends up "+(this.pos==="mount"?"in full mount!":"on top!"))):this.position()>=2&&ge()<.5?(this.pos="guard",this.ev("ground",t,t.n()+" shrimps out and recovers guard.")):(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" scrambles back to the feet.")):ge()<.4&&this.ev("ground",e,e.n()+" keeps "+t.n()+" pinned against the fence.")}else{let n=(e.plan==="SUBMIT"||e.s("grappling")>70&&ge()<.25)&&ge()<.6,r=.18+(e.s("grappling")-t.s("grappling"))*.006;n?this.submission(e,t,!1):this.position()<4&&ge()<gt(r,.05,.45)?this.advance(e):this.groundAndPound(e,t)}e.stamina=Math.max(0,e.stamina-this.drain(e)*.8),t.stamina=Math.max(0,t.stamina-this.drain(t)*1.1)}position(){return Math.max(0,Pc.indexOf(this.pos||"guard"))}advance(e){let t=this.position(),i=t>=1&&t<3&&ge()<.2?"back":Pc[t+1];this.pos=i,this.ev("ground",e,e.n()+Kp[i])}groundAndPound(e,t){let i=2+De(4),n=.45+(e.s("wrestling")+e.s("grappling")-t.s("wrestling")-t.s("grappling"))*.002;n=gt(n*e.sf(),.2,.75);let r=0,a=0;for(let l=0;l<i;l++)ge()<n&&(r++,a+=(.4+e.s("power")/80)*(.5+ge())*[1,1.05,1.1,1.3,1.2][this.position()]);if(r===0){ge()<.5&&this.ev("ground",t,e.n()+" postures up but "+t.n()+" ties up the arms.");return}e.sig+=r,e.totSig+=r,this.hit(e,t,a);let o={mount:" from full mount",back:" from back control",side:" from side control"}[this.pos]||"";r>=3?this.ev("gnp",e,e.n()+" rains down ground and pound"+o+" \u2014 "+r+" shots land!","punches",r):this.ev("gnp",e,e.n()+" lands "+(r===1?"a short elbow":"short punches")+" from top.",r===1?"elbow":"punches",r),this.checkStoppage(e,t,"ground and pound")}submission(e,t,i){e.subAtt++;let n=qe(i?nv:iv);!i&&Bc[n]!==this.pos&&(this.pos=Bc[n],this.ev("ground",e,e.n()+(Kp[this.pos]||" moves to "+this.pos+"."))),i&&(this.pos=n==="heel hook"?"legs":"guard");let r=.07+(e.s("grappling")-t.s("grappling"))*.006+t.damage/400+(t.stamina<35?.07:0);if(i&&(r*=.7),r=gt(r*e.sf(),.01,.55),e.stamina=Math.max(0,e.stamina-3),this.ev("subatt",e,e.n()+" locks up "+ir(n)+(i?" from the bottom!":"!"),n,0),ge()<r){this.finish(e,"SUB","Submission ("+n+")");return}this.ev("info",t,t.n()+" defends and escapes the "+n+"."),this.pos==="legs"||this.pos==="headlock"?this.pos="guard":!i&&ge()<.5&&(this.pos=Pc[Math.max(0,this.position()-2)]),!i&&ge()<.25&&(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" uses the scramble to get back up."))}hit(e,t,i){t.damage+=i,e.dealt+=i}checkStoppage(e,t,i){this.finished||(t.damage>=100||t.damage>85&&ge()<.2)&&(this.ev("info",e,"The referee jumps in to save "+t.n()+"!"),this.finish(e,"KO","TKO ("+i+")"))}score(e){return e.sig+e.dealt*.6+e.td*3+e.control/25+e.kd*10+e.subAtt*2}closeRound(){let e=this.p,t=this.o,i=this.score(e),n=this.score(t);for(let r of this.judges){let a=i*(1+rs()*.12)+rs()*1.5,o=n*(1+rs()*.12)+rs()*1.5,l=a-o,h=10,c=10;l>=.6?c=e.kd-t.kd>=2||a>o*3&&l>30?8:9:l<=-.6&&(h=t.kd-e.kd>=2||o>a*3&&-l>30?8:9),r[0]+=h,r[1]+=c}this.ev("round",null,"End of round "+this.round+". Sig. strikes "+e.sig+"\u2013"+t.sig+", takedowns "+e.td+"\u2013"+t.td+", control "+Xo(e.control)+"\u2013"+Xo(t.control)+".");for(let r of[e,t])r.stamina=Math.min(100,r.stamina+18+r.s("cardio")/5+(r===e?this.coachStars*2:0)),r.damage=Math.max(0,r.damage-4);for(let r of[e,t])if(r.damage>85&&ge()<.15){this.ev("info",r,"The cageside doctor takes a look at "+r.n()+" and waves it off!"),this.finish(this.other(r),"KO","TKO (doctor stoppage)");return}this.round===this.rounds?this.decision():this.oppNext=this.aiPlan(this.round+1)}decision(){let e=0,t=0;for(let r of this.judges)r[0]>r[1]?e++:r[1]>r[0]&&t++;this.finished=!0,this.methodType="DEC",this.endRound=this.rounds,this.endTime="5:00",e>=2?(this.winner="player",this.method=e===3?"Unanimous Decision":t===1?"Split Decision":"Majority Decision"):t>=2?(this.winner="opponent",this.method=t===3?"Unanimous Decision":e===1?"Split Decision":"Majority Decision"):(this.winner="draw",this.method=e===0&&t===0?"Unanimous Draw":e===1&&t===1?"Split Draw":"Majority Draw");let i=this.winner==="player"?this.p:this.winner==="opponent"?this.o:null,n=i?"Winner by "+this.method+": "+i.f.displayName()+"!":"This one is a draw!";this.ev("finish",i,"The judges score it "+this.cards().join(", ")+". "+n)}finish(e,t,i){this.finished=!0,this.winner=e===this.p?"player":"opponent",this.methodType=t,this.method=i,this.endRound=this.round,this.endTime=Xo(this.clock),this.ev("finish",e,"IT'S ALL OVER! "+e.f.displayName()+" wins by "+i+" at "+this.endTime+" of round "+this.round+"!")}cards(){return this.judges.map(e=>e[0]+"-"+e[1])}ev(e,t,i,n=null,r=0){let a={t:Xo(this.clock),type:e,side:t?t.tag:"n",text:i,g:this.ground&&this.topTag?this.topTag:""};this.ground&&this.topTag&&(a.p=this.pos||"guard"),n!=null&&(a.move=n),r>0&&(a.n=r),this.current.push(a)}toJson(){return{round:this.round,rounds:this.rounds,title:this.title,finished:this.finished,winner:this.winner,methodType:this.methodType,method:this.method,endRound:this.endRound,endTime:this.endTime,player:this.p.toJson(),opponent:this.o.toJson(),logs:this.logs,belt:this.belt||null,cards:this.finished?this.cards():null,scout:this.coachStars>=3&&!this.finished?this.oppNext:null,oppFiredUp:this.o.bonus>0}}};aa.tag="Fight";var Ct=["Flyweight","Bantamweight","Featherweight","Lightweight","Welterweight","Middleweight","Light Heavyweight","Heavyweight"],nn=["Garage Gym","Local MMA Club","Regional Fight Team","Elite Camp","World-Class Academy"],Zp=[0,3e3,15e3,5e4,15e4],kc=[1,1.25,1.5,1.8,2.1],Qp=[50,150,400,1e3,2500],Ic=3,e0=52,ss=16,t0=26,sv=60,rv=20,na=78,sa=66,an=class{constructor(e,t,i,n,r,a,o){this.opp=e,this.weeks=t,this.purse=i,this.winBonus=n,this.rounds=r,this.title=a,this.contender=o,this.talkLevel=0,this.oppBonus=0,this.kind=a?"title":null}};an.tag="Offer";var Fi=[{id:"apartment",name:"Rented apartment",price:0,upkeep:150,joy:0},{id:"starter",name:"Starter home",price:25e4,upkeep:450,joy:6},{id:"family",name:"Family house",price:9e5,upkeep:1200,joy:12},{id:"villa",name:"Luxury villa with pool",price:45e5,upkeep:4500,joy:20},{id:"mansion",name:"Hillside mega-mansion",price:15e6,upkeep:12e3,joy:28}],ra=[{id:"hatch",name:"Used hatchback",price:8e3,joy:2,fame:0,color:"#8d99a6"},{id:"pickup",name:"Pickup truck",price:45e3,joy:4,fame:0,color:"#2b4c7e"},{id:"sedan",name:"Sports sedan",price:7e4,joy:5,fame:1,color:"#1d1d1f"},{id:"muscle",name:"Muscle car",price:95e3,joy:7,fame:2,color:"#c8102e"},{id:"suv",name:"Luxury SUV",price:16e4,joy:7,fame:2,color:"#eeeeee"},{id:"super",name:"Italian supercar",price:38e4,joy:12,fame:4,color:"#f4b942"},{id:"hyper",name:"Hypercar",price:28e5,joy:16,fame:6,color:"#7c3aed"}],Yo=[{id:"dog",name:"Dog",price:1500,upkeep:40,joy:8},{id:"cat",name:"Cat",price:800,upkeep:25,joy:6},{id:"parrot",name:"Parrot",price:2500,upkeep:20,joy:5},{id:"tiger",name:"Tiger",price:25e4,upkeep:2500,joy:10}],nr=[{name:"Frugal",cost:100,joy:-4},{name:"Comfortable",cost:600,joy:2},{name:"Lavish",cost:4e3,joy:8},{name:"Baller",cost:25e3,joy:14}],av=["Linh","Sofia","Mia","Chloe","Ava","Hana","Lucia","Maya","Isabella","Emma","Yuki","Amara","Daniel","Lucas","Mateo","Noah","Kai","Leo","Ethan","Minh Anh","Thao","Bao","Camila","Zara"],ov=["Max","Luna","Leo","Mila","Kai","Nova","An","Bella","Rocky","Aria","Tony","Zoe","Bao","Lily"],lv=["nurse","photographer","lawyer","chef","model","teacher","architect","personal trainer","DJ","doctor","designer","pilot"],i0={dog:["Rocky","Bruno","Kimbo","Tyson","Luna","Bella","Max","Ali"],cat:["Mochi","Kitty","Simba","Nala","Tofu"],parrot:["Kiwi","Rio","Mango","Pickles"],tiger:["Rajah","Shere Khan","Stripes","Saber"]},hv=["Dinner by the river","A night at the movies","Rooftop cocktails","Sunset on a yacht","A private chef dinner","A weekend in Paris"],cv={training:["Another day, another 2-a-day \u{1F4AA}","Camp is going crazy right now \u{1F525}","Sharpening the tools \u2694\uFE0F","5am roadwork. Who's up? \u{1F3C3}","Nobody's outworking me."]},uv=["mmafan","cagefreak","kofactory","subhunter","fightnerd","gfcdaily","octagonking","bjjlife","hypeman"],n0={training:["Champ mentality \u{1F525}","Can't wait for the next fight!","Built different \u{1F4AA}","Bro is locked in","Future champ!"],flex:["Sheeeesh \u{1F911}","Money fights!","Teach me your ways","That's a dream ride","W lifestyle"],family:["So wholesome \u2764\uFE0F","Family first \u{1F64F}","Goals!!","Beautiful family","The real champion"],callout:["OH IT'S ON \u{1F37F}","Bad blood!","Sign it!! \u{1F525}","He's scared lol","Make it happen GFC!"]},sr=s=>"$"+Math.round(s).toLocaleString("en-US");function s0(){return[De(6),De(9),De(6),0,De(8)].join(",")}var Nc=(s,e)=>{s.includes(e)||s.push(e)},qo=(s,e)=>{let t=s.indexOf(e);t>=0&&s.splice(t,1)},oa=class{constructor(e,t,i,n,r){if(e===void 0)return;this.weightClass=i,this.me=new yt(e,t,n,r,21),this.me.player=!0;for(let o of jt)this.me.set(o,38+yt.bias(n,o)+yt.weightAdj(i,o)+rs()*3);this.week=1,this.energy=100,this.fame=this.injuryWeeks=this.gym=this.offersAge=0,this.money=1500,this.earnings=0,this.gfc=this.retired=this.inducted=!1,this.regionalWins=this.titleDefenses=this.titlesWon=0,this.peakOverall=this.me.overall(),this.lastDivisionChange=-999,this.lastTalkWeek=-1,this.divisionsWon=[],this.divisionsFought=[Ct[i]],this.rankings=[],this.offers=[],this.scheduled=null,this.fight=null,this.news=[],this.history=[],this.lastResult=this.lastTalk=null,this.team={},this.market=[],this.marketAge=0,this.rival=null,this.rivalHeat=this.rivalWins=this.rivalLosses=this.weeksWithoutRival=0,this.lastRivalFight=-999,this.rivalries=[],this.migrate(),this.buildDivision(),this.log(this.me.name+" turns pro out of a "+nn[0]+". The journey begins.");let a=yt.generate(this.me.overall()+1,i);a.age=21+De(2),a.wins=a.losses=a.draws=a.koWins=a.subWins=a.decWins=a.streak=0,this.setRival(a,30,"came up in the same amateur scene and has been telling everyone you're overrated"),this.refreshMarket(),this.generateOffers()}buildDivision(){this.rankings=[];for(let e=0;e<ss;e++)this.rankings.push(yt.generate(88-e*1.2,this.weightClass));this.interim=null,this.champOut=this.champOutStart=0,this.nextInLine=!1,this.recordChamp(this.rankings[0],"Reigning champion")}life(){return this.lifeState}lifeReady(e){let t=this.lifeState;if(this.retired)throw new he("Your career is over.");if(this.fight)throw new he("Not now \u2014 you're in the middle of a fight.");if(t.done[e]===this.week)throw new he("You already did that this week.")}spend(e,t){if(this.money<e)throw new he("You can't afford "+t+" ("+sr(e)+").");this.money-=e}lifeJoy(e){let t=this.lifeState;t.happiness=gt(t.happiness+e,0,100)}moodMult(){return .85+(this.lifeState?this.lifeState.happiness:50)*.003}happinessTarget(){let e=this.lifeState,t=42+Fi[e.house].joy+nr[e.lifestyle].joy;e.cars.map(n=>ra.find(r=>r.id===n)).filter(Boolean).sort((n,r)=>r.joy-n.joy).forEach((n,r)=>t+=r===0?n.joy:Math.min(3,n.joy/3));for(let n of e.pets)t+=(Yo.find(r=>r.id===n.kind)||{joy:0}).joy;return e.partner&&(t+=e.partner.affection/6+(e.partner.stage==="married"?4:0)),t+=Math.min(4,e.kids.length)*5,this.money<0&&(t-=25),this.injuryWeeks>0&&(t-=6),this.me.streak>=2&&(t+=4),this.me.streak<=-2&&(t-=6),gt(t,0,100)}lifeWeek(){let e=this.lifeState,t=Fi[e.house].upkeep+nr[e.lifestyle].cost+e.pets.reduce((r,a)=>r+((Yo.find(o=>o.id===a.kind)||{}).upkeep||0),0)+e.kids.length*300;this.money-=t;let i=Math.round(e.followers/1e3)*20;this.money+=i,this.earnings+=i,e.lastBills=t,e.lastSponsor=i,e.followers=Math.max(0,Math.round(e.followers+this.fame*this.fame*.6+De(40)+(this.gfc?150:10)-e.followers*.002)),e.followers>=1e6&&!e.milestone1m&&(e.milestone1m=!0,this.log("1 MILLION followers! Brands are lining up.")),e.happiness=Math.round(e.happiness+(this.happinessTarget()-e.happiness)*.25);let n=e.partner;if(n&&(n.affection=gt(n.affection-(e.done.family===this.week-1||e.done.date===this.week-1?0:2)+(e.house>=2?.5:0),0,100),n.affection<=0?this.breakUp(n.stage==="married"?"files for divorce":"breaks up with you"):n.affection<=15&&n.warned!==this.week&&ge()<.3&&(n.warned=this.week,this.log(n.name+" feels neglected. Spend some time together."))),n&&n.stage==="married"&&e.tryingForKids&&ge()<.06&&e.kids.length<6){let r={name:qe(ov),born:this.week,look:s0()};e.kids.push(r),this.lifeJoy(15),this.log("Congratulations! "+r.name+" is born. Welcome to the family!"),this.post("family","Welcome to the world, "+r.name+" \u2764\uFE0F Best win of my life.",3)}}breakUp(e){let t=this.lifeState,i=t.partner;if(i){if(i.stage==="married"){let n=Math.max(0,Math.round(this.money*.3));this.money-=n,this.log(i.name+" "+e+". The divorce costs "+sr(n)+".")}else this.log(i.name+" "+e+".");t.exes.push(i.name),t.partner=null,t.tryingForKids=!1,this.lifeJoy(-20)}}post(e,t,i=1){let n=this.lifeState,r=(n.followers*(.02+ge()*.05)+this.fame*120+50)*i,a=Math.round(r),o=Math.round(r*(.1+ge()*.25));n.followers+=o;let l=[];for(let h=0;h<3;h++)l.push({user:qe(uv)+De(99),text:qe(n0[e]||n0.training)});for(n.feed.unshift({week:this.week,date:this.dateLabel(),kind:e,text:t,likes:a,gained:o,comments:l});n.feed.length>30;)n.feed.pop();return o}lifeAction(e,t={}){let i=this.lifeState,n=this.me;switch(e){case"post":{this.lifeReady("post");let r=String(t.kind||"training"),a,o=1;if(r==="training")a=qe(cv.training);else if(r==="flex"){let h=i.cars.map(c=>ra.find(u=>u.id===c)).filter(Boolean).sort((c,u)=>u.price-c.price)[0];if(!h&&i.house===0)throw new he("Nothing to flex yet. Buy a car or a house first.");a=h?"New whip. "+h.name+" \u{1F3CE}\uFE0F Hard work pays.":"Home sweet "+Fi[i.house].name.toLowerCase()+" \u{1F3E0}",o=1.5+(h?h.fame/3:0)+i.house*.3,this.fame=gt(this.fame+1,0,100)}else if(r==="family"){if(!i.partner&&!i.kids.length&&!i.pets.length)throw new he("No family pics yet \u2014 get a partner, a kid or a pet.");a=i.kids.length?"Family day with my little champ "+qe(i.kids).name+" \u{1F476}":i.partner?"Date night with "+i.partner.name+" \u2764\uFE0F":"Me and "+i.pets[0].name+" \u{1F43E}",o=1.3,this.lifeJoy(3)}else if(r==="callout"){let h=this.scheduled?this.scheduled.opp:this.rival||(this.gfc?this.rankings[0]:null);if(!h)throw new he("Nobody to call out.");a="@"+h.lastName().toLowerCase()+" you're next. Sign the contract. \u{1F94A}",o=2,this.fame=gt(this.fame+2,0,100),h===this.rival&&(this.rivalHeat=Math.min(100,this.rivalHeat+8)),this.scheduled&&h===this.scheduled.opp&&(this.scheduled.oppBonus=Math.min(6,(this.scheduled.oppBonus||0)+1))}else throw new he("Unknown post.");return i.done.post=this.week,"Posted! +"+this.post(r,a,o).toLocaleString("en-US")+" followers."}case"buy":{let r=t.kind,a=t.id;if(r==="house"){let o=Fi.findIndex(c=>c.id===a);if(o<0)throw new he("Unknown house.");if(o===i.house)throw new he("You already live there.");let l=Math.round(Fi[i.house].price*.85),h=Fi[o].price-l;return h>0?this.spend(h,"the "+Fi[o].name.toLowerCase()):this.money-=h,i.house=o,this.lifeJoy(o>0?10:-5),this.log("Moves into a "+Fi[o].name.toLowerCase()+"."),"Welcome home! You moved into the "+Fi[o].name.toLowerCase()+(l?" (old place sold for "+sr(l)+")":"")+"."}if(r==="car"){let o=ra.find(l=>l.id===a);if(!o)throw new he("Unknown car.");if(i.cars.includes(a))throw new he("You already own one.");if(i.cars.length>=6)throw new he("Your garage is full. Sell a car first.");return this.spend(o.price,"the "+o.name),i.cars.push(a),i.driving=a,this.fame=gt(this.fame+o.fame,0,100),this.lifeJoy(o.joy),this.log("Buys a "+o.name+"."),"The keys to your "+o.name+" are yours!"}if(r==="pet"){let o=Yo.find(h=>h.id===a);if(!o)throw new he("Unknown pet.");if(i.pets.length>=4)throw new he("Four pets is plenty.");this.spend(o.price,"a "+o.name.toLowerCase());let l=qe(i0[o.id]||i0.dog);return i.pets.push({kind:o.id,name:l,since:this.week}),this.lifeJoy(o.joy),this.log("Adopts a "+o.name.toLowerCase()+" named "+l+"."),"Meet "+l+", your new "+o.name.toLowerCase()+"!"}throw new he("Unknown purchase.")}case"sell":{if(t.kind==="car"){let r=i.cars.indexOf(t.id),a=ra.find(l=>l.id===t.id);if(r<0||!a)throw new he("You don't own that car.");i.cars.splice(r,1),i.driving===t.id&&(i.driving=i.cars[0]||null);let o=Math.round(a.price*.6);return this.money+=o,"Sold the "+a.name+" for "+sr(o)+"."}throw new he("You can only sell cars here.")}case"drive":{if(t.id&&!i.cars.includes(t.id))throw new he("You don't own that car.");return i.driving=t.id||null,null}case"lifestyle":{let r=Math.trunc(Number(t.level));if(!(r>=0&&r<nr.length))throw new he("Unknown lifestyle.");return i.lifestyle=r,"Lifestyle: "+nr[r].name+" ("+sr(nr[r].cost)+"/week)."}case"meet":{if(this.lifeReady("meet"),i.partner&&i.partner.stage==="married")throw new he("You're married!");i.done.meet=this.week;let r=.35+this.fame/250+i.house*.04+(i.lifestyle>=2?.1:0);return ge()>r?"You chat with a few people, but nobody clicks this time.":(i.candidate={name:qe(av),age:n.age-3+De(7),look:s0(),job:qe(lv),week:this.week},"You hit it off with "+i.candidate.name+", a "+i.candidate.age+"-year-old "+i.candidate.job+"!")}case"ask":{let r=i.candidate;if(!r||r.week!==this.week)throw new he("Meet someone first.");return i.candidate=null,i.partner?(this.log("Caught flirting! "+i.partner.name+" finds out."),i.partner.affection=Math.max(0,i.partner.affection-35),i.partner.affection<=0&&this.breakUp("leaves you"),"That was a bad idea. "+(i.partner?i.partner.name+" is furious.":"You're single again.")):(i.partner={name:r.name,age:r.age,look:r.look,job:r.job,stage:"dating",affection:35,since:this.week},this.lifeJoy(8),this.log("Starts dating "+r.name+"."),"You're dating "+r.name+"! \u2764\uFE0F")}case"date":{this.lifeReady("date");let r=i.partner;if(!r)throw new he("You're single. Meet someone at the caf\xE9 or the club.");let a=[80,400,2500,15e3][i.lifestyle];this.spend(a,"a date"),i.done.date=this.week;let o=8+De(8)+i.lifestyle*2;return r.affection=gt(r.affection+o,0,100),this.lifeJoy(5),qe(hv)+" \u2764\uFE0F (+"+o+" affection)"}case"gift":{this.lifeReady("gift");let r=i.partner;if(!r)throw new he("No one to give a gift to.");let a=Math.max(500,Math.round(this.money*.02));return this.spend(a,"a gift"),i.done.gift=this.week,r.affection=gt(r.affection+10,0,100),"You surprise "+r.name+" with a gift worth "+sr(a)+". \u{1F381}"}case"propose":{let r=i.partner;if(!r||r.stage!=="dating")throw new he("You need to be dating someone.");this.lifeReady("propose"),i.done.propose=this.week;let a=Math.max(5e3,Math.round(this.money*.05));return this.spend(a,"a ring"),ge()<(r.affection-30)/50?(r.stage="engaged",this.lifeJoy(15),this.log("Engaged to "+r.name+"! \u{1F48D}"),this.post("family",r.name+" said YES \u{1F48D} Forever starts now.",2.5),r.name+" said YES! \u{1F48D}"):(r.affection=Math.max(0,r.affection-10),r.name+" says it's too soon. (Build more affection first.)")}case"wedding":{let r=i.partner;if(!r||r.stage!=="engaged")throw new he("Get engaged first.");let a=[2e4,6e4,25e4,15e5][i.lifestyle];return this.spend(a,"the wedding"),r.stage="married",r.affection=gt(r.affection+20,0,100),this.lifeJoy(20),this.fame=gt(this.fame+3,0,100),this.log("Marries "+r.name+"! \u{1F492}"),this.post("family","Just married \u{1F492} Partners for life.",3),"You married "+r.name+"! \u{1F492}"}case"kids":{let r=i.partner;if(!r||r.stage!=="married")throw new he("Get married first.");return i.tryingForKids=!i.tryingForKids,i.tryingForKids?"You and "+r.name+" are trying for a baby. \u{1F476}":"Not right now."}case"family":{if(this.lifeReady("family"),!i.partner&&!i.kids.length&&!i.pets.length)throw new he("There's nobody at home yet.");return i.done.family=this.week,i.partner&&(i.partner.affection=gt(i.partner.affection+8,0,100)),this.lifeJoy(6+i.kids.length*2+i.pets.length),this.energy=Math.min(100,this.energy+10),"Quality time at home. You feel recharged. (+10 energy)"}case"party":return this.lifeReady("party"),i.done.party=this.week,this.spend([200,1e3,8e3,4e4][i.lifestyle],"the bottle service"),this.lifeJoy(8),this.energy=Math.max(0,this.energy-20),this.fame=gt(this.fame+1,0,100),ge()<.12?(this.fame=gt(this.fame-4,0,100),i.followers=Math.round(i.followers*.97),i.partner&&(i.partner.affection=Math.max(0,i.partner.affection-15)),this.log("Scandal! Blurry club photos of "+n.lastName()+" go viral."),"Big night\u2026 but the photos leaked. Scandal! (\u2212fame"+(i.partner?", "+i.partner.name+" is upset":"")+")"):"What a night! VIP section, the whole city knows your name. (\u221220 energy)";default:throw new he("Unknown life action.")}}lifeJson(){let e=this.lifeState;return{happiness:e.happiness,target:Math.round(this.happinessTarget()),followers:e.followers,moodMult:+this.moodMult().toFixed(2),house:e.house,cars:[...e.cars],driving:e.driving,pets:e.pets.map(t=>({...t})),partner:e.partner?{...e.partner}:null,candidate:e.candidate&&e.candidate.week===this.week?{...e.candidate}:null,kids:e.kids.map(t=>({...t,age:Math.floor((this.week-t.born)/52)})),tryingForKids:e.tryingForKids,lifestyle:e.lifestyle,feed:e.feed.slice(0,15),done:Object.fromEntries(Object.entries(e.done).map(([t,i])=>[t,i===this.week])),lastBills:e.lastBills||0,lastSponsor:e.lastSponsor||0,sponsorRate:Math.round(e.followers/1e3)*20,catalog:{houses:Fi,cars:ra,pets:Yo,lifestyles:nr},weddingCost:[2e4,6e4,25e4,15e5][e.lifestyle],dateCost:[80,400,2500,15e3][e.lifestyle]}}migrate(){this.lifeState||(this.lifeState={happiness:60,followers:200+(this.fame||0)*(this.fame||0)*20,house:0,cars:[],driving:null,pets:[],partner:null,candidate:null,kids:[],tryingForKids:!1,lifestyle:1,feed:[],done:{},exes:[]}),this.heldBelts||(this.heldBelts={}),this.lineage||(this.lineage={}),this.interim===void 0&&(this.interim=null),this.champOut===void 0&&(this.champOut=this.champOutStart=0),this.nextInLine===void 0&&(this.nextInLine=!1),this.lastTitleWeek||(this.lastTitleWeek=this.week||1)}division(){return Ct[this.weightClass]}recordChamp(e,t,i=!1){var r,a;let n=(r=this.lineage)[a=this.division()]||(r[a]=[]);for(n.push({name:e.displayName(),player:e===this.me,date:this.dateLabel(),how:t,interim:i,defenses:0});n.length>40;)n.shift()}addDefense(e=!1){let t=this.lineage[this.division()]||[];for(let i=t.length-1;i>=0;i--)if(!!t[i].interim===e){t[i].defenses++;return}}champOutNow(){return this.champOut>this.week&&!this.isChamp()}npcBout(e,t){let i=1/(1+Math.exp((t.overall()-e.overall())/5)),n=ge()<i?e:t,r=n===e?t:e,a=ge(),o=a<.4?"KO":a<.6?"SUB":"DEC";return n.recordResult("W",o),r.recordResult("L",o),{w:n,l:r,how:o==="KO"?"KO/TKO":o==="SUB"?"submission":"decision"}}moveTo(e,t){let i=this.rankings;qo(i,e),i.splice(Math.min(t,i.length),0,e),this.trim()}beltWeek(){let e=this.rankings,t=this.me;if(!this.gfc||e.length<4)return;for(let n of Object.keys(this.heldBelts)){let r=this.week-this.heldBelts[n].since;r===sa&&this.log("Your "+n+" belt hasn't been defended in "+r+" weeks. Defend it soon or it will be stripped."),r>=na&&(delete this.heldBelts[n],this.log("STRIPPED! The GFC takes your "+n+" belt after a year and a half without a defense."))}this.interim&&this.interim!==t&&!e.includes(this.interim)&&(this.interim=null);let i=n=>this.scheduled&&this.scheduled.opp===n;if(this.isChamp()){let n=this.week-this.lastTitleWeek;if(this.scheduled&&this.scheduled.title)return;if(n>=na)return this.strip();if(n===sa&&this.log("The GFC wants a title defense soon \u2014 go a year and a half without one and you'll be stripped."),!this.interim&&(this.injuryWeeks>=8||n>=30)){let a=e[1],o=e[2];if(i(a)||i(o))return;let{w:l,l:h,how:c}=this.npcBout(a,o);this.interim=l,this.moveTo(l,1),this.recordChamp(l,"Won the interim title vs "+h.lastName()+" by "+c,!0),this.log("INTERIM TITLE: "+l.displayName()+" def. "+h.lastName()+" by "+c+" while you were out. Next: unify the belts."),this.scheduled||this.generateOffers()}return}if(this.champOut){if(this.week>=this.champOut){if(this.interim===t||!this.interim)this.champOut=this.champOutStart=0,this.interim===t&&!this.scheduled&&this.generateOffers();else if(this.week>=this.champOut+4&&!i(e[0])&&!i(this.interim)){let n=e[0],r=this.interim,{w:a,l:o,how:l}=this.npcBout(n,r);this.interim=null,this.champOut=this.champOutStart=0,a===r?(this.moveTo(r,0),this.recordChamp(r,"Unified the belts vs "+o.lastName()+" by "+l),this.log("UNIFIED! Interim champ "+r.displayName()+" def. "+n.lastName()+" by "+l+" to become undisputed champion.")):(this.addDefense(),this.log("Champion "+n.displayName()+" returns and unifies the belts, beating "+r.lastName()+" by "+l+"."))}}else if(!this.interim&&this.week>=this.champOutStart+6&&!(this.scheduled&&this.scheduled.kind==="interim")){let n=e.slice(1).filter(l=>l!==t&&!i(l)).slice(0,2);if(n.length<2)return;let{w:r,l:a,how:o}=this.npcBout(n[0],n[1]);this.interim=r,this.moveTo(r,1),this.recordChamp(r,"Won the interim title vs "+a.lastName()+" by "+o,!0),this.log("INTERIM TITLE: "+r.displayName()+" def. "+a.lastName()+" by "+o+" for the interim "+this.division()+" belt.")}}else ge()<.008&&!i(e[0])&&(this.champOutStart=this.week,this.champOut=this.week+18+De(14),this.log("Champion "+e[0].displayName()+" is injured and out for months. The GFC will crown an interim champion."),this.scheduled||this.generateOffers())}strip(){let e=this.rankings,t=this.me;qo(e,t);let i,n;if(this.interim&&this.interim!==t&&e.includes(this.interim))i=this.interim,n="Promoted from interim champion";else{let r=this.npcBout(e[0],e[1]);i=r.w,n="Won the vacant title vs "+r.l.lastName()+" by "+r.how}this.interim=null,this.moveTo(i,0),e.splice(1,0,t),this.trim(),this.recordChamp(i,n),this.log("STRIPPED! The GFC takes the "+this.division()+" belt for inactivity. "+i.displayName()+" is the new champion."),this.scheduled||this.generateOffers()}act(e,t){this.requireActive();let i=this.me,n;switch(e||""){case"train":{if(!jt.includes(t))throw new he("Unknown stat.");if(this.injuryWeeks>0)throw new he("You're injured \u2014 rest up first.");if(this.energy<this.trainCost())throw new he("Too exhausted to train. Take a rest week.");let r=i.get(t);i.add(t,this.trainGain(t)*(t==="chin"?.5:1));let a=this.energy<35&&ge()<.06*this.injuryRisk();this.energy-=this.trainCost(),n=`Trained ${t}: +${(i.get(t)-r).toFixed(1)}`,a&&(n+=this.injure(1+De(3),"overtraining"));break}case"spar":if(this.injuryWeeks>0)throw new he("You're injured \u2014 rest up first.");if(this.energy<30)throw new he("Too exhausted to spar. Take a rest week.");for(let r of["striking","wrestling","grappling","speed"])i.add(r,this.trainGain(r)*.45);i.add("chin",-.15),this.energy-=30,n="Hard sparring \u2014 gains in striking, wrestling, grappling and speed.",ge()<.08*this.injuryRisk()&&(n+=this.injure(1+De(3),"sparring"));break;case"rest":this.energy=Math.min(100,this.energy+35+3*this.stars("physio")),this.injuryWeeks>0&&this.injuryWeeks--,n="Rest week. Energy recovered.";break;case"media":{if(this.energy<10)throw new he("Too exhausted even for interviews.");let r=1+De(this.gfc?5:3)+Math.floor(this.stars("manager")/2),a=this.gfc?1500+this.fame*50:100;this.fame=Math.min(100,this.fame+r),this.money+=a,this.energy-=10,n="Media week: +"+r+" fame, +$"+ia(a)+".";break}case"work":{if(this.energy<15)throw new he("Too exhausted to teach classes.");let r=this.gfc?2e3+this.fame*60:450;this.money+=r,this.energy-=15,n=(this.gfc?"Ran a seminar":"Taught classes at the gym")+": +$"+ia(r)+".";break}default:throw new he("Unknown action.")}return this.advanceWeek(),n}trainCost(){return 22-this.stars("snc")}trainGain(e){let t=this.me.get(e);return 4*kc[this.gym]*this.staffMult(e)*this.ageFactor()*this.moodMult()*Math.pow(Math.max(.01,1-t/97.5),1.6)*(.4+this.energy/166)*(.7+ge()*.6)}staffMult(e){let t=["striking","power","speed"].includes(e)?"striking":e==="wrestling"?"wrestling":e==="grappling"?"bjj":"snc";return 1+.03*this.stars("head")+.1*this.stars(t)}ageFactor(){let e=this.me.age;return e<=24?1.15:e<=28?1:e<=31?.8:e<=34?.55:.35}injuryRisk(){return 1-.15*this.stars("physio")}injure(e,t){e=Math.max(1,e-Math.floor(this.stars("physio")/2)),this.injuryWeeks=Math.max(this.injuryWeeks,e);let i=e+" week"+(e===1?"":"s");return this.log("Injured ("+t+"): out "+i+".")," Ouch \u2014 injured for "+i+"."}upgradeGym(){if(this.retired)throw new he("Your career is over.");if(this.gym>=nn.length-1)throw new he("You're already at the best gym in the world.");let e=Zp[this.gym+1];if(this.money<e)throw new he("You need $"+ia(e)+" to move to "+nn[this.gym+1]+".");return this.money-=e,this.gym++,this.log("Moved training camp to "+nn[this.gym]+"."),"Welcome to "+nn[this.gym]+"! Training is now "+Math.round(kc[this.gym]*100)+"% effective."}accept(e){if(this.requireActive(),this.scheduled)throw new he("You already have a fight booked.");if(!(e>=0&&e<this.offers.length))throw new he("That offer is no longer available.");let t=this.offers[e];if(this.injuryWeeks>=t.weeks)throw new he("You won't be healed in time for that fight.");return this.scheduled=t,this.offers=[],this.log("Booked: "+(t.title?"TITLE FIGHT ":t.opp===this.rival?"GRUDGE MATCH ":"")+"vs "+t.opp.displayName()+" in "+t.weeks+" weeks."),"Fight booked! Get to work \u2014 fight night is in "+t.weeks+" weeks."}retire(){if(this.retired)throw new he("You're already retired.");if(this.fight)throw new he("Finish your fight first.");return this.endCareer(this.me.displayName()+" announces retirement at "+this.me.age+" with a record of "+this.me.record()+"."),"You hang up the gloves. Legacy: "+this.legacyTier()+"."}endCareer(e){this.retired=!0,this.scheduled=null,this.offers=[],this.rival&&this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log(e)}requireActive(){if(this.retired)throw new he("Your career is over.");if(this.fight)throw new he("Finish your fight first.");if(this.fightNight())throw new he("It's fight night! Head to the cage.")}fightNight(){return!!this.scheduled&&this.scheduled.weeks<=0}stars(e){let t=this.team[e];return t?t.stars:0}refreshMarket(){this.market=[],this.marketAge=0;for(let e=0;e<6;e++)this.market.push(rn.generate())}hire(e){if(this.retired)throw new he("Your career is over.");if(!(e>=0&&e<this.market.length))throw new he("That person already signed elsewhere.");let t=this.market[e];if(this.fame<t.fameRequired())throw new he(t.name+" only works with fighters with "+t.fameRequired()+"+ fame.");if(this.money<t.signingFee())throw new he("You need $"+ia(t.signingFee())+" to sign "+t.name+".");this.money-=t.signingFee(),this.market.splice(e,1);let i=this.team[t.role];return this.team[t.role]=t,this.log("Signed "+t.name+" ("+t.stars+"\u2605 "+rn.title(t.role)+")"+(i?", replacing "+i.name:"")+"."),t.name+" joins the team as "+rn.title(t.role)+"!"}fire(e){if(this.retired)throw new he("Your career is over.");let t=this.team[e||""];if(!t)throw new he("Nobody in that role.");return delete this.team[e],this.log("Parted ways with "+rn.title(t.role)+" "+t.name+"."),t.name+" has left the team."}teamSalary(){let e=0;for(let t of Object.values(this.team))e+=t.salary();return e}setRival(e,t,i){this.rival=e,this.rivalHeat=t,this.rivalWins=this.rivalLosses=0,this.weeksWithoutRival=0,this.log("RIVALRY: "+e.displayName()+" "+i+".")}rivalSummary(){let e=this.rival.displayName(),t=this.rivalWins+"-"+this.rivalLosses;return this.rivalWins>this.rivalLosses?"Beat "+e+" "+t:this.rivalLosses>this.rivalWins?"Lost to "+e+" "+t:"Even with "+e+" "+t}pinOthers(){if(this.meOverall)for(let n of jt)this.me.set(n,this.meOverall);let e=this.npcOverall;if(!e)return;let t=new Set,i=n=>{if(!(!n||typeof n!="object"||t.has(n))){if(t.add(n),n instanceof yt){n!==this.me&&Yg(n,e);return}for(let r of Object.keys(n))i(n[r])}};i(this)}rivalWeek(){let e=this.me;if(!this.rival){if(++this.weeksWithoutRival>=40&&!this.retired){let i=this.rankings.indexOf(e),n;if(this.gfc&&i>0?n=this.rankings[Math.max(1,Math.min(this.rankings.length-1,i+(Oc()?1:-1)))]:n=yt.generate(e.overall()+1,this.weightClass),n===e)return;this.setRival(n,35,"calls you out in a viral interview")}return}let t=this.rival;if(this.week%4===0){let i=e.overall()+1-t.overall();for(let n of jt)t.add(n,i*.25+rs()*.4)}if(!this.rankings.includes(t)&&ge()<.12&&(!this.scheduled||this.scheduled.opp!==t)){let i=ge()<.65,n=ge();t.recordResult(i?"W":"L",n<.4?"KO":n<.6?"SUB":"DEC"),i&&ge()<.5&&this.log("Your rival "+t.lastName()+" wins again ("+t.record()+") and says you're next.")}this.rivalHeat=Math.max(0,this.rivalHeat-1),this.rivalHeat>=50&&ge()<.08&&(this.log(t.lastName()+': "'+$o(qe(tn.CALLOUTS),e.lastName(),t.lastName())+'"'),this.rivalHeat=Math.min(100,this.rivalHeat+3))}rivalFought(e,t){if(this.lastRivalFight=this.week,e?(this.rivalWins++,this.rivalHeat=15):t&&(this.rivalLosses++,this.rivalHeat=45),Math.abs(this.rivalWins-this.rivalLosses)>=2||this.rivalWins+this.rivalLosses>=5){let i=this.rivalSummary();this.rivalries.push(i),this.log("Rivalry settled: "+i+"."),this.rival=null}}talk(e,t){if(this.retired)throw new he("Your career is over.");if(this.fight)throw new he("Finish your fight first.");if(this.lastTalkWeek===this.week)throw new he("You've already said your piece this week.");let i;if(e==="rival"){if(!this.rival)throw new he("You don't have a rival right now.");i=this.rival}else{if(!this.scheduled)throw new he("You don't have a fight booked.");i=this.scheduled.opp}let n=!!this.scheduled&&this.scheduled.opp===i,r=i===this.rival,a=this.me.lastName(),o=i.lastName(),l=this.stars("manager"),h=[],c,u,d;switch(t||""){case"respect":c=qe(tn.RESPECT),u=qe(ge()<.7?tn.REPLY_RESPECT:tn.REPLY_CALM),d=1,r&&(this.rivalHeat=Math.max(0,this.rivalHeat-5),h.push("Rivalry heat -5"));break;case"trash":c=qe(tn.TRASH),u=qe(Oc()?tn.REPLY_CALM:tn.REPLY_ANGRY),d=2+De(3)+Math.floor(l/2),r&&(this.rivalHeat=Math.min(100,this.rivalHeat+12),h.push("Rivalry heat +12")),n&&this.hype(1,.08,h);break;case"personal":if(c=qe(tn.PERSONAL),u=qe(tn.REPLY_ANGRY),ge()<.2){let p=Math.max(200,Math.trunc(this.money/20));this.money-=p,d=-3,h.push("The commission fines you $"+ia(p)+" for conduct")}else d=4+De(5)+l;r&&(this.rivalHeat=Math.min(100,this.rivalHeat+25),h.push("Rivalry heat +25")),n&&this.hype(2,.15,h);break;default:throw new he("Pick a tone.")}return this.fame=gt(this.fame+d,0,100),h.unshift("Fame "+(d>=0?"+":"")+d),this.lastTalkWeek=this.week,this.lastTalk={you:$o(c,o,a),them:$o(u,o,a),target:i.displayName(),effects:h},this.log("Mic work vs "+o+': "'+$o(c,o,a)+'"'),null}hype(e,t,i){let n=this.scheduled;n.talkLevel=Math.max(n.talkLevel,e),n.purse=Math.round(n.purse*(1+t)),n.winBonus=Math.round(n.winBonus*(1+t)),n.oppBonus=Math.min(4.5,n.oppBonus+1.5*e),i.push("Purse +"+Math.round(t*100)+"% from the hype"),i.push("Opponent is fired up (+"+n.oppBonus+" to all stats on fight night)")}changeDivision(e){if(this.retired)throw new he("Your career is over.");if(this.fight||this.scheduled)throw new he("You can't change divisions with a fight booked.");if(!(e>=0&&e<Ct.length)||Math.abs(e-this.weightClass)!==1)throw new he("You can only move one division at a time.");let t=this.lastDivisionChange+t0-this.week;if(t>0)throw new he("Your body needs time to adjust. Try again in "+t+" weeks.");let i=this.me,n=this.weightClass,r=this.gfc?this.rankings.indexOf(i):-1;this.gfc&&r===0&&(this.heldBelts[Ct[n]]={since:this.lastTitleWeek});for(let l of jt)i.add(l,yt.weightAdj(e,l)-yt.weightAdj(n,l));e<n&&i.add("cardio",-2),this.weightClass=e,this.lastDivisionChange=this.week,Nc(this.divisionsFought,Ct[e]),this.buildDivision();let a;this.offers=[],this.offersAge=0;let o=this.heldBelts[Ct[e]];if(this.gfc&&o)delete this.heldBelts[Ct[e]],this.moveTo(i,0),this.lastTitleWeek=o.since,this.recordChamp(i,"Returned as the reigning champion"),this.generateOffers(),a="You're back \u2014 and still the "+Ct[e]+" champion.";else if(this.gfc&&r===0){this.log("Keeps the "+Ct[n]+" belt and moves to "+Ct[e]+" to chase a second one!"),this.offers.push(this.titleOffer(this.rankings[0]));let l=Object.keys(this.heldBelts).length+1;a="Champion vs champion! Win the "+Ct[e]+" superfight and you're a "+Ac(l).toLowerCase()+". You keep your "+Object.keys(this.heldBelts).join(", ")+" belt"+(l>2?"s":"")+"."}else this.gfc&&r>0&&r<=5&&(this.rankings.splice(10,0,i),this.trim()),this.generateOffers(),a=this.gfc&&this.rankings.includes(i)?"Your reputation earns you the #"+this.rankings.indexOf(i)+" spot.":"You start unranked in the new division.";if(this.rival&&this.rankings.indexOf(this.rival)<0&&this.gfc){for(let l of jt)this.rival.add(l,yt.weightAdj(e,l)-yt.weightAdj(n,l));this.rankings.splice(Math.min(13,this.rankings.length),0,this.rival),this.trim()}return this.log("Moves "+(e>n?"up":"down")+" to "+Ct[e]+"."),"Welcome to "+Ct[e]+"! "+(e<n?"The weight cut costs some cardio. ":"More power, a little less speed. ")+a}startFight(){if(this.fight)return null;if(!this.fightNight())throw new he("There's no fight tonight.");let e=this.scheduled;if(this.pinOthers(),this.fight=new aa(this.me,e.opp,e.rounds,e.title,this.npcOverall?0:e.oppBonus,this.stars("head")),e.title){let t=e.kind||"title",i=n=>this.rankings[0]===n||t==="interim"&&this.interim===n;this.fight.belt={kind:t,label:(t==="interim"?"interim ":t==="unify"?"undisputed ":"")+"GFC "+this.division()+" championship",champ:i(this.me)?"p":i(e.opp)?"o":null}}return null}fightRound(e){if(!this.fight||this.fight.finished)throw new he("No fight in progress.");if(!Hc[e])throw new he("Pick a game plan.");this.fight.simulateRound(e),this.fight.finished&&this.resolveFight()}closeFight(){this.fight&&this.fight.finished&&(this.fight=null)}resolveFight(){let e=this.scheduled,t=this.fight,i=e.opp,n=this.me,r=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",a=r==="W",o=r==="L",l=t.methodType!=="DEC",h=i===this.rival,c=this.gfc?this.rankings.indexOf(i):-1,u=this.isChamp();n.recordResult(r,t.methodType),i.recordResult(a?"L":o?"W":"D",t.methodType);let d=e.purse+(a?e.winBonus:0),p=a&&l&&this.gfc;p&&(d+=5e4),this.money+=d,this.earnings+=d;let m=this.fame;a?this.fame+=(this.gfc?5:2)+(l?3:0)+(e.title?12:0)+(c>0?Math.floor((ss-c)/3):0)+(h?5:0):o?this.fame-=t.methodType==="KO"?5:3:this.fame+=1;let g="";e.talkLevel>0&&a?(this.fame+=2*e.talkLevel,g="You backed up the trash talk!"):e.talkLevel>0&&o&&(this.fame-=2*e.talkLevel,g="You ate your words."),this.fame=gt(this.fame,0,100);let f="";o&&t.methodType==="KO"?(n.add("chin",-1.5),f=this.injure(4+De(5),"knockout loss")):t.playerDamage()>60&&(f=this.injure(1+De(3),"fight damage")),this.energy=30;for(let x=0;x<2;x++){let R=qe(jt);n.add(R,(.5+ge())*Math.max(0,1-n.get(R)/95)*2)}let y="";e.contender?a?(this.gfc=!0,y="The GFC president hands you a contract. Welcome to the big show!",this.log("SIGNED with the GFC after a win on the Contender Series!"),this.rival&&!this.rankings.includes(this.rival)&&(this.rankings.splice(Math.min(14,this.rankings.length),0,this.rival),this.trim(),this.log("Your rival "+this.rival.displayName()+" is already in the GFC, ranked #"+this.rankings.indexOf(this.rival)+". The rivalry goes big time."))):(this.regionalWins=0,y="No contract this time. Rebuild on the regional circuit."):this.gfc?y=this.updateRankings(a,o,i,e.title,u,e.kind):a&&this.regionalWins++;let v="";h?(v=a?"You beat your rival!":o?"Your rival gets the better of you.":"The rivalry goes on.",this.rivalFought(a,o)):o&&l&&!this.rival&&this.weeksWithoutRival>=12&&(this.setRival(i,50,"wants the world to know who's better after beating you"),this.rivalLosses=1,v=i.lastName()+" is your new nemesis.");let _=a?"def.":o?"lost to":"drew with";this.log(n.lastName()+" "+_+" "+i.displayName()+" \u2014 "+t.method+(l?" (R"+t.endRound+" "+t.endTime+")":"")+"."),this.history.unshift({date:this.dateLabel(),result:r,opponent:i.displayName(),method:t.method,round:t.endRound,time:t.endTime,event:(e.contender?"Contender Series":e.kind==="interim"?"GFC Interim Title Fight":e.kind==="unify"?"GFC Title Unification":e.title?"GFC Title Fight":e.kind==="eliminator"?"GFC Title Eliminator":e.kind==="main"?"GFC Main Event":this.gfc?"GFC":"Iron Cage Regional")+(h?" \xB7 Grudge":"")+" \xB7 "+Ct[this.weightClass]}),this.lastResult={result:r,method:t.method,pay:d,perfBonus:p,fameDelta:this.fame-m,careerNote:[y,v,g].join(" ").trim(),injuryNote:f.trim(),record:n.record()},this.scheduled=null,this.offersAge=this.gfc?-4:-2,this.advanceWeek()}isChamp(){return this.gfc&&this.rankings.length>0&&this.rankings[0]===this.me}updateRankings(e,t,i,n,r,a){let o=this.me,l=this.rankings,h=Ct[this.weightClass];if(a=n?a||"title":a,n&&(this.nextInLine=!1),a==="eliminator"&&(this.nextInLine=e,e&&this.log("Wins the title eliminator \u2014 next in line for a shot at the belt!")),a==="interim"){if(e){let c=this.interim===o;return this.interim=o,this.moveTo(o,1),c?(this.addDefense(!0),"And STILL interim champion! Unify the belts when the champ returns."):(this.recordChamp(o,"Won the interim title vs "+i.lastName(),!0),this.log("AND NEW! "+o.displayName()+" is the GFC interim "+h+" champion!"),"AND NEW GFC INTERIM "+h.toUpperCase()+" CHAMPION! Next: unify the belts.")}if(t){this.interim=i,this.moveTo(i,1),this.dropDown(o,1),this.recordChamp(i,"Won the interim title vs "+o.lastName(),!0);let c=l.indexOf(o);return i.lastName()+" takes the interim belt."+(c>0?" You drop to #"+c+".":"")}return"A draw \u2014 no interim champion crowned."}if(a==="unify"){if(this.interim=null,this.champOut=this.champOutStart=0,r)return e?(this.titleDefenses++,this.lastTitleWeek=this.week,this.addDefense(),this.log("UNDISPUTED! "+o.displayName()+" unifies the "+h+" belts."),"And STILL \u2014 and UNDISPUTED! Title defense #"+this.titleDefenses+"."):t?(this.moveTo(i,0),this.dropDown(o,1),this.recordChamp(i,"Unified the belts vs "+o.lastName()),this.log(i.displayName()+" unifies the belts and takes your title."),"The interim champion takes your belt."):(this.lastTitleWeek=this.week,"A draw \u2014 the champion keeps the belt.");if(e)return this.titlesWon++,Nc(this.divisionsWon,h),this.moveTo(o,0),this.lastTitleWeek=this.week,this.recordChamp(o,"Unified the belts vs "+i.lastName()),this.log("AND NEW! "+o.displayName()+" is the UNDISPUTED GFC "+h+" Champion!"),"AND NEW UNDISPUTED GFC "+h.toUpperCase()+" CHAMPION!";this.addDefense(),this.dropDown(o,1);let c=l.indexOf(o);return t?"The champion unifies the belts."+(c>0?" You drop to #"+c+".":""):"A draw \u2014 the champion keeps the belt."}if(e){if(n){if(this.lastTitleWeek=this.week,r)return this.titleDefenses++,this.addDefense(),this.log("Successful title defense #"+this.titleDefenses+"!"),"And STILL champion! Title defense #"+this.titleDefenses+".";this.titlesWon++,Nc(this.divisionsWon,h),this.moveTo(o,0),this.interim===o&&(this.interim=null),this.recordChamp(o,"Beat "+i.lastName()),this.log("AND NEW! "+o.displayName()+" is the GFC "+h+" Champion!");let u=Object.keys(this.heldBelts),d=Ac(u.length+1);return u.length&&this.log(d.toUpperCase()+"! "+o.displayName()+" holds the "+[h,...u].join(", ")+" belts at the same time!"),this.divisionsWon.length>=2&&this.log("History made: a "+this.divisionsWon.length+"-division GFC champion!"),u.length?"AND NEW \u2014 "+d.toUpperCase()+"! GFC "+[h,...u].join(" & ").toUpperCase()+" CHAMPION!":"AND NEW GFC "+h.toUpperCase()+" CHAMPION!"}l.includes(i)?this.placeAbove(o,i):!l.includes(o)&&o.streak>=2&&(l.splice(Math.min(ss-1,l.length),0,o),this.trim());let c=this.rankings.indexOf(o);return c>0?"You're now ranked #"+c+" in the division.":"Still unranked \u2014 keep stacking wins."}if(t){if(n&&r)return this.placeAbove(i,o),this.recordChamp(i,"Beat "+o.lastName()),this.log(i.displayName()+" takes the belt."),"You lost the belt.";n&&this.addDefense(),l.includes(o)&&(this.placeAbove(i,o),this.dropDown(o,n?1:2));let c=this.rankings.indexOf(o);return c>0?"You drop to #"+c+".":"You're outside the rankings."}return n&&r&&(this.lastTitleWeek=this.week),n?"A draw \u2014 the champion keeps the belt.":"A draw doesn't move the needle."}placeAbove(e,t){let i=this.rankings,n=i.indexOf(t);if(n<0)return;let r=i.indexOf(e);r>=0&&r<n||(r>=0&&i.splice(r,1),i.splice(n,0,e),this.trim())}dropDown(e,t){let i=this.rankings,n=i.indexOf(e);n<0||(i.splice(n,1),n+t<ss&&i.splice(Math.min(n+t,i.length),0,e),this.refill())}trim(){for(;this.rankings.length>ss;)this.rankings.pop()}refill(){for(;this.rankings.length<ss;){let e=yt.generate(70+De(6),this.weightClass);e.age=23+De(4),this.rankings.push(e)}}advanceWeek(){this.week++,this.energy=Math.min(100,this.energy+15),this.money-=Qp[this.gym]+this.teamSalary();let e=Object.values(this.team);if(this.money<0&&e.length&&ge()<.5){let t=e.reduce((i,n)=>n.salary()>i.salary()?n:i);delete this.team[t.role],this.log(t.name+" quit \u2014 paychecks stopped clearing.")}this.injuryWeeks>0&&this.injuryWeeks--,this.peakOverall=Math.max(this.peakOverall,this.me.overall()),(this.week-1)%52===0&&this.newYear(),!this.retired&&(this.npcWeek(),this.beltWeek(),this.lifeWeek(),this.rivalWeek(),++this.marketAge>=8&&this.refreshMarket(),this.scheduled?(this.scheduled.weeks--,this.scheduled.weeks<=0&&this.injuryWeeks>0&&(this.log("Withdrew from the fight vs "+this.scheduled.opp.displayName()+" due to injury."),this.fame=Math.max(0,this.fame-3),this.scheduled=null,this.generateOffers())):(this.offersAge++,this.offersAge>=0&&(this.offers.length===0||this.offersAge>=4)&&this.generateOffers()))}newYear(){let e=this.me;if(e.age++,this.log("Happy birthday! "+e.name+" turns "+e.age+"."),e.age>=31){let t=(e.age-30)*.9;e.add("speed",-(t+ge())),e.add("cardio",-(t*.8+ge())),e.add("power",-(t*.5+ge()*.5)),e.add("chin",-(t*.6+ge()*.5));for(let i of["striking","wrestling","grappling"])e.add(i,-t*.3*ge());this.log("Father Time is undefeated \u2014 your physical attributes are declining.")}for(let t of[...this.rankings])if(!(t===e||t===this.rival)){t.age++;for(let i of jt)t.age<=27?t.add(i,ge()*2.5):t.age>=32&&t.add(i,-ge()*1.5);t.age>=37&&ge()<.5&&(!this.scheduled||this.scheduled.opp!==t)&&(qo(this.rankings,t),this.gfc&&this.log(t.displayName()+" ("+t.record()+") retires from the GFC."))}this.rival&&(this.rival.age++,this.rival.age>=38&&ge()<.5&&(!this.scheduled||this.scheduled.opp!==this.rival)&&(this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log("Your rival "+this.rival.displayName()+" retires. The rivalry is over."),qo(this.rankings,this.rival),this.rival=null)),this.refill(),e.age>=40&&!this.retired&&this.endCareer("At 40, "+e.name+" is forced to retire. Legacy: "+this.legacyTier()+".")}npcWeek(){let e=this.rankings;if(ge()>.35||e.length<4)return;let t=De(e.length-1),i=Math.min(e.length-1,t+1+De(3)),n=e[t],r=e[i];if(n===this.me||r===this.me||this.interim===n||this.interim===r||t===0&&this.champOut||this.scheduled&&(n===this.scheduled.opp||r===this.scheduled.opp))return;let a=1/(1+Math.exp((r.overall()-n.overall())/5)),o=ge()<a?n:r,l=o===n?r:n,h=ge(),c=h<.4?"KO":h<.6?"SUB":"DEC";if(o.recordResult("W",c),l.recordResult("L",c),o===r&&this.placeAbove(r,n),t===0&&this.gfc&&(o===n?this.addDefense():this.recordChamp(r,"Beat "+n.lastName()+" by "+(c==="KO"?"KO/TKO":c==="SUB"?"submission":"decision"))),this.gfc){let u=c==="KO"?"KO/TKO":c==="SUB"?"submission":"decision",d=o===this.rival?"Your rival ":l===this.rival?"Your rival loses! ":"";t===0?this.log(o===n?"Champion "+n.displayName()+" defends the belt vs "+r.lastName()+" by "+u+".":"UPSET! "+r.displayName()+" dethrones "+n.lastName()+" by "+u+" to become champion!"):this.log("GFC: "+d+o.displayName()+" def. "+l.displayName()+" by "+u+".")}}generateOffers(){if(this.offers=[],this.offersAge=0,this.retired)return;let e=this.me,t=this.rankings,i=this.offers,n=e.overall();if(this.gfc){let a=t.indexOf(e),o=this.interim&&this.interim!==e&&t.includes(this.interim)?this.interim:null;if(a===0)if(o)i.push(this.titleOffer(o,"unify"));else for(let l=1;l<=3&&l<t.length;l++)i.push(this.titleOffer(t[l]));else{if(this.interim===e)if(!this.champOutNow())i.push(this.titleOffer(t[0],"unify"));else{let l=t.find((h,c)=>c>0&&h!==e);l&&i.push(this.titleOffer(l,"interim"))}else this.champOutNow()&&!o&&(a===1||a===2)?i.push(this.titleOffer(t.find((l,h)=>h>0&&h<=3&&l!==e),"interim")):this.titleShotEligible()&&!this.champOutNow()&&!o&&i.push(this.titleOffer(t[0]));if(a>0&&this.interim!==e){let l=[];for(let h=Math.max(1,a-3);h<=Math.min(t.length-1,a+3);h++)h!==a&&t[h]!==o&&l.push(h);if(Wg(l),a>=2&&a<=5&&!this.nextInLine&&!this.titleShotEligible()){let h=l.findIndex(c=>c>=1&&c<=5);h>=0&&i.push(this.gfcOffer(t[l.splice(h,1)[0]],"eliminator"))}for(let h=0;i.length<3&&h<l.length;h++)i.push(this.gfcOffer(t[l[h]]))}else for((e.streak>=1||this.fame>=40)&&i.push(this.gfcOffer(t[Math.min(t.length-1,12+De(4))]));i.length<3;)i.push(this.gfcOffer(yt.generate(62+De(6),this.weightClass)))}}else{for(let a of[-6,0,6]){let o=Math.max(26,Math.min(72,n+a+De(5)-2)),l=this.managed(Math.round((300+o*10+this.fame*20+Math.max(0,a)*40)/50)*50);i.push(new an(yt.generate(o,this.weightClass),3+De(4),l,l,3,!1,!1))}if(this.contenderEligible()){let a=this.managed(5e3);i.unshift(new an(yt.generate(Math.max(57,n-1),this.weightClass),4,a,a,3,!1,!0))}}let r=this.rival;if(r&&this.rivalHeat>=sv&&this.week-this.lastRivalFight>=rv&&!i.some(a=>a.opp===r)){let a;if(this.gfc){let o=t.indexOf(r),l=t.indexOf(e);l===0?a=o>0?this.titleOffer(r):null:o===0?a=l>0&&l<=5?this.titleOffer(r):null:a=this.gfcOffer(r)}else{let o=this.managed(800+this.fame*30);a=new an(r,4+De(3),o,o,3,!1,!1)}a&&(a.title||(a.purse=Math.round(a.purse*1.5),a.winBonus=Math.round(a.winBonus*1.5)),i.unshift(a))}}managed(e){return Math.round(e*(1+.05*this.stars("manager")))}gfcOffer(e,t=null){let i=this.rankings.indexOf(e),n=this.rankings.indexOf(this.me),r=this.managed(12e3+this.fame*400+(i>0?(ss-i)*3e3:0));!t&&i>0&&i<=5&&n>0&&n<=10&&(t="main"),t==="eliminator"&&(r=Math.round(r*1.5));let a=new an(e,6+De(5),r,r,t==="main"?5:3,!1,!1);return a.kind=t,a}titleOffer(e,t="title"){let i=this.managed((t==="interim"?7e4:1e5)+this.fame*1500+this.titleDefenses*25e3),n=new an(e,8+De(5),i,Math.trunc(i/2),5,!0,!1);return n.kind=t,n}titleShotEligible(){let e=this.rankings.indexOf(this.me);return this.gfc&&e>0&&(e===1||this.nextInLine||e<=3&&this.me.streak>=2||e<=5&&this.me.streak>=3)}contenderEligible(){return!this.gfc&&this.regionalWins>=Ic&&this.me.overall()>=e0}legacyScore(){let e=this.me;return e.wins*2+e.koWins+e.subWins+this.titlesWon*30+this.titleDefenses*15+Math.floor(this.fame/2)-e.losses*2+(this.divisionsWon.length>=2?60:0)}legacyTier(){let e=this.legacyScore();return e>=300?"All-Time Great":e>=200?"Hall of Famer":e>=120?"Fan Favorite":e>=60?"Journeyman":"Never Made It"}hallOfFameEntry(){let e=this.me;return{name:e.displayName(),style:e.style,country:e.country,divisions:[...this.divisionsFought],record:e.record(),koWins:e.koWins,subWins:e.subWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],peakOverall:this.peakOverall,earnings:this.earnings,retiredAge:e.age,years:Math.floor((this.week-1)/52)+1,rivalries:[...this.rivalries],legacyScore:this.legacyScore(),legacy:this.legacyTier(),inducted:this.legacyScore()>=200}}dateLabel(){return"Y"+(Math.floor((this.week-1)/52)+1)+" W"+((this.week-1)%52+1)}log(e){for(this.news.unshift(this.dateLabel()+" \u2014 "+e);this.news.length>40;)this.news.pop()}goal(){if(this.retired)return"Retired. Legacy: "+this.legacyTier()+".";if(!this.gfc)return this.contenderEligible()?"You've earned a Contender Series invite! Win it to sign with the GFC.":"Earn a Contender Series invite: "+Math.min(this.regionalWins,Ic)+"/"+Ic+" regional wins and overall "+this.me.overall()+"/"+e0+".";let e=this.rankings.indexOf(this.me),t=this.titleDefenses;if(e===0){let i=this.week-this.lastTitleWeek;if(i>=sa)return"Defend the belt within "+(na-i)+" weeks or the GFC will strip you!";if(this.interim&&this.interim!==this.me)return"There's an interim champion. Unify the belts and prove who's the real champ.";let n=Object.entries(this.heldBelts).find(([,o])=>this.week-o.since>=sa);if(n)return"Your "+n[0]+" belt will be stripped in "+(na-(this.week-n[1].since))+" weeks \u2014 go back and defend it!";let r=Object.keys(this.heldBelts).length+1,a=r>1;return(a?Ac(r)+" \u2014 "+r+" belts! ":"You're the champion! ")+"Defend the belt"+(this.divisionsWon.length<2&&!a?" \u2014 or move divisions and chase a second one.":".")+" ("+t+" defense"+(t===1?"":"s")+")"}return this.interim===this.me?this.champOutNow()?"You're the interim champion. Defend it until the champ is healthy, then unify.":"The champion is back. Unify the belts!":this.champOutNow()&&(e===1||e===2)?"The champion is injured \u2014 you're in line for the interim title fight!":this.nextInLine?"You won the eliminator \u2014 the next title shot is yours.":e<0?"Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.":this.titleShotEligible()?"A title shot is on the table \u2014 take it!":e<=5?"You're #"+e+". Win a title eliminator, reach #1, or go on a win streak for a title shot.":"You're #"+e+". Climb into the top 3 for a shot at the belt."}offerJson(e,t){return{index:t,opponent:e.opp.toJson(),oppRank:this.gfc?this.rankings.indexOf(e.opp):-1,weeks:e.weeks,purse:e.purse,winBonus:e.winBonus,rounds:e.rounds,title:e.title,contender:e.contender,kind:e.kind||null,grudge:e.opp===this.rival,oppBonus:e.oppBonus}}toJson(){let e=this.gym,t={};for(let n of a0){let r=this.team[n];t[n]={...r?r.toJson():{},role:n,title:rn.title(n)}}let i=null;return this.rival&&(i={...this.rival.toJson(),heat:this.rivalHeat,h2hWins:this.rivalWins,h2hLosses:this.rivalLosses,rank:this.gfc?this.rankings.indexOf(this.rival):-1}),{fighter:this.me.toJson(),weightClass:Ct[this.weightClass],weightClassIndex:this.weightClass,divisionCooldown:Math.max(0,this.lastDivisionChange+t0-this.week),year:Math.floor((this.week-1)/52)+1,week:(this.week-1)%52+1,money:this.money,earnings:this.earnings,fame:this.fame,energy:this.energy,trainCost:this.trainCost(),injuryWeeks:this.injuryWeeks,peakOverall:this.peakOverall,gym:{level:e,name:nn[e],mult:kc[e],fee:Qp[e],nextName:e+1<nn.length?nn[e+1]:null,nextCost:e+1<nn.length?Zp[e+1]:null},team:t,teamSalary:this.teamSalary(),market:this.market.map((n,r)=>{let a=this.team[n.role];return{...n.toJson(),index:r,current:a?a.name+" ("+a.stars+"\u2605)":null}}),marketRefresh:8-this.marketAge,rival:i,rivalries:this.rivalries,canTalk:this.lastTalkWeek!==this.week&&!this.retired&&!this.fight,lastTalk:this.lastTalk,gfc:this.gfc,org:this.gfc?"GFC":"Iron Cage Regional",rank:this.gfc?this.rankings.indexOf(this.me):-1,regionalWins:this.regionalWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],retired:this.retired,legacy:this.legacyTier(),legacyScore:this.legacyScore(),goal:this.goal(),offers:this.offers.map((n,r)=>this.offerJson(n,r)),scheduled:this.scheduled?this.offerJson(this.scheduled,-1):null,fightNight:this.fightNight(),rankings:this.rankings.map((n,r)=>({rank:r,name:n.displayName(),record:n.record(),overall:n.overall(),style:n.style,player:n===this.me,rival:n===this.rival,interim:n===this.interim})),belt:this.gfc?{division:this.division(),champion:this.rankings[0]?this.rankings[0].displayName():null,interim:this.interim?this.interim.displayName():null,interimIsMe:this.interim===this.me,champInjured:this.champOutNow()?this.champOut-this.week:0,idle:this.isChamp()?this.week-this.lastTitleWeek:null,stripWeeks:na,stripWarn:sa,held:Object.keys(this.heldBelts),heldIdle:Object.values(this.heldBelts).map(n=>this.week-n.since),nextInLine:this.nextInLine,lineage:(this.lineage[this.division()]||[]).slice(-15).reverse()}:null,news:this.news,history:this.history,fight:this.fight?this.fight.toJson():null,lastResult:this.lastResult,life:this.lifeJson()}}};oa.tag="Career";var o0={Career:oa,Offer:an,Staff:rn,Fight:aa,Corner:rr};function Uc(s){let e={},t=n=>{if(n instanceof yt)return e[n.id]||(e[n.id]={...n,stats:{...n.stats}}),{$f:n.id};if(Array.isArray(n))return n.map(t);if(n&&typeof n=="object"){let r={},a=n.constructor&&n.constructor.tag;a&&o0[a]&&(r.$c=a);for(let o of Object.keys(n))o!=="current"&&(r[o]=t(n[o]));return r}return n},i=t(s);return JSON.stringify({v:1,pool:e,data:i})}function Dc(s){let{pool:e,data:t}=JSON.parse(s),i={};for(let a of Object.keys(e))i[a]=Object.assign(Object.create(yt.prototype),e[a]);let n=a=>{if(Array.isArray(a))return a.map(n);if(a&&typeof a=="object"){if(a.$f)return i[a.$f];let o=a.$c?o0[a.$c]:null,l=o?Object.create(o.prototype):{};for(let h of Object.keys(a))h!=="$c"&&(l[h]=n(a[h]));return l}return a},r=n(t);return r.fight&&r.fight.logs.length&&(r.fight.current=r.fight.logs[r.fight.logs.length-1]),r}var sn=5,dv=/^\d(,\d){4}$/,Ko=class{constructor(e){this.store=e,this.profile={slots:[],active:null,claimed:[]},this.careers=new Map,this.hof=[]}async load(){let e=await this.store.getProfile();e&&Array.isArray(e.slots)&&(this.profile={slots:e.slots.slice(0,sn),active:e.active??null,claimed:Array.isArray(e.claimed)?e.claimed:[]});for(let t of this.profile.slots)try{let i=await this.store.getCareer(t);i&&this.careers.set(t,Dc(i))}catch(i){console.warn("Save unreadable",t,i)}this.profile.slots=this.profile.slots.filter(t=>this.careers.has(t)),this.careers.has(this.profile.active)||(this.profile.active=null),this.hof=await this.store.getHallOfFame(),await this.claimGifts()}async claimGifts(){if(!this.store.getGifts)return;let e=!1;for(let t of await this.store.getGifts())if(!(this.profile.claimed.includes(t.id)||this.profile.slots.length>=sn))try{let i=Dc(t.save),n=Jo();this.careers.set(n,i),this.profile.slots.push(n),this.profile.active=n,this.profile.claimed.push(t.id),this.giftMessage="A new fighter is ready: "+i.me.displayName()+".",e=!0}catch(i){console.warn("Gift unreadable",t.id,i)}e&&this.saveAll()}profileDoc(){return{slots:[...this.profile.slots],active:this.profile.active,claimed:[...this.profile.claimed]}}active(){return this.profile.active&&this.careers.get(this.profile.active)||null}need(e){if(!e)throw new he("Create a fighter first.");return e}call(e,t={}){let i=this.profile,n=this.active();n&&n.migrate();let r=null,a=l=>l==null||l===""||isNaN(Number(l))?-1:Math.trunc(Number(l)),o=!1;switch(e){case"state":break;case"new":{if(i.slots.length>=sn)throw new he(`All ${sn} save slots are full. Delete a save first.`);let l=this.newCareer(t),h=Jo();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0;break}case"action":r=this.need(n).act(t.type,t.stat);break;case"accept":r=this.need(n).accept(a(t.index));break;case"upgrade":r=this.need(n).upgradeGym();break;case"fight/start":r=this.need(n).startFight();break;case"fight/round":this.need(n).fightRound(t.plan);break;case"fight/close":this.need(n).closeFight();break;case"retire":r=this.need(n).retire();break;case"talk":r=this.need(n).talk(t.target,t.tone);break;case"staff/hire":r=this.need(n).hire(a(t.index));break;case"staff/fire":r=this.need(n).fire(t.role);break;case"division":r=this.need(n).changeDivision(a(t.weightClass));break;case"life":r=this.need(n).lifeAction(t.type,t);break;case"save/blank":if(i.slots.length>=sn)throw new he(`All ${sn} save slots are full. Delete a save first.`);i.active=null,o=!0;break;case"save/switch":{let l=this.slot(a(t.slot));i.active=l,o=!0,r="Loaded "+this.careers.get(l).me.displayName()+".";break}case"save/import":{if(i.slots.length>=sn)throw new he(`All ${sn} save slots are full. Delete a save first.`);let l;try{if(l=Dc(String(t.text||"")),!l||!(l.me instanceof yt))throw new Error("no fighter")}catch{throw new he("That save code or file isn't a Cage Career 3D career.")}let h=Jo();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0,r="Loaded "+l.me.displayName()+".";break}case"save/delete":{let l=this.slot(a(t.slot)),h=this.careers.get(l);i.slots=i.slots.filter(c=>c!==l),i.active===l&&(i.active=null),this.careers.delete(l),this.store.deleteCareer(l),o=!0,r=h?"Deleted "+h.me.displayName()+".":"Save deleted.";break}default:throw new he("Unknown action: "+e)}return n=this.active(),n&&(n.migrate(),n.pinOthers()),this.induct(n),e!=="state"&&(n&&this.store.setCareer(i.active,Uc(n)),o&&this.store.setProfile(this.profileDoc())),this.state(n,r)}saveAll(){this.store.setProfile(this.profileDoc());for(let[e,t]of this.careers)this.store.setCareer(e,Uc(t))}exportSave(e){return Uc(this.careers.get(this.slot(e)))}slot(e){if(e<0||e>=this.profile.slots.length)throw new he("That save slot doesn't exist.");return this.profile.slots[e]}newCareer(e){let t=String(e.name||"").trim().replace(/\s+/g," ");if(!t||t.length>30)throw new he("Enter a name (1-30 characters).");let i=String(e.nickname||"").trim();if(i.length>24)throw new he("Nickname is too long.");let n=Number(e.weightClass);if(!(Number.isInteger(n)&&n>=0&&n<Ct.length))throw new he("Pick a weight class.");if(!r0.includes(e.style))throw new he("Pick a fighting style.");let r=Fc.includes(e.country)?e.country:"USA",a=new oa(t,i,n,e.style,r);return dv.test(e.look||"")&&(a.me.look=e.look),a}induct(e){if(!e||!e.retired||e.inducted)return;e.inducted=!0;let t={...e.hallOfFameEntry(),owner:this.profile.active};this.hof.push({...t,mine:!0}),this.store.addHallOfFame(t)}state(e,t){let i={exists:!!e};return e&&Object.assign(i,e.toJson()),i.weightClasses=Ct,i.countries=Fc,i.saves=this.profile.slots.map((n,r)=>{let a=this.careers.get(n);return{slot:r,active:n===this.profile.active,name:a.me.displayName(),weightClass:Ct[a.weightClass],style:a.me.style,record:a.me.record(),overall:a.me.overall(),age:a.me.age,retired:a.retired}}),i.maxSaves=sn,i.hallOfFame=[...this.hof].sort((n,r)=>r.legacyScore-n.legacyScore),i.storage=this.store.kind,i.message=t||this.giftMessage||null,this.giftMessage=null,i}};var h0="cc3d_localOnly";async function c0(){try{if(localStorage.getItem(h0))return zc()}catch{}try{if(window.claude&&typeof window.claude.use=="function"){let[s,e]=await Promise.all([window.claude.use("db"),window.claude.use("user")]),t=s&&e?await e.id():null,i=e?await e.can("data.write"):null;if(s&&t&&i!==!1)return pv(fv(s,t))}}catch(s){console.warn("Account storage unavailable, using this browser",s)}return zc()}function pv(s){let e=s,t={get kind(){return e.kind},onDowngrade:null},i=()=>{if(e.kind!=="device"){e=zc();try{localStorage.setItem(h0,"1")}catch{}t.onDowngrade&&t.onDowngrade()}};s.refused=i;for(let n of["getProfile","setProfile","getCareer","setCareer","deleteCareer","getHallOfFame","addHallOfFame"])t[n]=(...r)=>e[n](...r);return t.getGifts=()=>e.getGifts?e.getGifts():Promise.resolve([]),t}function l0(s,e){let t=new Map;return(i,n)=>{let r=t.get(i);r||t.set(i,r={running:!1,next:void 0,has:!1}),r.next=n,r.has=!0,!r.running&&(r.running=!0,(async()=>{for(;r.has;){let a=r.next;r.has=!1;try{await s(i,a)}catch{try{await new Promise(l=>setTimeout(l,600+Math.random()*600)),await s(i,a)}catch(l){e(l)}}}r.running=!1})())}}var Gc=s=>console.error("Save failed",s);function u0(s){Gc=s}function fv(s,e){let t=s.collection("data/users/"+e),i=s.doc("hof/"+e),n=[],r=h=>{h&&(h.code==="invalid_argument"||h.code==="not_granted"||h.code==="revoked")&&l.refused?l.refused():Gc(h)},a=l0(async(h,c)=>{c===null?await t.doc(h).delete():await t.doc(h).set(c)},r),o=l0(async(h,c)=>i.set({entries:c}),r),l={kind:"account",async getProfile(){let h=await t.doc("profile").get();return h.exists?h.data():null},setProfile(h){a("profile",h)},async getCareer(h){let c=await t.doc("c_"+h).get();return c.exists?c.data().save:null},setCareer(h,c){a("c_"+h,{save:c,updated:Date.now()})},deleteCareer(h){a("c_"+h,null)},async getHallOfFame(){let h=[];try{let c=await s.collection("hof").get();for(let u of c.docs){let d=u.data()&&u.data().entries||[];u.id===e&&(n=d.slice());for(let p of d)h.push({...p,mine:u.id===e})}}catch(c){console.warn("Hall of Fame unavailable",c)}return h},addHallOfFame(h){n.push(h),o("hof",n.slice())},async getGifts(){try{return(await s.collection("gifts").get()).docs.filter(c=>c.data()&&c.data().save).map(c=>({id:c.id,save:c.data().save}))}catch{return[]}}};return l}function zc(){let s="cc3d_",e=i=>{try{return localStorage.getItem(s+i)}catch{return null}},t=(i,n)=>{try{n===null?localStorage.removeItem(s+i):localStorage.setItem(s+i,n)}catch(r){Gc(r)}};return{kind:"device",async getProfile(){try{return JSON.parse(e("profile")||"null")}catch{return null}},setProfile(i){t("profile",JSON.stringify(i))},async getCareer(i){return e("c_"+i)},setCareer(i,n){t("c_"+i,n)},deleteCareer(i){t("c_"+i,null)},async getHallOfFame(){try{return JSON.parse(e("hof")||"[]").map(i=>({...i,mine:!0}))}catch{return[]}},addHallOfFame(i){let n=[];try{n=JSON.parse(e("hof")||"[]")}catch{}n.push(i),t("hof",JSON.stringify(n))}}}var os={striking:"Striking",power:"Power",speed:"Speed",wrestling:"Wrestling",grappling:"Grappling",cardio:"Cardio",chin:"Chin"},g0=[{id:"BALANCED",name:"Balanced",desc:"Mix strikes and takedowns"},{id:"STRIKE",name:"Strike",desc:"Keep it standing, throw volume"},{id:"WRESTLE",name:"Wrestle",desc:"Takedowns and top control"},{id:"SUBMIT",name:"Hunt Subs",desc:"Drag it down, chase the tap"},{id:"COUNTER",name:"Counter",desc:"Patient, saves energy"},{id:"ALLOUT",name:"All Out",desc:"Swing big, burns the tank"}],_e=s=>document.getElementById(s),Me=null,Vc=!1,Zo=0,as=!1,la=!1,Wc=null,Ze=null,mv=Object.fromEntries(g0.map(s=>[s.id,s.name])),je=null;try{je=Yp()}catch(s){console.warn("3D disabled:",s)}var ar=uc(),hn=1;try{hn=Number(localStorage.getItem("cc3d_speed"))||1}catch{}je&&je.arena.setSpeed(hn);je&&(je.world.onNear=()=>eu(),je.world.onEnter=s=>on("place",{place:s}));function re(s){return String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Qe(s){let e=Math.round(s);return(e<0?"-$":"$")+Math.abs(e).toLocaleString()}function gv(s){return s>0&&Me&&Me.belt&&Me.belt.interimIsMe?"Interim champion":s===0?"Champion":s>0?"#"+s:"Unranked"}function lr(s,e,t=""){let i=Math.max(0,Math.min(100,s));return`<div class="bar ${t}"><i style="width:${i}%;${e?"background:"+e:""}"></i></div>`}function vv(s){return s>=80?"var(--gold)":s>=65?"var(--green)":s>=45?"var(--blue)":"#6b7385"}function yv(s){return s>60?"var(--green)":s>30?"var(--orange)":"var(--red)"}var d0;function fi(s,e=!1){let t=_e("toast");t.textContent=s,t.className="toast show"+(e?" err":""),clearTimeout(d0),d0=setTimeout(()=>t.className="toast",2600)}var or=null;async function ln(s,e={}){if(Vc||!or)return null;Vc=!0;try{let t=or.call(s,e);return Me=t,t.message&&fi(t.message),t}catch(t){return t instanceof he?fi(t.message,!0):(console.error(t),fi("Something went wrong. Your last save is safe.",!0)),null}finally{Vc=!1}}function Qo(s,e){return new Promise(t=>{let i=_e("askBox");_e("askText").textContent=s,_e("askYes").textContent=e,i.classList.remove("hidden");let n=r=>{i.classList.add("hidden"),_e("askYes").onclick=_e("askNo").onclick=null,t(r)};_e("askYes").onclick=()=>n(!0),_e("askNo").onclick=()=>n(!1)})}async function Ai(s,e){await ln(s,e)&&Ci()}var jc="CC3D1.";async function v0(s,e){let t=new Blob([s]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Uint8Array(await new Response(t).arrayBuffer())}async function _v(s){let e=await v0(new TextEncoder().encode(s)),t="";for(let i=0;i<e.length;i+=32768)t+=String.fromCharCode(...e.subarray(i,i+32768));return jc+btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function xv(s){let e=String(s||"").trim();if(e.startsWith("{"))return e;let t=e.indexOf(jc);if(t<0)throw new Error("not a save code");let i=e.slice(t+jc.length).replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/"),n=atob(i+"=".repeat((4-i.length%4)%4)),r=Uint8Array.from(n,a=>a.charCodeAt(0));return new TextDecoder().decode(await v0(r,!0))}async function Kc(s){let e;try{e=await xv(s)}catch{fi("That save code or file isn't a Cage Career 3D career.",!0);return}await ln("save/import",{text:e})&&(Ze=null,Jc(),Ci())}async function bv(s,e){let t=null;try{window.claude&&typeof window.claude.use=="function"&&(t=await window.claude.use("downloads"))}catch{}if(t){try{await t.save({filename:s,data:e})}catch(r){r&&r.code!=="declined"&&fi("Couldn't save the file here. Copy the save code instead.",!0)}return}let i=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=i,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(i),5e3)}async function Mv(s){try{await navigator.clipboard.writeText(s),fi("Save code copied.")}catch{let e=_e("exportCode");e&&(e.focus(),e.select()),fi("Select the code and copy it.")}}function Ci(){if(Me){if(!Me.exists){_e("create").classList.remove("hidden"),_e("dash").classList.add("hidden"),_e("topstats").innerHTML="",_e("fightScreen").classList.add("hidden"),_e("createSaves").innerHTML=`<p class="btn-row">${Me.saves.length?`<button class="btn small" data-saves>\u2190 Back to your ${Me.saves.length} saved fighter${Me.saves.length===1?"":"s"}</button>`:""}
      <button class="btn small" data-importopen>\u{1F4C2} Load a saved career</button></p>`,Tv(),Xc(),hr(),p0();return}_e("create").classList.add("hidden"),_e("dash").classList.remove("hidden"),Ev(),_e("goal").textContent=Me.goal,Rv(),Lv(),Pv(),Dv(),Ov(),kv(),Iv(),Nv(),Uv(),Wv(),hr(),Hv(),p0()}}function p0(){$c();let s=!_e("fightScreen").classList.contains("hidden");je&&(s?je.show(_e("arenaStage"),"arena"):Qc()&&Me.exists?(je.show(_e("worldStage"),"world"),je.world.setLife({look:Me.fighter.look,weightClass:Me.weightClassIndex,style:Me.fighter.style,life:Me.life,carCatalog:Me.life.catalog.cars,injured:Me.injuryWeeks>0})):Me.exists?(je.show(_e("dashStage"),"preview"),je.preview.setFighters(wv())):(je.show(_e("createStage"),"preview"),il())),Me.exists&&Sv(),tl()}function tl(){let s=Me&&Me.fight;if(!(s&&!_e("fightScreen").classList.contains("hidden"))){_c(!1),is("camp");return}if(_c(!0),s.finished&&!as)return is(null);if(s.finished)return;let t=s.round+(as?0:1)===s.rounds&&s.rounds>1;is("fight",as?t?1.2:1:s.round===0?.6:.35)}function $c(){document.querySelectorAll("[data-sound]").forEach(s=>{s.textContent=yc()?"\u{1F50A}":"\u{1F507}",s.title=yc()?"Sound on":"Sound off"}),_e("speedBtn").textContent=hn+"\xD7"}function wv(){let s=Me,e=s.rank===0||s.belt&&(s.belt.interimIsMe||s.belt.held.length>0),t={look:s.fighter.look,name:s.fighter.name,weightClass:s.weightClassIndex,style:s.fighter.style,belt:e&&!s.retired?"waist":null,injured:s.injuryWeeks>0},i=s.scheduled&&!s.retired?s.scheduled:null,n=i?i.opponent:null;return n?[t,{look:n.look,name:n.name,weightClass:s.weightClassIndex,style:n.style,belt:i.oppRank===0?"shoulder":null}]:[t]}function Sv(){let s=Me,e=s.scheduled&&!s.retired?s.scheduled.opponent:null;_e("showcaseCap").innerHTML=e?`<span class="red">${re(s.fighter.displayName)}</span><span class="vs">VS</span><span class="blue">${re(e.displayName)}</span>`:`<span class="red">${re(s.fighter.displayName)}</span><span class="muted">${re(s.fighter.style)} \xB7 ${re(s.weightClass)} \xB7 drag to spin</span>`}function Xc(){let s=_e("lookPickers"),e=(t,i,n)=>`
    <div class="look-row"><span>${i}</span><div class="chips">
      ${Yt[t].map((r,a)=>n==="swatch"?`<button type="button" class="swatch ${ar[t]===a?"on":""}" style="background:${r}" data-look="${t}:${a}" title="${t==="shorts"?Rp[a]:""}" aria-label="${i} ${a+1}"></button>`:`<button type="button" class="btn chip ${ar[t]===a?"on":""}" data-look="${t}:${a}">${re(r)}</button>`).join("")}
    </div></div>`;s.innerHTML=e("skin","Skin tone","swatch")+e("hair","Hair","chip")+e("hairColor","Hair color","swatch")+e("beard","Facial hair","chip")+e("shorts","Fight shorts","swatch"),_e("lookInput").value=cc(ar)}function il(){if(!je)return;let e=(_e("createForm").querySelector("input[name=style]:checked")||{}).value||"Striker";je.preview.setFighters([{look:cc(ar),weightClass:Number(_e("wcSelect").value||3),style:e}])}function Tv(){let s=_e("wcSelect");s.options.length||(s.innerHTML=Me.weightClasses.map((e,t)=>`<option value="${t}" ${t===3?"selected":""}>${re(e)}</option>`).join(""),_e("countrySelect").innerHTML=Me.countries.map(e=>`<option>${re(e)}</option>`).join(""))}function Ev(){let s=Me;_e("topstats").innerHTML=`
    <span>Year <b>${s.year}</b> \xB7 Week <b>${s.week}</b></span>
    <span>Age <b>${s.fighter.age}</b></span>
    <span class="${s.money<0?"neg":""}">Cash <b>${Qe(s.money)}</b></span>
    <span>Fame <b>${s.fame}</b></span>`}function Rv(){let s=Me.fighter,e=Me,t=[],i=e.belt?(e.rank===0?1:0)+e.belt.held.length:0;if(i>1&&t.push(`<span class="badge gold">\u{1F3C6} ${["","","CHAMP-CHAMP","TRIPLE CHAMP","QUADRUPLE CHAMP"][i]||i+"-BELT CHAMP"}</span>`),e.rank===0?t.push(`<span class="badge gold">\u{1F3C6} GFC ${re(e.weightClass).toUpperCase()} CHAMPION</span>`):e.belt&&e.belt.interimIsMe?t.push('<span class="badge gold">INTERIM CHAMPION</span>'):e.rank>0&&t.push(`<span class="badge red">GFC #${e.rank}</span>`),e.belt)for(let n of e.belt.held)t.push(`<span class="badge gold">\u{1F3C6} ${re(n)} champion</span>`);t.push(`<span class="badge">${re(e.org)}</span>`),s.streak>=2&&t.push(`<span class="badge green">${s.streak}-fight win streak</span>`),s.streak<=-2&&t.push(`<span class="badge red">${-s.streak}-fight skid</span>`),e.injuryWeeks>0&&t.push(`<span class="badge red">Injured ${e.injuryWeeks}w</span>`),e.titlesWon&&t.push(`<span class="badge gold">${e.titlesWon}\xD7 champ</span>`),_e("fighterCard").innerHTML=`
    <div class="fighter-top">
      <div>
        <div class="fighter-name">${re(s.displayName)}</div>
        <div class="fighter-meta">${re(s.style)} \xB7 ${re(e.weightClass)} \xB7 ${re(s.country)} \xB7 Age ${s.age}</div>
      </div>
      <div class="ovr"><b>${s.overall}</b><span>OVR</span></div>
    </div>
    <div class="record">${s.record} <small>${s.koWins} KO \xB7 ${s.subWins} SUB \xB7 ${s.decWins} DEC</small></div>
    <div class="badges">${t.join("")}</div>
    ${Object.entries(s.stats).map(([n,r])=>`
      <div class="stat"><span>${os[n]}</span>${lr(r,vv(r))}<b>${Math.floor(r)}</b></div>`).join("")}`}function Av(s){let e=s.overall-Me.fighter.overall;return e<=-4?'<span class="diff easy">Favorite</span>':e>=4?'<span class="diff hard">Underdog</span>':'<span class="diff even">Even</span>'}function f0(s,e){let t=s.opponent,i={interim:"\u{1F3C6} INTERIM TITLE FIGHT \xB7 5 rounds",unify:"\u{1F3C6} TITLE UNIFICATION \xB7 5 rounds",title:"\u{1F3C6} TITLE FIGHT \xB7 5 rounds",eliminator:"\u{1F3AF} TITLE ELIMINATOR \xB7 winner gets the next shot",main:"\u2605 MAIN EVENT \xB7 5 rounds"},n=(s.grudge?"\u2694 GRUDGE MATCH \xB7 ":"")+(s.title?i[s.kind]||i.title:i[s.kind]||(s.contender?"\u2B50 CONTENDER SERIES":`${s.rounds} rounds`)),r=Me.belt&&Me.belt.interim&&!Me.belt.interimIsMe&&s.opponent.displayName===Me.belt.interim,a=s.oppRank===0?"Champion":r?"Interim champion":s.oppRank>0?`#${s.oppRank}`:"";return`
    <div class="offer ${s.title?"title":""} ${s.contender||s.grudge?"contender":""}">
      <div class="offer-top">
        <div>
          <div class="offer-meta">${n}${a?" \xB7 "+a:""}</div>
          <div class="offer-name">${re(t.displayName)}</div>
          <div class="offer-meta">${t.record} \xB7 ${re(t.style)} \xB7 ${re(t.country)} \xB7 Age ${t.age} \xB7 OVR <b>${t.overall}</b></div>
        </div>
        ${Av(t)}
      </div>
      <div class="offer-money">Purse <b>${Qe(s.purse)}</b> + <b>${Qe(s.winBonus)}</b> to win \xB7 in ${s.weeks} week${s.weeks===1?"":"s"}</div>
      ${e?`<button class="btn ${s.title?"gold":"primary"} small" data-accept="${s.index}">Accept fight</button>`:""}
    </div>`}function Cv(s){let e=Me.fighter;return Object.keys(os).map(t=>{let i=Math.floor(e.stats[t]),n=Math.floor(s.stats[t]);return`<div class="stat" style="grid-template-columns:34px 1fr 34px">
      <b style="text-align:left;color:${i>=n?"var(--text)":"var(--muted)"}">${i}</b>
      <span style="text-align:center;font-size:12px;color:var(--muted)">${os[t]}</span>
      <b style="color:${n>=i?"var(--text)":"var(--muted)"}">${n}</b></div>`}).join("")}function Lv(){let s=Me,e=_e("fightCard");if(s.retired){e.innerHTML=`
      <h2>Career over</h2>
      <div class="fight-night">
        <h3>${re(s.legacy)}</h3>
        <p>${re(s.fighter.displayName)} retired at ${s.fighter.age} with a record of <b>${s.fighter.record}</b>.</p>
        <p class="muted">${s.titlesWon} title${s.titlesWon===1?"":"s"} won \xB7 ${s.titleDefenses} defenses \xB7 ${Qe(s.earnings)} career earnings \xB7 legacy score ${s.legacyScore}</p>
      </div>
      <div class="btn-row"><button class="btn primary big" data-newsave>Start a new career</button><button class="btn big" data-saves>\u{1F4BE} Saves</button></div>`;return}if(s.fightNight){let t=s.scheduled;e.innerHTML=`
      <h2>Next fight</h2>
      <div class="fight-night">
        <h3>FIGHT NIGHT</h3>
        <p>${t.title?t.kind==="interim"?"\u{1F3C6} For the interim GFC title \u2014 ":t.kind==="unify"?"\u{1F3C6} To unify the GFC belts \u2014 ":"\u{1F3C6} For the GFC title \u2014 ":t.kind==="eliminator"?"\u{1F3AF} Title eliminator \u2014 ":t.kind==="main"?"\u2605 Main event \u2014 ":""}vs <b>${re(t.opponent.displayName)}</b></p>
      </div>
      <button class="btn primary big" data-startfight>Walk out to the cage</button>`;return}if(s.scheduled){let t=s.scheduled;e.innerHTML=`
      <h2>Fight camp</h2>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
        <div class="countdown">${t.weeks}</div>
        <div class="muted">week${t.weeks===1?"":"s"} until fight night.<br>Train hard \u2014 every session counts.</div>
      </div>
      ${f0(t,!1)}
      ${t.oppBonus>0?`<p class="badge red" style="display:inline-block">Opponent fired up: +${t.oppBonus} to all stats</p>`:""}
      <button class="btn small" data-talk="opponent" ${s.canTalk?"":"disabled"}>\u{1F3A4} Talk to the press${s.canTalk?"":" (done this week)"}</button>
      <div class="label">Tale of the tape <span style="float:right">You \xB7 Them</span></div>
      ${Cv(t.opponent)}`;return}e.innerHTML=`
    <h2>Fight offers</h2>
    ${s.offers.length?s.offers.map(t=>f0(t,!0)).join(""):'<p class="muted">No offers right now. Keep training \u2014 your manager is working the phones.</p>'}
    <p class="muted" style="font-size:12px;margin:6px 0 0">Offers refresh every few weeks.</p>`}function Pv(){let s=Me,e=s.retired||s.fightNight||!!s.fight,t=s.injuryWeeks>0;_e("actionsCard").innerHTML=`
    <h2>This week</h2>
    <div class="energy-row">
      <div class="lbl"><span>Energy</span><b>${s.energy}/100</b></div>
      ${lr(s.energy,s.energy>50?"var(--green)":s.energy>25?"var(--orange)":"var(--red)","lg")}
    </div>
    ${t?`<p class="badge red" style="display:inline-block">Injured: ${s.injuryWeeks} week(s) \u2014 no training or sparring</p>`:""}
    <div class="label" style="margin-top:4px">Train <span class="muted">(\u2212${s.trainCost} energy, ${s.gym.name} \xD7${s.gym.mult})</span></div>
    <div class="train-grid">
      ${Object.keys(os).map(i=>`
        <button class="btn small" data-train="${i}" ${e||t||s.energy<s.trainCost?"disabled":""}>${os[i]}</button>`).join("")}
    </div>
    <div class="act-grid">
      <button class="btn" data-action="spar" ${e||t||s.energy<30?"disabled":""}>Spar<span class="sub">Gains across the board \xB7 \u221230</span></button>
      <button class="btn" data-action="rest" ${e?"disabled":""}>Rest<span class="sub">Recover energy \xB7 +50</span></button>
      <button class="btn" data-action="media" ${e||s.energy<10?"disabled":""}>Media<span class="sub">Build fame \xB7 \u221210</span></button>
      <button class="btn" data-action="work" ${e||s.energy<15?"disabled":""}>${s.gfc?"Seminar":"Teach classes"}<span class="sub">Earn cash \xB7 \u221215</span></button>
    </div>
    <p class="muted" style="font-size:12px;margin:10px 0 0">Each action takes one week. Weekly costs: ${Qe(s.gym.fee+s.teamSalary)} (gym ${Qe(s.gym.fee)} + team ${Qe(s.teamSalary)}).</p>`}function kv(){let s=Me,e=s.gym;_e("statusCard").innerHTML=`
    <h2>Career</h2>
    <div class="kv">
      <span>Promotion</span><b>${re(s.org)}</b>
      <span>Ranking</span><b>${s.gfc?gv(s.rank):"\u2014"}</b>
      ${s.gfc?"":`<span>Regional wins (since tryout)</span><b>${s.regionalWins}</b>`}
      <span>Cash</span><b style="color:${s.money<0?"var(--red)":"var(--green)"}">${Qe(s.money)}</b>
      <span>Career earnings</span><b>${Qe(s.earnings)}</b>
      <span>Division</span><b>${re(s.weightClass)}</b>
      <span>Title defenses</span><b>${s.titleDefenses}</b>
      ${s.divisionsWon.length?`<span>Belts won</span><b>${s.divisionsWon.map(re).join(", ")}</b>`:""}
      <span>Peak overall</span><b>${s.peakOverall}</b>
      <span>Fame</span><b>${s.fame}/100</b>
    </div>
    ${lr(s.fame,"var(--gold)")}
    <div class="gym-box">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <div><b>${re(e.name)}</b><div class="muted" style="font-size:12px">Training \xD7${e.mult} \xB7 ${Qe(e.fee)}/wk</div></div>
        ${e.nextName?`<button class="btn small" data-upgrade ${s.money<e.nextCost||s.retired?"disabled":""}>Move up<span class="sub">${re(e.nextName)} \xB7 ${Qe(e.nextCost)}</span></button>`:'<span class="badge gold">Best gym</span>'}
      </div>
    </div>
    <div class="footer-btns">
      ${s.retired?"":`<button class="btn ghost small" data-division ${s.scheduled||s.fight?"disabled":""}>Change division${s.divisionCooldown?` (${s.divisionCooldown}w)`:""}</button>`}
      ${s.retired?"":'<button class="btn ghost small" data-retire>Retire</button>'}
      <button class="btn ghost small" data-saves>\u{1F4BE} Saves / new career</button>
    </div>`}function Iv(){let s=Me,e=s.belt,t=e?`
    <div class="belt-box">
      <div class="belt-title">\u{1F3C6} GFC ${re(e.division)} Championship</div>
      <div class="kv">
        <span>Champion</span><b>${re(e.champion||"Vacant")}${s.rank===0?" (you)":""}</b>
        ${e.interim?`<span>Interim champion</span><b>${re(e.interim)}${e.interimIsMe?" (you)":""}</b>`:""}
        ${e.champInjured?`<span>Status</span><b style="color:var(--orange)">Champion injured \xB7 ${e.champInjured}w</b>`:""}
        ${e.idle!==null?`<span>Last title fight</span><b style="color:${e.idle>=e.stripWarn?"var(--red)":"var(--text)"}">${e.idle} weeks ago${e.idle>=e.stripWarn?` \u2014 stripped in ${e.stripWeeks-e.idle}w`:""}</b>`:""}
        ${e.held.map((i,n)=>`<span>${re(i)} belt</span><b style="color:${e.heldIdle[n]>=e.stripWarn?"var(--red)":"var(--gold)"}">Yours \xB7 stripped in ${e.stripWeeks-e.heldIdle[n]}w unless defended</b>`).join("")}
        ${e.nextInLine?`<span>Title shot</span><b style="color:var(--gold)">You're next in line</b>`:""}
      </div>
      ${e.lineage.length?`<details><summary>Belt lineage</summary><ol class="lineage">${e.lineage.map(i=>`
        <li class="${i.player?"me":""}"><b>${re(i.name)}</b>${i.interim?' <span class="badge">interim</span>':""}
          <div class="muted">${re(i.how)} \xB7 ${re(i.date)}${i.defenses?` \xB7 ${i.defenses} defense${i.defenses===1?"":"s"}`:""}</div></li>`).join("")}</ol></details>`:""}
    </div>`:"";_e("rankCard").innerHTML=`
    <h2>GFC ${re(s.weightClass)} rankings</h2>
    ${s.gfc?"":`<p class="muted" style="font-size:13px">You're not in the GFC yet. These are the fighters you're chasing.</p>`}
    ${t}
    <ul class="ranks scroll">
      ${s.rankings.map(i=>`
        <li class="${i.player?"me":""} ${i.rank===0||i.interim?"champ":""} ${i.rival?"rivalrow":""}">
          <span class="rk">${i.rank===0?"C":i.interim?"IC":i.rank}</span>
          <span>${re(i.name)} <span class="muted">${i.record}</span></span>
          <span class="muted">${i.overall}</span>
        </li>`).join("")}
    </ul>`}function Nv(){let s=Me.history;_e("historyCard").innerHTML=`
    <h2>Fight record</h2>
    ${s.length?`<div class="scroll"><table class="hist">${s.map(e=>`
      <tr>
        <td><span class="res ${e.result}">${e.result}</span></td>
        <td>${re(e.opponent)}<div class="muted" style="font-size:12px">${re(e.event)} \xB7 ${re(e.date)}</div></td>
        <td style="text-align:right">${re(e.method)}<div class="muted" style="font-size:12px">R${e.round} ${re(e.time)}</div></td>
      </tr>`).join("")}</table></div>`:'<p class="muted">No pro fights yet.</p>'}`}function Uv(){_e("newsCard").innerHTML=`
    <h2>News</h2>
    <ul class="news scroll">${Me.news.map(s=>`<li>${re(s)}</li>`).join("")}</ul>`}function y0(s){return`<span class="stars">${"\u2605".repeat(s)}<span class="off">${"\u2605".repeat(5-s)}</span></span>`}function Dv(){let s=Me,e=s.rival,t=_e("rivalCard");if(!e){t.innerHTML=`
      <h2>Rival</h2>
      <p class="muted">No active rivalry. Someone will step up soon \u2014 or beat you and make it personal.</p>
      ${s.rivalries.length?`<div class="label">Past rivalries</div><ul class="news">${s.rivalries.map(n=>`<li>${re(n)}</li>`).join("")}</ul>`:""}`;return}let i=e.heat>=75?"Boiling":e.heat>=40?"Heated":e.heat>=20?"Simmering":"Cold";t.innerHTML=`
    <h2>\u2694 Rival</h2>
    <div class="fighter-top">
      <div>
        <div class="fighter-name" style="font-size:17px">${re(e.displayName)}</div>
        <div class="fighter-meta">${e.record} \xB7 ${re(e.style)} \xB7 ${re(e.country)} \xB7 Age ${e.age}${e.rank===0?" \xB7 Champion":e.rank>0?" \xB7 #"+e.rank:""}</div>
      </div>
      <div class="ovr"><b>${e.overall}</b><span>OVR</span></div>
    </div>
    <div class="h2h"><b>${e.h2hWins}-${e.h2hLosses}</b><span class="muted">head to head (first to lead by 2 settles it)</span></div>
    <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>Heat</span><b>${i} \xB7 ${e.heat}</b></div>
    <div class="heat"><i style="width:${e.heat}%"></i></div>
    <p class="muted" style="font-size:12px">At 60+ heat a grudge match (1.5\xD7 purse) shows up in your offers.</p>
    <div class="btn-row">
      <button class="btn small" data-talk="rival" ${s.canTalk&&!s.retired?"":"disabled"}>\u{1F3A4} Call them out${s.canTalk?"":" (done this week)"}</button>
    </div>`}function Ov(){let s=Me,e=Object.values(s.team),t=e.filter(i=>i.name).length;_e("teamCard").innerHTML=`
    <h2>Team \xB7 ${t}/${e.length}</h2>
    ${e.map(i=>`
      <div class="staff-row">
        <div>
          <div class="role">${re(i.title)}</div>
          ${i.name?`<b>${re(i.name)}</b> ${y0(i.stars)}<div class="perk">${re(i.perk)} \xB7 ${Qe(i.salary)}/wk</div>`:'<span class="muted">Vacant</span>'}
        </div>
        ${i.name&&!s.retired?`<button class="btn small ghost" data-fire="${i.role}">Release</button>`:""}
      </div>`).join("")}
    <div class="btn-row"><button class="btn primary small" data-market ${s.retired?"disabled":""}>Hire staff (${s.market.length} available)</button></div>`}function on(s,e={}){Ze={kind:s,...e},hr()}function Zc(){Ze=null,hr()}function hr(){let s=_e("modal");if(!Ze){s.classList.add("hidden");return}s.classList.remove("hidden");let e=_e("modalBody"),t=Me;if(Ze.kind==="saves"){let i=t.saves.length>=t.maxSaves;e.innerHTML=`
      <h1>\u{1F4BE} Saved fighters</h1>
      <p class="muted">Up to ${t.maxSaves} fighters. Every action saves automatically, so you can switch any time.
        ${t.storage==="account"?"Saves are kept with your claude.ai account, so they're on every device you sign in on.":"Saves are kept in this browser on this device."}</p>
      ${t.saves.length?t.saves.map(n=>`
        <div class="hof-entry ${n.active?"active":""}">
          <div class="top">
            <div><b>${n.missing?"Missing save":re(n.name)}</b>
              ${n.missing?"":`<div class="muted" style="font-size:12px">${re(n.weightClass)} \xB7 ${re(n.style)} \xB7 ${re(n.record)} \xB7 ${n.overall} OVR \xB7 age ${n.age}</div>`}</div>
            <span>${n.active?'<span class="badge red">PLAYING</span>':""}${n.retired?' <span class="badge gold">RETIRED</span>':""}</span>
          </div>
          <div class="btn-row">
            ${n.active||n.missing?"":`<button class="btn small primary" data-slot="${n.slot}">Play</button>`}
            ${n.missing?"":`<button class="btn small" data-export="${n.slot}">Export</button>`}
            <button class="btn small ghost" data-delslot="${n.slot}" data-name="${re(n.name||"this save")}">Delete</button>
          </div>
        </div>`).join(""):'<p class="muted">No saved fighters yet.</p>'}
      <div class="btn-row">
        <button class="btn primary" data-newsave ${i?"disabled":""}>+ New fighter${i?" (slots full)":""}</button>
        <button class="btn" data-importopen ${i?"disabled":""}>\u{1F4C2} Load a career</button>
      </div>`}else if(Ze.kind==="import")e.innerHTML=`
      <h1>\u{1F4C2} Load a career</h1>
      <p class="muted">Bring in a fighter exported from Cage Career 3D, from this device or any other. It goes into a free save slot and starts playing.</p>
      <div class="btn-row"><label class="btn primary">Choose save file<input type="file" id="importFile" accept=".json,application/json,text/plain" hidden></label></div>
      <p class="muted" style="margin-top:14px">\u2026or paste a save code:</p>
      <textarea id="importCode" rows="5" spellcheck="false" placeholder="CC3D1.\u2026" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px"></textarea>
      <div class="btn-row"><button class="btn primary" data-importcode>Load code</button><button class="btn ghost" data-saves>\u2190 Back</button></div>`,_e("importFile").addEventListener("change",async i=>{let n=i.target.files&&i.target.files[0];n&&Kc(await n.text())});else if(Ze.kind==="export")e.innerHTML=`
      <h1>\u2B06\uFE0F Export ${re(Ze.name)}</h1>
      <p class="muted">Use this to move the fighter to another device or browser, or to share them. Open \u{1F4BE} Saves \u2192 \u{1F4C2} Load a career there.</p>
      <div class="btn-row"><button class="btn primary" data-savefile>Save as file</button><button class="btn" data-copycode ${Ze.code?"":"disabled"}>Copy save code</button></div>
      <textarea id="exportCode" rows="5" readonly spellcheck="false" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px;margin-top:10px">${re(Ze.code||"Preparing code\u2026")}</textarea>
      <div class="btn-row"><button class="btn ghost" data-saves>\u2190 Back</button></div>`;else if(Ze.kind==="market")e.innerHTML=`
      <h1>Staff market</h1>
      <p class="muted">Cash ${Qe(t.money)} \xB7 Fame ${t.fame} \xB7 New candidates in ${t.marketRefresh} week(s). Signing fee is 4 weeks' salary.</p>
      ${t.market.length?t.market.map(i=>{let n=t.fame>=i.fameRequired,r=t.money>=i.fee;return`
        <div class="candidate">
          <div class="top">
            <div><div class="role muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${re(i.title)}</div><b>${re(i.name)}</b> ${y0(i.stars)}</div>
            <button class="btn small ${n&&r?"primary":""}" data-hire="${i.index}" ${n&&r?"":"disabled"}>Sign \xB7 ${Qe(i.fee)}</button>
          </div>
          <div class="muted" style="font-size:13px;margin-top:4px">${re(i.perk)}</div>
          <div class="muted" style="font-size:12px;margin-top:4px">${Qe(i.salary)}/week
            ${i.fameRequired?` \xB7 <span style="color:${n?"var(--green)":"var(--red)"}">needs ${i.fameRequired} fame</span>`:""}
            ${i.current?` \xB7 replaces ${re(i.current)}`:""}</div>
        </div>`}).join(""):`<p class="muted">Nobody's available right now. Check back in a few weeks.</p>`}`;else if(Ze.kind==="talk"){let i=Ze.target==="rival"?t.rival:t.scheduled&&t.scheduled.opponent;if(!i)return Zc();e.innerHTML=`
      <h1>\u{1F3A4} Press conference</h1>
      <p class="muted">The cameras are on. What do you say about <b style="color:var(--text)">${re(i.displayName)}</b>?</p>
      <div class="tones">
        <button class="btn" data-tone="respect">Respectful<span class="sub">+1 fame, cools the rivalry</span></button>
        <button class="btn" data-tone="trash">Trash talk<span class="sub">Fame & hype, opponent gets motivated</span></button>
        <button class="btn primary" data-tone="personal">Get personal<span class="sub">Big hype, big risk</span></button>
      </div>
      <p class="muted" style="font-size:12px;margin-top:12px">Hyping a booked fight raises the purse, but a fired-up opponent fights harder. Win and you backed it up; lose and you'll eat your words.</p>`}else if(Ze.kind==="talkResult"){let i=t.lastTalk;e.innerHTML=`
      <h1>\u{1F3A4} Headlines</h1>
      <div class="quote"><span class="who">${re(t.fighter.displayName)}</span>"${re(i.you)}"</div>
      <div class="quote them"><span class="who">${re(i.target)}</span>"${re(i.them)}"</div>
      <ul class="news">${i.effects.map(n=>`<li>${re(n)}</li>`).join("")}</ul>
      <button class="btn primary big" data-closemodal style="margin-top:12px">Done</button>`}else if(Ze.kind==="division"){let i=t.weightClassIndex,n=[i-1,i+1].filter(r=>r>=0&&r<t.weightClasses.length);e.innerHTML=`
      <h1>Change division</h1>
      <p class="muted">Champions keep their belt when they change division, so you can hold several at once, but each belt must be defended within a year and a half or it's stripped. You fight at <b style="color:var(--text)">${re(t.weightClass)}</b>. Moving up adds power and chin but costs speed; cutting down adds speed, costs power, and the weight cut drains cardio. You start over in the new division's rankings${t.rank===0?" \u2014 but as a champion, you get an immediate superfight for the other belt":t.rank>0&&t.rank<=5?" \u2014 your reputation lands you at #10":""}.</p>
      ${t.divisionCooldown?`<p class="badge red" style="display:inline-block">Your body needs ${t.divisionCooldown} more weeks before another move.</p>`:""}
      <div class="btn-row">${n.map(r=>`<button class="btn ${r>i,""}" data-movediv="${r}" ${t.divisionCooldown?"disabled":""}>${r>i?"\u25B2 Move up to":"\u25BC Cut down to"} ${re(t.weightClasses[r])}</button>`).join("")}</div>`}else if(Ze.kind==="place")zv(e);else if(Ze.kind==="phone")Gv(e);else if(Ze.kind==="hof"){let i=t.hallOfFame||[];e.innerHTML=`
      <h1>\u{1F3DB} Hall of Fame</h1>
      <p class="muted">Every career finished by every player. A legacy score of 200+ (Hall of Famer or All-Time Great) earns induction.</p>
      ${i.length?i.map((n,r)=>`
        <div class="hof-entry ${n.inducted?"inducted":""}">
          <div class="top">
            <div><b>${r+1}. ${re(n.name)}</b>${n.mine?' <span class="badge red">YOU</span>':""}<div class="muted" style="font-size:12px">${re(n.style)} \xB7 ${re(n.country)} \xB7 ${n.divisions.map(re).join(" / ")}</div></div>
            <span class="badge ${n.inducted?"gold":""}">${n.inducted?"INDUCTED \xB7 ":""}${re(n.legacy)}</span>
          </div>
          <div class="kv" style="margin-top:8px;font-size:13px">
            <span>Record</span><b>${n.record} (${n.koWins} KO, ${n.subWins} SUB)</b>
            <span>Titles \xB7 defenses</span><b>${n.titlesWon} \xB7 ${n.titleDefenses}</b>
            ${n.divisionsWon.length?`<span>Belts</span><b>${n.divisionsWon.map(re).join(", ")}${n.divisionsWon.length>=2?" \u{1F451}":""}</b>`:""}
            <span>Peak overall</span><b>${n.peakOverall}</b>
            <span>Career</span><b>${n.years} yrs \xB7 retired at ${n.retiredAge}</b>
            <span>Earnings</span><b>${Qe(n.earnings)}</b>
            <span>Legacy score</span><b>${n.legacyScore}</b>
          </div>
          ${n.rivalries.length?`<div class="muted" style="font-size:12px;margin-top:6px">Rivalries: ${n.rivalries.map(re).join(" \xB7 ")}</div>`:""}
        </div>`).join(""):'<p class="muted">No retired careers yet. Be the first legend.</p>'}`}}function Qc(){return!_e("worldScreen").classList.contains("hidden")}function Fv(){!Me||!Me.exists||(_e("worldScreen").classList.remove("hidden"),je&&je.world.goHome(),Ci())}function Bv(){_e("worldScreen").classList.add("hidden"),je&&je.world.isDriving()&&je.world.toggleDrive(),Ci()}function el(s){return s>=1e6?(s/1e6).toFixed(s>=1e7?0:1)+"M":s>=1e3?(s/1e3).toFixed(s>=1e4?0:1)+"K":String(s)}function _0(s){return s>=80?"\u{1F601}":s>=60?"\u{1F642}":s>=40?"\u{1F610}":s>=20?"\u{1F615}":"\u{1F61E}"}function Hv(){if(!Qc()||!Me||!Me.life)return;let s=Me,e=s.life;_e("worldHud").innerHTML=`
    <div class="hud-stats">
      <span title="Cash">\u{1F4B5} <b style="color:${s.money<0?"var(--red)":"var(--green)"}">${Qe(s.money)}</b></span>
      <span title="Happiness: training \xD7${e.moodMult}">${_0(e.happiness)} <b>${e.happiness}</b></span>
      <span title="Followers">\u{1F4F1} <b>${el(e.followers)}</b></span>
      <span title="Energy">\u26A1 <b>${s.energy}</b></span>
      <span class="muted">Y${s.year} W${s.week}</span>
      ${s.injuryWeeks?`<span class="badge red">Injured ${s.injuryWeeks}w</span>`:""}
    </div>
    <div class="hud-btns">
      <button class="btn small" data-phone>\u{1F4F1} Phone</button>
      <button class="btn small primary" data-closeworld>\u{1F94A} Career</button>
    </div>`,eu()}function eu(){if(!Qc()||!Me)return;let s=je?je.world.near:null,e=Me.life,t=e.driving&&e.catalog.cars.find(n=>n.id===e.driving),i=je&&je.world.isDriving();_e("worldBottom").innerHTML=`
    ${s?`<button class="btn gold big" data-enter="${s.id}">${s.icon} Enter ${re(s.name)} <span class="sub">E</span></button>`:""}
    ${t?`<button class="btn" data-drive>${i?"\u{1F6B6} Get out":"\u{1F697} Drive "+re(t.name)}</button>`:""}`}function Bi(s,e,t="",i=""){let n=Me.life.done[s];return`<button class="btn ${i}" data-life="${s}" ${t} ${n?"disabled":""}>${e}${n?' <span class="sub">done this week</span>':""}</button>`}function zv(s){let e=Me,t=e.life,i=t.catalog,n=Ze.place,r=t.partner,a=r?`<p>\u2764\uFE0F <b>${re(r.name)}</b> \xB7 ${re(r.job)} \xB7 ${r.stage==="married"?"married":r.stage==="engaged"?"engaged \u{1F48D}":"dating"}</p>
      ${lr(r.affection,r.affection>50?"var(--red)":"var(--orange)")}<p class="muted" style="font-size:12px">Affection ${Math.round(r.affection)}/100</p>`:"",o=()=>`
    ${Bi("meet","\u{1F44B} Meet someone new")}
    ${t.candidate?`<div class="offer contender"><b>${re(t.candidate.name)}</b>, ${t.candidate.age} \xB7 ${re(t.candidate.job)}
      <div class="btn-row"><button class="btn primary small" data-life="ask">\u2764\uFE0F Ask them out</button></div>
      ${r?`<p class="muted" style="font-size:12px">Careful \u2014 you're already with ${re(r.name)}.</p>`:""}</div>`:""}`,l=(h,c,u)=>`<h1>${h} ${c}</h1>${u?`<p class="muted">${u}</p>`:""}`;if(n==="home"){let h=i.houses[t.house];s.innerHTML=`
      ${l("\u{1F3E0}",re(h.name),`Upkeep ${Qe(h.upkeep)}/week \xB7 Happiness ${_0(t.happiness)} ${t.happiness} (heading to ${t.target}) \xB7 training \xD7${t.moodMult}`)}
      ${a}
      ${t.kids.length?`<p>\u{1F476} ${t.kids.map(c=>`<b>${re(c.name)}</b> (${c.age})`).join(", ")}</p>`:""}
      ${t.pets.length?`<p>\u{1F43E} ${t.pets.map(c=>`<b>${re(c.name)}</b> the ${c.kind}`).join(", ")}</p>`:""}
      <div class="btn-row">
        ${Bi("family","\u{1F468}\u200D\u{1F469}\u200D\u{1F467} Family time")}
        <button class="btn" data-action="rest" ${e.fightNight?"disabled":""}>\u{1F634} Rest at home <span class="sub">ends the week</span></button>
        ${r&&r.stage==="married"?`<button class="btn" data-life="kids">${t.tryingForKids?"\u23F8 Stop trying for a baby":"\u{1F476} Try for a baby"}</button>`:""}
      </div>
      <div class="label">Lifestyle <span class="muted">(weekly spending \u2014 bigger means happier and more famous)</span></div>
      <div class="btn-row">${i.lifestyles.map((c,u)=>`<button class="btn small ${u===t.lifestyle?"gold":""}" data-life="lifestyle" data-level="${u}">${re(c.name)}<span class="sub">${Qe(c.cost)}/wk</span></button>`).join("")}</div>
      <p class="muted" style="font-size:12px">Last week: bills ${Qe(t.lastBills)} \xB7 sponsors paid ${Qe(t.lastSponsor)}.</p>`}else if(n==="club")s.innerHTML=`
      ${l("\u{1FAA9}","Nightclub","Bottle service, flashing lights, and the city's most eligible singles. Partying lifts your mood \u2014 but cameras are everywhere.")}
      <div class="btn-row">${Bi("party","\u{1F37E} Party in the VIP section","","primary")}</div>
      ${o()}`;else if(n==="cafe")s.innerHTML=`
      ${l("\u2615","Caf\xE9 & Dining","Quiet tables, good coffee, and a candlelit restaurant upstairs.")}
      ${a}
      <div class="btn-row">
        ${r?Bi("date",`\u{1F377} Take ${re(r.name)} on a date <span class="sub">${Qe(t.dateCost)}</span>`,"","primary"):""}
        ${r?Bi("gift","\u{1F381} Buy a gift"):""}
        ${r&&r.stage==="dating"?Bi("propose","\u{1F48D} Propose"):""}
        ${r&&r.stage==="engaged"?`<button class="btn gold" data-life="wedding">\u{1F492} Have the wedding <span class="sub">${Qe(t.weddingCost)}</span></button>`:""}
      </div>
      ${!r||r.stage!=="married"?o():""}`;else if(n==="gym"){let h=e.injuryWeeks>0,c=!!e.fightNight;s.innerHTML=`
      ${l("\u{1F94A}","Iron Gym",`Energy ${e.energy}/100 \xB7 each session ends the week \xB7 happiness bonus \xD7${t.moodMult}`)}
      <div class="train-grid">${Object.keys(os).map(u=>`<button class="btn small" data-train="${u}" ${c||h||e.energy<e.trainCost?"disabled":""}>${os[u]}</button>`).join("")}</div>
      <div class="btn-row"><button class="btn" data-action="spar" ${c||h||e.energy<30?"disabled":""}>Spar</button></div>
      ${h?'<p class="badge red" style="display:inline-block">Injured \u2014 rest up at home first</p>':""}`}else if(n==="arena"){let h=e.scheduled;s.innerHTML=`
      ${l("\u{1F3C6}","GFC Arena",h?`Next fight: vs ${re(h.opponent.displayName)} in ${h.weeks} week(s)`:`${e.offers.length} fight offer(s) waiting`)}
      ${e.fightNight?'<button class="btn primary big" data-startfight>Walk out to the cage</button>':'<button class="btn primary" data-closeworld>See fight offers & schedule</button>'}`}else if(n==="cars")s.innerHTML=`
      ${l("\u{1F697}","Luxury Motors","Pick your ride. Cars lift your mood and your fame; sell them back for 60%.")}
      ${i.cars.map(h=>{let c=t.cars.includes(h.id);return`<div class="shop-row"><span class="swatch" style="background:${h.color}"></span>
          <div><b>${re(h.name)}</b><div class="muted" style="font-size:12px">${Qe(h.price)} \xB7 +${h.joy} happiness${h.fame?` \xB7 +${h.fame} fame`:""}</div></div>
          ${c?`<span class="btn-row"><button class="btn small ${t.driving===h.id?"gold":""}" data-life="drive" data-id="${h.id}">${t.driving===h.id?"Driving":"Drive"}</button><button class="btn small ghost" data-life="sell" data-kind="car" data-id="${h.id}">Sell</button></span>`:`<button class="btn small primary" data-life="buy" data-kind="car" data-id="${h.id}" ${e.money<h.price?"disabled":""}>Buy</button>`}</div>`}).join("")}`;else if(n==="realty"){let h=Math.round(i.houses[t.house].price*.85);s.innerHTML=`
      ${l("\u{1F3E1}","Prime Realty",`Your current home trades in for ${Qe(h)}.`)}
      ${i.houses.map((c,u)=>`<div class="shop-row"><span class="swatch">${["\u{1F3E2}","\u{1F3E0}","\u{1F3E1}","\u{1F3D6}\uFE0F","\u{1F3F0}"][u]}</span>
        <div><b>${re(c.name)}</b><div class="muted" style="font-size:12px">${c.price?Qe(c.price):"Rent"} \xB7 upkeep ${Qe(c.upkeep)}/wk \xB7 +${c.joy} happiness</div></div>
        ${u===t.house?'<span class="badge gold">Home</span>':`<button class="btn small primary" data-life="buy" data-kind="house" data-id="${c.id}" ${e.money+h<c.price?"disabled":""}>Move in</button>`}</div>`).join("")}`}else n==="pets"&&(s.innerHTML=`
      ${l("\u{1F43E}","Paws Pet Shop","A loyal companion follows you everywhere in town.")}
      ${i.pets.map(h=>`<div class="shop-row"><span class="swatch">${{dog:"\u{1F415}",cat:"\u{1F408}",parrot:"\u{1F99C}",tiger:"\u{1F405}"}[h.id]}</span>
        <div><b>${re(h.name)}</b><div class="muted" style="font-size:12px">${Qe(h.price)} \xB7 ${Qe(h.upkeep)}/wk \xB7 +${h.joy} happiness</div></div>
        <button class="btn small primary" data-life="buy" data-kind="pet" data-id="${h.id}" ${e.money<h.price?"disabled":""}>Adopt</button></div>`).join("")}`)}function Gv(s){let e=Me.life;s.innerHTML=`
    <div class="phone">
      <div class="phone-head"><b>@${re(Me.fighter.name.toLowerCase().replace(/[^a-z0-9]+/g,""))}</b>
        <span>${el(e.followers)} followers \xB7 sponsors ${Qe(e.sponsorRate)}/wk</span></div>
      <div class="label">Post <span class="muted">(once a week)</span></div>
      <div class="btn-row">
        ${Bi("post","\u{1F4AA} Training clip",'data-kind="training"',"small")}
        ${Bi("post","\u{1F3CE}\uFE0F Flex",'data-kind="flex"',"small")}
        ${Bi("post","\u2764\uFE0F Family pic",'data-kind="family"',"small")}
        ${Bi("post","\u{1F3A4} Call someone out",'data-kind="callout"',"small")}
      </div>
      <div class="feed">${e.feed.length?e.feed.map(t=>`
        <div class="post">
          <div class="muted" style="font-size:12px">${re(t.date)}</div>
          <div>${re(t.text)}</div>
          <div class="muted" style="font-size:12px">\u2764\uFE0F ${el(t.likes)} \xB7 +${el(t.gained)} followers</div>
          ${t.comments.map(i=>`<div class="comment"><b>@${re(i.user)}</b> ${re(i.text)}</div>`).join("")}
        </div>`).join(""):'<p class="muted">No posts yet. Your fans are waiting.</p>'}</div>
    </div>`}function Vv(s){return s.logs.flat()}function Wv(){let s=Me.fight,e=_e("fightScreen");if(!s){e.classList.add("hidden"),Zo=0,Wc=null;return}let t=e.classList.contains("hidden");e.classList.remove("hidden");let i=Vv(s);if(t){$v(s),s.round===0&&En(`In the red corner... ${s.player.name}! And in the blue corner... ${s.opponent.name}!`),Yc(null),_e("fightLog").innerHTML=s.round===0?jv(s):"",i.forEach(n=>_e("fightLog").appendChild(x0(n,!1))),Zo=i.length,Wc=s,b0(s),qc(s),nl();return}Xv(i.slice(Zo),s)}function jv(s){return`<div class="ev info n">Tale of the tape</div>
    <div style="max-width:420px;margin:0 auto 8px">
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <b style="text-align:center;color:#ff6b6e">${s.player.overall} OVR</b><span class="muted">vs</span><b style="text-align:center;color:#75a8ff">${s.opponent.overall} OVR</b>
      </div>
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <span>${re(s.player.style)}</span><span class="muted">style</span><span>${re(s.opponent.style)}</span>
      </div>
    </div>
    <div class="ev round">${s.belt?`This one is for the ${re(s.belt.label)}. Five rounds.`:s.title?"This one is for the GFC championship. Five rounds.":`${s.rounds} rounds.`} Pick your game plan.</div>`}function x0(s,e){let t=document.createElement("div");return t.className=`ev ${s.type} ${s.side}`,e||(t.style.animation="none"),t.innerHTML=(s.type==="round"||s.type==="info"&&s.side==="n"?"":`<span class="t">${s.t}</span>`)+re(s.text),t}function nl(){let s=_e("fightLog");s.scrollTop=s.scrollHeight}function $v(s){je&&(je.show(_e("arenaStage"),"arena"),je.arena.load(s,{playerLook:Me.fighter.look,weightClass:Me.weightClassIndex}))}var m0;function Yc(s){let e=_e("fightCaption");if(clearTimeout(m0),!s){e.className="caption";return}e.textContent=s.text,e.className=`caption show ${s.side} ${s.type}`,m0=setTimeout(()=>e.classList.remove("show"),s.type==="finish"?8e3:3200)}async function Xv(s,e){as=!0,la=!1,qc(e),tl();let t=!1;for(let i of s)if(_e("fightLog").appendChild(x0(i,!la)),Zo++,nl(),!la){Yc(i),i.type==="finish"&&(t=!0);let n=i.type==="kd"||i.type==="finish"?1100:i.type==="big"||i.type==="subatt"?750:420;je&&(n=je.arena.play(i,e)),await new Promise(r=>setTimeout(r,n/hn))}if(la&&je){je.arena.restore(e);let i=s[s.length-1];if(i&&Yc(i),e.finished&&!t){let n=(Me.lastResult||{}).result;is(null),zo(n)}}as=!1,tl(),Wc=e,b0(e),qc(e),nl()}function b0(s){let e=(t,i)=>`
    <div class="corner ${i}">
      <div class="cn">${re(t.name)}</div>
      <div class="cm">${t.record} \xB7 Sig ${t.sig} \xB7 TD ${t.td}${t.kd?" \xB7 KD "+t.kd:""}</div>
      <div class="bl">HEALTH</div>${lr(t.health,yv(t.health),"lg")}
      <div class="bl">STAMINA</div>${lr(t.stamina,"var(--gold)")}
    </div>`;_e("fightHead").innerHTML=`
    ${e(s.player,"p")}
    <div class="round-box">
      <div class="rl">ROUND</div>
      <div class="rn">${Math.max(1,s.round)}/${s.rounds}</div>
      ${s.title?'<div class="belt">TITLE</div>':""}
    </div>
    ${e(s.opponent,"o")}`}function qc(s){let e=_e("fightControls");if(as){e.innerHTML='<button class="btn big" data-skip>Skip \u25B6\u25B6</button>';return}if(!s.finished){e.innerHTML=`
      <div class="prompt">${s.round===0?"Choose your game plan for round 1":`Corner advice between rounds \u2014 game plan for round ${s.round+1}?`}
        ${s.scout?`<br><span class="scout">\u{1F9E0} Coach: "They're going to ${re(mv[s.scout])} this round."</span>`:""}
        ${s.oppFiredUp&&s.round===0?'<br><span style="color:#ff6b6e">Your opponent is fired up after the trash talk.</span>':""}</div>
      <div class="plans">
        ${g0.map(n=>`<button class="btn" data-plan="${n.id}">${n.name}<span class="sub">${n.desc}</span></button>`).join("")}
      </div>`;return}let t=Me.lastResult||{},i={W:"VICTORY",L:"DEFEAT",D:"DRAW"}[t.result]||"";e.innerHTML=`
    <div class="result-banner">
      <div class="rw ${t.result}">${i}</div>
      <div class="rd"><b>${re(s.method)}</b> \xB7 R${s.endRound} ${re(s.endTime)}${s.cards?" \xB7 "+s.cards.join(", "):""}</div>
      <div class="rd">Paid <b>${Qe(t.pay||0)}</b>${t.perfBonus?" (incl. $50,000 bonus)":""} \xB7 Fame ${t.fameDelta>=0?"+":""}${t.fameDelta} \xB7 Record <b>${re(t.record)}</b></div>
      ${t.careerNote?`<div class="rd" style="margin-top:4px;color:var(--gold)"><b style="color:inherit">${re(t.careerNote)}</b></div>`:""}
      ${t.injuryNote?`<div class="rd" style="color:var(--red)">${re(t.injuryNote)}</div>`:""}
    </div>
    <button class="btn primary big" data-closefight>Continue</button>`}document.addEventListener("click",async s=>{let e=s.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if(t.train)return Ai("action",{type:"train",stat:t.train});if(t.action)return Ai("action",{type:t.action});if(t.accept!==void 0)return Ai("accept",{index:t.accept});if(t.upgrade!==void 0)return Ai("upgrade");if(t.startfight!==void 0)return Ai("fight/start");if(t.plan){if(as)return;await ln("fight/round",{plan:t.plan})&&Ci();return}if(t.skip!==void 0){la=!0;return}if(t.sound!==void 0){Dp(),$c(),tl();return}if(t.speed!==void 0){hn=hn===1?2:hn===2?.5:1;try{localStorage.setItem("cc3d_speed",String(hn))}catch{}je&&je.arena.setSpeed(hn),$c();return}if(t.togglelog!==void 0){_e("fightPanel").classList.toggle("log-open"),nl();return}if(t.look){let[i,n]=t.look.split(":");ar[i]=Number(n),Xc(),il();return}if(t.randomlook!==void 0){ar=uc(),Xc(),il();return}if(t.closefight!==void 0)return Ai("fight/close");if(t.hof!==void 0)return on("hof");if(t.saves!==void 0)return on("saves");if(t.newsave!==void 0){await ln("save/blank")&&(Ze=null,Ci());return}if(t.slot!==void 0){await ln("save/switch",{slot:t.slot})&&(Ze=null,Jc(),Ci());return}if(t.importopen!==void 0)return on("import");if(t.importcode!==void 0){let i=_e("importCode").value;return i.trim()?Kc(i):fi("Paste a save code first.",!0)}if(t.export!==void 0){let i;try{i=or.exportSave(Number(t.export))}catch{return fi("Couldn't read that save.",!0)}let n=Me.saves[Number(t.export)];Ze={kind:"export",text:i,name:n?n.name:"fighter",code:null},hr();let r=Ze;try{r.code=await _v(i)}catch{r.code=null}Ze===r&&hr();return}if(t.savefile!==void 0){let i=String(Ze.name||"fighter").replace(/[^\w\- ]+/g,"").trim()||"fighter";return bv(i+" - Cage Career 3D.json",Ze.text)}if(t.copycode!==void 0)return Mv(Ze.code);if(t.delslot!==void 0){await Qo(`Delete ${t.name}? This can't be undone.`,"Delete")&&await ln("save/delete",{slot:t.delslot})&&(Jc(),Ci());return}if(t.closemodal!==void 0)return Zc();if(t.world!==void 0)return Fv();if(t.closeworld!==void 0)return Ze=null,Bv();if(t.enter)return on("place",{place:t.enter});if(t.phone!==void 0)return on("phone");if(t.drive!==void 0)return je&&je.world.toggleDrive(),eu();if(t.life){let i={type:t.life};for(let n of["kind","id","level"])t[n]!==void 0&&(i[n]=t[n]);await ln("life",i)&&Ci();return}if(t.market!==void 0)return on("market");if(t.hire!==void 0)return Ai("staff/hire",{index:t.hire});if(t.fire!==void 0){await Qo("Release this team member?","Release")&&Ai("staff/fire",{role:t.fire});return}if(t.talk)return on("talk",{target:t.talk});if(t.tone){await ln("talk",{target:Ze.target,tone:t.tone})&&(Ze={kind:"talkResult"},Ci());return}if(t.division!==void 0)return on("division");if(t.movediv!==void 0){await ln("division",{weightClass:t.movediv})&&(Ze=null,Ci());return}if(t.retire!==void 0){await Qo("Retire now? Your career will end and your legacy will be locked in.","Retire")&&Ai("retire");return}});function Jc(){_e("fightScreen").classList.add("hidden")}_e("modal").addEventListener("click",s=>{s.target.id==="modal"&&Zc()});_e("createForm").addEventListener("change",il);_e("createForm").addEventListener("submit",s=>{s.preventDefault(),Ai("new",Object.fromEntries(new FormData(s.target)))});(async()=>{u0(()=>fi("Couldn't save your latest progress. Check your connection.",!0));let s=await c0();or=new Ko(s),"onDowngrade"in s&&(s.onDowngrade=()=>or.saveAll());try{await or.load()}catch(e){console.error(e),fi("Couldn't load your saves. Try reloading the page.",!0)}_e("boot").classList.add("hidden"),Ai("state"),Yv()})();async function Yv(){let s=null;try{s=new URLSearchParams(location.search).get("career")}catch{}if(!s||!/^[a-z0-9-]+$/.test(s))return;try{history.replaceState(null,"",location.pathname)}catch{}let e;try{let i=await fetch("saves/"+s+".json",{cache:"no-store"});if(!i.ok)throw new Error(i.status);e=await i.text()}catch{fi("Couldn't find that career.",!0);return}let t=s.split("-").map(i=>i[0].toUpperCase()+i.slice(1)).join(" ");await Qo(`Load ${t} into a save slot and start playing?`,"Load")&&Kc(e)}
