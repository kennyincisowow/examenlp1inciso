function mostrarInicio(){
    document.getElementById('inicio').style.display = 'block';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}
function mostrarVentas(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'block';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}
function mostrarReportes(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'block';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none';   
}

function mostrarClientes(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'block';
    document.getElementById('productos').style.display = 'none';   
}

function mostrarProductos(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'block';   
}
function mostrarCliente(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'block';
    document.getElementById('productos').style.display = 'none';  
}
function guardarCliente(){
       var holaa=document.getElementById("hola").value;
   var ddd= document.getElementById("Clientee").value = holaa; 

    if(ddd ==""){
        alert("vacio");
    } else{
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'block';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'none'; 
    }
   
}
function mostrarProducto(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('ventas').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('clientes').style.display = 'none';
    document.getElementById('productos').style.display = 'block';  
}
function guardarProducto(){
    
    var p1=document.getElementById("holap").value;
    var p2=document.getElementById("holap2").value;
    var p3=document.getElementById("holap3").value;
   
    var dddd= document.getElementById("Productoo").value = p1; 
    

    if(dddd ==""){
        alert("vacio");
    }else{
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('ventas').style.display = 'block';
        document.getElementById('reportes').style.display = 'none';
        document.getElementById('clientes').style.display = 'none';
        document.getElementById('productos').style.display = 'none'; 
        document.getElementById("Precioo").value = p2;
        document.getElementById("Cantidadd").value = p3;
    }
}
var tablaR= document.getElementById("tablaReportes");
i=1;
function enviarP(){
   
    var pro =document.getElementById("Productoo").value;
    var prec =document.getElementById("Precioo").value;
    var cant =document.getElementById("Cantidadd").value;
    var contar = tablaR.rows.length;
    var row = tablaR.insertRow(contar);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var str1 = "V00";
    var str2 = i++;
    console.log(parseInt(str2));
    var res = str1.concat(i);
    cell1.innerHTML= res;
    cell2.innerHTML= pro;
    cell3.innerHTML= prec;
    cell4.innerHTML= cant;
    cell5.innerHTML= parseInt(prec*cant);
    cell6.innerHTML= '<img src="img/delete.png" onclick="eliminarP(this)"></img>';
    console.log(contar);
    if(pro ==""){
        alert("vacio");
    }else{
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('ventas').style.display = 'none';
        document.getElementById('reportes').style.display = 'block';
        document.getElementById('clientes').style.display = 'none';
        document.getElementById('productos').style.display = 'none'; 
    }
}
function eliminarP(p){
    if(confirm("¿Desea Eliminar?...")){
        var i = p.parentNode.parentNode.rowIndex;
        console.log(i);
        tablaR.deleteRow(i);
    }else{
        alert("No se pudo eliminar...!!!")
    }
}




