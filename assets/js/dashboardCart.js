

$(document).ready(function() {
    $('input[name="dateRange"]').daterangepicker({ format: 'yyyy-mm-dd' });
    $("input[name='dateRange']").change(function(){
        var date = $( this ).val().split("-");
        var fromDate = moment(date[0]).format('YYYY-MM-DD');
        var toDate = moment(date[1]).format('YYYY-MM-DD');
        $.ajax({
            url: "http://localhost:63342/Affordable%20Pest%20Control/index.html" + fromDate + '/' + toDate,
            success: function(result) {
            var data = result.split("-");
            $("#activeJobCount").text();
            $("#completeJobCount").text();
            $("#unpaidJobCount").text();
            $("#ytdJobCount").text();
            $("#activeJobCount").text(data[0]);
            $("#completeJobCount").text(data[1]);
            $("#unpaidJobCount").text(data[2]);
            $("#ytdJobCount").text(data[3]);}
        });
    });
///////////////////////////////////////////////////////////////////////
//  Profit Buttons Start
//////////////////////////////////////////////////////////////////////
    $("#weekly").click(function(){
    $(".weekly_cart").show('200');
    $(".monthly_cart").hide('200');
    $(".yearly_cart").hide('200');
});

    $("#monthly").click(function() {
    $(".weekly_cart").hide('200');
    $(".monthly_cart").show('200');
    $(".yearly_cart").hide('200');
});

    $("#yearly").click(function(){
    $(".weekly_cart").hide('200');
    $(".monthly_cart").hide('200');
    $(".yearly_cart").show('200');
});
///////////////////////////////////////////////////////////////////////
//  Profit Buttons End
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//  Total Jobs Buttons Start
//////////////////////////////////////////////////////////////////////
    $("#weekly_total_job").click(function() {
    $(".weekly_cart_total_job").show('200');
    $(".monthly_cart_total_job").hide('200');
    $(".yearly_cart_total_job").hide('200');
});

    $("#monthly_total_job").click(function() {
    $(".weekly_cart_total_job").hide('200');
    $(".monthly_cart_total_job").show('200');
    $(".yearly_cart_total_job").hide('200');
});

    $("#yearly_total_job").click(function() {
    $(".weekly_cart_total_job").hide('200');
    $(".monthly_cart_total_job").hide('200');
    $(".yearly_cart_total_job").show('200');
});
///////////////////////////////////////////////////////////////////////
//  Unpaid Jobs Buttons Start
//////////////////////////////////////////////////////////////////////
    $("#weekly_unpaid_jobs").click(function(){
    $(".weekly_cart_unpaid_jobs").show('200');
    $(".monthly_cart_unpaid_jobs").hide('200');
    $(".yearly_cart_unpaid_jobs").hide('200');
});

    $("#monthly_unpaid_jobs").click(function(){
    $(".weekly_cart_unpaid_jobs").hide('200');
    $(".monthly_cart_unpaid_jobs").show('200');
    $(".yearly_cart_unpaid_jobs").hide('200');
});

    $("#yearly_unpaid_jobs").click(function(){
    $(".weekly_cart_unpaid_jobs").hide('200');
    $(".monthly_cart_unpaid_jobs").hide('200');
    $(".yearly_cart_unpaid_jobs").show('200');
});
///////////////////////////////////////////////////////////////////////
//  Unpaid Jobs Buttons End
//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
//  Profit Buttons Start
//////////////////////////////////////////////////////////////////////
    $("#weekly_earning").click(function(){
    $(".weekly_cart_earning").show('200');
    $(".monthly_cart_earning").hide('200');
    $(".yearly_cart_earning").hide('200');
});

    $("#monthly_earning").click(function() {
    $(".weekly_cart_earning").hide('200');
    $(".monthly_cart_earning").show('200');
    $(".yearly_cart_earning").hide('200');
});

    $("#yearly_earning").click(function(){
    $(".weekly_cart_earning").hide('200');
    $(".monthly_cart_earning").hide('200');
    $(".yearly_cart_earning").show('200');
});
///////////////////////////////////////////////////////////////////////
//  Profit Buttons End
//////////////////////////////////////////////////////////////////////


});
    ///////////////////////////////////////////////////////////////////////
    // Weekly Profit Start
    //////////////////////////////////////////////////////////////////////
    am4core.ready(function() {
    var weeklyEarning = [
        {"earning":"61398.46","date":"20\/09"},
        {"earning":"96284.10","date":"21\/09"},
        {"earning":"57398.85","date":"22\/09"},
        {"earning":"46743.20","date":"23\/09"},
        {"earning":"76743.20","date":"24\/09"},
        {"earning":"86743.20","date":"25\/09"},
        {"earning":"26743.20","date":"26\/09"}];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("profit1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;
    chart.colors.list = [
    am4core.color("#81B214")
    ];
    // Add data
    chart.data = weeklyEarning;
    am4core.borderWidth = "10px";
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "date";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(30);
    series.columns.template.radius = 10;
}
    createSeries("earning", "Weekly Earning", false);

});
    //============= Weekly Profit End===================


    //================== Monthly Profit Start===================
    am4core.ready(function() {
    var monthlyEarning = [
        {"monthly_earning":"61398.46","month":"JAN"},
        {"monthly_earning":"106284.10","month":"FEB"},
        {"monthly_earning":"97398.85","month":"MAR"},
        {"monthly_earning":"106244.10","month":"APR"},
        {"monthly_earning":"96743.20","month":"MAY"},
        {"monthly_earning":"43129.00","month":"JUN"},
        {"monthly_earning":"416 19.73","month":"JUL"},
        {"monthly_earning":0,"month":"AUG"},
        {"monthly_earning":0,"month":"SEP"},
        {"monthly_earning":0,"month":"OCT"},
        {"monthly_earning":0,"month":"NOV"}];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("profit2", am4charts.XYChart);
    chart.colors.list = [
    am4core.color("#81B214")
    ];
    // Add data
    chart.data = monthlyEarning;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Monthly Earning";

    // Create series
    function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "month";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(30);
}

    createSeries("monthly_earning", "Monthly Earning", false);

    // Add legend
    chart.legend = new am4charts.Legend();


});

    // ----------------Monthly Profit Start--------------

    // --------------------Yearly Profit Start--------------
    am4core.ready(function() {
    var yearlyEarning = [
        {"year":"2016","yearly_earning":"240039.00"},
        {"year":"2017","yearly_earning":"250039.00"},
        {"year":"2018","yearly_earning":"270039.00"},
        {"year":"2019","yearly_earning":"260039.00"},
        {"year":"2020","yearly_earning":"290039.00"},
        {"year":"2021","yearly_earning":"552817.44"}];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("profit3", am4charts.XYChart);
    chart.colors.list = [
    am4core.color("#81B214")
    ];
    // Add data
    chart.data = yearlyEarning;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Yearly Earning";

    // Create series
    function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(30);
}

    createSeries("yearly_earning", "Yearly Earning", false);

    // Add legend
    chart.legend = new am4charts.Legend();


});

    // ======================Yearly Profit End================



    // ==================Total Job Start
    am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("jobTotal1", am4charts.XYChart);

    var data = [];

    chart.data = [
        {"day" : "20/09", "jobs" : "0", "lineColor" : chart.colors.next()},
        {"day" : "21/09", "jobs" : "50", "lineColor" : chart.colors.next()},
        {"day" : "22/09", "jobs" : "80", "lineColor" : chart.colors.next()},
        {"day" : "23/09", "jobs" : "50", "lineColor" : chart.colors.next()},
        {"day" : "24/09", "jobs" : "100", "lineColor" : chart.colors.next()},
        {"day" : "25/09", "jobs" : "150", "lineColor" : chart.colors.next()},
        {"day" : "26/09", "jobs" : "300", "lineColor" : chart.colors.next()}];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "day";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "day";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#69A200";
    lineSeries.propertyFields.fill = "#A2CF007E";
    lineSeries.stroke = am4core.color("#69A200");
    lineSeries.fill = am4core.color("#A2CF007E");
    lineSeries.propertyFields.strokeDasharray = "#69A200";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#69A200");
    bullet.circle.strokeWidth = 1;

});
    // ==============Weekly Total Job End=================

    ///////////////////////////////////////////////////////////////////////
    // Monthly Total Job Start
    //////////////////////////////////////////////////////////////////////
    am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("jobTotal2", am4charts.XYChart);

    var data = [];

    chart.data = [
        {"month" : "JAN", "jobs" : "0", "lineColor" : chart.colors.next()},
        {"month" : "FEB", "jobs" : "10", "lineColor" : chart.colors.next()},
        {"month" : "MAR", "jobs" : "30", "lineColor" : chart.colors.next()},
        {"month" : "APR", "jobs" : "5", "lineColor" : chart.colors.next()},
        {"month" : "MAY", "jobs" : "20", "lineColor" : chart.colors.next()},
        {"month" : "JUN", "jobs" : "40", "lineColor" : chart.colors.next()},
        {"month" : "JULy", "jobs" : "111", "lineColor" : chart.colors.next()},
        {"month" : "AUG", "jobs" : "80", "lineColor" : chart.colors.next()},
        {"month" : "SEP", "jobs" : "200", "lineColor" : chart.colors.next()}];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "month";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "month";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#69A200";
    lineSeries.propertyFields.fill = "#69A200";
    lineSeries.stroke = am4core.color("#69A200");
    lineSeries.fill = am4core.color("#69A200");
    lineSeries.propertyFields.strokeDasharray = "#69A200";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#69A200");
    bullet.circle.strokeWidth = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

});
    ///////////////////////////////////////////////////////////////////////
    // Monthly Total Job End
    //////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////
    // Yearly Total Job Start
    //////////////////////////////////////////////////////////////////////
    am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("jobTotal3", am4charts.XYChart);

    var data = [];

    chart.data = [{"year" : "2020", "jobs" : "601", "lineColor" : chart.colors.next()},{"year" : "2021", "jobs" : "1498", "lineColor" : chart.colors.next()}];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "year";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#69A200";
    lineSeries.propertyFields.fill = "#69A200";
    lineSeries.stroke = am4core.color("#69A200");
    lineSeries.fill = am4core.color("#69A200");
    lineSeries.propertyFields.strokeDasharray = "#69A200";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color("#69A200");
    bullet.circle.strokeWidth = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

});
    ///////////////////////////////////////////////////////////////////////
    // Yearly Total Job End
    //////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////
