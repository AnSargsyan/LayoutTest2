
window.onload = function () {

    var tab_item = $('.tab').children();

    for (let i = 0; i < tab_item.length; i++) {
        $(`<li>`).text($(tab_item[i]).attr('name')).appendTo($('ul#nav_item'));
        var nav_item = $('li');
        $(nav_item[0]).attr('selected', 'selected')
}
        var myArr = [];

        for (let j = 0; j < nav_item.length; j++) {
            nav_item[j].addEventListener('click', select);
            myArr.push(nav_item[j]);
        
        var counter;

        function select(e) {
            $('[selected = "selected"]').removeAttr('selected')

            $(nav_item[counter]).removeAttr('selected', 'selected')
            $(tab_item[counter]).removeAttr('selected', 'selected')

            $(e.currentTarget).attr('selected', 'selected')
            var index = myArr.indexOf(e.currentTarget);
            counter = index;
            $(tab_item[index]).attr('selected', '')
            
        }
        // function select() {
		// 	for(let i = 0;  i < tab_item.length; i++) {

		//  		if(i == j) {
		// 			$(tab_item[i]).attr('selected', 'selected')
		// 			$(nav_item[j]).attr('selected', 'selected')
		// 		}
		// 		else {
		// 	       		$(tab_item[i]).removeAttr('selected', '')
		// 	       		$(nav_item[j]).removeAttr('selected', '')
		// 	        }
		//     }
	 	// }
   }
   
}
// console.log($('[myId="home"]')[0]);




