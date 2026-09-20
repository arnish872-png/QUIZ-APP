var courseKey = "";
var quizList= document.getElementById("quizList")
async function getAllQuiz() {
    var loginUserId = localStorage.getItem("loginUser")
    await firebase.database().ref("user").child(loginUserId).get()
        .then((snap) => {
            courseKey = snap.val()["courseKey"]
            console.log(courseKey)
            getALlQuiz(courseKey)
        })

}
const getALlQuiz =async (courseKey) => {
    await  firebase.database().ref("Quiz").get().then((snap)=>{
        var db = snap.val()
        // console.log(db)
        const arr = Object.values(db)
        console.log(arr)
        arr.forEach((data)=>{
            if(data.coursekey==courseKey){
            console.log(data)
            quizList.innerHTML+=`
            <div class='card'>
            ${data.quizName}</div>
            `



            }
        })
    })
}

getAllQuiz()