import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    columns: computed(function() {
        return [{
            name: `Name`,
            valuePath: `name`
          },
          {
            name: `User Name`,
            valuePath: `userName`
          },
          {
            name: `Email`,
            valuePath: `email`
          },
          {
            name: `Phone`,
            valuePath: `phone`
          },
          {
            name: `Website`,
            valuePath: `website`
          }
        ]
    })
    // rows: computed(function() {
    //     return [
    //         {
    //           firstName: 'Tony',
    //           lastName: 'Stark',
    //         },
    //         {
    //           firstName: 'Tom',
    //           lastName: 'Dale',
    //         }
    //       ]
    // })
});
