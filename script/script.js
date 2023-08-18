// Tabs
const tabsBtns = document.querySelectorAll(".tabs__nav button");
// console.log(tabsBtns);
const tabsItems = document.querySelectorAll(".tabs__item");
// console.log(tabsItems);

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("active"));
}

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((elem, index) => elem.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}
)); 