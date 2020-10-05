// import {Bar} from 'react-chartjs-2.min';
class Chart extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
        };

        // this.getMap = this.getMap.bind(this);
    }

  render() {
    return (
      <div className="Chart">
          {/*<Bar/>*/}
      </div>
    );
  }
}


class DataHistoryTable extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
            datahistory:[],
            country:0,
            seasons:[],
            leagues:[],
            dates:[],
            teams:[],
        };

      }


      componentWillReceiveProps(nextProps) {

          this.setState({
            isShowRank:nextProps.showRank,
            isShowOdd:nextProps.showOdd,
            isShowTruepoints:nextProps.showTruepoint,

          });
        }
      componentDidMount(props) {
            fetch('http://localhost:8000/api/standings/')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    datahistory: data.data_historymatches,
                    country: data.user_country,
                    seasons:data.data_seasons,
                    dates:data.data_date,
                    leagues:data.data_leagues,
                    teams:data.data_teams,
                })
                console.log(data.data_historymatches)
            })
            .catch(console.log)
          }

    render(){
        let datahistory = this.state.datahistory
        let datastandings = this.state.datastandings
        let standing_show_details = this.state.standing_show_details
        let isShowRank = this.state.isShowRank
        let isShowOdd = this.state.isShowOdd
        let isShowTruepoints = this.state.isShowTruepoints
        let country = this.state.country
        let seasons = this.state.seasons
        let leagues = this.state.leagues
        let dates = this.state.dates
        let teams = this.state.teams
        return(
            <div className="row">
                    <table className="table table-bordered mt10">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Season</th>
                            <th scope="col">League</th>
                            <th scope="col">Date</th>
                            <th scope="col">HTeam</th>
                            <th scope="col">ATeam</th>
                            <th scope="col">HGoal</th>
                            <th scope="col">AGoal</th>
                            {
                                isShowRank && <th scope="col">HRank</th>
                            }
                            {
                                isShowRank && <th scope="col">ARank</th>
                            }


                            {
                                isShowOdd && <th scope="col">OddsFinal</th>
                            }

                            {
                                isShowTruepoints && <th scope="col">HTruePoints</th>
                            }

                            {
                                isShowTruepoints && <th scope="col">ATruePoints</th>
                            }

                        </tr>
                        </thead>
                        <tbody>
                        {
                            datahistory.map(function (data, i) {
                              if(data.completed == 1){
                                 return <tr>
                                        <th key={data.id} scope="col">{data.id}</th>
                                        <th key={data.sid} scope="col">{seasons.map(function(e){if(e.id == data.sid){return e.name}})}</th>
                                        <th key={data.gid} scope="col">{leagues.map(function(e){if(e.id == data.gid){return e.name}})}</th>
                                        <th key={data.did} scope="col">{dates.map(function(e){if(e.id == data.did){return e.name}})}</th>
                                        <th key={data.loid} scope="col">{teams.map(function(e){if(e.id == data.loid){return e.name}})}</th>
                                        <th key={data.viid} scope="col">{teams.map(function(e){if(e.id == data.viid){return e.name}})}</th>


                                        <th key={data.hgoal} scope="col">{data.hgoal}</th>
                                        <th key={data.agoal} scope="col">{data.agoal}</th>
                                        {
                                            isShowRank && <th key={data.hrank} scope="col">{data.hrank}</th>
                                        }

                                        {
                                            isShowRank && <th key={data.arank} scope="col">{data.arank}</th>
                                        }
                                        {
                                            isShowOdd && <th key={data.oddsfinal} scope="col">{data.oddsfinal}</th>
                                        }

                                        {
                                            isShowTruepoints && <th key={data.htruepoints} scope="col">{data.htruepoints}</th>
                                        }

                                        {
                                            isShowTruepoints && <th key={data.atruepoints} scope="col">{data.atruepoints}</th>
                                        }
                                    </tr>
                              }

                           })
                        }
                        </tbody>
                    </table>
            </div>

        )
    }
}

