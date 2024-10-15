import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpezarTrabajoComponent } from './empezar-trabajo.component';

describe('EmpezarTrabajoComponent', () => {
  let component: EmpezarTrabajoComponent;
  let fixture: ComponentFixture<EmpezarTrabajoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpezarTrabajoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpezarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
