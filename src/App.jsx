import React from 'react';
import ReactDOM from 'react-dom';

//Создание елемента React
//React.createElement("Название DOM елемента", "Свойство", "Содержимое елемента")
 const title = React.createElement('h1', null , 'React Todo' );
 const subtitle = React.createElement('p', { className: 'subtitle' }, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint nobis soluta cupiditate corrupti et, nisi atque dolorem, laborum minima sunt delectus qui voluptates perspiciatis. Porro eveniet a magnam odio.');
const container = React.createElement('div', null, title, subtitle);
const app = (
		<div>
			<h1>React Todo</h1>
			<p className="subtitle">This is my first app on React</p>
		</div>
);

 //Вывод обьекта на страницу методом Render
 ReactDOM.render(app, document.getElementById('root'));