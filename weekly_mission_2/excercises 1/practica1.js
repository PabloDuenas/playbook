const repo = {
 name: "LaunchX",
    author: "PabloDuenas",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

//segundo 


const Issue = {
    tittle: "LaunchX",
    repositoryNameAssociated: "PabloDuenas",
    status: "true",
    numberOfComments: "199",
    lables: "54",
    author: "Gallomkn",
    DateCreated: "12-02-22",
    LastUpdated: "29-09-22",
    getTittleAndAuthor: function () {
        return `This repository ${this.tittle} was created by ${this.author}`
    },
    getGeneralInfo: function () {
        return this.DateCreated + this.LastUpdated
    }




}

console.log("Nombre de los contribuidores:" + Issue.repositoryNameAssociated)
console.log(Issue.getGeneralInfo())
console.log(Issue.getTittleAndAuthor()) 
