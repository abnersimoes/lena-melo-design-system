import { dedupeMixin } from '@open-wc/dedupe-mixin';

export const ButtonMixin = dedupeMixin(
  superClass =>
    class ButtonMixin extends superClass {
      _handleClick() {
        const event = new Event('on-click');
        this.dispatchEvent(event);
      }
    }
);
