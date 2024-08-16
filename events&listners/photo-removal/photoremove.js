const images = document.querySelector('#images')

images.addEventListener('click',(e)=>{
    // console.log(e.target.parentNode);  //for accessing the parent node
    if(e.target.tagName === 'IMG'){
    let removeit = e.target.parentNode
    removeit.remove();
    }
},false)