import { type Variant } from "./types";

// ====== Encabezado común para los snippets que el usuario copiará ======
const IMPORTS = `import "./charts.css";
import {
  ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine,
  LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart,
  PieChart, Pie, Cell, RadialBarChart, RadialBar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ScatterChart, Scatter, ZAxis, FunnelChart, Funnel, LabelList
} from "recharts";`;

const DATA_MONTHS = `
const data = [
  { name: "Ene", a: 400, b: 240, c: 240 }, { name: "Feb", a: 300, b: 139, c: 221 },
  { name: "Mar", a: 200, b: 980, c: 229 }, { name: "Abr", a: 278, b: 390, c: 200 },
  { name: "May", a: 189, b: 480, c: 218 }, { name: "Jun", a: 239, b: 380, c: 250 },
  { name: "Jul", a: 349, b: 430, c: 210 }
];`;

const CONTAINER_OPEN = `<div className="chart-box"><ResponsiveContainer width="100%" height={240}>`;
const CONTAINER_CLOSE = `</ResponsiveContainer></div>`;

const card = (id: string, label: string, body: string, data = DATA_MONTHS): Variant => ({
  id, label, groupId: "basics" as any, preview: null,
  tsx:
    `${IMPORTS}
${data}

export default function Demo(){
  return (
    ${CONTAINER_OPEN}
${body.replace(/^/gm, "      ")}
    ${CONTAINER_CLOSE}
  );
}
`,
});

