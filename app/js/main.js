"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function loadStyles() { // создание style перед закрывающимcя body
	let style = document.createElement('link');
	style.rel  = 'stylesheet';
    style.type = 'text/css';
	style.href = '/app/css/main.css';

	document.body.appendChild(style);
}

function createStyledElement( tag, className ){
	let element = document.createElement( tag );
	element.className = className;
	element.addStyledElement = createStyledElement;

	if( this instanceof HTMLElement ){
		this.appendChild( element );
	}

	return element;
}

function socialUrl(url, title, desc, img, socialType, docFragment) {
	let link = createStyledElement( 'a' );
	link.rel = "noopener noreferrer";
	link.target = "_blank";

	if(socialType === "fb") {
		link.href = 'https://www.facebook.com/sharer/sharer.php?u='+url;
		link.innerHTML = '<img src="images/fb.svg" /><span>Поделиться</span>';
	} else if (socialType === "vk") {
		link.href = 'https://vk.com/share.php?url='+url+'&title='+title+'&description='+desc+'&image='+img;
		link.innerHTML = '<img src="images/vk.svg" />';
	} else {
		link.href = 'https://twitter.com/home?status='+title+'%20'+url;
		link.innerHTML = '<img src="images/tw.svg" /></a>';
	}

	return link;
}

