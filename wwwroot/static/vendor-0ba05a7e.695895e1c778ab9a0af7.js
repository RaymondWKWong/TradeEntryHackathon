"use strict";(self.webpackChunkui_react=self.webpackChunkui_react||[]).push([[8943],{16354:(e,t,s)=>{s.d(t,{H:()=>a,h:()=>p});var n=s(5637),r=s(12381),o=s(79020),i=s(49898),d=s(53725),l=function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var d=e.length-1;d>=0;d--)(r=e[d])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i};class a extends n.CH{get onDidChangeCollapseState(){return this.model.onDidChangeCollapseState}constructor(e,t,s,n,r={}){super(e,t,s,n,r),this.user=e}setChildren(e,t=d.$.empty(),s){this.model.setChildren(e,t,s)}rerender(e){void 0!==e?this.model.rerender(e):this.view.rerender()}hasElement(e){return this.model.has(e)}createModel(e,t,s){return new o.F(e,t,s)}}class c{get compressedTreeNodeProvider(){return this._compressedTreeNodeProvider()}constructor(e,t,s){this._compressedTreeNodeProvider=e,this.stickyScrollDelegate=t,this.renderer=s,this.templateId=s.templateId,s.onDidChangeTwistieState&&(this.onDidChangeTwistieState=s.onDidChangeTwistieState)}renderTemplate(e){return{compressedTreeNode:void 0,data:this.renderer.renderTemplate(e)}}renderElement(e,t,s,n){let r=this.stickyScrollDelegate.getCompressedNode(e);r||(r=this.compressedTreeNodeProvider.getCompressedTreeNode(e.element)),1===r.element.elements.length?(s.compressedTreeNode=void 0,this.renderer.renderElement(e,t,s.data,n)):(s.compressedTreeNode=r,this.renderer.renderCompressedElements(r,t,s.data,n))}disposeElement(e,t,s,n){var r,o,i,d;s.compressedTreeNode?null===(o=(r=this.renderer).disposeCompressedElements)||void 0===o||o.call(r,s.compressedTreeNode,t,s.data,n):null===(d=(i=this.renderer).disposeElement)||void 0===d||d.call(i,e,t,s.data,n)}disposeTemplate(e){this.renderer.disposeTemplate(e.data)}renderTwistie(e,t){return!!this.renderer.renderTwistie&&this.renderer.renderTwistie(e,t)}}l([i.H],c.prototype,"compressedTreeNodeProvider",null);class h{constructor(e){this.modelProvider=e,this.compressedStickyNodes=new Map}getCompressedNode(e){return this.compressedStickyNodes.get(e)}constrainStickyScrollNodes(e,t,s){if(this.compressedStickyNodes.clear(),0===e.length)return[];for(let n=0;n<e.length;n++){const r=e[n],o=r.position+r.height;if(n+1<e.length&&o+e[n+1].height>s||n>=t-1&&t<e.length){const t=e.slice(0,n),s=e.slice(n);return[...t,this.compressStickyNodes(s)]}}return e}compressStickyNodes(e){if(0===e.length)throw new Error("Can't compress empty sticky nodes");const t=this.modelProvider();if(!t.isCompressionEnabled())return e[0];const s=[];for(let n=0;n<e.length;n++){const r=e[n],o=t.getCompressedTreeNode(r.node.element);if(o.element){if(0!==n&&o.element.incompressible)break;s.push(...o.element.elements)}}if(s.length<2)return e[0];const n=e[e.length-1],r={elements:s,incompressible:!1},o={...n.node,children:[],element:r},i=new Proxy(e[0].node,{}),d={node:i,startIndex:e[0].startIndex,endIndex:n.endIndex,position:e[0].position,height:e[0].height};return this.compressedStickyNodes.set(i,o),d}}function m(e,t){return t&&{...t,keyboardNavigationLabelProvider:t.keyboardNavigationLabelProvider&&{getKeyboardNavigationLabel(s){let n;try{n=e().getCompressedTreeNode(s)}catch(e){return t.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(s)}return 1===n.element.elements.length?t.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(s):t.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(n.element.elements)}}}}class p extends a{constructor(e,t,s,n,r={}){const o=()=>this,i=new h((()=>this.model));super(e,t,s,n.map((e=>new c(o,i,e))),{...m(o,r),stickyScrollDelegate:i})}setChildren(e,t=d.$.empty(),s){this.model.setChildren(e,t,s)}createModel(e,t,s){return new r.UE(e,t,s)}updateOptions(e={}){super.updateOptions(e),void 0!==e.compressionEnabled&&this.model.setCompressionEnabled(e.compressionEnabled)}getCompressedTreeNode(e=null){return this.model.getCompressedTreeNode(e)}}},79020:(e,t,s)=>{s.d(t,{F:()=>i});var n=s(71782),r=s(60350),o=s(53725);class i{constructor(e,t,s={}){this.user=e,this.rootRef=null,this.nodes=new Map,this.nodesByIdentity=new Map,this.model=new n.X(e,t,null,s),this.onDidSplice=this.model.onDidSplice,this.onDidChangeCollapseState=this.model.onDidChangeCollapseState,this.onDidChangeRenderNodeCount=this.model.onDidChangeRenderNodeCount,s.sorter&&(this.sorter={compare:(e,t)=>s.sorter.compare(e.element,t.element)}),this.identityProvider=s.identityProvider}setChildren(e,t=o.$.empty(),s={}){const n=this.getElementLocation(e);this._setChildren(n,this.preserveCollapseState(t),s)}_setChildren(e,t=o.$.empty(),s){const n=new Set,r=new Set;this.model.splice([...e,0],Number.MAX_VALUE,t,{...s,onDidCreateNode:e=>{var t;if(null===e.element)return;const o=e;if(n.add(o.element),this.nodes.set(o.element,o),this.identityProvider){const e=this.identityProvider.getId(o.element).toString();r.add(e),this.nodesByIdentity.set(e,o)}null===(t=s.onDidCreateNode)||void 0===t||t.call(s,o)},onDidDeleteNode:e=>{var t;if(null===e.element)return;const o=e;if(n.has(o.element)||this.nodes.delete(o.element),this.identityProvider){const e=this.identityProvider.getId(o.element).toString();r.has(e)||this.nodesByIdentity.delete(e)}null===(t=s.onDidDeleteNode)||void 0===t||t.call(s,o)}})}preserveCollapseState(e=o.$.empty()){return this.sorter&&(e=[...e].sort(this.sorter.compare.bind(this.sorter))),o.$.map(e,(e=>{let t=this.nodes.get(e.element);if(!t&&this.identityProvider){const s=this.identityProvider.getId(e.element).toString();t=this.nodesByIdentity.get(s)}if(!t){let t;return t=void 0===e.collapsed?void 0:e.collapsed===r.kn.Collapsed||e.collapsed===r.kn.PreserveOrCollapsed||e.collapsed!==r.kn.Expanded&&e.collapsed!==r.kn.PreserveOrExpanded&&Boolean(e.collapsed),{...e,children:this.preserveCollapseState(e.children),collapsed:t}}const s="boolean"==typeof e.collapsible?e.collapsible:t.collapsible;let n;return n=void 0===e.collapsed||e.collapsed===r.kn.PreserveOrCollapsed||e.collapsed===r.kn.PreserveOrExpanded?t.collapsed:e.collapsed===r.kn.Collapsed||e.collapsed!==r.kn.Expanded&&Boolean(e.collapsed),{...e,collapsible:s,collapsed:n,children:this.preserveCollapseState(e.children)}}))}rerender(e){const t=this.getElementLocation(e);this.model.rerender(t)}getFirstElementChild(e=null){const t=this.getElementLocation(e);return this.model.getFirstElementChild(t)}has(e){return this.nodes.has(e)}getListIndex(e){const t=this.getElementLocation(e);return this.model.getListIndex(t)}getListRenderCount(e){const t=this.getElementLocation(e);return this.model.getListRenderCount(t)}isCollapsible(e){const t=this.getElementLocation(e);return this.model.isCollapsible(t)}setCollapsible(e,t){const s=this.getElementLocation(e);return this.model.setCollapsible(s,t)}isCollapsed(e){const t=this.getElementLocation(e);return this.model.isCollapsed(t)}setCollapsed(e,t,s){const n=this.getElementLocation(e);return this.model.setCollapsed(n,t,s)}expandTo(e){const t=this.getElementLocation(e);this.model.expandTo(t)}refilter(){this.model.refilter()}getNode(e=null){if(null===e)return this.model.getNode(this.model.rootRef);const t=this.nodes.get(e);if(!t)throw new r.ac(this.user,`Tree element not found: ${e}`);return t}getNodeLocation(e){return e.element}getParentNodeLocation(e){if(null===e)throw new r.ac(this.user,"Invalid getParentNodeLocation call");const t=this.nodes.get(e);if(!t)throw new r.ac(this.user,`Tree element not found: ${e}`);const s=this.model.getNodeLocation(t),n=this.model.getParentNodeLocation(s);return this.model.getNode(n).element}getElementLocation(e){if(null===e)return[];const t=this.nodes.get(e);if(!t)throw new r.ac(this.user,`Tree element not found: ${e}`);return this.model.getNodeLocation(t)}}},60350:(e,t,s)=>{var n,r;s.d(t,{VA:()=>i,ac:()=>o,kn:()=>n,sD:()=>r}),function(e){e[e.Expanded=0]="Expanded",e[e.Collapsed=1]="Collapsed",e[e.PreserveOrExpanded=2]="PreserveOrExpanded",e[e.PreserveOrCollapsed=3]="PreserveOrCollapsed"}(n||(n={})),function(e){e[e.Unknown=0]="Unknown",e[e.Twistie=1]="Twistie",e[e.Element=2]="Element",e[e.Filter=3]="Filter"}(r||(r={}));class o extends Error{constructor(e,t){super(`TreeError [${e}] ${t}`)}}class i{constructor(e){this.fn=e,this._map=new WeakMap}map(e){let t=this._map.get(e);return t||(t=this.fn(e),this._map.set(e,t)),t}}},93794:(e,t,s)=>{s.d(t,{$:()=>l});var n=s(65321),r=s(36513),o=s(7448),i=s(10553),d=s(5976);class l extends d.JT{onclick(e,t){this._register(n.nm(e,n.tw.CLICK,(s=>t(new o.n(n.Jj(e),s)))))}onmousedown(e,t){this._register(n.nm(e,n.tw.MOUSE_DOWN,(s=>t(new o.n(n.Jj(e),s)))))}onmouseover(e,t){this._register(n.nm(e,n.tw.MOUSE_OVER,(s=>t(new o.n(n.Jj(e),s)))))}onmouseleave(e,t){this._register(n.nm(e,n.tw.MOUSE_LEAVE,(s=>t(new o.n(n.Jj(e),s)))))}onkeydown(e,t){this._register(n.nm(e,n.tw.KEY_DOWN,(e=>t(new r.y(e)))))}onkeyup(e,t){this._register(n.nm(e,n.tw.KEY_UP,(e=>t(new r.y(e)))))}oninput(e,t){this._register(n.nm(e,n.tw.INPUT,t))}onblur(e,t){this._register(n.nm(e,n.tw.BLUR,t))}onfocus(e,t){this._register(n.nm(e,n.tw.FOCUS,t))}ignoreGesture(e){return i.o.ignoreTarget(e)}}},48906:(e,t,s)=>{function n(e,t){const s=e;"number"!=typeof s.vscodeWindowId&&Object.defineProperty(s,"vscodeWindowId",{get:()=>t})}s.d(t,{E:()=>r,H:()=>n});const r=window}}]);