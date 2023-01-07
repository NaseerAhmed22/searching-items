const search = ()=>{
    // get input
    const input = document.querySelector("#search-item").value.toUpperCase();
    const itemDiv = document.querySelector(".container");
    const product = document.querySelectorAll(".product");
    const ProductName = itemDiv.getElementsByTagName("h2");

    for (let i = 0; i < ProductName.length; i++) {
        
        let same = product[i].getElementsByTagName("h2")[0];

        if(same){
            // for matching
            let textValue = same.textContent || same.innHTML;
            if(textValue.toUpperCase().indexOf(input) > - 1){
                product[i].style.display = "";
            } else {

                product[i].style.display = "none"
            }
          
        }
    }
}




