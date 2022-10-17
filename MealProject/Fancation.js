const searchBtn =document.getElementById('search-btn');
const mealList= document.getElementById('meal');
const mealDetialsContentt=document.querySelector('meal-details-content');
const recipeCloseBtn=document.getElementById('receipe-close-btn');



searchBtn.addEventListener('click', getMeallist);
 

function getMeallist(){
    
   let searhInputText=document.getElementById('sreach-input').Value.trim();
     console.log(searhInputText);
//     fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=egg').then(response=> response.json)
//     .then(date=>
//         {
//             console.log(date);
//         }
//         )
 }