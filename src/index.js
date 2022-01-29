import './styles.css'
import { createNav, createhome } from "./home";


const contentPage = document.querySelector("#content");
contentPage.append(createNav())
contentPage.append(createhome());

