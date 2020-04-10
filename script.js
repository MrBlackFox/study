console.log("Жили были!");

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let q1expense;
let q2expense;

let expense = {
	q1expense: q1expense,
	q2expense: q2expense,
};
let optionalExpenses = {
	
};
let income = [];

let appData = {
	appMoney: money,
	appTime: time,
	appExpenses: expense,
	appOptionalExpenses: optionalExpenses,
	appIncome: income,
	savings: false,
}

expense.q1expense = prompt("Введите обязательную статью расходов в этом месяце");
expense.q2expense = prompt("Во сколько обойдется?");



console.log(expense.q1expense,expense.q2expense);
 alert('Бюджет на один день ' + money/30);
 //Изменение
