(function(){
	"use strict";

	///// аккордеон в юзерах //////
	$('.users-list__item .meta').on('click', function(){
		var item = $(this).parent();
		if(item.hasClass('active')) {
			item.removeClass('active');
			item.find('.hidden').slideUp('slow');
		} else {
			item.addClass('active');
			item.find('.hidden').slideDown('slow');
		}
	});

	/// добавление юзера сквад ///
	$(document).on('click', '.add-squad-man button', function(e){
		e.preventDefault();
		var name = $('.add-to-squad .name').val(),
			lastname = $('.add-to-squad .lastname').val(),
			errors = false

		if(name.length === 0) {
			errors = true;
			$('.add-to-squad .name').addClass('error');
		}

		if(lastname.length === 0) {
			errors = true;
			$('.add-to-squad .lastname').addClass('error');
		}

		if(!errors) {
			$('.add-to-squad .name, .add-to-squad .lastname').removeClass('error');
			$('.squad-list .flex').append('<div class="item">'+ name +' '+ lastname +'</div>');
			$('.add-to-squad input[type="text"]').val("");
		}

	});

	$(document).on('click', '.squad-list .item', function(e){
		$(this).remove();
	});


	$(document).on('click', '.add-users__list .line', function(e){
		var name = $(this).find('.name').text(),
		number = $(this).find('.number').text();

		$(this).remove();

		addUserInList(name, number);
	});

	$(document).on('click', '.teammates-list .item', function(e){
		var name = $(this).text(),
		number = $(this).attr('data-number');

		$(this).remove();

		removeUserFromList(name, number);
	});

	function addUserInList(name, number) {

		var item = '<div class="item" data-number="'+ number +'">'+ name +'</div>';

		if($('.teammates-list').length == 0) {
			$('.add-users').after('<div class="teammates-list"><label for="">Члены команды:</label><div class="flex"></div></div>');
		}

		$('.teammates-list .flex').append(item);

	}

	function removeUserFromList(name, number) {

		var item = '<div class="line"><div class="name">'+ name +'</div><div class="number">'+ number +'</div></div>';

		console.log($('.teammates-list .item').length);

		if($('.teammates-list .item').length == 0) {
			$('.teammates-list').remove();
		}

		$('.add-users__list').append(item);

	}


	$('.registation-form__tabs a').on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('data-tab');
		$('.registation-form .tab-content, .registation-form__tabs a').removeClass('active');
		$(this).addClass('active');
		$('.registation-form .tab-content#' + id).addClass('active');
	});
	
	////// INPUT FILE /////////
	/*var wrapper = $( ".file_upload" ),
        inp = $( ".file_upload input" ),
        btn = $( ".file_upload button" ),
        lbl = $( ".file_upload div" );

    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });*/

    $(document).on('click', '.file_upload button', function(){
    	$(this).parent().find('input').click();
    	changeFile();
    });

    function changeFile() {

    	//console.log(button);

    	var wrapper = $(this).parent(),
	        inp = wrapper.find( "input" ),
	        btn = wrapper.find( "button" ),
	        lbl = wrapper.find( "div" );

    	var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    	inp.change(function(){
	        var file_name;
	        if( file_api && inp[ 0 ].files[ 0 ] )
	            file_name = inp[ 0 ].files[ 0 ].name;
	        else
	            file_name = inp.val().replace( "C:\\fakepath\\", '' );

	        if( ! file_name.length )
	            return;

	        if( lbl.is( ":visible" ) ){
	            lbl.text( file_name );
	            btn.text( "Выбрать файл" );
	        }else
	            btn.text( file_name );
	    }).change();
    }

    


	////// слайдер на странице авторизации/реги ///////
	$('.sign-page .owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		loop: true
	});

	////// слайдер участников ///////
	$('.event-peoples .owl-carousel').owlCarousel({
		items: 6,
		loop: true,
		dots: false
	});

	

	////// сравнение паролей ////////
	$('#new-pass, #confirm-pass').on('keyup', function () {
	  if ($('#new-pass').val() != $('#confirm-pass').val()) {
	    $('.errors .compare').addClass('active');
	  } else {
	    $('.errors .compare').removeClass('active');
	  }
	});

	////// проверка длины паролей ////////
	$('#new-pass, #confirm-pass').on('keyup', function () {
	  if ($('#new-pass').val().length < 8 || $('#confirm-pass').val().length < 8) {
	    $('.errors .length').addClass('active');
	  } else {
	    $('.errors .length').removeClass('active');
	  }
	});

	////// клик по поиску на главной ////////
	$('input.search').focus(function() {
	    $(this).attr('placeholder', 'Поиск по событиям...')
	}).blur(function() {
	    $(this).attr('placeholder', 'Поиск')
	});


	////// клонирование инпутов по клику ///////////
	$('.input-block .add-new').on('click', function(){
		var block = $(this).closest('.input-block').find('.repeated-block').html();
		$(this).before('<div class="repeated-block added">'+block+'<div class="remove">-</div></div>');
	});

	$('.input-block').on('click', '.remove', function(){
		$(this).parent().remove();
	});

	////// клонирование справок по клику ///////////
	$('.admission-files .add-new').on('click', function(){
		var block = $('.admission-files__item').html();
		$(this).before('<div class="admission-files__item added">'+block+'<div class="remove">-</div></div>');
	});

	$('.input-block').on('click', '.remove', function(){
		$(this).parent().remove();
	});

	////// конвертит img в svg ////////
	jQuery('img.svg').each(function(){
	    var $img = jQuery(this),
	    	imgID = $img.attr('id'),
	    	imgClass = $img.attr('class'),
	    	imgURL = $img.attr('src'),
			imgWidth = $img.attr('width'),
			imgHeight = $img.attr('height');

	    jQuery.get(imgURL, function(data) {
	        var $svg = jQuery(data).find('svg');
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
			if(typeof imgWidth !== 'undefined') {
				$svg = $svg.attr('width', imgWidth);
			}
			if(typeof imgHeight !== 'undefined') {
				$svg = $svg.attr('height', imgHeight);
			}
	        $svg = $svg.removeAttr('xmlns:a');
	        $img.replaceWith($svg);
	    }, 'xml');
	});

	////// кастомный селект ///////
	var x, i, j, selElmnt, a, b, c;
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < selElmnt.length; j++) {
	    c = document.createElement("DIV");
	    c.innerHTML = selElmnt.options[j].innerHTML;
	    c.addEventListener("click", function(e) {
	        var y, i, k, s, h;
	        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
	        h = this.parentNode.previousSibling;
	        for (i = 0; i < s.length; i++) {
	          if (s.options[i].innerHTML == this.innerHTML) {
	            s.selectedIndex = i;
	            h.innerHTML = this.innerHTML;
	            y = this.parentNode.getElementsByClassName("same-as-selected");
	            for (k = 0; k < y.length; k++) {
	              y[k].removeAttribute("class");
	            }
	            this.setAttribute("class", "same-as-selected");
	            break;
	          }
	        }
	        h.click();
	    });
	    b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
	      e.stopPropagation();
	      closeAllSelect(this);
	      this.nextSibling.classList.toggle("select-hide");
	      this.classList.toggle("select-arrow-active");
	  });
	}
	function closeAllSelect(elmnt) {
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove("select-arrow-active");
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add("select-hide");
	    }
	  }
	}
	document.addEventListener("click", closeAllSelect);

})(jQuery);