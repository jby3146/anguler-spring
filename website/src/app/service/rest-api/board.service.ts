import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiValidationService } from './common/api-validation.service';
import { Post } from 'src/app/model/board/Post';
import { ApiReponseList } from 'src/app/common/ApiReponseList';
import { ApiReponseSingle } from 'src/app/common/ApiReponseSingle';
@Injectable({
  providedIn: 'root'
})
export class BoardService {
 
  constructor(private http: HttpClient,
    private apiValidationService: ApiValidationService) {}
 
  private getBoardUrl = '/api/v1/board';
 
  getPosts(boardName: string): Promise<Post[]> {
    const getPostsUrl = this.getBoardUrl + '/' + boardName + '/posts';
    return this.http.get<ApiReponseList>(getPostsUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.list as Post[];
      })
      .catch(response => {
        alert('[게시판 조회 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
  addPost(boardName: string, author: string, title: string, content: string, msrl : number): Promise<Post> {
    const postUrl = this.getBoardUrl+'/'+boardName;
    const params = new FormData();
    params.append('author', author);
    params.append('title', title);
    params.append('content', content);
    params.append('msrl' , msrl.toString());
    return this.http.post<ApiReponseSingle>(postUrl, params)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.data as Post;
      })
      .catch(response => {
        alert('[게시글 등록 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
  viewPost(postId: number): Promise<Post> {
    const getPostUrl = this.getBoardUrl + '/post/' + postId;
    return this.http.get<ApiReponseSingle>(getPostUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.data as Post;
      })
      .catch(response => {
        alert('[게시글 조회 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
  modifyPost(post: Post): Promise<Post> {
    const postUrl = this.getBoardUrl + '/post/' + post.postId;
    const params = new FormData();
    params.append('author', post.author);
    params.append('title', post.title);
    params.append('content', post.content);
    return this.http.put<ApiReponseSingle>(postUrl, params)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.data as Post;
      })
      .catch(response => {
        alert('[게시글 수정 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
  deletePost(postId: number): Promise<boolean> {
    const deletePostUrl = this.getBoardUrl + '/post/' + postId;
    return this.http.delete<ApiReponseSingle>(deletePostUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(response => {
        return true;
      })
      .catch(response => {
        alert('[게시글 삭제 중 오류 발생]\n' + response.error.msg);   
        return Promise.reject(response.error.msg);
      });
  }
}