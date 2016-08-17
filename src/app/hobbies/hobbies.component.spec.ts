/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HobbiesComponent } from './hobbies.component';

describe('Component: Hobbies', () => {
  it('should create an instance', () => {
    let component = new HobbiesComponent();
    expect(component).toBeTruthy();
  });
});
