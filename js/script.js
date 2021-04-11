$(document).ready(function () {




    var dropDown = $(".with-dropdown");

    var dropLink = dropDown.children("a");

    var dropMenu = dropDown.children(".dropdown-menu");


    // mostra e nascondi al click

    dropLink.click(function () {


        var actualMenu = $(this).next(".dropdown-menu");

        dropMenu.not(actualMenu).hide();

        actualMenu.toggle();

    })

});