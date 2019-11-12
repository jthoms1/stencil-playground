import { Component, ComponentInterface, Prop, h } from '@stencil/core';

type Person = {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile implements ComponentInterface {
  @Prop() personId: number;
  users: Person[] = [];

  async componentDidLoad() {
    this.users = await fetch('/assets/people.json').then(value => value.json());
  }

  render() {
    const user = this.users.find(u => u.id == this.personId)
    return (
      <div class="app-profile">
        <p>
          Hello! My name is {user.firstName} {user.lastName}. My name was passed in
          through a route param!
        </p>
      </div>
    );
  }
}
