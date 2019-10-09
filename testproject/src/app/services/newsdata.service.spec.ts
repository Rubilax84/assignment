import {TestBed} from '@angular/core/testing';

import {NewsDataService} from './news-data.service';

describe('NewsdataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NewsDataService = TestBed.get(NewsDataService);
        expect(service).toBeTruthy();
    });
});
