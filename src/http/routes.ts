import { register } from "./controllers/register";
import { FastifyInstance } from "fastify"
import { view } from "./controllers/view";

export async function appRoutes(app: FastifyInstance) {
    app.post('/scheduling', register)
    app.get('/scheduling consult', view)
}