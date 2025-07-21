import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export async function view(resquest: FastifyRequest, reply: FastifyReply) {
    // const requestBody = await prisma.reservate.
}