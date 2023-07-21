import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { SiGmail, SiReplit } from "react-icons/si";
import homestyle from "./css/homepage.module.css";
import globalStyle from "../../global/global.module.css";
export default function Contact() {
	return (
		<div
			className={`${homestyle.contactSection} ${homestyle.section}`}
			id="contact"
		>
			<h2 className={homestyle.title}>
				<em>Contact Me</em>
			</h2>
			<div className={`${homestyle.message_area}`}>
				<form>
					<label htmlFor="message">Enter your message</label>
					<textarea name="message" id="" cols={30} rows={10}></textarea>
					<label htmlFor="send-name">Enter your name</label>
					<input type="text" name="sender-name" />
					<label htmlFor="sender-email">Enter your e-mail</label>
					<input type="email" name="sender-email" id="" />
					<div>
						<input type="button" value="submit" />
					</div>
				</form>
			</div>
			<div className={homestyle.contactInfo}>
				<div>
					<div>
						<i className="icon">
							<BsGithub />
						</i>
						<a
							href="http://github.com/dshaw0004"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							Github
						</a>
					</div>
					<div>
						<i className="icon">
							<BsLinkedin />
						</i>
						<a
							href="https://www.linkedin.com/in/dshaw0004"
							target="_blank"
							rel="nofollow"
						>
							LinkedIn
						</a>
					</div>
					<div>
						<i className="icon">
							<BsTwitter />
						</i>
						<a
							href="https://twitter.com/dshaw0004"
							target="_blank"
							rel="nofollow"
						>
							Twitter
						</a>
					</div>
					<div>
						<i className="icon">
							<FaDev />
						</i>
						<a href="https://dev.to/dshaw0004" rel="nofollow" target="_blank">
							Dev.to
						</a>
					</div>
					<div>
						<i className="icon">
							<SiReplit />
						</i>
						<a href="https://replit.com/@dsx4" rel="nofollow" target="_blank">
							Replit
						</a>
					</div>
					<div>
						<i className="icon">
							<SiGmail />
						</i>
						<a
							href="mailto:dipankarshaw692+fromsite@gmail.com"
							rel="nofollow"
							target="_parent"
						>
							Mail
						</a>
					</div>
				</div>
			</div>
			<div
				className={`${globalStyle.textCenter} ${homestyle.chat_bot_link_container}`}
			>
				<b>Want a different way to talk to me</b>
				<br />
				<strong className={`${homestyle.chat_bot}`}>
					<a
						href="https://telegram.me/dshawpersonalbot"
						target="_blank"
						rel="noopener noreferrer"
					>
						chat with my bot
					</a>
				</strong>
			</div>
		</div>
	);
}
