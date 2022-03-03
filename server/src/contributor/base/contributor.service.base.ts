/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Contributor, HealthArea, Objective } from "@prisma/client";

export class ContributorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContributorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorFindManyArgs>
  ): Promise<number> {
    return this.prisma.contributor.count(args);
  }

  async findMany<T extends Prisma.ContributorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorFindManyArgs>
  ): Promise<Contributor[]> {
    return this.prisma.contributor.findMany(args);
  }
  async findOne<T extends Prisma.ContributorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorFindUniqueArgs>
  ): Promise<Contributor | null> {
    return this.prisma.contributor.findUnique(args);
  }
  async create<T extends Prisma.ContributorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorCreateArgs>
  ): Promise<Contributor> {
    return this.prisma.contributor.create<T>(args);
  }
  async update<T extends Prisma.ContributorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorUpdateArgs>
  ): Promise<Contributor> {
    return this.prisma.contributor.update<T>(args);
  }
  async delete<T extends Prisma.ContributorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContributorDeleteArgs>
  ): Promise<Contributor> {
    return this.prisma.contributor.delete(args);
  }

  async findHeathArea(
    parentId: string,
    args: Prisma.HealthAreaFindManyArgs
  ): Promise<HealthArea[]> {
    return this.prisma.contributor
      .findUnique({
        where: { id: parentId },
      })
      .heathArea(args);
  }

  async findObjectives(
    parentId: string,
    args: Prisma.ObjectiveFindManyArgs
  ): Promise<Objective[]> {
    return this.prisma.contributor
      .findUnique({
        where: { id: parentId },
      })
      .objectives(args);
  }
}
