(function() {
    var necessarySubstring = prompt('Show only exams containing what string? (empty or cancel to show all choices)');

    var list = document.getElementById('Exam2');

    if (!list) {
        alert('You cannot use this bookmarklet on this page.');
        return;
    }

    //  Get array of all the exams in the list
    var options = Array.prototype.filter.call(list.children, x => x.nodeName === 'OPTION');

    if (necessarySubstring) {
        options.forEach(function(opt) {
            //  Mark hidden if this exam does not include the given substring
            opt.hidden = !opt.text.includes(necessarySubstring);
        });
    }
    else {
        options.forEach(function(opt) {
            //  Show all exams
            opt.hidden = false;
        });
    }
}())
