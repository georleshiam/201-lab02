let nickName = prompt("My nick name is Myrrh");
console.log(nickName);
let threejobs = prompt("I worked 3 jobs at once. true or false?");
console.log(threejobs);
let hrs = prompt("I worked 12 hours for 6 to 7 days. true or false?");
console.log(hrs);
let rugby = prompt("I played rugby in highschool. true or false?");
console.log(rugby);
let mca = prompt("First year of college was shut down. true or false?");
console.log(mca);

if (threejobs + hrs + rugby + mca == true) {
  alert("Good job");
}
