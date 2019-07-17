import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';
import { map } from 'rxjs/operators';
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: HttpClient){
        super(http);
    }

    getBill(): Observable<Bill>{
        return this.get('bill');
    }

    updateBill(bill: Bill): Observable<Bill>{
        return this.put('bill', bill);
    }

    getCurrency(base: string = 'RUB'){
        return this.http.get(`http://data.fixer.io/api/latest?access_key=97622f51031422a3063435dfd1a61a3e&symbols=${base},USD`)
        .pipe(map((response: Response)=>{
            return response;
        }))
    }


}
