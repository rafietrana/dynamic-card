const loadPhone = async(values, isShowAll) => {
    const response = await   fetch(`https://openapi.programming-hero.com/api/phones?search=${values}`)
    const data = await response.json();
     
    const phone = data.data;
 
console.log(phone.length);
   if(phone.length > 12){
          const collBtnId = document.getElementById('showAll-btn');
          collBtnId.classList.remove('hidden');
   }
   else{
    const collBtnId = document.getElementById('showAll-btn');
    collBtnId.classList.add('hidden');
   }
  
   const phoneFix = phone.slice(0, 12);
   
 
    loadObjData(phoneFix, isShowAll)

     
      
}


const loadObjData = (obj, isShowAll) =>{
    const collPerant = document.getElementById('phone-container');
    collPerant.innerHTML = '';
         obj.forEach(element => {
            console.log(element);
            const dynamicDiv = document.createElement('div');
            dynamicDiv.classList = `card  bg-base-100 shadow-xl`;
            dynamicDiv.innerHTML = `

            <figure class="px-10 pt-10">
            <img src="${element.image}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${element.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button onclick =" showClicked('${element.slug}')" class="btn btn-primary">show Details</button>
            </div>
          </div>
            `;
            collPerant.appendChild(dynamicDiv);


         });


         
         
         spinnerWork(false);



  

         console.log('isShowAllValue is', isShowAll);

}

const showClicked = async(id) =>{
       console.log('different id is', id);
      //  data obj load
      const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      const data = await res.json();
      console.log(data);
    
}


const btnClicked = (isShowAll) =>{
      const collPerantId = document.getElementById('value-perant');
      const  innerValue = collPerantId.value ;
      spinnerWork(true);
      loadPhone(innerValue, isShowAll);
    

}

const spinnerWork =(valuese)=>{
    const collSpinnerId = document.getElementById('spinner');
   if(valuese === true){
      collSpinnerId.classList.remove('hidden');
   }
   else{
    collSpinnerId.classList.add('hidden')
   }
}


const clickShowAll =()=>{
    btnClicked(true);
}
 
loadPhone();