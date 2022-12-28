import { PrismaClient } from "@prisma/client";
import { APIGatewayEvent, APIGatewayProxyCallback, Context } from "aws-lambda";
const prisma = new PrismaClient();

exports.handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: APIGatewayProxyCallback
) => prisma.user.findMany();
