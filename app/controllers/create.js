import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        basicSubmitAction() {
            this.transitionToRoute('index');
        }
    }
});
