/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@tensorflow/tfjs-core"),require("@tensorflow/tfjs-converter")):"function"==typeof define&&define.amd?define(["exports","@tensorflow/tfjs-core","@tensorflow/tfjs-converter"],e):e(t.blazeface={},t.tf,t.tf)}(this,(function(t,e,n){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function r(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */var i=function(t){return{startEndTensor:t,startPoint:e.slice(t,[0,0],[-1,2]),endPoint:e.slice(t,[0,2],[-1,2])}},s={strides:[8,16],anchors:[2,6]};function a(t,n){var r,o,i;if(t.topLeft instanceof e.Tensor&&t.bottomRight instanceof e.Tensor){var s=e.tidy((function(){return[e.concat([e.slice(e.sub(n-1,t.topLeft),0,1),e.slice(t.topLeft,1,1)]),e.concat([e.sub(n-1,e.slice(t.bottomRight,0,1)),e.slice(t.bottomRight,1,1)])]}));r=s[0],o=s[1],null!=t.landmarks&&(i=e.tidy((function(){var r=e.sub(e.tensor1d([n-1,0]),t.landmarks),o=e.tensor1d([1,-1]);return e.mul(r,o)})))}else{var a=t.topLeft,c=a[0],u=a[1],l=t.bottomRight,d=l[0],f=l[1];r=[n-1-c,u],o=[n-1-d,f],null!=t.landmarks&&(i=t.landmarks.map((function(t){return[n-1-t[0],t[1]]})))}var h={topLeft:r,bottomRight:o};return null!=i&&(h.landmarks=i),null!=t.probability&&(h.probability=t.probability instanceof e.Tensor?t.probability.clone():t.probability),h}function c(t,n){return e.tidy((function(){var r;return r=t.hasOwnProperty("box")?t.box:t,e.squeeze(function(t,n){var r=e.mul(t.startPoint,n),o=e.mul(t.endPoint,n),s=e.concat2d([r,o],1);return i(s)}(r,n).startEndTensor)}))}var u=function(){function t(t,n,r,o,i,a){this.blazeFaceModel=t,this.width=n,this.height=r,this.maxFaces=o,this.anchorsData=function(t,e,n){for(var r=[],o=0;o<n.strides.length;o++)for(var i=n.strides[o],s=Math.floor((e+i-1)/i),a=Math.floor((t+i-1)/i),c=n.anchors[o],u=0;u<s;u++)for(var l=i*(u+.5),d=0;d<a;d++)for(var f=i*(d+.5),h=0;h<c;h++)r.push([f,l]);return r}(n,r,s),this.anchors=e.tensor2d(this.anchorsData),this.inputSizeData=[n,r],this.inputSize=e.tensor1d([n,r]),this.iouThreshold=i,this.scoreThreshold=a}return t.prototype.getBoundingBoxes=function(t,n,s){return void 0===s&&(s=!0),r(this,void 0,void 0,(function(){var a,c,u,l,d,f,h,p,b,v,m,y,w,g,x=this;return o(this,(function(T){switch(T.label){case 0:return a=e.tidy((function(){var n,r,o,i,s,a,c,u,l,d,f,h,p,b=e.image.resizeBilinear(t,[x.width,x.height]),v=e.mul(e.sub(e.div(b,255),.5),2),m=x.blazeFaceModel.predict(v),y=e.squeeze(m),w=(n=y,r=x.anchors,o=x.inputSize,i=e.slice(n,[0,1],[-1,2]),s=e.add(i,r),a=e.slice(n,[0,3],[-1,2]),c=e.div(a,o),u=e.div(s,o),l=e.div(c,2),d=e.sub(u,l),f=e.add(u,l),h=e.mul(d,o),p=e.mul(f,o),e.concat2d([h,p],1)),g=e.slice(y,[0,0],[-1,1]);return[y,w,e.squeeze(e.sigmoid(g))]})),c=a[0],u=a[1],l=a[2],d=console.warn,console.warn=function(){},f=e.image.nonMaxSuppression(u,l,this.maxFaces,this.iouThreshold,this.scoreThreshold),console.warn=d,[4,f.array()];case 1:return h=T.sent(),f.dispose(),p=h.map((function(t){return e.slice(u,[t,0],[1,-1])})),n?[3,3]:[4,Promise.all(p.map((function(t){return r(x,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,t.array()];case 1:return e=n.sent(),t.dispose(),[2,e]}}))}))})))];case 2:p=T.sent(),T.label=3;case 3:for(b=t.shape[1],v=t.shape[2],m=n?e.div([v,b],this.inputSize):[v/this.inputSizeData[0],b/this.inputSizeData[1]],y=[],w=function(t){var r=p[t],o=e.tidy((function(){var o=r instanceof e.Tensor?i(r):i(e.tensor2d(r));if(!s)return o;var a,u=h[t];return a=n?e.slice(x.anchors,[u,0],[1,2]):x.anchorsData[u],{box:o,landmarks:e.reshape(e.squeeze(e.slice(c,[u,5],[1,-1])),[6,-1]),probability:e.slice(l,[u],[1]),anchor:a}}));y.push(o)},g=0;g<p.length;g++)w(g);return u.dispose(),l.dispose(),c.dispose(),[2,{boxes:y,scaleFactor:m}]}}))}))},t.prototype.estimateFaces=function(t,n,i,s){return void 0===n&&(n=!1),void 0===i&&(i=!1),void 0===s&&(s=!0),r(this,void 0,void 0,(function(){var u,l,d,f,h,p,b=this;return o(this,(function(v){switch(v.label){case 0:return u=function(t){return t instanceof e.Tensor?[t.shape[0],t.shape[1]]:[t.height,t.width]}(t),l=u[1],d=e.tidy((function(){return t instanceof e.Tensor||(t=e.browser.fromPixels(t)),e.expandDims(e.cast(t,"float32"),0)})),[4,this.getBoundingBoxes(d,n,s)];case 1:return f=v.sent(),h=f.boxes,p=f.scaleFactor,d.dispose(),n?[2,h.map((function(t){var n=c(t,p),r={topLeft:e.slice(n,[0],[2]),bottomRight:e.slice(n,[2],[2])};if(s){var o=t,u=o.landmarks,d=o.probability,f=o.anchor,h=e.mul(e.add(u,f),p);r.landmarks=h,r.probability=d}return i&&(r=a(r,l)),r}))]:[2,Promise.all(h.map((function(t){return r(b,void 0,void 0,(function(){var e,n,u,d,f,h,b,v,m,y,w,g=this;return o(this,(function(x){switch(x.label){case 0:return e=c(t,p),s?[3,2]:[4,e.array()];case 1:return f=x.sent(),n={topLeft:f.slice(0,2),bottomRight:f.slice(2)},[3,4];case 2:return[4,Promise.all([t.landmarks,e,t.probability].map((function(t){return r(g,void 0,void 0,(function(){return o(this,(function(e){return[2,t.array()]}))}))})))];case 3:u=x.sent(),d=u[0],f=u[1],h=u[2],b=t.anchor,m=(v=p)[0],y=v[1],w=d.map((function(t){return[(t[0]+b[0])*m,(t[1]+b[1])*y]})),n={topLeft:f.slice(0,2),bottomRight:f.slice(2),landmarks:w,probability:h},(T=t.box).startEndTensor.dispose(),T.startPoint.dispose(),T.endPoint.dispose(),t.landmarks.dispose(),t.probability.dispose(),x.label=4;case 4:return e.dispose(),i&&(n=a(n,l)),[2,n]}var T}))}))})))]}}))}))},t}();
/**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */t.load=function(t){var e=void 0===t?{}:t,i=e.maxFaces,s=void 0===i?10:i,a=e.inputWidth,c=void 0===a?128:a,l=e.inputHeight,d=void 0===l?128:l,f=e.iouThreshold,h=void 0===f?.3:f,p=e.scoreThreshold,b=void 0===p?.75:p,v=e.modelUrl;return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){switch(e.label){case 0:return null==v?[3,2]:[4,n.loadGraphModel(v)];case 1:return t=e.sent(),[3,4];case 2:return[4,n.loadGraphModel("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1",{fromTFHub:!0})];case 3:t=e.sent(),e.label=4;case 4:return[2,new u(t,c,d,s,h,b)]}}))}))},t.BlazeFaceModel=u,Object.defineProperty(t,"__esModule",{value:!0})}));