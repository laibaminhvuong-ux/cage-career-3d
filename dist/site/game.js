var Ml="160";var fd=1,Th=2,Ni=3,an=0,Ot=1,md=2;var Eh=2;var Mn=100;var Sl=204,wl=205;var gd=0,jp=1,Xp=2,sn=0,Yp=1,qp=2,$p=3,Ah=4,Jp=5,Zp=6;var vd=300,ms=301,gs=302,Tl=303,El=304,co=306,lr=1e3,Di=1001,Al=1002,kt=1003,Fc=1004;var Bo=1005;var di=1006,Kp=1007;var Ra=1008;var Tn=1009;var Rh=1012,yd=1013,en=1014,tn=1015,hr=1016,_d=1017,xd=1018,En=1020;var Mi=1023;var An=1026,vs=1027;var bd=1029;var Md=1031,Sd=1033,zo=33776,Ho=33777,Go=33778,Vo=33779,Bc=35840,zc=35841,Hc=35842,Gc=35843,wd=36196,Vc=37492,Wc=37496,jc=37808,Xc=37809,Yc=37810,qc=37811,$c=37812,Jc=37813,Zc=37814,Kc=37815,Qc=37816,eu=37817,tu=37818,iu=37819,nu=37820,su=37821,Wo=36492,ru=36494,au=36495;var ou=36284,lu=36285,hu=36286;var Ca=2300,La=2301,jo=2302,cu=2400,uu=2401,du=2402;var Td=3e3,Rn=3001;var Si="",ut="srgb",Oi="srgb-linear",Ch="display-p3",uo="display-p3-linear",Pa="linear",Ke="srgb",Ia="rec709",ka="p3";var Wn=7680;var Rl=35044;var pu="300 es",Cl=1035,ys=2e3,Na=2001,on=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,ds=Math.PI/180,_s=180/Math.PI;function Ti(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Rt[255&s]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[255&e]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[63&t|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[255&i]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Ll(s,e){return(s%e+e)%e}function ir(s,e,t){return(1-t)*s+t*e}function Pl(s){return(s&s-1)==0&&s!==0}function Ua(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var Ed={DEG2RAD:ds,RAD2DEG:_s,generateUUID:Ti,clamp:yt,euclideanModulo:Ll,mapLinear:function(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:ir,damp:function(s,e,t,i){return ir(s,e,1-Math.exp(-t*i))},pingpong:function(s,e=1){return e-Math.abs(Ll(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(fu=s);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*ds},radToDeg:function(s){return s*_s},isPowerOfTwo:Pl,ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:Ua,setQuaternionFromProperEuler:function(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(n){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*m,l*p,o*h);break;case"YXY":s.set(l*p,o*c,l*m,o*h);break;case"ZYZ":s.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Ye,denormalize:wi},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class s{constructor(e,t,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h)}set(e,t,i,n,r,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],m=i[8],y=n[0],f=n[3],_=n[6],g=n[1],v=n[4],M=n[7],A=n[2],S=n[5],E=n[8];return r[0]=a*y+o*g+l*A,r[3]=a*f+o*v+l*S,r[6]=a*_+o*M+l*E,r[1]=h*y+c*g+u*A,r[4]=h*f+c*v+u*S,r[7]=h*_+c*M+u*E,r[2]=d*y+p*g+m*A,r[5]=d*f+p*v+m*S,r[8]=d*_+p*M+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,p=h*r-a*l,m=t*u+i*d+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(n*h-c*i)*y,e[2]=(o*i-n*a)*y,e[3]=d*y,e[4]=(c*t-n*l)*y,e[5]=(n*r-o*t)*y,e[6]=p*y,e[7]=(i*l-h*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new ke;function Ad(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qp(){let s=Da("canvas");return s.style.display="block",s}var mu={};function nr(s){s in mu||(mu[s]=!0,console.warn(s))}var gu=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vu=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Oi]:{transfer:Pa,primaries:Ia,toReference:s=>s,fromReference:s=>s},[ut]:{transfer:Ke,primaries:Ia,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[uo]:{transfer:Pa,primaries:ka,toReference:s=>s.applyMatrix3(vu),fromReference:s=>s.applyMatrix3(gu)},[Ch]:{transfer:Ke,primaries:ka,toReference:s=>s.convertSRGBToLinear().applyMatrix3(vu),fromReference:s=>s.applyMatrix3(gu).convertLinearToSRGB()}},ef=new Set([Oi,uo]),qe={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ef.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=Yr[e].toReference;return(0,Yr[t].fromReference)(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Yr[s].primaries},getTransfer:function(s){return s===Si?Pa:Yr[s].transfer}};function ps(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Yo(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var jn,Oa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Da("canvas")),jn.width=e.width,jn.height=e.height;let i=jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*ps(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*ps(t[i]/255)):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tf=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(qo(n[a].image)):r.push(qo(n[a]))}else r=qo(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function qo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nf=0,Kt=class s extends on{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,h=s.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ti(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Rn?ut:Si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Rn:Td}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rn?ut:Si}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=vd,Kt.DEFAULT_ANISOTROPY=1;var Je=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],m=l[9],y=l[2],f=l[6],_=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-f)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+f)<.1&&Math.abs(h+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,M=(p+1)/2,A=(_+1)/2,S=(c+d)/4,E=(u+y)/4,N=(m+f)/4;return v>M&&v>A?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=S/i,r=E/i):M>A?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=S/n,r=N/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=E/r,n=N/r),this.set(i,n,r,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-y)/g,this.z=(d-c)/g,this.w=Math.acos((h+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends on{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rn?ut:Si),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Kt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fi=class extends Il{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ba=class extends Kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kl=class extends Kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=kt,this.minFilter=kt,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=y);if(u!==y||l!==d||h!==p||c!==m){let f=1-o,_=l*d+h*p+c*m+u*y,g=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){let A=Math.sqrt(v),S=Math.atan2(A,_*g);f=Math.sin(f*S)/A,o=Math.sin(o*S)/A}let M=o*g;if(l=l*f+d*M,h=h*f+p*M,c=c*f+m*M,u=u*f+y*M,f===1-o){let A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+c*u+l*p-h*d,e[t+1]=l*m+c*d+h*u-o*p,e[t+2]=h*m+c*p+o*d-l*u,e[t+3]=c*m-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),d=l(i/2),p=l(n/2),m=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"YXZ":this._x=d*c*u+h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"ZXY":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u-d*p*m;break;case"ZYX":this._x=d*c*u-h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u+d*p*m;break;case"YZX":this._x=d*c*u+h*p*m,this._y=h*p*u+d*c*m,this._z=h*c*m-d*p*u,this._w=h*c*u-d*p*m;break;case"XZY":this._x=d*c*u-h*p*m,this._y=h*p*u-d*c*m,this._z=h*c*m+d*p*u,this._w=h*c*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+h)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new b,yu=new Qt,mi=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),$r.subVectors(this.max,js),Xn.subVectors(e.a,js),Yn.subVectors(e.b,js),qn.subVectors(e.c,js),$i.subVectors(Yn,Xn),Ji.subVectors(qn,Yn),vn.subVectors(Xn,qn);let t=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-vn.z,vn.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,vn.z,0,-vn.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-vn.y,vn.x,0];return!!Jo(t,Xn,Yn,qn,$r)&&(t=[1,0,0,0,1,0,0,0,1],!!Jo(t,Xn,Yn,qn,$r)&&(Jr.crossVectors($i,Ji),t=[Jr.x,Jr.y,Jr.z],Jo(t,Xn,Yn,qn,$r)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(hi).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ci=[new b,new b,new b,new b,new b,new b,new b,new b],hi=new b,qr=new mi,Xn=new b,Yn=new b,qn=new b,$i=new b,Ji=new b,vn=new b,js=new b,$r=new b,Jr=new b,yn=new b;function Jo(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){yn.fromArray(s,r);let o=n.x*Math.abs(yn.x)+n.y*Math.abs(yn.y)+n.z*Math.abs(yn.z),l=e.dot(yn),h=t.dot(yn),c=i.dot(yn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var sf=new mi,Xs=new b,Zo=new b,gi=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sf.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Xs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Zo)),this.expandByPoint(Xs.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new b,Ko=new b,Zr=new b,Zi=new b,Qo=new b,Kr=new b,el=new b,xs=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ko.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Ko);let r=.5*e.distanceTo(t),a=-this.direction.dot(Zr),o=Zi.dot(this.direction),l=-Zi.dot(Zr),h=Zi.lengthSq(),c=Math.abs(1-a*a),u,d,p,m;if(c>0)if(u=a*l-o,d=a*o-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let y=1/c;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ko).addScaledVector(Zr,d),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),n=Li.dot(Li)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,n,r){Qo.subVectors(t,e),Kr.subVectors(i,e),el.crossVectors(Qo,Kr);let a,o=this.direction.dot(el);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Zi.subVectors(this.origin,e);let l=a*this.direction.dot(Kr.crossVectors(Zi,Kr));if(l<0)return null;let h=a*this.direction.dot(Qo.cross(Zi));if(h<0||l+h>o)return null;let c=-a*Zi.dot(el);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class s{constructor(e,t,i,n,r,a,o,l,h,c,u,d,p,m,y,f){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,y,f)}set(e,t,i,n,r,a,o,l,h,c,u,d,p,m,y,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=h,_[6]=c,_[10]=u,_[14]=d,_[3]=p,_[7]=m,_[11]=y,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*c,p=a*u,m=o*c,y=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+m*h,t[5]=d-y*h,t[9]=-o*l,t[2]=y-d*h,t[6]=m+p*h,t[10]=a*l}else if(e.order==="YXZ"){let d=l*c,p=l*u,m=h*c,y=h*u;t[0]=d+y*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-m,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*c,p=l*u,m=h*c,y=h*u;t[0]=d-y*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*c,t[9]=y-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*c,p=a*u,m=o*c,y=o*u;t[0]=l*c,t[4]=m*h-p,t[8]=d*h+y,t[1]=l*u,t[5]=y*h+d,t[9]=p*h-m,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*h,m=o*l,y=o*h;t[0]=l*c,t[4]=y-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+m,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,p=a*h,m=o*l,y=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+y,t[5]=a*c,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*c,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,af)}lookAt(e,t,i){let n=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ki.crossVectors(i,Wt),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ki.crossVectors(i,Wt)),Ki.normalize(),Qr.crossVectors(Wt,Ki),n[0]=Ki.x,n[4]=Qr.x,n[8]=Wt.x,n[1]=Ki.y,n[5]=Qr.y,n[9]=Wt.y,n[2]=Ki.z,n[6]=Qr.z,n[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],m=i[2],y=i[6],f=i[10],_=i[14],g=i[3],v=i[7],M=i[11],A=i[15],S=n[0],E=n[4],N=n[8],P=n[12],U=n[1],j=n[5],C=n[9],O=n[13],F=n[2],se=n[6],fe=n[10],te=n[14],q=n[3],ie=n[7],z=n[11],Z=n[15];return r[0]=a*S+o*U+l*F+h*q,r[4]=a*E+o*j+l*se+h*ie,r[8]=a*N+o*C+l*fe+h*z,r[12]=a*P+o*O+l*te+h*Z,r[1]=c*S+u*U+d*F+p*q,r[5]=c*E+u*j+d*se+p*ie,r[9]=c*N+u*C+d*fe+p*z,r[13]=c*P+u*O+d*te+p*Z,r[2]=m*S+y*U+f*F+_*q,r[6]=m*E+y*j+f*se+_*ie,r[10]=m*N+y*C+f*fe+_*z,r[14]=m*P+y*O+f*te+_*Z,r[3]=g*S+v*U+M*F+A*q,r[7]=g*E+v*j+M*se+A*ie,r[11]=g*N+v*C+M*fe+A*z,r[15]=g*P+v*O+M*te+A*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-n*h*u-r*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+r*a*d-n*a*p+n*h*c-r*l*c)+e[11]*(+t*h*u-t*o*p-r*a*u+i*a*p+r*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],m=e[12],y=e[13],f=e[14],_=e[15],g=u*f*h-y*d*h+y*l*p-o*f*p-u*l*_+o*d*_,v=m*d*h-c*f*h-m*l*p+a*f*p+c*l*_-a*d*_,M=c*y*h-m*u*h+m*o*p-a*y*p-c*o*_+a*u*_,A=m*u*l-c*y*l-m*o*d+a*y*d+c*o*f-a*u*f,S=t*g+i*v+n*M+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=g*E,e[1]=(y*d*r-u*f*r-y*n*p+i*f*p+u*n*_-i*d*_)*E,e[2]=(o*f*r-y*l*r+y*n*h-i*f*h-o*n*_+i*l*_)*E,e[3]=(u*l*r-o*d*r-u*n*h+i*d*h+o*n*p-i*l*p)*E,e[4]=v*E,e[5]=(c*f*r-m*d*r+m*n*p-t*f*p-c*n*_+t*d*_)*E,e[6]=(m*l*r-a*f*r-m*n*h+t*f*h+a*n*_-t*l*_)*E,e[7]=(a*d*r-c*l*r+c*n*h-t*d*h-a*n*p+t*l*p)*E,e[8]=M*E,e[9]=(m*u*r-c*y*r-m*i*p+t*y*p+c*i*_-t*u*_)*E,e[10]=(a*y*r-m*o*r+m*i*h-t*y*h-a*i*_+t*o*_)*E,e[11]=(c*o*r-a*u*r-c*i*h+t*u*h+a*i*p-t*o*p)*E,e[12]=A*E,e[13]=(c*y*n-m*u*n+m*i*d-t*y*d-c*i*f+t*u*f)*E,e[14]=(m*o*n-a*y*n-m*i*l+t*y*l+a*i*f-t*o*f)*E,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*E,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,p=r*c,m=r*u,y=a*c,f=a*u,_=o*u,g=l*h,v=l*c,M=l*u,A=i.x,S=i.y,E=i.z;return n[0]=(1-(y+_))*A,n[1]=(p+M)*A,n[2]=(m-v)*A,n[3]=0,n[4]=(p-M)*S,n[5]=(1-(d+_))*S,n[6]=(f+g)*S,n[7]=0,n[8]=(m+v)*E,n[9]=(f-g)*E,n[10]=(1-(d+y))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=$n.set(n[0],n[1],n[2]).length(),a=$n.set(n[4],n[5],n[6]).length(),o=$n.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);let l=1/r,h=1/a,c=1/o;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=c,ci.elements[9]*=c,ci.elements[10]*=c,t.setFromRotationMatrix(ci),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,h=2*r/(t-e),c=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n),p,m;if(o===ys)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else{if(o!==Na)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),m=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),u=1/(a-r),d=(t+e)*h,p=(i+n)*c,m,y;if(o===ys)m=(a+r)*u,y=-2*u;else{if(o!==Na)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=r*u,y=-1*u}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$n=new b,ci=new Ce,rf=new b(0,0,0),af=new b(1,1,1),Ki=new b,Qr=new b,Wt=new b,_u=new Ce,xu=new Qt,za=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _u.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_u,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var Ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},of=0,bu=new b,Jn=new Qt,Pi=new Ce,ea=new b,Ys=new b,lf=new b,hf=new Qt,Mu=new b(1,0,0),Su=new b(0,1,0),wu=new b(0,0,1),cf={type:"added"},uf={type:"removed"},Mt=class s extends on{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new b,t=new za,i=new Qt,n=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ke}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ys,ea,this.up):Pi.lookAt(ea,Ys,this.up),this.quaternion.setFromRotationMatrix(Pi),n&&(Pi.extractRotation(n.matrixWorld),Jn.setFromRotationMatrix(Pi),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];r.matrixWorldAutoUpdate!==!0&&e!==!0||r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Mt.DEFAULT_UP=new b(0,1,0),Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=new b,Ii=new b,tl=new b,ki=new b,Zn=new b,Kn=new b,Tu=new b,il=new b,nl=new b,sl=new b,ta=!1,nn=class s{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ui.subVectors(e,t),n.cross(ui);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){ui.subVectors(n,t),Ii.subVectors(i,t),tl.subVectors(e,t);let a=ui.dot(ui),o=ui.dot(Ii),l=ui.dot(tl),h=Ii.dot(Ii),c=Ii.dot(tl),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(h*l-o*c)*d,m=(a*c-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ki)!==null&&ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getUV(e,t,i,n,r,a,o,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,t,i,n,r,a,o,l)}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(e,t,i,n){return ui.subVectors(i,t),Ii.subVectors(e,t),ui.cross(Ii).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),.5*ui.cross(Ii).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;Zn.subVectors(n,i),Kn.subVectors(r,i),il.subVectors(e,i);let l=Zn.dot(il),h=Kn.dot(il);if(l<=0&&h<=0)return t.copy(i);nl.subVectors(e,n);let c=Zn.dot(nl),u=Kn.dot(nl);if(c>=0&&u<=c)return t.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Zn,a);sl.subVectors(e,r);let p=Zn.dot(sl),m=Kn.dot(sl);if(m>=0&&p<=m)return t.copy(r);let y=p*h-l*m;if(y<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(i).addScaledVector(Kn,o);let f=c*m-p*u;if(f<=0&&u-c>=0&&p-m>=0)return Tu.subVectors(r,n),o=(u-c)/(u-c+(p-m)),t.copy(n).addScaledVector(Tu,o);let _=1/(f+y+d);return a=y*_,o=d*_,t.copy(i).addScaledVector(Zn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function rl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=qe.workingColorSpace){if(e=Ll(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=rl(a,r,e+1/3),this.g=rl(a,r,e),this.b=rl(a,r,e-1/3)}return qe.toWorkingColorSpace(this,n),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return qe.fromWorkingColorSpace(Ct.copy(this),e),65536*Math.round(yt(255*Ct.r,0,255))+256*Math.round(yt(255*Ct.g,0,255))+Math.round(yt(255*Ct.b,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Ct.copy(this),t);let i=Ct.r,n=Ct.g,r=Ct.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=ut){qe.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,i=Ct.g,n=Ct.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(ia);let i=ir(Qi.h,ia.h,t),n=ir(Qi.s,ia.s,t),r=ir(Qi.l,ia.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Ae;Ae.NAMES=Rd;var df=0,Bi=class extends on{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=1,this.side=an,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==an&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==wl&&(i.blendDst=this.blendDst),this.blendEquation!==Mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$g=pf();function pf(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[l]=h|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var ct=new b,na=new oe,St=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ye(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}};var Ga=class extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Va=class extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Re=class extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ff=0,Zt=new Ce,al=new Mt,Qn=new b,jt=new mi,qs=new mi,vt=new b,tt=class s extends on{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Va:Ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(jt.min,qs.min),jt.expandByPoint(vt),vt.addVectors(jt.max,qs.max),jt.expandByPoint(vt)):(jt.expandByPoint(qs.min),jt.expandByPoint(qs.max))}jt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)vt.fromBufferAttribute(o,h),l&&(Qn.fromBufferAttribute(e,h),vt.add(Qn)),n=Math.max(n,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let U=0;U<o;U++)h[U]=new b,c[U]=new b;let u=new b,d=new b,p=new b,m=new oe,y=new oe,f=new oe,_=new b,g=new b;function v(U,j,C){u.fromArray(n,3*U),d.fromArray(n,3*j),p.fromArray(n,3*C),m.fromArray(a,2*U),y.fromArray(a,2*j),f.fromArray(a,2*C),d.sub(u),p.sub(u),y.sub(m),f.sub(m);let O=1/(y.x*f.y-f.x*y.y);isFinite(O)&&(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-y.y).multiplyScalar(O),g.copy(p).multiplyScalar(y.x).addScaledVector(d,-f.x).multiplyScalar(O),h[U].add(_),h[j].add(_),h[C].add(_),c[U].add(g),c[j].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let U=0,j=M.length;U<j;++U){let C=M[U],O=C.start;for(let F=O,se=O+C.count;F<se;F+=3)v(i[F+0],i[F+1],i[F+2])}let A=new b,S=new b,E=new b,N=new b;function P(U){E.fromArray(r,3*U),N.copy(E);let j=h[U];A.copy(j),A.sub(E.multiplyScalar(E.dot(j))).normalize(),S.crossVectors(N,j);let C=S.dot(c[U])<0?-1:1;l[4*U]=A.x,l[4*U+1]=A.y,l[4*U+2]=A.z,l[4*U+3]=C}for(let U=0,j=M.length;U<j;++U){let C=M[U],O=C.start;for(let F=O,se=O+C.count;F<se;F+=3)P(i[F+0]),P(i[F+1]),P(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new b,r=new b,a=new b,o=new b,l=new b,h=new b,c=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),y=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,f),o.add(c),l.add(c),h.add(c),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),p=0,m=0;for(let y=0,f=l.length;y<f;y++){p=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*c;for(let _=0;_<c;_++)d[m++]=h[p++]}return new St(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new Ce,_n=new xs,sa=new gi,Au=new b,es=new b,ts=new b,is=new b,ol=new b,ra=new b,aa=new oe,oa=new oe,la=new oe,Ru=new b,Cu=new b,Lu=new b,ha=new b,ca=new b,Ze=class extends Mt{constructor(e=new tt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(ol.fromBufferAttribute(u,e),a?ra.addScaledVector(ol,c):ra.addScaledVector(ol.sub(t),c))}t.add(ra)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),_n.copy(e.ray).recast(e.near),sa.containsPoint(_n.origin)===!1&&(_n.intersectSphere(sa,Au)===null||_n.origin.distanceToSquared(Au)>(e.far-e.near)**2))return;Eu.copy(r).invert(),_n.copy(e.ray).applyMatrix4(Eu),i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,_n)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),v=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<v;g+=3)n=ua(this,_,e,i,h,c,u,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);m<y;m+=3)n=ua(this,a,e,i,h,c,u,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=d.length;m<y;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<v;g+=3)n=ua(this,_,e,i,h,c,u,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=f.materialIndex,t.push(n))}else for(let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);m<y;m+=3)n=ua(this,a,e,i,h,c,u,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}};function ua(s,e,t,i,n,r,a,o,l,h){s.getVertexPosition(o,es),s.getVertexPosition(l,ts),s.getVertexPosition(h,is);let c=function(u,d,p,m,y,f,_,g){let v;if(v=d.side===Ot?m.intersectTriangle(_,f,y,!0,g):m.intersectTriangle(y,f,_,d.side===an,g),v===null)return null;ca.copy(g),ca.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(ca);return M<p.near||M>p.far?null:{distance:M,point:ca.clone(),object:u}}(s,e,t,i,es,ts,is,ha);if(c){n&&(aa.fromBufferAttribute(n,o),oa.fromBufferAttribute(n,l),la.fromBufferAttribute(n,h),c.uv=nn.getInterpolation(ha,es,ts,is,aa,oa,la,new oe)),r&&(aa.fromBufferAttribute(r,o),oa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,h),c.uv1=nn.getInterpolation(ha,es,ts,is,aa,oa,la,new oe),c.uv2=c.uv1),a&&(Ru.fromBufferAttribute(a,o),Cu.fromBufferAttribute(a,l),Lu.fromBufferAttribute(a,h),c.normal=nn.getInterpolation(ha,es,ts,is,Ru,Cu,Lu,new b),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new b,materialIndex:0};nn.getNormal(es,ts,is,u.normal),c.face=u}return c}var Ft=class s extends tt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,p=0;function m(y,f,_,g,v,M,A,S,E,N,P){let U=M/E,j=A/N,C=M/2,O=A/2,F=S/2,se=E+1,fe=N+1,te=0,q=0,ie=new b;for(let z=0;z<fe;z++){let Z=z*j-O;for(let ue=0;ue<se;ue++){let T=ue*U-C;ie[y]=T*g,ie[f]=Z*v,ie[_]=F,h.push(ie.x,ie.y,ie.z),ie[y]=0,ie[f]=0,ie[_]=S>0?1:-1,c.push(ie.x,ie.y,ie.z),u.push(ue/E),u.push(1-z/N),te+=1}}for(let z=0;z<N;z++)for(let Z=0;Z<E;Z++){let ue=d+Z+se*z,T=d+Z+se*(z+1),w=d+(Z+1)+se*(z+1),D=d+(Z+1)+se*z;l.push(ue,T,D),l.push(T,w,D),q+=6}o.addGroup(p,q,P),p+=q,d+=te}m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,n,a,2),m("x","z","y",1,-1,e,i,-t,n,a,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(s){let e={};for(let t=0;t<s.length;t++){let i=bs(s[t]);for(let n in i)e[n]=i[n]}return e}function Cd(s){return s.getRenderTarget()===null?s.outputColorSpace:qe.workingColorSpace}var mf={clone:bs,merge:It},zi=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},cr=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ys}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_t=class extends cr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*_s*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ds*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*_s*Math.atan(Math.tan(.5*ds*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ds*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=-90,Nl=class extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new _t(ns,1,e,t);n.layers=this.layers,this.add(n);let r=new _t(ns,1,e,t);r.layers=this.layers,this.add(r);let a=new _t(ns,1,e,t);a.layers=this.layers,this.add(a);let o=new _t(ns,1,e,t);o.layers=this.layers,this.add(o);let l=new _t(ns,1,e,t);l.layers=this.layers,this.add(l);let h=new _t(ns,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===ys)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Na)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Wa=class extends Kt{constructor(e,t,i,n,r,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:ms,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ul=class extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rn?ut:Si),this.texture=new Wa(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ft(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:0});r.uniforms.tEquirect.value=t;let a=new Ze(n,r),o=t.minFilter;return t.minFilter===Ra&&(t.minFilter=di),new Nl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},ll=new b,gf=new b,vf=new ke,Ui=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=ll.subVectors(i,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ll),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||vf.getNormalMatrix(e),n=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xn=new gi,da=new b,Ms=class{constructor(e=new Ui,t=new Ui,i=new Ui,n=new Ui,r=new Ui,a=new Ui){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],p=n[8],m=n[9],y=n[10],f=n[11],_=n[12],g=n[13],v=n[14],M=n[15];if(i[0].setComponents(l-r,d-h,f-p,M-_).normalize(),i[1].setComponents(l+r,d+h,f+p,M+_).normalize(),i[2].setComponents(l+a,d+c,f+m,M+g).normalize(),i[3].setComponents(l-a,d-c,f-m,M-g).normalize(),i[4].setComponents(l-o,d-u,f-y,M-v).normalize(),t===ys)i[5].setComponents(l+o,d+u,f+y,M+v).normalize();else{if(t!==Na)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(e){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(da.x=n.normal.x>0?e.max.x:e.min.x,da.y=n.normal.y>0?e.max.y:e.min.y,da.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ld(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yf(s,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=i.get(n);r&&(s.deleteBuffer(r.buffer),i.delete(n))},update:function(n,r){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let h=o.array,c=o.usage,u=h.byteLength,d=s.createBuffer(),p;if(s.bindBuffer(l,d),s.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=s.HALF_FLOAT}else p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);p=s.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}(n,r));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,h){let c=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(h,o),u.count===-1&&d.length===0&&s.bufferSubData(h,0,c),d.length!==0){for(let p=0,m=d.length;p<m;p++){let y=d[p];t?s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count):s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c.subarray(y.start,y.start+y.count))}l.clearUpdateRanges()}u.count!==-1&&(t?s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):s.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,n,r),a.version=n.version}}}}var Ss=class s extends tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],m=[],y=[],f=[];for(let _=0;_<c;_++){let g=_*d-a;for(let v=0;v<h;v++){let M=v*u-r;m.push(M,-g,0),y.push(0,0,1),f.push(v/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let g=0;g<o;g++){let v=g+h*_,M=g+h*(_+1),A=g+1+h*(_+1),S=g+1+h*_;p.push(v,M,S),p.push(M,A,S)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},le={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},bi={basic:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:It([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:It([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:It([le.points,le.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:It([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:It([le.common,le.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:It([le.sprite,le.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:It([le.common,le.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:It([le.lights,le.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};bi.physical={uniforms:It([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var pa={r:0,b:0,g:0};function _f(s,e,t,i,n,r,a){let o=new Ae(0),l,h,c=r===!0?0:1,u=null,d=0,p=null;function m(y,f){y.getRGB(pa,Cd(s)),i.buffers.color.setClear(pa.r,pa.g,pa.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(y,f=1){o.set(y),c=f,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:function(y,f){let _=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?m(o,c):g&&g.isColor&&(m(g,1),_=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===co)?(h===void 0&&(h=new Ze(new Ft(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:bs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=qe.getTransfer(g.colorSpace)!==Ke,u===g&&d===g.version&&p===s.toneMapping||(h.material.needsUpdate=!0,u=g,d=g.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ze(new Ss(2,2),new zi({name:"BackgroundMaterial",uniforms:bs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=qe.getTransfer(g.colorSpace)!==Ke,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}}}function xf(s,e,t,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),h=l,c=!1;function u(A){return i.isWebGL2?s.bindVertexArray(A):r.bindVertexArrayOES(A)}function d(A){return i.isWebGL2?s.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function p(A){let S=[],E=[],N=[];for(let P=0;P<n;P++)S[P]=0,E[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:E,attributeDivisors:N,object:A,attributes:{},index:null}}function m(){let A=h.newAttributes;for(let S=0,E=A.length;S<E;S++)A[S]=0}function y(A){f(A,0)}function f(A,S){let E=h.newAttributes,N=h.enabledAttributes,P=h.attributeDivisors;E[A]=1,N[A]===0&&(s.enableVertexAttribArray(A),N[A]=1),P[A]!==S&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,S),P[A]=S)}function _(){let A=h.newAttributes,S=h.enabledAttributes;for(let E=0,N=S.length;E<N;E++)S[E]!==A[E]&&(s.disableVertexAttribArray(E),S[E]=0)}function g(A,S,E,N,P,U,j){j===!0?s.vertexAttribIPointer(A,S,E,P,U):s.vertexAttribPointer(A,S,E,N,P,U)}function v(){M(),c=!0,h!==l&&(h=l,u(h.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(A,S,E,N,P){let U=!1;if(a){let j=function(C,O,F){let se=F.wireframe===!0,fe=o[C.id];fe===void 0&&(fe={},o[C.id]=fe);let te=fe[O.id];te===void 0&&(te={},fe[O.id]=te);let q=te[se];return q===void 0&&(q=p(i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),te[se]=q),q}(N,E,S);h!==j&&(h=j,u(h.object)),U=function(C,O,F,se){let fe=h.attributes,te=O.attributes,q=0,ie=F.getAttributes();for(let z in ie)if(ie[z].location>=0){let Z=fe[z],ue=te[z];if(ue===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),Z===void 0||Z.attribute!==ue||ue&&Z.data!==ue.data)return!0;q++}return h.attributesNum!==q||h.index!==se}(A,N,E,P),U&&function(C,O,F,se){let fe={},te=O.attributes,q=0,ie=F.getAttributes();for(let z in ie)if(ie[z].location>=0){let Z=te[z];Z===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));let ue={};ue.attribute=Z,Z&&Z.data&&(ue.data=Z.data),fe[z]=ue,q++}h.attributes=fe,h.attributesNum=q,h.index=se}(A,N,E,P)}else{let j=S.wireframe===!0;h.geometry===N.id&&h.program===E.id&&h.wireframe===j||(h.geometry=N.id,h.program=E.id,h.wireframe=j,U=!0)}P!==null&&t.update(P,s.ELEMENT_ARRAY_BUFFER),(U||c)&&(c=!1,function(j,C,O,F){if(i.isWebGL2===!1&&(j.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let se=F.attributes,fe=O.getAttributes(),te=C.defaultAttributeValues;for(let q in fe){let ie=fe[q];if(ie.location>=0){let z=se[q];if(z===void 0&&(q==="instanceMatrix"&&j.instanceMatrix&&(z=j.instanceMatrix),q==="instanceColor"&&j.instanceColor&&(z=j.instanceColor)),z!==void 0){let Z=z.normalized,ue=z.itemSize,T=t.get(z);if(T===void 0)continue;let w=T.buffer,D=T.type,$=T.bytesPerElement,L=i.isWebGL2===!0&&(D===s.INT||D===s.UNSIGNED_INT||z.gpuType===yd);if(z.isInterleavedBufferAttribute){let X=z.data,I=X.stride,k=z.offset;if(X.isInstancedInterleavedBuffer){for(let B=0;B<ie.locationSize;B++)f(ie.location+B,X.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let B=0;B<ie.locationSize;B++)y(ie.location+B);s.bindBuffer(s.ARRAY_BUFFER,w);for(let B=0;B<ie.locationSize;B++)g(ie.location+B,ue/ie.locationSize,D,Z,I*$,(k+ue/ie.locationSize*B)*$,L)}else{if(z.isInstancedBufferAttribute){for(let X=0;X<ie.locationSize;X++)f(ie.location+X,z.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let X=0;X<ie.locationSize;X++)y(ie.location+X);s.bindBuffer(s.ARRAY_BUFFER,w);for(let X=0;X<ie.locationSize;X++)g(ie.location+X,ue/ie.locationSize,D,Z,ue*$,ue/ie.locationSize*X*$,L)}}else if(te!==void 0){let Z=te[q];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(ie.location,Z);break;case 3:s.vertexAttrib3fv(ie.location,Z);break;case 4:s.vertexAttrib4fv(ie.location,Z);break;default:s.vertexAttrib1fv(ie.location,Z)}}}}_()}(A,S,E,N),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let A in o){let S=o[A];for(let E in S){let N=S[E];for(let P in N)d(N[P].object),delete N[P];delete S[E]}delete o[A]}},releaseStatesOfGeometry:function(A){if(o[A.id]===void 0)return;let S=o[A.id];for(let E in S){let N=S[E];for(let P in N)d(N[P].object),delete N[P];delete S[E]}delete o[A.id]},releaseStatesOfProgram:function(A){for(let S in o){let E=o[S];if(E[A.id]===void 0)continue;let N=E[A.id];for(let P in N)d(N[P].object),delete N[P];delete E[A.id]}},initAttributes:m,enableAttribute:y,disableUnusedAttributes:_}}function bf(s,e,t,i){let n=i.isWebGL2,r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=s,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,a,o,l),t.update(o,r,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{h.multiDrawArraysWEBGL(r,a,0,o,0,l);let c=0;for(let u=0;u<l;u++)c+=o[u];t.update(c,r,1)}}}function Mf(s,e,t){let i;function n(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,v=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:g&&v,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}function Sf(s){let e=this,t=null,i=0,n=!1,r=!1,a=new Ui,o=new ke,l={value:null,needsUpdate:!1};function h(c,u,d,p){let m=c!==null?c.length:0,y=null;if(m!==0){if(y=l.value,p!==!0||y===null){let f=d+4*m,_=u.matrixWorldInverse;o.getNormalMatrix(_),(y===null||y.length<f)&&(y=new Float32Array(f));for(let g=0,v=d;g!==m;++g,v+=4)a.copy(c[g]).applyMatrix4(_,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){let d=c.length!==0||u||i!==0||n;return n=u,i=c.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){t=h(c,u,0)},this.setState=function(c,u,d){let p=c.clippingPlanes,m=c.clipIntersection,y=c.clipShadows,f=s.get(c);if(!n||p===null||p.length===0||r&&!y)r?h(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let _=r?0:i,g=4*_,v=f.clippingState||null;l.value=v,v=h(p,u,g,d);for(let M=0;M!==g;++M)v[M]=t[M];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}}}function wf(s){let e=new WeakMap;function t(n,r){return r===Tl?n.mapping=ms:r===El&&(n.mapping=gs),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===Tl||r===El){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ul(a.height/2);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Dl=class extends cr{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pu=[.125,.215,.35,.446,.526,.582],$s=20,hl=new Dl,Iu=new Ae,cl=null,ul=0,dl=0,bn=(1+Math.sqrt(5))/2,ss=1/bn,ku=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,bn,ss),new b(0,bn,-ss),new b(ss,0,bn),new b(-ss,0,bn),new b(bn,ss,0),new b(-bn,ss,0)],ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,ul,dl),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:hr,format:Mi,colorSpace:Oi,depthBuffer:!1},n=Nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],h=[],c=a,u=a-4+1+Pu.length;for(let d=0;d<u;d++){let p=Math.pow(2,c);l.push(p);let m=1/p;d>a-4?m=Pu[d-a+4-1]:d===0&&(m=0),h.push(m);let y=1/(p-2),f=-y,_=1+y,g=[f,f,_,f,_,_,f,f,_,_,f,_],v=6,M=6,A=3,S=2,E=1,N=new Float32Array(A*M*v),P=new Float32Array(S*M*v),U=new Float32Array(E*M*v);for(let C=0;C<v;C++){let O=C%3*2/3-1,F=C>2?0:-1,se=[O,F,0,O+2/3,F,0,O+2/3,F+1,0,O,F,0,O+2/3,F+1,0,O,F+1,0];N.set(se,A*M*C),P.set(g,S*M*C);let fe=[C,C,C,C,C,C];U.set(fe,E*M*C)}let j=new tt;j.setAttribute("position",new St(N,A)),j.setAttribute("uv",new St(P,S)),j.setAttribute("faceIndex",new St(U,E)),o.push(j),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(r)),this._blurMaterial=function(a,o,l){let h=new Float32Array($s),c=new b(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return n}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,n){let r=new _t(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Iu),l.toneMapping=sn,l.autoClear=!1;let u=new Cn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),d=new Ze(new Ft,u),p=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(Iu),p=!0);for(let y=0;y<6;y++){let f=y%3;f===0?(r.up.set(0,a[y],0),r.lookAt(o[y],0,0)):f===1?(r.up.set(0,0,a[y]),r.lookAt(0,o[y],0)):(r.up.set(0,a[y],0),r.lookAt(0,0,o[y]));let _=this._cubeSize;fa(n,f*_,y>2?_:0,_,_),l.setRenderTarget(n),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ms||e.mapping===gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;fa(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,hl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=ku[(n-1)%ku.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new Ze(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,y=isFinite(r)?1+Math.floor(3*m):$s;y>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let f=[],_=0;for(let M=0;M<$s;++M){let A=M/m,S=Math.exp(-A*A/2);f.push(S),M===0?_+=S:M<y&&(_+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/_;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-i;let v=this._sizeLods[n];fa(t,3*v*(n>g-4?n-g+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(c,hl)}};function Nu(s,e,t){let i=new Fi(s,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Uu(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Du(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function Tf(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===Tl||r===El,o=r===ms||r===gs;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new ja(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0,u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(l)){t===null&&(t=new ja(s));let h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Ef(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Af(s,e,t,i){let n={},r=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let u in h.attributes)e.remove(h.attributes[u]);for(let u in h.morphAttributes){let d=h.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}h.removeEventListener("dispose",a),delete n[h.id];let c=r.get(h);c&&(e.remove(c),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,u=l.attributes.position,d=0;if(c!==null){let y=c.array;d=c.version;for(let f=0,_=y.length;f<_;f+=3){let g=y[f+0],v=y[f+1],M=y[f+2];h.push(g,v,v,M,M,g)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let f=0,_=y.length/3-1;f<_;f+=3){let g=f+0,v=f+1,M=f+2;h.push(g,v,v,M,M,g)}}}let p=new(Ad(h)?Va:Ga)(h,1);p.version=d;let m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let u in h)e.update(h[u],s.ARRAY_BUFFER);let c=l.morphAttributes;for(let u in c){let d=c[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=r.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return r.get(l)}}}function Rf(s,e,t,i){let n=i.isWebGL2,r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){s.drawElements(r,h,a,l*o),t.update(h,r,1)},this.renderInstances=function(l,h,c){if(c===0)return;let u,d;if(n)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,h,a,l*o,c),t.update(h,r,c)},this.renderMultiDraw=function(l,h,c){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<c;d++)this.render(l[d]/o,h[d]);else{u.multiDrawElementsWEBGL(r,h,0,a,l,0,c);let d=0;for(let p=0;p<c;p++)d+=h[p];t.update(d,r,1)}}}function Cf(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Lf(s,e){return s[0]-e[0]}function Pf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function If(s,e,t){let i={},n=new Float32Array(8),r=new WeakMap,a=new Je,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=d!==void 0?d.length:0,m=r.get(h);if(m===void 0||m.count!==p){let O=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",O)};m!==void 0&&m.texture.dispose();let _=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],E=0;_===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let N=h.attributes.position.count*E,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let U=new Float32Array(N*P*4*p),j=new Ba(U,N,P,p);j.type=tn,j.needsUpdate=!0;let C=4*E;for(let F=0;F<p;F++){let se=M[F],fe=A[F],te=S[F],q=N*P*4*F;for(let ie=0;ie<se.count;ie++){let z=ie*C;_===!0&&(a.fromBufferAttribute(se,ie),U[q+z+0]=a.x,U[q+z+1]=a.y,U[q+z+2]=a.z,U[q+z+3]=0),g===!0&&(a.fromBufferAttribute(fe,ie),U[q+z+4]=a.x,U[q+z+5]=a.y,U[q+z+6]=a.z,U[q+z+7]=0),v===!0&&(a.fromBufferAttribute(te,ie),U[q+z+8]=a.x,U[q+z+9]=a.y,U[q+z+10]=a.z,U[q+z+11]=te.itemSize===4?a.w:1)}}m={count:p,texture:j,size:new oe(N,P)},r.set(h,m),h.addEventListener("dispose",O)}let y=0;for(let _=0;_<u.length;_++)y+=u[_];let f=h.morphTargetsRelative?1:1-y;c.getUniforms().setValue(s,"morphTargetBaseInfluence",f),c.getUniforms().setValue(s,"morphTargetInfluences",u),c.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,p=i[h.id];if(p===void 0||p.length!==d){p=[];for(let g=0;g<d;g++)p[g]=[g,0];i[h.id]=p}for(let g=0;g<d;g++){let v=p[g];v[0]=g,v[1]=u[g]}p.sort(Pf);for(let g=0;g<8;g++)g<d&&p[g][1]?(o[g][0]=p[g][0],o[g][1]=p[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Lf);let m=h.morphAttributes.position,y=h.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let v=o[g],M=v[0],A=v[1];M!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+g)!==m[M]&&h.setAttribute("morphTarget"+g,m[M]),y&&h.getAttribute("morphNormal"+g)!==y[M]&&h.setAttribute("morphNormal"+g,y[M]),n[g]=A,f+=A):(m&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),y&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),n[g]=0)}let _=h.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",n)}}}}function kf(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var Xa=class extends Kt{constructor(e,t,i,n,r,a,o,l,h,c){if((c=c!==void 0?c:An)!==An&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===An&&(i=en),i===void 0&&c===vs&&(i=En),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pd=new Kt,Id=new Xa(1,1);Id.compareFunction=515;var kd=new Ba,Nd=new kl,Ud=new Wa,Ou=[],Fu=[],Bu=new Float32Array(16),zu=new Float32Array(9),Hu=new Float32Array(4);function As(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Ou[n];if(r===void 0&&(r=new Float32Array(n),Ou[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function po(s,e){let t=Fu[e];t===void 0&&(t=new Int32Array(e),Fu[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Nf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Uf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function Df(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function Of(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function Ff(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;Hu.set(i),s.uniformMatrix2fv(this.addr,!1,Hu),ft(t,i)}}function Bf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;zu.set(i),s.uniformMatrix3fv(this.addr,!1,zu),ft(t,i)}}function zf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(pt(t,i))return;Bu.set(i),s.uniformMatrix4fv(this.addr,!1,Bu),ft(t,i)}}function Hf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function Vf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function Wf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function jf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function Yf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function qf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function $f(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?Id:Pd;t.setTexture2D(e||r,n)}function Jf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Nd,n)}function Zf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ud,n)}function Kf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||kd,n)}function Qf(s,e){s.uniform1fv(this.addr,e)}function e0(s,e){let t=As(e,this.size,2);s.uniform2fv(this.addr,t)}function t0(s,e){let t=As(e,this.size,3);s.uniform3fv(this.addr,t)}function i0(s,e){let t=As(e,this.size,4);s.uniform4fv(this.addr,t)}function n0(s,e){let t=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function s0(s,e){let t=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function r0(s,e){let t=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a0(s,e){s.uniform1iv(this.addr,e)}function o0(s,e){s.uniform2iv(this.addr,e)}function l0(s,e){s.uniform3iv(this.addr,e)}function h0(s,e){s.uniform4iv(this.addr,e)}function c0(s,e){s.uniform1uiv(this.addr,e)}function u0(s,e){s.uniform2uiv(this.addr,e)}function d0(s,e){s.uniform3uiv(this.addr,e)}function p0(s,e){s.uniform4uiv(this.addr,e)}function f0(s,e,t){let i=this.cache,n=e.length,r=po(t,n);pt(i,r)||(s.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Pd,r[a])}function m0(s,e,t){let i=this.cache,n=e.length,r=po(t,n);pt(i,r)||(s.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Nd,r[a])}function g0(s,e,t){let i=this.cache,n=e.length,r=po(t,n);pt(i,r)||(s.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ud,r[a])}function v0(s,e,t){let i=this.cache,n=e.length,r=po(t,n);pt(i,r)||(s.uniform1iv(this.addr,r),ft(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||kd,r[a])}var Ol=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Nf;case 35664:return Uf;case 35665:return Df;case 35666:return Of;case 35674:return Ff;case 35675:return Bf;case 35676:return zf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return jf;case 36294:return Xf;case 36295:return Yf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Kf}}(t.type)}},Fl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Qf;case 35664:return e0;case 35665:return t0;case 35666:return i0;case 35674:return n0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return h0;case 5125:return c0;case 36294:return u0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},pl=/(\w+)(\])?(\[|\.)?/g;function Gu(s,e){s.seq.push(e),s.map[e.id]=e}function y0(s,e,t){let i=s.name,n=i.length;for(pl.lastIndex=0;;){let r=pl.exec(i),a=pl.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Gu(t,h===void 0?new Ol(o,s,e):new Fl(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new Bl(o),Gu(t,c)),t=c}}}var fs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);y0(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Vu(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var _0=37297,x0=0;function Wu(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){let m=p+1;c.push(`${m===l?">":" "} ${m}: ${h[p]}`)}return c.join(`
`)}(s.getShaderSource(e),a)}return n}function b0(s,e){let t=function(i){let n=qe.getPrimaries(qe.workingColorSpace),r=qe.getPrimaries(i),a;switch(n===r?a="":n===ka&&r===Ia?a="LinearDisplayP3ToLinearSRGB":n===Ia&&r===ka&&(a="LinearSRGBToLinearDisplayP3"),i){case Oi:case uo:return[a,"LinearTransferOETF"];case ut:case Ch:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function M0(s,e){let t;switch(e){case Yp:t="Linear";break;case qp:t="Reinhard";break;case $p:t="OptimizedCineon";break;case Ah:t="ACESFilmic";break;case Zp:t="AgX";break;case Jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rs(s){return s!==""}function ju(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(s){return s.replace(S0,T0)}var w0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T0(s,e){let t=Le[e];if(t===void 0){let i=w0.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return zl(t)}var E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(s){return s.replace(E0,A0)}function A0(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function qu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R0(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(C){let O="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===fd?O="SHADOWMAP_TYPE_PCF":C.shadowMapType===Th?O="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===Ni&&(O="SHADOWMAP_TYPE_VSM"),O}(t),h=function(C){let O="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case ms:case gs:O="ENVMAP_TYPE_CUBE";break;case co:O="ENVMAP_TYPE_CUBE_UV"}return O}(t),c=function(C){let O="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===gs&&(O="ENVMAP_MODE_REFRACTION"),O}(t),u=function(C){let O="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case gd:O="ENVMAP_BLENDING_MULTIPLY";break;case jp:O="ENVMAP_BLENDING_MIX";break;case Xp:O="ENVMAP_BLENDING_ADD"}return O}(t),d=function(C){let O=C.envMapCubeUVHeight;if(O===null)return null;let F=Math.log2(O)-2,se=1/O;return{texelWidth:1/(3*Math.max(Math.pow(2,F),112)),texelHeight:se,maxMip:F}}(t),p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}(t),m=function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}(t),y=function(C){let O=[];for(let F in C){let se=C[F];se!==!1&&O.push("#define "+F+" "+se)}return O.join(`
`)}(r),f=n.createProgram(),_,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(rs).join(`
`),_.length>0&&(_+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(rs).join(`
`),g.length>0&&(g+=`
`)):(_=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),g=[p,qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Le.tonemapping_pars_fragment:"",t.toneMapping!==sn?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=zl(a),a=ju(a,t),a=Xu(a,t),o=zl(o),o=ju(o,t),o=Xu(o,t),a=Yu(a),o=Yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=v+_+a,A=v+g+o,S=Vu(n,n.VERTEX_SHADER,M),E=Vu(n,n.FRAGMENT_SHADER,A);function N(C){if(s.debug.checkShaderErrors){let O=n.getProgramInfoLog(f).trim(),F=n.getShaderInfoLog(S).trim(),se=n.getShaderInfoLog(E).trim(),fe=!0,te=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,f,S,E);else{let q=Wu(n,S,"vertex"),ie=Wu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+q+`
`+ie)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):F!==""&&se!==""||(te=!1);te&&(C.diagnostics={runnable:fe,programLog:O,vertexShader:{log:F,prefix:_},fragmentShader:{log:se,prefix:g}})}n.deleteShader(S),n.deleteShader(E),P=new fs(n,f),U=function(O,F){let se={},fe=O.getProgramParameter(F,O.ACTIVE_ATTRIBUTES);for(let te=0;te<fe;te++){let q=O.getActiveAttrib(F,te),ie=q.name,z=1;q.type===O.FLOAT_MAT2&&(z=2),q.type===O.FLOAT_MAT3&&(z=3),q.type===O.FLOAT_MAT4&&(z=4),se[ie]={type:q.type,location:O.getAttribLocation(F,ie),locationSize:z}}return se}(n,f)}let P,U;n.attachShader(f,S),n.attachShader(f,E),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f),this.getUniforms=function(){return P===void 0&&N(this),P},this.getAttributes=function(){return U===void 0&&N(this),U};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=n.getProgramParameter(f,_0)),j},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=E,this}var C0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gl(e),t.set(e,i)),i}},Gl=class{constructor(e){this.id=C0++,this.code=e,this.usedTimes=0}};function L0(s,e,t,i,n,r,a){let o=new Ha,l=new Hl,h=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(f){return f===0?"uv":`uv${f}`}return{getParameters:function(f,_,g,v,M){let A=v.fog,S=M.geometry,E=f.isMeshStandardMaterial?v.environment:null,N=(f.isMeshStandardMaterial?t:e).get(f.envMap||E),P=N&&N.mapping===co?N.image.height:null,U=m[f.type];f.precision!==null&&(p=n.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let j=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,C=j!==void 0?j.length:0,O,F,se,fe,te=0;if(S.morphAttributes.position!==void 0&&(te=1),S.morphAttributes.normal!==void 0&&(te=2),S.morphAttributes.color!==void 0&&(te=3),U){let Et=bi[U];O=Et.vertexShader,F=Et.fragmentShader}else O=f.vertexShader,F=f.fragmentShader,l.update(f),se=l.getVertexShaderID(f),fe=l.getFragmentShaderID(f);let q=s.getRenderTarget(),ie=M.isInstancedMesh===!0,z=M.isBatchedMesh===!0,Z=!!f.map,ue=!!f.matcap,T=!!N,w=!!f.aoMap,D=!!f.lightMap,$=!!f.bumpMap,L=!!f.normalMap,X=!!f.displacementMap,I=!!f.emissiveMap,k=!!f.metalnessMap,B=!!f.roughnessMap,ee=f.anisotropy>0,K=f.clearcoat>0,x=f.iridescence>0,ne=f.sheen>0,H=f.transmission>0,G=ee&&!!f.anisotropyMap,re=K&&!!f.clearcoatMap,de=K&&!!f.clearcoatNormalMap,me=K&&!!f.clearcoatRoughnessMap,ve=x&&!!f.iridescenceMap,Ee=x&&!!f.iridescenceThicknessMap,ye=ne&&!!f.sheenColorMap,be=ne&&!!f.sheenRoughnessMap,Pe=!!f.specularMap,gt=!!f.specularColorMap,Se=!!f.specularIntensityMap,He=H&&!!f.transmissionMap,De=H&&!!f.thicknessMap,Hr=!!f.gradientMap,Gn=!!f.alphaMap,Gr=f.alphaTest>0,qt=!!f.alphaHash,Vt=!!f.extensions,Vn=!!S.attributes.uv1,W=!!S.attributes.uv2,Vr=!!S.attributes.uv3,Gs=sn;return f.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(Gs=s.toneMapping)),{isWebGL2:c,shaderID:U,shaderType:f.type,shaderName:f.name,vertexShader:O,fragmentShader:F,defines:f.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:z,instancing:ie,instancingColor:ie&&M.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Oi,map:Z,matcap:ue,envMap:T,envMapMode:T&&N.mapping,envMapCubeUVHeight:P,aoMap:w,lightMap:D,bumpMap:$,normalMap:L,displacementMap:d&&X,emissiveMap:I,normalMapObjectSpace:L&&f.normalMapType===1,normalMapTangentSpace:L&&f.normalMapType===0,metalnessMap:k,roughnessMap:B,anisotropy:ee,anisotropyMap:G,clearcoat:K,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:me,iridescence:x,iridescenceMap:ve,iridescenceThicknessMap:Ee,sheen:ne,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:Pe,specularColorMap:gt,specularIntensityMap:Se,transmission:H,transmissionMap:He,thicknessMap:De,gradientMap:Hr,opaque:f.transparent===!1&&f.blending===1,alphaMap:Gn,alphaTest:Gr,alphaHash:qt,combine:f.combine,mapUv:Z&&y(f.map.channel),aoMapUv:w&&y(f.aoMap.channel),lightMapUv:D&&y(f.lightMap.channel),bumpMapUv:$&&y(f.bumpMap.channel),normalMapUv:L&&y(f.normalMap.channel),displacementMapUv:X&&y(f.displacementMap.channel),emissiveMapUv:I&&y(f.emissiveMap.channel),metalnessMapUv:k&&y(f.metalnessMap.channel),roughnessMapUv:B&&y(f.roughnessMap.channel),anisotropyMapUv:G&&y(f.anisotropyMap.channel),clearcoatMapUv:re&&y(f.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&y(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(f.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(f.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(f.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(f.sheenRoughnessMap.channel),specularMapUv:Pe&&y(f.specularMap.channel),specularColorMapUv:gt&&y(f.specularColorMap.channel),specularIntensityMapUv:Se&&y(f.specularIntensityMap.channel),transmissionMapUv:He&&y(f.transmissionMap.channel),thicknessMapUv:De&&y(f.thicknessMap.channel),alphaMapUv:Gn&&y(f.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(L||ee),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:Vn,vertexUv2s:W,vertexUv3s:Vr,pointsUvs:M.isPoints===!0&&!!S.attributes.uv&&(Z||Gn),fog:!!A,useFog:f.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:te,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:s.shadowMap.enabled&&g.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gs,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Z&&f.map.isVideoTexture===!0&&qe.getTransfer(f.map.colorSpace)===Ke,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===Ot,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Vt&&f.extensions.derivatives===!0,extensionFragDepth:Vt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Vt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Vt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Vt&&f.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()}},getProgramCacheKey:function(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)_.push(g),_.push(f.defines[g]);return f.isRawShaderMaterial===!1&&(function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}(_,f),function(g,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(_,f),_.push(s.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){let _=m[f.type],g;if(_){let v=bi[_];g=mf.clone(v.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,_){let g;for(let v=0,M=h.length;v<M;v++){let A=h[v];if(A.cacheKey===_){g=A,++g.usedTimes;break}}return g===void 0&&(g=new R0(s,_,f,r),h.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){let _=h.indexOf(f);h[_]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function P0(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function I0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $u(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ju(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,h,c,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){let d=r(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||I0),i.length>1&&i.sort(o||$u),n.length>1&&n.sort(o||$u)}}}function k0(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new Ju,s.set(e,[n])):t>=i.length?(n=new Ju,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function N0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ae};break;case"SpotLight":t={position:new b,direction:new b,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new b,halfWidth:new b,halfHeight:new b}}return s[e.id]=t,t}}}var U0=0;function D0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function O0(s,e){let t=new N0,i=function(){let l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);let r=new b,a=new Ce,o=new Ce;return{setup:function(l,h){let c=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,m=0,y=0,f=0,_=0,g=0,v=0,M=0,A=0,S=0,E=0;l.sort(D0);let N=h===!0?Math.PI:1;for(let U=0,j=l.length;U<j;U++){let C=l[U],O=C.color,F=C.intensity,se=C.distance,fe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=O.r*F*N,u+=O.g*F*N,d+=O.b*F*N;else if(C.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(C.sh.coefficients[te],F);E++}else if(C.isDirectionalLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*N),C.castShadow){let q=C.shadow,ie=i.get(C);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=fe,n.directionalShadowMatrix[p]=C.shadow.matrix,g++}n.directional[p]=te,p++}else if(C.isSpotLight){let te=t.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(O).multiplyScalar(F*N),te.distance=se,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,n.spot[y]=te;let q=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,q.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[y]=q.matrix,C.castShadow){let ie=i.get(C);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.spotShadow[y]=ie,n.spotShadowMap[y]=fe,M++}y++}else if(C.isRectAreaLight){let te=t.get(C);te.color.copy(O).multiplyScalar(F),te.halfWidth.set(.5*C.width,0,0),te.halfHeight.set(0,.5*C.height,0),n.rectArea[f]=te,f++}else if(C.isPointLight){let te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*N),te.distance=C.distance,te.decay=C.decay,C.castShadow){let q=C.shadow,ie=i.get(C);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=fe,n.pointShadowMatrix[m]=C.shadow.matrix,v++}n.point[m]=te,m++}else if(C.isHemisphereLight){let te=t.get(C);te.skyColor.copy(C.color).multiplyScalar(F*N),te.groundColor.copy(C.groundColor).multiplyScalar(F*N),n.hemi[_]=te,_++}}f>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;P.directionalLength===p&&P.pointLength===m&&P.spotLength===y&&P.rectAreaLength===f&&P.hemiLength===_&&P.numDirectionalShadows===g&&P.numPointShadows===v&&P.numSpotShadows===M&&P.numSpotMaps===A&&P.numLightProbes===E||(n.directional.length=p,n.spot.length=y,n.rectArea.length=f,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,P.directionalLength=p,P.pointLength=m,P.spotLength=y,P.rectAreaLength=f,P.hemiLength=_,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=A,P.numLightProbes=E,n.version=U0++)},setupView:function(l,h){let c=0,u=0,d=0,p=0,m=0,y=h.matrixWorldInverse;for(let f=0,_=l.length;f<_;f++){let g=l[f];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),c++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),d++}else if(g.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),o.identity(),a.copy(g.matrixWorld),a.premultiply(y),o.extractRotation(a),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(g.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),u++}else if(g.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(y),m++}}},state:n}}function Zu(s,e){let t=new O0(s,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(r){t.setup(i,r)},setupLightsView:function(r){t.setupView(i,r)},pushLight:function(r){i.push(r)},pushShadow:function(r){n.push(r)}}}function F0(s,e){let t=new WeakMap;return{get:function(i,n=0){let r=t.get(i),a;return r===void 0?(a=new Zu(s,e),t.set(i,[a])):n>=r.length?(a=new Zu(s,e),r.push(a)):a=r[n],a},dispose:function(){t=new WeakMap}}}var Vl=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function B0(s,e,t){let i=new Ms,n=new oe,r=new oe,a=new Je,o=new Vl({depthPacking:3201}),l=new Wl,h={},c=t.maxTextureSize,u={[an]:Ot,[Ot]:an,2:2},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new tt;m.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ze(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let _=this.type;function g(S,E){let N=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Fi(n.x,n.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,N,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,N,p,y,null)}function v(S,E,N,P){let U=null,j=N.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(j!==void 0)U=j;else if(U=N.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let C=U.uuid,O=E.uuid,F=h[C];F===void 0&&(F={},h[C]=F);let se=F[O];se===void 0&&(se=U.clone(),F[O]=se,E.addEventListener("dispose",A)),U=se}return U.visible=E.visible,U.wireframe=E.wireframe,U.side=P===Ni?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:u[E.side],U.alphaMap=E.alphaMap,U.alphaTest=E.alphaTest,U.map=E.map,U.clipShadows=E.clipShadows,U.clippingPlanes=E.clippingPlanes,U.clipIntersection=E.clipIntersection,U.displacementMap=E.displacementMap,U.displacementScale=E.displacementScale,U.displacementBias=E.displacementBias,U.wireframeLinewidth=E.wireframeLinewidth,U.linewidth=E.linewidth,N.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(s.properties.get(U).light=N),U}function M(S,E,N,P,U){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&U===Ni)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld);let C=e.update(S),O=S.material;if(Array.isArray(O)){let F=C.groups;for(let se=0,fe=F.length;se<fe;se++){let te=F[se],q=O[te.materialIndex];if(q&&q.visible){let ie=v(S,q,P,U);S.onBeforeShadow(s,S,E,N,C,ie,te),s.renderBufferDirect(N,null,C,ie,S,te),S.onAfterShadow(s,S,E,N,C,ie,te)}}}else if(O.visible){let F=v(S,O,P,U);S.onBeforeShadow(s,S,E,N,C,F,null),s.renderBufferDirect(N,null,C,F,S,null),S.onAfterShadow(s,S,E,N,C,F,null)}}let j=S.children;for(let C=0,O=j.length;C<O;C++)M(j[C],E,N,P,U)}function A(S){S.target.removeEventListener("dispose",A);for(let E in h){let N=h[E],P=S.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}this.render=function(S,E,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;let P=s.getRenderTarget(),U=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),C=s.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let O=_!==Ni&&this.type===Ni,F=_===Ni&&this.type!==Ni;for(let se=0,fe=S.length;se<fe;se++){let te=S[se],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let ie=q.getFrameExtents();if(n.multiply(ie),r.copy(q.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/ie.x),n.x=r.x*ie.x,q.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/ie.y),n.y=r.y*ie.y,q.mapSize.y=r.y)),q.map===null||O===!0||F===!0){let Z=this.type!==Ni?{minFilter:kt,magFilter:kt}:{};q.map!==null&&q.map.dispose(),q.map=new Fi(n.x,n.y,Z),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let z=q.getViewportCount();for(let Z=0;Z<z;Z++){let ue=q.getViewport(Z);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),C.viewport(a),q.updateMatrices(te,Z),i=q.getFrustum(),M(E,N,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Ni&&g(q,N),q.needsUpdate=!1}_=this.type,f.needsUpdate=!1,s.setRenderTarget(P,U,j)}}function z0(s,e,t){let i=t.isWebGL2,n=new function(){let x=!1,ne=new Je,H=null,G=new Je(0,0,0,0);return{setMask:function(re){H===re||x||(s.colorMask(re,re,re,re),H=re)},setLocked:function(re){x=re},setClear:function(re,de,me,ve,Ee){Ee===!0&&(re*=ve,de*=ve,me*=ve),ne.set(re,de,me,ve),G.equals(ne)===!1&&(s.clearColor(re,de,me,ve),G.copy(ne))},reset:function(){x=!1,H=null,G.set(-1,0,0,0)}}},r=new function(){let x=!1,ne=null,H=null,G=null;return{setTest:function(re){re?$(s.DEPTH_TEST):L(s.DEPTH_TEST)},setMask:function(re){ne===re||x||(s.depthMask(re),ne=re)},setFunc:function(re){if(H!==re){switch(re){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}H=re}},setLocked:function(re){x=re},setClear:function(re){G!==re&&(s.clearDepth(re),G=re)},reset:function(){x=!1,ne=null,H=null,G=null}}},a=new function(){let x=!1,ne=null,H=null,G=null,re=null,de=null,me=null,ve=null,Ee=null;return{setTest:function(ye){x||(ye?$(s.STENCIL_TEST):L(s.STENCIL_TEST))},setMask:function(ye){ne===ye||x||(s.stencilMask(ye),ne=ye)},setFunc:function(ye,be,Pe){H===ye&&G===be&&re===Pe||(s.stencilFunc(ye,be,Pe),H=ye,G=be,re=Pe)},setOp:function(ye,be,Pe){de===ye&&me===be&&ve===Pe||(s.stencilOp(ye,be,Pe),de=ye,me=be,ve=Pe)},setLocked:function(ye){x=ye},setClear:function(ye){Ee!==ye&&(s.clearStencil(ye),Ee=ye)},reset:function(){x=!1,ne=null,H=null,G=null,re=null,de=null,me=null,ve=null,Ee=null}}},o=new WeakMap,l=new WeakMap,h={},c={},u=new WeakMap,d=[],p=null,m=!1,y=null,f=null,_=null,g=null,v=null,M=null,A=null,S=new Ae(0,0,0),E=0,N=!1,P=null,U=null,j=null,C=null,O=null,F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,fe=0,te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(te)[1]),se=fe>=1):te.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),se=fe>=2);let q=null,ie={},z=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),ue=new Je().fromArray(z),T=new Je().fromArray(Z);function w(x,ne,H,G){let re=new Uint8Array(4),de=s.createTexture();s.bindTexture(x,de),s.texParameteri(x,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(x,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<H;me++)!i||x!==s.TEXTURE_3D&&x!==s.TEXTURE_2D_ARRAY?s.texImage2D(ne+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,re):s.texImage3D(ne,0,s.RGBA,1,1,G,0,s.RGBA,s.UNSIGNED_BYTE,re);return de}let D={};function $(x){h[x]!==!0&&(s.enable(x),h[x]=!0)}function L(x){h[x]!==!1&&(s.disable(x),h[x]=!1)}D[s.TEXTURE_2D]=w(s.TEXTURE_2D,s.TEXTURE_2D,1),D[s.TEXTURE_CUBE_MAP]=w(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(D[s.TEXTURE_2D_ARRAY]=w(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),D[s.TEXTURE_3D]=w(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),$(s.DEPTH_TEST),r.setFunc(3),B(!1),ee(1),$(s.CULL_FACE),k(0);let X={[Mn]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)X[103]=s.MIN,X[104]=s.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(X[103]=x.MIN_EXT,X[104]=x.MAX_EXT)}let I={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[wl]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function k(x,ne,H,G,re,de,me,ve,Ee,ye){if(x!==0){if(m===!1&&($(s.BLEND),m=!0),x===5)re=re||ne,de=de||H,me=me||G,ne===f&&re===v||(s.blendEquationSeparate(X[ne],X[re]),f=ne,v=re),H===_&&G===g&&de===M&&me===A||(s.blendFuncSeparate(I[H],I[G],I[de],I[me]),_=H,g=G,M=de,A=me),ve.equals(S)!==!1&&Ee===E||(s.blendColor(ve.r,ve.g,ve.b,Ee),S.copy(ve),E=Ee),y=x,N=!1;else if(x!==y||ye!==N){if(f===Mn&&v===Mn||(s.blendEquation(s.FUNC_ADD),f=Mn,v=Mn),ye)switch(x){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}_=null,g=null,M=null,A=null,S.set(0,0,0),E=0,y=x,N=ye}}else m===!0&&(L(s.BLEND),m=!1)}function B(x){P!==x&&(x?s.frontFace(s.CW):s.frontFace(s.CCW),P=x)}function ee(x){x!==0?($(s.CULL_FACE),x!==U&&(x===1?s.cullFace(s.BACK):x===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):L(s.CULL_FACE),U=x}function K(x,ne,H){x?($(s.POLYGON_OFFSET_FILL),C===ne&&O===H||(s.polygonOffset(ne,H),C=ne,O=H)):L(s.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:a},enable:$,disable:L,bindFramebuffer:function(x,ne){return c[x]!==ne&&(s.bindFramebuffer(x,ne),c[x]=ne,i&&(x===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=ne),x===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=ne)),!0)},drawBuffers:function(x,ne){let H=d,G=!1;if(x)if(H=u.get(ne),H===void 0&&(H=[],u.set(ne,H)),x.isWebGLMultipleRenderTargets){let re=x.texture;if(H.length!==re.length||H[0]!==s.COLOR_ATTACHMENT0){for(let de=0,me=re.length;de<me;de++)H[de]=s.COLOR_ATTACHMENT0+de;H.length=re.length,G=!0}}else H[0]!==s.COLOR_ATTACHMENT0&&(H[0]=s.COLOR_ATTACHMENT0,G=!0);else H[0]!==s.BACK&&(H[0]=s.BACK,G=!0);G&&(t.isWebGL2?s.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))},useProgram:function(x){return p!==x&&(s.useProgram(x),p=x,!0)},setBlending:k,setMaterial:function(x,ne){x.side===2?L(s.CULL_FACE):$(s.CULL_FACE);let H=x.side===Ot;ne&&(H=!H),B(H),x.blending===1&&x.transparent===!1?k(0):k(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),n.setMask(x.colorWrite);let G=x.stencilWrite;a.setTest(G),G&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),K(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):L(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:B,setCullFace:ee,setLineWidth:function(x){x!==j&&(se&&s.lineWidth(x),j=x)},setPolygonOffset:K,setScissorTest:function(x){x?$(s.SCISSOR_TEST):L(s.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=s.TEXTURE0+F-1),q!==x&&(s.activeTexture(x),q=x)},bindTexture:function(x,ne,H){H===void 0&&(H=q===null?s.TEXTURE0+F-1:q);let G=ie[H];G===void 0&&(G={type:void 0,texture:void 0},ie[H]=G),G.type===x&&G.texture===ne||(q!==H&&(s.activeTexture(H),q=H),s.bindTexture(x,ne||D[x]),G.type=x,G.texture=ne)},unbindTexture:function(){let x=ie[q];x!==void 0&&x.type!==void 0&&(s.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let G=H.get(x);G===void 0&&(G=s.getUniformBlockIndex(ne,x.name),H.set(x,G))},uniformBlockBinding:function(x,ne){let H=l.get(ne).get(x);o.get(ne)!==H&&(s.uniformBlockBinding(ne,H,x.__bindingPointIndex),o.set(ne,H))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){ue.equals(x)===!1&&(s.scissor(x.x,x.y,x.z,x.w),ue.copy(x))},viewport:function(x){T.equals(x)===!1&&(s.viewport(x.x,x.y,x.z,x.w),T.copy(x))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,ie={},c={},u=new WeakMap,d=[],p=null,m=!1,y=null,f=null,_=null,g=null,v=null,M=null,A=null,S=new Ae(0,0,0),E=0,N=!1,P=null,U=null,j=null,C=null,O=null,ue.set(0,0,s.canvas.width,s.canvas.height),T.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}}}function H0(s,e,t,i,n,r,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,w){return p?new OffscreenCanvas(T,w):Da("canvas")}function y(T,w,D,$){let L=1;if((T.width>$||T.height>$)&&(L=$/Math.max(T.width,T.height)),L<1||w===!0){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let X=w?Ua:Math.floor,I=X(L*T.width),k=X(L*T.height);u===void 0&&(u=m(I,k));let B=D?m(I,k):u;return B.width=I,B.height=k,B.getContext("2d").drawImage(T,0,0,I,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+I+"x"+k+")."),B}return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T}return T}function f(T){return Pl(T.width)&&Pl(T.height)}function _(T,w){return T.generateMipmaps&&w&&T.minFilter!==kt&&T.minFilter!==di}function g(T){s.generateMipmap(T)}function v(T,w,D,$,L=!1){if(o===!1)return w;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=w;if(w===s.RED&&(D===s.FLOAT&&(X=s.R32F),D===s.HALF_FLOAT&&(X=s.R16F),D===s.UNSIGNED_BYTE&&(X=s.R8)),w===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.R8UI),D===s.UNSIGNED_SHORT&&(X=s.R16UI),D===s.UNSIGNED_INT&&(X=s.R32UI),D===s.BYTE&&(X=s.R8I),D===s.SHORT&&(X=s.R16I),D===s.INT&&(X=s.R32I)),w===s.RG&&(D===s.FLOAT&&(X=s.RG32F),D===s.HALF_FLOAT&&(X=s.RG16F),D===s.UNSIGNED_BYTE&&(X=s.RG8)),w===s.RGBA){let I=L?Pa:qe.getTransfer($);D===s.FLOAT&&(X=s.RGBA32F),D===s.HALF_FLOAT&&(X=s.RGBA16F),D===s.UNSIGNED_BYTE&&(X=I===Ke?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return X!==s.R16F&&X!==s.R32F&&X!==s.RG16F&&X!==s.RG32F&&X!==s.RGBA16F&&X!==s.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(T,w,D){return _(T,D)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==di?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function A(T){return T===kt||T===Fc||T===Bo?s.NEAREST:s.LINEAR}function S(T){let w=T.target;w.removeEventListener("dispose",S),function(D){let $=i.get(D);if($.__webglInit===void 0)return;let L=D.source,X=d.get(L);if(X){let I=X[$.__cacheKey];I.usedTimes--,I.usedTimes===0&&N(D),Object.keys(X).length===0&&d.delete(L)}i.remove(D)}(w),w.isVideoTexture&&c.delete(w)}function E(T){let w=T.target;w.removeEventListener("dispose",E),function(D){let $=D.texture,L=i.get(D),X=i.get($);if(X.__webglTexture!==void 0&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(L.__webglFramebuffer[I]))for(let k=0;k<L.__webglFramebuffer[I].length;k++)s.deleteFramebuffer(L.__webglFramebuffer[I][k]);else s.deleteFramebuffer(L.__webglFramebuffer[I]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[I])}else{if(Array.isArray(L.__webglFramebuffer))for(let I=0;I<L.__webglFramebuffer.length;I++)s.deleteFramebuffer(L.__webglFramebuffer[I]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let I=0;I<L.__webglColorRenderbuffer.length;I++)L.__webglColorRenderbuffer[I]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[I]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let I=0,k=$.length;I<k;I++){let B=i.get($[I]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove($[I])}i.remove($),i.remove(D)}(w)}function N(T){let w=i.get(T);s.deleteTexture(w.__webglTexture);let D=T.source;delete d.get(D)[w.__cacheKey],a.memory.textures--}let P=0;function U(T,w){let D=i.get(T);if(T.isVideoTexture&&function($){let L=a.render.frame;c.get($)!==L&&(c.set($,L),$.update())}(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if($.complete!==!1)return void fe(D,T,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+w)}let j={[lr]:s.REPEAT,[Di]:s.CLAMP_TO_EDGE,[Al]:s.MIRRORED_REPEAT},C={[kt]:s.NEAREST,[Fc]:s.NEAREST_MIPMAP_NEAREST,[Bo]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[Kp]:s.LINEAR_MIPMAP_NEAREST,[Ra]:s.LINEAR_MIPMAP_LINEAR},O={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function F(T,w,D){if(D?(s.texParameteri(T,s.TEXTURE_WRAP_S,j[w.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,j[w.wrapT]),T!==s.TEXTURE_3D&&T!==s.TEXTURE_2D_ARRAY||s.texParameteri(T,s.TEXTURE_WRAP_R,j[w.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,C[w.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,C[w.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),T!==s.TEXTURE_3D&&T!==s.TEXTURE_2D_ARRAY||s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),w.wrapS===Di&&w.wrapT===Di||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A(w.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==kt&&w.minFilter!==di&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===kt||w.minFilter!==Bo&&w.minFilter!==Ra||w.type===tn&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===hr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function se(T,w){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",S));let $=w.source,L=d.get($);L===void 0&&(L={},d.set($,L));let X=function(I){let k=[];return k.push(I.wrapS),k.push(I.wrapT),k.push(I.wrapR||0),k.push(I.magFilter),k.push(I.minFilter),k.push(I.anisotropy),k.push(I.internalFormat),k.push(I.format),k.push(I.type),k.push(I.generateMipmaps),k.push(I.premultiplyAlpha),k.push(I.flipY),k.push(I.unpackAlignment),k.push(I.colorSpace),k.join()}(w);if(X!==T.__cacheKey){L[X]===void 0&&(L[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),L[X].usedTimes++;let I=L[T.__cacheKey];I!==void 0&&(L[T.__cacheKey].usedTimes--,I.usedTimes===0&&N(w)),T.__cacheKey=X,T.__webglTexture=L[X].texture}return D}function fe(T,w,D){let $=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=s.TEXTURE_3D);let L=se(T,w),X=w.source;t.bindTexture($,T.__webglTexture,s.TEXTURE0+D);let I=i.get(X);if(X.version!==I.__version||L===!0){t.activeTexture(s.TEXTURE0+D);let k=qe.getPrimaries(qe.workingColorSpace),B=w.colorSpace===Si?null:qe.getPrimaries(w.colorSpace),ee=w.colorSpace===Si||k===B?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let K=function(be){return!o&&(be.wrapS!==Di||be.wrapT!==Di||be.minFilter!==kt&&be.minFilter!==di)}(w)&&f(w.image)===!1,x=y(w.image,K,!1,n.maxTextureSize);x=ue(w,x);let ne=f(x)||o,H=r.convert(w.format,w.colorSpace),G,re=r.convert(w.type),de=v(w.internalFormat,H,re,w.colorSpace,w.isVideoTexture);F($,w,ne);let me=w.mipmaps,ve=o&&w.isVideoTexture!==!0&&de!==wd,Ee=I.__version===void 0||L===!0,ye=M(w,x,ne);if(w.isDepthTexture)de=s.DEPTH_COMPONENT,o?de=w.type===tn?s.DEPTH_COMPONENT32F:w.type===en?s.DEPTH_COMPONENT24:w.type===En?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:w.type===tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===An&&de===s.DEPTH_COMPONENT&&w.type!==Rh&&w.type!==en&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=en,re=r.convert(w.type)),w.format===vs&&de===s.DEPTH_COMPONENT&&(de=s.DEPTH_STENCIL,w.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=En,re=r.convert(w.type))),Ee&&(ve?t.texStorage2D(s.TEXTURE_2D,1,de,x.width,x.height):t.texImage2D(s.TEXTURE_2D,0,de,x.width,x.height,0,H,re,null));else if(w.isDataTexture)if(me.length>0&&ne){ve&&Ee&&t.texStorage2D(s.TEXTURE_2D,ye,de,me[0].width,me[0].height);for(let be=0,Pe=me.length;be<Pe;be++)G=me[be],ve?t.texSubImage2D(s.TEXTURE_2D,be,0,0,G.width,G.height,H,re,G.data):t.texImage2D(s.TEXTURE_2D,be,de,G.width,G.height,0,H,re,G.data);w.generateMipmaps=!1}else ve?(Ee&&t.texStorage2D(s.TEXTURE_2D,ye,de,x.width,x.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,H,re,x.data)):t.texImage2D(s.TEXTURE_2D,0,de,x.width,x.height,0,H,re,x.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ve&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,de,me[0].width,me[0].height,x.depth);for(let be=0,Pe=me.length;be<Pe;be++)G=me[be],w.format!==Mi?H!==null?ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,G.width,G.height,x.depth,H,G.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,de,G.width,G.height,x.depth,0,G.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,G.width,G.height,x.depth,H,re,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,de,G.width,G.height,x.depth,0,H,re,G.data)}else{ve&&Ee&&t.texStorage2D(s.TEXTURE_2D,ye,de,me[0].width,me[0].height);for(let be=0,Pe=me.length;be<Pe;be++)G=me[be],w.format!==Mi?H!==null?ve?t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,G.width,G.height,H,G.data):t.compressedTexImage2D(s.TEXTURE_2D,be,de,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(s.TEXTURE_2D,be,0,0,G.width,G.height,H,re,G.data):t.texImage2D(s.TEXTURE_2D,be,de,G.width,G.height,0,H,re,G.data)}else if(w.isDataArrayTexture)ve?(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ye,de,x.width,x.height,x.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,H,re,x.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,de,x.width,x.height,x.depth,0,H,re,x.data);else if(w.isData3DTexture)ve?(Ee&&t.texStorage3D(s.TEXTURE_3D,ye,de,x.width,x.height,x.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,H,re,x.data)):t.texImage3D(s.TEXTURE_3D,0,de,x.width,x.height,x.depth,0,H,re,x.data);else if(w.isFramebufferTexture){if(Ee)if(ve)t.texStorage2D(s.TEXTURE_2D,ye,de,x.width,x.height);else{let be=x.width,Pe=x.height;for(let gt=0;gt<ye;gt++)t.texImage2D(s.TEXTURE_2D,gt,de,be,Pe,0,H,re,null),be>>=1,Pe>>=1}}else if(me.length>0&&ne){ve&&Ee&&t.texStorage2D(s.TEXTURE_2D,ye,de,me[0].width,me[0].height);for(let be=0,Pe=me.length;be<Pe;be++)G=me[be],ve?t.texSubImage2D(s.TEXTURE_2D,be,0,0,H,re,G):t.texImage2D(s.TEXTURE_2D,be,de,H,re,G);w.generateMipmaps=!1}else ve?(Ee&&t.texStorage2D(s.TEXTURE_2D,ye,de,x.width,x.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,H,re,x)):t.texImage2D(s.TEXTURE_2D,0,de,H,re,x);_(w,ne)&&g($),I.__version=X.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function te(T,w,D,$,L,X){let I=r.convert(D.format,D.colorSpace),k=r.convert(D.type),B=v(D.internalFormat,I,k,D.colorSpace);if(!i.get(w).__hasExternalTextures){let ee=Math.max(1,w.width>>X),K=Math.max(1,w.height>>X);L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?t.texImage3D(L,X,B,ee,K,w.depth,0,I,k,null):t.texImage2D(L,X,B,ee,K,0,I,k,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Z(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,L,i.get(D).__webglTexture,0,z(w)):(L===s.TEXTURE_2D||L>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,L,i.get(D).__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(T,w,D){if(s.bindRenderbuffer(s.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let $=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(D||Z(w)){let L=w.depthTexture;L&&L.isDepthTexture&&(L.type===tn?$=s.DEPTH_COMPONENT32F:L.type===en&&($=s.DEPTH_COMPONENT24));let X=z(w);Z(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,$,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,X,$,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,$,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){let $=z(w);D&&Z(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,w.width,w.height):Z(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{let $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let L=0;L<$.length;L++){let X=$[L],I=r.convert(X.format,X.colorSpace),k=r.convert(X.type),B=v(X.internalFormat,I,k,X.colorSpace),ee=z(w);D&&Z(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,B,w.width,w.height):Z(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,B,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,B,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(T){let w=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function($,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,$),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);let X=i.get(L.depthTexture).__webglTexture,I=z(L);if(L.depthTexture.format===An)Z(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0);else{if(L.depthTexture.format!==vs)throw new Error("Unknown depthTexture format");Z(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0)}})(w.__webglFramebuffer,T)}else if(D){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=s.createRenderbuffer(),q(w.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),q(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(T){return Math.min(n.maxSamples,T.samples)}function Z(T){let w=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ue(T,w){let D=T.colorSpace,$=T.format,L=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Cl||D!==Oi&&D!==Si&&(qe.getTransfer(D)===Ke?o===!1?e.has("EXT_sRGB")===!0&&$===Mi?(T.format=Cl,T.minFilter=di,T.generateMipmaps=!1):w=Oa.sRGBToLinear(w):$===Mi&&L===Tn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),w}this.allocateTextureUnit=function(){let T=P;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),P+=1,T},this.resetTextureUnits=function(){P=0},this.setTexture2D=U,this.setTexture2DArray=function(T,w){let D=i.get(T);T.version>0&&D.__version!==T.version?fe(D,T,w):t.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+w)},this.setTexture3D=function(T,w){let D=i.get(T);T.version>0&&D.__version!==T.version?fe(D,T,w):t.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+w)},this.setTextureCube=function(T,w){let D=i.get(T);T.version>0&&D.__version!==T.version?function($,L,X){if(L.image.length!==6)return;let I=se($,L),k=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+X);let B=i.get(k);if(k.version!==B.__version||I===!0){t.activeTexture(s.TEXTURE0+X);let ee=qe.getPrimaries(qe.workingColorSpace),K=L.colorSpace===Si?null:qe.getPrimaries(L.colorSpace),x=L.colorSpace===Si||ee===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let ne=L.isCompressedTexture||L.image[0].isCompressedTexture,H=L.image[0]&&L.image[0].isDataTexture,G=[];for(let Se=0;Se<6;Se++)G[Se]=ne||H?H?L.image[Se].image:L.image[Se]:y(L.image[Se],!1,!0,n.maxCubemapSize),G[Se]=ue(L,G[Se]);let re=G[0],de=f(re)||o,me=r.convert(L.format,L.colorSpace),ve=r.convert(L.type),Ee=v(L.internalFormat,me,ve,L.colorSpace),ye=o&&L.isVideoTexture!==!0,be=B.__version===void 0||I===!0,Pe,gt=M(L,re,de);if(F(s.TEXTURE_CUBE_MAP,L,de),ne){ye&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ee,re.width,re.height);for(let Se=0;Se<6;Se++){Pe=G[Se].mipmaps;for(let He=0;He<Pe.length;He++){let De=Pe[He];L.format!==Mi?me!==null?ye?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,De.width,De.height,me,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,Ee,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,0,0,De.width,De.height,me,ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He,Ee,De.width,De.height,0,me,ve,De.data)}}}else{Pe=L.mipmaps,ye&&be&&(Pe.length>0&&gt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ee,G[0].width,G[0].height));for(let Se=0;Se<6;Se++)if(H){ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,G[Se].width,G[Se].height,me,ve,G[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,G[Se].width,G[Se].height,0,me,ve,G[Se].data);for(let He=0;He<Pe.length;He++){let De=Pe[He].image[Se].image;ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,De.width,De.height,me,ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,Ee,De.width,De.height,0,me,ve,De.data)}}else{ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,me,ve,G[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ee,me,ve,G[Se]);for(let He=0;He<Pe.length;He++){let De=Pe[He];ye?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,0,0,me,ve,De.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He+1,Ee,me,ve,De.image[Se])}}}_(L,de)&&g(s.TEXTURE_CUBE_MAP),B.__version=k.version,L.onUpdate&&L.onUpdate(L)}$.__version=L.version}(D,T,w):t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+w)},this.rebindTextures=function(T,w,D){let $=i.get(T);w!==void 0&&te($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&ie(T)},this.setupRenderTarget=function(T){let w=T.texture,D=i.get(T),$=i.get(w);T.addEventListener("dispose",E),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=w.version,a.memory.textures++);let L=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,I=f(T)||o;if(L){D.__webglFramebuffer=[];for(let k=0;k<6;k++)if(o&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer[k]=[];for(let B=0;B<w.mipmaps.length;B++)D.__webglFramebuffer[k][B]=s.createFramebuffer()}else D.__webglFramebuffer[k]=s.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer=[];for(let k=0;k<w.mipmaps.length;k++)D.__webglFramebuffer[k]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(X)if(n.drawBuffers){let k=T.texture;for(let B=0,ee=k.length;B<ee;B++){let K=i.get(k[B]);K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Z(T)===!1){let k=X?w:[w];D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let B=0;B<k.length;B++){let ee=k[B];D.__webglColorRenderbuffer[B]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[B]);let K=r.convert(ee.format,ee.colorSpace),x=r.convert(ee.type),ne=v(ee.internalFormat,K,x,ee.colorSpace,T.isXRRenderTarget===!0),H=z(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,H,ne,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+B,s.RENDERBUFFER,D.__webglColorRenderbuffer[B])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),q(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(L){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),F(s.TEXTURE_CUBE_MAP,w,I);for(let k=0;k<6;k++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)te(D.__webglFramebuffer[k][B],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,B);else te(D.__webglFramebuffer[k],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);_(w,I)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let k=T.texture;for(let B=0,ee=k.length;B<ee;B++){let K=k[B],x=i.get(K);t.bindTexture(s.TEXTURE_2D,x.__webglTexture),F(s.TEXTURE_2D,K,I),te(D.__webglFramebuffer,T,K,s.COLOR_ATTACHMENT0+B,s.TEXTURE_2D,0),_(K,I)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let k=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?k=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,$.__webglTexture),F(k,w,I),o&&w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)te(D.__webglFramebuffer[B],T,w,s.COLOR_ATTACHMENT0,k,B);else te(D.__webglFramebuffer,T,w,s.COLOR_ATTACHMENT0,k,0);_(w,I)&&g(k),t.unbindTexture()}T.depthBuffer&&ie(T)},this.updateRenderTargetMipmap=function(T){let w=f(T)||o,D=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,L=D.length;$<L;$++){let X=D[$];if(_(X,w)){let I=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,k=i.get(X).__webglTexture;t.bindTexture(I,k),g(I),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(o&&T.samples>0&&Z(T)===!1){let w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],D=T.width,$=T.height,L=s.COLOR_BUFFER_BIT,X=[],I=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=i.get(T),B=T.isWebGLMultipleRenderTargets===!0;if(B)for(let ee=0;ee<w.length;ee++)t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let ee=0;ee<w.length;ee++){X.push(s.COLOR_ATTACHMENT0+ee),T.depthBuffer&&X.push(I);let K=k.__ignoreDepthValues!==void 0&&k.__ignoreDepthValues;if(K===!1&&(T.depthBuffer&&(L|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(L|=s.STENCIL_BUFFER_BIT)),B&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,k.__webglColorRenderbuffer[ee]),K===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[I]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])),B){let x=i.get(w[ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,x,0)}s.blitFramebuffer(0,0,D,$,0,0,D,$,L,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),B)for(let ee=0;ee<w.length;ee++){t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let K=i.get(w[ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,K,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Z}function G0(s,e,t){let i=t.isWebGL2;return{convert:function(n,r=""){let a,o=qe.getTransfer(r);if(n===Tn)return s.UNSIGNED_BYTE;if(n===_d)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return s.BYTE;if(n===1011)return s.SHORT;if(n===Rh)return s.UNSIGNED_SHORT;if(n===yd)return s.INT;if(n===en)return s.UNSIGNED_INT;if(n===tn)return s.FLOAT;if(n===hr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return s.ALPHA;if(n===Mi)return s.RGBA;if(n===1024)return s.LUMINANCE;if(n===1025)return s.LUMINANCE_ALPHA;if(n===An)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===Cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return s.RED;if(n===bd)return s.RED_INTEGER;if(n===1030)return s.RG;if(n===Md)return s.RG_INTEGER;if(n===Sd)return s.RGBA_INTEGER;if(n===zo||n===Ho||n===Go||n===Vo)if(o===Ke){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Bc||n===zc||n===Hc||n===Gc){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===Bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===wd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Vc||n===Wc){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===Vc)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===jc||n===Xc||n===Yc||n===qc||n===$c||n===Jc||n===Zc||n===Kc||n===Qc||n===eu||n===tu||n===iu||n===nu||n===su){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===jc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Wo||n===ru||n===au){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===Wo)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===ou||n===lu||n===hu){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===Wo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===En?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}}}var jl=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pi=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},V0={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let y of e.hand.values()){let f=t.getJointPose(y,i),_=this._getHandJoint(h,y);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=f.radius),_.visible=f!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,m=.005;h.inputState.pinching&&d>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Xl=class extends on{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,m=null,y=t.getContextAttributes(),f=null,_=null,g=[],v=[],M=new oe,A=null,S=new _t;S.layers.enable(1),S.viewport=new Je;let E=new _t;E.layers.enable(2),E.viewport=new Je;let N=[S,E],P=new jl;P.layers.enable(1),P.layers.enable(2);let U=null,j=null;function C(z){let Z=v.indexOf(z.inputSource);if(Z===-1)return;let ue=g[Z];ue!==void 0&&(ue.update(z.inputSource,z.frame,h||a),ue.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",F);for(let z=0;z<g.length;z++){let Z=v[z];Z!==null&&(v[z]=null,g[z].disconnect(Z))}U=null,j=null,e.setRenderTarget(f),p=null,d=null,u=null,n=null,_=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}function F(z){for(let Z=0;Z<z.removed.length;Z++){let ue=z.removed[Z],T=v.indexOf(ue);T>=0&&(v[T]=null,g[T].disconnect(ue))}for(let Z=0;Z<z.added.length;Z++){let ue=z.added[Z],T=v.indexOf(ue);if(T===-1){for(let D=0;D<g.length;D++){if(D>=v.length){v.push(ue),T=D;break}if(v[D]===null){v[D]=ue,T=D;break}}if(T===-1)break}let w=g[T];w&&w.connect(ue)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=g[z];return Z===void 0&&(Z=new sr,g[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=g[z];return Z===void 0&&(Z=new sr,g[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=g[z];return Z===void 0&&(Z=new sr,g[z]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",O),n.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers!==void 0||y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Mi,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,ue=null,T=null;y.depth&&(T=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=y.stencil?vs:An,ue=y.stencil?En:en);let w={colorFormat:t.RGBA8,depthFormat:T,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(w),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Fi(d.textureWidth,d.textureHeight,{format:Mi,type:Tn,depthTexture:new Xa(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0}),e.properties.get(_).__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let se=new b,fe=new b;function te(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;P.near=E.near=S.near=z.near,P.far=E.far=S.far=z.far,U===P.near&&j===P.far||(n.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,j=P.far);let Z=z.parent,ue=P.cameras;te(P,Z);for(let T=0;T<ue.length;T++)te(ue[T],Z);ue.length===2?function(T,w,D){se.setFromMatrixPosition(w.matrixWorld),fe.setFromMatrixPosition(D.matrixWorld);let $=se.distanceTo(fe),L=w.projectionMatrix.elements,X=D.projectionMatrix.elements,I=L[14]/(L[10]-1),k=L[14]/(L[10]+1),B=(L[9]+1)/L[5],ee=(L[9]-1)/L[5],K=(L[8]-1)/L[0],x=(X[8]+1)/X[0],ne=I*K,H=I*x,G=$/(-K+x),re=G*-K;w.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(re),T.translateZ(G),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let de=I+G,me=k+G,ve=ne-re,Ee=H+($-re),ye=B*k/me*de,be=ee*k/me*de;T.projectionMatrix.makePerspective(ve,Ee,ye,be,de,me),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}(P,S,E):P.projectionMatrix.copy(S.projectionMatrix),function(T,w,D){D===null?T.matrix.copy(w.matrixWorld):(T.matrix.copy(D.matrixWorld),T.matrix.invert(),T.matrix.multiply(w.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(w.projectionMatrix),T.projectionMatrixInverse.copy(w.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*_s*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}(z,P,Z)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let q=null,ie=new Ld;ie.setAnimationLoop(function(z,Z){if(c=Z.getViewerPose(h||a),m=Z,c!==null){let ue=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let T=!1;ue.length!==P.cameras.length&&(P.cameras.length=0,T=!0);for(let w=0;w<ue.length;w++){let D=ue[w],$=null;if(p!==null)$=p.getViewport(D);else{let X=u.getViewSubImage(d,D);$=X.viewport,w===0&&(e.setRenderTargetTextures(_,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(_))}let L=N[w];L===void 0&&(L=new _t,L.layers.enable(w),L.viewport=new Je,N[w]=L),L.matrix.fromArray(D.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(D.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set($.x,$.y,$.width,$.height),w===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),T===!0&&P.cameras.push(L)}}for(let ue=0;ue<g.length;ue++){let T=v[ue],w=g[ue];T!==null&&w!==void 0&&w.update(T,Z,h||a)}q&&q(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),m=null}),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}};function W0(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===Ot&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===Ot&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap){n.lightMap.value=r.lightMap;let o=s._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=r.lightMapIntensity*o,t(r.lightMap,n.lightMapTransform)}r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,Cd(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}(n,r)):r.isMeshStandardMaterial?(i(n,r),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(n,r),r.isMeshPhysicalMaterial&&function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ot&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),function(h,c){let u=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far}(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}(n,r),r.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r,a,o):r.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function j0(s,e,t,i){let n={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,p,m){let y=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let _=m[f];if(typeof y=="number"||typeof y=="boolean"){if(_!==y)return m[f]=y,!0}else if(_.equals(y)===!1)return _.copy(y),!0}return!1}function h(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[d.id]),delete n[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&(function(f){let _=f.uniforms,g=0,v=16;for(let A=0,S=_.length;A<S;A++){let E=Array.isArray(_[A])?_[A]:[_[A]];for(let N=0,P=E.length;N<P;N++){let U=E[N],j=Array.isArray(U.value)?U.value:[U.value];for(let C=0,O=j.length;C<O;C++){let F=h(j[C]),se=g%v;se!==0&&v-se<F.boundary&&(g+=v-se),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=g,g+=F.storage}}}let M=g%v;M>0&&(g+=v-M),f.__size=g,f.__cache={}}(u),p=function(f){let _=function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=_;let g=s.createBuffer(),v=f.__size,M=f.usage;return s.bindBuffer(s.UNIFORM_BUFFER,g),s.bufferData(s.UNIFORM_BUFFER,v,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,g),g}(u),n[u.id]=p,u.addEventListener("dispose",c));let m=d.program;i.updateUBOMapping(u,m);let y=e.render.frame;r[u.id]!==y&&(function(f){let _=n[f.id],g=f.uniforms,v=f.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let M=0,A=g.length;M<A;M++){let S=Array.isArray(g[M])?g[M]:[g[M]];for(let E=0,N=S.length;E<N;E++){let P=S[E];if(l(P,M,E,v)===!0){let U=P.__offset,j=Array.isArray(P.value)?P.value:[P.value],C=0;for(let O=0;O<j.length;O++){let F=j[O],se=h(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,U+C,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,C),C+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(u),r[u.id]=y)},dispose:function(){for(let u in n)s.deleteBuffer(n[u]);a=[],n={},r={}}}}var ur=class{constructor(e={}){let{canvas:t=Qp(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),m=new Int32Array(4),y=null,f=null,_=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=sn,this.toneMappingExposure=1;let v=this,M=!1,A=0,S=0,E=null,N=-1,P=null,U=new Je,j=new Je,C=null,O=new Ae(0),F=0,se=t.width,fe=t.height,te=1,q=null,ie=null,z=new Je(0,0,se,fe),Z=new Je(0,0,se,fe),ue=!1,T=new Ms,w=!1,D=!1,$=null,L=new Ce,X=new oe,I=new b,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function B(){return E===null?te:1}let ee,K,x,ne,H,G,re,de,me,ve,Ee,ye,be,Pe,gt,Se,He,De,Hr,Gn,Gr,qt,Vt,Vn,W=i;function Vr(R,V){for(let J=0;J<R.length;J++){let ae=R[J],Q=t.getContext(ae,V);if(Q!==null)return Q}return null}try{let R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",Mc,!1),t.addEventListener("webglcontextrestored",Sc,!1),t.addEventListener("webglcontextcreationerror",wc,!1),W===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),W=Vr(V,R),W===null)throw Vr(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function Gs(){ee=new Ef(W),K=new Mf(W,ee,e),ee.init(K),qt=new G0(W,ee,K),x=new z0(W,ee,K),ne=new Cf(W),H=new P0,G=new H0(W,ee,x,H,K,qt,ne),re=new wf(v),de=new Tf(v),me=new yf(W,K),Vt=new xf(W,ee,me,K),ve=new Af(W,me,ne,Vt),Ee=new kf(W,ve,me,ne),Hr=new If(W,K,G),Se=new Sf(H),ye=new L0(v,re,de,ee,K,Vt,Se),be=new W0(v,H),Pe=new k0,gt=new F0(ee,K),De=new _f(v,re,de,x,Ee,d,l),He=new B0(v,Ee,K),Vn=new j0(W,ne,K,x),Gn=new bf(W,ee,ne,K),Gr=new Rf(W,ee,ne,K),ne.programs=ye.programs,v.capabilities=K,v.extensions=ee,v.properties=H,v.renderLists=Pe,v.shadowMap=He,v.state=x,v.info=ne}Gs();let Et=new Xl(v,W);function Mc(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Sc(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=ne.autoReset,V=He.enabled,J=He.autoUpdate,ae=He.needsUpdate,Q=He.type;Gs(),ne.autoReset=R,He.enabled=V,He.autoUpdate=J,He.needsUpdate=ae,He.type=Q}function wc(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tc(R){let V=R.target;V.removeEventListener("dispose",Tc),function(J){(function(ae){let Q=H.get(ae).programs;Q!==void 0&&(Q.forEach(function(pe){ye.releaseProgram(pe)}),ae.isShaderMaterial&&ye.releaseShaderCache(ae))})(J),H.remove(J)}(V)}function Ec(R,V,J){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=Ot,R.needsUpdate=!0,jr(R,V,J),R.side=an,R.needsUpdate=!0,jr(R,V,J),R.side=2):jr(R,V,J)}this.xr=Et,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(R){R!==void 0&&(te=R,this.setSize(se,fe,!1))},this.getSize=function(R){return R.set(se,fe)},this.setSize=function(R,V,J=!0){Et.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(se=R,fe=V,t.width=Math.floor(R*te),t.height=Math.floor(V*te),J===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V))},this.getDrawingBufferSize=function(R){return R.set(se*te,fe*te).floor()},this.setDrawingBufferSize=function(R,V,J){se=R,fe=V,te=J,t.width=Math.floor(R*J),t.height=Math.floor(V*J),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,V,J,ae){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,V,J,ae),x.viewport(U.copy(z).multiplyScalar(te).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,V,J,ae){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,V,J,ae),x.scissor(j.copy(Z).multiplyScalar(te).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){x.setScissorTest(ue=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,V=!0,J=!0){let ae=0;if(R){let Q=!1;if(E!==null){let pe=E.texture.format;Q=pe===Sd||pe===Md||pe===bd}if(Q){let pe=E.texture.type,we=pe===Tn||pe===en||pe===Rh||pe===En||pe===_d||pe===xd,Te=De.getClearColor(),Ie=De.getClearAlpha(),Ue=Te.r,Oe=Te.g,Fe=Te.b;we?(p[0]=Ue,p[1]=Oe,p[2]=Fe,p[3]=Ie,W.clearBufferuiv(W.COLOR,0,p)):(m[0]=Ue,m[1]=Oe,m[2]=Fe,m[3]=Ie,W.clearBufferiv(W.COLOR,0,m))}else ae|=W.COLOR_BUFFER_BIT}V&&(ae|=W.DEPTH_BUFFER_BIT),J&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mc,!1),t.removeEventListener("webglcontextrestored",Sc,!1),t.removeEventListener("webglcontextcreationerror",wc,!1),Pe.dispose(),gt.dispose(),H.dispose(),re.dispose(),de.dispose(),Ee.dispose(),Vt.dispose(),Vn.dispose(),ye.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ac),Et.removeEventListener("sessionend",Rc),$&&($.dispose(),$=null),pn.stop()},this.renderBufferDirect=function(R,V,J,ae,Q,pe){V===null&&(V=k);let we=Q.isMesh&&Q.matrixWorld.determinant()<0,Te=function(dt,$t,Dt,Be,Ge){$t.isScene!==!0&&($t=k),G.resetTextureUnits();let Vs=$t.fog,Uo=Be.isMeshStandardMaterial?$t.environment:null,Dp=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oi,Xr=(Be.isMeshStandardMaterial?de:re).get(Be.envMap||Uo),Op=Be.vertexColors===!0&&!!Dt.attributes.color&&Dt.attributes.color.itemSize===4,Fp=!!Dt.attributes.tangent&&(!!Be.normalMap||Be.anisotropy>0),Bp=!!Dt.morphAttributes.position,zp=!!Dt.morphAttributes.normal,Hp=!!Dt.morphAttributes.color,Nc=sn;Be.toneMapped&&(E!==null&&E.isXRRenderTarget!==!0||(Nc=v.toneMapping));let Uc=Dt.morphAttributes.position||Dt.morphAttributes.normal||Dt.morphAttributes.color,Gp=Uc!==void 0?Uc.length:0,We=H.get(Be),Vp=f.state.lights;if(w===!0&&(D===!0||dt!==P)){let Jt=dt===P&&Be.id===N;Se.setState(Be,dt,Jt)}let oi=!1;Be.version===We.__version?We.needsLights&&We.lightsStateVersion!==Vp.state.version||We.outputColorSpace!==Dp||Ge.isBatchedMesh&&We.batching===!1?oi=!0:Ge.isBatchedMesh||We.batching!==!0?Ge.isInstancedMesh&&We.instancing===!1?oi=!0:Ge.isInstancedMesh||We.instancing!==!0?Ge.isSkinnedMesh&&We.skinning===!1?oi=!0:Ge.isSkinnedMesh||We.skinning!==!0?Ge.isInstancedMesh&&We.instancingColor===!0&&Ge.instanceColor===null||Ge.isInstancedMesh&&We.instancingColor===!1&&Ge.instanceColor!==null||We.envMap!==Xr||Be.fog===!0&&We.fog!==Vs?oi=!0:We.numClippingPlanes===void 0||We.numClippingPlanes===Se.numPlanes&&We.numIntersection===Se.numIntersection?(We.vertexAlphas!==Op||We.vertexTangents!==Fp||We.morphTargets!==Bp||We.morphNormals!==zp||We.morphColors!==Hp||We.toneMapping!==Nc||K.isWebGL2===!0&&We.morphTargetsCount!==Gp)&&(oi=!0):oi=!0:oi=!0:oi=!0:oi=!0:(oi=!0,We.__version=Be.version);let mn=We.currentProgram;oi===!0&&(mn=jr(Be,$t,Ge));let Dc=!1,Ws=!1,Do=!1,At=mn.getUniforms(),gn=We.uniforms;if(x.useProgram(mn.program)&&(Dc=!0,Ws=!0,Do=!0),Be.id!==N&&(N=Be.id,Ws=!0),Dc||P!==dt){At.setValue(W,"projectionMatrix",dt.projectionMatrix),At.setValue(W,"viewMatrix",dt.matrixWorldInverse);let Jt=At.map.cameraPosition;Jt!==void 0&&Jt.setValue(W,I.setFromMatrixPosition(dt.matrixWorld)),K.logarithmicDepthBuffer&&At.setValue(W,"logDepthBufFC",2/(Math.log(dt.far+1)/Math.LN2)),(Be.isMeshPhongMaterial||Be.isMeshToonMaterial||Be.isMeshLambertMaterial||Be.isMeshBasicMaterial||Be.isMeshStandardMaterial||Be.isShaderMaterial)&&At.setValue(W,"isOrthographic",dt.isOrthographicCamera===!0),P!==dt&&(P=dt,Ws=!0,Do=!0)}if(Ge.isSkinnedMesh){At.setOptional(W,Ge,"bindMatrix"),At.setOptional(W,Ge,"bindMatrixInverse");let Jt=Ge.skeleton;Jt&&(K.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),At.setValue(W,"boneTexture",Jt.boneTexture,G)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ge.isBatchedMesh&&(At.setOptional(W,Ge,"batchingTexture"),At.setValue(W,"batchingTexture",Ge._matricesTexture,G));let Oo=Dt.morphAttributes;(Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&K.isWebGL2===!0)&&Hr.update(Ge,Dt,mn),(Ws||We.receiveShadow!==Ge.receiveShadow)&&(We.receiveShadow=Ge.receiveShadow,At.setValue(W,"receiveShadow",Ge.receiveShadow)),Be.isMeshGouraudMaterial&&Be.envMap!==null&&(gn.envMap.value=Xr,gn.flipEnvMap.value=Xr.isCubeTexture&&Xr.isRenderTargetTexture===!1?-1:1),Ws&&(At.setValue(W,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&(li=Do,(xi=gn).ambientLightColor.needsUpdate=li,xi.lightProbe.needsUpdate=li,xi.directionalLights.needsUpdate=li,xi.directionalLightShadows.needsUpdate=li,xi.pointLights.needsUpdate=li,xi.pointLightShadows.needsUpdate=li,xi.spotLights.needsUpdate=li,xi.spotLightShadows.needsUpdate=li,xi.rectAreaLights.needsUpdate=li,xi.hemisphereLights.needsUpdate=li),Vs&&Be.fog===!0&&be.refreshFogUniforms(gn,Vs),be.refreshMaterialUniforms(gn,Be,te,fe,$),fs.upload(W,Ic(We),gn,G));var xi,li;if(Be.isShaderMaterial&&Be.uniformsNeedUpdate===!0&&(fs.upload(W,Ic(We),gn,G),Be.uniformsNeedUpdate=!1),Be.isSpriteMaterial&&At.setValue(W,"center",Ge.center),At.setValue(W,"modelViewMatrix",Ge.modelViewMatrix),At.setValue(W,"normalMatrix",Ge.normalMatrix),At.setValue(W,"modelMatrix",Ge.matrixWorld),Be.isShaderMaterial||Be.isRawShaderMaterial){let Jt=Be.uniformsGroups;for(let Fo=0,Wp=Jt.length;Fo<Wp;Fo++)if(K.isWebGL2){let Oc=Jt[Fo];Vn.update(Oc,mn),Vn.bind(Oc,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}(R,V,J,ae,Q);x.setMaterial(ae,we);let Ie=J.index,Ue=1;if(ae.wireframe===!0){if(Ie=ve.getWireframeAttribute(J),Ie===void 0)return;Ue=2}let Oe=J.drawRange,Fe=J.attributes.position,st=Oe.start*Ue,ai=(Oe.start+Oe.count)*Ue;pe!==null&&(st=Math.max(st,pe.start*Ue),ai=Math.min(ai,(pe.start+pe.count)*Ue)),Ie!==null?(st=Math.max(st,0),ai=Math.min(ai,Ie.count)):Fe!=null&&(st=Math.max(st,0),ai=Math.min(ai,Fe.count));let Ri=ai-st;if(Ri<0||Ri===1/0)return;let fn;Vt.setup(Q,ae,Te,J,Ie);let rt=Gn;if(Ie!==null&&(fn=me.get(Ie),rt=Gr,rt.setIndex(fn)),Q.isMesh)ae.wireframe===!0?(x.setLineWidth(ae.wireframeLinewidth*B()),rt.setMode(W.LINES)):rt.setMode(W.TRIANGLES);else if(Q.isLine){let dt=ae.linewidth;dt===void 0&&(dt=1),x.setLineWidth(dt*B()),Q.isLineSegments?rt.setMode(W.LINES):Q.isLineLoop?rt.setMode(W.LINE_LOOP):rt.setMode(W.LINE_STRIP)}else Q.isPoints?rt.setMode(W.POINTS):Q.isSprite&&rt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)rt.renderInstances(st,Ri,Q.count);else if(J.isInstancedBufferGeometry){let dt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$t=Math.min(J.instanceCount,dt);rt.renderInstances(st,Ri,$t)}else rt.render(st,Ri)},this.compile=function(R,V,J=null){J===null&&(J=R),f=gt.get(J),f.init(),g.push(f),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),R!==J&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(V.layers)&&(f.pushLight(Q),Q.castShadow&&f.pushShadow(Q))}),f.setupLights(v._useLegacyLights);let ae=new Set;return R.traverse(function(Q){let pe=Q.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){let Te=pe[we];Ec(Te,J,Q),ae.add(Te)}else Ec(pe,J,Q),ae.add(pe)}),g.pop(),f=null,ae},this.compileAsync=function(R,V,J=null){let ae=this.compile(R,V,J);return new Promise(Q=>{function pe(){ae.forEach(function(we){H.get(we).currentProgram.isReady()&&ae.delete(we)}),ae.size!==0?setTimeout(pe,10):Q(R)}ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let No=null;function Ac(){pn.stop()}function Rc(){pn.start()}let pn=new Ld;function Cc(R,V,J,ae){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||T.intersectsSprite(R)){ae&&I.setFromMatrixPosition(R.matrixWorld).applyMatrix4(L);let pe=Ee.update(R),we=R.material;we.visible&&y.push(R,pe,we,J,I.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||T.intersectsObject(R))){let pe=Ee.update(R),we=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),I.copy(R.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),I.copy(pe.boundingSphere.center)),I.applyMatrix4(R.matrixWorld).applyMatrix4(L)),Array.isArray(we)){let Te=pe.groups;for(let Ie=0,Ue=Te.length;Ie<Ue;Ie++){let Oe=Te[Ie],Fe=we[Oe.materialIndex];Fe&&Fe.visible&&y.push(R,pe,Fe,J,I.z,Oe)}}else we.visible&&y.push(R,pe,we,J,I.z,null)}}let Q=R.children;for(let pe=0,we=Q.length;pe<we;pe++)Cc(Q[pe],V,J,ae)}function Lc(R,V,J,ae){let Q=R.opaque,pe=R.transmissive,we=R.transparent;f.setupLightsView(J),w===!0&&Se.setGlobalState(v.clippingPlanes,J),pe.length>0&&function(Te,Ie,Ue,Oe){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let st=K.isWebGL2;$===null&&($=new Fi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?hr:Tn,minFilter:Ra,samples:st?4:0})),v.getDrawingBufferSize(X),st?$.setSize(X.x,X.y):$.setSize(Ua(X.x),Ua(X.y));let ai=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(O),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Ri=v.toneMapping;v.toneMapping=sn,Wr(Te,Ue,Oe),G.updateMultisampleRenderTarget($),G.updateRenderTargetMipmap($);let fn=!1;for(let rt=0,dt=Ie.length;rt<dt;rt++){let $t=Ie[rt],Dt=$t.object,Be=$t.geometry,Ge=$t.material,Vs=$t.group;if(Ge.side===2&&Dt.layers.test(Oe.layers)){let Uo=Ge.side;Ge.side=Ot,Ge.needsUpdate=!0,Pc(Dt,Ue,Oe,Be,Ge,Vs),Ge.side=Uo,Ge.needsUpdate=!0,fn=!0}}fn===!0&&(G.updateMultisampleRenderTarget($),G.updateRenderTargetMipmap($)),v.setRenderTarget(ai),v.setClearColor(O,F),v.toneMapping=Ri}(Q,pe,V,J),ae&&x.viewport(U.copy(ae)),Q.length>0&&Wr(Q,V,J),pe.length>0&&Wr(pe,V,J),we.length>0&&Wr(we,V,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Wr(R,V,J){let ae=V.isScene===!0?V.overrideMaterial:null;for(let Q=0,pe=R.length;Q<pe;Q++){let we=R[Q],Te=we.object,Ie=we.geometry,Ue=ae===null?we.material:ae,Oe=we.group;Te.layers.test(J.layers)&&Pc(Te,V,J,Ie,Ue,Oe)}}function Pc(R,V,J,ae,Q,pe){R.onBeforeRender(v,V,J,ae,Q,pe),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(v,V,J,ae,R,pe),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=Ot,Q.needsUpdate=!0,v.renderBufferDirect(J,V,ae,Q,R,pe),Q.side=an,Q.needsUpdate=!0,v.renderBufferDirect(J,V,ae,Q,R,pe),Q.side=2):v.renderBufferDirect(J,V,ae,Q,R,pe),R.onAfterRender(v,V,J,ae,Q,pe)}function jr(R,V,J){V.isScene!==!0&&(V=k);let ae=H.get(R),Q=f.state.lights,pe=f.state.shadowsArray,we=Q.state.version,Te=ye.getParameters(R,Q.state,pe,V,J),Ie=ye.getProgramCacheKey(Te),Ue=ae.programs;ae.environment=R.isMeshStandardMaterial?V.environment:null,ae.fog=V.fog,ae.envMap=(R.isMeshStandardMaterial?de:re).get(R.envMap||ae.environment),Ue===void 0&&(R.addEventListener("dispose",Tc),Ue=new Map,ae.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(ae.currentProgram===Oe&&ae.lightsStateVersion===we)return kc(R,Te),Oe}else Te.uniforms=ye.getUniforms(R),R.onBuild(J,Te,v),R.onBeforeCompile(Te,v),Oe=ye.acquireProgram(Te,Ie),Ue.set(Ie,Oe),ae.uniforms=Te.uniforms;let Fe=ae.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Fe.clippingPlanes=Se.uniform),kc(R,Te),ae.needsLights=function(st){return st.isMeshLambertMaterial||st.isMeshToonMaterial||st.isMeshPhongMaterial||st.isMeshStandardMaterial||st.isShadowMaterial||st.isShaderMaterial&&st.lights===!0}(R),ae.lightsStateVersion=we,ae.needsLights&&(Fe.ambientLightColor.value=Q.state.ambient,Fe.lightProbe.value=Q.state.probe,Fe.directionalLights.value=Q.state.directional,Fe.directionalLightShadows.value=Q.state.directionalShadow,Fe.spotLights.value=Q.state.spot,Fe.spotLightShadows.value=Q.state.spotShadow,Fe.rectAreaLights.value=Q.state.rectArea,Fe.ltc_1.value=Q.state.rectAreaLTC1,Fe.ltc_2.value=Q.state.rectAreaLTC2,Fe.pointLights.value=Q.state.point,Fe.pointLightShadows.value=Q.state.pointShadow,Fe.hemisphereLights.value=Q.state.hemi,Fe.directionalShadowMap.value=Q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Fe.spotShadowMap.value=Q.state.spotShadowMap,Fe.spotLightMatrix.value=Q.state.spotLightMatrix,Fe.spotLightMap.value=Q.state.spotLightMap,Fe.pointShadowMap.value=Q.state.pointShadowMap,Fe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=Oe,ae.uniformsList=null,Oe}function Ic(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=fs.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function kc(R,V){let J=H.get(R);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}pn.setAnimationLoop(function(R){No&&No(R)}),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(R){No=R,Et.setAnimationLoop(R),R===null?pn.stop():pn.start()},Et.addEventListener("sessionstart",Ac),Et.addEventListener("sessionend",Rc),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(V),V=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,E),f=gt.get(R,g.length),f.init(),g.push(f),L.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),T.setFromProjectionMatrix(L),D=this.localClippingEnabled,w=Se.init(this.clippingPlanes,D),y=Pe.get(R,_.length),y.init(),_.push(y),Cc(R,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,ie),this.info.render.frame++,w===!0&&Se.beginShadows();let J=f.state.shadowsArray;if(He.render(J,R,V),w===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(y,R),f.setupLights(v._useLegacyLights),V.isArrayCamera){let ae=V.cameras;for(let Q=0,pe=ae.length;Q<pe;Q++){let we=ae[Q];Lc(y,R,we,we.viewport)}}else Lc(y,R,V);E!==null&&(G.updateMultisampleRenderTarget(E),G.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,V),Vt.resetDefaultState(),N=-1,P=null,g.pop(),f=g.length>0?g[g.length-1]:null,_.pop(),y=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,V,J){H.get(R.texture).__webglTexture=V,H.get(R.depthTexture).__webglTexture=J;let ae=H.get(R);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=J===void 0,ae.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){let J=H.get(R);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,J=0){E=R,A=V,S=J;let ae=!0,Q=null,pe=!1,we=!1;if(R){let Te=H.get(R);Te.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(W.FRAMEBUFFER,null),ae=!1):Te.__webglFramebuffer===void 0?G.setupRenderTarget(R):Te.__hasExternalTextures&&G.rebindTextures(R,H.get(R.texture).__webglTexture,H.get(R.depthTexture).__webglTexture);let Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Ue=H.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Array.isArray(Ue[V])?Ue[V][J]:Ue[V],pe=!0):Q=K.isWebGL2&&R.samples>0&&G.useMultisampledRTT(R)===!1?H.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[J]:Ue,U.copy(R.viewport),j.copy(R.scissor),C=R.scissorTest}else U.copy(z).multiplyScalar(te).floor(),j.copy(Z).multiplyScalar(te).floor(),C=ue;if(x.bindFramebuffer(W.FRAMEBUFFER,Q)&&K.drawBuffers&&ae&&x.drawBuffers(R,Q),x.viewport(U),x.scissor(j),x.setScissorTest(C),pe){let Te=H.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,J)}else if(we){let Te=H.get(R.texture),Ie=V||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Te.__webglTexture,J||0,Ie)}N=-1},this.readRenderTargetPixels=function(R,V,J,ae,Q,pe,we){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=H.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Te=Te[we]),Te){x.bindFramebuffer(W.FRAMEBUFFER,Te);try{let Ie=R.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==Mi&&qt.convert(Ue)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Fe=Oe===hr&&(ee.has("EXT_color_buffer_half_float")||K.isWebGL2&&ee.has("EXT_color_buffer_float"));if(!(Oe===Tn||qt.convert(Oe)===W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)||Oe===tn&&(K.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float"))||Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=R.width-ae&&J>=0&&J<=R.height-Q&&W.readPixels(V,J,ae,Q,qt.convert(Ue),qt.convert(Oe),pe)}finally{let Ie=E!==null?H.get(E).__webglFramebuffer:null;x.bindFramebuffer(W.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,V,J=0){let ae=Math.pow(2,-J),Q=Math.floor(V.image.width*ae),pe=Math.floor(V.image.height*ae);G.setTexture2D(V,0),W.copyTexSubImage2D(W.TEXTURE_2D,J,0,0,R.x,R.y,Q,pe),x.unbindTexture()},this.copyTextureToTexture=function(R,V,J,ae=0){let Q=V.image.width,pe=V.image.height,we=qt.convert(J.format),Te=qt.convert(J.type);G.setTexture2D(J,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ae,R.x,R.y,Q,pe,we,Te,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ae,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,we,V.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,ae,R.x,R.y,we,Te,V.image),ae===0&&J.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(R,V,J,ae,Q=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let pe=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,Ie=qt.convert(ae.format),Ue=qt.convert(ae.type),Oe;if(ae.isData3DTexture)G.setTexture3D(ae,0),Oe=W.TEXTURE_3D;else{if(!ae.isDataArrayTexture&&!ae.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");G.setTexture2DArray(ae,0),Oe=W.TEXTURE_2D_ARRAY}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,ae.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,ae.unpackAlignment);let Fe=W.getParameter(W.UNPACK_ROW_LENGTH),st=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ai=W.getParameter(W.UNPACK_SKIP_PIXELS),Ri=W.getParameter(W.UNPACK_SKIP_ROWS),fn=W.getParameter(W.UNPACK_SKIP_IMAGES),rt=J.isCompressedTexture?J.mipmaps[Q]:J.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,rt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,rt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?W.texSubImage3D(Oe,Q,V.x,V.y,V.z,pe,we,Te,Ie,Ue,rt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Oe,Q,V.x,V.y,V.z,pe,we,Te,Ie,rt.data)):W.texSubImage3D(Oe,Q,V.x,V.y,V.z,pe,we,Te,Ie,Ue,rt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Fe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,st),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ai),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ri),W.pixelStorei(W.UNPACK_SKIP_IMAGES,fn),Q===0&&ae.generateMipmaps&&W.generateMipmap(Oe),x.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),x.unbindTexture()},this.resetState=function(){A=0,S=0,E=null,x.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ch?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Rn:Td}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rn?ut:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yl=class extends ur{};Yl.prototype.isWebGL1Renderer=!0;var Ya=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},qa=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ql=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Pt=new b,$a=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pr=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},as,Js=new b,os=new b,ls=new b,hs=new oe,Zs=new oe,Dd=new Ce,ma=new b,Ks=new b,ga=new b,Ku=new oe,fl=new oe,Qu=new oe,Ja=class extends Mt{constructor(e=new pr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ql(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new $a(i,3,0,!1)),as.setAttribute("uv",new $a(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;va(ma.set(-.5,-.5,0),ls,a,os,n,r),va(Ks.set(.5,-.5,0),ls,a,os,n,r),va(ga.set(.5,.5,0),ls,a,os,n,r),Ku.set(0,0),fl.set(1,0),Qu.set(1,1);let o=e.ray.intersectTriangle(ma,Ks,ga,!1,Js);if(o===null&&(va(Ks.set(-.5,.5,0),ls,a,os,n,r),fl.set(0,1),o=e.ray.intersectTriangle(ma,ga,Ks,!1,Js),o===null))return;let l=e.ray.origin.distanceTo(Js);l<e.near||l>e.far||t.push({distance:l,point:Js.clone(),uv:nn.getInterpolation(Js,ma,Ks,ga,Ku,fl,Qu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function va(s,e,t,i,n,r){hs.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Zs.x=r*hs.x-n*hs.y,Zs.y=n*hs.x+r*hs.y):Zs.copy(hs),s.copy(e),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(Dd)}var Jg=new b,Zg=new b;var Kg=new b,Qg=new Je,ev=new Je,tv=new b,iv=new Ce,nv=new b,sv=new gi,rv=new Ce,av=new xs;var ov=new Ce,lv=new Ce;var Za=class extends St{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cs=new Ce,ed=new Ce,ya=[],td=new mi,X0=new Ce,Qs=new Ze,er=new gi,fr=class extends Ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,X0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),td.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(td)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cs),er.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(i),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,cs),ed.multiplyMatrices(i,cs),Qs.matrixWorld=ed,Qs.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){let l=ya[a];l.instanceId=r,l.object=this,t.push(l)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var $l=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let r=i[this.index];n.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}};var hv=new Ce,cv=new Ce,uv=new Ce,dv=new Ce,pv=new Ms,fv=new mi,mv=new gi,gv=new b,vv=new $l,yv=new Ze;var _v=new b,xv=new b,bv=new Ce,Mv=new xs,Sv=new gi;var wv=new b,Tv=new b;var mr=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},id=new Ce,Jl=new xs,_a=new gi,xa=new b,Ka=class extends Mt{constructor(e=new tt,t=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(n),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;id.copy(n).invert(),Jl.copy(e.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++){let p=h.getX(u);xa.fromBufferAttribute(c,p),nd(xa,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++)xa.fromBufferAttribute(c,u),nd(xa,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function nd(s,e,t,i,n,r,a){let o=Jl.distanceSqToPoint(s);if(o<t){let l=new b;Jl.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Qa=class extends Kt{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,h=r-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(r-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new oe:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],r=[],a=[],o=new b,l=new Ce;for(let p=0;p<=e;p++){let m=p/e;n[p]=this.getTangentAt(m,new b)}r[0]=new b,a[0]=new b;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(yt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],p*m)),a[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gr=class extends ei{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new oe,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zl=class extends gr{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var ba=new b,ml=new Ph,gl=new Ph,vl=new Ph,Kl=class extends ei{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=n[(h-1)%r]:(ba.subVectors(n[0],n[1]).add(n[0]),o=ba);let u=n[h%r],d=n[(h+1)%r];if(this.closed||h+2<r?l=n[(h+2)%r]:(ba.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);y<1e-4&&(y=1),m<1e-4&&(m=y),f<1e-4&&(f=y),ml.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,y,f),gl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,y,f),vl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,y,f)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),gl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),vl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(ml.calc(c),gl.calc(c),vl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sd(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function rr(s,e,t,i){return function(n,r){let a=1-n;return a*a*r}(s,e)+function(n,r){return 2*(1-n)*n*r}(s,t)+function(n,r){return n*n*r}(s,i)}function ar(s,e,t,i,n){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,i)+function(r,a){return r*r*r*a}(s,n)}var eo=class extends ei{constructor(e=new oe,t=new oe,i=new oe,n=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new oe){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ar(e,n.x,r.x,a.x,o.x),ar(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends ei{constructor(e=new b,t=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ar(e,n.x,r.x,a.x,o.x),ar(e,n.y,r.y,a.y,o.y),ar(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends ei{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eh=class extends ei{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends ei{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(rr(e,n.x,r.x,a.x),rr(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends ei{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(rr(e,n.x,r.x,a.x),rr(e,n.y,r.y,a.y),rr(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(sd(o,l.x,h.x,c.x,u.x),sd(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new oe().fromArray(n))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Kl,CubicBezierCurve:eo,CubicBezierCurve3:Ql,EllipseCurve:gr,LineCurve:to,LineCurve3:eh,QuadraticBezierCurve:io,QuadraticBezierCurve3:no,SplineCurve:so}),th=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new ro[n.type]().fromJSON(n))}return this}},vr=class extends th{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new to(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new io(this.currentPoint.clone(),new oe(e,t),new oe(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new eo(this.currentPoint.clone(),new oe(e,t),new oe(i,n),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new so(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let h=new gr(e,t,i,n,r,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ao=class s extends tt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=yt(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],h=[],c=1/t,u=new b,d=new oe,p=new b,m=new b,y=new b,f=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,m.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(m)}for(let g=0;g<=t;g++){let v=i+g*c*n,M=Math.sin(v),A=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*A,a.push(u.x,u.y,u.z),d.x=g/t,d.y=S/(e.length-1),o.push(d.x,d.y);let E=l[3*S+0]*M,N=l[3*S+1],P=l[3*S+0]*A;h.push(E,N,P)}}for(let g=0;g<t;g++)for(let v=0;v<e.length-1;v++){let M=v+g*e.length,A=M,S=M+e.length,E=M+e.length+1,N=M+1;r.push(A,S,N),r.push(E,N,S)}this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},yr=class s extends ao{constructor(e=1,t=1,i=4,n=8){let r=new vr;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},ws=class s extends tt{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new b,c=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xt=class s extends tt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],u=[],d=[],p=[],m=0,y=[],f=i/2,_=0;function g(v){let M=m,A=new oe,S=new b,E=0,N=v===!0?e:t,P=v===!0?1:-1;for(let j=1;j<=n;j++)u.push(0,f*P,0),d.push(0,P,0),p.push(.5,.5),m++;let U=m;for(let j=0;j<=n;j++){let C=j/n*l+o,O=Math.cos(C),F=Math.sin(C);S.x=N*F,S.y=f*P,S.z=N*O,u.push(S.x,S.y,S.z),d.push(0,P,0),A.x=.5*O+.5,A.y=.5*F*P+.5,p.push(A.x,A.y),m++}for(let j=0;j<n;j++){let C=M+j,O=U+j;v===!0?c.push(O,O+1,C):c.push(O+1,O,C),E+=3}h.addGroup(_,E,v===!0?1:2),_+=E}(function(){let v=new b,M=new b,A=0,S=(t-e)/i;for(let E=0;E<=r;E++){let N=[],P=E/r,U=P*(t-e)+e;for(let j=0;j<=n;j++){let C=j/n,O=C*l+o,F=Math.sin(O),se=Math.cos(O);M.x=U*F,M.y=-P*i+f,M.z=U*se,u.push(M.x,M.y,M.z),v.set(F,S,se).normalize(),d.push(v.x,v.y,v.z),p.push(C,1-P),N.push(m++)}y.push(N)}for(let E=0;E<n;E++)for(let N=0;N<r;N++){let P=y[N][E],U=y[N+1][E],j=y[N+1][E+1],C=y[N][E+1];c.push(P,U,C),c.push(U,j,C),A+=6}h.addGroup(_,A,0),_+=A})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_r=class s extends xt{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ln=class s extends tt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(d,p,m,y){let f=y+1,_=[];for(let g=0;g<=f;g++){_[g]=[];let v=d.clone().lerp(m,g/f),M=p.clone().lerp(m,g/f),A=f-g;for(let S=0;S<=A;S++)_[g][S]=S===0&&g===f?v:v.clone().lerp(M,S/A)}for(let g=0;g<f;g++)for(let v=0;v<2*(f-g)-1;v++){let M=Math.floor(v/2);v%2==0?(l(_[g][M+1]),l(_[g+1][M]),l(_[g][M])):(l(_[g][M+1]),l(_[g+1][M+1]),l(_[g+1][M]))}}function l(d){r.push(d.x,d.y,d.z)}function h(d,p){let m=3*d;p.x=e[m+0],p.y=e[m+1],p.z=e[m+2]}function c(d,p,m,y){y<0&&d.x===1&&(a[p]=d.x-1),m.x===0&&m.z===0&&(a[p]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new b,m=new b,y=new b;for(let f=0;f<t.length;f+=3)h(t[f+0],p),h(t[f+1],m),h(t[f+2],y),o(p,m,y,d)})(n),function(d){let p=new b;for(let m=0;m<r.length;m+=3)p.x=r[m+0],p.y=r[m+1],p.z=r[m+2],p.normalize().multiplyScalar(d),r[m+0]=p.x,r[m+1]=p.y,r[m+2]=p.z}(i),function(){let d=new b;for(let m=0;m<r.length;m+=3){d.x=r[m+0],d.y=r[m+1],d.z=r[m+2];let y=u(d)/2/Math.PI+.5,f=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(y,1-f)}var p;(function(){let m=new b,y=new b,f=new b,_=new b,g=new oe,v=new oe,M=new oe;for(let A=0,S=0;A<r.length;A+=9,S+=6){m.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),f.set(r[A+6],r[A+7],r[A+8]),g.set(a[S+0],a[S+1]),v.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),_.copy(m).add(y).add(f).divideScalar(3);let E=u(_);c(g,S+0,m,E),c(v,S+2,y,E),c(M,S+4,f,E)}})(),function(){for(let m=0;m<a.length;m+=6){let y=a[m+0],f=a[m+2],_=a[m+4],g=Math.max(y,f,_),v=Math.min(y,f,_);g>.9&&v<.1&&(y<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),_<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},ih=class s extends Ln{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ma=new b,Sa=new b,yl=new b,wa=new nn,nh=class extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(ds*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);let{a:y,b:f,c:_}=wa;if(y.fromBufferAttribute(o,h[0]),f.fromBufferAttribute(o,h[1]),_.fromBufferAttribute(o,h[2]),wa.getNormal(yl),u[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[1]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,u[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let v=(g+1)%3,M=u[g],A=u[v],S=wa[c[g]],E=wa[c[v]],N=`${M}_${A}`,P=`${A}_${M}`;P in d&&d[P]?(yl.dot(d[P].normal)<=r&&(p.push(S.x,S.y,S.z),p.push(E.x,E.y,E.z)),d[P]=null):N in d||(d[N]={index0:h[g],index1:h[v],normal:yl.clone()})}}for(let m in d)if(d[m]){let{index0:y,index1:f}=d[m];Ma.fromBufferAttribute(o,y),Sa.fromBufferAttribute(o,f),p.push(Ma.x,Ma.y,Ma.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Re(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},oo=class extends vr{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new vr().fromJSON(n))}return this}},Y0=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=rd(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,p;if(i&&(r=function(m,y,f,_){let g=[],v,M,A,S,E;for(v=0,M=y.length;v<M;v++)A=y[v]*_,S=v<M-1?y[v+1]*_:m.length,E=rd(m,A,S,_,!1),E===E.next&&(E.steiner=!0),g.push(tm(E));for(g.sort(K0),v=0;v<g.length;v++)f=Q0(g[v],f);return f}(s,e,r,t)),s.length>80*t){o=h=s[0],l=c=s[1];for(let m=t;m<n;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return xr(r,a,t,o,l,p,0),a};function rd(s,e,t,i,n){let r,a;if(n===function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,i)>0)for(r=e;r<t;r+=i)a=ad(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=ad(r,s[r],s[r+1],a);return a&&fo(a,a.next)&&(Mr(a),a=a.next),a}function Pn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!fo(i,i.next)&&at(i.prev,i,i.next)!==0)i=i.next;else{if(Mr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function xr(s,e,t,i,n,r,a){if(!s)return;!a&&r&&function(c,u,d,p){let m=c;do m.z===0&&(m.z=sh(m.x,m.y,u,d,p)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==c);m.prevZ.nextZ=null,m.prevZ=null,function(y){let f,_,g,v,M,A,S,E,N=1;do{for(_=y,y=null,M=null,A=0;_;){for(A++,g=_,S=0,f=0;f<N&&(S++,g=g.nextZ,g);f++);for(E=N;S>0||E>0&&g;)S!==0&&(E===0||!g||_.z<=g.z)?(v=_,_=_.nextZ,S--):(v=g,g=g.nextZ,E--),M?M.nextZ=v:y=v,v.prevZ=M,M=v;_=g}M.nextZ=null,N*=2}while(A>1)}(m)}(s,i,n,r);let o,l,h=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?$0(s,i,n,r):q0(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Mr(s),s=l.next,h=l.next;else if((s=l)===h){a?a===1?xr(s=J0(Pn(s),e,t),e,t,i,n,r,2):a===2&&Z0(s,e,t,i,n,r):xr(Pn(s),e,t,i,n,r,1);break}}function q0(s){let e=s.prev,t=s,i=s.next;if(at(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,d=n>r?n>a?n:a:r>a?r:a,p=o>l?o>h?o:h:l>h?l:h,m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=p&&us(n,o,r,l,a,h,m.x,m.y)&&at(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $0(s,e,t,i){let n=s.prev,r=s,a=s.next;if(at(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,u=r.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,y=o>l?o>h?o:h:l>h?l:h,f=c>u?c>d?c:d:u>d?u:d,_=sh(p,m,e,t,i),g=sh(y,f,e,t,i),v=s.prevZ,M=s.nextZ;for(;v&&v.z>=_&&M&&M.z<=g;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=f&&v!==n&&v!==a&&us(o,c,l,u,h,d,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=y&&M.y>=m&&M.y<=f&&M!==n&&M!==a&&us(o,c,l,u,h,d,M.x,M.y)&&at(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=_;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=f&&v!==n&&v!==a&&us(o,c,l,u,h,d,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=g;){if(M.x>=p&&M.x<=y&&M.y>=m&&M.y<=f&&M!==n&&M!==a&&us(o,c,l,u,h,d,M.x,M.y)&&at(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function J0(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!fo(n,r)&&Od(n,i,i.next,r)&&br(n,r)&&br(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Mr(i),Mr(i.next),i=s=r),i=i.next}while(i!==s);return Pn(i)}function Z0(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&im(a,o)){let l=Fd(a,o);return a=Pn(a,a.next),l=Pn(l,l.next),xr(a,e,t,i,n,r,0),void xr(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function K0(s,e){return s.x-e.x}function Q0(s,e){let t=function(n,r){let a,o=r,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let f=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(f<=h&&f>l&&(l=f,a=o.x<o.next.x?o:o.next,f===h))return a}o=o.next}while(o!==r);if(!a)return null;let u=a,d=a.x,p=a.y,m,y=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&us(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(m=Math.abs(c-o.y)/(h-o.x),br(o,n)&&(m<y||m===y&&(o.x>a.x||o.x===a.x&&em(a,o)))&&(a=o,y=m)),o=o.next;while(o!==u);return a}(s,e);if(!t)return e;let i=Fd(t,s);return Pn(i,i.next),Pn(t,t.next)}function em(s,e){return at(s.prev,s,e.prev)<0&&at(e.next,s,s.next)<0}function sh(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function tm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function us(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function im(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Od(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(s,e)&&(br(s,e)&&br(e,s)&&function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(s,e)&&(at(s.prev,s,e.prev)||at(s,e.prev,e))||fo(s,e)&&at(s.prev,s,s.next)>0&&at(e.prev,e,e.next)>0)}function at(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function fo(s,e){return s.x===e.x&&s.y===e.y}function Od(s,e,t,i){let n=Ea(at(s,e,t)),r=Ea(at(s,e,i)),a=Ea(at(t,i,s)),o=Ea(at(t,i,e));return n!==r&&a!==o||!(n!==0||!Ta(s,t,e))||!(r!==0||!Ta(s,i,e))||!(a!==0||!Ta(t,s,i))||!(o!==0||!Ta(t,e,i))}function Ta(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ea(s){return s>0?1:s<0?-1:0}function br(s,e){return at(s.prev,s,s.next)<0?at(s,e,s.next)>=0&&at(s,s.prev,e)>=0:at(s,e,s.prev)<0||at(s,s.next,e)<0}function Fd(s,e){let t=new rh(s.i,s.x,s.y),i=new rh(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ad(s,e,t,i){let n=new rh(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var rn=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];od(e),ld(i,e);let a=e.length;t.forEach(od);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,ld(i,t[l]);let o=Y0(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function od(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ld(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ah=class s extends tt{constructor(e=new oo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:nm,v,M,A,S,E,N=!1;_&&(v=_.getSpacedPoints(c),N=!0,d=!1,M=_.computeFrenetFrames(c,!1),A=new b,S=new b,E=new b),d||(f=0,p=0,m=0,y=0);let P=o.extractPoints(h),U=P.shape,j=P.holes;if(!rn.isClockWise(U)){U=U.reverse();for(let I=0,k=j.length;I<k;I++){let B=j[I];rn.isClockWise(B)&&(j[I]=B.reverse())}}let C=rn.triangulateShape(U,j),O=U;for(let I=0,k=j.length;I<k;I++){let B=j[I];U=U.concat(B)}function F(I,k,B){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(k,B)}let se=U.length,fe=C.length;function te(I,k,B){let ee,K,x,ne=I.x-k.x,H=I.y-k.y,G=B.x-I.x,re=B.y-I.y,de=ne*ne+H*H,me=ne*re-H*G;if(Math.abs(me)>Number.EPSILON){let ve=Math.sqrt(de),Ee=Math.sqrt(G*G+re*re),ye=k.x-H/ve,be=k.y+ne/ve,Pe=((B.x-re/Ee-ye)*re-(B.y+G/Ee-be)*G)/(ne*re-H*G);ee=ye+ne*Pe-I.x,K=be+H*Pe-I.y;let gt=ee*ee+K*K;if(gt<=2)return new oe(ee,K);x=Math.sqrt(gt/2)}else{let ve=!1;ne>Number.EPSILON?G>Number.EPSILON&&(ve=!0):ne<-Number.EPSILON?G<-Number.EPSILON&&(ve=!0):Math.sign(H)===Math.sign(re)&&(ve=!0),ve?(ee=-H,K=ne,x=Math.sqrt(de)):(ee=ne,K=H,x=Math.sqrt(de/2))}return new oe(ee/x,K/x)}let q=[];for(let I=0,k=O.length,B=k-1,ee=I+1;I<k;I++,B++,ee++)B===k&&(B=0),ee===k&&(ee=0),q[I]=te(O[I],O[B],O[ee]);let ie=[],z,Z=q.concat();for(let I=0,k=j.length;I<k;I++){let B=j[I];z=[];for(let ee=0,K=B.length,x=K-1,ne=ee+1;ee<K;ee++,x++,ne++)x===K&&(x=0),ne===K&&(ne=0),z[ee]=te(B[ee],B[x],B[ne]);ie.push(z),Z=Z.concat(z)}for(let I=0;I<f;I++){let k=I/f,B=p*Math.cos(k*Math.PI/2),ee=m*Math.sin(k*Math.PI/2)+y;for(let K=0,x=O.length;K<x;K++){let ne=F(O[K],q[K],ee);w(ne.x,ne.y,-B)}for(let K=0,x=j.length;K<x;K++){let ne=j[K];z=ie[K];for(let H=0,G=ne.length;H<G;H++){let re=F(ne[H],z[H],ee);w(re.x,re.y,-B)}}}let ue=m+y;for(let I=0;I<se;I++){let k=d?F(U[I],Z[I],ue):U[I];N?(S.copy(M.normals[0]).multiplyScalar(k.x),A.copy(M.binormals[0]).multiplyScalar(k.y),E.copy(v[0]).add(S).add(A),w(E.x,E.y,E.z)):w(k.x,k.y,0)}for(let I=1;I<=c;I++)for(let k=0;k<se;k++){let B=d?F(U[k],Z[k],ue):U[k];N?(S.copy(M.normals[I]).multiplyScalar(B.x),A.copy(M.binormals[I]).multiplyScalar(B.y),E.copy(v[I]).add(S).add(A),w(E.x,E.y,E.z)):w(B.x,B.y,u/c*I)}for(let I=f-1;I>=0;I--){let k=I/f,B=p*Math.cos(k*Math.PI/2),ee=m*Math.sin(k*Math.PI/2)+y;for(let K=0,x=O.length;K<x;K++){let ne=F(O[K],q[K],ee);w(ne.x,ne.y,u+B)}for(let K=0,x=j.length;K<x;K++){let ne=j[K];z=ie[K];for(let H=0,G=ne.length;H<G;H++){let re=F(ne[H],z[H],ee);N?w(re.x,re.y+v[c-1].y,v[c-1].x+B):w(re.x,re.y,u+B)}}}function T(I,k){let B=I.length;for(;--B>=0;){let ee=B,K=B-1;K<0&&(K=I.length-1);for(let x=0,ne=c+2*f;x<ne;x++){let H=se*x,G=se*(x+1);$(k+ee+H,k+K+H,k+K+G,k+ee+G)}}}function w(I,k,B){l.push(I),l.push(k),l.push(B)}function D(I,k,B){L(I),L(k),L(B);let ee=n.length/3,K=g.generateTopUV(i,n,ee-3,ee-2,ee-1);X(K[0]),X(K[1]),X(K[2])}function $(I,k,B,ee){L(I),L(k),L(ee),L(k),L(B),L(ee);let K=n.length/3,x=g.generateSideWallUV(i,n,K-6,K-3,K-2,K-1);X(x[0]),X(x[1]),X(x[3]),X(x[1]),X(x[2]),X(x[3])}function L(I){n.push(l[3*I+0]),n.push(l[3*I+1]),n.push(l[3*I+2])}function X(I){r.push(I.x),r.push(I.y)}(function(){let I=n.length/3;if(d){let k=0,B=se*k;for(let ee=0;ee<fe;ee++){let K=C[ee];D(K[2]+B,K[1]+B,K[0]+B)}k=c+2*f,B=se*k;for(let ee=0;ee<fe;ee++){let K=C[ee];D(K[0]+B,K[1]+B,K[2]+B)}}else{for(let k=0;k<fe;k++){let B=C[k];D(B[2],B[1],B[0])}for(let k=0;k<fe;k++){let B=C[k];D(B[0]+se*c,B[1]+se*c,B[2]+se*c)}}i.addGroup(I,n.length/3-I,0)})(),function(){let I=n.length/3,k=0;T(O,k),k+=O.length;for(let B=0,ee=j.length;B<ee;B++){let K=j[B];T(K,k),k+=K.length}i.addGroup(I,n.length/3-I,1)}()}this.setAttribute("position",new Re(n,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ro[n.type]().fromJSON(n)),new s(i,e.options)}},nm={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new oe(r,a),new oe(o,l),new oe(h,c)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],m=e[3*n+2],y=e[3*r],f=e[3*r+1],_=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new oe(a,1-l),new oe(h,1-u),new oe(d,1-m),new oe(y,1-_)]:[new oe(o,1-l),new oe(c,1-u),new oe(p,1-m),new oe(f,1-_)]}},oh=class s extends Ln{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},lh=class s extends Ln{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Sr=class s extends tt{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new b,m=new oe;for(let y=0;y<=n;y++){for(let f=0;f<=i;f++){let _=r+f/i*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),h.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,c.push(m.x,m.y)}u+=d}for(let y=0;y<n;y++){let f=y*(i+1);for(let _=0;_<i;_++){let g=_+f,v=g,M=g+i+1,A=g+i+2,S=g+1;o.push(v,M,S),o.push(M,A,S)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hh=class s extends tt{constructor(e=new oo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let u=n.length/3,d=c.extractPoints(t),p=d.shape,m=d.holes;rn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,_=m.length;f<_;f++){let g=m[f];rn.isClockWise(g)===!0&&(m[f]=g.reverse())}let y=rn.triangulateShape(p,m);for(let f=0,_=m.length;f<_;f++){let g=m[f];p=p.concat(g)}for(let f=0,_=p.length;f<_;f++){let g=p[f];n.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let f=0,_=y.length;f<_;f++){let g=y[f],v=g[0]+u,M=g[1]+u,A=g[2]+u;i.push(v,M,A),l+=3}}this.setIndex(i),this.setAttribute("position",new Re(n,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},Qe=class s extends tt{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new b,d=new b,p=[],m=[],y=[],f=[];for(let _=0;_<=i;_++){let g=[],v=_/i,M=0;_===0&&a===0?M=.5/t:_===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let S=A/t;u.x=-e*Math.cos(n+S*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(n+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(S+M,1-v),g.push(h++)}c.push(g)}for(let _=0;_<i;_++)for(let g=0;g<t;g++){let v=c[_][g+1],M=c[_][g],A=c[_+1][g],S=c[_+1][g+1];(_!==0||a>0)&&p.push(v,M,S),(_!==i-1||l<Math.PI)&&p.push(M,A,S)}this.setIndex(p),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ch=class s extends Ln{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ln=class s extends tt{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new b,u=new b,d=new b;for(let p=0;p<=i;p++)for(let m=0;m<=n;m++){let y=m/n*r,f=p/i*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(y),u.y=(e+t*Math.cos(f))*Math.sin(y),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=n;m++){let y=(n+1)*p+m-1,f=(n+1)*(p-1)+m-1,_=(n+1)*(p-1)+m,g=(n+1)*p+m;a.push(y,f,g),a.push(f,_,g)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},uh=class s extends tt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],u=new b,d=new b,p=new b,m=new b,y=new b,f=new b,_=new b;for(let v=0;v<=i;++v){let M=v/i*r*Math.PI*2;g(M,r,a,e,p),g(M+.01,r,a,e,m),f.subVectors(m,p),_.addVectors(m,p),y.crossVectors(f,_),_.crossVectors(y,f),y.normalize(),_.normalize();for(let A=0;A<=n;++A){let S=A/n*Math.PI*2,E=-t*Math.cos(S),N=t*Math.sin(S);u.x=p.x+(E*_.x+N*y.x),u.y=p.y+(E*_.y+N*y.y),u.z=p.z+(E*_.z+N*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(v/i),c.push(A/n)}}for(let v=1;v<=i;v++)for(let M=1;M<=n;M++){let A=(n+1)*(v-1)+(M-1),S=(n+1)*v+(M-1),E=(n+1)*v+M,N=(n+1)*(v-1)+M;o.push(A,S,N),o.push(S,E,N)}function g(v,M,A,S,E){let N=Math.cos(v),P=Math.sin(v),U=A/M*v,j=Math.cos(U);E.x=S*(2+j)*.5*N,E.y=S*(2+j)*P*.5,E.z=S*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},dh=class s extends tt{constructor(e=new no(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,h=new oe,c=new b,u=[],d=[],p=[],m=[];function y(f){c=e.getPointAt(f/t,c);let _=a.normals[f],g=a.binormals[f];for(let v=0;v<=n;v++){let M=v/n*Math.PI*2,A=Math.sin(M),S=-Math.cos(M);l.x=S*_.x+A*g.x,l.y=S*_.y+A*g.y,l.z=S*_.z+A*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)y(f);y(r===!1?t:0),function(){for(let f=0;f<=t;f++)for(let _=0;_<=n;_++)h.x=f/t,h.y=_/n,p.push(h.x,h.y)}(),function(){for(let f=1;f<=t;f++)for(let _=1;_<=n;_++){let g=(n+1)*(f-1)+(_-1),v=(n+1)*f+(_-1),M=(n+1)*f+_,A=(n+1)*(f-1)+_;m.push(g,v,A),m.push(v,M,A)}}()})(),this.setIndex(m),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ro[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ph=class extends tt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,r=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let u=l[h],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let y=0;y<3;y++){let f=o.getX(p+y),_=o.getX(p+(y+1)%3);n.fromBufferAttribute(a,f),r.fromBufferAttribute(a,_),hd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),r.fromBufferAttribute(a,u),hd(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function hd(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Ev=Object.freeze({__proto__:null,BoxGeometry:Ft,CapsuleGeometry:yr,CircleGeometry:ws,ConeGeometry:_r,CylinderGeometry:xt,DodecahedronGeometry:ih,EdgesGeometry:nh,ExtrudeGeometry:ah,IcosahedronGeometry:oh,LatheGeometry:ao,OctahedronGeometry:lh,PlaneGeometry:Ss,PolyhedronGeometry:Ln,RingGeometry:Sr,ShapeGeometry:hh,SphereGeometry:Qe,TetrahedronGeometry:ch,TorusGeometry:ln,TorusKnotGeometry:uh,TubeGeometry:dh,WireframeGeometry:ph});var Bt=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Aa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=r)break t;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends Ts{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cu,endingEnd:cu}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case uu:r=e,o=2*t-i;break;case du:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case uu:a=e,l=2*i-t;break;case du:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(n-t),y=m*m,f=y*m,_=-d*f+2*d*y-d*m,g=(1+d)*f+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-p)*f+(1.5+p)*y+.5*m,M=p*f-p*y;for(let A=0;A!==o;++A)r[A]=_*a[c+A]+g*a[h+A]+v*a[l+A]+M*a[u+A];return r}},mh=class extends Ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}},gh=class extends Ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},fi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&sm(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===jo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){let m=t[c+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};fi.prototype.TimeBufferType=Float32Array,fi.prototype.ValueBufferType=Float32Array,fi.prototype.DefaultInterpolation=La;var Sn=class extends fi{};Sn.prototype.ValueTypeName="bool",Sn.prototype.ValueBufferType=Array,Sn.prototype.DefaultInterpolation=Ca,Sn.prototype.InterpolantFactoryMethodLinear=void 0,Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends fi{};vh.prototype.ValueTypeName="color";var yh=class extends fi{};yh.prototype.ValueTypeName="number";var _h=class extends Ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)Qt.slerpFlat(r,0,a,h-o,a,h,l);return r}},or=class extends fi{InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};or.prototype.ValueTypeName="quaternion",or.prototype.DefaultInterpolation=La,or.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends fi{};wn.prototype.ValueTypeName="string",wn.prototype.ValueBufferType=Array,wn.prototype.DefaultInterpolation=Ca,wn.prototype.InterpolantFactoryMethodLinear=void 0,wn.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends fi{};xh.prototype.ValueTypeName="vector";var bh=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let p=h[u],m=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}},rm=new bh,Mh=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Tr=class extends wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_l=new Ce,cd=new b,ud=new b,lo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ud),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sh=class extends lo{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*_s*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;i===t.fov&&n===t.aspect&&r===t.far||(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Es=class extends wr{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dd=new Ce,tr=new b,xl=new b,wh=class extends lo{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),i.position.copy(tr),xl.copy(i.position),xl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xl),i.updateMatrixWorld(),n.makeTranslation(-tr.x,-tr.y,-tr.z),dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd)}},Er=class extends wr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new wh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var Av=new Ce,Rv=new Ce,Cv=new Ce;var ho=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pd(){return(typeof performance>"u"?Date:performance).now()}var Lv=new b,Pv=new Qt,Iv=new b,kv=new b;var Nv=new b,Uv=new Qt,Dv=new b,Ov=new b;var Ih="\\[\\]\\.:\\/",am=new RegExp("["+Ih+"]","g"),bl="[^"+Ih+"]",om="[^"+Ih.replace("\\.","")+"]",lm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bl)+/(WCOD+)?/.source.replace("WCOD",om)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl)+"$"),hm=["material","materials","bones","map"],et=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(am,"")}static parseTrackName(e){let t=lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);hm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=class{constructor(s,e,t){let i=t||et.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray],et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);var Bv=new oe;var zv=new b,Hv=new b;var Gv=new b;var Vv=new b,Wv=new Ce,jv=new Ce;var Xv=new b,Yv=new Ae,qv=new Ae;var $v=new b,Jv=new b,Zv=new b;var Kv=new b,Qv=new cr;var ey=new mi;var ty=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);var Yt={skin:["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],hair:["Bald","Buzz","Short","Mohawk","Man bun","Long","Afro","Braids","Dreadlocks"],hairColor:["#15120f","#3b2416","#6e4524","#c9a25a","#9c3a1a","#9b9b9b"],beard:["None","Stubble","Goatee","Full"],shorts:["#c8102e","#1d4ed8","#151515","#f2f2f2","#15803d","#e8a91c","#7c3aed","#f97316"]},qd=["Red","Blue","Black","White","Green","Gold","Purple","Orange"],$d=["skin","hair","hairColor","beard","shorts"];function Cr(s){let e=String(s||"").split(",").map(Number),t={};return $d.forEach((i,n)=>{let r=Yt[i].length;t[i]=Number.isInteger(e[n])?(e[n]%r+r)%r:0}),t}function Bh(s){return $d.map(e=>s[e]).join(",")}function Ps(s){let e=2166136261;for(let n of String(s))e=Math.imul(e^n.charCodeAt(0),16777619);let t=()=>(e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,(e>>>0)/4294967296),i=n=>Math.floor(t()*Yt[n].length);return{skin:i("skin"),hair:i("hair"),hairColor:Math.floor(t()*5),beard:i("beard"),shorts:i("shorts")}}function zh(){return Ps(Math.random().toString(36))}var Jd=["hips","spine","chest","neck","shL","elL","shR","elR","hipL","knL","hipR","knR"];function Y(s,e={}){let t={hipsPos:[0,0,0]};for(let i of Jd)t[i]=[0,0,0];for(let i of[s,e])if(i)for(let n in i)t[n]=i[n].slice();return t}function Rr(s){let e={};for(let t in s){let i=s[t],n=t.endsWith("L")?t.slice(0,-1)+"R":t.endsWith("R")?t.slice(0,-1)+"L":t;e[n]=t==="hipsPos"?[-i[0],i[1],i[2]]:[i[0],-i[1],-i[2]]}return e}var Hh=Y(null,{hipsPos:[0,-.07,0],hips:[0,-.45,0],spine:[.08,.15,0],chest:[.06,.18,0],neck:[.12,.1,0],shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0],hipL:[-.32,.45,.1],knL:[.42,0,0],hipR:[.22,.35,-.12],knR:[.36,0,0]}),Ve={stance:Hh,relaxed:Y(null,{hipsPos:[0,-.01,0],neck:[.05,0,0],chest:[.02,0,0],shL:[.05,0,.14],elL:[-.35,0,0],shR:[.05,0,-.14],elR:[-.35,0,0],hipL:[0,0,.06],knL:[.04,0,0],hipR:[0,0,-.06],knR:[.04,0,0]}),dejected:Y(null,{hipsPos:[0,-.02,0],spine:[.15,0,0],neck:[.55,0,0],shL:[.1,0,.08],elL:[-.25,0,0],shR:[-.6,0,-.1],elR:[-2.1,0,0],hipL:[0,0,.05],knL:[.05,0,0],hipR:[0,0,-.05],knR:[.05,0,0]}),victory:Y(null,{hipsPos:[0,0,0],chest:[-.15,0,0],neck:[-.35,0,0],shL:[-2.75,0,.45],elL:[-.25,0,0],shR:[-2.75,0,-.45],elR:[-.25,0,0],hipL:[0,0,.12],hipR:[0,0,-.12]}),top:Y(null,{hipsPos:[0,-.46,0],spine:[.55,0,0],chest:[.3,0,0],neck:[-.35,0,0],shL:[-1.2,0,.35],elL:[-.7,0,0],shR:[-1.2,0,-.35],elR:[-.7,0,0],hipL:[-.1,0,.3],knL:[1.75,0,0],hipR:[-.1,0,-.3],knR:[1.75,0,0]}),bottom:Y(null,{hipsPos:[0,-.8,0],hips:[-1.42,0,0],spine:[-.05,0,0],neck:[.55,0,0],shL:[-1.5,0,.3],elL:[-.9,0,0],shR:[-1.5,0,-.3],elR:[-.9,0,0],hipL:[-1.15,0,.5],knL:[1.45,0,0],hipR:[-1.15,0,-.5],knR:[1.45,0,0]}),down:Y(null,{hipsPos:[0,-.84,0],hips:[-1.52,.1,0],neck:[.1,.5,0],shL:[-.4,0,1.25],elL:[-.4,0,0],shR:[-.3,0,-1.1],elR:[-.9,0,0],hipL:[-.15,0,.18],knL:[.25,0,0],hipR:[-.45,0,-.1],knR:[.9,0,0]}),sitting:Y(null,{hipsPos:[0,-.78,0],hips:[-.35,0,0],spine:[.25,0,0],neck:[.3,0,0],shL:[.6,0,.35],elL:[-.2,0,0],shR:[.6,0,-.35],elR:[-.2,0,0],hipL:[-1,0,.2],knL:[1.6,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0]}),ref:Y(null,{hipsPos:[0,-.02,0],neck:[.05,0,0],shL:[-.15,0,.12],elL:[-1.3,0,0],shR:[-.15,0,-.12],elR:[-1.3,0,0],hipL:[0,0,.08],knL:[.08,0,0],hipR:[0,0,-.08],knR:[.08,0,0]})};Ve.refRaise=Y(Ve.ref,{shR:[-2.75,0,-.45],elR:[-.2,0,0],neck:[-.1,0,0]});var _e=Hh,zd=Y(_e,{shL:[-1.6,.05,.02],elL:[-.05,0,0],chest:[.08,-.12,0],spine:[.12,.05,0]}),Oh=Y(_e,{shR:[-1.62,-.1,.05],elR:[-.05,0,0],chest:[.12,.55,0],spine:[.15,.35,0],hipR:[.3,.6,-.1],hipsPos:[0,-.09,.06]}),cm=Y(_e,{shL:[-.25,0,1.45],elL:[-1.55,0,0],chest:[.1,-.45,-.05],spine:[.1,-.2,0]}),Hd=Y(_e,{chest:[.1,.35,0],shL:[-.5,0,.9],elL:[-1.6,0,0]}),um=Y(_e,{hipsPos:[0,-.14,0],shR:[.25,0,-.15],elR:[-1.5,0,0],chest:[.25,.3,0]}),dm=Y(_e,{hipsPos:[0,-.04,.04],shR:[-1.15,0,-.05],elR:[-1.85,0,0],chest:[-.12,.45,0]}),pm=Y(_e,{shR:[-1.6,0,-.9],elR:[-1.2,0,0],chest:[0,-.2,.15]}),fm=Y(_e,{shR:[-2.05,.2,-.25],elR:[-.35,0,0],chest:[.4,.6,-.1],spine:[.25,.3,0],hipsPos:[0,-.12,.1]}),kh=Y(_e,{hips:[0,.2,0],hipR:[-.4,.3,-.5],knR:[1.4,0,0],shR:[.4,0,-.5],elR:[-.6,0,0]}),vo=Y(_e,{hipsPos:[0,-.04,0],hips:[0,.75,-.15],spine:[0,0,.25],chest:[.05,-.3,.12],hipL:[0,.4,.06],knL:[.12,0,0],hipR:[-.2,.85,-1.35],knR:[.15,0,0],shR:[.6,0,-.55],elR:[-.4,0,0],shL:[-.9,0,.3],elL:[-2,0,0]}),yo=Y(vo,{hips:[0,.75,-.35],spine:[0,0,.45],hipR:[-.2,.85,-1.95],knR:[.05,0,0]}),mm=Y(_e,{hipsPos:[0,-.1,0],hips:[0,.55,0],chest:[.1,-.25,.05],hipR:[-.3,.9,-.75],knR:[.25,0,0],shR:[.5,0,-.4],elR:[-.6,0,0]}),Zd=Y(_e,{hipsPos:[0,0,.12],hips:[0,-.1,0],spine:[-.15,0,0],neck:[.3,0,0],shL:[-1.55,0,-.15],elL:[-1.15,0,0],shR:[-1.55,0,.15],elR:[-1.15,0,0],hipR:[-1.75,0,0],knR:[1.9,0,0],hipL:[0,0,.06],knL:[.08,0,0]}),gm=Y(Zd,{hipsPos:[0,.38,.25],hipL:[.5,0,.1],knL:[1.4,0,0],shL:[-.4,0,.6],elL:[-1.2,0,0]}),vm=Y(_e,{hipsPos:[0,-.15,0],spine:[.2,0,-.35],chest:[.15,0,-.2],neck:[.15,0,-.2]}),Ls=Y(null,{hipsPos:[0,-.42,.25],hips:[.25,0,0],spine:[.75,0,0],chest:[.25,0,0],neck:[-.7,0,0],shL:[-1.35,0,.25],elL:[-.55,0,0],shR:[-1.35,0,-.25],elR:[-.55,0,0],hipL:[-1.15,0,.12],knL:[1.65,0,0],hipR:[.35,0,-.1],knR:[1.6,0,0]}),ym=Y(null,{hipsPos:[0,-.55,-.15],hips:[.95,0,0],spine:[.2,0,0],neck:[-.6,0,0],shL:[-1.7,0,.3],elL:[-.4,0,0],shR:[-1.7,0,-.3],elR:[-.4,0,0],hipL:[.35,0,.3],knL:[.25,0,0],hipR:[.35,0,-.3],knR:[.25,0,0]}),vi=Y(_e,{shL:[-1.7,0,-.2],elL:[-1.3,0,0],shR:[-1.7,0,.2],elR:[-1.3,0,0],spine:[.35,0,0],neck:[.25,0,0],hipsPos:[0,-.1,.1]}),_m=Y(_e,{shL:[-1.45,0,0],elL:[-.15,0,0],shR:[-1.45,0,0],elR:[-.15,0,0],chest:[.1,0,0]}),xm=Ve.top,Kd=Ve.bottom,Nh=s=>Y(s,{shL:[-.6,0,1],elL:[-.3,0,0]}),Uh=s=>Y(s,{shL:[-.2,0,1.25],elL:[-.1,0,0]}),bm=Y(Kd,{shL:[-1.2,0,-.2],elL:[-2.1,0,0],shR:[-1.2,0,.2],elR:[-2.1,0,0],neck:[.3,0,0]});function Gd(s,e){return e?Rr(s):s}function Xe(s,e){let t=Y(s);for(let i in e)for(let n=0;n<3;n++)t[i][n]+=e[i][n];return t}var Mm=-.45-Math.PI*2,Sm={shL:[-.85,0,.18],elL:[-1.75,0,0],shR:[-.45,0,-.2],elR:[-2.3,0,0]},lt=(s,e={})=>Y(_e,{spine:[.1,0,0],chest:[.05,0,0],...Sm,hips:[0,s,0],...e}),Lr=Y(_e,{hips:[0,Mm,0]}),wm=s=>[[lt(-1.7,{neck:[.1,1.2,0],hipsPos:[0,-.06,0]}),.08,24],[lt(-2.7,{spine:[.35,0,0],neck:[0,1.1,0],hipR:[-1.3,0,0],knR:[2,0,0],hipL:[-.1,0,0],knL:[.3,0,0]}),.08,26],[lt(-Math.PI,{spine:[s?.85:.55,0,0],chest:[.2,0,0],neck:[s?-.9:-.5,0,0],hipR:[s?1.85:1.4,0,0],knR:[.04,0,0],hipL:[-.15,0,0],knL:[.25,0,0]}),.22,30,s?"head":"body"],[lt(-4.4,{hipR:[-.9,0,0],knR:[1.8,0,0]}),.1,18],[lt(-5.6),.07,18],[Lr,.08,16]],Tm=[[lt(-1.7,{neck:[.1,1.2,0]}),.08,24],[lt(-3.1,{hips:[0,-3.1,.25],hipR:[.1,0,-1],knR:[.7,0,0],neck:[0,1,0]}),.08,24],[lt(-4.5,{hips:[0,-4.5,.5],spine:[0,0,.2],hipR:[-.1,0,-1.85],knR:[.04,0,0],hipL:[0,0,.1],knL:[.25,0,0]}),.14,28,"hook"],[lt(-5.5,{hipR:[.1,0,-.6],knR:[.6,0,0]}),.09,18],[Lr,.1,16]],Em=s=>{let e=s?{hipsPos:[0,.3,.1],hipL:[-1,0,0],knL:[1.6,0,0],hipR:[-.6,0,0],knR:[1.4,0,0]}:{};return[[lt(-1.8,{neck:[.1,1.2,0],hipsPos:[0,s?-.18:-.05,0]}),.08,24],[lt(-3.2,{...e,neck:[0,1,0],shR:[-.6,0,-.9],elR:[-1.2,0,0]}),.07,26],[lt(-4.6,{...e,shR:[-.1,0,-1.55],elR:[-.1,0,0],chest:[0,-.2,0]}),.16,30,"hook"],[lt(-5.7),.08,18],[Lr,.08,16]]},Am=[[lt(-1.8,{neck:[.1,1.2,0]}),.08,24],[lt(-3.3,{neck:[0,1,0],shR:[-.2,0,-1.2],elR:[-2.4,0,0]}),.07,26],[lt(-4.3,{shR:[-.15,.4,-1.5],elR:[-2.55,0,0],chest:[.1,-.25,0]}),.16,30,"hook"],[lt(-5.6),.08,18],[Lr,.08,16]],Rm=[[lt(-1.6,{hipsPos:[0,-.15,0],knL:[.7,0,0],knR:[.7,0,0]}),.08,22],[lt(-3,{hipsPos:[0,.3,.1],hipL:[-1.3,0,.1],knL:[1.9,0,0],hipR:[-.3,0,0],knR:[1,0,0]}),.08,24],[lt(-4.5,{hipsPos:[0,.42,.15],hipL:[-1,0,.1],knL:[1.9,0,0],hipR:[-1.2,0,-.9],knR:[.5,0,0]}),.08,24],[lt(-5.9,{hipsPos:[0,.38,.2],spine:[-.15,0,.2],hipL:[-.6,0,.1],knL:[1.8,0,0],hipR:[-2.1,0,-.55],knR:[.04,0,0]}),.14,28,"hook"],[lt(-6.5,{hipsPos:[0,.05,0],hipR:[-.6,0,0],knR:[.8,0,0]}),.1,18],[Lr,.08,16]],mo=(s,e={})=>Y(null,{hips:[0,-1.57,s],...e}),Cm=[[Y(_e,{hips:[0,-1.4,0],hipsPos:[0,-.12,0],shL:[-2.9,0,.2],shR:[-2.9,0,-.2],elL:[-.1,0,0],elR:[-.1,0,0]}),.1,18],[mo(-1.5,{hipsPos:[0,-.05,0],shL:[0,0,2.9],shR:[0,0,-2.9],hipL:[0,0,.6],hipR:[0,0,-.9]}),.1,22],[mo(-3.1,{hipsPos:[0,.05,0],shL:[0,0,2.95],shR:[0,0,-2.95],hipL:[0,0,1],hipR:[0,0,-1]}),.1,22],[mo(-4.3,{hipsPos:[0,.05,0],shL:[0,0,2.2],shR:[0,0,-2.6],hipL:[0,0,1.25],knL:[.04,0,0],hipR:[0,0,-.5]}),.16,28,"head"],[mo(-5.6,{hipsPos:[0,-.15,0],hipL:[0,0,.5],knL:[.6,0,0],shL:[-1,0,.6],shR:[-1,0,-.6]}),.1,18],[Y(_e,{hips:[0,-.45,-Math.PI*2]}),.1,16]],go=(s,e={})=>Y(null,{hips:[s,-.2,0],...e}),Lm=[[Y(_e,{hipsPos:[0,-.2,0],spine:[.4,0,0],knL:[.8,0,0],knR:[.8,0,0]}),.1,18],[go(1.5,{hipsPos:[0,-.3,.1],shL:[-2.8,0,.3],shR:[-2.8,0,-.3],hipL:[.3,0,0],hipR:[.3,0,0]}),.1,22],[go(3,{hipsPos:[0,-.2,.2],shL:[-2.9,0,.3],shR:[-2.9,0,-.3],hipL:[-.3,0,.2],hipR:[.1,0,-.2]}),.1,22],[go(4.3,{hipsPos:[0,-.05,.3],hipR:[-.5,0,-.1],knR:[.04,0,0],hipL:[-1.4,0,.1],knL:[1.6,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.16,28,"head"],[go(5.6,{hipsPos:[0,-.2,.2],hipL:[-.4,0,0],knL:[.8,0,0],hipR:[-.6,0,0],knR:[.9,0,0]}),.1,18],[Y(_e,{hips:[Math.PI*2,-.45,0]}),.1,16]],Pm=[[Y(_e,{hipsPos:[0,-.1,0],hipR:[-1.2,.2,0],knR:[1.5,0,0],shR:[.2,0,-.3],elR:[-1.4,0,0]}),.12,20],[Y(Oh,{hipsPos:[0,.22,.2],spine:[.35,.35,0],chest:[.15,.5,0],hipR:[.8,.3,-.1],knR:[.7,0,0],hipL:[-.4,0,.1],knL:[.9,0,0]}),.2,26,"head"]],Vd=s=>[[Y(_e,{hips:[0,-.1,0],spine:[-.05,0,0],chest:[0,0,0],hipR:[-1.7,0,0],knR:[2,0,0]}),.1,22],[Y(_e,{hips:[s?-.3:-.12,-.05,0],spine:[s?-.15:0,0,0],chest:[0,0,0],hipR:[s?-2.25:-1.55,0,0],knR:[.03,0,0],hipL:[.15,0,.05],knL:[.15,0,0]}),.2,28,s?"head":"body"]],Im=[[Y(_e,{hipL:[-1.6,0,0],knL:[1.9,0,0],hipsPos:[0,-.05,0]}),.1,22],[Y(_e,{hips:[-.12,-.35,0],hipL:[-1.55,0,0],knL:[.03,0,0],hipR:[.2,.35,-.1],knR:[.1,0,0]}),.2,28,"body"]],km=[[Y(_e,{hipL:[-.9,0,.1],knL:[1.3,0,0]}),.09,22],[Y(_e,{hips:[-.1,-.2,0],hipL:[-.75,-.6,.1],knL:[.04,0,0],spine:[0,0,0]}),.18,28,"leg"]],Nm=[[Y(_e,{hips:[-.3,-.2,0],spine:[-.15,0,0],hipR:[-2.85,0,-.35],knR:[.1,0,0],hipL:[.15,0,0],knL:[.1,0,0]}),.2,14],[Y(_e,{hips:[.15,-.2,0],spine:[.35,0,0],hipR:[-1.1,0,0],knR:[.04,0,0]}),.18,26,"head"]],Um=[[Y(_e,{hips:[0,-.9,-.35],hipL:[-1.3,0,.5],knL:[1.7,0,0],spine:[0,0,-.2]}),.1,22],[Y(_e,{hips:[0,-1.1,-.45],hipL:[-1,0,1.75],knL:[.04,0,0],spine:[0,0,-.25]}),.08,26],[Y(_e,{hips:[0,-.8,-.45],hipL:[-1.5,0,1.55],knL:[1.3,0,0],spine:[0,0,-.25]}),.16,26,"hook"]],Dm=[[Y(_e,{hips:[0,.35,0],hipR:[-.5,.6,-.45],knR:[1.3,0,0]}),.12,20],[Y(vo,{hips:[0,.95,-.55],hipR:[-.55,.85,-2.1],knR:[1.1,0,0]}),.08,22],[Y(yo,{hips:[0,.9,-.55],hipR:[-.45,.85,-2.25],knR:[.04,0,0]}),.22,30,"hook"]],Wd=Y(Rr(_e),{hipsPos:[0,-.04,0]}),jd=s=>[[s?Y(Wd,{hipsPos:[0,-.2,0],knL:[.9,0,0],knR:[.9,0,0]}):Wd,.1,22],[s?Y(Rr(yo),{hipsPos:[0,.35,.1],hipR:[-1.2,0,0],knR:[1.8,0,0]}):Rr(vo),.24,24,s?"hook":"body"]],Om=[[Y(_e,{hipsPos:[0,.2,.1],hipL:[-1.4,0,0],knL:[1.6,0,0],shL:[-.6,0,.5],elL:[-1,0,0]}),.14,18],[Y(yo,{hipsPos:[0,.5,.2],hipL:[.5,0,.1],knL:[1.2,0,0]}),.24,26,"hook"]];function _o(s,e=1,t=!1,i=null){let n=String(s||"").toLowerCase();if(t)return Fm(n,e,i||Ve.top);let r=[zd,.14,26,"head"],a=[Oh,.18,26,"head"],o=[cm,.18,24,"hook"],l=[_e,.06,26];if(n.includes("spinning back kick"))return{frames:wm(!n.includes("body")),fwd:.25};if(n.includes("spinning heel kick"))return{frames:Tm,fwd:.15};if(n.includes("spinning back elbow"))return{frames:Am,fwd:.3};if(n.includes("spinning back fist")||n.includes("spinning"))return{frames:Em(n.includes("jumping")),fwd:n.includes("jumping")?.45:.2};if(n.includes("tornado"))return{frames:Rm,fwd:.3,lungeFor:.5};if(n.includes("cartwheel"))return{frames:Cm,fwd:.55,lungeFor:.7};if(n.includes("rolling thunder"))return{frames:Lm,fwd:.6,lungeFor:.7};if(n.includes("superman"))return{frames:Pm,fwd:.6,lungeFor:.4};if(n.includes("front kick to the face"))return{frames:Vd(!0),fwd:.1};if(n.includes("front kick"))return{frames:Vd(!1),fwd:.1};if(n.includes("teep"))return{frames:Im,fwd:.05};if(n.includes("oblique"))return{frames:km,fwd:.05};if(n.includes("axe kick"))return{frames:Nm,fwd:.1};if(n.includes("hook kick"))return{frames:Um,fwd:.1};if(n.includes("question mark"))return{frames:Dm,fwd:.1};if(n.includes("showtime"))return{frames:Om,fwd:.5,lungeFor:.45};if(n.includes("jumping switch kick"))return{frames:jd(!0),fwd:.35,lungeFor:.4};if(n.includes("switch kick"))return{frames:jd(!1),fwd:.1};if(n.includes("head kick"))return{frames:[[kh,.12,16],[yo,.3,20,"hook"]],fwd:.1};if(n.includes("body kick"))return{frames:[[kh,.12,16],[vo,.3,20,"body"]],fwd:.1};if(n.includes("leg kick")||n.includes("calf kick"))return{frames:[[kh,.1,16],[mm,.26,20,"leg"]]};if(n.includes("flying knee"))return{frames:[[Y(_e,{hipsPos:[0,-.2,0]}),.15,16],[gm,.35,16,"head"]],fwd:.55};if(n.includes("knee"))return{frames:[[vi,.2,14],[Zd,.24,20,"body"]],fwd:.35};if(n.includes("uppercut"))return{frames:[[um,.14,18],[dm,.22,24,"head"]],fwd:.15};if(n.includes("overhand")||n.includes("right hand"))return{frames:[[pm,.16,16],[fm,.24,24,"head"]],fwd:.3};if(n.includes("1-2"))return{frames:[r,l,a,l,[Hd,.08,20],o],fwd:.2};if(n.includes("hook"))return{frames:[[Hd,.12,18],o],fwd:.15};if(n.includes("straight left"))return{frames:[[Rr(Oh),.2,24,"head"]],fwd:.25};if(n.includes("jab")&&!n.includes("cross")&&e<2)return{frames:[[zd,.16,28,"head"]],fwd:.15};let h=[r,l,a];for(let c=2;c<Math.min(e,5);c++)h.push(l,c%2?o:a);return{frames:h,fwd:.25}}function Fm(s,e,t){let i=t===Ve.sideTop,n=t===Ve.backTop,r,a;if(n)r=Xe(t,{chest:[0,-.3,0]}),Object.assign(r,Y(r,{shR:[-1,0,-1.3],elR:[-1.5,0,0]})),a=Xe(t,{chest:[.1,.35,0]}),Object.assign(a,Y(a,{shR:[-1.6,0,-.15],elR:[-.3,0,0]}));else{if(i||s.includes("elbow"))return r=Y(Xe(t,{spine:[-.25,0,0]}),{shR:[-2.9,0,-.5],elR:[-2.6,0,0]}),a=Y(Xe(t,{spine:[.25,0,0],chest:[.15,.3,0]}),{shR:[-1.3,0,-.3],elR:[-2.6,0,0]}),{frames:[[r,.2,14],[a,.16,26,"ground"]]};r=Y(Xe(t,{spine:[-.35,0,0]}),{shR:[-2.6,0,-.3],elR:[-1.6,0,0]}),a=Y(Xe(t,{spine:[.3,0,0],chest:[.15,.25,0]}),{shR:[-1.05,0,-.1],elR:[-.1,0,0]})}let o=[];for(let l=0;l<Math.min(Math.max(e,1),4);l++){let h=l%2===1;o.push([Gd(r,h),.13,18],[Gd(a,h),.12,28,"ground"])}return{frames:o}}function Bm(s,e=1){let t=e;switch(s){case"body":return{chest:[.45*t,0,0],spine:[.25*t,0,0],neck:[.2*t,0,0],hipsPos:[0,-.05*t,-.08*t]};case"leg":return{knL:[.6*t,0,0],hipL:[.2*t,0,0],hipsPos:[0,-.07*t,0]};case"ground":return{neck:[0,.7*t,0],chest:[0,.2*t,0]};case"hook":return{neck:[-.15*t,.75*t,.25*t],chest:[-.1*t,.25*t,0],hipsPos:[0,0,-.05*t]};default:return{neck:[-.6*t,.15*t,0],chest:[-.28*t,0,0],spine:[-.12*t,0,0],hipsPos:[0,0,-.1*t]}}}Object.assign(Ve,{halfTop:Y(xm,{hipsPos:[0,-.5,.05],spine:[.85,.2,0],chest:[.25,0,0],neck:[-.4,0,0],shL:[-1.4,0,.5],elL:[-.9,0,0],shR:[-1,0,-.6],elR:[-1.3,0,0],hipL:[-.3,0,.35],knL:[1.8,0,0],hipR:[.1,0,-.25],knR:[1.5,0,0]}),halfBottom:Y(Kd,{hips:[-1.42,.35,.15],shL:[-1.7,0,.4],elL:[-1.6,0,0],shR:[-1.2,0,-.2],elR:[-2,0,0],hipL:[-.9,0,.35],knL:[1.7,0,0],hipR:[-.5,0,-.2],knR:[1.5,0,0]}),mountTop:Y(null,{hipsPos:[0,-.52,0],spine:[.15,0,0],chest:[.05,0,0],neck:[.15,0,0],shL:[-.9,0,.35],elL:[-1.2,0,0],shR:[-.9,0,-.35],elR:[-1.2,0,0],hipL:[-.4,0,.62],knL:[1.7,0,0],hipR:[-.4,0,-.62],knR:[1.7,0,0]}),mountBottom:Y(null,{hipsPos:[0,-.83,0],hips:[-1.52,0,0],neck:[.45,0,0],shL:[-1.8,0,.25],elL:[-1.9,0,0],shR:[-1.8,0,-.25],elR:[-1.9,0,0],hipL:[-.7,0,.25],knL:[1.4,0,0],hipR:[-.7,0,-.25],knR:[1.4,0,0]}),sideTop:Y(null,{hipsPos:[0,-.5,0],spine:[1.15,0,0],chest:[.3,0,0],neck:[-.6,0,0],shL:[-1,0,-.5],elL:[-1,0,0],shR:[-1.2,0,.4],elR:[-1.4,0,0],hipL:[-.1,0,.35],knL:[1.75,0,0],hipR:[.25,0,-.25],knR:[1.5,0,0]}),sideBottom:Y(null,{hipsPos:[0,-.83,0],hips:[-1.5,.2,0],neck:[.4,.4,0],shL:[-1.9,0,-.2],elL:[-2.2,0,0],shR:[-1.6,0,-.3],elR:[-1.8,0,0],hipL:[-.9,0,.2],knL:[1.6,0,0],hipR:[-.5,0,-.2],knR:[1.2,0,0]}),backTop:Y(null,{hipsPos:[0,-.75,0],hips:[-.55,0,0],spine:[.4,0,0],chest:[.2,0,0],neck:[.1,0,0],shL:[-1.5,0,-.35],elL:[-1.7,0,0],shR:[-1.5,0,.35],elR:[-1.7,0,0],hipL:[-1,0,.6],knL:[1.2,0,0],hipR:[-1,0,-.6],knR:[1.2,0,0]}),backBottom:Y(null,{hipsPos:[0,-.78,0],hips:[-.3,0,0],spine:[.15,0,0],neck:[.1,0,0],shL:[-1.9,0,-.3],elL:[-1.9,0,0],shR:[-1.9,0,.3],elR:[-1.9,0,0],hipL:[-1.2,0,.15],knL:[1,0,0],hipR:[-1.2,0,-.15],knR:[1,0,0]}),headlockTop:Y(null,{hipsPos:[0,-.32,0],hips:[.3,0,0],spine:[.55,0,0],chest:[.2,0,0],neck:[-.5,0,0],shL:[-1,0,-.45],elL:[-1.7,0,0],shR:[-1,0,.45],elR:[-1.7,0,0],hipL:[-1.3,0,.25],knL:[1.75,0,0],hipR:[.4,0,-.2],knR:[1.65,0,0]}),headlockBottom:Y(null,{hipsPos:[0,-.5,0],hips:[.2,0,0],spine:[1.05,0,0],chest:[.25,0,0],neck:[-.2,0,0],shL:[-1.1,0,.2],elL:[-1.2,0,0],shR:[-1.1,0,-.2],elR:[-1.2,0,0],hipL:[-.25,0,.15],knL:[1.75,0,0],hipR:[-.25,0,-.15],knR:[1.75,0,0]}),legsTop:Y(null,{hipsPos:[0,-.78,0],hips:[-.45,0,0],spine:[.2,0,0],neck:[.2,0,0],shL:[.5,0,.4],elL:[-.3,0,0],shR:[.5,0,-.4],elR:[-.3,0,0],hipL:[-.9,0,.4],knL:[1.7,0,0],hipR:[-1.15,0,-.05],knR:[.05,0,0]}),legsBottom:Y(null,{hipsPos:[0,-.8,0],hips:[-1.35,.3,0],neck:[.5,0,0],shL:[-1.2,0,-.4],elL:[-2,0,0],shR:[-1.2,0,.4],elR:[-2,0,0],hipL:[-1.3,0,.6],knL:[1.2,0,0],hipR:[-.9,0,-.2],knR:[1.5,0,0]}),armbarTop:Y(null,{hipsPos:[0,-.82,0],hips:[-1.45,0,0],neck:[.5,0,0],shL:[-1.3,0,-.3],elL:[-1.3,0,0],shR:[-1.3,0,.3],elR:[-1.3,0,0],hipL:[-1.25,0,.25],knL:[.5,0,0],hipR:[-1.25,0,-.25],knR:[.5,0,0]})});Ve.armbarBottom=Y(Ve.mountBottom,{shL:[-1.6,0,.5],elL:[-.05,0,0],shR:[-1.6,0,-.4],elR:[-1.2,0,0],hipL:[-.2,0,.2],knL:[.4,0,0]});var Gh={guard:["top","bottom"],half:["halfTop","halfBottom"],side:["sideTop","sideBottom"],mount:["mountTop","mountBottom"],back:["backTop","backBottom"],headlock:["headlockTop","headlockBottom"],legs:["legsTop","legsBottom"],armbar:["armbarTop","armbarBottom"]};function Xt(s,e,t,i,n){return Ve[s+"Att"]=e,Ve[s+"Def"]=i,{att:[[e,.3,8],[t,.35,6],[e,.25,8],[t,.45,6]],def:[[i,.3,9],[n,.3,9],[i,.3,9],[n,.35,9]],attHold:s+"Att",defHold:s+"Def"}}var ot=(s,e)=>Y(Ve[s],e),Nt={rnc:(()=>{let s=ot("backTop",{shR:[-1.5,0,.75],elR:[-2.2,0,0],shL:[-1.7,0,-.45],elL:[-2.4,0,0],neck:[.3,-.4,0]}),e=ot("backBottom",{shL:[-2.4,0,-.6],elL:[-1.6,0,0],shR:[-2.4,0,.6],elR:[-1.6,0,0],neck:[-.4,0,0]});return{layout:"back",...Xt("rnc",s,Xe(s,{hips:[-.2,0,0],spine:[-.2,0,0]}),e,Xe(e,{neck:[-.2,0,0],hipL:[.5,0,0],knL:[-.6,0,0]}))}})(),armTriangle:(()=>{let s=ot("sideTop",{spine:[1.35,0,0],neck:[.4,0,0],shL:[-1.3,0,-.7],elL:[-2.1,0,0],shR:[-1.3,0,.7],elR:[-2.1,0,0]}),e=ot("sideBottom",{shL:[-2.9,0,-.6],elL:[-.4,0,0],shR:[-1.5,0,-.3],elR:[-1.2,0,0],neck:[.3,.6,0]});return{layout:"side",...Xt("armTri",s,Xe(s,{hipsPos:[0,-.05,0],hipL:[-.4,0,0],hipR:[-.3,0,0]}),e,Xe(e,{hipL:[.4,0,0],neck:[-.2,0,0]}))}})(),kimuraTop:(()=>{let s=ot("sideTop",{spine:[.8,0,0],shL:[-1,0,-.2],elL:[-1.6,0,0],shR:[-1,0,.4],elR:[-1.6,0,0]}),e=ot("sideBottom",{shL:[-.6,0,1.3],elL:[-1.8,0,0]});return{layout:"side",...Xt("kimT",s,Xe(s,{chest:[0,.4,0],spine:[-.2,0,0]}),e,Y(e,{shL:[.3,0,1.4],hips:[-1.5,-.3,0]}))}})(),americana:(()=>{let s=ot("sideTop",{spine:[1.1,0,0],shL:[-1.4,0,-.2],elL:[-.6,0,0],shR:[-1.4,0,.3],elR:[-.8,0,0]}),e=ot("sideBottom",{shL:[-.2,0,1.5],elL:[-1.6,0,0]});return{layout:"side",...Xt("amer",s,Xe(s,{spine:[.15,0,0],chest:[0,.25,0]}),e,Y(e,{shL:[0,0,1.75]}))}})(),darce:(()=>{let s=ot("headlockTop",{hips:[.3,.5,0],spine:[1,0,0],shL:[-1.2,0,-.6],elL:[-2,0,0],shR:[-1.2,0,.6],elR:[-2,0,0]}),e=ot("headlockBottom",{shL:[-2.6,0,-.4],elL:[-.8,0,0],neck:[.2,.4,0]});return{layout:"headlock",...Xt("darce",s,Xe(s,{chest:[-.2,.4,0],hipsPos:[0,-.1,0]}),e,Xe(e,{spine:[.2,0,0]}))}})(),guillotineTop:(()=>{let s=ot("headlockTop",{hipsPos:[0,-.15,0],spine:[.5,0,0],shL:[-1,0,-.6],elL:[-2.1,0,0],shR:[-1,0,.6],elR:[-2.1,0,0]}),e=ot("headlockBottom",{spine:[.8,0,0],neck:[-.2,0,0],shL:[-1.6,0,-.4],elL:[-1.6,0,0],shR:[-1.6,0,.4],elR:[-1.6,0,0]});return{layout:"headlock",...Xt("guilT",s,Xe(s,{hips:[-.35,0,0],spine:[-.3,0,0],hipsPos:[0,.08,0]}),e,Xe(e,{spine:[-.2,0,0],hipsPos:[0,.08,0]}))}})(),armbarTop:(()=>{let s=Ve.armbarTop,e=Ve.armbarBottom;return{layout:"armbar",...Xt("abT",s,Xe(s,{hips:[-.15,0,0],hipsPos:[0,.05,0],neck:[.2,0,0]}),e,Xe(e,{hips:[0,.2,0],knR:[.5,0,0]}))}})(),triangle:(()=>{let s=ot("bottom",{hips:[-1.35,0,0],hipL:[-1.85,0,.35],knL:[1.75,0,0],hipR:[-1.6,0,-.3],knR:[1.3,0,0],shL:[-1.9,0,-.1],elL:[-1.2,0,0],shR:[-1.9,0,.1],elR:[-1.2,0,0]}),e=ot("top",{hipsPos:[0,-.42,0],spine:[.95,0,0],chest:[.3,0,0],neck:[.5,0,0],shL:[-.6,0,.3],elL:[-1.2,0,0],shR:[-1.3,0,-.4],elR:[-.2,0,0]});return{layout:"guard",...Xt("tri",s,Xe(s,{hipL:[-.2,0,0],knL:[.15,0,0],hips:[.15,0,0]}),e,Xe(e,{spine:[-.25,0,0],neck:[-.2,0,0]}))}})(),armbarBottom:(()=>{let s=ot("bottom",{hips:[-1.4,.6,0],hipL:[-2.2,0,.35],knL:[.6,0,0],hipR:[-1.3,0,-.5],knR:[1.6,0,0],shL:[-1.6,0,.2],elL:[-.8,0,0],shR:[-1.6,0,-.2],elR:[-.8,0,0]}),e=ot("top",{spine:[.5,0,0],neck:[.3,0,0],shR:[-1.4,0,0],elR:[0,0,0]});return{layout:"guard",...Xt("abB",s,Xe(s,{hips:[-.15,0,0],hipsPos:[0,.08,0]}),e,Xe(e,{spine:[.4,0,0]}))}})(),guillotineBottom:(()=>{let s=ot("bottom",{hips:[-1.2,0,0],spine:[.3,0,0],neck:[.4,0,0],shL:[-1.4,0,-.6],elL:[-2.1,0,0],shR:[-1.4,0,.6],elR:[-2.1,0,0],hipL:[-1.2,0,.5],knL:[1.5,0,0],hipR:[-1.2,0,-.5],knR:[1.5,0,0]}),e=ot("top",{hipsPos:[0,-.48,0],spine:[1.1,0,0],chest:[.35,0,0],neck:[.5,0,0],shL:[-1.2,0,.1],elL:[-1.6,0,0],shR:[-1.2,0,-.1],elR:[-1.6,0,0]});return{layout:"guard",...Xt("guilB",s,Xe(s,{hips:[-.25,0,0],spine:[-.4,0,0]}),e,Xe(e,{spine:[.15,0,0]}))}})(),kimuraBottom:(()=>{let s=ot("bottom",{hips:[-.8,.5,0],spine:[.3,0,0],shL:[-1.1,0,-.3],elL:[-1.7,0,0],shR:[-1.3,0,.4],elR:[-1.6,0,0]}),e=ot("top",{spine:[.8,0,0],hips:[0,0,.2],shR:[.6,0,-.9],elR:[-1.6,0,0]});return{layout:"guard",...Xt("kimB",s,Xe(s,{hips:[-.4,.3,0]}),e,Y(e,{shR:[.9,0,-1.1]}))}})(),omoplata:(()=>{let s=ot("bottom",{hips:[-.6,1,0],hipL:[-1.5,0,.8],knL:[1.7,0,0],hipR:[-1,0,-.2],knR:[1.6,0,0],shL:[-1,0,-.4],elL:[-.6,0,0],shR:[-1,0,.3],elR:[-.6,0,0]}),e=ot("top",{hipsPos:[0,-.55,0],spine:[1.45,0,0],chest:[.2,0,0],neck:[.1,0,0],shR:[.9,0,-.5],elR:[-1.2,0,0],shL:[-1.4,0,.4],elL:[-.2,0,0]});return{layout:"guard",...Xt("omo",s,Xe(s,{spine:[.5,0,0]}),e,Y(e,{shR:[1.3,0,-.6]}))}})(),heelHook:(()=>{let s=Ve.legsBottom,e=ot("legsTop",{hips:[-.7,0,0],shL:[-.3,0,.9],elL:[-.4,0,0]});return{layout:"legs",...Xt("hh",s,Xe(s,{hips:[0,-.6,0]}),e,Xe(e,{hips:[-.3,0,0],shR:[-1.8,0,0]}))}})()};function Qd(s,e){let t=String(s||"").toLowerCase();return t.includes("rear-naked")?Nt.rnc:t.includes("arm-triangle")?Nt.armTriangle:t.includes("d'arce")||t.includes("darce")?Nt.darce:t.includes("americana")?Nt.americana:t.includes("heel hook")?Nt.heelHook:t.includes("omoplata")?Nt.omoplata:t.includes("triangle")?Nt.triangle:t.includes("armbar")?e?Nt.armbarBottom:Nt.armbarTop:t.includes("guillotine")?e?Nt.guillotineBottom:Nt.guillotineTop:t.includes("kimura")?e?Nt.kimuraBottom:Nt.kimuraTop:e?Nt.triangle:Nt.rnc}var Rs=Y(null,{hipsPos:[0,-.45,-.1],hips:[-.9,0,0],neck:[.5,0,0],shL:[-1.6,0,.7],elL:[-.4,0,0],shR:[-1.6,0,-.7],elR:[-.4,0,0],hipL:[-.9,0,.1],knL:[.6,0,0],hipR:[-.7,0,-.1],knR:[.5,0,0]}),Dh=Y(_e,{hips:[0,0,0],hipsPos:[0,.03,0],spine:[-.3,0,0],chest:[-.2,0,0],neck:[.35,0,0],shL:[-1.4,0,.7],elL:[-.5,0,0],shR:[-1.4,0,-.7],elR:[-.5,0,0],hipL:[0,0,.04],knL:[.05,0,0],hipR:[0,0,-.04],knR:[.05,0,0]}),Xd=Y(Ls,{hipsPos:[0,-.3,.2],spine:[.85,0,0],neck:[-.6,0,0],shL:[-.9,0,-.35],elL:[-1.2,0,0],shR:[-.9,0,.35],elR:[-1.2,0,0],hipL:[-1,0,.1],knL:[1.3,0,0],hipR:[.7,0,-.1],knR:[.4,0,0]}),Cs=Y(vi,{hips:[0,0,0],shL:[-1.25,0,-.65],elL:[-1.5,0,0],shR:[-1.25,0,.65],elR:[-1.5,0,0],spine:[.25,0,0],neck:[.1,.6,0]}),Yd=Y(vi,{hips:[0,0,0],spine:[-.15,0,0],neck:[.3,-.5,0],shL:[-1.5,0,.5],elL:[-1.3,0,0],shR:[-1.5,0,-.5],elR:[-1.3,0,0]}),In=(s,e,t,i={})=>Y(null,{hipsPos:[0,s,e],hips:[t,0,0],neck:[.3,0,0],shL:[-1.2,0,.6],elL:[-.6,0,0],shR:[-1.2,0,-.6],elR:[-.6,0,0],hipL:[-.5,0,.15],knL:[.9,0,0],hipR:[-.2,0,-.15],knR:[.5,0,0],...i}),hn={"double-leg":{att:[[Y(_e,{hipsPos:[0,-.22,0]}),.1,18],[Ls,.3,14],[Xd,.4,10]],def:[[_e,.32,9],[Dh,.3,12],[Rs,.3,9]],mat:.85,fwd:.6,dFwd:.1},"reactive takedown":{att:[[Ls,.25,18],[Xd,.35,12]],def:[[Y(_e,{hips:[0,.4,0],hipR:[-.6,.6,-.6],knR:[1,0,0]}),.22,14],[Dh,.25,12],[Rs,.3,9]],mat:.7,fwd:.65,dFwd:.05},"single-leg":{att:[[Ls,.3,14],[Y(_e,{hips:[0,.3,0],hipsPos:[0,-.2,0],spine:[.55,0,0],neck:[-.3,0,0],shL:[-.9,0,-.5],elL:[-1.4,0,0],shR:[-.9,0,.2],elR:[-1.4,0,0]}),.7,9]],def:[[_e,.28,9],[Y(_e,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.06,0],spine:[-.15,0,0],shL:[-.4,0,1.2],shR:[-.4,0,-1.2]}),.18,14],[Y(_e,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.55,0,0],hipsPos:[0,-.04,0],spine:[-.1,0,0],shL:[-.6,0,1],shR:[-.6,0,-1]}),.16,14],[Y(_e,{hips:[0,0,0],hipL:[-1.1,0,.1],knL:[.35,0,0],hipR:[.05,0,-.05],knR:[.2,0,0],hipsPos:[0,.08,0],spine:[-.2,0,0],shL:[-.4,0,1.3],shR:[-.4,0,-1.3]}),.16,14],[Rs,.3,9]],mat:1.1,fwd:.55,dFwd:.1},"body lock":{att:[[vi,.25,12],[Cs,.4,10],[Y(Cs,{hipR:[-.5,.3,.45],knR:[.1,0,0],spine:[.5,0,0]}),.3,12]],def:[[vi,.3,12],[Yd,.35,10],[Rs,.3,9]],mat:.95,fwd:.35,dFwd:.3},trip:{att:[[vi,.3,12],[Y(Cs,{hipR:[-.6,.4,.5],knR:[.1,0,0],spine:[.4,.3,0]}),.35,12]],def:[[vi,.3,12],[Y(Yd,{hipL:[-.6,0,.3],knL:[.1,0,0]}),.25,12],[Rs,.3,9]],mat:.8,fwd:.35,dFwd:.3},"ankle pick":{att:[[Y(_e,{hipsPos:[0,-.3,0],spine:[.7,0,0],neck:[-.5,0,0],shL:[-.7,0,.1],elL:[-.2,0,0],shR:[-1.5,0,-.2],elR:[-.6,0,0],knL:[1,0,0],knR:[.9,0,0]}),.35,14],[Y(_e,{hipsPos:[0,-.25,0],spine:[.35,0,0],shL:[.3,0,.2],elL:[-.3,0,0],shR:[-1.6,0,-.1],elR:[-.1,0,0]}),.3,12]],def:[[_e,.3,9],[Y(_e,{hips:[0,0,0],hipL:[-.9,0,0],knL:[.1,0,0],spine:[-.4,0,0],neck:[.3,0,0],shL:[-1.2,0,.8],shR:[-1.2,0,-.8]}),.22,14],[Rs,.3,9]],mat:.8,fwd:.45,dFwd:.15},suplex:{att:[[vi,.25,12],[Y(Cs,{hipsPos:[0,-.18,0],knL:[.8,0,0],knR:[.8,0,0]}),.25,12],[Y(Cs,{hipsPos:[0,-.05,0],hips:[-.5,0,0],spine:[-.35,0,0],neck:[-.4,0,0],shL:[-2.3,0,-.4],shR:[-2.3,0,.4]}),.25,12],[Y(Cs,{hipsPos:[0,-.4,-.1],hips:[-1.2,0,0],spine:[-.4,0,0],neck:[-.5,0,0],shL:[-2.8,0,-.3],shR:[-2.8,0,.3]}),.25,12]],def:[[vi,.28,12],[In(.12,.1,.1),.22,12],[In(.55,.45,.9),.22,12],[In(.2,.95,2.2,{neck:[.6,0,0]}),.22,12]],mat:.95,fwd:.35,dFwd:.35,big:!0},slam:{att:[[Y(Ls,{hipsPos:[0,-.3,.1]}),.25,14],[Y(_e,{hips:[0,0,0],hipsPos:[0,0,0],spine:[-.1,0,0],neck:[-.2,0,0],shL:[-2.4,0,.3],elL:[-1,0,0],shR:[-2.4,0,-.3],elR:[-1,0,0],hipL:[0,0,.1],knL:[.1,0,0],hipR:[0,0,-.1],knR:[.1,0,0]}),.4,8],[Y(_e,{hips:[0,0,0],hipsPos:[0,-.35,.1],spine:[.95,0,0],shL:[-1.4,0,.2],elL:[-.4,0,0],shR:[-1.4,0,-.2],elR:[-.4,0,0],knL:[1.1,0,0],knR:[1.1,0,0]}),.25,18]],def:[[Dh,.25,12],[In(.6,.35,-1.35,{hipL:[-.7,0,.2],knL:[1.2,0,0],hipR:[-.3,0,-.2],knR:[.6,0,0],shL:[-2,0,.8],shR:[-2,0,-.8]}),.4,7],[In(-.6,.35,-1.5),.25,22]],mat:.85,fwd:.55,dFwd:.15,big:!0},"judo throw":{att:[[Y(vi,{hips:[0,-1.6,0],neck:[0,1,0]}),.2,14],[Y(_e,{hips:[0,-2.9,0],hipsPos:[0,-.18,0],spine:[.35,0,0],neck:[0,.9,0],shL:[-1.4,0,.3],elL:[-.8,0,0],shR:[-1,0,-.5],elR:[-1.4,0,0],knL:[.6,0,0],knR:[.6,0,0]}),.25,14],[Y(_e,{hips:[0,-3,0],hipsPos:[0,-.25,0],spine:[1.1,0,0],chest:[.3,0,0],shL:[-.6,0,.6],shR:[-.8,0,-.6],knL:[.7,0,0],knR:[.4,0,0]}),.3,12]],def:[[vi,.3,12],[In(.35,.35,.4,{hips:[.4,0,1.2]}),.25,12],[In(.1,.7,.2,{hips:[.2,0,2.6]}),.22,12]],mat:.85,fwd:.3,dFwd:.35,big:!0}};hn.shoot=hn["double-leg"];function ep(s,e=""){let t=String(s||"").toLowerCase();if(hn[t])return hn[t];let i=String(e).toLowerCase();for(let n of Object.keys(hn))if(i.includes(n.split(" ")[0]))return hn[n];return i.includes("slams")?hn.slam:hn["double-leg"]}function Vh(s){let e=Ve[s]||Ve.top;return[[Xe(e,{spine:[.15,.2,0],shL:[-.25,0,.2],shR:[.2,0,-.1],hipL:[.1,0,.1]}),.45,6]]}var Ht={slip:[[vm,.25,22]],shoot:[[Y(_e,{hipsPos:[0,-.22,0]}),.1,18],[Ls,.45,12]],sprawl:[[ym,.55,14]],touch:[[_m,.5,8]],block:[[bm,.4,14]],getUp:[[Ve.sitting,.5,6],[Y(_e,{hipsPos:[0,-.35,0],spine:[.6,0,0],knL:[1.2,0,0],knR:[1.2,0,0]}),.4,6]],rocked:[[Y(_e,{hipsPos:[0,-.16,-.05],knL:[.85,0,0],knR:[.75,0,0],spine:[.1,0,.25],neck:[.25,.3,.3],shL:[-.3,0,.5],shR:[-.3,0,-.5]}),.55,7],[Y(_e,{hipsPos:[0,-.12,0],spine:[.1,0,-.2],neck:[.3,-.2,-.2]}),.45,6]],celebrate:[[Ve.victory,.35,8],[Y(Ve.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10],[Ve.victory,.35,8],[Y(Ve.victory,{hipsPos:[0,.18,0],knL:[.6,0,0],knR:[.6,0,0]}),.22,10]],waveOff:[[Y(Ve.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.3,10],[Y(Ve.ref,{shL:[-1.55,0,.1],elL:[-.1,0,0],shR:[-1.55,0,-.1],elR:[-.1,0,0]}),.3,10],[Y(Ve.ref,{shL:[-1.55,0,1],elL:[-.1,0,0],shR:[-1.55,0,-1],elR:[-.1,0,0]}),.4,10]],tap:s=>{let e=Ve[s]||Ve.bottom;return[[Nh(e),.16,22],[Uh(e),.16,22],[Nh(e),.16,22],[Uh(e),.16,22],[Nh(e),.16,22],[Uh(e),.2,22]]}},Fh={};function Lt(s,e){return Fh[s]||(Fh[s]=e())}function zt(s,e={}){return new Bt({color:s,roughness:.62,metalness:.02,...e})}function Ne(s,e,t,i=0,n=0,r=0){let a=new Ze(s,e);return a.position.set(i,n,r),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a}function Ar(s,e,t,i,n){let r=new xt(e,t,i,10,1);r.translate(0,-i/2,0);let a=Ne(r,n,s),o=Lt("cap"+t.toFixed(3),()=>new Qe(t,10,8));return Ne(o,n,s,0,-i,0),a}function Hi(s,e,t,i){let n=new pi;return n.position.set(e,t,i),s.add(n),n}var kn=class{constructor(e={}){let t=typeof e.look=="string"?Cr(e.look):e.look||Ps(e.name||"x");this.look=t;let i=e.weightClass??3,n={Wrestler:.05,"Jiu-Jitsu":.01,Striker:-.03}[e.style]||0,r=e.ref?.98:.9+i*.035+n,a=e.ref?1:.95+i*.016;this.width=r;let o=zt(Yt.skin[t.skin],{roughness:.55}),l=zt(Yt.hairColor[t.hairColor],{roughness:.9}),h=zt(e.ref?"#3c3f46":Yt.shorts[t.shorts],{roughness:.75}),c=zt(e.ref?"#2a2c31":t.shorts===3?"#151515":"#f2f2f2",{roughness:.7}),u=zt("#161616",{roughness:.42}),d=zt(e.glove||"#c8102e",{roughness:.5}),p=zt("#17181c",{roughness:.8}),m=zt("#120d0b",{roughness:.4}),y=e.ref?p:o,f=(e.ref,o),_=new pi;_.scale.setScalar(a),this.root=_;let g=Hi(_,0,.95,0);this.hipsHome=.95,Ne(new xt(.15*r,.165*r,.2,14),h,g,0,-.02,0).scale.z=.72,Ne(new xt(.152*r,.152*r,.035,14),e.ref?zt("#111"):c,g,0,.085,0).scale.z=.72;let v=Hi(g,0,.08,0);Ne(new Qe(.14,16,12),y,v,0,.1,0).scale.set(1*r,1.15,.7);let A=Hi(v,0,.18,0);if(Ne(new Qe(.17,18,14),y,A,0,.1,0).scale.set(1.12*r,1.05,.68),e.ref)Ne(new ln(.06,.015,6,14),p,A,0,.27,0).rotation.x=Math.PI/2;else{for(let C of[-1,1])Ne(Lt("pec",()=>new Qe(.09,12,10)),o,A,C*.075*r,.15,.06).scale.set(1.15*r,.75,.55);Ne(Lt("traps",()=>new Qe(.12,12,10)),o,A,0,.23,-.02).scale.set(1.25*r,.5,.6)}let E=Hi(A,0,.29,0);Ne(Lt("neck"+r.toFixed(2),()=>new xt(.05*r,.058*r,.09,10)),o,E,0,.03,0);let N=Hi(E,0,.12,.01);this.head=N,this.buildHead(N,o,l,m,t,e.ref);let P={};for(let j of["L","R"]){let O=Hi(A,(j==="L"?1:-1)*.19*r,.2,-.01);if(Ne(Lt("delt"+r.toFixed(2),()=>new Qe(.07*r,12,10)),e.ref?p:o,O,0,-.01,0),e.ref){let se=new xt(.058,.052,.14,10);se.translate(0,-.07,0),Ne(se,p,O)}Ar(O,.06*r,.047*r,.27,f);let F=Hi(O,0,-.27,0);if(Ar(F,.047*r,.037*r,.23,f),e.ref)Ne(Lt("fist",()=>new Qe(.045,10,8)),o,F,0,-.26,0);else{Ne(Lt("glove",()=>new Qe(.062,14,10)),u,F,0,-.27,.005).scale.set(.95,1.15,1.1);let fe=Ne(Lt("band",()=>new xt(.047,.047,.045,12)),d,F,0,-.2,0);fe.scale.z=1.05}P["sh"+j]=O,P["el"+j]=F,P["hand"+j]=F}let U={};for(let j of["L","R"]){let O=Hi(g,(j==="L"?1:-1)*.085*r,-.06,0),F=new xt(.088*r,.08*r,.2,12);F.translate(0,-.08,0),Ne(F,(e.ref,h),O),e.ref?Ar(O,.075*r,.055,.42,h):Ar(O,.085*r,.058*r,.42,o);let se=Hi(O,0,-.42,0);Ar(se,e.ref?.055:.058*r,.04,.42,e.ref?h:o);let fe=new Ft(.075,.05,.2);fe.translate(0,-.025,.05);let te=Ne(fe,e.ref?m:o,se,0,-.44,0);te.scale.x=r,U["hip"+j]=O,U["kn"+j]=se}this.j={hips:g,spine:v,chest:A,neck:E,...P,...U},this.cur=Y(Ve[e.ref?"ref":"stance"]),this.base=e.ref?"ref":"stance",this.queue=null,this.offsets=[],this.time=Math.random()*10,this.walk=0,this.speed=0,this.lastPos=new b,this.applyPose(this.cur)}buildHead(e,t,i,n,r,a){Ne(Lt("skull",()=>new Qe(.1,20,16)),t,e,0,.02,0).scale.set(.92,1.12,1.02),Ne(Lt("jaw",()=>new Qe(.075,14,10)),t,e,0,-.045,.03).scale.set(1,.8,1);let h=Ne(Lt("nose",()=>new _r(.018,.045,6)),t,e,0,0,.1);h.rotation.x=Math.PI/2;for(let p of[-1,1]){Ne(Lt("eye",()=>new Qe(.011,8,6)),n,e,p*.034,.03,.085);let m=Ne(Lt("brow",()=>new Ft(.036,.009,.012)),zt(Yt.hairColor[r.hairColor]),e,p*.035,.052,.088);m.rotation.z=-p*.12,Ne(Lt("ear",()=>new Qe(.022,8,6)),t,e,p*.092,.01,-.005).scale.set(.5,1,.8)}if(a){Ne(new Qe(.104,18,12,0,Math.PI*2,0,Math.PI*.45),zt("#8d8d8d",{roughness:.9}),e,0,.03,-.004).scale.set(.95,1.12,1.05);return}let c=Yt.hair[r.hair],u=p=>new Qe(.105,18,12,0,Math.PI*2,0,Math.PI*p);if(c==="Buzz"||c==="Short"||c==="Man bun"||c==="Long"){let p=Ne(u(c==="Buzz"?.42:.48),i,e,0,.03,-.006);p.scale.set(c==="Buzz"?.94:.99,c==="Buzz"?1.12:1.2,c==="Buzz"?1.05:1.1),p.rotation.x=-.25}if(c==="Short"){let p=Ne(new Ft(.15,.03,.05),i,e,0,.1,.06);p.rotation.x=-.4}if(c==="Mohawk"){let p=Ne(new Ft(.04,.07,.2),i,e,0,.1,-.015);p.rotation.x=-.2,Ne(u(.4),zt(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.4,roughness:1}),e,0,.03,-.006).scale.set(.95,1.12,1.05)}if(c==="Man bun"&&Ne(new Qe(.04,10,8),i,e,0,.1,-.1),c==="Long"){let p=Ne(new xt(.085,.06,.2,12,1,!1,Math.PI*.5,Math.PI),i,e,0,-.04,-.03);p.rotation.x=.1}if(c==="Afro"&&Ne(new Qe(.13,20,16),i,e,0,.09,-.035).scale.set(1.12,.95,1),c==="Braids"){let p=Ne(u(.5),zt(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.35,roughness:1}),e,0,.03,-.006);p.scale.set(.94,1.13,1.04),p.rotation.x=-.3;let m=y=>new ln(y,.0125,6,28,Math.PI*1.05);for(let y of[-.066,-.044,-.022,0,.022,.044,.066]){let f=new pi;f.position.set(y,.02,0),f.scale.set(1,1.12,1.02),f.rotation.x=-.45,e.add(f);let _=Ne(m(.1*Math.sqrt(Math.max(.2,1-(y/.095)**2))+.004),i,f);_.rotation.y=-Math.PI/2}}if(c==="Dreadlocks"){let p=Ne(u(.5),i,e,0,.03,-.006);p.scale.set(.99,1.2,1.1),p.rotation.x=-.25;let m=_=>Lt("loc"+_,()=>{let g=new xt(.0125,.011,_,6,1);return g.translate(0,-_/2,0),g}),y=Lt("loctip",()=>new Qe(.0115,6,5)),f=(_,g,v,M,A)=>{let S=new pi;S.position.set(Math.sin(_)*v*.95,g,Math.cos(_)*v*1.05-.006),S.rotation.y=_,e.add(S);let E=Ne(m(M),i,S);E.rotation.x=-A,Ne(y,i,E,0,-M,0)};for(let _=0;_<20;_++){let g=.95+_/19*(Math.PI*2-1.9),v=Math.abs(Math.cos(g))*(Math.cos(g)<0?1:0);f(g,.06,.098,v>.5?.24:.2,.22)}for(let _=0;_<14;_++){let g=.7+_/13*(Math.PI*2-1.4);f(g,.105,.08,.2,.42)}for(let _ of[-.45,-.15,.2,.5])f(_,.115,.075,.085,.75)}let d=Yt.beard[r.beard];if(d!=="None"){let p=d==="Stubble"?zt(Yt.hairColor[r.hairColor],{transparent:!0,opacity:.45,roughness:1}):i;d==="Goatee"?Ne(new Qe(.03,10,8),p,e,0,-.085,.075).scale.set(1,1.2,.7):Ne(new Qe(.079,14,10,0,Math.PI*2,Math.PI*.45,Math.PI*.55),p,e,0,-.035,.032).scale.set(1.04,d==="Full"?1.1:.95,1.03)}}setBase(e){this.base=e}play(e,t){!e||!e.length||(this.queue={frames:e,i:0,t:0},t&&(this.base=t))}get busy(){return!!this.queue}hit(e,t=1){this.offsets.push({o:Bm(e,t),t:0,dur:.38+.2*t})}stopActions(){this.queue=null}snap(){this.queue=null,this.offsets=[],this.cur=Y(Ve[this.base]),this.applyPose(this.cur)}worldPoint(e){let t=new b,i=e==="head"?this.head:this.j[e]||this.j.chest;return(e==="handL"||e==="handR")&&t.set(0,-.27,0),i.localToWorld(t),t}update(e){this.time+=e;let t,i=9;if(this.queue){let l=this.queue;for(l.t+=e;l.i<l.frames.length&&l.t>l.frames[l.i][1];)l.t-=l.frames[l.i][1],l.i++;l.i>=l.frames.length?this.queue=null:(t=Y(l.frames[l.i][0]),i=l.frames[l.i][2])}t||(t=this.idlePose());for(let l=0;l<3;l++){let h=t.hips[l]-this.cur.hips[l];Math.abs(h)>Math.PI&&(this.cur.hips[l]+=Math.PI*2*Math.round(h/(Math.PI*2)))}this.offsets=this.offsets.filter(l=>(l.t+=e)<l.dur);for(let l of this.offsets){let h=Math.sin(Math.min(1,l.t/l.dur)*Math.PI)*(l.t<.08?1.4:1);for(let c in l.o)for(let u=0;u<3;u++)t[c][u]+=l.o[c][u]*h}let n=this.root.position,r=this.lastPos.distanceTo(n);this.lastPos.copy(n);let a=e>0?r/e:0;if(this.speed+=(a-this.speed)*Math.min(1,e*8),this.speed>.15&&(this.base==="stance"||this.base==="relaxed"||this.base==="ref"||this.base==="dejected")&&!this.queue){this.walk+=r*9;let l=Math.min(1,this.speed/1.2)*.42;t.hipL[0]+=Math.sin(this.walk)*l,t.knL[0]+=Math.max(0,Math.cos(this.walk))*l*1.2,t.hipR[0]-=Math.sin(this.walk)*l,t.knR[0]+=Math.max(0,-Math.cos(this.walk))*l*1.2,t.hipsPos[1]+=Math.abs(Math.cos(this.walk))*.02}let o=1-Math.exp(-e*i);for(let l in t)for(let h=0;h<3;h++)this.cur[l][h]+=(t[l][h]-this.cur[l][h])*o;this.applyPose(this.cur)}idlePose(){let e=Y(Ve[this.base]||Hh),t=this.time;if(this.base==="stance"){let i=Math.sin(t*5.2);e.hipsPos[1]+=i*.018,e.knL[0]+=i*.05,e.knR[0]+=i*.05,e.shL[0]+=Math.sin(t*2.6)*.06,e.shR[0]+=Math.sin(t*2.6+1.3)*.05,e.chest[1]+=Math.sin(t*1.3)*.06,e.neck[1]+=Math.sin(t*.9)*.05}else if(/top$|bottom$|Att$|Def$/i.test(this.base)){let i=Math.sin(t*2.2);e.spine[0]+=i*.04,e.shL[0]+=Math.sin(t*1.7)*.08,e.shR[0]+=Math.sin(t*1.9+1)*.08,e.hipL[2]+=Math.sin(t*1.3)*.05}else this.base==="victory"?(e.shL[2]+=Math.sin(t*4)*.12,e.shR[2]-=Math.sin(t*4)*.12):this.base==="relaxed"||this.base==="ref"||this.base==="dejected"?(e.chest[0]+=Math.sin(t*1.6)*.02,e.hipsPos[1]+=Math.sin(t*1.6)*.004):this.base==="down"&&(e.neck[1]+=Math.sin(t*.7)*.08);return e}applyPose(e){let t=this.j;t.hips.position.set(e.hipsPos[0],this.hipsHome+e.hipsPos[1],e.hipsPos[2]);for(let i of Jd)t[i].rotation.set(e[i][0],e[i][1],e[i][2])}dispose(){let e=new Set(Object.values(Fh));this.root.traverse(t=>{t.isMesh&&(e.has(t.geometry)||t.geometry.dispose(),t.material.dispose())}),this.root.removeFromParent()}};var ip="cc3d_sound",he=null,Un,kr,Gi,xo,bo,ti=!0,Xh=.8;try{let s=JSON.parse(localStorage.getItem(ip)||"{}");s.on===!1&&(ti=!1),typeof s.music=="number"&&(Xh=s.music)}catch{}var Pr={name:null,intensity:1},it=null,zm=null,Ei=null,cn=s=>440*Math.pow(2,(s-69)/12);function Hm(){try{localStorage.setItem(ip,JSON.stringify({on:ti,music:Xh}))}catch{}}function Gm(){if(he)return;let s=window.AudioContext||window.webkitAudioContext;if(!s)return;he=new s;let e=he.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,Un=he.createGain(),Un.gain.value=ti?1:0,Un.connect(e).connect(he.destination),kr=he.createGain(),kr.gain.value=.34*Xh,kr.connect(Un),Gi=he.createGain(),Gi.gain.value=.9,Gi.connect(Un),xo=he.createGain(),xo.gain.value=.5,xo.connect(Un),bo=he.createBuffer(1,he.sampleRate*2,he.sampleRate);let t=bo.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1;zm=setInterval(Zm,25)}function Vm(){Gm(),he&&(he.state==="suspended"&&he.resume(),Pr.name&&(!it||it.name!==Pr.name)&&ap(Pr.name,Pr.intensity))}["pointerdown","keydown","touchstart"].forEach(s=>window.addEventListener(s,Vm,{passive:!0}));function Yh(){return ti}function np(){return ti=!ti,Hm(),he&&Un.gain.setTargetAtTime(ti?1:0,he.currentTime,.05),!ti&&"speechSynthesis"in window&&speechSynthesis.cancel(),ti}function ii(s,e,t,i,n){s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(Math.max(2e-4,t),e+i),s.gain.exponentialRampToValueAtTime(1e-4,e+i+n)}function Is(s,e,t){let i=he.createBufferSource();return i.buffer=bo,i.connect(t),i.start(s,Math.random()*1.5,e+.05),i}function ni(s,e,t,i,n){let r=he.createOscillator();return r.type=s,r.frequency.setValueAtTime(e,t),r.connect(n),r.start(t),r.stop(t+i+.05),r}function Wh(s,e,t){let i=he.createGain();i.connect(t),ii(i,s,e,.002,.32),ni("sine",150,s,.4,i).frequency.exponentialRampToValueAtTime(42,s+.12)}function sp(s,e,t){let i=he.createGain(),n=he.createBiquadFilter();n.type="highpass",n.frequency.value=1400,n.connect(i).connect(t),ii(i,s,e*.8,.002,.17),Is(s,.2,n);let r=he.createGain();r.connect(t),ii(r,s,e*.5,.002,.09),ni("triangle",190,s,.12,r)}function jh(s,e,t,i=!1){let n=he.createGain(),r=he.createBiquadFilter();r.type="highpass",r.frequency.value=7500,r.connect(n).connect(t),ii(n,s,e,.001,i?.22:.035),Is(s,i?.3:.06,r)}function Wm(s,e,t){let i=he.createGain(),n=he.createBiquadFilter();n.type="highpass",n.frequency.value=4e3,n.connect(i).connect(t),ii(i,s,e,.002,1.4),Is(s,1.5,n)}function Ir(s,e,t,i,n,r){let a=he.createGain(),o=he.createBiquadFilter();o.type="lowpass",o.Q.value=r?6:2,o.frequency.setValueAtTime(r?1600:900,s),o.frequency.exponentialRampToValueAtTime(r?260:220,s+t),o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+.008),a.gain.setValueAtTime(i,s+t*.7),a.gain.exponentialRampToValueAtTime(1e-4,s+t),ni(r?"sawtooth":"triangle",cn(e),s,t,o),r&&ni("square",cn(e-12),s,t,o)}function rp(s,e,t,i,n,r=900){let a=he.createGain(),o=he.createBiquadFilter();o.type="lowpass",o.frequency.value=r,o.connect(a).connect(n),a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(i,s+Math.min(.4,t*.3)),a.gain.setValueAtTime(i,s+t*.75),a.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let l of e)for(let h of[-7,7]){let c=ni("sawtooth",cn(l),s,t,o);c.detune.value=h}}function tp(s,e,t,i,n,r="triangle"){let a=he.createGain();a.connect(n),ii(a,s,i,.004,t),ni(r,cn(e),s,t,a);let o=he.createGain();o.connect(n),ii(o,s,i*.3,.002,t*.4),ni("sine",cn(e+12),s,t*.5,o)}var Nn=null;function jm(){if(Nn)return Nn;Nn=he.createWaveShaper();let s=new Float32Array(1024);for(let t=0;t<s.length;t++){let i=t/s.length*2-1;s[t]=Math.tanh(i*4)}Nn.curve=s;let e=he.createGain();return e.gain.value=.35,Nn.connect(e).connect(kr),Nn._post=e,Nn}function Xm(s,e,t,i){let n=he.createGain(),r=he.createBiquadFilter();r.type="lowpass",r.frequency.value=2400,n.connect(r).connect(jm()),n.gain.setValueAtTime(1e-4,s),n.gain.exponentialRampToValueAtTime(i,s+.005),n.gain.exponentialRampToValueAtTime(i*.5,s+t*.6),n.gain.exponentialRampToValueAtTime(1e-4,s+t);for(let a of[e,e+7,e+12])ni("sawtooth",cn(a),s,t,n)}function Ym(s,e,t,i,n){let r=he.createGain(),a=he.createBiquadFilter();a.type="lowpass",a.frequency.value=2600,a.connect(r).connect(n),r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(i,s+.02),r.gain.setValueAtTime(i,s+t*.8),r.gain.exponentialRampToValueAtTime(1e-4,s+t);let o=ni("square",cn(e),s,t,a),l=he.createOscillator(),h=he.createGain();l.frequency.value=5.5,h.gain.value=9,l.connect(h).connect(o.detune),l.start(s+.12),l.stop(s+t+.05)}var qm={bpm:86,swing:.14,chords:[[45,57,60,64,67],[41,57,60,64,65],[48,55,59,64,67],[43,55,59,62,67],[38,57,60,62,65],[45,55,60,64,67],[41,57,60,65,69],[40,56,59,62,64]],melody:[[76,null,null,74,null,null,72,null,69,null,null,null,72,null,74,null],[72,null,null,null,69,null,67,null,null,null,69,null,null,null,null,null],[76,null,79,null,76,null,74,null,72,null,null,74,null,72,null,null],[71,null,null,null,74,null,null,null,67,null,null,null,null,null,null,null],[74,null,null,72,null,69,null,null,72,null,74,null,77,null,76,null],[76,null,null,null,72,null,69,null,null,null,72,null,74,null,null,null],[77,null,76,null,72,null,69,null,72,null,null,null,69,null,67,null],[68,null,null,null,71,null,null,null,74,null,76,null,null,null,null,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4;([0,7,10].includes(r)||r===15&&n%2)&&Wh(e,.75,i),(r===4||r===12)&&sp(e,.45,i),r%2===0&&jh(e,r%4===2?.16:.1,i),r===14&&n%4===3&&jh(e,.12,i,!0),r===0&&Ir(e,a[0],o*5,.42,i),r===6&&Ir(e,a[0]+12,o*2,.3,i),r===10&&Ir(e,a[0]+7,o*3.5,.34,i),r===14&&Ir(e,a[0]+(n%2?10:2),o*2,.25,i),r===0&&rp(e,a.slice(1),o*16,.045,i,1100),(r===0||r===7)&&a.slice(1,4).forEach((h,c)=>tp(e+c*.012,h,.5,.06,i,"sine"));let l=this.melody[n][r];l&&Math.floor(s/128)%2===1&&tp(e,l,.45,.09,i)}},$m={bpm:148,swing:0,chords:[38,34,36,33,38,34,41,40],riff:[[74,null,77,null,76,null,74,null,72,null,74,null,69,null,null,null],[70,null,null,74,null,null,77,null,76,null,74,null,72,null,74,null],[72,null,76,null,79,null,77,null,76,null,74,null,72,null,null,null],[73,null,null,null,76,null,null,null,79,null,81,null,79,null,76,null]],play(s,e,t,i){let n=Math.floor(s/16)%8,r=s%16,a=this.chords[n],o=60/this.bpm/4,l=t>=.8;if(l?(([0,6,8,11].includes(r)||r===14&&n%2)&&Wh(e,.9,i),(r===4||r===12)&&sp(e,.6,i),n%4===0&&r===0&&Wm(e,.22,i)):t>=.5&&r===0&&Wh(e,.6,i),t>=.5&&jh(e,r%2?.07:.13,i,r===14),r%2===0&&Ir(e,a+(r===6||r===14?12:0),o*1.8,t>=.5?.3:.2,i,!0),t>=.5&&[0,3,6].includes(r)&&Xm(e,a+12,o*(r===6?6:2.6),l?.22:.12),t<.5&&r===0&&rp(e,[a+24,a+27,a+31],o*16,.04,i,700),t>=1.1){let h=this.riff[n%4][r];h&&Ym(e,h,o*1.9,.06,i)}}},Jm={camp:qm,fight:$m};function ap(s,e){if(!he)return;let t=he.currentTime;if(it){it.gain.gain.setTargetAtTime(1e-4,t,.35);let n=it.gain;setTimeout(()=>n.disconnect(),2500)}if(it=null,!s)return;let i=he.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(1,t+1.2),i.connect(kr),it={name:s,track:Jm[s],gain:i,step:0,next:t+.1,intensity:e}}function Zm(){if(!he||!it||he.state!=="running")return;let s=it.track,e=60/s.bpm/4;for(it.next<he.currentTime-.2&&(it.next=he.currentTime+.05);it.next<he.currentTime+.12;){let t=it.step%2?s.swing*e:0;s.play(it.step,it.next+t,it.intensity,it.gain),it.step++,it.next+=e}}function Dn(s,e=1){if(Pr={name:s,intensity:e},!!he){if(it&&it.name===s){it.intensity=e;return}ap(s,e)}}function qh(s){if(he){if(s&&!Ei){let e=he.createGain();e.gain.value=1e-4;let t=he.createBiquadFilter();t.type="bandpass",t.frequency.value=650,t.Q.value=.5;let i=he.createBiquadFilter();i.type="bandpass",i.frequency.value=1700,i.Q.value=1.2;let n=he.createGain();n.gain.value=.35;let r=he.createOscillator(),a=he.createGain();r.frequency.value=.23,a.gain.value=.18,r.connect(a).connect(n.gain),r.start();let o=he.createBufferSource();o.buffer=bo,o.loop=!0,o.connect(t).connect(e),o.connect(i).connect(n).connect(e),e.connect(xo),o.start(),e.gain.setTargetAtTime(.16,he.currentTime,.8),Ei={g:e,src:o,lfo:r,base:.16}}else if(!s&&Ei){let e=Ei;Ei=null,e.g.gain.setTargetAtTime(1e-4,he.currentTime,.4),setTimeout(()=>{e.src.stop(),e.lfo.stop(),e.g.disconnect()},2e3)}}}function wt(s=.5){if(!he||!Ei)return;let e=he.currentTime,t=Ei.g.gain;t.cancelScheduledValues(e),t.setValueAtTime(Math.max(Ei.base,t.value),e),t.linearRampToValueAtTime(Ei.base+.55*s,e+.25),t.setTargetAtTime(Ei.base,e+.6+s,.9)}function yi(s,e=1){if(!he||!ti)return;let t=he.currentTime+.005,i=Math.min(1.4,.45+e*.6),n=(a,o,l,h)=>{let c=he.createGain();c.connect(Gi),ii(c,t,h,.002,l),ni("sine",a,t,l,c).frequency.exponentialRampToValueAtTime(o,t+l*.8)},r=(a,o,l,h,c=.8)=>{let u=he.createGain(),d=he.createBiquadFilter();return d.type=a,d.frequency.value=o,d.Q.value=c,d.connect(u).connect(Gi),ii(u,t,h,.001,l),Is(t,l+.05,d),d};switch(s){case"punch":n(140,55,.14,.7*i),r("lowpass",2200,.07,.55*i);break;case"kick":r("highpass",900,.06,.6*i),n(110,45,.2,.8*i);break;case"body":n(90,40,.22,.85*i),r("lowpass",900,.1,.5*i);break;case"ground":n(100,45,.12,.55*i),r("lowpass",1200,.06,.35*i);break;case"whoosh":{r("bandpass",500,.2,.18,1.5).frequency.exponentialRampToValueAtTime(2200,t+.16);break}case"slam":n(80,30,.45,1),r("lowpass",500,.3,.7);break;case"tap":for(let a=0;a<3;a++){let o=he.createGain(),l=he.createBiquadFilter();l.type="bandpass",l.frequency.value=1500,l.connect(o).connect(Gi),ii(o,t+a*.32,.4,.001,.05),Is(t+a*.32,.08,l)}break;case"bell":case"bell3":{let a=s==="bell3"?3:1;for(let o=0;o<a;o++){let l=t+o*.34;for(let[h,c]of[[1,.35],[2.76,.14],[5.4,.07],[8.9,.03]]){let u=he.createGain();u.connect(Gi),ii(u,l,c,.002,1.8/Math.sqrt(h)),ni("sine",1180*h,l,2,u)}}break}case"ko":n(70,25,.8,1.2),r("lowpass",400,.6,.8);break}}function Mo(s){if(!he||!ti)return;let e=he.currentTime+.05,t=s==="W"?[60,64,67,72,76]:s==="L"?[57,53,50,45]:[57,60,64];if(t.forEach((i,n)=>{let r=he.createGain(),a=he.createBiquadFilter();a.type="lowpass",a.frequency.value=s==="W"?3200:1200,a.connect(r).connect(Gi);let o=e+n*(s==="W"?.11:.22),l=s==="W"&&n===t.length-1?2.2:.8;r.gain.setValueAtTime(1e-4,o),r.gain.exponentialRampToValueAtTime(.09,o+.02),r.gain.exponentialRampToValueAtTime(1e-4,o+l);for(let h of[-8,0,8]){let c=ni("sawtooth",cn(i),o,l,a);c.detune.value=h}}),s==="W"){let i=he.createBiquadFilter();i.type="highpass",i.frequency.value=4e3;let n=he.createGain();i.connect(n).connect(Gi),ii(n,e+.44,.25,.002,1.6),Is(e+.44,1.7,i)}}function On(s){if(!(!ti||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(s);e.rate=.92,e.pitch=.6,e.volume=.9;let t=speechSynthesis.getVoices().find(i=>/en[-_](US|GB)/i.test(i.lang)&&/male|david|daniel|alex|fred/i.test(i.name))||speechSynthesis.getVoices().find(i=>/^en/i.test(i.lang));t&&(e.voice=t),speechSynthesis.speak(e)}catch{}}function $h(s=1.2){if(!he||!it)return;let e=it.gain.gain,t=he.currentTime;e.cancelScheduledValues(t),e.setTargetAtTime(.35,t,.05),e.setTargetAtTime(1,t+s,.4)}var bt=4.4,Ns="#d62828",Us="#2f6fed",si=Math.PI*2;function Jh(s,e,t){let i=(e-s)%si;return i>Math.PI&&(i-=si),i<-Math.PI&&(i+=si),s+i*t}var Fn=(s,e)=>1-Math.exp(-s*e),ks=(s,e)=>Math.atan2(e.x-s.x,e.z-s.z);function wo(s,e,t){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let n=new Qa(i);return n.colorSpace=ut,n.anisotropy=4,n}var So=null;function hp(){return So||(So=wo(64,64,(s,e)=>{let t=s.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,240,200,.85)"),t.addColorStop(1,"rgba(255,200,120,0)"),s.fillStyle=t,s.fillRect(0,0,e,e)}),So)}function cp(){let s;try{s=new ur({antialias:!0,powerPreference:"high-performance"})}catch(u){return console.warn("WebGL unavailable, 3D disabled",u),null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),s.shadowMap.enabled=!0,s.shadowMap.type=Th,s.outputColorSpace=ut,s.toneMapping=Ah,s.toneMappingExposure=1.05;let e=s.domElement;e.className="stage3d";let t=new Zh,i=new Kh,n=null,r=null,a=new ho,o=()=>{if(!r)return;let u=Math.max(1,r.clientWidth),d=Math.max(1,r.clientHeight);s.setSize(u,d,!1),e.style.width="100%",e.style.height="100%",n.camera.aspect=u/d,n.camera.updateProjectionMatrix()},l=new ResizeObserver(o),h=null;e.addEventListener("pointerdown",u=>{h={x:u.clientX},e.setPointerCapture(u.pointerId)}),e.addEventListener("pointermove",u=>{!h||!n||(n.userYaw=(n.userYaw||0)-(u.clientX-h.x)*.008,h.x=u.clientX)}),e.addEventListener("pointerup",()=>{h=null}),e.addEventListener("pointercancel",()=>{h=null});function c(u,d){let p=d==="arena"?i:t;r===u&&n===p||(r&&l.unobserve(r),r=u,n=p,u.appendChild(e),l.observe(u),o())}return s.setAnimationLoop(()=>{let u=Math.min(a.getDelta(),.1);!n||!r||!r.isConnected||r.offsetParent===null||document.hidden||(n.update(u),s.render(n.scene,n.camera))}),{preview:t,arena:i,show:c}}var Zh=class{constructor(){let e=this.scene=new dr;e.background=new Ae("#0f1116"),e.fog=new qa("#0f1116",7,14),this.camera=new _t(32,1,.1,50),e.add(new Tr("#cfd8ff","#1a1410",.9));let t=new Es("#fff3e2",60,12,.55,.6,1.6);t.position.set(1.5,5.5,3),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),e.add(t,t.target);let i=new Er(Ns,9,8,1.5);i.position.set(-2.5,1.8,-1.5);let n=new Er(Us,9,8,1.5);n.position.set(2.5,1.8,-1.5),e.add(i,n);let r=new Ze(new ws(2.2,48),new Bt({roughness:.9,map:wo(256,256,(a,o)=>{let l=a.createRadialGradient(o/2,o/2,0,o/2,o/2,o/2);l.addColorStop(0,"#3a3e48"),l.addColorStop(.8,"#1c1f26"),l.addColorStop(1,"#0f1116"),a.fillStyle=l,a.fillRect(0,0,o,o),a.strokeStyle="rgba(229,56,59,.7)",a.lineWidth=4,a.beginPath(),a.arc(o/2,o/2,o*.44,0,si),a.stroke()})}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r),this.fighters=[],this.key="",this.userYaw=0,this.t=0,this.nextMove=2}setFighters(e){let t=JSON.stringify(e);if(t===this.key)return;this.key=t,this.fighters.forEach(n=>n.dispose());let i=e.map(n=>n.look?Cr(n.look):Ps(n.name||"x"));i.length===2&&i[0].shorts===i[1].shorts&&(i[1].shorts=(i[1].shorts+3)%8),this.fighters=e.map((n,r)=>{let a=new kn({look:i[r],weightClass:n.weightClass,style:n.style,glove:r?Us:Ns});return this.scene.add(a.root),a}),this.fighters.length===2&&(this.fighters[0].root.position.set(-.62,0,0),this.fighters[0].root.rotation.y=Math.PI/2,this.fighters[1].root.position.set(.62,0,0),this.fighters[1].root.rotation.y=-Math.PI/2),this.fighters.forEach(n=>n.lastPos.copy(n.root.position))}update(e){this.t+=e;let t=this.fighters.length===2;if(!t&&this.fighters[0]){let o=this.fighters[0];if(o.root.rotation.y=Math.sin(this.t*.35)*.7+.35+this.userYaw,this.nextMove-=e,this.nextMove<=0&&!o.busy){let l=["jab","jab-cross","left hook","uppercut","body kick","1-2-hook combination","leg kick","head kick","knee up the middle"];o.play(_o(l[Math.floor(Math.random()*l.length)],1+Math.floor(Math.random()*3)).frames,"stance"),this.nextMove=1.4+Math.random()*2}}this.fighters.forEach(o=>o.update(e));let i=t?this.userYaw*.6+Math.sin(this.t*.2)*.25:0,n=Math.tan(Ed.degToRad(this.camera.fov/2)),r=n*this.camera.aspect,a=Math.max(t?4.3:3.7,(t?1.45:.75)/r,1.2/n);this.camera.position.set(Math.sin(i)*a,t?1.35:1.2,Math.cos(i)*a),this.camera.lookAt(0,.98,0)}};function Km(s){let e=new Ze(new xt(bt+.5,bt+.62,.9,8,1),new Bt({color:"#121318",roughness:.8}));e.rotation.y=Math.PI/8,e.position.y=-.465,e.receiveShadow=!0,s.add(e);let t=wo(1024,1024,(u,d)=>{u.fillStyle="#bdb8ad",u.fillRect(0,0,d,d);for(let m=0;m<1800;m++)u.fillStyle=`rgba(90,80,60,${Math.random()*.05})`,u.fillRect(Math.random()*d,Math.random()*d,2+Math.random()*20,2+Math.random()*20);let p=d/2;u.strokeStyle="rgba(20,20,24,.18)",u.lineWidth=6,u.beginPath(),u.arc(p,p,d*.17,0,si),u.stroke(),u.fillStyle="#c8102e",u.beginPath(),u.arc(p,p,d*.15,0,si),u.fill(),u.fillStyle="#fff",u.font=`italic 900 ${d*.1}px system-ui, sans-serif`,u.textAlign="center",u.textBaseline="middle",u.fillText("GFC",p,p+d*.005),u.fillStyle="rgba(20,20,24,.55)",u.font=`800 ${d*.035}px system-ui, sans-serif`;for(let[m,y]of[[0,"CAGE CAREER"],[Math.PI,"CAGE CAREER"],[Math.PI/2,"FIGHT NIGHT"],[-Math.PI/2,"FIGHT NIGHT"]])u.save(),u.translate(p,p),u.rotate(m),u.fillText(y,0,d*.33),u.restore()}),i=new Ze(new ws(bt+.02,8),new Bt({map:t,roughness:.85}));i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/8,i.receiveShadow=!0,s.add(i);let n=wo(64,64,(u,d)=>{u.clearRect(0,0,d,d),u.strokeStyle="rgba(25,25,28,.95)",u.lineWidth=4,u.beginPath(),u.moveTo(0,0),u.lineTo(d,d),u.moveTo(d,0),u.lineTo(0,d),u.stroke()});n.wrapS=n.wrapT=lr;let r=2*bt*Math.sin(Math.PI/8),a=1.75;n.repeat.set(r/.09,a/.09);let o=new Bt({map:n,transparent:!0,alphaTest:.25,side:md,roughness:.5,metalness:.4,depthWrite:!1}),l=new Bt({color:"#0b0b0d",roughness:.55}),h=[],c=[];for(let u=0;u<8;u++){let d=u/8*si+Math.PI/8,p=(u+1)/8*si+Math.PI/8,m=new b(Math.sin(d)*bt,0,Math.cos(d)*bt),y=new b(Math.sin(p)*bt,0,Math.cos(p)*bt),f=m.clone().add(y).multiplyScalar(.5),_=new Ze(new Ss(r,a),o);_.position.set(f.x,a/2+.12,f.z),_.lookAt(0,a/2+.12,0),s.add(_),c.push(_);let g=new Ze(new xt(.06,.06,r,10),l);g.position.set(f.x,a+.14,f.z),g.quaternion.setFromUnitVectors(new b(0,1,0),y.clone().sub(m).normalize()),s.add(g);let v=new Ze(new Ft(r,.18,.14),l);v.position.set(f.x,.09,f.z),v.lookAt(0,.09,0),v.castShadow=!0,s.add(v),h.push(m)}return h.forEach((u,d)=>{let p=d===1?Ns:d===5?Us:"#0b0b0d",m=new Ze(new xt(.11,.11,a+.3,12),new Bt({color:p,roughness:.5}));m.position.set(u.x,(a+.3)/2,u.z),m.castShadow=!0,s.add(m)}),{red:h[1],blue:h[5],panels:c}}function Qm(s){let e=[];for(let v=0;v<10;v++){let M=bt+2.6+v*.85,A=-.9+v*.42,S=Math.floor(si*M/.62);for(let E=0;E<S;E++){if(Math.random()<.08)continue;let N=E/S*si+v*.2;e.push({x:Math.sin(N)*M,y:A,z:Math.cos(N)*M,a:N,phase:Math.random()*si,s:.9+Math.random()*.25})}}let t=new yr(.2,.36,3,8),i=new Qe(.12,8,6),n=new fr(t,new Bt({roughness:.9}),e.length),r=new fr(i,new Bt({roughness:.8}),e.length),a=["#2b2f3a","#3d1f1f","#1f2a3d","#3a3a3a","#4a3b26","#5a1e1e","#1e3a2a","#6b6b6b","#151515","#7a2f2f"],o=["#f2d2b6","#e3b48e","#c98e64","#a96c45","#7c4b2c","#4f301d"],l=new Ae;e.forEach((v,M)=>{n.setColorAt(M,l.set(a[M%a.length]).multiplyScalar(.55+Math.random()*.5)),r.setColorAt(M,l.set(o[M*7%o.length]).multiplyScalar(.6))}),s.add(n,r);let h=60,c=new Float32Array(h*3),u=new Float32Array(h*3);for(let v=0;v<h;v++){let M=e[Math.floor(Math.random()*e.length)];c.set([M.x,M.y+.9,M.z],v*3)}let d=new tt;d.setAttribute("position",new St(c,3)),d.setAttribute("color",new St(u,3));let p=new Ka(d,new mr({size:.5,map:hp(),vertexColors:!0,transparent:!0,blending:Eh,depthWrite:!1}));s.add(p);let m=new Ce,y=new Qt,f=new b(0,1,0),_=new b,g=new b;return{update(v,M){e.forEach((A,S)=>{let E=Math.max(0,Math.sin(v*(6+S%5)+A.phase))*.16*M;y.setFromAxisAngle(f,A.a+Math.PI),g.setScalar(A.s),m.compose(_.set(A.x,A.y+.38*A.s+E,A.z),y,g),n.setMatrixAt(S,m),m.compose(_.set(A.x,A.y+.82*A.s+E,A.z),y,g),r.setMatrixAt(S,m)}),n.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0;for(let A=0;A<h;A++){let S=Math.random()<.004+M*.025?1:0;u[A*3]=u[A*3+1]=u[A*3+2]=S}d.attributes.color.needsUpdate=!0}}}var Nr=class{constructor(e,t){this.tag=e,this.f=t,this.pos=new b,this.target=new b,this.yaw=0,this.fixedYaw=null,this.rate=4,this.lunge=0,this.lungeTarget=0,this.lungeUntil=0,this.ring=null}},lp={guard:{a:.46,c:0,yaw:Math.PI},half:{a:.4,c:.06,yaw:Math.PI},mount:{a:-.3,c:0,yaw:Math.PI},side:{a:-.3,c:.5,yaw:-Math.PI/2},back:{a:-.3,c:0,yaw:0},headlock:{a:.85,c:0,yaw:Math.PI},legs:{a:.85,c:0,yaw:Math.PI},armbar:{a:-.3,c:.5,yaw:-Math.PI/2}},eg={strike:1e3,miss:800,big:1500,kd:2100,td:1500,stuff:1300,sweep:1400,ground:900,gnp:1e3,subatt:1800,info:1100,round:2e3,finish:3800},Kh=class{constructor(){let e=this.scene=new dr;e.background=new Ae("#07080b"),e.fog=new Ya("#07080b",.035),this.camera=new _t(42,1,.1,80),e.add(new Tr("#9fb0d6","#2a2018",.55));let t=new Es("#fff6e8",95,22,.6,.6,1.1);t.position.set(0,10,.5),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),t.shadow.bias=-.002,t.shadow.normalBias=.03,t.shadow.camera.near=4,t.shadow.camera.far=14,e.add(t,t.target);for(let[a,o,l]of[[-6,-4,Ns],[6,4,Us]]){let h=new Es(l,40,16,.5,.8,1.2);h.position.set(a,5,o),e.add(h,h.target)}let i=new Ze(new ln(5.2,.08,6,8),new Bt({color:"#222",metalness:.6,roughness:.4}));i.rotation.x=Math.PI/2,i.position.y=7.4,e.add(i);let n=new Cn({color:"#fff7df"});for(let a=0;a<16;a++){let o=a/16*si,l=new Ze(new Ft(.28,.16,.28),n);l.position.set(Math.sin(o)*5.2,7.25,Math.cos(o)*5.2),e.add(l)}let r=Km(e);this.panels=r.panels,this.cornerSpot={p:r.red.clone().multiplyScalar(.8),o:r.blue.clone().multiplyScalar(.8)},this.crowd=Qm(e),this.sparks=[];for(let a=0;a<24;a++){let o=new Ja(new pr({map:hp(),blending:Eh,depthWrite:!1,transparent:!0,opacity:0}));o.visible=!1,e.add(o),this.sparks.push({s:o,t:1,dur:.2,v:new b,size:.3})}this.P=this.O=this.ref=null,this.key="",this.t=0,this.timers=[],this.slowUntil=0,this.real=0,this.excite=.25,this.userYaw=0,this.speed=1,this.mode="intro",this.C=new b,this.theta=0,this.G=new b,this.gDir=new b(1,0,0),this.cam={yaw:.3,dist:5,h:1.7,focus:new b(0,1,0),close:null,shake:0}}load(e,t){let i=t.playerLook?Cr(t.playerLook):Ps(e.player.realName||e.player.name),n=e.opponent.look?Cr(e.opponent.look):Ps(e.opponent.realName||e.opponent.name);n.shorts===i.shorts&&(n.shorts=(n.shorts+3)%8);let r=JSON.stringify([e.player.name,e.opponent.name,i,n,t.weightClass]);if(r!==this.key){this.key=r;for(let a of[this.P,this.O])a&&(a.f.dispose(),a.ring.removeFromParent());this.ref&&this.ref.f.dispose(),this.P=new Nr("p",new kn({look:i,weightClass:t.weightClass,style:e.player.style,glove:Ns})),this.O=new Nr("o",new kn({look:n,weightClass:t.weightClass,style:e.opponent.style,glove:Us})),this.ref=new Nr("r",new kn({ref:!0,look:{skin:1,hair:0,hairColor:5,beard:0,shorts:2}})),this.ref.f.setBase("ref");for(let a of[this.P,this.O]){let o=new Ze(new Sr(.42,.5,32),new Cn({color:a.tag==="p"?Ns:Us,transparent:!0,opacity:.55,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.012,this.scene.add(o),a.ring=o}for(let a of[this.P,this.O,this.ref])this.scene.add(a.f.root)}this.restore(e)}restore(e){this.timers=[],this.slowUntil=0,this.cam.shake=0,this.mode=e.round===0?"intro":"stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.lastInfo="",this.lastG="",this.refIn=!1,this.ended=this.decision=null,this.ref.f.setBase("ref"),this.C.set(0,0,0),this.theta=0,this.cam.close=null,this.userYaw=0;for(let t of[this.P,this.O])t.fixedYaw=null,t.f.setBase(e.round===0?"relaxed":"stance");e.round===0&&(this.P.pos.copy(this.cornerSpot.p).multiplyScalar(.5),this.O.pos.copy(this.cornerSpot.o).multiplyScalar(.5));for(let t of e.logs.flat())this.handle(t,e,!0);this.layout(0);for(let t of[this.P,this.O,this.ref])t.pos.copy(t.target),t.yaw=t.fixedYaw??(t===this.ref?ks(t.pos,this.C):ks(t.pos,this.other(t).pos)),t.lunge=t.lungeTarget=0,t.f.snap(),this.place(t,0),t.f.lastPos.copy(t.f.root.position);this.snapCamera()}setSpeed(e){this.speed=e}other(e){return e===this.P?this.O:this.P}side(e){return e==="p"?this.P:e==="o"?this.O:null}flush(){let e=this.timers.sort((t,i)=>t.at-i.at);this.timers=[],e.forEach(t=>t.fn())}later(e,t,i){i?t():this.timers.push({at:this.t+e,fn:t})}play(e,t){return this.handle(e,t,!1)}handle(e,t,i){this.flush();let n=this.side(e.side),r=n?this.other(n):null,a=e.g!==void 0?e.g:this.inferG(e),o=(h,c,u)=>{u&&h.f.setBase(u),i||h.f.play(c,u)},l=eg[e.type]||1e3;switch(e.type){case"info":if(e.side==="n"){this.mode="stand",this.top=this.down=null,this.refIn=!1,this.C.set(0,0,0);for(let h of[this.P,this.O])h.fixedYaw=null,o(h,Ht.touch,"stance");if(!i){yi("bell"),wt(.5),this.excite=.7;let h=Number((e.text.match(/Round (\d+)/)||[])[1])||t.round;On(h===t.rounds&&t.rounds>1?"Final round!":`Round ${["one","two","three","four","five"][h-1]||h}!`)}l=2300}else l=this.info(e,n,r,o,i);break;case"strike":case"miss":case"big":case"kd":{this.mode!=="stand"&&this.standUp(i,o);let h=e.type==="big"||e.type==="kd",c=_o(e.move,e.n||1,!1);if(o(n,c.frames,"stance"),i){e.type==="kd"&&this.knockDown(r,!0);break}n.lungeTarget=c.fwd||.15,n.lungeUntil=this.t+(c.lungeFor||.35);let u=0,d=!0,p=0;for(let m of c.frames){if(m[3]){let y=u+Math.min(m[1],.09);if(e.type==="miss")d&&this.later(Math.max(0,y-.12),()=>{r.f.play(Ht.slip,"stance"),yi("whoosh")});else{let f=p===(e.n||1)-1||m===c.frames[c.frames.length-1],_=h&&f?1.8:.6+Math.min(4,e.n||1)*.1;this.later(y,()=>this.impact(n,r,m[3],_)),p++}d=!1}u+=m[1]}e.type==="big"&&(this.later(u,()=>r.f.play(Ht.rocked,"stance")),this.closeUp(r,1.8),wt(.8),$h(1.2),this.excite=1),e.type==="kd"&&(this.later(u,()=>this.knockDown(r,!1)),this.closeUp(r,2.2),$h(2)),l=Math.max(l,u*1e3+(e.type==="miss"?450:600)),e.type==="kd"&&(l+=900),e.type==="big"&&(l+=600);break}case"td":{if(i){this.goGround(a||n.tag,!0,e.p);break}this.mode!=="stand"&&this.standUp(!0,o);let h=ep(e.move,e.text);n.f.play(h.att,null),r.f.play(h.def,null),n.lungeTarget=h.fwd,r.lungeTarget=h.dFwd,n.lungeUntil=r.lungeUntil=this.t+h.mat,h.big&&this.closeUp(r,h.mat+.6,!0),this.later(h.mat,()=>{this.goGround(a||n.tag,!1,e.p),yi("slam",h.big?1.6:1),wt(h.big?1:.6),this.cam.shake=h.big?.24:.12,this.excite=h.big?1:.8}),l=Math.max(l,h.mat*1e3+700);break}case"stuff":{let h=r;i||(h.f.play(Ht.shoot,"stance"),h.lungeTarget=.4,h.lungeUntil=this.t+.45,this.later(.18,()=>{n.f.play(Ht.sprawl,"stance"),yi("body",.5)}),wt(.3));break}case"sweep":i||(yi("slam"),wt(.7),this.excite=.8),this.goGround(a||n.tag,i,e.p);break;case"ground":{if(this.mode!=="ground"?this.goGround(a||n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,i),!i){let h=this.side(this.top),c=this.other(h);h.f.play(Vh(h.f.base),h.f.base),c.f.play(Vh(c.f.base),c.f.base),e.p&&/back|mount/.test(e.p)&&wt(.5)}break}case"gnp":{this.mode!=="ground"||this.top!==n.tag?this.goGround(n.tag,i,e.p):e.p&&(e.p!==this.gpos||this.holding)&&this.setGroundPos(e.p,!0);let h=_o(e.move,e.n||1,!0,Ve[n.f.base]);if(o(n,h.frames,n.f.base),i)break;(/^(top|bottom|half)/i.test(r.f.base)||r.f.base==="mountBottom")&&r.f.play(Ht.block,r.f.base);let c=0;for(let u of h.frames)u[3]&&this.later(c+.06,()=>this.impact(n,r,"ground",.8+(e.n||1)*.1)),c+=u[1];l=Math.max(l,c*1e3+450);break}case"subatt":{let h=a||this.top||r.tag;(this.mode!=="ground"||this.top!==h)&&this.goGround(h,!0,e.p);let c=this.top!==n.tag,u=Qd(e.move,c);this.setGroundPos(u.layout,i),this.holding=!0,n.f.setBase(u.attHold),r.f.setBase(u.defHold),i||(n.f.play(u.att,u.attHold),r.f.play(u.def,u.defHold),this.closeUp(this.side(this.top)===n?r:n,2.2,!0),wt(.7),this.excite=.9),l=2200;break}case"round":this.mode="corners",this.top=this.down=null;for(let h of[this.P,this.O])h.fixedYaw=null,h.f.setBase("relaxed"),i||h.f.stopActions();i||(yi("bell3"),wt(.45),this.excite=.45);break;case"finish":l=this.finish(e,t,i,o);break}return e.type!=="finish"&&e.type!=="round"&&!(e.type==="info"&&e.side==="n")&&(a===""&&this.mode==="ground"?this.standUp(i,o):a&&(this.mode!=="ground"||this.top!==a)&&e.type!=="td"?this.goGround(a,i,e.p):a&&this.mode==="ground"&&e.type!=="subatt"&&(this.holding||e.p&&e.p!==this.gpos)&&this.setGroundPos(e.p||this.gpos,i)),this.lastG=a,l}inferG(e){let t=this.lastG??"";return e.type==="td"||e.type==="sweep"?e.side:e.type==="info"&&/feet|get back up|scrambles/i.test(e.text)||e.type==="round"||e.type==="info"&&e.side==="n"?"":t}info(e,t,i,n,r){let a=e.text||"";return this.lastInfo=a,/survives/i.test(a)?(this.down=null,this.refIn=!1,this.mode="stand",n(t,Ht.getUp,"stance"),r||wt(.6),1500):/referee jumps in/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(Ht.waveOff,"ref"),wt(1),this.excite=1),1300):/doctor/i.test(a)?(r||(this.refIn=!0,this.ref.f.play(Ht.waveOff,"ref"),wt(.6)),1700):/escapes/i.test(a)?(r||(t.f.stopActions(),i.f.stopActions(),wt(.4)),1e3):1100}impact(e,t,i,n){t.f.hit(i,Math.min(1.6,n)),t.lungeTarget=-.1*n,t.lungeUntil=this.t+.18;let r=i==="body"?"chest":i==="leg"?"knL":"head",a=t.f.worldPoint(r);this.spark(a,n),yi(i==="leg"?"kick":i==="body"?"body":i==="ground"?"ground":"punch",n),n>1.2?(this.cam.shake=Math.max(this.cam.shake,.06*n),wt(.6)):Math.random()<.3&&wt(.2),this.excite=Math.min(1,this.excite+.08*n)}knockDown(e,t){this.mode="down",this.down=e.tag,e.f.setBase("down"),!t&&(e.f.stopActions(),this.slowUntil=this.real+.8,yi("ko"),wt(1),this.excite=1,this.cam.shake=.15)}goGround(e,t,i){let n=this.side(e),r=this.other(n);this.mode!=="ground"?(this.G.copy(r.pos),this.G.length()>bt*.55&&this.G.setLength(bt*.55),this.gDir.copy(n.pos).sub(r.pos).setY(0),this.gDir.lengthSq()<1e-4&&this.gDir.set(1,0,0),this.gDir.normalize()):this.top!==e&&this.gDir.negate(),this.mode="ground",this.top=e,this.down=null,t||(n.f.stopActions(),r.f.stopActions()),this.setGroundPos(i||"guard",t)}setGroundPos(e,t){Gh[e]||(e="guard"),this.gpos=e,this.holding=!1;let i=this.side(this.top),n=this.other(i),[r,a]=Gh[e];i.f.setBase(r),n.f.setBase(a)}standUp(e,t){let n=this.mode==="ground"&&this.top?this.other(this.side(this.top)).tag:this.down;this.mode="stand",this.top=this.down=null,this.gpos=null,this.holding=!1,this.C.copy(this.P.pos).add(this.O.pos).multiplyScalar(.5).setY(0),this.theta=Math.atan2(this.O.pos.z-this.P.pos.z,this.O.pos.x-this.P.pos.x);for(let r of[this.P,this.O])r.tag===n?t(r,Ht.getUp,"stance"):(r.f.setBase("stance"),e||r.f.stopActions())}finish(e,t,i,n){let r=t.winner==="player"?this.P:t.winner==="opponent"?this.O:null,a=r?this.other(r):null,o=t.methodType,l=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",h=/doctor/i.test(this.lastInfo||"");if(i||(Dn(null),wt(1),this.excite=1,setTimeout(()=>Mo(l),900)),o==="DEC"||!r){let c=()=>{this.mode="ended",this.decision={W:r,L:a};for(let u of[this.P,this.O])u.f.setBase(r?u===r?"victory":"dejected":"relaxed");r&&this.ref.f.setBase("refRaise")};return i?c():(yi("bell3"),On(r?`Your winner, by ${t.method.toLowerCase()}... ${r.tag==="p"?t.player.name:t.opponent.name}!`:"This one is a draw!"),this.later(1.2,c)),4200}if(o==="SUB"){if(!i){let c=a.f.base;a.f.play(Ht.tap(c),c),yi("tap"),On("Tap! Tap! It's all over!"),this.closeUp(a,2,!0)}return this.later(1.3,()=>{i||this.ref.f.play(Ht.waveOff,"ref"),this.refIn=!0},i),this.later(2,()=>this.endPoses(r,a,"sitting",i),i),4600}return!h&&this.down!==a.tag&&(i?this.knockDown(a,!0):this.later(.15,()=>this.knockDown(a,!1))),i||(On(h?"The doctor has stopped the fight!":"It's all over!"),h||this.closeUp(a,1.8),this.refIn=!0),this.later(1.6,()=>this.endPoses(r,a,h?"dejected":"down",i),i),4400}endPoses(e,t,i,n){this.mode="ended",this.decision=null;let r=e.pos.clone().sub(t.pos).setY(0);r.lengthSq()<1e-4&&r.set(1,0,0);let a=t.pos.clone().addScaledVector(r.normalize(),2.2);a.length()>bt*.62&&a.setLength(bt*.62),this.ended={W:e,L:t,spot:a,lPos:t.pos.clone(),lYaw:t.yaw},t.f.setBase(i),e.f.setBase("victory"),n||e.f.play(Ht.celebrate,"victory")}layout(e){let t=this.P,i=this.O,n=this.ref,r=this.t;for(let a of[t,i])a.fixedYaw=null;switch(this.mode){case"intro":case"stand":{if(this.mode==="stand"){this.theta+=e*.16;let l=new b(Math.sin(r*.11)*1,0,Math.cos(r*.083)*.8);this.C.lerp(l,Fn(.3,e))}this.C.length()>bt*.5&&this.C.setLength(bt*.5);let a=new b(Math.cos(this.theta),0,Math.sin(this.theta)),o=this.mode==="intro"?1.05:1.3;t.target.copy(this.C).addScaledVector(a,-o/2),i.target.copy(this.C).addScaledVector(a,o/2),n.target.copy(this.C).addScaledVector(this.farSide(),this.refIn?.6:this.mode==="intro"?.9:2);break}case"ground":{let a=this.side(this.top),o=this.other(a),l=lp[this.gpos]||lp.guard,h=new b(this.gDir.z,0,-this.gDir.x);o.target.copy(this.G),a.target.copy(this.G).addScaledVector(this.gDir,l.a).addScaledVector(h,l.c),o.fixedYaw=Math.atan2(this.gDir.x,this.gDir.z),a.fixedYaw=o.fixedYaw+l.yaw,n.target.copy(this.G).addScaledVector(this.farSide(),this.refIn?.9:1.8).addScaledVector(this.gDir,.2);break}case"down":{let a=this.side(this.down),o=this.other(a);a.target.copy(a.pos);let l=o.pos.clone().sub(a.pos).setY(0);l.lengthSq()<1e-4&&l.set(1,0,0),l.normalize(),o.target.copy(a.pos).addScaledVector(l,1.15),a.fixedYaw=Math.atan2(l.x,l.z),n.target.copy(a.pos).addScaledVector(this.farSide(),this.refIn?.8:1.6).addScaledVector(l,.5);break}case"corners":t.target.copy(this.cornerSpot.p),i.target.copy(this.cornerSpot.o),t.fixedYaw=ks(t.target,new b),i.fixedYaw=ks(i.target,new b),n.target.set(0,0,0).add(new b(this.cornerSpot.p.z,0,-this.cornerSpot.p.x).setLength(1.2));break;case"ended":{if(this.decision){let a=new b(0,0,0),o=new b(Math.sin(this.cam.yaw),0,Math.cos(this.cam.yaw)),l=new b(o.z,0,-o.x),h=Math.atan2(o.x,o.z);n.target.copy(a);let{W:c,L:u}=this.decision;(c||t).target.copy(a).addScaledVector(l,-.55),(u||i).target.copy(a).addScaledVector(l,.55),t.fixedYaw=i.fixedYaw=n.fixedYaw=h}else if(this.ended){let{W:a,L:o,spot:l,lPos:h,lYaw:c}=this.ended;o.target.copy(h),o.fixedYaw=c,a.target.copy(l),a.fixedYaw=Math.atan2(this.camera.position.x-l.x,this.camera.position.z-l.z),n.target.copy(h).addScaledVector(this.farSide(),.9)}break}}(this.mode!=="ended"||!this.decision)&&(n.fixedYaw=null)}farSide(){return new b(-Math.sin(this.cam.yaw),0,-Math.cos(this.cam.yaw))}place(e,t){e.pos.lerp(e.target,Fn(e.rate,t));let i=e.fixedYaw??(e===this.ref?ks(e.pos,this.focusPoint()):ks(e.pos,this.other(e).pos));e.yaw=Jh(e.yaw,i,Fn(8,t)),this.t>e.lungeUntil&&(e.lungeTarget=0),e.lunge+=(e.lungeTarget-e.lunge)*Fn(14,t);let n=e.f.root;n.position.set(e.pos.x+Math.sin(e.yaw)*e.lunge,0,e.pos.z+Math.cos(e.yaw)*e.lunge),n.rotation.y=e.yaw,e.ring&&e.ring.position.set(n.position.x,.012,n.position.z)}focusPoint(){return this.P.pos.clone().add(this.O.pos).multiplyScalar(.5)}spark(e,t){let i=t>1.2?6:2;for(let n=0;n<i;n++){let r=this.sparks.find(a=>a.t>=a.dur);if(!r)return;r.t=0,r.dur=n===0?.18:.45,r.size=n===0?.35+t*.2:.06,r.s.position.copy(e),r.v.set((Math.random()-.5)*2.5,Math.random()*2,(Math.random()-.5)*2.5),n===0&&r.v.set(0,0,0),r.s.visible=!0}}closeUp(e,t,i=!1){e&&(this.cam.close={s:e,until:this.real+t,low:i,fresh:!0})}snapCamera(){this.updateCamera(0,!0)}updateCamera(e,t=!1){let i=this.cam,n=this.P.pos,r=this.O.pos,a=r.clone().sub(n),o=Math.atan2(a.x,a.z)+Math.PI/2;Math.abs(Jh(i.yaw,o,1)-i.yaw)>Math.PI/2&&(o+=Math.PI);let l,h,c,u=o+Math.sin(this.real*.07)*.5+this.userYaw,d=1.4;if(i.close&&this.real>i.close.until&&(i.close=null,t=!0),i.close)l=i.close.s.f.worldPoint(i.close.low?"chest":"head"),h=i.close.low?2.6:2.3,c=i.close.low?.9:.25,u=o+.65+this.userYaw,i.close.fresh&&(i.close.fresh=!1,t=!0),d=3;else{l=n.clone().add(r).multiplyScalar(.5);let _=this.mode;_==="ended"&&this.ended&&(l=this.ended.W.pos.clone().lerp(this.ended.L.pos,.35)),_==="ended"&&this.decision&&(l=new b),l.y=_==="ground"||_==="down"?.55:1.05,h={stand:4.7,intro:3.9,ground:3.9,down:4.1,corners:6.4,ended:4.4}[_]||4.7,c={corners:4.4,ground:1.1,down:1}[_]??.7,_==="corners"&&(l.set(0,.9,0),this.camera.aspect<1.1&&(u=Math.atan2(this.cornerSpot.p.x,this.cornerSpot.p.z)+.15+this.userYaw,h=8,c=5.5))}let p=t?1:Fn(d,e);i.yaw=Jh(i.yaw,u,p),i.dist+=(h-i.dist)*p,i.h+=(c-i.h)*p,i.focus.lerp(l,t?1:Fn(d*1.5,e));let m=this.camera;m.position.set(i.focus.x+Math.sin(i.yaw)*i.dist,i.focus.y+i.h,i.focus.z+Math.cos(i.yaw)*i.dist);let y=Math.hypot(m.position.x,m.position.z),f=this.mode==="corners"&&!i.close?bt+4:bt-.45;y>f&&(m.position.x*=f/y,m.position.z*=f/y,m.position.y+=(y-f)*.35);for(let _ of this.panels)_.visible=_.position.distanceTo(m.position)>1.6||y<bt-1.6;i.shake>.001&&(m.position.x+=(Math.random()-.5)*i.shake,m.position.y+=(Math.random()-.5)*i.shake,i.shake*=Math.exp(-e*6)),m.lookAt(i.focus)}update(e){if(!this.P)return;this.real+=e;let t=this.real<this.slowUntil?.3:1,i=e*t*this.speed;this.t+=i;let n=this.timers.filter(r=>r.at<=this.t);this.timers=this.timers.filter(r=>r.at>this.t),n.forEach(r=>r.fn()),this.layout(i);for(let r of[this.P,this.O,this.ref])r.rate=this.mode==="ground"?7:4,this.place(r,i),r.f.update(i);this.excite+=(.25-this.excite)*Fn(.35,e),this.crowd.update(this.real,this.excite);for(let r of this.sparks){if(r.t>=r.dur)continue;r.t+=i;let a=Math.min(1,r.t/r.dur);r.s.position.addScaledVector(r.v,i),r.v.y-=6*i,r.s.scale.setScalar(r.size*(r.size>.1?.4+a:1)),r.s.material.opacity=1-a,a>=1&&(r.s.visible=!1)}this.updateCamera(e)}};var Me=class extends Error{},ge=()=>Math.random(),je=s=>Math.floor(Math.random()*s),ac=()=>Math.random()<.5;function zn(){let s=0;for(;s===0;)s=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*Math.random())}var nt=s=>s[je(s.length)],Ai=(s,e,t)=>Math.max(e,Math.min(t,s)),Ur=s=>Math.round(s).toLocaleString("en-US");function tg(s){for(let e=s.length-1;e>0;e--){let t=je(e+1);[s[e],s[t]]=[s[t],s[e]]}return s}function Ao(){let s="";for(let e=0;e<32;e++)s+=je(16).toString(16);return s}var Ut=["striking","power","speed","wrestling","grappling","cardio","chin"],xp=["Striker","Wrestler","Jiu-Jitsu","Balanced"],ig=["Marcus","Diego","Ivan","Kenji","Tariq","Lucas","Mateo","Andre","Sergei","Malik","Rafael","Connor","Jamal","Tomasz","Kai","Darius","Elijah","Bruno","Nikolai","Omar","Viktor","Hiroshi","Leon","Caleb","Arman","Zane","Felipe","Yusuf","Dmitri","Jae-won","Mason","Tyrell","Santiago","Emeka","Rustam","Liam","Paulo","Gabe","Anton","Quinn"],ng=["Silva","Petrov","Okafor","Tanaka","Reyes","Kowalski","Brennan","Haddad","Volkov","Santos","Mendes","Novak","Adeyemi","Kim","Duarte","Morales","Ivanov","Walsh","Nakamura","Costa","Abdullaev","Fischer","Okoye","Lindqvist","Moreau","Gutierrez","Tsarukyan","Barros","Hughes","Nguyen","Castillo","Yamamoto","Kruger","Dvorak","Ferreira","O'Rourke","Bakr","Salazar","Jensen","Popescu"],sg=["The Hammer","Iceman","The Machine","Bulldozer","The Python","Lights Out","Storm","The Reaper","Mad Dog","The Surgeon","Thunder","The Wolf","Cyclone","The Anaconda","Dynamite","Ghost","The Butcher","Smooth","The Natural","Venom","Tank","Kid Danger","The Professor","Wildfire"],oc=["USA","Brazil","Russia","Mexico","Ireland","Japan","Nigeria","Poland","Australia","Canada","Georgia","Sweden","England","South Korea","France","Kazakhstan","Netherlands","Cuba","Vietnam","Philippines"],ht=class s{constructor(e,t,i,n,r){this.id=Ao().slice(0,12),this.name=e,this.nickname=t||"",this.style=i,this.country=n,this.age=r,this.stats={};for(let a of Ut)this.stats[a]=40;this.wins=this.losses=this.draws=this.koWins=this.subWins=this.decWins=0,this.streak=0,this.player=!1,this.look=null}get(e){return this.stats[e]??0}set(e,t){this.stats[e]=Ai(t,1,99)}add(e,t){this.set(e,this.get(e)+t)}overall(){let e=0;for(let t of Ut)e+=this.get(t);return Math.round(e/Ut.length)}record(){return`${this.wins}-${this.losses}-${this.draws}`}lastName(){return this.name.slice(this.name.lastIndexOf(" ")+1)}displayName(){if(!this.nickname.trim())return this.name;let e=this.name.lastIndexOf(" ");return e<0?`${this.name} "${this.nickname}"`:`${this.name.slice(0,e)} "${this.nickname}" ${this.name.slice(e+1)}`}recordResult(e,t){e==="W"?(this.wins++,this.streak=this.streak>0?this.streak+1:1,t==="KO"?this.koWins++:t==="SUB"?this.subWins++:this.decWins++):e==="L"?(this.losses++,this.streak=this.streak<0?this.streak-1:-1):(this.draws++,this.streak=0)}static bias(e,t){let i={Striker:{striking:12,power:8,speed:6,wrestling:-8,grappling:-10},Wrestler:{wrestling:14,cardio:7,grappling:3,power:2,striking:-6,speed:-3},"Jiu-Jitsu":{grappling:16,wrestling:3,cardio:3,striking:-8,power:-6}}[e];return i&&i[t]||0}static weightAdj(e,t){let i=e-3.5;return t==="power"?i*1.6:t==="speed"?-i*1.6:t==="chin"?i*.6:0}static generate(e,t){let i=nt(xp),n=nt(ig)+" "+nt(ng),r=ge()<.6?nt(sg):"",a=new s(n,r,i,nt(oc),22+je(13));for(let o of Ut)a.set(o,e+s.bias(i,o)+s.weightAdj(t,o)+zn()*4);return a.wins=Math.max(0,Math.trunc((e-30)/3.5)+je(4)),a.losses=je(2+Math.floor(a.wins/4)),a.draws=ge()<.15?1:0,a.koWins=Math.floor(je(a.wins+1)/2),a.subWins=Math.floor(je(a.wins-a.koWins+1)/2),a.decWins=a.wins-a.koWins-a.subWins,a.streak=je(4),a}toJson(){return{name:this.name,nickname:this.nickname,displayName:this.displayName(),style:this.style,country:this.country,age:this.age,record:this.record(),overall:this.overall(),koWins:this.koWins,subWins:this.subWins,decWins:this.decWins,streak:this.streak,stats:{...this.stats},look:this.look}}};ht.tag="Fighter";function rg(s,e){let t=Ut.map(n=>Math.round(e+ht.bias(s.style,n)*.5)),i=e*Ut.length-t.reduce((n,r)=>n+r,0);for(let n=0;i!==0;n=(n+1)%t.length){let r=Math.sign(i);t[n]+=r,i-=r}Ut.forEach((n,r)=>s.set(n,t[r]))}var bp=["head","striking","wrestling","bjj","snc","physio","manager"],ag=[0,100,250,600,1500,3500],og=["Greg","Rafa","Mike","Duke","Javier","Firas","Trevor","Eddie","Mark","Henri","Ray","Sam","Bas","Andre","Lou","Teo","Frankie","Coach Kim","Pat","Oleg"],lg=["Jacobsen","Cordova","Winkler","Rourke","Mendez","Haddadi","Whitlock","Bravo","Delgado","Dunmore","Lombardi","Kearney","Tatum","Mirkovic","Sauer","Ben\xEDtez","Reed","Holmberg","Okafor","Varga"],hg={head:"Head Coach",striking:"Striking Coach",wrestling:"Wrestling Coach",bjj:"BJJ Coach",snc:"Strength & Conditioning",physio:"Physio",manager:"Manager"},Xi=class s{constructor(e,t,i){this.role=e,this.name=t,this.stars=i}salary(){return ag[this.stars]}signingFee(){return this.salary()*4}fameRequired(){return(this.stars-1)*12}static title(e){return hg[e]||e}static perk(e,t){switch(e){case"head":return`+${3*t}% all training, +${2*t} stamina between rounds`+(t>=3?", scouts the opponent's game plan":"");case"striking":return`+${10*t}% striking, power & speed training`;case"wrestling":return`+${10*t}% wrestling training`;case"bjj":return`+${10*t}% grappling training`;case"snc":return`+${10*t}% cardio & chin training, -${t} energy per session`;case"physio":return`-${15*t}% injury risk, faster healing, +${3*t} energy on rest weeks`;case"manager":return`+${5*t}% purses, extra fame from media & trash talk`;default:return""}}static generate(){let e=nt(bp),t=ge(),i=t<.3?1:t<.6?2:t<.82?3:t<.94?4:5;return new s(e,nt(og)+" "+nt(lg),i)}toJson(){return{role:this.role,title:s.title(this.role),name:this.name,stars:this.stars,salary:this.salary(),fee:this.signingFee(),fameRequired:this.fameRequired(),perk:s.perk(this.role,this.stars)}}};Xi.tag="Staff";var Vi={RESPECT:["{o} is a tough fighter and I respect the grind. But respect ends when the cage door closes.","Nothing but respect for {o}. May the best fighter win.","{o} has earned this. I'm just going to be better on the night.","I've studied {o} for years. Great fighter. That's why beating them will mean something."],TRASH:["{o} fights like they learned MMA from a video game. I'm going to expose that.","I watched {o}'s highlight reel. Didn't take long.","Tell {o} to enjoy the walkout. It's the best part of the night for them.","{o}'s chin has been writing checks the rest of that body can't cash.","I'm going to put {o} on a poster \u2014 the 'before' picture.","{o} has a great ground game. That's where they'll be looking at the lights from."],PERSONAL:["{o} is a fraud, the whole gym knows it, and I'm going to prove it in front of everyone.","When I'm done, {o} will be teaching seminars on how to lose.","{o}'s coach should be charged with negligence for letting them take this fight.","I don't just want to beat {o}. I want {o} to retire."],REPLY_RESPECT:["Respect to {m}. It's going to be a great fight.","{m} is the real deal. I'm ready for war.","Class act, that {m}. Still putting them down, though."],REPLY_CALM:["{m} talks a lot for someone who hasn't fought anybody.","I'll let my hands do the talking on fight night.","Keep my name in your mouth, {m}. It's the closest you'll get to a win.","Words don't win fights. See you in the cage."],REPLY_ANGRY:["Say that to my face, {m}. Oh wait \u2014 you will. And then you'll be asleep.","This is personal now. {m} is leaving on a stretcher.","I'm going to make {m} regret every single word.","I've never wanted to hurt someone this badly. {m} just made my whole camp easy."],CALLOUTS:["{o} is hiding from me. Everyone knows I'm the better fighter.","Still waiting on {o} to sign the contract. Scared?","{o} got lucky last time and the whole world knows it.","I'll fight {o} anywhere, any time. Their team keeps saying no."]},To=(s,e,t)=>s.replaceAll("{o}",e).replaceAll("{m}",t),Qh=300,hc={BALANCED:[1,1],STRIKE:[1.2,1],WRESTLE:[1.1,1.3],SUBMIT:[1,1.15],COUNTER:[.6,.65],ALLOUT:[1.6,1.9]},up=s=>hc[s][0],cg=s=>hc[s][1],dp=["jab-cross","stiff jab","overhand right","left hook","body kick","leg kick","uppercut","spinning back fist","knee up the middle","1-2-hook combination","straight left","calf kick","teep to the body","oblique kick","switch kick to the body","spinning back kick to the body","superman punch","front kick"],ug=["crushing overhand right","perfectly timed left hook","head kick","flying knee","short uppercut","counter right hand"],ec=["spinning back kick","spinning heel kick","spinning back elbow","superman punch","front kick to the face","question mark kick","cartwheel kick","tornado kick","rolling thunder kick","Showtime kick","axe kick","hook kick","jumping switch kick","jumping spinning back fist","flying knee","spinning back fist"],dg=[["shoots a double-leg","double-leg"],["hits a single-leg","single-leg"],["secures a body lock","body lock"],["times a reactive takedown","reactive takedown"],["trips from the clinch","trip"],["hits a huge suplex","suplex"],["picks up and SLAMS","slam"],["launches a judo hip toss on","judo throw"],["snatches an ankle pick on","ankle pick"]],lc={"rear-naked choke":"back","arm-triangle choke":"side",kimura:"side","D'Arce choke":"headlock",armbar:"mount","guillotine choke":"headlock",americana:"side"},pg=Object.keys(lc),fg=["triangle choke","armbar","guillotine choke","kimura","heel hook","omoplata"],tc=["guard","half","side","mount","back"],pp={half:" passes into half guard.",side:" passes to side control.",mount:" climbs to full mount!",back:" takes the back!",headlock:" snaps down into a front headlock."},Ds=s=>("aeiou".includes(s[0].toLowerCase())?"an ":"a ")+s,Eo=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0"),Os=class{constructor(e,t){this.f=e,this.tag=t,this.damage=0,this.stamina=100,this.bonus=0,this.plan="BALANCED",this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0,this.totSig=this.totTd=this.totKd=0}s(e){return Math.min(99,this.f.get(e)+this.bonus)}sf(){return .45+this.stamina/180}n(){return this.f.lastName()}newRound(){this.sig=this.td=this.kd=this.control=this.subAtt=0,this.dealt=0}toJson(){return{name:this.f.displayName(),record:this.f.record(),overall:this.f.overall(),style:this.f.style,look:this.f.look,realName:this.f.name,health:Math.max(0,100-this.damage),stamina:Math.max(0,this.stamina),sig:this.totSig,td:this.totTd,kd:this.totKd,plan:this.plan}}};Os.tag="Corner";var Dr=class{constructor(e,t,i,n,r,a){this.p=new Os(e,"p"),this.o=new Os(t,"o"),this.o.bonus=r,this.rounds=i,this.title=n,this.coachStars=a,this.round=0,this.finished=!1,this.winner=this.methodType=this.method=this.endTime=null,this.endRound=0,this.judges=[[0,0],[0,0],[0,0]],this.logs=[],this.current=null,this.ground=!1,this.topTag=null,this.pos=null,this.clock=0,this.oppNext=this.aiPlan(1)}get top(){return this.topTag==="p"?this.p:this.topTag==="o"?this.o:null}set top(e){this.topTag=e?e.tag:null}playerDamage(){return this.p.damage}simulateRound(e){if(this.finished)throw new Me("The fight is over.");for(this.round++,this.p.plan=e,this.o.plan=this.oppNext,this.p.newRound(),this.o.newRound(),this.ground=!1,this.top=null,this.pos=null,this.clock=0,this.current=[],this.logs.push(this.current),this.ev("info",null,"Round "+this.round+" \u2014 touch gloves and let's go!");!this.finished;){let t=10+je(16);if(this.clock+t>=Qh){this.ground&&(this.top.control+=Qh-this.clock),this.clock=Qh;break}this.clock+=t,this.ground?(this.top.control+=t,this.groundExchange()):this.standExchange()}this.finished||this.closeRound()}aiPlan(e){let t={Striker:"STRIKE",Wrestler:"WRESTLE","Jiu-Jitsu":"SUBMIT"}[this.o.f.style]||"BALANCED",i=ge();return e===this.rounds&&this.rounds>1&&this.cardLead()>0&&i<.6?"ALLOUT":this.o.damage>60&&i<.4?this.o.f.style==="Striker"?"COUNTER":"WRESTLE":i<.2?"BALANCED":t}cardLead(){let e=0;for(let t of this.judges)e+=t[0]-t[1];return e}other(e){return e===this.p?this.o:this.p}drain(e){return 3.5*(1.6-e.s("cardio")/100)*cg(e.plan)}standExchange(){let e=this.p,t=this.o,i=up(e.plan)*(e.s("speed")+50)*e.sf(),n=up(t.plan)*(t.s("speed")+50)*t.sf(),r=ge()*(i+n)<i?e:t,a=this.other(r),o={STRIKE:.08,WRESTLE:.55,SUBMIT:.45,COUNTER:.15,ALLOUT:.05}[r.plan]??Ai(.22+(r.s("wrestling")-a.s("wrestling")-(r.s("striking")-a.s("striking")))/150,.05,.6);if(ge()<o?this.takedown(r,a):this.strike(r,a,!1),!this.finished&&!this.ground){let l=a.plan==="COUNTER"?.5:.2;ge()<l&&this.strike(a,r,!0)}}strike(e,t,i){let n=2+je(4)+(e.plan==="ALLOUT"?2:0),r=.38+(e.s("striking")-t.s("striking"))*.004+(e.s("speed")-t.s("speed"))*.002;r=r*e.sf()+(i?.06:0)-(t.plan==="COUNTER"?.05:0)+t.damage/500,r=Ai(r,.1,.75);let a=0,o=0,l=!1;for(let c=0;c<n;c++)ge()<r&&(a++,o+=(.6+e.s("power")/60)*(.5+ge())*(e.plan==="ALLOUT"?1.25:1),!l&&ge()<.012+e.s("power")/3e3&&(l=!0));e.stamina=Math.max(0,e.stamina-this.drain(e));let h=.05+Math.max(0,e.s("striking")+e.s("speed")-110)/300;if(a===0){if(ge()<.35){let c=ge()<h*2?nt(ec):nt(dp);this.ev("miss",e,e.n()+" throws "+Ds(c)+" but "+t.n()+" slips it.",c,0)}return}if(e.sig+=a,e.totSig+=a,l){o+=6+e.s("power")/8,this.hit(e,t,o);let c=ge()<.25+h?nt(ec):nt(ug),u=e.s("power")/100*.55*(1.25-t.s("chin")/100)+t.damage/250;if(ge()<u){e.kd++,e.totKd++,this.ev("kd",e,"DOWN GOES "+t.n().toUpperCase()+"! A "+c+" from "+e.n()+" puts "+t.n()+" on the canvas!",c,a);let d=.2+t.damage/180-t.s("chin")/400+(e.plan==="ALLOUT"?.1:0);if(ge()<d){ac()?this.finish(e,"KO","KO ("+c+")"):this.finish(e,"KO","TKO (punches)");return}t.damage+=4,this.ev("info",t,t.n()+" survives the follow-up and makes it back to the feet!")}else this.ev("big",e,e.n()+" lands "+Ds(c)+"! "+t.n()+" is rocked.",c,a)}else{this.hit(e,t,o);let c=ge()<h?nt(ec):nt(dp),u;i?u=e.n()+" fires back with "+Ds(c)+".":a>=4?u=e.n()+" unloads a flurry \u2014 "+a+" strikes land on "+t.n()+".":a>=2?u=e.n()+" connects with "+Ds(c)+".":u=e.n()+" lands "+Ds(c)+".",this.ev("strike",e,u,c,a)}this.checkStoppage(e,t,"punches")}takedown(e,t){let i=.32+(e.s("wrestling")-t.s("wrestling"))*.008;if(i=Ai(i*e.sf()+(t.stamina<35?.1:0),.05,.85),e.stamina=Math.max(0,e.stamina-this.drain(e)*1.4),ge()<i){e.td++,e.totTd++;let[n,r]=nt(dg);this.ground=!0,this.top=e;let a=ge(),o=r==="slam"||r==="suplex"||r==="judo throw"?.35:0;this.pos=a<.08+o/3?"mount":a<.2+o?"side":a<.42+o?"half":"guard";let l=/SLAMS|on$/.test(n)?e.n()+" "+n+" "+t.n()+"!":e.n()+" "+n+" and takes "+t.n()+" down.";this.ev("td",e,l,r,0)}else this.ev("stuff",t,t.n()+" stuffs a takedown attempt from "+e.n()+".")}groundExchange(){let e=this.top,t=this.other(e),i=(t.plan==="SUBMIT"?.45:.3)+(t.s("grappling")>e.s("grappling")+10?.1:0);if(ge()<i)if((t.plan==="SUBMIT"||t.s("grappling")>65&&ge()<.35)&&ge()<.5)this.submission(t,e,!0);else{let r=.28+(t.s("wrestling")-e.s("wrestling"))*.006+(t.s("grappling")-e.s("grappling"))*.003;r=Ai(r*t.sf(),.05,.7),ge()<r?t.s("grappling")>e.s("grappling")&&ge()<.3?(this.top=t,this.pos=ge()<.3?"mount":"guard",this.ev("sweep",t,t.n()+" hits a slick sweep and ends up "+(this.pos==="mount"?"in full mount!":"on top!"))):this.position()>=2&&ge()<.5?(this.pos="guard",this.ev("ground",t,t.n()+" shrimps out and recovers guard.")):(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" scrambles back to the feet.")):ge()<.4&&this.ev("ground",e,e.n()+" keeps "+t.n()+" pinned against the fence.")}else{let n=(e.plan==="SUBMIT"||e.s("grappling")>70&&ge()<.25)&&ge()<.6,r=.18+(e.s("grappling")-t.s("grappling"))*.006;n?this.submission(e,t,!1):this.position()<4&&ge()<Ai(r,.05,.45)?this.advance(e):this.groundAndPound(e,t)}e.stamina=Math.max(0,e.stamina-this.drain(e)*.8),t.stamina=Math.max(0,t.stamina-this.drain(t)*1.1)}position(){return Math.max(0,tc.indexOf(this.pos||"guard"))}advance(e){let t=this.position(),i=t>=1&&t<3&&ge()<.2?"back":tc[t+1];this.pos=i,this.ev("ground",e,e.n()+pp[i])}groundAndPound(e,t){let i=2+je(4),n=.45+(e.s("wrestling")+e.s("grappling")-t.s("wrestling")-t.s("grappling"))*.002;n=Ai(n*e.sf(),.2,.75);let r=0,a=0;for(let l=0;l<i;l++)ge()<n&&(r++,a+=(.4+e.s("power")/80)*(.5+ge())*[1,1.05,1.1,1.3,1.2][this.position()]);if(r===0){ge()<.5&&this.ev("ground",t,e.n()+" postures up but "+t.n()+" ties up the arms.");return}e.sig+=r,e.totSig+=r,this.hit(e,t,a);let o={mount:" from full mount",back:" from back control",side:" from side control"}[this.pos]||"";r>=3?this.ev("gnp",e,e.n()+" rains down ground and pound"+o+" \u2014 "+r+" shots land!","punches",r):this.ev("gnp",e,e.n()+" lands "+(r===1?"a short elbow":"short punches")+" from top.",r===1?"elbow":"punches",r),this.checkStoppage(e,t,"ground and pound")}submission(e,t,i){e.subAtt++;let n=nt(i?fg:pg);!i&&lc[n]!==this.pos&&(this.pos=lc[n],this.ev("ground",e,e.n()+(pp[this.pos]||" moves to "+this.pos+"."))),i&&(this.pos=n==="heel hook"?"legs":"guard");let r=.07+(e.s("grappling")-t.s("grappling"))*.006+t.damage/400+(t.stamina<35?.07:0);if(i&&(r*=.7),r=Ai(r*e.sf(),.01,.55),e.stamina=Math.max(0,e.stamina-3),this.ev("subatt",e,e.n()+" locks up "+Ds(n)+(i?" from the bottom!":"!"),n,0),ge()<r){this.finish(e,"SUB","Submission ("+n+")");return}this.ev("info",t,t.n()+" defends and escapes the "+n+"."),this.pos==="legs"||this.pos==="headlock"?this.pos="guard":!i&&ge()<.5&&(this.pos=tc[Math.max(0,this.position()-2)]),!i&&ge()<.25&&(this.ground=!1,this.top=null,this.pos=null,this.ev("info",t,t.n()+" uses the scramble to get back up."))}hit(e,t,i){t.damage+=i,e.dealt+=i}checkStoppage(e,t,i){this.finished||(t.damage>=100||t.damage>85&&ge()<.2)&&(this.ev("info",e,"The referee jumps in to save "+t.n()+"!"),this.finish(e,"KO","TKO ("+i+")"))}score(e){return e.sig+e.dealt*.6+e.td*3+e.control/25+e.kd*10+e.subAtt*2}closeRound(){let e=this.p,t=this.o,i=this.score(e),n=this.score(t);for(let r of this.judges){let a=i*(1+zn()*.12)+zn()*1.5,o=n*(1+zn()*.12)+zn()*1.5,l=a-o,h=10,c=10;l>=.6?c=e.kd-t.kd>=2||a>o*3&&l>30?8:9:l<=-.6&&(h=t.kd-e.kd>=2||o>a*3&&-l>30?8:9),r[0]+=h,r[1]+=c}this.ev("round",null,"End of round "+this.round+". Sig. strikes "+e.sig+"\u2013"+t.sig+", takedowns "+e.td+"\u2013"+t.td+", control "+Eo(e.control)+"\u2013"+Eo(t.control)+".");for(let r of[e,t])r.stamina=Math.min(100,r.stamina+18+r.s("cardio")/5+(r===e?this.coachStars*2:0)),r.damage=Math.max(0,r.damage-4);for(let r of[e,t])if(r.damage>85&&ge()<.15){this.ev("info",r,"The cageside doctor takes a look at "+r.n()+" and waves it off!"),this.finish(this.other(r),"KO","TKO (doctor stoppage)");return}this.round===this.rounds?this.decision():this.oppNext=this.aiPlan(this.round+1)}decision(){let e=0,t=0;for(let r of this.judges)r[0]>r[1]?e++:r[1]>r[0]&&t++;this.finished=!0,this.methodType="DEC",this.endRound=this.rounds,this.endTime="5:00",e>=2?(this.winner="player",this.method=e===3?"Unanimous Decision":t===1?"Split Decision":"Majority Decision"):t>=2?(this.winner="opponent",this.method=t===3?"Unanimous Decision":e===1?"Split Decision":"Majority Decision"):(this.winner="draw",this.method=e===0&&t===0?"Unanimous Draw":e===1&&t===1?"Split Draw":"Majority Draw");let i=this.winner==="player"?this.p:this.winner==="opponent"?this.o:null,n=i?"Winner by "+this.method+": "+i.f.displayName()+"!":"This one is a draw!";this.ev("finish",i,"The judges score it "+this.cards().join(", ")+". "+n)}finish(e,t,i){this.finished=!0,this.winner=e===this.p?"player":"opponent",this.methodType=t,this.method=i,this.endRound=this.round,this.endTime=Eo(this.clock),this.ev("finish",e,"IT'S ALL OVER! "+e.f.displayName()+" wins by "+i+" at "+this.endTime+" of round "+this.round+"!")}cards(){return this.judges.map(e=>e[0]+"-"+e[1])}ev(e,t,i,n=null,r=0){let a={t:Eo(this.clock),type:e,side:t?t.tag:"n",text:i,g:this.ground&&this.topTag?this.topTag:""};this.ground&&this.topTag&&(a.p=this.pos||"guard"),n!=null&&(a.move=n),r>0&&(a.n=r),this.current.push(a)}toJson(){return{round:this.round,rounds:this.rounds,title:this.title,finished:this.finished,winner:this.winner,methodType:this.methodType,method:this.method,endRound:this.endRound,endTime:this.endTime,player:this.p.toJson(),opponent:this.o.toJson(),logs:this.logs,cards:this.finished?this.cards():null,scout:this.coachStars>=3&&!this.finished?this.oppNext:null,oppFiredUp:this.o.bonus>0}}};Dr.tag="Fight";var Gt=["Flyweight","Bantamweight","Featherweight","Lightweight","Welterweight","Middleweight","Light Heavyweight","Heavyweight"],Wi=["Garage Gym","Local MMA Club","Regional Fight Team","Elite Camp","World-Class Academy"],fp=[0,3e3,15e3,5e4,15e4],ic=[1,1.25,1.5,1.8,2.1],mp=[50,150,400,1e3,2500],nc=3,gp=52,Bn=16,vp=26,mg=60,gg=20,Yi=class{constructor(e,t,i,n,r,a,o){this.opp=e,this.weeks=t,this.purse=i,this.winBonus=n,this.rounds=r,this.title=a,this.contender=o,this.talkLevel=0,this.oppBonus=0}};Yi.tag="Offer";var yp=(s,e)=>{s.includes(e)||s.push(e)},_p=(s,e)=>{let t=s.indexOf(e);t>=0&&s.splice(t,1)},Or=class{constructor(e,t,i,n,r){if(e===void 0)return;this.weightClass=i,this.me=new ht(e,t,n,r,21),this.me.player=!0;for(let o of Ut)this.me.set(o,38+ht.bias(n,o)+ht.weightAdj(i,o)+zn()*3);this.week=1,this.energy=100,this.fame=this.injuryWeeks=this.gym=this.offersAge=0,this.money=1500,this.earnings=0,this.gfc=this.retired=this.inducted=!1,this.regionalWins=this.titleDefenses=this.titlesWon=0,this.peakOverall=this.me.overall(),this.lastDivisionChange=-999,this.lastTalkWeek=-1,this.divisionsWon=[],this.divisionsFought=[Gt[i]],this.rankings=[],this.offers=[],this.scheduled=null,this.fight=null,this.news=[],this.history=[],this.lastResult=this.lastTalk=null,this.team={},this.market=[],this.marketAge=0,this.rival=null,this.rivalHeat=this.rivalWins=this.rivalLosses=this.weeksWithoutRival=0,this.lastRivalFight=-999,this.rivalries=[],this.buildDivision(),this.log(this.me.name+" turns pro out of a "+Wi[0]+". The journey begins.");let a=ht.generate(this.me.overall()+1,i);a.age=21+je(2),a.wins=a.losses=a.draws=a.koWins=a.subWins=a.decWins=a.streak=0,this.setRival(a,30,"came up in the same amateur scene and has been telling everyone you're overrated"),this.refreshMarket(),this.generateOffers()}buildDivision(){this.rankings=[];for(let e=0;e<Bn;e++)this.rankings.push(ht.generate(88-e*1.2,this.weightClass))}act(e,t){this.requireActive();let i=this.me,n;switch(e||""){case"train":{if(!Ut.includes(t))throw new Me("Unknown stat.");if(this.injuryWeeks>0)throw new Me("You're injured \u2014 rest up first.");if(this.energy<this.trainCost())throw new Me("Too exhausted to train. Take a rest week.");let r=i.get(t);i.add(t,this.trainGain(t)*(t==="chin"?.5:1));let a=this.energy<35&&ge()<.06*this.injuryRisk();this.energy-=this.trainCost(),n=`Trained ${t}: +${(i.get(t)-r).toFixed(1)}`,a&&(n+=this.injure(1+je(3),"overtraining"));break}case"spar":if(this.injuryWeeks>0)throw new Me("You're injured \u2014 rest up first.");if(this.energy<30)throw new Me("Too exhausted to spar. Take a rest week.");for(let r of["striking","wrestling","grappling","speed"])i.add(r,this.trainGain(r)*.45);i.add("chin",-.15),this.energy-=30,n="Hard sparring \u2014 gains in striking, wrestling, grappling and speed.",ge()<.08*this.injuryRisk()&&(n+=this.injure(1+je(3),"sparring"));break;case"rest":this.energy=Math.min(100,this.energy+35+3*this.stars("physio")),this.injuryWeeks>0&&this.injuryWeeks--,n="Rest week. Energy recovered.";break;case"media":{if(this.energy<10)throw new Me("Too exhausted even for interviews.");let r=1+je(this.gfc?5:3)+Math.floor(this.stars("manager")/2),a=this.gfc?1500+this.fame*50:100;this.fame=Math.min(100,this.fame+r),this.money+=a,this.energy-=10,n="Media week: +"+r+" fame, +$"+Ur(a)+".";break}case"work":{if(this.energy<15)throw new Me("Too exhausted to teach classes.");let r=this.gfc?2e3+this.fame*60:450;this.money+=r,this.energy-=15,n=(this.gfc?"Ran a seminar":"Taught classes at the gym")+": +$"+Ur(r)+".";break}default:throw new Me("Unknown action.")}return this.advanceWeek(),n}trainCost(){return 22-this.stars("snc")}trainGain(e){let t=this.me.get(e);return 4*ic[this.gym]*this.staffMult(e)*this.ageFactor()*Math.pow(Math.max(.01,1-t/97.5),1.6)*(.4+this.energy/166)*(.7+ge()*.6)}staffMult(e){let t=["striking","power","speed"].includes(e)?"striking":e==="wrestling"?"wrestling":e==="grappling"?"bjj":"snc";return 1+.03*this.stars("head")+.1*this.stars(t)}ageFactor(){let e=this.me.age;return e<=24?1.15:e<=28?1:e<=31?.8:e<=34?.55:.35}injuryRisk(){return 1-.15*this.stars("physio")}injure(e,t){e=Math.max(1,e-Math.floor(this.stars("physio")/2)),this.injuryWeeks=Math.max(this.injuryWeeks,e);let i=e+" week"+(e===1?"":"s");return this.log("Injured ("+t+"): out "+i+".")," Ouch \u2014 injured for "+i+"."}upgradeGym(){if(this.retired)throw new Me("Your career is over.");if(this.gym>=Wi.length-1)throw new Me("You're already at the best gym in the world.");let e=fp[this.gym+1];if(this.money<e)throw new Me("You need $"+Ur(e)+" to move to "+Wi[this.gym+1]+".");return this.money-=e,this.gym++,this.log("Moved training camp to "+Wi[this.gym]+"."),"Welcome to "+Wi[this.gym]+"! Training is now "+Math.round(ic[this.gym]*100)+"% effective."}accept(e){if(this.requireActive(),this.scheduled)throw new Me("You already have a fight booked.");if(!(e>=0&&e<this.offers.length))throw new Me("That offer is no longer available.");let t=this.offers[e];if(this.injuryWeeks>=t.weeks)throw new Me("You won't be healed in time for that fight.");return this.scheduled=t,this.offers=[],this.log("Booked: "+(t.title?"TITLE FIGHT ":t.opp===this.rival?"GRUDGE MATCH ":"")+"vs "+t.opp.displayName()+" in "+t.weeks+" weeks."),"Fight booked! Get to work \u2014 fight night is in "+t.weeks+" weeks."}retire(){if(this.retired)throw new Me("You're already retired.");if(this.fight)throw new Me("Finish your fight first.");return this.endCareer(this.me.displayName()+" announces retirement at "+this.me.age+" with a record of "+this.me.record()+"."),"You hang up the gloves. Legacy: "+this.legacyTier()+"."}endCareer(e){this.retired=!0,this.scheduled=null,this.offers=[],this.rival&&this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log(e)}requireActive(){if(this.retired)throw new Me("Your career is over.");if(this.fight)throw new Me("Finish your fight first.");if(this.fightNight())throw new Me("It's fight night! Head to the cage.")}fightNight(){return!!this.scheduled&&this.scheduled.weeks<=0}stars(e){let t=this.team[e];return t?t.stars:0}refreshMarket(){this.market=[],this.marketAge=0;for(let e=0;e<6;e++)this.market.push(Xi.generate())}hire(e){if(this.retired)throw new Me("Your career is over.");if(!(e>=0&&e<this.market.length))throw new Me("That person already signed elsewhere.");let t=this.market[e];if(this.fame<t.fameRequired())throw new Me(t.name+" only works with fighters with "+t.fameRequired()+"+ fame.");if(this.money<t.signingFee())throw new Me("You need $"+Ur(t.signingFee())+" to sign "+t.name+".");this.money-=t.signingFee(),this.market.splice(e,1);let i=this.team[t.role];return this.team[t.role]=t,this.log("Signed "+t.name+" ("+t.stars+"\u2605 "+Xi.title(t.role)+")"+(i?", replacing "+i.name:"")+"."),t.name+" joins the team as "+Xi.title(t.role)+"!"}fire(e){if(this.retired)throw new Me("Your career is over.");let t=this.team[e||""];if(!t)throw new Me("Nobody in that role.");return delete this.team[e],this.log("Parted ways with "+Xi.title(t.role)+" "+t.name+"."),t.name+" has left the team."}teamSalary(){let e=0;for(let t of Object.values(this.team))e+=t.salary();return e}setRival(e,t,i){this.rival=e,this.rivalHeat=t,this.rivalWins=this.rivalLosses=0,this.weeksWithoutRival=0,this.log("RIVALRY: "+e.displayName()+" "+i+".")}rivalSummary(){let e=this.rival.displayName(),t=this.rivalWins+"-"+this.rivalLosses;return this.rivalWins>this.rivalLosses?"Beat "+e+" "+t:this.rivalLosses>this.rivalWins?"Lost to "+e+" "+t:"Even with "+e+" "+t}pinOthers(){if(this.meOverall)for(let n of Ut)this.me.set(n,this.meOverall);let e=this.npcOverall;if(!e)return;let t=new Set,i=n=>{if(!(!n||typeof n!="object"||t.has(n))){if(t.add(n),n instanceof ht){n!==this.me&&rg(n,e);return}for(let r of Object.keys(n))i(n[r])}};i(this)}rivalWeek(){let e=this.me;if(!this.rival){if(++this.weeksWithoutRival>=40&&!this.retired){let i=this.rankings.indexOf(e),n;if(this.gfc&&i>0?n=this.rankings[Math.max(1,Math.min(this.rankings.length-1,i+(ac()?1:-1)))]:n=ht.generate(e.overall()+1,this.weightClass),n===e)return;this.setRival(n,35,"calls you out in a viral interview")}return}let t=this.rival;if(this.week%4===0){let i=e.overall()+1-t.overall();for(let n of Ut)t.add(n,i*.25+zn()*.4)}if(!this.rankings.includes(t)&&ge()<.12&&(!this.scheduled||this.scheduled.opp!==t)){let i=ge()<.65,n=ge();t.recordResult(i?"W":"L",n<.4?"KO":n<.6?"SUB":"DEC"),i&&ge()<.5&&this.log("Your rival "+t.lastName()+" wins again ("+t.record()+") and says you're next.")}this.rivalHeat=Math.max(0,this.rivalHeat-1),this.rivalHeat>=50&&ge()<.08&&(this.log(t.lastName()+': "'+To(nt(Vi.CALLOUTS),e.lastName(),t.lastName())+'"'),this.rivalHeat=Math.min(100,this.rivalHeat+3))}rivalFought(e,t){if(this.lastRivalFight=this.week,e?(this.rivalWins++,this.rivalHeat=15):t&&(this.rivalLosses++,this.rivalHeat=45),Math.abs(this.rivalWins-this.rivalLosses)>=2||this.rivalWins+this.rivalLosses>=5){let i=this.rivalSummary();this.rivalries.push(i),this.log("Rivalry settled: "+i+"."),this.rival=null}}talk(e,t){if(this.retired)throw new Me("Your career is over.");if(this.fight)throw new Me("Finish your fight first.");if(this.lastTalkWeek===this.week)throw new Me("You've already said your piece this week.");let i;if(e==="rival"){if(!this.rival)throw new Me("You don't have a rival right now.");i=this.rival}else{if(!this.scheduled)throw new Me("You don't have a fight booked.");i=this.scheduled.opp}let n=!!this.scheduled&&this.scheduled.opp===i,r=i===this.rival,a=this.me.lastName(),o=i.lastName(),l=this.stars("manager"),h=[],c,u,d;switch(t||""){case"respect":c=nt(Vi.RESPECT),u=nt(ge()<.7?Vi.REPLY_RESPECT:Vi.REPLY_CALM),d=1,r&&(this.rivalHeat=Math.max(0,this.rivalHeat-5),h.push("Rivalry heat -5"));break;case"trash":c=nt(Vi.TRASH),u=nt(ac()?Vi.REPLY_CALM:Vi.REPLY_ANGRY),d=2+je(3)+Math.floor(l/2),r&&(this.rivalHeat=Math.min(100,this.rivalHeat+12),h.push("Rivalry heat +12")),n&&this.hype(1,.08,h);break;case"personal":if(c=nt(Vi.PERSONAL),u=nt(Vi.REPLY_ANGRY),ge()<.2){let p=Math.max(200,Math.trunc(this.money/20));this.money-=p,d=-3,h.push("The commission fines you $"+Ur(p)+" for conduct")}else d=4+je(5)+l;r&&(this.rivalHeat=Math.min(100,this.rivalHeat+25),h.push("Rivalry heat +25")),n&&this.hype(2,.15,h);break;default:throw new Me("Pick a tone.")}return this.fame=Ai(this.fame+d,0,100),h.unshift("Fame "+(d>=0?"+":"")+d),this.lastTalkWeek=this.week,this.lastTalk={you:To(c,o,a),them:To(u,o,a),target:i.displayName(),effects:h},this.log("Mic work vs "+o+': "'+To(c,o,a)+'"'),null}hype(e,t,i){let n=this.scheduled;n.talkLevel=Math.max(n.talkLevel,e),n.purse=Math.round(n.purse*(1+t)),n.winBonus=Math.round(n.winBonus*(1+t)),n.oppBonus=Math.min(4.5,n.oppBonus+1.5*e),i.push("Purse +"+Math.round(t*100)+"% from the hype"),i.push("Opponent is fired up (+"+n.oppBonus+" to all stats on fight night)")}changeDivision(e){if(this.retired)throw new Me("Your career is over.");if(this.fight||this.scheduled)throw new Me("You can't change divisions with a fight booked.");if(!(e>=0&&e<Gt.length)||Math.abs(e-this.weightClass)!==1)throw new Me("You can only move one division at a time.");let t=this.lastDivisionChange+vp-this.week;if(t>0)throw new Me("Your body needs time to adjust. Try again in "+t+" weeks.");let i=this.me,n=this.weightClass,r=this.gfc?this.rankings.indexOf(i):-1;for(let o of Ut)i.add(o,ht.weightAdj(e,o)-ht.weightAdj(n,o));e<n&&i.add("cardio",-2),this.weightClass=e,this.lastDivisionChange=this.week,yp(this.divisionsFought,Gt[e]),this.buildDivision();let a;if(this.offers=[],this.offersAge=0,this.gfc&&r===0?(this.log("Vacates the "+Gt[n]+" belt to chase gold at "+Gt[e]+"!"),this.offers.push(this.titleOffer(this.rankings[0])),a="Champion vs champion! A superfight for the "+Gt[e]+" title is on the table."):(this.gfc&&r>0&&r<=5&&(this.rankings.splice(10,0,i),this.trim()),this.generateOffers(),a=this.gfc&&this.rankings.includes(i)?"Your reputation earns you the #"+this.rankings.indexOf(i)+" spot.":"You start unranked in the new division."),this.rival&&this.rankings.indexOf(this.rival)<0&&this.gfc){for(let o of Ut)this.rival.add(o,ht.weightAdj(e,o)-ht.weightAdj(n,o));this.rankings.splice(Math.min(13,this.rankings.length),0,this.rival),this.trim()}return this.log("Moves "+(e>n?"up":"down")+" to "+Gt[e]+"."),"Welcome to "+Gt[e]+"! "+(e<n?"The weight cut costs some cardio. ":"More power, a little less speed. ")+a}startFight(){if(this.fight)return null;if(!this.fightNight())throw new Me("There's no fight tonight.");let e=this.scheduled;return this.pinOthers(),this.fight=new Dr(this.me,e.opp,e.rounds,e.title,this.npcOverall?0:e.oppBonus,this.stars("head")),null}fightRound(e){if(!this.fight||this.fight.finished)throw new Me("No fight in progress.");if(!hc[e])throw new Me("Pick a game plan.");this.fight.simulateRound(e),this.fight.finished&&this.resolveFight()}closeFight(){this.fight&&this.fight.finished&&(this.fight=null)}resolveFight(){let e=this.scheduled,t=this.fight,i=e.opp,n=this.me,r=t.winner==="player"?"W":t.winner==="opponent"?"L":"D",a=r==="W",o=r==="L",l=t.methodType!=="DEC",h=i===this.rival,c=this.gfc?this.rankings.indexOf(i):-1,u=this.isChamp();n.recordResult(r,t.methodType),i.recordResult(a?"L":o?"W":"D",t.methodType);let d=e.purse+(a?e.winBonus:0),p=a&&l&&this.gfc;p&&(d+=5e4),this.money+=d,this.earnings+=d;let m=this.fame;a?this.fame+=(this.gfc?5:2)+(l?3:0)+(e.title?12:0)+(c>0?Math.floor((Bn-c)/3):0)+(h?5:0):o?this.fame-=t.methodType==="KO"?5:3:this.fame+=1;let y="";e.talkLevel>0&&a?(this.fame+=2*e.talkLevel,y="You backed up the trash talk!"):e.talkLevel>0&&o&&(this.fame-=2*e.talkLevel,y="You ate your words."),this.fame=Ai(this.fame,0,100);let f="";o&&t.methodType==="KO"?(n.add("chin",-1.5),f=this.injure(4+je(5),"knockout loss")):t.playerDamage()>60&&(f=this.injure(1+je(3),"fight damage")),this.energy=30;for(let M=0;M<2;M++){let A=nt(Ut);n.add(A,(.5+ge())*Math.max(0,1-n.get(A)/95)*2)}let _="";e.contender?a?(this.gfc=!0,_="The GFC president hands you a contract. Welcome to the big show!",this.log("SIGNED with the GFC after a win on the Contender Series!"),this.rival&&!this.rankings.includes(this.rival)&&(this.rankings.splice(Math.min(14,this.rankings.length),0,this.rival),this.trim(),this.log("Your rival "+this.rival.displayName()+" is already in the GFC, ranked #"+this.rankings.indexOf(this.rival)+". The rivalry goes big time."))):(this.regionalWins=0,_="No contract this time. Rebuild on the regional circuit."):this.gfc?_=this.updateRankings(a,o,i,e.title,u):a&&this.regionalWins++;let g="";h?(g=a?"You beat your rival!":o?"Your rival gets the better of you.":"The rivalry goes on.",this.rivalFought(a,o)):o&&l&&!this.rival&&this.weeksWithoutRival>=12&&(this.setRival(i,50,"wants the world to know who's better after beating you"),this.rivalLosses=1,g=i.lastName()+" is your new nemesis.");let v=a?"def.":o?"lost to":"drew with";this.log(n.lastName()+" "+v+" "+i.displayName()+" \u2014 "+t.method+(l?" (R"+t.endRound+" "+t.endTime+")":"")+"."),this.history.unshift({date:this.dateLabel(),result:r,opponent:i.displayName(),method:t.method,round:t.endRound,time:t.endTime,event:(e.contender?"Contender Series":e.title?"GFC Title Fight":this.gfc?"GFC":"Iron Cage Regional")+(h?" \xB7 Grudge":"")+" \xB7 "+Gt[this.weightClass]}),this.lastResult={result:r,method:t.method,pay:d,perfBonus:p,fameDelta:this.fame-m,careerNote:[_,g,y].join(" ").trim(),injuryNote:f.trim(),record:n.record()},this.scheduled=null,this.offersAge=this.gfc?-4:-2,this.advanceWeek()}isChamp(){return this.gfc&&this.rankings.length>0&&this.rankings[0]===this.me}updateRankings(e,t,i,n,r){let a=this.me,o=this.rankings,l=Gt[this.weightClass];if(e){if(n)return r?(this.titleDefenses++,this.log("Successful title defense #"+this.titleDefenses+"!"),"And STILL champion! Title defense #"+this.titleDefenses+"."):(this.titlesWon++,yp(this.divisionsWon,l),this.placeAbove(a,i),this.log("AND NEW! "+a.displayName()+" is the GFC "+l+" Champion!"),this.divisionsWon.length>=2&&this.log("History made: a "+this.divisionsWon.length+"-division GFC champion!"),"AND NEW GFC "+l.toUpperCase()+" CHAMPION!");o.includes(i)?this.placeAbove(a,i):!o.includes(a)&&a.streak>=2&&(o.splice(Math.min(Bn-1,o.length),0,a),this.trim());let h=this.rankings.indexOf(a);return h>0?"You're now ranked #"+h+" in the division.":"Still unranked \u2014 keep stacking wins."}if(t){if(n&&r)return this.placeAbove(i,a),this.log(i.displayName()+" takes the belt."),"You lost the belt.";o.includes(a)&&(this.placeAbove(i,a),this.dropDown(a,n?1:2));let h=this.rankings.indexOf(a);return h>0?"You drop to #"+h+".":"You're outside the rankings."}return"A draw doesn't move the needle."}placeAbove(e,t){let i=this.rankings,n=i.indexOf(t);if(n<0)return;let r=i.indexOf(e);r>=0&&r<n||(r>=0&&i.splice(r,1),i.splice(n,0,e),this.trim())}dropDown(e,t){let i=this.rankings,n=i.indexOf(e);n<0||(i.splice(n,1),n+t<Bn&&i.splice(Math.min(n+t,i.length),0,e),this.refill())}trim(){for(;this.rankings.length>Bn;)this.rankings.pop()}refill(){for(;this.rankings.length<Bn;){let e=ht.generate(70+je(6),this.weightClass);e.age=23+je(4),this.rankings.push(e)}}advanceWeek(){this.week++,this.energy=Math.min(100,this.energy+15),this.money-=mp[this.gym]+this.teamSalary();let e=Object.values(this.team);if(this.money<0&&e.length&&ge()<.5){let t=e.reduce((i,n)=>n.salary()>i.salary()?n:i);delete this.team[t.role],this.log(t.name+" quit \u2014 paychecks stopped clearing.")}this.injuryWeeks>0&&this.injuryWeeks--,this.peakOverall=Math.max(this.peakOverall,this.me.overall()),(this.week-1)%52===0&&this.newYear(),!this.retired&&(this.npcWeek(),this.rivalWeek(),++this.marketAge>=8&&this.refreshMarket(),this.scheduled?(this.scheduled.weeks--,this.scheduled.weeks<=0&&this.injuryWeeks>0&&(this.log("Withdrew from the fight vs "+this.scheduled.opp.displayName()+" due to injury."),this.fame=Math.max(0,this.fame-3),this.scheduled=null,this.generateOffers())):(this.offersAge++,this.offersAge>=0&&(this.offers.length===0||this.offersAge>=4)&&this.generateOffers()))}newYear(){let e=this.me;if(e.age++,this.log("Happy birthday! "+e.name+" turns "+e.age+"."),e.age>=31){let t=(e.age-30)*.9;e.add("speed",-(t+ge())),e.add("cardio",-(t*.8+ge())),e.add("power",-(t*.5+ge()*.5)),e.add("chin",-(t*.6+ge()*.5));for(let i of["striking","wrestling","grappling"])e.add(i,-t*.3*ge());this.log("Father Time is undefeated \u2014 your physical attributes are declining.")}for(let t of[...this.rankings])if(!(t===e||t===this.rival)){t.age++;for(let i of Ut)t.age<=27?t.add(i,ge()*2.5):t.age>=32&&t.add(i,-ge()*1.5);t.age>=37&&ge()<.5&&(!this.scheduled||this.scheduled.opp!==t)&&(_p(this.rankings,t),this.gfc&&this.log(t.displayName()+" ("+t.record()+") retires from the GFC."))}this.rival&&(this.rival.age++,this.rival.age>=38&&ge()<.5&&(!this.scheduled||this.scheduled.opp!==this.rival)&&(this.rivalWins+this.rivalLosses>0&&this.rivalries.push(this.rivalSummary()),this.log("Your rival "+this.rival.displayName()+" retires. The rivalry is over."),_p(this.rankings,this.rival),this.rival=null)),this.refill(),e.age>=40&&!this.retired&&this.endCareer("At 40, "+e.name+" is forced to retire. Legacy: "+this.legacyTier()+".")}npcWeek(){let e=this.rankings;if(ge()>.35||e.length<4)return;let t=je(e.length-1),i=Math.min(e.length-1,t+1+je(3)),n=e[t],r=e[i];if(n===this.me||r===this.me||this.scheduled&&(n===this.scheduled.opp||r===this.scheduled.opp))return;let a=1/(1+Math.exp((r.overall()-n.overall())/5)),o=ge()<a?n:r,l=o===n?r:n,h=ge(),c=h<.4?"KO":h<.6?"SUB":"DEC";if(o.recordResult("W",c),l.recordResult("L",c),o===r&&this.placeAbove(r,n),this.gfc){let u=c==="KO"?"KO/TKO":c==="SUB"?"submission":"decision",d=o===this.rival?"Your rival ":l===this.rival?"Your rival loses! ":"";t===0?this.log(o===n?"Champion "+n.displayName()+" defends the belt vs "+r.lastName()+" by "+u+".":"UPSET! "+r.displayName()+" dethrones "+n.lastName()+" by "+u+" to become champion!"):this.log("GFC: "+d+o.displayName()+" def. "+l.displayName()+" by "+u+".")}}generateOffers(){if(this.offers=[],this.offersAge=0,this.retired)return;let e=this.me,t=this.rankings,i=this.offers,n=e.overall();if(this.gfc){let a=t.indexOf(e);if(a===0)for(let o=1;o<=3&&o<t.length;o++)i.push(this.titleOffer(t[o]));else if(this.titleShotEligible()&&i.push(this.titleOffer(t[0])),a>0){let o=[];for(let l=Math.max(1,a-3);l<=Math.min(t.length-1,a+3);l++)l!==a&&o.push(l);tg(o);for(let l=0;l<Math.min(3,o.length);l++)i.push(this.gfcOffer(t[o[l]]))}else for((e.streak>=1||this.fame>=40)&&i.push(this.gfcOffer(t[Math.min(t.length-1,12+je(4))]));i.length<3;)i.push(this.gfcOffer(ht.generate(62+je(6),this.weightClass)))}else{for(let a of[-6,0,6]){let o=Math.max(26,Math.min(72,n+a+je(5)-2)),l=this.managed(Math.round((300+o*10+this.fame*20+Math.max(0,a)*40)/50)*50);i.push(new Yi(ht.generate(o,this.weightClass),3+je(4),l,l,3,!1,!1))}if(this.contenderEligible()){let a=this.managed(5e3);i.unshift(new Yi(ht.generate(Math.max(57,n-1),this.weightClass),4,a,a,3,!1,!0))}}let r=this.rival;if(r&&this.rivalHeat>=mg&&this.week-this.lastRivalFight>=gg&&!i.some(a=>a.opp===r)){let a;if(this.gfc){let o=t.indexOf(r),l=t.indexOf(e);l===0?a=o>0?this.titleOffer(r):null:o===0?a=l>0&&l<=5?this.titleOffer(r):null:a=this.gfcOffer(r)}else{let o=this.managed(800+this.fame*30);a=new Yi(r,4+je(3),o,o,3,!1,!1)}a&&(a.title||(a.purse=Math.round(a.purse*1.5),a.winBonus=Math.round(a.winBonus*1.5)),i.unshift(a))}}managed(e){return Math.round(e*(1+.05*this.stars("manager")))}gfcOffer(e){let t=this.rankings.indexOf(e),i=this.managed(12e3+this.fame*400+(t>0?(Bn-t)*3e3:0));return new Yi(e,6+je(5),i,i,3,!1,!1)}titleOffer(e){let t=this.managed(1e5+this.fame*1500+this.titleDefenses*25e3);return new Yi(e,8+je(5),t,Math.trunc(t/2),5,!0,!1)}titleShotEligible(){let e=this.rankings.indexOf(this.me);return this.gfc&&(e===1||e>1&&e<=3&&this.me.streak>=2)}contenderEligible(){return!this.gfc&&this.regionalWins>=nc&&this.me.overall()>=gp}legacyScore(){let e=this.me;return e.wins*2+e.koWins+e.subWins+this.titlesWon*30+this.titleDefenses*15+Math.floor(this.fame/2)-e.losses*2+(this.divisionsWon.length>=2?60:0)}legacyTier(){let e=this.legacyScore();return e>=300?"All-Time Great":e>=200?"Hall of Famer":e>=120?"Fan Favorite":e>=60?"Journeyman":"Never Made It"}hallOfFameEntry(){let e=this.me;return{name:e.displayName(),style:e.style,country:e.country,divisions:[...this.divisionsFought],record:e.record(),koWins:e.koWins,subWins:e.subWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],peakOverall:this.peakOverall,earnings:this.earnings,retiredAge:e.age,years:Math.floor((this.week-1)/52)+1,rivalries:[...this.rivalries],legacyScore:this.legacyScore(),legacy:this.legacyTier(),inducted:this.legacyScore()>=200}}dateLabel(){return"Y"+(Math.floor((this.week-1)/52)+1)+" W"+((this.week-1)%52+1)}log(e){for(this.news.unshift(this.dateLabel()+" \u2014 "+e);this.news.length>40;)this.news.pop()}goal(){if(this.retired)return"Retired. Legacy: "+this.legacyTier()+".";if(!this.gfc)return this.contenderEligible()?"You've earned a Contender Series invite! Win it to sign with the GFC.":"Earn a Contender Series invite: "+Math.min(this.regionalWins,nc)+"/"+nc+" regional wins and overall "+this.me.overall()+"/"+gp+".";let e=this.rankings.indexOf(this.me),t=this.titleDefenses;return e===0?"You're the champion! Defend the belt"+(this.divisionsWon.length<2?" \u2014 or move divisions and chase a second one.":".")+" ("+t+" defense"+(t===1?"":"s")+")":e<0?"Win back-to-back fights or beat a ranked fighter to crack the GFC top 15.":this.titleShotEligible()?"A title shot is on the table \u2014 take it!":e<=3?"You're #"+e+". Get a 2-fight win streak (or reach #1) for a title shot.":"You're #"+e+". Climb into the top 3 for a shot at the belt."}offerJson(e,t){return{index:t,opponent:e.opp.toJson(),oppRank:this.gfc?this.rankings.indexOf(e.opp):-1,weeks:e.weeks,purse:e.purse,winBonus:e.winBonus,rounds:e.rounds,title:e.title,contender:e.contender,grudge:e.opp===this.rival,oppBonus:e.oppBonus}}toJson(){let e=this.gym,t={};for(let n of bp){let r=this.team[n];t[n]={...r?r.toJson():{},role:n,title:Xi.title(n)}}let i=null;return this.rival&&(i={...this.rival.toJson(),heat:this.rivalHeat,h2hWins:this.rivalWins,h2hLosses:this.rivalLosses,rank:this.gfc?this.rankings.indexOf(this.rival):-1}),{fighter:this.me.toJson(),weightClass:Gt[this.weightClass],weightClassIndex:this.weightClass,divisionCooldown:Math.max(0,this.lastDivisionChange+vp-this.week),year:Math.floor((this.week-1)/52)+1,week:(this.week-1)%52+1,money:this.money,earnings:this.earnings,fame:this.fame,energy:this.energy,trainCost:this.trainCost(),injuryWeeks:this.injuryWeeks,peakOverall:this.peakOverall,gym:{level:e,name:Wi[e],mult:ic[e],fee:mp[e],nextName:e+1<Wi.length?Wi[e+1]:null,nextCost:e+1<Wi.length?fp[e+1]:null},team:t,teamSalary:this.teamSalary(),market:this.market.map((n,r)=>{let a=this.team[n.role];return{...n.toJson(),index:r,current:a?a.name+" ("+a.stars+"\u2605)":null}}),marketRefresh:8-this.marketAge,rival:i,rivalries:this.rivalries,canTalk:this.lastTalkWeek!==this.week&&!this.retired&&!this.fight,lastTalk:this.lastTalk,gfc:this.gfc,org:this.gfc?"GFC":"Iron Cage Regional",rank:this.gfc?this.rankings.indexOf(this.me):-1,regionalWins:this.regionalWins,titlesWon:this.titlesWon,titleDefenses:this.titleDefenses,divisionsWon:[...this.divisionsWon],retired:this.retired,legacy:this.legacyTier(),legacyScore:this.legacyScore(),goal:this.goal(),offers:this.offers.map((n,r)=>this.offerJson(n,r)),scheduled:this.scheduled?this.offerJson(this.scheduled,-1):null,fightNight:this.fightNight(),rankings:this.rankings.map((n,r)=>({rank:r,name:n.displayName(),record:n.record(),overall:n.overall(),style:n.style,player:n===this.me,rival:n===this.rival})),news:this.news,history:this.history,fight:this.fight?this.fight.toJson():null,lastResult:this.lastResult}}};Or.tag="Career";var Mp={Career:Or,Offer:Yi,Staff:Xi,Fight:Dr,Corner:Os};function sc(s){let e={},t=n=>{if(n instanceof ht)return e[n.id]||(e[n.id]={...n,stats:{...n.stats}}),{$f:n.id};if(Array.isArray(n))return n.map(t);if(n&&typeof n=="object"){let r={},a=n.constructor&&n.constructor.tag;a&&Mp[a]&&(r.$c=a);for(let o of Object.keys(n))o!=="current"&&(r[o]=t(n[o]));return r}return n},i=t(s);return JSON.stringify({v:1,pool:e,data:i})}function rc(s){let{pool:e,data:t}=JSON.parse(s),i={};for(let a of Object.keys(e))i[a]=Object.assign(Object.create(ht.prototype),e[a]);let n=a=>{if(Array.isArray(a))return a.map(n);if(a&&typeof a=="object"){if(a.$f)return i[a.$f];let o=a.$c?Mp[a.$c]:null,l=o?Object.create(o.prototype):{};for(let h of Object.keys(a))h!=="$c"&&(l[h]=n(a[h]));return l}return a},r=n(t);return r.fight&&r.fight.logs.length&&(r.fight.current=r.fight.logs[r.fight.logs.length-1]),r}var ji=5,vg=/^\d(,\d){4}$/,Ro=class{constructor(e){this.store=e,this.profile={slots:[],active:null,claimed:[]},this.careers=new Map,this.hof=[]}async load(){let e=await this.store.getProfile();e&&Array.isArray(e.slots)&&(this.profile={slots:e.slots.slice(0,ji),active:e.active??null,claimed:Array.isArray(e.claimed)?e.claimed:[]});for(let t of this.profile.slots)try{let i=await this.store.getCareer(t);i&&this.careers.set(t,rc(i))}catch(i){console.warn("Save unreadable",t,i)}this.profile.slots=this.profile.slots.filter(t=>this.careers.has(t)),this.careers.has(this.profile.active)||(this.profile.active=null),this.hof=await this.store.getHallOfFame(),await this.claimGifts()}async claimGifts(){if(!this.store.getGifts)return;let e=!1;for(let t of await this.store.getGifts())if(!(this.profile.claimed.includes(t.id)||this.profile.slots.length>=ji))try{let i=rc(t.save),n=Ao();this.careers.set(n,i),this.profile.slots.push(n),this.profile.active=n,this.profile.claimed.push(t.id),this.giftMessage="A new fighter is ready: "+i.me.displayName()+".",e=!0}catch(i){console.warn("Gift unreadable",t.id,i)}e&&this.saveAll()}profileDoc(){return{slots:[...this.profile.slots],active:this.profile.active,claimed:[...this.profile.claimed]}}active(){return this.profile.active&&this.careers.get(this.profile.active)||null}need(e){if(!e)throw new Me("Create a fighter first.");return e}call(e,t={}){let i=this.profile,n=this.active(),r=null,a=l=>l==null||l===""||isNaN(Number(l))?-1:Math.trunc(Number(l)),o=!1;switch(e){case"state":break;case"new":{if(i.slots.length>=ji)throw new Me(`All ${ji} save slots are full. Delete a save first.`);let l=this.newCareer(t),h=Ao();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0;break}case"action":r=this.need(n).act(t.type,t.stat);break;case"accept":r=this.need(n).accept(a(t.index));break;case"upgrade":r=this.need(n).upgradeGym();break;case"fight/start":r=this.need(n).startFight();break;case"fight/round":this.need(n).fightRound(t.plan);break;case"fight/close":this.need(n).closeFight();break;case"retire":r=this.need(n).retire();break;case"talk":r=this.need(n).talk(t.target,t.tone);break;case"staff/hire":r=this.need(n).hire(a(t.index));break;case"staff/fire":r=this.need(n).fire(t.role);break;case"division":r=this.need(n).changeDivision(a(t.weightClass));break;case"save/blank":if(i.slots.length>=ji)throw new Me(`All ${ji} save slots are full. Delete a save first.`);i.active=null,o=!0;break;case"save/switch":{let l=this.slot(a(t.slot));i.active=l,o=!0,r="Loaded "+this.careers.get(l).me.displayName()+".";break}case"save/import":{if(i.slots.length>=ji)throw new Me(`All ${ji} save slots are full. Delete a save first.`);let l;try{if(l=rc(String(t.text||"")),!l||!(l.me instanceof ht))throw new Error("no fighter")}catch{throw new Me("That save code or file isn't a Cage Career 3D career.")}let h=Ao();i.slots.push(h),i.active=h,this.careers.set(h,l),o=!0,r="Loaded "+l.me.displayName()+".";break}case"save/delete":{let l=this.slot(a(t.slot)),h=this.careers.get(l);i.slots=i.slots.filter(c=>c!==l),i.active===l&&(i.active=null),this.careers.delete(l),this.store.deleteCareer(l),o=!0,r=h?"Deleted "+h.me.displayName()+".":"Save deleted.";break}default:throw new Me("Unknown action: "+e)}return n=this.active(),n&&n.pinOthers(),this.induct(n),e!=="state"&&(n&&this.store.setCareer(i.active,sc(n)),o&&this.store.setProfile(this.profileDoc())),this.state(n,r)}saveAll(){this.store.setProfile(this.profileDoc());for(let[e,t]of this.careers)this.store.setCareer(e,sc(t))}exportSave(e){return sc(this.careers.get(this.slot(e)))}slot(e){if(e<0||e>=this.profile.slots.length)throw new Me("That save slot doesn't exist.");return this.profile.slots[e]}newCareer(e){let t=String(e.name||"").trim().replace(/\s+/g," ");if(!t||t.length>30)throw new Me("Enter a name (1-30 characters).");let i=String(e.nickname||"").trim();if(i.length>24)throw new Me("Nickname is too long.");let n=Number(e.weightClass);if(!(Number.isInteger(n)&&n>=0&&n<Gt.length))throw new Me("Pick a weight class.");if(!xp.includes(e.style))throw new Me("Pick a fighting style.");let r=oc.includes(e.country)?e.country:"USA",a=new Or(t,i,n,e.style,r);return vg.test(e.look||"")&&(a.me.look=e.look),a}induct(e){if(!e||!e.retired||e.inducted)return;e.inducted=!0;let t={...e.hallOfFameEntry(),owner:this.profile.active};this.hof.push({...t,mine:!0}),this.store.addHallOfFame(t)}state(e,t){let i={exists:!!e};return e&&Object.assign(i,e.toJson()),i.weightClasses=Gt,i.countries=oc,i.saves=this.profile.slots.map((n,r)=>{let a=this.careers.get(n);return{slot:r,active:n===this.profile.active,name:a.me.displayName(),weightClass:Gt[a.weightClass],style:a.me.style,record:a.me.record(),overall:a.me.overall(),age:a.me.age,retired:a.retired}}),i.maxSaves=ji,i.hallOfFame=[...this.hof].sort((n,r)=>r.legacyScore-n.legacyScore),i.storage=this.store.kind,i.message=t||this.giftMessage||null,this.giftMessage=null,i}};var wp="cc3d_localOnly";async function Tp(){try{if(localStorage.getItem(wp))return cc()}catch{}try{if(window.claude&&typeof window.claude.use=="function"){let[s,e]=await Promise.all([window.claude.use("db"),window.claude.use("user")]),t=s&&e?await e.id():null,i=e?await e.can("data.write"):null;if(s&&t&&i!==!1)return yg(_g(s,t))}}catch(s){console.warn("Account storage unavailable, using this browser",s)}return cc()}function yg(s){let e=s,t={get kind(){return e.kind},onDowngrade:null},i=()=>{if(e.kind!=="device"){e=cc();try{localStorage.setItem(wp,"1")}catch{}t.onDowngrade&&t.onDowngrade()}};s.refused=i;for(let n of["getProfile","setProfile","getCareer","setCareer","deleteCareer","getHallOfFame","addHallOfFame"])t[n]=(...r)=>e[n](...r);return t.getGifts=()=>e.getGifts?e.getGifts():Promise.resolve([]),t}function Sp(s,e){let t=new Map;return(i,n)=>{let r=t.get(i);r||t.set(i,r={running:!1,next:void 0,has:!1}),r.next=n,r.has=!0,!r.running&&(r.running=!0,(async()=>{for(;r.has;){let a=r.next;r.has=!1;try{await s(i,a)}catch{try{await new Promise(l=>setTimeout(l,600+Math.random()*600)),await s(i,a)}catch(l){e(l)}}}r.running=!1})())}}var uc=s=>console.error("Save failed",s);function Ep(s){uc=s}function _g(s,e){let t=s.collection("data/users/"+e),i=s.doc("hof/"+e),n=[],r=h=>{h&&(h.code==="invalid_argument"||h.code==="not_granted"||h.code==="revoked")&&l.refused?l.refused():uc(h)},a=Sp(async(h,c)=>{c===null?await t.doc(h).delete():await t.doc(h).set(c)},r),o=Sp(async(h,c)=>i.set({entries:c}),r),l={kind:"account",async getProfile(){let h=await t.doc("profile").get();return h.exists?h.data():null},setProfile(h){a("profile",h)},async getCareer(h){let c=await t.doc("c_"+h).get();return c.exists?c.data().save:null},setCareer(h,c){a("c_"+h,{save:c,updated:Date.now()})},deleteCareer(h){a("c_"+h,null)},async getHallOfFame(){let h=[];try{let c=await s.collection("hof").get();for(let u of c.docs){let d=u.data()&&u.data().entries||[];u.id===e&&(n=d.slice());for(let p of d)h.push({...p,mine:u.id===e})}}catch(c){console.warn("Hall of Fame unavailable",c)}return h},addHallOfFame(h){n.push(h),o("hof",n.slice())},async getGifts(){try{return(await s.collection("gifts").get()).docs.filter(c=>c.data()&&c.data().save).map(c=>({id:c.id,save:c.data().save}))}catch{return[]}}};return l}function cc(){let s="cc3d_",e=i=>{try{return localStorage.getItem(s+i)}catch{return null}},t=(i,n)=>{try{n===null?localStorage.removeItem(s+i):localStorage.setItem(s+i,n)}catch(r){uc(r)}};return{kind:"device",async getProfile(){try{return JSON.parse(e("profile")||"null")}catch{return null}},setProfile(i){t("profile",JSON.stringify(i))},async getCareer(i){return e("c_"+i)},setCareer(i,n){t("c_"+i,n)},deleteCareer(i){t("c_"+i,null)},async getHallOfFame(){try{return JSON.parse(e("hof")||"[]").map(i=>({...i,mine:!0}))}catch{return[]}},addHallOfFame(i){let n=[];try{n=JSON.parse(e("hof")||"[]")}catch{}n.push(i),t("hof",JSON.stringify(n))}}}var Br={striking:"Striking",power:"Power",speed:"Speed",wrestling:"Wrestling",grappling:"Grappling",cardio:"Cardio",chin:"Chin"},Pp=[{id:"BALANCED",name:"Balanced",desc:"Mix strikes and takedowns"},{id:"STRIKE",name:"Strike",desc:"Keep it standing, throw volume"},{id:"WRESTLE",name:"Wrestle",desc:"Takedowns and top control"},{id:"SUBMIT",name:"Hunt Subs",desc:"Drag it down, chase the tap"},{id:"COUNTER",name:"Counter",desc:"Patient, saves energy"},{id:"ALLOUT",name:"All Out",desc:"Swing big, burns the tank"}],xe=s=>document.getElementById(s),ze=null,dc=!1,Co=0,Hn=!1,Fr=!1,pc=null,$e=null,xg=Object.fromEntries(Pp.map(s=>[s.id,s.name])),mt=null;try{mt=cp()}catch(s){console.warn("3D disabled:",s)}var Bs=zh(),qi=1;try{qi=Number(localStorage.getItem("cc3d_speed"))||1}catch{}mt&&mt.arena.setSpeed(qi);function ce(s){return String(s??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Tt(s){let e=Math.round(s);return(e<0?"-$":"$")+Math.abs(e).toLocaleString()}function bg(s){return s===0?"Champion":s>0?"#"+s:"Unranked"}function zr(s,e,t=""){let i=Math.max(0,Math.min(100,s));return`<div class="bar ${t}"><i style="width:${i}%;${e?"background:"+e:""}"></i></div>`}function Mg(s){return s>=80?"var(--gold)":s>=65?"var(--green)":s>=45?"var(--blue)":"#6b7385"}function Sg(s){return s>60?"var(--green)":s>30?"var(--orange)":"var(--red)"}var Ap;function ri(s,e=!1){let t=xe("toast");t.textContent=s,t.className="toast show"+(e?" err":""),clearTimeout(Ap),Ap=setTimeout(()=>t.className="toast",2600)}var zs=null;async function un(s,e={}){if(dc||!zs)return null;dc=!0;try{let t=zs.call(s,e);return ze=t,t.message&&ri(t.message),t}catch(t){return t instanceof Me?ri(t.message,!0):(console.error(t),ri("Something went wrong. Your last save is safe.",!0)),null}finally{dc=!1}}function Lo(s,e){return new Promise(t=>{let i=xe("askBox");xe("askText").textContent=s,xe("askYes").textContent=e,i.classList.remove("hidden");let n=r=>{i.classList.add("hidden"),xe("askYes").onclick=xe("askNo").onclick=null,t(r)};xe("askYes").onclick=()=>n(!0),xe("askNo").onclick=()=>n(!1)})}async function _i(s,e){await un(s,e)&&dn()}var fc="CC3D1.";async function Ip(s,e){let t=new Blob([s]).stream().pipeThrough(e?new DecompressionStream("gzip"):new CompressionStream("gzip"));return new Uint8Array(await new Response(t).arrayBuffer())}async function wg(s){let e=await Ip(new TextEncoder().encode(s)),t="";for(let i=0;i<e.length;i+=32768)t+=String.fromCharCode(...e.subarray(i,i+32768));return fc+btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Tg(s){let e=String(s||"").trim();if(e.startsWith("{"))return e;let t=e.indexOf(fc);if(t<0)throw new Error("not a save code");let i=e.slice(t+fc.length).replace(/\s+/g,"").replace(/-/g,"+").replace(/_/g,"/"),n=atob(i+"=".repeat((4-i.length%4)%4)),r=Uint8Array.from(n,a=>a.charCodeAt(0));return new TextDecoder().decode(await Ip(r,!0))}async function xc(s){let e;try{e=await Tg(s)}catch{ri("That save code or file isn't a Cage Career 3D career.",!0);return}await un("save/import",{text:e})&&($e=null,_c(),dn())}async function Eg(s,e){let t=null;try{window.claude&&typeof window.claude.use=="function"&&(t=await window.claude.use("downloads"))}catch{}if(t){try{await t.save({filename:s,data:e})}catch(r){r&&r.code!=="declined"&&ri("Couldn't save the file here. Copy the save code instead.",!0)}return}let i=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=i,n.download=s,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(i),5e3)}async function Ag(s){try{await navigator.clipboard.writeText(s),ri("Save code copied.")}catch{let e=xe("exportCode");e&&(e.focus(),e.select()),ri("Select the code and copy it.")}}function dn(){if(ze){if(!ze.exists){xe("create").classList.remove("hidden"),xe("dash").classList.add("hidden"),xe("topstats").innerHTML="",xe("fightScreen").classList.add("hidden"),xe("createSaves").innerHTML=`<p class="btn-row">${ze.saves.length?`<button class="btn small" data-saves>\u2190 Back to your ${ze.saves.length} saved fighter${ze.saves.length===1?"":"s"}</button>`:""}
      <button class="btn small" data-importopen>\u{1F4C2} Load a saved career</button></p>`,Lg(),gc(),Hs(),Rp();return}xe("create").classList.add("hidden"),xe("dash").classList.remove("hidden"),Pg(),xe("goal").textContent=ze.goal,Ig(),Ug(),Dg(),Hg(),Gg(),Og(),Fg(),Bg(),zg(),Wg(),Hs(),Rp()}}function Rp(){mc();let s=!xe("fightScreen").classList.contains("hidden");mt&&(s?mt.show(xe("arenaStage"),"arena"):ze.exists?(mt.show(xe("dashStage"),"preview"),mt.preview.setFighters(Rg())):(mt.show(xe("createStage"),"preview"),Io())),ze.exists&&Cg(),Po()}function Po(){let s=ze&&ze.fight;if(!(s&&!xe("fightScreen").classList.contains("hidden"))){qh(!1),Dn("camp");return}if(qh(!0),s.finished&&!Hn)return Dn(null);if(s.finished)return;let t=s.round+(Hn?0:1)===s.rounds&&s.rounds>1;Dn("fight",Hn?t?1.2:1:s.round===0?.6:.35)}function mc(){document.querySelectorAll("[data-sound]").forEach(s=>{s.textContent=Yh()?"\u{1F50A}":"\u{1F507}",s.title=Yh()?"Sound on":"Sound off"}),xe("speedBtn").textContent=qi+"\xD7"}function Rg(){let s=ze,e={look:s.fighter.look,name:s.fighter.name,weightClass:s.weightClassIndex,style:s.fighter.style},t=s.scheduled&&!s.retired?s.scheduled.opponent:null;return t?[e,{look:t.look,name:t.name,weightClass:s.weightClassIndex,style:t.style}]:[e]}function Cg(){let s=ze,e=s.scheduled&&!s.retired?s.scheduled.opponent:null;xe("showcaseCap").innerHTML=e?`<span class="red">${ce(s.fighter.displayName)}</span><span class="vs">VS</span><span class="blue">${ce(e.displayName)}</span>`:`<span class="red">${ce(s.fighter.displayName)}</span><span class="muted">${ce(s.fighter.style)} \xB7 ${ce(s.weightClass)} \xB7 drag to spin</span>`}function gc(){let s=xe("lookPickers"),e=(t,i,n)=>`
    <div class="look-row"><span>${i}</span><div class="chips">
      ${Yt[t].map((r,a)=>n==="swatch"?`<button type="button" class="swatch ${Bs[t]===a?"on":""}" style="background:${r}" data-look="${t}:${a}" title="${t==="shorts"?qd[a]:""}" aria-label="${i} ${a+1}"></button>`:`<button type="button" class="btn chip ${Bs[t]===a?"on":""}" data-look="${t}:${a}">${ce(r)}</button>`).join("")}
    </div></div>`;s.innerHTML=e("skin","Skin tone","swatch")+e("hair","Hair","chip")+e("hairColor","Hair color","swatch")+e("beard","Facial hair","chip")+e("shorts","Fight shorts","swatch"),xe("lookInput").value=Bh(Bs)}function Io(){if(!mt)return;let e=(xe("createForm").querySelector("input[name=style]:checked")||{}).value||"Striker";mt.preview.setFighters([{look:Bh(Bs),weightClass:Number(xe("wcSelect").value||3),style:e}])}function Lg(){let s=xe("wcSelect");s.options.length||(s.innerHTML=ze.weightClasses.map((e,t)=>`<option value="${t}" ${t===3?"selected":""}>${ce(e)}</option>`).join(""),xe("countrySelect").innerHTML=ze.countries.map(e=>`<option>${ce(e)}</option>`).join(""))}function Pg(){let s=ze;xe("topstats").innerHTML=`
    <span>Year <b>${s.year}</b> \xB7 Week <b>${s.week}</b></span>
    <span>Age <b>${s.fighter.age}</b></span>
    <span class="${s.money<0?"neg":""}">Cash <b>${Tt(s.money)}</b></span>
    <span>Fame <b>${s.fame}</b></span>`}function Ig(){let s=ze.fighter,e=ze,t=[];e.rank===0?t.push('<span class="badge gold">GFC CHAMPION</span>'):e.rank>0&&t.push(`<span class="badge red">GFC #${e.rank}</span>`),t.push(`<span class="badge">${ce(e.org)}</span>`),s.streak>=2&&t.push(`<span class="badge green">${s.streak}-fight win streak</span>`),s.streak<=-2&&t.push(`<span class="badge red">${-s.streak}-fight skid</span>`),e.injuryWeeks>0&&t.push(`<span class="badge red">Injured ${e.injuryWeeks}w</span>`),e.titlesWon&&t.push(`<span class="badge gold">${e.titlesWon}\xD7 champ</span>`),xe("fighterCard").innerHTML=`
    <div class="fighter-top">
      <div>
        <div class="fighter-name">${ce(s.displayName)}</div>
        <div class="fighter-meta">${ce(s.style)} \xB7 ${ce(e.weightClass)} \xB7 ${ce(s.country)} \xB7 Age ${s.age}</div>
      </div>
      <div class="ovr"><b>${s.overall}</b><span>OVR</span></div>
    </div>
    <div class="record">${s.record} <small>${s.koWins} KO \xB7 ${s.subWins} SUB \xB7 ${s.decWins} DEC</small></div>
    <div class="badges">${t.join("")}</div>
    ${Object.entries(s.stats).map(([i,n])=>`
      <div class="stat"><span>${Br[i]}</span>${zr(n,Mg(n))}<b>${Math.floor(n)}</b></div>`).join("")}`}function kg(s){let e=s.overall-ze.fighter.overall;return e<=-4?'<span class="diff easy">Favorite</span>':e>=4?'<span class="diff hard">Underdog</span>':'<span class="diff even">Even</span>'}function Cp(s,e){let t=s.opponent,i=(s.grudge?"\u2694 GRUDGE MATCH \xB7 ":"")+(s.title?"\u{1F3C6} TITLE FIGHT \xB7 5 rounds":s.contender?"\u2B50 CONTENDER SERIES":`${s.rounds} rounds`),n=s.oppRank===0?"Champion":s.oppRank>0?`#${s.oppRank}`:"";return`
    <div class="offer ${s.title?"title":""} ${s.contender||s.grudge?"contender":""}">
      <div class="offer-top">
        <div>
          <div class="offer-meta">${i}${n?" \xB7 "+n:""}</div>
          <div class="offer-name">${ce(t.displayName)}</div>
          <div class="offer-meta">${t.record} \xB7 ${ce(t.style)} \xB7 ${ce(t.country)} \xB7 Age ${t.age} \xB7 OVR <b>${t.overall}</b></div>
        </div>
        ${kg(t)}
      </div>
      <div class="offer-money">Purse <b>${Tt(s.purse)}</b> + <b>${Tt(s.winBonus)}</b> to win \xB7 in ${s.weeks} week${s.weeks===1?"":"s"}</div>
      ${e?`<button class="btn ${s.title?"gold":"primary"} small" data-accept="${s.index}">Accept fight</button>`:""}
    </div>`}function Ng(s){let e=ze.fighter;return Object.keys(Br).map(t=>{let i=Math.floor(e.stats[t]),n=Math.floor(s.stats[t]);return`<div class="stat" style="grid-template-columns:34px 1fr 34px">
      <b style="text-align:left;color:${i>=n?"var(--text)":"var(--muted)"}">${i}</b>
      <span style="text-align:center;font-size:12px;color:var(--muted)">${Br[t]}</span>
      <b style="color:${n>=i?"var(--text)":"var(--muted)"}">${n}</b></div>`}).join("")}function Ug(){let s=ze,e=xe("fightCard");if(s.retired){e.innerHTML=`
      <h2>Career over</h2>
      <div class="fight-night">
        <h3>${ce(s.legacy)}</h3>
        <p>${ce(s.fighter.displayName)} retired at ${s.fighter.age} with a record of <b>${s.fighter.record}</b>.</p>
        <p class="muted">${s.titlesWon} title${s.titlesWon===1?"":"s"} won \xB7 ${s.titleDefenses} defenses \xB7 ${Tt(s.earnings)} career earnings \xB7 legacy score ${s.legacyScore}</p>
      </div>
      <div class="btn-row"><button class="btn primary big" data-newsave>Start a new career</button><button class="btn big" data-saves>\u{1F4BE} Saves</button></div>`;return}if(s.fightNight){let t=s.scheduled;e.innerHTML=`
      <h2>Next fight</h2>
      <div class="fight-night">
        <h3>FIGHT NIGHT</h3>
        <p>${t.title?"\u{1F3C6} For the GFC title \u2014 ":""}vs <b>${ce(t.opponent.displayName)}</b></p>
      </div>
      <button class="btn primary big" data-startfight>Walk out to the cage</button>`;return}if(s.scheduled){let t=s.scheduled;e.innerHTML=`
      <h2>Fight camp</h2>
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
        <div class="countdown">${t.weeks}</div>
        <div class="muted">week${t.weeks===1?"":"s"} until fight night.<br>Train hard \u2014 every session counts.</div>
      </div>
      ${Cp(t,!1)}
      ${t.oppBonus>0?`<p class="badge red" style="display:inline-block">Opponent fired up: +${t.oppBonus} to all stats</p>`:""}
      <button class="btn small" data-talk="opponent" ${s.canTalk?"":"disabled"}>\u{1F3A4} Talk to the press${s.canTalk?"":" (done this week)"}</button>
      <div class="label">Tale of the tape <span style="float:right">You \xB7 Them</span></div>
      ${Ng(t.opponent)}`;return}e.innerHTML=`
    <h2>Fight offers</h2>
    ${s.offers.length?s.offers.map(t=>Cp(t,!0)).join(""):'<p class="muted">No offers right now. Keep training \u2014 your manager is working the phones.</p>'}
    <p class="muted" style="font-size:12px;margin:6px 0 0">Offers refresh every few weeks.</p>`}function Dg(){let s=ze,e=s.retired||s.fightNight||!!s.fight,t=s.injuryWeeks>0;xe("actionsCard").innerHTML=`
    <h2>This week</h2>
    <div class="energy-row">
      <div class="lbl"><span>Energy</span><b>${s.energy}/100</b></div>
      ${zr(s.energy,s.energy>50?"var(--green)":s.energy>25?"var(--orange)":"var(--red)","lg")}
    </div>
    ${t?`<p class="badge red" style="display:inline-block">Injured: ${s.injuryWeeks} week(s) \u2014 no training or sparring</p>`:""}
    <div class="label" style="margin-top:4px">Train <span class="muted">(\u2212${s.trainCost} energy, ${s.gym.name} \xD7${s.gym.mult})</span></div>
    <div class="train-grid">
      ${Object.keys(Br).map(i=>`
        <button class="btn small" data-train="${i}" ${e||t||s.energy<s.trainCost?"disabled":""}>${Br[i]}</button>`).join("")}
    </div>
    <div class="act-grid">
      <button class="btn" data-action="spar" ${e||t||s.energy<30?"disabled":""}>Spar<span class="sub">Gains across the board \xB7 \u221230</span></button>
      <button class="btn" data-action="rest" ${e?"disabled":""}>Rest<span class="sub">Recover energy \xB7 +50</span></button>
      <button class="btn" data-action="media" ${e||s.energy<10?"disabled":""}>Media<span class="sub">Build fame \xB7 \u221210</span></button>
      <button class="btn" data-action="work" ${e||s.energy<15?"disabled":""}>${s.gfc?"Seminar":"Teach classes"}<span class="sub">Earn cash \xB7 \u221215</span></button>
    </div>
    <p class="muted" style="font-size:12px;margin:10px 0 0">Each action takes one week. Weekly costs: ${Tt(s.gym.fee+s.teamSalary)} (gym ${Tt(s.gym.fee)} + team ${Tt(s.teamSalary)}).</p>`}function Og(){let s=ze,e=s.gym;xe("statusCard").innerHTML=`
    <h2>Career</h2>
    <div class="kv">
      <span>Promotion</span><b>${ce(s.org)}</b>
      <span>Ranking</span><b>${s.gfc?bg(s.rank):"\u2014"}</b>
      ${s.gfc?"":`<span>Regional wins (since tryout)</span><b>${s.regionalWins}</b>`}
      <span>Cash</span><b style="color:${s.money<0?"var(--red)":"var(--green)"}">${Tt(s.money)}</b>
      <span>Career earnings</span><b>${Tt(s.earnings)}</b>
      <span>Division</span><b>${ce(s.weightClass)}</b>
      <span>Title defenses</span><b>${s.titleDefenses}</b>
      ${s.divisionsWon.length?`<span>Belts won</span><b>${s.divisionsWon.map(ce).join(", ")}</b>`:""}
      <span>Peak overall</span><b>${s.peakOverall}</b>
      <span>Fame</span><b>${s.fame}/100</b>
    </div>
    ${zr(s.fame,"var(--gold)")}
    <div class="gym-box">
      <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
        <div><b>${ce(e.name)}</b><div class="muted" style="font-size:12px">Training \xD7${e.mult} \xB7 ${Tt(e.fee)}/wk</div></div>
        ${e.nextName?`<button class="btn small" data-upgrade ${s.money<e.nextCost||s.retired?"disabled":""}>Move up<span class="sub">${ce(e.nextName)} \xB7 ${Tt(e.nextCost)}</span></button>`:'<span class="badge gold">Best gym</span>'}
      </div>
    </div>
    <div class="footer-btns">
      ${s.retired?"":`<button class="btn ghost small" data-division ${s.scheduled||s.fight?"disabled":""}>Change division${s.divisionCooldown?` (${s.divisionCooldown}w)`:""}</button>`}
      ${s.retired?"":'<button class="btn ghost small" data-retire>Retire</button>'}
      <button class="btn ghost small" data-saves>\u{1F4BE} Saves / new career</button>
    </div>`}function Fg(){let s=ze;xe("rankCard").innerHTML=`
    <h2>GFC ${ce(s.weightClass)} rankings</h2>
    ${s.gfc?"":`<p class="muted" style="font-size:13px">You're not in the GFC yet. These are the fighters you're chasing.</p>`}
    <ul class="ranks scroll">
      ${s.rankings.map(e=>`
        <li class="${e.player?"me":""} ${e.rank===0?"champ":""} ${e.rival?"rivalrow":""}">
          <span class="rk">${e.rank===0?"C":e.rank}</span>
          <span>${ce(e.name)} <span class="muted">${e.record}</span></span>
          <span class="muted">${e.overall}</span>
        </li>`).join("")}
    </ul>`}function Bg(){let s=ze.history;xe("historyCard").innerHTML=`
    <h2>Fight record</h2>
    ${s.length?`<div class="scroll"><table class="hist">${s.map(e=>`
      <tr>
        <td><span class="res ${e.result}">${e.result}</span></td>
        <td>${ce(e.opponent)}<div class="muted" style="font-size:12px">${ce(e.event)} \xB7 ${ce(e.date)}</div></td>
        <td style="text-align:right">${ce(e.method)}<div class="muted" style="font-size:12px">R${e.round} ${ce(e.time)}</div></td>
      </tr>`).join("")}</table></div>`:'<p class="muted">No pro fights yet.</p>'}`}function zg(){xe("newsCard").innerHTML=`
    <h2>News</h2>
    <ul class="news scroll">${ze.news.map(s=>`<li>${ce(s)}</li>`).join("")}</ul>`}function kp(s){return`<span class="stars">${"\u2605".repeat(s)}<span class="off">${"\u2605".repeat(5-s)}</span></span>`}function Hg(){let s=ze,e=s.rival,t=xe("rivalCard");if(!e){t.innerHTML=`
      <h2>Rival</h2>
      <p class="muted">No active rivalry. Someone will step up soon \u2014 or beat you and make it personal.</p>
      ${s.rivalries.length?`<div class="label">Past rivalries</div><ul class="news">${s.rivalries.map(n=>`<li>${ce(n)}</li>`).join("")}</ul>`:""}`;return}let i=e.heat>=75?"Boiling":e.heat>=40?"Heated":e.heat>=20?"Simmering":"Cold";t.innerHTML=`
    <h2>\u2694 Rival</h2>
    <div class="fighter-top">
      <div>
        <div class="fighter-name" style="font-size:17px">${ce(e.displayName)}</div>
        <div class="fighter-meta">${e.record} \xB7 ${ce(e.style)} \xB7 ${ce(e.country)} \xB7 Age ${e.age}${e.rank===0?" \xB7 Champion":e.rank>0?" \xB7 #"+e.rank:""}</div>
      </div>
      <div class="ovr"><b>${e.overall}</b><span>OVR</span></div>
    </div>
    <div class="h2h"><b>${e.h2hWins}-${e.h2hLosses}</b><span class="muted">head to head (first to lead by 2 settles it)</span></div>
    <div class="lbl" style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>Heat</span><b>${i} \xB7 ${e.heat}</b></div>
    <div class="heat"><i style="width:${e.heat}%"></i></div>
    <p class="muted" style="font-size:12px">At 60+ heat a grudge match (1.5\xD7 purse) shows up in your offers.</p>
    <div class="btn-row">
      <button class="btn small" data-talk="rival" ${s.canTalk&&!s.retired?"":"disabled"}>\u{1F3A4} Call them out${s.canTalk?"":" (done this week)"}</button>
    </div>`}function Gg(){let s=ze,e=Object.values(s.team),t=e.filter(i=>i.name).length;xe("teamCard").innerHTML=`
    <h2>Team \xB7 ${t}/${e.length}</h2>
    ${e.map(i=>`
      <div class="staff-row">
        <div>
          <div class="role">${ce(i.title)}</div>
          ${i.name?`<b>${ce(i.name)}</b> ${kp(i.stars)}<div class="perk">${ce(i.perk)} \xB7 ${Tt(i.salary)}/wk</div>`:'<span class="muted">Vacant</span>'}
        </div>
        ${i.name&&!s.retired?`<button class="btn small ghost" data-fire="${i.role}">Release</button>`:""}
      </div>`).join("")}
    <div class="btn-row"><button class="btn primary small" data-market ${s.retired?"disabled":""}>Hire staff (${s.market.length} available)</button></div>`}function Fs(s,e={}){$e={kind:s,...e},Hs()}function bc(){$e=null,Hs()}function Hs(){let s=xe("modal");if(!$e){s.classList.add("hidden");return}s.classList.remove("hidden");let e=xe("modalBody"),t=ze;if($e.kind==="saves"){let i=t.saves.length>=t.maxSaves;e.innerHTML=`
      <h1>\u{1F4BE} Saved fighters</h1>
      <p class="muted">Up to ${t.maxSaves} fighters. Every action saves automatically, so you can switch any time.
        ${t.storage==="account"?"Saves are kept with your claude.ai account, so they're on every device you sign in on.":"Saves are kept in this browser on this device."}</p>
      ${t.saves.length?t.saves.map(n=>`
        <div class="hof-entry ${n.active?"active":""}">
          <div class="top">
            <div><b>${n.missing?"Missing save":ce(n.name)}</b>
              ${n.missing?"":`<div class="muted" style="font-size:12px">${ce(n.weightClass)} \xB7 ${ce(n.style)} \xB7 ${ce(n.record)} \xB7 ${n.overall} OVR \xB7 age ${n.age}</div>`}</div>
            <span>${n.active?'<span class="badge red">PLAYING</span>':""}${n.retired?' <span class="badge gold">RETIRED</span>':""}</span>
          </div>
          <div class="btn-row">
            ${n.active||n.missing?"":`<button class="btn small primary" data-slot="${n.slot}">Play</button>`}
            ${n.missing?"":`<button class="btn small" data-export="${n.slot}">Export</button>`}
            <button class="btn small ghost" data-delslot="${n.slot}" data-name="${ce(n.name||"this save")}">Delete</button>
          </div>
        </div>`).join(""):'<p class="muted">No saved fighters yet.</p>'}
      <div class="btn-row">
        <button class="btn primary" data-newsave ${i?"disabled":""}>+ New fighter${i?" (slots full)":""}</button>
        <button class="btn" data-importopen ${i?"disabled":""}>\u{1F4C2} Load a career</button>
      </div>`}else if($e.kind==="import")e.innerHTML=`
      <h1>\u{1F4C2} Load a career</h1>
      <p class="muted">Bring in a fighter exported from Cage Career 3D, from this device or any other. It goes into a free save slot and starts playing.</p>
      <div class="btn-row"><label class="btn primary">Choose save file<input type="file" id="importFile" accept=".json,application/json,text/plain" hidden></label></div>
      <p class="muted" style="margin-top:14px">\u2026or paste a save code:</p>
      <textarea id="importCode" rows="5" spellcheck="false" placeholder="CC3D1.\u2026" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px"></textarea>
      <div class="btn-row"><button class="btn primary" data-importcode>Load code</button><button class="btn ghost" data-saves>\u2190 Back</button></div>`,xe("importFile").addEventListener("change",async i=>{let n=i.target.files&&i.target.files[0];n&&xc(await n.text())});else if($e.kind==="export")e.innerHTML=`
      <h1>\u2B06\uFE0F Export ${ce($e.name)}</h1>
      <p class="muted">Use this to move the fighter to another device or browser, or to share them. Open \u{1F4BE} Saves \u2192 \u{1F4C2} Load a career there.</p>
      <div class="btn-row"><button class="btn primary" data-savefile>Save as file</button><button class="btn" data-copycode ${$e.code?"":"disabled"}>Copy save code</button></div>
      <textarea id="exportCode" rows="5" readonly spellcheck="false" style="width:100%;box-sizing:border-box;font-family:monospace;font-size:12px;background:#0e1014;color:inherit;border:1px solid #333a48;border-radius:8px;padding:8px;margin-top:10px">${ce($e.code||"Preparing code\u2026")}</textarea>
      <div class="btn-row"><button class="btn ghost" data-saves>\u2190 Back</button></div>`;else if($e.kind==="market")e.innerHTML=`
      <h1>Staff market</h1>
      <p class="muted">Cash ${Tt(t.money)} \xB7 Fame ${t.fame} \xB7 New candidates in ${t.marketRefresh} week(s). Signing fee is 4 weeks' salary.</p>
      ${t.market.length?t.market.map(i=>{let n=t.fame>=i.fameRequired,r=t.money>=i.fee;return`
        <div class="candidate">
          <div class="top">
            <div><div class="role muted" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase">${ce(i.title)}</div><b>${ce(i.name)}</b> ${kp(i.stars)}</div>
            <button class="btn small ${n&&r?"primary":""}" data-hire="${i.index}" ${n&&r?"":"disabled"}>Sign \xB7 ${Tt(i.fee)}</button>
          </div>
          <div class="muted" style="font-size:13px;margin-top:4px">${ce(i.perk)}</div>
          <div class="muted" style="font-size:12px;margin-top:4px">${Tt(i.salary)}/week
            ${i.fameRequired?` \xB7 <span style="color:${n?"var(--green)":"var(--red)"}">needs ${i.fameRequired} fame</span>`:""}
            ${i.current?` \xB7 replaces ${ce(i.current)}`:""}</div>
        </div>`}).join(""):`<p class="muted">Nobody's available right now. Check back in a few weeks.</p>`}`;else if($e.kind==="talk"){let i=$e.target==="rival"?t.rival:t.scheduled&&t.scheduled.opponent;if(!i)return bc();e.innerHTML=`
      <h1>\u{1F3A4} Press conference</h1>
      <p class="muted">The cameras are on. What do you say about <b style="color:var(--text)">${ce(i.displayName)}</b>?</p>
      <div class="tones">
        <button class="btn" data-tone="respect">Respectful<span class="sub">+1 fame, cools the rivalry</span></button>
        <button class="btn" data-tone="trash">Trash talk<span class="sub">Fame & hype, opponent gets motivated</span></button>
        <button class="btn primary" data-tone="personal">Get personal<span class="sub">Big hype, big risk</span></button>
      </div>
      <p class="muted" style="font-size:12px;margin-top:12px">Hyping a booked fight raises the purse, but a fired-up opponent fights harder. Win and you backed it up; lose and you'll eat your words.</p>`}else if($e.kind==="talkResult"){let i=t.lastTalk;e.innerHTML=`
      <h1>\u{1F3A4} Headlines</h1>
      <div class="quote"><span class="who">${ce(t.fighter.displayName)}</span>"${ce(i.you)}"</div>
      <div class="quote them"><span class="who">${ce(i.target)}</span>"${ce(i.them)}"</div>
      <ul class="news">${i.effects.map(n=>`<li>${ce(n)}</li>`).join("")}</ul>
      <button class="btn primary big" data-closemodal style="margin-top:12px">Done</button>`}else if($e.kind==="division"){let i=t.weightClassIndex,n=[i-1,i+1].filter(r=>r>=0&&r<t.weightClasses.length);e.innerHTML=`
      <h1>Change division</h1>
      <p class="muted">You fight at <b style="color:var(--text)">${ce(t.weightClass)}</b>. Moving up adds power and chin but costs speed; cutting down adds speed, costs power, and the weight cut drains cardio. You start over in the new division's rankings${t.rank===0?" \u2014 but as a champion, you get an immediate superfight for the other belt":t.rank>0&&t.rank<=5?" \u2014 your reputation lands you at #10":""}.</p>
      ${t.divisionCooldown?`<p class="badge red" style="display:inline-block">Your body needs ${t.divisionCooldown} more weeks before another move.</p>`:""}
      <div class="btn-row">${n.map(r=>`<button class="btn ${r>i,""}" data-movediv="${r}" ${t.divisionCooldown?"disabled":""}>${r>i?"\u25B2 Move up to":"\u25BC Cut down to"} ${ce(t.weightClasses[r])}</button>`).join("")}</div>`}else if($e.kind==="hof"){let i=t.hallOfFame||[];e.innerHTML=`
      <h1>\u{1F3DB} Hall of Fame</h1>
      <p class="muted">Every career finished by every player. A legacy score of 200+ (Hall of Famer or All-Time Great) earns induction.</p>
      ${i.length?i.map((n,r)=>`
        <div class="hof-entry ${n.inducted?"inducted":""}">
          <div class="top">
            <div><b>${r+1}. ${ce(n.name)}</b>${n.mine?' <span class="badge red">YOU</span>':""}<div class="muted" style="font-size:12px">${ce(n.style)} \xB7 ${ce(n.country)} \xB7 ${n.divisions.map(ce).join(" / ")}</div></div>
            <span class="badge ${n.inducted?"gold":""}">${n.inducted?"INDUCTED \xB7 ":""}${ce(n.legacy)}</span>
          </div>
          <div class="kv" style="margin-top:8px;font-size:13px">
            <span>Record</span><b>${n.record} (${n.koWins} KO, ${n.subWins} SUB)</b>
            <span>Titles \xB7 defenses</span><b>${n.titlesWon} \xB7 ${n.titleDefenses}</b>
            ${n.divisionsWon.length?`<span>Belts</span><b>${n.divisionsWon.map(ce).join(", ")}${n.divisionsWon.length>=2?" \u{1F451}":""}</b>`:""}
            <span>Peak overall</span><b>${n.peakOverall}</b>
            <span>Career</span><b>${n.years} yrs \xB7 retired at ${n.retiredAge}</b>
            <span>Earnings</span><b>${Tt(n.earnings)}</b>
            <span>Legacy score</span><b>${n.legacyScore}</b>
          </div>
          ${n.rivalries.length?`<div class="muted" style="font-size:12px;margin-top:6px">Rivalries: ${n.rivalries.map(ce).join(" \xB7 ")}</div>`:""}
        </div>`).join(""):'<p class="muted">No retired careers yet. Be the first legend.</p>'}`}}function Vg(s){return s.logs.flat()}function Wg(){let s=ze.fight,e=xe("fightScreen");if(!s){e.classList.add("hidden"),Co=0,pc=null;return}let t=e.classList.contains("hidden");e.classList.remove("hidden");let i=Vg(s);if(t){Xg(s),s.round===0&&On(`In the red corner... ${s.player.name}! And in the blue corner... ${s.opponent.name}!`),vc(null),xe("fightLog").innerHTML=s.round===0?jg(s):"",i.forEach(n=>xe("fightLog").appendChild(Np(n,!1))),Co=i.length,pc=s,Up(s),yc(s),ko();return}Yg(i.slice(Co),s)}function jg(s){return`<div class="ev info n">Tale of the tape</div>
    <div style="max-width:420px;margin:0 auto 8px">
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <b style="text-align:center;color:#ff6b6e">${s.player.overall} OVR</b><span class="muted">vs</span><b style="text-align:center;color:#75a8ff">${s.opponent.overall} OVR</b>
      </div>
      <div class="stat" style="grid-template-columns:1fr auto 1fr;text-align:center">
        <span>${ce(s.player.style)}</span><span class="muted">style</span><span>${ce(s.opponent.style)}</span>
      </div>
    </div>
    <div class="ev round">${s.title?"This one is for the GFC championship. Five rounds.":`${s.rounds} rounds.`} Pick your game plan.</div>`}function Np(s,e){let t=document.createElement("div");return t.className=`ev ${s.type} ${s.side}`,e||(t.style.animation="none"),t.innerHTML=(s.type==="round"||s.type==="info"&&s.side==="n"?"":`<span class="t">${s.t}</span>`)+ce(s.text),t}function ko(){let s=xe("fightLog");s.scrollTop=s.scrollHeight}function Xg(s){mt&&(mt.show(xe("arenaStage"),"arena"),mt.arena.load(s,{playerLook:ze.fighter.look,weightClass:ze.weightClassIndex}))}var Lp;function vc(s){let e=xe("fightCaption");if(clearTimeout(Lp),!s){e.className="caption";return}e.textContent=s.text,e.className=`caption show ${s.side} ${s.type}`,Lp=setTimeout(()=>e.classList.remove("show"),s.type==="finish"?8e3:3200)}async function Yg(s,e){Hn=!0,Fr=!1,yc(e),Po();let t=!1;for(let i of s)if(xe("fightLog").appendChild(Np(i,!Fr)),Co++,ko(),!Fr){vc(i),i.type==="finish"&&(t=!0);let n=i.type==="kd"||i.type==="finish"?1100:i.type==="big"||i.type==="subatt"?750:420;mt&&(n=mt.arena.play(i,e)),await new Promise(r=>setTimeout(r,n/qi))}if(Fr&&mt){mt.arena.restore(e);let i=s[s.length-1];if(i&&vc(i),e.finished&&!t){let n=(ze.lastResult||{}).result;Dn(null),Mo(n)}}Hn=!1,Po(),pc=e,Up(e),yc(e),ko()}function Up(s){let e=(t,i)=>`
    <div class="corner ${i}">
      <div class="cn">${ce(t.name)}</div>
      <div class="cm">${t.record} \xB7 Sig ${t.sig} \xB7 TD ${t.td}${t.kd?" \xB7 KD "+t.kd:""}</div>
      <div class="bl">HEALTH</div>${zr(t.health,Sg(t.health),"lg")}
      <div class="bl">STAMINA</div>${zr(t.stamina,"var(--gold)")}
    </div>`;xe("fightHead").innerHTML=`
    ${e(s.player,"p")}
    <div class="round-box">
      <div class="rl">ROUND</div>
      <div class="rn">${Math.max(1,s.round)}/${s.rounds}</div>
      ${s.title?'<div class="belt">TITLE</div>':""}
    </div>
    ${e(s.opponent,"o")}`}function yc(s){let e=xe("fightControls");if(Hn){e.innerHTML='<button class="btn big" data-skip>Skip \u25B6\u25B6</button>';return}if(!s.finished){e.innerHTML=`
      <div class="prompt">${s.round===0?"Choose your game plan for round 1":`Corner advice between rounds \u2014 game plan for round ${s.round+1}?`}
        ${s.scout?`<br><span class="scout">\u{1F9E0} Coach: "They're going to ${ce(xg[s.scout])} this round."</span>`:""}
        ${s.oppFiredUp&&s.round===0?'<br><span style="color:#ff6b6e">Your opponent is fired up after the trash talk.</span>':""}</div>
      <div class="plans">
        ${Pp.map(n=>`<button class="btn" data-plan="${n.id}">${n.name}<span class="sub">${n.desc}</span></button>`).join("")}
      </div>`;return}let t=ze.lastResult||{},i={W:"VICTORY",L:"DEFEAT",D:"DRAW"}[t.result]||"";e.innerHTML=`
    <div class="result-banner">
      <div class="rw ${t.result}">${i}</div>
      <div class="rd"><b>${ce(s.method)}</b> \xB7 R${s.endRound} ${ce(s.endTime)}${s.cards?" \xB7 "+s.cards.join(", "):""}</div>
      <div class="rd">Paid <b>${Tt(t.pay||0)}</b>${t.perfBonus?" (incl. $50,000 bonus)":""} \xB7 Fame ${t.fameDelta>=0?"+":""}${t.fameDelta} \xB7 Record <b>${ce(t.record)}</b></div>
      ${t.careerNote?`<div class="rd" style="margin-top:4px;color:var(--gold)"><b style="color:inherit">${ce(t.careerNote)}</b></div>`:""}
      ${t.injuryNote?`<div class="rd" style="color:var(--red)">${ce(t.injuryNote)}</div>`:""}
    </div>
    <button class="btn primary big" data-closefight>Continue</button>`}document.addEventListener("click",async s=>{let e=s.target.closest("button");if(!e||e.disabled)return;let t=e.dataset;if(t.train)return _i("action",{type:"train",stat:t.train});if(t.action)return _i("action",{type:t.action});if(t.accept!==void 0)return _i("accept",{index:t.accept});if(t.upgrade!==void 0)return _i("upgrade");if(t.startfight!==void 0)return _i("fight/start");if(t.plan){if(Hn)return;await un("fight/round",{plan:t.plan})&&dn();return}if(t.skip!==void 0){Fr=!0;return}if(t.sound!==void 0){np(),mc(),Po();return}if(t.speed!==void 0){qi=qi===1?2:qi===2?.5:1;try{localStorage.setItem("cc3d_speed",String(qi))}catch{}mt&&mt.arena.setSpeed(qi),mc();return}if(t.togglelog!==void 0){xe("fightPanel").classList.toggle("log-open"),ko();return}if(t.look){let[i,n]=t.look.split(":");Bs[i]=Number(n),gc(),Io();return}if(t.randomlook!==void 0){Bs=zh(),gc(),Io();return}if(t.closefight!==void 0)return _i("fight/close");if(t.hof!==void 0)return Fs("hof");if(t.saves!==void 0)return Fs("saves");if(t.newsave!==void 0){await un("save/blank")&&($e=null,dn());return}if(t.slot!==void 0){await un("save/switch",{slot:t.slot})&&($e=null,_c(),dn());return}if(t.importopen!==void 0)return Fs("import");if(t.importcode!==void 0){let i=xe("importCode").value;return i.trim()?xc(i):ri("Paste a save code first.",!0)}if(t.export!==void 0){let i;try{i=zs.exportSave(Number(t.export))}catch{return ri("Couldn't read that save.",!0)}let n=ze.saves[Number(t.export)];$e={kind:"export",text:i,name:n?n.name:"fighter",code:null},Hs();let r=$e;try{r.code=await wg(i)}catch{r.code=null}$e===r&&Hs();return}if(t.savefile!==void 0){let i=String($e.name||"fighter").replace(/[^\w\- ]+/g,"").trim()||"fighter";return Eg(i+" - Cage Career 3D.json",$e.text)}if(t.copycode!==void 0)return Ag($e.code);if(t.delslot!==void 0){await Lo(`Delete ${t.name}? This can't be undone.`,"Delete")&&await un("save/delete",{slot:t.delslot})&&(_c(),dn());return}if(t.closemodal!==void 0)return bc();if(t.market!==void 0)return Fs("market");if(t.hire!==void 0)return _i("staff/hire",{index:t.hire});if(t.fire!==void 0){await Lo("Release this team member?","Release")&&_i("staff/fire",{role:t.fire});return}if(t.talk)return Fs("talk",{target:t.talk});if(t.tone){await un("talk",{target:$e.target,tone:t.tone})&&($e={kind:"talkResult"},dn());return}if(t.division!==void 0)return Fs("division");if(t.movediv!==void 0){await un("division",{weightClass:t.movediv})&&($e=null,dn());return}if(t.retire!==void 0){await Lo("Retire now? Your career will end and your legacy will be locked in.","Retire")&&_i("retire");return}});function _c(){xe("fightScreen").classList.add("hidden")}xe("modal").addEventListener("click",s=>{s.target.id==="modal"&&bc()});xe("createForm").addEventListener("change",Io);xe("createForm").addEventListener("submit",s=>{s.preventDefault(),_i("new",Object.fromEntries(new FormData(s.target)))});(async()=>{Ep(()=>ri("Couldn't save your latest progress. Check your connection.",!0));let s=await Tp();zs=new Ro(s),"onDowngrade"in s&&(s.onDowngrade=()=>zs.saveAll());try{await zs.load()}catch(e){console.error(e),ri("Couldn't load your saves. Try reloading the page.",!0)}xe("boot").classList.add("hidden"),_i("state"),qg()})();async function qg(){let s=null;try{s=new URLSearchParams(location.search).get("career")}catch{}if(!s||!/^[a-z0-9-]+$/.test(s))return;try{history.replaceState(null,"",location.pathname)}catch{}let e;try{let i=await fetch("saves/"+s+".json",{cache:"no-store"});if(!i.ok)throw new Error(i.status);e=await i.text()}catch{ri("Couldn't find that career.",!0);return}let t=s.split("-").map(i=>i[0].toUpperCase()+i.slice(1)).join(" ");await Lo(`Load ${t} into a save slot and start playing?`,"Load")&&xc(e)}
