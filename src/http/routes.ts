import { register } from "./controllers/register";
import { FastifyInstance } from "fastify"

export async function appRoutes(app: FastifyInstance) {
    app.post('/scheduling', register)
    // app.get('/scheduling consult', register)
}