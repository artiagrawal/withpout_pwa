import DS from 'ember-data';

export default DS.Model.extend({
    employee_name: DS.attr('string'),
    employee_salary: DS.attr('string'),
    employee_age: DS.attr('string'),
    profile_image: DS.attr('string')
});
