import React from 'react';
import ReactDOM from 'react-dom';

//Компонент
function App(props) {
	return (
		<main>
			<header>
				<h1>{props.title}</h1>
			</header>
			<section className="todo-list">
				<div className="todo comleted">
					<button className="checkbox icon">
						<i className="material-icons">check_box</i>
					</button>
					<span className="todo-title">Изучить Angular</span>
					<button className="delete icon">
						<i className="material-icons">delete</i>
					</button>
				</div>
				<div className="todo">
					<button className="checkbox icon">
						<i className="material-icons">check_box_outline_blank</i>
					</button>
					<span className="todo-title">Написать приложение</span>
					<button className="delete icon">
						<i className="material-icons">delete</i>
					</button>
				</div>
				<div className="todo"> 
					<button className="checkbox icon">
						<i className="material-icons">check_box_outline_blank</i>
					</button>
					<span className="todo-title">Изучить React</span>
					<button className="delete icon">
						<i className="material-icons">delete</i>
					</button>
				</div>
			</section>
		</main>
	);
}
 
 //Вывод обьекта на страницу методом Render
 ReactDOM.render(<App title="React Todo" />, document.getElementById('root'));