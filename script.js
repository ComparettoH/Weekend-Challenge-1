
$(document).ready(onReady);

// establish a place to store employee annual Salary information
let employeeSalary = 0

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
}
//Function removes employee information from table
function deleteEmployee (){
  // console.log('In deleteEmployee')
  $(this).parent().parent().remove()
}

//Function that calcs employee monthly income and than adds all to get total monthly expenses
// function totalMonthly (event){
//   event.preventDefault();
// const annualSalaryInput = $('#annualSalary').append();
// console.log('annualSalary text:', annualSalaryInput)
// }

