import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsdataComponent} from './newsdata.component';

describe('NewsdataComponent', () => {
    let component: NewsdataComponent;
    let fixture: ComponentFixture<NewsdataComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsdataComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsdataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
