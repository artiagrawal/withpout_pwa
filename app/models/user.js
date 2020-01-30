import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('number'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    website: DS.attr('string')
});
