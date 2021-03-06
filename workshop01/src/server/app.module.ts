import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
