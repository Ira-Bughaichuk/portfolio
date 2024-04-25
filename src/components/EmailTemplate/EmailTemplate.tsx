

interface EmailTemplateProps {
  senderEmail: string;
  message: string;
  //name: string;
        // company: string;
        // tell: string;
  
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderEmail, message
 // name, company, tell
}) => (
  <div>
    <h1>Welcome, {senderEmail}!</h1>
    <p>{message}</p>
    {/* <p>{name} {company} {tell}</p> */}
  </div>
);

export default EmailTemplate;