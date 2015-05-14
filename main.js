$(document).ready(function () {

    //make random content into a function
    var RandomContent = function () {
        return '<li>' + Math.floor(Math.random() * 10) + '</li>';
    };

    // add new list to first ul (Q1)
    $('.first').click(function () { // use .click
        $('ul', '.container1').first().append(RandomContent);
    }); // $('ul', '.container1')

    // add new list to second ul (Q2)
    $('.second').click(function () {
         $('ul', '.container1').last().append(RandomContent);
    }); // last ul (avoid problematic coding for DOM changes) .append, avoid using .children() if possible

    // add new list to third ul (Q3)
    $('.third').click(function () {
         $('ul').last().append(RandomContent);
    }); // pick last ul among all the uls

    // console log first & second ul list content (Q4)
    $('ul', '.container1').on('click', 'li', function (e) {
        var parent = $(e.target).parent();
        var firstUl = $('ul', '.container1').first();
        var secondUl = $('ul', '.container1').last();

        if ( parent[0] === firstUl[0] ) {
            console.log ('container1: first ul item-clicked: ' + $(this).text());
        } else if ( parent[0] === secondUl[0] ) {
            console.log ('container1: second ul item-clicked: ' + $(this).text());
        }
    });

    // console.log third ul list content (Q5)
    $('ul').last().on('click', 'li', function () {
        console.log ('third ul item-clicked: ' + $(this).text());
    });

    // // console log first ul list content (Q6)
    $('ul').on('click', 'li:not(.x)', function (e) {
        var parent = $(e.target).parent();
        var firstUl = $('ul', '.container1').first();
        var secondUl = $('ul', '.container1').last();
        var thirdUl = $('ul').last();

        if ( parent[0] === firstUl[0] ) {
            console.log  ('container1: first ul not .x item-clicked: ' + $(this).text());
        } else if ( parent[0] === secondUl[0] ) {
            console.log  ('container1: second ul not .x item-clicked: ' + $(this).text());
        } else if ( parent[0] === thirdUl[0] ) {
            console.log  ('third ul not .x item-clicked: ' + $(this).text());
        }
    });

});