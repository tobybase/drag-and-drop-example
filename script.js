onDragStart = (event) => {
	 event
	 .dataTransfer
	 .setData('text/plain', event.target.id);

      event
     .currentTarget
     .style
	 .backgroundColor = 'yellow';
};

onDragOver = (event) => {
	event.preventDefault();
}

onDrop = (event) => {
	const id = event.dataTransfer.getData('text');
	const draggableElement = document.getElementById(id);
	const Done = event.target;
	Done.appendChild(draggableElement);

	event.dataTransfer.clearData();
};