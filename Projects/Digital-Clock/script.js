const clock = document.getElementById('clock')
const reload = document.getElementById('reload')



setInterval(() => {
    let date = new Date()
    // console.log(date);
    clock.innerHTML = date.toLocaleTimeString()
}, (1000));
