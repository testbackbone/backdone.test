var A = Backbone.Model.extend({
	initialize:  function (argument) {
	console.log("this is initialize construtor");
},
asSring:function(){
	return JSON.stringify(this.toJSON());
}
}); 

var  B=new A();
B.set({
	fn:"Ram",
	ln:"Singh"
	});
B.set({'htm':"<h1>This is heading </h1>"});
console.log(B.asSring());
console.log(B.has('fn')+B.has('ln'));

$("body").append(B.escape('htm'));