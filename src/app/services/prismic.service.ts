import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs'
import * as prismic from "@prismicio/client";


@Injectable({ providedIn: 'root'})
export class PrismicService {

  constructor() {
  }
  getPosts() {
    let client = prismic.createClient("digitalbackyard");
    return client.getAllByType("post");
  }

  getPost(id: string) {
    let client = prismic.createClient("digitalbackyard");
    return client.getByUID("post",id);
  }

}

