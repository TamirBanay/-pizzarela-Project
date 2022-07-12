import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">צרו קשר</h1>
      <div className="contact-container">
        <div className="contact-subtitle">
          אתם מוזמנים לשלוח לנו הודעה אבל קחו בחשבון שלפעמים לוקח לנו זמן לענות.
         לקבל שרות מיידי בבקשה תתקשרו למסעדה. להזמנת מקומות יש להתקשר ישירות למסעדה.
          
        </div>
        <table>
          <tr></tr>
        </table>

        <ol className="send-messege">
          <p></p>
          <form class="" action="mailto:banay9329@gmail.com" method="post">
            <div className="name-email">
              <div className="name">
                <label className="label-name">שם:</label>
                <br></br>
                <input className="input-text" type="text" />
              </div>
              <div className="email">
                <label className="label-name">אימייל: </label>
                <br></br>

                <input className="input-email" type="email" />
              </div>
            </div>
            <br />
            <div className="send">
              <label className="label-messege">מה תרצה להגיד לנו?</label>
              <br />
              <textarea name="name" rows="5" cols="30"></textarea>
              <br />
              <input className="Button-send" type="submit" name="" />
            </div>
          </form>
        </ol>
      </div>
    </div>
  );
}
