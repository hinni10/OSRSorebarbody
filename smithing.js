var startingExp = 1385365;
var currentExp = 1385365;
var totalExpNeeded = 13034431;
var expLeft = totalExpNeeded-currentExp;

var mithBarExp = 30; //
var mithBodyExp = 250; //
var coalNeededForBar = 2; //
var mithOreNeededForBar = 1; 
var mithBarNeededForBody = 5; 
var expForOne = (mithBarExp*mithBarNeededForBody)+mithBodyExp;
var expGainedFromOneCrafting = mithBodyExp+(mithBarExp*mithBarNeededForBody);
var totalExpGained = 0;
var TimesOfSmithingAllLeft = (totalExpNeeded-startingExp)/expForOne;
var bodysMadePerHourAprox = 770; //
var barsMadePerHourAprox = 2750; //

var priceOfMithOre = 168; //
var priceOfCoal = 184; // 
var priceOfBodyOnGE = 2876;//
var profitFromOneCrafting = priceOfBodyOnGE-(((priceOfCoal*2)+priceOfMithOre)*5);
var totalProfit = 0;
var totalCostForSupplies = 0;
var totalHoursSpentMakingBodies = 0;
var totalHoursSpentMakingBars = 0;

var amountOfCoalNeeded = 0;
var amountOfMithOresNeeded = 0;
var amountOfMithBodysMade = 0;
var amountOfMithBarsMade = 0;
var amountOfExpGained = 0;

var coalsCounter = 0;
var mithOresCounter = 0;
var bodysMade = 0;

function calculate(){
	mithBarExp = $("#expFromMakingOneBar").val(); 
	mithBodyExp = $("#expFromMakingOneBody").val();
	coalNeededForBar = $("#coalsNeededForOneBar").val();
	bodysMadePerHourAprox = $("#bodysPerHourAprox").val();
	barsMadePerHourAprox = $("#barsPerHourAprox").val(); 
	priceOfMithOre = $("#priceOfOre").val();
	priceOfCoal = $("#priceOfCoal").val();
	priceOfBodyOnGE = $("#priceOfBodyGE").val();

	var expNeeded = totalExpNeeded-startingExp;
	amountOfMithBodysMade = expNeeded/expGainedFromOneCrafting;
	amountOfCoalNeeded = amountOfMithBodysMade*(coalNeededForBar*5);
	amountOfMithOresNeeded = amountOfMithBodysMade*(mithOreNeededForBar*mithBarNeededForBody);
	amountOfMithBarsMade = amountOfMithBodysMade*mithBarNeededForBody;
	totalProfit = amountOfMithBodysMade*profitFromOneCrafting;
	totalCostForSupplies = amountOfMithBodysMade*((priceOfMithOre+(priceOfCoal*coalNeededForBar))*mithBarNeededForBody);
	totalHoursSpentMakingBodies = amountOfMithBodysMade/bodysMadePerHourAprox;
	totalHoursSpentMakingBars = amountOfMithBarsMade/barsMadePerHourAprox;

	$("#results").append("<br>" + "Total Mithril Platebodys Made: " + amountOfMithBodysMade + "<br>");
	$("#results").append("Total Mithril Ores Used: " + amountOfMithOresNeeded + "<br>");
	$("#results").append("Total Coals Used: " + amountOfCoalNeeded + "<br>");
	$("#results").append("Total Mithril Bars Made: " + amountOfMithBarsMade + "<br>");
	$("#results").append("Total Profit: " + totalProfit + "<br>");
	$("#results").append("Total Cost For Supplies: " + totalCostForSupplies + "<br>");
	$("#results").append("Total Hours For Ores to Bars: " + totalHoursSpentMakingBars + "<br>");
	$("#results").append("Total Hours For Bars to Bodies: " + totalHoursSpentMakingBodies + "<br>");
	$("#results").append("Total Hours Overall: " + (totalHoursSpentMakingBars + totalHoursSpentMakingBodies) + "<br>");

	console.log("Total Mithril Platebodys Made: " + amountOfMithBodysMade);
	console.log("Total Mithril Ores Used: " + amountOfMithOresNeeded);
	console.log("Total Coals Used: " + amountOfCoalNeeded);
	console.log("Total Mithril Bars Made: " + amountOfMithBarsMade);
	console.log("Total Profit: " + totalProfit);
	console.log("Total Cost For Supplies: " + totalCostForSupplies);
	console.log("Total Hours For Ores to Bars: " + totalHoursSpentMakingBars);
	console.log("Total Hours For Bars to Bodies: " + totalHoursSpentMakingBodies);
	console.log("Total Hours Overall: " + (totalHoursSpentMakingBars + totalHoursSpentMakingBodies));

}

