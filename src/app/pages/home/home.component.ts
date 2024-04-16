import {Component, inject, OnInit} from '@angular/core';
import {StoryDto} from "./story-dto";
import {StoryService} from "./story-service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private readonly storyService: StoryService = inject(StoryService);

  storyDto: StoryDto | undefined;

  ngOnInit() {
    this.getStory();
  }

  getStory(): void {
    this.storyService
      .fetchStory()
      .subscribe((data: StoryDto) => {
        this.storyDto = data;
      })
  };
}
