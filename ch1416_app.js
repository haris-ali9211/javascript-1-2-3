// 1. Declare an empty array using JS literal notation to store student names in future.
// var name=[];

// 2. Declare an empty array using JS literal notation to store student names in future.
// var name=[];

// 3. Declare and initialize a strings array.
// var name=[];
// name=["ali","haris","omer"];

// 4. Declare and initialize a numbers array.
// var num=[];
// num=[9211,786,521];

// 5. Declare and initialize a boolean array.
// var myarr=[];
// var val=2;
// for(var i=0 ;i<=val ; i++){
//     myArr.push(false);
// }
// alert(myarr);

// 6. Declare and initialize a mixed array.
// var mix=[];
// mix=[9,"ali","haris"];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
// var edu=[ "SSC", "HSC", "BCS", "BS", 'BCOM', "MS", "M.Phil" , "PhD"]
// document.write("Qualification :");
// document.write(i+") "+edu[i]);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students 

// var name=[],mark=[];
// name=prompt("enter your name")
// mark=prompt("enter your marks which you obtain number")

// var per1=((mark1/500)*100);
// var per2=((mark2/500)*100);
// var per3=((mark3/500)*100);

// document.write("MARKS SHEET")

// document.write("Score of "+name1+" is "+mark1+" . persentage : "+per1+"%");
// document.write("Score of "+name2+" is "+mark2+" . persentage : "+per2+"%");
// document.write("Score of "+name3+" is "+mark3+" . persentage : "+per3+"%");


student.pop() last arry ke vale koo delet kar de ga
student.push() aik aur vale add hoo gay geee last array

student.shift() oppsite of pop
student.unshift("ali","wow") add element at first

student.splice(start{1},remove{2})

var copystudent =student.slice(start{1} length{4})
  
// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var arr =[79,63,98,82,95,74];
// document.write("Scores of Students: "+arr+"<br>");
// var otherstudent= arr.sort();
// document.write("Ordered Scores of Students: "+otherstudent);

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:"+"<br>"+city+"<br>"+"<br>");
// var selectedcities= city.slice(2,4);
// document.write("Selected Cities list:"+"<br>"+selectedcities);

// 12. Write a program to create a single string from the below mentioned array:
// var arr = ["This ", "is ","my ","cat"];
// var stringarray= arr.join();
// document.write("String:"+"<br>"+stringarray); 

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
// var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
// for(var i=0; i<arr.length; i++){
//    document.write("<br>"+"Out:"+"<br>"+arr[i]);
// }


// 14.Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
// var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
// for(var i=arr.length-1; i>=0; i--){
//    document.write("<br>"+"Out:"+"<br>"+arr[i]);
// }