'use strict';

define("pwasampleapp/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("pwasampleapp/tests/integration/components/table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tbD+4H8F",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"table\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UhvDhNBF",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"table\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("pwasampleapp/tests/integration/components/test-table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | test-table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1t+mEjgm",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"test-table\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MqKRUBFF",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"test-table\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("pwasampleapp/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/test-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/test-table.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('initializers/user-agent.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/user-agent.js should pass ESLint\n\n');
  });
  QUnit.test('models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employee.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/posts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts.js should pass ESLint\n\n');
  });
  QUnit.test('routes/users.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("pwasampleapp/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('pwasampleapp/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pwasampleapp/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('pwasampleapp/templates/components/test-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pwasampleapp/templates/components/test-table.hbs should pass TemplateLint.\n\npwasampleapp/templates/components/test-table.hbs\n  2:4  error  Incorrect indentation for `<t.head>` beginning at L2:C4. Expected `<t.head>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<t.body>` beginning at L3:C4. Expected `<t.body>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('pwasampleapp/templates/create.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pwasampleapp/templates/create.hbs should pass TemplateLint.\n\npwasampleapp/templates/create.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `{{#paper-card}}` beginning at L3:C8. Expected `{{#paper-card}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:8  error  Incorrect indentation for `{{#paper-form}}` beginning at L4:C8. Expected `{{#paper-form}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `<div>` beginning at L5:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  29:8  error  Incorrect indentation for `<div>` beginning at L29:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `<div>` beginning at L6:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `<div>` beginning at L10:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  7:16  error  Incorrect indentation for `{{form.input}}` beginning at L7:C16. Expected `{{form.input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  8:16  error  Incorrect indentation for `{{form.input}}` beginning at L8:C16. Expected `{{form.input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  11:16  error  Incorrect indentation for `{{#form.autocomplete}}` beginning at L11:C16. Expected `{{#form.autocomplete}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  26:16  error  Incorrect indentation for `{{form.input}}` beginning at L26:C16. Expected `{{form.input}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  21:16  error  Incorrect indentation for `{{paper-autocomplete-highlight}}` beginning at L21:C16. Expected `{{paper-autocomplete-highlight}}` to be at an indentation of 18 but was found at 16.  block-indentation\n  30:12  error  Incorrect indentation for `{{#form.submit-button}}` beginning at L30:C12. Expected `{{#form.submit-button}}` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('pwasampleapp/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pwasampleapp/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('pwasampleapp/templates/posts.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pwasampleapp/templates/posts.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('pwasampleapp/templates/users.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pwasampleapp/templates/users.hbs should pass TemplateLint.\n\n');
  });
});
define("pwasampleapp/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/table-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/test-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/test-table-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/employee-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/posts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("pwasampleapp/tests/page-object", ["exports", "ember-cli-page-object"], function (_exports, _emberCliPageObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "alias", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.alias;
    }
  });
  Object.defineProperty(_exports, "attribute", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.attribute;
    }
  });
  Object.defineProperty(_exports, "clickOnText", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickOnText;
    }
  });
  Object.defineProperty(_exports, "clickable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.clickable;
    }
  });
  Object.defineProperty(_exports, "collection", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.collection;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.contains;
    }
  });
  Object.defineProperty(_exports, "count", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.count;
    }
  });
  Object.defineProperty(_exports, "create", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.create;
    }
  });
  Object.defineProperty(_exports, "fillable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "selectable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fillable;
    }
  });
  Object.defineProperty(_exports, "focusable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.focusable;
    }
  });
  Object.defineProperty(_exports, "hasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.hasClass;
    }
  });
  Object.defineProperty(_exports, "is", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.is;
    }
  });
  Object.defineProperty(_exports, "isHidden", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isHidden;
    }
  });
  Object.defineProperty(_exports, "isPresent", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isPresent;
    }
  });
  Object.defineProperty(_exports, "isVisible", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.isVisible;
    }
  });
  Object.defineProperty(_exports, "notHasClass", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.notHasClass;
    }
  });
  Object.defineProperty(_exports, "property", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.property;
    }
  });
  Object.defineProperty(_exports, "text", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.text;
    }
  });
  Object.defineProperty(_exports, "triggerable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.triggerable;
    }
  });
  Object.defineProperty(_exports, "value", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.value;
    }
  });
  Object.defineProperty(_exports, "visitable", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.visitable;
    }
  });
  Object.defineProperty(_exports, "buildSelector", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(_exports, "findElementWithAssert", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(_exports, "findElement", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(_exports, "getContext", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(_exports, "fullScope", {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fullScope;
    }
  });
  _exports.default = void 0;
  var _default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    blurrable: _emberCliPageObject.blurrable,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    focusable: _emberCliPageObject.focusable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isPresent: _emberCliPageObject.isPresent,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
  _exports.default = _default;
  (true && !(false) && Ember.deprecate(`Importing from "test-support" is now deprecated. Please import directly from the "ember-cli-page-object" module instead.`, false, {
    id: 'ember-cli-page-object.import-from-test-support',
    until: '2.0.0',
    url: 'https://ember-cli-page-object.js.org/docs/v1.16.x/deprecations/#import-from-test-support'
  }));
});
define("pwasampleapp/tests/test-helper", ["pwasampleapp/app", "pwasampleapp/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("pwasampleapp/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("pwasampleapp/tests/unit/controllers/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:create');
      assert.ok(controller);
    });
  });
});
define("pwasampleapp/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("pwasampleapp/tests/unit/models/employee-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | employee', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('employee', {});
      assert.ok(model);
    });
  });
});
define("pwasampleapp/tests/unit/models/post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("pwasampleapp/tests/unit/models/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define("pwasampleapp/tests/unit/routes/create-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:create');
      assert.ok(route);
    });
  });
});
define("pwasampleapp/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("pwasampleapp/tests/unit/routes/posts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define("pwasampleapp/tests/unit/routes/users-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | users', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:users');
      assert.ok(route);
    });
  });
});
define("pwasampleapp/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('pwasampleapp/config/environment', [], function() {
  var prefix = 'pwasampleapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('pwasampleapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
