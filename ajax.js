function ajax(){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange= function(){

        if(xhr.readystate == 4 && xhr.status == 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
             table(response);
        }         
    };
    xhr.open("GET","grocery.json",true);
    xhr.send();

}
function table(obj){
    document.getElementById("things").style.display="none";
    let item = obj.grocery;
    let table = "<thead><tr><th>sl.no</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes<th/></tr></thead>"
    for(let i=0;i<item.length;i++)
    {
        table+="<tr>";
        table+="<td>"+item[i].Serialno+"</td><td>"+item[i].Name+"</td><td>"+item[i].Quantity+"</td><td>"+item[i].Unit+"</td><td>"+item[i].Department+"</td><td>"+item[i].Notes+"</td>";
        table="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;


}