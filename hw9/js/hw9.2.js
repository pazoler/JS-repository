//кроме requires html, min-max length
//валидатор проверяет все поля на правила
class Validator {
//свйоства валидатора вне конструктора
//вне конструктора - создается и без создания обхекта
	//private conditions
	//#prop_name = "Prop value"


	_rules = null;
	_messages = null;
	_sucsessHandler = null;
	_errorHandler = null;
	//# делает свойство приватным
	//не везде работает, в микрософт брауезере например
	constructor (form) {
		this._form = form;
		this._form.addEventListener("submit", this.validate.bind(this));
		//bind(this)- передает ссылку на контекст(объект, а не формы

	}
	get form() {
		return this._form;
	}
	set form(value) {
		this._form=value;
	}

	get rules() {
		return this._rules;
	}
	set rules(value) {
		this._rules=value;
	}
	get messages() {
		return this._messages;
	}
	set messages(value) {
		this._messages=value;
	}
	get succsessHandler() {
		return this._sucsessHandler;
	}
	set succsessHandler(func) {
		this._sucsessHandler=func;
	}
	get errorHandler() {
		return this._errorHandler;
	}
	set errorHandler(func) {
		this._errorHandler=func;
	}
	init(settings) {
		rules=settings.rules;
		messages=settings.messages;
		succsessHandler=settings.succsessHandler;
		errorHandler=settings.errorHandler;

	}
	minLength(elemValue, ruleValue) {
		return elemValue.length >= ruleValue;
	}
	maxLength(elemValue, ruleValue) {
		return elemValue.length <= ruleValue;
	}
	required(elemValue) {
		return elemValue.length > 0;
	}
	reg_match(elemValue, ruleValue){
		return ruleValue.test(elemValue);
	//здесь this в контексте объекта сразу будет
	}
	//test проверит соответствует ли строка регулярному выражению
	//тест - метод только регулярного выражения / регулярное выражение/
	//будет вызываться когда будет на сабмит жать
	validate(event) {
		event.preventDefault();
		console.log("validate");
		//будет форма в this потому что обработчик поввесили на форму
		let elements = form.elements;
		let mistakes = [];
		//получаем 4 инпута и сабмит - коллекция
		for (let elem of elements) {
			elem.dataset.validate;

			//login pswd name comment + undefined
			if (elem.dataset.validate) {
				let ruleValue = rules[elem.dataset.validate];

				//minlenth и maxlength и будет объект
				for(let rule in ruleValue) {
					if(!this[rule](elem.value, ruleValue[rule])) {
						//[] для записи типа "текст", а не .текст
						//вызываем метод валидатора
						//elemvalue - что вввел пользователь
						if (messages[elem.dataset.validate]) {
							let mess = messages[elem.dataset.validate];
								mistakes.push(mess);
								// console.log(mistakes);
								let span = document.createElement("span");
								span.innerText = Object.values(mess);
								elem.after(span);
								console.log(elem);

							// elem.insertAdjacentHTML("afterEnd", `<span>${Object.values(mess)}</span>`);
							
						}
						
					}
				}
			}

		}
		
		console.log(mistakes);
		succsessHandler(form);
	}	
}

let form = document.forms.validate;
let validator = new Validator(form);

let rules = {
	login: {
		minLength: 4,
		maxLength: 8
	},
	password: {
		minLength: 8
	},
	name: {
		required: true
	},
	comment: {
		reg_match: /comment/ //можем ввести только comment
	}
	//позырить регулярные выражения

};

let messages = {
	login: {
		minLength: "Минимум 4 символа"

	},
	name: {
		required: "Поле обязательно для заполнения"

	}

};

let succsessHandler = (form) => {
	console.log('действия в случае успешного заполнения формы');
}

let errorHandler = (form) => {
	console.log("Действие в случае ошибок в заполнении формы");
}

validator.init({
	rules: rules,
	messages: messages,
	succsessHandler: succsessHandler,
	errorHandler: errorHandler
});

//дз - вывод сообщений созданием доп блока
//убрать ретурн и добавить доп.обработку - не прерывать , вывести ошибку по всем параметрам
//все замечания засунуть в массив, и если массив без ошибок - success

//у стрелочных функций без this

