import { Component, ComponentInterface, Prop, State, getElement } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'stencil-suspense',
  shadow: true,
})
export class AppProfile implements ComponentInterface {
  @Prop() fallback: () => any;
  @State() childRendered: boolean = false;

  componentDidRender() {
    const elem = getElement(this);
    const shadow = elem.shadowRoot;
    const childNode = Array.from(shadow.childNodes)[0];

    let stencilSuspenseElem = this;
    (childNode as HTMLStencilElement).componentOnReady().then(() => {
      stencilSuspenseElem.childRendered = true;
    });
  }

  render() {
    if (!this.childRendered) {
      return this.fallback();
    }
  }
}