// ====== Variantes ======
export const VARIANTS: Variant[] = [
  // BASICS (3)
  {
    ...card("line-basic", "Línea básica", `
<LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip />
  <Line type="monotone" dataKey="a" stroke="var(--primary-9,#9f2141)" strokeWidth={2} dot={false} />
</LineChart>`),
    groupId: "basics",
  },
  {
    ...card("area-basic", "Área (gradiente)", `
<AreaChart data={data}>
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--primary-9,#9f2141)" stopOpacity={0.35}/>
      <stop offset="100%" stopColor="var(--primary-9,#9f2141)" stopOpacity={0.05}/>
    </linearGradient>
  </defs>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip />
  <Area type="monotone" dataKey="a" stroke="var(--primary-9,#9f2141)" fill="url(#g1)" />
</AreaChart>`),
    groupId: "basics",
  },
  {
    ...card("bar-basic", "Barras verticales", `
<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip />
  <Bar dataKey="a" radius={[6,6,0,0]} fill="var(--primary-9,#9f2141)" />
</BarChart>`),
    groupId: "basics",
  },

  // BARS (3)
  {
    ...card("bar-horizontal", "Barras horizontales", `
<BarChart data={data} layout="vertical" margin={{ left: 20 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" /><YAxis type="category" dataKey="name" />
  <Tooltip /><Bar dataKey="a" fill="var(--primary-9,#9f2141)" radius={[0,6,6,0]} />
</BarChart>`),
    groupId: "bars",
  },
  {
    ...card("bar-grouped", "Barras agrupadas (2 series)", `
<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
  <Bar dataKey="a" fill="var(--primary-9,#9f2141)" radius={[6,6,0,0]} />
  <Bar dataKey="b" fill="var(--info-9,#0ea5e9)" radius={[6,6,0,0]} />
</BarChart>`),
    groupId: "bars",
  },
  {
    ...card("bar-stacked", "Barras apiladas", `
<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
  <Bar dataKey="a" stackId="s" fill="var(--primary-9,#9f2141)" />
  <Bar dataKey="b" stackId="s" fill="var(--ok-9,#22c55e)" />
  <Bar dataKey="c" stackId="s" fill="var(--warning-9,#f59e0b)" />
</BarChart>`),
    groupId: "bars",
  },

  // LINES (4)
  {
    ...card("line-multi", "Líneas múltiples", `
<LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
  <Line type="monotone" dataKey="a" stroke="var(--primary-9,#9f2141)" dot={false} />
  <Line type="monotone" dataKey="b" stroke="var(--info-9,#0ea5e9)" dot={false} />
</LineChart>`),
    groupId: "lines",
  },
  {
    ...card("area-stacked", "Áreas apiladas", `
<AreaChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
  <Area type="monotone" stackId="1" dataKey="a" stroke="var(--primary-9,#9f2141)" fill="rgba(159,33,65,.25)" />
  <Area type="monotone" stackId="1" dataKey="b" stroke="var(--info-9,#0ea5e9)" fill="rgba(14,165,233,.25)" />
</AreaChart>`),
    groupId: "lines",
  },
  {
    ...card("line-step", "Línea escalonada", `
<LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip />
  <Line type="step" dataKey="a" stroke="var(--primary-9,#9f2141)" dot={false} />
</LineChart>`),
    groupId: "lines",
  },
  {
    ...card("composed", "Combinada (bar+line)", `
<ComposedChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" /><YAxis /><Tooltip /><Legend />
  <Bar dataKey="b" fill="var(--info-9,#0ea5e9)" radius={[6,6,0,0]} />
  <Line type="monotone" dataKey="a" stroke="var(--primary-9,#9f2141)" dot={false} />
</ComposedChart>`),
    groupId: "lines",
  },

  // PIES (2)
  {
    ...card("pie-donut", "Donut simple", `
const pie = [{name:"A", value:40},{name:"B", value:30},{name:"C", value:30}];
const colors = ["var(--primary-9,#9f2141)", "var(--info-9,#0ea5e9)", "var(--ok-9,#22c55e)"];
<PieChart>
  <Pie data={pie} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} stroke="none">
    {pie.map((_,i)=><Cell key={i} fill={colors[i % colors.length]}/>)}
  </Pie>
  <Tooltip />
</PieChart>`),
    groupId: "pies",
  },
  {
    ...card("pie-semi", "Semi-donut (gauge)", `
const pie = [{name:"Progreso", value:72}, {name:"Restante", value:28}];
<PieChart>
  <Pie data={pie} dataKey="value" startAngle={180} endAngle={0}
       innerRadius={60} outerRadius={80} stroke="none">
    <Cell fill="var(--primary-9,#9f2141)" />
    <Cell fill="#eee" />
    <LabelList dataKey="value" position="center" formatter={()=>"72%"} />
  </Pie>
</PieChart>`),
    groupId: "pies",
  },

  // RADIALS (2)
  {
    ...card("radial-progress", "Radial progress", `
const radial = [{name:"Avance", value:68, fill:"var(--primary-9,#9f2141)"}];
<RadialBarChart data={radial} innerRadius={60} outerRadius={80} startAngle={90} endAngle={-270}>
  <RadialBar dataKey="value" cornerRadius={10} />
  <LabelList dataKey="value" position="center" formatter={(v)=>v+"%"} />
</RadialBarChart>`),
    groupId: "radials",
  },
  {
    ...card("radar", "Radar / Spider", `
const rdata = [
  { x:"UI", a:120 }, { x:"API", a:98 }, { x:"DB", a:86 }, { x:"QA", a:99 }, { x:"Ops", a:85 }
];
<RadarChart data={rdata} outerRadius={80}>
  <PolarGrid />
  <PolarAngleAxis dataKey="x" />
  <PolarRadiusAxis angle={30} />
  <Radar dataKey="a" stroke="var(--primary-9,#9f2141)" fill="rgba(159,33,65,.25)" />
  <Tooltip />
</RadarChart>`),
    groupId: "radials",
  },

  // XY (2)
  {
    ...card("scatter", "Dispersión", `
const sdata = [{x:10,y:30},{x:20,y:18},{x:30,y:12},{x:40,y:22},{x:50,y:9}];
<ScatterChart>
  <CartesianGrid /><XAxis dataKey="x" /><YAxis dataKey="y" /><Tooltip />
  <Scatter data={sdata} fill="var(--primary-9,#9f2141)" />
</ScatterChart>`),
    groupId: "xy",
  },
  {
    ...card("bubble", "Burbujas (3D)", `
const bdata = [{x:10,y:30,z:60},{x:20,y:18,z:120},{x:30,y:12,z:80},{x:40,y:22,z:160},{x:50,y:9,z:40}];
<ScatterChart>
  <CartesianGrid /><XAxis dataKey="x" /><YAxis dataKey="y" /><ZAxis dataKey="z" range={[60,400]}/>
  <Tooltip />
  <Scatter data={bdata} fill="var(--info-9,#0ea5e9)" />
</ScatterChart>`),
    groupId: "xy",
  },

  // HIERARCHY (1)
  {
    ...card("funnel", "Funnel / Embudo", `
const steps = [
  { stage:"Visitas", v: 1000 },
  { stage:"Registro", v: 620 },
  { stage:"Verificación", v: 420 },
  { stage:"Compra", v: 210 },
];
<FunnelChart>
  <Tooltip />
  <Funnel dataKey="v" data={steps} isAnimationActive labelLine>
    <LabelList position="right" dataKey="stage" />
  </Funnel>
</FunnelChart>`),
    groupId: "hierarchy",
  },

  // ADVANCED (6)
  {
    ...card("range-area", "Área de rango (min/max)", `
const r = [
  {name:"Ene", min:100, max:400}, {name:"Feb", min:120, max:380},
  {name:"Mar", min: 80, max:420}, {name:"Abr", min:110, max:360},
  {name:"May", min:140, max:390}, {name:"Jun", min:160, max:410}
];
<ComposedChart data={r}>
  <CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/>
  <Area type="monotone" dataKey="max" stroke="none" fill="rgba(14,165,233,.25)" />
  <Area type="monotone" dataKey="min" stroke="none" fill="#fff" />
  <Line type="monotone" dataKey="max" stroke="var(--info-9,#0ea5e9)" dot={false}/>
  <Line type="monotone" dataKey="min" stroke="var(--info-9,#0ea5e9)" dot={false}/>
</ComposedChart>`),
    groupId: "advanced",
  },
  {
    ...card("histogram", "Histograma (binning)", `
const values = [3,5,7,10,6,8,9,2,4,6,7,8,10,11,13,8,6,5,4,3,2];
function bins(arr:number[], size=3){
  const out:{x:string, n:number}[]=[]; const max = Math.max(...arr);
  for(let i=0;i<=max;i+=size){ const j=i+size-1;
    out.push({ x: \`\${i}-\${j}\`, n: arr.filter(v=>v>=i && v<=j).length });
  } return out;
}
const b = bins(values,3);
<BarChart data={b}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="x" /><YAxis allowDecimals={false} /><Tooltip />
  <Bar dataKey="n" fill="var(--primary-9,#9f2141)" radius={[6,6,0,0]} />
</BarChart>`),
    groupId: "advanced",
  },
  {
    ...card("waterfall-lite", "Waterfall (acumulado)", `
const steps = [
  { name:"Inicio", v: 500 },
  { name:"Ventas", v: 300 },
  { name:"Costos", v: -180 },
  { name:"Impuestos", v: -70 },
  { name:"Fin", v: 0 },
];
let acc=0;
const wf = steps.map((s,i)=>{
  if(i===0) { acc=s.v; return { name:s.name, base:0, value:acc, color:"var(--ok-9,#22c55e)" }; }
  if(s.name==="Fin"){ return { name:s.name, base:0, value:acc, color:"#94a3b8" }; }
  const start=acc; acc+=s.v;
  return { name:s.name, base: Math.min(start, acc), value: Math.abs(s.v), color: s.v>=0?'var(--ok-9,#22c55e)':'var(--danger-9,#ef4444)' };
});
<ComposedChart data={wf}>
  <CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><YAxis/><Tooltip/>
  <Bar dataKey="base" stackId="wf" fill="transparent" />
  <Bar dataKey="value" stackId="wf">
    {wf.map((it,i)=><Cell key={i} fill={it.color} radius={[6,6,0,0]} />)}
  </Bar>
  <ReferenceLine y={0} stroke="#999" />
</ComposedChart>`),
    groupId: "advanced",
  },
  {
    ...card("sparkline", "Sparkline (mini área)", `
const d=[3,4,3,6,5,7,8,7,9,11,9,12].map((v,i)=>({i,v}));
<ComposedChart data={d}>
  <XAxis dataKey="i" hide/><YAxis hide domain={['dataMin-2','dataMax+2']}/>
  <Area type="monotone" dataKey="v" stroke="var(--primary-9,#9f2141)" fill="rgba(159,33,65,.15)" />
</ComposedChart>`),
    groupId: "advanced",
  },
  {
    ...card("kpi-spark", "KPI + sparkline", `
const d=[3,4,3,6,5,7,8,7,9,11,9,12].map((v,i)=>({i,v}));
export default function Demo(){
  return (
    <div className="chart-box" style={{display:"grid",gap:8}}>
      <div style={{fontWeight:800,fontSize:20}}>8,421 <span style={{color:"#16a34a",fontSize:12}}>+12%</span></div>
      <ResponsiveContainer width="100%" height={60}>
        <ComposedChart data={d}>
          <XAxis dataKey="i" hide/><YAxis hide domain={['dataMin-2','dataMax+2']}/>
          <Area type="monotone" dataKey="v" stroke="var(--primary-9,#9f2141)" fill="rgba(159,33,65,.18)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}`),
    groupId: "advanced",
  },
  {
    ...card("bullet", "Bullet (objetivo vs actual)", `
const d=[{name:"", actual:72, objetivo:90}];
<ResponsiveContainer width="100%" height={120}>
  <ComposedChart data={d} layout="vertical" margin={{left:20,right:20,top:10,bottom:10}}>
    <XAxis type="number" domain={[0,100]} hide />
    <YAxis type="category" dataKey="name" hide />
    <Bar dataKey="actual" barSize={18} radius={[9,9,9,9]} fill="var(--primary-9,#9f2141)" />
    <ReferenceLine x={90} stroke="#64748b" strokeDasharray="4 3" />
  </ComposedChart>
</ResponsiveContainer>`),
    groupId: "advanced",
  },
];
