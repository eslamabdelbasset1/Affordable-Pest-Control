!function(o) {
    "use strict";
    function e() {
        this.$body=o("body"), this.charts=[];
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
            }, colors:["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"]
        };
        var e=["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"], t=o("#revenue-chart").data("colors");
        t&&(e=t.split(", "));
        var r= {
            chart:  {
                height: 364, type:"line", dropShadow: {
                    enabled: !0, opacity:.2, blur:7, left:-7, top:7
                }
            }, dataLabels: {
                enabled: !1
            }
            , stroke: {
                curve: "smooth", width:4
            }
            , series:[ {
                name: "Current Week", data:[10, 20, 15, 25, 20, 30, 20]
            }
                ,  {
                    name: "Previous Week", data:[0, 15, 10, 30, 15, 35, 25]
                }
            ], colors:e, zoom: {
                enabled: !1
            }
            , legend: {
                show: !1
            }
            , xaxis: {
                type: "string", categories:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], tooltip: {
                    enabled: !1
                }
                , axisBorder: {
                    show: !1
                }
            }, yaxis: {
                labels:  {
                    formatter: function(e) {
                        return e+"k"}
                    , offsetX: -15
                }}};


        // Profit --------------------------------------------
        new ApexCharts(document.querySelector("#revenue-chart"), r).render();
        e=["#81B214", "#FFCC29"];
        (t=o("#profit").data("colors"))&&(e=t.split(", "));
        r= {
            chart:  {
                height: 257, type:"bar", stacked:!0
            }
            , plotOptions: {
                bar:  {
                    horizontal: !1, columnWidth:"30%", borderWidth:"50%"}
            }, dataLabels: {
                enabled: !1
            }
            , stroke: {
                show: !0, width:3, colors:["transparent"]
            }
            , series:[ {
                name: "Actual",
                data:[28, 17, 40, 48, 60, 84, 61, 94, 60, 74, 30,]

            }
                ,  {
                    name: "Projection",
                    data:[13, 12, 28, 30, 38, 31, 60, 50, 70, 30, 30,]
                }
            ], zoom: {
                enabled: !1
            }
            , legend: {
                show: !1
            },
            colors:e,
            xaxis: {
                categories: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'SEP', 'OCT', 'NOV'], axisBorder: {
                    show: !1
                }
            }, yaxis: {
                labels:  {
                    formatter: function(e) {
                        return e+"k"}
                    , offsetX: -15
                }}, fill: {
                opacity: 1
            }
            , tooltip: {
                y:  {
                    formatter: function(e) {
                        return"$"+e+"k"}
                }}};
        // Profit ----------------------------------------------------------

        new ApexCharts(document.querySelector("#profit"), r).render();
        e=["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"];
        (t=o("#average-sales").data("colors"))&&(e=t.split(", "));
        r= {
            chart:  {
                height: 208, type:"donut"}
            , legend: {
                show: !1
            }
            , stroke: {
                colors: ["transparent"]
            }
            , series:[44, 55, 41, 17], labels:["Direct", "Affilliate", "Sponsored", "E-mail"], colors:e, responsive:[ {
                breakpoint: 480, options: {
                    chart:  {
                        width: 200
                    }
                    , legend: {
                        position: "bottom"}
                }}]
        };
        new ApexCharts(document.querySelector("#average-sales"), r).render();

    }
        , e.prototype.initMaps=function() {
        0<o("#world-map-markers").length&&o("#world-map-markers").vectorMap( {
            map: "world_mill_en", normalizeFunction:"polynomial", hoverOpacity:.7, hoverColor:!1, regionStyle: {
                initial:  {
                    fill: "#e3eaef"}
            }, markerStyle: {
                initial:  {
                    r: 9, fill:"#727cf5", "fill-opacity":.9, stroke:"#fff", "stroke-width":7, "stroke-opacity":.4
                }
                , hover: {
                    stroke: "#fff", "fill-opacity":1, "stroke-width":1.5
                }
            }, backgroundColor:"transparent", markers:[ {
                latLng: [40.71, -74], name:"New York"}
                ,  {
                    latLng: [37.77, -122.41], name:"San Francisco"}
                ,  {
                    latLng: [-33.86, 151.2], name:"Sydney"}
                ,  {
                    latLng: [1.3, 103.8], name:"Singapore"}
            ], zoomOnScroll:!1
        });
    }, e.prototype.init=function() {
        o("#dash-daterange").daterangepicker( {
                singleDatePicker: !0
            }
        ), this.initCharts(), this.initMaps();
    }, o.Dashboard=new e, o.Dashboard.Constructor=e;
}(window.jQuery), function(t) {
    "use strict";
    t(document).ready(function(e) {
            t.Dashboard.init();
        }
    );
}(window.jQuery);

// ----------------- End Profit ----------------

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
            o=i("#totalJobs").data("colors");
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
        new ApexCharts(document.querySelector("#totalJobs"), r).render();
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
        ),
            this.initCharts(), window.setInterval(function() {
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

