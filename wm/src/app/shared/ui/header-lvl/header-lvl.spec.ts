import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLvl } from './header-lvl';

describe('HeaderLvl', () => {
  let component: HeaderLvl;
  let fixture: ComponentFixture<HeaderLvl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLvl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLvl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
