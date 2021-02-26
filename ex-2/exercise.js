// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function fortune(partner_name, number_children, geographic_location, job_title){
    this.partner_name = partner_name;
    this.number_children = number_children;
    this.geographic_location = geographic_location;
    this.job_title = job_title;

}

let p1 = new fortune("Yusuf",3,"Torino","Secretary");
window.alert("You will be a"+" "+p1.job_title +" "+ "in"+ " "+ p1.geographic_location+","  +"and married to"+" "+
p1.partner_name +" "+ "with" +" "+p1.number_children+ " "+"kids");

let p2 = new fortune("Gian",2,"roma","Computer programer");
window.alert("You will be a"+" "+p2.job_title +" "+ "in"+ " "+ p2.geographic_location+","  +"and married to"+" "+
p2.partner_name +" "+ "with" +" "+p2.number_children+ " "+"kids");

let p3 = new fortune("Omar",4,"Venice","Accountant");
window.alert("You will be a"+" "+p3.job_title +" "+ "in"+ " "+ p3.geographic_location+","  +"and married to"+" "+
p3.partner_name +" "+ "with" +" "+p3.number_children+ " "+"kids");
