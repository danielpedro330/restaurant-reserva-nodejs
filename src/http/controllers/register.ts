import z, { string } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        restaurant: z.string(),
        date: z.string().refine(val => !isNaN(Date.parse(val)), {
            message: "Data inválida!"
        }),
        email: z.string().email(),
        phone: z.string()
    })

    const { name, restaurant, email, date, phone } = registerBodySchema.parse(request.body)

    const reservate = await prisma.reservate.create({
        data: {
            name,
            restaurant,
            date,
            email,
            phone,
        }
    })

    return reply.status(201).send()
}