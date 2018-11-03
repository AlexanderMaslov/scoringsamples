import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.closeModalButton = $(".modal__close");	
		this.modal = $(".modal");
		this.events();	
	}	

	events() {	
		//clicking the open modal button	
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the x close button
		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}
}

export default Modal;