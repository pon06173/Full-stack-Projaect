var context = document
    .getElementById('myChart')
    .getContext('2d');

var context2 = document
    .getElementById('myChart2')
    .getContext('2d');

var context3 = document
    .getElementById('myChart3')
    .getContext('2d');

var context4 = document
    .getElementById('myChart4')
    .getContext('2d');

var context5 = document
    .getElementById('myChart5')
    .getContext('2d'); 
    
var context6 = document
    .getElementById('myChart6')
    .getContext('2d');  

var context7 = document
    .getElementById('myChart7')
    .getContext('2d');

var context8 = document
    .getElementById('myChart8')
    .getContext('2d');

var context9 = document
    .getElementById('myChart9')
    .getContext('2d');

var context10 = document
    .getElementById('myChart10')
    .getContext('2d');


function getGraphData(year, typeIdx) {
    let resultData;
    $.ajax({url: "http://localhost/apis/count/year_and_type_accident.do?year=" + year + "&type=" + typeIdx,
        type: "GET",
        async: false,
        origin: "http://127.0.0.1:3000",
        success: function(result) {
            resultData = result;
            console.log(result);
        },
        error: function(e) {
            console.log(e);
        }
    });
    return resultData;
}
let data2012_1 = getGraphData(2012, 1);
let data2013_1 = getGraphData(2013, 1);
let data2014_1 = getGraphData(2014, 1);
let data2015_1 = getGraphData(2015, 1);
let data2016_1 = getGraphData(2016, 1);
let data2017_1 = getGraphData(2017, 1);
let data2018_1 = getGraphData(2018, 1);
let data2019_1 = getGraphData(2019, 1);
let data2020_1 = getGraphData(2020, 1);

let data2012_2 = getGraphData(2012, 2);
let data2013_2 = getGraphData(2013, 2);
let data2014_2 = getGraphData(2014, 2);
let data2015_2 = getGraphData(2015, 2);
let data2016_2 = getGraphData(2016, 2);
let data2017_2 = getGraphData(2017, 2);
let data2018_2 = getGraphData(2018, 2);
let data2019_2 = getGraphData(2019, 2);
let data2020_2 = getGraphData(2020, 2);

let data2012_4 = getGraphData(2012, 4);
let data2013_4 = getGraphData(2013, 4);
let data2014_4 = getGraphData(2014, 4);
let data2015_4 = getGraphData(2015, 4);
let data2016_4 = getGraphData(2016, 4);
let data2017_4 = getGraphData(2017, 4);
let data2018_4 = getGraphData(2018, 4);
let data2019_4 = getGraphData(2019, 4);
let data2020_4 = getGraphData(2020, 4);

let data2012_5 = getGraphData(2012, 5);
let data2013_5 = getGraphData(2013, 5);
let data2014_5 = getGraphData(2014, 5);
let data2015_5 = getGraphData(2015, 5);
let data2016_5 = getGraphData(2016, 5);
let data2017_5 = getGraphData(2017, 5);
let data2018_5 = getGraphData(2018, 5);
let data2019_5 = getGraphData(2019, 5);
let data2020_5 = getGraphData(2020, 5);

let data2012_6 = getGraphData(2012, 6);
let data2013_6 = getGraphData(2013, 6);
let data2014_6 = getGraphData(2014, 6);
let data2015_6 = getGraphData(2015, 6);
let data2016_6 = getGraphData(2016, 6);
let data2017_6 = getGraphData(2017, 6);
let data2018_6 = getGraphData(2018, 6);
let data2019_6 = getGraphData(2019, 6);
let data2020_6 = getGraphData(2020, 6);

let data2012_7 = getGraphData(2012, 7);
let data2013_7 = getGraphData(2013, 7);
let data2014_7 = getGraphData(2014, 7);
let data2015_7 = getGraphData(2015, 7);
let data2016_7 = getGraphData(2016, 7);
let data2017_7 = getGraphData(2017, 7);
let data2018_7 = getGraphData(2018, 7);
let data2019_7 = getGraphData(2019, 7);
let data2020_7 = getGraphData(2020, 7);

let data2012_8 = getGraphData(2012, 8);
let data2013_8 = getGraphData(2013, 8);
let data2014_8 = getGraphData(2014, 8);
let data2015_8 = getGraphData(2015, 8);
let data2016_8 = getGraphData(2016, 8);
let data2017_8 = getGraphData(2017, 8);
let data2018_8 = getGraphData(2018, 8);
let data2019_8 = getGraphData(2019, 8);
let data2020_8 = getGraphData(2020, 8);
let data2021_8 = getGraphData(2021, 8);
let data2022_8 = getGraphData(2022, 8);

let dataOccurCnt1 = [data2012_1.accidentOccurCnt, data2013_1.accidentOccurCnt, data2014_1.accidentOccurCnt, data2015_1.accidentOccurCnt, data2016_1.accidentOccurCnt, data2017_1.accidentOccurCnt, data2018_1.accidentOccurCnt, data2019_1.accidentOccurCnt, data2020_1.accidentOccurCnt];
let dataCasltCnt1 = [data2012_1.accidentCasltCnt, data2013_1.accidentCasltCnt, data2014_1.accidentCasltCnt, data2015_1.accidentCasltCnt, data2016_1.accidentCasltCnt, data2017_1.accidentCasltCnt, data2018_1.accidentCasltCnt, data2019_1.accidentCasltCnt, data2020_1.accidentCasltCnt];
let dataDprCnt1 = [data2012_1.accidentDprCnt, data2013_1.accidentDprCnt, data2014_1.accidentDprCnt, data2015_1.accidentDprCnt, data2016_1.accidentDprCnt, data2017_1.accidentDprCnt, data2018_1.accidentDprCnt, data2019_1.accidentDprCnt, data2020_1.accidentDprCnt];
let dataSerinjuryCnt1 = [data2012_1.accidentSerinjuryCnt, data2013_1.accidentSerinjuryCnt, data2014_1.accidentSerinjuryCnt, data2015_1.accidentSerinjuryCnt, data2016_1.accidentSerinjuryCnt, data2017_1.accidentSerinjuryCnt, data2018_1.accidentSerinjuryCnt, data2019_1.accidentSerinjuryCnt, data2020_1.accidentSerinjuryCnt];
let dataSltinjuryCnt1 = [data2012_1.accidentSltinjuryCnt, data2013_1.accidentSltinjuryCnt, data2014_1.accidentSltinjuryCnt, data2015_1.accidentSltinjuryCnt, data2016_1.accidentSltinjuryCnt, data2017_1.accidentSltinjuryCnt, data2018_1.accidentSltinjuryCnt, data2019_1.accidentSltinjuryCnt, data2020_1.accidentSltinjuryCnt];
let dataInjuryCnt1 = [data2012_1.accidentInjuryCnt, data2013_1.accidentInjuryCnt, data2014_1.accidentInjuryCnt, data2015_1.accidentInjuryCnt, data2016_1.accidentInjuryCnt, data2017_1.accidentInjuryCnt, data2018_1.accidentInjuryCnt, data2019_1.accidentInjuryCnt, data2020_1.accidentInjuryCnt];

let dataOccurCnt2 = [data2012_2.accidentOccurCnt, data2013_2.accidentOccurCnt, data2014_2.accidentOccurCnt, data2015_2.accidentOccurCnt, data2016_2.accidentOccurCnt, data2017_2.accidentOccurCnt, data2018_2.accidentOccurCnt, data2019_2.accidentOccurCnt, data2020_2.accidentOccurCnt];
let dataCasltCnt2 = [data2012_1.accidentCasltCnt, data2013_2.accidentCasltCnt, data2014_2.accidentCasltCnt, data2015_2.accidentCasltCnt, data2016_2.accidentCasltCnt, data2017_2.accidentCasltCnt, data2018_2.accidentCasltCnt, data2019_2.accidentCasltCnt, data2020_2.accidentCasltCnt];
let dataDprCnt2 = [data2012_2.accidentDprCnt, data2013_2.accidentDprCnt, data2014_2.accidentDprCnt, data2015_2.accidentDprCnt, data2016_2.accidentDprCnt, data2017_2.accidentDprCnt, data2018_2.accidentDprCnt, data2019_2.accidentDprCnt, data2020_2.accidentDprCnt];
let dataSerinjuryCnt2 = [data2012_2.accidentSerinjuryCnt, data2013_2.accidentSerinjuryCnt, data2014_2.accidentSerinjuryCnt, data2015_2.accidentSerinjuryCnt, data2016_2.accidentSerinjuryCnt, data2017_2.accidentSerinjuryCnt, data2018_2.accidentSerinjuryCnt, data2019_2.accidentSerinjuryCnt, data2020_2.accidentSerinjuryCnt];
let dataSltinjuryCnt2 = [data2012_2.accidentSltinjuryCnt, data2013_2.accidentSltinjuryCnt, data2014_2.accidentSltinjuryCnt, data2015_2.accidentSltinjuryCnt, data2016_2.accidentSltinjuryCnt, data2017_2.accidentSltinjuryCnt, data2018_2.accidentSltinjuryCnt, data2019_2.accidentSltinjuryCnt, data2020_1.accidentSltinjuryCnt];
let dataInjuryCnt2 = [data2012_2.accidentInjuryCnt, data2013_2.accidentInjuryCnt, data2014_2.accidentInjuryCnt, data2015_2.accidentInjuryCnt, data2016_2.accidentInjuryCnt, data2017_2.accidentInjuryCnt, data2018_2.accidentInjuryCnt, data2019_2.accidentInjuryCnt, data2020_2.accidentInjuryCnt];

