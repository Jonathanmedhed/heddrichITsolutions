import React, { useState } from 'react'

const Footer = () => {
	const [showPhone, setShowPhone] = useState(false)
	const [showWhatsapp, setShowWhatsapp] = useState(false)
	const [showEmail, setShowEmail] = useState(false)

	const selectSocial = (option) => {
		setShowPhone(false)
		setShowWhatsapp(false)
		setShowEmail(false)

		switch (option) {
			case 'phone':
				setShowPhone(true)
				break
			case 'whatsapp':
				setShowWhatsapp(true)
				break
			case 'email':
				setShowEmail(true)
				break
			default:
				break
		}
	}

	return (
		<footer>
			{(showEmail || showPhone || showWhatsapp) && (
				<div className="social-info hide-sm">
					{showPhone && '04126289924'}
					{showWhatsapp && '+584126289924'}
					{showEmail && 'heddrichitsolutions@gmail.com'}
				</div>
			)}
			<div className={showEmail || showPhone || showWhatsapp ? 'social mt-1' : 'social'}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={'https://www.instagram.com/heddrichitsoluciones/'}
					className="sub-item"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a href={`tel:04126289924`} className="sub-item show-sm">
					<i class="fas fa-phone"></i>
				</a>
				<a onClick={() => selectSocial('phone')} className="sub-item hide-sm">
					<i class={showPhone ? 'fas fa-phone bg-light' : 'fas fa-phone'}></i>
				</a>
				<a href={`https://wa.me/+584126289924`} className="sub-item show-sm">
					<i class="fab fa-whatsapp"></i>
				</a>
				<a onClick={() => selectSocial('whatsapp')} className="sub-item hide-sm">
					<i class={showWhatsapp ? 'fab fa-whatsapp bg-light' : 'fab fa-whatsapp'}></i>
				</a>
				<a href={`mailto:heddrichitsolutions@gmail.com`} className="sub-item show-sm">
					<i class="far fa-envelope"></i>
				</a>
				<a onClick={() => selectSocial('email')} className="sub-item hide-sm">
					<i class={showEmail ? 'far fa-envelope bg-light' : 'far fa-envelope'}></i>
				</a>
			</div>
			<div class="logo-section">
				<div className="title">
					<div className="title-content">
						<div className="top">heddrich</div>
						<div className="mid">IT</div>
						<div className="bot">soluciones</div>
					</div>
				</div>
			</div>
			<div className="bottom">
				derechos revervados <i class="far fa-copyright"></i> <strong>heddrich IT soluciones</strong>
			</div>
		</footer>
	)
}

export default Footer
