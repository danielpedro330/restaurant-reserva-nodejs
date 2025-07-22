import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'empresaaniel@gmail.com',
        pass: 'Aniel2025'
    }
})

export async function enviarSMSviaEmail(userEmail, mensagem) {
    transporter.sendMail({
        from: '',
        to:'',
        subject: '',
        text:'Saudações! Aqui estão os dados da sua reserva' + mensagem
    })
}