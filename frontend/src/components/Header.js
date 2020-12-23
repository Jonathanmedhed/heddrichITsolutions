import React, { useState, useRef } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { SlideMenu } from 'primereact/slidemenu'
import mainMobileImg from './phone.png'
import mainPcImg from '../images/pc.png'

const Header = ({ history, goTo }) => {
	const [showSidebar, setShowSidebar] = useState(false)

	const sideBarItems = [
		{
			label: 'Inicio',
			className: 'option',
			command: (event) => {
				setShowSidebar(false)
			},
		},
		{
			label: 'Productos',
			className: 'option',
			command: (event) => {
				history.push('/products')
				setShowSidebar(false)
			},
		},
		{
			label: 'Contacto',
			className: 'option',
			command: (event) => {
				history.push('/contactus')
				setShowSidebar(false)
			},
		},
	]

	return (
		<header className="navbar">
			<div className="content">
				<div className="title">
					<div className="title-content">
						<div className="top">heddrich</div>
						<div className="mid">IT</div>
						<div className="bot">soluciones</div>
					</div>
				</div>
				<div className="options">
					<span onClick={() => goTo('info')} className="option">
						Información
					</span>
					<span onClick={() => goTo('prices')} className="option">
						Precios
					</span>
					<span onClick={() => goTo('contact')} className="option">
						Contacto
					</span>
				</div>
			</div>
			<div className="jumbo">
				<div className="left-content">
					<h1>Tu Negocio en la Web</h1>
					<p>Aumenta tus ventas en cuestión de días, llega a clientes a los cuales nunca habías llegado.</p>
					<div className="buttons">
						<button onClick={() => goTo('info')} className="btn btn-white">
							Información
						</button>
						<button onClick={() => goTo('contact')} className="btn btn-white">
							Contáctanos
						</button>
					</div>
				</div>
				<div className="right-content">
					<img className="mobile" src={mainMobileImg} alt="phone-header"></img>
					<img className="pc" src={mainPcImg} alt="pc-header"></img>
				</div>
			</div>
			<div className="bottom">
				<span className="bottom-option">
					<i className="fas fa-truck-loading"></i>
				</span>
				<span className="bottom-option">
					<i className="fas fa-store"></i>
				</span>
				<span className="bottom-option">
					<i className="fas fa-cash-register"></i>
					<span className="bottom-option">Bs</span>
					<span className="bottom-option">$</span>
				</span>
			</div>
			<Sidebar visible={showSidebar} onHide={() => setShowSidebar(false)}>
				<div className="title-sidebar">
					<div className="text">Tienda</div>
				</div>
				<SlideMenu model={sideBarItems} />
			</Sidebar>
		</header>
	)
}

export default Header
