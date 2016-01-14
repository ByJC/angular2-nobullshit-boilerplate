import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: "observables",
  directives: [RouterLink],
  styles: [require('!raw!autoprefixer?browsers=last 2 versions!sass!./index.scss')],
  template: require('./index.html')
})
export class Observables {
    sentence: string;
    sentenceTransformed: string;

    constructor() {
        this.sentence = "First sentence to add";
    }

    ngOnInit() {
        console.log('[Component] observables running');
    }

    AddSentenceToList() {

    }
}
