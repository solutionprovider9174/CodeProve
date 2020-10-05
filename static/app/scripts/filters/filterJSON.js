

//d3.csv("/media/data/Testdashboard.csv").then(function(error, Data) {
//    var newData = JSON.parse(Data.data);
//    var spendData = [{
//        "Dim_Team": newData.Dim_Team,
//        "Dim_Season": newData.Dim_Season,
//        "Fct_pt": newData.Fct_pt
//    }];



var spendData = [];

var yearRingChart =  new dc.PieChart("#chart-ring-new"),
    spendHistChart = new dc.BarChart("#chart-hist-spend"),
    spenderRowChart = new dc.RowChart("#chart-row-spenders");

getData();

// spendData = [
//     { Dim_Team: 'Barcelona', Fct_pt: '40', Dim_Season: 201112 },
//     { Dim_Team: 'Chelsea', Fct_pt: '10', Dim_Season: 201112 },
//     { Dim_Team: 'Dortmund', Fct_pt: '40', Dim_Season: 201112 },
//     { Dim_Team: 'Barcelona', Fct_pt: '70', Dim_Season: 201213 },
//     { Dim_Team: 'Chelsea', Fct_pt: '20', Dim_Season: 201213 },
//     { Dim_Team: 'Chelsea', Fct_pt: '50', Dim_Season: 201314 },
//     { Dim_Team: 'Barcelona', Fct_pt: '30', Dim_Season: 201314 },
//     { Dim_Team: 'Dortmund', Fct_pt: '30', Dim_Season: 201213 }
//
// ];

function resetData(ndx) {
    ndx.remove(() => true);
}

// set crossfilter
var ndx = crossfilter(spendData),
    TeamDim = ndx.dimension(function (d) { return d.Dim_Team; }),
    ptDim = ndx.dimension(function (d) { return Math.floor(d.Fct_pt / 10); }),
    SeasonDim = ndx.dimension(function (d) { return d.Dim_Season; }),
    HomeAwayDim ndx.dimension(function (d) { return d.Dim_HA; }),
    HomeAwayCnt = HomeAwayDim.group().reduceSum(function (d) { return +d.Fct_cnt; }),
    ptPerTeam = TeamDim.group().reduceSum(function (d) { return +d.Fct_pt; }),
    ptPerSeason = SeasonDim.group().reduceSum(function (d) { return +d.Fct_pt; }),
    ptHist = ptDim.group().reduceCount();

yearRingChart
    .dimension(HomeAwayDim)
    .group(HomeAwayCnt)
    .innerRadius(50)
    .controlsUseVisibility(true);

spendHistChart
    .dimension(ptDim)
    .group(ptHist)
    .x(d3.scaleLinear().domain([0, 10]))
    .elasticY(true)
    .controlsUseVisibility(true);

spendHistChart.xAxis().tickFormat(function (d) { return d * 10 }); // convert back to base unit
spendHistChart.yAxis().ticks(2);

spenderRowChart
    .dimension(SeasonDim)
    .group(ptPerSeason)
    .elasticX(true)
    .controlsUseVisibility(true);

function show_empty_message(chart) {
    var is_empty = d3.sum(chart.group().all().map(chart.valueAccessor())) === 0;
    var data = is_empty ? [1] : [];
    var empty = chart.svg().selectAll('.empty-message').data(data);
    empty.exit().remove();
    empty = empty
        .enter()
        .append('text')
        .text('NO DATA!')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('class', 'empty-message')
        .attr('x', chart.margins().left + chart.effectiveWidth() / 2)
        .attr('y', chart.margins().top + chart.effectiveHeight() / 2)
        .style('opacity', 0)
        .merge(empty);
    empty.transition().duration(1000).style('opacity', 1);
}

spendHistChart.on('pretransition', show_empty_message);
spenderRowChart.on('pretransition', show_empty_message);

dc.renderAll();

function getData() {
    $.ajax({
        data: { csrfmiddlewaretoken: getCookie('csrftoken') },
        url: "",
        type: 'post',
        success: function (response) {
            spendData = response.data;
            resetData(ndx, [TeamDim, ptDim, HomeAwayDim, SeasonDim]);
            ndx.add(spendData);
            dc.redrawAll();
        }
    });
}
