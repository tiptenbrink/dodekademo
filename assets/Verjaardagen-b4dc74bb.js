import{j as r,r as j}from"./vendor-44375bc4.js";import{A as h,P as m}from"./index-1406876d.js";import{u as D,q as f}from"./queries-9da31b54.js";function b(e){return r.jsx("p",{className:"maand",children:e.maand})}function o(e){return r.jsxs("div",{className:"verjaardag_container",children:[r.jsx("p",{className:"verjaardag_datum",children:e.datum}),r.jsx("p",{className:"verjaardag_datum_mobile",children:e.dag}),r.jsx("p",{className:"verjaardag_naam",children:e.voornaam+" "+e.achternaam}),r.jsx("p",{className:"verjaardag_leeftijd",children:e.leeftijd+" jaar"})]})}const x=["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],w=["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],v=[{firstname:"Arnold",lastname:"het Aardvarken",birthdate:"2019-02-25"}];function c(e){const n=new Date().getFullYear(),t=new Date(e);return t.setFullYear(n),t<new Date&&t.setFullYear(n+1),t.getFullYear()-new Date(e).getFullYear()}function Y(e,n){const t=new Date().getFullYear(),s=new Date(e);s.setFullYear(t),s<new Date&&s.setFullYear(t+1);const a=new Date(n);return a.setFullYear(t),a<new Date&&a.setFullYear(t+1),s<a?-1:s>a?1:0}function F(e){const n=new Date().getFullYear(),t=new Date(e);return t.setFullYear(n),t<new Date&&t.setFullYear(n+1),w[t.getDay()]}const _=()=>{const{authState:e,setAuthState:n}=j.useContext(h),t=D({authState:e,setAuthState:n}),s=f(t,v,"User Info Query Error");return s.sort((a,d)=>Y(a.birthdate,d.birthdate)),r.jsxs(r.Fragment,{children:[r.jsx(m,{title:"Verjaardagen"}),!e.isAuthenticated&&r.jsx("p",{className:"verjaardagen_status",children:"Deze pagina is helaas niet toegankelijk als je niet ingelogd bent. Log in om deze pagina te kunnen bekijken."}),e.isAuthenticated&&r.jsx("div",{className:"verjaardagen_container",children:s.map((a,d,g)=>{const l=F(a.birthdate)+" "+new Date(a.birthdate).getDate(),i=l+a.firstname+a.lastname;if(d==0||new Date(a.birthdate).getMonth()!==new Date(g[d-1].birthdate).getMonth()){const u=x[new Date(a.birthdate).getMonth()];return r.jsxs("div",{className:"verjaardagen_contents",children:[r.jsx(b,{maand:u},u),r.jsx(o,{dag:new Date(a.birthdate).getDate(),datum:l,voornaam:a.firstname,achternaam:a.lastname,leeftijd:c(a.birthdate)},i)]},u+i)}return r.jsx(o,{dag:new Date(a.birthdate).getDate(),datum:l,voornaam:a.firstname,achternaam:a.lastname,leeftijd:c(a.birthdate)},i)})})]})};export{_ as default};
