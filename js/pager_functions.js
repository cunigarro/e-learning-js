var total_pages = 13;

/*--Go to previos and next page--*/
function go_prev(number_page){
    var new_link = '';
    if (number_page > 1){
        temp_page = number_page - 1;
        if (temp_page <= 9)
            new_link = 'p0' + temp_page + '.html';
        else
            new_link = 'p' + temp_page + '.html';
    }else{
        new_link = '../index.html';
    }
    window.location.href = new_link;
}

function go_next(number_page){
    var new_link = '';
    if (number_page < total_pages){
        var temp_page = number_page + 1;
        if (temp_page <= 9)
            new_link = 'p0' + temp_page + '.html';
        else
            new_link = 'p' + temp_page + '.html';
    }else{
        new_link = 'javascript:void(0);';
    }
    window.location.href = new_link;
}
