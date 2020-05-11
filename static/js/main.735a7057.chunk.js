(this["webpackJsonp06-group-react"]=this["webpackJsonp06-group-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},24:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(18),c=a.n(s),l=(a(24),a(11)),o=a(5),i=a(6),u=a(8),m=a(7),d=a(15),p=a.n(d);a(25);p.a.initializeApp({apiKey:"AIzaSyAFZe3GsqX7FKN8wgInodZi2hxUhMQgyF0",authDomain:"project-six-group-three.firebaseapp.com",databaseURL:"https://project-six-group-three.firebaseio.com",projectId:"project-six-group-three",storageBucket:"project-six-group-three.appspot.com",messagingSenderId:"136712194355",appId:"1:136712194355:web:d64e186c3ca40900601646"});var h=p.a,f=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Daily Budget Calculator"),r.a.createElement("p",null,"Helping you save for a rainy day."))},y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getCurrentDate=function(){var t=new Date,a=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2);e.setState({todayFull:t,today:a})},e.whenDateChanges=function(t){var a=t.target.value,n=new Date(t.target.value);e.setState({today:a,fullSelected:n},(function(){var t=e.state.fullSelected,a=e.state.todayFull;e.setState({days:parseInt((t-a)/864e5+1)},(function(){if(0===e.state.days)return alert("Please select a date different from today");e.getDaysLeft()}))}))},e.getDaysLeft=function(t){t=e.state.days,e.props.getDaysLeft(t)},e.state={todayFull:new Date,today:"",selectedDate:"",fullSelected:new Date,days:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getCurrentDate(),this.getDaysLeft()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"transactions"},"Next Paycheck"),r.a.createElement("input",{onChange:this.whenDateChanges,type:"date",id:"transactions",name:"transactions",min:this.state.today}))}}]),a}(n.Component),v=a(12),g=a.n(v),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).calcDailyBudget=function(){var t=(e.state.total-e.state.amountToSave)/e.state.daysToNextCheck;e.setState({dailybudget:t},(function(){e.subtractExpenses()}))},e.checkExpenses=function(){g.a.database().ref("Transactions").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push(a[r].amount);var s=n.map((function(e){return parseInt(e)}));e.setState({transactionsAmount:s.length>0?s.reduce((function(e,t){return e+t})):0},(function(){e.subtractExpenses()}))}))},e.subtractExpenses=function(){var t=e.state,a=(t.total-t.transactionsAmount)/t.daysToNextCheck;a=a||0,e.setState({newTotal:a})},e.state={total:0,amountToSave:0,daysToNextCheck:0,paycheck:0,dailybudget:0,transactionsAmount:0,newTotal:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.database().ref("user").on("value",(function(t){var a=t.val();for(var n in a)e.setState(Object(l.a)({},n,parseInt(a[n])),(function(){e.calcDailyBudget()}))})),this.checkExpenses()}},{key:"render",value:function(){var e=this.state,t=e.paycheck,a=e.daysToNextCheck,n=e.amountToSave,s=e.newTotal;return r.a.createElement("div",null,r.a.createElement("ul",{className:"dailyInfo"},r.a.createElement("li",null,"Your started with $",r.a.createElement("span",null,t.toFixed(2))),r.a.createElement("li",null,"You plan to save $",r.a.createElement("span",null,n.toFixed(2))),r.a.createElement("li",null,"You have ",r.a.createElement("span",null,a)," days till your next paycheck."),r.a.createElement("li",null,"Your Daily Budget is $",r.a.createElement("span",null,s.toFixed(2)))))}}]),a}(n.Component);var b=function(e){return r.a.createElement("li",{className:"displayTransactions",key:e.index},r.a.createElement("button",{className:"remove","aria-label":"remove expense",onClick:function(){h.database().ref("Transactions").child(e.index).remove()}},"-"),r.a.createElement("span",null,e.description,": $",e.amount))},D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){t.preventDefault(),e.setState(Object(l.a)({},t.target.name,t.target.value))},e.addTransactionToDb=function(){var t=g.a.database().ref("Transactions"),a=e.state,n=a.transAmount,r={description:a.transDescr,amount:n};t.push(r),e.setState({transDescr:"",transAmount:""})},e.appendTransaction=function(){return r.a.createElement("ul",{className:"transactions"},e.state.allTransactions.map((function(e,t){return r.a.createElement(b,{key:t,description:e.transName,amount:e.transAmount,index:e.transId})})))},e.state={transDescr:"",transAmount:"",allTransactions:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.database().ref("Transactions").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({transName:a[r].description,transAmount:a[r].amount,transId:r});e.setState({allTransactions:n})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{className:"addExpense"},"Add Expense"),r.a.createElement("div",{className:"expenseInfo"},r.a.createElement("label",{htmlFor:"transDescr",className:"sr-only"},"Description of expense"),r.a.createElement("input",{required:!0,type:"text",name:"transDescr",id:"transDescr",onChange:this.handleChange,placeholder:"Expense description",value:this.state.transDescr}),r.a.createElement("label",{htmlFor:"transAmount",className:"sr-only"},"Description of expense"),r.a.createElement("input",{required:!0,type:"number",name:"transAmount",id:"transAmount",onChange:this.handleChange,placeholder:"Expense amount",value:this.state.transAmount}),r.a.createElement("button",{className:"add",type:"button","aria-label":"add transaction",onClick:this.addTransactionToDb},"+")),this.appendTransaction())}}]),a}(n.Component),k=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"http://www.heatherandreadis.com/"},"Heather"),", ",r.a.createElement("a",{href:"https://nikitaguliaev.com"},"Nikita"),", ",r.a.createElement("a",{href:"https://tiffany-tubi.com"},"Tiffany"),", and ",r.a.createElement("a",{href:"https://www.dustinkelly.dev/"},"Dustin")))},x=(a(36),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).saveToDb=function(){var t=h.database().ref("user"),a=e.state,n=a.paycheck,r=a.savings,s=a.days,c={total:a.total,daysToNextCheck:s,paycheck:n,amountToSave:r};t.update(c)},e.handleUserInput=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.calcTotal=function(){if(e.state.paycheck<e.state.savings)return alert("You cannot save more than your paycheck. Sorry...");var t=e.state.paycheck-e.state.savings-e.state.dailyExpenses;e.setState({total:t},(function(){e.calcDailyBudget()}))},e.calcDailyBudget=function(){var t=e.state.total/e.state.days;e.setState({dailybudget:t},(function(){e.saveToDb()}))},e.getDaysLeft=function(t){e.setState({days:t})},e.state={paycheck:0,savings:0,days:0,dailybudget:0,total:0,afterSaving:0,dailyExpenses:0},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"inputForm half"},r.a.createElement("form",{className:"paymentSubmit",onSubmit:this.calcTotal},r.a.createElement("h3",null,"Income"),r.a.createElement("label",{htmlFor:"paycheck"},"How much is your paycheck?"),r.a.createElement("input",{placeholder:"e.g. 6,000.00",type:"number",id:"paycheck",name:"paycheck",onChange:this.handleUserInput,required:!0}),r.a.createElement(y,{getDaysLeft:this.getDaysLeft}),r.a.createElement("label",{htmlFor:"savings"},"How much are you saving?"),r.a.createElement("input",{placeholder:"e.g. 1,000.00",type:"number",id:"savings",name:"savings",onChange:this.handleUserInput}),r.a.createElement("button",{className:"nextButton",type:"submit"},"Add Paycheck"))),r.a.createElement("div",{className:"budgetSection half"},r.a.createElement("h3",null,"Budget"),r.a.createElement("div",{className:"budget"},r.a.createElement(E,null)),r.a.createElement(D,null)))),r.a.createElement(k,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.735a7057.chunk.js.map