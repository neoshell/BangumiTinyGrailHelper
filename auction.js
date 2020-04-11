// Highlight auction info

var list = $('#eden_tpc_list')[0].childNodes[1].childNodes;
for(var i = 0; i < list.length - 1; i++) {
    var item = list[i];
    var status = item.childNodes[2].textContent;
    if (status != '竞拍中') {
        continue;
    }
    var myBidInfo = item.childNodes[1].childNodes[5].childNodes[1];
    var myBidPrice = myBidInfo.textContent.split(" / ")[0].replace("₵", "");
    var overallBidInfo = item.childNodes[1].childNodes[5].childNodes[2];
    var numBidPeople = overallBidInfo.textContent.split(" / ")[0];
    var numBidShare = overallBidInfo.textContent.split(" / ")[1].replace(",", "");
    var numAvailableShare = item.childNodes[1].childNodes[5].childNodes[3].childNodes[0].textContent.split(" / ")[1].replace(",", "");
    console.log(myBidPrice, numBidPeople, numBidShare, numAvailableShare);

    if (numBidPeople == 1) {
        item.style.backgroundColor='#CCFFCC';
    } else if (numBidShare <= numAvailableShare) {
        item.style.backgroundColor='#FFFFCC';
    }

    if (myBidPrice > 100) {
        myBidInfo.style.backgroundColor='red';
    } else if (myBidPrice > 20) {
        myBidInfo.style.backgroundColor='yellow';
    }
}
