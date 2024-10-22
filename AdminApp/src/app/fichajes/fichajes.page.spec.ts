import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FichajesPage } from './fichajes.page';

describe('FichajesPage', () => {
  let component: FichajesPage;
  let fixture: ComponentFixture<FichajesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichajesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FichajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
