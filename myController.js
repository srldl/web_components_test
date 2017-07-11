 "use strict";

 var myController = function ($scope, $controller) {

 var SpecialInputProto = Object.create(HTMLElement.prototype);

 SpecialInputProto.createdCallback = function () {

      // getting initial value of value attribute
      var value = this.hasAttribute('value') ?
                  this.getAttribute('value') : '';

      var template = document.querySelector('template').content;

      // setting value property of input element
      template.querySelector('input').value = value;

      var shadowRoot = this.createShadowRoot();
      shadowRoot.appendChild(template.cloneNode(true));
    };

  SpecialInputProto.attributeChangedCallback = function (name, oldValue, newValue) {
  if (name === 'value') {
    this.shadowRoot.querySelector('input').value = newValue;
  }
};


    document.registerElement('special-input', {
        prototype: SpecialInputProto
    });

 };


 module.exports = myController;