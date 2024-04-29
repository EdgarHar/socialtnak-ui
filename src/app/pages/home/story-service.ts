import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StoryDto} from "./story-dto";

@Injectable({ providedIn: 'root' })
export class StoryService {

  private readonly BASE_URL: string = "https://aua-creative.socialtnak.live/story";

  private readonly httpClient: HttpClient = inject(HttpClient);

  fetchStory(): Observable<StoryDto> {
    return this.httpClient.get<StoryDto>(this.BASE_URL);
  }

}
