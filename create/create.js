import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

checkAuth();


const logoutButton = document.getElementById('logout');

    // get the name and family id from the form

    // use createBunny to create a bunny with this name and family id
const form = document.querySelector('.bunny-form');   
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const familyId = data.get('family-id');
    const name = data.get('bunny-name');
  
    await createBunny({
        family_id: familyId,
        name: name
        
    });
    form.reset();
    // location.replace('../families');
   
    console.log(createBunny);
});



window.addEventListener('load', async () => {
    // prevent default
    const selectElem = document.getElementById('family-id');
    const families = await getFamilies();
    for (let family of families) {
        const option = document.createElement('option');
        option.value = family.id;
        option.label = family.name;
        selectElem.append(option);
    }
});
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM

    // go get the families from supabase

    // for each family

    // create an option tag

    // set the option's value and text content

    // and append the option to the select



logoutButton.addEventListener('click', () => {
    logout();
});
