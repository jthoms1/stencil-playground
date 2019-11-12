import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-suspense fallback={() => <app-loading></app-loading>}>
            <app-profile personId={1}></app-profile>
          </stencil-suspense>
        </main>
      </div>
    );
  }
}
