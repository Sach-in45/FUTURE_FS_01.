// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburgr').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebar');
//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//     document.querySelector('.ham').style.display = 'inline'
//     document.querySelector('.cross').style.display = 'none'

//     }
//     else{
//         document.querySelector('.ham').style.display = 'none'
//         setTimeout(() => {
//             document.querySelector('.cross').style.display = 'inline'
//         }, 300);
//     }

// })
document.querySelector('.ham').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
});
document.querySelector('.cross').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');
});

if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'

    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 300);
    }