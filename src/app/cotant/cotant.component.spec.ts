import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotantComponent } from './cotant.component';

describe('CotantComponent', () => {
  let component: CotantComponent;
  let fixture: ComponentFixture<CotantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
