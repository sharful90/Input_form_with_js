
   let fname=document.querySelector("#name");
   let mail=document.querySelector("#email");
   let age=document.querySelector("#age");
   let pass=document.querySelector("#pass");
   let re_pass=document.querySelector("#re_pass");
   let sub = document.querySelector("#Sign_up");
   
sub.addEventListener("click",function(e){
     e.preventDefault();
     
     if(fname.value === ""){
        fname.classList.add("pl");
        fname.setAttribute("placeholder","Name must be filled out!");       
     }
     if(mail.value === ""){
        mail.classList.add("pl");
        mail.setAttribute("placeholder","Email must be filled out!");
     }
     if(age.value ===""){
        age.classList.add("pl");
        age.setAttribute("placeholder","Age must be filled out!");
     }
     if(pass.value === ""){
        pass.classList.add("pl");
        pass.setAttribute("placeholder","Password must be filled out!");
     }
     if(re_pass.value ===""){
        re_pass.classList.add("pl");
        re_pass.setAttribute("placeholder","Re password must be filled out!");
     }if(!fname.value == "" && !mail.value == "" && !age.value =="" && !pass.value == "" && !re_pass.value ==""){
        alert("Thanks for your Register");
     }


});






// if(fname.value === "" && mail.value === "" && age.value ==="" && pass.value === "" && re_pass.value ===""){
//     fname.classList.add("pl");
//     mail.classList.add("pl");
//     age.classList.add("pl");
//     pass.classList.add("pl");
//     re_pass.classList.add("pl");
//     fname.setAttribute("placeholder","Name must be filled out!");
//     mail.setAttribute("placeholder","Email must be filled out!");
//     age.setAttribute("placeholder","Age must be filled out!");
//     pass.setAttribute("placeholder","Password must be filled out!");
//     re_pass.setAttribute("placeholder","Re password must be filled out!");
//  }else if(fname.value === "" && mail.value === "" && age.value ==="" && pass.value ===""){
//      fname.classList.add("pl");
//      mail.classList.add("pl");
//      age.classList.add("pl");
//      pass.classList.add("pl");
//      fname.setAttribute("placeholder","Name must be filled out!");
//      mail.setAttribute("placeholder","Email must be filled out!");
//      age.setAttribute("placeholder","Age must be filled out!");
//      pass.setAttribute("placeholder","Password must be filled out!");
//  }else if(fname.value === "" && mail.value === "" && age.value ==="" ){
//      fname.classList.add("pl");
//      mail.classList.add("pl");
//      age.classList.add("pl");
//      fname.setAttribute("placeholder","Name must be filled out!");
//      mail.setAttribute("placeholder","Email must be filled out!");
//      age.setAttribute("placeholder","Age must be filled out!");
//  }else if(fname.value === "" && mail.value === "" ){
//      fname.classList.add("pl");
//      mail.classList.add("pl");
//      fname.setAttribute("placeholder","Name must be filled out!");
//      mail.setAttribute("placeholder","Email must be filled out!");
//  }else if(fname.value === ""){
//      fname.classList.add("pl");
//      fname.setAttribute("placeholder","Name must be filled out!");
//  }else if(mail.value === "" && age.value ==="" && pass.value === "" && re_pass.value ===""){
//      mail.classList.add("pl");
//      age.classList.add("pl");
//      pass.classList.add("pl");
//      re_pass.classList.add("pl");
//      mail.setAttribute("placeholder","Email must be filled out!");
//      age.setAttribute("placeholder","Age must be filled out!");
//      pass.setAttribute("placeholder","Password must be filled out!");
//      re_pass.setAttribute("placeholder","Re password must be filled out!");
//  }else if(age.value ==="" && pass.value === "" && re_pass.value ===""){
//      age.classList.add("pl");
//      pass.classList.add("pl");
//      re_pass.classList.add("pl");
//      age.setAttribute("placeholder","Age must be filled out!");
//      pass.setAttribute("placeholder","Password must be filled out!");
//      re_pass.setAttribute("placeholder","Re password must be filled out!");
//  }else if(pass.value === "" && re_pass.value ===""){
//      pass.classList.add("pl");
//      re_pass.classList.add("pl");
//      pass.setAttribute("placeholder","Password must be filled out!");
//      re_pass.setAttribute("placeholder","Re password must be filled out!");
//  }else if(re_pass.value ===""){
//      re_pass.classList.add("pl");
//      re_pass.setAttribute("placeholder","Re password must be filled out!");

//  }else if(fname.value === "" && re_pass.value ===""){
//      re_pass.classList.add("pl");
//      re_pass.setAttribute("placeholder","Re password must be filled out!");
//  }else{
//      alert("Thanks for your Register");
//  }
