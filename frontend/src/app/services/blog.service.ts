import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogModel  {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private API_BASE = 'https://api.codetoroad.in';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>(`${this.API_BASE}/api/blog`);
  }
}