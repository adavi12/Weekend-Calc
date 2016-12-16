console.log('js sourced');

var employee = [];
var totalSalary = 0;
var annualSalary = 0;
var monthlySalary = annualSalary/12;

$( document).ready( function(){
  console.log('JQ');
  $('#btn').on('click',function(){

    var newEmployee = {
      firstName: $('#fName').val(),
      lastName: $('#lName').val(),
      jobTitle:$('#title').val(),
      idNumber:$('#idNum').val(),
      annualSalary: $('#salary').val()
    };
    console.log('adding:',newEmployee);
    console.log('Employee Array:', employee);

    //push newEmployee into employee array
    employee.push(newEmployee);

    for( var i = 0; i < employee.length; i++){
      console.log( Number(employee[i].annualSalary ));
      var monthlySalaryCost = (annualSalary += Number(employee[i].annualSalary)/12);
      $('#outputDiv').append(  "<div id = 'monthlySalary'>Monthly Salary Cost:"+monthlySalaryCost.toLocaleString('en-US', { style: 'currency', currency: 'USD' })+"</div>");
    }

    console.log("Monthly Salary Cost:", monthlySalary);



    //display employee
    $('#outputDiv').append (newEmployee.firstName + " " + newEmployee.lastName + " " );
    $('#outputDiv').append(newEmployee.jobTitle + " " + newEmployee.idNumber + " ");
    $('#outputDiv').append(newEmployee.annualSalary);


    $('#fName').val('');
    $('#lName').val('');
    $('#title').val('');
    $('#idNum').val('');
    $('#salary').val('');
  });
});
