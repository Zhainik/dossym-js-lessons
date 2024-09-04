const ul = document.querySelector('ul');
if (ul){
    ul.classList.add('list');
}

const lis = document.querySelectorAll('ul li');
lis.forEach((li, index)=> {
    if(index % 2 === 0){
        li.classList.add('item');
    }
});

const links = document.querySelectorAll('a');
links.forEach(links => {
    links.classList.add('custom-link');
})