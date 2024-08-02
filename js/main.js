//FAQ Accordin
document.addEventListener('DOMContentLoaded',()=>{
const faqConatainer = document.querySelector('.faq-content');
faqConatainer.addEventListener('click', (e)=>{
    const groupHeader = e.target.closest('.faq-group-header')
    if(!groupHeader) return;
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i')

    //Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus')

    //Toggle visiblity of body
    groupBody.classList.toggle('open');

    //close other open FAQ body
    const otherGroups = faqConatainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
        if(otherGroup!=group){
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');
            const otherGroupIcon = otherGroup.querySelector('.faq-group-header i');

            otherGroupBody.classList.remove('open');
            otherGroupIcon.classList.remove('fa-minus');
            otherGroupIcon.classList.add('fa-plus')
        }
    });
})
})
//Mobile Menu
document.addEventListener('DOMContentLoaded', ()=>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('active')
    })
})