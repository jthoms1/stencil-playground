/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppLoading {}
  interface AppProfile {
    'personId': number;
  }
  interface AppRoot {}
  interface StencilSuspense {
    'fallback': () => any;
  }
}

declare global {


  interface HTMLAppLoadingElement extends Components.AppLoading, HTMLStencilElement {}
  var HTMLAppLoadingElement: {
    prototype: HTMLAppLoadingElement;
    new (): HTMLAppLoadingElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLStencilSuspenseElement extends Components.StencilSuspense, HTMLStencilElement {}
  var HTMLStencilSuspenseElement: {
    prototype: HTMLStencilSuspenseElement;
    new (): HTMLStencilSuspenseElement;
  };
  interface HTMLElementTagNameMap {
    'app-loading': HTMLAppLoadingElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'stencil-suspense': HTMLStencilSuspenseElement;
  }
}

declare namespace LocalJSX {
  interface AppLoading {}
  interface AppProfile {
    'personId'?: number;
  }
  interface AppRoot {}
  interface StencilSuspense {
    'fallback'?: () => any;
  }

  interface IntrinsicElements {
    'app-loading': AppLoading;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'stencil-suspense': StencilSuspense;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-loading': LocalJSX.AppLoading & JSXBase.HTMLAttributes<HTMLAppLoadingElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'stencil-suspense': LocalJSX.StencilSuspense & JSXBase.HTMLAttributes<HTMLStencilSuspenseElement>;
    }
  }
}


