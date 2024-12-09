const e={canvas:void 0,ctx:void 0,graph:void 0,convasConfig:{size:{width:600,height:400}}},t={getRandomInt:(e,t)=>Math.floor(Math.random()*(t-e+1)+e),getDistance:(e,t)=>Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))};class r{constructor({size:e,color:t,id:r,coor:i,label:s}){this.size=e,this.color=t,this.id=r,this.coor=i,this.label=s}draw(){e.ctx.strokeStyle=this.color,e.ctx.beginPath(),e.ctx.arc(this.coor.x,this.coor.y,this.size,0,2*Math.PI),e.ctx.stroke(),e.ctx.fillStyle="white",e.ctx.beginPath(),e.ctx.arc(this.coor.x,this.coor.y,this.size,0,2*Math.PI),e.ctx.fill();let t=this.size/(.8*this.label.length);e.ctx.fillStyle="black",e.ctx.textAlign="center",e.ctx.font=`${t}px Arial`,e.ctx.fillText(this.label,this.coor.x,this.coor.y+t/2)}}class i{constructor(e=[],t=[]){this.vertices=e,this.edges=t}addVertex(e){this.vertices.push(e)}getVertex(e){return this.vertices.filter(t=>t.id===e)[0]}getVertexByLabel(e){return this.vertices.filter(t=>t.label===e)[0]}removeVertex(e){this.vertices=this.vertices.filter(t=>t.id!==e)}removeEdges(e){this.edges=this.edges.filter(t=>t.start.id!==e&&t.end.id!==e)}removeEdge(e){this.edges=this.edges.filter(t=>t.id!==e)}addEdge(e){this.edges.push(e)}drawVertices(){this.vertices.forEach(e=>e.draw())}drawEdges(){this.edges.forEach(e=>e.draw())}draw(){this.drawEdges(),this.drawVertices()}}class s{constructor({weight:e,start:t,end:r,id:i}){this.weight=e,this.start=t,this.end=r,this.id=i}draw(){e.ctx.strokeStyle="black",e.ctx.lineWidth=1,e.ctx.beginPath(),e.ctx.moveTo(this.start.coor.x,this.start.coor.y),e.ctx.lineTo(this.end.coor.x,this.end.coor.y),e.ctx.stroke()}}const o=document.querySelector("#num-vertices"),a=document.querySelector("#num-edges");function c(){o.innerText=e.graph.vertices.length,a.innerText=e.graph.edges.length}function d(t,r){let i;if(e.graph.vertices.length<2){console.log("Too few vertices");return}let o=e.graph.edges.length+1,a=!0;for(let r=0;r<e.graph.vertices.length;r++){if(e.graph.vertices[r].id===t.id)continue;let s=!1;for(let i=0;i<e.graph.edges.length;i++)if(e.graph.edges[i].start.id===t.id&&e.graph.edges[i].end.id===e.graph.vertices[r].id||e.graph.edges[i].end.id===t.id&&e.graph.edges[i].start.id===e.graph.vertices[r].id){s=!0;break}if(!s){i=e.graph.vertices[r],a=!1;break}}if(a){console.log("No other vertices to connect");return}let d=new s({weight:0,start:t,end:i,id:o});e.graph.addEdge(d),function(t,r){let i=`
    <li class="edge-editor-item" data-id="${t.id}">
        <div>
            <span class="current-vertex">${t.start.label}</span>
            <span> &rarr; </span>    
            <input class="to-vertex" type="text" value="${t.end.label}"/>
        </div>
        <button class="remove-edge remove-button">Remove</button>
    </li>`;r.insertAdjacentHTML("beforeend",i);let s=document.querySelector(`.edge-editor-item[data-id="${t.id}"] .to-vertex`),o=document.querySelector(`.edge-editor-item[data-id="${t.id}"] .remove-edge`);s.addEventListener("input",()=>{let r=e.graph.getVertexByLabel(s.value);if(!r){console.log(`No such vertex as ${s.value}`);return}t.end=r}),o.addEventListener("click",()=>{e.graph.removeEdge(t.id),r.removeChild(document.querySelector(`.edge-editor-item[data-id="${t.id}"]`))})}(d,r),c()}function n(t,r){e.graph.removeVertex(t),e.graph.removeEdges(t),r.remove()}const l=document.querySelector(".vertecies");window.addEventListener("load",function(){let s,o,a;e.canvas=document.querySelector("canvas"),e.ctx=e.canvas.getContext("2d"),e.canvas.width=e.convasConfig.size.width,e.canvas.height=e.convasConfig.size.height,e.graph=new i,function t(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height),e.graph.draw(),requestAnimationFrame(t)}(),function(){let i=document.querySelector(".add-vertex"),s=0;i.addEventListener("click",()=>{0===e.graph.vertices.length&&(s=0),function({id:t,color:i,size:s,coor:o,label:a}){let h=new r({id:t,color:i,size:s,coor:o,label:a});e.graph.addVertex(h),e.graph.draw(),function(t){l.insertAdjacentHTML("beforeend",`
        <li class="vertex-editor-item" data-id="${t.id}">
            <div>
                <input class="vertex-label-input" type="text" value="${t.label}"/>
                <button class="remove-vertex remove-button" class="remove-button">Delete</button>
            </div>
            <ul class="edge-list"></ul>
            <button class="add-edge">Add Edge</button>
        </li>`);let r=document.querySelector(`.vertex-editor-item[data-id="${t.id}"]`),i=r.querySelector(".vertex-label-input"),s=r.querySelector(".remove-vertex"),o=r.querySelector(".add-edge"),a=r.querySelector(".edge-list");s.addEventListener("click",n.bind(null,t.id,r)),i.addEventListener("input",()=>{var r,s;return r=t.id,s=i.value,void(e.graph.getVertex(r).label=s)}),o.addEventListener("click",d.bind(null,t,a))}(h),c()}({id:s,color:"blue",size:20,coor:{x:t.getRandomInt(20,e.canvas.width-20),y:t.getRandomInt(20,e.canvas.height-20)},label:(s++).toString()})})}(),o=!1,a={x:0,y:0},e.canvas.addEventListener("mousemove",({offsetX:r,offsetY:i})=>{if(!o&&void 0===s){for(let s of(e.canvas.style.cursor="auto",e.graph.vertices))if(t.getDistance(s.coor,{x:r,y:i})<s.size){e.canvas.style.cursor="grab";break}return}e.canvas.style.cursor="grabbing",e.graph.vertices[s].coor.x=r+a.x,e.graph.vertices[s].coor.y=i+a.y}),e.canvas.addEventListener("mousedown",({offsetX:r,offsetY:i})=>{for(let c=0;c<e.graph.vertices.length;c++){let d=e.graph.vertices[c];if(t.getDistance(d.coor,{x:r,y:i})<d.size){e.canvas.style.cursor="grabbing",s=c,o=!0,a.x=d.coor.x-r,a.y=d.coor.y-i;break}}}),e.canvas.addEventListener("mouseup",()=>{e.canvas.style.cursor="auto",s=void 0,o=!1,a.x=0,a.y=0})});
//# sourceMappingURL=index.f2515df2.js.map
