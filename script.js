
$(document).ready(onReady);

// establish a place to store employee annual Salary information
let employeeSalary = [];

function onReady() {
  console.log('jQuery still works! What a gosh darn relief.');
  // Handlers
  $("#submitButton").on('click', handleSubmit)
//   $("#submitButton").on('click', totalMonthly)
  $("#table-body").on('click', '.deleteButton', deleteEmployee);
}

// function pulls form submitted information and displays it on the DOM created table
function handleSubmit(event) {
  event.preventDefault();
  // console.log("inside handleSubmit")
  //get first name entry
  const firstNameText = $('#firstName').val();
  // console.log('affirmText')
  //get last name entry
  const lastNameText = $('#lastName').val();
  // //get employee ID entry
  // console.log('lastName')
  const employeeIDText = $('#employeeID').val();
  // //get job title entry
  // console.log('employeeID')
  const jobTitleText = $('#jobTitle').val();
  //get annual salary entry
  // console.log('jobTitle')
  const annualSalaryText = $('#annualSalary').val();
  console.log(annualSalaryText);
  // console.log(Number(annualSalaryText));
  //puts submitted form info in table
  $('#table-body').append(`
  <tr>
    <td>${firstNameText}</td>
    <td>${lastNameText}</td>
    <td>${employeeIDText}</td>
    <td>${jobTitleText}</td>
    <td>${annualSalaryText}</td>
    <td><button class="deleteButton">🗑️ Delete</button></td>
    </tr>
  `)

  // clears form by setting value to empty string
  $("#firstName").val("")
  $("#lastName").val("")
  $("#employeeID").val("")
  $("#jobTitle").val("")
  $("#annualSalary").val("")

    // create formula that pushes # to employeeSalary
let employeeMonthlySalary = Number(annualSalaryText)/12;
if (employeeMonthlySalary > 0){
    employeeSalary.push(employeeMonthlySalary)
    console.log(employeeMonthlySalary)
}

let totalMonthly = 0;
// create formula that adds up array of employeeSalary
for (let i = 0; i < employeeSalary.length; i++){
    totalMonthly += parseInt(employeeSalary[i]);
} if (totalMonthly > 12000){
    let overBudget = document.querySelector("#totalFunds");
    overBudget.style.backgroundColor = "Red" ;
}
let DollartotalMonthly = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(totalMonthly);
console.log(DollartotalMonthly)
// Display salary total in total monthly
$('#totalFunds').text(DollartotalMonthly)

}



//Function removes employee information from table
function deleteEmployee (){
  // console.log('In deleteEmployee')
  $(this).parent().parent().remove()
}