exports.test = function(request, response) {

    response.render('index', { title: "Titolo !", 
                               test : "Prova" 
                             });
}
