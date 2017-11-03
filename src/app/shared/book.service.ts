import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Book } from './book';
import { ApiSend } from './apiSend';
import { ApiResponse } from './apiResponse';
import { GenericPost } from './genericPost';


@Injectable()
export class BookService {
    
    private baseUrl = 'http://michb.net/webAPI/generic/v1/Generic/';

    constructor(private http: Http) {
    }
    apiSend: ApiSend = new ApiSend();
   

    getBook(Id: number): Observable<Book> {
        var url = "http://michb.net/webAPI/generic/v1/Generic/api/Generic/getItemsSQL";
        var values = new ApiSend();
        values.p_entity = "tblBook";
        values.p_sqlWhere = "Id = " + Id;
        values.p_entity_sql = "tblBook";
        values.p_sqlOrder = " Order By Id";

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       
        //var values = {};
        //var tblItem = "tblBook";
        var param = JSON.stringify(values);
        options.body = param;


        var ret = this.http.post(url, param, options)
            .map(this.extractDataPost)
            .do(data => console.log('get: '))
            .catch(this.handleError);
        var test2 = ret;
        return ret;

        //var values = {};
        //values.p_sqlWhere = pKey + " = " + recId;
        //values.p_sqlOrder = " Order By " + pKey;
        //values.p_entity = tblItem;
        //values.p_entity_sql = $rootScope.tblItemSQL
        //values.p_returnTarget = "about";
        //var newParam2 = JSON.stringify(values);

        //if (link === undefined) {
        //    //sample linkId for testing/demo with no email link
        //    this.url = this.url + "/73973aed-9293-46fa-8b96-d0820c3f1128";
        //}
        //else {
        //    this.url = this.url + '/' + link;
        //}

        //return this.http.get(this.url)
        //    .map(this.extractData)
        //    .catch(this.handleErrors);
     //   return null;
    }

    getBooks(): Observable<Book[]> {

        var url = "api/Generic/getItems?entName=tblBook";
        var ret = this.http.get(this.baseUrl+url)
            .map(this.extractData)
            .do(data => console.log('getBooks: '))
            .catch(this.handleError);
       // var test = JSON.parse(ret.t);
        return ret;
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        //var values = {};
        //var tblItem = "tblBook";
        //var param = JSON.stringify(values);
        //return this.http.post(this.baseUrl, param, options)
        //    .map(this.extractData)
        //    .do(data => console.log('get: ' + JSON.stringify(data)))
        //    .catch(this.handleError);
    }
    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
      //  var test2 = JSON.parse(body.data);
        var test = JSON.parse(body);
        return test || {};
      //  return body.data || {};
    }
    private extractDataPost(response: Response) {
        let body = response.json();
        //  var test2 = JSON.parse(body.data);
      //  var test = JSON.parse(body.Data[0]);
        var test2 = body.Data[0];
       // var test3 = JSON.parse(test2);
        return test2 || {};
        //  return body.data || {};
    }
}