class DataStandingsDetailsTable extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
            datastandings:[],
            seasons:[],
            leagues:[],
            dates:[],
            teams:[]
        };

      }
      componentDidMount() {
            fetch('http://localhost:8000/api/standings/')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    datastandings: data.data_standings,
                    country:data.user_country,
                    seasons:data.data_seasons,
                    leagues:data.data_leagues,
                    dates:data.data_date,
                    teams:data.data_teams,
                })

            })
            .catch(console.log)
          }

    render(){
        let datahistory = this.state.datahistory
        let datastandings = this.state.datastandings
        let standing_show_details = this.state.standing_show_details
        let last_matches_num=this.props.last_matches_num
        let country = this.state.country
        let seasons = this.state.seasons
        let leagues = this.state.leagues
        let dates = this.state.dates
        let teams = this.state.teams
        return(
                <div className="row">
                    <table className="table table-bordered mt10">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Season</th>
                            <th scope="col">League</th>
                            <th scope="col">Date</th>
                            <th scope="col">Team</th>
                            <th scope="col">M</th>
                            <th scope="col">Mh</th>
                            <th scope="col">Wh</th>
                            <th scope="col">Dh</th>
                            <th scope="col">Lh</th>
                            <th scope="col">Gh+</th>
                            <th scope="col">Gh-</th>
                            <th scope="col">Ph</th>
                            <th scope="col">Ma</th>
                            <th scope="col">Wa</th>
                            <th scope="col">Da</th>
                            <th scope="col">La</th>
                            <th scope="col">Ga+</th>
                            <th scope="col">Ga-</th>
                            <th scope="col">Pa</th>
                            <th scope="col">P</th>
                            <th scope="col">GD</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            datastandings.map(function (data, i) {
                                if(last_matches_num == data.reverseseq){
                                    if(data.id == country){
                                    return <tr>
                                        <th key={data.id} scope="col">{data.id}</th>
                                        <th key={data.sid} scope="col">{seasons.map(function(e){if(e.id == data.sid){return e.name}})}</th>
                                        <th key={data.gid} scope="col">{leagues.map(function(e){if(e.id == data.gid){return e.name}})}</th>
                                        <th key={data.did} scope="col">{dates.map(function(e){if(e.id == data.did){return e.name}})}</th>
                                        <th key={data.loid} scope="col">{teams.map(function(e){if(e.id == data.loid){return e.name}})}</th>
                                        <th key={data.mtotal} scope="col">{data.mtotal}</th>
                                        <th key={data.mhome} scope="col">{data.mhome}</th>
                                        <th key={data.mhwon} scope="col">{data.mhwon}</th>
                                        <th key={data.mhdraw} scope="col">{data.mhdraw}</th>
                                        <th key={data.mhlost} scope="col">{data.mhlost}</th>
                                        <th key={data.gth} scope="col">{data.gth}</th>
                                        <th key={data.goh} scope="col">{data.goh}</th>
                                        <th key={data.phome} scope="col">{data.phome}</th>
                                        <th key={data.maway} scope="col">{data.maway}</th>
                                        <th key={data.mawon} scope="col">{data.mawon}</th>
                                        <th key={data.madraw} scope="col">{data.madraw}</th>
                                        <th key={data.malost} scope="col">{data.malost}</th>
                                        <th key={data.gta} scope="col">{data.gta}</th>
                                        <th key={data.goa} scope="col">{data.goa}</th>
                                        <th key={data.paway} scope="col">{data.paway}</th>
                                        <th key={data.ptotal} scope="col">{data.ptotal}</th>
                                        <th key={data.gdtotal} scope="col">{data.gdtotal}</th>
                                    </tr>
                                    }
                                }

                           })
                        }
                        </tbody>
                    </table>
                </div>
        )
    }
}

