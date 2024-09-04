let share = document.querySelector('#pic2');
let displayShare = document.querySelector('.share');
let personna = document.querySelector('.person');
let main = document.querySelector('.main');
let overall = document.querySelector('#overall-container');
let triangleDown = document.querySelector('.down-triangle');

function reveal(){
    personna.style.display = 'none';
    main.style.paddingBottom = '0';
    displayShare.style.display = 'flex';
}

share.addEventListener('click', (e) => {
    let overallWidth = parseInt(window.getComputedStyle(overall).width);
    
    if (overallWidth > 679) {
        displayShare.style.display = 'flex';
        triangleDown.style.display = 'block';
    } 
    else {
        reveal();
    }
});
