import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ObjectiveServiceBase } from "./base/objective.service.base";

@Injectable()
export class ObjectiveService extends ObjectiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
