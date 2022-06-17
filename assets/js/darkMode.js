function darkmode(){
    var SetTheme = document.body;

    SetTheme.classList.toggle("dark-mode");

    var theme;

    if(SetTheme.classList.contains("dark-mode")){
        theme="DARK";
    }else{
        theme="LIGHT";
   }
    // save to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));

}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme == "DARK"){
    document.body.classList="dark-mode";
}