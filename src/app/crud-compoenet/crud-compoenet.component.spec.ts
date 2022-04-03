import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompoenetComponent } from './crud-compoenet.component';

describe('CrudCompoenetComponent', () => {
  let component: CrudCompoenetComponent;
  let fixture: ComponentFixture<CrudCompoenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCompoenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCompoenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
