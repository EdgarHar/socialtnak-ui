import {Component, inject, Input} from '@angular/core';
import {StoryDto} from "./story-dto";
import {StoryService} from "./story-service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly storyService: StoryService = inject(StoryService);

  @Input() storyDto: StoryDto = {
    text: "Default quote text",
    firstName: "John",
    lastName: "Doe",
    username: "",
    password: ""
  };

  ngOnInit() {
    this.getStory();
  }

  getStory(): void {
    this.storyService
      .fetchStory()
      .pipe(
        map(response => response.data)
      )
      .subscribe((data: StoryDto) => {
        this.storyDto = data;
      })
  };
}
