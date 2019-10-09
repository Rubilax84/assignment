import {Component, OnInit} from '@angular/core';
import {NewsDataService} from './services/news-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface IHit {
    author;
    title;
    url;
    created_at;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [DecimalPipe]
})
export class AppComponent implements OnInit {
    title = 'testproject';
    hitsData: any = null;
    selectedHitData;
    filtered: Observable<IHit[]>;
    filter = new FormControl('');

    constructor(private newsService: NewsDataService,
                private modalService: NgbModal) {

        this.filtered = this.filter.valueChanges.pipe(
            startWith(''),
            map(text => {
                return this.search(text);
            })
        );

    }

    ngOnInit(): void {
        this.newsService.cashedNews.subscribe(v => {
            this.hitsData = v;
            this.filter.setValue(this.filter.value || '');
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    onRowClick(content, data) {
        this.selectedHitData = JSON.stringify(data, null, '\t');
        this.open(content);
    }

    search(text: string): IHit[] {
        return this.hitsData.filter(hit => {
            const term = text.toLowerCase();
            return hit.title.toLowerCase().includes(term);
        });
    }
}
