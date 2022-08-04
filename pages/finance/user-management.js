function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var fname=document.getElementById("fname_row"+no);
 var lname=document.getElementById("lname_row"+no);
 var acc=document.getElementById("acc_row"+no);
 var branch=document.getElementById("branch_row"+no);
	
 var fname_data=fname.innerHTML;
 var lname_data=lname.innerHTML;
 var acc_data=acc.innerHTML;
 var branch_data=branch.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 lname.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 acc.innerHTML="<input type='text' id='acc_text"+no+"' value='"+acc_data+"'>";
 branch.innerHTML="<input type='text' id='branch_text"+no+"' value='"+branch_data+"'>";
}

function save_row(no)
{
 var fname_val=document.getElementById("fname_text"+no).value;
 var lname_val=document.getElementById("lname_text"+no).value;
 var acc_val=document.getElementById("acc_text"+no).value;
 var branch_val=document.getElementById("branch_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 document.getElementById("lname_row"+no).innerHTML=lname_val;
 document.getElementById("acc_row"+no).innerHTML=acc_val;
 document.getElementById("branch_row"+no).innerHTML=branch_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

// function add_row()
// {
//  var new_fname=document.getElementById("new_fname").value;
//  var new_lname=document.getElementById("new_lname").value;
//  var new_acc=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }