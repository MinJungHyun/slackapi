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
