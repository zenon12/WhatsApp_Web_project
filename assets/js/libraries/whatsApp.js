import { aside, closeCollapse, collapseItems, containerCollapse,
    subMenu, content, headerDetails, menuCollapse, menuMobile, openCollapse, 
    usersContent, usersData, openModal, modal, closeModal, overlay } from "./variable.js";
    
var currentUser ;

export const whatsApp={
    initUsers: ()=>{
        usersData.forEach(user => {
            const userItem=document.createElement("div") ;
            const userContent=`
            <div class="profile-picture">
            <img src=${user.url} alt="">
            </div>
            <div class="user-details">
            <div class="username">
                ${user.name}
            </div>
            <div class="message">
                ${user.lastMessage}
            </div>
            <div class="time absolute">${user.lastMessageDate}</div>
            </div>
            `
            userItem.className="user-info flex gap-10 relative aic" ;
            userItem.innerHTML=userContent ;
            userItem.onclick=()=>{
                whatsApp.handleChat(user) ;
                if (!currentUser) {
                    currentUser=userItem ;
                    currentUser.classList.add("active") ;
                }else{
                    currentUser.classList.remove("active") ;
                    currentUser=userItem ;
                    currentUser.classList.add("active") ;
                }
            } ;
            usersContent.appendChild(userItem) ;

        });

    },
    handleChat: (user)=>{

        headerDetails.innerHTML=`
        <div class="profile-picture">
            <img src=${user.url} alt="">
        </div>
        <div class="username">
           ${user.name}
        </div>
        `
        if (window.innerWidth <= 600){
            aside.className="none" ;
            content.style.display="flex" ;
        }

        if (window.getComputedStyle(content.children[1]).display === "none") {
            content.children[0].classList.add("none") ;
            content.children[1].classList.remove("none") ;
            content.style.border="none" ;
        }

        
        
    },
    initEvent: ()=>{
        menuMobile.onclick=()=>{
            aside.className="" ;
            content.style.display="none" ;
        }
        window.onresize=()=>{
            if (window.innerWidth > 600) {
                if (window.getComputedStyle(content).display ==="none") {
                    content.style.display="flex" ;
                }else{
                    aside.classList.remove("none") ;
                }
                
            }else{
                content.style.display="none" ;
                if (window.getComputedStyle(aside).display ==="none") {
                    aside.classList.remove("none") ;
                }
            }
        }
        //   ***** Sub Menu ******
        menuCollapse.onclick=whatsApp.toggleSubMenu ;
        //subMenu.onmouseleave=whatsApp.toggleSubMenu ;
        subMenu.onclick=whatsApp.toggleSubMenu ;
        //   ***** collapse ******
        collapseItems.forEach((collapseItem,index) => {
            openCollapse[index].onclick=()=>{
                whatsApp.removeCollapseClass(collapseItem) ;
            }
            closeCollapse[index].onclick=()=>{
                whatsApp.addCollapseClass(collapseItem) ;
            }
        });
        
        // ******* modal ***********
        openModal.onclick=whatsApp.toggleModal ;
        closeModal.onclick=whatsApp.toggleModal ;
    },
    toggleSubMenu:()=>{
        subMenu.classList.toggle("none") ; 
    },
    addCollapseClass:(collapseItem)=>{
        containerCollapse.classList.remove("animation-1") ;
        containerCollapse.classList.add("animation-2") ;
        setTimeout(()=>{
            collapseItem.classList.add("collapse") ;
        }, 1000) ;
    },
    removeCollapseClass:(collapseItem)=>{
        collapseItem.classList.remove("collapse") ;
        containerCollapse.classList.add("animation-1") ;
        containerCollapse.classList.remove("animation-2") ;
    },
    toggleModal:()=>{
        modal.classList.toggle("none") ;
        overlay.classList.toggle("none") ;
    }
}