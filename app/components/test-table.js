import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    columns: computed(function() {
        return [{
            name: `First Name`,
            valuePath: `firstName`
          },
          {
            name: `Last Name`,
            valuePath: `lastName`
          }
        ]
    }),
    rows: computed(function() {
        return [
            {
              firstName: 'Tony',
              lastName: 'Stark',
            },
            {
              firstName: 'Tom',
              lastName: 'Dale',
            }
          ]
    })
});