let dataOccurCnt4 = [data2012_4.accidentOccurCnt, data2013_4.accidentOccurCnt, data2014_4.accidentOccurCnt, data2015_4.accidentOccurCnt, data2016_4.accidentOccurCnt, data2017_4.accidentOccurCnt, data2018_4.accidentOccurCnt, data2019_4.accidentOccurCnt, data2020_4.accidentOccurCnt];
let dataCasltCnt4 = [data2012_4.accidentCasltCnt, data2013_4.accidentCasltCnt, data2014_4.accidentCasltCnt, data2015_4.accidentCasltCnt, data2016_4.accidentCasltCnt, data2017_4.accidentCasltCnt, data2018_4.accidentCasltCnt, data2019_4.accidentCasltCnt, data2020_4.accidentCasltCnt];
let dataDprCnt4 = [data2012_4.accidentDprCnt, data2013_4.accidentDprCnt, data2014_4.accidentDprCnt, data2015_4.accidentDprCnt, data2016_4.accidentDprCnt, data2017_4.accidentDprCnt, data2018_4.accidentDprCnt, data2019_4.accidentDprCnt, data2020_4.accidentDprCnt];
let dataSerinjuryCnt4 = [data2012_4.accidentSerinjuryCnt, data2013_4.accidentSerinjuryCnt, data2014_4.accidentSerinjuryCnt, data2015_4.accidentSerinjuryCnt, data2016_4.accidentSerinjuryCnt, data2017_4.accidentSerinjuryCnt, data2018_4.accidentSerinjuryCnt, data2019_4.accidentSerinjuryCnt, data2020_4.accidentSerinjuryCnt];
let dataSltinjuryCnt4 = [data2012_4.accidentSltinjuryCnt, data2013_4.accidentSltinjuryCnt, data2014_4.accidentSltinjuryCnt, data2015_4.accidentSltinjuryCnt, data2016_4.accidentSltinjuryCnt, data2017_4.accidentSltinjuryCnt, data2018_4.accidentSltinjuryCnt, data2019_4.accidentSltinjuryCnt, data2020_4.accidentSltinjuryCnt];
let dataInjuryCnt4 = [data2012_4.accidentInjuryCnt, data2013_4.accidentInjuryCnt, data2014_4.accidentInjuryCnt, data2015_4.accidentInjuryCnt, data2016_4.accidentInjuryCnt, data2017_4.accidentInjuryCnt, data2018_4.accidentInjuryCnt, data2019_4.accidentInjuryCnt, data2020_4.accidentInjuryCnt];

let dataOccurCnt5 = [data2012_5.accidentOccurCnt, data2013_5.accidentOccurCnt, data2014_5.accidentOccurCnt, data2015_5.accidentOccurCnt, data2016_5.accidentOccurCnt, data2017_5.accidentOccurCnt, data2018_5.accidentOccurCnt, data2019_5.accidentOccurCnt, data2020_5.accidentOccurCnt];
let dataCasltCnt5 = [data2012_5.accidentCasltCnt, data2013_5.accidentCasltCnt, data2014_5.accidentCasltCnt, data2015_5.accidentCasltCnt, data2016_5.accidentCasltCnt, data2017_5.accidentCasltCnt, data2018_5.accidentCasltCnt, data2019_5.accidentCasltCnt, data2020_5.accidentCasltCnt];
let dataDprCnt5 = [data2012_5.accidentDprCnt, data2013_5.accidentDprCnt, data2014_5.accidentDprCnt, data2015_5.accidentDprCnt, data2016_5.accidentDprCnt, data2017_5.accidentDprCnt, data2018_5.accidentDprCnt, data2019_5.accidentDprCnt, data2020_5.accidentDprCnt];
let dataSerinjuryCnt5 = [data2012_5.accidentSerinjuryCnt, data2013_5.accidentSerinjuryCnt, data2014_5.accidentSerinjuryCnt, data2015_5.accidentSerinjuryCnt, data2016_5.accidentSerinjuryCnt, data2017_5.accidentSerinjuryCnt, data2018_5.accidentSerinjuryCnt, data2019_5.accidentSerinjuryCnt, data2020_5.accidentSerinjuryCnt];
let dataSltinjuryCnt5 = [data2012_5.accidentSltinjuryCnt, data2013_5.accidentSltinjuryCnt, data2014_5.accidentSltinjuryCnt, data2015_5.accidentSltinjuryCnt, data2016_5.accidentSltinjuryCnt, data2017_5.accidentSltinjuryCnt, data2018_5.accidentSltinjuryCnt, data2019_5.accidentSltinjuryCnt, data2020_5.accidentSltinjuryCnt];
let dataInjuryCnt5 = [data2012_5.accidentInjuryCnt, data2013_5.accidentInjuryCnt, data2014_5.accidentInjuryCnt, data2015_5.accidentInjuryCnt, data2016_5.accidentInjuryCnt, data2017_5.accidentInjuryCnt, data2018_5.accidentInjuryCnt, data2019_5.accidentInjuryCnt, data2020_5.accidentInjuryCnt];

let dataOccurCnt6 = [data2012_6.accidentOccurCnt, data2013_6.accidentOccurCnt, data2014_6.accidentOccurCnt, data2015_6.accidentOccurCnt, data2016_6.accidentOccurCnt, data2017_6.accidentOccurCnt, data2018_6.accidentOccurCnt, data2019_6.accidentOccurCnt, data2020_6.accidentOccurCnt];
let dataCasltCnt6 = [data2012_6.accidentCasltCnt, data2013_6.accidentCasltCnt, data2014_6.accidentCasltCnt, data2015_6.accidentCasltCnt, data2016_6.accidentCasltCnt, data2017_6.accidentCasltCnt, data2018_6.accidentCasltCnt, data2019_6.accidentCasltCnt, data2020_6.accidentCasltCnt];
let dataDprCnt6 = [data2012_6.accidentDprCnt, data2013_6.accidentDprCnt, data2014_6.accidentDprCnt, data2015_6.accidentDprCnt, data2016_6.accidentDprCnt, data2017_6.accidentDprCnt, data2018_6.accidentDprCnt, data2019_6.accidentDprCnt, data2020_6.accidentDprCnt];
let dataSerinjuryCnt6 = [data2012_6.accidentSerinjuryCnt, data2013_6.accidentSerinjuryCnt, data2014_6.accidentSerinjuryCnt, data2015_6.accidentSerinjuryCnt, data2016_6.accidentSerinjuryCnt, data2017_6.accidentSerinjuryCnt, data2018_6.accidentSerinjuryCnt, data2019_6.accidentSerinjuryCnt, data2020_6.accidentSerinjuryCnt];
let dataSltinjuryCnt6 = [data2012_6.accidentSltinjuryCnt, data2013_6.accidentSltinjuryCnt, data2014_6.accidentSltinjuryCnt, data2015_6.accidentSltinjuryCnt, data2016_6.accidentSltinjuryCnt, data2017_6.accidentSltinjuryCnt, data2018_6.accidentSltinjuryCnt, data2019_6.accidentSltinjuryCnt, data2020_6.accidentSltinjuryCnt];
let dataInjuryCnt6 = [data2012_6.accidentInjuryCnt, data2013_6.accidentInjuryCnt, data2014_6.accidentInjuryCnt, data2015_6.accidentInjuryCnt, data2016_6.accidentInjuryCnt, data2017_6.accidentInjuryCnt, data2018_6.accidentInjuryCnt, data2019_6.accidentInjuryCnt, data2020_6.accidentInjuryCnt];

let dataOccurCnt7 = [data2012_7.accidentOccurCnt, data2013_7.accidentOccurCnt, data2014_7.accidentOccurCnt, data2015_7.accidentOccurCnt, data2016_7.accidentOccurCnt, data2017_7.accidentOccurCnt, data2018_7.accidentOccurCnt, data2019_7.accidentOccurCnt, data2020_7.accidentOccurCnt];
let dataCasltCnt7 = [data2012_7.accidentCasltCnt, data2013_7.accidentCasltCnt, data2014_7.accidentCasltCnt, data2015_7.accidentCasltCnt, data2016_7.accidentCasltCnt, data2017_7.accidentCasltCnt, data2018_7.accidentCasltCnt, data2019_7.accidentCasltCnt, data2020_7.accidentCasltCnt];
let dataDprCnt7 = [data2012_7.accidentDprCnt, data2013_7.accidentDprCnt, data2014_7.accidentDprCnt, data2015_7.accidentDprCnt, data2016_7.accidentDprCnt, data2017_7.accidentDprCnt, data2018_7.accidentDprCnt, data2019_7.accidentDprCnt, data2020_7.accidentDprCnt];
let dataSerinjuryCnt7 = [data2012_7.accidentSerinjuryCnt, data2013_7.accidentSerinjuryCnt, data2014_7.accidentSerinjuryCnt, data2015_7.accidentSerinjuryCnt, data2016_7.accidentSerinjuryCnt, data2017_7.accidentSerinjuryCnt, data2018_7.accidentSerinjuryCnt, data2019_7.accidentSerinjuryCnt, data2020_7.accidentSerinjuryCnt];
let dataSltinjuryCnt7 = [data2012_7.accidentSltinjuryCnt, data2013_7.accidentSltinjuryCnt, data2014_7.accidentSltinjuryCnt, data2015_7.accidentSltinjuryCnt, data2016_7.accidentSltinjuryCnt, data2017_7.accidentSltinjuryCnt, data2018_7.accidentSltinjuryCnt, data2019_7.accidentSltinjuryCnt, data2020_7.accidentSltinjuryCnt];
let dataInjuryCnt7 = [data2012_7.accidentInjuryCnt, data2013_7.accidentInjuryCnt, data2014_7.accidentInjuryCnt, data2015_7.accidentInjuryCnt, data2016_7.accidentInjuryCnt, data2017_7.accidentInjuryCnt, data2018_7.accidentInjuryCnt, data2019_7.accidentInjuryCnt, data2020_7.accidentInjuryCnt];

