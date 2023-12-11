/* scroll */


const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Bar menu
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const menuLink = document.querySelectorAll('.menu__link');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "./img/close.svg";
		document.body.classList.toggle('_lick');
	} else {
		navBtnImg.src = "./img/bar_black.svg";
		document.body.classList.toggle('_lick');
	}
};




//close menu after click link

//для закрытия меню при нажатии на ссылку

const links = Array.from(menuLink);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
	navBtnImg.src = "./img/bar_black.svg";
  nav.classList.remove("open");
  body.classList.remove("noscroll");
}