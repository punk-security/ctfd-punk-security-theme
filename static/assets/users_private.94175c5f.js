import{m as o,b as i}from"./module.esm.d2f93c01.js";import{C as a}from"./index.f49d0c1c.js";import{g as n}from"./userscore.f2b5061c.js";import{e as l}from"./index.ca6197ee.js";import"./echarts.7de7c874.js";window.Alpine=o;o.data("UserGraphs",()=>({solves:null,fails:null,awards:null,solveCount:0,failCount:0,awardCount:0,getSolvePercentage(){let e=this.solveCount/(this.solveCount+this.failCount)*100;return Math.round(e)},getFailPercentage(){let e=this.failCount/(this.solveCount+this.failCount)*100;return Math.round(e)},getCategoryBreakdown(){let e=[],s={};this.solves.data.map(t=>{e.push(t.challenge.category)}),e.forEach(t=>{t in s?s[t]+=1:s[t]=1});let r=[];for(const t in s)r.push({name:t,count:s[t],percent:s[t]/e.length*100,color:i(t)});return r},async init(){this.solves=await a.pages.users.userSolves("me"),this.fails=await a.pages.users.userFails("me"),this.awards=await a.pages.users.userAwards("me"),this.solveCount=this.solves.meta.count,this.failCount=this.fails.meta.count,this.awardCount=this.awards.meta.count;let e=n(a.user.id,a.user.name,this.solves.data,this.awards.data);l(this.$refs.scoregraph,e)}}));o.start();
