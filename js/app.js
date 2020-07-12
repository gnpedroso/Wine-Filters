(function(){
    
    //search by clicking
    let $tabs = document.querySelectorAll('.tabs_wrap ul li');
    
   let $reserva = document.querySelectorAll('.reserva')
   let $granReserva = document.querySelectorAll('.granReserva')
   let $specialCollection = document.querySelectorAll('.specialCollection')
   let $all = document.querySelectorAll('.list-unstyled')

   $tabs.forEach(tabs =>{
       tabs.addEventListener('click', function(){
           $tabs.forEach(tabs =>{
               tabs.classList.remove('active')
           })
        
        tabs.classList.add('active');
        
        const tabVal = tabs.getAttribute('data-tabs');
        

        $all.forEach(all =>{
            all.style.display = 'none'
        })

        $reserva.forEach(reserva =>{
            if(tabVal === 'reserva'){
                reserva.style.display = 'block'
            }
        })

        $granReserva.forEach(granReserva =>{
            if(tabVal === 'granReserva'){
                granReserva.style.display = 'block'
            }
        })

        $specialCollection.forEach(specialCollection =>{
            if(tabVal === 'specialCollection'){
                specialCollection.style.display = 'block'
            }
        })

        $all.forEach(all => {
            if(tabVal === 'all'){
                all.style.display = 'block'
            }
        })

       })
   })
  
  //search by typing

   const $searchBar = document.getElementById('searchBar')
   const $ul = document.getElementById('containerWines')

   $searchBar.addEventListener('keyup', (e) =>{
       const txt = e.target.value.toLowerCase();
       const wines = $ul.getElementsByTagName('li')

       Array.from(wines).forEach( wine => {
           const type = wine.dataset.item
           
           if(type.toLowerCase().indexOf(txt) != -1){
               wine.style.display = 'block'
           } else {
               wine.style.display = 'none'
           }
       })
       
    
    })



})();





   
