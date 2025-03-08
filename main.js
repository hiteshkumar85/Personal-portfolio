let nev = document.querySelector('nav');
let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('nav ul li a');

window.onscroll = ()=>{
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop-200;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
    if (top>= offset && top < offset+height){
        links.forEach(link => {
            link.classList.remove('active');
            document.querySelector('nav ul li a[href*='+id+']').classList.add('active');
        })
    }    
    })

    let scroll = window.scrollY;
    if (scroll > 20){
        nev.classList.add('nav_scroll');
    }
    else{
        nev.classList.remove('nav_scroll')
    }

    showDetail()
}

            //  form validaton  
let userName = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let msg = document.querySelector('.textarea');

userName.onkeyup = ()=>{
    userName.value = userName.value.toUpperCase();
} 

document.querySelector('.submit').onclick=()=>{
    if (validationName() && validationEmail() && validationSubject() && validationMsg()){
        let showName = userName.value;
        userName.value = "";
        let showEmail = email.value;
        email.value = "";
        let showSubject = subject.value;
        subject.value = "";
        let  showMsg  = msg.value;
        msg.value = "";

        let total_data = "Name :  " + showName +"<br> Email :  "+ showEmail +"<br> Message is  :  "+showMsg;

        Email.send({
            SecureToken :"1871adee-5fc8-4aac-8c61-425e2cccff0c",
            To : "hiteshkumar853391@gmail.com",
            From : "hiteshkumar853391@gmail.com",
            Subject : showSubject,
            Body : total_data
        }).then(
                message => {
                    if(message == 'OK'){
                        swal("Successful", "Your message has been submitted", "success");
                    }
                    else{
                        swal("Something wrong", "Your message has not been submitted", "error");
                    }
                  }
                );

    }
}
                //  user name validation     
function validationName(){
    let nameError = document.querySelector('.errorName');
    const validName = /^[A-Z].{1,40}$/;
    if (userName.value.length == 0){
        nameError.innerHTML = "Name is required";
        return false
    }
    else if (!userName.value.match(validName)){
        nameError.innerHTML = "Enter the valid name";
        return false
    }
    nameError.innerHTML = "";
    return true
}
            //   email  validation     
function validationEmail(){
    let emailError = document.querySelector('.errorEmail');
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w.{2,3})+$/;
    if (email.value.length == 0){
        emailError.innerHTML = "Email is required";
        return false
    }
    else if (!email.value.match(validEmail)){
        emailError.innerHTML = "Enter the valid email";
        return false
    }
    emailError.innerHTML = "";
    return true
}
            //   subject  validatoin          
function validationSubject(){
    let subjectError = document.querySelector('.errorSubject');
    const validSubject = /^[A-Za-z].{5,30}$/;
    if (subject.value.length == 0){
        subjectError.innerHTML = "Subject is required";
        return false
    }
    else if (!subject.value.match(validSubject)){
        subjectError.innerHTML = "Enter the valid subject";
        return false
    }
    subjectError.innerHTML = "";
    return true
}
            //    message  validation       
function validationMsg(){
    let  msgError = document.querySelector('.errorMsg');
    if (msg.value.length < 20 ){
        msgError.innerHTML = "Message is required min(20)";
        return false
    }
    document.querySelector('#note').innerHTML="";
    msgError.innerHTML = "";
    return true
}
        //    code for speaking message        
document.querySelector('.logo').onclick = ()=>{
    let message = "Hi , my self hitesh kumar . I am a frontend developer . thankyou for visiting my portfolio"
    const utterance = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(utterance);

    let body = document.querySelector('body');
    body.classList.toggle('dark_mode');
}
        //  code for writing message in textarea by speaking
msg.onfocus = ()=>{
    document.querySelector('#note').innerHTML="Double click to write a spoken message in the message box";
}

msg.ondblclick=()=>{
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = (e)=>{
        console.log(e)
        msg.value = msg.value +" "+ e.results[0][0].transcript;
    }
    recognition.start();
}
        //   typing animation 
const textLoad = ()=>{
    setInterval(()=>{
        document.querySelector('.typing').textContent = "Freelancer";
    }, 5000);
    setInterval(()=>{
        document.querySelector('.typing').textContent = "Frontend Developer";
    }, 10000);
}
textLoad();

    //  about detail animation
let text = document.querySelector('.about_detail .paragraph');
let showText = "";
let word_array = text.textContent.split(" ");
for(i=0; i<word_array.length;i++){
    showText += `<p>${word_array[i]}</p>`;
}     
text.innerHTML = showText;
let pArray = document.querySelectorAll('.paragraph p');
function showDetail(){
    for(i=0;i<pArray.length;i++){
        if(pArray[i].parentElement.getBoundingClientRect().top < window.innerHeight){
            let {left,top} = pArray[i].getBoundingClientRect();
            top = top-(window.innerHeight*.9);
            let opacityValue = 1-((top*.05)+(left*0.005)) < 2 ? 0.2 : 1-((top*.01)+(left*0.001)).toFixed(3);
            opacityValue = opacityValue > 2 ? 2 : opacityValue.toFixed(3);
            pArray[i].style.opacity = opacityValue; 
        }
    }
}
    //       menu botton 
let menu_button =document.querySelector('.menu');
menu_button.onclick =()=>{
    menu_button.classList.toggle('toggle');
    document.querySelector('nav ul').classList.toggle('show_menu');
} 