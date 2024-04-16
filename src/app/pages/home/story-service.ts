import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResponse} from "../../api-response";
import {StoryDto} from "./story-dto";

@Injectable({ providedIn: 'root' })
export class StoryService {

  private readonly httpClient: HttpClient = inject(HttpClient);

  public fetchStory(): Observable<ApiResponse<StoryDto>> {
    return this.httpClient.get<ApiResponse<StoryDto>>("aua.socialtnak.live/text");
  }

}
