import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsResourcesComponent } from './aws.component';

describe('AwsComponent', () => {
  let component: AwsResourcesComponent;
  let fixture: ComponentFixture<AwsResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
