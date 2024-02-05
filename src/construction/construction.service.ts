import { Injectable } from '@nestjs/common';
import { CreateConstructionDto } from './dto/create-construction.dto';
import { UpdateConstructionDto } from './dto/update-construction.dto';
import { PrismaService } from 'src/prisma/prisma.service'; 

@Injectable()
export class ConstructionService {
  constructor (private prisma: PrismaService){}

  create(createConstructionDto: CreateConstructionDto) {

    return this.prisma.construction.create({ data: createConstructionDto});
  }

  findAll() {
    return `This action returns all construction`;
  }

findExtinct(){
    return this.prisma.construction.findMany({where: {extinct: true} });
  }

  findOne(id: number) {

    return this.prisma.construction.findUnique({where: {id} });
  }

  update(id: number, updateConstructionDto: UpdateConstructionDto) {

    return this.prisma.construction.update({
      where:{id},
      data :updateConstructionDto,
    });
  }

  remove(id: number) {

    return this.prisma.construction.delete({ where : {id} });
  }
}
