1. 프로젝트 생성  
   nest new slackapi

2. port 정리  
   const port = process.env.PORT || 3000;  
   await app.listen(port);

   console.log(`Server running on port ${port}`);

3. hot reload 적용  
   링크[https://docs.nestjs.com/recipes/hot-reload]

4. dotenv config
   npm i --save @nestjs/config
   this.configService.get('DB_PASSWORD')

5. 동적 env load
   강의 ConfigModule 사용하기 (dotenv 진화판) 8:56

6. middleware를 이용한 logger
   export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer): any {
   consumer.apply(LoggerMiddleware).forRoutes('\*');
   }
   }
   forRoutes(컨트롤러)나
   forRoutes(주소)로 특정 주소에만 미들웨어 적용 가능합니다.

   - 미들웨어 쓸때는 next() 꼭 써야한다
   - 미들웨어는 라우터보다 먼저 실행됨
     결과값 : [Nest] 4984 - 2022. 07. 10. 오후 9:13:51 LOG [HTTP] GET /env 304 - - Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36 ::1
