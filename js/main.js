$(document).ready(function(){

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

});