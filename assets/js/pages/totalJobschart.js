var briteChartApp=window.briteChartApp|| {
    }
;
!function(i, e) {
    "use strict";
    var c=["#727cf5", "#0acf97", "#6c757d", "#fa5c7c", "#ffbc00", "#39afd1", "#e3eaef"];
    e.createBarChart=function(e, t) {
        var a=i(e).data("colors"),
            l=a?a.split(", "): c.concat(),
            n=new britecharts.miniTooltip,
            u=new britecharts.bar,
            o=d3.select(e), r=!!o.node()&&o.node().getBoundingClientRect().width,
            d=!!o.node()&&o.node().getBoundingClientRect().height;
        u.isAnimated(!0).width(r).height(d).margin( {
                top: 10, left:55, bottom:20, right:10
            }
        ).betweenBarsPadding(.5).colorSchema(l).on("customMouseOver",
            n.show).on("customMouseMove", n.update).on("customMouseOut", n.hide),
            o.datum(t).call(u), d3.select(e+" .metadata-group").datum([]).call(n);
    }, e.createHorizontalBarChart=function(e, t) {
        var a=i(e).data("colors"), l=a?a.split(", "): c.concat(),
            n=new britecharts.bar, u=d3.select(e), o=!!u.node()&&u.node().getBoundingClientRect().width,
            r=!!u.node()&&u.node().getBoundingClientRect().height;
        n.colorSchema(l).isAnimated(!0).isHorizontal(!0).width(o).margin( {
                top: 10, left:50, bottom:20, right:10
            }
        ).enableLabels(!0).percentageAxisToMaxRatio(1.3).labelsNumberFormat(1).height(r), u.datum(t).call(n);
    }, e.createLineChart=function(e, t) {
        var a=new britecharts.line,
            l=new britecharts.tooltip, n=d3.select(e), u=!!n.node()&&n.node().getBoundingClientRect().width;
        a.isAnimated(!0).aspectRatio(.7).tooltipThreshold(100).grid("horizontal").width(u).dateLabel("date").valueLabel("value").on("customMouseOver", l.show).on("customMouseMove", l.update).on("customMouseOut", l.hide), l.title("Sample Data"), n.datum(t).call(a), d3.select(e+" .metadata-group .hover-marker").datum([]).call(l);
    }
        , e.createDonutChart=function(e, t) {
        var a=i(e).data("colors"), l=a?a.split(", "): c.concat(), n=britecharts.donut(), u=britecharts.legend();
        u.width(260).height(200).colorSchema(l).numberFormat("s"), n.height(300).highlightSliceById(3).colorSchema(l).hasFixedHighlightedSlice(!0).internalRadius(80).on("customMouseOver", function(e) {
                u.highlight(e.data.id);
            }
        ).on("customMouseOut", function() {
                u.clearHighlight();
            }
        ), d3.select(e).datum(t).call(n), d3.select(".legend-chart-container").datum(t).call(u);
    }, e.createBrushChart=function(e, t) {
        var a=d3.select(e), l=britecharts.brush(), n=!!a.node()&&a.node().getBoundingClientRect().width;
        l.height(320).width(n).on("customBrushStart", function(e) {
                var t=d3.timeFormat("%m/%d/%Y");
                console.log("Start date = "+t(e[0])), console.log("End date = "+t(e[1]));
            }
        ).on("customBrushEnd", function(e) {
                console.log("rounded extent", e);
            }
        ), a.datum(t).call(l), l.dateRange(["9/15/2015", "1/25/2016"]);
    }, e.createStepChart=function(e, t) {
        var a=britecharts.step(), l=britecharts.miniTooltip(),
            n=d3.select(e), u=!!n.node()&&n.node().getBoundingClientRect().width;
        a.width(u).height(320).margin( {
                top: 40, right:40, bottom:80, left:50
            }
        ).on("customMouseOver", l.show).on("customMouseMove",
            l.update).on("customMouseOut", l.hide), n.datum(t).call(a),
            l.nameLabel("key"), d3.select(e+" .step-chart .metadata-group").datum([]).call(l);
    }, i(function() {
        var e=[
            {name: "SUN", value:1000},
            {name: "MON", value:2100},{
            name: "TUE", value:5e3},
            {name: "WED", value:4e3},
            {name: "THU", value:5500},
            {name: "FRI", value:6500},
            {name: "SAT", value:4500},
        ], t= {
            dataByTopic: [ {
                topic: 103, topicName:"San Francisco", dates:
                    [
                        {date: "2018-06-27T07:00:00.000Z", value:1, fullDate:"2018-06-27T07:00:00.000Z"},
                        {date: "2018-06-28T07:00:00.000Z", value:1, fullDate:"2018-06-28T07:00:00.000Z"},
                        {date: "2018-06-29T07:00:00.000Z", value:4, fullDate:"2018-06-29T07:00:00.000Z"}
                    ]
            }]
        }, a=[ {
            name: "Shiny", id:1, quantity:86, percentage:5
        }
            ,  {
                name: "Blazing", id:2, quantity:300, percentage:14
            }
            ,  {
                name: "Dazzling", id:3, quantity:276, percentage:16
            }
        ], l=[ {
            date: "2018-06-27T07:00:00.000Z", value:4
        }
            ,  {
                date: "2018-06-28T07:00:00.000Z", value:12
            }
            ,  {
                date: "2018-06-29T07:00:00.000Z", value:33
            }

        ], n=[ {
            key: "Appetizer", value:400
        }
            ,  {
                key: "Soup", value:300
            }
            , {
                key: "Salad", value: 300
            }
        ];
        function u() {
            d3.selectAll(".bar-chart").remove(),
                d3.selectAll(".line-chart").remove(),
                d3.selectAll(".donut-chart").remove(),
                d3.selectAll(".britechart-legend").remove(),
                d3.selectAll(".brush-chart").remove(),
                d3.selectAll(".step-chart").remove(),
            0<i(".bar-container").length&&briteChartApp.createBarChart(".bar-container", e),
            0<i(".bar-container-horizontal").length&&briteChartApp.createHorizontalBarChart(".bar-container-horizontal", e),
            0<i(".line-container").length&&briteChartApp.createLineChart(".line-container", t),
            0<i(".donut-container").length&&briteChartApp.createDonutChart(".donut-container", a),
            0<i(".brush-container").length&&briteChartApp.createBrushChart(".brush-container", l),
            0<i(".step-container").length&&briteChartApp.createStepChart(".step-container", n);
        }
        i(window).on("resize", function(e) {
                e.preventDefault(), setTimeout(u, 200);
            }
        ), u();
    });
}(jQuery, briteChartApp);
//------------End Total Job -------------


