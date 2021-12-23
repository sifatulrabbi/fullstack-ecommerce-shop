import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Request } from "express";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx: Request = context.switchToHttp().getRequest();
    console.log("Before..." + ctx.url);

    const before = Date.now();
    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - before}ms`)));
  }
}
