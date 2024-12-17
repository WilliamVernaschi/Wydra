import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AudiotecaPage } from './audioteca.page';

describe('Tab3Page', () => {
  let component: AudiotecaPage;
  let fixture: ComponentFixture<AudiotecaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiotecaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiotecaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
