function getStocks()
{
url1="http://localhost:7890/stocks";
url2="https://priceapi.moneycontrol.com/pricefeed/bse/equitycash";
fetch(url1)
.then((res)=> res.json())
.then((data)=>data.map((api1)=>
{
    fetch(`${url2}/${api1.name}`)
    .then((res)=> res.json())
    .then((api2)=> 
    {
    //     console.log(api2)
    // console.log(`calling done ${api1.name}`);
    var element= 
    `<div class="card" style="width:25%;height:450px;float:left;margin-left:2%;margin-top:2%;">
    <img src='${api1.logo}' class="card-img-top" style="height"250px;">
    <div class="card-body" style="padding:10px 0px;">
    <h5 class="card-title">${api2.data.company}</h5>
    <p> Price Current:${api2.data.pricecurrent}</p>
    <p> Price Change: ${api2.data.pricechange}%</p>
    <p>Price Percent Change: ${api2.data.pricechange}%</p>
    </div>
    </div>`
$('#displayCard').append(element);
})
}));
}