var packageCounterDecrease = document.querySelectorAll('.packages_counter_decrease');
var packageCounterIncrease = document.querySelectorAll('.packages_counter_increase');
var personName = document.querySelectorAll('.person__name');
var packageDuration = document.querySelectorAll('.packages_duration');
var packageError = document.querySelector('#packageError');

var selectionFlagDe = 0;
var selectionFlagIn = 0;
var selectionDuration = 0;
var personNameFlag = 0;

var packTotalPrice = document.querySelectorAll('.pack_total_price');
var packType = document.querySelectorAll('.pack_type');

var finalSelection;

var totalMonthlyPackage = 1;
var totalYearlyPackage = 0;



for (selectionFlagDe = 0;selectionFlagDe < packageCounterDecrease.length; selectionFlagDe++){
    packageCounterDecrease[selectionFlagDe].addEventListener('click', function () {
        if (finalSelection=="monthly"){
            if (totalMonthlyPackage>1){
                --totalMonthlyPackage;
                totalYearlyPackage = 0;
                //type with total
                var itemIndex = indexIn("." + this.classList[selectionFlagDe], this);

                makeInvoice(finalSelection, totalMonthlyPackage,itemIndex);
            }
        }
        else if (finalSelection=="yearly"){
            console.log(selectionFlagDe +finalSelection);
            --totalYearlyPackage;
            console.log(totalYearlyPackage);
            var itemIndex = indexIn("." + this.classList[selectionFlagIn], this);
            makeInvoice(finalSelection, totalYearlyPackage,itemIndex);
            totalMonthlyPackage = 1;
        }else{
            packageDuration[--selectionFlagDe].style.border = "1px solid red";
        }
    });
}


for (selectionFlagIn = 0;selectionFlagIn < packageCounterIncrease.length; selectionFlagIn++){
    packageCounterIncrease[selectionFlagIn].addEventListener('click', function (e) {
        if (finalSelection=="monthly"){
            totalMonthlyPackage++;
            totalYearlyPackage = 0;
            //type with total
            var itemIndex = indexIn("." + this.classList[selectionFlagIn], this);
            makeInvoice(finalSelection, totalMonthlyPackage,itemIndex);
        }
        else if (finalSelection=="yearly"){
            console.log(selectionFlagIn +finalSelection);
            totalYearlyPackage++;
            console.log(totalYearlyPackage);
            var itemIndex = indexIn("." + this.classList[selectionFlagIn], this);
            makeInvoice(finalSelection, totalYearlyPackage,itemIndex);
            totalMonthlyPackage = 1;
        }
        else{
            packageDuration[--selectionFlagIn].style.border = "1px solid red";
        }
    });
}


for (selectionDuration = 0;selectionDuration < packageDuration.length; selectionDuration++){
    packageDuration[selectionDuration].addEventListener('click', function () {
        finalSelection = this.options[this.selectedIndex].value;
        this.style.border = "1px solid grey";
    });
}

function makeInvoice(type,total,index) {
    console.log(type+"//"+total+"//"+index);
    console.log(packTotalPrice[index].innerText+"//"+packType[index].innerText);
    var displayPrice = parseInt(packTotalPrice[index].innerText);//40
    var persontoSponsor = personName[index];//40
    displayPrice = 40;

    if (type=="monthly"){
        sum= displayPrice*total;
        packTotalPrice[index].innerText = sum;
        packType[index].innerText = total+"mo";
        console.log(persontoSponsor.innerHTML);
        invoiceSummary(persontoSponsor.innerHTML,sum,total,index,type)
    }

    if (type=="yearly"){
        sum= displayPrice*total*12;
        packTotalPrice[index].innerText = sum;
        packType[index].innerText = total+"ye";
        console.log(persontoSponsor.innerHTML);
        invoiceSummary(persontoSponsor.innerHTML,sum,total,index,type)
    }
}


function indexIn(selector, element) {
    var list = document.querySelectorAll(selector);
    for (var i = 0; i < selector.length; ++i)
        if (list[i] === element) return i;
    return -1;
}
var summaryPersonName = document.querySelectorAll('.per_sum_name');
var summaryPersonType = document.querySelectorAll('.per_sum_type');
var summaryPersonPrice = document.querySelectorAll('.per_sum_price');
var summaryPersonPriceTot = document.querySelectorAll('.price_sum_tot');

function invoiceSummary(v1,v2,v3,v4,v5) {
    summaryPersonName[v4].innerHTML = "Child Sponsorship ("+v1+")";
    summaryPersonType[v4].innerHTML = v3+v5.substring(0, 2);
    summaryPersonPrice[v4].innerHTML = v2;
    summaryPersonPriceTot[0].innerText = totalPay(sum);
}

var tot = 0;
function totalPay(val) {
    for (var z= 0; z < summaryPersonPrice.length;z++){
        tot =+ val;
    }
    return tot;
}




