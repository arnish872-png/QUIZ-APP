var totalStd = document.getElementById("totalstd")
var totalCourse = document.getElementById("totalcourse")
var totalquiz = document.getElementById("totalquiz")

async function GetAllUsers() {

    await firebase.database().ref("user").get().then((db) => {
        console.log(db.val())
        var data = Object.values(db.val())
        console.log(data.length)
        totalStd.innerText=data.length
    })
        .catch((e) => {
            console.log(e)
        })

}
async function getAllCourse() {
    await firebase.database().ref("course").get()
    .then((db)=>{
        var course = Object.values(db.val())
        totalCourse.innerText= course.length
        console.log(course.length);
        
    })
    .catch((e)=>{
        console.log(e)
    })
}
const getAllQuiz=async()=>{
    await firebase.database().ref("Quiz").get()
    .then((db)=>{
        let quizs = Object.values(db.val())
        totalquiz.innerText= quizs.length
        console.log( quizs.length)
    })
}
getAllCourse( )
GetAllUsers()
getAllQuiz()