let dataOccurCnt8 = [data2021_8.accidentOccurCnt, data2022_8.accidentOccurCnt];
let dataCasltCnt8 = [data2021_8.accidentCasltCnt, data2022_8.accidentCasltCnt];
let dataDprCnt8 = [data2021_8.accidentDprCnt, data2022_8.accidentDprCnt];
let dataSerinjuryCnt8 = [data2021_8.accidentSerinjuryCnt, data2022_8.accidentSerinjuryCnt];
let dataSltinjuryCnt8 = [data2021_8.accidentSltinjuryCnt, data2022_8.accidentSltinjuryCnt];
let dataInjuryCnt8 = [data2021_8.accidentInjuryCnt, data2022_8.accidentInjuryCnt];

var backgroundColor = [
    'rgba(135, 207, 238)',
    'rgb(128, 242, 229)',
    'rgb(226, 167, 75)',
    'rgb(60, 185, 24)',
    'rgba(132, 9, 189)',
    'rgb(196, 104, 106)',
    'rgb(226, 82, 156)',
    'rgb(2, 89, 203)',
    'rgba(203, 242, 172)'
]

const myChartConfig = {
    type: 'line',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: '무단횡단',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt1,
                borderColor: backgroundColor[0],
                borderWidth: 1 // px
            },
            {
                label: '보행노인',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt2,
                borderColor: backgroundColor[1],
                borderWidth: 1 // px
            },
            {
                label: '보행어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt4,
                borderColor: backgroundColor[2],
                borderWidth: 1 // px
            },
            {
                label: '스쿨존어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt5,
                borderColor: backgroundColor[3],
                borderWidth: 1 // px
            },
            {
                label: '자전거',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt6,
                borderColor: backgroundColor[4],
                borderWidth: 1 // px
            },
            {
                label: '결빙',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt7,
                borderColor: backgroundColor[5],
                borderWidth: 1 // px
            },
            {
                label: '음주운전',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt8,
                borderColor: backgroundColor[6],
                borderWidth: 1 // px
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '발생 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '년도', // x축 설명
                        fontSize: 15
                    }
                }
            ]
        }
    }
};
var myChart = new Chart(context, myChartConfig);


const myChart2Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt1,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "무단횡단",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart2 = new Chart(context2, myChart2Config);

const myChart5Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt2,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            console.log(height);
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "보행노인",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart5 = new Chart(context5, myChart5Config);

const myChart6Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt4,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "보행어린이",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart6 = new Chart(context6, myChart6Config);

const myChart7Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt5,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2) - 1;
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "스쿨존어린이",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart7 = new Chart(context7, myChart7Config);

var myChart8Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt6,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "자전거",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart8 = new Chart(context8, myChart8Config);


const myChart9Config = {
    type: 'doughnut',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt7,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                    'rgb(226, 167, 75, 0.3)',
                    'rgb(60, 185, 24, 0.3)',
                    'rgba(132, 9, 189, 0.3)',
                    'rgb(196, 104, 106, 0.3)',
                    'rgb(226, 82, 156, 0.3)',
                    'rgb(2, 89, 203, 0.3)',
                    'rgba(203, 242, 172, 0.3)'
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "결빙",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart9 = new Chart(context9, myChart9Config);

const myChart10Config = {
    type: 'doughnut',
    data: {
        labels: ['2021','2022'],
        datasets: [
            {
                label: "사고 발생 수",
                data: dataOccurCnt8,
                backgroundColor: [
                    'rgba(135, 207, 238, 0.3)',
                    'rgb(128, 242, 229, 0.3)',
                ],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            display: false,
        },
        plugins: {
            labels: [
                //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                {
                    render: function(args) {
                        return args.percentage + '%';
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                },
                {
                    render: function(args) {
                        return args.label;
                    },
                    fontColor: 'black',
                    fontSize: 10,
                    precision: 2,
                    position: 'outside'
                }
            ],
        }
    },
    plugins: [{
        beforeDraw: (chart) => {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
            ctx.restore();
            var fontSize = (height / 228).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";
            var text = "음주운전",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
};
var myChart10 = new Chart(context10, myChart10Config);

var myChart3 = new Chart(context3, {
    type: 'bar',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: '무단횡단',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt1,
                borderColor: backgroundColor[0],
                borderWidth: 1 // px
            },
            {
                label: '보행노인',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt2,
                borderColor: backgroundColor[1],
                borderWidth: 1 // px
            },
            {
                label: '보행어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt4,
                borderColor: backgroundColor[2],
                borderWidth: 1 // px
            },
            {
                label: '스쿨존어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt5,
                borderColor: backgroundColor[3],
                borderWidth: 1 // px
            },
            {
                label: '자전거',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt6,
                borderColor: backgroundColor[4],
                borderWidth: 1 // px
            },
            {
                label: '결빙',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt7,
                borderColor: backgroundColor[5],
                borderWidth: 1 // px
            },
            {
                label: '음주운전',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt8,
                borderColor: backgroundColor[6],
                borderWidth: 1 // px
            }
        ]
    },
    options: {
        plugins: {
            labels: {
              render: () => {}
            }
        },
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '발생 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '년도', // x축 설명
                        fontSize: 15
                    }
                }
            ]
        }
    }
});

var myChart4 = new Chart(context4, {
    type: 'radar',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018','2019','2020'],
        datasets: [
            {
                label: '무단횡단',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt1,
                borderColor: backgroundColor[0],
                borderWidth: 1 // px
            },
            {
                label: '보행노인',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt2,
                borderColor: backgroundColor[1],
                borderWidth: 1 // px
            },
            {
                label: '보행어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt4,
                borderColor: backgroundColor[2],
                borderWidth: 1 // px
            },
            {
                label: '스쿨존어린이',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt5,
                borderColor: backgroundColor[3],
                borderWidth: 1 // px
            },
            {
                label: '자전거',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt6,
                borderColor: backgroundColor[4],
                borderWidth: 1 // px
            },
            {
                label: '결빙',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt7,
                borderColor: backgroundColor[5],
                borderWidth: 1 // px
            },
            {
                label: '음주운전',
                fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                data: dataOccurCnt8,
                borderColor: backgroundColor[6],
                borderWidth: 1 // px
            }
        ]
    },
});