//
// ----------------- Start Total Jobs -----------
!function(i) {
    "use strict";
    function e() {
        this.$body=i("body"), this.charts=[]
    }
    e.prototype.initCharts=function() {
        window.Apex= {
            chart:  {
                parentHeightOffset: 0, toolbar: {
                    show: !1
                }
            }, grid: {
                padding:  {
                    left: 0, right:0
                }
            },
        };
        var e=new Date, t=function(e, t) {
                for(var a=new Date(t, e, 1), o=[], r=0;
                    a.getMonth()===e&&r<10;
                ) {
                    var s=new Date(a);
                    o.push(s.getDate()+" "+s.toLocaleString("en-us",  {
                        month: "short"}
                    )), a.setDate(a.getDate()+1), r+=1
                }return o;
            }
            (e.getMonth()+1, e.getFullYear()), a=["#A2CF007E", "#69A20000"],
            o=i("#totalUnpaidJobs").data("colors");
        o&&(a=o.split(", "));
        var r= {
            chart:  {
                height: 260, type:"area"}
            , dataLabels: {
                enabled: !1
            }
            , stroke: {
                curve: "smooth", width:2
            }
            , series:[ {
                name: "Sessions", data:[0, 5, 15, 4,5, 10,15, 5,25, 15,30, 35]
            }
            ], zoom: {
                enabled: !1
            }
            , legend: {
                show: !1
            }
            , colors:a, xaxis: {
                type: "string", categories:t, tooltip: {
                    enabled: !1
                }
                , axisBorder: {
                    show: !1
                }
                , labels: {
                }
            }
            , yaxis: {
                labels:  {
                    formatter: function(e) {
                        return e+"k"}
                    , offsetX: -6
                }}, fill: {
                type: "gradient", gradient: {
                    type: "vertical", shadeIntensity:1, inverseColors:!1, opacityFrom:.45,
                    opacityTo:.05, stops:[45, 100]
                }
            }};
        new ApexCharts(document.querySelector("#totalUnpaidJobs"), r).render();
        for(var s=[], n=10;
            1<=n;
            n--)s.push(n+" min ago");
        (o=i("#views-min").data(""))&&(a=o.split(", "));
        r= {
            chart:  {
                height: 150, type:"bar", stacked:!0
            }
            , plotOptions: {
                bar:  {
                    horizontal: !1, endingShape:"rounded", columnWidth:"22%", dataLabels: {
                        position: "top"}
                }}, dataLabels: {
                enabled: !0, offsetY:-24, style: {
                    fontSize: "12px", colors:["#98a6ad"]
                }
            }, series:[ {
                name: "Views", data:function(e) {
                    for(var t=[], a=0;
                        a<e;
                        a++)t.push(Math.floor(90*Math.random())+4);
                    return t;
                }
                (4)
            }], zoom:  {
                enabled: !1
            }
            , legend: {
                show: !1
            }
            , colors:a, xaxis: {
                categories: ['JAN','FEB', 'MAR', 'APR'], axisBorder: {
                    show: !1

                }
                , axisTicks: {
                    show: !1
                }

            }, yaxis: {
                labels:  {
                    show: !1
                }
            }, fill: {
                type: "gradient", gradient: {
                    inverseColors: !0, shade:"light",
                    type:"horizontal", shadeIntensity:.25, gradientToColors:void 0,
                    opacityFrom:1, opacityTo:1, stops:[0, 0, 0, 0]
                }
            }, tooltip: {
                y:  {
                    formatter: function(e) {
                        return e;
                    }
                }}};
    }, e.prototype.init=function() {
        i("#dash-daterange").daterangepicker( {
                singleDatePicker: !0
            }
        ), this.initCharts(), window.setInterval(function() {
                var e=Math.floor(600*Math.random()+150);
                i("#active-users-count").text(e), i("#active-views-count").text(Math.floor(Math.random()*e+200));
            }
            , 2e3);
    }, i.AnalyticsDashboard=new e, i.AnalyticsDashboard.Constructor=e;
}(window.jQuery), function() {
    "use strict";
    window.jQuery.AnalyticsDashboard.init();
}
();
// ----------------- End Total Jobs -----------

