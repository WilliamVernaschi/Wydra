import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BuscaPage } from './busca.page';

describe('Tab2Page', () => {
  let component: BuscaPage;
  let fixture: ComponentFixture<BuscaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
