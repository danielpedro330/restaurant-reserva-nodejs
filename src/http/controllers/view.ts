import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export async function view(resquest: FastifyRequest, reply: FastifyReply) {
    const reservate = await prisma.reservate.findMany({ select: {name: true, email: true, restaurant: true, date: true} })

        return reservate
    }
