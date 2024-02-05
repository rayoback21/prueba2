import { Module } from '@nestjs/common';
import { ConstructionService } from './construction.service';
import { ConstructionController } from './construction.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ConstructionController],
  providers: [ConstructionService],
  imports : [PrismaModule],
})
export class ConstructionModule {}
