document.addEventListener("DOMContentLoaded", function() {

	/* Tabs */
	
	const rootTabs = document.querySelectorAll("[data-tab='root']"); // Поиск всех табов на странице

	rootTabs.forEach(rootTab => {
		rootTab.addEventListener('click', handlerTabClick); // Вешаем обработчик на найденные табы
	})

	// Делегирование обработчика
	function handlerTabClick(event) { 

		const target = event.target;
		const navBtns = this.querySelectorAll("[data-tab-nav]");
		const contents = this.querySelectorAll("[data-tab-content]");

		if (target.getAttribute("data-tab-nav") !== null) {
			navBtns.forEach(navBtn => {
				if (navBtn.classList.contains('active')) {
					navBtn.classList.remove('active');
				}
			})
			target.classList.add('active');

			let valueAttrNavBtn = target.getAttribute("data-tab-nav");

			contents.forEach(content => {
				if (content.classList.contains('active')) {
					content.classList.remove('active');
				}
				if (content.getAttribute("data-tab-content") === valueAttrNavBtn) {
					content.classList.add('active');
				}
			})
		}

	}
	/* Tabs */

})