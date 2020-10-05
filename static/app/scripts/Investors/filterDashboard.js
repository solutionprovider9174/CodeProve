    var lengthpieChart =  dc.pieChart('#lengthpie');
    var typerowChart =  dc.rowChart('#typerow');
    var daterowChart =  dc.rowChart('#daterow');
    var countChart = dc.dataCount("#allrecs");
    var subtableChart = dc.dataTable("#subtable");

    spendData = [];


 //   spendData = [
//{"Dim_Team": "Arsenal", "Fct_pt": 72, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 69, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 68, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 68, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 65, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 62, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 61, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 58, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 55, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 52, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 49, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 46, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 45, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 44, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 43, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 42, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 41, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 38, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 35, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 32, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 31, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 30, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 29, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 26, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 20, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 20, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 19, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 16, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 13, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 12, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 12, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 9, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 6, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 3, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 3, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Barcelona", "Fct_pt": 87, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 85, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 82, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 81, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 78, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}
// ];

getData();

function resetData(ndx) {
    ndx.remove(() => true);
}


    // set crossfilter
    var ndx = crossfilter(spendData)

    var TypeDim = ndx.dimension(function (d) { return d.Subscription; });
    var TypeDimDummy = ndx.dimension(function(d) { return d.Subscription; });   // Dummy filter dimension

    var LengthDim = ndx.dimension(function (d) { return d.Duration; });
    var DateDim = ndx.dimension(function (d) { return d.SignUp; });

    var TypeDimGroup = TypeDim.group().reduceCount();
    var LengthDimGroup = LengthDim.group().reduceCount();
    var DateDimGroup = DateDim.group().reduceCount();


// Pagination vars;  use odd page size to show the effect better
    var ofs = 0, pag = 10;

// Default filter
//    TypeDim.filter("Gold");
//    TypeDimDummy.filter("Gold");


// Charts

    countChart
        .dimension(ndx)
        .group(ndx.groupAll());


    lengthpieChart
        .width(200)
        .height(200)
        .dimension(LengthDim)
        .group(LengthDimGroup)
        .controlsUseVisibility(true);


    typerowChart
        .width(500)
        .height(200)
        .dimension(TypeDim)
        .group(TypeDimGroup)
        .elasticX(true)
        .controlsUseVisibility(true);


    daterowChart
        .width(500)
        .height(200)
        .dimension(DateDim)
        .group(DateDimGroup)
        .elasticX(true)
        .title("Acquisition date")
        .controlsUseVisibility(true);

    subtableChart
        .dimension(TypeDimDummy)
        .size(Infinity)
        .showSections(false)
        .columns(['Subscription', 'Duration', 'SignUp'])
        .sortBy(function (d) {return d.value
             })
        .order(d3.ascending)
        .on('preRender', update_offset);



        dc.renderAll();


// Functions

function getData() {
    $.ajax({
        data: { csrfmiddlewaretoken: getCookie('csrftoken') },
        url: "",
        type: 'post',
        success: function (response) {
            spendData = response.data;
            resetData(ndx, [LengthDim, TypeDim, TypeDimDummy, DateDim]);
            ndx.add(spendData);
            dc.redrawAll();
        }
    });
}

function update_offset() {
    var totFilteredRecs = ndx.groupAll().value();
    var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
    ofs = ofs >= totFilteredRecs ? Math.floor((totFilteredRecs - 1) / pag) * pag : ofs;
    ofs = ofs < 0 ? 0 : ofs;


    subtableChart.beginSlice(ofs);
    subtableChart.endSlice(ofs+pag);

}


function display() {
    var totFilteredRecs = ndx.groupAll().value();
    var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
    d3.select('#begin')
        .text(end === 0? ofs : ofs + 1);
    d3.select('#end')
        .text(end);
    d3.select('#last')
        .attr('disabled', ofs-pag<0 ? 'true' : null);
    d3.select('#next')
        .attr('disabled', ofs+pag>=totFilteredRecs ? 'true' : null);
    d3.select('#size').text(totFilteredRecs);
    if(totFilteredRecs != ndx.size()){
      d3.select('#totalsize').text("(filtered Total: " + ndx.size() + " )");
    }else{
      d3.select('#totalsize').text('');
    }

}


function next() {
    ofs += pag;
    update_offset();
    display();
    subtableChart.redraw();
}


function last() {
    ofs -= pag;
    update_offset();
    display();
    subtableChart.redraw();
}