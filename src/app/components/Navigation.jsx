"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

import "../styles/navigation.css";
import whiteLogo from "../images/white_logo.svg";
import purpleLogo from "../images/purple_logo.svg";
import polygon from "../images/polygon.svg";
import helpIcon from "../images/help_icon.svg";
import appsIcon from "../images/apps_icon.svg";
import ballonLogo from "../images/ballon_logo.svg";
import levelLogo from "../images/level_logo.svg";
import trophyLogo from "../images/trophy_logo.svg";
import Link from "next/link";

const Card = ({ icon, title, subtitle, width, height }) => {
	return (
		<div className="card">
			<div className="card_icon">
				<Image src={icon} alt={title} width={width} height={height} />
			</div>
			<div className="card_content">
				<p className="card_title">{title}</p>
				<p className="card_subtitle">{subtitle}</p>
			</div>
		</div>
	);
};

function Navigation() {
	const router = useRouter();
	return (
		<nav>
			<div className="fullHeader">
				<div className="firstHeader">
					<Image
						priority
						className="firstHeader_Image"
						src={whiteLogo}
						alt="sensedia white logo"
						width={141}
						height={39}
					/>
				</div>
				<div className="secondHeader">
					<div className="secondHeader_DivLeft">
						<Image
							className="secondHeader_Image"
							src={purpleLogo}
							alt="sensedia purple logo"
							width={32}
							height={32}
						/>
						<p className="secondHeader_Text">BIENVENIDO</p>
						<Image
							className="secondHeader_Polygon"
							src={polygon}
							alt="Polygon"
							width={10}
							height={6}
						/>
						<ul className="pageList">
							<Link href="/users/new">
								<li
									className="pageList_item"
									onClick={() => {
										router.push(`/register`);
									}}
								>
									Registro
								</li>
							</Link>
							<Link href="/users">
								<li
									className="pageList_item"
									onClick={() => {
										router.push(`/users`);
									}}
								>
									Usuarios
								</li>
							</Link>
						</ul>
					</div>
					<div className="secondHeader_DivRight">
						<Image
							className="secondHeader_Image"
							src={helpIcon}
							alt="Help icon"
							width={32}
							height={32}
						/>
						<Image
							className="secondHeader_Image"
							src={appsIcon}
							alt="Apps icon"
							width={32}
							height={32}
						/>
						<div className="verticalBar"></div>
						<div className="userLogo">
							<div className="userLogo_logo">UN</div>
							<p>Nombre de usuario</p>
						</div>
					</div>
				</div>
				<div className="thirdHeader">
					<Card
						icon={ballonLogo}
						title="Tipo de cancha"
						subtitle="sociedad"
						width={50}
						height={52}
					/>
					<Card
						icon={levelLogo}
						title="Nivel"
						subtitle="semiprofesional"
						width={52}
						height={52}
					/>
					<Card
						icon={trophyLogo}
						title="Victorias"
						subtitle="345"
						width={52}
						height={52}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
