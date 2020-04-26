



const weatherform=document.querySelector('form')
const searchElement=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

// messageOne.textContent=''

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=searchElement.value
    messageOne.textContent='loading...'
    messageTwo.textContent=''
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
          messageOne.textContent=data.error;
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
    })

})
})