// Weekly Profit Start
/////////////////////////////   /////////////////////////////////////////
am4core.ready(function() {
    var weeklyEarning = [
        {"earning":"21398.46","date":"SUN"},
        {"earning":"16284.10","date":"MON"},
        {"earning":"47398.85","date":"TUE"},
        {"earning":"56743.20","date":"WED"},
        {"earning":"76743.20","date":"THU"},
        {"earning":"86743.20","date":"FRI"},
        {"earning":"26743.20","date":"SAT"}];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("totalEarning1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;
    chart.colors.list = [
        am4core.color("#206A5D")
    ];
    // Add data
    chart.data = weeklyEarning;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 5;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name, stacked) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "date";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
        series.stacked = stacked;
        series.columns.template.width = am4core.percent(30);
        series.columns.template.radius = 10;
    }

    createSeries("earning", "Weekly Earning", false);


});

///////////////////////////////////////////////////////////////////////
// Weekly Profit End
//////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// Monthly Profit Start
//////////////////////////////////////////////////////////////////////
am4core.ready(function() {
    var monthlyEarning = [
        {"monthly_earning":"61398.46","month":"JAN"},
        {"monthly_earning":"106284.10","month":"FEB"},
        {"monthly_earning":"97398.85","month":"MAR"},
        {"monthly_earning":"106244.10","month":"APR"},
        {"monthly_earning":"96743.20","month":"MAY"},
        {"monthly_earning":"43129.00","month":"JUN"},
        {"monthly_earning":"41619.73","month":"JUL"},
        {"monthly_earning":"97398","month":"AUG"},
        {"monthly_earning":"106284","month":"SEP"},
        {"monthly_earning":"206284","month":"OCT"},
        {"monthly_earning":"56284","month":"NOV"}];
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("totalEarning2", am4charts.XYChart);
    chart.colors.list = [
        am4core.color("#206A5D")
    ];
    // Add data
    chart.data = monthlyEarning;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name, stacked) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "month";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
        series.stacked = stacked;
        series.columns.template.width = am4core.percent(30);
    }

    createSeries("monthly_earning", "Monthly Earning", false);

});

