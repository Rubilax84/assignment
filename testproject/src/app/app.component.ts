import {Component, OnInit} from '@angular/core';
import {NewsDataService} from './services/news-data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'testproject';
    hitsData: any = null;
    selectedHitData;

    constructor(private newsService: NewsDataService,
                private modalService: NgbModal) {

    }

    ngOnInit(): void {
        this.newsService.cashedNews.subscribe(v => {
            this.hitsData = v;
        });
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    onRowClick(content, data) {
        this.selectedHitData = JSON.stringify(data, null, '\t');
        this.open(content);
    }
}
