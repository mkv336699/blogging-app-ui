import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const headers: HttpHeaders = req.headers.set('authorization', 'abcd');
  
  let customReq = req.clone({ url: "http://localhost:3000" + req.url, headers });// .set .url = "https://api.github.com/"
  req = customReq;
  
  return next(req);
}