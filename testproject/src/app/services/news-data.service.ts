import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const ENDPOINT = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
const DATA_UPDATE_DELAY = 10e3;

interface IResponse {
    hits;
}

interface IHit {
    author;
    title;
    url;
    created_at;
}

@Injectable({
    providedIn: 'root'
})
export class NewsDataService {
    public cashedNews: Subject<IHit[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        const fetchData = () => this.http.get(ENDPOINT).pipe(map((data: IResponse) => {
            return data.hits;
        }));

        timer(0, DATA_UPDATE_DELAY).pipe(map(_ => fetchData())).subscribe(o => {
            o.subscribe(data => this.cashedNews.next(data));
        });
    }

}
