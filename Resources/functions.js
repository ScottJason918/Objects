var litNot = new Object();
	litNot.name = "Chrono Ranger";
	litNot.type = "Damage";
	litNot.fun = function(){
		alert("High Damage, chance to kill himself");
	};
var litNot2 = new Object();
	litNot2.name = "Mister Fixer";
	litNot2.type = "Damage/Utility";
	litNot2.fun = function(){
		alert("High AOE damage but mostly for Utility");
	};
var litNot3 = new Object();
	litNot3.name = "Legacy";
	litNot3.type = "Support";
	litNot3.fun = function(){
		alert("Support and tank");
	};
var litNot4 = new Object();
	litNot4.name = "Unity";
	litNot4.type = "Damage";
	litNot4.fun = function(){
		alert("High damage but lots of set up");
	};
var litNot5 = new Object();
	litNot5.name = "Nightmist";
	litNot5.type = "Damage";
	litNot5.fun = function(){
		alert("Amazing damage and self healing, but can kill the whole team");
	};

var dotNot = {
	"name" : "Setback",
	"type" : "No Clue",
	"fun" : function() {
		alert("Horrible hero.  Nuff said");
	}
};
var dotNot2 = {
	"name" : "The Sentinels",
	"type" : "Damage/Support/Tank",
	"fun" : function() {
		alert("Can do everything, but can die very easily");
	}  
};
var dotNot3 = {
	"name" : "Parse",
	"type" : "Utility",
	"fun" : function() {
		alert("Card deck manipulation");
	}
};
var dotNot4 = {
	"name" : "Bunker",
	"type" : "Damage",
	"fun" : function() {
		alert("Way too much set up to do any damage");
	}
};
var dotNot5 = {
	"name" : "Tachyon",
	"type" : "Damage",
	"fun" : function() {
		alert("Can do massive damage but only once or twice a game");
	}
};

var fun = function(e){
	e.fun();
};

var litNots = [litNot, litNot2, litNot3, litNot4, litNot5];
var dotNots = [dotNot, dotNot2, dotNot3, dotNot4, dotNot5];


var start = function(){
	var win1 = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var win2 = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var tab1 = Ti.UI.createTab({
		icon: "KS_nav_ui.png",
		title: "My Heroes",
		window: win1,
	});
	
	var tab2 = Ti.UI.createTab({
		icon: "KS_nav_views.png",
		title: "Other Heroes",
		window: win2,
	});
	
	var table1 = Ti.UI.createTableView({
		top: 10
	});
	var litSect = Ti.UI.createTableViewSection({
	});
	for(var i = 0; i < litNots.length; i++){
		var aRow = Ti.UI.createTableViewRow({
			title: litNots[i].name,
			desc: litNots[i].type,
			hasChild: 'true',
		});
		litSect.add(aRow);
	};

	var table2 = Ti.UI.createTableView({
		top: 10
	});
	var dotSect = Ti.UI.createTableViewSection({
	});
	for(var i = 0; i < dotNots.length; i++){
		var aRow = Ti.UI.createTableViewRow({
			title: dotNots[i].name,
			desc: dotNots[i].type,
			haschild: 'true',
		});
		dotSect.add(aRow);
	};
	table1.addEventListener("click", fun);
	table1.setData([litSect]);
	table2.setData([dotSect]);
	win1.add(table1);
	win2.add(table2);
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.open();
};

exports.go = start;