import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';


@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent implements OnInit {
  posts = [];
  slides = [];

  constructor(private wpApiPosts: WpApiPosts) { 
    this.getPosts();
  }

  ngOnInit() {
  }

  carouselOptions = {
    margin: 25,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }
 
  


  getPosts() {
    this.wpApiPosts.getList()
    .toPromise()
    .then( response => {
      let json: any = response.json();
      this.posts = json;
      console.log(json) 
    });
  }

}
