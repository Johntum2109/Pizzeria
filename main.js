// var
    var menuList = [];

// Get menu
    function GetMenu() 
    { 
        var htmldata;
        htmlData = "<ol class='menulist'>"
        menuList.sort();
        for ( var i = 0; i < menuList.length; i++ ) 
        { 
            htmlData = htmlData + '<li>' + menuList[i] + '<li>'
        }
        htmlData = htmlData + '<ol>'
        document.getElementById("display_menu").innerHTML = htmlData;
    }

// Add item
    function add_item() 
    { 
        var htmldata;
        var item = document.getElementById("add_item").value;
        menuList.push(item);
        menuList.sort();
        htmldata = "<section class='cards'>"
        for ( var i = 0; i < menuList.length; i++ ) 
        { 
            htmldata = htmldata + '<div class="card">' + '<img src="Images/pizzaImg.png"/>' + menuList[i] + '<div>'
        }
        htmldata = htmldata + "</section>"
        document.getElementById("display_addmenu").innerHTML = htmldata;
    }