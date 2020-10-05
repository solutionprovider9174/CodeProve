    var teampieChart =  dc.pieChart('#teampie');
    var hapieChart =  dc.pieChart('#hapie');
    var completedrowChart =  dc.rowChart('#completedrow');
    var leaguerowChart =  dc.rowChart('#leaguerow');
    var dataTable = dc.dataTable("#dc-table");

    spendData = [];


 //   spendData = [
//{"Dim_Team": "Arsenal", "Fct_pt": 72, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 69, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 68, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 68, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 65, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 62, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 61, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 58, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 55, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 52, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 49, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 46, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 45, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 44, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 43, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 42, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 41, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 38, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 35, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 32, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 31, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 30, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 29, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 26, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 23, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 20, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 20, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 19, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 16, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 13, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 12, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 12, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 9, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 6, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 3, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "England"}, {"Dim_Team": "Arsenal", "Fct_pt": 3, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "England"}, {"Dim_Team": "Barcelona", "Fct_pt": 87, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 86, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 85, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 82, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 81, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Home", "Dim_Country": "Spain"}, {"Dim_Team": "Barcelona", "Fct_pt": 78, "Fct_cnt": 1, "Dim_Season": "200809", "Dim_HA": "Away", "Dim_Country": "Spain"}
// ];

getData();

function resetData(ndx, statesJson) {
    ndx.remove(() => true);
}


    // set crossfilter
    var ndx = crossfilter(spendData)

    var LeagueDim = ndx.dimension(function (d) { return d.Dim_League; });
    var TeamDim = ndx.dimension(function (d) { return d.Dim_Team; });
    var SeasonDim = ndx.dimension(function (d) { return d.Dim_Season; });
    var HaDim = ndx.dimension(function (d) { return d.Dim_HA; });
    var CompletedDim = ndx.dimension(function (d) { return d.Dim_Completed; });

    var LeagueDimGroup = LeagueDim.group().reduceCount();
    var TeamDimGroup = TeamDim.group().reduceCount();
    var SeasonDimGroup = SeasonDim.group().reduceCount();
    var HaDimGroup = HaDim.group().reduceCount();
    var CompletedDimGroup = CompletedDim.group().reduceCount();


    hapieChart
        .width(200)
        .height(200)
        .dimension(HaDim)
        .group(HaDimGroup)
        .controlsUseVisibility(true);

    completedrowChart
        .width(500)
        .height(200)
        .dimension(CompletedDim)
        .group(CompletedDimGroup)
        .elasticX(true)
        .controlsUseVisibility(true);

    teampieChart
        .width(200)
        .height(200)
        .dimension(TeamDim)
        .group(TeamDimGroup)
        .controlsUseVisibility(true);


    leaguerowChart
        .width(500)
        .height(500)
        .dimension(LeagueDim)
        .group(LeagueDimGroup)
        .elasticX(true)
        .controlsUseVisibility(true);

    dataTable
        .width(960)
        .height(800)
        .dimension(TeamDim)
	    .group(function(d) { return d.Fct_pt; })
	    .size(20)
        .columns(['Team', 'Points'])
        .sortBy(function(d){ return d.Fct_pt; })
        .order(d3.ascending);


    dc.renderAll();


function getData() {
    $.ajax({
        data: { csrfmiddlewaretoken: getCookie('csrftoken') },
        url: "",
        type: 'post',
        success: function (response) {
            spendData = response.data;
            resetData(ndx, [LeagueDim, TeamDim, SeasonDim, HaDim, CompletedDim]);
            ndx.add(spendData);
            dc.redrawAll();
        }
    });
}