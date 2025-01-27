import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtofolioComponenComponent } from './protofolio-componen.component';

describe('ProtofolioComponenComponent', () => {
  let component: ProtofolioComponenComponent;
  let fixture: ComponentFixture<ProtofolioComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtofolioComponenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtofolioComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
