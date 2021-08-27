"use strict";(self.webpackChunkreact_spreadsheet=self.webpackChunkreact_spreadsheet||[]).push([[827],{2175:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),o=["components"],i={id:"usage",title:"Usage"},d="Usage",p={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Simple",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-spreadsheet/docs/usage",editUrl:"https://github.com/iddan/react-spreadsheet/tree/master/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"sidebar",previous:{title:"Get Started",permalink:"/react-spreadsheet/docs/"}},l=[{value:"Simple",id:"simple",children:[]},{value:"Controlled",id:"controlled",children:[]}],c={toc:l};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usage"},"Usage"),(0,s.kt)("h2",{id:"simple"},"Simple"),(0,s.kt)("p",null,"The Spreadsheet component requires the ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," property: an array of arrays with objects that has the ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," key. Changes made in the Spreadsheet will not affect the passed data array as in React props values should not be mutated."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," prop value is changed the component will discard any changes made by the user. If you want to make changes to ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," and incorporate the user's changes see ",(0,s.kt)("a",{parentName:"p",href:"#Controlled"},"Controlled"),"."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const data = [\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ];\n  return <Spreadsheet data={data} />;\n};\n')),(0,s.kt)("h2",{id:"controlled"},"Controlled"),(0,s.kt)("p",null,"The Spreadsheet component accepts ",(0,s.kt)("inlineCode",{parentName:"p"},"onChange")," prop that is called every time one of the Spreadsheet's cell is changed by the user. You can use it to save the modified data and to react to changes (e.g. validating the modified data, further modify it, persist it)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const [data, setData] = useState([\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ]);\n  return <Spreadsheet data={data} onChange={setData} />;\n};\n')))}u.isMDXComponent=!0}}]);