const testContent = { // контент собсно
	"firstScreen": {
		"title": "Как хорошо вы разбираетесь в&nbsp;новостях бизнеса",
		"subTitle": "По следам публикаций на vc.ru.",
		"buttonText": "Начать"
	},
	"questions": [{
		"question" : "На&nbsp;какую сумму Роспотребнадзор оштрафовал продуктовую сеть &laquo;Вкусвилл&raquo;?",
		"answers" : [
			{
				"answer": "6,3 млн рублей.",
				"description": "<p><strong>Верно</strong>. Проверка <a href='https://vc.ru/trade/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target='_blank'>обнаружила</a> просроченные продукты, но&nbsp;представители сети утверждают, что большая часть замечаний не&nbsp;коснулась их&nbsp;качества.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "1&nbsp;млн рублей.",
				"description": "<p><strong>Нет</strong>, немного больше: 6,3 млн рублей. Проверка <a href='https://vc.ru/trade/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target='_blank'>обнаружила</a> просроченные продукты, но&nbsp;представители сети утверждают, что большая часть замечаний не&nbsp;коснулась их&nbsp;качества.</p>",
			},
			{
				"answer": "50&nbsp;млн рублей.",
				"description": "<p><strong>Нет</strong>, гораздо меньше: 6,3 млн рублей. Проверка <a href='https://vc.ru/trade/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target='_blank'>обнаружила</a> просроченные продукты, но&nbsp;представители сети утверждают, что большая часть замечаний не&nbsp;коснулась их&nbsp;качества.</p>",
			},
			{
				"answer": "Не&nbsp;оштрафовал, а&nbsp;объявил выговор.",
				"description": "<p><strong>Нет</strong>, всё&nbsp;же оштрафовал на&nbsp;6,3 млн рублей. Проверка <a href='https://vc.ru/trade/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley' target='_blank'>обнаружила</a> просроченные продукты, но&nbsp;представители сети утверждают, что большая часть замечаний не&nbsp;коснулась их&nbsp;качества.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;2: Почему бутылку воды &laquo;Святой источник&raquo; в&nbsp;форме футбольного мяча сняли с&nbsp;продажи?",
		"answers" : [
			{
				"answer": "Она оказалась огнеопасной.",
				"description": "<p><strong>Да</strong>, бутылка благодаря своей форме призмы фокусировала свет так, что он&nbsp;<a href='https://vc.ru/marketing/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target='_blank'>воспламенял</a> окружающие предметы.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Дети играли ею&nbsp;в&nbsp;футбол и&nbsp;разбивали окна.",
				"description": "<p><strong>Нет</strong>, дело в&nbsp;её&nbsp;форме призмы&nbsp;&mdash; она фокусировала свет так, что он&nbsp;<a href='https://vc.ru/marketing/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target='_blank'>воспламенял</a> окружающие предметы.</p>",
			},
			{
				"answer": "Она постоянно скатывалась с&nbsp;полок.",
				"description": "<p><strong>Бутылка была довольно устойчивая</strong>, но&nbsp;благодаря своей форме призмы фокусировала свет так, что он&nbsp;<a href='https://vc.ru/marketing/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target='_blank'>воспламенял</a> окружающие предметы.</p>",
			},
			{
				"answer": "Её&nbsp;никто не&nbsp;покупал.",
				"description": "<p><strong>Её&nbsp;покупали</strong>, но&nbsp;бутылка благодаря своей форме призмы фокусировала свет так, что он&nbsp;<a href='https://vc.ru/marketing/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha' target='_blank'>воспламенял</a> окружающие предметы.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;3: Сколько денег потеряли основатели WhatsApp после ухода из&nbsp;Facebook?",
		"answers" : [
			{
				"answer": "Они лишились акций на&nbsp;$1,3&nbsp;млрд.",
				"description": "<p>Ян&nbsp;Кум и&nbsp;Брайан Эктон действительно могли получить акции на&nbsp;эту сумму, если&nbsp;бы проработали в&nbsp;Facebook до&nbsp;ноября 2018&nbsp;года. Они ушли досрочно из-за <a href='https://vc.ru/social/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target='_blank'>конфликта</a> с&nbsp;руководством.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Они не&nbsp;только лишились акций на&nbsp;$1,3 млрд и&nbsp;выплатили штрафы на&nbsp;$100&nbsp;млн.",
				"description": "<p>Ян&nbsp;Кум и&nbsp;Брайан Эктон могли получить акции на ,3&nbsp;млрд, если&nbsp;бы проработали в&nbsp;Facebook до&nbsp;ноября 2018&nbsp;года. Они ушли досрочно из-за <a href='https://vc.ru/social/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target='_blank'>конфликта</a> с&nbsp;руководством, но&nbsp;штрафы никто не&nbsp;выплачивал.</p>",
			},
			{
				"answer": "Ничего не&nbsp;лишились, к&nbsp;моменту ухода они уже получили всё вознаграждение.",
				"description": "<p>Ян&nbsp;Кум и&nbsp;Брайан Эктон могли получить акции на ,3&nbsp;млрд, если&nbsp;бы проработали в&nbsp;Facebook до&nbsp;ноября 2018&nbsp;года. Они ушли досрочно из-за <a href='https://vc.ru/social/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target='_blank'>конфликта</a> с&nbsp;руководством.</p>",
			},
			{
				"answer": "Ничего не&nbsp;лишились, но&nbsp;получили иски за&nbsp;нарушение коммерческой тайны.",
				"description": "<p>Ян&nbsp;Кум и&nbsp;Брайан Эктон могли получить акции на ,3&nbsp;млрд, если&nbsp;бы проработали в&nbsp;Facebook до&nbsp;ноября 2018&nbsp;года. Они ушли досрочно из-за <a href='https://vc.ru/social/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii' target='_blank'>конфликта</a> с&nbsp;руководством&nbsp;&mdash; но&nbsp;коммерческую тайну пока никто не&nbsp;нарушил.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;4: В&nbsp;какой скандал угодила компания &laquo;Газелькин&raquo; в&nbsp;июне 2018&nbsp;года?",
		"answers" : [
			{
				"answer": "Предложила клиентам вызвать &laquo;водителей-славян&raquo; за&nbsp;дополнительную плату.",
				"description": "<p>Компания дала клиентам <a href='https://vc.ru/flood/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target='_blank'>возможность</a> выбрать водителя славянской внешности и&nbsp;российского гражданства. После скандала она переименовала услугу в&nbsp;&laquo;идеальный русский язык&raquo;.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Её&nbsp;&laquo;Газели&raquo; постоянно застревали под мостом с&nbsp;надписью &quot;Газель не&nbsp;проедет.",
				"description": "<p>Было пару раз, но&nbsp;не&nbsp;в&nbsp;июне. На&nbsp;самом деле компания дала клиентам <a href='https://vc.ru/flood/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target='_blank'>возможность</a> выбрать водителя славянской внешности и&nbsp;российского гражданства. После она переименовала услугу в&nbsp;&laquo;идеальный русский язык&raquo;.</p>",
			},
			{
				"answer": "Грузчики разбили антикварный шкаф стоимостью 163 млн рублей.",
				"description": "<p>О&nbsp;таком случае не&nbsp;сообщалось, но&nbsp;зато компания дала клиентам <a href='https://vc.ru/flood/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target='_blank'>возможность</a> выбрать водителя славянской внешности и&nbsp;российского гражданства. После скандала она переименовала услугу в&nbsp;&laquo;идеальный русский язык&raquo;.</p>",
			},
			{
				"answer": "Выложила персональные данные клиентов&nbsp;&mdash; телефоны, адреса, почты&nbsp;&mdash; в&nbsp;открытый доступ.",
				"description": "<p>О&nbsp;таком случае не&nbsp;сообщалось, но&nbsp;зато компания дала клиентам <a href='https://vc.ru/flood/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu' target='_blank'>возможность</a> выбрать водителя славянской внешности и&nbsp;российского гражданства. После скандала она переименовала услугу в&nbsp;&laquo;идеальный русский язык&raquo;.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;5: Простой вопрос для передышки. До&nbsp;какого порога правительство собирается повысить НДС?",
		"answers" : [
			{
				"answer": "20%",
				"description": "<p><strong>Да,</strong> НДС <a href='https://vc.ru/finance/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target='_blank'>собираются</a> повысить с&nbsp;18% до&nbsp;20%. Кстати, <a href='https://vc.ru/finance/38891-nds-20' target='_blank'>вот чем</a> это грозит.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "19%",
				"description": "<p><strong>Нет,</strong> всё&nbsp;же именно НДС <a href='https://vc.ru/finance/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target='_blank'>собираются</a> повысить с&nbsp;18% до&nbsp;20%. Кстати, <a href='https://vc.ru/finance/38891-nds-20' target='_blank'>вот чем</a> это грозит.</p>",
			},
			{
				"answer": "21%",
				"description": "<p><strong>Нет,</strong> НДС <a href='https://vc.ru/finance/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target='_blank'>собираются</a> повысить с&nbsp;18% до&nbsp;20%. Кстати, <a href='https://vc.ru/finance/38891-nds-20' target='_blank'>вот чем</a> это грозит.</p>",
			},
			{
				"answer": "Никто не&nbsp;собирается повышать НДС, зато повысят НДФЛ.",
				"description": "<p><strong>Нет,</strong> всё&nbsp;же именно НДС <a href='https://vc.ru/finance/40001-medvedev-anonsiroval-povyshenie-nds-do-20' target='_blank'>собираются</a> повысить с&nbsp;18% до&nbsp;20%. Кстати, <a href='https://vc.ru/finance/38891-nds-20' target='_blank'>вот чем</a> это грозит.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;6: Чем займётся Герман Клименко после ухода с&nbsp;поста советника президента по&nbsp;интернету?",
		"answers" : [
			{
				"answer": "Проектами в&nbsp;сфере цифровой медицины.",
				"description": "<p><a href='https://vc.ru/flood/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target='_blank'><strong>Верно.</strong></a></p>",
				"isCorrect" : 1
			},
			{
				"answer": "Станет разрабатывать собственный мессенджер.",
				"description": "<p><strong>Это вполне возможно</strong>, но&nbsp;сперва он&nbsp;<a href='https://vc.ru/flood/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target='_blank'>планирует</a> заниматься проектами в&nbsp;сфере цифровой медицины.</p>",
			},
			{
				"answer": "Будет советником по&nbsp;медицине.",
				"description": "<p><strong>Нет</strong>, он&nbsp;<a href='https://vc.ru/flood/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target='_blank'>планирует</a> заниматься собственными проектами в&nbsp;сфере цифровой медицины.</p>",
			},
			{
				"answer": "Отправится в&nbsp;кругосветное путешествие",
				"description": "<p><strong>Он</strong>&nbsp;<a href='https://vc.ru/flood/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu' target='_blank'>планирует</a> заниматься собственными проектами в&nbsp;сфере цифровой медицины.</p>",
			},
		]
	},
	{
		"question" : "Вопрос&nbsp;7: Какую услугу запустила &laquo;Студия Артемия Лебедева&raquo; на&nbsp;волне успеха &laquo;Экспресс-дизайна&raquo;?",
		"answers" : [
			{
				"answer": "Экспресс-дизайн не&nbsp;логотипов, а&nbsp;предметов&nbsp;&mdash; за&nbsp;300 тысяч рублей.",
				"description": "<p><strong>Да</strong>, и&nbsp;заказчик точно так&nbsp;же <a href='https://vc.ru/design/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target='_blank'>обязан</a> принять первый предложенный вариант.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Сервис экспресс-маркетинга: за&nbsp;500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог.",
				"description": "<p>Речь об&nbsp;экспресс-дизайне предметов, и&nbsp;заказчик точно так&nbsp;же <a href='https://vc.ru/design/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target='_blank'>обязан</a> принять первый предложенный вариант.</p>",
			},
			{
				"answer": "Экспресс-доставку обедов в&nbsp;офис.",
				"description": "<p>Речь об&nbsp;экспресс-дизайне предметов, и&nbsp;заказчик точно так&nbsp;же <a href='https://vc.ru/design/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target='_blank'>обязан</a> принять первый предложенный вариант.</p>",
			},
			{
				"answer": "Создание визиток за&nbsp;50&nbsp;тысяч рублей.",
				"description": "<p>Речь об&nbsp;экспресс-дизайне предметов, и&nbsp;заказчик точно так&nbsp;же <a href='https://vc.ru/design/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley' target='_blank'>обязан</a> принять первый предложенный вариант.</p>",
			},
		]
	},
	{
		"question": "Вопрос&nbsp;8: Что сказал Олег Тиньков в&nbsp;интервью Владимиру Познеру в&nbsp;рамках ПМЭФ-2018?",
		"answers": [
			{
				"answer": "Это стыдно&nbsp;&mdash; нанимать людей, которыми нужно управлять.",
				"description": "<p>Вопрос был с&nbsp;подвохом: все эти фразы прозвучали в&nbsp;<a href='https://vc.ru/flood/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target='_blank'>интервью</a>.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Я&nbsp;бы хотел, чтобы на&nbsp;моей гробовой доске было написано слово &laquo;Предприниматель&raquo;.",
				"description": "<p>Вопрос был с&nbsp;подвохом: все эти фразы прозвучали в&nbsp;<a href='https://vc.ru/flood/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target='_blank'>интервью</a>.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Чтобы быть предпринимателем, не&nbsp;нужно никакого образования.",
				"description": "<p>Вопрос был с&nbsp;подвохом: все эти фразы прозвучали в&nbsp;<a href='https://vc.ru/flood/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target='_blank'>интервью</a>.</p>",
				"isCorrect" : 1
			},
			{
				"answer": "Предприниматели должны быть звёздами и&nbsp;элитой общества.",
				"description": "<p>Вопрос был с&nbsp;подвохом: все эти фразы прозвучали в&nbsp;<a href='https://vc.ru/flood/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat' target='_blank'>интервью</a>.</p>",
				"isCorrect" : 1
			},
		]
	}],
	"results": [
		{ "min" : 0, "max" : 0, "result": "Мне больше интересен футбол.", "imgLarge": "images/img_final1.png", "imgSmall": "images/img_final1_small.png" },
		{ "min" : 1, "max" : 3, "result": "Читаю vc.ru с экрана попутчика в метро.", "imgLarge": "images/img_final2.png", "imgSmall": "images/img_final2_small.png" },
		{ "min" : 4, "max" : 5, "result": "Бизнес это интересно, но где взять столько времени?", "imgLarge": "images/img_final3.png", "imgSmall": "images/img_final3_small.png" },
		{ "min" : 6, "max" : 7, "result": "Читаю vc.ru каждый день, но работать тоже нужно.", "imgLarge": "images/img_final4.png", "imgSmall": "images/img_final4_small.png", "align": "bottom" },
		{ "min" : 8, "max" : 8, "result": "Я работаю в редакции vc.ru.", "imgLarge": "images/img_final5.png", "imgSmall": "images/img_final5_small.png" },
	],
};

function initTest(element, type, content) {
	loadStyles(); // создаем при ините теста
	
	if (content === undefined) {
        content = testContent;
    }

	let el = document.getElementById(element), // айди элемента где надо создать тест
		correctAnswers = 0, // кол-во правильных ответов
		currentIndex = -1, // текущий индекс вопроса, -1 == начальный экран
		questionsCount = content.questions.length, // кол-во вопросов
		wrapperClass = element + "__wrapper", // класс враппера
		wrapper = '<div class="'+wrapperClass+ (type == "large" ? " "+wrapperClass+"--large" : "")+'"></div>';
	el.insertAdjacentHTML("afterBegin", wrapper);


	function showContent() { // показываем контент
		let html, htmlWrap;
		htmlWrap = document.createElement('div');
		
		let fragment = document.createDocumentFragment();

		if(currentIndex === -1) {
			// Начальный экран
			htmlWrap.className = "test__screen test__screen--intro";

			let img1 = createStyledElement( 'img' , 'test__intro-bg test__intro-bg--1' );
			let img2 = createStyledElement( 'img' , 'test__intro-bg test__intro-bg--2' );
			let img3 = createStyledElement( 'img' , 'test__intro-bg test__intro-bg--3' );

			img1.src = "images/bg1.png";
			img2.src = "images/bg2.png";
			img3.src = "images/bg3.png";

			let name = createStyledElement( 'div' , 'test__name' );
			let subName = createStyledElement( 'div' , 'test__subtitle' );
			let button = createStyledElement( 'div' , 'test__button test__button--next test__button--start' );

			name.innerHTML = content.firstScreen.title;
			subName.innerHTML = content.firstScreen.subTitle;
			button.innerHTML = content.firstScreen.buttonText;

			fragment.appendChild(img1);
			fragment.appendChild(img2);
			fragment.appendChild(img3);

			fragment.appendChild(name);
			fragment.appendChild(subName);
			fragment.appendChild(button);

			htmlWrap.appendChild(fragment);	
		
		} else if(currentIndex === questionsCount) {
			// Экран с результатами
			let resultText = "",
				resultImgClass = "",
				resultImg = "";
			Object.keys(content.results).forEach(function(k){
				if(correctAnswers >= content.results[k].min && correctAnswers <= content.results[k].max) {
					resultText = content.results[k].result;
					resultImg = (type == "large" ? content.results[k].imgLarge : content.results[k].imgSmall);
					if(content.results[k].align) { resultImgClass = " bottom"; }
					return false;
				}
			});

			htmlWrap.setAttribute("class", "test__screen test__screen--results");

			let counter = createStyledElement( 'div' , 'test__counter' );
			counter.innerHTML = correctAnswers+' из '+content.questions.length+' правильных ответов';

			let image = createStyledElement( 'img' , 'test__result-bg'+(resultImgClass ? resultImgClass : "" ));
			image.src = resultImg;

			let name = createStyledElement( 'div' , 'test__name' );
			name.innerHTML = resultText;
		
			let shareLinks = createStyledElement( 'div' , 'test__social-share' );
			let links = document.createDocumentFragment();		

			let title = "Как хорошо вы разбираетесь в новостях бизнеса?",
				desc = "По следам публикаций на vc.ru.",
				img = "images/test.png",
				url = "https%3A//machooo.github.io/";

			shareLinks.appendChild( socialUrl(url, title, desc, img, "fb") );
			shareLinks.appendChild( socialUrl(url, title, desc, img, "vk") );
			shareLinks.appendChild( socialUrl(url, title, desc, img, "tw") );

			let button = createStyledElement( 'div' , 'test__button test__button--again' );
			button.innerHTML = "Пройти еще раз";

			fragment.appendChild(counter);
			fragment.appendChild(image);
			fragment.appendChild(name);
			fragment.appendChild(shareLinks);
			fragment.appendChild(button);

			htmlWrap.appendChild(fragment);
		} else {
			// Вопросы
			htmlWrap.className = "test__screen test__screen--question";

			let counter = createStyledElement( 'div' , 'test__counter' );
			counter.innerHTML = (currentIndex+1)+'/'+questionsCount;

			let question = createStyledElement( 'div' , 'test__question' );
			question.innerHTML = content.questions[currentIndex].question;

			let questionsWrap = createStyledElement( 'div' , 'test__answers' );
			let questions = document.createDocumentFragment();			

			Object.keys(content.questions[currentIndex].answers).forEach(function(k){
				var questionItem = createStyledElement( 'div' , 'test__answer-item' );
				questionItem.innerHTML = content.questions[currentIndex].answers[k].answer;
				questions.appendChild(questionItem);		
			});

			questionsWrap.appendChild(questions);

			fragment.appendChild(counter);
			fragment.appendChild(question);
			fragment.appendChild(questionsWrap);

			htmlWrap.appendChild(fragment);
		}
		const container = document.querySelector("."+wrapperClass);
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		container.appendChild(htmlWrap);
	}

	showContent();

	document.querySelector('.'+wrapperClass).addEventListener('click', function (event) {
		if (event.target.classList.contains('test__answer-item') && !event.target.classList.contains('test__answer-item--disabled')) {
			let el = event.target;
			let button = createStyledElement('div', 'test__button test__button--next');
			button.innerText = 'Продолжить';
			const index = [...el.parentElement.children].indexOf(el);

			let answer = createStyledElement( 'div' , 'test__answer-item test__answer-item--disabled' );

			if(content.questions[currentIndex].answers[index].isCorrect) {
				correctAnswers++; 
				answer.className += " test__answer-item--correct";
			} else {
				answer.className += " test__answer-item--wrong";
			}
			answer.innerHTML = el.textContent;

			const container = document.querySelector(".test__answers");
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}

			let description = createStyledElement('div', 'test__description');
			description.innerHTML = content.questions[currentIndex].answers[index].description;

			container.appendChild(answer);
			container.appendChild(description);
			container.after(button);

		}

		if (event.target.classList.contains('test__button--next')) {
			currentIndex++;
			showContent();
		}

		if (event.target.classList.contains('test__button--again')) {
			currentIndex = -1;
			correctAnswers = 0;
			showContent();
		}
	});
}