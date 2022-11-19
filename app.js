const myRepoURL = 'https://api.github.com/users/dolijonviter17/repos';
const allMyRepo = []
const nameText = document.querySelector(".name-text")
const githubRepositoryRes = [];
// console.log();
// Create element:
// const currentDiv = 
// console.log('currentDiv',currentDiv);
async function addNewElement() {
    const repositoryRes = await (await fetch(myRepoURL)).json();
    console.log(repositoryRes);
    for (let i = 0; i < repositoryRes.length; i++) {
        var desc = repositoryRes[i].description;
        console.log(desc);
        var projectEl = document.getElementById("project-wrappers")
        var newDoc = document.createElement("div");
        newDoc.className = "project-items"
        newDoc.innerHTML = `<a target="_blank" href=${repositoryRes[i].html_url}><h3>${desc}</h3></a>

        `;
        projectEl.append(newDoc)

        
    }



console.log('project', projectEl);

}
addNewElement()
// function newAll() {
//     let newDoc = document.createElement("p");
// newDoc.createTextNode = 'this is html document';
// document.getElementById("project-wrappers").appendChild(newDoc)
// }



const strText = nameText.textContent;
const splitText = strText.split("")
nameText.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    nameText.innerHTML += "<span>" + splitText[i] + "</span>"
    
}

let char = 0;
let timer = setInterval(onTick, 50)

function onTick() {
    const span = nameText.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

 async function getMyProject() {
    const repositoryRes = await (await fetch(myRepoURL)).json();
    console.log(repositoryRes);




}


// const bodyData = () => {
//     return {
//         githubRepositoryRes : {},
//         async  retrieveRepos() {
//             // this.githubRepositoryRes = await (await fetch(myRepoURL)).json();
//             fetch(myRepoURL).then( async  function (response) {
// 	// The API call was successful!
//             this.githubRepositoryRes = await response.json()
//                 // console.log('success!', response.json());
//                 //  this.githubRepositoryRes = await response.json();
//             }).catch(function (err) {
//                 // There was an error
//                 console.warn('Something went wrong.', err);
//             });

//                     }
//                 }
// }
// console.log('githubRepositoryRes',bodyData().githubRepositoryRes);
