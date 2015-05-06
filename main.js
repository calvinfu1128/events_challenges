$(document).ready(function(){

    // add new list to first ul
    $('.first').on('click', function(){ // use .click
        $('ul').first().children().last().after('<li>' + Math.floor(Math.random() * 10) + '</li>');
    }); // $('ul', '.container1')

    // add new list to second ul
    $('.second').on('click', function(){
         $('ul').first().next().children().last().after('<li>' + Math.floor(Math.random() * 10) + '</li>');
    }); // last ul (avoid problematic coding for DOM changes) .append, avoid using .children() if possible


    // add new list to third ul
    $('.third').on('click', function(){
         $('.container1').next().children().last().after('<li>' + Math.floor(Math.random() * 10) + '</li>');
    }); // pick last ul among all the uls


    // console log first ul list content
    $('ul').first().on('click', 'li', function(){
        console.log ('container1: first ul item-clicked:' + $(this).text());
    }); // one single function

    // console log second ul list content
    $('ul').first().next().on('click', 'li', function(){
        console.log ('container1: second ul item-clicked:' + $(this).text());
    });

    // console log third ul list content
    $('.container1').next().on('click', 'li', function(){
        console.log ('third ul item-clicked:' + $(this).text());
    });


    // console log first ul list content
    $('ul').first().on('click', 'li:not(.x)', function(){
        console.log ('container1: first ul item-clicked:' + $(this).text());
    }); // stop propagation

    // console log second ul list content
    $('ul').first().next().on('click', 'li:not(.x)', function(){
        console.log ('container1: second ul item-clicked:' + $(this).text());
    });

    // console log third ul list content
    $('.container1').next().on('click', 'li:not(.x)', function(){
        console.log ('third ul item-clicked:' + $(this).text());
    });

});