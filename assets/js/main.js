import { closeCollapse, collapseItems, openCollapse ,containerCollapse} from "./libraries/variable.js";
import { whatsApp } from "./libraries/whatsApp.js"

window.onload=()=>{
    whatsApp.initUsers() ;
    whatsApp.initEvent() ;
}