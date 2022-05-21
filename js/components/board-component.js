import AbstractComponent from './abstract-component.js';

export default class BoardComponent extends AbstractComponent {
    constructor(taskService) {
        super();
        this._taskService = taskService;
    }

    _getTemplate() {
        return (
            `<section class="taskboard">
          <h2 class="visually-hidden">Ваши задачи:</h2>
        </section>`
        );
    }
}