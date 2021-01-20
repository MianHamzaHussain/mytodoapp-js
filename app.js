let data=[];
            
let getData=()=>{
  let tdata=``;
  data.map((v,i)=>{
      tdata+=`<tr><td>${v.da}</td><td>${v.ti}</td><td>${v.de}</td> <td> 
          <button class="btn btn-danger" onclick="del(${i})"> delete </button> 
          <button class="btn btn-primary" onclick="edit(${i})"> edit </button></td> </td></tr>` ;

  }
  )
 return tdata;
}
let display= ()=>{
    document.getElementById('ddata').innerHTML=getData();
}
let submit_form=document.getElementById("form");
  submit_form.onsubmit=function(e)
  {      e.preventDefault();
    let date=  document.getElementById('date').value;
    let title=  document.getElementById('title').value;
    let des=  document.getElementById('des').value;
    let action=document.getElementById('action').value;
    if(date!==''&&title!==''&&des!==''){
        if(action=="insert"){
    let obj={
            da:date,
            ti:title,
            de:des
        }
            data.push(obj);   
    }
        else{
          let updateref=  data[action];
          updateref.da=date;
          updateref.ti=title;
          updateref.de=des;
         document.getElementById('action').value="insert";
           document.getElementById('sb').value="Add";

        }
     
        submit_form.reset();
         display();
 
    }

 
  

  }
 let del=(r)=>{
     data.splice(r,1);
     display();
  
 }
 let edit=(r)=>{
      document.getElementById('date').value=data[r].da;
      document.getElementById('title').value=data[r].ti;
      document.getElementById('des').value=data[r].de;
      document.getElementById('action').value=r;
      document.getElementById('sb').value="Edit";
  
 }