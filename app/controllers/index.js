import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        displayUserDetails() {
            this.transitionToRoute('users');
        },
        displayUserPostDetails() {
            this.transitionToRoute('posts');
        },
        addUserDetails() {
            this.transitionToRoute('create');
        }
    }
});
