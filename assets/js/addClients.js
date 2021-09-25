
    var selected = [];
    $('#importBtn').click(function() {
    $('#fileUpload').click();
});
    $('#fileUpload').on('change', function() {
    var fileUpload = $("#fileUpload")[0];
    //Validate whether File is valid Excel file.
    var regex = /^.*\.(xlsx|xls)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof(FileReader) != "undefined") {
    var reader = new FileReader();

    //For Browsers other than IE.
    if (reader.readAsBinaryString) {
    reader.onload = function(e) {
    ProcessExcel(e.target.result);
};
    reader.readAsBinaryString(fileUpload.files[0]);
} else {
    //For IE Browser.
    reader.onload = function(e) {
    var data = "";
    var bytes = new Uint8Array(e.target.result);
    for (var i = 0; i < bytes.byteLength; i++) {
    data += String.fromCharCode(bytes[i]);
}
    ProcessExcel(data);
};
    reader.readAsArrayBuffer(fileUpload.files[0]);
}
} else {
    alert("This browser does not support HTML5.");
}
} else {
    alert("Please upload a valid Excel file.");
}
});

    function ProcessExcel(data) {
    debugger;
    var workbook = XLSX.read(data, {
    type: 'binary'
});

    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

    var formPost = [];
    // var brands =[];

    for (var i = 0; i < excelRows.length; i++) {
    var postForm_obj = {
    first_name: excelRows[i]["First Name"],
    last_name: excelRows[i]["Last Name"],
    company: excelRows[i]["Company"],
    sburbs: excelRows[i]["City"],
    work_history: excelRows[i]["Old Work Database"],
    month_due: excelRows[i]["Month Due"],
    year_due: excelRows[i]["Year Due"],
    address: excelRows[i]["Address"],
    email: excelRows[i]["E-mail Address"],
    mobile_no: excelRows[i]["Mobile Phone"],
    // spare_text_box_1: excelRows[i]["Spare Text Box #1"],
    // spare_text_box_2: excelRows[i]["Spare Text Box #2"],
    old_client: 1,

    is_active: 1
};
    // var brand_obj={
    //     sku:excelRows[i].SKU,
    //     brand_name:excelRows[i].Brand
    // }
    // brands.push(brand_obj);
    formPost.push(postForm_obj);
}
    debugger;
    $.post("allClients.html/client_import", {
    input_form: JSON.stringify(formPost)
},
    function(data) {
    var res = jQuery.parseJSON(data);
    if (res.success) {
    window.location.reload();
}
});
}

    function getMonthFromString(mon) {

    var d = Date.parse(mon + "1, 2012");
    if (!isNaN(d)) {
    return new Date(d).getMonth() + 1;
}
    return -1;
}
    function selectall(attr){
    debugger;
    if (attr.checked) {
    // Iterate each checkbox
    $(':checkbox').each(function() {
    var id1 = $(this).attr("id");
    if (id1 != "select-all") {
    selected.push(id1);
}
    this.checked = true;
});
} else {
    $(':checkbox').each(function() {
    this.checked = false;
});
    selected = [];
}
}
    $('.all-check').click(function(event) {
    debugger;
    if (this.checked) {
    // Iterate each checkbox
    $(':checkbox').each(function() {
    var id1 = $(this).attr("id");
    if (id1 != "select-all") {
    selected.push(id1);
}
    this.checked = true;
});
} else {
    $(':checkbox').each(function() {
    this.checked = false;
});
    selected = [];
}
});
    $(".check-box").change(function() {
    debugger;
    var id = $(this).attr("id");
    if ($(this).is(':checked')) {
    selected.push(id);
} else {
    for (var i = 0; i < selected.length; i++) {
    if (selected[i] === id) {
    selected.splice(i, 1);
    i--;
}
}
}

});
    function hi(attr){
    debugger;
    var id = $(attr).attr("id");
    if ($(attr).is(':checked')) {
    selected.push(id);
} else {
    for (var i = 0; i < selected.length; i++) {
    if (selected[i] === id) {
    selected.splice(i, 1);
    i--;
}
}
}
}
    /* // $('.check-box').bind('change',function(){
    // 	debugger;
    // });
    */
    function del() {
    if (selected.length === 0) {
    swal({
    title: "Please Select any Record First",
    timer: 2e3,
    showConfirmButton: !0
});
    return;
}
    swal({
    title: "Are you sure to delete these clients ?",
    text: "You will not be able to reverse this action !!",
    type: "warning",
    showCancelButton: !0,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    closeOnConfirm: !1,
    closeOnCancel: !1
},
    function(isConfirm) {
    if (isConfirm) {
    swal({
    title: 'Done !!',
    text: "Success",
    type: "success",
    showConfirmButton: false
});
    setTimeout(
    function() {
    $.post("https://stage.apc-crm.com/client/del", {
    input_form: JSON.stringify(selected)
},
    function(data) {
    var res = jQuery.parseJSON(data);
    if (res.success) {
    window.location.reload();
}
});
}, 1000);
} else {
    swal("Cancelled !!", "Hey, your record is not changed!!", "error");
}
});
}

    function rpo() {
    if (selected.length === 0) {
    swal({
    title: "Please Select any Record First",
    timer: 2e3,
    showConfirmButton: !0
});
    return;
}
    swal({
    title: "Are you sure to mark these clients as rpo ?",
    text: "You will not be able to reverse this action !!",
    type: "warning",
    showCancelButton: !0,
    confirmButtonColor: "#75AA24",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    closeOnConfirm: !1,
    closeOnCancel: !1
},
    function(isConfirm) {
    if (isConfirm) {
    swal({
    title: 'Done !!',
    text: "Success",
    type: "success",
    showConfirmButton: false
});
    setTimeout(
    function() {
    $.post("https://stage.apc-crm.com/client/rpo", {
    input_form: JSON.stringify(selected)
},
    function(data) {
    var res = jQuery.parseJSON(data);
    if (res.success) {
    window.location.reload();
}
});
}, 1000);
} else {
    swal("Cancelled !!", "Hey, your record is not changed!!", "error");
}
});
}
