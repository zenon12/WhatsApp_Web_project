

export var usersData=[
    {
        url:  "/assets/images/friends/tanjiiro_profile.jpg" ,
        name: "Kamado Tanjiiro" ,
        notification: 4 ,
        lastMessage: "Je veux devenir pourfandeur de demon" ,
        lastMessageDate: "16:30"
    },
    {
        url:  "/assets/images/friends/tanjiiro_profile.jpg" ,
        name: "Monkey D Luffy" ,
        notification: 4 ,
        lastMessage: "Je veux devenir le roi des pirates" ,
        lastMessageDate: "16:30"
    }
]

export const usersContent=document.getElementById("users-list") ;
export const headerDetails=document.querySelector(".content-chat .chat-header .header-details") ;
export const menuMobile=document.getElementById("collapse-menu-mobile") ;
export const content=document.getElementById("content") ;
export const aside=document.getElementById("userfullBoard") ;

//   ***** Sub Menu ******
export const menuCollapse=document.getElementById("menu-collapse") ;
export const subMenu=document.getElementById("sub-menu") ;


//   ***** Collapse ******
export const containerCollapse=document.getElementById("whatsApp-collapse") ;
export const collapseItems=document.querySelectorAll("#whatsApp-collapse .collapse") ;
export const openCollapse=document.querySelectorAll(".aside-header .open-collapse")  ;
export const closeCollapse=document.querySelectorAll("header .header-icon .close-collapse")  ;


//   ***** Modal ******
export const modal=document.getElementById("modal") ;
export const overlay=document.getElementById("overlay") ;
export const openModal=document.getElementById("modal-collapse") ;
export const closeModal=document.querySelector(".modal-footer .btn-cancel") ;