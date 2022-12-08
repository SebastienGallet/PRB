import serversList from "./serveurs.json" assert {type: 'json'};


const choixDuServ = document.querySelector('#serveurs-list');

const server = document.querySelector('#serveur')

for (let i = 0; i < serversList.length; i++) {
    choixDuServ.innerHTML+='<option value='+serversList[i].index+'>'+serversList[i].id+'</option>'
}


choixDuServ.addEventListener('change', () => {
const oneServ = choixDuServ.value;
if (oneServ === 0) {
    console.log(oneServ)
    server.innerHTML = ""
} else {
    afficherTracker()
}
})






choixDuServ.addEventListener('change',resetTracker);
choixDuServ.addEventListener('change',afficherTracker);

function afficherTracker() {
    const oneServ = choixDuServ.value;
    server.innerHTML+='<iframe src='+serversList[oneServ].link+'></iframe>' 
}

function resetTracker() {
    server.innerHTML = ""
}