///////////////////////////////////////////////////////////////////////
// Monthly Profit Start
//////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// Yearly Profit Start
//////////////////////////////////////////////////////////////////////


am4core.ready(function() {
    var yearlyEarning = [
        {"year":"2016","yearly_earning":"240039.00"},
        {"year":"2017","yearly_earning":"250039.00"},
        {"year":"2018","yearly_earning":"270039.00"},
        {"year":"2019","yearly_earning":"260039.00"},
        {"year":"2020","yearly_earning":"290039.00"},
        {"year":"2021","yearly_earning":"552817.44"}
    ];

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("totalEarning3", am4charts.XYChart);
    chart.colors.list = [
        am4core.color("#206A5D")
    ];
    // Add data
    chart.data = yearlyEarning;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.title.text = "";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    function createSeries(field, name, stacked) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
        series.stacked = stacked;
        series.columns.template.width = am4core.percent(30);
    }

    createSeries("yearly_earning", "Yearly Earning", false);


});
//     function decreaseweek(){
//     window.location.href="http://localhost:63342/Affordable%20Pest%20Control/index.html/-1";
// }
//     function increaseweek(){
//     window.location.href="http://localhost:63342/Affordable%20Pest%20Control/index.html/1";
// }

///////////////////////////////////////////////////////////////////////
// Yearly Profit End
//////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////
// Weekly Unpaid Job Start
//////////////////////////////////////////////////////////////////
    am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("totalUnpaidJobs1", am4charts.XYChart);

    var data = [];

    chart.data = [
        {"day" : "20/09", "jobs" : "0", "lineColor" : chart.colors.next()},
        {"day" : "21/09", "jobs" : "50", "lineColor" : chart.colors.next()},
        {"day" : "22/09", "jobs" : "80", "lineColor" : chart.colors.next()},
        {"day" : "23/09", "jobs" : "50", "lineColor" : chart.colors.next()},
        {"day" : "24/09", "jobs" : "100", "lineColor" : chart.colors.next()},
        {"day" : "25/09", "jobs" : "150", "lineColor" : chart.colors.next()},
        {"day" : "26/09", "jobs" : "300", "lineColor" : chart.colors.next()}
    ];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "day";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "day";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#FFCC2980";
    lineSeries.propertyFields.fill = "#FFCC2980";
    lineSeries.stroke = am4core.color("#FFCC2980");
    lineSeries.fill = am4core.color("#FFCC2980");


    lineSeries.propertyFields.strokeDasharray = "#FFCC2980";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.fill = am4core.color("#FFCC2980");
    bullet.circle.strokeWidth = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;


});
    ///////////////////////////////////////////////////////////////////////
    // Weekly Unpaid Job End
    //////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////
    // Monthly Unpaid Job Start
    //////////////////////////////////////////////////////////////////////
    am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("totalUnpaidJobs2", am4charts.XYChart);

    var data = [];

    chart.data = [
        {"month" : "JAN", "jobs" : "0", "lineColor" : chart.colors.next()},
        {"month" : "FEB", "jobs" : "10", "lineColor" : chart.colors.next()},
        {"month" : "MAR", "jobs" : "30", "lineColor" : chart.colors.next()},
        {"month" : "APR", "jobs" : "5", "lineColor" : chart.colors.next()},
        {"month" : "MAY", "jobs" : "20", "lineColor" : chart.colors.next()},
        {"month" : "JUN", "jobs" : "40", "lineColor" : chart.colors.next()},
        {"month" : "JULy", "jobs" : "111", "lineColor" : chart.colors.next()},
        {"month" : "AUG", "jobs" : "80", "lineColor" : chart.colors.next()},
        {"month" : "SEP", "jobs" : "200", "lineColor" : chart.colors.next()}
    ];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "month";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "month";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#FFCC2980";
    lineSeries.propertyFields.fill = "#FFCC2980";
    lineSeries.stroke = am4core.color("#FFCC2980");
    lineSeries.fill = am4core.color("#FFCC2980");


    lineSeries.propertyFields.strokeDasharray = "#FFCC2980";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.fill = am4core.color("#FFCC2980");
    bullet.circle.strokeWidth = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

});
    ///////////////////////////////////////////////////////////////////////
    // Monthly Unpaid Job End
    //////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////
    // Yearly Unpaid Job Start
    //////////////////////////////////////////////////////////////////////
    am4core.ready(function() {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

    var chart = am4core.create("totalUnpaidJobs3", am4charts.XYChart);

    var data = [];

    chart.data = [{"year" : "2020", "jobs" : "601", "lineColor" : chart.colors.next()},{"year" : "2021", "jobs" : "1498", "lineColor" : chart.colors.next()}];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "year";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "jobs";
    lineSeries.tooltipText = "jobs: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "#FFCC2980";
    lineSeries.propertyFields.fill = "#FFCC2980";
    lineSeries.stroke = am4core.color("#FFCC2980");
    lineSeries.fill = am4core.color("#FFCC2980");


    lineSeries.propertyFields.strokeDasharray = "#FFCC2980";



    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.fill = am4core.color("#FFCC2980");
    bullet.circle.strokeWidth = 1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

});
    ///////////////////////////////////////////////////////////////////////
    // Yearly Unpaid Job End
    //////////////////////////////////////////////////////////////////////