class DataStandingsShortTable extends React.Component{
      constructor(props) {
        super(props)
        this.state = {
            datastandings:[],
            teams:[],
            team_name:'',
        };
        this.teamclick=this.teamclick.bind()
      }
      componentDidMount() {
            fetch('http://localhost:8000/api/standings/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ datastandings: data.data_standings })
                this.setState({ teams: data.data_teams })
            })
            .catch(console.log)
          }
      teamclick(teamname, callback){
            alert(teamname)
          this.setState({team_name:teamname}, callback)

      }
    render(){
        let datastandings = this.state.datastandings
        let last_matches_num = this.props.last_matches_num
        let country = this.props.country
        console.log(country)
        let league = this.props.league
        let season = this.props.season
        let teams = this.state.teams
        let that = this
        return(
                <div className="row">
                    <table className="table table-bordered mt10">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Team</th>
                            <th scope="col">M</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">P</th>
                            <th scope="col">GD</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            datastandings.map(function (data, i) {
                              if(last_matches_num == data.reverseseq){
                                  if(data.id == country){

                                    return <tr>
                                        <th key={data.id} scope="col">{data.id}</th>
                                        <th key={data.loid_id} scope="col" onClick={() => that.teamclick(data.team)}>{teams.map(function(e){if(e.id == data.loid){return e.name}})}</th>
                                        <th key={data.mtotal} scope="col">{data.mtotal}</th>
                                        <th key={data.mhwon} scope="col">{data.mhwon + data.mawon}</th>
                                        <th key={data.mhdraw} scope="col">{data.mhdraw + data.madraw}</th>
                                        <th key={data.mhlost} scope="col">{data.mhlost + data.malost}</th>
                                        <th key={data.gth} scope="col">{data.gth - data.goh + data.gta - data.goa}</th>
                                        <th key={data.paway} scope="col">{data.phome + data.paway}</th>
                                    </tr>
                                  }
                              }
                           })
                        }
                        </tbody>
                    </table>
                </div>
        )
    }
}

class MapApp extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
        };
    }

  getMap() {
    var gdpData = {
      AF: 16.63,
      AL: 11.58,
      DZ: 158.97
    };

    jQuery(".world-map").vectorMap({
      map: 'world_mill',
        backgroundColor: '#ffffff',
        regionStyle: {
            initial: {
                fill: '#5490d2',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1
            },
            hover: {
                'fill-opacity': .8,
                cursor: 'pointer',
            }
        },
        series: {
          regions: [{
            scale: ['#ddddww'],
            normalizeFunction: 'polynomial',
            values: {
              "AG": 1.1,
              "AR": 351.02,
              "AU": 1219.72,
              "AT": 366.26,
            }
          }]
        },
        onRegionClick: function(event, code, region){
            // var map = $('.js-vector-map-world').vectorMap('get', 'mapObject');
            // $("select#country").val(code);
            // $("#country-select #close").click()
            // $(".modal-backdrop").remove()
            // BaseCompMapsVector.finish()
            // $('.jvectormap-tip').hide()
            // // alert(map.getRegionName(code));

        },
        markerStyle: {
          initial: { fill: '#F8E23B', stroke: '#383f47' }
        },
        markers: [
          {latLng: [40.372338, 49.85211], name: 'BAKU'},
          {latLng: [1.291432, 103.86391], name: 'MARINA BAY'},
          {latLng: [47.581711, 19.250611], name: 'HUNGARORING'}
        ],


    });
  }
  render() {
    return (
      <div className="MapApp">
          {this.getMap()}
      </div>
    );
  }
}


