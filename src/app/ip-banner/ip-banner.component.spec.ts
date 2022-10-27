import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBannerComponent } from './ip-banner.component';

describe('IpBannerComponent', () => {
  let component: IpBannerComponent;
  let fixture: ComponentFixture<IpBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
