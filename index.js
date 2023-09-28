function switchClass()
{
    const nav=document.querySelectorAll(".topnav");
    nav.forEach(nav => nav.classList.toggle('show-menu'));
}
document.querySelector("#menu-icon").addEventListener('click', switchClass);