// class MainFilter extends React.Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//
//
//
//         };
//
//     }
//     componentDidMount() {
//         console.log(this.props.MainFilterHandler)
//         fetch('http://localhost:8000/api/standings/')
//         .then(res => res.json())
//         .then((data) => {
//
//         })
//         .catch(console.log)
//     }
//
//     getMap() {
//         var gdpData = {
//           AF: 16.63,
//           AL: 11.58,
//           DZ: 158.97
//           // ...
//         };
//
//         jQuery(".world-map").vectorMap({
//           map: 'world_mill',
//             backgroundColor: '#ffffff',
//             regionStyle: {
//                 initial: {
//                     fill: '#5490d2',
//                     'fill-opacity': 1,
//                     stroke: 'none',
//                     'stroke-width': 0,
//                     'stroke-opacity': 1
//                 },
//                 hover: {
//                     'fill-opacity': .8,
//                     cursor: 'pointer',
//
//                 }
//             },
//             series: {
//               regions: [{
//                 scale: ['#ddddww'],
//                 normalizeFunction: 'polynomial',
//                 values: {
//
//                   //"DZ": 158.97,
//                  // "AZ":1.1,
//                   "AG": 1.1,
//                  // "AE":7.54,
//                  // "AO":5.6,
//                   "AR": 351.02,
//                   //"AM":3.96,
//                   "AU": 1219.72,
//                   "AT": 366.26,
//                   //"AF":3.96,
//                  // "AL":3.96,
//                   //"BS": 7.54,
//
//
//                 }
//               }]
//             },
//             onRegionClick: function(event, code, region){
//                 // var map = $('.js-vector-map-world').vectorMap('get', 'mapObject');
//                 // $("select#country").val(code);
//                 // $("#country-select #close").click()
//                 // $(".modal-backdrop").remove()
//                 // BaseCompMapsVector.finish()
//                 // $('.jvectormap-tip').hide()
//                 // // alert(map.getRegionName(code));
//
//             },
//             markerStyle: {
//               initial: { fill: '#F8E23B', stroke: '#383f47' }
//             },
//             markers: [
//               {latLng: [40.372338, 49.85211], name: 'BAKU'},
//               {latLng: [1.291432, 103.86391], name: 'MARINA BAY'},
//               {latLng: [47.581711, 19.250611], name: 'HUNGARORING'}
//             ],
//
//
//         });
//       }
//
//     render(){
//
//         return(
//
//         )
//     }
// }
// import VectorMap from 'jquery-jvectormap.min';
// import {defaults, default, HorizontalBar, Chart, Line} from 'react-chartjs.min'
class Standings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isStandingDetails: false,
        isShowRank: false,
        isShowOdd:false,
        isShowTruepoints:false,
        last_matches:0,
        home:false,
        away:false,
        completed:false,
        fixtures:false,
    //    Mainfilter
        datacountries:[],
        dataleagues: [],
        dataseasons: [],
        country:0,
        country_cid:0,
        league:0,
        season:0,
        mapfire:false,
        showCountryModal:false,
        c_code:''
    };

    this.StandingDetails = this.StandingDetails.bind(this);
    this.ShowRank = this.ShowRank.bind(this);
    this.ShowOdd = this.ShowOdd.bind(this);
    this.ShowTruepoints = this.ShowTruepoints.bind(this);
    this.match_slider = this.match_slider.bind(this);
    this.home = this.home.bind(this);
    this.away = this.away.bind(this);
    this.completed = this.completed.bind(this);
    this.fixtures = this.fixtures.bind(this);
    this.shorttable = React.createRef();
    // this.MainFilterHandler = this.MainFilterHandler.bind(this);
  //  mainfilter
    this.countryfilter = this.countryfilter.bind(this);
    this.leaguefilter = this.leaguefilter.bind(this);
    this.seasonfilter = this.seasonfilter.bind(this);
    // this.renderModal = this.renderModal.bind(this);
    this.mapclick = this.mapclick.bind(this);
    this.MapModalClose = this.MapModalClose.bind(this);

  }

    componentDidMount() {
        let shorttable_state = this.shorttable.current;
        fetch('http://localhost:8000/api/standings/')
        .then(res => res.json())
        .then((data) => {
            console.log(data.data_leagues)
            console.log(data.user_country)
            console.log(data.data_countries)
            let user_country_id = data.user_country
            let user_country_cid
            let user_countries = data.data_countries
            user_countries.map(function(data){
                if(user_country_id == data.id){
                    user_country_cid = data.cid
                }
            })
            this.setState({
                datacountries: data.data_countries,
                dataleagues: data.data_leagues,
                dataseasons: data.data_seasons,
                country: user_country_id,
                country_cid: user_country_cid,
                mapfire: true

            })

        })
        .catch(console.log)
      }



    StandingDetails(e){
      this.setState({isStandingDetails: e.target.checked})
    }
    ShowRank(e){
      this.setState({isShowRank: e.target.checked})
    }
    ShowOdd(e){
      this.setState({isShowOdd: e.target.checked})
    }
    ShowTruepoints(e){
      this.setState({isShowTruepoints: e.target.checked})
    }
    match_slider(e){
      this.setState({last_matches: e.target.value})

    }
    home(e){
      this.setState({home:!this.state.home})
    }
    away(e){
      this.setState({away:!this.state.away})
    }
    completed(e){
      this.setState({completed:!this.state.completed})
    }
    fixtures(e){
      alert(this.state.fixtures)
    }
    //Map
    getMap() {
    let _this = this;
    jQuery(".world-map").vectorMap({
      map: 'world_mill',
        backgroundColor: '#ffffff',
        regionStyle: {
            initial: {
                fill: '#5490d2',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1
            },
            hover: {
                'fill-opacity': .8,
                cursor: 'pointer',
            }
        },
        series: {
          regions: [{
            scale: ['#ddddww'],
            normalizeFunction: 'polynomial',
            values: {
              "AG": 1.1,
              "AR": 351.02,
              "AU": 1219.72,
              "AT": 366.26,
            }
          }]
        },
        onRegionClick: function(event, code, region){

            // this.setState({c_code:code})
            // alert(this.state.c_code)
            // var map = $('.js-vector-map-world').vectorMap('get', 'mapObject');
            // $("select#country").val(code);
            // $("#country-select #close").click()
            // $(".modal-backdrop").remove()
            // BaseCompMapsVector.finish()
            // $('.jvectormap-tip').hide()
            // // alert(map.getRegionName(code));
            _this.setState({c_code:code})
            console.log(_this.state.c_code)

        },
        markerStyle: {
          initial: { fill: '#F8E23B', stroke: '#383f47' }
        },
        markers: [
          {latLng: [40.372338, 49.85211], name: 'BAKU'},
          {latLng: [1.291432, 103.86391], name: 'MARINA BAY'},
          {latLng: [47.581711, 19.250611], name: 'HUNGARORING'}
        ],
    });
    }
    //MainFilter
    countryfilter(e){
        alert(e.target.value)
        this.setState({country: e.target.value});
    }
    leaguefilter(e){
        this.setState({league: e.target.value});
    }
    seasonfilter(e){
        this.setState({season: e.target.value});
    }
    mapclick(e){
        alert(this.state.showCountryModal)
        // this.setState({mapfire:true});
        this.setState({showCountryModal:true});
    }
    MapModalClose(){
        this.setState({showCountryModal:false});
        // this.setState({mapfire:false});
        // jQuery('.world-map').children().remove()
    }

  render() {
    //  Mainfilter
        let data_countries = this.state.datacountries
        let data_leagues = this.state.dataleagues
        let data_seasons = this.state.dataseasons
        let selected_cid = this.state.country
        let selected_country_cid = this.state.country_cid
        let showCountryModal = this.state.showCountryModal
        console.log(selected_cid)
    return(
        <div>
            <div className="row">
                <div className="col-md-4">
                    <h5>Display Last Matches : </h5>
                    <br></br>
                        <div className="row">
                            <div className="slidecontainer">
                                <span className="font-weight-bold purple-text mr-2 mt-1">0</span>
                                <input className="lastmatchslider"
                                      id="last_matches"
                                      type="range"
                                      min="0" max="100"
                                      value={this.state.last_matches}
                                      onChange={this.match_slider}
                                      step="1"/>
                                    <span className="font-weight-bold purple-text ml-2 mt-1">100</span>
                                    <p>{this.state.last_matches}</p>
                            </div>
                        </div>
                </div>
                <div className="col-md-8">
                    <div className="row pt50">
                        <div className="col-md-1">
                            <div className="col-md-1">
                                <a onClick={this.mapclick}>Map
                                </a>
                                {
                                    showCountryModal == true ?
                                    (<div className="modal show">
                                        <div className="modal-dialog" style={{width:"800px"}}>
                                            <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-hidden="true" onClick={this.MapModalClose}>&times;</button>
                                                        <h4 className="modal-title text-center">Please select Country</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="block">
                                                                        <div className="world-map"
                                                                             style={{height: "360px", width:"700px"}}></div>
                                                                        <MapApp/>
                                                                        {/*// <VectorMap*/}
                                                                        {/*//     map={"world_mill"}*/}
                                                                        {/*//     backgroundColor="#FFFFF"*/}
                                                                        {/*//     markerStyle={{*/}
                                                                        {/*//       initial: {*/}
                                                                        {/*//         fill: "#FFFF",*/}
                                                                        {/*//         stroke: "#383f47"*/}
                                                                        {/*//       }*/}
                                                                            {/*}}*/}
                                                                            {/*series={{*/}
                                                                              {/*markers: [*/}
                                                                                {/*{*/}
                                                                                  {/*attribute: "r",*/}
                                                                                  {/*scale: [5, 20],*/}
                                                                                  {/*values: [60, 6, 54],*/}
                                                                                  {/*normalizeFunction: "polynomial"*/}
                                                                                {/*}*/}
                                                                              {/*]*/}
                                                                            {/*}}*/}
                                                                            {/*regionStyle={{*/}
                                                                              {/*initial: {*/}
                                                                                {/*fill: "#128da7"*/}
                                                                              {/*},*/}
                                                                              {/*hover: {*/}
                                                                                {/*fill: "#A0D1DC"*/}
                                                                              {/*}*/}
                                                                            {/*}}*/}
                                                                            {/*ref="map"*/}
                                                                            {/*containerStyle={{*/}
                                                                              {/*width: "100%",*/}
                                                                              {/*height: "100%"*/}
                                                                            {/*}}*/}
                                                                            {/*containerClassName="map"*/}
                                                                          {/*/>*/}
                                                                        {this.state.mapfire == true ? this.getMap() : null}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" id="close" className="btn btn-primary text-uppercase"
                                                                onClick={this.MapModalClose}>Back
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>)
                                    :null
                                }
                            </div>
                        </div>
                        <div className="col-md-11">
                            <div className="row">
                                <div className="col-md-4 pl0 pr0">
                                    <select id="country" name="country" className="mx-w100 pl0 pr0 matchfilterselect" value={this.state.country} onChange={this.countryfilter}>
                                        <option value="country">Country</option>
                                        {
                                            data_countries.map(function (data, i) {

                                                return <option value={data.id} >{data.name}</option>

                                           })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4 pl0 pr0">
                                    <select name="League" className="mx-w100 pl0 pr0 matchfilterselect" onChange={this.leaguefilter} value={this.state.league}>
                                        <option value="league">League</option>
                                        {
                                            data_leagues.map(function (data, i) {
                                                // if(selected_cid=='country'){
                                                //     return <option value={data.gid}>{data.name}</option>
                                                // }else{
                                                    if(selected_country_cid == data.cid){
                                                    return <option value={data.gid}>{data.name}</option>
                                                    }
                                                // }
                                           })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4 pl0 pr0">
                                    <select name="season" className="mx-w100 pl0 pr0 matchfilterselect" onChange={this.seasonfilter} value={this.state.season}>
                                        <option value="season">Season</option>
                                        {
                                            data_seasons.map(function (data, i) {
                                              return <option value={data.id}>{data.name}</option>
                                           })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Chart/>
                </div>
            </div>

            <div className="row">
                <div className="row">
                    Show Details: <input
                                type="checkbox"
                                checked={this.state.isStandingDetails}
                                ref="complete"
                                onChange={this.StandingDetails}
                              />

                            {this.state.isStandingDetails
                                ? <DataStandingsDetailsTable last_matches_num={this.state.last_matches}/>
                                : <DataStandingsShortTable
                                    last_matches_num = {this.state.last_matches}
                                    country = {this.state.country}
                                    league = {this.state.league}
                                    season = {this.state.season}
                                />
                              }

                </div>
                 <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-3">
                        <div className="row">
                            <button className="btn btn-primary" onClick={this.home} style={{width:"90%"}}>Home</button>
                        </div>
                        <div className="row pt10">
                            <button className="btn btn-primary" onClick={this.away} style={{width:"90%"}}>Away</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <button className="btn btn-primary" onClick={this.completed} style={{width:"90%"}}>Completed</button>
                        </div>
                        <div className="row pt10">
                            <button className="btn btn-primary" onClick={this.fixtures} style={{width:"90%"}}>Fixtures</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                        Show Ranks : <input
                            type="checkbox"
                            checked={this.state.isShowRank}
                            ref="complete"
                            onChange={this.ShowRank}
                          />

                        Show Odds : <input
                            type="checkbox"
                            checked={this.state.isShowOdd}
                            ref="complete"
                            onChange={this.ShowOdd}
                          />

                        Show TruePoints : <input
                            type="checkbox"
                            checked={this.state.isShowTruepoints}
                            ref="complete"
                            onChange={this.ShowTruepoints}
                          />
                          <DataHistoryTable
                              showRank={this.state.isShowRank}
                              showOdd={this.state.isShowOdd}
                              showTruepoint={this.state.isShowTruepoints}/>
                </div>
            </div>
        </div>
    )
  }
}

ReactDOM.render(<Standings />, document.getElementById("standings"))