function getGraphDataWithArea(year, typeIdx, area) {
    let resultData;
    $.ajax({url: "http://localhost/apis/count/year_and_type_accident_and_area.do?year=" + year + "&type=" + typeIdx + "&area=" + area,
        type: "GET",
        async: false,
        origin: "http://127.0.0.1:3000",
        success: function(result) {
            resultData = result;
            console.log(result);
        },
        error: function(e) {
            console.log(e);
        }
    });
    return resultData;
}
function setAreaGraphData(area){
    data2012_1 = getGraphDataWithArea(2012, 1, area);
    data2013_1 = getGraphDataWithArea(2013, 1, area);
    data2014_1 = getGraphDataWithArea(2014, 1, area);
    data2015_1 = getGraphDataWithArea(2015, 1, area);
    data2016_1 = getGraphDataWithArea(2016, 1, area);
    data2017_1 = getGraphDataWithArea(2017, 1, area);
    data2018_1 = getGraphDataWithArea(2018, 1, area);
    data2019_1 = getGraphDataWithArea(2019, 1, area);
    data2020_1 = getGraphDataWithArea(2020, 1, area);

    data2012_2 = getGraphDataWithArea(2012, 2, area);
    data2013_2 = getGraphDataWithArea(2013, 2, area);
    data2014_2 = getGraphDataWithArea(2014, 2, area);
    data2015_2 = getGraphDataWithArea(2015, 2, area);
    data2016_2 = getGraphDataWithArea(2016, 2, area);
    data2017_2 = getGraphDataWithArea(2017, 2, area);
    data2018_2 = getGraphDataWithArea(2018, 2, area);
    data2019_2 = getGraphDataWithArea(2019, 2, area);
    data2020_2 = getGraphDataWithArea(2020, 2, area);

    data2012_4 = getGraphDataWithArea(2012, 4, area);
    data2013_4 = getGraphDataWithArea(2013, 4, area);
    data2014_4 = getGraphDataWithArea(2014, 4, area);
    data2015_4 = getGraphDataWithArea(2015, 4, area);
    data2016_4 = getGraphDataWithArea(2016, 4, area);
    data2017_4 = getGraphDataWithArea(2017, 4, area);
    data2018_4 = getGraphDataWithArea(2018, 4, area);
    data2019_4 = getGraphDataWithArea(2019, 4, area);
    data2020_4 = getGraphDataWithArea(2020, 4, area);

    data2012_5 = getGraphDataWithArea(2012, 5, area);
    data2013_5 = getGraphDataWithArea(2013, 5, area);
    data2014_5 = getGraphDataWithArea(2014, 5, area);
    data2015_5 = getGraphDataWithArea(2015, 5, area);
    data2016_5 = getGraphDataWithArea(2016, 5, area);
    data2017_5 = getGraphDataWithArea(2017, 5, area);
    data2018_5 = getGraphDataWithArea(2018, 5, area);
    data2019_5 = getGraphDataWithArea(2019, 5, area);
    data2020_5 = getGraphDataWithArea(2020, 5, area);

    data2012_6 = getGraphDataWithArea(2012, 6, area);
    data2013_6 = getGraphDataWithArea(2013, 6, area);
    data2014_6 = getGraphDataWithArea(2014, 6, area);
    data2015_6 = getGraphDataWithArea(2015, 6, area);
    data2016_6 = getGraphDataWithArea(2016, 6, area);
    data2017_6 = getGraphDataWithArea(2017, 6, area);
    data2018_6 = getGraphDataWithArea(2018, 6, area);
    data2019_6 = getGraphDataWithArea(2019, 6, area);
    data2020_6 = getGraphDataWithArea(2020, 6, area);

    data2012_7 = getGraphDataWithArea(2012, 7, area);
    data2013_7 = getGraphDataWithArea(2013, 7, area);
    data2014_7 = getGraphDataWithArea(2014, 7, area);
    data2015_7 = getGraphDataWithArea(2015, 7, area);
    data2016_7 = getGraphDataWithArea(2016, 7, area);
    data2017_7 = getGraphDataWithArea(2017, 7, area);
    data2018_7 = getGraphDataWithArea(2018, 7, area);
    data2019_7 = getGraphDataWithArea(2019, 7, area);
    data2020_7 = getGraphDataWithArea(2020, 7, area);

    data2012_8 = getGraphDataWithArea(2012, 8, area);
    data2013_8 = getGraphDataWithArea(2013, 8, area);
    data2014_8 = getGraphDataWithArea(2014, 8, area);
    data2015_8 = getGraphDataWithArea(2015, 8, area);
    data2016_8 = getGraphDataWithArea(2016, 8, area);
    data2017_8 = getGraphDataWithArea(2017, 8, area);
    data2018_8 = getGraphDataWithArea(2018, 8, area);
    data2019_8 = getGraphDataWithArea(2019, 8, area);
    data2020_8 = getGraphDataWithArea(2020, 8, area);
    data2021_8 = getGraphDataWithArea(2021, 8, area);
    data2022_8 = getGraphDataWithArea(2022, 8, area);

    dataOccurCnt1 = [data2012_1.accidentOccurCnt, data2013_1.accidentOccurCnt, data2014_1.accidentOccurCnt, data2015_1.accidentOccurCnt, data2016_1.accidentOccurCnt, data2017_1.accidentOccurCnt, data2018_1.accidentOccurCnt, data2019_1.accidentOccurCnt, data2020_1.accidentOccurCnt];
    dataCasltCnt1 = [data2012_1.accidentCasltCnt, data2013_1.accidentCasltCnt, data2014_1.accidentCasltCnt, data2015_1.accidentCasltCnt, data2016_1.accidentCasltCnt, data2017_1.accidentCasltCnt, data2018_1.accidentCasltCnt, data2019_1.accidentCasltCnt, data2020_1.accidentCasltCnt];
    dataDprCnt1 = [data2012_1.accidentDprCnt, data2013_1.accidentDprCnt, data2014_1.accidentDprCnt, data2015_1.accidentDprCnt, data2016_1.accidentDprCnt, data2017_1.accidentDprCnt, data2018_1.accidentDprCnt, data2019_1.accidentDprCnt, data2020_1.accidentDprCnt];
    dataSerinjuryCnt1 = [data2012_1.accidentSerinjuryCnt, data2013_1.accidentSerinjuryCnt, data2014_1.accidentSerinjuryCnt, data2015_1.accidentSerinjuryCnt, data2016_1.accidentSerinjuryCnt, data2017_1.accidentSerinjuryCnt, data2018_1.accidentSerinjuryCnt, data2019_1.accidentSerinjuryCnt, data2020_1.accidentSerinjuryCnt];
    dataSltinjuryCnt1 = [data2012_1.accidentSltinjuryCnt, data2013_1.accidentSltinjuryCnt, data2014_1.accidentSltinjuryCnt, data2015_1.accidentSltinjuryCnt, data2016_1.accidentSltinjuryCnt, data2017_1.accidentSltinjuryCnt, data2018_1.accidentSltinjuryCnt, data2019_1.accidentSltinjuryCnt, data2020_1.accidentSltinjuryCnt];
    dataInjuryCnt1 = [data2012_1.accidentInjuryCnt, data2013_1.accidentInjuryCnt, data2014_1.accidentInjuryCnt, data2015_1.accidentInjuryCnt, data2016_1.accidentInjuryCnt, data2017_1.accidentInjuryCnt, data2018_1.accidentInjuryCnt, data2019_1.accidentInjuryCnt, data2020_1.accidentInjuryCnt];

    dataOccurCnt2 = [data2012_2.accidentOccurCnt, data2013_2.accidentOccurCnt, data2014_2.accidentOccurCnt, data2015_2.accidentOccurCnt, data2016_2.accidentOccurCnt, data2017_2.accidentOccurCnt, data2018_2.accidentOccurCnt, data2019_2.accidentOccurCnt, data2020_2.accidentOccurCnt];
    dataCasltCnt2 = [data2012_1.accidentCasltCnt, data2013_2.accidentCasltCnt, data2014_2.accidentCasltCnt, data2015_2.accidentCasltCnt, data2016_2.accidentCasltCnt, data2017_2.accidentCasltCnt, data2018_2.accidentCasltCnt, data2019_2.accidentCasltCnt, data2020_2.accidentCasltCnt];
    dataDprCnt2 = [data2012_2.accidentDprCnt, data2013_2.accidentDprCnt, data2014_2.accidentDprCnt, data2015_2.accidentDprCnt, data2016_2.accidentDprCnt, data2017_2.accidentDprCnt, data2018_2.accidentDprCnt, data2019_2.accidentDprCnt, data2020_2.accidentDprCnt];
    dataSerinjuryCnt2 = [data2012_2.accidentSerinjuryCnt, data2013_2.accidentSerinjuryCnt, data2014_2.accidentSerinjuryCnt, data2015_2.accidentSerinjuryCnt, data2016_2.accidentSerinjuryCnt, data2017_2.accidentSerinjuryCnt, data2018_2.accidentSerinjuryCnt, data2019_2.accidentSerinjuryCnt, data2020_2.accidentSerinjuryCnt];
    dataSltinjuryCnt2 = [data2012_2.accidentSltinjuryCnt, data2013_2.accidentSltinjuryCnt, data2014_2.accidentSltinjuryCnt, data2015_2.accidentSltinjuryCnt, data2016_2.accidentSltinjuryCnt, data2017_2.accidentSltinjuryCnt, data2018_2.accidentSltinjuryCnt, data2019_2.accidentSltinjuryCnt, data2020_1.accidentSltinjuryCnt];
    dataInjuryCnt2 = [data2012_2.accidentInjuryCnt, data2013_2.accidentInjuryCnt, data2014_2.accidentInjuryCnt, data2015_2.accidentInjuryCnt, data2016_2.accidentInjuryCnt, data2017_2.accidentInjuryCnt, data2018_2.accidentInjuryCnt, data2019_2.accidentInjuryCnt, data2020_2.accidentInjuryCnt];

    dataOccurCnt4 = [data2012_4.accidentOccurCnt, data2013_4.accidentOccurCnt, data2014_4.accidentOccurCnt, data2015_4.accidentOccurCnt, data2016_4.accidentOccurCnt, data2017_4.accidentOccurCnt, data2018_4.accidentOccurCnt, data2019_4.accidentOccurCnt, data2020_4.accidentOccurCnt];
    dataCasltCnt4 = [data2012_4.accidentCasltCnt, data2013_4.accidentCasltCnt, data2014_4.accidentCasltCnt, data2015_4.accidentCasltCnt, data2016_4.accidentCasltCnt, data2017_4.accidentCasltCnt, data2018_4.accidentCasltCnt, data2019_4.accidentCasltCnt, data2020_4.accidentCasltCnt];
    dataDprCnt4 = [data2012_4.accidentDprCnt, data2013_4.accidentDprCnt, data2014_4.accidentDprCnt, data2015_4.accidentDprCnt, data2016_4.accidentDprCnt, data2017_4.accidentDprCnt, data2018_4.accidentDprCnt, data2019_4.accidentDprCnt, data2020_4.accidentDprCnt];
    dataSerinjuryCnt4 = [data2012_4.accidentSerinjuryCnt, data2013_4.accidentSerinjuryCnt, data2014_4.accidentSerinjuryCnt, data2015_4.accidentSerinjuryCnt, data2016_4.accidentSerinjuryCnt, data2017_4.accidentSerinjuryCnt, data2018_4.accidentSerinjuryCnt, data2019_4.accidentSerinjuryCnt, data2020_4.accidentSerinjuryCnt];
    dataSltinjuryCnt4 = [data2012_4.accidentSltinjuryCnt, data2013_4.accidentSltinjuryCnt, data2014_4.accidentSltinjuryCnt, data2015_4.accidentSltinjuryCnt, data2016_4.accidentSltinjuryCnt, data2017_4.accidentSltinjuryCnt, data2018_4.accidentSltinjuryCnt, data2019_4.accidentSltinjuryCnt, data2020_4.accidentSltinjuryCnt];
    dataInjuryCnt4 = [data2012_4.accidentInjuryCnt, data2013_4.accidentInjuryCnt, data2014_4.accidentInjuryCnt, data2015_4.accidentInjuryCnt, data2016_4.accidentInjuryCnt, data2017_4.accidentInjuryCnt, data2018_4.accidentInjuryCnt, data2019_4.accidentInjuryCnt, data2020_4.accidentInjuryCnt];

    dataOccurCnt5 = [data2012_5.accidentOccurCnt, data2013_5.accidentOccurCnt, data2014_5.accidentOccurCnt, data2015_5.accidentOccurCnt, data2016_5.accidentOccurCnt, data2017_5.accidentOccurCnt, data2018_5.accidentOccurCnt, data2019_5.accidentOccurCnt, data2020_5.accidentOccurCnt];
    dataCasltCnt5 = [data2012_5.accidentCasltCnt, data2013_5.accidentCasltCnt, data2014_5.accidentCasltCnt, data2015_5.accidentCasltCnt, data2016_5.accidentCasltCnt, data2017_5.accidentCasltCnt, data2018_5.accidentCasltCnt, data2019_5.accidentCasltCnt, data2020_5.accidentCasltCnt];
    dataDprCnt5 = [data2012_5.accidentDprCnt, data2013_5.accidentDprCnt, data2014_5.accidentDprCnt, data2015_5.accidentDprCnt, data2016_5.accidentDprCnt, data2017_5.accidentDprCnt, data2018_5.accidentDprCnt, data2019_5.accidentDprCnt, data2020_5.accidentDprCnt];
    dataSerinjuryCnt5 = [data2012_5.accidentSerinjuryCnt, data2013_5.accidentSerinjuryCnt, data2014_5.accidentSerinjuryCnt, data2015_5.accidentSerinjuryCnt, data2016_5.accidentSerinjuryCnt, data2017_5.accidentSerinjuryCnt, data2018_5.accidentSerinjuryCnt, data2019_5.accidentSerinjuryCnt, data2020_5.accidentSerinjuryCnt];
    dataSltinjuryCnt5 = [data2012_5.accidentSltinjuryCnt, data2013_5.accidentSltinjuryCnt, data2014_5.accidentSltinjuryCnt, data2015_5.accidentSltinjuryCnt, data2016_5.accidentSltinjuryCnt, data2017_5.accidentSltinjuryCnt, data2018_5.accidentSltinjuryCnt, data2019_5.accidentSltinjuryCnt, data2020_5.accidentSltinjuryCnt];
    dataInjuryCnt5 = [data2012_5.accidentInjuryCnt, data2013_5.accidentInjuryCnt, data2014_5.accidentInjuryCnt, data2015_5.accidentInjuryCnt, data2016_5.accidentInjuryCnt, data2017_5.accidentInjuryCnt, data2018_5.accidentInjuryCnt, data2019_5.accidentInjuryCnt, data2020_5.accidentInjuryCnt];

    dataOccurCnt6 = [data2012_6.accidentOccurCnt, data2013_6.accidentOccurCnt, data2014_6.accidentOccurCnt, data2015_6.accidentOccurCnt, data2016_6.accidentOccurCnt, data2017_6.accidentOccurCnt, data2018_6.accidentOccurCnt, data2019_6.accidentOccurCnt, data2020_6.accidentOccurCnt];
    dataCasltCnt6 = [data2012_6.accidentCasltCnt, data2013_6.accidentCasltCnt, data2014_6.accidentCasltCnt, data2015_6.accidentCasltCnt, data2016_6.accidentCasltCnt, data2017_6.accidentCasltCnt, data2018_6.accidentCasltCnt, data2019_6.accidentCasltCnt, data2020_6.accidentCasltCnt];
    dataDprCnt6 = [data2012_6.accidentDprCnt, data2013_6.accidentDprCnt, data2014_6.accidentDprCnt, data2015_6.accidentDprCnt, data2016_6.accidentDprCnt, data2017_6.accidentDprCnt, data2018_6.accidentDprCnt, data2019_6.accidentDprCnt, data2020_6.accidentDprCnt];
    dataSerinjuryCnt6 = [data2012_6.accidentSerinjuryCnt, data2013_6.accidentSerinjuryCnt, data2014_6.accidentSerinjuryCnt, data2015_6.accidentSerinjuryCnt, data2016_6.accidentSerinjuryCnt, data2017_6.accidentSerinjuryCnt, data2018_6.accidentSerinjuryCnt, data2019_6.accidentSerinjuryCnt, data2020_6.accidentSerinjuryCnt];
    dataSltinjuryCnt6 = [data2012_6.accidentSltinjuryCnt, data2013_6.accidentSltinjuryCnt, data2014_6.accidentSltinjuryCnt, data2015_6.accidentSltinjuryCnt, data2016_6.accidentSltinjuryCnt, data2017_6.accidentSltinjuryCnt, data2018_6.accidentSltinjuryCnt, data2019_6.accidentSltinjuryCnt, data2020_6.accidentSltinjuryCnt];
    dataInjuryCnt6 = [data2012_6.accidentInjuryCnt, data2013_6.accidentInjuryCnt, data2014_6.accidentInjuryCnt, data2015_6.accidentInjuryCnt, data2016_6.accidentInjuryCnt, data2017_6.accidentInjuryCnt, data2018_6.accidentInjuryCnt, data2019_6.accidentInjuryCnt, data2020_6.accidentInjuryCnt];

    dataOccurCnt7 = [data2012_7.accidentOccurCnt, data2013_7.accidentOccurCnt, data2014_7.accidentOccurCnt, data2015_7.accidentOccurCnt, data2016_7.accidentOccurCnt, data2017_7.accidentOccurCnt, data2018_7.accidentOccurCnt, data2019_7.accidentOccurCnt, data2020_7.accidentOccurCnt];
    dataCasltCnt7 = [data2012_7.accidentCasltCnt, data2013_7.accidentCasltCnt, data2014_7.accidentCasltCnt, data2015_7.accidentCasltCnt, data2016_7.accidentCasltCnt, data2017_7.accidentCasltCnt, data2018_7.accidentCasltCnt, data2019_7.accidentCasltCnt, data2020_7.accidentCasltCnt];
    dataDprCnt7 = [data2012_7.accidentDprCnt, data2013_7.accidentDprCnt, data2014_7.accidentDprCnt, data2015_7.accidentDprCnt, data2016_7.accidentDprCnt, data2017_7.accidentDprCnt, data2018_7.accidentDprCnt, data2019_7.accidentDprCnt, data2020_7.accidentDprCnt];
    dataSerinjuryCnt7 = [data2012_7.accidentSerinjuryCnt, data2013_7.accidentSerinjuryCnt, data2014_7.accidentSerinjuryCnt, data2015_7.accidentSerinjuryCnt, data2016_7.accidentSerinjuryCnt, data2017_7.accidentSerinjuryCnt, data2018_7.accidentSerinjuryCnt, data2019_7.accidentSerinjuryCnt, data2020_7.accidentSerinjuryCnt];
    dataSltinjuryCnt7 = [data2012_7.accidentSltinjuryCnt, data2013_7.accidentSltinjuryCnt, data2014_7.accidentSltinjuryCnt, data2015_7.accidentSltinjuryCnt, data2016_7.accidentSltinjuryCnt, data2017_7.accidentSltinjuryCnt, data2018_7.accidentSltinjuryCnt, data2019_7.accidentSltinjuryCnt, data2020_7.accidentSltinjuryCnt];
    dataInjuryCnt7 = [data2012_7.accidentInjuryCnt, data2013_7.accidentInjuryCnt, data2014_7.accidentInjuryCnt, data2015_7.accidentInjuryCnt, data2016_7.accidentInjuryCnt, data2017_7.accidentInjuryCnt, data2018_7.accidentInjuryCnt, data2019_7.accidentInjuryCnt, data2020_7.accidentInjuryCnt];

    dataOccurCnt8 = [data2021_8.accidentOccurCnt, data2022_8.accidentOccurCnt];
    dataCasltCnt8 = [data2021_8.accidentCasltCnt, data2022_8.accidentCasltCnt];
    dataDprCnt8 = [data2021_8.accidentDprCnt, data2022_8.accidentDprCnt];
    dataSerinjuryCnt8 = [data2021_8.accidentSerinjuryCnt, data2022_8.accidentSerinjuryCnt];
    dataSltinjuryCnt8 = [data2021_8.accidentSltinjuryCnt, data2022_8.accidentSltinjuryCnt];
    dataInjuryCnt8 = [data2021_8.accidentInjuryCnt, data2022_8.accidentInjuryCnt];
    console.log(dataOccurCnt1);
    console.log(dataOccurCnt2);

    let dataset = [
        {
            label: '무단횡단',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt1,
            borderColor: backgroundColor[0],
            borderWidth: 1 // px
        },
        {
            label: '보행노인',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt2,
            borderColor: backgroundColor[1],
            borderWidth: 1 // px
        },
        {
            label: '보행어린이',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt4,
            borderColor: backgroundColor[2],
            borderWidth: 1 // px
        },
        {
            label: '스쿨존어린이',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt5,
            borderColor: backgroundColor[3],
            borderWidth: 1 // px
        },
        {
            label: '자전거',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt6,
            borderColor: backgroundColor[4],
            borderWidth: 1 // px
        },
        {
            label: '결빙',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt7,
            borderColor: backgroundColor[5],
            borderWidth: 1 // px
        },
        {
            label: '음주운전',
            fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
            data: dataOccurCnt8,
            borderColor: backgroundColor[6],
            borderWidth: 1 // px
        }
    ]
    let yAxes =[
        {
            scaleLabel: {
                display: true,
                labelString: '발생 수', // y축 설명
                fontSize: 15
            },
            ticks: {
                beginAtZero: true
            }
        }
    ]
    myChart.config.data.datasets = dataset; 
    myChart3.config.data.datasets = dataset; 
    myChart4.config.data.datasets = dataset; 
    myChart.options.scales.yAxes = yAxes;
    myChart3.options.scales.yAxes = yAxes;

    myChart2.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt1,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart5.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt2,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart6.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt4,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart7.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt5,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart8.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt6,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart9.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt7,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart10.config.data.datasets = [
        {
            label: "사고 발생 수",
            data: dataOccurCnt8,
            backgroundColor: [
                'rgba(135, 207, 238, 0.3)',
                'rgb(128, 242, 229, 0.3)',
                'rgb(226, 167, 75, 0.3)',
                'rgb(60, 185, 24, 0.3)',
                'rgba(132, 9, 189, 0.3)',
                'rgb(196, 104, 106, 0.3)',
                'rgb(226, 82, 156, 0.3)',
                'rgb(2, 89, 203, 0.3)',
                'rgba(203, 242, 172, 0.3)'
            ],
        }
    ];
    myChart.update();
    myChart3.update();
    myChart4.update();

    myChart2.update();
    myChart5.update();
    myChart6.update();
    myChart7.update();
    myChart8.update();
    myChart9.update();
    myChart10.update();
}
$(document).ready(function() {
    var datasets = myChart.config.data.datasets;
    var datasets3 = myChart3.config.data.datasets;
    var datasets4 = myChart4.config.data.datasets;


    $("#selectData").on("change", function() {
        console.log($("#selectData").val());
        console.log(dataCasltCnt1);

        if($("#selectData").val() == "castl"){
                let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataCasltCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '사상자 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset;
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes;
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataCasltCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
        else if($("#selectData").val() == "occur"){
            let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataOccurCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '발생 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset; 
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes;
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataOccurCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
        else if($("#selectData").val() == "dpsr"){
            let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataDprCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '사망자 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset;
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes; 
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataDprCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
        else if($("#selectData").val() == "ser"){
            let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSerinjuryCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '중상자 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset; 
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes;
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSerinjuryCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
        else if($("#selectData").val() == "slt"){
            let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataSltinjuryCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '경상자 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset; 
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes;
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataSltinjuryCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
        else if($("#selectData").val() == "inj"){
            let dataset = [
                {
                    label: '무단횡단',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt1,
                    borderColor: backgroundColor[0],
                    borderWidth: 1 // px
                },
                {
                    label: '보행노인',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt2,
                    borderColor: backgroundColor[1],
                    borderWidth: 1 // px
                },
                {
                    label: '보행어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt4,
                    borderColor: backgroundColor[2],
                    borderWidth: 1 // px
                },
                {
                    label: '스쿨존어린이',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt5,
                    borderColor: backgroundColor[3],
                    borderWidth: 1 // px
                },
                {
                    label: '자전거',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt6,
                    borderColor: backgroundColor[4],
                    borderWidth: 1 // px
                },
                {
                    label: '결빙',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt7,
                    borderColor: backgroundColor[5],
                    borderWidth: 1 // px
                },
                {
                    label: '음주운전',
                    fill: false, // 선 그래프 아래 영역이 색으로 채워지는거
                    data: dataInjuryCnt8,
                    borderColor: backgroundColor[6],
                    borderWidth: 1 // px
                }
            ]
            let yAxes =[
                {
                    scaleLabel: {
                        display: true,
                        labelString: '부상자 수', // y축 설명
                        fontSize: 15
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
            myChart.config.data.datasets = dataset; 
            myChart3.config.data.datasets = dataset; 
            myChart4.config.data.datasets = dataset; 
            myChart.options.scales.yAxes = yAxes;
            myChart3.options.scales.yAxes = yAxes;
            for (var i = 0; i < datasets.length; i++) {
                myChart.config.data.datasets[i].hidden = datasets[i].hidden;
            }
            for (var i = 0; i < datasets3.length; i++) {
                myChart3.config.data.datasets[i].hidden = datasets3[i].hidden;
            }
            for (var i = 0; i < datasets4.length; i++) {
                myChart4.config.data.datasets[i].hidden = datasets4[i].hidden;
            }

            myChart2.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt1,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart5.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt2,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart6.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt4,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart7.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt5,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart8.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt6,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart9.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt7,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart10.config.data.datasets = [
                {
                    label: "사고 발생 수",
                    data: dataInjuryCnt8,
                    backgroundColor: [
                        'rgba(135, 207, 238, 0.3)',
                        'rgb(128, 242, 229, 0.3)',
                        'rgb(226, 167, 75, 0.3)',
                        'rgb(60, 185, 24, 0.3)',
                        'rgba(132, 9, 189, 0.3)',
                        'rgb(196, 104, 106, 0.3)',
                        'rgb(226, 82, 156, 0.3)',
                        'rgb(2, 89, 203, 0.3)',
                        'rgba(203, 242, 172, 0.3)'
                    ],
                }
            ];
            myChart.update();
            myChart3.update();
            myChart4.update();
            datasets = myChart.config.data.datasets;
            datasets3 = myChart3.config.data.datasets;
            datasets4 = myChart4.config.data.datasets;

            myChart2.update();
            myChart5.update();
            myChart6.update();
            myChart7.update();
            myChart8.update();
            myChart9.update();
            myChart10.update();
        }
    })

    for (var i = 0; i < datasets.length; i++) {
        datasets[i].hidden = false;
    }
    for (var i = 0; i < datasets3.length; i++) {
        datasets3[i].hidden = false;
    }
    for (var i = 0; i < datasets4.length; i++) {
        datasets4[i].hidden = false;
    }
    myChart.update();
    myChart3.update();
    myChart4.update();
    var count=7;

    function updateScale(count) {
        if(count == 0) {
            $("#myChart2").attr("width", 0);
            $("#myChart2").attr("height", 0);

            $("#myChart5").attr("width", 0);
            $("#myChart5").attr("height", 0);

            $("#myChart6").attr("width", 0);
            $("#myChart6").attr("height", 0);

            $("#myChart7").attr("width", 0);
            $("#myChart7").attr("height", 0);

            $("#myChart8").attr("width", 0);
            $("#myChart8").attr("height", 0);

            $("#myChart9").attr("width", 0);
            $("#myChart9").attr("height", 0);

            $("#myChart10").attr("width", 0);
            $("#myChart10").attr("height", 0);

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;
            let newPlugins = [{
                beforeDraw: (chart) => {
                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctx = chart.chart.ctx;
                    ctx.restore();
                    var fontSize = (height / 0).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
                    var text = "무단횡단",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }];
            myChart2Config.plugins = newPlugins;
            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5Config.plugins = newPlugins;
            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6Config.plugins = newPlugins;
            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7Config.plugins = newPlugins;
            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8Config.plugins = newPlugins;
            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9Config.plugins = newPlugins;
            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();

            myChart10Config.plugins = newPlugins;
            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }

        else if(count == 1) {
            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;

            let typeText = ["무단횡단", "보행노인", "보행어린이", "스쿨존어린이", "자전거", "결빙", "음주운전"];
            let pluginArray = [];
            for(let i=0; i<7; i++){
                let newPlugins = [{
                    beforeDraw: (chart) => {
                        var width = chart.chart.width,
                            height = chart.chart.height,
                            ctx = chart.chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 130).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = typeText[i],
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }];
                pluginArray.push(newPlugins);
            }
            myChart2Config.plugins = pluginArray[0];
            myChart5Config.plugins = pluginArray[1];
            myChart6Config.plugins = pluginArray[2];
            myChart7Config.plugins = pluginArray[3];
            myChart8Config.plugins = pluginArray[4];
            myChart9Config.plugins = pluginArray[5];
            myChart10Config.plugins = pluginArray[6];

            $("#myChart2").remove();
            $("#myChart2Area").append(`<canvas id="myChart2" width="200" height="165"></canvas>`);

            $("#myChart5").remove();
            $("#myChart5Area").append(`<canvas id="myChart5" width="200" height="165"></canvas>`);

            $("#myChart6").remove();
            $("#myChart6Area").append(`<canvas id="myChart6" width="200" height="165"></canvas>`);

            $("#myChart7").remove();
            $("#myChart7Area").append(`<canvas id="myChart7" width="200" height="165"></canvas>`);

            $("#myChart8").remove();
            $("#myChart8Area").append(`<canvas id="myChart8" width="200" height="165"></canvas>`);

            $("#myChart9").remove();
            $("#myChart9Area").append(`<canvas id="myChart9" width="200" height="165"></canvas>`);

            $("#myChart10").remove();
            $("#myChart10Area").append(`<canvas id="myChart10" width="200" height="165"></canvas>`);


            $("#myChart2").attr("width", 400);
            $("#myChart2").attr("height", 330);
            $("#myChart2").css({"margin-left" : "-20%"});

            $("#myChart5").attr("width", 400);
            $("#myChart5").attr("height", 330);
            $("#myChart5").css({"margin-left" : "-20%"});

            $("#myChart6").attr("width", 400);
            $("#myChart6").attr("height", 330);
            $("#myChart6").css({"margin-left" : "-20%"});

            $("#myChart7").attr("width", 400);
            $("#myChart7").attr("height", 330);
            $("#myChart7").css({"margin-left" : "-20%"});

            $("#myChart8").attr("width", 400);
            $("#myChart8").attr("height", 330);
            $("#myChart8").css({"margin-left" : "-20%"});

            $("#myChart9").attr("width", 400);
            $("#myChart9").attr("height", 330);
            $("#myChart9").css({"margin-left" : "-20%"});

            $("#myChart10").attr("width", 400);
            $("#myChart10").attr("height", 330);
            $("#myChart10").css({"margin-left" : "-20%"});

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();


            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }
        else if(count == 2) {

            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;

            let typeText = ["무단횡단", "보행노인", "보행어린이", "스쿨존어린이", "자전거", "결빙", "음주운전"];
            let pluginArray = [];
            for(let i=0; i<7; i++){
                let newPlugins = [{
                    beforeDraw: (chart) => {
                        var width = chart.chart.width,
                            height = chart.chart.height,
                            ctx = chart.chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 140).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = typeText[i],
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }];
                pluginArray.push(newPlugins);
            }
            myChart2Config.plugins = pluginArray[0];
            myChart5Config.plugins = pluginArray[1];
            myChart6Config.plugins = pluginArray[2];
            myChart7Config.plugins = pluginArray[3];
            myChart8Config.plugins = pluginArray[4];
            myChart9Config.plugins = pluginArray[5];
            myChart10Config.plugins = pluginArray[6];

            $("#myChart2").remove();
            $("#myChart2Area").append(`<canvas id="myChart2" width="200" height="165"></canvas>`);

            $("#myChart5").remove();
            $("#myChart5Area").append(`<canvas id="myChart5" width="200" height="165"></canvas>`);

            $("#myChart6").remove();
            $("#myChart6Area").append(`<canvas id="myChart6" width="200" height="165"></canvas>`);

            $("#myChart7").remove();
            $("#myChart7Area").append(`<canvas id="myChart7" width="200" height="165"></canvas>`);

            $("#myChart8").remove();
            $("#myChart8Area").append(`<canvas id="myChart8" width="200" height="165"></canvas>`);

            $("#myChart9").remove();
            $("#myChart9Area").append(`<canvas id="myChart9" width="200" height="165"></canvas>`);

            $("#myChart10").remove();
            $("#myChart10Area").append(`<canvas id="myChart10" width="200" height="165"></canvas>`);


            $("#myChart2").attr("width", 350);
            $("#myChart2").attr("height", 280);

            $("#myChart5").attr("width", 350);
            $("#myChart5").attr("height", 280);

            $("#myChart6").attr("width", 350);
            $("#myChart6").attr("height", 280);

            $("#myChart7").attr("width", 350);
            $("#myChart7").attr("height", 280);

            $("#myChart8").attr("width", 350);
            $("#myChart8").attr("height", 280);

            $("#myChart9").attr("width", 350);
            $("#myChart9").attr("height", 280);

            $("#myChart10").attr("width", 350);
            $("#myChart10").attr("height", 280);

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();


            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }
        else if(count == 3) {

            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;
            
            let typeText = ["무단횡단", "보행노인", "보행어린이", "스쿨존어린이", "자전거", "결빙", "음주운전"];
            let pluginArray = [];
            for(let i=0; i<7; i++){
                let newPlugins = [{
                    beforeDraw: (chart) => {
                        var width = chart.chart.width,
                            height = chart.chart.height,
                            ctx = chart.chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 180).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = typeText[i],
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }];
                pluginArray.push(newPlugins);
            }
            myChart2Config.plugins = pluginArray[0];
            myChart5Config.plugins = pluginArray[1];
            myChart6Config.plugins = pluginArray[2];
            myChart7Config.plugins = pluginArray[3];
            myChart8Config.plugins = pluginArray[4];
            myChart9Config.plugins = pluginArray[5];
            myChart10Config.plugins = pluginArray[6];

            $("#myChart2").remove();
            $("#myChart2Area").append(`<canvas id="myChart2" width="200" height="165"></canvas>`);

            $("#myChart5").remove();
            $("#myChart5Area").append(`<canvas id="myChart5" width="200" height="165"></canvas>`);

            $("#myChart6").remove();
            $("#myChart6Area").append(`<canvas id="myChart6" width="200" height="165"></canvas>`);

            $("#myChart7").remove();
            $("#myChart7Area").append(`<canvas id="myChart7" width="200" height="165"></canvas>`);

            $("#myChart8").remove();
            $("#myChart8Area").append(`<canvas id="myChart8" width="200" height="165"></canvas>`);

            $("#myChart9").remove();
            $("#myChart9Area").append(`<canvas id="myChart9" width="200" height="165"></canvas>`);

            $("#myChart10").remove();
            $("#myChart10Area").append(`<canvas id="myChart10" width="200" height="165"></canvas>`);


            $("#myChart2").attr("width", 300);
            $("#myChart2").attr("height", 230);

            $("#myChart5").attr("width", 300);
            $("#myChart5").attr("height", 230);

            $("#myChart6").attr("width", 300);
            $("#myChart6").attr("height", 230);

            $("#myChart7").attr("width", 300);
            $("#myChart7").attr("height", 230);

            $("#myChart8").attr("width", 300);
            $("#myChart8").attr("height", 230);

            $("#myChart9").attr("width", 300);
            $("#myChart9").attr("height", 230);

            $("#myChart10").attr("width", 300);
            $("#myChart10").attr("height", 230);

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();


            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }
        else if(count == 4 || count == 5 || count == 6) {

            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;

            let typeText = ["무단횡단", "보행노인", "보행어린이", "스쿨존어린이", "자전거", "결빙", "음주운전"];
            let pluginArray = [];
            for(let i=0; i<7; i++){
                let newPlugins = [{
                    beforeDraw: (chart) => {
                        var width = chart.chart.width,
                            height = chart.chart.height,
                            ctx = chart.chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 228).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = typeText[i],
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }];
                pluginArray.push(newPlugins);
            }
            myChart2Config.plugins = pluginArray[0];
            myChart5Config.plugins = pluginArray[1];
            myChart6Config.plugins = pluginArray[2];
            myChart7Config.plugins = pluginArray[3];
            myChart8Config.plugins = pluginArray[4];
            myChart9Config.plugins = pluginArray[5];
            myChart10Config.plugins = pluginArray[6];

            $("#myChart2").remove();
            $("#myChart2Area").append(`<canvas id="myChart2" width="200" height="165"></canvas>`);

            $("#myChart5").remove();
            $("#myChart5Area").append(`<canvas id="myChart5" width="200" height="165"></canvas>`);

            $("#myChart6").remove();
            $("#myChart6Area").append(`<canvas id="myChart6" width="200" height="165"></canvas>`);

            $("#myChart7").remove();
            $("#myChart7Area").append(`<canvas id="myChart7" width="200" height="165"></canvas>`);

            $("#myChart8").remove();
            $("#myChart8Area").append(`<canvas id="myChart8" width="200" height="165"></canvas>`);

            $("#myChart9").remove();
            $("#myChart9Area").append(`<canvas id="myChart9" width="200" height="165"></canvas>`);

            $("#myChart10").remove();
            $("#myChart10Area").append(`<canvas id="myChart10" width="200" height="165"></canvas>`);


            $("#myChart2").attr("width", 200);
            $("#myChart2").attr("height", 165);

            $("#myChart5").attr("width", 200);
            $("#myChart5").attr("height", 165);

            $("#myChart6").attr("width", 200);
            $("#myChart6").attr("height", 165);

            $("#myChart7").attr("width", 200);
            $("#myChart7").attr("height", 165);

            $("#myChart8").attr("width", 200);
            $("#myChart8").attr("height", 165);

            $("#myChart9").attr("width", 200);
            $("#myChart9").attr("height", 165);

            $("#myChart10").attr("width", 200);
            $("#myChart10").attr("height", 165);

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();


            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }

        else if(count == 7) {
            $("#myChart2Area").attr("status", "visible");
            $("#myChart2Area").css({"display" : "flex", "justify-content" : "center"});
    
            $("#myChart5Area").attr("status", "visible");
            $("#myChart5Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            
            $("#myChart6Area").attr("status", "visible");
            $("#myChart6Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            
            $("#myChart7Area").attr("status", "visible");
            $("#myChart7Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            
            $("#myChart8Area").attr("status", "visible");
            $("#myChart8Area").css({"display" : "flex", "justify-content" : "center"});
            
            $("#myChart9Area").attr("status", "visible");
            $("#myChart9Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            
            $("#myChart10Area").attr("status", "visible");
            $("#myChart10Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            
            myChart2Config.options.plugins.labels.fontSize = 20;
            myChart5Config.options.plugins.labels.fontSize = 20;
            myChart6Config.options.plugins.labels.fontSize = 20;
            myChart7Config.options.plugins.labels.fontSize = 20;
            myChart8Config.options.plugins.labels.fontSize = 20;
            myChart9Config.options.plugins.labels.fontSize = 20;
            myChart10Config.options.plugins.labels.fontSize = 20;
            let typeText = ["무단횡단", "보행노인", "보행어린이", "스쿨존어린이", "자전거", "결빙", "음주운전"];
            let pluginArray = [];
            for(let i=0; i<7; i++){
                let newPlugins = [{
                    beforeDraw: (chart) => {
                        var width = chart.chart.width,
                            height = chart.chart.height,
                            ctx = chart.chart.ctx;
                        ctx.restore();
                        var fontSize = (height / 228).toFixed(2);
                        ctx.font = fontSize + "em sans-serif";
                        ctx.textBaseline = "middle";
                        var text = typeText[i],
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }];
                pluginArray.push(newPlugins);
            }
            myChart2Config.plugins = pluginArray[0];
            myChart5Config.plugins = pluginArray[1];
            myChart6Config.plugins = pluginArray[2];
            myChart7Config.plugins = pluginArray[3];
            myChart8Config.plugins = pluginArray[4];
            myChart9Config.plugins = pluginArray[5];
            myChart10Config.plugins = pluginArray[6];

            $("#myChart2").remove();
            $("#myChart2Area").append(`<canvas id="myChart2" width="200" height="165"></canvas>`);

            $("#myChart5").remove();
            $("#myChart5Area").append(`<canvas id="myChart5" width="200" height="165"></canvas>`);

            $("#myChart6").remove();
            $("#myChart6Area").append(`<canvas id="myChart6" width="200" height="165"></canvas>`);

            $("#myChart7").remove();
            $("#myChart7Area").append(`<canvas id="myChart7" width="200" height="165"></canvas>`);

            $("#myChart8").remove();
            $("#myChart8Area").append(`<canvas id="myChart8" width="200" height="165"></canvas>`);

            $("#myChart9").remove();
            $("#myChart9Area").append(`<canvas id="myChart9" width="200" height="165"></canvas>`);

            $("#myChart10").remove();
            $("#myChart10Area").append(`<canvas id="myChart10" width="200" height="165"></canvas>`);


            $("#myChart2").attr("width", 200);
            $("#myChart2").attr("height", 165);

            $("#myChart5").attr("width", 200);
            $("#myChart5").attr("height", 165);

            $("#myChart6").attr("width", 200);
            $("#myChart6").attr("height", 165);

            $("#myChart7").attr("width", 200);
            $("#myChart7").attr("height", 165);

            $("#myChart8").attr("width", 200);
            $("#myChart8").attr("height", 165);

            $("#myChart9").attr("width", 200);
            $("#myChart9").attr("height", 165);

            $("#myChart10").attr("width", 200);
            $("#myChart10").attr("height", 165);

            context2 = document.getElementById('myChart2').getContext('2d');
            context5 = document.getElementById('myChart5').getContext('2d');
            context6 = document.getElementById('myChart6').getContext('2d');
            context7 = document.getElementById('myChart7').getContext('2d');
            context8 = document.getElementById('myChart8').getContext('2d');
            context9 = document.getElementById('myChart9').getContext('2d');
            context10 = document.getElementById('myChart10').getContext('2d');

            myChart2 = new Chart(context2, myChart2Config);
            myChart2.update();

            myChart5 = new Chart(context5, myChart5Config);
            myChart5.update();

            myChart6 = new Chart(context6, myChart6Config);
            myChart6.update();

            myChart7 = new Chart(context7, myChart7Config);
            myChart7.update();

            myChart8 = new Chart(context8, myChart8Config);
            myChart8.update();

            myChart9 = new Chart(context9, myChart9Config);
            myChart9.update();


            myChart10 = new Chart(context10, myChart10Config);
            myChart10.update();
            
        }
    }

    $("a[data-filter='*']").click(function(e) {
        e.preventDefault();
        // 모든 그래프를 표시
        for (var i = 0; i < datasets.length; i++) {
            datasets[i].hidden = false;
        }
        for (var i = 0; i < datasets3.length; i++) {
            datasets3[i].hidden = false;
        }
        for (var i = 0; i < datasets4.length; i++) {
            datasets4[i].hidden = false;
        }
        myChart.update();
        myChart3.update();
        myChart4.update();

        count = 7;

        console.log(count);
        updateScale(count);
    });

    $("a[data-filter='.web']").click(function(e) {
        e.preventDefault();
        datasets[0].hidden = !datasets[0].hidden;
        datasets3[0].hidden = !datasets3[0].hidden;
        datasets4[0].hidden = !datasets4[0].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart2Area").attr("status") == "none"){
            $("#myChart2Area").attr("status", "visible");
            $("#myChart2Area").css({"display" : "flex", "justify-content" : "center"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart2Area").attr("status") == "visible"){
            $("#myChart2Area").attr("status", "none");
            $("#myChart2Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
        myChart2.update();
    });

    $("a[data-filter='.photography']").click(function(e) {
        e.preventDefault();
        datasets[1].hidden = !datasets[1].hidden;
        datasets3[1].hidden = !datasets3[1].hidden;
        datasets4[1].hidden = !datasets4[1].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart5Area").attr("status") == "none"){
            $("#myChart5Area").attr("status", "visible");
            $("#myChart5Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart5Area").attr("status") == "visible"){
            $("#myChart5Area").attr("status", "none");
            $("#myChart5Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });


    $("a[data-filter='.photography1']").click(function(e) {
        e.preventDefault();
        datasets[2].hidden = !datasets[2].hidden;
        datasets3[2].hidden = !datasets3[2].hidden;
        datasets4[2].hidden = !datasets4[2].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart6Area").attr("status") == "none"){
            $("#myChart6Area").attr("status", "visible");
            $("#myChart6Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart6Area").attr("status") == "visible"){
            $("#myChart6Area").attr("status", "none");
            $("#myChart6Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });


    $("a[data-filter='.product']").click(function(e) {
        e.preventDefault();
        datasets[3].hidden = !datasets[3].hidden;
        datasets3[3].hidden = !datasets3[3].hidden;
        datasets4[3].hidden = !datasets4[3].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart7Area").attr("status") == "none"){
            $("#myChart7Area").attr("status", "visible");
            $("#myChart7Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart7Area").attr("status") == "visible"){
            $("#myChart7Area").attr("status", "none");
            $("#myChart7Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });


    $("a[data-filter='.product1']").click(function(e) {
        e.preventDefault();
        datasets[4].hidden = !datasets[4].hidden;
        datasets3[4].hidden = !datasets3[4].hidden;
        datasets4[4].hidden = !datasets4[4].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart8Area").attr("status") == "none"){
            $("#myChart8Area").attr("status", "visible");
            $("#myChart8Area").css({"display" : "flex", "justify-content" : "center"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart8Area").attr("status") == "visible"){
            $("#myChart8Area").attr("status", "none");
            $("#myChart8Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });

    $("a[data-filter='.frozen']").click(function(e) {
        e.preventDefault();
        datasets[5].hidden = !datasets[5].hidden;
        datasets3[5].hidden = !datasets3[5].hidden;
        datasets4[5].hidden = !datasets4[5].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart9Area").attr("status") == "none"){
            $("#myChart9Area").attr("status", "visible");
            $("#myChart9Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart9Area").attr("status") == "visible"){
            $("#myChart9Area").attr("status", "none");
            $("#myChart9Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });

    $("a[data-filter='.drunk']").click(function(e) {
        e.preventDefault();
        datasets[6].hidden = !datasets[6].hidden;
        datasets3[6].hidden = !datasets3[6].hidden;
        datasets4[6].hidden = !datasets4[6].hidden;
        myChart.update();
        myChart3.update();
        myChart4.update();
        if($("#myChart10Area").attr("status") == "none"){
            $("#myChart10Area").attr("status", "visible");
            $("#myChart10Area").css({"display" : "flex", "justify-content" : "center", "margin-left" : "15px"});
            count += 1;
            updateScale(count);
        }
        else if($("#myChart10Area").attr("status") == "visible"){
            $("#myChart10Area").attr("status", "none");
            $("#myChart10Area").attr("style", "display:none");
            count -= 1;
            updateScale(count);
        }
        console.log(count);
    });
});