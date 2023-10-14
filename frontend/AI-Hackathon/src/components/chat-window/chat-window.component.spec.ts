import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowComponent } from './chat-window.component';
import { HttpClientModule } from '@angular/common/http';

describe('ChatWindowComponent', () => {
  let component: ChatWindowComponent;
  let fixture: ComponentFixture<ChatWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ChatWindowComponent]
    });
    fixture = TestBed.createComponent(ChatWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let div = fixture.debugElement.nativeElement.querySelector('div');
    div.click();

    spyOn(component['audioPlayer']['audioObj'],'play').and.callFake(async ()=>{});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
