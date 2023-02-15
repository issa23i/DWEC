import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSearchComponent } from './ver-search.component';

describe('VerSearchComponent', () => {
  let component: VerSearchComponent;
  let fixture: ComponentFixture<VerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
