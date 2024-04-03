import emailjs from 'emailjs-com';

export class EmailSender {
  constructor() {
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    this.userId = import.meta.env.VITE_EMAILJS_USER_ID;
  }

  setParams(params) {
    this.templateParams = params;
  }

  sendEmail() {
    console.log('Sending email...');
    emailjs.send(
      this.serviceId,
      this.templateId,
      this.templateParams,
      this.userId
    ).then((response) => {
      console.log('Email sent successfully!', response);
    }).catch((error) => {
      console.error('Email sending failed:', error);
    });
  }
}

