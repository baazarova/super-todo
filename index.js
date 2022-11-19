window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const elList = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const elTask = document.createElement('div');
		elTask.classList.add('task');

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');

		elTask.appendChild(taskContent);

		const taskInput = document.createElement('input');
		taskInput.classList.add('text');
		taskInput.type = 'text';
		taskInput.value = task;
		taskInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(taskInput);

		const taskActions = document.createElement('div');
		taskActions.classList.add('actions');
		
		const edit = document.createElement('button');
		edit.classList.add('edit');
		edit.innerText = 'Edit';

		const taskDelete = document.createElement('button');
		taskDelete.classList.add('delete');
		taskDelete.innerText = 'Delete';

		taskActions.appendChild(edit);
		taskActions.appendChild(taskDelete);

		elTask.appendChild(taskActions);

		elList.appendChild(elTask);

		input.value = '';

		edit.addEventListener('click', (e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				taskInput.removeAttribute("readonly");
				taskInput.focus();
			} else {
				edit.innerText = "Edit";
				taskInput.setAttribute("readonly", "readonly");
			}
		});

		taskDelete.addEventListener('click', (e) => {
			elList.removeChild(elTask);
		});
	});
});