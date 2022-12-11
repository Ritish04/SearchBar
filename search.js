const search=()=>{
    // getting values from user stored in search box
    const searchBox =document.getElementById("search-item").value.toUpperCase()
    // accessing product list
    const storeItems=document.getElementById("product-list")
    // accessing productname
    const product=document.querySelectorAll(".product")
    const pname=document.getElementsByTagName("h2")

    for(var i=0;i<pname.length;i++){
        // accessing h2 in match var
        let match=product[i].getElementsByTagName('h2')[0];

        if(match){
            // usser value===h2 
            let textValue=match.textContent || match .innerHTML
       
    //    uppercase and counting index of user value
            if(textValue.toUpperCase().indexOf(searchBox)>-1){
                    product[i].style.display="";
            }else{
                product[i].style.display="none";
                // remove products if no match
            }
       
        }
    }

}