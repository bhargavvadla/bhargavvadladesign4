// ----------------------------
        //Left Navbar
// ----------------------------

let navItems = document.getElementsByClassName("nav_item");
let navMenu= document.getElementById("navMenu");
function showTab(e){
    let navItem = e.target;
    
    let tabName = navItem.classList.value;
    tabName = tabName.slice(9, tabName.length) + "Tab";
    let tab = document.getElementById(tabName);
    
    let mainTabs = document.getElementsByClassName("main_tabs");
    for(let i=0;i<mainTabs.length;i++)
        mainTabs[i].classList.remove("tab_active");
    for(let i=0;i<navItems.length;i++)
        navItems[i].classList.remove("nav_active");

    tab.classList.add("tab_active");
    navItem.classList.add("nav_active");

}

for(let i=0;i<navItems.length;i++){
    navItems[i].addEventListener("click", showTab);
}


// ----------------------------
            // Like
// ----------------------------
let cardHeartIcons = document.getElementsByClassName("card_heart_icon");
function addLike(e){
    let heartIcon = e.target;
    heartIcon.classList.toggle("add_like");
}
for(let i=0;i<cardHeartIcons.length;i++)
    cardHeartIcons[i].addEventListener("click", addLike);