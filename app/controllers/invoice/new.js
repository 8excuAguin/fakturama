import ItemForm from "faktura/forms/item";
import ExchangeRateMixin from "faktura/lib/exchange_rate_mixin";

var InvoiceNewController = Ember.ObjectController.extend(ExchangeRateMixin, {
    isRemoveItemDisabled: function () {
        return this.get("items.length") <= 1;
    }.property("items.@each"),

    actions: {
        saveRecord: function () {
            var controller = this;

            this.set("isSubmitted", true);

            this.get("content").save().then(function () {
                controller.transitionToRoute("invoices");
            });
        },

        addItem: function () {
            this.get("content").addItem();
        },

        removeItem: function (item) {
            this.get("items").removeObject(item);
        }
    }
});

export default InvoiceNewController;
