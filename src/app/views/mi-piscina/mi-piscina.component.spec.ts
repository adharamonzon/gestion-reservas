import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPiscinaComponent } from './mi-piscina.component';
import it from '@angular/common/locales/it';
import { describe, beforeEach } from 'node:test';

describe('MiPiscinaComponent', () => {
  let component: MiPiscinaComponent;
  let fixture: ComponentFixture<MiPiscinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPiscinaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MiPiscinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
