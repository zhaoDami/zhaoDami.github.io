(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fc25bfe"],{"13c9":function(t,e,a){},6369:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],staticClass:"topChart"},[t._m(0),t._m(1)]),t._m(2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"title"},[t._v("某周网站访客来源趋势图")]),a("div",{staticStyle:{width:"600px",height:"500px"},attrs:{id:"leftChart"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"title"},[t._v("未来一周天气变化")]),a("div",{staticStyle:{width:"600px",height:"500px"},attrs:{id:"rightChart"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottomChart"},[a("p",{staticClass:"title"},[t._v("未来一周天气变化")]),a("div",{staticStyle:{width:"1000px",height:"500px"},attrs:{id:"bottomChart"}})])}],n={name:"",data:function(){return{option:{tooltip:{trigger:"axis"},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"邮件营销",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]},option2:{tooltip:{trigger:"axis"},legend:{data:["最高气温","最低气温"]},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value",axisLabel:{formatter:"{value} °C"}},series:[{name:"最高气温",type:"line",data:[10,11,13,11,12,12,9],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}},{name:"最低气温",type:"line",data:[1,-2,2,5,3,2,0],markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"平均值"},[{symbol:"none",x:"90%",yAxis:"max"},{symbol:"circle",label:{position:"start",formatter:"最大值"},type:"max",name:"最高点"}]]}}]},option3:{title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{},emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:[820,932,901,934,1290,1330,1320]}]}}},mounted:function(){this.tLeftChart(),this.$axios.get("/json/tabList.json").then((function(t){console.log(t)}))},methods:{tLeftChart:function(){var t=document.getElementById("leftChart"),e=this.$echats.init(t);this.option&&e.setOption(this.option);var a=document.getElementById("rightChart"),i=this.$echats.init(a);this.option2&&i.setOption(this.option2);var s=document.getElementById("bottomChart"),n=this.$echats.init(s);this.option3&&n.setOption(this.option3)}},computed:{},watch:{}},o=n,r=(a("7e1c"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,"449c7ed6",null);e["default"]=l.exports},"7e1c":function(t,e,a){"use strict";a("13c9")}}]);
//# sourceMappingURL=chunk-4fc25bfe.c96f9942.js.map